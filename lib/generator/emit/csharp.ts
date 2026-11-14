import * as fs from 'fs';

import { ServiceModel } from '../model';
import {
  csharpLocalName,
  csharpMethodName,
  csharpString,
  xmlDoc,
  xmlDocText,
  xmlParam,
} from '../transpile/csharp';
import {
  actionMethod,
  conditionMethods,
  MethodWriter,
  OverloadSyntax,
  resourceMethods,
} from './overloads';
import {
  assertUniqueMethod,
  generatedHeader,
  modelDir,
  readModels,
  Writer,
} from './shared';

const namespace = 'IAM.Floyd.Statement';
const outDir = 'dotnet/src/IAM.Floyd/Statement';

const syntax: OverloadSyntax = {
  methodName: csharpMethodName,
  localName: csharpLocalName,
  string: csharpString,
  docText: xmlDocText,
  orDefault: (name, value) => `(${name} ?? ${value})`,
  stringType: 'string',
  booleanType: 'bool?',
  nullString: '(string)null',
  cast: '(object)',
  to: 'To',
  on: 'On',
  doIf: 'If',
  defaults: {
    partition: 'DefaultPartition',
    region: 'DefaultRegion',
    account: 'DefaultAccount',
  },
  operatorName: '@operator',
  operatorTypes: ['Operator', 'string'],
  valueTypes: {
    string: { type: 'string', value: 'value' },
    number: { type: 'double', value: 'value' },
    Date: { type: 'DateTime', value: 'DateToString(value)' },
  },
  dateList: { type: 'IEnumerable', value: 'DateStrings(value)' },
  list: ({ type }) => ({
    type: `IEnumerable<${type}>`,
    value: `new List<${type}>(value)`,
  }),
};

function hasDateLists(model: ServiceModel): boolean {
  return model.conditions.some((condition) =>
    (condition.valueTypes ?? []).includes('Date'),
  );
}

function usings(model: ServiceModel): string[] {
  const result = ['System.Collections.Generic', 'IAM.Floyd'];
  if (hasDateLists(model)) {
    result.push('System', 'System.Collections');
  } else if (
    model.conditions.some((condition) => condition.valueKind == 'numeric')
  ) {
    result.push('System.Collections');
  }
  return result.sort();
}

function writeAccessLevels(out: Writer, model: ServiceModel) {
  out.line(
    'private static readonly Dictionary<string, List<string>> ACCESS_LEVELS = new Dictionary<string, List<string>>',
  );
  out.line('{');
  out.indented(() => {
    for (const [level, actions] of Object.entries(model.accessLevelList)) {
      out.line(`[${csharpString(level)}] = new List<string>`);
      out.line('{');
      out.indented(() =>
        actions.forEach((action) => out.line(`${csharpString(action)},`)),
      );
      out.line('},');
    }
  });
  out.line('};');
}

function writeConstructors(
  out: Writer,
  model: ServiceModel,
  classDocs: string[],
) {
  const { className } = model;
  xmlDoc(classDocs).forEach((line) => out.line(line));
  out.line(`public ${className}()`);
  out.indented(() => out.line(': this((string)null)'));
  out.line('{');
  out.line('}');
  out.line();
  xmlDoc(classDocs, [
    xmlParam(
      'sid',
      xmlDocText(
        '[SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement',
      ),
    ),
  ]).forEach((line) => out.line(line));
  out.line(`public ${className}(string sid)`);
  out.indented(() => out.line(': base(sid)'));
  out.line('{');
  out.indented(() => {
    out.line(`ServicePrefix = ${csharpString(model.servicePrefix)};`);
    out.line('AccessLevelList = ACCESS_LEVELS;');
  });
  out.line('}');
}

function writeDateStrings(out: Writer) {
  out.line();
  out.block(
    'private static List<object> DateStrings(IEnumerable values)',
    () => {
      out.line('var result = new List<object>();');
      out.line('foreach (var value in values)');
      out.line('{');
      out.indented(() => out.line('result.Add(DateToString(value));'));
      out.line('}');
      out.line('return result;');
    },
  );
}

/**
 * Writes a method, which must be unique in the class. Methods with the name of an inherited one
 * hide it with `new`.
 */
function methodWriter(
  out: Writer,
  className: string,
  inherited: Set<string>,
): MethodWriter {
  const signatures = new Set<string>();
  return (name, parameters, docs, paramDocs, body) => {
    const csharpName = csharpMethodName(name);
    assertUniqueMethod(
      signatures,
      `${csharpName}(${parameters.map((p) => p.type.replace(/\?$/, '')).join(',')})`,
      parameters.map((p) => p.name),
      csharpName,
      className,
    );
    out.line();
    xmlDoc(
      docs,
      // every parameter is documented
      parameters.map((p) => xmlParam(p.name, paramDocs.get(p.name)!)),
    ).forEach((line) => out.line(line));
    const modifiers = inherited.has(csharpName) ? 'public new' : 'public';
    out.block(
      `${modifiers} ${className} ${csharpName}(${parameters.map((p) => `${p.type} ${p.name}`).join(', ')})`,
      () => body.forEach((line) => out.line(line)),
    );
  };
}

/**
 * Renders the C# class of a service. `inherited` are the names of the public methods of the base
 * classes, which methods of the service hide with `new`.
 */
export function emitCSharp(
  model: ServiceModel,
  inherited = new Set<string>(),
): string {
  const out = new Writer('    ');
  const className = model.className;
  const method = methodWriter(out, className, inherited);

  out.line(generatedHeader('//', `${modelDir}/${model.filename}.json`));
  for (const using of usings(model)) {
    out.line(`using ${using};`);
  }
  out.line();
  out.line(`namespace ${namespace};`);
  out.line();
  const classDocs = [
    `Statement provider for service [${model.name}](${model.url}).`,
  ];
  xmlDoc(classDocs).forEach((line) => out.line(line));
  out.block(`public class ${className} : PolicyStatement<${className}>`, () => {
    writeAccessLevels(out, model);
    out.line();
    writeConstructors(out, model, classDocs);
    for (const action of model.actions) {
      actionMethod(syntax, action, method);
    }
    for (const resource of model.resources) {
      resourceMethods(syntax, resource, method);
    }
    for (const condition of model.conditions) {
      conditionMethods(syntax, condition, method);
    }
    if (hasDateLists(model)) {
      writeDateStrings(out);
    }
  });
  return out.toString();
}

/**
 * Renders the classes of all services from `lib/generated/model/` into the namespace
 * `IAM.Floyd.Statement`. `inherited` are the names of the public methods of the base classes.
 */
export function emitCSharpFromModels(inherited: Set<string>): void {
  fs.mkdirSync(outDir, { recursive: true });
  for (const model of readModels()) {
    fs.writeFileSync(
      `${outDir}/${model.className}.cs`,
      emitCSharp(model, inherited),
    );
  }
}
