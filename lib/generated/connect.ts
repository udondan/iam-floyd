import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to associate approved origin for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to associate a Lex bot for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to associate a Customer Profiles domain for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to associate instance storage for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to associate a Lambda function for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to associate a Lex bot for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to associate quick connects with a queue in an Amazon Connect instance
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
   * Grants permissions to associate queues with a routing profile in an Amazon Connect instance
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
   * Grants permissions to associate a security key for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to create a contact flow in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateContactFlow.html
   */
  public toCreateContactFlow() {
    return this.to('CreateContactFlow');
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
   * Grants permissions to create a new Amazon Connect instance. The associated required actions grant permissions to configure instance settings.
   *
   * Access Level: Write
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
   * Grants permissions to create an AppIntegration association with an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - app-integrations:CreateEventIntegrationAssociation
   * - connect:DescribeInstance
   * - ds:DescribeDirectories
   * - events:PutRule
   * - events:PutTargets
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html
   */
  public toCreateIntegrationAssociation() {
    return this.to('CreateIntegrationAssociation');
  }

  /**
   * Grants permissions to create a queue in an Amazon Connect instance
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
   * Grants permissions to create a use case for an AppIntegration association
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
   * Grants permissions to create a user hierarchy group in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateUserHierarchyGroup.html
   */
  public toCreateUserHierarchyGroup() {
    return this.to('CreateUserHierarchyGroup');
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
   * Grants permissions to delete an Amazon Connect instance. When you remove an instance, the link to an existing AWS directory is also removed.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
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
   * Grants permissions to delete an AppIntegration association from an Amazon Connect instance. The association must not have any use cases associated with it.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * Dependent actions:
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
   * Grants permissions to delete a quick connect in an Amazon Connect instance
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
   * Grants permissions to delete a use case from an AppIntegration association
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
   * Grants permissions to delete a user in an Amazon Connect instance
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
   * Grants permissions to delete a user hierarchy group in an Amazon Connect instance
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
   * Grants permissions to describe a contact flow in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeContactFlow.html
   */
  public toDescribeContactFlow() {
    return this.to('DescribeContactFlow');
  }

  /**
   * Grants permissions to describe hours of operation in an Amazon Connect instance
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
   * Grants permissions to view details of an Amazon Connect instance. This is required to create an instance.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
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
   * Grants permissions to view the attribute details of an existing Amazon Connect instance
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
   * Grants permissions to view the instance storage configuration for an existing Amazon Connect instance
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
   * Grants permissions to describe a queue in an Amazon Connect instance
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
   * Grants permissions to describe a quick connect in an Amazon Connect instance
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
   * Grants permissions to describe a routing profile in an Amazon Connect instance
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
   * Grants permissions to describe a user in an Amazon Connect instance
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
   * Grants permissions to describe a hierarchy group for an Amazon Connect instance
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
   * Grants permissions to describe the hierarchy structure for an Amazon Connect instance
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
   * Grants permissions to disassociate approved origin for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to disassociate a Lex bot for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to disassociate a Customer Profiles domain for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to disassociate instance storage for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to disassociate a Lambda function for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to disassociate a Lex bot for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to disassociate quick connects from a queue in an Amazon Connect instance
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
   * Grants permissions to disassociate queues from a routing profile in an Amazon Connect instance
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
   * Grants permissions to disassociate the security key for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to retrieve the contact attributes for the specified contact
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetContactAttributes.html
   */
  public toGetContactAttributes() {
    return this.to('GetContactAttributes');
  }

  /**
   * Grants permissions to retrieve current metric data for the queues in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetCurrentMetricData.html
   */
  public toGetCurrentMetricData() {
    return this.to('GetCurrentMetricData');
  }

  /**
   * Grants permissions to federate into an Amazon Connect instance when using SAML-based authentication for identity management
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
   * Grants permissions to federate into an Amazon Connect instance (Log in for emergency access functionality in the Amazon Connect console)
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - connect:DescribeInstance
   * - connect:ListInstances
   * - ds:DescribeDirectories
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/emergency-admin-login.html
   */
  public toGetFederationTokens() {
    return this.to('GetFederationTokens');
  }

  /**
   * Grants permissions to retrieve historical metric data for queues in an Amazon Connect instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricData.html
   */
  public toGetMetricData() {
    return this.to('GetMetricData');
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
   * Grants permissions to view approved origins of an existing Amazon Connect instance
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
   * Grants permissions to view the Lex bots of an existing Amazon Connect instance
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
   * Grants permissions to list contact flow resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListContactFlows.html
   */
  public toListContactFlows() {
    return this.to('ListContactFlows');
  }

  /**
   * Grants permissions to list hours of operation resources in an Amazon Connect instance
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
   * Grants permissions to view the attributes of an existing Amazon Connect instance
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
   * Grants permissions to view storage configurations of an existing Amazon Connect instance
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
   * Grants permissions to view the Amazon Connect instances associated with an AWS account
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
   * Grants permissions to list summary information about the AppIntegration associations for the specified Amazon Connect instance
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
   * Grants permissions to view the Lambda functions of an existing Amazon Connect instance
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
   * Grants permissions to view the Lex bots of an existing Amazon Connect instance
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
   * Grants permissions to list phone number resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbers.html
   */
  public toListPhoneNumbers() {
    return this.to('ListPhoneNumbers');
  }

  /**
   * Grants permissions to list prompt resources in an Amazon Connect instance
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
   * Grants permissions to list quick connect resources in a queue in an Amazon Connect instance
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
   * Grants permissions to list queue resources in an Amazon Connect instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ListQueues.html
   */
  public toListQueues() {
    return this.to('ListQueues');
  }

  /**
   * Grants permissions to list quick connect resources in an Amazon Connect instance
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
   * Grants permissions to list queue resources in a routing profile in an Amazon Connect instance
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
   * Grants permissions to list routing profile resources in an Amazon Connect instance
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
   * Grants permissions to view the security keys of an existing Amazon Connect instance
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
   * Grants permissions to list security profile resources in an Amazon Connect instance
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
   * Grants permissions to list tags for an Amazon Connect resource
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
   * Grants permissions to list the use cases of an AppIntegration association
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
   * Grants permissions to list the hierarchy group resources in an Amazon Connect instance
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
   * Grants permissions to list user resources in an Amazon Connect instance
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
   * Grants permissions to resume recording for the specified contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_ResumeContactRecording.html
   */
  public toResumeContactRecording() {
    return this.to('ResumeContactRecording');
  }

  /**
   * Grants permissions to initiate a chat using the Amazon Connect API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartChatContact.html
   */
  public toStartChatContact() {
    return this.to('StartChatContact');
  }

  /**
   * Grants permissions to start recording for the specified contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactRecording.html
   */
  public toStartContactRecording() {
    return this.to('StartContactRecording');
  }

  /**
   * Grants permissions to initiate outbound calls using the Amazon Connect API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartOutboundVoiceContact.html
   */
  public toStartOutboundVoiceContact() {
    return this.to('StartOutboundVoiceContact');
  }

  /**
   * Grants permissions to initiate a task using the Amazon Connect API
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StartTaskContact.html
   */
  public toStartTaskContact() {
    return this.to('StartTaskContact');
  }

  /**
   * Grants permissions to stop contacts that were initiated using the Amazon Connect API. If you use this operation on an active contact the contact ends, even if the agent is active on a call with a customer.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContact.html
   */
  public toStopContact() {
    return this.to('StopContact');
  }

  /**
   * Grants permissions to stop recording for the specified contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_StopContactRecording.html
   */
  public toStopContactRecording() {
    return this.to('StopContactRecording');
  }

  /**
   * Grants permissions to suspend recording for the specified contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_SuspendContactRecording.html
   */
  public toSuspendContactRecording() {
    return this.to('SuspendContactRecording');
  }

  /**
   * Grants permissions to tag an Amazon Connect resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permissions to untag an Amazon Connect resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
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
   * Grants permissions to create or update the contact attributes associated with the specified contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactAttributes.html
   */
  public toUpdateContactAttributes() {
    return this.to('UpdateContactAttributes');
  }

  /**
   * Grants permissions to update contact flow content in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowContent.html
   */
  public toUpdateContactFlowContent() {
    return this.to('UpdateContactFlowContent');
  }

  /**
   * Grants permissions to update the name and description of a contact flow in an Amazon Connect instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInstanceId()
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateContactFlowName.html
   */
  public toUpdateContactFlowName() {
    return this.to('UpdateContactFlowName');
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
   * Grants permissions to update the attribute for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to update the storage configuration for an existing Amazon Connect instance. The associated required actions grant permission to modify the settings for the instance.
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
   * Grants permissions to update queue hours of operation in an Amazon Connect instance
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
   * Grants permissions to update queue capacity in an Amazon Connect instance
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
   * Grants permissions to update a queue name and description in an Amazon Connect instance
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
   * Grants permissions to update queue outbound caller config in an Amazon Connect instance
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
   * Grants permissions to update queue status in an Amazon Connect instance
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
   * Grants permissions to update the configuration of a quick connect in an Amazon Connect instance
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
   * Grants permissions to update a quick connect name and description in an Amazon Connect instance
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
   * Grants permissions to update the concurrency in a routing profile in an Amazon Connect instance
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
   * Grants permissions to update the outbound queue in a routing profile in an Amazon Connect instance
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
   * Grants permissions to update a routing profile name and description in an Amazon Connect instance
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
   * Grants permissions to update the queues in routing profile in an Amazon Connect instance
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
   * Grants permissions to update a hierarchy group for a user in an Amazon Connect instance
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
   * Grants permissions to update a user hierarchy group name in an Amazon Connect instance
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
   * Grants permissions to update user hierarchy structure in an Amazon Connect instance
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
   * Grants permissions to update identity information for a user in an Amazon Connect instance
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
   * Grants permissions to update phone configuration settings for a user in an Amazon Connect instance
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
   * Grants permissions to update a routing profile for a user in an Amazon Connect instance
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
   * Grants permissions to update security profiles for a user in an Amazon Connect instance
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

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateApprovedOrigin",
      "AssociateBot",
      "AssociateCustomerProfilesDomain",
      "AssociateInstanceStorageConfig",
      "AssociateLambdaFunction",
      "AssociateLexBot",
      "AssociateQueueQuickConnects",
      "AssociateRoutingProfileQueues",
      "AssociateSecurityKey",
      "CreateAgentStatus",
      "CreateContactFlow",
      "CreateHoursOfOperation",
      "CreateInstance",
      "CreateIntegrationAssociation",
      "CreateQueue",
      "CreateQuickConnect",
      "CreateRoutingProfile",
      "CreateUseCase",
      "CreateUser",
      "CreateUserHierarchyGroup",
      "DeleteHoursOfOperation",
      "DeleteInstance",
      "DeleteIntegrationAssociation",
      "DeleteQuickConnect",
      "DeleteUseCase",
      "DeleteUser",
      "DeleteUserHierarchyGroup",
      "DisassociateApprovedOrigin",
      "DisassociateBot",
      "DisassociateCustomerProfilesDomain",
      "DisassociateInstanceStorageConfig",
      "DisassociateLambdaFunction",
      "DisassociateLexBot",
      "DisassociateQueueQuickConnects",
      "DisassociateRoutingProfileQueues",
      "DisassociateSecurityKey",
      "GetFederationTokens",
      "ResumeContactRecording",
      "StartChatContact",
      "StartContactRecording",
      "StartOutboundVoiceContact",
      "StartTaskContact",
      "StopContact",
      "StopContactRecording",
      "SuspendContactRecording",
      "UpdateAgentStatus",
      "UpdateContactAttributes",
      "UpdateContactFlowContent",
      "UpdateContactFlowName",
      "UpdateHoursOfOperation",
      "UpdateInstanceAttribute",
      "UpdateInstanceStorageConfig",
      "UpdateQueueHoursOfOperation",
      "UpdateQueueMaxContacts",
      "UpdateQueueName",
      "UpdateQueueOutboundCallerConfig",
      "UpdateQueueStatus",
      "UpdateQuickConnectConfig",
      "UpdateQuickConnectName",
      "UpdateRoutingProfileConcurrency",
      "UpdateRoutingProfileDefaultOutboundQueue",
      "UpdateRoutingProfileName",
      "UpdateRoutingProfileQueues",
      "UpdateUserHierarchy",
      "UpdateUserHierarchyGroupName",
      "UpdateUserHierarchyStructure",
      "UpdateUserIdentityInfo",
      "UpdateUserPhoneConfig",
      "UpdateUserRoutingProfile",
      "UpdateUserSecurityProfiles"
    ],
    "Read": [
      "DescribeAgentStatus",
      "DescribeContactFlow",
      "DescribeHoursOfOperation",
      "DescribeInstance",
      "DescribeInstanceAttribute",
      "DescribeInstanceStorageConfig",
      "DescribeQueue",
      "DescribeQuickConnect",
      "DescribeRoutingProfile",
      "DescribeUser",
      "DescribeUserHierarchyGroup",
      "DescribeUserHierarchyStructure",
      "GetContactAttributes",
      "GetCurrentMetricData",
      "GetFederationToken",
      "GetMetricData",
      "ListRealtimeContactAnalysisSegments",
      "ListTagsForResource"
    ],
    "List": [
      "ListAgentStatuses",
      "ListApprovedOrigins",
      "ListBots",
      "ListContactFlows",
      "ListHoursOfOperations",
      "ListInstanceAttributes",
      "ListInstanceStorageConfigs",
      "ListInstances",
      "ListIntegrationAssociations",
      "ListLambdaFunctions",
      "ListLexBots",
      "ListPhoneNumbers",
      "ListPrompts",
      "ListQueueQuickConnects",
      "ListQueues",
      "ListQuickConnects",
      "ListRoutingProfileQueues",
      "ListRoutingProfiles",
      "ListSecurityKeys",
      "ListSecurityProfiles",
      "ListUseCases",
      "ListUserHierarchyGroups",
      "ListUsers"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }`);
  }

  /**
   * Adds a resource of type contact to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-attributes.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param contactId - Identifier for the contactId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onContact(instanceId: string, contactId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }/contact/${ contactId }`);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-agents.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param userId - Identifier for the userId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUser(instanceId: string, userId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }/agent/${ userId }`);
  }

  /**
   * Adds a resource of type routing-profile to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/routing-profiles.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param routingProfileId - Identifier for the routingProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRoutingProfile(instanceId: string, routingProfileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }/routing-profile/${ routingProfileId }`);
  }

  /**
   * Adds a resource of type security-profile to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param securityProfileId - Identifier for the securityProfileId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSecurityProfile(instanceId: string, securityProfileId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }/security-profile/${ securityProfileId }`);
  }

  /**
   * Adds a resource of type hierarchy-group to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param hierarchyGroupId - Identifier for the hierarchyGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHierarchyGroup(instanceId: string, hierarchyGroupId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }/agent-group/${ hierarchyGroupId }`);
  }

  /**
   * Adds a resource of type queue to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/API_Queue.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param queueId - Identifier for the queueId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQueue(instanceId: string, queueId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }/queue/${ queueId }`);
  }

  /**
   * Adds a resource of type quick-connect to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/quick-connects.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param quickConnectId - Identifier for the quickConnectId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQuickConnect(instanceId: string, quickConnectId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }/transfer-destination/${ quickConnectId }`);
  }

  /**
   * Adds a resource of type contact-flow to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/connect-contact-flows.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param contactFlowId - Identifier for the contactFlowId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContactFlow(instanceId: string, contactFlowId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }/contact-flow/${ contactFlowId }`);
  }

  /**
   * Adds a resource of type hours-of-operation to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/API_HoursOfOperation.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param hoursOfOperationId - Identifier for the hoursOfOperationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHoursOfOperation(instanceId: string, hoursOfOperationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }/operating-hours/${ hoursOfOperationId }`);
  }

  /**
   * Adds a resource of type agent-status to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/agent-status.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param agentStatusId - Identifier for the agentStatusId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAgentStatus(instanceId: string, agentStatusId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }/agent-status/${ agentStatusId }`);
  }

  /**
   * Adds a resource of type phone-number to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/contact-center-phone-number.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param phoneNumberId - Identifier for the phoneNumberId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPhoneNumber(instanceId: string, phoneNumberId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }/phone-numbers/${ phoneNumberId }`);
  }

  /**
   * Adds a resource of type integration-association to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/API_IntegrationAssociationSummary.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param integrationAssociationId - Identifier for the integrationAssociationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegrationAssociation(instanceId: string, integrationAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }/integration-association/${ integrationAssociationId }`);
  }

  /**
   * Adds a resource of type use-case to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/API_UseCase.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param useCaseId - Identifier for the useCaseId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUseCase(instanceId: string, useCaseId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:connect:${ region || '*' }:${ account || '*' }:instance/${ instanceId }/use-case/${ useCaseId }`);
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
    return this.if(`AttributeType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by restricting federation into specified Amazon Connect instances
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toAssociateApprovedOrigin()
   * - .toAssociateBot()
   * - .toAssociateInstanceStorageConfig()
   * - .toAssociateLambdaFunction()
   * - .toAssociateLexBot()
   * - .toAssociateQueueQuickConnects()
   * - .toAssociateRoutingProfileQueues()
   * - .toAssociateSecurityKey()
   * - .toCreateAgentStatus()
   * - .toCreateContactFlow()
   * - .toCreateHoursOfOperation()
   * - .toCreateIntegrationAssociation()
   * - .toCreateQueue()
   * - .toCreateQuickConnect()
   * - .toCreateRoutingProfile()
   * - .toCreateUseCase()
   * - .toCreateUser()
   * - .toCreateUserHierarchyGroup()
   * - .toDeleteHoursOfOperation()
   * - .toDeleteInstance()
   * - .toDeleteIntegrationAssociation()
   * - .toDeleteQuickConnect()
   * - .toDeleteUseCase()
   * - .toDeleteUser()
   * - .toDeleteUserHierarchyGroup()
   * - .toDescribeAgentStatus()
   * - .toDescribeContactFlow()
   * - .toDescribeHoursOfOperation()
   * - .toDescribeInstance()
   * - .toDescribeInstanceAttribute()
   * - .toDescribeInstanceStorageConfig()
   * - .toDescribeQueue()
   * - .toDescribeQuickConnect()
   * - .toDescribeRoutingProfile()
   * - .toDescribeUser()
   * - .toDescribeUserHierarchyGroup()
   * - .toDescribeUserHierarchyStructure()
   * - .toDisassociateApprovedOrigin()
   * - .toDisassociateBot()
   * - .toDisassociateInstanceStorageConfig()
   * - .toDisassociateLambdaFunction()
   * - .toDisassociateLexBot()
   * - .toDisassociateQueueQuickConnects()
   * - .toDisassociateRoutingProfileQueues()
   * - .toDisassociateSecurityKey()
   * - .toGetContactAttributes()
   * - .toGetCurrentMetricData()
   * - .toGetFederationToken()
   * - .toGetMetricData()
   * - .toListApprovedOrigins()
   * - .toListBots()
   * - .toListHoursOfOperations()
   * - .toListInstanceAttributes()
   * - .toListInstanceStorageConfigs()
   * - .toListIntegrationAssociations()
   * - .toListLambdaFunctions()
   * - .toListLexBots()
   * - .toListPrompts()
   * - .toListQueueQuickConnects()
   * - .toListRoutingProfileQueues()
   * - .toListRoutingProfiles()
   * - .toListSecurityKeys()
   * - .toListSecurityProfiles()
   * - .toListUseCases()
   * - .toListUserHierarchyGroups()
   * - .toListUsers()
   * - .toStartTaskContact()
   * - .toStopContact()
   * - .toUpdateAgentStatus()
   * - .toUpdateContactAttributes()
   * - .toUpdateContactFlowContent()
   * - .toUpdateContactFlowName()
   * - .toUpdateHoursOfOperation()
   * - .toUpdateInstanceAttribute()
   * - .toUpdateInstanceStorageConfig()
   * - .toUpdateQueueHoursOfOperation()
   * - .toUpdateQueueMaxContacts()
   * - .toUpdateQueueName()
   * - .toUpdateQueueOutboundCallerConfig()
   * - .toUpdateQueueStatus()
   * - .toUpdateQuickConnectConfig()
   * - .toUpdateQuickConnectName()
   * - .toUpdateRoutingProfileConcurrency()
   * - .toUpdateRoutingProfileDefaultOutboundQueue()
   * - .toUpdateRoutingProfileName()
   * - .toUpdateRoutingProfileQueues()
   * - .toUpdateUserHierarchy()
   * - .toUpdateUserHierarchyGroupName()
   * - .toUpdateUserHierarchyStructure()
   * - .toUpdateUserIdentityInfo()
   * - .toUpdateUserPhoneConfig()
   * - .toUpdateUserRoutingProfile()
   * - .toUpdateUserSecurityProfiles()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceId(value: string | string[], operator?: Operator | string) {
    return this.if(`InstanceId`, value, operator || 'StringLike');
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
    return this.if(`StorageResourceType`, value, operator || 'StringLike');
  }
}
