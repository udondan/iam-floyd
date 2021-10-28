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
  constructor(sid?: string) {
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
    return this.to('AddProfileKey');
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
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to create a profile in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateProfile.html
   */
  public toCreateProfile() {
    return this.to('CreateProfile');
  }

  /**
   * Grants permission to delete a Domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to delete a integration in a domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteIntegration.html
   */
  public toDeleteIntegration() {
    return this.to('DeleteIntegration');
  }

  /**
   * Grants permission to delete a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfile.html
   */
  public toDeleteProfile() {
    return this.to('DeleteProfile');
  }

  /**
   * Grants permission to delete a profile key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileKey.html
   */
  public toDeleteProfileKey() {
    return this.to('DeleteProfileKey');
  }

  /**
   * Grants permission to delete a profile object
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileObject.html
   */
  public toDeleteProfileObject() {
    return this.to('DeleteProfileObject');
  }

  /**
   * Grants permission to delete a specific profile object type in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_DeleteProfileObjectType.html
   */
  public toDeleteProfileObjectType() {
    return this.to('DeleteProfileObjectType');
  }

  /**
   * Grants permission to get a specific domain in an account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetDomain.html
   */
  public toGetDomain() {
    return this.to('GetDomain');
  }

  /**
   * Grants permission to get a specific integrations in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetIntegration.html
   */
  public toGetIntegration() {
    return this.to('GetIntegration');
  }

  /**
   * Grants permission to get profile matches
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html
   */
  public toGetMatches() {
    return this.to('GetMatches');
  }

  /**
   * Grants permission to get a specific profile object type in the domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetProfileObjectType.html
   */
  public toGetProfileObjectType() {
    return this.to('GetProfileObjectType');
  }

  /**
   * Grants permission to get a specific object type template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetProfileObjectTypeTemplate.html
   */
  public toGetProfileObjectTypeTemplate() {
    return this.to('GetProfileObjectTypeTemplate');
  }

  /**
   * Grants permission to list all the integrations in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListAccountIntegrations.html
   */
  public toListAccountIntegrations() {
    return this.to('ListAccountIntegrations');
  }

  /**
   * Grants permission to list all the domains in an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list all the integrations in a specific domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListIntegrations.html
   */
  public toListIntegrations() {
    return this.to('ListIntegrations');
  }

  /**
   * Grants permission to list all the profile object type templates in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjectTypeTemplates.html
   */
  public toListProfileObjectTypeTemplates() {
    return this.to('ListProfileObjectTypeTemplates');
  }

  /**
   * Grants permission to list all the profile object types in the domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjectTypes.html
   */
  public toListProfileObjectTypes() {
    return this.to('ListProfileObjectTypes');
  }

  /**
   * Grants permission to list all the profile objects for a profile
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListProfileObjects.html
   */
  public toListProfileObjects() {
    return this.to('ListProfileObjects');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to merge profiles
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_MergeProfiles.html
   */
  public toMergeProfiles() {
    return this.to('MergeProfiles');
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
    return this.to('PutIntegration');
  }

  /**
   * Grants permission to put an object for a profile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_PutProfileObject.html
   */
  public toPutProfileObject() {
    return this.to('PutProfileObject');
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
    return this.to('PutProfileObjectType');
  }

  /**
   * Grants permission to search for profiles in a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_SearchProfiles.html
   */
  public toSearchProfiles() {
    return this.to('SearchProfiles');
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
    return this.to('TagResource');
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
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a Domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html
   */
  public toUpdateDomain() {
    return this.to('UpdateDomain');
  }

  /**
   * Grants permission to update a profile in the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateProfile.html
   */
  public toUpdateProfile() {
    return this.to('UpdateProfile');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AddProfileKey',
      'CreateDomain',
      'CreateProfile',
      'DeleteDomain',
      'DeleteIntegration',
      'DeleteProfile',
      'DeleteProfileKey',
      'DeleteProfileObject',
      'DeleteProfileObjectType',
      'MergeProfiles',
      'PutIntegration',
      'PutProfileObject',
      'PutProfileObjectType',
      'UpdateDomain',
      'UpdateProfile'
    ],
    Read: [
      'GetDomain',
      'GetIntegration',
      'GetProfileObjectType',
      'GetProfileObjectTypeTemplate',
      'ListTagsForResource',
      'SearchProfiles'
    ],
    List: [
      'GetMatches',
      'ListAccountIntegrations',
      'ListDomains',
      'ListIntegrations',
      'ListProfileObjectTypeTemplates',
      'ListProfileObjectTypes',
      'ListProfileObjects'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
    return this.on(`arn:${ partition || 'aws' }:profile:${ region || '*' }:${ account || '*' }:domains/${ domainName }`);
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
    return this.on(`arn:${ partition || 'aws' }:profile:${ region || '*' }:${ account || '*' }:domains/${ domainName }/object-types/${ objectTypeName }`);
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
    return this.on(`arn:${ partition || 'aws' }:profile:${ region || '*' }:${ account || '*' }:domains/${ domainName }/integrations/${ uri }`);
  }
}
