import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [aws-mcp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmcpserver.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AwsMcp extends PolicyStatement {
  public servicePrefix = 'aws-mcp';

  /**
   * Statement provider for service [aws-mcp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmcpserver.html).
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
   * https://docs.aws.amazon.com/aws-mcp/latest/userguide/security-iam.html
   */
  public toCallReadOnlyTool() {
    return this.to('CallReadOnlyTool');
  }

  /**
   * Grants permission to call AWS Read and Write apis in MCP Service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/aws-mcp/latest/userguide/security-iam.html
   */
  public toCallReadWriteTool() {
    return this.to('CallReadWriteTool');
  }

  /**
   * Grants permission to use MCP service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/aws-mcp/latest/userguide/security-iam.html
   */
  public toInvokeMcp() {
    return this.to('InvokeMcp');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'CallReadOnlyTool'
    ],
    Write: [
      'CallReadWriteTool'
    ],
    List: [
      'InvokeMcp'
    ]
  };
}
