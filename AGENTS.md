# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Project Overview

IAM Floyd is an AWS IAM policy statement generator with a fluent interface. It generates TypeScript classes for all AWS services and their actions, resources, and condition keys from AWS documentation. The project supports both standalone usage (`iam-floyd`) and AWS CDK integration (`cdk-iam-floyd`).

## Core Architecture

### Generated Code Structure

- `lib/generated/model/` - Service model per AWS service (JSON, committed). The single source of truth for all generated code
- `lib/generated/policy-statements/` - TypeScript class per AWS service, emitted from the model (not committed)
- `lib/generated/index.ts` - Re-exports all service classes (emitted, not committed)
- `lib/generated/aws-managed-policies/` - Generated AWS managed policies (committed)
- `lib/generated/aws-service-principals/` - List of AWS service principals (`principals.json`, committed) and the class `AwsServicePrincipal` emitted from it (`index.ts`, not committed)
- `lib/shared/` - Hand-written core: `PolicyStatement`, `PolicyDocument`, `All`, `Operator`, `AccessLevel`
- `lib/collection/` - Predefined policy collection utilities
- `lib/generator/` - Scrapes AWS docs with `cheerio` into the model (`model.ts`), and emits TypeScript from the model with `ts-morph` (`emit/typescript.ts`), and the index of the policy converter (`emit/converter.ts`)

### PolicyStatement Inheritance Chain

Built in 10 numbered layers (`lib/shared/policy-statement/`):

```text
1-base → 2-conditions → 3-actions → 4-resources → 5-effect
       → 6-arn-defaults → 8-principals → 10-final (PolicyStatement)
```

Each `*.CDK.ts` file is the CDK variant of that layer (swapped in by `bin/mkcdk.ts`).

The policy documents (`lib/shared/policy/`) build on `1-base`, which holds the statements: in the CDK variant (`1-base.CDK.ts`) `PolicyBase` extends `aws_iam.PolicyDocument` and reads its private `statements`. `PolicyDocument` in `2-final.ts` takes the maximum size and the statements, estimates the size of the policy like the AWS CDK (ARNs with tokens count as `arnSizeEstimate`, 150, actions with tokens as 20), plus the parts the AWS CDK leaves out (`Version`, braces, `Sid`, principal keys), validates it against the maximum size, and splits it first fit like `PolicyDocument._splitDocument` (the protected `splitDocument`). `3-documents.ts` has one subclass per type of policy (`ManagedPolicyDocument`, `InlineRolePolicyDocument`, `S3BucketPolicyDocument`, …), which takes only the statements; only `ManagedPolicyDocument`, `ServiceControlPolicyDocument` and `ResourceControlPolicyDocument` have a public `split()`.

### Dual Package Strategy

One codebase produces two npm packages:

- `iam-floyd` - Standalone (uses built-in base class)
- `cdk-iam-floyd` - Extends `aws_iam.PolicyStatement` from AWS CDK

`bin/mkcdk.ts` transforms between variants by swapping `*.CDK.ts` files and emitting the CDK variant of the service classes from the model.

### CDK Constructs in `on*()` Methods

In the CDK variant, the `on*()` method of a resource type with a single required placeholder also takes a construct, if aws-cdk-lib has a reference interface for it (`aws-cdk-lib/interfaces`, e.g. `onFunction(fn)` with `interfaces.aws_lambda.IFunctionRef`). The method then uses the ARN of the reference (`fn.functionRef.functionArn`), or, if the reference has no ARN, its identifier in place of the placeholder. `lib/generator/cdk-refs.ts` matches the resource types of the model with the reference interfaces of the installed aws-cdk-lib (service prefix ↔ module, resource type ↔ interface) and writes them as `cdkRef` into the model; it runs with `make generate` and alone with `make cdk-refs`. `lib/generated/cdk-refs.json` (committed) has the interfaces in use and the minimum version of aws-cdk-lib, the peer dependency of `cdk-iam-floyd`, which is raised to the installed version only when interfaces are added, and the version of constructs this aws-cdk-lib requires, the other peer dependency (lower, NuGet fails with NU1605). Wrong matches are fixed in `fixes.ts` (`cdkModule`, `resourceTypes.<name>.cdkRef`).

