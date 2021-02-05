import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to complete the process of registering customer account for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toCompleteAccountRegistration() {
    return this.to('CompleteAccountRegistration');
  }

  /**
   * Grants permission to complete the process of uploading a Software file for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toCompleteFileUpload() {
    return this.to('CompleteFileUpload');
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
   * Grants permission to generate Software Licenses for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toGenerateLicenses() {
    return this.to('GenerateLicenses');
  }

  /**
   * Grants permission to describe an activation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toGetActivation() {
    return this.to('GetActivation');
  }

  /**
   * Grants permission to list tags for an AWS Elemental Activations resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start the process of registering customer account for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toStartAccountRegistration() {
    return this.to('StartAccountRegistration');
  }

  /**
   * Grants permission to start the process of uploading a Software file for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toStartFileUpload() {
    return this.to('StartFileUpload');
  }

  /**
   * Grants permission to add a tag for an AWS Elemental Activations resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from an AWS Elemental Activations resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "CompleteAccountRegistration",
      "CompleteFileUpload",
      "DownloadSoftware",
      "GenerateLicenses",
      "GetActivation",
      "ListTagsForResource",
      "StartAccountRegistration",
      "StartFileUpload"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type activation to the statement
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onActivation(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elemental-activations:${Region}:${Account}:activation/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
