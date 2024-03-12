import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [datazone](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondatazone.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Datazone extends PolicyStatement {
  public servicePrefix = 'datazone';

  /**
   * Statement provider for service [datazone](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondatazone.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept prediction
   *
   * Access Level: Write
   */
  public toAcceptPredictions() {
    return this.to('AcceptPredictions');
  }

  /**
   * Grants permission to approve a subscription request for a Data Asset
   *
   * Access Level: Write
   */
  public toAcceptSubscriptionRequest() {
    return this.to('AcceptSubscriptionRequest');
  }

  /**
   * Grants permission to cancel metadata generation run
   *
   * Access Level: Write
   */
  public toCancelMetadataGenerationRun() {
    return this.to('CancelMetadataGenerationRun');
  }

  /**
   * Grants permission to revoke or unsubscribe an approved subscription to Data Asset
   *
   * Access Level: Write
   */
  public toCancelSubscription() {
    return this.to('CancelSubscription');
  }

  /**
   * Grants permission to create asset
   *
   * Access Level: Write
   */
  public toCreateAsset() {
    return this.to('CreateAsset');
  }

  /**
   * Grants permission to create new revision of an asset
   *
   * Access Level: Write
   */
  public toCreateAssetRevision() {
    return this.to('CreateAssetRevision');
  }

  /**
   * Grants permission to create an asset type
   *
   * Access Level: Write
   */
  public toCreateAssetType() {
    return this.to('CreateAssetType');
  }

  /**
   * Grants permission to create a new DataSource
   *
   * Access Level: Write
   */
  public toCreateDataSource() {
    return this.to('CreateDataSource');
  }

  /**
   * Grants permission to provision a domain which is a top level entity that contains other Amazon DataZone resources
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to create a collection of configurated resources used to publish and subscribe to data
   *
   * Access Level: Write
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permission to create a custom Environment Blueprint that allow user to add Environments to their Project
   *
   * Access Level: Write
   */
  public toCreateEnvironmentBlueprint() {
    return this.to('CreateEnvironmentBlueprint');
  }

  /**
   * Grants permission to create a template from a Blueprint that can be used to create a Environment
   *
   * Access Level: Write
   */
  public toCreateEnvironmentProfile() {
    return this.to('CreateEnvironmentProfile');
  }

  /**
   * Grants permission to create a form type or a new revision of it
   *
   * Access Level: Write
   */
  public toCreateFormType() {
    return this.to('CreateFormType');
  }

  /**
   * Grants permission to create a business glossary
   *
   * Access Level: Write
   */
  public toCreateGlossary() {
    return this.to('CreateGlossary');
  }

  /**
   * Grants permission to create a glossary term
   *
   * Access Level: Write
   */
  public toCreateGlossaryTerm() {
    return this.to('CreateGlossaryTerm');
  }

  /**
   * Grants permission to create a DataZone group profile for an IAM Identity Center group
   *
   * Access Level: Write
   */
  public toCreateGroupProfile() {
    return this.to('CreateGroupProfile');
  }

  /**
   * Grants permission to create listing change set
   *
   * Access Level: Write
   */
  public toCreateListingChangeSet() {
    return this.to('CreateListingChangeSet');
  }

  /**
   * Grants permission to create a Project to enable your team to publish and subscribe to data
   *
   * Access Level: Write
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to add a user to a Project
   *
   * Access Level: Write
   */
  public toCreateProjectMembership() {
    return this.to('CreateProjectMembership');
  }

  /**
   * Grants permission to create a grant for an approved subscription on a subscription target
   *
   * Access Level: Write
   */
  public toCreateSubscriptionGrant() {
    return this.to('CreateSubscriptionGrant');
  }

  /**
   * Grants permission to create a subscription request for a Data Asset
   *
   * Access Level: Write
   */
  public toCreateSubscriptionRequest() {
    return this.to('CreateSubscriptionRequest');
  }

  /**
   * Grants permission to create a subscription target for a Environment in the project
   *
   * Access Level: Write
   */
  public toCreateSubscriptionTarget() {
    return this.to('CreateSubscriptionTarget');
  }

  /**
   * Grants permission to create a user profile for an existing user in the customers IAM Identity Center
   *
   * Access Level: Write
   */
  public toCreateUserProfile() {
    return this.to('CreateUserProfile');
  }

  /**
   * Grants permission to delete an asset
   *
   * Access Level: Write
   */
  public toDeleteAsset() {
    return this.to('DeleteAsset');
  }

  /**
   * Grants permission to delete an asset type
   *
   * Access Level: Write
   */
  public toDeleteAssetType() {
    return this.to('DeleteAssetType');
  }

  /**
   * Grants permission to update existing DataSource
   *
   * Access Level: Write
   */
  public toDeleteDataSource() {
    return this.to('DeleteDataSource');
  }

  /**
   * Grants permission to delete a provisioned domain
   *
   * Access Level: Write
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to delete a resource policy for a DataZone Domain
   *
   * Access Level: Permissions management
   */
  public toDeleteDomainSharingPolicy() {
    return this.to('DeleteDomainSharingPolicy');
  }

  /**
   * Grants permission to Delete Environment
   *
   * Access Level: Write
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to delete Environment Blueprint
   *
   * Access Level: Write
   */
  public toDeleteEnvironmentBlueprint() {
    return this.to('DeleteEnvironmentBlueprint');
  }

  /**
   * Grants permission to delete environment blueprint configuration
   *
   * Access Level: Write
   */
  public toDeleteEnvironmentBlueprintConfiguration() {
    return this.to('DeleteEnvironmentBlueprintConfiguration');
  }

  /**
   * Grants permission to delete Environment Profile
   *
   * Access Level: Write
   */
  public toDeleteEnvironmentProfile() {
    return this.to('DeleteEnvironmentProfile');
  }

  /**
   * Grants permission to delete a form type
   *
   * Access Level: Write
   */
  public toDeleteFormType() {
    return this.to('DeleteFormType');
  }

  /**
   * Grants permission to delete a business glossary
   *
   * Access Level: Write
   */
  public toDeleteGlossary() {
    return this.to('DeleteGlossary');
  }

  /**
   * Grants permission to delete a glossary term
   *
   * Access Level: Write
   */
  public toDeleteGlossaryTerm() {
    return this.to('DeleteGlossaryTerm');
  }

  /**
   * Grants permission to delete listing
   *
   * Access Level: Write
   */
  public toDeleteListing() {
    return this.to('DeleteListing');
  }

  /**
   * Grants permission to delete a Project that enables your team to publish and subscribe to data
   *
   * Access Level: Write
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to remove a user from a project
   *
   * Access Level: Write
   */
  public toDeleteProjectMembership() {
    return this.to('DeleteProjectMembership');
  }

  /**
   * Grants permission to delete a subscription grant from a subscription target
   *
   * Access Level: Write
   */
  public toDeleteSubscriptionGrant() {
    return this.to('DeleteSubscriptionGrant');
  }

  /**
   * Grants permission to delete a pending subscription request for a Data Asset
   *
   * Access Level: Write
   */
  public toDeleteSubscriptionRequest() {
    return this.to('DeleteSubscriptionRequest');
  }

  /**
   * Grants permission to delete a subscription target from a Environment in the project
   *
   * Access Level: Write
   */
  public toDeleteSubscriptionTarget() {
    return this.to('DeleteSubscriptionTarget');
  }

  /**
   * Grants permission to retrieve an asset
   *
   * Access Level: Read
   */
  public toGetAsset() {
    return this.to('GetAsset');
  }

  /**
   * Grants permission to get an asset type
   *
   * Access Level: Read
   */
  public toGetAssetType() {
    return this.to('GetAssetType');
  }

  /**
   * Grants permission to Get a existing DataSource in Amazon DataZone using its identifier
   *
   * Access Level: Read
   */
  public toGetDataSource() {
    return this.to('GetDataSource');
  }

  /**
   * Grants permission to get DataSource run job in Amazon DataZone using it's identifier
   *
   * Access Level: Read
   */
  public toGetDataSourceRun() {
    return this.to('GetDataSourceRun');
  }

  /**
   * Grants permission to retrieve information about a domain
   *
   * Access Level: Read
   */
  public toGetDomain() {
    return this.to('GetDomain');
  }

  /**
   * Grants permission to retrieve a resource policy for a DataZone Domain
   *
   * Access Level: Read
   */
  public toGetDomainSharingPolicy() {
    return this.to('GetDomainSharingPolicy');
  }

  /**
   * Grants permission to get Environment details
   *
   * Access Level: Read
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to get environment action link
   *
   * Access Level: Read
   */
  public toGetEnvironmentActionLink() {
    return this.to('GetEnvironmentActionLink');
  }

  /**
   * Grants permission to get Environment Blueprint details
   *
   * Access Level: Read
   */
  public toGetEnvironmentBlueprint() {
    return this.to('GetEnvironmentBlueprint');
  }

  /**
   * Grants permission to get environment blueprint configuration
   *
   * Access Level: Read
   */
  public toGetEnvironmentBlueprintConfiguration() {
    return this.to('GetEnvironmentBlueprintConfiguration');
  }

  /**
   * Grants permission to get short term credentials that assume the Environment user role
   *
   * Access Level: Read
   */
  public toGetEnvironmentCredentials() {
    return this.to('GetEnvironmentCredentials');
  }

  /**
   * Grants permission to get Environment Profile details
   *
   * Access Level: Read
   */
  public toGetEnvironmentProfile() {
    return this.to('GetEnvironmentProfile');
  }

  /**
   * Grants permission to get a form type
   *
   * Access Level: Read
   */
  public toGetFormType() {
    return this.to('GetFormType');
  }

  /**
   * Grants permission to get a business glossary
   *
   * Access Level: Read
   */
  public toGetGlossary() {
    return this.to('GetGlossary');
  }

  /**
   * Grants permission to get a glossary term
   *
   * Access Level: Read
   */
  public toGetGlossaryTerm() {
    return this.to('GetGlossaryTerm');
  }

  /**
   * Grants permission to retrieve an existing DataZone group profile
   *
   * Access Level: Read
   */
  public toGetGroupProfile() {
    return this.to('GetGroupProfile');
  }

  /**
   * Grants permission to an IAM principal to log into the DataZone Portal
   *
   * Access Level: Permissions management
   */
  public toGetIamPortalLoginUrl() {
    return this.to('GetIamPortalLoginUrl');
  }

  /**
   * Grants permission to get listing
   *
   * Access Level: Read
   */
  public toGetListing() {
    return this.to('GetListing');
  }

  /**
   * Grants permission to get metadata generation run
   *
   * Access Level: Read
   */
  public toGetMetadataGenerationRun() {
    return this.to('GetMetadataGenerationRun');
  }

  /**
   * Grants permission to get Project details
   *
   * Access Level: Read
   */
  public toGetProject() {
    return this.to('GetProject');
  }

  /**
   * Grants permission to retrieve a subscription
   *
   * Access Level: Read
   */
  public toGetSubscription() {
    return this.to('GetSubscription');
  }

  /**
   * Grants permission to get subscription eligibilty
   *
   * Access Level: Read
   */
  public toGetSubscriptionEligibility() {
    return this.to('GetSubscriptionEligibility');
  }

  /**
   * Grants permission to retireve a subscription grant
   *
   * Access Level: Read
   */
  public toGetSubscriptionGrant() {
    return this.to('GetSubscriptionGrant');
  }

  /**
   * Grants permission to reject a subscription request for a Data Asset
   *
   * Access Level: Read
   */
  public toGetSubscriptionRequestDetails() {
    return this.to('GetSubscriptionRequestDetails');
  }

  /**
   * Grants permission to retireve details of subscription target
   *
   * Access Level: Read
   */
  public toGetSubscriptionTarget() {
    return this.to('GetSubscriptionTarget');
  }

  /**
   * Grants permission to retrieve a user profile for an existing user in the DataZone Domain
   *
   * Access Level: Read
   */
  public toGetUserProfile() {
    return this.to('GetUserProfile');
  }

  /**
   * Grants permission to list Environments across all domains in an AWS Account
   *
   * Access Level: List
   */
  public toListAccountEnvironments() {
    return this.to('ListAccountEnvironments');
  }

  /**
   * Grants permission to list revisions of an asset
   *
   * Access Level: List
   */
  public toListAssetRevisions() {
    return this.to('ListAssetRevisions');
  }

  /**
   * Grants permission to list DataSource runs job's activities on Asset
   *
   * Access Level: List
   */
  public toListDataSourceRunActivities() {
    return this.to('ListDataSourceRunActivities');
  }

  /**
   * Grants permission to list DataSource runs job
   *
   * Access Level: List
   */
  public toListDataSourceRuns() {
    return this.to('ListDataSourceRuns');
  }

  /**
   * Grants permission to list existing DataSources
   *
   * Access Level: List
   */
  public toListDataSources() {
    return this.to('ListDataSources');
  }

  /**
   * Grants permission to retrieve all domains
   *
   * Access Level: List
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list environment blueprint configuration summaries
   *
   * Access Level: List
   */
  public toListEnvironmentBlueprintConfigurationSummaries() {
    return this.to('ListEnvironmentBlueprintConfigurationSummaries');
  }

  /**
   * Grants permission to list environment blueprint configurations
   *
   * Access Level: List
   */
  public toListEnvironmentBlueprintConfigurations() {
    return this.to('ListEnvironmentBlueprintConfigurations');
  }

  /**
   * Grants permission to list Domain for Environment Blueprints
   *
   * Access Level: List
   */
  public toListEnvironmentBlueprints() {
    return this.to('ListEnvironmentBlueprints');
  }

  /**
   * Grants permission to list Domain for Environment Profiles
   *
   * Access Level: List
   */
  public toListEnvironmentProfiles() {
    return this.to('ListEnvironmentProfiles');
  }

  /**
   * Grants permission to show Environments in the Domain
   *
   * Access Level: List
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permission to list all the DataZone group profiles that the DataZone user profile is a member of
   *
   * Access Level: List
   */
  public toListGroupsForUser() {
    return this.to('ListGroupsForUser');
  }

  /**
   * Grants permission to list metadata generation runs
   *
   * Access Level: List
   */
  public toListMetadataGenerationRuns() {
    return this.to('ListMetadataGenerationRuns');
  }

  /**
   * Grants permission to list notifications and events for a datazone user
   *
   * Access Level: List
   */
  public toListNotifications() {
    return this.to('ListNotifications');
  }

  /**
   * Grants permission to list Project Members
   *
   * Access Level: List
   */
  public toListProjectMemberships() {
    return this.to('ListProjectMemberships');
  }

  /**
   * Grants permission to list Projects
   *
   * Access Level: List
   */
  public toListProjects() {
    return this.to('ListProjects');
  }

  /**
   * Grants permission to List subscription grants for a subscribed principal
   *
   * Access Level: List
   */
  public toListSubscriptionGrants() {
    return this.to('ListSubscriptionGrants');
  }

  /**
   * Grants permission to list subscription requests
   *
   * Access Level: List
   */
  public toListSubscriptionRequests() {
    return this.to('ListSubscriptionRequests');
  }

  /**
   * Grants permission to list subscription targets
   *
   * Access Level: List
   */
  public toListSubscriptionTargets() {
    return this.to('ListSubscriptionTargets');
  }

  /**
   * Grants permission to list subscriptions
   *
   * Access Level: List
   */
  public toListSubscriptions() {
    return this.to('ListSubscriptions');
  }

  /**
   * Grants permission to retrieve all tags associated with a resource
   *
   * Access Level: Read
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list available Manager Secrets
   *
   * Access Level: List
   */
  public toListWarehouseMetadata() {
    return this.to('ListWarehouseMetadata');
  }

  /**
   * Grants permission to provision domain with default project setup
   *
   * Access Level: Write
   */
  public toProvisionDomain() {
    return this.to('ProvisionDomain');
  }

  /**
   * Grants permission to add a resource policy for a DataZone Domain
   *
   * Access Level: Permissions management
   */
  public toPutDomainSharingPolicy() {
    return this.to('PutDomainSharingPolicy');
  }

  /**
   * Grants permission to put environment blueprint configuration
   *
   * Access Level: Write
   */
  public toPutEnvironmentBlueprintConfiguration() {
    return this.to('PutEnvironmentBlueprintConfiguration');
  }

  /**
   * Grants permission to refresh token
   *
   * Access Level: Write
   */
  public toRefreshToken() {
    return this.to('RefreshToken');
  }

  /**
   * Grants permission to reject prediction
   *
   * Access Level: Write
   */
  public toRejectPredictions() {
    return this.to('RejectPredictions');
  }

  /**
   * Grants permission to reject a subscription request for a Data Asset
   *
   * Access Level: Write
   */
  public toRejectSubscriptionRequest() {
    return this.to('RejectSubscriptionRequest');
  }

  /**
   * Grants permission to revoke a subscription
   *
   * Access Level: Write
   */
  public toRevokeSubscription() {
    return this.to('RevokeSubscription');
  }

  /**
   * Grants permission to search datazone entities
   *
   * Access Level: List
   */
  public toSearch() {
    return this.to('Search');
  }

  /**
   * Grants permission to search DataZone group profiles and IAM Identity Center groups
   *
   * Access Level: List
   */
  public toSearchGroupProfiles() {
    return this.to('SearchGroupProfiles');
  }

  /**
   * Grants permission to search listings
   *
   * Access Level: List
   */
  public toSearchListings() {
    return this.to('SearchListings');
  }

  /**
   * Grants permission to search types such asset types and form types in a domain
   *
   * Access Level: List
   */
  public toSearchTypes() {
    return this.to('SearchTypes');
  }

  /**
   * Grants permission to search DataZone user profiles, IAM Identity Center users, and DataZone IAM principal profiles
   *
   * Access Level: List
   */
  public toSearchUserProfiles() {
    return this.to('SearchUserProfiles');
  }

  /**
   * Grants permission to login using SSO
   *
   * Access Level: Write
   */
  public toSsoLogin() {
    return this.to('SsoLogin');
  }

  /**
   * Grants permission to logout as SSO user
   *
   * Access Level: Write
   */
  public toSsoLogout() {
    return this.to('SsoLogout');
  }

  /**
   * Grants permission to start a DataSource run job
   *
   * Access Level: Write
   */
  public toStartDataSourceRun() {
    return this.to('StartDataSourceRun');
  }

  /**
   * Grants permission to start metadata generation run
   *
   * Access Level: Write
   */
  public toStartMetadataGenerationRun() {
    return this.to('StartMetadataGenerationRun');
  }

  /**
   * Grants permission to stop metadata generation run
   *
   * Access Level: Write
   */
  public toStopMetadataGenerationRun() {
    return this.to('StopMetadataGenerationRun');
  }

  /**
   * Grants permission to add or update tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags associated with a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update existing DataSource
   *
   * Access Level: Write
   */
  public toUpdateDataSource() {
    return this.to('UpdateDataSource');
  }

  /**
   * Grants permission to update information for a domain
   *
   * Access Level: Write
   */
  public toUpdateDomain() {
    return this.to('UpdateDomain');
  }

  /**
   * Grants permission to update Environment settings
   *
   * Access Level: Write
   */
  public toUpdateEnvironment() {
    return this.to('UpdateEnvironment');
  }

  /**
   * Grants permission to update Environment Blueprint settings
   *
   * Access Level: Write
   */
  public toUpdateEnvironmentBlueprint() {
    return this.to('UpdateEnvironmentBlueprint');
  }

  /**
   * Grants permission to update environment configuration
   *
   * Access Level: Write
   */
  public toUpdateEnvironmentConfiguration() {
    return this.to('UpdateEnvironmentConfiguration');
  }

  /**
   * Grants permission to update status of the Environment deployment
   *
   * Access Level: Write
   */
  public toUpdateEnvironmentDeploymentStatus() {
    return this.to('UpdateEnvironmentDeploymentStatus');
  }

  /**
   * Grants permission to update EnvironmentProfile configuration
   *
   * Access Level: Write
   */
  public toUpdateEnvironmentProfile() {
    return this.to('UpdateEnvironmentProfile');
  }

  /**
   * Grants permission to update a business glossary
   *
   * Access Level: Write
   */
  public toUpdateGlossary() {
    return this.to('UpdateGlossary');
  }

  /**
   * Grants permission to update a glossary term
   *
   * Access Level: Write
   */
  public toUpdateGlossaryTerm() {
    return this.to('UpdateGlossaryTerm');
  }

  /**
   * Grants permission to update a DataZone group profile
   *
   * Access Level: Write
   */
  public toUpdateGroupProfile() {
    return this.to('UpdateGroupProfile');
  }

  /**
   * Grants permission to update a Project that enables your team to publish and subscribe to data
   *
   * Access Level: Write
   */
  public toUpdateProject() {
    return this.to('UpdateProject');
  }

  /**
   * Grants permission to update a subscription grant status for custom grants
   *
   * Access Level: Write
   */
  public toUpdateSubscriptionGrantStatus() {
    return this.to('UpdateSubscriptionGrantStatus');
  }

  /**
   * Grants permission to update business reason for subscription request for a Data Asset
   *
   * Access Level: Write
   */
  public toUpdateSubscriptionRequest() {
    return this.to('UpdateSubscriptionRequest');
  }

  /**
   * Grants permission to update a subscription target
   *
   * Access Level: Write
   */
  public toUpdateSubscriptionTarget() {
    return this.to('UpdateSubscriptionTarget');
  }

  /**
   * Grants permission to update a DataZone user profile
   *
   * Access Level: Write
   */
  public toUpdateUserProfile() {
    return this.to('UpdateUserProfile');
  }

  /**
   * Grants permission to validate pass role
   *
   * Access Level: Write
   */
  public toValidatePassRole() {
    return this.to('ValidatePassRole');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptPredictions',
      'AcceptSubscriptionRequest',
      'CancelMetadataGenerationRun',
      'CancelSubscription',
      'CreateAsset',
      'CreateAssetRevision',
      'CreateAssetType',
      'CreateDataSource',
      'CreateDomain',
      'CreateEnvironment',
      'CreateEnvironmentBlueprint',
      'CreateEnvironmentProfile',
      'CreateFormType',
      'CreateGlossary',
      'CreateGlossaryTerm',
      'CreateGroupProfile',
      'CreateListingChangeSet',
      'CreateProject',
      'CreateProjectMembership',
      'CreateSubscriptionGrant',
      'CreateSubscriptionRequest',
      'CreateSubscriptionTarget',
      'CreateUserProfile',
      'DeleteAsset',
      'DeleteAssetType',
      'DeleteDataSource',
      'DeleteDomain',
      'DeleteEnvironment',
      'DeleteEnvironmentBlueprint',
      'DeleteEnvironmentBlueprintConfiguration',
      'DeleteEnvironmentProfile',
      'DeleteFormType',
      'DeleteGlossary',
      'DeleteGlossaryTerm',
      'DeleteListing',
      'DeleteProject',
      'DeleteProjectMembership',
      'DeleteSubscriptionGrant',
      'DeleteSubscriptionRequest',
      'DeleteSubscriptionTarget',
      'ProvisionDomain',
      'PutEnvironmentBlueprintConfiguration',
      'RefreshToken',
      'RejectPredictions',
      'RejectSubscriptionRequest',
      'RevokeSubscription',
      'SsoLogin',
      'SsoLogout',
      'StartDataSourceRun',
      'StartMetadataGenerationRun',
      'StopMetadataGenerationRun',
      'UpdateDataSource',
      'UpdateDomain',
      'UpdateEnvironment',
      'UpdateEnvironmentBlueprint',
      'UpdateEnvironmentConfiguration',
      'UpdateEnvironmentDeploymentStatus',
      'UpdateEnvironmentProfile',
      'UpdateGlossary',
      'UpdateGlossaryTerm',
      'UpdateGroupProfile',
      'UpdateProject',
      'UpdateSubscriptionGrantStatus',
      'UpdateSubscriptionRequest',
      'UpdateSubscriptionTarget',
      'UpdateUserProfile',
      'ValidatePassRole'
    ],
    'Permissions management': [
      'DeleteDomainSharingPolicy',
      'GetIamPortalLoginUrl',
      'PutDomainSharingPolicy'
    ],
    Read: [
      'GetAsset',
      'GetAssetType',
      'GetDataSource',
      'GetDataSourceRun',
      'GetDomain',
      'GetDomainSharingPolicy',
      'GetEnvironment',
      'GetEnvironmentActionLink',
      'GetEnvironmentBlueprint',
      'GetEnvironmentBlueprintConfiguration',
      'GetEnvironmentCredentials',
      'GetEnvironmentProfile',
      'GetFormType',
      'GetGlossary',
      'GetGlossaryTerm',
      'GetGroupProfile',
      'GetListing',
      'GetMetadataGenerationRun',
      'GetProject',
      'GetSubscription',
      'GetSubscriptionEligibility',
      'GetSubscriptionGrant',
      'GetSubscriptionRequestDetails',
      'GetSubscriptionTarget',
      'GetUserProfile',
      'ListTagsForResource'
    ],
    List: [
      'ListAccountEnvironments',
      'ListAssetRevisions',
      'ListDataSourceRunActivities',
      'ListDataSourceRuns',
      'ListDataSources',
      'ListDomains',
      'ListEnvironmentBlueprintConfigurationSummaries',
      'ListEnvironmentBlueprintConfigurations',
      'ListEnvironmentBlueprints',
      'ListEnvironmentProfiles',
      'ListEnvironments',
      'ListGroupsForUser',
      'ListMetadataGenerationRuns',
      'ListNotifications',
      'ListProjectMemberships',
      'ListProjects',
      'ListSubscriptionGrants',
      'ListSubscriptionRequests',
      'ListSubscriptionTargets',
      'ListSubscriptions',
      'ListWarehouseMetadata',
      'Search',
      'SearchGroupProfiles',
      'SearchListings',
      'SearchTypes',
      'SearchUserProfiles'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/datazone/latest/userguide/create-domain.html
   *
   * @param domainId - Identifier for the domainId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomain(domainId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:datazone:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateDomain()
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
   * - domain
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
   * - .toCreateDomain()
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
