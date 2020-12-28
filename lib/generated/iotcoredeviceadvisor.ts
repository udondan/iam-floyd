import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
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
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-iot-commands.html#api-iot-CreateSuiteDefinition
   */
  public toCreateSuiteDefinition() {
    return this.to('CreateSuiteDefinition');
  }

  /**
   * Grants permission to delete a suite definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-iot-commands.html#api-iot-DeleteSuiteDefinition
   */
  public toDeleteSuiteDefinition() {
    return this.to('DeleteSuiteDefinition');
  }

  /**
   * Grants permission to get a suite definition
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-iot-commands.html#api-iot-GetSuiteDefinition
   */
  public toGetSuiteDefinition() {
    return this.to('GetSuiteDefinition');
  }

  /**
   * Grants permission to get a suite run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-iot-commands.html#api-iot-GetSuiteRun
   */
  public toGetSuiteRun() {
    return this.to('GetSuiteRun');
  }

  /**
   * Grants permission to get the qualification report for a suite run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-iot-commands.html#api-iot-GetSuiteRunReport
   */
  public toGetSuiteRunReport() {
    return this.to('GetSuiteRunReport');
  }

  /**
   * Grants permission to list suite definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-iot-commands.html#api-iot-ListSuiteDefinitions
   */
  public toListSuiteDefinitions() {
    return this.to('ListSuiteDefinitions');
  }

  /**
   * Grants permission to list suite runs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-iot-commands.html#api-iot-ListSuiteRuns
   */
  public toListSuiteRuns() {
    return this.to('ListSuiteRuns');
  }

  /**
   * Grants permission to list the tags (metadata) assigned to a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-iot-commands.html#api-iot-ListTagsForResource
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the test cases provided by IoT Device Advisor
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-iot-commands.html#api-iot-ListTestCases
   */
  public toListTestCases() {
    return this.to('ListTestCases');
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
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-iot-commands.html#api-iot-StartSuiteRun
   */
  public toStartSuiteRun() {
    return this.to('StartSuiteRun');
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
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-iot-commands.html#api-iot-TagResource
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
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-iot-commands.html#api-iot-UntagResource
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a suite definition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/device-advisor-iot-commands.html#api-iot-UpdateSuiteDefinition
   */
  public toUpdateSuiteDefinition() {
    return this.to('UpdateSuiteDefinition');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateSuiteDefinition",
      "DeleteSuiteDefinition",
      "StartSuiteRun",
      "UpdateSuiteDefinition"
    ],
    "Read": [
      "GetSuiteDefinition",
      "GetSuiteRun",
      "GetSuiteRunReport",
      "ListTagsForResource"
    ],
    "List": [
      "ListSuiteDefinitions",
      "ListSuiteRuns",
      "ListTestCases"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
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
    var arn = 'arn:${Partition}:iotdeviceadvisor:${Region}:${Account}:suitedefinition/${SuiteDefinitionId}';
    arn = arn.replace('${SuiteDefinitionId}', suiteDefinitionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
    var arn = 'arn:${Partition}:iotdeviceadvisor:${Region}:${Account}:suiterun/${SuiteDefinitionId}/${SuiteRunId}';
    arn = arn.replace('${SuiteDefinitionId}', suiteDefinitionId);
    arn = arn.replace('${SuiteRunId}', suiteRunId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
