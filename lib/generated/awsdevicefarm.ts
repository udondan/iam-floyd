import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [devicefarm](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdevicefarm.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Devicefarm extends PolicyStatement {
  public servicePrefix = 'devicefarm';
  protected actionList: Actions = {
    "CreateDevicePool": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateDevicePool.html",
      "description": "Grants permission to create a device pool within a project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "CreateInstanceProfile": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateInstanceProfile.html",
      "description": "Grants permission to create a device instance profile",
      "accessLevel": "Write"
    },
    "CreateNetworkProfile": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateNetworkProfile.html",
      "description": "Grants permission to create a network profile within a project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "CreateProject": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateProject.html",
      "description": "Grants permission to create a project for mobile testing",
      "accessLevel": "Tagging",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateRemoteAccessSession": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateRemoteAccessSession.html",
      "description": "Grants permission to start a remote access session to a device instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": true
        },
        "project": {
          "required": true
        },
        "deviceinstance": {
          "required": false
        },
        "upload": {
          "required": false
        }
      }
    },
    "CreateTestGridProject": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateTestGridProject.html",
      "description": "Grants permission to create a project for desktop testing",
      "accessLevel": "Write"
    },
    "CreateTestGridUrl": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateTestGridUrl.html",
      "description": "Grants permission to generate a new pre-signed url used to access our test grid service",
      "accessLevel": "Write",
      "resourceTypes": {
        "testgrid-project": {
          "required": true
        }
      }
    },
    "CreateUpload": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateUpload.html",
      "description": "Grants permission to upload a new file or app within a project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "CreateVPCEConfiguration": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateVPCEConfiguration.html",
      "description": "Grants permission to create an Amazon Virtual Private Cloud (VPC) endpoint configuration",
      "accessLevel": "Write"
    },
    "DeleteDevicePool": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteDevicePool.html",
      "description": "Grants permission to delete a user-generated device pool",
      "accessLevel": "Write",
      "resourceTypes": {
        "devicepool": {
          "required": true
        }
      }
    },
    "DeleteInstanceProfile": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteInstanceProfile.html",
      "description": "Grants permission to delete a user-generated instance profile",
      "accessLevel": "Write",
      "resourceTypes": {
        "instanceprofile": {
          "required": true
        }
      }
    },
    "DeleteNetworkProfile": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/DeleteNetworkProfile.html",
      "description": "Grants permission to delete a user-generated network profile",
      "accessLevel": "Write",
      "resourceTypes": {
        "networkprofile": {
          "required": true
        }
      }
    },
    "DeleteProject": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteProject.html",
      "description": "Grants permission to delete a mobile testing project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "DeleteRemoteAccessSession": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteRemoteAccessSession.html",
      "description": "Grants permission to delete a completed remote access session and its results",
      "accessLevel": "Write",
      "resourceTypes": {
        "session": {
          "required": true
        }
      }
    },
    "DeleteRun": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteRun.html",
      "description": "Grants permission to delete a run",
      "accessLevel": "Write",
      "resourceTypes": {
        "run": {
          "required": true
        }
      }
    },
    "DeleteTestGridProject": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteTestGridProject.html",
      "description": "Grants permission to delete a desktop testing project",
      "accessLevel": "Write",
      "resourceTypes": {
        "testgrid-project": {
          "required": true
        }
      }
    },
    "DeleteUpload": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteUpload.html",
      "description": "Grants permission to delete a user-uploaded file",
      "accessLevel": "Write",
      "resourceTypes": {
        "upload": {
          "required": true
        }
      }
    },
    "DeleteVPCEConfiguration": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteVPCEConfiguration.html",
      "description": "Grants permission to delete an Amazon Virtual Private Cloud (VPC) endpoint configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpceconfiguration": {
          "required": true
        }
      }
    },
    "GetAccountSettings": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetAccountSettings.html",
      "description": "Grants permission to retrieve the number of unmetered iOS and/or unmetered Android devices purchased by the account",
      "accessLevel": "Read"
    },
    "GetDevice": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevice.html",
      "description": "Grants permission to retrieve the information of a unique device type",
      "accessLevel": "Read",
      "resourceTypes": {
        "device": {
          "required": true
        }
      }
    },
    "GetDeviceInstance": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDeviceInstance.html",
      "description": "Grants permission to retireve the information of a device instance",
      "accessLevel": "Read",
      "resourceTypes": {
        "deviceinstance": {
          "required": true
        }
      }
    },
    "GetDevicePool": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevicePool.html",
      "description": "Grants permission to retireve the information of a device pool",
      "accessLevel": "Read",
      "resourceTypes": {
        "devicepool": {
          "required": true
        }
      }
    },
    "GetDevicePoolCompatibility": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevicePoolCompatibility.html",
      "description": "Grants permission to retrieve information about the compatibility of a test and/or app with a device pool",
      "accessLevel": "Read",
      "resourceTypes": {
        "devicepool": {
          "required": true
        },
        "upload": {
          "required": false
        }
      }
    },
    "GetInstanceProfile": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetInstanceProfile.html",
      "description": "Grants permission to retireve the information of an instance profile",
      "accessLevel": "Read",
      "resourceTypes": {
        "instanceprofile": {
          "required": true
        }
      }
    },
    "GetJob": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetJob.html",
      "description": "Grants permission to retireve the information of a job",
      "accessLevel": "Read",
      "resourceTypes": {
        "job": {
          "required": true
        }
      }
    },
    "GetNetworkProfile": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetNetworkProfile.html",
      "description": "Grants permission to retireve the information of a network profile",
      "accessLevel": "Read",
      "resourceTypes": {
        "networkprofile": {
          "required": true
        }
      }
    },
    "GetOfferingStatus": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetOfferingStatus.html",
      "description": "Grants permission to retrieve the current status and future status of all offerings purchased by an AWS account",
      "accessLevel": "Read"
    },
    "GetProject": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetProject.html",
      "description": "Grants permission to retrieve information about a mobile testing project",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "GetRemoteAccessSession": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetRemoteAccessSession.html",
      "description": "Grants permission to retireve the link to a currently running remote access session",
      "accessLevel": "Read",
      "resourceTypes": {
        "session": {
          "required": true
        }
      }
    },
    "GetRun": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetRun.html",
      "description": "Grants permission to retireve the information of a run",
      "accessLevel": "Read",
      "resourceTypes": {
        "run": {
          "required": true
        }
      }
    },
    "GetSuite": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetSuite.html",
      "description": "Grants permission to retireve the information of a testing suite",
      "accessLevel": "Read",
      "resourceTypes": {
        "suite": {
          "required": true
        }
      }
    },
    "GetTest": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTest.html",
      "description": "Grants permission to retireve the information of a test case",
      "accessLevel": "Read",
      "resourceTypes": {
        "test": {
          "required": true
        }
      }
    },
    "GetTestGridProject": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTestGridProject.html",
      "description": "Grants permission to retrieve information about a desktop testing project",
      "accessLevel": "Read",
      "resourceTypes": {
        "testgrid-project": {
          "required": true
        }
      }
    },
    "GetTestGridSession": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTestGridSession.html",
      "description": "Grants permission to retireve the information of a test grid session",
      "accessLevel": "Read",
      "resourceTypes": {
        "testgrid-project": {
          "required": false
        },
        "testgrid-session": {
          "required": false
        }
      }
    },
    "GetUpload": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetUpload.html",
      "description": "Grants permission to retireve the information of an uploaded file",
      "accessLevel": "Read",
      "resourceTypes": {
        "upload": {
          "required": true
        }
      }
    },
    "GetVPCEConfiguration": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetVPCEConfiguration.html",
      "description": "Grants permission to retireve the information of an Amazon Virtual Private Cloud (VPC) endpoint configuration",
      "accessLevel": "Read",
      "resourceTypes": {
        "vpceconfiguration": {
          "required": true
        }
      }
    },
    "InstallToRemoteAccessSession": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_InstallToRemoteAccessSession.html",
      "description": "Grants permission to install an application to a device in a remote access session",
      "accessLevel": "Write",
      "resourceTypes": {
        "session": {
          "required": true
        },
        "upload": {
          "required": true
        }
      }
    },
    "ListArtifacts": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListArtifacts.html",
      "description": "Grants permission to list the artifacts in a project",
      "accessLevel": "List",
      "resourceTypes": {
        "job": {
          "required": false
        },
        "run": {
          "required": false
        },
        "suite": {
          "required": false
        },
        "test": {
          "required": false
        }
      }
    },
    "ListDeviceInstances": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDeviceInstances.html",
      "description": "Grants permission to list the information of device instances",
      "accessLevel": "List"
    },
    "ListDevicePools": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDevicePools.html",
      "description": "Grants permission to list the information of device pools",
      "accessLevel": "List",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListDevices": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDevices.html",
      "description": "Grants permission to list the information of unique device types",
      "accessLevel": "List"
    },
    "ListInstanceProfiles": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListInstanceProfiles.html",
      "description": "Grants permission to list the information of device instance profiles",
      "accessLevel": "List"
    },
    "ListJobs": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListJobs.html",
      "description": "Grants permission to list the information of jobs within a run",
      "accessLevel": "List",
      "resourceTypes": {
        "run": {
          "required": true
        }
      }
    },
    "ListNetworkProfiles": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListNetworkProfiles.html",
      "description": "Grants permission to list the information of network profiles within a project",
      "accessLevel": "List",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListOfferingPromotions": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferingPromotions.html",
      "description": "Grants permission to list the offering promotions",
      "accessLevel": "List"
    },
    "ListOfferingTransactions": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferingTransactions.html",
      "description": "Grants permission to list all of the historical purchases, renewals, and system renewal transactions for an AWS account",
      "accessLevel": "List"
    },
    "ListOfferings": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferings.html",
      "description": "Grants permission to list the products or offerings that the user can manage through the API",
      "accessLevel": "List"
    },
    "ListProjects": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListProjects.html",
      "description": "Grants permission to list the information of mobile testing projects for an AWS account",
      "accessLevel": "List"
    },
    "ListRemoteAccessSessions": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListRemoteAccessSessions.html",
      "description": "Grants permission to list the information of currently running remote access sessions",
      "accessLevel": "List",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListRuns": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListRuns.html",
      "description": "Grants permission to list the information of runs within a project",
      "accessLevel": "List",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListSamples": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListSamples.html",
      "description": "Grants permission to list the information of samples within a project",
      "accessLevel": "List",
      "resourceTypes": {
        "job": {
          "required": true
        }
      }
    },
    "ListSuites": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListSuites.html",
      "description": "Grants permission to list the information of testing suites within a job",
      "accessLevel": "List",
      "resourceTypes": {
        "job": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list the tags of a resource",
      "accessLevel": "List",
      "resourceTypes": {
        "device": {
          "required": false
        },
        "deviceinstance": {
          "required": false
        },
        "devicepool": {
          "required": false
        },
        "instanceprofile": {
          "required": false
        },
        "networkprofile": {
          "required": false
        },
        "project": {
          "required": false
        },
        "run": {
          "required": false
        },
        "session": {
          "required": false
        },
        "testgrid-project": {
          "required": false
        },
        "testgrid-session": {
          "required": false
        },
        "vpceconfiguration": {
          "required": false
        }
      }
    },
    "ListTestGridProjects": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridProjects.html",
      "description": "Grants permission to list the information of desktop testing projects for an AWS account",
      "accessLevel": "List"
    },
    "ListTestGridSessionActions": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessionActions.html",
      "description": "Grants permission to list the session actions performed during a test grid session",
      "accessLevel": "List",
      "resourceTypes": {
        "testgrid-session": {
          "required": true
        }
      }
    },
    "ListTestGridSessionArtifacts": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessionArtifacts.html",
      "description": "Grants permission to list the artifacts generated by a test grid session",
      "accessLevel": "List",
      "resourceTypes": {
        "testgrid-session": {
          "required": true
        }
      }
    },
    "ListTestGridSessions": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessions.html",
      "description": "Grants permission to list the sessions within a test grid project",
      "accessLevel": "List",
      "resourceTypes": {
        "testgrid-project": {
          "required": true
        }
      }
    },
    "ListTests": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTests.html",
      "description": "Grants permission to list the information of tests within a testing suite",
      "accessLevel": "List",
      "resourceTypes": {
        "suite": {
          "required": true
        }
      }
    },
    "ListUniqueProblems": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListUniqueProblems.html",
      "description": "Grants permission to list the information of unique problems within a run",
      "accessLevel": "List",
      "resourceTypes": {
        "run": {
          "required": true
        }
      }
    },
    "ListUploads": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListUploads.html",
      "description": "Grants permission to list the information of uploads within a project",
      "accessLevel": "List",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "ListVPCEConfigurations": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListVPCEConfigurations.html",
      "description": "Grants permission to list the information of Amazon Virtual Private Cloud (VPC) endpoint configurations",
      "accessLevel": "List"
    },
    "PurchaseOffering": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_PurchaseOffering.html",
      "description": "Grants permission to purchase offerings for an AWS account",
      "accessLevel": "Write"
    },
    "RenewOffering": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_RenewOffering.html",
      "description": "Grants permission to set the quantity of devices to renew for an offering",
      "accessLevel": "Write"
    },
    "ScheduleRun": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ScheduleRun.html",
      "description": "Grants permission to schedule a run",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        },
        "devicepool": {
          "required": false
        },
        "upload": {
          "required": false
        }
      }
    },
    "StopJob": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopJob.html",
      "description": "Grants permission to terminate a running job",
      "accessLevel": "Write",
      "resourceTypes": {
        "job": {
          "required": true
        }
      }
    },
    "StopRemoteAccessSession": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopRemoteAccessSession.html",
      "description": "Grants permission to terminate a running remote access session",
      "accessLevel": "Write",
      "resourceTypes": {
        "session": {
          "required": true
        }
      }
    },
    "StopRun": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopRun.html",
      "description": "Grants permission to terminate a running test run",
      "accessLevel": "Write",
      "resourceTypes": {
        "run": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to add tags to a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "device": {
          "required": false
        },
        "deviceinstance": {
          "required": false
        },
        "devicepool": {
          "required": false
        },
        "instanceprofile": {
          "required": false
        },
        "networkprofile": {
          "required": false
        },
        "project": {
          "required": false
        },
        "run": {
          "required": false
        },
        "session": {
          "required": false
        },
        "testgrid-project": {
          "required": false
        },
        "testgrid-session": {
          "required": false
        },
        "vpceconfiguration": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to remove tags from a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "device": {
          "required": false
        },
        "deviceinstance": {
          "required": false
        },
        "devicepool": {
          "required": false
        },
        "instanceprofile": {
          "required": false
        },
        "networkprofile": {
          "required": false
        },
        "project": {
          "required": false
        },
        "run": {
          "required": false
        },
        "session": {
          "required": false
        },
        "testgrid-project": {
          "required": false
        },
        "testgrid-session": {
          "required": false
        },
        "vpceconfiguration": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateDeviceInstance": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateDeviceInstance.html",
      "description": "Grants permission to modify an existing device instance",
      "accessLevel": "Write",
      "resourceTypes": {
        "deviceinstance": {
          "required": true
        },
        "instanceprofile": {
          "required": false
        }
      }
    },
    "UpdateDevicePool": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateDevicePool.html",
      "description": "Grants permission to modify an existing device pool",
      "accessLevel": "Write",
      "resourceTypes": {
        "devicepool": {
          "required": true
        }
      }
    },
    "UpdateInstanceProfile": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateInstanceProfile.html",
      "description": "Grants permission to modify an existing instance profile",
      "accessLevel": "Write",
      "resourceTypes": {
        "instanceprofile": {
          "required": true
        }
      }
    },
    "UpdateNetworkProfile": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateNetworkProfile.html",
      "description": "Grants permission to modify an existing network profile",
      "accessLevel": "Write",
      "resourceTypes": {
        "networkprofile": {
          "required": true
        }
      }
    },
    "UpdateProject": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateProject.html",
      "description": "Grants permission to modify an existing mobile testing project",
      "accessLevel": "Write",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    },
    "UpdateTestGridProject": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateTestGridProject.html",
      "description": "Grants permission to modify an existing desktop testing project",
      "accessLevel": "Write",
      "resourceTypes": {
        "testgrid-project": {
          "required": true
        }
      }
    },
    "UpdateUpload": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateUpload.html",
      "description": "Grants permission to modify an existing upload",
      "accessLevel": "Write",
      "resourceTypes": {
        "upload": {
          "required": true
        }
      }
    },
    "UpdateVPCEConfiguration": {
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateVPCEConfiguration.html",
      "description": "Grants permission to modify an existing Amazon Virtual Private Cloud (VPC) endpoint configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "vpceconfiguration": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "project": {
      "name": "project",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Project.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:project:${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "run": {
      "name": "run",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Run.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:run:${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "job": {
      "name": "job",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Job.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:job:${ResourceId}",
      "conditionKeys": []
    },
    "suite": {
      "name": "suite",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Suite.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:suite:${ResourceId}",
      "conditionKeys": []
    },
    "test": {
      "name": "test",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Test.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:test:${ResourceId}",
      "conditionKeys": []
    },
    "upload": {
      "name": "upload",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Upload.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:upload:${ResourceId}",
      "conditionKeys": []
    },
    "artifact": {
      "name": "artifact",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Artifact.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:artifact:${ResourceId}",
      "conditionKeys": []
    },
    "sample": {
      "name": "sample",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Sample.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:sample:${ResourceId}",
      "conditionKeys": []
    },
    "networkprofile": {
      "name": "networkprofile",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_NetworkProfile.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:networkprofile:${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "deviceinstance": {
      "name": "deviceinstance",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeviceInstance.html",
      "arn": "arn:${Partition}:devicefarm:${Region}::deviceinstance:${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "session": {
      "name": "session",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_RemoteAccessSession.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:session:${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "devicepool": {
      "name": "devicepool",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DevicePool.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:devicepool:${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "device": {
      "name": "device",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Device.html",
      "arn": "arn:${Partition}:devicefarm:${Region}::device:${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "instanceprofile": {
      "name": "instanceprofile",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_InstanceProfile.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:instanceprofile:${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "vpceconfiguration": {
      "name": "vpceconfiguration",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_VPCEConfiguration.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:vpceconfiguration:${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "testgrid-project": {
      "name": "testgrid-project",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TestGridProject.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:testgrid-project:${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "testgrid-session": {
      "name": "testgrid-session",
      "url": "https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TestGridSession.html",
      "arn": "arn:${Partition}:devicefarm:${Region}:${Account}:testgrid-session:${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [devicefarm](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdevicefarm.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a device pool within a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateDevicePool.html
   */
  public createDevicePool() {
    this.add('devicefarm:CreateDevicePool');
    return this;
  }

  /**
   * Grants permission to create a device instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateInstanceProfile.html
   */
  public createInstanceProfile() {
    this.add('devicefarm:CreateInstanceProfile');
    return this;
  }

  /**
   * Grants permission to create a network profile within a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateNetworkProfile.html
   */
  public createNetworkProfile() {
    this.add('devicefarm:CreateNetworkProfile');
    return this;
  }

  /**
   * Grants permission to create a project for mobile testing
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateProject.html
   */
  public createProject() {
    this.add('devicefarm:CreateProject');
    return this;
  }

  /**
   * Grants permission to start a remote access session to a device instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateRemoteAccessSession.html
   */
  public createRemoteAccessSession() {
    this.add('devicefarm:CreateRemoteAccessSession');
    return this;
  }

  /**
   * Grants permission to create a project for desktop testing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateTestGridProject.html
   */
  public createTestGridProject() {
    this.add('devicefarm:CreateTestGridProject');
    return this;
  }

  /**
   * Grants permission to generate a new pre-signed url used to access our test grid service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateTestGridUrl.html
   */
  public createTestGridUrl() {
    this.add('devicefarm:CreateTestGridUrl');
    return this;
  }

  /**
   * Grants permission to upload a new file or app within a project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateUpload.html
   */
  public createUpload() {
    this.add('devicefarm:CreateUpload');
    return this;
  }

  /**
   * Grants permission to create an Amazon Virtual Private Cloud (VPC) endpoint configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateVPCEConfiguration.html
   */
  public createVPCEConfiguration() {
    this.add('devicefarm:CreateVPCEConfiguration');
    return this;
  }

  /**
   * Grants permission to delete a user-generated device pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteDevicePool.html
   */
  public deleteDevicePool() {
    this.add('devicefarm:DeleteDevicePool');
    return this;
  }

  /**
   * Grants permission to delete a user-generated instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteInstanceProfile.html
   */
  public deleteInstanceProfile() {
    this.add('devicefarm:DeleteInstanceProfile');
    return this;
  }

  /**
   * Grants permission to delete a user-generated network profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/DeleteNetworkProfile.html
   */
  public deleteNetworkProfile() {
    this.add('devicefarm:DeleteNetworkProfile');
    return this;
  }

  /**
   * Grants permission to delete a mobile testing project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteProject.html
   */
  public deleteProject() {
    this.add('devicefarm:DeleteProject');
    return this;
  }

  /**
   * Grants permission to delete a completed remote access session and its results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteRemoteAccessSession.html
   */
  public deleteRemoteAccessSession() {
    this.add('devicefarm:DeleteRemoteAccessSession');
    return this;
  }

  /**
   * Grants permission to delete a run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteRun.html
   */
  public deleteRun() {
    this.add('devicefarm:DeleteRun');
    return this;
  }

  /**
   * Grants permission to delete a desktop testing project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteTestGridProject.html
   */
  public deleteTestGridProject() {
    this.add('devicefarm:DeleteTestGridProject');
    return this;
  }

  /**
   * Grants permission to delete a user-uploaded file
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteUpload.html
   */
  public deleteUpload() {
    this.add('devicefarm:DeleteUpload');
    return this;
  }

  /**
   * Grants permission to delete an Amazon Virtual Private Cloud (VPC) endpoint configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeleteVPCEConfiguration.html
   */
  public deleteVPCEConfiguration() {
    this.add('devicefarm:DeleteVPCEConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve the number of unmetered iOS and/or unmetered Android devices purchased by the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetAccountSettings.html
   */
  public getAccountSettings() {
    this.add('devicefarm:GetAccountSettings');
    return this;
  }

  /**
   * Grants permission to retrieve the information of a unique device type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevice.html
   */
  public getDevice() {
    this.add('devicefarm:GetDevice');
    return this;
  }

  /**
   * Grants permission to retireve the information of a device instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDeviceInstance.html
   */
  public getDeviceInstance() {
    this.add('devicefarm:GetDeviceInstance');
    return this;
  }

  /**
   * Grants permission to retireve the information of a device pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevicePool.html
   */
  public getDevicePool() {
    this.add('devicefarm:GetDevicePool');
    return this;
  }

  /**
   * Grants permission to retrieve information about the compatibility of a test and/or app with a device pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetDevicePoolCompatibility.html
   */
  public getDevicePoolCompatibility() {
    this.add('devicefarm:GetDevicePoolCompatibility');
    return this;
  }

  /**
   * Grants permission to retireve the information of an instance profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetInstanceProfile.html
   */
  public getInstanceProfile() {
    this.add('devicefarm:GetInstanceProfile');
    return this;
  }

  /**
   * Grants permission to retireve the information of a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetJob.html
   */
  public getJob() {
    this.add('devicefarm:GetJob');
    return this;
  }

  /**
   * Grants permission to retireve the information of a network profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetNetworkProfile.html
   */
  public getNetworkProfile() {
    this.add('devicefarm:GetNetworkProfile');
    return this;
  }

  /**
   * Grants permission to retrieve the current status and future status of all offerings purchased by an AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetOfferingStatus.html
   */
  public getOfferingStatus() {
    this.add('devicefarm:GetOfferingStatus');
    return this;
  }

  /**
   * Grants permission to retrieve information about a mobile testing project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetProject.html
   */
  public getProject() {
    this.add('devicefarm:GetProject');
    return this;
  }

  /**
   * Grants permission to retireve the link to a currently running remote access session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetRemoteAccessSession.html
   */
  public getRemoteAccessSession() {
    this.add('devicefarm:GetRemoteAccessSession');
    return this;
  }

  /**
   * Grants permission to retireve the information of a run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetRun.html
   */
  public getRun() {
    this.add('devicefarm:GetRun');
    return this;
  }

  /**
   * Grants permission to retireve the information of a testing suite
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetSuite.html
   */
  public getSuite() {
    this.add('devicefarm:GetSuite');
    return this;
  }

  /**
   * Grants permission to retireve the information of a test case
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTest.html
   */
  public getTest() {
    this.add('devicefarm:GetTest');
    return this;
  }

  /**
   * Grants permission to retrieve information about a desktop testing project
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTestGridProject.html
   */
  public getTestGridProject() {
    this.add('devicefarm:GetTestGridProject');
    return this;
  }

  /**
   * Grants permission to retireve the information of a test grid session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetTestGridSession.html
   */
  public getTestGridSession() {
    this.add('devicefarm:GetTestGridSession');
    return this;
  }

  /**
   * Grants permission to retireve the information of an uploaded file
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetUpload.html
   */
  public getUpload() {
    this.add('devicefarm:GetUpload');
    return this;
  }

  /**
   * Grants permission to retireve the information of an Amazon Virtual Private Cloud (VPC) endpoint configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_GetVPCEConfiguration.html
   */
  public getVPCEConfiguration() {
    this.add('devicefarm:GetVPCEConfiguration');
    return this;
  }

  /**
   * Grants permission to install an application to a device in a remote access session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_InstallToRemoteAccessSession.html
   */
  public installToRemoteAccessSession() {
    this.add('devicefarm:InstallToRemoteAccessSession');
    return this;
  }

  /**
   * Grants permission to list the artifacts in a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListArtifacts.html
   */
  public listArtifacts() {
    this.add('devicefarm:ListArtifacts');
    return this;
  }

  /**
   * Grants permission to list the information of device instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDeviceInstances.html
   */
  public listDeviceInstances() {
    this.add('devicefarm:ListDeviceInstances');
    return this;
  }

  /**
   * Grants permission to list the information of device pools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDevicePools.html
   */
  public listDevicePools() {
    this.add('devicefarm:ListDevicePools');
    return this;
  }

  /**
   * Grants permission to list the information of unique device types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListDevices.html
   */
  public listDevices() {
    this.add('devicefarm:ListDevices');
    return this;
  }

  /**
   * Grants permission to list the information of device instance profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListInstanceProfiles.html
   */
  public listInstanceProfiles() {
    this.add('devicefarm:ListInstanceProfiles');
    return this;
  }

  /**
   * Grants permission to list the information of jobs within a run
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListJobs.html
   */
  public listJobs() {
    this.add('devicefarm:ListJobs');
    return this;
  }

  /**
   * Grants permission to list the information of network profiles within a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListNetworkProfiles.html
   */
  public listNetworkProfiles() {
    this.add('devicefarm:ListNetworkProfiles');
    return this;
  }

  /**
   * Grants permission to list the offering promotions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferingPromotions.html
   */
  public listOfferingPromotions() {
    this.add('devicefarm:ListOfferingPromotions');
    return this;
  }

  /**
   * Grants permission to list all of the historical purchases, renewals, and system renewal transactions for an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferingTransactions.html
   */
  public listOfferingTransactions() {
    this.add('devicefarm:ListOfferingTransactions');
    return this;
  }

  /**
   * Grants permission to list the products or offerings that the user can manage through the API
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListOfferings.html
   */
  public listOfferings() {
    this.add('devicefarm:ListOfferings');
    return this;
  }

  /**
   * Grants permission to list the information of mobile testing projects for an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListProjects.html
   */
  public listProjects() {
    this.add('devicefarm:ListProjects');
    return this;
  }

  /**
   * Grants permission to list the information of currently running remote access sessions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListRemoteAccessSessions.html
   */
  public listRemoteAccessSessions() {
    this.add('devicefarm:ListRemoteAccessSessions');
    return this;
  }

  /**
   * Grants permission to list the information of runs within a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListRuns.html
   */
  public listRuns() {
    this.add('devicefarm:ListRuns');
    return this;
  }

  /**
   * Grants permission to list the information of samples within a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListSamples.html
   */
  public listSamples() {
    this.add('devicefarm:ListSamples');
    return this;
  }

  /**
   * Grants permission to list the information of testing suites within a job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListSuites.html
   */
  public listSuites() {
    this.add('devicefarm:ListSuites');
    return this;
  }

  /**
   * Grants permission to list the tags of a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('devicefarm:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list the information of desktop testing projects for an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridProjects.html
   */
  public listTestGridProjects() {
    this.add('devicefarm:ListTestGridProjects');
    return this;
  }

  /**
   * Grants permission to list the session actions performed during a test grid session
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessionActions.html
   */
  public listTestGridSessionActions() {
    this.add('devicefarm:ListTestGridSessionActions');
    return this;
  }

  /**
   * Grants permission to list the artifacts generated by a test grid session
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessionArtifacts.html
   */
  public listTestGridSessionArtifacts() {
    this.add('devicefarm:ListTestGridSessionArtifacts');
    return this;
  }

  /**
   * Grants permission to list the sessions within a test grid project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTestGridSessions.html
   */
  public listTestGridSessions() {
    this.add('devicefarm:ListTestGridSessions');
    return this;
  }

  /**
   * Grants permission to list the information of tests within a testing suite
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListTests.html
   */
  public listTests() {
    this.add('devicefarm:ListTests');
    return this;
  }

  /**
   * Grants permission to list the information of unique problems within a run
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListUniqueProblems.html
   */
  public listUniqueProblems() {
    this.add('devicefarm:ListUniqueProblems');
    return this;
  }

  /**
   * Grants permission to list the information of uploads within a project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListUploads.html
   */
  public listUploads() {
    this.add('devicefarm:ListUploads');
    return this;
  }

  /**
   * Grants permission to list the information of Amazon Virtual Private Cloud (VPC) endpoint configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ListVPCEConfigurations.html
   */
  public listVPCEConfigurations() {
    this.add('devicefarm:ListVPCEConfigurations');
    return this;
  }

  /**
   * Grants permission to purchase offerings for an AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_PurchaseOffering.html
   */
  public purchaseOffering() {
    this.add('devicefarm:PurchaseOffering');
    return this;
  }

  /**
   * Grants permission to set the quantity of devices to renew for an offering
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_RenewOffering.html
   */
  public renewOffering() {
    this.add('devicefarm:RenewOffering');
    return this;
  }

  /**
   * Grants permission to schedule a run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_ScheduleRun.html
   */
  public scheduleRun() {
    this.add('devicefarm:ScheduleRun');
    return this;
  }

  /**
   * Grants permission to terminate a running job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopJob.html
   */
  public stopJob() {
    this.add('devicefarm:StopJob');
    return this;
  }

  /**
   * Grants permission to terminate a running remote access session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopRemoteAccessSession.html
   */
  public stopRemoteAccessSession() {
    this.add('devicefarm:StopRemoteAccessSession');
    return this;
  }

  /**
   * Grants permission to terminate a running test run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_StopRun.html
   */
  public stopRun() {
    this.add('devicefarm:StopRun');
    return this;
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('devicefarm:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('devicefarm:UntagResource');
    return this;
  }

  /**
   * Grants permission to modify an existing device instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateDeviceInstance.html
   */
  public updateDeviceInstance() {
    this.add('devicefarm:UpdateDeviceInstance');
    return this;
  }

  /**
   * Grants permission to modify an existing device pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateDevicePool.html
   */
  public updateDevicePool() {
    this.add('devicefarm:UpdateDevicePool');
    return this;
  }

  /**
   * Grants permission to modify an existing instance profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateInstanceProfile.html
   */
  public updateInstanceProfile() {
    this.add('devicefarm:UpdateInstanceProfile');
    return this;
  }

  /**
   * Grants permission to modify an existing network profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateNetworkProfile.html
   */
  public updateNetworkProfile() {
    this.add('devicefarm:UpdateNetworkProfile');
    return this;
  }

  /**
   * Grants permission to modify an existing mobile testing project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateProject.html
   */
  public updateProject() {
    this.add('devicefarm:UpdateProject');
    return this;
  }

  /**
   * Grants permission to modify an existing desktop testing project
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateTestGridProject.html
   */
  public updateTestGridProject() {
    this.add('devicefarm:UpdateTestGridProject');
    return this;
  }

  /**
   * Grants permission to modify an existing upload
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateUpload.html
   */
  public updateUpload() {
    this.add('devicefarm:UpdateUpload');
    return this;
  }

  /**
   * Grants permission to modify an existing Amazon Virtual Private Cloud (VPC) endpoint configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_UpdateVPCEConfiguration.html
   */
  public updateVPCEConfiguration() {
    this.add('devicefarm:UpdateVPCEConfiguration');
    return this;
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Project.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProject(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:project:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type run to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Run.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRun(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:run:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Job.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onJob(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:job:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type suite to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Suite.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSuite(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:suite:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type test to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Test.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTest(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:test:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type upload to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Upload.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onUpload(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:upload:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type artifact to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Artifact.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onArtifact(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:artifact:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type sample to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Sample.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSample(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:sample:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type networkprofile to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_NetworkProfile.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetworkprofile(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:networkprofile:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deviceinstance to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DeviceInstance.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeviceinstance(resourceId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}::deviceinstance:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type session to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_RemoteAccessSession.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSession(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:session:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type devicepool to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_DevicePool.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevicepool(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:devicepool:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_Device.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevice(resourceId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}::device:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type instanceprofile to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_InstanceProfile.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInstanceprofile(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:instanceprofile:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type vpceconfiguration to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_VPCEConfiguration.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVpceconfiguration(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:vpceconfiguration:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type testgrid-project to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TestGridProject.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTestgridProject(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:testgrid-project:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type testgrid-session to the statement
   *
   * https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_TestGridSession.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTestgridSession(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:devicefarm:${Region}:${Account}:testgrid-session:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .createProject()
   * - .tagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on tag-value assoicated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - project
   * - run
   * - networkprofile
   * - deviceinstance
   * - session
   * - devicepool
   * - device
   * - instanceprofile
   * - vpceconfiguration
   * - testgrid-project
   * - testgrid-session
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .createProject()
   * - .tagResource()
   * - .untagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
