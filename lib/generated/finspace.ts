import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [finspace](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfinspace.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Finspace extends PolicyStatement {
  public servicePrefix = 'finspace';

  /**
   * Statement provider for service [finspace](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonfinspace.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to create a FinSpace environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateEnvironment.html
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permissions to create a FinSpace user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permissions to delete a FinSpace environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permissions to delete a FinSpace user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permissions to describe a FinSpace environment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetEnvironment.html
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permissions to request status of the loading of sample data bundle.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetLoadSampleDataSetGroupIntoEnvironmentStatus.html
   */
  public toGetLoadSampleDataSetGroupIntoEnvironmentStatus() {
    return this.to('GetLoadSampleDataSetGroupIntoEnvironmentStatus');
  }

  /**
   * Grants permissions to describe a FinSpace user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetUser.html
   */
  public toGetUser() {
    return this.to('GetUser');
  }

  /**
   * Grants permissions to list FinSpace environments in the AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListEnvironments.html
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permissions to return a list of tags for a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permissions to list FinSpace users in an environment.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permissions to load sample data bundle into your FinSpace environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_LoadSampleDataSetGroupIntoEnvironment.html
   */
  public toLoadSampleDataSetGroupIntoEnvironment() {
    return this.to('LoadSampleDataSetGroupIntoEnvironment');
  }

  /**
   * Grants permissions to tag a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permissions to untag a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permissions to update a FinSpace environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateEnvironment.html
   */
  public toUpdateEnvironment() {
    return this.to('UpdateEnvironment');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateEnvironment",
      "CreateUser",
      "DeleteEnvironment",
      "DeleteUser",
      "LoadSampleDataSetGroupIntoEnvironment",
      "UpdateEnvironment"
    ],
    "Read": [
      "GetEnvironment",
      "GetLoadSampleDataSetGroupIntoEnvironmentStatus",
      "GetUser",
      "ListTagsForResource"
    ],
    "List": [
      "ListEnvironments",
      "ListUsers"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   *
   * @param environmentId - Identifier for the environmentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironment(environmentId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:finspace:${Region}:${Account}:environment/${EnvironmentId}';
    arn = arn.replace('${EnvironmentId}', environmentId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-example-policies.html
   *
   * @param userId - Identifier for the userId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUser(userId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:finspace:${Region}:${Account}:user/${UserId}';
    arn = arn.replace('${UserId}', userId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
