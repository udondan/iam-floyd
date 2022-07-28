import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [vendor-insights](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacevendorinsights.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class VendorInsights extends PolicyStatement {
  public servicePrefix = 'vendor-insights';

  /**
   * Statement provider for service [vendor-insights](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacevendorinsights.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to activate the security profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toActivateSecurityProfile() {
    return this.to('ActivateSecurityProfile');
  }

  /**
   * Grants permission to associate security profile with a data source
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - vendor-insights:GetDataSource
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toAssociateDataSource() {
    return this.to('AssociateDataSource');
  }

  /**
   * Grants permission to create a new data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toCreateDataSource() {
    return this.to('CreateDataSource');
  }

  /**
   * Grants permission to create a new security profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toCreateSecurityProfile() {
    return this.to('CreateSecurityProfile');
  }

  /**
   * Grants permission to deactivate the security profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toDeactivateSecurityProfile() {
    return this.to('DeactivateSecurityProfile');
  }

  /**
   * Grants permission to delete a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toDeleteDataSource() {
    return this.to('DeleteDataSource');
  }

  /**
   * Grants permission to disassociate security profile from a data source
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - vendor-insights:GetDataSource
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toDisassociateDataSource() {
    return this.to('DisassociateDataSource');
  }

  /**
   * Grants permission to retrieve the details of an existing data source
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toGetDataSource() {
    return this.to('GetDataSource');
  }

  /**
   * Grants permission to return the details of a security profile snapshot that requester is entitled to read
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toGetEntitledSecurityProfileSnapshot() {
    return this.to('GetEntitledSecurityProfileSnapshot');
  }

  /**
   * Grants permission to get the access terms for a vendor insights profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toGetProfileAccessTerms() {
    return this.to('GetProfileAccessTerms');
  }

  /**
   * Grants permission to return the details of an existing security profile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toGetSecurityProfile() {
    return this.to('GetSecurityProfile');
  }

  /**
   * Grants permission to return the details of a security profile snapshot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toGetSecurityProfileSnapshot() {
    return this.to('GetSecurityProfileSnapshot');
  }

  /**
   * Grants permission to list existing data sources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toListDataSources() {
    return this.to('ListDataSources');
  }

  /**
   * Grants permission to return the snapshot summary list for an existing security profile that requester is entitled to list
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toListEntitledSecurityProfileSnapshots() {
    return this.to('ListEntitledSecurityProfileSnapshots');
  }

  /**
   * Grants permission to list entitled security profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toListEntitledSecurityProfiles() {
    return this.to('ListEntitledSecurityProfiles');
  }

  /**
   * Grants permission to return the snapshot summary list for an existing security profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toListSecurityProfileSnapshots() {
    return this.to('ListSecurityProfileSnapshots');
  }

  /**
   * Grants permission to list existing security profiles
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toListSecurityProfiles() {
    return this.to('ListSecurityProfiles');
  }

  /**
   * Grants permission to update the security profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   */
  public toUpdateSecurityProfile() {
    return this.to('UpdateSecurityProfile');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ActivateSecurityProfile',
      'AssociateDataSource',
      'CreateDataSource',
      'CreateSecurityProfile',
      'DeactivateSecurityProfile',
      'DeleteDataSource',
      'DisassociateDataSource',
      'UpdateSecurityProfile'
    ],
    Read: [
      'GetDataSource',
      'GetEntitledSecurityProfileSnapshot',
      'GetProfileAccessTerms',
      'GetSecurityProfile',
      'GetSecurityProfileSnapshot'
    ],
    List: [
      'ListDataSources',
      'ListEntitledSecurityProfileSnapshots',
      'ListEntitledSecurityProfiles',
      'ListSecurityProfileSnapshots',
      'ListSecurityProfiles'
    ]
  };

  /**
   * Adds a resource of type DataSource to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDataSource(resourceId: string, partition?: string) {
    return this.on(`arn:${ partition || VendorInsights.defaultPartition }:vendor-insights:::data-source:${ resourceId }`);
  }

  /**
   * Adds a resource of type SecurityProfile to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-security-iam-config-vend-insights.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSecurityProfile(resourceId: string, partition?: string) {
    return this.on(`arn:${ partition || VendorInsights.defaultPartition }:vendor-insights:::security-profile:${ resourceId }`);
  }
}
