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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Retrieves information about group from the directory that AWS Identity Store provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeGroup.html
   */
  public toDescribeGroup() {
    this.to('identitystore:DescribeGroup');
    return this;
  }

  /**
   * Retrieves information about user from the directory that AWS Identity Store provides by default
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeUser.html
   */
  public toDescribeUser() {
    this.to('identitystore:DescribeUser');
    return this;
  }

  /**
   * Search for groups within the associated directory
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroups.html
   */
  public toListGroups() {
    this.to('identitystore:ListGroups');
    return this;
  }

  /**
   * Search for users within the associated directory
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListUsers.html
   */
  public toListUsers() {
    this.to('identitystore:ListUsers');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Read": [
      "DescribeGroup",
      "DescribeUser"
    ],
    "List": [
      "ListGroups",
      "ListUsers"
    ]
  };
}

export type IdentitystoreActionsRead = 'DescribeGroup' | 'DescribeUser';
export type IdentitystoreActionsList = 'ListGroups' | 'ListUsers';
export type IdentitystoreActions = IdentitystoreActionsRead | IdentitystoreActionsList;
