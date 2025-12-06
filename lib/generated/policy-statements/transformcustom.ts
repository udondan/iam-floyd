import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [transform-custom](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstransformcustom.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class TransformCustom extends PolicyStatement {
  public servicePrefix = 'transform-custom';

  /**
   * Statement provider for service [transform-custom](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstransformcustom.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to invoke CompleteTransformationPackageUpload on AWS Transform Custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toCompleteTransformationPackageUpload() {
    return this.to('CompleteTransformationPackageUpload');
  }

  /**
   * Grants permission to invoke ConverseStream on AWS Transform Custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toConverseStream() {
    return this.to('ConverseStream');
  }

  /**
   * Grants permission to invoke CreateCampaign on AWS Transform Custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toCreateCampaign() {
    return this.to('CreateCampaign');
  }

  /**
   * Grants permission to invoke CompleteTransformationPackageUrl on AWS Transform Custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toCreateTransformationPackageUrl() {
    return this.to('CreateTransformationPackageUrl');
  }

  /**
   * Grants permission to invoke DeleteCampaign on AWS Transform Custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toDeleteCampaign() {
    return this.to('DeleteCampaign');
  }

  /**
   * Grants permission to invoke DeleteKnowledgeItem on AWS Transform Custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toDeleteKnowledgeItem() {
    return this.to('DeleteKnowledgeItem');
  }

  /**
   * Grants permission to invoke DeleteTransformationPackage on AWS Transform Custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toDeleteTransformationPackage() {
    return this.to('DeleteTransformationPackage');
  }

  /**
   * Grants permission to invoke ExecuteTransformation on AWS Transform Custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toExecuteTransformation() {
    return this.to('ExecuteTransformation');
  }

  /**
   * Grants permission to invoke GetCampaign on AWS Transform Custom
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toGetCampaign() {
    return this.to('GetCampaign');
  }

  /**
   * Grants permission to invoke GetKnowledgeItem on AWS Transform Custom
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toGetKnowledgeItem() {
    return this.to('GetKnowledgeItem');
  }

  /**
   * Grants permission to invoke GetTransformationPackageUrl on AWS Transform Custom
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toGetTransformationPackageUrl() {
    return this.to('GetTransformationPackageUrl');
  }

  /**
   * Grants permission to invoke ListCampaignRepositories on AWS Transform Custom
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toListCampaignRepositories() {
    return this.to('ListCampaignRepositories');
  }

  /**
   * Grants permission to invoke ListCampaign on AWS Transform Custom
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toListCampaigns() {
    return this.to('ListCampaigns');
  }

  /**
   * Grants permission to invoke ListKnowledgeItems on AWS Transform Custom
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toListKnowledgeItems() {
    return this.to('ListKnowledgeItems');
  }

  /**
   * Grants permission to invoke ListTagsForResource on AWS Transform Custom
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to invoke ListTransformationPackageMetadata on AWS Transform Custom
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toListTransformationPackageMetadata() {
    return this.to('ListTransformationPackageMetadata');
  }

  /**
   * Grants permission to invoke TagResource on AWS Transform Custom
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to invoke UntagResource on AWS Transform Custom
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to invoke UpdateCampaign on AWS Transform Custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toUpdateCampaign() {
    return this.to('UpdateCampaign');
  }

  /**
   * Grants permission to invoke UpdateCampaignRepositories on AWS Transform Custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toUpdateCampaignRepositoryStatus() {
    return this.to('UpdateCampaignRepositoryStatus');
  }

  /**
   * Grants permission to invoke UpdateKnowledgeItemConfiguration on AWS Transform Custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toUpdateKnowledgeItemConfiguration() {
    return this.to('UpdateKnowledgeItemConfiguration');
  }

  /**
   * Grants permission to invoke UpdateKnowledgeItemStatus on AWS Transform Custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html/
   */
  public toUpdateKnowledgeItemStatus() {
    return this.to('UpdateKnowledgeItemStatus');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CompleteTransformationPackageUpload',
      'ConverseStream',
      'CreateCampaign',
      'CreateTransformationPackageUrl',
      'DeleteCampaign',
      'DeleteKnowledgeItem',
      'DeleteTransformationPackage',
      'ExecuteTransformation',
      'UpdateCampaign',
      'UpdateCampaignRepositoryStatus',
      'UpdateKnowledgeItemConfiguration',
      'UpdateKnowledgeItemStatus'
    ],
    Read: [
      'GetCampaign',
      'GetKnowledgeItem',
      'GetTransformationPackageUrl',
      'ListCampaignRepositories',
      'ListCampaigns',
      'ListKnowledgeItems',
      'ListTagsForResource',
      'ListTransformationPackageMetadata'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type campaign to the statement
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCampaign(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transform-custom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:campaign/${ name }`);
  }

  /**
   * Adds a resource of type conversation to the statement
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   *
   * @param conversationId - Identifier for the conversationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConversation(conversationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transform-custom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:conversation/${ conversationId }`);
  }

  /**
   * Adds a resource of type knowledge-item to the statement
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   *
   * @param transformationPackageName - Identifier for the transformationPackageName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onKnowledgeItem(transformationPackageName: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transform-custom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:package/${ transformationPackageName }/knowledge-item/${ id }`);
  }

  /**
   * Adds a resource of type package to the statement
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPackage(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transform-custom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:package/${ name }`);
  }

  /**
   * Filters access by the tags that are passed in the request
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
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
