import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service rds-db
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrdsiamauthentication.html
 */
export class RdsDb extends PolicyStatement {
  public servicePrefix = 'rds-db';
  public actions : Actions = {
    "connect": {
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.IAMPolicy.html",
      "description": "Allows IAM role or user to connect to RDS database",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "db-user": {
          "required": true
        }
      }
    }
  };
  public resourceTypes : ResourceTypes = {
    "db-user": {
      "name": "db-user",
      "arn": "arn:${Partition}:rds-db:${Region}:${Account}:dbuser:${DbiResourceId}/${DbUserName}",
      "conditionKeys": []
    }
  };

  /**
   * Allows IAM role or user to connect to RDS database
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.IAMPolicy.html
   */
  public connect () {
    this.add('rds-db:connect');
    return this;
  }
}
