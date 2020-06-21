import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service greengrass
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotgreengrass.html
 */
export class Greengrass extends PolicyStatement {
  public servicePrefix = 'greengrass';
  public actions: Actions = {
    "AssociateRoleToGroup": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/associateroletogroup-put.html",
      "description": "Grants permission to associate a role with a group. The role's permissions must allow Greengrass core Lambda functions and connectors to perform actions in other AWS services.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "AssociateServiceRoleToAccount": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/associateserviceroletoaccount-put.html",
      "description": "Grants permission to associate a role with your account. AWS IoT Greengrass uses this role to access your Lambda functions and AWS IoT resources.",
      "accessLevel": "Permissions management"
    },
    "CreateConnectorDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createconnectordefinition-post.html",
      "description": "Grants permission to create a connector definition.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateConnectorDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createconnectordefinitionversion-post.html",
      "description": "Grants permission to create a version of an existing connector definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "connectorDefinition": {
          "required": true
        }
      }
    },
    "CreateCoreDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createcoredefinition-post.html",
      "description": "Grants permission to create a core definition.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateCoreDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createcoredefinitionversion-post.html",
      "description": "Grants permission to create a version of an existing core definition. Greengrass groups must each contain exactly one Greengrass core.",
      "accessLevel": "Write",
      "resourceTypes": {
        "coreDefinition": {
          "required": true
        }
      }
    },
    "CreateDeployment": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createdeployment-post.html",
      "description": "Grants permission to create a deployment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "CreateDeviceDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createdevicedefinition-post.html",
      "description": "Grants permission to create a device definition.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateDeviceDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createdevicedefinitionversion-post.html",
      "description": "Grants permission to create a version of an existing device definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deviceDefinition": {
          "required": true
        }
      }
    },
    "CreateFunctionDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createfunctiondefinition-post.html",
      "description": "Grants permission to create a Lambda function definition to be used in a group that contains a list of Lambda functions and their configurations.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateFunctionDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createfunctiondefinitionversion-post.html",
      "description": "Grants permission to create a version of an existing Lambda function definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "functionDefinition": {
          "required": true
        }
      }
    },
    "CreateGroup": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/creategroup-post.html",
      "description": "Grants permission to create a group.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateGroupCertificateAuthority": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/creategroupcertificateauthority-post.html",
      "description": "Grants permission to create a CA for the group, or rotate the existing CA.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "CreateGroupVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/creategroupversion-post.html",
      "description": "Grants permission to create a version of a group that has already been defined.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "CreateLoggerDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createloggerdefinition-post.html",
      "description": "Grants permission to create a logger definition.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateLoggerDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createloggerdefinitionversion-post.html",
      "description": "Grants permission to create a version of an existing logger definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loggerDefinition": {
          "required": true
        }
      }
    },
    "CreateResourceDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createresourcedefinition-post.html",
      "description": "Grants permission to create a resource definition that contains a list of resources to be used in a group.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateResourceDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createresourcedefinitionversion-post.html",
      "description": "Grants permission to create a version of an existing resource definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "resourceDefinition": {
          "required": true
        }
      }
    },
    "CreateSoftwareUpdateJob": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createsoftwareupdatejob-post.html",
      "description": "Grants permission to create an AWS IoT job that will trigger your Greengrass cores to update the software they are running.",
      "accessLevel": "Write"
    },
    "CreateSubscriptionDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createsubscriptiondefinition-post.html",
      "description": "Grants permission to create a subscription definition.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateSubscriptionDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/createsubscriptiondefinitionversion-post.html",
      "description": "Grants permission to create a version of an existing subscription definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "subscriptionDefinition": {
          "required": true
        }
      }
    },
    "DeleteConnectorDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/deleteconnectordefinition-delete.html",
      "description": "Grants permission to delete a connector definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "connectorDefinition": {
          "required": true
        }
      }
    },
    "DeleteCoreDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/deletecoredefinition-delete.html",
      "description": "Grants permission to delete a core definition. Deleting a definition that is currently in use in a deployment affects future deployments.",
      "accessLevel": "Write",
      "resourceTypes": {
        "coreDefinition": {
          "required": true
        }
      }
    },
    "DeleteDeviceDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/deletedevicedefinition-delete.html",
      "description": "Grants permission to delete a device definition. Deleting a definition that is currently in use in a deployment affects future deployments.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deviceDefinition": {
          "required": true
        }
      }
    },
    "DeleteFunctionDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/deletefunctiondefinition-delete.html",
      "description": "Grants permission to delete a Lambda function definition. Deleting a definition that is currently in use in a deployment affects future deployments.",
      "accessLevel": "Write",
      "resourceTypes": {
        "functionDefinition": {
          "required": true
        }
      }
    },
    "DeleteGroup": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/deletegroup-delete.html",
      "description": "Grants permission to delete a group that is not currently in use in a deployment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "DeleteLoggerDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/deleteloggerdefinition-delete.html",
      "description": "Grants permission to delete a logger definition. Deleting a definition that is currently in use in a deployment affects future deployments.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loggerDefinition": {
          "required": true
        }
      }
    },
    "DeleteResourceDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/deleteresourcedefinition-delete.html",
      "description": "Grants permission to delete a resource definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "resourceDefinition": {
          "required": true
        }
      }
    },
    "DeleteSubscriptionDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/deletesubscriptiondefinition-delete.html",
      "description": "Grants permission to delete a subscription definition. Deleting a definition that is currently in use in a deployment affects future deployments.",
      "accessLevel": "Write",
      "resourceTypes": {
        "subscriptionDefinition": {
          "required": true
        }
      }
    },
    "DisassociateRoleFromGroup": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/disassociaterolefromgroup-delete.html",
      "description": "Grants permission to disassociate the role from a group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "DisassociateServiceRoleFromAccount": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/disassociateservicerolefromaccount-delete.html",
      "description": "Grants permission to disassociate the service role from an account. Without a service role, deployments will not work.",
      "accessLevel": "Write"
    },
    "GetAssociatedRole": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getassociatedrole-get.html",
      "description": "Grants permission to retrieve the role associated with a group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "GetBulkDeploymentStatus": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getbulkdeploymentstatus-get.html",
      "description": "Grants permission to return the status of a bulk deployment.",
      "accessLevel": "Read",
      "resourceTypes": {
        "bulkDeployment": {
          "required": true
        }
      }
    },
    "GetConnectivityInfo": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectivityinfo-get.html",
      "description": "Grants permission to retrieve the connectivity information for a core.",
      "accessLevel": "Read",
      "resourceTypes": {
        "connectivityInfo": {
          "required": true
        }
      }
    },
    "GetConnectorDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectordefinition-get.html",
      "description": "Grants permission to retrieve information about a connector definition.",
      "accessLevel": "Read",
      "resourceTypes": {
        "connectorDefinition": {
          "required": true
        }
      }
    },
    "GetConnectorDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectordefinitionversion-get.html",
      "description": "Grants permission to retrieve information about a connector definition version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "connectorDefinition": {
          "required": true
        },
        "connectorDefinitionVersion": {
          "required": true
        }
      }
    },
    "GetCoreDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getcoredefinition-get.html",
      "description": "Grants permission to retrieve information about a core definition.",
      "accessLevel": "Read",
      "resourceTypes": {
        "coreDefinition": {
          "required": true
        }
      }
    },
    "GetCoreDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getcoredefinitionversion-get.html",
      "description": "Grants permission to retrieve information about a core definition version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "coreDefinition": {
          "required": true
        },
        "coreDefinitionVersion": {
          "required": true
        }
      }
    },
    "GetDeploymentStatus": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getdeploymentstatus-get.html",
      "description": "Grants permission to return the status of a deployment.",
      "accessLevel": "Read",
      "resourceTypes": {
        "deployment": {
          "required": true
        },
        "group": {
          "required": true
        }
      }
    },
    "GetDeviceDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getdevicedefinition-get.html",
      "description": "Grants permission to retrieve information about a device definition.",
      "accessLevel": "Read",
      "resourceTypes": {
        "deviceDefinition": {
          "required": true
        }
      }
    },
    "GetDeviceDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getdevicedefinitionversion-get.html",
      "description": "Grants permission to retrieve information about a device definition version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "deviceDefinition": {
          "required": true
        },
        "deviceDefinitionVersion": {
          "required": true
        }
      }
    },
    "GetFunctionDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getfunctiondefinition-get.html",
      "description": "Grants permission to retrieve information about a Lambda function definition, such as its creation time and latest version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "functionDefinition": {
          "required": true
        }
      }
    },
    "GetFunctionDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getfunctiondefinitionversion-get.html",
      "description": "Grants permission to retrieve information about a Lambda function definition version, such as which Lambda functions are included in the version and their configurations.",
      "accessLevel": "Read",
      "resourceTypes": {
        "functionDefinition": {
          "required": true
        },
        "functionDefinitionVersion": {
          "required": true
        }
      }
    },
    "GetGroup": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getgroup-get.html",
      "description": "Grants permission to retrieve information about a group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "GetGroupCertificateAuthority": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupcertificateauthority-get.html",
      "description": "Grants permission to return the public key of the CA associated with a group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "certificateAuthority": {
          "required": true
        },
        "group": {
          "required": true
        }
      }
    },
    "GetGroupCertificateConfiguration": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupcertificateconfiguration-get.html",
      "description": "Grants permission to retrieve the current configuration for the CA used by a group.",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "GetGroupVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupversion-get.html",
      "description": "Grants permission to retrieve information about a group version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "group": {
          "required": true
        },
        "groupVersion": {
          "required": true
        }
      }
    },
    "GetLoggerDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getloggerdefinition-get.html",
      "description": "Grants permission to retrieve information about a logger definition.",
      "accessLevel": "Read",
      "resourceTypes": {
        "loggerDefinition": {
          "required": true
        }
      }
    },
    "GetLoggerDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getloggerdefinitionversion-get.html",
      "description": "Grants permission to retrieve information about a logger definition version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "loggerDefinition": {
          "required": true
        },
        "loggerDefinitionVersion": {
          "required": true
        }
      }
    },
    "GetResourceDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getresourcedefinition-get.html",
      "description": "Grants permission to retrieve information about a resource definition, such as its creation time and latest version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "resourceDefinition": {
          "required": true
        }
      }
    },
    "GetResourceDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getresourcedefinitionversion-get.html",
      "description": "Grants permission to retrieve information about a resource definition version, such as which resources are included in the version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "resourceDefinition": {
          "required": true
        },
        "resourceDefinitionVersion": {
          "required": true
        }
      }
    },
    "GetServiceRoleForAccount": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getserviceroleforaccount-get.html",
      "description": "Grants permission to retrieve the service role that is attached to an account.",
      "accessLevel": "Read"
    },
    "GetSubscriptionDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getsubscriptiondefinition-get.html",
      "description": "Grants permission to retrieve information about a subscription definition.",
      "accessLevel": "Read",
      "resourceTypes": {
        "subscriptionDefinition": {
          "required": true
        }
      }
    },
    "GetSubscriptionDefinitionVersion": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/getsubscriptiondefinitionversion-get.html",
      "description": "Grants permission to retrieve information about a subscription definition version.",
      "accessLevel": "Read",
      "resourceTypes": {
        "subscriptionDefinition": {
          "required": true
        },
        "subscriptionDefinitionVersion": {
          "required": true
        }
      }
    },
    "ListBulkDeploymentDetailedReports": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listbulkdeploymentdetailedreports-get.html",
      "description": "Grants permission to retrieve a paginated list of the deployments that have been started in a bulk deployment operation and their current deployment status.",
      "accessLevel": "List",
      "resourceTypes": {
        "bulkDeployment": {
          "required": true
        }
      }
    },
    "ListBulkDeployments": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listbulkdeployments-get.html",
      "description": "Grants permission to retrieve a list of bulk deployments.",
      "accessLevel": "List"
    },
    "ListConnectorDefinitionVersions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listconnectordefinitionversions-get.html",
      "description": "Grants permission to list the versions of a connector definition.",
      "accessLevel": "List",
      "resourceTypes": {
        "connectorDefinition": {
          "required": true
        }
      }
    },
    "ListConnectorDefinitions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listconnectordefinitions-get.html",
      "description": "Grants permission to retrieve a list of connector definitions.",
      "accessLevel": "List"
    },
    "ListCoreDefinitionVersions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listcoredefinitionversions-get.html",
      "description": "Grants permission to list the versions of a core definition.",
      "accessLevel": "List",
      "resourceTypes": {
        "coreDefinition": {
          "required": true
        }
      }
    },
    "ListCoreDefinitions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listcoredefinitions-get.html",
      "description": "Grants permission to retrieve a list of core definitions.",
      "accessLevel": "List"
    },
    "ListDeployments": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listdeployments-get.html",
      "description": "Grants permission to retrieve a list of all deployments for a group.",
      "accessLevel": "List",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "ListDeviceDefinitionVersions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listdevicedefinitionversions-get.html",
      "description": "Grants permission to list the versions of a device definition.",
      "accessLevel": "List",
      "resourceTypes": {
        "deviceDefinition": {
          "required": true
        }
      }
    },
    "ListDeviceDefinitions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listdevicedefinitions-get.html",
      "description": "Grants permission to retrieve a list of device definitions.",
      "accessLevel": "List"
    },
    "ListFunctionDefinitionVersions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listfunctiondefinitionversions-get.html",
      "description": "Grants permission to list the versions of a Lambda function definition.",
      "accessLevel": "List",
      "resourceTypes": {
        "functionDefinition": {
          "required": true
        }
      }
    },
    "ListFunctionDefinitions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listfunctiondefinitions-get.html",
      "description": "Grants permission to retrieve a list of Lambda function definitions.",
      "accessLevel": "List"
    },
    "ListGroupCertificateAuthorities": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listgroupcertificateauthorities-get.html",
      "description": "Grants permission to retrieve a list of current CAs for a group.",
      "accessLevel": "List",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "ListGroupVersions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listgroupversions-get.html",
      "description": "Grants permission to list the versions of a group.",
      "accessLevel": "List",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "ListGroups": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listgroups-get.html",
      "description": "Grants permission to retrieve a list of groups.",
      "accessLevel": "List"
    },
    "ListLoggerDefinitionVersions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listloggerdefinitionversions-get.html",
      "description": "Grants permission to list the versions of a logger definition.",
      "accessLevel": "List",
      "resourceTypes": {
        "loggerDefinition": {
          "required": true
        }
      }
    },
    "ListLoggerDefinitions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listloggerdefinitions-get.html",
      "description": "Grants permission to retrieve a list of logger definitions.",
      "accessLevel": "List"
    },
    "ListResourceDefinitionVersions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listresourcedefinitionversions-get.html",
      "description": "Grants permission to list the versions of a resource definition.",
      "accessLevel": "List",
      "resourceTypes": {
        "resourceDefinition": {
          "required": true
        }
      }
    },
    "ListResourceDefinitions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listresourcedefinitions-get.html",
      "description": "Grants permission to retrieve a list of resource definitions.",
      "accessLevel": "List"
    },
    "ListSubscriptionDefinitionVersions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listsubscriptiondefinitionversions-get.html",
      "description": "Grants permission to list the versions of a subscription definition.",
      "accessLevel": "List",
      "resourceTypes": {
        "subscriptionDefinition": {
          "required": true
        }
      }
    },
    "ListSubscriptionDefinitions": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listsubscriptiondefinitions-get.html",
      "description": "Grants permission to retrieve a list of subscription definitions.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/listtagsforresource-get.html",
      "description": "Grants permission to list the tags for a resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "bulkDeployment": {
          "required": false
        },
        "connectorDefinition": {
          "required": false
        },
        "coreDefinition": {
          "required": false
        },
        "deviceDefinition": {
          "required": false
        },
        "functionDefinition": {
          "required": false
        },
        "group": {
          "required": false
        },
        "loggerDefinition": {
          "required": false
        },
        "resourceDefinition": {
          "required": false
        },
        "subscriptionDefinition": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "ResetDeployments": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/resetdeployments-post.html",
      "description": "Grants permission to reset a group's deployments.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "StartBulkDeployment": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/startbulkdeployment-post.html",
      "description": "Grants permission to deploy multiple groups in one operation.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "StopBulkDeployment": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/stopbulkdeployment-put.html",
      "description": "Grants permission to stop the execution of a bulk deployment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "bulkDeployment": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/tagresource-post.html",
      "description": "Grants permission to add tags to a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "bulkDeployment": {
          "required": false
        },
        "connectorDefinition": {
          "required": false
        },
        "coreDefinition": {
          "required": false
        },
        "deviceDefinition": {
          "required": false
        },
        "functionDefinition": {
          "required": false
        },
        "group": {
          "required": false
        },
        "loggerDefinition": {
          "required": false
        },
        "resourceDefinition": {
          "required": false
        },
        "subscriptionDefinition": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/untagresource-delete.html",
      "description": "Grants permission to remove tags from a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "bulkDeployment": {
          "required": false
        },
        "connectorDefinition": {
          "required": false
        },
        "coreDefinition": {
          "required": false
        },
        "deviceDefinition": {
          "required": false
        },
        "functionDefinition": {
          "required": false
        },
        "group": {
          "required": false
        },
        "loggerDefinition": {
          "required": false
        },
        "resourceDefinition": {
          "required": false
        },
        "subscriptionDefinition": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateConnectivityInfo": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/updateconnectivityinfo-put.html",
      "description": "Grants permission to update the connectivity information for a Greengrass core. Any devices that belong to the group that has this core will receive this information in order to find the location of the core and connect to it.",
      "accessLevel": "Write",
      "resourceTypes": {
        "connectivityInfo": {
          "required": true
        }
      }
    },
    "UpdateConnectorDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/updateconnectordefinition-put.html",
      "description": "Grants permission to update a connector definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "connectorDefinition": {
          "required": true
        }
      }
    },
    "UpdateCoreDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/updatecoredefinition-put.html",
      "description": "Grants permission to update a core definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "coreDefinition": {
          "required": true
        }
      }
    },
    "UpdateDeviceDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/updatedevicedefinition-put.html",
      "description": "Grants permission to update a device definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "deviceDefinition": {
          "required": true
        }
      }
    },
    "UpdateFunctionDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/updatefunctiondefinition-put.html",
      "description": "Grants permission to update a Lambda function definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "functionDefinition": {
          "required": true
        }
      }
    },
    "UpdateGroup": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/updategroup-put.html",
      "description": "Grants permission to update a group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "UpdateGroupCertificateConfiguration": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/updategroupcertificateconfiguration-put.html",
      "description": "Grants permission to update the certificate expiry time for a group.",
      "accessLevel": "Write",
      "resourceTypes": {
        "group": {
          "required": true
        }
      }
    },
    "UpdateLoggerDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/updateloggerdefinition-put.html",
      "description": "Grants permission to update a logger definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "loggerDefinition": {
          "required": true
        }
      }
    },
    "UpdateResourceDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/updateresourcedefinition-put.html",
      "description": "Grants permission to update a resource definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "resourceDefinition": {
          "required": true
        }
      }
    },
    "UpdateSubscriptionDefinition": {
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/updatesubscriptiondefinition-put.html",
      "description": "Grants permission to update a subscription definition.",
      "accessLevel": "Write",
      "resourceTypes": {
        "subscriptionDefinition": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "connectivityInfo": {
      "name": "connectivityInfo",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connectivityinfo.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/things/${ThingName}/connectivityInfo",
      "conditionKeys": []
    },
    "artifact": {
      "name": "artifact",
      "url": "",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}/deployments/${DeploymentId}/artifacts/lambda/${ArtifactId}",
      "conditionKeys": []
    },
    "certificateAuthority": {
      "name": "certificateAuthority",
      "url": "https://docs.aws.amazon.com/greengrass/latest/developerguide/gg-sec.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}/certificateauthorities/${CertificateAuthorityId}",
      "conditionKeys": []
    },
    "deployment": {
      "name": "deployment",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-createdeploymentrequest.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}/deployments/${DeploymentId}",
      "conditionKeys": []
    },
    "bulkDeployment": {
      "name": "bulkDeployment",
      "url": "https://docs.aws.amazon.com/greengrass/latest/developerguide/bulk-deploy-cli.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/bulk/deployments/${BulkDeploymentId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "group": {
      "name": "group",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-groupinformation.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "groupVersion": {
      "name": "groupVersion",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-groupversion.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}/versions/${VersionId}",
      "conditionKeys": []
    },
    "coreDefinition": {
      "name": "coreDefinition",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-core.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/cores/${CoreDefinitionId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "coreDefinitionVersion": {
      "name": "coreDefinitionVersion",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-coredefinitionversion.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/cores/${CoreDefinitionId}/versions/${VersionId}",
      "conditionKeys": []
    },
    "deviceDefinition": {
      "name": "deviceDefinition",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-device.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/devices/${DeviceDefinitionId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "deviceDefinitionVersion": {
      "name": "deviceDefinitionVersion",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-devicedefinitionversion.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/devices/${DeviceDefinitionId}/versions/${VersionId}",
      "conditionKeys": []
    },
    "functionDefinition": {
      "name": "functionDefinition",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-function.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/functions/${FunctionDefinitionId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "functionDefinitionVersion": {
      "name": "functionDefinitionVersion",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-functiondefinitionversion.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/functions/${FunctionDefinitionId}/versions/${VersionId}",
      "conditionKeys": []
    },
    "subscriptionDefinition": {
      "name": "subscriptionDefinition",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-subscription.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/subscriptions/${SubscriptionDefinitionId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "subscriptionDefinitionVersion": {
      "name": "subscriptionDefinitionVersion",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-subscriptiondefinitionversion.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/subscriptions/${SubscriptionDefinitionId}/versions/${VersionId}",
      "conditionKeys": []
    },
    "loggerDefinition": {
      "name": "loggerDefinition",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-logger.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/loggers/${LoggerDefinitionId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "loggerDefinitionVersion": {
      "name": "loggerDefinitionVersion",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-loggerdefinitionversion.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/loggers/${LoggerDefinitionId}/versions/${VersionId}",
      "conditionKeys": []
    },
    "resourceDefinition": {
      "name": "resourceDefinition",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-resource.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/resources/${ResourceDefinitionId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "resourceDefinitionVersion": {
      "name": "resourceDefinitionVersion",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-resourcedefinitionversion.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/resources/${ResourceDefinitionId}/versions/${VersionId}",
      "conditionKeys": []
    },
    "connectorDefinition": {
      "name": "connectorDefinition",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connector.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/connectors/${ConnectorDefinitionId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "connectorDefinitionVersion": {
      "name": "connectorDefinitionVersion",
      "url": "https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connectordefinitionversion.html",
      "arn": "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/connectors/${ConnectorDefinitionId}/versions/${VersionId}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service greengrass
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotgreengrass.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to associate a role with a group. The role's permissions must allow Greengrass core Lambda functions and connectors to perform actions in other AWS services.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/associateroletogroup-put.html
   */
  public associateRoleToGroup() {
    this.add('greengrass:AssociateRoleToGroup');
    return this;
  }

  /**
   * Grants permission to associate a role with your account. AWS IoT Greengrass uses this role to access your Lambda functions and AWS IoT resources.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/associateserviceroletoaccount-put.html
   */
  public associateServiceRoleToAccount() {
    this.add('greengrass:AssociateServiceRoleToAccount');
    return this;
  }

  /**
   * Grants permission to create a connector definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createconnectordefinition-post.html
   */
  public createConnectorDefinition() {
    this.add('greengrass:CreateConnectorDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing connector definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createconnectordefinitionversion-post.html
   */
  public createConnectorDefinitionVersion() {
    this.add('greengrass:CreateConnectorDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to create a core definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createcoredefinition-post.html
   */
  public createCoreDefinition() {
    this.add('greengrass:CreateCoreDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing core definition. Greengrass groups must each contain exactly one Greengrass core.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createcoredefinitionversion-post.html
   */
  public createCoreDefinitionVersion() {
    this.add('greengrass:CreateCoreDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to create a deployment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createdeployment-post.html
   */
  public createDeployment() {
    this.add('greengrass:CreateDeployment');
    return this;
  }

  /**
   * Grants permission to create a device definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createdevicedefinition-post.html
   */
  public createDeviceDefinition() {
    this.add('greengrass:CreateDeviceDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing device definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createdevicedefinitionversion-post.html
   */
  public createDeviceDefinitionVersion() {
    this.add('greengrass:CreateDeviceDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to create a Lambda function definition to be used in a group that contains a list of Lambda functions and their configurations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createfunctiondefinition-post.html
   */
  public createFunctionDefinition() {
    this.add('greengrass:CreateFunctionDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing Lambda function definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createfunctiondefinitionversion-post.html
   */
  public createFunctionDefinitionVersion() {
    this.add('greengrass:CreateFunctionDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to create a group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/creategroup-post.html
   */
  public createGroup() {
    this.add('greengrass:CreateGroup');
    return this;
  }

  /**
   * Grants permission to create a CA for the group, or rotate the existing CA.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/creategroupcertificateauthority-post.html
   */
  public createGroupCertificateAuthority() {
    this.add('greengrass:CreateGroupCertificateAuthority');
    return this;
  }

  /**
   * Grants permission to create a version of a group that has already been defined.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/creategroupversion-post.html
   */
  public createGroupVersion() {
    this.add('greengrass:CreateGroupVersion');
    return this;
  }

  /**
   * Grants permission to create a logger definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createloggerdefinition-post.html
   */
  public createLoggerDefinition() {
    this.add('greengrass:CreateLoggerDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing logger definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createloggerdefinitionversion-post.html
   */
  public createLoggerDefinitionVersion() {
    this.add('greengrass:CreateLoggerDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to create a resource definition that contains a list of resources to be used in a group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createresourcedefinition-post.html
   */
  public createResourceDefinition() {
    this.add('greengrass:CreateResourceDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing resource definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createresourcedefinitionversion-post.html
   */
  public createResourceDefinitionVersion() {
    this.add('greengrass:CreateResourceDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to create an AWS IoT job that will trigger your Greengrass cores to update the software they are running.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createsoftwareupdatejob-post.html
   */
  public createSoftwareUpdateJob() {
    this.add('greengrass:CreateSoftwareUpdateJob');
    return this;
  }

  /**
   * Grants permission to create a subscription definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createsubscriptiondefinition-post.html
   */
  public createSubscriptionDefinition() {
    this.add('greengrass:CreateSubscriptionDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing subscription definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createsubscriptiondefinitionversion-post.html
   */
  public createSubscriptionDefinitionVersion() {
    this.add('greengrass:CreateSubscriptionDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to delete a connector definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deleteconnectordefinition-delete.html
   */
  public deleteConnectorDefinition() {
    this.add('greengrass:DeleteConnectorDefinition');
    return this;
  }

  /**
   * Grants permission to delete a core definition. Deleting a definition that is currently in use in a deployment affects future deployments.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletecoredefinition-delete.html
   */
  public deleteCoreDefinition() {
    this.add('greengrass:DeleteCoreDefinition');
    return this;
  }

  /**
   * Grants permission to delete a device definition. Deleting a definition that is currently in use in a deployment affects future deployments.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletedevicedefinition-delete.html
   */
  public deleteDeviceDefinition() {
    this.add('greengrass:DeleteDeviceDefinition');
    return this;
  }

  /**
   * Grants permission to delete a Lambda function definition. Deleting a definition that is currently in use in a deployment affects future deployments.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletefunctiondefinition-delete.html
   */
  public deleteFunctionDefinition() {
    this.add('greengrass:DeleteFunctionDefinition');
    return this;
  }

  /**
   * Grants permission to delete a group that is not currently in use in a deployment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletegroup-delete.html
   */
  public deleteGroup() {
    this.add('greengrass:DeleteGroup');
    return this;
  }

  /**
   * Grants permission to delete a logger definition. Deleting a definition that is currently in use in a deployment affects future deployments.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deleteloggerdefinition-delete.html
   */
  public deleteLoggerDefinition() {
    this.add('greengrass:DeleteLoggerDefinition');
    return this;
  }

  /**
   * Grants permission to delete a resource definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deleteresourcedefinition-delete.html
   */
  public deleteResourceDefinition() {
    this.add('greengrass:DeleteResourceDefinition');
    return this;
  }

  /**
   * Grants permission to delete a subscription definition. Deleting a definition that is currently in use in a deployment affects future deployments.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletesubscriptiondefinition-delete.html
   */
  public deleteSubscriptionDefinition() {
    this.add('greengrass:DeleteSubscriptionDefinition');
    return this;
  }

  /**
   * Grants permission to disassociate the role from a group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/disassociaterolefromgroup-delete.html
   */
  public disassociateRoleFromGroup() {
    this.add('greengrass:DisassociateRoleFromGroup');
    return this;
  }

  /**
   * Grants permission to disassociate the service role from an account. Without a service role, deployments will not work.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/disassociateservicerolefromaccount-delete.html
   */
  public disassociateServiceRoleFromAccount() {
    this.add('greengrass:DisassociateServiceRoleFromAccount');
    return this;
  }

  /**
   * Grants permission to retrieve the role associated with a group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getassociatedrole-get.html
   */
  public getAssociatedRole() {
    this.add('greengrass:GetAssociatedRole');
    return this;
  }

  /**
   * Grants permission to return the status of a bulk deployment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getbulkdeploymentstatus-get.html
   */
  public getBulkDeploymentStatus() {
    this.add('greengrass:GetBulkDeploymentStatus');
    return this;
  }

  /**
   * Grants permission to retrieve the connectivity information for a core.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectivityinfo-get.html
   */
  public getConnectivityInfo() {
    this.add('greengrass:GetConnectivityInfo');
    return this;
  }

  /**
   * Grants permission to retrieve information about a connector definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectordefinition-get.html
   */
  public getConnectorDefinition() {
    this.add('greengrass:GetConnectorDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a connector definition version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectordefinitionversion-get.html
   */
  public getConnectorDefinitionVersion() {
    this.add('greengrass:GetConnectorDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to retrieve information about a core definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getcoredefinition-get.html
   */
  public getCoreDefinition() {
    this.add('greengrass:GetCoreDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a core definition version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getcoredefinitionversion-get.html
   */
  public getCoreDefinitionVersion() {
    this.add('greengrass:GetCoreDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to return the status of a deployment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getdeploymentstatus-get.html
   */
  public getDeploymentStatus() {
    this.add('greengrass:GetDeploymentStatus');
    return this;
  }

  /**
   * Grants permission to retrieve information about a device definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getdevicedefinition-get.html
   */
  public getDeviceDefinition() {
    this.add('greengrass:GetDeviceDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a device definition version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getdevicedefinitionversion-get.html
   */
  public getDeviceDefinitionVersion() {
    this.add('greengrass:GetDeviceDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to retrieve information about a Lambda function definition, such as its creation time and latest version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getfunctiondefinition-get.html
   */
  public getFunctionDefinition() {
    this.add('greengrass:GetFunctionDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a Lambda function definition version, such as which Lambda functions are included in the version and their configurations.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getfunctiondefinitionversion-get.html
   */
  public getFunctionDefinitionVersion() {
    this.add('greengrass:GetFunctionDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to retrieve information about a group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getgroup-get.html
   */
  public getGroup() {
    this.add('greengrass:GetGroup');
    return this;
  }

  /**
   * Grants permission to return the public key of the CA associated with a group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupcertificateauthority-get.html
   */
  public getGroupCertificateAuthority() {
    this.add('greengrass:GetGroupCertificateAuthority');
    return this;
  }

  /**
   * Grants permission to retrieve the current configuration for the CA used by a group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupcertificateconfiguration-get.html
   */
  public getGroupCertificateConfiguration() {
    this.add('greengrass:GetGroupCertificateConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve information about a group version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupversion-get.html
   */
  public getGroupVersion() {
    this.add('greengrass:GetGroupVersion');
    return this;
  }

  /**
   * Grants permission to retrieve information about a logger definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getloggerdefinition-get.html
   */
  public getLoggerDefinition() {
    this.add('greengrass:GetLoggerDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a logger definition version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getloggerdefinitionversion-get.html
   */
  public getLoggerDefinitionVersion() {
    this.add('greengrass:GetLoggerDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to retrieve information about a resource definition, such as its creation time and latest version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getresourcedefinition-get.html
   */
  public getResourceDefinition() {
    this.add('greengrass:GetResourceDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a resource definition version, such as which resources are included in the version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getresourcedefinitionversion-get.html
   */
  public getResourceDefinitionVersion() {
    this.add('greengrass:GetResourceDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to retrieve the service role that is attached to an account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getserviceroleforaccount-get.html
   */
  public getServiceRoleForAccount() {
    this.add('greengrass:GetServiceRoleForAccount');
    return this;
  }

  /**
   * Grants permission to retrieve information about a subscription definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getsubscriptiondefinition-get.html
   */
  public getSubscriptionDefinition() {
    this.add('greengrass:GetSubscriptionDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a subscription definition version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getsubscriptiondefinitionversion-get.html
   */
  public getSubscriptionDefinitionVersion() {
    this.add('greengrass:GetSubscriptionDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to retrieve a paginated list of the deployments that have been started in a bulk deployment operation and their current deployment status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listbulkdeploymentdetailedreports-get.html
   */
  public listBulkDeploymentDetailedReports() {
    this.add('greengrass:ListBulkDeploymentDetailedReports');
    return this;
  }

  /**
   * Grants permission to retrieve a list of bulk deployments.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listbulkdeployments-get.html
   */
  public listBulkDeployments() {
    this.add('greengrass:ListBulkDeployments');
    return this;
  }

  /**
   * Grants permission to list the versions of a connector definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listconnectordefinitionversions-get.html
   */
  public listConnectorDefinitionVersions() {
    this.add('greengrass:ListConnectorDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of connector definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listconnectordefinitions-get.html
   */
  public listConnectorDefinitions() {
    this.add('greengrass:ListConnectorDefinitions');
    return this;
  }

  /**
   * Grants permission to list the versions of a core definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listcoredefinitionversions-get.html
   */
  public listCoreDefinitionVersions() {
    this.add('greengrass:ListCoreDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of core definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listcoredefinitions-get.html
   */
  public listCoreDefinitions() {
    this.add('greengrass:ListCoreDefinitions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of all deployments for a group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listdeployments-get.html
   */
  public listDeployments() {
    this.add('greengrass:ListDeployments');
    return this;
  }

  /**
   * Grants permission to list the versions of a device definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listdevicedefinitionversions-get.html
   */
  public listDeviceDefinitionVersions() {
    this.add('greengrass:ListDeviceDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of device definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listdevicedefinitions-get.html
   */
  public listDeviceDefinitions() {
    this.add('greengrass:ListDeviceDefinitions');
    return this;
  }

  /**
   * Grants permission to list the versions of a Lambda function definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listfunctiondefinitionversions-get.html
   */
  public listFunctionDefinitionVersions() {
    this.add('greengrass:ListFunctionDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of Lambda function definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listfunctiondefinitions-get.html
   */
  public listFunctionDefinitions() {
    this.add('greengrass:ListFunctionDefinitions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of current CAs for a group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listgroupcertificateauthorities-get.html
   */
  public listGroupCertificateAuthorities() {
    this.add('greengrass:ListGroupCertificateAuthorities');
    return this;
  }

  /**
   * Grants permission to list the versions of a group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listgroupversions-get.html
   */
  public listGroupVersions() {
    this.add('greengrass:ListGroupVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listgroups-get.html
   */
  public listGroups() {
    this.add('greengrass:ListGroups');
    return this;
  }

  /**
   * Grants permission to list the versions of a logger definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listloggerdefinitionversions-get.html
   */
  public listLoggerDefinitionVersions() {
    this.add('greengrass:ListLoggerDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of logger definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listloggerdefinitions-get.html
   */
  public listLoggerDefinitions() {
    this.add('greengrass:ListLoggerDefinitions');
    return this;
  }

  /**
   * Grants permission to list the versions of a resource definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listresourcedefinitionversions-get.html
   */
  public listResourceDefinitionVersions() {
    this.add('greengrass:ListResourceDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of resource definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listresourcedefinitions-get.html
   */
  public listResourceDefinitions() {
    this.add('greengrass:ListResourceDefinitions');
    return this;
  }

  /**
   * Grants permission to list the versions of a subscription definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listsubscriptiondefinitionversions-get.html
   */
  public listSubscriptionDefinitionVersions() {
    this.add('greengrass:ListSubscriptionDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of subscription definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listsubscriptiondefinitions-get.html
   */
  public listSubscriptionDefinitions() {
    this.add('greengrass:ListSubscriptionDefinitions');
    return this;
  }

  /**
   * Grants permission to list the tags for a resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listtagsforresource-get.html
   */
  public listTagsForResource() {
    this.add('greengrass:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to reset a group's deployments.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/resetdeployments-post.html
   */
  public resetDeployments() {
    this.add('greengrass:ResetDeployments');
    return this;
  }

  /**
   * Grants permission to deploy multiple groups in one operation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/startbulkdeployment-post.html
   */
  public startBulkDeployment() {
    this.add('greengrass:StartBulkDeployment');
    return this;
  }

  /**
   * Grants permission to stop the execution of a bulk deployment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/stopbulkdeployment-put.html
   */
  public stopBulkDeployment() {
    this.add('greengrass:StopBulkDeployment');
    return this;
  }

  /**
   * Grants permission to add tags to a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/tagresource-post.html
   */
  public tagResource() {
    this.add('greengrass:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/untagresource-delete.html
   */
  public untagResource() {
    this.add('greengrass:UntagResource');
    return this;
  }

  /**
   * Grants permission to update the connectivity information for a Greengrass core. Any devices that belong to the group that has this core will receive this information in order to find the location of the core and connect to it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updateconnectivityinfo-put.html
   */
  public updateConnectivityInfo() {
    this.add('greengrass:UpdateConnectivityInfo');
    return this;
  }

  /**
   * Grants permission to update a connector definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updateconnectordefinition-put.html
   */
  public updateConnectorDefinition() {
    this.add('greengrass:UpdateConnectorDefinition');
    return this;
  }

  /**
   * Grants permission to update a core definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updatecoredefinition-put.html
   */
  public updateCoreDefinition() {
    this.add('greengrass:UpdateCoreDefinition');
    return this;
  }

  /**
   * Grants permission to update a device definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updatedevicedefinition-put.html
   */
  public updateDeviceDefinition() {
    this.add('greengrass:UpdateDeviceDefinition');
    return this;
  }

  /**
   * Grants permission to update a Lambda function definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updatefunctiondefinition-put.html
   */
  public updateFunctionDefinition() {
    this.add('greengrass:UpdateFunctionDefinition');
    return this;
  }

  /**
   * Grants permission to update a group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updategroup-put.html
   */
  public updateGroup() {
    this.add('greengrass:UpdateGroup');
    return this;
  }

  /**
   * Grants permission to update the certificate expiry time for a group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updategroupcertificateconfiguration-put.html
   */
  public updateGroupCertificateConfiguration() {
    this.add('greengrass:UpdateGroupCertificateConfiguration');
    return this;
  }

  /**
   * Grants permission to update a logger definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updateloggerdefinition-put.html
   */
  public updateLoggerDefinition() {
    this.add('greengrass:UpdateLoggerDefinition');
    return this;
  }

  /**
   * Grants permission to update a resource definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updateresourcedefinition-put.html
   */
  public updateResourceDefinition() {
    this.add('greengrass:UpdateResourceDefinition');
    return this;
  }

  /**
   * Grants permission to update a subscription definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updatesubscriptiondefinition-put.html
   */
  public updateSubscriptionDefinition() {
    this.add('greengrass:UpdateSubscriptionDefinition');
    return this;
  }

  /**
   * Adds a resource of type connectivityInfo to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connectivityinfo.html
   *
   * @param thingName - Identifier for the thingName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConnectivityInfo(thingName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/things/${ThingName}/connectivityInfo';
    arn = arn.replace('${ThingName}', thingName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type artifact to the statement
   *
   * @param groupId - Identifier for the groupId.
   * @param deploymentId - Identifier for the deploymentId.
   * @param artifactId - Identifier for the artifactId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onArtifact(groupId: string, deploymentId: string, artifactId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}/deployments/${DeploymentId}/artifacts/lambda/${ArtifactId}';
    arn = arn.replace('${GroupId}', groupId);
    arn = arn.replace('${DeploymentId}', deploymentId);
    arn = arn.replace('${ArtifactId}', artifactId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type certificateAuthority to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/developerguide/gg-sec.html
   *
   * @param groupId - Identifier for the groupId.
   * @param certificateAuthorityId - Identifier for the certificateAuthorityId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCertificateAuthority(groupId: string, certificateAuthorityId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}/certificateauthorities/${CertificateAuthorityId}';
    arn = arn.replace('${GroupId}', groupId);
    arn = arn.replace('${CertificateAuthorityId}', certificateAuthorityId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deployment to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-createdeploymentrequest.html
   *
   * @param groupId - Identifier for the groupId.
   * @param deploymentId - Identifier for the deploymentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDeployment(groupId: string, deploymentId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}/deployments/${DeploymentId}';
    arn = arn.replace('${GroupId}', groupId);
    arn = arn.replace('${DeploymentId}', deploymentId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type bulkDeployment to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/developerguide/bulk-deploy-cli.html
   *
   * @param bulkDeploymentId - Identifier for the bulkDeploymentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onBulkDeployment(bulkDeploymentId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/bulk/deployments/${BulkDeploymentId}';
    arn = arn.replace('${BulkDeploymentId}', bulkDeploymentId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-groupinformation.html
   *
   * @param groupId - Identifier for the groupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onGroup(groupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}';
    arn = arn.replace('${GroupId}', groupId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type groupVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-groupversion.html
   *
   * @param groupId - Identifier for the groupId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGroupVersion(groupId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}/versions/${VersionId}';
    arn = arn.replace('${GroupId}', groupId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type coreDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-core.html
   *
   * @param coreDefinitionId - Identifier for the coreDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onCoreDefinition(coreDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/cores/${CoreDefinitionId}';
    arn = arn.replace('${CoreDefinitionId}', coreDefinitionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type coreDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-coredefinitionversion.html
   *
   * @param coreDefinitionId - Identifier for the coreDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCoreDefinitionVersion(coreDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/cores/${CoreDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${CoreDefinitionId}', coreDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deviceDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-device.html
   *
   * @param deviceDefinitionId - Identifier for the deviceDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onDeviceDefinition(deviceDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/devices/${DeviceDefinitionId}';
    arn = arn.replace('${DeviceDefinitionId}', deviceDefinitionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deviceDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-devicedefinitionversion.html
   *
   * @param deviceDefinitionId - Identifier for the deviceDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDeviceDefinitionVersion(deviceDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/devices/${DeviceDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${DeviceDefinitionId}', deviceDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type functionDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-function.html
   *
   * @param functionDefinitionId - Identifier for the functionDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onFunctionDefinition(functionDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/functions/${FunctionDefinitionId}';
    arn = arn.replace('${FunctionDefinitionId}', functionDefinitionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type functionDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-functiondefinitionversion.html
   *
   * @param functionDefinitionId - Identifier for the functionDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFunctionDefinitionVersion(functionDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/functions/${FunctionDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${FunctionDefinitionId}', functionDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type subscriptionDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-subscription.html
   *
   * @param subscriptionDefinitionId - Identifier for the subscriptionDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onSubscriptionDefinition(subscriptionDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/subscriptions/${SubscriptionDefinitionId}';
    arn = arn.replace('${SubscriptionDefinitionId}', subscriptionDefinitionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type subscriptionDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-subscriptiondefinitionversion.html
   *
   * @param subscriptionDefinitionId - Identifier for the subscriptionDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSubscriptionDefinitionVersion(subscriptionDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/subscriptions/${SubscriptionDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${SubscriptionDefinitionId}', subscriptionDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type loggerDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-logger.html
   *
   * @param loggerDefinitionId - Identifier for the loggerDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onLoggerDefinition(loggerDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/loggers/${LoggerDefinitionId}';
    arn = arn.replace('${LoggerDefinitionId}', loggerDefinitionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type loggerDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-loggerdefinitionversion.html
   *
   * @param loggerDefinitionId - Identifier for the loggerDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLoggerDefinitionVersion(loggerDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/loggers/${LoggerDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${LoggerDefinitionId}', loggerDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type resourceDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-resource.html
   *
   * @param resourceDefinitionId - Identifier for the resourceDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onResourceDefinition(resourceDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/resources/${ResourceDefinitionId}';
    arn = arn.replace('${ResourceDefinitionId}', resourceDefinitionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type resourceDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-resourcedefinitionversion.html
   *
   * @param resourceDefinitionId - Identifier for the resourceDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onResourceDefinitionVersion(resourceDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/resources/${ResourceDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${ResourceDefinitionId}', resourceDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type connectorDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connector.html
   *
   * @param connectorDefinitionId - Identifier for the connectorDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onConnectorDefinition(connectorDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/connectors/${ConnectorDefinitionId}';
    arn = arn.replace('${ConnectorDefinitionId}', connectorDefinitionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type connectorDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connectordefinitionversion.html
   *
   * @param connectorDefinitionId - Identifier for the connectorDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConnectorDefinitionVersion(connectorDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/connectors/${ConnectorDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${ConnectorDefinitionId}', connectorDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
