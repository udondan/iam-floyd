import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [ds](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Ds extends PolicyStatement {
  public servicePrefix = 'ds';

  /**
   * Statement provider for service [ds](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdirectoryservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Accepts a directory sharing request that was sent from the directory owner account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AcceptSharedDirectory.html
   */
  public toAcceptSharedDirectory() {
    return this.to('AcceptSharedDirectory');
  }

  /**
   * Adds a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:DescribeSecurityGroups
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddIpRoutes.html
   */
  public toAddIpRoutes() {
    return this.to('AddIpRoutes');
  }

  /**
   * Adds two domain controllers in the specified Region for the specified directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddRegion.html
   */
  public toAddRegion() {
    return this.to('AddRegion');
  }

  /**
   * Adds or overwrites one or more tags for the specified Amazon Directory Services directory.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:CreateTags
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_AddTagsToResource.html
   */
  public toAddTagsToResource() {
    return this.to('AddTagsToResource');
  }

  /**
   * Authorizes an application for your AWS Directory.
   *
   * Access Level: Write
   */
  public toAuthorizeApplication() {
    return this.to('AuthorizeApplication');
  }

  /**
   * Cancels an in-progress schema extension to a Microsoft AD directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CancelSchemaExtension.html
   */
  public toCancelSchemaExtension() {
    return this.to('CancelSchemaExtension');
  }

  /**
   * Verifies that the alias is available for use.
   *
   * Access Level: Read
   */
  public toCheckAlias() {
    return this.to('CheckAlias');
  }

  /**
   * Creates an AD Connector to connect to an on-premises directory.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateNetworkInterface
   * - ec2:CreateSecurityGroup
   * - ec2:CreateTags
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ConnectDirectory.html
   */
  public toConnectDirectory() {
    return this.to('ConnectDirectory');
  }

  /**
   * Creates an alias for a directory and assigns the alias to the directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateAlias.html
   */
  public toCreateAlias() {
    return this.to('CreateAlias');
  }

  /**
   * Creates a computer account in the specified directory, and joins the computer to the directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateComputer.html
   */
  public toCreateComputer() {
    return this.to('CreateComputer');
  }

  /**
   * Creates a conditional forwarder associated with your AWS directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateConditionalForwarder.html
   */
  public toCreateConditionalForwarder() {
    return this.to('CreateConditionalForwarder');
  }

  /**
   * Creates a Simple AD directory.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateNetworkInterface
   * - ec2:CreateSecurityGroup
   * - ec2:CreateTags
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html
   */
  public toCreateDirectory() {
    return this.to('CreateDirectory');
  }

  /**
   * Creates a IdentityPool Directory in the AWS cloud.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   */
  public toCreateIdentityPoolDirectory() {
    return this.to('CreateIdentityPoolDirectory');
  }

  /**
   * Creates a subscription to forward real time Directory Service domain controller security logs to the specified CloudWatch log group in your AWS account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateLogSubscription.html
   */
  public toCreateLogSubscription() {
    return this.to('CreateLogSubscription');
  }

  /**
   * Creates a Microsoft AD in the AWS cloud.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:AuthorizeSecurityGroupEgress
   * - ec2:AuthorizeSecurityGroupIngress
   * - ec2:CreateNetworkInterface
   * - ec2:CreateSecurityGroup
   * - ec2:CreateTags
   * - ec2:DescribeNetworkInterfaces
   * - ec2:DescribeSubnets
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateMicrosoftAD.html
   */
  public toCreateMicrosoftAD() {
    return this.to('CreateMicrosoftAD');
  }

  /**
   * Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateSnapshot.html
   */
  public toCreateSnapshot() {
    return this.to('CreateSnapshot');
  }

  /**
   * Initiates the creation of the AWS side of a trust relationship between a Microsoft AD in the AWS cloud and an external domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateTrust.html
   */
  public toCreateTrust() {
    return this.to('CreateTrust');
  }

  /**
   * Deletes a conditional forwarder that has been set up for your AWS directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteConditionalForwarder.html
   */
  public toDeleteConditionalForwarder() {
    return this.to('DeleteConditionalForwarder');
  }

  /**
   * Deletes an AWS Directory Service directory.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteNetworkInterface
   * - ec2:DeleteSecurityGroup
   * - ec2:DescribeNetworkInterfaces
   * - ec2:RevokeSecurityGroupEgress
   * - ec2:RevokeSecurityGroupIngress
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteDirectory.html
   */
  public toDeleteDirectory() {
    return this.to('DeleteDirectory');
  }

  /**
   * Deletes the specified log subscription.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteLogSubscription.html
   */
  public toDeleteLogSubscription() {
    return this.to('DeleteLogSubscription');
  }

  /**
   * Deletes a directory snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeleteSnapshot.html
   */
  public toDeleteSnapshot() {
    return this.to('DeleteSnapshot');
  }

  /**
   * Deletes an existing trust relationship between your Microsoft AD in the AWS cloud and an external domain.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/DeleteTrust.html
   */
  public toDeleteTrust() {
    return this.to('DeleteTrust');
  }

  /**
   * Deletes from the system the certificate that was registered for a secured LDAP connection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterCertificate.html
   */
  public toDeregisterCertificate() {
    return this.to('DeregisterCertificate');
  }

  /**
   * Removes the specified directory as a publisher to the specified SNS topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DeregisterEventTopic.html
   */
  public toDeregisterEventTopic() {
    return this.to('DeregisterEventTopic');
  }

  /**
   * Displays information about the certificate registered for a secured LDAP connection.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeCertificate.html
   */
  public toDescribeCertificate() {
    return this.to('DescribeCertificate');
  }

  /**
   * Obtains information about the conditional forwarders for this account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeConditionalForwarders.html
   */
  public toDescribeConditionalForwarders() {
    return this.to('DescribeConditionalForwarders');
  }

  /**
   * Obtains information about the directories that belong to this account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDirectories.html
   */
  public toDescribeDirectories() {
    return this.to('DescribeDirectories');
  }

  /**
   * Provides information about any domain controllers in your directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeDomainControllers.html
   */
  public toDescribeDomainControllers() {
    return this.to('DescribeDomainControllers');
  }

  /**
   * Obtains information about which SNS topics receive status messages from the specified directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeEventTopics.html
   */
  public toDescribeEventTopics() {
    return this.to('DescribeEventTopics');
  }

  /**
   * Describes the status of LDAP security for the specified directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeLDAPSSettings.html
   */
  public toDescribeLDAPSSettings() {
    return this.to('DescribeLDAPSSettings');
  }

  /**
   * Provides information about the Regions that are configured for multi-Region replication.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeRegions.html
   */
  public toDescribeRegions() {
    return this.to('DescribeRegions');
  }

  /**
   * Returns the shared directories in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSharedDirectories.html
   */
  public toDescribeSharedDirectories() {
    return this.to('DescribeSharedDirectories');
  }

  /**
   * Obtains information about the directory snapshots that belong to this account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeSnapshots.html
   */
  public toDescribeSnapshots() {
    return this.to('DescribeSnapshots');
  }

  /**
   * Obtains information about the trust relationships for this account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DescribeTrusts.html
   */
  public toDescribeTrusts() {
    return this.to('DescribeTrusts');
  }

  /**
   * Disables alternative client authentication methods for the specified directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableClientAuthentication.html
   */
  public toDisableClientAuthentication() {
    return this.to('DisableClientAuthentication');
  }

  /**
   * Deactivates LDAP secure calls for the specified directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableLDAPS.html
   */
  public toDisableLDAPS() {
    return this.to('DisableLDAPS');
  }

  /**
   * Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableRadius.html
   */
  public toDisableRadius() {
    return this.to('DisableRadius');
  }

  /**
   * Disables single-sign on for a directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_DisableSso.html
   */
  public toDisableSso() {
    return this.to('DisableSso');
  }

  /**
   * Enables alternative client authentication methods for the specified directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableClientAuthentication.html
   */
  public toEnableClientAuthentication() {
    return this.to('EnableClientAuthentication');
  }

  /**
   * Activates the switch for the specific directory to always use LDAP secure calls.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableLDAPS.html
   */
  public toEnableLDAPS() {
    return this.to('EnableLDAPS');
  }

  /**
   * Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableRadius.html
   */
  public toEnableRadius() {
    return this.to('EnableRadius');
  }

  /**
   * Enables single-sign on for a directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_EnableSso.html
   */
  public toEnableSso() {
    return this.to('EnableSso');
  }

  /**
   *
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetAuthorizedApplicationDetails.html
   */
  public toGetAuthorizedApplicationDetails() {
    return this.to('GetAuthorizedApplicationDetails');
  }

  /**
   * Obtains directory limit information for the current region.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetDirectoryLimits.html
   */
  public toGetDirectoryLimits() {
    return this.to('GetDirectoryLimits');
  }

  /**
   * Obtains the manual snapshot limits for a directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_GetSnapshotLimits.html
   */
  public toGetSnapshotLimits() {
    return this.to('GetSnapshotLimits');
  }

  /**
   * Obtains the aws applications authorized for a directory.
   *
   * Access Level: Read
   */
  public toListAuthorizedApplications() {
    return this.to('ListAuthorizedApplications');
  }

  /**
   * For the specified directory, lists all the certificates registered for a secured LDAP connection.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListCertificates.html
   */
  public toListCertificates() {
    return this.to('ListCertificates');
  }

  /**
   * Lists the address blocks that you have added to a directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListIpRoutes.html
   */
  public toListIpRoutes() {
    return this.to('ListIpRoutes');
  }

  /**
   * Lists the active log subscriptions for the AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListLogSubscriptions.html
   */
  public toListLogSubscriptions() {
    return this.to('ListLogSubscriptions');
  }

  /**
   * Lists all schema extensions applied to a Microsoft AD Directory.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListSchemaExtensions.html
   */
  public toListSchemaExtensions() {
    return this.to('ListSchemaExtensions');
  }

  /**
   * Lists all tags on an Amazon Directory Services directory.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Registers a certificate for secured LDAP connection.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterCertificate.html
   */
  public toRegisterCertificate() {
    return this.to('RegisterCertificate');
  }

  /**
   * Associates a directory with an SNS topic.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - sns:GetTopicAttributes
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RegisterEventTopic.html
   */
  public toRegisterEventTopic() {
    return this.to('RegisterEventTopic');
  }

  /**
   * Rejects a directory sharing request that was sent from the directory owner account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RejectSharedDirectory.html
   */
  public toRejectSharedDirectory() {
    return this.to('RejectSharedDirectory');
  }

  /**
   * Removes IP address blocks from a directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveIpRoutes.html
   */
  public toRemoveIpRoutes() {
    return this.to('RemoveIpRoutes');
  }

  /**
   * Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveRegion.html
   */
  public toRemoveRegion() {
    return this.to('RemoveRegion');
  }

  /**
   * Removes tags from an Amazon Directory Services directory.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ec2:DeleteTags
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RemoveTagsFromResource.html
   */
  public toRemoveTagsFromResource() {
    return this.to('RemoveTagsFromResource');
  }

  /**
   * Resets the password for any user in your AWS Managed Microsoft AD or Simple AD directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ResetUserPassword.html
   */
  public toResetUserPassword() {
    return this.to('ResetUserPassword');
  }

  /**
   * Restores a directory using an existing directory snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_RestoreFromSnapshot.html
   */
  public toRestoreFromSnapshot() {
    return this.to('RestoreFromSnapshot');
  }

  /**
   * Shares a specified directory in your AWS account (directory owner) with another AWS account (directory consumer). With this operation you can use your directory from any AWS account and from any Amazon VPC within an AWS Region.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ShareDirectory.html
   */
  public toShareDirectory() {
    return this.to('ShareDirectory');
  }

  /**
   * Applies a schema extension to a Microsoft AD directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_StartSchemaExtension.html
   */
  public toStartSchemaExtension() {
    return this.to('StartSchemaExtension');
  }

  /**
   * Unauthorizes an application from your AWS Directory.
   *
   * Access Level: Write
   */
  public toUnauthorizeApplication() {
    return this.to('UnauthorizeApplication');
  }

  /**
   * Stops the directory sharing between the directory owner and consumer accounts.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UnshareDirectory.html
   */
  public toUnshareDirectory() {
    return this.to('UnshareDirectory');
  }

  /**
   * Updates a conditional forwarder that has been set up for your AWS directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateConditionalForwarder.html
   */
  public toUpdateConditionalForwarder() {
    return this.to('UpdateConditionalForwarder');
  }

  /**
   * Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateNumberOfDomainControllers.html
   */
  public toUpdateNumberOfDomainControllers() {
    return this.to('UpdateNumberOfDomainControllers');
  }

  /**
   * Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateRadius.html
   */
  public toUpdateRadius() {
    return this.to('UpdateRadius');
  }

  /**
   * Updates the trust that has been set up between your AWS Managed Microsoft AD directory and an on-premises Active Directory.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_UpdateTrust.html
   */
  public toUpdateTrust() {
    return this.to('UpdateTrust');
  }

  /**
   * Verifies a trust relationship between your Microsoft AD in the AWS cloud and an external domain.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/directoryservice/latest/devguide/API_VerifyTrust.html
   */
  public toVerifyTrust() {
    return this.to('VerifyTrust');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptSharedDirectory',
      'AddIpRoutes',
      'AddRegion',
      'AuthorizeApplication',
      'CancelSchemaExtension',
      'CreateAlias',
      'CreateComputer',
      'CreateConditionalForwarder',
      'CreateLogSubscription',
      'CreateSnapshot',
      'CreateTrust',
      'DeleteConditionalForwarder',
      'DeleteDirectory',
      'DeleteLogSubscription',
      'DeleteSnapshot',
      'DeleteTrust',
      'DeregisterCertificate',
      'DeregisterEventTopic',
      'DisableClientAuthentication',
      'DisableLDAPS',
      'DisableRadius',
      'DisableSso',
      'EnableClientAuthentication',
      'EnableLDAPS',
      'EnableRadius',
      'EnableSso',
      'RegisterCertificate',
      'RegisterEventTopic',
      'RejectSharedDirectory',
      'RemoveIpRoutes',
      'RemoveRegion',
      'ResetUserPassword',
      'RestoreFromSnapshot',
      'ShareDirectory',
      'StartSchemaExtension',
      'UnauthorizeApplication',
      'UnshareDirectory',
      'UpdateConditionalForwarder',
      'UpdateNumberOfDomainControllers',
      'UpdateRadius',
      'UpdateTrust'
    ],
    Tagging: [
      'AddTagsToResource',
      'ConnectDirectory',
      'CreateDirectory',
      'CreateIdentityPoolDirectory',
      'CreateMicrosoftAD',
      'RemoveTagsFromResource'
    ],
    Read: [
      'CheckAlias',
      'DescribeCertificate',
      'DescribeConditionalForwarders',
      'DescribeDomainControllers',
      'DescribeEventTopics',
      'DescribeLDAPSSettings',
      'DescribeRegions',
      'DescribeSharedDirectories',
      'DescribeSnapshots',
      'DescribeTrusts',
      'GetAuthorizedApplicationDetails',
      'GetDirectoryLimits',
      'GetSnapshotLimits',
      'ListAuthorizedApplications',
      'ListIpRoutes',
      'ListLogSubscriptions',
      'ListTagsForResource',
      'VerifyTrust'
    ],
    List: [
      'DescribeDirectories',
      'ListCertificates',
      'ListSchemaExtensions'
    ]
  };

  /**
   * Adds a resource of type directory to the statement
   *
   * @param directoryId - Identifier for the directoryId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDirectory(directoryId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:ds:${ region || '*' }:${ account || '*' }:directory/${ directoryId }`);
  }
}
