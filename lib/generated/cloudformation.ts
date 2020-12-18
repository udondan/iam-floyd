import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [cloudformation](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudformation.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudformation extends PolicyStatement {
  public servicePrefix = 'cloudformation';

  /**
   * Statement provider for service [cloudformation](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudformation.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel an update on the specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html
   */
  public toCancelUpdateStack() {
    this.to('cloudformation:CancelUpdateStack');
    return this;
  }

  /**
   * Grants permission to continue rolling back a stack that is in the UPDATE_ROLLBACK_FAILED state to the UPDATE_ROLLBACK_COMPLETE state
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRoleArn()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ContinueUpdateRollback.html
   */
  public toContinueUpdateRollback() {
    this.to('cloudformation:ContinueUpdateRollback');
    return this;
  }

  /**
   * Grants permission to create a list of changes for a stack
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifChangeSetName()
   * - .ifResourceTypes()
   * - .ifImportResourceTypes()
   * - .ifRoleArn()
   * - .ifStackPolicyUrl()
   * - .ifTemplateUrl()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html
   */
  public toCreateChangeSet() {
    this.to('cloudformation:CreateChangeSet');
    return this;
  }

  /**
   * Grants permission to create a stack as specified in the template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifResourceTypes()
   * - .ifRoleArn()
   * - .ifStackPolicyUrl()
   * - .ifTemplateUrl()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html
   */
  public toCreateStack() {
    this.to('cloudformation:CreateStack');
    return this;
  }

  /**
   * Grants permission to create stack instances for the specified accounts, within the specified regions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html
   */
  public toCreateStackInstances() {
    this.to('cloudformation:CreateStackInstances');
    return this;
  }

  /**
   * Grants permission to create a stackset as specified in the template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRoleArn()
   * - .ifTemplateUrl()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackSet.html
   */
  public toCreateStackSet() {
    this.to('cloudformation:CreateStackSet');
    return this;
  }

  /**
   * Grants permission to upload templates to Amazon S3 buckets. Used only by the AWS CloudFormation console and is not documented in the API reference
   *
   * Access Level: Write
   */
  public toCreateUploadBucket() {
    this.to('cloudformation:CreateUploadBucket');
    return this;
  }

  /**
   * Grants permission to delete the specified change set. Deleting change sets ensures that no one executes the wrong change set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifChangeSetName()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteChangeSet.html
   */
  public toDeleteChangeSet() {
    this.to('cloudformation:DeleteChangeSet');
    return this;
  }

  /**
   * Grants permission to delete a specified stack
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRoleArn()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStack.html
   */
  public toDeleteStack() {
    this.to('cloudformation:DeleteStack');
    return this;
  }

  /**
   * Grants permission to delete stack instances for the specified accounts, in the specified regions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackInstances.html
   */
  public toDeleteStackInstances() {
    this.to('cloudformation:DeleteStackInstances');
    return this;
  }

  /**
   * Grants permission to delete a specified stackset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackSet.html
   */
  public toDeleteStackSet() {
    this.to('cloudformation:DeleteStackSet');
    return this;
  }

  /**
   * Grants permission to deregister an existing CloudFormation type or type version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html
   */
  public toDeregisterType() {
    this.to('cloudformation:DeregisterType');
    return this;
  }

  /**
   * Grants permission to retrieve your account's AWS CloudFormation limits
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeAccountLimits.html
   */
  public toDescribeAccountLimits() {
    this.to('cloudformation:DescribeAccountLimits');
    return this;
  }

  /**
   * Grants permission to return the description for the specified change set
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifChangeSetName()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSet.html
   */
  public toDescribeChangeSet() {
    this.to('cloudformation:DescribeChangeSet');
    return this;
  }

  /**
   * Grants permission to return information about a stack drift detection operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackDriftDetectionStatus.html
   */
  public toDescribeStackDriftDetectionStatus() {
    this.to('cloudformation:DescribeStackDriftDetectionStatus');
    return this;
  }

  /**
   * Grants permission to return all stack related events for a specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackEvents.html
   */
  public toDescribeStackEvents() {
    this.to('cloudformation:DescribeStackEvents');
    return this;
  }

  /**
   * Grants permission to return the stack instance that's associated with the specified stack set, AWS account, and region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackInstance.html
   */
  public toDescribeStackInstance() {
    this.to('cloudformation:DescribeStackInstance');
    return this;
  }

  /**
   * Grants permission to return a description of the specified resource in the specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResource.html
   */
  public toDescribeStackResource() {
    this.to('cloudformation:DescribeStackResource');
    return this;
  }

  /**
   * Grants permission to return drift information for the resources that have been checked for drift in the specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResourceDrifts.html
   */
  public toDescribeStackResourceDrifts() {
    this.to('cloudformation:DescribeStackResourceDrifts');
    return this;
  }

  /**
   * Grants permission to return AWS resource descriptions for running and deleted stacks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResources.html
   */
  public toDescribeStackResources() {
    this.to('cloudformation:DescribeStackResources');
    return this;
  }

  /**
   * Grants permission to return the description of the specified stack set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSet.html
   */
  public toDescribeStackSet() {
    this.to('cloudformation:DescribeStackSet');
    return this;
  }

  /**
   * Grants permission to return the description of the specified stack set operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSetOperation.html
   */
  public toDescribeStackSetOperation() {
    this.to('cloudformation:DescribeStackSetOperation');
    return this;
  }

  /**
   * Grants permission to return the description for the specified stack
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStacks.html
   */
  public toDescribeStacks() {
    this.to('cloudformation:DescribeStacks');
    return this;
  }

  /**
   * Grants permission to return information about the CloudFormation type requested
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html
   */
  public toDescribeType() {
    this.to('cloudformation:DescribeType');
    return this;
  }

  /**
   * Grants permission to return information about the registration process for a CloudFormation type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeTypeRegistration.html
   */
  public toDescribeTypeRegistration() {
    this.to('cloudformation:DescribeTypeRegistration');
    return this;
  }

  /**
   * Grants permission to detects whether a stack's actual configuration differs, or has drifted, from it's expected configuration, as defined in the stack template and any values specified as template parameters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackDrift.html
   */
  public toDetectStackDrift() {
    this.to('cloudformation:DetectStackDrift');
    return this;
  }

  /**
   * Grants permission to return information about whether a resource's actual configuration differs, or has drifted, from it's expected configuration, as defined in the stack template and any values specified as template parameters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackResourceDrift.html
   */
  public toDetectStackResourceDrift() {
    this.to('cloudformation:DetectStackResourceDrift');
    return this;
  }

  /**
   * Grants permission to enable users to detect drift on a stack set and the stack instances that belong to that stack set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackSetDrift.html
   */
  public toDetectStackSetDrift() {
    this.to('cloudformation:DetectStackSetDrift');
    return this;
  }

  /**
   * Grants permission to return the estimated monthly cost of a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_EstimateTemplateCost.html
   */
  public toEstimateTemplateCost() {
    this.to('cloudformation:EstimateTemplateCost');
    return this;
  }

  /**
   * Grants permission to update a stack using the input information that was provided when the specified change set was created
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifChangeSetName()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html
   */
  public toExecuteChangeSet() {
    this.to('cloudformation:ExecuteChangeSet');
    return this;
  }

  /**
   * Grants permission to return the stack policy for a specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetStackPolicy.html
   */
  public toGetStackPolicy() {
    this.to('cloudformation:GetStackPolicy');
    return this;
  }

  /**
   * Grants permission to return the template body for a specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplate.html
   */
  public toGetTemplate() {
    this.to('cloudformation:GetTemplate');
    return this;
  }

  /**
   * Grants permission to return information about a new or existing template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplateSummary.html
   */
  public toGetTemplateSummary() {
    this.to('cloudformation:GetTemplateSummary');
    return this;
  }

  /**
   * Grants permission to return the ID and status of each active change set for a stack. For example, AWS CloudFormation lists change sets that are in the CREATE_IN_PROGRESS or CREATE_PENDING state
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListChangeSets.html
   */
  public toListChangeSets() {
    this.to('cloudformation:ListChangeSets');
    return this;
  }

  /**
   * Grants permission to list all exported output values in the account and region in which you call this action
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListExports.html
   */
  public toListExports() {
    this.to('cloudformation:ListExports');
    return this;
  }

  /**
   * Grants permission to list all stacks that are importing an exported output value
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListImports.html
   */
  public toListImports() {
    this.to('cloudformation:ListImports');
    return this;
  }

  /**
   * Grants permission to return summary information about stack instances that are associated with the specified stack set
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html
   */
  public toListStackInstances() {
    this.to('cloudformation:ListStackInstances');
    return this;
  }

  /**
   * Grants permission to return descriptions of all resources of the specified stack
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackResources.html
   */
  public toListStackResources() {
    this.to('cloudformation:ListStackResources');
    return this;
  }

  /**
   * Grants permission to return summary information about the results of a stack set operation
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperationResults.html
   */
  public toListStackSetOperationResults() {
    this.to('cloudformation:ListStackSetOperationResults');
    return this;
  }

  /**
   * Grants permission to return summary information about operations performed on a stack set
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperations.html
   */
  public toListStackSetOperations() {
    this.to('cloudformation:ListStackSetOperations');
    return this;
  }

  /**
   * Grants permission to return summary information about stack sets that are associated with the user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html
   */
  public toListStackSets() {
    this.to('cloudformation:ListStackSets');
    return this;
  }

  /**
   * Grants permission to return the summary information for stacks whose status matches the specified StackStatusFilter
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStacks.html
   */
  public toListStacks() {
    this.to('cloudformation:ListStacks');
    return this;
  }

  /**
   * Grants permission to list CloudFormation type registration attempts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeRegistrations.html
   */
  public toListTypeRegistrations() {
    this.to('cloudformation:ListTypeRegistrations');
    return this;
  }

  /**
   * Grants permission to list versions of a particular CloudFormation type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeVersions.html
   */
  public toListTypeVersions() {
    this.to('cloudformation:ListTypeVersions');
    return this;
  }

  /**
   * Grants permission to list available CloudFormation types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypes.html
   */
  public toListTypes() {
    this.to('cloudformation:ListTypes');
    return this;
  }

  /**
   * Grants permission to register a new CloudFormation type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html
   */
  public toRegisterType() {
    this.to('cloudformation:RegisterType');
    return this;
  }

  /**
   * Grants permission to set a stack policy for a specified stack
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifStackPolicyUrl()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetStackPolicy.html
   */
  public toSetStackPolicy() {
    this.to('cloudformation:SetStackPolicy');
    return this;
  }

  /**
   * Grants permission to set which version of a CloudFormation type applies to CloudFormation operations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeDefaultVersion.html
   */
  public toSetTypeDefaultVersion() {
    this.to('cloudformation:SetTypeDefaultVersion');
    return this;
  }

  /**
   * Grants permission to send a signal to the specified resource with a success or failure status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SignalResource.html
   */
  public toSignalResource() {
    this.to('cloudformation:SignalResource');
    return this;
  }

  /**
   * Grants permission to stop an in-progress operation on a stack set and its associated stack instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StopStackSetOperation.html
   */
  public toStopStackSetOperation() {
    this.to('cloudformation:StopStackSetOperation');
    return this;
  }

  /**
   * Grants permission to tag cloudformation resources
   *
   * Access Level: Tagging
   */
  public toTagResource() {
    this.to('cloudformation:TagResource');
    return this;
  }

  /**
   * Grants permission to untag cloudformation resources
   *
   * Access Level: Tagging
   */
  public toUntagResource() {
    this.to('cloudformation:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a stack as specified in the template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifResourceTypes()
   * - .ifRoleArn()
   * - .ifStackPolicyUrl()
   * - .ifTemplateUrl()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStack.html
   */
  public toUpdateStack() {
    this.to('cloudformation:UpdateStack');
    return this;
  }

  /**
   * Grants permission to update the parameter values for stack instances for the specified accounts, within the specified regions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackInstances.html
   */
  public toUpdateStackInstances() {
    this.to('cloudformation:UpdateStackInstances');
    return this;
  }

  /**
   * Grants permission to update a stackset as specified in the template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRoleArn()
   * - .ifTemplateUrl()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html
   */
  public toUpdateStackSet() {
    this.to('cloudformation:UpdateStackSet');
    return this;
  }

  /**
   * Grants permission to update termination protection for the specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateTerminationProtection.html
   */
  public toUpdateTerminationProtection() {
    this.to('cloudformation:UpdateTerminationProtection');
    return this;
  }

  /**
   * Grants permission to validate a specified template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ValidateTemplate.html
   */
  public toValidateTemplate() {
    this.to('cloudformation:ValidateTemplate');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelUpdateStack",
      "ContinueUpdateRollback",
      "CreateChangeSet",
      "CreateStack",
      "CreateStackInstances",
      "CreateStackSet",
      "CreateUploadBucket",
      "DeleteChangeSet",
      "DeleteStack",
      "DeleteStackInstances",
      "DeleteStackSet",
      "DeregisterType",
      "ExecuteChangeSet",
      "RegisterType",
      "SetTypeDefaultVersion",
      "SignalResource",
      "StopStackSetOperation",
      "UpdateStack",
      "UpdateStackInstances",
      "UpdateStackSet",
      "UpdateTerminationProtection"
    ],
    "Read": [
      "DescribeAccountLimits",
      "DescribeChangeSet",
      "DescribeStackDriftDetectionStatus",
      "DescribeStackEvents",
      "DescribeStackInstance",
      "DescribeStackResource",
      "DescribeStackResourceDrifts",
      "DescribeStackResources",
      "DescribeStackSet",
      "DescribeStackSetOperation",
      "DescribeType",
      "DescribeTypeRegistration",
      "DetectStackDrift",
      "DetectStackResourceDrift",
      "DetectStackSetDrift",
      "EstimateTemplateCost",
      "GetStackPolicy",
      "GetTemplate",
      "GetTemplateSummary",
      "ValidateTemplate"
    ],
    "List": [
      "DescribeStacks",
      "ListChangeSets",
      "ListExports",
      "ListImports",
      "ListStackInstances",
      "ListStackResources",
      "ListStackSetOperationResults",
      "ListStackSetOperations",
      "ListStackSets",
      "ListStacks",
      "ListTypeRegistrations",
      "ListTypeVersions",
      "ListTypes"
    ],
    "Permissions management": [
      "SetStackPolicy"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type changeset to the statement
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html#w2ab1b5c15c11
   *
   * @param changeSetName - Identifier for the changeSetName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onChangeset(changeSetName: string, id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudformation:${Region}:${Account}:changeSet/${ChangeSetName}/${Id}';
    arn = arn.replace('${ChangeSetName}', changeSetName);
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type stack to the statement
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html#w2ab1b5c15b9
   *
   * @param stackName - Identifier for the stackName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStack(stackName: string, id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudformation:${Region}:${Account}:stack/${StackName}/${Id}';
    arn = arn.replace('${StackName}', stackName);
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type stackset to the statement
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stacksets-concepts-stackset
   *
   * @param stackSetName - Identifier for the stackSetName.
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStackset(stackSetName: string, id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudformation:${Region}:${Account}:stackset/${StackSetName}:${Id}';
    arn = arn.replace('${StackSetName}', stackSetName);
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type stackset-target to the statement
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html
   *
   * @param stackSetTarget - Identifier for the stackSetTarget.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onStacksetTarget(stackSetTarget: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudformation:${Region}:${Account}:stackset-target/${StackSetTarget}';
    arn = arn.replace('${StackSetTarget}', stackSetTarget);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type type to the statement
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html
   *
   * @param type - Identifier for the type.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onType(type: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudformation:${Region}:${Account}:type/resource/${Type}';
    arn = arn.replace('${Type}', type);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on an AWS CloudFormation change set name. Use to control which change sets IAM users can execute or delete
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions
   *
   * Applies to actions:
   * - .toCreateChangeSet()
   * - .toDeleteChangeSet()
   * - .toDescribeChangeSet()
   * - .toExecuteChangeSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifChangeSetName(value: string | string[], operator?: Operator | string) {
    return this.if(`cloudformation:ChangeSetName`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the template resource types, such as AWS::EC2::Instance. Use to control which resource types IAM users can work with when they want to import a resource into a stack
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions
   *
   * Applies to actions:
   * - .toCreateChangeSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifImportResourceTypes(value: string | string[], operator?: Operator | string) {
    return this.if(`cloudformation:ImportResourceTypes`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the template resource types, such as AWS::EC2::Instance. Use to control which resource types IAM users can work with when they create or update a stack
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions
   *
   * Applies to actions:
   * - .toCreateChangeSet()
   * - .toCreateStack()
   * - .toUpdateStack()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTypes(value: string | string[], operator?: Operator | string) {
    return this.if(`cloudformation:ResourceTypes`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the ARN of an IAM service role. Use to control which service role IAM users can use to work with stacks or change sets
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions
   *
   * Applies to actions:
   * - .toContinueUpdateRollback()
   * - .toCreateChangeSet()
   * - .toCreateStack()
   * - .toCreateStackSet()
   * - .toDeleteStack()
   * - .toUpdateStack()
   * - .toUpdateStackSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifRoleArn(value: string | string[], operator?: Operator | string) {
    return this.if(`cloudformation:RoleArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters actions based on an Amazon S3 stack policy URL. Use to control which stack policies IAM users can associate with a stack during a create or update stack action
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions
   *
   * Applies to actions:
   * - .toCreateChangeSet()
   * - .toCreateStack()
   * - .toSetStackPolicy()
   * - .toUpdateStack()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifStackPolicyUrl(value: string | string[], operator?: Operator | string) {
    return this.if(`cloudformation:StackPolicyUrl`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on an Amazon S3 template URL. Use to control which templates IAM users can use when they create or update stacks
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions
   *
   * Applies to actions:
   * - .toCreateChangeSet()
   * - .toCreateStack()
   * - .toCreateStackSet()
   * - .toUpdateStack()
   * - .toUpdateStackSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTemplateUrl(value: string | string[], operator?: Operator | string) {
    return this.if(`cloudformation:TemplateUrl`, value, operator || 'StringLike');
  }
}
