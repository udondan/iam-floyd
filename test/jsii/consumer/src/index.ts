import { aws_iam as iam } from 'aws-cdk-lib';
import { PolicyStatement, Statement } from 'cdk-iam-floyd';
import { Construct } from 'constructs';

export interface ReaderRoleProps {
  readonly bucketName: string;
  readonly extraStatements?: iam.PolicyStatement[];
}

/**
 * Uses iam-floyd internally and accepts CDK statements from the caller
 */
export class ReaderRole extends Construct {
  public readonly role: iam.Role;

  constructor(scope: Construct, id: string, props: ReaderRoleProps) {
    super(scope, id);
    this.role = new iam.Role(this, 'Role', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    });
    this.role.addToPolicy(
      new Statement.S3().allow().toGetObject().onObject(props.bucketName, '*'),
    );
    for (const statement of props.extraStatements ?? []) {
      this.role.addToPolicy(statement);
    }
  }

  /**
   * Accepts a statement typed as an iam-floyd class
   */
  public addS3Statement(statement: Statement.S3) {
    this.role.addToPolicy(statement);
  }

  /**
   * Calls an iam-floyd method on a statement passed in by the caller
   */
  public addS3ListStatement(statement: Statement.S3) {
    this.role.addToPolicy(statement.toListBucket());
  }
}

export class Statements {
  /**
   * Returns an iam-floyd statement typed as CDK statement
   */
  public static sqsRead(): iam.PolicyStatement {
    return new Statement.Sqs().allow().toReceiveMessage().toDeleteMessage();
  }

  /**
   * Returns an iam-floyd statement typed as iam-floyd class
   */
  public static s3Read(): Statement.S3 {
    return new Statement.S3().allow().toGetObject();
  }
}

export class Helpers {
  /**
   * Accepts any statement typed as the iam-floyd base class, calls a base method and returns it
   */
  public static denied(statement: PolicyStatement): PolicyStatement {
    return statement.deny();
  }
}

/**
 * Subclasses an iam-floyd class
 */
export class ListBuckets extends Statement.S3 {
  constructor() {
    super();
    this.allow().toListAllMyBuckets();
  }
}
