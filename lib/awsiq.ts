import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service iq
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiq.html
 */
export class Iq extends PolicyStatement {
  public servicePrefix = 'iq';
  public actions: Actions = {
    "CreateProject": {
      "url": "https://aws.amazon.com/iq/",
      "description": "Grants permission to submit new project requests",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Grants permission to submit new project requests
   *
   * Access Level: Write
   *
   * https://aws.amazon.com/iq/
   */
  public createProject() {
    this.add('iq:CreateProject');
    return this;
  }
}
