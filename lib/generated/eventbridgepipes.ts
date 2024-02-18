import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [pipes](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridgepipes.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Pipes extends PolicyStatement {
  public servicePrefix = 'pipes';

  /**
   * Statement provider for service [pipes](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneventbridgepipes.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a pipe
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_CreatePipe.html
   */
  public toCreatePipe() {
    return this.to('CreatePipe');
  }

  /**
   * Grants permission to delete a pipe
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_DeletePipe.html
   */
  public toDeletePipe() {
    return this.to('DeletePipe');
  }

  /**
   * Grants permission to describe a pipe
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_DescribePipe.html
   */
  public toDescribePipe() {
    return this.to('DescribePipe');
  }

  /**
   * Grants permission to list all pipes in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_ListPipes.html
   */
  public toListPipes() {
    return this.to('ListPipes');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start a pipe
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_StartPipe.html
   */
  public toStartPipe() {
    return this.to('StartPipe');
  }

  /**
   * Grants permission to stop a pipe
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_StopPipe.html
   */
  public toStopPipe() {
    return this.to('StopPipe');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a pipe
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/eventbridge/latest/pipes-reference/API_UpdatePipe.html
   */
  public toUpdatePipe() {
    return this.to('UpdatePipe');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreatePipe',
      'DeletePipe',
      'StartPipe',
      'StopPipe',
      'UpdatePipe'
    ],
    Read: [
      'DescribePipe',
      'ListTagsForResource'
    ],
    List: [
      'ListPipes'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type pipe to the statement
   *
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPipe(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:pipes:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:pipe/${ name }`);
  }

  /**
   * Filters access by allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreatePipe()
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
   * Filters access by tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreatePipe()
   * - .toDeletePipe()
   * - .toDescribePipe()
   * - .toListTagsForResource()
   * - .toStartPipe()
   * - .toStopPipe()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdatePipe()
   *
   * Applies to resource types:
   * - pipe
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreatePipe()
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
