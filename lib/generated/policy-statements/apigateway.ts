import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [execute-api](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigateway.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ExecuteApi extends PolicyStatement {
  public servicePrefix = 'execute-api';

  /**
   * Statement provider for service [execute-api](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonapigateway.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Used to invalidate API cache upon a client request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/api-gateway-caching.html
   */
  public toInvalidateCache() {
    return this.to('InvalidateCache');
  }

  /**
   * Used to invoke an API upon a client request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/how-to-call-api.html
   */
  public toInvoke() {
    return this.to('Invoke');
  }

  /**
   * ManageConnections controls access to the @connections API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/apigateway-websocket-control-access-iam.html
   */
  public toManageConnections() {
    return this.to('ManageConnections');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'InvalidateCache',
      'Invoke',
      'ManageConnections'
    ]
  };

  /**
   * Adds a resource of type execute-api-general to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param apiId - Identifier for the apiId.
   * @param stage - Identifier for the stage.
   * @param method - Identifier for the method.
   * @param apiSpecificResourcePath - Identifier for the apiSpecificResourcePath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifViaDomainArn()
   */
  public onExecuteApiGeneral(apiId: string, stage: string, method: string, apiSpecificResourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:execute-api:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:${ apiId }/${ stage }/${ method }/${ apiSpecificResourcePath }`);
  }

  /**
   * Adds a resource of type execute-api-domain to the statement
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * @param domainName - Identifier for the domainName.
   * @param domainIdentifier - Identifier for the domainIdentifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onExecuteApiDomain(domainName: string, domainIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:execute-api:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/domainnames/${ domainName }+${ domainIdentifier }`);
  }

  /**
   * Filters access by the domain name ARN the API is called from
   *
   * https://docs.aws.amazon.com/apigateway/latest/developerguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - execute-api-general
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifViaDomainArn(value: string | string[], operator?: Operator | string) {
    return this.if(`viaDomainArn`, value, operator ?? 'StringLike');
  }
}
