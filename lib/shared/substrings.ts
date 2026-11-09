/**
 * Minimum length of a common substring, including the `^` and `$` that mark the start and end of an action name
 */
const minLength = 3;

/**
 * Collects the substrings of the selected actions that none of the excluded actions contains, with the indexes of the
 * selected actions containing them. Substrings are compared in lower case, the spelling is that of their first
 * occurrence.
 *
 * @param selected Names of the selected actions
 * @param excluded Names of the excluded actions
 * @param sources Gets the indexes of the actions per substring, in lower case
 * @param spellings Gets the spelling per substring, in lower case
 */
export function collectSubstrings(
  selected: string[],
  excluded: string[],
  sources: Map<string, number[]>,
  spellings: Map<string, string>,
): void {
  const forbidden = forbiddenSubstrings(excluded);
  for (let index = 0; index < selected.length; index++) {
    for (const spelling of substrings(`^${selected[index]}$`)) {
      const key = spelling.toLowerCase();
      if (forbidden.has(key)) {
        continue;
      }
      if (!spellings.has(key)) {
        spellings.set(key, spelling);
      }
      addSource(sources, key, index);
    }
  }
}

/**
 * The substrings that at least two actions contain, without the redundant ones
 */
export function candidatesOf(sources: Map<string, number[]>): string[] {
  const redundant = redundantSubstrings(sources);
  const candidates: string[] = [];
  for (const [key, indexes] of sources) {
    if (indexes.length >= 2 && !redundant.has(key)) {
      candidates.push(key);
    }
  }
  return candidates;
}

/**
 * The substrings of an action name, marked with `^` and `$`, with at least `minLength` characters
 */
function substrings(marked: string): string[] {
  const result: string[] = [];
  for (let start = 0; start < marked.length; start++) {
    for (let end = start + minLength; end <= marked.length; end++) {
      result.push(marked.substring(start, end));
    }
  }
  return result;
}

/**
 * All substrings of the excluded actions, in lower case
 */
function forbiddenSubstrings(excluded: string[]): Set<string> {
  const forbidden = new Set<string>();
  for (const name of excluded) {
    for (const key of substrings(`^${name}$`.toLowerCase())) {
      forbidden.add(key);
    }
  }
  return forbidden;
}

/**
 * Adds the index of an action to the indexes of the actions that contain the substring
 */
function addSource(
  sources: Map<string, number[]>,
  key: string,
  index: number,
): void {
  const indexes = sources.get(key) ?? [];
  // the same substring can occur multiple times in one action
  if (indexes.length == 0 || indexes[indexes.length - 1] != index) {
    indexes.push(index);
  }
  // set after the push, for the languages in which appending returns a new list
  sources.set(key, indexes);
}

/**
 * A substring is redundant, if a substring one character longer occurs in the same actions
 */
function redundantSubstrings(sources: Map<string, number[]>): Set<string> {
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
  return redundant;
}
