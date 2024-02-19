import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * - .ifAwsResourceTag()
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
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'CompleteAccountRegistration',
      'CompleteFileUpload',
      'DownloadSoftware',
      'GenerateLicenses',
      'GetActivation',
      'ListTagsForResource',
      'StartAccountRegistration',
      'StartFileUpload'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type activation to the statement
   *
   * https://docs.aws.amazon.com/elemental-appliances-software/
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onActivation(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:elemental-activations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:activation/${ resourceId }`);
  }

  /**
   * Filters access by tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - activation
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
