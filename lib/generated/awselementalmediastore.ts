import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [mediastore](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediastore.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mediastore extends PolicyStatement {
  public servicePrefix = 'mediastore';
  protected actionList: Actions = {
    "CreateContainer": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_CreateContainer.html",
      "description": "Grants permission to create containers.",
      "accessLevel": "Write"
    },
    "DeleteContainer": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteContainer.html",
      "description": "Grants permission to delete any container in the current account.",
      "accessLevel": "Write"
    },
    "DeleteContainerPolicy": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteContainerPolicy.html",
      "description": "Grants permission to delete the access policy of any container in the current account.",
      "accessLevel": "Permissions management"
    },
    "DeleteCorsPolicy": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteCorsPolicy.html",
      "description": "Grants permission to delete the CORS policy from any container in the current account.",
      "accessLevel": "Write"
    },
    "DeleteLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteLifecyclePolicy.html",
      "description": "Grants permission to delete the lifecycle policy from any container in the current account.",
      "accessLevel": "Write"
    },
    "DeleteMetricPolicy": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_DeleteMetricPolicy.html",
      "description": "Grants permission to delete the metric policy from any container in the current account.",
      "accessLevel": "Write"
    },
    "DeleteObject": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_DeleteObject.html",
      "description": "Grants permission to delete objects.",
      "accessLevel": "Write"
    },
    "DescribeContainer": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_DescribeContainer.html",
      "description": "Grants permission to retrieve details on any container in the current account.",
      "accessLevel": "List"
    },
    "DescribeObject": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_DescribeObject.html",
      "description": "Grants permission to retrieve object metadata.",
      "accessLevel": "List"
    },
    "GetContainerPolicy": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetContainerPolicy.html",
      "description": "Grants permission to retrieve the access policy of any container in the current account.",
      "accessLevel": "Read"
    },
    "GetCorsPolicy": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetCorsPolicy.html",
      "description": "Grants permission to retrieve the CORS policy of any container in the current account.",
      "accessLevel": "Read"
    },
    "GetLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetLifecyclePolicy.html",
      "description": "Grants permission to retrieve the lifecycle policy that is assigned to any container in the current account.",
      "accessLevel": "Read"
    },
    "GetMetricPolicy": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_GetMetricPolicy.html",
      "description": "Grants permission to retrieve the metric policy that is assigned to any container in the current account.",
      "accessLevel": "Read"
    },
    "GetObject": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_GetObject.html",
      "description": "Grants permission to retrieve objects.",
      "accessLevel": "Read"
    },
    "ListContainers": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_ListContainers.html",
      "description": "Grants permission to retrieve a list of containers in the current account.",
      "accessLevel": "List"
    },
    "ListItems": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_ListItems.html",
      "description": "Grants permission to retrieve a list of objects and folders in the current account.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_ListTagsForResource.html",
      "description": "Grants permission to list tags on any container in the current account.",
      "accessLevel": "Read"
    },
    "PutContainerPolicy": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutContainerPolicy.html",
      "description": "Grants permission to create or replace the access policy of any container in the current account.",
      "accessLevel": "Permissions management"
    },
    "PutCorsPolicy": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutCorsPolicy.html",
      "description": "Grants permission to add or modify the CORS policy of any container in the current account.",
      "accessLevel": "Write"
    },
    "PutLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutLifecyclePolicy.html",
      "description": "Grants permission to add or modify the lifecycle policy that is assigned to any container in the current account.",
      "accessLevel": "Write"
    },
    "PutMetricPolicy": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_PutMetricPolicy.html",
      "description": "Grants permission to add or modify the metric policy that is assigned to any container in the current account.",
      "accessLevel": "Write"
    },
    "PutObject": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_objstore_PutObject.html",
      "description": "Grants permission to upload objects.",
      "accessLevel": "Write"
    },
    "StartAccessLogging": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_StartAccessLogging.html",
      "description": "Grants permission to enable access logging on any container in the current account.",
      "accessLevel": "Write"
    },
    "StopAccessLogging": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_StopAccessLogging.html",
      "description": "Grants permission to disable access logging on any container in the current account.",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_TagResource.html",
      "description": "Grants permission to add tags to any container in the current account.",
      "accessLevel": "Tagging"
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/mediastore/latest/apireference/API_UntagResource.html",
      "description": "Grants permission to remove tags from any container in the current account.",
      "accessLevel": "Tagging"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "container": {
      "name": "container",
      "url": "https://docs.aws.amazon.com/mediastore/latest/ug/containers.html",
      "arn": "arn:${Partition}:mediastore:${Region}:${Account}:container/${ContainerName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [mediastore](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediastore.html).
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
