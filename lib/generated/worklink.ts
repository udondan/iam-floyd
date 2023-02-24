import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [worklink](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworklink.html).
 *
 * @param options - Options for the statement
 */
export class Worklink extends PolicyStatement {
  public servicePrefix = 'worklink';

  /**
   * Statement provider for service [worklink](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworklink.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to associate a domain with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_AssociateDomain.html
   */
  public toAssociateDomain() {
    return this.to('AssociateDomain');
  }

  /**
   * Grants permission to associate a website authorization provider with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_AssociateWebsiteAuthorizationProvider.html
   */
  public toAssociateWebsiteAuthorizationProvider() {
    return this.to('AssociateWebsiteAuthorizationProvider');
  }

  /**
   * Grants permission to associate a website certificate authority with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_AssociateWebsiteCertificateAuthority.html
   */
  public toAssociateWebsiteCertificateAuthority() {
    return this.to('AssociateWebsiteCertificateAuthority');
  }

  /**
   * Grants permission to create an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_CreateFleet.html
   */
  public toCreateFleet() {
    return this.to('CreateFleet');
  }

  /**
   * Grants permission to delete an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DeleteFleet.html
   */
  public toDeleteFleet() {
    return this.to('DeleteFleet');
  }

  /**
   * Grants permission to describe the audit stream configuration for an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeAuditStreamConfiguration.html
   */
  public toDescribeAuditStreamConfiguration() {
    return this.to('DescribeAuditStreamConfiguration');
  }

  /**
   * Grants permission to describe the company network configuration for an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeCompanyNetworkConfiguration.html
   */
  public toDescribeCompanyNetworkConfiguration() {
    return this.to('DescribeCompanyNetworkConfiguration');
  }

  /**
   * Grants permission to describe details of a device associated with an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDevice.html
   */
  public toDescribeDevice() {
    return this.to('DescribeDevice');
  }

  /**
   * Grants permission to describe the device policy configuration for an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDevicePolicyConfiguration.html
   */
  public toDescribeDevicePolicyConfiguration() {
    return this.to('DescribeDevicePolicyConfiguration');
  }

  /**
   * Grants permission to describe details about a domain associated with an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDomain.html
   */
  public toDescribeDomain() {
    return this.to('DescribeDomain');
  }

  /**
   * Grants permission to describe metadata of an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeFleetMetadata.html
   */
  public toDescribeFleetMetadata() {
    return this.to('DescribeFleetMetadata');
  }

  /**
   * Grants permission to describe the identity provider configuration for an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeIdentityProviderConfiguration.html
   */
  public toDescribeIdentityProviderConfiguration() {
    return this.to('DescribeIdentityProviderConfiguration');
  }

  /**
   * Grants permission to describe a website certificate authority associated with an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeWebsiteCertificateAuthority.html
   */
  public toDescribeWebsiteCertificateAuthority() {
    return this.to('DescribeWebsiteCertificateAuthority');
  }

  /**
   * Grants permission to disassociate a domain from an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateDomain.html
   */
  public toDisassociateDomain() {
    return this.to('DisassociateDomain');
  }

  /**
   * Grants permission to disassociate a website authorization provider from an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateWebsiteAuthorizationProvider.html
   */
  public toDisassociateWebsiteAuthorizationProvider() {
    return this.to('DisassociateWebsiteAuthorizationProvider');
  }

  /**
   * Grants permission to disassociate a website certificate authority from an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateWebsiteCertificateAuthority.html
   */
  public toDisassociateWebsiteCertificateAuthority() {
    return this.to('DisassociateWebsiteCertificateAuthority');
  }

  /**
   * Grants permission to list the devices associated with an Amazon WorkLink fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListDevices.html
   */
  public toListDevices() {
    return this.to('ListDevices');
  }

