import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [route53domains](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53domains.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Route53domains extends PolicyStatement {
  public servicePrefix = 'route53domains';

  /**
   * Statement provider for service [route53domains](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53domains.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to check the availability of one domain name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CheckDomainAvailability.html
   */
  public toCheckDomainAvailability() {
    this.to('route53domains:CheckDomainAvailability');
    return this;
  }

  /**
   * Grants permission to delete the specified tags for a domain
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DeleteTagsForDomain.html
   */
  public toDeleteTagsForDomain() {
    this.to('route53domains:DeleteTagsForDomain');
    return this;
  }

  /**
   * Grants permission to configure Amazon Route 53 to automatically renew the specified domain before the domain registration expires
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainAutoRenew.html
   */
  public toDisableDomainAutoRenew() {
    this.to('route53domains:DisableDomainAutoRenew');
    return this;
  }

  /**
   * Grants permission to remove the transfer lock on the domain (specifically the clientTransferProhibited status) to allow domain transfers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainTransferLock.html
   */
  public toDisableDomainTransferLock() {
    this.to('route53domains:DisableDomainTransferLock');
    return this;
  }

  /**
   * Grants permission to configure Amazon Route 53 to automatically renew the specified domain before the domain registration expires
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainAutoRenew.html
   */
  public toEnableDomainAutoRenew() {
    this.to('route53domains:EnableDomainAutoRenew');
    return this;
  }

  /**
   * Grants permission to set the transfer lock on the domain (specifically the clientTransferProhibited status) to prevent domain transfers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_EnableDomainTransferLock.html
   */
  public toEnableDomainTransferLock() {
    this.to('route53domains:EnableDomainTransferLock');
    return this;
  }

  /**
   * For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, grants permission to get information about whether the registrant contact has responded
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetContactReachabilityStatus.html
   */
  public toGetContactReachabilityStatus() {
    this.to('route53domains:GetContactReachabilityStatus');
    return this;
  }

  /**
   * Grants permission to get detailed information about a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainDetail.html
   */
  public toGetDomainDetail() {
    this.to('route53domains:GetDomainDetail');
    return this;
  }

  /**
   * Grants permission to get a list of suggested domain names given a string, which can either be a domain name or simply a word or phrase (without spaces)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainSuggestions.html
   */
  public toGetDomainSuggestions() {
    this.to('route53domains:GetDomainSuggestions');
    return this;
  }

  /**
   * Grants permission to get the current status of an operation that is not completed
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html
   */
  public toGetOperationDetail() {
    this.to('route53domains:GetOperationDetail');
    return this;
  }

  /**
   * Grants permission to list all the domain names registered with Amazon Route 53 for the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListDomains.html
   */
  public toListDomains() {
    this.to('route53domains:ListDomains');
    return this;
  }

  /**
   * Grants permission to list the operation IDs of operations that are not yet complete
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html
   */
  public toListOperations() {
    this.to('route53domains:ListOperations');
    return this;
  }

  /**
   * Grants permission to list all the tags that are associated with the specified domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListTagsForDomain.html
   */
  public toListTagsForDomain() {
    this.to('route53domains:ListTagsForDomain');
    return this;
  }

  /**
   * Grants permission to register domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RegisterDomain.html
   */
  public toRegisterDomain() {
    this.to('route53domains:RegisterDomain');
    return this;
  }

  /**
   * Grants permission to renew domains for the specified number of years
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RenewDomain.html
   */
  public toRenewDomain() {
    this.to('route53domains:RenewDomain');
    return this;
  }

  /**
   * For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, grants permission to resend the confirmation email to the current email address for the registrant contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ResendContactReachabilityEmail.html
   */
  public toResendContactReachabilityEmail() {
    this.to('route53domains:ResendContactReachabilityEmail');
    return this;
  }

  /**
   * Grants permission to get the AuthCode for the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RetrieveDomainAuthCode.html
   */
  public toRetrieveDomainAuthCode() {
    this.to('route53domains:RetrieveDomainAuthCode');
    return this;
  }

  /**
   * Grants permission to transfer a domain from another registrar to Amazon Route 53
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomain.html
   */
  public toTransferDomain() {
    this.to('route53domains:TransferDomain');
    return this;
  }

  /**
   * Grants permission to update the contact information for domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainContact.html
   */
  public toUpdateDomainContact() {
    this.to('route53domains:UpdateDomainContact');
    return this;
  }

  /**
   * Grants permission to update the domain contact privacy setting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainContactPrivacy.html
   */
  public toUpdateDomainContactPrivacy() {
    this.to('route53domains:UpdateDomainContactPrivacy');
    return this;
  }

  /**
   * Grants permission to replace the current set of name servers for a domain with the specified set of name servers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html
   */
  public toUpdateDomainNameservers() {
    this.to('route53domains:UpdateDomainNameservers');
    return this;
  }

  /**
   * Grants permission to add or update tags for a specified domain
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateTagsForDomain.html
   */
  public toUpdateTagsForDomain() {
    this.to('route53domains:UpdateTagsForDomain');
    return this;
  }

  /**
   * Grants permission to get all the domain-related billing records for the current AWS account for a specified period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ViewBilling.html
   */
  public toViewBilling() {
    this.to('route53domains:ViewBilling');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "CheckDomainAvailability",
      "GetContactReachabilityStatus",
      "GetDomainDetail",
      "GetDomainSuggestions",
      "GetOperationDetail",
      "ViewBilling"
    ],
    "Tagging": [
      "DeleteTagsForDomain",
      "UpdateTagsForDomain"
    ],
    "Write": [
      "DisableDomainAutoRenew",
      "DisableDomainTransferLock",
      "EnableDomainAutoRenew",
      "EnableDomainTransferLock",
      "RegisterDomain",
      "RenewDomain",
      "ResendContactReachabilityEmail",
      "RetrieveDomainAuthCode",
      "TransferDomain",
      "UpdateDomainContact",
      "UpdateDomainContactPrivacy",
      "UpdateDomainNameservers"
    ],
    "List": [
      "ListDomains",
      "ListOperations",
      "ListTagsForDomain"
    ]
  };
}
