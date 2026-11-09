import * as fs from 'fs';

import { ConditionModel, ResourceModel, ServiceModel } from '../model';
import {
  docstring,
  pyString,
  pythonName,
  pythonServiceModule,
} from '../transpile/python';
import {
  actionDocs,
  addParagraph,
  arnParts,
  assertUniqueMethod,
  conditionDocs,
  generatedHeader,
  modelDir,
  placeholderDefaultDocs,
  readModels,
  resourceDocs,
  Writer,
} from './shared';

const outDir = 'python/iam_floyd/statement';

/**
 * Python name of a method reference in the docs, e.g. `.ifAwsRequestTag()`
 */
function docReference(methodName: string): string {
  return `.${pythonName(methodName)}()`;
}

/**
 * Python types of the single condition values
 */
const valueTypes: Record<string, string | undefined> = {
  string: 'str',
  number: 'float',
  boolean: 'bool',
  Date: '_datetime.datetime',
};

function valueType(type: string): string {
  const pyType = valueTypes[type];
  if (!pyType) {
    throw new Error(`Unexpected condition value type: ${type}`);
  }
  return pyType;
}

/**
 * A literal part of an f-string, with doubled braces
 */
function fStringLiteral(text: string): string {
  return pyString(text).slice(1, -1).replace(/\{/g, '{{').replace(/\}/g, '}}');
}

/**
 * The string of an ARN, where the placeholders are the given expressions
 */
function arnString(arn: string, expressions: Map<string, string>): string {
  const parts = arnParts(arn, expressions);
  if (parts.length == 1) {
    // nothing to substitute: a plain string, whose braces are not doubled
    return pyString(arn);
  }
  const code = parts
    .map(({ literal, expression }) =>
      expression === undefined
        ? fStringLiteral(literal)
        : `${fStringLiteral(literal)}{${expression}}`,
    )
    .join('');
  return `f'${code}'`;
}

type MethodWriter = (
  name: string,
  parameters: string[],
  docs: string[],
  body: string,
) => void;

/**
 * Writes a method, which must be unique in the class
 */
function methodWriter(out: Writer, className: string): MethodWriter {
  const names = new Set<string>();
  return (name, parameters, docs, body) => {
    const pyName = pythonName(name);
    assertUniqueMethod(
      names,
      pyName,
      parameters.map((p) => p.split(':')[0]),
      pyName,
      className,
    );
    out.line();
    out.line(`def ${pyName}(${['self', ...parameters].join(', ')}) -> Self:`);
    out.indented(() => {
      docstring(docs).forEach((line) => out.line(line));
      out.line(`return ${body}`);
    });
  };
}

function writeImports(out: Writer, model: ServiceModel) {
  const hasDates = model.conditions.some((condition) =>
    (condition.valueTypes ?? []).includes('Date'),
  );
  const hasOperators = model.conditions.some(
    (condition) => condition.valueKind != 'boolean',
  );
  out.line('from __future__ import annotations');
  out.line();
  out.line('from typing import TYPE_CHECKING');
  out.line();
  out.line(
    `from .._shared import ${['PolicyStatement', hasDates ? '_date_to_string' : ''].filter((name) => name).join(', ')}`,
  );
  out.line();
  out.line('if TYPE_CHECKING:');
  out.indented(() => {
    if (hasDates) {
      out.line('import datetime as _datetime');
      out.line();
    }
    out.line('from typing_extensions import Self');
    if (hasOperators) {
      out.line();
      out.line('from .._shared import Operator');
    }
  });
}

function writeConstructor(out: Writer, model: ServiceModel) {
  docstring([
    `Statement provider for service [${model.name}](${model.url}).`,
    '',
    ':param sid: [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement',
  ]).forEach((line) => out.line(line));
  out.line();
  out.line('def __init__(self, sid: str | None = None) -> None:');
  out.indented(() => {
    out.line('super().__init__(sid)');
    out.line(`self.service_prefix = ${pyString(model.servicePrefix)}`);
    out.line('self._access_level_list = _ACCESS_LEVEL_LIST');
  });
}

/**
 * Renders the Python module of a service
 */
export function emitPython(model: ServiceModel): string {
  const out = new Writer('    ');
  const method = methodWriter(out, model.className);

  out.line(generatedHeader('#', `${modelDir}/${model.filename}.json`));
  writeImports(out, model);
  out.line();
  out.line(
    `_ACCESS_LEVEL_LIST: dict[str, list[str]] = ${JSON.stringify(model.accessLevelList, null, 4)}`,
  );
  out.line();
  out.line();
  out.line(`class ${model.className}(PolicyStatement):`);
  out.indented(() => {
    writeConstructor(out, model);
    for (const action of model.actions) {
      method(
        action.methodName,
        [],
        actionDocs(action, docReference),
        `self.to(${pyString(action.name)})`,
      );
    }
    for (const resource of model.resources) {
      resourceMethod(resource, method);
    }
    for (const condition of model.conditions) {
      conditionMethod(condition, method);
    }
  });
  return out.toString();
}

const placeholderDefaults = {
  partition: 'self._default_partition',
  region: 'self._default_region',
  account: 'self._default_account',
};

