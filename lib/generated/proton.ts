import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [proton](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsproton.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Proton extends PolicyStatement {
  public servicePrefix = 'proton';

  /**
   * Statement provider for service [proton](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsproton.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to reject an environment account connection request from another environment account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_AcceptEnvironmentAccountConnection.html
   */
  public toAcceptEnvironmentAccountConnection() {
    return this.to('AcceptEnvironmentAccountConnection');
  }

  /**
   * Grants permission to cancel component deployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CancelComponentDeployment.html
   */
  public toCancelComponentDeployment() {
    return this.to('CancelComponentDeployment');
  }

  /**
   * Grants permission to cancel an environment deployment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEnvironmentTemplate()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CancelEnvironmentDeployment.html
   */
  public toCancelEnvironmentDeployment() {
    return this.to('CancelEnvironmentDeployment');
  }

  /**
   * Grants permission to cancel a service instance deployment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceTemplate()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CancelServiceInstanceDeployment.html
   */
  public toCancelServiceInstanceDeployment() {
    return this.to('CancelServiceInstanceDeployment');
  }

  /**
   * Grants permission to cancel a service pipeline deployment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceTemplate()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CancelServicePipelineDeployment.html
   */
  public toCancelServicePipelineDeployment() {
    return this.to('CancelServicePipelineDeployment');
  }

  /**
   * Grants permission to create component
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateComponent.html
   */
  public toCreateComponent() {
    return this.to('CreateComponent');
  }

  /**
   * Grants permission to create an environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifEnvironmentTemplate()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironment.html
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permission to create an environment account connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentAccountConnection.html
   */
  public toCreateEnvironmentAccountConnection() {
    return this.to('CreateEnvironmentAccountConnection');
  }

  /**
   * Grants permission to create an environment template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplate.html
   */
  public toCreateEnvironmentTemplate() {
    return this.to('CreateEnvironmentTemplate');
  }

  /**
   * Grants permission to create an environment template major version. DEPRECATED - use CreateEnvironmentTemplateVersion instead
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplateMajorVersion.html
   */
  public toCreateEnvironmentTemplateMajorVersion() {
    return this.to('CreateEnvironmentTemplateMajorVersion');
  }

  /**
   * Grants permission to create an environment template minor version. DEPRECATED - use CreateEnvironmentTemplateVersion instead
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplateMinorVersion.html
   */
  public toCreateEnvironmentTemplateMinorVersion() {
    return this.to('CreateEnvironmentTemplateMinorVersion');
  }

  /**
   * Grants permission to create an environment template version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplateVersion.html
   */
  public toCreateEnvironmentTemplateVersion() {
    return this.to('CreateEnvironmentTemplateVersion');
  }

  /**
   * Grants permission to create a repository
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateRepository.html
   */
  public toCreateRepository() {
    return this.to('CreateRepository');
  }

  /**
   * Grants permission to create a service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifServiceTemplate()
   *
   * Dependent actions:
   * - codestar-connections:PassConnection
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateService.html
   */
  public toCreateService() {
    return this.to('CreateService');
  }

  /**
   * Grants permission to create a service template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplate.html
   */
  public toCreateServiceTemplate() {
    return this.to('CreateServiceTemplate');
  }

  /**
   * Grants permission to create a service template major version. DEPRECATED - use CreateServiceTemplateVersion instead
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplateMajorVersion.html
   */
  public toCreateServiceTemplateMajorVersion() {
    return this.to('CreateServiceTemplateMajorVersion');
  }

  /**
   * Grants permission to create a service template minor version. DEPRECATED - use CreateServiceTemplateVersion instead
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplateMinorVersion.html
   */
  public toCreateServiceTemplateMinorVersion() {
    return this.to('CreateServiceTemplateMinorVersion');
  }

  /**
   * Grants permission to create a service template version
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplateVersion.html
   */
  public toCreateServiceTemplateVersion() {
    return this.to('CreateServiceTemplateVersion');
  }

  /**
   * Grants permission to create a template sync config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateTemplateSyncConfig.html
   */
  public toCreateTemplateSyncConfig() {
    return this.to('CreateTemplateSyncConfig');
  }

  /**
   * Grants permission to delete account roles. DEPRECATED - use UpdateAccountSettings instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteAccountRoles.html
   */
  public toDeleteAccountRoles() {
    return this.to('DeleteAccountRoles');
  }

  /**
   * Grants permission to delete component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteComponent.html
   */
  public toDeleteComponent() {
    return this.to('DeleteComponent');
  }

  /**
   * Grants permission to delete an environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEnvironmentTemplate()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to delete an environment account connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentAccountConnection.html
   */
  public toDeleteEnvironmentAccountConnection() {
    return this.to('DeleteEnvironmentAccountConnection');
  }

  /**
   * Grants permission to delete an environment template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplate.html
   */
  public toDeleteEnvironmentTemplate() {
    return this.to('DeleteEnvironmentTemplate');
  }

  /**
   * Grants permission to delete an environment template major version. DEPRECATED - use DeleteEnvironmentTemplateVersion instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateMajorVersion.html
   */
  public toDeleteEnvironmentTemplateMajorVersion() {
    return this.to('DeleteEnvironmentTemplateMajorVersion');
  }

  /**
   * Grants permission to delete an environment template minor version. DEPRECATED - use DeleteEnvironmentTemplateVersion instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateMinorVersion.html
   */
  public toDeleteEnvironmentTemplateMinorVersion() {
    return this.to('DeleteEnvironmentTemplateMinorVersion');
  }

  /**
   * Grants permission to delete an environment template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateVersion.html
   */
  public toDeleteEnvironmentTemplateVersion() {
    return this.to('DeleteEnvironmentTemplateVersion');
  }

  /**
   * Grants permission to delete a repository
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteRepository.html
   */
  public toDeleteRepository() {
    return this.to('DeleteRepository');
  }

  /**
   * Grants permission to delete a service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceTemplate()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteService.html
   */
  public toDeleteService() {
    return this.to('DeleteService');
  }

  /**
   * Grants permission to delete a service template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplate.html
   */
  public toDeleteServiceTemplate() {
    return this.to('DeleteServiceTemplate');
  }

  /**
   * Grants permission to delete a service template major version. DEPRECATED - use DeleteServiceTemplateVersion instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateMajorVersion.html
   */
  public toDeleteServiceTemplateMajorVersion() {
    return this.to('DeleteServiceTemplateMajorVersion');
  }

  /**
   * Grants permission to delete a service template minor version. DEPRECATED - use DeleteServiceTemplateVersion instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateMinorVersion.html
   */
  public toDeleteServiceTemplateMinorVersion() {
    return this.to('DeleteServiceTemplateMinorVersion');
  }

  /**
   * Grants permission to delete a service template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateVersion.html
   */
  public toDeleteServiceTemplateVersion() {
    return this.to('DeleteServiceTemplateVersion');
  }

  /**
   * Grants permission to delete a TemplateSyncConfig
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteTemplateSyncConfig.html
   */
  public toDeleteTemplateSyncConfig() {
    return this.to('DeleteTemplateSyncConfig');
  }

  /**
   * Grants permission to get account roles. DEPRECATED - use GetAccountSettings instead
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetAccountRoles.html
   */
  public toGetAccountRoles() {
    return this.to('GetAccountRoles');
  }

  /**
   * Grants permission to describe the account settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetAccountSettings.html
   */
  public toGetAccountSettings() {
    return this.to('GetAccountSettings');
  }

  /**
   * Grants permission to describe a component
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetComponent.html
   */
  public toGetComponent() {
    return this.to('GetComponent');
  }

  /**
   * Grants permission to describe an environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironment.html
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to describe an environment account connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentAccountConnection.html
   */
  public toGetEnvironmentAccountConnection() {
    return this.to('GetEnvironmentAccountConnection');
  }

  /**
   * Grants permission to describe an environment template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplate.html
   */
  public toGetEnvironmentTemplate() {
    return this.to('GetEnvironmentTemplate');
  }

  /**
   * Grants permission to get an environment template major version. DEPRECATED - use GetEnvironmentTemplateVersion instead
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateMajorVersion.html
   */
  public toGetEnvironmentTemplateMajorVersion() {
    return this.to('GetEnvironmentTemplateMajorVersion');
  }

  /**
   * Grants permission to get an environment template minor version. DEPRECATED - use GetEnvironmentTemplateVersion instead
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateMinorVersion.html
   */
  public toGetEnvironmentTemplateMinorVersion() {
    return this.to('GetEnvironmentTemplateMinorVersion');
  }

  /**
   * Grants permission to describe an environment template version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateVersion.html
   */
  public toGetEnvironmentTemplateVersion() {
    return this.to('GetEnvironmentTemplateVersion');
  }

  /**
   * Grants permission to describe a repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetRepository.html
   */
  public toGetRepository() {
    return this.to('GetRepository');
  }

  /**
   * Grants permission to get the latest sync status for a repository
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetRepositorySyncStatus.html
   */
  public toGetRepositorySyncStatus() {
    return this.to('GetRepositorySyncStatus');
  }

  /**
   * Grants permission to describe a service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetService.html
   */
  public toGetService() {
    return this.to('GetService');
  }

  /**
   * Grants permission to describe a service instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceInstance.html
   */
  public toGetServiceInstance() {
    return this.to('GetServiceInstance');
  }

  /**
   * Grants permission to describe a service template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplate.html
   */
  public toGetServiceTemplate() {
    return this.to('GetServiceTemplate');
  }

  /**
   * Grants permission to get a service template major version. DEPRECATED - use GetServiceTemplateVersion instead
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateMajorVersion.html
   */
  public toGetServiceTemplateMajorVersion() {
    return this.to('GetServiceTemplateMajorVersion');
  }

  /**
   * Grants permission to get a service template minor version. DEPRECATED - use GetServiceTemplateVersion instead
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateMinorVersion.html
   */
  public toGetServiceTemplateMinorVersion() {
    return this.to('GetServiceTemplateMinorVersion');
  }

  /**
   * Grants permission to describe a service template version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateVersion.html
   */
  public toGetServiceTemplateVersion() {
    return this.to('GetServiceTemplateVersion');
  }

  /**
   * Grants permission to describe a TemplateSyncConfig
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetTemplateSyncConfig.html
   */
  public toGetTemplateSyncConfig() {
    return this.to('GetTemplateSyncConfig');
  }

  /**
   * Grants permission to describe the sync status of a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetTemplateSyncStatus.html
   */
  public toGetTemplateSyncStatus() {
    return this.to('GetTemplateSyncStatus');
  }

  /**
   * Grants permission to list component outputs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListComponentOutputs.html
   */
  public toListComponentOutputs() {
    return this.to('ListComponentOutputs');
  }

  /**
   * Grants permission to list component provisioned resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListComponentProvisionedResources.html
   */
  public toListComponentProvisionedResources() {
    return this.to('ListComponentProvisionedResources');
  }

  /**
   * Grants permission to list components
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListComponents.html
   */
  public toListComponents() {
    return this.to('ListComponents');
  }

  /**
   * Grants permission to list environment account connections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentAccountConnections.html
   */
  public toListEnvironmentAccountConnections() {
    return this.to('ListEnvironmentAccountConnections');
  }

  /**
   * Grants permission to list environment outputs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentOutputs.html
   */
  public toListEnvironmentOutputs() {
    return this.to('ListEnvironmentOutputs');
  }

  /**
   * Grants permission to list environment provisioned resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentProvisionedResources.html
   */
  public toListEnvironmentProvisionedResources() {
    return this.to('ListEnvironmentProvisionedResources');
  }

  /**
   * Grants permission to list environment template major versions. DEPRECATED - use ListEnvironmentTemplateVersions instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateMajorVersions.html
   */
  public toListEnvironmentTemplateMajorVersions() {
    return this.to('ListEnvironmentTemplateMajorVersions');
  }

  /**
   * Grants permission to list an environment template minor versions. DEPRECATED - use ListEnvironmentTemplateVersions instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateMinorVersions.html
   */
  public toListEnvironmentTemplateMinorVersions() {
    return this.to('ListEnvironmentTemplateMinorVersions');
  }

  /**
   * Grants permission to list environment template versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateVersions.html
   */
  public toListEnvironmentTemplateVersions() {
    return this.to('ListEnvironmentTemplateVersions');
  }

  /**
   * Grants permission to list environment templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplates.html
   */
  public toListEnvironmentTemplates() {
    return this.to('ListEnvironmentTemplates');
  }

  /**
   * Grants permission to list environments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironments.html
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permission to list repositories
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListRepositories.html
   */
  public toListRepositories() {
    return this.to('ListRepositories');
  }

  /**
   * Grants permission to list repository sync definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListRepositorySyncDefinitions.html
   */
  public toListRepositorySyncDefinitions() {
    return this.to('ListRepositorySyncDefinitions');
  }

  /**
   * Grants permission to list service instance outputs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceInstanceOutputs.html
   */
  public toListServiceInstanceOutputs() {
    return this.to('ListServiceInstanceOutputs');
  }

  /**
   * Grants permission to list service instance provisioned resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceInstanceProvisionedResources.html
   */
  public toListServiceInstanceProvisionedResources() {
    return this.to('ListServiceInstanceProvisionedResources');
  }

  /**
   * Grants permission to list service instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceInstances.html
   */
  public toListServiceInstances() {
    return this.to('ListServiceInstances');
  }

  /**
   * Grants permission to list service pipeline outputs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServicePipelineOutputs.html
   */
  public toListServicePipelineOutputs() {
    return this.to('ListServicePipelineOutputs');
  }

  /**
   * Grants permission to list service pipeline provisioned resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServicePipelineProvisionedResources.html
   */
  public toListServicePipelineProvisionedResources() {
    return this.to('ListServicePipelineProvisionedResources');
  }

  /**
   * Grants permission to list service template major versions. DEPRECATED - use ListServiceTemplateVersions instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateMajorVersions.html
   */
  public toListServiceTemplateMajorVersions() {
    return this.to('ListServiceTemplateMajorVersions');
  }

  /**
   * Grants permission to list service template minor versions. DEPRECATED - use ListServiceTemplateVersions instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateMinorVersions.html
   */
  public toListServiceTemplateMinorVersions() {
    return this.to('ListServiceTemplateMinorVersions');
  }

  /**
   * Grants permission to list service template versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateVersions.html
   */
  public toListServiceTemplateVersions() {
    return this.to('ListServiceTemplateVersions');
  }

  /**
   * Grants permission to list service templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplates.html
   */
  public toListServiceTemplates() {
    return this.to('ListServiceTemplates');
  }

  /**
   * Grants permission to list services
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServices.html
   */
  public toListServices() {
    return this.to('ListServices');
  }

  /**
   * Grants permission to list tags of a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to notify Proton of resource deployment status changes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_NotifyResourceDeploymentStatusChange.html
   */
  public toNotifyResourceDeploymentStatusChange() {
    return this.to('NotifyResourceDeploymentStatusChange');
  }

  /**
   * Grants permission to reject an environment account connection request from another environment account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_RejectEnvironmentAccountConnection.html
   */
  public toRejectEnvironmentAccountConnection() {
    return this.to('RejectEnvironmentAccountConnection');
  }

  /**
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update account roles. DEPRECATED - use UpdateAccountSettings instead
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateAccountRoles.html
   */
  public toUpdateAccountRoles() {
    return this.to('UpdateAccountRoles');
  }

  /**
   * Grants permission to update the account settings
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateAccountSettings.html
   */
  public toUpdateAccountSettings() {
    return this.to('UpdateAccountSettings');
  }

  /**
   * Grants permission to update component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateComponent.html
   */
  public toUpdateComponent() {
    return this.to('UpdateComponent');
  }

  /**
   * Grants permission to update an environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifEnvironmentTemplate()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironment.html
   */
  public toUpdateEnvironment() {
    return this.to('UpdateEnvironment');
  }

  /**
   * Grants permission to update an environment account connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentAccountConnection.html
   */
  public toUpdateEnvironmentAccountConnection() {
    return this.to('UpdateEnvironmentAccountConnection');
  }

  /**
   * Grants permission to update an environment template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplate.html
   */
  public toUpdateEnvironmentTemplate() {
    return this.to('UpdateEnvironmentTemplate');
  }

  /**
   * Grants permission to update an environment template major version. DEPRECATED - use UpdateEnvironmentTemplateVersion instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateMajorVersion.html
   */
  public toUpdateEnvironmentTemplateMajorVersion() {
    return this.to('UpdateEnvironmentTemplateMajorVersion');
  }

  /**
   * Grants permission to update an environment template minor version. DEPRECATED - use UpdateEnvironmentTemplateVersion instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateMinorVersion.html
   */
  public toUpdateEnvironmentTemplateMinorVersion() {
    return this.to('UpdateEnvironmentTemplateMinorVersion');
  }

  /**
   * Grants permission to update an environment template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateVersion.html
   */
  public toUpdateEnvironmentTemplateVersion() {
    return this.to('UpdateEnvironmentTemplateVersion');
  }

  /**
   * Grants permission to update a service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceTemplate()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateService.html
   */
  public toUpdateService() {
    return this.to('UpdateService');
  }

  /**
   * Grants permission to update a service instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceTemplate()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceInstance.html
   */
  public toUpdateServiceInstance() {
    return this.to('UpdateServiceInstance');
  }

  /**
   * Grants permission to update a service pipeline
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifServiceTemplate()
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServicePipeline.html
   */
  public toUpdateServicePipeline() {
    return this.to('UpdateServicePipeline');
  }

  /**
   * Grants permission to update a service template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplate.html
   */
  public toUpdateServiceTemplate() {
    return this.to('UpdateServiceTemplate');
  }

  /**
   * Grants permission to update a service template major version. DEPRECATED - use UpdateServiceTemplateVersion instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateMajorVersion.html
   */
  public toUpdateServiceTemplateMajorVersion() {
    return this.to('UpdateServiceTemplateMajorVersion');
  }

  /**
   * Grants permission to create a service template minor version. DEPRECATED - use UpdateServiceTemplateVersion instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateMinorVersion.html
   */
  public toUpdateServiceTemplateMinorVersion() {
    return this.to('UpdateServiceTemplateMinorVersion');
  }

  /**
   * Grants permission to update a service template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateVersion.html
   */
  public toUpdateServiceTemplateVersion() {
    return this.to('UpdateServiceTemplateVersion');
  }

  /**
   * Grants permission to update a TemplateSyncConfig
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateTemplateSyncConfig.html
   */
  public toUpdateTemplateSyncConfig() {
    return this.to('UpdateTemplateSyncConfig');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptEnvironmentAccountConnection',
      'CancelComponentDeployment',
      'CancelEnvironmentDeployment',
      'CancelServiceInstanceDeployment',
      'CancelServicePipelineDeployment',
      'CreateComponent',
      'CreateEnvironment',
      'CreateEnvironmentAccountConnection',
      'CreateEnvironmentTemplate',
      'CreateEnvironmentTemplateMajorVersion',
      'CreateEnvironmentTemplateMinorVersion',
      'CreateEnvironmentTemplateVersion',
      'CreateRepository',
      'CreateService',
      'CreateServiceTemplate',
      'CreateServiceTemplateMajorVersion',
      'CreateServiceTemplateMinorVersion',
      'CreateServiceTemplateVersion',
      'CreateTemplateSyncConfig',
      'DeleteAccountRoles',
      'DeleteComponent',
      'DeleteEnvironment',
      'DeleteEnvironmentAccountConnection',
      'DeleteEnvironmentTemplate',
      'DeleteEnvironmentTemplateMajorVersion',
      'DeleteEnvironmentTemplateMinorVersion',
      'DeleteEnvironmentTemplateVersion',
      'DeleteRepository',
      'DeleteService',
      'DeleteServiceTemplate',
      'DeleteServiceTemplateMajorVersion',
      'DeleteServiceTemplateMinorVersion',
      'DeleteServiceTemplateVersion',
      'DeleteTemplateSyncConfig',
      'NotifyResourceDeploymentStatusChange',
      'RejectEnvironmentAccountConnection',
      'UpdateAccountRoles',
      'UpdateAccountSettings',
      'UpdateComponent',
      'UpdateEnvironment',
      'UpdateEnvironmentAccountConnection',
      'UpdateEnvironmentTemplate',
      'UpdateEnvironmentTemplateMajorVersion',
      'UpdateEnvironmentTemplateMinorVersion',
      'UpdateEnvironmentTemplateVersion',
      'UpdateService',
      'UpdateServiceInstance',
      'UpdateServicePipeline',
      'UpdateServiceTemplate',
      'UpdateServiceTemplateMajorVersion',
      'UpdateServiceTemplateMinorVersion',
      'UpdateServiceTemplateVersion',
      'UpdateTemplateSyncConfig'
    ],
    Read: [
      'GetAccountRoles',
      'GetAccountSettings',
      'GetComponent',
      'GetEnvironment',
      'GetEnvironmentAccountConnection',
      'GetEnvironmentTemplate',
      'GetEnvironmentTemplateMajorVersion',
      'GetEnvironmentTemplateMinorVersion',
      'GetEnvironmentTemplateVersion',
      'GetRepository',
      'GetRepositorySyncStatus',
      'GetService',
      'GetServiceInstance',
      'GetServiceTemplate',
      'GetServiceTemplateMajorVersion',
      'GetServiceTemplateMinorVersion',
      'GetServiceTemplateVersion',
      'GetTemplateSyncConfig',
      'GetTemplateSyncStatus',
      'ListTagsForResource'
    ],
    List: [
      'ListComponentOutputs',
      'ListComponentProvisionedResources',
      'ListComponents',
      'ListEnvironmentAccountConnections',
      'ListEnvironmentOutputs',
      'ListEnvironmentProvisionedResources',
      'ListEnvironmentTemplateMajorVersions',
      'ListEnvironmentTemplateMinorVersions',
      'ListEnvironmentTemplateVersions',
      'ListEnvironmentTemplates',
      'ListEnvironments',
      'ListRepositories',
      'ListRepositorySyncDefinitions',
      'ListServiceInstanceOutputs',
      'ListServiceInstanceProvisionedResources',
      'ListServiceInstances',
      'ListServicePipelineOutputs',
      'ListServicePipelineProvisionedResources',
      'ListServiceTemplateMajorVersions',
      'ListServiceTemplateMinorVersions',
      'ListServiceTemplateVersions',
      'ListServiceTemplates',
      'ListServices'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type environment-template to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-templates.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironmentTemplate(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:environment-template/${ name }`);
  }

  /**
   * Adds a resource of type environment-template-version to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-templates.html
   *
   * @param templateName - Identifier for the templateName.
   * @param majorVersion - Identifier for the majorVersion.
   * @param minorVersion - Identifier for the minorVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironmentTemplateVersion(templateName: string, majorVersion: string, minorVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:environment-template/${ templateName }:${ majorVersion }.${ minorVersion }`);
  }

  /**
   * Adds a resource of type environment-template-major-version to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-templates.html
   *
   * @param templateName - Identifier for the templateName.
   * @param majorVersionId - Identifier for the majorVersionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironmentTemplateMajorVersion(templateName: string, majorVersionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:environment-template/${ templateName }:${ majorVersionId }`);
  }

  /**
   * Adds a resource of type environment-template-minor-version to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-templates.html
   *
   * @param templateName - Identifier for the templateName.
   * @param majorVersionId - Identifier for the majorVersionId.
   * @param minorVersionId - Identifier for the minorVersionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironmentTemplateMinorVersion(templateName: string, majorVersionId: string, minorVersionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:environment-template/${ templateName }:${ majorVersionId }.${ minorVersionId }`);
  }

  /**
   * Adds a resource of type service-template to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/managing-svc-templates.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServiceTemplate(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:service-template/${ name }`);
  }

  /**
   * Adds a resource of type service-template-version to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/managing-svc-templates.html
   *
   * @param templateName - Identifier for the templateName.
   * @param majorVersion - Identifier for the majorVersion.
   * @param minorVersion - Identifier for the minorVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServiceTemplateVersion(templateName: string, majorVersion: string, minorVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:service-template/${ templateName }:${ majorVersion }.${ minorVersion }`);
  }

  /**
   * Adds a resource of type service-template-major-version to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/managing-svc-templates.html
   *
   * @param templateName - Identifier for the templateName.
   * @param majorVersionId - Identifier for the majorVersionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServiceTemplateMajorVersion(templateName: string, majorVersionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:service-template/${ templateName }:${ majorVersionId }`);
  }

  /**
   * Adds a resource of type service-template-minor-version to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/managing-svc-templates.html
   *
   * @param templateName - Identifier for the templateName.
   * @param majorVersionId - Identifier for the majorVersionId.
   * @param minorVersionId - Identifier for the minorVersionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServiceTemplateMinorVersion(templateName: string, majorVersionId: string, minorVersionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:service-template/${ templateName }:${ majorVersionId }.${ minorVersionId }`);
  }

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-environments.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironment(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:environment/${ name }`);
  }

  /**
   * Adds a resource of type service to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-services.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onService(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:service/${ name }`);
  }

  /**
   * Adds a resource of type service-instance to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-services.html
   *
   * @param serviceName - Identifier for the serviceName.
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServiceInstance(serviceName: string, name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:service/${ serviceName }/service-instance/${ name }`);
  }

  /**
   * Adds a resource of type environment-account-connection to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironmentAccountConnection(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:environment-account-connection/${ id }`);
  }

  /**
   * Adds a resource of type repository to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-repositories.html
   *
   * @param provider - Identifier for the provider.
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRepository(provider: string, name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:repository/${ provider }:${ name }`);
  }

  /**
   * Adds a resource of type component to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-components.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComponent(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Proton.defaultPartition }:proton:${ region || '*' }:${ account || '*' }:component/${ id }`);
  }

  /**
   * Filters access by specified environment template related to resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html
   *
   * Applies to actions:
   * - .toCancelEnvironmentDeployment()
   * - .toCreateEnvironment()
   * - .toDeleteEnvironment()
   * - .toUpdateEnvironment()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEnvironmentTemplate(value: string | string[], operator?: Operator | string) {
    return this.if(`EnvironmentTemplate`, value, operator || 'StringLike');
  }

  /**
   * Filters access by specified service template related to resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html
   *
   * Applies to actions:
   * - .toCancelServiceInstanceDeployment()
   * - .toCancelServicePipelineDeployment()
   * - .toCreateService()
   * - .toDeleteService()
   * - .toUpdateService()
   * - .toUpdateServiceInstance()
   * - .toUpdateServicePipeline()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifServiceTemplate(value: string | string[], operator?: Operator | string) {
    return this.if(`ServiceTemplate`, value, operator || 'StringLike');
  }
}
