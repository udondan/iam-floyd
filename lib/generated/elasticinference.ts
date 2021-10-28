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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to customer for connecting to Elastic Inference accelerator
   *
   * Access Level: Write
   */
  public toConnect() {
    return this.to('Connect');
  }

  /**
   * Grants permission to describe the locations in which a given accelerator type or set of types is present in a given region
   *
   * Access Level: List
   */
  public toDescribeAcceleratorOfferings() {
    return this.to('DescribeAcceleratorOfferings');
  }

  /**
   * Grants permission to describe the accelerator types available in a given region, as well as their characteristics, such as memory and throughput
   *
   * Access Level: List
   */
  public toDescribeAcceleratorTypes() {
    return this.to('DescribeAcceleratorTypes');
  }

  /**
   * Grants permission to describe information over a provided set of accelerators belonging to an account
   *
   * Access Level: List
   */
  public toDescribeAccelerators() {
    return this.to('DescribeAccelerators');
  }

  /**
   * Grants permission to list all tags on an Amazon RDS resource
   *
   * Access Level: Read
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to assign one or more tags (key-value pairs) to the specified QuickSight resource
   *
   * Access Level: Tagging
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag or tags from a resource
   *
   * Access Level: Tagging
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'Connect'
    ],
    List: [
      'DescribeAcceleratorOfferings',
      'DescribeAcceleratorTypes',
      'DescribeAccelerators'
    ],
    Read: [
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
    return this.on(`arn:${ partition || 'aws' }:elastic-inference:${ region || '*' }:${ account || '*' }:elastic-inference-accelerator/${ acceleratorId }`);
  }
}
