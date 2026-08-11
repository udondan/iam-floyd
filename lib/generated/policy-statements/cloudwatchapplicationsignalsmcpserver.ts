import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [application-signals-mcp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchapplicationsignalsmcpserver.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class ApplicationSignalsMcp extends PolicyStatement {
  public servicePrefix = 'application-signals-mcp';

  /**
   * Statement provider for service [application-signals-mcp](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncloudwatchapplicationsignalsmcpserver.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to invoke read-only Application Signals MCP tools (list_monitored_services, get_service_detail, query_service_metrics, list_service_operations, get_slo, list_slos, search_transaction_spans, query_sampled_traces, list_slis, get_enablement_guide, list_change_events, list_group_services, audit_group_health, get_group_dependencies, get_group_changes, list_grouping_attribute_definitions, audit_services, audit_slos, audit_service_operations, analyze_canary_failures)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Signals.html
   */
  public toCallReadOnlyTool() {
    return this.to('CallReadOnlyTool');
  }

  /**
   * Grants permission to connect to and interact with the Application Signals MCP server (initialize, list tools, list resources, list prompts)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Signals.html
   */
  public toInvokeMcp() {
    return this.to('InvokeMcp');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'CallReadOnlyTool',
      'InvokeMcp'
    ]
  };

  /**
   * Adds a resource of type mcp-server to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Signals.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMcpServer(resourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:application-signals-mcp:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:mcp-server/${ resourceName }`);
  }

  /**
   * Filters access by tag key-value pairs attached to the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - mcp-server
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }
}