### Other Languages (jsii)

`cdk-iam-floyd` is also packaged for Python, Java, .NET and Go with `jsii-pacmak`. The jsii compiler is not used: `lib/generator/emit/jsii.ts` writes the `.jsii` assembly from the model, and `bin/jsii.ts` adds the `jsii` targets to package.json, writes the assembly and appends the jsii type info to `lib/index.js`. The same `.jsii` is what Construct Hub renders the API docs from. jsii-pacmak runs with `--no-runtime-type-checking` and `bin/jsii-pack.ts` as pack command, which embeds an npm tarball without docs and `.d.ts` files in the packages.

`test/jsii/` builds `floyd-consumer`, a jsii library that depends on `cdk-iam-floyd`, and runs the same scenarios in TypeScript (the baseline, without jsii), Python, Java, .NET and Go against `test/jsii/expected.json`. It also runs the examples of the docs in each language (`examples/<name>/<name>.{py,java,cs,go}`, through the runners in `test/jsii/examples/`) and compares them to the `.result` files. Every example needs a file in every language.

Publishing: the npm package of `cdk-iam-floyd` includes the `.jsii` (`make package-jsii publish LANGUAGES=typescript`), Python goes to PyPI and .NET to NuGet (both trusted publishing), Java to Maven Central (`bin/publish-maven`, signed bundle via the Central Portal API). Go has no registry: `bin/go-proxy` writes the module zip, which is attached to the GitHub release, and a static Go module proxy of both modules (`cdkiamfloyd` and the native `iamfloyd`) for the newest 30 releases, served by GitHub Pages under `udondan.github.io/iam-floyd/go` (job `publish-go-proxy`).

### Native Packages (transpiled core)

The standalone `iam-floyd` is being built natively for other languages, without jsii and without Node.js. The hand-written code in `lib/shared/` (the core) and `lib/collection/`, the names of the AWS managed policies (`lib/generated/aws-managed-policies/iam-floyd.ts`) and the service principals (`lib/generated/aws-service-principals/index.ts`), are transpiled with ts-morph by `lib/generator/transpile/` (`index.ts` collects the files of a module in import order, one backend per language: `python.ts`, `java.ts`, `csharp.ts`, `go.ts`). The only imports from outside a module are the generated service classes, imported from their file (e.g. `../generated/policy-statements/ec2`). The transpiler supports only a narrow subset of TypeScript: anything else fails with file and line, so rewrite the code in supported constructs rather than extending the transpiler for single cases. The service classes are emitted from the model by `lib/generator/emit/python.ts`, with the jsii naming rules (snake_case, `if_`, `in_`), into the package `statement/`, which imports a service on first access. `bin/transpile.ts` writes `python/iam_floyd/_shared.py`, `_collection.py`, `_aws_managed_policies.py`, `_aws_service_principals.py` and `statement/` (not committed). The package imports the collection, the managed policies and the service principals on first access. `python/iam_floyd/_js.py` is the hand-written runtime for JavaScript semantics (number formatting, `toISOString`, sorting by UTF-16 code units, regular expressions, `JSON.stringify`).

Java: the core, the collection and `AwsManagedPolicy` go to the package `com.udondan.iamFloyd`, the service classes (emitted by `lib/generator/emit/java.ts`) and `All` to `com.udondan.iamFloyd.statement`, in `java/src/main/java/` (not committed, except the hand-written runtime `Js.java` and `Json.java`, which writes the JSON like `JSON.stringify`). The classes of the statement are generic (`PolicyStatement<T extends PolicyStatement<T>>`, `Ec2 extends PolicyStatement<Ec2>`), so the fluent methods return the class itself. Optional parameters and union types become overloads, reserved words get a prefix (`doIf`, `doFor`), static properties become constants (`Operator.STRING_EQUALS`).

