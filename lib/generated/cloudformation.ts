import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps, Operator } from '../shared';

/**
 * Statement provider for service [cloudformation](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudformation.html).
 *
 * @param options - Options for the statement
 */
export class Cloudformation extends PolicyStatement {
  public servicePrefix = 'cloudformation';

  /**
   * Statement provider for service [cloudformation](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudformation.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to activate a public third-party extension, making it available for use in stack templates
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html
   */
  public toActivateType() {
    return this.to('ActivateType');
  }

  /**
   * Grants permission to return configuration data for the specified CloudFormation extensions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_BatchDescribeTypeConfigurations.html
   */
  public toBatchDescribeTypeConfigurations() {
    return this.to('BatchDescribeTypeConfigurations');
  }

  /**
   * Grants permission to cancel an update on the specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html
   */
  public toCancelUpdateStack() {
    return this.to('CancelUpdateStack');
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
    return this.to('ContinueUpdateRollback');
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
    return this.to('CreateChangeSet');
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
    return this.to('CreateStack');
  }

  /**
   * Grants permission to create stack instances for the specified accounts, within the specified regions
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifTargetRegion()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html
   */
  public toCreateStackInstances() {
    return this.to('CreateStackInstances');
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
    return this.to('CreateStackSet');
  }

  /**
   * Grants permission to upload templates to Amazon S3 buckets. Used only by the AWS CloudFormation console and is not documented in the API reference
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html
   */
  public toCreateUploadBucket() {
    return this.to('CreateUploadBucket');
  }

  /**
   * Grants permission to deactivate a public extension that was previously activated in this account and region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeactivateType.html
   */
  public toDeactivateType() {
    return this.to('DeactivateType');
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
    return this.to('DeleteChangeSet');
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
    return this.to('DeleteStack');
  }

  /**
   * Grants permission to delete stack instances for the specified accounts, in the specified regions
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetRegion()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackInstances.html
   */
  public toDeleteStackInstances() {
    return this.to('DeleteStackInstances');
  }

  /**
   * Grants permission to delete a specified stackset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeleteStackSet.html
   */
  public toDeleteStackSet() {
    return this.to('DeleteStackSet');
  }

  /**
   * Grants permission to deregister an existing CloudFormation type or type version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeregisterType.html
   */
  public toDeregisterType() {
    return this.to('DeregisterType');
  }

  /**
   * Grants permission to retrieve your account's AWS CloudFormation limits
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeAccountLimits.html
   */
  public toDescribeAccountLimits() {
    return this.to('DescribeAccountLimits');
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
    return this.to('DescribeChangeSet');
  }

  /**
   * Grants permission to return the Hook invocation information for the specified change set
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifChangeSetName()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeChangeSetHooks.html
   */
  public toDescribeChangeSetHooks() {
    return this.to('DescribeChangeSetHooks');
  }

  /**
   * Grants permission to return information about a CloudFormation extension publisher
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribePublisher.html
   */
  public toDescribePublisher() {
    return this.to('DescribePublisher');
  }

  /**
   * Grants permission to return information about a stack drift detection operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackDriftDetectionStatus.html
   */
  public toDescribeStackDriftDetectionStatus() {
    return this.to('DescribeStackDriftDetectionStatus');
  }

  /**
   * Grants permission to return all stack related events for a specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackEvents.html
   */
  public toDescribeStackEvents() {
    return this.to('DescribeStackEvents');
  }

  /**
   * Grants permission to return the stack instance that's associated with the specified stack set, AWS account, and region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackInstance.html
   */
  public toDescribeStackInstance() {
    return this.to('DescribeStackInstance');
  }

  /**
   * Grants permission to return a description of the specified resource in the specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResource.html
   */
  public toDescribeStackResource() {
    return this.to('DescribeStackResource');
  }

  /**
   * Grants permission to return drift information for the resources that have been checked for drift in the specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResourceDrifts.html
   */
  public toDescribeStackResourceDrifts() {
    return this.to('DescribeStackResourceDrifts');
  }

  /**
   * Grants permission to return AWS resource descriptions for running and deleted stacks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackResources.html
   */
  public toDescribeStackResources() {
    return this.to('DescribeStackResources');
  }

  /**
   * Grants permission to return the description of the specified stack set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSet.html
   */
  public toDescribeStackSet() {
    return this.to('DescribeStackSet');
  }

