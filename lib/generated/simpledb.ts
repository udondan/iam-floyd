import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Performs multiple DeleteAttributes operations in a single call, which reduces round trips and latencies.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_BatchDeleteAttributes.html
   */
  public toBatchDeleteAttributes() {
    return this.to('BatchDeleteAttributes');
  }

  /**
   * With the BatchPutAttributes operation, you can perform multiple PutAttribute operations in a single call. With the BatchPutAttributes operation, you can perform multiple PutAttribute operations in a single call.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_BatchPutAttributes.html
   */
  public toBatchPutAttributes() {
    return this.to('BatchPutAttributes');
  }

  /**
   * The CreateDomain operation creates a new domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_CreateDomain.html
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Deletes one or more attributes associated with the item.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_DeleteAttributes.html
   */
  public toDeleteAttributes() {
    return this.to('DeleteAttributes');
  }

  /**
   * The DeleteDomain operation deletes a domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Returns information about the domain, including when the domain was created, the number of items and attributes, and the size of attribute names and values.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_DomainMetadata.html
   */
  public toDomainMetadata() {
    return this.to('DomainMetadata');
  }

  /**
   * Returns all of the attributes associated with the item.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_GetAttributes.html
   */
  public toGetAttributes() {
    return this.to('GetAttributes');
  }

  /**
   * Description for ListDomains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * The PutAttributes operation creates or replaces attributes in an item.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_PutAttributes.html
   */
  public toPutAttributes() {
    return this.to('PutAttributes');
  }

  /**
   * Description for Select
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_Select.html
   */
  public toSelect() {
    return this.to('Select');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "BatchDeleteAttributes",
      "BatchPutAttributes",
      "CreateDomain",
      "DeleteAttributes",
      "DeleteDomain",
      "PutAttributes"
    ],
    "Read": [
      "DomainMetadata",
      "GetAttributes",
      "Select"
    ],
    "List": [
      "ListDomains"
    ]
  };

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/sdb/latest/APIReference/DataModel.html
   *
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDomain(domainName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sdb:${Region}:${Account}:domain/${DomainName}';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
