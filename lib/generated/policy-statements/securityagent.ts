import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to add an Artifact for the given Agent Space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_AddArtifact.html
   */
  public toAddArtifact() {
    return this.to('AddArtifact');
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
   * Grants permission to retrieve one or more Artifact Metadata records for the given Agent Space
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
   * Grants permission to retrieve multiple pentest job contents metadata in a single request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_BatchGetPentestJobContentMetadata.html
   */
  public toBatchGetPentestJobContentMetadata() {
    return this.to('BatchGetPentestJobContentMetadata');
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
   * Grants permission to retrieve multiple target domains in a single request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_BatchGetTargetDomains.html
   */
  public toBatchGetTargetDomains() {
    return this.to('BatchGetTargetDomains');
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
   * Grants permission to create an agent space record
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * Grants permission to create a security testing integration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/securityagent/API_CreateIntegration.html
   */
  public toCreateIntegration() {
    return this.to('CreateIntegration');
  }

  /**
   * Grants permission to add a single member to a agent space with specified role
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
   * Grants permission to create a target domain record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_CreateTargetDomain.html
   */
  public toCreateTargetDomain() {
    return this.to('CreateTargetDomain');
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
   * Grants permission to remove a single member associated to an agent space
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
   * Grants permission to delete a target domain record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_DeleteTargetDomain.html
   */
  public toDeleteTargetDomain() {
    return this.to('DeleteTargetDomain');
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
   * Grants permission to retrieve an Artifact for the given Agent Space
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
   * Grants permission to get feedback for a design review comment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_GetDesignReviewFeedback.html
   */
  public toGetDesignReviewFeedback() {
    return this.to('GetDesignReviewFeedback');
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
   * Grants permission to list integrated resources for an agent space
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
   * Grants permission to list all members associated to an agent space with pagination support
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
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/securityagent/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list target domains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/securityagent/API_ListTargetDomains.html
   */
  public toListTargetDomains() {
    return this.to('ListTargetDomains');
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
   * Grants permission to submit feedback for a design review comment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_PutDesignReviewFeedback.html
   */
  public toPutDesignReviewFeedback() {
    return this.to('PutDesignReviewFeedback');
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
   * Grants permission to add tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/securityagent/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
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
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/securityagent/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
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
   * Grants permission to update integrated resources for an agent space
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
   * Grants permission to update a target domain record
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/securityagent/API_UpdateTargetDomain.html
   */
  public toUpdateTargetDomain() {
    return this.to('UpdateTargetDomain');
  }

  /**
   * Grants permission to verify ownership for a registered target domain
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
      'BatchDeletePentests',
      'CreateAgentSpace',
      'CreateApplication',
      'CreateDesignReview',
      'CreateIntegration',
      'CreateMembership',
      'CreateOneTimeLoginSession',
      'CreatePentest',
      'CreateSecurityRequirement',
      'CreateTargetDomain',
      'DeleteAgentSpace',
      'DeleteApplication',
      'DeleteArtifact',
      'DeleteDesignReview',
      'DeleteIntegration',
      'DeleteMembership',
      'DeleteSecurityRequirement',
      'DeleteTargetDomain',
      'InitiateProviderRegistration',
      'PutDesignReviewFeedback',
      'StartCodeRemediation',
      'StartPentestExecution',
      'StartPentestJob',
      'StopPentestExecution',
      'StopPentestJob',
      'ToggleManagedSecurityRequirement',
      'UpdateAgentSpace',
      'UpdateApplication',
      'UpdateFinding',
      'UpdateIntegratedResources',
      'UpdatePentest',
      'UpdateSecurityRequirement',
      'UpdateTargetDomain',
      'VerifyTargetDomain'
    ],
    Read: [
      'BatchGetAgentSpaces',
      'BatchGetArtifactMetadata',
      'BatchGetFindings',
      'BatchGetPentestJobContentMetadata',
      'BatchGetPentestJobTasks',
      'BatchGetPentestJobs',
      'BatchGetPentests',
      'BatchGetSecurityTestContentMetadata',
      'BatchGetTargetDomains',
      'BatchGetTasks',
      'DescribeFindings',
      'GetApplication',
      'GetArtifact',
      'GetCodeReviewTask',
      'GetDesignReview',
      'GetDesignReviewArtifact',
      'GetDesignReviewFeedback',
      'GetDocReviewTask',
      'GetIntegration',
      'GetSecurityRequirement',
      'ListTagsForResource'
    ],
    List: [
      'ListAgentSpaces',
      'ListApplications',
      'ListArtifacts',
      'ListDesignReviewComments',
      'ListDesignReviews',
      'ListDiscoveredEndpoints',
      'ListFindings',
      'ListIntegratedResources',
      'ListIntegrations',
      'ListMemberships',
      'ListPentestJobTasks',
      'ListPentestJobsForPentest',
      'ListPentests',
      'ListResourcesFromIntegration',
      'ListSecurityRequirements',
      'ListTargetDomains',
      'ListTasks'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }`);
  }

  /**
   * Adds a resource of type SecurityRequirementPack to the statement
   *
   * https://docs.aws.amazon.com/securityagent/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param securityRequirementPackId - Identifier for the securityRequirementPackId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecurityRequirementPack(securityRequirementPackId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:security-requirement-pack/${ securityRequirementPackId }`);
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegration(integrationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:integration/${ integrationId }`);
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAgentSpace(agentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:agent-space/${ agentId }`);
  }

  /**
   * Adds a resource of type TargetDomain to the statement
   *
   * https://docs.aws.amazon.com/securityagent/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats
   *
   * @param targetDomainId - Identifier for the targetDomainId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTargetDomain(targetDomainId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:securityagent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:target-domain/${ targetDomainId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAgentSpace()
   * - .toCreateApplication()
   * - .toCreateIntegration()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Application
   * - SecurityRequirementPack
   * - Integration
   * - AgentSpace
   * - TargetDomain
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAgentSpace()
   * - .toCreateApplication()
   * - .toCreateIntegration()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
