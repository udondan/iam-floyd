import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [aws-marketplace-procurement-systems-integration](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceprocurementsystemsintegration.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceProcurementSystemsIntegration extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace-procurement-systems-integration](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplaceprocurementsystemsintegration.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Describes the Procurement System integration configuration (e.g. Coupa) for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/procurement-systems-integration.html
   */
  public toDescribeProcurementSystemConfiguration() {
    this.to('aws-marketplace:DescribeProcurementSystemConfiguration');
    return this;
  }

  /**
   * Creates or updates the Procurement System integration configuration (e.g. Coupa) for the individual account, or for the entire AWS Organization if one exists. This action can only be performed by the master account if using an AWS Organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/procurement-systems-integration.html
   */
  public toPutProcurementSystemConfiguration() {
    this.to('aws-marketplace:PutProcurementSystemConfiguration');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "DescribeProcurementSystemConfiguration"
    ],
    "Write": [
      "PutProcurementSystemConfiguration"
    ]
  };
}
