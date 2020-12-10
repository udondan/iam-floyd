import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
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
    this.to('amplifybackend:CloneBackend');
    return this;
  }

  /**
   * Grants permission to create a new Amplify Admin backend environment by Amplify appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend.html#CreateBackend
   */
  public toCreateBackend() {
    this.to('amplifybackend:CreateBackend');
    return this;
  }

  /**
   * Grants permission to create an API for an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api.html#CreateBackendAPI
   */
  public toCreateBackendAPI() {
    this.to('amplifybackend:CreateBackendAPI');
    return this;
  }

  /**
   * Grants permission to create an auth resource for an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth.html#CreateBackendAuth
   */
  public toCreateBackendAuth() {
    this.to('amplifybackend:CreateBackendAuth');
    return this;
  }

  /**
   * Grants permission to create a new Amplify Admin backend config by Amplify appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config.html#CreateBackendConfig
   */
  public toCreateBackendConfig() {
    this.to('amplifybackend:CreateBackendConfig');
    return this;
  }

  /**
   * Grants permission to create an Amplify Admin challenge token by appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-challenge.html#CreateToken
   */
  public toCreateToken() {
    this.to('amplifybackend:CreateToken');
    return this;
  }

  /**
   * Grants permission to delete an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-environments-backendenvironmentname-remove.html#DeleteBackend
   */
  public toDeleteBackend() {
    this.to('amplifybackend:DeleteBackend');
    return this;
  }

  /**
   * Grants permission to delete an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-remove.html#DeleteBackendAPI
   */
  public toDeleteBackendAPI() {
    this.to('amplifybackend:DeleteBackendAPI');
    return this;
  }

  /**
   * Grants permission to delete an auth resource of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname-remove.html#DeleteBackendAuth
   */
  public toDeleteBackendAuth() {
    this.to('amplifybackend:DeleteBackendAuth');
    return this;
  }

  /**
   * Grants permission to delete an Amplify Admin challenge token by appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-challenge-sessionid-remove.html#DeleteToken
   */
  public toDeleteToken() {
    this.to('amplifybackend:DeleteToken');
    return this;
  }

  /**
   * Grants permission to generate models for an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-generatemodels.html#GenerateBackendAPIModels
   */
  public toGenerateBackendAPIModels() {
    this.to('amplifybackend:GenerateBackendAPIModels');
    return this;
  }

  /**
   * Grants permission to retrieve an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-details.html#GetBackend
   */
  public toGetBackend() {
    this.to('amplifybackend:GetBackend');
    return this;
  }

  /**
   * Grants permission to retrieve an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-details.html#GetBackendAPI
   */
  public toGetBackendAPI() {
    this.to('amplifybackend:GetBackendAPI');
    return this;
  }

  /**
   * Grants permission to retrieve models for an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname-getmodels.html#GetBackendAPIModels
   */
  public toGetBackendAPIModels() {
    this.to('amplifybackend:GetBackendAPIModels');
    return this;
  }

  /**
   * Grants permission to retrieve an auth resource of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname-details.html#GetBackendAuth
   */
  public toGetBackendAuth() {
    this.to('amplifybackend:GetBackendAuth');
    return this;
  }

  /**
   * Grants permission to retrieve a job of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname-jobid.html#GetBackendJob
   */
  public toGetBackendJob() {
    this.to('amplifybackend:GetBackendJob');
    return this;
  }

  /**
   * Grants permission to retrieve an Amplify Admin challenge token by appId
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-challenge-sessionid.html#GetToken
   */
  public toGetToken() {
    this.to('amplifybackend:GetToken');
    return this;
  }

  /**
   * Grants permission to retrieve the jobs of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname.html#ListBackendJobs
   */
  public toListBackendJobs() {
    this.to('amplifybackend:ListBackendJobs');
    return this;
  }

  /**
   * Grants permission to delete all existing Amplify Admin backend environments by appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-remove.html#RemoveAllBackends
   */
  public toRemoveAllBackends() {
    this.to('amplifybackend:RemoveAllBackends');
    return this;
  }

  /**
   * Grants permission to delete an Amplify Admin backend config by Amplify appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config-remove.html#RemoveBackendConfig
   */
  public toRemoveBackendConfig() {
    this.to('amplifybackend:RemoveBackendConfig');
    return this;
  }

  /**
   * Grants permission to update an API of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-api-backendenvironmentname.html#UpdateBackendAPI
   */
  public toUpdateBackendAPI() {
    this.to('amplifybackend:UpdateBackendAPI');
    return this;
  }

  /**
   * Grants permission to update an auth resource of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-auth-backendenvironmentname.html#UpdateBackendAuth
   */
  public toUpdateBackendAuth() {
    this.to('amplifybackend:UpdateBackendAuth');
    return this;
  }

  /**
   * Grants permission to update an Amplify Admin backend config by Amplify appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-config-update.html#UpdateBackendConfig
   */
  public toUpdateBackendConfig() {
    this.to('amplifybackend:UpdateBackendConfig');
    return this;
  }

  /**
   * Grants permission to update a job of an existing Amplify Admin backend environment by appId and backendEnvironmentName
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/APIReference/backend-appid-job-backendenvironmentname-jobid.html#UpdateBackendJob
   */
  public toUpdateBackendJob() {
    this.to('amplifybackend:UpdateBackendJob');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CloneBackend",
      "CreateBackend",
      "CreateBackendAPI",
      "CreateBackendAuth",
      "CreateBackendConfig",
      "CreateToken",
      "DeleteBackend",
      "DeleteBackendAPI",
      "DeleteBackendAuth",
      "DeleteToken",
      "GenerateBackendAPIModels",
      "RemoveAllBackends",
      "RemoveBackendConfig",
      "UpdateBackendAPI",
      "UpdateBackendAuth",
      "UpdateBackendConfig",
      "UpdateBackendJob"
    ],
    "Read": [
      "GetBackend",
      "GetBackendAPI",
      "GetBackendAPIModels",
      "GetBackendAuth",
      "GetBackendJob",
      "GetToken"
    ],
    "List": [
      "ListBackendJobs"
    ]
  };

  /**
   * Adds a resource of type backend to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/UserGuide/backend.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onBackend(appId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplifybackend:${Region}:${Account}:backend/${AppId}';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/UserGuide/backend-appid-api-backendenvironmentname-details.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEnvironment(appId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplifybackend:${Region}:${Account}:backend/${AppId}/environments';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type api to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/UserGuide/backend-appid-api.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onApi(appId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplifybackend:${Region}:${Account}:backend/${AppId}/api';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type auth to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/UserGuide/backend-appid-auth.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAuth(appId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplifybackend:${Region}:${Account}:backend/${AppId}/auth';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type job to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/UserGuide/backend-appid-job-backendenvironmentname.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onJob(appId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplifybackend:${Region}:${Account}:backend/${AppId}/job';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type config to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/UserGuide/backend-appid-config.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConfig(appId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplifybackend:${Region}:${Account}:backend/${AppId}/config';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type token to the statement
   *
   * https://docs.aws.amazon.com/amplify-admin-ui/latest/UserGuide/backend-appid-token.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onToken(appId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:amplifybackend:${Region}:${Account}:backend/${AppId}/token';
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type AmplifybackendActionsWrite = 'CloneBackend' | 'CreateBackend' | 'CreateBackendAPI' | 'CreateBackendAuth' | 'CreateBackendConfig' | 'CreateToken' | 'DeleteBackend' | 'DeleteBackendAPI' | 'DeleteBackendAuth' | 'DeleteToken' | 'GenerateBackendAPIModels' | 'RemoveAllBackends' | 'RemoveBackendConfig' | 'UpdateBackendAPI' | 'UpdateBackendAuth' | 'UpdateBackendConfig' | 'UpdateBackendJob';
export type AmplifybackendActionsRead = 'GetBackend' | 'GetBackendAPI' | 'GetBackendAPIModels' | 'GetBackendAuth' | 'GetBackendJob' | 'GetToken';
export type AmplifybackendActionsList = 'ListBackendJobs';
export type AmplifybackendActions = AmplifybackendActionsWrite | AmplifybackendActionsRead | AmplifybackendActionsList;
