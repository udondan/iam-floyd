import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [wickr](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswickr.html).
 *
 * @param options - Options for the statement
 */
export class Wickr extends PolicyStatement {
  public servicePrefix = 'wickr';

  /**
   * Statement provider for service [wickr](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awswickr.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to create and manage Wickr networks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toCreateAdminSession() {
    return this.to('CreateAdminSession');
  }

  /**
   * Grants permission to view Wickr networks
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html
   */
  public toListNetworks() {
    return this.to('ListNetworks');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateAdminSession',
      'ListNetworks'
    ]
  };
}
