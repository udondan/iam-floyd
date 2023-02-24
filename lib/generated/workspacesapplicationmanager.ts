import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [wam](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesapplicationmanager.html).
 *
 * @param options - Options for the statement
 */
export class Wam extends PolicyStatement {
  public servicePrefix = 'wam';

  /**
   * Statement provider for service [wam](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonworkspacesapplicationmanager.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Allows the Amazon WAM packaging instance to access your application package catalog.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wam/latest/adminguide/iam.html
   */
  public toAuthenticatePackager() {
    return this.to('AuthenticatePackager');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AuthenticatePackager'
    ]
  };
}
