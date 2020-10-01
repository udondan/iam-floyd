import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [sdb](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpledb.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sdb extends PolicyStatement {
  public servicePrefix = 'sdb';

  /**
   * Statement provider for service [sdb](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpledb.html).
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
    this.to('sdb:BatchDeleteAttributes');
    return this;
  }

  /**
   * With the BatchPutAttributes operation, you can perform multiple PutAttribute operations in a single call. With the BatchPutAttributes operation, you can perform multiple PutAttribute operations in a single call.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_BatchPutAttributes.html
   */
  public toBatchPutAttributes() {
    this.to('sdb:BatchPutAttributes');
    return this;
  }

  /**
   * The CreateDomain operation creates a new domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_CreateDomain.html
   */
  public toCreateDomain() {
    this.to('sdb:CreateDomain');
    return this;
  }

  /**
   * Deletes one or more attributes associated with the item.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_DeleteAttributes.html
   */
  public toDeleteAttributes() {
    this.to('sdb:DeleteAttributes');
    return this;
  }

  /**
   * The DeleteDomain operation deletes a domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    this.to('sdb:DeleteDomain');
    return this;
  }

  /**
   * Returns information about the domain, including when the domain was created, the number of items and attributes, and the size of attribute names and values.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_DomainMetadata.html
   */
  public toDomainMetadata() {
    this.to('sdb:DomainMetadata');
    return this;
  }

  /**
   * Returns all of the attributes associated with the item.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_GetAttributes.html
   */
  public toGetAttributes() {
    this.to('sdb:GetAttributes');
    return this;
  }

  /**
   * Description for ListDomains
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_ListDomains.html
   */
  public toListDomains() {
    this.to('sdb:ListDomains');
    return this;
  }

  /**
   * The PutAttributes operation creates or replaces attributes in an item.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_PutAttributes.html
   */
  public toPutAttributes() {
    this.to('sdb:PutAttributes');
    return this;
  }

  /**
   * Description for Select
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonSimpleDB/latest/DeveloperGuide/API_Select.html
   */
  public toSelect() {
    this.to('sdb:Select');
    return this;
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
