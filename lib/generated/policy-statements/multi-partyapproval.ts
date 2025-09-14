import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [mpa](https://docs.aws.amazon.com/service-authorization/latest/reference/list_multi-partyapproval.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mpa extends PolicyStatement {
  public servicePrefix = 'mpa';

  /**
   * Statement provider for service [mpa](https://docs.aws.amazon.com/service-authorization/latest/reference/list_multi-partyapproval.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel an approval session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifRequestedOperation()
   * - .ifProtectedResourceAccount()
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_CancelSession.html
   */
  public toCancelSession() {
    return this.to('CancelSession');
  }

  /**
   * Grants permission to create an approval team
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_CreateApprovalTeam.html
   */
  public toCreateApprovalTeam() {
    return this.to('CreateApprovalTeam');
  }

  /**
   * Grants permission to create an identity source
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_CreateIdentitySource.html
   */
  public toCreateIdentitySource() {
    return this.to('CreateIdentitySource');
  }

  /**
   * Grants permission to delete an identity source
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_DeleteIdentitySource.html
   */
  public toDeleteIdentitySource() {
    return this.to('DeleteIdentitySource');
  }

  /**
   * Grants permission to delete an inactive approval team
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_DeleteInactiveApprovalTeamVersion.html
   */
  public toDeleteInactiveApprovalTeamVersion() {
    return this.to('DeleteInactiveApprovalTeamVersion');
  }

  /**
   * Grants permission to delete a resource policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to retrieve details for an approval team
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_GetApprovalTeam.html
   */
  public toGetApprovalTeam() {
    return this.to('GetApprovalTeam');
  }

  /**
   * Grants permission to retrieve details for an identity source
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_GetIdentitySource.html
   */
  public toGetIdentitySource() {
    return this.to('GetIdentitySource');
  }

  /**
   * Grants permission to retrieve details for a policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_GetPolicyVersion.html
   */
  public toGetPolicyVersion() {
    return this.to('GetPolicyVersion');
  }

  /**
   * Grants permission to retrieve details for a specific resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to retrieve details for an approval session
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifRequestedOperation()
   * - .ifProtectedResourceAccount()
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_GetSession.html
   */
  public toGetSession() {
    return this.to('GetSession');
  }

  /**
   * Grants permission to list approval teams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_ListApprovalTeams.html
   */
  public toListApprovalTeams() {
    return this.to('ListApprovalTeams');
  }

  /**
   * Grants permission to list identity sources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_ListIdentitySources.html
   */
  public toListIdentitySources() {
    return this.to('ListIdentitySources');
  }

  /**
   * Grants permission to list policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_ListPolicies.html
   */
  public toListPolicies() {
    return this.to('ListPolicies');
  }

  /**
   * Grants permission to list the versions for policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_ListPolicyVersions.html
   */
  public toListPolicyVersions() {
    return this.to('ListPolicyVersions');
  }

  /**
   * Grants permission to list policies for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_ListResourcePolicies.html
   */
  public toListResourcePolicies() {
    return this.to('ListResourcePolicies');
  }

  /**
   * Grants permission to list approval sessions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_ListSessions.html
   */
  public toListSessions() {
    return this.to('ListSessions');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create or update policies for a resource
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to start the deletion process for an active approval team
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_StartActiveApprovalTeamDeletion.html
   */
  public toStartActiveApprovalTeamDeletion() {
    return this.to('StartActiveApprovalTeamDeletion');
  }

  /**
   * Grants permission to start an approval session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifRequestedOperation()
   * - .ifProtectedResourceAccount()
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_StartSessionInternal.html
   */
  public toStartSession() {
    return this.to('StartSession');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update approval team
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/mpa/latest/APIReference/API_UpdateApprovalTeam.html
   */
  public toUpdateApprovalTeam() {
    return this.to('UpdateApprovalTeam');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelSession',
      'CreateApprovalTeam',
      'CreateIdentitySource',
      'DeleteIdentitySource',
      'DeleteInactiveApprovalTeamVersion',
      'StartActiveApprovalTeamDeletion',
      'StartSession',
      'UpdateApprovalTeam'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'PutResourcePolicy'
    ],
    Read: [
      'GetApprovalTeam',
      'GetIdentitySource',
      'GetPolicyVersion',
      'GetResourcePolicy',
      'GetSession'
    ],
    List: [
      'ListApprovalTeams',
      'ListIdentitySources',
      'ListPolicies',
      'ListPolicyVersions',
      'ListResourcePolicies',
      'ListSessions',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type approval-team to the statement
   *
   * https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html
   *
   * @param approvalTeamId - Identifier for the approvalTeamId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApprovalTeam(approvalTeamId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mpa:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:approval-team/${ approvalTeamId }`);
  }

  /**
   * Adds a resource of type identity-source to the statement
   *
   * https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html
   *
   * @param identitySourceId - Identifier for the identitySourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdentitySource(identitySourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mpa:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:identity-source/${ identitySourceId }`);
  }

  /**
   * Adds a resource of type session to the statement
   *
   * https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html
   *
   * @param sessionId - Identifier for the sessionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSession(sessionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mpa:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:session/${ sessionId }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateApprovalTeam()
   * - .toCreateIdentitySource()
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
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCancelSession()
   * - .toCreateApprovalTeam()
   * - .toCreateIdentitySource()
   * - .toDeleteIdentitySource()
   * - .toDeleteInactiveApprovalTeamVersion()
   * - .toGetApprovalTeam()
   * - .toGetIdentitySource()
   * - .toGetSession()
   * - .toStartActiveApprovalTeamDeletion()
   * - .toStartSession()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateApprovalTeam()
   *
   * Applies to resource types:
   * - approval-team
   * - identity-source
   * - session
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateApprovalTeam()
   * - .toCreateIdentitySource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the account that owns the resource that is the target of the operation that requires approval
   *
   * https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html
   *
   * Applies to actions:
   * - .toCancelSession()
   * - .toGetSession()
   * - .toStartSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProtectedResourceAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`ProtectedResourceAccount`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a requested operation that requires team approval before it can be executed
   *
   * https://docs.aws.amazon.com/mpa/latest/userguide/mpa-concepts.html
   *
   * Applies to actions:
   * - .toCancelSession()
   * - .toGetSession()
   * - .toStartSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestedOperation(value: string | string[], operator?: Operator | string) {
    return this.if(`RequestedOperation`, value, operator ?? 'StringLike');
  }
}
