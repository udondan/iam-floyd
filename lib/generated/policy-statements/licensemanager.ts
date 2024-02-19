import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
  constructor(sid?: string) {
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
    return this.to('AcceptGrant');
  }

  /**
   * Grants permission to check in license entitlements back to pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CheckInLicense.html
   */
  public toCheckInLicense() {
    return this.to('CheckInLicense');
  }

  /**
   * Grants permission to check out license entitlements for borrow use case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CheckoutBorrowLicense.html
   */
  public toCheckoutBorrowLicense() {
    return this.to('CheckoutBorrowLicense');
  }

  /**
   * Grants permission to check out license entitlements
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CheckoutLicense.html
   */
  public toCheckoutLicense() {
    return this.to('CheckoutLicense');
  }

  /**
   * Grants permission to create a new grant for license
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateGrant.html
   */
  public toCreateGrant() {
    return this.to('CreateGrant');
  }

  /**
   * Grants permission to create new version of grant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateGrantVersion.html
   */
  public toCreateGrantVersion() {
    return this.to('CreateGrantVersion');
  }

  /**
   * Grants permission to create a new license
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicense.html
   */
  public toCreateLicense() {
    return this.to('CreateLicense');
  }

  /**
   * Grants permission to create a new license configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseConfiguration.html
   */
  public toCreateLicenseConfiguration() {
    return this.to('CreateLicenseConfiguration');
  }

  /**
   * Grants permission to create a license conversion task for a resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseConversionTaskForResource.html
   */
  public toCreateLicenseConversionTaskForResource() {
    return this.to('CreateLicenseConversionTaskForResource');
  }

  /**
   * Grants permission to create a report generator for a license configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseManagerReportGenerator.html
   */
  public toCreateLicenseManagerReportGenerator() {
    return this.to('CreateLicenseManagerReportGenerator');
  }

  /**
   * Grants permission to create new version of license
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateLicenseVersion.html
   */
  public toCreateLicenseVersion() {
    return this.to('CreateLicenseVersion');
  }

  /**
   * Grants permission to create a new token for license
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_CreateToken.html
   */
  public toCreateToken() {
    return this.to('CreateToken');
  }

  /**
   * Grants permission to delete a grant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteGrant.html
   */
  public toDeleteGrant() {
    return this.to('DeleteGrant');
  }

  /**
   * Grants permission to delete a license
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicense.html
   */
  public toDeleteLicense() {
    return this.to('DeleteLicense');
  }

  /**
   * Grants permission to permanently delete a license configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicenseConfiguration.html
   */
  public toDeleteLicenseConfiguration() {
    return this.to('DeleteLicenseConfiguration');
  }

  /**
   * Grants permission to delete a report generator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicenseManagerReportGenerator.html
   */
  public toDeleteLicenseManagerReportGenerator() {
    return this.to('DeleteLicenseManagerReportGenerator');
  }

  /**
   * Grants permission to delete token
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteToken.html
   */
  public toDeleteToken() {
    return this.to('DeleteToken');
  }

  /**
   * Grants permission to extend consumption period of already checkout license entitlements
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ExtendLicenseConsumption.html
   */
  public toExtendLicenseConsumption() {
    return this.to('ExtendLicenseConsumption');
  }

  /**
   * Grants permission to get access token
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetAccessToken.html
   */
  public toGetAccessToken() {
    return this.to('GetAccessToken');
  }

  /**
   * Grants permission to get a grant
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetGrant.html
   */
  public toGetGrant() {
    return this.to('GetGrant');
  }

  /**
   * Grants permission to get a license
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicense.html
   */
  public toGetLicense() {
    return this.to('GetLicense');
  }

  /**
   * Grants permission to get a license configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseConfiguration.html
   */
  public toGetLicenseConfiguration() {
    return this.to('GetLicenseConfiguration');
  }

  /**
   * Grants permission to retrieve a license conversion task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseConversionTask.html
   */
  public toGetLicenseConversionTask() {
    return this.to('GetLicenseConversionTask');
  }

  /**
   * Grants permission to get a report generator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseManagerReportGenerator.html
   */
  public toGetLicenseManagerReportGenerator() {
    return this.to('GetLicenseManagerReportGenerator');
  }

  /**
   * Grants permission to get a license usage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseUsage.html
   */
  public toGetLicenseUsage() {
    return this.to('GetLicenseUsage');
  }

  /**
   * Grants permission to get service settings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetServiceSettings.html
   */
  public toGetServiceSettings() {
    return this.to('GetServiceSettings');
  }

  /**
   * Grants permission to list associations for a selected license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListAssociationsForLicenseConfiguration.html
   */
  public toListAssociationsForLicenseConfiguration() {
    return this.to('ListAssociationsForLicenseConfiguration');
  }

  /**
   * Grants permission to list distributed grants
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListDistributedGrants.html
   */
  public toListDistributedGrants() {
    return this.to('ListDistributedGrants');
  }

  /**
   * Grants permission to list the license configuration operations that failed
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListFailuresForLicenseConfigurationOperations.html
   */
  public toListFailuresForLicenseConfigurationOperations() {
    return this.to('ListFailuresForLicenseConfigurationOperations');
  }

  /**
   * Grants permission to list license configurations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseConfigurations.html
   */
  public toListLicenseConfigurations() {
    return this.to('ListLicenseConfigurations');
  }

  /**
   * Grants permission to list license conversion tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseConversionTasks.html
   */
  public toListLicenseConversionTasks() {
    return this.to('ListLicenseConversionTasks');
  }

  /**
   * Grants permission to list report generators
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseManagerReportGenerators.html
   */
  public toListLicenseManagerReportGenerators() {
    return this.to('ListLicenseManagerReportGenerators');
  }

  /**
   * Grants permission to list license specifications associated with a selected resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseSpecificationsForResource.html
   */
  public toListLicenseSpecificationsForResource() {
    return this.to('ListLicenseSpecificationsForResource');
  }

  /**
   * Grants permission to list license versions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseVersions.html
   */
  public toListLicenseVersions() {
    return this.to('ListLicenseVersions');
  }

  /**
   * Grants permission to list licenses
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenses.html
   */
  public toListLicenses() {
    return this.to('ListLicenses');
  }

  /**
   * Grants permission to list received grants
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedGrants.html
   */
  public toListReceivedGrants() {
    return this.to('ListReceivedGrants');
  }

  /**
   * Grants permission to list received grants for organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedGrantsForOrganization.html
   */
  public toListReceivedGrantsForOrganization() {
    return this.to('ListReceivedGrantsForOrganization');
  }

  /**
   * Grants permission to list received licenses
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedLicenses.html
   */
  public toListReceivedLicenses() {
    return this.to('ListReceivedLicenses');
  }

  /**
   * Grants permission to list received licenses for organization
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListReceivedLicensesForOrganization.html
   */
  public toListReceivedLicensesForOrganization() {
    return this.to('ListReceivedLicensesForOrganization');
  }

  /**
   * Grants permission to list resource inventory
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListResourceInventory.html
   */
  public toListResourceInventory() {
    return this.to('ListResourceInventory');
  }

  /**
   * Grants permission to list tags for a selected resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list tokens
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListTokens.html
   */
  public toListTokens() {
    return this.to('ListTokens');
  }

  /**
   * Grants permission to list usage records for selected license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListUsageForLicenseConfiguration.html
   */
  public toListUsageForLicenseConfiguration() {
    return this.to('ListUsageForLicenseConfiguration');
  }

  /**
   * Grants permission to reject a grant
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_RejectGrant.html
   */
  public toRejectGrant() {
    return this.to('RejectGrant');
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
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a selected resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing license configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseConfiguration.html
   */
  public toUpdateLicenseConfiguration() {
    return this.to('UpdateLicenseConfiguration');
  }

  /**
   * Grants permission to update a report generator for a license configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseManagerReportGenerator.html
   */
  public toUpdateLicenseManagerReportGenerator() {
    return this.to('UpdateLicenseManagerReportGenerator');
  }

  /**
   * Grants permission to updates license specifications for a selected resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseSpecificationsForResource.html
   */
  public toUpdateLicenseSpecificationsForResource() {
    return this.to('UpdateLicenseSpecificationsForResource');
  }

  /**
   * Grants permission to updates service settings
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateServiceSettings.html
   */
  public toUpdateServiceSettings() {
    return this.to('UpdateServiceSettings');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptGrant',
      'CheckInLicense',
      'CheckoutBorrowLicense',
      'CheckoutLicense',
      'CreateGrant',
      'CreateGrantVersion',
      'CreateLicense',
      'CreateLicenseConfiguration',
      'CreateLicenseConversionTaskForResource',
      'CreateLicenseManagerReportGenerator',
      'CreateLicenseVersion',
      'CreateToken',
      'DeleteGrant',
      'DeleteLicense',
      'DeleteLicenseConfiguration',
      'DeleteLicenseManagerReportGenerator',
      'DeleteToken',
      'ExtendLicenseConsumption',
      'RejectGrant',
      'UpdateLicenseConfiguration',
      'UpdateLicenseManagerReportGenerator',
      'UpdateLicenseSpecificationsForResource'
    ],
    Read: [
      'GetAccessToken',
      'GetGrant',
      'GetLicense',
      'GetLicenseConfiguration',
      'GetLicenseConversionTask',
      'GetLicenseManagerReportGenerator',
      'GetLicenseUsage',
      'ListLicenseConfigurations',
      'ListLicenses',
      'ListTagsForResource'
    ],
    List: [
      'GetServiceSettings',
      'ListAssociationsForLicenseConfiguration',
      'ListDistributedGrants',
      'ListFailuresForLicenseConfigurationOperations',
      'ListLicenseConversionTasks',
      'ListLicenseManagerReportGenerators',
      'ListLicenseSpecificationsForResource',
      'ListLicenseVersions',
      'ListReceivedGrants',
      'ListReceivedGrantsForOrganization',
      'ListReceivedLicenses',
      'ListReceivedLicensesForOrganization',
      'ListResourceInventory',
      'ListTokens',
      'ListUsageForLicenseConfiguration'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ],
    'Permissions management': [
      'UpdateServiceSettings'
    ]
  };

  /**
   * Adds a resource of type license-configuration to the statement
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/license-configurations.html
   *
   * @param licenseConfigurationId - Identifier for the licenseConfigurationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifResourceTag()
   */
  public onLicenseConfiguration(licenseConfigurationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:license-manager:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:license-configuration:${ licenseConfigurationId }`);
  }

  /**
   * Adds a resource of type license to the statement
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/seller-issued-licenses.html
   *
   * @param licenseId - Identifier for the licenseId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onLicense(licenseId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:license-manager::${ account ?? this.defaultAccount }:license:${ licenseId }`);
  }

  /**
   * Adds a resource of type grant to the statement
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html
   *
   * @param grantId - Identifier for the grantId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onGrant(grantId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:license-manager::${ account ?? this.defaultAccount }:grant:${ grantId }`);
  }

  /**
   * Adds a resource of type report-generator to the statement
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/report-generators.html
   *
   * @param reportGeneratorId - Identifier for the reportGeneratorId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifResourceTag()
   */
  public onReportGenerator(reportGeneratorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:license-manager:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:report-generator:${ reportGeneratorId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html
   *
   * Applies to actions:
   * - .toCreateLicenseConfiguration()
   * - .toCreateLicenseManagerReportGenerator()
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
   * Filters access by tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html
   *
   * Applies to actions:
   * - .toCreateLicenseConfiguration()
   * - .toCreateLicenseManagerReportGenerator()
   * - .toTagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/license-manager/latest/userguide/identity-access-management.html
   *
   * Applies to resource types:
   * - license-configuration
   * - report-generator
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }
}
