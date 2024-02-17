import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [pca-connector-ad](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsprivatecaconnectorforactivedirectory.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class PcaConnectorAd extends PolicyStatement {
  public servicePrefix = 'pca-connector-ad';

  /**
   * Statement provider for service [pca-connector-ad](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsprivatecaconnectorforactivedirectory.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a Connector in your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - acm-pca:DescribeCertificateAuthority
   * - acm-pca:GetCertificate
   * - acm-pca:GetCertificateAuthorityCertificate
   * - acm-pca:IssueCertificate
   * - ec2:CreateTags
   * - ec2:CreateVpcEndpoint
   * - ec2:DescribeVpcEndpoints
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html
   */
  public toCreateConnector() {
    return this.to('CreateConnector');
  }

  /**
   * Grants permission to create a DirectoryRegistration in your account
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - ds:AuthorizeApplication
   * - ds:DescribeDirectories
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration.html
   */
  public toCreateDirectoryRegistration() {
    return this.to('CreateDirectoryRegistration');
  }

  /**
   * Grants permission to create a ServicePrincipalName for a DirectoryRegistration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:UpdateAuthorizedApplication
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateServicePrincipalName.html
   */
  public toCreateServicePrincipalName() {
    return this.to('CreateServicePrincipalName');
  }

  /**
   * Grants permission to create a Template for a Connector
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html
   */
  public toCreateTemplate() {
    return this.to('CreateTemplate');
  }

  /**
   * Grants permission to create a TemplateGroupAccessControlEntry for a Template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplateGroupAccessControlEntry.html
   */
  public toCreateTemplateGroupAccessControlEntry() {
    return this.to('CreateTemplateGroupAccessControlEntry');
  }

  /**
   * Grants permission to delete a Connector in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DeleteVpcEndpoints
   * - ec2:DescribeVpcEndpoints
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_DeleteConnector.html
   */
  public toDeleteConnector() {
    return this.to('DeleteConnector');
  }

  /**
   * Grants permission to delete a DirectoryRegistration in your account
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:UnauthorizeApplication
   * - ds:UpdateAuthorizedApplication
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_DeleteDirectoryRegistration.html
   */
  public toDeleteDirectoryRegistration() {
    return this.to('DeleteDirectoryRegistration');
  }

  /**
   * Grants permission to delete a ServicePrincipalName for a DirectoryRegistration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ds:UpdateAuthorizedApplication
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_DeleteServicePrincipalName.html
   */
  public toDeleteServicePrincipalName() {
    return this.to('DeleteServicePrincipalName');
  }

  /**
   * Grants permission to delete a Template for a Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_DeleteTemplate.html
   */
  public toDeleteTemplate() {
    return this.to('DeleteTemplate');
  }

  /**
   * Grants permission to delete a TemplateGroupAccessControlEntry for a Template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_DeleteTemplateGroupAccessControlEntry.html
   */
  public toDeleteTemplateGroupAccessControlEntry() {
    return this.to('DeleteTemplateGroupAccessControlEntry');
  }

  /**
   * Grants permission to get a Connector in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_GetConnector.html
   */
  public toGetConnector() {
    return this.to('GetConnector');
  }

  /**
   * Grants permission to get a DirectoryRegistration in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_GetDirectoryRegistration.html
   */
  public toGetDirectoryRegistration() {
    return this.to('GetDirectoryRegistration');
  }

  /**
   * Grants permission to get a ServicePrincipalName for a DirectoryRegistration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_GetServicePrincipalName.html
   */
  public toGetServicePrincipalName() {
    return this.to('GetServicePrincipalName');
  }

  /**
   * Grants permission to get a Template for a Connector
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_GetTemplate.html
   */
  public toGetTemplate() {
    return this.to('GetTemplate');
  }

  /**
   * Grants permission to get a TemplateGroupAccessControlEntry for a Template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_GetTemplateGroupAccessControlEntry.html
   */
  public toGetTemplateGroupAccessControlEntry() {
    return this.to('GetTemplateGroupAccessControlEntry');
  }

  /**
   * Grants permission to list the Connectors in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_ListConnectors.html
   */
  public toListConnectors() {
    return this.to('ListConnectors');
  }

  /**
   * Grants permission to list the DirectoryRegistrations in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_ListDirectoryRegistrations.html
   */
  public toListDirectoryRegistrations() {
    return this.to('ListDirectoryRegistrations');
  }

  /**
   * Grants permission to list the ServicePrincipalNames for a DirectoryRegistration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_ListServicePrincipalNames.html
   */
  public toListServicePrincipalNames() {
    return this.to('ListServicePrincipalNames');
  }

  /**
   * Grants permission to list the tags for a pca-connector-ad resource in your account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list the TemplateGroupAccessControlEntries for a Template
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_ListTemplateGroupAccessControlEntries.html
   */
  public toListTemplateGroupAccessControlEntries() {
    return this.to('ListTemplateGroupAccessControlEntries');
  }

  /**
   * Grants permission to list the Templates for a Connector
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_ListTemplates.html
   */
  public toListTemplates() {
    return this.to('ListTemplates');
  }

  /**
   * Grants permission to tag a pca-connector-ad resource in your account
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a pca-connector-ad resource in your account
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a Template for a Connector
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_UpdateTemplate.html
   */
  public toUpdateTemplate() {
    return this.to('UpdateTemplate');
  }

  /**
   * Grants permission to update a TemplateGroupAccessControlEntry for a Template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_UpdateTemplateGroupAccessControlEntry.html
   */
  public toUpdateTemplateGroupAccessControlEntry() {
    return this.to('UpdateTemplateGroupAccessControlEntry');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateConnector',
      'CreateDirectoryRegistration',
      'CreateServicePrincipalName',
      'CreateTemplate',
      'CreateTemplateGroupAccessControlEntry',
      'DeleteConnector',
      'DeleteDirectoryRegistration',
      'DeleteServicePrincipalName',
      'DeleteTemplate',
      'DeleteTemplateGroupAccessControlEntry',
      'UpdateTemplate',
      'UpdateTemplateGroupAccessControlEntry'
    ],
    Read: [
      'GetConnector',
      'GetDirectoryRegistration',
      'GetServicePrincipalName',
      'GetTemplate',
      'GetTemplateGroupAccessControlEntry',
      'ListTagsForResource'
    ],
    List: [
      'ListConnectors',
      'ListDirectoryRegistrations',
      'ListServicePrincipalNames',
      'ListTemplateGroupAccessControlEntries',
      'ListTemplates'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Connector to the statement
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/userguide/API_Connector.html
   *
   * @param connectorId - Identifier for the connectorId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnector(connectorId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:pca-connector-ad:${ region || this.defaultRegion }:${ account || this.defaultAccount }:connector/${ connectorId }`);
  }

  /**
   * Adds a resource of type DirectoryRegistration to the statement
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/userguide/API_DirectoryRegistration.html
   *
   * @param directoryId - Identifier for the directoryId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDirectoryRegistration(directoryId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:pca-connector-ad:${ region || this.defaultRegion }:${ account || this.defaultAccount }:directory-registration/${ directoryId }`);
  }

  /**
   * Adds a resource of type ServicePrincipalName to the statement
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/userguide/API_ServicePrincipalName.html
   *
   * @param directoryId - Identifier for the directoryId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onServicePrincipalName(directoryId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:pca-connector-ad:${ region || this.defaultRegion }:${ account || this.defaultAccount }:directory-registration/${ directoryId }`);
  }

  /**
   * Adds a resource of type Template to the statement
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/userguide/API_Template.html
   *
   * @param connectorId - Identifier for the connectorId.
   * @param templateId - Identifier for the templateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTemplate(connectorId: string, templateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:pca-connector-ad:${ region || this.defaultRegion }:${ account || this.defaultAccount }:connector/${ connectorId }/template/${ templateId }`);
  }

  /**
   * Adds a resource of type TemplateGroupAccessControlEntry to the statement
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/userguide/API_TemplateGroupAccessControlEntry.html
   *
   * @param connectorId - Identifier for the connectorId.
   * @param templateId - Identifier for the templateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTemplateGroupAccessControlEntry(connectorId: string, templateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:pca-connector-ad:${ region || this.defaultRegion }:${ account || this.defaultAccount }:connector/${ connectorId }/template/${ templateId }`);
  }

  /**
   * Filters access by on the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/userguide/reference_policies_iam-condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateConnector()
   * - .toCreateDirectoryRegistration()
   * - .toCreateTemplate()
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
   * Filters access by on the tags associated with the resource
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/userguide/reference_policies_iam-condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Connector
   * - DirectoryRegistration
   * - Template
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by on the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/pca-connector-ad/latest/userguide/reference_policies_iam-condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateConnector()
   * - .toCreateDirectoryRegistration()
   * - .toCreateTemplate()
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
