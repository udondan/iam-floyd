import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [iotdeviceadvisor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotcoredeviceadvisor.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iotdeviceadvisor extends PolicyStatement {
  public servicePrefix = 'iotdeviceadvisor';

  /**
   * Statement provider for service [iotdeviceadvisor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotcoredeviceadvisor.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a suite definition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_CreateSuiteDefinition.html
   */
  public toCreateSuiteDefinition() {
    return this.to('CreateSuiteDefinition');
  }

  /**
   * Grants permission to delete a suite definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_DeleteSuiteDefinition.html
   */
  public toDeleteSuiteDefinition() {
    return this.to('DeleteSuiteDefinition');
  }

  /**
   * Grants permission to get a suite definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_GetSuiteDefinition.html
   */
  public toGetSuiteDefinition() {
    return this.to('GetSuiteDefinition');
  }

  /**
   * Grants permission to get a suite run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_GetSuiteRun.html
   */
  public toGetSuiteRun() {
    return this.to('GetSuiteRun');
  }

  /**
   * Grants permission to get the qualification report for a suite run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_GetSuiteRunReport.html
   */
  public toGetSuiteRunReport() {
    return this.to('GetSuiteRunReport');
  }

  /**
   * Grants permission to list suite definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_ListSuiteDefinitions.html
   */
  public toListSuiteDefinitions() {
    return this.to('ListSuiteDefinitions');
  }

  /**
   * Grants permission to list suite runs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_ListSuiteRuns.html
   */
  public toListSuiteRuns() {
    return this.to('ListSuiteRuns');
  }

  /**
   * Grants permission to list the tags (metadata) assigned to a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start a suite run
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_StartSuiteRun.html
   */
  public toStartSuiteRun() {
    return this.to('StartSuiteRun');
  }

  /**
   * Grants permission to stop a suite run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_StopSuiteRun.html
   */
  public toStopSuiteRun() {
    return this.to('StopSuiteRun');
  }

  /**
   * Grants permission to add to or modify the tags of the given resource. Tags are metadata which can be used to manage a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the given tags (metadata) from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a suite definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/apireference/API_iotdeviceadvisor_UpdateSuiteDefinition.html
   */
  public toUpdateSuiteDefinition() {
    return this.to('UpdateSuiteDefinition');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateSuiteDefinition',
      'DeleteSuiteDefinition',
      'StartSuiteRun',
      'StopSuiteRun',
      'UpdateSuiteDefinition'
    ],
    Read: [
      'GetSuiteDefinition',
      'GetSuiteRun',
      'GetSuiteRunReport',
      'ListTagsForResource'
    ],
    List: [
      'ListSuiteDefinitions',
      'ListSuiteRuns'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type suitedefinition to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-workflow.html#device-advisor-workflow-create-suite-definition
   *
   * @param suiteDefinitionId - Identifier for the suiteDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSuitedefinition(suiteDefinitionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iotdeviceadvisor:${ region || '*' }:${ account || '*' }:suitedefinition/${ suiteDefinitionId }`);
  }

  /**
   * Adds a resource of type suiterun to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-workflow.html#device-advisor-workflow-start-suite-run
   *
   * @param suiteDefinitionId - Identifier for the suiteDefinitionId.
   * @param suiteRunId - Identifier for the suiteRunId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSuiterun(suiteDefinitionId: string, suiteRunId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iotdeviceadvisor:${ region || '*' }:${ account || '*' }:suiterun/${ suiteDefinitionId }/${ suiteRunId }`);
  }
}
