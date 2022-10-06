import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [tiros](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstiros.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Tiros extends PolicyStatement {
  public servicePrefix = 'tiros';

  /**
   * Statement provider for service [tiros](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awstiros.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a VPC reachability query
   *
   * Access Level: Write
   */
  public toCreateQuery() {
    return this.to('CreateQuery');
  }

  /**
   * Grants permission to extend a VPC reachability query to include the calling principals account
   *
   * Access Level: Write
   */
  public toExtendQuery() {
    return this.to('ExtendQuery');
  }

  /**
   * Grants permission to list accounts that might be useful in a new query
   *
   * Access Level: Read
   */
  public toGetExtensionAccounts() {
    return this.to('GetExtensionAccounts');
  }

  /**
   * Grants permission to get VPC reachability query answers
   *
   * Access Level: Read
   */
  public toGetQueryAnswer() {
    return this.to('GetQueryAnswer');
  }

  /**
   * Grants permission to get VPC reachability query explanations
   *
   * Access Level: Read
   */
  public toGetQueryExplanation() {
    return this.to('GetQueryExplanation');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateQuery',
      'ExtendQuery'
    ],
    Read: [
      'GetExtensionAccounts',
      'GetQueryAnswer',
      'GetQueryExplanation'
    ]
  };
}
