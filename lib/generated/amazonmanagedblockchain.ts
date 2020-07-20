import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [managedblockchain](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedblockchain.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Managedblockchain extends PolicyStatement {
  public servicePrefix = 'managedblockchain';
  protected actionList: Actions = {
    "CreateMember": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateMember.html",
      "description": "Grants permission to create a member of an Amazon Managed Blockchain network.",
      "accessLevel": "Write",
      "resourceTypes": {
        "network": {
          "required": true
        }
      }
    },
    "CreateNetwork": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateNetwork.html",
      "description": "Grants permission to create an Amazon Managed Blockchain network.",
      "accessLevel": "Write"
    },
    "CreateNode": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateNode.html",
      "description": "Grants permission to create a node within a member of an Amazon Managed Blockchain network.",
      "accessLevel": "Write",
      "resourceTypes": {
        "member": {
          "required": true
        }
      }
    },
    "CreateProposal": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateProposal.html",
      "description": "Grants permission to create a proposal that other blockchain network members can vote on to add or remove a member in an Amazon Managed Blockchain network.",
      "accessLevel": "Write",
      "resourceTypes": {
        "network": {
          "required": true
        }
      }
    },
    "DeleteMember": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteMember.html",
      "description": "Grants permission to delete a member and all associated resources from an Amazon Managed Blockchain network.",
      "accessLevel": "Write",
      "resourceTypes": {
        "member": {
          "required": true
        }
      }
    },
    "DeleteNode": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteNode.html",
      "description": "Grants permission to delete a node from a member of an Amazon Managed Blockchain network.",
      "accessLevel": "Write",
      "resourceTypes": {
        "node": {
          "required": true
        }
      }
    },
    "GetMember": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetMember.html",
      "description": "Grants permission to return detailed information about a member of an Amazon Managed Blockchain network.",
      "accessLevel": "Read",
      "resourceTypes": {
        "member": {
          "required": true
        }
      }
    },
    "GetNetwork": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetNetwork.html",
      "description": "Grants permission to return detailed information about an Amazon Managed Blockchain network.",
      "accessLevel": "Read",
      "resourceTypes": {
        "network": {
          "required": true
        }
      }
    },
    "GetNode": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetNode.html",
      "description": "Grants permission to return detailed information about a node within a member of an Amazon Managed Blockchain network.",
      "accessLevel": "Read",
      "resourceTypes": {
        "node": {
          "required": true
        }
      }
    },
    "GetProposal": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetProposal.html",
      "description": "Grants permission to return detailed information about a proposal of an Amazon Managed Blockchain network.",
      "accessLevel": "Read",
      "resourceTypes": {
        "proposal": {
          "required": true
        }
      }
    },
    "ListInvitations": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListInvitations.html",
      "description": "Grants permission to list the invitations extended to the active AWS account from any Managed Blockchain network.",
      "accessLevel": "List"
    },
    "ListMembers": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListMembers.html",
      "description": "Grants permission to list the members of an Amazon Managed Blockchain network and the properties of their memberships.",
      "accessLevel": "List",
      "resourceTypes": {
        "network": {
          "required": true
        }
      }
    },
    "ListNetworks": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListNetworks.html",
      "description": "Grants permission to return information about the Amazon Managed Blockchain networks in which the current AWS account has members.",
      "accessLevel": "List"
    },
    "ListNodes": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListNodes.html",
      "description": "Grants permission to list the nodes within a member of an Amazon Managed Blockchain network.",
      "accessLevel": "List",
      "resourceTypes": {
        "member": {
          "required": true
        }
      }
    },
    "ListProposalVotes": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListProposalVotes.html",
      "description": "Grants permission to list all votes for a proposal, including the value of the vote and the unique identifier of the member that cast the vote for the given Amazon Managed Blockchain network.",
      "accessLevel": "List",
      "resourceTypes": {
        "proposal": {
          "required": true
        }
      }
    },
    "ListProposals": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListProposals.html",
      "description": "Grants permission to list proposals for the given Amazon Managed Blockchain network.",
      "accessLevel": "List",
      "resourceTypes": {
        "network": {
          "required": true
        }
      }
    },
    "RejectInvitation": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_RejectInvitation.html",
      "description": "Grants permission to reject the invitation to join the blockchain network.",
      "accessLevel": "Write",
      "resourceTypes": {
        "invitation": {
          "required": true
        }
      }
    },
    "UpdateMember": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_UpdateMember.html",
      "description": "Grants permission to update a member of an Amazon Managed Blockchain network.",
      "accessLevel": "Write",
      "resourceTypes": {
        "member": {
          "required": true
        }
      }
    },
    "UpdateNode": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_UpdateNode.html",
      "description": "Grants permission to update a node from a member of an Amazon Managed Blockchain network.",
      "accessLevel": "Write",
      "resourceTypes": {
        "node": {
          "required": true
        }
      }
    },
    "VoteOnProposal": {
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_VoteOnProposal.html",
      "description": "Grants permission to cast a vote for a proposal on behalf of the blockchain network member specified.",
      "accessLevel": "Write",
      "resourceTypes": {
        "proposal": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "network": {
      "name": "network",
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Network.html",
      "arn": "arn:${Partition}:managedblockchain:${Region}::networks/${NetworkId}",
      "conditionKeys": []
    },
    "member": {
      "name": "member",
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Member.html",
      "arn": "arn:${Partition}:managedblockchain:${Region}:${Account}:members/${MemberId}",
      "conditionKeys": []
    },
    "node": {
      "name": "node",
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Node.html",
      "arn": "arn:${Partition}:managedblockchain:${Region}:${Account}:nodes/${NodeId}",
      "conditionKeys": []
    },
    "proposal": {
      "name": "proposal",
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Proposal.html",
      "arn": "arn:${Partition}:managedblockchain:${Region}::proposals/${ProposalId}",
      "conditionKeys": []
    },
    "invitation": {
      "name": "invitation",
      "url": "https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_Invitation.html",
      "arn": "arn:${Partition}:managedblockchain:${Region}:${Account}:invitations/${InvitationId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [managedblockchain](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedblockchain.html).
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
  public createMember() {
    this.add('managedblockchain:CreateMember');
    return this;
  }

  /**
   * Grants permission to create an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateNetwork.html
   */
  public createNetwork() {
    this.add('managedblockchain:CreateNetwork');
    return this;
  }

  /**
   * Grants permission to create a node within a member of an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateNode.html
   */
  public createNode() {
    this.add('managedblockchain:CreateNode');
    return this;
  }

  /**
   * Grants permission to create a proposal that other blockchain network members can vote on to add or remove a member in an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_CreateProposal.html
   */
  public createProposal() {
    this.add('managedblockchain:CreateProposal');
    return this;
  }

  /**
   * Grants permission to delete a member and all associated resources from an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteMember.html
   */
  public deleteMember() {
    this.add('managedblockchain:DeleteMember');
    return this;
  }

  /**
   * Grants permission to delete a node from a member of an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_DeleteNode.html
   */
  public deleteNode() {
    this.add('managedblockchain:DeleteNode');
    return this;
  }

  /**
   * Grants permission to return detailed information about a member of an Amazon Managed Blockchain network.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetMember.html
   */
  public getMember() {
    this.add('managedblockchain:GetMember');
    return this;
  }

  /**
   * Grants permission to return detailed information about an Amazon Managed Blockchain network.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetNetwork.html
   */
  public getNetwork() {
    this.add('managedblockchain:GetNetwork');
    return this;
  }

  /**
   * Grants permission to return detailed information about a node within a member of an Amazon Managed Blockchain network.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetNode.html
   */
  public getNode() {
    this.add('managedblockchain:GetNode');
    return this;
  }

  /**
   * Grants permission to return detailed information about a proposal of an Amazon Managed Blockchain network.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_GetProposal.html
   */
  public getProposal() {
    this.add('managedblockchain:GetProposal');
    return this;
  }

  /**
   * Grants permission to list the invitations extended to the active AWS account from any Managed Blockchain network.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListInvitations.html
   */
  public listInvitations() {
    this.add('managedblockchain:ListInvitations');
    return this;
  }

  /**
   * Grants permission to list the members of an Amazon Managed Blockchain network and the properties of their memberships.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListMembers.html
   */
  public listMembers() {
    this.add('managedblockchain:ListMembers');
    return this;
  }

  /**
   * Grants permission to return information about the Amazon Managed Blockchain networks in which the current AWS account has members.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListNetworks.html
   */
  public listNetworks() {
    this.add('managedblockchain:ListNetworks');
    return this;
  }

  /**
   * Grants permission to list the nodes within a member of an Amazon Managed Blockchain network.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListNodes.html
   */
  public listNodes() {
    this.add('managedblockchain:ListNodes');
    return this;
  }

  /**
   * Grants permission to list all votes for a proposal, including the value of the vote and the unique identifier of the member that cast the vote for the given Amazon Managed Blockchain network.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListProposalVotes.html
   */
  public listProposalVotes() {
    this.add('managedblockchain:ListProposalVotes');
    return this;
  }

  /**
   * Grants permission to list proposals for the given Amazon Managed Blockchain network.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_ListProposals.html
   */
  public listProposals() {
    this.add('managedblockchain:ListProposals');
    return this;
  }

  /**
   * Grants permission to reject the invitation to join the blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_RejectInvitation.html
   */
  public rejectInvitation() {
    this.add('managedblockchain:RejectInvitation');
    return this;
  }

  /**
   * Grants permission to update a member of an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_UpdateMember.html
   */
  public updateMember() {
    this.add('managedblockchain:UpdateMember');
    return this;
  }

  /**
   * Grants permission to update a node from a member of an Amazon Managed Blockchain network.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_UpdateNode.html
   */
  public updateNode() {
    this.add('managedblockchain:UpdateNode');
    return this;
  }

  /**
   * Grants permission to cast a vote for a proposal on behalf of the blockchain network member specified.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/managed-blockchain/latest/APIReference/API_VoteOnProposal.html
   */
  public voteOnProposal() {
    this.add('managedblockchain:VoteOnProposal');
    return this;
  }

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
