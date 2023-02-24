import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [simspaceweaver](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssimspaceweaver.html).
 *
 * @param options - Options for the statement
 */
export class Simspaceweaver extends PolicyStatement {
  public servicePrefix = 'simspaceweaver';

  /**
   * Statement provider for service [simspaceweaver](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssimspaceweaver.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to delete an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_DeleteApp.html
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Grants permission to delete a simulation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_DeleteSimulation.html
   */
  public toDeleteSimulation() {
    return this.to('DeleteSimulation');
  }

  /**
   * Grants permission to describe an app
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_DescribeApp.html
   */
  public toDescribeApp() {
    return this.to('DescribeApp');
  }

  /**
   * Grants permission to describe a simulation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_DescribeSimulation.html
   */
  public toDescribeSimulation() {
    return this.to('DescribeSimulation');
  }

  /**
   * Grants permission to list apps
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_ListApps.html
   */
  public toListApps() {
    return this.to('ListApps');
  }

  /**
   * Grants permission to list simulations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_ListSimulations.html
   */
  public toListSimulations() {
    return this.to('ListSimulations');
  }

  /**
   * Grants permission to list the tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_StartApp.html
   */
  public toStartApp() {
    return this.to('StartApp');
  }

  /**
   * Grants permission to start a simulation clock
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_StartClock.html
   */
  public toStartClock() {
    return this.to('StartClock');
  }

  /**
   * Grants permission to start a simulation
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_StartSimulation.html
   */
  public toStartSimulation() {
    return this.to('StartSimulation');
  }

  /**
   * Grants permission to stop an app
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_StopApp.html
   */
  public toStopApp() {
    return this.to('StopApp');
  }

  /**
   * Grants permission to stop a simulation clock
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_StopClock.html
   */
  public toStopClock() {
    return this.to('StopClock');
  }

  /**
   * Grants permission to stop a simulation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_StopSimulation.html
   */
  public toStopSimulation() {
    return this.to('StopSimulation');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_TagResource.html
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
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'DeleteApp',
      'DeleteSimulation',
      'StartApp',
      'StartClock',
      'StartSimulation',
      'StopApp',
      'StopClock',
      'StopSimulation'
    ],
    Read: [
      'DescribeApp',
      'DescribeSimulation',
      'ListApps',
      'ListTagsForResource'
    ],
    List: [
      'ListSimulations'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Simulation to the statement
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/userguide/working-with_configuring-simulation.html
   *
   * @param simulationName - Identifier for the simulationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSimulation(simulationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:simspaceweaver:${ region || '*' }:${ account || '*' }:simulation/${ simulationName }`);
  }
}
