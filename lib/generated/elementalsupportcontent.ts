import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [elemental-support-content](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalsupportcontent.html).
 *
 * @param options - Options for the statement
 */
export class ElementalSupportContent extends PolicyStatement {
  public servicePrefix = 'elemental-support-content';

  /**
   * Statement provider for service [elemental-support-content](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalsupportcontent.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to search support content
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software
   */
  public toQuery() {
    return this.to('Query');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'Query'
    ]
  };
}
