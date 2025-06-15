import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [support-console](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupportconsole.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SupportConsole extends PolicyStatement {
  public servicePrefix = 'support-console';

  /**
   * Statement provider for service [support-console](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssupportconsole.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to check whether the account has access to given product
   *
   * Access Level: Read
   */
  public toCheckSubscription() {
    return this.to('CheckSubscription');
  }

  /**
   * Grants permission to create or update case draft for the given case type
   *
   * Access Level: Write
   */
  public toCreateCaseDraft() {
    return this.to('CreateCaseDraft');
  }

  /**
   * Grants permission to create an authenticated contact for the given contact type
   *
   * Access Level: Write
   */
  public toCreateContact() {
    return this.to('CreateContact');
  }

  /**
   * Grants permission to delete a case draft for the given case type
   *
   * Access Level: Write
   */
  public toDeleteCaseDraft() {
    return this.to('DeleteCaseDraft');
  }

  /**
   * Grants permission to get dynamic help resources for given service and category
   *
   * Access Level: Read
   */
  public toDescribeDynamicHelp() {
    return this.to('DescribeDynamicHelp');
  }

  /**
   * Grants permission to determines whether the calling account is GovCloud enabled
   *
   * Access Level: Read
   */
  public toGetAccountGovCloudEnabled() {
    return this.to('GetAccountGovCloudEnabled');
  }

  /**
   * Grants permission to get the state of the calling account
   *
   * Access Level: Read
   */
  public toGetAccountState() {
    return this.to('GetAccountState');
  }

  /**
   * Grants permission to get the support banner information
   *
   * Access Level: Read
   */
  public toGetBanner() {
    return this.to('GetBanner');
  }

  /**
   * Grants permission to get a case draft for given case type
   *
   * Access Level: Read
   */
  public toGetCaseDraft() {
    return this.to('GetCaseDraft');
  }

  /**
   * Grants permission to get a feedback questionnaire
   *
   * Access Level: Read
   */
  public toGetQuestionnaire() {
    return this.to('GetQuestionnaire');
  }

  /**
   * Grants permission to save questionnaire feedback
   *
   * Access Level: Write
   */
  public toSaveFeedback() {
    return this.to('SaveFeedback');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'CheckSubscription',
      'DescribeDynamicHelp',
      'GetAccountGovCloudEnabled',
      'GetAccountState',
      'GetBanner',
      'GetCaseDraft',
      'GetQuestionnaire'
    ],
    Write: [
      'CreateCaseDraft',
      'CreateContact',
      'DeleteCaseDraft',
      'SaveFeedback'
    ]
  };
}
