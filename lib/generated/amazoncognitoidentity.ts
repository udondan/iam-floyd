import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [cognito-identity](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitoidentity.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CognitoIdentity extends PolicyStatement {
  public servicePrefix = 'cognito-identity';

  /**
   * Statement provider for service [cognito-identity](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncognitoidentity.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a new identity pool.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_CreateIdentityPool.html
   */
  public toCreateIdentityPool() {
    this.to('cognito-identity:CreateIdentityPool');
    return this;
  }

  /**
   * Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DeleteIdentities.html
   */
  public toDeleteIdentities() {
    this.to('cognito-identity:DeleteIdentities');
    return this;
  }

  /**
   * Deletes a user pool. Once a pool is deleted, users will not be able to authenticate with the pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DeleteIdentityPool.html
   */
  public toDeleteIdentityPool() {
    this.to('cognito-identity:DeleteIdentityPool');
    return this;
  }

  /**
   * Returns metadata related to the given identity, including when the identity was created and any associated linked logins.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DescribeIdentity.html
   */
  public toDescribeIdentity() {
    this.to('cognito-identity:DescribeIdentity');
    return this;
  }

  /**
   * Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_DescribeIdentityPool.html
   */
  public toDescribeIdentityPool() {
    this.to('cognito-identity:DescribeIdentityPool');
    return this;
  }

  /**
   * Returns credentials for the provided identity ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html
   */
  public toGetCredentialsForIdentity() {
    this.to('cognito-identity:GetCredentialsForIdentity');
    return this;
  }

  /**
   * Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetId.html
   */
  public toGetId() {
    this.to('cognito-identity:GetId');
    return this;
  }

  /**
   * Gets the roles for an identity pool.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetIdentityPoolRoles.html
   */
  public toGetIdentityPoolRoles() {
    this.to('cognito-identity:GetIdentityPoolRoles');
    return this;
  }

  /**
   * Gets an OpenID token, using a known Cognito ID.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetOpenIdToken.html
   */
  public toGetOpenIdToken() {
    this.to('cognito-identity:GetOpenIdToken');
    return this;
  }

  /**
   * Registers (or retrieves) a Cognito IdentityId and an OpenID Connect token for a user authenticated by your backend authentication process.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetOpenIdTokenForDeveloperIdentity.html
   */
  public toGetOpenIdTokenForDeveloperIdentity() {
    this.to('cognito-identity:GetOpenIdTokenForDeveloperIdentity');
    return this;
  }

  /**
   * Lists the identities in a pool.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListIdentities.html
   */
  public toListIdentities() {
    this.to('cognito-identity:ListIdentities');
    return this;
  }

  /**
   * Lists all of the Cognito identity pools registered for your account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListIdentityPools.html
   */
  public toListIdentityPools() {
    this.to('cognito-identity:ListIdentityPools');
    return this;
  }

  /**
   * Lists the tags that are assigned to an Amazon Cognito identity pool.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('cognito-identity:ListTagsForResource');
    return this;
  }

  /**
   * Retrieves the IdentityID associated with a DeveloperUserIdentifier or the list of DeveloperUserIdentifiers associated with an IdentityId for an existing identity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_LookupDeveloperIdentity.html
   */
  public toLookupDeveloperIdentity() {
    this.to('cognito-identity:LookupDeveloperIdentity');
    return this;
  }

  /**
   * Merges two users having different IdentityIds, existing in the same identity pool, and identified by the same developer provider.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_MergeDeveloperIdentities.html
   */
  public toMergeDeveloperIdentities() {
    this.to('cognito-identity:MergeDeveloperIdentities');
    return this;
  }

  /**
   * Sets the roles for an identity pool. These roles are used when making calls to GetCredentialsForIdentity action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_SetIdentityPoolRoles.html
   */
  public toSetIdentityPoolRoles() {
    this.to('cognito-identity:SetIdentityPoolRoles');
    return this;
  }

  /**
   * Assigns a set of tags to an Amazon Cognito identity pool.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('cognito-identity:TagResource');
    return this;
  }

  /**
   * Unlinks a DeveloperUserIdentifier from an existing identity.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UnlinkDeveloperIdentity.html
   */
  public toUnlinkDeveloperIdentity() {
    this.to('cognito-identity:UnlinkDeveloperIdentity');
    return this;
  }

  /**
   * Unlinks a federated identity from an existing account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UnlinkIdentity.html
   */
  public toUnlinkIdentity() {
    this.to('cognito-identity:UnlinkIdentity');
    return this;
  }

  /**
   * Removes the specified tags from an Amazon Cognito identity pool.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('cognito-identity:UntagResource');
    return this;
  }

  /**
   * Updates a user pool.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_UpdateIdentityPool.html
   */
  public toUpdateIdentityPool() {
    this.to('cognito-identity:UpdateIdentityPool');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateIdentityPool",
      "DeleteIdentities",
      "DeleteIdentityPool",
      "GetId",
      "MergeDeveloperIdentities",
      "SetIdentityPoolRoles",
      "UnlinkDeveloperIdentity",
      "UnlinkIdentity",
      "UpdateIdentityPool"
    ],
    "Read": [
      "DescribeIdentity",
      "DescribeIdentityPool",
      "GetCredentialsForIdentity",
      "GetIdentityPoolRoles",
      "GetOpenIdToken",
      "GetOpenIdTokenForDeveloperIdentity",
      "LookupDeveloperIdentity"
    ],
    "List": [
      "ListIdentities",
      "ListIdentityPools",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type identitypool to the statement
   *
   * https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html
   *
   * @param identityPoolId - Identifier for the identityPoolId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdentitypool(identityPoolId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cognito-identity:${Region}:${Account}:identitypool/${IdentityPoolId}';
    arn = arn.replace('${IdentityPoolId}', identityPoolId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
