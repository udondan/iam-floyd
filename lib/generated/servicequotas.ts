import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
  constructor (sid?: string) {
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
    this.to('servicequotas:AssociateServiceQuotaTemplate');
    return this;
  }

  /**
   * Grants permission to remove the specified service quota from the service quota template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_DeleteServiceQuotaIncreaseRequestFromTemplate.html
   */
  public toDeleteServiceQuotaIncreaseRequestFromTemplate() {
    this.to('servicequotas:DeleteServiceQuotaIncreaseRequestFromTemplate');
    return this;
  }

  /**
   * Grants permission to disassociate the Service Quotas template from your organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_DisassociateServiceQuotaTemplate.html
   */
  public toDisassociateServiceQuotaTemplate() {
    this.to('servicequotas:DisassociateServiceQuotaTemplate');
    return this;
  }

  /**
   * Grants permission to return the details for the specified service quota, including the AWS default value
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetAWSDefaultServiceQuota.html
   */
  public toGetAWSDefaultServiceQuota() {
    this.to('servicequotas:GetAWSDefaultServiceQuota');
    return this;
  }

  /**
   * Grants permission to retrieve the ServiceQuotaTemplateAssociationStatus value, which tells you if the Service Quotas template is associated with an organization
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetAssociationForServiceQuotaTemplate.html
   */
  public toGetAssociationForServiceQuotaTemplate() {
    this.to('servicequotas:GetAssociationForServiceQuotaTemplate');
    return this;
  }

  /**
   * Grants permission to retrieve the details for a particular service quota increase request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetRequestedServiceQuotaChange.html
   */
  public toGetRequestedServiceQuotaChange() {
    this.to('servicequotas:GetRequestedServiceQuotaChange');
    return this;
  }

  /**
   * Grants permission to return the details for the specified service quota, including the applied value
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetServiceQuota.html
   */
  public toGetServiceQuota() {
    this.to('servicequotas:GetServiceQuota');
    return this;
  }

  /**
   * Grants permission to retrieve the details for a service quota increase request from the service quota template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetServiceQuotaIncreaseRequestFromTemplate.html
   */
  public toGetServiceQuotaIncreaseRequestFromTemplate() {
    this.to('servicequotas:GetServiceQuotaIncreaseRequestFromTemplate');
    return this;
  }

  /**
   * Grants permission to list all default service quotas for the specified AWS service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListAWSDefaultServiceQuotas.html
   */
  public toListAWSDefaultServiceQuotas() {
    this.to('servicequotas:ListAWSDefaultServiceQuotas');
    return this;
  }

  /**
   * Grants permission to request a list of the changes to quotas for a service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListRequestedServiceQuotaChangeHistory.html
   */
  public toListRequestedServiceQuotaChangeHistory() {
    this.to('servicequotas:ListRequestedServiceQuotaChangeHistory');
    return this;
  }

  /**
   * Grants permission to request a list of the changes to specific service quotas
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListRequestedServiceQuotaChangeHistoryByQuota.html
   */
  public toListRequestedServiceQuotaChangeHistoryByQuota() {
    this.to('servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota');
    return this;
  }

  /**
   * Grants permission to return a list of the service quota increase requests from the service quota template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotaIncreaseRequestsInTemplate
   */
  public toListServiceQuotaIncreaseRequestsInTemplate() {
    this.to('servicequotas:ListServiceQuotaIncreaseRequestsInTemplate');
    return this;
  }

  /**
   * Grants permission to list all service quotas for the specified AWS service, in that account, in that Region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html
   */
  public toListServiceQuotas() {
    this.to('servicequotas:ListServiceQuotas');
    return this;
  }

  /**
   * Grants permission to list the AWS services available in Service Quotas
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServices.html
   */
  public toListServices() {
    this.to('servicequotas:ListServices');
    return this;
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
    this.to('servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate');
    return this;
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
    this.to('servicequotas:RequestServiceQuotaIncrease');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateServiceQuotaTemplate",
      "DeleteServiceQuotaIncreaseRequestFromTemplate",
      "DisassociateServiceQuotaTemplate",
      "PutServiceQuotaIncreaseRequestIntoTemplate",
      "RequestServiceQuotaIncrease"
    ],
    "Read": [
      "GetAWSDefaultServiceQuota",
      "GetAssociationForServiceQuotaTemplate",
      "GetRequestedServiceQuotaChange",
      "GetServiceQuota",
      "GetServiceQuotaIncreaseRequestFromTemplate",
      "ListAWSDefaultServiceQuotas",
      "ListRequestedServiceQuotaChangeHistory",
      "ListRequestedServiceQuotaChangeHistoryByQuota",
      "ListServiceQuotaIncreaseRequestsInTemplate",
      "ListServiceQuotas",
      "ListServices"
    ]
  };

  /**
   * Adds a resource of type quota to the statement
   *
   * https://docs.aws.amazon.com/servicequotas/latest/userguide/quota-as-resource.html
   *
   * @param serviceCode - Identifier for the serviceCode.
   * @param quotaCode - Identifier for the quotaCode.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onQuota(serviceCode: string, quotaCode: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:servicequotas:${Region}:${Account}:${ServiceCode}/${QuotaCode}';
    arn = arn.replace('${ServiceCode}', serviceCode);
    arn = arn.replace('${QuotaCode}', quotaCode);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters or restricts access to a specified AWS service
   *
   * Applies to actions:
   * - .toPutServiceQuotaIncreaseRequestIntoTemplate()
   * - .toRequestServiceQuotaIncrease()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifService(value: string | string[], operator?: Operator | string) {
    return this.if(`servicequotas:service`, value, operator || 'StringLike');
  }
}
