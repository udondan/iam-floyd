import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [mediaimport](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmediaimport.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediaimport extends PolicyStatement {
  public servicePrefix = 'mediaimport';

  /**
   * Statement provider for service [mediaimport](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmediaimport.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
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