  /**
   * Grants permission to return the description of the specified stack set operation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackSetOperation.html
   */
  public toDescribeStackSetOperation() {
    return this.to('DescribeStackSetOperation');
  }

  /**
   * Grants permission to return the description for the specified stack
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStacks.html
   */
  public toDescribeStacks() {
    return this.to('DescribeStacks');
  }

  /**
   * Grants permission to return information about the CloudFormation type requested
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html
   */
  public toDescribeType() {
    return this.to('DescribeType');
  }

  /**
   * Grants permission to return information about the registration process for a CloudFormation type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeTypeRegistration.html
   */
  public toDescribeTypeRegistration() {
    return this.to('DescribeTypeRegistration');
  }

  /**
   * Grants permission to detects whether a stack's actual configuration differs, or has drifted, from it's expected configuration, as defined in the stack template and any values specified as template parameters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackDrift.html
   */
  public toDetectStackDrift() {
    return this.to('DetectStackDrift');
  }

  /**
   * Grants permission to return information about whether a resource's actual configuration differs, or has drifted, from it's expected configuration, as defined in the stack template and any values specified as template parameters
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackResourceDrift.html
   */
  public toDetectStackResourceDrift() {
    return this.to('DetectStackResourceDrift');
  }

  /**
   * Grants permission to enable users to detect drift on a stack set and the stack instances that belong to that stack set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DetectStackSetDrift.html
   */
  public toDetectStackSetDrift() {
    return this.to('DetectStackSetDrift');
  }

  /**
   * Grants permission to return the estimated monthly cost of a template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_EstimateTemplateCost.html
   */
  public toEstimateTemplateCost() {
    return this.to('EstimateTemplateCost');
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
    return this.to('ExecuteChangeSet');
  }

  /**
   * Grants permission to return the stack policy for a specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetStackPolicy.html
   */
  public toGetStackPolicy() {
    return this.to('GetStackPolicy');
  }

  /**
   * Grants permission to return the template body for a specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplate.html
   */
  public toGetTemplate() {
    return this.to('GetTemplate');
  }

  /**
   * Grants permission to return information about a new or existing template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_GetTemplateSummary.html
   */
  public toGetTemplateSummary() {
    return this.to('GetTemplateSummary');
  }

  /**
   * Grants permission to enable users to import existing stacks to a new or existing stackset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ImportStacksToStackSet.html
   */
  public toImportStacksToStackSet() {
    return this.to('ImportStacksToStackSet');
  }

  /**
   * Grants permission to return the ID and status of each active change set for a stack. For example, AWS CloudFormation lists change sets that are in the CREATE_IN_PROGRESS or CREATE_PENDING state
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListChangeSets.html
   */
  public toListChangeSets() {
    return this.to('ListChangeSets');
  }

  /**
   * Grants permission to list all exported output values in the account and region in which you call this action
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListExports.html
   */
  public toListExports() {
    return this.to('ListExports');
  }

  /**
   * Grants permission to list all stacks that are importing an exported output value
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListImports.html
   */
  public toListImports() {
    return this.to('ListImports');
  }

  /**
   * Grants permission to return summary information about stack instances that are associated with the specified stack set
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html
   */
  public toListStackInstances() {
    return this.to('ListStackInstances');
  }

  /**
   * Grants permission to return descriptions of all resources of the specified stack
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackResources.html
   */
  public toListStackResources() {
    return this.to('ListStackResources');
  }

  /**
   * Grants permission to return summary information about the results of a stack set operation
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperationResults.html
   */
  public toListStackSetOperationResults() {
    return this.to('ListStackSetOperationResults');
  }

  /**
   * Grants permission to return summary information about operations performed on a stack set
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetOperations.html
   */
  public toListStackSetOperations() {
    return this.to('ListStackSetOperations');
  }

  /**
   * Grants permission to return summary information about stack sets that are associated with the user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSets.html
   */
  public toListStackSets() {
    return this.to('ListStackSets');
  }

  /**
   * Grants permission to return the summary information for stacks whose status matches the specified StackStatusFilter
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStacks.html
   */
  public toListStacks() {
    return this.to('ListStacks');
  }

