import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [access-analyzer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_iamaccessanalyzer.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AccessAnalyzer extends PolicyStatement {
  public servicePrefix = 'access-analyzer';

  /**
   * Statement provider for service [access-analyzer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_iamaccessanalyzer.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to apply an archive rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ApplyArchiveRule.html
   */
  public toApplyArchiveRule() {
    this.to('access-analyzer:ApplyArchiveRule');
    return this;
  }

  /**
   * Grants permission to create an analyzer.
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
    this.to('access-analyzer:CreateAnalyzer');
    return this;
  }

  /**
   * Grants permission to create an archive rule for the specified analyzer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_CreateArchiveRule.html
   */
  public toCreateArchiveRule() {
    this.to('access-analyzer:CreateArchiveRule');
    return this;
  }

  /**
   * Grants permission to delete the specified analyzer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteAnalyzer.html
   */
  public toDeleteAnalyzer() {
    this.to('access-analyzer:DeleteAnalyzer');
    return this;
  }

  /**
   * Grants permission to delete archive rules for the specified analyzer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_DeleteArchiveRule.html
   */
  public toDeleteArchiveRule() {
    this.to('access-analyzer:DeleteArchiveRule');
    return this;
  }

  /**
   * Grants permission to retrieve information about an analyzed resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetAnalyzedResource.html
   */
  public toGetAnalyzedResource() {
    this.to('access-analyzer:GetAnalyzedResource');
    return this;
  }

  /**
   * Grants permission to retrieve information about analyzers.
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
    this.to('access-analyzer:GetAnalyzer');
    return this;
  }

  /**
   * Grants permission to retrieve information about archive rules for the specified analyzer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetArchiveRule.html
   */
  public toGetArchiveRule() {
    this.to('access-analyzer:GetArchiveRule');
    return this;
  }

  /**
   * Grants permission to retrieve findings.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_GetFinding.html
   */
  public toGetFinding() {
    this.to('access-analyzer:GetFinding');
    return this;
  }

  /**
   * Grants permission to retrieve a list of resources that have been analyzed.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzedResources.html
   */
  public toListAnalyzedResources() {
    this.to('access-analyzer:ListAnalyzedResources');
    return this;
  }

  /**
   * Grants permission to retrieves a list of analyzers.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListAnalyzers.html
   */
  public toListAnalyzers() {
    this.to('access-analyzer:ListAnalyzers');
    return this;
  }

  /**
   * Grants permission to retrieve a list of archive rules from an analyzer.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListArchiveRules.html
   */
  public toListArchiveRules() {
    this.to('access-analyzer:ListArchiveRules');
    return this;
  }

  /**
   * Grants permission to retrieve a list of findings from an analyzer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListFindings.html
   */
  public toListFindings() {
    this.to('access-analyzer:ListFindings');
    return this;
  }

  /**
   * Grants permission to retrieve a list of tags applied to a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('access-analyzer:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to start a scan of the policies applied to a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_StartResourceScan.html
   */
  public toStartResourceScan() {
    this.to('access-analyzer:StartResourceScan');
    return this;
  }

  /**
   * Grants permission to add a tag to a resource.
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
    this.to('access-analyzer:TagResource');
    return this;
  }

  /**
   * Grants permission to remove a tag from a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('access-analyzer:UntagResource');
    return this;
  }

  /**
   * Grants permission to modify an archive rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateArchiveRule.html
   */
  public toUpdateArchiveRule() {
    this.to('access-analyzer:UpdateArchiveRule');
    return this;
  }

  /**
   * Grants permission to modify findings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/access-analyzer/latest/APIReference/API_UpdateFindings.html
   */
  public toUpdateFindings() {
    this.to('access-analyzer:UpdateFindings');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "ApplyArchiveRule",
      "CreateAnalyzer",
      "CreateArchiveRule",
      "DeleteAnalyzer",
      "DeleteArchiveRule",
      "StartResourceScan",
      "UpdateArchiveRule",
      "UpdateFindings"
    ],
    "Read": [
      "GetAnalyzedResource",
      "GetAnalyzer",
      "GetArchiveRule",
      "GetFinding",
      "ListAnalyzedResources",
      "ListFindings",
      "ListTagsForResource"
    ],
    "List": [
      "ListAnalyzers",
      "ListArchiveRules"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type Analyzer to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources
   *
   * @param analyzerName - Identifier for the analyzerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAnalyzer(analyzerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:access-analyzer:${Region}:${Account}:analyzer/${AnalyzerName}';
    arn = arn.replace('${AnalyzerName}', analyzerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ArchiveRule to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources
   *
   * @param analyzerName - Identifier for the analyzerName.
   * @param ruleName - Identifier for the ruleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onArchiveRule(analyzerName: string, ruleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:access-analyzer:${Region}:${Account}:analyzer/${AnalyzerName}/archive-rule/${RuleName}';
    arn = arn.replace('${AnalyzerName}', analyzerName);
    arn = arn.replace('${RuleName}', ruleName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type AccessAnalyzerActionsWrite = 'ApplyArchiveRule' | 'CreateAnalyzer' | 'CreateArchiveRule' | 'DeleteAnalyzer' | 'DeleteArchiveRule' | 'StartResourceScan' | 'UpdateArchiveRule' | 'UpdateFindings';
export type AccessAnalyzerActionsRead = 'GetAnalyzedResource' | 'GetAnalyzer' | 'GetArchiveRule' | 'GetFinding' | 'ListAnalyzedResources' | 'ListFindings' | 'ListTagsForResource';
export type AccessAnalyzerActionsList = 'ListAnalyzers' | 'ListArchiveRules';
export type AccessAnalyzerActionsTagging = 'TagResource' | 'UntagResource';
export type AccessAnalyzerActions = AccessAnalyzerActionsWrite | AccessAnalyzerActionsRead | AccessAnalyzerActionsList | AccessAnalyzerActionsTagging;
