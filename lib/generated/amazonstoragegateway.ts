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
    this.to('storagegateway:ActivateGateway');
    return this;
  }

  /**
   * Grants permission to configure one or more gateway local disks as cache for a cached-volume gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddCache.html
   */
  public toAddCache() {
    this.to('storagegateway:AddCache');
    return this;
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
    this.to('storagegateway:AddTagsToResource');
    return this;
  }

  /**
   * Grants permission to configure one or more gateway local disks as upload buffer for a specified gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddUploadBuffer.html
   */
  public toAddUploadBuffer() {
    this.to('storagegateway:AddUploadBuffer');
    return this;
  }

  /**
   * Grants permission to configure one or more gateway local disks as working storage for a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AddWorkingStorage.html
   */
  public toAddWorkingStorage() {
    this.to('storagegateway:AddWorkingStorage');
    return this;
  }

  /**
   * Grants permission to move a tape to the target pool specified
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AssignTapePool.html
   */
  public toAssignTapePool() {
    this.to('storagegateway:AssignTapePool');
    return this;
  }

  /**
   * Grants permission to connect a volume to an iSCSI connection and then attaches the volume to the specified gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_AttachVolume.html
   */
  public toAttachVolume() {
    this.to('storagegateway:AttachVolume');
    return this;
  }

  /**
   * Grants permission to allow the governance retention lock on a pool to be bypassed
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/userguide/CreatingCustomTapePool.html#TapeRetentionLock
   */
  public toBypassGovernanceRetention() {
    this.to('storagegateway:BypassGovernanceRetention');
    return this;
  }

  /**
   * Grants permission to cancel archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelArchival.html
   */
  public toCancelArchival() {
    this.to('storagegateway:CancelArchival');
    return this;
  }

  /**
   * Grants permission to cancel retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CancelRetrieval.html
   */
  public toCancelRetrieval() {
    this.to('storagegateway:CancelRetrieval');
    return this;
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
    this.to('storagegateway:CreateCachediSCSIVolume');
    return this;
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
    this.to('storagegateway:CreateNFSFileShare');
    return this;
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
    this.to('storagegateway:CreateSMBFileShare');
    return this;
  }

  /**
   * Grants permission to initiate a snapshot of a volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    this.to('storagegateway:CreateSnapshot');
    return this;
  }

  /**
   * Grants permission to initiate a snapshot of a gateway from a volume recovery point
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_CreateSnapshotFromVolumeRecoveryPoint.html
   */
  public toCreateSnapshotFromVolumeRecoveryPoint() {
    this.to('storagegateway:CreateSnapshotFromVolumeRecoveryPoint');
    return this;
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
    this.to('storagegateway:CreateStorediSCSIVolume');
    return this;
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
    this.to('storagegateway:CreateTapePool');
    return this;
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
    this.to('storagegateway:CreateTapeWithBarcode');
    return this;
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
    this.to('storagegateway:CreateTapes');
    return this;
  }

  /**
   * Grants permission to delete the automatic tape creation policy configured on a gateway-VTL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteAutomaticTapeCreationPolicy.html
   */
  public toDeleteAutomaticTapeCreationPolicy() {
    this.to('storagegateway:DeleteAutomaticTapeCreationPolicy');
    return this;
  }

  /**
   * Grants permission to delete the bandwidth rate limits of a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteBandwidthRateLimit.html
   */
  public toDeleteBandwidthRateLimit() {
    this.to('storagegateway:DeleteBandwidthRateLimit');
    return this;
  }

  /**
   * Grants permission to delete Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteChapCredentials.html
   */
  public toDeleteChapCredentials() {
    this.to('storagegateway:DeleteChapCredentials');
    return this;
  }

  /**
   * Grants permission to delete a file share from a file gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteFileShare.html
   */
  public toDeleteFileShare() {
    this.to('storagegateway:DeleteFileShare');
    return this;
  }

  /**
   * Grants permission to delete a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteGateway.html
   */
  public toDeleteGateway() {
    this.to('storagegateway:DeleteGateway');
    return this;
  }

  /**
   * Grants permission to delete a snapshot of a volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteSnapshotSchedule.html
   */
  public toDeleteSnapshotSchedule() {
    this.to('storagegateway:DeleteSnapshotSchedule');
    return this;
  }

  /**
   * Grants permission to delete the specified virtual tape
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTape.html
   */
  public toDeleteTape() {
    this.to('storagegateway:DeleteTape');
    return this;
  }

  /**
   * Grants permission to delete the specified virtual tape from the virtual tape shelf (VTS)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTapeArchive.html
   */
  public toDeleteTapeArchive() {
    this.to('storagegateway:DeleteTapeArchive');
    return this;
  }

  /**
   * Grants permission to delete the specified tape pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteTapePool.html
   */
  public toDeleteTapePool() {
    this.to('storagegateway:DeleteTapePool');
    return this;
  }

  /**
   * Grants permission to delete the specified gateway volume that you previously created using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DeleteVolume.html
   */
  public toDeleteVolume() {
    this.to('storagegateway:DeleteVolume');
    return this;
  }

  /**
   * Grants permission to get the bandwidth rate limits of a gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeBandwidthRateLimit.html
   */
  public toDescribeBandwidthRateLimit() {
    this.to('storagegateway:DescribeBandwidthRateLimit');
    return this;
  }

  /**
   * Grants permission to get information about the cache of a gateway. This operation is supported only for the gateway-cached volume architecture
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCache.html
   */
  public toDescribeCache() {
    this.to('storagegateway:DescribeCache');
    return this;
  }

  /**
   * Grants permission to get a description of the gateway volumes specified in the request. This operation is supported only for the gateway-cached volume architecture
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeCachediSCSIVolumes.html
   */
  public toDescribeCachediSCSIVolumes() {
    this.to('storagegateway:DescribeCachediSCSIVolumes');
    return this;
  }

  /**
   * Grants permission to get an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeChapCredentials.html
   */
  public toDescribeChapCredentials() {
    this.to('storagegateway:DescribeChapCredentials');
    return this;
  }

  /**
   * Grants permission to get metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeGatewayInformation.html
   */
  public toDescribeGatewayInformation() {
    this.to('storagegateway:DescribeGatewayInformation');
    return this;
  }

  /**
   * Grants permission to get your gateway's weekly maintenance start time including the day and time of the week
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeMaintenanceStartTime.html
   */
  public toDescribeMaintenanceStartTime() {
    this.to('storagegateway:DescribeMaintenanceStartTime');
    return this;
  }

  /**
   * Grants permission to get a description for one or more file shares from a file gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeNFSFileShares.html
   */
  public toDescribeNFSFileShares() {
    this.to('storagegateway:DescribeNFSFileShares');
    return this;
  }

  /**
   * Grants permission to get a description for one or more file shares from a file gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBFileShares.html
   */
  public toDescribeSMBFileShares() {
    this.to('storagegateway:DescribeSMBFileShares');
    return this;
  }

  /**
   * Grants permission to get a description of a Server Message Block (SMB) file share settings from a file gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSMBSettings.html
   */
  public toDescribeSMBSettings() {
    this.to('storagegateway:DescribeSMBSettings');
    return this;
  }

  /**
   * Grants permission to describe the snapshot schedule for the specified gateway volume
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeSnapshotSchedule.html
   */
  public toDescribeSnapshotSchedule() {
    this.to('storagegateway:DescribeSnapshotSchedule');
    return this;
  }

  /**
   * Grants permission to get the description of the gateway volumes specified in the request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeStorediSCSIVolumes.html
   */
  public toDescribeStorediSCSIVolumes() {
    this.to('storagegateway:DescribeStorediSCSIVolumes');
    return this;
  }

  /**
   * Grants permission to get a description of specified virtual tapes in the virtual tape shelf (VTS)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeArchives.html
   */
  public toDescribeTapeArchives() {
    this.to('storagegateway:DescribeTapeArchives');
    return this;
  }

  /**
   * Grants permission to get a list of virtual tape recovery points that are available for the specified gateway-VTL
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapeRecoveryPoints.html
   */
  public toDescribeTapeRecoveryPoints() {
    this.to('storagegateway:DescribeTapeRecoveryPoints');
    return this;
  }

  /**
   * Grants permission to get a description of the specified Amazon Resource Name (ARN) of virtual tapes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeTapes.html
   */
  public toDescribeTapes() {
    this.to('storagegateway:DescribeTapes');
    return this;
  }

  /**
   * Grants permission to get information about the upload buffer of a gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeUploadBuffer.html
   */
  public toDescribeUploadBuffer() {
    this.to('storagegateway:DescribeUploadBuffer');
    return this;
  }

  /**
   * Grants permission to get a description of virtual tape library (VTL) devices for the specified gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeVTLDevices.html
   */
  public toDescribeVTLDevices() {
    this.to('storagegateway:DescribeVTLDevices');
    return this;
  }

  /**
   * Grants permission to get information about the working storage of a gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DescribeWorkingStorage.html
   */
  public toDescribeWorkingStorage() {
    this.to('storagegateway:DescribeWorkingStorage');
    return this;
  }

  /**
   * Grants permission to disconnect a volume from an iSCSI connection and then detaches the volume from the specified gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DetachVolume.html
   */
  public toDetachVolume() {
    this.to('storagegateway:DetachVolume');
    return this;
  }

  /**
   * Grants permission to disable a gateway when the gateway is no longer functioning
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_DisableGateway.html
   */
  public toDisableGateway() {
    this.to('storagegateway:DisableGateway');
    return this;
  }

  /**
   * Grants permission to enable you to join an Active Directory Domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_JoinDomain.html
   */
  public toJoinDomain() {
    this.to('storagegateway:JoinDomain');
    return this;
  }

  /**
   * Grants permission to list the automatic tape creation policies configured on the specified gateway-VTL or all gateway-VTLs owned by your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListAutomaticTapeCreationPolicies.html
   */
  public toListAutomaticTapeCreationPolicies() {
    this.to('storagegateway:ListAutomaticTapeCreationPolicies');
    return this;
  }

  /**
   * Grants permission to get a list of the file shares for a specific file gateway, or the list of file shares that belong to the calling user account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListFileShares.html
   */
  public toListFileShares() {
    this.to('storagegateway:ListFileShares');
    return this;
  }

  /**
   * Grants permission to list gateways owned by an AWS account in a region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListGateways.html
   */
  public toListGateways() {
    this.to('storagegateway:ListGateways');
    return this;
  }

  /**
   * Grants permission to get a list of the gateway's local disks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListLocalDisks.html
   */
  public toListLocalDisks() {
    this.to('storagegateway:ListLocalDisks');
    return this;
  }

  /**
   * Grants permission to get the tags that have been added to the specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('storagegateway:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list tape pools owned by your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTapePools.html
   */
  public toListTapePools() {
    this.to('storagegateway:ListTapePools');
    return this;
  }

  /**
   * Grants permission to list virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS)
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListTapes.html
   */
  public toListTapes() {
    this.to('storagegateway:ListTapes');
    return this;
  }

  /**
   * Grants permission to list iSCSI initiators that are connected to a volume
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeInitiators.html
   */
  public toListVolumeInitiators() {
    this.to('storagegateway:ListVolumeInitiators');
    return this;
  }

  /**
   * Grants permission to list the recovery points for a specified gateway
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumeRecoveryPoints.html
   */
  public toListVolumeRecoveryPoints() {
    this.to('storagegateway:ListVolumeRecoveryPoints');
    return this;
  }

  /**
   * Grants permission to list the iSCSI stored volumes of a gateway
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ListVolumes.html
   */
  public toListVolumes() {
    this.to('storagegateway:ListVolumes');
    return this;
  }

  /**
   * Grants permission to send you a notification through CloudWatch Events when all files written to your NFS file share have been uploaded to Amazon S3
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_NotifyWhenUploaded.html
   */
  public toNotifyWhenUploaded() {
    this.to('storagegateway:NotifyWhenUploaded');
    return this;
  }

  /**
   * Grants permission to refresh the cache for the specified file share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RefreshCache.html
   */
  public toRefreshCache() {
    this.to('storagegateway:RefreshCache');
    return this;
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
    this.to('storagegateway:RemoveTagsFromResource');
    return this;
  }

  /**
   * Grants permission to reset all cache disks that have encountered a error and makes the disks available for reconfiguration as cache storage
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ResetCache.html
   */
  public toResetCache() {
    this.to('storagegateway:ResetCache');
    return this;
  }

  /**
   * Grants permission to retrieve an archived virtual tape from the virtual tape shelf (VTS) to a gateway-VTL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeArchive.html
   */
  public toRetrieveTapeArchive() {
    this.to('storagegateway:RetrieveTapeArchive');
    return this;
  }

  /**
   * Grants permission to retrieve the recovery point for the specified virtual tape
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_RetrieveTapeRecoveryPoint.html
   */
  public toRetrieveTapeRecoveryPoint() {
    this.to('storagegateway:RetrieveTapeRecoveryPoint');
    return this;
  }

  /**
   * Grants permission to set the password for your VM local console
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetLocalConsolePassword.html
   */
  public toSetLocalConsolePassword() {
    this.to('storagegateway:SetLocalConsolePassword');
    return this;
  }

  /**
   * Grants permission to set the password for SMB Guest user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_SetSMBGuestPassword.html
   */
  public toSetSMBGuestPassword() {
    this.to('storagegateway:SetSMBGuestPassword');
    return this;
  }

  /**
   * Grants permission to shut down a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_ShutdownGateway.html
   */
  public toShutdownGateway() {
    this.to('storagegateway:ShutdownGateway');
    return this;
  }

  /**
   * Grants permission to start a gateway that you previously shut down
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_StartGateway.html
   */
  public toStartGateway() {
    this.to('storagegateway:StartGateway');
    return this;
  }

  /**
   * Grants permission to update the automatic tape creation policy configured on a gateway-VTL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateAutomaticTapeCreationPolicy.html
   */
  public toUpdateAutomaticTapeCreationPolicy() {
    this.to('storagegateway:UpdateAutomaticTapeCreationPolicy');
    return this;
  }

  /**
   * Grants permission to update the bandwidth rate limits of a gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateBandwidthRateLimit.html
   */
  public toUpdateBandwidthRateLimit() {
    this.to('storagegateway:UpdateBandwidthRateLimit');
    return this;
  }

  /**
   * Grants permission to update the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateChapCredentials.html
   */
  public toUpdateChapCredentials() {
    this.to('storagegateway:UpdateChapCredentials');
    return this;
  }

  /**
   * Grants permission to update a gateway's metadata, which includes the gateway's name and time zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewayInformation.html
   */
  public toUpdateGatewayInformation() {
    this.to('storagegateway:UpdateGatewayInformation');
    return this;
  }

  /**
   * Grants permission to update the gateway virtual machine (VM) software
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateGatewaySoftwareNow.html
   */
  public toUpdateGatewaySoftwareNow() {
    this.to('storagegateway:UpdateGatewaySoftwareNow');
    return this;
  }

  /**
   * Grants permission to update a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateMaintenanceStartTime.html
   */
  public toUpdateMaintenanceStartTime() {
    this.to('storagegateway:UpdateMaintenanceStartTime');
    return this;
  }

  /**
   * Grants permission to update a NFS file share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateNFSFileShare.html
   */
  public toUpdateNFSFileShare() {
    this.to('storagegateway:UpdateNFSFileShare');
    return this;
  }

  /**
   * Grants permission to update a SMB file share
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSMBFileShare.html
   */
  public toUpdateSMBFileShare() {
    this.to('storagegateway:UpdateSMBFileShare');
    return this;
  }

  /**
   * Grants permission to update a snapshot schedule configured for a gateway volume
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateSnapshotSchedule.html
   */
  public toUpdateSnapshotSchedule() {
    this.to('storagegateway:UpdateSnapshotSchedule');
    return this;
  }

  /**
   * Grants permission to update the type of medium changer in a gateway-VTL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_UpdateVTLDeviceType.html
   */
  public toUpdateVTLDeviceType() {
    this.to('storagegateway:UpdateVTLDeviceType');
    return this;
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
