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
    return this.to('AddTagsToOnPremisesInstances');
  }

  /**
   * Gets information about one or more application revisions.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplicationRevisions.html
   */
  public toBatchGetApplicationRevisions() {
    return this.to('BatchGetApplicationRevisions');
  }

  /**
   * Get information about multiple applications associated with the IAM user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetApplications.html
   */
  public toBatchGetApplications() {
    return this.to('BatchGetApplications');
  }

  /**
   * Get information about one or more deployment groups.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentGroups.html
   */
  public toBatchGetDeploymentGroups() {
    return this.to('BatchGetDeploymentGroups');
  }

  /**
   * Gets information about one or more instance that are part of a deployment group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentInstances.html
   */
  public toBatchGetDeploymentInstances() {
    return this.to('BatchGetDeploymentInstances');
  }

  /**
   * Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated BatchGetDeploymentInstances. The maximum number of targets that can be returned is 25.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeploymentTargets.html
   */
  public toBatchGetDeploymentTargets() {
    return this.to('BatchGetDeploymentTargets');
  }

  /**
   * Get information about multiple deployments associated with the IAM user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetDeployments.html
   */
  public toBatchGetDeployments() {
    return this.to('BatchGetDeployments');
  }

  /**
   * Get information about one or more on-premises instances.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_BatchGetOnPremisesInstances.html
   */
  public toBatchGetOnPremisesInstances() {
    return this.to('BatchGetOnPremisesInstances');
  }

  /**
   * Starts the process of rerouting traffic from instances in the original environment to instances in thereplacement environment without waiting for a specified wait time to elapse.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ContinueDeployment.html
   */
  public toContinueDeployment() {
    return this.to('ContinueDeployment');
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
    return this.to('CreateApplication');
  }

  /**
   * Create CloudFormation deployment to cooperate ochestration for a CloudFormation stack update.
   *
   * Access Level: Write
   */
  public toCreateCloudFormationDeployment() {
    return this.to('CreateCloudFormationDeployment');
  }

  /**
   * Create a deployment for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html
   */
  public toCreateDeployment() {
    return this.to('CreateDeployment');
  }

  /**
   * Create a custom deployment configuration associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentConfig.html
   */
  public toCreateDeploymentConfig() {
    return this.to('CreateDeploymentConfig');
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
    return this.to('CreateDeploymentGroup');
  }

  /**
   * Delete an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Delete a custom deployment configuration associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentConfig.html
   */
  public toDeleteDeploymentConfig() {
    return this.to('DeleteDeploymentConfig');
  }

  /**
   * Delete a deployment group for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteDeploymentGroup.html
   */
  public toDeleteDeploymentGroup() {
    return this.to('DeleteDeploymentGroup');
  }

  /**
   * Deletes a GitHub account connection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteGitHubAccountToken.html
   */
  public toDeleteGitHubAccountToken() {
    return this.to('DeleteGitHubAccountToken');
  }

  /**
   * Delete resources associated with the given external Id.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeleteResourcesByExternalId.html
   */
  public toDeleteResourcesByExternalId() {
    return this.to('DeleteResourcesByExternalId');
  }

  /**
   * Deregister an on-premises instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_DeregisterOnPremisesInstance.html
   */
  public toDeregisterOnPremisesInstance() {
    return this.to('DeregisterOnPremisesInstance');
  }

  /**
   * Get information about a single application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplication.html
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Get information about a single application revision for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetApplicationRevision.html
   */
  public toGetApplicationRevision() {
    return this.to('GetApplicationRevision');
  }

  /**
   * Get information about a single deployment to a deployment group for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeployment.html
   */
  public toGetDeployment() {
    return this.to('GetDeployment');
  }

  /**
   * Get information about a single deployment configuration associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentConfig.html
   */
  public toGetDeploymentConfig() {
    return this.to('GetDeploymentConfig');
  }

  /**
   * Get information about a single deployment group for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentGroup.html
   */
  public toGetDeploymentGroup() {
    return this.to('GetDeploymentGroup');
  }

  /**
   * Get information about a single instance in a deployment associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentInstance.html
   */
  public toGetDeploymentInstance() {
    return this.to('GetDeploymentInstance');
  }

  /**
   * Returns information about a deployment target.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetDeploymentTarget.html
   */
  public toGetDeploymentTarget() {
    return this.to('GetDeploymentTarget');
  }

  /**
   * Get information about a single on-premises instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_GetOnPremisesInstance.html
   */
  public toGetOnPremisesInstance() {
    return this.to('GetOnPremisesInstance');
  }

  /**
   * Get information about all application revisions for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplicationRevisions.html
   */
  public toListApplicationRevisions() {
    return this.to('ListApplicationRevisions');
  }

  /**
   * Get information about all applications associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListApplications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Get information about all deployment configurations associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentConfigs.html
   */
  public toListDeploymentConfigs() {
    return this.to('ListDeploymentConfigs');
  }

  /**
   * Get information about all deployment groups for an application associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentGroups.html
   */
  public toListDeploymentGroups() {
    return this.to('ListDeploymentGroups');
  }

  /**
   * Get information about all instances in a deployment associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentInstances.html
   */
  public toListDeploymentInstances() {
    return this.to('ListDeploymentInstances');
  }

  /**
   * Returns an array of target IDs that are associated a deployment.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeploymentTargets.html
   */
  public toListDeploymentTargets() {
    return this.to('ListDeploymentTargets');
  }

  /**
   * Get information about all deployments to a deployment group associated with the IAM user, or to get all deployments associated with the IAM user.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListDeployments.html
   */
  public toListDeployments() {
    return this.to('ListDeployments');
  }

  /**
   * Lists the names of stored connections to GitHub accounts.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ ListGitHubAccountTokenNames.html
   */
  public toListGitHubAccountTokenNames() {
    return this.to('ListGitHubAccountTokenNames');
  }

  /**
   * Get a list of one or more on-premises instance names.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ListOnPremisesInstances.html
   */
  public toListOnPremisesInstances() {
    return this.to('ListOnPremisesInstances');
  }

  /**
   * Returns a list of tags for the resource identified by a specified ARN. Tags are used to organize and categorize your CodeDeploy resources.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Notify a lifecycle event hook execution status for associated deployment with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_PutLifecycleEventHookExecutionStatus.html
   */
  public toPutLifecycleEventHookExecutionStatus() {
    return this.to('PutLifecycleEventHookExecutionStatus');
  }

  /**
   * Register information about an application revision for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterApplicationRevision.html
   */
  public toRegisterApplicationRevision() {
    return this.to('RegisterApplicationRevision');
  }

  /**
   * Register an on-premises instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RegisterOnPremisesInstance.html
   */
  public toRegisterOnPremisesInstance() {
    return this.to('RegisterOnPremisesInstance');
  }

  /**
   * Remove tags from one or more on-premises instances.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_RemoveTagsFromOnPremisesInstances.html
   */
  public toRemoveTagsFromOnPremisesInstances() {
    return this.to('RemoveTagsFromOnPremisesInstances');
  }

  /**
   * In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ SkipWaitTimeForInstanceTermination.html
   */
  public toSkipWaitTimeForInstanceTermination() {
    return this.to('SkipWaitTimeForInstanceTermination');
  }

  /**
   * Description for StopDeployment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_StopDeployment.html
   */
  public toStopDeployment() {
    return this.to('StopDeployment');
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
    return this.to('TagResource');
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
    return this.to('UntagResource');
  }

  /**
   * Description for UpdateApplication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Change information about a single deployment group for an application associated with the IAM user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_UpdateDeploymentGroup.html
   */
  public toUpdateDeploymentGroup() {
    return this.to('UpdateDeploymentGroup');
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
