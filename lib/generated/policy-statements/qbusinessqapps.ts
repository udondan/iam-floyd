import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [qapps](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqbusinessqapps.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Qapps extends PolicyStatement {
  public servicePrefix = 'qapps';

  /**
   * Statement provider for service [qapps](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonqbusinessqapps.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a library item review in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_AssociateLibraryItemReview.html
   */
  public toAssociateLibraryItemReview() {
    return this.to('AssociateLibraryItemReview');
  }

  /**
   * Grants permission to associate Q App with a user in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_AssociateQAppWithUser.html
   */
  public toAssociateQAppWithUser() {
    return this.to('AssociateQAppWithUser');
  }

  /**
   * Grants permission to create the categories of a library in the Q Business application environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_BatchCreateCategory.html
   */
  public toBatchCreateCategory() {
    return this.to('BatchCreateCategory');
  }

  /**
   * Grants permission to delete the categories of a library in the Q Business application environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_BatchDeleteCategory.html
   */
  public toBatchDeleteCategory() {
    return this.to('BatchDeleteCategory');
  }

  /**
   * Grants permission to update the categories of a library in the Q Business application environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_BatchUpdateCategory.html
   */
  public toBatchUpdateCategory() {
    return this.to('BatchUpdateCategory');
  }

  /**
   * Grants permission to copy Q App in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/purpose-built-qapps.html
   */
  public toCopyQApp() {
    return this.to('CopyQApp');
  }

  /**
   * Grants permission to create a library item in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_CreateLibraryItem.html
   */
  public toCreateLibraryItem() {
    return this.to('CreateLibraryItem');
  }

  /**
   * Grants permission to create a library item review in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/purpose-built-qapps.html
   */
  public toCreateLibraryItemReview() {
    return this.to('CreateLibraryItemReview');
  }

  /**
   * Grants permission to create Q App in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_CreateQApp.html
   */
  public toCreateQApp() {
    return this.to('CreateQApp');
  }

  /**
   * Grants permission to subscribe to a Q App event bus topic in the Q Business application environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/purpose-built-qapps.html
   */
  public toCreateSubscriptionToken() {
    return this.to('CreateSubscriptionToken');
  }

  /**
   * Grants permission to delete a library item in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_DeleteLibraryItem.html
   */
  public toDeleteLibraryItem() {
    return this.to('DeleteLibraryItem');
  }

  /**
   * Grants permission to delete Q App in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_DeleteQApp.html
   */
  public toDeleteQApp() {
    return this.to('DeleteQApp');
  }

  /**
   * Grants permission to get Q App sharing permissions in the Q Business application environment
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_DescribeQAppPermissions.html
   */
  public toDescribeQAppPermissions() {
    return this.to('DescribeQAppPermissions');
  }

  /**
   * Grants permission to disassociate a library item review in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_DisassociateLibraryItemReview.html
   */
  public toDisassociateLibraryItemReview() {
    return this.to('DisassociateLibraryItemReview');
  }

  /**
   * Grants permission to disassociate Q App with a user in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_DisassociateQAppFromUser.html
   */
  public toDisassociateQAppFromUser() {
    return this.to('DisassociateQAppFromUser');
  }

  /**
   * Grants permission to export Q App session data in the Q Business application environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/purpose-built-qapps.html
   */
  public toExportQAppSessionData() {
    return this.to('ExportQAppSessionData');
  }

  /**
   * Grants permission to get a library item in the Q Business application environment
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_GetLibraryItem.html
   */
  public toGetLibraryItem() {
    return this.to('GetLibraryItem');
  }

  /**
   * Grants permission to get Q App in the Q Business application environment
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_GetQApp.html
   */
  public toGetQApp() {
    return this.to('GetQApp');
  }

  /**
   * Grants permission to get Q App session in the Q Business application environment
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   * - .ifUserIsSessionModerator()
   * - .ifSessionIsShared()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_GetQAppSession.html
   */
  public toGetQAppSession() {
    return this.to('GetQAppSession');
  }

  /**
   * Grants permission to get Q App session metadata in the Q Business application environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/purpose-built-qapps.html
   */
  public toGetQAppSessionMetadata() {
    return this.to('GetQAppSessionMetadata');
  }

  /**
   * Grants permission to import a document to Q App or Q App Session in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   * - .ifUserIsSessionModerator()
   * - .ifSessionIsShared()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_ImportDocument.html
   */
  public toImportDocument() {
    return this.to('ImportDocument');
  }

  /**
   * Grants permission to list categories in the Q Business application environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_ListCategories.html
   */
  public toListCategories() {
    return this.to('ListCategories');
  }

  /**
   * Grants permission to list library items in the Q Business application environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_ListLibraryItems.html
   */
  public toListLibraryItems() {
    return this.to('ListLibraryItems');
  }

  /**
   * Grants permission to get Q App session data in the Q Business application environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/purpose-built-qapps.html
   */
  public toListQAppSessionData() {
    return this.to('ListQAppSessionData');
  }

  /**
   * Grants permission to list Q Apps in the Q Business application environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_ListQApps.html
   */
  public toListQApps() {
    return this.to('ListQApps');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to predict problem statement from conversation log in the Q Business application environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/purpose-built-qapps.html
   */
  public toPredictProblemStatementFromConversation() {
    return this.to('PredictProblemStatementFromConversation');
  }

  /**
   * Grants permission to predict Q App from conversation log or problem statement in the Q Business application environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_PredictQApp.html
   */
  public toPredictQApp() {
    return this.to('PredictQApp');
  }

  /**
   * Grants permission to predict Q App metadata from problem statement in the Q Business application environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/purpose-built-qapps.html
   */
  public toPredictQAppFromProblemStatement() {
    return this.to('PredictQAppFromProblemStatement');
  }

  /**
   * Grants permission to start Q App session in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_StartQAppSession.html
   */
  public toStartQAppSession() {
    return this.to('StartQAppSession');
  }

  /**
   * Grants permission to stop Q App session in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   * - .ifUserIsSessionModerator()
   * - .ifSessionIsShared()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_StopQAppSession.html
   */
  public toStopQAppSession() {
    return this.to('StopQAppSession');
  }

  /**
   * Grants permission to tag a resource with given key value pairs
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the tag with the given key from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a library item in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_UpdateLibraryItem.html
   */
  public toUpdateLibraryItem() {
    return this.to('UpdateLibraryItem');
  }

  /**
   * Grants permission to update the metadata of a library item in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_UpdateLibraryItemMetadata.html
   */
  public toUpdateLibraryItemMetadata() {
    return this.to('UpdateLibraryItemMetadata');
  }

  /**
   * Grants permission to update Q App in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_UpdateQApp.html
   */
  public toUpdateQApp() {
    return this.to('UpdateQApp');
  }

  /**
   * Grants permission to update Q App sharing permissions in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_UpdateQAppPermissions.html
   */
  public toUpdateQAppPermissions() {
    return this.to('UpdateQAppPermissions');
  }

  /**
   * Grants permission to update Q App session in the Q Business application environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserIsAppOwner()
   * - .ifAppIsPublished()
   * - .ifUserIsSessionModerator()
   * - .ifSessionIsShared()
   *
   * https://docs.aws.amazon.com/amazonq/latest/api-reference/API_qapps_UpdateQAppSession.html
   */
  public toUpdateQAppSession() {
    return this.to('UpdateQAppSession');
  }

  /**
   * Grants permission to update Q App session metadata in the Q Business application environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/purpose-built-qapps.html
   */
  public toUpdateQAppSessionMetadata() {
    return this.to('UpdateQAppSessionMetadata');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateLibraryItemReview',
      'AssociateQAppWithUser',
      'BatchCreateCategory',
      'BatchDeleteCategory',
      'BatchUpdateCategory',
      'CopyQApp',
      'CreateLibraryItem',
      'CreateLibraryItemReview',
      'CreateQApp',
      'CreateSubscriptionToken',
      'DeleteLibraryItem',
      'DeleteQApp',
      'DisassociateLibraryItemReview',
      'DisassociateQAppFromUser',
      'ExportQAppSessionData',
      'ImportDocument',
      'PredictProblemStatementFromConversation',
      'PredictQApp',
      'PredictQAppFromProblemStatement',
      'StartQAppSession',
      'StopQAppSession',
      'UpdateLibraryItem',
      'UpdateLibraryItemMetadata',
      'UpdateQApp',
      'UpdateQAppPermissions',
      'UpdateQAppSession',
      'UpdateQAppSessionMetadata'
    ],
    Read: [
      'DescribeQAppPermissions',
      'GetLibraryItem',
      'GetQApp',
      'GetQAppSession',
      'GetQAppSessionMetadata',
      'ListQAppSessionData',
      'ListTagsForResource'
    ],
    List: [
      'ListCategories',
      'ListLibraryItems',
      'ListQApps'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/create-app.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApplication(applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qbusiness:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }`);
  }

  /**
   * Adds a resource of type qapp to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/purpose-built-qapps.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQapp(applicationId: string, appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qapps:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }/qapp/${ appId }`);
  }

  /**
   * Adds a resource of type qapp-session to the statement
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/purpose-built-qapps.html
   *
   * @param applicationId - Identifier for the applicationId.
   * @param appId - Identifier for the appId.
   * @param sessionId - Identifier for the sessionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onQappSession(applicationId: string, appId: string, sessionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:qapps:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationId }/qapp/${ appId }/session/${ sessionId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateQApp()
   * - .toStartQAppSession()
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
   * - qapp
   * - qapp-session
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
   * - .toCreateQApp()
   * - .toStartQAppSession()
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
   * Filters access by whether Q App is published
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/security-iam.html
   *
   * Applies to actions:
   * - .toAssociateLibraryItemReview()
   * - .toAssociateQAppWithUser()
   * - .toCopyQApp()
   * - .toCreateLibraryItem()
   * - .toCreateLibraryItemReview()
   * - .toDeleteLibraryItem()
   * - .toDeleteQApp()
   * - .toDescribeQAppPermissions()
   * - .toDisassociateLibraryItemReview()
   * - .toDisassociateQAppFromUser()
   * - .toGetLibraryItem()
   * - .toGetQApp()
   * - .toGetQAppSession()
   * - .toImportDocument()
   * - .toStartQAppSession()
   * - .toStopQAppSession()
   * - .toUpdateLibraryItem()
   * - .toUpdateLibraryItemMetadata()
   * - .toUpdateQApp()
   * - .toUpdateQAppPermissions()
   * - .toUpdateQAppSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAppIsPublished(value: string | string[], operator?: Operator | string) {
    return this.if(`AppIsPublished`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by whether Q App Session is shared
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/security-iam.html
   *
   * Applies to actions:
   * - .toGetQAppSession()
   * - .toImportDocument()
   * - .toStopQAppSession()
   * - .toUpdateQAppSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSessionIsShared(value: string | string[], operator?: Operator | string) {
    return this.if(`SessionIsShared`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by whether requester is Q App owner
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/security-iam.html
   *
   * Applies to actions:
   * - .toAssociateLibraryItemReview()
   * - .toAssociateQAppWithUser()
   * - .toCopyQApp()
   * - .toCreateLibraryItem()
   * - .toCreateLibraryItemReview()
   * - .toDeleteLibraryItem()
   * - .toDeleteQApp()
   * - .toDescribeQAppPermissions()
   * - .toDisassociateLibraryItemReview()
   * - .toDisassociateQAppFromUser()
   * - .toGetLibraryItem()
   * - .toGetQApp()
   * - .toGetQAppSession()
   * - .toImportDocument()
   * - .toStartQAppSession()
   * - .toStopQAppSession()
   * - .toUpdateLibraryItem()
   * - .toUpdateQApp()
   * - .toUpdateQAppPermissions()
   * - .toUpdateQAppSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserIsAppOwner(value: string | string[], operator?: Operator | string) {
    return this.if(`UserIsAppOwner`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by whether requester is Q App Session moderator
   *
   * https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/security-iam.html
   *
   * Applies to actions:
   * - .toGetQAppSession()
   * - .toImportDocument()
   * - .toStopQAppSession()
   * - .toUpdateQAppSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserIsSessionModerator(value: string | string[], operator?: Operator | string) {
    return this.if(`UserIsSessionModerator`, value, operator ?? 'StringLike');
  }
}
