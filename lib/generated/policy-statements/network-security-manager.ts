import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [network-security-manager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_network-security-manager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class NetworkSecurityManager extends PolicyStatement {
  public servicePrefix = 'network-security-manager';

  /**
   * Statement provider for service [network-security-manager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_network-security-manager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateDeployment.html
   */
  public toCreateDeployment() {
    return this.to('CreateDeployment');
  }

  /**
   * Grants permission to create a snapshot of a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateDeploymentSnapshot.html
   */
  public toCreateDeploymentSnapshot() {
    return this.to('CreateDeploymentSnapshot');
  }

  /**
   * Grants permission to create a policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreatePolicy.html
   */
  public toCreatePolicy() {
    return this.to('CreatePolicy');
  }

  /**
   * Grants permission to create a snapshot of a policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreatePolicySnapshot.html
   */
  public toCreatePolicySnapshot() {
    return this.to('CreatePolicySnapshot');
  }

  /**
   * Grants permission to create a rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateRule.html
   */
  public toCreateRule() {
    return this.to('CreateRule');
  }

  /**
   * Grants permission to create a snapshot of a rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateRuleSnapshot.html
   */
  public toCreateRuleSnapshot() {
    return this.to('CreateRuleSnapshot');
  }

  /**
   * Grants permission to create a scope
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateScope.html
   */
  public toCreateScope() {
    return this.to('CreateScope');
  }

  /**
   * Grants permission to create a snapshot of a scope
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateScopeSnapshot.html
   */
  public toCreateScopeSnapshot() {
    return this.to('CreateScopeSnapshot');
  }

  /**
   * Grants permission to create a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateTemplate.html
   */
  public toCreateTemplate() {
    return this.to('CreateTemplate');
  }

  /**
   * Grants permission to create a snapshot of a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateTemplateSnapshot.html
   */
  public toCreateTemplateSnapshot() {
    return this.to('CreateTemplateSnapshot');
  }

  /**
   * Grants permission to remove a Network Security Manager administrator account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_DeleteAdminAccount.html
   */
  public toDeleteAdminAccount() {
    return this.to('DeleteAdminAccount');
  }

  /**
   * Grants permission to delete a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_DeleteDeployment.html
   */
  public toDeleteDeployment() {
    return this.to('DeleteDeployment');
  }

  /**
   * Grants permission to delete a policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    return this.to('DeletePolicy');
  }

  /**
   * Grants permission to delete a rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_DeleteRule.html
   */
  public toDeleteRule() {
    return this.to('DeleteRule');
  }

  /**
   * Grants permission to delete a scope
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_DeleteScope.html
   */
  public toDeleteScope() {
    return this.to('DeleteScope');
  }

  /**
   * Grants permission to delete a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_DeleteTemplate.html
   */
  public toDeleteTemplate() {
    return this.to('DeleteTemplate');
  }

  /**
   * Grants permission to generate a rule configuration from a natural-language prompt
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_GenerateRuleConfiguration.html
   */
  public toGenerateRuleConfiguration() {
    return this.to('GenerateRuleConfiguration');
  }

  /**
   * Grants permission to retrieve a Network Security Manager administrator account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_GetAdminAccount.html
   */
  public toGetAdminAccount() {
    return this.to('GetAdminAccount');
  }

  /**
   * Grants permission to retrieve a deployment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_GetDeployment.html
   */
  public toGetDeployment() {
    return this.to('GetDeployment');
  }

  /**
   * Grants permission to retrieve a policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_GetPolicy.html
   */
  public toGetPolicy() {
    return this.to('GetPolicy');
  }

  /**
   * Grants permission to retrieve a rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_GetRule.html
   */
  public toGetRule() {
    return this.to('GetRule');
  }

  /**
   * Grants permission to retrieve a scope
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_GetScope.html
   */
  public toGetScope() {
    return this.to('GetScope');
  }

  /**
   * Grants permission to retrieve a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_GetTemplate.html
   */
  public toGetTemplate() {
    return this.to('GetTemplate');
  }

  /**
   * Grants permission to list Network Security Manager administrator accounts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListAdminAccounts.html
   */
  public toListAdminAccounts() {
    return this.to('ListAdminAccounts');
  }

  /**
   * Grants permission to list aggregate resource synchronization statuses across the caller's deployments
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListAggregateResourceSynchronizationStatuses.html
   */
  public toListAggregateResourceSynchronizationStatuses() {
    return this.to('ListAggregateResourceSynchronizationStatuses');
  }

  /**
   * Grants permission to list the snapshots of a deployment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListDeploymentSnapshots.html
   */
  public toListDeploymentSnapshots() {
    return this.to('ListDeploymentSnapshots');
  }

  /**
   * Grants permission to list deployments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListDeployments.html
   */
  public toListDeployments() {
    return this.to('ListDeployments');
  }

  /**
   * Grants permission to list policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListPolicies.html
   */
  public toListPolicies() {
    return this.to('ListPolicies');
  }

  /**
   * Grants permission to list the snapshots of a policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListPolicySnapshots.html
   */
  public toListPolicySnapshots() {
    return this.to('ListPolicySnapshots');
  }

  /**
   * Grants permission to list the associations of a Network Security Manager resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListResourceAssociations.html
   */
  public toListResourceAssociations() {
    return this.to('ListResourceAssociations');
  }

  /**
   * Grants permission to list resource synchronization statuses for a deployment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListResourceSynchronizationStatuses.html
   */
  public toListResourceSynchronizationStatuses() {
    return this.to('ListResourceSynchronizationStatuses');
  }

  /**
   * Grants permission to list the snapshots of a rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListRuleSnapshots.html
   */
  public toListRuleSnapshots() {
    return this.to('ListRuleSnapshots');
  }

  /**
   * Grants permission to list rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListRules.html
   */
  public toListRules() {
    return this.to('ListRules');
  }

  /**
   * Grants permission to list the snapshots of a scope
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListScopeSnapshots.html
   */
  public toListScopeSnapshots() {
    return this.to('ListScopeSnapshots');
  }

  /**
   * Grants permission to list scopes
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListScopes.html
   */
  public toListScopes() {
    return this.to('ListScopes');
  }

  /**
   * Grants permission to list the tags of a Network Security Manager resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the snapshots of a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListTemplateSnapshots.html
   */
  public toListTemplateSnapshots() {
    return this.to('ListTemplateSnapshots');
  }

  /**
   * Grants permission to list templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_ListTemplates.html
   */
  public toListTemplates() {
    return this.to('ListTemplates');
  }

  /**
   * Grants permission to set a Network Security Manager administrator account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_PutAdminAccount.html
   */
  public toPutAdminAccount() {
    return this.to('PutAdminAccount');
  }

  /**
   * Grants permission to add or overwrite tags on a Network Security Manager resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a Network Security Manager resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_UpdateDeployment.html
   */
  public toUpdateDeployment() {
    return this.to('UpdateDeployment');
  }

  /**
   * Grants permission to update a policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_UpdatePolicy.html
   */
  public toUpdatePolicy() {
    return this.to('UpdatePolicy');
  }

  /**
   * Grants permission to update a rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_UpdateRule.html
   */
  public toUpdateRule() {
    return this.to('UpdateRule');
  }

  /**
   * Grants permission to update a scope
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_UpdateScope.html
   */
  public toUpdateScope() {
    return this.to('UpdateScope');
  }

  /**
   * Grants permission to update a template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_UpdateTemplate.html
   */
  public toUpdateTemplate() {
    return this.to('UpdateTemplate');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateDeployment',
      'CreateDeploymentSnapshot',
      'CreatePolicy',
      'CreatePolicySnapshot',
      'CreateRule',
      'CreateRuleSnapshot',
      'CreateScope',
      'CreateScopeSnapshot',
      'CreateTemplate',
      'CreateTemplateSnapshot',
      'DeleteAdminAccount',
      'DeleteDeployment',
      'DeletePolicy',
      'DeleteRule',
      'DeleteScope',
      'DeleteTemplate',
      'GenerateRuleConfiguration',
      'PutAdminAccount',
      'TagResource',
      'UntagResource',
      'UpdateDeployment',
      'UpdatePolicy',
      'UpdateRule',
      'UpdateScope',
      'UpdateTemplate'
    ],
    Read: [
      'GetAdminAccount',
      'GetDeployment',
      'GetPolicy',
      'GetRule',
      'GetScope',
      'GetTemplate',
      'ListAggregateResourceSynchronizationStatuses',
      'ListDeploymentSnapshots',
      'ListPolicySnapshots',
      'ListResourceAssociations',
      'ListResourceSynchronizationStatuses',
      'ListRuleSnapshots',
      'ListScopeSnapshots',
      'ListTagsForResource',
      'ListTemplateSnapshots'
    ],
    List: [
      'ListAdminAccounts',
      'ListDeployments',
      'ListPolicies',
      'ListRules',
      'ListScopes',
      'ListTemplates'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type deployment to the statement
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateDeployment.html
   *
   * @param deploymentId - Identifier for the deploymentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeployment(deploymentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-security-manager:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:deployment:${ deploymentId }`);
  }

  /**
   * Adds a resource of type deployment-snapshot to the statement
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateDeployment.html
   *
   * @param deploymentId - Identifier for the deploymentId.
   * @param versionNumber - Identifier for the versionNumber.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeploymentSnapshot(deploymentId: string, versionNumber: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-security-manager:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:deployment:${ deploymentId }:${ versionNumber }`);
  }

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreatePolicy.html
   *
   * @param policyId - Identifier for the policyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicy(policyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-security-manager:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:policy:${ policyId }`);
  }

  /**
   * Adds a resource of type policy-snapshot to the statement
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreatePolicySnapshot.html
   *
   * @param policyId - Identifier for the policyId.
   * @param versionNumber - Identifier for the versionNumber.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicySnapshot(policyId: string, versionNumber: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-security-manager:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:policy:${ policyId }:${ versionNumber }`);
  }

  /**
   * Adds a resource of type rule to the statement
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateRule.html
   *
   * @param ruleId - Identifier for the ruleId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRule(ruleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-security-manager:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:rule:${ ruleId }`);
  }

  /**
   * Adds a resource of type rule-snapshot to the statement
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateRuleSnapshot.html
   *
   * @param ruleId - Identifier for the ruleId.
   * @param versionNumber - Identifier for the versionNumber.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRuleSnapshot(ruleId: string, versionNumber: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-security-manager:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:rule:${ ruleId }:${ versionNumber }`);
  }

  /**
   * Adds a resource of type scope to the statement
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateScope.html
   *
   * @param scopeId - Identifier for the scopeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onScope(scopeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-security-manager:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:scope:${ scopeId }`);
  }

  /**
   * Adds a resource of type scope-snapshot to the statement
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateScopeSnapshot.html
   *
   * @param scopeId - Identifier for the scopeId.
   * @param versionNumber - Identifier for the versionNumber.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onScopeSnapshot(scopeId: string, versionNumber: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-security-manager:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:scope:${ scopeId }:${ versionNumber }`);
  }

  /**
   * Adds a resource of type template to the statement
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateTemplate.html
   *
   * @param templateId - Identifier for the templateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTemplate(templateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-security-manager:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:template:${ templateId }`);
  }

  /**
   * Adds a resource of type template-snapshot to the statement
   *
   * https://docs.aws.amazon.com/network-security-manager/latest/APIReference/API_CreateTemplateSnapshot.html
   *
   * @param templateId - Identifier for the templateId.
   * @param versionNumber - Identifier for the versionNumber.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTemplateSnapshot(templateId: string, versionNumber: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:network-security-manager:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:template:${ templateId }:${ versionNumber }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateDeployment()
   * - .toCreateDeploymentSnapshot()
   * - .toCreatePolicy()
   * - .toCreatePolicySnapshot()
   * - .toCreateRule()
   * - .toCreateRuleSnapshot()
   * - .toCreateScope()
   * - .toCreateScopeSnapshot()
   * - .toCreateTemplate()
   * - .toCreateTemplateSnapshot()
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
   * - .toCreateDeployment()
   * - .toCreateDeploymentSnapshot()
   * - .toCreatePolicy()
   * - .toCreatePolicySnapshot()
   * - .toCreateRuleSnapshot()
   * - .toCreateScopeSnapshot()
   * - .toCreateTemplate()
   * - .toCreateTemplateSnapshot()
   * - .toDeleteDeployment()
   * - .toDeletePolicy()
   * - .toDeleteRule()
   * - .toDeleteScope()
   * - .toDeleteTemplate()
   * - .toGetDeployment()
   * - .toGetPolicy()
   * - .toGetRule()
   * - .toGetScope()
   * - .toGetTemplate()
   * - .toListDeploymentSnapshots()
   * - .toListPolicySnapshots()
   * - .toListResourceAssociations()
   * - .toListResourceSynchronizationStatuses()
   * - .toListRuleSnapshots()
   * - .toListScopeSnapshots()
   * - .toListTagsForResource()
   * - .toListTemplateSnapshots()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateDeployment()
   * - .toUpdatePolicy()
   * - .toUpdateRule()
   * - .toUpdateScope()
   * - .toUpdateTemplate()
   *
   * Applies to resource types:
   * - deployment
   * - deployment-snapshot
   * - policy
   * - policy-snapshot
   * - rule
   * - rule-snapshot
   * - scope
   * - scope-snapshot
   * - template
   * - template-snapshot
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
   * - .toCreateDeployment()
   * - .toCreateDeploymentSnapshot()
   * - .toCreatePolicy()
   * - .toCreatePolicySnapshot()
   * - .toCreateRule()
   * - .toCreateRuleSnapshot()
   * - .toCreateScope()
   * - .toCreateScopeSnapshot()
   * - .toCreateTemplate()
   * - .toCreateTemplateSnapshot()
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
