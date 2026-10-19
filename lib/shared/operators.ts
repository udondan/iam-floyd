/**
 * Use condition operators in the `Condition` element to match the condition key and value in the policy against values in the request context. For more information about the `Condition` element, see [IAM JSON Policy Elements: Condition](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html).
 *
 * The condition operator that you can use in a policy depends on the condition key you choose. You can choose a global condition key or a service-specific condition key. To learn which condition operator you can use for a global condition key, see [AWS Global Condition Context Keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html). To learn which condition operator you can use for a service-specific condition key, see [Actions, Resources, and Condition Keys for AWS Services](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html) and choose the service that you want to view.
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html
 */
export class Operator {
  private base = '';
  private hasIfExists = false;
  private hasForAllValues = false;
  private hasForAnyValue = false;

  private setBase(base: string) {
    if (this.base.length) {
      throw new Error(`Operator already set: ${this.base}`);
    }
    this.base = base;
    return this;
  }

  public toString() {
    let value = this.base;

    if (this.base.length == 0) {
      throw new Error('No operator set');
    }
    if (this.hasIfExists) {
      value += 'IfExists';
    }
    if (this.hasForAllValues) {
      value = `ForAllValues:${value}`;
    }
    if (this.hasForAnyValue) {
      value = `ForAnyValue:${value}`;
    }
    if (this.base == 'Null' && value != this.base) {
      throw new Error(
        `You cannot add modifiers to the "Null" operator: ${value}`,
      );
    }
    return value;
  }

  /**
   * You can add `IfExists` to the end of any condition operator name except the `Null` condition. For example, `StringLikeIfExists`. You do this to say "If the policy key is present in the context of the request, process the key as specified in the policy. If the key is not present, evaluate the condition element as true." Other condition elements in the statement can still result in a nonmatch, but not a missing key when checked with `...IfExists`.
   */
  public ifExists() {
    this.hasIfExists = true;
    return this;
  }

  /**
   * Tests whether the value of every member of the request set is a subset of the condition key set. The condition returns true if every key value in the request matches at least one value in the policy. It also returns true if there are no keys in the request, or if the key values resolve to a null data set, such as an empty string.
   */
  public forAllValues() {
    this.hasForAllValues = true;
    return this;
  }

  /**
   * Tests whether at least one member of the set of request values matches at least one member of the set of condition key values. The condition returns true if any one of the key values in the request matches any one of the condition values in the policy. For no matching key or a null dataset, the condition returns false.
   */
  public forAnyValue() {
    this.hasForAnyValue = true;
    return this;
  }

  /**
   * Exact match, case sensitive.
   */
  public static stringEquals = 'StringEquals';

  /**
   * Exact match, case sensitive.
   */
  public stringEquals() {
    return this.setBase(Operator.stringEquals);
  }

  /**
   * Negated exact match, case sensitive.
   */
  public static stringNotEquals = 'StringNotEquals';

  /**
   * Negated exact match, case sensitive.
   */
  public stringNotEquals() {
    return this.setBase(Operator.stringNotEquals);
  }

  /**
   * Exact match, ignore case.
   */
  public static stringEqualsIgnoreCase = 'StringEqualsIgnoreCase';

  /**
   * Exact match, ignore case.
   */
  public stringEqualsIgnoreCase() {
    return this.setBase(Operator.stringEqualsIgnoreCase);
  }

  /**
   * Negated exact match, ignore case.
   */
  public static stringNotEqualsIgnoreCase = 'StringNotEqualsIgnoreCase';

  /**
   * Negated exact match, ignore case.
   */
  public stringNotEqualsIgnoreCase() {
    return this.setBase(Operator.stringNotEqualsIgnoreCase);
  }

  /**
   * Case-sensitive match.
   *
   * The values can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`) anywhere in the string.
   */
  public static stringLike = 'StringLike';

  /**
   * Case-sensitive match.
   *
   * The values can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`) anywhere in the string.
   */
  public stringLike() {
    return this.setBase(Operator.stringLike);
  }

