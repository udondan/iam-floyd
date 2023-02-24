import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [resiliencehub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresiliencehubservice.html).
 *
 * @param options - Options for the statement
 */
export class Resiliencehub extends PolicyStatement {
  public servicePrefix = 'resiliencehub';

  /**
   * Statement provider for service [resiliencehub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresiliencehubservice.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to add draft application version resource mappings
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cloudformation:DescribeStacks
   * - cloudformation:ListStackResources
   * - resource-groups:GetGroup
   * - resource-groups:ListGroupResources
   * - servicecatalog:GetApplication
   * - servicecatalog:ListAssociatedResources
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_AddDraftAppVersionResourceMappings.html
   */
  public toAddDraftAppVersionResourceMappings() {
    return this.to('AddDraftAppVersionResourceMappings');
  }

  /**
   * Grants permission to create application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateApp.html
   */
  public toCreateApp() {
    return this.to('CreateApp');
  }

  /**
   * Grants permission to create application app component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateAppVersionAppComponent.html
   */
  public toCreateAppVersionAppComponent() {
    return this.to('CreateAppVersionAppComponent');
  }

  /**
   * Grants permission to create application resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateAppVersionResource.html
   */
  public toCreateAppVersionResource() {
    return this.to('CreateAppVersionResource');
  }

  /**
   * Grants permission to create recommendation template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - s3:CreateBucket
   * - s3:ListBucket
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateRecommendationTemplate.html
   */
  public toCreateRecommendationTemplate() {
    return this.to('CreateRecommendationTemplate');
  }

  /**
   * Grants permission to create resiliency policy
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateResiliencyPolicy.html
   */
  public toCreateResiliencyPolicy() {
    return this.to('CreateResiliencyPolicy');
  }

  /**
   * Grants permission to batch delete application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteApp.html
   */
  public toDeleteApp() {
    return this.to('DeleteApp');
  }

  /**
   * Grants permission to batch delete application assessment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteAppAssessment.html
   */
  public toDeleteAppAssessment() {
    return this.to('DeleteAppAssessment');
  }

  /**
   * Grants permission to remove application input source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteAppInputSource.html
   */
  public toDeleteAppInputSource() {
    return this.to('DeleteAppInputSource');
  }

  /**
   * Grants permission to delete application app component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteAppVersionAppComponent.html
   */
  public toDeleteAppVersionAppComponent() {
    return this.to('DeleteAppVersionAppComponent');
  }

  /**
   * Grants permission to delete application resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteAppVersionResource.html
   */
  public toDeleteAppVersionResource() {
    return this.to('DeleteAppVersionResource');
  }

  /**
   * Grants permission to batch delete recommendation template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteRecommendationTemplate.html
   */
  public toDeleteRecommendationTemplate() {
    return this.to('DeleteRecommendationTemplate');
  }

  /**
   * Grants permission to batch delete resiliency policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteResiliencyPolicy.html
   */
  public toDeleteResiliencyPolicy() {
    return this.to('DeleteResiliencyPolicy');
  }

  /**
   * Grants permission to describe application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeApp.html
   */
  public toDescribeApp() {
    return this.to('DescribeApp');
  }

  /**
   * Grants permission to describe application assessment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppAssessment.html
   */
  public toDescribeAppAssessment() {
    return this.to('DescribeAppAssessment');
  }

  /**
   * Grants permission to describe application version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppVersion.html
   */
  public toDescribeAppVersion() {
    return this.to('DescribeAppVersion');
  }

  /**
   * Grants permission to describe application version app component
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppVersionAppComponent.html
   */
  public toDescribeAppVersionAppComponent() {
    return this.to('DescribeAppVersionAppComponent');
  }

  /**
   * Grants permission to describe application version resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppVersionResource.html
   */
  public toDescribeAppVersionResource() {
    return this.to('DescribeAppVersionResource');
  }

  /**
   * Grants permission to describe application resolution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppVersionResourcesResolutionStatus.html
   */
  public toDescribeAppVersionResourcesResolutionStatus() {
    return this.to('DescribeAppVersionResourcesResolutionStatus');
  }

  /**
   * Grants permission to describe application version template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeAppVersionTemplate.html
   */
  public toDescribeAppVersionTemplate() {
    return this.to('DescribeAppVersionTemplate');
  }

  /**
   * Grants permission to describe draft application version resources import status
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeDraftAppVersionResourcesImportStatus.html
   */
  public toDescribeDraftAppVersionResourcesImportStatus() {
    return this.to('DescribeDraftAppVersionResourcesImportStatus');
  }

