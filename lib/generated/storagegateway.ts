import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [storagegateway](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonstoragegateway.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Storagegateway extends PolicyStatement {
  public servicePrefix = 'storagegateway';

  /**
   * Statement provider for service [storagegateway](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonstoragegateway.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to activate the gateway you previously deployed on your host
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ActivateGateway.html
   */
  public toActivateGateway() {
    return this.to('ActivateGateway');
  }

  /**
   * Grants permission to configure one or more gateway local disks as cache for a cached-volume gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddCache.html
   */
  public toAddCache() {
    return this.to('AddCache');
  }

  /**
   * Grants permission to add one or more tags to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    return this.to('AddTagsToResource');
  }

  /**
   * Grants permission to configure one or more gateway local disks as upload buffer for a specified gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddUploadBuffer.html
   */
  public toAddUploadBuffer() {
    return this.to('AddUploadBuffer');
  }

  /**
   * Grants permission to configure one or more gateway local disks as working storage for a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddWorkingStorage.html
   */
  public toAddWorkingStorage() {
    return this.to('AddWorkingStorage');
  }

  /**
   * Grants permission to move a tape to the target pool specified
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AssignTapePool.html
   */
  public toAssignTapePool() {
    return this.to('AssignTapePool');
  }

  /**
   * Grants permission to connect a volume to an iSCSI connection and then attaches the volume to the specified gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AttachVolume.html
   */
  public toAttachVolume() {
    return this.to('AttachVolume');
  }

  /**
   * Grants permission to allow the governance retention lock on a pool to be bypassed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/userguide/CreatingCustomTapePool.html#TapeRetentionLock
   */
  public toBypassGovernanceRetention() {
    return this.to('BypassGovernanceRetention');
  }

  /**
   * Grants permission to cancel archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelArchival.html
   */
  public toCancelArchival() {
    return this.to('CancelArchival');
  }

  /**
   * Grants permission to cancel retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelRetrieval.html
   */
  public toCancelRetrieval() {
    return this.to('CancelRetrieval');
  }

  /**
   * Grants permission to create a cached volume on a specified cached gateway. This operation is supported only for the gateway-cached volume architecture
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateCachediSCSIVolume.html
   */
  public toCreateCachediSCSIVolume() {
    return this.to('CreateCachediSCSIVolume');
  }

  /**
   * Grants permission to create a NFS file share on an existing file gateway
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateNFSFileShare.html
   */
  public toCreateNFSFileShare() {
    return this.to('CreateNFSFileShare');
  }

  /**
   * Grants permission to create a SMB file share on an existing file gateway
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSMBFileShare.html
   */
  public toCreateSMBFileShare() {
    return this.to('CreateSMBFileShare');
  }

  /**
   * Grants permission to initiate a snapshot of a volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    return this.to('CreateSnapshot');
  }

  /**
   * Grants permission to initiate a snapshot of a gateway from a volume recovery point
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshotFromVolumeRecoveryPoint.html
   */
  public toCreateSnapshotFromVolumeRecoveryPoint() {
    return this.to('CreateSnapshotFromVolumeRecoveryPoint');
  }

  /**
   * Grants permission to create a volume on a specified gateway
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateStorediSCSIVolume.html
   */
  public toCreateStorediSCSIVolume() {
    return this.to('CreateStorediSCSIVolume');
  }

  /**
   * Grants permission to create a tape pool
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapePool.html
   */
  public toCreateTapePool() {
    return this.to('CreateTapePool');
  }

  /**
   * Grants permission to create a virtual tape by using your own barcode
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapeWithBarcode.html
   */
  public toCreateTapeWithBarcode() {
    return this.to('CreateTapeWithBarcode');
  }

  /**
   * Grants permission to create one or more virtual tapes. You write data to the virtual tapes and then archive the tapes
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateTapes.html
   */
  public toCreateTapes() {
    return this.to('CreateTapes');
  }

  /**
   * Grants permission to delete the automatic tape creation policy configured on a gateway-VTL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteAutomaticTapeCreationPolicy.html
   */
  public toDeleteAutomaticTapeCreationPolicy() {
    return this.to('DeleteAutomaticTapeCreationPolicy');
  }

  /**
   * Grants permission to delete the bandwidth rate limits of a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteBandwidthRateLimit.html
   */
  public toDeleteBandwidthRateLimit() {
    return this.to('DeleteBandwidthRateLimit');
  }

  /**
   * Grants permission to delete Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteChapCredentials.html
   */
  public toDeleteChapCredentials() {
    return this.to('DeleteChapCredentials');
  }

  /**
   * Grants permission to delete a file share from a file gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteFileShare.html
   */
  public toDeleteFileShare() {
    return this.to('DeleteFileShare');
  }

  /**
   * Grants permission to delete a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteGateway.html
   */
  public toDeleteGateway() {
    return this.to('DeleteGateway');
  }

  /**
   * Grants permission to delete a snapshot of a volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteSnapshotSchedule.html
   */
  public toDeleteSnapshotSchedule() {
    return this.to('DeleteSnapshotSchedule');
  }

  /**
   * Grants permission to delete the specified virtual tape
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTape.html
   */
  public toDeleteTape() {
    return this.to('DeleteTape');
  }

  /**
   * Grants permission to delete the specified virtual tape from the virtual tape shelf (VTS)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTapeArchive.html
   */
  public toDeleteTapeArchive() {
    return this.to('DeleteTapeArchive');
  }

  /**
   * Grants permission to delete the specified tape pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTapePool.html
   */
  public toDeleteTapePool() {
    return this.to('DeleteTapePool');
  }

  /**
   * Grants permission to delete the specified gateway volume that you previously created using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteVolume.html
   */
  public toDeleteVolume() {
    return this.to('DeleteVolume');
  }

  /**
   * Grants permission to get the bandwidth rate limits of a gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeBandwidthRateLimit.html
   */
  public toDescribeBandwidthRateLimit() {
    return this.to('DescribeBandwidthRateLimit');
  }

  /**
   * Grants permission to get information about the cache of a gateway. This operation is supported only for the gateway-cached volume architecture
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCache.html
   */
  public toDescribeCache() {
    return this.to('DescribeCache');
  }

  /**
   * Grants permission to get a description of the gateway volumes specified in the request. This operation is supported only for the gateway-cached volume architecture
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCachediSCSIVolumes.html
   */
  public toDescribeCachediSCSIVolumes() {
    return this.to('DescribeCachediSCSIVolumes');
  }

  /**
   * Grants permission to get an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeChapCredentials.html
   */
  public toDescribeChapCredentials() {
    return this.to('DescribeChapCredentials');
  }

  /**
   * Grants permission to get metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeGatewayInformation.html
   */
  public toDescribeGatewayInformation() {
    return this.to('DescribeGatewayInformation');
  }

  /**
   * Grants permission to get your gateway's weekly maintenance start time including the day and time of the week
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeMaintenanceStartTime.html
   */
  public toDescribeMaintenanceStartTime() {
    return this.to('DescribeMaintenanceStartTime');
  }

  /**
   * Grants permission to get a description for one or more file shares from a file gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeNFSFileShares.html
   */
  public toDescribeNFSFileShares() {
    return this.to('DescribeNFSFileShares');
  }

  /**
   * Grants permission to get a description for one or more file shares from a file gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBFileShares.html
   */
  public toDescribeSMBFileShares() {
    return this.to('DescribeSMBFileShares');
  }

  /**
   * Grants permission to get a description of a Server Message Block (SMB) file share settings from a file gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBSettings.html
   */
  public toDescribeSMBSettings() {
    return this.to('DescribeSMBSettings');
  }

  /**
   * Grants permission to describe the snapshot schedule for the specified gateway volume
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSnapshotSchedule.html
   */
  public toDescribeSnapshotSchedule() {
    return this.to('DescribeSnapshotSchedule');
  }

  /**
   * Grants permission to get the description of the gateway volumes specified in the request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeStorediSCSIVolumes.html
   */
  public toDescribeStorediSCSIVolumes() {
    return this.to('DescribeStorediSCSIVolumes');
  }

  /**
   * Grants permission to get a description of specified virtual tapes in the virtual tape shelf (VTS)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeArchives.html
   */
  public toDescribeTapeArchives() {
    return this.to('DescribeTapeArchives');
  }

  /**
   * Grants permission to get a list of virtual tape recovery points that are available for the specified gateway-VTL
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeRecoveryPoints.html
   */
  public toDescribeTapeRecoveryPoints() {
    return this.to('DescribeTapeRecoveryPoints');
  }

  /**
   * Grants permission to get a description of the specified Amazon Resource Name (ARN) of virtual tapes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapes.html
   */
  public toDescribeTapes() {
    return this.to('DescribeTapes');
  }

  /**
   * Grants permission to get information about the upload buffer of a gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeUploadBuffer.html
   */
  public toDescribeUploadBuffer() {
    return this.to('DescribeUploadBuffer');
  }

  /**
   * Grants permission to get a description of virtual tape library (VTL) devices for the specified gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeVTLDevices.html
   */
  public toDescribeVTLDevices() {
    return this.to('DescribeVTLDevices');
  }

  /**
   * Grants permission to get information about the working storage of a gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeWorkingStorage.html
   */
  public toDescribeWorkingStorage() {
    return this.to('DescribeWorkingStorage');
  }

  /**
   * Grants permission to disconnect a volume from an iSCSI connection and then detaches the volume from the specified gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DetachVolume.html
   */
  public toDetachVolume() {
    return this.to('DetachVolume');
  }

  /**
   * Grants permission to disable a gateway when the gateway is no longer functioning
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DisableGateway.html
   */
  public toDisableGateway() {
    return this.to('DisableGateway');
  }

  /**
   * Grants permission to enable you to join an Active Directory Domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_JoinDomain.html
   */
  public toJoinDomain() {
    return this.to('JoinDomain');
  }

  /**
   * Grants permission to list the automatic tape creation policies configured on the specified gateway-VTL or all gateway-VTLs owned by your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListAutomaticTapeCreationPolicies.html
   */
  public toListAutomaticTapeCreationPolicies() {
    return this.to('ListAutomaticTapeCreationPolicies');
  }

  /**
   * Grants permission to get a list of the file shares for a specific file gateway, or the list of file shares that belong to the calling user account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListFileShares.html
   */
  public toListFileShares() {
    return this.to('ListFileShares');
  }

  /**
   * Grants permission to list gateways owned by an AWS account in a region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListGateways.html
   */
  public toListGateways() {
    return this.to('ListGateways');
  }

  /**
   * Grants permission to get a list of the gateway's local disks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListLocalDisks.html
   */
  public toListLocalDisks() {
    return this.to('ListLocalDisks');
  }

  /**
   * Grants permission to get the tags that have been added to the specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list tape pools owned by your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTapePools.html
   */
  public toListTapePools() {
    return this.to('ListTapePools');
  }

  /**
   * Grants permission to list virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTapes.html
   */
  public toListTapes() {
    return this.to('ListTapes');
  }

  /**
   * Grants permission to list iSCSI initiators that are connected to a volume
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeInitiators.html
   */
  public toListVolumeInitiators() {
    return this.to('ListVolumeInitiators');
  }

  /**
   * Grants permission to list the recovery points for a specified gateway
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeRecoveryPoints.html
   */
  public toListVolumeRecoveryPoints() {
    return this.to('ListVolumeRecoveryPoints');
  }

  /**
   * Grants permission to list the iSCSI stored volumes of a gateway
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumes.html
   */
  public toListVolumes() {
    return this.to('ListVolumes');
  }

  /**
   * Grants permission to send you a notification through CloudWatch Events when all files written to your NFS file share have been uploaded to Amazon S3
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_NotifyWhenUploaded.html
   */
  public toNotifyWhenUploaded() {
    return this.to('NotifyWhenUploaded');
  }

  /**
   * Grants permission to refresh the cache for the specified file share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RefreshCache.html
   */
  public toRefreshCache() {
    return this.to('RefreshCache');
  }

  /**
   * Grants permission to remove one or more tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    return this.to('RemoveTagsFromResource');
  }

  /**
   * Grants permission to reset all cache disks that have encountered a error and makes the disks available for reconfiguration as cache storage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ResetCache.html
   */
  public toResetCache() {
    return this.to('ResetCache');
  }

  /**
   * Grants permission to retrieve an archived virtual tape from the virtual tape shelf (VTS) to a gateway-VTL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeArchive.html
   */
  public toRetrieveTapeArchive() {
    return this.to('RetrieveTapeArchive');
  }

  /**
   * Grants permission to retrieve the recovery point for the specified virtual tape
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeRecoveryPoint.html
   */
  public toRetrieveTapeRecoveryPoint() {
    return this.to('RetrieveTapeRecoveryPoint');
  }

  /**
   * Grants permission to set the password for your VM local console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetLocalConsolePassword.html
   */
  public toSetLocalConsolePassword() {
    return this.to('SetLocalConsolePassword');
  }

  /**
   * Grants permission to set the password for SMB Guest user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetSMBGuestPassword.html
   */
  public toSetSMBGuestPassword() {
    return this.to('SetSMBGuestPassword');
  }

  /**
   * Grants permission to shut down a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ShutdownGateway.html
   */
  public toShutdownGateway() {
    return this.to('ShutdownGateway');
  }

  /**
   * Grants permission to start a gateway that you previously shut down
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_StartGateway.html
   */
  public toStartGateway() {
    return this.to('StartGateway');
  }

  /**
   * Grants permission to update the automatic tape creation policy configured on a gateway-VTL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateAutomaticTapeCreationPolicy.html
   */
  public toUpdateAutomaticTapeCreationPolicy() {
    return this.to('UpdateAutomaticTapeCreationPolicy');
  }

  /**
   * Grants permission to update the bandwidth rate limits of a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateBandwidthRateLimit.html
   */
  public toUpdateBandwidthRateLimit() {
    return this.to('UpdateBandwidthRateLimit');
  }

  /**
   * Grants permission to update the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateChapCredentials.html
   */
  public toUpdateChapCredentials() {
    return this.to('UpdateChapCredentials');
  }

  /**
   * Grants permission to update a gateway's metadata, which includes the gateway's name and time zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewayInformation.html
   */
  public toUpdateGatewayInformation() {
    return this.to('UpdateGatewayInformation');
  }

  /**
   * Grants permission to update the gateway virtual machine (VM) software
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewaySoftwareNow.html
   */
  public toUpdateGatewaySoftwareNow() {
    return this.to('UpdateGatewaySoftwareNow');
  }

  /**
   * Grants permission to update a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateMaintenanceStartTime.html
   */
  public toUpdateMaintenanceStartTime() {
    return this.to('UpdateMaintenanceStartTime');
  }

  /**
   * Grants permission to update a NFS file share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateNFSFileShare.html
   */
  public toUpdateNFSFileShare() {
    return this.to('UpdateNFSFileShare');
  }

  /**
   * Grants permission to update a SMB file share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBFileShare.html
   */
  public toUpdateSMBFileShare() {
    return this.to('UpdateSMBFileShare');
  }

  /**
   * Grants permission to update a snapshot schedule configured for a gateway volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSnapshotSchedule.html
   */
  public toUpdateSnapshotSchedule() {
    return this.to('UpdateSnapshotSchedule');
  }

  /**
   * Grants permission to update the type of medium changer in a gateway-VTL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateVTLDeviceType.html
   */
  public toUpdateVTLDeviceType() {
    return this.to('UpdateVTLDeviceType');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "ActivateGateway",
      "AddCache",
      "AddUploadBuffer",
      "AddWorkingStorage",
      "AssignTapePool",
      "AttachVolume",
      "BypassGovernanceRetention",
      "CancelArchival",
      "CancelRetrieval",
      "CreateCachediSCSIVolume",
      "CreateNFSFileShare",
      "CreateSMBFileShare",
      "CreateSnapshot",
      "CreateSnapshotFromVolumeRecoveryPoint",
      "CreateStorediSCSIVolume",
      "CreateTapePool",
      "CreateTapeWithBarcode",
      "CreateTapes",
      "DeleteAutomaticTapeCreationPolicy",
      "DeleteBandwidthRateLimit",
      "DeleteChapCredentials",
      "DeleteFileShare",
      "DeleteGateway",
      "DeleteSnapshotSchedule",
      "DeleteTape",
      "DeleteTapeArchive",
      "DeleteTapePool",
      "DeleteVolume",
      "DetachVolume",
      "DisableGateway",
      "JoinDomain",
      "NotifyWhenUploaded",
      "RefreshCache",
      "ResetCache",
      "RetrieveTapeArchive",
      "RetrieveTapeRecoveryPoint",
      "SetLocalConsolePassword",
      "SetSMBGuestPassword",
      "ShutdownGateway",
      "StartGateway",
      "UpdateAutomaticTapeCreationPolicy",
      "UpdateBandwidthRateLimit",
      "UpdateChapCredentials",
      "UpdateGatewayInformation",
      "UpdateGatewaySoftwareNow",
      "UpdateMaintenanceStartTime",
      "UpdateNFSFileShare",
      "UpdateSMBFileShare",
      "UpdateSnapshotSchedule",
      "UpdateVTLDeviceType"
    ],
    "Tagging": [
      "AddTagsToResource",
      "RemoveTagsFromResource"
    ],
    "Read": [
      "DescribeBandwidthRateLimit",
      "DescribeCache",
      "DescribeCachediSCSIVolumes",
      "DescribeChapCredentials",
      "DescribeGatewayInformation",
      "DescribeMaintenanceStartTime",
      "DescribeNFSFileShares",
      "DescribeSMBFileShares",
      "DescribeSMBSettings",
      "DescribeSnapshotSchedule",
      "DescribeStorediSCSIVolumes",
      "DescribeTapeArchives",
      "DescribeTapeRecoveryPoints",
      "DescribeTapes",
      "DescribeUploadBuffer",
      "DescribeVTLDevices",
      "DescribeWorkingStorage"
    ],
    "List": [
      "ListAutomaticTapeCreationPolicies",
      "ListFileShares",
      "ListGateways",
      "ListLocalDisks",
      "ListTagsForResource",
      "ListTapePools",
      "ListTapes",
      "ListVolumeInitiators",
      "ListVolumeRecoveryPoints",
      "ListVolumes"
    ]
  };

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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Adds a resource of type tapepool to the statement
   *
   * https://docs.aws.amazon.com/storagegateway/latest/userguide/CreatingCustomTapePool.html
   *
   * @param poolId - Identifier for the poolId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTapepool(poolId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:storagegateway:${Region}:${Account}:tapepool/${PoolId}';
    arn = arn.replace('${PoolId}', poolId);
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
   * Possible conditions:
   * - .ifAwsResourceTag()
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
