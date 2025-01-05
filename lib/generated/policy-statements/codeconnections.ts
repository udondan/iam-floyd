import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [codeconnections](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodeconnections.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codeconnections extends PolicyStatement {
  public servicePrefix = 'codeconnections';

  /**
   * Statement provider for service [codeconnections](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodeconnections.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a Connection resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifProviderType()
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_CreateConnection.html
   */
  public toCreateConnection() {
    return this.to('CreateConnection');
  }

  /**
   * Grants permission to create a host resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifProviderType()
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_CreateHost.html
   */
  public toCreateHost() {
    return this.to('CreateHost');
  }

  /**
   * Grants permission to create a repository link
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - codeconnections:PassConnection
   * - codeconnections:UseConnection
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_CreateRepositoryLink.html
   */
  public toCreateRepositoryLink() {
    return this.to('CreateRepositoryLink');
  }

  /**
   * Grants permission to create a template sync config
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifBranch()
   *
   * Dependent actions:
   * - codeconnections:PassRepository
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_CreateSyncConfiguration.html
   */
  public toCreateSyncConfiguration() {
    return this.to('CreateSyncConfiguration');
  }

  /**
   * Grants permission to delete a Connection resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_DeleteConnection.html
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to delete a host resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_DeleteHost.html
   */
  public toDeleteHost() {
    return this.to('DeleteHost');
  }

  /**
   * Grants permission to delete a repository link
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_DeleteRepositoryLink.html
   */
  public toDeleteRepositoryLink() {
    return this.to('DeleteRepositoryLink');
  }

  /**
   * Grants permission to delete a sync configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_DeleteSyncConfiguration.html
   */
  public toDeleteSyncConfiguration() {
    return this.to('DeleteSyncConfiguration');
  }

  /**
   * Grants permission to get details about a Connection resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_GetConnection.html
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to get a Connection token to call provider actions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-getconnectiontoken
   */
  public toGetConnectionToken() {
    return this.to('GetConnectionToken');
  }

  /**
   * Grants permission to get details about a host resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_GetHost.html
   */
  public toGetHost() {
    return this.to('GetHost');
  }

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifProviderType()
   *
   * Dependent actions:
   * - codeconnections:StartOAuthHandshake
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  public toGetIndividualAccessToken() {
    return this.to('GetIndividualAccessToken');
  }

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifProviderType()
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  public toGetInstallationUrl() {
    return this.to('GetInstallationUrl');
  }

  /**
   * Grants permission to describe a repository link
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_GetRepositoryLink.html
   */
  public toGetRepositoryLink() {
    return this.to('GetRepositoryLink');
  }

  /**
   * Grants permission to get the latest sync status for a repository
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifBranch()
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_GetRepositorySyncStatus.html
   */
  public toGetRepositorySyncStatus() {
    return this.to('GetRepositorySyncStatus');
  }

  /**
   * Grants permission to get the latest sync status for a resource (cfn stack or other resources)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_GetResourceSyncStatus.html
   */
  public toGetResourceSyncStatus() {
    return this.to('GetResourceSyncStatus');
  }

  /**
   * Grants permission to describe service sync blockers on a resource (cfn stack or other resources)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_GetSyncBlockerSummary.html
   */
  public toGetSyncBlockerSummary() {
    return this.to('GetSyncBlockerSummary');
  }

  /**
   * Grants permission to describe a sync configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_GetSyncConfiguration.html
   */
  public toGetSyncConfiguration() {
    return this.to('GetSyncConfiguration');
  }

  /**
   * Grants permission to list Connection resources
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifProviderTypeFilter()
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_ListConnections.html
   */
  public toListConnections() {
    return this.to('ListConnections');
  }

  /**
   * Grants permission to list host resources
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifProviderTypeFilter()
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_ListHosts.html
   */
  public toListHosts() {
    return this.to('ListHosts');
  }

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   *
   * Access Level: List
   *
   * Dependent actions:
   * - codeconnections:GetIndividualAccessToken
   * - codeconnections:StartOAuthHandshake
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  public toListInstallationTargets() {
    return this.to('ListInstallationTargets');
  }

  /**
   * Grants permission to list repository links
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_ListRepositoryLinks.html
   */
  public toListRepositoryLinks() {
    return this.to('ListRepositoryLinks');
  }

  /**
   * Grants permission to list repository sync definitions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_ListRepositorySyncDefinitions.html
   */
  public toListRepositorySyncDefinitions() {
    return this.to('ListRepositorySyncDefinitions');
  }

  /**
   * Grants permission to list sync configurations for a repository link
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_ListSyncConfigurations.html
   */
  public toListSyncConfigurations() {
    return this.to('ListSyncConfigurations');
  }

  /**
   * Grants permission to the set of key-value pairs that are used to manage the resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to pass a Connection resource to an AWS service that accepts a Connection ARN as input, such as codepipeline:CreatePipeline
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPassedToService()
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-passconnection
   */
  public toPassConnection() {
    return this.to('PassConnection');
  }

  /**
   * Grants permission to pass a repository link resource to an AWS service that accepts a RepositoryLinkId as input, such as codeconnections:CreateSyncConfiguration
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPassedToService()
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-passrepository
   */
  public toPassRepository() {
    return this.to('PassRepository');
  }

  /**
   * Grants permission to associate a third party server, such as a GitHub Enterprise Server instance, with a Host
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifHostArn()
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#connections-permissions-actions-host-registration
   */
  public toRegisterAppCode() {
    return this.to('RegisterAppCode');
  }

  /**
   * Grants permission to associate a third party server, such as a GitHub Enterprise Server instance, with a Host
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifHostArn()
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#connections-permissions-actions-host-registration
   */
  public toStartAppRegistrationHandshake() {
    return this.to('StartAppRegistrationHandshake');
  }

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifProviderType()
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  public toStartOAuthHandshake() {
    return this.to('StartOAuthHandshake');
  }

  /**
   * Grants permission to add or modify the tags of the given resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from an AWS resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a Connection resource with an installation of the CodeStar Connections App
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstallationId()
   *
   * Dependent actions:
   * - codeconnections:GetIndividualAccessToken
   * - codeconnections:GetInstallationUrl
   * - codeconnections:ListInstallationTargets
   * - codeconnections:StartOAuthHandshake
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  public toUpdateConnectionInstallation() {
    return this.to('UpdateConnectionInstallation');
  }

  /**
   * Grants permission to update a host resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_UpdateHost.html
   */
  public toUpdateHost() {
    return this.to('UpdateHost');
  }

  /**
   * Grants permission to update a repository link
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_UpdateRepositoryLink.html
   */
  public toUpdateRepositoryLink() {
    return this.to('UpdateRepositoryLink');
  }

  /**
   * Grants permission to update a sync blocker for a resource (cfn stack or other resources)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_UpdateSyncBlocker.html
   */
  public toUpdateSyncBlocker() {
    return this.to('UpdateSyncBlocker');
  }

  /**
   * Grants permission to update a sync configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifBranch()
   *
   * https://docs.aws.amazon.com/codeconnections/latest/APIReference/API_UpdateSyncConfiguration.html
   */
  public toUpdateSyncConfiguration() {
    return this.to('UpdateSyncConfiguration');
  }

  /**
   * Grants permission to use a Connection resource to call provider actions
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifBranchName()
   * - .ifFullRepositoryId()
   * - .ifOwnerId()
   * - .ifProviderAction()
   * - .ifProviderPermissionsRequired()
   * - .ifRepositoryName()
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use
   */
  public toUseConnection() {
    return this.to('UseConnection');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateConnection',
      'CreateHost',
      'CreateRepositoryLink',
      'CreateSyncConfiguration',
      'DeleteConnection',
      'DeleteHost',
      'DeleteRepositoryLink',
      'DeleteSyncConfiguration',
      'UpdateConnectionInstallation',
      'UpdateHost',
      'UpdateRepositoryLink',
      'UpdateSyncBlocker',
      'UpdateSyncConfiguration'
    ],
    Read: [
      'GetConnection',
      'GetConnectionToken',
      'GetHost',
      'GetIndividualAccessToken',
      'GetInstallationUrl',
      'GetRepositoryLink',
      'GetRepositorySyncStatus',
      'GetResourceSyncStatus',
      'GetSyncBlockerSummary',
      'GetSyncConfiguration',
      'PassConnection',
      'PassRepository',
      'RegisterAppCode',
      'StartAppRegistrationHandshake',
      'StartOAuthHandshake',
      'UseConnection'
    ],
    List: [
      'ListConnections',
      'ListHosts',
      'ListInstallationTargets',
      'ListRepositoryLinks',
      'ListRepositorySyncDefinitions',
      'ListSyncConfigurations',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Connection to the statement
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/connections.html
   *
   * @param connectionId - Identifier for the connectionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnection(connectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:codeconnections:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:connection/${ connectionId }`);
  }

  /**
   * Adds a resource of type Host to the statement
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/connections-hosts.html
   *
   * @param hostId - Identifier for the hostId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onHost(hostId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:codeconnections:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:host/${ hostId }`);
  }

  /**
   * Adds a resource of type RepositoryLink to the statement
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/repositorylinks.html
   *
   * @param repositoryLinkId - Identifier for the repositoryLinkId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRepositoryLink(repositoryLinkId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:codeconnections:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:repository-link/${ repositoryLinkId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateConnection()
   * - .toCreateHost()
   * - .toCreateRepositoryLink()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Connection
   * - Host
   * - RepositoryLink
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateConnection()
   * - .toCreateHost()
   * - .toCreateRepositoryLink()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the branch name that is passed in the request
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   *
   * Applies to actions:
   * - .toCreateSyncConfiguration()
   * - .toGetRepositorySyncStatus()
   * - .toUpdateSyncConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifBranch(value: string | string[], operator?: Operator | string) {
    return this.if(`Branch`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the branch name that is passed in the request. Applies only to UseConnection requests for access to a specific repository branch
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use
   *
   * Applies to actions:
   * - .toUseConnection()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifBranchName(value: string | string[], operator?: Operator | string) {
    return this.if(`BranchName`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the repository that is passed in the request. Applies only to UseConnection requests for access to a specific repository
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use
   *
   * Applies to actions:
   * - .toUseConnection()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFullRepositoryId(value: string | string[], operator?: Operator | string) {
    return this.if(`FullRepositoryId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the host resource associated with the connection used in the request
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-hosts
   *
   * Applies to actions:
   * - .toRegisterAppCode()
   * - .toStartAppRegistrationHandshake()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifHostArn(value: string | string[], operator?: Operator | string) {
    return this.if(`HostArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the third-party ID (such as the Bitbucket App installation ID for CodeConnections) that is used to update a Connection. Allows you to restrict which third-party App installations can be used to make a Connection
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   *
   * Applies to actions:
   * - .toUpdateConnectionInstallation()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstallationId(value: string | string[], operator?: Operator | string) {
    return this.if(`InstallationId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the owner of the third-party repository. Applies only to UseConnection requests for access to repositories owned by a specific user
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use
   *
   * Applies to actions:
   * - .toUseConnection()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOwnerId(value: string | string[], operator?: Operator | string) {
    return this.if(`OwnerId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the service to which the principal is allowed to pass a Connection or RepositoryLink
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-passconnection
   *
   * Applies to actions:
   * - .toPassConnection()
   * - .toPassRepository()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPassedToService(value: string | string[], operator?: Operator | string) {
    return this.if(`PassedToService`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the provider action in a UseConnection request such as ListRepositories. See documentation for all valid values
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-access
   *
   * Applies to actions:
   * - .toUseConnection()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProviderAction(value: string | string[], operator?: Operator | string) {
    return this.if(`ProviderAction`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the write permissions of a provider action in a UseConnection request. Valid types include read_only and read_write
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use
   *
   * Applies to actions:
   * - .toUseConnection()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProviderPermissionsRequired(value: string | string[], operator?: Operator | string) {
    return this.if(`ProviderPermissionsRequired`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the type of third-party provider passed in the request
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-managing
   *
   * Applies to actions:
   * - .toCreateConnection()
   * - .toCreateHost()
   * - .toGetIndividualAccessToken()
   * - .toGetInstallationUrl()
   * - .toStartOAuthHandshake()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProviderType(value: string | string[], operator?: Operator | string) {
    return this.if(`ProviderType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the type of third-party provider used to filter results
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-managing
   *
   * Applies to actions:
   * - .toListConnections()
   * - .toListHosts()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifProviderTypeFilter(value: string | string[], operator?: Operator | string) {
    return this.if(`ProviderTypeFilter`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the repository name that is passed in the request. Applies only to UseConnection requests for access to repositories owned by a specific user
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use
   *
   * Applies to actions:
   * - .toUseConnection()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRepositoryName(value: string | string[], operator?: Operator | string) {
    return this.if(`RepositoryName`, value, operator ?? 'StringLike');
  }
}
