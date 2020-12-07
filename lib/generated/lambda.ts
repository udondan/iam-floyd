import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
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
    this.to('lambda:AddLayerVersionPermission');
    return this;
  }

  /**
   * Grants permission to give an AWS service or another account permission to use an AWS Lambda function
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPrincipal()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html
   */
  public toAddPermission() {
    this.to('lambda:AddPermission');
    return this;
  }

  /**
   * Grants permission to create an alias for a Lambda function version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_CreateAlias.html
   */
  public toCreateAlias() {
    this.to('lambda:CreateAlias');
    return this;
  }

  /**
   * Grants permission to create an AWS Lambda code signing config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_CreateCodeSigningConfig.html
   */
  public toCreateCodeSigningConfig() {
    this.to('lambda:CreateCodeSigningConfig');
    return this;
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
    this.to('lambda:CreateEventSourceMapping');
    return this;
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
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_CreateFunction.html
   */
  public toCreateFunction() {
    this.to('lambda:CreateFunction');
    return this;
  }

  /**
   * Grants permission to delete an AWS Lambda function alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteAlias.html
   */
  public toDeleteAlias() {
    this.to('lambda:DeleteAlias');
    return this;
  }

  /**
   * Grants permission to delete an AWS Lambda code signing config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteCodeSigningConfig.html
   */
  public toDeleteCodeSigningConfig() {
    this.to('lambda:DeleteCodeSigningConfig');
    return this;
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
    this.to('lambda:DeleteEventSourceMapping');
    return this;
  }

  /**
   * Grants permission to delete an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunction.html
   */
  public toDeleteFunction() {
    this.to('lambda:DeleteFunction');
    return this;
  }

  /**
   * Grants permission to detach a code signing config from an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionCodeSigningConfig.html
   */
  public toDeleteFunctionCodeSigningConfig() {
    this.to('lambda:DeleteFunctionCodeSigningConfig');
    return this;
  }

  /**
   * Grants permission to remove a concurrent execution limit from an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionConcurrency.html
   */
  public toDeleteFunctionConcurrency() {
    this.to('lambda:DeleteFunctionConcurrency');
    return this;
  }

  /**
   * Grants permission to delete the configuration for asynchronous invocation for an AWS Lambda function, version, or alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteFunctionEventInvokeConfig.html
   */
  public toDeleteFunctionEventInvokeConfig() {
    this.to('lambda:DeleteFunctionEventInvokeConfig');
    return this;
  }

  /**
   * Grants permission to delete a version of an AWS Lambda layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteLayerVersion.html
   */
  public toDeleteLayerVersion() {
    this.to('lambda:DeleteLayerVersion');
    return this;
  }

  /**
   * Grants permission to delete the provisioned concurrency configuration for an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_DeleteProvisionedConcurrencyConfig.html
   */
  public toDeleteProvisionedConcurrencyConfig() {
    this.to('lambda:DeleteProvisionedConcurrencyConfig');
    return this;
  }

  /**
   * Grants permission to disable replication for a Lambda@Edge function
   *
   * Access Level: Permissions management
   */
  public toDisableReplication() {
    this.to('lambda:DisableReplication');
    return this;
  }

  /**
   * Grants permission to enable replication for a Lambda@Edge function
   *
   * Access Level: Permissions management
   */
  public toEnableReplication() {
    this.to('lambda:EnableReplication');
    return this;
  }

  /**
   * Grants permission to view details about an account's limits and usage in an AWS Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetAccountSettings.html
   */
  public toGetAccountSettings() {
    this.to('lambda:GetAccountSettings');
    return this;
  }

  /**
   * Grants permission to view details about an AWS Lambda function alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetAlias.html
   */
  public toGetAlias() {
    this.to('lambda:GetAlias');
    return this;
  }

  /**
   * Grants permission to view details about an AWS Lambda code signing config
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetCodeSigningConfig.html
   */
  public toGetCodeSigningConfig() {
    this.to('lambda:GetCodeSigningConfig');
    return this;
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
    this.to('lambda:GetEventSourceMapping');
    return this;
  }

  /**
   * Grants permission to view details about an AWS Lambda function
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html
   */
  public toGetFunction() {
    this.to('lambda:GetFunction');
    return this;
  }

  /**
   * Grants permission to view the code signing config arn attached to an AWS Lambda function
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionCodeSigningConfig.html
   */
  public toGetFunctionCodeSigningConfig() {
    this.to('lambda:GetFunctionCodeSigningConfig');
    return this;
  }

  /**
   * Grants permission to view details about the reserved concurrency configuration for a function
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConcurrency.html
   */
  public toGetFunctionConcurrency() {
    this.to('lambda:GetFunctionConcurrency');
    return this;
  }

  /**
   * Grants permission to view details about the version-specific settings of an AWS Lambda function or version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html
   */
  public toGetFunctionConfiguration() {
    this.to('lambda:GetFunctionConfiguration');
    return this;
  }

  /**
   * Grants permission to view the configuration for asynchronous invocation for a function, version, or alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionEventInvokeConfig.html
   */
  public toGetFunctionEventInvokeConfig() {
    this.to('lambda:GetFunctionEventInvokeConfig');
    return this;
  }

  /**
   * Grants permission to view details about a version of an AWS Lambda layer. Note this action also supports GetLayerVersionByArn API
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersion.html
   */
  public toGetLayerVersion() {
    this.to('lambda:GetLayerVersion');
    return this;
  }

  /**
   * Grants permission to view the resource-based policy for a version of an AWS Lambda layer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetLayerVersionPolicy.html
   */
  public toGetLayerVersionPolicy() {
    this.to('lambda:GetLayerVersionPolicy');
    return this;
  }

  /**
   * Grants permission to view the resource-based policy for an AWS Lambda function, version, or alias
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetPolicy.html
   */
  public toGetPolicy() {
    this.to('lambda:GetPolicy');
    return this;
  }

  /**
   * Grants permission to view the provisioned concurrency configuration for an AWS Lambda function's alias or version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_GetProvisionedConcurrencyConfig.html
   */
  public toGetProvisionedConcurrencyConfig() {
    this.to('lambda:GetProvisionedConcurrencyConfig');
    return this;
  }

  /**
   * (Deprecated) Grants permission to invoke a function asynchronously
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_InvokeAsync.html
   */
  public toInvokeAsync() {
    this.to('lambda:InvokeAsync');
    return this;
  }

  /**
   * Grants permission to invoke an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html
   */
  public toInvokeFunction() {
    this.to('lambda:InvokeFunction');
    return this;
  }

  /**
   * Grants permission to retrieve a list of aliases for an AWS Lambda function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListAliases.html
   */
  public toListAliases() {
    this.to('lambda:ListAliases');
    return this;
  }

  /**
   * Grants permission to retrieve a list of AWS Lambda code signing configs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListCodeSigningConfigs.html
   */
  public toListCodeSigningConfigs() {
    this.to('lambda:ListCodeSigningConfigs');
    return this;
  }

  /**
   * Grants permission to retrieve a list of AWS Lambda event source mappings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListEventSourceMappings.html
   */
  public toListEventSourceMappings() {
    this.to('lambda:ListEventSourceMappings');
    return this;
  }

  /**
   * Grants permission to retrieve a list of configurations for asynchronous invocation for a function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionEventInvokeConfigs.html
   */
  public toListFunctionEventInvokeConfigs() {
    this.to('lambda:ListFunctionEventInvokeConfigs');
    return this;
  }

  /**
   * Grants permission to retrieve a list of AWS Lambda functions, with the version-specific configuration of each function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctions.html
   */
  public toListFunctions() {
    this.to('lambda:ListFunctions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of AWS Lambda functions by the code signing config assigned
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListFunctionsByCodeSigningConfig.html
   */
  public toListFunctionsByCodeSigningConfig() {
    this.to('lambda:ListFunctionsByCodeSigningConfig');
    return this;
  }

  /**
   * Grants permission to retrieve a list of versions of an AWS Lambda layer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayerVersions.html
   */
  public toListLayerVersions() {
    this.to('lambda:ListLayerVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of AWS Lambda layers, with details about the latest version of each layer
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListLayers.html
   */
  public toListLayers() {
    this.to('lambda:ListLayers');
    return this;
  }

  /**
   * Grants permission to retrieve a list of provisioned concurrency configurations for an AWS Lambda function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListProvisionedConcurrencyConfigs.html
   */
  public toListProvisionedConcurrencyConfigs() {
    this.to('lambda:ListProvisionedConcurrencyConfigs');
    return this;
  }

  /**
   * Grants permission to retrieve a list of tags for an AWS Lambda function
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListTags.html
   */
  public toListTags() {
    this.to('lambda:ListTags');
    return this;
  }

  /**
   * Grants permission to retrieve a list of versions for an AWS Lambda function
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_ListVersionsByFunction.html
   */
  public toListVersionsByFunction() {
    this.to('lambda:ListVersionsByFunction');
    return this;
  }

  /**
   * Grants permission to create an AWS Lambda layer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PublishLayerVersion.html
   */
  public toPublishLayerVersion() {
    this.to('lambda:PublishLayerVersion');
    return this;
  }

  /**
   * Grants permission to create an AWS Lambda function version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PublishVersion.html
   */
  public toPublishVersion() {
    this.to('lambda:PublishVersion');
    return this;
  }

  /**
   * Grants permission to attach a code signing config to an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionCodeSigningConfig.html
   */
  public toPutFunctionCodeSigningConfig() {
    this.to('lambda:PutFunctionCodeSigningConfig');
    return this;
  }

  /**
   * Grants permission to configure reserved concurrency for an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionConcurrency.html
   */
  public toPutFunctionConcurrency() {
    this.to('lambda:PutFunctionConcurrency');
    return this;
  }

  /**
   * Grants permission to configures options for asynchronous invocation on an AWS Lambda function, version, or alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PutFunctionEventInvokeConfig.html
   */
  public toPutFunctionEventInvokeConfig() {
    this.to('lambda:PutFunctionEventInvokeConfig');
    return this;
  }

  /**
   * Grants permission to configure provisioned concurrency for an AWS Lambda function's alias or version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_PutProvisionedConcurrencyConfig.html
   */
  public toPutProvisionedConcurrencyConfig() {
    this.to('lambda:PutProvisionedConcurrencyConfig');
    return this;
  }

  /**
   * Grants permission to remove a statement from the permissions policy for a version of an AWS Lambda layer
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_RemoveLayerVersionPermission.html
   */
  public toRemoveLayerVersionPermission() {
    this.to('lambda:RemoveLayerVersionPermission');
    return this;
  }

  /**
   * Grants permission to revoke function-use permission from an AWS service or another account
   *
   * Access Level: Permissions management
   *
   * Possible conditions:
   * - .ifPrincipal()
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_RemovePermission.html
   */
  public toRemovePermission() {
    this.to('lambda:RemovePermission');
    return this;
  }

  /**
   * Grants permission to add tags to an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_TagResources.html
   */
  public toTagResource() {
    this.to('lambda:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('lambda:UntagResource');
    return this;
  }

  /**
   * Grants permission to update the configuration of an AWS Lambda function's alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateAlias.html
   */
  public toUpdateAlias() {
    this.to('lambda:UpdateAlias');
    return this;
  }

  /**
   * Grants permission to update an AWS Lambda code signing config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateCodeSigningConfig.html
   */
  public toUpdateCodeSigningConfig() {
    this.to('lambda:UpdateCodeSigningConfig');
    return this;
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
    this.to('lambda:UpdateEventSourceMapping');
    return this;
  }

  /**
   * Grants permission to update the code of an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCode.html
   */
  public toUpdateFunctionCode() {
    this.to('lambda:UpdateFunctionCode');
    return this;
  }

  /**
   * Grants permission to update the code signing config of an AWS Lambda function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionCodeSigningConfig.html
   */
  public toUpdateFunctionCodeSigningConfig() {
    this.to('lambda:UpdateFunctionCodeSigningConfig');
    return this;
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
    this.to('lambda:UpdateFunctionConfiguration');
    return this;
  }

  /**
   * Grants permission to modify the configuration for asynchronous invocation for an AWS Lambda function, version, or alias
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/API_UpdateFunctionEventInvokeConfig.html
   */
  public toUpdateFunctionEventInvokeConfig() {
    this.to('lambda:UpdateFunctionEventInvokeConfig');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Permissions management": [
      "AddLayerVersionPermission",
      "AddPermission",
      "DisableReplication",
      "EnableReplication",
      "RemoveLayerVersionPermission",
      "RemovePermission"
    ],
    "Write": [
      "CreateAlias",
      "CreateCodeSigningConfig",
      "CreateEventSourceMapping",
      "CreateFunction",
      "DeleteAlias",
      "DeleteCodeSigningConfig",
      "DeleteEventSourceMapping",
      "DeleteFunction",
      "DeleteFunctionCodeSigningConfig",
      "DeleteFunctionConcurrency",
      "DeleteFunctionEventInvokeConfig",
      "DeleteLayerVersion",
      "DeleteProvisionedConcurrencyConfig",
      "InvokeAsync",
      "InvokeFunction",
      "PublishLayerVersion",
      "PublishVersion",
      "PutFunctionCodeSigningConfig",
      "PutFunctionConcurrency",
      "PutFunctionEventInvokeConfig",
      "PutProvisionedConcurrencyConfig",
      "TagResource",
      "UntagResource",
      "UpdateAlias",
      "UpdateCodeSigningConfig",
      "UpdateEventSourceMapping",
      "UpdateFunctionCode",
      "UpdateFunctionCodeSigningConfig",
      "UpdateFunctionConfiguration",
      "UpdateFunctionEventInvokeConfig"
    ],
    "Read": [
      "GetAccountSettings",
      "GetAlias",
      "GetCodeSigningConfig",
      "GetEventSourceMapping",
      "GetFunction",
      "GetFunctionCodeSigningConfig",
      "GetFunctionConcurrency",
      "GetFunctionConfiguration",
      "GetFunctionEventInvokeConfig",
      "GetLayerVersion",
      "GetLayerVersionPolicy",
      "GetPolicy",
      "GetProvisionedConcurrencyConfig",
      "ListTags"
    ],
    "List": [
      "ListAliases",
      "ListCodeSigningConfigs",
      "ListEventSourceMappings",
      "ListFunctionEventInvokeConfigs",
      "ListFunctions",
      "ListFunctionsByCodeSigningConfig",
      "ListLayerVersions",
      "ListLayers",
      "ListProvisionedConcurrencyConfigs",
      "ListVersionsByFunction"
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCodeSigningConfig(codeSigningConfigId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lambda:${Region}:${Account}:codesigningconfig:${CodeSigningConfigId}';
    arn = arn.replace('${CodeSigningConfigId}', codeSigningConfigId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type eventSourceMapping to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param uUID - Identifier for the uUID.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEventSourceMapping(uUID: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lambda:${Region}:${Account}:event-source-mapping:${UUID}';
    arn = arn.replace('${UUID}', uUID);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type function to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param functionName - Identifier for the functionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFunction(functionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lambda:${Region}:${Account}:function:${FunctionName}';
    arn = arn.replace('${FunctionName}', functionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFunctionAlias(functionName: string, alias: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lambda:${Region}:${Account}:function:${FunctionName}:${Alias}';
    arn = arn.replace('${FunctionName}', functionName);
    arn = arn.replace('${Alias}', alias);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFunctionVersion(functionName: string, version: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lambda:${Region}:${Account}:function:${FunctionName}:${Version}';
    arn = arn.replace('${FunctionName}', functionName);
    arn = arn.replace('${Version}', version);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type layer to the statement
   *
   * https://docs.aws.amazon.com/lambda/latest/dg/lambda-api-permissions-ref.html
   *
   * @param layerName - Identifier for the layerName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLayer(layerName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lambda:${Region}:${Account}:layer:${LayerName}';
    arn = arn.replace('${LayerName}', layerName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLayerVersion(layerName: string, layerVersion: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lambda:${Region}:${Account}:layer:${LayerName}:${LayerVersion}';
    arn = arn.replace('${LayerName}', layerName);
    arn = arn.replace('${LayerVersion}', layerVersion);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the ARN of an AWS Lambda code signing config
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCodeSigningConfigArn(value: string | string[], operator?: Operator | string) {
    return this.if(`lambda:CodeSigningConfigArn`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ARN of an AWS Lambda function
   *
   * Applies to actions:
   * - .toCreateEventSourceMapping()
   * - .toDeleteEventSourceMapping()
   * - .toGetEventSourceMapping()
   * - .toUpdateEventSourceMapping()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifFunctionArn(value: string | string[], operator?: Operator | string) {
    return this.if(`lambda:FunctionArn`, value, operator || 'ArnLike');
  }

  /**
   * Filters access by the ARN of an AWS Lambda layer
   *
   * Applies to actions:
   * - .toCreateFunction()
   * - .toUpdateFunctionConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLayer(value: string | string[], operator?: Operator | string) {
    return this.if(`lambda:Layer`, value, operator || 'StringLike');
  }

  /**
   * Filters access by restricting the AWS service or account that can invoke a function
   *
   * Applies to actions:
   * - .toAddPermission()
   * - .toRemovePermission()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifPrincipal(value: string | string[], operator?: Operator | string) {
    return this.if(`lambda:Principal`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of security groups configured for the AWS Lambda function
   *
   * Applies to actions:
   * - .toCreateFunction()
   * - .toUpdateFunctionConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSecurityGroupIds(value: string | string[], operator?: Operator | string) {
    return this.if(`lambda:SecurityGroupIds`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of subnets configured for the AWS Lambda function
   *
   * Applies to actions:
   * - .toCreateFunction()
   * - .toUpdateFunctionConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifSubnetIds(value: string | string[], operator?: Operator | string) {
    return this.if(`lambda:SubnetIds`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the ID of the VPC configured for the AWS Lambda function
   *
   * Applies to actions:
   * - .toCreateFunction()
   * - .toUpdateFunctionConfiguration()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcIds(value: string | string[], operator?: Operator | string) {
    return this.if(`lambda:VpcIds`, value, operator || 'StringLike');
  }
}

export type LambdaActionsPermissions management = 'AddLayerVersionPermission' | 'AddPermission' | 'DisableReplication' | 'EnableReplication' | 'RemoveLayerVersionPermission' | 'RemovePermission';

export type LambdaActionsWrite = 'CreateAlias' | 'CreateCodeSigningConfig' | 'CreateEventSourceMapping' | 'CreateFunction' | 'DeleteAlias' | 'DeleteCodeSigningConfig' | 'DeleteEventSourceMapping' | 'DeleteFunction' | 'DeleteFunctionCodeSigningConfig' | 'DeleteFunctionConcurrency' | 'DeleteFunctionEventInvokeConfig' | 'DeleteLayerVersion' | 'DeleteProvisionedConcurrencyConfig' | 'InvokeAsync' | 'InvokeFunction' | 'PublishLayerVersion' | 'PublishVersion' | 'PutFunctionCodeSigningConfig' | 'PutFunctionConcurrency' | 'PutFunctionEventInvokeConfig' | 'PutProvisionedConcurrencyConfig' | 'TagResource' | 'UntagResource' | 'UpdateAlias' | 'UpdateCodeSigningConfig' | 'UpdateEventSourceMapping' | 'UpdateFunctionCode' | 'UpdateFunctionCodeSigningConfig' | 'UpdateFunctionConfiguration' | 'UpdateFunctionEventInvokeConfig';
export type LambdaActionsRead = 'GetAccountSettings' | 'GetAlias' | 'GetCodeSigningConfig' | 'GetEventSourceMapping' | 'GetFunction' | 'GetFunctionCodeSigningConfig' | 'GetFunctionConcurrency' | 'GetFunctionConfiguration' | 'GetFunctionEventInvokeConfig' | 'GetLayerVersion' | 'GetLayerVersionPolicy' | 'GetPolicy' | 'GetProvisionedConcurrencyConfig' | 'ListTags';
export type LambdaActionsList = 'ListAliases' | 'ListCodeSigningConfigs' | 'ListEventSourceMappings' | 'ListFunctionEventInvokeConfigs' | 'ListFunctions' | 'ListFunctionsByCodeSigningConfig' | 'ListLayerVersions' | 'ListLayers' | 'ListProvisionedConcurrencyConfigs' | 'ListVersionsByFunction';
export type LambdaActions = LambdaActionsPermissions management | LambdaActionsWrite | LambdaActionsRead | LambdaActionsList;
