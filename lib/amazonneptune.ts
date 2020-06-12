import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service neptune-db
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonneptune.html
 */
export class NeptuneDb extends PolicyStatement {
  public servicePrefix = 'neptune-db';
  public actions : Actions = {
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
  public resourceTypes : ResourceTypes = {
    "database": {
      "name": "database",
      "arn": "arn:${Partition}:neptune-db:${Region}:${Account}:${RelativeId}/database",
      "conditionKeys": []
    }
  };

  /**
   * Connect to database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/neptune/latest/userguide/get-started.html
   */
  public connect () {
    this.add('neptune-db:connect');
    return this;
  }
}
