import { candidatesOf, collectSubstrings } from './substrings';

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
  const sources = new Map<string, number[]>();
  const spellings = new Map<string, string>();
  collectSubstrings(selected, excluded, sources, spellings);

  const covered: boolean[] = selected.map(() => false);
  const patterns = pickPatterns(
    candidatesOf(sources),
    sources,
    spellings,
    covered,
  );
  for (let index = 0; index < selected.length; index++) {
    if (!covered[index]) {
      patterns.push(selected[index]);
    }
  }
  return patterns;
}

/**
 * Picks the substrings greedily and marks the actions they cover. Returns their patterns
 */
function pickPatterns(
  candidates: string[],
  sources: Map<string, number[]>,
  spellings: Map<string, string>,
  covered: boolean[],
): string[] {
  const patterns: string[] = [];
  let remaining = candidates;
  while (remaining.length > 0) {
    const counts = uncoveredCounts(remaining, sources, covered);
    // the others will not be picked anymore
    remaining = remaining.filter((candidate) => counts.has(candidate));
    if (remaining.length > 0) {
      const best = bestCandidate(counts);
      for (const index of sources.get(best)!) {
        covered[index] = true;
      }
      patterns.push(toPattern(spellings.get(best)!));
    }
  }
  return patterns;
}

/**
 * The number of the actions not yet covered per substring, of the substrings that cover at least two of them
 */
function uncoveredCounts(
  candidates: string[],
  sources: Map<string, number[]>,
  covered: boolean[],
): Map<string, number> {
  const counts = new Map<string, number>();
  for (const candidate of candidates) {
    let count = 0;
    for (const index of sources.get(candidate)!) {
      if (!covered[index]) {
        count++;
      }
    }
    if (count >= 2) {
      counts.set(candidate, count);
    }
  }
  return counts;
}

/**
 * The substring that covers the most actions not yet covered
 */
function bestCandidate(counts: Map<string, number>): string {
  let best = '';
  let bestCount = 0;
  for (const [candidate, count] of counts) {
    if (
      count > bestCount ||
      (count == bestCount && isBetter(candidate, best))
    ) {
      best = candidate;
      bestCount = count;
    }
  }
  return best;
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
