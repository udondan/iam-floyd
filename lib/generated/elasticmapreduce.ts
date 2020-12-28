import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [elasticmapreduce](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticmapreduce.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Elasticmapreduce extends PolicyStatement {
  public servicePrefix = 'elasticmapreduce';

  /**
   * Statement provider for service [elasticmapreduce](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticmapreduce.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add an instance fleet to a running cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_AddInstanceFleet.html
   */
  public toAddInstanceFleet() {
    return this.to('AddInstanceFleet');
  }

  /**
   * Grants permission to add instance groups to a running cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_AddInstanceGroups.html
   */
  public toAddInstanceGroups() {
    return this.to('AddInstanceGroups');
  }

  /**
   * Grants permission to add new steps to a running cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_AddJobFlowSteps.html
   */
  public toAddJobFlowSteps() {
    return this.to('AddJobFlowSteps');
  }

  /**
   * Grants permission to add tags to an Amazon EMR resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRequestTag()
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_AddTags.html
   */
  public toAddTags() {
    return this.to('AddTags');
  }

  /**
   * Grants permission to cancel a pending step or steps in a running cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_CancelSteps.html
   */
  public toCancelSteps() {
    return this.to('CancelSteps');
  }

  /**
   * Grants permission to create an EMR notebook.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRequestTag()
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-create.html
   */
  public toCreateEditor() {
    return this.to('CreateEditor');
  }

  /**
   * Grants permission to create a security configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_CreateSecurityConfiguration.html
   */
  public toCreateSecurityConfiguration() {
    return this.to('CreateSecurityConfiguration');
  }

  /**
   * Grants permission to delete an EMR notebook.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-deleting
   */
  public toDeleteEditor() {
    return this.to('DeleteEditor');
  }

  /**
   * Grants permission to delete a security configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DeleteSecurityConfiguration.html
   */
  public toDeleteSecurityConfiguration() {
    return this.to('DeleteSecurityConfiguration');
  }

  /**
   * Grants permission to get details about a cluster, including status, hardware and software configuration, VPC settings, and so on.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeCluster.html
   */
  public toDescribeCluster() {
    return this.to('DescribeCluster');
  }

  /**
   * Grants permission to view information about a notebook, including status, user, role, tags, location, and more.
   *
   * Access Level: Read
   */
  public toDescribeEditor() {
    return this.to('DescribeEditor');
  }

  /**
   * This API is deprecated and will eventually be removed. We recommend you use ListClusters, DescribeCluster, ListSteps, ListInstanceGroups and ListBootstrapActions instead.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeJobFlows.html
   */
  public toDescribeJobFlows() {
    return this.to('DescribeJobFlows');
  }

  /**
   * Grants permission to get details of a security configuration.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeSecurityConfiguration.html
   */
  public toDescribeSecurityConfiguration() {
    return this.to('DescribeSecurityConfiguration');
  }

  /**
   * Grants permission to get details about a cluster step.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeStep.html
   */
  public toDescribeStep() {
    return this.to('DescribeStep');
  }

  /**
   * Grants permission to retrieve the EMR block public access configuration for the AWS account in the Region.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_GetBlockPublicAccessConfiguration.html
   */
  public toGetBlockPublicAccessConfiguration() {
    return this.to('GetBlockPublicAccessConfiguration');
  }

  /**
   * Grants permission to retrieve the managed scaling policy associated with a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_GetManagedScalingPolicy.html
   */
  public toGetManagedScalingPolicy() {
    return this.to('GetManagedScalingPolicy');
  }

  /**
   * Grants permission to get details about the bootstrap actions associated with a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListBootstrapActions.html
   */
  public toListBootstrapActions() {
    return this.to('ListBootstrapActions');
  }

  /**
   * Grants permission to get the status of accessible clusters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListClusters.html
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * Grants permission to list summary information for accessible EMR notebooks.
   *
   * Access Level: List
   */
  public toListEditors() {
    return this.to('ListEditors');
  }

  /**
   * Grants permission to get details of instance fleets in a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstanceFleets.html
   */
  public toListInstanceFleets() {
    return this.to('ListInstanceFleets');
  }

  /**
   * Grants permission to get details of instance groups in a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstanceGroups.html
   */
  public toListInstanceGroups() {
    return this.to('ListInstanceGroups');
  }

  /**
   * Grants permission to get details about the Amazon EC2 instances in a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListInstances.html
   */
  public toListInstances() {
    return this.to('ListInstances');
  }

  /**
   * Grants permission to list available security configurations in this account by name, along with creation dates and times.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListSecurityConfigurations.html
   */
  public toListSecurityConfigurations() {
    return this.to('ListSecurityConfigurations');
  }

  /**
   * Grants permission to list steps associated with a cluster.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ListSteps.html
   */
  public toListSteps() {
    return this.to('ListSteps');
  }

  /**
   * Grants permission to change cluster settings such as number of steps that can be executed concurrently for a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyCluster.html
   */
  public toModifyCluster() {
    return this.to('ModifyCluster');
  }

  /**
   * Grants permission to change the target On-Demand and target Spot capacities for a instance fleet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyInstanceFleet.html
   */
  public toModifyInstanceFleet() {
    return this.to('ModifyInstanceFleet');
  }

  /**
   * Grants permission to change the number and configuration of EC2 instances for an instance group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_ModifyInstanceGroups.html
   */
  public toModifyInstanceGroups() {
    return this.to('ModifyInstanceGroups');
  }

  /**
   * Grants permission to launch the Jupyter notebook editor for an EMR notebook from within the console.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html#emr-managed-notebooks-editor
   */
  public toOpenEditorInConsole() {
    return this.to('OpenEditorInConsole');
  }

  /**
   * Grants permission to create or update an automatic scaling policy for a core instance group or task instance group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_PutAutoScalingPolicy.html
   */
  public toPutAutoScalingPolicy() {
    return this.to('PutAutoScalingPolicy');
  }

  /**
   * Grants permission to create or update the EMR block public access configuration for the AWS account in the Region.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_PutBlockPublicAccessConfiguration.html
   */
  public toPutBlockPublicAccessConfiguration() {
    return this.to('PutBlockPublicAccessConfiguration');
  }

  /**
   * Grants permission to create or update the managed scaling policy associated with a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_PutManagedScalingPolicy.html
   */
  public toPutManagedScalingPolicy() {
    return this.to('PutManagedScalingPolicy');
  }

  /**
   * Grants permission to remove an automatic scaling policy from an instance group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveAutoScalingPolicy.html
   */
  public toRemoveAutoScalingPolicy() {
    return this.to('RemoveAutoScalingPolicy');
  }

  /**
   * Grants permission to remove the managed scaling policy associated with a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveManagedScalingPolicy.html
   */
  public toRemoveManagedScalingPolicy() {
    return this.to('RemoveManagedScalingPolicy');
  }

  /**
   * Grants permission to remove tags from an Amazon EMR resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_RemoveTags.html
   */
  public toRemoveTags() {
    return this.to('RemoveTags');
  }

  /**
   * Grants permission to create and launch a cluster (job flow).
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifRequestTag()
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_RunJobFlow.html
   */
  public toRunJobFlow() {
    return this.to('RunJobFlow');
  }

  /**
   * Grants permission to add and remove termination protection for a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_SetTerminationProtection.html
   */
  public toSetTerminationProtection() {
    return this.to('SetTerminationProtection');
  }

  /**
   * Grants permission to start an EMR notebook.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-working-with.html
   */
  public toStartEditor() {
    return this.to('StartEditor');
  }

  /**
   * Grants permission to shut down an EMR notebook.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html
   */
  public toStopEditor() {
    return this.to('StopEditor');
  }

  /**
   * Grants permission to terminate a cluster (job flow).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr/latest/APIReference/API_TerminateJobFlows.html
   */
  public toTerminateJobFlows() {
    return this.to('TerminateJobFlows');
  }

  /**
   * Grants permission to use the EMR management console to view events from all clusters.
   *
   * Access Level: List
   */
  public toViewEventsFromAllClustersInConsole() {
    return this.to('ViewEventsFromAllClustersInConsole');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddInstanceFleet",
      "AddInstanceGroups",
      "AddJobFlowSteps",
      "CancelSteps",
      "CreateEditor",
      "CreateSecurityConfiguration",
      "DeleteEditor",
      "DeleteSecurityConfiguration",
      "ModifyCluster",
      "ModifyInstanceFleet",
      "ModifyInstanceGroups",
      "OpenEditorInConsole",
      "PutAutoScalingPolicy",
      "PutManagedScalingPolicy",
      "RemoveAutoScalingPolicy",
      "RemoveManagedScalingPolicy",
      "RunJobFlow",
      "SetTerminationProtection",
      "StartEditor",
      "StopEditor",
      "TerminateJobFlows"
    ],
    "Tagging": [
      "AddTags",
      "RemoveTags"
    ],
    "Read": [
      "DescribeCluster",
      "DescribeEditor",
      "DescribeJobFlows",
      "DescribeSecurityConfiguration",
      "DescribeStep",
      "GetBlockPublicAccessConfiguration",
      "GetManagedScalingPolicy",
      "ListBootstrapActions",
      "ListInstanceFleets",
      "ListInstanceGroups",
      "ListInstances",
      "ListSteps"
    ],
    "List": [
      "ListClusters",
      "ListEditors",
      "ListSecurityConfigurations",
      "ViewEventsFromAllClustersInConsole"
    ],
    "Permissions management": [
      "PutBlockPublicAccessConfiguration"
    ]
  };

  /**
   * Adds a resource of type cluster to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-overview.html
   *
   * @param clusterId - Identifier for the clusterId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onCluster(clusterId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticmapreduce:${Region}:${Account}:cluster/${ClusterId}';
    arn = arn.replace('${ClusterId}', clusterId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type editor to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html
   *
   * @param editorId - Identifier for the editorId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onEditor(editorId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:elasticmapreduce:${Region}:${Account}:editor/${EditorId}';
    arn = arn.replace('${EditorId}', editorId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on whether the tag and value pair is provided with the action
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreateEditor()
   * - .toRunJobFlow()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the tag and value pair associated with an Amazon EMR resource
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html#emr-fine-grained-cluster-access
   *
   * Applies to resource types:
   * - cluster
   * - editor
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}
