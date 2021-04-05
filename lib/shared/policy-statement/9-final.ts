import { PolicyStatementBase } from './1-base';

/**
 * Represents a statement in an IAM policy document
 */
export class PolicyStatement extends PolicyStatementBase {
  protected cdkApplied = false; // internally used to check if resources, actions and conditions have already been applied to the policy
}
