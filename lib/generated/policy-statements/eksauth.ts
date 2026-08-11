import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [eks-auth](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneksauth.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class EksAuth extends PolicyStatement {
  public servicePrefix = 'eks-auth';

  /**
   * Statement provider for service [eks-auth](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneksauth.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to exchange a Kubernetes service account token for temporary AWS credentials
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/APIReference/API_auth_AssumeRoleForPodIdentity.html
   */
  public toAssumeRoleForPodIdentity() {
    return this.to('AssumeRoleForPodIdentity');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'AssumeRoleForPodIdentity'
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/clusters.html
   *
   * @param clusterName - Identifier for the clusterName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(clusterName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:eks:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cluster/${ clusterName }`);
  }

  /**
   * Filters access by a tag key and value pair
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-tags
   *
   * Applies to resource types:
   * - cluster
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }
}
