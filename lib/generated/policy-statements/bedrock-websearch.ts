import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [bedrock-websearch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_bedrock-websearch.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class BedrockWebsearch extends PolicyStatement {
  public servicePrefix = 'bedrock-websearch';

  /**
   * Statement provider for service [bedrock-websearch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_bedrock-websearch.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to invoke web fetch tools
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/userguide/security-web-search.html#security-web-search-actions
   */
  public toInvokeFetch() {
    return this.to('InvokeFetch');
  }

  /**
   * Grants permission to invoke web search tools
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/bedrock/latest/userguide/security-web-search.html#security-web-search-actions
   */
  public toInvokeSearch() {
    return this.to('InvokeSearch');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'InvokeFetch',
      'InvokeSearch'
    ]
  };

  /**
   * Adds a resource of type tool to the statement
   *
   * https://docs.aws.amazon.com/bedrock/latest/userguide/security-web-search.html#security-web-search-actions
   *
   * @param toolName - Identifier for the toolName.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTool(toolName: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:bedrock-websearch:${ region ?? this.defaultRegion }:aws:tool/${ toolName }`);
  }
}
