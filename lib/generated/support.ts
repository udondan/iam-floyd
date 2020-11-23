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
  constructor (sid?: string) {
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
    this.to('AddAttachmentsToSet');
    return this;
  }

  /**
   * Adds a customer communication to an AWS Support case.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_AddCommunicationToCase.html
   */
  public toAddCommunicationToCase() {
    this.to('AddCommunicationToCase');
    return this;
  }

  /**
   * Creates a new AWS Support case.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CreateCase.html
   */
  public toCreateCase() {
    this.to('CreateCase');
    return this;
  }

  /**
   * Returns the description for an attachment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeAttachment.html
   */
  public toDescribeAttachment() {
    this.to('DescribeAttachment');
    return this;
  }

  /**
   * This is an internally managed function which allows secondary services to read AWS Support case attributes.
   *
   * Access Level: Read
   */
  public toDescribeCaseAttributes() {
    this.to('DescribeCaseAttributes');
    return this;
  }

  /**
   * Returns a list of AWS Support cases that matches the given inputs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCases.html
   */
  public toDescribeCases() {
    this.to('DescribeCases');
    return this;
  }

  /**
   * Returns the communications and attachments for one or more AWS Support cases.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCommunications.html
   */
  public toDescribeCommunications() {
    this.to('DescribeCommunications');
    return this;
  }

  /**
   * Returns issue types for AWS Support cases.
   *
   * Access Level: Read
   */
  public toDescribeIssueTypes() {
    this.to('DescribeIssueTypes');
    return this;
  }

  /**
   * Returns the current list of AWS services and categories that applies to each service.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeServices.html
   */
  public toDescribeServices() {
    this.to('DescribeServices');
    return this;
  }

  /**
   * Returns the list of severity levels that can be assigned to an AWS Support case.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeSeverityLevels.html
   */
  public toDescribeSeverityLevels() {
    this.to('DescribeSeverityLevels');
    return this;
  }

  /**
   * Returns the support level for an AWS Account identifier.
   *
   * Access Level: Read
   */
  public toDescribeSupportLevel() {
    this.to('DescribeSupportLevel');
    return this;
  }

  /**
   * Returns the status of a Trusted Advisor refresh check based on a list of check identifiers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckRefreshStatuses.html
   */
  public toDescribeTrustedAdvisorCheckRefreshStatuses() {
    this.to('DescribeTrustedAdvisorCheckRefreshStatuses');
    return this;
  }

  /**
   * Returns the results of the Trusted Advisor check that has the specified check identifier.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckResult.html
   */
  public toDescribeTrustedAdvisorCheckResult() {
    this.to('DescribeTrustedAdvisorCheckResult');
    return this;
  }

  /**
   * Returns the summaries of the results of the Trusted Advisor checks that have the specified check identifiers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckSummaries.html
   */
  public toDescribeTrustedAdvisorCheckSummaries() {
    this.to('DescribeTrustedAdvisorCheckSummaries');
    return this;
  }

  /**
   * Returns a list of all available Trusted Advisor checks, including name, identifier, category and description.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorChecks.html
   */
  public toDescribeTrustedAdvisorChecks() {
    this.to('DescribeTrustedAdvisorChecks');
    return this;
  }

  /**
   * This is an internally managed function to initiate a call on AWS Support Center.
   *
   * Access Level: Write
   */
  public toInitiateCallForCase() {
    this.to('InitiateCallForCase');
    return this;
  }

  /**
   * This is an internally managed function to initiate a chat on AWS Support Center.
   *
   * Access Level: Write
   */
  public toInitiateChatForCase() {
    this.to('InitiateChatForCase');
    return this;
  }

  /**
   * This is an internally managed function which allows secondary services to attach attributes to AWS Support cases.
   *
   * Access Level: Write
   */
  public toPutCaseAttributes() {
    this.to('PutCaseAttributes');
    return this;
  }

  /**
   * Rate an AWS Support case communication.
   *
   * Access Level: Write
   */
  public toRateCaseCommunication() {
    this.to('RateCaseCommunication');
    return this;
  }

  /**
   * Requests a refresh of the Trusted Advisor check that has the specified check identifier.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_RefreshTrustedAdvisorCheck.html
   */
  public toRefreshTrustedAdvisorCheck() {
    this.to('RefreshTrustedAdvisorCheck');
    return this;
  }

  /**
   * Resolves an AWS Support case.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_ResolveCase.html
   */
  public toResolveCase() {
    this.to('ResolveCase');
    return this;
  }

  /**
   * Returns a list of AWS Support cases that matches the given inputs.
   *
   * Access Level: Read
   */
  public toSearchForCases() {
    this.to('SearchForCases');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddAttachmentsToSet",
      "AddCommunicationToCase",
      "CreateCase",
      "InitiateCallForCase",
      "InitiateChatForCase",
      "PutCaseAttributes",
      "RateCaseCommunication",
      "RefreshTrustedAdvisorCheck",
      "ResolveCase"
    ],
    "Read": [
      "DescribeAttachment",
      "DescribeCaseAttributes",
      "DescribeCases",
      "DescribeCommunications",
      "DescribeIssueTypes",
      "DescribeServices",
      "DescribeSeverityLevels",
      "DescribeSupportLevel",
      "DescribeTrustedAdvisorCheckRefreshStatuses",
      "DescribeTrustedAdvisorCheckResult",
      "DescribeTrustedAdvisorCheckSummaries",
      "DescribeTrustedAdvisorChecks",
      "SearchForCases"
    ]
  };
}
