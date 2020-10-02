import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [guardduty](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonguardduty.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Guardduty extends PolicyStatement {
  public servicePrefix = 'guardduty';

  /**
   * Statement provider for service [guardduty](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonguardduty.html).
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
    this.to('guardduty:AcceptInvitation');
    return this;
  }

  /**
   * Grants permission to archive GuardDuty findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ArchiveFindings.html
   */
  public toArchiveFindings() {
    this.to('guardduty:ArchiveFindings');
    return this;
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
    this.to('guardduty:CreateDetector');
    return this;
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
    this.to('guardduty:CreateFilter');
    return this;
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
    this.to('guardduty:CreateIPSet');
    return this;
  }

  /**
   * Grants permission to create GuardDuty member accounts, where the account used to create a member becomes the GuardDuty administrator account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html
   */
  public toCreateMembers() {
    this.to('guardduty:CreateMembers');
    return this;
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
    this.to('guardduty:CreatePublishingDestination');
    return this;
  }

  /**
   * Grants permission to create sample findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateSampleFindings.html
   */
  public toCreateSampleFindings() {
    this.to('guardduty:CreateSampleFindings');
    return this;
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
    this.to('guardduty:CreateThreatIntelSet');
    return this;
  }

  /**
   * Grants permission to decline invitations to become a GuardDuty member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeclineInvitations.html
   */
  public toDeclineInvitations() {
    this.to('guardduty:DeclineInvitations');
    return this;
  }

  /**
   * Grants permission to delete GuardDuty detectors
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteDetector.html
   */
  public toDeleteDetector() {
    this.to('guardduty:DeleteDetector');
    return this;
  }

  /**
   * Grants permission to delete GuardDuty filters
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteFilter.html
   */
  public toDeleteFilter() {
    this.to('guardduty:DeleteFilter');
    return this;
  }

  /**
   * Grants permission to delete GuardDuty IPSets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteIPSet.html
   */
  public toDeleteIPSet() {
    this.to('guardduty:DeleteIPSet');
    return this;
  }

  /**
   * Grants permission to delete invitations to become a GuardDuty member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteInvitations.html
   */
  public toDeleteInvitations() {
    this.to('guardduty:DeleteInvitations');
    return this;
  }

  /**
   * Grants permission to delete GuardDuty member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html
   */
  public toDeleteMembers() {
    this.to('guardduty:DeleteMembers');
    return this;
  }

  /**
   * Grants permission to delete a publishing destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeletePublishingDestination.html
   */
  public toDeletePublishingDestination() {
    this.to('guardduty:DeletePublishingDestination');
    return this;
  }

  /**
   * Grants permission to delete GuardDuty ThreatIntelSets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteThreatIntelSet.html
   */
  public toDeleteThreatIntelSet() {
    this.to('guardduty:DeleteThreatIntelSet');
    return this;
  }

  /**
   * Grants permission to retrieve details about the delegated administrator associated with a GuardDuty detector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribeOrganizationConfiguration.html
   */
  public toDescribeOrganizationConfiguration() {
    this.to('guardduty:DescribeOrganizationConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve details about a publishing destination
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribePublishingDestination.html
   */
  public toDescribePublishingDestination() {
    this.to('guardduty:DescribePublishingDestination');
    return this;
  }

  /**
   * Grants permission to disable the organization delegated administrator for GuardDuty
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisableOrganizationAdminAccount.html
   */
  public toDisableOrganizationAdminAccount() {
    this.to('guardduty:DisableOrganizationAdminAccount');
    return this;
  }

  /**
   * Grants permission to disassociate a GuardDuty member account from its GuardDuty master account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateFromMasterAccount.html
   */
  public toDisassociateFromMasterAccount() {
    this.to('guardduty:DisassociateFromMasterAccount');
    return this;
  }

  /**
   * Grants permission to disassociate GuardDuty member accounts from their master GuardDuty account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateMembers.html
   */
  public toDisassociateMembers() {
    this.to('guardduty:DisassociateMembers');
    return this;
  }

  /**
   * Grants permission to enable an organization delegated administrator for GuardDuty
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_EnableOrganizationAdminAccount.html
   */
  public toEnableOrganizationAdminAccount() {
    this.to('guardduty:EnableOrganizationAdminAccount');
    return this;
  }

  /**
   * Grants permission to retrieve GuardDuty detectors
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetDetector.html
   */
  public toGetDetector() {
    this.to('guardduty:GetDetector');
    return this;
  }

  /**
   * Grants permission to retrieve GuardDuty filters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFilter.html
   */
  public toGetFilter() {
    this.to('guardduty:GetFilter');
    return this;
  }

  /**
   * Grants permission to retrieve GuardDuty findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFindings.html
   */
  public toGetFindings() {
    this.to('guardduty:GetFindings');
    return this;
  }

  /**
   * Grants permission to retrieve a list of GuardDuty finding statistics
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFindingsStatistics.html
   */
  public toGetFindingsStatistics() {
    this.to('guardduty:GetFindingsStatistics');
    return this;
  }

  /**
   * Grants permsission to retrieve GuardDuty IPSets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetIPSet.html
   */
  public toGetIPSet() {
    this.to('guardduty:GetIPSet');
    return this;
  }

  /**
   * Grants permission to retrieve the count of all GuardDuty invitations sent to a specified account, which does not include the accepted invitation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetInvitationsCount.html
   */
  public toGetInvitationsCount() {
    this.to('guardduty:GetInvitationsCount');
    return this;
  }

  /**
   * Grants permission to retrieve details of the GuardDuty master account associated with a member account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMasterAccount.html
   */
  public toGetMasterAccount() {
    this.to('guardduty:GetMasterAccount');
    return this;
  }

  /**
   * Grants permission to retrieve the member accounts associated with a master account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMembers.html
   */
  public toGetMembers() {
    this.to('guardduty:GetMembers');
    return this;
  }

  /**
   * Grants permission to retrieve GuardDuty ThreatIntelSets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetThreatIntelSet.html
   */
  public toGetThreatIntelSet() {
    this.to('guardduty:GetThreatIntelSet');
    return this;
  }

  /**
   * Grants permission to invite other AWS accounts to enable GuardDuty and become GuardDuty member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html
   */
  public toInviteMembers() {
    this.to('guardduty:InviteMembers');
    return this;
  }

  /**
   * Grants permission to retrieve a list of GuardDuty detectors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html
   */
  public toListDetectors() {
    this.to('guardduty:ListDetectors');
    return this;
  }

  /**
   * Grants permission to retrieve a list of GuardDuty filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListFilters.html
   */
  public toListFilters() {
    this.to('guardduty:ListFilters');
    return this;
  }

  /**
   * Grants permission to retrieve a list of GuardDuty findings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListFindings.html
   */
  public toListFindings() {
    this.to('guardduty:ListFindings');
    return this;
  }

  /**
   * Grants permission to retrieve a list of GuardDuty IPSets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListIPSets.html
   */
  public toListIPSets() {
    this.to('guardduty:ListIPSets');
    return this;
  }

  /**
   * Grants permission to retrieve a lists of all of the GuardDuty membership invitations that were sent to an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListInvitations.html
   */
  public toListInvitations() {
    this.to('guardduty:ListInvitations');
    return this;
  }

  /**
   * Grants permission to retrierve a lsit of GuardDuty member accounts associated with a master account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListMembers.html
   */
  public toListMembers() {
    this.to('guardduty:ListMembers');
    return this;
  }

  /**
   * Grants permission to list details about the organization delegated administrator for GuardDuty
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListOrganizationAdminAccounts.html
   */
  public toListOrganizationAdminAccounts() {
    this.to('guardduty:ListOrganizationAdminAccounts');
    return this;
  }

  /**
   * Grants permission to retrieve a list of publishing destinations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListPublishingDestinations.html
   */
  public toListPublishingDestinations() {
    this.to('guardduty:ListPublishingDestinations');
    return this;
  }

  /**
   * Grants permission to retrieve a list of tags associated with a GuardDuty resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('guardduty:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to retrieve a list of GuardDuty ThreatIntelSets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListThreatIntelSets.html
   */
  public toListThreatIntelSets() {
    this.to('guardduty:ListThreatIntelSets');
    return this;
  }

  /**
   * Grants permission to a GuardDuty administrator account to monitor findings from GuardDuty member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StartMonitoringMembers.html
   */
  public toStartMonitoringMembers() {
    this.to('guardduty:StartMonitoringMembers');
    return this;
  }

  /**
   * Grants permission to disable monitoring findings from member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StopMonitoringMembers.html
   */
  public toStopMonitoringMembers() {
    this.to('guardduty:StopMonitoringMembers');
    return this;
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
    this.to('guardduty:TagResource');
    return this;
  }

  /**
   * Grants permission to unarchive GuardDuty findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UnarchiveFindings.html
   */
  public toUnarchiveFindings() {
    this.to('guardduty:UnarchiveFindings');
    return this;
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
    this.to('guardduty:UntagResource');
    return this;
  }

  /**
   * Grants permission to update GuardDuty detectors
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateDetector.html
   */
  public toUpdateDetector() {
    this.to('guardduty:UpdateDetector');
    return this;
  }

  /**
   * Grants permission to updates GuardDuty filters
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateFilter.html
   */
  public toUpdateFilter() {
    this.to('guardduty:UpdateFilter');
    return this;
  }

  /**
   * Grants permission to update findings feedback to mark GuardDuty findings as useful or not useful
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateFindingsFeedback.html
   */
  public toUpdateFindingsFeedback() {
    this.to('guardduty:UpdateFindingsFeedback');
    return this;
  }

  /**
   * Grants permission to update GuardDuty IPSets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateIPSet.html
   */
  public toUpdateIPSet() {
    this.to('guardduty:UpdateIPSet');
    return this;
  }

  /**
   * Grants permission to update the delegated administrator configuration associated with a GuardDuty detector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateOrganizationConfiguration.html
   */
  public toUpdateOrganizationConfiguration() {
    this.to('guardduty:UpdateOrganizationConfiguration');
    return this;
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
    this.to('guardduty:UpdatePublishingDestination');
    return this;
  }

  /**
   * Grants permission to updates the GuardDuty ThreatIntelSets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateThreatIntelSet.html
   */
  public toUpdateThreatIntelSet() {
    this.to('guardduty:UpdateThreatIntelSet');
    return this;
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
