import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
   * Adds one or more attachments to an AWS Support case.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_AddAttachmentsToSet.html
   */
  public toAddAttachmentsToSet() {
    return this.to('AddAttachmentsToSet');
  }

  /**
   * Adds a customer communication to an AWS Support case.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_AddCommunicationToCase.html
   */
  public toAddCommunicationToCase() {
    return this.to('AddCommunicationToCase');
  }

  /**
   * Creates a new AWS Support case.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CreateCase.html
   */
  public toCreateCase() {
    return this.to('CreateCase');
  }

  /**
   * Returns the description for an attachment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeAttachment.html
   */
  public toDescribeAttachment() {
    return this.to('DescribeAttachment');
  }

  /**
   * This is an internally managed function which allows secondary services to read AWS Support case attributes.
   *
   * Access Level: Read
   */
  public toDescribeCaseAttributes() {
    return this.to('DescribeCaseAttributes');
  }

  /**
   * Returns a list of AWS Support cases that matches the given inputs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCases.html
   */
  public toDescribeCases() {
    return this.to('DescribeCases');
  }

  /**
   * Returns the communications and attachments for one or more AWS Support cases.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCommunications.html
   */
  public toDescribeCommunications() {
    return this.to('DescribeCommunications');
  }

  /**
   * Returns issue types for AWS Support cases.
   *
   * Access Level: Read
   */
  public toDescribeIssueTypes() {
    return this.to('DescribeIssueTypes');
  }

  /**
   * Returns the current list of AWS services and categories that applies to each service.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeServices.html
   */
  public toDescribeServices() {
    return this.to('DescribeServices');
  }

  /**
   * Returns the list of severity levels that can be assigned to an AWS Support case.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeSeverityLevels.html
   */
  public toDescribeSeverityLevels() {
    return this.to('DescribeSeverityLevels');
  }

  /**
   * Returns the support level for an AWS Account identifier.
   *
   * Access Level: Read
   */
  public toDescribeSupportLevel() {
    return this.to('DescribeSupportLevel');
  }

  /**
   * Returns the status of a Trusted Advisor refresh check based on a list of check identifiers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckRefreshStatuses.html
   */
  public toDescribeTrustedAdvisorCheckRefreshStatuses() {
    return this.to('DescribeTrustedAdvisorCheckRefreshStatuses');
  }

  /**
   * Returns the results of the Trusted Advisor check that has the specified check identifier.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckResult.html
   */
  public toDescribeTrustedAdvisorCheckResult() {
    return this.to('DescribeTrustedAdvisorCheckResult');
  }

  /**
   * Returns the summaries of the results of the Trusted Advisor checks that have the specified check identifiers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckSummaries.html
   */
  public toDescribeTrustedAdvisorCheckSummaries() {
    return this.to('DescribeTrustedAdvisorCheckSummaries');
  }

  /**
   * Returns a list of all available Trusted Advisor checks, including name, identifier, category and description.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorChecks.html
   */
  public toDescribeTrustedAdvisorChecks() {
    return this.to('DescribeTrustedAdvisorChecks');
  }

  /**
   * This is an internally managed function to initiate a call on AWS Support Center.
   *
   * Access Level: Write
   */
  public toInitiateCallForCase() {
    return this.to('InitiateCallForCase');
  }

  /**
   * This is an internally managed function to initiate a chat on AWS Support Center.
   *
   * Access Level: Write
   */
  public toInitiateChatForCase() {
    return this.to('InitiateChatForCase');
  }

  /**
   * This is an internally managed function which allows secondary services to attach attributes to AWS Support cases.
   *
   * Access Level: Write
   */
  public toPutCaseAttributes() {
    return this.to('PutCaseAttributes');
  }

  /**
   * Rate an AWS Support case communication.
   *
   * Access Level: Write
   */
  public toRateCaseCommunication() {
    return this.to('RateCaseCommunication');
  }

  /**
   * Requests a refresh of the Trusted Advisor check that has the specified check identifier.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_RefreshTrustedAdvisorCheck.html
   */
  public toRefreshTrustedAdvisorCheck() {
    return this.to('RefreshTrustedAdvisorCheck');
  }

  /**
   * Resolves an AWS Support case.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_ResolveCase.html
   */
  public toResolveCase() {
    return this.to('ResolveCase');
  }

  /**
   * Returns a list of AWS Support cases that matches the given inputs.
   *
   * Access Level: Read
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
      'DescribeCommunications',
      'DescribeIssueTypes',
      'DescribeServices',
      'DescribeSeverityLevels',
      'DescribeSupportLevel',
      'DescribeTrustedAdvisorCheckRefreshStatuses',
      'DescribeTrustedAdvisorCheckResult',
      'DescribeTrustedAdvisorCheckSummaries',
      'DescribeTrustedAdvisorChecks',
      'SearchForCases'
    ]
  };
}
