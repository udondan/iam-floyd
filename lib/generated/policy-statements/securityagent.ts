import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [securityagent](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecurityagent.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Securityagent extends PolicyStatement {
  public servicePrefix = 'securityagent';

  /**
   * Statement provider for service [securityagent](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecurityagent.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add an Artifact for the given Agent Instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_AddArtifact.html
   */
  public toAddArtifact() {
    return this.to('AddArtifact');
  }

  /**
   * Grants permission to add a customer managed Control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_AddControl.html
   */
  public toAddControl() {
    return this.to('AddControl');
  }

  /**
   * Grants permission to delete multiple penetration tests in a single request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_BatchDeletePentests.html
   */
  public toBatchDeletePentests() {
    return this.to('BatchDeletePentests');
  }

  /**
   * Grants permission to retrieve multiple agent instances in a single request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_BatchGetAgentInstances.html
   */
  public toBatchGetAgentInstances() {
    return this.to('BatchGetAgentInstances');
  }

  /**
   * Grants permission to retrieve multiple agent spaces in a single request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_BatchGetAgentSpaces.html
   */
  public toBatchGetAgentSpaces() {
    return this.to('BatchGetAgentSpaces');
  }

  /**
   * Grants permission to retrieve one or more Artifact Metadata records for the given Agent Instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_BatchGetArtifactMetadata.html
   */
  public toBatchGetArtifactMetadata() {
    return this.to('BatchGetArtifactMetadata');
  }

  /**
   * Grants permission to retrieve multiple security testing findings in a single request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_BatchGetFindings.html
   */
  public toBatchGetFindings() {
    return this.to('BatchGetFindings');
  }

  /**
   * Grants permission to retrieve multiple pentest job tasks in a single request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_BatchGetPentestJobTasks.html
   */
  public toBatchGetPentestJobTasks() {
    return this.to('BatchGetPentestJobTasks');
  }

  /**
   * Grants permission to retrieve multiple security testing jobs in a single request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_BatchGetPentestJobs.html
   */
  public toBatchGetPentestJobs() {
    return this.to('BatchGetPentestJobs');
  }

  /**
   * Grants permission to retrieve multiple penetration tests in a single request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_BatchGetPentests.html
   */
  public toBatchGetPentests() {
    return this.to('BatchGetPentests');
  }

  /**
   * Grants permission to retrieve multiple security testing contents metadata in a single request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_BatchGetSecurityTestContentMetadata.html
   */
  public toBatchGetSecurityTestContentMetadata() {
    return this.to('BatchGetSecurityTestContentMetadata');
  }

  /**
   * Grants permission to retrieve multiple security testing tasks in a single request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_BatchGetTasks.html
   */
  public toBatchGetTasks() {
    return this.to('BatchGetTasks');
  }

  /**
   * Grants permission to create an agent instance record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_CreateAgentInstance.html
   */
  public toCreateAgentInstance() {
    return this.to('CreateAgentInstance');
  }

  /**
   * Grants permission to create an agent space record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_CreateAgentSpace.html
   */
  public toCreateAgentSpace() {
    return this.to('CreateAgentSpace');
  }

  /**
   * Grants permission to create a new application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   * - sso:CreateApplication
   *
   * https://docs.aws.amazon.com/securityagent/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create a design review
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_CreateDesignReview.html
   */
  public toCreateDesignReview() {
    return this.to('CreateDesignReview');
  }

  /**
   * Grants permission to create a document review
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_CreateDocumentReview.html
   */
  public toCreateDocumentReview() {
    return this.to('CreateDocumentReview');
  }

  /**
   * Grants permission to create a security testing integration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_CreateIntegration.html
   */
  public toCreateIntegration() {
    return this.to('CreateIntegration');
  }

  /**
   * Grants permission to add a single member to a agent instance with specified role
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_CreateMembership.html
   */
  public toCreateMembership() {
    return this.to('CreateMembership');
  }

  /**
   * Grants permission to create a one time login session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_CreateOneTimeLoginSession.html
   */
  public toCreateOneTimeLoginSession() {
    return this.to('CreateOneTimeLoginSession');
  }

  /**
   * Grants permission to create a new penetration test configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_CreatePentest.html
   */
  public toCreatePentest() {
    return this.to('CreatePentest');
  }

  /**
   * Grants permission to add a customer managed Security Requirement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_CreateSecurityRequirement.html
   */
  public toCreateSecurityRequirement() {
    return this.to('CreateSecurityRequirement');
  }

  /**
   * Grants permission to delete an agent instance record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_DeleteAgentInstance.html
   */
  public toDeleteAgentInstance() {
    return this.to('DeleteAgentInstance');
  }

  /**
   * Grants permission to delete an agent space record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_DeleteAgentSpace.html
   */
  public toDeleteAgentSpace() {
    return this.to('DeleteAgentSpace');
  }

  /**
   * Grants permission to delete application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete an Artifact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_DeleteArtifact.html
   */
  public toDeleteArtifact() {
    return this.to('DeleteArtifact');
  }

  /**
   * Grants permission to delete a customer managed Control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_DeleteControl.html
   */
  public toDeleteControl() {
    return this.to('DeleteControl');
  }

  /**
   * Grants permission to delete a design review
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_DeleteDesignReview.html
   */
  public toDeleteDesignReview() {
    return this.to('DeleteDesignReview');
  }

  /**
   * Grants permission to delete a document review
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_DeleteDocumentReview.html
   */
  public toDeleteDocumentReview() {
    return this.to('DeleteDocumentReview');
  }

  /**
   * Grants permission to delete the integration of an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_DeleteIntegration.html
   */
  public toDeleteIntegration() {
    return this.to('DeleteIntegration');
  }

  /**
   * Grants permission to remove a single member associated to an agent instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_DeleteMembership.html
   */
  public toDeleteMembership() {
    return this.to('DeleteMembership');
  }

  /**
   * Grants permission to delete a customer managed Security Requirement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_DeleteSecurityRequirement.html
   */
  public toDeleteSecurityRequirement() {
    return this.to('DeleteSecurityRequirement');
  }

  /**
   * Grants permission to retrieve security findings for a penetration test or security testing tasks in a penetration test
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_DescribeFindings.html
   */
  public toDescribeFindings() {
    return this.to('DescribeFindings');
  }

  /**
   * Grants permission to get application details by application ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_GetApplication.html
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Grants permission to retrieve an Artifact for the given Agent Instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_GetArtifact.html
   */
  public toGetArtifact() {
    return this.to('GetArtifact');
  }

  /**
   * Grants permission to retrieve a Code Review Task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_GetCodeReviewTask.html
   */
  public toGetCodeReviewTask() {
    return this.to('GetCodeReviewTask');
  }

  /**
   * Grants permission to retrieve a Control
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_GetControl.html
   */
  public toGetControl() {
    return this.to('GetControl');
  }

  /**
   * Grants permission to get the status of the associated agent space design review
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_GetDesignReview.html
   */
  public toGetDesignReview() {
    return this.to('GetDesignReview');
  }

  /**
   * Grants permission to get design review artifact for a specific document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_GetDesignReviewArtifact.html
   */
  public toGetDesignReviewArtifact() {
    return this.to('GetDesignReviewArtifact');
  }

  /**
   * Grants permission to retrieve a document review task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_GetDocReviewTask.html
   */
  public toGetDocReviewTask() {
    return this.to('GetDocReviewTask');
  }

  /**
   * Grants permission to get the status of the associated agent instance document review
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_GetDocumentReview.html
   */
  public toGetDocumentReview() {
    return this.to('GetDocumentReview');
  }

  /**
   * Grants permission to get document review artifact for a specific document
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_GetDocumentReviewArtifact.html
   */
  public toGetDocumentReviewArtifact() {
    return this.to('GetDocumentReviewArtifact');
  }

  /**
   * Grants permission to get the integration metadata by ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_GetIntegration.html
   */
  public toGetIntegration() {
    return this.to('GetIntegration');
  }

  /**
   * Grants permission to retrieve credentials for a one time login session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_GetLoginSessionCredentials.html
   */
  public toGetLoginSessionCredentials() {
    return this.to('GetLoginSessionCredentials');
  }

  /**
   * Grants permission to retrieve a Security Requirement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_GetSecurityRequirement.html
   */
  public toGetSecurityRequirement() {
    return this.to('GetSecurityRequirement');
  }

  /**
   * Grants permission to process and invalidate a one time login session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_HandleOneTimeLoginSession.html
   */
  public toHandleOneTimeLoginSession() {
    return this.to('HandleOneTimeLoginSession');
  }

  /**
   * Grants permission to initiate the registration of Security Agent App for the given provider (eg: GitHub)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_InitiateProviderRegistration.html
   */
  public toInitiateProviderRegistration() {
    return this.to('InitiateProviderRegistration');
  }

  /**
   * Grants permission to list tasks for a specific agent instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListAgentInstanceTasks.html
   */
  public toListAgentInstanceTasks() {
    return this.to('ListAgentInstanceTasks');
  }

  /**
   * Grants permission to list agent instances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListAgentInstances.html
   */
  public toListAgentInstances() {
    return this.to('ListAgentInstances');
  }

  /**
   * Grants permission to list agent spaces
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListAgentSpaces.html
   */
  public toListAgentSpaces() {
    return this.to('ListAgentSpaces');
  }

  /**
   * Grants permission to list all applications in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to list all artifacts for the given project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListArtifacts.html
   */
  public toListArtifacts() {
    return this.to('ListArtifacts');
  }

  /**
   * Grants permission to list all Controls
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListControls.html
   */
  public toListControls() {
    return this.to('ListControls');
  }

  /**
   * Grants permission to list design review comments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListDesignReviewComments.html
   */
  public toListDesignReviewComments() {
    return this.to('ListDesignReviewComments');
  }

  /**
   * Grants permission to list all design reviews for the given project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListDesignReviews.html
   */
  public toListDesignReviews() {
    return this.to('ListDesignReviews');
  }

  /**
   * Grants permission to list discovered endpoints associated with a pentest job with optional URI prefix filtering
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListDiscoveredEndpoints.html
   */
  public toListDiscoveredEndpoints() {
    return this.to('ListDiscoveredEndpoints');
  }

  /**
   * Grants permission to list document review comments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListDocumentReviewComments.html
   */
  public toListDocumentReviewComments() {
    return this.to('ListDocumentReviewComments');
  }

  /**
   * Grants permission to list all document reviews for the given project
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListDocumentReviews.html
   */
  public toListDocumentReviews() {
    return this.to('ListDocumentReviews');
  }

  /**
   * Grants permission to list findings with filtering and pagination support
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListFindings.html
   */
  public toListFindings() {
    return this.to('ListFindings');
  }

  /**
   * Grants permission to list integrated resources for an agent instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListIntegratedResources.html
   */
  public toListIntegratedResources() {
    return this.to('ListIntegratedResources');
  }

  /**
   * Grants permission to get the integrations owned by the caller's AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListIntegrations.html
   */
  public toListIntegrations() {
    return this.to('ListIntegrations');
  }

  /**
   * Grants permission to list all members associated to an agent instance with pagination support
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListMemberships.html
   */
  public toListMemberships() {
    return this.to('ListMemberships');
  }

  /**
   * Grants permission to list pentest job tasks associated with a pentest job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListPentestJobTasks.html
   */
  public toListPentestJobTasks() {
    return this.to('ListPentestJobTasks');
  }

  /**
   * Grants permission to list penetration test jobs associated with a penetration test
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListPentestJobsForPentest.html
   */
  public toListPentestJobsForPentest() {
    return this.to('ListPentestJobsForPentest');
  }

  /**
   * Grants permission to list penetration tests with optional filtering by status
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListPentests.html
   */
  public toListPentests() {
    return this.to('ListPentests');
  }

  /**
   * Grants permission to list resources from Integration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListResourcesFromIntegration.html
   */
  public toListResourcesFromIntegration() {
    return this.to('ListResourcesFromIntegration');
  }

  /**
   * Grants permission to list all Security Requirements
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListSecurityRequirements.html
   */
  public toListSecurityRequirements() {
    return this.to('ListSecurityRequirements');
  }

  /**
   * Grants permission to list security testing tasks associated with a pentest job
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListTasks.html
   */
  public toListTasks() {
    return this.to('ListTasks');
  }

  /**
   * Grants permission to start code remediation for the findings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_StartCodeRemediation.html
   */
  public toStartCodeRemediation() {
    return this.to('StartCodeRemediation');
  }

  /**
   * Grants permission to initiate the execution of a penetration test
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_StartPentestExecution.html
   */
  public toStartPentestExecution() {
    return this.to('StartPentestExecution');
  }

  /**
   * Grants permission to initiate the execution of a penetration test
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_StartPentestJob.html
   */
  public toStartPentestJob() {
    return this.to('StartPentestJob');
  }

  /**
   * Grants permission to stop the execution of a running penetration test
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_StopPentestExecution.html
   */
  public toStopPentestExecution() {
    return this.to('StopPentestExecution');
  }

  /**
   * Grants permission to stop the execution of a running penetration test
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_StopPentestJob.html
   */
  public toStopPentestJob() {
    return this.to('StopPentestJob');
  }

  /**
   * Grants permission to toggle the status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_ToggleManagedControl.html
   */
  public toToggleManagedControl() {
    return this.to('ToggleManagedControl');
  }

  /**
   * Grants permission to toggle the status of a managed Security Requirement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_ToggleManagedSecurityRequirement.html
   */
  public toToggleManagedSecurityRequirement() {
    return this.to('ToggleManagedSecurityRequirement');
  }

  /**
   * Grants permission to update an agent instance record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_UpdateAgentInstance.html
   */
  public toUpdateAgentInstance() {
    return this.to('UpdateAgentInstance');
  }

  /**
   * Grants permission to update an agent space record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_UpdateAgentSpace.html
   */
  public toUpdateAgentSpace() {
    return this.to('UpdateAgentSpace');
  }

  /**
   * Grants permission to update application configuration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/securityagent/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Grants permission to update a customer managed Control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_UpdateControl.html
   */
  public toUpdateControl() {
    return this.to('UpdateControl');
  }

  /**
   * Grants permission to update an existing security finding with new details or status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_UpdateFinding.html
   */
  public toUpdateFinding() {
    return this.to('UpdateFinding');
  }

  /**
   * Grants permission to update integrated resources for an agent instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_UpdateIntegratedResources.html
   */
  public toUpdateIntegratedResources() {
    return this.to('UpdateIntegratedResources');
  }

  /**
   * Grants permission to update an existing penetration test with new configuration or settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_UpdatePentest.html
   */
  public toUpdatePentest() {
    return this.to('UpdatePentest');
  }

  /**
   * Grants permission to update a customer managed Security Requirement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_UpdateSecurityRequirement.html
   */
  public toUpdateSecurityRequirement() {
    return this.to('UpdateSecurityRequirement');
  }

  /**
   * Grants permission to verify ownership for a registered target domain in an agent instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_VerifyTargetDomain.html
   */
  public toVerifyTargetDomain() {
    return this.to('VerifyTargetDomain');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddArtifact',
      'AddControl',
      'BatchDeletePentests',
      'CreateAgentInstance',
      'CreateAgentSpace',
      'CreateApplication',
      'CreateDesignReview',
      'CreateDocumentReview',
      'CreateIntegration',
      'CreateMembership',
      'CreateOneTimeLoginSession',
      'CreatePentest',
      'CreateSecurityRequirement',
      'DeleteAgentInstance',
      'DeleteAgentSpace',
      'DeleteApplication',
      'DeleteArtifact',
      'DeleteControl',
      'DeleteDesignReview',
      'DeleteDocumentReview',
      'DeleteIntegration',
      'DeleteMembership',
      'DeleteSecurityRequirement',
      'HandleOneTimeLoginSession',
      'InitiateProviderRegistration',
      'StartCodeRemediation',
      'StartPentestExecution',
      'StartPentestJob',
      'StopPentestExecution',
      'StopPentestJob',
      'ToggleManagedControl',
      'ToggleManagedSecurityRequirement',
      'UpdateAgentInstance',
      'UpdateAgentSpace',
      'UpdateApplication',
      'UpdateControl',
      'UpdateFinding',
      'UpdateIntegratedResources',
      'UpdatePentest',
      'UpdateSecurityRequirement',
      'VerifyTargetDomain'
    ],
    Read: [
      'BatchGetAgentInstances',
      'BatchGetAgentSpaces',
      'BatchGetArtifactMetadata',
      'BatchGetFindings',
      'BatchGetPentestJobTasks',
      'BatchGetPentestJobs',
      'BatchGetPentests',
      'BatchGetSecurityTestContentMetadata',
      'BatchGetTasks',
      'DescribeFindings',
      'GetApplication',
      'GetArtifact',
      'GetCodeReviewTask',
      'GetControl',
      'GetDesignReview',
      'GetDesignReviewArtifact',
      'GetDocReviewTask',
      'GetDocumentReview',
      'GetDocumentReviewArtifact',
      'GetIntegration',
      'GetLoginSessionCredentials',
      'GetSecurityRequirement'
    ],
    List: [
      'ListAgentInstanceTasks',
      'ListAgentInstances',
      'ListAgentSpaces',
      'ListApplications',
      'ListArtifacts',
      'ListControls',
      'ListDesignReviewComments',
      'ListDesignReviews',
      'ListDiscoveredEndpoints',
      'ListDocumentReviewComments',
      'ListDocumentReviews',
      'ListFindings',
      'ListIntegratedResources',
      'ListIntegrations',
      'ListMemberships',
      'ListPentestJobTasks',
      'ListPentestJobsForPentest',
      'ListPentests',
      'ListResourcesFromIntegration',
      'ListSecurityRequirements',
      'ListTasks'
    ]
  };

  /**
   * Adds a resource of type Application to the statement
   *
   * https://docs.aws.amazon.com/securityagent/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }`);
  }

  /**
   * Adds a resource of type Control to the statement
   *
   * https://docs.aws.amazon.com/securityagent/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param controlId - Identifier for the controlId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onControl(controlId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:control/${ controlId }`);
  }

  /**
   * Adds a resource of type SecurityRequirement to the statement
   *
   * https://docs.aws.amazon.com/securityagent/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param securityRequirementId - Identifier for the securityRequirementId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSecurityRequirement(securityRequirementId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:security-requirement/${ securityRequirementId }`);
  }

  /**
   * Adds a resource of type Integration to the statement
   *
   * https://docs.aws.amazon.com/securityagent/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param integrationId - Identifier for the integrationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onIntegration(integrationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:integration/${ integrationId }`);
  }

  /**
   * Adds a resource of type AgentInstance to the statement
   *
   * https://docs.aws.amazon.com/securityagent/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param agentId - Identifier for the agentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAgentInstance(agentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agent-instance/${ agentId }`);
  }

  /**
   * Adds a resource of type AgentSpace to the statement
   *
   * https://docs.aws.amazon.com/securityagent/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param agentId - Identifier for the agentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAgentSpace(agentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agent-space/${ agentId }`);
  }

  /**
   * Adds a resource of type Artifact to the statement
   *
   * https://docs.aws.amazon.com/securityagent/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param agentId - Identifier for the agentId.
   * @param artifactId - Identifier for the artifactId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onArtifact(agentId: string, artifactId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agent-space/${ agentId }/artifact/${ artifactId }`);
  }

  /**
   * Adds a resource of type Pentest to the statement
   *
   * https://docs.aws.amazon.com/securityagent/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param agentId - Identifier for the agentId.
   * @param pentestId - Identifier for the pentestId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPentest(agentId: string, pentestId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agent-space/${ agentId }/pentest/${ pentestId }`);
  }

  /**
   * Adds a resource of type PentestJob to the statement
   *
   * https://docs.aws.amazon.com/securityagent/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param agentId - Identifier for the agentId.
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPentestJob(agentId: string, jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agent-space/${ agentId }/pentest-job/${ jobId }`);
  }

  /**
   * Adds a resource of type PentestTask to the statement
   *
   * https://docs.aws.amazon.com/securityagent/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param agentId - Identifier for the agentId.
   * @param taskId - Identifier for the taskId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPentestTask(agentId: string, taskId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agent-space/${ agentId }/pentest-task/${ taskId }`);
  }

  /**
   * Adds a resource of type Finding to the statement
   *
   * https://docs.aws.amazon.com/securityagent/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param agentId - Identifier for the agentId.
   * @param findingId - Identifier for the findingId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onFinding(agentId: string, findingId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agent-space/${ agentId }/finding/${ findingId }`);
  }
}
