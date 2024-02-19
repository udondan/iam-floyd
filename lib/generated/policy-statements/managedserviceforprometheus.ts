import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [aps](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedserviceforprometheus.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Aps extends PolicyStatement {
  public servicePrefix = 'aps';

  /**
   * Statement provider for service [aps](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedserviceforprometheus.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create alerts
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-CreateAlertManagerAlerts
   */
  public toCreateAlertManagerAlerts() {
    return this.to('CreateAlertManagerAlerts');
  }

  /**
   * Grants permission to create an alert manager definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-CreateAlertManagerDefinition
   */
  public toCreateAlertManagerDefinition() {
    return this.to('CreateAlertManagerDefinition');
  }

  /**
   * Grants permission to create a logging configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-CreateLoggingConfiguration
   */
  public toCreateLoggingConfiguration() {
    return this.to('CreateLoggingConfiguration');
  }

  /**
   * Grants permission to create a rule groups namespace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-CreateRuleGroupsNamespace
   */
  public toCreateRuleGroupsNamespace() {
    return this.to('CreateRuleGroupsNamespace');
  }

  /**
   * Grants permission to create a scraper
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - aps:TagResource
   * - ec2:DescribeSecurityGroups
   * - ec2:DescribeSubnets
   * - eks:DescribeCluster
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-CreateScraper
   */
  public toCreateScraper() {
    return this.to('CreateScraper');
  }

  /**
   * Grants permission to create a workspace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-CreateWorkspace
   */
  public toCreateWorkspace() {
    return this.to('CreateWorkspace');
  }

  /**
   * Grants permission to delete an alert manager definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DeleteAlertManagerDefinition
   */
  public toDeleteAlertManagerDefinition() {
    return this.to('DeleteAlertManagerDefinition');
  }

  /**
   * Grants permission to delete a silence
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DeleteAlertManagerSilence
   */
  public toDeleteAlertManagerSilence() {
    return this.to('DeleteAlertManagerSilence');
  }

  /**
   * Grants permission to delete a logging configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DeleteLoggingConfiguration
   */
  public toDeleteLoggingConfiguration() {
    return this.to('DeleteLoggingConfiguration');
  }

  /**
   * Grants permission to delete a rule groups namespace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DeleteRuleGroupsNamespace
   */
  public toDeleteRuleGroupsNamespace() {
    return this.to('DeleteRuleGroupsNamespace');
  }

  /**
   * Grants permission to delete a scraper
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DeleteScraper
   */
  public toDeleteScraper() {
    return this.to('DeleteScraper');
  }

  /**
   * Grants permission to delete a workspace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DeleteWorkspace
   */
  public toDeleteWorkspace() {
    return this.to('DeleteWorkspace');
  }

  /**
   * Grants permission to describe an alert manager definition
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DescribeAlertManagerDefinition
   */
  public toDescribeAlertManagerDefinition() {
    return this.to('DescribeAlertManagerDefinition');
  }

  /**
   * Grants permission to describe a logging configuration
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DescribeLoggingConfiguration
   */
  public toDescribeLoggingConfiguration() {
    return this.to('DescribeLoggingConfiguration');
  }

  /**
   * Grants permission to describe a rule groups namespace
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DescribeRuleGroupsNamespace
   */
  public toDescribeRuleGroupsNamespace() {
    return this.to('DescribeRuleGroupsNamespace');
  }

  /**
   * Grants permission to describe a scraper
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DescribeScraper
   */
  public toDescribeScraper() {
    return this.to('DescribeScraper');
  }

  /**
   * Grants permission to describe a workspace
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-DescribeWorkspace
   */
  public toDescribeWorkspace() {
    return this.to('DescribeWorkspace');
  }

  /**
   * Grants permission to get a silence
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetAlertManagerSilence
   */
  public toGetAlertManagerSilence() {
    return this.to('GetAlertManagerSilence');
  }

  /**
   * Grants permission to get current status of an alertmanager
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetAlertManagerStatus
   */
  public toGetAlertManagerStatus() {
    return this.to('GetAlertManagerStatus');
  }

  /**
   * Grants permission to get default scraper configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetDefaultScraperConfiguration
   */
  public toGetDefaultScraperConfiguration() {
    return this.to('GetDefaultScraperConfiguration');
  }

  /**
   * Grants permission to retrieve AMP workspace labels
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetLabels
   */
  public toGetLabels() {
    return this.to('GetLabels');
  }

  /**
   * Grants permission to retrieve the metadata for AMP workspace metrics
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetMetricMetadata
   */
  public toGetMetricMetadata() {
    return this.to('GetMetricMetadata');
  }

  /**
   * Grants permission to retrieve AMP workspace time series data
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-GetSeries
   */
  public toGetSeries() {
    return this.to('GetSeries');
  }

  /**
   * Grants permission to list groups
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListAlertManagerAlertGroups
   */
  public toListAlertManagerAlertGroups() {
    return this.to('ListAlertManagerAlertGroups');
  }

  /**
   * Grants permission to list alerts
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListAlertManagerAlerts
   */
  public toListAlertManagerAlerts() {
    return this.to('ListAlertManagerAlerts');
  }

  /**
   * Grants permission to list receivers
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListAlertManagerReceivers
   */
  public toListAlertManagerReceivers() {
    return this.to('ListAlertManagerReceivers');
  }

  /**
   * Grants permission to list silences
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListAlertManagerSilences
   */
  public toListAlertManagerSilences() {
    return this.to('ListAlertManagerSilences');
  }

  /**
   * Grants permission to list active alerts
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListAlerts
   */
  public toListAlerts() {
    return this.to('ListAlerts');
  }

  /**
   * Grants permission to list rule groups namespaces
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListRuleGroupsNamespaces
   */
  public toListRuleGroupsNamespaces() {
    return this.to('ListRuleGroupsNamespaces');
  }

  /**
   * Grants permission to list alerting and recording rules
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListRules
   */
  public toListRules() {
    return this.to('ListRules');
  }

  /**
   * Grants permission to list scrapers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListScrapers
   */
  public toListScrapers() {
    return this.to('ListScrapers');
  }

  /**
   * Grants permission to list tags on an AMP resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListTagsForResource
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list workspaces
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-ListWorkspaces
   */
  public toListWorkspaces() {
    return this.to('ListWorkspaces');
  }

  /**
   * Grants permission to update an alert manager definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-PutAlertManagerDefinition
   */
  public toPutAlertManagerDefinition() {
    return this.to('PutAlertManagerDefinition');
  }

  /**
   * Grants permission to create or update a silence
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-PutAlertManagerSilences
   */
  public toPutAlertManagerSilences() {
    return this.to('PutAlertManagerSilences');
  }

  /**
   * Grants permission to update a rule groups namespace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-PutRuleGroupsNamespace
   */
  public toPutRuleGroupsNamespace() {
    return this.to('PutRuleGroupsNamespace');
  }

  /**
   * Grants permission to run a query on AMP workspace metrics
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-QueryMetrics
   */
  public toQueryMetrics() {
    return this.to('QueryMetrics');
  }

  /**
   * Grants permission to perform a remote write operation to initiate the streaming of metrics to AMP workspace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-RemoteWrite
   */
  public toRemoteWrite() {
    return this.to('RemoteWrite');
  }

  /**
   * Grants permission to tag an AMP resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-TagResource
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an AMP resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-UntagResource
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a logging configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-UpdateLoggingConfiguration
   */
  public toUpdateLoggingConfiguration() {
    return this.to('UpdateLoggingConfiguration');
  }

  /**
   * Grants permission to modify the alias of existing AMP workspace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-APIReference.html#AMP-APIReference-UpdateWorkspaceAlias
   */
  public toUpdateWorkspaceAlias() {
    return this.to('UpdateWorkspaceAlias');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAlertManagerAlerts',
      'CreateAlertManagerDefinition',
      'CreateLoggingConfiguration',
      'CreateRuleGroupsNamespace',
      'CreateScraper',
      'CreateWorkspace',
      'DeleteAlertManagerDefinition',
      'DeleteAlertManagerSilence',
      'DeleteLoggingConfiguration',
      'DeleteRuleGroupsNamespace',
      'DeleteScraper',
      'DeleteWorkspace',
      'PutAlertManagerDefinition',
      'PutAlertManagerSilences',
      'PutRuleGroupsNamespace',
      'RemoteWrite',
      'UpdateLoggingConfiguration',
      'UpdateWorkspaceAlias'
    ],
    Read: [
      'DescribeAlertManagerDefinition',
      'DescribeLoggingConfiguration',
      'DescribeRuleGroupsNamespace',
      'DescribeScraper',
      'DescribeWorkspace',
      'GetAlertManagerSilence',
      'GetAlertManagerStatus',
      'GetDefaultScraperConfiguration',
      'GetLabels',
      'GetMetricMetadata',
      'GetSeries',
      'ListAlertManagerAlertGroups',
      'ListAlertManagerAlerts',
      'ListAlertManagerReceivers',
      'ListAlertManagerSilences',
      'ListAlerts',
      'ListRules',
      'ListTagsForResource',
      'QueryMetrics'
    ],
    List: [
      'ListRuleGroupsNamespaces',
      'ListScrapers',
      'ListWorkspaces'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type workspace to the statement
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/security-iam.html
   *
   * @param workspaceId - Identifier for the workspaceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   */
  public onWorkspace(workspaceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aps:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:workspace/${ workspaceId }`);
  }

  /**
   * Adds a resource of type rulegroupsnamespace to the statement
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/security-iam.html
   *
   * @param workspaceId - Identifier for the workspaceId.
   * @param namespace - Identifier for the namespace.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   */
  public onRulegroupsnamespace(workspaceId: string, namespace: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aps:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:rulegroupsnamespace/${ workspaceId }/${ namespace }`);
  }

  /**
   * Adds a resource of type scraper to the statement
   *
   * https://docs.aws.amazon.com/prometheus/latest/userguide/security-iam.html
   *
   * @param scraperId - Identifier for the scraperId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   */
  public onScraper(scraperId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aps:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:scraper/${ scraperId }`);
  }

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/clusters.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(clusterName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eks:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cluster/${ clusterName }`);
  }

  /**
   * Filters access based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateRuleGroupsNamespace()
   * - .toCreateScraper()
   * - .toCreateWorkspace()
   * - .toListTagsForResource()
   * - .toTagResource()
   *
   * Applies to resource types:
   * - workspace
   * - rulegroupsnamespace
   * - scraper
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateAlertManagerAlerts()
   * - .toCreateAlertManagerDefinition()
   * - .toCreateLoggingConfiguration()
   * - .toCreateScraper()
   * - .toDeleteAlertManagerDefinition()
   * - .toDeleteAlertManagerSilence()
   * - .toDeleteLoggingConfiguration()
   * - .toDeleteRuleGroupsNamespace()
   * - .toDeleteScraper()
   * - .toDeleteWorkspace()
   * - .toDescribeAlertManagerDefinition()
   * - .toDescribeLoggingConfiguration()
   * - .toDescribeRuleGroupsNamespace()
   * - .toDescribeScraper()
   * - .toDescribeWorkspace()
   * - .toGetAlertManagerSilence()
   * - .toGetAlertManagerStatus()
   * - .toGetLabels()
   * - .toGetMetricMetadata()
   * - .toGetSeries()
   * - .toListAlertManagerAlertGroups()
   * - .toListAlertManagerAlerts()
   * - .toListAlertManagerReceivers()
   * - .toListAlertManagerSilences()
   * - .toListAlerts()
   * - .toListRuleGroupsNamespaces()
   * - .toListRules()
   * - .toPutAlertManagerDefinition()
   * - .toPutAlertManagerSilences()
   * - .toPutRuleGroupsNamespace()
   * - .toQueryMetrics()
   * - .toRemoteWrite()
   * - .toUpdateLoggingConfiguration()
   * - .toUpdateWorkspaceAlias()
   *
   * Applies to resource types:
   * - workspace
   * - rulegroupsnamespace
   * - scraper
   * - cluster
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateRuleGroupsNamespace()
   * - .toCreateScraper()
   * - .toCreateWorkspace()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - workspace
   * - rulegroupsnamespace
   * - scraper
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
