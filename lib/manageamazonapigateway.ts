import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service apigateway
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_manageamazonapigateway.html
 */
export class Apigateway extends PolicyStatement {
  public servicePrefix = 'apigateway';
  public actions : Actions = {
    "DELETE": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/API_DELETE.html",
      "description": "Used to delete resources",
      "accessLevel": "Write",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "GET": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/API_GET.html",
      "description": "Used to get information about resources",
      "accessLevel": "Read",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      }
    },
    "PATCH": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/API_PATCH.html",
      "description": "Used to update resources",
      "accessLevel": "Write",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "POST": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/API_POST.html",
      "description": "Used to create child resources",
      "accessLevel": "Write",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "PUT": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/API_PUT.html",
      "description": "Used to update resources (and, although not recommended, can be used to create child resources)",
      "accessLevel": "Write",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "SetWebACL": {
      "url": "https://docs.aws.amazon.com/apigateway/api-reference/WEBACL_SET.html",
      "description": "Gives WebAcl permissions to WAF",
      "accessLevel": "Write",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      }
    },
    "UpdateRestApiPolicy": {
      "url": "",
      "description": "Used to update the Resource Policy for a given API",
      "accessLevel": "Write",
      "resourceTypes": {
        "apigateway-general": {
          "required": true
        }
      }
    }
  };

  /**
   * Used to delete resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_DELETE.html
   */
  public dELETE () {
    this.add('apigateway:DELETE');
    return this;
  }

  /**
   * Used to get information about resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_GET.html
   */
  public gET () {
    this.add('apigateway:GET');
    return this;
  }

  /**
   * Used to update resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_PATCH.html
   */
  public pATCH () {
    this.add('apigateway:PATCH');
    return this;
  }

  /**
   * Used to create child resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_POST.html
   */
  public pOST () {
    this.add('apigateway:POST');
    return this;
  }

  /**
   * Used to update resources (and, although not recommended, can be used to create child resources)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/API_PUT.html
   */
  public pUT () {
    this.add('apigateway:PUT');
    return this;
  }

  /**
   * Gives WebAcl permissions to WAF
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apigateway/api-reference/WEBACL_SET.html
   */
  public setWebACL () {
    this.add('apigateway:SetWebACL');
    return this;
  }

  /**
   * Used to update the Resource Policy for a given API
   *
   * Access Level: Write
   */
  public updateRestApiPolicy () {
    this.add('apigateway:UpdateRestApiPolicy');
    return this;
  }
}
