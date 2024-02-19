import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [simspaceweaver](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssimspaceweaver.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Simspaceweaver extends PolicyStatement {
  public servicePrefix = 'simspaceweaver';

  /**
   * Statement provider for service [simspaceweaver](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssimspaceweaver.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/simspaceweaver/latest/APIReference/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    return this.to('CreateSnapshot');
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
      'CreateSnapshot',
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSimulation(simulationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:simspaceweaver:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:simulation/${ simulationName }`);
  }

  /**
   * Filters access by tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toStartSimulation()
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
   * Filters access by tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Simulation
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toStartSimulation()
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
