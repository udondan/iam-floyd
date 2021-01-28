import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [app-integrations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappintegrations.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class AppIntegrations extends PolicyStatement {
  public servicePrefix = 'app-integrations';

  /**
   * Statement provider for service [app-integrations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonappintegrations.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permissions to create a new EventIntegration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateEventIntegration.html
   */
  public toCreateEventIntegration() {
    return this.to('CreateEventIntegration');
  }

  /**
   * Grants permissions to create an EventIntegrationAssociation
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - events:PutRule
   * - events:PutTargets
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateEventIntegrationAssociation.html
   */
  public toCreateEventIntegrationAssociation() {
    return this.to('CreateEventIntegrationAssociation');
  }

  /**
   * Grants permissions to delete an EventIntegration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteEventIntegration.html
   */
  public toDeleteEventIntegration() {
    return this.to('DeleteEventIntegration');
  }

  /**
   * Grants permissions to delete an EventIntegrationAssociation
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - events:DeleteRule
   * - events:ListTargetsByRule
   * - events:RemoveTargets
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteEventIntegrationAssociation.html
   */
  public toDeleteEventIntegrationAssociation() {
    return this.to('DeleteEventIntegrationAssociation');
  }

  /**
   * Grants permissions to view details about EventIntegrations
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_GetEventIntegration.html
   */
  public toGetEventIntegration() {
    return this.to('GetEventIntegration');
  }

  /**
   * Grants permissions to list EventIntegrationAssociations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListEventIntegrationAssociations
   */
  public toListEventIntegrationAssociations() {
    return this.to('ListEventIntegrationAssociations');
  }

  /**
   * Grants permissions to list EventIntegrations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListEventIntegrations.html
   */
  public toListEventIntegrations() {
    return this.to('ListEventIntegrations');
  }

  /**
   * Grants permission to lists tag for an Amazon AppIntegration resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to tag an Amazon AppIntegration resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permissions to untag an Amazon AppIntegration resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permissions to modify an EventIntegration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_UpdateEventIntegration.html
   */
  public toUpdateEventIntegration() {
    return this.to('UpdateEventIntegration');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateEventIntegration",
      "CreateEventIntegrationAssociation",
      "DeleteEventIntegration",
      "DeleteEventIntegrationAssociation",
      "UpdateEventIntegration"
    ],
    "Read": [
      "GetEventIntegration",
      "ListEventIntegrationAssociations",
      "ListTagsForResource"
    ],
    "List": [
      "ListEventIntegrations"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type event-integration to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/API_EventIntegration.html
   *
   * @param eventIntegrationName - Identifier for the eventIntegrationName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventIntegration(eventIntegrationName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:app-integrations:${Region}:${Account}:event-integration/${EventIntegrationName}';
    arn = arn.replace('${EventIntegrationName}', eventIntegrationName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type event-integration-association to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/API_EventIntegrationAssociation.html
   *
   * @param eventIntegrationName - Identifier for the eventIntegrationName.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventIntegrationAssociation(eventIntegrationName: string, resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:app-integrations:${Region}:${Account}:event-integration-association/${EventIntegrationName}/${ResourceId}';
    arn = arn.replace('${EventIntegrationName}', eventIntegrationName);
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
