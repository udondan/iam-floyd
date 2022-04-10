import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [iottwinmaker](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiottwinmaker.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Iottwinmaker extends PolicyStatement {
  public servicePrefix = 'iottwinmaker';

  /**
   * Statement provider for service [iottwinmaker](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiottwinmaker.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to set values for multiple time series properties
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iottwinmaker:GetComponentType
   * - iottwinmaker:GetEntity
   * - iottwinmaker:GetWorkspace
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_BatchPutPropertyValues.html
   */
  public toBatchPutPropertyValues() {
    return this.to('BatchPutPropertyValues');
  }

  /**
   * Grants permission to create a componentType
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateComponentType.html
   */
  public toCreateComponentType() {
    return this.to('CreateComponentType');
  }

  /**
   * Grants permission to create an entity
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateEntity.html
   */
  public toCreateEntity() {
    return this.to('CreateEntity');
  }

  /**
   * Grants permission to create a scene
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateScene.html
   */
  public toCreateScene() {
    return this.to('CreateScene');
  }

  /**
   * Grants permission to create a workspace
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateWorkspace.html
   */
  public toCreateWorkspace() {
    return this.to('CreateWorkspace');
  }

  /**
   * Grants permission to delete a componentType
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DeleteComponentType.html
   */
  public toDeleteComponentType() {
    return this.to('DeleteComponentType');
  }

  /**
   * Grants permission to delete an entity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DeleteEntity.html
   */
  public toDeleteEntity() {
    return this.to('DeleteEntity');
  }

  /**
   * Grants permission to delete a scene
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DeleteScene.html
   */
  public toDeleteScene() {
    return this.to('DeleteScene');
  }

  /**
   * Grants permission to delete a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_DeleteWorkspace.html
   */
  public toDeleteWorkspace() {
    return this.to('DeleteWorkspace');
  }

  /**
   * Grants permission to get a componentType
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetComponentType.html
   */
  public toGetComponentType() {
    return this.to('GetComponentType');
  }

  /**
   * Grants permission to get an entity
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetEntity.html
   */
  public toGetEntity() {
    return this.to('GetEntity');
  }

  /**
   * Grants permission to retrieve the property values
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - iottwinmaker:GetComponentType
   * - iottwinmaker:GetEntity
   * - iottwinmaker:GetWorkspace
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValue.html
   */
  public toGetPropertyValue() {
    return this.to('GetPropertyValue');
  }

  /**
   * Grants permission to retrieve the time series value history
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - iottwinmaker:GetComponentType
   * - iottwinmaker:GetEntity
   * - iottwinmaker:GetWorkspace
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetPropertyValueHistory.html
   */
  public toGetPropertyValueHistory() {
    return this.to('GetPropertyValueHistory');
  }

  /**
   * Grants permission to get a scene
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetScene.html
   */
  public toGetScene() {
    return this.to('GetScene');
  }

  /**
   * Grants permission to get a workspace
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_GetWorkspace.html
   */
  public toGetWorkspace() {
    return this.to('GetWorkspace');
  }

  /**
   * Grants permission to list all componentTypes in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListComponentTypes.html
   */
  public toListComponentTypes() {
    return this.to('ListComponentTypes');
  }

  /**
   * Grants permission to list all entities in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListEntities.html
   */
  public toListEntities() {
    return this.to('ListEntities');
  }

  /**
   * Grants permission to list all scenes in a workspace
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListScenes.html
   */
  public toListScenes() {
    return this.to('ListScenes');
  }

  /**
   * Grants permission to list all tags for a resource
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all workspaces
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ListWorkspaces.html
   */
  public toListWorkspaces() {
    return this.to('ListWorkspaces');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a componentType
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UpdateComponentType.html
   */
  public toUpdateComponentType() {
    return this.to('UpdateComponentType');
  }

  /**
   * Grants permission to update an entity
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UpdateEntity.html
   */
  public toUpdateEntity() {
    return this.to('UpdateEntity');
  }

  /**
   * Grants permission to update a scene
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UpdateScene.html
   */
  public toUpdateScene() {
    return this.to('UpdateScene');
  }

  /**
   * Grants permission to update a workspace
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_UpdateWorkspace.html
   */
  public toUpdateWorkspace() {
    return this.to('UpdateWorkspace');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'BatchPutPropertyValues',
      'CreateComponentType',
      'CreateEntity',
      'CreateScene',
      'CreateWorkspace',
      'DeleteComponentType',
      'DeleteEntity',
      'DeleteScene',
      'DeleteWorkspace',
      'UpdateComponentType',
      'UpdateEntity',
      'UpdateScene',
      'UpdateWorkspace'
    ],
    Read: [
      'GetComponentType',
      'GetEntity',
      'GetPropertyValue',
      'GetPropertyValueHistory',
      'GetScene',
      'GetWorkspace'
    ],
    List: [
      'ListComponentTypes',
      'ListEntities',
      'ListScenes',
      'ListTagsForResource',
      'ListWorkspaces'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type workspace to the statement
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateWorkspace.html
   *
   * @param workspaceId - Identifier for the workspaceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onWorkspace(workspaceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iottwinmaker:${ region || '*' }:${ account || '*' }:workspace/${ workspaceId }`);
  }

  /**
   * Adds a resource of type entity to the statement
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateEntity.html
   *
   * @param workspaceId - Identifier for the workspaceId.
   * @param entityId - Identifier for the entityId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEntity(workspaceId: string, entityId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iottwinmaker:${ region || '*' }:${ account || '*' }:workspace/${ workspaceId }/entity/${ entityId }`);
  }

  /**
   * Adds a resource of type componentType to the statement
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateComponentType.html
   *
   * @param workspaceId - Identifier for the workspaceId.
   * @param componentTypeId - Identifier for the componentTypeId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComponentType(workspaceId: string, componentTypeId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iottwinmaker:${ region || '*' }:${ account || '*' }:workspace/${ workspaceId }/component-type/${ componentTypeId }`);
  }

  /**
   * Adds a resource of type scene to the statement
   *
   * https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_CreateScene.html
   *
   * @param workspaceId - Identifier for the workspaceId.
   * @param sceneId - Identifier for the sceneId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onScene(workspaceId: string, sceneId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:iottwinmaker:${ region || '*' }:${ account || '*' }:workspace/${ workspaceId }/scene/${ sceneId }`);
  }
}
