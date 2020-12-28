import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [config](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconfig.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Config extends PolicyStatement {
  public servicePrefix = 'config';

  /**
   * Statement provider for service [config](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsconfig.html).
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
    return this.to('BatchGetAggregateResourceConfig');
  }

  /**
   * Returns the current configuration for one or more requested resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_BatchGetResourceConfig.html
   */
  public toBatchGetResourceConfig() {
    return this.to('BatchGetResourceConfig');
  }

  /**
   * Deletes the authorization granted to the specified configuration aggregator account in a specified region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteAggregationAuthorization.html
   */
  public toDeleteAggregationAuthorization() {
    return this.to('DeleteAggregationAuthorization');
  }

  /**
   * Deletes the specified AWS Config rule and all of its evaluation results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigRule.html
   */
  public toDeleteConfigRule() {
    return this.to('DeleteConfigRule');
  }

  /**
   * Deletes the specified configuration aggregator and the aggregated data associated with the aggregator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationAggregator.html
   */
  public toDeleteConfigurationAggregator() {
    return this.to('DeleteConfigurationAggregator');
  }

  /**
   * Deletes the configuration recorder
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationRecorder.html
   */
  public toDeleteConfigurationRecorder() {
    return this.to('DeleteConfigurationRecorder');
  }

  /**
   * Deletes the specified conformance pack and all the AWS Config rules and all evaluation results within that conformance pack.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConformancePack.html
   */
  public toDeleteConformancePack() {
    return this.to('DeleteConformancePack');
  }

  /**
   * Deletes the delivery channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteDeliveryChannel.html
   */
  public toDeleteDeliveryChannel() {
    return this.to('DeleteDeliveryChannel');
  }

  /**
   * Deletes the evaluation results for the specified Config rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteEvaluationResults.html
   */
  public toDeleteEvaluationResults() {
    return this.to('DeleteEvaluationResults');
  }

  /**
   * Deletes the specified organization config rule and all of its evaluation results from all member accounts in that organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConfigRule.html
   */
  public toDeleteOrganizationConfigRule() {
    return this.to('DeleteOrganizationConfigRule');
  }

  /**
   * Deletes the specified organization conformance pack and all of its evaluation results from all member accounts in that organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConformancePack.html
   */
  public toDeleteOrganizationConformancePack() {
    return this.to('DeleteOrganizationConformancePack');
  }

  /**
   * Deletes pending authorization requests for a specified aggregator account in a specified region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeletePendingAggregationRequest.html
   */
  public toDeletePendingAggregationRequest() {
    return this.to('DeletePendingAggregationRequest');
  }

  /**
   * Deletes the remediation configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationConfiguration.html
   */
  public toDeleteRemediationConfiguration() {
    return this.to('DeleteRemediationConfiguration');
  }

  /**
   * Deletes one or more remediation exceptions for specific resource keys for a specific AWS Config Rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationExceptions.html
   */
  public toDeleteRemediationExceptions() {
    return this.to('DeleteRemediationExceptions');
  }

  /**
   * Records the configuration state for a custom resource that has been deleted.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteResourceConfig.html
   */
  public toDeleteResourceConfig() {
    return this.to('DeleteResourceConfig');
  }

  /**
   * Deletes the retention configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRetentionConfiguration.html
   */
  public toDeleteRetentionConfiguration() {
    return this.to('DeleteRetentionConfiguration');
  }

  /**
   * Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeliverConfigSnapshot.html
   */
  public toDeliverConfigSnapshot() {
    return this.to('DeliverConfigSnapshot');
  }

  /**
   * Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregateComplianceByConfigRules.html
   */
  public toDescribeAggregateComplianceByConfigRules() {
    return this.to('DescribeAggregateComplianceByConfigRules');
  }

  /**
   * Returns a list of authorizations granted to various aggregator accounts and regions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregationAuthorizations.html
   */
  public toDescribeAggregationAuthorizations() {
    return this.to('DescribeAggregationAuthorizations');
  }

  /**
   * Indicates whether the specified AWS Config rules are compliant
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByConfigRule.html
   */
  public toDescribeComplianceByConfigRule() {
    return this.to('DescribeComplianceByConfigRule');
  }

  /**
   * Indicates whether the specified AWS resources are compliant
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByResource.html
   */
  public toDescribeComplianceByResource() {
    return this.to('DescribeComplianceByResource');
  }

  /**
   * Returns status information for each of your AWS managed Config rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRuleEvaluationStatus.html
   */
  public toDescribeConfigRuleEvaluationStatus() {
    return this.to('DescribeConfigRuleEvaluationStatus');
  }

  /**
   * Returns details about your AWS Config rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRules.html
   */
  public toDescribeConfigRules() {
    return this.to('DescribeConfigRules');
  }

  /**
   * Returns status information for sources within an aggregator
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregatorSourcesStatus.html
   */
  public toDescribeConfigurationAggregatorSourcesStatus() {
    return this.to('DescribeConfigurationAggregatorSourcesStatus');
  }

  /**
   * Returns the details of one or more configuration aggregators
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregators.html
   */
  public toDescribeConfigurationAggregators() {
    return this.to('DescribeConfigurationAggregators');
  }

  /**
   * Returns the current status of the specified configuration recorder
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html
   */
  public toDescribeConfigurationRecorderStatus() {
    return this.to('DescribeConfigurationRecorderStatus');
  }

  /**
   * Returns the name of one or more specified configuration recorders
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html
   */
  public toDescribeConfigurationRecorders() {
    return this.to('DescribeConfigurationRecorders');
  }

  /**
   * Returns compliance information for each rule in that conformance pack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackCompliance.html
   */
  public toDescribeConformancePackCompliance() {
    return this.to('DescribeConformancePackCompliance');
  }

  /**
   * Provides one or more conformance packs deployment status.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackStatus.html
   */
  public toDescribeConformancePackStatus() {
    return this.to('DescribeConformancePackStatus');
  }

  /**
   * Returns a list of one or more conformance packs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePacks.html
   */
  public toDescribeConformancePacks() {
    return this.to('DescribeConformancePacks');
  }

  /**
   * Returns the current status of the specified delivery channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannelStatus.html
   */
  public toDescribeDeliveryChannelStatus() {
    return this.to('DescribeDeliveryChannelStatus');
  }

  /**
   * Returns details about the specified delivery channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannels.html
   */
  public toDescribeDeliveryChannels() {
    return this.to('DescribeDeliveryChannels');
  }

  /**
   * Provides organization config rule deployment status for an organization.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRuleStatuses.html
   */
  public toDescribeOrganizationConfigRuleStatuses() {
    return this.to('DescribeOrganizationConfigRuleStatuses');
  }

  /**
   * Returns a list of organization config rules.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRules.html
   */
  public toDescribeOrganizationConfigRules() {
    return this.to('DescribeOrganizationConfigRules');
  }

  /**
   * Provides organization conformance pack deployment status for an organization.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePackStatuses.html
   */
  public toDescribeOrganizationConformancePackStatuses() {
    return this.to('DescribeOrganizationConformancePackStatuses');
  }

  /**
   * Returns a list of organization conformance packs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePacks.html
   */
  public toDescribeOrganizationConformancePacks() {
    return this.to('DescribeOrganizationConformancePacks');
  }

  /**
   * Returns a list of all pending aggregation requests
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribePendingAggregationRequests.html
   */
  public toDescribePendingAggregationRequests() {
    return this.to('DescribePendingAggregationRequests');
  }

  /**
   * Returns the details of one or more remediation configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationConfigurations.html
   */
  public toDescribeRemediationConfigurations() {
    return this.to('DescribeRemediationConfigurations');
  }

  /**
   * Returns the details of one or more remediation exceptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExceptions.html
   */
  public toDescribeRemediationExceptions() {
    return this.to('DescribeRemediationExceptions');
  }

  /**
   * Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps and any error messages for steps that have failed
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExecutionStatus.html
   */
  public toDescribeRemediationExecutionStatus() {
    return this.to('DescribeRemediationExecutionStatus');
  }

  /**
   * Returns the details of one or more retention configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRetentionConfigurations.html
   */
  public toDescribeRetentionConfigurations() {
    return this.to('DescribeRetentionConfigurations');
  }

  /**
   * Returns the evaluation results for the specified AWS Config rule for a specific resource in a rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateComplianceDetailsByConfigRule.html
   */
  public toGetAggregateComplianceDetailsByConfigRule() {
    return this.to('GetAggregateComplianceDetailsByConfigRule');
  }

  /**
   * Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateConfigRuleComplianceSummary.html
   */
  public toGetAggregateConfigRuleComplianceSummary() {
    return this.to('GetAggregateConfigRuleComplianceSummary');
  }

  /**
   * Returns the resource counts across accounts and regions that are present in your AWS Config aggregator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateDiscoveredResourceCounts.html
   */
  public toGetAggregateDiscoveredResourceCounts() {
    return this.to('GetAggregateDiscoveredResourceCounts');
  }

  /**
   * Returns configuration item that is aggregated for your specific resource in a specific source account and region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateResourceConfig.html
   */
  public toGetAggregateResourceConfig() {
    return this.to('GetAggregateResourceConfig');
  }

  /**
   * Returns the evaluation results for the specified AWS Config rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByConfigRule.html
   */
  public toGetComplianceDetailsByConfigRule() {
    return this.to('GetComplianceDetailsByConfigRule');
  }

  /**
   * Returns the evaluation results for the specified AWS resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html
   */
  public toGetComplianceDetailsByResource() {
    return this.to('GetComplianceDetailsByResource');
  }

  /**
   * Returns the number of AWS Config rules that are compliant and noncompliant, up to a maximum of 25 for each
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByConfigRule.html
   */
  public toGetComplianceSummaryByConfigRule() {
    return this.to('GetComplianceSummaryByConfigRule');
  }

  /**
   * Returns the number of resources that are compliant and the number that are noncompliant
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByResourceType.html
   */
  public toGetComplianceSummaryByResourceType() {
    return this.to('GetComplianceSummaryByResourceType');
  }

  /**
   * Returns compliance details of a conformance pack for all AWS resources that are monitered by conformance pack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceDetails.html
   */
  public toGetConformancePackComplianceDetails() {
    return this.to('GetConformancePackComplianceDetails');
  }

  /**
   * Provides compliance summary for one or more conformance packs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceSummary.html
   */
  public toGetConformancePackComplianceSummary() {
    return this.to('GetConformancePackComplianceSummary');
  }

  /**
   * Returns the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in this region for your AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetDiscoveredResourceCounts.html
   */
  public toGetDiscoveredResourceCounts() {
    return this.to('GetDiscoveredResourceCounts');
  }

  /**
   * Returns detailed status for each member account within an organization for a given organization config rule.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConfigRuleDetailedStatus.html
   */
  public toGetOrganizationConfigRuleDetailedStatus() {
    return this.to('GetOrganizationConfigRuleDetailedStatus');
  }

  /**
   * Returns detailed status for each member account within an organization for a given organization conformance pack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConformancePackDetailedStatus.html
   */
  public toGetOrganizationConformancePackDetailedStatus() {
    return this.to('GetOrganizationConformancePackDetailedStatus');
  }

  /**
   * Returns a list of configuration items for the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceConfigHistory.html
   */
  public toGetResourceConfigHistory() {
    return this.to('GetResourceConfigHistory');
  }

  /**
   * Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_ListAggregateDiscoveredResources.html
   */
  public toListAggregateDiscoveredResources() {
    return this.to('ListAggregateDiscoveredResources');
  }

  /**
   * Accepts a resource type and returns a list of resource identifiers for the resources of that type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_ListDiscoveredResources.html
   */
  public toListDiscoveredResources() {
    return this.to('ListDiscoveredResources');
  }

  /**
   * List the tags for AWS Config resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
    return this.to('PutAggregationAuthorization');
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
    return this.to('PutConfigRule');
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
    return this.to('PutConfigurationAggregator');
  }

  /**
   * Creates a new configuration recorder to record the selected resource configurations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html
   */
  public toPutConfigurationRecorder() {
    return this.to('PutConfigurationRecorder');
  }

  /**
   * Creates or updates a conformance pack.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html
   */
  public toPutConformancePack() {
    return this.to('PutConformancePack');
  }

  /**
   * Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutDeliveryChannel.html
   */
  public toPutDeliveryChannel() {
    return this.to('PutDeliveryChannel');
  }

  /**
   * Used by an AWS Lambda function to deliver evaluation results to AWS Config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutEvaluations.html
   */
  public toPutEvaluations() {
    return this.to('PutEvaluations');
  }

  /**
   * Adds or updates organization config rule for your entire organization evaluating whether your AWS resources comply with your desired configurations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html
   */
  public toPutOrganizationConfigRule() {
    return this.to('PutOrganizationConfigRule');
  }

  /**
   * Adds or updates organization conformance pack for your entire organization evaluating whether your AWS resources comply with your desired configurations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html
   */
  public toPutOrganizationConformancePack() {
    return this.to('PutOrganizationConformancePack');
  }

  /**
   * Adds or updates the remediation configuration with a specific AWS Config rule with the selected target or action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationConfigurations.html
   */
  public toPutRemediationConfigurations() {
    return this.to('PutRemediationConfigurations');
  }

  /**
   * Adds or updates remediation exceptions for specific resources for a specific AWS Config rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationExceptions.html
   */
  public toPutRemediationExceptions() {
    return this.to('PutRemediationExceptions');
  }

  /**
   * Records the configuration state for the resource provided in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutResourceConfig.html
   */
  public toPutResourceConfig() {
    return this.to('PutResourceConfig');
  }

  /**
   * Creates and updates the retention configuration with details about retention period (number of days) that AWS Config stores your historical information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutRetentionConfiguration.html
   */
  public toPutRetentionConfiguration() {
    return this.to('PutRetentionConfiguration');
  }

  /**
   * Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of AWS resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_SelectAggregateResourceConfig.html
   */
  public toSelectAggregateResourceConfig() {
    return this.to('SelectAggregateResourceConfig');
  }

  /**
   * Accepts a structured query language (SQL) SELECT command, performs the corresponding search, and returns resource configurations matching the properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_SelectResourceConfig.html
   */
  public toSelectResourceConfig() {
    return this.to('SelectResourceConfig');
  }

  /**
   * Evaluates your resources against the specified Config rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigRulesEvaluation.html
   */
  public toStartConfigRulesEvaluation() {
    return this.to('StartConfigRulesEvaluation');
  }

  /**
   * Starts recording configurations of the AWS resources you have selected to record in your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigurationRecorder.html
   */
  public toStartConfigurationRecorder() {
    return this.to('StartConfigurationRecorder');
  }

  /**
   * Runs an on-demand remediation for the specified AWS Config rules against the last known remediation configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_StartRemediationExecution.html
   */
  public toStartRemediationExecution() {
    return this.to('StartRemediationExecution');
  }

  /**
   * Stops recording configurations of the AWS resources you have selected to record in your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html
   */
  public toStopConfigurationRecorder() {
    return this.to('StopConfigurationRecorder');
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
    return this.to('TagResource');
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
    return this.to('UntagResource');
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
