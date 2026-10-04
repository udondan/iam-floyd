#!/usr/bin/env bash

# Tests the core transpiled from lib/shared/: runs the scenarios of scenarios.json in TypeScript, the baseline,
# and in each language, and compares the results.
#
# Usage: test/transpile/run.sh [languages, default: python]

set -euo pipefail

TEST=test/transpile
OUT="${TEST}/out"
if [[ $# -gt 0 ]]; then
  LANGUAGES=("$@")
else
  LANGUAGES=(python)
fi

rm -rf "${OUT}"
mkdir -p "${OUT}"
npx ts-node bin/transpile.ts
npx ts-node "${TEST}/typescript/run.ts" "${TEST}/scenarios.json" > "${OUT}/typescript.txt"

FAILED=()
for language in "${LANGUAGES[@]}"; do
  echo "Testing ${language}"
  case "${language}" in
    python) python3 "${TEST}/python/run.py" "${TEST}/scenarios.json" > "${OUT}/python.txt" ;;
    *)
      echo "Unknown language: ${language}" >&2
      exit 1
      ;;
  esac
  if ! diff "${OUT}/typescript.txt" "${OUT}/${language}.txt"; then
    FAILED+=("${language}")
  fi
done

if [[ ${#FAILED[@]} -gt 0 ]]; then
  echo "Failed: ${FAILED[*]}" >&2
  exit 1
fi
echo "All $(wc -l < "${OUT}/typescript.txt" | tr -d ' ') scenarios passed"
