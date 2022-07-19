import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateFirewallPolicy',
      'AssociateSubnets',
      'CreateFirewall',
      'CreateFirewallPolicy',
      'CreateRuleGroup',
      'DeleteFirewall',
      'DeleteFirewallPolicy',
      'DeleteResourcePolicy',
      'DeleteRuleGroup',
      'DisassociateSubnets',
      'PutResourcePolicy',
      'UpdateFirewallDeleteProtection',
      'UpdateFirewallDescription',
      'UpdateFirewallEncryptionConfiguration',
      'UpdateFirewallPolicy',
      'UpdateFirewallPolicyChangeProtection',
      'UpdateLoggingConfiguration',
      'UpdateRuleGroup',
      'UpdateSubnetChangeProtection'
    ],
    Read: [
      'DescribeFirewall',
      'DescribeFirewallPolicy',
      'DescribeLoggingConfiguration',
      'DescribeResourcePolicy',
      'DescribeRuleGroup',
      'DescribeRuleGroupMetadata'
    ],
    List: [
      'ListFirewallPolicies',
      'ListFirewalls',
      'ListRuleGroups',
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFirewall(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || NetworkFirewall.defaultPartition }:network-firewall:${ region || '*' }:${ account || '*' }:firewall/${ name }`);
  }

  /**
   * Adds a resource of type FirewallPolicy to the statement
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_FirewallPolicyResponse.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFirewallPolicy(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || NetworkFirewall.defaultPartition }:network-firewall:${ region || '*' }:${ account || '*' }:firewall-policy/${ name }`);
  }

  /**
   * Adds a resource of type StatefulRuleGroup to the statement
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_RuleGroupResponse.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStatefulRuleGroup(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || NetworkFirewall.defaultPartition }:network-firewall:${ region || '*' }:${ account || '*' }:stateful-rulegroup/${ name }`);
  }

  /**
   * Adds a resource of type StatelessRuleGroup to the statement
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_RuleGroupResponse.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStatelessRuleGroup(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || NetworkFirewall.defaultPartition }:network-firewall:${ region || '*' }:${ account || '*' }:stateless-rulegroup/${ name }`);
  }
}
