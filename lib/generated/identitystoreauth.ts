import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [identitystore-auth](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitystoreauth.html).
 *
 * @param options - Options for the statement
 */
export class IdentitystoreAuth extends PolicyStatement {
  public servicePrefix = 'identitystore-auth';

  /**
   * Statement provider for service [identitystore-auth](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsidentitystoreauth.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to delete a batch of specified sessions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-app-session.html
   */
  public toBatchDeleteSession() {
    return this.to('BatchDeleteSession');
  }

  /**
   * Grants permission to return session attributes for a batch of specified sessions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-app-session.html
   */
  public toBatchGetSession() {
    return this.to('BatchGetSession');
  }

  /**
   * Grants permission to retrieve a list of active sessions for the specified user
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-app-session.html
   */
  public toListSessions() {
    return this.to('ListSessions');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchDeleteSession'
    ],
    Read: [
      'BatchGetSession'
    ],
    List: [
      'ListSessions'
    ]
  };
}
