import { aws_iam as iam } from 'aws-cdk-lib';

import { PolicyStatement } from './policy-statement';

/**
 * Action provider for all services
 */
export class All extends PolicyStatement {
  /**
   * Action provider for all services.
   *
   * Use this provider to globally allow/deny actions, based on global conditions.
   *
   */
  constructor(props?: iam.PolicyStatementProps) {
    super(props);
  }
}
