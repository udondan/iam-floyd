import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service route53domains
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53domains.html
 */
export class Route53domains extends PolicyStatement {
  public servicePrefix = 'route53domains';
  public actions: Actions = {
    "CheckDomainAvailability": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CheckDomainAvailability.html",
      "description": "Grants permission to check the availability of one domain name",
      "accessLevel": "Read"
    },
    "DeleteTagsForDomain": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DeleteTagsForDomain.html",
      "description": "Grants permission to delete the specified tags for a domain",
      "accessLevel": "Tagging"
    },
    "DisableDomainAutoRenew": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainAutoRenew.html",
      "description": "Grants permission to configure Amazon Route 53 to automatically renew the specified domain before the domain registration expires",
      "accessLevel": "Write"
    },
    "DisableDomainTransferLock": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainTransferLock.html",
      "description": "Grants permission to remove the transfer lock on the domain (specifically the clientTransferProhibited status) to allow domain transfers",
      "accessLevel": "Write"
    },
    "EnableDomainAutoRenew": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainAutoRenew.html",
      "description": "Grants permission to configure Amazon Route 53 to automatically renew the specified domain before the domain registration expires",
      "accessLevel": "Write"
    },
    "EnableDomainTransferLock": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_EnableDomainTransferLock.html",
      "description": "Grants permission to set the transfer lock on the domain (specifically the clientTransferProhibited status) to prevent domain transfers",
      "accessLevel": "Write"
    },
    "GetContactReachabilityStatus": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetContactReachabilityStatus.html",
      "description": "For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, grants permission to get information about whether the registrant contact has responded",
      "accessLevel": "Read"
    },
    "GetDomainDetail": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainDetail.html",
      "description": "Grants permission to get detailed information about a domain",
      "accessLevel": "Read"
    },
    "GetDomainSuggestions": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainSuggestions.html",
      "description": "Grants permission to get a list of suggested domain names given a string, which can either be a domain name or simply a word or phrase (without spaces)",
      "accessLevel": "Read"
    },
    "GetOperationDetail": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html",
      "description": "Grants permission to get the current status of an operation that is not completed",
      "accessLevel": "Read"
    },
    "ListDomains": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListDomains.html",
      "description": "Grants permission to list all the domain names registered with Amazon Route 53 for the current AWS account",
      "accessLevel": "List"
    },
    "ListOperations": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html",
      "description": "Grants permission to list the operation IDs of operations that are not yet complete",
      "accessLevel": "List"
    },
    "ListTagsForDomain": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListTagsForDomain.html",
      "description": "Grants permission to list all the tags that are associated with the specified domain",
      "accessLevel": "List"
    },
    "RegisterDomain": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RegisterDomain.html",
      "description": "Grants permission to register domains",
      "accessLevel": "Write"
    },
    "RenewDomain": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RenewDomain.html",
      "description": "Grants permission to renew domains for the specified number of years",
      "accessLevel": "Write"
    },
    "ResendContactReachabilityEmail": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ResendContactReachabilityEmail.html",
      "description": "For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, grants permission to resend the confirmation email to the current email address for the registrant contact",
      "accessLevel": "Write"
    },
    "RetrieveDomainAuthCode": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RetrieveDomainAuthCode.html",
      "description": "Grants permission to get the AuthCode for the domain",
      "accessLevel": "Write"
    },
    "TransferDomain": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomain.html",
      "description": "Grants permission to transfer a domain from another registrar to Amazon Route 53",
      "accessLevel": "Write"
    },
    "UpdateDomainContact": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainContact.html",
      "description": "Grants permission to update the contact information for domain",
      "accessLevel": "Write"
    },
    "UpdateDomainContactPrivacy": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainContactPrivacy.html",
      "description": "Grants permission to update the domain contact privacy setting",
      "accessLevel": "Write"
    },
    "UpdateDomainNameservers": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html",
      "description": "Grants permission to replace the current set of name servers for a domain with the specified set of name servers",
      "accessLevel": "Write"
    },
    "UpdateTagsForDomain": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateTagsForDomain.html",
      "description": "Grants permission to add or update tags for a specified domain",
      "accessLevel": "Tagging"
    },
    "ViewBilling": {
      "url": "https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ViewBilling.html",
      "description": "Grants permission to get all the domain-related billing records for the current AWS account for a specified period",
      "accessLevel": "Read"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Grants permission to check the availability of one domain name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CheckDomainAvailability.html
   */
  public checkDomainAvailability() {
    this.add('route53domains:CheckDomainAvailability');
    return this;
  }

  /**
   * Grants permission to delete the specified tags for a domain
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DeleteTagsForDomain.html
   */
  public deleteTagsForDomain() {
    this.add('route53domains:DeleteTagsForDomain');
    return this;
  }

  /**
   * Grants permission to configure Amazon Route 53 to automatically renew the specified domain before the domain registration expires
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainAutoRenew.html
   */
  public disableDomainAutoRenew() {
    this.add('route53domains:DisableDomainAutoRenew');
    return this;
  }

  /**
   * Grants permission to remove the transfer lock on the domain (specifically the clientTransferProhibited status) to allow domain transfers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainTransferLock.html
   */
  public disableDomainTransferLock() {
    this.add('route53domains:DisableDomainTransferLock');
    return this;
  }

  /**
   * Grants permission to configure Amazon Route 53 to automatically renew the specified domain before the domain registration expires
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainAutoRenew.html
   */
  public enableDomainAutoRenew() {
    this.add('route53domains:EnableDomainAutoRenew');
    return this;
  }

  /**
   * Grants permission to set the transfer lock on the domain (specifically the clientTransferProhibited status) to prevent domain transfers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_EnableDomainTransferLock.html
   */
  public enableDomainTransferLock() {
    this.add('route53domains:EnableDomainTransferLock');
    return this;
  }

  /**
   * For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, grants permission to get information about whether the registrant contact has responded
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetContactReachabilityStatus.html
   */
  public getContactReachabilityStatus() {
    this.add('route53domains:GetContactReachabilityStatus');
    return this;
  }

  /**
   * Grants permission to get detailed information about a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainDetail.html
   */
  public getDomainDetail() {
    this.add('route53domains:GetDomainDetail');
    return this;
  }

  /**
   * Grants permission to get a list of suggested domain names given a string, which can either be a domain name or simply a word or phrase (without spaces)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainSuggestions.html
   */
  public getDomainSuggestions() {
    this.add('route53domains:GetDomainSuggestions');
    return this;
  }

  /**
   * Grants permission to get the current status of an operation that is not completed
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html
   */
  public getOperationDetail() {
    this.add('route53domains:GetOperationDetail');
    return this;
  }

  /**
   * Grants permission to list all the domain names registered with Amazon Route 53 for the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListDomains.html
   */
  public listDomains() {
    this.add('route53domains:ListDomains');
    return this;
  }

  /**
   * Grants permission to list the operation IDs of operations that are not yet complete
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html
   */
  public listOperations() {
    this.add('route53domains:ListOperations');
    return this;
  }

  /**
   * Grants permission to list all the tags that are associated with the specified domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListTagsForDomain.html
   */
  public listTagsForDomain() {
    this.add('route53domains:ListTagsForDomain');
    return this;
  }

  /**
   * Grants permission to register domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RegisterDomain.html
   */
  public registerDomain() {
    this.add('route53domains:RegisterDomain');
    return this;
  }

  /**
   * Grants permission to renew domains for the specified number of years
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RenewDomain.html
   */
  public renewDomain() {
    this.add('route53domains:RenewDomain');
    return this;
  }

  /**
   * For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, grants permission to resend the confirmation email to the current email address for the registrant contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ResendContactReachabilityEmail.html
   */
  public resendContactReachabilityEmail() {
    this.add('route53domains:ResendContactReachabilityEmail');
    return this;
  }

  /**
   * Grants permission to get the AuthCode for the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RetrieveDomainAuthCode.html
   */
  public retrieveDomainAuthCode() {
    this.add('route53domains:RetrieveDomainAuthCode');
    return this;
  }

  /**
   * Grants permission to transfer a domain from another registrar to Amazon Route 53
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomain.html
   */
  public transferDomain() {
    this.add('route53domains:TransferDomain');
    return this;
  }

  /**
   * Grants permission to update the contact information for domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainContact.html
   */
  public updateDomainContact() {
    this.add('route53domains:UpdateDomainContact');
    return this;
  }

  /**
   * Grants permission to update the domain contact privacy setting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainContactPrivacy.html
   */
  public updateDomainContactPrivacy() {
    this.add('route53domains:UpdateDomainContactPrivacy');
    return this;
  }

  /**
   * Grants permission to replace the current set of name servers for a domain with the specified set of name servers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html
   */
  public updateDomainNameservers() {
    this.add('route53domains:UpdateDomainNameservers');
    return this;
  }

  /**
   * Grants permission to add or update tags for a specified domain
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateTagsForDomain.html
   */
  public updateTagsForDomain() {
    this.add('route53domains:UpdateTagsForDomain');
    return this;
  }

  /**
   * Grants permission to get all the domain-related billing records for the current AWS account for a specified period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ViewBilling.html
   */
  public viewBilling() {
    this.add('route53domains:ViewBilling');
    return this;
  }
}
