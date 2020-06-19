import { PolicyStatement } from './policy-statement';

/**
 * Action provider for all services
 */
export class All extends PolicyStatement {
  /**
   * Adds all actions to the statement: `actions: '*'`
   */
  public allActions() {
    this.add('*');
    return this;
  }
}