C#: the core, the collection and `AwsManagedPolicy` go to the namespace `IAM.Floyd`, the service classes (emitted by `lib/generator/emit/csharp.ts`) and `All` to `IAM.Floyd.Statement`, in `dotnet/src/IAM.Floyd/` (not committed, except the project `IAM.Floyd.csproj` and the hand-written runtime `Js.cs` and `Json.cs`). Like in Java, the classes of the statement are generic (`PolicyStatement<T> where T : PolicyStatement<T>`, `Ec2 : PolicyStatement<Ec2>`), optional parameters and union types become overloads and static properties constants. Names are PascalCase (`If`, `For`, `ToJSON`), public fields become properties (`Sid`), and the service classes hide methods of the core with the same name with `new` (e.g. `IfAwsRequestTag`). A generic class with subclasses is referenced by an interface of its public methods without parameters (`IPolicyStatement`, e.g. in `Policy.AddStatements`).

Go: the module `udondan.github.io/iam-floyd/go/iamfloyd` in `go/iamfloyd/` (not committed, except `go.mod`, the hand-written helpers `helpers.go` (`String`, `Strings`, `Number`, `Bool`) and the runtime in `internal/js/`). The core and `AwsManagedPolicy` go to the package `iamfloyd`, the collection to `collection`, the service classes (emitted by `lib/generator/emit/go.ts`) and `All` to `statement`. Inheritance becomes embedding of generic structs (`PolicyStatement[T]`, `type Ec2 struct{ iamfloyd.PolicyStatement[*Ec2] }`) with an `InitX` function per class, and the fluent methods return `T`. Parameters are pointers like in jsii (`*string`, `*[]*string`), optional ones are `nil`, union types `interface{}`. Static properties become constants (`Operator_STRING_EQUALS`), the classes with `toJSON` implement `MarshalJSON`. Like in C#, `PolicyStatement` is referenced by the interface `IPolicyStatement`. `bin/transpile.ts` runs `gofmt` on the output.

`test/transpile/` runs the scenarios against TypeScript (the baseline) and each language, and diffs the output: those of `scenarios.json`, which test the core, and those that `services.ts` builds from the model, which call every method of every service. Then it runs the examples of the docs (`examples/<name>/<name>.{py,java,cs,go}`) with the native package, through `python/examples.py`, which runs them with `iam_floyd` in place of `cdk_iam_floyd`, `java/Examples.java`, which compiles them with `com.udondan.iamFloyd`, `dotnet/` (`run.sh` rewrites them for `IAM.Floyd`) and `go/` (`run.sh` rewrites them for `iamfloyd` and the stand-in `awsiam`, and writes `registry.go` with `registry.ts`, as Go cannot look up classes and constants by name), and compares the statements, the policy document or the list of policy documents they return to the `.result` files with `test/jsii/examples/compare.py --standalone`, which skips the `*.cdk` examples. Last, it compares the AWS managed policies with those of TypeScript.

The Python package is built with hatchling from `python/pyproject.toml`; `bin/transpile.ts` writes the version of package.json into `iam_floyd/_version.py`. It supports Python 3.9 and newer, and has no dependencies at runtime. CI builds it and tests the wheel with the oldest and the newest supported Python; for a release, the tested wheel and sdist go to PyPI as `iam-floyd` (trusted publishing, job `publish-iam-floyd-python`).

The Java package is built with Maven from `java/pom.xml` (`-Drevision=<version of package.json>`), with `--release 11`, into the Maven repository `dist/iam-floyd/java`. CI builds it with the newest Java LTS and tests the jar with Java 11 and the newest LTS; for a release, `bin/publish-maven dist/iam-floyd/java` publishes it to Maven Central as `com.udondan:iam-floyd` (job `publish-iam-floyd-java`).

