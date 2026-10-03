export { Collection } from './collection';
export { Operator, PolicyStatement } from './shared';
// Not `export * as Statement`: jsii rejects PascalCase namespace exports, even in dependencies,
// which would break jsii libraries that depend on cdk-iam-floyd
import * as Statement from './statements';
export { Statement };
export * from './generated/aws-managed-policies';
