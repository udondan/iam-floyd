import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a fraudster with a watchlist
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_AssociateFraudster.html
   */
  public toAssociateFraudster() {
    return this.to('AssociateFraudster');
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
   * Grants permission to create a watchlist
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_CreateWatchlist.html
   */
  public toCreateWatchlist() {
    return this.to('CreateWatchlist');
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
   * Grants permission to delete a watchlist
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DeleteWatchlist.html
   */
  public toDeleteWatchlist() {
    return this.to('DeleteWatchlist');
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
   * Grants permission to describe a watchlist
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DescribeWatchlist.html
   */
  public toDescribeWatchlist() {
    return this.to('DescribeWatchlist');
  }

  /**
   * Grants permission to disassociate a fraudster from a watchlist
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_DisassociateFraudster.html
   */
  public toDisassociateFraudster() {
    return this.to('DisassociateFraudster');
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
   * Grants permission to list fraudsters for a domain or watchlist
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_ListFraudsters.html
   */
  public toListFraudsters() {
    return this.to('ListFraudsters');
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
   * Grants permission to list watchlists for a domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_ListWatchlists.html
   */
  public toListWatchlists() {
    return this.to('ListWatchlists');
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

  /**
   * Grants permission to update a watchlist
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/voiceid/latest/APIReference/API_UpdateWatchlist.html
   */
  public toUpdateWatchlist() {
    return this.to('UpdateWatchlist');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateFraudster',
      'CreateDomain',
      'CreateWatchlist',
      'DeleteDomain',
      'DeleteFraudster',
      'DeleteSpeaker',
      'DeleteWatchlist',
      'DisassociateFraudster',
      'EvaluateSession',
      'OptOutSpeaker',
      'RegisterComplianceConsent',
      'StartFraudsterRegistrationJob',
      'StartSpeakerEnrollmentJob',
      'UpdateDomain',
      'UpdateWatchlist'
    ],
    Read: [
      'DescribeComplianceConsent',
      'DescribeDomain',
      'DescribeFraudster',
      'DescribeFraudsterRegistrationJob',
      'DescribeSpeaker',
      'DescribeSpeakerEnrollmentJob',
      'DescribeWatchlist',
      'ListTagsForResource'
    ],
    List: [
      'ListDomains',
      'ListFraudsterRegistrationJobs',
      'ListFraudsters',
      'ListSpeakerEnrollmentJobs',
      'ListSpeakers',
      'ListWatchlists'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-voiceid.html#voiceid-domain
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
    return this.on(`arn:${ partition || this.defaultPartition }:voiceid:${ region || this.defaultRegion }:${ account || this.defaultAccount }:domain/${ domainId }`);
  }

  /**
   * Filters access by tags that are passed in the request
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
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by tags associated with the resource
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
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by tag keys that are passed in the request
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
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
