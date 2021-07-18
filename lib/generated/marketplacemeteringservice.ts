import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [aws-marketplace-metering-service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacemeteringservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceMeteringService extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace-metering-service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacemeteringservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to post metering records for a set of customers for SaaS applications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_BatchMeterUsage.html
   */
  public toBatchMeterUsage() {
    return this.to('BatchMeterUsage');
  }

  /**
   * Grants permission to emit metering records
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_MeterUsage.html
   */
  public toMeterUsage() {
    return this.to('MeterUsage');
  }

  /**
   * Grants permission to to verify that the customer running your paid software is subscribed to your product on AWSMarketplace, enabling you to guard against unauthorized use. Meters software use per ECS task, per hour, with usage prorated to the second
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_RegisterUsage.html
   */
  public toRegisterUsage() {
    return this.to('RegisterUsage');
  }

  /**
   * Grants permission to resolve a registration token to obtain a CustomerIdentifier and product code
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_ResolveCustomer.html
   */
  public toResolveCustomer() {
    return this.to('ResolveCustomer');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchMeterUsage",
      "MeterUsage",
      "RegisterUsage",
      "ResolveCustomer"
    ]
  };
}
