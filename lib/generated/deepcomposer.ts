import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [deepcomposer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepcomposer.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Deepcomposer extends PolicyStatement {
  public servicePrefix = 'deepcomposer';

  /**
   * Statement provider for service [deepcomposer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepcomposer.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Associates a DeepComposer coupon (or DSN) with the account associated with the sender of the request.
   *
   * Access Level: Write
   */
  public toAssociateCoupon() {
    this.to('AssociateCoupon');
    return this;
  }

  /**
   * Creates an audio file by converting the midi composition into a wav or mp3 file.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toCreateAudio() {
    this.to('CreateAudio');
    return this;
  }

  /**
   * Creates a multi-track midi composition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toCreateComposition() {
    this.to('CreateComposition');
    return this;
  }

  /**
   * Starts creating/training a generative-model that is able to perform inference against the user-provided piano-melody to create a multi-track midi composition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
   */
  public toCreateModel() {
    this.to('CreateModel');
    return this;
  }

  /**
   * Deletes the composition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toDeleteComposition() {
    this.to('DeleteComposition');
    return this;
  }

  /**
   * Deletes the model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
   */
  public toDeleteModel() {
    this.to('DeleteModel');
    return this;
  }

  /**
   * Returns information about the composition.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toGetComposition() {
    this.to('GetComposition');
    return this;
  }

  /**
   * Returns information about the model.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
   */
  public toGetModel() {
    this.to('GetModel');
    return this;
  }

  /**
   * Returns information about the sample/pre-trained DeepComposer model.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toGetSampleModel() {
    this.to('GetSampleModel');
    return this;
  }

  /**
   * Returns a list of all the compositions owned by the sender of the request.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toListCompositions() {
    this.to('ListCompositions');
    return this;
  }

  /**
   * Returns a list of all the models owned by the sender of the request.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
   */
  public toListModels() {
    this.to('ListModels');
    return this;
  }

  /**
   * Returns a list of all the sample/pre-trained models provided by the DeepComposer service.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toListSampleModels() {
    this.to('ListSampleModels');
    return this;
  }

  /**
   * Grants permission to lists tag for a resource.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public toListTagsForResource() {
    this.to('ListTagsForResource');
    return this;
  }

  /**
   * Returns a list of all the training options or topic for creating/training a model.
   *
   * Access Level: List
   */
  public toListTrainingTopics() {
    this.to('ListTrainingTopics');
    return this;
  }

  /**
   * Grants permission to tag a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   */
  public toTagResource() {
    this.to('TagResource');
    return this;
  }

  /**
   * Grants permission to untag a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   */
  public toUntagResource() {
    this.to('UntagResource');
    return this;
  }

  /**
   * Modifies the mutable properties associated with a composition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   */
  public toUpdateComposition() {
    this.to('UpdateComposition');
    return this;
  }

  /**
   * Modifies the mutable properties associated with a model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
   */
  public toUpdateModel() {
    this.to('UpdateModel');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateCoupon",
      "CreateAudio",
      "CreateComposition",
      "CreateModel",
      "DeleteComposition",
      "DeleteModel",
      "UpdateComposition",
      "UpdateModel"
    ],
    "Read": [
      "GetComposition",
      "GetModel",
      "GetSampleModel"
    ],
    "List": [
      "ListCompositions",
      "ListModels",
      "ListSampleModels",
      "ListTagsForResource",
      "ListTrainingTopics"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type model to the statement
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-train-custom-model.html
   *
   * @param modelId - Identifier for the modelId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onModel(modelId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deepcomposer:${Region}:${Account}:model/${ModelId}';
    arn = arn.replace('${ModelId}', modelId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type composition to the statement
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   *
   * @param compositionId - Identifier for the compositionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onComposition(compositionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deepcomposer:${Region}:${Account}:composition/${CompositionId}';
    arn = arn.replace('${CompositionId}', compositionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type audio to the statement
   *
   * https://docs.aws.amazon.com/latest/devguide/get-started.htmlget-started-compose-with-trained-model.html
   *
   * @param audioId - Identifier for the audioId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAudio(audioId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deepcomposer:${Region}:${Account}:audio/${AudioId}';
    arn = arn.replace('${AudioId}', audioId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
