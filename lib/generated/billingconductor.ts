import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [billingconductor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingconductor.html).
 *
 * @param options - Options for the statement
 */
export class Billingconductor extends PolicyStatement {
  public servicePrefix = 'billingconductor';

  /**
   * Statement provider for service [billingconductor](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbillingconductor.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to associate between one and 30 accounts to a billing group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_AssociateAccounts.html
   */
  public toAssociateAccounts() {
    return this.to('AssociateAccounts');
  }

  /**
   * Grants permission to associate pricing rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_AssociatePricingRules.html
   */
  public toAssociatePricingRules() {
    return this.to('AssociatePricingRules');
  }

  /**
   * Grants permission to batch associate resources to a percentage custom line item
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_BatchAssociateResourcesToCustomLineItem.html
   */
  public toBatchAssociateResourcesToCustomLineItem() {
    return this.to('BatchAssociateResourcesToCustomLineItem');
  }

  /**
   * Grants permission to batch disassociate resources from a percentage custom line item
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_BatchDisassociateResourcesFromCustomLineItem.html
   */
  public toBatchDisassociateResourcesFromCustomLineItem() {
    return this.to('BatchDisassociateResourcesFromCustomLineItem');
  }

  /**
   * Grants permission to create a billing group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_CreateBillingGroup.html
   */
  public toCreateBillingGroup() {
    return this.to('CreateBillingGroup');
  }

  /**
   * Grants permission to create a custom line item
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_CreateCustomLineItem.html
   */
  public toCreateCustomLineItem() {
    return this.to('CreateCustomLineItem');
  }

  /**
   * Grants permission to create a pricing plan
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_CreatePricingPlan.html
   */
  public toCreatePricingPlan() {
    return this.to('CreatePricingPlan');
  }

  /**
   * Grants permission to create a pricing rule
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_CreatePricingRule.html
   */
  public toCreatePricingRule() {
    return this.to('CreatePricingRule');
  }

  /**
   * Grants permission to delete a billing group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DeleteBillingGroup.html
   */
  public toDeleteBillingGroup() {
    return this.to('DeleteBillingGroup');
  }

  /**
   * Grants permission to delete a custom line item
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DeleteCustomLineItem.html
   */
  public toDeleteCustomLineItem() {
    return this.to('DeleteCustomLineItem');
  }

  /**
   * Grants permission to delete a pricing plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DeletePricingPlan.html
   */
  public toDeletePricingPlan() {
    return this.to('DeletePricingPlan');
  }

  /**
   * Grants permission to delete a pricing rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DeletePricingRule.html
   */
  public toDeletePricingRule() {
    return this.to('DeletePricingRule');
  }

  /**
   * Grants permission to detach between one and 30 accounts from a billing group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DisassociateAccounts.html
   */
  public toDisassociateAccounts() {
    return this.to('DisassociateAccounts');
  }

  /**
   * Grants permission to disassociate pricing rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_DisassociatePricingRules.html
   */
  public toDisassociatePricingRules() {
    return this.to('DisassociatePricingRules');
  }

  /**
   * Grants permission to list the linked accounts of the payer account for the given billing period while also providing the billing group the linked accounts belong to
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListAccountAssociations.html
   */
  public toListAccountAssociations() {
    return this.to('ListAccountAssociations');
  }

  /**
   * Grants permission to view the billing group cost report
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListBillingGroupCostReports.html
   */
  public toListBillingGroupCostReports() {
    return this.to('ListBillingGroupCostReports');
  }

  /**
   * Grants permission to view the details of billing groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListBillingGroups.html
   */
  public toListBillingGroups() {
    return this.to('ListBillingGroups');
  }

  /**
   * Grants permission to view custom line item versions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListCustomLineItemVersions.html
   */
  public toListCustomLineItemVersions() {
    return this.to('ListCustomLineItemVersions');
  }

  /**
   * Grants permission to view custom line item details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListCustomLineItems.html
   */
  public toListCustomLineItems() {
    return this.to('ListCustomLineItems');
  }

  /**
   * Grants permission to view the pricing plans details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListPricingPlans.html
   */
  public toListPricingPlans() {
    return this.to('ListPricingPlans');
  }

