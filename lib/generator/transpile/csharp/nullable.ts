const valueTypes = ['int', 'double', 'bool', 'DateTime'];

export function nullable(type: string): string {
  return valueTypes.includes(type) ? `${type}?` : type;
}

export function nonNullable(type: string): string {
  return type.endsWith('?') ? type.slice(0, -1) : type;
}

function sameType(from: string, to: string): boolean {
  return from == to || to == 'object' || nonNullable(from) == nonNullable(to);
}

function isNullForReference(from: string, to: string): boolean {
  return from == 'null' && !valueTypes.includes(to);
}

/**
 * Whether a value of the C# type `from` can be passed for a parameter of the C# type `to`
 */
export function assignable(from: string, to: string): boolean {
  if (sameType(from, to) || isNullForReference(from, to)) {
    return true;
  }
  if (nonNullable(to) == 'double') {
    return ['int', 'int?', 'double'].includes(from);
  }
  if (to == 'IEnumerable') {
    return /^(List|IEnumerable)</.test(from) || from.endsWith('[]');
  }
  const element = /^IEnumerable<(.*)>$/.exec(to);
  return (
    element !== null &&
    [`List<${element[1]}>`, `${element[1]}[]`].includes(from)
  );
}

/**
 * The type, nullable if `optional`
 */
export function optionalType(type: string, optional: boolean): string {
  return optional ? nullable(type) : type;
}

/**
 * The type of all the types if they are the same, otherwise `object`
 */
export function commonType(types: string[]): string {
  const unique = new Set(types);
  return unique.size == 1 ? [...unique][0] : 'object';
}
