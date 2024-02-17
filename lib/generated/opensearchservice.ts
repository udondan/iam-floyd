import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [es](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Es extends PolicyStatement {
  public servicePrefix = 'es';

  /**
   * Statement provider for service [es](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearchservice.html).
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
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_AcceptInboundConnection.html
   */
  public toAcceptInboundConnection() {
    return this.to('AcceptInboundConnection');
  }

  /**
   * Grants permission to the destination domain owner to accept an inbound cross-cluster search connection request. This permission is deprecated. Use AcceptInboundConnection instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_AcceptInboundConnection.html
   */
  public toAcceptInboundCrossClusterSearchConnection() {
    return this.to('AcceptInboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to add the data source for the OpenSearch Service domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_AddDataSource.html
   */
  public toAddDataSource() {
    return this.to('AddDataSource');
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
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_AddTags.html
   */
  public toAddTags() {
    return this.to('AddTags');
  }

  /**
   * Grants permission to associate a package with an OpenSearch Service domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_AssociatePackage.html
   */
  public toAssociatePackage() {
    return this.to('AssociatePackage');
  }

  /**
   * Grants permission to provide access to an Amazon OpenSearch Service domain through the use of an interface VPC endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_AuthorizeVpcEndpointAccess.html
   */
  public toAuthorizeVpcEndpointAccess() {
    return this.to('AuthorizeVpcEndpointAccess');
  }

  /**
   * Grants permission to cancel a change on an OpenSearch Service domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CancelDomainConfigChange.html
   */
  public toCancelDomainConfigChange() {
    return this.to('CancelDomainConfigChange');
  }

  /**
   * Grants permission to cancel a service software update of a domain. This permission is deprecated. Use CancelServiceSoftwareUpdate instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CancelServiceSoftwareUpdate.html
   */
  public toCancelElasticsearchServiceSoftwareUpdate() {
    return this.to('CancelElasticsearchServiceSoftwareUpdate');
  }

  /**
   * Grants permission to cancel a service software update of a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CancelServiceSoftwareUpdate.html
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
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreateDomain.html
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
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreateDomain.html
   */
  public toCreateElasticsearchDomain() {
    return this.to('CreateElasticsearchDomain');
  }

  /**
   * Grants permission to create the service-linked role required for OpenSearch Service domains that use VPC access. This permission is deprecated. OpenSearch Service creates the service-linked role for you
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html
   */
  public toCreateElasticsearchServiceRole() {
    return this.to('CreateElasticsearchServiceRole');
  }

  /**
   * Grants permission to create a new cross-cluster search connection from a source domain to a destination domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreateOutboundConnection.html
   */
  public toCreateOutboundConnection() {
    return this.to('CreateOutboundConnection');
  }

  /**
   * Grants permission to create a new cross-cluster search connection from a source domain to a destination domain. This permission is deprecated. Use CreateOutboundConnection instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreateOutboundConnection.html
   */
  public toCreateOutboundCrossClusterSearchConnection() {
    return this.to('CreateOutboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to add a package for use with OpenSearch Service domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreatePackage.html
   */
  public toCreatePackage() {
    return this.to('CreatePackage');
  }

  /**
   * Grants permission to create the service-linked role required for Amazon OpenSearch Service domains that use VPC access
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html
   */
  public toCreateServiceRole() {
    return this.to('CreateServiceRole');
  }

  /**
   * Grants permission to create an Amazon OpenSearch Service-managed VPC endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CreateVpcEndpoint.html
   */
  public toCreateVpcEndpoint() {
    return this.to('CreateVpcEndpoint');
  }

  /**
   * Grants permission to delete the data source for the OpenSearch Service domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteDataSource.html
   */
  public toDeleteDataSource() {
    return this.to('DeleteDataSource');
  }

  /**
   * Grants permission to delete an Amazon OpenSearch Service domain and all of its data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to delete an OpenSearch Service domain and all of its data. This permission is deprecated. Use DeleteDomain instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteDomain.html
   */
  public toDeleteElasticsearchDomain() {
    return this.to('DeleteElasticsearchDomain');
  }

  /**
   * Grants permission to delete the service-linked role required for OpenSearch Service domains that use VPC access. This permission is deprecated. Use the IAM API to delete service-linked roles
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_Welcome.html
   */
  public toDeleteElasticsearchServiceRole() {
    return this.to('DeleteElasticsearchServiceRole');
  }

  /**
   * Grants permission to the destination domain owner to delete an existing inbound cross-cluster search connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteInboundConnection.html
   */
  public toDeleteInboundConnection() {
    return this.to('DeleteInboundConnection');
  }

  /**
   * Grants permission to the destination domain owner to delete an existing inbound cross-cluster search connection. This permission is deprecated. Use DeleteInboundConnection instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteInboundConnection.html
   */
  public toDeleteInboundCrossClusterSearchConnection() {
    return this.to('DeleteInboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to the source domain owner to delete an existing outbound cross-cluster search connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteOutboundConnection.html
   */
  public toDeleteOutboundConnection() {
    return this.to('DeleteOutboundConnection');
  }

  /**
   * Grants permission to the source domain owner to delete an existing outbound cross-cluster search connection. This permission is deprecated. Use DeleteOutboundConnection instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteOutboundConnection.html
   */
  public toDeleteOutboundCrossClusterSearchConnection() {
    return this.to('DeleteOutboundCrossClusterSearchConnection');
  }

  /**
   * Grants permission to delete a package from OpenSearch Service. The package cannot be associated with any domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeletePackage.html
   */
  public toDeletePackage() {
    return this.to('DeletePackage');
  }

  /**
   * Grants permission to delete an Amazon OpenSearch Service-managed interface VPC endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DeleteVpcEndpoint.html
   */
  public toDeleteVpcEndpoint() {
    return this.to('DeleteVpcEndpoint');
  }

  /**
   * Grants permission to view a description of the domain configuration for the specified OpenSearch Service domain, including the domain ID, service endpoint, and ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomain.html
   */
  public toDescribeDomain() {
    return this.to('DescribeDomain');
  }

  /**
   * Grants permission to view the Auto-Tune configuration of the domain for the specified OpenSearch Service domain, including the Auto-Tune state and maintenance schedules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomainAutoTunes.html
   */
  public toDescribeDomainAutoTunes() {
    return this.to('DescribeDomainAutoTunes');
  }

  /**
   * Grants permission to view detail stage progress of an OpenSearch Service domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomainChangeProgress.html
   */
  public toDescribeDomainChangeProgress() {
    return this.to('DescribeDomainChangeProgress');
  }

  /**
   * Grants permission to view a description of the configuration options and status of an OpenSearch Service domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomainConfig.html
   */
  public toDescribeDomainConfig() {
    return this.to('DescribeDomainConfig');
  }

  /**
   * Grants permission to view information about domain and node health, the standby Availability Zone, number of nodes per Availability Zone, and shard count per node
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomainHealth.html
   */
  public toDescribeDomainHealth() {
    return this.to('DescribeDomainHealth');
  }

  /**
   * Grants permission to view information about nodes configured for the domain and their configurations- the node id, type of node, status of node, Availability Zone, instance type and storage
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomainNodes.html
   */
  public toDescribeDomainNodes() {
    return this.to('DescribeDomainNodes');
  }

  /**
   * Grants permission to view a description of the domain configuration for up to five specified OpenSearch Service domains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomains.html
   */
  public toDescribeDomains() {
    return this.to('DescribeDomains');
  }

  /**
   * Grants permission to describe the status of a pre-update validation check on an OpenSearch Service domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDryRunProgress.html
   */
  public toDescribeDryRunProgress() {
    return this.to('DescribeDryRunProgress');
  }

  /**
   * Grants permission to view a description of the domain configuration for the specified OpenSearch Service domain, including the domain ID, service endpoint, and ARN. This permission is deprecated. Use DescribeDomain instead
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomain.html
   */
  public toDescribeElasticsearchDomain() {
    return this.to('DescribeElasticsearchDomain');
  }

  /**
   * Grants permission to view a description of the configuration and status of an OpenSearch Service domain. This permission is deprecated. Use DescribeDomainConfig instead
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomainConfig.html
   */
  public toDescribeElasticsearchDomainConfig() {
    return this.to('DescribeElasticsearchDomainConfig');
  }

  /**
   * Grants permission to view a description of the domain configuration for up to five specified Amazon OpenSearch domains. This permission is deprecated. Use DescribeDomains instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeDomains.html
   */
  public toDescribeElasticsearchDomains() {
    return this.to('DescribeElasticsearchDomains');
  }

  /**
   * Grants permission to view the instance count, storage, and master node limits for a given OpenSearch version and instance type. This permission is deprecated. Use DescribeInstanceTypeLimits instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeInstanceTypeLimits.html
   */
  public toDescribeElasticsearchInstanceTypeLimits() {
    return this.to('DescribeElasticsearchInstanceTypeLimits');
  }

  /**
   * Grants permission to list all the inbound cross-cluster search connections for a destination domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeInboundConnections.html
   */
  public toDescribeInboundConnections() {
    return this.to('DescribeInboundConnections');
  }

  /**
   * Grants permission to list all the inbound cross-cluster search connections for a destination domain. This permission is deprecated. Use DescribeInboundConnections instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeInboundConnections.html
   */
  public toDescribeInboundCrossClusterSearchConnections() {
    return this.to('DescribeInboundCrossClusterSearchConnections');
  }

  /**
   * Grants permission to view the instance count, storage, and master node limits for a given engine version and instance type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeInstanceTypeLimits.html
   */
  public toDescribeInstanceTypeLimits() {
    return this.to('DescribeInstanceTypeLimits');
  }

  /**
   * Grants permission to list all the outbound cross-cluster search connections for a source domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeOutboundConnections.html
   */
  public toDescribeOutboundConnections() {
    return this.to('DescribeOutboundConnections');
  }

  /**
   * Grants permission to list all the outbound cross-cluster search connections for a source domain. This permission is deprecated. Use DescribeOutboundConnections instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeOutboundConnections.html
   */
  public toDescribeOutboundCrossClusterSearchConnections() {
    return this.to('DescribeOutboundCrossClusterSearchConnections');
  }

  /**
   * Grants permission to describe all packages available to OpenSearch Service domains
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribePackages.html
   */
  public toDescribePackages() {
    return this.to('DescribePackages');
  }

  /**
   * Grants permission to fetch Reserved Instance offerings for Amazon OpenSearch Service. This permission is deprecated. Use DescribeReservedInstanceOfferings instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeReservedInstanceOfferings.html
   */
  public toDescribeReservedElasticsearchInstanceOfferings() {
    return this.to('DescribeReservedElasticsearchInstanceOfferings');
  }

  /**
   * Grants permission to fetch OpenSearch Service Reserved Instances that have already been purchased. This permission is deprecated. Use DescribeReservedInstances instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeReservedInstances.html
   */
  public toDescribeReservedElasticsearchInstances() {
    return this.to('DescribeReservedElasticsearchInstances');
  }

  /**
   * Grants permission to fetch Reserved Instance offerings for OpenSearch Service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeReservedInstanceOfferings.html
   */
  public toDescribeReservedInstanceOfferings() {
    return this.to('DescribeReservedInstanceOfferings');
  }

  /**
   * Grants permission to fetch OpenSearch Service Reserved Instances that have already been purchased
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeReservedInstances.html
   */
  public toDescribeReservedInstances() {
    return this.to('DescribeReservedInstances');
  }

  /**
   * Grants permission to describe one or more Amazon OpenSearch Service-managed VPC endpoints
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DescribeVpcEndpoints.html
   */
  public toDescribeVpcEndpoints() {
    return this.to('DescribeVpcEndpoints');
  }

  /**
   * Grants permission to disassociate a package from the specified OpenSearch Service domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_DissociatePackage.html
   */
  public toDissociatePackage() {
    return this.to('DissociatePackage');
  }

  /**
   * Grants permission to send cross-cluster requests to a destination domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html
   */
  public toESCrossClusterGet() {
    return this.to('ESCrossClusterGet');
  }

  /**
   * Grants permission to send HTTP DELETE requests to the OpenSearch APIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html
   */
  public toESHttpDelete() {
    return this.to('ESHttpDelete');
  }

  /**
   * Grants permission to send HTTP GET requests to the OpenSearch APIs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html
   */
  public toESHttpGet() {
    return this.to('ESHttpGet');
  }

  /**
   * Grants permission to send HTTP HEAD requests to the OpenSearch APIs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html
   */
  public toESHttpHead() {
    return this.to('ESHttpHead');
  }

  /**
   * Grants permission to send HTTP PATCH requests to the OpenSearch APIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html
   */
  public toESHttpPatch() {
    return this.to('ESHttpPatch');
  }

  /**
   * Grants permission to send HTTP POST requests to the OpenSearch APIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html
   */
  public toESHttpPost() {
    return this.to('ESHttpPost');
  }

  /**
   * Grants permission to send HTTP PUT requests to the OpenSearch APIs
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/Welcome.html
   */
  public toESHttpPut() {
    return this.to('ESHttpPut');
  }

  /**
   * Grants permission to fetch a list of compatible OpenSearch and Elasticsearch versions to which an OpenSearch Service domain can be upgraded. This permission is deprecated. Use GetCompatibleVersions instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetCompatibleVersions.html
   */
  public toGetCompatibleElasticsearchVersions() {
    return this.to('GetCompatibleElasticsearchVersions');
  }

  /**
   * Grants permission to fetch list of compatible engine versions to which an OpenSearch Service domain can be upgraded
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetCompatibleVersions.html
   */
  public toGetCompatibleVersions() {
    return this.to('GetCompatibleVersions');
  }

  /**
   * Grants permission to get the data source for the OpenSearch Service domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetDataSource.html
   */
  public toGetDataSource() {
    return this.to('GetDataSource');
  }

  /**
   * Grants permission to retrieve the status of maintenance action for the node
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetDomainMaintenanceStatus.html
   */
  public toGetDomainMaintenanceStatus() {
    return this.to('GetDomainMaintenanceStatus');
  }

  /**
   * Grants permission to fetch the version history for a package
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetPackageVersionHistory.html
   */
  public toGetPackageVersionHistory() {
    return this.to('GetPackageVersionHistory');
  }

  /**
   * Grants permission to fetch the upgrade history of a given OpenSearch Service domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetUpgradeHistory.html
   */
  public toGetUpgradeHistory() {
    return this.to('GetUpgradeHistory');
  }

  /**
   * Grants permission to fetch the upgrade status of a given OpenSearch Service domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetUpgradeStatus.html
   */
  public toGetUpgradeStatus() {
    return this.to('GetUpgradeStatus');
  }

  /**
   * Grants permission to retrieve a list of data source for the OpenSearch Service domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListDataSources.html
   */
  public toListDataSources() {
    return this.to('ListDataSources');
  }

  /**
   * Grants permission to retrieve a list of maintenance actions for the OpenSearch Service domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListDomainMaintenances.html
   */
  public toListDomainMaintenances() {
    return this.to('ListDomainMaintenances');
  }

  /**
   * Grants permission to display the names of all OpenSearch Service domains that the current user owns
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListDomainNames.html
   */
  public toListDomainNames() {
    return this.to('ListDomainNames');
  }

  /**
   * Grants permission to list all OpenSearch Service domains that a package is associated with
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListDomainsForPackage.html
   */
  public toListDomainsForPackage() {
    return this.to('ListDomainsForPackage');
  }

  /**
   * Grants permission to list all instance types and available features for a given OpenSearch version. This permission is deprecated. Use ListInstanceTypeDetails instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListInstanceTypeDetails.html
   */
  public toListElasticsearchInstanceTypeDetails() {
    return this.to('ListElasticsearchInstanceTypeDetails');
  }

  /**
   * Grants permission to list all EC2 instance types that are supported for a given OpenSearch version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListInstanceTypeDetails.html
   */
  public toListElasticsearchInstanceTypes() {
    return this.to('ListElasticsearchInstanceTypes');
  }

  /**
   * Grants permission to list all supported OpenSearch versions on Amazon OpenSearch Service. This permission is deprecated. Use ListVersions instead
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListVersions.html
   */
  public toListElasticsearchVersions() {
    return this.to('ListElasticsearchVersions');
  }

  /**
   * Grants permission to list all instance types and available features for a given OpenSearch or Elasticsearch version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListInstanceTypeDetails.html
   */
  public toListInstanceTypeDetails() {
    return this.to('ListInstanceTypeDetails');
  }

  /**
   * Grants permission to list all packages associated with the OpenSearch Service domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListPackagesForDomain.html
   */
  public toListPackagesForDomain() {
    return this.to('ListPackagesForDomain');
  }

  /**
   * Grants permission to retrieve a list of configuration changes that are scheduled for a OpenSearch Service domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListScheduledActions.html
   */
  public toListScheduledActions() {
    return this.to('ListScheduledActions');
  }

  /**
   * Grants permission to display all resource tags for an OpenSearch Service domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Grants permission to list all supported OpenSearch and Elasticsearch versions in Amazon OpenSearch Service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListVersions.html
   */
  public toListVersions() {
    return this.to('ListVersions');
  }

  /**
   * Grants permission to retrieve information about each AWS principal that is allowed to access a given Amazon OpenSearch Service domain through the use of an interface VPC endpoint
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListVpcEndpointAccess.html
   */
  public toListVpcEndpointAccess() {
    return this.to('ListVpcEndpointAccess');
  }

  /**
   * Grants permission to retrieve all Amazon OpenSearch Service-managed VPC endpoints in the current AWS account and Region
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListVpcEndpoints.html
   */
  public toListVpcEndpoints() {
    return this.to('ListVpcEndpoints');
  }

  /**
   * Grants permission to retrieve all Amazon OpenSearch Service-managed VPC endpoints associated with a particular domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_ListVpcEndpointsForDomain.html
   */
  public toListVpcEndpointsForDomain() {
    return this.to('ListVpcEndpointsForDomain');
  }

  /**
   * Grants permission to purchase OpenSearch Service Reserved Instances. This permission is deprecated. Use PurchaseReservedInstanceOffering instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_PurchaseReservedInstanceOffering.html
   */
  public toPurchaseReservedElasticsearchInstanceOffering() {
    return this.to('PurchaseReservedElasticsearchInstanceOffering');
  }

  /**
   * Grants permission to purchase OpenSearch reserved instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_PurchaseReservedInstanceOffering.html
   */
  public toPurchaseReservedInstanceOffering() {
    return this.to('PurchaseReservedInstanceOffering');
  }

  /**
   * Grants permission to the destination domain owner to reject an inbound cross-cluster search connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_RejectInboundConnection.html
   */
  public toRejectInboundConnection() {
    return this.to('RejectInboundConnection');
  }

  /**
   * Grants permission to the destination domain owner to reject an inbound cross-cluster search connection request. This permission is deprecated. Use RejectInboundConnection instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_RejectInboundConnection.html
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
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_RemoveTags.html
   */
  public toRemoveTags() {
    return this.to('RemoveTags');
  }

  /**
   * Grants permission to revoke access to an Amazon OpenSearch Service domain that was provided through an interface VPC endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_RevokeVpcEndpointAccess.html
   */
  public toRevokeVpcEndpointAccess() {
    return this.to('RevokeVpcEndpointAccess');
  }

  /**
   * Grants permission to initiate the maintenance on the node
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_StartDomainMaintenance.html
   */
  public toStartDomainMaintenance() {
    return this.to('StartDomainMaintenance');
  }

  /**
   * Grants permission to start a service software update of a domain. This permission is deprecated. Use StartServiceSoftwareUpdate instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_StartServiceSoftwareUpdate.html
   */
  public toStartElasticsearchServiceSoftwareUpdate() {
    return this.to('StartElasticsearchServiceSoftwareUpdate');
  }

  /**
   * Grants permission to start a service software update of a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_StartServiceSoftwareUpdate.html
   */
  public toStartServiceSoftwareUpdate() {
    return this.to('StartServiceSoftwareUpdate');
  }

  /**
   * Grants permission to update the data source for the OpenSearch Service domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpdateDataSource.html
   */
  public toUpdateDataSource() {
    return this.to('UpdateDataSource');
  }

  /**
   * Grants permission to modify the configuration of an OpenSearch Service domain, such as the instance type or number of instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpdateDomainConfig.html
   */
  public toUpdateDomainConfig() {
    return this.to('UpdateDomainConfig');
  }

  /**
   * Grants permission to modify the configuration of an OpenSearch Service domain, such as the instance type or number of instances. This permission is deprecated. Use UpdateDomainConfig instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpdateDomainConfig.html
   */
  public toUpdateElasticsearchDomainConfig() {
    return this.to('UpdateElasticsearchDomainConfig');
  }

  /**
   * Grants permission to update a package for use with OpenSearch Service domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpdatePackage.html
   */
  public toUpdatePackage() {
    return this.to('UpdatePackage');
  }

  /**
   * Grants permission to reschedule a planned OpenSearch Service domain configuration change for a later time
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpdateScheduledAction.html
   */
  public toUpdateScheduledAction() {
    return this.to('UpdateScheduledAction');
  }

  /**
   * Grants permission to modify an Amazon OpenSearch Service-managed interface VPC endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpdateVpcEndpoint.html
   */
  public toUpdateVpcEndpoint() {
    return this.to('UpdateVpcEndpoint');
  }

  /**
   * Grants permission to initiate upgrade of an OpenSearch Service domain to a given version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpgradeDomain.html
   */
  public toUpgradeDomain() {
    return this.to('UpgradeDomain');
  }

  /**
   * Grants permission to initiate upgrade of an OpenSearch Service domain to a specified version. This permission is deprecated. Use UpgradeDomain instead
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_UpgradeDomain.html
   */
  public toUpgradeElasticsearchDomain() {
    return this.to('UpgradeElasticsearchDomain');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptInboundConnection',
      'AcceptInboundCrossClusterSearchConnection',
      'AddDataSource',
      'AssociatePackage',
      'AuthorizeVpcEndpointAccess',
      'CancelDomainConfigChange',
      'CancelElasticsearchServiceSoftwareUpdate',
      'CancelServiceSoftwareUpdate',
      'CreateDomain',
      'CreateElasticsearchDomain',
      'CreateElasticsearchServiceRole',
      'CreateOutboundConnection',
      'CreateOutboundCrossClusterSearchConnection',
      'CreatePackage',
      'CreateServiceRole',
      'CreateVpcEndpoint',
      'DeleteDataSource',
      'DeleteDomain',
      'DeleteElasticsearchDomain',
      'DeleteElasticsearchServiceRole',
      'DeleteInboundConnection',
      'DeleteInboundCrossClusterSearchConnection',
      'DeleteOutboundConnection',
      'DeleteOutboundCrossClusterSearchConnection',
      'DeletePackage',
      'DeleteVpcEndpoint',
      'DissociatePackage',
      'ESHttpDelete',
      'ESHttpPatch',
      'ESHttpPost',
      'ESHttpPut',
      'PurchaseReservedElasticsearchInstanceOffering',
      'PurchaseReservedInstanceOffering',
      'RejectInboundConnection',
      'RejectInboundCrossClusterSearchConnection',
      'RevokeVpcEndpointAccess',
      'StartDomainMaintenance',
      'StartElasticsearchServiceSoftwareUpdate',
      'StartServiceSoftwareUpdate',
      'UpdateDataSource',
      'UpdateDomainConfig',
      'UpdateElasticsearchDomainConfig',
      'UpdatePackage',
      'UpdateScheduledAction',
      'UpdateVpcEndpoint',
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
      'DescribeDomainHealth',
      'DescribeDomainNodes',
      'DescribeDryRunProgress',
      'DescribeElasticsearchDomain',
      'DescribeElasticsearchDomainConfig',
      'DescribePackages',
      'ESCrossClusterGet',
      'ESHttpGet',
      'ESHttpHead',
      'GetDataSource',
      'GetDomainMaintenanceStatus',
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
      'DescribeVpcEndpoints',
      'GetCompatibleElasticsearchVersions',
      'GetCompatibleVersions',
      'ListDataSources',
      'ListDomainMaintenances',
      'ListDomainNames',
      'ListDomainsForPackage',
      'ListElasticsearchInstanceTypeDetails',
      'ListElasticsearchInstanceTypes',
      'ListElasticsearchVersions',
      'ListInstanceTypeDetails',
      'ListPackagesForDomain',
      'ListScheduledActions',
      'ListVersions',
      'ListVpcEndpointAccess',
      'ListVpcEndpoints',
      'ListVpcEndpointsForDomain'
    ]
  };

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html
   *
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomain(domainName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:es:${ region || this.defaultRegion }:${ account || this.defaultAccount }:domain/${ domainName }`);
  }

  /**
   * Adds a resource of type es_role to the statement
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/slr.html
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEsRole(account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:iam::${ account || this.defaultAccount }:role/aws-service-role/es.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`);
  }

  /**
   * Adds a resource of type opensearchservice_role to the statement
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/slr.html
   *
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onOpensearchserviceRole(account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:iam::${ account || this.defaultAccount }:role/aws-service-role/opensearchservice.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`);
  }

  /**
   * Filters access based on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreateDomain()
   * - .toCreateElasticsearchDomain()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - domain
   * - es_role
   * - opensearchservice_role
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access based on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreateDomain()
   * - .toCreateElasticsearchDomain()
   * - .toRemoveTags()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
