import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service neptune-db
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonneptune.html
 */
export class NeptuneDb extends PolicyStatement {
  public servicePrefix = 'neptune-db';
  public actions: Actions = {
    "connect": {
      "url": "https://docs.aws.amazon.com/neptune/latest/userguide/get-started.html",
      "description": "Connect to database",
      "accessLevel": "Write",
      "resourceTypes": {
        "database": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "database": {
      "name": "database",
      "url": "https://docs.aws.amazon.com/neptune/latest/userguide/get-started.html",
      "arn": "arn:${Partition}:neptune-db:${Region}:${Account}:${Cluster}/${Database}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service neptune-db
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonneptune.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Connect to database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/get-started.html
   */
  public connect() {
    this.add('neptune-db:connect');
    return this;
  }

  /**
   * Adds a resource of type database to the statement
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/get-started.html
   *
   * @param cluster - Identifier for the cluster.
   * @param database - Identifier for the database.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDatabase(cluster: string, database: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:neptune-db:${Region}:${Account}:${Cluster}/${Database}';
    arn = arn.replace('${Cluster}', cluster);
    arn = arn.replace('${Database}', database);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