The .NET package is built with `dotnet pack` from `dotnet/src/IAM.Floyd/IAM.Floyd.csproj` (`-p:Version=<version of package.json>`), for .NET 8, into `dist/iam-floyd/dotnet`. CI builds it with the newest .NET SDK and tests the package with .NET 8 and the newest .NET (`DOTNET_PACKAGES`, `DOTNET_FRAMEWORK`); for a release, it goes to NuGet as `IAM.Floyd` (trusted publishing, job `publish-iam-floyd-dotnet`).

The Go module is zipped by `bin/go-proxy zip` into `dist/iam-floyd/go`, with the LICENSE. It supports Go 1.21 and newer, and has no dependencies. CI tests the zip with Go 1.21 and the newest Go (`GO_MODULE`); for a release, the zip is attached to the GitHub release (job `publish-iam-floyd-go`) and served by the Go module proxy.

### Policy Converter

The policy converter of the docs (`docs/source/policy-converter.rst`) converts an IAM policy to IAM Floyd code in TypeScript, JavaScript, Python, Java, C# and Go, for both variants. The conversion is in `docs/source/_static/js/converter.js`, without dependencies, which runs in the browser and in Node.js; `policy-converter.js` is the UI. It knows the classes and actions from `docs/source/_static/policy-converter/services.json`, which `lib/generator/emit/converter.ts` writes from the model on `make emit` and `make generate` (committed, as Read the Docs builds the docs without Node.js).

`test/converter/cases.ts` converts the policies of `test/converter/policies/` and all AWS managed policies to JavaScript, runs the code against `lib/` and checks that the policy allows and denies the same as the input. Then it writes the code of the other languages as examples (`converter-<name>`) with their `.result` into a copy of `examples/`, which `test/transpile/run.sh` (Standalone) and `test/jsii/run.sh` (CDK) run with the other examples.

## Development Commands

### Build

```bash
make emit            # emit lib/generated/policy-statements/ and lib/generated/index.ts from the model
make build           # emit + tsc --build --force tsconfig.main.json tsconfig.types.json
make package         # build + npm pack
make package-native  # transpile and build the native packages of iam-floyd into dist/iam-floyd/ (Python: uv build, Java: mvn, .NET: dotnet pack, Go: module zip); LANGUAGES=python limits the languages
make clean           # remove node_modules, *.js, *.d.ts
make install         # clean + npm i
```

### Code Generation

```bash
make generate        # scrape AWS docs into lib/generated/model/ and emit (25hr cache)
make generate-force  # NOCACHE=1 - ignores time-based cache
make index-managed-policies  # regenerate AWS managed policies index
make index-service-principals  # collect the service principals and check them with IAM (needs AWS credentials)
make cdk-refs        # match the resource types of the model with the CDK reference interfaces
make stats           # update the counts in README.md and docs from the model
make changelog       # print the changes of the managed policies and the model since the last tag
```

`bin/model-list <services|actions|resources|conditions|cdk-refs>` prints those lists from the model, and `bin/model-diff [ref]` prints the differences to a git ref (default `HEAD`).

### Testing

The project has **no unit test framework**. Tests are integration-style: TypeScript examples are compiled, run, and their output is diffed against stored `.result` files.

```bash
make test-typescript     # compile examples/ + diff against *.result files (standalone)
make clean-test-resources # delete the test policies (path /iam-floyd-test/) and buckets of test-typescript older than an hour
make test-typescript-cdk # after `make cdk`: same for the CDK examples (examples/**/*.cdk.ts)
make cdk-test            # CDK test: real deploy + destroy via AWS CDK
make cdk-all             # cdk + install + build + cdk-test
make test-jsii           # test the packages of `make package-jsii` against TypeScript; LANGUAGES=python limits the languages
make test-transpile      # transpile, compare the scenarios of test/transpile/ with TypeScript and run the examples; PYTHON_WHEEL=<wheel>, JAVA_JAR=<jar>, DOTNET_PACKAGES=<dir of the nupkg> and GO_MODULE=<zip> test the built packages
```