  /**
   * Grants permission to list the associated domains for an Amazon WorkLink fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list the Amazon WorkLink fleets associated with the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListFleets.html
   */
  public toListFleets() {
    return this.to('ListFleets');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the website authorization providers for an Amazon WorkLink fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListWebsiteAuthorizationProviders.html
   */
  public toListWebsiteAuthorizationProviders() {
    return this.to('ListWebsiteAuthorizationProviders');
  }

  /**
   * Grants permission to list the website certificate authorities associated with an Amazon WorkLink fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListWebsiteCertificateAuthorities.html
   */
  public toListWebsiteCertificateAuthorities() {
    return this.to('ListWebsiteCertificateAuthorities');
  }

  /**
   * Grants permission to restore access to a domain associated with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_RestoreDomainAccess.html
   */
  public toRestoreDomainAccess() {
    return this.to('RestoreDomainAccess');
  }

  /**
   * Grants permission to revoke access to a domain associated with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_RevokeDomainAccess.html
   */
  public toRevokeDomainAccess() {
    return this.to('RevokeDomainAccess');
  }

  /**
   * Grants permission to list devices for an Amazon WorkLink fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/ag/manage-devices.html
   */
  public toSearchEntity() {
    return this.to('SearchEntity');
  }

  /**
   * Grants permission to sign out a user from an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_SignOutUser.html
   */
  public toSignOutUser() {
    return this.to('SignOutUser');
  }

  /**
   * Grants permission to add one or more tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove one or more tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the audit stream configuration for an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateAuditStreamConfiguration.html
   */
  public toUpdateAuditStreamConfiguration() {
    return this.to('UpdateAuditStreamConfiguration');
  }

  /**
   * Grants permission to update the company network configuration for an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateCompanyNetworkConfiguration.html
   */
  public toUpdateCompanyNetworkConfiguration() {
    return this.to('UpdateCompanyNetworkConfiguration');
  }

  /**
   * Grants permission to update the device policy configuration for an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateDevicePolicyConfiguration.html
   */
  public toUpdateDevicePolicyConfiguration() {
    return this.to('UpdateDevicePolicyConfiguration');
  }

  /**
   * Grants permission to update the metadata for a domain associated with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateDomainMetadata.html
   */
  public toUpdateDomainMetadata() {
    return this.to('UpdateDomainMetadata');
  }

  /**
   * Grants permission to update the metadata of an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateFleetMetadata.html
   */
  public toUpdateFleetMetadata() {
    return this.to('UpdateFleetMetadata');
  }

  /**
   * Grants permission to update the identity provider configuration for an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateIdentityProviderConfiguration.html
   */
  public toUpdateIdentityProviderConfiguration() {
    return this.to('UpdateIdentityProviderConfiguration');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateDomain',
      'AssociateWebsiteAuthorizationProvider',
      'AssociateWebsiteCertificateAuthority',
      'CreateFleet',
      'DeleteFleet',
      'DisassociateDomain',
      'DisassociateWebsiteAuthorizationProvider',
      'DisassociateWebsiteCertificateAuthority',
      'RestoreDomainAccess',
      'RevokeDomainAccess',
      'SignOutUser',
      'UpdateAuditStreamConfiguration',
      'UpdateCompanyNetworkConfiguration',
      'UpdateDevicePolicyConfiguration',
      'UpdateDomainMetadata',
      'UpdateFleetMetadata',
      'UpdateIdentityProviderConfiguration'
    ],
    Read: [
      'DescribeAuditStreamConfiguration',
      'DescribeCompanyNetworkConfiguration',
      'DescribeDevice',
      'DescribeDevicePolicyConfiguration',
      'DescribeDomain',
      'DescribeFleetMetadata',
      'DescribeIdentityProviderConfiguration',
      'DescribeWebsiteCertificateAuthority',
      'ListTagsForResource'
    ],
    List: [
      'ListDevices',
      'ListDomains',
      'ListFleets',
      'ListWebsiteAuthorizationProviders',
      'ListWebsiteCertificateAuthorities',
      'SearchEntity'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type fleet to the statement
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_CreateFleet.html
   *
   * @param fleetName - Identifier for the fleetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFleet(fleetName: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:worklink::${ account || '*' }:fleet/${ fleetName }`);
  }
}
