import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [resource-explorer-2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceexplorer.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ResourceExplorer2 extends PolicyStatement {
  public servicePrefix = 'resource-explorer-2';

  /**
   * Statement provider for service [resource-explorer-2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceexplorer.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to set the specified view as the default for this AWS Region in this AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_AssociateDefaultView.html
   */
  public toAssociateDefaultView() {
    return this.to('AssociateDefaultView');
  }

  /**
   * Grants permission to retrieve details about views that you specify by a list of ARNs
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - resource-explorer-2:GetView
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_BatchGetView.html
   */
  public toBatchGetView() {
    return this.to('BatchGetView');
  }

  /**
   * Grants permission to turn on Resource Explorer in the AWS Region in which you called this operation by creating an index
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_CreateIndex.html
   */
  public toCreateIndex() {
    return this.to('CreateIndex');
  }

  /**
   * Grants permission to create managed view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/userguide/API_ManagedView.html
   */
  public toCreateManagedView() {
    return this.to('CreateManagedView');
  }

  /**
   * Grants permission to create a view that users can query
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_CreateView.html
   */
  public toCreateView() {
    return this.to('CreateView');
  }

  /**
   * Grants permission to turn off Resource Explorer in the specified AWS Region by deleting the index
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_DeleteIndex.html
   */
  public toDeleteIndex() {
    return this.to('DeleteIndex');
  }

  /**
   * Grants permission to delete the specified view's resource policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views-share.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_DeleteView.html
   */
  public toDeleteView() {
    return this.to('DeleteView');
  }

  /**
   * Grants permission to remove the default view for the AWS Region in which you call this operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_DisassociateDefaultView.html
   */
  public toDisassociateDefaultView() {
    return this.to('DisassociateDefaultView');
  }

  /**
   * Grants permission to Resource Explorer to access account level data within your AWS Organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_GetAccountLevelServiceConfiguration.html
   */
  public toGetAccountLevelServiceConfiguration() {
    return this.to('GetAccountLevelServiceConfiguration');
  }

  /**
   * Grants permission to retrieve the Amazon resource name (ARN) of the view that is the default for the AWS Region in which you call this operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_GetDefaultView.html
   */
  public toGetDefaultView() {
    return this.to('GetDefaultView');
  }

  /**
   * Grants permission to retrieve information about the index in the AWS Region in which you call this operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_GetIndex.html
   */
  public toGetIndex() {
    return this.to('GetIndex');
  }

  /**
   * Grants permission to get managed view
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_GetManagedView.html
   */
  public toGetManagedView() {
    return this.to('GetManagedView');
  }

  /**
   * Grants permission to retrieve information about the specified view's resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views-share.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to retrieve information about the specified view
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_GetView.html
   */
  public toGetView() {
    return this.to('GetView');
  }

  /**
   * Grants permission to list the indexes in all AWS Regions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_ListIndexes.html
   */
  public toListIndexes() {
    return this.to('ListIndexes');
  }

  /**
   * Grants permission to list the organization member account's indexes in all AWS Regions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_ListIndexesForMembers.html
   */
  public toListIndexesForMembers() {
    return this.to('ListIndexesForMembers');
  }

  /**
   * Grants permission to list managed views
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_ListManagedViews.html
   */
  public toListManagedViews() {
    return this.to('ListManagedViews');
  }

  /**
   * Grants permission to retrieve a list of all resource types currently supported by Resource Explorer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_ListSupportedResourceTypes.html
   */
  public toListSupportedResourceTypes() {
    return this.to('ListSupportedResourceTypes');
  }

  /**
   * Grants permission to list the tags that are attached to the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the Amazon resource names (ARNs) of all of the views available in the AWS Region in which you call this operation
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_ListViews.html
   */
  public toListViews() {
    return this.to('ListViews');
  }

  /**
   * Grants permission to update the specified view's resource policy
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views-share.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to search for resources and display details about all resources that match the specified criteria
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifOperation()
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_Search.html
   */
  public toSearch() {
    return this.to('Search');
  }

  /**
   * Grants permission to add one or more tag key and value pairs to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tag key and value pairs from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to change the type of the index from LOCAL to AGGREGATOR or back
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_UpdateIndexType.html
   */
  public toUpdateIndexType() {
    return this.to('UpdateIndexType');
  }

  /**
   * Grants permission to modify some of the details of a view
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_UpdateView.html
   */
  public toUpdateView() {
    return this.to('UpdateView');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateDefaultView',
      'CreateIndex',
      'CreateManagedView',
      'CreateView',
      'DeleteIndex',
      'DeleteView',
      'DisassociateDefaultView',
      'UpdateIndexType',
      'UpdateView'
    ],
    Read: [
      'BatchGetView',
      'GetAccountLevelServiceConfiguration',
      'GetDefaultView',
      'GetIndex',
      'GetManagedView',
      'GetResourcePolicy',
      'GetView',
      'ListTagsForResource',
      'Search'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'PutResourcePolicy'
    ],
    List: [
      'ListIndexes',
      'ListIndexesForMembers',
      'ListManagedViews',
      'ListSupportedResourceTypes',
      'ListViews'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type view to the statement
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_View.html
   *
   * @param viewName - Identifier for the viewName.
   * @param viewUuid - Identifier for the viewUuid.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onView(viewName: string, viewUuid: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:resource-explorer-2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:view/${ viewName }/${ viewUuid }`);
  }

  /**
   * Adds a resource of type index to the statement
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_Index.html
   *
   * @param indexUuid - Identifier for the indexUuid.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIndex(indexUuid: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:resource-explorer-2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:index/${ indexUuid }`);
  }

  /**
   * Adds a resource of type managed-view to the statement
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/userguide/API_ManagedView.html
   *
   * @param managedViewName - Identifier for the managedViewName.
   * @param managedViewUuid - Identifier for the managedViewUuid.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onManagedView(managedViewName: string, managedViewUuid: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:resource-explorer-2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:managed-view/${ managedViewName }/${ managedViewUuid }`);
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateIndex()
   * - .toCreateView()
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
   * Filters access by the tag keyss attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - view
   * - index
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
   * - .toCreateIndex()
   * - .toCreateView()
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
   * Filters access by the actual operation that is being invoked, available values: Search, ListResources
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceexplorer.html
   *
   * Applies to actions:
   * - .toSearch()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOperation(value: string | string[], operator?: Operator | string) {
    return this.if(`Operation`, value, operator ?? 'StringLike');
  }
}
