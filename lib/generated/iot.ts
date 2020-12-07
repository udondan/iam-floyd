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
    this.to('iot:AcceptCertificateTransfer');
    return this;
  }

  /**
   * Adds a thing to the specified billing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToBillingGroup.html
   */
  public toAddThingToBillingGroup() {
    this.to('iot:AddThingToBillingGroup');
    return this;
  }

  /**
   * Adds a thing to the specified thing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AddThingToThingGroup.html
   */
  public toAddThingToThingGroup() {
    this.to('iot:AddThingToThingGroup');
    return this;
  }

  /**
   * Associates a group with a continuous job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AssociateTargetsWithJob.html
   */
  public toAssociateTargetsWithJob() {
    this.to('iot:AssociateTargetsWithJob');
    return this;
  }

  /**
   * Attaches a policy to the specified target.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPolicy.html
   */
  public toAttachPolicy() {
    this.to('iot:AttachPolicy');
    return this;
  }

  /**
   * Attaches the specified policy to the specified principal (certificate or other credential).
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachPrincipalPolicy.html
   */
  public toAttachPrincipalPolicy() {
    this.to('iot:AttachPrincipalPolicy');
    return this;
  }

  /**
   * Associates a Device Defender security profile with a thing group or with this account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachSecurityProfile.html
   */
  public toAttachSecurityProfile() {
    this.to('iot:AttachSecurityProfile');
    return this;
  }

  /**
   * Attaches the specified principal to the specified thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_AttachThingPrincipal.html
   */
  public toAttachThingPrincipal() {
    this.to('iot:AttachThingPrincipal');
    return this;
  }

  /**
   * Cancels a mitigation action task that is in progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditMitigationActionsTask.html
   */
  public toCancelAuditMitigationActionsTask() {
    this.to('iot:CancelAuditMitigationActionsTask');
    return this;
  }

  /**
   * Cancels an audit that is in progress. The audit can be either scheduled or on-demand.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelAuditTask.html
   */
  public toCancelAuditTask() {
    this.to('iot:CancelAuditTask');
    return this;
  }

  /**
   * Cancels a pending transfer for the specified certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelCertificateTransfer.html
   */
  public toCancelCertificateTransfer() {
    this.to('iot:CancelCertificateTransfer');
    return this;
  }

  /**
   * Cancels a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJob.html
   */
  public toCancelJob() {
    this.to('iot:CancelJob');
    return this;
  }

  /**
   * Cancels a job execution on a particular device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CancelJobExecution.html
   */
  public toCancelJobExecution() {
    this.to('iot:CancelJobExecution');
    return this;
  }

  /**
   * Clears the default authorizer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ClearDefaultAuthorizer.html
   */
  public toClearDefaultAuthorizer() {
    this.to('iot:ClearDefaultAuthorizer');
    return this;
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
    this.to('iot:CloseTunnel');
    return this;
  }

  /**
   * Connect as the specified client
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toConnect() {
    this.to('iot:Connect');
    return this;
  }

  /**
   * Creates a Device Defender audit suppression.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateAuditSuppression.html
   */
  public toCreateAuditSuppression() {
    this.to('iot:CreateAuditSuppression');
    return this;
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
    this.to('iot:CreateAuthorizer');
    return this;
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
    this.to('iot:CreateBillingGroup');
    return this;
  }

  /**
   * Creates an X.509 certificate using the specified certificate signing request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCertificateFromCsr.html
   */
  public toCreateCertificateFromCsr() {
    this.to('iot:CreateCertificateFromCsr');
    return this;
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
    this.to('iot:CreateDimension');
    return this;
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
    this.to('iot:CreateDomainConfiguration');
    return this;
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
    this.to('iot:CreateDynamicThingGroup');
    return this;
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
    this.to('iot:CreateJob');
    return this;
  }

  /**
   * Creates a 2048 bit RSA key pair and issues an X.509 certificate using the issued public key.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateKeysAndCertificate.html
   */
  public toCreateKeysAndCertificate() {
    this.to('iot:CreateKeysAndCertificate');
    return this;
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
    this.to('iot:CreateMitigationAction');
    return this;
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
    this.to('iot:CreateOTAUpdate');
    return this;
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
    this.to('iot:CreatePolicy');
    return this;
  }

  /**
   * Creates a new version of the specified AWS IoT policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreatePolicyVersion.html
   */
  public toCreatePolicyVersion() {
    this.to('iot:CreatePolicyVersion');
    return this;
  }

  /**
   * Creates a provisioning claim.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningClaim.html
   */
  public toCreateProvisioningClaim() {
    this.to('iot:CreateProvisioningClaim');
    return this;
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
    this.to('iot:CreateProvisioningTemplate');
    return this;
  }

  /**
   * Creates a new version of a fleet provisioning template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplateVersion.html
   */
  public toCreateProvisioningTemplateVersion() {
    this.to('iot:CreateProvisioningTemplateVersion');
    return this;
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
    this.to('iot:CreateRoleAlias');
    return this;
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
    this.to('iot:CreateScheduledAudit');
    return this;
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
    this.to('iot:CreateSecurityProfile');
    return this;
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
    this.to('iot:CreateStream');
    return this;
  }

  /**
   * Creates a thing in the thing registry.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_CreateThing.html
   */
  public toCreateThing() {
    this.to('iot:CreateThing');
    return this;
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
    this.to('iot:CreateThingGroup');
    return this;
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
    this.to('iot:CreateThingType');
    return this;
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
    this.to('iot:CreateTopicRule');
    return this;
  }

  /**
   * Deletes the audit configuration associated with the account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAccountAuditConfiguration.html
   */
  public toDeleteAccountAuditConfiguration() {
    this.to('iot:DeleteAccountAuditConfiguration');
    return this;
  }

  /**
   * Deletes a Device Defender audit suppression.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAuditSuppression.html
   */
  public toDeleteAuditSuppression() {
    this.to('iot:DeleteAuditSuppression');
    return this;
  }

  /**
   * Deletes the specified authorizer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteAuthorizer.html
   */
  public toDeleteAuthorizer() {
    this.to('iot:DeleteAuthorizer');
    return this;
  }

  /**
   * Deletes the specified billing group.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteBillingGroup.html
   */
  public toDeleteBillingGroup() {
    this.to('iot:DeleteBillingGroup');
    return this;
  }

  /**
   * Deletes a registered CA certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCACertificate.html
   */
  public toDeleteCACertificate() {
    this.to('iot:DeleteCACertificate');
    return this;
  }

  /**
   * Deletes the specified certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteCertificate.html
   */
  public toDeleteCertificate() {
    this.to('iot:DeleteCertificate');
    return this;
  }

  /**
   * Removes the specified dimension from your AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDimension.html
   */
  public toDeleteDimension() {
    this.to('iot:DeleteDimension');
    return this;
  }

  /**
   * Deletes a domain configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDomainConfiguration.html
   */
  public toDeleteDomainConfiguration() {
    this.to('iot:DeleteDomainConfiguration');
    return this;
  }

  /**
   * Deletes the specified Dynamic Thing Group
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteDynamicThingGroup.html
   */
  public toDeleteDynamicThingGroup() {
    this.to('iot:DeleteDynamicThingGroup');
    return this;
  }

  /**
   * Deletes a job and its related job executions.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJob.html
   */
  public toDeleteJob() {
    this.to('iot:DeleteJob');
    return this;
  }

  /**
   * Deletes a job execution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteJobExecution.html
   */
  public toDeleteJobExecution() {
    this.to('iot:DeleteJobExecution');
    return this;
  }

  /**
   * Deletes a defined mitigation action from your AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteMitigationAction.html
   */
  public toDeleteMitigationAction() {
    this.to('iot:DeleteMitigationAction');
    return this;
  }

  /**
   * Deletes an OTA update job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteOTAUpdate.html
   */
  public toDeleteOTAUpdate() {
    this.to('iot:DeleteOTAUpdate');
    return this;
  }

  /**
   * Deletes the specified policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    this.to('iot:DeletePolicy');
    return this;
  }

  /**
   * Deletes the specified version of the specified policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeletePolicyVersion.html
   */
  public toDeletePolicyVersion() {
    this.to('iot:DeletePolicyVersion');
    return this;
  }

  /**
   * Deletes a fleet provisioning template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplate.html
   */
  public toDeleteProvisioningTemplate() {
    this.to('iot:DeleteProvisioningTemplate');
    return this;
  }

  /**
   * Deletes a fleet provisioning template version.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteProvisioningTemplateVersion.html
   */
  public toDeleteProvisioningTemplateVersion() {
    this.to('iot:DeleteProvisioningTemplateVersion');
    return this;
  }

  /**
   * Deletes a CA certificate registration code.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRegistrationCode.html
   */
  public toDeleteRegistrationCode() {
    this.to('iot:DeleteRegistrationCode');
    return this;
  }

  /**
   * Deletes the specified role alias.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteRoleAlias.html
   */
  public toDeleteRoleAlias() {
    this.to('iot:DeleteRoleAlias');
    return this;
  }

  /**
   * Deletes a scheduled audit.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteScheduledAudit.html
   */
  public toDeleteScheduledAudit() {
    this.to('iot:DeleteScheduledAudit');
    return this;
  }

  /**
   * Deletes a Device Defender security profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteSecurityProfile.html
   */
  public toDeleteSecurityProfile() {
    this.to('iot:DeleteSecurityProfile');
    return this;
  }

  /**
   * Deletes a specified stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteStream.html
   */
  public toDeleteStream() {
    this.to('iot:DeleteStream');
    return this;
  }

  /**
   * Deletes the specified thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html
   */
  public toDeleteThing() {
    this.to('iot:DeleteThing');
    return this;
  }

  /**
   * Deletes the specified thing group.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingGroup.html
   */
  public toDeleteThingGroup() {
    this.to('iot:DeleteThingGroup');
    return this;
  }

  /**
   * Deletes the specified thing shadow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toDeleteThingShadow() {
    this.to('iot:DeleteThingShadow');
    return this;
  }

  /**
   * Deletes the specified thing type.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThingType.html
   */
  public toDeleteThingType() {
    this.to('iot:DeleteThingType');
    return this;
  }

  /**
   * Deletes the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteTopicRule.html
   */
  public toDeleteTopicRule() {
    this.to('iot:DeleteTopicRule');
    return this;
  }

  /**
   * Deletes the specified v2 logging level.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteV2LoggingLevel.html
   */
  public toDeleteV2LoggingLevel() {
    this.to('iot:DeleteV2LoggingLevel');
    return this;
  }

  /**
   * Deprecates the specified thing type.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DeprecateThingType.html
   */
  public toDeprecateThingType() {
    this.to('iot:DeprecateThingType');
    return this;
  }

  /**
   * Gets information about audit configurations for the account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAccountAuditConfiguration.html
   */
  public toDescribeAccountAuditConfiguration() {
    this.to('iot:DescribeAccountAuditConfiguration');
    return this;
  }

  /**
   * Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and when the audit that returned the finding was started.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html
   */
  public toDescribeAuditFinding() {
    this.to('iot:DescribeAuditFinding');
    return this;
  }

  /**
   * Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditMitigationActionsTask.html
   */
  public toDescribeAuditMitigationActionsTask() {
    this.to('iot:DescribeAuditMitigationActionsTask');
    return this;
  }

  /**
   * Gets information about a Device Defender audit suppression.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditSuppression.html
   */
  public toDescribeAuditSuppression() {
    this.to('iot:DescribeAuditSuppression');
    return this;
  }

  /**
   * Gets information about a Device Defender audit.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditTask.html
   */
  public toDescribeAuditTask() {
    this.to('iot:DescribeAuditTask');
    return this;
  }

  /**
   * Describes an authorizer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuthorizer.html
   */
  public toDescribeAuthorizer() {
    this.to('iot:DescribeAuthorizer');
    return this;
  }

  /**
   * Gets information about the specified billing group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeBillingGroup.html
   */
  public toDescribeBillingGroup() {
    this.to('iot:DescribeBillingGroup');
    return this;
  }

  /**
   * Describes a registered CA certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCACertificate.html
   */
  public toDescribeCACertificate() {
    this.to('iot:DescribeCACertificate');
    return this;
  }

  /**
   * Gets information about the specified certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeCertificate.html
   */
  public toDescribeCertificate() {
    this.to('iot:DescribeCertificate');
    return this;
  }

  /**
   * Describes the default authorizer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDefaultAuthorizer.html
   */
  public toDescribeDefaultAuthorizer() {
    this.to('iot:DescribeDefaultAuthorizer');
    return this;
  }

  /**
   * Provides details about a dimension that is defined in your AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDimension.html
   */
  public toDescribeDimension() {
    this.to('iot:DescribeDimension');
    return this;
  }

  /**
   * Gets information about the domain configuration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeDomainConfiguration.html
   */
  public toDescribeDomainConfiguration() {
    this.to('iot:DescribeDomainConfiguration');
    return this;
  }

  /**
   * Returns a unique endpoint specific to the AWS account making the call.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEndpoint.html
   */
  public toDescribeEndpoint() {
    this.to('iot:DescribeEndpoint');
    return this;
  }

  /**
   * Returns account event configurations.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeEventConfigurations.html
   */
  public toDescribeEventConfigurations() {
    this.to('iot:DescribeEventConfigurations');
    return this;
  }

  /**
   * Gets information about the specified index.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeIndex.html
   */
  public toDescribeIndex() {
    this.to('iot:DescribeIndex');
    return this;
  }

  /**
   * Describes a job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJob.html
   */
  public toDescribeJob() {
    this.to('iot:DescribeJob');
    return this;
  }

  /**
   * Describes a job execution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeJobExecution.html
   */
  public toDescribeJobExecution() {
    this.to('iot:DescribeJobExecution');
    return this;
  }

  /**
   * Gets information about a mitigation action.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeMitigationAction.html
   */
  public toDescribeMitigationAction() {
    this.to('iot:DescribeMitigationAction');
    return this;
  }

  /**
   * Returns information about a fleet provisioning template.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplate.html
   */
  public toDescribeProvisioningTemplate() {
    this.to('iot:DescribeProvisioningTemplate');
    return this;
  }

  /**
   * Returns information about a fleet provisioning template version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeProvisioningTemplateVersion.html
   */
  public toDescribeProvisioningTemplateVersion() {
    this.to('iot:DescribeProvisioningTemplateVersion');
    return this;
  }

  /**
   * Describes a role alias.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeRoleAlias.html
   */
  public toDescribeRoleAlias() {
    this.to('iot:DescribeRoleAlias');
    return this;
  }

  /**
   * Gets information about a scheduled audit.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeScheduledAudit.html
   */
  public toDescribeScheduledAudit() {
    this.to('iot:DescribeScheduledAudit');
    return this;
  }

  /**
   * Gets information about a Device Defender security profile.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeSecurityProfile.html
   */
  public toDescribeSecurityProfile() {
    this.to('iot:DescribeSecurityProfile');
    return this;
  }

  /**
   * Gets information about the specified stream.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeStream.html
   */
  public toDescribeStream() {
    this.to('iot:DescribeStream');
    return this;
  }

  /**
   * Gets information about the specified thing.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThing.html
   */
  public toDescribeThing() {
    this.to('iot:DescribeThing');
    return this;
  }

  /**
   * Gets information about the specified thing group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingGroup.html
   */
  public toDescribeThingGroup() {
    this.to('iot:DescribeThingGroup');
    return this;
  }

  /**
   * Gets information about the bulk thing registration task.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingRegistrationTask.html
   */
  public toDescribeThingRegistrationTask() {
    this.to('iot:DescribeThingRegistrationTask');
    return this;
  }

  /**
   * Gets information about the specified thing type.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeThingType.html
   */
  public toDescribeThingType() {
    this.to('iot:DescribeThingType');
    return this;
  }

  /**
   * Describes a tunnel.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeTunnel.html
   */
  public toDescribeTunnel() {
    this.to('iot:DescribeTunnel');
    return this;
  }

  /**
   * Detaches a policy from the specified target.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPolicy.html
   */
  public toDetachPolicy() {
    this.to('iot:DetachPolicy');
    return this;
  }

  /**
   * Removes the specified policy from the specified certificate.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachPrincipalPolicy.html
   */
  public toDetachPrincipalPolicy() {
    this.to('iot:DetachPrincipalPolicy');
    return this;
  }

  /**
   * Disassociates a Device Defender security profile from a thing group or from this account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachSecurityProfile.html
   */
  public toDetachSecurityProfile() {
    this.to('iot:DetachSecurityProfile');
    return this;
  }

  /**
   * Detaches the specified principal from the specified thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DetachThingPrincipal.html
   */
  public toDetachThingPrincipal() {
    this.to('iot:DetachThingPrincipal');
    return this;
  }

  /**
   * Disables the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_DisableTopicRule.html
   */
  public toDisableTopicRule() {
    this.to('iot:DisableTopicRule');
    return this;
  }

  /**
   * Enables the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_EnableTopicRule.html
   */
  public toEnableTopicRule() {
    this.to('iot:EnableTopicRule');
    return this;
  }

  /**
   * Get cardinality for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetCardinality.html
   */
  public toGetCardinality() {
    this.to('iot:GetCardinality');
    return this;
  }

  /**
   * Gets effective policies.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetEffectivePolicies.html
   */
  public toGetEffectivePolicies() {
    this.to('iot:GetEffectivePolicies');
    return this;
  }

  /**
   * Gets current fleet indexing configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetIndexingConfiguration.html
   */
  public toGetIndexingConfiguration() {
    this.to('iot:GetIndexingConfiguration');
    return this;
  }

  /**
   * Gets a job document.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetJobDocument.html
   */
  public toGetJobDocument() {
    this.to('iot:GetJobDocument');
    return this;
  }

  /**
   * Gets the logging options.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetLoggingOptions.html
   */
  public toGetLoggingOptions() {
    this.to('iot:GetLoggingOptions');
    return this;
  }

  /**
   * Gets the information about the OTA update job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetOTAUpdate.html
   */
  public toGetOTAUpdate() {
    this.to('iot:GetOTAUpdate');
    return this;
  }

  /**
   * Gets the list of all jobs for a thing that are not in a terminal state.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPendingJobExecutions.html
   */
  public toGetPendingJobExecutions() {
    this.to('iot:GetPendingJobExecutions');
    return this;
  }

  /**
   * Get percentiles for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPercentiles.html
   */
  public toGetPercentiles() {
    this.to('iot:GetPercentiles');
    return this;
  }

  /**
   * Gets information about the specified policy with the policy document of the default version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicy.html
   */
  public toGetPolicy() {
    this.to('iot:GetPolicy');
    return this;
  }

  /**
   * Gets information about the specified policy version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetPolicyVersion.html
   */
  public toGetPolicyVersion() {
    this.to('iot:GetPolicyVersion');
    return this;
  }

  /**
   * Gets a registration code used to register a CA certificate with AWS IoT.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetRegistrationCode.html
   */
  public toGetRegistrationCode() {
    this.to('iot:GetRegistrationCode');
    return this;
  }

  /**
   * Get statistics for IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetStatistics.html
   */
  public toGetStatistics() {
    this.to('iot:GetStatistics');
    return this;
  }

  /**
   * Gets the thing shadow.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toGetThingShadow() {
    this.to('iot:GetThingShadow');
    return this;
  }

  /**
   * Gets information about the specified rule.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetTopicRule.html
   */
  public toGetTopicRule() {
    this.to('iot:GetTopicRule');
    return this;
  }

  /**
   * Gets v2 logging options.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_GetV2LoggingOptions.html
   */
  public toGetV2LoggingOptions() {
    this.to('iot:GetV2LoggingOptions');
    return this;
  }

  /**
   * Lists the active violations for a given Device Defender security profile or Thing.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListActiveViolations.html
   */
  public toListActiveViolations() {
    this.to('iot:ListActiveViolations');
    return this;
  }

  /**
   * Lists the policies attached to the specified thing group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAttachedPolicies.html
   */
  public toListAttachedPolicies() {
    this.to('iot:ListAttachedPolicies');
    return this;
  }

  /**
   * Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditFindings.html
   */
  public toListAuditFindings() {
    this.to('iot:ListAuditFindings');
    return this;
  }

  /**
   * Gets the status of audit mitigation action tasks that were executed.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsExecutions.html
   */
  public toListAuditMitigationActionsExecutions() {
    this.to('iot:ListAuditMitigationActionsExecutions');
    return this;
  }

  /**
   * Gets a list of audit mitigation action tasks that match the specified filters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditMitigationActionsTasks.html
   */
  public toListAuditMitigationActionsTasks() {
    this.to('iot:ListAuditMitigationActionsTasks');
    return this;
  }

  /**
   * Lists your Device Defender audit suppressions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditSuppressions.html
   */
  public toListAuditSuppressions() {
    this.to('iot:ListAuditSuppressions');
    return this;
  }

  /**
   * Lists the Device Defender audits that have been performed during a given time period.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuditTasks.html
   */
  public toListAuditTasks() {
    this.to('iot:ListAuditTasks');
    return this;
  }

  /**
   * Lists the authorizers registered in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListAuthorizers.html
   */
  public toListAuthorizers() {
    this.to('iot:ListAuthorizers');
    return this;
  }

  /**
   * Lists all billing groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListBillingGroups.html
   */
  public toListBillingGroups() {
    this.to('iot:ListBillingGroups');
    return this;
  }

  /**
   * Lists the CA certificates registered for your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCACertificates.html
   */
  public toListCACertificates() {
    this.to('iot:ListCACertificates');
    return this;
  }

  /**
   * Lists your certificates.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificates.html
   */
  public toListCertificates() {
    this.to('iot:ListCertificates');
    return this;
  }

  /**
   * List the device certificates signed by the specified CA certificate.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListCertificatesByCA.html
   */
  public toListCertificatesByCA() {
    this.to('iot:ListCertificatesByCA');
    return this;
  }

  /**
   * Lists the dimensions that are defined for your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListDimensions.html
   */
  public toListDimensions() {
    this.to('iot:ListDimensions');
    return this;
  }

  /**
   * Lists the domain configuration created by your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListDomainConfigurations.html
   */
  public toListDomainConfigurations() {
    this.to('iot:ListDomainConfigurations');
    return this;
  }

  /**
   * Lists all indices for fleet index
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListIndices.html
   */
  public toListIndices() {
    this.to('iot:ListIndices');
    return this;
  }

  /**
   * Lists the job executions for a job.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForJob.html
   */
  public toListJobExecutionsForJob() {
    this.to('iot:ListJobExecutionsForJob');
    return this;
  }

  /**
   * Lists the job executions for the specified thing.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobExecutionsForThing.html
   */
  public toListJobExecutionsForThing() {
    this.to('iot:ListJobExecutionsForThing');
    return this;
  }

  /**
   * Lists jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListJobs.html
   */
  public toListJobs() {
    this.to('iot:ListJobs');
    return this;
  }

  /**
   * Gets a list of all mitigation actions that match the specified filter criteria.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListMitigationActions.html
   */
  public toListMitigationActions() {
    this.to('iot:ListMitigationActions');
    return this;
  }

  /**
   * Lists all named shadows for a given thing.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListNamedShadowsForThing.html
   */
  public toListNamedShadowsForThing() {
    this.to('iot:ListNamedShadowsForThing');
    return this;
  }

  /**
   * Lists OTA update jobs in the account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListOTAUpdates.html
   */
  public toListOTAUpdates() {
    this.to('iot:ListOTAUpdates');
    return this;
  }

  /**
   * Lists certificates that are being transfered but not yet accepted.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListOutgoingCertificates.html
   */
  public toListOutgoingCertificates() {
    this.to('iot:ListOutgoingCertificates');
    return this;
  }

  /**
   * Lists your policies.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicies.html
   */
  public toListPolicies() {
    this.to('iot:ListPolicies');
    return this;
  }

  /**
   * Lists the principals associated with the specified policy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyPrincipals.html
   */
  public toListPolicyPrincipals() {
    this.to('iot:ListPolicyPrincipals');
    return this;
  }

  /**
   * Lists the versions of the specified policy, and identifies the default version.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPolicyVersions.html
   */
  public toListPolicyVersions() {
    this.to('iot:ListPolicyVersions');
    return this;
  }

  /**
   * Lists the policies attached to the specified principal. If you use an Amazon Cognito identity, the ID needs to be in Amazon Cognito Identity format.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalPolicies.html
   */
  public toListPrincipalPolicies() {
    this.to('iot:ListPrincipalPolicies');
    return this;
  }

  /**
   * Lists the things associated with the specified principal.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListPrincipalThings.html
   */
  public toListPrincipalThings() {
    this.to('iot:ListPrincipalThings');
    return this;
  }

  /**
   * A list of fleet provisioning template versions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplateVersions.html
   */
  public toListProvisioningTemplateVersions() {
    this.to('iot:ListProvisioningTemplateVersions');
    return this;
  }

  /**
   * Lists the fleet provisioning templates in your AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListProvisioningTemplates.html
   */
  public toListProvisioningTemplates() {
    this.to('iot:ListProvisioningTemplates');
    return this;
  }

  /**
   * Lists role aliases.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListRoleAliases.html
   */
  public toListRoleAliases() {
    this.to('iot:ListRoleAliases');
    return this;
  }

  /**
   * Lists all of your scheduled audits.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListScheduledAudits.html
   */
  public toListScheduledAudits() {
    this.to('iot:ListScheduledAudits');
    return this;
  }

  /**
   * Lists the Device Defender security profiles you have created.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html
   */
  public toListSecurityProfiles() {
    this.to('iot:ListSecurityProfiles');
    return this;
  }

  /**
   * Lists the Device Defender security profiles attached to a target.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfilesForTarget.html
   */
  public toListSecurityProfilesForTarget() {
    this.to('iot:ListSecurityProfilesForTarget');
    return this;
  }

  /**
   * Lists the streams in your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListStreams.html
   */
  public toListStreams() {
    this.to('iot:ListStreams');
    return this;
  }

  /**
   * Lists all tags for a given resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('iot:ListTagsForResource');
    return this;
  }

  /**
   * List targets for the specified policy.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForPolicy.html
   */
  public toListTargetsForPolicy() {
    this.to('iot:ListTargetsForPolicy');
    return this;
  }

  /**
   * Lists the targets associated with a given Device Defender security profile.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTargetsForSecurityProfile.html
   */
  public toListTargetsForSecurityProfile() {
    this.to('iot:ListTargetsForSecurityProfile');
    return this;
  }

  /**
   * Lists all thing groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroups.html
   */
  public toListThingGroups() {
    this.to('iot:ListThingGroups');
    return this;
  }

  /**
   * List thing groups to which the specified thing belongs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingGroupsForThing.html
   */
  public toListThingGroupsForThing() {
    this.to('iot:ListThingGroupsForThing');
    return this;
  }

  /**
   * Lists the principals associated with the specified thing.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingPrincipals.html
   */
  public toListThingPrincipals() {
    this.to('iot:ListThingPrincipals');
    return this;
  }

  /**
   * Lists information about bulk thing registration tasks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTaskReports.html
   */
  public toListThingRegistrationTaskReports() {
    this.to('iot:ListThingRegistrationTaskReports');
    return this;
  }

  /**
   * Lists bulk thing registration tasks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingRegistrationTasks.html
   */
  public toListThingRegistrationTasks() {
    this.to('iot:ListThingRegistrationTasks');
    return this;
  }

  /**
   * Lists all thing types.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingTypes.html
   */
  public toListThingTypes() {
    this.to('iot:ListThingTypes');
    return this;
  }

  /**
   * Lists all things.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThings.html
   */
  public toListThings() {
    this.to('iot:ListThings');
    return this;
  }

  /**
   * Lists all things in the specified billing group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInBillingGroup.html
   */
  public toListThingsInBillingGroup() {
    this.to('iot:ListThingsInBillingGroup');
    return this;
  }

  /**
   * Lists all things in the specified thing group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListThingsInThingGroup.html
   */
  public toListThingsInThingGroup() {
    this.to('iot:ListThingsInThingGroup');
    return this;
  }

  /**
   * Lists the rules for the specific topic.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTopicRules.html
   */
  public toListTopicRules() {
    this.to('iot:ListTopicRules');
    return this;
  }

  /**
   * Lists tunnels.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListTunnels.html
   */
  public toListTunnels() {
    this.to('iot:ListTunnels');
    return this;
  }

  /**
   * Lists the v2 logging levels.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListV2LoggingLevels.html
   */
  public toListV2LoggingLevels() {
    this.to('iot:ListV2LoggingLevels');
    return this;
  }

  /**
   * Lists the Device Defender security profile violations discovered during the given time period.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ListViolationEvents.html
   */
  public toListViolationEvents() {
    this.to('iot:ListViolationEvents');
    return this;
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
    this.to('iot:OpenTunnel');
    return this;
  }

  /**
   * Publish to the specified topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toPublish() {
    this.to('iot:Publish');
    return this;
  }

  /**
   * Receive from the specified topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toReceive() {
    this.to('iot:Receive');
    return this;
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
    this.to('iot:RegisterCACertificate');
    return this;
  }

  /**
   * Registers a device certificate with AWS IoT.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificate.html
   */
  public toRegisterCertificate() {
    this.to('iot:RegisterCertificate');
    return this;
  }

  /**
   * Registers a device certificate with AWS IoT without a registered CA (certificate authority).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificateWithoutCA.html
   */
  public toRegisterCertificateWithoutCA() {
    this.to('iot:RegisterCertificateWithoutCA');
    return this;
  }

  /**
   * Registers your thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterThing.html
   */
  public toRegisterThing() {
    this.to('iot:RegisterThing');
    return this;
  }

  /**
   * Rejects a pending certificate transfer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RejectCertificateTransfer.html
   */
  public toRejectCertificateTransfer() {
    this.to('iot:RejectCertificateTransfer');
    return this;
  }

  /**
   * Removes thing from the specified billing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromBillingGroup.html
   */
  public toRemoveThingFromBillingGroup() {
    this.to('iot:RemoveThingFromBillingGroup');
    return this;
  }

  /**
   * Removes thing from the specified thing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_RemoveThingFromThingGroup.html
   */
  public toRemoveThingFromThingGroup() {
    this.to('iot:RemoveThingFromThingGroup');
    return this;
  }

  /**
   * Replaces the specified rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ReplaceTopicRule.html
   */
  public toReplaceTopicRule() {
    this.to('iot:ReplaceTopicRule');
    return this;
  }

  /**
   * Search IoT fleet index
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SearchIndex.html
   */
  public toSearchIndex() {
    this.to('iot:SearchIndex');
    return this;
  }

  /**
   * Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultAuthorizer.html
   */
  public toSetDefaultAuthorizer() {
    this.to('iot:SetDefaultAuthorizer');
    return this;
  }

  /**
   * Sets the specified version of the specified policy as the policy's default (operative) version.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetDefaultPolicyVersion.html
   */
  public toSetDefaultPolicyVersion() {
    this.to('iot:SetDefaultPolicyVersion');
    return this;
  }

  /**
   * Sets the logging options.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetLoggingOptions.html
   */
  public toSetLoggingOptions() {
    this.to('iot:SetLoggingOptions');
    return this;
  }

  /**
   * Sets the v2 logging level.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingLevel.html
   */
  public toSetV2LoggingLevel() {
    this.to('iot:SetV2LoggingLevel');
    return this;
  }

  /**
   * Sets the v2 logging options.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_SetV2LoggingOptions.html
   */
  public toSetV2LoggingOptions() {
    this.to('iot:SetV2LoggingOptions');
    return this;
  }

  /**
   * Starts a task that applies a set of mitigation actions to the specified target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartAuditMitigationActionsTask.html
   */
  public toStartAuditMitigationActionsTask() {
    this.to('iot:StartAuditMitigationActionsTask');
    return this;
  }

  /**
   * Gets and starts the next pending job execution for a thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartNextPendingJobExecution.html
   */
  public toStartNextPendingJobExecution() {
    this.to('iot:StartNextPendingJobExecution');
    return this;
  }

  /**
   * Starts an on-demand Device Defender audit.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartOnDemandAuditTask.html
   */
  public toStartOnDemandAuditTask() {
    this.to('iot:StartOnDemandAuditTask');
    return this;
  }

  /**
   * Starts a bulk thing registration task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StartThingRegistrationTask.html
   */
  public toStartThingRegistrationTask() {
    this.to('iot:StartThingRegistrationTask');
    return this;
  }

  /**
   * Stops a bulk thing registration task.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_StopThingRegistrationTask.html
   */
  public toStopThingRegistrationTask() {
    this.to('iot:StopThingRegistrationTask');
    return this;
  }

  /**
   * Subscribe to the specified TopicFilter.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toSubscribe() {
    this.to('iot:Subscribe');
    return this;
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
    this.to('iot:TagResource');
    return this;
  }

  /**
   * Test the policies evaluation for group policies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_TestAuthorization.html
   */
  public toTestAuthorization() {
    this.to('iot:TestAuthorization');
    return this;
  }

  /**
   * Invoke the specified custom authorizer for testing purposes.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_TestInvokeAuthorizer.html
   */
  public toTestInvokeAuthorizer() {
    this.to('iot:TestInvokeAuthorizer');
    return this;
  }

  /**
   * Transfers the specified certificate to the specified AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_TransferCertificate.html
   */
  public toTransferCertificate() {
    this.to('iot:TransferCertificate');
    return this;
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
    this.to('iot:UntagResource');
    return this;
  }

  /**
   * Configures or reconfigures the Device Defender audit settings for this account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAccountAuditConfiguration.html
   */
  public toUpdateAccountAuditConfiguration() {
    this.to('iot:UpdateAccountAuditConfiguration');
    return this;
  }

  /**
   * Updates a Device Defender audit suppression.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAuditSuppression.html
   */
  public toUpdateAuditSuppression() {
    this.to('iot:UpdateAuditSuppression');
    return this;
  }

  /**
   * Updates an authorizer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAuthorizer.html
   */
  public toUpdateAuthorizer() {
    this.to('iot:UpdateAuthorizer');
    return this;
  }

  /**
   * Updates information associated with the specified billing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateBillingGroup.html
   */
  public toUpdateBillingGroup() {
    this.to('iot:UpdateBillingGroup');
    return this;
  }

  /**
   * Updates a registered CA certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCACertificate.html
   */
  public toUpdateCACertificate() {
    this.to('iot:UpdateCACertificate');
    return this;
  }

  /**
   * Updates the status of the specified certificate. This operation is idempotent.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateCertificate.html
   */
  public toUpdateCertificate() {
    this.to('iot:UpdateCertificate');
    return this;
  }

  /**
   * Updates the definition for a dimension.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDimension.html
   */
  public toUpdateDimension() {
    this.to('iot:UpdateDimension');
    return this;
  }

  /**
   * Updates a domain configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDomainConfiguration.html
   */
  public toUpdateDomainConfiguration() {
    this.to('iot:UpdateDomainConfiguration');
    return this;
  }

  /**
   * Updates a Dynamic Thing Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateDynamicThingGroup.html
   */
  public toUpdateDynamicThingGroup() {
    this.to('iot:UpdateDynamicThingGroup');
    return this;
  }

  /**
   * Updates event configurations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateEventConfigurations.html
   */
  public toUpdateEventConfigurations() {
    this.to('iot:UpdateEventConfigurations');
    return this;
  }

  /**
   * Updates fleet indexing configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateIndexingConfiguration.html
   */
  public toUpdateIndexingConfiguration() {
    this.to('iot:UpdateIndexingConfiguration');
    return this;
  }

  /**
   * Updates a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateJob.html
   */
  public toUpdateJob() {
    this.to('iot:UpdateJob');
    return this;
  }

  /**
   * Updates a job execution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateJobExecution.html
   */
  public toUpdateJobExecution() {
    this.to('iot:UpdateJobExecution');
    return this;
  }

  /**
   * Updates the definition for the specified mitigation action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateMitigationAction.html
   */
  public toUpdateMitigationAction() {
    this.to('iot:UpdateMitigationAction');
    return this;
  }

  /**
   * Updates a fleet provisioning template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateProvisioningTemplate.html
   */
  public toUpdateProvisioningTemplate() {
    this.to('iot:UpdateProvisioningTemplate');
    return this;
  }

  /**
   * Updates the role alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateRoleAlias.html
   */
  public toUpdateRoleAlias() {
    this.to('iot:UpdateRoleAlias');
    return this;
  }

  /**
   * Updates a scheduled audit, including what checks are performed and how often the audit takes place.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateScheduledAudit.html
   */
  public toUpdateScheduledAudit() {
    this.to('iot:UpdateScheduledAudit');
    return this;
  }

  /**
   * Updates a Device Defender security profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateSecurityProfile.html
   */
  public toUpdateSecurityProfile() {
    this.to('iot:UpdateSecurityProfile');
    return this;
  }

  /**
   * Updates the data for a stream.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateStream.html
   */
  public toUpdateStream() {
    this.to('iot:UpdateStream');
    return this;
  }

  /**
   * Updates information associated with the specified thing.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThing.html
   */
  public toUpdateThing() {
    this.to('iot:UpdateThing');
    return this;
  }

  /**
   * Updates information associated with the specified thing group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroup.html
   */
  public toUpdateThingGroup() {
    this.to('iot:UpdateThingGroup');
    return this;
  }

  /**
   * Updates the thing groups to which the thing belongs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateThingGroupsForThing.html
   */
  public toUpdateThingGroupsForThing() {
    this.to('iot:UpdateThingGroupsForThing');
    return this;
  }

  /**
   * Updates the thing shadow.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/policy-actions.html
   */
  public toUpdateThingShadow() {
    this.to('iot:UpdateThingShadow');
    return this;
  }

  /**
   * Validates a Device Defender security profile behaviors specification.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_ValidateSecurityProfileBehaviors.html
   */
  public toValidateSecurityProfileBehaviors() {
    this.to('iot:ValidateSecurityProfileBehaviors');
    return this;
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
      "CreateThingGroup",
      "CreateThingType",
      "DeleteBillingGroup",
      "DeleteDynamicThingGroup",
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
    return this.if(`iot:Delete`, (typeof value !== 'undefined' ? value : true), 'Bool');
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
    return this.if(`iot:DomainName`, value, operator || 'StringLike');
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
    return this.if(`iot:ThingGroupArn`, value, operator || 'StringLike');
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
    return this.if(`iot:TunnelDestinationService`, value, operator || 'StringLike');
  }
}

