import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [elemental-activations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_elementalactivations.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ElementalActivations extends PolicyStatement {
  public servicePrefix = 'elemental-activations';

  /**
   * Statement provider for service [elemental-activations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_elementalactivations.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Download the Software files for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toDownloadSoftware() {
    this.to('elemental-activations:DownloadSoftware');
    return this;
  }

  /**
   * Generate Software Licenses for AWS Elemental Appliances and Software Purchases
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toGenerateLicenses() {
    this.to('elemental-activations:GenerateLicenses');
    return this;
  }

  /**
   * Describe an activation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toGetActivation() {
    this.to('elemental-activations:GetActivation');
    return this;
  }

  /**
   * This action lists tags for an AWS Elemental Activations resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toListTagsForResource() {
    this.to('elemental-activations:ListTagsForResource');
    return this;
  }

  /**
   * This action adds a tag for an AWS Elemental Activations resource
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
    this.to('elemental-activations:TagResource');
    return this;
  }

  /**
   * This action removes a tag from an AWS Elemental Activations resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toUntagResource() {
    this.to('elemental-activations:UntagResource');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "List": [
      "DownloadSoftware",
      "GenerateLicenses"
    ],
    "Read": [
      "GetActivation",
      "ListTagsForResource"
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

export type ElementalActivationsActionsList = 'DownloadSoftware' | 'GenerateLicenses';
export type ElementalActivationsActionsRead = 'GetActivation' | 'ListTagsForResource';
export type ElementalActivationsActionsTagging = 'TagResource' | 'UntagResource';
export type ElementalActivationsActions = ElementalActivationsActionsList | ElementalActivationsActionsRead | ElementalActivationsActionsTagging;
