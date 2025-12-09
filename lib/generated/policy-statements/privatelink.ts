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
   * https://docs.aws.amazon.com/vpc/latest/privatelink/security_iam_service-with-iam.html
   */
  public toAllowMultiRegion() {
    return this.to('AllowMultiRegion');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AllowMultiRegion'
    ]
  };

  /**
   * Adds a resource of type vpc-endpoint to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html
   *
   * @param vpcEndpointId - Identifier for the vpcEndpointId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onVpcEndpoint(vpcEndpointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ec2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:vpc-endpoint/${ vpcEndpointId }`);
  }

  /**
   * Adds a resource of type vpc-endpoint-service to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html
   *
   * @param vpcEndpointServiceId - Identifier for the vpcEndpointServiceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onVpcEndpointService(vpcEndpointServiceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ec2:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:vpc-endpoint-service/${ vpcEndpointServiceId }`);
  }
}
