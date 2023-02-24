import { PolicyStatement, PolicyStatementProps } from './policy-statement';

/**
 * Action provider for all services
 */
export class All extends PolicyStatement {
  /**
   * Action provider for all services.
   *
   * Use this provider to globally allow/deny actions, based on global conditions.
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }
}
