import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [robomaker](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrobomaker.html).
 *
 * @param options - Options for the statement
 */
export class Robomaker extends PolicyStatement {
  public servicePrefix = 'robomaker';

  /**
   * Statement provider for service [robomaker](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrobomaker.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Delete one or more worlds in a batch operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_BatchDeleteWorlds.html
   */
  public toBatchDeleteWorlds() {
    return this.to('BatchDeleteWorlds');
  }

  /**
   * Describe multiple simulation jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_BatchDescribeSimulationJob.html
   */
  public toBatchDescribeSimulationJob() {
    return this.to('BatchDescribeSimulationJob');
  }

  /**
   * Cancel a deployment job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelDeploymentJob.html
   */
  public toCancelDeploymentJob() {
    return this.to('CancelDeploymentJob');
  }

  /**
   * Cancel a simulation job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelSimulationJob.html
   */
  public toCancelSimulationJob() {
    return this.to('CancelSimulationJob');
  }

  /**
   * Cancel a simulation job batch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelSimulationJobBatch.html
   */
  public toCancelSimulationJobBatch() {
    return this.to('CancelSimulationJobBatch');
  }

  /**
   * Cancel a world export job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelWorldExportJob.html
   */
  public toCancelWorldExportJob() {
    return this.to('CancelWorldExportJob');
  }

  /**
   * Cancel a world generation job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelWorldGenerationJob.html
   */
  public toCancelWorldGenerationJob() {
    return this.to('CancelWorldGenerationJob');
  }

  /**
   * Create a deployment job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateDeploymentJob.html
   */
  public toCreateDeploymentJob() {
    return this.to('CreateDeploymentJob');
  }

  /**
   * Create a deployment fleet that represents a logical group of robots running the same robot application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateFleet.html
   */
  public toCreateFleet() {
    return this.to('CreateFleet');
  }

  /**
   * Create a robot that can be registered to a fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobot.html
   */
  public toCreateRobot() {
    return this.to('CreateRobot');
  }

  /**
   * Create a robot application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobotApplication.html
   */
  public toCreateRobotApplication() {
    return this.to('CreateRobotApplication');
  }

  /**
   * Create a snapshot of a robot application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateRobotApplicationVersion.html
   */
  public toCreateRobotApplicationVersion() {
    return this.to('CreateRobotApplicationVersion');
  }

  /**
   * Create a simulation application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationApplication.html
   */
  public toCreateSimulationApplication() {
    return this.to('CreateSimulationApplication');
  }

  /**
   * Create a snapshot of a simulation application
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetObject
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationApplicationVersion.html
   */
  public toCreateSimulationApplicationVersion() {
    return this.to('CreateSimulationApplicationVersion');
  }

  /**
   * Create a simulation job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateSimulationJob.html
   */
  public toCreateSimulationJob() {
    return this.to('CreateSimulationJob');
  }

  /**
   * Create a world export job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateWorldExportJob.html
   */
  public toCreateWorldExportJob() {
    return this.to('CreateWorldExportJob');
  }

  /**
   * Create a world generation job
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateWorldGenerationJob.html
   */
  public toCreateWorldGenerationJob() {
    return this.to('CreateWorldGenerationJob');
  }

  /**
   * Create a world template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CreateWorldTemplate.html
   */
  public toCreateWorldTemplate() {
    return this.to('CreateWorldTemplate');
  }

  /**
   * Delete a deployment fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteFleet.html
   */
  public toDeleteFleet() {
    return this.to('DeleteFleet');
  }

  /**
   * Delete a robot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteRobot.html
   */
  public toDeleteRobot() {
    return this.to('DeleteRobot');
  }

  /**
   * Delete a robot application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteRobotApplication.html
   */
  public toDeleteRobotApplication() {
    return this.to('DeleteRobotApplication');
  }

  /**
   * Delete a simulation application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteSimulationApplication.html
   */
  public toDeleteSimulationApplication() {
    return this.to('DeleteSimulationApplication');
  }

  /**
   * Delete a world template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteWorldTemplate.html
   */
  public toDeleteWorldTemplate() {
    return this.to('DeleteWorldTemplate');
  }

  /**
   * Deregister a robot from a fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeregisterRobot.html
   */
  public toDeregisterRobot() {
    return this.to('DeregisterRobot');
  }

  /**
   * Describe a deployment job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeDeploymentJob.html
   */
  public toDescribeDeploymentJob() {
    return this.to('DescribeDeploymentJob');
  }

  /**
   * Describe a deployment fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeFleet.html
   */
  public toDescribeFleet() {
    return this.to('DescribeFleet');
  }

  /**
   * Describe a robot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeRobot.html
   */
  public toDescribeRobot() {
    return this.to('DescribeRobot');
  }

  /**
   * Describe a robot application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeRobotApplication.html
   */
  public toDescribeRobotApplication() {
    return this.to('DescribeRobotApplication');
  }

  /**
   * Describe a simulation application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationApplication.html
   */
  public toDescribeSimulationApplication() {
    return this.to('DescribeSimulationApplication');
  }

