import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [network-firewall](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsnetworkfirewall.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class NetworkFirewall extends PolicyStatement {
  public servicePrefix = 'network-firewall';

  /**
   * Statement provider for service [network-firewall](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsnetworkfirewall.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an association between a firewall policy and a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_AssociateFirewallPolicy.html
   */
  public toAssociateFirewallPolicy() {
    return this.to('AssociateFirewallPolicy');
  }

  /**
   * Grants permission to associate VPC subnets to a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_AssociateSubnets.html
   */
  public toAssociateSubnets() {
    return this.to('AssociateSubnets');
  }

  /**
   * Grants permission to create an AWS Network Firewall firewall
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
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_CreateFirewall.html
   */
  public toCreateFirewall() {
    return this.to('CreateFirewall');
  }

  /**
   * Grants permission to create an AWS Network Firewall firewall policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_CreateFirewallPolicy.html
   */
  public toCreateFirewallPolicy() {
    return this.to('CreateFirewallPolicy');
  }

  /**
   * Grants permission to create an AWS Network Firewall rule group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_CreateRuleGroup.html
   */
  public toCreateRuleGroup() {
    return this.to('CreateRuleGroup');
  }

  /**
   * Grants permission to create an AWS Network Firewall tls inspection configuration
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
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_CreateTLSInspectionConfiguration.html
   */
  public toCreateTLSInspectionConfiguration() {
    return this.to('CreateTLSInspectionConfiguration');
  }

  /**
   * Grants permission to delete a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteFirewall.html
   */
  public toDeleteFirewall() {
    return this.to('DeleteFirewall');
  }

  /**
   * Grants permission to delete a firewall policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteFirewallPolicy.html
   */
  public toDeleteFirewallPolicy() {
    return this.to('DeleteFirewallPolicy');
  }

  /**
   * Grants permission to delete a resource policy for a firewall policy or rule group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a rule group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteRuleGroup.html
   */
  public toDeleteRuleGroup() {
    return this.to('DeleteRuleGroup');
  }

  /**
   * Grants permission to delete a tls inspection configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteTLSInspectionConfiguration.html
   */
  public toDeleteTLSInspectionConfiguration() {
    return this.to('DeleteTLSInspectionConfiguration');
  }

  /**
   * Grants permission to retrieve the data objects that define a firewall
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeFirewall.html
   */
  public toDescribeFirewall() {
    return this.to('DescribeFirewall');
  }

  /**
   * Grants permission to retrieve the data objects that define a firewall policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeFirewallPolicy.html
   */
  public toDescribeFirewallPolicy() {
    return this.to('DescribeFirewallPolicy');
  }

  /**
   * Grants permission to describe the logging configuration of a firewall
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - logs:GetLogDelivery
   * - logs:ListLogDeliveries
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeLoggingConfiguration.html
   */
  public toDescribeLoggingConfiguration() {
    return this.to('DescribeLoggingConfiguration');
  }

  /**
   * Grants permission to describe a resource policy for a firewall policy or rule group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeResourcePolicy.html
   */
  public toDescribeResourcePolicy() {
    return this.to('DescribeResourcePolicy');
  }

  /**
   * Grants permission to retrieve the data objects that define a rule group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html
   */
  public toDescribeRuleGroup() {
    return this.to('DescribeRuleGroup');
  }

  /**
   * Grants permission to retrieve the high-level information about a rule group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroupMetadata.html
   */
  public toDescribeRuleGroupMetadata() {
    return this.to('DescribeRuleGroupMetadata');
  }

  /**
   * Grants permission to retrieve the data objects that define a tls inspection configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeTLSInspectionConfiguration.html
   */
  public toDescribeTLSInspectionConfiguration() {
    return this.to('DescribeTLSInspectionConfiguration');
  }

  /**
   * Grants permission to disassociate VPC subnets from a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DisassociateSubnets.html
   */
  public toDisassociateSubnets() {
    return this.to('DisassociateSubnets');
  }

  /**
   * Grants permission to retrieve analysis report results of a firewall
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_GetAnalysisReportResults.html
   */
  public toGetAnalysisReportResults() {
    return this.to('GetAnalysisReportResults');
  }

  /**
   * Grants permission to list firewall analysis reports
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListAnalysisReports.html
   */
  public toListAnalysisReports() {
    return this.to('ListAnalysisReports');
  }

  /**
   * Grants permission to retrieve the metadata for firewall policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListFirewallPolicies.html
   */
  public toListFirewallPolicies() {
    return this.to('ListFirewallPolicies');
  }

  /**
   * Grants permission to retrieve the metadata for firewalls
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListFirewalls.html
   */
  public toListFirewalls() {
    return this.to('ListFirewalls');
  }

  /**
   * Grants permission to retrieve the metadata for rule groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListRuleGroups.html
   */
  public toListRuleGroups() {
    return this.to('ListRuleGroups');
  }

  /**
   * Grants permission to retrieve the metadata for tls inspection configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListTLSInspectionConfigurations.html
   */
  public toListTLSInspectionConfigurations() {
    return this.to('ListTLSInspectionConfigurations');
  }

  /**
   * Grants permission to retrieve the tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to put a resource policy for a firewall policy or rule group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to start an analysis report on a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_GetAnalysisReportResults.html
   */
  public toStartAnalysisReport() {
    return this.to('StartAnalysisReport');
  }

  /**
   * Grants permission to attach tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_TagResource.html
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
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify firewall analysis settings of a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallAnalysisSettings.html
   */
  public toUpdateFirewallAnalysisSettings() {
    return this.to('UpdateFirewallAnalysisSettings');
  }

  /**
   * Grants permission to add or remove delete protection for a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallDeleteProtection.html
   */
  public toUpdateFirewallDeleteProtection() {
    return this.to('UpdateFirewallDeleteProtection');
  }

  /**
   * Grants permission to modify the description for a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallDescription.html
   */
  public toUpdateFirewallDescription() {
    return this.to('UpdateFirewallDescription');
  }

  /**
   * Grants permission to modify the encryption configuration of a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallEncryptionConfiguration.html
   */
  public toUpdateFirewallEncryptionConfiguration() {
    return this.to('UpdateFirewallEncryptionConfiguration');
  }

  /**
   * Grants permission to modify a firewall policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallPolicy.html
   */
  public toUpdateFirewallPolicy() {
    return this.to('UpdateFirewallPolicy');
  }

  /**
   * Grants permission to add or remove firewall policy change protection for a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallPolicyChangeProtection.html
   */
  public toUpdateFirewallPolicyChangeProtection() {
    return this.to('UpdateFirewallPolicyChangeProtection');
  }

  /**
   * Grants permission to modify the logging configuration of a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateLoggingConfiguration.html
   */
  public toUpdateLoggingConfiguration() {
    return this.to('UpdateLoggingConfiguration');
  }

  /**
   * Grants permission to modify a rule group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateRuleGroup.html
   */
  public toUpdateRuleGroup() {
    return this.to('UpdateRuleGroup');
  }

  /**
   * Grants permission to add or remove subnet change protection for a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateSubnetChangeProtection.html
   */
  public toUpdateSubnetChangeProtection() {
    return this.to('UpdateSubnetChangeProtection');
  }

  /**
   * Grants permission to modify a tls inspection configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateTLSInspectionConfiguration.html
   */
  public toUpdateTLSInspectionConfiguration() {
    return this.to('UpdateTLSInspectionConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateFirewallPolicy',
      'AssociateSubnets',
      'CreateFirewall',
      'CreateFirewallPolicy',
      'CreateRuleGroup',
      'CreateTLSInspectionConfiguration',
      'DeleteFirewall',
      'DeleteFirewallPolicy',
      'DeleteResourcePolicy',
      'DeleteRuleGroup',
      'DeleteTLSInspectionConfiguration',
      'DisassociateSubnets',
      'PutResourcePolicy',
      'StartAnalysisReport',
      'UpdateFirewallAnalysisSettings',
      'UpdateFirewallDeleteProtection',
      'UpdateFirewallDescription',
      'UpdateFirewallEncryptionConfiguration',
      'UpdateFirewallPolicy',
      'UpdateFirewallPolicyChangeProtection',
      'UpdateLoggingConfiguration',
      'UpdateRuleGroup',
      'UpdateSubnetChangeProtection',
      'UpdateTLSInspectionConfiguration'
    ],
    Read: [
      'DescribeFirewall',
      'DescribeFirewallPolicy',
      'DescribeLoggingConfiguration',
      'DescribeResourcePolicy',
      'DescribeRuleGroup',
      'DescribeRuleGroupMetadata',
      'DescribeTLSInspectionConfiguration',
      'GetAnalysisReportResults'
    ],
    List: [
      'ListAnalysisReports',
      'ListFirewallPolicies',
      'ListFirewalls',
      'ListRuleGroups',
      'ListTLSInspectionConfigurations',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Firewall to the statement
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_Firewall.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFirewall(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-firewall:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:firewall/${ name }`);
  }

  /**
   * Adds a resource of type FirewallPolicy to the statement
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_FirewallPolicyResponse.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFirewallPolicy(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-firewall:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:firewall-policy/${ name }`);
  }

  /**
   * Adds a resource of type StatefulRuleGroup to the statement
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_RuleGroupResponse.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStatefulRuleGroup(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-firewall:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:stateful-rulegroup/${ name }`);
  }

  /**
   * Adds a resource of type StatelessRuleGroup to the statement
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_RuleGroupResponse.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStatelessRuleGroup(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-firewall:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:stateless-rulegroup/${ name }`);
  }

  /**
   * Adds a resource of type TLSInspectionConfiguration to the statement
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_TLSInspectionConfigurationResponse.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTLSInspectionConfiguration(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-firewall:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:tls-configuration/${ name }`);
  }

  /**
   * Filters access by on the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateFirewall()
   * - .toCreateFirewallPolicy()
   * - .toCreateRuleGroup()
   * - .toCreateTLSInspectionConfiguration()
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
   * Filters access by the tag value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Firewall
   * - FirewallPolicy
   * - StatefulRuleGroup
   * - StatelessRuleGroup
   * - TLSInspectionConfiguration
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
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateFirewall()
   * - .toCreateFirewallPolicy()
   * - .toCreateRuleGroup()
   * - .toCreateTLSInspectionConfiguration()
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
