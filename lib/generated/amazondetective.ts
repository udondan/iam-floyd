import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [detective](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondetective.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Detective extends PolicyStatement {
  public servicePrefix = 'detective';
  protected actionList: Actions = {
    "AcceptInvitation": {
      "url": "https://docs.aws.amazon.com/detective/latest/APIReference/API_AcceptInvitation.html",
      "description": "Grants permission to accept an invitation to become a member of a behavior graph",
      "accessLevel": "Write",
      "resourceTypes": {
        "Graph": {
          "required": true
        }
      }
    },
    "CreateGraph": {
      "url": "https://docs.aws.amazon.com/detective/latest/APIReference/API_CreateGraph.html",
      "description": "Grants permission to create a behavior graph and begin to aggregate security information",
      "accessLevel": "Write"
    },
    "CreateMembers": {
      "url": "https://docs.aws.amazon.com/detective/latest/APIReference/API_CreateMembers.html",
      "description": "Grants permission to request the membership of one or more accounts in a behavior graph managed by this account",
      "accessLevel": "Write",
      "resourceTypes": {
        "Graph": {
          "required": true
        }
      }
    },
    "DeleteGraph": {
      "url": "https://docs.aws.amazon.com/detective/latest/APIReference/API_DeleteGraph.html",
      "description": "Grants permission to delete a behavior graph and stop aggregating security information",
      "accessLevel": "Write",
      "resourceTypes": {
        "Graph": {
          "required": true
        }
      }
    },
    "DeleteMembers": {
      "url": "https://docs.aws.amazon.com/detective/latest/APIReference/API_DeleteMembers.html",
      "description": "Grants permission to remove member accounts from a behavior graph managed by this account",
      "accessLevel": "Write",
      "resourceTypes": {
        "Graph": {
          "required": true
        }
      }
    },
    "DisassociateMembership": {
      "url": "https://docs.aws.amazon.com/detective/latest/APIReference/API_DisassociateMembership.html",
      "description": "Grants permission to remove the association of this account with a behavior graph",
      "accessLevel": "Write",
      "resourceTypes": {
        "Graph": {
          "required": true
        }
      }
    },
    "GetFreeTrialEligibility": {
      "url": "",
      "description": "Grants permission to retrieve a behavior graph's eligibility for a free trial period",
      "accessLevel": "Read",
      "resourceTypes": {
        "Graph": {
          "required": true
        }
      }
    },
    "GetGraphIngestState": {
      "url": "",
      "description": "Grants permission to retrieve the data ingestion state of a behavior graph",
      "accessLevel": "Read",
      "resourceTypes": {
        "Graph": {
          "required": true
        }
      }
    },
    "GetMembers": {
      "url": "https://docs.aws.amazon.com/detective/latest/APIReference/API_GetMembers.html",
      "description": "Grants permission to retrieve details on specified members of a behavior graph",
      "accessLevel": "Read",
      "resourceTypes": {
        "Graph": {
          "required": true
        }
      }
    },
    "GetPricingInformation": {
      "url": "",
      "description": "Grants permission to retrieve information about Amazon Detective's pricing",
      "accessLevel": "Read"
    },
    "GetUsageInformation": {
      "url": "",
      "description": "Grants permission to list usage information of a behavior graph",
      "accessLevel": "Read",
      "resourceTypes": {
        "Graph": {
          "required": true
        }
      }
    },
    "ListGraphs": {
      "url": "https://docs.aws.amazon.com/detective/latest/APIReference/API_ListGraphs.html",
      "description": "Grants permission to list behavior graphs managed by this account",
      "accessLevel": "List"
    },
    "ListInvitations": {
      "url": "https://docs.aws.amazon.com/detective/latest/APIReference/API_ListInvitations.html",
      "description": "Grants permission to retrieve details on the behavior graphs to which this account has been invited to join",
      "accessLevel": "List"
    },
    "ListMembers": {
      "url": "https://docs.aws.amazon.com/detective/latest/APIReference/API_ListMembers.html",
      "description": "Grants permission to retrieve details on all members of a behavior graph",
      "accessLevel": "List",
      "resourceTypes": {
        "Graph": {
          "required": true
        }
      }
    },
    "RejectInvitation": {
      "url": "https://docs.aws.amazon.com/detective/latest/APIReference/API_RejectInvitation.html",
      "description": "Grants permission to reject an invitation to become a member of a behavior graph",
      "accessLevel": "Write",
      "resourceTypes": {
        "Graph": {
          "required": true
        }
      }
    },
    "SearchGraph": {
      "url": "",
      "description": "Grants permission to search the data stored in a behavior graph",
      "accessLevel": "Read",
      "resourceTypes": {
        "Graph": {
          "required": true
        }
      }
    },
    "StartMonitoringMember": {
      "url": "https://docs.aws.amazon.com/detective/latest/APIReference/API_StartMonitoringMember.html",
      "description": "Grants permission to start data ingest for a member account that has a status of ACCEPTED_BUT_DISABLED.",
      "accessLevel": "Write",
      "resourceTypes": {
        "Graph": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "Graph": {
      "name": "Graph",
      "url": "https://docs.aws.amazon.com/detective/latest/adminguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-resources",
      "arn": "arn:${Partition}:detective:${Region}:${Account}:graph:${ResourceId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [detective](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondetective.html).
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
    this.add('detective:AcceptInvitation');
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
    this.add('detective:CreateGraph');
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
    this.add('detective:CreateMembers');
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
    this.add('detective:DeleteGraph');
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
    this.add('detective:DeleteMembers');
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
    this.add('detective:DisassociateMembership');
    return this;
  }

  /**
   * Grants permission to retrieve a behavior graph's eligibility for a free trial period
   *
   * Access Level: Read
   */
  public toGetFreeTrialEligibility() {
    this.add('detective:GetFreeTrialEligibility');
    return this;
  }

  /**
   * Grants permission to retrieve the data ingestion state of a behavior graph
   *
   * Access Level: Read
   */
  public toGetGraphIngestState() {
    this.add('detective:GetGraphIngestState');
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
    this.add('detective:GetMembers');
    return this;
  }

  /**
   * Grants permission to retrieve information about Amazon Detective's pricing
   *
   * Access Level: Read
   */
  public toGetPricingInformation() {
    this.add('detective:GetPricingInformation');
    return this;
  }

  /**
   * Grants permission to list usage information of a behavior graph
   *
   * Access Level: Read
   */
  public toGetUsageInformation() {
    this.add('detective:GetUsageInformation');
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
    this.add('detective:ListGraphs');
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
    this.add('detective:ListInvitations');
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
    this.add('detective:ListMembers');
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
    this.add('detective:RejectInvitation');
    return this;
  }

  /**
   * Grants permission to search the data stored in a behavior graph
   *
   * Access Level: Read
   */
  public toSearchGraph() {
    this.add('detective:SearchGraph');
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
    this.add('detective:StartMonitoringMember');
    return this;
  }

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
