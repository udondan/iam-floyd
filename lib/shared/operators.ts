/**
 * Modifiers can be used to extend the functionality of any `Operator`, except the `null` operator
 */

export enum OperatorModifier {
  IF_EXISTS = 'IfExists',
  FOR_ALL_VALUES = 'ForAllValues:',
  FOR_ANY_VALUES = 'ForAnyValues:',
}

/**
 * Use condition operators in the `Condition` element to match the condition key and value in the policy against values in the request context. For more information about the `Condition` element, see [IAM JSON Policy Elements: Condition](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html).
 *
 * The condition operator that you can use in a policy depends on the condition key you choose. You can choose a global condition key or a service-specific condition key. To learn which condition operator you can use for a global condition key, see [AWS Global Condition Context Keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html). To learn which condition operator you can use for a service-specific condition key, see [Actions, Resources, and Condition Keys for AWS Services](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html) and choose the service that you want to view.
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html
 */
export class Operator {
  /**
   * Exact match, case sensitive.
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static stringEquals(...modifiers: OperatorModifier[]) {
    return applyModifiers('StringEquals', ...modifiers);
  }

  /**
   * Negated exact match, case sensitive.
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static stringNotEquals(...modifiers: OperatorModifier[]) {
    return applyModifiers('StringNotEquals', ...modifiers);
  }

  /**
   * Exact match, ignore case.
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static stringEqualsIgnoreCase(...modifiers: OperatorModifier[]) {
    return applyModifiers('StringEqualsIgnoreCase', ...modifiers);
  }

  /**
   * Exact exact match, ignore case.
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static stringNotEqualsIgnoreCase(...modifiers: OperatorModifier[]) {
    return applyModifiers('StringNotEqualsIgnoreCase', ...modifiers);
  }

  /**
   * Case-sensitive match.
   *
   * The values can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`) anywhere in the string.
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static stringLike(...modifiers: OperatorModifier[]) {
    return applyModifiers('StringLike', ...modifiers);
  }

  /**
   * Negated case-sensitive matching.
   *
   * The values can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`) anywhere in the string.
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static stringNotLike(...modifiers: OperatorModifier[]) {
    return applyModifiers('StringNotLike', ...modifiers);
  }

  /**
   * Exact match.
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static numericEquals(...modifiers: OperatorModifier[]) {
    return applyModifiers('NumericEquals', ...modifiers);
  }

  /**
   * Negated exact match.
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static numericNotEquals(...modifiers: OperatorModifier[]) {
    return applyModifiers('NumericNotEquals', ...modifiers);
  }

  /**
   * Match numbers lower than value: `<`
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static numericLessThan(...modifiers: OperatorModifier[]) {
    return applyModifiers('NumericLessThan', ...modifiers);
  }

  /**
   * Match numbers lower or equal to value: `<=`
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static numericLessThanEquals(...modifiers: OperatorModifier[]) {
    return applyModifiers('NumericLessThanEquals', ...modifiers);
  }

  /**
   * Match numbers higher than value: `>`
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static numericGreaterThan(...modifiers: OperatorModifier[]) {
    return applyModifiers('NumericGreaterThan', ...modifiers);
  }

  /**
   * Match numbers higher or equal value: `>=`
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static numericGreaterThanEquals(...modifiers: OperatorModifier[]) {
    return applyModifiers('NumericGreaterThanEquals', ...modifiers);
  }

  /**
   * Match a specific date: `=`
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static dateEquals(...modifiers: OperatorModifier[]) {
    return applyModifiers('DateEquals', ...modifiers);
  }

  /**
   * Negated match for a specific date: `!=`
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static dateNotEquals(...modifiers: OperatorModifier[]) {
    return applyModifiers('DateNotEquals', ...modifiers);
  }

  /**
   * Match before a specific date and time: `<`
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static dateLessThan(...modifiers: OperatorModifier[]) {
    return applyModifiers('DateLessThan', ...modifiers);
  }

  /**
   * Match at or before a specific date and time: `<=`
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static dateLessThanEquals(...modifiers: OperatorModifier[]) {
    return applyModifiers('DateLessThanEquals', ...modifiers);
  }

  /**
   * Match after a specific a date and time: `>`
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static dateGreaterThan(...modifiers: OperatorModifier[]) {
    return applyModifiers('DateGreaterThan', ...modifiers);
  }

  /**
   * Match at or after a specific date and time: `>=`
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static dateGreaterThanEquals(...modifiers: OperatorModifier[]) {
    return applyModifiers('DateGreaterThanEquals', ...modifiers);
  }

  /**
   * Boolean match
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static bool(...modifiers: OperatorModifier[]) {
    return applyModifiers('Bool', ...modifiers);
  }

  /**
   * The BinaryEquals condition operator lets you construct Condition elements that test key values that are in binary format. It compares the value of the specified key byte for byte against a [base-64](https://en.wikipedia.org/wiki/Base64) encoded representation of the binary value in the policy.
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static binaryEquals(...modifiers: OperatorModifier[]) {
    return applyModifiers('BinaryEquals', ...modifiers);
  }

  /**
   * Match an IP address or range: `=`
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static ipAddress(...modifiers: OperatorModifier[]) {
    return applyModifiers('IpAddress', ...modifiers);
  }

  /**
   * All IP addresses except the specified IP address or range `!=`
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static notIpAddress(...modifiers: OperatorModifier[]) {
    return applyModifiers('NotIpAddress', ...modifiers);
  }

  /**
   * Match of the ARN, case sensitive.
   *
   * Each of the six colon-delimited components of the ARN is checked separately and each can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`).
   *
   * `ArnEquals` and `ArnLike` behave identical.
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static arnEquals(...modifiers: OperatorModifier[]) {
    return applyModifiers('ArnEquals', ...modifiers);
  }

  /**
   * Negated match of the ARN, case sensitive.
   *
   * Each of the six colon-delimited components of the ARN is checked separately and each can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`).
   *
   * `ArnNotEquals` and `ArnNotLike` behave identical.
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static arnNotEquals(...modifiers: OperatorModifier[]) {
    return applyModifiers('ArnNotEquals', ...modifiers);
  }

  /**
   * Match of the ARN, case sensitive.
   *
   * Each of the six colon-delimited components of the ARN is checked separately and each can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`).
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static arnLike(...modifiers: OperatorModifier[]) {
    return applyModifiers('ArnLike', ...modifiers);
  }

  /**
   * Negated match of the ARN, case sensitive.
   *
   * Each of the six colon-delimited components of the ARN is checked separately and each can include a multi-character match wildcard (`*`) or a single-character match wildcard (`?`).
   *
   * `ArnNotEquals` and `ArnNotLike` behave identical.
   *
   * @param modifiers - Pass in any number of `OperatorModifier`s.
   */
  static arnNotLike(...modifiers: OperatorModifier[]) {
    return applyModifiers('ArnNotLike', ...modifiers);
  }

  /**
   * Check if a key is present at the time of authorization. In the policy statement, use either true (the key doesn't exist — it is null) or false (the key exists and its value is not null).
   */
  static null() {
    return 'Null';
  }
}

/**
 * Applies modifiers to an operator.
 *
 * @param operator - The original operator
 * @param modifiers - Any number of modifiers
 */
function applyModifiers(
  operator: string,
  ...modifiers: OperatorModifier[]
): string {
  if (modifiers.includes(OperatorModifier.IF_EXISTS)) {
    operator += OperatorModifier.IF_EXISTS;
  }
  if (modifiers.includes(OperatorModifier.FOR_ALL_VALUES)) {
    operator = `${OperatorModifier.FOR_ALL_VALUES}operator`;
  }
  if (modifiers.includes(OperatorModifier.FOR_ANY_VALUES)) {
    operator = `${OperatorModifier.FOR_ANY_VALUES}operator`;
  }
  return operator;
}