  /**
   * Describe a simulation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationJob.html
   */
  public toDescribeSimulationJob() {
    return this.to('DescribeSimulationJob');
  }

  /**
   * Describe a simulation job batch
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationJobBatch.html
   */
  public toDescribeSimulationJobBatch() {
    return this.to('DescribeSimulationJobBatch');
  }

  /**
   * Describe a world
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeWorld.html
   */
  public toDescribeWorld() {
    return this.to('DescribeWorld');
  }

  /**
   * Describe a world export job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeWorldExportJob.html
   */
  public toDescribeWorldExportJob() {
    return this.to('DescribeWorldExportJob');
  }

  /**
   * Describe a world generation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeWorldGenerationJob.html
   */
  public toDescribeWorldGenerationJob() {
    return this.to('DescribeWorldGenerationJob');
  }

  /**
   * Describe a world template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeWorldTemplate.html
   */
  public toDescribeWorldTemplate() {
    return this.to('DescribeWorldTemplate');
  }

  /**
   * Get the body of a world template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_GetWorldTemplateBody.html
   */
  public toGetWorldTemplateBody() {
    return this.to('GetWorldTemplateBody');
  }

  /**
   * List deployment jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListDeploymentJobs.html
   */
  public toListDeploymentJobs() {
    return this.to('ListDeploymentJobs');
  }

  /**
   * List fleets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListFleets.html
   */
  public toListFleets() {
    return this.to('ListFleets');
  }

  /**
   * List robot applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListRobotApplications.html
   */
  public toListRobotApplications() {
    return this.to('ListRobotApplications');
  }

  /**
   * List robots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListRobots.html
   */
  public toListRobots() {
    return this.to('ListRobots');
  }

  /**
   * List simulation applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationApplications.html
   */
  public toListSimulationApplications() {
    return this.to('ListSimulationApplications');
  }

  /**
   * List simulation job batches
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationJobBatches.html
   */
  public toListSimulationJobBatches() {
    return this.to('ListSimulationJobBatches');
  }

  /**
   * List simulation jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationJobs.html
   */
  public toListSimulationJobs() {
    return this.to('ListSimulationJobs');
  }

  /**
   * Lists supported availability zones
   *
   * Access Level: List
   */
  public toListSupportedAvailabilityZones() {
    return this.to('ListSupportedAvailabilityZones');
  }

  /**
   * List tags for a RoboMaker resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * List world export jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListWorldExportJobs.html
   */
  public toListWorldExportJobs() {
    return this.to('ListWorldExportJobs');
  }

  /**
   * List world generation jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListWorldGenerationJobs.html
   */
  public toListWorldGenerationJobs() {
    return this.to('ListWorldGenerationJobs');
  }

  /**
   * List world templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListWorldTemplates.html
   */
  public toListWorldTemplates() {
    return this.to('ListWorldTemplates');
  }

  /**
   * List worlds
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListWorlds.html
   */
  public toListWorlds() {
    return this.to('ListWorlds');
  }

  /**
   * Register a robot to a fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_RegisterRobot.html
   */
  public toRegisterRobot() {
    return this.to('RegisterRobot');
  }

  /**
   * Restart a running simulation job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_RestartSimulationJob.html
   */
  public toRestartSimulationJob() {
    return this.to('RestartSimulationJob');
  }

  /**
   * Create a simulation job batch
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_StartSimulationJobBatch.html
   */
  public toStartSimulationJobBatch() {
    return this.to('StartSimulationJobBatch');
  }

  /**
   * Ensures the most recently deployed robot application is deployed to all robots in the fleet
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_SyncDeploymentJob.html
   */
  public toSyncDeploymentJob() {
    return this.to('SyncDeploymentJob');
  }

  /**
   * Add tags to a RoboMaker resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Remove tags from a RoboMaker resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Update a robot application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateRobotApplication.html
   */
  public toUpdateRobotApplication() {
    return this.to('UpdateRobotApplication');
  }

  /**
   * Report the deployment status for an individual robot
   *
   * Access Level: Write
   */
  public toUpdateRobotDeployment() {
    return this.to('UpdateRobotDeployment');
  }

  /**
   * Update a simulation application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateSimulationApplication.html
   */
  public toUpdateSimulationApplication() {
    return this.to('UpdateSimulationApplication');
  }

