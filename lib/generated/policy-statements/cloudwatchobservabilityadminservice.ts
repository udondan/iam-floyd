import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [observabilityadmin](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchobservabilityadminservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Observabilityadmin extends PolicyStatement {
  public servicePrefix = 'observabilityadmin';

  /**
   * Statement provider for service [observabilityadmin](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchobservabilityadminservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new telemetry rule with the specified name for the account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_CreateTelemetryRule.html
   */
  public toCreateTelemetryRule() {
    return this.to('CreateTelemetryRule');
  }

  /**
   * Grants permission to create a new organization telemetry rule with the specified name for the organization
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_CreateTelemetryRuleForOrganization.html
   */
  public toCreateTelemetryRuleForOrganization() {
    return this.to('CreateTelemetryRuleForOrganization');
  }

  /**
   * Grants permission to delete a telemetry rule with the specified name for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_DeleteTelemetryRule.html
   */
  public toDeleteTelemetryRule() {
    return this.to('DeleteTelemetryRule');
  }

  /**
   * Grants permission to delete an organization telemetry rule with the specified name for the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_DeleteTelemetryRuleForOrganization.html
   */
  public toDeleteTelemetryRuleForOrganization() {
    return this.to('DeleteTelemetryRuleForOrganization');
  }

  /**
   * Grants permission to retrieve the Telemetry Config feature status for the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_GetTelemetryEvaluationStatus.html
   */
  public toGetTelemetryEvaluationStatus() {
    return this.to('GetTelemetryEvaluationStatus');
  }

  /**
   * Grants permission to retrieve the Telemetry Config feature status for the organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_GetTelemetryEvaluationStatusForOrganization.html
   */
  public toGetTelemetryEvaluationStatusForOrganization() {
    return this.to('GetTelemetryEvaluationStatusForOrganization');
  }

  /**
   * Grants permission to retrieve the specified telemetry rule for the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_GetTelemetryRule.html
   */
  public toGetTelemetryRule() {
    return this.to('GetTelemetryRule');
  }

  /**
   * Grants permission to retrieve the specified organization telemetry rule for the organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_GetTelemetryRuleForOrganization.html
   */
  public toGetTelemetryRuleForOrganization() {
    return this.to('GetTelemetryRuleForOrganization');
  }

  /**
   * Grants permission to retrieve telemetry configurations for resources associated with the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_ListResourceTelemetry.html
   */
  public toListResourceTelemetry() {
    return this.to('ListResourceTelemetry');
  }

  /**
   * Grants permission to retrieve telemetry configurations for resources associated with accounts in the organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_ListResourceTelemetryForOrganization.html
   */
  public toListResourceTelemetryForOrganization() {
    return this.to('ListResourceTelemetryForOrganization');
  }

  /**
   * Grants permission to list the tags for the specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the telemetry rules for the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_ListTelemetryRules.html
   */
  public toListTelemetryRules() {
    return this.to('ListTelemetryRules');
  }

  /**
   * Grants permission to list the telemetry rules for the organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_ListTelemetryRulesForOrganization.html
   */
  public toListTelemetryRulesForOrganization() {
    return this.to('ListTelemetryRulesForOrganization');
  }

  /**
   * Grants permission to start the Telemetry Config feature for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_StartTelemetryEvaluation.html
   */
  public toStartTelemetryEvaluation() {
    return this.to('StartTelemetryEvaluation');
  }

  /**
   * Grants permission to start the Telemetry Config feature for the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_StartTelemetryEvaluationForOrganization.html
   */
  public toStartTelemetryEvaluationForOrganization() {
    return this.to('StartTelemetryEvaluationForOrganization');
  }

  /**
   * Grants permission to stop the Telemetry Config feature for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_StopTelemetryEvaluation.html
   */
  public toStopTelemetryEvaluation() {
    return this.to('StopTelemetryEvaluation');
  }

  /**
   * Grants permission to stop the Telemetry Config feature for the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_StopTelemetryEvaluationForOrganization.html
   */
  public toStopTelemetryEvaluationForOrganization() {
    return this.to('StopTelemetryEvaluationForOrganization');
  }

  /**
   * Grants permission to add or update the specified tags for the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the specified tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the specified telemetry rule for the account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_UpdateTelemetryRule.html
   */
  public toUpdateTelemetryRule() {
    return this.to('UpdateTelemetryRule');
  }

  /**
   * Grants permission to retrieve the specified organization telemetry rule for the organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_UpdateTelemetryRuleForOrganization.html
   */
  public toUpdateTelemetryRuleForOrganization() {
    return this.to('UpdateTelemetryRuleForOrganization');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateTelemetryRule',
      'CreateTelemetryRuleForOrganization',
      'DeleteTelemetryRule',
      'DeleteTelemetryRuleForOrganization',
      'StartTelemetryEvaluation',
      'StartTelemetryEvaluationForOrganization',
      'StopTelemetryEvaluation',
      'StopTelemetryEvaluationForOrganization',
      'UpdateTelemetryRule',
      'UpdateTelemetryRuleForOrganization'
    ],
    Read: [
      'GetTelemetryEvaluationStatus',
      'GetTelemetryEvaluationStatusForOrganization',
      'GetTelemetryRule',
      'GetTelemetryRuleForOrganization',
      'ListResourceTelemetry',
      'ListResourceTelemetryForOrganization'
    ],
    List: [
      'ListTagsForResource',
      'ListTelemetryRules',
      'ListTelemetryRulesForOrganization'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type telemetry-rule to the statement
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_TelemetryRule.html
   *
   * @param telemetryRuleName - Identifier for the telemetryRuleName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTelemetryRule(telemetryRuleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:observabilityadmin:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:telemetry-rule:${ telemetryRuleName }`);
  }

  /**
   * Adds a resource of type organization-telemetry-rule to the statement
   *
   * https://docs.aws.amazon.com/cloudwatch/latest/observabilityadmin/API_OrganizationTelemetryRule.html
   *
   * @param telemetryRuleName - Identifier for the telemetryRuleName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOrganizationTelemetryRule(telemetryRuleName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:observabilityadmin:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:organization-telemetry-rule:${ telemetryRuleName }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateTelemetryRule()
   * - .toCreateTelemetryRuleForOrganization()
   * - .toTagResource()
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
   * Applies to resource types:
   * - telemetry-rule
   * - organization-telemetry-rule
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
   * - .toCreateTelemetryRule()
   * - .toCreateTelemetryRuleForOrganization()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
