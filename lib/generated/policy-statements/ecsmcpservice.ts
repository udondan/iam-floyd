import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [ecs-mcp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonecsmcpservice.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class EcsMcp extends PolicyStatement {
  public servicePrefix = 'ecs-mcp';

  /**
   * Statement provider for service [ecs-mcp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonecsmcpservice.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to call read-only tools in MCP service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-mcp-getting-started.html
   */
  public toInvokeReadOnlyTools() {
    return this.to('InvokeReadOnlyTools');
  }

  /**
   * Grants permission to use MCP service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-mcp-getting-started.html
   */
  public toUseMcp() {
    return this.to('UseMcp');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'InvokeReadOnlyTools',
      'UseMcp'
    ]
  };
}
