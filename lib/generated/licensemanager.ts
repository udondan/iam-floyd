import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

/**
 * Statement provider for service [license-manager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class LicenseManager extends PolicyStatement {
  public servicePrefix = 'license-manager';

  /**
   * Statement provider for service [license-manager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslicensemanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a grant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_AcceptGrant.html
   */
  public toAcceptGrant() {
    this.to('license-manager:AcceptGrant');
    return this;
  }

  /**
   * Grants permission to check in license entitlements back to pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CheckInLicense.html
   */
  public toCheckInLicense() {
    this.to('license-manager:CheckInLicense');
    return this;
  }

  /**
   * Grants permission to check out license entitlements for borrow use case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CheckoutBorrowLicense.html
   */
  public toCheckoutBorrowLicense() {
    this.to('license-manager:CheckoutBorrowLicense');
    return this;
  }

  /**
   * Grants permission to check out license entitlements
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CheckoutLicense.html
   */
  public toCheckoutLicense() {
    this.to('license-manager:CheckoutLicense');
    return this;
  }

  /**
   * Grants permission to create a new grant for license
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateGrant.html
   */
  public toCreateGrant() {
    this.to('license-manager:CreateGrant');
    return this;
  }

  /**
   * Grants permission to create new version of grant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateGrantVersion.html
   */
  public toCreateGrantVersion() {
    this.to('license-manager:CreateGrantVersion');
    return this;
  }

  /**
   * Grants permission to create a new license
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicense.html
   */
  public toCreateLicense() {
    this.to('license-manager:CreateLicense');
    return this;
  }

  /**
   * Grants permission to create a new license configuration
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseConfiguration.html
   */
  public toCreateLicenseConfiguration() {
    this.to('license-manager:CreateLicenseConfiguration');
    return this;
  }

  /**
   * Grants permission to create new version of license.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseVersion.html
   */
  public toCreateLicenseVersion() {
    this.to('license-manager:CreateLicenseVersion');
    return this;
  }

  /**
   * Grants permission to create a new token for license
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateToken.html
   */
  public toCreateToken() {
    this.to('license-manager:CreateToken');
    return this;
  }

  /**
   * Deletes a grant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteGrant.html
   */
  public toDeleteGrant() {
    this.to('license-manager:DeleteGrant');
    return this;
  }

  /**
   * Grants permission to delete a license
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicense.html
   */
  public toDeleteLicense() {
    this.to('license-manager:DeleteLicense');
    return this;
  }

  /**
   * Grants permission to permanently delete a license configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicenseConfiguration.html
   */
  public toDeleteLicenseConfiguration() {
    this.to('license-manager:DeleteLicenseConfiguration');
    return this;
  }

  /**
   * Grants permission to delete token
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteToken.html
   */
  public toDeleteToken() {
    this.to('license-manager:DeleteToken');
    return this;
  }

  /**
   * Grants permission to extend consumption period of already checkout license entitlements
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ExtendLicenseConsumption.html
   */
  public toExtendLicenseConsumption() {
    this.to('license-manager:ExtendLicenseConsumption');
    return this;
  }

  /**
   * Grants permission to get access token
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetAccessToken.html
   */
  public toGetAccessToken() {
    this.to('license-manager:GetAccessToken');
    return this;
  }

  /**
   * Grants permission to get a grant
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetGrant.html
   */
  public toGetGrant() {
    this.to('license-manager:GetGrant');
    return this;
  }

  /**
   * Grants permission to get a license
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicense.html
   */
  public toGetLicense() {
    this.to('license-manager:GetLicense');
    return this;
  }

  /**
   * Grants permission to get a license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseConfiguration.html
   */
  public toGetLicenseConfiguration() {
    this.to('license-manager:GetLicenseConfiguration');
    return this;
  }

  /**
   * Grants permission to get a license usage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseUsage.html
   */
  public toGetLicenseUsage() {
    this.to('license-manager:GetLicenseUsage');
    return this;
  }

  /**
   * Grants permission to get service settings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetServiceSettings.html
   */
  public toGetServiceSettings() {
    this.to('license-manager:GetServiceSettings');
    return this;
  }

  /**
   * Grants permission to list associations for a selected license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListAssociationsForLicenseConfiguration.html
   */
  public toListAssociationsForLicenseConfiguration() {
    this.to('license-manager:ListAssociationsForLicenseConfiguration');
    return this;
  }

  /**
   * Grants permission to list distributed grants
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListDistributedGrants.html
   */
  public toListDistributedGrants() {
    this.to('license-manager:ListDistributedGrants');
    return this;
  }

  /**
   * Grants permission to list the license configuration operations that failed
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListFailuresForLicenseConfigurationOperations.html
   */
  public toListFailuresForLicenseConfigurationOperations() {
    this.to('license-manager:ListFailuresForLicenseConfigurationOperations');
    return this;
  }

  /**
   * Grants permission to list license configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseConfigurations.html
   */
  public toListLicenseConfigurations() {
    this.to('license-manager:ListLicenseConfigurations');
    return this;
  }

  /**
   * Grants permission to list license specifications associated with a selected resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseSpecificationsForResource.html
   */
  public toListLicenseSpecificationsForResource() {
    this.to('license-manager:ListLicenseSpecificationsForResource');
    return this;
  }

  /**
   * Grants permission to list license versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseVersions.html
   */
  public toListLicenseVersions() {
    this.to('license-manager:ListLicenseVersions');
    return this;
  }

  /**
   * Grants permission to list licenses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenses.html
   */
  public toListLicenses() {
    this.to('license-manager:ListLicenses');
    return this;
  }

  /**
   * Grants permission to list received grants
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedGrants.html
   */
  public toListReceivedGrants() {
    this.to('license-manager:ListReceivedGrants');
    return this;
  }

  /**
   * Grants permission to list received licenses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedLicenses.html
   */
  public toListReceivedLicensess() {
    this.to('license-manager:ListReceivedLicensess');
    return this;
  }

  /**
   * Grants permission to list resource inventory
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListResourceInventory.html
   */
  public toListResourceInventory() {
    this.to('license-manager:ListResourceInventory');
    return this;
  }

  /**
   * Grants permission to list tags for a selected resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('license-manager:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list tokens
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListTokens.html
   */
  public toListTokens() {
    this.to('license-manager:ListTokens');
    return this;
  }

  /**
   * Grants permission to list usage records for selected license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListUsageForLicenseConfiguration.html
   */
  public toListUsageForLicenseConfiguration() {
    this.to('license-manager:ListUsageForLicenseConfiguration');
    return this;
  }

  /**
   * Grants permission to reject a grant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_RejectGrant.html
   */
  public toRejectGrant() {
    this.to('license-manager:RejectGrant');
    return this;
  }

  /**
   * Grants permission to tag a selected resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('license-manager:TagResource');
    return this;
  }

  /**
   * Grants permission to untag a selected resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('license-manager:UntagResource');
    return this;
  }

  /**
   * Grants permission to update an existing license configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseConfiguration.html
   */
  public toUpdateLicenseConfiguration() {
    this.to('license-manager:UpdateLicenseConfiguration');
    return this;
  }

  /**
   * Grants permission to updates license specifications for a selected resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseSpecificationsForResource.html
   */
  public toUpdateLicenseSpecificationsForResource() {
    this.to('license-manager:UpdateLicenseSpecificationsForResource');
    return this;
  }

  /**
   * Grants permission to updates service settings
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateServiceSettings.html
   */
  public toUpdateServiceSettings() {
    this.to('license-manager:UpdateServiceSettings');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptGrant",
      "CheckInLicense",
      "CheckoutBorrowLicense",
      "CheckoutLicense",
      "CreateGrant",
      "CreateGrantVersion",
      "CreateLicense",
      "CreateLicenseVersion",
      "CreateToken",
      "DeleteGrant",
      "DeleteLicense",
      "DeleteLicenseConfiguration",
      "DeleteToken",
      "ExtendLicenseConsumption",
      "RejectGrant",
      "UpdateLicenseConfiguration",
      "UpdateLicenseSpecificationsForResource"
    ],
    "Tagging": [
      "CreateLicenseConfiguration",
      "TagResource",
      "UntagResource"
    ],
    "Read": [
      "GetAccessToken",
      "GetGrant",
      "GetLicense",
      "GetLicenseUsage"
    ],
    "List": [
      "GetLicenseConfiguration",
      "GetServiceSettings",
      "ListAssociationsForLicenseConfiguration",
      "ListDistributedGrants",
      "ListFailuresForLicenseConfigurationOperations",
      "ListLicenseConfigurations",
      "ListLicenseSpecificationsForResource",
      "ListLicenseVersions",
      "ListLicenses",
      "ListReceivedGrants",
      "ListReceivedLicensess",
      "ListResourceInventory",
      "ListTagsForResource",
      "ListTokens",
      "ListUsageForLicenseConfiguration"
    ],
    "Permissions management": [
      "UpdateServiceSettings"
    ]
  };

  /**
   * Adds a resource of type license-configuration to the statement
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/license-configurations.html
   *
   * @param licenseConfigurationId - Identifier for the licenseConfigurationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifResourceTag()
   */
  public onLicenseConfiguration(licenseConfigurationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:license-manager:${Region}:${Account}:license-configuration/${LicenseConfigurationId}';
    arn = arn.replace('${LicenseConfigurationId}', licenseConfigurationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type license to the statement
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/seller-issued-licenses.html
   *
   * @param licenseId - Identifier for the licenseId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLicense(licenseId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:license-manager::${Account}:license:${LicenseId}';
    arn = arn.replace('${LicenseId}', licenseId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type grant to the statement
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html
   *
   * @param grantId - Identifier for the grantId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGrant(grantId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:license-manager::${Account}:grant:${GrantId}';
    arn = arn.replace('${GrantId}', grantId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on tag-value associated with the resource.
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html
   *
   * Applies to resource types:
   * - license-configuration
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`license-manager:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }
}

export type LicenseManagerActionsWrite = 'AcceptGrant' | 'CheckInLicense' | 'CheckoutBorrowLicense' | 'CheckoutLicense' | 'CreateGrant' | 'CreateGrantVersion' | 'CreateLicense' | 'CreateLicenseVersion' | 'CreateToken' | 'DeleteGrant' | 'DeleteLicense' | 'DeleteLicenseConfiguration' | 'DeleteToken' | 'ExtendLicenseConsumption' | 'RejectGrant' | 'UpdateLicenseConfiguration' | 'UpdateLicenseSpecificationsForResource';
export type LicenseManagerActionsTagging = 'CreateLicenseConfiguration' | 'TagResource' | 'UntagResource';
export type LicenseManagerActionsRead = 'GetAccessToken' | 'GetGrant' | 'GetLicense' | 'GetLicenseUsage';
export type LicenseManagerActionsList = 'GetLicenseConfiguration' | 'GetServiceSettings' | 'ListAssociationsForLicenseConfiguration' | 'ListDistributedGrants' | 'ListFailuresForLicenseConfigurationOperations' | 'ListLicenseConfigurations' | 'ListLicenseSpecificationsForResource' | 'ListLicenseVersions' | 'ListLicenses' | 'ListReceivedGrants' | 'ListReceivedLicensess' | 'ListResourceInventory' | 'ListTagsForResource' | 'ListTokens' | 'ListUsageForLicenseConfiguration';
export type LicenseManagerActionsPermissions management = 'UpdateServiceSettings';

export type LicenseManagerActions = LicenseManagerActionsWrite | LicenseManagerActionsTagging | LicenseManagerActionsRead | LicenseManagerActionsList | LicenseManagerActionsPermissions management;
