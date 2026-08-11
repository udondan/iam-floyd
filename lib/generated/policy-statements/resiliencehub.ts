import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [resiliencehub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresiliencehub.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Resiliencehub extends PolicyStatement {
  public servicePrefix = 'resiliencehub';

  /**
   * Statement provider for service [resiliencehub](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsresiliencehub.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept resource grouping recommendations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_AcceptResourceGroupingRecommendations.html
   */
  public toAcceptResourceGroupingRecommendations() {
    return this.to('AcceptResourceGroupingRecommendations');
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
   * Grants permission to include or exclude one or more operational recommendations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_BatchUpdateRecommendationStatus.html
   */
  public toBatchUpdateRecommendationStatus() {
    return this.to('BatchUpdateRecommendationStatus');
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
   * Dependent actions:
   * - iam:PassRole
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
   * Grants permission to create an assertion for a service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateAssertion.html
   */
  public toCreateAssertion() {
    return this.to('CreateAssertion');
  }

  /**
   * Grants permission to create an input source for a service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateInputSource.html
   */
  public toCreateInputSource() {
    return this.to('CreateInputSource');
  }

  /**
   * Grants permission to create a resilience policy that defines availability and disaster recovery requirements
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreatePolicy.html
   */
  public toCreatePolicy() {
    return this.to('CreatePolicy');
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
   * Grants permission to create a report for a service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateReport.html
   */
  public toCreateReport() {
    return this.to('CreateReport');
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
   * Grants permission to create a service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateService.html
   */
  public toCreateService() {
    return this.to('CreateService');
  }

  /**
   * Grants permission to create a service function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateServiceFunction.html
   */
  public toCreateServiceFunction() {
    return this.to('CreateServiceFunction');
  }

  /**
   * Grants permission to create service function resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateServiceFunctionResources.html
   */
  public toCreateServiceFunctionResources() {
    return this.to('CreateServiceFunctionResources');
  }

  /**
   * Grants permission to create a system that represents a logical grouping of services
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateSystem.html
   */
  public toCreateSystem() {
    return this.to('CreateSystem');
  }

  /**
   * Grants permission to create a user journey within a system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_CreateUserJourney.html
   */
  public toCreateUserJourney() {
    return this.to('CreateUserJourney');
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
   * Grants permission to delete an assertion
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteAssertion.html
   */
  public toDeleteAssertion() {
    return this.to('DeleteAssertion');
  }

  /**
   * Grants permission to delete an input source
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteInputSource.html
   */
  public toDeleteInputSource() {
    return this.to('DeleteInputSource');
  }

  /**
   * Grants permission to delete a resilience policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeletePolicy.html
   */
  public toDeletePolicy() {
    return this.to('DeletePolicy');
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
   * Grants permission to delete a service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteService.html
   */
  public toDeleteService() {
    return this.to('DeleteService');
  }

  /**
   * Grants permission to delete a service function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteServiceFunction.html
   */
  public toDeleteServiceFunction() {
    return this.to('DeleteServiceFunction');
  }

  /**
   * Grants permission to delete service function resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteServiceFunctionResources.html
   */
  public toDeleteServiceFunctionResources() {
    return this.to('DeleteServiceFunctionResources');
  }

  /**
   * Grants permission to delete a system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteSystem.html
   */
  public toDeleteSystem() {
    return this.to('DeleteSystem');
  }

  /**
   * Grants permission to delete a user journey
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DeleteUserJourney.html
   */
  public toDeleteUserJourney() {
    return this.to('DeleteUserJourney');
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
   * Grants permission to describe metrics export
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeMetricsExport.html
   */
  public toDescribeMetricsExport() {
    return this.to('DescribeMetricsExport');
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
   * Grants permission to describe the latest status of the grouping recommendation process
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_DescribeResourceGroupingRecommendationTask.html
   */
  public toDescribeResourceGroupingRecommendationTask() {
    return this.to('DescribeResourceGroupingRecommendationTask');
  }

  /**
   * Grants permission to retrieve a failure mode finding
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_GetFailureModeFinding.html
   */
  public toGetFailureModeFinding() {
    return this.to('GetFailureModeFinding');
  }

  /**
   * Grants permission to retrieve a resilience policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_GetPolicy.html
   */
  public toGetPolicy() {
    return this.to('GetPolicy');
  }

  /**
   * Grants permission to retrieve a service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_GetService.html
   */
  public toGetService() {
    return this.to('GetService');
  }

  /**
   * Grants permission to retrieve a system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_GetSystem.html
   */
  public toGetSystem() {
    return this.to('GetSystem');
  }

  /**
   * Grants permission to retrieve a user journey
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_GetUserJourney.html
   */
  public toGetUserJourney() {
    return this.to('GetUserJourney');
  }

  /**
   * Grants permission to import a V1 app into the V2 resource model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ImportApp.html
   */
  public toImportApp() {
    return this.to('ImportApp');
  }

  /**
   * Grants permission to import a V1 policy into V2
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ImportPolicy.html
   */
  public toImportPolicy() {
    return this.to('ImportPolicy');
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
   * Grants permission to list compliance drifts that were detected while running an assessment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppAssessmentComplianceDrifts.html
   */
  public toListAppAssessmentComplianceDrifts() {
    return this.to('ListAppAssessmentComplianceDrifts');
  }

  /**
   * Grants permission to list resource drifts that were detected while running an assessment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAppAssessmentResourceDrifts.html
   */
  public toListAppAssessmentResourceDrifts() {
    return this.to('ListAppAssessmentResourceDrifts');
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
   * Grants permission to list assertions for a service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListAssertions.html
   */
  public toListAssertions() {
    return this.to('ListAssertions');
  }

  /**
   * Grants permission to list dependencies discovered for services
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListDependencies.html
   */
  public toListDependencies() {
    return this.to('ListDependencies');
  }

  /**
   * Grants permission to list failure mode assessments
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListFailureModeAssessments.html
   */
  public toListFailureModeAssessments() {
    return this.to('ListFailureModeAssessments');
  }

  /**
   * Grants permission to list failure mode findings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListFailureModeFindings.html
   */
  public toListFailureModeFindings() {
    return this.to('ListFailureModeFindings');
  }

  /**
   * Grants permission to list input sources for a service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListInputSources.html
   */
  public toListInputSources() {
    return this.to('ListInputSources');
  }

  /**
   * Grants permission to list metrics
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListMetrics.html
   */
  public toListMetrics() {
    return this.to('ListMetrics');
  }

  /**
   * Grants permission to list resilience policies
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListPolicies.html
   */
  public toListPolicies() {
    return this.to('ListPolicies');
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
   * Grants permission to list reports
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListReports.html
   */
  public toListReports() {
    return this.to('ListReports');
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
   * Grants permission to list resource grouping recommendations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListResourceGroupingRecommendations.html
   */
  public toListResourceGroupingRecommendations() {
    return this.to('ListResourceGroupingRecommendations');
  }

  /**
   * Grants permission to list resources for a service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListResources.html
   */
  public toListResources() {
    return this.to('ListResources');
  }

  /**
   * Grants permission to list events for a service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListServiceEvents.html
   */
  public toListServiceEvents() {
    return this.to('ListServiceEvents');
  }

  /**
   * Grants permission to list service functions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListServiceFunctions.html
   */
  public toListServiceFunctions() {
    return this.to('ListServiceFunctions');
  }

  /**
   * Grants permission to list service topology edges
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListServiceTopologyEdges.html
   */
  public toListServiceTopologyEdges() {
    return this.to('ListServiceTopologyEdges');
  }

  /**
   * Grants permission to list services
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListServices.html
   */
  public toListServices() {
    return this.to('ListServices');
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
   * Grants permission to list events for a system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListSystemEvents.html
   */
  public toListSystemEvents() {
    return this.to('ListSystemEvents');
  }

  /**
   * Grants permission to list systems
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListSystems.html
   */
  public toListSystems() {
    return this.to('ListSystems');
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
   * Grants permission to list user journeys for a system
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_ListUserJourneys.html
   */
  public toListUserJourneys() {
    return this.to('ListUserJourneys');
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
   * Grants permission to reject resource grouping recommendations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_RejectResourceGroupingRecommendations.html
   */
  public toRejectResourceGroupingRecommendations() {
    return this.to('RejectResourceGroupingRecommendations');
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
   * Grants permission to start a failure mode assessment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_StartFailureModeAssessment.html
   */
  public toStartFailureModeAssessment() {
    return this.to('StartFailureModeAssessment');
  }

  /**
   * Grants permission to start the metrics export
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_StartMetricsExport.html
   */
  public toStartMetricsExport() {
    return this.to('StartMetricsExport');
  }

  /**
   * Grants permission to start the grouping recommendation generation process
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_StartResourceGroupingRecommendationTask.html
   */
  public toStartResourceGroupingRecommendationTask() {
    return this.to('StartResourceGroupingRecommendationTask');
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
   * Dependent actions:
   * - iam:PassRole
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
   * Grants permission to update an assertion
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateAssertion.html
   */
  public toUpdateAssertion() {
    return this.to('UpdateAssertion');
  }

  /**
   * Grants permission to update a dependency classification
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateDependency.html
   */
  public toUpdateDependency() {
    return this.to('UpdateDependency');
  }

  /**
   * Grants permission to update a failure mode finding
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateFailureModeFinding.html
   */
  public toUpdateFailureModeFinding() {
    return this.to('UpdateFailureModeFinding');
  }

  /**
   * Grants permission to update a resilience policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdatePolicy.html
   */
  public toUpdatePolicy() {
    return this.to('UpdatePolicy');
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

  /**
   * Grants permission to update a service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateService.html
   */
  public toUpdateService() {
    return this.to('UpdateService');
  }

  /**
   * Grants permission to update a service function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateServiceFunction.html
   */
  public toUpdateServiceFunction() {
    return this.to('UpdateServiceFunction');
  }

  /**
   * Grants permission to update a system
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateSystem.html
   */
  public toUpdateSystem() {
    return this.to('UpdateSystem');
  }

  /**
   * Grants permission to update a user journey
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_UpdateUserJourney.html
   */
  public toUpdateUserJourney() {
    return this.to('UpdateUserJourney');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptResourceGroupingRecommendations',
      'AddDraftAppVersionResourceMappings',
      'BatchUpdateRecommendationStatus',
      'CreateApp',
      'CreateAppVersionAppComponent',
      'CreateAppVersionResource',
      'CreateAssertion',
      'CreateInputSource',
      'CreatePolicy',
      'CreateRecommendationTemplate',
      'CreateReport',
      'CreateResiliencyPolicy',
      'CreateService',
      'CreateServiceFunction',
      'CreateServiceFunctionResources',
      'CreateSystem',
      'CreateUserJourney',
      'DeleteApp',
      'DeleteAppAssessment',
      'DeleteAppInputSource',
      'DeleteAppVersionAppComponent',
      'DeleteAppVersionResource',
      'DeleteAssertion',
      'DeleteInputSource',
      'DeletePolicy',
      'DeleteRecommendationTemplate',
      'DeleteResiliencyPolicy',
      'DeleteService',
      'DeleteServiceFunction',
      'DeleteServiceFunctionResources',
      'DeleteSystem',
      'DeleteUserJourney',
      'ImportApp',
      'ImportPolicy',
      'ImportResourcesToDraftAppVersion',
      'PublishAppVersion',
      'PutDraftAppVersionTemplate',
      'RejectResourceGroupingRecommendations',
      'RemoveDraftAppVersionResourceMappings',
      'ResolveAppVersionResources',
      'StartAppAssessment',
      'StartFailureModeAssessment',
      'StartMetricsExport',
      'StartResourceGroupingRecommendationTask',
      'UpdateApp',
      'UpdateAppVersion',
      'UpdateAppVersionAppComponent',
      'UpdateAppVersionResource',
      'UpdateAssertion',
      'UpdateDependency',
      'UpdateFailureModeFinding',
      'UpdatePolicy',
      'UpdateResiliencyPolicy',
      'UpdateService',
      'UpdateServiceFunction',
      'UpdateSystem',
      'UpdateUserJourney'
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
      'DescribeMetricsExport',
      'DescribeResiliencyPolicy',
      'DescribeResourceGroupingRecommendationTask',
      'GetFailureModeFinding',
      'GetPolicy',
      'GetService',
      'GetSystem',
      'GetUserJourney',
      'ListAssertions',
      'ListDependencies',
      'ListFailureModeAssessments',
      'ListFailureModeFindings',
      'ListInputSources',
      'ListPolicies',
      'ListReports',
      'ListResources',
      'ListServiceEvents',
      'ListServiceFunctions',
      'ListServiceTopologyEdges',
      'ListServices',
      'ListSystemEvents',
      'ListSystems',
      'ListTagsForResource',
      'ListUserJourneys'
    ],
    List: [
      'ListAlarmRecommendations',
      'ListAppAssessmentComplianceDrifts',
      'ListAppAssessmentResourceDrifts',
      'ListAppAssessments',
      'ListAppComponentCompliances',
      'ListAppComponentRecommendations',
      'ListAppInputSources',
      'ListAppVersionAppComponents',
      'ListAppVersionResourceMappings',
      'ListAppVersionResources',
      'ListAppVersions',
      'ListApps',
      'ListMetrics',
      'ListRecommendationTemplates',
      'ListResiliencyPolicies',
      'ListResourceGroupingRecommendations',
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
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResiliencyPolicy(resiliencyPolicyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:resiliencehub:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:resiliency-policy/${ resiliencyPolicyId }`);
  }

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_App.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:resiliencehub:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:app/${ appId }`);
  }

  /**
   * Adds a resource of type app-assessment to the statement
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_AppAssessment.html
   *
   * @param appAssessmentId - Identifier for the appAssessmentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAppAssessment(appAssessmentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:resiliencehub:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:app-assessment/${ appAssessmentId }`);
  }

  /**
   * Adds a resource of type recommendation-template to the statement
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_RecommendationTemplate.html
   *
   * @param recommendationTemplateId - Identifier for the recommendationTemplateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRecommendationTemplate(recommendationTemplateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:resiliencehub:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:recommendation-template/${ recommendationTemplateId }`);
  }

  /**
   * Adds a resource of type policy to the statement
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_Policy.html
   *
   * @param policyId - Identifier for the policyId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPolicy(policyId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:resiliencehub:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:policy/${ policyId }`);
  }

  /**
   * Adds a resource of type service to the statement
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_Service.html
   *
   * @param serviceId - Identifier for the serviceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onService(serviceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:resiliencehub:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:service/${ serviceId }`);
  }

  /**
   * Adds a resource of type system to the statement
   *
   * https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_System.html
   *
   * @param systemId - Identifier for the systemId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSystem(systemId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:resiliencehub:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:system/${ systemId }`);
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateApp()
   * - .toCreatePolicy()
   * - .toCreateRecommendationTemplate()
   * - .toCreateResiliencyPolicy()
   * - .toCreateService()
   * - .toCreateSystem()
   * - .toImportApp()
   * - .toImportPolicy()
   * - .toStartAppAssessment()
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
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateAssertion()
   * - .toCreateInputSource()
   * - .toCreateReport()
   * - .toCreateService()
   * - .toCreateServiceFunction()
   * - .toCreateServiceFunctionResources()
   * - .toCreateUserJourney()
   * - .toDeleteAssertion()
   * - .toDeleteInputSource()
   * - .toDeletePolicy()
   * - .toDeleteService()
   * - .toDeleteServiceFunction()
   * - .toDeleteServiceFunctionResources()
   * - .toDeleteSystem()
   * - .toDeleteUserJourney()
   * - .toGetFailureModeFinding()
   * - .toGetPolicy()
   * - .toGetService()
   * - .toGetSystem()
   * - .toGetUserJourney()
   * - .toImportApp()
   * - .toImportPolicy()
   * - .toListAssertions()
   * - .toListFailureModeAssessments()
   * - .toListFailureModeFindings()
   * - .toListInputSources()
   * - .toListReports()
   * - .toListResources()
   * - .toListServiceEvents()
   * - .toListServiceFunctions()
   * - .toListServiceTopologyEdges()
   * - .toListSystemEvents()
   * - .toListUserJourneys()
   * - .toStartFailureModeAssessment()
   * - .toUpdateAssertion()
   * - .toUpdateDependency()
   * - .toUpdateFailureModeFinding()
   * - .toUpdatePolicy()
   * - .toUpdateService()
   * - .toUpdateServiceFunction()
   * - .toUpdateSystem()
   * - .toUpdateUserJourney()
   *
   * Applies to resource types:
   * - resiliency-policy
   * - application
   * - app-assessment
   * - recommendation-template
   * - policy
   * - service
   * - system
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateApp()
   * - .toCreatePolicy()
   * - .toCreateRecommendationTemplate()
   * - .toCreateResiliencyPolicy()
   * - .toCreateService()
   * - .toCreateSystem()
   * - .toImportApp()
   * - .toImportPolicy()
   * - .toStartAppAssessment()
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
