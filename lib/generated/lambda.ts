import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [lambda](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslambda.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Lambda extends PolicyStatement {
  public servicePrefix = 'lambda';

  /**
   * Statement provider for service [lambda](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awslambda.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add permissions to the resource-based policy of a version of an AWS Lambda layer
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_AddLayerVersionPermission.html
   */
  public toAddLayerVersionPermission() {
    return this.to('AddLayerVersionPermission');
  }

  /**
   * Grants permission to give an AWS service or another account permission to use an AWS Lambda function
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPrincipal()
   * - .ifFunctionUrlAuthType()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html
   */
  public toAddPermission() {
    return this.to('AddPermission');
  }

  /**
   * Grants permission to create an alias for a Lambda function version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_CreateAlias.html
   */
  public toCreateAlias() {
    return this.to('CreateAlias');
  }

  /**
   * Grants permission to create an AWS Lambda code signing config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_CreateCodeSigningConfig.html
   */
  public toCreateCodeSigningConfig() {
    return this.to('CreateCodeSigningConfig');
  }

  /**
   * Grants permission to create a mapping between an event source and an AWS Lambda function
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFunctionArn()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_CreateEventSourceMapping.html
   */
  public toCreateEventSourceMapping() {
    return this.to('CreateEventSourceMapping');
  }

  /**
   * Grants permission to create an AWS Lambda function
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifLayer()
   * - .ifVpcIds()
   * - .ifSubnetIds()
   * - .ifSecurityGroupIds()
   * - .ifCodeSigningConfigArn()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html
   */
  public toCreateFunction() {
    return this.to('CreateFunction');
  }

  /**
   * Grants permission to create a function url configuration for a Lambda function
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFunctionUrlAuthType()
   * - .ifFunctionArn()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunctionUrlConfig.html
   */
  public toCreateFunctionUrlConfig() {
    return this.to('CreateFunctionUrlConfig');
  }

  /**
   * Grants permission to delete an AWS Lambda function alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteAlias.html
   */
  public toDeleteAlias() {
    return this.to('DeleteAlias');
  }

  /**
   * Grants permission to delete an AWS Lambda code signing config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteCodeSigningConfig.html
   */
  public toDeleteCodeSigningConfig() {
    return this.to('DeleteCodeSigningConfig');
  }

  /**
   * Grants permission to delete an AWS Lambda event source mapping
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFunctionArn()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteEventSourceMapping.html
   */
  public toDeleteEventSourceMapping() {
    return this.to('DeleteEventSourceMapping');
  }

  /**
   * Grants permission to delete an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunction.html
   */
  public toDeleteFunction() {
    return this.to('DeleteFunction');
  }

  /**
   * Grants permission to detach a code signing config from an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionCodeSigningConfig.html
   */
  public toDeleteFunctionCodeSigningConfig() {
    return this.to('DeleteFunctionCodeSigningConfig');
  }

  /**
   * Grants permission to remove a concurrent execution limit from an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionConcurrency.html
   */
  public toDeleteFunctionConcurrency() {
    return this.to('DeleteFunctionConcurrency');
  }

  /**
   * Grants permission to delete the configuration for asynchronous invocation for an AWS Lambda function, version, or alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionEventInvokeConfig.html
   */
  public toDeleteFunctionEventInvokeConfig() {
    return this.to('DeleteFunctionEventInvokeConfig');
  }

  /**
   * Grants permission to delete function url configuration for a Lambda function
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFunctionUrlAuthType()
   * - .ifFunctionArn()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionUrlConfig.html
   */
  public toDeleteFunctionUrlConfig() {
    return this.to('DeleteFunctionUrlConfig');
  }

  /**
   * Grants permission to delete a version of an AWS Lambda layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteLayerVersion.html
   */
  public toDeleteLayerVersion() {
    return this.to('DeleteLayerVersion');
  }

  /**
   * Grants permission to delete the provisioned concurrency configuration for an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteProvisionedConcurrencyConfig.html
   */
  public toDeleteProvisionedConcurrencyConfig() {
    return this.to('DeleteProvisionedConcurrencyConfig');
  }

  /**
   * Grants permission to disable replication for a Lambda@Edge function
   *
   * Access Level: Permissions management
   */
  public toDisableReplication() {
    return this.to('DisableReplication');
  }

  /**
   * Grants permission to enable replication for a Lambda@Edge function
   *
   * Access Level: Permissions management
   */
  public toEnableReplication() {
    return this.to('EnableReplication');
  }

  /**
   * Grants permission to view details about an account's limits and usage in an AWS Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetAccountSettings.html
   */
  public toGetAccountSettings() {
    return this.to('GetAccountSettings');
  }

  /**
   * Grants permission to view details about an AWS Lambda function alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetAlias.html
   */
  public toGetAlias() {
    return this.to('GetAlias');
  }

  /**
   * Grants permission to view details about an AWS Lambda code signing config
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetCodeSigningConfig.html
   */
  public toGetCodeSigningConfig() {
    return this.to('GetCodeSigningConfig');
  }

  /**
   * Grants permission to view details about an AWS Lambda event source mapping
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifFunctionArn()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetEventSourceMapping.html
   */
  public toGetEventSourceMapping() {
    return this.to('GetEventSourceMapping');
  }

  /**
   * Grants permission to view details about an AWS Lambda function
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html
   */
  public toGetFunction() {
    return this.to('GetFunction');
  }

  /**
   * Grants permission to view the code signing config arn attached to an AWS Lambda function
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionCodeSigningConfig.html
   */
  public toGetFunctionCodeSigningConfig() {
    return this.to('GetFunctionCodeSigningConfig');
  }

  /**
   * Grants permission to view details about the reserved concurrency configuration for a function
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConcurrency.html
   */
  public toGetFunctionConcurrency() {
    return this.to('GetFunctionConcurrency');
  }

  /**
   * Grants permission to view details about the version-specific settings of an AWS Lambda function or version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html
   */
  public toGetFunctionConfiguration() {
    return this.to('GetFunctionConfiguration');
  }

  /**
   * Grants permission to view the configuration for asynchronous invocation for a function, version, or alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionEventInvokeConfig.html
   */
  public toGetFunctionEventInvokeConfig() {
    return this.to('GetFunctionEventInvokeConfig');
  }

  /**
   * Grants permission to read function url configuration for a Lambda function
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifFunctionUrlAuthType()
   * - .ifFunctionArn()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionUrlConfig.html
   */
  public toGetFunctionUrlConfig() {
    return this.to('GetFunctionUrlConfig');
  }

  /**
   * Grants permission to view details about a version of an AWS Lambda layer. Note this action also supports GetLayerVersionByArn API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersion.html
   */
  public toGetLayerVersion() {
    return this.to('GetLayerVersion');
  }

  /**
   * Grants permission to view the resource-based policy for a version of an AWS Lambda layer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionPolicy.html
   */
  public toGetLayerVersionPolicy() {
    return this.to('GetLayerVersionPolicy');
  }

  /**
   * Grants permission to view the resource-based policy for an AWS Lambda function, version, or alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetPolicy.html
   */
  public toGetPolicy() {
    return this.to('GetPolicy');
  }

  /**
   * Grants permission to view the provisioned concurrency configuration for an AWS Lambda function's alias or version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetProvisionedConcurrencyConfig.html
   */
  public toGetProvisionedConcurrencyConfig() {
    return this.to('GetProvisionedConcurrencyConfig');
  }

  /**
   * Grants permission to invoke a function asynchronously (Deprecated)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeAsync.html
   */
  public toInvokeAsync() {
    return this.to('InvokeAsync');
  }

  /**
   * Grants permission to invoke an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html
   */
  public toInvokeFunction() {
    return this.to('InvokeFunction');
  }

  /**
   * Grants permission to invoke an AWS Lambda function through url
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFunctionUrlAuthType()
   * - .ifFunctionArn()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeFunctionUrl.html
   */
  public toInvokeFunctionUrl() {
    return this.to('InvokeFunctionUrl');
  }

  /**
   * Grants permission to retrieve a list of aliases for an AWS Lambda function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListAliases.html
   */
  public toListAliases() {
    return this.to('ListAliases');
  }

  /**
   * Grants permission to retrieve a list of AWS Lambda code signing configs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListCodeSigningConfigs.html
   */
  public toListCodeSigningConfigs() {
    return this.to('ListCodeSigningConfigs');
  }

  /**
   * Grants permission to retrieve a list of AWS Lambda event source mappings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListEventSourceMappings.html
   */
  public toListEventSourceMappings() {
    return this.to('ListEventSourceMappings');
  }

  /**
   * Grants permission to retrieve a list of configurations for asynchronous invocation for a function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionEventInvokeConfigs.html
   */
  public toListFunctionEventInvokeConfigs() {
    return this.to('ListFunctionEventInvokeConfigs');
  }

  /**
   * Grants permission to read function url configurations for a function
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifFunctionUrlAuthType()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionUrlConfigs.html
   */
  public toListFunctionUrlConfigs() {
    return this.to('ListFunctionUrlConfigs');
  }

  /**
   * Grants permission to retrieve a list of AWS Lambda functions, with the version-specific configuration of each function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctions.html
   */
  public toListFunctions() {
    return this.to('ListFunctions');
  }

  /**
   * Grants permission to retrieve a list of AWS Lambda functions by the code signing config assigned
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionsByCodeSigningConfig.html
   */
  public toListFunctionsByCodeSigningConfig() {
    return this.to('ListFunctionsByCodeSigningConfig');
  }

  /**
   * Grants permission to retrieve a list of versions of an AWS Lambda layer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html
   */
  public toListLayerVersions() {
    return this.to('ListLayerVersions');
  }

  /**
   * Grants permission to retrieve a list of AWS Lambda layers, with details about the latest version of each layer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html
   */
  public toListLayers() {
    return this.to('ListLayers');
  }

  /**
   * Grants permission to retrieve a list of provisioned concurrency configurations for an AWS Lambda function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListProvisionedConcurrencyConfigs.html
   */
  public toListProvisionedConcurrencyConfigs() {
    return this.to('ListProvisionedConcurrencyConfigs');
  }

  /**
   * Grants permission to retrieve a list of tags for an AWS Lambda function
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Grants permission to retrieve a list of versions for an AWS Lambda function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListVersionsByFunction.html
   */
  public toListVersionsByFunction() {
    return this.to('ListVersionsByFunction');
  }

  /**
   * Grants permission to create an AWS Lambda layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html
   */
  public toPublishLayerVersion() {
    return this.to('PublishLayerVersion');
  }

  /**
   * Grants permission to create an AWS Lambda function version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PublishVersion.html
   */
  public toPublishVersion() {
    return this.to('PublishVersion');
  }

  /**
   * Grants permission to attach a code signing config to an AWS Lambda function
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCodeSigningConfigArn()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionCodeSigningConfig.html
   */
  public toPutFunctionCodeSigningConfig() {
    return this.to('PutFunctionCodeSigningConfig');
  }

  /**
   * Grants permission to configure reserved concurrency for an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionConcurrency.html
   */
  public toPutFunctionConcurrency() {
    return this.to('PutFunctionConcurrency');
  }

  /**
   * Grants permission to configures options for asynchronous invocation on an AWS Lambda function, version, or alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionEventInvokeConfig.html
   */
  public toPutFunctionEventInvokeConfig() {
    return this.to('PutFunctionEventInvokeConfig');
  }

  /**
   * Grants permission to configure provisioned concurrency for an AWS Lambda function's alias or version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PutProvisionedConcurrencyConfig.html
   */
  public toPutProvisionedConcurrencyConfig() {
    return this.to('PutProvisionedConcurrencyConfig');
  }

  /**
   * Grants permission to remove a statement from the permissions policy for a version of an AWS Lambda layer
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_RemoveLayerVersionPermission.html
   */
  public toRemoveLayerVersionPermission() {
    return this.to('RemoveLayerVersionPermission');
  }

  /**
   * Grants permission to revoke function-use permission from an AWS service or another account
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPrincipal()
   * - .ifFunctionUrlAuthType()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_RemovePermission.html
   */
  public toRemovePermission() {
    return this.to('RemovePermission');
  }

  /**
   * Grants permission to add tags to an AWS Lambda function
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_TagResources.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from an AWS Lambda function
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the configuration of an AWS Lambda function's alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateAlias.html
   */
  public toUpdateAlias() {
    return this.to('UpdateAlias');
  }

  /**
   * Grants permission to update an AWS Lambda code signing config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateCodeSigningConfig.html
   */
  public toUpdateCodeSigningConfig() {
    return this.to('UpdateCodeSigningConfig');
  }

  /**
   * Grants permission to update the configuration of an AWS Lambda event source mapping
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFunctionArn()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateEventSourceMapping.html
   */
  public toUpdateEventSourceMapping() {
    return this.to('UpdateEventSourceMapping');
  }

  /**
   * Grants permission to update the code of an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCode.html
   */
  public toUpdateFunctionCode() {
    return this.to('UpdateFunctionCode');
  }

  /**
   * Grants permission to update the code signing config of an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCodeSigningConfig.html
   */
  public toUpdateFunctionCodeSigningConfig() {
    return this.to('UpdateFunctionCodeSigningConfig');
  }

  /**
   * Grants permission to modify the version-specific settings of an AWS Lambda function
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifLayer()
   * - .ifVpcIds()
   * - .ifSubnetIds()
   * - .ifSecurityGroupIds()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionConfiguration.html
   */
  public toUpdateFunctionConfiguration() {
    return this.to('UpdateFunctionConfiguration');
  }

  /**
   * Grants permission to modify the configuration for asynchronous invocation for an AWS Lambda function, version, or alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionEventInvokeConfig.html
   */
  public toUpdateFunctionEventInvokeConfig() {
    return this.to('UpdateFunctionEventInvokeConfig');
  }

  /**
   * Grants permission to update a function url configuration for a Lambda function
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifFunctionUrlAuthType()
   * - .ifFunctionArn()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionUrlConfig.html
   */
  public toUpdateFunctionUrlConfig() {
    return this.to('UpdateFunctionUrlConfig');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'AddLayerVersionPermission',
      'AddPermission',
      'DisableReplication',
      'EnableReplication',
      'RemoveLayerVersionPermission',
      'RemovePermission'
    ],
    Write: [
      'CreateAlias',
      'CreateCodeSigningConfig',
      'CreateEventSourceMapping',
      'CreateFunction',
      'CreateFunctionUrlConfig',
      'DeleteAlias',
      'DeleteCodeSigningConfig',
      'DeleteEventSourceMapping',
      'DeleteFunction',
      'DeleteFunctionCodeSigningConfig',
      'DeleteFunctionConcurrency',
      'DeleteFunctionEventInvokeConfig',
      'DeleteFunctionUrlConfig',
      'DeleteLayerVersion',
      'DeleteProvisionedConcurrencyConfig',
      'InvokeAsync',
      'InvokeFunction',
      'InvokeFunctionUrl',
      'PublishLayerVersion',
      'PublishVersion',
      'PutFunctionCodeSigningConfig',
      'PutFunctionConcurrency',
      'PutFunctionEventInvokeConfig',
      'PutProvisionedConcurrencyConfig',
      'UpdateAlias',
      'UpdateCodeSigningConfig',
      'UpdateEventSourceMapping',
      'UpdateFunctionCode',
      'UpdateFunctionCodeSigningConfig',
      'UpdateFunctionConfiguration',
      'UpdateFunctionEventInvokeConfig',
      'UpdateFunctionUrlConfig'
    ],
    Read: [
      'GetAccountSettings',
      'GetAlias',
      'GetCodeSigningConfig',
      'GetEventSourceMapping',
      'GetFunction',
      'GetFunctionCodeSigningConfig',
      'GetFunctionConcurrency',
      'GetFunctionConfiguration',
      'GetFunctionEventInvokeConfig',
      'GetFunctionUrlConfig',
      'GetLayerVersion',
      'GetLayerVersionPolicy',
      'GetPolicy',
      'GetProvisionedConcurrencyConfig',
      'ListTags'
    ],
    List: [
      'ListAliases',
      'ListCodeSigningConfigs',
      'ListEventSourceMappings',
      'ListFunctionEventInvokeConfigs',
      'ListFunctionUrlConfigs',
      'ListFunctions',
      'ListFunctionsByCodeSigningConfig',
      'ListLayerVersions',
      'ListLayers',
      'ListProvisionedConcurrencyConfigs',
      'ListVersionsByFunction'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type code signing config to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param codeSigningConfigId - Identifier for the codeSigningConfigId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCodeSigningConfig(codeSigningConfigId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lambda.defaultPartition }:lambda:${ region || '*' }:${ account || '*' }:code-signing-config:${ codeSigningConfigId }`);
  }

  /**
   * Adds a resource of type eventSourceMapping to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEventSourceMapping(uUID: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lambda.defaultPartition }:lambda:${ region || '*' }:${ account || '*' }:event-source-mapping:${ uUID }`);
  }

  /**
   * Adds a resource of type function to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param functionName - Identifier for the functionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFunction(functionName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lambda.defaultPartition }:lambda:${ region || '*' }:${ account || '*' }:function:${ functionName }`);
  }

  /**
   * Adds a resource of type function alias to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param functionName - Identifier for the functionName.
   * @param alias - Identifier for the alias.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFunctionAlias(functionName: string, alias: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lambda.defaultPartition }:lambda:${ region || '*' }:${ account || '*' }:function:${ functionName }:${ alias }`);
  }

  /**
   * Adds a resource of type function version to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param functionName - Identifier for the functionName.
   * @param version - Identifier for the version.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFunctionVersion(functionName: string, version: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lambda.defaultPartition }:lambda:${ region || '*' }:${ account || '*' }:function:${ functionName }:${ version }`);
  }

  /**
   * Adds a resource of type layer to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param layerName - Identifier for the layerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onLayer(layerName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lambda.defaultPartition }:lambda:${ region || '*' }:${ account || '*' }:layer:${ layerName }`);
  }

  /**
   * Adds a resource of type layerVersion to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param layerName - Identifier for the layerName.
   * @param layerVersion - Identifier for the layerVersion.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onLayerVersion(layerName: string, layerVersion: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Lambda.defaultPartition }:lambda:${ region || '*' }:${ account || '*' }:layer:${ layerName }:${ layerVersion }`);
  }

  /**
   * Filters access by the ARN of an AWS Lambda code signing config
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * Applies to actions:
   * - .toCreateFunction()
   * - .toPutFunctionCodeSigningConfig()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCodeSigningConfigArn(value: string | string[], operator?: Operator | string) {
    return this.if(`CodeSigningConfigArn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of an AWS Lambda function
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * Applies to actions:
   * - .toCreateEventSourceMapping()
   * - .toCreateFunctionUrlConfig()
   * - .toDeleteEventSourceMapping()
   * - .toDeleteFunctionUrlConfig()
   * - .toGetEventSourceMapping()
   * - .toGetFunctionUrlConfig()
   * - .toInvokeFunctionUrl()
   * - .toUpdateEventSourceMapping()
   * - .toUpdateFunctionUrlConfig()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifFunctionArn(value: string | string[], operator?: Operator | string) {
    return this.if(`FunctionArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by authorization type specified in request. Available during CreateFunctionUrlConfig, UpdateFunctionUrlConfig, DeleteFunctionUrlConfig, GetFunctionUrlConfig, ListFunctionUrlConfig, AddPermission and RemovePermission operations
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * Applies to actions:
   * - .toAddPermission()
   * - .toCreateFunctionUrlConfig()
   * - .toDeleteFunctionUrlConfig()
   * - .toGetFunctionUrlConfig()
   * - .toInvokeFunctionUrl()
   * - .toListFunctionUrlConfigs()
   * - .toRemovePermission()
   * - .toUpdateFunctionUrlConfig()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFunctionUrlAuthType(value: string | string[], operator?: Operator | string) {
    return this.if(`FunctionUrlAuthType`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of a version of an AWS Lambda layer
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * Applies to actions:
   * - .toCreateFunction()
   * - .toUpdateFunctionConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLayer(value: string | string[], operator?: Operator | string) {
    return this.if(`Layer`, value, operator || 'StringLike');
  }

  /**
   * Filters access by restricting the AWS service or account that can invoke a function
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * Applies to actions:
   * - .toAddPermission()
   * - .toRemovePermission()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrincipal(value: string | string[], operator?: Operator | string) {
    return this.if(`Principal`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of security groups configured for the AWS Lambda function
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * Applies to actions:
   * - .toCreateFunction()
   * - .toUpdateFunctionConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecurityGroupIds(value: string | string[], operator?: Operator | string) {
    return this.if(`SecurityGroupIds`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of the AWS Lambda function from which the request originated
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifSourceFunctionArn(value: string | string[], operator?: Operator | string) {
    return this.if(`SourceFunctionArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ID of subnets configured for the AWS Lambda function
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * Applies to actions:
   * - .toCreateFunction()
   * - .toUpdateFunctionConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubnetIds(value: string | string[], operator?: Operator | string) {
    return this.if(`SubnetIds`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of the VPC configured for the AWS Lambda function
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * Applies to actions:
   * - .toCreateFunction()
   * - .toUpdateFunctionConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcIds(value: string | string[], operator?: Operator | string) {
    return this.if(`VpcIds`, value, operator || 'StringLike');
  }
}
