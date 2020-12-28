import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates an application, optionally including an AWS SAM file to create the first application version in the same call.
   *
   * Access Level: Write
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Creates an application version.
   *
   * Access Level: Write
   */
  public toCreateApplicationVersion() {
    return this.to('CreateApplicationVersion');
  }

  /**
   * Creates an AWS CloudFormation ChangeSet for the given application.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationType()
   */
  public toCreateCloudFormationChangeSet() {
    return this.to('CreateCloudFormationChangeSet');
  }

  /**
   * Creates an AWS CloudFormation template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifApplicationType()
   */
  public toCreateCloudFormationTemplate() {
    return this.to('CreateCloudFormationTemplate');
  }

  /**
   * Deletes the specified application
   *
   * Access Level: Write
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Gets the specified application.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationType()
   */
  public toGetApplication() {
    return this.to('GetApplication');
  }

  /**
   * Gets the policy for the specified application.
   *
   * Access Level: Read
   */
  public toGetApplicationPolicy() {
    return this.to('GetApplicationPolicy');
  }

  /**
   * Gets the specified AWS CloudFormation template
   *
   * Access Level: Read
   */
  public toGetCloudFormationTemplate() {
    return this.to('GetCloudFormationTemplate');
  }

  /**
   * Retrieves the list of applications nested in the containing application
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApplicationType()
   */
  public toListApplicationDependencies() {
    return this.to('ListApplicationDependencies');
  }

  /**
   * Lists versions for the specified application owned by the requester.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifApplicationType()
   */
  public toListApplicationVersions() {
    return this.to('ListApplicationVersions');
  }

  /**
   * Lists applications owned by the requester.
   *
   * Access Level: List
   */
  public toListApplications() {
    return this.to('ListApplications');
  }

  /**
   * Puts the policy for the specified application.
   *
   * Access Level: Write
   */
  public toPutApplicationPolicy() {
    return this.to('PutApplicationPolicy');
  }

  /**
   * Gets all applications authorized for this user
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifApplicationType()
   */
  public toSearchApplications() {
    return this.to('SearchApplications');
  }

  /**
   * Unshares the specified application
   *
   * Access Level: Write
   */
  public toUnshareApplication() {
    return this.to('UnshareApplication');
  }

  /**
   * Updates meta-data of the application
   *
   * Access Level: Write
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateApplication",
      "CreateApplicationVersion",
      "CreateCloudFormationChangeSet",
      "CreateCloudFormationTemplate",
      "DeleteApplication",
      "PutApplicationPolicy",
      "UnshareApplication",
      "UpdateApplication"
    ],
    "Read": [
      "GetApplication",
      "GetApplicationPolicy",
      "GetCloudFormationTemplate",
      "SearchApplications"
    ],
    "List": [
      "ListApplicationDependencies",
      "ListApplicationVersions",
      "ListApplications"
    ]
  };

  /**
   * Adds a resource of type applications to the statement
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onApplications(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:serverlessrepo:${Region}:${Account}:applications/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Application type
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
    return this.if(`applicationType`, value, operator || 'StringLike');
  }
}
