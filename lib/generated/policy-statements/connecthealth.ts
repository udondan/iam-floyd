import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [health-agent](https://docs.aws.amazon.com/service-authorization/latest/reference/list_connecthealth.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class HealthAgent extends PolicyStatement {
  public servicePrefix = 'health-agent';

  /**
   * Statement provider for service [health-agent](https://docs.aws.amazon.com/service-authorization/latest/reference/list_connecthealth.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to activate a subscription to enable billing for a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_ActivateSubscription.html
   */
  public toActivateSubscription() {
    return this.to('ActivateSubscription');
  }

  /**
   * Grants permission to create a new domain for managing HealthAgent resources
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_CreateDomain.html
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to create a new subscription within a domain for billing and user management
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_CreateSubscription.html
   */
  public toCreateSubscription() {
    return this.to('CreateSubscription');
  }

  /**
   * Grants permission to deactivate a subscription to stop billing for a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_DeactivateSubscription.html
   */
  public toDeactivateSubscription() {
    return this.to('DeactivateSubscription');
  }

  /**
   * Grants permission to delete a domain and all associated resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to retrieve information about a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_GetDomain.html
   */
  public toGetDomain() {
    return this.to('GetDomain');
  }

  /**
   * Grants permission to retrieve aggregated analytics for a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_GetDomainAnalytics.html
   */
  public toGetDomainAnalytics() {
    return this.to('GetDomainAnalytics');
  }

  /**
   * Grants permission to retrieve details about an existing Medical Scribe listening session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_GetMedicalScribeListeningSession.html
   */
  public toGetMedicalScribeListeningSession() {
    return this.to('GetMedicalScribeListeningSession');
  }

  /**
   * Grants permission to get details of a started patient insights job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_GetPatientInsightsJob.html
   */
  public toGetPatientInsightsJob() {
    return this.to('GetPatientInsightsJob');
  }

  /**
   * Grants permission to retrieve information about a subscription
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_GetSubscription.html
   */
  public toGetSubscription() {
    return this.to('GetSubscription');
  }

  /**
   * Grants permission to list domains for a given account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list session records for a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_ListSessionRecords.html
   */
  public toListSessionRecords() {
    return this.to('ListSessionRecords');
  }

  /**
   * Grants permission to list all subscriptions within a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_ListSubscriptions.html
   */
  public toListSubscriptions() {
    return this.to('ListSubscriptions');
  }

  /**
   * Grants permission to list the tags for the specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start a new Medical Scribe listening session for real-time audio transcription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_StartMedicalScribeListeningSession.html
   */
  public toStartMedicalScribeListeningSession() {
    return this.to('StartMedicalScribeListeningSession');
  }

  /**
   * Grants permission to start a new patient insights job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_StartPatientInsightsJob.html
   */
  public toStartPatientInsightsJob() {
    return this.to('StartPatientInsightsJob');
  }

  /**
   * Grants permission to add the specified tags to the specified resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the tags identified by the TagKeys list from a resource
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ActivateSubscription',
      'CreateDomain',
      'CreateSubscription',
      'DeactivateSubscription',
      'DeleteDomain',
      'StartMedicalScribeListeningSession',
      'StartPatientInsightsJob',
      'TagResource',
      'UntagResource'
    ],
    Read: [
      'GetDomain',
      'GetDomainAnalytics',
      'GetMedicalScribeListeningSession',
      'GetPatientInsightsJob',
      'GetSubscription'
    ],
    List: [
      'ListDomains',
      'ListSessionRecords',
      'ListSubscriptions',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Agent to the statement
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/agent-customization.html
   *
   * @param domainId - Identifier for the domainId.
   * @param agentId - Identifier for the agentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAgent(domainId: string, agentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:health-agent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainId }/agent/${ agentId }`);
  }

  /**
   * Adds a resource of type Domain to the statement
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/setting-up.html#setting-up-create-domain
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
    return this.on(`arn:${ partition ?? this.defaultPartition }:health-agent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainId }`);
  }

  /**
   * Adds a resource of type Integration to the statement
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/configuring-testing-pe-agents.html
   *
   * @param domainId - Identifier for the domainId.
   * @param integrationId - Identifier for the integrationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegration(domainId: string, integrationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:health-agent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainId }/integration/${ integrationId }`);
  }

  /**
   * Adds a resource of type PatientInsightsJob to the statement
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/patient-insights.html
   *
   * @param domainId - Identifier for the domainId.
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPatientInsightsJob(domainId: string, jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:health-agent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainId }/patient-insights-job/${ jobId }`);
  }

  /**
   * Adds a resource of type Session to the statement
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/patient-engagement-overview.html
   *
   * @param domainId - Identifier for the domainId.
   * @param sessionId - Identifier for the sessionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSession(domainId: string, sessionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:health-agent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainId }/session/${ sessionId }`);
  }

  /**
   * Adds a resource of type Subscription to the statement
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/ambient-documentation.html#al-subscription-management
   *
   * @param domainId - Identifier for the domainId.
   * @param subscriptionId - Identifier for the subscriptionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSubscription(domainId: string, subscriptionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:health-agent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainId }/subscription/${ subscriptionId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/security-iam-service-with-iam.htmlsecurity-iam-service-with-iam.html#security-iam-service-with-iam-tags
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
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/security-iam-service-with-iam.htmlsecurity-iam-service-with-iam.html#security-iam-service-with-iam-tags
   *
   * Applies to actions:
   * - .toActivateSubscription()
   * - .toCreateSubscription()
   * - .toDeactivateSubscription()
   * - .toDeleteDomain()
   * - .toGetDomain()
   * - .toGetDomainAnalytics()
   * - .toGetMedicalScribeListeningSession()
   * - .toGetPatientInsightsJob()
   * - .toGetSubscription()
   * - .toListSessionRecords()
   * - .toListSubscriptions()
   * - .toListTagsForResource()
   * - .toStartMedicalScribeListeningSession()
   * - .toStartPatientInsightsJob()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - Agent
   * - Domain
   * - Integration
   * - PatientInsightsJob
   * - Session
   * - Subscription
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
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/security-iam-service-with-iam.htmlsecurity-iam-service-with-iam.html#security-iam-service-with-iam-tags
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
