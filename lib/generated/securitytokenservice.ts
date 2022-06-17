import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [sts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecuritytokenservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sts extends PolicyStatement {
  public servicePrefix = 'sts';

  /**
   * Statement provider for service [sts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecuritytokenservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to obtain a set of temporary security credentials that you can use to access AWS resources that you might not normally have access to
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
   * - .ifIamResourceTag()
   * - .ifSourceIdentity()
   * - .ifAwsSourceIdentity()
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html
   */
  public toAssumeRole() {
    return this.to('AssumeRole');
  }

  /**
   * Grants permission to obtain a set of temporary security credentials for users who have been authenticated via a SAML authentication response
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSamlNamequalifier()
   * - .ifSamlSub()
   * - .ifSamlSubType()
   * - .ifSamlAud()
   * - .ifSamlIss()
   * - .ifSamlDoc()
   * - .ifSamlCn()
   * - .ifSamlCommonName()
   * - .ifSamlEduorghomepageuri()
   * - .ifSamlEduorgidentityauthnpolicyuri()
   * - .ifSamlEduorglegalname()
   * - .ifSamlEduorgsuperioruri()
   * - .ifSamlEduorgwhitepagesuri()
   * - .ifSamlEdupersonaffiliation()
   * - .ifSamlEdupersonassurance()
   * - .ifSamlEdupersonentitlement()
   * - .ifSamlEdupersonnickname()
   * - .ifSamlEdupersonorgdn()
   * - .ifSamlEdupersonorgunitdn()
   * - .ifSamlEdupersonprimaryaffiliation()
   * - .ifSamlEdupersonprimaryorgunitdn()
   * - .ifSamlEdupersonprincipalname()
   * - .ifSamlEdupersonscopedaffiliation()
   * - .ifSamlEdupersontargetedid()
   * - .ifSamlGivenName()
   * - .ifSamlMail()
   * - .ifSamlName()
   * - .ifSamlOrganizationStatus()
   * - .ifSamlPrimaryGroupSID()
   * - .ifSamlSurname()
   * - .ifSamlUid()
   * - .ifSamlX500UniqueIdentifier()
   * - .ifAwsTagKeys()
   * - .ifAwsPrincipalTag()
   * - .ifAwsRequestTag()
   * - .ifTransitiveTagKeys()
   * - .ifSourceIdentity()
   * - .ifRoleSessionName()
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithSAML.html
   */
  public toAssumeRoleWithSAML() {
    return this.to('AssumeRoleWithSAML');
  }

  /**
   * Grants permission to obtain a set of temporary security credentials for users who have been authenticated in a mobile or web application with a web identity provider
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
   * - .ifSourceIdentity()
   * - .ifRoleSessionName()
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html
   */
  public toAssumeRoleWithWebIdentity() {
    return this.to('AssumeRoleWithWebIdentity');
  }

  /**
   * Grants permission to decode additional information about the authorization status of a request from an encoded message returned in response to an AWS request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_DecodeAuthorizationMessage.html
   */
  public toDecodeAuthorizationMessage() {
    return this.to('DecodeAuthorizationMessage');
  }

  /**
   * Grants permission to obtain details about the access key id passed as a parameter to the request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_GetAccessKeyInfo.html
   */
  public toGetAccessKeyInfo() {
    return this.to('GetAccessKeyInfo');
  }

  /**
   * Grants permission to obtain details about the IAM identity whose credentials are used to call the API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_GetCallerIdentity.html
   */
  public toGetCallerIdentity() {
    return this.to('GetCallerIdentity');
  }

  /**
   * Grants permission to obtain a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a federated user
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
    return this.to('GetFederationToken');
  }

  /**
   * Grants permission to obtain a STS bearer token for an AWS root user, IAM role, or an IAM user
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAWSServiceName()
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_bearer.html
   */
  public toGetServiceBearerToken() {
    return this.to('GetServiceBearerToken');
  }

  /**
   * Grants permission to obtain a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for an AWS account or IAM user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html
   */
  public toGetSessionToken() {
    return this.to('GetSessionToken');
  }

  /**
   * Grants permission to set a source identity on a STS session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifSourceIdentity()
   * - .ifAwsSourceIdentity()
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_control-access_monitor.html#id_credentials_temp_control-access_monitor-perms
   */
  public toSetSourceIdentity() {
    return this.to('SetSourceIdentity');
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
    return this.to('TagSession');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssumeRole',
      'AssumeRoleWithSAML',
      'AssumeRoleWithWebIdentity',
      'DecodeAuthorizationMessage',
      'SetSourceIdentity'
    ],
    Read: [
      'GetAccessKeyInfo',
      'GetCallerIdentity',
      'GetFederationToken',
      'GetServiceBearerToken',
      'GetSessionToken'
    ],
    Tagging: [
      'TagSession'
    ]
  };

  /**
   * Adds a resource of type role to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
   *
   * @param roleNameWithPath - Identifier for the roleNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRole(roleNameWithPath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || Sts.defaultPartition }:iam::${ account || '*' }:role/${ roleNameWithPath }`);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html
   *
   * @param userNameWithPath - Identifier for the userNameWithPath.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onUser(userNameWithPath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || Sts.defaultPartition }:iam::${ account || '*' }:user/${ userNameWithPath }`);
  }

  /**
   * Filters access by the Google application ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGoogleAud(value: string | string[], operator?: Operator | string) {
    return this.if(`accounts.google.com:aud`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the Google audience
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_oaud
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGoogleOaud(value: string | string[], operator?: Operator | string) {
    return this.if(`accounts.google.com:oaud`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the subject of the claim (the Google user ID)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sub
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGoogleSub(value: string | string[], operator?: Operator | string) {
    return this.if(`accounts.google.com:sub`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the IdP that was used to authenticate the user
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_federatedprovider
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsFederatedProvider(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:FederatedProvider`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the login information for Amazon Cognito
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_amr
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCognitoAmr(value: string | string[], operator?: Operator | string) {
    return this.if(`cognito-identity.amazonaws.com:amr`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the Amazon Cognito identity pool ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCognitoAud(value: string | string[], operator?: Operator | string) {
    return this.if(`cognito-identity.amazonaws.com:aud`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the subject of the claim (the Amazon Cognito user ID)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sub
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCognitoSub(value: string | string[], operator?: Operator | string) {
    return this.if(`cognito-identity.amazonaws.com:sub`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the Facebook application ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFacebookAppId(value: string | string[], operator?: Operator | string) {
    return this.if(`graph.facebook.com:app_id`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the Facebook user ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFacebookId(value: string | string[], operator?: Operator | string) {
    return this.if(`graph.facebook.com:id`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tags that are attached to the role that is being assumed
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
  public ifIamResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`iam:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the endpoint URL to which SAML assertions are presented
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlAud(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:aud`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_cn
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlCn(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:cn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the commonName attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_commonname
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlCommonName(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:commonName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by on the principal that was used to assume the role
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_doc
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlDoc(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:doc`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_eduorghomepageuri
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEduorghomepageuri(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:eduorghomepageuri`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEduorgidentityauthnpolicyuri(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:eduorgidentityauthnpolicyuri`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_eduorglegalname
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEduorglegalname(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:eduorglegalname`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_eduorgsuperioruri
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEduorgsuperioruri(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:eduorgsuperioruri`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduOrg attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_eduorgwhitepagesuri
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEduorgwhitepagesuri(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:eduorgwhitepagesuri`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonaffiliation
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEdupersonaffiliation(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:edupersonaffiliation`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonassurance
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEdupersonassurance(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:edupersonassurance`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonentitlement
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEdupersonentitlement(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:edupersonentitlement`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonnickname
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEdupersonnickname(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:edupersonnickname`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonorgdn
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEdupersonorgdn(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:edupersonorgdn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonorgunitdn
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEdupersonorgunitdn(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:edupersonorgunitdn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonprimaryaffiliation
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEdupersonprimaryaffiliation(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:edupersonprimaryaffiliation`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonprimaryorgunitdn
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEdupersonprimaryorgunitdn(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:edupersonprimaryorgunitdn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonprincipalname
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEdupersonprincipalname(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:edupersonprincipalname`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersonscopedaffiliation
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEdupersonscopedaffiliation(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:edupersonscopedaffiliation`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the eduPerson attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_edupersontargetedid
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlEdupersontargetedid(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:edupersontargetedid`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the givenName attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_givenname
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlGivenName(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:givenName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by on the issuer, which is represented by a URN
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_iss
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlIss(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:iss`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the mail attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_mail
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlMail(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:mail`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the name attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_name
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlName(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:name`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the hash value of the issuer, account ID, and friendly name
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_namequalifier
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlNamequalifier(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:namequalifier`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the organizationStatus attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_organizationstatus
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlOrganizationStatus(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:organizationStatus`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the primaryGroupSID attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_primarygroupsid
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlPrimaryGroupSID(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:primaryGroupSID`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the subject of the claim (the SAML user ID)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sub
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlSub(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:sub`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the value persistent, transient, or the full Format URI
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_subtype
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlSubType(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:sub_type`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the surname attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_surname
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlSurname(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:surname`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the uid attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_uid
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlUid(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:uid`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the uid attribute
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_x500uniqueidentifier
   *
   * Applies to actions:
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlX500UniqueIdentifier(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:x500UniqueIdentifier`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the service that is obtaining a bearer token
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_awsservicename
   *
   * Applies to actions:
   * - .toGetServiceBearerToken()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAWSServiceName(value: string | string[], operator?: Operator | string) {
    return this.if(`AWSServiceName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the unique identifier required when you assume a role in another account
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_externalid
   *
   * Applies to actions:
   * - .toAssumeRole()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifExternalId(value: string | string[], operator?: Operator | string) {
    return this.if(`ExternalId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the role session name required when you assume a role
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_rolesessionname
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithSAML()
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRoleSessionName(value: string | string[], operator?: Operator | string) {
    return this.if(`RoleSessionName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the source identity that is passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sourceidentity
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithSAML()
   * - .toAssumeRoleWithWebIdentity()
   * - .toSetSourceIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSourceIdentity(value: string | string[], operator?: Operator | string) {
    return this.if(`SourceIdentity`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the transitive tag keys that are passed in the request
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
  public ifTransitiveTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`TransitiveTagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the Login with Amazon application ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAmazonAppId(value: string | string[], operator?: Operator | string) {
    return this.if(`www.amazon.com:app_id`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the Login with Amazon user ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAmazonUserId(value: string | string[], operator?: Operator | string) {
    return this.if(`www.amazon.com:user_id`, value, operator || 'StringLike');
  }
}
