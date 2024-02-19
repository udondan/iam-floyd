import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [support](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Support extends PolicyStatement {
  public servicePrefix = 'support';

  /**
   * Statement provider for service [support](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupport.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add one or more attachments to an AWS Support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_AddAttachmentsToSet.html
   */
  public toAddAttachmentsToSet() {
    return this.to('AddAttachmentsToSet');
  }

  /**
   * Grants permission to add a customer communication to an AWS Support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_AddCommunicationToCase.html
   */
  public toAddCommunicationToCase() {
    return this.to('AddCommunicationToCase');
  }

  /**
   * Grants permission to creates a new AWS Support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CreateCase.html
   */
  public toCreateCase() {
    return this.to('CreateCase');
  }

  /**
   * Grants permission to describe attachment detail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeAttachment.html
   */
  public toDescribeAttachment() {
    return this.to('DescribeAttachment');
  }

  /**
   * Grants permission to allow secondary services to read AWS Support case attributes.This is an internally managed function
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html
   */
  public toDescribeCaseAttributes() {
    return this.to('DescribeCaseAttributes');
  }

  /**
   * Grants permission to list AWS Support cases that matches the given inputs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCases.html
   */
  public toDescribeCases() {
    return this.to('DescribeCases');
  }

  /**
   * Grants permission to get a single communication and attachments for a single AWS Support case
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html
   */
  public toDescribeCommunication() {
    return this.to('DescribeCommunication');
  }

  /**
   * Grants permission to list the communications and attachments for one or more AWS Support cases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCommunications.html
   */
  public toDescribeCommunications() {
    return this.to('DescribeCommunications');
  }

  /**
   * Grants permission to describes the available options for creating a support case
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCreateCaseOptions.html
   */
  public toDescribeCreateCaseOptions() {
    return this.to('DescribeCreateCaseOptions');
  }

  /**
   * Grants permission to return issue types for AWS Support cases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html
   */
  public toDescribeIssueTypes() {
    return this.to('DescribeIssueTypes');
  }

  /**
   * Grants permission to list AWS services and categories that applies to each service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeServices.html
   */
  public toDescribeServices() {
    return this.to('DescribeServices');
  }

  /**
   * Grants permission to list severity levels that can be assigned to an AWS Support case
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeSeverityLevels.html
   */
  public toDescribeSeverityLevels() {
    return this.to('DescribeSeverityLevels');
  }

  /**
   * Grants permission to return the support level for an AWS Account identifier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html
   */
  public toDescribeSupportLevel() {
    return this.to('DescribeSupportLevel');
  }

  /**
   * Grants permission to describes the available support languages for a given category code, service code and issue type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeSupportedLanguages.html
   */
  public toDescribeSupportedLanguages() {
    return this.to('DescribeSupportedLanguages');
  }

  /**
   * Grants permission to get the status of a Trusted Advisor refresh check based on a list of check identifiers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckRefreshStatuses.html
   */
  public toDescribeTrustedAdvisorCheckRefreshStatuses() {
    return this.to('DescribeTrustedAdvisorCheckRefreshStatuses');
  }

  /**
   * Grants permission to get the results of the Trusted Advisor check that has the specified check identifier
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckResult.html
   */
  public toDescribeTrustedAdvisorCheckResult() {
    return this.to('DescribeTrustedAdvisorCheckResult');
  }

  /**
   * Grants permission to get the summaries of the results of the Trusted Advisor checks that have the specified check identifiers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckSummaries.html
   */
  public toDescribeTrustedAdvisorCheckSummaries() {
    return this.to('DescribeTrustedAdvisorCheckSummaries');
  }

  /**
   * Grants permission to get a list of all available Trusted Advisor checks, including name, identifier, category and description
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorChecks.html
   */
  public toDescribeTrustedAdvisorChecks() {
    return this.to('DescribeTrustedAdvisorChecks');
  }

  /**
   * Grants permission to initiate a call on AWS Support Center. This is an internally managed function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html
   */
  public toInitiateCallForCase() {
    return this.to('InitiateCallForCase');
  }

  /**
   * Grants permission to initiate a chat on AWS Support Center.This is an internally managed function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html
   */
  public toInitiateChatForCase() {
    return this.to('InitiateChatForCase');
  }

  /**
   * Grants permission to allow secondary services to attach attributes to AWS Support cases. This is an internally managed function
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html
   */
  public toPutCaseAttributes() {
    return this.to('PutCaseAttributes');
  }

  /**
   * Grants permission to rate an AWS Support case communication
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html
   */
  public toRateCaseCommunication() {
    return this.to('RateCaseCommunication');
  }

  /**
   * Grants permission to requests a refresh of the Trusted Advisor check that has the specified check identifier
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_RefreshTrustedAdvisorCheck.html
   */
  public toRefreshTrustedAdvisorCheck() {
    return this.to('RefreshTrustedAdvisorCheck');
  }

  /**
   * Grants permission to resolve an AWS Support case
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_ResolveCase.html
   */
  public toResolveCase() {
    return this.to('ResolveCase');
  }

  /**
   * Grants permission to return a list of AWS Support cases that matches the given inputs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/user/accessing-support.html
   */
  public toSearchForCases() {
    return this.to('SearchForCases');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddAttachmentsToSet',
      'AddCommunicationToCase',
      'CreateCase',
      'InitiateCallForCase',
      'InitiateChatForCase',
      'PutCaseAttributes',
      'RateCaseCommunication',
      'RefreshTrustedAdvisorCheck',
      'ResolveCase'
    ],
    Read: [
      'DescribeAttachment',
      'DescribeCaseAttributes',
      'DescribeCases',
      'DescribeCommunication',
      'DescribeCommunications',
      'DescribeCreateCaseOptions',
      'DescribeIssueTypes',
      'DescribeServices',
      'DescribeSeverityLevels',
      'DescribeSupportLevel',
      'DescribeSupportedLanguages',
      'DescribeTrustedAdvisorCheckRefreshStatuses',
      'DescribeTrustedAdvisorCheckResult',
      'DescribeTrustedAdvisorCheckSummaries',
      'DescribeTrustedAdvisorChecks',
      'SearchForCases'
    ]
  };
}
