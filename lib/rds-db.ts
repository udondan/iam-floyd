import { PolicyStatement, Actions } from "./shared";

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
