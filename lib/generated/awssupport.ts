import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [support](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssupport.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Support extends PolicyStatement {
  public servicePrefix = 'support';
  protected actionList: Actions = {
    "AddAttachmentsToSet": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_AddAttachmentsToSet.html",
      "description": "Adds one or more attachments to an AWS Support case.",
      "accessLevel": "Write"
    },
    "AddCommunicationToCase": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_AddCommunicationToCase.html",
      "description": "Adds a customer communication to an AWS Support case.",
      "accessLevel": "Write"
    },
    "CreateCase": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CreateCase.html",
      "description": "Creates a new AWS Support case.",
      "accessLevel": "Write"
    },
    "DescribeAttachment": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeAttachment.html",
      "description": "Returns the description for an attachment.",
      "accessLevel": "Read"
    },
    "DescribeCaseAttributes": {
      "url": "",
      "description": "This is an internally managed function which allows secondary services to read AWS Support case attributes.",
      "accessLevel": "Read"
    },
    "DescribeCases": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCases.html",
      "description": "Returns a list of AWS Support cases that matches the given inputs.",
      "accessLevel": "Read"
    },
    "DescribeCommunications": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCommunications.html",
      "description": "Returns the communications and attachments for one or more AWS Support cases.",
      "accessLevel": "Read"
    },
    "DescribeIssueTypes": {
      "url": "",
      "description": "Returns issue types for AWS Support cases.",
      "accessLevel": "Read"
    },
    "DescribeServices": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeServices.html",
      "description": "Returns the current list of AWS services and categories that applies to each service.",
      "accessLevel": "Read"
    },
    "DescribeSeverityLevels": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeSeverityLevels.html",
      "description": "Returns the list of severity levels that can be assigned to an AWS Support case.",
      "accessLevel": "Read"
    },
    "DescribeSupportLevel": {
      "url": "",
      "description": "Returns the support level for an AWS Account identifier.",
      "accessLevel": "Read"
    },
    "DescribeTrustedAdvisorCheckRefreshStatuses": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckRefreshStatuses.html",
      "description": "Returns the status of a Trusted Advisor refresh check based on a list of check identifiers.",
      "accessLevel": "Read"
    },
    "DescribeTrustedAdvisorCheckResult": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckResult.html",
      "description": "Returns the results of the Trusted Advisor check that has the specified check identifier.",
      "accessLevel": "Read"
    },
    "DescribeTrustedAdvisorCheckSummaries": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckSummaries.html",
      "description": "Returns the summaries of the results of the Trusted Advisor checks that have the specified check identifiers.",
      "accessLevel": "Read"
    },
    "DescribeTrustedAdvisorChecks": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorChecks.html",
      "description": "Returns a list of all available Trusted Advisor checks, including name, identifier, category and description.",
      "accessLevel": "Read"
    },
    "InitiateCallForCase": {
      "url": "",
      "description": "This is an internally managed function to initiate a call on AWS Support Center.",
      "accessLevel": "Write"
    },
    "InitiateChatForCase": {
      "url": "",
      "description": "This is an internally managed function to initiate a chat on AWS Support Center.",
      "accessLevel": "Write"
    },
    "PutCaseAttributes": {
      "url": "",
      "description": "This is an internally managed function which allows secondary services to attach attributes to AWS Support cases.",
      "accessLevel": "Write"
    },
    "RateCaseCommunication": {
      "url": "",
      "description": "Rate an AWS Support case communication.",
      "accessLevel": "Write"
    },
    "RefreshTrustedAdvisorCheck": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_RefreshTrustedAdvisorCheck.html",
      "description": "Requests a refresh of the Trusted Advisor check that has the specified check identifier.",
      "accessLevel": "Write"
    },
    "ResolveCase": {
      "url": "https://docs.aws.amazon.com/awssupport/latest/APIReference/API_ResolveCase.html",
      "description": "Resolves an AWS Support case.",
      "accessLevel": "Write"
    },
    "SearchForCases": {
      "url": "",
      "description": "Returns a list of AWS Support cases that matches the given inputs.",
      "accessLevel": "Read"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [support](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssupport.html).
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
  public addAttachmentsToSet() {
    this.add('support:AddAttachmentsToSet');
    return this;
  }

  /**
   * Adds a customer communication to an AWS Support case.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_AddCommunicationToCase.html
   */
  public addCommunicationToCase() {
    this.add('support:AddCommunicationToCase');
    return this;
  }

  /**
   * Creates a new AWS Support case.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CreateCase.html
   */
  public createCase() {
    this.add('support:CreateCase');
    return this;
  }

  /**
   * Returns the description for an attachment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeAttachment.html
   */
  public describeAttachment() {
    this.add('support:DescribeAttachment');
    return this;
  }

  /**
   * This is an internally managed function which allows secondary services to read AWS Support case attributes.
   *
   * Access Level: Read
   */
  public describeCaseAttributes() {
    this.add('support:DescribeCaseAttributes');
    return this;
  }

  /**
   * Returns a list of AWS Support cases that matches the given inputs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCases.html
   */
  public describeCases() {
    this.add('support:DescribeCases');
    return this;
  }

  /**
   * Returns the communications and attachments for one or more AWS Support cases.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeCommunications.html
   */
  public describeCommunications() {
    this.add('support:DescribeCommunications');
    return this;
  }

  /**
   * Returns issue types for AWS Support cases.
   *
   * Access Level: Read
   */
  public describeIssueTypes() {
    this.add('support:DescribeIssueTypes');
    return this;
  }

  /**
   * Returns the current list of AWS services and categories that applies to each service.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeServices.html
   */
  public describeServices() {
    this.add('support:DescribeServices');
    return this;
  }

  /**
   * Returns the list of severity levels that can be assigned to an AWS Support case.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeSeverityLevels.html
   */
  public describeSeverityLevels() {
    this.add('support:DescribeSeverityLevels');
    return this;
  }

  /**
   * Returns the support level for an AWS Account identifier.
   *
   * Access Level: Read
   */
  public describeSupportLevel() {
    this.add('support:DescribeSupportLevel');
    return this;
  }

  /**
   * Returns the status of a Trusted Advisor refresh check based on a list of check identifiers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckRefreshStatuses.html
   */
  public describeTrustedAdvisorCheckRefreshStatuses() {
    this.add('support:DescribeTrustedAdvisorCheckRefreshStatuses');
    return this;
  }

  /**
   * Returns the results of the Trusted Advisor check that has the specified check identifier.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckResult.html
   */
  public describeTrustedAdvisorCheckResult() {
    this.add('support:DescribeTrustedAdvisorCheckResult');
    return this;
  }

  /**
   * Returns the summaries of the results of the Trusted Advisor checks that have the specified check identifiers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorCheckSummaries.html
   */
  public describeTrustedAdvisorCheckSummaries() {
    this.add('support:DescribeTrustedAdvisorCheckSummaries');
    return this;
  }

  /**
   * Returns a list of all available Trusted Advisor checks, including name, identifier, category and description.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_DescribeTrustedAdvisorChecks.html
   */
  public describeTrustedAdvisorChecks() {
    this.add('support:DescribeTrustedAdvisorChecks');
    return this;
  }

  /**
   * This is an internally managed function to initiate a call on AWS Support Center.
   *
   * Access Level: Write
   */
  public initiateCallForCase() {
    this.add('support:InitiateCallForCase');
    return this;
  }

  /**
   * This is an internally managed function to initiate a chat on AWS Support Center.
   *
   * Access Level: Write
   */
  public initiateChatForCase() {
    this.add('support:InitiateChatForCase');
    return this;
  }

  /**
   * This is an internally managed function which allows secondary services to attach attributes to AWS Support cases.
   *
   * Access Level: Write
   */
  public putCaseAttributes() {
    this.add('support:PutCaseAttributes');
    return this;
  }

  /**
   * Rate an AWS Support case communication.
   *
   * Access Level: Write
   */
  public rateCaseCommunication() {
    this.add('support:RateCaseCommunication');
    return this;
  }

  /**
   * Requests a refresh of the Trusted Advisor check that has the specified check identifier.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_RefreshTrustedAdvisorCheck.html
   */
  public refreshTrustedAdvisorCheck() {
    this.add('support:RefreshTrustedAdvisorCheck');
    return this;
  }

  /**
   * Resolves an AWS Support case.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/awssupport/latest/APIReference/API_ResolveCase.html
   */
  public resolveCase() {
    this.add('support:ResolveCase');
    return this;
  }

  /**
   * Returns a list of AWS Support cases that matches the given inputs.
   *
   * Access Level: Read
   */
  public searchForCases() {
    this.add('support:SearchForCases');
    return this;
  }
}
