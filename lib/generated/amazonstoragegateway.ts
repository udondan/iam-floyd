import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [storagegateway](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonstoragegateway.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Storagegateway extends PolicyStatement {
  public servicePrefix = 'storagegateway';
  protected actionList: Actions = {
    "ActivateGateway": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ActivateGateway.html",
      "description": "This operation activates the gateway you previously deployed on your host.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "AddCache": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddCache.html",
      "description": "This operation configures one or more gateway local disks as cache for a cached-volume gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "AddTagsToResource": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddTagsToResource.html",
      "description": "This operation adds one or more tags to the specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "gateway": {
          "required": false
        },
        "share": {
          "required": false
        },
        "tape": {
          "required": false
        },
        "volume": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "AddUploadBuffer": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddUploadBuffer.html",
      "description": "This operation configures one or more gateway local disks as upload buffer for a specified gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "AddWorkingStorage": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddWorkingStorage.html",
      "description": "This operation configures one or more gateway local disks as working storage for a gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "AttachVolume": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AttachVolume.html",
      "description": "This operation connects a volume to an iSCSI connection and then attaches the volume to the specified gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        },
        "volume": {
          "required": true
        }
      }
    },
    "CancelArchival": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelArchival.html",
      "description": "Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        },
        "tape": {
          "required": true
        }
      }
    },
    "CancelRetrieval": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelRetrieval.html",
      "description": "Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        },
        "tape": {
          "required": true
        }
      }
    },
    "CreateCachediSCSIVolume": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateCachediSCSIVolume.html",
      "description": "This operation creates a cached volume on a specified cached gateway. This operation is supported only for the gateway-cached volume architecture.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        },
        "volume": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateNFSFileShare": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html",
      "description": "This operation creates a NFS file share on an existing file gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateSMBFileShare": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSMBFileShare.html",
      "description": "This operation creates a SMB file share on an existing file gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateSnapshot": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshot.html",
      "description": "This operation initiates a snapshot of a volume.",
      "accessLevel": "Write",
      "resourceTypes": {
        "volume": {
          "required": true
        }
      }
    },
    "CreateSnapshotFromVolumeRecoveryPoint": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshotFromVolumeRecoveryPoint.html",
      "description": "This operation initiates a snapshot of a gateway from a volume recovery point.",
      "accessLevel": "Write",
      "resourceTypes": {
        "volume": {
          "required": true
        }
      }
    },
    "CreateStorediSCSIVolume": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateStorediSCSIVolume.html",
      "description": "This operation creates a volume on a specified gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateTapeWithBarcode": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapeWithBarcode.html",
      "description": "Creates a virtual tape by using your own barcode.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateTapes": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapes.html",
      "description": "Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteBandwidthRateLimit": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteBandwidthRateLimit.html",
      "description": "This operation deletes the bandwidth rate limits of a gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DeleteChapCredentials": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteChapCredentials.html",
      "description": "This operation deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair.",
      "accessLevel": "Write",
      "resourceTypes": {
        "target": {
          "required": true
        }
      }
    },
    "DeleteFileShare": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteFileShare.html",
      "description": "This operation deletes a file share from a file gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "share": {
          "required": true
        }
      }
    },
    "DeleteGateway": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteGateway.html",
      "description": "This operation deletes a gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DeleteSnapshotSchedule": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteSnapshotSchedule.html",
      "description": "This operation deletes a snapshot of a volume.",
      "accessLevel": "Write",
      "resourceTypes": {
        "volume": {
          "required": true
        }
      }
    },
    "DeleteTape": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTape.html",
      "description": "Deletes the specified virtual tape.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        },
        "tape": {
          "required": true
        }
      }
    },
    "DeleteTapeArchive": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTapeArchive.html",
      "description": "Deletes the specified virtual tape from the virtual tape shelf (VTS).",
      "accessLevel": "Write"
    },
    "DeleteVolume": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteVolume.html",
      "description": "This operation deletes the specified gateway volume that you previously created using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API.",
      "accessLevel": "Write",
      "resourceTypes": {
        "volume": {
          "required": true
        }
      }
    },
    "DescribeBandwidthRateLimit": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeBandwidthRateLimit.html",
      "description": "This operation returns the bandwidth rate limits of a gateway.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DescribeCache": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCache.html",
      "description": "This operation returns information about the cache of a gateway. This operation is supported only for the gateway-cached volume architecture.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DescribeCachediSCSIVolumes": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCachediSCSIVolumes.html",
      "description": "This operation returns a description of the gateway volumes specified in the request. This operation is supported only for the gateway-cached volume architecture.",
      "accessLevel": "Read",
      "resourceTypes": {
        "volume": {
          "required": true
        }
      }
    },
    "DescribeChapCredentials": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeChapCredentials.html",
      "description": "This operation returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair.",
      "accessLevel": "Read",
      "resourceTypes": {
        "target": {
          "required": true
        }
      }
    },
    "DescribeGatewayInformation": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeGatewayInformation.html",
      "description": "This operation returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not).",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DescribeMaintenanceStartTime": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeMaintenanceStartTime.html",
      "description": "This operation returns your gateway's weekly maintenance start time including the day and time of the week.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DescribeNFSFileShares": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeNFSFileShares.html",
      "description": "This operation gets a description for one or more file shares from a file gateway.",
      "accessLevel": "Read",
      "resourceTypes": {
        "share": {
          "required": true
        }
      }
    },
    "DescribeSMBFileShares": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBFileShares.html",
      "description": "This operation gets a description for one or more file shares from a file gateway.",
      "accessLevel": "Read",
      "resourceTypes": {
        "share": {
          "required": true
        }
      }
    },
    "DescribeSMBSettings": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBSettings.html",
      "description": "This operation gets a description of a Server Message Block (SMB) file share settings from a file gateway.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DescribeSnapshotSchedule": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSnapshotSchedule.html",
      "description": "This operation describes the snapshot schedule for the specified gateway volume.",
      "accessLevel": "Read",
      "resourceTypes": {
        "volume": {
          "required": true
        }
      }
    },
    "DescribeStorediSCSIVolumes": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeStorediSCSIVolumes.html",
      "description": "This operation returns the description of the gateway volumes specified in the request.",
      "accessLevel": "Read",
      "resourceTypes": {
        "volume": {
          "required": true
        }
      }
    },
    "DescribeTapeArchives": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeArchives.html",
      "description": "Returns a description of specified virtual tapes in the virtual tape shelf (VTS).",
      "accessLevel": "Read"
    },
    "DescribeTapeRecoveryPoints": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeRecoveryPoints.html",
      "description": "Returns a list of virtual tape recovery points that are available for the specified gateway-VTL.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DescribeTapes": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapes.html",
      "description": "Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DescribeUploadBuffer": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeUploadBuffer.html",
      "description": "This operation returns information about the upload buffer of a gateway.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DescribeVTLDevices": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeVTLDevices.html",
      "description": "Returns a description of virtual tape library (VTL) devices for the specified gateway.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DescribeWorkingStorage": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeWorkingStorage.html",
      "description": "This operation returns information about the working storage of a gateway.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "DetachVolume": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DetachVolume.html",
      "description": "This operation disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "volume": {
          "required": true
        }
      }
    },
    "DisableGateway": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DisableGateway.html",
      "description": "Disables a gateway when the gateway is no longer functioning.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "JoinDomain": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_JoinDomain.html",
      "description": "This operation enables you to join an Active Directory Domain.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "ListFileShares": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListFileShares.html",
      "description": "This operation gets a list of the file shares for a specific file gateway, or the list of file shares that belong to the calling user account.",
      "accessLevel": "List",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "ListGateways": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListGateways.html",
      "description": "This operation lists gateways owned by an AWS account in a region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN).",
      "accessLevel": "List"
    },
    "ListLocalDisks": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListLocalDisks.html",
      "description": "This operation returns a list of the gateway's local disks.",
      "accessLevel": "List",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTagsForResource.html",
      "description": "This operation lists the tags that have been added to the specified resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "gateway": {
          "required": false
        },
        "share": {
          "required": false
        },
        "tape": {
          "required": false
        },
        "volume": {
          "required": false
        }
      }
    },
    "ListTapes": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTapes.html",
      "description": "Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS).",
      "accessLevel": "Read",
      "resourceTypes": {
        "tape": {
          "required": true
        }
      }
    },
    "ListVolumeInitiators": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeInitiators.html",
      "description": "This operation lists iSCSI initiators that are connected to a volume.",
      "accessLevel": "Read",
      "resourceTypes": {
        "volume": {
          "required": true
        }
      }
    },
    "ListVolumeRecoveryPoints": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeRecoveryPoints.html",
      "description": "This operation lists the recovery points for a specified gateway.",
      "accessLevel": "List",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "ListVolumes": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumes.html",
      "description": "This operation lists the iSCSI stored volumes of a gateway.",
      "accessLevel": "List",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "NotifyWhenUploaded": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_NotifyWhenUploaded.html",
      "description": "This action sends you a notification through CloudWatch Events when all files written to your NFS file share have been uploaded to Amazon S3.",
      "accessLevel": "Write",
      "resourceTypes": {
        "share": {
          "required": true
        }
      }
    },
    "RefreshCache": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RefreshCache.html",
      "description": "This operation refreshes the cache for the specified file share.",
      "accessLevel": "Write",
      "resourceTypes": {
        "share": {
          "required": true
        }
      }
    },
    "RemoveTagsFromResource": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RemoveTagsFromResource.html",
      "description": "This operation removes one or more tags from the specified resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "gateway": {
          "required": false
        },
        "share": {
          "required": false
        },
        "tape": {
          "required": false
        },
        "volume": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "ResetCache": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ResetCache.html",
      "description": "This operation resets all cache disks that have encountered a error and makes the disks available for reconfiguration as cache storage.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "RetrieveTapeArchive": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeArchive.html",
      "description": "Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a gateway-VTL.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        },
        "tape": {
          "required": true
        }
      }
    },
    "RetrieveTapeRecoveryPoint": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeRecoveryPoint.html",
      "description": "Retrieves the recovery point for the specified virtual tape.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        },
        "tape": {
          "required": true
        }
      }
    },
    "SetLocalConsolePassword": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetLocalConsolePassword.html",
      "description": "Sets the password for your VM local console.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "SetSMBGuestPassword": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetSMBGuestPassword.html",
      "description": "Sets the password for SMB Guest user.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "ShutdownGateway": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ShutdownGateway.html",
      "description": "This operation shuts down a gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "StartGateway": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_StartGateway.html",
      "description": "This operation starts a gateway that you previously shut down.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "UpdateBandwidthRateLimit": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateBandwidthRateLimit.html",
      "description": "This operation updates the bandwidth rate limits of a gateway.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "UpdateChapCredentials": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateChapCredentials.html",
      "description": "This operation updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target.",
      "accessLevel": "Write",
      "resourceTypes": {
        "target": {
          "required": true
        }
      }
    },
    "UpdateGatewayInformation": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewayInformation.html",
      "description": "This operation updates a gateway's metadata, which includes the gateway's name and time zone.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "UpdateGatewaySoftwareNow": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewaySoftwareNow.html",
      "description": "This operation updates the gateway virtual machine (VM) software.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "UpdateMaintenanceStartTime": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateMaintenanceStartTime.html",
      "description": "This operation updates a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone.",
      "accessLevel": "Write",
      "resourceTypes": {
        "gateway": {
          "required": true
        }
      }
    },
    "UpdateNFSFileShare": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateNFSFileShare.html",
      "description": "This operation updates a NFS file share.",
      "accessLevel": "Write",
      "resourceTypes": {
        "share": {
          "required": true
        }
      }
    },
    "UpdateSMBFileShare": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBFileShare.html",
      "description": "This operation updates a SMB file share.",
      "accessLevel": "Write",
      "resourceTypes": {
        "share": {
          "required": true
        }
      }
    },
    "UpdateSnapshotSchedule": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSnapshotSchedule.html",
      "description": "This operation updates a snapshot schedule configured for a gateway volume.",
      "accessLevel": "Write",
      "resourceTypes": {
        "volume": {
          "required": true
        }
      }
    },
    "UpdateVTLDeviceType": {
      "url": "https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateVTLDeviceType.html",
      "description": "This operation updates the type of medium changer in a gateway-VTL.",
      "accessLevel": "Write",
      "resourceTypes": {
        "device": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "device": {
      "name": "device",
      "url": "https://docs.aws.amazon.com/storagegateway/latest/userguide/resource_vtl-devices.html",
      "arn": "arn:${Partition}:storagegateway:${Region}:${Account}:gateway/${GatewayId}/device/${Vtldevice}",
      "conditionKeys": []
    },
    "gateway": {
      "name": "gateway",
      "url": "https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html",
      "arn": "arn:${Partition}:storagegateway:${Region}:${Account}:gateway/${GatewayId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "share": {
      "name": "share",
      "url": "https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateFileShare.html",
      "arn": "arn:${Partition}:storagegateway:${Region}:${Account}:share/${ShareId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "tape": {
      "name": "tape",
      "url": "https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html#storage-gateway-vtl-concepts",
      "arn": "arn:${Partition}:storagegateway:${Region}:${Account}:tape/${TapeBarcode}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "target": {
      "name": "target",
      "url": "https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateVolumes.html",
      "arn": "arn:${Partition}:storagegateway:${Region}:${Account}:gateway/${GatewayId}/target/${IscsiTarget}",
      "conditionKeys": []
    },
    "volume": {
      "name": "volume",
      "url": "https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html#volume-gateway-concepts",
      "arn": "arn:${Partition}:storagegateway:${Region}:${Account}:gateway/${GatewayId}/volume/${VolumeId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [storagegateway](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonstoragegateway.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * This operation activates the gateway you previously deployed on your host.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ActivateGateway.html
   */
  public activateGateway() {
    this.add('storagegateway:ActivateGateway');
    return this;
  }

  /**
   * This operation configures one or more gateway local disks as cache for a cached-volume gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddCache.html
   */
  public addCache() {
    this.add('storagegateway:AddCache');
    return this;
  }

  /**
   * This operation adds one or more tags to the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddTagsToResource.html
   */
  public addTagsToResource() {
    this.add('storagegateway:AddTagsToResource');
    return this;
  }

  /**
   * This operation configures one or more gateway local disks as upload buffer for a specified gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddUploadBuffer.html
   */
  public addUploadBuffer() {
    this.add('storagegateway:AddUploadBuffer');
    return this;
  }

  /**
   * This operation configures one or more gateway local disks as working storage for a gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddWorkingStorage.html
   */
  public addWorkingStorage() {
    this.add('storagegateway:AddWorkingStorage');
    return this;
  }

  /**
   * This operation connects a volume to an iSCSI connection and then attaches the volume to the specified gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AttachVolume.html
   */
  public attachVolume() {
    this.add('storagegateway:AttachVolume');
    return this;
  }

  /**
   * Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelArchival.html
   */
  public cancelArchival() {
    this.add('storagegateway:CancelArchival');
    return this;
  }

  /**
   * Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelRetrieval.html
   */
  public cancelRetrieval() {
    this.add('storagegateway:CancelRetrieval');
    return this;
  }

  /**
   * This operation creates a cached volume on a specified cached gateway. This operation is supported only for the gateway-cached volume architecture.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateCachediSCSIVolume.html
   */
  public createCachediSCSIVolume() {
    this.add('storagegateway:CreateCachediSCSIVolume');
    return this;
  }

  /**
   * This operation creates a NFS file share on an existing file gateway.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html
   */
  public createNFSFileShare() {
    this.add('storagegateway:CreateNFSFileShare');
    return this;
  }

  /**
   * This operation creates a SMB file share on an existing file gateway.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSMBFileShare.html
   */
  public createSMBFileShare() {
    this.add('storagegateway:CreateSMBFileShare');
    return this;
  }

  /**
   * This operation initiates a snapshot of a volume.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshot.html
   */
  public createSnapshot() {
    this.add('storagegateway:CreateSnapshot');
    return this;
  }

  /**
   * This operation initiates a snapshot of a gateway from a volume recovery point.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshotFromVolumeRecoveryPoint.html
   */
  public createSnapshotFromVolumeRecoveryPoint() {
    this.add('storagegateway:CreateSnapshotFromVolumeRecoveryPoint');
    return this;
  }

  /**
   * This operation creates a volume on a specified gateway.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateStorediSCSIVolume.html
   */
  public createStorediSCSIVolume() {
    this.add('storagegateway:CreateStorediSCSIVolume');
    return this;
  }

  /**
   * Creates a virtual tape by using your own barcode.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapeWithBarcode.html
   */
  public createTapeWithBarcode() {
    this.add('storagegateway:CreateTapeWithBarcode');
    return this;
  }

  /**
   * Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes.
   *
   * Access Level: Write
   *
   * Possible condition keys:
   * - aws:RequestTag/${TagKey}
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapes.html
   */
  public createTapes() {
    this.add('storagegateway:CreateTapes');
    return this;
  }

  /**
   * This operation deletes the bandwidth rate limits of a gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteBandwidthRateLimit.html
   */
  public deleteBandwidthRateLimit() {
    this.add('storagegateway:DeleteBandwidthRateLimit');
    return this;
  }

  /**
   * This operation deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteChapCredentials.html
   */
  public deleteChapCredentials() {
    this.add('storagegateway:DeleteChapCredentials');
    return this;
  }

  /**
   * This operation deletes a file share from a file gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteFileShare.html
   */
  public deleteFileShare() {
    this.add('storagegateway:DeleteFileShare');
    return this;
  }

  /**
   * This operation deletes a gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteGateway.html
   */
  public deleteGateway() {
    this.add('storagegateway:DeleteGateway');
    return this;
  }

  /**
   * This operation deletes a snapshot of a volume.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteSnapshotSchedule.html
   */
  public deleteSnapshotSchedule() {
    this.add('storagegateway:DeleteSnapshotSchedule');
    return this;
  }

  /**
   * Deletes the specified virtual tape.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTape.html
   */
  public deleteTape() {
    this.add('storagegateway:DeleteTape');
    return this;
  }

  /**
   * Deletes the specified virtual tape from the virtual tape shelf (VTS).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTapeArchive.html
   */
  public deleteTapeArchive() {
    this.add('storagegateway:DeleteTapeArchive');
    return this;
  }

  /**
   * This operation deletes the specified gateway volume that you previously created using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteVolume.html
   */
  public deleteVolume() {
    this.add('storagegateway:DeleteVolume');
    return this;
  }

  /**
   * This operation returns the bandwidth rate limits of a gateway.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeBandwidthRateLimit.html
   */
  public describeBandwidthRateLimit() {
    this.add('storagegateway:DescribeBandwidthRateLimit');
    return this;
  }

  /**
   * This operation returns information about the cache of a gateway. This operation is supported only for the gateway-cached volume architecture.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCache.html
   */
  public describeCache() {
    this.add('storagegateway:DescribeCache');
    return this;
  }

  /**
   * This operation returns a description of the gateway volumes specified in the request. This operation is supported only for the gateway-cached volume architecture.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCachediSCSIVolumes.html
   */
  public describeCachediSCSIVolumes() {
    this.add('storagegateway:DescribeCachediSCSIVolumes');
    return this;
  }

  /**
   * This operation returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeChapCredentials.html
   */
  public describeChapCredentials() {
    this.add('storagegateway:DescribeChapCredentials');
    return this;
  }

  /**
   * This operation returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeGatewayInformation.html
   */
  public describeGatewayInformation() {
    this.add('storagegateway:DescribeGatewayInformation');
    return this;
  }

  /**
   * This operation returns your gateway's weekly maintenance start time including the day and time of the week.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeMaintenanceStartTime.html
   */
  public describeMaintenanceStartTime() {
    this.add('storagegateway:DescribeMaintenanceStartTime');
    return this;
  }

  /**
   * This operation gets a description for one or more file shares from a file gateway.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeNFSFileShares.html
   */
  public describeNFSFileShares() {
    this.add('storagegateway:DescribeNFSFileShares');
    return this;
  }

  /**
   * This operation gets a description for one or more file shares from a file gateway.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBFileShares.html
   */
  public describeSMBFileShares() {
    this.add('storagegateway:DescribeSMBFileShares');
    return this;
  }

  /**
   * This operation gets a description of a Server Message Block (SMB) file share settings from a file gateway.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBSettings.html
   */
  public describeSMBSettings() {
    this.add('storagegateway:DescribeSMBSettings');
    return this;
  }

  /**
   * This operation describes the snapshot schedule for the specified gateway volume.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSnapshotSchedule.html
   */
  public describeSnapshotSchedule() {
    this.add('storagegateway:DescribeSnapshotSchedule');
    return this;
  }

  /**
   * This operation returns the description of the gateway volumes specified in the request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeStorediSCSIVolumes.html
   */
  public describeStorediSCSIVolumes() {
    this.add('storagegateway:DescribeStorediSCSIVolumes');
    return this;
  }

  /**
   * Returns a description of specified virtual tapes in the virtual tape shelf (VTS).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeArchives.html
   */
  public describeTapeArchives() {
    this.add('storagegateway:DescribeTapeArchives');
    return this;
  }

  /**
   * Returns a list of virtual tape recovery points that are available for the specified gateway-VTL.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeRecoveryPoints.html
   */
  public describeTapeRecoveryPoints() {
    this.add('storagegateway:DescribeTapeRecoveryPoints');
    return this;
  }

  /**
   * Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapes.html
   */
  public describeTapes() {
    this.add('storagegateway:DescribeTapes');
    return this;
  }

  /**
   * This operation returns information about the upload buffer of a gateway.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeUploadBuffer.html
   */
  public describeUploadBuffer() {
    this.add('storagegateway:DescribeUploadBuffer');
    return this;
  }

  /**
   * Returns a description of virtual tape library (VTL) devices for the specified gateway.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeVTLDevices.html
   */
  public describeVTLDevices() {
    this.add('storagegateway:DescribeVTLDevices');
    return this;
  }

  /**
   * This operation returns information about the working storage of a gateway.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeWorkingStorage.html
   */
  public describeWorkingStorage() {
    this.add('storagegateway:DescribeWorkingStorage');
    return this;
  }

  /**
   * This operation disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DetachVolume.html
   */
  public detachVolume() {
    this.add('storagegateway:DetachVolume');
    return this;
  }

  /**
   * Disables a gateway when the gateway is no longer functioning.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DisableGateway.html
   */
  public disableGateway() {
    this.add('storagegateway:DisableGateway');
    return this;
  }

  /**
   * This operation enables you to join an Active Directory Domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_JoinDomain.html
   */
  public joinDomain() {
    this.add('storagegateway:JoinDomain');
    return this;
  }

  /**
   * This operation gets a list of the file shares for a specific file gateway, or the list of file shares that belong to the calling user account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListFileShares.html
   */
  public listFileShares() {
    this.add('storagegateway:ListFileShares');
    return this;
  }

  /**
   * This operation lists gateways owned by an AWS account in a region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN).
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListGateways.html
   */
  public listGateways() {
    this.add('storagegateway:ListGateways');
    return this;
  }

  /**
   * This operation returns a list of the gateway's local disks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListLocalDisks.html
   */
  public listLocalDisks() {
    this.add('storagegateway:ListLocalDisks');
    return this;
  }

  /**
   * This operation lists the tags that have been added to the specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('storagegateway:ListTagsForResource');
    return this;
  }

  /**
   * Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTapes.html
   */
  public listTapes() {
    this.add('storagegateway:ListTapes');
    return this;
  }

  /**
   * This operation lists iSCSI initiators that are connected to a volume.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeInitiators.html
   */
  public listVolumeInitiators() {
    this.add('storagegateway:ListVolumeInitiators');
    return this;
  }

  /**
   * This operation lists the recovery points for a specified gateway.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeRecoveryPoints.html
   */
  public listVolumeRecoveryPoints() {
    this.add('storagegateway:ListVolumeRecoveryPoints');
    return this;
  }

  /**
   * This operation lists the iSCSI stored volumes of a gateway.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumes.html
   */
  public listVolumes() {
    this.add('storagegateway:ListVolumes');
    return this;
  }

  /**
   * This action sends you a notification through CloudWatch Events when all files written to your NFS file share have been uploaded to Amazon S3.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_NotifyWhenUploaded.html
   */
  public notifyWhenUploaded() {
    this.add('storagegateway:NotifyWhenUploaded');
    return this;
  }

  /**
   * This operation refreshes the cache for the specified file share.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RefreshCache.html
   */
  public refreshCache() {
    this.add('storagegateway:RefreshCache');
    return this;
  }

  /**
   * This operation removes one or more tags from the specified resource.
   *
   * Access Level: Tagging
   *
   * Possible condition keys:
   * - aws:TagKeys
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RemoveTagsFromResource.html
   */
  public removeTagsFromResource() {
    this.add('storagegateway:RemoveTagsFromResource');
    return this;
  }

  /**
   * This operation resets all cache disks that have encountered a error and makes the disks available for reconfiguration as cache storage.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ResetCache.html
   */
  public resetCache() {
    this.add('storagegateway:ResetCache');
    return this;
  }

  /**
   * Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a gateway-VTL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeArchive.html
   */
  public retrieveTapeArchive() {
    this.add('storagegateway:RetrieveTapeArchive');
    return this;
  }

  /**
   * Retrieves the recovery point for the specified virtual tape.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeRecoveryPoint.html
   */
  public retrieveTapeRecoveryPoint() {
    this.add('storagegateway:RetrieveTapeRecoveryPoint');
    return this;
  }

  /**
   * Sets the password for your VM local console.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetLocalConsolePassword.html
   */
  public setLocalConsolePassword() {
    this.add('storagegateway:SetLocalConsolePassword');
    return this;
  }

  /**
   * Sets the password for SMB Guest user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetSMBGuestPassword.html
   */
  public setSMBGuestPassword() {
    this.add('storagegateway:SetSMBGuestPassword');
    return this;
  }

  /**
   * This operation shuts down a gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ShutdownGateway.html
   */
  public shutdownGateway() {
    this.add('storagegateway:ShutdownGateway');
    return this;
  }

  /**
   * This operation starts a gateway that you previously shut down.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_StartGateway.html
   */
  public startGateway() {
    this.add('storagegateway:StartGateway');
    return this;
  }

  /**
   * This operation updates the bandwidth rate limits of a gateway.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateBandwidthRateLimit.html
   */
  public updateBandwidthRateLimit() {
    this.add('storagegateway:UpdateBandwidthRateLimit');
    return this;
  }

  /**
   * This operation updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateChapCredentials.html
   */
  public updateChapCredentials() {
    this.add('storagegateway:UpdateChapCredentials');
    return this;
  }

  /**
   * This operation updates a gateway's metadata, which includes the gateway's name and time zone.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewayInformation.html
   */
  public updateGatewayInformation() {
    this.add('storagegateway:UpdateGatewayInformation');
    return this;
  }

  /**
   * This operation updates the gateway virtual machine (VM) software.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewaySoftwareNow.html
   */
  public updateGatewaySoftwareNow() {
    this.add('storagegateway:UpdateGatewaySoftwareNow');
    return this;
  }

  /**
   * This operation updates a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateMaintenanceStartTime.html
   */
  public updateMaintenanceStartTime() {
    this.add('storagegateway:UpdateMaintenanceStartTime');
    return this;
  }

  /**
   * This operation updates a NFS file share.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateNFSFileShare.html
   */
  public updateNFSFileShare() {
    this.add('storagegateway:UpdateNFSFileShare');
    return this;
  }

  /**
   * This operation updates a SMB file share.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBFileShare.html
   */
  public updateSMBFileShare() {
    this.add('storagegateway:UpdateSMBFileShare');
    return this;
  }

  /**
   * This operation updates a snapshot schedule configured for a gateway volume.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSnapshotSchedule.html
   */
  public updateSnapshotSchedule() {
    this.add('storagegateway:UpdateSnapshotSchedule');
    return this;
  }

  /**
   * This operation updates the type of medium changer in a gateway-VTL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateVTLDeviceType.html
   */
  public updateVTLDeviceType() {
    this.add('storagegateway:UpdateVTLDeviceType');
    return this;
  }

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/storagegateway/latest/userguide/resource_vtl-devices.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param vtldevice - Identifier for the vtldevice.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDevice(gatewayId: string, vtldevice: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:storagegateway:${Region}:${Account}:gateway/${GatewayId}/device/${Vtldevice}';
    arn = arn.replace('${GatewayId}', gatewayId);
    arn = arn.replace('${Vtldevice}', vtldevice);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type gateway to the statement
   *
   * https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onGateway(gatewayId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:storagegateway:${Region}:${Account}:gateway/${GatewayId}';
    arn = arn.replace('${GatewayId}', gatewayId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type share to the statement
   *
   * https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateFileShare.html
   *
   * @param shareId - Identifier for the shareId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onShare(shareId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:storagegateway:${Region}:${Account}:share/${ShareId}';
    arn = arn.replace('${ShareId}', shareId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type tape to the statement
   *
   * https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html#storage-gateway-vtl-concepts
   *
   * @param tapeBarcode - Identifier for the tapeBarcode.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onTape(tapeBarcode: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:storagegateway:${Region}:${Account}:tape/${TapeBarcode}';
    arn = arn.replace('${TapeBarcode}', tapeBarcode);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type target to the statement
   *
   * https://docs.aws.amazon.com/storagegateway/latest/userguide/GettingStartedCreateVolumes.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param iscsiTarget - Identifier for the iscsiTarget.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTarget(gatewayId: string, iscsiTarget: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:storagegateway:${Region}:${Account}:gateway/${GatewayId}/target/${IscsiTarget}';
    arn = arn.replace('${GatewayId}', gatewayId);
    arn = arn.replace('${IscsiTarget}', iscsiTarget);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type volume to the statement
   *
   * https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html#volume-gateway-concepts
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param volumeId - Identifier for the volumeId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   * - aws:ResourceTag/${TagKey}
   */
  public onVolume(gatewayId: string, volumeId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:storagegateway:${Region}:${Account}:gateway/${GatewayId}/volume/${VolumeId}';
    arn = arn.replace('${GatewayId}', gatewayId);
    arn = arn.replace('${VolumeId}', volumeId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
