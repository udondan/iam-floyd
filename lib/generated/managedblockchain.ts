import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an Amazon Managed Blockchain accessor
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateAccessor.html
   */
  public toCreateAccessor() {
    return this.to('CreateAccessor');
  }

  /**
   * Grants permission to create a member of an Amazon Managed Blockchain network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateMember.html
   */
  public toCreateMember() {
    return this.to('CreateMember');
  }

  /**
   * Grants permission to create an Amazon Managed Blockchain network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateNetwork.html
   */
  public toCreateNetwork() {
    return this.to('CreateNetwork');
  }

  /**
   * Grants permission to create a node within a member of an Amazon Managed Blockchain network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateNode.html
   */
  public toCreateNode() {
    return this.to('CreateNode');
  }

  /**
   * Grants permission to create a proposal that other blockchain network members can vote on to add or remove a member in an Amazon Managed Blockchain network
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateProposal.html
   */
  public toCreateProposal() {
    return this.to('CreateProposal');
  }

  /**
   * Grants permission to delete an Amazon Managed Blockchain accessor
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteAccessor.html
   */
  public toDeleteAccessor() {
    return this.to('DeleteAccessor');
  }

  /**
   * Grants permission to delete a member and all associated resources from an Amazon Managed Blockchain network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteMember.html
   */
  public toDeleteMember() {
    return this.to('DeleteMember');
  }

  /**
   * Grants permission to delete a node from a member of an Amazon Managed Blockchain network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteNode.html
   */
  public toDeleteNode() {
    return this.to('DeleteNode');
  }

  /**
   * Grants permission to send HTTP GET requests to an Ethereum node
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/security_iam_id-based-policy-examples.html
   */
  public toGET() {
    return this.to('GET');
  }

  /**
   * Grants permission to return detailed information about an Amazon Managed Blockchain accessor
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetAccessor.html
   */
  public toGetAccessor() {
    return this.to('GetAccessor');
  }

  /**
   * Grants permission to return detailed information about a member of an Amazon Managed Blockchain network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetMember.html
   */
  public toGetMember() {
    return this.to('GetMember');
  }

  /**
   * Grants permission to return detailed information about an Amazon Managed Blockchain network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetNetwork.html
   */
  public toGetNetwork() {
    return this.to('GetNetwork');
  }

  /**
   * Grants permission to return detailed information about a node within a member of an Amazon Managed Blockchain network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetNode.html
   */
  public toGetNode() {
    return this.to('GetNode');
  }

  /**
   * Grants permission to return detailed information about a proposal of an Amazon Managed Blockchain network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetProposal.html
   */
  public toGetProposal() {
    return this.to('GetProposal');
  }

  /**
   * Grants permission to create WebSocket connections to an Ethereum node
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/security_iam_id-based-policy-examples.html
   */
  public toInvoke() {
    return this.to('Invoke');
  }

  /**
   * Grants permission to invoke the Bitcoin Mainnet RPCs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/ambbtc-dg/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-access-bitcoin-networks
   */
  public toInvokeRpcBitcoinMainnet() {
    return this.to('InvokeRpcBitcoinMainnet');
  }

  /**
   * Grants permission to invoke the Bitcoin Testnet RPCs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/ambbtc-dg/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-access-bitcoin-networks
   */
  public toInvokeRpcBitcoinTestnet() {
    return this.to('InvokeRpcBitcoinTestnet');
  }

  /**
   * Grants permission to invoke the Polygon Mainnet RPCs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/ambp-dg/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-access-polygon-networks
   */
  public toInvokeRpcPolygonMainnet() {
    return this.to('InvokeRpcPolygonMainnet');
  }

  /**
   * Grants permission to invoke the Polygon Mumbai Testnet RPCs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/ambp-dg/security_iam_id-based-policy-examples.html#security_iam_id-based-policy-examples-access-polygon-networks
   */
  public toInvokeRpcPolygonMumbaiTestnet() {
    return this.to('InvokeRpcPolygonMumbaiTestnet');
  }

  /**
   * Grants permission to list the Amazon Managed Blockchain accessors owned by the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListAccessors.html
   */
  public toListAccessors() {
    return this.to('ListAccessors');
  }

  /**
   * Grants permission to list the invitations extended to the active AWS account from any Managed Blockchain network
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListInvitations.html
   */
  public toListInvitations() {
    return this.to('ListInvitations');
  }

  /**
   * Grants permission to list the members of an Amazon Managed Blockchain network and the properties of their memberships
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListMembers.html
   */
  public toListMembers() {
    return this.to('ListMembers');
  }

  /**
   * Grants permission to list the Amazon Managed Blockchain networks in which the current AWS account participates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListNetworks.html
   */
  public toListNetworks() {
    return this.to('ListNetworks');
  }

  /**
   * Grants permission to list the nodes within a member of an Amazon Managed Blockchain network
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListNodes.html
   */
  public toListNodes() {
    return this.to('ListNodes');
  }

  /**
   * Grants permission to list all votes for a proposal, including the value of the vote and the unique identifier of the member that cast the vote for the given Amazon Managed Blockchain network
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListProposalVotes.html
   */
  public toListProposalVotes() {
    return this.to('ListProposalVotes');
  }

  /**
   * Grants permission to list proposals for the given Amazon Managed Blockchain network
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListProposals.html
   */
  public toListProposals() {
    return this.to('ListProposals');
  }

  /**
   * Grants permission to view tags associated with an Amazon Managed Blockchain resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to send HTTP POST requests to an Ethereum node
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/security_iam_id-based-policy-examples.html
   */
  public toPOST() {
    return this.to('POST');
  }

  /**
   * Grants permission to reject the invitation to join the blockchain network
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_RejectInvitation.html
   */
  public toRejectInvitation() {
    return this.to('RejectInvitation');
  }

  /**
   * Grants permission to add tags to an Amazon Managed Blockchain resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from an Amazon Managed Blockchain resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a member of an Amazon Managed Blockchain network
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
   * Grants permission to update a node from a member of an Amazon Managed Blockchain network
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
   * Grants permission to cast a vote for a proposal on behalf of the blockchain network member specified
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_VoteOnProposal.html
   */
  public toVoteOnProposal() {
    return this.to('VoteOnProposal');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAccessor',
      'CreateMember',
      'CreateNetwork',
      'CreateNode',
      'CreateProposal',
      'DeleteAccessor',
      'DeleteMember',
      'DeleteNode',
      'RejectInvitation',
      'UpdateMember',
      'UpdateNode',
      'VoteOnProposal'
    ],
    'Permissions management': [
      'GET',
      'Invoke',
      'POST'
    ],
    Read: [
      'GetAccessor',
      'GetMember',
      'GetNetwork',
      'GetNode',
      'GetProposal',
      'InvokeRpcBitcoinMainnet',
      'InvokeRpcBitcoinTestnet',
      'InvokeRpcPolygonMainnet',
      'InvokeRpcPolygonMumbaiTestnet',
      'ListProposalVotes',
      'ListTagsForResource'
    ],
    List: [
      'ListAccessors',
      'ListInvitations',
      'ListMembers',
      'ListNetworks',
      'ListNodes',
      'ListProposals'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type network to the statement
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Network.html
   *
   * @param networkId - Identifier for the networkId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetwork(networkId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:managedblockchain:${ region ?? this.defaultRegion }::networks/${ networkId }`);
  }

  /**
   * Adds a resource of type member to the statement
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Member.html
   *
   * @param memberId - Identifier for the memberId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMember(memberId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:managedblockchain:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:members/${ memberId }`);
  }

  /**
   * Adds a resource of type node to the statement
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Node.html
   *
   * @param nodeId - Identifier for the nodeId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNode(nodeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:managedblockchain:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:nodes/${ nodeId }`);
  }

  /**
   * Adds a resource of type proposal to the statement
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Proposal.html
   *
   * @param proposalId - Identifier for the proposalId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProposal(proposalId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:managedblockchain:${ region ?? this.defaultRegion }::proposals/${ proposalId }`);
  }

  /**
   * Adds a resource of type invitation to the statement
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Invitation.html
   *
   * @param invitationId - Identifier for the invitationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInvitation(invitationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:managedblockchain:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:invitations/${ invitationId }`);
  }

  /**
   * Adds a resource of type accessor to the statement
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Accessor.html
   *
   * @param accessorId - Identifier for the accessorId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccessor(accessorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:managedblockchain:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:accessors/${ accessorId }`);
  }

  /**
   * Filters actions based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAccessor()
   * - .toCreateMember()
   * - .toCreateNetwork()
   * - .toCreateNode()
   * - .toCreateProposal()
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
   * Filters actions based on the tags associated with an Amazon Managed Blockchain resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - network
   * - member
   * - node
   * - proposal
   * - invitation
   * - accessor
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters actions based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAccessor()
   * - .toCreateMember()
   * - .toCreateNetwork()
   * - .toCreateNode()
   * - .toCreateProposal()
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