  /**
   * Grants permission to describe resiliency policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeResiliencyPolicy.html
   */
  public toDescribeResiliencyPolicy() {
    return this.to('DescribeResiliencyPolicy');
  }

  /**
   * Grants permission to import resources to draft application version
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cloudformation:DescribeStacks
   * - cloudformation:ListStackResources
   * - resource-groups:GetGroup
   * - resource-groups:ListGroupResources
   * - servicecatalog:GetApplication
   * - servicecatalog:ListAssociatedResources
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ImportResourcesToDraftAppVersion.html
   */
  public toImportResourcesToDraftAppVersion() {
    return this.to('ImportResourcesToDraftAppVersion');
  }

  /**
   * Grants permission to list alarm recommendation
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAlarmRecommendations.html
   */
  public toListAlarmRecommendations() {
    return this.to('ListAlarmRecommendations');
  }

  /**
   * Grants permission to list application assessment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppAssessments.html
   */
  public toListAppAssessments() {
    return this.to('ListAppAssessments');
  }

  /**
   * Grants permission to list app component compliances
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppComponentCompliances.html
   */
  public toListAppComponentCompliances() {
    return this.to('ListAppComponentCompliances');
  }

  /**
   * Grants permission to list app component recommendations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppComponentRecommendations.html
   */
  public toListAppComponentRecommendations() {
    return this.to('ListAppComponentRecommendations');
  }

  /**
   * Grants permission to list application input sources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppInputSources.html
   */
  public toListAppInputSources() {
    return this.to('ListAppInputSources');
  }

  /**
   * Grants permission to list application version app components
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppVersionAppComponents.html
   */
  public toListAppVersionAppComponents() {
    return this.to('ListAppVersionAppComponents');
  }

  /**
   * Grants permission to application version resource mappings
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppVersionResourceMappings.html
   */
  public toListAppVersionResourceMappings() {
    return this.to('ListAppVersionResourceMappings');
  }

  /**
   * Grants permission to list application resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppVersionResources.html
   */
  public toListAppVersionResources() {
    return this.to('ListAppVersionResources');
  }

  /**
   * Grants permission to list application version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppVersions.html
   */
  public toListAppVersions() {
    return this.to('ListAppVersions');
  }

  /**
   * Grants permission to list applications
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListApps.html
   */
  public toListApps() {
    return this.to('ListApps');
  }

  /**
   * Grants permission to list recommendation templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListRecommendationTemplates.html
   */
  public toListRecommendationTemplates() {
    return this.to('ListRecommendationTemplates');
  }

  /**
   * Grants permission to list resiliency policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListResiliencyPolicies.html
   */
  public toListResiliencyPolicies() {
    return this.to('ListResiliencyPolicies');
  }

  /**
   * Grants permission to list SOP recommendations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListSopRecommendations.html
   */
  public toListSopRecommendations() {
    return this.to('ListSopRecommendations');
  }

