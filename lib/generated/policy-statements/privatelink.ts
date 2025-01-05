import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [vpce](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsprivatelink.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Vpce extends PolicyStatement {
  public servicePrefix = 'vpce';

  /**
   * Statement provider for service [vpce](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsprivatelink.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to manage multi-region VPC endpoints and VPC endpoint service configurations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/vpc/latest/privatelink/vpc/latest/privatelink/security_iam_service-with-iam.html
   */
  public toAllowMultiRegion() {
    return this.to('AllowMultiRegion');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AllowMultiRegion'
    ]
  };
}
