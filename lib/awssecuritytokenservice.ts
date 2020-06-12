import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service sts
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecuritytokenservice.html
 */
export class Sts extends PolicyStatement {
  public servicePrefix = 'sts';
  public actions : Actions = {
    "AssumeRole": {
      "url": "https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html",
      "description": "Returns a set of temporary security credentials that you can use to access AWS resources that you might not normally have access to",
      "accessLevel": "Write",
      "resourceTypes": {
        "role": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:PrincipalTag/${TagKey}",
        "aws:RequestTag/${TagKey}",
        "sts:TransitiveTagKeys",
        "sts:ExternalId",
        "sts:RoleSessionName"
      ]
    },
    "AssumeRoleWithSAML": {
      "url": "https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithSAML.html",
      "description": "Returns a set of temporary security credentials for users who have been authenticated via a SAML authentication response",
      "accessLevel": "Write",
      "resourceTypes": {
        "role": {
          "required": true
        }
      },
      "conditions": [
        "saml:namequalifier",
        "saml:sub",
        "saml:sub_type",
        "saml:aud",
        "saml:iss",
        "saml:doc",
        "saml:cn",
        "saml:commonName",
        "saml:eduorghomepageuri",
        "saml:eduorgidentityauthnpolicyuri",
        "saml:eduorglegalname",
        "saml:eduorgsuperioruri",
        "saml:eduorgwhitepagesuri",
        "saml:edupersonaffiliation",
        "saml:edupersonassurance",
        "saml:edupersonentitlement",
        "saml:edupersonnickname",
        "saml:edupersonorgdn",
        "saml:edupersonorgunitdn",
        "saml:edupersonprimaryaffiliation",
        "saml:edupersonprimaryorgunitdn",
        "saml:edupersonprincipalname",
        "saml:edupersonscopedaffiliation",
        "saml:edupersontargetedid",
        "saml:givenName",
        "saml:mail",
        "saml:name",
        "saml:organizationStatus",
        "saml:primaryGroupSID",
        "saml:surname",
        "saml:uid",
        "saml:x500UniqueIdentifier",
        "aws:TagKeys",
        "aws:PrincipalTag/${TagKey}",
        "aws:RequestTag/${TagKey}",
        "sts:TransitiveTagKeys"
      ]
    },
    "AssumeRoleWithWebIdentity": {
      "url": "https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html",
      "description": "Returns a set of temporary security credentials for users who have been authenticated in a mobile or web application with a web identity provider",
      "accessLevel": "Write",
      "resourceTypes": {
        "role": {
          "required": true
        }
      },
      "conditions": [
        "cognito-identity.amazonaws.com:amr",
        "cognito-identity.amazonaws.com:aud",
        "cognito-identity.amazonaws.com:sub",
        "www.amazon.com:app_id",
        "www.amazon.com:user_id",
        "graph.facebook.com:app_id",
        "graph.facebook.com:id",
        "accounts.google.com:aud",
        "accounts.google.com:oaud",
        "accounts.google.com:sub",
        "aws:TagKeys",
        "aws:PrincipalTag/${TagKey}",
        "aws:RequestTag/${TagKey}",
        "sts:TransitiveTagKeys"
      ]
    },
    "DecodeAuthorizationMessage": {
      "url": "https://docs.aws.amazon.com/STS/latest/APIReference/API_DecodeAuthorizationMessage.html",
      "description": "Decodes additional information about the authorization status of a request from an encoded message returned in response to an AWS request",
      "accessLevel": "Write"
    },
    "GetAccessKeyInfo": {
      "url": "https://docs.aws.amazon.com/STS/latest/APIReference/API_GetAccessKeyInfo.html",
      "description": "Returns details about the access key id passed as a parameter to the request.",
      "accessLevel": "Read"
    },
    "GetCallerIdentity": {
      "url": "https://docs.aws.amazon.com/STS/latest/APIReference/API_GetCallerIdentity.html",
      "description": "Returns details about the IAM identity whose credentials are used to call the API",
      "accessLevel": "Read"
    },
    "GetFederationToken": {
      "url": "https://docs.aws.amazon.com/STS/latest/APIReference/API_GetFederationToken.html",
      "description": "Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a federated user",
      "accessLevel": "Read",
      "resourceTypes": {
        "user": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:PrincipalTag/${TagKey}",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "GetServiceBearerToken": {
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_bearer.html",
      "description": "Returns a STS bearer token for an AWS root user, IAM role, or an IAM user",
      "accessLevel": "Read"
    },
    "GetSessionToken": {
      "url": "https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html",
      "description": "Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for an AWS account or IAM user",
      "accessLevel": "Read"
    },
    "TagSession": {
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html",
      "description": "Grants permission to add tags to a STS session",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "role": {
          "required": false
        },
        "user": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:PrincipalTag/${TagKey}",
        "aws:RequestTag/${TagKey}",
        "sts:TransitiveTagKeys"
      ]
    }
  };
  public resourceTypes : ResourceTypes = {
    "role": {
      "name": "role",
      "arn": "arn:${Partition}:iam::${Account}:role/${RoleNameWithPath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "user": {
      "name": "user",
      "arn": "arn:${Partition}:iam::${Account}:user/${UserNameWithPath}",
      "conditionKeys": []
    }
  };

  /**
   * Returns a set of temporary security credentials that you can use to access AWS resources that you might not normally have access to
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html
   */
  public assumeRole () {
    this.add('sts:AssumeRole');
    return this;
  }

  /**
   * Returns a set of temporary security credentials for users who have been authenticated via a SAML authentication response
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithSAML.html
   */
  public assumeRoleWithSAML () {
    this.add('sts:AssumeRoleWithSAML');
    return this;
  }

  /**
   * Returns a set of temporary security credentials for users who have been authenticated in a mobile or web application with a web identity provider
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html
   */
  public assumeRoleWithWebIdentity () {
    this.add('sts:AssumeRoleWithWebIdentity');
    return this;
  }

  /**
   * Decodes additional information about the authorization status of a request from an encoded message returned in response to an AWS request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_DecodeAuthorizationMessage.html
   */
  public decodeAuthorizationMessage () {
    this.add('sts:DecodeAuthorizationMessage');
    return this;
  }

  /**
   * Returns details about the access key id passed as a parameter to the request.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_GetAccessKeyInfo.html
   */
  public getAccessKeyInfo () {
    this.add('sts:GetAccessKeyInfo');
    return this;
  }

  /**
   * Returns details about the IAM identity whose credentials are used to call the API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_GetCallerIdentity.html
   */
  public getCallerIdentity () {
    this.add('sts:GetCallerIdentity');
    return this;
  }

  /**
   * Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a federated user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_GetFederationToken.html
   */
  public getFederationToken () {
    this.add('sts:GetFederationToken');
    return this;
  }

  /**
   * Returns a STS bearer token for an AWS root user, IAM role, or an IAM user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_bearer.html
   */
  public getServiceBearerToken () {
    this.add('sts:GetServiceBearerToken');
    return this;
  }

  /**
   * Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for an AWS account or IAM user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html
   */
  public getSessionToken () {
    this.add('sts:GetSessionToken');
    return this;
  }

  /**
   * Grants permission to add tags to a STS session
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html
   */
  public tagSession () {
    this.add('sts:TagSession');
    return this;
  }
}
