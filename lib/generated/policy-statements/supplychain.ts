import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to create DataIntegrationFlow that can transform from multiple sources to one target
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toCreateDataIntegrationFlow() {
    return this.to('CreateDataIntegrationFlow');
  }

  /**
   * Grants permission to create the data lake dataset
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toCreateDataLakeDataset() {
    return this.to('CreateDataLakeDataset');
  }

  /**
   * Grants permission to create the data lake namespace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toCreateDataLakeNamespace() {
    return this.to('CreateDataLakeNamespace');
  }

  /**
   * Grants permission to create a new AWS Supply Chain instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
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
   * Grants permission to delete the DataIntegrationFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toDeleteDataIntegrationFlow() {
    return this.to('DeleteDataIntegrationFlow');
  }

  /**
   * Grants permission to delete the data lake dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toDeleteDataLakeDataset() {
    return this.to('DeleteDataLakeDataset');
  }

  /**
   * Grants permission to delete the data lake namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toDeleteDataLakeNamespace() {
    return this.to('DeleteDataLakeNamespace');
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
   * Grants permission to get a DataIntegrationEvent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toGetDataIntegrationEvent() {
    return this.to('GetDataIntegrationEvent');
  }

  /**
   * Grants permission to get the DataIntegrationFlow details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toGetDataIntegrationFlow() {
    return this.to('GetDataIntegrationFlow');
  }

  /**
   * Grants permission to get a particular execution of one specified DataIntegrationFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toGetDataIntegrationFlowExecution() {
    return this.to('GetDataIntegrationFlowExecution');
  }

  /**
   * Grants permission to get the dataset details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toGetDataLakeDataset() {
    return this.to('GetDataLakeDataset');
  }

  /**
   * Grants permission to get the namespace details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toGetDataLakeNamespace() {
    return this.to('GetDataLakeNamespace');
  }

  /**
   * Grants permission to view details of an AWS Supply Chain instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toGetInstance() {
    return this.to('GetInstance');
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
   * Grants permission to list all DataIntegrationEvents under an instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toListDataIntegrationEvents() {
    return this.to('ListDataIntegrationEvents');
  }

  /**
   * Grants permission to list all executions of one specified DataIntegrationFlow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toListDataIntegrationFlowExecutions() {
    return this.to('ListDataIntegrationFlowExecutions');
  }

  /**
   * Grants permission to list all the DataIntegrationFlows in a paginated way
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toListDataIntegrationFlows() {
    return this.to('ListDataIntegrationFlows');
  }

  /**
   * Grants permission to list the data lake datasets under specific instance or namespace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toListDataLakeDatasets() {
    return this.to('ListDataLakeDatasets');
  }

  /**
   * Grants permission to list the data lake namespaces under specific instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toListDataLakeNamespaces() {
    return this.to('ListDataLakeNamespaces');
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
   * Grants permission to list tags for an AWS Supply Chain resource
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
   * Grants permission to create a DataIntegrationEvent which will ingest data in real-time
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toSendDataIntegrationEvent() {
    return this.to('SendDataIntegrationEvent');
  }

  /**
   * Grants permission to tag an AWS Supply Chain resource
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
   * Grants permission to remove tag from an AWS Supply Chain resource
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
   * Grants permission to update the DataIntegrationFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toUpdateDataIntegrationFlow() {
    return this.to('UpdateDataIntegrationFlow');
  }

  /**
   * Grants permission to update the data lake dataset
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toUpdateDataLakeDataset() {
    return this.to('UpdateDataLakeDataset');
  }

  /**
   * Grants permission to update the data lake namespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   */
  public toUpdateDataLakeNamespace() {
    return this.to('UpdateDataLakeNamespace');
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
      'CreateDataIntegrationFlow',
      'CreateDataLakeDataset',
      'CreateDataLakeNamespace',
      'CreateInstance',
      'CreateSSOApplication',
      'DeleteDataIntegrationFlow',
      'DeleteDataLakeDataset',
      'DeleteDataLakeNamespace',
      'DeleteInstance',
      'DeleteSSOApplication',
      'RemoveAdminPermissionsForUser',
      'SendDataIntegrationEvent',
      'UpdateDataIntegrationFlow',
      'UpdateDataLakeDataset',
      'UpdateDataLakeNamespace',
      'UpdateInstance'
    ],
    Read: [
      'DescribeInstance',
      'GetBillOfMaterialsImportJob',
      'GetDataIntegrationEvent',
      'GetDataIntegrationFlow',
      'GetDataIntegrationFlowExecution',
      'GetDataLakeDataset',
      'GetDataLakeNamespace',
      'GetInstance'
    ],
    List: [
      'ListAdminUsers',
      'ListDataIntegrationEvents',
      'ListDataIntegrationFlowExecutions',
      'ListDataIntegrationFlows',
      'ListDataLakeDatasets',
      'ListDataLakeNamespaces',
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
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
   * Adds a resource of type data-integration-flow to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param flowName - Identifier for the flowName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataIntegrationFlow(instanceId: string, flowName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:scn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/data-integration-flows/${ flowName }`);
  }

  /**
   * Adds a resource of type namespace to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param namespace - Identifier for the namespace.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onNamespace(instanceId: string, namespace: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:scn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/namespaces/${ namespace }`);
  }

  /**
   * Adds a resource of type dataset to the statement
   *
   * https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupplychain.html
   *
   * @param instanceId - Identifier for the instanceId.
   * @param namespace - Identifier for the namespace.
   * @param datasetName - Identifier for the datasetName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataset(instanceId: string, namespace: string, datasetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:scn:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:instance/${ instanceId }/namespaces/${ namespace }/datasets/${ datasetName }`);
  }

  /**
   * Filters access by using tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateDataIntegrationFlow()
   * - .toCreateDataLakeDataset()
   * - .toCreateDataLakeNamespace()
   * - .toCreateInstance()
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
   * Applies to resource types:
   * - instance
   * - data-integration-flow
   * - namespace
   * - dataset
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
   * - .toCreateDataIntegrationFlow()
   * - .toCreateDataLakeDataset()
   * - .toCreateDataLakeNamespace()
   * - .toCreateInstance()
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
