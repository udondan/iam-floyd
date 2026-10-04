#!/usr/bin/env bash

# Tests the native packages: runs the scenarios against TypeScript, the baseline, and against each
# language, and compares the results. The scenarios are those of scenarios.json, which test the
# core, plus those of services.ts, which call every method of every service. Then runs the examples
# of the docs in each language and compares them to the .result files, and compares the AWS managed
# policies.
#
# Usage: test/transpile/run.sh [languages, default: python java]
#
# The languages run against the generated sources, or against the built packages when they are set:
# PYTHON_WHEEL=<wheel of make package-native>, JAVA_JAR=<jar of make package-native>

set -euo pipefail

TEST=test/transpile
OUT="${TEST}/out"
if [[ $# -gt 0 ]]; then
  LANGUAGES=("$@")
else
  LANGUAGES=(python java)
fi

rm -rf "${OUT}"
mkdir -p "${OUT}"
npx ts-node bin/transpile.ts
npx ts-node "${TEST}/services.ts" > "${OUT}/services.json"
SCENARIOS=("${TEST}/scenarios.json" "${OUT}/services.json")

for scenarios in "${SCENARIOS[@]}"; do
  npx ts-node "${TEST}/typescript/run.ts" "${scenarios}" >> "${OUT}/typescript.txt"
done
npx ts-node "${TEST}/typescript/managed-policies.ts" > "${OUT}/managed-policies.json"

PYTHON=python3
if [[ -n "${PYTHON_WHEEL:-}" ]]; then
  uv venv --quiet --python "$(command -v python3)" "${OUT}/venv"
  uv pip install --quiet --python "${OUT}/venv/bin/python" "${PYTHON_WHEEL}"
  PYTHON="${OUT}/venv/bin/python"
  export IAM_FLOYD_INSTALLED=1
  echo "Testing ${PYTHON_WHEEL} with $("${PYTHON}" --version)"
fi

# the Java runners in test/transpile/java/ and the stand-ins of the examples in stubs/
JAVA_CP=
if [[ " ${LANGUAGES[*]} " == *" java "* ]]; then
  if [[ -n "${JAVA_JAR:-}" ]]; then
    JAVA_CP="${JAVA_JAR}"
  else
    find java/src/main/java -name '*.java' > "${OUT}/java-sources.txt"
    javac --release 11 -encoding UTF-8 -nowarn -d "${OUT}/java/core" @"${OUT}/java-sources.txt"
    JAVA_CP="${OUT}/java/core"
  fi
  find "${TEST}/java" -name '*.java' > "${OUT}/java-test-sources.txt"
  javac --release 11 -encoding UTF-8 -cp "${JAVA_CP}" -d "${OUT}/java/test" @"${OUT}/java-test-sources.txt"
  JAVA_CP="${JAVA_CP}:${OUT}/java/test"
  echo "Testing Java with $(java -version 2>&1 | head -1)"
fi

FAILED=()
for language in "${LANGUAGES[@]}"; do
  echo "Testing ${language}"
  for scenarios in "${SCENARIOS[@]}"; do
    case "${language}" in
      python) "${PYTHON}" "${TEST}/python/run.py" "${scenarios}" >> "${OUT}/python.txt" ;;
      java) java -cp "${JAVA_CP}" Run "${scenarios}" >> "${OUT}/java.txt" ;;
      *)
        echo "Unknown language: ${language}" >&2
        exit 1
        ;;
    esac
  done
  if diff -q "${OUT}/typescript.txt" "${OUT}/${language}.txt" > /dev/null; then
    echo "All $(wc -l < "${OUT}/typescript.txt" | tr -d ' ') scenarios passed"
  else
    # the lines of the services are long, so only the names of the differing scenarios
    diff "${OUT}/typescript.txt" "${OUT}/${language}.txt" | grep '^[<>]' | cut -f1 | head -50
    FAILED+=("${language}")
  fi

  case "${language}" in
    python) "${PYTHON}" "${TEST}/python/examples.py" examples > "${OUT}/examples-python.txt" ;;
    java) java -cp "${JAVA_CP}" Examples examples "${OUT}/java/examples" > "${OUT}/examples-java.txt" ;;
  esac
  if python3 test/jsii/examples/compare.py --standalone examples "${OUT}/examples-${language}.txt" > "${OUT}/examples-${language}.log"; then
    echo "All $(wc -l < "${OUT}/examples-${language}.log" | tr -d ' ') examples passed"
  else
    grep -v ': OK$' "${OUT}/examples-${language}.log"
    FAILED+=("${language} examples")
  fi

  case "${language}" in
    python) managed_policies=("${PYTHON}" "${TEST}/python/managed_policies.py") ;;
    java) managed_policies=(java -cp "${JAVA_CP}" ManagedPolicies) ;;
  esac
  if ! "${managed_policies[@]}" "${OUT}/managed-policies.json"; then
    FAILED+=("${language} managed policies")
  fi
done

if [[ ${#FAILED[@]} -gt 0 ]]; then
  echo "Failed: ${FAILED[*]}" >&2
  exit 1
fi
