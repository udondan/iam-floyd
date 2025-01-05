import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [mgh](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhub.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Mgh extends PolicyStatement {
  public servicePrefix = 'mgh';

  /**
   * Statement provider for service [mgh](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmigrationhub.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/mhj/latest/userguide/account-connections.html
   */
  public toAcceptConnection() {
    return this.to('AcceptConnection');
  }

  /**
   * Grants permission to associate an IAM role to an automation unit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateAutomationUnitRole.html
   */
  public toAssociateAutomationUnitRole() {
    return this.to('AssociateAutomationUnitRole');
  }

  /**
   * Grants permission to associate a given AWS artifact to a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateCreatedArtifact.html
   */
  public toAssociateCreatedArtifact() {
    return this.to('AssociateCreatedArtifact');
  }

  /**
   * Grants permission to associate a given ADS resource to a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateDiscoveredResource.html
   */
  public toAssociateDiscoveredResource() {
    return this.to('AssociateDiscoveredResource');
  }

  /**
   * Grants permission to associate source resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AssociateSourceResource.html
   */
  public toAssociateSourceResource() {
    return this.to('AssociateSourceResource');
  }

  /**
   * Grants permission to batch-associate IAM roles with a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mhj/latest/userguide/account-connections.html
   */
  public toBatchAssociateIamRoleWithConnection() {
    return this.to('BatchAssociateIamRoleWithConnection');
  }

  /**
   * Grants permission to batch-disassociate IAM roles from a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mhj/latest/userguide/account-connections.html
   */
  public toBatchDisassociateIamRoleFromConnection() {
    return this.to('BatchDisassociateIamRoleFromConnection');
  }

  /**
   * Grants permission to create an automation unit run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateAutomationRun.html
   */
  public toCreateAutomationRun() {
    return this.to('CreateAutomationRun');
  }

  /**
   * Grants permission to create an automation unit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateAutomationUnit.html
   */
  public toCreateAutomationUnit() {
    return this.to('CreateAutomationUnit');
  }

  /**
   * Grants permission to create a Migration Hub Home Region Control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-home-region/latest/APIReference/API_CreateHomeRegionControl.html
   */
  public toCreateHomeRegionControl() {
    return this.to('CreateHomeRegionControl');
  }

  /**
   * Grants permission to create a ProgressUpdateStream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_CreateProgressUpdateStream.html
   */
  public toCreateProgressUpdateStream() {
    return this.to('CreateProgressUpdateStream');
  }

  /**
   * Grants permission to delete an automation unit run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DeleteAutomationRun.html
   */
  public toDeleteAutomationRun() {
    return this.to('DeleteAutomationRun');
  }

  /**
   * Grants permission to delete an automation unit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DeleteAutomationUnit.html
   */
  public toDeleteAutomationUnit() {
    return this.to('DeleteAutomationUnit');
  }

  /**
   * Grants permission to delete a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mhj/latest/userguide/account-connections.html
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to delete a Migration Hub Home Region Control
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub-home-region/latest/APIReference/API_DeleteHomeRegionControl.html
   */
  public toDeleteHomeRegionControl() {
    return this.to('DeleteHomeRegionControl');
  }

  /**
   * Grants permission to delete a ProgressUpdateStream
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DeleteProgressUpdateStream.html
   */
  public toDeleteProgressUpdateStream() {
    return this.to('DeleteProgressUpdateStream');
  }

  /**
   * Grants permission to get an Application Discovery Service Application's state
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeApplicationState.html
   */
  public toDescribeApplicationState() {
    return this.to('DescribeApplicationState');
  }

  /**
   * Grants permission to describe an automation unit run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeAutomationRun.html
   */
  public toDescribeAutomationRun() {
    return this.to('DescribeAutomationRun');
  }

  /**
   * Grants permission to describe an automation unit
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeAutomationUnit.html
   */
  public toDescribeAutomationUnit() {
    return this.to('DescribeAutomationUnit');
  }

  /**
   * Grants permission to list Home Region Controls
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub-home-region/latest/APIReference/API_DescribeHomeRegionControls.html
   */
  public toDescribeHomeRegionControls() {
    return this.to('DescribeHomeRegionControls');
  }

  /**
   * Grants permission to describe a MigrationTask
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DescribeMigrationTask.html
   */
  public toDescribeMigrationTask() {
    return this.to('DescribeMigrationTask');
  }

  /**
   * Grants permission to disassociate an IAM role from an automation unit
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateAutomationUnitRole.html
   */
  public toDisassociateAutomationUnitRole() {
    return this.to('DisassociateAutomationUnitRole');
  }

  /**
   * Grants permission to disassociate a given AWS artifact from a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateCreatedArtifact.html
   */
  public toDisassociateCreatedArtifact() {
    return this.to('DisassociateCreatedArtifact');
  }

  /**
   * Grants permission to disassociate a given ADS resource from a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateDiscoveredResource.html
   */
  public toDisassociateDiscoveredResource() {
    return this.to('DisassociateDiscoveredResource');
  }

  /**
   * Grants permission to diassociate source resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_DisassociateSourceResource.html
   */
  public toDisassociateSourceResource() {
    return this.to('DisassociateSourceResource');
  }

  /**
   * Grants permission to get a connection
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/mhj/latest/userguide/account-connections.html
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to get the Migration Hub Home Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/migrationhub-home-region/latest/APIReference/API_GetHomeRegion.html
   */
  public toGetHomeRegion() {
    return this.to('GetHomeRegion');
  }

  /**
   * Grants permission to import a MigrationTask
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ImportMigrationTask.html
   */
  public toImportMigrationTask() {
    return this.to('ImportMigrationTask');
  }

  /**
   * Grants permission to list Application statuses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListApplicationStates.html
   */
  public toListApplicationStates() {
    return this.to('ListApplicationStates');
  }

  /**
   * Grants permission to list automation unit runs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListAutomationRuns.html
   */
  public toListAutomationRuns() {
    return this.to('ListAutomationRuns');
  }

  /**
   * Grants permission to list automation units
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListAutomationUnits.html
   */
  public toListAutomationUnits() {
    return this.to('ListAutomationUnits');
  }

  /**
   * Grants permission to list connection roles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mhj/latest/userguide/account-connections.html
   */
  public toListConnectionRoles() {
    return this.to('ListConnectionRoles');
  }

  /**
   * Grants permission to list connections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/mhj/latest/userguide/account-connections.html
   */
  public toListConnections() {
    return this.to('ListConnections');
  }

  /**
   * Grants permission to list associated created artifacts for a MigrationTask
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListCreatedArtifacts.html
   */
  public toListCreatedArtifacts() {
    return this.to('ListCreatedArtifacts');
  }

  /**
   * Grants permission to list associated ADS resources from MigrationTask
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListDiscoveredResources.html
   */
  public toListDiscoveredResources() {
    return this.to('ListDiscoveredResources');
  }

  /**
   * Grants permission to list migration tasks updates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListMigrationTaskUpdates.html
   */
  public toListMigrationTaskUpdates() {
    return this.to('ListMigrationTaskUpdates');
  }

  /**
   * Grants permission to list MigrationTasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListMigrationTasks.html
   */
  public toListMigrationTasks() {
    return this.to('ListMigrationTasks');
  }

  /**
   * Grants permission to to list ProgressUpdateStreams
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListProgressUpdateStreams.html
   */
  public toListProgressUpdateStreams() {
    return this.to('ListProgressUpdateStreams');
  }

  /**
   * Grants permission to list source resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListSourceResources.html
   */
  public toListSourceResources() {
    return this.to('ListSourceResources');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to update an Application Discovery Service Application's state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyApplicationState.html
   */
  public toNotifyApplicationState() {
    return this.to('NotifyApplicationState');
  }

  /**
   * Grants permission to notify latest MigrationTask state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_NotifyMigrationTaskState.html
   */
  public toNotifyMigrationTaskState() {
    return this.to('NotifyMigrationTaskState');
  }

  /**
   * Grants permission to put ResourceAttributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html
   */
  public toPutResourceAttributes() {
    return this.to('PutResourceAttributes');
  }

  /**
   * Grants permission to reject a connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/mhj/latest/userguide/account-connections.html
   */
  public toRejectConnection() {
    return this.to('RejectConnection');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptConnection',
      'AssociateAutomationUnitRole',
      'AssociateCreatedArtifact',
      'AssociateDiscoveredResource',
      'AssociateSourceResource',
      'BatchAssociateIamRoleWithConnection',
      'BatchDisassociateIamRoleFromConnection',
      'CreateAutomationRun',
      'CreateAutomationUnit',
      'CreateHomeRegionControl',
      'CreateProgressUpdateStream',
      'DeleteAutomationRun',
      'DeleteAutomationUnit',
      'DeleteConnection',
      'DeleteHomeRegionControl',
      'DeleteProgressUpdateStream',
      'DisassociateAutomationUnitRole',
      'DisassociateCreatedArtifact',
      'DisassociateDiscoveredResource',
      'DisassociateSourceResource',
      'ImportMigrationTask',
      'NotifyApplicationState',
      'NotifyMigrationTaskState',
      'PutResourceAttributes',
      'RejectConnection'
    ],
    Read: [
      'DescribeApplicationState',
      'DescribeAutomationRun',
      'DescribeAutomationUnit',
      'DescribeMigrationTask',
      'GetConnection',
      'GetHomeRegion'
    ],
    List: [
      'DescribeHomeRegionControls',
      'ListApplicationStates',
      'ListAutomationRuns',
      'ListAutomationUnits',
      'ListConnectionRoles',
      'ListConnections',
      'ListCreatedArtifacts',
      'ListDiscoveredResources',
      'ListMigrationTaskUpdates',
      'ListMigrationTasks',
      'ListProgressUpdateStreams',
      'ListSourceResources',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type progressUpdateStream to the statement
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ProgressUpdateStreamSummary.html
   *
   * @param stream - Identifier for the stream.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProgressUpdateStream(stream: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgh:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:progressUpdateStream/${ stream }`);
  }

  /**
   * Adds a resource of type migrationTask to the statement
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_MigrationTask.html
   *
   * @param stream - Identifier for the stream.
   * @param task - Identifier for the task.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onMigrationTask(stream: string, task: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgh:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:progressUpdateStream/${ stream }/migrationTask/${ task }`);
  }

  /**
   * Adds a resource of type AutomationRunResource to the statement
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AutomationRunResource.html
   *
   * @param runID - Identifier for the runID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAutomationRunResourceRunID()
   */
  public onAutomationRunResource(runID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgh:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:automation-run/${ runID }`);
  }

  /**
   * Adds a resource of type AutomationUnitResource to the statement
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_AutomationUnitResource.html
   *
   * @param automationUnitId - Identifier for the automationUnitId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAutomationUnitResourceAutomationUnitArn()
   */
  public onAutomationUnitResource(automationUnitId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgh:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:automation-unit/${ automationUnitId }`);
  }

  /**
   * Adds a resource of type ConnectionResource to the statement
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/API_ConnectionResource.html
   *
   * @param connectionArn - Identifier for the connectionArn.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifConnectionResourceConnectionArn()
   */
  public onConnectionResource(connectionArn: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:mgh:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:${ connectionArn }`);
  }

  /**
   * Filters access based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAcceptConnection()
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
   * Filters access based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - ConnectionResource
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAcceptConnection()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * AutomationRunResource resource runID identifier
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/ContextKeys_AutomationRunResourceRunID.html
   *
   * Applies to resource types:
   * - AutomationRunResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAutomationRunResourceRunID(value: string | string[], operator?: Operator | string) {
    return this.if(`AutomationRunResourceRunID`, value, operator ?? 'StringLike');
  }

  /**
   * AutomationUnitResource resource automationUnitArn identifier
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/ContextKeys_AutomationUnitResourceAutomationUnitArn.html
   *
   * Applies to resource types:
   * - AutomationUnitResource
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifAutomationUnitResourceAutomationUnitArn(value: string | string[], operator?: Operator | string) {
    return this.if(`AutomationUnitResourceAutomationUnitArn`, value, operator ?? 'ArnLike');
  }

  /**
   * ConnectionResource resource connectionArn identifier
   *
   * https://docs.aws.amazon.com/migrationhub/latest/ug/security_iam_service-with-iam-id-based-policies-conditionkeys.html#condition-connectionresourceconnectionarn
   *
   * Applies to resource types:
   * - ConnectionResource
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifConnectionResourceConnectionArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ConnectionResourceConnectionArn`, value, operator ?? 'StringLike');
  }
}
