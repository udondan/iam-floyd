import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [sdb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpledb.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sdb extends PolicyStatement {
  public servicePrefix = 'sdb';

  /**
   * Statement provider for service [sdb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsimpledb.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to perform multiple DeleteAttributes operations in a single call, which reduces round trips and latencies
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_BatchDeleteAttributes.html
   */
  public toBatchDeleteAttributes() {
    return this.to('BatchDeleteAttributes');
  }

  /**
   * Grants permission to perform multiple PutAttribute operations in a single call, which reduces round trips and latencies
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_BatchPutAttributes.html
   */
  public toBatchPutAttributes() {
    return this.to('BatchPutAttributes');
  }

  /**
   * Grants permission to create a new domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_CreateDomain.html
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to delete one or more attributes associated with the item
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_DeleteAttributes.html
   */
  public toDeleteAttributes() {
    return this.to('DeleteAttributes');
  }

  /**
   * Grants permission to delete a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to return information about the domain, including when the domain was created, the number of items and attributes, and the size of attribute names and values
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_DomainMetadata.html
   */
  public toDomainMetadata() {
    return this.to('DomainMetadata');
  }

  /**
   * Grants permission to return all of the attributes associated with the item
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_GetAttributes.html
   */
  public toGetAttributes() {
    return this.to('GetAttributes');
  }

  /**
   * Grants permission to return information for an existing domain export arn
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_GetExport.html
   */
  public toGetExport() {
    return this.to('GetExport');
  }

  /**
   * Grants permission to list all domains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list all exports that were created. The results are paginated and can be filtered by domain name
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_ListExports.html
   */
  public toListExports() {
    return this.to('ListExports');
  }

  /**
   * Grants permission to create or replace attributes in an item
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_PutAttributes.html
   */
  public toPutAttributes() {
    return this.to('PutAttributes');
  }

  /**
   * Grants permission to execute a query against the items in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_Select.html
   */
  public toSelect() {
    return this.to('Select');
  }

  /**
   * Grants permission to initiates the export of a SimpleDB domain to an S3 bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/SDB_API_StartDomainExport.html
   */
  public toStartDomainExport() {
    return this.to('StartDomainExport');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchDeleteAttributes',
      'BatchPutAttributes',
      'CreateDomain',
      'DeleteAttributes',
      'DeleteDomain',
      'PutAttributes',
      'StartDomainExport'
    ],
    Read: [
      'DomainMetadata',
      'GetAttributes',
      'GetExport',
      'Select'
    ],
    List: [
      'ListDomains',
      'ListExports'
    ]
  };

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/DataModel.html
   *
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDomain(domainName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sdb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainName }`);
  }

  /**
   * Adds a resource of type export to the statement
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/DataModel.html
   *
   * @param domainName - Identifier for the domainName.
   * @param exportUUID - Identifier for the exportUUID.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onExport(domainName: string, exportUUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:sdb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainName }/export/${ exportUUID }`);
  }
}
