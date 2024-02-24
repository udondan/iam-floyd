import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [resource-groups](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourcegroups.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ResourceGroups extends PolicyStatement {
  public servicePrefix = 'resource-groups';

  /**
   * Statement provider for service [resource-groups](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourcegroups.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a resource to an Application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/arguide/associate-resources.html
   */
  public toAssociateResource() {
    return this.to('AssociateResource');
  }

  /**
   * Grants permission to create a resource group with a specified name, description, and resource query
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - cloudformation:DescribeStacks
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Grants permission to delete a specified resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to delete a resource-based policy for the specified group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/management-role.html#service-linked-role-permissions-management-role
   */
  public toDeleteGroupPolicy() {
    return this.to('DeleteGroupPolicy');
  }

  /**
   * Grants permission to disassociate a resource from an Application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicecatalog/latest/arguide/associate-resources.html
   */
  public toDisassociateResource() {
    return this.to('DisassociateResource');
  }

  /**
   * Grants permission to get the current status of optional features in Resource Groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetAccountSettings.html
   */
  public toGetAccountSettings() {
    return this.to('GetAccountSettings');
  }

  /**
   * Grants permission to get information of a specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroup.html
   */
  public toGetGroup() {
    return this.to('GetGroup');
  }

  /**
   * Grants permission to get the service configuration associated with the specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroupConfiguration.html
   */
  public toGetGroupConfiguration() {
    return this.to('GetGroupConfiguration');
  }

  /**
   * Grants permission to get a resource-based policy for the specified group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/management-role.html#service-linked-role-permissions-management-role
   */
  public toGetGroupPolicy() {
    return this.to('GetGroupPolicy');
  }

  /**
   * Grants permission to get the query associated with a specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetGroupQuery.html
   */
  public toGetGroupQuery() {
    return this.to('GetGroupQuery');
  }

  /**
   * Grants permission to get the tags associated with a specified resource group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GetTags.html
   */
  public toGetTags() {
    return this.to('GetTags');
  }

  /**
   * Grants permission to add the specified resources to the specified group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_GroupResources.html
   */
  public toGroupResources() {
    return this.to('GroupResources');
  }

  /**
   * Grants permission to list the resources that are members of a specified resource group
   *
   * Access Level: List
   *
   * Dependent actions:
   * - cloudformation:DescribeStacks
   * - cloudformation:ListStackResources
   * - tag:GetResources
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroupResources.html
   */
  public toListGroupResources() {
    return this.to('ListGroupResources');
  }

  /**
   * Grants permission to list all resource groups in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_ListGroups.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Grants permission to list supported resource types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html
   */
  public toListResourceTypes() {
    return this.to('ListResourceTypes');
  }

  /**
   * Grants permission to put the service configuration associated with the specified resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_PutGroupConfiguration.html
   */
  public toPutGroupConfiguration() {
    return this.to('PutGroupConfiguration');
  }

  /**
   * Grants permission to add a resource-based policy for the specified group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/management-role.html#service-linked-role-permissions-management-role
   */
  public toPutGroupPolicy() {
    return this.to('PutGroupPolicy');
  }

  /**
   * Grants permission to search for AWS resources matching the given query
   *
   * Access Level: List
   *
   * Dependent actions:
   * - cloudformation:DescribeStacks
   * - cloudformation:ListStackResources
   * - tag:GetResources
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_SearchResources.html
   */
  public toSearchResources() {
    return this.to('SearchResources');
  }

  /**
   * Grants permission to tag a specified resource group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_Tag.html
   */
  public toTag() {
    return this.to('Tag');
  }

  /**
   * Grants permission to remove the specified resources from the specified group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_UngroupResources.html
   */
  public toUngroupResources() {
    return this.to('UngroupResources');
  }

  /**
   * Grants permission to remove tags associated with a specified resource group
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_Untag.html
   */
  public toUntag() {
    return this.to('Untag');
  }

  /**
   * Grants permission to update optional features in Resource Groups
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateAccountSettings.html
   */
  public toUpdateAccountSettings() {
    return this.to('UpdateAccountSettings');
  }

  /**
   * Grants permission to update a specified resource group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    return this.to('UpdateGroup');
  }

  /**
   * Grants permission to update the query associated with a specified resource group
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cloudformation:DescribeStacks
   *
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroupQuery.html
   */
  public toUpdateGroupQuery() {
    return this.to('UpdateGroupQuery');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateResource',
      'CreateGroup',
      'DeleteGroup',
      'DeleteGroupPolicy',
      'DisassociateResource',
      'GroupResources',
      'PutGroupConfiguration',
      'PutGroupPolicy',
      'UngroupResources',
      'UpdateAccountSettings',
      'UpdateGroup',
      'UpdateGroupQuery'
    ],
    Read: [
      'GetAccountSettings',
      'GetGroup',
      'GetGroupConfiguration',
      'GetGroupPolicy',
      'GetGroupQuery',
      'GetTags'
    ],
    List: [
      'ListGroupResources',
      'ListGroups',
      'ListResourceTypes',
      'SearchResources'
    ],
    Tagging: [
      'Tag',
      'Untag'
    ]
  };

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/ARG/latest/userguide/resource-groups.html
   *
   * @param groupName - Identifier for the groupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGroup(groupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:resource-groups:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:group/${ groupName }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateGroup()
   * - .toTag()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - group
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateGroup()
   * - .toTag()
   * - .toUntag()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
