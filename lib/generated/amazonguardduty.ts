import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service guardduty
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonguardduty.html
 */
export class Guardduty extends PolicyStatement {
  public servicePrefix = 'guardduty';
  public actions: Actions = {
    "AcceptInvitation": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_AcceptInvitation.html",
      "description": "Grants permission to accept invitations to become a GuardDuty member account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "ArchiveFindings": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ArchiveFindings.html",
      "description": "Grants permission to archive GuardDuty findings.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "CreateDetector": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateDetector.html",
      "description": "Grants permission to create a detector.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateFilter": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateFilter.html",
      "description": "Grants permission to create GuardDuty filters. A filters defines finding attributes and conditions used to filter findings.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateIPSet": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateIPSet.html",
      "description": "Grants permission to create an IPSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateMembers": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html",
      "description": "Grants permission to create GuardDuty member accounts. The account used to create a member becomes the GuardDuty master account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "CreatePublishingDestination": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreatePublishingDestination.html",
      "description": "Grants permission to create a publishing destination.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "CreateSampleFindings": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateSampleFindings.html",
      "description": "Grants permission to create sample findings.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "CreateThreatIntelSet": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateThreatIntelSet.html",
      "description": "Grants permission to create GuardDuty ThreatIntelSets. A ThreatIntelSet consists of known malicious IP addresses used by GuardDuty to generate findings.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeclineInvitations": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeclineInvitations.html",
      "description": "Grants permission to decline invitations to become a GuardDuty member account.",
      "accessLevel": "Write"
    },
    "DeleteDetector": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteDetector.html",
      "description": "Grants permission to delete GuardDuty detectors.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "DeleteFilter": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteFilter.html",
      "description": "Grants permission to delete GuardDuty filters.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        },
        "filter": {
          "required": true
        }
      }
    },
    "DeleteIPSet": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteIPSet.html",
      "description": "Grants permission to delete GuardDuty IPSets.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        },
        "ipset": {
          "required": true
        }
      }
    },
    "DeleteInvitations": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteInvitations.html",
      "description": "Grants permission to delete invitations to become a GuardDuty member account.",
      "accessLevel": "Write"
    },
    "DeleteMembers": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html",
      "description": "Grants permission to delete GuardDuty member accounts.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "DeletePublishingDestination": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeletePublishingDestination.html",
      "description": "Grants permission to delete a publishing destination.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        },
        "publishingdestination": {
          "required": true
        }
      }
    },
    "DeleteThreatIntelSet": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteThreatIntelSet.html",
      "description": "Grants permission to delete GuardDuty ThreatIntelSets.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        },
        "threatintelset": {
          "required": true
        }
      }
    },
    "DescribeOrganizationConfiguration": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribeOrganizationConfiguration.html",
      "description": "Grants permission to retrieve details about the delegated administrator associated with a GuardDuty detector.",
      "accessLevel": "Read",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "DescribePublishingDestination": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribePublishingDestination.html",
      "description": "Grants permission to retrieve details about a publishing destination.",
      "accessLevel": "Read",
      "resourceTypes": {
        "detector": {
          "required": true
        },
        "publishingdestination": {
          "required": true
        }
      }
    },
    "DisableOrganizationAdminAccount": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisableOrganizationAdminAccount.html",
      "description": "Grants permission to disable the organization delegated administrator for GuardDuty.",
      "accessLevel": "Write"
    },
    "DisassociateFromMasterAccount": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateFromMasterAccount.html",
      "description": "Grants permission to disassociate a GuardDuty member account from its GuardDuty master account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "DisassociateMembers": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateMembers.html",
      "description": "Grants permission to disassociate GuardDuty member accounts from their master GuardDuty account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "EnableOrganizationAdminAccount": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_EnableOrganizationAdminAccount.html",
      "description": "Grants permission to enable an organization delegated administrator for GuardDuty.",
      "accessLevel": "Write"
    },
    "GetDetector": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetDetector.html",
      "description": "Grants permission to retrieve GuardDuty detectors.",
      "accessLevel": "Read",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "GetFilter": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFilter.html",
      "description": "Grants permission to retrieve GuardDuty filters.",
      "accessLevel": "Read",
      "resourceTypes": {
        "detector": {
          "required": true
        },
        "filter": {
          "required": true
        }
      }
    },
    "GetFindings": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFindings.html",
      "description": "Grants permission to retrieve GuardDuty findings.",
      "accessLevel": "Read",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "GetFindingsStatistics": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFindingsStatistics.html",
      "description": "Grants permission to retrieve a list of GuardDuty finding statistics.",
      "accessLevel": "Read",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "GetIPSet": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetIPSet.html",
      "description": "Grants permsission to retrieve GuardDuty IPSets.",
      "accessLevel": "Read",
      "resourceTypes": {
        "detector": {
          "required": true
        },
        "ipset": {
          "required": true
        }
      }
    },
    "GetInvitationsCount": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetInvitationsCount.html",
      "description": "Grants permission to retrieve the count of all GuardDuty invitations sent to a specified account. The count does not include an accepted invitation.",
      "accessLevel": "Read"
    },
    "GetMasterAccount": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMasterAccount.html",
      "description": "Grants permission to retrieve details of the GuardDuty master account associated with a member account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "GetMembers": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMembers.html",
      "description": "Grants permission to retrieve the member accounts associated with a master account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "GetThreatIntelSet": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetThreatIntelSet.html",
      "description": "Grants permission to retrieve GuardDuty ThreatIntelSets.",
      "accessLevel": "Read",
      "resourceTypes": {
        "detector": {
          "required": true
        },
        "threatintelset": {
          "required": true
        }
      }
    },
    "InviteMembers": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html",
      "description": "Grants permission to invite other AWS accounts to enable GuardDuty and become GuardDuty member accounts.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "ListDetectors": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html",
      "description": "Grants permission to retrieve a list of GuardDuty detectors.",
      "accessLevel": "List"
    },
    "ListFilters": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListFilters.html",
      "description": "Grants permission to retrieve a list of GuardDuty filters.",
      "accessLevel": "List",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "ListFindings": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListFindings.html",
      "description": "Grants permission to retrieve a list of GuardDuty findings.",
      "accessLevel": "List",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "ListInvitations": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListInvitations.html",
      "description": "Grants permission to retrieve a lists of all of the GuardDuty membership invitations that were sent to an AWS account.",
      "accessLevel": "List"
    },
    "ListMembers": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListMembers.html",
      "description": "Grants permission to retrierve a lsit of GuardDuty member accounts associated with a master account.",
      "accessLevel": "List",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "ListOrganizationAdminAccounts": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListOrganizationAdminAccounts.html",
      "description": "Grants permission to list details about the organization delegated administrator for GuardDuty.",
      "accessLevel": "List"
    },
    "ListPublishingDestinations": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListPublishingDestinations.html",
      "description": "Grants permission to retrieve a list of publishing destinations.",
      "accessLevel": "List",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to retrieve a list of tags associated with a GuardDuty resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "detector": {
          "required": false
        },
        "filter": {
          "required": false
        },
        "ipset": {
          "required": false
        },
        "threatintelset": {
          "required": false
        }
      }
    },
    "ListThreatIntelSets": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListThreatIntelSets.html",
      "description": "Grants permission to retrieve a list of GuardDuty ThreatIntelSets.",
      "accessLevel": "List",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "StartMonitoringMembers": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StartMonitoringMembers.html",
      "description": "Grants permission to a master account to monitor findings from GuardDuty member accounts. Use this after disabling monitoring of member accounts using the StopMonitoringMembers operation.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "StopMonitoringMembers": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StopMonitoringMembers.html",
      "description": "Grants permission to disable monitoring findings from member accounts.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to add tags to a GuardDuty resource. There is a limit of 50 tags per resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": false
        },
        "filter": {
          "required": false
        },
        "ipset": {
          "required": false
        },
        "threatintelset": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UnarchiveFindings": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UnarchiveFindings.html",
      "description": "Grants permission to unarchive GuardDuty findings.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to remove tags from a GuardDuty resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": false
        },
        "filter": {
          "required": false
        },
        "ipset": {
          "required": false
        },
        "threatintelset": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateDetector": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateDetector.html",
      "description": "Grants permission to update GuardDuty detectors.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "UpdateFilter": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateFilter.html",
      "description": "Grants permission to updates GuardDuty filters.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        },
        "filter": {
          "required": true
        }
      }
    },
    "UpdateFindingsFeedback": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateFindingsFeedback.html",
      "description": "Grants permission to update findings feedback to mark GuardDuty findings as useful or not useful.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "UpdateIPSet": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateIPSet.html",
      "description": "Grants permission to update GuardDuty IPSets.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        },
        "ipset": {
          "required": true
        }
      }
    },
    "UpdateOrganizationConfiguration": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateOrganizationConfiguration.html",
      "description": "Grants permission to update the delegated administrator configuration associated with a GuardDuty detector.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        }
      }
    },
    "UpdatePublishingDestination": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdatePublishingDestination.html",
      "description": "Grants permission to update a publishing destination.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        },
        "publishingdestination": {
          "required": true
        }
      }
    },
    "UpdateThreatIntelSet": {
      "url": "https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateThreatIntelSet.html",
      "description": "Grants permission to updates the GuardDuty ThreatIntelSets.",
      "accessLevel": "Write",
      "resourceTypes": {
        "detector": {
          "required": true
        },
        "threatintelset": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "detector": {
      "name": "detector",
      "url": "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources",
      "arn": "arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "filter": {
      "name": "filter",
      "url": "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources",
      "arn": "arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}/filter/${FilterName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ipset": {
      "name": "ipset",
      "url": "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources",
      "arn": "arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}/ipset/${IPSetId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "threatintelset": {
      "name": "threatintelset",
      "url": "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources",
      "arn": "arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}/threatintelset/${ThreatIntelSetId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "publishingdestination": {
      "name": "publishingdestination",
      "url": "https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources",
      "arn": "arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}/threatintelset/${PublishingDestinationId}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service guardduty
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonguardduty.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to accept invitations to become a GuardDuty member account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_AcceptInvitation.html
   */
  public acceptInvitation() {
    this.add('guardduty:AcceptInvitation');
    return this;
  }

  /**
   * Grants permission to archive GuardDuty findings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ArchiveFindings.html
   */
  public archiveFindings() {
    this.add('guardduty:ArchiveFindings');
    return this;
  }

  /**
   * Grants permission to create a detector.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateDetector.html
   */
  public createDetector() {
    this.add('guardduty:CreateDetector');
    return this;
  }

  /**
   * Grants permission to create GuardDuty filters. A filters defines finding attributes and conditions used to filter findings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateFilter.html
   */
  public createFilter() {
    this.add('guardduty:CreateFilter');
    return this;
  }

  /**
   * Grants permission to create an IPSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateIPSet.html
   */
  public createIPSet() {
    this.add('guardduty:CreateIPSet');
    return this;
  }

  /**
   * Grants permission to create GuardDuty member accounts. The account used to create a member becomes the GuardDuty master account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html
   */
  public createMembers() {
    this.add('guardduty:CreateMembers');
    return this;
  }

  /**
   * Grants permission to create a publishing destination.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreatePublishingDestination.html
   */
  public createPublishingDestination() {
    this.add('guardduty:CreatePublishingDestination');
    return this;
  }

  /**
   * Grants permission to create sample findings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateSampleFindings.html
   */
  public createSampleFindings() {
    this.add('guardduty:CreateSampleFindings');
    return this;
  }

  /**
   * Grants permission to create GuardDuty ThreatIntelSets. A ThreatIntelSet consists of known malicious IP addresses used by GuardDuty to generate findings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateThreatIntelSet.html
   */
  public createThreatIntelSet() {
    this.add('guardduty:CreateThreatIntelSet');
    return this;
  }

  /**
   * Grants permission to decline invitations to become a GuardDuty member account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeclineInvitations.html
   */
  public declineInvitations() {
    this.add('guardduty:DeclineInvitations');
    return this;
  }

  /**
   * Grants permission to delete GuardDuty detectors.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteDetector.html
   */
  public deleteDetector() {
    this.add('guardduty:DeleteDetector');
    return this;
  }

  /**
   * Grants permission to delete GuardDuty filters.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteFilter.html
   */
  public deleteFilter() {
    this.add('guardduty:DeleteFilter');
    return this;
  }

  /**
   * Grants permission to delete GuardDuty IPSets.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteIPSet.html
   */
  public deleteIPSet() {
    this.add('guardduty:DeleteIPSet');
    return this;
  }

  /**
   * Grants permission to delete invitations to become a GuardDuty member account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteInvitations.html
   */
  public deleteInvitations() {
    this.add('guardduty:DeleteInvitations');
    return this;
  }

  /**
   * Grants permission to delete GuardDuty member accounts.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteMembers.html
   */
  public deleteMembers() {
    this.add('guardduty:DeleteMembers');
    return this;
  }

  /**
   * Grants permission to delete a publishing destination.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeletePublishingDestination.html
   */
  public deletePublishingDestination() {
    this.add('guardduty:DeletePublishingDestination');
    return this;
  }

  /**
   * Grants permission to delete GuardDuty ThreatIntelSets.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DeleteThreatIntelSet.html
   */
  public deleteThreatIntelSet() {
    this.add('guardduty:DeleteThreatIntelSet');
    return this;
  }

  /**
   * Grants permission to retrieve details about the delegated administrator associated with a GuardDuty detector.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribeOrganizationConfiguration.html
   */
  public describeOrganizationConfiguration() {
    this.add('guardduty:DescribeOrganizationConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve details about a publishing destination.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DescribePublishingDestination.html
   */
  public describePublishingDestination() {
    this.add('guardduty:DescribePublishingDestination');
    return this;
  }

  /**
   * Grants permission to disable the organization delegated administrator for GuardDuty.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisableOrganizationAdminAccount.html
   */
  public disableOrganizationAdminAccount() {
    this.add('guardduty:DisableOrganizationAdminAccount');
    return this;
  }

  /**
   * Grants permission to disassociate a GuardDuty member account from its GuardDuty master account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateFromMasterAccount.html
   */
  public disassociateFromMasterAccount() {
    this.add('guardduty:DisassociateFromMasterAccount');
    return this;
  }

  /**
   * Grants permission to disassociate GuardDuty member accounts from their master GuardDuty account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DisassociateMembers.html
   */
  public disassociateMembers() {
    this.add('guardduty:DisassociateMembers');
    return this;
  }

  /**
   * Grants permission to enable an organization delegated administrator for GuardDuty.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_EnableOrganizationAdminAccount.html
   */
  public enableOrganizationAdminAccount() {
    this.add('guardduty:EnableOrganizationAdminAccount');
    return this;
  }

  /**
   * Grants permission to retrieve GuardDuty detectors.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetDetector.html
   */
  public getDetector() {
    this.add('guardduty:GetDetector');
    return this;
  }

  /**
   * Grants permission to retrieve GuardDuty filters.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFilter.html
   */
  public getFilter() {
    this.add('guardduty:GetFilter');
    return this;
  }

  /**
   * Grants permission to retrieve GuardDuty findings.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFindings.html
   */
  public getFindings() {
    this.add('guardduty:GetFindings');
    return this;
  }

  /**
   * Grants permission to retrieve a list of GuardDuty finding statistics.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetFindingsStatistics.html
   */
  public getFindingsStatistics() {
    this.add('guardduty:GetFindingsStatistics');
    return this;
  }

  /**
   * Grants permsission to retrieve GuardDuty IPSets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetIPSet.html
   */
  public getIPSet() {
    this.add('guardduty:GetIPSet');
    return this;
  }

  /**
   * Grants permission to retrieve the count of all GuardDuty invitations sent to a specified account. The count does not include an accepted invitation.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetInvitationsCount.html
   */
  public getInvitationsCount() {
    this.add('guardduty:GetInvitationsCount');
    return this;
  }

  /**
   * Grants permission to retrieve details of the GuardDuty master account associated with a member account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMasterAccount.html
   */
  public getMasterAccount() {
    this.add('guardduty:GetMasterAccount');
    return this;
  }

  /**
   * Grants permission to retrieve the member accounts associated with a master account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetMembers.html
   */
  public getMembers() {
    this.add('guardduty:GetMembers');
    return this;
  }

  /**
   * Grants permission to retrieve GuardDuty ThreatIntelSets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_GetThreatIntelSet.html
   */
  public getThreatIntelSet() {
    this.add('guardduty:GetThreatIntelSet');
    return this;
  }

  /**
   * Grants permission to invite other AWS accounts to enable GuardDuty and become GuardDuty member accounts.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html
   */
  public inviteMembers() {
    this.add('guardduty:InviteMembers');
    return this;
  }

  /**
   * Grants permission to retrieve a list of GuardDuty detectors.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html
   */
  public listDetectors() {
    this.add('guardduty:ListDetectors');
    return this;
  }

  /**
   * Grants permission to retrieve a list of GuardDuty filters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListFilters.html
   */
  public listFilters() {
    this.add('guardduty:ListFilters');
    return this;
  }

  /**
   * Grants permission to retrieve a list of GuardDuty findings.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListFindings.html
   */
  public listFindings() {
    this.add('guardduty:ListFindings');
    return this;
  }

  /**
   * Grants permission to retrieve a lists of all of the GuardDuty membership invitations that were sent to an AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListInvitations.html
   */
  public listInvitations() {
    this.add('guardduty:ListInvitations');
    return this;
  }

  /**
   * Grants permission to retrierve a lsit of GuardDuty member accounts associated with a master account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListMembers.html
   */
  public listMembers() {
    this.add('guardduty:ListMembers');
    return this;
  }

  /**
   * Grants permission to list details about the organization delegated administrator for GuardDuty.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListOrganizationAdminAccounts.html
   */
  public listOrganizationAdminAccounts() {
    this.add('guardduty:ListOrganizationAdminAccounts');
    return this;
  }

  /**
   * Grants permission to retrieve a list of publishing destinations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListPublishingDestinations.html
   */
  public listPublishingDestinations() {
    this.add('guardduty:ListPublishingDestinations');
    return this;
  }

  /**
   * Grants permission to retrieve a list of tags associated with a GuardDuty resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('guardduty:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to retrieve a list of GuardDuty ThreatIntelSets.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListThreatIntelSets.html
   */
  public listThreatIntelSets() {
    this.add('guardduty:ListThreatIntelSets');
    return this;
  }

  /**
   * Grants permission to a master account to monitor findings from GuardDuty member accounts. Use this after disabling monitoring of member accounts using the StopMonitoringMembers operation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StartMonitoringMembers.html
   */
  public startMonitoringMembers() {
    this.add('guardduty:StartMonitoringMembers');
    return this;
  }

  /**
   * Grants permission to disable monitoring findings from member accounts.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StopMonitoringMembers.html
   */
  public stopMonitoringMembers() {
    this.add('guardduty:StopMonitoringMembers');
    return this;
  }

  /**
   * Grants permission to add tags to a GuardDuty resource. There is a limit of 50 tags per resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('guardduty:TagResource');
    return this;
  }

  /**
   * Grants permission to unarchive GuardDuty findings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UnarchiveFindings.html
   */
  public unarchiveFindings() {
    this.add('guardduty:UnarchiveFindings');
    return this;
  }

  /**
   * Grants permission to remove tags from a GuardDuty resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('guardduty:UntagResource');
    return this;
  }

  /**
   * Grants permission to update GuardDuty detectors.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateDetector.html
   */
  public updateDetector() {
    this.add('guardduty:UpdateDetector');
    return this;
  }

  /**
   * Grants permission to updates GuardDuty filters.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateFilter.html
   */
  public updateFilter() {
    this.add('guardduty:UpdateFilter');
    return this;
  }

  /**
   * Grants permission to update findings feedback to mark GuardDuty findings as useful or not useful.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateFindingsFeedback.html
   */
  public updateFindingsFeedback() {
    this.add('guardduty:UpdateFindingsFeedback');
    return this;
  }

  /**
   * Grants permission to update GuardDuty IPSets.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateIPSet.html
   */
  public updateIPSet() {
    this.add('guardduty:UpdateIPSet');
    return this;
  }

  /**
   * Grants permission to update the delegated administrator configuration associated with a GuardDuty detector.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateOrganizationConfiguration.html
   */
  public updateOrganizationConfiguration() {
    this.add('guardduty:UpdateOrganizationConfiguration');
    return this;
  }

  /**
   * Grants permission to update a publishing destination.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdatePublishingDestination.html
   */
  public updatePublishingDestination() {
    this.add('guardduty:UpdatePublishingDestination');
    return this;
  }

  /**
   * Grants permission to updates the GuardDuty ThreatIntelSets.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/guardduty/latest/APIReference/API_UpdateThreatIntelSet.html
   */
  public updateThreatIntelSet() {
    this.add('guardduty:UpdateThreatIntelSet');
    return this;
  }

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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDetector(detectorId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}';
    arn = arn.replace('${DetectorId}', detectorId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onFilter(detectorId: string, filterName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}/filter/${FilterName}';
    arn = arn.replace('${DetectorId}', detectorId);
    arn = arn.replace('${FilterName}', filterName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onIpset(detectorId: string, iPSetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}/ipset/${IPSetId}';
    arn = arn.replace('${DetectorId}', detectorId);
    arn = arn.replace('${IPSetId}', iPSetId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
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
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onThreatintelset(detectorId: string, threatIntelSetId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}/threatintelset/${ThreatIntelSetId}';
    arn = arn.replace('${DetectorId}', detectorId);
    arn = arn.replace('${ThreatIntelSetId}', threatIntelSetId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type publishingdestination to the statement
   *
   * https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_managing_access.html#guardduty-resources
   *
   * @param detectorId - Identifier for the detectorId.
   * @param publishingDestinationId - Identifier for the publishingDestinationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPublishingdestination(detectorId: string, publishingDestinationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:guardduty:${Region}:${Account}:detector/${DetectorId}/threatintelset/${PublishingDestinationId}';
    arn = arn.replace('${DetectorId}', detectorId);
    arn = arn.replace('${PublishingDestinationId}', publishingDestinationId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
