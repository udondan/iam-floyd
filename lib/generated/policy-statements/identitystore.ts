import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [identitystore](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitystore.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Identitystore extends PolicyStatement {
  public servicePrefix = 'identitystore';

  /**
   * Statement provider for service [identitystore](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitystore.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a group in the specified IdentityStore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_CreateGroup.html
   */
  public toCreateGroup() {
    return this.to('CreateGroup');
  }

  /**
   * Grants permission to create a member to a group in the specified IdentityStore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_CreateGroupMembership.html
   */
  public toCreateGroupMembership() {
    return this.to('CreateGroupMembership');
  }

  /**
   * Grants permission to create a user in the specified IdentityStore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to delete a group in the specified IdentityStore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DeleteGroup.html
   */
  public toDeleteGroup() {
    return this.to('DeleteGroup');
  }

  /**
   * Grants permission to remove a member that is part of a group in the specified IdentityStore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DeleteGroupMembership.html
   */
  public toDeleteGroupMembership() {
    return this.to('DeleteGroupMembership');
  }

  /**
   * Grants permission to delete a user in the specified IdentityStore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to retrieve information about a group in the specified IdentityStore
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeGroup.html
   */
  public toDescribeGroup() {
    return this.to('DescribeGroup');
  }

  /**
   * Grants permission to retrieve information about a member that is part of a group in the specified IdentityStore
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeGroupMembership.html
   */
  public toDescribeGroupMembership() {
    return this.to('DescribeGroupMembership');
  }

  /**
   * Grants permission to retrieve information about user in the specified IdentityStore
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeUser.html
   */
  public toDescribeUser() {
    return this.to('DescribeUser');
  }

  /**
   * Grants permission to retrieve ID information about group in the specified IdentityStore
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_GetGroupId.html
   */
  public toGetGroupId() {
    return this.to('GetGroupId');
  }

  /**
   * Grants permission to retrieve ID information of a member which is part of a group in the specified IdentityStore
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_GetGroupMembershipId.html
   */
  public toGetGroupMembershipId() {
    return this.to('GetGroupMembershipId');
  }

  /**
   * Grants permission to retrieves ID information about user in the specified IdentityStore
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_GetUserId.html
   */
  public toGetUserId() {
    return this.to('GetUserId');
  }

  /**
   * Grants permission to check if a member is a part of groups in the specified IdentityStore
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_IsMemberInGroups.html
   */
  public toIsMemberInGroups() {
    return this.to('IsMemberInGroups');
  }

  /**
   * Grants permission to retrieve all members that are part of a group in the specified IdentityStore
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroupMemberships.html
   */
  public toListGroupMemberships() {
    return this.to('ListGroupMemberships');
  }

  /**
   * Grants permission to list groups of the target member in the specified IdentityStore
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroupMembershipsForMember.html
   */
  public toListGroupMembershipsForMember() {
    return this.to('ListGroupMembershipsForMember');
  }

  /**
   * Grants permission to search for groups within the specified IdentityStore
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroups.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Grants permission to search for users in the specified IdentityStore
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to update information about a group in the specified IdentityStore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_UpdateGroup.html
   */
  public toUpdateGroup() {
    return this.to('UpdateGroup');
  }

  /**
   * Grants permission to update user information in the specified IdentityStore
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_UpdateUser.html
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateGroup',
      'CreateGroupMembership',
      'CreateUser',
      'DeleteGroup',
      'DeleteGroupMembership',
      'DeleteUser',
      'UpdateGroup',
      'UpdateUser'
    ],
    Read: [
      'DescribeGroup',
      'DescribeGroupMembership',
      'DescribeUser',
      'GetGroupId',
      'GetGroupMembershipId',
      'GetUserId',
      'IsMemberInGroups'
    ],
    List: [
      'ListGroupMemberships',
      'ListGroupMembershipsForMember',
      'ListGroups',
      'ListUsers'
    ]
  };

  /**
   * Adds a resource of type Identitystore to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/
   *
   * @param identityStoreId - Identifier for the identityStoreId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onIdentitystore(identityStoreId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:identitystore::${ account ?? this.defaultAccount }:identitystore/${ identityStoreId }`);
  }

  /**
   * Adds a resource of type User to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/
   *
   * @param userId - Identifier for the userId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onUser(userId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:identitystore:::user/${ userId }`);
  }

  /**
   * Adds a resource of type Group to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/
   *
   * @param groupId - Identifier for the groupId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onGroup(groupId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:identitystore:::group/${ groupId }`);
  }

  /**
   * Adds a resource of type GroupMembership to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/
   *
   * @param membershipId - Identifier for the membershipId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onGroupMembership(membershipId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:identitystore:::membership/${ membershipId }`);
  }

  /**
   * Adds a resource of type AllUsers to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/
   *
   * @param resourceName - Identifier for the resourceName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAllUsers(resourceName: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:identitystore:::user/${ resourceName }`);
  }

  /**
   * Adds a resource of type AllGroups to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/
   *
   * @param resourceName - Identifier for the resourceName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAllGroups(resourceName: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:identitystore:::group/${ resourceName }`);
  }

  /**
   * Adds a resource of type AllGroupMemberships to the statement
   *
   * https://docs.aws.amazon.com/singlesignon/latest/
   *
   * @param resourceName - Identifier for the resourceName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAllGroupMemberships(resourceName: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:identitystore:::membership/${ resourceName }`);
  }

  /**
   * Filters access by IAM Identity Center User ID
   *
   * https://docs.aws.amazon.com/singlesignon/latest/
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserId(value: string | string[], operator?: Operator | string) {
    return this.if(`UserId`, value, operator ?? 'StringLike');
  }
}
