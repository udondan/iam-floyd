import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service sts
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecuritytokenservice.html
 */
export class Sts extends PolicyStatement {
  public servicePrefix = 'sts';
  public actions: Actions = {
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
  public resourceTypes: ResourceTypes = {
    "role": {
      "name": "role",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html",
      "arn": "arn:${Partition}:iam:${Region}:${Account}:role/${RoleNameWithPath}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "user": {
      "name": "user",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html",
      "arn": "arn:${Partition}:iam:${Region}:${Account}:user/${UserNameWithPath}",
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
  public assumeRole() {
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
  public assumeRoleWithSAML() {
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
  public assumeRoleWithWebIdentity() {
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
  public decodeAuthorizationMessage() {
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
  public getAccessKeyInfo() {
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
  public getCallerIdentity() {
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
  public getFederationToken() {
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
  public getServiceBearerToken() {
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
  public getSessionToken() {
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
  public tagSession() {
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
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onRole(roleNameWithPath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam:${Region}:${Account}:role/${RoleNameWithPath}';
    arn = arn.replace('${RoleNameWithPath}', roleNameWithPath);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
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
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onUser(userNameWithPath: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam:${Region}:${Account}:user/${UserNameWithPath}';
    arn = arn.replace('${UserNameWithPath}', userNameWithPath);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the Google application ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifGoogleAud(value: string | string[], operator?: string) {
    const props: any = {};
    props[`accounts.google.com:aud`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the Google audience
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_oaud
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifGoogleOaud(value: string | string[], operator?: string) {
    const props: any = {};
    props[`accounts.google.com:oaud`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the subject of the claim (the Google user ID)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sub
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifGoogleSub(value: string | string[], operator?: string) {
    const props: any = {};
    props[`accounts.google.com:sub`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the login information for Amazon Cognito
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_amr
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifCognitoAmr(value: string | string[], operator?: string) {
    const props: any = {};
    props[`cognito-identity.amazonaws.com:amr`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the Amazon Cognito identity pool ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifCognitoAud(value: string | string[], operator?: string) {
    const props: any = {};
    props[`cognito-identity.amazonaws.com:aud`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the subject of the claim (the Amazon Cognito user ID)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sub
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifCognitoSub(value: string | string[], operator?: string) {
    const props: any = {};
    props[`cognito-identity.amazonaws.com:sub`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the Facebook application ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifFacebookAppId(value: string | string[], operator?: string) {
    const props: any = {};
    props[`graph.facebook.com:app_id`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the Facebook user ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifFacebookId(value: string | string[], operator?: string) {
    const props: any = {};
    props[`graph.facebook.com:id`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the endpoint URL to which SAML assertions are presented
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifAud(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:aud`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_cn
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifCn(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:cn`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the commonName attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_commonname
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifCommonName(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:commonName`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the principal that was used to assume the role
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_doc
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifDoc(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:doc`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_eduorghomepageuri
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEduorghomepageuri(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:eduorghomepageuri`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEduorgidentityauthnpolicyuri(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:eduorgidentityauthnpolicyuri`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_eduorglegalname
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEduorglegalname(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:eduorglegalname`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_eduorgsuperioruri
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEduorgsuperioruri(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:eduorgsuperioruri`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_eduorgwhitepagesuri
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEduorgwhitepagesuri(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:eduorgwhitepagesuri`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonaffiliation
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEdupersonaffiliation(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:edupersonaffiliation`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonassurance
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEdupersonassurance(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:edupersonassurance`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonentitlement
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEdupersonentitlement(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:edupersonentitlement`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonnickname
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEdupersonnickname(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:edupersonnickname`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonorgdn
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEdupersonorgdn(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:edupersonorgdn`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonorgunitdn
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEdupersonorgunitdn(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:edupersonorgunitdn`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonprimaryaffiliation
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEdupersonprimaryaffiliation(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:edupersonprimaryaffiliation`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonprimaryorgunitdn
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEdupersonprimaryorgunitdn(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:edupersonprimaryorgunitdn`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonprincipalname
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEdupersonprincipalname(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:edupersonprincipalname`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonscopedaffiliation
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEdupersonscopedaffiliation(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:edupersonscopedaffiliation`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersontargetedid
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEdupersontargetedid(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:edupersontargetedid`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the givenName attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_givenname
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifGivenName(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:givenName`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the issuer, which is represented by a URN
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_iss
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifIss(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:iss`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the mail attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_mail
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifMail(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:mail`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the name attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_name
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifName(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:name`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the hash value of the issuer, account ID, and friendly name
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_namequalifier
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifNamequalifier(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:namequalifier`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the organizationStatus attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_organizationstatus
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifOrganizationStatus(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:organizationStatus`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the primaryGroupSID attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_primarygroupsid
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifPrimaryGroupSID(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:primaryGroupSID`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the subject of the claim (the SAML user ID)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sub
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifSub(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:sub`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the value persistent, transient, or the full Format URI
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_subtype
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifSubType(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:sub_type`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the surname attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_surname
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifSurname(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:surname`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the uid attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_uid
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifUid(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:uid`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the uid attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_x500uniqueidentifier
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifX500UniqueIdentifier(value: string | string[], operator?: string) {
    const props: any = {};
    props[`saml:x500UniqueIdentifier`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the unique identifier required when you assume a role in another account
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_externalid
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifExternalId(value: string | string[], operator?: string) {
    const props: any = {};
    props[`sts:ExternalId`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the role session name required when you assume a role
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_rolesessionname
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifRoleSessionName(value: string | string[], operator?: string) {
    const props: any = {};
    props[`sts:RoleSessionName`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the transitive tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_TransitiveTagKeys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifTransitiveTagKeys(value: string | string[], operator?: string) {
    const props: any = {};
    props[`sts:TransitiveTagKeys`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the Login with Amazon application ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifAmazonAppId(value: string | string[], operator?: string) {
    const props: any = {};
    props[`www.amazon.com:app_id`] = value;
    return this.if(operator || 'StringEquals', props);
  }

  /**
   * Filters actions based on the Login with Amazon user ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifAmazonUserId(value: string | string[], operator?: string) {
    const props: any = {};
    props[`www.amazon.com:user_id`] = value;
    return this.if(operator || 'StringEquals', props);
  }
}
