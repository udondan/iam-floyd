import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [amplify](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplify.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Amplify extends PolicyStatement {
  public servicePrefix = 'amplify';

  /**
   * Statement provider for service [amplify](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsamplify.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new Amplify App
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateApp() {
    return this.to('CreateApp');
  }

  /**
   * Grants permission to create a new backend environment for an Amplify App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateBackendEnvironment() {
    return this.to('CreateBackendEnvironment');
  }

  /**
   * Grants permission to create a new Branch for an Amplify App
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateBranch() {
    return this.to('CreateBranch');
  }

  /**
   * Grants permission to create a deployment for manual deploy apps. (Apps are not connected to repository)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateDeployment() {
    return this.to('CreateDeployment');
  }

  /**
   * Grants permission to create a new DomainAssociation on an App
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateDomainAssociation() {
    return this.to('CreateDomainAssociation');
  }

  /**
   * Grants permission to create a new webhook on an App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toCreateWebHook() {
    return this.to('CreateWebHook');
  }

  /**
   * Grants permission to delete an existing Amplify App by appId
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Grants permission to delete a branch for an Amplify App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteBackendEnvironment() {
    return this.to('DeleteBackendEnvironment');
  }

  /**
   * Grants permission to delete a branch for an Amplify App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteBranch() {
    return this.to('DeleteBranch');
  }

  /**
   * Grants permission to delete a DomainAssociation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteDomainAssociation() {
    return this.to('DeleteDomainAssociation');
  }

  /**
   * Grants permission to delete a job, for an Amplify branch, part of Amplify App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteJob() {
    return this.to('DeleteJob');
  }

  /**
   * Grants permission to delete a webhook by id
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toDeleteWebHook() {
    return this.to('DeleteWebHook');
  }

  /**
   * Grants permission to generate website access logs for a specific time range via a pre-signed URL
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGenerateAccessLogs() {
    return this.to('GenerateAccessLogs');
  }

  /**
   * Grants permission to retrieve an existing Amplify App by appId
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetApp() {
    return this.to('GetApp');
  }

  /**
   * Grants permission to retrieve artifact info that corresponds to a artifactId
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetArtifactUrl() {
    return this.to('GetArtifactUrl');
  }

  /**
   * Grants permission to retrieve a backend environment for an Amplify App
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetBackendEnvironment() {
    return this.to('GetBackendEnvironment');
  }

  /**
   * Grants permission to retrieve a branch for an Amplify App
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetBranch() {
    return this.to('GetBranch');
  }

  /**
   * Grants permission to retrieve domain info that corresponds to an appId and domainName
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetDomainAssociation() {
    return this.to('GetDomainAssociation');
  }

  /**
   * Grants permission to get a job for a branch, part of an Amplify App
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetJob() {
    return this.to('GetJob');
  }

  /**
   * Grants permission to retrieve webhook info that corresponds to a webhookId
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toGetWebHook() {
    return this.to('GetWebHook');
  }

  /**
   * Grants permission to list existing Amplify Apps
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListApps() {
    return this.to('ListApps');
  }

  /**
   * Grants permission to list artifacts with an app, a branch, a job and an artifact type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListArtifacts() {
    return this.to('ListArtifacts');
  }

  /**
   * Grants permission to list backend environments for an Amplify App
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListBackendEnvironments() {
    return this.to('ListBackendEnvironments');
  }

  /**
   * Grants permission to list branches for an Amplify App
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListBranches() {
    return this.to('ListBranches');
  }

  /**
   * Grants permission to list domains with an app
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListDomainAssociations() {
    return this.to('ListDomainAssociations');
  }

  /**
   * Grants permission to list Jobs for a branch, part of an Amplify App
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * Grants permission to list tags for an AWS Amplify Console resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list webhooks on an App
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toListWebHooks() {
    return this.to('ListWebHooks');
  }

  /**
   * Grants permission to start a deployment for manual deploy apps. (Apps are not connected to repository)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toStartDeployment() {
    return this.to('StartDeployment');
  }

  /**
   * Grants permission to start a new job for a branch, part of an Amplify App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toStartJob() {
    return this.to('StartJob');
  }

  /**
   * Grants permission to stop a job that is in progress, for an Amplify branch, part of Amplify App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toStopJob() {
    return this.to('StopJob');
  }

  /**
   * Grants permission to tag an AWS Amplify Console resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from an AWS Amplify Console resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing Amplify App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUpdateApp() {
    return this.to('UpdateApp');
  }

  /**
   * Grants permission to update a branch for an Amplify App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUpdateBranch() {
    return this.to('UpdateBranch');
  }

  /**
   * Grants permission to update a DomainAssociation on an App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUpdateDomainAssociation() {
    return this.to('UpdateDomainAssociation');
  }

  /**
   * Grants permission to update a webhook
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   */
  public toUpdateWebHook() {
    return this.to('UpdateWebHook');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateApp',
      'CreateBackendEnvironment',
      'CreateBranch',
      'CreateDeployment',
      'CreateDomainAssociation',
      'CreateWebHook',
      'DeleteApp',
      'DeleteBackendEnvironment',
      'DeleteBranch',
      'DeleteDomainAssociation',
      'DeleteJob',
      'DeleteWebHook',
      'GenerateAccessLogs',
      'StartDeployment',
      'StartJob',
      'StopJob',
      'UpdateApp',
      'UpdateBranch',
      'UpdateDomainAssociation',
      'UpdateWebHook'
    ],
    Read: [
      'GetApp',
      'GetArtifactUrl',
      'GetBackendEnvironment',
      'GetBranch',
      'GetDomainAssociation',
      'GetJob',
      'GetWebHook',
      'ListTagsForResource'
    ],
    List: [
      'ListApps',
      'ListArtifacts',
      'ListBackendEnvironments',
      'ListBranches',
      'ListDomainAssociations',
      'ListJobs',
      'ListWebHooks'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type apps to the statement
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApps(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplify.defaultPartition }:amplify:${ region || '*' }:${ account || '*' }:apps/${ appId }`);
  }

  /**
   * Adds a resource of type branches to the statement
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   *
   * @param appId - Identifier for the appId.
   * @param branchName - Identifier for the branchName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBranches(appId: string, branchName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplify.defaultPartition }:amplify:${ region || '*' }:${ account || '*' }:apps/${ appId }/branches/${ branchName }`);
  }

  /**
   * Adds a resource of type jobs to the statement
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   *
   * @param appId - Identifier for the appId.
   * @param branchName - Identifier for the branchName.
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onJobs(appId: string, branchName: string, jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplify.defaultPartition }:amplify:${ region || '*' }:${ account || '*' }:apps/${ appId }/branches/${ branchName }/jobs/${ jobId }`);
  }

  /**
   * Adds a resource of type domains to the statement
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   *
   * @param appId - Identifier for the appId.
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomains(appId: string, domainName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplify.defaultPartition }:amplify:${ region || '*' }:${ account || '*' }:apps/${ appId }/domains/${ domainName }`);
  }

  /**
   * Adds a resource of type webhooks to the statement
   *
   * https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
   *
   * @param webhookId - Identifier for the webhookId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWebhooks(webhookId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Amplify.defaultPartition }:amplify:${ region || '*' }:${ account || '*' }:webhooks/${ webhookId }`);
  }

  /**
   * Filters access by a tag's key and value in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateApp()
   * - .toCreateBranch()
   * - .toCreateDomainAssociation()
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
   * Filters access by a tag's key associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - apps
   * - branches
   * - domains
   * - webhooks
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateApp()
   * - .toCreateBranch()
   * - .toCreateDomainAssociation()
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
