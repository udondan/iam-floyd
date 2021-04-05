import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [ec2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ec2 extends PolicyStatement {
  public servicePrefix = 'ec2';

  /**
   * Statement provider for service [ec2](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonec2.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super();
    console.log(sid);
  }

  /**
   * Grants permission to start a stopped instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StartInstances.html
   */
  public toStartInstances() {
    console.log('StartInstances');
    return this;
  }

  public allow() {
    console.log('allow');
    return this;
  }

  /**
   * Grants permission to stop an Amazon EBS-backed instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_StopInstances.html
   */
  public toStopInstances() {
    console.log('StopInstances');
    return this;
  }

  public ifResourceTag(
    tagKey: string,
    value: string | string[],
    operator?: string
  ) {
    console.log(`ResourceTag/${tagKey}`, value, operator || 'StringLike');
    return this;
  }

  public ifAwsRequestTag(
    tagKey: string,
    value: string | string[],
    operator?: string
  ) {
    console.log(`ResourceTag/${tagKey}`, value, operator || 'StringLike');
    return this;
  }
}
