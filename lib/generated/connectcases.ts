import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [cases](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectcases.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cases extends PolicyStatement {
  public servicePrefix = 'cases';

  /**
   * Statement provider for service [cases](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnectcases.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieve information about the fields in the case domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_BatchGetField.html
   */
  public toBatchGetField() {
    return this.to('BatchGetField');
  }

  /**
   * Grants permission to update the field options in the case domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_BatchPutFieldOptions.html
   */
  public toBatchPutFieldOptions() {
    return this.to('BatchPutFieldOptions');
  }

  /**
   * Grants permission to create a case in the case domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifConnectUserArn()
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_CreateCase.html
   */
  public toCreateCase() {
    return this.to('CreateCase');
  }

  /**
   * Grants permission to create a new case domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_CreateDomain.html
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to create a field in the case domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_CreateField.html
   */
  public toCreateField() {
    return this.to('CreateField');
  }

  /**
   * Grants permission to create a layout in the case domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_CreateLayout.html
   */
  public toCreateLayout() {
    return this.to('CreateLayout');
  }

  /**
   * Grants permission to create a related item associated to a case in the case domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifConnectUserArn()
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_CreateRelatedItem.html
   */
  public toCreateRelatedItem() {
    return this.to('CreateRelatedItem');
  }

  /**
   * Grants permission to create a template in the case domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_CreateTemplate.html
   */
  public toCreateTemplate() {
    return this.to('CreateTemplate');
  }

  /**
   * Grants permission to delete the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to retrieve information about a case in the case domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_GetCase.html
   */
  public toGetCase() {
    return this.to('GetCase');
  }

  /**
   * Grants permission to view audit history of a case
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_GetCaseAuditEvents.html
   */
  public toGetCaseAuditEvents() {
    return this.to('GetCaseAuditEvents');
  }

  /**
   * Grants permission to retrieve information about the case event configuraton in the case domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_GetCaseEventConfiguration.html
   */
  public toGetCaseEventConfiguration() {
    return this.to('GetCaseEventConfiguration');
  }

  /**
   * Grants permission to retrieve information about the case domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_GetDomain.html
   */
  public toGetDomain() {
    return this.to('GetDomain');
  }

  /**
   * Grants permission to retrieve information about the layout in the case domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_GetLayout.html
   */
  public toGetLayout() {
    return this.to('GetLayout');
  }

  /**
   * Grants permission to retrieve information about the template in the case domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_GetTemplate.html
   */
  public toGetTemplate() {
    return this.to('GetTemplate');
  }

  /**
   * Grants permission to list cases for a specific contact in the case domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_ListCasesForContact.html
   */
  public toListCasesForContact() {
    return this.to('ListCasesForContact');
  }

  /**
   * Grants permission to list all domains in the aws account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list field options for a single select field in the case domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_ListFieldOptions.html
   */
  public toListFieldOptions() {
    return this.to('ListFieldOptions');
  }

  /**
   * Grants permission to list fields in the case domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_ListFields.html
   */
  public toListFields() {
    return this.to('ListFields');
  }

  /**
   * Grants permission to list layouts in the case domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_ListLayouts.html
   */
  public toListLayouts() {
    return this.to('ListLayouts');
  }

  /**
   * Grants permission to list the tags for the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list templates in the case domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_ListTemplates.html
   */
  public toListTemplates() {
    return this.to('ListTemplates');
  }

  /**
   * Grants permission to insert or update the case event configuration in the case domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_PutCaseEventConfiguration.html
   */
  public toPutCaseEventConfiguration() {
    return this.to('PutCaseEventConfiguration');
  }

  /**
   * Grants permission to search for cases in the case domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_SearchCases.html
   */
  public toSearchCases() {
    return this.to('SearchCases');
  }

  /**
   * Grants permission to search for related items associated to the case in the case domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_SearchRelatedItems.html
   */
  public toSearchRelatedItems() {
    return this.to('SearchRelatedItems');
  }

  /**
   * Grants permission to add the specified tags to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove the specified tags from the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update the field values on the case in the case domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifConnectUserArn()
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_UpdateCase.html
   */
  public toUpdateCase() {
    return this.to('UpdateCase');
  }

  /**
   * Grants permission to update the field in the case domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_UpdateField.html
   */
  public toUpdateField() {
    return this.to('UpdateField');
  }

  /**
   * Grants permission to update the layout in the case domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_UpdateLayout.html
   */
  public toUpdateLayout() {
    return this.to('UpdateLayout');
  }

  /**
   * Grants permission to update the template in the case domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cases/latest/APIReference/API_UpdateTemplate.html
   */
  public toUpdateTemplate() {
    return this.to('UpdateTemplate');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetField',
      'GetCase',
      'GetCaseAuditEvents',
      'GetCaseEventConfiguration',
      'GetDomain',
      'GetLayout',
      'GetTemplate',
      'ListTagsForResource',
      'SearchCases',
      'SearchRelatedItems'
    ],
    Write: [
      'BatchPutFieldOptions',
      'CreateCase',
      'CreateDomain',
      'CreateField',
      'CreateLayout',
      'CreateRelatedItem',
      'CreateTemplate',
      'DeleteDomain',
      'PutCaseEventConfiguration',
      'UpdateCase',
      'UpdateField',
      'UpdateLayout',
      'UpdateTemplate'
    ],
    List: [
      'ListCasesForContact',
      'ListDomains',
      'ListFieldOptions',
      'ListFields',
      'ListLayouts',
      'ListTemplates'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Case to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/cases.html
   *
   * @param domainId - Identifier for the domainId.
   * @param caseId - Identifier for the caseId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCase(domainId: string, caseId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cases.defaultPartition }:cases:${ region || '*' }:${ account || '*' }:domain/${ domainId }/case/${ caseId }`);
  }

  /**
   * Adds a resource of type Domain to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/cases.html
   *
   * @param domainId - Identifier for the domainId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomain(domainId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cases.defaultPartition }:cases:${ region || '*' }:${ account || '*' }:domain/${ domainId }`);
  }

  /**
   * Adds a resource of type Field to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/case-fields.html
   *
   * @param domainId - Identifier for the domainId.
   * @param fieldId - Identifier for the fieldId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onField(domainId: string, fieldId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cases.defaultPartition }:cases:${ region || '*' }:${ account || '*' }:domain/${ domainId }/field/${ fieldId }`);
  }

  /**
   * Adds a resource of type Layout to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/case-layouts.html
   *
   * @param domainId - Identifier for the domainId.
   * @param layoutId - Identifier for the layoutId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLayout(domainId: string, layoutId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cases.defaultPartition }:cases:${ region || '*' }:${ account || '*' }:domain/${ domainId }/layout/${ layoutId }`);
  }

  /**
   * Adds a resource of type RelatedItem to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/associatecontactandcase.html
   *
   * @param domainId - Identifier for the domainId.
   * @param caseId - Identifier for the caseId.
   * @param relatedItemId - Identifier for the relatedItemId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRelatedItem(domainId: string, caseId: string, relatedItemId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cases.defaultPartition }:cases:${ region || '*' }:${ account || '*' }:domain/${ domainId }/case/${ caseId }/related-item/${ relatedItemId }`);
  }

  /**
   * Adds a resource of type Template to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/case-templates.html
   *
   * @param domainId - Identifier for the domainId.
   * @param templateId - Identifier for the templateId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTemplate(domainId: string, templateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cases.defaultPartition }:cases:${ region || '*' }:${ account || '*' }:domain/${ domainId }/template/${ templateId }`);
  }

  /**
   * Filters access by tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
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
   * Filters access by tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Case
   * - Domain
   * - Field
   * - Layout
   * - RelatedItem
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
   * Filters access by tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }

  /**
   * Filters access by connect's UserArn
   *
   * https://docs.aws.amazon.com/connect/latest/APIReference/API_UserReference.html
   *
   * Applies to actions:
   * - .toCreateCase()
   * - .toCreateRelatedItem()
   * - .toUpdateCase()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnLike`
   */
  public ifConnectUserArn(value: string | string[], operator?: Operator | string) {
    return this.if(`connect:UserArn`, value, operator || 'ArnLike');
  }
}
