import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to the destination domain owner to accept an inbound cross-cluster search connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-acceptinboundconnection
   */
  public toAcceptInboundConnection() {
    return this.to('AcceptInboundConnection');
  }

  /**
   * Grants permission to the destination domain owner to accept an inbound cross-cluster search connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-acceptinboundcrossclustersearchconnection
   */
  public toAcceptInboundCrossClusterSearchConnection() {
    return this.to('AcceptInboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to attach resource tags to an Amazon OpenSearch domain
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-addtags
   */
  public toAddTags() {
    return this.to('AddTags');
  }

  /**
   * Grants permission to associate a package with an Amazon ES domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-associatepackage
   */
  public toAssociatePackage() {
    return this.to('AssociatePackage');
  }

  /**
   * Grants permission to cancel elastic search software update of a domain to given version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-stopupdate
   */
  public toCancelElasticsearchServiceSoftwareUpdate() {
    return this.to('CancelElasticsearchServiceSoftwareUpdate');
  }

  /**
   * Grants permission to create a DataPrepper pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/trace-analytics.html
   */
  public toCreateDataPrepperPipeline() {
    return this.to('CreateDataPrepperPipeline');
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
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createdomain
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to create an Amazon OpenSearch domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createelasticsearchdomain
   */
  public toCreateElasticsearchDomain() {
    return this.to('CreateElasticsearchDomain');
  }

  /**
   * Grants permission to create the service-linked role required for Amazon OpenSearch domains that use VPC access
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createelasticsearchservicerole
   */
  public toCreateElasticsearchServiceRole() {
    return this.to('CreateElasticsearchServiceRole');
  }

  /**
   * Grants permission to create a new cross-cluster search connection from a source domain to a destination domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createoutboundconnection
   */
  public toCreateOutboundConnection() {
    return this.to('CreateOutboundConnection');
  }

  /**
   * Grants permission to create a new cross-cluster search connection from a source domain to a destination domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createoutboundcrossclustersearchconnection
   */
  public toCreateOutboundCrossClusterSearchConnection() {
    return this.to('CreateOutboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to add a package for use with Amazon ES domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createpackage
   */
  public toCreatePackage() {
    return this.to('CreatePackage');
  }

  /**
   * Grants permission to create the service-linked role required for Amazon OpenSearch domains that use VPC access
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createservicerole
   */
  public toCreateServiceRole() {
    return this.to('CreateServiceRole');
  }

  /**
   * Grants permission to delete a DataPrepperpipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/trace-analytics.html
   */
  public toDeleteDataPrepperPipeline() {
    return this.to('DeleteDataPrepperPipeline');
  }

  /**
   * Grants permission to delete an Amazon OpenSearch domain and all of its data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deletedomain
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to delete an Amazon OpenSearch domain and all of its data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteelasticsearchdomain
   */
  public toDeleteElasticsearchDomain() {
    return this.to('DeleteElasticsearchDomain');
  }

  /**
   * Grants permission to delete the service-linked role required for Amazon OpenSearch domains that use VPC access
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteelasticsearchservicerole
   */
  public toDeleteElasticsearchServiceRole() {
    return this.to('DeleteElasticsearchServiceRole');
  }

  /**
   * Grants permission to the destination domain owner to delete an existing inbound cross-cluster search connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteinboundconnection
   */
  public toDeleteInboundConnection() {
    return this.to('DeleteInboundConnection');
  }

  /**
   * Grants permission to the destination domain owner to delete an existing inbound cross-cluster search connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteinboundcrossclustersearchconnection
   */
  public toDeleteInboundCrossClusterSearchConnection() {
    return this.to('DeleteInboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to the source domain owner to delete an existing outbound cross-cluster search connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteoutboundconnection
   */
  public toDeleteOutboundConnection() {
    return this.to('DeleteOutboundConnection');
  }

  /**
   * Grants permission to the source domain owner to delete an existing outbound cross-cluster search connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteoutboundcrossclustersearchconnection
   */
  public toDeleteOutboundCrossClusterSearchConnection() {
    return this.to('DeleteOutboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to delete a package from Amazon ES. The package must not be associated with any Amazon ES domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deletepackage
   */
  public toDeletePackage() {
    return this.to('DeletePackage');
  }

  /**
   * Grants permission to view a description of the pipeline configuration for the specified DataPrepper pipeline
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/trace-analytics.html
   */
  public toDescribeDataPrepperPipeline() {
    return this.to('DescribeDataPrepperPipeline');
  }

  /**
   * Grants permission to view a description of the domain configuration for the specified Amazon OpenSearch domain, including the domain ID, domain service endpoint, and domain ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describedomain
   */
  public toDescribeDomain() {
    return this.to('DescribeDomain');
  }

  /**
   * Grants permission to view a description of the configuration options and status of an Amazon OpenSearch domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describedomainconfig
   */
  public toDescribeDomainConfig() {
    return this.to('DescribeDomainConfig');
  }

  /**
   * Grants permission to view a description of the domain configuration for up to five specified Amazon OpenSearch domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describedomain
   */
  public toDescribeDomains() {
    return this.to('DescribeDomains');
  }

  /**
   * Grants permission to view a description of the domain configuration for the specified Amazon OpenSearch domain, including the domain ID, domain service endpoint, and domain ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomain
   */
  public toDescribeElasticsearchDomain() {
    return this.to('DescribeElasticsearchDomain');
  }

  /**
   * Grants permission to view a description of the configuration options and status of an Amazon OpenSearch domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomainconfig
   */
  public toDescribeElasticsearchDomainConfig() {
    return this.to('DescribeElasticsearchDomainConfig');
  }

  /**
   * Grants permission to view a description of the domain configuration for up to five specified Amazon OpenSearch domains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomain
   */
  public toDescribeElasticsearchDomains() {
    return this.to('DescribeElasticsearchDomains');
  }

  /**
   * Grants permission to view the instance count, storage, and master node limits for a given OpenSearch version and instance type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeinstancetypelimits
   */
  public toDescribeElasticsearchInstanceTypeLimits() {
    return this.to('DescribeElasticsearchInstanceTypeLimits');
  }

  /**
   * Grants permission to list all the inbound cross-cluster search connections for a destination domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeinboundconnections
   */
  public toDescribeInboundConnections() {
    return this.to('DescribeInboundConnections');
  }

  /**
   * Grants permission to list all the inbound cross-cluster search connections for a destination domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeinboundcrossclustersearchconnections
   */
  public toDescribeInboundCrossClusterSearchConnections() {
    return this.to('DescribeInboundCrossClusterSearchConnections');
  }

  /**
   * Grants permission to view the instance count, storage, and master node limits for a given OpenSearch version and instance type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeinstancetypelimits
   */
  public toDescribeInstanceTypeLimits() {
    return this.to('DescribeInstanceTypeLimits');
  }

  /**
   * Grants permission to list all the outbound cross-cluster search connections for a source domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeoutboundconnections
   */
  public toDescribeOutboundConnections() {
    return this.to('DescribeOutboundConnections');
  }

  /**
   * Grants permission to list all the outbound cross-cluster search connections for a source domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeoutboundcrossclustersearchconnections
   */
  public toDescribeOutboundCrossClusterSearchConnections() {
    return this.to('DescribeOutboundCrossClusterSearchConnections');
  }

  /**
   * Grants permission to describe all packages available to Amazon ES domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describepackages
   */
  public toDescribePackages() {
    return this.to('DescribePackages');
  }

  /**
   * Grants permission to fetch reserved instance offerings for OpenSearch
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describereservedelasticsearchinstanceofferings
   */
  public toDescribeReservedElasticsearchInstanceOfferings() {
    return this.to('DescribeReservedElasticsearchInstanceOfferings');
  }

  /**
   * Grants permission to fetch OpenSearch reserved instances already purchased by customer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describereservedelasticsearchinstances
   */
  public toDescribeReservedElasticsearchInstances() {
    return this.to('DescribeReservedElasticsearchInstances');
  }

  /**
   * Grants permission to fetch reserved instance offerings for OpenSearch
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describereservedelasticsearchinstanceofferings
   */
  public toDescribeReservedInstanceOfferings() {
    return this.to('DescribeReservedInstanceOfferings');
  }

  /**
   * Grants permission to fetch OpenSearch reserved instances already purchased by customer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describereservedelasticsearchinstances
   */
  public toDescribeReservedInstances() {
    return this.to('DescribeReservedInstances');
  }

  /**
   * Grants permission to remove a package from the specified Amazon ES domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-dissociatepackage
   */
  public toDissociatePackage() {
    return this.to('DissociatePackage');
  }

  /**
   * Grants permission to send cross-cluster requests to a destination domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESCrossClusterGet() {
    return this.to('ESCrossClusterGet');
  }

  /**
   * Grants permission to send HTTP DELETE requests to the OpenSearch APIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESHttpDelete() {
    return this.to('ESHttpDelete');
  }

  /**
   * Grants permission to send HTTP GET requests to the OpenSearch APIs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESHttpGet() {
    return this.to('ESHttpGet');
  }

  /**
   * Grants permission to send HTTP HEAD requests to the OpenSearch APIs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESHttpHead() {
    return this.to('ESHttpHead');
  }

  /**
   * Grants permission to send HTTP PATCH requests to the OpenSearch APIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESHttpPatch() {
    return this.to('ESHttpPatch');
  }

  /**
   * Grants permission to send HTTP POST requests to the OpenSearch APIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESHttpPost() {
    return this.to('ESHttpPost');
  }

  /**
   * Grants permission to send HTTP PUT requests to the OpenSearch APIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESHttpPut() {
    return this.to('ESHttpPut');
  }

  /**
   * Grants permission to fetch list of compatible elastic search versions to which Amazon OpenSearch domain can be upgraded
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-getcompatibleelasticsearchversions
   */
  public toGetCompatibleElasticsearchVersions() {
    return this.to('GetCompatibleElasticsearchVersions');
  }

  /**
   * Grants permission to fetch list of compatible OpenSearch versions to which Amazon OpenSearch domain can be upgraded
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-getcompatibleversions
   */
  public toGetCompatibleVersions() {
    return this.to('GetCompatibleVersions');
  }

  /**
   * Grants permission to fetch the version history for a package
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-get-pac-ver-hist
   */
  public toGetPackageVersionHistory() {
    return this.to('GetPackageVersionHistory');
  }

  /**
   * Grants permission to fetch upgrade history for given OpenSearch domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-getupgradehistory
   */
  public toGetUpgradeHistory() {
    return this.to('GetUpgradeHistory');
  }

  /**
   * Grants permission to fetch upgrade status for given OpenSearch domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-getupgradestatus
   */
  public toGetUpgradeStatus() {
    return this.to('GetUpgradeStatus');
  }

  /**
   * Grants permission to ingest data into a DataPrepper pipeline
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/trace-analytics.html
   */
  public toIngestDataPrepperPipeline() {
    return this.to('IngestDataPrepperPipeline');
  }

  /**
   * Grants permission to display the names of all DataPrepper pipelines that the current user owns
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/trace-analytics.html
   */
  public toListDataPrepperPipelines() {
    return this.to('ListDataPrepperPipelines');
  }

  /**
   * Grants permission to display the names of all Amazon OpenSearch domains that the current user owns
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listdomainnames
   */
  public toListDomainNames() {
    return this.to('ListDomainNames');
  }

  /**
   * Grants permission to list all Amazon ES domains that a package is associated with
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listdomainsforpackage
   */
  public toListDomainsForPackage() {
    return this.to('ListDomainsForPackage');
  }

  /**
   * Grants permission to list all instance types and available features for a given OpenSearch version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listelasticsearchinstancetypedetails
   */
  public toListElasticsearchInstanceTypeDetails() {
    return this.to('ListElasticsearchInstanceTypeDetails');
  }

  /**
   * Grants permission to list all OpenSearch instance types that are supported for a given OpenSearch version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listelasticsearchinstancetypes
   */
  public toListElasticsearchInstanceTypes() {
    return this.to('ListElasticsearchInstanceTypes');
  }

  /**
   * Grants permission to list all supported OpenSearch versions on Amazon OpenSearch
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listelasticsearchversions
   */
  public toListElasticsearchVersions() {
    return this.to('ListElasticsearchVersions');
  }

  /**
   * Grants permission to list all instance types and available features for a given OpenSearch version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listinstancetypedetails
   */
  public toListInstanceTypeDetails() {
    return this.to('ListInstanceTypeDetails');
  }

  /**
   * Grants permission to list all OpenSearch instance types that are supported for a given OpenSearch version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listinstancetypes
   */
  public toListInstanceTypes() {
    return this.to('ListInstanceTypes');
  }

  /**
   * Grants permission to list all packages associated with the Amazon ES domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listpackagesfordomain
   */
  public toListPackagesForDomain() {
    return this.to('ListPackagesForDomain');
  }

  /**
   * Grants permission to display all of the tags for an Amazon OpenSearch domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listtags
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Grants permission to list all supported OpenSearch versions on Amazon OpenSearch
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listversions
   */
  public toListVersions() {
    return this.to('ListVersions');
  }

  /**
   * Grants permission to purchase OpenSearch reserved instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-purchasereservedelasticsearchinstance
   */
  public toPurchaseReservedElasticsearchInstanceOffering() {
    return this.to('PurchaseReservedElasticsearchInstanceOffering');
  }

  /**
   * Grants permission to purchase OpenSearch reserved instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-purchasereservedelasticsearchinstance
   */
  public toPurchaseReservedInstanceOffering() {
    return this.to('PurchaseReservedInstanceOffering');
  }

  /**
   * Grants permission to the destination domain owner to reject an inbound cross-cluster search connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-rejectinboundconnection
   */
  public toRejectInboundConnection() {
    return this.to('RejectInboundConnection');
  }

  /**
   * Grants permission to the destination domain owner to reject an inbound cross-cluster search connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-rejectinboundcrossclustersearchconnection
   */
  public toRejectInboundCrossClusterSearchConnection() {
    return this.to('RejectInboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to remove tags from Amazon OpenSearch domains
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listtags
   */
  public toRemoveTags() {
    return this.to('RemoveTags');
  }

  /**
   * Grants permission to start elastic search software update of a domain to given version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-startupdate
   */
  public toStartElasticsearchServiceSoftwareUpdate() {
    return this.to('StartElasticsearchServiceSoftwareUpdate');
  }

  /**
   * Grants permission to modify the configuration of a DataPrepper pipeline (currently limited to updating desired capacity)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/trace-analytics.html
   */
  public toUpdateDataPrepperPipeline() {
    return this.to('UpdateDataPrepperPipeline');
  }

  /**
   * Grants permission to modify the configuration of an Amazon OpenSearch domain, such as the instance type or number of instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-updatedomainconfig
   */
  public toUpdateDomainConfig() {
    return this.to('UpdateDomainConfig');
  }

  /**
   * Grants permission to modify the configuration of an Amazon OpenSearch domain, such as the instance type or number of instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-updateelasticsearchdomainconfig
   */
  public toUpdateElasticsearchDomainConfig() {
    return this.to('UpdateElasticsearchDomainConfig');
  }

  /**
   * Grants permission to update a package for use with Amazon ES domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-updatepackage
   */
  public toUpdatePackage() {
    return this.to('UpdatePackage');
  }

  /**
   * Grants permission to initiate upgrade of elastic search domain to given version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-upgradeelasticsearchdomain
   */
  public toUpgradeElasticsearchDomain() {
    return this.to('UpgradeElasticsearchDomain');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptInboundConnection",
      "AcceptInboundCrossClusterSearchConnection",
      "AssociatePackage",
      "CancelElasticsearchServiceSoftwareUpdate",
      "CreateDataPrepperPipeline",
      "CreateDomain",
      "CreateElasticsearchDomain",
      "CreateElasticsearchServiceRole",
      "CreateOutboundConnection",
      "CreateOutboundCrossClusterSearchConnection",
      "CreatePackage",
      "CreateServiceRole",
      "DeleteDataPrepperPipeline",
      "DeleteDomain",
      "DeleteElasticsearchDomain",
      "DeleteElasticsearchServiceRole",
      "DeleteInboundConnection",
      "DeleteInboundCrossClusterSearchConnection",
      "DeleteOutboundConnection",
      "DeleteOutboundCrossClusterSearchConnection",
      "DeletePackage",
      "DissociatePackage",
      "ESHttpDelete",
      "ESHttpPatch",
      "ESHttpPost",
      "ESHttpPut",
      "IngestDataPrepperPipeline",
      "PurchaseReservedElasticsearchInstanceOffering",
      "PurchaseReservedInstanceOffering",
      "RejectInboundConnection",
      "RejectInboundCrossClusterSearchConnection",
      "StartElasticsearchServiceSoftwareUpdate",
      "UpdateDataPrepperPipeline",
      "UpdateDomainConfig",
      "UpdateElasticsearchDomainConfig",
      "UpdatePackage",
      "UpgradeElasticsearchDomain"
    ],
    "Tagging": [
      "AddTags",
      "RemoveTags"
    ],
    "Read": [
      "DescribeDataPrepperPipeline",
      "DescribeDomain",
      "DescribeDomainConfig",
      "DescribeElasticsearchDomain",
      "DescribeElasticsearchDomainConfig",
      "DescribePackages",
      "ESCrossClusterGet",
      "ESHttpGet",
      "ESHttpHead",
      "GetPackageVersionHistory",
      "GetUpgradeHistory",
      "GetUpgradeStatus",
      "ListTags"
    ],
    "List": [
      "DescribeDomains",
      "DescribeElasticsearchDomains",
      "DescribeElasticsearchInstanceTypeLimits",
      "DescribeInboundConnections",
      "DescribeInboundCrossClusterSearchConnections",
      "DescribeInstanceTypeLimits",
      "DescribeOutboundConnections",
      "DescribeOutboundCrossClusterSearchConnections",
      "DescribeReservedElasticsearchInstanceOfferings",
      "DescribeReservedElasticsearchInstances",
      "DescribeReservedInstanceOfferings",
      "DescribeReservedInstances",
      "GetCompatibleElasticsearchVersions",
      "GetCompatibleVersions",
      "ListDataPrepperPipelines",
      "ListDomainNames",
      "ListDomainsForPackage",
      "ListElasticsearchInstanceTypeDetails",
      "ListElasticsearchInstanceTypes",
      "ListElasticsearchVersions",
      "ListInstanceTypeDetails",
      "ListInstanceTypes",
      "ListPackagesForDomain",
      "ListVersions"
    ]
  };

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html
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
    var arn = 'arn:${Partition}:es:${Region}:${Account}:domain/${DomainName}';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type pipeline to the statement
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/trace-analytics.html
   *
   * @param pipelineName - Identifier for the pipelineName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPipeline(pipelineName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:es:${Region}:${Account}:pipeline/${PipelineName}';
    arn = arn.replace('${PipelineName}', pipelineName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type es_role to the statement
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/slr-es.html
   *
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEsRole(account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:role/aws-service-role/es.amazonaws.com/AWSServiceRoleForAmazonElasticsearchService';
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type opensearchservice_role to the statement
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/slr-es.html
   *
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOpensearchserviceRole(account?: string, partition?: string) {
    var arn = 'arn:${Partition}:iam::${Account}:role/aws-service-role/opensearchservice.amazonaws.com/AWSServiceRoleForAmazonOpenSearchInternalService';
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
