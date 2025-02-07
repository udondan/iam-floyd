import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [iot](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iot extends PolicyStatement {
  public servicePrefix = 'iot';

  /**
   * Statement provider for service [iot](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a pending certificate transfer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AcceptCertificateTransfer.html
   */
  public toAcceptCertificateTransfer() {
    return this.to('AcceptCertificateTransfer');
  }

  /**
   * Grants permission to add a thing to the specified billing group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToBillingGroup.html
   */
  public toAddThingToBillingGroup() {
    return this.to('AddThingToBillingGroup');
  }

  /**
   * Grants permission to add a thing to the specified thing group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToThingGroup.html
   */
  public toAddThingToThingGroup() {
    return this.to('AddThingToThingGroup');
  }

  /**
   * Grants permission to associate SBOM files to a package version
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iot:GetIndexingConfiguration
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AssociateSbomWithPackageVersion.html
   */
  public toAssociateSbomWithPackageVersion() {
    return this.to('AssociateSbomWithPackageVersion');
  }

  /**
   * Grants permission to associate a group with a continuous job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AssociateTargetsWithJob.html
   */
  public toAssociateTargetsWithJob() {
    return this.to('AssociateTargetsWithJob');
  }

  /**
   * Grants permission to attach a policy to the specified target
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPolicy.html
   */
  public toAttachPolicy() {
    return this.to('AttachPolicy');
  }

  /**
   * Grants permission to attach the specified policy to the specified principal (certificate or other credential)
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPrincipalPolicy.html
   */
  public toAttachPrincipalPolicy() {
    return this.to('AttachPrincipalPolicy');
  }

  /**
   * Grants permission to associate a Device Defender security profile with a thing group or with this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachSecurityProfile.html
   */
  public toAttachSecurityProfile() {
    return this.to('AttachSecurityProfile');
  }

  /**
   * Grants permission to attach the specified principal to the specified thing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachThingPrincipal.html
   */
  public toAttachThingPrincipal() {
    return this.to('AttachThingPrincipal');
  }

  /**
   * Grants permission to cancel a mitigation action task that is in progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditMitigationActionsTask.html
   */
  public toCancelAuditMitigationActionsTask() {
    return this.to('CancelAuditMitigationActionsTask');
  }

  /**
   * Grants permission to cancel an audit that is in progress. The audit can be either scheduled or on-demand
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditTask.html
   */
  public toCancelAuditTask() {
    return this.to('CancelAuditTask');
  }

  /**
   * Grants permission to cancel a pending transfer for the specified certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelCertificateTransfer.html
   */
  public toCancelCertificateTransfer() {
    return this.to('CancelCertificateTransfer');
  }

  /**
   * Grants permission to cancel a Device Defender ML Detect mitigation action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelDetectMitigationActionsTask.html
   */
  public toCancelDetectMitigationActionsTask() {
    return this.to('CancelDetectMitigationActionsTask');
  }

  /**
   * Grants permission to cancel a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJob.html
   */
  public toCancelJob() {
    return this.to('CancelJob');
  }

  /**
   * Grants permission to cancel a job execution on a particular device
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJobExecution.html
   */
  public toCancelJobExecution() {
    return this.to('CancelJobExecution');
  }

  /**
   * Grants permission to clear the default authorizer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ClearDefaultAuthorizer.html
   */
  public toClearDefaultAuthorizer() {
    return this.to('ClearDefaultAuthorizer');
  }

  /**
   * Grants permission to close a tunnel
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDelete()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_CloseTunnel.html
   */
  public toCloseTunnel() {
    return this.to('CloseTunnel');
  }

  /**
   * Grants permission to confirm a http url TopicRuleDestinationDestination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ConfirmTopicRuleDestination.html
   */
  public toConfirmTopicRuleDestination() {
    return this.to('ConfirmTopicRuleDestination');
  }

  /**
   * Grants permission to connect as the specified client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toConnect() {
    return this.to('Connect');
  }

  /**
   * Grants permission to create a Device Defender audit suppression
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateAuditSuppression.html
   */
  public toCreateAuditSuppression() {
    return this.to('CreateAuditSuppression');
  }

  /**
   * Grants permission to create an authorizer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateAuthorizer.html
   */
  public toCreateAuthorizer() {
    return this.to('CreateAuthorizer');
  }

  /**
   * Grants permission to create a billing group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateBillingGroup.html
   */
  public toCreateBillingGroup() {
    return this.to('CreateBillingGroup');
  }

  /**
   * Grants permission to create an X.509 certificate using the specified certificate signing request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCertificateFromCsr.html
   */
  public toCreateCertificateFromCsr() {
    return this.to('CreateCertificateFromCsr');
  }

  /**
   * Grants permission to create a certificate provider
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCertificateProvider.html
   */
  public toCreateCertificateProvider() {
    return this.to('CreateCertificateProvider');
  }

  /**
   * Grants permission to create a command that can be used to start new executions against a device
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCommand.html
   */
  public toCreateCommand() {
    return this.to('CreateCommand');
  }

  /**
   * Grants permission to create a custom metric for device side metric reporting and monitoring
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCustomMetric.html
   */
  public toCreateCustomMetric() {
    return this.to('CreateCustomMetric');
  }

  /**
   * Grants permission to define a dimension that can be used to to limit the scope of a metric used in a security profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDimension.html
   */
  public toCreateDimension() {
    return this.to('CreateDimension');
  }

  /**
   * Grants permission to create a domain configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifDomainName()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDomainConfiguration.html
   */
  public toCreateDomainConfiguration() {
    return this.to('CreateDomainConfiguration');
  }

  /**
   * Grants permission to create a Dynamic Thing Group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDynamicThingGroup.html
   */
  public toCreateDynamicThingGroup() {
    return this.to('CreateDynamicThingGroup');
  }

  /**
   * Grants permission to create a fleet metric
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateFleetMetric.html
   */
  public toCreateFleetMetric() {
    return this.to('CreateFleetMetric');
  }

  /**
   * Grants permission to create a job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateJob.html
   */
  public toCreateJob() {
    return this.to('CreateJob');
  }

  /**
   * Grants permission to create a job template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateJobTemplate.html
   */
  public toCreateJobTemplate() {
    return this.to('CreateJobTemplate');
  }

  /**
   * Grants permission to create a 2048 bit RSA key pair and issues an X.509 certificate using the issued public key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateKeysAndCertificate.html
   */
  public toCreateKeysAndCertificate() {
    return this.to('CreateKeysAndCertificate');
  }

  /**
   * Grants permission to define an action that can be applied to audit findings by using StartAuditMitigationActionsTask
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateMitigationAction.html
   */
  public toCreateMitigationAction() {
    return this.to('CreateMitigationAction');
  }

  /**
   * Grants permission to create an OTA update job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateOTAUpdate.html
   */
  public toCreateOTAUpdate() {
    return this.to('CreateOTAUpdate');
  }

  /**
   * Grants permission to create a software package that you can deploy to your devices
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iot:GetIndexingConfiguration
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePackage.html
   */
  public toCreatePackage() {
    return this.to('CreatePackage');
  }

  /**
   * Grants permission to create a version under the specified package
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iot:GetIndexingConfiguration
   * - s3:GetObjectVersion
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePackageVersion.html
   */
  public toCreatePackageVersion() {
    return this.to('CreatePackageVersion');
  }

  /**
   * Grants permission to create an AWS IoT policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicy.html
   */
  public toCreatePolicy() {
    return this.to('CreatePolicy');
  }

  /**
   * Grants permission to create a new version of the specified AWS IoT policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicyVersion.html
   */
  public toCreatePolicyVersion() {
    return this.to('CreatePolicyVersion');
  }

  /**
   * Grants permission to create a provisioning claim
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningClaim.html
   */
  public toCreateProvisioningClaim() {
    return this.to('CreateProvisioningClaim');
  }

  /**
   * Grants permission to create a fleet provisioning template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplate.html
   */
  public toCreateProvisioningTemplate() {
    return this.to('CreateProvisioningTemplate');
  }

  /**
   * Grants permission to create a new version of a fleet provisioning template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplateVersion.html
   */
  public toCreateProvisioningTemplateVersion() {
    return this.to('CreateProvisioningTemplateVersion');
  }

  /**
   * Grants permission to create a role alias
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateRoleAlias.html
   */
  public toCreateRoleAlias() {
    return this.to('CreateRoleAlias');
  }

  /**
   * Grants permission to create a scheduled audit that is run at a specified time interval
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateScheduledAudit.html
   */
  public toCreateScheduledAudit() {
    return this.to('CreateScheduledAudit');
  }

  /**
   * Grants permission to create a Device Defender security profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateSecurityProfile.html
   */
  public toCreateSecurityProfile() {
    return this.to('CreateSecurityProfile');
  }

  /**
   * Grants permission to create a new AWS IoT stream
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateStream.html
   */
  public toCreateStream() {
    return this.to('CreateStream');
  }

  /**
   * Grants permission to create a thing in the thing registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThing.html
   */
  public toCreateThing() {
    return this.to('CreateThing');
  }

  /**
   * Grants permission to create a thing group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThingGroup.html
   */
  public toCreateThingGroup() {
    return this.to('CreateThingGroup');
  }

  /**
   * Grants permission to create a new thing type
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThingType.html
   */
  public toCreateThingType() {
    return this.to('CreateThingType');
  }

  /**
   * Grants permission to create a rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateTopicRule.html
   */
  public toCreateTopicRule() {
    return this.to('CreateTopicRule');
  }

  /**
   * Grants permission to create a TopicRuleDestination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateTopicRuleDestination.html
   */
  public toCreateTopicRuleDestination() {
    return this.to('CreateTopicRuleDestination');
  }

  /**
   * Grants permission to delete the audit configuration associated with the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAccountAuditConfiguration.html
   */
  public toDeleteAccountAuditConfiguration() {
    return this.to('DeleteAccountAuditConfiguration');
  }

  /**
   * Grants permission to delete a Device Defender audit suppression
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAuditSuppression.html
   */
  public toDeleteAuditSuppression() {
    return this.to('DeleteAuditSuppression');
  }

  /**
   * Grants permission to delete the specified authorizer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAuthorizer.html
   */
  public toDeleteAuthorizer() {
    return this.to('DeleteAuthorizer');
  }

  /**
   * Grants permission to delete the specified billing group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteBillingGroup.html
   */
  public toDeleteBillingGroup() {
    return this.to('DeleteBillingGroup');
  }

  /**
   * Grants permission to delete a registered CA certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCACertificate.html
   */
  public toDeleteCACertificate() {
    return this.to('DeleteCACertificate');
  }

  /**
   * Grants permission to delete the specified certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCertificate.html
   */
  public toDeleteCertificate() {
    return this.to('DeleteCertificate');
  }

  /**
   * Grants permission to delete a certificate provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCertificateProvider.html
   */
  public toDeleteCertificateProvider() {
    return this.to('DeleteCertificateProvider');
  }

  /**
   * Grants permission to delete a command
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCommand.html
   */
  public toDeleteCommand() {
    return this.to('DeleteCommand');
  }

  /**
   * Grants permission to delete a command execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCommandExecution.html
   */
  public toDeleteCommandExecution() {
    return this.to('DeleteCommandExecution');
  }

  /**
   * Grants permission to deletes the specified custom metric from your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCustomMetric.html
   */
  public toDeleteCustomMetric() {
    return this.to('DeleteCustomMetric');
  }

  /**
   * Grants permission to remove the specified dimension from your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDimension.html
   */
  public toDeleteDimension() {
    return this.to('DeleteDimension');
  }

  /**
   * Grants permission to delete a domain configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDomainConfiguration.html
   */
  public toDeleteDomainConfiguration() {
    return this.to('DeleteDomainConfiguration');
  }

  /**
   * Grants permission to delete the specified Dynamic Thing Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDynamicThingGroup.html
   */
  public toDeleteDynamicThingGroup() {
    return this.to('DeleteDynamicThingGroup');
  }

  /**
   * Grants permission to delete the specified fleet metric
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteFleetMetric.html
   */
  public toDeleteFleetMetric() {
    return this.to('DeleteFleetMetric');
  }

  /**
   * Grants permission to delete a job and its related job executions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJob.html
   */
  public toDeleteJob() {
    return this.to('DeleteJob');
  }

  /**
   * Grants permission to delete a job execution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJobExecution.html
   */
  public toDeleteJobExecution() {
    return this.to('DeleteJobExecution');
  }

  /**
   * Grants permission to delete a job template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJobTemplate.html
   */
  public toDeleteJobTemplate() {
    return this.to('DeleteJobTemplate');
  }

  /**
   * Grants permission to delete a defined mitigation action from your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteMitigationAction.html
   */
  public toDeleteMitigationAction() {
    return this.to('DeleteMitigationAction');
  }

  /**
   * Grants permission to delete an OTA update job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteOTAUpdate.html
   */
  public toDeleteOTAUpdate() {
    return this.to('DeleteOTAUpdate');
  }

  /**
   * Grants permission to delete a package
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePackage.html
   */
  public toDeletePackage() {
    return this.to('DeletePackage');
  }

  /**
   * Grants permission to delete a version of the specified package
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePackageVersion.html
   */
  public toDeletePackageVersion() {
    return this.to('DeletePackageVersion');
  }

  /**
   * Grants permission to delete the specified policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    return this.to('DeletePolicy');
  }

  /**
   * Grants permission to Delete the specified version of the specified policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicyVersion.html
   */
  public toDeletePolicyVersion() {
    return this.to('DeletePolicyVersion');
  }

  /**
   * Grants permission to delete a fleet provisioning template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplate.html
   */
  public toDeleteProvisioningTemplate() {
    return this.to('DeleteProvisioningTemplate');
  }

  /**
   * Grants permission to delete a fleet provisioning template version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplateVersion.html
   */
  public toDeleteProvisioningTemplateVersion() {
    return this.to('DeleteProvisioningTemplateVersion');
  }

  /**
   * Grants permission to delete a CA certificate registration code
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRegistrationCode.html
   */
  public toDeleteRegistrationCode() {
    return this.to('DeleteRegistrationCode');
  }

  /**
   * Grants permission to delete the specified role alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRoleAlias.html
   */
  public toDeleteRoleAlias() {
    return this.to('DeleteRoleAlias');
  }

  /**
   * Grants permission to delete a scheduled audit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteScheduledAudit.html
   */
  public toDeleteScheduledAudit() {
    return this.to('DeleteScheduledAudit');
  }

  /**
   * Grants permission to delete a Device Defender security profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteSecurityProfile.html
   */
  public toDeleteSecurityProfile() {
    return this.to('DeleteSecurityProfile');
  }

  /**
   * Grants permission to delete a specified stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteStream.html
   */
  public toDeleteStream() {
    return this.to('DeleteStream');
  }

  /**
   * Grants permission to delete the specified thing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html
   */
  public toDeleteThing() {
    return this.to('DeleteThing');
  }

  /**
   * Grants permission to delete the specified thing group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingGroup.html
   */
  public toDeleteThingGroup() {
    return this.to('DeleteThingGroup');
  }

  /**
   * Grants permission to delete the specified thing shadow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toDeleteThingShadow() {
    return this.to('DeleteThingShadow');
  }

  /**
   * Grants permission to delete the specified thing type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingType.html
   */
  public toDeleteThingType() {
    return this.to('DeleteThingType');
  }

  /**
   * Grants permission to delete the specified rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteTopicRule.html
   */
  public toDeleteTopicRule() {
    return this.to('DeleteTopicRule');
  }

  /**
   * Grants permission to delete a TopicRuleDestination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteTopicRuleDestination.html
   */
  public toDeleteTopicRuleDestination() {
    return this.to('DeleteTopicRuleDestination');
  }

  /**
   * Grants permission to delete the specified v2 logging level
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteV2LoggingLevel.html
   */
  public toDeleteV2LoggingLevel() {
    return this.to('DeleteV2LoggingLevel');
  }

  /**
   * Grants permission to deprecate the specified thing type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeprecateThingType.html
   */
  public toDeprecateThingType() {
    return this.to('DeprecateThingType');
  }

  /**
   * Grants permission to get information about audit configurations for the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAccountAuditConfiguration.html
   */
  public toDescribeAccountAuditConfiguration() {
    return this.to('DescribeAccountAuditConfiguration');
  }

  /**
   * Grants permission to get information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and when the audit that returned the finding was started
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html
   */
  public toDescribeAuditFinding() {
    return this.to('DescribeAuditFinding');
  }

  /**
   * Grants permission to get information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditMitigationActionsTask.html
   */
  public toDescribeAuditMitigationActionsTask() {
    return this.to('DescribeAuditMitigationActionsTask');
  }

  /**
   * Grants permission to get information about a Device Defender audit suppression
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditSuppression.html
   */
  public toDescribeAuditSuppression() {
    return this.to('DescribeAuditSuppression');
  }

  /**
   * Grants permission to get information about a Device Defender audit
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditTask.html
   */
  public toDescribeAuditTask() {
    return this.to('DescribeAuditTask');
  }

  /**
   * Grants permission to describe an authorizer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuthorizer.html
   */
  public toDescribeAuthorizer() {
    return this.to('DescribeAuthorizer');
  }

  /**
   * Grants permission to get information about the specified billing group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeBillingGroup.html
   */
  public toDescribeBillingGroup() {
    return this.to('DescribeBillingGroup');
  }

  /**
   * Grants permission to describe a registered CA certificate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCACertificate.html
   */
  public toDescribeCACertificate() {
    return this.to('DescribeCACertificate');
  }

  /**
   * Grants permission to get information about the specified certificate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCertificate.html
   */
  public toDescribeCertificate() {
    return this.to('DescribeCertificate');
  }

  /**
   * Grants permission to describe a certificate provider
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCertificateProvider.html
   */
  public toDescribeCertificateProvider() {
    return this.to('DescribeCertificateProvider');
  }

  /**
   * Grants permission to describe a custom metric that is defined in your AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCustomMetric.html
   */
  public toDescribeCustomMetric() {
    return this.to('DescribeCustomMetric');
  }

  /**
   * Grants permission to describe the default authorizer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDefaultAuthorizer.html
   */
  public toDescribeDefaultAuthorizer() {
    return this.to('DescribeDefaultAuthorizer');
  }

  /**
   * Grants permission to describe a Device Defender ML Detect mitigation action
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDetectMitigationActionsTask.html
   */
  public toDescribeDetectMitigationActionsTask() {
    return this.to('DescribeDetectMitigationActionsTask');
  }

  /**
   * Grants permission to get details about a dimension that is defined in your AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDimension.html
   */
  public toDescribeDimension() {
    return this.to('DescribeDimension');
  }

  /**
   * Grants permission to get information about the domain configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDomainConfiguration.html
   */
  public toDescribeDomainConfiguration() {
    return this.to('DescribeDomainConfiguration');
  }

  /**
   * Grants permission to get a unique endpoint specific to the AWS account making the call
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEndpoint.html
   */
  public toDescribeEndpoint() {
    return this.to('DescribeEndpoint');
  }

  /**
   * Grants permission to get account event configurations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEventConfigurations.html
   */
  public toDescribeEventConfigurations() {
    return this.to('DescribeEventConfigurations');
  }

  /**
   * Grants permission to get information about the specified fleet metric
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeFleetMetric.html
   */
  public toDescribeFleetMetric() {
    return this.to('DescribeFleetMetric');
  }

  /**
   * Grants permission to get information about the specified index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeIndex.html
   */
  public toDescribeIndex() {
    return this.to('DescribeIndex');
  }

  /**
   * Grants permission to describe a job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJob.html
   */
  public toDescribeJob() {
    return this.to('DescribeJob');
  }

  /**
   * Grants permission to describe a job execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJobExecution.html
   */
  public toDescribeJobExecution() {
    return this.to('DescribeJobExecution');
  }

  /**
   * Grants permission to describe a job template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJobTemplate.html
   */
  public toDescribeJobTemplate() {
    return this.to('DescribeJobTemplate');
  }

  /**
   * Grants permission to describe a managed job template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeManagedJobTemplate.html
   */
  public toDescribeManagedJobTemplate() {
    return this.to('DescribeManagedJobTemplate');
  }

  /**
   * Grants permission to get information about a mitigation action
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeMitigationAction.html
   */
  public toDescribeMitigationAction() {
    return this.to('DescribeMitigationAction');
  }

  /**
   * Grants permission to get information about a fleet provisioning template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplate.html
   */
  public toDescribeProvisioningTemplate() {
    return this.to('DescribeProvisioningTemplate');
  }

  /**
   * Grants permission to get information about a fleet provisioning template version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplateVersion.html
   */
  public toDescribeProvisioningTemplateVersion() {
    return this.to('DescribeProvisioningTemplateVersion');
  }

  /**
   * Grants permission to describe a role alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeRoleAlias.html
   */
  public toDescribeRoleAlias() {
    return this.to('DescribeRoleAlias');
  }

  /**
   * Grants permission to get information about a scheduled audit
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeScheduledAudit.html
   */
  public toDescribeScheduledAudit() {
    return this.to('DescribeScheduledAudit');
  }

  /**
   * Grants permission to get information about a Device Defender security profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeSecurityProfile.html
   */
  public toDescribeSecurityProfile() {
    return this.to('DescribeSecurityProfile');
  }

  /**
   * Grants permission to get information about the specified stream
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeStream.html
   */
  public toDescribeStream() {
    return this.to('DescribeStream');
  }

  /**
   * Grants permission to get information about the specified thing
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThing.html
   */
  public toDescribeThing() {
    return this.to('DescribeThing');
  }

  /**
   * Grants permission to get information about the specified thing group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingGroup.html
   */
  public toDescribeThingGroup() {
    return this.to('DescribeThingGroup');
  }

  /**
   * Grants permission to get information about the bulk thing registration task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingRegistrationTask.html
   */
  public toDescribeThingRegistrationTask() {
    return this.to('DescribeThingRegistrationTask');
  }

  /**
   * Grants permission to get information about the specified thing type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingType.html
   */
  public toDescribeThingType() {
    return this.to('DescribeThingType');
  }

  /**
   * Grants permission to describe a tunnel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_DescribeTunnel.html
   */
  public toDescribeTunnel() {
    return this.to('DescribeTunnel');
  }

  /**
   * Grants permission to detach a policy from the specified target
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPolicy.html
   */
  public toDetachPolicy() {
    return this.to('DetachPolicy');
  }

  /**
   * Grants permission to remove the specified policy from the specified certificate
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPrincipalPolicy.html
   */
  public toDetachPrincipalPolicy() {
    return this.to('DetachPrincipalPolicy');
  }

  /**
   * Grants permission to disassociate a Device Defender security profile from a thing group or from this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachSecurityProfile.html
   */
  public toDetachSecurityProfile() {
    return this.to('DetachSecurityProfile');
  }

  /**
   * Grants permission to detach the specified principal from the specified thing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachThingPrincipal.html
   */
  public toDetachThingPrincipal() {
    return this.to('DetachThingPrincipal');
  }

  /**
   * Grants permission to disable the specified rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DisableTopicRule.html
   */
  public toDisableTopicRule() {
    return this.to('DisableTopicRule');
  }

  /**
   * Grants permission to disassociate SBOM files from a package version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DisassociateSbomFromPackageVersion.html
   */
  public toDisassociateSbomFromPackageVersion() {
    return this.to('DisassociateSbomFromPackageVersion');
  }

  /**
   * Grants permission to enable the specified rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_EnableTopicRule.html
   */
  public toEnableTopicRule() {
    return this.to('EnableTopicRule');
  }

  /**
   * Grants permission to fetch a Device Defender's ML Detect Security Profile training model's status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetBehaviorModelTrainingSummaries.html
   */
  public toGetBehaviorModelTrainingSummaries() {
    return this.to('GetBehaviorModelTrainingSummaries');
  }

  /**
   * Grants permission to get buckets aggregation for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetBucketsAggregation.html
   */
  public toGetBucketsAggregation() {
    return this.to('GetBucketsAggregation');
  }

  /**
   * Grants permission to get cardinality for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetCardinality.html
   */
  public toGetCardinality() {
    return this.to('GetCardinality');
  }

  /**
   * Grants permission to get the information about the command
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetCommand.html
   */
  public toGetCommand() {
    return this.to('GetCommand');
  }

  /**
   * Grants permission to get the information of a command execution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetCommandExecution.html
   */
  public toGetCommandExecution() {
    return this.to('GetCommandExecution');
  }

  /**
   * Grants permission to get effective policies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetEffectivePolicies.html
   */
  public toGetEffectivePolicies() {
    return this.to('GetEffectivePolicies');
  }

  /**
   * Grants permission to get current fleet indexing configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetIndexingConfiguration.html
   */
  public toGetIndexingConfiguration() {
    return this.to('GetIndexingConfiguration');
  }

  /**
   * Grants permission to get a job document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetJobDocument.html
   */
  public toGetJobDocument() {
    return this.to('GetJobDocument');
  }

  /**
   * Grants permission to get the logging options
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetLoggingOptions.html
   */
  public toGetLoggingOptions() {
    return this.to('GetLoggingOptions');
  }

  /**
   * Grants permission to get the information about the OTA update job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetOTAUpdate.html
   */
  public toGetOTAUpdate() {
    return this.to('GetOTAUpdate');
  }

  /**
   * Grants permission to get the information about the package
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPackage.html
   */
  public toGetPackage() {
    return this.to('GetPackage');
  }

  /**
   * Grants permission to get the package configuration of the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPackageConfiguration.html
   */
  public toGetPackageConfiguration() {
    return this.to('GetPackageConfiguration');
  }

  /**
   * Grants permission to get the version of the package
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPackageVersion.html
   */
  public toGetPackageVersion() {
    return this.to('GetPackageVersion');
  }

  /**
   * Grants permission to get percentiles for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPercentiles.html
   */
  public toGetPercentiles() {
    return this.to('GetPercentiles');
  }

  /**
   * Grants permission to get information about the specified policy with the policy document of the default version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicy.html
   */
  public toGetPolicy() {
    return this.to('GetPolicy');
  }

  /**
   * Grants permission to get information about the specified policy version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicyVersion.html
   */
  public toGetPolicyVersion() {
    return this.to('GetPolicyVersion');
  }

  /**
   * Grants permission to get a registration code used to register a CA certificate with AWS IoT
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetRegistrationCode.html
   */
  public toGetRegistrationCode() {
    return this.to('GetRegistrationCode');
  }

  /**
   * Grants permission to get the retained message on the specified topic
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toGetRetainedMessage() {
    return this.to('GetRetainedMessage');
  }

  /**
   * Grants permission to get statistics for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetStatistics.html
   */
  public toGetStatistics() {
    return this.to('GetStatistics');
  }

  /**
   * Grants permission to get the thing's connectivity data
   *
   * Access Level: Read
   */
  public toGetThingConnectivityData() {
    return this.to('GetThingConnectivityData');
  }

  /**
   * Grants permission to get the thing shadow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toGetThingShadow() {
    return this.to('GetThingShadow');
  }

  /**
   * Grants permission to get information about the specified rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetTopicRule.html
   */
  public toGetTopicRule() {
    return this.to('GetTopicRule');
  }

  /**
   * Grants permission to get a TopicRuleDestination
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetTopicRuleDestination.html
   */
  public toGetTopicRuleDestination() {
    return this.to('GetTopicRuleDestination');
  }

  /**
   * Grants permission to get v2 logging options
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetV2LoggingOptions.html
   */
  public toGetV2LoggingOptions() {
    return this.to('GetV2LoggingOptions');
  }

  /**
   * Grants permission to list the active violations for a given Device Defender security profile or Thing
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListActiveViolations.html
   */
  public toListActiveViolations() {
    return this.to('ListActiveViolations');
  }

  /**
   * Grants permission to list the policies attached to the specified thing group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAttachedPolicies.html
   */
  public toListAttachedPolicies() {
    return this.to('ListAttachedPolicies');
  }

  /**
   * Grants permission to list the findings (results) of a Device Defender audit or of the audits performed during a specified time period
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditFindings.html
   */
  public toListAuditFindings() {
    return this.to('ListAuditFindings');
  }

  /**
   * Grants permission to get the status of audit mitigation action tasks that were executed
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsExecutions.html
   */
  public toListAuditMitigationActionsExecutions() {
    return this.to('ListAuditMitigationActionsExecutions');
  }

  /**
   * Grants permission to get a list of audit mitigation action tasks that match the specified filters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsTasks.html
   */
  public toListAuditMitigationActionsTasks() {
    return this.to('ListAuditMitigationActionsTasks');
  }

  /**
   * Grants permission to list your Device Defender audit suppressions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditSuppressions.html
   */
  public toListAuditSuppressions() {
    return this.to('ListAuditSuppressions');
  }

  /**
   * Grants permission to list the Device Defender audits that have been performed during a given time period
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditTasks.html
   */
  public toListAuditTasks() {
    return this.to('ListAuditTasks');
  }

  /**
   * Grants permission to list the authorizers registered in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuthorizers.html
   */
  public toListAuthorizers() {
    return this.to('ListAuthorizers');
  }

  /**
   * Grants permission to list all billing groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListBillingGroups.html
   */
  public toListBillingGroups() {
    return this.to('ListBillingGroups');
  }

  /**
   * Grants permission to list the CA certificates registered for your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCACertificates.html
   */
  public toListCACertificates() {
    return this.to('ListCACertificates');
  }

  /**
   * Grants permission to list certificate providers in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificateProviders.html
   */
  public toListCertificateProviders() {
    return this.to('ListCertificateProviders');
  }

  /**
   * Grants permission to list your certificates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificates.html
   */
  public toListCertificates() {
    return this.to('ListCertificates');
  }

  /**
   * Grants permission to list the device certificates signed by the specified CA certificate
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificatesByCA.html
   */
  public toListCertificatesByCA() {
    return this.to('ListCertificatesByCA');
  }

  /**
   * Grants permission to list commands executions in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCommandExecutions.html
   */
  public toListCommandExecutions() {
    return this.to('ListCommandExecutions');
  }

  /**
   * Grants permission to list commands in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCommands.html
   */
  public toListCommands() {
    return this.to('ListCommands');
  }

  /**
   * Grants permission to list the custom metrics in your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCustomMetrics.html
   */
  public toListCustomMetrics() {
    return this.to('ListCustomMetrics');
  }

  /**
   * Grants permission to lists mitigation actions executions for a Device Defender ML Detect Security Profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListDetectMitigationActionsExecutions.html
   */
  public toListDetectMitigationActionsExecutions() {
    return this.to('ListDetectMitigationActionsExecutions');
  }

  /**
   * Grants permission to list Device Defender ML Detect mitigation actions tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListDetectMitigationActionsTasks.html
   */
  public toListDetectMitigationActionsTasks() {
    return this.to('ListDetectMitigationActionsTasks');
  }

  /**
   * Grants permission to list the dimensions that are defined for your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListDimensions.html
   */
  public toListDimensions() {
    return this.to('ListDimensions');
  }

  /**
   * Grants permission to list the domain configuration created by your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListDomainConfigurations.html
   */
  public toListDomainConfigurations() {
    return this.to('ListDomainConfigurations');
  }

  /**
   * Grants permission to list the fleet metrics in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListFleetMetrics.html
   */
  public toListFleetMetrics() {
    return this.to('ListFleetMetrics');
  }

  /**
   * Grants permission to list all indices for fleet index
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListIndices.html
   */
  public toListIndices() {
    return this.to('ListIndices');
  }

  /**
   * Grants permission to list the job executions for a job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForJob.html
   */
  public toListJobExecutionsForJob() {
    return this.to('ListJobExecutionsForJob');
  }

  /**
   * Grants permission to list the job executions for the specified thing
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForThing.html
   */
  public toListJobExecutionsForThing() {
    return this.to('ListJobExecutionsForThing');
  }

  /**
   * Grants permission to list job templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobTemplates.html
   */
  public toListJobTemplates() {
    return this.to('ListJobTemplates');
  }

  /**
   * Grants permission to list jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobs.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * Grants permission to list managed job templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListManagedJobTemplates.html
   */
  public toListManagedJobTemplates() {
    return this.to('ListManagedJobTemplates');
  }

  /**
   * Grants permissions to list the metric values for a thing based on the metricName, and dimension if specified
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListMetricValues.html
   */
  public toListMetricValues() {
    return this.to('ListMetricValues');
  }

  /**
   * Grants permission to get a list of all mitigation actions that match the specified filter criteria
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListMitigationActions.html
   */
  public toListMitigationActions() {
    return this.to('ListMitigationActions');
  }

  /**
   * Grants permission to list all named shadows for a given thing
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListNamedShadowsForThing.html
   */
  public toListNamedShadowsForThing() {
    return this.to('ListNamedShadowsForThing');
  }

  /**
   * Grants permission to list OTA update jobs in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListOTAUpdates.html
   */
  public toListOTAUpdates() {
    return this.to('ListOTAUpdates');
  }

  /**
   * Grants permission to list certificates that are being transfered but not yet accepted
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListOutgoingCertificates.html
   */
  public toListOutgoingCertificates() {
    return this.to('ListOutgoingCertificates');
  }

  /**
   * Grants permission to list versions for a package in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPackageVersions.html
   */
  public toListPackageVersions() {
    return this.to('ListPackageVersions');
  }

  /**
   * Grants permission to list packages in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPackages.html
   */
  public toListPackages() {
    return this.to('ListPackages');
  }

  /**
   * Grants permission to list your policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicies.html
   */
  public toListPolicies() {
    return this.to('ListPolicies');
  }

  /**
   * Grants permission to list the principals associated with the specified policy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyPrincipals.html
   */
  public toListPolicyPrincipals() {
    return this.to('ListPolicyPrincipals');
  }

  /**
   * Grants permission to list the versions of the specified policy, and identifies the default version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyVersions.html
   */
  public toListPolicyVersions() {
    return this.to('ListPolicyVersions');
  }

  /**
   * Grants permission to list the policies attached to the specified principal. If you use an Amazon Cognito identity, the ID needs to be in Amazon Cognito Identity format
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalPolicies.html
   */
  public toListPrincipalPolicies() {
    return this.to('ListPrincipalPolicies');
  }

  /**
   * Grants permission to list the things associated with the specified principal
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalThings.html
   */
  public toListPrincipalThings() {
    return this.to('ListPrincipalThings');
  }

  /**
   * Grants permission to get a list of fleet provisioning template versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplateVersions.html
   */
  public toListProvisioningTemplateVersions() {
    return this.to('ListProvisioningTemplateVersions');
  }

  /**
   * Grants permission to list the fleet provisioning templates in your AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplates.html
   */
  public toListProvisioningTemplates() {
    return this.to('ListProvisioningTemplates');
  }

  /**
   * Grants permission to list related resources for a single audit finding
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListRelatedResourcesForAuditFinding.html
   */
  public toListRelatedResourcesForAuditFinding() {
    return this.to('ListRelatedResourcesForAuditFinding');
  }

  /**
   * Grants permission to list the retained messages for your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toListRetainedMessages() {
    return this.to('ListRetainedMessages');
  }

  /**
   * Grants permission to list role aliases
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListRoleAliases.html
   */
  public toListRoleAliases() {
    return this.to('ListRoleAliases');
  }

  /**
   * Grants permission to list SBOM validation results of a package version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListSbomValidationResults.html
   */
  public toListSbomValidationResults() {
    return this.to('ListSbomValidationResults');
  }

  /**
   * Grants permission to list all of your scheduled audits
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListScheduledAudits.html
   */
  public toListScheduledAudits() {
    return this.to('ListScheduledAudits');
  }

  /**
   * Grants permission to list the Device Defender security profiles you have created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html
   */
  public toListSecurityProfiles() {
    return this.to('ListSecurityProfiles');
  }

  /**
   * Grants permission to list the Device Defender security profiles attached to a target
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfilesForTarget.html
   */
  public toListSecurityProfilesForTarget() {
    return this.to('ListSecurityProfilesForTarget');
  }

  /**
   * Grants permission to list the streams in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListStreams.html
   */
  public toListStreams() {
    return this.to('ListStreams');
  }

  /**
   * Grants permission to list all tags for a given resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list targets for the specified policy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForPolicy.html
   */
  public toListTargetsForPolicy() {
    return this.to('ListTargetsForPolicy');
  }

  /**
   * Grants permission to list the targets associated with a given Device Defender security profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForSecurityProfile.html
   */
  public toListTargetsForSecurityProfile() {
    return this.to('ListTargetsForSecurityProfile');
  }

  /**
   * Grants permission to list all thing groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroups.html
   */
  public toListThingGroups() {
    return this.to('ListThingGroups');
  }

  /**
   * Grants permission to list thing groups to which the specified thing belongs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroupsForThing.html
   */
  public toListThingGroupsForThing() {
    return this.to('ListThingGroupsForThing');
  }

  /**
   * Grants permission to list the principals associated with the specified thing
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingPrincipals.html
   */
  public toListThingPrincipals() {
    return this.to('ListThingPrincipals');
  }

  /**
   * Grants permission to list information about bulk thing registration tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTaskReports.html
   */
  public toListThingRegistrationTaskReports() {
    return this.to('ListThingRegistrationTaskReports');
  }

  /**
   * Grants permission to list bulk thing registration tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTasks.html
   */
  public toListThingRegistrationTasks() {
    return this.to('ListThingRegistrationTasks');
  }

  /**
   * Grants permission to list all thing types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingTypes.html
   */
  public toListThingTypes() {
    return this.to('ListThingTypes');
  }

  /**
   * Grants permission to list all things
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThings.html
   */
  public toListThings() {
    return this.to('ListThings');
  }

  /**
   * Grants permission to list all things in the specified billing group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInBillingGroup.html
   */
  public toListThingsInBillingGroup() {
    return this.to('ListThingsInBillingGroup');
  }

  /**
   * Grants permission to list all things in the specified thing group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInThingGroup.html
   */
  public toListThingsInThingGroup() {
    return this.to('ListThingsInThingGroup');
  }

  /**
   * Grants permission to list all TopicRuleDestinations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTopicRuleDestinations.html
   */
  public toListTopicRuleDestinations() {
    return this.to('ListTopicRuleDestinations');
  }

  /**
   * Grants permission to list the rules for the specific topic
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTopicRules.html
   */
  public toListTopicRules() {
    return this.to('ListTopicRules');
  }

  /**
   * Grants permission to list tunnels
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_ListTunnels.html
   */
  public toListTunnels() {
    return this.to('ListTunnels');
  }

  /**
   * Grants permission to list the v2 logging levels
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListV2LoggingLevels.html
   */
  public toListV2LoggingLevels() {
    return this.to('ListV2LoggingLevels');
  }

  /**
   * Grants permission to list the Device Defender security profile violations discovered during the given time period
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListViolationEvents.html
   */
  public toListViolationEvents() {
    return this.to('ListViolationEvents');
  }

  /**
   * Grants permission to open a tunnel
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifThingGroupArn()
   * - .ifTunnelDestinationService()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_OpenTunnel.html
   */
  public toOpenTunnel() {
    return this.to('OpenTunnel');
  }

  /**
   * Grants permission to publish to the specified topic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toPublish() {
    return this.to('Publish');
  }

  /**
   * Grants permission to put verification state on a violation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_PutVerificationStateOnViolation.html
   */
  public toPutVerificationStateOnViolation() {
    return this.to('PutVerificationStateOnViolation');
  }

  /**
   * Grants permission to receive from the specified topic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toReceive() {
    return this.to('Receive');
  }

  /**
   * Grants permission to register a CA certificate with AWS IoT
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCACertificate.html
   */
  public toRegisterCACertificate() {
    return this.to('RegisterCACertificate');
  }

  /**
   * Grants permission to register a device certificate with AWS IoT
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificate.html
   */
  public toRegisterCertificate() {
    return this.to('RegisterCertificate');
  }

  /**
   * Grants permission to register a device certificate with AWS IoT without a registered CA (certificate authority)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificateWithoutCA.html
   */
  public toRegisterCertificateWithoutCA() {
    return this.to('RegisterCertificateWithoutCA');
  }

  /**
   * Grants permission to register your thing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterThing.html
   */
  public toRegisterThing() {
    return this.to('RegisterThing');
  }

  /**
   * Grants permission to reject a pending certificate transfer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RejectCertificateTransfer.html
   */
  public toRejectCertificateTransfer() {
    return this.to('RejectCertificateTransfer');
  }

  /**
   * Grants permission to remove thing from the specified billing group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromBillingGroup.html
   */
  public toRemoveThingFromBillingGroup() {
    return this.to('RemoveThingFromBillingGroup');
  }

  /**
   * Grants permission to remove thing from the specified thing group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromThingGroup.html
   */
  public toRemoveThingFromThingGroup() {
    return this.to('RemoveThingFromThingGroup');
  }

  /**
   * Grants permission to replace the specified rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ReplaceTopicRule.html
   */
  public toReplaceTopicRule() {
    return this.to('ReplaceTopicRule');
  }

  /**
   * Grants permission to publish a retained message to the specified topic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toRetainPublish() {
    return this.to('RetainPublish');
  }

  /**
   * Grants permission to rotate the access token of a tunnel
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifThingGroupArn()
   * - .ifTunnelDestinationService()
   * - .ifClientMode()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iot-secure-tunneling_RotateTunnelAccessToken.html
   */
  public toRotateTunnelAccessToken() {
    return this.to('RotateTunnelAccessToken');
  }

  /**
   * Grants permission to search IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SearchIndex.html
   */
  public toSearchIndex() {
    return this.to('SearchIndex');
  }

  /**
   * Grants permission to set the default authorizer. This will be used if a websocket connection is made without specifying an authorizer
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultAuthorizer.html
   */
  public toSetDefaultAuthorizer() {
    return this.to('SetDefaultAuthorizer');
  }

  /**
   * Grants permission to set the specified version of the specified policy as the policy's default (operative) version
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultPolicyVersion.html
   */
  public toSetDefaultPolicyVersion() {
    return this.to('SetDefaultPolicyVersion');
  }

  /**
   * Grants permission to set the logging options
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetLoggingOptions.html
   */
  public toSetLoggingOptions() {
    return this.to('SetLoggingOptions');
  }

  /**
   * Grants permission to set the v2 logging level
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingLevel.html
   */
  public toSetV2LoggingLevel() {
    return this.to('SetV2LoggingLevel');
  }

  /**
   * Grants permission to set the v2 logging options
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingOptions.html
   */
  public toSetV2LoggingOptions() {
    return this.to('SetV2LoggingOptions');
  }

  /**
   * Grants permission to start a task that applies a set of mitigation actions to the specified target
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartAuditMitigationActionsTask.html
   */
  public toStartAuditMitigationActionsTask() {
    return this.to('StartAuditMitigationActionsTask');
  }

  /**
   * Grants permission to start a new command execution
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCommandExecutionParameterString()
   * - .ifCommandExecutionParameterBoolean()
   * - .ifCommandExecutionParameterNumber()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iot-jobs-data_StartCommandExecution.html
   */
  public toStartCommandExecution() {
    return this.to('StartCommandExecution');
  }

  /**
   * Grants permission to start a Device Defender ML Detect mitigation actions task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartDetectMitigationActionsTask.html
   */
  public toStartDetectMitigationActionsTask() {
    return this.to('StartDetectMitigationActionsTask');
  }

  /**
   * Grants permission to start an on-demand Device Defender audit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartOnDemandAuditTask.html
   */
  public toStartOnDemandAuditTask() {
    return this.to('StartOnDemandAuditTask');
  }

  /**
   * Grants permission to start a bulk thing registration task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartThingRegistrationTask.html
   */
  public toStartThingRegistrationTask() {
    return this.to('StartThingRegistrationTask');
  }

  /**
   * Grants permission to stop a bulk thing registration task
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StopThingRegistrationTask.html
   */
  public toStopThingRegistrationTask() {
    return this.to('StopThingRegistrationTask');
  }

  /**
   * Grants permission to subscribe to the specified TopicFilter
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toSubscribe() {
    return this.to('Subscribe');
  }

  /**
   * Grants permission to tag a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to test the policies evaluation for group policies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_TestAuthorization.html
   */
  public toTestAuthorization() {
    return this.to('TestAuthorization');
  }

  /**
   * Grants permission to test invoke the specified custom authorizer for testing purposes
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_TestInvokeAuthorizer.html
   */
  public toTestInvokeAuthorizer() {
    return this.to('TestInvokeAuthorizer');
  }

  /**
   * Grants permission to transfer the specified certificate to the specified AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_TransferCertificate.html
   */
  public toTransferCertificate() {
    return this.to('TransferCertificate');
  }

  /**
   * Grants permission to untag a specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to configure or reconfigure the Device Defender audit settings for this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAccountAuditConfiguration.html
   */
  public toUpdateAccountAuditConfiguration() {
    return this.to('UpdateAccountAuditConfiguration');
  }

  /**
   * Grants permission to update a Device Defender audit suppression
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAuditSuppression.html
   */
  public toUpdateAuditSuppression() {
    return this.to('UpdateAuditSuppression');
  }

  /**
   * Grants permission to update an authorizer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAuthorizer.html
   */
  public toUpdateAuthorizer() {
    return this.to('UpdateAuthorizer');
  }

  /**
   * Grants permission to update information associated with the specified billing group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateBillingGroup.html
   */
  public toUpdateBillingGroup() {
    return this.to('UpdateBillingGroup');
  }

  /**
   * Grants permission to update a registered CA certificate
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCACertificate.html
   */
  public toUpdateCACertificate() {
    return this.to('UpdateCACertificate');
  }

  /**
   * Grants permission to update the status of the specified certificate. This operation is idempotent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCertificate.html
   */
  public toUpdateCertificate() {
    return this.to('UpdateCertificate');
  }

  /**
   * Grants permission to update a certificate provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCertificateProvider.html
   */
  public toUpdateCertificateProvider() {
    return this.to('UpdateCertificateProvider');
  }

  /**
   * Grants permission to update a command
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCommand.html
   */
  public toUpdateCommand() {
    return this.to('UpdateCommand');
  }

  /**
   * Grants permission to update the specified custom metric
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCustomMetric.html
   */
  public toUpdateCustomMetric() {
    return this.to('UpdateCustomMetric');
  }

  /**
   * Grants permission to update the definition for a dimension
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDimension.html
   */
  public toUpdateDimension() {
    return this.to('UpdateDimension');
  }

  /**
   * Grants permission to update a domain configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDomainConfiguration.html
   */
  public toUpdateDomainConfiguration() {
    return this.to('UpdateDomainConfiguration');
  }

  /**
   * Grants permission to update a Dynamic Thing Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDynamicThingGroup.html
   */
  public toUpdateDynamicThingGroup() {
    return this.to('UpdateDynamicThingGroup');
  }

  /**
   * Grants permission to update event configurations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateEventConfigurations.html
   */
  public toUpdateEventConfigurations() {
    return this.to('UpdateEventConfigurations');
  }

  /**
   * Grants permission to update a fleet metric
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateFleetMetric.html
   */
  public toUpdateFleetMetric() {
    return this.to('UpdateFleetMetric');
  }

  /**
   * Grants permission to update fleet indexing configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateIndexingConfiguration.html
   */
  public toUpdateIndexingConfiguration() {
    return this.to('UpdateIndexingConfiguration');
  }

  /**
   * Grants permission to update a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateJob.html
   */
  public toUpdateJob() {
    return this.to('UpdateJob');
  }

  /**
   * Grants permission to update the definition for the specified mitigation action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateMitigationAction.html
   */
  public toUpdateMitigationAction() {
    return this.to('UpdateMitigationAction');
  }

  /**
   * Grants permission to update a package
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iot:GetIndexingConfiguration
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdatePackage.html
   */
  public toUpdatePackage() {
    return this.to('UpdatePackage');
  }

  /**
   * Grants permission to update the package configuration of the account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdatePackageConfiguration.html
   */
  public toUpdatePackageConfiguration() {
    return this.to('UpdatePackageConfiguration');
  }

  /**
   * Grants permission to update the version of the specified package
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iot:GetIndexingConfiguration
   * - s3:GetObjectVersion
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdatePackageVersion.html
   */
  public toUpdatePackageVersion() {
    return this.to('UpdatePackageVersion');
  }

  /**
   * Grants permission to update a fleet provisioning template
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateProvisioningTemplate.html
   */
  public toUpdateProvisioningTemplate() {
    return this.to('UpdateProvisioningTemplate');
  }

  /**
   * Grants permission to update the role alias
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateRoleAlias.html
   */
  public toUpdateRoleAlias() {
    return this.to('UpdateRoleAlias');
  }

  /**
   * Grants permission to update a scheduled audit, including what checks are performed and how often the audit takes place
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateScheduledAudit.html
   */
  public toUpdateScheduledAudit() {
    return this.to('UpdateScheduledAudit');
  }

  /**
   * Grants permission to update a Device Defender security profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateSecurityProfile.html
   */
  public toUpdateSecurityProfile() {
    return this.to('UpdateSecurityProfile');
  }

  /**
   * Grants permission to update the data for a stream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateStream.html
   */
  public toUpdateStream() {
    return this.to('UpdateStream');
  }

  /**
   * Grants permission to update information associated with the specified thing
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThing.html
   */
  public toUpdateThing() {
    return this.to('UpdateThing');
  }

  /**
   * Grants permission to update information associated with the specified thing group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroup.html
   */
  public toUpdateThingGroup() {
    return this.to('UpdateThingGroup');
  }

  /**
   * Grants permission to update the thing groups to which the thing belongs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroupsForThing.html
   */
  public toUpdateThingGroupsForThing() {
    return this.to('UpdateThingGroupsForThing');
  }

  /**
   * Grants permission to update the thing shadow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toUpdateThingShadow() {
    return this.to('UpdateThingShadow');
  }

  /**
   * Grants permission to update information associated with the specified thing type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingType.html
   */
  public toUpdateThingType() {
    return this.to('UpdateThingType');
  }

  /**
   * Grants permission to update a TopicRuleDestination
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateTopicRuleDestination.html
   */
  public toUpdateTopicRuleDestination() {
    return this.to('UpdateTopicRuleDestination');
  }

  /**
   * Grants permission to validate a Device Defender security profile behaviors specification
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ValidateSecurityProfileBehaviors.html
   */
  public toValidateSecurityProfileBehaviors() {
    return this.to('ValidateSecurityProfileBehaviors');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptCertificateTransfer',
      'AddThingToBillingGroup',
      'AddThingToThingGroup',
      'AssociateSbomWithPackageVersion',
      'AssociateTargetsWithJob',
      'AttachSecurityProfile',
      'AttachThingPrincipal',
      'CancelAuditMitigationActionsTask',
      'CancelAuditTask',
      'CancelCertificateTransfer',
      'CancelDetectMitigationActionsTask',
      'CancelJob',
      'CancelJobExecution',
      'ClearDefaultAuthorizer',
      'CloseTunnel',
      'ConfirmTopicRuleDestination',
      'Connect',
      'CreateAuditSuppression',
      'CreateAuthorizer',
      'CreateBillingGroup',
      'CreateCertificateFromCsr',
      'CreateCertificateProvider',
      'CreateCommand',
      'CreateCustomMetric',
      'CreateDimension',
      'CreateDomainConfiguration',
      'CreateDynamicThingGroup',
      'CreateFleetMetric',
      'CreateJob',
      'CreateJobTemplate',
      'CreateKeysAndCertificate',
      'CreateMitigationAction',
      'CreateOTAUpdate',
      'CreatePackage',
      'CreatePackageVersion',
      'CreatePolicy',
      'CreatePolicyVersion',
      'CreateProvisioningClaim',
      'CreateProvisioningTemplate',
      'CreateProvisioningTemplateVersion',
      'CreateRoleAlias',
      'CreateScheduledAudit',
      'CreateSecurityProfile',
      'CreateStream',
      'CreateThing',
      'CreateThingGroup',
      'CreateThingType',
      'CreateTopicRule',
      'CreateTopicRuleDestination',
      'DeleteAccountAuditConfiguration',
      'DeleteAuditSuppression',
      'DeleteAuthorizer',
      'DeleteBillingGroup',
      'DeleteCACertificate',
      'DeleteCertificate',
      'DeleteCertificateProvider',
      'DeleteCommand',
      'DeleteCommandExecution',
      'DeleteCustomMetric',
      'DeleteDimension',
      'DeleteDomainConfiguration',
      'DeleteDynamicThingGroup',
      'DeleteFleetMetric',
      'DeleteJob',
      'DeleteJobExecution',
      'DeleteJobTemplate',
      'DeleteMitigationAction',
      'DeleteOTAUpdate',
      'DeletePackage',
      'DeletePackageVersion',
      'DeletePolicy',
      'DeletePolicyVersion',
      'DeleteProvisioningTemplate',
      'DeleteProvisioningTemplateVersion',
      'DeleteRegistrationCode',
      'DeleteRoleAlias',
      'DeleteScheduledAudit',
      'DeleteSecurityProfile',
      'DeleteStream',
      'DeleteThing',
      'DeleteThingGroup',
      'DeleteThingShadow',
      'DeleteThingType',
      'DeleteTopicRule',
      'DeleteTopicRuleDestination',
      'DeleteV2LoggingLevel',
      'DeprecateThingType',
      'DetachSecurityProfile',
      'DetachThingPrincipal',
      'DisableTopicRule',
      'DisassociateSbomFromPackageVersion',
      'EnableTopicRule',
      'OpenTunnel',
      'Publish',
      'PutVerificationStateOnViolation',
      'Receive',
      'RegisterCACertificate',
      'RegisterCertificate',
      'RegisterCertificateWithoutCA',
      'RegisterThing',
      'RejectCertificateTransfer',
      'RemoveThingFromBillingGroup',
      'RemoveThingFromThingGroup',
      'ReplaceTopicRule',
      'RetainPublish',
      'RotateTunnelAccessToken',
      'SetLoggingOptions',
      'SetV2LoggingLevel',
      'SetV2LoggingOptions',
      'StartAuditMitigationActionsTask',
      'StartCommandExecution',
      'StartDetectMitigationActionsTask',
      'StartOnDemandAuditTask',
      'StartThingRegistrationTask',
      'StopThingRegistrationTask',
      'Subscribe',
      'TransferCertificate',
      'UpdateAccountAuditConfiguration',
      'UpdateAuditSuppression',
      'UpdateAuthorizer',
      'UpdateBillingGroup',
      'UpdateCACertificate',
      'UpdateCertificate',
      'UpdateCertificateProvider',
      'UpdateCommand',
      'UpdateCustomMetric',
      'UpdateDimension',
      'UpdateDomainConfiguration',
      'UpdateDynamicThingGroup',
      'UpdateEventConfigurations',
      'UpdateFleetMetric',
      'UpdateIndexingConfiguration',
      'UpdateJob',
      'UpdateMitigationAction',
      'UpdatePackage',
      'UpdatePackageConfiguration',
      'UpdatePackageVersion',
      'UpdateProvisioningTemplate',
      'UpdateRoleAlias',
      'UpdateScheduledAudit',
      'UpdateSecurityProfile',
      'UpdateStream',
      'UpdateThing',
      'UpdateThingGroup',
      'UpdateThingGroupsForThing',
      'UpdateThingShadow',
      'UpdateThingType',
      'UpdateTopicRuleDestination'
    ],
    'Permissions management': [
      'AttachPolicy',
      'AttachPrincipalPolicy',
      'DetachPolicy',
      'DetachPrincipalPolicy',
      'SetDefaultAuthorizer',
      'SetDefaultPolicyVersion'
    ],
    Read: [
      'DescribeAccountAuditConfiguration',
      'DescribeAuditFinding',
      'DescribeAuditMitigationActionsTask',
      'DescribeAuditSuppression',
      'DescribeAuditTask',
      'DescribeAuthorizer',
      'DescribeBillingGroup',
      'DescribeCACertificate',
      'DescribeCertificate',
      'DescribeCertificateProvider',
      'DescribeCustomMetric',
      'DescribeDefaultAuthorizer',
      'DescribeDetectMitigationActionsTask',
      'DescribeDimension',
      'DescribeDomainConfiguration',
      'DescribeEndpoint',
      'DescribeEventConfigurations',
      'DescribeFleetMetric',
      'DescribeIndex',
      'DescribeJob',
      'DescribeJobExecution',
      'DescribeJobTemplate',
      'DescribeManagedJobTemplate',
      'DescribeMitigationAction',
      'DescribeProvisioningTemplate',
      'DescribeProvisioningTemplateVersion',
      'DescribeRoleAlias',
      'DescribeScheduledAudit',
      'DescribeSecurityProfile',
      'DescribeStream',
      'DescribeThing',
      'DescribeThingGroup',
      'DescribeThingRegistrationTask',
      'DescribeThingType',
      'DescribeTunnel',
      'GetBucketsAggregation',
      'GetCardinality',
      'GetCommand',
      'GetCommandExecution',
      'GetEffectivePolicies',
      'GetIndexingConfiguration',
      'GetJobDocument',
      'GetLoggingOptions',
      'GetOTAUpdate',
      'GetPackage',
      'GetPackageConfiguration',
      'GetPackageVersion',
      'GetPercentiles',
      'GetPolicy',
      'GetPolicyVersion',
      'GetRegistrationCode',
      'GetRetainedMessage',
      'GetStatistics',
      'GetThingConnectivityData',
      'GetThingShadow',
      'GetTopicRule',
      'GetTopicRuleDestination',
      'GetV2LoggingOptions',
      'ListTagsForResource',
      'SearchIndex',
      'TestAuthorization',
      'TestInvokeAuthorizer',
      'ValidateSecurityProfileBehaviors'
    ],
    List: [
      'GetBehaviorModelTrainingSummaries',
      'ListActiveViolations',
      'ListAttachedPolicies',
      'ListAuditFindings',
      'ListAuditMitigationActionsExecutions',
      'ListAuditMitigationActionsTasks',
      'ListAuditSuppressions',
      'ListAuditTasks',
      'ListAuthorizers',
      'ListBillingGroups',
      'ListCACertificates',
      'ListCertificateProviders',
      'ListCertificates',
      'ListCertificatesByCA',
      'ListCommandExecutions',
      'ListCommands',
      'ListCustomMetrics',
      'ListDetectMitigationActionsExecutions',
      'ListDetectMitigationActionsTasks',
      'ListDimensions',
      'ListDomainConfigurations',
      'ListFleetMetrics',
      'ListIndices',
      'ListJobExecutionsForJob',
      'ListJobExecutionsForThing',
      'ListJobTemplates',
      'ListJobs',
      'ListManagedJobTemplates',
      'ListMetricValues',
      'ListMitigationActions',
      'ListNamedShadowsForThing',
      'ListOTAUpdates',
      'ListOutgoingCertificates',
      'ListPackageVersions',
      'ListPackages',
      'ListPolicies',
      'ListPolicyPrincipals',
      'ListPolicyVersions',
      'ListPrincipalPolicies',
      'ListPrincipalThings',
      'ListProvisioningTemplateVersions',
      'ListProvisioningTemplates',
      'ListRelatedResourcesForAuditFinding',
      'ListRetainedMessages',
      'ListRoleAliases',
      'ListSbomValidationResults',
      'ListScheduledAudits',
      'ListSecurityProfiles',
      'ListSecurityProfilesForTarget',
      'ListStreams',
      'ListTargetsForPolicy',
      'ListTargetsForSecurityProfile',
      'ListThingGroups',
      'ListThingGroupsForThing',
      'ListThingPrincipals',
      'ListThingRegistrationTaskReports',
      'ListThingRegistrationTasks',
      'ListThingTypes',
      'ListThings',
      'ListThingsInBillingGroup',
      'ListThingsInThingGroup',
      'ListTopicRuleDestinations',
      'ListTopicRules',
      'ListTunnels',
      'ListV2LoggingLevels',
      'ListViolationEvents'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type client to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-message-broker.html
   *
   * @param clientId - Identifier for the clientId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onClient(clientId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:client/${ clientId }`);
  }

  /**
   * Adds a resource of type index to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-indexing.html
   *
   * @param indexName - Identifier for the indexName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onIndex(indexName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:index/${ indexName }`);
  }

  /**
   * Adds a resource of type fleetmetric to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-indexing.html
   *
   * @param fleetMetricName - Identifier for the fleetMetricName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFleetmetric(fleetMetricName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:fleetmetric/${ fleetMetricName }`);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-jobs.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJob(jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:job/${ jobId }`);
  }

  /**
   * Adds a resource of type jobtemplate to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/job-templates.html
   *
   * @param jobTemplateId - Identifier for the jobTemplateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJobtemplate(jobTemplateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:jobtemplate/${ jobTemplateId }`);
  }

  /**
   * Adds a resource of type tunnel to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-tunnels.html
   *
   * @param tunnelId - Identifier for the tunnelId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTunnel(tunnelId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:tunnel/${ tunnelId }`);
  }

  /**
   * Adds a resource of type thing to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html
   *
   * @param thingName - Identifier for the thingName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onThing(thingName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:thing/${ thingName }`);
  }

  /**
   * Adds a resource of type thinggroup to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-groups.html
   *
   * @param thingGroupName - Identifier for the thingGroupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onThinggroup(thingGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:thinggroup/${ thingGroupName }`);
  }

  /**
   * Adds a resource of type billinggroup to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/billing-groups.html
   *
   * @param billingGroupName - Identifier for the billingGroupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBillinggroup(billingGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:billinggroup/${ billingGroupName }`);
  }

  /**
   * Adds a resource of type dynamicthinggroup to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/dynamic-thing-groups.html
   *
   * @param thingGroupName - Identifier for the thingGroupName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDynamicthinggroup(thingGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:thinggroup/${ thingGroupName }`);
  }

  /**
   * Adds a resource of type thingtype to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-types.html
   *
   * @param thingTypeName - Identifier for the thingTypeName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onThingtype(thingTypeName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:thingtype/${ thingTypeName }`);
  }

  /**
   * Adds a resource of type topic to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-message-broker.html
   *
   * @param topicName - Identifier for the topicName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTopic(topicName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:topic/${ topicName }`);
  }

  /**
   * Adds a resource of type topicfilter to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/topics.html
   *
   * @param topicFilter - Identifier for the topicFilter.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTopicfilter(topicFilter: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:topicfilter/${ topicFilter }`);
  }

  /**
   * Adds a resource of type rolealias to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html
   *
   * @param roleAlias - Identifier for the roleAlias.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRolealias(roleAlias: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:rolealias/${ roleAlias }`);
  }

  /**
   * Adds a resource of type authorizer to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/custom-authorizer.html
   *
   * @param authorizerName - Identifier for the authorizerName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAuthorizer(authorizerName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:authorizer/${ authorizerName }`);
  }

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-policies.html
   *
   * @param policyName - Identifier for the policyName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicy(policyName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:policy/${ policyName }`);
  }

  /**
   * Adds a resource of type cert to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/x509-certs.html
   *
   * @param certificate - Identifier for the certificate.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCert(certificate: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cert/${ certificate }`);
  }

  /**
   * Adds a resource of type cacert to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/x509-certs.html
   *
   * @param cACertificate - Identifier for the cACertificate.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCacert(cACertificate: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cacert/${ cACertificate }`);
  }

  /**
   * Adds a resource of type stream to the statement
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ota-dev.html
   *
   * @param streamId - Identifier for the streamId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStream(streamId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:stream/${ streamId }`);
  }

  /**
   * Adds a resource of type otaupdate to the statement
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ota-dev.html
   *
   * @param otaUpdateId - Identifier for the otaUpdateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOtaupdate(otaUpdateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:otaupdate/${ otaUpdateId }`);
  }

  /**
   * Adds a resource of type scheduledaudit to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-audit.html
   *
   * @param scheduleName - Identifier for the scheduleName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onScheduledaudit(scheduleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:scheduledaudit/${ scheduleName }`);
  }

  /**
   * Adds a resource of type mitigationaction to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html
   *
   * @param mitigationActionName - Identifier for the mitigationActionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMitigationaction(mitigationActionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:mitigationaction/${ mitigationActionName }`);
  }

  /**
   * Adds a resource of type securityprofile to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html
   *
   * @param securityProfileName - Identifier for the securityProfileName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecurityprofile(securityProfileName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:securityprofile/${ securityProfileName }`);
  }

  /**
   * Adds a resource of type custommetric to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html
   *
   * @param metricName - Identifier for the metricName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustommetric(metricName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:custommetric/${ metricName }`);
  }

  /**
   * Adds a resource of type dimension to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html
   *
   * @param dimensionName - Identifier for the dimensionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDimension(dimensionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:dimension/${ dimensionName }`);
  }

  /**
   * Adds a resource of type rule to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html
   *
   * @param ruleName - Identifier for the ruleName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRule(ruleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:rule/${ ruleName }`);
  }

  /**
   * Adds a resource of type destination to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/rule-destination.html
   *
   * @param destinationType - Identifier for the destinationType.
   * @param uuid - Identifier for the uuid.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDestination(destinationType: string, uuid: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ruledestination/${ destinationType }/${ uuid }`);
  }

  /**
   * Adds a resource of type provisioningtemplate to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html
   *
   * @param provisioningTemplate - Identifier for the provisioningTemplate.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProvisioningtemplate(provisioningTemplate: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:provisioningtemplate/${ provisioningTemplate }`);
  }

  /**
   * Adds a resource of type domainconfiguration to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/domain-configuration.html
   *
   * @param domainConfigurationName - Identifier for the domainConfigurationName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomainconfiguration(domainConfigurationName: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domainconfiguration/${ domainConfigurationName }/${ id }`);
  }

  /**
   * Adds a resource of type package to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/software-package-catalog.html
   *
   * @param packageName - Identifier for the packageName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPackage(packageName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:package/${ packageName }`);
  }

  /**
   * Adds a resource of type packageversion to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/software-package-catalog.html
   *
   * @param packageName - Identifier for the packageName.
   * @param versionName - Identifier for the versionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPackageversion(packageName: string, versionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:package/${ packageName }/version/${ versionName }`);
  }

  /**
   * Adds a resource of type certificateprovider to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/provisioning-cert-provider.html
   *
   * @param certificateProviderName - Identifier for the certificateProviderName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCertificateprovider(certificateProviderName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:certificateprovider/${ certificateProviderName }`);
  }

  /**
   * Adds a resource of type command to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-remote-command.html
   *
   * @param commandId - Identifier for the commandId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCommand(commandId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iot:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:command/${ commandId }`);
  }

  /**
   * Filters access by a tag key that is present in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html
   *
   * Applies to actions:
   * - .toCreateAuthorizer()
   * - .toCreateBillingGroup()
   * - .toCreateCertificateProvider()
   * - .toCreateCommand()
   * - .toCreateCustomMetric()
   * - .toCreateDimension()
   * - .toCreateDomainConfiguration()
   * - .toCreateDynamicThingGroup()
   * - .toCreateFleetMetric()
   * - .toCreateJob()
   * - .toCreateJobTemplate()
   * - .toCreateMitigationAction()
   * - .toCreateOTAUpdate()
   * - .toCreatePackage()
   * - .toCreatePackageVersion()
   * - .toCreatePolicy()
   * - .toCreateProvisioningTemplate()
   * - .toCreateRoleAlias()
   * - .toCreateScheduledAudit()
   * - .toCreateSecurityProfile()
   * - .toCreateStream()
   * - .toCreateThingGroup()
   * - .toCreateThingType()
   * - .toCreateTopicRule()
   * - .toOpenTunnel()
   * - .toRegisterCACertificate()
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
   * Filters access by a tag key component of a tag associated to the IoT resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html
   *
   * Applies to resource types:
   * - fleetmetric
   * - job
   * - jobtemplate
   * - tunnel
   * - thinggroup
   * - billinggroup
   * - dynamicthinggroup
   * - thingtype
   * - rolealias
   * - authorizer
   * - policy
   * - cacert
   * - stream
   * - otaupdate
   * - scheduledaudit
   * - mitigationaction
   * - securityprofile
   * - custommetric
   * - dimension
   * - rule
   * - provisioningtemplate
   * - domainconfiguration
   * - package
   * - packageversion
   * - certificateprovider
   * - command
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys associated to the IoT resource in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html
   *
   * Applies to actions:
   * - .toCreateAuthorizer()
   * - .toCreateBillingGroup()
   * - .toCreateCertificateProvider()
   * - .toCreateCommand()
   * - .toCreateCustomMetric()
   * - .toCreateDimension()
   * - .toCreateDomainConfiguration()
   * - .toCreateDynamicThingGroup()
   * - .toCreateFleetMetric()
   * - .toCreateJob()
   * - .toCreateJobTemplate()
   * - .toCreateMitigationAction()
   * - .toCreateOTAUpdate()
   * - .toCreatePackage()
   * - .toCreatePackageVersion()
   * - .toCreatePolicy()
   * - .toCreateProvisioningTemplate()
   * - .toCreateRoleAlias()
   * - .toCreateScheduledAudit()
   * - .toCreateSecurityProfile()
   * - .toCreateStream()
   * - .toCreateThingGroup()
   * - .toCreateThingType()
   * - .toCreateTopicRule()
   * - .toOpenTunnel()
   * - .toRegisterCACertificate()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the mode of the client for IoT Tunnel
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html
   *
   * Applies to actions:
   * - .toRotateTunnelAccessToken()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifClientMode(value: string | string[], operator?: Operator | string) {
    return this.if(`ClientMode`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the command parameter name and boolean value
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html
   *
   * Applies to actions:
   * - .toStartCommandExecution()
   *
   * @param commandParameterName The tag key to check
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifCommandExecutionParameterBoolean(commandParameterName: string, value?: boolean) {
    return this.if(`CommandExecutionParameterBoolean/${ commandParameterName }`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by the command parameter name and numeric value
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html
   *
   * Applies to actions:
   * - .toStartCommandExecution()
   *
   * @param commandParameterName The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifCommandExecutionParameterNumber(commandParameterName: string, value: number | number[], operator?: Operator | string) {
    return this.if(`CommandExecutionParameterNumber/${ commandParameterName }`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the command parameter name and string value
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html
   *
   * Applies to actions:
   * - .toStartCommandExecution()
   *
   * @param commandParameterName The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCommandExecutionParameterString(commandParameterName: string, value: string | string[], operator?: Operator | string) {
    return this.if(`CommandExecutionParameterString/${ commandParameterName }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a flag indicating whether or not to also delete an IoT Tunnel immediately when making iot:CloseTunnel request
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html
   *
   * Applies to actions:
   * - .toCloseTunnel()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifDelete(value?: boolean) {
    return this.if(`Delete`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by based on the domain name of an IoT DomainConfiguration
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html
   *
   * Applies to actions:
   * - .toCreateDomainConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDomainName(value: string | string[], operator?: Operator | string) {
    return this.if(`DomainName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of IoT Thing Group ARNs that the destination IoT Thing belongs to for an IoT Tunnel
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html
   *
   * Applies to actions:
   * - .toOpenTunnel()
   * - .toRotateTunnelAccessToken()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifThingGroupArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ThingGroupArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by a list of destination services for an IoT Tunnel
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html
   *
   * Applies to actions:
   * - .toOpenTunnel()
   * - .toRotateTunnelAccessToken()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTunnelDestinationService(value: string | string[], operator?: Operator | string) {
    return this.if(`TunnelDestinationService`, value, operator ?? 'StringLike');
  }
}