export type IotActionsWrite = 'AcceptCertificateTransfer' | 'AddThingToBillingGroup' | 'AddThingToThingGroup' | 'AssociateTargetsWithJob' | 'AttachSecurityProfile' | 'AttachThingPrincipal' | 'CancelAuditMitigationActionsTask' | 'CancelAuditTask' | 'CancelCertificateTransfer' | 'CancelJob' | 'CancelJobExecution' | 'ClearDefaultAuthorizer' | 'CloseTunnel' | 'Connect' | 'CreateAuditSuppression' | 'CreateAuthorizer' | 'CreateCertificateFromCsr' | 'CreateDimension' | 'CreateDomainConfiguration' | 'CreateJob' | 'CreateKeysAndCertificate' | 'CreateMitigationAction' | 'CreateOTAUpdate' | 'CreatePolicy' | 'CreatePolicyVersion' | 'CreateProvisioningClaim' | 'CreateProvisioningTemplate' | 'CreateProvisioningTemplateVersion' | 'CreateRoleAlias' | 'CreateScheduledAudit' | 'CreateSecurityProfile' | 'CreateStream' | 'CreateThing' | 'CreateTopicRule' | 'DeleteAccountAuditConfiguration' | 'DeleteAuditSuppression' | 'DeleteAuthorizer' | 'DeleteCACertificate' | 'DeleteCertificate' | 'DeleteDimension' | 'DeleteDomainConfiguration' | 'DeleteJob' | 'DeleteJobExecution' | 'DeleteMitigationAction' | 'DeleteOTAUpdate' | 'DeletePolicy' | 'DeletePolicyVersion' | 'DeleteProvisioningTemplate' | 'DeleteProvisioningTemplateVersion' | 'DeleteRegistrationCode' | 'DeleteRoleAlias' | 'DeleteScheduledAudit' | 'DeleteSecurityProfile' | 'DeleteStream' | 'DeleteThing' | 'DeleteThingShadow' | 'DeleteTopicRule' | 'DeleteV2LoggingLevel' | 'DeprecateThingType' | 'DetachSecurityProfile' | 'DetachThingPrincipal' | 'DisableTopicRule' | 'EnableTopicRule' | 'OpenTunnel' | 'Publish' | 'Receive' | 'RegisterCACertificate' | 'RegisterCertificate' | 'RegisterCertificateWithoutCA' | 'RegisterThing' | 'RejectCertificateTransfer' | 'RemoveThingFromBillingGroup' | 'RemoveThingFromThingGroup' | 'ReplaceTopicRule' | 'SetLoggingOptions' | 'SetV2LoggingLevel' | 'SetV2LoggingOptions' | 'StartAuditMitigationActionsTask' | 'StartNextPendingJobExecution' | 'StartOnDemandAuditTask' | 'StartThingRegistrationTask' | 'StopThingRegistrationTask' | 'Subscribe' | 'TransferCertificate' | 'UpdateAccountAuditConfiguration' | 'UpdateAuditSuppression' | 'UpdateAuthorizer' | 'UpdateBillingGroup' | 'UpdateCACertificate' | 'UpdateCertificate' | 'UpdateDimension' | 'UpdateDomainConfiguration' | 'UpdateDynamicThingGroup' | 'UpdateEventConfigurations' | 'UpdateIndexingConfiguration' | 'UpdateJob' | 'UpdateJobExecution' | 'UpdateMitigationAction' | 'UpdateProvisioningTemplate' | 'UpdateRoleAlias' | 'UpdateScheduledAudit' | 'UpdateSecurityProfile' | 'UpdateStream' | 'UpdateThing' | 'UpdateThingGroup' | 'UpdateThingGroupsForThing' | 'UpdateThingShadow';
export type IotActionsPermissions management = 'AttachPolicy' | 'AttachPrincipalPolicy' | 'DetachPolicy' | 'DetachPrincipalPolicy' | 'SetDefaultAuthorizer' | 'SetDefaultPolicyVersion';

