import { PolicyBase, PolicyStatement } from './1-base';

/**
 * Represents an IAM policy document with a maximum size
 *
 * The classes of the types of policies, like `ManagedPolicyDocument`, know their maximum size. Use
 * this class for a maximum size of your own, e.g. for a raised quota of a trust policy.
 *
 * The size of the policy is estimated in the same way as the AWS CDK does, as the values can contain
 * tokens, which are only resolved on deployment. White space is not counted, like in IAM.
 */
export class PolicyDocument extends PolicyBase {
  /**
   * The maximum size of the policy in characters
   */
  public maximumSize = 0;

  /**
   * The estimated size of an ARN (or principal) that contains tokens, which are only resolved on
   * deployment. **Default:** `150`, like in the AWS CDK
   */
  public arnSizeEstimate = 150;

  /**
   * The estimated size of an action that contains tokens, like in the AWS CDK
   */
  private actionSizeEstimate = 20;

  /**
   * The size of `{"Version":"2012-10-17","Statement":[]}`
   */
  private documentSize = 39;

  /**
   * @param maximumSize The maximum size of the policy in characters
   * @param statements The statements of the policy
   */
  constructor(maximumSize: number, ...statements: PolicyStatement[]) {
    super();
    this.maximumSize = maximumSize;
    for (const statement of statements) {
      this.addStatements(statement);
    }
  }

  /**
   * The estimated size of the policy in characters, without white space
   *
   * Values with tokens, which are only resolved on deployment, are estimated like in the AWS CDK.
   */
  public estimateSize(): number {
    let size = this.documentSize;
    let first = true;
    for (const statement of this.statementList()) {
      if (!first) {
        size += 1;
      }
      size += this.statementSize(this.statementJson(statement));
      first = false;
    }
    return size;
  }

  /**
   * Throws an error if the estimated size of the policy exceeds the maximum size
   */
  public validate(): void {
    const size = this.estimateSize();
    if (size > this.maximumSize) {
      throw new Error(
        `The estimated size of the policy (${size} characters) exceeds the maximum size of ${this.maximumSize} characters`,
      );
    }
  }

  /**
   * Splits the statements into as many policies as needed to stay within the maximum size
   *
   * Each statement is added to the first policy that has enough space left, like in the AWS CDK.
   * The policies have the same maximum size as this policy.
   */
  protected splitDocument(): PolicyDocument[] {
    const policies: PolicyDocument[] = [];
    let index = 0;
    for (const statement of this.statementList()) {
      index++;
      const size = this.statementSize(this.statementJson(statement));
      if (this.documentSize + size > this.maximumSize) {
        throw new Error(
          `The estimated size of a policy with only statement ${index} (${this.documentSize + size} characters) exceeds the maximum size of ${this.maximumSize} characters`,
        );
      }
      let added = false;
      for (const policy of policies) {
        if (!added && policy.estimateSize() + 1 + size <= this.maximumSize) {
          policy.addStatements(statement);
          added = true;
        }
      }
      if (!added) {
        const policy = new PolicyDocument(this.maximumSize);
        policy.inherit(this);
        policy.addStatements(statement);
        policies.push(policy);
      }
    }
    return policies;
  }

  /**
   * Takes the settings of the policy that is split
   */
  private inherit(policy: PolicyDocument) {
    this.arnSizeEstimate = policy.arnSizeEstimate;
  }

  /**
   * The estimated size of a statement, like `PolicyStatement._estimateSize()` of the AWS CDK, plus
   * the parts that the AWS CDK leaves out: the braces, `Sid` and the keys of `Principal`
   */
  private statementSize(statement: Record<string, any>): number {
    let size = 2;
    if ('Sid' in statement) {
      size += 'Sid'.length + 4 + JSON.stringify(statement.Sid).length;
    }
    size += 'Effect'.length + 5 + JSON.stringify(statement.Effect).length;
    size += this.valuesSize(statement, 'Action', this.actionSizeEstimate);
    size += this.valuesSize(statement, 'NotAction', this.actionSizeEstimate);
    size += this.valuesSize(statement, 'Resource', this.arnSizeEstimate);
    size += this.valuesSize(statement, 'NotResource', this.arnSizeEstimate);
    size += this.principalsSize(statement, 'Principal');
    size += this.principalsSize(statement, 'NotPrincipal');
    if ('Condition' in statement) {
      size +=
        'Condition'.length + 4 + JSON.stringify(statement.Condition).length;
    }
    return size;
  }

  /**
   * The size of a list of actions or resources: the size of each value plus its quotes and comma,
   * and the estimate for values with tokens
   */
  private valuesSize(
    statement: Record<string, any>,
    key: string,
    estimate: number,
  ): number {
    if (!(key in statement)) {
      return 0;
    }
    const values = this.valueList(statement[key]);
    if (values.length == 0) {
      return 0;
    }
    let size = key.length + 5;
    for (const value of values) {
      if (this.isUnresolved(value)) {
        size += estimate + 3;
      } else {
        size += JSON.stringify(value).length + 1;
      }
    }
    return size;
  }

  /**
   * The size of the principals: the estimate of an ARN per principal, like in the AWS CDK, plus the
   * keys of the types of principals
   */
  private principalsSize(statement: Record<string, any>, key: string): number {
    if (!(key in statement)) {
      return 0;
    }
    const principals = statement[key];
    let size = key.length + 5;
    if (typeof principals === 'string') {
      return size + this.arnSizeEstimate;
    }
    const types: Record<string, any> = principals;
    for (const type of Object.keys(types)) {
      size += type.length + 5;
      size += this.valueList(types[type]).length * this.arnSizeEstimate;
    }
    return size;
  }

  private valueList(value: any): any[] {
    const values: any[] = [];
    if (Array.isArray(value)) {
      for (const item of value) {
        values.push(item);
      }
    } else {
      values.push(value);
    }
    return values;
  }
}
