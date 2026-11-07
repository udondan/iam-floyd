import * as fs from 'fs';

import { ConditionModel, ResourceModel, ServiceModel } from '../model';
import {
  docstring,
  pyString,
  pythonName,
  pythonServiceModule,
} from '../transpile/python';

const modelDir = 'lib/generated/model';
const outDir = 'python/iam_floyd/statement';
const header = (source: string) =>
  `# Generated from ${source} by bin/transpile.ts. Do not edit.`;

/**
 * Python name of a method reference in the docs, e.g. `.ifAwsRequestTag()`
 */
function docReference(methodName: string): string {
  return `.${pythonName(methodName)}()`;
}

/**
 * Python type of a single condition value
 */
function valueType(type: string): string {
  switch (type) {
    case 'string':
      return 'str';
    case 'number':
      return 'float';
    case 'boolean':
      return 'bool';
    case 'Date':
      return '_datetime.datetime';
    default:
      throw new Error(`Unexpected condition value type: ${type}`);
  }
}

/**
 * The content of an f-string for an ARN, where the placeholders are the given expressions
 */
function arnString(arn: string, expressions: Map<string, string>): string {
  const literal = (text: string) =>
    pyString(text).slice(1, -1).replace(/\{/g, '{{').replace(/\}/g, '}}');
  let code = '';
  let last = 0;
  for (const match of arn.matchAll(/\$\{([^}]+)\}/g)) {
    const expression = expressions.get(match[1]);
    if (expression === undefined) {
      continue;
    }
    code += `${literal(arn.slice(last, match.index))}{${expression}}`;
    last = match.index + match[0].length;
  }
  code += literal(arn.slice(last));
  return code == literal(arn) ? `'${code}'` : `f'${code}'`;
}

class Writer {
  private readonly lines: string[] = [];
  private indentation = '';

  public line(text = '') {
    this.lines.push(text.length ? this.indentation + text : '');
  }

  public indented(fn: () => void) {
    const previous = this.indentation;
    this.indentation += '    ';
    fn();
    this.indentation = previous;
  }

  public toString(): string {
    return `${this.lines.join('\n')}\n`;
  }
}

/**
 * Renders the Python module of a service
 */
