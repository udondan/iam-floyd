import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service securityhub
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecurityhub.html
 */
export class Securityhub extends PolicyStatement {
  public servicePrefix = 'securityhub';
  public actions : Actions = {
    "AcceptInvitation": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AcceptInvitation.html",
      "description": "Grants permission to accept Security Hub invitations to become a member account",
      "accessLevel": "Write"
    },
    "BatchDisableStandards": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchDisableStandards.html",
      "description": "Grants permission to disable standards in Security Hub",
      "accessLevel": "Write",
      "resourceTypes": {
        "standards-subscription": {
          "required": true
        }
      }
    },
    "BatchEnableStandards": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchEnableStandards.html",
      "description": "Grants permission to enable standards in Security Hub",
      "accessLevel": "Write",
      "resourceTypes": {
        "standard": {
          "required": true
        }
      }
    },
    "BatchImportFindings": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html",
      "description": "Grants permission to import findings into Security Hub from an integrated product",
      "accessLevel": "Write",
      "conditions": [
        "securityhub:TargetAccount"
      ]
    },
    "BatchUpdateFindings": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html",
      "description": "Grants permission to update customer-controlled fields for a selected set of Security Hub findings",
      "accessLevel": "Write"
    },
    "CreateActionTarget": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateActionTarget.html",
      "description": "Grants permission to create custom actions in Security Hub",
      "accessLevel": "Write"
    },
    "CreateInsight": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateInsight.html",
      "description": "Grants permission to create insights in Security Hub. Insights are collections of related findings",
      "accessLevel": "Write"
    },
    "CreateMembers": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateMembers.html",
      "description": "Grants permission to create member accounts in Security Hub",
      "accessLevel": "Write"
    },
    "DeclineInvitations": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeclineInvitations.html",
      "description": "Grants permission to decline Security Hub invitations to become a member account",
      "accessLevel": "Write"
    },
    "DeleteActionTarget": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteActionTarget.html",
      "description": "Grants permission to delete custom actions in Security Hub",
      "accessLevel": "Write",
      "resourceTypes": {
        "action-target": {
          "required": true
        }
      }
    },
    "DeleteInsight": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteInsight.html",
      "description": "Grants permission to delete insights from Security Hub",
      "accessLevel": "Write",
      "resourceTypes": {
        "insight": {
          "required": true
        }
      }
    },
    "DeleteInvitations": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteInvitations.html",
      "description": "Grants permission to delete Security Hub invitations to become a member account",
      "accessLevel": "Write"
    },
    "DeleteMembers": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteMembers.html",
      "description": "Grants permission to delete Security Hub member accounts",
      "accessLevel": "Write"
    },
    "DescribeActionTargets": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeActionTargets.html",
      "description": "Grants permission to retrieve a list of custom actions using the API",
      "accessLevel": "Read"
    },
    "DescribeHub": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeHub.html",
      "description": "Grants permission to retrieve information about the hub resource in your account",
      "accessLevel": "Read"
    },
    "DescribeProducts": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeProducts.html",
      "description": "Grants permission to retrieve information about the available Security Hub product integrations",
      "accessLevel": "Read"
    },
    "DescribeStandards": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html",
      "description": "Grants permission to retrieve information about Security Hub standards",
      "accessLevel": "Read",
      "resourceTypes": {
        "hub": {
          "required": true
        }
      }
    },
    "DescribeStandardsControls": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandardsControls.html",
      "description": "Grants permission to retrieve information about Security Hub standards controls",
      "accessLevel": "Read",
      "resourceTypes": {
        "hub": {
          "required": true
        }
      }
    },
    "DisableImportFindingsForProduct": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableImportFindingsForProduct.html",
      "description": "Grants permission to disable the findings importing for a Security Hub integrated product",
      "accessLevel": "Write",
      "resourceTypes": {
        "product": {
          "required": true
        }
      }
    },
    "DisableSecurityHub": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableSecurityHub.html",
      "description": "Grants permission to disable Security Hub",
      "accessLevel": "Write"
    },
    "DisassociateFromMasterAccount": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateFromMasterAccount.html",
      "description": "Grants permission to a Security Hub member account to disassociate from the associated master account",
      "accessLevel": "Write"
    },
    "DisassociateMembers": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateMembers.html",
      "description": "Grants permission to disassociate Security Hub member accounts from the associated master account",
      "accessLevel": "Write"
    },
    "EnableImportFindingsForProduct": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableImportFindingsForProduct.html",
      "description": "Grants permission to enable the findings importing for a Security Hub integrated product",
      "accessLevel": "Write",
      "resourceTypes": {
        "product": {
          "required": true
        }
      }
    },
    "EnableSecurityHub": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableSecurityHub.html",
      "description": "Grants permission to enable Security Hub",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "GetEnabledStandards": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetEnabledStandards.html",
      "description": "Grants permission to retrieve a list of the standards that are enabled in Security Hub",
      "accessLevel": "List"
    },
    "GetFindings": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindings.html",
      "description": "Grants permission to retrieve a list of findings from Security Hub",
      "accessLevel": "Read"
    },
    "GetInsightResults": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsightResults.html",
      "description": "Grants permission to retrieve insight results from Security Hub",
      "accessLevel": "Read",
      "resourceTypes": {
        "insight": {
          "required": true
        }
      }
    },
    "GetInsights": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsights.html",
      "description": "Grants permission to retrieve Security Hub insights",
      "accessLevel": "List",
      "resourceTypes": {
        "insight": {
          "required": true
        }
      }
    },
    "GetInvitationsCount": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInvitationsCount.html",
      "description": "Grants permission to retrieve the count of Security Hub membership invitations sent to the account",
      "accessLevel": "Read"
    },
    "GetMasterAccount": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetMasterAccount.html",
      "description": "Grants permission to retrieve details about the Security Hub master account",
      "accessLevel": "Read"
    },
    "GetMembers": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetMembers.html",
      "description": "Grants permission to retrieve the details of Security Hub member accounts",
      "accessLevel": "Read"
    },
    "InviteMembers": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_InviteMembers.html",
      "description": "Grants permission to invite other AWS accounts to become Security Hub member accounts",
      "accessLevel": "Write"
    },
    "ListEnabledProductsForImport": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListEnabledProductsForImport.html",
      "description": "Grants permission to retrieve the Security Hub integrated products that are currently enabled",
      "accessLevel": "List"
    },
    "ListInvitations": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListInvitations.html",
      "description": "Grants permission to retrieve the Security Hub invitations sent to the account",
      "accessLevel": "List"
    },
    "ListMembers": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListMembers.html",
      "description": "Grants permission to retrieve details about Security Hub member accounts associated with the master account",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list of tags associated with a resource",
      "accessLevel": "List",
      "resourceTypes": {
        "hub": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_TagResource.html",
      "description": "Grants permission to add tags to a Security Hub resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "hub": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UntagResource.html",
      "description": "Grants permission to remove tags from a Security Hub resource",
      "accessLevel": "Write",
      "resourceTypes": {
        "hub": {
          "required": true
        }
      }
    },
    "UpdateActionTarget": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateActionTarget.html",
      "description": "Grants permission to update custom actions in Security Hub",
      "accessLevel": "Write",
      "resourceTypes": {
        "action-target": {
          "required": true
        }
      }
    },
    "UpdateFindings": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindings.html",
      "description": "Grants permission to update Security Hub findings",
      "accessLevel": "Write"
    },
    "UpdateInsight": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateInsight.html",
      "description": "Grants permission to update insights in Security Hub",
      "accessLevel": "Write",
      "resourceTypes": {
        "insight": {
          "required": true
        }
      }
    },
    "UpdateStandardsControl": {
      "url": "https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateStandardsControl.html",
      "description": "Grants permission to update Security Hub standards controls",
      "accessLevel": "Write",
      "resourceTypes": {
        "hub": {
          "required": true
        }
      }
    }
  };

  /**
   * Grants permission to accept Security Hub invitations to become a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AcceptInvitation.html
   */
  public acceptInvitation () {
    this.add('securityhub:AcceptInvitation');
    return this;
  }

  /**
   * Grants permission to disable standards in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchDisableStandards.html
   */
  public batchDisableStandards () {
    this.add('securityhub:BatchDisableStandards');
    return this;
  }

  /**
   * Grants permission to enable standards in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchEnableStandards.html
   */
  public batchEnableStandards () {
    this.add('securityhub:BatchEnableStandards');
    return this;
  }

  /**
   * Grants permission to import findings into Security Hub from an integrated product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html
   */
  public batchImportFindings () {
    this.add('securityhub:BatchImportFindings');
    return this;
  }

  /**
   * Grants permission to update customer-controlled fields for a selected set of Security Hub findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html
   */
  public batchUpdateFindings () {
    this.add('securityhub:BatchUpdateFindings');
    return this;
  }

  /**
   * Grants permission to create custom actions in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateActionTarget.html
   */
  public createActionTarget () {
    this.add('securityhub:CreateActionTarget');
    return this;
  }

  /**
   * Grants permission to create insights in Security Hub. Insights are collections of related findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateInsight.html
   */
  public createInsight () {
    this.add('securityhub:CreateInsight');
    return this;
  }

  /**
   * Grants permission to create member accounts in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_CreateMembers.html
   */
  public createMembers () {
    this.add('securityhub:CreateMembers');
    return this;
  }

  /**
   * Grants permission to decline Security Hub invitations to become a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeclineInvitations.html
   */
  public declineInvitations () {
    this.add('securityhub:DeclineInvitations');
    return this;
  }

  /**
   * Grants permission to delete custom actions in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteActionTarget.html
   */
  public deleteActionTarget () {
    this.add('securityhub:DeleteActionTarget');
    return this;
  }

  /**
   * Grants permission to delete insights from Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteInsight.html
   */
  public deleteInsight () {
    this.add('securityhub:DeleteInsight');
    return this;
  }

  /**
   * Grants permission to delete Security Hub invitations to become a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteInvitations.html
   */
  public deleteInvitations () {
    this.add('securityhub:DeleteInvitations');
    return this;
  }

  /**
   * Grants permission to delete Security Hub member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DeleteMembers.html
   */
  public deleteMembers () {
    this.add('securityhub:DeleteMembers');
    return this;
  }

  /**
   * Grants permission to retrieve a list of custom actions using the API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeActionTargets.html
   */
  public describeActionTargets () {
    this.add('securityhub:DescribeActionTargets');
    return this;
  }

  /**
   * Grants permission to retrieve information about the hub resource in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeHub.html
   */
  public describeHub () {
    this.add('securityhub:DescribeHub');
    return this;
  }

  /**
   * Grants permission to retrieve information about the available Security Hub product integrations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeProducts.html
   */
  public describeProducts () {
    this.add('securityhub:DescribeProducts');
    return this;
  }

  /**
   * Grants permission to retrieve information about Security Hub standards
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html
   */
  public describeStandards () {
    this.add('securityhub:DescribeStandards');
    return this;
  }

  /**
   * Grants permission to retrieve information about Security Hub standards controls
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandardsControls.html
   */
  public describeStandardsControls () {
    this.add('securityhub:DescribeStandardsControls');
    return this;
  }

  /**
   * Grants permission to disable the findings importing for a Security Hub integrated product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableImportFindingsForProduct.html
   */
  public disableImportFindingsForProduct () {
    this.add('securityhub:DisableImportFindingsForProduct');
    return this;
  }

  /**
   * Grants permission to disable Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisableSecurityHub.html
   */
  public disableSecurityHub () {
    this.add('securityhub:DisableSecurityHub');
    return this;
  }

  /**
   * Grants permission to a Security Hub member account to disassociate from the associated master account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateFromMasterAccount.html
   */
  public disassociateFromMasterAccount () {
    this.add('securityhub:DisassociateFromMasterAccount');
    return this;
  }

  /**
   * Grants permission to disassociate Security Hub member accounts from the associated master account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DisassociateMembers.html
   */
  public disassociateMembers () {
    this.add('securityhub:DisassociateMembers');
    return this;
  }

  /**
   * Grants permission to enable the findings importing for a Security Hub integrated product
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableImportFindingsForProduct.html
   */
  public enableImportFindingsForProduct () {
    this.add('securityhub:EnableImportFindingsForProduct');
    return this;
  }

  /**
   * Grants permission to enable Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_EnableSecurityHub.html
   */
  public enableSecurityHub () {
    this.add('securityhub:EnableSecurityHub');
    return this;
  }

  /**
   * Grants permission to retrieve a list of the standards that are enabled in Security Hub
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetEnabledStandards.html
   */
  public getEnabledStandards () {
    this.add('securityhub:GetEnabledStandards');
    return this;
  }

  /**
   * Grants permission to retrieve a list of findings from Security Hub
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindings.html
   */
  public getFindings () {
    this.add('securityhub:GetFindings');
    return this;
  }

  /**
   * Grants permission to retrieve insight results from Security Hub
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsightResults.html
   */
  public getInsightResults () {
    this.add('securityhub:GetInsightResults');
    return this;
  }

  /**
   * Grants permission to retrieve Security Hub insights
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInsights.html
   */
  public getInsights () {
    this.add('securityhub:GetInsights');
    return this;
  }

  /**
   * Grants permission to retrieve the count of Security Hub membership invitations sent to the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetInvitationsCount.html
   */
  public getInvitationsCount () {
    this.add('securityhub:GetInvitationsCount');
    return this;
  }

  /**
   * Grants permission to retrieve details about the Security Hub master account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetMasterAccount.html
   */
  public getMasterAccount () {
    this.add('securityhub:GetMasterAccount');
    return this;
  }

  /**
   * Grants permission to retrieve the details of Security Hub member accounts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetMembers.html
   */
  public getMembers () {
    this.add('securityhub:GetMembers');
    return this;
  }

  /**
   * Grants permission to invite other AWS accounts to become Security Hub member accounts
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_InviteMembers.html
   */
  public inviteMembers () {
    this.add('securityhub:InviteMembers');
    return this;
  }

  /**
   * Grants permission to retrieve the Security Hub integrated products that are currently enabled
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListEnabledProductsForImport.html
   */
  public listEnabledProductsForImport () {
    this.add('securityhub:ListEnabledProductsForImport');
    return this;
  }

  /**
   * Grants permission to retrieve the Security Hub invitations sent to the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListInvitations.html
   */
  public listInvitations () {
    this.add('securityhub:ListInvitations');
    return this;
  }

  /**
   * Grants permission to retrieve details about Security Hub member accounts associated with the master account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListMembers.html
   */
  public listMembers () {
    this.add('securityhub:ListMembers');
    return this;
  }

  /**
   * Grants permission to list of tags associated with a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource () {
    this.add('securityhub:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to add tags to a Security Hub resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_TagResource.html
   */
  public tagResource () {
    this.add('securityhub:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from a Security Hub resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UntagResource.html
   */
  public untagResource () {
    this.add('securityhub:UntagResource');
    return this;
  }

  /**
   * Grants permission to update custom actions in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateActionTarget.html
   */
  public updateActionTarget () {
    this.add('securityhub:UpdateActionTarget');
    return this;
  }

  /**
   * Grants permission to update Security Hub findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateFindings.html
   */
  public updateFindings () {
    this.add('securityhub:UpdateFindings');
    return this;
  }

  /**
   * Grants permission to update insights in Security Hub
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateInsight.html
   */
  public updateInsight () {
    this.add('securityhub:UpdateInsight');
    return this;
  }

  /**
   * Grants permission to update Security Hub standards controls
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateStandardsControl.html
   */
  public updateStandardsControl () {
    this.add('securityhub:UpdateStandardsControl');
    return this;
  }
}
