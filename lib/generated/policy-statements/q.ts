import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [q](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonq.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Q extends PolicyStatement {
  public servicePrefix = 'q';

  /**
   * Statement provider for service [q](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonq.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate an AWS resource with an Amazon Q connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toAssociateConnectorResource() {
    return this.to('AssociateConnectorResource');
  }

  /**
   * Grants permission to create a user or group assignment for an Amazon Q Developer Profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifIdentitystoreUserId()
   * - .ifIdentitystoreGroupId()
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toCreateAssignment() {
    return this.to('CreateAssignment');
  }

  /**
   * Grants permission to create OAuth user in Amazon Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toCreateAuthGrant() {
    return this.to('CreateAuthGrant');
  }

  /**
   * Grants permission to register an OAuth application in Amazon Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toCreateOAuthAppConnection() {
    return this.to('CreateOAuthAppConnection');
  }

  /**
   * Grants permission to create and configure a third party plugin in Amazon Q
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toCreatePlugin() {
    return this.to('CreatePlugin');
  }

  /**
   * Grants permission to delete a user or group assignment for an Amazon Q Developer Profile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifIdentitystoreUserId()
   * - .ifIdentitystoreGroupId()
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toDeleteAssignment() {
    return this.to('DeleteAssignment');
  }

  /**
   * Grants permission to delete a configured plugin in Amazon Q
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toDeletePlugin() {
    return this.to('DeletePlugin');
  }

  /**
   * Grants permission to generate code from CLI commands in Amazon Q
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toGenerateCodeFromCommands() {
    return this.to('GenerateCodeFromCommands');
  }

  /**
   * Grants permission to view information about a specific Amazon Q connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toGetConnector() {
    return this.to('GetConnector');
  }

  /**
   * Grants permission to get individual messages associated with a specific conversation with Amazon Q
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toGetConversation() {
    return this.to('GetConversation');
  }

  /**
   * Grants permission to Amazon Q to get the identity metadata
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toGetIdentityMetadata() {
    return this.to('GetIdentityMetadata');
  }

  /**
   * Grants permission to view information about a specific configured Amazon Q plugin
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toGetPlugin() {
    return this.to('GetPlugin');
  }

  /**
   * Grants permission to get troubleshooting results with Amazon Q
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toGetTroubleshootingResults() {
    return this.to('GetTroubleshootingResults');
  }

  /**
   * Grants permission to list individual conversations associated with a specific Amazon Q user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toListConversations() {
    return this.to('ListConversations');
  }

  /**
   * Grants permission to read metrics to populate Amazon Q dashboard
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toListDashboardMetrics() {
    return this.to('ListDashboardMetrics');
  }

  /**
   * Grants permission to list available plugins in Amazon Q
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toListPluginProviders() {
    return this.to('ListPluginProviders');
  }

  /**
   * Grants permission to list configured plugins in Amazon Q
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toListPlugins() {
    return this.to('ListPlugins');
  }

  /**
   * Grants permission to list all tags associated with an Amazon Q resource
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to allow Amazon Q to perform actions on your behalf
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toPassRequest() {
    return this.to('PassRequest');
  }

  /**
   * Grants permission to reject a connection request for an Amazon Q connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toRejectConnector() {
    return this.to('RejectConnector');
  }

  /**
   * Grants permission to trigger asynchronous Amazon Q actions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toSendEvent() {
    return this.to('SendEvent');
  }

  /**
   * Grants permission to send a message to Amazon Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toSendMessage() {
    return this.to('SendMessage');
  }

  /**
   * Grants permission to start a conversation with Amazon Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toStartConversation() {
    return this.to('StartConversation');
  }

  /**
   * Grants permission to start a troubleshooting analysis with Amazon Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toStartTroubleshootingAnalysis() {
    return this.to('StartTroubleshootingAnalysis');
  }

  /**
   * Grants permission to start a troubleshooting resolution explanation with Amazon Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toStartTroubleshootingResolutionExplanation() {
    return this.to('StartTroubleshootingResolutionExplanation');
  }

  /**
   * Grants permission to associate tags with an Amazon Q resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags associated with an Amazon Q resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update OAuth user in Amazon Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toUpdateAuthGrant() {
    return this.to('UpdateAuthGrant');
  }

  /**
   * Grants permission to update an OAuth application in Amazon Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toUpdateOAuthAppConnection() {
    return this.to('UpdateOAuthAppConnection');
  }

  /**
   * Grants permission to update a troubleshooting command result with Amazon Q
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toUpdateTroubleshootingCommandResult() {
    return this.to('UpdateTroubleshootingCommandResult');
  }

  /**
   * Grants permission to use Amazon Q plugins
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security_iam_manage-access-with-policies.html
   */
  public toUsePlugin() {
    return this.to('UsePlugin');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateConnectorResource',
      'CreateAssignment',
      'CreateAuthGrant',
      'CreateOAuthAppConnection',
      'CreatePlugin',
      'DeleteAssignment',
      'DeletePlugin',
      'PassRequest',
      'RejectConnector',
      'SendEvent',
      'SendMessage',
      'StartConversation',
      'StartTroubleshootingAnalysis',
      'StartTroubleshootingResolutionExplanation',
      'UpdateAuthGrant',
      'UpdateOAuthAppConnection',
      'UpdateTroubleshootingCommandResult',
      'UsePlugin'
    ],
    Read: [
      'GenerateCodeFromCommands',
      'GetConnector',
      'GetConversation',
      'GetIdentityMetadata',
      'GetPlugin',
      'GetTroubleshootingResults',
      'ListConversations'
    ],
    List: [
      'ListDashboardMetrics',
      'ListPluginProviders',
      'ListPlugins',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type profile to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/as-whisper-admin.html#about-profiles
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProfile(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:codewhisperer:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:profile/${ identifier }`);
  }

  /**
   * Adds a resource of type plugin to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/plugins.html
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPlugin(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qdeveloper:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:plugin/${ identifier }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security-iam-service-with-iam.html
   *
   * Applies to actions:
   * - .toCreatePlugin()
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
   * Filters access by the tags associated with the Amazon Q resource
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security-iam-service-with-iam.html
   *
   * Applies to actions:
   * - .toDeletePlugin()
   * - .toGetPlugin()
   * - .toListTagsForResource()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - plugin
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
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security-iam-service-with-iam.html
   *
   * Applies to actions:
   * - .toCreatePlugin()
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
   * Filters access by IAM Identity Center Group ID
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security-iam-service-with-iam.html
   *
   * Applies to actions:
   * - .toCreateAssignment()
   * - .toDeleteAssignment()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIdentitystoreGroupId(value: string | string[], operator?: Operator | string) {
    return this.if(`identitystore:GroupId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by IAM Identity Center User ID
   *
   * https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/security-iam-service-with-iam.html
   *
   * Applies to actions:
   * - .toCreateAssignment()
   * - .toDeleteAssignment()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIdentitystoreUserId(value: string | string[], operator?: Operator | string) {
    return this.if(`identitystore:UserId`, value, operator ?? 'StringLike');
  }
}
