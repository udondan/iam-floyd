import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [appstream](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappstream2.0.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appstream extends PolicyStatement {
  public servicePrefix = 'appstream';

  /**
   * Statement provider for service [appstream](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappstream2.0.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate the specified app block builder with the app block
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AssociateAppBlockBuilderAppBlock.html
   */
  public toAssociateAppBlockBuilderAppBlock() {
    return this.to('AssociateAppBlockBuilderAppBlock');
  }

  /**
   * Grants permission to associate the specified application with the fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AssociateApplicationFleet.html
   */
  public toAssociateApplicationFleet() {
    return this.to('AssociateApplicationFleet');
  }

  /**
   * Grants permission to associate the specified application to the specified entitlement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AssociateApplicationToEntitlement.html
   */
  public toAssociateApplicationToEntitlement() {
    return this.to('AssociateApplicationToEntitlement');
  }

  /**
   * Grants permission to associate the specified fleet with the specified stack
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_AssociateFleet.html
   */
  public toAssociateFleet() {
    return this.to('AssociateFleet');
  }

  /**
   * Grants permission to associate the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_BatchAssociateUserStack.html
   */
  public toBatchAssociateUserStack() {
    return this.to('BatchAssociateUserStack');
  }

  /**
   * Grants permission to disassociate the specified users from the specified stacks
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_BatchDisassociateUserStack.html
   */
  public toBatchDisassociateUserStack() {
    return this.to('BatchDisassociateUserStack');
  }

  /**
   * Grants permission to copy the specified image within the same Region or to a new Region within the same AWS account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CopyImage.html
   */
  public toCopyImage() {
    return this.to('CopyImage');
  }

  /**
   * Grants permission to create an app block. App blocks store details about the virtual hard disk that contains the files for the application in an S3 bucket. It also stores the setup script with details about how to mount the virtual hard disk. App blocks are only supported for Elastic fleets
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateAppBlock.html
   */
  public toCreateAppBlock() {
    return this.to('CreateAppBlock');
  }

  /**
   * Grants permission to create an app block builder. An app block builder is a virtual machine that is used to create an app block
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateAppBlockBuilder.html
   */
  public toCreateAppBlockBuilder() {
    return this.to('CreateAppBlockBuilder');
  }

  /**
   * Grants permission to create a URL to start an app block builder streaming session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateAppBlockBuilderStreamingURL.html
   */
  public toCreateAppBlockBuilderStreamingURL() {
    return this.to('CreateAppBlockBuilderStreamingURL');
  }

  /**
   * Grants permission to create an application within customer account. Applications store the details about how to launch applications on streaming instances. This is only supported for Elastic fleets
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateApplication.html
   */
  public toCreateApplication() {
    return this.to('CreateApplication');
  }

  /**
   * Grants permission to create a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateDirectoryConfig.html
   */
  public toCreateDirectoryConfig() {
    return this.to('CreateDirectoryConfig');
  }

  /**
   * Grants permission to create an entitlement to control access to applications based on user attributes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateEntitlement.html
   */
  public toCreateEntitlement() {
    return this.to('CreateEntitlement');
  }

  /**
   * Grants permission to create a fleet. A fleet is a group of streaming instances from which applications are launched and streamed to users
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateFleet.html
   */
  public toCreateFleet() {
    return this.to('CreateFleet');
  }

  /**
   * Grants permission to create an image builder. An image builder is a virtual machine that is used to create an image
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateImageBuilder.html
   */
  public toCreateImageBuilder() {
    return this.to('CreateImageBuilder');
  }

  /**
   * Grants permission to create a URL to start an image builder streaming session
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateImageBuilderStreamingURL.html
   */
  public toCreateImageBuilderStreamingURL() {
    return this.to('CreateImageBuilderStreamingURL');
  }

  /**
   * Grants permission to create a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateStack.html
   */
  public toCreateStack() {
    return this.to('CreateStack');
  }

  /**
   * Grants permission to create a temporary URL to start an AppStream 2.0 streaming session for the specified user. A streaming URL enables application streaming to be tested without user setup
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateStreamingURL.html
   */
  public toCreateStreamingURL() {
    return this.to('CreateStreamingURL');
  }

  /**
   * Grants permission to create a custom branding theme, which might includes a custom logo, website links, and other branding to display to your users
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateThemeForStack.html
   */
  public toCreateThemeForStack() {
    return this.to('CreateThemeForStack');
  }

  /**
   * Grants permission to update an existing image within customer account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUpdatedImage.html
   */
  public toCreateUpdatedImage() {
    return this.to('CreateUpdatedImage');
  }

  /**
   * Grants permission to create a usage report subscription. Usage reports are generated daily
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUsageReportSubscription.html
   */
  public toCreateUsageReportSubscription() {
    return this.to('CreateUsageReportSubscription');
  }

  /**
   * Grants permission to create a new user in the user pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    return this.to('CreateUser');
  }

  /**
   * Grants permission to delete the specified app block
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteAppBlock.html
   */
  public toDeleteAppBlock() {
    return this.to('DeleteAppBlock');
  }

  /**
   * Grants permission to delete the specified app block builder and release capacity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteAppBlockBuilder.html
   */
  public toDeleteAppBlockBuilder() {
    return this.to('DeleteAppBlockBuilder');
  }

  /**
   * Grants permission to delete the specified application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteApplication.html
   */
  public toDeleteApplication() {
    return this.to('DeleteApplication');
  }

  /**
   * Grants permission to delete the specified Directory Config object from AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteDirectoryConfig.html
   */
  public toDeleteDirectoryConfig() {
    return this.to('DeleteDirectoryConfig');
  }

  /**
   * Grants permission to delete the specified entitlement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteEntitlement.html
   */
  public toDeleteEntitlement() {
    return this.to('DeleteEntitlement');
  }

  /**
   * Grants permission to delete the specified fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteFleet.html
   */
  public toDeleteFleet() {
    return this.to('DeleteFleet');
  }

  /**
   * Grants permission to delete the specified image. An image cannot be deleted when it is in use
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImage.html
   */
  public toDeleteImage() {
    return this.to('DeleteImage');
  }

  /**
   * Grants permission to delete the specified image builder and release capacity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImageBuilder.html
   */
  public toDeleteImageBuilder() {
    return this.to('DeleteImageBuilder');
  }

  /**
   * Grants permission to delete permissions for the specified private image
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteImagePermissions.html
   */
  public toDeleteImagePermissions() {
    return this.to('DeleteImagePermissions');
  }

  /**
   * Grants permission to delete the specified stack. After the stack is deleted, the application streaming environment provided by the stack is no longer available to users. Also, any reservations made for application streaming sessions for the stack are released
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteStack.html
   */
  public toDeleteStack() {
    return this.to('DeleteStack');
  }

  /**
   * Grants permission to delete a custom branding theme, which might includes a custom logo, website links, and other branding to display to your users
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteThemeForStack.html
   */
  public toDeleteThemeForStack() {
    return this.to('DeleteThemeForStack');
  }

  /**
   * Grants permission to disable usage report generation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteUsageReportSubscription.html
   */
  public toDeleteUsageReportSubscription() {
    return this.to('DeleteUsageReportSubscription');
  }

  /**
   * Grants permission to delete a user from the user pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    return this.to('DeleteUser');
  }

  /**
   * Grants permission to retrieve the associations that are associated with the specified app block builder or app block
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeAppBlockBuilderAppBlockAssociations.html
   */
  public toDescribeAppBlockBuilderAppBlockAssociations() {
    return this.to('DescribeAppBlockBuilderAppBlockAssociations');
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified app block builders, if the app block builder names are provided. Otherwise, all app block builders in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeAppBlockBuilders.html
   */
  public toDescribeAppBlockBuilders() {
    return this.to('DescribeAppBlockBuilders');
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified app blocks, if the app block arns are provided. Otherwise, all app blocks in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeAppBlocks.html
   */
  public toDescribeAppBlocks() {
    return this.to('DescribeAppBlocks');
  }

  /**
   * Grants permission to retrieve the associations that are associated with the specified application or fleet
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeApplicationFleetAssociations.html
   */
  public toDescribeApplicationFleetAssociations() {
    return this.to('DescribeApplicationFleetAssociations');
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified applications, if the application arns are provided. Otherwise, all applications in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeApplications.html
   */
  public toDescribeApplications() {
    return this.to('DescribeApplications');
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeDirectoryConfigs.html
   */
  public toDescribeDirectoryConfigs() {
    return this.to('DescribeDirectoryConfigs');
  }

  /**
   * Grants permission to retrieve one or all entitlements for the specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeEntitlements.html
   */
  public toDescribeEntitlements() {
    return this.to('DescribeEntitlements');
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeFleets.html
   */
  public toDescribeFleets() {
    return this.to('DescribeFleets');
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImageBuilders.html
   */
  public toDescribeImageBuilders() {
    return this.to('DescribeImageBuilders');
  }

  /**
   * Grants permission to retrieve a list that describes the permissions for shared AWS account IDs on a private image that you own
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImagePermissions.html
   */
  public toDescribeImagePermissions() {
    return this.to('DescribeImagePermissions');
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImages.html
   */
  public toDescribeImages() {
    return this.to('DescribeImages');
  }

  /**
   * Grants permission to retrieve a list that describes the streaming sessions for the specified stack and fleet. If a user ID is provided for the stack and fleet, only the streaming sessions for that user are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeSessions.html
   */
  public toDescribeSessions() {
    return this.to('DescribeSessions');
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeStacks.html
   */
  public toDescribeStacks() {
    return this.to('DescribeStacks');
  }

  /**
   * Grants permission to get the custom branding theme information, which might includes a custom logo, website links, and other branding to display to your users
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeThemeForStack.html
   */
  public toDescribeThemeForStack() {
    return this.to('DescribeThemeForStack');
  }

  /**
   * Grants permission to retrieve a list that describes one or more usage report subscriptions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUsageReportSubscriptions.html
   */
  public toDescribeUsageReportSubscriptions() {
    return this.to('DescribeUsageReportSubscriptions');
  }

  /**
   * Grants permission to retrieve a list that describes the UserStackAssociation objects
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUserStackAssociations.html
   */
  public toDescribeUserStackAssociations() {
    return this.to('DescribeUserStackAssociations');
  }

  /**
   * Grants permission to retrieve a list that describes users in the user pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUsers.html
   */
  public toDescribeUsers() {
    return this.to('DescribeUsers');
  }

  /**
   * Grants permission to disable the specified user in the user pool. This action does not delete the user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisableUser.html
   */
  public toDisableUser() {
    return this.to('DisableUser');
  }

  /**
   * Grants permission to disassociate the specified app block builder with the app block
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisassociateAppBlockBuilderAppBlock.html
   */
  public toDisassociateAppBlockBuilderAppBlock() {
    return this.to('DisassociateAppBlockBuilderAppBlock');
  }

  /**
   * Grants permission to disassociate the specified application from the specified fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisassociateApplicationFleet.html
   */
  public toDisassociateApplicationFleet() {
    return this.to('DisassociateApplicationFleet');
  }

  /**
   * Grants permission to disassociate the specified application from the specified entitlement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisassociateApplicationFromEntitlement.html
   */
  public toDisassociateApplicationFromEntitlement() {
    return this.to('DisassociateApplicationFromEntitlement');
  }

  /**
   * Grants permission to disassociate the specified fleet from the specified stack
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisassociateFleet.html
   */
  public toDisassociateFleet() {
    return this.to('DisassociateFleet');
  }

  /**
   * Grants permission to enable a user in the user pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_EnableUser.html
   */
  public toEnableUser() {
    return this.to('EnableUser');
  }

  /**
   * Grants permission to immediately stop the specified streaming session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ExpireSession.html
   */
  public toExpireSession() {
    return this.to('ExpireSession');
  }

  /**
   * Grants permission to retrieve the name of the fleet that is associated with the specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListAssociatedFleets.html
   */
  public toListAssociatedFleets() {
    return this.to('ListAssociatedFleets');
  }

  /**
   * Grants permission to retrieve the name of the stack with which the specified fleet is associated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListAssociatedStacks.html
   */
  public toListAssociatedStacks() {
    return this.to('ListAssociatedStacks');
  }

  /**
   * Grants permission to retrieve the applications that are associated with the specified entitlement
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListEntitledApplications.html
   */
  public toListEntitledApplications() {
    return this.to('ListEntitledApplications');
  }

  /**
   * Grants permission to retrieve a list of all tags for the specified AppStream 2.0 resource. The following resources can be tagged: Image builders, images, fleets, and stacks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start the specified app block builder
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StartAppBlockBuilder.html
   */
  public toStartAppBlockBuilder() {
    return this.to('StartAppBlockBuilder');
  }

  /**
   * Grants permission to start the specified fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StartFleet.html
   */
  public toStartFleet() {
    return this.to('StartFleet');
  }

  /**
   * Grants permission to start the specified image builder
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StartImageBuilder.html
   */
  public toStartImageBuilder() {
    return this.to('StartImageBuilder');
  }

  /**
   * Grants permission to stop the specified app block builder
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StopAppBlockBuilder.html
   */
  public toStopAppBlockBuilder() {
    return this.to('StopAppBlockBuilder');
  }

  /**
   * Grants permission to stop the specified fleet
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StopFleet.html
   */
  public toStopFleet() {
    return this.to('StopFleet');
  }

  /**
   * Grants permission to stop the specified image builder
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_StopImageBuilder.html
   */
  public toStopImageBuilder() {
    return this.to('StopImageBuilder');
  }

  /**
   * Grants permission to federated users to sign in by using their existing credentials and stream applications from the specified stack
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserId()
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/external-identity-providers-setting-up-saml.html#external-identity-providers-embed-inline-policy-for-IAM-role
   */
  public toStream() {
    return this.to('Stream');
  }

  /**
   * Grants permission to add or overwrite one or more tags for the specified AppStream 2.0 resource. The following resources can be tagged: Image builders, images, fleets, stacks, app blocks and applications
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to disassociate one or more tags from the specified AppStream 2.0 resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a specific app block builder. An app block builder is a virtual machine that is used to create an app block
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateAppBlockBuilder.html
   */
  public toUpdateAppBlockBuilder() {
    return this.to('UpdateAppBlockBuilder');
  }

  /**
   * Grants permission to update the specified fields for the specified application
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateApplication.html
   */
  public toUpdateApplication() {
    return this.to('UpdateApplication');
  }

  /**
   * Grants permission to update the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateDirectoryConfig.html
   */
  public toUpdateDirectoryConfig() {
    return this.to('UpdateDirectoryConfig');
  }

  /**
   * Grants permission to update the specified fields for the specified entitlement
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateEntitlement.html
   */
  public toUpdateEntitlement() {
    return this.to('UpdateEntitlement');
  }

  /**
   * Grants permission to update the specified fleet. All attributes except the fleet name can be updated when the fleet is in the STOPPED state
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateFleet.html
   */
  public toUpdateFleet() {
    return this.to('UpdateFleet');
  }

  /**
   * Grants permission to add or update permissions for the specified private image
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateImagePermissions.html
   */
  public toUpdateImagePermissions() {
    return this.to('UpdateImagePermissions');
  }

  /**
   * Grants permission to update the specified fields for the specified stack
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateStack.html
   */
  public toUpdateStack() {
    return this.to('UpdateStack');
  }

  /**
   * Grants permission to update the custom branding theme information, which might includes a custom logo, website links, and other branding to display to your users
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateThemeForStack.html
   */
  public toUpdateThemeForStack() {
    return this.to('UpdateThemeForStack');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateAppBlockBuilderAppBlock',
      'AssociateApplicationFleet',
      'AssociateApplicationToEntitlement',
      'AssociateFleet',
      'BatchAssociateUserStack',
      'BatchDisassociateUserStack',
      'CopyImage',
      'CreateAppBlock',
      'CreateAppBlockBuilder',
      'CreateAppBlockBuilderStreamingURL',
      'CreateApplication',
      'CreateDirectoryConfig',
      'CreateEntitlement',
      'CreateFleet',
      'CreateImageBuilder',
      'CreateImageBuilderStreamingURL',
      'CreateStack',
      'CreateStreamingURL',
      'CreateThemeForStack',
      'CreateUpdatedImage',
      'CreateUsageReportSubscription',
      'CreateUser',
      'DeleteAppBlock',
      'DeleteAppBlockBuilder',
      'DeleteApplication',
      'DeleteDirectoryConfig',
      'DeleteEntitlement',
      'DeleteFleet',
      'DeleteImage',
      'DeleteImageBuilder',
      'DeleteImagePermissions',
      'DeleteStack',
      'DeleteThemeForStack',
      'DeleteUsageReportSubscription',
      'DeleteUser',
      'DisableUser',
      'DisassociateAppBlockBuilderAppBlock',
      'DisassociateApplicationFleet',
      'DisassociateApplicationFromEntitlement',
      'DisassociateFleet',
      'EnableUser',
      'ExpireSession',
      'StartAppBlockBuilder',
      'StartFleet',
      'StartImageBuilder',
      'StopAppBlockBuilder',
      'StopFleet',
      'StopImageBuilder',
      'Stream',
      'UpdateAppBlockBuilder',
      'UpdateApplication',
      'UpdateDirectoryConfig',
      'UpdateEntitlement',
      'UpdateFleet',
      'UpdateImagePermissions',
      'UpdateStack',
      'UpdateThemeForStack'
    ],
    Read: [
      'DescribeAppBlockBuilderAppBlockAssociations',
      'DescribeAppBlockBuilders',
      'DescribeAppBlocks',
      'DescribeApplicationFleetAssociations',
      'DescribeApplications',
      'DescribeDirectoryConfigs',
      'DescribeEntitlements',
      'DescribeFleets',
      'DescribeImageBuilders',
      'DescribeImagePermissions',
      'DescribeImages',
      'DescribeSessions',
      'DescribeStacks',
      'DescribeThemeForStack',
      'DescribeUsageReportSubscriptions',
      'DescribeUserStackAssociations',
      'DescribeUsers',
      'ListAssociatedFleets',
      'ListAssociatedStacks',
      'ListTagsForResource'
    ],
    List: [
      'ListEntitledApplications'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type fleet to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param fleetName - Identifier for the fleetName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFleet(fleetName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:appstream:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:fleet/${ fleetName }`);
  }

  /**
   * Adds a resource of type image to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param imageName - Identifier for the imageName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImage(imageName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:appstream:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:image/${ imageName }`);
  }

  /**
   * Adds a resource of type image-builder to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param imageBuilderName - Identifier for the imageBuilderName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImageBuilder(imageBuilderName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:appstream:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:image-builder/${ imageBuilderName }`);
  }

  /**
   * Adds a resource of type stack to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param stackName - Identifier for the stackName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStack(stackName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:appstream:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:stack/${ stackName }`);
  }

  /**
   * Adds a resource of type app-block to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param appBlockName - Identifier for the appBlockName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAppBlock(appBlockName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:appstream:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:app-block/${ appBlockName }`);
  }

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param applicationName - Identifier for the applicationName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onApplication(applicationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:appstream:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ applicationName }`);
  }

  /**
   * Adds a resource of type app-block-builder to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param appBlockBuilderName - Identifier for the appBlockBuilderName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAppBlockBuilder(appBlockBuilderName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:appstream:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:app-block-builder/${ appBlockBuilderName }`);
  }

  /**
   * Filters access by the ID of the AppStream 2.0 user
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/external-identity-providers-setting-up-saml.html#external-identity-providers-embed-inline-policy-for-IAM-role
   *
   * Applies to actions:
   * - .toStream()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserId(value: string | string[], operator?: Operator | string) {
    return this.if(`userId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAppBlock()
   * - .toCreateAppBlockBuilder()
   * - .toCreateApplication()
   * - .toCreateFleet()
   * - .toCreateImageBuilder()
   * - .toCreateStack()
   * - .toCreateUpdatedImage()
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
   * Filters access by the tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAssociateAppBlockBuilderAppBlock()
   * - .toAssociateApplicationFleet()
   * - .toAssociateFleet()
   * - .toBatchAssociateUserStack()
   * - .toBatchDisassociateUserStack()
   * - .toCopyImage()
   * - .toCreateAppBlock()
   * - .toCreateAppBlockBuilderStreamingURL()
   * - .toCreateApplication()
   * - .toCreateImageBuilderStreamingURL()
   * - .toCreateStreamingURL()
   * - .toCreateUpdatedImage()
   * - .toDeleteAppBlock()
   * - .toDeleteAppBlockBuilder()
   * - .toDeleteApplication()
   * - .toDeleteFleet()
   * - .toDeleteImage()
   * - .toDeleteImageBuilder()
   * - .toDeleteImagePermissions()
   * - .toDeleteStack()
   * - .toDisassociateAppBlockBuilderAppBlock()
   * - .toDisassociateApplicationFleet()
   * - .toDisassociateFleet()
   * - .toStartAppBlockBuilder()
   * - .toStartFleet()
   * - .toStartImageBuilder()
   * - .toStopAppBlockBuilder()
   * - .toStopFleet()
   * - .toStopImageBuilder()
   * - .toTagResource()
   * - .toUpdateAppBlockBuilder()
   * - .toUpdateApplication()
   * - .toUpdateFleet()
   * - .toUpdateImagePermissions()
   * - .toUpdateStack()
   *
   * Applies to resource types:
   * - fleet
   * - image
   * - image-builder
   * - stack
   * - app-block
   * - application
   * - app-block-builder
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the presence of tag keys in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAppBlock()
   * - .toCreateAppBlockBuilder()
   * - .toCreateApplication()
   * - .toCreateFleet()
   * - .toCreateImageBuilder()
   * - .toCreateStack()
   * - .toCreateUpdatedImage()
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
