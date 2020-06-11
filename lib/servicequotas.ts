import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service servicequotas
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_servicequotas.html
 */
export class Servicequotas extends PolicyStatement {
  public servicePrefix = 'servicequotas';
  public actions : Actions = {
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

  /**
   * Grants permission to associate the Service Quotas template with your organization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_AssociateServiceQuotaTemplate.html
   */
  public associateServiceQuotaTemplate () {
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
  public deleteServiceQuotaIncreaseRequestFromTemplate () {
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
  public disassociateServiceQuotaTemplate () {
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
  public getAWSDefaultServiceQuota () {
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
  public getAssociationForServiceQuotaTemplate () {
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
  public getRequestedServiceQuotaChange () {
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
  public getServiceQuota () {
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
  public getServiceQuotaIncreaseRequestFromTemplate () {
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
  public listAWSDefaultServiceQuotas () {
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
  public listRequestedServiceQuotaChangeHistory () {
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
  public listRequestedServiceQuotaChangeHistoryByQuota () {
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
  public listServiceQuotaIncreaseRequestsInTemplate () {
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
  public listServiceQuotas () {
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
  public listServices () {
    this.add('servicequotas:ListServices');
    return this;
  }

  /**
   * Grants permission to define and add a quota to the service quota template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_PutServiceQuotaIncreaseRequestIntoTemplate.html
   */
  public putServiceQuotaIncreaseRequestIntoTemplate () {
    this.add('servicequotas:PutServiceQuotaIncreaseRequestIntoTemplate');
    return this;
  }

  /**
   * Grants permission to submit the request for a service quota increase
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html
   */
  public requestServiceQuotaIncrease () {
    this.add('servicequotas:RequestServiceQuotaIncrease');
    return this;
  }
}
