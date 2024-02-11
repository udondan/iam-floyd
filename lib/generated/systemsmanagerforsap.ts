import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [ssm-sap](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerforsap.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SsmSap extends PolicyStatement {
  public servicePrefix = 'ssm-sap';

  /**
   * Statement provider for service [ssm-sap](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerforsap.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to perform backup operation on a specified database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toBackupDatabase() {
    return this.to('BackupDatabase');
  }

  /**
   * Grants permission to delete the SSM for SAP level resource permissions associated with a SSM for SAP database resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toDeleteResourcePermission() {
    return this.to('DeleteResourcePermission');
  }

  /**
   * Grants permission to deregister an SAP application with SSM for SAP
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toDeregisterApplication() {
    return this.to('DeregisterApplication');
  }

  /**
   * Grants permission to access information about an application registered with SSM for SAP by providing the application ID or application ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Grants permission to access information about a component registered with SSM for SAP by providing the application ID and component ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toGetComponent() {
    return this.to('GetComponent');
  }

  /**
   * Grants permission to access information about a database registered with SSM for SAP by providing the application ID, component ID, and database ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toGetDatabase() {
    return this.to('GetDatabase');
  }

  /**
   * Grants permission to access information about an operation by providing its operation ID
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toGetOperation() {
    return this.to('GetOperation');
  }

  /**
   * Grants permission to get the SSM for SAP level resource permissions associated with a SSM for SAP database resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toGetResourcePermission() {
    return this.to('GetResourcePermission');
  }

  /**
   * Grants permission to retrieve a list of all applications registered with SSM for SAP under the customer AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to retrieve a list of all components in the account of customer, or a specific application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toListComponents() {
    return this.to('ListComponents');
  }

  /**
   * Grants permission to retrieve a list of all databases in the account of customer, or a specific application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toListDatabases() {
    return this.to('ListDatabases');
  }

  /**
   * Grants permission to retrieve a list of all operations in the account of customer, additional filters can be applied
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toListOperations() {
    return this.to('ListOperations');
  }

  /**
   * Grants permission to list the tags on a specified resource ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add the SSM for SAP level resource permissions associated with a SSM for SAP database resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toPutResourcePermission() {
    return this.to('PutResourcePermission');
  }

  /**
   * Grants permission to registers an SAP application with SSM for SAP
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toRegisterApplication() {
    return this.to('RegisterApplication');
  }

  /**
   * Grants permission to restore a database from another database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toRestoreDatabase() {
    return this.to('RestoreDatabase');
  }

  /**
   * Grants permission to start an on-demand discovery of a registered SSM for SAP application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toStartApplicationRefresh() {
    return this.to('StartApplicationRefresh');
  }

  /**
   * Grants permission to tag a specified resource ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a specified resource ARN
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update settings of a registered SSM for SAP application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toUpdateApplicationSettings() {
    return this.to('UpdateApplicationSettings');
  }

  /**
   * Grants permission to update the HANA backup settings of a specified database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   */
  public toUpdateHANABackupSettings() {
    return this.to('UpdateHANABackupSettings');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BackupDatabase',
      'DeleteResourcePermission',
      'DeregisterApplication',
      'PutResourcePermission',
      'RegisterApplication',
      'RestoreDatabase',
      'StartApplicationRefresh',
      'UpdateApplicationSettings',
      'UpdateHANABackupSettings'
    ],
    Read: [
      'GetApplication',
      'GetComponent',
      'GetDatabase',
      'GetOperation',
      'GetResourcePermission',
      'ListTagsForResource'
    ],
    List: [
      'ListApplications',
      'ListComponents',
      'ListDatabases',
      'ListOperations'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   *
   * @param applicationType - Identifier for the applicationType.
   * @param applicationId - Identifier for the applicationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationType: string, applicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SsmSap.defaultPartition }:ssm-sap:${ region || '*' }:${ account || '*' }:${ applicationType }/${ applicationId }`);
  }

  /**
   * Adds a resource of type component to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   *
   * @param applicationType - Identifier for the applicationType.
   * @param applicationId - Identifier for the applicationId.
   * @param componentId - Identifier for the componentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComponent(applicationType: string, applicationId: string, componentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SsmSap.defaultPartition }:ssm-sap:${ region || '*' }:${ account || '*' }:${ applicationType }/${ applicationId }/COMPONENT/${ componentId }`);
  }

  /**
   * Adds a resource of type database to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   *
   * @param applicationType - Identifier for the applicationType.
   * @param applicationId - Identifier for the applicationId.
   * @param databaseId - Identifier for the databaseId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDatabase(applicationType: string, applicationId: string, databaseId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SsmSap.defaultPartition }:ssm-sap:${ region || '*' }:${ account || '*' }:${ applicationType }/${ applicationId }/DB/${ databaseId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   *
   * Applies to actions:
   * - .toRegisterApplication()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   *
   * Applies to resource types:
   * - application
   * - component
   * - database
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/systems-manager/index.html
   *
   * Applies to actions:
   * - .toRegisterApplication()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
