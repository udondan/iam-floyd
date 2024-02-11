import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [verified-access](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsverifiedaccess.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class VerifiedAccess extends PolicyStatement {
  public servicePrefix = 'verified-access';

  /**
   * Statement provider for service [verified-access](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsverifiedaccess.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create Verified Access Instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/verified-access/latest/ug/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-create-instance
   */
  public toAllowVerifiedAccess() {
    return this.to('AllowVerifiedAccess');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AllowVerifiedAccess'
    ]
  };
}
