import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service iot
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiot.html
 */
export class Iot extends PolicyStatement {
  public servicePrefix = 'iot';
  public actions: Actions = {
    "AcceptCertificateTransfer": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_AcceptCertificateTransfer.html",
      "description": "Accepts a pending certificate transfer.",
      "accessLevel": "Write"
    },
    "AddThingToBillingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToBillingGroup.html",
      "description": "Adds a thing to the specified billing group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "billinggroup": {
          "required": true
        },
        "thing": {
          "required": true
        }
      }
    },
    "AddThingToThingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToThingGroup.html",
      "description": "Adds a thing to the specified thing group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "thing": {
          "required": true
        },
        "thinggroup": {
          "required": true
        }
      }
    },
    "AssociateTargetsWithJob": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_AssociateTargetsWithJob.html",
      "description": "Associates a group with a continuous job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "job": {
          "required": true
        },
        "thing": {
          "required": true
        },
        "thinggroup": {
          "required": true
        }
      }
    },
    "AttachPolicy": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPolicy.html",
      "description": "Attaches a policy to the specified target.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "cert": {
          "required": false
        },
        "thinggroup": {
          "required": false
        }
      }
    },
    "AttachPrincipalPolicy": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPrincipalPolicy.html",
      "description": "Attaches the specified policy to the specified principal (certificate or other credential).",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "cert": {
          "required": false
        }
      }
    },
    "AttachSecurityProfile": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_AttachSecurityProfile.html",
      "description": "Associates a Device Defender security profile with a thing group or with this account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "securityprofile": {
          "required": true
        },
        "dimension": {
          "required": false
        }
      }
    },
    "AttachThingPrincipal": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_AttachThingPrincipal.html",
      "description": "Attaches the specified principal to the specified thing.",
      "accessLevel": "Write"
    },
    "CancelAuditMitigationActionsTask": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditMitigationActionsTask.html",
      "description": "Cancels a mitigation action task that is in progress.",
      "accessLevel": "Write"
    },
    "CancelAuditTask": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditTask.html",
      "description": "Cancels an audit that is in progress. The audit can be either scheduled or on-demand.",
      "accessLevel": "Write"
    },
    "CancelCertificateTransfer": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CancelCertificateTransfer.html",
      "description": "Cancels a pending transfer for the specified certificate.",
      "accessLevel": "Write"
    },
    "CancelJob": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJob.html",
      "description": "Cancels a job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "job": {
          "required": true
        }
      }
    },
    "CancelJobExecution": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJobExecution.html",
      "description": "Cancels a job execution on a particular device.",
      "accessLevel": "Write",
      "resourceTypes": {
        "job": {
          "required": true
        },
        "thing": {
          "required": true
        }
      }
    },
    "ClearDefaultAuthorizer": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ClearDefaultAuthorizer.html",
      "description": "Clears the default authorizer.",
      "accessLevel": "Write"
    },
    "CloseTunnel": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CloseTunnel.html",
      "description": "Closes a tunnel.",
      "accessLevel": "Write",
      "resourceTypes": {
        "tunnel": {
          "required": true
        }
      },
      "conditions": [
        "iot:Delete"
      ]
    },
    "Connect": {
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html",
      "description": "Connect as the specified client",
      "accessLevel": "Write",
      "resourceTypes": {
        "client": {
          "required": true
        }
      }
    },
    "CreateAuthorizer": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateAuthorizer.html",
      "description": "Creates an authorizer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "authorizer": {
          "required": true
        }
      }
    },
    "CreateBillingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateBillingGroup.html",
      "description": "Creates a billing group.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "billinggroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateCertificateFromCsr": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCertificateFromCsr.html",
      "description": "Creates an X.509 certificate using the specified certificate signing request.",
      "accessLevel": "Write"
    },
    "CreateDimension": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDimension.html",
      "description": "Defines a dimension that can be used to to limit the scope of a metric used in a security profile.",
      "accessLevel": "Write",
      "resourceTypes": {
        "dimension": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDynamicThingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDynamicThingGroup.html",
      "description": "Creates a Dynamic Thing Group",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "dynamicthinggroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateJob": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateJob.html",
      "description": "Creates a job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "job": {
          "required": true
        },
        "thing": {
          "required": true
        },
        "thinggroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateKeysAndCertificate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateKeysAndCertificate.html",
      "description": "Creates a 2048 bit RSA key pair and issues an X.509 certificate using the issued public key.",
      "accessLevel": "Write"
    },
    "CreateMitigationAction": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateMitigationAction.html",
      "description": "Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask.",
      "accessLevel": "Write",
      "resourceTypes": {
        "mitigationaction": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateOTAUpdate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateOTAUpdate.html",
      "description": "Creates an OTA update job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "otaupdate": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreatePolicy": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicy.html",
      "description": "Creates an AWS IoT policy.",
      "accessLevel": "Write"
    },
    "CreatePolicyVersion": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicyVersion.html",
      "description": "Creates a new version of the specified AWS IoT policy.",
      "accessLevel": "Write",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "CreateProvisioningClaim": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningClaim.html",
      "description": "Creates a provisioning claim.",
      "accessLevel": "Write",
      "resourceTypes": {
        "provisioningtemplate": {
          "required": true
        }
      }
    },
    "CreateProvisioningTemplate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplate.html",
      "description": "Creates a fleet provisioning template.",
      "accessLevel": "Write",
      "resourceTypes": {
        "provisioningtemplate": {
          "required": true
        }
      }
    },
    "CreateProvisioningTemplateVersion": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplateVersion.html",
      "description": "Creates a new version of a fleet provisioning template.",
      "accessLevel": "Write",
      "resourceTypes": {
        "provisioningtemplate": {
          "required": true
        }
      }
    },
    "CreateRoleAlias": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateRoleAlias.html",
      "description": "Creates a role alias.",
      "accessLevel": "Write",
      "resourceTypes": {
        "role": {
          "required": true
        },
        "rolealias": {
          "required": true
        }
      }
    },
    "CreateScheduledAudit": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateScheduledAudit.html",
      "description": "Creates a scheduled audit that is run at a specified time interval.",
      "accessLevel": "Write",
      "resourceTypes": {
        "scheduledaudit": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateSecurityProfile": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateSecurityProfile.html",
      "description": "Creates a Device Defender security profile.",
      "accessLevel": "Write",
      "resourceTypes": {
        "securityprofile": {
          "required": true
        },
        "dimension": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateStream": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateStream.html",
      "description": "Creates a new AWS IoT stream",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateThing": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThing.html",
      "description": "Creates a thing in the thing registry.",
      "accessLevel": "Write",
      "resourceTypes": {
        "thing": {
          "required": true
        },
        "billinggroup": {
          "required": false
        }
      }
    },
    "CreateThingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThingGroup.html",
      "description": "Creates a thing group.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "thinggroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateThingType": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThingType.html",
      "description": "Creates a new thing type.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "thingtype": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateTopicRule": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_CreateTopicRule.html",
      "description": "Creates a rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteAccountAuditConfiguration": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAccountAuditConfiguration.html",
      "description": "Deletes the audit configuration associated with the account.",
      "accessLevel": "Write"
    },
    "DeleteAuthorizer": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAuthorizer.html",
      "description": "Deletes the specified authorizer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "authorizer": {
          "required": true
        }
      }
    },
    "DeleteBillingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteBillingGroup.html",
      "description": "Deletes the specified billing group.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "billinggroup": {
          "required": true
        }
      }
    },
    "DeleteCACertificate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCACertificate.html",
      "description": "Deletes a registered CA certificate.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cacert": {
          "required": true
        }
      }
    },
    "DeleteCertificate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCertificate.html",
      "description": "Deletes the specified certificate.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cert": {
          "required": true
        }
      }
    },
    "DeleteDimension": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDimension.html",
      "description": "Removes the specified dimension from your AWS account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "dimension": {
          "required": true
        }
      }
    },
    "DeleteDynamicThingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDynamicThingGroup.html",
      "description": "Deletes the specified Dynamic Thing Group",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "dynamicthinggroup": {
          "required": true
        }
      }
    },
    "DeleteJob": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJob.html",
      "description": "Deletes a job and its related job executions.",
      "accessLevel": "Write",
      "resourceTypes": {
        "job": {
          "required": true
        }
      }
    },
    "DeleteJobExecution": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJobExecution.html",
      "description": "Deletes a job execution.",
      "accessLevel": "Write",
      "resourceTypes": {
        "job": {
          "required": true
        },
        "thing": {
          "required": true
        }
      }
    },
    "DeleteMitigationAction": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteMitigationAction.html",
      "description": "Deletes a defined mitigation action from your AWS account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "mitigationaction": {
          "required": true
        }
      }
    },
    "DeleteOTAUpdate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteOTAUpdate.html",
      "description": "Deletes an OTA update job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "otaupdate": {
          "required": true
        }
      }
    },
    "DeletePolicy": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicy.html",
      "description": "Deletes the specified policy.",
      "accessLevel": "Write",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "DeletePolicyVersion": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicyVersion.html",
      "description": "Deletes the specified version of the specified policy.",
      "accessLevel": "Write",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "DeleteProvisioningTemplate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplate.html",
      "description": "Deletes a fleet provisioning template.",
      "accessLevel": "Write",
      "resourceTypes": {
        "provisioningtemplate": {
          "required": true
        }
      }
    },
    "DeleteProvisioningTemplateVersion": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplateVersion.html",
      "description": "Deletes a fleet provisioning template version.",
      "accessLevel": "Write",
      "resourceTypes": {
        "provisioningtemplate": {
          "required": true
        }
      }
    },
    "DeleteRegistrationCode": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRegistrationCode.html",
      "description": "Deletes a CA certificate registration code.",
      "accessLevel": "Write"
    },
    "DeleteRoleAlias": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRoleAlias.html",
      "description": "Deletes the specified role alias.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rolealias": {
          "required": true
        }
      }
    },
    "DeleteScheduledAudit": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteScheduledAudit.html",
      "description": "Deletes a scheduled audit.",
      "accessLevel": "Write",
      "resourceTypes": {
        "scheduledaudit": {
          "required": true
        }
      }
    },
    "DeleteSecurityProfile": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteSecurityProfile.html",
      "description": "Deletes a Device Defender security profile.",
      "accessLevel": "Write",
      "resourceTypes": {
        "securityprofile": {
          "required": true
        },
        "dimension": {
          "required": false
        }
      }
    },
    "DeleteStream": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteStream.html",
      "description": "Deletes a specified stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "DeleteThing": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html",
      "description": "Deletes the specified thing.",
      "accessLevel": "Write",
      "resourceTypes": {
        "thing": {
          "required": true
        }
      }
    },
    "DeleteThingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingGroup.html",
      "description": "Deletes the specified thing group.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "thinggroup": {
          "required": true
        }
      }
    },
    "DeleteThingShadow": {
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html",
      "description": "Deletes the specified thing shadow.",
      "accessLevel": "Write",
      "resourceTypes": {
        "thing": {
          "required": true
        }
      }
    },
    "DeleteThingType": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingType.html",
      "description": "Deletes the specified thing type.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "thingtype": {
          "required": true
        }
      }
    },
    "DeleteTopicRule": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteTopicRule.html",
      "description": "Deletes the specified rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "DeleteV2LoggingLevel": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteV2LoggingLevel.html",
      "description": "Deletes the specified v2 logging level.",
      "accessLevel": "Write"
    },
    "DeprecateThingType": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DeprecateThingType.html",
      "description": "Deprecates the specified thing type.",
      "accessLevel": "Write",
      "resourceTypes": {
        "thingtype": {
          "required": true
        }
      }
    },
    "DescribeAccountAuditConfiguration": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAccountAuditConfiguration.html",
      "description": "Gets information about audit configurations for the account.",
      "accessLevel": "Read"
    },
    "DescribeAuditMitigationActionsTask": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditMitigationActionsTask.html",
      "description": "Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings.",
      "accessLevel": "Read"
    },
    "DescribeAuditTask": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditTask.html",
      "description": "Gets information about a Device Defender audit.",
      "accessLevel": "Read"
    },
    "DescribeAuthorizer": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuthorizer.html",
      "description": "Describes an authorizer.",
      "accessLevel": "Read",
      "resourceTypes": {
        "authorizer": {
          "required": true
        }
      }
    },
    "DescribeBillingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeBillingGroup.html",
      "description": "Gets information about the specified billing group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "billinggroup": {
          "required": true
        }
      }
    },
    "DescribeCACertificate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCACertificate.html",
      "description": "Describes a registered CA certificate.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cacert": {
          "required": true
        }
      }
    },
    "DescribeCertificate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCertificate.html",
      "description": "Gets information about the specified certificate.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cert": {
          "required": true
        }
      }
    },
    "DescribeDefaultAuthorizer": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDefaultAuthorizer.html",
      "description": "Describes the default authorizer.",
      "accessLevel": "Read"
    },
    "DescribeDimension": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDimension.html",
      "description": "Provides details about a dimension that is defined in your AWS account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "dimension": {
          "required": true
        }
      }
    },
    "DescribeEndpoint": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEndpoint.html",
      "description": "Returns a unique endpoint specific to the AWS account making the call.",
      "accessLevel": "Read"
    },
    "DescribeEventConfigurations": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEventConfigurations.html",
      "description": "Returns account event configurations.",
      "accessLevel": "Read"
    },
    "DescribeIndex": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeIndex.html",
      "description": "Gets information about the specified index.",
      "accessLevel": "Read",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    },
    "DescribeJob": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJob.html",
      "description": "Describes a job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "job": {
          "required": true
        }
      }
    },
    "DescribeJobExecution": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJobExecution.html",
      "description": "Describes a job execution.",
      "accessLevel": "Read",
      "resourceTypes": {
        "job": {
          "required": false
        },
        "thing": {
          "required": false
        }
      }
    },
    "DescribeMitigationAction": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeMitigationAction.html",
      "description": "Gets information about a mitigation action.",
      "accessLevel": "Read",
      "resourceTypes": {
        "mitigationaction": {
          "required": true
        }
      }
    },
    "DescribeProvisioningTemplate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplate.html",
      "description": "Returns information about a fleet provisioning template.",
      "accessLevel": "Read",
      "resourceTypes": {
        "provisioningtemplate": {
          "required": true
        }
      }
    },
    "DescribeProvisioningTemplateVersion": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplateVersion.html",
      "description": "Returns information about a fleet provisioning template version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "provisioningtemplate": {
          "required": true
        }
      }
    },
    "DescribeRoleAlias": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeRoleAlias.html",
      "description": "Describes a role alias.",
      "accessLevel": "Read",
      "resourceTypes": {
        "rolealias": {
          "required": true
        }
      }
    },
    "DescribeScheduledAudit": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeScheduledAudit.html",
      "description": "Gets information about a scheduled audit.",
      "accessLevel": "Read",
      "resourceTypes": {
        "scheduledaudit": {
          "required": true
        }
      }
    },
    "DescribeSecurityProfile": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeSecurityProfile.html",
      "description": "Gets information about a Device Defender security profile.",
      "accessLevel": "Read",
      "resourceTypes": {
        "securityprofile": {
          "required": true
        }
      }
    },
    "DescribeStream": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeStream.html",
      "description": "Gets information about the specified stream.",
      "accessLevel": "Read",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "DescribeThing": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThing.html",
      "description": "Gets information about the specified thing.",
      "accessLevel": "Read",
      "resourceTypes": {
        "thing": {
          "required": true
        }
      }
    },
    "DescribeThingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingGroup.html",
      "description": "Gets information about the specified thing group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "thinggroup": {
          "required": true
        }
      }
    },
    "DescribeThingRegistrationTask": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingRegistrationTask.html",
      "description": "Gets information about the bulk thing registration task.",
      "accessLevel": "Read"
    },
    "DescribeThingType": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingType.html",
      "description": "Gets information about the specified thing type.",
      "accessLevel": "Read",
      "resourceTypes": {
        "thingtype": {
          "required": true
        }
      }
    },
    "DescribeTunnel": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeTunnel.html",
      "description": "Describes a tunnel.",
      "accessLevel": "Read",
      "resourceTypes": {
        "tunnel": {
          "required": true
        }
      }
    },
    "DetachPolicy": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPolicy.html",
      "description": "Detaches a policy from the specified target.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "cert": {
          "required": false
        },
        "thinggroup": {
          "required": false
        }
      }
    },
    "DetachPrincipalPolicy": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPrincipalPolicy.html",
      "description": "Removes the specified policy from the specified certificate.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "cert": {
          "required": false
        }
      }
    },
    "DetachSecurityProfile": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DetachSecurityProfile.html",
      "description": "Disassociates a Device Defender security profile from a thing group or from this account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "securityprofile": {
          "required": true
        },
        "dimension": {
          "required": false
        }
      }
    },
    "DetachThingPrincipal": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DetachThingPrincipal.html",
      "description": "Detaches the specified principal from the specified thing.",
      "accessLevel": "Write"
    },
    "DisableTopicRule": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_DisableTopicRule.html",
      "description": "Disables the specified rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "EnableTopicRule": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_EnableTopicRule.html",
      "description": "Enables the specified rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "GetCardinality": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetCardinality.html",
      "description": "Get cardinality for IoT fleet index",
      "accessLevel": "Read",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    },
    "GetEffectivePolicies": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetEffectivePolicies.html",
      "description": "Gets effective policies.",
      "accessLevel": "Read",
      "resourceTypes": {
        "cert": {
          "required": false
        }
      }
    },
    "GetIndexingConfiguration": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetIndexingConfiguration.html",
      "description": "Gets current fleet indexing configuration",
      "accessLevel": "Read"
    },
    "GetJobDocument": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetJobDocument.html",
      "description": "Gets a job document.",
      "accessLevel": "Read",
      "resourceTypes": {
        "job": {
          "required": true
        }
      }
    },
    "GetLoggingOptions": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetLoggingOptions.html",
      "description": "Gets the logging options.",
      "accessLevel": "Read"
    },
    "GetOTAUpdate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetOTAUpdate.html",
      "description": "Gets the information about the OTA update job.",
      "accessLevel": "Read",
      "resourceTypes": {
        "otaupdate": {
          "required": true
        }
      }
    },
    "GetPendingJobExecutions": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetPendingJobExecutions.html",
      "description": "Gets the list of all jobs for a thing that are not in a terminal state.",
      "accessLevel": "Read",
      "resourceTypes": {
        "thing": {
          "required": true
        }
      }
    },
    "GetPercentiles": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetPercentiles.html",
      "description": "Get percentiles for IoT fleet index",
      "accessLevel": "Read",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    },
    "GetPolicy": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicy.html",
      "description": "Gets information about the specified policy with the policy document of the default version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "GetPolicyVersion": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicyVersion.html",
      "description": "Gets information about the specified policy version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "GetRegistrationCode": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetRegistrationCode.html",
      "description": "Gets a registration code used to register a CA certificate with AWS IoT.",
      "accessLevel": "Read"
    },
    "GetStatistics": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetStatistics.html",
      "description": "Get statistics for IoT fleet index",
      "accessLevel": "Read",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    },
    "GetThingShadow": {
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html",
      "description": "Gets the thing shadow.",
      "accessLevel": "Read",
      "resourceTypes": {
        "thing": {
          "required": true
        }
      }
    },
    "GetTopicRule": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetTopicRule.html",
      "description": "Gets information about the specified rule.",
      "accessLevel": "Read",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "GetV2LoggingOptions": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_GetV2LoggingOptions.html",
      "description": "Gets v2 logging options.",
      "accessLevel": "Read"
    },
    "ListActiveViolations": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListActiveViolations.html",
      "description": "Lists the active violations for a given Device Defender security profile or Thing.",
      "accessLevel": "List",
      "resourceTypes": {
        "securityprofile": {
          "required": false
        },
        "thing": {
          "required": false
        }
      }
    },
    "ListAttachedPolicies": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListAttachedPolicies.html",
      "description": "Lists the policies attached to the specified thing group.",
      "accessLevel": "List"
    },
    "ListAuditFindings": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditFindings.html",
      "description": "Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period.",
      "accessLevel": "List"
    },
    "ListAuditMitigationActionsExecutions": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsExecutions.html",
      "description": "Gets the status of audit mitigation action tasks that were executed.",
      "accessLevel": "List"
    },
    "ListAuditMitigationActionsTasks": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsTasks.html",
      "description": "Gets a list of audit mitigation action tasks that match the specified filters.",
      "accessLevel": "List"
    },
    "ListAuditTasks": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditTasks.html",
      "description": "Lists the Device Defender audits that have been performed during a given time period.",
      "accessLevel": "List"
    },
    "ListAuthorizers": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuthorizers.html",
      "description": "Lists the authorizers registered in your account.",
      "accessLevel": "List"
    },
    "ListBillingGroups": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListBillingGroups.html",
      "description": "Lists all billing groups.",
      "accessLevel": "List"
    },
    "ListCACertificates": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListCACertificates.html",
      "description": "Lists the CA certificates registered for your AWS account.",
      "accessLevel": "List"
    },
    "ListCertificates": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificates.html",
      "description": "Lists your certificates.",
      "accessLevel": "List"
    },
    "ListCertificatesByCA": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificatesByCA.html",
      "description": "List the device certificates signed by the specified CA certificate.",
      "accessLevel": "List"
    },
    "ListDimensions": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListDimensions.html",
      "description": "Lists the dimensions that are defined for your AWS account.",
      "accessLevel": "List"
    },
    "ListIndices": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListIndices.html",
      "description": "Lists all indices for fleet index",
      "accessLevel": "List"
    },
    "ListJobExecutionsForJob": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForJob.html",
      "description": "Lists the job executions for a job.",
      "accessLevel": "List",
      "resourceTypes": {
        "job": {
          "required": true
        }
      }
    },
    "ListJobExecutionsForThing": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForThing.html",
      "description": "Lists the job executions for the specified thing.",
      "accessLevel": "List",
      "resourceTypes": {
        "thing": {
          "required": true
        }
      }
    },
    "ListJobs": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobs.html",
      "description": "Lists jobs.",
      "accessLevel": "List"
    },
    "ListMitigationActions": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListMitigationActions.html",
      "description": "Gets a list of all mitigation actions that match the specified filter criteria.",
      "accessLevel": "List"
    },
    "ListNamedShadowsForThing": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListNamedShadowsForThing.html",
      "description": "Lists all named shadows for a given thing.",
      "accessLevel": "List",
      "resourceTypes": {
        "thing": {
          "required": true
        }
      }
    },
    "ListOTAUpdates": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListOTAUpdates.html",
      "description": "Lists OTA update jobs in the account.",
      "accessLevel": "List"
    },
    "ListOutgoingCertificates": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListOutgoingCertificates.html",
      "description": "Lists certificates that are being transfered but not yet accepted.",
      "accessLevel": "List"
    },
    "ListPolicies": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicies.html",
      "description": "Lists your policies.",
      "accessLevel": "List"
    },
    "ListPolicyPrincipals": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyPrincipals.html",
      "description": "Lists the principals associated with the specified policy.",
      "accessLevel": "List"
    },
    "ListPolicyVersions": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyVersions.html",
      "description": "Lists the versions of the specified policy, and identifies the default version.",
      "accessLevel": "List"
    },
    "ListPrincipalPolicies": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalPolicies.html",
      "description": "Lists the policies attached to the specified principal. If you use an Amazon Cognito identity, the ID needs to be in Amazon Cognito Identity format.",
      "accessLevel": "List"
    },
    "ListPrincipalThings": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalThings.html",
      "description": "Lists the things associated with the specified principal.",
      "accessLevel": "List"
    },
    "ListProvisioningTemplateVersions": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplateVersions.html",
      "description": "A list of fleet provisioning template versions.",
      "accessLevel": "List",
      "resourceTypes": {
        "provisioningtemplate": {
          "required": true
        }
      }
    },
    "ListProvisioningTemplates": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplates.html",
      "description": "Lists the fleet provisioning templates in your AWS account.",
      "accessLevel": "List"
    },
    "ListRoleAliases": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListRoleAliases.html",
      "description": "Lists role aliases.",
      "accessLevel": "List"
    },
    "ListScheduledAudits": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListScheduledAudits.html",
      "description": "Lists all of your scheduled audits.",
      "accessLevel": "List"
    },
    "ListSecurityProfiles": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html",
      "description": "Lists the Device Defender security profiles you have created.",
      "accessLevel": "List",
      "resourceTypes": {
        "dimension": {
          "required": false
        }
      }
    },
    "ListSecurityProfilesForTarget": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfilesForTarget.html",
      "description": "Lists the Device Defender security profiles attached to a target.",
      "accessLevel": "List",
      "resourceTypes": {
        "thinggroup": {
          "required": false
        }
      }
    },
    "ListStreams": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListStreams.html",
      "description": "Lists the streams in your account.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListTagsForResource.html",
      "description": "Lists all tags for a given resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "billinggroup": {
          "required": false
        },
        "dimension": {
          "required": false
        },
        "dynamicthinggroup": {
          "required": false
        },
        "job": {
          "required": false
        },
        "mitigationaction": {
          "required": false
        },
        "otaupdate": {
          "required": false
        },
        "rule": {
          "required": false
        },
        "scheduledaudit": {
          "required": false
        },
        "securityprofile": {
          "required": false
        },
        "stream": {
          "required": false
        },
        "thinggroup": {
          "required": false
        },
        "thingtype": {
          "required": false
        }
      }
    },
    "ListTargetsForPolicy": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForPolicy.html",
      "description": "List targets for the specified policy.",
      "accessLevel": "List",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "ListTargetsForSecurityProfile": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForSecurityProfile.html",
      "description": "Lists the targets associated with a given Device Defender security profile.",
      "accessLevel": "List",
      "resourceTypes": {
        "securityprofile": {
          "required": true
        }
      }
    },
    "ListThingGroups": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroups.html",
      "description": "Lists all thing groups.",
      "accessLevel": "List"
    },
    "ListThingGroupsForThing": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroupsForThing.html",
      "description": "List thing groups to which the specified thing belongs.",
      "accessLevel": "List",
      "resourceTypes": {
        "thing": {
          "required": true
        }
      }
    },
    "ListThingPrincipals": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingPrincipals.html",
      "description": "Lists the principals associated with the specified thing.",
      "accessLevel": "List"
    },
    "ListThingRegistrationTaskReports": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTaskReports.html",
      "description": "Lists information about bulk thing registration tasks.",
      "accessLevel": "List"
    },
    "ListThingRegistrationTasks": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTasks.html",
      "description": "Lists bulk thing registration tasks.",
      "accessLevel": "List"
    },
    "ListThingTypes": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingTypes.html",
      "description": "Lists all thing types.",
      "accessLevel": "List"
    },
    "ListThings": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListThings.html",
      "description": "Lists all things.",
      "accessLevel": "List"
    },
    "ListThingsInBillingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInBillingGroup.html",
      "description": "Lists all things in the specified billing group.",
      "accessLevel": "List",
      "resourceTypes": {
        "billinggroup": {
          "required": true
        }
      }
    },
    "ListThingsInThingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInThingGroup.html",
      "description": "Lists all things in the specified thing group.",
      "accessLevel": "List",
      "resourceTypes": {
        "thinggroup": {
          "required": true
        }
      }
    },
    "ListTopicRules": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListTopicRules.html",
      "description": "Lists the rules for the specific topic.",
      "accessLevel": "List"
    },
    "ListTunnels": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListTunnels.html",
      "description": "Lists tunnels.",
      "accessLevel": "List"
    },
    "ListV2LoggingLevels": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListV2LoggingLevels.html",
      "description": "Lists the v2 logging levels.",
      "accessLevel": "List"
    },
    "ListViolationEvents": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ListViolationEvents.html",
      "description": "Lists the Device Defender security profile violations discovered during the given time period.",
      "accessLevel": "List",
      "resourceTypes": {
        "securityprofile": {
          "required": false
        },
        "thing": {
          "required": false
        }
      }
    },
    "OpenTunnel": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_OpenTunnel.html",
      "description": "Opens a tunnel.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys",
        "iot:ThingGroupArn",
        "iot:TunnelDestinationService"
      ]
    },
    "Publish": {
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html",
      "description": "Publish to the specified topic.",
      "accessLevel": "Write",
      "resourceTypes": {
        "topic": {
          "required": true
        }
      }
    },
    "Receive": {
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html",
      "description": "Receive from the specified topic.",
      "accessLevel": "Write",
      "resourceTypes": {
        "topic": {
          "required": true
        }
      }
    },
    "RegisterCACertificate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCACertificate.html",
      "description": "Registers a CA certificate with AWS IoT.",
      "accessLevel": "Write"
    },
    "RegisterCertificate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificate.html",
      "description": "Registers a device certificate with AWS IoT.",
      "accessLevel": "Write"
    },
    "RegisterCertificateWithoutCA": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificateWithoutCA.html",
      "description": "Registers a device certificate with AWS IoT without a registered CA (certificate authority).",
      "accessLevel": "Write"
    },
    "RegisterThing": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterThing.html",
      "description": "Registers your thing.",
      "accessLevel": "Write"
    },
    "RejectCertificateTransfer": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_RejectCertificateTransfer.html",
      "description": "Rejects a pending certificate transfer.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cert": {
          "required": true
        }
      }
    },
    "RemoveThingFromBillingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromBillingGroup.html",
      "description": "Removes thing from the specified billing group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "billinggroup": {
          "required": true
        },
        "thing": {
          "required": true
        }
      }
    },
    "RemoveThingFromThingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromThingGroup.html",
      "description": "Removes thing from the specified thing group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "thing": {
          "required": true
        },
        "thinggroup": {
          "required": true
        }
      }
    },
    "ReplaceTopicRule": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_ReplaceTopicRule.html",
      "description": "Replaces the specified rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rule": {
          "required": true
        }
      }
    },
    "SearchIndex": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_SearchIndex.html",
      "description": "Search IoT fleet index",
      "accessLevel": "Read",
      "resourceTypes": {
        "index": {
          "required": true
        }
      }
    },
    "SetDefaultAuthorizer": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultAuthorizer.html",
      "description": "Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "authorizer": {
          "required": true
        }
      }
    },
    "SetDefaultPolicyVersion": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultPolicyVersion.html",
      "description": "Sets the specified version of the specified policy as the policy's default (operative) version.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "SetLoggingOptions": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_SetLoggingOptions.html",
      "description": "Sets the logging options.",
      "accessLevel": "Write"
    },
    "SetV2LoggingLevel": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingLevel.html",
      "description": "Sets the v2 logging level.",
      "accessLevel": "Write"
    },
    "SetV2LoggingOptions": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingOptions.html",
      "description": "Sets the v2 logging options.",
      "accessLevel": "Write"
    },
    "StartAuditMitigationActionsTask": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_StartAuditMitigationActionsTask.html",
      "description": "Starts a task that applies a set of mitigation actions to the specified target.",
      "accessLevel": "Write"
    },
    "StartNextPendingJobExecution": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_StartNextPendingJobExecution.html",
      "description": "Gets and starts the next pending job execution for a thing.",
      "accessLevel": "Write",
      "resourceTypes": {
        "thing": {
          "required": true
        }
      }
    },
    "StartOnDemandAuditTask": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_StartOnDemandAuditTask.html",
      "description": "Starts an on-demand Device Defender audit.",
      "accessLevel": "Write"
    },
    "StartThingRegistrationTask": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_StartThingRegistrationTask.html",
      "description": "Starts a bulk thing registration task.",
      "accessLevel": "Write"
    },
    "StopThingRegistrationTask": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_StopThingRegistrationTask.html",
      "description": "Stops a bulk thing registration task.",
      "accessLevel": "Write"
    },
    "Subscribe": {
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html",
      "description": "Subscribe to the specified TopicFilter.",
      "accessLevel": "Write",
      "resourceTypes": {
        "topicfilter": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "API_TagResource.html",
      "description": "Tag a specified resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "billinggroup": {
          "required": false
        },
        "dimension": {
          "required": false
        },
        "dynamicthinggroup": {
          "required": false
        },
        "job": {
          "required": false
        },
        "mitigationaction": {
          "required": false
        },
        "otaupdate": {
          "required": false
        },
        "rule": {
          "required": false
        },
        "scheduledaudit": {
          "required": false
        },
        "securityprofile": {
          "required": false
        },
        "stream": {
          "required": false
        },
        "thinggroup": {
          "required": false
        },
        "thingtype": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "TestAuthorization": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_TestAuthorization.html",
      "description": "Test the policies evaluation for group policies",
      "accessLevel": "Read",
      "resourceTypes": {
        "cert": {
          "required": false
        }
      }
    },
    "TestInvokeAuthorizer": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_TestInvokeAuthorizer.html",
      "description": "Invoke the specified custom authorizer for testing purposes.",
      "accessLevel": "Read",
      "resourceTypes": {
        "authorizer": {
          "required": true
        }
      }
    },
    "TransferCertificate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_TransferCertificate.html",
      "description": "Transfers the specified certificate to the specified AWS account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cert": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "API_UntagResource.html",
      "description": "Untag a specified resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "billinggroup": {
          "required": false
        },
        "dimension": {
          "required": false
        },
        "dynamicthinggroup": {
          "required": false
        },
        "job": {
          "required": false
        },
        "mitigationaction": {
          "required": false
        },
        "otaupdate": {
          "required": false
        },
        "rule": {
          "required": false
        },
        "scheduledaudit": {
          "required": false
        },
        "securityprofile": {
          "required": false
        },
        "stream": {
          "required": false
        },
        "thinggroup": {
          "required": false
        },
        "thingtype": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateAccountAuditConfiguration": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAccountAuditConfiguration.html",
      "description": "Configures or reconfigures the Device Defender audit settings for this account.",
      "accessLevel": "Write"
    },
    "UpdateAuthorizer": {
      "url": "API_UpdateAuthorizer.html",
      "description": "Updates an authorizer",
      "accessLevel": "Write",
      "resourceTypes": {
        "authorizer": {
          "required": true
        }
      }
    },
    "UpdateBillingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateBillingGroup.html",
      "description": "Updates information associated with the specified billing group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "billinggroup": {
          "required": true
        }
      }
    },
    "UpdateCACertificate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCACertificate.html",
      "description": "Updates a registered CA certificate.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cacert": {
          "required": true
        }
      }
    },
    "UpdateCertificate": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCertificate.html",
      "description": "Updates the status of the specified certificate. This operation is idempotent.",
      "accessLevel": "Write",
      "resourceTypes": {
        "cert": {
          "required": true
        }
      }
    },
    "UpdateDimension": {
      "url": "API_UpdateDimension.html",
      "description": "Updates the definition for a dimension.",
      "accessLevel": "Write",
      "resourceTypes": {
        "dimension": {
          "required": true
        }
      }
    },
    "UpdateDynamicThingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDynamicThingGroup.html",
      "description": "Updates a Dynamic Thing Group",
      "accessLevel": "Write",
      "resourceTypes": {
        "dynamicthinggroup": {
          "required": true
        }
      }
    },
    "UpdateEventConfigurations": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateEventConfigurations.html",
      "description": "Updates event configurations.",
      "accessLevel": "Write"
    },
    "UpdateIndexingConfiguration": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateIndexingConfiguration.html",
      "description": "Updates fleet indexing configuration",
      "accessLevel": "Write"
    },
    "UpdateJob": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateJob.html",
      "description": "Updates a job.",
      "accessLevel": "Write",
      "resourceTypes": {
        "job": {
          "required": true
        }
      }
    },
    "UpdateJobExecution": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateJobExecution.html",
      "description": "Updates a job execution.",
      "accessLevel": "Write",
      "resourceTypes": {
        "thing": {
          "required": true
        }
      }
    },
    "UpdateMitigationAction": {
      "url": "API_UpdateMitigationAction.html",
      "description": "Updates the definition for the specified mitigation action.",
      "accessLevel": "Write",
      "resourceTypes": {
        "mitigationaction": {
          "required": true
        }
      }
    },
    "UpdateProvisioningTemplate": {
      "url": "API_UpdateProvisioningTemplate.html",
      "description": "Updates a fleet provisioning template.",
      "accessLevel": "Write",
      "resourceTypes": {
        "provisioningtemplate": {
          "required": true
        }
      }
    },
    "UpdateRoleAlias": {
      "url": "API_UpdateRoleAlias.html",
      "description": "Updates the role alias",
      "accessLevel": "Write",
      "resourceTypes": {
        "rolealias": {
          "required": true
        },
        "role": {
          "required": false
        }
      }
    },
    "UpdateScheduledAudit": {
      "url": "API_UpdateScheduledAudit.html",
      "description": "Updates a scheduled audit, including what checks are performed and how often the audit takes place.",
      "accessLevel": "Write",
      "resourceTypes": {
        "scheduledaudit": {
          "required": true
        }
      }
    },
    "UpdateSecurityProfile": {
      "url": "API_UpdateSecurityProfile.html",
      "description": "Updates a Device Defender security profile.",
      "accessLevel": "Write",
      "resourceTypes": {
        "securityprofile": {
          "required": true
        },
        "dimension": {
          "required": false
        }
      }
    },
    "UpdateStream": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateStream.html",
      "description": "Updates the data for a stream.",
      "accessLevel": "Write",
      "resourceTypes": {
        "stream": {
          "required": true
        }
      }
    },
    "UpdateThing": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThing.html",
      "description": "Updates information associated with the specified thing.",
      "accessLevel": "Write",
      "resourceTypes": {
        "thing": {
          "required": true
        }
      }
    },
    "UpdateThingGroup": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroup.html",
      "description": "Updates information associated with the specified thing group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "thinggroup": {
          "required": true
        }
      }
    },
    "UpdateThingGroupsForThing": {
      "url": "https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroupsForThing.html",
      "description": "Updates the thing groups to which the thing belongs.",
      "accessLevel": "Write",
      "resourceTypes": {
        "thing": {
          "required": true
        },
        "thinggroup": {
          "required": false
        }
      }
    },
    "UpdateThingShadow": {
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html",
      "description": "Updates the thing shadow.",
      "accessLevel": "Write",
      "resourceTypes": {
        "thing": {
          "required": true
        }
      }
    },
    "ValidateSecurityProfileBehaviors": {
      "url": "API_ValidateSecurityProfileBehaviors.html",
      "description": "Validates a Device Defender security profile behaviors specification.",
      "accessLevel": "Read"
    }
  };
  public resourceTypes: ResourceTypes = {
    "client": {
      "name": "client",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/iot-message-broker.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:client/${ClientId}",
      "conditionKeys": []
    },
    "index": {
      "name": "index",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/iot-indexing.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:index/${IndexName}",
      "conditionKeys": []
    },
    "job": {
      "name": "job",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/iot-jobs.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:job/${JobId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "tunnel": {
      "name": "tunnel",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/iot-tunnels.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:tunnel/${TunnelId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "thing": {
      "name": "thing",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:thing/${ThingName}",
      "conditionKeys": []
    },
    "thinggroup": {
      "name": "thinggroup",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/thing-groups.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:thinggroup/${ThingGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "billinggroup": {
      "name": "billinggroup",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/billing-groups.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:billinggroup/${BillingGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "dynamicthinggroup": {
      "name": "dynamicthinggroup",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/dynamic-thing-groups.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:thinggroup/${ThingGroupName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "thingtype": {
      "name": "thingtype",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/thing-types.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:thingtype/${ThingTypeName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "topic": {
      "name": "topic",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/iot-message-broker.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:topic/${TopicName}",
      "conditionKeys": []
    },
    "topicfilter": {
      "name": "topicfilter",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/topics.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:topicfilter/${TopicFilter}",
      "conditionKeys": []
    },
    "rolealias": {
      "name": "rolealias",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:rolealias/${RoleAlias}",
      "conditionKeys": []
    },
    "role": {
      "name": "role",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html",
      "arn": "arn:${Partition}:iam:${Region}:${Account}:role/${Role}",
      "conditionKeys": []
    },
    "authorizer": {
      "name": "authorizer",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/custom-authorizer.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:authorizer/${AuthorizerName}",
      "conditionKeys": []
    },
    "policy": {
      "name": "policy",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/iot-policies.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:policy/${PolicyName}",
      "conditionKeys": []
    },
    "cert": {
      "name": "cert",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/x509-certs.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:cert/${Certificate}",
      "conditionKeys": []
    },
    "cacert": {
      "name": "cacert",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/x509-certs.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:cacert/${CACertificate}",
      "conditionKeys": []
    },
    "stream": {
      "name": "stream",
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ota-dev.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:stream/${streamId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "otaupdate": {
      "name": "otaupdate",
      "url": "https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ota-dev.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:otaupdate/${otaUpdateId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "scheduledaudit": {
      "name": "scheduledaudit",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-audit.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:scheduledaudit/${ScheduleName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "mitigationaction": {
      "name": "mitigationaction",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:mitigationaction/${MitigationActionName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "securityprofile": {
      "name": "securityprofile",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:securityprofile/${SecurityProfileName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "dimension": {
      "name": "dimension",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:dimension/${DimensionName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "rule": {
      "name": "rule",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:rule/${ruleName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "provisioningtemplate": {
      "name": "provisioningtemplate",
      "url": "https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html",
      "arn": "arn:${Partition}:iot:${Region}:${Account}:provisioningtemplate/${provisioningTemplate}",
      "conditionKeys": []
    }
  };

  /**
   * Accepts a pending certificate transfer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AcceptCertificateTransfer.html
   */
  public acceptCertificateTransfer() {
    this.add('iot:AcceptCertificateTransfer');
    return this;
  }

  /**
   * Adds a thing to the specified billing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToBillingGroup.html
   */
  public addThingToBillingGroup() {
    this.add('iot:AddThingToBillingGroup');
    return this;
  }

  /**
   * Adds a thing to the specified thing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToThingGroup.html
   */
  public addThingToThingGroup() {
    this.add('iot:AddThingToThingGroup');
    return this;
  }

  /**
   * Associates a group with a continuous job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AssociateTargetsWithJob.html
   */
  public associateTargetsWithJob() {
    this.add('iot:AssociateTargetsWithJob');
    return this;
  }

  /**
   * Attaches a policy to the specified target.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPolicy.html
   */
  public attachPolicy() {
    this.add('iot:AttachPolicy');
    return this;
  }

  /**
   * Attaches the specified policy to the specified principal (certificate or other credential).
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPrincipalPolicy.html
   */
  public attachPrincipalPolicy() {
    this.add('iot:AttachPrincipalPolicy');
    return this;
  }

  /**
   * Associates a Device Defender security profile with a thing group or with this account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachSecurityProfile.html
   */
  public attachSecurityProfile() {
    this.add('iot:AttachSecurityProfile');
    return this;
  }

  /**
   * Attaches the specified principal to the specified thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachThingPrincipal.html
   */
  public attachThingPrincipal() {
    this.add('iot:AttachThingPrincipal');
    return this;
  }

  /**
   * Cancels a mitigation action task that is in progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditMitigationActionsTask.html
   */
  public cancelAuditMitigationActionsTask() {
    this.add('iot:CancelAuditMitigationActionsTask');
    return this;
  }

  /**
   * Cancels an audit that is in progress. The audit can be either scheduled or on-demand.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditTask.html
   */
  public cancelAuditTask() {
    this.add('iot:CancelAuditTask');
    return this;
  }

  /**
   * Cancels a pending transfer for the specified certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelCertificateTransfer.html
   */
  public cancelCertificateTransfer() {
    this.add('iot:CancelCertificateTransfer');
    return this;
  }

  /**
   * Cancels a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJob.html
   */
  public cancelJob() {
    this.add('iot:CancelJob');
    return this;
  }

  /**
   * Cancels a job execution on a particular device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJobExecution.html
   */
  public cancelJobExecution() {
    this.add('iot:CancelJobExecution');
    return this;
  }

  /**
   * Clears the default authorizer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ClearDefaultAuthorizer.html
   */
  public clearDefaultAuthorizer() {
    this.add('iot:ClearDefaultAuthorizer');
    return this;
  }

  /**
   * Closes a tunnel.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CloseTunnel.html
   */
  public closeTunnel() {
    this.add('iot:CloseTunnel');
    return this;
  }

  /**
   * Connect as the specified client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public connect() {
    this.add('iot:Connect');
    return this;
  }

  /**
   * Creates an authorizer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateAuthorizer.html
   */
  public createAuthorizer() {
    this.add('iot:CreateAuthorizer');
    return this;
  }

  /**
   * Creates a billing group.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateBillingGroup.html
   */
  public createBillingGroup() {
    this.add('iot:CreateBillingGroup');
    return this;
  }

  /**
   * Creates an X.509 certificate using the specified certificate signing request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCertificateFromCsr.html
   */
  public createCertificateFromCsr() {
    this.add('iot:CreateCertificateFromCsr');
    return this;
  }

  /**
   * Defines a dimension that can be used to to limit the scope of a metric used in a security profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDimension.html
   */
  public createDimension() {
    this.add('iot:CreateDimension');
    return this;
  }

  /**
   * Creates a Dynamic Thing Group
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDynamicThingGroup.html
   */
  public createDynamicThingGroup() {
    this.add('iot:CreateDynamicThingGroup');
    return this;
  }

  /**
   * Creates a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateJob.html
   */
  public createJob() {
    this.add('iot:CreateJob');
    return this;
  }

  /**
   * Creates a 2048 bit RSA key pair and issues an X.509 certificate using the issued public key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateKeysAndCertificate.html
   */
  public createKeysAndCertificate() {
    this.add('iot:CreateKeysAndCertificate');
    return this;
  }

  /**
   * Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateMitigationAction.html
   */
  public createMitigationAction() {
    this.add('iot:CreateMitigationAction');
    return this;
  }

  /**
   * Creates an OTA update job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateOTAUpdate.html
   */
  public createOTAUpdate() {
    this.add('iot:CreateOTAUpdate');
    return this;
  }

  /**
   * Creates an AWS IoT policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicy.html
   */
  public createPolicy() {
    this.add('iot:CreatePolicy');
    return this;
  }

  /**
   * Creates a new version of the specified AWS IoT policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicyVersion.html
   */
  public createPolicyVersion() {
    this.add('iot:CreatePolicyVersion');
    return this;
  }

  /**
   * Creates a provisioning claim.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningClaim.html
   */
  public createProvisioningClaim() {
    this.add('iot:CreateProvisioningClaim');
    return this;
  }

  /**
   * Creates a fleet provisioning template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplate.html
   */
  public createProvisioningTemplate() {
    this.add('iot:CreateProvisioningTemplate');
    return this;
  }

  /**
   * Creates a new version of a fleet provisioning template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplateVersion.html
   */
  public createProvisioningTemplateVersion() {
    this.add('iot:CreateProvisioningTemplateVersion');
    return this;
  }

  /**
   * Creates a role alias.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateRoleAlias.html
   */
  public createRoleAlias() {
    this.add('iot:CreateRoleAlias');
    return this;
  }

  /**
   * Creates a scheduled audit that is run at a specified time interval.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateScheduledAudit.html
   */
  public createScheduledAudit() {
    this.add('iot:CreateScheduledAudit');
    return this;
  }

  /**
   * Creates a Device Defender security profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateSecurityProfile.html
   */
  public createSecurityProfile() {
    this.add('iot:CreateSecurityProfile');
    return this;
  }

  /**
   * Creates a new AWS IoT stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateStream.html
   */
  public createStream() {
    this.add('iot:CreateStream');
    return this;
  }

  /**
   * Creates a thing in the thing registry.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThing.html
   */
  public createThing() {
    this.add('iot:CreateThing');
    return this;
  }

  /**
   * Creates a thing group.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThingGroup.html
   */
  public createThingGroup() {
    this.add('iot:CreateThingGroup');
    return this;
  }

  /**
   * Creates a new thing type.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThingType.html
   */
  public createThingType() {
    this.add('iot:CreateThingType');
    return this;
  }

  /**
   * Creates a rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateTopicRule.html
   */
  public createTopicRule() {
    this.add('iot:CreateTopicRule');
    return this;
  }

  /**
   * Deletes the audit configuration associated with the account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAccountAuditConfiguration.html
   */
  public deleteAccountAuditConfiguration() {
    this.add('iot:DeleteAccountAuditConfiguration');
    return this;
  }

  /**
   * Deletes the specified authorizer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAuthorizer.html
   */
  public deleteAuthorizer() {
    this.add('iot:DeleteAuthorizer');
    return this;
  }

  /**
   * Deletes the specified billing group.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteBillingGroup.html
   */
  public deleteBillingGroup() {
    this.add('iot:DeleteBillingGroup');
    return this;
  }

  /**
   * Deletes a registered CA certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCACertificate.html
   */
  public deleteCACertificate() {
    this.add('iot:DeleteCACertificate');
    return this;
  }

  /**
   * Deletes the specified certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCertificate.html
   */
  public deleteCertificate() {
    this.add('iot:DeleteCertificate');
    return this;
  }

  /**
   * Removes the specified dimension from your AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDimension.html
   */
  public deleteDimension() {
    this.add('iot:DeleteDimension');
    return this;
  }

  /**
   * Deletes the specified Dynamic Thing Group
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDynamicThingGroup.html
   */
  public deleteDynamicThingGroup() {
    this.add('iot:DeleteDynamicThingGroup');
    return this;
  }

  /**
   * Deletes a job and its related job executions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJob.html
   */
  public deleteJob() {
    this.add('iot:DeleteJob');
    return this;
  }

  /**
   * Deletes a job execution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJobExecution.html
   */
  public deleteJobExecution() {
    this.add('iot:DeleteJobExecution');
    return this;
  }

  /**
   * Deletes a defined mitigation action from your AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteMitigationAction.html
   */
  public deleteMitigationAction() {
    this.add('iot:DeleteMitigationAction');
    return this;
  }

  /**
   * Deletes an OTA update job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteOTAUpdate.html
   */
  public deleteOTAUpdate() {
    this.add('iot:DeleteOTAUpdate');
    return this;
  }

  /**
   * Deletes the specified policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicy.html
   */
  public deletePolicy() {
    this.add('iot:DeletePolicy');
    return this;
  }

  /**
   * Deletes the specified version of the specified policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicyVersion.html
   */
  public deletePolicyVersion() {
    this.add('iot:DeletePolicyVersion');
    return this;
  }

  /**
   * Deletes a fleet provisioning template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplate.html
   */
  public deleteProvisioningTemplate() {
    this.add('iot:DeleteProvisioningTemplate');
    return this;
  }

  /**
   * Deletes a fleet provisioning template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplateVersion.html
   */
  public deleteProvisioningTemplateVersion() {
    this.add('iot:DeleteProvisioningTemplateVersion');
    return this;
  }

  /**
   * Deletes a CA certificate registration code.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRegistrationCode.html
   */
  public deleteRegistrationCode() {
    this.add('iot:DeleteRegistrationCode');
    return this;
  }

  /**
   * Deletes the specified role alias.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRoleAlias.html
   */
  public deleteRoleAlias() {
    this.add('iot:DeleteRoleAlias');
    return this;
  }

  /**
   * Deletes a scheduled audit.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteScheduledAudit.html
   */
  public deleteScheduledAudit() {
    this.add('iot:DeleteScheduledAudit');
    return this;
  }

  /**
   * Deletes a Device Defender security profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteSecurityProfile.html
   */
  public deleteSecurityProfile() {
    this.add('iot:DeleteSecurityProfile');
    return this;
  }

  /**
   * Deletes a specified stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteStream.html
   */
  public deleteStream() {
    this.add('iot:DeleteStream');
    return this;
  }

  /**
   * Deletes the specified thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html
   */
  public deleteThing() {
    this.add('iot:DeleteThing');
    return this;
  }

  /**
   * Deletes the specified thing group.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingGroup.html
   */
  public deleteThingGroup() {
    this.add('iot:DeleteThingGroup');
    return this;
  }

  /**
   * Deletes the specified thing shadow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public deleteThingShadow() {
    this.add('iot:DeleteThingShadow');
    return this;
  }

  /**
   * Deletes the specified thing type.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingType.html
   */
  public deleteThingType() {
    this.add('iot:DeleteThingType');
    return this;
  }

  /**
   * Deletes the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteTopicRule.html
   */
  public deleteTopicRule() {
    this.add('iot:DeleteTopicRule');
    return this;
  }

  /**
   * Deletes the specified v2 logging level.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteV2LoggingLevel.html
   */
  public deleteV2LoggingLevel() {
    this.add('iot:DeleteV2LoggingLevel');
    return this;
  }

  /**
   * Deprecates the specified thing type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeprecateThingType.html
   */
  public deprecateThingType() {
    this.add('iot:DeprecateThingType');
    return this;
  }

  /**
   * Gets information about audit configurations for the account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAccountAuditConfiguration.html
   */
  public describeAccountAuditConfiguration() {
    this.add('iot:DescribeAccountAuditConfiguration');
    return this;
  }

  /**
   * Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditMitigationActionsTask.html
   */
  public describeAuditMitigationActionsTask() {
    this.add('iot:DescribeAuditMitigationActionsTask');
    return this;
  }

  /**
   * Gets information about a Device Defender audit.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditTask.html
   */
  public describeAuditTask() {
    this.add('iot:DescribeAuditTask');
    return this;
  }

  /**
   * Describes an authorizer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuthorizer.html
   */
  public describeAuthorizer() {
    this.add('iot:DescribeAuthorizer');
    return this;
  }

  /**
   * Gets information about the specified billing group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeBillingGroup.html
   */
  public describeBillingGroup() {
    this.add('iot:DescribeBillingGroup');
    return this;
  }

  /**
   * Describes a registered CA certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCACertificate.html
   */
  public describeCACertificate() {
    this.add('iot:DescribeCACertificate');
    return this;
  }

  /**
   * Gets information about the specified certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCertificate.html
   */
  public describeCertificate() {
    this.add('iot:DescribeCertificate');
    return this;
  }

  /**
   * Describes the default authorizer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDefaultAuthorizer.html
   */
  public describeDefaultAuthorizer() {
    this.add('iot:DescribeDefaultAuthorizer');
    return this;
  }

  /**
   * Provides details about a dimension that is defined in your AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDimension.html
   */
  public describeDimension() {
    this.add('iot:DescribeDimension');
    return this;
  }

  /**
   * Returns a unique endpoint specific to the AWS account making the call.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEndpoint.html
   */
  public describeEndpoint() {
    this.add('iot:DescribeEndpoint');
    return this;
  }

  /**
   * Returns account event configurations.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEventConfigurations.html
   */
  public describeEventConfigurations() {
    this.add('iot:DescribeEventConfigurations');
    return this;
  }

  /**
   * Gets information about the specified index.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeIndex.html
   */
  public describeIndex() {
    this.add('iot:DescribeIndex');
    return this;
  }

  /**
   * Describes a job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJob.html
   */
  public describeJob() {
    this.add('iot:DescribeJob');
    return this;
  }

  /**
   * Describes a job execution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJobExecution.html
   */
  public describeJobExecution() {
    this.add('iot:DescribeJobExecution');
    return this;
  }

  /**
   * Gets information about a mitigation action.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeMitigationAction.html
   */
  public describeMitigationAction() {
    this.add('iot:DescribeMitigationAction');
    return this;
  }

  /**
   * Returns information about a fleet provisioning template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplate.html
   */
  public describeProvisioningTemplate() {
    this.add('iot:DescribeProvisioningTemplate');
    return this;
  }

  /**
   * Returns information about a fleet provisioning template version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplateVersion.html
   */
  public describeProvisioningTemplateVersion() {
    this.add('iot:DescribeProvisioningTemplateVersion');
    return this;
  }

  /**
   * Describes a role alias.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeRoleAlias.html
   */
  public describeRoleAlias() {
    this.add('iot:DescribeRoleAlias');
    return this;
  }

  /**
   * Gets information about a scheduled audit.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeScheduledAudit.html
   */
  public describeScheduledAudit() {
    this.add('iot:DescribeScheduledAudit');
    return this;
  }

  /**
   * Gets information about a Device Defender security profile.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeSecurityProfile.html
   */
  public describeSecurityProfile() {
    this.add('iot:DescribeSecurityProfile');
    return this;
  }

  /**
   * Gets information about the specified stream.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeStream.html
   */
  public describeStream() {
    this.add('iot:DescribeStream');
    return this;
  }

  /**
   * Gets information about the specified thing.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThing.html
   */
  public describeThing() {
    this.add('iot:DescribeThing');
    return this;
  }

  /**
   * Gets information about the specified thing group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingGroup.html
   */
  public describeThingGroup() {
    this.add('iot:DescribeThingGroup');
    return this;
  }

  /**
   * Gets information about the bulk thing registration task.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingRegistrationTask.html
   */
  public describeThingRegistrationTask() {
    this.add('iot:DescribeThingRegistrationTask');
    return this;
  }

  /**
   * Gets information about the specified thing type.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingType.html
   */
  public describeThingType() {
    this.add('iot:DescribeThingType');
    return this;
  }

  /**
   * Describes a tunnel.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeTunnel.html
   */
  public describeTunnel() {
    this.add('iot:DescribeTunnel');
    return this;
  }

  /**
   * Detaches a policy from the specified target.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPolicy.html
   */
  public detachPolicy() {
    this.add('iot:DetachPolicy');
    return this;
  }

  /**
   * Removes the specified policy from the specified certificate.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPrincipalPolicy.html
   */
  public detachPrincipalPolicy() {
    this.add('iot:DetachPrincipalPolicy');
    return this;
  }

  /**
   * Disassociates a Device Defender security profile from a thing group or from this account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachSecurityProfile.html
   */
  public detachSecurityProfile() {
    this.add('iot:DetachSecurityProfile');
    return this;
  }

  /**
   * Detaches the specified principal from the specified thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachThingPrincipal.html
   */
  public detachThingPrincipal() {
    this.add('iot:DetachThingPrincipal');
    return this;
  }

  /**
   * Disables the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DisableTopicRule.html
   */
  public disableTopicRule() {
    this.add('iot:DisableTopicRule');
    return this;
  }

  /**
   * Enables the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_EnableTopicRule.html
   */
  public enableTopicRule() {
    this.add('iot:EnableTopicRule');
    return this;
  }

  /**
   * Get cardinality for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetCardinality.html
   */
  public getCardinality() {
    this.add('iot:GetCardinality');
    return this;
  }

  /**
   * Gets effective policies.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetEffectivePolicies.html
   */
  public getEffectivePolicies() {
    this.add('iot:GetEffectivePolicies');
    return this;
  }

  /**
   * Gets current fleet indexing configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetIndexingConfiguration.html
   */
  public getIndexingConfiguration() {
    this.add('iot:GetIndexingConfiguration');
    return this;
  }

  /**
   * Gets a job document.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetJobDocument.html
   */
  public getJobDocument() {
    this.add('iot:GetJobDocument');
    return this;
  }

  /**
   * Gets the logging options.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetLoggingOptions.html
   */
  public getLoggingOptions() {
    this.add('iot:GetLoggingOptions');
    return this;
  }

  /**
   * Gets the information about the OTA update job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetOTAUpdate.html
   */
  public getOTAUpdate() {
    this.add('iot:GetOTAUpdate');
    return this;
  }

  /**
   * Gets the list of all jobs for a thing that are not in a terminal state.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPendingJobExecutions.html
   */
  public getPendingJobExecutions() {
    this.add('iot:GetPendingJobExecutions');
    return this;
  }

  /**
   * Get percentiles for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPercentiles.html
   */
  public getPercentiles() {
    this.add('iot:GetPercentiles');
    return this;
  }

  /**
   * Gets information about the specified policy with the policy document of the default version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicy.html
   */
  public getPolicy() {
    this.add('iot:GetPolicy');
    return this;
  }

  /**
   * Gets information about the specified policy version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicyVersion.html
   */
  public getPolicyVersion() {
    this.add('iot:GetPolicyVersion');
    return this;
  }

  /**
   * Gets a registration code used to register a CA certificate with AWS IoT.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetRegistrationCode.html
   */
  public getRegistrationCode() {
    this.add('iot:GetRegistrationCode');
    return this;
  }

  /**
   * Get statistics for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetStatistics.html
   */
  public getStatistics() {
    this.add('iot:GetStatistics');
    return this;
  }

  /**
   * Gets the thing shadow.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public getThingShadow() {
    this.add('iot:GetThingShadow');
    return this;
  }

  /**
   * Gets information about the specified rule.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetTopicRule.html
   */
  public getTopicRule() {
    this.add('iot:GetTopicRule');
    return this;
  }

  /**
   * Gets v2 logging options.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetV2LoggingOptions.html
   */
  public getV2LoggingOptions() {
    this.add('iot:GetV2LoggingOptions');
    return this;
  }

  /**
   * Lists the active violations for a given Device Defender security profile or Thing.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListActiveViolations.html
   */
  public listActiveViolations() {
    this.add('iot:ListActiveViolations');
    return this;
  }

  /**
   * Lists the policies attached to the specified thing group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAttachedPolicies.html
   */
  public listAttachedPolicies() {
    this.add('iot:ListAttachedPolicies');
    return this;
  }

  /**
   * Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditFindings.html
   */
  public listAuditFindings() {
    this.add('iot:ListAuditFindings');
    return this;
  }

  /**
   * Gets the status of audit mitigation action tasks that were executed.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsExecutions.html
   */
  public listAuditMitigationActionsExecutions() {
    this.add('iot:ListAuditMitigationActionsExecutions');
    return this;
  }

  /**
   * Gets a list of audit mitigation action tasks that match the specified filters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsTasks.html
   */
  public listAuditMitigationActionsTasks() {
    this.add('iot:ListAuditMitigationActionsTasks');
    return this;
  }

  /**
   * Lists the Device Defender audits that have been performed during a given time period.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditTasks.html
   */
  public listAuditTasks() {
    this.add('iot:ListAuditTasks');
    return this;
  }

  /**
   * Lists the authorizers registered in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuthorizers.html
   */
  public listAuthorizers() {
    this.add('iot:ListAuthorizers');
    return this;
  }

  /**
   * Lists all billing groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListBillingGroups.html
   */
  public listBillingGroups() {
    this.add('iot:ListBillingGroups');
    return this;
  }

  /**
   * Lists the CA certificates registered for your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCACertificates.html
   */
  public listCACertificates() {
    this.add('iot:ListCACertificates');
    return this;
  }

  /**
   * Lists your certificates.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificates.html
   */
  public listCertificates() {
    this.add('iot:ListCertificates');
    return this;
  }

  /**
   * List the device certificates signed by the specified CA certificate.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificatesByCA.html
   */
  public listCertificatesByCA() {
    this.add('iot:ListCertificatesByCA');
    return this;
  }

  /**
   * Lists the dimensions that are defined for your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListDimensions.html
   */
  public listDimensions() {
    this.add('iot:ListDimensions');
    return this;
  }

  /**
   * Lists all indices for fleet index
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListIndices.html
   */
  public listIndices() {
    this.add('iot:ListIndices');
    return this;
  }

  /**
   * Lists the job executions for a job.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForJob.html
   */
  public listJobExecutionsForJob() {
    this.add('iot:ListJobExecutionsForJob');
    return this;
  }

  /**
   * Lists the job executions for the specified thing.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForThing.html
   */
  public listJobExecutionsForThing() {
    this.add('iot:ListJobExecutionsForThing');
    return this;
  }

  /**
   * Lists jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobs.html
   */
  public listJobs() {
    this.add('iot:ListJobs');
    return this;
  }

  /**
   * Gets a list of all mitigation actions that match the specified filter criteria.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListMitigationActions.html
   */
  public listMitigationActions() {
    this.add('iot:ListMitigationActions');
    return this;
  }

  /**
   * Lists all named shadows for a given thing.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListNamedShadowsForThing.html
   */
  public listNamedShadowsForThing() {
    this.add('iot:ListNamedShadowsForThing');
    return this;
  }

  /**
   * Lists OTA update jobs in the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListOTAUpdates.html
   */
  public listOTAUpdates() {
    this.add('iot:ListOTAUpdates');
    return this;
  }

  /**
   * Lists certificates that are being transfered but not yet accepted.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListOutgoingCertificates.html
   */
  public listOutgoingCertificates() {
    this.add('iot:ListOutgoingCertificates');
    return this;
  }

  /**
   * Lists your policies.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicies.html
   */
  public listPolicies() {
    this.add('iot:ListPolicies');
    return this;
  }

  /**
   * Lists the principals associated with the specified policy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyPrincipals.html
   */
  public listPolicyPrincipals() {
    this.add('iot:ListPolicyPrincipals');
    return this;
  }

  /**
   * Lists the versions of the specified policy, and identifies the default version.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyVersions.html
   */
  public listPolicyVersions() {
    this.add('iot:ListPolicyVersions');
    return this;
  }

  /**
   * Lists the policies attached to the specified principal. If you use an Amazon Cognito identity, the ID needs to be in Amazon Cognito Identity format.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalPolicies.html
   */
  public listPrincipalPolicies() {
    this.add('iot:ListPrincipalPolicies');
    return this;
  }

  /**
   * Lists the things associated with the specified principal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalThings.html
   */
  public listPrincipalThings() {
    this.add('iot:ListPrincipalThings');
    return this;
  }

  /**
   * A list of fleet provisioning template versions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplateVersions.html
   */
  public listProvisioningTemplateVersions() {
    this.add('iot:ListProvisioningTemplateVersions');
    return this;
  }

  /**
   * Lists the fleet provisioning templates in your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplates.html
   */
  public listProvisioningTemplates() {
    this.add('iot:ListProvisioningTemplates');
    return this;
  }

  /**
   * Lists role aliases.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListRoleAliases.html
   */
  public listRoleAliases() {
    this.add('iot:ListRoleAliases');
    return this;
  }

  /**
   * Lists all of your scheduled audits.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListScheduledAudits.html
   */
  public listScheduledAudits() {
    this.add('iot:ListScheduledAudits');
    return this;
  }

  /**
   * Lists the Device Defender security profiles you have created.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html
   */
  public listSecurityProfiles() {
    this.add('iot:ListSecurityProfiles');
    return this;
  }

  /**
   * Lists the Device Defender security profiles attached to a target.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfilesForTarget.html
   */
  public listSecurityProfilesForTarget() {
    this.add('iot:ListSecurityProfilesForTarget');
    return this;
  }

  /**
   * Lists the streams in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListStreams.html
   */
  public listStreams() {
    this.add('iot:ListStreams');
    return this;
  }

  /**
   * Lists all tags for a given resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('iot:ListTagsForResource');
    return this;
  }

  /**
   * List targets for the specified policy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForPolicy.html
   */
  public listTargetsForPolicy() {
    this.add('iot:ListTargetsForPolicy');
    return this;
  }

  /**
   * Lists the targets associated with a given Device Defender security profile.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForSecurityProfile.html
   */
  public listTargetsForSecurityProfile() {
    this.add('iot:ListTargetsForSecurityProfile');
    return this;
  }

  /**
   * Lists all thing groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroups.html
   */
  public listThingGroups() {
    this.add('iot:ListThingGroups');
    return this;
  }

  /**
   * List thing groups to which the specified thing belongs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroupsForThing.html
   */
  public listThingGroupsForThing() {
    this.add('iot:ListThingGroupsForThing');
    return this;
  }

  /**
   * Lists the principals associated with the specified thing.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingPrincipals.html
   */
  public listThingPrincipals() {
    this.add('iot:ListThingPrincipals');
    return this;
  }

  /**
   * Lists information about bulk thing registration tasks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTaskReports.html
   */
  public listThingRegistrationTaskReports() {
    this.add('iot:ListThingRegistrationTaskReports');
    return this;
  }

  /**
   * Lists bulk thing registration tasks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTasks.html
   */
  public listThingRegistrationTasks() {
    this.add('iot:ListThingRegistrationTasks');
    return this;
  }

  /**
   * Lists all thing types.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingTypes.html
   */
  public listThingTypes() {
    this.add('iot:ListThingTypes');
    return this;
  }

  /**
   * Lists all things.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThings.html
   */
  public listThings() {
    this.add('iot:ListThings');
    return this;
  }

  /**
   * Lists all things in the specified billing group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInBillingGroup.html
   */
  public listThingsInBillingGroup() {
    this.add('iot:ListThingsInBillingGroup');
    return this;
  }

  /**
   * Lists all things in the specified thing group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInThingGroup.html
   */
  public listThingsInThingGroup() {
    this.add('iot:ListThingsInThingGroup');
    return this;
  }

  /**
   * Lists the rules for the specific topic.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTopicRules.html
   */
  public listTopicRules() {
    this.add('iot:ListTopicRules');
    return this;
  }

  /**
   * Lists tunnels.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTunnels.html
   */
  public listTunnels() {
    this.add('iot:ListTunnels');
    return this;
  }

  /**
   * Lists the v2 logging levels.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListV2LoggingLevels.html
   */
  public listV2LoggingLevels() {
    this.add('iot:ListV2LoggingLevels');
    return this;
  }

  /**
   * Lists the Device Defender security profile violations discovered during the given time period.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListViolationEvents.html
   */
  public listViolationEvents() {
    this.add('iot:ListViolationEvents');
    return this;
  }

  /**
   * Opens a tunnel.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_OpenTunnel.html
   */
  public openTunnel() {
    this.add('iot:OpenTunnel');
    return this;
  }

  /**
   * Publish to the specified topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public publish() {
    this.add('iot:Publish');
    return this;
  }

  /**
   * Receive from the specified topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public receive() {
    this.add('iot:Receive');
    return this;
  }

  /**
   * Registers a CA certificate with AWS IoT.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCACertificate.html
   */
  public registerCACertificate() {
    this.add('iot:RegisterCACertificate');
    return this;
  }

  /**
   * Registers a device certificate with AWS IoT.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificate.html
   */
  public registerCertificate() {
    this.add('iot:RegisterCertificate');
    return this;
  }

  /**
   * Registers a device certificate with AWS IoT without a registered CA (certificate authority).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificateWithoutCA.html
   */
  public registerCertificateWithoutCA() {
    this.add('iot:RegisterCertificateWithoutCA');
    return this;
  }

  /**
   * Registers your thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterThing.html
   */
  public registerThing() {
    this.add('iot:RegisterThing');
    return this;
  }

  /**
   * Rejects a pending certificate transfer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RejectCertificateTransfer.html
   */
  public rejectCertificateTransfer() {
    this.add('iot:RejectCertificateTransfer');
    return this;
  }

  /**
   * Removes thing from the specified billing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromBillingGroup.html
   */
  public removeThingFromBillingGroup() {
    this.add('iot:RemoveThingFromBillingGroup');
    return this;
  }

  /**
   * Removes thing from the specified thing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromThingGroup.html
   */
  public removeThingFromThingGroup() {
    this.add('iot:RemoveThingFromThingGroup');
    return this;
  }

  /**
   * Replaces the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ReplaceTopicRule.html
   */
  public replaceTopicRule() {
    this.add('iot:ReplaceTopicRule');
    return this;
  }

  /**
   * Search IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SearchIndex.html
   */
  public searchIndex() {
    this.add('iot:SearchIndex');
    return this;
  }

  /**
   * Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultAuthorizer.html
   */
  public setDefaultAuthorizer() {
    this.add('iot:SetDefaultAuthorizer');
    return this;
  }

  /**
   * Sets the specified version of the specified policy as the policy's default (operative) version.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultPolicyVersion.html
   */
  public setDefaultPolicyVersion() {
    this.add('iot:SetDefaultPolicyVersion');
    return this;
  }

  /**
   * Sets the logging options.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetLoggingOptions.html
   */
  public setLoggingOptions() {
    this.add('iot:SetLoggingOptions');
    return this;
  }

  /**
   * Sets the v2 logging level.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingLevel.html
   */
  public setV2LoggingLevel() {
    this.add('iot:SetV2LoggingLevel');
    return this;
  }

  /**
   * Sets the v2 logging options.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingOptions.html
   */
  public setV2LoggingOptions() {
    this.add('iot:SetV2LoggingOptions');
    return this;
  }

  /**
   * Starts a task that applies a set of mitigation actions to the specified target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartAuditMitigationActionsTask.html
   */
  public startAuditMitigationActionsTask() {
    this.add('iot:StartAuditMitigationActionsTask');
    return this;
  }

  /**
   * Gets and starts the next pending job execution for a thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartNextPendingJobExecution.html
   */
  public startNextPendingJobExecution() {
    this.add('iot:StartNextPendingJobExecution');
    return this;
  }

  /**
   * Starts an on-demand Device Defender audit.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartOnDemandAuditTask.html
   */
  public startOnDemandAuditTask() {
    this.add('iot:StartOnDemandAuditTask');
    return this;
  }

  /**
   * Starts a bulk thing registration task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartThingRegistrationTask.html
   */
  public startThingRegistrationTask() {
    this.add('iot:StartThingRegistrationTask');
    return this;
  }

  /**
   * Stops a bulk thing registration task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StopThingRegistrationTask.html
   */
  public stopThingRegistrationTask() {
    this.add('iot:StopThingRegistrationTask');
    return this;
  }

  /**
   * Subscribe to the specified TopicFilter.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public subscribe() {
    this.add('iot:Subscribe');
    return this;
  }

  /**
   * Tag a specified resource
   *
   * Access Level: Tagging
   *
   * API_TagResource.html
   */
  public tagResource() {
    this.add('iot:TagResource');
    return this;
  }

  /**
   * Test the policies evaluation for group policies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_TestAuthorization.html
   */
  public testAuthorization() {
    this.add('iot:TestAuthorization');
    return this;
  }

  /**
   * Invoke the specified custom authorizer for testing purposes.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_TestInvokeAuthorizer.html
   */
  public testInvokeAuthorizer() {
    this.add('iot:TestInvokeAuthorizer');
    return this;
  }

  /**
   * Transfers the specified certificate to the specified AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_TransferCertificate.html
   */
  public transferCertificate() {
    this.add('iot:TransferCertificate');
    return this;
  }

  /**
   * Untag a specified resource
   *
   * Access Level: Tagging
   *
   * API_UntagResource.html
   */
  public untagResource() {
    this.add('iot:UntagResource');
    return this;
  }

  /**
   * Configures or reconfigures the Device Defender audit settings for this account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAccountAuditConfiguration.html
   */
  public updateAccountAuditConfiguration() {
    this.add('iot:UpdateAccountAuditConfiguration');
    return this;
  }

  /**
   * Updates an authorizer
   *
   * Access Level: Write
   *
   * API_UpdateAuthorizer.html
   */
  public updateAuthorizer() {
    this.add('iot:UpdateAuthorizer');
    return this;
  }

  /**
   * Updates information associated with the specified billing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateBillingGroup.html
   */
  public updateBillingGroup() {
    this.add('iot:UpdateBillingGroup');
    return this;
  }

  /**
   * Updates a registered CA certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCACertificate.html
   */
  public updateCACertificate() {
    this.add('iot:UpdateCACertificate');
    return this;
  }

  /**
   * Updates the status of the specified certificate. This operation is idempotent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCertificate.html
   */
  public updateCertificate() {
    this.add('iot:UpdateCertificate');
    return this;
  }

  /**
   * Updates the definition for a dimension.
   *
   * Access Level: Write
   *
   * API_UpdateDimension.html
   */
  public updateDimension() {
    this.add('iot:UpdateDimension');
    return this;
  }

  /**
   * Updates a Dynamic Thing Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDynamicThingGroup.html
   */
  public updateDynamicThingGroup() {
    this.add('iot:UpdateDynamicThingGroup');
    return this;
  }

  /**
   * Updates event configurations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateEventConfigurations.html
   */
  public updateEventConfigurations() {
    this.add('iot:UpdateEventConfigurations');
    return this;
  }

  /**
   * Updates fleet indexing configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateIndexingConfiguration.html
   */
  public updateIndexingConfiguration() {
    this.add('iot:UpdateIndexingConfiguration');
    return this;
  }

  /**
   * Updates a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateJob.html
   */
  public updateJob() {
    this.add('iot:UpdateJob');
    return this;
  }

  /**
   * Updates a job execution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateJobExecution.html
   */
  public updateJobExecution() {
    this.add('iot:UpdateJobExecution');
    return this;
  }

  /**
   * Updates the definition for the specified mitigation action.
   *
   * Access Level: Write
   *
   * API_UpdateMitigationAction.html
   */
  public updateMitigationAction() {
    this.add('iot:UpdateMitigationAction');
    return this;
  }

  /**
   * Updates a fleet provisioning template.
   *
   * Access Level: Write
   *
   * API_UpdateProvisioningTemplate.html
   */
  public updateProvisioningTemplate() {
    this.add('iot:UpdateProvisioningTemplate');
    return this;
  }

  /**
   * Updates the role alias
   *
   * Access Level: Write
   *
   * API_UpdateRoleAlias.html
   */
  public updateRoleAlias() {
    this.add('iot:UpdateRoleAlias');
    return this;
  }

  /**
   * Updates a scheduled audit, including what checks are performed and how often the audit takes place.
   *
   * Access Level: Write
   *
   * API_UpdateScheduledAudit.html
   */
  public updateScheduledAudit() {
    this.add('iot:UpdateScheduledAudit');
    return this;
  }

  /**
   * Updates a Device Defender security profile.
   *
   * Access Level: Write
   *
   * API_UpdateSecurityProfile.html
   */
  public updateSecurityProfile() {
    this.add('iot:UpdateSecurityProfile');
    return this;
  }

  /**
   * Updates the data for a stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateStream.html
   */
  public updateStream() {
    this.add('iot:UpdateStream');
    return this;
  }

  /**
   * Updates information associated with the specified thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThing.html
   */
  public updateThing() {
    this.add('iot:UpdateThing');
    return this;
  }

  /**
   * Updates information associated with the specified thing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroup.html
   */
  public updateThingGroup() {
    this.add('iot:UpdateThingGroup');
    return this;
  }

  /**
   * Updates the thing groups to which the thing belongs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroupsForThing.html
   */
  public updateThingGroupsForThing() {
    this.add('iot:UpdateThingGroupsForThing');
    return this;
  }

  /**
   * Updates the thing shadow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public updateThingShadow() {
    this.add('iot:UpdateThingShadow');
    return this;
  }

  /**
   * Validates a Device Defender security profile behaviors specification.
   *
   * Access Level: Read
   *
   * API_ValidateSecurityProfileBehaviors.html
   */
  public validateSecurityProfileBehaviors() {
    this.add('iot:ValidateSecurityProfileBehaviors');
    return this;
  }

  /**
   * Adds a resource of type client to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-message-broker.html
   *
   * @param clientId - Identifier for the clientId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onClient(clientId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:client/${ClientId}';
    arn = arn.replace('${ClientId}', clientId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type index to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-indexing.html
   *
   * @param indexName - Identifier for the indexName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIndex(indexName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:index/${IndexName}';
    arn = arn.replace('${IndexName}', indexName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-jobs.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onJob(jobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:job/${JobId}';
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type tunnel to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-tunnels.html
   *
   * @param tunnelId - Identifier for the tunnelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onTunnel(tunnelId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:tunnel/${TunnelId}';
    arn = arn.replace('${TunnelId}', tunnelId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type thing to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html
   *
   * @param thingName - Identifier for the thingName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onThing(thingName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:thing/${ThingName}';
    arn = arn.replace('${ThingName}', thingName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type thinggroup to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-groups.html
   *
   * @param thingGroupName - Identifier for the thingGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onThinggroup(thingGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:thinggroup/${ThingGroupName}';
    arn = arn.replace('${ThingGroupName}', thingGroupName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type billinggroup to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/billing-groups.html
   *
   * @param billingGroupName - Identifier for the billingGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onBillinggroup(billingGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:billinggroup/${BillingGroupName}';
    arn = arn.replace('${BillingGroupName}', billingGroupName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dynamicthinggroup to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/dynamic-thing-groups.html
   *
   * @param thingGroupName - Identifier for the thingGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDynamicthinggroup(thingGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:thinggroup/${ThingGroupName}';
    arn = arn.replace('${ThingGroupName}', thingGroupName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type thingtype to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-types.html
   *
   * @param thingTypeName - Identifier for the thingTypeName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onThingtype(thingTypeName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:thingtype/${ThingTypeName}';
    arn = arn.replace('${ThingTypeName}', thingTypeName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type topic to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-message-broker.html
   *
   * @param topicName - Identifier for the topicName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTopic(topicName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:topic/${TopicName}';
    arn = arn.replace('${TopicName}', topicName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type topicfilter to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/topics.html
   *
   * @param topicFilter - Identifier for the topicFilter.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTopicfilter(topicFilter: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:topicfilter/${TopicFilter}';
    arn = arn.replace('${TopicFilter}', topicFilter);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type rolealias to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html
   *
   * @param roleAlias - Identifier for the roleAlias.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRolealias(roleAlias: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:rolealias/${RoleAlias}';
    arn = arn.replace('${RoleAlias}', roleAlias);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type role to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
   *
   * @param role - Identifier for the role.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onRole(role: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam:${Region}:${Account}:role/${Role}';
    arn = arn.replace('${Role}', role);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type authorizer to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/custom-authorizer.html
   *
   * @param authorizerName - Identifier for the authorizerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAuthorizer(authorizerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:authorizer/${AuthorizerName}';
    arn = arn.replace('${AuthorizerName}', authorizerName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-policies.html
   *
   * @param policyName - Identifier for the policyName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPolicy(policyName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:policy/${PolicyName}';
    arn = arn.replace('${PolicyName}', policyName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cert to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/x509-certs.html
   *
   * @param certificate - Identifier for the certificate.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCert(certificate: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:cert/${Certificate}';
    arn = arn.replace('${Certificate}', certificate);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cacert to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/x509-certs.html
   *
   * @param cACertificate - Identifier for the cACertificate.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCacert(cACertificate: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:cacert/${CACertificate}';
    arn = arn.replace('${CACertificate}', cACertificate);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type stream to the statement
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ota-dev.html
   *
   * @param streamId - Identifier for the streamId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onStream(streamId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:stream/${streamId}';
    arn = arn.replace('${streamId}', streamId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type otaupdate to the statement
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ota-dev.html
   *
   * @param otaUpdateId - Identifier for the otaUpdateId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onOtaupdate(otaUpdateId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:otaupdate/${otaUpdateId}';
    arn = arn.replace('${otaUpdateId}', otaUpdateId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type scheduledaudit to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-audit.html
   *
   * @param scheduleName - Identifier for the scheduleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onScheduledaudit(scheduleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:scheduledaudit/${ScheduleName}';
    arn = arn.replace('${ScheduleName}', scheduleName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type mitigationaction to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html
   *
   * @param mitigationActionName - Identifier for the mitigationActionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onMitigationaction(mitigationActionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:mitigationaction/${MitigationActionName}';
    arn = arn.replace('${MitigationActionName}', mitigationActionName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type securityprofile to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html
   *
   * @param securityProfileName - Identifier for the securityProfileName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onSecurityprofile(securityProfileName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:securityprofile/${SecurityProfileName}';
    arn = arn.replace('${SecurityProfileName}', securityProfileName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dimension to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html
   *
   * @param dimensionName - Identifier for the dimensionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDimension(dimensionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:dimension/${DimensionName}';
    arn = arn.replace('${DimensionName}', dimensionName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type rule to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html
   *
   * @param ruleName - Identifier for the ruleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onRule(ruleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:rule/${ruleName}';
    arn = arn.replace('${ruleName}', ruleName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type provisioningtemplate to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html
   *
   * @param provisioningTemplate - Identifier for the provisioningTemplate.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProvisioningtemplate(provisioningTemplate: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:provisioningtemplate/${provisioningTemplate}';
    arn = arn.replace('${provisioningTemplate}', provisioningTemplate);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The flag indicating whether or not to also delete an IoT Tunnel immediately
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifDelete(value?: boolean) {
    return this.if('Bool', {
      'iot:Delete': value || true,
    });
  }

  /**
   * The list of all IoT Thing Group ARNs that the destination IoT Thing belongs to for an IoT Tunnel
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifThingGroupArn(value: string | string[], operator?: string) {
    const props: any = {};
    props[`iot:ThingGroupArn`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * The list of all destination services for an IoT Tunnel
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifTunnelDestinationService(value: string | string[], operator?: string) {
    const props: any = {};
    props[`iot:TunnelDestinationService`] = value;
    return this.if(operator || 'StringEquals', props);
  }
}
