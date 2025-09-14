# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IAM Floyd is an AWS IAM policy statement generator with a fluent interface. It generates TypeScript classes for all AWS services and their actions, resources, and condition keys from AWS documentation. The project supports both standalone usage (`iam-floyd`) and AWS CDK integration (`cdk-iam-floyd`).

## Core Architecture

### Generated Code Structure

- `lib/generated/policy-statements/` - Contains generated TypeScript classes for each AWS service (400+ services)
- `lib/generated/index.ts` - Main export file that re-exports all service classes
- `lib/generated/aws-managed-policies/` - Generated AWS managed policies
- `lib/shared/` - Core shared classes like `PolicyStatement`, `All`, and `Operator`
- `lib/collection/` - Predefined policy collections and utilities

### Code Generation Pipeline

The codebase uses a sophisticated generation system:

1. `bin/generate.ts` - Main generation entry point that orchestrates the process
2. `lib/generator/` - Contains the generation logic that scrapes AWS documentation
3. Generated files are created in TypeScript and compiled to JavaScript for distribution

### Key Classes

- `PolicyStatement` - Base class for all policy statement builders
- `All` - Global action provider for cross-service policies
- Service-specific classes (e.g., `S3`, `EC2`, `Lambda`) - Each AWS service gets its own class with methods for actions, resources, and conditions

## Development Commands

### Building and Compilation

```bash
# Build the project (compiles TypeScript)
make build
# Convert project to CDK-variant
```

### Code Generation

```bash
# Generate service classes from AWS documentation
make generate
# Force regeneration (ignores time-based cache)
make generate-force
# Generate AWS managed policies index
make index-managed-policies
```

### Testing

```bash
# Run main tests
make test
# Run CDK-specific tests
make cdk-test
# Convert package to CDK variant and run CDK-specific tests
make cdk-all
```

### Linting and Code Quality

```bash
# Run ESLint
make eslint
# ESLint is configured with TypeScript, Prettier, and deprecation rules
```

### Package Management

```bash
# Create npm package
make package
# Clean all generated files and dependencies
make clean
# Reinstall dependencies
make install
```

### CDK Variant Management

```bash
# Convert to CDK variant (modifies package.json and lib structure)
make cdk
# Revert CDK changes
make uncdk
```

## Project Structure Patterns

### Dual Package Strategy

The project maintains two npm packages from a single codebase:

- `iam-floyd` - Standalone IAM policy generator
- `cdk-iam-floyd` - AWS CDK integration that extends `iam.PolicyStatement`

The `bin/mkcdk.ts` script transforms the codebase between variants by modifying imports and package configuration.

### TypeScript Configuration

- `tsconfig.json` - Main TypeScript configuration with strict settings
- `tsconfig.main.json` - Production build configuration
- `tsconfig.test-*.json` - Test-specific configurations
- Uses SWC for faster compilation via ts-node

### Generated Code Conventions

- All generated classes follow the pattern: `export class ServiceName extends PolicyStatement`
- Method names correspond to AWS IAM action names (e.g., `getObject()`, `listBuckets()`)
- Resource and condition methods use fluent interface patterns
- Generated files include comprehensive JSDoc comments from AWS documentation

## Important Notes

### File Modification Rules

- **Never manually edit files in `lib/generated/`** - These are auto-generated and will be overwritten
- Generated code is created from AWS documentation and should only be updated via the generation process
- Manual changes should only be made to files in `lib/shared/`, `lib/collection/`, and core infrastructure

### Code Style

- ESLint enforces strict TypeScript rules with Prettier formatting
- Single quotes for strings, except in YAML files
- Comprehensive type checking with `noImplicitAny` and strict null checks
- Generated files are excluded from linting (`lib/generated/*` in `.eslintrc`)

### Testing Strategy

- Tests are located in the `test/` directory with its own Makefile
- Supports both unit tests for the main package and CDK integration tests
- CDK tests include actual deployment and destruction cycles for validation

## Git Commit Conventions

This project follows conventional commit patterns:

- `chore(deps): description` - Dependency updates
- `feat: description` - New features
- `fix: description` - Bug fixes
- `docs: description` - Documentation changes
- Simple format: "Updates AWS managed policies" for automated policy updates
