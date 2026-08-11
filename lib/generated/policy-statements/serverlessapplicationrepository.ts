import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [serverlessrepo](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Serverlessrepo extends PolicyStatement {
  public servicePrefix = 'serverlessrepo';

  /**
   * Statement provider for service [serverlessrepo](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsserverlessapplicationrepository.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create an application, optionally including an AWS SAM file to create the first application version in the same call
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create an application version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-versions-semanticversion.html
   */
  public toCreateApplicationVersion() {
    return this.to('CreateApplicationVersion');
  }

  /**
   * Grants permission to create an AWS CloudFormation ChangeSet for the given application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationType()
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-changesets.html
   */
  public toCreateCloudFormationChangeSet() {
    return this.to('CreateCloudFormationChangeSet');
  }

  /**
   * Grants permission to create an AWS CloudFormation template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationType()
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-templates.html
   */
  public toCreateCloudFormationTemplate() {
    return this.to('CreateCloudFormationTemplate');
  }

  /**
   * Grants permission to delete the specified application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to get the specified application
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationType()
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid.html
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Grants permission to get the policy for the specified application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-policy.html
   */
  public toGetApplicationPolicy() {
    return this.to('GetApplicationPolicy');
  }

  /**
   * Grants permission to get the specified AWS CloudFormation template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-templates-templateid.html
   */
  public toGetCloudFormationTemplate() {
    return this.to('GetCloudFormationTemplate');
  }

  /**
   * Grants permission to retrieve the list of applications nested in the containing application
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApplicationType()
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-dependencies.html
   */
  public toListApplicationDependencies() {
    return this.to('ListApplicationDependencies');
  }

  /**
   * Grants permission to list versions for the specified application owned by the requester
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApplicationType()
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-versions.html
   */
  public toListApplicationVersions() {
    return this.to('ListApplicationVersions');
  }

  /**
   * Grants permission to list applications owned by the requester
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications.html
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Grants permission to put the policy for the specified application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid-policy.html
   */
  public toPutApplicationPolicy() {
    return this.to('PutApplicationPolicy');
  }

  /**
   * Grants permission to get all applications authorized for this user
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationType()
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid.html
   */
  public toSearchApplications() {
    return this.to('SearchApplications');
  }

  /**
   * Grants permission to unshare the specified application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid.html
   */
  public toUnshareApplication() {
    return this.to('UnshareApplication');
  }

  /**
   * Grants permission to update meta-data of the application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications-applicationid.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateApplication',
      'CreateApplicationVersion',
      'CreateCloudFormationChangeSet',
      'CreateCloudFormationTemplate',
      'DeleteApplication',
      'PutApplicationPolicy',
      'UnshareApplication',
      'UpdateApplication'
    ],
    Read: [
      'GetApplication',
      'GetApplicationPolicy',
      'GetCloudFormationTemplate',
      'SearchApplications'
    ],
    List: [
      'ListApplicationDependencies',
      'ListApplicationVersions',
      'ListApplications'
    ]
  };

  /**
   * Adds a resource of type applications to the statement
   *
   * https://docs.aws.amazon.com/serverlessrepo/latest/devguide/applications.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApplications(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:serverlessrepo:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:applications/${ resourceId }`);
  }

  /**
   * Filters access by application type
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/applications.html
   *
   * Applies to actions:
   * - .toCreateCloudFormationChangeSet()
   * - .toCreateCloudFormationTemplate()
   * - .toGetApplication()
   * - .toListApplicationDependencies()
   * - .toListApplicationVersions()
   * - .toSearchApplications()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifApplicationType(value: string | string[], operator?: Operator | string) {
    return this.if(`applicationType`, value, operator ?? 'StringLike');
  }
}
