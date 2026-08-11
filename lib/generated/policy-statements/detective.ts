import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [detective](https://docs.aws.amazon.com/service-authorization/latest/reference/list_detective.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Detective extends PolicyStatement {
  public servicePrefix = 'detective';

  /**
   * Statement provider for service [detective](https://docs.aws.amazon.com/service-authorization/latest/reference/list_detective.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept an invitation to become a member of a behavior graph
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_AcceptInvitation.html
   */
  public toAcceptInvitation() {
    return this.to('AcceptInvitation');
  }

  /**
   * Grants permission to retrieve the datasource package history for the specified member accounts in a behavior graph managed by this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_BatchGetGraphMemberDatasources.html
   */
  public toBatchGetGraphMemberDatasources() {
    return this.to('BatchGetGraphMemberDatasources');
  }

  /**
   * Grants permission to retrieve the datasource package history of the caller account for the specified graphs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_BatchGetMembershipDatasources.html
   */
  public toBatchGetMembershipDatasources() {
    return this.to('BatchGetMembershipDatasources');
  }

  /**
   * Grants permission to create a behavior graph and begin to aggregate security information
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_CreateGraph.html
   */
  public toCreateGraph() {
    return this.to('CreateGraph');
  }

  /**
   * Grants permission to request the membership of one or more accounts in a behavior graph managed by this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_CreateMembers.html
   */
  public toCreateMembers() {
    return this.to('CreateMembers');
  }

  /**
   * Grants permission to delete a behavior graph and stop aggregating security information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_DeleteGraph.html
   */
  public toDeleteGraph() {
    return this.to('DeleteGraph');
  }

  /**
   * Grants permission to remove member accounts from a behavior graph managed by this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_DeleteMembers.html
   */
  public toDeleteMembers() {
    return this.to('DeleteMembers');
  }

  /**
   * Grants permission to view the current configuration related to the Amazon Detective integration with AWS Organizations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_DescribeOrganizationConfiguration.html
   */
  public toDescribeOrganizationConfiguration() {
    return this.to('DescribeOrganizationConfiguration');
  }

  /**
   * Grants permission to remove the Amazon Detective delegated administrator account for an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_DisableOrganizationAdminAccount.html
   */
  public toDisableOrganizationAdminAccount() {
    return this.to('DisableOrganizationAdminAccount');
  }

  /**
   * Grants permission to remove the association of this account with a behavior graph
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_DisassociateMembership.html
   */
  public toDisassociateMembership() {
    return this.to('DisassociateMembership');
  }

  /**
   * Grants permission to designate the Amazon Detective delegated administrator account for an organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_EnableOrganizationAdminAccount.html
   */
  public toEnableOrganizationAdminAccount() {
    return this.to('EnableOrganizationAdminAccount');
  }

  /**
   * Grants permission to get an investigation's status and metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_GetInvestigation.html
   */
  public toGetInvestigation() {
    return this.to('GetInvestigation');
  }

  /**
   * Grants permission to retrieve details on specified members of a behavior graph
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_GetMembers.html
   */
  public toGetMembers() {
    return this.to('GetMembers');
  }

  /**
   * Grants permission to list a graph's datasource package ingest states and timestamps for the most recent state changes in a behavior graph managed by this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_ListDatasourcePackages.html
   */
  public toListDatasourcePackages() {
    return this.to('ListDatasourcePackages');
  }

  /**
   * Grants permission to list behavior graphs managed by this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_ListGraphs.html
   */
  public toListGraphs() {
    return this.to('ListGraphs');
  }

  /**
   * Grants permission to list the indicators of an investigation
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_ListIndicators.html
   */
  public toListIndicators() {
    return this.to('ListIndicators');
  }

  /**
   * Grants permission to list the investigations of a behavior graph
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_ListInvestigations.html
   */
  public toListInvestigations() {
    return this.to('ListInvestigations');
  }

  /**
   * Grants permission to retrieve details on the behavior graphs to which this account has been invited to join
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_ListInvitations.html
   */
  public toListInvitations() {
    return this.to('ListInvitations');
  }

  /**
   * Grants permission to retrieve details on all members of a behavior graph
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_ListMembers.html
   */
  public toListMembers() {
    return this.to('ListMembers');
  }

  /**
   * Grants permission to view the current Amazon Detective delegated administrator account for an organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_ListOrganizationAdminAccounts.html
   */
  public toListOrganizationAdminAccount() {
    return this.to('ListOrganizationAdminAccount');
  }

  /**
   * Grants permission to list the tag values that are assigned to a behavior graph
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to reject an invitation to become a member of a behavior graph
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_RejectInvitation.html
   */
  public toRejectInvitation() {
    return this.to('RejectInvitation');
  }

  /**
   * Grants permission to start investigations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_StartInvestigation.html
   */
  public toStartInvestigation() {
    return this.to('StartInvestigation');
  }

  /**
   * Grants permission to start data ingest for a member account that has a status of ACCEPTED_BUT_DISABLED
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_StartMonitoringMember.html
   */
  public toStartMonitoringMember() {
    return this.to('StartMonitoringMember');
  }

  /**
   * Grants permission to assign tag values to a behavior graph
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tag values from a behavior graph
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to enable or disable datasource package(s) in a behavior graph managed by this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_UpdateDatasourcePackages.html
   */
  public toUpdateDatasourcePackages() {
    return this.to('UpdateDatasourcePackages');
  }

  /**
   * Grants permission to update an investigation's state and metadata
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_UpdateInvestigationState.html
   */
  public toUpdateInvestigationState() {
    return this.to('UpdateInvestigationState');
  }

  /**
   * Grants permission to update the current configuration related to the Amazon Detective integration with AWS Organizations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_UpdateOrganizationConfiguration.html
   */
  public toUpdateOrganizationConfiguration() {
    return this.to('UpdateOrganizationConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptInvitation',
      'CreateGraph',
      'CreateMembers',
      'DeleteGraph',
      'DeleteMembers',
      'DisableOrganizationAdminAccount',
      'DisassociateMembership',
      'EnableOrganizationAdminAccount',
      'RejectInvitation',
      'StartInvestigation',
      'StartMonitoringMember',
      'TagResource',
      'UntagResource',
      'UpdateDatasourcePackages',
      'UpdateInvestigationState',
      'UpdateOrganizationConfiguration'
    ],
    Read: [
      'BatchGetGraphMemberDatasources',
      'BatchGetMembershipDatasources',
      'DescribeOrganizationConfiguration',
      'GetInvestigation',
      'GetMembers'
    ],
    List: [
      'ListDatasourcePackages',
      'ListGraphs',
      'ListIndicators',
      'ListInvestigations',
      'ListInvitations',
      'ListMembers',
      'ListOrganizationAdminAccount',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Graph to the statement
   *
   * https://docs.aws.amazon.com/detective/latest/adminguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGraph(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:detective:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:graph:${ resourceId }`);
  }

  /**
   * Filters access by specifying the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateGraph()
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
   * Filters access by specifying the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAcceptInvitation()
   * - .toBatchGetGraphMemberDatasources()
   * - .toCreateGraph()
   * - .toCreateMembers()
   * - .toDeleteGraph()
   * - .toDeleteMembers()
   * - .toDescribeOrganizationConfiguration()
   * - .toDisassociateMembership()
   * - .toGetInvestigation()
   * - .toGetMembers()
   * - .toListDatasourcePackages()
   * - .toListIndicators()
   * - .toListInvestigations()
   * - .toListMembers()
   * - .toListTagsForResource()
   * - .toRejectInvitation()
   * - .toStartInvestigation()
   * - .toStartMonitoringMember()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateDatasourcePackages()
   * - .toUpdateInvestigationState()
   * - .toUpdateOrganizationConfiguration()
   *
   * Applies to resource types:
   * - Graph
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by specifying the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateGraph()
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
