import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [config](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsconfig.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Config extends PolicyStatement {
  public servicePrefix = 'config';

  /**
   * Statement provider for service [config](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsconfig.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Returns the current configuration items for resources that are present in your AWS Config aggregator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_BatchGetAggregateResourceConfig.html
   */
  public toBatchGetAggregateResourceConfig() {
    this.to('config:BatchGetAggregateResourceConfig');
    return this;
  }

  /**
   * Returns the current configuration for one or more requested resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_BatchGetResourceConfig.html
   */
  public toBatchGetResourceConfig() {
    this.to('config:BatchGetResourceConfig');
    return this;
  }

  /**
   * Deletes the authorization granted to the specified configuration aggregator account in a specified region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteAggregationAuthorization.html
   */
  public toDeleteAggregationAuthorization() {
    this.to('config:DeleteAggregationAuthorization');
    return this;
  }

  /**
   * Deletes the specified AWS Config rule and all of its evaluation results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigRule.html
   */
  public toDeleteConfigRule() {
    this.to('config:DeleteConfigRule');
    return this;
  }

  /**
   * Deletes the specified configuration aggregator and the aggregated data associated with the aggregator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationAggregator.html
   */
  public toDeleteConfigurationAggregator() {
    this.to('config:DeleteConfigurationAggregator');
    return this;
  }

  /**
   * Deletes the configuration recorder
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationRecorder.html
   */
  public toDeleteConfigurationRecorder() {
    this.to('config:DeleteConfigurationRecorder');
    return this;
  }

  /**
   * Deletes the specified conformance pack and all the AWS Config rules and all evaluation results within that conformance pack.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConformancePack.html
   */
  public toDeleteConformancePack() {
    this.to('config:DeleteConformancePack');
    return this;
  }

  /**
   * Deletes the delivery channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteDeliveryChannel.html
   */
  public toDeleteDeliveryChannel() {
    this.to('config:DeleteDeliveryChannel');
    return this;
  }

  /**
   * Deletes the evaluation results for the specified Config rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteEvaluationResults.html
   */
  public toDeleteEvaluationResults() {
    this.to('config:DeleteEvaluationResults');
    return this;
  }

  /**
   * Deletes the specified organization config rule and all of its evaluation results from all member accounts in that organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConfigRule.html
   */
  public toDeleteOrganizationConfigRule() {
    this.to('config:DeleteOrganizationConfigRule');
    return this;
  }

  /**
   * Deletes the specified organization conformance pack and all of its evaluation results from all member accounts in that organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConformancePack.html
   */
  public toDeleteOrganizationConformancePack() {
    this.to('config:DeleteOrganizationConformancePack');
    return this;
  }

  /**
   * Deletes pending authorization requests for a specified aggregator account in a specified region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeletePendingAggregationRequest.html
   */
  public toDeletePendingAggregationRequest() {
    this.to('config:DeletePendingAggregationRequest');
    return this;
  }

  /**
   * Deletes the remediation configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationConfiguration.html
   */
  public toDeleteRemediationConfiguration() {
    this.to('config:DeleteRemediationConfiguration');
    return this;
  }

  /**
   * Deletes one or more remediation exceptions for specific resource keys for a specific AWS Config Rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationExceptions.html
   */
  public toDeleteRemediationExceptions() {
    this.to('config:DeleteRemediationExceptions');
    return this;
  }

  /**
   * Records the configuration state for a custom resource that has been deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteResourceConfig.html
   */
  public toDeleteResourceConfig() {
    this.to('config:DeleteResourceConfig');
    return this;
  }

  /**
   * Deletes the retention configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRetentionConfiguration.html
   */
  public toDeleteRetentionConfiguration() {
    this.to('config:DeleteRetentionConfiguration');
    return this;
  }

  /**
   * Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeliverConfigSnapshot.html
   */
  public toDeliverConfigSnapshot() {
    this.to('config:DeliverConfigSnapshot');
    return this;
  }

  /**
   * Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregateComplianceByConfigRules.html
   */
  public toDescribeAggregateComplianceByConfigRules() {
    this.to('config:DescribeAggregateComplianceByConfigRules');
    return this;
  }

  /**
   * Returns a list of authorizations granted to various aggregator accounts and regions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregationAuthorizations.html
   */
  public toDescribeAggregationAuthorizations() {
    this.to('config:DescribeAggregationAuthorizations');
    return this;
  }

  /**
   * Indicates whether the specified AWS Config rules are compliant
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByConfigRule.html
   */
  public toDescribeComplianceByConfigRule() {
    this.to('config:DescribeComplianceByConfigRule');
    return this;
  }

  /**
   * Indicates whether the specified AWS resources are compliant
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByResource.html
   */
  public toDescribeComplianceByResource() {
    this.to('config:DescribeComplianceByResource');
    return this;
  }

  /**
   * Returns status information for each of your AWS managed Config rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRuleEvaluationStatus.html
   */
  public toDescribeConfigRuleEvaluationStatus() {
    this.to('config:DescribeConfigRuleEvaluationStatus');
    return this;
  }

  /**
   * Returns details about your AWS Config rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRules.html
   */
  public toDescribeConfigRules() {
    this.to('config:DescribeConfigRules');
    return this;
  }

  /**
   * Returns status information for sources within an aggregator
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregatorSourcesStatus.html
   */
  public toDescribeConfigurationAggregatorSourcesStatus() {
    this.to('config:DescribeConfigurationAggregatorSourcesStatus');
    return this;
  }

  /**
   * Returns the details of one or more configuration aggregators
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregators.html
   */
  public toDescribeConfigurationAggregators() {
    this.to('config:DescribeConfigurationAggregators');
    return this;
  }

  /**
   * Returns the current status of the specified configuration recorder
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html
   */
  public toDescribeConfigurationRecorderStatus() {
    this.to('config:DescribeConfigurationRecorderStatus');
    return this;
  }

  /**
   * Returns the name of one or more specified configuration recorders
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html
   */
  public toDescribeConfigurationRecorders() {
    this.to('config:DescribeConfigurationRecorders');
    return this;
  }

  /**
   * Returns compliance information for each rule in that conformance pack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackCompliance.html
   */
  public toDescribeConformancePackCompliance() {
    this.to('config:DescribeConformancePackCompliance');
    return this;
  }

  /**
   * Provides one or more conformance packs deployment status.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackStatus.html
   */
  public toDescribeConformancePackStatus() {
    this.to('config:DescribeConformancePackStatus');
    return this;
  }

  /**
   * Returns a list of one or more conformance packs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePacks.html
   */
  public toDescribeConformancePacks() {
    this.to('config:DescribeConformancePacks');
    return this;
  }

  /**
   * Returns the current status of the specified delivery channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannelStatus.html
   */
  public toDescribeDeliveryChannelStatus() {
    this.to('config:DescribeDeliveryChannelStatus');
    return this;
  }

  /**
   * Returns details about the specified delivery channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannels.html
   */
  public toDescribeDeliveryChannels() {
    this.to('config:DescribeDeliveryChannels');
    return this;
  }

  /**
   * Provides organization config rule deployment status for an organization.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRuleStatuses.html
   */
  public toDescribeOrganizationConfigRuleStatuses() {
    this.to('config:DescribeOrganizationConfigRuleStatuses');
    return this;
  }

  /**
   * Returns a list of organization config rules.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRules.html
   */
  public toDescribeOrganizationConfigRules() {
    this.to('config:DescribeOrganizationConfigRules');
    return this;
  }

  /**
   * Provides organization conformance pack deployment status for an organization.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePackStatuses.html
   */
  public toDescribeOrganizationConformancePackStatuses() {
    this.to('config:DescribeOrganizationConformancePackStatuses');
    return this;
  }

  /**
   * Returns a list of organization conformance packs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePacks.html
   */
  public toDescribeOrganizationConformancePacks() {
    this.to('config:DescribeOrganizationConformancePacks');
    return this;
  }

  /**
   * Returns a list of all pending aggregation requests
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribePendingAggregationRequests.html
   */
  public toDescribePendingAggregationRequests() {
    this.to('config:DescribePendingAggregationRequests');
    return this;
  }

  /**
   * Returns the details of one or more remediation configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationConfigurations.html
   */
  public toDescribeRemediationConfigurations() {
    this.to('config:DescribeRemediationConfigurations');
    return this;
  }

  /**
   * Returns the details of one or more remediation exceptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExceptions.html
   */
  public toDescribeRemediationExceptions() {
    this.to('config:DescribeRemediationExceptions');
    return this;
  }

  /**
   * Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps and any error messages for steps that have failed
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExecutionStatus.html
   */
  public toDescribeRemediationExecutionStatus() {
    this.to('config:DescribeRemediationExecutionStatus');
    return this;
  }

  /**
   * Returns the details of one or more retention configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRetentionConfigurations.html
   */
  public toDescribeRetentionConfigurations() {
    this.to('config:DescribeRetentionConfigurations');
    return this;
  }

  /**
   * Returns the evaluation results for the specified AWS Config rule for a specific resource in a rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateComplianceDetailsByConfigRule.html
   */
  public toGetAggregateComplianceDetailsByConfigRule() {
    this.to('config:GetAggregateComplianceDetailsByConfigRule');
    return this;
  }

  /**
   * Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateConfigRuleComplianceSummary.html
   */
  public toGetAggregateConfigRuleComplianceSummary() {
    this.to('config:GetAggregateConfigRuleComplianceSummary');
    return this;
  }

  /**
   * Returns the resource counts across accounts and regions that are present in your AWS Config aggregator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateDiscoveredResourceCounts.html
   */
  public toGetAggregateDiscoveredResourceCounts() {
    this.to('config:GetAggregateDiscoveredResourceCounts');
    return this;
  }

  /**
   * Returns configuration item that is aggregated for your specific resource in a specific source account and region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateResourceConfig.html
   */
  public toGetAggregateResourceConfig() {
    this.to('config:GetAggregateResourceConfig');
    return this;
  }

  /**
   * Returns the evaluation results for the specified AWS Config rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByConfigRule.html
   */
  public toGetComplianceDetailsByConfigRule() {
    this.to('config:GetComplianceDetailsByConfigRule');
    return this;
  }

  /**
   * Returns the evaluation results for the specified AWS resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html
   */
  public toGetComplianceDetailsByResource() {
    this.to('config:GetComplianceDetailsByResource');
    return this;
  }

  /**
   * Returns the number of AWS Config rules that are compliant and noncompliant, up to a maximum of 25 for each
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByConfigRule.html
   */
  public toGetComplianceSummaryByConfigRule() {
    this.to('config:GetComplianceSummaryByConfigRule');
    return this;
  }

  /**
   * Returns the number of resources that are compliant and the number that are noncompliant
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByResourceType.html
   */
  public toGetComplianceSummaryByResourceType() {
    this.to('config:GetComplianceSummaryByResourceType');
    return this;
  }

  /**
   * Returns compliance details of a conformance pack for all AWS resources that are monitered by conformance pack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceDetails.html
   */
  public toGetConformancePackComplianceDetails() {
    this.to('config:GetConformancePackComplianceDetails');
    return this;
  }

  /**
   * Provides compliance summary for one or more conformance packs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceSummary.html
   */
  public toGetConformancePackComplianceSummary() {
    this.to('config:GetConformancePackComplianceSummary');
    return this;
  }

  /**
   * Returns the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in this region for your AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetDiscoveredResourceCounts.html
   */
  public toGetDiscoveredResourceCounts() {
    this.to('config:GetDiscoveredResourceCounts');
    return this;
  }

  /**
   * Returns detailed status for each member account within an organization for a given organization config rule.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConfigRuleDetailedStatus.html
   */
  public toGetOrganizationConfigRuleDetailedStatus() {
    this.to('config:GetOrganizationConfigRuleDetailedStatus');
    return this;
  }

  /**
   * Returns detailed status for each member account within an organization for a given organization conformance pack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConformancePackDetailedStatus.html
   */
  public toGetOrganizationConformancePackDetailedStatus() {
    this.to('config:GetOrganizationConformancePackDetailedStatus');
    return this;
  }

  /**
   * Returns a list of configuration items for the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceConfigHistory.html
   */
  public toGetResourceConfigHistory() {
    this.to('config:GetResourceConfigHistory');
    return this;
  }

  /**
   * Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_ListAggregateDiscoveredResources.html
   */
  public toListAggregateDiscoveredResources() {
    this.to('config:ListAggregateDiscoveredResources');
    return this;
  }

  /**
   * Accepts a resource type and returns a list of resource identifiers for the resources of that type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_ListDiscoveredResources.html
   */
  public toListDiscoveredResources() {
    this.to('config:ListDiscoveredResources');
    return this;
  }

  /**
   * List the tags for AWS Config resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('config:ListTagsForResource');
    return this;
  }

  /**
   * Authorizes the aggregator account and region to collect data from the source account and region
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutAggregationAuthorization.html
   */
  public toPutAggregationAuthorization() {
    this.to('config:PutAggregationAuthorization');
    return this;
  }

  /**
   * Adds or updates an AWS Config rule for evaluating whether your AWS resources comply with your desired configurations
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html
   */
  public toPutConfigRule() {
    this.to('config:PutConfigRule');
    return this;
  }

  /**
   * Creates and updates the configuration aggregator with the selected source accounts and regions
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationAggregator.html
   */
  public toPutConfigurationAggregator() {
    this.to('config:PutConfigurationAggregator');
    return this;
  }

  /**
   * Creates a new configuration recorder to record the selected resource configurations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html
   */
  public toPutConfigurationRecorder() {
    this.to('config:PutConfigurationRecorder');
    return this;
  }

  /**
   * Creates or updates a conformance pack.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html
   */
  public toPutConformancePack() {
    this.to('config:PutConformancePack');
    return this;
  }

  /**
   * Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutDeliveryChannel.html
   */
  public toPutDeliveryChannel() {
    this.to('config:PutDeliveryChannel');
    return this;
  }

  /**
   * Used by an AWS Lambda function to deliver evaluation results to AWS Config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutEvaluations.html
   */
  public toPutEvaluations() {
    this.to('config:PutEvaluations');
    return this;
  }

  /**
   * Adds or updates organization config rule for your entire organization evaluating whether your AWS resources comply with your desired configurations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html
   */
  public toPutOrganizationConfigRule() {
    this.to('config:PutOrganizationConfigRule');
    return this;
  }

  /**
   * Adds or updates organization conformance pack for your entire organization evaluating whether your AWS resources comply with your desired configurations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html
   */
  public toPutOrganizationConformancePack() {
    this.to('config:PutOrganizationConformancePack');
    return this;
  }

  /**
   * Adds or updates the remediation configuration with a specific AWS Config rule with the selected target or action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationConfigurations.html
   */
  public toPutRemediationConfigurations() {
    this.to('config:PutRemediationConfigurations');
    return this;
  }

  /**
   * Adds or updates remediation exceptions for specific resources for a specific AWS Config rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationExceptions.html
   */
  public toPutRemediationExceptions() {
    this.to('config:PutRemediationExceptions');
    return this;
  }

  /**
   * Records the configuration state for the resource provided in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutResourceConfig.html
   */
  public toPutResourceConfig() {
    this.to('config:PutResourceConfig');
    return this;
  }

  /**
   * Creates and updates the retention configuration with details about retention period (number of days) that AWS Config stores your historical information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutRetentionConfiguration.html
   */
  public toPutRetentionConfiguration() {
    this.to('config:PutRetentionConfiguration');
    return this;
  }

  /**
   * Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of AWS resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_SelectAggregateResourceConfig.html
   */
  public toSelectAggregateResourceConfig() {
    this.to('config:SelectAggregateResourceConfig');
    return this;
  }

  /**
   * Accepts a structured query language (SQL) SELECT command, performs the corresponding search, and returns resource configurations matching the properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_SelectResourceConfig.html
   */
  public toSelectResourceConfig() {
    this.to('config:SelectResourceConfig');
    return this;
  }

  /**
   * Evaluates your resources against the specified Config rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigRulesEvaluation.html
   */
  public toStartConfigRulesEvaluation() {
    this.to('config:StartConfigRulesEvaluation');
    return this;
  }

  /**
   * Starts recording configurations of the AWS resources you have selected to record in your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigurationRecorder.html
   */
  public toStartConfigurationRecorder() {
    this.to('config:StartConfigurationRecorder');
    return this;
  }

  /**
   * Runs an on-demand remediation for the specified AWS Config rules against the last known remediation configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_StartRemediationExecution.html
   */
  public toStartRemediationExecution() {
    this.to('config:StartRemediationExecution');
    return this;
  }

  /**
   * Stops recording configurations of the AWS resources you have selected to record in your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html
   */
  public toStopConfigurationRecorder() {
    this.to('config:StopConfigurationRecorder');
    return this;
  }

  /**
   * Associates the specified tags to a resource with the specified resourceArn
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('config:TagResource');
    return this;
  }

  /**
   * Deletes specified tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('config:UntagResource');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "BatchGetAggregateResourceConfig",
      "BatchGetResourceConfig",
      "DeliverConfigSnapshot",
      "DescribeConformancePackCompliance",
      "DescribeConformancePackStatus",
      "DescribeConformancePacks",
      "DescribeOrganizationConfigRuleStatuses",
      "DescribeOrganizationConfigRules",
      "DescribeOrganizationConformancePackStatuses",
      "DescribeOrganizationConformancePacks",
      "GetAggregateComplianceDetailsByConfigRule",
      "GetAggregateConfigRuleComplianceSummary",
      "GetAggregateDiscoveredResourceCounts",
      "GetAggregateResourceConfig",
      "GetComplianceDetailsByConfigRule",
      "GetComplianceDetailsByResource",
      "GetComplianceSummaryByConfigRule",
      "GetComplianceSummaryByResourceType",
      "GetConformancePackComplianceDetails",
      "GetConformancePackComplianceSummary",
      "GetDiscoveredResourceCounts",
      "GetOrganizationConfigRuleDetailedStatus",
      "GetOrganizationConformancePackDetailedStatus",
      "GetResourceConfigHistory",
      "SelectAggregateResourceConfig",
      "SelectResourceConfig"
    ],
    "Write": [
      "DeleteAggregationAuthorization",
      "DeleteConfigRule",
      "DeleteConfigurationAggregator",
      "DeleteConfigurationRecorder",
      "DeleteConformancePack",
      "DeleteDeliveryChannel",
      "DeleteEvaluationResults",
      "DeleteOrganizationConfigRule",
      "DeleteOrganizationConformancePack",
      "DeletePendingAggregationRequest",
      "DeleteRemediationConfiguration",
      "DeleteRemediationExceptions",
      "DeleteResourceConfig",
      "DeleteRetentionConfiguration",
      "PutAggregationAuthorization",
      "PutConfigRule",
      "PutConfigurationAggregator",
      "PutConfigurationRecorder",
      "PutConformancePack",
      "PutDeliveryChannel",
      "PutEvaluations",
      "PutOrganizationConfigRule",
      "PutOrganizationConformancePack",
      "PutRemediationConfigurations",
      "PutRemediationExceptions",
      "PutResourceConfig",
      "PutRetentionConfiguration",
      "StartConfigRulesEvaluation",
      "StartConfigurationRecorder",
      "StartRemediationExecution",
      "StopConfigurationRecorder"
    ],
    "List": [
      "DescribeAggregateComplianceByConfigRules",
      "DescribeAggregationAuthorizations",
      "DescribeComplianceByConfigRule",
      "DescribeComplianceByResource",
      "DescribeConfigRuleEvaluationStatus",
      "DescribeConfigRules",
      "DescribeConfigurationAggregatorSourcesStatus",
      "DescribeConfigurationAggregators",
      "DescribeConfigurationRecorderStatus",
      "DescribeConfigurationRecorders",
      "DescribeDeliveryChannelStatus",
      "DescribeDeliveryChannels",
      "DescribePendingAggregationRequests",
      "DescribeRemediationConfigurations",
      "DescribeRemediationExceptions",
      "DescribeRemediationExecutionStatus",
      "DescribeRetentionConfigurations",
      "ListAggregateDiscoveredResources",
      "ListDiscoveredResources",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type AggregationAuthorization to the statement
   *
   * https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.htmlAPI_AggregationAuthorization.html
   *
   * @param aggregatorAccount - Identifier for the aggregatorAccount.
   * @param aggregatorRegion - Identifier for the aggregatorRegion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAggregationAuthorization(aggregatorAccount: string, aggregatorRegion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:config:${Region}:${Account}:aggregation-authorization/${AggregatorAccount}/${AggregatorRegion}';
    arn = arn.replace('${AggregatorAccount}', aggregatorAccount);
    arn = arn.replace('${AggregatorRegion}', aggregatorRegion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ConfigurationAggregator to the statement
   *
   * https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.htmlAPI_ConfigurationAggregator.html
   *
   * @param aggregatorId - Identifier for the aggregatorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfigurationAggregator(aggregatorId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:config:${Region}:${Account}:config-aggregator/${AggregatorId}';
    arn = arn.replace('${AggregatorId}', aggregatorId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ConfigRule to the statement
   *
   * https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.htmlAPI_ConfigRule.html
   *
   * @param configRuleId - Identifier for the configRuleId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfigRule(configRuleId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:config:${Region}:${Account}:config-rule/${ConfigRuleId}';
    arn = arn.replace('${ConfigRuleId}', configRuleId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ConformancePack to the statement
   *
   * https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.htmlAPI_ConformancePack.html
   *
   * @param conformancePackName - Identifier for the conformancePackName.
   * @param conformancePackId - Identifier for the conformancePackId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConformancePack(conformancePackName: string, conformancePackId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:config:${Region}:${Account}:conformance-pack/${ConformancePackName}/${ConformancePackId}';
    arn = arn.replace('${ConformancePackName}', conformancePackName);
    arn = arn.replace('${ConformancePackId}', conformancePackId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type OrganizationConfigRule to the statement
   *
   * https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.htmlAPI_OrganizationConfigRule.html
   *
   * @param organizationConfigRuleId - Identifier for the organizationConfigRuleId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOrganizationConfigRule(organizationConfigRuleId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:config:${Region}:${Account}:organization-config-rule/${OrganizationConfigRuleId}';
    arn = arn.replace('${OrganizationConfigRuleId}', organizationConfigRuleId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type OrganizationConformancePack to the statement
   *
   * https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.htmlAPI_OrganizationConformancePack.html
   *
   * @param organizationConformancePackId - Identifier for the organizationConformancePackId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onOrganizationConformancePack(organizationConformancePackId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:config:${Region}:${Account}:organization-conformance-pack/${OrganizationConformancePackId}';
    arn = arn.replace('${OrganizationConformancePackId}', organizationConformancePackId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type RemediationConfiguration to the statement
   *
   * https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.htmlAPI_RemediationConfiguration.html
   *
   * @param remediationConfigurationId - Identifier for the remediationConfigurationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRemediationConfiguration(remediationConfigurationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:config:${Region}:${Account}:remediation-configuration/${RemediationConfigurationId}';
    arn = arn.replace('${RemediationConfigurationId}', remediationConfigurationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