**Run a single example test manually:**

```bash
# 1. Compile a single example
npx tsc -p tsconfig.test-iam-floyd.json

# 2. Run and compare output
node examples/allow/allow.js > /tmp/out.txt
diff /tmp/out.txt examples/allow/allow.result
```

**Regenerate expected results** (after intentional changes):

```bash
make regenerate-code-example-results
```

### Linting

```bash
make lint            # emit + bin/lint: all linters, must pass in CI
make lint-fix        # emit + bin/lint --fix: fixes what can be fixed
make lint-cdk        # after `make cdk`: eslint on the CDK variant
```

`bin/lint` runs:

| Linter                       | Files                                                   |
| ---------------------------- | ------------------------------------------------------- |
| eslint (`eslint.config.mjs`) | TypeScript and JavaScript, with types                   |
| prettier                     | everything prettier knows, except `.prettierignore`     |
| markdownlint-cli2            | Markdown                                                |
| exact versions               | the dependencies of all `package.json` files            |
| ruff, ruff format            | Python (`ruff.toml`, the examples are not formatted)    |
| yamllint                     | YAML (`.yamllint.yaml`)                                 |
| doc8                         | reStructuredText in `docs/source` (`doc8.ini`)          |
| zizmor, actionlint           | GitHub workflows                                        |
| shellcheck, shfmt            | shell scripts, found by their shebang                   |
| gofmt                        | Go                                                      |
| dotnet format whitespace     | C# in `examples/`, `test/` and the runtime of `dotnet/` |
| checkstyle (Google style)    | Java in `examples/` and `test/jsii/` (`lint/pom.xml`)   |

The versions of the linters are pinned, so Renovate updates them: npm packages in `package.json`, Python tools in `lint/requirements.txt` (run with `uv`), Go tools in `lint/go.mod` (`go tool`) and checkstyle in `lint/pom.xml`. Locally, linters whose runtime (uv, Go, .NET, Maven) is missing are skipped; in CI they fail. In the CDK variant, eslint uses `tsconfig.lint-cdk.json`, which resolves `cdk-iam-floyd` to `lib/`, and prettier is off because `mkcdk` writes unformatted code.

The actions in the workflows are pinned to commit SHAs with the version as comment.

### CDK Variant

```bash
make cdk             # transforms codebase to CDK variant (modifies lib/shared, lib/generated, package.json)
make uncdk           # reverts via git stash (lib/generated/aws-managed-policies, lib/shared, package.json) and re-emits
make package-jsii    # after `make cdk`: build, write .jsii and run jsii-pacmak into dist/; LANGUAGES=python limits the languages
```

## Fixing AWS Documentation Errors (`lib/generator/fixes.ts`)

The generator scrapes live AWS docs, which sometimes contain errors or inconsistencies. `fixes.ts` is the central place to patch these before code is generated. **When the generator produces wrong output, add a fix here rather than editing generated files.**

### `fixes` object (keyed by URL slug)

Each top-level key is the URL slug of a service's IAM docs page (e.g. `ec2`, `ssm`, `'neptune-db'`). Supported sub-keys:

