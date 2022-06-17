import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a new DataIntegration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html
   */
  public toCreateDataIntegration() {
    return this.to('CreateDataIntegration');
  }

  /**
   * Grants permission to create a DataIntegrationAssociation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegrationAssociation.html
   */
  public toCreateDataIntegrationAssociation() {
    return this.to('CreateDataIntegrationAssociation');
  }

  /**
   * Grants permission to create a new EventIntegration
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
   * Grants permission to create an EventIntegrationAssociation
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
   * Grants permission to delete a DataIntegration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html
   */
  public toDeleteDataIntegration() {
    return this.to('DeleteDataIntegration');
  }

  /**
   * Grants permission to delete a DataIntegrationAssociation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegrationAssociation.html
   */
  public toDeleteDataIntegrationAssociation() {
    return this.to('DeleteDataIntegrationAssociation');
  }

  /**
   * Grants permission to delete an EventIntegration
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
   * Grants permission to delete an EventIntegrationAssociation
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
   * Grants permission to view details about DataIntegrations
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_GetDataIntegration.html
   */
  public toGetDataIntegration() {
    return this.to('GetDataIntegration');
  }

  /**
   * Grants permission to view details about EventIntegrations
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
   * Grants permission to list DataIntegrationAssociations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListDataIntegrationAssociations
   */
  public toListDataIntegrationAssociations() {
    return this.to('ListDataIntegrationAssociations');
  }

  /**
   * Grants permission to list DataIntegrations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListDataIntegrations.html
   */
  public toListDataIntegrations() {
    return this.to('ListDataIntegrations');
  }

  /**
   * Grants permission to list EventIntegrationAssociations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_ListEventIntegrationAssociations
   */
  public toListEventIntegrationAssociations() {
    return this.to('ListEventIntegrationAssociations');
  }

  /**
   * Grants permission to list EventIntegrations
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
   * Grants permission to untag an Amazon AppIntegration resource
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
   * Grants permission to modify a DataIntegration
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_UpdateDataIntegration.html
   */
  public toUpdateDataIntegration() {
    return this.to('UpdateDataIntegration');
  }

  /**
   * Grants permission to modify an EventIntegration
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
    Write: [
      'CreateDataIntegration',
      'CreateDataIntegrationAssociation',
      'CreateEventIntegration',
      'CreateEventIntegrationAssociation',
      'DeleteDataIntegration',
      'DeleteDataIntegrationAssociation',
      'DeleteEventIntegration',
      'DeleteEventIntegrationAssociation',
      'UpdateDataIntegration',
      'UpdateEventIntegration'
    ],
    Read: [
      'GetDataIntegration',
      'GetEventIntegration',
      'ListEventIntegrationAssociations',
      'ListTagsForResource'
    ],
    List: [
      'ListDataIntegrationAssociations',
      'ListDataIntegrations',
      'ListEventIntegrations'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventIntegration(eventIntegrationName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || AppIntegrations.defaultPartition }:app-integrations:${ region || '*' }:${ account || '*' }:event-integration/${ eventIntegrationName }`);
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
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEventIntegrationAssociation(eventIntegrationName: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || AppIntegrations.defaultPartition }:app-integrations:${ region || '*' }:${ account || '*' }:event-integration-association/${ eventIntegrationName }/${ resourceId }`);
  }

  /**
   * Adds a resource of type data-integration to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/API_DataIntegration.html
   *
   * @param dataIntegrationId - Identifier for the dataIntegrationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataIntegration(dataIntegrationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || AppIntegrations.defaultPartition }:app-integrations:${ region || '*' }:${ account || '*' }:data-integration/${ dataIntegrationId }`);
  }

  /**
   * Adds a resource of type data-integration-association to the statement
   *
   * https://docs.aws.amazon.com/connect/latest/adminguide/API_DataIntegrationAssociation.html
   *
   * @param dataIntegrationId - Identifier for the dataIntegrationId.
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDataIntegrationAssociation(dataIntegrationId: string, resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || AppIntegrations.defaultPartition }:app-integrations:${ region || '*' }:${ account || '*' }:data-integration-association/${ dataIntegrationId }/${ resourceId }`);
  }
}
