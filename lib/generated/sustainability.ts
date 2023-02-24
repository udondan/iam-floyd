import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [sustainability](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssustainability.html).
 *
 * @param options - Options for the statement
 */
export class Sustainability extends PolicyStatement {
  public servicePrefix = 'sustainability';

  /**
   * Statement provider for service [sustainability](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssustainability.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to view the carbon footprint tool
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-permissions-ref.html
   */
  public toGetCarbonFootprintSummary() {
    return this.to('GetCarbonFootprintSummary');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetCarbonFootprintSummary'
    ]
  };
}
