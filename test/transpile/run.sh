#!/usr/bin/env bash

# Tests the native packages: runs the scenarios against TypeScript, the baseline, and against each
# language, and compares the results. The scenarios are those of scenarios.json, which test the
# core, plus those of services.ts, which call every method of every service. Then runs the examples
# of the docs in each language and compares them to the .result files, and compares the AWS managed
# policies.
#
# Usage: test/transpile/run.sh [languages, default: python java dotnet]
#
# The languages run against the generated sources, or against the built packages when they are set:
# PYTHON_WHEEL=<wheel of make package-native>, JAVA_JAR=<jar of make package-native>,
# DOTNET_PACKAGES=<directory of the nupkg of make package-native>. DOTNET_FRAMEWORK sets the target
# framework of the .NET test, default: that of the installed SDK

set -euo pipefail

TEST=test/transpile
OUT="${TEST}/out"
if [[ $# -gt 0 ]]; then
  LANGUAGES=("$@")
else
  LANGUAGES=(python java dotnet)
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

# the .NET test in test/transpile/dotnet/, with the examples rewritten for the native package
if [[ " ${LANGUAGES[*]} " == *" dotnet "* ]]; then
  mkdir -p "${OUT}/dotnet/examples"
  for example in examples/*/*.cs; do
    name="$(basename "$(dirname "${example}")")"
    if [[ "${name}" == *.cdk ]]; then
      continue
    fi
    mkdir -p "${OUT}/dotnet/examples/${name}"
    sed -e 's/CDK\.IAM\.Floyd/IAM.Floyd/' \
      -e 's/new PolicyStatement\[\]/new object[]/' \
      -e 's/new PolicyStatementProps { Sid = \([^}]*\) }/\1/' \
      "${example}" > "${OUT}/dotnet/examples/${name}/${name}.cs"
  done
  DOTNET_FRAMEWORK="${DOTNET_FRAMEWORK:-net$(dotnet --version | cut -d. -f1).0}"
  DOTNET_BUILD=(-p:TestFramework="${DOTNET_FRAMEWORK}" -p:Examples="$(pwd)/${OUT}/dotnet/examples")
  if [[ -n "${DOTNET_PACKAGES:-}" ]]; then
    # restored into out/, so that a package rebuilt with the same version is not taken from the cache
    DOTNET_BUILD+=(-p:RestorePackagesPath="$(pwd)/${OUT}/dotnet/packages")
    DOTNET_BUILD+=(-p:FloydPackages="$(cd "${DOTNET_PACKAGES}" && pwd)")
    DOTNET_BUILD+=(-p:FloydVersion="$(node -p "require('./package.json').version")")
  fi
  dotnet build "${TEST}/dotnet/Test.csproj" --nologo -v quiet -c Release \
    --artifacts-path "${OUT}/dotnet/artifacts" "${DOTNET_BUILD[@]}"
  DOTNET_TEST=(dotnet "${OUT}/dotnet/artifacts/bin/Test/release/Test.dll")
  echo "Testing .NET with ${DOTNET_FRAMEWORK}"
fi

FAILED=()
for language in "${LANGUAGES[@]}"; do
  echo "Testing ${language}"
  for scenarios in "${SCENARIOS[@]}"; do
    case "${language}" in
      python) "${PYTHON}" "${TEST}/python/run.py" "${scenarios}" >> "${OUT}/python.txt" ;;
      java) java -cp "${JAVA_CP}" Run "${scenarios}" >> "${OUT}/java.txt" ;;
      dotnet) "${DOTNET_TEST[@]}" scenarios "${scenarios}" >> "${OUT}/dotnet.txt" ;;
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
    dotnet) "${DOTNET_TEST[@]}" examples "${OUT}/dotnet/examples" > "${OUT}/examples-dotnet.txt" ;;
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
    dotnet) managed_policies=("${DOTNET_TEST[@]}" managed-policies) ;;
  esac
  if ! "${managed_policies[@]}" "${OUT}/managed-policies.json"; then
    FAILED+=("${language} managed policies")
  fi
done

if [[ ${#FAILED[@]} -gt 0 ]]; then
  echo "Failed: ${FAILED[*]}" >&2
  exit 1
fi
