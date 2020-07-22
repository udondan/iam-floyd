import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [launchwizard](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_launchwizard.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Launchwizard extends PolicyStatement {
  public servicePrefix = 'launchwizard';
  protected actionList: Actions = {
    "DeleteApp": {
      "url": "https://docs.aws.amazon.com/launchwizard/",
      "description": "Delete an application",
      "accessLevel": "Write"
    },
    "DescribeProvisionedApp": {
      "url": "https://docs.aws.amazon.com/launchwizard/",
      "description": "Describe provisioning applications",
      "accessLevel": "Read"
    },
    "DescribeProvisioningEvents": {
      "url": "https://docs.aws.amazon.com/launchwizard/",
      "description": "Describe provisioning events",
      "accessLevel": "Read"
    },
    "GetInfrastructureSuggestion": {
      "url": "https://docs.aws.amazon.com/launchwizard/",
      "description": "Get infrastructure suggestion",
      "accessLevel": "Read"
    },
    "GetIpAddress": {
      "url": "https://docs.aws.amazon.com/launchwizard/",
      "description": "Get customer's ip address",
      "accessLevel": "Read"
    },
    "GetResourceCostEstimate": {
      "url": "https://docs.aws.amazon.com/launchwizard/",
      "description": "Get resource cost estimate",
      "accessLevel": "Read"
    },
    "ListProvisionedApps": {
      "url": "https://docs.aws.amazon.com/launchwizard/",
      "description": "List provisioning applications",
      "accessLevel": "List"
    },
    "StartProvisioning": {
      "url": "https://docs.aws.amazon.com/launchwizard/",
      "description": "Start a provisioning",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [launchwizard](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_launchwizard.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Delete an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public deleteApp() {
    this.add('launchwizard:DeleteApp');
    return this;
  }

  /**
   * Describe provisioning applications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public describeProvisionedApp() {
    this.add('launchwizard:DescribeProvisionedApp');
    return this;
  }

  /**
   * Describe provisioning events
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public describeProvisioningEvents() {
    this.add('launchwizard:DescribeProvisioningEvents');
    return this;
  }

  /**
   * Get infrastructure suggestion
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public getInfrastructureSuggestion() {
    this.add('launchwizard:GetInfrastructureSuggestion');
    return this;
  }

  /**
   * Get customer's ip address
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public getIpAddress() {
    this.add('launchwizard:GetIpAddress');
    return this;
  }

  /**
   * Get resource cost estimate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public getResourceCostEstimate() {
    this.add('launchwizard:GetResourceCostEstimate');
    return this;
  }

  /**
   * List provisioning applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public listProvisionedApps() {
    this.add('launchwizard:ListProvisionedApps');
    return this;
  }

  /**
   * Start a provisioning
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public startProvisioning() {
    this.add('launchwizard:StartProvisioning');
    return this;
  }
}
