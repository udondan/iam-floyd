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
   * Grants permission to invoke BatchCreateFindings on AWS Transform custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toBatchCreateFindings() {
    return this.to('BatchCreateFindings');
  }

  /**
   * Grants permission to invoke BatchUpdateFindings on AWS Transform custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toBatchUpdateFindings() {
    return this.to('BatchUpdateFindings');
  }

  /**
   * Grants permission to invoke CompleteTransformationPackageUpload on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toCompleteTransformationPackageUpload() {
    return this.to('CompleteTransformationPackageUpload');
  }

  /**
   * Grants permission to invoke ConverseStream on AWS Transform custom
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toConverseStream() {
    return this.to('ConverseStream');
  }

  /**
   * Grants permission to invoke CreateAnalysis on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toCreateAnalysis() {
    return this.to('CreateAnalysis');
  }

  /**
   * Grants permission to invoke CreateCampaign on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toCreateCampaign() {
    return this.to('CreateCampaign');
  }

  /**
   * Grants permission to invoke CreateRemediation on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toCreateRemediation() {
    return this.to('CreateRemediation');
  }

  /**
   * Grants permission to invoke CreateRepository on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toCreateRepository() {
    return this.to('CreateRepository');
  }

  /**
   * Grants permission to invoke CreateSource on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toCreateSource() {
    return this.to('CreateSource');
  }

  /**
   * Grants permission to invoke CreateTransformationPackageUrl on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toCreateTransformationPackageUrl() {
    return this.to('CreateTransformationPackageUrl');
  }

  /**
   * Grants permission to invoke DeleteAnalysis on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toDeleteAnalysis() {
    return this.to('DeleteAnalysis');
  }

  /**
   * Grants permission to invoke DeleteCampaign on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toDeleteCampaign() {
    return this.to('DeleteCampaign');
  }

  /**
   * Grants permission to invoke DeleteFinding on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toDeleteFinding() {
    return this.to('DeleteFinding');
  }

  /**
   * Grants permission to invoke DeleteKnowledgeItem on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toDeleteKnowledgeItem() {
    return this.to('DeleteKnowledgeItem');
  }

  /**
   * Grants permission to invoke DeleteRemediation on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toDeleteRemediation() {
    return this.to('DeleteRemediation');
  }

  /**
   * Grants permission to invoke DeleteRepository on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toDeleteRepository() {
    return this.to('DeleteRepository');
  }

  /**
   * Grants permission to invoke DeleteSource on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toDeleteSource() {
    return this.to('DeleteSource');
  }

  /**
   * Grants permission to invoke DeleteTransformationPackage on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toDeleteTransformationPackage() {
    return this.to('DeleteTransformationPackage');
  }

  /**
   * Grants permission to invoke ExecuteTransformation on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toExecuteTransformation() {
    return this.to('ExecuteTransformation');
  }

  /**
   * Grants permission to invoke GetAnalysis on AWS Transform custom
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toGetAnalysis() {
    return this.to('GetAnalysis');
  }

  /**
   * Grants permission to invoke GetCampaign on AWS Transform custom
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toGetCampaign() {
    return this.to('GetCampaign');
  }

  /**
   * Grants permission to invoke GetFinding on AWS Transform custom
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toGetFinding() {
    return this.to('GetFinding');
  }

  /**
   * Grants permission to invoke GetFindingGroups on AWS Transform custom
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toGetFindingGroups() {
    return this.to('GetFindingGroups');
  }

  /**
   * Grants permission to invoke GetKnowledgeItem on AWS Transform custom
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toGetKnowledgeItem() {
    return this.to('GetKnowledgeItem');
  }

  /**
   * Grants permission to invoke GetRemediation on AWS Transform custom
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toGetRemediation() {
    return this.to('GetRemediation');
  }

  /**
   * Grants permission to invoke GetRepository on AWS Transform custom
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toGetRepository() {
    return this.to('GetRepository');
  }

  /**
   * Grants permission to invoke GetSource on AWS Transform custom
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toGetSource() {
    return this.to('GetSource');
  }

  /**
   * Grants permission to invoke GetTransformationPackageUrl on AWS Transform custom
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toGetTransformationPackageUrl() {
    return this.to('GetTransformationPackageUrl');
  }

  /**
   * Grants permission to invoke ListAnalyses on AWS Transform custom
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toListAnalyses() {
    return this.to('ListAnalyses');
  }

  /**
   * Grants permission to invoke ListCampaignRepositories on AWS Transform custom
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toListCampaignRepositories() {
    return this.to('ListCampaignRepositories');
  }

  /**
   * Grants permission to invoke ListCampaign on AWS Transform custom
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toListCampaigns() {
    return this.to('ListCampaigns');
  }

  /**
   * Grants permission to invoke ListFindings on AWS Transform custom
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toListFindings() {
    return this.to('ListFindings');
  }

  /**
   * Grants permission to invoke ListKnowledgeItems on AWS Transform custom
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toListKnowledgeItems() {
    return this.to('ListKnowledgeItems');
  }

  /**
   * Grants permission to invoke ListRemediations on AWS Transform custom
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toListRemediations() {
    return this.to('ListRemediations');
  }

  /**
   * Grants permission to invoke ListRepositories on AWS Transform custom
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toListRepositories() {
    return this.to('ListRepositories');
  }

  /**
   * Grants permission to invoke ListSources on AWS Transform custom
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toListSources() {
    return this.to('ListSources');
  }

  /**
   * Grants permission to invoke ListTagsForResource on AWS Transform custom
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to invoke ListTransformationPackageMetadata on AWS Transform custom
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toListTransformationPackageMetadata() {
    return this.to('ListTransformationPackageMetadata');
  }

  /**
   * Grants permission to list active shares of a Transformation Package
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toListTransformationPackageShares() {
    return this.to('ListTransformationPackageShares');
  }

  /**
   * Grants permission to share a Transformation Package with another AWS account or AWS Organization
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toShareTransformationPackage() {
    return this.to('ShareTransformationPackage');
  }

  /**
   * Grants permission to invoke TagResource on AWS Transform custom
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to revoke an existing share of a Transformation Package
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toUnshareTransformationPackage() {
    return this.to('UnshareTransformationPackage');
  }

  /**
   * Grants permission to invoke UntagResource on AWS Transform custom
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to invoke UpdateAnalysis on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toUpdateAnalysis() {
    return this.to('UpdateAnalysis');
  }

  /**
   * Grants permission to invoke UpdateCampaign on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toUpdateCampaign() {
    return this.to('UpdateCampaign');
  }

  /**
   * Grants permission to invoke UpdateCampaignRepositories on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toUpdateCampaignRepositoryStatus() {
    return this.to('UpdateCampaignRepositoryStatus');
  }

  /**
   * Grants permission to invoke UpdateKnowledgeItemConfiguration on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toUpdateKnowledgeItemConfiguration() {
    return this.to('UpdateKnowledgeItemConfiguration');
  }

  /**
   * Grants permission to invoke UpdateKnowledgeItemStatus on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toUpdateKnowledgeItemStatus() {
    return this.to('UpdateKnowledgeItemStatus');
  }

  /**
   * Grants permission to invoke UpdateRemediation on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toUpdateRemediation() {
    return this.to('UpdateRemediation');
  }

  /**
   * Grants permission to invoke UpdateRepository on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toUpdateRepository() {
    return this.to('UpdateRepository');
  }

  /**
   * Grants permission to invoke UpdateSource on AWS Transform custom
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   */
  public toUpdateSource() {
    return this.to('UpdateSource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchCreateFindings',
      'BatchUpdateFindings',
      'CompleteTransformationPackageUpload',
      'ConverseStream',
      'CreateAnalysis',
      'CreateCampaign',
      'CreateRemediation',
      'CreateRepository',
      'CreateSource',
      'CreateTransformationPackageUrl',
      'DeleteAnalysis',
      'DeleteCampaign',
      'DeleteFinding',
      'DeleteKnowledgeItem',
      'DeleteRemediation',
      'DeleteRepository',
      'DeleteSource',
      'DeleteTransformationPackage',
      'ExecuteTransformation',
      'ShareTransformationPackage',
      'UnshareTransformationPackage',
      'UpdateAnalysis',
      'UpdateCampaign',
      'UpdateCampaignRepositoryStatus',
      'UpdateKnowledgeItemConfiguration',
      'UpdateKnowledgeItemStatus',
      'UpdateRemediation',
      'UpdateRepository',
      'UpdateSource'
    ],
    Read: [
      'GetAnalysis',
      'GetCampaign',
      'GetFinding',
      'GetFindingGroups',
      'GetKnowledgeItem',
      'GetRemediation',
      'GetRepository',
      'GetSource',
      'GetTransformationPackageUrl',
      'ListCampaignRepositories',
      'ListTagsForResource',
      'ListTransformationPackageShares'
    ],
    List: [
      'ListAnalyses',
      'ListCampaigns',
      'ListFindings',
      'ListKnowledgeItems',
      'ListRemediations',
      'ListRepositories',
      'ListSources',
      'ListTransformationPackageMetadata'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type analysis to the statement
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   *
   * @param analysisId - Identifier for the analysisId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAnalysis(analysisId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transform-custom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:analysis/${ analysisId }`);
  }

  /**
   * Adds a resource of type campaign to the statement
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCampaign(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transform-custom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:campaign/${ name }`);
  }

  /**
   * Adds a resource of type finding to the statement
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   *
   * @param findingId - Identifier for the findingId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFinding(findingId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transform-custom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:finding/${ findingId }`);
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPackage(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transform-custom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:package/${ name }`);
  }

  /**
   * Adds a resource of type remediation to the statement
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   *
   * @param remediationId - Identifier for the remediationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRemediation(remediationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transform-custom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:remediation/${ remediationId }`);
  }

  /**
   * Adds a resource of type repository to the statement
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   *
   * @param repositoryId - Identifier for the repositoryId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRepository(repositoryId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transform-custom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:repository/${ repositoryId }`);
  }

  /**
   * Adds a resource of type source to the statement
   *
   * https://docs.aws.amazon.com/transform/latest/userguide/custom.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSource(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:transform-custom:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:source/${ name }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAnalysis()
   * - .toCreateCampaign()
   * - .toCreateRemediation()
   * - .toCreateRepository()
   * - .toCreateSource()
   * - .toCreateTransformationPackageUrl()
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
   * Applies to actions:
   * - .toCompleteTransformationPackageUpload()
   * - .toCreateAnalysis()
   * - .toCreateCampaign()
   * - .toCreateRemediation()
   * - .toCreateRepository()
   * - .toCreateSource()
   * - .toCreateTransformationPackageUrl()
   * - .toDeleteAnalysis()
   * - .toDeleteCampaign()
   * - .toDeleteFinding()
   * - .toDeleteKnowledgeItem()
   * - .toDeleteRemediation()
   * - .toDeleteRepository()
   * - .toDeleteSource()
   * - .toDeleteTransformationPackage()
   * - .toExecuteTransformation()
   * - .toGetAnalysis()
   * - .toGetCampaign()
   * - .toGetFinding()
   * - .toGetKnowledgeItem()
   * - .toGetRemediation()
   * - .toGetRepository()
   * - .toGetSource()
   * - .toGetTransformationPackageUrl()
   * - .toListCampaignRepositories()
   * - .toListTransformationPackageShares()
   * - .toShareTransformationPackage()
   * - .toTagResource()
   * - .toUnshareTransformationPackage()
   * - .toUpdateAnalysis()
   * - .toUpdateCampaign()
   * - .toUpdateCampaignRepositoryStatus()
   * - .toUpdateKnowledgeItemConfiguration()
   * - .toUpdateKnowledgeItemStatus()
   * - .toUpdateRemediation()
   * - .toUpdateRepository()
   * - .toUpdateSource()
   *
   * Applies to resource types:
   * - analysis
   * - campaign
   * - finding
   * - knowledge-item
   * - package
   * - remediation
   * - repository
   * - source
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
   * - .toCreateAnalysis()
   * - .toCreateCampaign()
   * - .toCreateRemediation()
   * - .toCreateRepository()
   * - .toCreateSource()
   * - .toCreateTransformationPackageUrl()
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
