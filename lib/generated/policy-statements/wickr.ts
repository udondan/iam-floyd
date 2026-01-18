import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [wickr](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswickr.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Wickr extends PolicyStatement {
  public servicePrefix = 'wickr';

  /**
   * Statement provider for service [wickr](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswickr.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to batch create users in a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toBatchCreateUser() {
    return this.to('BatchCreateUser');
  }

  /**
   * Grants permission to batch delete users from a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toBatchDeleteUser() {
    return this.to('BatchDeleteUser');
  }

  /**
   * Grants permission to batch lookup user unames in a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toBatchLookupUserUname() {
    return this.to('BatchLookupUserUname');
  }

  /**
   * Grants permission to batch reinvite users in a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toBatchReinviteUser() {
    return this.to('BatchReinviteUser');
  }

  /**
   * Grants permission to batch reset devices for a user in a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toBatchResetDevicesForUser() {
    return this.to('BatchResetDevicesForUser');
  }

  /**
   * Grants permission to batch toggle user suspend status in a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toBatchToggleUserSuspendStatus() {
    return this.to('BatchToggleUserSuspendStatus');
  }

  /**
   * Grants permission to create and manage Wickr networks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toCreateAdminSession() {
    return this.to('CreateAdminSession');
  }

  /**
   * Grants permission to create a bot in a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toCreateBot() {
    return this.to('CreateBot');
  }

  /**
   * Grants permission to create a data retention bot in a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toCreateDataRetentionBot() {
    return this.to('CreateDataRetentionBot');
  }

  /**
   * Grants permission to create a data retention bot challenge in a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toCreateDataRetentionBotChallenge() {
    return this.to('CreateDataRetentionBotChallenge');
  }

  /**
   * Grants permission to create a new Wickr network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toCreateNetwork() {
    return this.to('CreateNetwork');
  }

  /**
   * Grants permission to create a security group in a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toCreateSecurityGroup() {
    return this.to('CreateSecurityGroup');
  }

  /**
   * Grants permission to delete a bot from a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toDeleteBot() {
    return this.to('DeleteBot');
  }

  /**
   * Grants permission to delete a data retention bot from a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toDeleteDataRetentionBot() {
    return this.to('DeleteDataRetentionBot');
  }

  /**
   * Grants permission to delete Wickr networks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toDeleteNetwork() {
    return this.to('DeleteNetwork');
  }

  /**
   * Grants permission to delete a security group from a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toDeleteSecurityGroup() {
    return this.to('DeleteSecurityGroup');
  }

  /**
   * Grants permission to get bot information in a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toGetBot() {
    return this.to('GetBot');
  }

  /**
   * Grants permission to get bot count for a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toGetBotsCount() {
    return this.to('GetBotsCount');
  }

  /**
   * Grants permission to get data retention bot information in a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toGetDataRetentionBot() {
    return this.to('GetDataRetentionBot');
  }

  /**
   * Grants permission to get guest user history count for a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toGetGuestUserHistoryCount() {
    return this.to('GetGuestUserHistoryCount');
  }

  /**
   * Grants permission to get details of a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toGetNetwork() {
    return this.to('GetNetwork');
  }

  /**
   * Grants permission to get network settings for a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toGetNetworkSettings() {
    return this.to('GetNetworkSettings');
  }

  /**
   * Grants permission to get OIDC information for a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toGetOidcInfo() {
    return this.to('GetOidcInfo');
  }

  /**
   * Grants permission to get security group information in a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toGetSecurityGroup() {
    return this.to('GetSecurityGroup');
  }

  /**
   * Grants permission to get information about a user in a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toGetUser() {
    return this.to('GetUser');
  }

  /**
   * Grants permission to get user count for a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toGetUsersCount() {
    return this.to('GetUsersCount');
  }

  /**
   * Grants permission to list blocked guest users in a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toListBlockedGuestUsers() {
    return this.to('ListBlockedGuestUsers');
  }

  /**
   * Grants permission to list bots in a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toListBots() {
    return this.to('ListBots');
  }

  /**
   * Grants permission to list devices for a user in a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toListDevicesForUser() {
    return this.to('ListDevicesForUser');
  }

  /**
   * Grants permission to list guest users in a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toListGuestUsers() {
    return this.to('ListGuestUsers');
  }

  /**
   * Grants permission to list Wickr networks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toListNetworks() {
    return this.to('ListNetworks');
  }

  /**
   * Grants permission to list users in a security group in a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toListSecurityGroupUsers() {
    return this.to('ListSecurityGroupUsers');
  }

  /**
   * Grants permission to list security groups in a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toListSecurityGroups() {
    return this.to('ListSecurityGroups');
  }

  /**
   * Grants permission to list the tags applied to a Wickr resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list users in a Wickr network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to register OIDC configuration for a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toRegisterOidcConfig() {
    return this.to('RegisterOidcConfig');
  }

  /**
   * Grants permission to test OIDC configuration for a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toRegisterOidcConfigTest() {
    return this.to('RegisterOidcConfigTest');
  }

  /**
   * Grants permission to add tags to a specified Wickr resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag the specified tags from the specified Wickr resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a bot in a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toUpdateBot() {
    return this.to('UpdateBot');
  }

  /**
   * Grants permission to update data retention settings in a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toUpdateDataRetention() {
    return this.to('UpdateDataRetention');
  }

  /**
   * Grants permission to update guest user status in a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toUpdateGuestUser() {
    return this.to('UpdateGuestUser');
  }

  /**
   * Grants permission to update Wickr network details
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toUpdateNetworkDetails() {
    return this.to('UpdateNetworkDetails');
  }

  /**
   * Grants permission to update network settings for a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toUpdateNetworkSettings() {
    return this.to('UpdateNetworkSettings');
  }

  /**
   * Grants permission to update a security group in a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toUpdateSecurityGroup() {
    return this.to('UpdateSecurityGroup');
  }

  /**
   * Grants permission to update user information in a Wickr network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchCreateUser',
      'BatchDeleteUser',
      'BatchReinviteUser',
      'BatchResetDevicesForUser',
      'BatchToggleUserSuspendStatus',
      'CreateAdminSession',
      'CreateBot',
      'CreateDataRetentionBot',
      'CreateDataRetentionBotChallenge',
      'CreateNetwork',
      'CreateSecurityGroup',
      'DeleteBot',
      'DeleteDataRetentionBot',
      'DeleteNetwork',
      'DeleteSecurityGroup',
      'RegisterOidcConfig',
      'RegisterOidcConfigTest',
      'UpdateBot',
      'UpdateDataRetention',
      'UpdateGuestUser',
      'UpdateNetworkDetails',
      'UpdateNetworkSettings',
      'UpdateSecurityGroup',
      'UpdateUser'
    ],
    Read: [
      'BatchLookupUserUname',
      'GetBot',
      'GetBotsCount',
      'GetDataRetentionBot',
      'GetGuestUserHistoryCount',
      'GetNetwork',
      'GetNetworkSettings',
      'GetOidcInfo',
      'GetSecurityGroup',
      'GetUser',
      'GetUsersCount',
      'ListBlockedGuestUsers',
      'ListBots',
      'ListDevicesForUser',
      'ListGuestUsers',
      'ListNetworks',
      'ListSecurityGroupUsers',
      'ListSecurityGroups',
      'ListTagsForResource',
      'ListUsers'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type network to the statement
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/
   *
   * @param networkId - Identifier for the networkId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetwork(networkId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:wickr:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:network/${ networkId }`);
  }

  /**
   * Filters access by a tag's key and value in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateNetwork()
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
   * Filters access by the tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toTagResource()
   *
   * Applies to resource types:
   * - network
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateNetwork()
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
