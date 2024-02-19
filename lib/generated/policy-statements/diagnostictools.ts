import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [ts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdiagnostictools.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ts extends PolicyStatement {
  public servicePrefix = 'ts';

  /**
   * Statement provider for service [ts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdiagnostictools.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to get details about specific execution within AWS Diagnostic tools
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/diagnostic-tools/latest/APIReference/API_GetExecution.html
   */
  public toGetExecution() {
    return this.to('GetExecution');
  }

  /**
   * Grants permission to get details about specific execution output within AWS Diagnostic tools
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/diagnostic-tools/latest/APIReference/API_GetExecutionOutput.html
   */
  public toGetExecutionOutput() {
    return this.to('GetExecutionOutput');
  }

  /**
   * Grants permission to get details about specific tool within AWS Diagnostic tools
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/diagnostic-tools/latest/APIReference/API_GetTool.html
   */
  public toGetTool() {
    return this.to('GetTool');
  }

  /**
   * Grants permission to list all available execution within AWS Diagnostic tools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/diagnostic-tools/latest/APIReference/API_ListExecutions.html
   */
  public toListExecutions() {
    return this.to('ListExecutions');
  }

  /**
   * Grants permission to list the tags for an AWS Diagnostic tools resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/diagnostic-tools/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all available tools within AWS Diagnostic tools
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/diagnostic-tools/latest/APIReference/API_ListTools.html
   */
  public toListTools() {
    return this.to('ListTools');
  }

  /**
   * Grants permission to start an execution workflow of specific tool within AWS Diagnostic tools
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/diagnostic-tools/latest/APIReference/API_StartExecution.html
   */
  public toStartExecution() {
    return this.to('StartExecution');
  }

  /**
   * Grants permission to tag an AWS Diagnostic tools resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/diagnostic-tools/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an AWS Diagnostic tools resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/diagnostic-tools/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetExecution',
      'GetExecutionOutput',
      'GetTool',
      'ListTagsForResource'
    ],
    List: [
      'ListExecutions',
      'ListTools'
    ],
    Write: [
      'StartExecution'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type execution to the statement
   *
   * https://docs.aws.amazon.com/diagnostic-tools/latest/APIReference/API_Execution.html
   *
   * @param userId - Identifier for the userId.
   * @param toolId - Identifier for the toolId.
   * @param executionId - Identifier for the executionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onExecution(userId: string, toolId: string, executionId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ts::${ account ?? this.defaultAccount }:execution/${ userId }/${ toolId }/${ executionId }`);
  }

  /**
   * Adds a resource of type tool to the statement
   *
   * https://docs.aws.amazon.com/diagnostic-tools/latest/APIReference/API_Tool.html
   *
   * @param toolId - Identifier for the toolId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTool(toolId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:ts::aws:tool/${ toolId }`);
  }

  /**
   * Filters access by the allowed set of values for each of the tags
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toListTagsForResource()
   * - .toStartExecution()
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
   * Filters access by tag-value associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - execution
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of mandatory tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toListTagsForResource()
   * - .toStartExecution()
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
