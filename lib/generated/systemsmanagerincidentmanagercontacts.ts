import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a page
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_AcceptPage.html
   */
  public toAcceptPage() {
    return this.to('AcceptPage');
  }

  /**
   * Grants permission to activate a contact's contact channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ActivateContactChannel.html
   */
  public toActivateContactChannel() {
    return this.to('ActivateContactChannel');
  }

  /**
   * Grants permission to use a contact in an escalation plan
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_AssociateContact.html
   */
  public toAssociateContact() {
    return this.to('AssociateContact');
  }

  /**
   * Grants permission to create a contact
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ssm-contacts:AssociateContact
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateContact.html
   */
  public toCreateContact() {
    return this.to('CreateContact');
  }

  /**
   * Grants permission to create a contact channel for a contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_CreateContactChannel.html
   */
  public toCreateContactChannel() {
    return this.to('CreateContactChannel');
  }

  /**
   * Grants permission to deactivate a contact's contact channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeactivateContactChannel.html
   */
  public toDeactivateContactChannel() {
    return this.to('DeactivateContactChannel');
  }

  /**
   * Grants permission to delete a contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteContact.html
   */
  public toDeleteContact() {
    return this.to('DeleteContact');
  }

  /**
   * Grants permission to delete a contact's contact channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteContactChannel.html
   */
  public toDeleteContactChannel() {
    return this.to('DeleteContactChannel');
  }

  /**
   * Grants permission to delete a contact's resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DeleteContactPolicy.html
   */
  public toDeleteContactPolicy() {
    return this.to('DeleteContactPolicy');
  }

  /**
   * Grants permission to describe an engagement
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DescribeEngagement.html
   */
  public toDescribeEngagement() {
    return this.to('DescribeEngagement');
  }

  /**
   * Grants permission to describe a page
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_DescribePage.html
   */
  public toDescribePage() {
    return this.to('DescribePage');
  }

  /**
   * Grants permission to get a contact
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetContact.html
   */
  public toGetContact() {
    return this.to('GetContact');
  }

  /**
   * Grants permission to get a contact's contact channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_GetContactChannel.html
   */
  public toGetContactChannel() {
    return this.to('GetContactChannel');
  }

  /**
   * Grants permission to list all of a contact's contact channels
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListContactChannels.html
   */
  public toListContactChannels() {
    return this.to('ListContactChannels');
  }

  /**
   * Grants permission to list all contacts
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListContacts.html
   */
  public toListContacts() {
    return this.to('ListContacts');
  }

  /**
   * Grants permission to list all engagements
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListEngagements.html
   */
  public toListEngagements() {
    return this.to('ListEngagements');
  }

  /**
   * Grants permission to list all receipts of a page
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListPageReceipts.html
   */
  public toListPageReceipts() {
    return this.to('ListPageReceipts');
  }

  /**
   * Grants permission to list all pages sent to a contact
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListPagesByContacts.html
   */
  public toListPagesByContact() {
    return this.to('ListPagesByContact');
  }

  /**
   * Grants permission to list all pages created in an engagement
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_ListPagesByEngagement.html
   */
  public toListPagesByEngagement() {
    return this.to('ListPagesByEngagement');
  }

  /**
   * Grants permission to add a resource policy to a contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_PutContactPolicy.html
   */
  public toPutContactPolicy() {
    return this.to('PutContactPolicy');
  }

  /**
   * Grants permission to send the activation code of a contact's contact channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_SendActivationCode.html
   */
  public toSendActivationCode() {
    return this.to('SendActivationCode');
  }

  /**
   * Grants permission to start an engagement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_StartEngagement.html
   */
  public toStartEngagement() {
    return this.to('StartEngagement');
  }

  /**
   * Grants permission to stop an engagement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_StopEngagement.html
   */
  public toStopEngagement() {
    return this.to('StopEngagement');
  }

  /**
   * Grants permission to update a contact
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ssm-contacts:AssociateContact
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateContact.html
   */
  public toUpdateContact() {
    return this.to('UpdateContact');
  }

  /**
   * Grants permission to update a contact's contact channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateContactChannel.html
   */
  public toUpdateContactChannel() {
    return this.to('UpdateContactChannel');
  }

  /**
   * Grants permission to update a contact's resource policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/incident-manager/latest/APIReference/API_UpdateContactPolicy.html
   */
  public toUpdateContactPolicy() {
    return this.to('UpdateContactPolicy');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptPage",
      "ActivateContactChannel",
      "CreateContact",
      "CreateContactChannel",
      "DeactivateContactChannel",
      "DeleteContact",
      "DeleteContactChannel",
      "DeleteContactPolicy",
      "PutContactPolicy",
      "SendActivationCode",
      "StartEngagement",
      "StopEngagement",
      "UpdateContact",
      "UpdateContactChannel",
      "UpdateContactPolicy"
    ],
    "Permissions management": [
      "AssociateContact"
    ],
    "Read": [
      "DescribeEngagement",
      "DescribePage",
      "GetContact",
      "GetContactChannel"
    ],
    "List": [
      "ListContactChannels",
      "ListContacts",
      "ListEngagements",
      "ListPageReceipts",
      "ListPagesByContact",
      "ListPagesByEngagement"
    ]
  };

  /**
   * Adds a resource of type contact to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/UserGuide/contacts.html
   *
   * @param contactAlias - Identifier for the contactAlias.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onContact(contactAlias: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm-contacts:${Region}:${Account}:contact/${ContactAlias}';
    arn = arn.replace('${ContactAlias}', contactAlias);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type contactchannel to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/UserGuide/contacts.html
   *
   * @param contactAlias - Identifier for the contactAlias.
   * @param contactChannelId - Identifier for the contactChannelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onContactchannel(contactAlias: string, contactChannelId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm-contacts:${Region}:${Account}:contactchannel/${ContactAlias}/${ContactChannelId}';
    arn = arn.replace('${ContactAlias}', contactAlias);
    arn = arn.replace('${ContactChannelId}', contactChannelId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type engagement to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/UserGuide/escalation.html
   *
   * @param engagementId - Identifier for the engagementId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEngagement(engagementId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm-contacts:${Region}:${Account}:engagement/${EngagementId}';
    arn = arn.replace('${EngagementId}', engagementId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type page to the statement
   *
   * https://docs.aws.amazon.com/incident-manager/latest/UserGuide/escalation.html
   *
   * @param contactAlias - Identifier for the contactAlias.
   * @param pageId - Identifier for the pageId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPage(contactAlias: string, pageId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm-contacts:${Region}:${Account}:page/${ContactAlias}/${PageId}';
    arn = arn.replace('${ContactAlias}', contactAlias);
    arn = arn.replace('${PageId}', pageId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
