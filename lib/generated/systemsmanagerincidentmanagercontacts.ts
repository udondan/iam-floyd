import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [ssm-contacts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanagercontacts.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SsmContacts extends PolicyStatement {
  public servicePrefix = 'ssm-contacts';

  /**
   * Statement provider for service [ssm-contacts](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanagercontacts.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a page
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_AcceptPage.html
   */
  public toAcceptPage() {
    return this.to('AcceptPage');
  }

  /**
   * Grants permission to activate a contact's contact channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ActivateContactChannel.html
   */
  public toActivateContactChannel() {
    return this.to('ActivateContactChannel');
  }

  /**
   * Grants permission to use a contact in an escalation plan
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/incident-manager/latest/userguide/contacts.html
   */
  public toAssociateContact() {
    return this.to('AssociateContact');
  }

  /**
   * Grants permission to create a contact
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - ssm-contacts:AssociateContact
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_CreateContact.html
   */
  public toCreateContact() {
    return this.to('CreateContact');
  }

  /**
   * Grants permission to create a contact channel for a contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_CreateContactChannel.html
   */
  public toCreateContactChannel() {
    return this.to('CreateContactChannel');
  }

  /**
   * Grants permission to create a rotation in an on-call schedule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_CreateRotation.html
   */
  public toCreateRotation() {
    return this.to('CreateRotation');
  }

  /**
   * Grants permission to create an override for a rotation in an on-call schedule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_CreateRotationOverride.html
   */
  public toCreateRotationOverride() {
    return this.to('CreateRotationOverride');
  }

  /**
   * Grants permission to deactivate a contact's contact channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeactivateContactChannel.html
   */
  public toDeactivateContactChannel() {
    return this.to('DeactivateContactChannel');
  }

  /**
   * Grants permission to delete a contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeleteContact.html
   */
  public toDeleteContact() {
    return this.to('DeleteContact');
  }

  /**
   * Grants permission to delete a contact's contact channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeleteContactChannel.html
   */
  public toDeleteContactChannel() {
    return this.to('DeleteContactChannel');
  }

  /**
   * Grants permission to delete a rotation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeleteRotation.html
   */
  public toDeleteRotation() {
    return this.to('DeleteRotation');
  }

  /**
   * Grants permission to delete a rotation's rotation override
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DeleteRotationOverride.html
   */
  public toDeleteRotationOverride() {
    return this.to('DeleteRotationOverride');
  }

  /**
   * Grants permission to describe an engagement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DescribeEngagement.html
   */
  public toDescribeEngagement() {
    return this.to('DescribeEngagement');
  }

  /**
   * Grants permission to describe a page
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_DescribePage.html
   */
  public toDescribePage() {
    return this.to('DescribePage');
  }

  /**
   * Grants permission to get a contact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_GetContact.html
   */
  public toGetContact() {
    return this.to('GetContact');
  }

  /**
   * Grants permission to get a contact's contact channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_GetContactChannel.html
   */
  public toGetContactChannel() {
    return this.to('GetContactChannel');
  }

  /**
   * Grants permission to get a contact's resource policy
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_GetContactPolicy.html
   */
  public toGetContactPolicy() {
    return this.to('GetContactPolicy');
  }

  /**
   * Grants permission to retrieve information about an on-call rotation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_GetRotation.html
   */
  public toGetRotation() {
    return this.to('GetRotation');
  }

  /**
   * Grants permission to retrieve information about an override in an on-call rotation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_GetRotationOverride.html
   */
  public toGetRotationOverride() {
    return this.to('GetRotationOverride');
  }

  /**
   * Grants permission to list all of a contact's contact channels
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListContactChannels.html
   */
  public toListContactChannels() {
    return this.to('ListContactChannels');
  }

  /**
   * Grants permission to list all contacts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListContacts.html
   */
  public toListContacts() {
    return this.to('ListContacts');
  }

  /**
   * Grants permission to list all engagements
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListEngagements.html
   */
  public toListEngagements() {
    return this.to('ListEngagements');
  }

  /**
   * Grants permission to list all receipts of a page
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListPageReceipts.html
   */
  public toListPageReceipts() {
    return this.to('ListPageReceipts');
  }

  /**
   * Grants permission to list all pages sent to a contact
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListPagesByContact.html
   */
  public toListPagesByContact() {
    return this.to('ListPagesByContact');
  }

  /**
   * Grants permission to list all pages created in an engagement
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListPagesByEngagement.html
   */
  public toListPagesByEngagement() {
    return this.to('ListPagesByEngagement');
  }

  /**
   * Grants permission to retrieve a list of shifts based on rotation configuration parameters
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListPreviewRotationShifts.html
   */
  public toListPreviewRotationShifts() {
    return this.to('ListPreviewRotationShifts');
  }

  /**
   * Grants permission to retrieve a list of overrides currently specified for an on-call rotation
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListRotationOverrides.html
   */
  public toListRotationOverrides() {
    return this.to('ListRotationOverrides');
  }

  /**
   * Grants permission to retrieve a list of rotation shifts in an on-call schedule
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListRotationShifts.html
   */
  public toListRotationShifts() {
    return this.to('ListRotationShifts');
  }

  /**
   * Grants permission to retrieve a list of on-call rotations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListRotations.html
   */
  public toListRotations() {
    return this.to('ListRotations');
  }

  /**
   * Grants permission to view a list of resource tags for a specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to add a resource policy to a contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_PutContactPolicy.html
   */
  public toPutContactPolicy() {
    return this.to('PutContactPolicy');
  }

  /**
   * Grants permission to send the activation code of a contact's contact channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_SendActivationCode.html
   */
  public toSendActivationCode() {
    return this.to('SendActivationCode');
  }

  /**
   * Grants permission to start an engagement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_StartEngagement.html
   */
  public toStartEngagement() {
    return this.to('StartEngagement');
  }

  /**
   * Grants permission to stop an engagement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_StopEngagement.html
   */
  public toStopEngagement() {
    return this.to('StopEngagement');
  }

  /**
   * Grants permission to add tags to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a contact
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ssm-contacts:AssociateContact
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_UpdateContact.html
   */
  public toUpdateContact() {
    return this.to('UpdateContact');
  }

  /**
   * Grants permission to update a contact's contact channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_UpdateContactChannel.html
   */
  public toUpdateContactChannel() {
    return this.to('UpdateContactChannel');
  }

  /**
   * Grants permission to update the information specified for an on-call rotation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SSMContacts_UpdateRotation.html
   */
  public toUpdateRotation() {
    return this.to('UpdateRotation');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptPage',
      'ActivateContactChannel',
      'CreateContact',
      'CreateContactChannel',
      'CreateRotation',
      'CreateRotationOverride',
      'DeactivateContactChannel',
      'DeleteContact',
      'DeleteContactChannel',
      'DeleteRotation',
      'DeleteRotationOverride',
      'PutContactPolicy',
      'SendActivationCode',
      'StartEngagement',
      'StopEngagement',
      'UpdateContact',
      'UpdateContactChannel',
      'UpdateRotation'
    ],
    'Permissions management': [
      'AssociateContact'
    ],
    Read: [
      'DescribeEngagement',
      'DescribePage',
      'GetContact',
      'GetContactChannel',
      'GetContactPolicy',
      'GetRotation',
      'GetRotationOverride',
      'ListTagsForResource'
    ],
    List: [
      'ListContactChannels',
      'ListContacts',
      'ListEngagements',
      'ListPageReceipts',
      'ListPagesByContact',
      'ListPagesByEngagement',
      'ListPreviewRotationShifts',
      'ListRotationOverrides',
      'ListRotationShifts',
      'ListRotations'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type contact to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/userguide/contacts.html
   *
   * @param contactAlias - Identifier for the contactAlias.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContact(contactAlias: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SsmContacts.defaultPartition }:ssm-contacts:${ region || '*' }:${ account || '*' }:contact/${ contactAlias }`);
  }

  /**
   * Adds a resource of type contactchannel to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/userguide/contacts.html
   *
   * @param contactAlias - Identifier for the contactAlias.
   * @param contactChannelId - Identifier for the contactChannelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onContactchannel(contactAlias: string, contactChannelId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SsmContacts.defaultPartition }:ssm-contacts:${ region || '*' }:${ account || '*' }:contactchannel/${ contactAlias }/${ contactChannelId }`);
  }

  /**
   * Adds a resource of type engagement to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/userguide/escalation.html
   *
   * @param contactAlias - Identifier for the contactAlias.
   * @param engagementId - Identifier for the engagementId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onEngagement(contactAlias: string, engagementId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SsmContacts.defaultPartition }:ssm-contacts:${ region || '*' }:${ account || '*' }:engagement/${ contactAlias }/${ engagementId }`);
  }

  /**
   * Adds a resource of type page to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/userguide/escalation.html
   *
   * @param contactAlias - Identifier for the contactAlias.
   * @param pageId - Identifier for the pageId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onPage(contactAlias: string, pageId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SsmContacts.defaultPartition }:ssm-contacts:${ region || '*' }:${ account || '*' }:page/${ contactAlias }/${ pageId }`);
  }

  /**
   * Adds a resource of type rotation to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-on-call-schedule.html
   *
   * @param rotationId - Identifier for the rotationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRotation(rotationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || SsmContacts.defaultPartition }:ssm-contacts:${ region || '*' }:${ account || '*' }:rotation/${ rotationId }`);
  }
}
