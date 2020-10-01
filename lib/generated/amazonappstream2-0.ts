import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [appstream](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappstream2.0.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appstream extends PolicyStatement {
  public servicePrefix = 'appstream';

  /**
   * Statement provider for service [appstream](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappstream2.0.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
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
    this.to('appstream:AssociateFleet');
    return this;
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
    this.to('appstream:BatchAssociateUserStack');
    return this;
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
    this.to('appstream:BatchDisassociateUserStack');
    return this;
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
    this.to('appstream:CopyImage');
    return this;
  }

  /**
   * Grants permission to create a Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateDirectoryConfig.html
   */
  public toCreateDirectoryConfig() {
    this.to('appstream:CreateDirectoryConfig');
    return this;
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
    this.to('appstream:CreateFleet');
    return this;
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
    this.to('appstream:CreateImageBuilder');
    return this;
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
    this.to('appstream:CreateImageBuilderStreamingURL');
    return this;
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
    this.to('appstream:CreateStack');
    return this;
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
    this.to('appstream:CreateStreamingURL');
    return this;
  }

  /**
   * Grants permission to create a usage report subscription. Usage reports are generated daily
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUsageReportSubscription.html
   */
  public toCreateUsageReportSubscription() {
    this.to('appstream:CreateUsageReportSubscription');
    return this;
  }

  /**
   * Grants permission to create a new user in the user pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_CreateUser.html
   */
  public toCreateUser() {
    this.to('appstream:CreateUser');
    return this;
  }

  /**
   * Grants permission to delete the specified Directory Config object from AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteDirectoryConfig.html
   */
  public toDeleteDirectoryConfig() {
    this.to('appstream:DeleteDirectoryConfig');
    return this;
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
    this.to('appstream:DeleteFleet');
    return this;
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
    this.to('appstream:DeleteImage');
    return this;
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
    this.to('appstream:DeleteImageBuilder');
    return this;
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
    this.to('appstream:DeleteImagePermissions');
    return this;
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
    this.to('appstream:DeleteStack');
    return this;
  }

  /**
   * Grants permission to disable usage report generation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteUsageReportSubscription.html
   */
  public toDeleteUsageReportSubscription() {
    this.to('appstream:DeleteUsageReportSubscription');
    return this;
  }

  /**
   * Grants permission to delete a user from the user pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DeleteUser.html
   */
  public toDeleteUser() {
    this.to('appstream:DeleteUser');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified Directory Config objects for AppStream 2.0, if the names for these objects are provided. Otherwise, all Directory Config objects in the account are described. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeDirectoryConfigs.html
   */
  public toDescribeDirectoryConfigs() {
    this.to('appstream:DescribeDirectoryConfigs');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified fleets, if the fleet names are provided. Otherwise, all fleets in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeFleets.html
   */
  public toDescribeFleets() {
    this.to('appstream:DescribeFleets');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImageBuilders.html
   */
  public toDescribeImageBuilders() {
    this.to('appstream:DescribeImageBuilders');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes the permissions for shared AWS account IDs on a private image that you own
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImagePermissions.html
   */
  public toDescribeImagePermissions() {
    this.to('appstream:DescribeImagePermissions');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeImages.html
   */
  public toDescribeImages() {
    this.to('appstream:DescribeImages');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes the streaming sessions for the specified stack and fleet. If a user ID is provided for the stack and fleet, only the streaming sessions for that user are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeSessions.html
   */
  public toDescribeSessions() {
    this.to('appstream:DescribeSessions');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified stacks, if the stack names are provided. Otherwise, all stacks in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeStacks.html
   */
  public toDescribeStacks() {
    this.to('appstream:DescribeStacks');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more usage report subscriptions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUsageReportSubscriptions.html
   */
  public toDescribeUsageReportSubscriptions() {
    this.to('appstream:DescribeUsageReportSubscriptions');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes the UserStackAssociation objects
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUserStackAssociations.html
   */
  public toDescribeUserStackAssociations() {
    this.to('appstream:DescribeUserStackAssociations');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes users in the user pool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DescribeUsers.html
   */
  public toDescribeUsers() {
    this.to('appstream:DescribeUsers');
    return this;
  }

  /**
   * Grants permission to disable the specified user in the user pool. This action does not delete the user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_DisableUser.html
   */
  public toDisableUser() {
    this.to('appstream:DisableUser');
    return this;
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
    this.to('appstream:DisassociateFleet');
    return this;
  }

  /**
   * Grants permission to enable a user in the user pool
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_EnableUser.html
   */
  public toEnableUser() {
    this.to('appstream:EnableUser');
    return this;
  }

  /**
   * Grants permission to immediately stop the specified streaming session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ExpireSession.html
   */
  public toExpireSession() {
    this.to('appstream:ExpireSession');
    return this;
  }

  /**
   * Grants permission to retrieve a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/controlling-administrator-access-with-policies-service-linked-roles.html#managed-policies-required-to-access-appstream-resources
   */
  public toGetImageBuilders() {
    this.to('appstream:GetImageBuilders');
    return this;
  }

  /**
   * Grants permission to upload theme assets
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/controlling-administrator-access-with-policies-service-linked-roles.html#managed-policies-required-to-access-appstream-resources
   */
  public toGetParametersForThemeAssetUpload() {
    this.to('appstream:GetParametersForThemeAssetUpload');
    return this;
  }

  /**
   * Grants permission to retrieve the name of the fleet that is associated with the specified stack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListAssociatedFleets.html
   */
  public toListAssociatedFleets() {
    this.to('appstream:ListAssociatedFleets');
    return this;
  }

  /**
   * Grants permission to retrieve the name of the stack with which the specified fleet is associated
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListAssociatedStacks.html
   */
  public toListAssociatedStacks() {
    this.to('appstream:ListAssociatedStacks');
    return this;
  }

  /**
   * Grants permission to retrieve a list of all tags for the specified AppStream 2.0 resource. The following resources can be tagged: Image builders, images, fleets, and stacks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('appstream:ListTagsForResource');
    return this;
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
    this.to('appstream:StartFleet');
    return this;
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
    this.to('appstream:StartImageBuilder');
    return this;
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
    this.to('appstream:StopFleet');
    return this;
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
    this.to('appstream:StopImageBuilder');
    return this;
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
    this.to('appstream:Stream');
    return this;
  }

  /**
   * Grants permission to add or overwrite one or more tags for the specified AppStream 2.0 resource. The following resources can be tagged: Image builders, images, fleets, and stacks
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
    this.to('appstream:TagResource');
    return this;
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
    this.to('appstream:UntagResource');
    return this;
  }

  /**
   * Grants permission to update the specified Directory Config object in AppStream 2.0. This object includes the configuration information required to join fleets and image builders to Microsoft Active Directory domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appstream2/latest/APIReference/API_UpdateDirectoryConfig.html
   */
  public toUpdateDirectoryConfig() {
    this.to('appstream:UpdateDirectoryConfig');
    return this;
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
    this.to('appstream:UpdateFleet');
    return this;
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
    this.to('appstream:UpdateImagePermissions');
    return this;
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
    this.to('appstream:UpdateStack');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateFleet",
      "BatchAssociateUserStack",
      "BatchDisassociateUserStack",
      "CopyImage",
      "CreateDirectoryConfig",
      "CreateFleet",
      "CreateImageBuilder",
      "CreateImageBuilderStreamingURL",
      "CreateStack",
      "CreateStreamingURL",
      "CreateUsageReportSubscription",
      "CreateUser",
      "DeleteDirectoryConfig",
      "DeleteFleet",
      "DeleteImage",
      "DeleteImageBuilder",
      "DeleteImagePermissions",
      "DeleteStack",
      "DeleteUsageReportSubscription",
      "DeleteUser",
      "DisableUser",
      "DisassociateFleet",
      "EnableUser",
      "ExpireSession",
      "GetParametersForThemeAssetUpload",
      "StartFleet",
      "StartImageBuilder",
      "StopFleet",
      "StopImageBuilder",
      "Stream",
      "UpdateDirectoryConfig",
      "UpdateFleet",
      "UpdateImagePermissions",
      "UpdateStack"
    ],
    "Read": [
      "DescribeDirectoryConfigs",
      "DescribeFleets",
      "DescribeImageBuilders",
      "DescribeImagePermissions",
      "DescribeImages",
      "DescribeSessions",
      "DescribeStacks",
      "DescribeUsageReportSubscriptions",
      "DescribeUserStackAssociations",
      "DescribeUsers",
      "GetImageBuilders",
      "ListAssociatedFleets",
      "ListAssociatedStacks",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type fleet to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param fleetName - Identifier for the fleetName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFleet(fleetName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appstream:${Region}:${Account}:fleet/${FleetName}';
    arn = arn.replace('${FleetName}', fleetName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type image to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param imageName - Identifier for the imageName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImage(imageName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appstream:${Region}:${Account}:image/${ImageName}';
    arn = arn.replace('${ImageName}', imageName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type image-builder to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param imageBuilderName - Identifier for the imageBuilderName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onImageBuilder(imageBuilderName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appstream:${Region}:${Account}:image-builder/${ImageBuilderName}';
    arn = arn.replace('${ImageBuilderName}', imageBuilderName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type stack to the statement
   *
   * https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html#what-is-concepts
   *
   * @param stackName - Identifier for the stackName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStack(stackName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appstream:${Region}:${Account}:stack/${StackName}';
    arn = arn.replace('${StackName}', stackName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
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
  public ifUserId(value: string | string[], operator?: string) {
    return this.if(`appstream:userId`, value, operator || 'StringLike');
  }
}
