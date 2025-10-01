import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [profile](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectcustomerprofiles.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Profile extends PolicyStatement {
  public servicePrefix = 'profile';

  /**
   * Statement provider for service [profile](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectcustomerprofiles.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a profile key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_AddProfileKey.html
   */
  public toAddProfileKey() {
    return this.to('AddProfileKey');
  }

  /**
   * Grants permission to retrieve a calculated attribute for the specific profiles in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_BatchGetCalculatedAttributeForProfile.html
   */
  public toBatchGetCalculatedAttributeForProfile() {
    return this.to('BatchGetCalculatedAttributeForProfile');
  }

  /**
   * Grants permission to get profiles in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_BatchGetProfile.html
   */
  public toBatchGetProfile() {
    return this.to('BatchGetProfile');
  }

  /**
   * Grants permission to create a calculated attribute definition in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateCalculatedAttributeDefinition.html
   */
  public toCreateCalculatedAttributeDefinition() {
    return this.to('CreateCalculatedAttributeDefinition');
  }

  /**
   * Grants permission to create a Domain
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to create a layout in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomainLayout.html
   */
  public toCreateDomainLayout() {
    return this.to('CreateDomainLayout');
  }

  /**
   * Grants permission to put an event stream in a domain
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PutRolePolicy
   * - kinesis:DescribeStreamSummary
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateEventStream.html
   */
  public toCreateEventStream() {
    return this.to('CreateEventStream');
  }

  /**
   * Grants permission to create an event trigger in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateEventTrigger.html
   */
  public toCreateEventTrigger() {
    return this.to('CreateEventTrigger');
  }

  /**
   * Grants permission to create an integration workflow in a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateIntegrationWorkflow.html
   */
  public toCreateIntegrationWorkflow() {
    return this.to('CreateIntegrationWorkflow');
  }

  /**
   * Grants permission to create a profile in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateProfile.html
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
  }

  /**
   * Grants permission to create a segment definition in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateSegmentDefinition.html
   */
  public toCreateSegmentDefinition() {
    return this.to('CreateSegmentDefinition');
  }

  /**
   * Grants permission to create a segment estimate in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateSegmentEstimate.html
   */
  public toCreateSegmentEstimate() {
    return this.to('CreateSegmentEstimate');
  }

  /**
   * Grants permission to create a segment snapshot in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateSegmentSnapshot.html
   */
  public toCreateSegmentSnapshot() {
    return this.to('CreateSegmentSnapshot');
  }

  /**
   * Grants permission to create a snapshot in the domain
   *
   * Access Level: Write
   */
  public toCreateSnapshot() {
    return this.to('CreateSnapshot');
  }

  /**
   * Grants permission to create an upload job in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateUploadJob.html
   */
  public toCreateUploadJob() {
    return this.to('CreateUploadJob');
  }

  /**
   * Grants permission to delete a calculated attribute definition in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteCalculatedAttributeDefinition.html
   */
  public toDeleteCalculatedAttributeDefinition() {
    return this.to('DeleteCalculatedAttributeDefinition');
  }

  /**
   * Grants permission to delete a Domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to delete a layout in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteDomainLayout.html
   */
  public toDeleteDomainLayout() {
    return this.to('DeleteDomainLayout');
  }

  /**
   * Grants permission to delete an event stream in a domain
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:DeleteRolePolicy
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteEventStream.html
   */
  public toDeleteEventStream() {
    return this.to('DeleteEventStream');
  }

  /**
   * Grants permission to delete an event trigger in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteEventTrigger.html
   */
  public toDeleteEventTrigger() {
    return this.to('DeleteEventTrigger');
  }

  /**
   * Grants permission to delete a integration in a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteIntegration.html
   */
  public toDeleteIntegration() {
    return this.to('DeleteIntegration');
  }

  /**
   * Grants permission to delete a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfile.html
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
  }

  /**
   * Grants permission to delete a profile key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileKey.html
   */
  public toDeleteProfileKey() {
    return this.to('DeleteProfileKey');
  }

  /**
   * Grants permission to delete a profile object
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileObject.html
   */
  public toDeleteProfileObject() {
    return this.to('DeleteProfileObject');
  }

  /**
   * Grants permission to delete a specific profile object type in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileObjectType.html
   */
  public toDeleteProfileObjectType() {
    return this.to('DeleteProfileObjectType');
  }

  /**
   * Grants permission to delete a segment definition in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteSegmentDefinition.html
   */
  public toDeleteSegmentDefinition() {
    return this.to('DeleteSegmentDefinition');
  }

  /**
   * Grants permission to delete a workflow in a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteWorkflow.html
   */
  public toDeleteWorkflow() {
    return this.to('DeleteWorkflow');
  }

  /**
   * Grants permission to auto detect object type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DetectProfileObjectType.html
   */
  public toDetectProfileObjectType() {
    return this.to('DetectProfileObjectType');
  }

  /**
   * Grants permission to get a preview of auto merging in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetAutoMergingPreview.html
   */
  public toGetAutoMergingPreview() {
    return this.to('GetAutoMergingPreview');
  }

  /**
   * Grants permission to get a calculated attribute definition in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetCalculatedAttributeDefinition.html
   */
  public toGetCalculatedAttributeDefinition() {
    return this.to('GetCalculatedAttributeDefinition');
  }

  /**
   * Grants permission to retrieve a calculated attribute for a specific profile in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetCalculatedAttributeForProfile.html
   */
  public toGetCalculatedAttributeForProfile() {
    return this.to('GetCalculatedAttributeForProfile');
  }

  /**
   * Grants permission to get a specific domain in an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetDomain.html
   */
  public toGetDomain() {
    return this.to('GetDomain');
  }

  /**
   * Grants permission to get a layout in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetDomainLayout.html
   */
  public toGetDomainLayout() {
    return this.to('GetDomainLayout');
  }

  /**
   * Grants permission to get a specific event stream in a domain
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kinesis:DescribeStreamSummary
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetEventStream.html
   */
  public toGetEventStream() {
    return this.to('GetEventStream');
  }

  /**
   * Grants permission to get an event trigger in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetEventTrigger.html
   */
  public toGetEventTrigger() {
    return this.to('GetEventTrigger');
  }

  /**
   * Grants permission to get an identity resolution job in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetIdentityResolutionJob.html
   */
  public toGetIdentityResolutionJob() {
    return this.to('GetIdentityResolutionJob');
  }

  /**
   * Grants permission to get a specific integrations in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetIntegration.html
   */
  public toGetIntegration() {
    return this.to('GetIntegration');
  }

  /**
   * Grants permission to get profile matches in a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html
   */
  public toGetMatches() {
    return this.to('GetMatches');
  }

  /**
   * Grants permission to get a profile history record for a profile in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetProfileHistoryRecord.html
   */
  public toGetProfileHistoryRecord() {
    return this.to('GetProfileHistoryRecord');
  }

  /**
   * Grants permission to get a specific profile object type in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetProfileObjectType.html
   */
  public toGetProfileObjectType() {
    return this.to('GetProfileObjectType');
  }

  /**
   * Grants permission to get a specific object type template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetProfileObjectTypeTemplate.html
   */
  public toGetProfileObjectTypeTemplate() {
    return this.to('GetProfileObjectTypeTemplate');
  }

  /**
   * Grants permission to get a segment definition in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetSegmentDefinition.html
   */
  public toGetSegmentDefinition() {
    return this.to('GetSegmentDefinition');
  }

  /**
   * Grants permission to get a segment estimate in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetSegmentEstimate.html
   */
  public toGetSegmentEstimate() {
    return this.to('GetSegmentEstimate');
  }

  /**
   * Grants permission to determine if the given profiles are part of a segment in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetSegmentMembership.html
   */
  public toGetSegmentMembership() {
    return this.to('GetSegmentMembership');
  }

  /**
   * Grants permission to get a segment snapshot in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetSegmentSnapshot.html
   */
  public toGetSegmentSnapshot() {
    return this.to('GetSegmentSnapshot');
  }

  /**
   * Grants permission to get all the similar profiles in the domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetSimilarProfiles.html
   */
  public toGetSimilarProfiles() {
    return this.to('GetSimilarProfiles');
  }

  /**
   * Grants permission to get a snapshot in the domain
   *
   * Access Level: Read
   */
  public toGetSnapshot() {
    return this.to('GetSnapshot');
  }

  /**
   * Grants permission to get details of an upload job in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetUploadJob.html
   */
  public toGetUploadJob() {
    return this.to('GetUploadJob');
  }

  /**
   * Grants permission to get a pre-signed URL to upload file for an upload job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetUploadJobPath.html
   */
  public toGetUploadJobPath() {
    return this.to('GetUploadJobPath');
  }

  /**
   * Grants permission to get workflow details in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetWorkflow.html
   */
  public toGetWorkflow() {
    return this.to('GetWorkflow');
  }

  /**
   * Grants permission to get workflow step details in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetWorkflowSteps.html
   */
  public toGetWorkflowSteps() {
    return this.to('GetWorkflowSteps');
  }

  /**
   * Grants permission to list all the integrations in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListAccountIntegrations.html
   */
  public toListAccountIntegrations() {
    return this.to('ListAccountIntegrations');
  }

  /**
   * Grants permission to list all the calculated attribute definitions in the domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListCalculatedAttributeDefinitions.html
   */
  public toListCalculatedAttributeDefinitions() {
    return this.to('ListCalculatedAttributeDefinitions');
  }

  /**
   * Grants permission to list all calculated attributes for a specific profile in the domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListCalculatedAttributesForProfile.html
   */
  public toListCalculatedAttributesForProfile() {
    return this.to('ListCalculatedAttributesForProfile');
  }

  /**
   * Grants permission to list all the layouts in the domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListDomainLayouts.html
   */
  public toListDomainLayouts() {
    return this.to('ListDomainLayouts');
  }

  /**
   * Grants permission to list all the domains in an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list all the event streams in a specific domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListEventStreams.html
   */
  public toListEventStreams() {
    return this.to('ListEventStreams');
  }

  /**
   * Grants permission to list all the event triggers in the domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListEventTriggers.html
   */
  public toListEventTriggers() {
    return this.to('ListEventTriggers');
  }

  /**
   * Grants permission to list identity resolution jobs in a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListIdentityResolutionJobs.html
   */
  public toListIdentityResolutionJobs() {
    return this.to('ListIdentityResolutionJobs');
  }

  /**
   * Grants permission to list all the integrations in a specific domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListIntegrations.html
   */
  public toListIntegrations() {
    return this.to('ListIntegrations');
  }

  /**
   * Grants permission to list all the attributes of a specific object type in the domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListObjectTypeAttributes.html
   */
  public toListObjectTypeAttributes() {
    return this.to('ListObjectTypeAttributes');
  }

  /**
   * Grants permission to list all the values of a profile attribute in the domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileAttributeValues.html
   */
  public toListProfileAttributeValues() {
    return this.to('ListProfileAttributeValues');
  }

  /**
   * Grants permission to list all the profile history records for a profile in a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileHistoryRecords.html
   */
  public toListProfileHistoryRecords() {
    return this.to('ListProfileHistoryRecords');
  }

  /**
   * Grants permission to list all the profile object type templates in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjectTypeTemplates.html
   */
  public toListProfileObjectTypeTemplates() {
    return this.to('ListProfileObjectTypeTemplates');
  }

  /**
   * Grants permission to list all the profile object types in the domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjectTypes.html
   */
  public toListProfileObjectTypes() {
    return this.to('ListProfileObjectTypes');
  }

  /**
   * Grants permission to list all the profile objects for a profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjects.html
   */
  public toListProfileObjects() {
    return this.to('ListProfileObjects');
  }

  /**
   * Grants permission to list all the rule-based matching result in the domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListRuleBasedMatches.html
   */
  public toListRuleBasedMatches() {
    return this.to('ListRuleBasedMatches');
  }

  /**
   * Grants permission to list all the segment definitions in the domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListSegmentDefinitions.html
   */
  public toListSegmentDefinitions() {
    return this.to('ListSegmentDefinitions');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all upload jobs in the domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListUploadJobs.html
   */
  public toListUploadJobs() {
    return this.to('ListUploadJobs');
  }

  /**
   * Grants permission to list all the workflows in a specific domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListWorkflows.html
   */
  public toListWorkflows() {
    return this.to('ListWorkflows');
  }

  /**
   * Grants permission to merge profiles in a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_MergeProfiles.html
   */
  public toMergeProfiles() {
    return this.to('MergeProfiles');
  }

  /**
   * Grants permission to put a integration in a domain
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - app-integrations:CreateDataIntegrationAssociation
   * - app-integrations:DeleteDataIntegrationAssociation
   * - app-integrations:GetDataIntegration
   * - app-integrations:ListDataIntegrationAssociations
   * - kms:CreateGrant
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_PutIntegration.html
   */
  public toPutIntegration() {
    return this.to('PutIntegration');
  }

  /**
   * Grants permission to put an object for a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_PutProfileObject.html
   */
  public toPutProfileObject() {
    return this.to('PutProfileObject');
  }

  /**
   * Grants permission to put a specific profile object type in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_PutProfileObjectType.html
   */
  public toPutProfileObjectType() {
    return this.to('PutProfileObjectType');
  }

  /**
   * Grants permission to search for profiles in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html
   */
  public toSearchProfiles() {
    return this.to('SearchProfiles');
  }

  /**
   * Grants permission to start an upload job in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_StartUploadJob.html
   */
  public toStartUploadJob() {
    return this.to('StartUploadJob');
  }

  /**
   * Grants permission to stop an upload job in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_StopUploadJob.html
   */
  public toStopUploadJob() {
    return this.to('StopUploadJob');
  }

  /**
   * Grants permission to adds tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a calculated attribute definition in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateCalculatedAttributeDefinition.html
   */
  public toUpdateCalculatedAttributeDefinition() {
    return this.to('UpdateCalculatedAttributeDefinition');
  }

  /**
   * Grants permission to update a Domain
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html
   */
  public toUpdateDomain() {
    return this.to('UpdateDomain');
  }

  /**
   * Grants permission to update a layout in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomainLayout.html
   */
  public toUpdateDomainLayout() {
    return this.to('UpdateDomainLayout');
  }

  /**
   * Grants permission to update an event trigger in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateEventTrigger.html
   */
  public toUpdateEventTrigger() {
    return this.to('UpdateEventTrigger');
  }

  /**
   * Grants permission to update a profile in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateProfile.html
   */
  public toUpdateProfile() {
    return this.to('UpdateProfile');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddProfileKey',
      'CreateCalculatedAttributeDefinition',
      'CreateDomain',
      'CreateDomainLayout',
      'CreateEventStream',
      'CreateEventTrigger',
      'CreateIntegrationWorkflow',
      'CreateProfile',
      'CreateSegmentDefinition',
      'CreateSegmentEstimate',
      'CreateSegmentSnapshot',
      'CreateSnapshot',
      'CreateUploadJob',
      'DeleteCalculatedAttributeDefinition',
      'DeleteDomain',
      'DeleteDomainLayout',
      'DeleteEventStream',
      'DeleteEventTrigger',
      'DeleteIntegration',
      'DeleteProfile',
      'DeleteProfileKey',
      'DeleteProfileObject',
      'DeleteProfileObjectType',
      'DeleteSegmentDefinition',
      'DeleteWorkflow',
      'MergeProfiles',
      'PutIntegration',
      'PutProfileObject',
      'PutProfileObjectType',
      'StartUploadJob',
      'StopUploadJob',
      'UpdateCalculatedAttributeDefinition',
      'UpdateDomain',
      'UpdateDomainLayout',
      'UpdateEventTrigger',
      'UpdateProfile'
    ],
    Read: [
      'BatchGetCalculatedAttributeForProfile',
      'BatchGetProfile',
      'DetectProfileObjectType',
      'GetAutoMergingPreview',
      'GetCalculatedAttributeDefinition',
      'GetCalculatedAttributeForProfile',
      'GetDomain',
      'GetDomainLayout',
      'GetEventStream',
      'GetEventTrigger',
      'GetIdentityResolutionJob',
      'GetIntegration',
      'GetProfileHistoryRecord',
      'GetProfileObjectType',
      'GetProfileObjectTypeTemplate',
      'GetSegmentDefinition',
      'GetSegmentEstimate',
      'GetSegmentMembership',
      'GetSegmentSnapshot',
      'GetSnapshot',
      'GetUploadJob',
      'GetUploadJobPath',
      'GetWorkflow',
      'GetWorkflowSteps',
      'ListTagsForResource',
      'SearchProfiles'
    ],
    List: [
      'GetMatches',
      'GetSimilarProfiles',
      'ListAccountIntegrations',
      'ListCalculatedAttributeDefinitions',
      'ListCalculatedAttributesForProfile',
      'ListDomainLayouts',
      'ListDomains',
      'ListEventStreams',
      'ListEventTriggers',
      'ListIdentityResolutionJobs',
      'ListIntegrations',
      'ListObjectTypeAttributes',
      'ListProfileAttributeValues',
      'ListProfileHistoryRecords',
      'ListProfileObjectTypeTemplates',
      'ListProfileObjectTypes',
      'ListProfileObjects',
      'ListRuleBasedMatches',
      'ListSegmentDefinitions',
      'ListUploadJobs',
      'ListWorkflows'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type domains to the statement
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   *
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomains(domainName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:profile:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domains/${ domainName }`);
  }

  /**
   * Adds a resource of type object-types to the statement
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   *
   * @param domainName - Identifier for the domainName.
   * @param objectTypeName - Identifier for the objectTypeName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onObjectTypes(domainName: string, objectTypeName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:profile:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domains/${ domainName }/object-types/${ objectTypeName }`);
  }

  /**
   * Adds a resource of type integrations to the statement
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   *
   * @param domainName - Identifier for the domainName.
   * @param uri - Identifier for the uri.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegrations(domainName: string, uri: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:profile:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domains/${ domainName }/integrations/${ uri }`);
  }

  /**
   * Adds a resource of type event-streams to the statement
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   *
   * @param domainName - Identifier for the domainName.
   * @param eventStreamName - Identifier for the eventStreamName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventStreams(domainName: string, eventStreamName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:profile:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domains/${ domainName }/event-streams/${ eventStreamName }`);
  }

  /**
   * Adds a resource of type calculated-attributes to the statement
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   *
   * @param domainName - Identifier for the domainName.
   * @param calculatedAttributeName - Identifier for the calculatedAttributeName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCalculatedAttributes(domainName: string, calculatedAttributeName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:profile:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domains/${ domainName }/calculated-attributes/${ calculatedAttributeName }`);
  }

  /**
   * Adds a resource of type segment-definitions to the statement
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   *
   * @param domainName - Identifier for the domainName.
   * @param segmentDefinitionName - Identifier for the segmentDefinitionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSegmentDefinitions(domainName: string, segmentDefinitionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:profile:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domains/${ domainName }/segment-definitions/${ segmentDefinitionName }`);
  }

  /**
   * Adds a resource of type event-triggers to the statement
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   *
   * @param domainName - Identifier for the domainName.
   * @param eventTriggerName - Identifier for the eventTriggerName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventTriggers(domainName: string, eventTriggerName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:profile:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domains/${ domainName }/event-triggers/${ eventTriggerName }`);
  }

  /**
   * Adds a resource of type layouts to the statement
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   *
   * @param domainName - Identifier for the domainName.
   * @param layoutDefinitionName - Identifier for the layoutDefinitionName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLayouts(domainName: string, layoutDefinitionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:profile:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domains/${ domainName }/layouts/${ layoutDefinitionName }`);
  }

  /**
   * Filters access by a key that is present in the request the user makes to the customer profile service
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateCalculatedAttributeDefinition()
   * - .toCreateDomain()
   * - .toCreateDomainLayout()
   * - .toCreateEventStream()
   * - .toCreateEventTrigger()
   * - .toCreateIntegrationWorkflow()
   * - .toCreateSegmentDefinition()
   * - .toPutIntegration()
   * - .toPutProfileObjectType()
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
   * Filters access by a tag key and value pair
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to resource types:
   * - domains
   * - object-types
   * - integrations
   * - event-streams
   * - calculated-attributes
   * - segment-definitions
   * - event-triggers
   * - layouts
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the list of all the tag key names present in the request the user makes to the customer profile service
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateCalculatedAttributeDefinition()
   * - .toCreateDomain()
   * - .toCreateDomainLayout()
   * - .toCreateEventStream()
   * - .toCreateEventTrigger()
   * - .toCreateIntegrationWorkflow()
   * - .toCreateSegmentDefinition()
   * - .toPutIntegration()
   * - .toPutProfileObjectType()
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
