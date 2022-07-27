import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [detective](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondetective.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Detective extends PolicyStatement {
  public servicePrefix = 'detective';

  /**
   * Statement provider for service [detective](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondetective.html).
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
   * Dependent actions:
   * - organizations:DescribeOrganization
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
   * Dependent actions:
   * - organizations:DescribeOrganization
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
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - organizations:DescribeOrganization
   * - organizations:EnableAWSServiceAccess
   * - organizations:RegisterDelegatedAdministrator
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_EnableOrganizationAdminAccount.html
   */
  public toEnableOrganizationAdminAccount() {
    return this.to('EnableOrganizationAdminAccount');
  }

  /**
   * Grants permission to retrieve a behavior graph's eligibility for a free trial period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/detective/latest/adminguide/free-trial-overview.html
   */
  public toGetFreeTrialEligibility() {
    return this.to('GetFreeTrialEligibility');
  }

  /**
   * Grants permission to retrieve the data ingestion state of a behavior graph
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/detective/latest/adminguide/detective-source-data-about.html
   */
  public toGetGraphIngestState() {
    return this.to('GetGraphIngestState');
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
   * Grants permission to retrieve information about Amazon Detective's pricing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/detective/latest/adminguide/usage-projected-cost-calculation.html
   */
  public toGetPricingInformation() {
    return this.to('GetPricingInformation');
  }

  /**
   * Grants permission to list usage information of a behavior graph
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/detective/latest/adminguide/tracking-usage-logging.html
   */
  public toGetUsageInformation() {
    return this.to('GetUsageInformation');
  }

  /**
   * Grants permission to list a graph's datasource package ingest states and timestamps for the most recent state changes in a behavior graph managed by this account
   *
   * Access Level: Read
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
   * Dependent actions:
   * - organizations:DescribeOrganization
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_ListOrganizationAdminAccounts.html
   */
  public toListOrganizationAdminAccounts() {
    return this.to('ListOrganizationAdminAccounts');
  }

  /**
   * Grants permission to list the tag values that are assigned to a behavior graph
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Grants permission to search the data stored in a behavior graph
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/detective/latest/userguide/detective-search.html
   */
  public toSearchGraph() {
    return this.to('SearchGraph');
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
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tag values from a behavior graph
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
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
   * Grants permission to update the current configuration related to the Amazon Detective integration with AWS Organizations
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - organizations:DescribeOrganization
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
      'StartMonitoringMember',
      'UpdateDatasourcePackages',
      'UpdateOrganizationConfiguration'
    ],
    Read: [
      'BatchGetGraphMemberDatasources',
      'BatchGetMembershipDatasources',
      'DescribeOrganizationConfiguration',
      'GetFreeTrialEligibility',
      'GetGraphIngestState',
      'GetMembers',
      'GetPricingInformation',
      'GetUsageInformation',
      'ListDatasourcePackages',
      'ListTagsForResource',
      'SearchGraph'
    ],
    List: [
      'ListGraphs',
      'ListInvitations',
      'ListMembers',
      'ListOrganizationAdminAccounts'
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGraph(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Detective.defaultPartition }:detective:${ region || '*' }:${ account || '*' }:graph:${ resourceId }`);
  }
}
