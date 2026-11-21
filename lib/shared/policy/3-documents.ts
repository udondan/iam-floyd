import { PolicyStatement } from './1-base';
import { PolicyDocument } from './2-final';

/**
 * Customer managed policy, also used as permissions boundary: 6,144 characters
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length
 */
export class ManagedPolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(6144);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }

  /**
   * Splits the statements into as many managed policies as needed to stay within the maximum size
   *
   * Each statement is added to the first policy that has enough space left, like in the AWS CDK.
   */
  public split(): PolicyDocument[] {
    return this.splitDocument();
  }
}

/**
 * Inline policies of a user: 2,048 characters, for all inline policies of the user together
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length
 */
export class InlineUserPolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(2048);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }
}

/**
 * Inline policies of a group: 5,120 characters, for all inline policies of the group together
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length
 */
export class InlineGroupPolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(5120);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }
}

/**
 * Inline policies of a role: 10,240 characters, for all inline policies of the role together
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length
 */
export class InlineRolePolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(10240);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }
}

/**
 * Trust policy of a role: 2,048 characters
 *
 * The quota can be increased up to 8,192 characters. For an increased quota, use `PolicyDocument`
 * with the quota as maximum size.
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length
 */
export class TrustPolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(2048);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }
}

/**
 * Session policy: 2,048 characters, together with the ARNs of the passed managed policies
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length
 */
export class SessionPolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(2048);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }
}

/**
 * Service control policy (SCP) of AWS Organizations: 10,240 characters
 *
 * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html
 */
export class ServiceControlPolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(10240);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }

  /**
   * Splits the statements into as many SCPs as needed to stay within the maximum size
   *
   * Each statement is added to the first policy that has enough space left, like in the AWS CDK.
   */
  public split(): PolicyDocument[] {
    return this.splitDocument();
  }
}

/**
 * Resource control policy (RCP) of AWS Organizations: 5,120 characters
 *
 * https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html
 */
export class ResourceControlPolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(5120);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }

  /**
   * Splits the statements into as many RCPs as needed to stay within the maximum size
   *
   * Each statement is added to the first policy that has enough space left, like in the AWS CDK.
   */
  public split(): PolicyDocument[] {
    return this.splitDocument();
  }
}

/**
 * Bucket policy of Amazon S3: 20 KB
 *
 * https://docs.aws.amazon.com/AmazonS3/latest/userguide/add-bucket-policy.html
 */
export class S3BucketPolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(20480);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }
}

/**
 * Key policy of AWS KMS: 32 KB
 *
 * https://docs.aws.amazon.com/kms/latest/developerguide/resource-limits.html
 */
export class KmsKeyPolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(32768);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }
}

/**
 * Queue policy of Amazon SQS: 8,192 bytes
 *
 * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-policies.html
 */
export class SqsQueuePolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(8192);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }
}

/**
 * Topic policy of Amazon SNS: 30 KB
 *
 * https://docs.aws.amazon.com/sns/latest/dg/sns-access-policy-language-api-permissions-reference.html
 */
export class SnsTopicPolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(30720);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }
}

/**
 * Resource policy of a secret of AWS Secrets Manager: 20,480 characters
 *
 * https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_limits.html
 */
export class SecretsManagerSecretPolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(20480);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }
}

/**
 * Resource-based policy of a function of AWS Lambda: 20 KB
 *
 * https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html
 */
export class LambdaFunctionPolicyDocument extends PolicyDocument {
  /**
   * @param statements The statements of the policy
   */
  constructor(...statements: PolicyStatement[]) {
    super(20480);
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }
}
