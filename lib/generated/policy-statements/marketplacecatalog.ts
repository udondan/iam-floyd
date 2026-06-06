import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [aws-marketplace-catalog](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacecatalog.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMarketplaceCatalog extends PolicyStatement {
  public servicePrefix = 'aws-marketplace';

  /**
   * Statement provider for service [aws-marketplace-catalog](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacecatalog.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to cancel a running change set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_CancelChangeSet.html
   */
  public toCancelChangeSet() {
    return this.to('CancelChangeSet');
  }

  /**
   * Grants permission to create a new verification evidence resource for BusinessVerification
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   */
  public toCreateVerificationEvidence() {
    return this.to('CreateVerificationEvidence');
  }

  /**
   * Grants permission to delete the resource policy of an existing entity
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DeleteResourcePolicy.html
   */
  public toDeleteResourcePolicy() {
    return this.to('DeleteResourcePolicy');
  }

  /**
   * Grants permission to return the details of an existing assessment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DescribeAssessment.html
   */
  public toDescribeAssessment() {
    return this.to('DescribeAssessment');
  }

  /**
   * Grants permission to return the details of an existing change set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DescribeChangeSet.html
   */
  public toDescribeChangeSet() {
    return this.to('DescribeChangeSet');
  }

  /**
   * Grants permission to return the details of an existing entity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DescribeEntity.html
   */
  public toDescribeEntity() {
    return this.to('DescribeEntity');
  }

  /**
   * Grants permission to retrieve details of an existing invoice submission task
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   */
  public toGetInvoiceSubmissionTask() {
    return this.to('GetInvoiceSubmissionTask');
  }

  /**
   * Grants permission to retrieve details of a specific tax invoice issued by AWS on behalf of a seller
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   */
  public toGetIssuedTaxInvoice() {
    return this.to('GetIssuedTaxInvoice');
  }

  /**
   * Grants permission to get the resource policy of an existing entity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_GetResourcePolicy.html
   */
  public toGetResourcePolicy() {
    return this.to('GetResourcePolicy');
  }

  /**
   * Grants permission to retrieve the detailed status of a specific verification process, including PSP validation results
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifVerificationType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   */
  public toGetVerification() {
    return this.to('GetVerification');
  }

  /**
   * Grants permission to retrieve the complete content of a specific verification evidence resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   */
  public toGetVerificationEvidence() {
    return this.to('GetVerificationEvidence');
  }

  /**
   * Grants permission to list existing assessments
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_ListAssessments.html
   */
  public toListAssessments() {
    return this.to('ListAssessments');
  }

  /**
   * Grants permission to list existing change sets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_ListChangeSets.html
   */
  public toListChangeSets() {
    return this.to('ListChangeSets');
  }

  /**
   * Grants permission to list existing entities
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_ListEntities.html
   */
  public toListEntities() {
    return this.to('ListEntities');
  }

  /**
   * Grants permission to list existing invoice submission tasks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   */
  public toListInvoiceSubmissionTasks() {
    return this.to('ListInvoiceSubmissionTasks');
  }

  /**
   * Grants permission to list tax invoices issued by AWS on behalf of a seller
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   */
  public toListIssuedTaxInvoices() {
    return this.to('ListIssuedTaxInvoices');
  }

  /**
   * Grants permission to list payables of the specified payable provenance
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   */
  public toListPayables() {
    return this.to('ListPayables');
  }

  /**
   * Grants permission to list tags on an existing entity, change set, invoice submission task, or issued tax invoice
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list verification evidence resources with summary metadata
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   */
  public toListVerificationEvidence() {
    return this.to('ListVerificationEvidence');
  }

  /**
   * Grants permission to list all verification statuses across jurisdictions and verification types
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifVerificationType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   */
  public toListVerifications() {
    return this.to('ListVerifications');
  }

  /**
   * Grants permission to attach a resource policy to an existing entity
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_PutResourcePolicy.html
   */
  public toPutResourcePolicy() {
    return this.to('PutResourcePolicy');
  }

  /**
   * Grants permission to request a new change set (Note: resource-level permissions for this action and condition context keys for this action are only supported when used with Catalog API and are not supported when used with AWS Marketplace Management Portal)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifCatalogChangeType()
   * - .ifIntent()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html
   */
  public toStartChangeSet() {
    return this.to('StartChangeSet');
  }

  /**
   * Grants permission to initiate tasks that submit invoices for processing in AWS Marketplace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   */
  public toStartInvoiceSubmissionTask() {
    return this.to('StartInvoiceSubmissionTask');
  }

  /**
   * Grants permission to submit verification evidence to a Payment Service Provider and enable data sharing for a specified jurisdiction
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVerificationType()
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   */
  public toStartVerification() {
    return this.to('StartVerification');
  }

  /**
   * Grants permission to add new tags to a resource. Supported resource: Entity, ChangeSet, InvoiceSubmissionTask, IssuedTaxInvoice
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a resource. Supported resource: Entity, ChangeSet, InvoiceSubmissionTask, IssuedTaxInvoice
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing verification evidence resource using full replacement semantics
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   */
  public toUpdateVerificationEvidence() {
    return this.to('UpdateVerificationEvidence');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CancelChangeSet',
      'CreateVerificationEvidence',
      'StartChangeSet',
      'StartInvoiceSubmissionTask',
      'StartVerification',
      'UpdateVerificationEvidence'
    ],
    'Permissions management': [
      'DeleteResourcePolicy',
      'PutResourcePolicy'
    ],
    Read: [
      'DescribeAssessment',
      'DescribeChangeSet',
      'DescribeEntity',
      'GetInvoiceSubmissionTask',
      'GetIssuedTaxInvoice',
      'GetResourcePolicy',
      'GetVerification',
      'GetVerificationEvidence',
      'ListTagsForResource'
    ],
    List: [
      'ListAssessments',
      'ListChangeSets',
      'ListEntities',
      'ListInvoiceSubmissionTasks',
      'ListIssuedTaxInvoices',
      'ListPayables',
      'ListVerificationEvidence',
      'ListVerifications'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Entity to the statement
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DescribeEntity.html#API_DescribeEntity_ResponseSyntax
   *
   * @param catalog - Identifier for the catalog.
   * @param entityType - Identifier for the entityType.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalogChangeType()
   */
  public onEntity(catalog: string, entityType: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:${ catalog }/${ entityType }/${ resourceId }`);
  }

  /**
   * Adds a resource of type ChangeSet to the statement
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_ResponseSyntax
   *
   * @param catalog - Identifier for the catalog.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifCatalogChangeType()
   */
  public onChangeSet(catalog: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:${ catalog }/ChangeSet/${ resourceId }`);
  }

  /**
   * Adds a resource of type Assessment to the statement
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_DescribeAssessment.html#API_DescribeAssessment_ResponseSyntax
   *
   * @param catalog - Identifier for the catalog.
   * @param resourceId - Identifier for the resourceId.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAssessment(catalog: string, resourceId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:${ region ?? this.defaultRegion }::${ catalog }/Assessment/${ resourceId }`);
  }

  /**
   * Adds a resource of type InvoiceSubmissionTask to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   *
   * @param catalog - Identifier for the catalog.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInvoiceSubmissionTask(catalog: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalog }/invoice-submission-task/${ resourceId }`);
  }

  /**
   * Adds a resource of type IssuedTaxInvoice to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   *
   * @param catalog - Identifier for the catalog.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIssuedTaxInvoice(catalog: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:catalog/${ catalog }/issued-tax-invoice/${ resourceId }`);
  }

  /**
   * Adds a resource of type VerificationEvidence to the statement
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   *
   * @param verificationType - Identifier for the verificationType.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onVerificationEvidence(verificationType: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:aws-marketplace:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:verification-type/${ verificationType }/verification-evidence/${ resourceId }`);
  }

  /**
   * Filters access by the Intent parameter in the StartChangeSet request
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/api-access-control.html
   *
   * Applies to actions:
   * - .toStartChangeSet()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifIntent(value: string | string[], operator?: Operator | string) {
    return this.if(`Intent`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the verification type for verification process operations (StartVerification, GetVerification, ListVerifications). Valid values: BusinessVerification
   *
   * https://docs.aws.amazon.com/marketplace/latest/APIReference/compliance-api-access-control.html
   *
   * Applies to actions:
   * - .toGetVerification()
   * - .toListVerifications()
   * - .toStartVerification()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVerificationType(value: string | string[], operator?: Operator | string) {
    return this.if(`VerificationType`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateVerificationEvidence()
   * - .toStartChangeSet()
   * - .toStartInvoiceSubmissionTask()
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
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - Entity
   * - ChangeSet
   * - InvoiceSubmissionTask
   * - IssuedTaxInvoice
   * - VerificationEvidence
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateVerificationEvidence()
   * - .toStartChangeSet()
   * - .toStartInvoiceSubmissionTask()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the change type in the StartChangeSet request
   *
   * https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/api-access-control.html
   *
   * Applies to actions:
   * - .toStartChangeSet()
   *
   * Applies to resource types:
   * - Entity
   * - ChangeSet
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifCatalogChangeType(value: string | string[], operator?: Operator | string) {
    return this.if(`catalog:ChangeType`, value, operator ?? 'StringLike');
  }
}
