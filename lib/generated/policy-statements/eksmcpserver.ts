import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [eks-mcp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneksmcpserver.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class EksMcp extends PolicyStatement {
  public servicePrefix = 'eks-mcp';

  /**
   * Statement provider for service [eks-mcp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoneksmcpserver.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to call privileged tools in MCP service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/eks-mcp-tool-configurations.html
   */
  public toCallPrivilegedTool() {
    return this.to('CallPrivilegedTool');
  }

  /**
   * Grants permission to call read-only tools in MCP service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/eks-mcp-tool-configurations.html
   */
  public toCallReadOnlyTool() {
    return this.to('CallReadOnlyTool');
  }

  /**
   * Grants permission to use MCP service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/eks/latest/userguide/eks-mcp-tool-configurations.html
   */
  public toInvokeMcp() {
    return this.to('InvokeMcp');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CallPrivilegedTool'
    ],
    Read: [
      'CallReadOnlyTool',
      'InvokeMcp'
    ]
  };
}
