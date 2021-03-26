import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Accepts a pending certificate transfer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AcceptCertificateTransfer.html
   */
  public toAcceptCertificateTransfer() {
    return this.to('AcceptCertificateTransfer');
  }

  /**
   * Adds a thing to the specified billing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToBillingGroup.html
   */
  public toAddThingToBillingGroup() {
    return this.to('AddThingToBillingGroup');
  }

  /**
   * Adds a thing to the specified thing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToThingGroup.html
   */
  public toAddThingToThingGroup() {
    return this.to('AddThingToThingGroup');
  }

  /**
   * Associates a group with a continuous job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AssociateTargetsWithJob.html
   */
  public toAssociateTargetsWithJob() {
    return this.to('AssociateTargetsWithJob');
  }

  /**
   * Attaches a policy to the specified target.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPolicy.html
   */
  public toAttachPolicy() {
    return this.to('AttachPolicy');
  }

  /**
   * Attaches the specified policy to the specified principal (certificate or other credential).
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPrincipalPolicy.html
   */
  public toAttachPrincipalPolicy() {
    return this.to('AttachPrincipalPolicy');
  }

  /**
   * Associates a Device Defender security profile with a thing group or with this account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachSecurityProfile.html
   */
  public toAttachSecurityProfile() {
    return this.to('AttachSecurityProfile');
  }

  /**
   * Attaches the specified principal to the specified thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachThingPrincipal.html
   */
  public toAttachThingPrincipal() {
    return this.to('AttachThingPrincipal');
  }

  /**
   * Cancels a mitigation action task that is in progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditMitigationActionsTask.html
   */
  public toCancelAuditMitigationActionsTask() {
    return this.to('CancelAuditMitigationActionsTask');
  }

  /**
   * Cancels an audit that is in progress. The audit can be either scheduled or on-demand.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditTask.html
   */
  public toCancelAuditTask() {
    return this.to('CancelAuditTask');
  }

  /**
   * Cancels a pending transfer for the specified certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelCertificateTransfer.html
   */
  public toCancelCertificateTransfer() {
    return this.to('CancelCertificateTransfer');
  }

  /**
   * Cancels a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJob.html
   */
  public toCancelJob() {
    return this.to('CancelJob');
  }

  /**
   * Cancels a job execution on a particular device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJobExecution.html
   */
  public toCancelJobExecution() {
    return this.to('CancelJobExecution');
  }

  /**
   * Clears the default authorizer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ClearDefaultAuthorizer.html
   */
  public toClearDefaultAuthorizer() {
    return this.to('ClearDefaultAuthorizer');
  }

  /**
   * Closes a tunnel.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifDelete()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CloseTunnel.html
   */
  public toCloseTunnel() {
    return this.to('CloseTunnel');
  }

  /**
   * Connect as the specified client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toConnect() {
    return this.to('Connect');
  }

  /**
   * Creates a Device Defender audit suppression.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateAuditSuppression.html
   */
  public toCreateAuditSuppression() {
    return this.to('CreateAuditSuppression');
  }

  /**
   * Creates an authorizer.
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
   * Creates a billing group.
   *
   * Access Level: Tagging
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
   * Creates an X.509 certificate using the specified certificate signing request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCertificateFromCsr.html
   */
  public toCreateCertificateFromCsr() {
    return this.to('CreateCertificateFromCsr');
  }

  /**
   * Defines a dimension that can be used to to limit the scope of a metric used in a security profile.
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
   * Creates a domain configuration.
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
   * Creates a Dynamic Thing Group
   *
   * Access Level: Tagging
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
   * Creates a fleet metric
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/iot-indexing.html
   */
  public toCreateFleetMetric() {
    return this.to('CreateFleetMetric');
  }

  /**
   * Creates a job.
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
   * Creates a 2048 bit RSA key pair and issues an X.509 certificate using the issued public key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateKeysAndCertificate.html
   */
  public toCreateKeysAndCertificate() {
    return this.to('CreateKeysAndCertificate');
  }

  /**
   * Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask.
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
   * Creates an OTA update job.
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
   * Creates an AWS IoT policy.
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
   * Creates a new version of the specified AWS IoT policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicyVersion.html
   */
  public toCreatePolicyVersion() {
    return this.to('CreatePolicyVersion');
  }

  /**
   * Creates a provisioning claim.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningClaim.html
   */
  public toCreateProvisioningClaim() {
    return this.to('CreateProvisioningClaim');
  }

  /**
   * Creates a fleet provisioning template.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplate.html
   */
  public toCreateProvisioningTemplate() {
    return this.to('CreateProvisioningTemplate');
  }

  /**
   * Creates a new version of a fleet provisioning template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplateVersion.html
   */
  public toCreateProvisioningTemplateVersion() {
    return this.to('CreateProvisioningTemplateVersion');
  }

  /**
   * Creates a role alias.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateRoleAlias.html
   */
  public toCreateRoleAlias() {
    return this.to('CreateRoleAlias');
  }

  /**
   * Creates a scheduled audit that is run at a specified time interval.
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
   * Creates a Device Defender security profile.
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
   * Creates a new AWS IoT stream
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
   * Creates a thing in the thing registry.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThing.html
   */
  public toCreateThing() {
    return this.to('CreateThing');
  }

  /**
   * Creates a thing group.
   *
   * Access Level: Tagging
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
   * Creates a new thing type.
   *
   * Access Level: Tagging
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
   * Creates a rule.
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
   * Deletes the audit configuration associated with the account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAccountAuditConfiguration.html
   */
  public toDeleteAccountAuditConfiguration() {
    return this.to('DeleteAccountAuditConfiguration');
  }

  /**
   * Deletes a Device Defender audit suppression.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAuditSuppression.html
   */
  public toDeleteAuditSuppression() {
    return this.to('DeleteAuditSuppression');
  }

  /**
   * Deletes the specified authorizer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAuthorizer.html
   */
  public toDeleteAuthorizer() {
    return this.to('DeleteAuthorizer');
  }

  /**
   * Deletes the specified billing group.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteBillingGroup.html
   */
  public toDeleteBillingGroup() {
    return this.to('DeleteBillingGroup');
  }

  /**
   * Deletes a registered CA certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCACertificate.html
   */
  public toDeleteCACertificate() {
    return this.to('DeleteCACertificate');
  }

  /**
   * Deletes the specified certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCertificate.html
   */
  public toDeleteCertificate() {
    return this.to('DeleteCertificate');
  }

  /**
   * Removes the specified dimension from your AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDimension.html
   */
  public toDeleteDimension() {
    return this.to('DeleteDimension');
  }

  /**
   * Deletes a domain configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDomainConfiguration.html
   */
  public toDeleteDomainConfiguration() {
    return this.to('DeleteDomainConfiguration');
  }

  /**
   * Deletes the specified Dynamic Thing Group
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDynamicThingGroup.html
   */
  public toDeleteDynamicThingGroup() {
    return this.to('DeleteDynamicThingGroup');
  }

  /**
   * Deletes the specified fleet metric
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/iot-indexing.html
   */
  public toDeleteFleetMetric() {
    return this.to('DeleteFleetMetric');
  }

  /**
   * Deletes a job and its related job executions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJob.html
   */
  public toDeleteJob() {
    return this.to('DeleteJob');
  }

  /**
   * Deletes a job execution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJobExecution.html
   */
  public toDeleteJobExecution() {
    return this.to('DeleteJobExecution');
  }

  /**
   * Deletes a defined mitigation action from your AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteMitigationAction.html
   */
  public toDeleteMitigationAction() {
    return this.to('DeleteMitigationAction');
  }

  /**
   * Deletes an OTA update job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteOTAUpdate.html
   */
  public toDeleteOTAUpdate() {
    return this.to('DeleteOTAUpdate');
  }

  /**
   * Deletes the specified policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    return this.to('DeletePolicy');
  }

  /**
   * Deletes the specified version of the specified policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicyVersion.html
   */
  public toDeletePolicyVersion() {
    return this.to('DeletePolicyVersion');
  }

  /**
   * Deletes a fleet provisioning template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplate.html
   */
  public toDeleteProvisioningTemplate() {
    return this.to('DeleteProvisioningTemplate');
  }

  /**
   * Deletes a fleet provisioning template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplateVersion.html
   */
  public toDeleteProvisioningTemplateVersion() {
    return this.to('DeleteProvisioningTemplateVersion');
  }

  /**
   * Deletes a CA certificate registration code.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRegistrationCode.html
   */
  public toDeleteRegistrationCode() {
    return this.to('DeleteRegistrationCode');
  }

  /**
   * Deletes the specified role alias.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRoleAlias.html
   */
  public toDeleteRoleAlias() {
    return this.to('DeleteRoleAlias');
  }

  /**
   * Deletes a scheduled audit.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteScheduledAudit.html
   */
  public toDeleteScheduledAudit() {
    return this.to('DeleteScheduledAudit');
  }

  /**
   * Deletes a Device Defender security profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteSecurityProfile.html
   */
  public toDeleteSecurityProfile() {
    return this.to('DeleteSecurityProfile');
  }

  /**
   * Deletes a specified stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteStream.html
   */
  public toDeleteStream() {
    return this.to('DeleteStream');
  }

  /**
   * Deletes the specified thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html
   */
  public toDeleteThing() {
    return this.to('DeleteThing');
  }

  /**
   * Deletes the specified thing group.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingGroup.html
   */
  public toDeleteThingGroup() {
    return this.to('DeleteThingGroup');
  }

  /**
   * Deletes the specified thing shadow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toDeleteThingShadow() {
    return this.to('DeleteThingShadow');
  }

  /**
   * Deletes the specified thing type.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingType.html
   */
  public toDeleteThingType() {
    return this.to('DeleteThingType');
  }

  /**
   * Deletes the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteTopicRule.html
   */
  public toDeleteTopicRule() {
    return this.to('DeleteTopicRule');
  }

  /**
   * Deletes the specified v2 logging level.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteV2LoggingLevel.html
   */
  public toDeleteV2LoggingLevel() {
    return this.to('DeleteV2LoggingLevel');
  }

  /**
   * Deprecates the specified thing type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeprecateThingType.html
   */
  public toDeprecateThingType() {
    return this.to('DeprecateThingType');
  }

  /**
   * Gets information about audit configurations for the account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAccountAuditConfiguration.html
   */
  public toDescribeAccountAuditConfiguration() {
    return this.to('DescribeAccountAuditConfiguration');
  }

  /**
   * Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and when the audit that returned the finding was started.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html
   */
  public toDescribeAuditFinding() {
    return this.to('DescribeAuditFinding');
  }

  /**
   * Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditMitigationActionsTask.html
   */
  public toDescribeAuditMitigationActionsTask() {
    return this.to('DescribeAuditMitigationActionsTask');
  }

  /**
   * Gets information about a Device Defender audit suppression.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditSuppression.html
   */
  public toDescribeAuditSuppression() {
    return this.to('DescribeAuditSuppression');
  }

  /**
   * Gets information about a Device Defender audit.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditTask.html
   */
  public toDescribeAuditTask() {
    return this.to('DescribeAuditTask');
  }

  /**
   * Describes an authorizer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuthorizer.html
   */
  public toDescribeAuthorizer() {
    return this.to('DescribeAuthorizer');
  }

  /**
   * Gets information about the specified billing group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeBillingGroup.html
   */
  public toDescribeBillingGroup() {
    return this.to('DescribeBillingGroup');
  }

  /**
   * Describes a registered CA certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCACertificate.html
   */
  public toDescribeCACertificate() {
    return this.to('DescribeCACertificate');
  }

  /**
   * Gets information about the specified certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCertificate.html
   */
  public toDescribeCertificate() {
    return this.to('DescribeCertificate');
  }

  /**
   * Describes the default authorizer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDefaultAuthorizer.html
   */
  public toDescribeDefaultAuthorizer() {
    return this.to('DescribeDefaultAuthorizer');
  }

  /**
   * Provides details about a dimension that is defined in your AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDimension.html
   */
  public toDescribeDimension() {
    return this.to('DescribeDimension');
  }

  /**
   * Gets information about the domain configuration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDomainConfiguration.html
   */
  public toDescribeDomainConfiguration() {
    return this.to('DescribeDomainConfiguration');
  }

  /**
   * Returns a unique endpoint specific to the AWS account making the call.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEndpoint.html
   */
  public toDescribeEndpoint() {
    return this.to('DescribeEndpoint');
  }

  /**
   * Returns account event configurations.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEventConfigurations.html
   */
  public toDescribeEventConfigurations() {
    return this.to('DescribeEventConfigurations');
  }

  /**
   * Gets information about the specified fleet metric.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/iot-indexing.html
   */
  public toDescribeFleetMetric() {
    return this.to('DescribeFleetMetric');
  }

  /**
   * Gets information about the specified index.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeIndex.html
   */
  public toDescribeIndex() {
    return this.to('DescribeIndex');
  }

  /**
   * Describes a job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJob.html
   */
  public toDescribeJob() {
    return this.to('DescribeJob');
  }

  /**
   * Describes a job execution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJobExecution.html
   */
  public toDescribeJobExecution() {
    return this.to('DescribeJobExecution');
  }

  /**
   * Gets information about a mitigation action.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeMitigationAction.html
   */
  public toDescribeMitigationAction() {
    return this.to('DescribeMitigationAction');
  }

  /**
   * Returns information about a fleet provisioning template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplate.html
   */
  public toDescribeProvisioningTemplate() {
    return this.to('DescribeProvisioningTemplate');
  }

  /**
   * Returns information about a fleet provisioning template version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplateVersion.html
   */
  public toDescribeProvisioningTemplateVersion() {
    return this.to('DescribeProvisioningTemplateVersion');
  }

  /**
   * Describes a role alias.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeRoleAlias.html
   */
  public toDescribeRoleAlias() {
    return this.to('DescribeRoleAlias');
  }

  /**
   * Gets information about a scheduled audit.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeScheduledAudit.html
   */
  public toDescribeScheduledAudit() {
    return this.to('DescribeScheduledAudit');
  }

  /**
   * Gets information about a Device Defender security profile.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeSecurityProfile.html
   */
  public toDescribeSecurityProfile() {
    return this.to('DescribeSecurityProfile');
  }

  /**
   * Gets information about the specified stream.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeStream.html
   */
  public toDescribeStream() {
    return this.to('DescribeStream');
  }

  /**
   * Gets information about the specified thing.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThing.html
   */
  public toDescribeThing() {
    return this.to('DescribeThing');
  }

  /**
   * Gets information about the specified thing group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingGroup.html
   */
  public toDescribeThingGroup() {
    return this.to('DescribeThingGroup');
  }

  /**
   * Gets information about the bulk thing registration task.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingRegistrationTask.html
   */
  public toDescribeThingRegistrationTask() {
    return this.to('DescribeThingRegistrationTask');
  }

  /**
   * Gets information about the specified thing type.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingType.html
   */
  public toDescribeThingType() {
    return this.to('DescribeThingType');
  }

  /**
   * Describes a tunnel.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeTunnel.html
   */
  public toDescribeTunnel() {
    return this.to('DescribeTunnel');
  }

  /**
   * Detaches a policy from the specified target.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPolicy.html
   */
  public toDetachPolicy() {
    return this.to('DetachPolicy');
  }

  /**
   * Removes the specified policy from the specified certificate.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPrincipalPolicy.html
   */
  public toDetachPrincipalPolicy() {
    return this.to('DetachPrincipalPolicy');
  }

  /**
   * Disassociates a Device Defender security profile from a thing group or from this account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachSecurityProfile.html
   */
  public toDetachSecurityProfile() {
    return this.to('DetachSecurityProfile');
  }

  /**
   * Detaches the specified principal from the specified thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachThingPrincipal.html
   */
  public toDetachThingPrincipal() {
    return this.to('DetachThingPrincipal');
  }

  /**
   * Disables the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DisableTopicRule.html
   */
  public toDisableTopicRule() {
    return this.to('DisableTopicRule');
  }

  /**
   * Enables the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_EnableTopicRule.html
   */
  public toEnableTopicRule() {
    return this.to('EnableTopicRule');
  }

  /**
   * Get buckets aggregation for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/iot-indexing.html.html
   */
  public toGetBucketsAggregation() {
    return this.to('GetBucketsAggregation');
  }

  /**
   * Get cardinality for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetCardinality.html
   */
  public toGetCardinality() {
    return this.to('GetCardinality');
  }

  /**
   * Gets effective policies.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetEffectivePolicies.html
   */
  public toGetEffectivePolicies() {
    return this.to('GetEffectivePolicies');
  }

  /**
   * Gets current fleet indexing configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetIndexingConfiguration.html
   */
  public toGetIndexingConfiguration() {
    return this.to('GetIndexingConfiguration');
  }

  /**
   * Gets a job document.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetJobDocument.html
   */
  public toGetJobDocument() {
    return this.to('GetJobDocument');
  }

  /**
   * Gets the logging options.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetLoggingOptions.html
   */
  public toGetLoggingOptions() {
    return this.to('GetLoggingOptions');
  }

  /**
   * Gets the information about the OTA update job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetOTAUpdate.html
   */
  public toGetOTAUpdate() {
    return this.to('GetOTAUpdate');
  }

  /**
   * Gets the list of all jobs for a thing that are not in a terminal state.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPendingJobExecutions.html
   */
  public toGetPendingJobExecutions() {
    return this.to('GetPendingJobExecutions');
  }

  /**
   * Get percentiles for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPercentiles.html
   */
  public toGetPercentiles() {
    return this.to('GetPercentiles');
  }

  /**
   * Gets information about the specified policy with the policy document of the default version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicy.html
   */
  public toGetPolicy() {
    return this.to('GetPolicy');
  }

  /**
   * Gets information about the specified policy version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicyVersion.html
   */
  public toGetPolicyVersion() {
    return this.to('GetPolicyVersion');
  }

  /**
   * Gets a registration code used to register a CA certificate with AWS IoT.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetRegistrationCode.html
   */
  public toGetRegistrationCode() {
    return this.to('GetRegistrationCode');
  }

  /**
   * Get statistics for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetStatistics.html
   */
  public toGetStatistics() {
    return this.to('GetStatistics');
  }

  /**
   * Gets the thing shadow.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toGetThingShadow() {
    return this.to('GetThingShadow');
  }

  /**
   * Gets information about the specified rule.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetTopicRule.html
   */
  public toGetTopicRule() {
    return this.to('GetTopicRule');
  }

  /**
   * Gets v2 logging options.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetV2LoggingOptions.html
   */
  public toGetV2LoggingOptions() {
    return this.to('GetV2LoggingOptions');
  }

  /**
   * Lists the active violations for a given Device Defender security profile or Thing.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListActiveViolations.html
   */
  public toListActiveViolations() {
    return this.to('ListActiveViolations');
  }

  /**
   * Lists the policies attached to the specified thing group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAttachedPolicies.html
   */
  public toListAttachedPolicies() {
    return this.to('ListAttachedPolicies');
  }

  /**
   * Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditFindings.html
   */
  public toListAuditFindings() {
    return this.to('ListAuditFindings');
  }

  /**
   * Gets the status of audit mitigation action tasks that were executed.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsExecutions.html
   */
  public toListAuditMitigationActionsExecutions() {
    return this.to('ListAuditMitigationActionsExecutions');
  }

  /**
   * Gets a list of audit mitigation action tasks that match the specified filters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsTasks.html
   */
  public toListAuditMitigationActionsTasks() {
    return this.to('ListAuditMitigationActionsTasks');
  }

  /**
   * Lists your Device Defender audit suppressions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditSuppressions.html
   */
  public toListAuditSuppressions() {
    return this.to('ListAuditSuppressions');
  }

  /**
   * Lists the Device Defender audits that have been performed during a given time period.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditTasks.html
   */
  public toListAuditTasks() {
    return this.to('ListAuditTasks');
  }

  /**
   * Lists the authorizers registered in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuthorizers.html
   */
  public toListAuthorizers() {
    return this.to('ListAuthorizers');
  }

  /**
   * Lists all billing groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListBillingGroups.html
   */
  public toListBillingGroups() {
    return this.to('ListBillingGroups');
  }

  /**
   * Lists the CA certificates registered for your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCACertificates.html
   */
  public toListCACertificates() {
    return this.to('ListCACertificates');
  }

  /**
   * Lists your certificates.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificates.html
   */
  public toListCertificates() {
    return this.to('ListCertificates');
  }

  /**
   * List the device certificates signed by the specified CA certificate.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificatesByCA.html
   */
  public toListCertificatesByCA() {
    return this.to('ListCertificatesByCA');
  }

  /**
   * Lists the dimensions that are defined for your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListDimensions.html
   */
  public toListDimensions() {
    return this.to('ListDimensions');
  }

  /**
   * Lists the domain configuration created by your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListDomainConfigurations.html
   */
  public toListDomainConfigurations() {
    return this.to('ListDomainConfigurations');
  }

  /**
   * Lists the fleet metrics in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/iot-indexing.html
   */
  public toListFleetMetrics() {
    return this.to('ListFleetMetrics');
  }

  /**
   * Lists all indices for fleet index
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListIndices.html
   */
  public toListIndices() {
    return this.to('ListIndices');
  }

  /**
   * Lists the job executions for a job.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForJob.html
   */
  public toListJobExecutionsForJob() {
    return this.to('ListJobExecutionsForJob');
  }

  /**
   * Lists the job executions for the specified thing.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForThing.html
   */
  public toListJobExecutionsForThing() {
    return this.to('ListJobExecutionsForThing');
  }

  /**
   * Lists jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobs.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * Gets a list of all mitigation actions that match the specified filter criteria.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListMitigationActions.html
   */
  public toListMitigationActions() {
    return this.to('ListMitigationActions');
  }

  /**
   * Lists all named shadows for a given thing.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListNamedShadowsForThing.html
   */
  public toListNamedShadowsForThing() {
    return this.to('ListNamedShadowsForThing');
  }

  /**
   * Lists OTA update jobs in the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListOTAUpdates.html
   */
  public toListOTAUpdates() {
    return this.to('ListOTAUpdates');
  }

  /**
   * Lists certificates that are being transfered but not yet accepted.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListOutgoingCertificates.html
   */
  public toListOutgoingCertificates() {
    return this.to('ListOutgoingCertificates');
  }

  /**
   * Lists your policies.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicies.html
   */
  public toListPolicies() {
    return this.to('ListPolicies');
  }

  /**
   * Lists the principals associated with the specified policy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyPrincipals.html
   */
  public toListPolicyPrincipals() {
    return this.to('ListPolicyPrincipals');
  }

  /**
   * Lists the versions of the specified policy, and identifies the default version.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyVersions.html
   */
  public toListPolicyVersions() {
    return this.to('ListPolicyVersions');
  }

  /**
   * Lists the policies attached to the specified principal. If you use an Amazon Cognito identity, the ID needs to be in Amazon Cognito Identity format.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalPolicies.html
   */
  public toListPrincipalPolicies() {
    return this.to('ListPrincipalPolicies');
  }

  /**
   * Lists the things associated with the specified principal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalThings.html
   */
  public toListPrincipalThings() {
    return this.to('ListPrincipalThings');
  }

  /**
   * A list of fleet provisioning template versions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplateVersions.html
   */
  public toListProvisioningTemplateVersions() {
    return this.to('ListProvisioningTemplateVersions');
  }

  /**
   * Lists the fleet provisioning templates in your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplates.html
   */
  public toListProvisioningTemplates() {
    return this.to('ListProvisioningTemplates');
  }

  /**
   * Lists role aliases.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListRoleAliases.html
   */
  public toListRoleAliases() {
    return this.to('ListRoleAliases');
  }

  /**
   * Lists all of your scheduled audits.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListScheduledAudits.html
   */
  public toListScheduledAudits() {
    return this.to('ListScheduledAudits');
  }

  /**
   * Lists the Device Defender security profiles you have created.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html
   */
  public toListSecurityProfiles() {
    return this.to('ListSecurityProfiles');
  }

  /**
   * Lists the Device Defender security profiles attached to a target.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfilesForTarget.html
   */
  public toListSecurityProfilesForTarget() {
    return this.to('ListSecurityProfilesForTarget');
  }

  /**
   * Lists the streams in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListStreams.html
   */
  public toListStreams() {
    return this.to('ListStreams');
  }

  /**
   * Lists all tags for a given resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * List targets for the specified policy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForPolicy.html
   */
  public toListTargetsForPolicy() {
    return this.to('ListTargetsForPolicy');
  }

  /**
   * Lists the targets associated with a given Device Defender security profile.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForSecurityProfile.html
   */
  public toListTargetsForSecurityProfile() {
    return this.to('ListTargetsForSecurityProfile');
  }

  /**
   * Lists all thing groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroups.html
   */
  public toListThingGroups() {
    return this.to('ListThingGroups');
  }

  /**
   * List thing groups to which the specified thing belongs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroupsForThing.html
   */
  public toListThingGroupsForThing() {
    return this.to('ListThingGroupsForThing');
  }

  /**
   * Lists the principals associated with the specified thing.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingPrincipals.html
   */
  public toListThingPrincipals() {
    return this.to('ListThingPrincipals');
  }

  /**
   * Lists information about bulk thing registration tasks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTaskReports.html
   */
  public toListThingRegistrationTaskReports() {
    return this.to('ListThingRegistrationTaskReports');
  }

  /**
   * Lists bulk thing registration tasks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTasks.html
   */
  public toListThingRegistrationTasks() {
    return this.to('ListThingRegistrationTasks');
  }

  /**
   * Lists all thing types.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingTypes.html
   */
  public toListThingTypes() {
    return this.to('ListThingTypes');
  }

  /**
   * Lists all things.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThings.html
   */
  public toListThings() {
    return this.to('ListThings');
  }

  /**
   * Lists all things in the specified billing group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInBillingGroup.html
   */
  public toListThingsInBillingGroup() {
    return this.to('ListThingsInBillingGroup');
  }

  /**
   * Lists all things in the specified thing group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInThingGroup.html
   */
  public toListThingsInThingGroup() {
    return this.to('ListThingsInThingGroup');
  }

  /**
   * Lists the rules for the specific topic.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTopicRules.html
   */
  public toListTopicRules() {
    return this.to('ListTopicRules');
  }

  /**
   * Lists tunnels.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTunnels.html
   */
  public toListTunnels() {
    return this.to('ListTunnels');
  }

  /**
   * Lists the v2 logging levels.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListV2LoggingLevels.html
   */
  public toListV2LoggingLevels() {
    return this.to('ListV2LoggingLevels');
  }

  /**
   * Lists the Device Defender security profile violations discovered during the given time period.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListViolationEvents.html
   */
  public toListViolationEvents() {
    return this.to('ListViolationEvents');
  }

  /**
   * Opens a tunnel.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifThingGroupArn()
   * - .ifTunnelDestinationService()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_OpenTunnel.html
   */
  public toOpenTunnel() {
    return this.to('OpenTunnel');
  }

  /**
   * Publish to the specified topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toPublish() {
    return this.to('Publish');
  }

  /**
   * Receive from the specified topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toReceive() {
    return this.to('Receive');
  }

  /**
   * Registers a CA certificate with AWS IoT.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCACertificate.html
   */
  public toRegisterCACertificate() {
    return this.to('RegisterCACertificate');
  }

  /**
   * Registers a device certificate with AWS IoT.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificate.html
   */
  public toRegisterCertificate() {
    return this.to('RegisterCertificate');
  }

  /**
   * Registers a device certificate with AWS IoT without a registered CA (certificate authority).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificateWithoutCA.html
   */
  public toRegisterCertificateWithoutCA() {
    return this.to('RegisterCertificateWithoutCA');
  }

  /**
   * Registers your thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterThing.html
   */
  public toRegisterThing() {
    return this.to('RegisterThing');
  }

  /**
   * Rejects a pending certificate transfer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RejectCertificateTransfer.html
   */
  public toRejectCertificateTransfer() {
    return this.to('RejectCertificateTransfer');
  }

  /**
   * Removes thing from the specified billing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromBillingGroup.html
   */
  public toRemoveThingFromBillingGroup() {
    return this.to('RemoveThingFromBillingGroup');
  }

  /**
   * Removes thing from the specified thing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromThingGroup.html
   */
  public toRemoveThingFromThingGroup() {
    return this.to('RemoveThingFromThingGroup');
  }

  /**
   * Replaces the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ReplaceTopicRule.html
   */
  public toReplaceTopicRule() {
    return this.to('ReplaceTopicRule');
  }

  /**
   * Search IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SearchIndex.html
   */
  public toSearchIndex() {
    return this.to('SearchIndex');
  }

  /**
   * Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultAuthorizer.html
   */
  public toSetDefaultAuthorizer() {
    return this.to('SetDefaultAuthorizer');
  }

  /**
   * Sets the specified version of the specified policy as the policy's default (operative) version.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultPolicyVersion.html
   */
  public toSetDefaultPolicyVersion() {
    return this.to('SetDefaultPolicyVersion');
  }

  /**
   * Sets the logging options.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetLoggingOptions.html
   */
  public toSetLoggingOptions() {
    return this.to('SetLoggingOptions');
  }

  /**
   * Sets the v2 logging level.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingLevel.html
   */
  public toSetV2LoggingLevel() {
    return this.to('SetV2LoggingLevel');
  }

  /**
   * Sets the v2 logging options.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingOptions.html
   */
  public toSetV2LoggingOptions() {
    return this.to('SetV2LoggingOptions');
  }

  /**
   * Starts a task that applies a set of mitigation actions to the specified target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartAuditMitigationActionsTask.html
   */
  public toStartAuditMitigationActionsTask() {
    return this.to('StartAuditMitigationActionsTask');
  }

  /**
   * Gets and starts the next pending job execution for a thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartNextPendingJobExecution.html
   */
  public toStartNextPendingJobExecution() {
    return this.to('StartNextPendingJobExecution');
  }

  /**
   * Starts an on-demand Device Defender audit.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartOnDemandAuditTask.html
   */
  public toStartOnDemandAuditTask() {
    return this.to('StartOnDemandAuditTask');
  }

  /**
   * Starts a bulk thing registration task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartThingRegistrationTask.html
   */
  public toStartThingRegistrationTask() {
    return this.to('StartThingRegistrationTask');
  }

  /**
   * Stops a bulk thing registration task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StopThingRegistrationTask.html
   */
  public toStopThingRegistrationTask() {
    return this.to('StopThingRegistrationTask');
  }

  /**
   * Subscribe to the specified TopicFilter.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toSubscribe() {
    return this.to('Subscribe');
  }

  /**
   * Tag a specified resource
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
   * Test the policies evaluation for group policies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_TestAuthorization.html
   */
  public toTestAuthorization() {
    return this.to('TestAuthorization');
  }

  /**
   * Invoke the specified custom authorizer for testing purposes.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_TestInvokeAuthorizer.html
   */
  public toTestInvokeAuthorizer() {
    return this.to('TestInvokeAuthorizer');
  }

  /**
   * Transfers the specified certificate to the specified AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_TransferCertificate.html
   */
  public toTransferCertificate() {
    return this.to('TransferCertificate');
  }

  /**
   * Untag a specified resource
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
   * Configures or reconfigures the Device Defender audit settings for this account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAccountAuditConfiguration.html
   */
  public toUpdateAccountAuditConfiguration() {
    return this.to('UpdateAccountAuditConfiguration');
  }

  /**
   * Updates a Device Defender audit suppression.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAuditSuppression.html
   */
  public toUpdateAuditSuppression() {
    return this.to('UpdateAuditSuppression');
  }

  /**
   * Updates an authorizer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAuthorizer.html
   */
  public toUpdateAuthorizer() {
    return this.to('UpdateAuthorizer');
  }

  /**
   * Updates information associated with the specified billing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateBillingGroup.html
   */
  public toUpdateBillingGroup() {
    return this.to('UpdateBillingGroup');
  }

  /**
   * Updates a registered CA certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCACertificate.html
   */
  public toUpdateCACertificate() {
    return this.to('UpdateCACertificate');
  }

  /**
   * Updates the status of the specified certificate. This operation is idempotent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCertificate.html
   */
  public toUpdateCertificate() {
    return this.to('UpdateCertificate');
  }

  /**
   * Updates the definition for a dimension.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDimension.html
   */
  public toUpdateDimension() {
    return this.to('UpdateDimension');
  }

  /**
   * Updates a domain configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDomainConfiguration.html
   */
  public toUpdateDomainConfiguration() {
    return this.to('UpdateDomainConfiguration');
  }

  /**
   * Updates a Dynamic Thing Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDynamicThingGroup.html
   */
  public toUpdateDynamicThingGroup() {
    return this.to('UpdateDynamicThingGroup');
  }

  /**
   * Updates event configurations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateEventConfigurations.html
   */
  public toUpdateEventConfigurations() {
    return this.to('UpdateEventConfigurations');
  }

  /**
   * Updates a fleet metric
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/iot-indexing.html
   */
  public toUpdateFleetMetric() {
    return this.to('UpdateFleetMetric');
  }

  /**
   * Updates fleet indexing configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateIndexingConfiguration.html
   */
  public toUpdateIndexingConfiguration() {
    return this.to('UpdateIndexingConfiguration');
  }

  /**
   * Updates a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateJob.html
   */
  public toUpdateJob() {
    return this.to('UpdateJob');
  }

  /**
   * Updates a job execution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateJobExecution.html
   */
  public toUpdateJobExecution() {
    return this.to('UpdateJobExecution');
  }

  /**
   * Updates the definition for the specified mitigation action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateMitigationAction.html
   */
  public toUpdateMitigationAction() {
    return this.to('UpdateMitigationAction');
  }

  /**
   * Updates a fleet provisioning template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateProvisioningTemplate.html
   */
  public toUpdateProvisioningTemplate() {
    return this.to('UpdateProvisioningTemplate');
  }

  /**
   * Updates the role alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateRoleAlias.html
   */
  public toUpdateRoleAlias() {
    return this.to('UpdateRoleAlias');
  }

  /**
   * Updates a scheduled audit, including what checks are performed and how often the audit takes place.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateScheduledAudit.html
   */
  public toUpdateScheduledAudit() {
    return this.to('UpdateScheduledAudit');
  }

  /**
   * Updates a Device Defender security profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateSecurityProfile.html
   */
  public toUpdateSecurityProfile() {
    return this.to('UpdateSecurityProfile');
  }

  /**
   * Updates the data for a stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateStream.html
   */
  public toUpdateStream() {
    return this.to('UpdateStream');
  }

  /**
   * Updates information associated with the specified thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThing.html
   */
  public toUpdateThing() {
    return this.to('UpdateThing');
  }

  /**
   * Updates information associated with the specified thing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroup.html
   */
  public toUpdateThingGroup() {
    return this.to('UpdateThingGroup');
  }

  /**
   * Updates the thing groups to which the thing belongs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroupsForThing.html
   */
  public toUpdateThingGroupsForThing() {
    return this.to('UpdateThingGroupsForThing');
  }

  /**
   * Updates the thing shadow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toUpdateThingShadow() {
    return this.to('UpdateThingShadow');
  }

  /**
   * Validates a Device Defender security profile behaviors specification.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ValidateSecurityProfileBehaviors.html
   */
  public toValidateSecurityProfileBehaviors() {
    return this.to('ValidateSecurityProfileBehaviors');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptCertificateTransfer",
      "AddThingToBillingGroup",
      "AddThingToThingGroup",
      "AssociateTargetsWithJob",
      "AttachSecurityProfile",
      "AttachThingPrincipal",
      "CancelAuditMitigationActionsTask",
      "CancelAuditTask",
      "CancelCertificateTransfer",
      "CancelJob",
      "CancelJobExecution",
      "ClearDefaultAuthorizer",
      "CloseTunnel",
      "Connect",
      "CreateAuditSuppression",
      "CreateAuthorizer",
      "CreateCertificateFromCsr",
      "CreateDimension",
      "CreateDomainConfiguration",
      "CreateJob",
      "CreateKeysAndCertificate",
      "CreateMitigationAction",
      "CreateOTAUpdate",
      "CreatePolicy",
      "CreatePolicyVersion",
      "CreateProvisioningClaim",
      "CreateProvisioningTemplate",
      "CreateProvisioningTemplateVersion",
      "CreateRoleAlias",
      "CreateScheduledAudit",
      "CreateSecurityProfile",
      "CreateStream",
      "CreateThing",
      "CreateTopicRule",
      "DeleteAccountAuditConfiguration",
      "DeleteAuditSuppression",
      "DeleteAuthorizer",
      "DeleteCACertificate",
      "DeleteCertificate",
      "DeleteDimension",
      "DeleteDomainConfiguration",
      "DeleteJob",
      "DeleteJobExecution",
      "DeleteMitigationAction",
      "DeleteOTAUpdate",
      "DeletePolicy",
      "DeletePolicyVersion",
      "DeleteProvisioningTemplate",
      "DeleteProvisioningTemplateVersion",
      "DeleteRegistrationCode",
      "DeleteRoleAlias",
      "DeleteScheduledAudit",
      "DeleteSecurityProfile",
      "DeleteStream",
      "DeleteThing",
      "DeleteThingShadow",
      "DeleteTopicRule",
      "DeleteV2LoggingLevel",
      "DeprecateThingType",
      "DetachSecurityProfile",
      "DetachThingPrincipal",
      "DisableTopicRule",
      "EnableTopicRule",
      "OpenTunnel",
      "Publish",
      "Receive",
      "RegisterCACertificate",
      "RegisterCertificate",
      "RegisterCertificateWithoutCA",
      "RegisterThing",
      "RejectCertificateTransfer",
      "RemoveThingFromBillingGroup",
      "RemoveThingFromThingGroup",
      "ReplaceTopicRule",
      "SetLoggingOptions",
      "SetV2LoggingLevel",
      "SetV2LoggingOptions",
      "StartAuditMitigationActionsTask",
      "StartNextPendingJobExecution",
      "StartOnDemandAuditTask",
      "StartThingRegistrationTask",
      "StopThingRegistrationTask",
      "Subscribe",
      "TransferCertificate",
      "UpdateAccountAuditConfiguration",
      "UpdateAuditSuppression",
      "UpdateAuthorizer",
      "UpdateBillingGroup",
      "UpdateCACertificate",
      "UpdateCertificate",
      "UpdateDimension",
      "UpdateDomainConfiguration",
      "UpdateDynamicThingGroup",
      "UpdateEventConfigurations",
      "UpdateFleetMetric",
      "UpdateIndexingConfiguration",
      "UpdateJob",
      "UpdateJobExecution",
      "UpdateMitigationAction",
      "UpdateProvisioningTemplate",
      "UpdateRoleAlias",
      "UpdateScheduledAudit",
      "UpdateSecurityProfile",
      "UpdateStream",
      "UpdateThing",
      "UpdateThingGroup",
      "UpdateThingGroupsForThing",
      "UpdateThingShadow"
    ],
    "Permissions management": [
      "AttachPolicy",
      "AttachPrincipalPolicy",
      "DetachPolicy",
      "DetachPrincipalPolicy",
      "SetDefaultAuthorizer",
      "SetDefaultPolicyVersion"
    ],
    "Tagging": [
      "CreateBillingGroup",
      "CreateDynamicThingGroup",
      "CreateFleetMetric",
      "CreateThingGroup",
      "CreateThingType",
      "DeleteBillingGroup",
      "DeleteDynamicThingGroup",
      "DeleteFleetMetric",
      "DeleteThingGroup",
      "DeleteThingType",
      "TagResource",
      "UntagResource"
    ],
    "Read": [
      "DescribeAccountAuditConfiguration",
      "DescribeAuditFinding",
      "DescribeAuditMitigationActionsTask",
      "DescribeAuditSuppression",
      "DescribeAuditTask",
      "DescribeAuthorizer",
      "DescribeBillingGroup",
      "DescribeCACertificate",
      "DescribeCertificate",
      "DescribeDefaultAuthorizer",
      "DescribeDimension",
      "DescribeDomainConfiguration",
      "DescribeEndpoint",
      "DescribeEventConfigurations",
      "DescribeFleetMetric",
      "DescribeIndex",
      "DescribeJob",
      "DescribeJobExecution",
      "DescribeMitigationAction",
      "DescribeProvisioningTemplate",
      "DescribeProvisioningTemplateVersion",
      "DescribeRoleAlias",
      "DescribeScheduledAudit",
      "DescribeSecurityProfile",
      "DescribeStream",
      "DescribeThing",
      "DescribeThingGroup",
      "DescribeThingRegistrationTask",
      "DescribeThingType",
      "DescribeTunnel",
      "GetBucketsAggregation",
      "GetCardinality",
      "GetEffectivePolicies",
      "GetIndexingConfiguration",
      "GetJobDocument",
      "GetLoggingOptions",
      "GetOTAUpdate",
      "GetPendingJobExecutions",
      "GetPercentiles",
      "GetPolicy",
      "GetPolicyVersion",
      "GetRegistrationCode",
      "GetStatistics",
      "GetThingShadow",
      "GetTopicRule",
      "GetV2LoggingOptions",
      "SearchIndex",
      "TestAuthorization",
      "TestInvokeAuthorizer",
      "ValidateSecurityProfileBehaviors"
    ],
    "List": [
      "ListActiveViolations",
      "ListAttachedPolicies",
      "ListAuditFindings",
      "ListAuditMitigationActionsExecutions",
      "ListAuditMitigationActionsTasks",
      "ListAuditSuppressions",
      "ListAuditTasks",
      "ListAuthorizers",
      "ListBillingGroups",
      "ListCACertificates",
      "ListCertificates",
      "ListCertificatesByCA",
      "ListDimensions",
      "ListDomainConfigurations",
      "ListFleetMetrics",
      "ListIndices",
      "ListJobExecutionsForJob",
      "ListJobExecutionsForThing",
      "ListJobs",
      "ListMitigationActions",
      "ListNamedShadowsForThing",
      "ListOTAUpdates",
      "ListOutgoingCertificates",
      "ListPolicies",
      "ListPolicyPrincipals",
      "ListPolicyVersions",
      "ListPrincipalPolicies",
      "ListPrincipalThings",
      "ListProvisioningTemplateVersions",
      "ListProvisioningTemplates",
      "ListRoleAliases",
      "ListScheduledAudits",
      "ListSecurityProfiles",
      "ListSecurityProfilesForTarget",
      "ListStreams",
      "ListTagsForResource",
      "ListTargetsForPolicy",
      "ListTargetsForSecurityProfile",
      "ListThingGroups",
      "ListThingGroupsForThing",
      "ListThingPrincipals",
      "ListThingRegistrationTaskReports",
      "ListThingRegistrationTasks",
      "ListThingTypes",
      "ListThings",
      "ListThingsInBillingGroup",
      "ListThingsInThingGroup",
      "ListTopicRules",
      "ListTunnels",
      "ListV2LoggingLevels",
      "ListViolationEvents"
    ]
  };

  /**
   * Adds a resource of type client to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-message-broker.html
   *
   * @param clientId - Identifier for the clientId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onClient(clientId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:client/${ClientId}';
    arn = arn.replace('${ClientId}', clientId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type index to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-indexing.html
   *
   * @param indexName - Identifier for the indexName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIndex(indexName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:index/${IndexName}';
    arn = arn.replace('${IndexName}', indexName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type fleetmetric to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-indexing.html
   *
   * @param fleetMetricName - Identifier for the fleetMetricName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFleetmetric(fleetMetricName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:fleetmetric/${FleetMetricName}';
    arn = arn.replace('${FleetMetricName}', fleetMetricName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-jobs.html
   *
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJob(jobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:job/${JobId}';
    arn = arn.replace('${JobId}', jobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type tunnel to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-tunnels.html
   *
   * @param tunnelId - Identifier for the tunnelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTunnel(tunnelId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:tunnel/${TunnelId}';
    arn = arn.replace('${TunnelId}', tunnelId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type thing to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html
   *
   * @param thingName - Identifier for the thingName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onThing(thingName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:thing/${ThingName}';
    arn = arn.replace('${ThingName}', thingName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type thinggroup to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-groups.html
   *
   * @param thingGroupName - Identifier for the thingGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onThinggroup(thingGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:thinggroup/${ThingGroupName}';
    arn = arn.replace('${ThingGroupName}', thingGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type billinggroup to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/billing-groups.html
   *
   * @param billingGroupName - Identifier for the billingGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBillinggroup(billingGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:billinggroup/${BillingGroupName}';
    arn = arn.replace('${BillingGroupName}', billingGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dynamicthinggroup to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/dynamic-thing-groups.html
   *
   * @param thingGroupName - Identifier for the thingGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDynamicthinggroup(thingGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:thinggroup/${ThingGroupName}';
    arn = arn.replace('${ThingGroupName}', thingGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type thingtype to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-types.html
   *
   * @param thingTypeName - Identifier for the thingTypeName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onThingtype(thingTypeName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:thingtype/${ThingTypeName}';
    arn = arn.replace('${ThingTypeName}', thingTypeName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type topic to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-message-broker.html
   *
   * @param topicName - Identifier for the topicName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTopic(topicName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:topic/${TopicName}';
    arn = arn.replace('${TopicName}', topicName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type topicfilter to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/topics.html
   *
   * @param topicFilter - Identifier for the topicFilter.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTopicfilter(topicFilter: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:topicfilter/${TopicFilter}';
    arn = arn.replace('${TopicFilter}', topicFilter);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type rolealias to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/authorizing-direct-aws.html
   *
   * @param roleAlias - Identifier for the roleAlias.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRolealias(roleAlias: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:rolealias/${RoleAlias}';
    arn = arn.replace('${RoleAlias}', roleAlias);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type authorizer to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/custom-authorizer.html
   *
   * @param authorizerName - Identifier for the authorizerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAuthorizer(authorizerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:authorizer/${AuthorizerName}';
    arn = arn.replace('${AuthorizerName}', authorizerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-policies.html
   *
   * @param policyName - Identifier for the policyName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicy(policyName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:policy/${PolicyName}';
    arn = arn.replace('${PolicyName}', policyName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cert to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/x509-certs.html
   *
   * @param certificate - Identifier for the certificate.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCert(certificate: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:cert/${Certificate}';
    arn = arn.replace('${Certificate}', certificate);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cacert to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/x509-certs.html
   *
   * @param cACertificate - Identifier for the cACertificate.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCacert(cACertificate: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:cacert/${CACertificate}';
    arn = arn.replace('${CACertificate}', cACertificate);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type stream to the statement
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ota-dev.html
   *
   * @param streamId - Identifier for the streamId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStream(streamId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:stream/${StreamId}';
    arn = arn.replace('${StreamId}', streamId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type otaupdate to the statement
   *
   * https://docs.aws.amazon.com/freertos/latest/userguide/freertos-ota-dev.html
   *
   * @param otaUpdateId - Identifier for the otaUpdateId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOtaupdate(otaUpdateId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:otaupdate/${OtaUpdateId}';
    arn = arn.replace('${OtaUpdateId}', otaUpdateId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type scheduledaudit to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-audit.html
   *
   * @param scheduleName - Identifier for the scheduleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onScheduledaudit(scheduleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:scheduledaudit/${ScheduleName}';
    arn = arn.replace('${ScheduleName}', scheduleName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type mitigationaction to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html
   *
   * @param mitigationActionName - Identifier for the mitigationActionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMitigationaction(mitigationActionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:mitigationaction/${MitigationActionName}';
    arn = arn.replace('${MitigationActionName}', mitigationActionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type securityprofile to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html
   *
   * @param securityProfileName - Identifier for the securityProfileName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecurityprofile(securityProfileName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:securityprofile/${SecurityProfileName}';
    arn = arn.replace('${SecurityProfileName}', securityProfileName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dimension to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html
   *
   * @param dimensionName - Identifier for the dimensionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDimension(dimensionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:dimension/${DimensionName}';
    arn = arn.replace('${DimensionName}', dimensionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type rule to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html
   *
   * @param ruleName - Identifier for the ruleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRule(ruleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:rule/${RuleName}';
    arn = arn.replace('${RuleName}', ruleName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type provisioningtemplate to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html
   *
   * @param provisioningTemplate - Identifier for the provisioningTemplate.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProvisioningtemplate(provisioningTemplate: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:provisioningtemplate/${ProvisioningTemplate}';
    arn = arn.replace('${ProvisioningTemplate}', provisioningTemplate);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type domainconfiguration to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/domain-configuration.html
   *
   * @param domainConfigurationName - Identifier for the domainConfigurationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomainconfiguration(domainConfigurationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:domainconfiguration/${DomainConfigurationName}';
    arn = arn.replace('${DomainConfigurationName}', domainConfigurationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The flag indicating whether or not to also delete an IoT Tunnel immediately
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
   * Filters actions based on the domain name of an IoT DomainConfiguration
   *
   * Applies to actions:
   * - .toCreateDomainConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDomainName(value: string | string[], operator?: Operator | string) {
    return this.if(`DomainName`, value, operator || 'StringLike');
  }

  /**
   * The list of all IoT Thing Group ARNs that the destination IoT Thing belongs to for an IoT Tunnel
   *
   * Applies to actions:
   * - .toOpenTunnel()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifThingGroupArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ThingGroupArn`, value, operator || 'StringLike');
  }

  /**
   * The list of all destination services for an IoT Tunnel
   *
   * Applies to actions:
   * - .toOpenTunnel()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTunnelDestinationService(value: string | string[], operator?: Operator | string) {
    return this.if(`TunnelDestinationService`, value, operator || 'StringLike');
  }
}
