import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [servicequotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_servicequotas.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Servicequotas extends PolicyStatement {
  public servicePrefix = 'servicequotas';
  protected actionList: Actions = {
    "AssociateServiceQuotaTemplate": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_AssociateServiceQuotaTemplate.html",
      "description": "Grants permission to associate the Service Quotas template with your organization",
      "accessLevel": "Write"
    },
    "DeleteServiceQuotaIncreaseRequestFromTemplate": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_DeleteServiceQuotaIncreaseRequestFromTemplate.html",
      "description": "Grants permission to remove the specified service quota from the service quota template",
      "accessLevel": "Write"
    },
    "DisassociateServiceQuotaTemplate": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_DisassociateServiceQuotaTemplate.html",
      "description": "Grants permission to disassociate the Service Quotas template from your organization",
      "accessLevel": "Write"
    },
    "GetAWSDefaultServiceQuota": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetAWSDefaultServiceQuota.html",
      "description": "Grants permission to return the details for the specified service quota, including the AWS default value",
      "accessLevel": "Read"
    },
    "GetAssociationForServiceQuotaTemplate": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetAssociationForServiceQuotaTemplate.html",
      "description": "Grants permission to retrieve the ServiceQuotaTemplateAssociationStatus value, which tells you if the Service Quotas template is associated with an organization",
      "accessLevel": "Read"
    },
    "GetRequestedServiceQuotaChange": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetRequestedServiceQuotaChange.html",
      "description": "Grants permission to retrieve the details for a particular service quota increase request",
      "accessLevel": "Read"
    },
    "GetServiceQuota": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetServiceQuota.html",
      "description": "Grants permission to return the details for the specified service quota, including the applied value",
      "accessLevel": "Read"
    },
    "GetServiceQuotaIncreaseRequestFromTemplate": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_GetServiceQuotaIncreaseRequestFromTemplate.html",
      "description": "Grants permission to retrieve the details for a service quota increase request from the service quota template",
      "accessLevel": "Read"
    },
    "ListAWSDefaultServiceQuotas": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListAWSDefaultServiceQuotas.html",
      "description": "Grants permission to list all default service quotas for the specified AWS service",
      "accessLevel": "Read"
    },
    "ListRequestedServiceQuotaChangeHistory": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListRequestedServiceQuotaChangeHistory.html",
      "description": "Grants permission to request a list of the changes to quotas for a service",
      "accessLevel": "Read"
    },
    "ListRequestedServiceQuotaChangeHistoryByQuota": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListRequestedServiceQuotaChangeHistoryByQuota.html",
      "description": "Grants permission to request a list of the changes to specific service quotas",
      "accessLevel": "Read"
    },
    "ListServiceQuotaIncreaseRequestsInTemplate": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotaIncreaseRequestsInTemplate",
      "description": "Grants permission to return a list of the service quota increase requests from the service quota template",
      "accessLevel": "Read"
    },
    "ListServiceQuotas": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServiceQuotas.html",
      "description": "Grants permission to list all service quotas for the specified AWS service, in that account, in that Region",
      "accessLevel": "Read"
    },
    "ListServices": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_ListServices.html",
      "description": "Grants permission to list the AWS services available in Service Quotas",
      "accessLevel": "Read"
    },
    "PutServiceQuotaIncreaseRequestIntoTemplate": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_PutServiceQuotaIncreaseRequestIntoTemplate.html",
      "description": "Grants permission to define and add a quota to the service quota template",
      "accessLevel": "Write",
      "resourceTypes": {
        "quota": {
          "required": false
        }
      },
      "conditions": [
        "servicequotas:service"
      ]
    },
    "RequestServiceQuotaIncrease": {
      "url": "https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html",
      "description": "Grants permission to submit the request for a service quota increase",
      "accessLevel": "Write",
      "resourceTypes": {
        "quota": {
          "required": false
        }
      },
      "conditions": [
        "servicequotas:service"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "quota": {
      "name": "quota",
      "url": "https://docs.aws.amazon.com/servicequotas/latest/userguide/quota-as-resource.html",
      "arn": "arn:${Partition}:servicequotas:${Region}:${Account}:${ServiceCode}/${QuotaCode}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [servicequotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_servicequotas.html).
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
    this.add('servicequotas:AssociateServiceQuotaTemplate');
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
    this.add('servicequotas:DeleteServiceQuotaIncreaseRequestFromTemplate');
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
    this.add('servicequotas:DisassociateServiceQuotaTemplate');
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
    this.add('servicequotas:GetAWSDefaultServiceQuota');
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
    this.add('servicequotas:GetAssociationForServiceQuotaTemplate');
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
    this.add('servicequotas:GetRequestedServiceQuotaChange');
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
    this.add('servicequotas:GetServiceQuota');
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
    this.add('servicequotas:GetServiceQuotaIncreaseRequestFromTemplate');
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
    this.add('servicequotas:ListAWSDefaultServiceQuotas');
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
    this.add('servicequotas:ListRequestedServiceQuotaChangeHistory');
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
    this.add('servicequotas:ListRequestedServiceQuotaChangeHistoryByQuota');
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
    this.add('servicequotas:ListServiceQuotaIncreaseRequestsInTemplate');
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
    this.add('servicequotas:ListServiceQuotas');
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
    this.add('servicequotas:ListServices');
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
    this.add('servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate');
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
    this.add('servicequotas:RequestServiceQuotaIncrease');
    return this;
  }

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
  public ifService(value: string | string[], operator?: string) {
    return this.if(`servicequotas:service`, value, operator || 'StringLike');
  }
}