function resourceMethod(resource: ResourceModel, method: MethodWriter) {
  const required: string[] = [];
  const optional: string[] = [];
  const params: string[] = [];
  const expressions = new Map<string, string>();
  for (const { placeholder, name, kind } of resource.placeholders) {
    const pyName = pythonName(name);
    if (kind == 'required') {
      required.push(`${pyName}: str`);
      expressions.set(placeholder, pyName);
      params.push(`:param ${pyName}: Identifier for the ${name}.`);
    } else {
      optional.push(`${pyName}: str | None = None`);
      expressions.set(
        placeholder,
        `${pyName} if ${pyName} is not None else ${placeholderDefaults[kind]}`,
      );
      params.push(`:param ${pyName}: ${placeholderDefaultDocs[kind]}`);
    }
  }

  const docs = resourceDocs(resource, docReference);
  if (params.length) {
    addParagraph(docs, ...params);
  }
  method(
    resource.methodName,
    [...required, ...optional],
    docs,
    `self.on(${arnString(resource.arn, expressions)})`,
  );
}

/**
 * The parameter of the value of a condition, its docs and the body of the method
 */
function conditionValue(
  condition: ConditionModel,
  key: string,
): { parameters: string[]; params: string[]; body: string } {
  if (condition.valueKind == 'boolean') {
    return {
      parameters: ['value: bool | None = None'],
      params: [':param value: `true` or `false`. **Default:** `true`'],
      body: `self.if_(${key}, value if value is not None else True, 'Bool')`,
    };
  }
  const single = condition.valueTypes!.map(valueType).join(' | ');
  const value = condition.valueTypes!.includes('Date')
    ? '[_date_to_string(item) for item in value] if isinstance(value, list) else _date_to_string(value)'
    : 'value';
  return {
    parameters: [
      `value: ${single} | list[${single}]`,
      'operator: Operator | str | None = None',
    ],
    params: [
      ':param value: The value(s) to check',
      `:param operator: Works with [${condition.valueKind} operators](${condition.operatorUrl}). **Default:** \`${condition.defaultOperator}\``,
    ],
    body: `self.if_(${key}, ${value}, operator if operator is not None else ${pyString(condition.defaultOperator)})`,
  };
}

function conditionMethod(condition: ConditionModel, method: MethodWriter) {
  const docs = conditionDocs(condition, docReference);
  const parameters: string[] = [];
  const params: string[] = [];
  let key = pyString(condition.keyLiteral);
  if (condition.keyParam !== undefined) {
    const keyParam = pythonName(condition.keyParam);
    parameters.push(`${keyParam}: str`);
    params.push(`:param ${keyParam}: The tag key to check`);
    key += ` + ${keyParam}`;
  }
  const value = conditionValue(condition, key);
  addParagraph(docs, ...params, ...value.params);
  method(
    condition.methodName,
    [...parameters, ...value.parameters],
    docs,
    value.body,
  );
}

/**
 * The imports of the service classes for type checkers, sorted like isort does
 */
function writeTypeImports(out: Writer, modules: Map<string, string>) {
  for (const [className, module] of [...modules].sort(([, a], [, b]) =>
    a < b ? -1 : 1,
  )) {
    const line = `from .${module} import ${className}`;
    if (line.length + 4 <= 100) {
      out.line(line);
    } else {
      out.line(`from .${module} import (`);
      out.line(`    ${className},`);
      out.line(')');
    }
  }
}

function writeModuleFunctions(out: Writer) {
  out.line('def __getattr__(name: str) -> Any:');
  out.indented(() => {
    out.line('module = _MODULES.get(name)');
    out.line('if module is None:');
    out.line(
      "    raise AttributeError(f'module {__name__!r} has no attribute {name!r}')",
    );
    out.line(
      'value = getattr(importlib.import_module(f".{module}", __name__), name)',
    );
    out.line('globals()[name] = value');
    out.line('return value');
  });
  out.line();
  out.line();
  out.line('def __dir__() -> list[str]:');
  out.indented(() => {
    out.line('return __all__');
  });
}

/**
 * The package `iam_floyd.statement`, which imports the modules of the services lazily.
 * `modules` are the modules by class name.
 */
function emitPythonPackage(modules: Map<string, string>): string {
  const out = new Writer('    ');
  out.line('"""Statement providers of all services."""');
  out.line();
  out.line(generatedHeader('#', modelDir));
  out.line('from __future__ import annotations');
  out.line();
  out.line('import importlib');
  out.line('from typing import TYPE_CHECKING, Any');
  out.line();
  out.line('from .._shared import All');
  out.line();
  out.line('if TYPE_CHECKING:');
  out.indented(() => writeTypeImports(out, modules));
  out.line();
  out.line(
    '# The modules are imported on first access, importing all takes long',
  );
  out.line('_MODULES = {');
  out.indented(() => {
    for (const [className, module] of modules) {
      out.line(`${pyString(className)}: ${pyString(module)},`);
    }
  });
  out.line('}');
  out.line();
  // a literal, which type checkers understand
  out.line('__all__ = [');
  out.indented(() => {
    for (const name of ['All', ...modules.keys()]) {
      out.line(`${pyString(name)},`);
    }
  });
  out.line(']');
  out.line();
  out.line();
  writeModuleFunctions(out);
  return out.toString();
}

/**
 * Renders the modules of all services from `lib/generated/model/` plus the package
 * `iam_floyd.statement`, which imports them lazily
 */
export function emitPythonFromModels(): void {
  const models = readModels();
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });
  const modules = new Map<string, string>();
  for (const model of models) {
    const module = pythonServiceModule(model.filename);
    modules.set(model.className, module);
    fs.writeFileSync(`${outDir}/${module}.py`, emitPython(model));
  }
  fs.writeFileSync(`${outDir}/__init__.py`, emitPythonPackage(modules));
}
