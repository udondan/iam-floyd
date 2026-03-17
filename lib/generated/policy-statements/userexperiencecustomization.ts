import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [uxc](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsuserexperiencecustomization.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Uxc extends PolicyStatement {
  public servicePrefix = 'uxc';

  /**
   * Statement provider for service [uxc](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsuserexperiencecustomization.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to delete account color setting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/DeleteAccountColor.html
   */
  public toDeleteAccountColor() {
    return this.to('DeleteAccountColor');
  }

  /**
   * Grants permission to retrieve account color for given account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/GetAccountColor.html
   */
  public toGetAccountColor() {
    return this.to('GetAccountColor');
  }

  /**
   * Grants permission to retrieve account customizations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/API_GetAccountCustomizations.html
   */
  public toGetAccountCustomizations() {
    return this.to('GetAccountCustomizations');
  }

  /**
   * Grants permission to list available services
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/API_ListServices.html
   */
  public toListServices() {
    return this.to('ListServices');
  }

  /**
   * Grants permission to set account color
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/PutAccountColor.html
   */
  public toPutAccountColor() {
    return this.to('PutAccountColor');
  }

  /**
   * Grants permission to update account customizations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/API_UpdateAccountCustomizations.html
   */
  public toUpdateAccountCustomizations() {
    return this.to('UpdateAccountCustomizations');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'DeleteAccountColor',
      'PutAccountColor',
      'UpdateAccountCustomizations'
    ],
    Read: [
      'GetAccountColor',
      'GetAccountCustomizations',
      'ListServices'
    ]
  };
}
