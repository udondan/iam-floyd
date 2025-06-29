import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [iotmanagedintegrations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotmanagedintegrations.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotmanagedintegrations extends PolicyStatement {
  public servicePrefix = 'iotmanagedintegrations';

  /**
   * Statement provider for service [iotmanagedintegrations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotmanagedintegrations.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new account association
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateAccountAssociation.html
   */
  public toCreateAccountAssociation() {
    return this.to('CreateAccountAssociation');
  }

  /**
   * Grants permission to create a new cloud connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateCloudConnector.html
   */
  public toCreateCloudConnector() {
    return this.to('CreateCloudConnector');
  }

  /**
   * Grants permission to create a new connector destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateConnectorDestination.html
   */
  public toCreateConnectorDestination() {
    return this.to('CreateConnectorDestination');
  }

  /**
   * Grants permission to create a product credential locker
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateCredentialLocker.html
   */
  public toCreateCredentialLocker() {
    return this.to('CreateCredentialLocker');
  }

  /**
   * Grants permission to create a new destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateDestination.html
   */
  public toCreateDestination() {
    return this.to('CreateDestination');
  }

  /**
   * Grants permission to create a new event configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateEventLogConfiguration.html
   */
  public toCreateEventLogConfiguration() {
    return this.to('CreateEventLogConfiguration');
  }

  /**
   * Grants permission to create a new managed thing
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateManagedThing.html
   */
  public toCreateManagedThing() {
    return this.to('CreateManagedThing');
  }

  /**
   * Grants permission to create a new notification configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateNotificationConfiguration.html
   */
  public toCreateNotificationConfiguration() {
    return this.to('CreateNotificationConfiguration');
  }

  /**
   * Grants permission to create a new ota task
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateOtaTask.html
   */
  public toCreateOtaTask() {
    return this.to('CreateOtaTask');
  }

  /**
   * Grants permission to create a new ota task configuration
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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_CreateProvisioningProfile.html
   */
  public toCreateProvisioningProfile() {
    return this.to('CreateProvisioningProfile');
  }

  /**
   * Grants permission to delete an account association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteAccountAssociation.html
   */
  public toDeleteAccountAssociation() {
    return this.to('DeleteAccountAssociation');
  }

  /**
   * Grants permission to delete a cloud connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteCloudConnector.html
   */
  public toDeleteCloudConnector() {
    return this.to('DeleteCloudConnector');
  }

  /**
   * Grants permission to delete a connector destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteConnectorDestination.html
   */
  public toDeleteConnectorDestination() {
    return this.to('DeleteConnectorDestination');
  }

  /**
   * Grants permission to delete a credential locker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteCredentialLocker.html
   */
  public toDeleteCredentialLocker() {
    return this.to('DeleteCredentialLocker');
  }

  /**
   * Grants permission to delete destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteDestination.html
   */
  public toDeleteDestination() {
    return this.to('DeleteDestination');
  }

  /**
   * Grants permission to delete event log configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteEventLogConfiguration.html
   */
  public toDeleteEventLogConfiguration() {
    return this.to('DeleteEventLogConfiguration');
  }

  /**
   * Grants permission to delete managed thing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteManagedThing.html
   */
  public toDeleteManagedThing() {
    return this.to('DeleteManagedThing');
  }

  /**
   * Grants permission to delete notification configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteNotificationConfiguration.html
   */
  public toDeleteNotificationConfiguration() {
    return this.to('DeleteNotificationConfiguration');
  }

  /**
   * Grants permission to delete ota task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteOtaTask.html
   */
  public toDeleteOtaTask() {
    return this.to('DeleteOtaTask');
  }

  /**
   * Grants permission to delete ota task configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteOtaTaskConfiguration.html
   */
  public toDeleteOtaTaskConfiguration() {
    return this.to('DeleteOtaTaskConfiguration');
  }

  /**
   * Grants permission to delete provisioning profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeleteProvisioningProfile.html
   */
  public toDeleteProvisioningProfile() {
    return this.to('DeleteProvisioningProfile');
  }

  /**
   * Grants permission to deregister account association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_DeregisterAccountAssociation.html
   */
  public toDeregisterAccountAssociation() {
    return this.to('DeregisterAccountAssociation');
  }

  /**
   * Grants permission to get information about an account association
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetAccountAssociation.html
   */
  public toGetAccountAssociation() {
    return this.to('GetAccountAssociation');
  }

  /**
   * Grants permission to get information about a cloud connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetCloudConnector.html
   */
  public toGetCloudConnector() {
    return this.to('GetCloudConnector');
  }

  /**
   * Grants permission to get information about a cloud destination
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetConnectorDestination.html
   */
  public toGetConnectorDestination() {
    return this.to('GetConnectorDestination');
  }

  /**
   * Grants permission to get information about a credential locker
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetCredentialLocker.html
   */
  public toGetCredentialLocker() {
    return this.to('GetCredentialLocker');
  }

  /**
   * Grants permission to get information about a custom endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetCustomEndpoint.html
   */
  public toGetCustomEndpoint() {
    return this.to('GetCustomEndpoint');
  }

  /**
   * Grants permission to get information about a default encryption configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetDefaultEncryptionConfiguration.html
   */
  public toGetDefaultEncryptionConfiguration() {
    return this.to('GetDefaultEncryptionConfiguration');
  }

  /**
   * Grants permission to get information about a destination
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetDestination.html
   */
  public toGetDestination() {
    return this.to('GetDestination');
  }

  /**
   * Grants permission to get information about a device discovery
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetDeviceDiscovery.html
   */
  public toGetDeviceDiscovery() {
    return this.to('GetDeviceDiscovery');
  }

  /**
   * Grants permission to get information about an event log configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetEventLogConfiguration.html
   */
  public toGetEventLogConfiguration() {
    return this.to('GetEventLogConfiguration');
  }

  /**
   * Grants permission to get information about a hub configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetHubConfiguration.html
   */
  public toGetHubConfiguration() {
    return this.to('GetHubConfiguration');
  }

  /**
   * Grants permission to get information about a managed thing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetManagedThing.html
   */
  public toGetManagedThing() {
    return this.to('GetManagedThing');
  }

  /**
   * Grants permission to get the capability report for a managed thing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetManagedThingCapabilities.html
   */
  public toGetManagedThingCapabilities() {
    return this.to('GetManagedThingCapabilities');
  }

  /**
   * Grants permission to get the connectivity data for a managed thing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetManagedThingConnectivityData.html
   */
  public toGetManagedThingConnectivityData() {
    return this.to('GetManagedThingConnectivityData');
  }

  /**
   * Grants permission to get the meta data information for a managed thing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetManagedThingMetaData.html
   */
  public toGetManagedThingMetaData() {
    return this.to('GetManagedThingMetaData');
  }

  /**
   * Grants permission to get the device state information for a managed thing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetManagedThingState.html
   */
  public toGetManagedThingState() {
    return this.to('GetManagedThingState');
  }

  /**
   * Grants permission to get information for a notification configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetNotificationConfiguration.html
   */
  public toGetNotificationConfiguration() {
    return this.to('GetNotificationConfiguration');
  }

  /**
   * Grants permission to get information for an ota task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetOtaTask.html
   */
  public toGetOtaTask() {
    return this.to('GetOtaTask');
  }

  /**
   * Grants permission to get information for an ota task configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetOtaTaskConfiguration.html
   */
  public toGetOtaTaskConfiguration() {
    return this.to('GetOtaTaskConfiguration');
  }

  /**
   * Grants permission to get information for a provisioning profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetProvisioningProfile.html
   */
  public toGetProvisioningProfile() {
    return this.to('GetProvisioningProfile');
  }

  /**
   * Grants permission to get information for a runtime log configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetRuntimeLogConfiguration.html
   */
  public toGetRuntimeLogConfiguration() {
    return this.to('GetRuntimeLogConfiguration');
  }

  /**
   * Grants permission to get information for a version of a schema
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_GetSchemaVersion.html
   */
  public toGetSchemaVersion() {
    return this.to('GetSchemaVersion');
  }

  /**
   * Grants permission to list information for account associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListAccountAssociations.html
   */
  public toListAccountAssociations() {
    return this.to('ListAccountAssociations');
  }

  /**
   * Grants permission to list information for cloud connectors
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListCloudConnectors.html
   */
  public toListCloudConnectors() {
    return this.to('ListCloudConnectors');
  }

  /**
   * Grants permission to list information for connector destinations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListConnectorDestinations.html
   */
  public toListConnectorDestinations() {
    return this.to('ListConnectorDestinations');
  }

  /**
   * Grants permission to list information for credential lockers
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListCredentialLockers.html
   */
  public toListCredentialLockers() {
    return this.to('ListCredentialLockers');
  }

  /**
   * Grants permission to list information for destinations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListDestinations.html
   */
  public toListDestinations() {
    return this.to('ListDestinations');
  }

  /**
   * Grants permission to list information for device discoveries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListDeviceDiscoveries.html
   */
  public toListDeviceDiscoveries() {
    return this.to('ListDeviceDiscoveries');
  }

  /**
   * Grants permission to list information for device discovered in a device discoveries
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListDiscoveredDevices.html
   */
  public toListDiscoveredDevices() {
    return this.to('ListDiscoveredDevices');
  }

  /**
   * Grants permission to list information for event log configurations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListEventLogConfigurations.html
   */
  public toListEventLogConfigurations() {
    return this.to('ListEventLogConfigurations');
  }

  /**
   * Grants permission to list information for associations between managed thing and account associations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListManagedThingAccountAssociations.html
   */
  public toListManagedThingAccountAssociations() {
    return this.to('ListManagedThingAccountAssociations');
  }

  /**
   * Grants permission to list schemas associated with a managed thing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListManagedThingSchemas.html
   */
  public toListManagedThingSchemas() {
    return this.to('ListManagedThingSchemas');
  }

  /**
   * Grants permission to list information for managed things
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListManagedThings.html
   */
  public toListManagedThings() {
    return this.to('ListManagedThings');
  }

  /**
   * Grants permission to list information for notification configurations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListNotificationConfigurations.html
   */
  public toListNotificationConfigurations() {
    return this.to('ListNotificationConfigurations');
  }

  /**
   * Grants permission to list information for ota task configurations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListOtaTaskConfigurations.html
   */
  public toListOtaTaskConfigurations() {
    return this.to('ListOtaTaskConfigurations');
  }

  /**
   * Grants permission to list information for ota task executions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListOtaTaskExecutions.html
   */
  public toListOtaTaskExecutions() {
    return this.to('ListOtaTaskExecutions');
  }

  /**
   * Grants permission to list information for ota tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListOtaTasks.html
   */
  public toListOtaTasks() {
    return this.to('ListOtaTasks');
  }

  /**
   * Grants permission to list information for provisioning profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListProvisioningProfiles.html
   */
  public toListProvisioningProfiles() {
    return this.to('ListProvisioningProfiles');
  }

  /**
   * Grants permission to list information for schemas
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListSchemaVersions.html
   */
  public toListSchemaVersions() {
    return this.to('ListSchemaVersions');
  }

  /**
   * Grants permission to list tags for the specified resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to update the default settings for an encryption configuration
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
   * Grants permission to update a runtime log configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_PutRuntimeLogConfiguration.html
   */
  public toPutRuntimeLogConfiguration() {
    return this.to('PutRuntimeLogConfiguration');
  }

  /**
   * Grants permission to register an account association to a managed thing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_RegisterAccountAssociation.html
   */
  public toRegisterAccountAssociation() {
    return this.to('RegisterAccountAssociation');
  }

  /**
   * Grants permission to register a custom endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_RegisterCustomEndpoint.html
   */
  public toRegisterCustomEndpoint() {
    return this.to('RegisterCustomEndpoint');
  }

  /**
   * Grants permission to reset a runtime log configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_ResetRuntimeLogConfiguration.html
   */
  public toResetRuntimeLogConfiguration() {
    return this.to('ResetRuntimeLogConfiguration');
  }

  /**
   * Grants permission to send a connector event
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_SendConnectorEvent.html
   */
  public toSendConnectorEvent() {
    return this.to('SendConnectorEvent');
  }

  /**
   * Grants permission to send a command to a managed thing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_SendManagedThingCommand.html
   */
  public toSendManagedThingCommand() {
    return this.to('SendManagedThingCommand');
  }

  /**
   * Grants permission to start a refresh of access tokens associated with an account association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_StartAccountAssociationRefresh.html
   */
  public toStartAccountAssociationRefresh() {
    return this.to('StartAccountAssociationRefresh');
  }

  /**
   * Grants permission to start a device discovery
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_StartDeviceDiscovery.html
   */
  public toStartDeviceDiscovery() {
    return this.to('StartDeviceDiscovery');
  }

  /**
   * Grants permission to add tags for the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags for the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an account association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_UpdateAccountAssociation.html
   */
  public toUpdateAccountAssociation() {
    return this.to('UpdateAccountAssociation');
  }

  /**
   * Grants permission to update a cloud connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_UpdateCloudConnector.html
   */
  public toUpdateCloudConnector() {
    return this.to('UpdateCloudConnector');
  }

  /**
   * Grants permission to update a connector destination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/API_UpdateConnectorDestination.html
   */
  public toUpdateConnectorDestination() {
    return this.to('UpdateConnectorDestination');
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
   * Grants permission to update an event log configuration
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
   * Grants permission to update an ota task
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
      'CreateAccountAssociation',
      'CreateCloudConnector',
      'CreateConnectorDestination',
      'CreateCredentialLocker',
      'CreateDestination',
      'CreateEventLogConfiguration',
      'CreateManagedThing',
      'CreateNotificationConfiguration',
      'CreateOtaTask',
      'CreateOtaTaskConfiguration',
      'CreateProvisioningProfile',
      'DeleteAccountAssociation',
      'DeleteCloudConnector',
      'DeleteConnectorDestination',
      'DeleteCredentialLocker',
      'DeleteDestination',
      'DeleteEventLogConfiguration',
      'DeleteManagedThing',
      'DeleteNotificationConfiguration',
      'DeleteOtaTask',
      'DeleteOtaTaskConfiguration',
      'DeleteProvisioningProfile',
      'DeregisterAccountAssociation',
      'PutDefaultEncryptionConfiguration',
      'PutHubConfiguration',
      'PutRuntimeLogConfiguration',
      'RegisterAccountAssociation',
      'RegisterCustomEndpoint',
      'ResetRuntimeLogConfiguration',
      'SendConnectorEvent',
      'SendManagedThingCommand',
      'StartAccountAssociationRefresh',
      'StartDeviceDiscovery',
      'UpdateAccountAssociation',
      'UpdateCloudConnector',
      'UpdateConnectorDestination',
      'UpdateDestination',
      'UpdateEventLogConfiguration',
      'UpdateManagedThing',
      'UpdateNotificationConfiguration',
      'UpdateOtaTask'
    ],
    Read: [
      'GetAccountAssociation',
      'GetCloudConnector',
      'GetConnectorDestination',
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
      'ListDiscoveredDevices',
      'ListEventLogConfigurations',
      'ListManagedThingSchemas',
      'ListNotificationConfigurations',
      'ListOtaTaskConfigurations',
      'ListOtaTaskExecutions',
      'ListTagsForResource'
    ],
    List: [
      'ListAccountAssociations',
      'ListCloudConnectors',
      'ListConnectorDestinations',
      'ListCredentialLockers',
      'ListDestinations',
      'ListDeviceDiscoveries',
      'ListManagedThingAccountAssociations',
      'ListManagedThings',
      'ListOtaTasks',
      'ListProvisioningProfiles',
      'ListSchemaVersions'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type account-association to the statement
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/
   *
   * @param accountAssociationId - Identifier for the accountAssociationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAccountAssociation(accountAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotmanagedintegrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:account-association/${ accountAssociationId }`);
  }

  /**
   * Adds a resource of type credential-locker to the statement
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCredentialLocker(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotmanagedintegrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:credential-locker/${ identifier }`);
  }

  /**
   * Adds a resource of type managed-thing to the statement
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onManagedThing(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotmanagedintegrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:managed-thing/${ identifier }`);
  }

  /**
   * Adds a resource of type ota-task to the statement
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOtaTask(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotmanagedintegrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ota-task/${ identifier }`);
  }

  /**
   * Adds a resource of type provisioning-profile to the statement
   *
   * https://docs.aws.amazon.com/iotmanagedintegrations/latest/APIReference/
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProvisioningProfile(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iotmanagedintegrations:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:provisioning-profile/${ identifier }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * Applies to actions:
   * - .toCreateAccountAssociation()
   * - .toCreateCredentialLocker()
   * - .toCreateManagedThing()
   * - .toCreateOtaTask()
   * - .toCreateProvisioningProfile()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair of a resource
   *
   * Applies to actions:
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - account-association
   * - credential-locker
   * - managed-thing
   * - ota-task
   * - provisioning-profile
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys that are passed in the request
   *
   * Applies to actions:
   * - .toCreateAccountAssociation()
   * - .toCreateCredentialLocker()
   * - .toCreateManagedThing()
   * - .toCreateOtaTask()
   * - .toCreateProvisioningProfile()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
