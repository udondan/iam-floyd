import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [datazonecontrol](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondatazonecontrol.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Datazonecontrol extends PolicyStatement {
  public servicePrefix = 'datazonecontrol';

  /**
   * Statement provider for service [datazonecontrol](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondatazonecontrol.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to request association of an account with a given domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toCreateAccountAssociationInvitation() {
    return this.to('CreateAccountAssociationInvitation');
  }

  /**
   * Grants permission to create Amazon DataZone data sources used for publishing and subscribing to data
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toCreateDataSource() {
    return this.to('CreateDataSource');
  }

  /**
   * Grants permission to provision a root-domain which is a top level entity that contains other Amazon DataZone resources
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permission to delete a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toDeleteDataSource() {
    return this.to('DeleteDataSource');
  }

  /**
   * Grants permission to delete a provisioned root-domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to disassociate an account with a given domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toDissociateAccount() {
    return this.to('DissociateAccount');
  }

  /**
   * Grants permission to retrieve information about any associated domain in the associated account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toGetAssociatedDomain() {
    return this.to('GetAssociatedDomain');
  }

  /**
   * Grants permission to retrieve any data source under any domain for a given root-domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toGetDataSourceByEnvironment() {
    return this.to('GetDataSourceByEnvironment');
  }

  /**
   * Grants permission to retrieve information about any domain in the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toGetDomain() {
    return this.to('GetDomain');
  }

  /**
   * Grants permission to retrieve information about a root-domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to retrieve a publishing job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toGetMetadataCollector() {
    return this.to('GetMetadataCollector');
  }

  /**
   * Grants permission to retrieve credentials to log into Amazon DataZone data portal from AWS management console
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toGetUserPortalLoginAuthCode() {
    return this.to('GetUserPortalLoginAuthCode');
  }

  /**
   * Grants permission to retrieve all account-association invitations for a given associated account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toListAccountAssociationInvitations() {
    return this.to('ListAccountAssociationInvitations');
  }

  /**
   * Grants permission to list all associated accounts under the given root-domain, including accounts associated to its sub-domains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toListAllAssociatedAccountsForEnvironment() {
    return this.to('ListAllAssociatedAccountsForEnvironment');
  }

  /**
   * Grants permission to lists all the associated domains for a given associated account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toListAssociatedEnvironments() {
    return this.to('ListAssociatedEnvironments');
  }

  /**
   * Grants permission to retrieve all data sources under any domain in the associated account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toListDataSources() {
    return this.to('ListDataSources');
  }

  /**
   * Grants permission to retrieve all data sources under any domain for a given root-domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toListDataSourcesByEnvironment() {
    return this.to('ListDataSourcesByEnvironment');
  }

  /**
   * Grants permission to list all the sub-domains for a given domain or a root-domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to retrieve all root-domains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toListEnvironment() {
    return this.to('ListEnvironment');
  }

  /**
   * Grants permission to list all runs for a given publishing job through Amazon DataZone console for a data source
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toListMetadataCollectorRuns() {
    return this.to('ListMetadataCollectorRuns');
  }

  /**
   * Grants permission to retrieve all publishing jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toListMetadataCollectors() {
    return this.to('ListMetadataCollectors');
  }

  /**
   * Grants permission to retrieve all Amazon DataZone projects
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to retrieve all tags associated with a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to accept or reject the pending association requests for the given account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toReviewAccountAssociationInvitation() {
    return this.to('ReviewAccountAssociationInvitation');
  }

  /**
   * Grants permission to add or update tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags associated with a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the description of the account association of the given associated account and given domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toUpdateAccountAssociationDescription() {
    return this.to('UpdateAccountAssociationDescription');
  }

  /**
   * Grants permission to update a data source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toUpdateDataSource() {
    return this.to('UpdateDataSource');
  }

  /**
   * Grants permission to update information for a root-domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html#accessing-datazone
   */
  public toUpdateEnvironment() {
    return this.to('UpdateEnvironment');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAccountAssociationInvitation',
      'CreateDataSource',
      'CreateEnvironment',
      'DeleteDataSource',
      'DeleteEnvironment',
      'DissociateAccount',
      'ReviewAccountAssociationInvitation',
      'UpdateAccountAssociationDescription',
      'UpdateDataSource',
      'UpdateEnvironment'
    ],
    Read: [
      'GetAssociatedDomain',
      'GetDataSourceByEnvironment',
      'GetDomain',
      'GetEnvironment',
      'GetMetadataCollector',
      'GetUserPortalLoginAuthCode',
      'ListTagsForResource'
    ],
    List: [
      'ListAccountAssociationInvitations',
      'ListAllAssociatedAccountsForEnvironment',
      'ListAssociatedEnvironments',
      'ListDataSources',
      'ListDataSourcesByEnvironment',
      'ListDomains',
      'ListEnvironment',
      'ListMetadataCollectorRuns',
      'ListMetadataCollectors',
      'ListProjects'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/create-root-domain.html
   *
   * @param domainId - Identifier for the domainId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironment(domainId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Datazonecontrol.defaultPartition }:datazonecontrol:${ region || '*' }:${ account || '*' }:domain/${ domainId }`);
  }

  /**
   * Adds a resource of type data-source to the statement
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/create-glue-data-source.html
   *
   * @param domainId - Identifier for the domainId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataSource(domainId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Datazonecontrol.defaultPartition }:datazonecontrol:${ region || '*' }:${ account || '*' }:data-source/${ domainId }`);
  }
}
