import {
  ClassDeclaration,
  ConstructorDeclaration,
  Node,
  PropertyDeclaration,
  Scope,
} from 'ts-morph';

import { fail, ownConstructor } from '../index';
import {
  callable,
  forwardArguments,
  paramList,
  returnSuffix,
  returnType,
} from './callables';
import {
  className,
  constructorOf,
  fieldName,
  initName,
  interfaceMethods,
  isConstantsOnly,
  isGeneric,
  methodName,
} from './classes';
import { staticProperties } from './constants';
import { constructorBody } from './constructors';
import { Callable, Context } from './context';
import { declaredType } from './declarations';
import { docs } from './docs';
import { methodDeclaration } from './functions';

/**
 * The names of a class in Go
 */
interface Shape {
  name: string;
  /** Whether it has a type parameter for the type of `this` */
  generic: boolean;
  /** The type of the receiver, e.g. `PolicyStatement[T]` */
  self: string;
  /** The type parameters, e.g. `[T any]` */
  typeParams: string;
}

/**
 * The constructor of a class, which the init and the New function take
 */
interface Construction {
  constructor?: ConstructorDeclaration;
  callable?: Callable;
  params: string;
  hasDerived: boolean;
}

export function classDeclaration(ctx: Context, declaration: ClassDeclaration) {
  checkClass(declaration);
  const name = className(declaration);
  const statics = declaration
    .getProperties()
    .filter((property) => property.isStatic());
  if (isConstantsOnly(declaration)) {
    docs(ctx, declaration);
    staticProperties(ctx, statics, name);
    return;
  }

  ctx.classDecl = declaration;
  const generic = isGeneric(ctx, declaration);
  const shape: Shape = {
    name,
    generic,
    self: generic ? `${name}[T]` : name,
    typeParams: generic ? '[T any]' : '',
  };
  ctx.declareName(declaration, name);
  checkMemberNames(declaration);
  struct(ctx, declaration, shape);
  if (statics.length) {
    ctx.emit('');
    staticProperties(ctx, statics, name);
  }
  interfaceDeclaration(ctx, declaration, name);
  constructors(ctx, declaration, shape);
  methods(ctx, declaration, shape.self);
  ctx.classDecl = undefined;
}

function checkClass(declaration: ClassDeclaration) {
  const unsupported = [
    declaration.isAbstract(),
    declaration.getTypeParameters().length > 0,
    declaration.getImplements().length > 0,
    declaration.getDecorators().length > 0,
  ];
  if (unsupported.includes(true)) {
    fail(declaration, 'Unsupported class declaration');
  }
}

/**
 * Fails when two members of a class map to the same Go name
 */
function checkMemberNames(declaration: ClassDeclaration) {
  const names = new Set<string>(['self', 'MarshalJSON']);
  const base = declaration.getBaseClass();
  if (base) {
    names.add(className(base));
  }
  const check = (node: Node, name: string) => {
    if (names.has(name)) {
      fail(node, `Go name ${name} is already used`);
    }
    names.add(name);
  };
  for (const property of instanceProperties(declaration)) {
    check(property, fieldName(property));
  }
  for (const method of declaration.getMethods()) {
    if (method.isStatic() || method.getOverloads().length) {
      fail(method, 'Static methods and overloads are not supported');
    }
    check(method, methodName(method));
  }
}

function instanceProperties(
  declaration: ClassDeclaration,
): PropertyDeclaration[] {
  return declaration.getProperties().filter((property) => !property.isStatic());
}

/**
 * The struct, which embeds the struct of the base class
 */
function struct(ctx: Context, declaration: ClassDeclaration, shape: Shape) {
  const base = declaration.getBaseClass();
  const baseGeneric = base !== undefined && isGeneric(ctx, base);
  docs(ctx, declaration);
  ctx.braces(`type ${shape.name}${shape.typeParams} struct`, () => {
    if (base) {
      const baseName = ctx.qualify(declaration, base, className(base));
      const typeArg = shape.generic ? 'T' : `*${shape.name}`;
      ctx.emit(baseGeneric ? `${baseName}[${typeArg}]` : baseName);
    }
    if (shape.generic && !baseGeneric) {
      ctx.emit('// the statement, typed as the subclass');
      ctx.emit('self T');
    }
    for (const property of instanceProperties(declaration)) {
      structField(ctx, property);
    }
  });
}

