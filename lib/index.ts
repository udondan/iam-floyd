export { Collection } from './collection';
export {
  Operator,
  InlineGroupPolicyDocument,
  InlineRolePolicyDocument,
  InlineUserPolicyDocument,
  KmsKeyPolicyDocument,
  LambdaFunctionPolicyDocument,
  ManagedPolicyDocument,
  PolicyDocument,
  PolicyStatement,
  ResourceControlPolicyDocument,
  S3BucketPolicyDocument,
  SecretsManagerSecretPolicyDocument,
  ServiceControlPolicyDocument,
  SessionPolicyDocument,
  SnsTopicPolicyDocument,
  SqsQueuePolicyDocument,
  TrustPolicyDocument,
} from './shared';
// Not `export * as Statement`: jsii rejects PascalCase namespace exports, even in dependencies,
// which would break jsii libraries that depend on cdk-iam-floyd
import * as Statement from './statements';
export { Statement };
export * from './generated/aws-managed-policies';