  /**
   * Negated case-sensitive matching.
   *
   * The values can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`) anywhere in the string.
   */
  public static stringNotLike = 'StringNotLike';

  /**
   * Negated case-sensitive matching.
   *
   * The values can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`) anywhere in the string.
   */
  public stringNotLike() {
    return this.setBase(Operator.stringNotLike);
  }

  /**
   * Exact match.
   */
  public static numericEquals = 'NumericEquals';

  /**
   * Exact match.
   */
  public numericEquals() {
    return this.setBase(Operator.numericEquals);
  }

  /**
   * Negated exact match.
   */
  public static numericNotEquals = 'NumericNotEquals';

  /**
   * Negated exact match.
   */
  public numericNotEquals() {
    return this.setBase(Operator.numericNotEquals);
  }

  /**
   * Match numbers lower than value: `<`
   */
  public static numericLessThan = 'NumericLessThan';

  /**
   * Match numbers lower than value: `<`
   */
  public numericLessThan() {
    return this.setBase(Operator.numericLessThan);
  }

  /**
   * Match numbers lower or equal to value: `<=`
   */
  public static numericLessThanEquals = 'NumericLessThanEquals';

  /**
   * Match numbers lower or equal to value: `<=`
   */
  public numericLessThanEquals() {
    return this.setBase(Operator.numericLessThanEquals);
  }

  /**
   * Match numbers higher than value: `>`
   */
  public static numericGreaterThan = 'NumericGreaterThan';

  /**
   * Match numbers higher than value: `>`
   */
  public numericGreaterThan() {
    return this.setBase(Operator.numericGreaterThan);
  }

  /**
   * Match numbers higher or equal value: `>=`
   */
  public static numericGreaterThanEquals = 'NumericGreaterThanEquals';

  /**
   * Match numbers higher or equal value: `>=`
   */
  public numericGreaterThanEquals() {
    return this.setBase(Operator.numericGreaterThanEquals);
  }

  /**
   * Match a specific date: `=`
   */
  public static dateEquals = 'DateEquals';

  /**
   * Match a specific date: `=`
   */
  public dateEquals() {
    return this.setBase(Operator.dateEquals);
  }

  /**
   * Negated match for a specific date: `!=`
   */
  public static dateNotEquals = 'DateNotEquals';

  /**
   * Negated match for a specific date: `!=`
   */
  public dateNotEquals() {
    return this.setBase(Operator.dateNotEquals);
  }

  /**
   * Match before a specific date and time: `<`
   */
  public static dateLessThan = 'DateLessThan';

  /**
   * Match before a specific date and time: `<`
   */
  public dateLessThan() {
    return this.setBase(Operator.dateLessThan);
  }

  /**
   * Match at or before a specific date and time: `<=`
   */
  public static dateLessThanEquals = 'DateLessThanEquals';

  /**
   * Match at or before a specific date and time: `<=`
   */
  public dateLessThanEquals() {
    return this.setBase(Operator.dateLessThanEquals);
  }

  /**
   * Match after a specific a date and time: `>`
   */
  public static dateGreaterThan = 'DateGreaterThan';

  /**
   * Match after a specific a date and time: `>`
   */
  public dateGreaterThan() {
    return this.setBase(Operator.dateGreaterThan);
  }

  /**
   * Match at or after a specific date and time: `>=`
   */
  public static dateGreaterThanEquals = 'DateGreaterThanEquals';

  /**
   * Match at or after a specific date and time: `>=`
   */
  public dateGreaterThanEquals() {
    return this.setBase(Operator.dateGreaterThanEquals);
  }

  /**
   * Boolean match
   */
  public static bool = 'Bool';

  /**
   * Boolean match
   */
  public bool() {
    return this.setBase(Operator.bool);
  }

  /**
   * The BinaryEquals condition operator lets you construct Condition elements that test key values that are in binary format. It compares the value of the specified key byte for byte against a [base-64](https://en.wikipedia.org/wiki/Base64) encoded representation of the binary value in the policy.
   */
  public static binaryEquals = 'BinaryEquals';

