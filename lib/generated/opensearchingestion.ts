import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [osis](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchingestion.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Osis extends PolicyStatement {
  public servicePrefix = 'osis';

  /**
   * Statement provider for service [osis](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchingestion.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an OpenSearch Ingestion pipeline
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   * - kms:DescribeKey
   * - kms:GenerateDataKeyWithoutPlaintext
   * - logs:CreateLogDelivery
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_CreatePipeline.html
   */
  public toCreatePipeline() {
    return this.to('CreatePipeline');
  }

  /**
   * Grants permission to delete an OpenSearch Ingestion pipeline
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - logs:DeleteLogDelivery
   * - logs:GetLogDelivery
   * - logs:ListLogDeliveries
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_DeletePipeline.html
   */
  public toDeletePipeline() {
    return this.to('DeletePipeline');
  }

  /**
   * Grants permission to retrieve configuration information for an OpenSearch Ingestion pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_GetPipeline.html
   */
  public toGetPipeline() {
    return this.to('GetPipeline');
  }

  /**
   * Grants permission to get the contents of an OpenSearch Ingestion pipeline blueprint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_GetPipelineBlueprint.html
   */
  public toGetPipelineBlueprint() {
    return this.to('GetPipelineBlueprint');
  }

  /**
   * Grants permission to get granular information about the status of an OpenSearch Ingestion pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_GetPipelineChangeProgress.html
   */
  public toGetPipelineChangeProgress() {
    return this.to('GetPipelineChangeProgress');
  }

  /**
   * Grants permission to ingest data through an OpenSearch Ingestion pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configure-client.html
   */
  public toIngest() {
    return this.to('Ingest');
  }

  /**
   * Grants permission to list the names of available blueprints for an OpenSearch Ingestion pipeline configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_ListPipelineBlueprints.html
   */
  public toListPipelineBlueprints() {
    return this.to('ListPipelineBlueprints');
  }

  /**
   * Grants permission to list basic configuration for each OpenSearch Ingestion pipeline in the current account and Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_ListPipelines.html
   */
  public toListPipelines() {
    return this.to('ListPipelines');
  }

  /**
   * Grants permission to list all resource tags associated with an OpenSearch Ingestion pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start an OpenSearch Ingestion pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_StartPipeline.html
   */
  public toStartPipeline() {
    return this.to('StartPipeline');
  }

  /**
   * Grants permission to stop an OpenSearch Ingestion pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_StopPipeline.html
   */
  public toStopPipeline() {
    return this.to('StopPipeline');
  }

  /**
   * Grants permission to attach resource tags to an OpenSearch Ingestion pipeline
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove resource tags from an OpenSearch Ingestion Service pipeline
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify the configuration of an OpenSearch Ingestion pipeline
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   * - kms:DescribeKey
   * - kms:GenerateDataKeyWithoutPlaintext
   * - logs:GetLogDelivery
   * - logs:ListLogDeliveries
   * - logs:UpdateLogDelivery
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_UpdatePipeline.html
   */
  public toUpdatePipeline() {
    return this.to('UpdatePipeline');
  }

  /**
   * Grants permission to validate the configuration of an OpenSearch Ingestion pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_osis_ValidatePipeline.html
   */
  public toValidatePipeline() {
    return this.to('ValidatePipeline');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreatePipeline',
      'DeletePipeline',
      'Ingest',
      'StartPipeline',
      'StopPipeline',
      'UpdatePipeline'
    ],
    Read: [
      'GetPipeline',
      'GetPipelineBlueprint',
      'GetPipelineChangeProgress',
      'ListTagsForResource',
      'ValidatePipeline'
    ],
    List: [
      'ListPipelineBlueprints',
      'ListPipelines'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type pipeline to the statement
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_Pipeline.html
   *
   * @param pipelineName - Identifier for the pipelineName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPipeline(pipelineName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:osis:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:pipeline/${ pipelineName }`);
  }

  /**
   * Adds a resource of type pipeline-blueprint to the statement
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_PipelineBlueprint.html
   *
   * @param blueprintName - Identifier for the blueprintName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPipelineBlueprint(blueprintName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:osis:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:blueprint/${ blueprintName }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreatePipeline()
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
   * - pipeline
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
   * - .toCreatePipeline()
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