  /**
   * Update a world template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateWorldTemplate.html
   */
  public toUpdateWorldTemplate() {
    return this.to('UpdateWorldTemplate');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchDeleteWorlds',
      'CancelDeploymentJob',
      'CancelSimulationJob',
      'CancelSimulationJobBatch',
      'CancelWorldExportJob',
      'CancelWorldGenerationJob',
      'CreateDeploymentJob',
      'CreateFleet',
      'CreateRobot',
      'CreateRobotApplication',
      'CreateRobotApplicationVersion',
      'CreateSimulationApplication',
      'CreateSimulationApplicationVersion',
      'CreateSimulationJob',
      'CreateWorldExportJob',
      'CreateWorldGenerationJob',
      'CreateWorldTemplate',
      'DeleteFleet',
      'DeleteRobot',
      'DeleteRobotApplication',
      'DeleteSimulationApplication',
      'DeleteWorldTemplate',
      'DeregisterRobot',
      'RegisterRobot',
      'RestartSimulationJob',
      'StartSimulationJobBatch',
      'SyncDeploymentJob',
      'UpdateRobotApplication',
      'UpdateRobotDeployment',
      'UpdateSimulationApplication',
      'UpdateWorldTemplate'
    ],
    Read: [
      'BatchDescribeSimulationJob',
      'DescribeDeploymentJob',
      'DescribeFleet',
      'DescribeRobot',
      'DescribeRobotApplication',
      'DescribeSimulationApplication',
      'DescribeSimulationJob',
      'DescribeSimulationJobBatch',
      'DescribeWorld',
      'DescribeWorldExportJob',
      'DescribeWorldGenerationJob',
      'DescribeWorldTemplate',
      'GetWorldTemplateBody'
    ],
    List: [
      'ListDeploymentJobs',
      'ListFleets',
      'ListRobotApplications',
      'ListRobots',
      'ListSimulationApplications',
      'ListSimulationJobBatches',
      'ListSimulationJobs',
      'ListSupportedAvailabilityZones',
      'ListTagsForResource',
      'ListWorldExportJobs',
      'ListWorldGenerationJobs',
      'ListWorldTemplates',
      'ListWorlds'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type robotApplication to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/managing-robot-applications.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param createdOnEpoch - Identifier for the createdOnEpoch.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRobotApplication(applicationName: string, createdOnEpoch: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:robomaker:${ region || '*' }:${ account || '*' }:robot-application/${ applicationName }/${ createdOnEpoch }`);
  }

  /**
   * Adds a resource of type simulationApplication to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/managing-simulation-applications.html
   *
   * @param applicationName - Identifier for the applicationName.
   * @param createdOnEpoch - Identifier for the createdOnEpoch.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSimulationApplication(applicationName: string, createdOnEpoch: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:robomaker:${ region || '*' }:${ account || '*' }:simulation-application/${ applicationName }/${ createdOnEpoch }`);
  }

  /**
   * Adds a resource of type simulationJob to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/simulation.html
   *
   * @param simulationJobId - Identifier for the simulationJobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSimulationJob(simulationJobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:robomaker:${ region || '*' }:${ account || '*' }:simulation-job/${ simulationJobId }`);
  }

  /**
   * Adds a resource of type simulationJobBatch to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/simulation-job-batch.html
   *
   * @param simulationJobBatchId - Identifier for the simulationJobBatchId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSimulationJobBatch(simulationJobBatchId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:robomaker:${ region || '*' }:${ account || '*' }:simulation-job-batch/${ simulationJobBatchId }`);
  }

  /**
   * Adds a resource of type deploymentJob to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/deployment.html
   *
   * @param deploymentJobId - Identifier for the deploymentJobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeploymentJob(deploymentJobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:robomaker:${ region || '*' }:${ account || '*' }:deployment-job/${ deploymentJobId }`);
  }

  /**
   * Adds a resource of type robot to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html
   *
   * @param robotName - Identifier for the robotName.
   * @param createdOnEpoch - Identifier for the createdOnEpoch.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRobot(robotName: string, createdOnEpoch: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:robomaker:${ region || '*' }:${ account || '*' }:robot/${ robotName }/${ createdOnEpoch }`);
  }

  /**
   * Adds a resource of type deploymentFleet to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/managing-simulation-applications.html
   *
   * @param fleetName - Identifier for the fleetName.
   * @param createdOnEpoch - Identifier for the createdOnEpoch.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeploymentFleet(fleetName: string, createdOnEpoch: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:robomaker:${ region || '*' }:${ account || '*' }:deployment-fleet/${ fleetName }/${ createdOnEpoch }`);
  }

  /**
   * Adds a resource of type worldGenerationJob to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/worlds-managing-generation-jobs.html
   *
   * @param worldGenerationJobId - Identifier for the worldGenerationJobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorldGenerationJob(worldGenerationJobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:robomaker:${ region || '*' }:${ account || '*' }:world-generation-job/${ worldGenerationJobId }`);
  }

  /**
   * Adds a resource of type worldExportJob to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/worlds-managing-export-jobs.html
   *
   * @param worldExportJobId - Identifier for the worldExportJobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorldExportJob(worldExportJobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:robomaker:${ region || '*' }:${ account || '*' }:world-export-job/${ worldExportJobId }`);
  }

  /**
   * Adds a resource of type worldTemplate to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/worlds-managing-simworld-templates.html
   *
   * @param worldTemplateJobId - Identifier for the worldTemplateJobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorldTemplate(worldTemplateJobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:robomaker:${ region || '*' }:${ account || '*' }:world-template/${ worldTemplateJobId }`);
  }

  /**
   * Adds a resource of type world to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/worlds-managing-generated-worlds.html
   *
   * @param worldId - Identifier for the worldId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorld(worldId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:robomaker:${ region || '*' }:${ account || '*' }:world/${ worldId }`);
  }
}
