// This file is used in the CDK variant of the package: cdk-iam-floyd
import { aws_iam as iam, Token } from 'aws-cdk-lib';

/**
 * Base class for the Policy
 */
export class PolicyBase extends iam.PolicyDocument {
  /**
   * The statements of the policy
   */
  protected statementList(): iam.PolicyStatement[] {
    // @ts-ignore private in PolicyDocument
    return this.statements as iam.PolicyStatement[];
  }

  /**
   * The JSON of a statement of the policy
   */
  protected statementJson(statement: iam.PolicyStatement): Record<string, any> {
    return statement.toStatementJson();
  }

  /**
   * Whether the value contains a token, which is resolved only on deployment
   */
  protected isUnresolved(value: any): boolean {
    return Token.isUnresolved(value);
  }
}
