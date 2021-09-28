import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [voiceid](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectvoiceid.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Voiceid extends PolicyStatement {
  public servicePrefix = 'voiceid';

  /**
   * Statement provider for service [voiceid](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectvoiceid.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_CreateDomain.html
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to delete a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to delete a fraudster
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DeleteFraudster.html
   */
  public toDeleteFraudster() {
    return this.to('DeleteFraudster');
  }

  /**
   * Grants permission to delete a speaker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DeleteSpeaker.html
   */
  public toDeleteSpeaker() {
    return this.to('DeleteSpeaker');
  }

  /**
   * Grants permission to describe compliance consent
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-voiceid.html#enable-voiceid-step1
   */
  public toDescribeComplianceConsent() {
    return this.to('DescribeComplianceConsent');
  }

  /**
   * Grants permission to describe a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DescribeDomain.html
   */
  public toDescribeDomain() {
    return this.to('DescribeDomain');
  }

  /**
   * Grants permission to describe a fraudster
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DescribeFraudster.html
   */
  public toDescribeFraudster() {
    return this.to('DescribeFraudster');
  }

  /**
   * Grants permission to describe a fraudster registration job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DescribeFraudsterRegistrationJob.html
   */
  public toDescribeFraudsterRegistrationJob() {
    return this.to('DescribeFraudsterRegistrationJob');
  }

  /**
   * Grants permission to describe a speaker
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DescribeSpeaker.html
   */
  public toDescribeSpeaker() {
    return this.to('DescribeSpeaker');
  }

  /**
   * Grants permission to describe a speaker enrollment job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DescribeSpeakerEnrollmentJob.html
   */
  public toDescribeSpeakerEnrollmentJob() {
    return this.to('DescribeSpeakerEnrollmentJob');
  }

  /**
   * Grants permission to evaluate a session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_EvaluateSession.html
   */
  public toEvaluateSession() {
    return this.to('EvaluateSession');
  }

  /**
   * Grants permission to list domains for an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list fraudster registration jobs for a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_ListFraudsterRegistrationJobs.html
   */
  public toListFraudsterRegistrationJobs() {
    return this.to('ListFraudsterRegistrationJobs');
  }

  /**
   * Grants permission to list speaker enrollment jobs for a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_ListSpeakerEnrollmentJobs.html
   */
  public toListSpeakerEnrollmentJobs() {
    return this.to('ListSpeakerEnrollmentJobs');
  }

  /**
   * Grants permission to list speakers for a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_ListSpeakers.html
   */
  public toListSpeakers() {
    return this.to('ListSpeakers');
  }

  /**
   * Grants permission to list tags for a Voice ID resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to opt out a speaker
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_OptOutSpeaker.html
   */
  public toOptOutSpeaker() {
    return this.to('OptOutSpeaker');
  }

  /**
   * Grants permission to register compliance consent
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-voiceid.html#enable-voiceid-step1
   */
  public toRegisterComplianceConsent() {
    return this.to('RegisterComplianceConsent');
  }

  /**
   * Grants permission to start a fraudster registration job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_StartFraudsterRegistrationJob.html
   */
  public toStartFraudsterRegistrationJob() {
    return this.to('StartFraudsterRegistrationJob');
  }

  /**
   * Grants permission to start a speaker enrollment job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_StartSpeakerEnrollmentJob.html
   */
  public toStartSpeakerEnrollmentJob() {
    return this.to('StartSpeakerEnrollmentJob');
  }

  /**
   * Grants permission to tag a Voice ID resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag from a Voice ID resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_UpdateDomain.html
   */
  public toUpdateDomain() {
    return this.to('UpdateDomain');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateDomain",
      "DeleteDomain",
      "DeleteFraudster",
      "DeleteSpeaker",
      "EvaluateSession",
      "OptOutSpeaker",
      "RegisterComplianceConsent",
      "StartFraudsterRegistrationJob",
      "StartSpeakerEnrollmentJob",
      "UpdateDomain"
    ],
    "Read": [
      "DescribeComplianceConsent",
      "DescribeDomain",
      "DescribeFraudster",
      "DescribeFraudsterRegistrationJob",
      "DescribeSpeaker",
      "DescribeSpeakerEnrollmentJob",
      "ListTagsForResource"
    ],
    "List": [
      "ListDomains",
      "ListFraudsterRegistrationJobs",
      "ListSpeakerEnrollmentJobs",
      "ListSpeakers"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-voiceid.html#voiceid-domain
   *
   * @param domainId - Identifier for the domainId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomain(domainId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:voiceid:${Region}:${Account}:domain/${DomainId}';
    arn = arn.replace('${DomainId}', domainId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
