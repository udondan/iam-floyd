import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [network-security-director](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsshieldnetworksecuritydirector.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class NetworkSecurityDirector extends PolicyStatement {
  public servicePrefix = 'network-security-director';

  /**
   * Statement provider for service [network-security-director](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsshieldnetworksecuritydirector.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get a finding
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-director/latest/APIReference/API_GetFinding.html
   */
  public toGetFinding() {
    return this.to('GetFinding');
  }

  /**
   * Grants permission to get the status of network security scan
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-director/latest/APIReference/API_GetNetworkSecurityScan.html
   */
  public toGetNetworkSecurityScan() {
    return this.to('GetNetworkSecurityScan');
  }

  /**
   * Grants permission to get a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/network-security-director/latest/APIReference/API_GetResource.html
   */
  public toGetResource() {
    return this.to('GetResource');
  }

  /**
   * Grants permission to list findings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-security-director/latest/APIReference/API_ListFindings.html
   */
  public toListFindings() {
    return this.to('ListFindings');
  }

  /**
   * Grants permission to list insights about the latest network security scan
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-security-director/latest/APIReference/API_ListInsights.html
   */
  public toListInsights() {
    return this.to('ListInsights');
  }

  /**
   * Grants permission to list remediations for a finding
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-security-director/latest/APIReference/API_ListRemediations.html
   */
  public toListRemediations() {
    return this.to('ListRemediations');
  }

  /**
   * Grants permission to list resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/network-security-director/latest/APIReference/API_ListResources.html
   */
  public toListResources() {
    return this.to('ListResources');
  }

  /**
   * Grants permission to start a network security scan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-director/latest/APIReference/API_StartNetworkSecurityScan.html
   */
  public toStartNetworkSecurityScan() {
    return this.to('StartNetworkSecurityScan');
  }

  /**
   * Grants permission to update the status of a finding
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/network-security-director/latest/APIReference/API_UpdateFinding.html
   */
  public toUpdateFinding() {
    return this.to('UpdateFinding');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetFinding',
      'GetNetworkSecurityScan',
      'GetResource'
    ],
    List: [
      'ListFindings',
      'ListInsights',
      'ListRemediations',
      'ListResources'
    ],
    Write: [
      'StartNetworkSecurityScan',
      'UpdateFinding'
    ]
  };
}
