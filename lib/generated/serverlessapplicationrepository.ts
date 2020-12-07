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
    this.to('serverlessrepo:CreateApplication');
    return this;
  }

  /**
   * Creates an application version.
   *
   * Access Level: Write
   */
  public toCreateApplicationVersion() {
    this.to('serverlessrepo:CreateApplicationVersion');
    return this;
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
    this.to('serverlessrepo:CreateCloudFormationChangeSet');
    return this;
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
    this.to('serverlessrepo:CreateCloudFormationTemplate');
    return this;
  }

  /**
   * Deletes the specified application
   *
   * Access Level: Write
   */
  public toDeleteApplication() {
    this.to('serverlessrepo:DeleteApplication');
    return this;
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
    this.to('serverlessrepo:GetApplication');
    return this;
  }

  /**
   * Gets the policy for the specified application.
   *
   * Access Level: Read
   */
  public toGetApplicationPolicy() {
    this.to('serverlessrepo:GetApplicationPolicy');
    return this;
  }

  /**
   * Gets the specified AWS CloudFormation template
   *
   * Access Level: Read
   */
  public toGetCloudFormationTemplate() {
    this.to('serverlessrepo:GetCloudFormationTemplate');
    return this;
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
    this.to('serverlessrepo:ListApplicationDependencies');
    return this;
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
    this.to('serverlessrepo:ListApplicationVersions');
    return this;
  }

  /**
   * Lists applications owned by the requester.
   *
   * Access Level: List
   */
  public toListApplications() {
    this.to('serverlessrepo:ListApplications');
    return this;
  }

  /**
   * Puts the policy for the specified application.
   *
   * Access Level: Write
   */
  public toPutApplicationPolicy() {
    this.to('serverlessrepo:PutApplicationPolicy');
    return this;
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
    this.to('serverlessrepo:SearchApplications');
    return this;
  }

  /**
   * Unshares the specified application
   *
   * Access Level: Write
   */
  public toUnshareApplication() {
    this.to('serverlessrepo:UnshareApplication');
    return this;
  }

  /**
   * Updates meta-data of the application
   *
   * Access Level: Write
   */
  public toUpdateApplication() {
    this.to('serverlessrepo:UpdateApplication');
    return this;
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
    return this.if(`serverlessrepo:applicationType`, value, operator || 'StringLike');
  }
}

export type ServerlessrepoActionsWrite = 'CreateApplication' | 'CreateApplicationVersion' | 'CreateCloudFormationChangeSet' | 'CreateCloudFormationTemplate' | 'DeleteApplication' | 'PutApplicationPolicy' | 'UnshareApplication' | 'UpdateApplication';
export type ServerlessrepoActionsRead = 'GetApplication' | 'GetApplicationPolicy' | 'GetCloudFormationTemplate' | 'SearchApplications';
export type ServerlessrepoActionsList = 'ListApplicationDependencies' | 'ListApplicationVersions' | 'ListApplications';
export type ServerlessrepoActions = ServerlessrepoActionsWrite | ServerlessrepoActionsRead | ServerlessrepoActionsList;