export function emitPython(model: ServiceModel): string {
  const out = new Writer();
  const names = new Set<string>();
  const method = (
    name: string,
    parameters: string[],
    docs: string[],
    body: string,
  ) => {
    const pyName = pythonName(name);
    if (names.has(pyName)) {
      throw new Error(`Duplicate method ${pyName} in ${model.className}`);
    }
    names.add(pyName);
    const parameterNames = parameters.map((p) => p.split(':')[0]);
    if (new Set(parameterNames).size != parameterNames.length) {
      throw new Error(
        `Duplicate parameters of ${pyName} in ${model.className}`,
      );
    }
    out.line();
    out.line(`def ${pyName}(${['self', ...parameters].join(', ')}) -> Self:`);
    out.indented(() => {
      docstring(docs).forEach((line) => out.line(line));
      out.line(`return ${body}`);
    });
  };

  const hasDates = model.conditions.some((condition) =>
    (condition.valueTypes ?? []).includes('Date'),
  );
  const hasOperators = model.conditions.some(
    (condition) => condition.valueKind != 'boolean',
  );

  out.line(header(`${modelDir}/${model.filename}.json`));
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
  out.line();
  out.line(
    `_ACCESS_LEVEL_LIST: dict[str, list[str]] = ${JSON.stringify(model.accessLevelList, null, 4)}`,
  );
  out.line();
  out.line();
  out.line(`class ${model.className}(PolicyStatement):`);
  out.indented(() => {
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

    for (const action of model.actions) {
      const docs = [
        action.description,
        '',
        `Access Level: ${action.accessLevel}`,
      ];
      if (action.conditionMethods) {
        docs.push('', 'Possible conditions:', '');
        docs.push(
          ...action.conditionMethods.map((name) => `- ${docReference(name)}`),
        );
      }
      if (action.dependentActions) {
        docs.push('', 'Dependent actions:', '');
        docs.push(...action.dependentActions.map((name) => `- ${name}`));
      }
      if (action.url.length && action.url != 'https://docs.aws.amazon.com/') {
        docs.push('', action.url);
      }
      method(action.methodName, [], docs, `self.to(${pyString(action.name)})`);
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

type MethodWriter = (
  name: string,
  parameters: string[],
  docs: string[],
  body: string,
) => void;

function resourceMethod(resource: ResourceModel, method: MethodWriter) {
  const defaults = {
    partition: 'self._default_partition',
    region: 'self._default_region',
    account: 'self._default_account',
  };
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
      continue;
    }
    optional.push(`${pyName}: str | None = None`);
    expressions.set(
      placeholder,
      `${pyName} if ${pyName} is not None else ${defaults[kind]}`,
    );
    params.push(
      {
        partition: `:param ${pyName}: Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to \`aws\`, unless using the CDK, where the default is the current Stack's partition.`,
        region: `:param ${pyName}: Region of the resource; defaults to \`*\`, unless using the CDK, where the default is the current Stack's region.`,
        account: `:param ${pyName}: Account of the resource; defaults to \`*\`, unless using the CDK, where the default is the current Stack's account.`,
      }[kind],
    );
  }

  const docs = [`Adds a resource of type ${resource.name} to the statement`];
  if (resource.url.length && resource.url != 'https://docs.aws.amazon.com/') {
    docs.push('', resource.url);
  }
  if (resource.conditionMethods.length) {
    docs.push('', 'Possible conditions:', '');
    docs.push(
      ...resource.conditionMethods.map((name) => `- ${docReference(name)}`),
    );
  }
  if (params.length) {
    docs.push('', ...params);
  }
  method(
    resource.methodName,
    [...required, ...optional],
    docs,
    `self.on(${arnString(resource.arn, expressions)})`,
  );
}

function conditionMethod(condition: ConditionModel, method: MethodWriter) {
  const docs: string[] = [];
  const add = (...lines: string[]) => {
    if (docs.length) {
      docs.push('');
    }
    docs.push(...lines);
  };
  if (condition.description.length) {
    add(condition.description);
  }
  if (condition.url.length) {
    add(condition.url);
  }
  if (condition.relatedActionMethods.length) {
    add(
      'Applies to actions:',
      '',
      ...condition.relatedActionMethods.map(
        (name) => `- ${docReference(name)}`,
      ),
    );
  }
  if (condition.relatedResourceTypes.length) {
    add(
      'Applies to resource types:',
      '',
      ...condition.relatedResourceTypes.map((name) => `- ${name}`),
    );
  }

  const parameters: string[] = [];
  const params: string[] = [];
  let key = pyString(condition.keyLiteral);
  if (condition.keyParam !== undefined) {
    const keyParam = pythonName(condition.keyParam);
    parameters.push(`${keyParam}: str`);
    params.push(`:param ${keyParam}: The tag key to check`);
    key += ` + ${keyParam}`;
  }

  let body: string;
  if (condition.valueKind == 'boolean') {
    parameters.push('value: bool | None = None');
    params.push(':param value: `true` or `false`. **Default:** `true`');
    body = `self.if_(${key}, value if value is not None else True, 'Bool')`;
  } else {
    const types = condition.valueTypes!.map((type) => valueType(type));
    const single = types.join(' | ');
    parameters.push(`value: ${single} | list[${single}]`);
    params.push(':param value: The value(s) to check');
    parameters.push('operator: Operator | str | None = None');
    params.push(
      `:param operator: Works with [${condition.valueKind} operators](${condition.operatorUrl}). **Default:** \`${condition.defaultOperator}\``,
    );
    let value = 'value';
    if (condition.valueTypes!.includes('Date')) {
      value =
        '[_date_to_string(item) for item in value] if isinstance(value, list) else _date_to_string(value)';
    }
    body = `self.if_(${key}, ${value}, operator if operator is not None else ${pyString(condition.defaultOperator)})`;
  }
  add(...params);
  method(condition.methodName, parameters, docs, body);
}

/**
 * Renders the modules of all services from `lib/generated/model/` plus the package
 * `iam_floyd.statement`, which imports them lazily
 */
export function emitPythonFromModels(): void {
  const models = fs
    .readdirSync(modelDir)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map(
      (file) =>
        JSON.parse(
          fs.readFileSync(`${modelDir}/${file}`, 'utf8'),
        ) as ServiceModel,
    );

  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });
  const modules = new Map<string, string>();
  for (const model of models) {
    const module = pythonServiceModule(model.filename);
    modules.set(model.className, module);
    fs.writeFileSync(`${outDir}/${module}.py`, emitPython(model));
  }

  const out = new Writer();
  out.line('"""Statement providers of all services."""');
  out.line();
  out.line(header(modelDir));
  out.line('from __future__ import annotations');
  out.line();
  out.line('import importlib');
  out.line('from typing import TYPE_CHECKING, Any');
  out.line();
  out.line('from .._shared import All');
  out.line();
  out.line('if TYPE_CHECKING:');
  out.indented(() => {
    // sorted like isort does
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
  });
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
  fs.writeFileSync(`${outDir}/__init__.py`, out.toString());
}
