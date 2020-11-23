import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [codestar-connections](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestarconnections.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CodestarConnections extends PolicyStatement {
  public servicePrefix = 'codestar-connections';

  /**
   * Statement provider for service [codestar-connections](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscodestarconnections.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
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
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateConnection.html
   */
  public toCreateConnection() {
    this.to('CreateConnection');
    return this;
  }

  /**
   * Grants permission to create a host resource
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifProviderType()
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_CreateHost.html
   */
  public toCreateHost() {
    this.to('CreateHost');
    return this;
  }

  /**
   * Grants permission to delete a Connection resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteConnection.html
   */
  public toDeleteConnection() {
    this.to('DeleteConnection');
    return this;
  }

  /**
   * Grants permission to delete a host resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_DeleteHost.html
   */
  public toDeleteHost() {
    this.to('DeleteHost');
    return this;
  }

  /**
   * Grants permission to get details about a Connection resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetConnection.html
   */
  public toGetConnection() {
    this.to('GetConnection');
    return this;
  }

  /**
   * Grants permission to get details about a host resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_GetHost.html
   */
  public toGetHost() {
    this.to('GetHost');
    return this;
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
   * - codestar-connections:StartOAuthHandshake
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  public toGetIndividualAccessToken() {
    this.to('GetIndividualAccessToken');
    return this;
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
    this.to('GetInstallationUrl');
    return this;
  }

  /**
   * Grants permission to list Connection resources
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifProviderTypeFilter()
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListConnections.html
   */
  public toListConnections() {
    this.to('ListConnections');
    return this;
  }

  /**
   * Grants permission to list host resources
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifProviderTypeFilter()
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListHosts.html
   */
  public toListHosts() {
    this.to('ListHosts');
    return this;
  }

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   *
   * Access Level: List
   *
   * Dependent actions:
   * - codestar-connections:GetIndividualAccessToken
   * - codestar-connections:StartOAuthHandshake
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  public toListInstallationTargets() {
    this.to('ListInstallationTargets');
    return this;
  }

  /**
   * Gets the set of key-value pairs that are used to manage the resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
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
    this.to('PassConnection');
    return this;
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
    this.to('RegisterAppCode');
    return this;
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
    this.to('StartAppRegistrationHandshake');
    return this;
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
    this.to('StartOAuthHandshake');
    return this;
  }

  /**
   * Adds to or modifies the tags of the given resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('TagResource');
    return this;
  }

  /**
   * Removes tags from an AWS resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('UntagResource');
    return this;
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
   * - codestar-connections:GetIndividualAccessToken
   * - codestar-connections:GetInstallationUrl
   * - codestar-connections:ListInstallationTargets
   * - codestar-connections:StartOAuthHandshake
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-handshake
   */
  public toUpdateConnectionInstallation() {
    this.to('UpdateConnectionInstallation');
    return this;
  }

  /**
   * Grants permission to use a Connection resource to call provider actions
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifFullRepositoryId()
   * - .ifProviderAction()
   * - .ifProviderPermissionsRequired()
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use
   */
  public toUseConnection() {
    this.to('UseConnection');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateConnection",
      "CreateHost",
      "DeleteConnection",
      "DeleteHost",
      "UpdateConnectionInstallation"
    ],
    "Read": [
      "GetConnection",
      "GetHost",
      "GetIndividualAccessToken",
      "GetInstallationUrl",
      "PassConnection",
      "RegisterAppCode",
      "StartAppRegistrationHandshake",
      "StartOAuthHandshake",
      "UseConnection"
    ],
    "List": [
      "ListConnections",
      "ListHosts",
      "ListInstallationTargets",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type Connection to the statement
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/connections.html
   *
   * @param connectionId - Identifier for the connectionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConnection(connectionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codestar-connections:${Region}:${Account}:connection/${ConnectionId}';
    arn = arn.replace('${ConnectionId}', connectionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Host to the statement
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/connections-hosts.html
   *
   * @param hostId - Identifier for the hostId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHost(hostId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:codestar-connections:${Region}:${Account}:host/${HostId}';
    arn = arn.replace('${HostId}', hostId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the branch name that is passed in the request. Applies only to UseConnection requests for access to a specific repository branch
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifBranchName(value: string | string[], operator?: Operator | string) {
    return this.if(`codestar-connections:BranchName`, value, operator || 'StringLike');
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
    return this.if(`codestar-connections:FullRepositoryId`, value, operator || 'StringLike');
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
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifHostArn(value: string | string[], operator?: Operator | string) {
    return this.if(`codestar-connections:HostArn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the third-party ID (such as the Bitbucket App installation ID for CodeStar Connections) that is used to update a Connection. Allows you to restrict which third-party App installations can be used to make a Connection
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
    return this.if(`codestar-connections:InstallationId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the owner of the third-party repository. Applies only to UseConnection requests for access to repositories owned by a specific user
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOwnerId(value: string | string[], operator?: Operator | string) {
    return this.if(`codestar-connections:OwnerId`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the service to which the principal is allowed to pass a Connection
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-passconnection
   *
   * Applies to actions:
   * - .toPassConnection()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPassedToService(value: string | string[], operator?: Operator | string) {
    return this.if(`codestar-connections:PassedToService`, value, operator || 'StringLike');
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
    return this.if(`codestar-connections:ProviderAction`, value, operator || 'StringLike');
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
    return this.if(`codestar-connections:ProviderPermissionsRequired`, value, operator || 'StringLike');
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
    return this.if(`codestar-connections:ProviderType`, value, operator || 'StringLike');
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
    return this.if(`codestar-connections:ProviderTypeFilter`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the repository name that is passed in the request. Applies only to UseConnection requests for creating new repositories
   *
   * https://docs.aws.amazon.com/dtconsole/latest/userguide/security-iam.html#permissions-reference-connections-use
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRepositoryName(value: string | string[], operator?: Operator | string) {
    return this.if(`codestar-connections:RepositoryName`, value, operator || 'StringLike');
  }
}
