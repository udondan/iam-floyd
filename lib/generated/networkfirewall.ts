import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
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
    this.to('AssociateFirewallPolicy');
    return this;
  }

  /**
   * Grants permission to associate VPC subnets to a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_AssociateSubnets.html
   */
  public toAssociateSubnets() {
    this.to('AssociateSubnets');
    return this;
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
    this.to('CreateFirewall');
    return this;
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
    this.to('CreateFirewallPolicy');
    return this;
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
    this.to('CreateRuleGroup');
    return this;
  }

  /**
   * Grants permission to delete a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteFirewall.html
   */
  public toDeleteFirewall() {
    this.to('DeleteFirewall');
    return this;
  }

  /**
   * Grants permission to delete a firewall policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteFirewallPolicy.html
   */
  public toDeleteFirewallPolicy() {
    this.to('DeleteFirewallPolicy');
    return this;
  }

  /**
   * Grants permission to delete a resource policy for a firewall policy or rule group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    this.to('DeleteResourcePolicy');
    return this;
  }

  /**
   * Grants permission to delete a rule group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DeleteRuleGroup.html
   */
  public toDeleteRuleGroup() {
    this.to('DeleteRuleGroup');
    return this;
  }

  /**
   * Grants permission to retrieve the data objects that define a firewall
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeFirewall.html
   */
  public toDescribeFirewall() {
    this.to('DescribeFirewall');
    return this;
  }

  /**
   * Grants permission to retrieve the data objects that define a firewall policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeFirewallPolicy.html
   */
  public toDescribeFirewallPolicy() {
    this.to('DescribeFirewallPolicy');
    return this;
  }

  /**
   * Grants permission to describe the logging configuration of a firewall
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeLoggingConfiguration.html
   */
  public toDescribeLoggingConfiguration() {
    this.to('DescribeLoggingConfiguration');
    return this;
  }

  /**
   * Grants permission to describe a resource policy for a firewall policy or rule group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeResourcePolicy.html
   */
  public toDescribeResourcePolicy() {
    this.to('DescribeResourcePolicy');
    return this;
  }

  /**
   * Grants permission to retrieve the data objects that define a rule group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html
   */
  public toDescribeRuleGroup() {
    this.to('DescribeRuleGroup');
    return this;
  }

  /**
   * Grants permission to disassociate VPC subnets from a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/APIReference/API_DisassociateSubnets.html
   */
  public toDisassociateSubnets() {
    this.to('DisassociateSubnets');
    return this;
  }

  /**
   * Grants permission to retrieve the metadata for firewall policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListFirewallPolicies.html
   */
  public toListFirewallPolicies() {
    this.to('ListFirewallPolicies');
    return this;
  }

  /**
   * Grants permission to retrieve the metadata for firewalls
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListFirewalls.html
   */
  public toListFirewalls() {
    this.to('ListFirewalls');
    return this;
  }

  /**
   * Grants permission to retrieve the metadata for rule groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListRuleGroups.html
   */
  public toListRuleGroups() {
    this.to('ListRuleGroups');
    return this;
  }

  /**
   * Grants permission to retrieve the tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to put a resource policy for a firewall policy or rule group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    this.to('PutResourcePolicy');
    return this;
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
    this.to('TagResource');
    return this;
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
    this.to('UntagResource');
    return this;
  }

  /**
   * Grants permission to add or remove delete protection for a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallDeleteProtection.html
   */
  public toUpdateFirewallDeleteProtection() {
    this.to('UpdateFirewallDeleteProtection');
    return this;
  }

  /**
   * Grants permission to modify the description for a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallDescription.html
   */
  public toUpdateFirewallDescription() {
    this.to('UpdateFirewallDescription');
    return this;
  }

  /**
   * Grants permission to modify a firewall policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallPolicy.html
   */
  public toUpdateFirewallPolicy() {
    this.to('UpdateFirewallPolicy');
    return this;
  }

  /**
   * Grants permission to add or remove firewall policy change protection for a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateFirewallPolicyChangeProtection.html
   */
  public toUpdateFirewallPolicyChangeProtection() {
    this.to('UpdateFirewallPolicyChangeProtection');
    return this;
  }

  /**
   * Grants permission to modify the logging configuration of a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateLoggingConfiguration.html
   */
  public toUpdateLoggingConfiguration() {
    this.to('UpdateLoggingConfiguration');
    return this;
  }

  /**
   * Grants permission to modify a rule group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateRuleGroup.html
   */
  public toUpdateRuleGroup() {
    this.to('UpdateRuleGroup');
    return this;
  }

  /**
   * Grants permission to add or remove subnet change protection for a firewall
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_UpdateSubnetChangeProtection.html
   */
  public toUpdateSubnetChangeProtection() {
    this.to('UpdateSubnetChangeProtection');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateFirewallPolicy",
      "AssociateSubnets",
      "CreateFirewall",
      "CreateFirewallPolicy",
      "CreateRuleGroup",
      "DeleteFirewall",
      "DeleteFirewallPolicy",
      "DeleteResourcePolicy",
      "DeleteRuleGroup",
      "DisassociateSubnets",
      "PutResourcePolicy",
      "UpdateFirewallDeleteProtection",
      "UpdateFirewallDescription",
      "UpdateFirewallPolicy",
      "UpdateFirewallPolicyChangeProtection",
      "UpdateLoggingConfiguration",
      "UpdateRuleGroup",
      "UpdateSubnetChangeProtection"
    ],
    "Read": [
      "DescribeFirewall",
      "DescribeFirewallPolicy",
      "DescribeLoggingConfiguration",
      "DescribeResourcePolicy",
      "DescribeRuleGroup"
    ],
    "List": [
      "ListFirewallPolicies",
      "ListFirewalls",
      "ListRuleGroups",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFirewall(name: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:network-firewall:${Region}:${Account}:firewall/${Name}';
    arn = arn.replace('${Name}', name);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type FirewallPolicy to the statement
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_FirewallPolicyResponse.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFirewallPolicy(name: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:network-firewall:${Region}:${Account}:firewall-policy/${Name}';
    arn = arn.replace('${Name}', name);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type StatefulRuleGroup to the statement
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_RuleGroupResponse.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStatefulRuleGroup(name: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:network-firewall:${Region}:${Account}:stateful-rulegroup/${Name}';
    arn = arn.replace('${Name}', name);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type StatelessRuleGroup to the statement
   *
   * https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_RuleGroupResponse.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStatelessRuleGroup(name: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:network-firewall:${Region}:${Account}:stateless-rulegroup/${Name}';
    arn = arn.replace('${Name}', name);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
