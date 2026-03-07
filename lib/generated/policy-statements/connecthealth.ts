import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [health-agent](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnecthealth.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class HealthAgent extends PolicyStatement {
  public servicePrefix = 'health-agent';

  /**
   * Statement provider for service [health-agent](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnecthealth.html).
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
   * https://docs.aws.amazon.com/connecthealth/latest/api/API_ActivateSubscription.html
   */
  public toActivateSubscription() {
    return this.to('ActivateSubscription');
  }

  /**
   * Grants permission to cancel an appointment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toCancelAppointment() {
    return this.to('CancelAppointment');
  }

  /**
   * Grants permission to create a new agent with an initial version in DRAFT state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toCreateAgent() {
    return this.to('CreateAgent');
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
   * Dependent actions:
   * - health-agent:TagResource
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to create a new integration for a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toCreateIntegration() {
    return this.to('CreateIntegration');
  }

  /**
   * Grants permission to create a new session with specified agent configurations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toCreateSession() {
    return this.to('CreateSession');
  }

  /**
   * Grants permission to create a new subscription within a domain for billing and user management
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toCreateSubscription() {
    return this.to('CreateSubscription');
  }

  /**
   * Grants permission to deactivate a subscription to stop billing for a user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/API_DeactivateSubscription.html
   */
  public toDeactivateSubscription() {
    return this.to('DeactivateSubscription');
  }

  /**
   * Grants permission to delete an agent configuration and all its versions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/API_DeleteAgent.html
   */
  public toDeleteAgent() {
    return this.to('DeleteAgent');
  }

  /**
   * Grants permission to delete a domain and all associated resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to delete an integration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toDeleteIntegration() {
    return this.to('DeleteIntegration');
  }

  /**
   * Grants permission to retrieve an agent configuration, defaulting to the most recent version if not specified
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toGetAgent() {
    return this.to('GetAgent');
  }

  /**
   * Grants permission to retrieve the care team provider of a patient
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toGetCareTeamProvider() {
    return this.to('GetCareTeamProvider');
  }

  /**
   * Grants permission to retrieve information about a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toGetDomain() {
    return this.to('GetDomain');
  }

  /**
   * Grants permission to get an existing integration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toGetIntegration() {
    return this.to('GetIntegration');
  }

  /**
   * Grants permission to retrieve details about an existing Medical Scribe listening session
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/API_GetMedicalScribeListeningSession.html
   */
  public toGetMedicalScribeListeningSession() {
    return this.to('GetMedicalScribeListeningSession');
  }

  /**
   * Grants permission to retrieve patient information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toGetPatient() {
    return this.to('GetPatient');
  }

  /**
   * Grants permission to get details of a started patient insights job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toGetPatientInsightsJob() {
    return this.to('GetPatientInsightsJob');
  }

  /**
   * Grants permission to retrieve practitioner information
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toGetPractitioner() {
    return this.to('GetPractitioner');
  }

  /**
   * Grants permission to retrieve structured session context including attributes and collected data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toGetSessionContext() {
    return this.to('GetSessionContext');
  }

  /**
   * Grants permission to retrieve information about a subscription
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toGetSubscription() {
    return this.to('GetSubscription');
  }

  /**
   * Grants permission to invoke an agent within a session with streaming response support
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toInvokeAgent() {
    return this.to('InvokeAgent');
  }

  /**
   * Grants permission to list all agents in a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toListAgents() {
    return this.to('ListAgents');
  }

  /**
   * Grants permission to list available appointment slots
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toListAppointmentSlots() {
    return this.to('ListAppointmentSlots');
  }

  /**
   * Grants permission to list domains for a given account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list integrations for a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toListIntegrations() {
    return this.to('ListIntegrations');
  }

  /**
   * Grants permission to list patient appointments
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toListPatientAppointments() {
    return this.to('ListPatientAppointments');
  }

  /**
   * Grants permission to list patient insurance coverages
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toListPatientInsuranceCoverages() {
    return this.to('ListPatientInsuranceCoverages');
  }

  /**
   * Grants permission to retrieve active providers available for scheduling appointments with a patient
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toListProviders() {
    return this.to('ListProviders');
  }

  /**
   * Grants permission to list all subscriptions within a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toListSubscriptions() {
    return this.to('ListSubscriptions');
  }

  /**
   * Grants permission to list the tags for the specified resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to match a patient
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toMatchPatient() {
    return this.to('MatchPatient');
  }

  /**
   * Grants permission to publish an agent configuration version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toPublishAgent() {
    return this.to('PublishAgent');
  }

  /**
   * Grants permission to reschedule an appointment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toRescheduleAppointment() {
    return this.to('RescheduleAppointment');
  }

  /**
   * Grants permission to schedule an appointment for a patient
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toScheduleAppointment() {
    return this.to('ScheduleAppointment');
  }

  /**
   * Grants permission to start a new Medical Scribe listening session for real-time audio transcription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/API_StartMedicalScribeListeningSession.html
   */
  public toStartMedicalScribeListeningSession() {
    return this.to('StartMedicalScribeListeningSession');
  }

  /**
   * Grants permission to start a new patient insights job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toStartPatientInsightsJob() {
    return this.to('StartPatientInsightsJob');
  }

  /**
   * Grants permission to add the specified tags to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the tags identified by the TagKeys list from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a draft agent configuration, creating a new draft version if none exists
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toUpdateAgent() {
    return this.to('UpdateAgent');
  }

  /**
   * Grants permission to update an existing integration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toUpdateIntegration() {
    return this.to('UpdateIntegration');
  }

  /**
   * Grants permission to update session attributes such as departmentId and appointmentType
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connecthealth/latest/userguide/
   */
  public toUpdateSession() {
    return this.to('UpdateSession');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ActivateSubscription',
      'CancelAppointment',
      'CreateAgent',
      'CreateDomain',
      'CreateIntegration',
      'CreateSession',
      'CreateSubscription',
      'DeactivateSubscription',
      'DeleteAgent',
      'DeleteDomain',
      'DeleteIntegration',
      'InvokeAgent',
      'PublishAgent',
      'RescheduleAppointment',
      'ScheduleAppointment',
      'StartMedicalScribeListeningSession',
      'StartPatientInsightsJob',
      'UpdateAgent',
      'UpdateIntegration',
      'UpdateSession'
    ],
    Read: [
      'GetAgent',
      'GetCareTeamProvider',
      'GetDomain',
      'GetIntegration',
      'GetMedicalScribeListeningSession',
      'GetPatient',
      'GetPatientInsightsJob',
      'GetPractitioner',
      'GetSessionContext',
      'GetSubscription',
      'ListAppointmentSlots',
      'ListPatientAppointments',
      'ListPatientInsuranceCoverages',
      'ListProviders',
      'MatchPatient'
    ],
    List: [
      'ListAgents',
      'ListDomains',
      'ListIntegrations',
      'ListSubscriptions',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Domain to the statement
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/Domain.html
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
   * Adds a resource of type PatientInsightsJob to the statement
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/PatientInsightsJob.html
   *
   * @param domainId - Identifier for the domainId.
   * @param jobId - Identifier for the jobId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPatientInsightsJob(domainId: string, jobId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:health-agent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainId }/patient-insights-job/${ jobId }`);
  }

  /**
   * Adds a resource of type Subscription to the statement
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/Subscription.html
   *
   * @param domainId - Identifier for the domainId.
   * @param subscriptionId - Identifier for the subscriptionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSubscription(domainId: string, subscriptionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:health-agent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainId }/subscription/${ subscriptionId }`);
  }

  /**
   * Adds a resource of type Integration to the statement
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/Integration.html
   *
   * @param domainId - Identifier for the domainId.
   * @param integrationId - Identifier for the integrationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onIntegration(domainId: string, integrationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:health-agent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainId }/integration/${ integrationId }`);
  }

  /**
   * Adds a resource of type Agent to the statement
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/Agent.html
   *
   * @param domainId - Identifier for the domainId.
   * @param agentId - Identifier for the agentId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAgent(domainId: string, agentId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:health-agent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainId }/agent/${ agentId }`);
  }

  /**
   * Adds a resource of type Session to the statement
   *
   * https://docs.aws.amazon.com/connecthealth/latest/api/Session.html
   *
   * @param domainId - Identifier for the domainId.
   * @param sessionId - Identifier for the sessionId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSession(domainId: string, sessionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:health-agent:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:domain/${ domainId }/session/${ sessionId }`);
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
   * - .toTagResource()
   *
   * Applies to resource types:
   * - Domain
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
