import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [execute-api](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonapigateway.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ExecuteApi extends PolicyStatement {
  public servicePrefix = 'execute-api';
  protected actionList: Actions = {
    "InvalidateCache": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/api-gateway-caching.html",
      "description": "Used to invalidate API cache upon a client request",
      "accessLevel": "Write",
      "resourceTypes": {
        "execute-api-general": {
          "required": true
        }
      }
    },
    "Invoke": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/how-to-call-api.html",
      "description": "Used to invoke an API upon a client request",
      "accessLevel": "Write",
      "resourceTypes": {
        "execute-api-general": {
          "required": true
        }
      }
    },
    "ManageConnections": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/apigateway-websocket-control-access-iam.html",
      "description": "ManageConnections controls access to the @connections API",
      "accessLevel": "Write",
      "resourceTypes": {
        "execute-api-general": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "execute-api-general": {
      "name": "execute-api-general",
      "url": "",
      "arn": "arn:${Partition}:execute-api:${Region}:${Account}:${ApiId}/${Stage}/${Method}/${ApiSpecificResourcePath}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [execute-api](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonapigateway.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Used to invalidate API cache upon a client request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/api-gateway-caching.html
   */
  public invalidateCache() {
    this.add('execute-api:InvalidateCache');
    return this;
  }

  /**
   * Used to invoke an API upon a client request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/how-to-call-api.html
   */
  public invoke() {
    this.add('execute-api:Invoke');
    return this;
  }

  /**
   * ManageConnections controls access to the @connections API
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/apigateway-websocket-control-access-iam.html
   */
  public manageConnections() {
    this.add('execute-api:ManageConnections');
    return this;
  }

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
    var arn = 'arn:${Partition}:execute-api:${Region}:${Account}:${ApiId}/${Stage}/${Method}/${ApiSpecificResourcePath}';
    arn = arn.replace('${ApiId}', apiId);
    arn = arn.replace('${Stage}', stage);
    arn = arn.replace('${Method}', method);
    arn = arn.replace('${ApiSpecificResourcePath}', apiSpecificResourcePath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
