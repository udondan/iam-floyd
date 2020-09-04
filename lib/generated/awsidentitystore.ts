import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [identitystore](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsidentitystore.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Identitystore extends PolicyStatement {
  public servicePrefix = 'identitystore';
  protected actionList: Actions = {
    "DescribeGroup": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeGroup.html",
      "description": "Retrieves information about group from the directory that AWS Identity Store provides by default",
      "accessLevel": "Read"
    },
    "DescribeUser": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_DescribeUser.html",
      "description": "Retrieves information about user from the directory that AWS Identity Store provides by default",
      "accessLevel": "Read"
    },
    "ListGroups": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListGroups.html",
      "description": "Search for groups within the associated directory",
      "accessLevel": "List"
    },
    "ListUsers": {
      "url": "https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_ListUsers.html",
      "description": "Search for users within the associated directory",
      "accessLevel": "List"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [identitystore](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsidentitystore.html).
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
    this.add('identitystore:DescribeGroup');
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
    this.add('identitystore:DescribeUser');
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
    this.add('identitystore:ListGroups');
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
    this.add('identitystore:ListUsers');
    return this;
  }
}