  /**
   * Grants permission to list pricing plans associated with a pricing rule
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListPricingPlansAssociatedWithPricingRule.html
   */
  public toListPricingPlansAssociatedWithPricingRule() {
    return this.to('ListPricingPlansAssociatedWithPricingRule');
  }

  /**
   * Grants permission to view pricing rules details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListPricingRules.html
   */
  public toListPricingRules() {
    return this.to('ListPricingRules');
  }

  /**
   * Grants permission to list pricing rules associated to a pricing plan
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListPricingRulesAssociatedToPricingPlan.html
   */
  public toListPricingRulesAssociatedToPricingPlan() {
    return this.to('ListPricingRulesAssociatedToPricingPlan');
  }

  /**
   * Grants permission to list resources associated to a percentage custom line item
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListResourcesAssociatedToCustomLineItem.html
   */
  public toListResourcesAssociatedToCustomLineItem() {
    return this.to('ListResourcesAssociatedToCustomLineItem');
  }

  /**
   * Grants permission to list tags of a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a billing group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UpdateBillingGroup.html
   */
  public toUpdateBillingGroup() {
    return this.to('UpdateBillingGroup');
  }

  /**
   * Grants permission to update a custom line item
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UpdateCustomLineItem.html
   */
  public toUpdateCustomLineItem() {
    return this.to('UpdateCustomLineItem');
  }

  /**
   * Grants permission to update a pricing plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UpdatePricingPlan.html
   */
  public toUpdatePricingPlan() {
    return this.to('UpdatePricingPlan');
  }

  /**
   * Grants permission to update a pricing rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/billingconductor/latest/APIReference/API_UpdatePricingRule.html
   */
  public toUpdatePricingRule() {
    return this.to('UpdatePricingRule');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateAccounts',
      'AssociatePricingRules',
      'BatchAssociateResourcesToCustomLineItem',
      'BatchDisassociateResourcesFromCustomLineItem',
      'CreateBillingGroup',
      'CreateCustomLineItem',
      'CreatePricingPlan',
      'CreatePricingRule',
      'DeleteBillingGroup',
      'DeleteCustomLineItem',
      'DeletePricingPlan',
      'DeletePricingRule',
      'DisassociateAccounts',
      'DisassociatePricingRules',
      'UpdateBillingGroup',
      'UpdateCustomLineItem',
      'UpdatePricingPlan',
      'UpdatePricingRule'
    ],
    List: [
      'ListAccountAssociations',
      'ListPricingPlansAssociatedWithPricingRule',
      'ListPricingRulesAssociatedToPricingPlan',
      'ListResourcesAssociatedToCustomLineItem'
    ],
    Read: [
      'ListBillingGroupCostReports',
      'ListBillingGroups',
      'ListCustomLineItemVersions',
      'ListCustomLineItems',
      'ListPricingPlans',
      'ListPricingRules',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type billinggroup to the statement
   *
   * https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-abc.html
   *
   * @param billingGroupId - Identifier for the billingGroupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBillinggroup(billingGroupId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:billingconductor::${ account || '*' }:billinggroup/${ billingGroupId }`);
  }

  /**
   * Adds a resource of type pricingplan to the statement
   *
   * https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-abc.html
   *
   * @param pricingPlanId - Identifier for the pricingPlanId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPricingplan(pricingPlanId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:billingconductor::${ account || '*' }:pricingplan/${ pricingPlanId }`);
  }

  /**
   * Adds a resource of type pricingrule to the statement
   *
   * https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-abc.html
   *
   * @param pricingRuleId - Identifier for the pricingRuleId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPricingrule(pricingRuleId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:billingconductor::${ account || '*' }:pricingrule/${ pricingRuleId }`);
  }

  /**
   * Adds a resource of type customlineitem to the statement
   *
   * https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-abc.html
   *
   * @param customLineItemId - Identifier for the customLineItemId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCustomlineitem(customLineItemId: string, account?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:billingconductor::${ account || '*' }:customlineitem/${ customLineItemId }`);
  }
}
