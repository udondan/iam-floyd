import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [macie2](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmacie.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Macie2 extends PolicyStatement {
  public servicePrefix = 'macie2';
  protected actionList: Actions = {
    "AcceptInvitation": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/invitations-accept.html",
      "description": "Grants permission to accept an Amazon Macie membership invitation",
      "accessLevel": "Write"
    },
    "ArchiveFindings": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/findings-archive.html",
      "description": "Grants permission to archive one or more findings",
      "accessLevel": "Write"
    },
    "BatchGetCustomDataIdentifiers": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-get.html",
      "description": "Grants permission to retrieve information about one or more custom data identifiers",
      "accessLevel": "Read",
      "resourceTypes": {
        "CustomDataIdentifier": {
          "required": true
        }
      }
    },
    "CreateClassificationJob": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/jobs.html",
      "description": "Grants permission to create and define the settings for a classification job",
      "accessLevel": "Write",
      "resourceTypes": {
        "ClassificationJob": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateCustomDataIdentifier": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers.html",
      "description": "Grants permission to create and define the settings for a custom data identifier",
      "accessLevel": "Write",
      "resourceTypes": {
        "CustomDataIdentifier": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateFindingsFilter": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters.html",
      "description": "Grants permission to create and define the settings for a findings filter",
      "accessLevel": "Write",
      "resourceTypes": {
        "FindingsFilter": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateInvitations": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/invitations.html",
      "description": "Grants permission to send an Amazon Macie membership invitation",
      "accessLevel": "Write"
    },
    "CreateMember": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/members.html",
      "description": "Grants permission to associate an account with an Amazon Macie master account",
      "accessLevel": "Write",
      "resourceTypes": {
        "Member": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateSampleFindings": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/findings-sample.html",
      "description": "Grants permission to create sample findings",
      "accessLevel": "Write"
    },
    "DeclineInvitations": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/invitations-decline.html",
      "description": "Grants permission to decline Amazon Macie membership invitations",
      "accessLevel": "Write"
    },
    "DeleteCustomDataIdentifier": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-id.html",
      "description": "Grants permission to delete a custom data identifier",
      "accessLevel": "Write",
      "resourceTypes": {
        "CustomDataIdentifier": {
          "required": true
        }
      }
    },
    "DeleteFindingsFilter": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html",
      "description": "Grants permission to delete a findings filter",
      "accessLevel": "Write",
      "resourceTypes": {
        "FindingsFilter": {
          "required": true
        }
      }
    },
    "DeleteInvitations": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/invitations-delete.html",
      "description": "Grants permission to delete Amazon Macie membership invitations",
      "accessLevel": "Write"
    },
    "DeleteMember": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html",
      "description": "Grants permission to delete the association between an Amazon Macie master account and an account",
      "accessLevel": "Write",
      "resourceTypes": {
        "Member": {
          "required": true
        }
      }
    },
    "DescribeBuckets": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html",
      "description": "Grants permission to retrieve statistical and other data about S3 buckets that Amazon Macie monitors and analyzes",
      "accessLevel": "Read"
    },
    "DescribeClassificationJob": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/jobs-jobid.html",
      "description": "Grants permission to retrieve information about the status and settings for a classification job",
      "accessLevel": "Read",
      "resourceTypes": {
        "ClassificationJob": {
          "required": true
        }
      }
    },
    "DescribeOrganizationConfiguration": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/admin-configuration.html",
      "description": "Grants permission to retrieve information about the Amazon Macie configuration settings for an AWS organization",
      "accessLevel": "Read"
    },
    "DisableMacie": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/macie.html",
      "description": "Grants permission to disable an Amazon Macie account, which also deletes Macie resources for the account",
      "accessLevel": "Write"
    },
    "DisableOrganizationAdminAccount": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/admin.html",
      "description": "Grants permission to disable an account as a delegated administrator of Amazon Macie for an AWS organization",
      "accessLevel": "Write"
    },
    "DisassociateFromMasterAccount": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/master-disassociate.html",
      "description": "Grants an Amazon Macie member account with permission to disassociate from its master account",
      "accessLevel": "Write"
    },
    "DisassociateMember": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/members-disassociate-id.html",
      "description": "Grants an Amazon Macie master account with permission to disassociate from a member account",
      "accessLevel": "Write",
      "resourceTypes": {
        "Member": {
          "required": true
        }
      }
    },
    "EnableMacie": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/macie.html",
      "description": "Grants permission to enable and specify the configuration settings for a new Amazon Macie account",
      "accessLevel": "Write"
    },
    "EnableOrganizationAdminAccount": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/admin.html",
      "description": "Grants permission to enable an account as a delegated administrator of Amazon Macie for an AWS organization",
      "accessLevel": "Write"
    },
    "GetBucketStatistics": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3-statistics.html",
      "description": "Grants permission to retrieve aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes",
      "accessLevel": "Read"
    },
    "GetClassificationExportConfiguration": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html",
      "description": "Grants permission to retrieve the settings for exporting data classification results",
      "accessLevel": "Read"
    },
    "GetCustomDataIdentifier": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-id.html",
      "description": "Grants permission to retrieve information about the settings for a custom data identifier",
      "accessLevel": "Read",
      "resourceTypes": {
        "CustomDataIdentifier": {
          "required": true
        }
      }
    },
    "GetFindingStatistics": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/findings-statistics.html",
      "description": "Grants permission to retrieve aggregated statistical data about findings",
      "accessLevel": "Read"
    },
    "GetFindings": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/findings-describe.html",
      "description": "Grants permission to retrieve information about one or more findings",
      "accessLevel": "Read"
    },
    "GetFindingsFilter": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html",
      "description": "Grants permission to retrieve information about the settings for a findings filter",
      "accessLevel": "Read",
      "resourceTypes": {
        "FindingsFilter": {
          "required": true
        }
      }
    },
    "GetInvitationsCount": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/invitations-count.html",
      "description": "Grants permission to retrieve the count of Amazon Macie membership invitations that were received by an account",
      "accessLevel": "Read"
    },
    "GetMacieSession": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/macie.html",
      "description": "Grants permission to retrieve information about the status and configuration settings for an Amazon Macie account",
      "accessLevel": "Read"
    },
    "GetMasterAccount": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/master.html",
      "description": "Grants permission to retrieve information about the Amazon Macie master account for an account",
      "accessLevel": "Read"
    },
    "GetMember": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html",
      "description": "Grants permission to retrieve information about an account that's associated with an Amazon Macie master account",
      "accessLevel": "Read",
      "resourceTypes": {
        "Member": {
          "required": true
        }
      }
    },
    "GetUsageStatistics": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/usage-statistics.html",
      "description": "Grants permission to retrieve quotas and aggregated usage data for one or more accounts",
      "accessLevel": "Read"
    },
    "GetUsageTotals": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/usage.html",
      "description": "Grants permission to retrieve aggregated usage data for an account",
      "accessLevel": "Read"
    },
    "ListClassificationJobs": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/jobs-list.html",
      "description": "Grants permission to retrieve information about the status and settings for one or more classification jobs",
      "accessLevel": "List"
    },
    "ListCustomDataIdentifiers": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-list.html",
      "description": "Grants permission to retrieve information about all custom data identifiers",
      "accessLevel": "List"
    },
    "ListFindings": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/findings.html",
      "description": "Grants permission to retrieve a subset of information about one or more findings",
      "accessLevel": "List"
    },
    "ListFindingsFilters": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters.html",
      "description": "Grants permission to retrieve information about all findings filters",
      "accessLevel": "List"
    },
    "ListInvitations": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/invitations.html",
      "description": "Grants permission to retrieve information about all the Amazon Macie membership invitations that were received by an account",
      "accessLevel": "List"
    },
    "ListMembers": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/members.html",
      "description": "Grants permission to retrieve information about all the accounts that are associated with an Amazon Macie master account",
      "accessLevel": "List"
    },
    "ListOrganizationAdminAccounts": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/admin.html",
      "description": "Grants permission to retrieve information about the delegated, Amazon Macie administrator account for an AWS organization",
      "accessLevel": "List"
    },
    "ListTagsForResources": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html",
      "description": "Grants permission to retrieve the tags for an Amazon Macie resource or member account",
      "accessLevel": "List"
    },
    "PutClassificationExportConfiguration": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html",
      "description": "Grants permission to create or update the settings for exporting data classification results",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html",
      "description": "Grants permission to add or update the tags for an Amazon Macie resource or member account",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "TestCustomDataIdentifier": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-test.html",
      "description": "Grants permission to test a custom data identifier",
      "accessLevel": "Write"
    },
    "UnarchiveFindings": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/findings-unarchive.html",
      "description": "Grants permission to reactivate (unarchive) one or more findings",
      "accessLevel": "Write"
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html",
      "description": "Grants permission to remove tags from an Amazon Macie resource or member account",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateClassificationJob": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/jobs-jobid.html",
      "description": "Grants permission to cancel a classification job",
      "accessLevel": "Write",
      "resourceTypes": {
        "ClassificationJob": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateFindingsFilter": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html",
      "description": "Grants permission to update the settings for a findings filter",
      "accessLevel": "Write",
      "resourceTypes": {
        "FindingsFilter": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UpdateMacieSession": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/macie.html",
      "description": "Grants permission to suspend or re-enable an Amazon Macie account, or update the configuration settings for a Macie account",
      "accessLevel": "Write"
    },
    "UpdateMemberSession": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/macie-members-id.html",
      "description": "Grants an Amazon Macie master account with permission to suspend or re-enable a member account",
      "accessLevel": "Write"
    },
    "UpdateOrganizationConfiguration": {
      "url": "https://docs.aws.amazon.com/macie/latest/APIReference/admin-configuration.html",
      "description": "Grants permission to update Amazon Macie configuration settings for an AWS organization",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "ClassificationJob": {
      "name": "ClassificationJob",
      "url": "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
      "arn": "arn:${Partition}:macie2::${Account}:classification-job/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "CustomDataIdentifier": {
      "name": "CustomDataIdentifier",
      "url": "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html.html",
      "arn": "arn:${Partition}:macie2::${Account}:custom-data-identifier/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "Member": {
      "name": "Member",
      "url": "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
      "arn": "arn:${Partition}:macie2::${Account}:member/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "FindingsFilter": {
      "name": "FindingsFilter",
      "url": "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html",
      "arn": "arn:${Partition}:macie2::${Account}:findings-filter/${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [macie2](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmacie.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept an Amazon Macie membership invitation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations-accept.html
   */
  public toAcceptInvitation() {
    this.to('macie2:AcceptInvitation');
    return this;
  }

  /**
   * Grants permission to archive one or more findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-archive.html
   */
  public toArchiveFindings() {
    this.to('macie2:ArchiveFindings');
    return this;
  }

  /**
   * Grants permission to retrieve information about one or more custom data identifiers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-get.html
   */
  public toBatchGetCustomDataIdentifiers() {
    this.to('macie2:BatchGetCustomDataIdentifiers');
    return this;
  }

  /**
   * Grants permission to create and define the settings for a classification job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/jobs.html
   */
  public toCreateClassificationJob() {
    this.to('macie2:CreateClassificationJob');
    return this;
  }

  /**
   * Grants permission to create and define the settings for a custom data identifier
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers.html
   */
  public toCreateCustomDataIdentifier() {
    this.to('macie2:CreateCustomDataIdentifier');
    return this;
  }

  /**
   * Grants permission to create and define the settings for a findings filter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters.html
   */
  public toCreateFindingsFilter() {
    this.to('macie2:CreateFindingsFilter');
    return this;
  }

  /**
   * Grants permission to send an Amazon Macie membership invitation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations.html
   */
  public toCreateInvitations() {
    this.to('macie2:CreateInvitations');
    return this;
  }

  /**
   * Grants permission to associate an account with an Amazon Macie master account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members.html
   */
  public toCreateMember() {
    this.to('macie2:CreateMember');
    return this;
  }

  /**
   * Grants permission to create sample findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-sample.html
   */
  public toCreateSampleFindings() {
    this.to('macie2:CreateSampleFindings');
    return this;
  }

  /**
   * Grants permission to decline Amazon Macie membership invitations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations-decline.html
   */
  public toDeclineInvitations() {
    this.to('macie2:DeclineInvitations');
    return this;
  }

  /**
   * Grants permission to delete a custom data identifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-id.html
   */
  public toDeleteCustomDataIdentifier() {
    this.to('macie2:DeleteCustomDataIdentifier');
    return this;
  }

  /**
   * Grants permission to delete a findings filter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html
   */
  public toDeleteFindingsFilter() {
    this.to('macie2:DeleteFindingsFilter');
    return this;
  }

  /**
   * Grants permission to delete Amazon Macie membership invitations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations-delete.html
   */
  public toDeleteInvitations() {
    this.to('macie2:DeleteInvitations');
    return this;
  }

  /**
   * Grants permission to delete the association between an Amazon Macie master account and an account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html
   */
  public toDeleteMember() {
    this.to('macie2:DeleteMember');
    return this;
  }

  /**
   * Grants permission to retrieve statistical and other data about S3 buckets that Amazon Macie monitors and analyzes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3.html
   */
  public toDescribeBuckets() {
    this.to('macie2:DescribeBuckets');
    return this;
  }

  /**
   * Grants permission to retrieve information about the status and settings for a classification job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/jobs-jobid.html
   */
  public toDescribeClassificationJob() {
    this.to('macie2:DescribeClassificationJob');
    return this;
  }

  /**
   * Grants permission to retrieve information about the Amazon Macie configuration settings for an AWS organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin-configuration.html
   */
  public toDescribeOrganizationConfiguration() {
    this.to('macie2:DescribeOrganizationConfiguration');
    return this;
  }

  /**
   * Grants permission to disable an Amazon Macie account, which also deletes Macie resources for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  public toDisableMacie() {
    this.to('macie2:DisableMacie');
    return this;
  }

  /**
   * Grants permission to disable an account as a delegated administrator of Amazon Macie for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  public toDisableOrganizationAdminAccount() {
    this.to('macie2:DisableOrganizationAdminAccount');
    return this;
  }

  /**
   * Grants an Amazon Macie member account with permission to disassociate from its master account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/master-disassociate.html
   */
  public toDisassociateFromMasterAccount() {
    this.to('macie2:DisassociateFromMasterAccount');
    return this;
  }

  /**
   * Grants an Amazon Macie master account with permission to disassociate from a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members-disassociate-id.html
   */
  public toDisassociateMember() {
    this.to('macie2:DisassociateMember');
    return this;
  }

  /**
   * Grants permission to enable and specify the configuration settings for a new Amazon Macie account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  public toEnableMacie() {
    this.to('macie2:EnableMacie');
    return this;
  }

  /**
   * Grants permission to enable an account as a delegated administrator of Amazon Macie for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  public toEnableOrganizationAdminAccount() {
    this.to('macie2:EnableOrganizationAdminAccount');
    return this;
  }

  /**
   * Grants permission to retrieve aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/datasources-s3-statistics.html
   */
  public toGetBucketStatistics() {
    this.to('macie2:GetBucketStatistics');
    return this;
  }

  /**
   * Grants permission to retrieve the settings for exporting data classification results
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html
   */
  public toGetClassificationExportConfiguration() {
    this.to('macie2:GetClassificationExportConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve information about the settings for a custom data identifier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-id.html
   */
  public toGetCustomDataIdentifier() {
    this.to('macie2:GetCustomDataIdentifier');
    return this;
  }

  /**
   * Grants permission to retrieve aggregated statistical data about findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-statistics.html
   */
  public toGetFindingStatistics() {
    this.to('macie2:GetFindingStatistics');
    return this;
  }

  /**
   * Grants permission to retrieve information about one or more findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-describe.html
   */
  public toGetFindings() {
    this.to('macie2:GetFindings');
    return this;
  }

  /**
   * Grants permission to retrieve information about the settings for a findings filter
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html
   */
  public toGetFindingsFilter() {
    this.to('macie2:GetFindingsFilter');
    return this;
  }

  /**
   * Grants permission to retrieve the count of Amazon Macie membership invitations that were received by an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations-count.html
   */
  public toGetInvitationsCount() {
    this.to('macie2:GetInvitationsCount');
    return this;
  }

  /**
   * Grants permission to retrieve information about the status and configuration settings for an Amazon Macie account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  public toGetMacieSession() {
    this.to('macie2:GetMacieSession');
    return this;
  }

  /**
   * Grants permission to retrieve information about the Amazon Macie master account for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/master.html
   */
  public toGetMasterAccount() {
    this.to('macie2:GetMasterAccount');
    return this;
  }

  /**
   * Grants permission to retrieve information about an account that's associated with an Amazon Macie master account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members-id.html
   */
  public toGetMember() {
    this.to('macie2:GetMember');
    return this;
  }

  /**
   * Grants permission to retrieve quotas and aggregated usage data for one or more accounts
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/usage-statistics.html
   */
  public toGetUsageStatistics() {
    this.to('macie2:GetUsageStatistics');
    return this;
  }

  /**
   * Grants permission to retrieve aggregated usage data for an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/usage.html
   */
  public toGetUsageTotals() {
    this.to('macie2:GetUsageTotals');
    return this;
  }

  /**
   * Grants permission to retrieve information about the status and settings for one or more classification jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/jobs-list.html
   */
  public toListClassificationJobs() {
    this.to('macie2:ListClassificationJobs');
    return this;
  }

  /**
   * Grants permission to retrieve information about all custom data identifiers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-list.html
   */
  public toListCustomDataIdentifiers() {
    this.to('macie2:ListCustomDataIdentifiers');
    return this;
  }

  /**
   * Grants permission to retrieve a subset of information about one or more findings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings.html
   */
  public toListFindings() {
    this.to('macie2:ListFindings');
    return this;
  }

  /**
   * Grants permission to retrieve information about all findings filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters.html
   */
  public toListFindingsFilters() {
    this.to('macie2:ListFindingsFilters');
    return this;
  }

  /**
   * Grants permission to retrieve information about all the Amazon Macie membership invitations that were received by an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/invitations.html
   */
  public toListInvitations() {
    this.to('macie2:ListInvitations');
    return this;
  }

  /**
   * Grants permission to retrieve information about all the accounts that are associated with an Amazon Macie master account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/members.html
   */
  public toListMembers() {
    this.to('macie2:ListMembers');
    return this;
  }

  /**
   * Grants permission to retrieve information about the delegated, Amazon Macie administrator account for an AWS organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin.html
   */
  public toListOrganizationAdminAccounts() {
    this.to('macie2:ListOrganizationAdminAccounts');
    return this;
  }

  /**
   * Grants permission to retrieve the tags for an Amazon Macie resource or member account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html
   */
  public toListTagsForResources() {
    this.to('macie2:ListTagsForResources');
    return this;
  }

  /**
   * Grants permission to create or update the settings for exporting data classification results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/classification-export-configuration.html
   */
  public toPutClassificationExportConfiguration() {
    this.to('macie2:PutClassificationExportConfiguration');
    return this;
  }

  /**
   * Grants permission to add or update the tags for an Amazon Macie resource or member account
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html
   */
  public toTagResource() {
    this.to('macie2:TagResource');
    return this;
  }

  /**
   * Grants permission to test a custom data identifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/custom-data-identifiers-test.html
   */
  public toTestCustomDataIdentifier() {
    this.to('macie2:TestCustomDataIdentifier');
    return this;
  }

  /**
   * Grants permission to reactivate (unarchive) one or more findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findings-unarchive.html
   */
  public toUnarchiveFindings() {
    this.to('macie2:UnarchiveFindings');
    return this;
  }

  /**
   * Grants permission to remove tags from an Amazon Macie resource or member account
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/tags-resourcearn.html
   */
  public toUntagResource() {
    this.to('macie2:UntagResource');
    return this;
  }

  /**
   * Grants permission to cancel a classification job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/jobs-jobid.html
   */
  public toUpdateClassificationJob() {
    this.to('macie2:UpdateClassificationJob');
    return this;
  }

  /**
   * Grants permission to update the settings for a findings filter
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/findingsfilters-id.html
   */
  public toUpdateFindingsFilter() {
    this.to('macie2:UpdateFindingsFilter');
    return this;
  }

  /**
   * Grants permission to suspend or re-enable an Amazon Macie account, or update the configuration settings for a Macie account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie.html
   */
  public toUpdateMacieSession() {
    this.to('macie2:UpdateMacieSession');
    return this;
  }

  /**
   * Grants an Amazon Macie master account with permission to suspend or re-enable a member account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/macie-members-id.html
   */
  public toUpdateMemberSession() {
    this.to('macie2:UpdateMemberSession');
    return this;
  }

  /**
   * Grants permission to update Amazon Macie configuration settings for an AWS organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/macie/latest/APIReference/admin-configuration.html
   */
  public toUpdateOrganizationConfiguration() {
    this.to('macie2:UpdateOrganizationConfiguration');
    return this;
  }

  /**
   * Adds a resource of type ClassificationJob to the statement
   *
   * https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onClassificationJob(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:macie2::${Account}:classification-job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type CustomDataIdentifier to the statement
   *
   * https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustomDataIdentifier(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:macie2::${Account}:custom-data-identifier/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Member to the statement
   *
   * https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMember(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:macie2::${Account}:member/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type FindingsFilter to the statement
   *
   * https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFindingsFilter(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:macie2::${Account}:findings-filter/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
