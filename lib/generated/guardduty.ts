import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [guardduty](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonguardduty.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Guardduty extends PolicyStatement {
  public servicePrefix = 'guardduty';

  /**
   * Statement provider for service [guardduty](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonguardduty.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept invitations to become a GuardDuty member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_AcceptAdministratorInvitation.html
   */
  public toAcceptAdministratorInvitation() {
    return this.to('AcceptAdministratorInvitation');
  }

  /**
   * Grants permission to accept invitations to become a GuardDuty member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_AcceptInvitation.html
   */
  public toAcceptInvitation() {
    return this.to('AcceptInvitation');
  }

  /**
   * Grants permission to archive GuardDuty findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ArchiveFindings.html
   */
  public toArchiveFindings() {
    return this.to('ArchiveFindings');
  }

  /**
   * Grants permission to create a detector
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateDetector.html
   */
  public toCreateDetector() {
    return this.to('CreateDetector');
  }

  /**
   * Grants permission to create GuardDuty filters. A filters defines finding attributes and conditions used to filter findings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateFilter.html
   */
  public toCreateFilter() {
    return this.to('CreateFilter');
  }

  /**
   * Grants permission to create an IPSet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:DeleteRolePolicy
   * - iam:PutRolePolicy
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateIPSet.html
   */
  public toCreateIPSet() {
    return this.to('CreateIPSet');
  }

  /**
   * Grants permission to create GuardDuty member accounts, where the account used to create a member becomes the GuardDuty administrator account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html
   */
  public toCreateMembers() {
    return this.to('CreateMembers');
  }

  /**
   * Grants permission to create a publishing destination
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreatePublishingDestination.html
   */
  public toCreatePublishingDestination() {
    return this.to('CreatePublishingDestination');
  }

  /**
   * Grants permission to create sample findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateSampleFindings.html
   */
  public toCreateSampleFindings() {
    return this.to('CreateSampleFindings');
  }

  /**
   * Grants permission to create GuardDuty ThreatIntelSets, where a ThreatIntelSet consists of known malicious IP addresses used by GuardDuty to generate findings
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateThreatIntelSet.html
   */
  public toCreateThreatIntelSet() {
    return this.to('CreateThreatIntelSet');
  }

  /**
   * Grants permission to decline invitations to become a GuardDuty member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeclineInvitations.html
   */
  public toDeclineInvitations() {
    return this.to('DeclineInvitations');
  }

  /**
   * Grants permission to delete GuardDuty detectors
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteDetector.html
   */
  public toDeleteDetector() {
    return this.to('DeleteDetector');
  }

  /**
   * Grants permission to delete GuardDuty filters
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteFilter.html
   */
  public toDeleteFilter() {
    return this.to('DeleteFilter');
  }

  /**
   * Grants permission to delete GuardDuty IPSets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteIPSet.html
   */
  public toDeleteIPSet() {
    return this.to('DeleteIPSet');
  }

  /**
   * Grants permission to delete invitations to become a GuardDuty member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteInvitations.html
   */
  public toDeleteInvitations() {
    return this.to('DeleteInvitations');
  }

  /**
   * Grants permission to delete GuardDuty member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html
   */
  public toDeleteMembers() {
    return this.to('DeleteMembers');
  }

  /**
   * Grants permission to delete a publishing destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeletePublishingDestination.html
   */
  public toDeletePublishingDestination() {
    return this.to('DeletePublishingDestination');
  }

  /**
   * Grants permission to delete GuardDuty ThreatIntelSets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteThreatIntelSet.html
   */
  public toDeleteThreatIntelSet() {
    return this.to('DeleteThreatIntelSet');
  }

  /**
   * Grants permission to retrieve details about malware scans
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribeMalwareScans.html
   */
  public toDescribeMalwareScans() {
    return this.to('DescribeMalwareScans');
  }

  /**
   * Grants permission to retrieve details about the delegated administrator associated with a GuardDuty detector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribeOrganizationConfiguration.html
   */
  public toDescribeOrganizationConfiguration() {
    return this.to('DescribeOrganizationConfiguration');
  }

  /**
   * Grants permission to retrieve details about a publishing destination
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribePublishingDestination.html
   */
  public toDescribePublishingDestination() {
    return this.to('DescribePublishingDestination');
  }

  /**
   * Grants permission to disable the organization delegated administrator for GuardDuty
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisableOrganizationAdminAccount.html
   */
  public toDisableOrganizationAdminAccount() {
    return this.to('DisableOrganizationAdminAccount');
  }

  /**
   * Grants permission to disassociate a GuardDuty member account from its GuardDuty administrator account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateFromAdministratorAccount.html
   */
  public toDisassociateFromAdministratorAccount() {
    return this.to('DisassociateFromAdministratorAccount');
  }

  /**
   * Grants permission to disassociate a GuardDuty member account from its GuardDuty administrator account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateFromMasterAccount.html
   */
  public toDisassociateFromMasterAccount() {
    return this.to('DisassociateFromMasterAccount');
  }

  /**
   * Grants permission to disassociate GuardDuty member accounts from their administrator GuardDuty account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateMembers.html
   */
  public toDisassociateMembers() {
    return this.to('DisassociateMembers');
  }

  /**
   * Grants permission to enable an organization delegated administrator for GuardDuty
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_EnableOrganizationAdminAccount.html
   */
  public toEnableOrganizationAdminAccount() {
    return this.to('EnableOrganizationAdminAccount');
  }

  /**
   * Grants permission to retrieve details of the GuardDuty administrator account associated with a member account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetAdministratorAccount.html
   */
  public toGetAdministratorAccount() {
    return this.to('GetAdministratorAccount');
  }

  /**
   * Grants permission to retrieve GuardDuty detectors
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetDetector.html
   */
  public toGetDetector() {
    return this.to('GetDetector');
  }

  /**
   * Grants permission to retrieve GuardDuty filters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFilter.html
   */
  public toGetFilter() {
    return this.to('GetFilter');
  }

  /**
   * Grants permission to retrieve GuardDuty findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFindings.html
   */
  public toGetFindings() {
    return this.to('GetFindings');
  }

  /**
   * Grants permission to retrieve a list of GuardDuty finding statistics
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFindingsStatistics.html
   */
  public toGetFindingsStatistics() {
    return this.to('GetFindingsStatistics');
  }

  /**
   * Grants permission to retrieve GuardDuty IPSets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetIPSet.html
   */
  public toGetIPSet() {
    return this.to('GetIPSet');
  }

  /**
   * Grants permission to retrieve the count of all GuardDuty invitations sent to a specified account, which does not include the accepted invitation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetInvitationsCount.html
   */
  public toGetInvitationsCount() {
    return this.to('GetInvitationsCount');
  }

  /**
   * Grants permission to retrieve the malware scan settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMalwareScanSettings.html
   */
  public toGetMalwareScanSettings() {
    return this.to('GetMalwareScanSettings');
  }

  /**
   * Grants permission to retrieve details of the GuardDuty administrator account associated with a member account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMasterAccount.html
   */
  public toGetMasterAccount() {
    return this.to('GetMasterAccount');
  }

  /**
   * Grants permission to describe which data sources are enabled for member accounts detectors
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMemberDetectors.html
   */
  public toGetMemberDetectors() {
    return this.to('GetMemberDetectors');
  }

  /**
   * Grants permission to retrieve the member accounts associated with an administrator account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMembers.html
   */
  public toGetMembers() {
    return this.to('GetMembers');
  }

  /**
   * Grants permission to provide the number of days left for each data source used in the free trial period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetRemainingFreeTrialDays.html
   */
  public toGetRemainingFreeTrialDays() {
    return this.to('GetRemainingFreeTrialDays');
  }

  /**
   * Grants permission to retrieve GuardDuty ThreatIntelSets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetThreatIntelSet.html
   */
  public toGetThreatIntelSet() {
    return this.to('GetThreatIntelSet');
  }

  /**
   * Grants permission to list Amazon GuardDuty usage statistics over the last 30 days for the specified detector ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetUsageStatistics.html
   */
  public toGetUsageStatistics() {
    return this.to('GetUsageStatistics');
  }

  /**
   * Grants permission to invite other AWS accounts to enable GuardDuty and become GuardDuty member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html
   */
  public toInviteMembers() {
    return this.to('InviteMembers');
  }

  /**
   * Grants permission to retrieve a list of GuardDuty detectors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html
   */
  public toListDetectors() {
    return this.to('ListDetectors');
  }

  /**
   * Grants permission to retrieve a list of GuardDuty filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListFilters.html
   */
  public toListFilters() {
    return this.to('ListFilters');
  }

  /**
   * Grants permission to retrieve a list of GuardDuty findings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListFindings.html
   */
  public toListFindings() {
    return this.to('ListFindings');
  }

  /**
   * Grants permission to retrieve a list of GuardDuty IPSets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListIPSets.html
   */
  public toListIPSets() {
    return this.to('ListIPSets');
  }

  /**
   * Grants permission to retrieve a list of all of the GuardDuty membership invitations that were sent to an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListInvitations.html
   */
  public toListInvitations() {
    return this.to('ListInvitations');
  }

  /**
   * Grants permission to retrieve a list of GuardDuty member accounts associated with an administrator account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListMembers.html
   */
  public toListMembers() {
    return this.to('ListMembers');
  }

  /**
   * Grants permission to list details about the organization delegated administrator for GuardDuty
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListOrganizationAdminAccounts.html
   */
  public toListOrganizationAdminAccounts() {
    return this.to('ListOrganizationAdminAccounts');
  }

  /**
   * Grants permission to retrieve a list of publishing destinations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListPublishingDestinations.html
   */
  public toListPublishingDestinations() {
    return this.to('ListPublishingDestinations');
  }

  /**
   * Grants permission to retrieve a list of tags associated with a GuardDuty resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve a list of GuardDuty ThreatIntelSets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListThreatIntelSets.html
   */
  public toListThreatIntelSets() {
    return this.to('ListThreatIntelSets');
  }

  /**
   * Grants permission to a GuardDuty administrator account to monitor findings from GuardDuty member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StartMonitoringMembers.html
   */
  public toStartMonitoringMembers() {
    return this.to('StartMonitoringMembers');
  }

  /**
   * Grants permission to disable monitoring findings from member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StopMonitoringMembers.html
   */
  public toStopMonitoringMembers() {
    return this.to('StopMonitoringMembers');
  }

  /**
   * Grants permission to add tags to a GuardDuty resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to unarchive GuardDuty findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UnarchiveFindings.html
   */
  public toUnarchiveFindings() {
    return this.to('UnarchiveFindings');
  }

  /**
   * Grants permission to remove tags from a GuardDuty resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update GuardDuty detectors
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateDetector.html
   */
  public toUpdateDetector() {
    return this.to('UpdateDetector');
  }

  /**
   * Grants permission to updates GuardDuty filters
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateFilter.html
   */
  public toUpdateFilter() {
    return this.to('UpdateFilter');
  }

  /**
   * Grants permission to update findings feedback to mark GuardDuty findings as useful or not useful
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateFindingsFeedback.html
   */
  public toUpdateFindingsFeedback() {
    return this.to('UpdateFindingsFeedback');
  }

  /**
   * Grants permission to update GuardDuty IPSets
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:DeleteRolePolicy
   * - iam:PutRolePolicy
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateIPSet.html
   */
  public toUpdateIPSet() {
    return this.to('UpdateIPSet');
  }

  /**
   * Grants permission to update the malware scan settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateMalwareScanSettings.html
   */
  public toUpdateMalwareScanSettings() {
    return this.to('UpdateMalwareScanSettings');
  }

  /**
   * Grants permission to update which data sources are enabled for member accounts detectors
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateMemberDetectors.html
   */
  public toUpdateMemberDetectors() {
    return this.to('UpdateMemberDetectors');
  }

  /**
   * Grants permission to update the delegated administrator configuration associated with a GuardDuty detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateOrganizationConfiguration.html
   */
  public toUpdateOrganizationConfiguration() {
    return this.to('UpdateOrganizationConfiguration');
  }

  /**
   * Grants permission to update a publishing destination
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdatePublishingDestination.html
   */
  public toUpdatePublishingDestination() {
    return this.to('UpdatePublishingDestination');
  }

  /**
   * Grants permission to updates the GuardDuty ThreatIntelSets
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:DeleteRolePolicy
   * - iam:PutRolePolicy
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateThreatIntelSet.html
   */
  public toUpdateThreatIntelSet() {
    return this.to('UpdateThreatIntelSet');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptAdministratorInvitation',
      'AcceptInvitation',
      'ArchiveFindings',
      'CreateDetector',
      'CreateFilter',
      'CreateIPSet',
      'CreateMembers',
      'CreatePublishingDestination',
      'CreateSampleFindings',
      'CreateThreatIntelSet',
      'DeclineInvitations',
      'DeleteDetector',
      'DeleteFilter',
      'DeleteIPSet',
      'DeleteInvitations',
      'DeleteMembers',
      'DeletePublishingDestination',
      'DeleteThreatIntelSet',
      'DisableOrganizationAdminAccount',
      'DisassociateFromAdministratorAccount',
      'DisassociateFromMasterAccount',
      'DisassociateMembers',
      'EnableOrganizationAdminAccount',
      'InviteMembers',
      'StartMonitoringMembers',
      'StopMonitoringMembers',
      'UnarchiveFindings',
      'UpdateDetector',
      'UpdateFilter',
      'UpdateFindingsFeedback',
      'UpdateIPSet',
      'UpdateMalwareScanSettings',
      'UpdateMemberDetectors',
      'UpdateOrganizationConfiguration',
      'UpdatePublishingDestination',
      'UpdateThreatIntelSet'
    ],
    Read: [
      'DescribeMalwareScans',
      'DescribeOrganizationConfiguration',
      'DescribePublishingDestination',
      'GetAdministratorAccount',
      'GetDetector',
      'GetFilter',
      'GetFindings',
      'GetFindingsStatistics',
      'GetIPSet',
      'GetInvitationsCount',
      'GetMalwareScanSettings',
      'GetMasterAccount',
      'GetMemberDetectors',
      'GetMembers',
      'GetRemainingFreeTrialDays',
      'GetThreatIntelSet',
      'GetUsageStatistics',
      'ListTagsForResource'
    ],
    List: [
      'ListDetectors',
      'ListFilters',
      'ListFindings',
      'ListIPSets',
      'ListInvitations',
      'ListMembers',
      'ListOrganizationAdminAccounts',
      'ListPublishingDestinations',
      'ListThreatIntelSets'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type detector to the statement
   *
   * https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources
   *
   * @param detectorId - Identifier for the detectorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDetector(detectorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Guardduty.defaultPartition }:guardduty:${ region || '*' }:${ account || '*' }:detector/${ detectorId }`);
  }

  /**
   * Adds a resource of type filter to the statement
   *
   * https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources
   *
   * @param detectorId - Identifier for the detectorId.
   * @param filterName - Identifier for the filterName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFilter(detectorId: string, filterName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Guardduty.defaultPartition }:guardduty:${ region || '*' }:${ account || '*' }:detector/${ detectorId }/filter/${ filterName }`);
  }

  /**
   * Adds a resource of type ipset to the statement
   *
   * https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources
   *
   * @param detectorId - Identifier for the detectorId.
   * @param iPSetId - Identifier for the iPSetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIpset(detectorId: string, iPSetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Guardduty.defaultPartition }:guardduty:${ region || '*' }:${ account || '*' }:detector/${ detectorId }/ipset/${ iPSetId }`);
  }

  /**
   * Adds a resource of type threatintelset to the statement
   *
   * https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources
   *
   * @param detectorId - Identifier for the detectorId.
   * @param threatIntelSetId - Identifier for the threatIntelSetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onThreatintelset(detectorId: string, threatIntelSetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Guardduty.defaultPartition }:guardduty:${ region || '*' }:${ account || '*' }:detector/${ detectorId }/threatintelset/${ threatIntelSetId }`);
  }

  /**
   * Adds a resource of type publishingDestination to the statement
   *
   * https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources
   *
   * @param detectorId - Identifier for the detectorId.
   * @param publishingDestinationId - Identifier for the publishingDestinationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPublishingDestination(detectorId: string, publishingDestinationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Guardduty.defaultPartition }:guardduty:${ region || '*' }:${ account || '*' }:detector/${ detectorId }/publishingDestination/${ publishingDestinationId }`);
  }
}
