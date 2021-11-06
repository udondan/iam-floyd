import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [servicequotas](https://docs.aws.amazon.com/service-authorization/latest/reference/list_servicequotas.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Servicequotas extends PolicyStatement {
  public servicePrefix = 'servicequotas';

  /**
   * Statement provider for service [servicequotas](https://docs.aws.amazon.com/service-authorization/latest/reference/list_servicequotas.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate the Service Quotas template with your organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_AssociateServiceQuotaTemplate.html
   */
  public toAssociateServiceQuotaTemplate() {
    return this.to('AssociateServiceQuotaTemplate');
  }

  /**
   * Grants permission to remove the specified service quota from the service quota template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_DeleteServiceQuotaIncreaseRequestFromTemplate.html
   */
  public toDeleteServiceQuotaIncreaseRequestFromTemplate() {
    return this.to('DeleteServiceQuotaIncreaseRequestFromTemplate');
  }

  /**
   * Grants permission to disassociate the Service Quotas template from your organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_DisassociateServiceQuotaTemplate.html
   */
  public toDisassociateServiceQuotaTemplate() {
    return this.to('DisassociateServiceQuotaTemplate');
  }

  /**
   * Grants permission to return the details for the specified service quota, including the AWS default value
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetAWSDefaultServiceQuota.html
   */
  public toGetAWSDefaultServiceQuota() {
    return this.to('GetAWSDefaultServiceQuota');
  }

  /**
   * Grants permission to retrieve the ServiceQuotaTemplateAssociationStatus value, which tells you if the Service Quotas template is associated with an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetAssociationForServiceQuotaTemplate.html
   */
  public toGetAssociationForServiceQuotaTemplate() {
    return this.to('GetAssociationForServiceQuotaTemplate');
  }

  /**
   * Grants permission to retrieve the details for a particular service quota increase request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetRequestedServiceQuotaChange.html
   */
  public toGetRequestedServiceQuotaChange() {
    return this.to('GetRequestedServiceQuotaChange');
  }

  /**
   * Grants permission to return the details for the specified service quota, including the applied value
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetServiceQuota.html
   */
  public toGetServiceQuota() {
    return this.to('GetServiceQuota');
  }

  /**
   * Grants permission to retrieve the details for a service quota increase request from the service quota template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetServiceQuotaIncreaseRequestFromTemplate.html
   */
  public toGetServiceQuotaIncreaseRequestFromTemplate() {
    return this.to('GetServiceQuotaIncreaseRequestFromTemplate');
  }

  /**
   * Grants permission to list all default service quotas for the specified AWS service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListAWSDefaultServiceQuotas.html
   */
  public toListAWSDefaultServiceQuotas() {
    return this.to('ListAWSDefaultServiceQuotas');
  }

  /**
   * Grants permission to request a list of the changes to quotas for a service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListRequestedServiceQuotaChangeHistory.html
   */
  public toListRequestedServiceQuotaChangeHistory() {
    return this.to('ListRequestedServiceQuotaChangeHistory');
  }

  /**
   * Grants permission to request a list of the changes to specific service quotas
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListRequestedServiceQuotaChangeHistoryByQuota.html
   */
  public toListRequestedServiceQuotaChangeHistoryByQuota() {
    return this.to('ListRequestedServiceQuotaChangeHistoryByQuota');
  }

  /**
   * Grants permission to return a list of the service quota increase requests from the service quota template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotaIncreaseRequestsInTemplate
   */
  public toListServiceQuotaIncreaseRequestsInTemplate() {
    return this.to('ListServiceQuotaIncreaseRequestsInTemplate');
  }

  /**
   * Grants permission to list all service quotas for the specified AWS service, in that account, in that Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html
   */
  public toListServiceQuotas() {
    return this.to('ListServiceQuotas');
  }

  /**
   * Grants permission to list the AWS services available in Service Quotas
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServices.html
   */
  public toListServices() {
    return this.to('ListServices');
  }

  /**
   * Grants permission to view the existing tags on a SQ resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListTagsForResource
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to define and add a quota to the service quota template
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifService()
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_PutServiceQuotaIncreaseRequestIntoTemplate.html
   */
  public toPutServiceQuotaIncreaseRequestIntoTemplate() {
    return this.to('PutServiceQuotaIncreaseRequestIntoTemplate');
  }

  /**
   * Grants permission to submit the request for a service quota increase
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifService()
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html
   */
  public toRequestServiceQuotaIncrease() {
    return this.to('RequestServiceQuotaIncrease');
  }

  /**
   * Grants permission to associate a set of tags with an existing SQ resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_TagResource
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a set of tags from a SQ resource, where tags to be removed match a set of customer-supplied tag keys
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_UntagResource
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateServiceQuotaTemplate',
      'DeleteServiceQuotaIncreaseRequestFromTemplate',
      'DisassociateServiceQuotaTemplate',
      'PutServiceQuotaIncreaseRequestIntoTemplate',
      'RequestServiceQuotaIncrease'
    ],
    Read: [
      'GetAWSDefaultServiceQuota',
      'GetAssociationForServiceQuotaTemplate',
      'GetRequestedServiceQuotaChange',
      'GetServiceQuota',
      'GetServiceQuotaIncreaseRequestFromTemplate',
      'ListAWSDefaultServiceQuotas',
      'ListRequestedServiceQuotaChangeHistory',
      'ListRequestedServiceQuotaChangeHistoryByQuota',
      'ListServiceQuotaIncreaseRequestsInTemplate',
      'ListServiceQuotas',
      'ListServices',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type quota to the statement
   *
   * https://docs.aws.amazon.com/servicequotas/latest/userguide/identity-access-management.html#resources
   *
   * @param serviceCode - Identifier for the serviceCode.
   * @param quotaCode - Identifier for the quotaCode.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onQuota(serviceCode: string, quotaCode: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:servicequotas:${ region || '*' }:${ account || '*' }:${ serviceCode }/${ quotaCode }`);
  }

  /**
   * Filters access by the specified AWS service
   *
   * https://docs.aws.amazon.com/servicequotas/latest/userguide/identity-access-management.html#condition-keys
   *
   * Applies to actions:
   * - .toPutServiceQuotaIncreaseRequestIntoTemplate()
   * - .toRequestServiceQuotaIncrease()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifService(value: string | string[], operator?: Operator | string) {
    return this.if(`service`, value, operator || 'StringLike');
  }
}
