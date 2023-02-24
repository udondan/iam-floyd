import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [arsenal](https://docs.aws.amazon.com/service-authorization/latest/reference/list_applicationdiscoveryarsenal.html).
 *
 * @param options - Options for the statement
 */
export class Arsenal extends PolicyStatement {
  public servicePrefix = 'arsenal';

  /**
   * Statement provider for service [arsenal](https://docs.aws.amazon.com/service-authorization/latest/reference/list_applicationdiscoveryarsenal.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to register AWS provided data collectors to the Application Discovery Service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/application-discovery/latest/userguide/setting-up.html
   */
  public toRegisterOnPremisesAgent() {
    return this.to('RegisterOnPremisesAgent');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'RegisterOnPremisesAgent'
    ]
  };
}
