import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [managedblockchain-query](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedblockchainquery.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ManagedblockchainQuery extends PolicyStatement {
  public servicePrefix = 'managedblockchain-query';

  /**
   * Statement provider for service [managedblockchain-query](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonmanagedblockchainquery.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to batch calls for GetTokenBalance API
   *
   * Access Level: Read
   */
  public toBatchGetTokenBalance() {
    return this.to('BatchGetTokenBalance');
  }

  /**
   * Grants permission to fetch information about a contract on the blockchain
   *
   * Access Level: Read
   */
  public toGetAssetContract() {
    return this.to('GetAssetContract');
  }

  /**
   * Grants permission to retrieve balance of a token for an address on the blockchain
   *
   * Access Level: Read
   */
  public toGetTokenBalance() {
    return this.to('GetTokenBalance');
  }

  /**
   * Grants permission to retrieve a transaction on the blockchain
   *
   * Access Level: Read
   */
  public toGetTransaction() {
    return this.to('GetTransaction');
  }

  /**
   * Grants permission to fetch multiple contracts on the blockchain
   *
   * Access Level: List
   */
  public toListAssetContracts() {
    return this.to('ListAssetContracts');
  }

  /**
   * Grants permission to retrieve multiple balances on the blockchain
   *
   * Access Level: List
   */
  public toListTokenBalances() {
    return this.to('ListTokenBalances');
  }

  /**
   * Grants permission to retrieve events in a transaction on the blockchain
   *
   * Access Level: List
   */
  public toListTransactionEvents() {
    return this.to('ListTransactionEvents');
  }

  /**
   * Grants permission to retrieve a multiple transactions on a blockchain
   *
   * Access Level: List
   */
  public toListTransactions() {
    return this.to('ListTransactions');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetTokenBalance',
      'GetAssetContract',
      'GetTokenBalance',
      'GetTransaction'
    ],
    List: [
      'ListAssetContracts',
      'ListTokenBalances',
      'ListTransactionEvents',
      'ListTransactions'
    ]
  };
}
