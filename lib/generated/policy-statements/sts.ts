import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [sts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_sts.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sts extends PolicyStatement {
  public servicePrefix = 'sts';

  /**
   * Statement provider for service [sts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_sts.html).
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
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html
   */
  public toAssumeRoleWithWebIdentity() {
    return this.to('AssumeRoleWithWebIdentity');
  }

  /**
   * Grants permission to obtain a set of temporary security credentials that you can use to perform privileged tasks in member accounts in your organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoot.html
   */
  public toAssumeRoot() {
    return this.to('AssumeRoot');
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
   * Returns temporary security credentials for accessing an AWS account after temporary delegation request approval. This API requires the tradeInToken provided upon request delegation approval and is intended to be used only by Amazon or AWS Partners
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_GetDelegatedAccessToken.html
   */
  public toGetDelegatedAccessToken() {
    return this.to('GetDelegatedAccessToken');
  }

  /**
   * Grants permission to obtain a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a federated user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_GetFederationToken.html
   */
  public toGetFederationToken() {
    return this.to('GetFederationToken');
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
   * Grants permission to obtain a short-lived, publicly verifiable JSON Web Token (JWT) that represents the calling IAM principal's identity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifDurationSeconds()
   * - .ifIdentityTokenAudience()
   * - .ifSigningAlgorithm()
   *
   * https://docs.aws.amazon.com/STS/latest/APIReference/API_GetWebIdentityToken.html
   */
  public toGetWebIdentityToken() {
    return this.to('GetWebIdentityToken');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssumeRole',
      'AssumeRoleWithSAML',
      'AssumeRoleWithWebIdentity',
      'AssumeRoot',
      'DecodeAuthorizationMessage',
      'GetDelegatedAccessToken',
      'GetFederationToken',
      'GetWebIdentityToken'
    ],
    Read: [
      'GetAccessKeyInfo',
      'GetCallerIdentity',
      'GetSessionToken'
    ]
  };

  /**
   * Adds a resource of type context-provider to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns
   *
   * @param contextProviderName - Identifier for the contextProviderName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onContextProvider(contextProviderName: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::aws:contextProvider/${ contextProviderName }`);
  }

  /**
   * Adds a resource of type federated-user to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns
   *
   * @param federatedUserName - Identifier for the federatedUserName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onFederatedUser(federatedUserName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sts::${ account ?? this.defaultAccount }:federated-user/${ federatedUserName }`);
  }

  /**
   * Adds a resource of type role to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
   *
   * @param roleNameWithPath - Identifier for the roleNameWithPath.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifIamResourceTag()
   */
  public onRole(roleNameWithPath: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:role/${ roleNameWithPath }`);
  }

  /**
   * Adds a resource of type root-user to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onRootUser(account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:iam::${ account ?? this.defaultAccount }:root`);
  }

  /**
   * Adds a resource of type self-session to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSelfSession(account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sts::${ account ?? this.defaultAccount }:self`);
  }

  /**
   * Filters access by the Google application ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGoogleAud(value: string | string[], operator?: Operator | string) {
    return this.if(`accounts.google.com:aud`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Google Cloud or Google Workspace organization number
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifGoogleGoogleOrganizationNumber(value: number | number[], operator?: Operator | string) {
    return this.if(`accounts.google.com:google/organization_number`, value, operator ?? 'NumericEquals');
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
    return this.if(`accounts.google.com:oaud`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the subject of the claim (the Google user ID)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sub
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGoogleSub(value: string | string[], operator?: Operator | string) {
    return this.if(`accounts.google.com:sub`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the git branch that triggered the Buildkite build
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteDevBuildBranch(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.dev:build_branch`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite cluster ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteDevClusterId(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.dev:cluster_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite cluster name
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteDevClusterName(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.dev:cluster_name`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite organization ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteDevOrganizationId(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.dev:organization_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite organization slug
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteDevOrganizationSlug(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.dev:organization_slug`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite pipeline ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteDevPipelineId(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.dev:pipeline_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite pipeline slug
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteDevPipelineSlug(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.dev:pipeline_slug`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the git branch that triggered the Buildkite build
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteSiteBuildBranch(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.site:build_branch`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite cluster ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteSiteClusterId(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.site:cluster_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite cluster name
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteSiteClusterName(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.site:cluster_name`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite organization ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteSiteOrganizationId(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.site:organization_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite organization slug
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteSiteOrganizationSlug(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.site:organization_slug`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite pipeline ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteSitePipelineId(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.site:pipeline_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite pipeline slug
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentDomainBuildkiteSitePipelineSlug(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.\${Domain}.buildkite.site:pipeline_slug`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the git branch that triggered the Buildkite build
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentBuildkiteComBuildBranch(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.buildkite.com:build_branch`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite cluster ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentBuildkiteComClusterId(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.buildkite.com:cluster_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite cluster name
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentBuildkiteComClusterName(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.buildkite.com:cluster_name`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite organization ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentBuildkiteComOrganizationId(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.buildkite.com:organization_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite organization slug
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentBuildkiteComOrganizationSlug(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.buildkite.com:organization_slug`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite pipeline ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentBuildkiteComPipelineId(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.buildkite.com:pipeline_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Buildkite pipeline slug
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAgentBuildkiteComPipelineSlug(value: string | string[], operator?: Operator | string) {
    return this.if(`agent.buildkite.com:pipeline_slug`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithSAML()
   * - .toAssumeRoleWithWebIdentity()
   * - .toGetFederationToken()
   * - .toGetWebIdentityToken()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithSAML()
   * - .toAssumeRoleWithWebIdentity()
   *
   * Applies to resource types:
   * - role
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithSAML()
   * - .toAssumeRoleWithWebIdentity()
   * - .toGetFederationToken()
   * - .toGetWebIdentityToken()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the login information for Amazon Cognito
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_amr
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCognitoAmr(value: string | string[], operator?: Operator | string) {
    return this.if(`cognito-identity.amazonaws.com:amr`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Amazon Cognito identity pool ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_aud
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCognitoAud(value: string | string[], operator?: Operator | string) {
    return this.if(`cognito-identity.amazonaws.com:aud`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the subject of the claim (the Amazon Cognito user ID)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sub
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCognitoSub(value: string | string[], operator?: Operator | string) {
    return this.if(`cognito-identity.amazonaws.com:sub`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the personal account that initiated the workflow run
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGithubComEnterprisesEnterpriseNameActor(value: string | string[], operator?: Operator | string) {
    return this.if(`github.com/enterprises/\${EnterpriseName}:actor`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the personal account that initiated the workflow run
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGithubComEnterprisesEnterpriseNameActorId(value: string | string[], operator?: Operator | string) {
    return this.if(`github.com/enterprises/\${EnterpriseName}:actor_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the enterprise that contains the repository from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGithubComEnterprisesEnterpriseNameEnterpriseId(value: string | string[], operator?: Operator | string) {
    return this.if(`github.com/enterprises/\${EnterpriseName}:enterprise_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the environment used by the job
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGithubComEnterprisesEnterpriseNameEnvironment(value: string | string[], operator?: Operator | string) {
    return this.if(`github.com/enterprises/\${EnterpriseName}:environment`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the reference path to the reusable workflow for jobs using a reusable workflow
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGithubComEnterprisesEnterpriseNameJobWorkflowRef(value: string | string[], operator?: Operator | string) {
    return this.if(`github.com/enterprises/\${EnterpriseName}:job_workflow_ref`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the git ref (branch or tag) that triggered the workflow run
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGithubComEnterprisesEnterpriseNameRef(value: string | string[], operator?: Operator | string) {
    return this.if(`github.com/enterprises/\${EnterpriseName}:ref`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the repository from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGithubComEnterprisesEnterpriseNameRepository(value: string | string[], operator?: Operator | string) {
    return this.if(`github.com/enterprises/\${EnterpriseName}:repository`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the repository from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGithubComEnterprisesEnterpriseNameRepositoryId(value: string | string[], operator?: Operator | string) {
    return this.if(`github.com/enterprises/\${EnterpriseName}:repository_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the repository owner from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGithubComEnterprisesEnterpriseNameRepositoryOwnerId(value: string | string[], operator?: Operator | string) {
    return this.if(`github.com/enterprises/\${EnterpriseName}:repository_owner_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the workflow
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGithubComEnterprisesEnterpriseNameWorkflow(value: string | string[], operator?: Operator | string) {
    return this.if(`github.com/enterprises/\${EnterpriseName}:workflow`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the GitLab namespace (group) ID of the project running the CI/CD job
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGitlabComNamespaceId(value: string | string[], operator?: Operator | string) {
    return this.if(`gitlab.com:namespace_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the source that triggered the GitLab pipeline
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGitlabComPipelineSource(value: string | string[], operator?: Operator | string) {
    return this.if(`gitlab.com:pipeline_source`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the GitLab project ID running the CI/CD job
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGitlabComProjectId(value: string | string[], operator?: Operator | string) {
    return this.if(`gitlab.com:project_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by whether the GitLab git ref that triggered the job is protected
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGitlabComRefProtected(value: string | string[], operator?: Operator | string) {
    return this.if(`gitlab.com:ref_protected`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the GitLab runner environment for the CI/CD job
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGitlabComRunnerEnvironment(value: string | string[], operator?: Operator | string) {
    return this.if(`gitlab.com:runner_environment`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the GitLab user access level within the project
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGitlabComUserAccessLevel(value: string | string[], operator?: Operator | string) {
    return this.if(`gitlab.com:user_access_level`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the GitLab user email executing the CI/CD job
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGitlabComUserEmail(value: string | string[], operator?: Operator | string) {
    return this.if(`gitlab.com:user_email`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the GitLab user ID executing the CI/CD job
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGitlabComUserId(value: string | string[], operator?: Operator | string) {
    return this.if(`gitlab.com:user_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the GitLab username executing the CI/CD job
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifGitlabComUserLogin(value: string | string[], operator?: Operator | string) {
    return this.if(`gitlab.com:user_login`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Facebook application ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFacebookAppId(value: string | string[], operator?: Operator | string) {
    return this.if(`graph.facebook.com:app_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Facebook user ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFacebookId(value: string | string[], operator?: Operator | string) {
    return this.if(`graph.facebook.com:id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags that are attached to the role that is being assumed
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_ResourceTag
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithSAML()
   * - .toAssumeRoleWithWebIdentity()
   *
   * Applies to resource types:
   * - role
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIamResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`iam:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the OCI resource principal session token ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIdcsOciUniqueIdentifierIdentityOraclecloudComRpstId(value: string | string[], operator?: Operator | string) {
    return this.if(`idcs-\${OciUniqueIdentifier}.identity.oraclecloud.com:rpst_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the CircleCI project ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOidcCircleciComOrgOrgIdOidcCircleciComProjectId(value: string | string[], operator?: Operator | string) {
    return this.if(`oidc.circleci.com/org/\${OrgId}:oidc.circleci.com/project-id`, value, operator ?? 'StringLike');
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
    return this.if(`saml:aud`, value, operator ?? 'StringLike');
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
    return this.if(`saml:cn`, value, operator ?? 'StringLike');
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
    return this.if(`saml:commonName`, value, operator ?? 'StringLike');
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
    return this.if(`saml:doc`, value, operator ?? 'StringLike');
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
    return this.if(`saml:eduorghomepageuri`, value, operator ?? 'StringLike');
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
    return this.if(`saml:eduorgidentityauthnpolicyuri`, value, operator ?? 'StringLike');
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
    return this.if(`saml:eduorglegalname`, value, operator ?? 'StringLike');
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
    return this.if(`saml:eduorgsuperioruri`, value, operator ?? 'StringLike');
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
    return this.if(`saml:eduorgwhitepagesuri`, value, operator ?? 'StringLike');
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
    return this.if(`saml:edupersonaffiliation`, value, operator ?? 'StringLike');
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
    return this.if(`saml:edupersonassurance`, value, operator ?? 'StringLike');
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
    return this.if(`saml:edupersonentitlement`, value, operator ?? 'StringLike');
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
    return this.if(`saml:edupersonnickname`, value, operator ?? 'StringLike');
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
    return this.if(`saml:edupersonorgdn`, value, operator ?? 'StringLike');
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
    return this.if(`saml:edupersonorgunitdn`, value, operator ?? 'StringLike');
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
    return this.if(`saml:edupersonprimaryaffiliation`, value, operator ?? 'StringLike');
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
    return this.if(`saml:edupersonprimaryorgunitdn`, value, operator ?? 'StringLike');
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
    return this.if(`saml:edupersonprincipalname`, value, operator ?? 'StringLike');
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
    return this.if(`saml:edupersonscopedaffiliation`, value, operator ?? 'StringLike');
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
    return this.if(`saml:edupersontargetedid`, value, operator ?? 'StringLike');
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
    return this.if(`saml:givenName`, value, operator ?? 'StringLike');
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
    return this.if(`saml:iss`, value, operator ?? 'StringLike');
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
    return this.if(`saml:mail`, value, operator ?? 'StringLike');
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
    return this.if(`saml:name`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the hash value of the issuer, account ID, and friendly name
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_namequalifier
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlNamequalifier(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:namequalifier`, value, operator ?? 'StringLike');
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
    return this.if(`saml:organizationStatus`, value, operator ?? 'StringLike');
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
    return this.if(`saml:primaryGroupSID`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the subject of the claim (the SAML user ID)
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_sub
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlSub(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:sub`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the value persistent, transient, or the full Format URI
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_subtype
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithSAML()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSamlSubType(value: string | string[], operator?: Operator | string) {
    return this.if(`saml:sub_type`, value, operator ?? 'StringLike');
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
    return this.if(`saml:surname`, value, operator ?? 'StringLike');
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
    return this.if(`saml:uid`, value, operator ?? 'StringLike');
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
    return this.if(`saml:x500UniqueIdentifier`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the service that is obtaining a bearer token
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_awsservicename
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAWSServiceName(value: string | string[], operator?: Operator | string) {
    return this.if(`AWSServiceName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the duration in seconds when getting a bearer token or a JSON Web Token (JWT) from the GetWebIdentityToken API
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_durationseconds
   *
   * Applies to actions:
   * - .toGetWebIdentityToken()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifDurationSeconds(value: number | number[], operator?: Operator | string) {
    return this.if(`DurationSeconds`, value, operator ?? 'NumericEquals');
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
    return this.if(`ExternalId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the audience that is passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_identitytokenaudience
   *
   * Applies to actions:
   * - .toGetWebIdentityToken()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIdentityTokenAudience(value: string | string[], operator?: Operator | string) {
    return this.if(`IdentityTokenAudience`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the session context key-value pairs embedded in the signed context assertion retrieved from a trusted context provider
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-sts
   *
   * @param contextKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestContext(contextKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`RequestContext/${ contextKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the context provider ARNs
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-sts
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifRequestContextProviders(value: string | string[], operator?: Operator | string) {
    return this.if(`RequestContextProviders`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access based on whether the identity provider authorized the role via the roles claim in the OIDC token
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-sts
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifRoleAuthorizedByIdp(value?: boolean) {
    return this.if(`RoleAuthorizedByIdp`, (typeof value !== 'undefined' ? value : true), 'Bool');
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
    return this.if(`RoleSessionName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the signing algorithm that is passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_signingalgorithm
   *
   * Applies to actions:
   * - .toGetWebIdentityToken()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSigningAlgorithm(value: string | string[], operator?: Operator | string) {
    return this.if(`SigningAlgorithm`, value, operator ?? 'StringLike');
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
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSourceIdentity(value: string | string[], operator?: Operator | string) {
    return this.if(`SourceIdentity`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by TaskPolicyARN
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-sts
   *
   * Applies to actions:
   * - .toAssumeRoot()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifTaskPolicyArn(value: string | string[], operator?: Operator | string) {
    return this.if(`TaskPolicyArn`, value, operator ?? 'ArnLike');
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
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTransitiveTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`TransitiveTagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the personal account that initiated the workflow run
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsDomainGheComActor(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.\${Domain}.ghe.com:actor`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the personal account that initiated the workflow run
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsDomainGheComActorId(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.\${Domain}.ghe.com:actor_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the enterprise that contains the repository from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsDomainGheComEnterpriseId(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.\${Domain}.ghe.com:enterprise_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the environment used by the job
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsDomainGheComEnvironment(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.\${Domain}.ghe.com:environment`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the reference path to the reusable workflow for jobs using a reusable workflow
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsDomainGheComJobWorkflowRef(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.\${Domain}.ghe.com:job_workflow_ref`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the git ref (branch or tag) that triggered the workflow run
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsDomainGheComRef(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.\${Domain}.ghe.com:ref`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the repository from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsDomainGheComRepository(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.\${Domain}.ghe.com:repository`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the repository from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsDomainGheComRepositoryId(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.\${Domain}.ghe.com:repository_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the repository owner from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsDomainGheComRepositoryOwnerId(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.\${Domain}.ghe.com:repository_owner_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the workflow
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsDomainGheComWorkflow(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.\${Domain}.ghe.com:workflow`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the personal account that initiated the workflow run
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComSubPathActor(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com/\${SubPath}:actor`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the personal account that initiated the workflow run
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComSubPathActorId(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com/\${SubPath}:actor_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the enterprise that contains the repository from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComSubPathEnterpriseId(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com/\${SubPath}:enterprise_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the environment used by the job
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComSubPathEnvironment(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com/\${SubPath}:environment`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the reference path to the reusable workflow for jobs using a reusable workflow
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComSubPathJobWorkflowRef(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com/\${SubPath}:job_workflow_ref`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the git ref (branch or tag) that triggered the workflow run
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComSubPathRef(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com/\${SubPath}:ref`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the repository from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComSubPathRepository(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com/\${SubPath}:repository`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the repository from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComSubPathRepositoryId(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com/\${SubPath}:repository_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the repository owner from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComSubPathRepositoryOwnerId(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com/\${SubPath}:repository_owner_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the workflow
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComSubPathWorkflow(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com/\${SubPath}:workflow`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the personal account that initiated the workflow run
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComActor(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com:actor`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the personal account that initiated the workflow run
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComActorId(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com:actor_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the enterprise that contains the repository from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComEnterpriseId(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com:enterprise_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the environment used by the job
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComEnvironment(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com:environment`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the reference path to the reusable workflow for jobs using a reusable workflow
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComJobWorkflowRef(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com:job_workflow_ref`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the git ref (branch or tag) that triggered the workflow run
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComRef(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com:ref`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the repository from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComRepository(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com:repository`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the repository from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComRepositoryId(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com:repository_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the ID of the repository owner from where the workflow is running
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComRepositoryOwnerId(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com:repository_owner_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the name of the workflow
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#condition-keys-wif
   *
   * Applies to actions:
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTokenActionsGithubusercontentComWorkflow(value: string | string[], operator?: Operator | string) {
    return this.if(`token.actions.githubusercontent.com:workflow`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Login with Amazon application ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAmazonAppId(value: string | string[], operator?: Operator | string) {
    return this.if(`www.amazon.com:app_id`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the Login with Amazon user ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html#ck_id
   *
   * Applies to actions:
   * - .toAssumeRole()
   * - .toAssumeRoleWithWebIdentity()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAmazonUserId(value: string | string[], operator?: Operator | string) {
    return this.if(`www.amazon.com:user_id`, value, operator ?? 'StringLike');
  }
}
