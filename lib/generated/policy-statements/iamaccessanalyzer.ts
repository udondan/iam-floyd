import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [access-analyzer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamaccessanalyzer.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AccessAnalyzer extends PolicyStatement {
  public servicePrefix = 'access-analyzer';

  /**
   * Statement provider for service [access-analyzer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiamaccessanalyzer.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to apply an archive rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ApplyArchiveRule.html
   */
  public toApplyArchiveRule() {
    return this.to('ApplyArchiveRule');
  }

  /**
   * Grants permission to cancel a policy generation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CancelPolicyGeneration.html
   */
  public toCancelPolicyGeneration() {
    return this.to('CancelPolicyGeneration');
  }

  /**
   * Grants permission to check that specified access is not allowed by a policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CheckAccessNotGranted.html
   */
  public toCheckAccessNotGranted() {
    return this.to('CheckAccessNotGranted');
  }

  /**
   * Grants permission to check that no new access is allowed when compared to an existing policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CheckNoNewAccess.html
   */
  public toCheckNoNewAccess() {
    return this.to('CheckNoNewAccess');
  }

  /**
   * Grants permission to check that public access is not allowed by a resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CheckNoPublicAccess.html
   */
  public toCheckNoPublicAccess() {
    return this.to('CheckNoPublicAccess');
  }

  /**
   * Grants permission to create an access preview for the specified analyzer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateAccessPreview.html
   */
  public toCreateAccessPreview() {
    return this.to('CreateAccessPreview');
  }

  /**
   * Grants permission to create an analyzer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateAnalyzer.html
   */
  public toCreateAnalyzer() {
    return this.to('CreateAnalyzer');
  }

  /**
   * Grants permission to create an archive rule for the specified analyzer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateArchiveRule.html
   */
  public toCreateArchiveRule() {
    return this.to('CreateArchiveRule');
  }

  /**
   * Grants permission to delete the specified analyzer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteAnalyzer.html
   */
  public toDeleteAnalyzer() {
    return this.to('DeleteAnalyzer');
  }

  /**
   * Grants permission to delete archive rules for the specified analyzer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteArchiveRule.html
   */
  public toDeleteArchiveRule() {
    return this.to('DeleteArchiveRule');
  }

  /**
   * Grants permission to generate recommendation steps to resolve a finding
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GenerateFindingRecommendation.html
   */
  public toGenerateFindingRecommendation() {
    return this.to('GenerateFindingRecommendation');
  }

  /**
   * Grants permission to retrieve information about an access preview
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAccessPreview.html
   */
  public toGetAccessPreview() {
    return this.to('GetAccessPreview');
  }

  /**
   * Grants permission to retrieve information about an analyzed resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzedResource.html
   */
  public toGetAnalyzedResource() {
    return this.to('GetAnalyzedResource');
  }

  /**
   * Grants permission to retrieve information about analyzers
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzer.html
   */
  public toGetAnalyzer() {
    return this.to('GetAnalyzer');
  }

  /**
   * Grants permission to retrieve information about archive rules for the specified analyzer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetArchiveRule.html
   */
  public toGetArchiveRule() {
    return this.to('GetArchiveRule');
  }

  /**
   * Grants permission to retrieve findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetFindingV2.html
   */
  public toGetFinding() {
    return this.to('GetFinding');
  }

  /**
   * Grants permission to retrieve recommendation steps to resolve a finding
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetFindingRecommendation.html
   */
  public toGetFindingRecommendation() {
    return this.to('GetFindingRecommendation');
  }

  /**
   * Grants permission to retrieve statistics for findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#access-analyzer-permissions
   */
  public toGetFindingsStatistics() {
    return this.to('GetFindingsStatistics');
  }

  /**
   * Grants permission to retrieve a policy that was generated using StartPolicyGeneration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetGeneratedPolicy.html
   */
  public toGetGeneratedPolicy() {
    return this.to('GetGeneratedPolicy');
  }

  /**
   * Grants permission to retrieve a list of findings from an access preview
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAccessPreviewFindings.html
   */
  public toListAccessPreviewFindings() {
    return this.to('ListAccessPreviewFindings');
  }

  /**
   * Grants permission to retrieve a list of access previews
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAccessPreviews.html
   */
  public toListAccessPreviews() {
    return this.to('ListAccessPreviews');
  }

  /**
   * Grants permission to retrieve a list of resources that have been analyzed
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzedResources.html
   */
  public toListAnalyzedResources() {
    return this.to('ListAnalyzedResources');
  }

  /**
   * Grants permission to retrieves a list of analyzers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzers.html
   */
  public toListAnalyzers() {
    return this.to('ListAnalyzers');
  }

  /**
   * Grants permission to retrieve a list of archive rules from an analyzer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListArchiveRules.html
   */
  public toListArchiveRules() {
    return this.to('ListArchiveRules');
  }

  /**
   * Grants permission to retrieve a list of findings from an analyzer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListFindingsV2.html
   */
  public toListFindings() {
    return this.to('ListFindings');
  }

  /**
   * Grants permission to list all the recently started policy generations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListPolicyGenerations.html
   */
  public toListPolicyGenerations() {
    return this.to('ListPolicyGenerations');
  }

  /**
   * Grants permission to retrieve a list of tags applied to a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start a policy generation
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_StartPolicyGeneration.html
   */
  public toStartPolicyGeneration() {
    return this.to('StartPolicyGeneration');
  }

  /**
   * Grants permission to start a scan of the policies applied to a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_StartResourceScan.html
   */
  public toStartResourceScan() {
    return this.to('StartResourceScan');
  }

  /**
   * Grants permission to add a tag to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify an analyzer's configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateAnalyzer.html
   */
  public toUpdateAnalyzer() {
    return this.to('UpdateAnalyzer');
  }

  /**
   * Grants permission to modify an archive rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateArchiveRule.html
   */
  public toUpdateArchiveRule() {
    return this.to('UpdateArchiveRule');
  }

  /**
   * Grants permission to modify findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateFindings.html
   */
  public toUpdateFindings() {
    return this.to('UpdateFindings');
  }

  /**
   * Grants permission to validate a policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ValidatePolicy.html
   */
  public toValidatePolicy() {
    return this.to('ValidatePolicy');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ApplyArchiveRule',
      'CancelPolicyGeneration',
      'CreateAccessPreview',
      'CreateAnalyzer',
      'CreateArchiveRule',
      'DeleteAnalyzer',
      'DeleteArchiveRule',
      'GenerateFindingRecommendation',
      'StartPolicyGeneration',
      'StartResourceScan',
      'UpdateAnalyzer',
      'UpdateArchiveRule',
      'UpdateFindings'
    ],
    Read: [
      'CheckAccessNotGranted',
      'CheckNoNewAccess',
      'CheckNoPublicAccess',
      'GetAccessPreview',
      'GetAnalyzedResource',
      'GetAnalyzer',
      'GetArchiveRule',
      'GetFinding',
      'GetFindingRecommendation',
      'GetFindingsStatistics',
      'GetGeneratedPolicy',
      'ListAccessPreviewFindings',
      'ListAnalyzedResources',
      'ListFindings',
      'ListPolicyGenerations',
      'ListTagsForResource',
      'ValidatePolicy'
    ],
    List: [
      'ListAccessPreviews',
      'ListAnalyzers',
      'ListArchiveRules'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Analyzer to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources
   *
   * @param analyzerName - Identifier for the analyzerName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAnalyzer(analyzerName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:access-analyzer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:analyzer/${ analyzerName }`);
  }

  /**
   * Adds a resource of type ArchiveRule to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources
   *
   * @param analyzerName - Identifier for the analyzerName.
   * @param ruleName - Identifier for the ruleName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onArchiveRule(analyzerName: string, ruleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:access-analyzer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:analyzer/${ analyzerName }/archive-rule/${ ruleName }`);
  }

  /**
   * Filters actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAnalyzer()
   * - .toGetAnalyzer()
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
   * Filters actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Analyzer
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAnalyzer()
   * - .toGetAnalyzer()
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
