import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [cloudtrail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudtrail.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cloudtrail extends PolicyStatement {
  public servicePrefix = 'cloudtrail';

  /**
   * Statement provider for service [cloudtrail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscloudtrail.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add one or more tags to a trail, event data store, channel or dashboard, up to a limit of 50
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AddTags.html
   */
  public toAddTags() {
    return this.to('AddTags');
  }

  /**
   * Grants permission to cancel a running query
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CancelQuery.html
   */
  public toCancelQuery() {
    return this.to('CancelQuery');
  }

  /**
   * Grants permission to create a channel
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - cloudtrail:AddTags
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateChannel.html
   */
  public toCreateChannel() {
    return this.to('CreateChannel');
  }

  /**
   * Grants permission to create a dashboard
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - cloudtrail:AddTags
   * - cloudtrail:StartDashboardRefresh
   * - cloudtrail:StartQuery
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateDashboard.html
   */
  public toCreateDashboard() {
    return this.to('CreateDashboard');
  }

  /**
   * Grants permission to create an event data store
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - cloudtrail:AddTags
   * - iam:CreateServiceLinkedRole
   * - iam:GetRole
   * - kms:Decrypt
   * - kms:GenerateDataKey
   * - organizations:ListAWSServiceAccessForOrganization
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateEventDataStore.html
   */
  public toCreateEventDataStore() {
    return this.to('CreateEventDataStore');
  }

  /**
   * Grants permission to create a service-linked channel that specifies the settings for delivery of log data to an AWS service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/viewing-service-linked-channels.html#slc-service-events
   */
  public toCreateServiceLinkedChannel() {
    return this.to('CreateServiceLinkedChannel');
  }

  /**
   * Grants permission to create a trail that specifies the settings for delivery of log data to an Amazon S3 bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - cloudtrail:AddTags
   * - iam:CreateServiceLinkedRole
   * - iam:GetRole
   * - organizations:ListAWSServiceAccessForOrganization
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_CreateTrail.html
   */
  public toCreateTrail() {
    return this.to('CreateTrail');
  }

  /**
   * Grants permission to delete a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteChannel.html
   */
  public toDeleteChannel() {
    return this.to('DeleteChannel');
  }

  /**
   * Grants permission to delete a dashboard
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteDashboard.html
   */
  public toDeleteDashboard() {
    return this.to('DeleteDashboard');
  }

  /**
   * Grants permission to delete an event data store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteEventDataStore.html
   */
  public toDeleteEventDataStore() {
    return this.to('DeleteEventDataStore');
  }

  /**
   * Grants permission to delete a resource policy from the provided resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to delete a service-linked channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/viewing-service-linked-channels.html#slc-service-events
   */
  public toDeleteServiceLinkedChannel() {
    return this.to('DeleteServiceLinkedChannel');
  }

  /**
   * Grants permission to delete a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeleteTrail.html
   */
  public toDeleteTrail() {
    return this.to('DeleteTrail');
  }

  /**
   * Grants permission to deregister an AWS Organizations member account as a delegated administrator
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - organizations:DeregisterDelegatedAdministrator
   * - organizations:ListAWSServiceAccessForOrganization
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DeregisterOrganizationDelegatedAdmin.html
   */
  public toDeregisterOrganizationDelegatedAdmin() {
    return this.to('DeregisterOrganizationDelegatedAdmin');
  }

  /**
   * Grants permission to list details for the query
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeQuery.html
   */
  public toDescribeQuery() {
    return this.to('DescribeQuery');
  }

  /**
   * Grants permission to list settings for the trails associated with the current region for your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DescribeTrails.html
   */
  public toDescribeTrails() {
    return this.to('DescribeTrails');
  }

  /**
   * Grants permission to disable federation of event data store data by using the AWS Glue Data Catalog
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - glue:DeleteDatabase
   * - glue:DeleteTable
   * - glue:PassConnection
   * - lakeformation:DeregisterResource
   * - lakeformation:RegisterResource
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DisableFederation.html
   */
  public toDisableFederation() {
    return this.to('DisableFederation');
  }

  /**
   * Grants permission to enable federation of event data store data by using the AWS Glue Data Catalog
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - glue:CreateDatabase
   * - glue:CreateTable
   * - iam:GetRole
   * - iam:PassRole
   * - lakeformation:DeregisterResource
   * - lakeformation:RegisterResource
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_EnableFederation.html
   */
  public toEnableFederation() {
    return this.to('EnableFederation');
  }

  /**
   * Grants permission to generate a query for a specified event data store using the CloudTrail Lake query generator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-query-generator.html
   */
  public toGenerateQuery() {
    return this.to('GenerateQuery');
  }

  /**
   * Grants permission to generate a results summary for specified queries using the CloudTrail natural language generator
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - cloudtrail:GetQueryResults
   * - kms:Decrypt
   * - kms:GenerateDataKey
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-results-summary.html
   */
  public toGenerateQueryResultsSummary() {
    return this.to('GenerateQueryResultsSummary');
  }

  /**
   * Grants permission to return information about a specific channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetChannel.html
   */
  public toGetChannel() {
    return this.to('GetChannel');
  }

  /**
   * Grants permission to list settings for the dashboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetDashboard.html
   */
  public toGetDashboard() {
    return this.to('GetDashboard');
  }

  /**
   * Grants permission to list settings for the event data store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetEventDataStore.html
   */
  public toGetEventDataStore() {
    return this.to('GetEventDataStore');
  }

  /**
   * Grants permission to get data from an event data store by using the AWS Glue Data Catalog
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   * - kms:GenerateDataKey
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html#query-federation-permissions
   */
  public toGetEventDataStoreData() {
    return this.to('GetEventDataStoreData');
  }

  /**
   * Grants permission to list settings for event selectors configured for a trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetEventSelectors.html
   */
  public toGetEventSelectors() {
    return this.to('GetEventSelectors');
  }

  /**
   * Grants permission to return information about a specific import
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetImport.html
   */
  public toGetImport() {
    return this.to('GetImport');
  }

  /**
   * Grants permission to list CloudTrail Insights selectors that are configured for a trail or event data store
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetInsightSelectors.html
   */
  public toGetInsightSelectors() {
    return this.to('GetInsightSelectors');
  }

  /**
   * Grants permission to fetch results of a complete query
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - kms:Decrypt
   * - kms:GenerateDataKey
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetQueryResults.html
   */
  public toGetQueryResults() {
    return this.to('GetQueryResults');
  }

  /**
   * Grants permission to get the resource policy attached to the provided resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to list settings for the service-linked channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/viewing-service-linked-channels.html#slc-service-events
   */
  public toGetServiceLinkedChannel() {
    return this.to('GetServiceLinkedChannel');
  }

  /**
   * Grants permission to list settings for the trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrail.html
   */
  public toGetTrail() {
    return this.to('GetTrail');
  }

  /**
   * Grants permission to retrieve a JSON-formatted list of information about the specified trail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_GetTrailStatus.html
   */
  public toGetTrailStatus() {
    return this.to('GetTrailStatus');
  }

  /**
   * Grants permission to list the channels in the current account, and their source names
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListChannels.html
   */
  public toListChannels() {
    return this.to('ListChannels');
  }

  /**
   * Grants permission to list dashboards associated with the current region for your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListDashboards.html
   */
  public toListDashboards() {
    return this.to('ListDashboards');
  }

  /**
   * Grants permission to list event data stores associated with the current region for your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListEventDataStores.html
   */
  public toListEventDataStores() {
    return this.to('ListEventDataStores');
  }

  /**
   * Grants permission to return a list of failures for the specified import
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListImportFailures.html
   */
  public toListImportFailures() {
    return this.to('ListImportFailures');
  }

  /**
   * Grants permission to return information on all imports, or a select set of imports by ImportStatus or Destination
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListImports.html
   */
  public toListImports() {
    return this.to('ListImports');
  }

  /**
   * Grants permission to list the public keys whose private keys were used to sign trail digest files within a specified time range
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListPublicKeys.html
   */
  public toListPublicKeys() {
    return this.to('ListPublicKeys');
  }

  /**
   * Grants permission to list queries associated with an event data store
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListQueries.html
   */
  public toListQueries() {
    return this.to('ListQueries');
  }

  /**
   * Grants permission to list service-linked channels associated with the current region for a specified account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/viewing-service-linked-channels.html#slc-service-events
   */
  public toListServiceLinkedChannels() {
    return this.to('ListServiceLinkedChannels');
  }

  /**
   * Grants permission to list the tags for trails, event data stores, channels or dashboards in the current region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    return this.to('ListTags');
  }

  /**
   * Grants permission to list trails associated with the current region for your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_ListTrails.html
   */
  public toListTrails() {
    return this.to('ListTrails');
  }

  /**
   * Grants permission to look up and retrieve metric data for API activity events captured by CloudTrail that create, update, or delete resources in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html
   */
  public toLookupEvents() {
    return this.to('LookupEvents');
  }

  /**
   * Grants permission to create and update event selectors for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutEventSelectors.html
   */
  public toPutEventSelectors() {
    return this.to('PutEventSelectors');
  }

  /**
   * Grants permission to create and update CloudTrail Insights selectors for a trail or event data store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutInsightSelectors.html
   */
  public toPutInsightSelectors() {
    return this.to('PutInsightSelectors');
  }

  /**
   * Grants permission to attach a resource policy to the provided resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to register an AWS Organizations member account as a delegated administrator
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:GetRole
   * - organizations:ListAWSServiceAccessForOrganization
   * - organizations:RegisterDelegatedAdministrator
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RegisterOrganizationDelegatedAdmin.html
   */
  public toRegisterOrganizationDelegatedAdmin() {
    return this.to('RegisterOrganizationDelegatedAdmin');
  }

  /**
   * Grants permission to remove tags from a trail, event data store, channel or dashboard
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RemoveTags.html
   */
  public toRemoveTags() {
    return this.to('RemoveTags');
  }

  /**
   * Grants permission to restore an event data store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_RestoreEventDataStore.html
   */
  public toRestoreEventDataStore() {
    return this.to('RestoreEventDataStore');
  }

  /**
   * Grants permission to start a refresh on the specified dashboard
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cloudtrail:StartQuery
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartDashboardRefresh.html
   */
  public toStartDashboardRefresh() {
    return this.to('StartDashboardRefresh');
  }

  /**
   * Grants permission to start ingestion on an event data store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartEventDataStoreIngestion.html
   */
  public toStartEventDataStoreIngestion() {
    return this.to('StartEventDataStoreIngestion');
  }

  /**
   * Grants permission to start an import of logged trail events from a source S3 bucket to a destination event data store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartImport.html
   */
  public toStartImport() {
    return this.to('StartImport');
  }

  /**
   * Grants permission to start the recording of AWS API calls and log file delivery for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartLogging.html
   */
  public toStartLogging() {
    return this.to('StartLogging');
  }

  /**
   * Grants permission to start a new query on a specified event data store
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - kms:Decrypt
   * - kms:GenerateDataKey
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StartQuery.html
   */
  public toStartQuery() {
    return this.to('StartQuery');
  }

  /**
   * Grants permission to stop ingestion on an event data store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopEventDataStoreIngestion.html
   */
  public toStopEventDataStoreIngestion() {
    return this.to('StopEventDataStoreIngestion');
  }

  /**
   * Grants permission to stop a specified import
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopImport.html
   */
  public toStopImport() {
    return this.to('StopImport');
  }

  /**
   * Grants permission to stop the recording of AWS API calls and log file delivery for a trail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_StopLogging.html
   */
  public toStopLogging() {
    return this.to('StopLogging');
  }

  /**
   * Grants permission to update a channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateChannel.html
   */
  public toUpdateChannel() {
    return this.to('UpdateChannel');
  }

  /**
   * Grants permission to update a dashboard
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cloudtrail:StartDashboardRefresh
   * - cloudtrail:StartQuery
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateDashboard.html
   */
  public toUpdateDashboard() {
    return this.to('UpdateDashboard');
  }

  /**
   * Grants permission to update an event data store
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:GetRole
   * - kms:Decrypt
   * - kms:GenerateDataKey
   * - organizations:ListAWSServiceAccessForOrganization
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateEventDataStore.html
   */
  public toUpdateEventDataStore() {
    return this.to('UpdateEventDataStore');
  }

  /**
   * Grants permission to update the service-linked channel settings for delivery of log data to an AWS service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/viewing-service-linked-channels.html#slc-service-events
   */
  public toUpdateServiceLinkedChannel() {
    return this.to('UpdateServiceLinkedChannel');
  }

  /**
   * Grants permission to update the settings that specify delivery of log files
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:GetRole
   * - organizations:ListAWSServiceAccessForOrganization
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_UpdateTrail.html
   */
  public toUpdateTrail() {
    return this.to('UpdateTrail');
  }

  protected accessLevelList: AccessLevelList = {
    Tagging: [
      'AddTags',
      'RemoveTags'
    ],
    Write: [
      'CancelQuery',
      'CreateChannel',
      'CreateDashboard',
      'CreateEventDataStore',
      'CreateServiceLinkedChannel',
      'CreateTrail',
      'DeleteChannel',
      'DeleteDashboard',
      'DeleteEventDataStore',
      'DeleteResourcePolicy',
      'DeleteServiceLinkedChannel',
      'DeleteTrail',
      'DeregisterOrganizationDelegatedAdmin',
      'DisableFederation',
      'EnableFederation',
      'GenerateQuery',
      'PutEventSelectors',
      'PutInsightSelectors',
      'PutResourcePolicy',
      'RegisterOrganizationDelegatedAdmin',
      'RestoreEventDataStore',
      'StartDashboardRefresh',
      'StartEventDataStoreIngestion',
      'StartImport',
      'StartLogging',
      'StartQuery',
      'StopEventDataStoreIngestion',
      'StopImport',
      'StopLogging',
      'UpdateChannel',
      'UpdateDashboard',
      'UpdateEventDataStore',
      'UpdateServiceLinkedChannel',
      'UpdateTrail'
    ],
    Read: [
      'DescribeQuery',
      'DescribeTrails',
      'GenerateQueryResultsSummary',
      'GetChannel',
      'GetDashboard',
      'GetEventDataStore',
      'GetEventDataStoreData',
      'GetEventSelectors',
      'GetImport',
      'GetInsightSelectors',
      'GetQueryResults',
      'GetResourcePolicy',
      'GetServiceLinkedChannel',
      'GetTrail',
      'GetTrailStatus',
      'ListImportFailures',
      'ListPublicKeys',
      'ListTags',
      'LookupEvents'
    ],
    List: [
      'ListChannels',
      'ListDashboards',
      'ListEventDataStores',
      'ListImports',
      'ListQueries',
      'ListServiceLinkedChannels',
      'ListTrails'
    ]
  };

  /**
   * Adds a resource of type trail to the statement
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html#how-cloudtrail-works-trails
   *
   * @param trailName - Identifier for the trailName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrail(trailName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudtrail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:trail/${ trailName }`);
  }

  /**
   * Adds a resource of type eventdatastore to the statement
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html#how-cloudtrail-works-lake
   *
   * @param eventDataStoreId - Identifier for the eventDataStoreId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventdatastore(eventDataStoreId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudtrail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:eventdatastore/${ eventDataStoreId }`);
  }

  /**
   * Adds a resource of type channel to the statement
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html#how-cloudtrail-works-channels
   *
   * @param channelId - Identifier for the channelId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onChannel(channelId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudtrail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:channel/${ channelId }`);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-dashboard.html
   *
   * @param dashboardName - Identifier for the dashboardName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDashboard(dashboardName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cloudtrail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:dashboard/${ dashboardName }`);
  }

  /**
   * Filters access by the tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreateChannel()
   * - .toCreateDashboard()
   * - .toCreateEventDataStore()
   * - .toCreateTrail()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - trail
   * - eventdatastore
   * - channel
   * - dashboard
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAddTags()
   * - .toCreateChannel()
   * - .toCreateDashboard()
   * - .toCreateEventDataStore()
   * - .toCreateTrail()
   * - .toRemoveTags()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