  /**
   * The BinaryEquals condition operator lets you construct Condition elements that test key values that are in binary format. It compares the value of the specified key byte for byte against a [base-64](https://en.wikipedia.org/wiki/Base64) encoded representation of the binary value in the policy.
   */
  public binaryEquals() {
    return this.setBase(Operator.binaryEquals);
  }

  /**
   * The BinaryEquals condition operator lets you construct Condition elements that test key values that are in binary format. It compares the value of the specified key byte for byte against a [base-64](https://en.wikipedia.org/wiki/Base64) encoded representation of the binary value in the policy.
   */
  public static binaryNotEquals = 'BinaryNotEquals';

  /**
   * The BinaryEquals condition operator lets you construct Condition elements that test key values that are in binary format. It compares the value of the specified key byte for byte against a [base-64](https://en.wikipedia.org/wiki/Base64) encoded representation of the binary value in the policy.
   */
  public binaryNotEquals() {
    return this.setBase(Operator.binaryNotEquals);
  }

  /**
   * Match an IP address or range: `=`
   */
  public static ipAddress = 'IpAddress';

  /**
   * Match an IP address or range: `=`
   */
  public ipAddress() {
    return this.setBase(Operator.ipAddress);
  }

  /**
   * All IP addresses except the specified IP address or range `!=`
   */
  public static notIpAddress = 'NotIpAddress';

  /**
   * All IP addresses except the specified IP address or range `!=`
   */
  public notIpAddress() {
    return this.setBase(Operator.notIpAddress);
  }

  /**
   * Match of the ARN, case sensitive.
   *
   * Each of the six colon-delimited components of the ARN is checked separately and each can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`).
   *
   * `ArnEquals` and `ArnLike` behave identical.
   */
  public static arnEquals = 'ArnEquals';

  /**
   * Match of the ARN, case sensitive.
   *
   * Each of the six colon-delimited components of the ARN is checked separately and each can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`).
   *
   * `ArnEquals` and `ArnLike` behave identical.
   */
  public arnEquals() {
    return this.setBase(Operator.arnEquals);
  }

  /**
   * Negated match of the ARN, case sensitive.
   *
   * Each of the six colon-delimited components of the ARN is checked separately and each can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`).
   *
   * `ArnNotEquals` and `ArnNotLike` behave identical.
   */
  public static arnNotEquals = 'ArnNotEquals';

  /**
   * Negated match of the ARN, case sensitive.
   *
   * Each of the six colon-delimited components of the ARN is checked separately and each can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`).
   *
   * `ArnNotEquals` and `ArnNotLike` behave identical.
   */
  public arnNotEquals() {
    return this.setBase(Operator.arnNotEquals);
  }

  /**
   * Match of the ARN, case sensitive.
   *
   * Each of the six colon-delimited components of the ARN is checked separately and each can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`).
   */
  public static arnLike = 'ArnLike';

  /**
   * Match of the ARN, case sensitive.
   *
   * Each of the six colon-delimited components of the ARN is checked separately and each can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`).
   */
  public arnLike() {
    return this.setBase(Operator.arnLike);
  }

  /**
   * Negated match of the ARN, case sensitive.
   *
   * Each of the six colon-delimited components of the ARN is checked separately and each can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`).
   *
   * `ArnNotEquals` and `ArnNotLike` behave identical.
   */
  public static arnNotLike = 'ArnNotLike';

  /**
   * Negated match of the ARN, case sensitive.
   *
   * Each of the six colon-delimited components of the ARN is checked separately and each can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`).
   *
   * `ArnNotEquals` and `ArnNotLike` behave identical.
   */
  public arnNotLike() {
    return this.setBase(Operator.arnNotLike);
  }

  /**
   * Check if a key is present at the time of authorization. In the policy statement, use either true (the key doesn't exist — it is null) or false (the key exists and its value is not null).
   */
  public static null = 'Null';
}
