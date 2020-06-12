import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service sumerian
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsumerian.html
 */
export class Sumerian extends PolicyStatement {
  public servicePrefix = 'sumerian';
  public actions : Actions = {
    "Login": {
      "url": "https://docs.aws.amazon.com/sumerian/latest/userguide/sumerian-permissions.html",
      "description": "Grant login access to the Sumerian console.",
      "accessLevel": "Write"
    },
    "ViewRelease": {
      "url": "https://docs.aws.amazon.com/sumerian/latest/userguide/sumerian-permissions.html",
      "description": "Grant access to view a project release.",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    }
  };
  public resourceTypes : ResourceTypes = {
    "project": {
      "name": "project",
      "arn": "arn:${Partition}:sumerian:${Region}:${Account}:project:${ProjectName}",
      "conditionKeys": []
    }
  };

  /**
   * Grant login access to the Sumerian console.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sumerian/latest/userguide/sumerian-permissions.html
   */
  public login () {
    this.add('sumerian:Login');
    return this;
  }

  /**
   * Grant access to view a project release.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sumerian/latest/userguide/sumerian-permissions.html
   */
  public viewRelease () {
    this.add('sumerian:ViewRelease');
    return this;
  }
}
