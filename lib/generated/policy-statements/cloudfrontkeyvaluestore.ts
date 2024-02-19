import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [cloudfront-keyvaluestore](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudfrontkeyvaluestore.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class CloudfrontKeyvaluestore extends PolicyStatement {
  public servicePrefix = 'cloudfront-keyvaluestore';

  /**
   * Statement provider for service [cloudfront-keyvaluestore](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudfrontkeyvaluestore.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to delete the key value pair specified by the key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_kvs_DeleteKey.html
   */
  public toDeleteKey() {
    return this.to('DeleteKey');
  }

  /**
   * Grants permission to return metadata information about Key Value Store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_kvs_DescribeKeyValueStore.html
   */
  public toDescribeKeyValueStore() {
    return this.to('DescribeKeyValueStore');
  }

  /**
   * Grants permission to return a key value pair
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_kvs_GetKey.html
   */
  public toGetKey() {
    return this.to('GetKey');
  }

  /**
   * Grants permission to returns a list of key value pairs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_kvs_ListKeys.html
   */
  public toListKeys() {
    return this.to('ListKeys');
  }

  /**
   * Grants permission to create a new key value pair or replace the value of an existing key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_kvs_PutKey.html
   */
  public toPutKey() {
    return this.to('PutKey');
  }

  /**
   * Grants permission to put or delete multiple key value pairs in a single, all-or-nothing operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_kvs_UpdateKeys.html
   */
  public toUpdateKeys() {
    return this.to('UpdateKeys');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'DeleteKey',
      'PutKey',
      'UpdateKeys'
    ],
    Read: [
      'DescribeKeyValueStore',
      'GetKey'
    ],
    List: [
      'ListKeys'
    ]
  };

  /**
   * Adds a resource of type key-value-store to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/kvs-with-functions.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onKeyValueStore(resourceId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudfront::${ account ?? this.defaultAccount }:key-value-store/${ resourceId }`);
  }
}
