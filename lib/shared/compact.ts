/**
 * Minimum length of a common substring, including the `^` and `$` that mark the start and end of an action name
 */
const minLength = 3;

/**
 * Condenses a list of action names to wildcard patterns, e.g. `List*` or `*Vpn*`.
 *
 * A pattern is made from a substring that at least two of the selected actions have in common and that none of the
 * excluded actions contains. IAM matches action names case-insensitive, so substrings are compared in lower case.
 * The substrings are picked greedily, the one that covers the most actions not yet covered first. Actions that are not
 * covered by any pattern are returned by name.
 *
 * @param selected Names of the actions to condense, without service prefix
 * @param excluded Names of all other actions of the service, which the patterns must not match
 */
export function compactActionNames(
  selected: string[],
  excluded: string[],
): string[] {
  // all substrings of the excluded actions
  const forbidden = new Set<string>();
  for (const name of excluded) {
    const marked = `^${name}$`.toLowerCase();
    for (let start = 0; start < marked.length; start++) {
      for (let end = start + minLength; end <= marked.length; end++) {
        forbidden.add(marked.substring(start, end));
      }
    }
  }

  // the substrings of the selected actions, which are not forbidden, with the indexes of the actions containing them
  const sources = new Map<string, number[]>();
  const spellings = new Map<string, string>();
  for (let index = 0; index < selected.length; index++) {
    const marked = `^${selected[index]}$`;
    const lower = marked.toLowerCase();
    for (let start = 0; start < marked.length; start++) {
      for (let end = start + minLength; end <= marked.length; end++) {
        const key = lower.substring(start, end);
        if (forbidden.has(key)) {
          continue;
        }
        let indexes = sources.get(key);
        if (indexes === undefined) {
          indexes = [];
          spellings.set(key, marked.substring(start, end));
        }
        // the same substring can occur multiple times in one action
        if (indexes.length == 0 || indexes[indexes.length - 1] != index) {
          indexes.push(index);
        }
        // set after the push, for the languages in which appending returns a new list
        sources.set(key, indexes);
      }
    }
  }

  // a substring is redundant, if a substring one character longer occurs in the same actions
  const redundant = new Set<string>();
  for (const [key, indexes] of sources) {
    if (key.length <= minLength || indexes.length < 2) {
      continue;
    }
    const shorter = [key.substring(1), key.substring(0, key.length - 1)];
    for (const candidate of shorter) {
      if ((sources.get(candidate) ?? []).length == indexes.length) {
        redundant.add(candidate);
      }
    }
  }
  let candidates: string[] = [];
  for (const [key, indexes] of sources) {
    if (indexes.length >= 2 && !redundant.has(key)) {
      candidates.push(key);
    }
  }

  const covered: boolean[] = selected.map(() => false);
  const patterns: string[] = [];
  while (candidates.length > 0) {
    let best = '';
    let bestCount = 0;
    const remaining: string[] = [];
    for (const candidate of candidates) {
      let count = 0;
      for (const index of sources.get(candidate)!) {
        if (!covered[index]) {
          count++;
        }
      }
      if (count < 2) {
        continue; // will not be picked anymore
      }
      remaining.push(candidate);
      if (
        count > bestCount ||
        (count == bestCount && isBetter(candidate, best))
      ) {
        best = candidate;
        bestCount = count;
      }
    }
    if (bestCount == 0) {
      break;
    }
    for (const index of sources.get(best)!) {
      covered[index] = true;
    }
    patterns.push(toPattern(spellings.get(best)!));
    candidates = remaining;
  }

  for (let index = 0; index < selected.length; index++) {
    if (!covered[index]) {
      patterns.push(selected[index]);
    }
  }
  return patterns;
}

/**
 * Decides between two substrings that cover the same number of actions: the start of an action name (`List*` reads
 * better than `*sInRecycleBin`), then the longer one, then the alphabetically first one
 */
function isBetter(candidate: string, best: string): boolean {
  const candidateIsStart = candidate.startsWith('^');
  const bestIsStart = best.startsWith('^');
  if (candidateIsStart != bestIsStart) {
    return candidateIsStart;
  }
  if (candidate.length != best.length) {
    return candidate.length > best.length;
  }
  return candidate < best;
}

/**
 * Converts a substring to a wildcard pattern: `^List` to `List*`, `Vpn` to `*Vpn*`, `Tags$` to `*Tags`
 */
function toPattern(substring: string): string {
  let pattern = substring;
  if (pattern.startsWith('^')) {
    pattern = pattern.substring(1);
  } else {
    pattern = `*${pattern}`;
  }
  if (pattern.endsWith('$')) {
    pattern = pattern.substring(0, pattern.length - 1);
  } else {
    pattern = `${pattern}*`;
  }
  return pattern;
}