| Sub-key                              | Effect                                                                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ignore: true`                       | Skip generating this service entirely (used for EOL services)                                                                                                                   |
| `name: 'slug'`                       | Override the generated filename and class name (needed when the same service prefix spans multiple doc pages, e.g. `pinpointemailservice` → `ses-pinpoint`)                     |
| `service: 'prefix'`                  | Override the IAM service prefix used in the generated code                                                                                                                      |
| `resourceTypes.<name>.arn`           | Replace the ARN template for a resource type with a corrected one                                                                                                               |
| `conditions.<key>.key`               | Rewrite the condition key string (used when docs have a concrete example key like `RequestTag/tag-key` instead of the parametric form `RequestTag/${TagKey}`)                   |
| `conditions.<key>.methodName`        | Override the generated `ifXxx()` method name for a condition                                                                                                                    |
| `conditions.<key>.operator.type`     | Override the inferred operator type (e.g. force `date` instead of `string`)                                                                                                     |
| `conditions.<key>.operator.override` | Set `typeOverride` on the condition (used for custom operator generation)                                                                                                       |
| `cdkModule: 'module'`                | Module of `aws-cdk-lib/interfaces` with the reference interfaces of the service, if its name differs from the service prefix (e.g. `aws_stepfunctions` for `states`)            |
| `resourceTypes.<name>.cdkRef`        | Set the reference interface the `on*()` method accepts in the CDK variant (`{ interface, arn }` or `{ interface, id }`), or `false` for none, when the automatic match is wrong |

### Exported fixer functions

- **`conditionFixer(service, condition)`** — Normalises condition types (`ArrayOfString` → `string`, `long` → `numeric`, etc.) and applies any key/operator overrides from `fixes`. Logs yellow `[L1/L2 fix …]` messages to stdout.
- **`conditionKeyFixer(service, key)`** — Rewrites a raw condition key string using any `conditions.<key>.key` override defined in `fixes`.
- **`arnFixer(service, resource, arn)`** — Applies a cascade of ARN normalisation rules:
  1. Uppercases the first letter of every `${placeholder}` (L1)
  2. Replaces trailing `*` wildcards with `${ResourceName}` (L2)
  3. Deduplicates repeated placeholder names by appending a counter (L2, Rekognition workaround)
  4. Applies the hard-coded ARN override from `fixes` if present (L3)
     After fixing, validates the result against the canonical ARN regex and warns if it doesn't match (with a known-good exception list).
- **`serviceFixer(service)`** — Rewrites the IAM service prefix if a `service` override is defined in `fixes`.

### How to add a fix

1. Find the service's URL slug from its IAM docs URL (e.g. `https://…/list_amazons3.html` → slug is `s3`).
2. Add an entry to the `fixes` object in `lib/generator/fixes.ts`.
3. Run `make generate-force` to regenerate with the fix applied.

## File Modification Rules

**CRITICAL: Never manually edit files in `lib/generated/`.**
They are auto-generated from AWS documentation and will be overwritten on next `make generate` or `make emit`.

Allowed manual edits:

- `lib/shared/` - Core shared classes
- `lib/collection/` - Predefined collections
- `lib/generator/` - Generation logic and fixes
- `bin/` - CLI scripts
- `test/` - Integration test scripts
- `examples/` - Example files and their `.result` counterparts

## Code Style

### Formatting (Prettier + ESLint)

- **Indentation**: 2 spaces (tabs only in Makefiles)
- **Quotes**: Single quotes in TypeScript/JS; double quotes in YAML/JSON
- **Trailing newline**: Required on all files
- **No trailing whitespace**
- Line endings: LF (`\n`)

Run `make lint` to check; Prettier is enforced via `eslint-plugin-prettier` and for the other files by `bin/lint`. `.editorconfig` sets 4 spaces for Python and C#, and tabs for Go.

### TypeScript

Strict settings enforced in `tsconfig.json`:

```text
strict: true
noImplicitAny: true
strictNullChecks: true
strictPropertyInitialization: true
noUnusedLocals: true
noUnusedParameters: true
noImplicitReturns: true
target: ES2020, module: CommonJS
```

- **No `any`**: Prefer explicit types or generics.
- **Unused vars**: Prefix with `_` to suppress (`argsIgnorePattern: ^_`).
- **Naming conventions**: Enforced via `@typescript-eslint/naming-convention`. Use `camelCase` for variables/functions, `PascalCase` for classes/interfaces.
- **Template literals**: Prefer `` `${x}` `` over `'a' + x` (`prefer-template: error`).
- **Deprecated APIs**: `@typescript-eslint/no-deprecated` rule is set to `error` — do not use deprecated APIs.
- **No `require()`**: Use ES `import`/`export`.

### Imports

