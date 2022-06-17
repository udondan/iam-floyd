import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
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
    return this.to('AssociateAssessmentReportEvidenceFolder');
  }

  /**
   * Grants permission to associate a list of evidence to an assessment report in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchAssociateAssessmentReportEvidence.html
   */
  public toBatchAssociateAssessmentReportEvidence() {
    return this.to('BatchAssociateAssessmentReportEvidence');
  }

  /**
   * Grants permission to create delegations for an assessment in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchCreateDelegationByAssessment.html
   */
  public toBatchCreateDelegationByAssessment() {
    return this.to('BatchCreateDelegationByAssessment');
  }

  /**
   * Grants permission to delete delegations for an assessment in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchDeleteDelegationByAssessment.html
   */
  public toBatchDeleteDelegationByAssessment() {
    return this.to('BatchDeleteDelegationByAssessment');
  }

  /**
   * Grants permission to disassociate a list of evidence from an assessment report in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchDisassociateAssessmentReportEvidence.html
   */
  public toBatchDisassociateAssessmentReportEvidence() {
    return this.to('BatchDisassociateAssessmentReportEvidence');
  }

  /**
   * Grants permission to import a list of evidence to an assessment control in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchImportEvidenceToAssessmentControl.html
   */
  public toBatchImportEvidenceToAssessmentControl() {
    return this.to('BatchImportEvidenceToAssessmentControl');
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
    return this.to('CreateAssessment');
  }

  /**
   * Grants permission to create a framework for use in AWS Audit Manager
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessmentFramework.html
   */
  public toCreateAssessmentFramework() {
    return this.to('CreateAssessmentFramework');
  }

  /**
   * Grants permission to create an assessment report in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessmentReport.html
   */
  public toCreateAssessmentReport() {
    return this.to('CreateAssessmentReport');
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
    return this.to('CreateControl');
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
    return this.to('DeleteAssessment');
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
    return this.to('DeleteAssessmentFramework');
  }

  /**
   * Grants permission to delete a share request for a custom framework in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html
   */
  public toDeleteAssessmentFrameworkShare() {
    return this.to('DeleteAssessmentFrameworkShare');
  }

  /**
   * Grants permission to delete an assessment report in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html
   */
  public toDeleteAssessmentReport() {
    return this.to('DeleteAssessmentReport');
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
    return this.to('DeleteControl');
  }

  /**
   * Grants permission to deregister an account in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ DeregisterAccount.html
   */
  public toDeregisterAccount() {
    return this.to('DeregisterAccount');
  }

  /**
   * Grants permission to deregister the delegated administrator account for AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterOrganizationAdminAccount.html
   */
  public toDeregisterOrganizationAdminAccount() {
    return this.to('DeregisterOrganizationAdminAccount');
  }

  /**
   * Grants permission to disassociate an evidence folder from an assessment report in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DisassociateAssessmentReportEvidenceFolder.html
   */
  public toDisassociateAssessmentReportEvidenceFolder() {
    return this.to('DisassociateAssessmentReportEvidenceFolder');
  }

  /**
   * Grants permission to get the status of an account in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAccountStatus.html
   */
  public toGetAccountStatus() {
    return this.to('GetAccountStatus');
  }

  /**
   * Grants permission to get an assessment created in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAssessment.html
   */
  public toGetAssessment() {
    return this.to('GetAssessment');
  }

  /**
   * Grants permission to get an assessment framework in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAssessmentFramework.html
   */
  public toGetAssessmentFramework() {
    return this.to('GetAssessmentFramework');
  }

  /**
   * Grants permission to get the URL for an assessment report in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetAssessmentReportUrl.html
   */
  public toGetAssessmentReportUrl() {
    return this.to('GetAssessmentReportUrl');
  }

  /**
   * Grants permission to get changelogs for an assessment in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetChangeLogs.html
   */
  public toGetChangeLogs() {
    return this.to('GetChangeLogs');
  }

  /**
   * Grants permission to get a control in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetControl.html
   */
  public toGetControl() {
    return this.to('GetControl');
  }

  /**
   * Grants permission to get all delegations in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetDelegations.html
   */
  public toGetDelegations() {
    return this.to('GetDelegations');
  }

  /**
   * Grants permission to get evidence from AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidence.html
   */
  public toGetEvidence() {
    return this.to('GetEvidence');
  }

  /**
   * Grants permission to get all the evidence from an evidence folder in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceByEvidenceFolder.html
   */
  public toGetEvidenceByEvidenceFolder() {
    return this.to('GetEvidenceByEvidenceFolder');
  }

  /**
   * Grants permission to get the evidence folder from AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFolder.html
   */
  public toGetEvidenceFolder() {
    return this.to('GetEvidenceFolder');
  }

  /**
   * Grants permission to get the evidence folders from an assessment in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFoldersByAssessment.html
   */
  public toGetEvidenceFoldersByAssessment() {
    return this.to('GetEvidenceFoldersByAssessment');
  }

  /**
   * Grants permission to get the evidence folders from an assessment control in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetEvidenceFoldersByAssessmentControl.html
   */
  public toGetEvidenceFoldersByAssessmentControl() {
    return this.to('GetEvidenceFoldersByAssessmentControl');
  }

  /**
   * Grants permission to get analytics data for all active assessments
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetInsights.html
   */
  public toGetInsights() {
    return this.to('GetInsights');
  }

  /**
   * Grants permission to get analytics data for a specific active assessment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetInsightsByAssessment.html
   */
  public toGetInsightsByAssessment() {
    return this.to('GetInsightsByAssessment');
  }

  /**
   * Grants permission to get the delegated administrator account in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetOrganizationAdminAccount.html
   */
  public toGetOrganizationAdminAccount() {
    return this.to('GetOrganizationAdminAccount');
  }

  /**
   * Grants permission to get the services in scope for an assessment in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html
   */
  public toGetServicesInScope() {
    return this.to('GetServicesInScope');
  }

  /**
   * Grants permission to get all settings configured in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetSettings.html
   */
  public toGetSettings() {
    return this.to('GetSettings');
  }

  /**
   * Grants permission to list analytics data for controls in a specific control domain and active assessment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentControlInsightsByControlDomain.html
   */
  public toListAssessmentControlInsightsByControlDomain() {
    return this.to('ListAssessmentControlInsightsByControlDomain');
  }

  /**
   * Grants permission to list all sent or received share requests for custom frameworks in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentFrameworkShareRequests.html
   */
  public toListAssessmentFrameworkShareRequests() {
    return this.to('ListAssessmentFrameworkShareRequests');
  }

  /**
   * Grants permission to list all assessment frameworks in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentFrameworks.html
   */
  public toListAssessmentFrameworks() {
    return this.to('ListAssessmentFrameworks');
  }

  /**
   * Grants permission to list all assessment reports in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessmentReports.html
   */
  public toListAssessmentReports() {
    return this.to('ListAssessmentReports');
  }

  /**
   * Grants permission to list all assessments in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListAssessments.html
   */
  public toListAssessments() {
    return this.to('ListAssessments');
  }

  /**
   * Grants permission to list analytics data for control domains across all active assessments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListControlDomainInsights.html
   */
  public toListControlDomainInsights() {
    return this.to('ListControlDomainInsights');
  }

  /**
   * Grants permission to list analytics data for control domains in a specific active assessment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListControlDomainInsightsByAssessment.html
   */
  public toListControlDomainInsightsByAssessment() {
    return this.to('ListControlDomainInsightsByAssessment');
  }

  /**
   * Grants permission to list analytics data for controls in a specific control domain across all active assessments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListControlInsightsByControlDomain.html
   */
  public toListControlInsightsByControlDomain() {
    return this.to('ListControlInsightsByControlDomain');
  }

  /**
   * Grants permission to list all controls in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListControls.html
   */
  public toListControls() {
    return this.to('ListControls');
  }

  /**
   * Grants permission to list all the data source keywords in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListKeywordsForDataSource.html
   */
  public toListKeywordsForDataSource() {
    return this.to('ListKeywordsForDataSource');
  }

  /**
   * Grants permission to list all notifications in AWS Audit Manager
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListNotifications.html
   */
  public toListNotifications() {
    return this.to('ListNotifications');
  }

  /**
   * Grants permission to list tags for an AWS Audit Manager resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to register an account in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html
   */
  public toRegisterAccount() {
    return this.to('RegisterAccount');
  }

  /**
   * Grants permission to register an account within the organization as the delegated administrator for AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterOrganizationAdminAccount.html
   */
  public toRegisterOrganizationAdminAccount() {
    return this.to('RegisterOrganizationAdminAccount');
  }

  /**
   * Grants permission to create a share request for a custom framework in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_StartAssessmentFrameworkShare.html
   */
  public toStartAssessmentFrameworkShare() {
    return this.to('StartAssessmentFrameworkShare');
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
    return this.to('TagResource');
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
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an assessment in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessment.html
   */
  public toUpdateAssessment() {
    return this.to('UpdateAssessment');
  }

  /**
   * Grants permission to update an assessment control in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentControl.html
   */
  public toUpdateAssessmentControl() {
    return this.to('UpdateAssessmentControl');
  }

  /**
   * Grants permission to update the status of an assessment control set in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentControlSetStatus.html
   */
  public toUpdateAssessmentControlSetStatus() {
    return this.to('UpdateAssessmentControlSetStatus');
  }

  /**
   * Grants permission to update an assessment framework in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentFramework.html
   */
  public toUpdateAssessmentFramework() {
    return this.to('UpdateAssessmentFramework');
  }

  /**
   * Grants permission to update a share request for a custom framework in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentFrameworkShare.html
   */
  public toUpdateAssessmentFrameworkShare() {
    return this.to('UpdateAssessmentFrameworkShare');
  }

  /**
   * Grants permission to update the status of an assessment in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateAssessmentStatus.html
   */
  public toUpdateAssessmentStatus() {
    return this.to('UpdateAssessmentStatus');
  }

  /**
   * Grants permission to update a control in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateControl.html
   */
  public toUpdateControl() {
    return this.to('UpdateControl');
  }

  /**
   * Grants permission to update settings in AWS Audit Manager
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html
   */
  public toUpdateSettings() {
    return this.to('UpdateSettings');
  }

  /**
   * Grants permission to validate the integrity of an assessment report in AWS Audit Manager
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_ValidateAssessmentReportIntegrity.html
   */
  public toValidateAssessmentReportIntegrity() {
    return this.to('ValidateAssessmentReportIntegrity');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateAssessmentReportEvidenceFolder',
      'BatchAssociateAssessmentReportEvidence',
      'BatchCreateDelegationByAssessment',
      'BatchDeleteDelegationByAssessment',
      'BatchDisassociateAssessmentReportEvidence',
      'BatchImportEvidenceToAssessmentControl',
      'CreateAssessment',
      'CreateAssessmentFramework',
      'CreateAssessmentReport',
      'CreateControl',
      'DeleteAssessment',
      'DeleteAssessmentFramework',
      'DeleteAssessmentFrameworkShare',
      'DeleteAssessmentReport',
      'DeleteControl',
      'DeregisterAccount',
      'DeregisterOrganizationAdminAccount',
      'DisassociateAssessmentReportEvidenceFolder',
      'RegisterAccount',
      'RegisterOrganizationAdminAccount',
      'StartAssessmentFrameworkShare',
      'UpdateAssessment',
      'UpdateAssessmentControl',
      'UpdateAssessmentControlSetStatus',
      'UpdateAssessmentFramework',
      'UpdateAssessmentFrameworkShare',
      'UpdateAssessmentStatus',
      'UpdateControl',
      'UpdateSettings'
    ],
    Read: [
      'GetAccountStatus',
      'GetAssessment',
      'GetAssessmentFramework',
      'GetAssessmentReportUrl',
      'GetChangeLogs',
      'GetControl',
      'GetEvidence',
      'GetEvidenceByEvidenceFolder',
      'GetEvidenceFolder',
      'GetEvidenceFoldersByAssessment',
      'GetEvidenceFoldersByAssessmentControl',
      'GetInsights',
      'GetInsightsByAssessment',
      'GetOrganizationAdminAccount',
      'GetServicesInScope',
      'GetSettings',
      'ListTagsForResource',
      'ValidateAssessmentReportIntegrity'
    ],
    List: [
      'GetDelegations',
      'ListAssessmentControlInsightsByControlDomain',
      'ListAssessmentFrameworkShareRequests',
      'ListAssessmentFrameworks',
      'ListAssessmentReports',
      'ListAssessments',
      'ListControlDomainInsights',
      'ListControlDomainInsightsByAssessment',
      'ListControlInsightsByControlDomain',
      'ListControls',
      'ListKeywordsForDataSource',
      'ListNotifications'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type assessment to the statement
   *
   * https://docs.aws.amazon.com/audit-manager/latest/userguide/API_Assessment.html
   *
   * @param assessmentId - Identifier for the assessmentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAssessment(assessmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Auditmanager.defaultPartition }:auditmanager:${ region || '*' }:${ account || '*' }:assessment/${ assessmentId }`);
  }

  /**
   * Adds a resource of type assessmentFramework to the statement
   *
   * https://docs.aws.amazon.com/audit-manager/latest/userguide/API_AssessmentFramework.html
   *
   * @param assessmentFrameworkId - Identifier for the assessmentFrameworkId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAssessmentFramework(assessmentFrameworkId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Auditmanager.defaultPartition }:auditmanager:${ region || '*' }:${ account || '*' }:assessmentFramework/${ assessmentFrameworkId }`);
  }

  /**
   * Adds a resource of type assessmentControlSet to the statement
   *
   * https://docs.aws.amazon.com/audit-manager/latest/userguide/API_AssessmentControlSet.html
   *
   * @param assessmentId - Identifier for the assessmentId.
   * @param controlSetId - Identifier for the controlSetId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAssessmentControlSet(assessmentId: string, controlSetId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Auditmanager.defaultPartition }:auditmanager:${ region || '*' }:${ account || '*' }:assessment/${ assessmentId }/ControlSet/${ controlSetId }`);
  }

  /**
   * Adds a resource of type control to the statement
   *
   * https://docs.aws.amazon.com/audit-manager/latest/userguide/API_Control.html
   *
   * @param controlId - Identifier for the controlId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onControl(controlId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Auditmanager.defaultPartition }:auditmanager:${ region || '*' }:${ account || '*' }:control/${ controlId }`);
  }
}
