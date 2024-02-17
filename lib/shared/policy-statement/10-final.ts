import { PolicyStatementWithPrincipal } from './8-principals';

/**
 * Represents a statement in an IAM policy document
 */
export class PolicyStatement extends PolicyStatementWithPrincipal {
  protected cdkApplied = false; // internally used to check if resources, actions and conditions have already been applied to the policy

  //this method only exits to give it a final tsdoc, as it's exposed the the user.
  /**
   * JSON-ify the policy statement
   */
  public toJSON(): any {
    return super.toJSON();
  }
}
