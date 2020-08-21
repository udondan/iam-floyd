import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [sts](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecuritytokenservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sts extends PolicyStatement {
  public servicePrefix = 'sts';
  protected actionList: Actions = {
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
        "sts:RoleSessionName",
        "iam:ResourceTag/${TagKey}"
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
  protected resourceTypes: ResourceTypes = {
    "role": {
      "name": "role",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html",
      "arn": "arn:${Partition}:iam::${Account}:role/${RoleNameWithPath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "user": {
      "name": "user",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html",
      "arn": "arn:${Partition}:iam::${Account}:user/${UserNameWithPath}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [sts](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecuritytokenservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Returns a set of temporary security credentials that you can use to access AWS resources that you might not normally have access to
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsPrincipalTag()
   * - .ifAwsRequestTag()
   * - .ifTransitiveTagKeys()
   * - .ifExternalId()
   * - .ifRoleSessionName()
   * - .ifResourceTag()
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html
   */
  public toAssumeRole() {
    this.add('sts:AssumeRole');
    return this;
  }

  /**
   * Returns a set of temporary security credentials for users who have been authenticated via a SAML authentication response
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifNamequalifier()
   * - .ifSub()
   * - .ifSubType()
   * - .ifAud()
   * - .ifIss()
   * - .ifDoc()
   * - .ifCn()
   * - .ifCommonName()
   * - .ifEduorghomepageuri()
   * - .ifEduorgidentityauthnpolicyuri()
   * - .ifEduorglegalname()
   * - .ifEduorgsuperioruri()
   * - .ifEduorgwhitepagesuri()
   * - .ifEdupersonaffiliation()
   * - .ifEdupersonassurance()
   * - .ifEdupersonentitlement()
   * - .ifEdupersonnickname()
   * - .ifEdupersonorgdn()
   * - .ifEdupersonorgunitdn()
   * - .ifEdupersonprimaryaffiliation()
   * - .ifEdupersonprimaryorgunitdn()
   * - .ifEdupersonprincipalname()
   * - .ifEdupersonscopedaffiliation()
   * - .ifEdupersontargetedid()
   * - .ifGivenName()
   * - .ifMail()
   * - .ifName()
   * - .ifOrganizationStatus()
   * - .ifPrimaryGroupSID()
   * - .ifSurname()
   * - .ifUid()
   * - .ifX500UniqueIdentifier()
   * - .ifAwsTagKeys()
   * - .ifAwsPrincipalTag()
   * - .ifAwsRequestTag()
   * - .ifTransitiveTagKeys()
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithSAML.html
   */
  public toAssumeRoleWithSAML() {
    this.add('sts:AssumeRoleWithSAML');
    return this;
  }

  /**
   * Returns a set of temporary security credentials for users who have been authenticated in a mobile or web application with a web identity provider
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCognitoAmr()
   * - .ifCognitoAud()
   * - .ifCognitoSub()
   * - .ifAmazonAppId()
   * - .ifAmazonUserId()
   * - .ifFacebookAppId()
   * - .ifFacebookId()
   * - .ifGoogleAud()
   * - .ifGoogleOaud()
   * - .ifGoogleSub()
   * - .ifAwsTagKeys()
   * - .ifAwsPrincipalTag()
   * - .ifAwsRequestTag()
   * - .ifTransitiveTagKeys()
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html
   */
  public toAssumeRoleWithWebIdentity() {
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
  public toDecodeAuthorizationMessage() {
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
  public toGetAccessKeyInfo() {
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
  public toGetCallerIdentity() {
    this.add('sts:GetCallerIdentity');
    return this;
  }

  /**
   * Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a federated user
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsPrincipalTag()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_GetFederationToken.html
   */
  public toGetFederationToken() {
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
  public toGetServiceBearerToken() {
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
  public toGetSessionToken() {
    this.add('sts:GetSessionToken');
    return this;
  }

  /**
   * Grants permission to add tags to a STS session
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsPrincipalTag()
   * - .ifAwsRequestTag()
   * - .ifTransitiveTagKeys()
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html
   */
  public toTagSession() {
    this.add('sts:TagSession');
    return this;
  }

  /**
   * Adds a resource of type role to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
   *
   * @param roleNameWithPath - Identifier for the roleNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRole(roleNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:role/${RoleNameWithPath}';
    arn = arn.replace('${RoleNameWithPath}', roleNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html
   *
   * @param userNameWithPath - Identifier for the userNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onUser(userNameWithPath: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:user/${UserNameWithPath}';
    arn = arn.replace('${UserNameWithPath}', userNameWithPath);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the Google application ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGoogleAud(value: string | string[], operator?: string) {
    return this.if(`accounts.google.com:aud`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the Google audience
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_oaud
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGoogleOaud(value: string | string[], operator?: string) {
    return this.if(`accounts.google.com:oaud`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the subject of the claim (the Google user ID)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sub
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGoogleSub(value: string | string[], operator?: string) {
    return this.if(`accounts.google.com:sub`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the IdP that was used to authenticate the user
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_federatedprovider
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsFederatedProvider(value: string | string[], operator?: string) {
    return this.if(`aws:FederatedProvider`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tag associated with the principal that is making the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-principaltag
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithSAML()
   * - .toAssumeRoleWithWebIdentity()
   * - .toGetFederationToken()
   * - .toTagSession()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsPrincipalTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:PrincipalTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithSAML()
   * - .toAssumeRoleWithWebIdentity()
   * - .toGetFederationToken()
   * - .toTagSession()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - role
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithSAML()
   * - .toAssumeRoleWithWebIdentity()
   * - .toGetFederationToken()
   * - .toTagSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the login information for Amazon Cognito
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_amr
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCognitoAmr(value: string | string[], operator?: string) {
    return this.if(`cognito-identity.amazonaws.com:amr`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the Amazon Cognito identity pool ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCognitoAud(value: string | string[], operator?: string) {
    return this.if(`cognito-identity.amazonaws.com:aud`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the subject of the claim (the Amazon Cognito user ID)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sub
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCognitoSub(value: string | string[], operator?: string) {
    return this.if(`cognito-identity.amazonaws.com:sub`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the Facebook application ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFacebookAppId(value: string | string[], operator?: string) {
    return this.if(`graph.facebook.com:app_id`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the Facebook user ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFacebookId(value: string | string[], operator?: string) {
    return this.if(`graph.facebook.com:id`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tags that are attached to the role that is being assumed
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_ResourceTag
   *
   * Applies to actions:
   * - .toAssumeRole()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`iam:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the endpoint URL to which SAML assertions are presented
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAud(value: string | string[], operator?: string) {
    return this.if(`saml:aud`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_cn
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCn(value: string | string[], operator?: string) {
    return this.if(`saml:cn`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the commonName attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_commonname
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCommonName(value: string | string[], operator?: string) {
    return this.if(`saml:commonName`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the principal that was used to assume the role
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_doc
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDoc(value: string | string[], operator?: string) {
    return this.if(`saml:doc`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_eduorghomepageuri
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEduorghomepageuri(value: string | string[], operator?: string) {
    return this.if(`saml:eduorghomepageuri`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEduorgidentityauthnpolicyuri(value: string | string[], operator?: string) {
    return this.if(`saml:eduorgidentityauthnpolicyuri`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_eduorglegalname
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEduorglegalname(value: string | string[], operator?: string) {
    return this.if(`saml:eduorglegalname`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_eduorgsuperioruri
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEduorgsuperioruri(value: string | string[], operator?: string) {
    return this.if(`saml:eduorgsuperioruri`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_eduorgwhitepagesuri
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEduorgwhitepagesuri(value: string | string[], operator?: string) {
    return this.if(`saml:eduorgwhitepagesuri`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonaffiliation
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEdupersonaffiliation(value: string | string[], operator?: string) {
    return this.if(`saml:edupersonaffiliation`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonassurance
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEdupersonassurance(value: string | string[], operator?: string) {
    return this.if(`saml:edupersonassurance`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonentitlement
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEdupersonentitlement(value: string | string[], operator?: string) {
    return this.if(`saml:edupersonentitlement`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonnickname
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEdupersonnickname(value: string | string[], operator?: string) {
    return this.if(`saml:edupersonnickname`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonorgdn
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEdupersonorgdn(value: string | string[], operator?: string) {
    return this.if(`saml:edupersonorgdn`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonorgunitdn
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEdupersonorgunitdn(value: string | string[], operator?: string) {
    return this.if(`saml:edupersonorgunitdn`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonprimaryaffiliation
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEdupersonprimaryaffiliation(value: string | string[], operator?: string) {
    return this.if(`saml:edupersonprimaryaffiliation`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonprimaryorgunitdn
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEdupersonprimaryorgunitdn(value: string | string[], operator?: string) {
    return this.if(`saml:edupersonprimaryorgunitdn`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonprincipalname
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEdupersonprincipalname(value: string | string[], operator?: string) {
    return this.if(`saml:edupersonprincipalname`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonscopedaffiliation
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEdupersonscopedaffiliation(value: string | string[], operator?: string) {
    return this.if(`saml:edupersonscopedaffiliation`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersontargetedid
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifEdupersontargetedid(value: string | string[], operator?: string) {
    return this.if(`saml:edupersontargetedid`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the givenName attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_givenname
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGivenName(value: string | string[], operator?: string) {
    return this.if(`saml:givenName`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the issuer, which is represented by a URN
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_iss
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIss(value: string | string[], operator?: string) {
    return this.if(`saml:iss`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the mail attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_mail
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifMail(value: string | string[], operator?: string) {
    return this.if(`saml:mail`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the name attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_name
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifName(value: string | string[], operator?: string) {
    return this.if(`saml:name`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the hash value of the issuer, account ID, and friendly name
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_namequalifier
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifNamequalifier(value: string | string[], operator?: string) {
    return this.if(`saml:namequalifier`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the organizationStatus attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_organizationstatus
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOrganizationStatus(value: string | string[], operator?: string) {
    return this.if(`saml:organizationStatus`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the primaryGroupSID attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_primarygroupsid
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrimaryGroupSID(value: string | string[], operator?: string) {
    return this.if(`saml:primaryGroupSID`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the subject of the claim (the SAML user ID)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sub
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSub(value: string | string[], operator?: string) {
    return this.if(`saml:sub`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the value persistent, transient, or the full Format URI
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_subtype
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubType(value: string | string[], operator?: string) {
    return this.if(`saml:sub_type`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the surname attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_surname
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSurname(value: string | string[], operator?: string) {
    return this.if(`saml:surname`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the uid attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_uid
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUid(value: string | string[], operator?: string) {
    return this.if(`saml:uid`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the uid attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_x500uniqueidentifier
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifX500UniqueIdentifier(value: string | string[], operator?: string) {
    return this.if(`saml:x500UniqueIdentifier`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the unique identifier required when you assume a role in another account
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_externalid
   *
   * Applies to actions:
   * - .toAssumeRole()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExternalId(value: string | string[], operator?: string) {
    return this.if(`sts:ExternalId`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the role session name required when you assume a role
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_rolesessionname
   *
   * Applies to actions:
   * - .toAssumeRole()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRoleSessionName(value: string | string[], operator?: string) {
    return this.if(`sts:RoleSessionName`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the transitive tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_TransitiveTagKeys
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithSAML()
   * - .toAssumeRoleWithWebIdentity()
   * - .toTagSession()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTransitiveTagKeys(value: string | string[], operator?: string) {
    return this.if(`sts:TransitiveTagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the Login with Amazon application ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAmazonAppId(value: string | string[], operator?: string) {
    return this.if(`www.amazon.com:app_id`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the Login with Amazon user ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAmazonUserId(value: string | string[], operator?: string) {
    return this.if(`www.amazon.com:user_id`, value, operator || 'StringLike');
  }
}
