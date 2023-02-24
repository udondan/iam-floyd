import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps, Operator } from '../shared';

/**
 * Statement provider for service [oam](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchobservabilityaccessmanager.html).
 *
 * @param options - Options for the statement
 */
export class Oam extends PolicyStatement {
  public servicePrefix = 'oam';

  /**
   * Statement provider for service [oam](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchobservabilityaccessmanager.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to create a link between a monitoring account and a source account for cross-account monitoring
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifResourceTypes()
   *
   * Dependent actions:
   * - oam:TagResource
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_CreateLink.html
   */
  public toCreateLink() {
    return this.to('CreateLink');
  }

  /**
   * Grants permission to create a sink in an account so that it can be used as a monitoring account for cross-account monitoring
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - oam:TagResource
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_CreateSink.html
   */
  public toCreateSink() {
    return this.to('CreateSink');
  }

  /**
   * Grants permission to delete a link between a monitoring account and a source account for cross-account monitoring
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_DeleteLink.html
   */
  public toDeleteLink() {
    return this.to('DeleteLink');
  }

  /**
   * Grants permission to delete a cross-account monitoring sink in a monitoring account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_DeleteSink.html
   */
  public toDeleteSink() {
    return this.to('DeleteSink');
  }

  /**
   * Grants permission to retrieve complete information about one cross-account monitoring link
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_GetLink.html
   */
  public toGetLink() {
    return this.to('GetLink');
  }

  /**
   * Grants permission to retrieve complete information about one cross-account monitoring sink
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_GetSink.html
   */
  public toGetSink() {
    return this.to('GetSink');
  }

  /**
   * Grants permission to retrieve information for the IAM policy for a cross-account monitoring sink
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_GetSinkPolicy.html
   */
  public toGetSinkPolicy() {
    return this.to('GetSinkPolicy');
  }

  /**
   * Grants permission to retrieve a list of links that are linked for a cross-account monitoring sink
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_ListAttachedLinks.html
   */
  public toListAttachedLinks() {
    return this.to('ListAttachedLinks');
  }

  /**
   * Grants permission to retrieve the ARNs of cross-account monitoring links in this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_ListLinks.html
   */
  public toListLinks() {
    return this.to('ListLinks');
  }

  /**
   * Grants permission to retrieve the ARNs of cross-account monitoring sinks in this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_ListSinks.html
   */
  public toListSinks() {
    return this.to('ListSinks');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create or update the IAM policy for a cross-account monitoring sink
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_PutSinkPolicy.html
   */
  public toPutSinkPolicy() {
    return this.to('PutSinkPolicy');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing link between a monitoring account and a source account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTypes()
   *
   * https://docs.aws.amazon.com/oam/latest/APIReference/API_UpdateLink.html
   */
  public toUpdateLink() {
    return this.to('UpdateLink');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateLink',
      'CreateSink',
      'DeleteLink',
      'DeleteSink',
      'PutSinkPolicy',
      'UpdateLink'
    ],
    Read: [
      'GetLink',
      'GetSink',
      'GetSinkPolicy',
      'ListAttachedLinks',
      'ListLinks',
      'ListSinks',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Link to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLink(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:oam:${ region || '*' }:${ account || '*' }:link/${ resourceId }`);
  }

  /**
   * Adds a resource of type Sink to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSink(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:oam:${ region || '*' }:${ account || '*' }:sink/${ resourceId }`);
  }

  /**
   * Filters access by the presence of resource types in the request
   *
   * https://docs.aws.amazon.com/oam/latest/apireference/api_createlink.html#api_createlink_requestsyntax
   *
   * Applies to actions:
   * - .toCreateLink()
   * - .toUpdateLink()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTypes(value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTypes`, value, operator || 'StringLike');
  }
}
