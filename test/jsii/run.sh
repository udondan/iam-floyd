#!/usr/bin/env bash

# Tests the cdk-iam-floyd packages for Python, Java, .NET and Go, written by `make package-jsii`.
#
# The API docs are rendered from the jsii assembly with jsii-docgen, as Construct Hub does.
# floyd-consumer, a jsii construct library that depends on cdk-iam-floyd, is compiled with jsii and
# packaged with jsii-pacmak against the local cdk-iam-floyd packages. Then the same scenarios run in
# each language, using cdk-iam-floyd directly and through floyd-consumer, and their policies are
# compared to expected.json. TypeScript runs without jsii in between and is the baseline:
# `UPDATE=1 python3 test/jsii/compare.py test/jsii/expected.json test/jsii/out/typescript.txt`
# writes its results to expected.json.
#
# Usage: test/jsii/run.sh [languages, default: typescript python java dotnet go]

set -euo pipefail

ROOT=$(pwd)
TEST="${ROOT}/test/jsii"
OUT="${TEST}/out"
if [[ $# -gt 0 ]]; then
  LANGUAGES=("$@")
else
  LANGUAGES=(typescript python java dotnet go)
fi
VERSION=$(node -p "require('./package.json').version")

export JSII_SILENCE_WARNING_UNTESTED_NODE_VERSION=1

if [[ ! -f "${ROOT}/.jsii" || ! -d "${ROOT}/dist" ]]; then
  echo "Run \`make package-jsii\` first" >&2
  exit 1
fi

log() {
  echo -e "\x1b[96m$*\x1b[0m"
}

rm -rf "${OUT}"
mkdir -p "${OUT}"

log "Rendering the API docs, like Construct Hub"
mkdir -p "${OUT}/docs"
npx jsii-docgen -l typescript -l python -l java -l csharp -l go -o "${OUT}/docs/API.md"

log "Packing cdk-iam-floyd@${VERSION}"
npm pack --silent --pack-destination "${OUT}" > /dev/null

log "Building floyd-consumer"
rsync -a --exclude node_modules "${TEST}/consumer/" "${OUT}/consumer/"
cd "${OUT}/consumer"
npm pkg set "peerDependencies.cdk-iam-floyd=^${VERSION}" \
  "devDependencies.cdk-iam-floyd=file:../cdk-iam-floyd-${VERSION}.tgz"
npm install --no-audit --no-fund --silent
# jsii-pacmak builds against the outputs of dependencies in `<package>/dist/<language>`
cp -R "${ROOT}/dist" node_modules/cdk-iam-floyd/dist
npx jsii
TARGETS=()
for language in "${LANGUAGES[@]}"; do
  [[ "${language}" == typescript ]] || TARGETS+=("${language}")
done
if [[ ${#TARGETS[@]} -gt 0 ]]; then
  npx jsii-pacmak --targets "$(IFS=,; echo "${TARGETS[*]}")"
fi
CONSUMER="${OUT}/consumer/dist"

run_typescript() {
  cp "${TEST}/typescript/scenarios.mts" "${OUT}/consumer/scenarios.mts"
  cd "${OUT}/consumer"
  node --no-warnings scenarios.mts
}

run_python() {
  python3 -m venv "${OUT}/venv"
  "${OUT}/venv/bin/pip" install --quiet --find-links "${ROOT}/dist/python" --find-links "${CONSUMER}/python" floyd-consumer
  "${OUT}/venv/bin/python" "${TEST}/python/scenarios.py"
}

run_java() {
  cp -R "${TEST}/java" "${OUT}/java"
  cd "${OUT}/java"
  # a separate local repository, so no floyd-consumer of an earlier run is used
  mvn --quiet --batch-mode compile exec:java \
    "-Dmaven.repo.local=${OUT}/m2" \
    "-Dfloyd.repo=${ROOT}/dist/java" \
    "-Dconsumer.repo=${CONSUMER}/java"
}

run_dotnet() {
  cp -R "${TEST}/dotnet" "${OUT}/dotnet"
  cd "${OUT}/dotnet"
  cat > nuget.config << EOF
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <add key="cdk-iam-floyd" value="${ROOT}/dist/dotnet" />
    <add key="floyd-consumer" value="${CONSUMER}/dotnet" />
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" />
  </packageSources>
</configuration>
EOF
  dotnet run --verbosity quiet
}

run_go() {
  cp -R "${TEST}/go" "${OUT}/go"
  cd "${OUT}/go"
  go mod init scenarios
  go mod edit -replace "udondan.github.io/iam-floyd/go/cdkiamfloyd=${ROOT}/dist/go/cdkiamfloyd"
  go mod edit -replace "example.com/floyd-consumer-go/floydconsumer=${CONSUMER}/go/floydconsumer"
  go mod edit -require "udondan.github.io/iam-floyd/go/cdkiamfloyd@v${VERSION}"
  go mod edit -require example.com/floyd-consumer-go/floydconsumer@v1.0.0
  go mod tidy
  go run .
}

RESULTS=()
for language in "${LANGUAGES[@]}"; do
  log "Running scenarios in ${language}"
  RESULTS+=("${OUT}/${language}.txt")
  (
    set -euo pipefail
    "run_${language}"
  ) > "${OUT}/${language}.txt"
  cd "${ROOT}"
done

log "Comparing results"
python3 "${TEST}/compare.py" "${TEST}/expected.json" "${RESULTS[@]}"
