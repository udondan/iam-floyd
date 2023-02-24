import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [mediaimport](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmediaimport.html).
 *
 * @param options - Options for the statement
 */
export class Mediaimport extends PolicyStatement {
  public servicePrefix = 'mediaimport';

  /**
   * Statement provider for service [mediaimport](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmediaimport.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to create a database binary snapshot on the customer's aws account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html
   */
  public toCreateDatabaseBinarySnapshot() {
    return this.to('CreateDatabaseBinarySnapshot');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateDatabaseBinarySnapshot'
    ]
  };
}
