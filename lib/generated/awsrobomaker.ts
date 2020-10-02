import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [robomaker](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsrobomaker.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Robomaker extends PolicyStatement {
  public servicePrefix = 'robomaker';

  /**
   * Statement provider for service [robomaker](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsrobomaker.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Describe multiple simulation jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_BatchDescribeSimulationJob.html
   */
  public toBatchDescribeSimulationJob() {
    this.to('robomaker:BatchDescribeSimulationJob');
    return this;
  }

  /**
   * Cancel a deployment job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelDeploymentJob.html
   */
  public toCancelDeploymentJob() {
    this.to('robomaker:CancelDeploymentJob');
    return this;
  }

  /**
   * Cancel a simulation job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelSimulationJob.html
   */
  public toCancelSimulationJob() {
    this.to('robomaker:CancelSimulationJob');
    return this;
  }

  /**
   * Cancel a simulation job batch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_CancelSimulationJobBatch.html
   */
  public toCancelSimulationJobBatch() {
    this.to('robomaker:CancelSimulationJobBatch');
    return this;
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
    this.to('robomaker:CreateDeploymentJob');
    return this;
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
    this.to('robomaker:CreateFleet');
    return this;
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
    this.to('robomaker:CreateRobot');
    return this;
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
    this.to('robomaker:CreateRobotApplication');
    return this;
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
    this.to('robomaker:CreateRobotApplicationVersion');
    return this;
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
    this.to('robomaker:CreateSimulationApplication');
    return this;
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
    this.to('robomaker:CreateSimulationApplicationVersion');
    return this;
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
    this.to('robomaker:CreateSimulationJob');
    return this;
  }

  /**
   * Delete a deployment fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteFleet.html
   */
  public toDeleteFleet() {
    this.to('robomaker:DeleteFleet');
    return this;
  }

  /**
   * Delete a robot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteRobot.html
   */
  public toDeleteRobot() {
    this.to('robomaker:DeleteRobot');
    return this;
  }

  /**
   * Delete a robot application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteRobotApplication.html
   */
  public toDeleteRobotApplication() {
    this.to('robomaker:DeleteRobotApplication');
    return this;
  }

  /**
   * Delete a simulation application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeleteSimulationApplication.html
   */
  public toDeleteSimulationApplication() {
    this.to('robomaker:DeleteSimulationApplication');
    return this;
  }

  /**
   * Deregister a robot from a fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DeregisterRobot.html
   */
  public toDeregisterRobot() {
    this.to('robomaker:DeregisterRobot');
    return this;
  }

  /**
   * Describe a deployment job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeDeploymentJob.html
   */
  public toDescribeDeploymentJob() {
    this.to('robomaker:DescribeDeploymentJob');
    return this;
  }

  /**
   * Describe a deployment fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeFleet.html
   */
  public toDescribeFleet() {
    this.to('robomaker:DescribeFleet');
    return this;
  }

  /**
   * Describe a robot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeRobot.html
   */
  public toDescribeRobot() {
    this.to('robomaker:DescribeRobot');
    return this;
  }

  /**
   * Describe a robot application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeRobotApplication.html
   */
  public toDescribeRobotApplication() {
    this.to('robomaker:DescribeRobotApplication');
    return this;
  }

  /**
   * Describe a simulation application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationApplication.html
   */
  public toDescribeSimulationApplication() {
    this.to('robomaker:DescribeSimulationApplication');
    return this;
  }

  /**
   * Describe a simulation job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationJob.html
   */
  public toDescribeSimulationJob() {
    this.to('robomaker:DescribeSimulationJob');
    return this;
  }

  /**
   * Describe a simulation job batch
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_DescribeSimulationJobBatch.html
   */
  public toDescribeSimulationJobBatch() {
    this.to('robomaker:DescribeSimulationJobBatch');
    return this;
  }

  /**
   * List deployment jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListDeploymentJobs.html
   */
  public toListDeploymentJobs() {
    this.to('robomaker:ListDeploymentJobs');
    return this;
  }

  /**
   * List fleets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListFleets.html
   */
  public toListFleets() {
    this.to('robomaker:ListFleets');
    return this;
  }

  /**
   * List robot applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListRobotApplications.html
   */
  public toListRobotApplications() {
    this.to('robomaker:ListRobotApplications');
    return this;
  }

  /**
   * List robots
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListRobots.html
   */
  public toListRobots() {
    this.to('robomaker:ListRobots');
    return this;
  }

  /**
   * List simulation applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationApplications.html
   */
  public toListSimulationApplications() {
    this.to('robomaker:ListSimulationApplications');
    return this;
  }

  /**
   * List simulation job batches
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationJobBatches.html
   */
  public toListSimulationJobBatches() {
    this.to('robomaker:ListSimulationJobBatches');
    return this;
  }

  /**
   * List simulation jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListSimulationJobs.html
   */
  public toListSimulationJobs() {
    this.to('robomaker:ListSimulationJobs');
    return this;
  }

  /**
   * List tags for a RoboMaker resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('robomaker:ListTagsForResource');
    return this;
  }

  /**
   * Register a robot to a fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_RegisterRobot.html
   */
  public toRegisterRobot() {
    this.to('robomaker:RegisterRobot');
    return this;
  }

  /**
   * Restart a running simulation job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_RestartSimulationJob.html
   */
  public toRestartSimulationJob() {
    this.to('robomaker:RestartSimulationJob');
    return this;
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
    this.to('robomaker:StartSimulationJobBatch');
    return this;
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
    this.to('robomaker:SyncDeploymentJob');
    return this;
  }

  /**
   * Add tags to a RoboMaker resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html
   */
  public toTagResource() {
    this.to('robomaker:TagResource');
    return this;
  }

  /**
   * Remove tags from a RoboMaker resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('robomaker:UntagResource');
    return this;
  }

  /**
   * Update a robot application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateRobotApplication.html
   */
  public toUpdateRobotApplication() {
    this.to('robomaker:UpdateRobotApplication');
    return this;
  }

  /**
   * Update a simulation application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/API_UpdateSimulationApplication.html
   */
  public toUpdateSimulationApplication() {
    this.to('robomaker:UpdateSimulationApplication');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "BatchDescribeSimulationJob",
      "DescribeDeploymentJob",
      "DescribeFleet",
      "DescribeRobot",
      "DescribeRobotApplication",
      "DescribeSimulationApplication",
      "DescribeSimulationJob",
      "DescribeSimulationJobBatch"
    ],
    "Write": [
      "CancelDeploymentJob",
      "CancelSimulationJob",
      "CancelSimulationJobBatch",
      "CreateDeploymentJob",
      "CreateFleet",
      "CreateRobot",
      "CreateRobotApplication",
      "CreateRobotApplicationVersion",
      "CreateSimulationApplication",
      "CreateSimulationApplicationVersion",
      "CreateSimulationJob",
      "DeleteFleet",
      "DeleteRobot",
      "DeleteRobotApplication",
      "DeleteSimulationApplication",
      "DeregisterRobot",
      "RegisterRobot",
      "RestartSimulationJob",
      "StartSimulationJobBatch",
      "SyncDeploymentJob",
      "TagResource",
      "UntagResource",
      "UpdateRobotApplication",
      "UpdateSimulationApplication"
    ],
    "List": [
      "ListDeploymentJobs",
      "ListFleets",
      "ListRobotApplications",
      "ListRobots",
      "ListSimulationApplications",
      "ListSimulationJobBatches",
      "ListSimulationJobs",
      "ListTagsForResource"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRobotApplication(applicationName: string, createdOnEpoch: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:robot-application/${ApplicationName}/${CreatedOnEpoch}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${CreatedOnEpoch}', createdOnEpoch);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSimulationApplication(applicationName: string, createdOnEpoch: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:simulation-application/${ApplicationName}/${CreatedOnEpoch}';
    arn = arn.replace('${ApplicationName}', applicationName);
    arn = arn.replace('${CreatedOnEpoch}', createdOnEpoch);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type simulationJob to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/simulation.html
   *
   * @param simulationJobId - Identifier for the simulationJobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSimulationJob(simulationJobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:simulation-job/${SimulationJobId}';
    arn = arn.replace('${SimulationJobId}', simulationJobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type simulationJobBatch to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/simulation-job-batch.html
   *
   * @param simulationJobBatchId - Identifier for the simulationJobBatchId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSimulationJobBatch(simulationJobBatchId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:simulation-job-batch/${SimulationJobBatchId}';
    arn = arn.replace('${SimulationJobBatchId}', simulationJobBatchId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deploymentJob to the statement
   *
   * https://docs.aws.amazon.com/robomaker/latest/dg/deployment.html
   *
   * @param deploymentJobId - Identifier for the deploymentJobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeploymentJob(deploymentJobId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:deployment-job/${DeploymentJobId}';
    arn = arn.replace('${DeploymentJobId}', deploymentJobId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRobot(robotName: string, createdOnEpoch: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:robot/${RobotName}/${CreatedOnEpoch}';
    arn = arn.replace('${RobotName}', robotName);
    arn = arn.replace('${CreatedOnEpoch}', createdOnEpoch);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeploymentFleet(fleetName: string, createdOnEpoch: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:robomaker:${Region}:${Account}:deployment-fleet/${FleetName}/${CreatedOnEpoch}';
    arn = arn.replace('${FleetName}', fleetName);
    arn = arn.replace('${CreatedOnEpoch}', createdOnEpoch);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
