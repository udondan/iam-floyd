import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [sagemaker-groundtruth-synthetic](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemakergroundtruthsynthetic.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SagemakerGroundtruthSynthetic extends PolicyStatement {
  public servicePrefix = 'sagemaker-groundtruth-synthetic';

  /**
   * Statement provider for service [sagemaker-groundtruth-synthetic](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonsagemakergroundtruthsynthetic.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a project
   *
   * Access Level: Write
   */
  public toCreateProject() {
    return this.to('CreateProject');
  }

  /**
   * Grants permission to delete a project
   *
   * Access Level: Write
   */
  public toDeleteProject() {
    return this.to('DeleteProject');
  }

  /**
   * Grants permission to get a batch
   *
   * Access Level: Read
   */
  public toGetBatch() {
    return this.to('GetBatch');
  }

  /**
   * Grants permission to get a project
   *
   * Access Level: Read
   */
  public toGetProject() {
    return this.to('GetProject');
  }

  /**
   * Grants permission to list batch summaries
   *
   * Access Level: List
   */
  public toListBatchSummaries() {
    return this.to('ListBatchSummaries');
  }

  /**
   * Grants permission to list project summaries
   *
   * Access Level: List
   */
  public toListProjectSummaries() {
    return this.to('ListProjectSummaries');
  }

  /**
   * Grants permission to update a batch
   *
   * Access Level: Write
   */
  public toUpdateBatch() {
    return this.to('UpdateBatch');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateProject',
      'DeleteProject',
      'UpdateBatch'
    ],
    Read: [
      'GetBatch',
      'GetProject'
    ],
    List: [
      'ListBatchSummaries',
      'ListProjectSummaries'
    ]
  };
}
