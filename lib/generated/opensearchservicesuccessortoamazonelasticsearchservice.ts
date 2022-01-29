import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [es](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchservicesuccessortoamazonelasticsearchservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Es extends PolicyStatement {
  public servicePrefix = 'es';

  /**
   * Statement provider for service [es](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchservicesuccessortoamazonelasticsearchservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to the destination domain owner to accept an inbound cross-cluster search connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-accept-inbound-cross-cluster-search-connection
   */
  public toAcceptInboundConnection() {
    return this.to('AcceptInboundConnection');
  }

  /**
   * Grants permission to the destination domain owner to accept an inbound cross-cluster search connection request. This permission is deprecated. Use AcceptInboundConnection instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-accept-inbound-cross-cluster-search-connection
   */
  public toAcceptInboundCrossClusterSearchConnection() {
    return this.to('AcceptInboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to attach resource tags to an OpenSearch Service domain
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-addtags
   */
  public toAddTags() {
    return this.to('AddTags');
  }

  /**
   * Grants permission to associate a package with an OpenSearch Service domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-associatepackage
   */
  public toAssociatePackage() {
    return this.to('AssociatePackage');
  }

  /**
   * Grants permission to cancel a service software update of a domain. This permission is deprecated. Use CancelServiceSoftwareUpdate instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-stopupdate
   */
  public toCancelElasticsearchServiceSoftwareUpdate() {
    return this.to('CancelElasticsearchServiceSoftwareUpdate');
  }

  /**
   * Grants permission to cancel a service software update of a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-stopupdate
   */
  public toCancelServiceSoftwareUpdate() {
    return this.to('CancelServiceSoftwareUpdate');
  }

  /**
   * Grants permission to create an Amazon OpenSearch Service domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-createdomain
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to create an OpenSearch Service domain. This permission is deprecated. Use CreateDomain instead
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-createdomain
   */
  public toCreateElasticsearchDomain() {
    return this.to('CreateElasticsearchDomain');
  }

  /**
   * Grants permission to create the service-linked role required for OpenSearch Service domains that use VPC access. This permission is deprecated. OpenSearch Service creates the service-linked role for you
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-createservicerole
   */
  public toCreateElasticsearchServiceRole() {
    return this.to('CreateElasticsearchServiceRole');
  }

  /**
   * Grants permission to create a new cross-cluster search connection from a source domain to a destination domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-create-outbound-cross-cluster-search-connection
   */
  public toCreateOutboundConnection() {
    return this.to('CreateOutboundConnection');
  }

  /**
   * Grants permission to create a new cross-cluster search connection from a source domain to a destination domain. This permission is deprecated. Use CreateOutboundConnection instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-create-outbound-cross-cluster-search-connection
   */
  public toCreateOutboundCrossClusterSearchConnection() {
    return this.to('CreateOutboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to add a package for use with OpenSearch Service domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-createpackage
   */
  public toCreatePackage() {
    return this.to('CreatePackage');
  }

  /**
   * Grants permission to create the service-linked role required for Amazon OpenSearch Service domains that use VPC access
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-createservicerole
   */
  public toCreateServiceRole() {
    return this.to('CreateServiceRole');
  }

  /**
   * Grants permission to delete an Amazon OpenSearch Service domain and all of its data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-deletedomain
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to delete an OpenSearch Service domain and all of its data. This permission is deprecated. Use DeleteDomain instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-deletedomain
   */
  public toDeleteElasticsearchDomain() {
    return this.to('DeleteElasticsearchDomain');
  }

  /**
   * Grants permission to delete the service-linked role required for OpenSearch Service domains that use VPC access. This permission is deprecated. Use the IAM API to delete service-linked roles
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-deleteservicerole
   */
  public toDeleteElasticsearchServiceRole() {
    return this.to('DeleteElasticsearchServiceRole');
  }

  /**
   * Grants permission to the destination domain owner to delete an existing inbound cross-cluster search connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-delete-inbound-cross-cluster-search-connection
   */
  public toDeleteInboundConnection() {
    return this.to('DeleteInboundConnection');
  }

  /**
   * Grants permission to the destination domain owner to delete an existing inbound cross-cluster search connection. This permission is deprecated. Use DeleteInboundConnection instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-delete-inbound-cross-cluster-search-connection
   */
  public toDeleteInboundCrossClusterSearchConnection() {
    return this.to('DeleteInboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to the source domain owner to delete an existing outbound cross-cluster search connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-delete-outbound-cross-cluster-search-connection
   */
  public toDeleteOutboundConnection() {
    return this.to('DeleteOutboundConnection');
  }

  /**
   * Grants permission to the source domain owner to delete an existing outbound cross-cluster search connection. This permission is deprecated. Use DeleteOutboundConnection instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-delete-outbound-cross-cluster-search-connection
   */
  public toDeleteOutboundCrossClusterSearchConnection() {
    return this.to('DeleteOutboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to delete a package from OpenSearch Service. The package cannot be associated with any domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-deletepackage
   */
  public toDeletePackage() {
    return this.to('DeletePackage');
  }

  /**
   * Grants permission to view a description of the domain configuration for the specified OpenSearch Service domain, including the domain ID, service endpoint, and ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomain
   */
  public toDescribeDomain() {
    return this.to('DescribeDomain');
  }

  /**
   * Grants permission to view the Auto-Tune configuration of the domain for the specified OpenSearch Service domain, including the Auto-Tune state and maintenance schedules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describeautotune
   */
  public toDescribeDomainAutoTunes() {
    return this.to('DescribeDomainAutoTunes');
  }

  /**
   * Grants permission to view detail stage progress of an OpenSearch Service domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomainchangeprogress
   */
  public toDescribeDomainChangeProgress() {
    return this.to('DescribeDomainChangeProgress');
  }

  /**
   * Grants permission to view a description of the configuration options and status of an OpenSearch Service domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomainconfig
   */
  public toDescribeDomainConfig() {
    return this.to('DescribeDomainConfig');
  }

  /**
   * Grants permission to view a description of the domain configuration for up to five specified OpenSearch Service domains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomains
   */
  public toDescribeDomains() {
    return this.to('DescribeDomains');
  }

  /**
   * Grants permission to view a description of the domain configuration for the specified OpenSearch Service domain, including the domain ID, service endpoint, and ARN. This permission is deprecated. Use DescribeDomain instead
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomain
   */
  public toDescribeElasticsearchDomain() {
    return this.to('DescribeElasticsearchDomain');
  }

  /**
   * Grants permission to view a description of the configuration and status of an OpenSearch Service domain. This permission is deprecated. Use DescribeDomainConfig instead
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomainconfig
   */
  public toDescribeElasticsearchDomainConfig() {
    return this.to('DescribeElasticsearchDomainConfig');
  }

  /**
   * Grants permission to view a description of the domain configuration for up to five specified Amazon OpenSearch domains. This permission is deprecated. Use DescribeDomains instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describedomains
   */
  public toDescribeElasticsearchDomains() {
    return this.to('DescribeElasticsearchDomains');
  }

  /**
   * Grants permission to view the instance count, storage, and master node limits for a given OpenSearch version and instance type. This permission is deprecated. Use DescribeInstanceTypeLimits instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describeinstancetypelimits
   */
  public toDescribeElasticsearchInstanceTypeLimits() {
    return this.to('DescribeElasticsearchInstanceTypeLimits');
  }

  /**
   * Grants permission to list all the inbound cross-cluster search connections for a destination domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describe-inbound-cross-cluster-search-connections
   */
  public toDescribeInboundConnections() {
    return this.to('DescribeInboundConnections');
  }

  /**
   * Grants permission to list all the inbound cross-cluster search connections for a destination domain. This permission is deprecated. Use DescribeInboundConnections instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describe-inbound-cross-cluster-search-connections
   */
  public toDescribeInboundCrossClusterSearchConnections() {
    return this.to('DescribeInboundCrossClusterSearchConnections');
  }

  /**
   * Grants permission to view the instance count, storage, and master node limits for a given engine version and instance type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describeinstancetypelimits
   */
  public toDescribeInstanceTypeLimits() {
    return this.to('DescribeInstanceTypeLimits');
  }

  /**
   * Grants permission to list all the outbound cross-cluster search connections for a source domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describe-outbound-cross-cluster-search-connections
   */
  public toDescribeOutboundConnections() {
    return this.to('DescribeOutboundConnections');
  }

  /**
   * Grants permission to list all the outbound cross-cluster search connections for a source domain. This permission is deprecated. Use DescribeOutboundConnections instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describe-outbound-cross-cluster-search-connections
   */
  public toDescribeOutboundCrossClusterSearchConnections() {
    return this.to('DescribeOutboundCrossClusterSearchConnections');
  }

  /**
   * Grants permission to describe all packages available to OpenSearch Service domains
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describepackages
   */
  public toDescribePackages() {
    return this.to('DescribePackages');
  }

  /**
   * Grants permission to fetch Reserved Instance offerings for Amazon OpenSearch Service. This permission is deprecated. Use DescribeReservedInstanceOfferings instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describereservedinstanceofferings
   */
  public toDescribeReservedElasticsearchInstanceOfferings() {
    return this.to('DescribeReservedElasticsearchInstanceOfferings');
  }

  /**
   * Grants permission to fetch OpenSearch Service Reserved Instances that have already been purchased. This permission is deprecated. Use DescribeReservedInstances instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describereservedinstances
   */
  public toDescribeReservedElasticsearchInstances() {
    return this.to('DescribeReservedElasticsearchInstances');
  }

  /**
   * Grants permission to fetch Reserved Instance offerings for OpenSearch Service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describereservedinstanceofferings
   */
  public toDescribeReservedInstanceOfferings() {
    return this.to('DescribeReservedInstanceOfferings');
  }

  /**
   * Grants permission to fetch OpenSearch Service Reserved Instances that have already been purchased
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-describereservedinstances
   */
  public toDescribeReservedInstances() {
    return this.to('DescribeReservedInstances');
  }

  /**
   * Grants permission to disassociate a package from the specified OpenSearch Service domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-dissociatepackage
   */
  public toDissociatePackage() {
    return this.to('DissociatePackage');
  }

  /**
   * Grants permission to send cross-cluster requests to a destination domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   */
  public toESCrossClusterGet() {
    return this.to('ESCrossClusterGet');
  }

  /**
   * Grants permission to send HTTP DELETE requests to the OpenSearch APIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   */
  public toESHttpDelete() {
    return this.to('ESHttpDelete');
  }

  /**
   * Grants permission to send HTTP GET requests to the OpenSearch APIs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   */
  public toESHttpGet() {
    return this.to('ESHttpGet');
  }

  /**
   * Grants permission to send HTTP HEAD requests to the OpenSearch APIs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   */
  public toESHttpHead() {
    return this.to('ESHttpHead');
  }

  /**
   * Grants permission to send HTTP PATCH requests to the OpenSearch APIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   */
  public toESHttpPatch() {
    return this.to('ESHttpPatch');
  }

  /**
   * Grants permission to send HTTP POST requests to the OpenSearch APIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   */
  public toESHttpPost() {
    return this.to('ESHttpPost');
  }

  /**
   * Grants permission to send HTTP PUT requests to the OpenSearch APIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html#ac-reference
   */
  public toESHttpPut() {
    return this.to('ESHttpPut');
  }

  /**
   * Grants permission to fetch a list of compatible OpenSearch and Elasticsearch versions to which an OpenSearch Service domain can be upgraded. This permission is deprecated. Use GetCompatibleVersions instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-get-compat-vers
   */
  public toGetCompatibleElasticsearchVersions() {
    return this.to('GetCompatibleElasticsearchVersions');
  }

  /**
   * Grants permission to fetch list of compatible engine versions to which an OpenSearch Service domain can be upgraded
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-get-compat-vers
   */
  public toGetCompatibleVersions() {
    return this.to('GetCompatibleVersions');
  }

  /**
   * Grants permission to fetch the version history for a package
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-get-pac-ver-hist
   */
  public toGetPackageVersionHistory() {
    return this.to('GetPackageVersionHistory');
  }

  /**
   * Grants permission to fetch the upgrade history of a given OpenSearch Service domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-get-upgrade-hist
   */
  public toGetUpgradeHistory() {
    return this.to('GetUpgradeHistory');
  }

  /**
   * Grants permission to fetch the upgrade status of a given OpenSearch Service domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-get-upgrade-stat
   */
  public toGetUpgradeStatus() {
    return this.to('GetUpgradeStatus');
  }

  /**
   * Grants permission to display the names of all OpenSearch Service domains that the current user owns
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listdomainnames
   */
  public toListDomainNames() {
    return this.to('ListDomainNames');
  }

  /**
   * Grants permission to list all OpenSearch Service domains that a package is associated with
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listdomainsforpackage
   */
  public toListDomainsForPackage() {
    return this.to('ListDomainsForPackage');
  }

  /**
   * Grants permission to list all instance types and available features for a given OpenSearch version. This permission is deprecated. Use ListInstanceTypeDetails instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listinstancetypedetails
   */
  public toListElasticsearchInstanceTypeDetails() {
    return this.to('ListElasticsearchInstanceTypeDetails');
  }

  /**
   * Grants permission to list all EC2 instance types that are supported for a given OpenSearch version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html
   */
  public toListElasticsearchInstanceTypes() {
    return this.to('ListElasticsearchInstanceTypes');
  }

  /**
   * Grants permission to list all supported OpenSearch versions on Amazon OpenSearch Service. This permission is deprecated. Use ListVersions instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listversions
   */
  public toListElasticsearchVersions() {
    return this.to('ListElasticsearchVersions');
  }

  /**
   * Grants permission to list all instance types and available features for a given OpenSearch or Elasticsearch version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listinstancetypedetails
   */
  public toListInstanceTypeDetails() {
    return this.to('ListInstanceTypeDetails');
  }

  /**
   * Grants permission to list all packages associated with the OpenSearch Service domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listpackagesfordomain
   */
  public toListPackagesForDomain() {
    return this.to('ListPackagesForDomain');
  }

  /**
   * Grants permission to display all resource tags for an OpenSearch Service domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listtags
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Grants permission to list all supported OpenSearch and Elasticsearch versions in Amazon OpenSearch Service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-listversions
   */
  public toListVersions() {
    return this.to('ListVersions');
  }

  /**
   * Grants permission to purchase OpenSearch Service Reserved Instances. This permission is deprecated. Use PurchaseReservedInstanceOffering instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-purchasereservedinstance
   */
  public toPurchaseReservedElasticsearchInstanceOffering() {
    return this.to('PurchaseReservedElasticsearchInstanceOffering');
  }

  /**
   * Grants permission to purchase OpenSearch reserved instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-purchasereservedinstance
   */
  public toPurchaseReservedInstanceOffering() {
    return this.to('PurchaseReservedInstanceOffering');
  }

  /**
   * Grants permission to the destination domain owner to reject an inbound cross-cluster search connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-reject-inbound-cross-cluster-search-connection
   */
  public toRejectInboundConnection() {
    return this.to('RejectInboundConnection');
  }

  /**
   * Grants permission to the destination domain owner to reject an inbound cross-cluster search connection request. This permission is deprecated. Use RejectInboundConnection instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-reject-inbound-cross-cluster-search-connection
   */
  public toRejectInboundCrossClusterSearchConnection() {
    return this.to('RejectInboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to remove resource tags from an OpenSearch Service domain
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-removetags
   */
  public toRemoveTags() {
    return this.to('RemoveTags');
  }

  /**
   * Grants permission to start a service software update of a domain. This permission is deprecated. Use StartServiceSoftwareUpdate instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-startupdate
   */
  public toStartElasticsearchServiceSoftwareUpdate() {
    return this.to('StartElasticsearchServiceSoftwareUpdate');
  }

  /**
   * Grants permission to start a service software update of a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-startupdate
   */
  public toStartServiceSoftwareUpdate() {
    return this.to('StartServiceSoftwareUpdate');
  }

  /**
   * Grants permission to modify the configuration of an OpenSearch Service domain, such as the instance type or number of instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-updatedomainconfig
   */
  public toUpdateDomainConfig() {
    return this.to('UpdateDomainConfig');
  }

  /**
   * Grants permission to modify the configuration of an OpenSearch Service domain, such as the instance type or number of instances. This permission is deprecated. Use UpdateDomainConfig instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-updatedomainconfig
   */
  public toUpdateElasticsearchDomainConfig() {
    return this.to('UpdateElasticsearchDomainConfig');
  }

  /**
   * Grants permission to update a package for use with OpenSearch Service domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-updatepackage
   */
  public toUpdatePackage() {
    return this.to('UpdatePackage');
  }

  /**
   * Grants permission to initiate upgrade of an OpenSearch Service domain to a given version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-upgrade-domain
   */
  public toUpgradeDomain() {
    return this.to('UpgradeDomain');
  }

  /**
   * Grants permission to initiate upgrade of an OpenSearch Service domain to a specified version. This permission is deprecated. Use UpgradeDomain instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configuration-api.html#configuration-api-actions-upgrade-domain
   */
  public toUpgradeElasticsearchDomain() {
    return this.to('UpgradeElasticsearchDomain');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptInboundConnection',
      'AcceptInboundCrossClusterSearchConnection',
      'AssociatePackage',
      'CancelElasticsearchServiceSoftwareUpdate',
      'CancelServiceSoftwareUpdate',
      'CreateDomain',
      'CreateElasticsearchDomain',
      'CreateElasticsearchServiceRole',
      'CreateOutboundConnection',
      'CreateOutboundCrossClusterSearchConnection',
      'CreatePackage',
      'CreateServiceRole',
      'DeleteDomain',
      'DeleteElasticsearchDomain',
      'DeleteElasticsearchServiceRole',
      'DeleteInboundConnection',
      'DeleteInboundCrossClusterSearchConnection',
      'DeleteOutboundConnection',
      'DeleteOutboundCrossClusterSearchConnection',
      'DeletePackage',
      'DissociatePackage',
      'ESHttpDelete',
      'ESHttpPatch',
      'ESHttpPost',
      'ESHttpPut',
      'PurchaseReservedElasticsearchInstanceOffering',
      'PurchaseReservedInstanceOffering',
      'RejectInboundConnection',
      'RejectInboundCrossClusterSearchConnection',
      'StartElasticsearchServiceSoftwareUpdate',
      'StartServiceSoftwareUpdate',
      'UpdateDomainConfig',
      'UpdateElasticsearchDomainConfig',
      'UpdatePackage',
      'UpgradeDomain',
      'UpgradeElasticsearchDomain'
    ],
    Tagging: [
      'AddTags',
      'RemoveTags'
    ],
    Read: [
      'DescribeDomain',
      'DescribeDomainAutoTunes',
      'DescribeDomainChangeProgress',
      'DescribeDomainConfig',
      'DescribeElasticsearchDomain',
      'DescribeElasticsearchDomainConfig',
      'DescribePackages',
      'ESCrossClusterGet',
      'ESHttpGet',
      'ESHttpHead',
      'GetPackageVersionHistory',
      'GetUpgradeHistory',
      'GetUpgradeStatus',
      'ListTags'
    ],
    List: [
      'DescribeDomains',
      'DescribeElasticsearchDomains',
      'DescribeElasticsearchInstanceTypeLimits',
      'DescribeInboundConnections',
      'DescribeInboundCrossClusterSearchConnections',
      'DescribeInstanceTypeLimits',
      'DescribeOutboundConnections',
      'DescribeOutboundCrossClusterSearchConnections',
      'DescribeReservedElasticsearchInstanceOfferings',
      'DescribeReservedElasticsearchInstances',
      'DescribeReservedInstanceOfferings',
      'DescribeReservedInstances',
      'GetCompatibleElasticsearchVersions',
      'GetCompatibleVersions',
      'ListDomainNames',
      'ListDomainsForPackage',
      'ListElasticsearchInstanceTypeDetails',
      'ListElasticsearchInstanceTypes',
      'ListElasticsearchVersions',
      'ListInstanceTypeDetails',
      'ListPackagesForDomain',
      'ListVersions'
    ]
  };

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html
   *
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomain(domainName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:es:${ region || '*' }:${ account || '*' }:domain/${ domainName }`);
  }

  /**
   * Adds a resource of type es_role to the statement
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/slr.html
   *
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEsRole(account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iam::${ account || '*' }:role/aws-service-role/es.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`);
  }

  /**
   * Adds a resource of type opensearchservice_role to the statement
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/slr.html
   *
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOpensearchserviceRole(account?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iam::${ account || '*' }:role/aws-service-role/opensearchservice.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`);
  }
}
