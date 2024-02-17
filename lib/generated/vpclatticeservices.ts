import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [vpc-lattice-svcs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonvpclatticeservices.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class VpcLatticeSvcs extends PolicyStatement {
  public servicePrefix = 'vpc-lattice-svcs';

  /**
   * Statement provider for service [vpc-lattice-svcs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonvpclatticeservices.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to invoke a VPC Lattice service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifPort()
   * - .ifServiceNetworkArn()
   * - .ifServiceArn()
   * - .ifSourceVpc()
   * - .ifSourceVpcOwnerAccount()
   * - .ifRequestHeader()
   * - .ifRequestQueryString()
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/sigv4-authenticated-requests.html
   */
  public toInvoke() {
    return this.to('Invoke');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'Invoke'
    ]
  };

  /**
   * Adds a resource of type Service to the statement
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html
   *
   * @param serviceId - Identifier for the serviceId.
   * @param requestPath - Identifier for the requestPath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onService(serviceId: string, requestPath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:vpc-lattice:${ region || this.defaultRegion }:${ account || this.defaultAccount }:service/${ serviceId }/${ requestPath }`);
  }

  /**
   * Filters access by the destination port the request is made to
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html#auth-policies-condition-keys
   *
   * Applies to actions:
   * - .toInvoke()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifPort(value: number | number[], operator?: Operator | string) {
    return this.if(`Port`, value, operator || 'NumericEquals');
  }

  /**
   * Filters access by a header name-value pair in the request headers
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html#auth-policies-condition-keys
   *
   * Applies to actions:
   * - .toInvoke()
   *
   * @param headerName The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestHeader(headerName: string, value: string | string[], operator?: Operator | string) {
    return this.if(`RequestHeader/${ headerName }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the method of the request
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html#auth-policies-condition-keys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestMethod(value: string | string[], operator?: Operator | string) {
    return this.if(`RequestMethod`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the query string key-value pairs in the request URL
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html#auth-policies-condition-keys
   *
   * Applies to actions:
   * - .toInvoke()
   *
   * @param queryStringKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestQueryString(queryStringKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`RequestQueryString/${ queryStringKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of the service receiving the request
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html#auth-policies-condition-keys
   *
   * Applies to actions:
   * - .toInvoke()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifServiceArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ServiceArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ARN of the service network receiving the request
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html#auth-policies-condition-keys
   *
   * Applies to actions:
   * - .toInvoke()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifServiceNetworkArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ServiceNetworkArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the VPC the request is made from
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html#auth-policies-condition-keys
   *
   * Applies to actions:
   * - .toInvoke()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSourceVpc(value: string | string[], operator?: Operator | string) {
    return this.if(`SourceVpc`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the owning account of the VPC the request is made from
   *
   * https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html#auth-policies-condition-keys
   *
   * Applies to actions:
   * - .toInvoke()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSourceVpcOwnerAccount(value: string | string[], operator?: Operator | string) {
    return this.if(`SourceVpcOwnerAccount`, value, operator || 'StringLike');
  }
}
