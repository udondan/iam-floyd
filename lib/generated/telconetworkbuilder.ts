import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [tnb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstelconetworkbuilder.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Tnb extends PolicyStatement {
  public servicePrefix = 'tnb';

  /**
   * Statement provider for service [tnb](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstelconetworkbuilder.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a network operation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_CancelSolNetworkOperation.html
   */
  public toCancelSolNetworkOperation() {
    return this.to('CancelSolNetworkOperation');
  }

  /**
   * Grants permission to create a function package
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_CreateSolFunctionPackage.html
   */
  public toCreateSolFunctionPackage() {
    return this.to('CreateSolFunctionPackage');
  }

  /**
   * Grants permission to create a network instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_CreateSolNetworkInstance.html
   */
  public toCreateSolNetworkInstance() {
    return this.to('CreateSolNetworkInstance');
  }

  /**
   * Grants permission to create a network package
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_CreateSolNetworkPackage.html
   */
  public toCreateSolNetworkPackage() {
    return this.to('CreateSolNetworkPackage');
  }

  /**
   * Grants permission to delete a function package
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_DeleteSolFunctionPackage.html
   */
  public toDeleteSolFunctionPackage() {
    return this.to('DeleteSolFunctionPackage');
  }

  /**
   * Grants permission to delete a network instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_DeleteSolNetworkInstance.html
   */
  public toDeleteSolNetworkInstance() {
    return this.to('DeleteSolNetworkInstance');
  }

  /**
   * Grants permission to delete a network package
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_DeleteSolNetworkPackage.html
   */
  public toDeleteSolNetworkPackage() {
    return this.to('DeleteSolNetworkPackage');
  }

  /**
   * Grants permission to get a function instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_GetSolFunctionInstance.html
   */
  public toGetSolFunctionInstance() {
    return this.to('GetSolFunctionInstance');
  }

  /**
   * Grants permission to get a function package
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_GetSolFunctionPackage.html
   */
  public toGetSolFunctionPackage() {
    return this.to('GetSolFunctionPackage');
  }

  /**
   * Grants permission to get a function package contents
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_GetSolFunctionPackageContent.html
   */
  public toGetSolFunctionPackageContent() {
    return this.to('GetSolFunctionPackageContent');
  }

  /**
   * Grants permission to get a function package descriptor
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_GetSolFunctionPackageDescriptor.html
   */
  public toGetSolFunctionPackageDescriptor() {
    return this.to('GetSolFunctionPackageDescriptor');
  }

  /**
   * Grants permission to get a network instance
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_GetSolNetworkInstance.html
   */
  public toGetSolNetworkInstance() {
    return this.to('GetSolNetworkInstance');
  }

  /**
   * Grants permission to get a network operation
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_GetSolNetworkOperation.html
   */
  public toGetSolNetworkOperation() {
    return this.to('GetSolNetworkOperation');
  }

  /**
   * Grants permission to get a network package
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_GetSolNetworkPackage.html
   */
  public toGetSolNetworkPackage() {
    return this.to('GetSolNetworkPackage');
  }

  /**
   * Grants permission to get a network package contents
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_GetSolNetworkPackageContent.html
   */
  public toGetSolNetworkPackageContent() {
    return this.to('GetSolNetworkPackageContent');
  }

  /**
   * Grants permission to get a network package descriptor
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_GetSolNetworkPackageDescriptor.html
   */
  public toGetSolNetworkPackageDescriptor() {
    return this.to('GetSolNetworkPackageDescriptor');
  }

  /**
   * Grants permission to instantiate a network instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_InstantiateSolNetworkInstance.html
   */
  public toInstantiateSolNetworkInstance() {
    return this.to('InstantiateSolNetworkInstance');
  }

  /**
   * Grants permission to list function instances
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_ListSolFunctionInstances.html
   */
  public toListSolFunctionInstances() {
    return this.to('ListSolFunctionInstances');
  }

  /**
   * Grants permission to list function packages
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_ListSolFunctionPackages.html
   */
  public toListSolFunctionPackages() {
    return this.to('ListSolFunctionPackages');
  }

  /**
   * Grants permission to list network instances
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_ListSolNetworkInstances.html
   */
  public toListSolNetworkInstances() {
    return this.to('ListSolNetworkInstances');
  }

  /**
   * Grants permission to list network operations
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_ListSolNetworkOperations.html
   */
  public toListSolNetworkOperations() {
    return this.to('ListSolNetworkOperations');
  }

  /**
   * Grants permission to list network packages
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_ListSolNetworkPackages.html
   */
  public toListSolNetworkPackages() {
    return this.to('ListSolNetworkPackages');
  }

  /**
   * Grants permission to return a list of tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to upload function package content
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_PutSolFunctionPackageContent.html
   */
  public toPutSolFunctionPackageContent() {
    return this.to('PutSolFunctionPackageContent');
  }

  /**
   * Grants permission to upload network package content
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_PutSolNetworkPackageContent.html
   */
  public toPutSolNetworkPackageContent() {
    return this.to('PutSolNetworkPackageContent');
  }

  /**
   * Grants permission to add tags to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to terminate a network instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_TerminateSolNetworkInstance.html
   */
  public toTerminateSolNetworkInstance() {
    return this.to('TerminateSolNetworkInstance');
  }

  /**
   * Grants permission to remove tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a function package
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_UpdateSolFunctionPackage.html
   */
  public toUpdateSolFunctionPackage() {
    return this.to('UpdateSolFunctionPackage');
  }

  /**
   * Grants permission to update a network instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_UpdateSolNetworkInstance.html
   */
  public toUpdateSolNetworkInstance() {
    return this.to('UpdateSolNetworkInstance');
  }

  /**
   * Grants permission to update a network package
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_UpdateSolNetworkPackage.html
   */
  public toUpdateSolNetworkPackage() {
    return this.to('UpdateSolNetworkPackage');
  }

  /**
   * Grants permission to validate function package content
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_ValidateSolFunctionPackageContent.html
   */
  public toValidateSolFunctionPackageContent() {
    return this.to('ValidateSolFunctionPackageContent');
  }

  /**
   * Grants permission to validate network package content
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/tnb/latest/APIReference/API_ValidateSolNetworkPackageContent.html
   */
  public toValidateSolNetworkPackageContent() {
    return this.to('ValidateSolNetworkPackageContent');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelSolNetworkOperation',
      'CreateSolFunctionPackage',
      'CreateSolNetworkInstance',
      'CreateSolNetworkPackage',
      'DeleteSolFunctionPackage',
      'DeleteSolNetworkInstance',
      'DeleteSolNetworkPackage',
      'InstantiateSolNetworkInstance',
      'PutSolFunctionPackageContent',
      'PutSolNetworkPackageContent',
      'TerminateSolNetworkInstance',
      'UpdateSolFunctionPackage',
      'UpdateSolNetworkInstance',
      'UpdateSolNetworkPackage',
      'ValidateSolFunctionPackageContent',
      'ValidateSolNetworkPackageContent'
    ],
    Read: [
      'GetSolFunctionInstance',
      'GetSolFunctionPackage',
      'GetSolFunctionPackageContent',
      'GetSolFunctionPackageDescriptor',
      'GetSolNetworkInstance',
      'GetSolNetworkOperation',
      'GetSolNetworkPackage',
      'GetSolNetworkPackageContent',
      'GetSolNetworkPackageDescriptor'
    ],
    List: [
      'ListSolFunctionInstances',
      'ListSolFunctionPackages',
      'ListSolNetworkInstances',
      'ListSolNetworkOperations',
      'ListSolNetworkPackages',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type function-package to the statement
   *
   * https://docs.aws.amazon.com/tnb/latest/ug/function-packages.html
   *
   * @param functionPackageId - Identifier for the functionPackageId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFunctionPackage(functionPackageId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:tnb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:function-package/${ functionPackageId }`);
  }

  /**
   * Adds a resource of type network-package to the statement
   *
   * https://docs.aws.amazon.com/tnb/latest/ug/network-packages.html
   *
   * @param networkPackageId - Identifier for the networkPackageId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetworkPackage(networkPackageId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:tnb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:network-package/${ networkPackageId }`);
  }

  /**
   * Adds a resource of type network-instance to the statement
   *
   * https://docs.aws.amazon.com/tnb/latest/ug/network-instances.html
   *
   * @param networkInstanceId - Identifier for the networkInstanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetworkInstance(networkInstanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:tnb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:network-instance/${ networkInstanceId }`);
  }

  /**
   * Adds a resource of type function-instance to the statement
   *
   * https://docs.aws.amazon.com/tnb/latest/ug/function-packages.html
   *
   * @param functionInstanceId - Identifier for the functionInstanceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFunctionInstance(functionInstanceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:tnb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:function-instance/${ functionInstanceId }`);
  }

  /**
   * Adds a resource of type network-operation to the statement
   *
   * https://docs.aws.amazon.com/tnb/latest/ug/network-operations.html
   *
   * @param networkOperationId - Identifier for the networkOperationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNetworkOperation(networkOperationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:tnb:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:network-operation/${ networkOperationId }`);
  }

  /**
   * Filters access by checking the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateSolFunctionPackage()
   * - .toCreateSolNetworkInstance()
   * - .toCreateSolNetworkPackage()
   * - .toInstantiateSolNetworkInstance()
   * - .toTagResource()
   * - .toTerminateSolNetworkInstance()
   * - .toUpdateSolNetworkInstance()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by checking tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toGetSolFunctionInstance()
   * - .toGetSolFunctionPackage()
   * - .toGetSolFunctionPackageContent()
   * - .toGetSolFunctionPackageDescriptor()
   * - .toGetSolNetworkInstance()
   * - .toGetSolNetworkOperation()
   * - .toGetSolNetworkPackage()
   * - .toGetSolNetworkPackageContent()
   * - .toGetSolNetworkPackageDescriptor()
   * - .toListSolFunctionInstances()
   * - .toListSolFunctionPackages()
   * - .toListSolNetworkInstances()
   * - .toListSolNetworkOperations()
   * - .toListSolNetworkPackages()
   *
   * Applies to resource types:
   * - function-package
   * - network-package
   * - network-instance
   * - function-instance
   * - network-operation
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateSolFunctionPackage()
   * - .toCreateSolNetworkInstance()
   * - .toCreateSolNetworkPackage()
   * - .toInstantiateSolNetworkInstance()
   * - .toTagResource()
   * - .toTerminateSolNetworkInstance()
   * - .toUntagResource()
   * - .toUpdateSolNetworkInstance()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
