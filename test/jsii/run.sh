#!/usr/bin/env bash

# Tests the cdk-iam-floyd packages for Python, Java, .NET and Go, written by `make package-jsii`.
#
# With TypeScript, the API docs are rendered from the jsii assembly with jsii-docgen, as Construct Hub
# does.
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
TARGETS=()
for language in "${LANGUAGES[@]}"; do
  [[ "${language}" == typescript ]] || TARGETS+=("${language}")
done

export JSII_SILENCE_WARNING_UNTESTED_NODE_VERSION=1
# a separate NuGet cache, so no cdk-iam-floyd of an earlier run with the same version is used
export NUGET_PACKAGES="${OUT}/nuget"

if [[ ! -f "${ROOT}/.jsii" || (${#TARGETS[@]} -gt 0 && ! -d "${ROOT}/dist") ]]; then
  echo "Run \`make package-jsii\` first" >&2
  exit 1
fi

log() {
  echo -e "\x1b[96m$*\x1b[0m"
}

rm -rf "${OUT}"
mkdir -p "${OUT}"

if [[ " ${LANGUAGES[*]} " == *" typescript "* ]]; then
  log "Rendering the API docs, like Construct Hub"
  mkdir -p "${OUT}/docs"
  npx jsii-docgen -l typescript -l python -l java -l csharp -l go -o "${OUT}/docs/API.md"
fi

log "Packing cdk-iam-floyd@${VERSION}"
npm pack --silent --pack-destination "${OUT}" > /dev/null

log "Building floyd-consumer"
rsync -a --exclude node_modules "${TEST}/consumer/" "${OUT}/consumer/"
cd "${OUT}/consumer"
npm pkg set "peerDependencies.cdk-iam-floyd=^${VERSION}" \
  "devDependencies.cdk-iam-floyd=file:../cdk-iam-floyd-${VERSION}.tgz"
npm install --no-audit --no-fund --silent
npx jsii
if [[ ${#TARGETS[@]} -gt 0 ]]; then
  # jsii-pacmak builds against the outputs of dependencies in `<package>/dist/<language>`
  cp -R "${ROOT}/dist" node_modules/cdk-iam-floyd/dist
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
  # cdk-iam-floyd comes from the module zip that is published, through a local copy of the proxy
  "${ROOT}/bin/go-proxy" site "${OUT}/go-proxy" "${ROOT}/dist/go-module/"*.zip >&2
  export GOPROXY="file://${OUT}/go-proxy/go,https://proxy.golang.org" GONOSUMDB=udondan.github.io
  # the module cache and the module index (goindex) would keep the module of an earlier run with the same version
  export GODEBUG=goindex=0
  local cache
  cache=$(go env GOMODCACHE)
  rm -rf "${cache}/cache/download/udondan.github.io"
  if [[ -d "${cache}/udondan.github.io" ]]; then
    chmod -R u+w "${cache}/udondan.github.io"
    rm -rf "${cache}/udondan.github.io"
  fi
  cd "${OUT}/go"
  go mod init scenarios
  go mod edit -replace "example.com/floyd-consumer-go/floydconsumer=${CONSUMER}/go/floydconsumer"
  go mod edit -require "udondan.github.io/iam-floyd/go/cdkiamfloyd@v${VERSION}"
  go mod edit -require example.com/floyd-consumer-go/floydconsumer@v1.0.0
  go mod tidy
  go run .
}

# The examples of the docs, examples/*/*.{py,java,cs,go}, run after the scenarios and reuse their setup

examples_python() {
  "${OUT}/venv/bin/python" "${TEST}/examples/python/examples.py" "${ROOT}/examples"
}

examples_java() {
  cp -R "${TEST}/examples/java" "${OUT}/examples-java"
  cp "${ROOT}"/examples/*/*.java "${OUT}/examples-java/src/main/java/"
  cd "${OUT}/examples-java"
  mvn --quiet --batch-mode compile exec:java \
    "-Dmaven.repo.local=${OUT}/m2" \
    "-Dfloyd.repo=${ROOT}/dist/java" \
    "-Dfloyd.version=${VERSION}" \
    "-Dexec.args=${ROOT}/examples"
}

examples_dotnet() {
  cp -R "${TEST}/examples/dotnet" "${OUT}/examples-dotnet"
  cp "${OUT}/dotnet/nuget.config" "${OUT}/examples-dotnet/"
  cd "${OUT}/examples-dotnet"
  dotnet run --verbosity quiet "-p:FloydVersion=${VERSION}" "-p:Examples=${ROOT}/examples" -- "${ROOT}/examples"
}

examples_go() {
  cp -R "${TEST}/examples/go" "${OUT}/examples-go"
  cp "${ROOT}"/examples/*/*.go "${OUT}/examples-go/"
  # the proxy written by run_go
  export GOPROXY="file://${OUT}/go-proxy/go,https://proxy.golang.org" GONOSUMDB=udondan.github.io GODEBUG=goindex=0
  cd "${OUT}/examples-go"
  go mod init examples
  go mod edit -require "udondan.github.io/iam-floyd/go/cdkiamfloyd@v${VERSION}"
  go mod tidy
  go run .
}

RESULTS=()
EXAMPLES=()
for language in "${LANGUAGES[@]}"; do
  log "Running scenarios in ${language}"
  RESULTS+=("${OUT}/${language}.txt")
  (
    set -euo pipefail
    "run_${language}"
  ) > "${OUT}/${language}.txt"
  cd "${ROOT}"
  if [[ "${language}" != typescript ]]; then
    log "Running examples in ${language}"
    EXAMPLES+=("${OUT}/examples-${language}.txt")
    (
      set -euo pipefail
      "examples_${language}"
    ) > "${OUT}/examples-${language}.txt"
    cd "${ROOT}"
  fi
done

log "Comparing results"
python3 "${TEST}/compare.py" "${TEST}/expected.json" "${RESULTS[@]}"
if [[ ${#EXAMPLES[@]} -gt 0 ]]; then
  log "Comparing the results of the examples"
  python3 "${TEST}/examples/compare.py" "${ROOT}/examples" "${EXAMPLES[@]}"
fi
