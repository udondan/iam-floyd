import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [b2bi](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsb2bdatainterchange.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class B2bi extends PolicyStatement {
  public servicePrefix = 'b2bi';

  /**
   * Statement provider for service [b2bi](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsb2bdatainterchange.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a capability
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_CreateCapability.html
   */
  public toCreateCapability() {
    return this.to('CreateCapability');
  }

  /**
   * Grants permission to create a partnership
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_CreatePartnership.html
   */
  public toCreatePartnership() {
    return this.to('CreatePartnership');
  }

  /**
   * Grants permission to create a profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_CreateProfile.html
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
  }

  /**
   * Grants permission to create a transformer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_CreateTransformer.html
   */
  public toCreateTransformer() {
    return this.to('CreateTransformer');
  }

  /**
   * Grants permission to delete a capability
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_DeleteCapability.html
   */
  public toDeleteCapability() {
    return this.to('DeleteCapability');
  }

  /**
   * Grants permission to delete an partnership
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_DeletePartnership.html
   */
  public toDeletePartnership() {
    return this.to('DeletePartnership');
  }

  /**
   * Grants permission to delete a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_DeleteProfile.html
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
  }

  /**
   * Grants permission to delete a transformer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_DeleteTransformer.html
   */
  public toDeleteTransformer() {
    return this.to('DeleteTransformer');
  }

  /**
   * Grants permission to get a capability
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_GetCapability.html
   */
  public toGetCapability() {
    return this.to('GetCapability');
  }

  /**
   * Grants permission to get a partnership
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_GetPartnership.html
   */
  public toGetPartnership() {
    return this.to('GetPartnership');
  }

  /**
   * Grants permission to get a profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_GetProfile.html
   */
  public toGetProfile() {
    return this.to('GetProfile');
  }

  /**
   * Grants permission to get a transformer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_GetTransformer.html
   */
  public toGetTransformer() {
    return this.to('GetTransformer');
  }

  /**
   * Grants permission to get a transformer job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_GetTransformerJob.html
   */
  public toGetTransformerJob() {
    return this.to('GetTransformerJob');
  }

  /**
   * Grants permission to list all capabilities
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_ListCapabilities.html
   */
  public toListCapabilities() {
    return this.to('ListCapabilities');
  }

  /**
   * Grants permission to list all partnerships
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_ListPartnerships.html
   */
  public toListPartnerships() {
    return this.to('ListPartnerships');
  }

  /**
   * Grants permission to list all profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_ListProfiles.html
   */
  public toListProfiles() {
    return this.to('ListProfiles');
  }

  /**
   * Grants permission to list tags for a B2Bi resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all transformers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_ListTransformers.html
   */
  public toListTransformers() {
    return this.to('ListTransformers');
  }

  /**
   * Grants permission to transformer a document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_StartTransformerJob.html
   */
  public toStartTransformerJob() {
    return this.to('StartTransformerJob');
  }

  /**
   * Grants permission to tag a B2Bi resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to map a sample file
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_TestMapping.html
   */
  public toTestMapping() {
    return this.to('TestMapping');
  }

  /**
   * Grants permission to parse an edi document
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_TestParsing.html
   */
  public toTestParsing() {
    return this.to('TestParsing');
  }

  /**
   * Grants permission to untag a B2Bi resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a capability
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_UpdateCapability.html
   */
  public toUpdateCapability() {
    return this.to('UpdateCapability');
  }

  /**
   * Grants permission to update a partnership
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_UpdatePartnership.html
   */
  public toUpdatePartnership() {
    return this.to('UpdatePartnership');
  }

  /**
   * Grants permission to update a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_UpdateProfile.html
   */
  public toUpdateProfile() {
    return this.to('UpdateProfile');
  }

  /**
   * Grants permission to update a transformer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/b2bi/latest/APIReference/API_UpdateTransformer.html
   */
  public toUpdateTransformer() {
    return this.to('UpdateTransformer');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateCapability',
      'CreatePartnership',
      'CreateProfile',
      'CreateTransformer',
      'DeleteCapability',
      'DeletePartnership',
      'DeleteProfile',
      'DeleteTransformer',
      'StartTransformerJob',
      'TestMapping',
      'TestParsing',
      'UpdateCapability',
      'UpdatePartnership',
      'UpdateProfile',
      'UpdateTransformer'
    ],
    Read: [
      'GetCapability',
      'GetPartnership',
      'GetProfile',
      'GetTransformer',
      'GetTransformerJob',
      'ListTagsForResource'
    ],
    List: [
      'ListCapabilities',
      'ListPartnerships',
      'ListProfiles',
      'ListTransformers'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type profile to the statement
   *
   * https://docs.aws.amazon.com/b2bi/latest/userguide/
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProfile(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:b2bi:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:profile/${ resourceId }`);
  }

  /**
   * Adds a resource of type capability to the statement
   *
   * https://docs.aws.amazon.com/b2bi/latest/userguide/
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCapability(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:b2bi:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:capability/${ resourceId }`);
  }

  /**
   * Adds a resource of type partnership to the statement
   *
   * https://docs.aws.amazon.com/b2bi/latest/userguide/
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPartnership(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:b2bi:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:partnership/${ resourceId }`);
  }

  /**
   * Adds a resource of type transformer to the statement
   *
   * https://docs.aws.amazon.com/b2bi/latest/userguide/
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTransformer(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:b2bi:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:transformer/${ resourceId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCapability()
   * - .toCreatePartnership()
   * - .toCreateProfile()
   * - .toCreateTransformer()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - profile
   * - capability
   * - partnership
   * - transformer
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateCapability()
   * - .toCreatePartnership()
   * - .toCreateProfile()
   * - .toCreateTransformer()
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
