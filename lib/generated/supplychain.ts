import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [scn](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Scn extends PolicyStatement {
  public servicePrefix = 'scn';

  /**
   * Statement provider for service [scn](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add AWS Supply Chain administrator permission to federated user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toAssignAdminPermissionsToUser() {
    return this.to('AssignAdminPermissionsToUser');
  }

  /**
   * Grants permission to create a BillOfMaterialsImportJob which will import a CSV file of BillOfMaterials records
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toCreateBillOfMaterialsImportJob() {
    return this.to('CreateBillOfMaterialsImportJob');
  }

  /**
   * Grants permission to create a new AWS Supply Chain instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toCreateInstance() {
    return this.to('CreateInstance');
  }

  /**
   * Grants permission to create IAM Identity Center application for a AWS Supply Chain instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toCreateSSOApplication() {
    return this.to('CreateSSOApplication');
  }

  /**
   * Grants permission to delete an AWS Supply Chain instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toDeleteInstance() {
    return this.to('DeleteInstance');
  }

  /**
   * Grants permission to delete IAM Identity Center application of the AWS Supply Chain instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toDeleteSSOApplication() {
    return this.to('DeleteSSOApplication');
  }

  /**
   * Grants permission to view details of an AWS Supply Chain instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toDescribeInstance() {
    return this.to('DescribeInstance');
  }

  /**
   * Grants permission to view status and details of a BillOfMaterialsImportJob
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toGetBillOfMaterialsImportJob() {
    return this.to('GetBillOfMaterialsImportJob');
  }

  /**
   * Grants permission to list AWS Supply Chain administrators of an instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toListAdminUsers() {
    return this.to('ListAdminUsers');
  }

  /**
   * Grants permission to view the AWS Supply Chain instances associated with an AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toListInstances() {
    return this.to('ListInstances');
  }

  /**
   * Grants permission to list tags for an AWS Supply Chain instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to remove AWS Supply Chain administrator permission from federated user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toRemoveAdminPermissionsForUser() {
    return this.to('RemoveAdminPermissionsForUser');
  }

  /**
   * Grants permission to tag an AWS Supply Chain instance
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tag from an AWS Supply Chain instance
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an AWS Supply Chain instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toUpdateInstance() {
    return this.to('UpdateInstance');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssignAdminPermissionsToUser',
      'CreateBillOfMaterialsImportJob',
      'CreateInstance',
      'CreateSSOApplication',
      'DeleteInstance',
      'DeleteSSOApplication',
      'RemoveAdminPermissionsForUser',
      'UpdateInstance'
    ],
    Read: [
      'DescribeInstance',
      'GetBillOfMaterialsImportJob'
    ],
    List: [
      'ListAdminUsers',
      'ListInstances',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type instance to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onInstance(instanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:scn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }`);
  }

  /**
   * Adds a resource of type bill-of-materials-import-job to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onBillOfMaterialsImportJob(instanceId: string, jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:scn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/bill-of-materials-import-job/${ jobId }`);
  }

  /**
   * Filters access by using tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
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
   * Filters access by using tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by using tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
