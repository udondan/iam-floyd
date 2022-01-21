import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a FinSpace environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_CreateEnvironment.html
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permission to create a FinSpace user
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to delete a FinSpace environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to describe a FinSpace environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_GetEnvironment.html
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to request status of the loading of sample data bundle
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toGetLoadSampleDataSetGroupIntoEnvironmentStatus() {
    return this.to('GetLoadSampleDataSetGroupIntoEnvironmentStatus');
  }

  /**
   * Grants permission to describe a FinSpace user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toGetUser() {
    return this.to('GetUser');
  }

  /**
   * Grants permission to list FinSpace environments in the AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListEnvironments.html
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permission to return a list of tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list FinSpace users in an environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  /**
   * Grants permission to load sample data bundle into your FinSpace environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toLoadSampleDataSetGroupIntoEnvironment() {
    return this.to('LoadSampleDataSetGroupIntoEnvironment');
  }

  /**
   * Grants permission to reset the password for a FinSpace user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toResetUserPassword() {
    return this.to('ResetUserPassword');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a FinSpace environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/management-api/API_UpdateEnvironment.html
   */
  public toUpdateEnvironment() {
    return this.to('UpdateEnvironment');
  }

  /**
   * Grants permission to update a FinSpace user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/finspace/latest/userguide/finspace-what-is.html
   */
  public toUpdateUser() {
    return this.to('UpdateUser');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateEnvironment',
      'CreateUser',
      'DeleteEnvironment',
      'LoadSampleDataSetGroupIntoEnvironment',
      'ResetUserPassword',
      'UpdateEnvironment',
      'UpdateUser'
    ],
    Read: [
      'GetEnvironment',
      'GetLoadSampleDataSetGroupIntoEnvironmentStatus',
      'GetUser',
      'ListTagsForResource'
    ],
    List: [
      'ListEnvironments',
      'ListUsers'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
    return this.on(`arn:${ partition || 'aws' }:finspace:${ region || '*' }:${ account || '*' }:environment/${ environmentId }`);
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
    return this.on(`arn:${ partition || 'aws' }:finspace:${ region || '*' }:${ account || '*' }:user/${ userId }`);
  }
}