- Use named imports where possible: `import { Foo } from './foo'`
- Relative imports within `lib/`; absolute for `node_modules`
- `lib/generated/` is excluded from ESLint entirely

### Fluent Interface Pattern

All service classes return `this` to allow chaining:

```typescript
new Statement.S3()
  .allow()
  .toGetObject()
  .on('arn:aws:s3:::my-bucket/*')
  .ifAwsSourceVpc('vpc-123');
```

### JSDoc

- All public methods in generated files have JSDoc with Access Level, conditions, resources, and an AWS docs URL
- In `lib/shared/`, document non-obvious public methods and parameters

## Generated Code Conventions

- `export class ServiceName extends PolicyStatement`
- Action methods: `toXxx()` — e.g., `toGetObject()`, `toListBuckets()`
- Resource methods: `onXxx()` — e.g., `onBucket()`, `onObject()`
- Condition methods: `ifXxx()` — e.g., `ifAwsSourceIp()`, `ifS3Prefix()`
- All methods return `this` for chaining

## TypeScript Compilation

- `tsconfig.json` - Dev/generation (includes all files, uses SWC via `ts-node`)
- `tsconfig.main.json` - Production build of the `.js` files, without comments and source maps (excludes `bin/`, `lib/generator/`, `test/`, CDK files)
- `tsconfig.types.json` - Production build of the `.d.ts` files, with JSDoc
- `tsconfig.test-iam-floyd.json` - Compiles `examples/` excluding `.cdk.ts`
- `tsconfig.test-cdk-iam-floyd.json` - Compiles `examples/**/*.cdk.ts`

SWC is used for faster transpilation: `"ts-node": { "swc": true }` in `tsconfig.json`.

## Git Commit Conventions

Follow conventional commits:

- `feat: description` - New features
- `fix: description` - Bug fixes
- `chore(deps): description` - Dependency updates
- `docs: description` - Documentation changes
- `refactor: description` - Code refactoring
- Simple prose for automated updates: `"Updates AWS managed policies"`

**Never commit directly to `main`**. Use a feature branch. Commits may fail spell-checking; add missing words with `dict-add <word>`.

## CI Workflows (`.github/workflows/`)

- `generate.yml` - Weekly on Sunday: scrapes AWS docs, opens a `feat:` PR with `automerge` label if the model changed
- `index-managed-policies.yml` - Weekly on Sunday: updates managed policies and service principals, opens a `feat:` PR with `automerge` label
- `release-please.yml` - On push to main: release-please maintains the release PR (version in `package.json` and `docs/source/conf.py`, `CHANGELOG.md`). After each run, `bin/changelog-add-iam-changes` adds the changes of the managed policies and the model since the last release to the new changelog entry of the PR. Merging the PR creates the tag and a draft release, and starts `test-and-publish.yml` with the tag
- `automerge-schedule.yml` - Weekly on Monday: merges the release PR
- `test-and-publish.yml` - On PR: `make install lint` (job `lint`), `make install test-typescript` + `make lint-cdk` + CDK deploy test + `make build test-typescript-cdk` with the minimum aws-cdk-lib of `lib/generated/cdk-refs.json` + `make package-jsii test-jsii` per language + `make package-native test-transpile` against the built Python, Java, .NET and Go packages. Started by `release-please.yml` with a tag: builds the packages from the tag, publishes to npm, PyPI, NuGet, Maven Central and the Go module proxy on GitHub Pages, sets the notes of the release from `CHANGELOG.md` and publishes the release
- `automerge.yml` - Auto-merges PRs labeled `automerge` after tests pass
- `test-docs.yml` - Builds Sphinx docs on `docs/**` changes
- `trivy.yml` - On PR and push to main: Trivy scans the dependencies (npm with dev dependencies, lockfile written by `npm install --package-lock-only`), secrets and misconfigurations (`trivy.yaml`), uploads the results to code scanning and fails on HIGH/CRITICAL findings with a fix. Findings that can't be fixed yet go to `.trivyignore`, with an expiry date
