import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [elastic-inference](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticinference.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ElasticInference extends PolicyStatement {
  public servicePrefix = 'elastic-inference';

  /**
   * Statement provider for service [elastic-inference](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticinference.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Connects customer to Elastic Inference accelerator
   *
   * Access Level: Write
   */
  public toConnect() {
    this.to('Connect');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "Connect"
    ]
  };

  /**
   * Adds a resource of type accelerator to the statement
   *
   * @param acceleratorId - Identifier for the acceleratorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAccelerator(acceleratorId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elastic-inference:${Region}:${Account}:elastic-inference-accelerator/${AcceleratorId}';
    arn = arn.replace('${AcceleratorId}', acceleratorId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
