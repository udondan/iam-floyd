import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [appfabric](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappfabric.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appfabric extends PolicyStatement {
  public servicePrefix = 'appfabric';

  /**
   * Statement provider for service [appfabric](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsappfabric.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to start user access tasks for multiple users
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_BatchGetUserAccessTasks.html
   */
  public toBatchGetUserAccessTasks() {
    return this.to('BatchGetUserAccessTasks');
  }

  /**
   * Grants permission to connect app authorizations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_ConnectAppAuthorization.html
   */
  public toConnectAppAuthorization() {
    return this.to('ConnectAppAuthorization');
  }

  /**
   * Grants permission to create app authorizations for app bundles
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_CreateAppAuthorization.html
   */
  public toCreateAppAuthorization() {
    return this.to('CreateAppAuthorization');
  }

  /**
   * Grants permission to create app bundles in your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_CreateAppBundle.html
   */
  public toCreateAppBundle() {
    return this.to('CreateAppBundle');
  }

  /**
   * Grants permission to create ingestions for app bundles
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_CreateIngestion.html
   */
  public toCreateIngestion() {
    return this.to('CreateIngestion');
  }

  /**
   * Grants permission to create ingestion destinations for app bundles
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_CreateIngestionDestination.html
   */
  public toCreateIngestionDestination() {
    return this.to('CreateIngestionDestination');
  }

  /**
   * Grants permission to delete app authorizations within an app bundle
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_DeleteAppAuthorization.html
   */
  public toDeleteAppAuthorization() {
    return this.to('DeleteAppAuthorization');
  }

  /**
   * Grants permission to delete app bundles in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_DeleteAppBundle.html
   */
  public toDeleteAppBundle() {
    return this.to('DeleteAppBundle');
  }

  /**
   * Grants permission to delete ingestions within an app bundle
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_DeleteIngestion.html
   */
  public toDeleteIngestion() {
    return this.to('DeleteIngestion');
  }

  /**
   * Grants permission to delete destinations within an ingestion
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_DeleteIngestionDestination.html
   */
  public toDeleteIngestionDestination() {
    return this.to('DeleteIngestionDestination');
  }

  /**
   * Grants permission to view details about app authorizations
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_GetAppAuthorization.html
   */
  public toGetAppAuthorization() {
    return this.to('GetAppAuthorization');
  }

  /**
   * Grants permission to view details about app bundles
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_GetAppBundle.html
   */
  public toGetAppBundle() {
    return this.to('GetAppBundle');
  }

  /**
   * Grants permission to view details about ingestions
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_GetIngestion.html
   */
  public toGetIngestion() {
    return this.to('GetIngestion');
  }

  /**
   * Grants permission to view details about ingestion destinations
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_GetIngestionDestination.html
   */
  public toGetIngestionDestination() {
    return this.to('GetIngestionDestination');
  }

  /**
   * Grants permission to retrieve a list of app authorizations within an app bundle
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_ListAppAuthorizations.html
   */
  public toListAppAuthorizations() {
    return this.to('ListAppAuthorizations');
  }

  /**
   * Grants permission to retrieve a list of app bundles in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_ListAppBundles.html
   */
  public toListAppBundles() {
    return this.to('ListAppBundles');
  }

  /**
   * Grants permission to retrieve a list of destinations within an ingestion
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_ListIngestionDestinations.html
   */
  public toListIngestionDestinations() {
    return this.to('ListIngestionDestinations');
  }

  /**
   * Grants permission to retrieve a list of ingestions within an app bundle
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_ListIngestions.html
   */
  public toListIngestions() {
    return this.to('ListIngestions');
  }

  /**
   * Grants permission to list tags for AppFabric resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start ingestions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_StartIngestion.html
   */
  public toStartIngestion() {
    return this.to('StartIngestion');
  }

  /**
   * Grants permission to start user access tasks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_StartUserAccessTasks.html
   */
  public toStartUserAccessTasks() {
    return this.to('StartUserAccessTasks');
  }

  /**
   * Grants permission to stop ingestions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_StopIngestion.html
   */
  public toStopIngestion() {
    return this.to('StopIngestion');
  }

  /**
   * Grants permission to tag AppFabric resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag AppFabric resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update app authorizations within app bundles
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_UpdateAppAuthorization.html
   */
  public toUpdateAppAuthorization() {
    return this.to('UpdateAppAuthorization');
  }

  /**
   * Grants permission to update destinations within ingestions
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_UpdateIngestionDestination.html
   */
  public toUpdateIngestionDestination() {
    return this.to('UpdateIngestionDestination');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchGetUserAccessTasks',
      'ConnectAppAuthorization',
      'CreateAppAuthorization',
      'CreateAppBundle',
      'CreateIngestion',
      'CreateIngestionDestination',
      'DeleteAppAuthorization',
      'DeleteAppBundle',
      'DeleteIngestion',
      'DeleteIngestionDestination',
      'StartIngestion',
      'StartUserAccessTasks',
      'StopIngestion',
      'UpdateAppAuthorization',
      'UpdateIngestionDestination'
    ],
    Read: [
      'GetAppAuthorization',
      'GetAppBundle',
      'GetIngestion',
      'GetIngestionDestination',
      'ListTagsForResource'
    ],
    List: [
      'ListAppAuthorizations',
      'ListAppBundles',
      'ListIngestionDestinations',
      'ListIngestions'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type appbundle to the statement
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_AppBundle.html
   *
   * @param appBundleIdentifier - Identifier for the appBundleIdentifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAppbundle(appBundleIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appfabric.defaultPartition }:appfabric:${ region || '*' }:${ account || '*' }:appbundle/${ appBundleIdentifier }`);
  }

  /**
   * Adds a resource of type appauthorization to the statement
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_AppAuthorization.html
   *
   * @param appbundleId - Identifier for the appbundleId.
   * @param appAuthorizationIdentifier - Identifier for the appAuthorizationIdentifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAppauthorization(appbundleId: string, appAuthorizationIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appfabric.defaultPartition }:appfabric:${ region || '*' }:${ account || '*' }:appbundle/${ appbundleId }/appauthorization/${ appAuthorizationIdentifier }`);
  }

  /**
   * Adds a resource of type ingestion to the statement
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_Ingestion.html
   *
   * @param appbundleId - Identifier for the appbundleId.
   * @param ingestionIdentifier - Identifier for the ingestionIdentifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIngestion(appbundleId: string, ingestionIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appfabric.defaultPartition }:appfabric:${ region || '*' }:${ account || '*' }:appbundle/${ appbundleId }/ingestion/${ ingestionIdentifier }`);
  }

  /**
   * Adds a resource of type ingestiondestination to the statement
   *
   * https://docs.aws.amazon.com/appfabric/latest/api/API_IngestionDestination.html
   *
   * @param appbundleId - Identifier for the appbundleId.
   * @param ingestionIdentifier - Identifier for the ingestionIdentifier.
   * @param ingestionDestinationIdentifier - Identifier for the ingestionDestinationIdentifier.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIngestiondestination(appbundleId: string, ingestionIdentifier: string, ingestionDestinationIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Appfabric.defaultPartition }:appfabric:${ region || '*' }:${ account || '*' }:appbundle/${ appbundleId }/ingestion/${ ingestionIdentifier }/ingestiondestination/${ ingestionDestinationIdentifier }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAppAuthorization()
   * - .toCreateAppBundle()
   * - .toCreateIngestion()
   * - .toCreateIngestionDestination()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toGetAppAuthorization()
   * - .toGetAppBundle()
   * - .toGetIngestion()
   * - .toGetIngestionDestination()
   * - .toTagResource()
   * - .toUpdateAppAuthorization()
   * - .toUpdateIngestionDestination()
   *
   * Applies to resource types:
   * - appbundle
   * - appauthorization
   * - ingestion
   * - ingestiondestination
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAppAuthorization()
   * - .toCreateAppBundle()
   * - .toCreateIngestion()
   * - .toCreateIngestionDestination()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
