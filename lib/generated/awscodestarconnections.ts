import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [codestar-connections](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestarconnections.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CodestarConnections extends PolicyStatement {
  public servicePrefix = 'codestar-connections';

  /**
   * Statement provider for service [codestar-connections](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestarconnections.html).
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
    this.to('codestar-connections:CreateConnection');
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
    this.to('codestar-connections:DeleteConnection');
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
    this.to('codestar-connections:GetConnection');
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
   */
  public toGetIndividualAccessToken() {
    this.to('codestar-connections:GetIndividualAccessToken');
    return this;
  }

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifProviderType()
   */
  public toGetInstallationUrl() {
    this.to('codestar-connections:GetInstallationUrl');
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
    this.to('codestar-connections:ListConnections');
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
   */
  public toListInstallationTargets() {
    this.to('codestar-connections:ListInstallationTargets');
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
    this.to('codestar-connections:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to pass a Connection resource to an AWS service that accepts a Connection ARN as input, such as codepipeline:CreatePipeline
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifPassedToService()
   */
  public toPassConnection() {
    this.to('codestar-connections:PassConnection');
    return this;
  }

  /**
   * Grants permission to associate a third party, such as a Bitbucket App installation, with a Connection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifProviderType()
   */
  public toStartOAuthHandshake() {
    this.to('codestar-connections:StartOAuthHandshake');
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
    this.to('codestar-connections:TagResource');
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
    this.to('codestar-connections:UntagResource');
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
   */
  public toUpdateConnectionInstallation() {
    this.to('codestar-connections:UpdateConnectionInstallation');
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
   */
  public toUseConnection() {
    this.to('codestar-connections:UseConnection');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateConnection",
      "DeleteConnection",
      "UpdateConnectionInstallation"
    ],
    "Read": [
      "GetConnection",
      "GetIndividualAccessToken",
      "GetInstallationUrl",
      "PassConnection",
      "StartOAuthHandshake",
      "UseConnection"
    ],
    "List": [
      "ListConnections",
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
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections.html/API_Connection.html
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
   * Filters access by the branch name that is passed in the request. Applies only to UseConnection requests for access to a specific repository branch
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-use
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
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-use
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
   * Filters access by the third-party ID (such as the Bitbucket App installation ID for CodeStar Connections) that is used to update a Connection. Allows you to restrict which third-party App installations can be used to make a Connection
   *
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-permissions-actions-handshake
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
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-use
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
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-passconnection
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
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-use-provider
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
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-use
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
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-permissions-actions
   *
   * Applies to actions:
   * - .toCreateConnection()
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
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-permissions-actions
   *
   * Applies to actions:
   * - .toListConnections()
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
   * https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-permissions.html#connections-use
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRepositoryName(value: string | string[], operator?: Operator | string) {
    return this.if(`codestar-connections:RepositoryName`, value, operator || 'StringLike');
  }
}
