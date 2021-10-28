import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
   * @param apiId - Identifier for the apiId.
   * @param stage - Identifier for the stage.
   * @param method - Identifier for the method.
   * @param apiSpecificResourcePath - Identifier for the apiSpecificResourcePath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onExecuteApiGeneral(apiId: string, stage: string, method: string, apiSpecificResourcePath: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:execute-api:${ region || '*' }:${ account || '*' }:${ apiId }/${ stage }/${ method }/${ apiSpecificResourcePath }`);
  }
}
