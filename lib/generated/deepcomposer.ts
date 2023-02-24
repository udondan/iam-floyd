import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, PolicyStatementProps } from '../shared';

/**
 * Statement provider for service [deepcomposer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepcomposer.html).
 *
 * @param options - Options for the statement
 */
export class Deepcomposer extends PolicyStatement {
  public servicePrefix = 'deepcomposer';

  /**
   * Statement provider for service [deepcomposer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepcomposer.html).
   *
   * @param options - Options for the statement
   */
  constructor(options?: PolicyStatementProps) {
    super(options);
  }

  /**
   * Grants permission to associate a DeepComposer coupon (or DSN) with the account associated with the sender of the request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/what-it-is-keyboard.html
   */
  public toAssociateCoupon() {
    return this.to('AssociateCoupon');
  }

  /**
   * Grants permission to create an audio file by converting the midi composition into a wav or mp3 file
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   */
  public toCreateAudio() {
    return this.to('CreateAudio');
  }

  /**
   * Grants permission to create a multi-track midi composition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   */
  public toCreateComposition() {
    return this.to('CreateComposition');
  }

  /**
   * Grants permission to start creating/training a generative-model that is able to perform inference against the user-provided piano-melody to create a multi-track midi composition
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   */
  public toCreateModel() {
    return this.to('CreateModel');
  }

  /**
   * Grants permission to delete the composition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   */
  public toDeleteComposition() {
    return this.to('DeleteComposition');
  }

  /**
   * Grants permission to delete the model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   */
  public toDeleteModel() {
    return this.to('DeleteModel');
  }

  /**
   * Grants permission to get information about the composition
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   */
  public toGetComposition() {
    return this.to('GetComposition');
  }

  /**
   * Grants permission to get information about the model
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   */
  public toGetModel() {
    return this.to('GetModel');
  }

  /**
   * Grants permission to get information about the sample/pre-trained DeepComposer model
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   */
  public toGetSampleModel() {
    return this.to('GetSampleModel');
  }

  /**
   * Grants permission to list all the compositions owned by the sender of the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   */
  public toListCompositions() {
    return this.to('ListCompositions');
  }

  /**
   * Grants permission to list all the models owned by the sender of the request
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   */
  public toListModels() {
    return this.to('ListModels');
  }

  /**
   * Grants permission to list all the sample/pre-trained models provided by the DeepComposer service
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   */
  public toListSampleModels() {
    return this.to('ListSampleModels');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/deepcomposer-tagging.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all the training options or topic for creating/training a model
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   */
  public toListTrainingTopics() {
    return this.to('ListTrainingTopics');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/deepcomposer-tagging.html
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
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/deepcomposer-tagging.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to modify the mutable properties associated with a composition
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   */
  public toUpdateComposition() {
    return this.to('UpdateComposition');
  }

  /**
   * Grants permission to to modify the mutable properties associated with a model
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   */
  public toUpdateModel() {
    return this.to('UpdateModel');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateCoupon',
      'CreateAudio',
      'CreateComposition',
      'CreateModel',
      'DeleteComposition',
      'DeleteModel',
      'UpdateComposition',
      'UpdateModel'
    ],
    Read: [
      'GetComposition',
      'GetModel',
      'GetSampleModel'
    ],
    List: [
      'ListCompositions',
      'ListModels',
      'ListSampleModels',
      'ListTagsForResource',
      'ListTrainingTopics'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type model to the statement
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-custom-model.html
   *
   * @param modelId - Identifier for the modelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModel(modelId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:deepcomposer:${ region || '*' }:${ account || '*' }:model/${ modelId }`);
  }

  /**
   * Adds a resource of type composition to the statement
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   *
   * @param compositionId - Identifier for the compositionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComposition(compositionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:deepcomposer:${ region || '*' }:${ account || '*' }:composition/${ compositionId }`);
  }

  /**
   * Adds a resource of type audio to the statement
   *
   * https://docs.aws.amazon.com/deepcomposer/latest/devguide/get-started-learn-from-pre-trained-models.html
   *
   * @param audioId - Identifier for the audioId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAudio(audioId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || this.defaultPartition }:deepcomposer:${ region || '*' }:${ account || '*' }:audio/${ audioId }`);
  }
}
