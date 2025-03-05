import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [iotmanagedintegrations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotmanagedintegrationsfeatureofiotdevicemanagement.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotmanagedintegrations extends PolicyStatement {
  public servicePrefix = 'iotmanagedintegrations';

  /**
   * Statement provider for service [iotmanagedintegrations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotmanagedintegrationsfeatureofiotdevicemanagement.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a product credential locker. This operation will trigger the creation of all the manufacturing resources including Wi-Fi setup key pair and device certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateCredentialLocker.html
   */
  public toCreateCredentialLocker() {
    return this.to('CreateCredentialLocker');
  }

  /**
   * Grants permission to create a destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateDestination.html
   */
  public toCreateDestination() {
    return this.to('CreateDestination');
  }

  /**
   * Grants permission to set the event log configuration for the account, a resource type, or a specific resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateEventLogConfiguration.html
   */
  public toCreateEventLogConfiguration() {
    return this.to('CreateEventLogConfiguration');
  }

  /**
   * Grants permission to create a Managed Thing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateManagedThing.html
   */
  public toCreateManagedThing() {
    return this.to('CreateManagedThing');
  }

  /**
   * Grants permission to create a notification configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateNotificationConfiguration.html
   */
  public toCreateNotificationConfiguration() {
    return this.to('CreateNotificationConfiguration');
  }

  /**
   * Grants permission to customers to create an OTA task to update their devices
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateOtaTask.html
   */
  public toCreateOtaTask() {
    return this.to('CreateOtaTask');
  }

  /**
   * Grants permission to create an OTA task configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateOtaTaskConfiguration.html
   */
  public toCreateOtaTaskConfiguration() {
    return this.to('CreateOtaTaskConfiguration');
  }

  /**
   * Grants permission to create a new provisioning profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateProvisioningProfile.html
   */
  public toCreateProvisioningProfile() {
    return this.to('CreateProvisioningProfile');
  }

  /**
   * Grants permission to delete a Credential Locker. This operation cannot be undone and any existing device won't be able to use the IoT managed integrations Setup
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteCredentialLocker.html
   */
  public toDeleteCredentialLocker() {
    return this.to('DeleteCredentialLocker');
  }

  /**
   * Grants permission to delete a destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteDestination.html
   */
  public toDeleteDestination() {
    return this.to('DeleteDestination');
  }

  /**
   * Grants permission to delete an event log configuration by log configuration ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteEventLogConfiguration.html
   */
  public toDeleteEventLogConfiguration() {
    return this.to('DeleteEventLogConfiguration');
  }

  /**
   * Grants permission to delete a managed thing. If a Controller is deleted, all the devices connected to it will have their status changed to pending. Note, it is not possible to remove a Cloud device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteManagedThing.html
   */
  public toDeleteManagedThing() {
    return this.to('DeleteManagedThing');
  }

  /**
   * Grants permission to delete a notification configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteNotificationConfiguration.html
   */
  public toDeleteNotificationConfiguration() {
    return this.to('DeleteNotificationConfiguration');
  }

  /**
   * Grants permission to delete an OTA task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteOtaTask.html
   */
  public toDeleteOtaTask() {
    return this.to('DeleteOtaTask');
  }

  /**
   * Grants permission to delete a OTA task configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteOtaTaskConfiguration.html
   */
  public toDeleteOtaTaskConfiguration() {
    return this.to('DeleteOtaTaskConfiguration');
  }

  /**
   * Grants permission to delete a provisioning Profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteProvisioningProfile.html
   */
  public toDeleteProvisioningProfile() {
    return this.to('DeleteProvisioningProfile');
  }

  /**
   * Grants permission to get an existing Credential Locker information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetCredentialLocker.html
   */
  public toGetCredentialLocker() {
    return this.to('GetCredentialLocker');
  }

  /**
   * Grants permission to customers to retrieve the custom endpoint address
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetCustomEndpoint.html
   */
  public toGetCustomEndpoint() {
    return this.to('GetCustomEndpoint');
  }

  /**
   * Grants permission to get a connector by AWS ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetDefaultEncryptionConfiguration.html
   */
  public toGetDefaultEncryptionConfiguration() {
    return this.to('GetDefaultEncryptionConfiguration');
  }

  /**
   * Grants permission to get a destination
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetDestination.html
   */
  public toGetDestination() {
    return this.to('GetDestination');
  }

  /**
   * Grants permission to get the current state of a device discovery
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetDeviceDiscovery.html
   */
  public toGetDeviceDiscovery() {
    return this.to('GetDeviceDiscovery');
  }

  /**
   * Grants permission to get an event log configuration by log configuration ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetEventLogConfiguration.html
   */
  public toGetEventLogConfiguration() {
    return this.to('GetEventLogConfiguration');
  }

  /**
   * Grants permission to get hub configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetHubConfiguration.html
   */
  public toGetHubConfiguration() {
    return this.to('GetHubConfiguration');
  }

  /**
   * Grants permission to get a managed thing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetManagedThing.html
   */
  public toGetManagedThing() {
    return this.to('GetManagedThing');
  }

  /**
   * Grants permission to get capabilities by ManagedThingId
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetManagedThingCapabilities.html
   */
  public toGetManagedThingCapabilities() {
    return this.to('GetManagedThingCapabilities');
  }

  /**
   * Grants permission to get the connectivity status of a Managed Thing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetManagedThingConnectivityData.html
   */
  public toGetManagedThingConnectivityData() {
    return this.to('GetManagedThingConnectivityData');
  }

  /**
   * Grants permission to get metaData info by ManagedThingId
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetManagedThingMetaData.html
   */
  public toGetManagedThingMetaData() {
    return this.to('GetManagedThingMetaData');
  }

  /**
   * Grants permission to get managed thing states by managed thing id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetManagedThingState.html
   */
  public toGetManagedThingState() {
    return this.to('GetManagedThingState');
  }

  /**
   * Grants permission to get a notification configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetNotificationConfiguration.html
   */
  public toGetNotificationConfiguration() {
    return this.to('GetNotificationConfiguration');
  }

  /**
   * Grants permission to get the Ota task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetOtaTask.html
   */
  public toGetOtaTask() {
    return this.to('GetOtaTask');
  }

  /**
   * Grants permission to get an OTA task configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetOtaTaskConfiguration.html
   */
  public toGetOtaTaskConfiguration() {
    return this.to('GetOtaTaskConfiguration');
  }

  /**
   * Grants permission to get an existing provisioning profile information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetProvisioningProfile.html
   */
  public toGetProvisioningProfile() {
    return this.to('GetProvisioningProfile');
  }

  /**
   * Grants permission to get runtime log configuration for a specific managed thing or for all managed things as a group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetRuntimeLogConfiguration.html
   */
  public toGetRuntimeLogConfiguration() {
    return this.to('GetRuntimeLogConfiguration');
  }

  /**
   * Grants permission to get a schema version with the provided information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetSchemaVersion.html
   */
  public toGetSchemaVersion() {
    return this.to('GetSchemaVersion');
  }

  /**
   * Grants permission to list the existing Credential Locker
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListCredentialLockers.html
   */
  public toListCredentialLockers() {
    return this.to('ListCredentialLockers');
  }

  /**
   * Grants permission to list all the destinations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListDestinations.html
   */
  public toListDestinations() {
    return this.to('ListDestinations');
  }

  /**
   * Grants permission to list all event log configurations for account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListEventLogConfigurations.html
   */
  public toListEventLogConfigurations() {
    return this.to('ListEventLogConfigurations');
  }

  /**
   * Grants permission to list Schemas Associated With Managed Thing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListManagedThingSchemas.html
   */
  public toListManagedThingSchemas() {
    return this.to('ListManagedThingSchemas');
  }

  /**
   * Grants permission to list all the managed things
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListManagedThings.html
   */
  public toListManagedThings() {
    return this.to('ListManagedThings');
  }

  /**
   * Grants permission to list all the notification configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListNotificationConfigurations.html
   */
  public toListNotificationConfigurations() {
    return this.to('ListNotificationConfigurations');
  }

  /**
   * Grants permission to list all the OTA task configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListOtaTaskConfigurations.html
   */
  public toListOtaTaskConfigurations() {
    return this.to('ListOtaTaskConfigurations');
  }

  /**
   * Grants permission to list all the Ota task executions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListOtaTaskExecutions.html
   */
  public toListOtaTaskExecutions() {
    return this.to('ListOtaTaskExecutions');
  }

  /**
   * Grants permission to list all the OTA tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListOtaTasks.html
   */
  public toListOtaTasks() {
    return this.to('ListOtaTasks');
  }

  /**
   * Grants permission to list the existing provisioning profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListProvisioningProfiles.html
   */
  public toListProvisioningProfiles() {
    return this.to('ListProvisioningProfiles');
  }

  /**
   * Grants permission to list schema versions with the provided information
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListSchemaVersions.html
   */
  public toListSchemaVersions() {
    return this.to('ListSchemaVersions');
  }

  /**
   * Grants permission to associate KMS key with IoT managed integrations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_PutDefaultEncryptionConfiguration.html
   */
  public toPutDefaultEncryptionConfiguration() {
    return this.to('PutDefaultEncryptionConfiguration');
  }

  /**
   * Grants permission to update a hub configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_PutHubConfiguration.html
   */
  public toPutHubConfiguration() {
    return this.to('PutHubConfiguration');
  }

  /**
   * Grants permission to set the runtime log configuration for a specific managed thing or for all managed things as a group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_PutRuntimeLogConfiguration.html
   */
  public toPutRuntimeLogConfiguration() {
    return this.to('PutRuntimeLogConfiguration');
  }

  /**
   * Grants permission to customers to request us to manage the server trust for them or bring their own external server trusts for the custom domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_RegisterCustomEndpoint.html
   */
  public toRegisterCustomEndpoint() {
    return this.to('RegisterCustomEndpoint');
  }

  /**
   * Grants permission to reset a runtime log configuration for a specific managed thing or for all managed things as a group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ResetRuntimeLogConfiguration.html
   */
  public toResetRuntimeLogConfiguration() {
    return this.to('ResetRuntimeLogConfiguration');
  }

  /**
   * Grants permission to use the SendManagedThingCommand API to send commands to managed things
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_SendManagedThingCommand.html
   */
  public toSendManagedThingCommand() {
    return this.to('SendManagedThingCommand');
  }

  /**
   * Grants permission to request to start device discovery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_StartDeviceDiscovery.html
   */
  public toStartDeviceDiscovery() {
    return this.to('StartDeviceDiscovery');
  }

  /**
   * Grants permission to update a destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_UpdateDestination.html
   */
  public toUpdateDestination() {
    return this.to('UpdateDestination');
  }

  /**
   * Grants permission to update an event log configuration by log configuration ID
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_UpdateEventLogConfiguration.html
   */
  public toUpdateEventLogConfiguration() {
    return this.to('UpdateEventLogConfiguration');
  }

  /**
   * Grants permission to update a managed thing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_UpdateManagedThing.html
   */
  public toUpdateManagedThing() {
    return this.to('UpdateManagedThing');
  }

  /**
   * Grants permission to update a notification configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_UpdateNotificationConfiguration.html
   */
  public toUpdateNotificationConfiguration() {
    return this.to('UpdateNotificationConfiguration');
  }

  /**
   * Grants permission to update an OTA Task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_UpdateOtaTask.html
   */
  public toUpdateOtaTask() {
    return this.to('UpdateOtaTask');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateCredentialLocker',
      'CreateDestination',
      'CreateEventLogConfiguration',
      'CreateManagedThing',
      'CreateNotificationConfiguration',
      'CreateOtaTask',
      'CreateOtaTaskConfiguration',
      'CreateProvisioningProfile',
      'DeleteCredentialLocker',
      'DeleteDestination',
      'DeleteEventLogConfiguration',
      'DeleteManagedThing',
      'DeleteNotificationConfiguration',
      'DeleteOtaTask',
      'DeleteOtaTaskConfiguration',
      'DeleteProvisioningProfile',
      'PutDefaultEncryptionConfiguration',
      'PutHubConfiguration',
      'PutRuntimeLogConfiguration',
      'RegisterCustomEndpoint',
      'ResetRuntimeLogConfiguration',
      'SendManagedThingCommand',
      'StartDeviceDiscovery',
      'UpdateDestination',
      'UpdateEventLogConfiguration',
      'UpdateManagedThing',
      'UpdateNotificationConfiguration',
      'UpdateOtaTask'
    ],
    Read: [
      'GetCredentialLocker',
      'GetCustomEndpoint',
      'GetDefaultEncryptionConfiguration',
      'GetDestination',
      'GetDeviceDiscovery',
      'GetEventLogConfiguration',
      'GetHubConfiguration',
      'GetManagedThing',
      'GetManagedThingCapabilities',
      'GetManagedThingConnectivityData',
      'GetManagedThingMetaData',
      'GetManagedThingState',
      'GetNotificationConfiguration',
      'GetOtaTask',
      'GetOtaTaskConfiguration',
      'GetProvisioningProfile',
      'GetRuntimeLogConfiguration',
      'GetSchemaVersion',
      'ListManagedThingSchemas',
      'ListOtaTaskExecutions'
    ],
    List: [
      'ListCredentialLockers',
      'ListDestinations',
      'ListEventLogConfigurations',
      'ListManagedThings',
      'ListNotificationConfigurations',
      'ListOtaTaskConfigurations',
      'ListOtaTasks',
      'ListProvisioningProfiles',
      'ListSchemaVersions'
    ]
  };

  /**
   * Adds a resource of type CredentialLockerResource to the statement
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCredentialLockerResource(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotmanagedintegrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:credential-locker/${ identifier }`);
  }

  /**
   * Adds a resource of type ManagedThingResource to the statement
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onManagedThingResource(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotmanagedintegrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:managed-thing/${ identifier }`);
  }

  /**
   * Adds a resource of type OtaTaskResource to the statement
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onOtaTaskResource(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotmanagedintegrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ota-task/${ identifier }`);
  }

  /**
   * Adds a resource of type ProvisioningProfileResource to the statement
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProvisioningProfileResource(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotmanagedintegrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:provisioning-profile/${ identifier }`);
  }
}