  /**
   * Grants permission to list CloudFormation type registration attempts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeRegistrations.html
   */
  public toListTypeRegistrations() {
    return this.to('ListTypeRegistrations');
  }

  /**
   * Grants permission to list versions of a particular CloudFormation type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypeVersions.html
   */
  public toListTypeVersions() {
    return this.to('ListTypeVersions');
  }

  /**
   * Grants permission to list available CloudFormation types
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListTypes.html
   */
  public toListTypes() {
    return this.to('ListTypes');
  }

  /**
   * Grants permission to publish the specified extension to the CloudFormation registry as a public extension in this region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_PublishType.html
   */
  public toPublishType() {
    return this.to('PublishType');
  }

  /**
   * Grants permission to record the handler progress
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RecordHandlerProgress.html
   */
  public toRecordHandlerProgress() {
    return this.to('RecordHandlerProgress');
  }

  /**
   * Grants permission to register account as a publisher of public extensions in the CloudFormation registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html
   */
  public toRegisterPublisher() {
    return this.to('RegisterPublisher');
  }

  /**
   * Grants permission to register a new CloudFormation type
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html
   */
  public toRegisterType() {
    return this.to('RegisterType');
  }

  /**
   * Grants permission to rollback the stack to the last stable state
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRoleArn()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RollbackStack.html
   */
  public toRollbackStack() {
    return this.to('RollbackStack');
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
    return this.to('SetStackPolicy');
  }

  /**
   * Grants permission to set the configuration data for a registered CloudFormation extension, in the given account and region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html
   */
  public toSetTypeConfiguration() {
    return this.to('SetTypeConfiguration');
  }

  /**
   * Grants permission to set which version of a CloudFormation type applies to CloudFormation operations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeDefaultVersion.html
   */
  public toSetTypeDefaultVersion() {
    return this.to('SetTypeDefaultVersion');
  }

  /**
   * Grants permission to send a signal to the specified resource with a success or failure status
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SignalResource.html
   */
  public toSignalResource() {
    return this.to('SignalResource');
  }

  /**
   * Grants permission to stop an in-progress operation on a stack set and its associated stack instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_StopStackSetOperation.html
   */
  public toStopStackSetOperation() {
    return this.to('StopStackSetOperation');
  }

  /**
   * Grants permission to tag cloudformation resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to test a registered extension to make sure it meets all necessary requirements for being published in the CloudFormation registry
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_TestType.html
   */
  public toTestType() {
    return this.to('TestType');
  }

  /**
   * Grants permission to untag cloudformation resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
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
    return this.to('UpdateStack');
  }

  /**
   * Grants permission to update the parameter values for stack instances for the specified accounts, within the specified regions
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifTargetRegion()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackInstances.html
   */
  public toUpdateStackInstances() {
    return this.to('UpdateStackInstances');
  }

  /**
   * Grants permission to update a stackset as specified in the template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifRoleArn()
   * - .ifTemplateUrl()
   * - .ifTargetRegion()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html
   */
  public toUpdateStackSet() {
    return this.to('UpdateStackSet');
  }

  /**
   * Grants permission to update termination protection for the specified stack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateTerminationProtection.html
   */
  public toUpdateTerminationProtection() {
    return this.to('UpdateTerminationProtection');
  }

