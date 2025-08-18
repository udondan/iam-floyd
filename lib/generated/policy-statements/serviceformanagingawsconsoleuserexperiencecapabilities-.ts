import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [uxc](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserviceformanagingawsconsoleuserexperiencecapabilities..html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Uxc extends PolicyStatement {
  public servicePrefix = 'uxc';

  /**
   * Statement provider for service [uxc](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserviceformanagingawsconsoleuserexperiencecapabilities..html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to delete the color associated with the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/DeleteAccountColor.html
   */
  public toDeleteAccountColor() {
    return this.to('DeleteAccountColor');
  }

  /**
   * Grants permission to get the color associated with the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/GetAccountColor.html
   */
  public toGetAccountColor() {
    return this.to('GetAccountColor');
  }

  /**
   * Grants permission to sets the color associated with an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/PutAccountColor.html
   */
  public toPutAccountColor() {
    return this.to('PutAccountColor');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'DeleteAccountColor',
      'PutAccountColor'
    ],
    Read: [
      'GetAccountColor'
    ]
  };
}
