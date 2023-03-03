import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [codeguru-security](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodegurusecurity.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CodeguruSecurity extends PolicyStatement {
  public servicePrefix = 'codeguru-security';

  /**
   * Statement provider for service [codeguru-security](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodegurusecurity.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to batch retrieve specific findings generated by CodeGuru Security
   *
   * Access Level: Read
   */
  public toBatchGetFindings() {
    return this.to('BatchGetFindings');
  }

  /**
   * Grants permission to create CodeGuru Security scan
   *
   * Access Level: Write
   */
  public toCreateScan() {
    return this.to('CreateScan');
  }

  /**
   * Grants permission to generate a presigned url for uploading code archives
   *
   * Access Level: Write
   */
  public toCreateUploadUrl() {
    return this.to('CreateUploadUrl');
  }

  /**
   * Grants permission to delete all the scans and related findings from CodeGuru Security by given category
   *
   * Access Level: Write
   */
  public toDeleteScansByCategory() {
    return this.to('DeleteScansByCategory');
  }

  /**
   * Grants permission to retrieve CodeGuru Security scan metadata
   *
   * Access Level: Read
   */
  public toGetScan() {
    return this.to('GetScan');
  }

  /**
   * Grants permission to retrieve findings generated by CodeGuru Security
   *
   * Access Level: List
   */
  public toListFindings() {
    return this.to('ListFindings');
  }

  /**
   * Grants permission to retrieve list of CodeGuru Security scan metadata
   *
   * Access Level: List
   */
  public toListScans() {
    return this.to('ListScans');
  }

  /**
   * Grants permission to update the account level configurations
   *
   * Access Level: Write
   */
  public toUpdateAccountConfiguration() {
    return this.to('UpdateAccountConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetFindings',
      'GetScan'
    ],
    Write: [
      'CreateScan',
      'CreateUploadUrl',
      'DeleteScansByCategory',
      'UpdateAccountConfiguration'
    ],
    List: [
      'ListFindings',
      'ListScans'
    ]
  };
}