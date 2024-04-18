import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [emr-containers](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemroneksemrcontainers.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class EmrContainers extends PolicyStatement {
  public servicePrefix = 'emr-containers';

  /**
   * Statement provider for service [emr-containers](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonemroneksemrcontainers.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a job run
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CancelJobRun.html
   */
  public toCancelJobRun() {
    return this.to('CancelJobRun');
  }

  /**
   * Grants permission to create a job template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CreateJobTemplate.html
   */
  public toCreateJobTemplate() {
    return this.to('CreateJobTemplate');
  }

  /**
   * Grants permission to create a managed endpoint
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifExecutionRoleArn()
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CreateManagedEndpoint.html
   */
  public toCreateManagedEndpoint() {
    return this.to('CreateManagedEndpoint');
  }

  /**
   * Grants permission to create a security configuration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CreateSecurityConfiguration.html
   */
  public toCreateSecurityConfiguration() {
    return this.to('CreateSecurityConfiguration');
  }

  /**
   * Grants permission to create a virtual cluster
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_CreateVirtualCluster.html
   */
  public toCreateVirtualCluster() {
    return this.to('CreateVirtualCluster');
  }

  /**
   * Grants permission to delete a job template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DeleteJobTemplate.html
   */
  public toDeleteJobTemplate() {
    return this.to('DeleteJobTemplate');
  }

  /**
   * Grants permission to delete a managed endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DeleteManagedEndpoint.html
   */
  public toDeleteManagedEndpoint() {
    return this.to('DeleteManagedEndpoint');
  }

  /**
   * Grants permission to delete a virtual cluster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DeleteVirtualCluster.html
   */
  public toDeleteVirtualCluster() {
    return this.to('DeleteVirtualCluster');
  }

  /**
   * Grants permission to describe a job run
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeJobRun.html
   */
  public toDescribeJobRun() {
    return this.to('DescribeJobRun');
  }

  /**
   * Grants permission to describe a job template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeJobTemplate.html
   */
  public toDescribeJobTemplate() {
    return this.to('DescribeJobTemplate');
  }

  /**
   * Grants permission to describe a managed endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeManagedEndpoint.html
   */
  public toDescribeManagedEndpoint() {
    return this.to('DescribeManagedEndpoint');
  }

  /**
   * Grants permission to describe a security configuration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeSecurityConfiguration.html
   */
  public toDescribeSecurityConfiguration() {
    return this.to('DescribeSecurityConfiguration');
  }

  /**
   * Grants permission to describe a virtual cluster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_DescribeVirtualCluster.html
   */
  public toDescribeVirtualCluster() {
    return this.to('DescribeVirtualCluster');
  }

  /**
   * Grants permission to generate a session token used to connect to a managed endpoint
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_GetManagedEndpointSessionCredentials.html
   */
  public toGetManagedEndpointSessionCredentials() {
    return this.to('GetManagedEndpointSessionCredentials');
  }

  /**
   * Grants permission to list job runs associated with a virtual cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListJobRuns.html
   */
  public toListJobRuns() {
    return this.to('ListJobRuns');
  }

  /**
   * Grants permission to list job templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListJobTemplates.html
   */
  public toListJobTemplates() {
    return this.to('ListJobTemplates');
  }

  /**
   * Grants permission to list managed endpoints associated with a virtual cluster
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListManagedEndpoints.html
   */
  public toListManagedEndpoints() {
    return this.to('ListManagedEndpoints');
  }

  /**
   * Grants permission to list security configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListSecurityConfigurations.html
   */
  public toListSecurityConfigurations() {
    return this.to('ListSecurityConfigurations');
  }

  /**
   * Grants permission to list tags for the specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list virtual clusters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_ListVirtualClusters.html
   */
  public toListVirtualClusters() {
    return this.to('ListVirtualClusters');
  }

  /**
   * Grants permission to start a job run
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifExecutionRoleArn()
   * - .ifJobTemplateArn()
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html
   */
  public toStartJobRun() {
    return this.to('StartJobRun');
  }

  /**
   * Grants permission to tag the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelJobRun',
      'CreateJobTemplate',
      'CreateManagedEndpoint',
      'CreateSecurityConfiguration',
      'CreateVirtualCluster',
      'DeleteJobTemplate',
      'DeleteManagedEndpoint',
      'DeleteVirtualCluster',
      'GetManagedEndpointSessionCredentials',
      'StartJobRun'
    ],
    Read: [
      'DescribeJobRun',
      'DescribeJobTemplate',
      'DescribeManagedEndpoint',
      'DescribeSecurityConfiguration',
      'DescribeVirtualCluster'
    ],
    List: [
      'ListJobRuns',
      'ListJobTemplates',
      'ListManagedEndpoints',
      'ListSecurityConfigurations',
      'ListTagsForResource',
      'ListVirtualClusters'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type virtualCluster to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/virtual-cluster.html
   *
   * @param virtualClusterId - Identifier for the virtualClusterId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVirtualCluster(virtualClusterId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:emr-containers:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/virtualclusters/${ virtualClusterId }`);
  }

  /**
   * Adds a resource of type jobRun to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/job-runs.html
   *
   * @param virtualClusterId - Identifier for the virtualClusterId.
   * @param jobRunId - Identifier for the jobRunId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJobRun(virtualClusterId: string, jobRunId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:emr-containers:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/virtualclusters/${ virtualClusterId }/jobruns/${ jobRunId }`);
  }

  /**
   * Adds a resource of type jobTemplate to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/job-templates.html
   *
   * @param jobTemplateId - Identifier for the jobTemplateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onJobTemplate(jobTemplateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:emr-containers:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/jobtemplates/${ jobTemplateId }`);
  }

  /**
   * Adds a resource of type managedEndpoint to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-create-eks-cluster.html#emr-studio-create-managed-endpoint
   *
   * @param virtualClusterId - Identifier for the virtualClusterId.
   * @param endpointId - Identifier for the endpointId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onManagedEndpoint(virtualClusterId: string, endpointId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:emr-containers:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/virtualclusters/${ virtualClusterId }/endpoints/${ endpointId }`);
  }

  /**
   * Adds a resource of type securityConfiguration to the statement
   *
   * https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security-configurations.html
   *
   * @param securityConfigurationId - Identifier for the securityConfigurationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSecurityConfiguration(securityConfigurationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:emr-containers:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:/securityconfigurations/${ securityConfigurationId }`);
  }

  /**
   * Filters access by the tag key-value pairs present in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateJobTemplate()
   * - .toCreateManagedEndpoint()
   * - .toCreateSecurityConfiguration()
   * - .toCreateVirtualCluster()
   * - .toStartJobRun()
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
   * Filters access by the tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - virtualCluster
   * - jobRun
   * - jobTemplate
   * - managedEndpoint
   * - securityConfiguration
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys present in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateJobTemplate()
   * - .toCreateManagedEndpoint()
   * - .toCreateSecurityConfiguration()
   * - .toCreateVirtualCluster()
   * - .toStartJobRun()
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
   * Filters access by the execution role arn present in the request
   *
   * https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/iam-execution-role.html
   *
   * Applies to actions:
   * - .toCreateManagedEndpoint()
   * - .toStartJobRun()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifExecutionRoleArn(value: string | string[], operator?: Operator | string) {
    return this.if(`ExecutionRoleArn`, value, operator ?? 'ArnLike');
  }

  /**
   * Filters access by the job template arn present in the request
   *
   * https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/iam-job-template.html
   *
   * Applies to actions:
   * - .toStartJobRun()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifJobTemplateArn(value: string | string[], operator?: Operator | string) {
    return this.if(`JobTemplateArn`, value, operator ?? 'ArnLike');
  }
}
