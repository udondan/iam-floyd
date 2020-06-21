import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service arsenal
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscoveryarsenal.html
 */
export class Arsenal extends PolicyStatement {
  public servicePrefix = 'arsenal';
  public actions: Actions = {
    "RegisterOnPremisesAgent": {
      "url": "https://docs.aws.amazon.com/setting-up.html#setting-up-user-policy",
      "description": "Grants permission to register AWS provided data collectors to the Application Discovery Service",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Action provider for service arsenal
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscoveryarsenal.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to register AWS provided data collectors to the Application Discovery Service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/setting-up.html#setting-up-user-policy
   */
  public registerOnPremisesAgent() {
    this.add('arsenal:RegisterOnPremisesAgent');
    return this;
  }
}
