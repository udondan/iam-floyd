export function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function lowerFirst(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function camelCase(str: string) {
  return str
    .split(/[_\-\s./${}]/)
    .map((str) => {
      return upperFirst(str);
    })
    .join('');
}

export function getArnPlaceholders(arn: string): RegExpMatchArray {
  const matches = arn.match(/(?<=\$\{)[a-z0-9_-]+(?=\})/gi);

  const toTheEnd: string[] = [];
  while (matches?.length) {
    if (/^(Partition|Region|Account(Id)?)$/.test(matches[0])) {
      toTheEnd.push(matches.shift()!);
    } else {
      break;
    }
  }

  matches?.push(...toTheEnd.reverse());
  return matches!;
}

export function createConditionName(
  key: string,
  servicePrefix: string,
): string {
  let methodName = 'if';
  const split = key.split(/:|\/(?=\$\{|<|\$|$)/);

  // these are exceptions for the Security Token Service to:
  // - make it clear to which provider the condition is for
  // - avoid duplicate method names
  if (split[0] == 'accounts.google.com') {
    methodName += 'Google';
  } else if (split[0] == 'cognito-identity.amazonaws.com') {
    methodName += 'Cognito';
  } else if (split[0] == 'www.amazon.com') {
    methodName += 'Amazon';
  } else if (split[0] == 'graph.facebook.com') {
    methodName += 'Facebook';
  } else if (split[0] != servicePrefix) {
    // for global conditions and conditions related to other services
    methodName += upperFirst(camelCase(split[0]));
  }

  // A trailing placeholder segment (e.g. `${TagKey}` at the very end of the key, as in
  // `aws:RequestTag/${TagKey}`) is omitted from the name - it becomes a real method parameter
  // instead, and including it would change hundreds of already-stable method names. A
  // placeholder that is NOT last (e.g. `${EnterpriseName}` in
  // `github.com/enterprises/${EnterpriseName}:actor`) isn't turned into a parameter anywhere,
  // so it must stay part of the name - otherwise multiple distinct keys that only differ by
  // what follows the placeholder (`:actor` vs `:actor_id`, or by comparison with a sibling key
  // that omits the placeholder segment entirely) collapse onto the same method name.
  const rest = split.slice(1);
  rest.forEach((part, i) => {
    const isLast = i === rest.length - 1;
    if (isLast && /^[$<]/.test(part)) {
      return;
    }
    methodName += upperFirst(camelCase(part));
  });

  return methodName;
}
