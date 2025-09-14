import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [connect-campaigns](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectoutboundcampaigns.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ConnectCampaigns extends PolicyStatement {
  public servicePrefix = 'connect-campaigns';

  /**
   * Statement provider for service [connect-campaigns](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectoutboundcampaigns.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a campaign
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toCreateCampaign() {
    return this.to('CreateCampaign');
  }

  /**
   * Grants permission to delete a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toDeleteCampaign() {
    return this.to('DeleteCampaign');
  }

  /**
   * Grants permission to delete the channel subtype configuration of a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toDeleteCampaignChannelSubtypeConfig() {
    return this.to('DeleteCampaignChannelSubtypeConfig');
  }

  /**
   * Grants permission to delete the communication limits configuration of a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toDeleteCampaignCommunicationLimits() {
    return this.to('DeleteCampaignCommunicationLimits');
  }

  /**
   * Grants permission to delete the communication time configuration of a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toDeleteCampaignCommunicationTime() {
    return this.to('DeleteCampaignCommunicationTime');
  }

  /**
   * Grants permission to remove configuration information for an Amazon Connect instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toDeleteConnectInstanceConfig() {
    return this.to('DeleteConnectInstanceConfig');
  }

  /**
   * Grants permission to remove integration information for an Amazon Connect instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toDeleteConnectInstanceIntegration() {
    return this.to('DeleteConnectInstanceIntegration');
  }

  /**
   * Grants permission to remove onboarding job for an Amazon Connect instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toDeleteInstanceOnboardingJob() {
    return this.to('DeleteInstanceOnboardingJob');
  }

  /**
   * Grants permission to describe a specific campaign
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toDescribeCampaign() {
    return this.to('DescribeCampaign');
  }

  /**
   * Grants permission to get state of a campaign
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toGetCampaignState() {
    return this.to('GetCampaignState');
  }

  /**
   * Grants permission to get state of campaigns
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toGetCampaignStateBatch() {
    return this.to('GetCampaignStateBatch');
  }

  /**
   * Grants permission to get configuration information for an Amazon Connect instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toGetConnectInstanceConfig() {
    return this.to('GetConnectInstanceConfig');
  }

  /**
   * Grants permission to get the communication limits configuration of an Amazon Connect instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toGetInstanceCommunicationLimits() {
    return this.to('GetInstanceCommunicationLimits');
  }

  /**
   * Grants permission to get onboarding job status for an Amazon Connect instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toGetInstanceOnboardingJobStatus() {
    return this.to('GetInstanceOnboardingJobStatus');
  }

  /**
   * Grants permission to provide summary of all campaigns
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toListCampaigns() {
    return this.to('ListCampaigns');
  }

  /**
   * Grants permission to provide summary of all integrations with an Amazon Connect instance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toListConnectInstanceIntegrations() {
    return this.to('ListConnectInstanceIntegrations');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to pause a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toPauseCampaign() {
    return this.to('PauseCampaign');
  }

  /**
   * Grants permission to put an integration configuration with an Amazon Connect instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toPutConnectInstanceIntegration() {
    return this.to('PutConnectInstanceIntegration');
  }

  /**
   * Grants permission to create dial requests for the specified campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toPutDialRequestBatch() {
    return this.to('PutDialRequestBatch');
  }

  /**
   * Grants permission to put the communication limits configuration of an Amazon Connect instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toPutInstanceCommunicationLimits() {
    return this.to('PutInstanceCommunicationLimits');
  }

  /**
   * Grants permission to create dial requests for the specified campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toPutOutboundRequestBatch() {
    return this.to('PutOutboundRequestBatch');
  }

  /**
   * Grants permission to create profile outbound requests for the specified campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toPutProfileOutboundRequestBatch() {
    return this.to('PutProfileOutboundRequestBatch');
  }

  /**
   * Grants permission to resume a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toResumeCampaign() {
    return this.to('ResumeCampaign');
  }

  /**
   * Grants permission to start a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toStartCampaign() {
    return this.to('StartCampaign');
  }

  /**
   * Grants permission to start onboarding job for an Amazon Connect instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toStartInstanceOnboardingJob() {
    return this.to('StartInstanceOnboardingJob');
  }

  /**
   * Grants permission to stop a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toStopCampaign() {
    return this.to('StopCampaign');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the channel subtype configuration of a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toUpdateCampaignChannelSubtypeConfig() {
    return this.to('UpdateCampaignChannelSubtypeConfig');
  }

  /**
   * Grants permission to update the communication limits configuration of a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toUpdateCampaignCommunicationLimits() {
    return this.to('UpdateCampaignCommunicationLimits');
  }

  /**
   * Grants permission to update the communication time configuration of a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toUpdateCampaignCommunicationTime() {
    return this.to('UpdateCampaignCommunicationTime');
  }

  /**
   * Grants permission to update the dialer configuration of a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toUpdateCampaignDialerConfig() {
    return this.to('UpdateCampaignDialerConfig');
  }

  /**
   * Grants permission to update the flow association of a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toUpdateCampaignFlowAssociation() {
    return this.to('UpdateCampaignFlowAssociation');
  }

  /**
   * Grants permission to update the name of a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toUpdateCampaignName() {
    return this.to('UpdateCampaignName');
  }

  /**
   * Grants permission to update the outbound call configuration of a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toUpdateCampaignOutboundCallConfig() {
    return this.to('UpdateCampaignOutboundCallConfig');
  }

  /**
   * Grants permission to update the schedule of a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toUpdateCampaignSchedule() {
    return this.to('UpdateCampaignSchedule');
  }

  /**
   * Grants permission to update the source of a campaign
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   */
  public toUpdateCampaignSource() {
    return this.to('UpdateCampaignSource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateCampaign',
      'DeleteCampaign',
      'DeleteCampaignChannelSubtypeConfig',
      'DeleteCampaignCommunicationLimits',
      'DeleteCampaignCommunicationTime',
      'DeleteConnectInstanceConfig',
      'DeleteConnectInstanceIntegration',
      'DeleteInstanceOnboardingJob',
      'PauseCampaign',
      'PutConnectInstanceIntegration',
      'PutDialRequestBatch',
      'PutInstanceCommunicationLimits',
      'PutOutboundRequestBatch',
      'PutProfileOutboundRequestBatch',
      'ResumeCampaign',
      'StartCampaign',
      'StartInstanceOnboardingJob',
      'StopCampaign',
      'UpdateCampaignChannelSubtypeConfig',
      'UpdateCampaignCommunicationLimits',
      'UpdateCampaignCommunicationTime',
      'UpdateCampaignDialerConfig',
      'UpdateCampaignFlowAssociation',
      'UpdateCampaignName',
      'UpdateCampaignOutboundCallConfig',
      'UpdateCampaignSchedule',
      'UpdateCampaignSource'
    ],
    Read: [
      'DescribeCampaign',
      'GetCampaignState',
      'GetCampaignStateBatch',
      'GetConnectInstanceConfig',
      'GetInstanceCommunicationLimits',
      'GetInstanceOnboardingJobStatus',
      'ListTagsForResource'
    ],
    List: [
      'ListCampaigns',
      'ListConnectInstanceIntegrations'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type campaign to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html
   *
   * @param campaignId - Identifier for the campaignId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCampaign(campaignId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:connect-campaigns:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:campaign/${ campaignId }`);
  }

  /**
   * Filters access by actions based on the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateCampaign()
   * - .toDescribeCampaign()
   * - .toGetCampaignState()
   * - .toGetCampaignStateBatch()
   * - .toListCampaigns()
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
   * Filters access by actions based on tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toListTagsForResource()
   *
   * Applies to resource types:
   * - campaign
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by actions based on the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateCampaign()
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
