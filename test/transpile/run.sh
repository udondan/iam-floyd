#!/usr/bin/env bash

# Tests the native packages: runs the scenarios against TypeScript, the baseline, and against each
# language, and compares the results. The scenarios are those of scenarios.json, which test the
# core, plus those of services.ts, which call every method of every service. Then runs the examples
# of the docs in each language and compares them to the .result files, together with the policies
# of the policy converter (test/converter/cases.ts), compares the AWS managed policies, and tests
# the cases of the hand-written runtime that the scenarios cannot reach.
#
# Usage: test/transpile/run.sh [languages, default: python java dotnet go]
#
# The languages run against the generated sources, or against the built packages when they are set:
# PYTHON_WHEEL=<wheel of make package-native>, JAVA_JAR=<jar of make package-native>,
# DOTNET_PACKAGES=<directory of the nupkg of make package-native>, GO_MODULE=<zip of the module of
# make package-native>. DOTNET_FRAMEWORK sets the target framework of the .NET test, default: that
# of the installed SDK
#
# COVERAGE=1 measures the coverage of the hand-written runtime of the generated sources into
# coverage/native/: python.xml (coverage.py), java.xml (JaCoCo), dotnet.xml (coverlet) and go.out

set -euo pipefail

TEST=test/transpile
OUT="${TEST}/out"
if [[ $# -gt 0 ]]; then
  LANGUAGES=("$@")
else
  LANGUAGES=(python java dotnet go)
fi

COVERAGE="${COVERAGE:-}"
COVERAGE_DIR=coverage/native
if [[ -n "${COVERAGE}" ]]; then
  if [[ -n "${PYTHON_WHEEL:-}${JAVA_JAR:-}${DOTNET_PACKAGES:-}${GO_MODULE:-}" ]]; then
    echo "COVERAGE measures the generated sources, not the built packages" >&2
    exit 1
  fi
  rm -rf "${COVERAGE_DIR}"
  mkdir -p "${COVERAGE_DIR}"
fi

rm -rf "${OUT}"
mkdir -p "${OUT}"
npx ts-node bin/transpile.ts
# the examples of the docs, without the code of cdk-iam-floyd, and those of the policy converter
EXAMPLES_DIR="${OUT}/examples"
rsync -a --exclude "*.ts" --exclude "*.js" --exclude "/*/cdk/" examples/ "${EXAMPLES_DIR}"
npx ts-node test/converter/cases.ts Standalone "${EXAMPLES_DIR}"
npx ts-node "${TEST}/services.ts" > "${OUT}/services.json"
SCENARIOS=("${TEST}/scenarios.json" "${OUT}/services.json")

for scenarios in "${SCENARIOS[@]}"; do
  npx ts-node "${TEST}/typescript/run.ts" "${scenarios}" >> "${OUT}/typescript.txt"
done
npx ts-node "${TEST}/typescript/managed-policies.ts" > "${OUT}/managed-policies.json"

PYTHON=(python3)
if [[ -n "${PYTHON_WHEEL:-}" ]]; then
  uv venv --quiet --python "$(command -v python3)" "${OUT}/venv"
  uv pip install --quiet --python "${OUT}/venv/bin/python" "${PYTHON_WHEEL}"
  PYTHON=("${OUT}/venv/bin/python")
  export IAM_FLOYD_INSTALLED=1
  echo "Testing ${PYTHON_WHEEL} with $("${PYTHON[@]}" --version)"
elif [[ -n "${COVERAGE}" && " ${LANGUAGES[*]} " == *" python "* ]]; then
  uv venv --quiet --python "$(command -v python3)" "${OUT}/venv"
  uv pip install --quiet --python "${OUT}/venv/bin/python" -r "${TEST}/python/requirements.txt"
  export COVERAGE_FILE="${OUT}/python.coverage"
  PYTHON=("${OUT}/venv/bin/python" -m coverage run --append --branch
    "--include=python/iam_floyd/__init__.py,python/iam_floyd/_js.py")
fi

# the Java runners in test/transpile/java/
JAVA=(java)
JAVA_CP=
if [[ " ${LANGUAGES[*]} " == *" java "* ]]; then
  if [[ -n "${COVERAGE}" ]]; then
    mvn --quiet --file "${TEST}/java/pom.xml" dependency:copy-dependencies -DexcludeTransitive=true \
      -Dmdep.stripVersion=true -Dmdep.stripClassifier=true -DoutputDirectory="$(pwd)/${OUT}/jacoco"
    JAVA+=("-javaagent:${OUT}/jacoco/org.jacoco.agent.jar=destfile=${OUT}/jacoco.exec,includes=com.udondan.iamFloyd.Js*")
  fi
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

# the .NET test in test/transpile/dotnet/, with the examples of iam-floyd
if [[ " ${LANGUAGES[*]} " == *" dotnet "* ]]; then
  mkdir -p "${OUT}/dotnet/examples"
  for example in "${EXAMPLES_DIR}"/*/*.cs; do
    name="$(basename "$(dirname "${example}")")"
    if [[ "${name}" == *.cdk ]]; then
      continue
    fi
    mkdir -p "${OUT}/dotnet/examples/${name}"
    cp "${example}" "${OUT}/dotnet/examples/${name}/${name}.cs"
  done
  DOTNET_FRAMEWORK="${DOTNET_FRAMEWORK:-net$(dotnet --version | cut -d. -f1).0}"
  DOTNET_BUILD=(-p:TestFramework="${DOTNET_FRAMEWORK}" -p:Examples="$(pwd)/${OUT}/dotnet/examples")
  if [[ -n "${DOTNET_PACKAGES:-}" ]]; then
    # restored into out/, so that a package rebuilt with the same version is not taken from the cache
    DOTNET_BUILD+=(-p:RestorePackagesPath="$(pwd)/${OUT}/dotnet/packages")
    DOTNET_BUILD+=(-p:FloydPackages="$(cd "${DOTNET_PACKAGES}" && pwd)")
    DOTNET_BUILD+=(-p:FloydVersion="$(node -p "require('./package.json').version")")
  fi
  if [[ -n "${COVERAGE}" ]]; then
    # coverlet does not find the sources of a deterministic build
    DOTNET_BUILD+=(-p:ContinuousIntegrationBuild=false)
    dotnet tool restore > /dev/null
  fi
  dotnet build "${TEST}/dotnet/Test.csproj" --nologo -v quiet -c Release \
    --artifacts-path "${OUT}/dotnet/artifacts" "${DOTNET_BUILD[@]}"
  DOTNET_TEST=(dotnet "${OUT}/dotnet/artifacts/bin/Test/release/Test.dll")
  echo "Testing .NET with ${DOTNET_FRAMEWORK}"
fi

# the Go test in test/transpile/go/, with the examples of iam-floyd and the registry of the classes
# and constants
if [[ " ${LANGUAGES[*]} " == *" go "* ]]; then
  GO_DIR="${OUT}/go"
  cp -R "${TEST}/go" "${GO_DIR}"
  rm "${GO_DIR}/registry.ts"
  npx ts-node "${TEST}/go/registry.ts" "${OUT}/managed-policies.json" "${GO_DIR}/registry.go"
  for example in "${EXAMPLES_DIR}"/*/*.go; do
    name="$(basename "$(dirname "${example}")")"
    if [[ "${name}" != *.cdk ]]; then
      cp "${example}" "${GO_DIR}/example-${name}.go"
    fi
  done
  if [[ -n "${GO_MODULE:-}" ]]; then
    unzip -q "${GO_MODULE}" -d "${OUT}/go-module"
    # Go 1.21 takes the @ of the directory in the zip for a version
    mv "${OUT}"/go-module/udondan.github.io/iam-floyd/go/iamfloyd@* "${OUT}/go-module/iamfloyd"
    GO_MODULE_DIR="$(cd "${OUT}/go-module/iamfloyd" && pwd)"
  else
    GO_MODULE_DIR="$(pwd)/go/iamfloyd"
  fi
  GO_PACKAGE=udondan.github.io/iam-floyd/go/iamfloyd
  go -C "${GO_DIR}" mod edit -replace "${GO_PACKAGE}=${GO_MODULE_DIR}"
  go -C "${GO_DIR}" vet ./...
  GO_BUILD=(build)
  # the test of the runtime, in the package of the runtime, as it is internal
  GO_RUNTIME=(go -C "${GO_MODULE_DIR}" test)
  if [[ -n "${COVERAGE}" ]]; then
    # the package main must be covered as well, otherwise the test writes no coverage
    GO_BUILD+=(-cover -coverpkg="floydtest,${GO_PACKAGE},${GO_PACKAGE}/internal/js")
    GOCOVERDIR="$(pwd)/${OUT}/go-coverage"
    export GOCOVERDIR
    mkdir -p "${GOCOVERDIR}"
    GO_RUNTIME+=(-cover ./internal/js/ -args -test.gocoverdir="${GOCOVERDIR}")
  else
    GO_RUNTIME+=(./internal/js/)
  fi
  go -C "${GO_DIR}" "${GO_BUILD[@]}" -o test .
  GO_TEST=("${GO_DIR}/test")
  echo "Testing Go with $(go version)"
fi

# coverlet hides the output of the test, so the coverage of .NET takes a run of its own
dotnet_coverage() {
  local test="${OUT}/dotnet/artifacts/bin/Test/release/Test.dll"
  dotnet tool run coverlet "${test}" --target dotnet --targetargs "${test} $*" \
    --include "[IAM.Floyd]IAM.Floyd.Js*" --merge-with "${OUT}/dotnet-coverage/coverage.json" \
    --format json --format cobertura --output "${OUT}/dotnet-coverage/" > /dev/null
}

FAILED=()
for language in "${LANGUAGES[@]}"; do
  echo "Testing ${language}"
  for scenarios in "${SCENARIOS[@]}"; do
    case "${language}" in
      python) "${PYTHON[@]}" "${TEST}/python/run.py" "${scenarios}" >> "${OUT}/python.txt" ;;
      java) "${JAVA[@]}" -cp "${JAVA_CP}" Run "${scenarios}" >> "${OUT}/java.txt" ;;
      dotnet) "${DOTNET_TEST[@]}" scenarios "${scenarios}" >> "${OUT}/dotnet.txt" ;;
      go) "${GO_TEST[@]}" scenarios "${scenarios}" >> "${OUT}/go.txt" ;;
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
    python) "${PYTHON[@]}" "${TEST}/python/examples.py" "${EXAMPLES_DIR}" > "${OUT}/examples-python.txt" ;;
    java) "${JAVA[@]}" -cp "${JAVA_CP}" Examples "${EXAMPLES_DIR}" "${OUT}/java/examples" > "${OUT}/examples-java.txt" ;;
    dotnet) "${DOTNET_TEST[@]}" examples "${OUT}/dotnet/examples" > "${OUT}/examples-dotnet.txt" ;;
    go) "${GO_TEST[@]}" examples > "${OUT}/examples-go.txt" ;;
  esac
  if python3 test/jsii/examples/compare.py --standalone "${EXAMPLES_DIR}" "${OUT}/examples-${language}.txt" > "${OUT}/examples-${language}.log"; then
    echo "All $(wc -l < "${OUT}/examples-${language}.log" | tr -d ' ') examples passed"
  else
    grep -v ': OK$' "${OUT}/examples-${language}.log"
    FAILED+=("${language} examples")
  fi

  case "${language}" in
    python) managed_policies=("${PYTHON[@]}" "${TEST}/python/managed_policies.py") ;;
    java) managed_policies=("${JAVA[@]}" -cp "${JAVA_CP}" ManagedPolicies) ;;
    dotnet) managed_policies=("${DOTNET_TEST[@]}" managed-policies) ;;
    go) managed_policies=("${GO_TEST[@]}" managed-policies) ;;
  esac
  if ! "${managed_policies[@]}" "${OUT}/managed-policies.json"; then
    FAILED+=("${language} managed policies")
  fi

  case "${language}" in
    python) runtime=("${PYTHON[@]}" "${TEST}/python/runtime.py") ;;
    java) runtime=("${JAVA[@]}" -cp "${JAVA_CP}" com.udondan.iamFloyd.RuntimeTest) ;;
    dotnet) runtime=("${DOTNET_TEST[@]}" runtime) ;;
    go) runtime=("${GO_RUNTIME[@]}") ;;
  esac
  if ! "${runtime[@]}"; then
    FAILED+=("${language} runtime")
  fi

  if [[ -n "${COVERAGE}" ]]; then
    case "${language}" in
      python)
        "${OUT}/venv/bin/python" -m coverage xml --quiet -o "${COVERAGE_DIR}/python.xml"
        ;;
      java)
        java -jar "${OUT}/jacoco/org.jacoco.cli.jar" report "${OUT}/jacoco.exec" --quiet \
          --classfiles "${OUT}/java/core/com/udondan/iamFloyd/Js.class" \
          --classfiles "${OUT}/java/core/com/udondan/iamFloyd/Json.class" \
          --sourcefiles java/src/main/java --xml "${COVERAGE_DIR}/java.xml"
        ;;
      dotnet)
        mkdir -p "${OUT}/dotnet-coverage"
        for scenarios in "${SCENARIOS[@]}"; do
          dotnet_coverage scenarios "${scenarios}"
        done
        dotnet_coverage examples "${OUT}/dotnet/examples"
        dotnet_coverage runtime
        cp "${OUT}/dotnet-coverage/coverage.cobertura.xml" "${COVERAGE_DIR}/dotnet.xml"
        ;;
      go)
        # only the hand-written files, not the generated ones and not the test
        go tool covdata textfmt -i="${GOCOVERDIR}" -o "${OUT}/go-coverage.out"
        grep -E "^mode:|^${GO_PACKAGE}/(helpers\.go|internal/js/)" "${OUT}/go-coverage.out" > "${COVERAGE_DIR}/go.out"
        ;;
    esac
    echo "Wrote the coverage of ${language} to ${COVERAGE_DIR}"
  fi
done

if [[ ${#FAILED[@]} -gt 0 ]]; then
  echo "Failed: ${FAILED[*]}" >&2
  exit 1
fi
