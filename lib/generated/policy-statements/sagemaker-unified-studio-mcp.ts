import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [sagemaker-unified-studio-mcp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_sagemaker-unified-studio-mcp.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SagemakerUnifiedStudioMcp extends PolicyStatement {
  public servicePrefix = 'sagemaker-unified-studio-mcp';

  /**
   * Statement provider for service [sagemaker-unified-studio-mcp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_sagemaker-unified-studio-mcp.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to use MCP service VPC endpoint
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/
   */
  public toAuthorizeVpce() {
    return this.to('AuthorizeVpce');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'AuthorizeVpce'
    ]
  };
}
