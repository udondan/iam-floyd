import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an environment
   *
   * Access Level: Write
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
   * Grants permission to create an environment template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplate.html
   */
  public toCreateEnvironmentTemplate() {
    return this.to('CreateEnvironmentTemplate');
  }

  /**
   * Grants permission to create an environment template major version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplateMajorVersion.html
   */
  public toCreateEnvironmentTemplateMajorVersion() {
    return this.to('CreateEnvironmentTemplateMajorVersion');
  }

  /**
   * Grants permission to create an environment template minor version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplateMinorVersion.html
   */
  public toCreateEnvironmentTemplateMinorVersion() {
    return this.to('CreateEnvironmentTemplateMinorVersion');
  }

  /**
   * Grants permission to create a service
   *
   * Access Level: Write
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
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplate.html
   */
  public toCreateServiceTemplate() {
    return this.to('CreateServiceTemplate');
  }

  /**
   * Grants permission to create a service template major version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplateMajorVersion.html
   */
  public toCreateServiceTemplateMajorVersion() {
    return this.to('CreateServiceTemplateMajorVersion');
  }

  /**
   * Grants permission to create a service template minor version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplateMinorVersion.html
   */
  public toCreateServiceTemplateMinorVersion() {
    return this.to('CreateServiceTemplateMinorVersion');
  }

  /**
   * Grants permission to delete the account role settings
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
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
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
   * Grants permission to delete an environment template major version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateMajorVersion.html
   */
  public toDeleteEnvironmentTemplateMajorVersion() {
    return this.to('DeleteEnvironmentTemplateMajorVersion');
  }

  /**
   * Grants permission to delete an environment template minor version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateMinorVersion.html
   */
  public toDeleteEnvironmentTemplateMinorVersion() {
    return this.to('DeleteEnvironmentTemplateMinorVersion');
  }

  /**
   * Grants permission to delete a service
   *
   * Access Level: Write
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
   * Grants permission to delete a service template major version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateMajorVersion.html
   */
  public toDeleteServiceTemplateMajorVersion() {
    return this.to('DeleteServiceTemplateMajorVersion');
  }

  /**
   * Grants permission to delete a service template minor version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateMinorVersion.html
   */
  public toDeleteServiceTemplateMinorVersion() {
    return this.to('DeleteServiceTemplateMinorVersion');
  }

  /**
   * Grants permission to describe the account role settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetAccountRoles.html
   */
  public toGetAccountRoles() {
    return this.to('GetAccountRoles');
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
   * Grants permission to describe an environment template major version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateMajorVersion.html
   */
  public toGetEnvironmentTemplateMajorVersion() {
    return this.to('GetEnvironmentTemplateMajorVersion');
  }

  /**
   * Grants permission to describe an environment template minor version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateMinorVersion.html
   */
  public toGetEnvironmentTemplateMinorVersion() {
    return this.to('GetEnvironmentTemplateMinorVersion');
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
   * Grants permission to describe a service template major version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateMajorVersion.html
   */
  public toGetServiceTemplateMajorVersion() {
    return this.to('GetServiceTemplateMajorVersion');
  }

  /**
   * Grants permission to describe a service template minor version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateMinorVersion.html
   */
  public toGetServiceTemplateMinorVersion() {
    return this.to('GetServiceTemplateMinorVersion');
  }

  /**
   * Grants permission to list environment template major versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateMajorVersions.html
   */
  public toListEnvironmentTemplateMajorVersions() {
    return this.to('ListEnvironmentTemplateMajorVersions');
  }

  /**
   * Grants permission to list environment template minor versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateMinorVersions.html
   */
  public toListEnvironmentTemplateMinorVersions() {
    return this.to('ListEnvironmentTemplateMinorVersions');
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
   * Grants permission to list service template major versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateMajorVersions.html
   */
  public toListServiceTemplateMajorVersions() {
    return this.to('ListServiceTemplateMajorVersions');
  }

  /**
   * Grants permission to list service template minor versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateMinorVersions.html
   */
  public toListServiceTemplateMinorVersions() {
    return this.to('ListServiceTemplateMinorVersions');
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
   * Grants permission to update the account role settings
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
   * Grants permission to update an environment
   *
   * Access Level: Write
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
   * Grants permission to update an environment template major version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateMajorVersion.html
   */
  public toUpdateEnvironmentTemplateMajorVersion() {
    return this.to('UpdateEnvironmentTemplateMajorVersion');
  }

  /**
   * Grants permission to update an environment template minor version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateMinorVersion.html
   */
  public toUpdateEnvironmentTemplateMinorVersion() {
    return this.to('UpdateEnvironmentTemplateMinorVersion');
  }

  /**
   * Grants permission to update a service
   *
   * Access Level: Write
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
   * Grants permission to update a service template major version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateMajorVersion.html
   */
  public toUpdateServiceTemplateMajorVersion() {
    return this.to('UpdateServiceTemplateMajorVersion');
  }

  /**
   * Grants permission to update a service template minor version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateMinorVersion.html
   */
  public toUpdateServiceTemplateMinorVersion() {
    return this.to('UpdateServiceTemplateMinorVersion');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateEnvironment",
      "CreateEnvironmentTemplate",
      "CreateEnvironmentTemplateMajorVersion",
      "CreateEnvironmentTemplateMinorVersion",
      "CreateService",
      "CreateServiceTemplate",
      "CreateServiceTemplateMajorVersion",
      "CreateServiceTemplateMinorVersion",
      "DeleteAccountRoles",
      "DeleteEnvironment",
      "DeleteEnvironmentTemplate",
      "DeleteEnvironmentTemplateMajorVersion",
      "DeleteEnvironmentTemplateMinorVersion",
      "DeleteService",
      "DeleteServiceTemplate",
      "DeleteServiceTemplateMajorVersion",
      "DeleteServiceTemplateMinorVersion",
      "UpdateAccountRoles",
      "UpdateEnvironment",
      "UpdateEnvironmentTemplate",
      "UpdateEnvironmentTemplateMajorVersion",
      "UpdateEnvironmentTemplateMinorVersion",
      "UpdateService",
      "UpdateServiceInstance",
      "UpdateServicePipeline",
      "UpdateServiceTemplate",
      "UpdateServiceTemplateMajorVersion",
      "UpdateServiceTemplateMinorVersion"
    ],
    "Read": [
      "GetAccountRoles",
      "GetEnvironment",
      "GetEnvironmentTemplate",
      "GetEnvironmentTemplateMajorVersion",
      "GetEnvironmentTemplateMinorVersion",
      "GetService",
      "GetServiceInstance",
      "GetServiceTemplate",
      "GetServiceTemplateMajorVersion",
      "GetServiceTemplateMinorVersion"
    ],
    "List": [
      "ListEnvironmentTemplateMajorVersions",
      "ListEnvironmentTemplateMinorVersions",
      "ListEnvironmentTemplates",
      "ListEnvironments",
      "ListServiceInstances",
      "ListServiceTemplateMajorVersions",
      "ListServiceTemplateMinorVersions",
      "ListServiceTemplates",
      "ListServices"
    ]
  };

  /**
   * Adds a resource of type environment-template to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-env-templates.html
   *
   * @param templateName - Identifier for the templateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEnvironmentTemplate(templateName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:proton:${Region}:${Account}:environment-template/${TemplateName}';
    arn = arn.replace('${TemplateName}', templateName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   */
  public onEnvironmentTemplateMajorVersion(templateName: string, majorVersionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:proton:${Region}:${Account}:environment-template/${TemplateName}:${MajorVersionId}';
    arn = arn.replace('${TemplateName}', templateName);
    arn = arn.replace('${MajorVersionId}', majorVersionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   */
  public onEnvironmentTemplateMinorVersion(templateName: string, majorVersionId: string, minorVersionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:proton:${Region}:${Account}:environment-template/${TemplateName}:${MajorVersionId}.${MinorVersionId}';
    arn = arn.replace('${TemplateName}', templateName);
    arn = arn.replace('${MajorVersionId}', majorVersionId);
    arn = arn.replace('${MinorVersionId}', minorVersionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type service-template to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/managing-svc-templates.html
   *
   * @param templateName - Identifier for the templateName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onServiceTemplate(templateName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:proton:${Region}:${Account}:service-template/${TemplateName}';
    arn = arn.replace('${TemplateName}', templateName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   */
  public onServiceTemplateMajorVersion(templateName: string, majorVersionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:proton:${Region}:${Account}:service-template/${TemplateName}:${MajorVersionId}';
    arn = arn.replace('${TemplateName}', templateName);
    arn = arn.replace('${MajorVersionId}', majorVersionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   */
  public onServiceTemplateMinorVersion(templateName: string, majorVersionId: string, minorVersionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:proton:${Region}:${Account}:service-template/${TemplateName}:${MajorVersionId}.${MinorVersionId}';
    arn = arn.replace('${TemplateName}', templateName);
    arn = arn.replace('${MajorVersionId}', majorVersionId);
    arn = arn.replace('${MinorVersionId}', minorVersionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-environments.html
   *
   * @param environmentName - Identifier for the environmentName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEnvironment(environmentName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:proton:${Region}:${Account}:environment/${EnvironmentName}';
    arn = arn.replace('${EnvironmentName}', environmentName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type service to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-services.html
   *
   * @param serviceName - Identifier for the serviceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onService(serviceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:proton:${Region}:${Account}:service/${ServiceName}';
    arn = arn.replace('${ServiceName}', serviceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type service-instance to the statement
   *
   * https://docs.aws.amazon.com/proton/latest/adminguide/ag-services.html
   *
   * @param serviceName - Identifier for the serviceName.
   * @param serviceInstanceName - Identifier for the serviceInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onServiceInstance(serviceName: string, serviceInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:proton:${Region}:${Account}:service/${ServiceName}/service-instance/${ServiceInstanceName}';
    arn = arn.replace('${ServiceName}', serviceName);
    arn = arn.replace('${ServiceInstanceName}', serviceInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
