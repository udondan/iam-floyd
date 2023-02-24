import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [resource-explorer-2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceexplorer.html).
 *
 * @param options - Options for the statement
 */
export class ResourceExplorer2 extends PolicyStatement {
  public servicePrefix = 'resource-explorer-2';

  /**
   * Statement provider for service [resource-explorer-2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresourceexplorer.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
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
   * Grants permission to search for resources and display details about all resources that match the specified criteria
   *
   * Access Level: Read
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
   * - .ifAwsRequestTag()
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
      'CreateView',
      'DeleteIndex',
      'DeleteView',
      'DisassociateDefaultView',
      'UpdateIndexType',
      'UpdateView'
    ],
    Read: [
      'BatchGetView',
      'GetDefaultView',
      'GetIndex',
      'GetView',
      'ListTagsForResource',
      'Search'
    ],
    List: [
      'ListIndexes',
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
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onView(viewName: string, viewUuid: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:resource-explorer-2:${ region || '*' }:${ account || '*' }:view/${ viewName }/${ viewUuid }`);
  }

  /**
   * Adds a resource of type index to the statement
   *
   * https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_Index.html
   *
   * @param indexUuid - Identifier for the indexUuid.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIndex(indexUuid: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:resource-explorer-2:${ region || '*' }:${ account || '*' }:index/${ indexUuid }`);
  }
}