export type IotActionsTagging = 'CreateBillingGroup' | 'CreateDynamicThingGroup' | 'CreateThingGroup' | 'CreateThingType' | 'DeleteBillingGroup' | 'DeleteDynamicThingGroup' | 'DeleteThingGroup' | 'DeleteThingType' | 'TagResource' | 'UntagResource';
export type IotActionsRead = 'DescribeAccountAuditConfiguration' | 'DescribeAuditFinding' | 'DescribeAuditMitigationActionsTask' | 'DescribeAuditSuppression' | 'DescribeAuditTask' | 'DescribeAuthorizer' | 'DescribeBillingGroup' | 'DescribeCACertificate' | 'DescribeCertificate' | 'DescribeDefaultAuthorizer' | 'DescribeDimension' | 'DescribeDomainConfiguration' | 'DescribeEndpoint' | 'DescribeEventConfigurations' | 'DescribeIndex' | 'DescribeJob' | 'DescribeJobExecution' | 'DescribeMitigationAction' | 'DescribeProvisioningTemplate' | 'DescribeProvisioningTemplateVersion' | 'DescribeRoleAlias' | 'DescribeScheduledAudit' | 'DescribeSecurityProfile' | 'DescribeStream' | 'DescribeThing' | 'DescribeThingGroup' | 'DescribeThingRegistrationTask' | 'DescribeThingType' | 'DescribeTunnel' | 'GetCardinality' | 'GetEffectivePolicies' | 'GetIndexingConfiguration' | 'GetJobDocument' | 'GetLoggingOptions' | 'GetOTAUpdate' | 'GetPendingJobExecutions' | 'GetPercentiles' | 'GetPolicy' | 'GetPolicyVersion' | 'GetRegistrationCode' | 'GetStatistics' | 'GetThingShadow' | 'GetTopicRule' | 'GetV2LoggingOptions' | 'SearchIndex' | 'TestAuthorization' | 'TestInvokeAuthorizer' | 'ValidateSecurityProfileBehaviors';
export type IotActionsList = 'ListActiveViolations' | 'ListAttachedPolicies' | 'ListAuditFindings' | 'ListAuditMitigationActionsExecutions' | 'ListAuditMitigationActionsTasks' | 'ListAuditSuppressions' | 'ListAuditTasks' | 'ListAuthorizers' | 'ListBillingGroups' | 'ListCACertificates' | 'ListCertificates' | 'ListCertificatesByCA' | 'ListDimensions' | 'ListDomainConfigurations' | 'ListIndices' | 'ListJobExecutionsForJob' | 'ListJobExecutionsForThing' | 'ListJobs' | 'ListMitigationActions' | 'ListNamedShadowsForThing' | 'ListOTAUpdates' | 'ListOutgoingCertificates' | 'ListPolicies' | 'ListPolicyPrincipals' | 'ListPolicyVersions' | 'ListPrincipalPolicies' | 'ListPrincipalThings' | 'ListProvisioningTemplateVersions' | 'ListProvisioningTemplates' | 'ListRoleAliases' | 'ListScheduledAudits' | 'ListSecurityProfiles' | 'ListSecurityProfilesForTarget' | 'ListStreams' | 'ListTagsForResource' | 'ListTargetsForPolicy' | 'ListTargetsForSecurityProfile' | 'ListThingGroups' | 'ListThingGroupsForThing' | 'ListThingPrincipals' | 'ListThingRegistrationTaskReports' | 'ListThingRegistrationTasks' | 'ListThingTypes' | 'ListThings' | 'ListThingsInBillingGroup' | 'ListThingsInThingGroup' | 'ListTopicRules' | 'ListTunnels' | 'ListV2LoggingLevels' | 'ListViolationEvents';
export type IotActions = IotActionsWrite | IotActionsPermissions management | IotActionsTagging | IotActionsRead | IotActionsList;
