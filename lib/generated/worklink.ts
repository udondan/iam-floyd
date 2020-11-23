import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [worklink](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworklink.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Worklink extends PolicyStatement {
  public servicePrefix = 'worklink';

  /**
   * Statement provider for service [worklink](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworklink.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a domain with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_AssociateDomain.html
   */
  public toAssociateDomain() {
    this.to('AssociateDomain');
    return this;
  }

  /**
   * Grants permission to associate a website authorization provider with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_AssociateWebsiteAuthorizationProvider.html
   */
  public toAssociateWebsiteAuthorizationProvider() {
    this.to('AssociateWebsiteAuthorizationProvider');
    return this;
  }

  /**
   * Grants permission to associate a website certificate authority with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_AssociateWebsiteCertificateAuthority.html
   */
  public toAssociateWebsiteCertificateAuthority() {
    this.to('AssociateWebsiteCertificateAuthority');
    return this;
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
    this.to('CreateFleet');
    return this;
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
    this.to('DeleteFleet');
    return this;
  }

  /**
   * Grants permission to describe the audit stream configuration for an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeAuditStreamConfiguration.html
   */
  public toDescribeAuditStreamConfiguration() {
    this.to('DescribeAuditStreamConfiguration');
    return this;
  }

  /**
   * Grants permission to describe the company network configuration for an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeCompanyNetworkConfiguration.html
   */
  public toDescribeCompanyNetworkConfiguration() {
    this.to('DescribeCompanyNetworkConfiguration');
    return this;
  }

  /**
   * Grants permission to describe details of a device associated with an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDevice.html
   */
  public toDescribeDevice() {
    this.to('DescribeDevice');
    return this;
  }

  /**
   * Grants permission to describe the device policy configuration for an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDevicePolicyConfiguration.html
   */
  public toDescribeDevicePolicyConfiguration() {
    this.to('DescribeDevicePolicyConfiguration');
    return this;
  }

  /**
   * Grants permission to describe details about a domain associated with an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeDomain.html
   */
  public toDescribeDomain() {
    this.to('DescribeDomain');
    return this;
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
    this.to('DescribeFleetMetadata');
    return this;
  }

  /**
   * Grants permission to describe the identity provider configuration for an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeIdentityProviderConfiguration.html
   */
  public toDescribeIdentityProviderConfiguration() {
    this.to('DescribeIdentityProviderConfiguration');
    return this;
  }

  /**
   * Grants permission to describe a website certificate authority associated with an Amazon WorkLink fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DescribeWebsiteCertificateAuthority.html
   */
  public toDescribeWebsiteCertificateAuthority() {
    this.to('DescribeWebsiteCertificateAuthority');
    return this;
  }

  /**
   * Grants permission to disassociate a domain from an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateDomain.html
   */
  public toDisassociateDomain() {
    this.to('DisassociateDomain');
    return this;
  }

  /**
   * Grants permission to disassociate a website authorization provider from an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateWebsiteAuthorizationProvider.html
   */
  public toDisassociateWebsiteAuthorizationProvider() {
    this.to('DisassociateWebsiteAuthorizationProvider');
    return this;
  }

  /**
   * Grants permission to disassociate a website certificate authority from an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_DisassociateWebsiteCertificateAuthority.html
   */
  public toDisassociateWebsiteCertificateAuthority() {
    this.to('DisassociateWebsiteCertificateAuthority');
    return this;
  }

  /**
   * Grants permission to list the devices associated with an Amazon WorkLink fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListDevices.html
   */
  public toListDevices() {
    this.to('ListDevices');
    return this;
  }

  /**
   * Grants permission to list the associated domains for an Amazon WorkLink fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListDomains.html
   */
  public toListDomains() {
    this.to('ListDomains');
    return this;
  }

  /**
   * Grants permission to list the Amazon WorkLink fleets associated with the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListFleets.html
   */
  public toListFleets() {
    this.to('ListFleets');
    return this;
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list the website authorization providers for an Amazon WorkLink fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListWebsiteAuthorizationProviders.html
   */
  public toListWebsiteAuthorizationProviders() {
    this.to('ListWebsiteAuthorizationProviders');
    return this;
  }

  /**
   * Grants permission to list the website certificate authorities associated with an Amazon WorkLink fleet
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_ListWebsiteCertificateAuthorities.html
   */
  public toListWebsiteCertificateAuthorities() {
    this.to('ListWebsiteCertificateAuthorities');
    return this;
  }

  /**
   * Grants permission to restore access to a domain associated with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_RestoreDomainAccess.html
   */
  public toRestoreDomainAccess() {
    this.to('RestoreDomainAccess');
    return this;
  }

  /**
   * Grants permission to revoke access to a domain associated with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_RevokeDomainAccess.html
   */
  public toRevokeDomainAccess() {
    this.to('RevokeDomainAccess');
    return this;
  }

  /**
   * Grants permission to sign out a user from an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_SignOutUser.html
   */
  public toSignOutUser() {
    this.to('SignOutUser');
    return this;
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
    this.to('TagResource');
    return this;
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
    this.to('UntagResource');
    return this;
  }

  /**
   * Grants permission to update the audit stream configuration for an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateAuditStreamConfiguration.html
   */
  public toUpdateAuditStreamConfiguration() {
    this.to('UpdateAuditStreamConfiguration');
    return this;
  }

  /**
   * Grants permission to update the company network configuration for an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateCompanyNetworkConfiguration.html
   */
  public toUpdateCompanyNetworkConfiguration() {
    this.to('UpdateCompanyNetworkConfiguration');
    return this;
  }

  /**
   * Grants permission to update the device policy configuration for an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateDevicePolicyConfiguration.html
   */
  public toUpdateDevicePolicyConfiguration() {
    this.to('UpdateDevicePolicyConfiguration');
    return this;
  }

  /**
   * Grants permission to update the metadata for a domain associated with an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateDomainMetadata.html
   */
  public toUpdateDomainMetadata() {
    this.to('UpdateDomainMetadata');
    return this;
  }

  /**
   * Grants permission to update the metadata of an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateFleetMetadata.html
   */
  public toUpdateFleetMetadata() {
    this.to('UpdateFleetMetadata');
    return this;
  }

  /**
   * Grants permission to update the identity provider configuration for an Amazon WorkLink fleet
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/worklink/latest/api/API_UpdateIdentityProviderConfiguration.html
   */
  public toUpdateIdentityProviderConfiguration() {
    this.to('UpdateIdentityProviderConfiguration');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateDomain",
      "AssociateWebsiteAuthorizationProvider",
      "AssociateWebsiteCertificateAuthority",
      "CreateFleet",
      "DeleteFleet",
      "DisassociateDomain",
      "DisassociateWebsiteAuthorizationProvider",
      "DisassociateWebsiteCertificateAuthority",
      "RestoreDomainAccess",
      "RevokeDomainAccess",
      "SignOutUser",
      "UpdateAuditStreamConfiguration",
      "UpdateCompanyNetworkConfiguration",
      "UpdateDevicePolicyConfiguration",
      "UpdateDomainMetadata",
      "UpdateFleetMetadata",
      "UpdateIdentityProviderConfiguration"
    ],
    "Read": [
      "DescribeAuditStreamConfiguration",
      "DescribeCompanyNetworkConfiguration",
      "DescribeDevice",
      "DescribeDevicePolicyConfiguration",
      "DescribeDomain",
      "DescribeFleetMetadata",
      "DescribeIdentityProviderConfiguration",
      "DescribeWebsiteCertificateAuthority",
      "ListTagsForResource"
    ],
    "List": [
      "ListDevices",
      "ListDomains",
      "ListFleets",
      "ListWebsiteAuthorizationProviders",
      "ListWebsiteCertificateAuthorities"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type fleet to the statement
   *
   * https://docs.aws.amazon.com/worklink/latest/api/worklink-resources.html#Fleet
   *
   * @param fleetName - Identifier for the fleetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFleet(fleetName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:worklink::${Account}:fleet/${FleetName}';
    arn = arn.replace('${FleetName}', fleetName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
