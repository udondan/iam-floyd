import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [launchwizard](https://docs.aws.amazon.com/service-authorization/latest/reference/list_launchwizard.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Launchwizard extends PolicyStatement {
  public servicePrefix = 'launchwizard';

  /**
   * Statement provider for service [launchwizard](https://docs.aws.amazon.com/service-authorization/latest/reference/list_launchwizard.html).
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
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Describe provisioning applications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDescribeProvisionedApp() {
    return this.to('DescribeProvisionedApp');
  }

  /**
   * Describe provisioning events
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDescribeProvisioningEvents() {
    return this.to('DescribeProvisioningEvents');
  }

  /**
   * Get infrastructure suggestion
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetInfrastructureSuggestion() {
    return this.to('GetInfrastructureSuggestion');
  }

  /**
   * Get customer's ip address
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetIpAddress() {
    return this.to('GetIpAddress');
  }

  /**
   * Get resource cost estimate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetResourceCostEstimate() {
    return this.to('GetResourceCostEstimate');
  }

  /**
   * List provisioning applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toListProvisionedApps() {
    return this.to('ListProvisionedApps');
  }

  /**
   * Start a provisioning
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toStartProvisioning() {
    return this.to('StartProvisioning');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "DeleteApp",
      "StartProvisioning"
    ],
    "Read": [
      "DescribeProvisionedApp",
      "DescribeProvisioningEvents",
      "GetInfrastructureSuggestion",
      "GetIpAddress",
      "GetResourceCostEstimate"
    ],
    "List": [
      "ListProvisionedApps"
    ]
  };
}
