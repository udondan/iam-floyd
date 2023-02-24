import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [codeguru](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodeguru.html).
 *
 * @param options - Options for the statement
 */
export class Codeguru extends PolicyStatement {
  public servicePrefix = 'codeguru';

  /**
   * Statement provider for service [codeguru](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodeguru.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to get free trial summary for the CodeGuru service which includes expiration date
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetCodeGuruFreeTrialSummary.html
   */
  public toGetCodeGuruFreeTrialSummary() {
    return this.to('GetCodeGuruFreeTrialSummary');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetCodeGuruFreeTrialSummary'
    ]
  };
}
