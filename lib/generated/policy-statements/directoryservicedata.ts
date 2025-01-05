import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [ds-data](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservicedata.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class DsData extends PolicyStatement {
  public servicePrefix = 'ds-data';

  /**
   * Statement provider for service [ds-data](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservicedata.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a member to a group on a directory
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSAMAccountName()
   * - .ifMemberName()
   * - .ifRealm()
   * - .ifMemberRealm()
   * - .ifIdentifier()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_AddGroupMember.html
   */
  public toAddGroupMember() {
    return this.to('AddGroupMember');
  }

  /**
   * Grants permission to create a group on a directory
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSAMAccountName()
   * - .ifIdentifier()
   * - .ifRealm()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Grants permission to create a user on a directory
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSAMAccountName()
   * - .ifIdentifier()
   * - .ifRealm()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to delete a group on a directory
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSAMAccountName()
   * - .ifIdentifier()
   * - .ifRealm()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to delete a user on a directory
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSAMAccountName()
   * - .ifIdentifier()
   * - .ifRealm()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to describe a group on a directory
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSAMAccountName()
   * - .ifIdentifier()
   * - .ifRealm()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_DescribeGroup.html
   */
  public toDescribeGroup() {
    return this.to('DescribeGroup');
  }

  /**
   * Grants permission to describe a user on a directory
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifSAMAccountName()
   * - .ifIdentifier()
   * - .ifRealm()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_DescribeUser.html
   */
  public toDescribeUser() {
    return this.to('DescribeUser');
  }

  /**
   * Grants permission to disable a user on a directory
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSAMAccountName()
   * - .ifIdentifier()
   * - .ifRealm()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_DisableUser.html
   */
  public toDisableUser() {
    return this.to('DisableUser');
  }

  /**
   * Grants permission to list members in a group on a directory
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifSAMAccountName()
   * - .ifRealm()
   * - .ifMemberRealm()
   * - .ifIdentifier()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_ListGroupMembers.html
   */
  public toListGroupMembers() {
    return this.to('ListGroupMembers');
  }

  /**
   * Grants permission to list groups on a directory
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifRealm()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_ListGroups.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Grants permission to list the groups that a member is in on a directory
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifSAMAccountName()
   * - .ifRealm()
   * - .ifMemberRealm()
   * - .ifIdentifier()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_ListGroupsForMember.html
   */
  public toListGroupsForMember() {
    return this.to('ListGroupsForMember');
  }

  /**
   * Grants permission to list users on a directory
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifRealm()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to remove a member from a group on a directory
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSAMAccountName()
   * - .ifMemberName()
   * - .ifRealm()
   * - .ifMemberRealm()
   * - .ifIdentifier()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_RemoveGroupMember.html
   */
  public toRemoveGroupMember() {
    return this.to('RemoveGroupMember');
  }

  /**
   * Grants permission to search for groups on a directory
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifRealm()
   *
   * Dependent actions:
   * - ds-data:DescribeGroup
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_SearchGroups.html
   */
  public toSearchGroups() {
    return this.to('SearchGroups');
  }

  /**
   * Grants permission to search for users on a directory
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifRealm()
   *
   * Dependent actions:
   * - ds-data:DescribeUser
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_SearchUsers.html
   */
  public toSearchUsers() {
    return this.to('SearchUsers');
  }

  /**
   * Grants permission to update a group on a directory
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSAMAccountName()
   * - .ifIdentifier()
   * - .ifRealm()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    return this.to('UpdateGroup');
  }

  /**
   * Grants permission to update a user on a directory
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSAMAccountName()
   * - .ifIdentifier()
   * - .ifRealm()
   *
   * Dependent actions:
   * - ds:AccessDSData
   *
   * https://docs.aws.amazon.com/directoryservicedata/latest/DirectoryServiceDataAPIReference/API_UpdateUser.html
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddGroupMember',
      'CreateGroup',
      'CreateUser',
      'DeleteGroup',
      'DeleteUser',
      'DisableUser',
      'RemoveGroupMember',
      'UpdateGroup',
      'UpdateUser'
    ],
    Read: [
      'DescribeGroup',
      'DescribeUser',
      'SearchGroups',
      'SearchUsers'
    ],
    List: [
      'ListGroupMembers',
      'ListGroups',
      'ListGroupsForMember',
      'ListUsers'
    ]
  };

  /**
   * Adds a resource of type directory to the statement
   *
   * https://docs.aws.amazon.com/directoryservice/latest/admin-guide/IAM_Auth_Access_Overview.html
   *
   * @param directoryId - Identifier for the directoryId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDirectory(directoryId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ds:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:directory/${ directoryId }`);
  }

  /**
   * Filters access by the AWS DS Resource being acted upon
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - directory
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the type of identifier provided in the request (i.e. SAM Account Name)
   *
   * https://docs.aws.amazon.com/directoryservice/latest/admin-guide/iam_dsdata-condition-keys.html#dsdata_condition-Identifier
   *
   * Applies to actions:
   * - .toAddGroupMember()
   * - .toCreateGroup()
   * - .toCreateUser()
   * - .toDeleteGroup()
   * - .toDeleteUser()
   * - .toDescribeGroup()
   * - .toDescribeUser()
   * - .toDisableUser()
   * - .toListGroupMembers()
   * - .toListGroupsForMember()
   * - .toRemoveGroupMember()
   * - .toUpdateGroup()
   * - .toUpdateUser()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIdentifier(value: string | string[], operator?: Operator | string) {
    return this.if(`Identifier`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the directory SAM Account Name included in the MemberName input of the request
   *
   * https://docs.aws.amazon.com/directoryservice/latest/admin-guide/iam_dsdata-condition-keys.html#dsdata_condition-MemberName
   *
   * Applies to actions:
   * - .toAddGroupMember()
   * - .toRemoveGroupMember()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMemberName(value: string | string[], operator?: Operator | string) {
    return this.if(`MemberName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the directory realm name included in the MemberRealm input of the request
   *
   * https://docs.aws.amazon.com/directoryservice/latest/admin-guide/iam_dsdata-condition-keys.html#dsdata_condition-MemberRealm
   *
   * Applies to actions:
   * - .toAddGroupMember()
   * - .toListGroupMembers()
   * - .toListGroupsForMember()
   * - .toRemoveGroupMember()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMemberRealm(value: string | string[], operator?: Operator | string) {
    return this.if(`MemberRealm`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the directory realm name for the request
   *
   * https://docs.aws.amazon.com/directoryservice/latest/admin-guide/iam_dsdata-condition-keys.html#dsdata_condition-Realm
   *
   * Applies to actions:
   * - .toAddGroupMember()
   * - .toCreateGroup()
   * - .toCreateUser()
   * - .toDeleteGroup()
   * - .toDeleteUser()
   * - .toDescribeGroup()
   * - .toDescribeUser()
   * - .toDisableUser()
   * - .toListGroupMembers()
   * - .toListGroups()
   * - .toListGroupsForMember()
   * - .toListUsers()
   * - .toRemoveGroupMember()
   * - .toSearchGroups()
   * - .toSearchUsers()
   * - .toUpdateGroup()
   * - .toUpdateUser()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRealm(value: string | string[], operator?: Operator | string) {
    return this.if(`Realm`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the directory SAM Account Name included in the SAMAccountName input of the request
   *
   * https://docs.aws.amazon.com/directoryservice/latest/admin-guide/iam_dsdata-condition-keys.html#dsdata_condition-SAMAccountName
   *
   * Applies to actions:
   * - .toAddGroupMember()
   * - .toCreateGroup()
   * - .toCreateUser()
   * - .toDeleteGroup()
   * - .toDeleteUser()
   * - .toDescribeGroup()
   * - .toDescribeUser()
   * - .toDisableUser()
   * - .toListGroupMembers()
   * - .toListGroupsForMember()
   * - .toRemoveGroupMember()
   * - .toUpdateGroup()
   * - .toUpdateUser()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSAMAccountName(value: string | string[], operator?: Operator | string) {
    return this.if(`SAMAccountName`, value, operator ?? 'StringLike');
  }
}
