import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [mediastore](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediastore.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediastore extends PolicyStatement {
  public servicePrefix = 'mediastore';

  /**
   * Statement provider for service [mediastore](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awselementalmediastore.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create containers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_CreateContainer.html
   */
  public toCreateContainer() {
    this.to('mediastore:CreateContainer');
    return this;
  }

  /**
   * Grants permission to delete any container in the current account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteContainer.html
   */
  public toDeleteContainer() {
    this.to('mediastore:DeleteContainer');
    return this;
  }

  /**
   * Grants permission to delete the access policy of any container in the current account.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteContainerPolicy.html
   */
  public toDeleteContainerPolicy() {
    this.to('mediastore:DeleteContainerPolicy');
    return this;
  }

  /**
   * Grants permission to delete the CORS policy from any container in the current account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteCorsPolicy.html
   */
  public toDeleteCorsPolicy() {
    this.to('mediastore:DeleteCorsPolicy');
    return this;
  }

  /**
   * Grants permission to delete the lifecycle policy from any container in the current account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteLifecyclePolicy.html
   */
  public toDeleteLifecyclePolicy() {
    this.to('mediastore:DeleteLifecyclePolicy');
    return this;
  }

  /**
   * Grants permission to delete the metric policy from any container in the current account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteMetricPolicy.html
   */
  public toDeleteMetricPolicy() {
    this.to('mediastore:DeleteMetricPolicy');
    return this;
  }

  /**
   * Grants permission to delete objects.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_DeleteObject.html
   */
  public toDeleteObject() {
    this.to('mediastore:DeleteObject');
    return this;
  }

  /**
   * Grants permission to retrieve details on any container in the current account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_DescribeContainer.html
   */
  public toDescribeContainer() {
    this.to('mediastore:DescribeContainer');
    return this;
  }

  /**
   * Grants permission to retrieve object metadata.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_DescribeObject.html
   */
  public toDescribeObject() {
    this.to('mediastore:DescribeObject');
    return this;
  }

  /**
   * Grants permission to retrieve the access policy of any container in the current account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetContainerPolicy.html
   */
  public toGetContainerPolicy() {
    this.to('mediastore:GetContainerPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve the CORS policy of any container in the current account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetCorsPolicy.html
   */
  public toGetCorsPolicy() {
    this.to('mediastore:GetCorsPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve the lifecycle policy that is assigned to any container in the current account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetLifecyclePolicy.html
   */
  public toGetLifecyclePolicy() {
    this.to('mediastore:GetLifecyclePolicy');
    return this;
  }

  /**
   * Grants permission to retrieve the metric policy that is assigned to any container in the current account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetMetricPolicy.html
   */
  public toGetMetricPolicy() {
    this.to('mediastore:GetMetricPolicy');
    return this;
  }

  /**
   * Grants permission to retrieve objects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_GetObject.html
   */
  public toGetObject() {
    this.to('mediastore:GetObject');
    return this;
  }

  /**
   * Grants permission to retrieve a list of containers in the current account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_ListContainers.html
   */
  public toListContainers() {
    this.to('mediastore:ListContainers');
    return this;
  }

  /**
   * Grants permission to retrieve a list of objects and folders in the current account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_ListItems.html
   */
  public toListItems() {
    this.to('mediastore:ListItems');
    return this;
  }

  /**
   * Grants permission to list tags on any container in the current account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('mediastore:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to create or replace the access policy of any container in the current account.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutContainerPolicy.html
   */
  public toPutContainerPolicy() {
    this.to('mediastore:PutContainerPolicy');
    return this;
  }

  /**
   * Grants permission to add or modify the CORS policy of any container in the current account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutCorsPolicy.html
   */
  public toPutCorsPolicy() {
    this.to('mediastore:PutCorsPolicy');
    return this;
  }

  /**
   * Grants permission to add or modify the lifecycle policy that is assigned to any container in the current account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutLifecyclePolicy.html
   */
  public toPutLifecyclePolicy() {
    this.to('mediastore:PutLifecyclePolicy');
    return this;
  }

  /**
   * Grants permission to add or modify the metric policy that is assigned to any container in the current account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutMetricPolicy.html
   */
  public toPutMetricPolicy() {
    this.to('mediastore:PutMetricPolicy');
    return this;
  }

  /**
   * Grants permission to upload objects.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_PutObject.html
   */
  public toPutObject() {
    this.to('mediastore:PutObject');
    return this;
  }

  /**
   * Grants permission to enable access logging on any container in the current account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_StartAccessLogging.html
   */
  public toStartAccessLogging() {
    this.to('mediastore:StartAccessLogging');
    return this;
  }

  /**
   * Grants permission to disable access logging on any container in the current account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_StopAccessLogging.html
   */
  public toStopAccessLogging() {
    this.to('mediastore:StopAccessLogging');
    return this;
  }

  /**
   * Grants permission to add tags to any container in the current account.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    this.to('mediastore:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from any container in the current account.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/mediastore/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('mediastore:UntagResource');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateContainer",
      "DeleteContainer",
      "DeleteCorsPolicy",
      "DeleteLifecyclePolicy",
      "DeleteMetricPolicy",
      "DeleteObject",
      "PutCorsPolicy",
      "PutLifecyclePolicy",
      "PutMetricPolicy",
      "PutObject",
      "StartAccessLogging",
      "StopAccessLogging"
    ],
    "Permissions management": [
      "DeleteContainerPolicy",
      "PutContainerPolicy"
    ],
    "List": [
      "DescribeContainer",
      "DescribeObject",
      "ListContainers",
      "ListItems"
    ],
    "Read": [
      "GetContainerPolicy",
      "GetCorsPolicy",
      "GetLifecyclePolicy",
      "GetMetricPolicy",
      "GetObject",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type container to the statement
   *
   * https://docs.aws.amazon.com/mediastore/latest/ug/containers.html
   *
   * @param containerName - Identifier for the containerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onContainer(containerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:mediastore:${Region}:${Account}:container/${ContainerName}';
    arn = arn.replace('${ContainerName}', containerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
