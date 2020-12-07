import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [codedeploy](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploy.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codedeploy extends PolicyStatement {
  public servicePrefix = 'codedeploy';

  /**
   * Statement provider for service [codedeploy](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodedeploy.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Add tags to one or more on-premises instances.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_AddTagsToOnPremisesInstances.html
   */
  public toAddTagsToOnPremisesInstances() {
    this.to('codedeploy:AddTagsToOnPremisesInstances');
    return this;
  }

  /**
   * Gets information about one or more application revisions.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplicationRevisions.html
   */
  public toBatchGetApplicationRevisions() {
    this.to('codedeploy:BatchGetApplicationRevisions');
    return this;
  }

  /**
   * Get information about multiple applications associated with the IAM user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplications.html
   */
  public toBatchGetApplications() {
    this.to('codedeploy:BatchGetApplications');
    return this;
  }

  /**
   * Get information about one or more deployment groups.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentGroups.html
   */
  public toBatchGetDeploymentGroups() {
    this.to('codedeploy:BatchGetDeploymentGroups');
    return this;
  }

  /**
   * Gets information about one or more instance that are part of a deployment group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentInstances.html
   */
  public toBatchGetDeploymentInstances() {
    this.to('codedeploy:BatchGetDeploymentInstances');
    return this;
  }

  /**
   * Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated BatchGetDeploymentInstances. The maximum number of targets that can be returned is 25.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentTargets.html
   */
  public toBatchGetDeploymentTargets() {
    this.to('codedeploy:BatchGetDeploymentTargets');
    return this;
  }

  /**
   * Get information about multiple deployments associated with the IAM user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeployments.html
   */
  public toBatchGetDeployments() {
    this.to('codedeploy:BatchGetDeployments');
    return this;
  }

  /**
   * Get information about one or more on-premises instances.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetOnPremisesInstances.html
   */
  public toBatchGetOnPremisesInstances() {
    this.to('codedeploy:BatchGetOnPremisesInstances');
    return this;
  }

  /**
   * Starts the process of rerouting traffic from instances in the original environment to instances in thereplacement environment without waiting for a specified wait time to elapse.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ContinueDeployment.html
   */
  public toContinueDeployment() {
    this.to('codedeploy:ContinueDeployment');
    return this;
  }

  /**
   * Create an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateApplication.html
   */
  public toCreateApplication() {
    this.to('codedeploy:CreateApplication');
    return this;
  }

  /**
   * Create CloudFormation deployment to cooperate ochestration for a CloudFormation stack update.
   *
   * Access Level: Write
   */
  public toCreateCloudFormationDeployment() {
    this.to('codedeploy:CreateCloudFormationDeployment');
    return this;
  }

  /**
   * Create a deployment for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html
   */
  public toCreateDeployment() {
    this.to('codedeploy:CreateDeployment');
    return this;
  }

  /**
   * Create a custom deployment configuration associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentConfig.html
   */
  public toCreateDeploymentConfig() {
    this.to('codedeploy:CreateDeploymentConfig');
    return this;
  }

  /**
   * Create a deployment group for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentGroup.html
   */
  public toCreateDeploymentGroup() {
    this.to('codedeploy:CreateDeploymentGroup');
    return this;
  }

  /**
   * Delete an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    this.to('codedeploy:DeleteApplication');
    return this;
  }

  /**
   * Delete a custom deployment configuration associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentConfig.html
   */
  public toDeleteDeploymentConfig() {
    this.to('codedeploy:DeleteDeploymentConfig');
    return this;
  }

  /**
   * Delete a deployment group for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentGroup.html
   */
  public toDeleteDeploymentGroup() {
    this.to('codedeploy:DeleteDeploymentGroup');
    return this;
  }

  /**
   * Deletes a GitHub account connection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteGitHubAccountToken.html
   */
  public toDeleteGitHubAccountToken() {
    this.to('codedeploy:DeleteGitHubAccountToken');
    return this;
  }

  /**
   * Delete resources associated with the given external Id.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteResourcesByExternalId.html
   */
  public toDeleteResourcesByExternalId() {
    this.to('codedeploy:DeleteResourcesByExternalId');
    return this;
  }

  /**
   * Deregister an on-premises instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeregisterOnPremisesInstance.html
   */
  public toDeregisterOnPremisesInstance() {
    this.to('codedeploy:DeregisterOnPremisesInstance');
    return this;
  }

  /**
   * Get information about a single application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplication.html
   */
  public toGetApplication() {
    this.to('codedeploy:GetApplication');
    return this;
  }

  /**
   * Get information about a single application revision for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplicationRevision.html
   */
  public toGetApplicationRevision() {
    this.to('codedeploy:GetApplicationRevision');
    return this;
  }

  /**
   * Get information about a single deployment to a deployment group for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeployment.html
   */
  public toGetDeployment() {
    this.to('codedeploy:GetDeployment');
    return this;
  }

  /**
   * Get information about a single deployment configuration associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentConfig.html
   */
  public toGetDeploymentConfig() {
    this.to('codedeploy:GetDeploymentConfig');
    return this;
  }

  /**
   * Get information about a single deployment group for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentGroup.html
   */
  public toGetDeploymentGroup() {
    this.to('codedeploy:GetDeploymentGroup');
    return this;
  }

  /**
   * Get information about a single instance in a deployment associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentInstance.html
   */
  public toGetDeploymentInstance() {
    this.to('codedeploy:GetDeploymentInstance');
    return this;
  }

  /**
   * Returns information about a deployment target.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentTarget.html
   */
  public toGetDeploymentTarget() {
    this.to('codedeploy:GetDeploymentTarget');
    return this;
  }

  /**
   * Get information about a single on-premises instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetOnPremisesInstance.html
   */
  public toGetOnPremisesInstance() {
    this.to('codedeploy:GetOnPremisesInstance');
    return this;
  }

  /**
   * Get information about all application revisions for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplicationRevisions.html
   */
  public toListApplicationRevisions() {
    this.to('codedeploy:ListApplicationRevisions');
    return this;
  }

  /**
   * Get information about all applications associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplications.html
   */
  public toListApplications() {
    this.to('codedeploy:ListApplications');
    return this;
  }

  /**
   * Get information about all deployment configurations associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentConfigs.html
   */
  public toListDeploymentConfigs() {
    this.to('codedeploy:ListDeploymentConfigs');
    return this;
  }

  /**
   * Get information about all deployment groups for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentGroups.html
   */
  public toListDeploymentGroups() {
    this.to('codedeploy:ListDeploymentGroups');
    return this;
  }

  /**
   * Get information about all instances in a deployment associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentInstances.html
   */
  public toListDeploymentInstances() {
    this.to('codedeploy:ListDeploymentInstances');
    return this;
  }

  /**
   * Returns an array of target IDs that are associated a deployment.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentTargets.html
   */
  public toListDeploymentTargets() {
    this.to('codedeploy:ListDeploymentTargets');
    return this;
  }

  /**
   * Get information about all deployments to a deployment group associated with the IAM user, or to get all deployments associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeployments.html
   */
  public toListDeployments() {
    this.to('codedeploy:ListDeployments');
    return this;
  }

  /**
   * Lists the names of stored connections to GitHub accounts.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ ListGitHubAccountTokenNames.html
   */
  public toListGitHubAccountTokenNames() {
    this.to('codedeploy:ListGitHubAccountTokenNames');
    return this;
  }

  /**
   * Get a list of one or more on-premises instance names.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListOnPremisesInstances.html
   */
  public toListOnPremisesInstances() {
    this.to('codedeploy:ListOnPremisesInstances');
    return this;
  }

  /**
   * Returns a list of tags for the resource identified by a specified ARN. Tags are used to organize and categorize your CodeDeploy resources.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('codedeploy:ListTagsForResource');
    return this;
  }

  /**
   * Notify a lifecycle event hook execution status for associated deployment with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_PutLifecycleEventHookExecutionStatus.html
   */
  public toPutLifecycleEventHookExecutionStatus() {
    this.to('codedeploy:PutLifecycleEventHookExecutionStatus');
    return this;
  }

  /**
   * Register information about an application revision for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterApplicationRevision.html
   */
  public toRegisterApplicationRevision() {
    this.to('codedeploy:RegisterApplicationRevision');
    return this;
  }

  /**
   * Register an on-premises instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterOnPremisesInstance.html
   */
  public toRegisterOnPremisesInstance() {
    this.to('codedeploy:RegisterOnPremisesInstance');
    return this;
  }

  /**
   * Remove tags from one or more on-premises instances.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RemoveTagsFromOnPremisesInstances.html
   */
  public toRemoveTagsFromOnPremisesInstances() {
    this.to('codedeploy:RemoveTagsFromOnPremisesInstances');
    return this;
  }

  /**
   * In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ SkipWaitTimeForInstanceTermination.html
   */
  public toSkipWaitTimeForInstanceTermination() {
    this.to('codedeploy:SkipWaitTimeForInstanceTermination');
    return this;
  }

  /**
   * Description for StopDeployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_StopDeployment.html
   */
  public toStopDeployment() {
    this.to('codedeploy:StopDeployment');
    return this;
  }

  /**
   * Associates the list of tags in the input Tags parameter with the resource identified by the ResourceArn input parameter.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('codedeploy:TagResource');
    return this;
  }

  /**
   * Disassociates a resource from a list of tags. The resource is identified by the ResourceArn input parameter. The tags are identfied by the list of keys in the TagKeys input parameter.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('codedeploy:UntagResource');
    return this;
  }

  /**
   * Description for UpdateApplication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    this.to('codedeploy:UpdateApplication');
    return this;
  }

  /**
   * Change information about a single deployment group for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateDeploymentGroup.html
   */
  public toUpdateDeploymentGroup() {
    this.to('codedeploy:UpdateDeploymentGroup');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "AddTagsToOnPremisesInstances",
      "RemoveTagsFromOnPremisesInstances",
      "TagResource",
      "UntagResource"
    ],
    "Read": [
      "BatchGetApplicationRevisions",
      "BatchGetApplications",
      "BatchGetDeploymentGroups",
      "BatchGetDeploymentInstances",
      "BatchGetDeploymentTargets",
      "BatchGetDeployments",
      "BatchGetOnPremisesInstances",
      "GetDeploymentTarget"
    ],
    "Write": [
      "ContinueDeployment",
      "CreateApplication",
      "CreateCloudFormationDeployment",
      "CreateDeployment",
      "CreateDeploymentConfig",
      "CreateDeploymentGroup",
      "DeleteApplication",
      "DeleteDeploymentConfig",
      "DeleteDeploymentGroup",
      "DeleteGitHubAccountToken",
      "DeleteResourcesByExternalId",
      "DeregisterOnPremisesInstance",
      "PutLifecycleEventHookExecutionStatus",
      "RegisterApplicationRevision",
      "RegisterOnPremisesInstance",
      "SkipWaitTimeForInstanceTermination",
      "StopDeployment",
      "UpdateApplication",
      "UpdateDeploymentGroup"
    ],
    "List": [
      "GetApplication",
      "GetApplicationRevision",
      "GetDeployment",
      "GetDeploymentConfig",
      "GetDeploymentGroup",
      "GetDeploymentInstance",
      "GetOnPremisesInstance",
      "ListApplicationRevisions",
      "ListApplications",
      "ListDeploymentConfigs",
      "ListDeploymentGroups",
      "ListDeploymentInstances",
      "ListDeploymentTargets",
      "ListDeployments",
      "ListGitHubAccountTokenNames",
      "ListOnPremisesInstances",
      "ListTagsForResource"
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onApplication(applicationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codedeploy:${Region}:${Account}:application:${ApplicationName}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deploymentconfig to the statement
   *
   * https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html
   *
   * @param deploymentConfigurationName - Identifier for the deploymentConfigurationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDeploymentconfig(deploymentConfigurationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codedeploy:${Region}:${Account}:deploymentconfig:${DeploymentConfigurationName}';
    arn = arn.replace('${DeploymentConfigurationName}', deploymentConfigurationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deploymentgroup to the statement
   *
   * https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param deploymentGroupName - Identifier for the deploymentGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDeploymentgroup(applicationName: string, deploymentGroupName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codedeploy:${Region}:${Account}:deploymentgroup:${ApplicationName}/${DeploymentGroupName}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${DeploymentGroupName}', deploymentGroupName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/codedeploy/latest/userguide/auth-and-access-control-permissions-reference.html
   *
   * @param instanceName - Identifier for the instanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onInstance(instanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codedeploy:${Region}:${Account}:instance:${InstanceName}';
    arn = arn.replace('${InstanceName}', instanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type CodedeployActionsTagging = 'AddTagsToOnPremisesInstances' | 'RemoveTagsFromOnPremisesInstances' | 'TagResource' | 'UntagResource';
export type CodedeployActionsRead = 'BatchGetApplicationRevisions' | 'BatchGetApplications' | 'BatchGetDeploymentGroups' | 'BatchGetDeploymentInstances' | 'BatchGetDeploymentTargets' | 'BatchGetDeployments' | 'BatchGetOnPremisesInstances' | 'GetDeploymentTarget';
export type CodedeployActionsWrite = 'ContinueDeployment' | 'CreateApplication' | 'CreateCloudFormationDeployment' | 'CreateDeployment' | 'CreateDeploymentConfig' | 'CreateDeploymentGroup' | 'DeleteApplication' | 'DeleteDeploymentConfig' | 'DeleteDeploymentGroup' | 'DeleteGitHubAccountToken' | 'DeleteResourcesByExternalId' | 'DeregisterOnPremisesInstance' | 'PutLifecycleEventHookExecutionStatus' | 'RegisterApplicationRevision' | 'RegisterOnPremisesInstance' | 'SkipWaitTimeForInstanceTermination' | 'StopDeployment' | 'UpdateApplication' | 'UpdateDeploymentGroup';
export type CodedeployActionsList = 'GetApplication' | 'GetApplicationRevision' | 'GetDeployment' | 'GetDeploymentConfig' | 'GetDeploymentGroup' | 'GetDeploymentInstance' | 'GetOnPremisesInstance' | 'ListApplicationRevisions' | 'ListApplications' | 'ListDeploymentConfigs' | 'ListDeploymentGroups' | 'ListDeploymentInstances' | 'ListDeploymentTargets' | 'ListDeployments' | 'ListGitHubAccountTokenNames' | 'ListOnPremisesInstances' | 'ListTagsForResource';
export type CodedeployActions = CodedeployActionsTagging | CodedeployActionsRead | CodedeployActionsWrite | CodedeployActionsList;
