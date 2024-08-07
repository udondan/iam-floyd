import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [entityresolution](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsentityresolution.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Entityresolution extends PolicyStatement {
  public servicePrefix = 'entityresolution';

  /**
   * Statement provider for service [entityresolution](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsentityresolution.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to give an AWS service or another account permission to use an AWS Entity Resolution resources
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_AddPolicyStatement.html
   */
  public toAddPolicyStatement() {
    return this.to('AddPolicyStatement');
  }

  /**
   * Grants permission to batch delete unique Id
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_BatchDeleteUniqueId.html
   */
  public toBatchDeleteUniqueId() {
    return this.to('BatchDeleteUniqueId');
  }

  /**
   * Grants permission to create a idmapping workflow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_CreateIdMappingWorkflow.html
   */
  public toCreateIdMappingWorkflow() {
    return this.to('CreateIdMappingWorkflow');
  }

  /**
   * Grants permission to create a IdNamespace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_CreateIdNamespace.html
   */
  public toCreateIdNamespace() {
    return this.to('CreateIdNamespace');
  }

  /**
   * Grants permission to create a matching workflow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_CreateMatchingWorkflow.html
   */
  public toCreateMatchingWorkflow() {
    return this.to('CreateMatchingWorkflow');
  }

  /**
   * Grants permission to create a schema mapping
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_CreateSchemaMapping.html
   */
  public toCreateSchemaMapping() {
    return this.to('CreateSchemaMapping');
  }

  /**
   * Grants permission to delete a idmapping workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_DeleteIdMappingWorkflow.html
   */
  public toDeleteIdMappingWorkflow() {
    return this.to('DeleteIdMappingWorkflow');
  }

  /**
   * Grants permission to delete a IdNamespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_DeleteIdNamespace.html
   */
  public toDeleteIdNamespace() {
    return this.to('DeleteIdNamespace');
  }

  /**
   * Grants permission to delete a matching workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_DeleteMatchingWorkflow.html
   */
  public toDeleteMatchingWorkflow() {
    return this.to('DeleteMatchingWorkflow');
  }

  /**
   * Grants permission to delete permission given to an AWS service or another account permission to use an AWS Entity Resolution resources
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_DeletePolicyStatement.html
   */
  public toDeletePolicyStatement() {
    return this.to('DeletePolicyStatement');
  }

  /**
   * Grants permission to delete a schema mapping
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_DeleteSchemaMapping.html
   */
  public toDeleteSchemaMapping() {
    return this.to('DeleteSchemaMapping');
  }

  /**
   * Grants permission to get a idmapping job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_GetIdMappingJob.html
   */
  public toGetIdMappingJob() {
    return this.to('GetIdMappingJob');
  }

  /**
   * Grants permission to get a idmapping workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_GetIdMappingWorkflow.html
   */
  public toGetIdMappingWorkflow() {
    return this.to('GetIdMappingWorkflow');
  }

  /**
   * Grants permission to get a IdNamespace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_GetIdNamespace.html
   */
  public toGetIdNamespace() {
    return this.to('GetIdNamespace');
  }

  /**
   * Grants permission to get match Id
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_GetMatchId.html
   */
  public toGetMatchId() {
    return this.to('GetMatchId');
  }

  /**
   * Grants permission to get a matching job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_GetMatchingJob.html
   */
  public toGetMatchingJob() {
    return this.to('GetMatchingJob');
  }

  /**
   * Grants permission to get a matching workflow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_GetMatchingWorkflow.html
   */
  public toGetMatchingWorkflow() {
    return this.to('GetMatchingWorkflow');
  }

  /**
   * Grants permission to get a resource policy for an AWS Entity Resolution resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_GetPolicy.html
   */
  public toGetPolicy() {
    return this.to('GetPolicy');
  }

  /**
   * Grants permission to get provider service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_GetProviderService.html
   */
  public toGetProviderService() {
    return this.to('GetProviderService');
  }

  /**
   * Grants permission to get a schema mapping
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_GetSchemaMapping.html
   */
  public toGetSchemaMapping() {
    return this.to('GetSchemaMapping');
  }

  /**
   * Grants permission to list idmapping jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_ListIdMappingJobs.html
   */
  public toListIdMappingJobs() {
    return this.to('ListIdMappingJobs');
  }

  /**
   * Grants permission to list idmapping workflows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_ListIdMappingWorkflows.html
   */
  public toListIdMappingWorkflows() {
    return this.to('ListIdMappingWorkflows');
  }

  /**
   * Grants permission to list IdNamespaces
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_ListIdNamespaces.html
   */
  public toListIdNamespaces() {
    return this.to('ListIdNamespaces');
  }

  /**
   * Grants permission to list matching jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_ListMatchingJobs.html
   */
  public toListMatchingJobs() {
    return this.to('ListMatchingJobs');
  }

  /**
   * Grants permission to list matching workflows
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_ListMatchingWorkflows.html
   */
  public toListMatchingWorkflows() {
    return this.to('ListMatchingWorkflows');
  }

  /**
   * Grants permission to list provider service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_ListProviderServices.html
   */
  public toListProviderServices() {
    return this.to('ListProviderServices');
  }

  /**
   * Grants permission to list schema mappings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_ListSchemaMappings.html
   */
  public toListSchemaMappings() {
    return this.to('ListSchemaMappings');
  }

  /**
   * Grants permission to List tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to put a resource policy for an AWS Entity Resolution resources
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_PutPolicy.html
   */
  public toPutPolicy() {
    return this.to('PutPolicy');
  }

  /**
   * Grants permission to start a idmapping job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_StartIdMappingJob.html
   */
  public toStartIdMappingJob() {
    return this.to('StartIdMappingJob');
  }

  /**
   * Grants permission to start a matching job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_StartMatchingJob.html
   */
  public toStartMatchingJob() {
    return this.to('StartMatchingJob');
  }

  /**
   * Grants permission to adds tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a idmapping workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_UpdateIdMappingWorkflow.html
   */
  public toUpdateIdMappingWorkflow() {
    return this.to('UpdateIdMappingWorkflow');
  }

  /**
   * Grants permission to update a IdNamespace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_UpdateIdNamespace.html
   */
  public toUpdateIdNamespace() {
    return this.to('UpdateIdNamespace');
  }

  /**
   * Grants permission to update a matching workflow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_UpdateMatchingWorkflow.html
   */
  public toUpdateMatchingWorkflow() {
    return this.to('UpdateMatchingWorkflow');
  }

  /**
   * Grants permission to update a schema mapping
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_UpdateSchemaMapping.html
   */
  public toUpdateSchemaMapping() {
    return this.to('UpdateSchemaMapping');
  }

  /**
   * Grants permission to give an AWS service or another account permission to use IdNamespace within a workflow
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_UseIdNamespace.html
   */
  public toUseIdNamespace() {
    return this.to('UseIdNamespace');
  }

  /**
   * Grants permission to give an AWS service or another account permission to use workflow within a IdNamespace
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/entityresolution/latest/apireference/API_UseWorkflow.html
   */
  public toUseWorkflow() {
    return this.to('UseWorkflow');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AddPolicyStatement',
      'DeletePolicyStatement',
      'PutPolicy',
      'UseIdNamespace',
      'UseWorkflow'
    ],
    Write: [
      'BatchDeleteUniqueId',
      'CreateIdMappingWorkflow',
      'CreateIdNamespace',
      'CreateMatchingWorkflow',
      'CreateSchemaMapping',
      'DeleteIdMappingWorkflow',
      'DeleteIdNamespace',
      'DeleteMatchingWorkflow',
      'DeleteSchemaMapping',
      'StartIdMappingJob',
      'StartMatchingJob',
      'UpdateIdMappingWorkflow',
      'UpdateIdNamespace',
      'UpdateMatchingWorkflow',
      'UpdateSchemaMapping'
    ],
    Read: [
      'GetIdMappingJob',
      'GetIdMappingWorkflow',
      'GetIdNamespace',
      'GetMatchId',
      'GetMatchingJob',
      'GetMatchingWorkflow',
      'GetPolicy',
      'GetProviderService',
      'GetSchemaMapping',
      'ListTagsForResource'
    ],
    List: [
      'ListIdMappingJobs',
      'ListIdMappingWorkflows',
      'ListIdNamespaces',
      'ListMatchingJobs',
      'ListMatchingWorkflows',
      'ListProviderServices',
      'ListSchemaMappings'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type MatchingWorkflow to the statement
   *
   * https://docs.aws.amazon.com/entityresolution/latest/userguide/
   *
   * @param workflowName - Identifier for the workflowName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMatchingWorkflow(workflowName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:entityresolution:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:matchingworkflow/${ workflowName }`);
  }

  /**
   * Adds a resource of type SchemaMapping to the statement
   *
   * https://docs.aws.amazon.com/entityresolution/latest/userguide/
   *
   * @param schemaName - Identifier for the schemaName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSchemaMapping(schemaName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:entityresolution:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:schemamapping/${ schemaName }`);
  }

  /**
   * Adds a resource of type IdMappingWorkflow to the statement
   *
   * https://docs.aws.amazon.com/entityresolution/latest/userguide/
   *
   * @param workflowName - Identifier for the workflowName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdMappingWorkflow(workflowName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:entityresolution:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:idmappingworkflow/${ workflowName }`);
  }

  /**
   * Adds a resource of type ProviderService to the statement
   *
   * https://docs.aws.amazon.com/entityresolution/latest/userguide/
   *
   * @param providerName - Identifier for the providerName.
   * @param providerServiceName - Identifier for the providerServiceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProviderService(providerName: string, providerServiceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:entityresolution:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:providerservice/${ providerName }/${ providerServiceName }`);
  }

  /**
   * Adds a resource of type IdNamespace to the statement
   *
   * https://docs.aws.amazon.com/entityresolution/latest/userguide/
   *
   * @param idNamespaceName - Identifier for the idNamespaceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdNamespace(idNamespaceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:entityresolution:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:idnamespace/${ idNamespaceName }`);
  }

  /**
   * Filters access by a key that is present in the request the user makes to the entity resolution service
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateIdMappingWorkflow()
   * - .toCreateIdNamespace()
   * - .toCreateMatchingWorkflow()
   * - .toCreateSchemaMapping()
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
   * Filters access by a tag key and value pair
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to resource types:
   * - MatchingWorkflow
   * - SchemaMapping
   * - IdMappingWorkflow
   * - ProviderService
   * - IdNamespace
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the list of all the tag key names present in the request the user makes to the entity resolution service
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-permissions.html#iam-contextkeys
   *
   * Applies to actions:
   * - .toCreateIdMappingWorkflow()
   * - .toCreateIdNamespace()
   * - .toCreateMatchingWorkflow()
   * - .toCreateSchemaMapping()
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
