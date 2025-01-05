import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [elemental-activations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalappliancesandsoftwareactivationservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ElementalActivations extends PolicyStatement {
  public servicePrefix = 'elemental-activations';

  /**
   * Statement provider for service [elemental-activations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalappliancesandsoftwareactivationservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to complete the process of registering customer account for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toCompleteAccountRegistration() {
    return this.to('CompleteAccountRegistration');
  }

  /**
   * Grants permission to complete the process of uploading a Software file for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toCompleteFileUpload() {
    return this.to('CompleteFileUpload');
  }

  /**
   * Grants permission to confirm asset ownership
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toConfirmAccount() {
    return this.to('ConfirmAccount');
  }

  /**
   * Grants permission to download the kickstart files for AWS Elemental Appliances and Software purchases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toDownloadKickstart() {
    return this.to('DownloadKickstart');
  }

  /**
   * Grants permission to download the Software files for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toDownloadSoftware() {
    return this.to('DownloadSoftware');
  }

  /**
   * Grants permission to generate a software license for an AWS Elemental Appliances and Software purchase
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toGenerateLicense() {
    return this.to('GenerateLicense');
  }

  /**
   * Grants permission to generate Software Licenses for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toGenerateLicenses() {
    return this.to('GenerateLicenses');
  }

  /**
   * Grants permission to describe the software version of an artifact group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toGetArtifactGroupSoftwareVersions() {
    return this.to('GetArtifactGroupSoftwareVersions');
  }

  /**
   * Grants permission to describe an asset
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toGetAsset() {
    return this.to('GetAsset');
  }

  /**
   * Grants permission to describe assets associated to the requesting account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toGetAssets() {
    return this.to('GetAssets');
  }

  /**
   * Grants permission to get all product advisories
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toGetProductAdvisories() {
    return this.to('GetProductAdvisories');
  }

  /**
   * Grants permission to describe available software versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toGetSoftwareVersions() {
    return this.to('GetSoftwareVersions');
  }

  /**
   * Grants permission to start the process of uploading a Software file for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toStartFileUpload() {
    return this.to('StartFileUpload');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CompleteAccountRegistration',
      'CompleteFileUpload',
      'ConfirmAccount',
      'GenerateLicense',
      'GenerateLicenses',
      'StartFileUpload'
    ],
    Read: [
      'DownloadKickstart',
      'DownloadSoftware',
      'GetArtifactGroupSoftwareVersions',
      'GetAsset',
      'GetAssets',
      'GetProductAdvisories',
      'GetSoftwareVersions'
    ]
  };
}
