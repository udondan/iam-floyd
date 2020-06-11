import { PolicyStatement, Actions } from "./shared";

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
