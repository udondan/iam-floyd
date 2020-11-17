import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [appflow](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappflow.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Appflow extends PolicyStatement {
  public servicePrefix = 'appflow';

  /**
   * Statement provider for service [appflow](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappflow.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a login profile to be used with Amazon AppFlow flows
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateConnectorProfile.html
   */
  public toCreateConnectorProfile() {
    this.to('appflow:CreateConnectorProfile');
    return this;
  }

  /**
   * Grants permission to create an Amazon AppFlow flow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_CreateFlow.html
   */
  public toCreateFlow() {
    this.to('appflow:CreateFlow');
    return this;
  }

  /**
   * Grants permission to delete a login profile configured in Amazon AppFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorProfiles.html
   */
  public toDeleteConnectorProfile() {
    this.to('appflow:DeleteConnectorProfile');
    return this;
  }

  /**
   * Grants permission to delete an Amazon AppFlow flow
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DeleteFlow.html
   */
  public toDeleteFlow() {
    this.to('appflow:DeleteFlow');
    return this;
  }

  /**
   * Grants permission to describe all fields for an object in a login profile configured in Amazon AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorEntity.html
   */
  public toDescribeConnectorEntity() {
    this.to('appflow:DescribeConnectorEntity');
    return this;
  }

  /**
   * Grants permission to describe all fields for an object in a login profile configured in Amazon AppFlow (Console Only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  public toDescribeConnectorFields() {
    this.to('appflow:DescribeConnectorFields');
    return this;
  }

  /**
   * Grants permission to describe all login profiles configured in Amazon AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectorProfiles.html
   */
  public toDescribeConnectorProfiles() {
    this.to('appflow:DescribeConnectorProfiles');
    return this;
  }

  /**
   * Grants permission to describe all connectors supported by Amazon AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeConnectors.html
   */
  public toDescribeConnectors() {
    this.to('appflow:DescribeConnectors');
    return this;
  }

  /**
   * Grants permission to describe a specific flow configured in Amazon AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeFlow.html
   */
  public toDescribeFlow() {
    this.to('appflow:DescribeFlow');
    return this;
  }

  /**
   * Grants permission to describe all flow executions for a flow configured in Amazon AppFlow (Console Only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  public toDescribeFlowExecution() {
    this.to('appflow:DescribeFlowExecution');
    return this;
  }

  /**
   * Grants permission to describe all flow executions for a flow configured in Amazon AppFlow
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_DescribeFlowExecutionRecords.html
   */
  public toDescribeFlowExecutionRecords() {
    this.to('appflow:DescribeFlowExecutionRecords');
    return this;
  }

  /**
   * Grants permission to describe all flows configured in Amazon AppFlow (Console Only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  public toDescribeFlows() {
    this.to('appflow:DescribeFlows');
    return this;
  }

  /**
   * Grants permission to list all objects for a login profile configured in Amazon AppFlow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListConnectorEntities.html
   */
  public toListConnectorEntities() {
    this.to('appflow:ListConnectorEntities');
    return this;
  }

  /**
   * Grants permission to list all objects for a login profile configured in Amazon AppFlow (Console Only)
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  public toListConnectorFields() {
    this.to('appflow:ListConnectorFields');
    return this;
  }

  /**
   * Grants permission to list all flows configured in Amazon AppFlow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListFlows.html
   */
  public toListFlows() {
    this.to('appflow:ListFlows');
    return this;
  }

  /**
   * Grants permission to list tags for a flow
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('appflow:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to run a flow configured in Amazon AppFlow (Console Only)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/latest/userguide/identity-access-management.html#appflow-api-actions
   */
  public toRunFlow() {
    this.to('appflow:RunFlow');
    return this;
  }

  /**
   * Grants permission to activate (for scheduled and event-triggered flows) or run (for on-demand flows) a flow configured in Amazon AppFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_StartFlow.html
   */
  public toStartFlow() {
    this.to('appflow:StartFlow');
    return this;
  }

  /**
   * Grants permission to deactivate a scheduled or event-triggered flow configured in Amazon AppFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_StopFlow.html
   */
  public toStopFlow() {
    this.to('appflow:StopFlow');
    return this;
  }

  /**
   * Grants permission to tag a flow
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_TagResource.html
   */
  public toTagResource() {
    this.to('appflow:TagResource');
    return this;
  }

  /**
   * Grants permission to untag a flow
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    this.to('appflow:UntagResource');
    return this;
  }

  /**
   * Grants permission to update a login profile configured in Amazon AppFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateConnectorProfile.html
   */
  public toUpdateConnectorProfile() {
    this.to('appflow:UpdateConnectorProfile');
    return this;
  }

  /**
   * Grants permission to update a flow configured in Amazon AppFlow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_UpdateFlow.html
   */
  public toUpdateFlow() {
    this.to('appflow:UpdateFlow');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateConnectorProfile",
      "CreateFlow",
      "DeleteConnectorProfile",
      "DeleteFlow",
      "RunFlow",
      "StartFlow",
      "StopFlow",
      "UpdateConnectorProfile",
      "UpdateFlow"
    ],
    "Read": [
      "DescribeConnectorEntity",
      "DescribeConnectorFields",
      "DescribeConnectorProfiles",
      "DescribeConnectors",
      "DescribeFlow",
      "DescribeFlowExecution",
      "DescribeFlowExecutionRecords",
      "DescribeFlows",
      "ListConnectorFields"
    ],
    "List": [
      "ListConnectorEntities",
      "ListFlows",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type connectorprofile to the statement
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_ConnectorProfile.html
   *
   * @param profileName - Identifier for the profileName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConnectorprofile(profileName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appflow:${Region}:${Account}:connectorprofile/${ProfileName}';
    arn = arn.replace('${ProfileName}', profileName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type flow to the statement
   *
   * https://docs.aws.amazon.com/appflow/1.0/APIReference/API_FlowDefinition.html
   *
   * @param flowName - Identifier for the flowName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFlow(flowName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:appflow:${Region}:${Account}:flow/${FlowName}';
    arn = arn.replace('${FlowName}', flowName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
