import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [auditmanager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsauditmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Auditmanager extends PolicyStatement {
  public servicePrefix = 'auditmanager';

  /**
   * Statement provider for service [auditmanager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsauditmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate an evidence folder with an assessment report in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_AssociateAssessmentReportEvidenceFolder.html
   */
  public toAssociateAssessmentReportEvidenceFolder() {
    this.to('auditmanager:AssociateAssessmentReportEvidenceFolder');
    return this;
  }

  /**
   * Grants permission to associate a list of evidence to an assessment report in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchAssociateAssessmentReportEvidence.html
   */
  public toBatchAssociateAssessmentReportEvidence() {
    this.to('auditmanager:BatchAssociateAssessmentReportEvidence');
    return this;
  }

  /**
   * Grants permission to create delegations for an assessment in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchCreateDelegationByAssessment.html
   */
  public toBatchCreateDelegationByAssessment() {
    this.to('auditmanager:BatchCreateDelegationByAssessment');
    return this;
  }

  /**
   * Grants permission to delete delegations for an assessment in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchDeleteDelegationByAssessment.html
   */
  public toBatchDeleteDelegationByAssessment() {
    this.to('auditmanager:BatchDeleteDelegationByAssessment');
    return this;
  }

  /**
   * Grants permission to disassociate a list of evidence from an assessment report in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchDisassociateAssessmentReportEvidence.html
   */
  public toBatchDisassociateAssessmentReportEvidence() {
    this.to('auditmanager:BatchDisassociateAssessmentReportEvidence');
    return this;
  }

  /**
   * Grants permission to import a list of evidence to an assessment control in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchImportEvidenceToAssessmentControl.html
   */
  public toBatchImportEvidenceToAssessmentControl() {
    this.to('auditmanager:BatchImportEvidenceToAssessmentControl');
    return this;
  }

  /**
   * Grants permission to create an assessment to be used with AWS Audit Manager
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html
   */
  public toCreateAssessment() {
    this.to('auditmanager:CreateAssessment');
    return this;
  }

  /**
   * Grants permission to create a framework for use in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessmentFramework.html
   */
  public toCreateAssessmentFramework() {
    this.to('auditmanager:CreateAssessmentFramework');
    return this;
  }

  /**
   * Grants permission to create an assessment report in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessmentReport.html
   */
  public toCreateAssessmentReport() {
    this.to('auditmanager:CreateAssessmentReport');
    return this;
  }

  /**
   * Grants permission to create a control to be used in AWS Audit Manager
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateControl.html
   */
  public toCreateControl() {
    this.to('auditmanager:CreateControl');
    return this;
  }

  /**
   * Grants permission to delete an assessment in AWS Audit Manager
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html
   */
  public toDeleteAssessment() {
    this.to('auditmanager:DeleteAssessment');
    return this;
  }

  /**
   * Grants permission to delete an assessment framework in AWS Audit Manager
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html
   */
  public toDeleteAssessmentFramework() {
    this.to('auditmanager:DeleteAssessmentFramework');
    return this;
  }

  /**
   * Grants permission to delete an assessment report in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html
   */
  public toDeleteAssessmentReport() {
    this.to('auditmanager:DeleteAssessmentReport');
    return this;
  }

  /**
   * Grants permission to delete a control in AWS Audit Manager
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html
   */
  public toDeleteControl() {
    this.to('auditmanager:DeleteControl');
    return this;
  }

  /**
   * Grants permission to deregister an account in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ DeregisterAccount.html
   */
  public toDeregisterAccount() {
    this.to('auditmanager:DeregisterAccount');
    return this;
  }

  /**
   * Grants permission to deregister the delegated administrator account for AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterOrganizationAdminAccount.html
   */
  public toDeregisterOrganizationAdminAccount() {
    this.to('auditmanager:DeregisterOrganizationAdminAccount');
    return this;
  }

  /**
   * Grants permission to disassociate an evidence folder from an assessment report in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DisassociateAssessmentReportEvidenceFolder.html
   */
  public toDisassociateAssessmentReportEvidenceFolder() {
    this.to('auditmanager:DisassociateAssessmentReportEvidenceFolder');
    return this;
  }

  /**
   * Grants permission to get the status of an account in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAccountStatus.html
   */
  public toGetAccountStatus() {
    this.to('auditmanager:GetAccountStatus');
    return this;
  }

  /**
   * Grants permission to get an assessment created in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAssessment.html
   */
  public toGetAssessment() {
    this.to('auditmanager:GetAssessment');
    return this;
  }

  /**
   * Grants permission to get an assessment framework in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAssessmentFramework.html
   */
  public toGetAssessmentFramework() {
    this.to('auditmanager:GetAssessmentFramework');
    return this;
  }

  /**
   * Grants permission to get the URL for an assessment report in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAssessmentReportUrl.html
   */
  public toGetAssessmentReportUrl() {
    this.to('auditmanager:GetAssessmentReportUrl');
    return this;
  }

  /**
   * Grants permission to get changelogs for an assessment in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetChangeLogs.html
   */
  public toGetChangeLogs() {
    this.to('auditmanager:GetChangeLogs');
    return this;
  }

  /**
   * Grants permission to get a control in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetControl.html
   */
  public toGetControl() {
    this.to('auditmanager:GetControl');
    return this;
  }

  /**
   * Grants permission to get all delegations in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetDelegations.html
   */
  public toGetDelegations() {
    this.to('auditmanager:GetDelegations');
    return this;
  }

  /**
   * Grants permission to get evidence from AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidence.html
   */
  public toGetEvidence() {
    this.to('auditmanager:GetEvidence');
    return this;
  }

  /**
   * Grants permission to get all the evidence from an evidence folder in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceByEvidenceFolder.html
   */
  public toGetEvidenceByEvidenceFolder() {
    this.to('auditmanager:GetEvidenceByEvidenceFolder');
    return this;
  }

  /**
   * Grants permission to get the evidence folder from AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFolder.html
   */
  public toGetEvidenceFolder() {
    this.to('auditmanager:GetEvidenceFolder');
    return this;
  }

  /**
   * Grants permission to get the evidence folders from an assessment in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFoldersByAssessment.html
   */
  public toGetEvidenceFoldersByAssessment() {
    this.to('auditmanager:GetEvidenceFoldersByAssessment');
    return this;
  }

  /**
   * Grants permission to get the evidence folders from an assessment control in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFoldersByAssessmentControl.html
   */
  public toGetEvidenceFoldersByAssessmentControl() {
    this.to('auditmanager:GetEvidenceFoldersByAssessmentControl');
    return this;
  }

  /**
   * Grants permission to get the delegated administrator account in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetOrganizationAdminAccount.html
   */
  public toGetOrganizationAdminAccount() {
    this.to('auditmanager:GetOrganizationAdminAccount');
    return this;
  }

  /**
   * Grants permission to get the services in scope for an assessment in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html
   */
  public toGetServicesInScope() {
    this.to('auditmanager:GetServicesInScope');
    return this;
  }

  /**
   * Grants permission to get all settings configured in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetSettings.html
   */
  public toGetSettings() {
    this.to('auditmanager:GetSettings');
    return this;
  }

  /**
   * Grants permission to list all assessment frameworks in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentFrameworks.html
   */
  public toListAssessmentFrameworks() {
    this.to('auditmanager:ListAssessmentFrameworks');
    return this;
  }

  /**
   * Grants permission to list all assessment reports in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentReports.html
   */
  public toListAssessmentReports() {
    this.to('auditmanager:ListAssessmentReports');
    return this;
  }

  /**
   * Grants permission to list all assessments in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessments.html
   */
  public toListAssessments() {
    this.to('auditmanager:ListAssessments');
    return this;
  }

  /**
   * Grants permission to list all controls in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListControls.html
   */
  public toListControls() {
    this.to('auditmanager:ListControls');
    return this;
  }

  /**
   * Grants permission to list all the data source keywords in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListKeywordsForDataSource.html
   */
  public toListKeywordsForDataSource() {
    this.to('auditmanager:ListKeywordsForDataSource');
    return this;
  }

  /**
   * Grants permission to list all notifications in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListNotifications.html
   */
  public toListNotifications() {
    this.to('auditmanager:ListNotifications');
    return this;
  }

  /**
   * Grants permission to list tags for an AWS Audit Manager resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('auditmanager:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to register an account in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html
   */
  public toRegisterAccount() {
    this.to('auditmanager:RegisterAccount');
    return this;
  }

  /**
   * Grants permission to register an account within the organization as the delegated administrator for AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterOrganizationAdminAccount.html
   */
  public toRegisterOrganizationAdminAccount() {
    this.to('auditmanager:RegisterOrganizationAdminAccount');
    return this;
  }

  /**
   * Grants permission to tag an AWS Audit Manager resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('auditmanager:TagResource');
    return this;
  }

  /**
   * Grants permission to untag an AWS Audit Manager resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('auditmanager:UntagResource');
    return this;
  }

  /**
   * Grants permission to update an assessment in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessment.html
   */
  public toUpdateAssessment() {
    this.to('auditmanager:UpdateAssessment');
    return this;
  }

  /**
   * Grants permission to update an assessment control in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentControl.html
   */
  public toUpdateAssessmentControl() {
    this.to('auditmanager:UpdateAssessmentControl');
    return this;
  }

  /**
   * Grants permission to update the status of an assessment control set in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentControlSetStatus.html
   */
  public toUpdateAssessmentControlSetStatus() {
    this.to('auditmanager:UpdateAssessmentControlSetStatus');
    return this;
  }

  /**
   * Grants permission to update an assessment framework in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentFramework.html
   */
  public toUpdateAssessmentFramework() {
    this.to('auditmanager:UpdateAssessmentFramework');
    return this;
  }

  /**
   * Grants permission to update the status of an assessment in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentStatus.html
   */
  public toUpdateAssessmentStatus() {
    this.to('auditmanager:UpdateAssessmentStatus');
    return this;
  }

  /**
   * Grants permission to update a control in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateControl.html
   */
  public toUpdateControl() {
    this.to('auditmanager:UpdateControl');
    return this;
  }

  /**
   * Grants permission to update settings in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html
   */
  public toUpdateSettings() {
    this.to('auditmanager:UpdateSettings');
    return this;
  }

  /**
   * Grants permission to validate the integrity of an assessment report in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ValidateAssessmentReportIntegrity.html
   */
  public toValidateAssessmentReportIntegrity() {
    this.to('auditmanager:ValidateAssessmentReportIntegrity');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateAssessmentReportEvidenceFolder",
      "BatchAssociateAssessmentReportEvidence",
      "BatchCreateDelegationByAssessment",
      "BatchDeleteDelegationByAssessment",
      "BatchDisassociateAssessmentReportEvidence",
      "BatchImportEvidenceToAssessmentControl",
      "CreateAssessment",
      "CreateAssessmentFramework",
      "CreateAssessmentReport",
      "CreateControl",
      "DeleteAssessment",
      "DeleteAssessmentFramework",
      "DeleteAssessmentReport",
      "DeleteControl",
      "DeregisterAccount",
      "DeregisterOrganizationAdminAccount",
      "DisassociateAssessmentReportEvidenceFolder",
      "RegisterAccount",
      "RegisterOrganizationAdminAccount",
      "UpdateAssessment",
      "UpdateAssessmentControl",
      "UpdateAssessmentControlSetStatus",
      "UpdateAssessmentFramework",
      "UpdateAssessmentStatus",
      "UpdateControl",
      "UpdateSettings"
    ],
    "Read": [
      "GetAccountStatus",
      "GetAssessment",
      "GetAssessmentFramework",
      "GetAssessmentReportUrl",
      "GetChangeLogs",
      "GetControl",
      "GetEvidence",
      "GetEvidenceByEvidenceFolder",
      "GetEvidenceFolder",
      "GetEvidenceFoldersByAssessment",
      "GetEvidenceFoldersByAssessmentControl",
      "GetOrganizationAdminAccount",
      "GetServicesInScope",
      "GetSettings",
      "ValidateAssessmentReportIntegrity"
    ],
    "List": [
      "GetDelegations",
      "ListAssessmentFrameworks",
      "ListAssessmentReports",
      "ListAssessments",
      "ListControls",
      "ListKeywordsForDataSource",
      "ListNotifications",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type assessment to the statement
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Assessment.html
   *
   * @param assessmentId - Identifier for the assessmentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAssessment(assessmentId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:auditmanager:${Region}:${Account}:assessment/${AssessmentId}';
    arn = arn.replace('${AssessmentId}', assessmentId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type assessmentFramework to the statement
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_AssessmentFramework.html
   *
   * @param assessmentFrameworkId - Identifier for the assessmentFrameworkId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAssessmentFramework(assessmentFrameworkId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:auditmanager:${Region}:${Account}:assessment/${AssessmentFrameworkId}';
    arn = arn.replace('${AssessmentFrameworkId}', assessmentFrameworkId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type assessmentControlSet to the statement
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_AssessmentControlSet.html
   *
   * @param assessmentId - Identifier for the assessmentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAssessmentControlSet(assessmentId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:auditmanager:${Region}:${Account}:assessment/${AssessmentId}/controlSet/{controlSetId}';
    arn = arn.replace('${AssessmentId}', assessmentId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type control to the statement
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Control.html
   *
   * @param controlId - Identifier for the controlId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onControl(controlId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:auditmanager:${Region}:${Account}:control/${ControlId}';
    arn = arn.replace('${ControlId}', controlId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
