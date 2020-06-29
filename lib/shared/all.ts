import { PolicyStatementProps } from '@aws-cdk/aws-iam';

import { PolicyStatement } from './policy-statement';

/**
 * Action provider for all services
 */
export class All extends PolicyStatement {
  /**
   * Action provider for all services
   */
  constructor(props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Adds all actions to the statement: `actions: '*'`
   */
  public allActions() {
    this.add('*');
    return this;
  }
}