function structField(ctx: Context, property: PropertyDeclaration) {
  if (property.hasQuestionToken()) {
    fail(property, 'Optional properties are not supported');
  }
  if (property.getScope() == Scope.Public) {
    docs(ctx, property);
  }
  ctx.emit(`${fieldName(property)} ${declaredType(ctx, property)}`);
}

/**
 * The interface of the last class with a type parameter, by which it can be referenced
 */
function interfaceDeclaration(
  ctx: Context,
  declaration: ClassDeclaration,
  name: string,
) {
  const methods = interfaceMethods(ctx, declaration);
  if (methods.length == 0) {
    return;
  }
  const interfaceName = `I${name}`;
  ctx.declareName(declaration, interfaceName);
  ctx.emit('');
  ctx.emit(
    `// ${interfaceName} has the methods of ${name}, by which it can be referenced`,
  );
  ctx.braces(`type ${interfaceName} interface`, () => {
    for (const method of methods) {
      const type = returnType(ctx, method);
      ctx.emit(`${callable(ctx, method).name}()${returnSuffix(type)}`);
    }
  });
}

/**
 * The init function for the structs that embed the struct, and the New function
 */
function constructors(
  ctx: Context,
  declaration: ClassDeclaration,
  shape: Shape,
) {
  ownConstructor(declaration);
  const constructor = constructorOf(declaration);
  const signature = constructor ? callable(ctx, constructor) : undefined;
  const construction: Construction = {
    constructor,
    callable: signature,
    params: signature ? paramList(signature) : '',
    hasDerived: declaration.getDerivedClasses().length > 0,
  };
  if (construction.hasDerived) {
    initFunction(ctx, declaration, shape, construction.params);
  }
  if (!shape.generic) {
    newFunction(ctx, declaration, shape.name, construction);
  }
}

function initFunction(
  ctx: Context,
  declaration: ClassDeclaration,
  shape: Shape,
  params: string,
) {
  const name = initName(ctx, declaration);
  ctx.declareName(declaration, name);
  ctx.emit('');
  ctx.emit(
    `// ${name} initializes the fields of ${shape.name}, for the structs that embed it`,
  );
  const selfParam = shape.generic ? ', self T' : '';
  ctx.braces(
    `func ${name}${shape.typeParams}(this *${shape.self}${selfParam}${params ? `, ${params}` : ''})`,
    () => constructorBody(ctx, declaration, shape.generic ? 'self' : 'this'),
  );
}

function newFunction(
  ctx: Context,
  declaration: ClassDeclaration,
  name: string,
  construction: Construction,
) {
  const newName = `New${name}`;
  ctx.declareName(declaration, newName);
  ctx.emit('');
  if (construction.constructor) {
    docs(ctx, construction.constructor);
  }
  ctx.braces(`func ${newName}(${construction.params}) *${name}`, () => {
    ctx.emit(`this := &${name}{}`);
    if (construction.hasDerived) {
      const args = forwardArguments(construction.callable);
      ctx.emit(
        `${initName(ctx, declaration)}(${['this', ...args].join(', ')})`,
      );
    } else {
      constructorBody(ctx, declaration, 'this');
    }
    ctx.emit('return this');
  });
}

/**
 * The methods, and `MarshalJSON` for classes with `toJSON()`
 */
function methods(ctx: Context, declaration: ClassDeclaration, self: string) {
  for (const method of declaration.getMethods()) {
    ctx.emit('');
    methodDeclaration(ctx, method, self);
  }
  const toJSON = declaration
    .getMethods()
    .find(
      (method) =>
        method.getName() == 'toJSON' && method.getScope() == Scope.Public,
    );
  if (toJSON) {
    ctx.emit('');
    ctx.emit('// MarshalJSON writes the JSON of ToJSON(), for encoding/json');
    ctx.braces(`func (this *${self}) MarshalJSON() ([]byte, error)`, () =>
      ctx.emit('return []byte(js.Stringify(this.ToJSON())), nil'),
    );
  }
}
