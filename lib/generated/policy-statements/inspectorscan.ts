import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [inspector-scan](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspectorscan.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class InspectorScan extends PolicyStatement {
  public servicePrefix = 'inspector-scan';

  /**
   * Statement provider for service [inspector-scan](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspectorscan.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to scan the customer provided SBOM and return vulnerabilities detected within
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/v2/APIReference/API_ScanSbom.html
   */
  public toScanSbom() {
    return this.to('ScanSbom');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'ScanSbom'
    ]
  };
}
