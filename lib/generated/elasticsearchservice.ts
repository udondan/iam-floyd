import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [es](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticsearchservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Es extends PolicyStatement {
  public servicePrefix = 'es';

  /**
   * Statement provider for service [es](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelasticsearchservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Allows the destination domain owner to accept an inbound cross-cluster search connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-acceptinboundcrossclustersearchconnection
   */
  public toAcceptInboundCrossClusterSearchConnection() {
    this.to('es:AcceptInboundCrossClusterSearchConnection');
    return this;
  }

  /**
   * Grants permission to attach resource tags to an Amazon ES domain.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-addtags
   */
  public toAddTags() {
    this.to('es:AddTags');
    return this;
  }

  /**
   * Grants permission to create an Amazon ES domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createelasticsearchdomain
   */
  public toCreateElasticsearchDomain() {
    this.to('es:CreateElasticsearchDomain');
    return this;
  }

  /**
   * Grants permission to create the service-linked role required for Amazon ES domains that use VPC access.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createelasticsearchservicerole
   */
  public toCreateElasticsearchServiceRole() {
    this.to('es:CreateElasticsearchServiceRole');
    return this;
  }

  /**
   * Creates a new cross-cluster search connection from a source domain to a destination domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-createoutboundcrossclustersearchconnection
   */
  public toCreateOutboundCrossClusterSearchConnection() {
    this.to('es:CreateOutboundCrossClusterSearchConnection');
    return this;
  }

  /**
   * Grants permission to delete an Amazon ES domain and all of its data.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteelasticsearchdomain
   */
  public toDeleteElasticsearchDomain() {
    this.to('es:DeleteElasticsearchDomain');
    return this;
  }

  /**
   * Grants permission to delete the service-linked role required for Amazon ES domains that use VPC access.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteelasticsearchservicerole
   */
  public toDeleteElasticsearchServiceRole() {
    this.to('es:DeleteElasticsearchServiceRole');
    return this;
  }

  /**
   * Allows the destination domain owner to delete an existing inbound cross-cluster search connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteinboundcrossclustersearchconnection
   */
  public toDeleteInboundCrossClusterSearchConnection() {
    this.to('es:DeleteInboundCrossClusterSearchConnection');
    return this;
  }

  /**
   * Allows the source domain owner to delete an existing outbound cross-cluster search connection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-deleteoutboundcrossclustersearchconnection
   */
  public toDeleteOutboundCrossClusterSearchConnection() {
    this.to('es:DeleteOutboundCrossClusterSearchConnection');
    return this;
  }

  /**
   * Grants permission to view a description of the domain configuration for the specified Amazon ES domain, including the domain ID, domain service endpoint, and domain ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomain
   */
  public toDescribeElasticsearchDomain() {
    this.to('es:DescribeElasticsearchDomain');
    return this;
  }

  /**
   * Grants permission to view a description of the configuration options and status of an Amazon ES domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomainconfig
   */
  public toDescribeElasticsearchDomainConfig() {
    this.to('es:DescribeElasticsearchDomainConfig');
    return this;
  }

  /**
   * Grants permission to view a description of the domain configuration for up to five specified Amazon ES domains.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeelasticsearchdomain
   */
  public toDescribeElasticsearchDomains() {
    this.to('es:DescribeElasticsearchDomains');
    return this;
  }

  /**
   * Grants permission to view the instance count, storage, and master node limits for a given Elasticsearch version and instance type.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeinstancetypelimits
   */
  public toDescribeElasticsearchInstanceTypeLimits() {
    this.to('es:DescribeElasticsearchInstanceTypeLimits');
    return this;
  }

  /**
   * Lists all the inbound cross-cluster search connections for a destination domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeinboundcrossclustersearchconnections
   */
  public toDescribeInboundCrossClusterSearchConnections() {
    this.to('es:DescribeInboundCrossClusterSearchConnections');
    return this;
  }

  /**
   * Lists all the outbound cross-cluster search connections for a source domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describeoutboundcrossclustersearchconnections
   */
  public toDescribeOutboundCrossClusterSearchConnections() {
    this.to('es:DescribeOutboundCrossClusterSearchConnections');
    return this;
  }

  /**
   * Grants permission to fetch reserved instance offerings for ES
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describereservedelasticsearchinstanceofferings
   */
  public toDescribeReservedElasticsearchInstanceOfferings() {
    this.to('es:DescribeReservedElasticsearchInstanceOfferings');
    return this;
  }

  /**
   * Grants permission to fetch ES reserved instances already purchased by customer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-describereservedelasticsearchinstances
   */
  public toDescribeReservedElasticsearchInstances() {
    this.to('es:DescribeReservedElasticsearchInstances');
    return this;
  }

  /**
   * Grants permission to send cross-cluster requests to a destination domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESCrossClusterGet() {
    this.to('es:ESCrossClusterGet');
    return this;
  }

  /**
   * Grants permission to send HTTP DELETE requests to the Elasticsearch APIs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESHttpDelete() {
    this.to('es:ESHttpDelete');
    return this;
  }

  /**
   * Grants permission to send HTTP GET requests to the Elasticsearch APIs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESHttpGet() {
    this.to('es:ESHttpGet');
    return this;
  }

  /**
   * Grants permission to send HTTP HEAD requests to the Elasticsearch APIs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESHttpHead() {
    this.to('es:ESHttpHead');
    return this;
  }

  /**
   * Grants permission to send HTTP PATCH requests to the Elasticsearch APIs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESHttpPatch() {
    this.to('es:ESHttpPatch');
    return this;
  }

  /**
   * Grants permission to send HTTP POST requests to the Elasticsearch APIs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESHttpPost() {
    this.to('es:ESHttpPost');
    return this;
  }

  /**
   * Grants permission to send HTTP PUT requests to the Elasticsearch APIs.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-ac.html#es-ac-reference
   */
  public toESHttpPut() {
    this.to('es:ESHttpPut');
    return this;
  }

  /**
   * Grants permission to fetch list of compatible elastic search versions to which Amazon ES domain can be upgraded
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-getcompatibleelasticsearchversions
   */
  public toGetCompatibleElasticsearchVersions() {
    this.to('es:GetCompatibleElasticsearchVersions');
    return this;
  }

  /**
   * Grants permission to fetch upgrade history for given ES domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-getupgradehistory
   */
  public toGetUpgradeHistory() {
    this.to('es:GetUpgradeHistory');
    return this;
  }

  /**
   * Grants permission to fetch upgrade status for given ES domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-getupgradestatus
   */
  public toGetUpgradeStatus() {
    this.to('es:GetUpgradeStatus');
    return this;
  }

  /**
   * Grants permission to display the names of all Amazon ES domains that the current user owns.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listdomainnames
   */
  public toListDomainNames() {
    this.to('es:ListDomainNames');
    return this;
  }

  /**
   * Grants permission to list all instance types and available features for a given Elasticsearch version.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listelasticsearchinstancetypedetails
   */
  public toListElasticsearchInstanceTypeDetails() {
    this.to('es:ListElasticsearchInstanceTypeDetails');
    return this;
  }

  /**
   * Grants permission to list all Elasticsearch instance types that are supported for a given Elasticsearch version.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listelasticsearchinstancetypes
   */
  public toListElasticsearchInstanceTypes() {
    this.to('es:ListElasticsearchInstanceTypes');
    return this;
  }

  /**
   * Grants permission to list all supported Elasticsearch versions on Amazon ES.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listelasticsearchversions
   */
  public toListElasticsearchVersions() {
    this.to('es:ListElasticsearchVersions');
    return this;
  }

  /**
   * Grants permission to display all of the tags for an Amazon ES domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listtags
   */
  public toListTags() {
    this.to('es:ListTags');
    return this;
  }

  /**
   * Grants permission to purchase ES reserved instances
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-purchasereservedelasticsearchinstance
   */
  public toPurchaseReservedElasticsearchInstanceOffering() {
    this.to('es:PurchaseReservedElasticsearchInstanceOffering');
    return this;
  }

  /**
   * Allows the destination domain owner to reject an inbound cross-cluster search connection request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-rejectinboundcrossclustersearchconnection
   */
  public toRejectInboundCrossClusterSearchConnection() {
    this.to('es:RejectInboundCrossClusterSearchConnection');
    return this;
  }

  /**
   * Grants permission to remove tags from Amazon ES domains.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-listtags
   */
  public toRemoveTags() {
    this.to('es:RemoveTags');
    return this;
  }

  /**
   * Grants permission to modify the configuration of an Amazon ES domain, such as the instance type or number of instances.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-updateelasticsearchdomainconfig
   */
  public toUpdateElasticsearchDomainConfig() {
    this.to('es:UpdateElasticsearchDomainConfig');
    return this;
  }

  /**
   * Grants permission to initiate upgrade of elastic search domain to given version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-api.html#es-configuration-api-actions-upgradeelasticsearchdomain
   */
  public toUpgradeElasticsearchDomain() {
    this.to('es:UpgradeElasticsearchDomain');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptInboundCrossClusterSearchConnection",
      "CreateElasticsearchDomain",
      "CreateElasticsearchServiceRole",
      "CreateOutboundCrossClusterSearchConnection",
      "DeleteElasticsearchDomain",
      "DeleteElasticsearchServiceRole",
      "DeleteInboundCrossClusterSearchConnection",
      "DeleteOutboundCrossClusterSearchConnection",
      "ESHttpDelete",
      "ESHttpPatch",
      "ESHttpPost",
      "ESHttpPut",
      "PurchaseReservedElasticsearchInstanceOffering",
      "RejectInboundCrossClusterSearchConnection",
      "UpdateElasticsearchDomainConfig",
      "UpgradeElasticsearchDomain"
    ],
    "Tagging": [
      "AddTags",
      "RemoveTags"
    ],
    "Read": [
      "DescribeElasticsearchDomain",
      "DescribeElasticsearchDomainConfig",
      "ESCrossClusterGet",
      "ESHttpGet",
      "ESHttpHead",
      "GetUpgradeHistory",
      "GetUpgradeStatus",
      "ListTags"
    ],
    "List": [
      "DescribeElasticsearchDomains",
      "DescribeElasticsearchInstanceTypeLimits",
      "DescribeInboundCrossClusterSearchConnections",
      "DescribeOutboundCrossClusterSearchConnections",
      "DescribeReservedElasticsearchInstanceOfferings",
      "DescribeReservedElasticsearchInstances",
      "GetCompatibleElasticsearchVersions",
      "ListDomainNames",
      "ListElasticsearchInstanceTypeDetails",
      "ListElasticsearchInstanceTypes",
      "ListElasticsearchVersions"
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
   */
  public onDomain(domainName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:es:${Region}:${Account}:domain/${DomainName}';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type EsActionsWrite = 'AcceptInboundCrossClusterSearchConnection' | 'CreateElasticsearchDomain' | 'CreateElasticsearchServiceRole' | 'CreateOutboundCrossClusterSearchConnection' | 'DeleteElasticsearchDomain' | 'DeleteElasticsearchServiceRole' | 'DeleteInboundCrossClusterSearchConnection' | 'DeleteOutboundCrossClusterSearchConnection' | 'ESHttpDelete' | 'ESHttpPatch' | 'ESHttpPost' | 'ESHttpPut' | 'PurchaseReservedElasticsearchInstanceOffering' | 'RejectInboundCrossClusterSearchConnection' | 'UpdateElasticsearchDomainConfig' | 'UpgradeElasticsearchDomain';
export type EsActionsTagging = 'AddTags' | 'RemoveTags';
export type EsActionsRead = 'DescribeElasticsearchDomain' | 'DescribeElasticsearchDomainConfig' | 'ESCrossClusterGet' | 'ESHttpGet' | 'ESHttpHead' | 'GetUpgradeHistory' | 'GetUpgradeStatus' | 'ListTags';
export type EsActionsList = 'DescribeElasticsearchDomains' | 'DescribeElasticsearchInstanceTypeLimits' | 'DescribeInboundCrossClusterSearchConnections' | 'DescribeOutboundCrossClusterSearchConnections' | 'DescribeReservedElasticsearchInstanceOfferings' | 'DescribeReservedElasticsearchInstances' | 'GetCompatibleElasticsearchVersions' | 'ListDomainNames' | 'ListElasticsearchInstanceTypeDetails' | 'ListElasticsearchInstanceTypes' | 'ListElasticsearchVersions';
export type EsActions = EsActionsWrite | EsActionsTagging | EsActionsRead | EsActionsList;
