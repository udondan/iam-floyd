import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [amplifybackend](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplifyadmin.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Amplifybackend extends PolicyStatement {
  public servicePrefix = 'amplifybackend';

  /**
   * Statement provider for service [amplifybackend](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplifyadmin.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to clone an existing Amplify Admin backend environment into a new Amplify Admin backend enviroment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-environments-backendenvironmentname-clone.html#CloneBackend
   */
  public toCloneBackend() {
    return this.to('CloneBackend');
  }

  /**
   * Grants permission to create a new Amplify Admin backend environment by Amplify appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend.html#CreateBackend
   */
  public toCreateBackend() {
    return this.to('CreateBackend');
  }

  /**
   * Grants permission to create an API for an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api.html#CreateBackendAPI
   */
  public toCreateBackendAPI() {
    return this.to('CreateBackendAPI');
  }

  /**
   * Grants permission to create an auth resource for an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth.html#CreateBackendAuth
   */
  public toCreateBackendAuth() {
    return this.to('CreateBackendAuth');
  }

  /**
   * Grants permission to create a new Amplify Admin backend config by Amplify appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config.html#CreateBackendConfig
   */
  public toCreateBackendConfig() {
    return this.to('CreateBackendConfig');
  }

  /**
   * Grants permission to create a backend storage resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#CreateBackendStorage
   */
  public toCreateBackendStorage() {
    return this.to('CreateBackendStorage');
  }

  /**
   * Grants permission to create an Amplify Admin challenge token by appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-challenge.html#CreateToken
   */
  public toCreateToken() {
    return this.to('CreateToken');
  }

  /**
   * Grants permission to delete an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-environments-backendenvironmentname-remove.html#DeleteBackend
   */
  public toDeleteBackend() {
    return this.to('DeleteBackend');
  }

  /**
   * Grants permission to delete an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-remove.html#DeleteBackendAPI
   */
  public toDeleteBackendAPI() {
    return this.to('DeleteBackendAPI');
  }

  /**
   * Grants permission to delete an auth resource of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname-remove.html#DeleteBackendAuth
   */
  public toDeleteBackendAuth() {
    return this.to('DeleteBackendAuth');
  }

  /**
   * Grants permission to delete a backend storage resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#DeleteBackendStorage
   */
  public toDeleteBackendStorage() {
    return this.to('DeleteBackendStorage');
  }

  /**
   * Grants permission to delete an Amplify Admin challenge token by appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-challenge-sessionid-remove.html#DeleteToken
   */
  public toDeleteToken() {
    return this.to('DeleteToken');
  }

  /**
   * Grants permission to generate models for an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-generatemodels.html#GenerateBackendAPIModels
   */
  public toGenerateBackendAPIModels() {
    return this.to('GenerateBackendAPIModels');
  }

  /**
   * Grants permission to retrieve an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-details.html#GetBackend
   */
  public toGetBackend() {
    return this.to('GetBackend');
  }

  /**
   * Grants permission to retrieve an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-details.html#GetBackendAPI
   */
  public toGetBackendAPI() {
    return this.to('GetBackendAPI');
  }

  /**
   * Grants permission to retrieve models for an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-getmodels.html#GetBackendAPIModels
   */
  public toGetBackendAPIModels() {
    return this.to('GetBackendAPIModels');
  }

  /**
   * Grants permission to retrieve an auth resource of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname-details.html#GetBackendAuth
   */
  public toGetBackendAuth() {
    return this.to('GetBackendAuth');
  }

  /**
   * Grants permission to retrieve a job of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname-jobid.html#GetBackendJob
   */
  public toGetBackendJob() {
    return this.to('GetBackendJob');
  }

  /**
   * Grants permission to retrieve an existing backend storage resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#GetBackendStorage
   */
  public toGetBackendStorage() {
    return this.to('GetBackendStorage');
  }

  /**
   * Grants permission to retrieve an Amplify Admin challenge token by appId
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-challenge-sessionid.html#GetToken
   */
  public toGetToken() {
    return this.to('GetToken');
  }

  /**
   * Grants permission to import an existing auth resource of an Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname.html#ImportBackendAuth
   */
  public toImportBackendAuth() {
    return this.to('ImportBackendAuth');
  }

  /**
   * Grants permission to import an existing backend storage resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#ImportBackendStorage
   */
  public toImportBackendStorage() {
    return this.to('ImportBackendStorage');
  }

  /**
   * Grants permission to retrieve the jobs of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname.html#ListBackendJobs
   */
  public toListBackendJobs() {
    return this.to('ListBackendJobs');
  }

  /**
   * Grants permission to retrieve s3 buckets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#ListS3Buckets
   */
  public toListS3Buckets() {
    return this.to('ListS3Buckets');
  }

  /**
   * Grants permission to delete all existing Amplify Admin backend environments by appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-remove.html#RemoveAllBackends
   */
  public toRemoveAllBackends() {
    return this.to('RemoveAllBackends');
  }

  /**
   * Grants permission to delete an Amplify Admin backend config by Amplify appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config-remove.html#RemoveBackendConfig
   */
  public toRemoveBackendConfig() {
    return this.to('RemoveBackendConfig');
  }

  /**
   * Grants permission to update an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname.html#UpdateBackendAPI
   */
  public toUpdateBackendAPI() {
    return this.to('UpdateBackendAPI');
  }

  /**
   * Grants permission to update an auth resource of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname.html#UpdateBackendAuth
   */
  public toUpdateBackendAuth() {
    return this.to('UpdateBackendAuth');
  }

  /**
   * Grants permission to update an Amplify Admin backend config by Amplify appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config-update.html#UpdateBackendConfig
   */
  public toUpdateBackendConfig() {
    return this.to('UpdateBackendConfig');
  }

  /**
   * Grants permission to update a job of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname-jobid.html#UpdateBackendJob
   */
  public toUpdateBackendJob() {
    return this.to('UpdateBackendJob');
  }

  /**
   * Grants permission to update a backend storage resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html#UpdateBackendStorage
   */
  public toUpdateBackendStorage() {
    return this.to('UpdateBackendStorage');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CloneBackend',
      'CreateBackend',
      'CreateBackendAPI',
      'CreateBackendAuth',
      'CreateBackendConfig',
      'CreateBackendStorage',
      'CreateToken',
      'DeleteBackend',
      'DeleteBackendAPI',
      'DeleteBackendAuth',
      'DeleteBackendStorage',
      'DeleteToken',
      'GenerateBackendAPIModels',
      'ImportBackendAuth',
      'ImportBackendStorage',
      'RemoveAllBackends',
      'RemoveBackendConfig',
      'UpdateBackendAPI',
      'UpdateBackendAuth',
      'UpdateBackendConfig',
      'UpdateBackendJob',
      'UpdateBackendStorage'
    ],
    Read: [
      'GetBackend',
      'GetBackendAPI',
      'GetBackendAPIModels',
      'GetBackendAuth',
      'GetBackendJob',
      'GetBackendStorage',
      'GetToken'
    ],
    List: [
      'ListBackendJobs',
      'ListS3Buckets'
    ]
  };

  /**
   * Adds a resource of type backend to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBackend(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplifybackend.defaultPartition }:amplifybackend:${ region || '*' }:${ account || '*' }:backend/${ appId }`);
  }

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-details.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEnvironment(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplifybackend.defaultPartition }:amplifybackend:${ region || '*' }:${ account || '*' }:backend/${ appId }/environments`);
  }

  /**
   * Adds a resource of type api to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApi(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplifybackend.defaultPartition }:amplifybackend:${ region || '*' }:${ account || '*' }:backend/${ appId }/api`);
  }

  /**
   * Adds a resource of type auth to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAuth(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplifybackend.defaultPartition }:amplifybackend:${ region || '*' }:${ account || '*' }:backend/${ appId }/auth`);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onJob(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplifybackend.defaultPartition }:amplifybackend:${ region || '*' }:${ account || '*' }:backend/${ appId }/job`);
  }

  /**
   * Adds a resource of type config to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onConfig(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplifybackend.defaultPartition }:amplifybackend:${ region || '*' }:${ account || '*' }:backend/${ appId }/config`);
  }

  /**
   * Adds a resource of type token to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-token.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onToken(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplifybackend.defaultPartition }:amplifybackend:${ region || '*' }:${ account || '*' }:backend/${ appId }/token`);
  }

  /**
   * Adds a resource of type storage to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-storage.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onStorage(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplifybackend.defaultPartition }:amplifybackend:${ region || '*' }:${ account || '*' }:backend/${ appId }/storage`);
  }
}
