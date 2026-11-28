import * as fs from 'fs';

import { ServiceModel } from '../model';
import {
  javadoc,
  javadocText,
  javaLocalName,
  javaMethodName,
  javaString,
  withoutTypeArguments,
} from '../transpile/java';
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

const pkg = 'com.udondan.iamFloyd.statement';
const outDir = `java/src/main/java/${pkg.replace(/\./g, '/')}`;

const syntax: OverloadSyntax = {
  methodName: javaMethodName,
  localName: javaLocalName,
  string: javaString,
  docText: javadocText,
  orDefault: (name, value) => `(${name} != null ? ${name} : ${value})`,
  stringType: 'String',
  booleanType: 'Boolean',
  nullString: 'null',
  cast: '(Object) ',
  to: 'to',
  on: 'on',
  doIf: 'doIf',
  defaults: {
    partition: 'this.defaultPartition',
    region: 'this.defaultRegion',
    account: 'this.defaultAccount',
  },
  operatorName: 'operator',
  operatorTypes: ['Operator', 'String'],
  valueTypes: {
    string: { type: 'String', value: 'value' },
    number: { type: 'Number', value: 'value' },
    Date: { type: 'Instant', value: 'dateToString(value)' },
  },
  dateList: { type: 'List<?>', value: 'dateStrings(value)' },
  list: ({ type }) => ({
    type: `List<${type == 'Number' ? '? extends Number' : type}>`,
    value: 'value',
  }),
};

function hasDateLists(model: ServiceModel): boolean {
  return model.conditions.some((condition) =>
    (condition.valueTypes ?? []).includes('Date'),
  );
}

function writeImports(out: Writer, model: ServiceModel) {
  const imports = [
    'com.udondan.iamFloyd.PolicyStatement',
    'java.util.Arrays',
    'java.util.LinkedHashMap',
    'java.util.List',
    'java.util.Map',
  ];
  if (hasDateLists(model)) {
    imports.push('java.time.Instant', 'java.util.ArrayList');
  }
  if (model.conditions.some((condition) => condition.valueKind != 'boolean')) {
    imports.push('com.udondan.iamFloyd.Operator');
  }
  for (const name of imports.sort()) {
    out.line(`import ${name};`);
  }
}

function writeAccessLevelList(out: Writer, model: ServiceModel) {
  out.line(
    'private static final Map<String, List<String>> ACCESS_LEVEL_LIST = new LinkedHashMap<>();',
  );
  out.line();
  out.line('static {');
  out.indented(() => {
    for (const [level, actions] of Object.entries(model.accessLevelList)) {
      out.line(`ACCESS_LEVEL_LIST.put(${javaString(level)}, Arrays.asList(`);
      out.indented(() => {
        actions.forEach((action, index) =>
          out.line(
            `${javaString(action)}${index == actions.length - 1 ? '));' : ','}`,
          ),
        );
      });
    }
  });
  out.line('}');
}

function writeConstructors(out: Writer, model: ServiceModel) {
  const { className } = model;
  const classDocs = [
    `Statement provider for service [${model.name}](${model.url}).`,
  ];
  javadoc(classDocs).forEach((line) => out.line(line));
  out.line(`public ${className}() {`);
  out.indented(() => out.line('this((String) null);'));
  out.line('}');
  out.line();
  javadoc(classDocs, [
    `@param sid ${javadocText('[SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement')}`,
  ]).forEach((line) => out.line(line));
  out.line(`public ${className}(String sid) {`);
  out.indented(() => {
    out.line('super(sid);');
    out.line(`this.servicePrefix = ${javaString(model.servicePrefix)};`);
    out.line('this.accessLevelList = ACCESS_LEVEL_LIST;');
  });
  out.line('}');
}

function writeDateStrings(out: Writer) {
  out.line();
  out.line('private static List<Object> dateStrings(List<?> values) {');
  out.indented(() => {
    out.line('List<Object> result = new ArrayList<>();');
    out.line('for (Object value : values) {');
    out.line('  result.add(dateToString(value));');
    out.line('}');
    out.line('return result;');
  });
  out.line('}');
}

/**
 * Writes a method, which must be unique in the class
 */
function methodWriter(out: Writer, className: string): MethodWriter {
  const signatures = new Set<string>();
  return (name, parameters, docs, paramDocs, body) => {
    const javaName = javaMethodName(name);
    assertUniqueMethod(
      signatures,
      `${javaName}(${parameters.map((p) => withoutTypeArguments(p.type)).join(',')})`,
      parameters.map((p) => p.name),
      javaName,
      className,
    );
    out.line();
    javadoc(
      docs,
      parameters.map((p) => `@param ${p.name} ${paramDocs.get(p.name)}`),
    ).forEach((line) => out.line(line));
    out.line(
      `public ${className} ${javaName}(${parameters.map((p) => `${p.type} ${p.name}`).join(', ')}) {`,
    );
    out.indented(() => body.forEach((line) => out.line(line)));
    out.line('}');
  };
}

/**
 * Renders the Java class of a service
 */
export function emitJava(model: ServiceModel): string {
  const out = new Writer('  ');
  const className = model.className;
  const method = methodWriter(out, className);

  out.line(generatedHeader('//', `${modelDir}/${model.filename}.json`));
  out.line(`package ${pkg};`);
  out.line();
  writeImports(out, model);
  out.line();
  javadoc([
    `Statement provider for service [${model.name}](${model.url}).`,
  ]).forEach((line) => out.line(line));
  out.line(`public class ${className} extends PolicyStatement<${className}> {`);
  out.indented(() => {
    writeAccessLevelList(out, model);
    out.line();
    writeConstructors(out, model);
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
  out.line('}');
  return out.toString();
}

/**
 * Renders the classes of all services from `lib/generated/model/` into the package
 * `com.udondan.iamFloyd.statement`
 */
export function emitJavaFromModels(): void {
  fs.mkdirSync(outDir, { recursive: true });
  for (const model of readModels()) {
    fs.writeFileSync(`${outDir}/${model.className}.java`, emitJava(model));
  }
}
