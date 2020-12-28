import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [inspector](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Inspector extends PolicyStatement {
  public servicePrefix = 'inspector';

  /**
   * Statement provider for service [inspector](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoninspector.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Assigns attributes (key and value pairs) to the findings that are specified by the ARNs of the findings.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_AddAttributesToFindings.html
   */
  public toAddAttributesToFindings() {
    return this.to('AddAttributesToFindings');
  }

  /**
   * Creates a new assessment target using the ARN of the resource group that is generated by CreateResourceGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateAssessmentTarget.html
   */
  public toCreateAssessmentTarget() {
    return this.to('CreateAssessmentTarget');
  }

  /**
   * Creates an assessment template for the assessment target that is specified by the ARN of the assessment target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateAssessmentTemplate.html
   */
  public toCreateAssessmentTemplate() {
    return this.to('CreateAssessmentTemplate');
  }

  /**
   * Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_CreateResourceGroup.html
   */
  public toCreateResourceGroup() {
    return this.to('CreateResourceGroup');
  }

  /**
   * Deletes the assessment run that is specified by the ARN of the assessment run.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentRun.html
   */
  public toDeleteAssessmentRun() {
    return this.to('DeleteAssessmentRun');
  }

  /**
   * Deletes the assessment target that is specified by the ARN of the assessment target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentTarget.html
   */
  public toDeleteAssessmentTarget() {
    return this.to('DeleteAssessmentTarget');
  }

  /**
   * Deletes the assessment template that is specified by the ARN of the assessment template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DeleteAssessmentTemplate.html
   */
  public toDeleteAssessmentTemplate() {
    return this.to('DeleteAssessmentTemplate');
  }

  /**
   * Describes the assessment runs that are specified by the ARNs of the assessment runs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentRuns.html
   */
  public toDescribeAssessmentRuns() {
    return this.to('DescribeAssessmentRuns');
  }

  /**
   * Describes the assessment targets that are specified by the ARNs of the assessment targets.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentTargets.html
   */
  public toDescribeAssessmentTargets() {
    return this.to('DescribeAssessmentTargets');
  }

  /**
   * Describes the assessment templates that are specified by the ARNs of the assessment templates.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeAssessmentTemplates.html
   */
  public toDescribeAssessmentTemplates() {
    return this.to('DescribeAssessmentTemplates');
  }

  /**
   * Describes the IAM role that enables Amazon Inspector to access your AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeCrossAccountAccessRole.html
   */
  public toDescribeCrossAccountAccessRole() {
    return this.to('DescribeCrossAccountAccessRole');
  }

  /**
   * Describes the findings that are specified by the ARNs of the findings.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeFindings.html
   */
  public toDescribeFindings() {
    return this.to('DescribeFindings');
  }

  /**
   * Describes the resource groups that are specified by the ARNs of the resource groups.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeResourceGroups.html
   */
  public toDescribeResourceGroups() {
    return this.to('DescribeResourceGroups');
  }

  /**
   * Describes the rules packages that are specified by the ARNs of the rules packages.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_DescribeRulesPackages.html
   */
  public toDescribeRulesPackages() {
    return this.to('DescribeRulesPackages');
  }

  /**
   * Information about the data that is collected for the specified assessment run.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_GetTelemetryMetadata.html
   */
  public toGetTelemetryMetadata() {
    return this.to('GetTelemetryMetadata');
  }

  /**
   * Lists the agents of the assessment runs that are specified by the ARNs of the assessment runs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentRunAgents.html
   */
  public toListAssessmentRunAgents() {
    return this.to('ListAssessmentRunAgents');
  }

  /**
   * Lists the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentRuns.html
   */
  public toListAssessmentRuns() {
    return this.to('ListAssessmentRuns');
  }

  /**
   * Lists the ARNs of the assessment targets within this AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentTargets.html
   */
  public toListAssessmentTargets() {
    return this.to('ListAssessmentTargets');
  }

  /**
   * Lists the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListAssessmentTemplates.html
   */
  public toListAssessmentTemplates() {
    return this.to('ListAssessmentTemplates');
  }

  /**
   * Lists all the event subscriptions for the assessment template that is specified by the ARN of the assessment template.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListEventSubscriptions.html
   */
  public toListEventSubscriptions() {
    return this.to('ListEventSubscriptions');
  }

  /**
   * Lists findings that are generated by the assessment runs that are specified by the ARNs of the assessment runs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListFindings.html
   */
  public toListFindings() {
    return this.to('ListFindings');
  }

  /**
   * Lists all available Amazon Inspector rules packages.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListRulesPackages.html
   */
  public toListRulesPackages() {
    return this.to('ListRulesPackages');
  }

  /**
   * Lists all tags associated with an assessment template.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Previews the agents installed on the EC2 instances that are part of the specified assessment target.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_PreviewAgents.html
   */
  public toPreviewAgents() {
    return this.to('PreviewAgents');
  }

  /**
   * Registers the IAM role that Amazon Inspector uses to list your EC2 instances at the start of the assessment run or when you call the PreviewAgents action.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_RegisterCrossAccountAccessRole.html
   */
  public toRegisterCrossAccountAccessRole() {
    return this.to('RegisterCrossAccountAccessRole');
  }

  /**
   * Removes entire attributes (key and value pairs) from the findings that are specified by the ARNs of the findings where an attribute with the specified key exists.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_RemoveAttributesFromFindings.html
   */
  public toRemoveAttributesFromFindings() {
    return this.to('RemoveAttributesFromFindings');
  }

  /**
   * Sets tags (key and value pairs) to the assessment template that is specified by the ARN of the assessment template.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_SetTagsForResource.html
   */
  public toSetTagsForResource() {
    return this.to('SetTagsForResource');
  }

  /**
   * Starts the assessment run specified by the ARN of the assessment template.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_StartAssessmentRun.html
   */
  public toStartAssessmentRun() {
    return this.to('StartAssessmentRun');
  }

  /**
   * Stops the assessment run that is specified by the ARN of the assessment run.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_StopAssessmentRun.html
   */
  public toStopAssessmentRun() {
    return this.to('StopAssessmentRun');
  }

  /**
   * Enables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_SubscribeToEvent.html
   */
  public toSubscribeToEvent() {
    return this.to('SubscribeToEvent');
  }

  /**
   * Disables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_UnsubscribeFromEvent.html
   */
  public toUnsubscribeFromEvent() {
    return this.to('UnsubscribeFromEvent');
  }

  /**
   * Updates the assessment target that is specified by the ARN of the assessment target.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/inspector/latest/APIReference/API_UpdateAssessmentTarget.html
   */
  public toUpdateAssessmentTarget() {
    return this.to('UpdateAssessmentTarget');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddAttributesToFindings",
      "CreateAssessmentTarget",
      "CreateAssessmentTemplate",
      "CreateResourceGroup",
      "DeleteAssessmentRun",
      "DeleteAssessmentTarget",
      "DeleteAssessmentTemplate",
      "RegisterCrossAccountAccessRole",
      "RemoveAttributesFromFindings",
      "StartAssessmentRun",
      "StopAssessmentRun",
      "SubscribeToEvent",
      "UnsubscribeFromEvent",
      "UpdateAssessmentTarget"
    ],
    "Read": [
      "DescribeAssessmentRuns",
      "DescribeAssessmentTargets",
      "DescribeAssessmentTemplates",
      "DescribeCrossAccountAccessRole",
      "DescribeFindings",
      "DescribeResourceGroups",
      "DescribeRulesPackages",
      "GetTelemetryMetadata",
      "PreviewAgents"
    ],
    "List": [
      "ListAssessmentRunAgents",
      "ListAssessmentRuns",
      "ListAssessmentTargets",
      "ListAssessmentTemplates",
      "ListEventSubscriptions",
      "ListFindings",
      "ListRulesPackages",
      "ListTagsForResource"
    ],
    "Tagging": [
      "SetTagsForResource"
    ]
  };
}
