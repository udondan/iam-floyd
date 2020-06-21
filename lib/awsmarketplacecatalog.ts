import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service aws-marketplace-catalog
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacecatalog.html
 */
export class AwsMarketplaceCatalog extends PolicyStatement {
  public servicePrefix = 'aws-marketplace-catalog';
  public actions: Actions = {
    "CancelChangeSet": {
      "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_CancelChangeSet.html",
      "description": "Cancels a running change set.",
      "accessLevel": "Write"
    },
    "CompleteTask": {
      "url": "",
      "description": "Complete an existing task and submit the content to the associated change.",
      "accessLevel": "Write"
    },
    "DescribeChangeSet": {
      "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_DescribeChangeSet.html",
      "description": "Returns the details of an existing change set.",
      "accessLevel": "Read"
    },
    "DescribeEntity": {
      "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_DescribeEntity.html",
      "description": "Returns the details of an existing entity.",
      "accessLevel": "Read"
    },
    "DescribeTask": {
      "url": "",
      "description": "Returns the details of an existing task.",
      "accessLevel": "Read"
    },
    "ListChangeSets": {
      "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_ListChangeSets.html",
      "description": "Lists existing change sets.",
      "accessLevel": "Read"
    },
    "ListEntities": {
      "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_ListEntities.html",
      "description": "Lists existing entities.",
      "accessLevel": "Read"
    },
    "ListTasks": {
      "url": "",
      "description": "Lists existing tasks.",
      "accessLevel": "List"
    },
    "StartChangeSet": {
      "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_StartChangeSet.html",
      "description": "Requests a new change set.",
      "accessLevel": "Write",
      "conditions": [
        "catalog:ChangeType"
      ]
    },
    "UpdateTask": {
      "url": "",
      "description": "Update the content of an existing task.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {
    "Entity": {
      "name": "Entity",
      "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DescribeEntity.html#API_DescribeEntity_ResponseSyntax",
      "arn": "arn:${Partition}:aws-marketplace:${Region}:${Account}:${Catalog}/${EntityType}/${ResourceId}",
      "conditionKeys": []
    },
    "ChangeSet": {
      "name": "ChangeSet",
      "url": "https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_ResponseSyntax",
      "arn": "arn:${Partition}:aws-marketplace:${Region}:${Account}:${Catalog}/ChangeSet/${ResourceId}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service aws-marketplace-catalog
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacecatalog.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Cancels a running change set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_CancelChangeSet.html
   */
  public cancelChangeSet() {
    this.add('aws-marketplace-catalog:CancelChangeSet');
    return this;
  }

  /**
   * Complete an existing task and submit the content to the associated change.
   *
   * Access Level: Write
   */
  public completeTask() {
    this.add('aws-marketplace-catalog:CompleteTask');
    return this;
  }

  /**
   * Returns the details of an existing change set.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_DescribeChangeSet.html
   */
  public describeChangeSet() {
    this.add('aws-marketplace-catalog:DescribeChangeSet');
    return this;
  }

  /**
   * Returns the details of an existing entity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_DescribeEntity.html
   */
  public describeEntity() {
    this.add('aws-marketplace-catalog:DescribeEntity');
    return this;
  }

  /**
   * Returns the details of an existing task.
   *
   * Access Level: Read
   */
  public describeTask() {
    this.add('aws-marketplace-catalog:DescribeTask');
    return this;
  }

  /**
   * Lists existing change sets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_ListChangeSets.html
   */
  public listChangeSets() {
    this.add('aws-marketplace-catalog:ListChangeSets');
    return this;
  }

  /**
   * Lists existing entities.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_ListEntities.html
   */
  public listEntities() {
    this.add('aws-marketplace-catalog:ListEntities');
    return this;
  }

  /**
   * Lists existing tasks.
   *
   * Access Level: List
   */
  public listTasks() {
    this.add('aws-marketplace-catalog:ListTasks');
    return this;
  }

  /**
   * Requests a new change set.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_Operations.htmlAPI_StartChangeSet.html
   */
  public startChangeSet() {
    this.add('aws-marketplace-catalog:StartChangeSet');
    return this;
  }

  /**
   * Update the content of an existing task.
   *
   * Access Level: Write
   */
  public updateTask() {
    this.add('aws-marketplace-catalog:UpdateTask');
    return this;
  }

  /**
   * Adds a resource of type Entity to the statement
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DescribeEntity.html#API_DescribeEntity_ResponseSyntax
   *
   * @param catalog - Identifier for the catalog.
   * @param entityType - Identifier for the entityType.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEntity(catalog: string, entityType: string, resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:aws-marketplace:${Region}:${Account}:${Catalog}/${EntityType}/${ResourceId}';
    arn = arn.replace('${Catalog}', catalog);
    arn = arn.replace('${EntityType}', entityType);
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ChangeSet to the statement
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_ResponseSyntax
   *
   * @param catalog - Identifier for the catalog.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onChangeSet(catalog: string, resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:aws-marketplace:${Region}:${Account}:${Catalog}/ChangeSet/${ResourceId}';
    arn = arn.replace('${Catalog}', catalog);
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Enables you to verify change type in the StartChangeSet request.
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/api-access-control.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifChangeType(value: string | string[], operator?: string) {
    const props: any = {};
    props[`catalog:ChangeType`] = value;
    return this.if(operator || 'StringEquals', props);
  }
}
