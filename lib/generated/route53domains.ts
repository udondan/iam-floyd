import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [route53domains](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53domains.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Route53domains extends PolicyStatement {
  public servicePrefix = 'route53domains';

  /**
   * Statement provider for service [route53domains](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53domains.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept the transfer of a domain from another AWSaccount to the current AWSaccount
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html
   */
  public toAcceptDomainTransferFromAnotherAwsAccount() {
    return this.to('AcceptDomainTransferFromAnotherAwsAccount');
  }

  /**
   * Grants permission to cancel the transfer of a domain from the current AWSaccount to another AWSaccount
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html
   */
  public toCancelDomainTransferToAnotherAwsAccount() {
    return this.to('CancelDomainTransferToAnotherAwsAccount');
  }

  /**
   * Grants permission to check the availability of one domain name
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CheckDomainAvailability.html
   */
  public toCheckDomainAvailability() {
    return this.to('CheckDomainAvailability');
  }

  /**
   * Grants permission to check whether a domain name can be transferred to Amazon Route 53
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CheckDomainTransferability.html
   */
  public toCheckDomainTransferability() {
    return this.to('CheckDomainTransferability');
  }

  /**
   * Grants permission to delete the specified tags for a domain
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DeleteTagsForDomain.html
   */
  public toDeleteTagsForDomain() {
    return this.to('DeleteTagsForDomain');
  }

  /**
   * Grants permission to configure Amazon Route 53 to automatically renew the specified domain before the domain registration expires
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainAutoRenew.html
   */
  public toDisableDomainAutoRenew() {
    return this.to('DisableDomainAutoRenew');
  }

  /**
   * Grants permission to remove the transfer lock on the domain (specifically the clientTransferProhibited status) to allow domain transfers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainTransferLock.html
   */
  public toDisableDomainTransferLock() {
    return this.to('DisableDomainTransferLock');
  }

  /**
   * Grants permission to configure Amazon Route 53 to automatically renew the specified domain before the domain registration expires
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_DisableDomainAutoRenew.html
   */
  public toEnableDomainAutoRenew() {
    return this.to('EnableDomainAutoRenew');
  }

  /**
   * Grants permission to set the transfer lock on the domain (specifically the clientTransferProhibited status) to prevent domain transfers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_EnableDomainTransferLock.html
   */
  public toEnableDomainTransferLock() {
    return this.to('EnableDomainTransferLock');
  }

  /**
   * For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, grants permission to get information about whether the registrant contact has responded
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetContactReachabilityStatus.html
   */
  public toGetContactReachabilityStatus() {
    return this.to('GetContactReachabilityStatus');
  }

  /**
   * Grants permission to get detailed information about a domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainDetail.html
   */
  public toGetDomainDetail() {
    return this.to('GetDomainDetail');
  }

  /**
   * Grants permission to get a list of suggested domain names given a string, which can either be a domain name or simply a word or phrase (without spaces)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetDomainSuggestions.html
   */
  public toGetDomainSuggestions() {
    return this.to('GetDomainSuggestions');
  }

  /**
   * Grants permission to get the current status of an operation that is not completed
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html
   */
  public toGetOperationDetail() {
    return this.to('GetOperationDetail');
  }

  /**
   * Grants permission to list all the domain names registered with Amazon Route 53 for the current AWSaccount
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to list the operation IDs of operations that are not yet complete
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html
   */
  public toListOperations() {
    return this.to('ListOperations');
  }

  /**
   * Grants permission to list all the tags that are associated with the specified domain
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListTagsForDomain.html
   */
  public toListTagsForDomain() {
    return this.to('ListTagsForDomain');
  }

  /**
   * Grants permission to register domains
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RegisterDomain.html
   */
  public toRegisterDomain() {
    return this.to('RegisterDomain');
  }

  /**
   * Grants permission to reject the transfer of a domain from another AWSaccount to the current AWSaccount
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html
   */
  public toRejectDomainTransferFromAnotherAwsAccount() {
    return this.to('RejectDomainTransferFromAnotherAwsAccount');
  }

  /**
   * Grants permission to renew domains for the specified number of years
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RenewDomain.html
   */
  public toRenewDomain() {
    return this.to('RenewDomain');
  }

  /**
   * For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, grants permission to resend the confirmation email to the current email address for the registrant contact
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ResendContactReachabilityEmail.html
   */
  public toResendContactReachabilityEmail() {
    return this.to('ResendContactReachabilityEmail');
  }

  /**
   * Grants permission to get the AuthCode for the domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RetrieveDomainAuthCode.html
   */
  public toRetrieveDomainAuthCode() {
    return this.to('RetrieveDomainAuthCode');
  }

  /**
   * Grants permission to transfer a domain from another registrar to Amazon Route 53
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomain.html
   */
  public toTransferDomain() {
    return this.to('TransferDomain');
  }

  /**
   * Grants permission to transfer a domain from the current AWSaccount to another AWSaccount
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html
   */
  public toTransferDomainToAnotherAwsAccount() {
    return this.to('TransferDomainToAnotherAwsAccount');
  }

  /**
   * Grants permission to update the contact information for domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainContact.html
   */
  public toUpdateDomainContact() {
    return this.to('UpdateDomainContact');
  }

  /**
   * Grants permission to update the domain contact privacy setting
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainContactPrivacy.html
   */
  public toUpdateDomainContactPrivacy() {
    return this.to('UpdateDomainContactPrivacy');
  }

  /**
   * Grants permission to replace the current set of name servers for a domain with the specified set of name servers
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html
   */
  public toUpdateDomainNameservers() {
    return this.to('UpdateDomainNameservers');
  }

  /**
   * Grants permission to add or update tags for a specified domain
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateTagsForDomain.html
   */
  public toUpdateTagsForDomain() {
    return this.to('UpdateTagsForDomain');
  }

  /**
   * Grants permission to get all the domain-related billing records for the current AWSaccount for a specified period
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ViewBilling.html
   */
  public toViewBilling() {
    return this.to('ViewBilling');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AcceptDomainTransferFromAnotherAwsAccount",
      "CancelDomainTransferToAnotherAwsAccount",
      "DisableDomainAutoRenew",
      "DisableDomainTransferLock",
      "EnableDomainAutoRenew",
      "EnableDomainTransferLock",
      "RegisterDomain",
      "RejectDomainTransferFromAnotherAwsAccount",
      "RenewDomain",
      "ResendContactReachabilityEmail",
      "RetrieveDomainAuthCode",
      "TransferDomain",
      "TransferDomainToAnotherAwsAccount",
      "UpdateDomainContact",
      "UpdateDomainContactPrivacy",
      "UpdateDomainNameservers"
    ],
    "Read": [
      "CheckDomainAvailability",
      "CheckDomainTransferability",
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
    "List": [
      "ListDomains",
      "ListOperations",
      "ListTagsForDomain"
    ]
  };
}
