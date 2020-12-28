import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
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
   * Grants permission to disassociate a GuardDuty member account from its GuardDuty master account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateFromMasterAccount.html
   */
  public toDisassociateFromMasterAccount() {
    return this.to('DisassociateFromMasterAccount');
  }

  /**
   * Grants permission to disassociate GuardDuty member accounts from their master GuardDuty account
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
   * Grants permsission to retrieve GuardDuty IPSets
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
   * Grants permission to retrieve details of the GuardDuty master account associated with a member account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMasterAccount.html
   */
  public toGetMasterAccount() {
    return this.to('GetMasterAccount');
  }

  /**
   * Grants permission to retrieve the member accounts associated with a master account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMembers.html
   */
  public toGetMembers() {
    return this.to('GetMembers');
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
   * Grants permission to retrieve a lists of all of the GuardDuty membership invitations that were sent to an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListInvitations.html
   */
  public toListInvitations() {
    return this.to('ListInvitations');
  }

  /**
   * Grants permission to retrierve a lsit of GuardDuty member accounts associated with a master account
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
   * Access Level: List
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
   * Access Level: Write
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
   * Access Level: Write
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
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateIPSet.html
   */
  public toUpdateIPSet() {
    return this.to('UpdateIPSet');
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
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateThreatIntelSet.html
   */
  public toUpdateThreatIntelSet() {
    return this.to('UpdateThreatIntelSet');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptInvitation",
      "ArchiveFindings",
      "CreateDetector",
      "CreateFilter",
      "CreateIPSet",
      "CreateMembers",
      "CreatePublishingDestination",
      "CreateSampleFindings",
      "CreateThreatIntelSet",
      "DeclineInvitations",
      "DeleteDetector",
      "DeleteFilter",
      "DeleteIPSet",
      "DeleteInvitations",
      "DeleteMembers",
      "DeletePublishingDestination",
      "DeleteThreatIntelSet",
      "DisableOrganizationAdminAccount",
      "DisassociateFromMasterAccount",
      "DisassociateMembers",
      "EnableOrganizationAdminAccount",
      "InviteMembers",
      "StartMonitoringMembers",
      "StopMonitoringMembers",
      "TagResource",
      "UnarchiveFindings",
      "UntagResource",
      "UpdateDetector",
      "UpdateFilter",
      "UpdateFindingsFeedback",
      "UpdateIPSet",
      "UpdateOrganizationConfiguration",
      "UpdatePublishingDestination",
      "UpdateThreatIntelSet"
    ],
    "Read": [
      "DescribeOrganizationConfiguration",
      "DescribePublishingDestination",
      "GetDetector",
      "GetFilter",
      "GetFindings",
      "GetFindingsStatistics",
      "GetIPSet",
      "GetInvitationsCount",
      "GetMasterAccount",
      "GetMembers",
      "GetThreatIntelSet"
    ],
    "List": [
      "ListDetectors",
      "ListFilters",
      "ListFindings",
      "ListIPSets",
      "ListInvitations",
      "ListMembers",
      "ListOrganizationAdminAccounts",
      "ListPublishingDestinations",
      "ListTagsForResource",
      "ListThreatIntelSets"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDetector(detectorId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}';
    arn = arn.replace('${DetectorId}', detectorId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFilter(detectorId: string, filterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}/filter/${FilterName}';
    arn = arn.replace('${DetectorId}', detectorId);
    arn = arn.replace('${FilterName}', filterName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIpset(detectorId: string, iPSetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}/ipset/${IPSetId}';
    arn = arn.replace('${DetectorId}', detectorId);
    arn = arn.replace('${IPSetId}', iPSetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onThreatintelset(detectorId: string, threatIntelSetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}/threatintelset/${ThreatIntelSetId}';
    arn = arn.replace('${DetectorId}', detectorId);
    arn = arn.replace('${ThreatIntelSetId}', threatIntelSetId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPublishingDestination(detectorId: string, publishingDestinationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}/publishingDestination/${PublishingDestinationId}';
    arn = arn.replace('${DetectorId}', detectorId);
    arn = arn.replace('${PublishingDestinationId}', publishingDestinationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