  /**
   * Grants permission to validate a specified template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ValidateTemplate.html
   */
  public toValidateTemplate() {
    return this.to('ValidateTemplate');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ActivateType',
      'CancelUpdateStack',
      'ContinueUpdateRollback',
      'CreateChangeSet',
      'CreateStack',
      'CreateStackInstances',
      'CreateStackSet',
      'CreateUploadBucket',
      'DeactivateType',
      'DeleteChangeSet',
      'DeleteStack',
      'DeleteStackInstances',
      'DeleteStackSet',
      'DeregisterType',
      'ExecuteChangeSet',
      'ImportStacksToStackSet',
      'PublishType',
      'RecordHandlerProgress',
      'RegisterPublisher',
      'RegisterType',
      'RollbackStack',
      'SetTypeConfiguration',
      'SetTypeDefaultVersion',
      'SignalResource',
      'StopStackSetOperation',
      'TestType',
      'UpdateStack',
      'UpdateStackInstances',
      'UpdateStackSet',
      'UpdateTerminationProtection'
    ],
    Read: [
      'BatchDescribeTypeConfigurations',
      'DescribeAccountLimits',
      'DescribeChangeSet',
      'DescribeChangeSetHooks',
      'DescribePublisher',
      'DescribeStackDriftDetectionStatus',
      'DescribeStackEvents',
      'DescribeStackInstance',
      'DescribeStackResource',
      'DescribeStackResourceDrifts',
      'DescribeStackResources',
      'DescribeStackSet',
      'DescribeStackSetOperation',
      'DescribeType',
      'DescribeTypeRegistration',
      'DetectStackDrift',
      'DetectStackResourceDrift',
      'DetectStackSetDrift',
      'EstimateTemplateCost',
      'GetStackPolicy',
      'GetTemplate',
      'GetTemplateSummary',
      'ValidateTemplate'
    ],
    List: [
      'DescribeStacks',
      'ListChangeSets',
      'ListExports',
      'ListImports',
      'ListStackInstances',
      'ListStackResources',
      'ListStackSetOperationResults',
      'ListStackSetOperations',
      'ListStackSets',
      'ListStacks',
      'ListTypeRegistrations',
      'ListTypeVersions',
      'ListTypes'
    ],
    'Permissions management': [
      'SetStackPolicy'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChangeset(changeSetName: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:cloudformation:${ region || '*' }:${ account || '*' }:changeSet/${ changeSetName }/${ id }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStack(stackName: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:cloudformation:${ region || '*' }:${ account || '*' }:stack/${ stackName }/${ id }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStackset(stackSetName: string, id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:cloudformation:${ region || '*' }:${ account || '*' }:stackset/${ stackSetName }:${ id }`);
  }

  /**
   * Adds a resource of type stackset-target to the statement
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html
   *
   * @param stackSetTarget - Identifier for the stackSetTarget.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onStacksetTarget(stackSetTarget: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:cloudformation:${ region || '*' }:${ account || '*' }:stackset-target/${ stackSetTarget }`);
  }

  /**
   * Adds a resource of type type to the statement
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html
   *
   * @param type - Identifier for the type.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onType(type: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:cloudformation:${ region || '*' }:${ account || '*' }:type/resource/${ type }`);
  }

  /**
   * Filters access by an AWS CloudFormation change set name. Use to control which change sets IAM users can execute or delete
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions
   *
   * Applies to actions:
   * - .toCreateChangeSet()
   * - .toDeleteChangeSet()
   * - .toDescribeChangeSet()
   * - .toDescribeChangeSetHooks()
   * - .toExecuteChangeSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifChangeSetName(value: string | string[], operator?: Operator | string) {
    return this.if(`ChangeSetName`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the template resource types, such as AWS::EC2::Instance. Use to control which resource types IAM users can work with when they want to import a resource into a stack
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
    return this.if(`ImportResourceTypes`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the template resource types, such as AWS::EC2::Instance. Use to control which resource types IAM users can work with when they create or update a stack
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
    return this.if(`ResourceTypes`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of an IAM service role. Use to control which service role IAM users can use to work with stacks or change sets
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions
   *
   * Applies to actions:
   * - .toContinueUpdateRollback()
   * - .toCreateChangeSet()
   * - .toCreateStack()
   * - .toCreateStackSet()
   * - .toDeleteStack()
   * - .toRollbackStack()
   * - .toUpdateStack()
   * - .toUpdateStackSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifRoleArn(value: string | string[], operator?: Operator | string) {
    return this.if(`RoleArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by an Amazon S3 stack policy URL. Use to control which stack policies IAM users can associate with a stack during a create or update stack action
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
    return this.if(`StackPolicyUrl`, value, operator || 'StringLike');
  }

  /**
   * Filters access by stack set target region. Use to control which regions IAM users can use when they create or update stack sets
   *
   * https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-template-conditions
   *
   * Applies to actions:
   * - .toCreateStackInstances()
   * - .toDeleteStackInstances()
   * - .toUpdateStackInstances()
   * - .toUpdateStackSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTargetRegion(value: string | string[], operator?: Operator | string) {
    return this.if(`TargetRegion`, value, operator || 'StringLike');
  }

  /**
   * Filters access by an Amazon S3 template URL. Use to control which templates IAM users can use when they create or update stacks
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
    return this.if(`TemplateUrl`, value, operator || 'StringLike');
  }
}
