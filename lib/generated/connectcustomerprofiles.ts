import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [profile](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectcustomerprofiles.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Profile extends PolicyStatement {
  public servicePrefix = 'profile';

  /**
   * Statement provider for service [profile](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectcustomerprofiles.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to add a profile key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_AddProfileKey.html
   */
  public toAddProfileKey() {
    this.to('profile:AddProfileKey');
    return this;
  }

  /**
   * Grants permission to create a Domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html
   */
  public toCreateDomain() {
    this.to('profile:CreateDomain');
    return this;
  }

  /**
   * Grants permission to create a profile in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateProfile.html
   */
  public toCreateProfile() {
    this.to('profile:CreateProfile');
    return this;
  }

  /**
   * Grants permission to delete a Domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    this.to('profile:DeleteDomain');
    return this;
  }

  /**
   * Grants permission to delete a integration in a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteIntegration.html
   */
  public toDeleteIntegration() {
    this.to('profile:DeleteIntegration');
    return this;
  }

  /**
   * Grants permission to delete a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfile.html
   */
  public toDeleteProfile() {
    this.to('profile:DeleteProfile');
    return this;
  }

  /**
   * Grants permission to delete a profile key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileKey.html
   */
  public toDeleteProfileKey() {
    this.to('profile:DeleteProfileKey');
    return this;
  }

  /**
   * Grants permission to delete a profile object
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileObject.html
   */
  public toDeleteProfileObject() {
    this.to('profile:DeleteProfileObject');
    return this;
  }

  /**
   * Grants permission to delete a specific profile object type in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileObjectType.html
   */
  public toDeleteProfileObjectType() {
    this.to('profile:DeleteProfileObjectType');
    return this;
  }

  /**
   * Grants permission to get a specific domain in an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetDomain.html
   */
  public toGetDomain() {
    this.to('profile:GetDomain');
    return this;
  }

  /**
   * Grants permission to get a specific integrations in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetIntegration.html
   */
  public toGetIntegration() {
    this.to('profile:GetIntegration');
    return this;
  }

  /**
   * Grants permission to get a specific profile object type in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetProfileObjectType.html
   */
  public toGetProfileObjectType() {
    this.to('profile:GetProfileObjectType');
    return this;
  }

  /**
   * Grants permission to get a specific object type template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetProfileObjectTypeTemplate.html
   */
  public toGetProfileObjectTypeTemplate() {
    this.to('profile:GetProfileObjectTypeTemplate');
    return this;
  }

  /**
   * Grants permission to list all the integrations in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListAccountIntegrations.html
   */
  public toListAccountIntegrations() {
    this.to('profile:ListAccountIntegrations');
    return this;
  }

  /**
   * Grants permission to list all the domains in an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListDomains.html
   */
  public toListDomains() {
    this.to('profile:ListDomains');
    return this;
  }

  /**
   * Grants permission to list all the integrations in a specific domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListIntegrations.html
   */
  public toListIntegrations() {
    this.to('profile:ListIntegrations');
    return this;
  }

  /**
   * Grants permission to list all the profile object type templates in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjectTypeTemplates.html
   */
  public toListProfileObjectTypeTemplates() {
    this.to('profile:ListProfileObjectTypeTemplates');
    return this;
  }

  /**
   * Grants permission to list all the profile object types in the domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjectTypes.html
   */
  public toListProfileObjectTypes() {
    this.to('profile:ListProfileObjectTypes');
    return this;
  }

  /**
   * Grants permission to list all the profile objects for a profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjects.html
   */
  public toListProfileObjects() {
    this.to('profile:ListProfileObjects');
    return this;
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('profile:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to put a integration in a domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_PutIntegration.html
   */
  public toPutIntegration() {
    this.to('profile:PutIntegration');
    return this;
  }

  /**
   * Grants permission to put an object for a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_PutProfileObject.html
   */
  public toPutProfileObject() {
    this.to('profile:PutProfileObject');
    return this;
  }

  /**
   * Grants permission to put a specific profile object type in the domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_PutProfileObjectType.html
   */
  public toPutProfileObjectType() {
    this.to('profile:PutProfileObjectType');
    return this;
  }

  /**
   * Grants permission to search for profiles in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html
   */
  public toSearchProfiles() {
    this.to('profile:SearchProfiles');
    return this;
  }

  /**
   * Grants permission to adds tags to a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('profile:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('profile:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a Domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html
   */
  public toUpdateDomain() {
    this.to('profile:UpdateDomain');
    return this;
  }

  /**
   * Grants permission to update a profile in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateProfile.html
   */
  public toUpdateProfile() {
    this.to('profile:UpdateProfile');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddProfileKey",
      "CreateDomain",
      "CreateProfile",
      "DeleteDomain",
      "DeleteIntegration",
      "DeleteProfile",
      "DeleteProfileKey",
      "DeleteProfileObject",
      "DeleteProfileObjectType",
      "PutIntegration",
      "PutProfileObject",
      "PutProfileObjectType",
      "UpdateDomain",
      "UpdateProfile"
    ],
    "Read": [
      "GetDomain",
      "GetIntegration",
      "GetProfileObjectType",
      "GetProfileObjectTypeTemplate",
      "SearchProfiles"
    ],
    "List": [
      "ListAccountIntegrations",
      "ListDomains",
      "ListIntegrations",
      "ListProfileObjectTypeTemplates",
      "ListProfileObjectTypes",
      "ListProfileObjects",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type domains to the statement
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   *
   * @param domainName - Identifier for the domainName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomains(domainName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:profile:${Region}:${Account}:domains/${DomainName}';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type object-types to the statement
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   *
   * @param domainName - Identifier for the domainName.
   * @param objectTypeName - Identifier for the objectTypeName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onObjectTypes(domainName: string, objectTypeName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:profile:${Region}:${Account}:domains/${DomainName}/object-types/${ObjectTypeName}';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${ObjectTypeName}', objectTypeName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type integrations to the statement
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/
   *
   * @param domainName - Identifier for the domainName.
   * @param uri - Identifier for the uri.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIntegrations(domainName: string, uri: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:profile:${Region}:${Account}:domains/${DomainName}/integrations/${Uri}';
    arn = arn.replace('${DomainName}', domainName);
    arn = arn.replace('${Uri}', uri);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
