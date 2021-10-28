import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
   * Grants permission to create a resource group with a specified name, description, and resource query
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * https://docs.aws.amazon.com/ARG/latest/APIReference/LM_REDIRECT
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
   * https://docs.aws.amazon.com/ARG/latest/APIReference/API_UpdateGroupQuery.html
   */
  public toUpdateGroupQuery() {
    return this.to('UpdateGroupQuery');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateGroup',
      'DeleteGroup',
      'GroupResources',
      'PutGroupConfiguration',
      'PutGroupPolicy',
      'UngroupResources',
      'UpdateGroup',
      'UpdateGroupQuery'
    ],
    Read: [
      'GetGroup',
      'GetGroupConfiguration',
      'GetGroupQuery',
      'GetTags'
    ],
    List: [
      'ListGroupResources',
      'ListGroups',
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
   * https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html
   *
   * @param groupName - Identifier for the groupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGroup(groupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:resource-groups:${ region || '*' }:${ account || '*' }:group/${ groupName }`);
  }
}
