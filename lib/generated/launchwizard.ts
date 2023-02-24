import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [launchwizard](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslaunchwizard.html).
 *
 * @param options - Options for the statement
 */
export class Launchwizard extends PolicyStatement {
  public servicePrefix = 'launchwizard';

  /**
   * Statement provider for service [launchwizard](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslaunchwizard.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to delete an application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Grants permission to describe provisioning applications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDescribeProvisionedApp() {
    return this.to('DescribeProvisionedApp');
  }

  /**
   * Grants permission to describe provisioning events
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toDescribeProvisioningEvents() {
    return this.to('DescribeProvisioningEvents');
  }

  /**
   * Grants permission to get infrastructure suggestion
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetInfrastructureSuggestion() {
    return this.to('GetInfrastructureSuggestion');
  }

  /**
   * Grants permission to get customer's ip address
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetIpAddress() {
    return this.to('GetIpAddress');
  }

  /**
   * Grants permission to get resource cost estimate
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toGetResourceCostEstimate() {
    return this.to('GetResourceCostEstimate');
  }

  /**
   * Grants permission to list provisioning applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toListProvisionedApps() {
    return this.to('ListProvisionedApps');
  }

  /**
   * Grants permission to start a provisioning
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/launchwizard/
   */
  public toStartProvisioning() {
    return this.to('StartProvisioning');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'DeleteApp',
      'StartProvisioning'
    ],
    Read: [
      'DescribeProvisionedApp',
      'DescribeProvisioningEvents',
      'GetInfrastructureSuggestion',
      'GetIpAddress',
      'GetResourceCostEstimate'
    ],
    List: [
      'ListProvisionedApps'
    ]
  };
}
