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
    this.to('proton:CreateEnvironment');
    return this;
  }

  /**
   * Grants permission to create an environment template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplate.html
   */
  public toCreateEnvironmentTemplate() {
    this.to('proton:CreateEnvironmentTemplate');
    return this;
  }

  /**
   * Grants permission to create an environment template major version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplateMajorVersion.html
   */
  public toCreateEnvironmentTemplateMajorVersion() {
    this.to('proton:CreateEnvironmentTemplateMajorVersion');
    return this;
  }

  /**
   * Grants permission to create an environment template minor version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateEnvironmentTemplateMinorVersion.html
   */
  public toCreateEnvironmentTemplateMinorVersion() {
    this.to('proton:CreateEnvironmentTemplateMinorVersion');
    return this;
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
    this.to('proton:CreateService');
    return this;
  }

  /**
   * Grants permission to create a service template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplate.html
   */
  public toCreateServiceTemplate() {
    this.to('proton:CreateServiceTemplate');
    return this;
  }

  /**
   * Grants permission to create a service template major version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplateMajorVersion.html
   */
  public toCreateServiceTemplateMajorVersion() {
    this.to('proton:CreateServiceTemplateMajorVersion');
    return this;
  }

  /**
   * Grants permission to create a service template minor version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_CreateServiceTemplateMinorVersion.html
   */
  public toCreateServiceTemplateMinorVersion() {
    this.to('proton:CreateServiceTemplateMinorVersion');
    return this;
  }

  /**
   * Grants permission to delete the account role settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteAccountRoles.html
   */
  public toDeleteAccountRoles() {
    this.to('proton:DeleteAccountRoles');
    return this;
  }

  /**
   * Grants permission to delete an environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    this.to('proton:DeleteEnvironment');
    return this;
  }

  /**
   * Grants permission to delete an environment template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplate.html
   */
  public toDeleteEnvironmentTemplate() {
    this.to('proton:DeleteEnvironmentTemplate');
    return this;
  }

  /**
   * Grants permission to delete an environment template major version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateMajorVersion.html
   */
  public toDeleteEnvironmentTemplateMajorVersion() {
    this.to('proton:DeleteEnvironmentTemplateMajorVersion');
    return this;
  }

  /**
   * Grants permission to delete an environment template minor version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteEnvironmentTemplateMinorVersion.html
   */
  public toDeleteEnvironmentTemplateMinorVersion() {
    this.to('proton:DeleteEnvironmentTemplateMinorVersion');
    return this;
  }

  /**
   * Grants permission to delete a service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteService.html
   */
  public toDeleteService() {
    this.to('proton:DeleteService');
    return this;
  }

  /**
   * Grants permission to delete a service template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplate.html
   */
  public toDeleteServiceTemplate() {
    this.to('proton:DeleteServiceTemplate');
    return this;
  }

  /**
   * Grants permission to delete a service template major version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateMajorVersion.html
   */
  public toDeleteServiceTemplateMajorVersion() {
    this.to('proton:DeleteServiceTemplateMajorVersion');
    return this;
  }

  /**
   * Grants permission to delete a service template minor version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_DeleteServiceTemplateMinorVersion.html
   */
  public toDeleteServiceTemplateMinorVersion() {
    this.to('proton:DeleteServiceTemplateMinorVersion');
    return this;
  }

  /**
   * Grants permission to describe the account role settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetAccountRoles.html
   */
  public toGetAccountRoles() {
    this.to('proton:GetAccountRoles');
    return this;
  }

  /**
   * Grants permission to describe an environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironment.html
   */
  public toGetEnvironment() {
    this.to('proton:GetEnvironment');
    return this;
  }

  /**
   * Grants permission to describe an environment template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplate.html
   */
  public toGetEnvironmentTemplate() {
    this.to('proton:GetEnvironmentTemplate');
    return this;
  }

  /**
   * Grants permission to describe an environment template major version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateMajorVersion.html
   */
  public toGetEnvironmentTemplateMajorVersion() {
    this.to('proton:GetEnvironmentTemplateMajorVersion');
    return this;
  }

  /**
   * Grants permission to describe an environment template minor version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetEnvironmentTemplateMinorVersion.html
   */
  public toGetEnvironmentTemplateMinorVersion() {
    this.to('proton:GetEnvironmentTemplateMinorVersion');
    return this;
  }

  /**
   * Grants permission to describe a service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetService.html
   */
  public toGetService() {
    this.to('proton:GetService');
    return this;
  }

  /**
   * Grants permission to describe a service instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceInstance.html
   */
  public toGetServiceInstance() {
    this.to('proton:GetServiceInstance');
    return this;
  }

  /**
   * Grants permission to describe a service template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplate.html
   */
  public toGetServiceTemplate() {
    this.to('proton:GetServiceTemplate');
    return this;
  }

  /**
   * Grants permission to describe a service template major version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateMajorVersion.html
   */
  public toGetServiceTemplateMajorVersion() {
    this.to('proton:GetServiceTemplateMajorVersion');
    return this;
  }

  /**
   * Grants permission to describe a service template minor version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_GetServiceTemplateMinorVersion.html
   */
  public toGetServiceTemplateMinorVersion() {
    this.to('proton:GetServiceTemplateMinorVersion');
    return this;
  }

  /**
   * Grants permission to list environment template major versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateMajorVersions.html
   */
  public toListEnvironmentTemplateMajorVersions() {
    this.to('proton:ListEnvironmentTemplateMajorVersions');
    return this;
  }

  /**
   * Grants permission to list environment template minor versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplateMinorVersions.html
   */
  public toListEnvironmentTemplateMinorVersions() {
    this.to('proton:ListEnvironmentTemplateMinorVersions');
    return this;
  }

  /**
   * Grants permission to list environment templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironmentTemplates.html
   */
  public toListEnvironmentTemplates() {
    this.to('proton:ListEnvironmentTemplates');
    return this;
  }

  /**
   * Grants permission to list environments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListEnvironments.html
   */
  public toListEnvironments() {
    this.to('proton:ListEnvironments');
    return this;
  }

  /**
   * Grants permission to list service instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceInstances.html
   */
  public toListServiceInstances() {
    this.to('proton:ListServiceInstances');
    return this;
  }

  /**
   * Grants permission to list service template major versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateMajorVersions.html
   */
  public toListServiceTemplateMajorVersions() {
    this.to('proton:ListServiceTemplateMajorVersions');
    return this;
  }

  /**
   * Grants permission to list service template minor versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplateMinorVersions.html
   */
  public toListServiceTemplateMinorVersions() {
    this.to('proton:ListServiceTemplateMinorVersions');
    return this;
  }

  /**
   * Grants permission to list service templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServiceTemplates.html
   */
  public toListServiceTemplates() {
    this.to('proton:ListServiceTemplates');
    return this;
  }

  /**
   * Grants permission to list services
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_ListServices.html
   */
  public toListServices() {
    this.to('proton:ListServices');
    return this;
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
    this.to('proton:UpdateAccountRoles');
    return this;
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
    this.to('proton:UpdateEnvironment');
    return this;
  }

  /**
   * Grants permission to update an environment template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplate.html
   */
  public toUpdateEnvironmentTemplate() {
    this.to('proton:UpdateEnvironmentTemplate');
    return this;
  }

  /**
   * Grants permission to update an environment template major version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateMajorVersion.html
   */
  public toUpdateEnvironmentTemplateMajorVersion() {
    this.to('proton:UpdateEnvironmentTemplateMajorVersion');
    return this;
  }

  /**
   * Grants permission to update an environment template minor version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateEnvironmentTemplateMinorVersion.html
   */
  public toUpdateEnvironmentTemplateMinorVersion() {
    this.to('proton:UpdateEnvironmentTemplateMinorVersion');
    return this;
  }

  /**
   * Grants permission to update a service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateService.html
   */
  public toUpdateService() {
    this.to('proton:UpdateService');
    return this;
  }

  /**
   * Grants permission to update a service instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceInstance.html
   */
  public toUpdateServiceInstance() {
    this.to('proton:UpdateServiceInstance');
    return this;
  }

  /**
   * Grants permission to update a service pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServicePipeline.html
   */
  public toUpdateServicePipeline() {
    this.to('proton:UpdateServicePipeline');
    return this;
  }

  /**
   * Grants permission to update a service template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplate.html
   */
  public toUpdateServiceTemplate() {
    this.to('proton:UpdateServiceTemplate');
    return this;
  }

  /**
   * Grants permission to update a service template major version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateMajorVersion.html
   */
  public toUpdateServiceTemplateMajorVersion() {
    this.to('proton:UpdateServiceTemplateMajorVersion');
    return this;
  }

  /**
   * Grants permission to update a service template minor version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/proton/latest/APIReference/API_UpdateServiceTemplateMinorVersion.html
   */
  public toUpdateServiceTemplateMinorVersion() {
    this.to('proton:UpdateServiceTemplateMinorVersion');
    return this;
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

export type ProtonActionsWrite = 'CreateEnvironment' | 'CreateEnvironmentTemplate' | 'CreateEnvironmentTemplateMajorVersion' | 'CreateEnvironmentTemplateMinorVersion' | 'CreateService' | 'CreateServiceTemplate' | 'CreateServiceTemplateMajorVersion' | 'CreateServiceTemplateMinorVersion' | 'DeleteAccountRoles' | 'DeleteEnvironment' | 'DeleteEnvironmentTemplate' | 'DeleteEnvironmentTemplateMajorVersion' | 'DeleteEnvironmentTemplateMinorVersion' | 'DeleteService' | 'DeleteServiceTemplate' | 'DeleteServiceTemplateMajorVersion' | 'DeleteServiceTemplateMinorVersion' | 'UpdateAccountRoles' | 'UpdateEnvironment' | 'UpdateEnvironmentTemplate' | 'UpdateEnvironmentTemplateMajorVersion' | 'UpdateEnvironmentTemplateMinorVersion' | 'UpdateService' | 'UpdateServiceInstance' | 'UpdateServicePipeline' | 'UpdateServiceTemplate' | 'UpdateServiceTemplateMajorVersion' | 'UpdateServiceTemplateMinorVersion';
export type ProtonActionsRead = 'GetAccountRoles' | 'GetEnvironment' | 'GetEnvironmentTemplate' | 'GetEnvironmentTemplateMajorVersion' | 'GetEnvironmentTemplateMinorVersion' | 'GetService' | 'GetServiceInstance' | 'GetServiceTemplate' | 'GetServiceTemplateMajorVersion' | 'GetServiceTemplateMinorVersion';
export type ProtonActionsList = 'ListEnvironmentTemplateMajorVersions' | 'ListEnvironmentTemplateMinorVersions' | 'ListEnvironmentTemplates' | 'ListEnvironments' | 'ListServiceInstances' | 'ListServiceTemplateMajorVersions' | 'ListServiceTemplateMinorVersions' | 'ListServiceTemplates' | 'ListServices';
export type ProtonActions = ProtonActionsWrite | ProtonActionsRead | ProtonActionsList;
