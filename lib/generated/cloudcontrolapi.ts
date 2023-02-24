import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [aws-cloud-control-api](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudcontrolapi.html).
 *
 * @param options - Options for the statement
 */
export class AwsCloudControlApi extends PolicyStatement {
  public servicePrefix = 'cloudformation';

  /**
   * Statement provider for service [aws-cloud-control-api](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudcontrolapi.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to cancel resource requests in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_CancelResourceRequest.html
   */
  public toCancelResourceRequest() {
    return this.to('CancelResourceRequest');
  }

  /**
   * Grants permission to create resources in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_CreateResource.html
   */
  public toCreateResource() {
    return this.to('CreateResource');
  }

  /**
   * Grants permission to delete resources in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_DeleteResource.html
   */
  public toDeleteResource() {
    return this.to('DeleteResource');
  }

  /**
   * Grants permission to get resources in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResource.html
   */
  public toGetResource() {
    return this.to('GetResource');
  }

  /**
   * Grants permission to get resource requests in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_GetResourceRequestStatus.html
   */
  public toGetResourceRequestStatus() {
    return this.to('GetResourceRequestStatus');
  }

  /**
   * Grants permission to list resource requests in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_ListResourceRequests.html
   */
  public toListResourceRequests() {
    return this.to('ListResourceRequests');
  }

  /**
   * Grants permission to list resources in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_ListResources.html
   */
  public toListResources() {
    return this.to('ListResources');
  }

  /**
   * Grants permission to update resources in your account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_UpdateResource.html
   */
  public toUpdateResource() {
    return this.to('UpdateResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelResourceRequest',
      'CreateResource',
      'DeleteResource',
      'UpdateResource'
    ],
    Read: [
      'GetResource',
      'GetResourceRequestStatus',
      'ListResourceRequests',
      'ListResources'
    ]
  };
}
