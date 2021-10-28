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
   * Grants permission to reject an environment account connection request from another environment account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_AcceptEnvironmentAccountConnection.html
   */
  public toAcceptEnvironmentAccountConnection() {
    return this.to('AcceptEnvironmentAccountConnection');
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
   * DEPRECATED - use CreateEnvironmentTemplateVersion instead
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
   * DEPRECATED - use CreateEnvironmentTemplateVersion instead
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
   * DEPRECATED - use CreateServiceTemplateVersion instead
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
   * DEPRECATED - use CreateServiceTemplateVersion instead
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
   * DEPRECATED - use UpdateAccountSettings instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteAccountRoles.html
   */
  public toDeleteAccountRoles() {
    return this.to('DeleteAccountRoles');
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
   * DEPRECATED - use DeleteEnvironmentTemplateVersion instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateMajorVersion.html
   */
  public toDeleteEnvironmentTemplateMajorVersion() {
    return this.to('DeleteEnvironmentTemplateMajorVersion');
  }

  /**
   * DEPRECATED - use DeleteEnvironmentTemplateVersion instead
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
   * DEPRECATED - use DeleteServiceTemplateVersion instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateMajorVersion.html
   */
  public toDeleteServiceTemplateMajorVersion() {
    return this.to('DeleteServiceTemplateMajorVersion');
  }

  /**
   * DEPRECATED - use DeleteServiceTemplateVersion instead
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
   * DEPRECATED - use GetAccountSettings instead
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
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetAccountRoles.html
   */
  public toGetAccountSettings() {
    return this.to('GetAccountSettings');
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
   * DEPRECATED - use GetEnvironmentTemplateVersion instead
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateMajorVersion.html
   */
  public toGetEnvironmentTemplateMajorVersion() {
    return this.to('GetEnvironmentTemplateMajorVersion');
  }

  /**
   * DEPRECATED - use GetEnvironmentTemplateVersion instead
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
   * DEPRECATED - use GetServiceTemplateVersion instead
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateMajorVersion.html
   */
  public toGetServiceTemplateMajorVersion() {
    return this.to('GetServiceTemplateMajorVersion');
  }

  /**
   * DEPRECATED - use GetServiceTemplateVersion instead
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
   * DEPRECATED - use ListEnvironmentTemplateVersions instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateMajorVersions.html
   */
  public toListEnvironmentTemplateMajorVersions() {
    return this.to('ListEnvironmentTemplateMajorVersions');
  }

  /**
   * DEPRECATED - use ListEnvironmentTemplateVersions instead
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
   * DEPRECATED - use ListServiceTemplateVersions instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateMajorVersions.html
   */
  public toListServiceTemplateMajorVersions() {
    return this.to('ListServiceTemplateMajorVersions');
  }

  /**
   * DEPRECATED - use ListServiceTemplateVersions instead
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
   * Grants permissions to list tags of a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to reject an environment account connection request from another environment account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_RejectEnvironmentAccountConnection.html
   */
  public toRejectEnvironmentAccountConnection() {
    return this.to('RejectEnvironmentAccountConnection');
  }

  /**
   * Grants permissions to add tags to a resource
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
   * Grants permissions to remove tags from a resource
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
   * DEPRECATED - use UpdateAccountSettings instead
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
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateAccountRoles.html
   */
  public toUpdateAccountSettings() {
    return this.to('UpdateAccountSettings');
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
   * DEPRECATED - use UpdateEnvironmentTemplateVersion instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateMajorVersion.html
   */
  public toUpdateEnvironmentTemplateMajorVersion() {
    return this.to('UpdateEnvironmentTemplateMajorVersion');
  }

  /**
   * DEPRECATED - use UpdateEnvironmentTemplateVersion instead
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
   * DEPRECATED - use UpdateServiceTemplateVersion instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateMajorVersion.html
   */
  public toUpdateServiceTemplateMajorVersion() {
    return this.to('UpdateServiceTemplateMajorVersion');
  }

  /**
   * DEPRECATED - use UpdateServiceTemplateVersion instead
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

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptEnvironmentAccountConnection',
      'CancelEnvironmentDeployment',
      'CancelServiceInstanceDeployment',
      'CancelServicePipelineDeployment',
      'CreateEnvironment',
      'CreateEnvironmentAccountConnection',
      'CreateEnvironmentTemplate',
      'CreateEnvironmentTemplateMajorVersion',
      'CreateEnvironmentTemplateMinorVersion',
      'CreateEnvironmentTemplateVersion',
      'CreateService',
      'CreateServiceTemplate',
      'CreateServiceTemplateMajorVersion',
      'CreateServiceTemplateMinorVersion',
      'CreateServiceTemplateVersion',
      'DeleteAccountRoles',
      'DeleteEnvironment',
      'DeleteEnvironmentAccountConnection',
      'DeleteEnvironmentTemplate',
      'DeleteEnvironmentTemplateMajorVersion',
      'DeleteEnvironmentTemplateMinorVersion',
      'DeleteEnvironmentTemplateVersion',
      'DeleteService',
      'DeleteServiceTemplate',
      'DeleteServiceTemplateMajorVersion',
      'DeleteServiceTemplateMinorVersion',
      'DeleteServiceTemplateVersion',
      'RejectEnvironmentAccountConnection',
      'UpdateAccountRoles',
      'UpdateAccountSettings',
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
      'UpdateServiceTemplateVersion'
    ],
    Read: [
      'GetAccountRoles',
      'GetAccountSettings',
      'GetEnvironment',
      'GetEnvironmentAccountConnection',
      'GetEnvironmentTemplate',
      'GetEnvironmentTemplateMajorVersion',
      'GetEnvironmentTemplateMinorVersion',
      'GetEnvironmentTemplateVersion',
      'GetService',
      'GetServiceInstance',
      'GetServiceTemplate',
      'GetServiceTemplateMajorVersion',
      'GetServiceTemplateMinorVersion',
      'GetServiceTemplateVersion',
      'ListTagsForResource'
    ],
    List: [
      'ListEnvironmentAccountConnections',
      'ListEnvironmentTemplateMajorVersions',
      'ListEnvironmentTemplateMinorVersions',
      'ListEnvironmentTemplateVersions',
      'ListEnvironmentTemplates',
      'ListEnvironments',
      'ListServiceInstances',
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironmentTemplate(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:proton:${ region || '*' }:${ account || '*' }:environment-template/${ name }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironmentTemplateVersion(templateName: string, majorVersion: string, minorVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:proton:${ region || '*' }:${ account || '*' }:environment-template/${ templateName }:${ majorVersion }.${ minorVersion }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironmentTemplateMajorVersion(templateName: string, majorVersionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:proton:${ region || '*' }:${ account || '*' }:environment-template/${ templateName }:${ majorVersionId }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironmentTemplateMinorVersion(templateName: string, majorVersionId: string, minorVersionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:proton:${ region || '*' }:${ account || '*' }:environment-template/${ templateName }:${ majorVersionId }.${ minorVersionId }`);
  }

  /**
   * Adds a resource of type service-template to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/managing-svc-templates.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServiceTemplate(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:proton:${ region || '*' }:${ account || '*' }:service-template/${ name }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServiceTemplateVersion(templateName: string, majorVersion: string, minorVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:proton:${ region || '*' }:${ account || '*' }:service-template/${ templateName }:${ majorVersion }.${ minorVersion }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServiceTemplateMajorVersion(templateName: string, majorVersionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:proton:${ region || '*' }:${ account || '*' }:service-template/${ templateName }:${ majorVersionId }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServiceTemplateMinorVersion(templateName: string, majorVersionId: string, minorVersionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:proton:${ region || '*' }:${ account || '*' }:service-template/${ templateName }:${ majorVersionId }.${ minorVersionId }`);
  }

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-environments.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironment(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:proton:${ region || '*' }:${ account || '*' }:environment/${ name }`);
  }

  /**
   * Adds a resource of type service to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-services.html
   *
   * @param name - Identifier for the name.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onService(name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:proton:${ region || '*' }:${ account || '*' }:service/${ name }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onServiceInstance(serviceName: string, name: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:proton:${ region || '*' }:${ account || '*' }:service/${ serviceName }/service-instance/${ name }`);
  }

  /**
   * Adds a resource of type environment-account-connection to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-account-connections.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEnvironmentAccountConnection(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:proton:${ region || '*' }:${ account || '*' }:environment-account-connection/${ id }`);
  }

  /**
   * Filters actions based on specified environment template related to resource
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
   * Filters actions based on specified service template related to resource
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
