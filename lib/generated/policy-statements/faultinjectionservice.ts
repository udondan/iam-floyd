import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [fis](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfaultinjectionservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Fis extends PolicyStatement {
  public servicePrefix = 'fis';

  /**
   * Statement provider for service [fis](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfaultinjectionservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an AWS FIS experiment template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_CreateExperimentTemplate.html
   */
  public toCreateExperimentTemplate() {
    return this.to('CreateExperimentTemplate');
  }

  /**
   * Grants permission to create an AWS FIS target account configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_CreateTargetAccountConfiguration.html
   */
  public toCreateTargetAccountConfiguration() {
    return this.to('CreateTargetAccountConfiguration');
  }

  /**
   * Grants permission to delete the AWS FIS experiment template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_DeleteExperimentTemplate.html
   */
  public toDeleteExperimentTemplate() {
    return this.to('DeleteExperimentTemplate');
  }

  /**
   * Grants permission to delete an AWS FIS target account configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_DeleteTargetAccountConfiguration.html
   */
  public toDeleteTargetAccountConfiguration() {
    return this.to('DeleteTargetAccountConfiguration');
  }

  /**
   * Grants permission to retrieve an AWS FIS action
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_GetAction.html
   */
  public toGetAction() {
    return this.to('GetAction');
  }

  /**
   * Grants permission to retrieve an AWS FIS experiment
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_GetExperiment.html
   */
  public toGetExperiment() {
    return this.to('GetExperiment');
  }

  /**
   * Grants permission to retrieve an AWS FIS target account configuration for an AWS FIS experiment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_GetExperimentTargetAccountConfiguration.html
   */
  public toGetExperimentTargetAccountConfiguration() {
    return this.to('GetExperimentTargetAccountConfiguration');
  }

  /**
   * Grants permission to retrieve an AWS FIS Experiment Template
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_GetExperimentTemplate.html
   */
  public toGetExperimentTemplate() {
    return this.to('GetExperimentTemplate');
  }

  /**
   * Grants permission to get information about the safety lever
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_GetSafetyLever.html
   */
  public toGetSafetyLever() {
    return this.to('GetSafetyLever');
  }

  /**
   * Grants permission to retrieve an AWS FIS target account configuration for an AWS FIS experiment template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_GetTargetAccountConfiguration.html
   */
  public toGetTargetAccountConfiguration() {
    return this.to('GetTargetAccountConfiguration');
  }

  /**
   * Grants permission to get information about the specified resource type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_GetTargetResourceType.html
   */
  public toGetTargetResourceType() {
    return this.to('GetTargetResourceType');
  }

  /**
   * Grants permission to inject an API internal error on the provided AWS service from an FIS Experiment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifService()
   * - .ifOperations()
   * - .ifPercentage()
   * - .ifTargets()
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#fis-actions-reference-fis
   */
  public toInjectApiInternalError() {
    return this.to('InjectApiInternalError');
  }

  /**
   * Grants permission to inject an API throttle error on the provided AWS service from an FIS Experiment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifService()
   * - .ifOperations()
   * - .ifPercentage()
   * - .ifTargets()
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#fis-actions-reference-fis
   */
  public toInjectApiThrottleError() {
    return this.to('InjectApiThrottleError');
  }

  /**
   * Grants permission to inject an API unavailable error on the provided AWS service from an FIS Experiment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifService()
   * - .ifOperations()
   * - .ifPercentage()
   * - .ifTargets()
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html#fis-actions-reference-fis
   */
  public toInjectApiUnavailableError() {
    return this.to('InjectApiUnavailableError');
  }

  /**
   * Grants permission to list all available AWS FIS actions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_ListActions.html
   */
  public toListActions() {
    return this.to('ListActions');
  }

  /**
   * Grants permission to list resolved targets for AWS FIS experiments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperimentResolvedTargets.html
   */
  public toListExperimentResolvedTargets() {
    return this.to('ListExperimentResolvedTargets');
  }

  /**
   * Grants permission to list target account configurations for AWS FIS experiments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperimentTargetAccountConfigurations.html
   */
  public toListExperimentTargetAccountConfigurations() {
    return this.to('ListExperimentTargetAccountConfigurations');
  }

  /**
   * Grants permission to list all available AWS FIS experiment templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperimentTemplates.html
   */
  public toListExperimentTemplates() {
    return this.to('ListExperimentTemplates');
  }

  /**
   * Grants permission to list all available AWS FIS experiments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_ListExperiments.html
   */
  public toListExperiments() {
    return this.to('ListExperiments');
  }

  /**
   * Grants permission to list the tags for an AWS FIS resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list target account configurations for AWS FIS experiment templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_ListTargetAccountConfigurations.html
   */
  public toListTargetAccountConfigurations() {
    return this.to('ListTargetAccountConfigurations');
  }

  /**
   * Grants permission to list the resource types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_ListTargetResourceTypes.html
   */
  public toListTargetResourceTypes() {
    return this.to('ListTargetResourceTypes');
  }

  /**
   * Grants permission to run an AWS FIS experiment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_StartExperiment.html
   */
  public toStartExperiment() {
    return this.to('StartExperiment');
  }

  /**
   * Grants permission to stop an AWS FIS experiment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_StopExperiment.html
   */
  public toStopExperiment() {
    return this.to('StopExperiment');
  }

  /**
   * Grants permission to tag AWS FIS resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag AWS FIS resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the specified AWS FIS experiment template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_UpdateExperimentTemplate.html
   */
  public toUpdateExperimentTemplate() {
    return this.to('UpdateExperimentTemplate');
  }

  /**
   * Grants permission to update the state of the safety lever
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_UpdateSafetyLeverState.html
   */
  public toUpdateSafetyLeverState() {
    return this.to('UpdateSafetyLeverState');
  }

  /**
   * Grants permission to update an AWS FIS target account configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_UpdateTargetAccountConfiguration.html
   */
  public toUpdateTargetAccountConfiguration() {
    return this.to('UpdateTargetAccountConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateExperimentTemplate',
      'CreateTargetAccountConfiguration',
      'DeleteExperimentTemplate',
      'DeleteTargetAccountConfiguration',
      'InjectApiInternalError',
      'InjectApiThrottleError',
      'InjectApiUnavailableError',
      'StartExperiment',
      'StopExperiment',
      'UpdateExperimentTemplate',
      'UpdateSafetyLeverState',
      'UpdateTargetAccountConfiguration'
    ],
    Read: [
      'GetAction',
      'GetExperiment',
      'GetExperimentTargetAccountConfiguration',
      'GetExperimentTemplate',
      'GetSafetyLever',
      'GetTargetAccountConfiguration',
      'GetTargetResourceType',
      'ListTagsForResource'
    ],
    List: [
      'ListActions',
      'ListExperimentResolvedTargets',
      'ListExperimentTargetAccountConfigurations',
      'ListExperimentTemplates',
      'ListExperiments',
      'ListTargetAccountConfigurations',
      'ListTargetResourceTypes'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type action to the statement
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/actions.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAction(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:fis:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:action/${ id }`);
  }

  /**
   * Adds a resource of type experiment to the statement
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/experiments.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExperiment(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:fis:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:experiment/${ id }`);
  }

  /**
   * Adds a resource of type experiment-template to the statement
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/working-with-templates.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExperimentTemplate(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:fis:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:experiment-template/${ id }`);
  }

  /**
   * Adds a resource of type safety-lever to the statement
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/safety-lever.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSafetyLever(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:fis:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:safety-lever/${ id }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateExperimentTemplate()
   * - .toStartExperiment()
   * - .toTagResource()
   * - .toUpdateExperimentTemplate()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toGetAction()
   * - .toGetExperiment()
   * - .toGetExperimentTemplate()
   *
   * Applies to resource types:
   * - action
   * - experiment
   * - experiment-template
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateExperimentTemplate()
   * - .toStartExperiment()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateExperimentTemplate()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the list of operations on the AWS service that is being affected by the AWS FIS action
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toInjectApiInternalError()
   * - .toInjectApiThrottleError()
   * - .toInjectApiUnavailableError()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOperations(value: string | string[], operator?: Operator | string) {
    return this.if(`Operations`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the percentage of calls being affected by the AWS FIS action
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toInjectApiInternalError()
   * - .toInjectApiThrottleError()
   * - .toInjectApiUnavailableError()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifPercentage(value: number | number[], operator?: Operator | string) {
    return this.if(`Percentage`, value, operator ?? 'NumericEquals');
  }

  /**
   * Filters access by the AWS service that is being affected by the AWS FIS action
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toInjectApiInternalError()
   * - .toInjectApiThrottleError()
   * - .toInjectApiUnavailableError()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifService(value: string | string[], operator?: Operator | string) {
    return this.if(`Service`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the list of resource ARNs being targeted by the AWS FIS action
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/security_iam_service-with-iam.html
   *
   * Applies to actions:
   * - .toInjectApiInternalError()
   * - .toInjectApiThrottleError()
   * - .toInjectApiUnavailableError()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTargets(value: string | string[], operator?: Operator | string) {
    return this.if(`Targets`, value, operator ?? 'StringLike');
  }
}
