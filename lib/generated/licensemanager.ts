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
   * Creates a new license configuration
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
    this.to('CreateLicenseConfiguration');
    return this;
  }

  /**
   * Permanently deletes a license configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_DeleteLicenseConfiguration.html
   */
  public toDeleteLicenseConfiguration() {
    this.to('DeleteLicenseConfiguration');
    return this;
  }

  /**
   * Gets a license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetLicenseConfiguration.html
   */
  public toGetLicenseConfiguration() {
    this.to('GetLicenseConfiguration');
    return this;
  }

  /**
   * Gets service settings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_GetServiceSettings.html
   */
  public toGetServiceSettings() {
    this.to('GetServiceSettings');
    return this;
  }

  /**
   * Lists associations for a selected license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListAssociationsForLicenseConfiguration.html
   */
  public toListAssociationsForLicenseConfiguration() {
    this.to('ListAssociationsForLicenseConfiguration');
    return this;
  }

  /**
   * Lists the license configuration operations that failed
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListFailuresForLicenseConfigurationOperations.html
   */
  public toListFailuresForLicenseConfigurationOperations() {
    this.to('ListFailuresForLicenseConfigurationOperations');
    return this;
  }

  /**
   * Lists license configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseConfigurations.html
   */
  public toListLicenseConfigurations() {
    this.to('ListLicenseConfigurations');
    return this;
  }

  /**
   * Lists license specifications associated with a selected resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListLicenseSpecificationsForResource.html
   */
  public toListLicenseSpecificationsForResource() {
    this.to('ListLicenseSpecificationsForResource');
    return this;
  }

  /**
   * Lists resource inventory
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListResourceInventory.html
   */
  public toListResourceInventory() {
    this.to('ListResourceInventory');
    return this;
  }

  /**
   * Lists tags for a selected resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Lists usage records for selected license configuration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_ListUsageForLicenseConfiguration.html
   */
  public toListUsageForLicenseConfiguration() {
    this.to('ListUsageForLicenseConfiguration');
    return this;
  }

  /**
   * Tags a selected resource
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
    this.to('TagResource');
    return this;
  }

  /**
   * Untags a selected resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('UntagResource');
    return this;
  }

  /**
   * Updates an existing license configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseConfiguration.html
   */
  public toUpdateLicenseConfiguration() {
    this.to('UpdateLicenseConfiguration');
    return this;
  }

  /**
   * Updates license specifications for a selected resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateLicenseSpecificationsForResource.html
   */
  public toUpdateLicenseSpecificationsForResource() {
    this.to('UpdateLicenseSpecificationsForResource');
    return this;
  }

  /**
   * Updates service settings
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/license-manager/latest/APIReference/API_UpdateServiceSettings.html
   */
  public toUpdateServiceSettings() {
    this.to('UpdateServiceSettings');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "CreateLicenseConfiguration",
      "TagResource",
      "UntagResource"
    ],
    "Write": [
      "DeleteLicenseConfiguration",
      "UpdateLicenseConfiguration",
      "UpdateLicenseSpecificationsForResource"
    ],
    "List": [
      "GetLicenseConfiguration",
      "GetServiceSettings",
      "ListAssociationsForLicenseConfiguration",
      "ListFailuresForLicenseConfigurationOperations",
      "ListLicenseConfigurations",
      "ListLicenseSpecificationsForResource",
      "ListResourceInventory",
      "ListTagsForResource",
      "ListUsageForLicenseConfiguration"
    ],
    "Permissions management": [
      "UpdateServiceSettings"
    ]
  };

  /**
   * Adds a resource of type license-configuration to the statement
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
   * Filters actions based on tag-value associated with the resource.
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
