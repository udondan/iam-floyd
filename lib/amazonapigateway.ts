import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service execute-api
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonapigateway.html
 */
export class ExecuteApi extends PolicyStatement {
  public servicePrefix = 'execute-api';
  public actions : Actions = {
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
  public resourceTypes : ResourceTypes = {
    "execute-api-general": {
      "name": "execute-api-general",
      "arn": "arn:${Partition}:execute-api:${Region}:${Account}:${ApiId}/${Stage}/${Method}/${ApiSpecificResourcePath}",
      "conditionKeys": []
    }
  };

  /**
   * Used to invalidate API cache upon a client request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/api-gateway-caching.html
   */
  public invalidateCache () {
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
  public invoke () {
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
  public manageConnections () {
    this.add('execute-api:ManageConnections');
    return this;
  }
}
