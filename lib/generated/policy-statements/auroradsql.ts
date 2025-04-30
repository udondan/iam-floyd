import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [dsql](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonauroradsql.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Dsql extends PolicyStatement {
  public servicePrefix = 'dsql';

  /**
   * Statement provider for service [dsql](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonauroradsql.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create new clusters
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_CreateCluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Grants permission to create multi-Region clusters. Creating multi-Region clusters also requires CreateCluster permission in each specified Region
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWitnessRegion()
   *
   * Dependent actions:
   * - dsql:CreateCluster
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_CreateMultiRegionClusters.html
   */
  public toCreateMultiRegionClusters() {
    return this.to('CreateMultiRegionClusters');
  }

  /**
   * Grants permission to connect to the database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/accessing-sql-clients.html
   */
  public toDbConnect() {
    return this.to('DbConnect');
  }

  /**
   * Grants permission to connect to the database with admin role. Connecting with any other role requires DbConnect permission
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/accessing-sql-clients.html
   */
  public toDbConnectAdmin() {
    return this.to('DbConnectAdmin');
  }

  /**
   * Grants permission to delete a cluster and all of its data
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_DeleteCluster.html
   */
  public toDeleteCluster() {
    return this.to('DeleteCluster');
  }

  /**
   * Grants permission to delete multi-Region clusters. Deleting multi-Region clusters also requires DeleteCluster permission in each specified Region
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - dsql:DeleteCluster
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_DeleteMultiRegionClusters.html
   */
  public toDeleteMultiRegionClusters() {
    return this.to('DeleteMultiRegionClusters');
  }

  /**
   * Grants permission to get information about a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_GetCluster.html
   */
  public toGetCluster() {
    return this.to('GetCluster');
  }

  /**
   * Grants permission to retrieve endpoint service name specific to a cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_GetVpcEndpointServiceName.html
   */
  public toGetVpcEndpointServiceName() {
    return this.to('GetVpcEndpointServiceName');
  }

  /**
   * Grants permission to retrieve a list of clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_ListClusters.html
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * Grants permission to list all tags on an Aurora DSQL resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add tags to Aurora DSQL resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from Aurora DSQL resources
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify cluster attributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/APIReference/API_UpdateCluster.html
   */
  public toUpdateCluster() {
    return this.to('UpdateCluster');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateCluster',
      'CreateMultiRegionClusters',
      'DbConnect',
      'DbConnectAdmin',
      'DeleteCluster',
      'DeleteMultiRegionClusters',
      'UpdateCluster'
    ],
    Read: [
      'GetCluster',
      'GetVpcEndpointServiceName',
      'ListTagsForResource'
    ],
    List: [
      'ListClusters'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Cluster to the statement
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/what-is-core-components.html#Cluster
   *
   * @param identifier - Identifier for the identifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCluster(identifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:dsql:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:cluster/${ identifier }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Cluster
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateCluster()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the witness region of linked clusters
   *
   * https://docs.aws.amazon.com/aurora-dsql/latest/userguide/using-iam-condition-keys.html#witness-region
   *
   * Applies to actions:
   * - .toCreateMultiRegionClusters()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWitnessRegion(value: string | string[], operator?: Operator | string) {
    return this.if(`WitnessRegion`, value, operator ?? 'StringLike');
  }
}
