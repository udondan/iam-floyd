import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [connect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Connect extends PolicyStatement {
  public servicePrefix = 'connect';

  /**
   * Statement provider for service [connect](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to activate an evaluation form in the specified Amazon Connect instance. After the evaluation form is activated, it is available to start new evaluations based on the form
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ActivateEvaluationForm.html
   */
  public toActivateEvaluationForm() {
    return this.to('ActivateEvaluationForm');
  }

  /**
   * Grants permission to federate into an Amazon Connect instance (Log in for emergency access functionality in the Amazon Connect console)
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - connect:DescribeInstance
   * - connect:ListInstances
   * - ds:DescribeDirectories
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetFederationToken.html
   */
  public toAdminGetEmergencyAccessToken() {
    return this.to('AdminGetEmergencyAccessToken');
  }

  /**
   * Grants permission to grant access and to associate a dataset with the specified AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   */
  public toAssociateAnalyticsDataSet() {
    return this.to('AssociateAnalyticsDataSet');
  }

  /**
   * Grants permission to associate approved origin for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toAssociateApprovedOrigin() {
    return this.to('AssociateApprovedOrigin');
  }

  /**
   * Grants permission to associate a Lex bot for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - lex:CreateResourcePolicy
   * - lex:DescribeBotAlias
   * - lex:GetBot
   * - lex:UpdateResourcePolicy
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toAssociateBot() {
    return this.to('AssociateBot');
  }

  /**
   * Grants permission to associate a Customer Profiles domain for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - profile:GetDomain
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toAssociateCustomerProfilesDomain() {
    return this.to('AssociateCustomerProfilesDomain');
  }

  /**
   * Grants permission to default vocabulary for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   */
  public toAssociateDefaultVocabulary() {
    return this.to('AssociateDefaultVocabulary');
  }

  /**
   * Grants permission to associate a resource with a flow in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociateFlow.html
   */
  public toAssociateFlow() {
    return this.to('AssociateFlow');
  }

  /**
   * Grants permission to associate instance storage for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStorageResourceType()
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - ds:DescribeDirectories
   * - firehose:DescribeDeliveryStream
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - kinesis:DescribeStream
   * - kms:CreateGrant
   * - kms:DescribeKey
   * - s3:GetBucketAcl
   * - s3:GetBucketLocation
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toAssociateInstanceStorageConfig() {
    return this.to('AssociateInstanceStorageConfig');
  }

  /**
   * Grants permission to associate a Lambda function for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - lambda:AddPermission
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toAssociateLambdaFunction() {
    return this.to('AssociateLambdaFunction');
  }

  /**
   * Grants permission to associate a Lex bot for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - lex:GetBot
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toAssociateLexBot() {
    return this.to('AssociateLexBot');
  }

  /**
   * Grants permission to associate contact flow resources to phone number resources in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociatePhoneNumberContactFlow.html
   */
  public toAssociatePhoneNumberContactFlow() {
    return this.to('AssociatePhoneNumberContactFlow');
  }

  /**
   * Grants permission to associate quick connects with a queue in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociateQueueQuickConnects.html
   */
  public toAssociateQueueQuickConnects() {
    return this.to('AssociateQueueQuickConnects');
  }

  /**
   * Grants permission to associate queues with a routing profile in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociateRoutingProfileQueues.html
   */
  public toAssociateRoutingProfileQueues() {
    return this.to('AssociateRoutingProfileQueues');
  }

  /**
   * Grants permission to associate a security key for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toAssociateSecurityKey() {
    return this.to('AssociateSecurityKey');
  }

  /**
   * Grants permission to associate a user to a traffic distribution group in the specified Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifAwsResourceTag()
   * - .ifSearchTag()
   *
   * Dependent actions:
   * - connect:DescribeUser
   * - connect:SearchUsers
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociateTrafficDistributionGroupUser.html
   */
  public toAssociateTrafficDistributionGroupUser() {
    return this.to('AssociateTrafficDistributionGroupUser');
  }

  /**
   * Grants permission to associate user proficiencies to a user in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_AssociateUserProficiencies.html
   */
  public toAssociateUserProficiencies() {
    return this.to('AssociateUserProficiencies');
  }

  /**
   * Grants permission to grant access and to associate the datasets with the specified AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   */
  public toBatchAssociateAnalyticsDataSet() {
    return this.to('BatchAssociateAnalyticsDataSet');
  }

  /**
   * Grants permission to revoke access and to disassociate the datasets with the specified AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   */
  public toBatchDisassociateAnalyticsDataSet() {
    return this.to('BatchDisassociateAnalyticsDataSet');
  }

  /**
   * Grants permission to get metadata for multiple attached files from an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_BatchGetAttachedFileMetadata.html
   */
  public toBatchGetAttachedFileMetadata() {
    return this.to('BatchGetAttachedFileMetadata');
  }

  /**
   * Grants permission to get summary information about the flow associations for the specified Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_BatchGetFlowAssociation.html
   */
  public toBatchGetFlowAssociation() {
    return this.to('BatchGetFlowAssociation');
  }

  /**
   * Grants permission to put contacts in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_BatchPutContact.html
   */
  public toBatchPutContact() {
    return this.to('BatchPutContact');
  }

  /**
   * Grants permission to claim phone number resources in an Amazon Connect instance or traffic distribution group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html
   */
  public toClaimPhoneNumber() {
    return this.to('ClaimPhoneNumber');
  }

  /**
   * Grants permission to complete an attached file upload in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CompleteAttachedFileUpload.html
   */
  public toCompleteAttachedFileUpload() {
    return this.to('CompleteAttachedFileUpload');
  }

  /**
   * Grants permission to create agent status in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateAgentStatus.html
   */
  public toCreateAgentStatus() {
    return this.to('CreateAgentStatus');
  }

  /**
   * Grants permission to create authentication profile resources in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateAuthenticationProfile.html
   */
  public toCreateAuthenticationProfile() {
    return this.to('CreateAuthenticationProfile');
  }

  /**
   * Grants permission to create a new contact using the Amazon Connect API
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   * - .ifContactInitiationMethod()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateContact.html
   */
  public toCreateContact() {
    return this.to('CreateContact');
  }

  /**
   * Grants permission to create a contact flow in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   * - .ifFlowType()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateContactFlow.html
   */
  public toCreateContactFlow() {
    return this.to('CreateContactFlow');
  }

  /**
   * Grants permission to create a contact flow module in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateContactFlowModule.html
   */
  public toCreateContactFlowModule() {
    return this.to('CreateContactFlowModule');
  }

  /**
   * Grants permission to create a version a flow in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   * - .ifFlowType()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateContactFlowVersion.html
   */
  public toCreateContactFlowVersion() {
    return this.to('CreateContactFlowVersion');
  }

  /**
   * Grants permission to create an email address resource in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateEmailAddress.html
   */
  public toCreateEmailAddress() {
    return this.to('CreateEmailAddress');
  }

  /**
   * Grants permission to create an evaluation form in the specified Amazon Connect instance. The form can be used to define questions related to agent performance, and create sections to organize such questions. Question and section identifiers cannot be duplicated within the same evaluation form
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateEvaluationForm.html
   */
  public toCreateEvaluationForm() {
    return this.to('CreateEvaluationForm');
  }

  /**
   * Grants permission to create hours of operation in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateHoursOfOperation.html
   */
  public toCreateHoursOfOperation() {
    return this.to('CreateHoursOfOperation');
  }

  /**
   * Grants permission to create an hours of operation override in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateHoursOfOperationOverride.html
   */
  public toCreateHoursOfOperationOverride() {
    return this.to('CreateHoursOfOperationOverride');
  }

  /**
   * Grants permission to create a new Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ds:AuthorizeApplication
   * - ds:CheckAlias
   * - ds:CreateAlias
   * - ds:CreateDirectory
   * - ds:CreateIdentityPoolDirectory
   * - ds:DeleteDirectory
   * - ds:DescribeDirectories
   * - ds:UnauthorizeApplication
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toCreateInstance() {
    return this.to('CreateInstance');
  }

  /**
   * Grants permission to create an integration association with an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - app-integrations:CreateApplicationAssociation
   * - app-integrations:CreateEventIntegrationAssociation
   * - app-integrations:GetApplication
   * - cases:GetDomain
   * - chime:AssociateVoiceConnectorConnect
   * - chime:DisassociateVoiceConnectorConnect
   * - chime:TagResource
   * - chime:UntagResource
   * - connect:DescribeInstance
   * - ds:DescribeDirectories
   * - events:PutRule
   * - events:PutTargets
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - mobiletargeting:GetApp
   * - voiceid:DescribeDomain
   * - wisdom:GetAssistant
   * - wisdom:GetKnowledgeBase
   * - wisdom:TagResource
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html
   */
  public toCreateIntegrationAssociation() {
    return this.to('CreateIntegrationAssociation');
  }

  /**
   * Grants permission to add a participant to an ongoing contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateParticipant.html
   */
  public toCreateParticipant() {
    return this.to('CreateParticipant');
  }

  /**
   * Grants permission to create persistent contact associations for a contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreatePersistentContactAssociation.html
   */
  public toCreatePersistentContactAssociation() {
    return this.to('CreatePersistentContactAssociation');
  }

  /**
   * Grants permission to create a predefined attribute in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreatePredefinedAttribute.html
   */
  public toCreatePredefinedAttribute() {
    return this.to('CreatePredefinedAttribute');
  }

  /**
   * Grants permission to create a prompt in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - kms:Decrypt
   * - s3:GetObject
   * - s3:GetObjectAcl
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreatePrompt.html
   */
  public toCreatePrompt() {
    return this.to('CreatePrompt');
  }

  /**
   * Grants permission to create a push notification registration for an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreatePushNotificationRegistration.html
   */
  public toCreatePushNotificationRegistration() {
    return this.to('CreatePushNotificationRegistration');
  }

  /**
   * Grants permission to create a queue in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateQueue.html
   */
  public toCreateQueue() {
    return this.to('CreateQueue');
  }

  /**
   * Grants permission to create a quick connect in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateQuickConnect.html
   */
  public toCreateQuickConnect() {
    return this.to('CreateQuickConnect');
  }

  /**
   * Grants permission to create a routing profile in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateRoutingProfile.html
   */
  public toCreateRoutingProfile() {
    return this.to('CreateRoutingProfile');
  }

  /**
   * Grants permission to create a rule in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateRule.html
   */
  public toCreateRule() {
    return this.to('CreateRule');
  }

  /**
   * Grants permission to create a security profile for the specified Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateSecurityProfile.html
   */
  public toCreateSecurityProfile() {
    return this.to('CreateSecurityProfile');
  }

  /**
   * Grants permission to create a task template in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTaskTemplate.html
   */
  public toCreateTaskTemplate() {
    return this.to('CreateTaskTemplate');
  }

  /**
   * Grants permission to create a traffic distribution group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html
   */
  public toCreateTrafficDistributionGroup() {
    return this.to('CreateTrafficDistributionGroup');
  }

  /**
   * Grants permission to create a use case for an integration association
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - connect:DescribeInstance
   * - ds:DescribeDirectories
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateUseCase.html
   */
  public toCreateUseCase() {
    return this.to('CreateUseCase');
  }

  /**
   * Grants permission to create a user for the specified Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to create a user hierarchy group in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateUserHierarchyGroup.html
   */
  public toCreateUserHierarchyGroup() {
    return this.to('CreateUserHierarchyGroup');
  }

  /**
   * Grants permission to create a view in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateView.html
   */
  public toCreateView() {
    return this.to('CreateView');
  }

  /**
   * Grants permission to create a view version in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateViewVersion.html
   */
  public toCreateViewVersion() {
    return this.to('CreateViewVersion');
  }

  /**
   * Grants permission to create a vocabulary in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateVocabulary.html
   */
  public toCreateVocabulary() {
    return this.to('CreateVocabulary');
  }

  /**
   * Grants permission to deactivate an evaluation form in the specified Amazon Connect instance. After a form is deactivated, it is no longer available for users to start new evaluations based on the form
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeactivateEvaluationForm.html
   */
  public toDeactivateEvaluationForm() {
    return this.to('DeactivateEvaluationForm');
  }

  /**
   * Grants permission to delete an attached file from an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - cases:DeleteRelatedItem
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteAttachedFile.html
   */
  public toDeleteAttachedFile() {
    return this.to('DeleteAttachedFile');
  }

  /**
   * Grants permission to delete a contact evaluation in the specified Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteContactEvaluation.html
   */
  public toDeleteContactEvaluation() {
    return this.to('DeleteContactEvaluation');
  }

  /**
   * Grants permission to delete a contact flow in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   * - .ifFlowType()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteContactFlow.html
   */
  public toDeleteContactFlow() {
    return this.to('DeleteContactFlow');
  }

  /**
   * Grants permission to delete a contact flow module in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteContactFlowModule.html
   */
  public toDeleteContactFlowModule() {
    return this.to('DeleteContactFlowModule');
  }

  /**
   * Grants permission to delete a version of a flow in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   * - .ifFlowType()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteContactFlowVersion.html
   */
  public toDeleteContactFlowVersion() {
    return this.to('DeleteContactFlowVersion');
  }

  /**
   * Grants permission to delete an email address resource in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteEmailAddress.html
   */
  public toDeleteEmailAddress() {
    return this.to('DeleteEmailAddress');
  }

  /**
   * Grants permission to delete an evaluation form in the specified Amazon Connect instance. If the version property is provided, only the specified version of the evaluation form is deleted
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteEvaluationForm.html
   */
  public toDeleteEvaluationForm() {
    return this.to('DeleteEvaluationForm');
  }

  /**
   * Grants permission to delete hours of operation in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteHoursOfOperation.html
   */
  public toDeleteHoursOfOperation() {
    return this.to('DeleteHoursOfOperation');
  }

  /**
   * Grants permission to delete an hours of operation override in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteHoursOfOperationOverride.html
   */
  public toDeleteHoursOfOperationOverride() {
    return this.to('DeleteHoursOfOperationOverride');
  }

  /**
   * Grants permission to delete an Amazon Connect instance. When you remove an instance, the link to an existing AWS directory is also removed
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - ds:DeleteDirectory
   * - ds:DescribeDirectories
   * - ds:UnauthorizeApplication
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDeleteInstance() {
    return this.to('DeleteInstance');
  }

  /**
   * Grants permission to delete an integration association from an Amazon Connect instance. The association must not have any use cases associated with it
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - app-integrations:DeleteApplicationAssociation
   * - app-integrations:DeleteEventIntegrationAssociation
   * - connect:DescribeInstance
   * - ds:DescribeDirectories
   * - events:DeleteRule
   * - events:ListTargetsByRule
   * - events:RemoveTargets
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteIntegrationAssociation.html
   */
  public toDeleteIntegrationAssociation() {
    return this.to('DeleteIntegrationAssociation');
  }

  /**
   * Grants permission to delete a predefined attribute in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeletePredefinedAttribute.html
   */
  public toDeletePredefinedAttribute() {
    return this.to('DeletePredefinedAttribute');
  }

  /**
   * Grants permission to delete a prompt in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeletePrompt.html
   */
  public toDeletePrompt() {
    return this.to('DeletePrompt');
  }

  /**
   * Grants permission to delete a push notification registration for an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeletePushNotificationRegistration.html
   */
  public toDeletePushNotificationRegistration() {
    return this.to('DeletePushNotificationRegistration');
  }

  /**
   * Grants permission to delete a queue in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteQueue.html
   */
  public toDeleteQueue() {
    return this.to('DeleteQueue');
  }

  /**
   * Grants permission to delete a quick connect in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteQuickConnect.html
   */
  public toDeleteQuickConnect() {
    return this.to('DeleteQuickConnect');
  }

  /**
   * Grants permission to delete routing profiles in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteRoutingProfile.html
   */
  public toDeleteRoutingProfile() {
    return this.to('DeleteRoutingProfile');
  }

  /**
   * Grants permission to delete a rule in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteRule.html
   */
  public toDeleteRule() {
    return this.to('DeleteRule');
  }

  /**
   * Grants permission to delete a security profile in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteSecurityProfile.html
   */
  public toDeleteSecurityProfile() {
    return this.to('DeleteSecurityProfile');
  }

  /**
   * Grants permission to delete a task template in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTaskTemplate.html
   */
  public toDeleteTaskTemplate() {
    return this.to('DeleteTaskTemplate');
  }

  /**
   * Grants permission to delete a traffic distribution group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html
   */
  public toDeleteTrafficDistributionGroup() {
    return this.to('DeleteTrafficDistributionGroup');
  }

  /**
   * Grants permission to delete a use case from an integration association
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - connect:DescribeInstance
   * - ds:DescribeDirectories
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteUseCase.html
   */
  public toDeleteUseCase() {
    return this.to('DeleteUseCase');
  }

  /**
   * Grants permission to delete a user in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to delete a user hierarchy group in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteUserHierarchyGroup.html
   */
  public toDeleteUserHierarchyGroup() {
    return this.to('DeleteUserHierarchyGroup');
  }

  /**
   * Grants permission to delete a view in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteView.html
   */
  public toDeleteView() {
    return this.to('DeleteView');
  }

  /**
   * Grants permission to delete a view version in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteViewVersion.html
   */
  public toDeleteViewVersion() {
    return this.to('DeleteViewVersion');
  }

  /**
   * Grants permission to delete a vocabulary in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteVocabulary.html
   */
  public toDeleteVocabulary() {
    return this.to('DeleteVocabulary');
  }

  /**
   * Grants permission to describe agent status in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeAgentStatus.html
   */
  public toDescribeAgentStatus() {
    return this.to('DescribeAgentStatus');
  }

  /**
   * Grants permission to describe authentication profile resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeAuthenticationProfile.html
   */
  public toDescribeAuthenticationProfile() {
    return this.to('DescribeAuthenticationProfile');
  }

  /**
   * Grants permission to describe a contact in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeContact.html
   */
  public toDescribeContact() {
    return this.to('DescribeContact');
  }

  /**
   * Grants permission to describe a contact evaluation in the specified Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeContactEvaluation.html
   */
  public toDescribeContactEvaluation() {
    return this.to('DescribeContactEvaluation');
  }

  /**
   * Grants permission to describe a contact flow in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   * - .ifFlowType()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeContactFlow.html
   */
  public toDescribeContactFlow() {
    return this.to('DescribeContactFlow');
  }

  /**
   * Grants permission to describe a contact flow module in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeContactFlowModule.html
   */
  public toDescribeContactFlowModule() {
    return this.to('DescribeContactFlowModule');
  }

  /**
   * Grants permission to describe an email address resource in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeEmailAddress.html
   */
  public toDescribeEmailAddress() {
    return this.to('DescribeEmailAddress');
  }

  /**
   * Grants permission to describe an evaluation form in the specified Amazon Connect instance. If the version property is not provided, the latest version of the evaluation form is described
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeEvaluationForm.html
   */
  public toDescribeEvaluationForm() {
    return this.to('DescribeEvaluationForm');
  }

  /**
   * Grants permission to describe the status of forecasting, planning, and scheduling integration on an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/optimization-apis.html
   */
  public toDescribeForecastingPlanningSchedulingIntegration() {
    return this.to('DescribeForecastingPlanningSchedulingIntegration');
  }

  /**
   * Grants permission to describe hours of operation in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeHoursOfOperation.html
   */
  public toDescribeHoursOfOperation() {
    return this.to('DescribeHoursOfOperation');
  }

  /**
   * Grants permission to describe an hours of operation override in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeHoursOfOperationOverride.html
   */
  public toDescribeHoursOfOperationOverride() {
    return this.to('DescribeHoursOfOperationOverride');
  }

  /**
   * Grants permission to view details of an Amazon Connect instance and is also required to create an instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - ds:DescribeDirectories
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDescribeInstance() {
    return this.to('DescribeInstance');
  }

  /**
   * Grants permission to view the attribute details of an existing Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAttributeType()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDescribeInstanceAttribute() {
    return this.to('DescribeInstanceAttribute');
  }

  /**
   * Grants permission to view the instance storage configuration for an existing Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifStorageResourceType()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDescribeInstanceStorageConfig() {
    return this.to('DescribeInstanceStorageConfig');
  }

  /**
   * Grants permission to describe phone number resources in an Amazon Connect instance or traffic distribution group
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html
   */
  public toDescribePhoneNumber() {
    return this.to('DescribePhoneNumber');
  }

  /**
   * Grants permission to describe a predefined attribute in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePredefinedAttribute.html
   */
  public toDescribePredefinedAttribute() {
    return this.to('DescribePredefinedAttribute');
  }

  /**
   * Grants permission to describe a prompt in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePrompt.html
   */
  public toDescribePrompt() {
    return this.to('DescribePrompt');
  }

  /**
   * Grants permission to describe a queue in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeQueue.html
   */
  public toDescribeQueue() {
    return this.to('DescribeQueue');
  }

  /**
   * Grants permission to describe a quick connect in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeQuickConnect.html
   */
  public toDescribeQuickConnect() {
    return this.to('DescribeQuickConnect');
  }

  /**
   * Grants permission to describe a routing profile in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeRoutingProfile.html
   */
  public toDescribeRoutingProfile() {
    return this.to('DescribeRoutingProfile');
  }

  /**
   * Grants permission to describe a rule in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeRule.html
   */
  public toDescribeRule() {
    return this.to('DescribeRule');
  }

  /**
   * Grants permission to describe a security profile in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeSecurityProfile.html
   */
  public toDescribeSecurityProfile() {
    return this.to('DescribeSecurityProfile');
  }

  /**
   * Grants permission to describe a traffic distribution group
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeTrafficDistributionGroup.html
   */
  public toDescribeTrafficDistributionGroup() {
    return this.to('DescribeTrafficDistributionGroup');
  }

  /**
   * Grants permission to describe a user in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUser.html
   */
  public toDescribeUser() {
    return this.to('DescribeUser');
  }

  /**
   * Grants permission to describe a hierarchy group for an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUserHierarchyGroup.html
   */
  public toDescribeUserHierarchyGroup() {
    return this.to('DescribeUserHierarchyGroup');
  }

  /**
   * Grants permission to describe the hierarchy structure for an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeUserHierarchyStructure.html
   */
  public toDescribeUserHierarchyStructure() {
    return this.to('DescribeUserHierarchyStructure');
  }

  /**
   * Grants permission to describe a view in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeView.html
   */
  public toDescribeView() {
    return this.to('DescribeView');
  }

  /**
   * Grants permission to describe a vocabulary in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeVocabulary.html
   */
  public toDescribeVocabulary() {
    return this.to('DescribeVocabulary');
  }

  /**
   * Grants permission to revoke access and to disassociate a dataset with the specified AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   */
  public toDisassociateAnalyticsDataSet() {
    return this.to('DisassociateAnalyticsDataSet');
  }

  /**
   * Grants permission to disassociate approved origin for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDisassociateApprovedOrigin() {
    return this.to('DisassociateApprovedOrigin');
  }

  /**
   * Grants permission to disassociate a Lex bot for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - lex:DeleteResourcePolicy
   * - lex:UpdateResourcePolicy
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDisassociateBot() {
    return this.to('DisassociateBot');
  }

  /**
   * Grants permission to disassociate a Customer Profiles domain for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:AttachRolePolicy
   * - iam:DeleteRolePolicy
   * - iam:DetachRolePolicy
   * - iam:GetPolicy
   * - iam:GetPolicyVersion
   * - iam:GetRolePolicy
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDisassociateCustomerProfilesDomain() {
    return this.to('DisassociateCustomerProfilesDomain');
  }

  /**
   * Grants permission to disassociate a resource from a flow in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociateFlow.html
   */
  public toDisassociateFlow() {
    return this.to('DisassociateFlow');
  }

  /**
   * Grants permission to disassociate instance storage for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStorageResourceType()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDisassociateInstanceStorageConfig() {
    return this.to('DisassociateInstanceStorageConfig');
  }

  /**
   * Grants permission to disassociate a Lambda function for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - lambda:RemovePermission
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDisassociateLambdaFunction() {
    return this.to('DisassociateLambdaFunction');
  }

  /**
   * Grants permission to disassociate a Lex bot for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDisassociateLexBot() {
    return this.to('DisassociateLexBot');
  }

  /**
   * Grants permission to disassociate contact flow resources from phone number resources in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociatePhoneNumberContactFlow.html
   */
  public toDisassociatePhoneNumberContactFlow() {
    return this.to('DisassociatePhoneNumberContactFlow');
  }

  /**
   * Grants permission to disassociate quick connects from a queue in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociateQueueQuickConnects.html
   */
  public toDisassociateQueueQuickConnects() {
    return this.to('DisassociateQueueQuickConnects');
  }

  /**
   * Grants permission to disassociate queues from a routing profile in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociateRoutingProfileQueues.html
   */
  public toDisassociateRoutingProfileQueues() {
    return this.to('DisassociateRoutingProfileQueues');
  }

  /**
   * Grants permission to disassociate the security key for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toDisassociateSecurityKey() {
    return this.to('DisassociateSecurityKey');
  }

  /**
   * Grants permission to disassociate a user from a traffic distribution group in the specified Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociateTrafficDistributionGroupUser.html
   */
  public toDisassociateTrafficDistributionGroupUser() {
    return this.to('DisassociateTrafficDistributionGroupUser');
  }

  /**
   * Grants permission to disassociate user proficiencies from a user in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DisassociateUserProficiencies.html
   */
  public toDisassociateUserProficiencies() {
    return this.to('DisassociateUserProficiencies');
  }

  /**
   * Grants permission to dismiss terminated Contact from Agent CCP
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DismissUserContact.html
   */
  public toDismissUserContact() {
    return this.to('DismissUserContact');
  }

  /**
   * Grants permission to get an attached file from an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetAttachedFile.html
   */
  public toGetAttachedFile() {
    return this.to('GetAttachedFile');
  }

  /**
   * Grants permission to retrieve the contact attributes for the specified contact
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetContactAttributes.html
   */
  public toGetContactAttributes() {
    return this.to('GetContactAttributes');
  }

  /**
   * Grants permission to retrieve current metric data for queues and routing profiles in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetCurrentMetricData.html
   */
  public toGetCurrentMetricData() {
    return this.to('GetCurrentMetricData');
  }

  /**
   * Grants permission to retrieve current user data in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetCurrentUserData.html
   */
  public toGetCurrentUserData() {
    return this.to('GetCurrentUserData');
  }

  /**
   * Grants permission to get effective hours of operation resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetEffectiveHoursOfOperations.html
   */
  public toGetEffectiveHoursOfOperations() {
    return this.to('GetEffectiveHoursOfOperations');
  }

  /**
   * Grants permission to federate into an Amazon Connect instance when using SAML-based authentication for identity management
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetFederationToken.html
   */
  public toGetFederationToken() {
    return this.to('GetFederationToken');
  }

  /**
   * Grants permission to get information about the flow associations for the specified Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetFlowAssociation.html
   */
  public toGetFlowAssociation() {
    return this.to('GetFlowAssociation');
  }

  /**
   * Grants permission to retrieve historical metric data for queues in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricData.html
   */
  public toGetMetricData() {
    return this.to('GetMetricData');
  }

  /**
   * Grants permission to retrieve metric data in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricDataV2.html
   */
  public toGetMetricDataV2() {
    return this.to('GetMetricDataV2');
  }

  /**
   * Grants permission to get details about a prompt's presigned Amazon S3 URL in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetPromptFile.html
   */
  public toGetPromptFile() {
    return this.to('GetPromptFile');
  }

  /**
   * Grants permission to get details about specified task template in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetTaskTemplate.html
   */
  public toGetTaskTemplate() {
    return this.to('GetTaskTemplate');
  }

  /**
   * Grants permission to read traffic distribution for a traffic distribution group
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetTrafficDistribution.html
   */
  public toGetTrafficDistribution() {
    return this.to('GetTrafficDistribution');
  }

  /**
   * Grants permission to import phone number resources to an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - sms-voice:DescribePhoneNumbers
   * - social-messaging:GetLinkedWhatsAppBusinessAccountPhoneNumber
   * - social-messaging:TagResource
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ImportPhoneNumber.html
   */
  public toImportPhoneNumber() {
    return this.to('ImportPhoneNumber');
  }

  /**
   * Grants permission to list agent statuses in an Amazon Connect instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListAgentStatuses.html
   */
  public toListAgentStatuses() {
    return this.to('ListAgentStatuses');
  }

  /**
   * Grants permission to list the association status of a dataset for a given Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   */
  public toListAnalyticsDataAssociations() {
    return this.to('ListAnalyticsDataAssociations');
  }

  /**
   * Grants permission to list data lake datasets available to associate with for a given Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   */
  public toListAnalyticsDataLakeDataSets() {
    return this.to('ListAnalyticsDataLakeDataSets');
  }

  /**
   * Grants permission to view approved origins of an existing Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListApprovedOrigins() {
    return this.to('ListApprovedOrigins');
  }

  /**
   * Grants permission to list the contacts associated with an email address in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListAssociatedContacts.html
   */
  public toListAssociatedContacts() {
    return this.to('ListAssociatedContacts');
  }

  /**
   * Grants permission to list authentication profile resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListAuthenticationProfiles.html
   */
  public toListAuthenticationProfiles() {
    return this.to('ListAuthenticationProfiles');
  }

  /**
   * Grants permission to view the Lex bots of an existing Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListBots() {
    return this.to('ListBots');
  }

  /**
   * Grants permission to list contact evaluations in the specified Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListContactEvaluations.html
   */
  public toListContactEvaluations() {
    return this.to('ListContactEvaluations');
  }

  /**
   * Grants permission to list contact flow module resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListContactFlowModules.html
   */
  public toListContactFlowModules() {
    return this.to('ListContactFlowModules');
  }

  /**
   * Grants permission to list all the versions a flow in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   * - .ifFlowType()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListContactFlowVersions.html
   */
  public toListContactFlowVersions() {
    return this.to('ListContactFlowVersions');
  }

  /**
   * Grants permission to list contact flow resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListContactFlows.html
   */
  public toListContactFlows() {
    return this.to('ListContactFlows');
  }

  /**
   * Grants permission to list references associated with a contact in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListContactReferences.html
   */
  public toListContactReferences() {
    return this.to('ListContactReferences');
  }

  /**
   * Grants permission to list default vocabularies associated with a Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListDefaultVocabularies.html
   */
  public toListDefaultVocabularies() {
    return this.to('ListDefaultVocabularies');
  }

  /**
   * Grants permission to list versions of an evaluation form in the specified Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListEvaluationFormVersions.html
   */
  public toListEvaluationFormVersions() {
    return this.to('ListEvaluationFormVersions');
  }

  /**
   * Grants permission to list evaluation forms in the specified Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListEvaluationForms.html
   */
  public toListEvaluationForms() {
    return this.to('ListEvaluationForms');
  }

  /**
   * Grants permission to list summary information about the flow associations for the specified Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListFlowAssociations.html
   */
  public toListFlowAssociations() {
    return this.to('ListFlowAssociations');
  }

  /**
   * Grants permission to list hours of operation override resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListHoursOfOperationOverrides.html
   */
  public toListHoursOfOperationOverrides() {
    return this.to('ListHoursOfOperationOverrides');
  }

  /**
   * Grants permission to list hours of operation resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListHoursOfOperations.html
   */
  public toListHoursOfOperations() {
    return this.to('ListHoursOfOperations');
  }

  /**
   * Grants permission to view the attributes of an existing Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListInstanceAttributes() {
    return this.to('ListInstanceAttributes');
  }

  /**
   * Grants permission to view storage configurations of an existing Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListInstanceStorageConfigs() {
    return this.to('ListInstanceStorageConfigs');
  }

  /**
   * Grants permission to view the Amazon Connect instances associated with an AWS account
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ds:DescribeDirectories
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListInstances() {
    return this.to('ListInstances');
  }

  /**
   * Grants permission to list summary information about the integration associations for the specified Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - connect:DescribeInstance
   * - ds:DescribeDirectories
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListIntegrationAssociations.html
   */
  public toListIntegrationAssociations() {
    return this.to('ListIntegrationAssociations');
  }

  /**
   * Grants permission to view the Lambda functions of an existing Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListLambdaFunctions() {
    return this.to('ListLambdaFunctions');
  }

  /**
   * Grants permission to view the Lex bots of an existing Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListLexBots() {
    return this.to('ListLexBots');
  }

  /**
   * Grants permission to list phone number resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbers.html
   */
  public toListPhoneNumbers() {
    return this.to('ListPhoneNumbers');
  }

  /**
   * Grants permission to list phone number resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html
   */
  public toListPhoneNumbersV2() {
    return this.to('ListPhoneNumbersV2');
  }

  /**
   * Grants permission to list predefined attributes in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPredefinedAttributes.html
   */
  public toListPredefinedAttributes() {
    return this.to('ListPredefinedAttributes');
  }

  /**
   * Grants permission to list prompt resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPrompts.html
   */
  public toListPrompts() {
    return this.to('ListPrompts');
  }

  /**
   * Grants permission to list quick connect resources in a queue in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListQueueQuickConnects.html
   */
  public toListQueueQuickConnects() {
    return this.to('ListQueueQuickConnects');
  }

  /**
   * Grants permission to list queue resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListQueues.html
   */
  public toListQueues() {
    return this.to('ListQueues');
  }

  /**
   * Grants permission to list quick connect resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListQuickConnects.html
   */
  public toListQuickConnects() {
    return this.to('ListQuickConnects');
  }

  /**
   * Grants permission to list the analysis segments for a real-time analysis session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/contact-lens/latest/APIReference/API_ListRealtimeContactAnalysisSegments.html
   */
  public toListRealtimeContactAnalysisSegments() {
    return this.to('ListRealtimeContactAnalysisSegments');
  }

  /**
   * Grants permission to list the analysis segments for a real-time chat analytics session
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListRealtimeContactAnalysisSegmentsV2.html
   */
  public toListRealtimeContactAnalysisSegmentsV2() {
    return this.to('ListRealtimeContactAnalysisSegmentsV2');
  }

  /**
   * Grants permission to list queue resources in a routing profile in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListRoutingProfileQueues.html
   */
  public toListRoutingProfileQueues() {
    return this.to('ListRoutingProfileQueues');
  }

  /**
   * Grants permission to list routing profile resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListRoutingProfiles.html
   */
  public toListRoutingProfiles() {
    return this.to('ListRoutingProfiles');
  }

  /**
   * Grants permission to list rules associated with a Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListRules.html
   */
  public toListRules() {
    return this.to('ListRules');
  }

  /**
   * Grants permission to view the security keys of an existing Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toListSecurityKeys() {
    return this.to('ListSecurityKeys');
  }

  /**
   * Grants permission to list applications associated with a specific security profile in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListSecurityProfileApplications.html
   */
  public toListSecurityProfileApplications() {
    return this.to('ListSecurityProfileApplications');
  }

  /**
   * Grants permission to list permissions associated with security profile in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListSecurityProfilePermissions.html
   */
  public toListSecurityProfilePermissions() {
    return this.to('ListSecurityProfilePermissions');
  }

  /**
   * Grants permission to list security profile resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListSecurityProfiles.html
   */
  public toListSecurityProfiles() {
    return this.to('ListSecurityProfiles');
  }

  /**
   * Grants permission to list tags for an Amazon Connect resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list task template resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListTaskTemplates.html
   */
  public toListTaskTemplates() {
    return this.to('ListTaskTemplates');
  }

  /**
   * Grants permission to list the active user associations for a traffic distribution group
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListTrafficDistributionGroupUsers.html
   */
  public toListTrafficDistributionGroupUsers() {
    return this.to('ListTrafficDistributionGroupUsers');
  }

  /**
   * Grants permission to list traffic distribution groups
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListTrafficDistributionGroups.html
   */
  public toListTrafficDistributionGroups() {
    return this.to('ListTrafficDistributionGroups');
  }

  /**
   * Grants permission to list the use cases of an integration association
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - connect:DescribeInstance
   * - ds:DescribeDirectories
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUseCases.html
   */
  public toListUseCases() {
    return this.to('ListUseCases');
  }

  /**
   * Grants permission to list the hierarchy group resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUserHierarchyGroups.html
   */
  public toListUserHierarchyGroups() {
    return this.to('ListUserHierarchyGroups');
  }

  /**
   * Grants permission to list user proficiencies from a user in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUserProficiencies.html
   */
  public toListUserProficiencies() {
    return this.to('ListUserProficiencies');
  }

  /**
   * Grants permission to list user resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to list the view versions in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListViewVersions.html
   */
  public toListViewVersions() {
    return this.to('ListViewVersions');
  }

  /**
   * Grants permission to list the views in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListViews.html
   */
  public toListViews() {
    return this.to('ListViews');
  }

  /**
   * Grants permission to monitor an ongoing contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifMonitorCapabilities()
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_MonitorContact.html
   */
  public toMonitorContact() {
    return this.to('MonitorContact');
  }

  /**
   * Grants permission to pause an ongoing contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_PauseContact.html
   */
  public toPauseContact() {
    return this.to('PauseContact');
  }

  /**
   * Grants permission to switch User Status in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_PutUserStatus.html
   */
  public toPutUserStatus() {
    return this.to('PutUserStatus');
  }

  /**
   * Grants permission to release phone number resources in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ReleasePhoneNumber.html
   */
  public toReleasePhoneNumber() {
    return this.to('ReleasePhoneNumber');
  }

  /**
   * Grants permission to create a replica of an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - ds:AuthorizeApplication
   * - ds:CheckAlias
   * - ds:CreateAlias
   * - ds:CreateDirectory
   * - ds:CreateIdentityPoolDirectory
   * - ds:DeleteDirectory
   * - ds:DescribeDirectories
   * - ds:UnauthorizeApplication
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toReplicateInstance() {
    return this.to('ReplicateInstance');
  }

  /**
   * Grants permission to resume a paused contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ResumeContact.html
   */
  public toResumeContact() {
    return this.to('ResumeContact');
  }

  /**
   * Grants permission to resume recording for the specified contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ResumeContactRecording.html
   */
  public toResumeContactRecording() {
    return this.to('ResumeContactRecording');
  }

  /**
   * Grants permission to search agent status resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchTag()
   *
   * Dependent actions:
   * - connect:DescribeAgentStatus
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchAgentStatuses.html
   */
  public toSearchAgentStatuses() {
    return this.to('SearchAgentStatuses');
  }

  /**
   * Grants permission to search phone number resources in an Amazon Connect instance or traffic distribution group
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchAvailablePhoneNumbers.html
   */
  public toSearchAvailablePhoneNumbers() {
    return this.to('SearchAvailablePhoneNumbers');
  }

  /**
   * Grants permission to search contact flow module resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchTag()
   *
   * Dependent actions:
   * - connect:DescribeContactFlowModule
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchContactFlowModules.html
   */
  public toSearchContactFlowModules() {
    return this.to('SearchContactFlowModules');
  }

  /**
   * Grants permission to search contact flow resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchTag()
   * - .ifFlowType()
   *
   * Dependent actions:
   * - connect:DescribeContactFlow
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchContactFlows.html
   */
  public toSearchContactFlows() {
    return this.to('SearchContactFlows');
  }

  /**
   * Grants permission to search contacts in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchContactsByContactAnalysis()
   *
   * Dependent actions:
   * - connect:DescribeContact
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchContacts.html
   */
  public toSearchContacts() {
    return this.to('SearchContacts');
  }

  /**
   * Grants permission to search email address resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchTag()
   *
   * Dependent actions:
   * - connect:DescribeEmailAddress
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchEmailAddresses.html
   */
  public toSearchEmailAddresses() {
    return this.to('SearchEmailAddresses');
  }

  /**
   * Grants permission to search hours of operation override resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchTag()
   *
   * Dependent actions:
   * - connect:DescribeHoursOfOperation
   * - connect:ListHoursOfOperationOverrides
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchHoursOfOperationOverrides.html
   */
  public toSearchHoursOfOperationOverrides() {
    return this.to('SearchHoursOfOperationOverrides');
  }

  /**
   * Grants permission to search hours of operation resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchTag()
   *
   * Dependent actions:
   * - connect:DescribeHoursOfOperation
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchHoursOfOperations.html
   */
  public toSearchHoursOfOperations() {
    return this.to('SearchHoursOfOperations');
  }

  /**
   * Grants permission to search predefined attributes in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - connect:DescribePredefinedAttribute
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchPredefinedAttributes.html
   */
  public toSearchPredefinedAttributes() {
    return this.to('SearchPredefinedAttributes');
  }

  /**
   * Grants permission to search prompt resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchTag()
   *
   * Dependent actions:
   * - connect:DescribePrompt
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchPrompts.html
   */
  public toSearchPrompts() {
    return this.to('SearchPrompts');
  }

  /**
   * Grants permission to search queue resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchTag()
   *
   * Dependent actions:
   * - connect:DescribeQueue
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchQueues.html
   */
  public toSearchQueues() {
    return this.to('SearchQueues');
  }

  /**
   * Grants permission to search quick connect resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchTag()
   *
   * Dependent actions:
   * - connect:DescribeQuickConnect
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchQuickConnects.html
   */
  public toSearchQuickConnects() {
    return this.to('SearchQuickConnects');
  }

  /**
   * Grants permission to search tags that are used in an Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchResourceTags.html
   */
  public toSearchResourceTags() {
    return this.to('SearchResourceTags');
  }

  /**
   * Grants permission to search routing profile resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchTag()
   *
   * Dependent actions:
   * - connect:DescribeRoutingProfile
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchRoutingProfiles.html
   */
  public toSearchRoutingProfiles() {
    return this.to('SearchRoutingProfiles');
  }

  /**
   * Grants permission to search security profile resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchTag()
   *
   * Dependent actions:
   * - connect:DescribeSecurityProfile
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchSecurityProfiles.html
   */
  public toSearchSecurityProfiles() {
    return this.to('SearchSecurityProfiles');
  }

  /**
   * Grants permission to search user hierarchy group resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchTag()
   *
   * Dependent actions:
   * - connect:DescribeUserHierarchyGroup
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchUserHierarchyGroups.html
   */
  public toSearchUserHierarchyGroups() {
    return this.to('SearchUserHierarchyGroups');
  }

  /**
   * Grants permission to search user resources in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSearchTag()
   *
   * Dependent actions:
   * - connect:DescribeUser
   * - connect:ListUserProficiencies
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchUsers.html
   */
  public toSearchUsers() {
    return this.to('SearchUsers');
  }

  /**
   * Grants permission to search vocabularies in a Amazon Connect instance
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchVocabularies.html
   */
  public toSearchVocabularies() {
    return this.to('SearchVocabularies');
  }

  /**
   * Grants permission to send chat integration events using the Amazon Connect API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SendChatIntegrationEvent.html
   */
  public toSendChatIntegrationEvent() {
    return this.to('SendChatIntegrationEvent');
  }

  /**
   * Grants permission to send integration events using the Amazon Connect API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/whatsapp-integration.html
   */
  public toSendIntegrationEvent() {
    return this.to('SendIntegrationEvent');
  }

  /**
   * Grants permission to send outbound email using the Amazon Connect API
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SendOutboundEmail.html
   */
  public toSendOutboundEmail() {
    return this.to('SendOutboundEmail');
  }

  /**
   * Grants permission to start an attached file upload in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   * - .ifUserArn()
   *
   * Dependent actions:
   * - cases:CreateRelatedItem
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartAttachedFileUpload.html
   */
  public toStartAttachedFileUpload() {
    return this.to('StartAttachedFileUpload');
  }

  /**
   * Grants permission to initiate a chat using the Amazon Connect API
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html
   */
  public toStartChatContact() {
    return this.to('StartChatContact');
  }

  /**
   * Grants permission to start an empty evaluation in the specified Amazon Connect instance, using the given evaluation form for the particular contact. The evaluation form version used for the contact evaluation corresponds to the currently activated version. If no version is activated for the evaluation form, the contact evaluation cannot be started
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactEvaluation.html
   */
  public toStartContactEvaluation() {
    return this.to('StartContactEvaluation');
  }

  /**
   * Grants permission to start recording for the specified contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactRecording.html
   */
  public toStartContactRecording() {
    return this.to('StartContactRecording');
  }

  /**
   * Grants permission to start chat streaming using the Amazon Connect API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html
   */
  public toStartContactStreaming() {
    return this.to('StartContactStreaming');
  }

  /**
   * Grants permission to initiate an inbound email using the Amazon Connect API
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartEmailContact.html
   */
  public toStartEmailContact() {
    return this.to('StartEmailContact');
  }

  /**
   * Grants permission to enable forecasting, planning, and scheduling integration on an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/optimization-apis.html
   */
  public toStartForecastingPlanningSchedulingIntegration() {
    return this.to('StartForecastingPlanningSchedulingIntegration');
  }

  /**
   * Grants permission to initiate an outbound chat using the Amazon Connect API
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifSubtype()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundChatContact.html
   */
  public toStartOutboundChatContact() {
    return this.to('StartOutboundChatContact');
  }

  /**
   * Grants permission to initiate an outbound email using the Amazon Connect API
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundEmailContact.html
   */
  public toStartOutboundEmailContact() {
    return this.to('StartOutboundEmailContact');
  }

  /**
   * Grants permission to initiate outbound calls using the Amazon Connect API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundVoiceContact.html
   */
  public toStartOutboundVoiceContact() {
    return this.to('StartOutboundVoiceContact');
  }

  /**
   * Grants permission to start screen sharing for contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartScreenSharing.html
   */
  public toStartScreenSharing() {
    return this.to('StartScreenSharing');
  }

  /**
   * Grants permission to initiate a task using the Amazon Connect API
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   * - .ifAssignmentType()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartTaskContact.html
   */
  public toStartTaskContact() {
    return this.to('StartTaskContact');
  }

  /**
   * Grants permission to initiate a WebRTC contact using the Amazon Connect API
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartWebRTCContact.html
   */
  public toStartWebRTCContact() {
    return this.to('StartWebRTCContact');
  }

  /**
   * Grants permission to stop contacts that were initiated using the Amazon Connect API. If you use this operation on an active contact the contact ends, even if the agent is active on a call with a customer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContact.html
   */
  public toStopContact() {
    return this.to('StopContact');
  }

  /**
   * Grants permission to stop recording for the specified contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContactRecording.html
   */
  public toStopContactRecording() {
    return this.to('StopContactRecording');
  }

  /**
   * Grants permission to stop chat streaming using the Amazon Connect API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContactStreaming.html
   */
  public toStopContactStreaming() {
    return this.to('StopContactStreaming');
  }

  /**
   * Grants permission to disable forecasting, planning, and scheduling integration on an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/optimization-apis.html
   */
  public toStopForecastingPlanningSchedulingIntegration() {
    return this.to('StopForecastingPlanningSchedulingIntegration');
  }

  /**
   * Grants permission to submit a contact evaluation in the specified Amazon Connect instance. Answers included in the request are merged with existing answers for the given evaluation. If no answers or notes are passed, the evaluation is submitted with the existing answers and notes. You can delete an answer or note by passing an empty object ({}) to the question identifier
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SubmitContactEvaluation.html
   */
  public toSubmitContactEvaluation() {
    return this.to('SubmitContactEvaluation');
  }

  /**
   * Grants permission to suspend recording for the specified contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SuspendContactRecording.html
   */
  public toSuspendContactRecording() {
    return this.to('SuspendContactRecording');
  }

  /**
   * Grants permission to tag a contact in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_TagContact.html
   */
  public toTagContact() {
    return this.to('TagContact');
  }

  /**
   * Grants permission to tag an Amazon Connect resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to transfer the contact to another queue or agent
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_TransferContact.html
   */
  public toTransferContact() {
    return this.to('TransferContact');
  }

  /**
   * Grants permission to untag a contact in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UntagContact.html
   */
  public toUntagContact() {
    return this.to('UntagContact');
  }

  /**
   * Grants permission to untag an Amazon Connect resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update agent status in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateAgentStatus.html
   */
  public toUpdateAgentStatus() {
    return this.to('UpdateAgentStatus');
  }

  /**
   * Grants permission to update authentication profile resources in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateAuthenticationProfile.html
   */
  public toUpdateAuthenticationProfile() {
    return this.to('UpdateAuthenticationProfile');
  }

  /**
   * Grants permission to update a contact in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContact.html
   */
  public toUpdateContact() {
    return this.to('UpdateContact');
  }

  /**
   * Grants permission to create or update the contact attributes associated with the specified contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactAttributes.html
   */
  public toUpdateContactAttributes() {
    return this.to('UpdateContactAttributes');
  }

  /**
   * Grants permission to update details about a contact evaluation in the specified Amazon Connect instance. A contact evaluation must be in the draft state. Answers included in the request are merged with existing answers for the given evaluation. An answer or note can be deleted by passing an empty object ({}) to the question identifier
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactEvaluation.html
   */
  public toUpdateContactEvaluation() {
    return this.to('UpdateContactEvaluation');
  }

  /**
   * Grants permission to update contact flow content in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   * - .ifFlowType()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowContent.html
   */
  public toUpdateContactFlowContent() {
    return this.to('UpdateContactFlowContent');
  }

  /**
   * Grants permission to update the metadata of a contact flow in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   * - .ifFlowType()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowMetadata.html
   */
  public toUpdateContactFlowMetadata() {
    return this.to('UpdateContactFlowMetadata');
  }

  /**
   * Grants permission to update contact flow module content in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowModuleContent.html
   */
  public toUpdateContactFlowModuleContent() {
    return this.to('UpdateContactFlowModuleContent');
  }

  /**
   * Grants permission to update the metadata of a contact flow module in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowModuleMetadata.html
   */
  public toUpdateContactFlowModuleMetadata() {
    return this.to('UpdateContactFlowModuleMetadata');
  }

  /**
   * Grants permission to update the name and description of a contact flow in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   * - .ifFlowType()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowName.html
   */
  public toUpdateContactFlowName() {
    return this.to('UpdateContactFlowName');
  }

  /**
   * Grants permission to update routing properties on a contact in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactRoutingData.html
   */
  public toUpdateContactRoutingData() {
    return this.to('UpdateContactRoutingData');
  }

  /**
   * Grants permission to update the schedule of a contact that is already scheduled in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifContactAssociationId()
   * - .ifChannel()
   * - .ifUserArn()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactSchedule.html
   */
  public toUpdateContactSchedule() {
    return this.to('UpdateContactSchedule');
  }

  /**
   * Grants permission to update the metadata of an email address resource in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateEmailAddressMetadata.html
   */
  public toUpdateEmailAddressMetadata() {
    return this.to('UpdateEmailAddressMetadata');
  }

  /**
   * Grants permission to update details about a specific evaluation form version in the specified Amazon Connect instance. Question and section identifiers cannot be duplicated within the same evaluation form
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateEvaluationForm.html
   */
  public toUpdateEvaluationForm() {
    return this.to('UpdateEvaluationForm');
  }

  /**
   * Grants permission to update hours of operation in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateHoursOfOperation.html
   */
  public toUpdateHoursOfOperation() {
    return this.to('UpdateHoursOfOperation');
  }

  /**
   * Grants permission to update an hours of operation override in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateHoursOfOperationOverride.html
   */
  public toUpdateHoursOfOperationOverride() {
    return this.to('UpdateHoursOfOperationOverride');
  }

  /**
   * Grants permission to update the attribute for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAttributeType()
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - ds:DescribeDirectories
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - logs:CreateLogGroup
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toUpdateInstanceAttribute() {
    return this.to('UpdateInstanceAttribute');
  }

  /**
   * Grants permission to update the storage configuration for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifStorageResourceType()
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - ds:DescribeDirectories
   * - firehose:DescribeDeliveryStream
   * - iam:AttachRolePolicy
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   * - kinesis:DescribeStream
   * - kms:CreateGrant
   * - kms:DescribeKey
   * - s3:GetBucketAcl
   * - s3:GetBucketLocation
   *
   * https://docs.aws.amazon.com/console/connect/amazon-connect-console/grant-instance-permissions
   */
  public toUpdateInstanceStorageConfig() {
    return this.to('UpdateInstanceStorageConfig');
  }

  /**
   * Grants permission to update and continue authentication for a specific contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateParticipantAuthentication.html
   */
  public toUpdateParticipantAuthentication() {
    return this.to('UpdateParticipantAuthentication');
  }

  /**
   * Grants permission to update participant role configurations associated with a contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateParticipantRoleConfig.html
   */
  public toUpdateParticipantRoleConfig() {
    return this.to('UpdateParticipantRoleConfig');
  }

  /**
   * Grants permission to update phone number resources in an Amazon Connect instance or traffic distribution group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html
   */
  public toUpdatePhoneNumber() {
    return this.to('UpdatePhoneNumber');
  }

  /**
   * Grants permission to update the metadata of a phone number resource in an Amazon Connect instance or traffic distribution group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumberMetadata.html
   */
  public toUpdatePhoneNumberMetadata() {
    return this.to('UpdatePhoneNumberMetadata');
  }

  /**
   * Grants permission to update a predefined attribute in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePredefinedAttribute.html
   */
  public toUpdatePredefinedAttribute() {
    return this.to('UpdatePredefinedAttribute');
  }

  /**
   * Grants permission to update a prompt's name, description, and Amazon S3 URI in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * Dependent actions:
   * - kms:Decrypt
   * - s3:GetObject
   * - s3:GetObjectAcl
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePrompt.html
   */
  public toUpdatePrompt() {
    return this.to('UpdatePrompt');
  }

  /**
   * Grants permission to update queue hours of operation in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQueueHoursOfOperation.html
   */
  public toUpdateQueueHoursOfOperation() {
    return this.to('UpdateQueueHoursOfOperation');
  }

  /**
   * Grants permission to update queue capacity in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQueueMaxContacts.html
   */
  public toUpdateQueueMaxContacts() {
    return this.to('UpdateQueueMaxContacts');
  }

  /**
   * Grants permission to update a queue name and description in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQueueName.html
   */
  public toUpdateQueueName() {
    return this.to('UpdateQueueName');
  }

  /**
   * Grants permission to update queue outbound caller config in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQueueOutboundCallerConfig.html
   */
  public toUpdateQueueOutboundCallerConfig() {
    return this.to('UpdateQueueOutboundCallerConfig');
  }

  /**
   * Grants permission to update the outbound email configuration for a queue in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQueueOutboundEmailConfig.html
   */
  public toUpdateQueueOutboundEmailConfig() {
    return this.to('UpdateQueueOutboundEmailConfig');
  }

  /**
   * Grants permission to update queue status in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQueueStatus.html
   */
  public toUpdateQueueStatus() {
    return this.to('UpdateQueueStatus');
  }

  /**
   * Grants permission to update the configuration of a quick connect in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQuickConnectConfig.html
   */
  public toUpdateQuickConnectConfig() {
    return this.to('UpdateQuickConnectConfig');
  }

  /**
   * Grants permission to update a quick connect name and description in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateQuickConnectName.html
   */
  public toUpdateQuickConnectName() {
    return this.to('UpdateQuickConnectName');
  }

  /**
   * Grants permission to update a routing profile agent availability timer in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileAgentAvailabilityTimer.html
   */
  public toUpdateRoutingProfileAgentAvailabilityTimer() {
    return this.to('UpdateRoutingProfileAgentAvailabilityTimer');
  }

  /**
   * Grants permission to update the concurrency in a routing profile in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileConcurrency.html
   */
  public toUpdateRoutingProfileConcurrency() {
    return this.to('UpdateRoutingProfileConcurrency');
  }

  /**
   * Grants permission to update the outbound queue in a routing profile in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileDefaultOutboundQueue.html
   */
  public toUpdateRoutingProfileDefaultOutboundQueue() {
    return this.to('UpdateRoutingProfileDefaultOutboundQueue');
  }

  /**
   * Grants permission to update a routing profile name and description in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileName.html
   */
  public toUpdateRoutingProfileName() {
    return this.to('UpdateRoutingProfileName');
  }

  /**
   * Grants permission to update the queues in routing profile in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRoutingProfileQueues.html
   */
  public toUpdateRoutingProfileQueues() {
    return this.to('UpdateRoutingProfileQueues');
  }

  /**
   * Grants permission to update a rule for an existing Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateRule.html
   */
  public toUpdateRule() {
    return this.to('UpdateRule');
  }

  /**
   * Grants permission to update a security profile group for a user in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateSecurityProfile.html
   */
  public toUpdateSecurityProfile() {
    return this.to('UpdateSecurityProfile');
  }

  /**
   * Grants permission to update task template belonging to a Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateTaskTemplate.html
   */
  public toUpdateTaskTemplate() {
    return this.to('UpdateTaskTemplate');
  }

  /**
   * Grants permission to update traffic distribution for a traffic distribution group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateTrafficDistribution.html
   */
  public toUpdateTrafficDistribution() {
    return this.to('UpdateTrafficDistribution');
  }

  /**
   * Grants permission to update a hierarchy group for a user in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserHierarchy.html
   */
  public toUpdateUserHierarchy() {
    return this.to('UpdateUserHierarchy');
  }

  /**
   * Grants permission to update a user hierarchy group name in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserHierarchyGroupName.html
   */
  public toUpdateUserHierarchyGroupName() {
    return this.to('UpdateUserHierarchyGroupName');
  }

  /**
   * Grants permission to update user hierarchy structure in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserHierarchyStructure.html
   */
  public toUpdateUserHierarchyStructure() {
    return this.to('UpdateUserHierarchyStructure');
  }

  /**
   * Grants permission to update identity information for a user in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserIdentityInfo.html
   */
  public toUpdateUserIdentityInfo() {
    return this.to('UpdateUserIdentityInfo');
  }

  /**
   * Grants permission to update phone configuration settings for a user in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserPhoneConfig.html
   */
  public toUpdateUserPhoneConfig() {
    return this.to('UpdateUserPhoneConfig');
  }

  /**
   * Grants permission to update user proficiencies from a user in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserProficiencies.html
   */
  public toUpdateUserProficiencies() {
    return this.to('UpdateUserProficiencies');
  }

  /**
   * Grants permission to update a routing profile for a user in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserRoutingProfile.html
   */
  public toUpdateUserRoutingProfile() {
    return this.to('UpdateUserRoutingProfile');
  }

  /**
   * Grants permission to update security profiles for a user in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserSecurityProfiles.html
   */
  public toUpdateUserSecurityProfiles() {
    return this.to('UpdateUserSecurityProfiles');
  }

  /**
   * Grants permission to update a view's content in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateViewContent.html
   */
  public toUpdateViewContent() {
    return this.to('UpdateViewContent');
  }

  /**
   * Grants permission to update a view's metadata in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateViewMetadata.html
   */
  public toUpdateViewMetadata() {
    return this.to('UpdateViewMetadata');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ActivateEvaluationForm',
      'AdminGetEmergencyAccessToken',
      'AssociateAnalyticsDataSet',
      'AssociateApprovedOrigin',
      'AssociateBot',
      'AssociateCustomerProfilesDomain',
      'AssociateDefaultVocabulary',
      'AssociateFlow',
      'AssociateInstanceStorageConfig',
      'AssociateLambdaFunction',
      'AssociateLexBot',
      'AssociatePhoneNumberContactFlow',
      'AssociateQueueQuickConnects',
      'AssociateRoutingProfileQueues',
      'AssociateSecurityKey',
      'AssociateTrafficDistributionGroupUser',
      'AssociateUserProficiencies',
      'BatchAssociateAnalyticsDataSet',
      'BatchDisassociateAnalyticsDataSet',
      'BatchPutContact',
      'ClaimPhoneNumber',
      'CompleteAttachedFileUpload',
      'CreateAgentStatus',
      'CreateAuthenticationProfile',
      'CreateContact',
      'CreateContactFlow',
      'CreateContactFlowModule',
      'CreateContactFlowVersion',
      'CreateEmailAddress',
      'CreateEvaluationForm',
      'CreateHoursOfOperation',
      'CreateHoursOfOperationOverride',
      'CreateInstance',
      'CreateIntegrationAssociation',
      'CreateParticipant',
      'CreatePersistentContactAssociation',
      'CreatePredefinedAttribute',
      'CreatePrompt',
      'CreatePushNotificationRegistration',
      'CreateQueue',
      'CreateQuickConnect',
      'CreateRoutingProfile',
      'CreateRule',
      'CreateSecurityProfile',
      'CreateTaskTemplate',
      'CreateTrafficDistributionGroup',
      'CreateUseCase',
      'CreateUser',
      'CreateUserHierarchyGroup',
      'CreateView',
      'CreateViewVersion',
      'CreateVocabulary',
      'DeactivateEvaluationForm',
      'DeleteAttachedFile',
      'DeleteContactEvaluation',
      'DeleteContactFlow',
      'DeleteContactFlowModule',
      'DeleteContactFlowVersion',
      'DeleteEmailAddress',
      'DeleteEvaluationForm',
      'DeleteHoursOfOperation',
      'DeleteHoursOfOperationOverride',
      'DeleteInstance',
      'DeleteIntegrationAssociation',
      'DeletePredefinedAttribute',
      'DeletePrompt',
      'DeletePushNotificationRegistration',
      'DeleteQueue',
      'DeleteQuickConnect',
      'DeleteRoutingProfile',
      'DeleteRule',
      'DeleteSecurityProfile',
      'DeleteTaskTemplate',
      'DeleteTrafficDistributionGroup',
      'DeleteUseCase',
      'DeleteUser',
      'DeleteUserHierarchyGroup',
      'DeleteView',
      'DeleteViewVersion',
      'DeleteVocabulary',
      'DisassociateAnalyticsDataSet',
      'DisassociateApprovedOrigin',
      'DisassociateBot',
      'DisassociateCustomerProfilesDomain',
      'DisassociateFlow',
      'DisassociateInstanceStorageConfig',
      'DisassociateLambdaFunction',
      'DisassociateLexBot',
      'DisassociatePhoneNumberContactFlow',
      'DisassociateQueueQuickConnects',
      'DisassociateRoutingProfileQueues',
      'DisassociateSecurityKey',
      'DisassociateTrafficDistributionGroupUser',
      'DisassociateUserProficiencies',
      'DismissUserContact',
      'ImportPhoneNumber',
      'MonitorContact',
      'PauseContact',
      'PutUserStatus',
      'ReleasePhoneNumber',
      'ReplicateInstance',
      'ResumeContact',
      'ResumeContactRecording',
      'SendChatIntegrationEvent',
      'SendIntegrationEvent',
      'SendOutboundEmail',
      'StartAttachedFileUpload',
      'StartChatContact',
      'StartContactEvaluation',
      'StartContactRecording',
      'StartContactStreaming',
      'StartEmailContact',
      'StartForecastingPlanningSchedulingIntegration',
      'StartOutboundChatContact',
      'StartOutboundEmailContact',
      'StartOutboundVoiceContact',
      'StartScreenSharing',
      'StartTaskContact',
      'StartWebRTCContact',
      'StopContact',
      'StopContactRecording',
      'StopContactStreaming',
      'StopForecastingPlanningSchedulingIntegration',
      'SubmitContactEvaluation',
      'SuspendContactRecording',
      'TagContact',
      'TransferContact',
      'UntagContact',
      'UpdateAgentStatus',
      'UpdateAuthenticationProfile',
      'UpdateContact',
      'UpdateContactAttributes',
      'UpdateContactEvaluation',
      'UpdateContactFlowContent',
      'UpdateContactFlowMetadata',
      'UpdateContactFlowModuleContent',
      'UpdateContactFlowModuleMetadata',
      'UpdateContactFlowName',
      'UpdateContactRoutingData',
      'UpdateContactSchedule',
      'UpdateEmailAddressMetadata',
      'UpdateEvaluationForm',
      'UpdateHoursOfOperation',
      'UpdateHoursOfOperationOverride',
      'UpdateInstanceAttribute',
      'UpdateInstanceStorageConfig',
      'UpdateParticipantAuthentication',
      'UpdateParticipantRoleConfig',
      'UpdatePhoneNumber',
      'UpdatePhoneNumberMetadata',
      'UpdatePredefinedAttribute',
      'UpdatePrompt',
      'UpdateQueueHoursOfOperation',
      'UpdateQueueMaxContacts',
      'UpdateQueueName',
      'UpdateQueueOutboundCallerConfig',
      'UpdateQueueOutboundEmailConfig',
      'UpdateQueueStatus',
      'UpdateQuickConnectConfig',
      'UpdateQuickConnectName',
      'UpdateRoutingProfileAgentAvailabilityTimer',
      'UpdateRoutingProfileConcurrency',
      'UpdateRoutingProfileDefaultOutboundQueue',
      'UpdateRoutingProfileName',
      'UpdateRoutingProfileQueues',
      'UpdateRule',
      'UpdateSecurityProfile',
      'UpdateTaskTemplate',
      'UpdateTrafficDistribution',
      'UpdateUserHierarchy',
      'UpdateUserHierarchyGroupName',
      'UpdateUserHierarchyStructure',
      'UpdateUserIdentityInfo',
      'UpdateUserPhoneConfig',
      'UpdateUserProficiencies',
      'UpdateUserRoutingProfile',
      'UpdateUserSecurityProfiles',
      'UpdateViewContent',
      'UpdateViewMetadata'
    ],
    Read: [
      'BatchGetAttachedFileMetadata',
      'DescribeAgentStatus',
      'DescribeAuthenticationProfile',
      'DescribeContact',
      'DescribeContactEvaluation',
      'DescribeContactFlow',
      'DescribeContactFlowModule',
      'DescribeEmailAddress',
      'DescribeEvaluationForm',
      'DescribeForecastingPlanningSchedulingIntegration',
      'DescribeHoursOfOperation',
      'DescribeHoursOfOperationOverride',
      'DescribeInstance',
      'DescribeInstanceAttribute',
      'DescribeInstanceStorageConfig',
      'DescribePhoneNumber',
      'DescribePredefinedAttribute',
      'DescribePrompt',
      'DescribeQueue',
      'DescribeQuickConnect',
      'DescribeRoutingProfile',
      'DescribeRule',
      'DescribeSecurityProfile',
      'DescribeTrafficDistributionGroup',
      'DescribeUser',
      'DescribeUserHierarchyGroup',
      'DescribeUserHierarchyStructure',
      'DescribeView',
      'DescribeVocabulary',
      'GetAttachedFile',
      'GetContactAttributes',
      'GetCurrentMetricData',
      'GetCurrentUserData',
      'GetEffectiveHoursOfOperations',
      'GetFederationToken',
      'GetFlowAssociation',
      'GetMetricData',
      'GetMetricDataV2',
      'GetPromptFile',
      'GetTaskTemplate',
      'ListRealtimeContactAnalysisSegments',
      'ListTagsForResource',
      'SearchAgentStatuses',
      'SearchContactFlowModules',
      'SearchContactFlows',
      'SearchContacts',
      'SearchEmailAddresses',
      'SearchHoursOfOperationOverrides',
      'SearchHoursOfOperations',
      'SearchPredefinedAttributes',
      'SearchPrompts',
      'SearchQueues',
      'SearchQuickConnects',
      'SearchRoutingProfiles',
      'SearchSecurityProfiles',
      'SearchUserHierarchyGroups',
      'SearchUsers'
    ],
    List: [
      'BatchGetFlowAssociation',
      'GetTrafficDistribution',
      'ListAgentStatuses',
      'ListAnalyticsDataAssociations',
      'ListAnalyticsDataLakeDataSets',
      'ListApprovedOrigins',
      'ListAssociatedContacts',
      'ListAuthenticationProfiles',
      'ListBots',
      'ListContactEvaluations',
      'ListContactFlowModules',
      'ListContactFlowVersions',
      'ListContactFlows',
      'ListContactReferences',
      'ListDefaultVocabularies',
      'ListEvaluationFormVersions',
      'ListEvaluationForms',
      'ListFlowAssociations',
      'ListHoursOfOperationOverrides',
      'ListHoursOfOperations',
      'ListInstanceAttributes',
      'ListInstanceStorageConfigs',
      'ListInstances',
      'ListIntegrationAssociations',
      'ListLambdaFunctions',
      'ListLexBots',
      'ListPhoneNumbers',
      'ListPhoneNumbersV2',
      'ListPredefinedAttributes',
      'ListPrompts',
      'ListQueueQuickConnects',
      'ListQueues',
      'ListQuickConnects',
      'ListRealtimeContactAnalysisSegmentsV2',
      'ListRoutingProfileQueues',
      'ListRoutingProfiles',
      'ListRules',
      'ListSecurityKeys',
      'ListSecurityProfileApplications',
      'ListSecurityProfilePermissions',
      'ListSecurityProfiles',
      'ListTaskTemplates',
      'ListTrafficDistributionGroupUsers',
      'ListTrafficDistributionGroups',
      'ListUseCases',
      'ListUserHierarchyGroups',
      'ListUserProficiencies',
      'ListUsers',
      'ListViewVersions',
      'ListViews',
      'SearchAvailablePhoneNumbers',
      'SearchResourceTags',
      'SearchVocabularies'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }`);
  }

  /**
   * Adds a resource of type contact to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-attributes.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param contactId - Identifier for the contactId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onContact(instanceId: string, contactId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/contact/${ contactId }`);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-agents.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param userId - Identifier for the userId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUser(instanceId: string, userId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/agent/${ userId }`);
  }

  /**
   * Adds a resource of type routing-profile to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param routingProfileId - Identifier for the routingProfileId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRoutingProfile(instanceId: string, routingProfileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/routing-profile/${ routingProfileId }`);
  }

  /**
   * Adds a resource of type security-profile to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param securityProfileId - Identifier for the securityProfileId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecurityProfile(instanceId: string, securityProfileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/security-profile/${ securityProfileId }`);
  }

  /**
   * Adds a resource of type authentication-profile to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-authentication-profiles.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param authenticationProfileId - Identifier for the authenticationProfileId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAuthenticationProfile(instanceId: string, authenticationProfileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/authentication-profile/${ authenticationProfileId }`);
  }

  /**
   * Adds a resource of type hierarchy-group to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param hierarchyGroupId - Identifier for the hierarchyGroupId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHierarchyGroup(instanceId: string, hierarchyGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/agent-group/${ hierarchyGroupId }`);
  }

  /**
   * Adds a resource of type queue to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/create-queue.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param queueId - Identifier for the queueId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQueue(instanceId: string, queueId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/queue/${ queueId }`);
  }

  /**
   * Adds a resource of type wildcard-queue to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/create-queue.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWildcardQueue(instanceId: string, resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/queue/${ resourceName }`);
  }

  /**
   * Adds a resource of type quick-connect to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/quick-connects.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param quickConnectId - Identifier for the quickConnectId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQuickConnect(instanceId: string, quickConnectId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/transfer-destination/${ quickConnectId }`);
  }

  /**
   * Adds a resource of type wildcard-quick-connect to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/quick-connects.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWildcardQuickConnect(instanceId: string, resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/transfer-destination/${ resourceName }`);
  }

  /**
   * Adds a resource of type contact-flow to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-flows.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param contactFlowId - Identifier for the contactFlowId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContactFlow(instanceId: string, contactFlowId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/contact-flow/${ contactFlowId }`);
  }

  /**
   * Adds a resource of type task-template to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/task-templates.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param taskTemplateId - Identifier for the taskTemplateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTaskTemplate(instanceId: string, taskTemplateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/task-template/${ taskTemplateId }`);
  }

  /**
   * Adds a resource of type contact-flow-module to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/contact-flow-modules.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param contactFlowModuleId - Identifier for the contactFlowModuleId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContactFlowModule(instanceId: string, contactFlowModuleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/flow-module/${ contactFlowModuleId }`);
  }

  /**
   * Adds a resource of type wildcard-contact-flow to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-flows.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWildcardContactFlow(instanceId: string, resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/contact-flow/${ resourceName }`);
  }

  /**
   * Adds a resource of type hours-of-operation to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/set-hours-operation.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param hoursOfOperationId - Identifier for the hoursOfOperationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHoursOfOperation(instanceId: string, hoursOfOperationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/operating-hours/${ hoursOfOperationId }`);
  }

  /**
   * Adds a resource of type agent-status to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/metrics-agent-status.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param agentStatusId - Identifier for the agentStatusId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAgentStatus(instanceId: string, agentStatusId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/agent-state/${ agentStatusId }`);
  }

  /**
   * Adds a resource of type wildcard-agent-status to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/metrics-agent-status.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWildcardAgentStatus(instanceId: string, resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/agent-state/${ resourceName }`);
  }

  /**
   * Adds a resource of type legacy-phone-number to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/ag-overview-numbers.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param phoneNumberId - Identifier for the phoneNumberId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onLegacyPhoneNumber(instanceId: string, phoneNumberId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/phone-number/${ phoneNumberId }`);
  }

  /**
   * Adds a resource of type wildcard-legacy-phone-number to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/ag-overview-numbers.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onWildcardLegacyPhoneNumber(instanceId: string, resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/phone-number/${ resourceName }`);
  }

  /**
   * Adds a resource of type phone-number to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/ag-overview-numbers.html
   *
   * @param phoneNumberId - Identifier for the phoneNumberId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPhoneNumber(phoneNumberId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:phone-number/${ phoneNumberId }`);
  }

  /**
   * Adds a resource of type wildcard-phone-number to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/ag-overview-numbers.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWildcardPhoneNumber(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:phone-number/${ resourceName }`);
  }

  /**
   * Adds a resource of type integration-association to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-rules.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param integrationAssociationId - Identifier for the integrationAssociationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegrationAssociation(instanceId: string, integrationAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/integration-association/${ integrationAssociationId }`);
  }

  /**
   * Adds a resource of type use-case to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/add-rules-task-creation.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param useCaseId - Identifier for the useCaseId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUseCase(instanceId: string, useCaseId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/use-case/${ useCaseId }`);
  }

  /**
   * Adds a resource of type vocabulary to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/add-custom-vocabulary.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param vocabularyId - Identifier for the vocabularyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVocabulary(instanceId: string, vocabularyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/vocabulary/${ vocabularyId }`);
  }

  /**
   * Adds a resource of type traffic-distribution-group to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/setup-traffic-distribution-groups.html
   *
   * @param trafficDistributionGroupId - Identifier for the trafficDistributionGroupId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrafficDistributionGroup(trafficDistributionGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:traffic-distribution-group/${ trafficDistributionGroupId }`);
  }

  /**
   * Adds a resource of type rule to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-rules.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param ruleId - Identifier for the ruleId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRule(instanceId: string, ruleId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/rule/${ ruleId }`);
  }

  /**
   * Adds a resource of type evaluation-form to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/create-evaluation-forms.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param formId - Identifier for the formId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEvaluationForm(instanceId: string, formId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/evaluation-form/${ formId }`);
  }

  /**
   * Adds a resource of type contact-evaluation to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/evaluations.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param evaluationId - Identifier for the evaluationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContactEvaluation(instanceId: string, evaluationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/contact-evaluation/${ evaluationId }`);
  }

  /**
   * Adds a resource of type prompt to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/prompts.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param promptId - Identifier for the promptId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPrompt(instanceId: string, promptId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/prompt/${ promptId }`);
  }

  /**
   * Adds a resource of type customer-managed-view to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/view-resources-sg.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param viewId - Identifier for the viewId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustomerManagedView(instanceId: string, viewId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/view/${ viewId }`);
  }

  /**
   * Adds a resource of type aws-managed-view to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/view-resources-sg.html
   *
   * @param viewId - Identifier for the viewId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAwsManagedView(viewId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:aws:view/${ viewId }`);
  }

  /**
   * Adds a resource of type qualified-customer-managed-view to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/view-resources-sg.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param viewId - Identifier for the viewId.
   * @param viewQualifier - Identifier for the viewQualifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQualifiedCustomerManagedView(instanceId: string, viewId: string, viewQualifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/view/${ viewId }:${ viewQualifier }`);
  }

  /**
   * Adds a resource of type qualified-aws-managed-view to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/view-resources-sg.html
   *
   * @param viewId - Identifier for the viewId.
   * @param viewQualifier - Identifier for the viewQualifier.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onQualifiedAwsManagedView(viewId: string, viewQualifier: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:aws:view/${ viewId }:${ viewQualifier }`);
  }

  /**
   * Adds a resource of type customer-managed-view-version to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/view-resources-sg.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param viewId - Identifier for the viewId.
   * @param viewVersion - Identifier for the viewVersion.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustomerManagedViewVersion(instanceId: string, viewId: string, viewVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/view/${ viewId }:${ viewVersion }`);
  }

  /**
   * Adds a resource of type attached-file to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-attachments.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param fileId - Identifier for the fileId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAttachedFile(instanceId: string, fileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/file/${ fileId }`);
  }

  /**
   * Adds a resource of type email-address to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/email-address.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param emailAddressId - Identifier for the emailAddressId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEmailAddress(instanceId: string, emailAddressId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/email-address/${ emailAddressId }`);
  }

  /**
   * Filters access by using tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toBatchGetAttachedFileMetadata()
   * - .toClaimPhoneNumber()
   * - .toCompleteAttachedFileUpload()
   * - .toCreateAgentStatus()
   * - .toCreateContactFlow()
   * - .toCreateContactFlowModule()
   * - .toCreateEmailAddress()
   * - .toCreateHoursOfOperation()
   * - .toCreateInstance()
   * - .toCreateIntegrationAssociation()
   * - .toCreatePrompt()
   * - .toCreateQueue()
   * - .toCreateQuickConnect()
   * - .toCreateRoutingProfile()
   * - .toCreateSecurityProfile()
   * - .toCreateTrafficDistributionGroup()
   * - .toCreateUseCase()
   * - .toCreateUser()
   * - .toCreateUserHierarchyGroup()
   * - .toCreateView()
   * - .toCreateVocabulary()
   * - .toDeleteAttachedFile()
   * - .toGetAttachedFile()
   * - .toImportPhoneNumber()
   * - .toReplicateInstance()
   * - .toStartAttachedFileUpload()
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
   * Filters access by using tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAssociateFlow()
   * - .toAssociatePhoneNumberContactFlow()
   * - .toAssociateQueueQuickConnects()
   * - .toAssociateRoutingProfileQueues()
   * - .toAssociateTrafficDistributionGroupUser()
   * - .toBatchGetFlowAssociation()
   * - .toCreateContact()
   * - .toCreateContactFlowVersion()
   * - .toCreateViewVersion()
   * - .toDeleteContactEvaluation()
   * - .toDeleteContactFlow()
   * - .toDeleteContactFlowModule()
   * - .toDeleteContactFlowVersion()
   * - .toDeleteEmailAddress()
   * - .toDeleteEvaluationForm()
   * - .toDeleteHoursOfOperation()
   * - .toDeleteInstance()
   * - .toDeletePrompt()
   * - .toDeleteQueue()
   * - .toDeleteQuickConnect()
   * - .toDeleteRoutingProfile()
   * - .toDeleteRule()
   * - .toDeleteSecurityProfile()
   * - .toDeleteTaskTemplate()
   * - .toDeleteTrafficDistributionGroup()
   * - .toDeleteUser()
   * - .toDeleteView()
   * - .toDeleteViewVersion()
   * - .toDeleteVocabulary()
   * - .toDescribeAgentStatus()
   * - .toDescribeContactEvaluation()
   * - .toDescribeContactFlow()
   * - .toDescribeContactFlowModule()
   * - .toDescribeEmailAddress()
   * - .toDescribeEvaluationForm()
   * - .toDescribeHoursOfOperation()
   * - .toDescribeInstance()
   * - .toDescribePhoneNumber()
   * - .toDescribePrompt()
   * - .toDescribeQueue()
   * - .toDescribeQuickConnect()
   * - .toDescribeRoutingProfile()
   * - .toDescribeRule()
   * - .toDescribeSecurityProfile()
   * - .toDescribeTrafficDistributionGroup()
   * - .toDescribeUser()
   * - .toDescribeView()
   * - .toDescribeVocabulary()
   * - .toDisassociateFlow()
   * - .toDisassociatePhoneNumberContactFlow()
   * - .toDisassociateQueueQuickConnects()
   * - .toDisassociateRoutingProfileQueues()
   * - .toDisassociateTrafficDistributionGroupUser()
   * - .toDismissUserContact()
   * - .toGetCurrentMetricData()
   * - .toGetCurrentUserData()
   * - .toGetFlowAssociation()
   * - .toGetMetricData()
   * - .toGetMetricDataV2()
   * - .toGetPromptFile()
   * - .toGetTaskTemplate()
   * - .toGetTrafficDistribution()
   * - .toListContactFlowVersions()
   * - .toListQueueQuickConnects()
   * - .toListRoutingProfileQueues()
   * - .toListSecurityProfileApplications()
   * - .toListSecurityProfilePermissions()
   * - .toListTagsForResource()
   * - .toListTrafficDistributionGroupUsers()
   * - .toListViewVersions()
   * - .toMonitorContact()
   * - .toPauseContact()
   * - .toPutUserStatus()
   * - .toReleasePhoneNumber()
   * - .toResumeContact()
   * - .toSearchResourceTags()
   * - .toStartEmailContact()
   * - .toStartOutboundEmailContact()
   * - .toStartTaskContact()
   * - .toUpdateAgentStatus()
   * - .toUpdateContactFlowContent()
   * - .toUpdateContactFlowMetadata()
   * - .toUpdateContactFlowModuleContent()
   * - .toUpdateContactFlowModuleMetadata()
   * - .toUpdateContactFlowName()
   * - .toUpdateEmailAddressMetadata()
   * - .toUpdateHoursOfOperation()
   * - .toUpdatePhoneNumber()
   * - .toUpdatePhoneNumberMetadata()
   * - .toUpdatePrompt()
   * - .toUpdateQueueHoursOfOperation()
   * - .toUpdateQueueMaxContacts()
   * - .toUpdateQueueName()
   * - .toUpdateQueueOutboundCallerConfig()
   * - .toUpdateQueueOutboundEmailConfig()
   * - .toUpdateQueueStatus()
   * - .toUpdateQuickConnectConfig()
   * - .toUpdateQuickConnectName()
   * - .toUpdateRoutingProfileAgentAvailabilityTimer()
   * - .toUpdateRoutingProfileConcurrency()
   * - .toUpdateRoutingProfileDefaultOutboundQueue()
   * - .toUpdateRoutingProfileName()
   * - .toUpdateRoutingProfileQueues()
   * - .toUpdateSecurityProfile()
   * - .toUpdateTaskTemplate()
   * - .toUpdateTrafficDistribution()
   * - .toUpdateUserHierarchy()
   * - .toUpdateUserIdentityInfo()
   * - .toUpdateUserPhoneConfig()
   * - .toUpdateUserRoutingProfile()
   * - .toUpdateUserSecurityProfiles()
   * - .toUpdateViewContent()
   * - .toUpdateViewMetadata()
   *
   * Applies to resource types:
   * - instance
   * - user
   * - routing-profile
   * - security-profile
   * - hierarchy-group
   * - queue
   * - quick-connect
   * - contact-flow
   * - task-template
   * - contact-flow-module
   * - hours-of-operation
   * - agent-status
   * - phone-number
   * - wildcard-phone-number
   * - integration-association
   * - use-case
   * - vocabulary
   * - traffic-distribution-group
   * - rule
   * - evaluation-form
   * - contact-evaluation
   * - prompt
   * - customer-managed-view
   * - qualified-customer-managed-view
   * - customer-managed-view-version
   * - attached-file
   * - email-address
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by using tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toBatchGetAttachedFileMetadata()
   * - .toClaimPhoneNumber()
   * - .toCompleteAttachedFileUpload()
   * - .toCreateAgentStatus()
   * - .toCreateContactFlow()
   * - .toCreateContactFlowModule()
   * - .toCreateEmailAddress()
   * - .toCreateHoursOfOperation()
   * - .toCreateInstance()
   * - .toCreateIntegrationAssociation()
   * - .toCreatePrompt()
   * - .toCreateQueue()
   * - .toCreateQuickConnect()
   * - .toCreateRoutingProfile()
   * - .toCreateSecurityProfile()
   * - .toCreateTrafficDistributionGroup()
   * - .toCreateUseCase()
   * - .toCreateUser()
   * - .toCreateUserHierarchyGroup()
   * - .toCreateView()
   * - .toCreateVocabulary()
   * - .toDeleteAttachedFile()
   * - .toGetAttachedFile()
   * - .toImportPhoneNumber()
   * - .toReplicateInstance()
   * - .toStartAttachedFileUpload()
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
   * Filters access by restricting access to create contacts based on Assignment Type
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toStartTaskContact()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAssignmentType(value: string | string[], operator?: Operator | string) {
    return this.if(`AssignmentType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the attribute type of the Amazon Connect instance
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toDescribeInstanceAttribute()
   * - .toUpdateInstanceAttribute()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAttributeType(value: string | string[], operator?: Operator | string) {
    return this.if(`AttributeType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by Channel
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toDescribeContact()
   * - .toGetContactAttributes()
   * - .toListContactReferences()
   * - .toResumeContactRecording()
   * - .toStartContactRecording()
   * - .toStartScreenSharing()
   * - .toStopContact()
   * - .toStopContactRecording()
   * - .toSuspendContactRecording()
   * - .toTagContact()
   * - .toTransferContact()
   * - .toUntagContact()
   * - .toUpdateContact()
   * - .toUpdateContactAttributes()
   * - .toUpdateContactRoutingData()
   * - .toUpdateContactSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifChannel(value: string | string[], operator?: Operator | string) {
    return this.if(`Channel`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by ContactAssociationId
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toDescribeContact()
   * - .toGetContactAttributes()
   * - .toListContactReferences()
   * - .toResumeContactRecording()
   * - .toStartContactRecording()
   * - .toStartScreenSharing()
   * - .toStopContact()
   * - .toStopContactRecording()
   * - .toSuspendContactRecording()
   * - .toTagContact()
   * - .toTransferContact()
   * - .toUntagContact()
   * - .toUpdateContact()
   * - .toUpdateContactAttributes()
   * - .toUpdateContactRoutingData()
   * - .toUpdateContactSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifContactAssociationId(value: string | string[], operator?: Operator | string) {
    return this.if(`ContactAssociationId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by restricting access to create contacts based on the initiation method of the contact
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toCreateContact()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifContactInitiationMethod(value: string | string[], operator?: Operator | string) {
    return this.if(`ContactInitiationMethod`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by Flow type
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toCreateContactFlow()
   * - .toCreateContactFlowVersion()
   * - .toDeleteContactFlow()
   * - .toDeleteContactFlowVersion()
   * - .toDescribeContactFlow()
   * - .toListContactFlowVersions()
   * - .toSearchContactFlows()
   * - .toUpdateContactFlowContent()
   * - .toUpdateContactFlowMetadata()
   * - .toUpdateContactFlowName()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFlowType(value: string | string[], operator?: Operator | string) {
    return this.if(`FlowType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by restricting federation into specified Amazon Connect instances
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toActivateEvaluationForm()
   * - .toAssociateAnalyticsDataSet()
   * - .toAssociateApprovedOrigin()
   * - .toAssociateBot()
   * - .toAssociateDefaultVocabulary()
   * - .toAssociateFlow()
   * - .toAssociateInstanceStorageConfig()
   * - .toAssociateLambdaFunction()
   * - .toAssociateLexBot()
   * - .toAssociatePhoneNumberContactFlow()
   * - .toAssociateQueueQuickConnects()
   * - .toAssociateRoutingProfileQueues()
   * - .toAssociateSecurityKey()
   * - .toAssociateTrafficDistributionGroupUser()
   * - .toAssociateUserProficiencies()
   * - .toBatchAssociateAnalyticsDataSet()
   * - .toBatchDisassociateAnalyticsDataSet()
   * - .toBatchGetAttachedFileMetadata()
   * - .toBatchGetFlowAssociation()
   * - .toBatchPutContact()
   * - .toClaimPhoneNumber()
   * - .toCompleteAttachedFileUpload()
   * - .toCreateAgentStatus()
   * - .toCreateAuthenticationProfile()
   * - .toCreateContact()
   * - .toCreateContactFlow()
   * - .toCreateContactFlowModule()
   * - .toCreateContactFlowVersion()
   * - .toCreateEmailAddress()
   * - .toCreateEvaluationForm()
   * - .toCreateHoursOfOperation()
   * - .toCreateHoursOfOperationOverride()
   * - .toCreateIntegrationAssociation()
   * - .toCreateParticipant()
   * - .toCreatePersistentContactAssociation()
   * - .toCreatePredefinedAttribute()
   * - .toCreatePrompt()
   * - .toCreatePushNotificationRegistration()
   * - .toCreateQueue()
   * - .toCreateQuickConnect()
   * - .toCreateRoutingProfile()
   * - .toCreateRule()
   * - .toCreateSecurityProfile()
   * - .toCreateTrafficDistributionGroup()
   * - .toCreateUseCase()
   * - .toCreateUser()
   * - .toCreateUserHierarchyGroup()
   * - .toCreateView()
   * - .toCreateViewVersion()
   * - .toCreateVocabulary()
   * - .toDeactivateEvaluationForm()
   * - .toDeleteAttachedFile()
   * - .toDeleteContactEvaluation()
   * - .toDeleteContactFlow()
   * - .toDeleteContactFlowModule()
   * - .toDeleteContactFlowVersion()
   * - .toDeleteEmailAddress()
   * - .toDeleteEvaluationForm()
   * - .toDeleteHoursOfOperation()
   * - .toDeleteHoursOfOperationOverride()
   * - .toDeleteInstance()
   * - .toDeleteIntegrationAssociation()
   * - .toDeletePredefinedAttribute()
   * - .toDeletePrompt()
   * - .toDeletePushNotificationRegistration()
   * - .toDeleteQueue()
   * - .toDeleteQuickConnect()
   * - .toDeleteRoutingProfile()
   * - .toDeleteRule()
   * - .toDeleteSecurityProfile()
   * - .toDeleteTaskTemplate()
   * - .toDeleteUseCase()
   * - .toDeleteUser()
   * - .toDeleteUserHierarchyGroup()
   * - .toDeleteView()
   * - .toDeleteViewVersion()
   * - .toDeleteVocabulary()
   * - .toDescribeAgentStatus()
   * - .toDescribeAuthenticationProfile()
   * - .toDescribeContact()
   * - .toDescribeContactEvaluation()
   * - .toDescribeContactFlow()
   * - .toDescribeContactFlowModule()
   * - .toDescribeEmailAddress()
   * - .toDescribeEvaluationForm()
   * - .toDescribeForecastingPlanningSchedulingIntegration()
   * - .toDescribeHoursOfOperation()
   * - .toDescribeHoursOfOperationOverride()
   * - .toDescribeInstance()
   * - .toDescribeInstanceAttribute()
   * - .toDescribeInstanceStorageConfig()
   * - .toDescribePredefinedAttribute()
   * - .toDescribePrompt()
   * - .toDescribeQueue()
   * - .toDescribeQuickConnect()
   * - .toDescribeRoutingProfile()
   * - .toDescribeRule()
   * - .toDescribeSecurityProfile()
   * - .toDescribeUser()
   * - .toDescribeUserHierarchyGroup()
   * - .toDescribeUserHierarchyStructure()
   * - .toDescribeView()
   * - .toDescribeVocabulary()
   * - .toDisassociateAnalyticsDataSet()
   * - .toDisassociateApprovedOrigin()
   * - .toDisassociateBot()
   * - .toDisassociateFlow()
   * - .toDisassociateInstanceStorageConfig()
   * - .toDisassociateLambdaFunction()
   * - .toDisassociateLexBot()
   * - .toDisassociatePhoneNumberContactFlow()
   * - .toDisassociateQueueQuickConnects()
   * - .toDisassociateRoutingProfileQueues()
   * - .toDisassociateSecurityKey()
   * - .toDisassociateTrafficDistributionGroupUser()
   * - .toDisassociateUserProficiencies()
   * - .toDismissUserContact()
   * - .toGetAttachedFile()
   * - .toGetContactAttributes()
   * - .toGetCurrentMetricData()
   * - .toGetCurrentUserData()
   * - .toGetEffectiveHoursOfOperations()
   * - .toGetFederationToken()
   * - .toGetFlowAssociation()
   * - .toGetMetricData()
   * - .toGetMetricDataV2()
   * - .toGetPromptFile()
   * - .toGetTaskTemplate()
   * - .toListAnalyticsDataAssociations()
   * - .toListAnalyticsDataLakeDataSets()
   * - .toListApprovedOrigins()
   * - .toListAssociatedContacts()
   * - .toListAuthenticationProfiles()
   * - .toListBots()
   * - .toListContactEvaluations()
   * - .toListContactFlowVersions()
   * - .toListContactFlows()
   * - .toListContactReferences()
   * - .toListDefaultVocabularies()
   * - .toListEvaluationFormVersions()
   * - .toListEvaluationForms()
   * - .toListFlowAssociations()
   * - .toListHoursOfOperationOverrides()
   * - .toListHoursOfOperations()
   * - .toListInstanceAttributes()
   * - .toListInstanceStorageConfigs()
   * - .toListIntegrationAssociations()
   * - .toListLambdaFunctions()
   * - .toListLexBots()
   * - .toListPredefinedAttributes()
   * - .toListPrompts()
   * - .toListQueueQuickConnects()
   * - .toListRoutingProfileQueues()
   * - .toListRoutingProfiles()
   * - .toListRules()
   * - .toListSecurityKeys()
   * - .toListSecurityProfileApplications()
   * - .toListSecurityProfilePermissions()
   * - .toListSecurityProfiles()
   * - .toListUseCases()
   * - .toListUserHierarchyGroups()
   * - .toListUserProficiencies()
   * - .toListUsers()
   * - .toListViewVersions()
   * - .toListViews()
   * - .toMonitorContact()
   * - .toPauseContact()
   * - .toPutUserStatus()
   * - .toReplicateInstance()
   * - .toResumeContact()
   * - .toSearchAgentStatuses()
   * - .toSearchContactFlowModules()
   * - .toSearchContactFlows()
   * - .toSearchContacts()
   * - .toSearchEmailAddresses()
   * - .toSearchHoursOfOperationOverrides()
   * - .toSearchHoursOfOperations()
   * - .toSearchPredefinedAttributes()
   * - .toSearchPrompts()
   * - .toSearchQueues()
   * - .toSearchQuickConnects()
   * - .toSearchResourceTags()
   * - .toSearchRoutingProfiles()
   * - .toSearchSecurityProfiles()
   * - .toSearchUserHierarchyGroups()
   * - .toSearchUsers()
   * - .toSearchVocabularies()
   * - .toSendOutboundEmail()
   * - .toStartAttachedFileUpload()
   * - .toStartChatContact()
   * - .toStartContactEvaluation()
   * - .toStartEmailContact()
   * - .toStartForecastingPlanningSchedulingIntegration()
   * - .toStartOutboundChatContact()
   * - .toStartOutboundEmailContact()
   * - .toStartScreenSharing()
   * - .toStartTaskContact()
   * - .toStartWebRTCContact()
   * - .toStopContact()
   * - .toStopForecastingPlanningSchedulingIntegration()
   * - .toSubmitContactEvaluation()
   * - .toTagContact()
   * - .toTransferContact()
   * - .toUntagContact()
   * - .toUpdateAgentStatus()
   * - .toUpdateAuthenticationProfile()
   * - .toUpdateContact()
   * - .toUpdateContactAttributes()
   * - .toUpdateContactEvaluation()
   * - .toUpdateContactFlowContent()
   * - .toUpdateContactFlowMetadata()
   * - .toUpdateContactFlowModuleContent()
   * - .toUpdateContactFlowModuleMetadata()
   * - .toUpdateContactFlowName()
   * - .toUpdateContactRoutingData()
   * - .toUpdateContactSchedule()
   * - .toUpdateEmailAddressMetadata()
   * - .toUpdateEvaluationForm()
   * - .toUpdateHoursOfOperation()
   * - .toUpdateHoursOfOperationOverride()
   * - .toUpdateInstanceAttribute()
   * - .toUpdateInstanceStorageConfig()
   * - .toUpdateParticipantAuthentication()
   * - .toUpdateParticipantRoleConfig()
   * - .toUpdatePhoneNumber()
   * - .toUpdatePredefinedAttribute()
   * - .toUpdatePrompt()
   * - .toUpdateQueueHoursOfOperation()
   * - .toUpdateQueueMaxContacts()
   * - .toUpdateQueueName()
   * - .toUpdateQueueOutboundCallerConfig()
   * - .toUpdateQueueOutboundEmailConfig()
   * - .toUpdateQueueStatus()
   * - .toUpdateQuickConnectConfig()
   * - .toUpdateQuickConnectName()
   * - .toUpdateRoutingProfileAgentAvailabilityTimer()
   * - .toUpdateRoutingProfileConcurrency()
   * - .toUpdateRoutingProfileDefaultOutboundQueue()
   * - .toUpdateRoutingProfileName()
   * - .toUpdateRoutingProfileQueues()
   * - .toUpdateRule()
   * - .toUpdateSecurityProfile()
   * - .toUpdateTaskTemplate()
   * - .toUpdateUserHierarchy()
   * - .toUpdateUserHierarchyGroupName()
   * - .toUpdateUserHierarchyStructure()
   * - .toUpdateUserIdentityInfo()
   * - .toUpdateUserPhoneConfig()
   * - .toUpdateUserProficiencies()
   * - .toUpdateUserRoutingProfile()
   * - .toUpdateUserSecurityProfiles()
   * - .toUpdateViewContent()
   * - .toUpdateViewMetadata()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceId(value: string | string[], operator?: Operator | string) {
    return this.if(`InstanceId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by restricting the monitor capabilities of the user in the request
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toMonitorContact()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMonitorCapabilities(value: string | string[], operator?: Operator | string) {
    return this.if(`MonitorCapabilities`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by restricting searches using analysis outputs from Amazon Connect Contact Lens
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toSearchContacts()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSearchContactsByContactAnalysis(value: string | string[], operator?: Operator | string) {
    return this.if(`SearchContactsByContactAnalysis`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by TagFilter condition passed in the search request
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toAssociateTrafficDistributionGroupUser()
   * - .toSearchAgentStatuses()
   * - .toSearchContactFlowModules()
   * - .toSearchContactFlows()
   * - .toSearchEmailAddresses()
   * - .toSearchHoursOfOperationOverrides()
   * - .toSearchHoursOfOperations()
   * - .toSearchPrompts()
   * - .toSearchQueues()
   * - .toSearchQuickConnects()
   * - .toSearchRoutingProfiles()
   * - .toSearchSecurityProfiles()
   * - .toSearchUserHierarchyGroups()
   * - .toSearchUsers()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSearchTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`SearchTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by restricting the storage resource type of the Amazon Connect instance storage configuration
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toAssociateInstanceStorageConfig()
   * - .toDescribeInstanceStorageConfig()
   * - .toDisassociateInstanceStorageConfig()
   * - .toUpdateInstanceStorageConfig()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifStorageResourceType(value: string | string[], operator?: Operator | string) {
    return this.if(`StorageResourceType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by restricting creation of a contact for specific subtypes
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toStartOutboundChatContact()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubtype(value: string | string[], operator?: Operator | string) {
    return this.if(`Subtype`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by UserArn
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toDescribeContact()
   * - .toGetContactAttributes()
   * - .toListContactReferences()
   * - .toResumeContactRecording()
   * - .toStartAttachedFileUpload()
   * - .toStartContactRecording()
   * - .toStartScreenSharing()
   * - .toStopContact()
   * - .toStopContactRecording()
   * - .toSuspendContactRecording()
   * - .toTagContact()
   * - .toTransferContact()
   * - .toUntagContact()
   * - .toUpdateContact()
   * - .toUpdateContactAttributes()
   * - .toUpdateContactRoutingData()
   * - .toUpdateContactSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifUserArn(value: string | string[], operator?: Operator | string) {
    return this.if(`UserArn`, value, operator ?? 'ArnLike');
  }
}
