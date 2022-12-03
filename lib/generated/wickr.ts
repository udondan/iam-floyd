import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [wickr](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswickr.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Wickr extends PolicyStatement {
  public servicePrefix = 'wickr';

  /**
   * Statement provider for service [wickr](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswickr.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create and manage Wickr networks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toCreateAdminSession() {
    return this.to('CreateAdminSession');
  }

  /**
   * Grants permission to view Wickr networks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toListNetworks() {
    return this.to('ListNetworks');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAdminSession',
      'ListNetworks'
    ]
  };
}