  /**
   * Grants permission to list suggested resiliency policies
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListSuggestedResiliencyPolicies.html
   */
  public toListSuggestedResiliencyPolicies() {
    return this.to('ListSuggestedResiliencyPolicies');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list test recommendations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListTestRecommendations.html
   */
  public toListTestRecommendations() {
    return this.to('ListTestRecommendations');
  }

  /**
   * Grants permission to list unsupported application version resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListUnsupportedAppVersionResources.html
   */
  public toListUnsupportedAppVersionResources() {
    return this.to('ListUnsupportedAppVersionResources');
  }

  /**
   * Grants permission to publish application version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_PublishAppVersion.html
   */
  public toPublishAppVersion() {
    return this.to('PublishAppVersion');
  }

  /**
   * Grants permission to put draft application version template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_PutDraftAppVersionTemplate.html
   */
  public toPutDraftAppVersionTemplate() {
    return this.to('PutDraftAppVersionTemplate');
  }

  /**
   * Grants permission to remove draft application version mappings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_RemoveDraftAppVersionResourceMappings.html
   */
  public toRemoveDraftAppVersionResourceMappings() {
    return this.to('RemoveDraftAppVersionResourceMappings');
  }

  /**
   * Grants permission to resolve application version resources
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cloudformation:DescribeStacks
   * - cloudformation:ListStackResources
   * - resource-groups:GetGroup
   * - resource-groups:ListGroupResources
   * - servicecatalog:GetApplication
   * - servicecatalog:ListAssociatedResources
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ResolveAppVersionResources.html
   */
  public toResolveAppVersionResources() {
    return this.to('ResolveAppVersionResources');
  }

  /**
   * Grants permission to create application assessment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - cloudformation:DescribeStacks
   * - cloudformation:ListStackResources
   * - cloudwatch:DescribeAlarms
   * - cloudwatch:GetMetricData
   * - cloudwatch:GetMetricStatistics
   * - cloudwatch:PutMetricData
   * - ec2:DescribeRegions
   * - fis:GetExperimentTemplate
   * - fis:ListExperimentTemplates
   * - fis:ListExperiments
   * - resource-groups:GetGroup
   * - resource-groups:ListGroupResources
   * - servicecatalog:GetApplication
   * - servicecatalog:ListAssociatedResources
   * - ssm:GetParametersByPath
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_StartAppAssessment.html
   */
  public toStartAppAssessment() {
    return this.to('StartAppAssessment');
  }

  /**
   * Grants permission to assign a resource tag
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_TagResource.html
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
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateApp.html
   */
  public toUpdateApp() {
    return this.to('UpdateApp');
  }

  /**
   * Grants permission to update application version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateAppVersion.html
   */
  public toUpdateAppVersion() {
    return this.to('UpdateAppVersion');
  }

  /**
   * Grants permission to update application app component
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateAppVersionAppComponent.html
   */
  public toUpdateAppVersionAppComponent() {
    return this.to('UpdateAppVersionAppComponent');
  }

  /**
   * Grants permission to update application resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateAppVersionResource.html
   */
  public toUpdateAppVersionResource() {
    return this.to('UpdateAppVersionResource');
  }

  /**
   * Grants permission to update resiliency policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateResiliencyPolicy.html
   */
  public toUpdateResiliencyPolicy() {
    return this.to('UpdateResiliencyPolicy');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddDraftAppVersionResourceMappings',
      'CreateApp',
      'CreateAppVersionAppComponent',
      'CreateAppVersionResource',
      'CreateRecommendationTemplate',
      'CreateResiliencyPolicy',
      'DeleteApp',
      'DeleteAppAssessment',
      'DeleteAppInputSource',
      'DeleteAppVersionAppComponent',
      'DeleteAppVersionResource',
      'DeleteRecommendationTemplate',
      'DeleteResiliencyPolicy',
      'ImportResourcesToDraftAppVersion',
      'PublishAppVersion',
      'PutDraftAppVersionTemplate',
      'RemoveDraftAppVersionResourceMappings',
      'ResolveAppVersionResources',
      'StartAppAssessment',
      'UpdateApp',
      'UpdateAppVersion',
      'UpdateAppVersionAppComponent',
      'UpdateAppVersionResource',
      'UpdateResiliencyPolicy'
    ],
    Read: [
      'DescribeApp',
      'DescribeAppAssessment',
      'DescribeAppVersion',
      'DescribeAppVersionAppComponent',
      'DescribeAppVersionResource',
      'DescribeAppVersionResourcesResolutionStatus',
      'DescribeAppVersionTemplate',
      'DescribeDraftAppVersionResourcesImportStatus',
      'DescribeResiliencyPolicy',
      'ListTagsForResource'
    ],
    List: [
      'ListAlarmRecommendations',
      'ListAppAssessments',
      'ListAppComponentCompliances',
      'ListAppComponentRecommendations',
      'ListAppInputSources',
      'ListAppVersionAppComponents',
      'ListAppVersionResourceMappings',
      'ListAppVersionResources',
      'ListAppVersions',
      'ListApps',
      'ListRecommendationTemplates',
      'ListResiliencyPolicies',
      'ListSopRecommendations',
      'ListSuggestedResiliencyPolicies',
      'ListTestRecommendations',
      'ListUnsupportedAppVersionResources'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type resiliency-policy to the statement
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ResiliencyPolicy.html
   *
   * @param resiliencyPolicyId - Identifier for the resiliencyPolicyId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResiliencyPolicy(resiliencyPolicyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:resiliencehub:${ region || '*' }:${ account || '*' }:resiliency-policy/${ resiliencyPolicyId }`);
  }

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_App.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:resiliencehub:${ region || '*' }:${ account || '*' }:app/${ appId }`);
  }

  /**
   * Adds a resource of type app-assessment to the statement
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_AppAssessment.html
   *
   * @param appAssessmentId - Identifier for the appAssessmentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAppAssessment(appAssessmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:resiliencehub:${ region || '*' }:${ account || '*' }:app-assessment/${ appAssessmentId }`);
  }

  /**
   * Adds a resource of type recommendation-template to the statement
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_RecommendationTemplate.html
   *
   * @param recommendationTemplateId - Identifier for the recommendationTemplateId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRecommendationTemplate(recommendationTemplateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:resiliencehub:${ region || '*' }:${ account || '*' }:recommendation-template/${ recommendationTemplateId }`);
  }
}
