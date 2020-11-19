import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [deepracer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepracer.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Deepracer extends PolicyStatement {
  public servicePrefix = 'deepracer';

  /**
   * Statement provider for service [deepracer](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdeepracer.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to clone existing DeepRacer models
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-clone-trained-model
   */
  public toCloneReinforcementLearningModel() {
    this.to('deepracer:CloneReinforcementLearningModel');
    return this;
  }

  /**
   * Grants permission to create resources needed by DeepRacer on behalf of the user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toCreateAccountResources() {
    this.to('deepracer:CreateAccountResources');
    return this;
  }

  /**
   * Grants permission to submit DeepRacer models to be evaluated for leaderboards
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toCreateLeaderboardSubmission() {
    this.to('deepracer:CreateLeaderboardSubmission');
    return this;
  }

  /**
   * Grants permission to create reinforcement learning models for DeepRacer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toCreateReinforcementLearningModel() {
    this.to('deepracer:CreateReinforcementLearningModel');
    return this;
  }

  /**
   * Grants permission to delete resources created by DeepRacer on behalf of the user
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toDeleteAccountResources() {
    this.to('deepracer:DeleteAccountResources');
    return this;
  }

  /**
   * Grants permission to delete DeepRacer models
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toDeleteModel() {
    this.to('deepracer:DeleteModel');
    return this;
  }

  /**
   * Grants permission to retrieve the resources created by DeepRacer on behalf of the user
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toGetAccountResources() {
    this.to('deepracer:GetAccountResources');
    return this;
  }

  /**
   * Grants permission to retrieve the user's alias for submitting DeepRacer models to leaderboards
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toGetAlias() {
    this.to('deepracer:GetAlias');
    return this;
  }

  /**
   * Grants permission to retrieve information about existing DeepRacer models' evaluation jobs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   */
  public toGetEvaluation() {
    this.to('deepracer:GetEvaluation');
    return this;
  }

  /**
   * Grants permission to retrieve information about how the latest submitted DeepRacer model for a user performed on a leaderboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toGetLatestUserSubmission() {
    this.to('deepracer:GetLatestUserSubmission');
    return this;
  }

  /**
   * Grants permission to retrieve information about leaderboards
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toGetLeaderboard() {
    this.to('deepracer:GetLeaderboard');
    return this;
  }

  /**
   * Grants permission to retrieve information about existing DeepRacer models
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toGetModel() {
    this.to('deepracer:GetModel');
    return this;
  }

  /**
   * Grants permission to retrieve information about the performance of a user's DeepRacer model that got placed on a leaderboard
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toGetRankedUserSubmission() {
    this.to('deepracer:GetRankedUserSubmission');
    return this;
  }

  /**
   * Grants permission to retrieve information about DeepRacer tracks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html
   */
  public toGetTrack() {
    this.to('deepracer:GetTrack');
    return this;
  }

  /**
   * Grants permission to retrieve information about existing DeepRacer models' training job
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toGetTrainingJob() {
    this.to('deepracer:GetTrainingJob');
    return this;
  }

  /**
   * Grants permission to list DeepRacer models' evaluation jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   */
  public toListEvaluations() {
    this.to('deepracer:ListEvaluations');
    return this;
  }

  /**
   * Grants permission to list all the submissions of DeepRacer models of a user on a leaderboard
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toListLeaderboardSubmissions() {
    this.to('deepracer:ListLeaderboardSubmissions');
    return this;
  }

  /**
   * Grants permission to list all the available leaderboards
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toListLeaderboards() {
    this.to('deepracer:ListLeaderboards');
    return this;
  }

  /**
   * Grants permission to list all existing DeepRacer models
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toListModels() {
    this.to('deepracer:ListModels');
    return this;
  }

  /**
   * Grants permission to list all DeepRacer tracks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html
   */
  public toListTracks() {
    this.to('deepracer:ListTracks');
    return this;
  }

  /**
   * Grants permission to list DeepRacer models' training jobs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toListTrainingJobs() {
    this.to('deepracer:ListTrainingJobs');
    return this;
  }

  /**
   * Grants permission to set the user's alias for submitting DeepRacer models to leaderboards
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toSetAlias() {
    this.to('deepracer:SetAlias');
    return this;
  }

  /**
   * Grants permission to evaluate DeepRacer models in a simulated environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   */
  public toStartEvaluation() {
    this.to('deepracer:StartEvaluation');
    return this;
  }

  /**
   * Grants permission to stop DeepRacer model evaluations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   */
  public toStopEvaluation() {
    this.to('deepracer:StopEvaluation');
    return this;
  }

  /**
   * Grants permission to stop training DeepRacer models
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toStopTrainingReinforcementLearningModel() {
    this.to('deepracer:StopTrainingReinforcementLearningModel');
    return this;
  }

  /**
   * Grants permission to test reward functions for correctness
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-train-models-define-reward-function
   */
  public toTestRewardFunction() {
    this.to('deepracer:TestRewardFunction');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CloneReinforcementLearningModel",
      "CreateAccountResources",
      "CreateLeaderboardSubmission",
      "CreateReinforcementLearningModel",
      "DeleteAccountResources",
      "DeleteModel",
      "SetAlias",
      "StartEvaluation",
      "StopEvaluation",
      "StopTrainingReinforcementLearningModel",
      "TestRewardFunction"
    ],
    "Read": [
      "GetAccountResources",
      "GetAlias",
      "GetEvaluation",
      "GetLatestUserSubmission",
      "GetLeaderboard",
      "GetModel",
      "GetRankedUserSubmission",
      "GetTrack",
      "GetTrainingJob"
    ],
    "List": [
      "ListEvaluations",
      "ListLeaderboardSubmissions",
      "ListLeaderboards",
      "ListModels",
      "ListTracks",
      "ListTrainingJobs"
    ]
  };

  /**
   * Adds a resource of type reinforcement_learning_model to the statement
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onReinforcementLearningModel(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deepracer:${Region}:${Account}:model/reinforcement_learning/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type training_job to the statement
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTrainingJob(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deepracer:${Region}:${Account}:training_job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type evaluation_job to the statement
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onEvaluationJob(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deepracer:${Region}:${Account}:evaluation_job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type leaderboard_evaluation_job to the statement
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLeaderboardEvaluationJob(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deepracer:${Region}:${Account}:leaderboard_evaluation_job/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type track to the statement
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTrack(resourceId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deepracer:${Region}::track/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type leaderboard to the statement
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLeaderboard(resourceId: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:deepracer:${Region}::leaderboard/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
