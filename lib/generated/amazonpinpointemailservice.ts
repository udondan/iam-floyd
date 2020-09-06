import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [ses-pinpoint](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpointemailservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SesPinpoint extends PolicyStatement {
  public servicePrefix = 'ses-pinpoint';
  protected actionList: Actions = {
    "CreateConfigurationSet": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSet.html",
      "description": "Create a configuration set. Configuration sets are groups of rules that you can apply to the emails you send using Amazon Pinpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "configuration-set": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateConfigurationSetEventDestination": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSetEventDestination.html",
      "description": "Create an event destination",
      "accessLevel": "Write",
      "resourceTypes": {
        "configuration-set": {
          "required": true
        }
      }
    },
    "CreateDedicatedIpPool": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDedicatedIpPool.html",
      "description": "Create a new pool of dedicated IP addresses",
      "accessLevel": "Write",
      "resourceTypes": {
        "dedicated-ip-pool": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateDeliverabilityTestReport": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDeliverabilityTestReport.html",
      "description": "Create a new predictive inbox placement test.",
      "accessLevel": "Write",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "CreateEmailIdentity": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateEmailIdentity.html",
      "description": "Verifies an email identity for use with Amazon Pinpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "DeleteConfigurationSet": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSet.html",
      "description": "Delete an existing configuration set",
      "accessLevel": "Write",
      "resourceTypes": {
        "configuration-set": {
          "required": true
        }
      }
    },
    "DeleteConfigurationSetEventDestination": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSetEventDestination.html",
      "description": "Delete an event destination",
      "accessLevel": "Write",
      "resourceTypes": {
        "configuration-set": {
          "required": true
        }
      }
    },
    "DeleteDedicatedIpPool": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteDedicatedIpPool.html",
      "description": "Delete a dedicated IP pool",
      "accessLevel": "Write",
      "resourceTypes": {
        "dedicated-ip-pool": {
          "required": true
        }
      }
    },
    "DeleteEmailIdentity": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteEmailIdentity.html",
      "description": "Deletes an email identity that you previously verified for use with Amazon Pinpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      }
    },
    "GetAccount": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetAccount.html",
      "description": "Obtain information about the email-sending status and capabilities",
      "accessLevel": "Read"
    },
    "GetBlacklistReports": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetBlacklistReports.html",
      "description": "Retrieve a list of the blacklists that your dedicated IP addresses appear on",
      "accessLevel": "Read"
    },
    "GetConfigurationSet": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSet.html",
      "description": "Get information about an existing configuration set",
      "accessLevel": "Read",
      "resourceTypes": {
        "configuration-set": {
          "required": true
        }
      }
    },
    "GetConfigurationSetEventDestinations": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSetEventDestinations.html",
      "description": "Retrieve a list of event destinations that are associated with a configuration set",
      "accessLevel": "Read",
      "resourceTypes": {
        "configuration-set": {
          "required": true
        }
      }
    },
    "GetDedicatedIp": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIp.html",
      "description": "Get information about a dedicated IP address",
      "accessLevel": "Read"
    },
    "GetDedicatedIps": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIps.html",
      "description": "List the dedicated IP addresses that are associated with your Amazon Pinpoint account",
      "accessLevel": "Read",
      "resourceTypes": {
        "dedicated-ip-pool": {
          "required": true
        }
      }
    },
    "GetDeliverabilityDashboardOptions": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityDashboardOptions.html",
      "description": "Show the status of the Deliverability dashboard",
      "accessLevel": "Read"
    },
    "GetDeliverabilityTestReport": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityTestReport.html",
      "description": "Retrieve the results of a predictive inbox placement test",
      "accessLevel": "Read",
      "resourceTypes": {
        "deliverability-test-report": {
          "required": true
        }
      }
    },
    "GetDomainStatisticsReport": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDomainStatisticsReport.html",
      "description": "Retrieve inbox placement and engagement rates for the domains that you use to send email",
      "accessLevel": "Read",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      }
    },
    "GetEmailIdentity": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetEmailIdentity.html",
      "description": "Provides information about a specific identity associated with your Amazon Pinpoint account",
      "accessLevel": "Read",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      }
    },
    "ListConfigurationSets": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListConfigurationSets.html",
      "description": "List all of the configuration sets associated with your Amazon Pinpoint account in the current region",
      "accessLevel": "List"
    },
    "ListDedicatedIpPools": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDedicatedIpPools.html",
      "description": "List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region",
      "accessLevel": "List"
    },
    "ListDeliverabilityTestReports": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDeliverabilityTestReports.html",
      "description": "Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses",
      "accessLevel": "List"
    },
    "ListEmailIdentities": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListEmailIdentities.html",
      "description": "Returns a list of all of the email identities that are associated with your Amazon Pinpoint account",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListTagsForResource.html",
      "description": "Retrieve a list of the tags (keys and values) that are associated with a specific resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "configuration-set": {
          "required": false
        },
        "dedicated-ip-pool": {
          "required": false
        },
        "deliverability-test-report": {
          "required": false
        },
        "identity": {
          "required": false
        }
      }
    },
    "PutAccountDedicatedIpWarmupAttributes": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountDedicatedIpWarmupAttributes.html",
      "description": "Enable or disable the automatic warm-up feature for dedicated IP addresses",
      "accessLevel": "Write"
    },
    "PutAccountSendingAttributes": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountSendingAttributes.html",
      "description": "Enable or disable the ability of your account to send email",
      "accessLevel": "Write"
    },
    "PutConfigurationSetDeliveryOptions": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetDeliveryOptions.html",
      "description": "Associate a configuration set with a dedicated IP pool",
      "accessLevel": "Write",
      "resourceTypes": {
        "configuration-set": {
          "required": true
        }
      }
    },
    "PutConfigurationSetReputationOptions": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetReputationOptions.html",
      "description": "Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region",
      "accessLevel": "Write",
      "resourceTypes": {
        "configuration-set": {
          "required": true
        }
      }
    },
    "PutConfigurationSetSendingOptions": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetSendingOptions.html",
      "description": "Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region",
      "accessLevel": "Write",
      "resourceTypes": {
        "configuration-set": {
          "required": true
        }
      }
    },
    "PutConfigurationSetTrackingOptions": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetTrackingOptions.html",
      "description": "Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint",
      "accessLevel": "Write",
      "resourceTypes": {
        "configuration-set": {
          "required": true
        }
      }
    },
    "PutDedicatedIpInPool": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpInPool.html",
      "description": "Move a dedicated IP address to an existing dedicated IP pool",
      "accessLevel": "Write",
      "resourceTypes": {
        "dedicated-ip-pool": {
          "required": true
        }
      }
    },
    "PutDedicatedIpWarmupAttributes": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpWarmupAttributes.html",
      "description": "Put Dedicated IP warm up attributes",
      "accessLevel": "Write"
    },
    "PutDeliverabilityDashboardOption": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDeliverabilityDashboardOption.html",
      "description": "Enable or disable the Deliverability dashboard",
      "accessLevel": "Write"
    },
    "PutEmailIdentityDkimAttributes": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityDkimAttributes.html",
      "description": "Used to enable or disable DKIM authentication for an email identity",
      "accessLevel": "Write",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      }
    },
    "PutEmailIdentityFeedbackAttributes": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityFeedbackAttributes.html",
      "description": "Used to enable or disable feedback forwarding for an identity",
      "accessLevel": "Write",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      }
    },
    "PutEmailIdentityMailFromAttributes": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityMailFromAttributes.html",
      "description": "Used to enable or disable the custom Mail-From domain configuration for an email identity",
      "accessLevel": "Write",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      }
    },
    "SendEmail": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_SendEmail.html",
      "description": "Sends an email message",
      "accessLevel": "Write",
      "resourceTypes": {
        "identity": {
          "required": true
        }
      },
      "conditions": [
        "ses:FeedbackAddress",
        "ses:FromAddress",
        "ses:FromDisplayName",
        "ses:Recipients"
      ]
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_TagResource.html",
      "description": "Add one or more tags (keys and values) to a specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "configuration-set": {
          "required": false
        },
        "dedicated-ip-pool": {
          "required": false
        },
        "deliverability-test-report": {
          "required": false
        },
        "identity": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UntagResource.html",
      "description": "Remove one or more tags (keys and values) from a specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "configuration-set": {
          "required": false
        },
        "dedicated-ip-pool": {
          "required": false
        },
        "deliverability-test-report": {
          "required": false
        },
        "identity": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateConfigurationSetEventDestination": {
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UpdateConfigurationSetEventDestination.html",
      "description": "Update the configuration of an event destination for a configuration set",
      "accessLevel": "Write",
      "resourceTypes": {
        "configuration-set": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "configuration-set": {
      "name": "configuration-set",
      "url": "",
      "arn": "arn:${Partition}:ses:${Region}:${Account}:configuration-set/${ConfigurationSetName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "dedicated-ip-pool": {
      "name": "dedicated-ip-pool",
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DedicatedIp.html",
      "arn": "arn:${Partition}:ses:${Region}:${Account}:dedicated-ip-pool/${CustomVerificationEmailTemplateName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "deliverability-test-report": {
      "name": "deliverability-test-report",
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeliverabilityTestReport.html",
      "arn": "arn:${Partition}:ses:${Region}:${Account}:deliverability-test-report/${CustomVerificationEmailTemplateName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "event-destination": {
      "name": "event-destination",
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_EventDestination.html",
      "arn": "arn:${Partition}:ses:${Region}:${Account}:configuration-set/${ConfigurationSetName}:event-destination/${EventDestinationName}",
      "conditionKeys": []
    },
    "identity": {
      "name": "identity",
      "url": "https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_IdentityInfo.html",
      "arn": "arn:${Partition}:ses:${Region}:${Account}:identity/${IdentityName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [ses-pinpoint](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpointemailservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Create a configuration set. Configuration sets are groups of rules that you can apply to the emails you send using Amazon Pinpoint
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSet.html
   */
  public toCreateConfigurationSet() {
    this.add('ses-pinpoint:CreateConfigurationSet');
    return this;
  }

  /**
   * Create an event destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateConfigurationSetEventDestination.html
   */
  public toCreateConfigurationSetEventDestination() {
    this.add('ses-pinpoint:CreateConfigurationSetEventDestination');
    return this;
  }

  /**
   * Create a new pool of dedicated IP addresses
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDedicatedIpPool.html
   */
  public toCreateDedicatedIpPool() {
    this.add('ses-pinpoint:CreateDedicatedIpPool');
    return this;
  }

  /**
   * Create a new predictive inbox placement test.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateDeliverabilityTestReport.html
   */
  public toCreateDeliverabilityTestReport() {
    this.add('ses-pinpoint:CreateDeliverabilityTestReport');
    return this;
  }

  /**
   * Verifies an email identity for use with Amazon Pinpoint
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_CreateEmailIdentity.html
   */
  public toCreateEmailIdentity() {
    this.add('ses-pinpoint:CreateEmailIdentity');
    return this;
  }

  /**
   * Delete an existing configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSet.html
   */
  public toDeleteConfigurationSet() {
    this.add('ses-pinpoint:DeleteConfigurationSet');
    return this;
  }

  /**
   * Delete an event destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteConfigurationSetEventDestination.html
   */
  public toDeleteConfigurationSetEventDestination() {
    this.add('ses-pinpoint:DeleteConfigurationSetEventDestination');
    return this;
  }

  /**
   * Delete a dedicated IP pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteDedicatedIpPool.html
   */
  public toDeleteDedicatedIpPool() {
    this.add('ses-pinpoint:DeleteDedicatedIpPool');
    return this;
  }

  /**
   * Deletes an email identity that you previously verified for use with Amazon Pinpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeleteEmailIdentity.html
   */
  public toDeleteEmailIdentity() {
    this.add('ses-pinpoint:DeleteEmailIdentity');
    return this;
  }

  /**
   * Obtain information about the email-sending status and capabilities
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetAccount.html
   */
  public toGetAccount() {
    this.add('ses-pinpoint:GetAccount');
    return this;
  }

  /**
   * Retrieve a list of the blacklists that your dedicated IP addresses appear on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetBlacklistReports.html
   */
  public toGetBlacklistReports() {
    this.add('ses-pinpoint:GetBlacklistReports');
    return this;
  }

  /**
   * Get information about an existing configuration set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSet.html
   */
  public toGetConfigurationSet() {
    this.add('ses-pinpoint:GetConfigurationSet');
    return this;
  }

  /**
   * Retrieve a list of event destinations that are associated with a configuration set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetConfigurationSetEventDestinations.html
   */
  public toGetConfigurationSetEventDestinations() {
    this.add('ses-pinpoint:GetConfigurationSetEventDestinations');
    return this;
  }

  /**
   * Get information about a dedicated IP address
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIp.html
   */
  public toGetDedicatedIp() {
    this.add('ses-pinpoint:GetDedicatedIp');
    return this;
  }

  /**
   * List the dedicated IP addresses that are associated with your Amazon Pinpoint account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDedicatedIps.html
   */
  public toGetDedicatedIps() {
    this.add('ses-pinpoint:GetDedicatedIps');
    return this;
  }

  /**
   * Show the status of the Deliverability dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityDashboardOptions.html
   */
  public toGetDeliverabilityDashboardOptions() {
    this.add('ses-pinpoint:GetDeliverabilityDashboardOptions');
    return this;
  }

  /**
   * Retrieve the results of a predictive inbox placement test
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDeliverabilityTestReport.html
   */
  public toGetDeliverabilityTestReport() {
    this.add('ses-pinpoint:GetDeliverabilityTestReport');
    return this;
  }

  /**
   * Retrieve inbox placement and engagement rates for the domains that you use to send email
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetDomainStatisticsReport.html
   */
  public toGetDomainStatisticsReport() {
    this.add('ses-pinpoint:GetDomainStatisticsReport');
    return this;
  }

  /**
   * Provides information about a specific identity associated with your Amazon Pinpoint account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_GetEmailIdentity.html
   */
  public toGetEmailIdentity() {
    this.add('ses-pinpoint:GetEmailIdentity');
    return this;
  }

  /**
   * List all of the configuration sets associated with your Amazon Pinpoint account in the current region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListConfigurationSets.html
   */
  public toListConfigurationSets() {
    this.add('ses-pinpoint:ListConfigurationSets');
    return this;
  }

  /**
   * List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDedicatedIpPools.html
   */
  public toListDedicatedIpPools() {
    this.add('ses-pinpoint:ListDedicatedIpPools');
    return this;
  }

  /**
   * Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListDeliverabilityTestReports.html
   */
  public toListDeliverabilityTestReports() {
    this.add('ses-pinpoint:ListDeliverabilityTestReports');
    return this;
  }

  /**
   * Returns a list of all of the email identities that are associated with your Amazon Pinpoint account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListEmailIdentities.html
   */
  public toListEmailIdentities() {
    this.add('ses-pinpoint:ListEmailIdentities');
    return this;
  }

  /**
   * Retrieve a list of the tags (keys and values) that are associated with a specific resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.add('ses-pinpoint:ListTagsForResource');
    return this;
  }

  /**
   * Enable or disable the automatic warm-up feature for dedicated IP addresses
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountDedicatedIpWarmupAttributes.html
   */
  public toPutAccountDedicatedIpWarmupAttributes() {
    this.add('ses-pinpoint:PutAccountDedicatedIpWarmupAttributes');
    return this;
  }

  /**
   * Enable or disable the ability of your account to send email
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutAccountSendingAttributes.html
   */
  public toPutAccountSendingAttributes() {
    this.add('ses-pinpoint:PutAccountSendingAttributes');
    return this;
  }

  /**
   * Associate a configuration set with a dedicated IP pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetDeliveryOptions.html
   */
  public toPutConfigurationSetDeliveryOptions() {
    this.add('ses-pinpoint:PutConfigurationSetDeliveryOptions');
    return this;
  }

  /**
   * Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetReputationOptions.html
   */
  public toPutConfigurationSetReputationOptions() {
    this.add('ses-pinpoint:PutConfigurationSetReputationOptions');
    return this;
  }

  /**
   * Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetSendingOptions.html
   */
  public toPutConfigurationSetSendingOptions() {
    this.add('ses-pinpoint:PutConfigurationSetSendingOptions');
    return this;
  }

  /**
   * Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutConfigurationSetTrackingOptions.html
   */
  public toPutConfigurationSetTrackingOptions() {
    this.add('ses-pinpoint:PutConfigurationSetTrackingOptions');
    return this;
  }

  /**
   * Move a dedicated IP address to an existing dedicated IP pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpInPool.html
   */
  public toPutDedicatedIpInPool() {
    this.add('ses-pinpoint:PutDedicatedIpInPool');
    return this;
  }

  /**
   * Put Dedicated IP warm up attributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDedicatedIpWarmupAttributes.html
   */
  public toPutDedicatedIpWarmupAttributes() {
    this.add('ses-pinpoint:PutDedicatedIpWarmupAttributes');
    return this;
  }

  /**
   * Enable or disable the Deliverability dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutDeliverabilityDashboardOption.html
   */
  public toPutDeliverabilityDashboardOption() {
    this.add('ses-pinpoint:PutDeliverabilityDashboardOption');
    return this;
  }

  /**
   * Used to enable or disable DKIM authentication for an email identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityDkimAttributes.html
   */
  public toPutEmailIdentityDkimAttributes() {
    this.add('ses-pinpoint:PutEmailIdentityDkimAttributes');
    return this;
  }

  /**
   * Used to enable or disable feedback forwarding for an identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityFeedbackAttributes.html
   */
  public toPutEmailIdentityFeedbackAttributes() {
    this.add('ses-pinpoint:PutEmailIdentityFeedbackAttributes');
    return this;
  }

  /**
   * Used to enable or disable the custom Mail-From domain configuration for an email identity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_PutEmailIdentityMailFromAttributes.html
   */
  public toPutEmailIdentityMailFromAttributes() {
    this.add('ses-pinpoint:PutEmailIdentityMailFromAttributes');
    return this;
  }

  /**
   * Sends an email message
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFeedbackAddress()
   * - .ifFromAddress()
   * - .ifFromDisplayName()
   * - .ifRecipients()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_SendEmail.html
   */
  public toSendEmail() {
    this.add('ses-pinpoint:SendEmail');
    return this;
  }

  /**
   * Add one or more tags (keys and values) to a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.add('ses-pinpoint:TagResource');
    return this;
  }

  /**
   * Remove one or more tags (keys and values) from a specified resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.add('ses-pinpoint:UntagResource');
    return this;
  }

  /**
   * Update the configuration of an event destination for a configuration set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_UpdateConfigurationSetEventDestination.html
   */
  public toUpdateConfigurationSetEventDestination() {
    this.add('ses-pinpoint:UpdateConfigurationSetEventDestination');
    return this;
  }

  /**
   * Adds a resource of type configuration-set to the statement
   *
   * @param configurationSetName - Identifier for the configurationSetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfigurationSet(configurationSetName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:configuration-set/${ConfigurationSetName}';
    arn = arn.replace('${ConfigurationSetName}', configurationSetName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dedicated-ip-pool to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DedicatedIp.html
   *
   * @param customVerificationEmailTemplateName - Identifier for the customVerificationEmailTemplateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDedicatedIpPool(customVerificationEmailTemplateName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:dedicated-ip-pool/${CustomVerificationEmailTemplateName}';
    arn = arn.replace('${CustomVerificationEmailTemplateName}', customVerificationEmailTemplateName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deliverability-test-report to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_DeliverabilityTestReport.html
   *
   * @param customVerificationEmailTemplateName - Identifier for the customVerificationEmailTemplateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeliverabilityTestReport(customVerificationEmailTemplateName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:deliverability-test-report/${CustomVerificationEmailTemplateName}';
    arn = arn.replace('${CustomVerificationEmailTemplateName}', customVerificationEmailTemplateName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type event-destination to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_EventDestination.html
   *
   * @param configurationSetName - Identifier for the configurationSetName.
   * @param eventDestinationName - Identifier for the eventDestinationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEventDestination(configurationSetName: string, eventDestinationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:configuration-set/${ConfigurationSetName}:event-destination/${EventDestinationName}';
    arn = arn.replace('${ConfigurationSetName}', configurationSetName);
    arn = arn.replace('${EventDestinationName}', eventDestinationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type identity to the statement
   *
   * https://docs.aws.amazon.com/pinpoint-email/latest/APIReference/API_IdentityInfo.html
   *
   * @param identityName - Identifier for the identityName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdentity(identityName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ses:${Region}:${Account}:identity/${IdentityName}';
    arn = arn.replace('${IdentityName}', identityName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The "Return-Path" address, which specifies where bounces and complaints are sent by email feedback forwarding.
   *
   * Applies to actions:
   * - .toSendEmail()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFeedbackAddress(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`ses:FeedbackAddress`, value, operator || 'StringLike');
  }

  /**
   * The "From" address of a message.
   *
   * Applies to actions:
   * - .toSendEmail()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFromAddress(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`ses:FromAddress`, value, operator || 'StringLike');
  }

  /**
   * The "From" address that is used as the display name of a message.
   *
   * Applies to actions:
   * - .toSendEmail()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFromDisplayName(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`ses:FromDisplayName`, value, operator || 'StringLike');
  }

  /**
   * The recipient addresses of a message, which include the "To", "CC", and "BCC" addresses.
   *
   * Applies to actions:
   * - .toSendEmail()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRecipients(value: string | string[], operator?: string): PolicyStatementWithCondition {
    return this.if(`ses:Recipients`, value, operator || 'StringLike');
  }
}
