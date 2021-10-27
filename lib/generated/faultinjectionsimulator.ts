import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [fis](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfaultinjectionsimulator.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Fis extends PolicyStatement {
  public servicePrefix = 'fis';

  /**
   * Statement provider for service [fis](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsfaultinjectionsimulator.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
   * https://docs.aws.amazon.com/fis/latest/APIReference/Welcome.html
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
   * https://docs.aws.amazon.com/fis/latest/APIReference/Welcome.html
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
   * https://docs.aws.amazon.com/fis/latest/APIReference/Welcome.html
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
   * Grants permission to list the tags for an AWS FIS resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/fis/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
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
   * - .ifAwsRequestTag()
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

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateExperimentTemplate",
      "DeleteExperimentTemplate",
      "InjectApiInternalError",
      "InjectApiThrottleError",
      "InjectApiUnavailableError",
      "StartExperiment",
      "StopExperiment",
      "UpdateExperimentTemplate"
    ],
    "Read": [
      "GetAction",
      "GetExperiment",
      "GetExperimentTemplate",
      "ListTagsForResource"
    ],
    "List": [
      "ListActions",
      "ListExperimentTemplates",
      "ListExperiments"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type action to the statement
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/actions.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAction(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:fis:${ region || '*' }:${ account || '*' }:action/${ id }`);
  }

  /**
   * Adds a resource of type experiment to the statement
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/experiments.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExperiment(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:fis:${ region || '*' }:${ account || '*' }:experiment/${ id }`);
  }

  /**
   * Adds a resource of type experiment-template to the statement
   *
   * https://docs.aws.amazon.com/fis/latest/userguide/working-with-templates.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExperimentTemplate(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:fis:${ region || '*' }:${ account || '*' }:experiment-template/${ id }`);
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
    return this.if(`Operations`, value, operator || 'StringLike');
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
    return this.if(`Percentage`, value, operator || 'NumericEquals');
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
    return this.if(`Service`, value, operator || 'StringLike');
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
    return this.if(`Targets`, value, operator || 'StringLike');
  }
}
