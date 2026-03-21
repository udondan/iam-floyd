# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Project Overview

IAM Floyd is an AWS IAM policy statement generator with a fluent interface. It generates TypeScript classes for all AWS services and their actions, resources, and condition keys from AWS documentation. The project supports both standalone usage (`iam-floyd`) and AWS CDK integration (`cdk-iam-floyd`).

## Core Architecture

### Generated Code Structure

- `lib/generated/policy-statements/` - Generated TypeScript class per AWS service (460+ files)
- `lib/generated/index.ts` - Re-exports all service classes
- `lib/generated/aws-managed-policies/` - Generated AWS managed policies
- `lib/shared/` - Hand-written core: `PolicyStatement`, `All`, `Operator`, `AccessLevel`
- `lib/collection/` - Predefined policy collection utilities
- `lib/generator/` - Scrapes AWS docs and generates `lib/generated/` via `cheerio` + `ts-morph`

### PolicyStatement Inheritance Chain

Built in 10 numbered layers (`lib/shared/policy-statement/`):

```
1-base → 2-conditions → 3-actions → 4-resources → 5-effect
       → 6-arn-defaults → 8-principals → 10-final (PolicyStatement)
```

Each `*.CDK.ts` file is the CDK variant of that layer (swapped in by `bin/mkcdk.ts`).

### Dual Package Strategy

One codebase produces two npm packages:

- `iam-floyd` - Standalone (uses built-in base class)
- `cdk-iam-floyd` - Extends `aws_iam.PolicyStatement` from AWS CDK

`bin/mkcdk.ts` transforms between variants by swapping `*.CDK.ts` files and rewriting constructors.

## Development Commands

### Build

```bash
make build           # tsc --build --force tsconfig.main.json
make package         # build + npm pack
make clean           # remove node_modules, *.js, *.d.ts
make install         # clean + npm i
```

### Code Generation

```bash
make generate        # generate lib/generated/ from AWS docs (25hr cache)
make generate-force  # NOCACHE=1 - ignores time-based cache
make index-managed-policies  # regenerate AWS managed policies index
```

### Testing

The project has **no unit test framework**. Tests are integration-style: TypeScript examples are compiled, run, and their output is diffed against stored `.result` files.

```bash
make test            # compile examples/ + diff against *.result files (standalone)
make test-typescript # same, via Test.TypeScript.Makefile
make cdk-test        # CDK test: real deploy + destroy via AWS CDK
make cdk-all         # cdk + install + build + cdk-test
```

**Run a single example test manually:**

```bash
# 1. Compile a single example
npx tsc -p tsconfig.test-iam-floyd.json

# 2. Run and compare output
node examples/allow/allow.js > /tmp/out.txt
diff /tmp/out.txt examples/allow/allow.result

# Or run the integration test harness directly:
npx ts-node test/main.ts
```

**Regenerate expected results** (after intentional changes):

```bash
make regenerate-code-example-results
```

### Linting

```bash
make eslint          # npx eslint .
```

### CDK Variant

```bash
make cdk             # transforms codebase to CDK variant (modifies lib/shared, lib/generated, package.json)
make uncdk           # reverts via git stash (lib/generated, lib/shared, package.json)
```

## Fixing AWS Documentation Errors (`lib/generator/fixes.ts`)

The generator scrapes live AWS docs, which sometimes contain errors or inconsistencies. `fixes.ts` is the central place to patch these before code is generated. **When the generator produces wrong output, add a fix here rather than editing generated files.**

### `fixes` object (keyed by URL slug)

Each top-level key is the URL slug of a service's IAM docs page (e.g. `ec2`, `ssm`, `'neptune-db'`). Supported sub-keys:

| Sub-key                              | Effect                                                                                                                                                        |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ignore: true`                       | Skip generating this service entirely (used for EOL services)                                                                                                 |
| `name: 'slug'`                       | Override the generated filename and class name (needed when the same service prefix spans multiple doc pages, e.g. `pinpointemailservice` → `ses-pinpoint`)   |
| `service: 'prefix'`                  | Override the IAM service prefix used in the generated code                                                                                                    |
| `resourceTypes.<name>.arn`           | Replace the ARN template for a resource type with a corrected one                                                                                             |
| `conditions.<key>.key`               | Rewrite the condition key string (used when docs have a concrete example key like `RequestTag/tag-key` instead of the parametric form `RequestTag/${TagKey}`) |
| `conditions.<key>.methodName`        | Override the generated `ifXxx()` method name for a condition                                                                                                  |
| `conditions.<key>.operator.type`     | Override the inferred operator type (e.g. force `date` instead of `string`)                                                                                   |
| `conditions.<key>.operator.override` | Set `typeOverride` on the condition (used for custom operator generation)                                                                                     |

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
They are auto-generated from AWS documentation and will be overwritten on next `make generate`.

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

Run `make eslint` to check; Prettier is enforced via `eslint-plugin-prettier`.

### TypeScript

Strict settings enforced in `tsconfig.json`:

```
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
- **Deprecated APIs**: `deprecation/deprecation` rule is set to `error` — do not use deprecated APIs.
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
- `tsconfig.main.json` - Production build (excludes `bin/`, `lib/generator/`, `test/`, CDK files)
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

- `generate.yml` - Daily: scrapes AWS docs, bumps patch version, opens PR with `automerge` label
- `index-managed-policies.yml` - Daily: updates managed policies, opens PR with `automerge` label
- `test-and-publish.yml` - On PR/push to main: `make install test-typescript` + CDK deploy test + npm publish
- `automerge.yml` - Auto-merges PRs labeled `automerge` after tests pass
- `test-docs.yml` - Builds Sphinx docs on `docs/**` changes
