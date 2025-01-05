import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [apptest](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmainframemodernizationapplicationtesting.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Apptest extends PolicyStatement {
  public servicePrefix = 'apptest';

  /**
   * Statement provider for service [apptest](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmainframemodernizationapplicationtesting.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a test case
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_CreateTestCase.html
   */
  public toCreateTestCase() {
    return this.to('CreateTestCase');
  }

  /**
   * Grants permission to create a test configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_CreateTestConfiguration.html
   */
  public toCreateTestConfiguration() {
    return this.to('CreateTestConfiguration');
  }

  /**
   * Grants permission to create a test suite
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_CreateTestSuite.html
   */
  public toCreateTestSuite() {
    return this.to('CreateTestSuite');
  }

  /**
   * Grants permission to delete a test case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_DeleteTestCase.html
   */
  public toDeleteTestCase() {
    return this.to('DeleteTestCase');
  }

  /**
   * Grants permission to delete a test configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_DeleteTestConfiguration.html
   */
  public toDeleteTestConfiguration() {
    return this.to('DeleteTestConfiguration');
  }

  /**
   * Grants permission to delete a test run
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:DeleteObject
   * - s3:ListBucket
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_DeleteTestRun.html
   */
  public toDeleteTestRun() {
    return this.to('DeleteTestRun');
  }

  /**
   * Grants permission to delete a test suite
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_DeleteTestSuite.html
   */
  public toDeleteTestSuite() {
    return this.to('DeleteTestSuite');
  }

  /**
   * Grants permission to get a test case
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_GetTestCase.html
   */
  public toGetTestCase() {
    return this.to('GetTestCase');
  }

  /**
   * Grants permission to get a test configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_GetTestConfiguration.html
   */
  public toGetTestConfiguration() {
    return this.to('GetTestConfiguration');
  }

  /**
   * Grants permission to get test run step
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_GetTestRunStep.html
   */
  public toGetTestRunStep() {
    return this.to('GetTestRunStep');
  }

  /**
   * Grants permission to get a test suite
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_GetTestSuite.html
   */
  public toGetTestSuite() {
    return this.to('GetTestSuite');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list test cases
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_ListTestCases.html
   */
  public toListTestCases() {
    return this.to('ListTestCases');
  }

  /**
   * Grants permission to list test configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_ListTestConfigurations.html
   */
  public toListTestConfigurations() {
    return this.to('ListTestConfigurations');
  }

  /**
   * Grants permission to list steps for a test run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_ListTestRunSteps.html
   */
  public toListTestRunSteps() {
    return this.to('ListTestRunSteps');
  }

  /**
   * Grants permission to list test cases for a test run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_ListTestRunTestCases.html
   */
  public toListTestRunTestCases() {
    return this.to('ListTestRunTestCases');
  }

  /**
   * Grants permission to list test runs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_ListTestRuns.html
   */
  public toListTestRuns() {
    return this.to('ListTestRuns');
  }

  /**
   * Grants permission to list test suites
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_ListTestSuites.html
   */
  public toListTestSuites() {
    return this.to('ListTestSuites');
  }

  /**
   * Grants permission to start a test run
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - cloudformation:CreateStack
   * - cloudformation:DeleteStack
   * - cloudformation:DescribeStacks
   * - dms:DescribeReplicationTasks
   * - dms:StartReplicationTask
   * - dms:StopReplicationTask
   * - ec2:DescribeAvailabilityZones
   * - ec2:DescribeVpcEndpointServiceConfigurations
   * - ec2:DescribeVpcEndpointServices
   * - m2:CreateDataSetImportTask
   * - m2:GetApplication
   * - m2:GetApplicationVersion
   * - m2:GetBatchJobExecution
   * - m2:GetDataSetDetails
   * - m2:GetDataSetImportTask
   * - m2:StartApplication
   * - m2:StartBatchJob
   * - m2:StopApplication
   * - s3:CreateBucket
   * - s3:DeleteObject
   * - s3:GetObject
   * - s3:ListBucket
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_StartTestRun.html
   */
  public toStartTestRun() {
    return this.to('StartTestRun');
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
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_TagResource.html
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
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a test case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_UpdateTestCase.html
   */
  public toUpdateTestCase() {
    return this.to('UpdateTestCase');
  }

  /**
   * Grants permission to update a test configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_UpdateTestConfiguration.html
   */
  public toUpdateTestConfiguration() {
    return this.to('UpdateTestConfiguration');
  }

  /**
   * Grants permission to update a test suite
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/apptest/latest/APIReference/API_UpdateTestSuite.html
   */
  public toUpdateTestSuite() {
    return this.to('UpdateTestSuite');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateTestCase',
      'CreateTestConfiguration',
      'CreateTestSuite',
      'DeleteTestCase',
      'DeleteTestConfiguration',
      'DeleteTestRun',
      'DeleteTestSuite',
      'StartTestRun',
      'UpdateTestCase',
      'UpdateTestConfiguration',
      'UpdateTestSuite'
    ],
    Read: [
      'GetTestCase',
      'GetTestConfiguration',
      'GetTestRunStep',
      'GetTestSuite',
      'ListTagsForResource',
      'ListTestRunSteps',
      'ListTestRunTestCases'
    ],
    List: [
      'ListTestCases',
      'ListTestConfigurations',
      'ListTestRuns',
      'ListTestSuites'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type TestCase to the statement
   *
   * https://docs.aws.amazon.com/m2/latest/userguide/concepts-apptest.html#TestCase-concept
   *
   * @param testCaseId - Identifier for the testCaseId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTestCase(testCaseId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apptest:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:testcase/${ testCaseId }`);
  }

  /**
   * Adds a resource of type TestConfiguration to the statement
   *
   * https://docs.aws.amazon.com/m2/latest/userguide/concepts-apptest.html#TestConfiguration-concept
   *
   * @param testConfigurationId - Identifier for the testConfigurationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTestConfiguration(testConfigurationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apptest:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:testconfiguration/${ testConfigurationId }`);
  }

  /**
   * Adds a resource of type TestRun to the statement
   *
   * https://docs.aws.amazon.com/m2/latest/userguide/concepts-apptest.html#TestRun-concept
   *
   * @param testRunId - Identifier for the testRunId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTestRun(testRunId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apptest:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:testrun/${ testRunId }`);
  }

  /**
   * Adds a resource of type TestSuite to the statement
   *
   * https://docs.aws.amazon.com/m2/latest/userguide/concepts-apptest.html#TestSuite-concept
   *
   * @param testSuiteId - Identifier for the testSuiteId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTestSuite(testSuiteId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:apptest:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:testsuite/${ testSuiteId }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateTestCase()
   * - .toCreateTestConfiguration()
   * - .toCreateTestSuite()
   * - .toStartTestRun()
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
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - TestCase
   * - TestConfiguration
   * - TestRun
   * - TestSuite
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateTestCase()
   * - .toCreateTestConfiguration()
   * - .toCreateTestSuite()
   * - .toStartTestRun()
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
