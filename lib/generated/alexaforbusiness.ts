import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [a4b](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_alexaforbusiness.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class A4b extends PolicyStatement {
  public servicePrefix = 'a4b';

  /**
   * Statement provider for service [a4b](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_alexaforbusiness.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associates a skill with the organization under the customer's AWS account. If a skill is private, the user implicitly accepts access to this skill during enablement.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ApproveSkill.html
   */
  public toApproveSkill() {
    this.to('a4b:ApproveSkill');
    return this;
  }

  /**
   * Associates a contact with a given address book.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateContactWithAddressBook.html
   */
  public toAssociateContactWithAddressBook() {
    this.to('a4b:AssociateContactWithAddressBook');
    return this;
  }

  /**
   * Associates device with given room.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateDeviceWithRoom.html
   */
  public toAssociateDeviceWithRoom() {
    this.to('a4b:AssociateDeviceWithRoom');
    return this;
  }

  /**
   * Associates the skill group with given room. SkillGroup ARN and Room ARN must be specified.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateSkillGroupWithRoom.html
   */
  public toAssociateSkillGroupWithRoom() {
    this.to('a4b:AssociateSkillGroupWithRoom');
    return this;
  }

  /**
   * Associates a skill with a skill group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateSkillWithSkillGroup.html
   */
  public toAssociateSkillWithSkillGroup() {
    this.to('a4b:AssociateSkillWithSkillGroup');
    return this;
  }

  /**
   * Makes a private skill available for enrolled users to enable on their devices.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AssociateSkillWithUsers.html
   */
  public toAssociateSkillWithUsers() {
    this.to('a4b:AssociateSkillWithUsers');
    return this;
  }

  /**
   * Completes the operation of registering an Alexa device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/ag/manage-devices.html
   */
  public toCompleteRegistration() {
    this.to('a4b:CompleteRegistration');
    return this;
  }

  /**
   * Creates an address book with the specified details.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateAddressBook.html
   */
  public toCreateAddressBook() {
    this.to('a4b:CreateAddressBook');
    return this;
  }

  /**
   * Creates a recurring schedule for usage reports to deliver to the specified S3 location with a specified daily or weekly interval.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateBusinessReportSchedule.html
   */
  public toCreateBusinessReportSchedule() {
    this.to('a4b:CreateBusinessReportSchedule');
    return this;
  }

  /**
   * Adds a new conference provider under the user's AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateConferenceProvider.html
   */
  public toCreateConferenceProvider() {
    this.to('a4b:CreateConferenceProvider');
    return this;
  }

  /**
   * Creates a contact with the specified details.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateContact.html
   */
  public toCreateContact() {
    this.to('a4b:CreateContact');
    return this;
  }

  /**
   * Creates a new profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateProfile.html
   */
  public toCreateProfile() {
    this.to('a4b:CreateProfile');
    return this;
  }

  /**
   * Create room with the specified details.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateRoom.html
   */
  public toCreateRoom() {
    this.to('a4b:CreateRoom');
    return this;
  }

  /**
   * Creates a skill group with given name and description.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateSkillGroup.html
   */
  public toCreateSkillGroup() {
    this.to('a4b:CreateSkillGroup');
    return this;
  }

  /**
   * Creates a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    this.to('a4b:CreateUser');
    return this;
  }

  /**
   * Deletes an address book by the address book ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteAddressBook.html
   */
  public toDeleteAddressBook() {
    this.to('a4b:DeleteAddressBook');
    return this;
  }

  /**
   * Deletes the recurring report delivery schedule with the specified schedule ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteBusinessReportSchedule.html
   */
  public toDeleteBusinessReportSchedule() {
    this.to('a4b:DeleteBusinessReportSchedule');
    return this;
  }

  /**
   * Deletes a conference provider.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteConferenceProvider.html
   */
  public toDeleteConferenceProvider() {
    this.to('a4b:DeleteConferenceProvider');
    return this;
  }

  /**
   * Deletes a contact by the contact ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteContact.html
   */
  public toDeleteContact() {
    this.to('a4b:DeleteContact');
    return this;
  }

  /**
   * Removes a device from Alexa For Business.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteDevice.html
   */
  public toDeleteDevice() {
    this.to('a4b:DeleteDevice');
    return this;
  }

  /**
   * Delete profile by profile ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteProfile.html
   */
  public toDeleteProfile() {
    this.to('a4b:DeleteProfile');
    return this;
  }

  /**
   * Delete room.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteRoom.html
   */
  public toDeleteRoom() {
    this.to('a4b:DeleteRoom');
    return this;
  }

  /**
   * Delete a parameter from a skill and room.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteRoomSkillParameter.html
   */
  public toDeleteRoomSkillParameter() {
    this.to('a4b:DeleteRoomSkillParameter');
    return this;
  }

  /**
   * Unlinks a third-party account from a skill.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteSkillAuthorization.html
   */
  public toDeleteSkillAuthorization() {
    this.to('a4b:DeleteSkillAuthorization');
    return this;
  }

  /**
   * Deletes skill group with skill group ARN. Skillgroup ARN must be specified.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteSkillGroup.html
   */
  public toDeleteSkillGroup() {
    this.to('a4b:DeleteSkillGroup');
    return this;
  }

  /**
   * Delete a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    this.to('a4b:DeleteUser');
    return this;
  }

  /**
   * Disassociates a contact from a given address book.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateContactFromAddressBook.html
   */
  public toDisassociateContactFromAddressBook() {
    this.to('a4b:DisassociateContactFromAddressBook');
    return this;
  }

  /**
   * Disassociates device from its current room.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateDeviceFromRoom.html
   */
  public toDisassociateDeviceFromRoom() {
    this.to('a4b:DisassociateDeviceFromRoom');
    return this;
  }

  /**
   * Disassociates a skill from a skill group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateSkillFromSkillGroup.html
   */
  public toDisassociateSkillFromSkillGroup() {
    this.to('a4b:DisassociateSkillFromSkillGroup');
    return this;
  }

  /**
   * Makes a private skill unavailable for enrolled users and prevents them from enabling it on their devices.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateSkillFromUsers.html
   */
  public toDisassociateSkillFromUsers() {
    this.to('a4b:DisassociateSkillFromUsers');
    return this;
  }

  /**
   * Disassociates the skill group from given room. SkillGroup ARN and Room ARN must be specified.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_DisassociateSkillGroupFromRoom.html
   */
  public toDisassociateSkillGroupFromRoom() {
    this.to('a4b:DisassociateSkillGroupFromRoom');
    return this;
  }

  /**
   * Forgets smart home appliances associated to a room.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ForgetSmartHomeAppliances.html
   */
  public toForgetSmartHomeAppliances() {
    this.to('a4b:ForgetSmartHomeAppliances');
    return this;
  }

  /**
   * Gets the address book details by the address book ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetAddressBook.html
   */
  public toGetAddressBook() {
    this.to('a4b:GetAddressBook');
    return this;
  }

  /**
   * Retrieves the existing conference preferences.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetConferencePreference.html
   */
  public toGetConferencePreference() {
    this.to('a4b:GetConferencePreference');
    return this;
  }

  /**
   * Gets details about a specific conference provider.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetConferenceProvider.html
   */
  public toGetConferenceProvider() {
    this.to('a4b:GetConferenceProvider');
    return this;
  }

  /**
   * Gets the contact details by the contact ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetContact.html
   */
  public toGetContact() {
    this.to('a4b:GetContact');
    return this;
  }

  /**
   * Get device details.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetDevice.html
   */
  public toGetDevice() {
    this.to('a4b:GetDevice');
    return this;
  }

  /**
   * Gets the network profile details by the network profile ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetNetworkProfile.html
   */
  public toGetNetworkProfile() {
    this.to('a4b:GetNetworkProfile');
    return this;
  }

  /**
   * Gets profile when provided with Profile ARN.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetProfile.html
   */
  public toGetProfile() {
    this.to('a4b:GetProfile');
    return this;
  }

  /**
   * Get room details.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetRoom.html
   */
  public toGetRoom() {
    this.to('a4b:GetRoom');
    return this;
  }

  /**
   * Get an existing parameter that has been set for a skill and room.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetRoomSkillParameter.html
   */
  public toGetRoomSkillParameter() {
    this.to('a4b:GetRoomSkillParameter');
    return this;
  }

  /**
   * Gets skill group details with skill group ARN. Skillgroup ARN must be specified.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_GetSkillGroup.html
   */
  public toGetSkillGroup() {
    this.to('a4b:GetSkillGroup');
    return this;
  }

  /**
   * Lists the details of the schedules that a user configured.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListBusinessReportSchedules.html
   */
  public toListBusinessReportSchedules() {
    this.to('a4b:ListBusinessReportSchedules');
    return this;
  }

  /**
   * Lists conference providers under a specific AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListConferenceProviders.html
   */
  public toListConferenceProviders() {
    this.to('a4b:ListConferenceProviders');
    return this;
  }

  /**
   * Lists the device event history, including device connection status, for up to 30 days.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListDeviceEvents.html
   */
  public toListDeviceEvents() {
    this.to('a4b:ListDeviceEvents');
    return this;
  }

  /**
   * Lists skills.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSkills.html
   */
  public toListSkills() {
    this.to('a4b:ListSkills');
    return this;
  }

  /**
   * Lists all categories in the Alexa skill store.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSkillsStoreCategories.html
   */
  public toListSkillsStoreCategories() {
    this.to('a4b:ListSkillsStoreCategories');
    return this;
  }

  /**
   * Lists all skills in the Alexa skill store by category.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSkillsStoreSkillsByCategory.html
   */
  public toListSkillsStoreSkillsByCategory() {
    this.to('a4b:ListSkillsStoreSkillsByCategory');
    return this;
  }

  /**
   * Lists all of the smart home appliances associated with a room.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListSmartHomeAppliances.html
   */
  public toListSmartHomeAppliances() {
    this.to('a4b:ListSmartHomeAppliances');
    return this;
  }

  /**
   * Lists all tags on a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ListTags.html
   */
  public toListTags() {
    this.to('a4b:ListTags');
    return this;
  }

  /**
   * Sets the conference preferences on a specific conference provider at the account level.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutConferencePreference.html
   */
  public toPutConferencePreference() {
    this.to('a4b:PutConferencePreference');
    return this;
  }

  /**
   * Publishes Alexa device setup events.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/ag/manage-devices.html
   */
  public toPutDeviceSetupEvents() {
    this.to('a4b:PutDeviceSetupEvents');
    return this;
  }

  /**
   * Put a room specific parameter for a skill.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutRoomSkillParameter.html
   */
  public toPutRoomSkillParameter() {
    this.to('a4b:PutRoomSkillParameter');
    return this;
  }

  /**
   * Links a user's account to a third-party skill provider. If this API operation is called by an assumed IAM role, the skill being linked must be a private skill. Also, the skill must be owned by the AWS account that assumed the IAM role.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_PutSkillAuthorization.html
   */
  public toPutSkillAuthorization() {
    this.to('a4b:PutSkillAuthorization');
    return this;
  }

  /**
   * Registers an Alexa-enabled device built by an Original Equipment Manufacturer (OEM) using Alexa Voice Service (AVS).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_RegisterAVSDevice.html
   */
  public toRegisterAVSDevice() {
    this.to('a4b:RegisterAVSDevice');
    return this;
  }

  /**
   * Registers an Alexa device.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/ag/manage-devices.html
   */
  public toRegisterDevice() {
    this.to('a4b:RegisterDevice');
    return this;
  }

  /**
   * Disassociates a skill from the organization under a user's AWS account. If the skill is a private skill, it moves to an AcceptStatus of PENDING.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_RejectSkill.html
   */
  public toRejectSkill() {
    this.to('a4b:RejectSkill');
    return this;
  }

  /**
   * Returns resolved room information.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ResolveRoom.html
   */
  public toResolveRoom() {
    this.to('a4b:ResolveRoom');
    return this;
  }

  /**
   * Revoke an invitation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_RevokeInvitation.html
   */
  public toRevokeInvitation() {
    this.to('a4b:RevokeInvitation');
    return this;
  }

  /**
   * Searches address books and lists the ones that meet a set of filter and sort criteria.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchAddressBooks.html
   */
  public toSearchAddressBooks() {
    this.to('a4b:SearchAddressBooks');
    return this;
  }

  /**
   * Searches contacts and lists the ones that meet a set of filter and sort criteria.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchContacts.html
   */
  public toSearchContacts() {
    this.to('a4b:SearchContacts');
    return this;
  }

  /**
   * Search for devices.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchDevices.html
   */
  public toSearchDevices() {
    this.to('a4b:SearchDevices');
    return this;
  }

  /**
   * Searches network profiles and lists the ones that meet a set of filter and sort criteria.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchNetworkProfiles.html
   */
  public toSearchNetworkProfiles() {
    this.to('a4b:SearchNetworkProfiles');
    return this;
  }

  /**
   * Search for profiles.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchProfiles.html
   */
  public toSearchProfiles() {
    this.to('a4b:SearchProfiles');
    return this;
  }

  /**
   * Search for rooms.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchRooms.html
   */
  public toSearchRooms() {
    this.to('a4b:SearchRooms');
    return this;
  }

  /**
   * Search for skill groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchSkillGroups.html
   */
  public toSearchSkillGroups() {
    this.to('a4b:SearchSkillGroups');
    return this;
  }

  /**
   * Search for users.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchUsers.html
   */
  public toSearchUsers() {
    this.to('a4b:SearchUsers');
    return this;
  }

  /**
   * Send an invitation to a user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SendInvitation.html
   */
  public toSendInvitation() {
    this.to('a4b:SendInvitation');
    return this;
  }

  /**
   * Restore the device and its account to its known, default settings by clearing all information and settings set by its previous users.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_StartDeviceSync.html
   */
  public toStartDeviceSync() {
    this.to('a4b:StartDeviceSync');
    return this;
  }

  /**
   * Initiates the discovery of any smart home appliances associated with the room.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_StartSmartHomeApplianceDiscovery.html
   */
  public toStartSmartHomeApplianceDiscovery() {
    this.to('a4b:StartSmartHomeApplianceDiscovery');
    return this;
  }

  /**
   * Adds metadata tags to a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('a4b:TagResource');
    return this;
  }

  /**
   * Removes metadata tags from a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('a4b:UntagResource');
    return this;
  }

  /**
   * Updates address book details by the address book ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateAddressBook.html
   */
  public toUpdateAddressBook() {
    this.to('a4b:UpdateAddressBook');
    return this;
  }

  /**
   * Updates the configuration of the report delivery schedule with the specified schedule ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateBusinessReportSchedule.html
   */
  public toUpdateBusinessReportSchedule() {
    this.to('a4b:UpdateBusinessReportSchedule');
    return this;
  }

  /**
   * Updates an existing conference provider's settings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateConferenceProvider.html
   */
  public toUpdateConferenceProvider() {
    this.to('a4b:UpdateConferenceProvider');
    return this;
  }

  /**
   * Updates the contact details by the contact ARN.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateContact.html
   */
  public toUpdateContact() {
    this.to('a4b:UpdateContact');
    return this;
  }

  /**
   * Updates device name.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateDevice.html
   */
  public toUpdateDevice() {
    this.to('a4b:UpdateDevice');
    return this;
  }

  /**
   * Updates an existing profile.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateProfile.html
   */
  public toUpdateProfile() {
    this.to('a4b:UpdateProfile');
    return this;
  }

  /**
   * Update room details.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateRoom.html
   */
  public toUpdateRoom() {
    this.to('a4b:UpdateRoom');
    return this;
  }

  /**
   * Updates skill group details with skill group ARN. Skillgroup ARN must be specified.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UpdateSkillGroup.html
   */
  public toUpdateSkillGroup() {
    this.to('a4b:UpdateSkillGroup');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "ApproveSkill",
      "AssociateContactWithAddressBook",
      "AssociateDeviceWithRoom",
      "AssociateSkillGroupWithRoom",
      "AssociateSkillWithSkillGroup",
      "AssociateSkillWithUsers",
      "CompleteRegistration",
      "CreateAddressBook",
      "CreateBusinessReportSchedule",
      "CreateConferenceProvider",
      "CreateContact",
      "CreateProfile",
      "CreateRoom",
      "CreateSkillGroup",
      "CreateUser",
      "DeleteAddressBook",
      "DeleteBusinessReportSchedule",
      "DeleteConferenceProvider",
      "DeleteContact",
      "DeleteDevice",
      "DeleteProfile",
      "DeleteRoom",
      "DeleteRoomSkillParameter",
      "DeleteSkillAuthorization",
      "DeleteSkillGroup",
      "DeleteUser",
      "DisassociateContactFromAddressBook",
      "DisassociateDeviceFromRoom",
      "DisassociateSkillFromSkillGroup",
      "DisassociateSkillFromUsers",
      "DisassociateSkillGroupFromRoom",
      "ForgetSmartHomeAppliances",
      "PutConferencePreference",
      "PutDeviceSetupEvents",
      "PutRoomSkillParameter",
      "PutSkillAuthorization",
      "RegisterAVSDevice",
      "RegisterDevice",
      "RejectSkill",
      "RevokeInvitation",
      "SendInvitation",
      "StartDeviceSync",
      "UpdateAddressBook",
      "UpdateBusinessReportSchedule",
      "UpdateConferenceProvider",
      "UpdateContact",
      "UpdateDevice",
      "UpdateProfile",
      "UpdateRoom",
      "UpdateSkillGroup"
    ],
    "Read": [
      "GetAddressBook",
      "GetConferencePreference",
      "GetConferenceProvider",
      "GetContact",
      "GetDevice",
      "GetNetworkProfile",
      "GetProfile",
      "GetRoom",
      "GetRoomSkillParameter",
      "GetSkillGroup",
      "ListTags",
      "ResolveRoom",
      "StartSmartHomeApplianceDiscovery"
    ],
    "List": [
      "ListBusinessReportSchedules",
      "ListConferenceProviders",
      "ListDeviceEvents",
      "ListSkills",
      "ListSkillsStoreCategories",
      "ListSkillsStoreSkillsByCategory",
      "ListSmartHomeAppliances",
      "SearchAddressBooks",
      "SearchContacts",
      "SearchDevices",
      "SearchNetworkProfiles",
      "SearchProfiles",
      "SearchRooms",
      "SearchSkillGroups",
      "SearchUsers"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type profile to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_Profile.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProfile(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:profile/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type room to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_Room.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRoom(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:room/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type device to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_Device.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDevice(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:device/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type skillgroup to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SkillGroup.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSkillgroup(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:skill-group/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type user to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_UserData.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onUser(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:user/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type addressbook to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_AddressBook.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAddressbook(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:address-book/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type conferenceprovider to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_ConferenceProvider.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConferenceprovider(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:conference-provider/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type contact to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_Contact.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onContact(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:contact/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type schedule to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_BusinessReportSchedule.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSchedule(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:schedule/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type networkprofile to the statement
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_NetworkProfile.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onNetworkprofile(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:a4b:${Region}:${Account}:network-profile/${Resource_id}';
    arn = arn.replace('${Resource_id}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the Amazon Id in the request
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_RegisterAVSDevice.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAmazonId(value: string | string[], operator?: string) {
    return this.if(`a4b:amazonId`, value, operator || 'StringLike');
  }

  /**
   * Filters actions based on the device type in the request
   *
   * https://docs.aws.amazon.com/a4b/latest/APIReference/API_SearchDevices.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFiltersDeviceType(value: string | string[], operator?: string) {
    return this.if(`a4b:filters_deviceType`, value, operator || 'StringLike');
  }
}
