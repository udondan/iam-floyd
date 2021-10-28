import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [identitystore](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitystore.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Identitystore extends PolicyStatement {
  public servicePrefix = 'identitystore';

  /**
   * Statement provider for service [identitystore](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitystore.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to retrieves information about group from the directory that AWS Identity Store provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeGroup.html
   */
  public toDescribeGroup() {
    return this.to('DescribeGroup');
  }

  /**
   * Grants permission to retrieves information about user from the directory that AWS Identity Store provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeUser.html
   */
  public toDescribeUser() {
    return this.to('DescribeUser');
  }

  /**
   * Grants permission to search for groups within the associated directory
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroups.html
   */
  public toListGroups() {
    return this.to('ListGroups');
  }

  /**
   * Grants permission to search for users within the associated directory
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListUsers.html
   */
  public toListUsers() {
    return this.to('ListUsers');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'DescribeGroup',
      'DescribeUser'
    ],
    List: [
      'ListGroups',
      'ListUsers'
    ]
  };
}
