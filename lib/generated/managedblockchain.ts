import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [managedblockchain](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedblockchain.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Managedblockchain extends PolicyStatement {
  public servicePrefix = 'managedblockchain';

  /**
   * Statement provider for service [managedblockchain](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedblockchain.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a member of an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateMember.html
   */
  public toCreateMember() {
    return this.to('CreateMember');
  }

  /**
   * Grants permission to create an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateNetwork.html
   */
  public toCreateNetwork() {
    return this.to('CreateNetwork');
  }

  /**
   * Grants permission to create a node within a member of an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateNode.html
   */
  public toCreateNode() {
    return this.to('CreateNode');
  }

  /**
   * Grants permission to create a proposal that other blockchain network members can vote on to add or remove a member in an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateProposal.html
   */
  public toCreateProposal() {
    return this.to('CreateProposal');
  }

  /**
   * Grants permission to delete a member and all associated resources from an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteMember.html
   */
  public toDeleteMember() {
    return this.to('DeleteMember');
  }

  /**
   * Grants permission to delete a node from a member of an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteNode.html
   */
  public toDeleteNode() {
    return this.to('DeleteNode');
  }

  /**
   * Grants permission to return detailed information about a member of an Amazon Managed Blockchain network.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetMember.html
   */
  public toGetMember() {
    return this.to('GetMember');
  }

  /**
   * Grants permission to return detailed information about an Amazon Managed Blockchain network.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetNetwork.html
   */
  public toGetNetwork() {
    return this.to('GetNetwork');
  }

  /**
   * Grants permission to return detailed information about a node within a member of an Amazon Managed Blockchain network.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetNode.html
   */
  public toGetNode() {
    return this.to('GetNode');
  }

  /**
   * Grants permission to return detailed information about a proposal of an Amazon Managed Blockchain network.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetProposal.html
   */
  public toGetProposal() {
    return this.to('GetProposal');
  }

  /**
   * Grants permission to list the invitations extended to the active AWS account from any Managed Blockchain network.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListInvitations.html
   */
  public toListInvitations() {
    return this.to('ListInvitations');
  }

  /**
   * Grants permission to list the members of an Amazon Managed Blockchain network and the properties of their memberships.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListMembers.html
   */
  public toListMembers() {
    return this.to('ListMembers');
  }

  /**
   * Grants permission to return information about the Amazon Managed Blockchain networks in which the current AWS account has members.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListNetworks.html
   */
  public toListNetworks() {
    return this.to('ListNetworks');
  }

  /**
   * Grants permission to list the nodes within a member of an Amazon Managed Blockchain network.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListNodes.html
   */
  public toListNodes() {
    return this.to('ListNodes');
  }

  /**
   * Grants permission to list all votes for a proposal, including the value of the vote and the unique identifier of the member that cast the vote for the given Amazon Managed Blockchain network.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListProposalVotes.html
   */
  public toListProposalVotes() {
    return this.to('ListProposalVotes');
  }

  /**
   * Grants permission to list proposals for the given Amazon Managed Blockchain network.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListProposals.html
   */
  public toListProposals() {
    return this.to('ListProposals');
  }

  /**
   * Grants permission to reject the invitation to join the blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_RejectInvitation.html
   */
  public toRejectInvitation() {
    return this.to('RejectInvitation');
  }

  /**
   * Grants permission to update a member of an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_UpdateMember.html
   */
  public toUpdateMember() {
    return this.to('UpdateMember');
  }

  /**
   * Grants permission to update a node from a member of an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_UpdateNode.html
   */
  public toUpdateNode() {
    return this.to('UpdateNode');
  }

  /**
   * Grants permission to cast a vote for a proposal on behalf of the blockchain network member specified.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_VoteOnProposal.html
   */
  public toVoteOnProposal() {
    return this.to('VoteOnProposal');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateMember",
      "CreateNetwork",
      "CreateNode",
      "CreateProposal",
      "DeleteMember",
      "DeleteNode",
      "RejectInvitation",
      "UpdateMember",
      "UpdateNode",
      "VoteOnProposal"
    ],
    "Read": [
      "GetMember",
      "GetNetwork",
      "GetNode",
      "GetProposal"
    ],
    "List": [
      "ListInvitations",
      "ListMembers",
      "ListNetworks",
      "ListNodes",
      "ListProposalVotes",
      "ListProposals"
    ]
  };

  /**
   * Adds a resource of type network to the statement
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Network.html
   *
   * @param networkId - Identifier for the networkId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onNetwork(networkId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:managedblockchain:${Region}::networks/${NetworkId}';
    arn = arn.replace('${NetworkId}', networkId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type member to the statement
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Member.html
   *
   * @param memberId - Identifier for the memberId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onMember(memberId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:managedblockchain:${Region}:${Account}:members/${MemberId}';
    arn = arn.replace('${MemberId}', memberId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type node to the statement
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Node.html
   *
   * @param nodeId - Identifier for the nodeId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onNode(nodeId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:managedblockchain:${Region}:${Account}:nodes/${NodeId}';
    arn = arn.replace('${NodeId}', nodeId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type proposal to the statement
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Proposal.html
   *
   * @param proposalId - Identifier for the proposalId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProposal(proposalId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:managedblockchain:${Region}::proposals/${ProposalId}';
    arn = arn.replace('${ProposalId}', proposalId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type invitation to the statement
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Invitation.html
   *
   * @param invitationId - Identifier for the invitationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onInvitation(invitationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:managedblockchain:${Region}:${Account}:invitations/${InvitationId}';
    arn = arn.replace('${InvitationId}', invitationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
