import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
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
    this.to('AcceptInvitation');
    return this;
  }

  /**
   * Grants permission to create a behavior graph and begin to aggregate security information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_CreateGraph.html
   */
  public toCreateGraph() {
    this.to('CreateGraph');
    return this;
  }

  /**
   * Grants permission to request the membership of one or more accounts in a behavior graph managed by this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_CreateMembers.html
   */
  public toCreateMembers() {
    this.to('CreateMembers');
    return this;
  }

  /**
   * Grants permission to delete a behavior graph and stop aggregating security information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_DeleteGraph.html
   */
  public toDeleteGraph() {
    this.to('DeleteGraph');
    return this;
  }

  /**
   * Grants permission to remove member accounts from a behavior graph managed by this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_DeleteMembers.html
   */
  public toDeleteMembers() {
    this.to('DeleteMembers');
    return this;
  }

  /**
   * Grants permission to remove the association of this account with a behavior graph
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_DisassociateMembership.html
   */
  public toDisassociateMembership() {
    this.to('DisassociateMembership');
    return this;
  }

  /**
   * Grants permission to retrieve a behavior graph's eligibility for a free trial period
   *
   * Access Level: Read
   */
  public toGetFreeTrialEligibility() {
    this.to('GetFreeTrialEligibility');
    return this;
  }

  /**
   * Grants permission to retrieve the data ingestion state of a behavior graph
   *
   * Access Level: Read
   */
  public toGetGraphIngestState() {
    this.to('GetGraphIngestState');
    return this;
  }

  /**
   * Grants permission to retrieve details on specified members of a behavior graph
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_GetMembers.html
   */
  public toGetMembers() {
    this.to('GetMembers');
    return this;
  }

  /**
   * Grants permission to retrieve information about Amazon Detective's pricing
   *
   * Access Level: Read
   */
  public toGetPricingInformation() {
    this.to('GetPricingInformation');
    return this;
  }

  /**
   * Grants permission to list usage information of a behavior graph
   *
   * Access Level: Read
   */
  public toGetUsageInformation() {
    this.to('GetUsageInformation');
    return this;
  }

  /**
   * Grants permission to list behavior graphs managed by this account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_ListGraphs.html
   */
  public toListGraphs() {
    this.to('ListGraphs');
    return this;
  }

  /**
   * Grants permission to retrieve details on the behavior graphs to which this account has been invited to join
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_ListInvitations.html
   */
  public toListInvitations() {
    this.to('ListInvitations');
    return this;
  }

  /**
   * Grants permission to retrieve details on all members of a behavior graph
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_ListMembers.html
   */
  public toListMembers() {
    this.to('ListMembers');
    return this;
  }

  /**
   * Grants permission to reject an invitation to become a member of a behavior graph
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_RejectInvitation.html
   */
  public toRejectInvitation() {
    this.to('RejectInvitation');
    return this;
  }

  /**
   * Grants permission to search the data stored in a behavior graph
   *
   * Access Level: Read
   */
  public toSearchGraph() {
    this.to('SearchGraph');
    return this;
  }

  /**
   * Grants permission to start data ingest for a member account that has a status of ACCEPTED_BUT_DISABLED.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/detective/latest/APIReference/API_StartMonitoringMember.html
   */
  public toStartMonitoringMember() {
    this.to('StartMonitoringMember');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptInvitation",
      "CreateGraph",
      "CreateMembers",
      "DeleteGraph",
      "DeleteMembers",
      "DisassociateMembership",
      "RejectInvitation",
      "StartMonitoringMember"
    ],
    "Read": [
      "GetFreeTrialEligibility",
      "GetGraphIngestState",
      "GetMembers",
      "GetPricingInformation",
      "GetUsageInformation",
      "SearchGraph"
    ],
    "List": [
      "ListGraphs",
      "ListInvitations",
      "ListMembers"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGraph(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:detective:${Region}:${Account}:graph:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
