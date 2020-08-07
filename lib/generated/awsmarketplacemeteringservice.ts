import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [aws-marketplace-metering-service](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacemeteringservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceMeteringService extends PolicyStatement {
  public servicePrefix = 'aws-marketplace-metering-service';
  protected actionList: Actions = {
    "BatchMeterUsage": {
      "url": "https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_BatchMeterUsage.html",
      "description": "Called from a SaaS application listed on the AWS Marketplace to post metering records for a set of customers.",
      "accessLevel": "Write"
    },
    "MeterUsage": {
      "url": "https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_MeterUsage.html",
      "description": "Emits metering records.",
      "accessLevel": "Write"
    },
    "RegisterUsage": {
      "url": "https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_RegisterUsage.html",
      "description": "Allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Meters software use per ECS task, per hour, with usage prorated to the second.",
      "accessLevel": "Write"
    },
    "ResolveCustomer": {
      "url": "https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_ResolveCustomer.html",
      "description": "Resolves a registration token to obtain a CustomerIdentifier and product code.",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [aws-marketplace-metering-service](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacemeteringservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Called from a SaaS application listed on the AWS Marketplace to post metering records for a set of customers.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_BatchMeterUsage.html
   */
  public toBatchMeterUsage() {
    this.add('aws-marketplace-metering-service:BatchMeterUsage');
    return this;
  }

  /**
   * Emits metering records.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_MeterUsage.html
   */
  public toMeterUsage() {
    this.add('aws-marketplace-metering-service:MeterUsage');
    return this;
  }

  /**
   * Allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Meters software use per ECS task, per hour, with usage prorated to the second.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_RegisterUsage.html
   */
  public toRegisterUsage() {
    this.add('aws-marketplace-metering-service:RegisterUsage');
    return this;
  }

  /**
   * Resolves a registration token to obtain a CustomerIdentifier and product code.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplacemetering/latest/APIReference/API_ResolveCustomer.html
   */
  public toResolveCustomer() {
    this.add('aws-marketplace-metering-service:ResolveCustomer');
    return this;
  }
}
