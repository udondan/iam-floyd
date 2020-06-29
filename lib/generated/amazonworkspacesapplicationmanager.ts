import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service wam
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspacesapplicationmanager.html
 */
export class Wam extends PolicyStatement {
  public servicePrefix = 'wam';
  public actions: Actions = {
    "AuthenticatePackager": {
      "url": "https://docs.aws.amazon.com/wam/latest/adminguide/iam.html",
      "description": "Allows the Amazon WAM packaging instance to access your application package catalog.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Action provider for service wam
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspacesapplicationmanager.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Allows the Amazon WAM packaging instance to access your application package catalog.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wam/latest/adminguide/iam.html
   */
  public authenticatePackager() {
    this.add('wam:AuthenticatePackager');
    return this;
  }
}
