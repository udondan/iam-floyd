import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement, Operator } from "../shared";

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
   * Grants permission to add access for a private leaderboard
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html
   */
  public toAddLeaderboardAccessPermission() {
    return this.to('AddLeaderboardAccessPermission');
  }

  /**
   * Grants permission to get current admin multiuser configuration for this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-set-account-config.html
   */
  public toAdminGetAccountConfig() {
    return this.to('AdminGetAccountConfig');
  }

  /**
   * Grants permission to list all deepracer users with their associated resources created under this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-list-associated-resources.html
   */
  public toAdminListAssociatedResources() {
    return this.to('AdminListAssociatedResources');
  }

  /**
   * Grants permission to list user data for all users associated with this account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-list-associated-users.html
   */
  public toAdminListAssociatedUsers() {
    return this.to('AdminListAssociatedUsers');
  }

  /**
   * Grants permission to manage a user associated with this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-manage-user.html
   */
  public toAdminManageUser() {
    return this.to('AdminManageUser');
  }

  /**
   * Grants permission to set configuration options for this account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-set-account-config.html
   */
  public toAdminSetAccountConfig() {
    return this.to('AdminSetAccountConfig');
  }

  /**
   * Grants permission to clone an existing DeepRacer model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-clone-trained-model
   */
  public toCloneReinforcementLearningModel() {
    return this.to('CloneReinforcementLearningModel');
  }

  /**
   * Grants permission to create a DeepRacer car in your garage
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html
   */
  public toCreateCar() {
    return this.to('CreateCar');
  }

  /**
   * Grants permission to create a leaderboard
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-create-community-race.html
   */
  public toCreateLeaderboard() {
    return this.to('CreateLeaderboard');
  }

  /**
   * Grants permission to create an access token for a private leaderboard
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html
   */
  public toCreateLeaderboardAccessToken() {
    return this.to('CreateLeaderboardAccessToken');
  }

  /**
   * Grants permission to submit a DeepRacer model to be evaluated for leaderboards
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toCreateLeaderboardSubmission() {
    return this.to('CreateLeaderboardSubmission');
  }

  /**
   * Grants permission to create ra einforcement learning model for DeepRacer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toCreateReinforcementLearningModel() {
    return this.to('CreateReinforcementLearningModel');
  }

  /**
   * Grants permission to delete a leaderboard
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html
   */
  public toDeleteLeaderboard() {
    return this.to('DeleteLeaderboard');
  }

  /**
   * Grants permission to delete a DeepRacer model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toDeleteModel() {
    return this.to('DeleteModel');
  }

  /**
   * Grants permission to edit a leaderboard
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html
   */
  public toEditLeaderboard() {
    return this.to('EditLeaderboard');
  }

  /**
   * Grants permission to get current multiuser configuration for this account
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-admin-set-account-config.html
   */
  public toGetAccountConfig() {
    return this.to('GetAccountConfig');
  }

  /**
   * Grants permission to retrieve the user's alias for submitting a DeepRacer model to leaderboards
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toGetAlias() {
    return this.to('GetAlias');
  }

  /**
   * Grants permission to download artifacts for an existing DeepRacer model
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html
   */
  public toGetAssetUrl() {
    return this.to('GetAssetUrl');
  }

  /**
   * Grants permission to retrieve a specific DeepRacer car from your garage
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html
   */
  public toGetCar() {
    return this.to('GetCar');
  }

  /**
   * Grants permission to view all the DeepRacer cars in your garage
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html
   */
  public toGetCars() {
    return this.to('GetCars');
  }

  /**
   * Grants permission to retrieve information about an existing DeepRacer model's evaluation jobs
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   */
  public toGetEvaluation() {
    return this.to('GetEvaluation');
  }

  /**
   * Grants permission to retrieve information about how the latest submitted DeepRacer model for a user performed on a leaderboard
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toGetLatestUserSubmission() {
    return this.to('GetLatestUserSubmission');
  }

  /**
   * Grants permission to retrieve information about leaderboards
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toGetLeaderboard() {
    return this.to('GetLeaderboard');
  }

  /**
   * Grants permission to retrieve information about an existing DeepRacer model
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toGetModel() {
    return this.to('GetModel');
  }

  /**
   * Grants permission to retrieve information about private leaderboards
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-join-community-race.html
   */
  public toGetPrivateLeaderboard() {
    return this.to('GetPrivateLeaderboard');
  }

  /**
   * Grants permission to retrieve information about the performance of a user's DeepRacer model that got placed on a leaderboard
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toGetRankedUserSubmission() {
    return this.to('GetRankedUserSubmission');
  }

  /**
   * Grants permission to retrieve information about DeepRacer tracks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html
   */
  public toGetTrack() {
    return this.to('GetTrack');
  }

  /**
   * Grants permission to retrieve information about an existing DeepRacer model's training job
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toGetTrainingJob() {
    return this.to('GetTrainingJob');
  }

  /**
   * Grants permission to import a reinforcement learning model for DeepRacer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-troubleshooting-service-migration-errors.html
   */
  public toImportModel() {
    return this.to('ImportModel');
  }

  /**
   * Grants permission to list a DeepRacer model's evaluation jobs
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   */
  public toListEvaluations() {
    return this.to('ListEvaluations');
  }

  /**
   * Grants permission to list all the DeepRacer model submissions of a user on a leaderboard
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toListLeaderboardSubmissions() {
    return this.to('ListLeaderboardSubmissions');
  }

  /**
   * Grants permission to list all the available leaderboards
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toListLeaderboards() {
    return this.to('ListLeaderboards');
  }

  /**
   * Grants permission to list all existing DeepRacer models
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toListModels() {
    return this.to('ListModels');
  }

  /**
   * Grants permission to retrieve participant information about private leaderboards
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-join-community-race.html
   */
  public toListPrivateLeaderboardParticipants() {
    return this.to('ListPrivateLeaderboardParticipants');
  }

  /**
   * Grants permission to list all the available private leaderboards
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-join-community-race.html
   */
  public toListPrivateLeaderboards() {
    return this.to('ListPrivateLeaderboards');
  }

  /**
   * Grants permission to list all the subscribed private leaderboards
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-join-community-race.html
   */
  public toListSubscribedPrivateLeaderboards() {
    return this.to('ListSubscribedPrivateLeaderboards');
  }

  /**
   * Grants permission to lists tag for a resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-tagging.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list all DeepRacer tracks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html
   */
  public toListTracks() {
    return this.to('ListTracks');
  }

  /**
   * Grants permission to list a DeepRacer model's training jobs
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toListTrainingJobs() {
    return this.to('ListTrainingJobs');
  }

  /**
   * Grants permission to migrate previous reinforcement learning models for DeepRacer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-troubleshooting-service-migration-errors.html
   */
  public toMigrateModels() {
    return this.to('MigrateModels');
  }

  /**
   * Grants permission to performs the leaderboard operation mentioned in the operation attribute
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-perform-leaderboard-operation.html
   */
  public toPerformLeaderboardOperation() {
    return this.to('PerformLeaderboardOperation');
  }

  /**
   * Grants permission to remove access for a private leaderboard
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-manage-community-races.html
   */
  public toRemoveLeaderboardAccessPermission() {
    return this.to('RemoveLeaderboardAccessPermission');
  }

  /**
   * Grants permission to set the user's alias for submitting a DeepRacer model to leaderboards
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   */
  public toSetAlias() {
    return this.to('SetAlias');
  }

  /**
   * Grants permission to evaluate a DeepRacer model in a simulated environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   */
  public toStartEvaluation() {
    return this.to('StartEvaluation');
  }

  /**
   * Grants permission to stop DeepRacer model evaluations
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-test-in-simulator.html
   */
  public toStopEvaluation() {
    return this.to('StopEvaluation');
  }

  /**
   * Grants permission to stop training a DeepRacer model
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   */
  public toStopTrainingReinforcementLearningModel() {
    return this.to('StopTrainingReinforcementLearningModel');
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
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-tagging.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to test reward functions for correctness
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-console-train-evaluate-models.html#deepracer-train-models-define-reward-function
   */
  public toTestRewardFunction() {
    return this.to('TestRewardFunction');
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
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-tagging.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a DeepRacer car in your garage
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifUserToken()
   * - .ifMultiUser()
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html
   */
  public toUpdateCar() {
    return this.to('UpdateCar');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AddLeaderboardAccessPermission",
      "AdminManageUser",
      "AdminSetAccountConfig",
      "CloneReinforcementLearningModel",
      "CreateCar",
      "CreateLeaderboard",
      "CreateLeaderboardAccessToken",
      "CreateLeaderboardSubmission",
      "CreateReinforcementLearningModel",
      "DeleteLeaderboard",
      "DeleteModel",
      "EditLeaderboard",
      "ImportModel",
      "MigrateModels",
      "PerformLeaderboardOperation",
      "RemoveLeaderboardAccessPermission",
      "SetAlias",
      "StartEvaluation",
      "StopEvaluation",
      "StopTrainingReinforcementLearningModel",
      "TestRewardFunction",
      "UpdateCar"
    ],
    "Read": [
      "AdminGetAccountConfig",
      "AdminListAssociatedResources",
      "AdminListAssociatedUsers",
      "GetAccountConfig",
      "GetAlias",
      "GetAssetUrl",
      "GetCar",
      "GetCars",
      "GetEvaluation",
      "GetLatestUserSubmission",
      "GetLeaderboard",
      "GetModel",
      "GetPrivateLeaderboard",
      "GetRankedUserSubmission",
      "GetTrack",
      "GetTrainingJob",
      "ListEvaluations",
      "ListLeaderboardSubmissions",
      "ListLeaderboards",
      "ListModels",
      "ListPrivateLeaderboardParticipants",
      "ListPrivateLeaderboards",
      "ListSubscribedPrivateLeaderboards",
      "ListTagsForResource",
      "ListTracks",
      "ListTrainingJobs"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type car to the statement
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-choose-race-type.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCar(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:deepracer:${ region || '*' }:${ account || '*' }:car/${ resourceId }`);
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEvaluationJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:deepracer:${ region || '*' }:${ account || '*' }:evaluation_job/${ resourceId }`);
  }

  /**
   * Adds a resource of type leaderboard to the statement
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-submit-model-to-leaderboard.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLeaderboard(resourceId: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:deepracer:${ region || '*' }::leaderboard/${ resourceId }`);
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLeaderboardEvaluationJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:deepracer:${ region || '*' }:${ account || '*' }:leaderboard_evaluation_job/${ resourceId }`);
  }

  /**
   * Adds a resource of type reinforcement_learning_model to the statement
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-get-started-training-model.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReinforcementLearningModel(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:deepracer:${ region || '*' }:${ account || '*' }:model/reinforcement_learning/${ resourceId }`);
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
    return this.on(`arn:${ partition || 'aws' }:deepracer:${ region || '*' }::track/${ resourceId }`);
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
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onTrainingJob(resourceId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:deepracer:${ region || '*' }:${ account || '*' }:training_job/${ resourceId }`);
  }

  /**
   * Filters access by multiuser flag
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-multiuser
   *
   * Applies to actions:
   * - .toAddLeaderboardAccessPermission()
   * - .toCloneReinforcementLearningModel()
   * - .toCreateCar()
   * - .toCreateLeaderboard()
   * - .toCreateLeaderboardAccessToken()
   * - .toCreateLeaderboardSubmission()
   * - .toCreateReinforcementLearningModel()
   * - .toDeleteLeaderboard()
   * - .toDeleteModel()
   * - .toEditLeaderboard()
   * - .toGetAccountConfig()
   * - .toGetAlias()
   * - .toGetAssetUrl()
   * - .toGetCar()
   * - .toGetCars()
   * - .toGetEvaluation()
   * - .toGetLatestUserSubmission()
   * - .toGetLeaderboard()
   * - .toGetModel()
   * - .toGetPrivateLeaderboard()
   * - .toGetRankedUserSubmission()
   * - .toGetTrainingJob()
   * - .toImportModel()
   * - .toListEvaluations()
   * - .toListLeaderboardSubmissions()
   * - .toListLeaderboards()
   * - .toListModels()
   * - .toListPrivateLeaderboardParticipants()
   * - .toListPrivateLeaderboards()
   * - .toListSubscribedPrivateLeaderboards()
   * - .toListTagsForResource()
   * - .toListTrainingJobs()
   * - .toPerformLeaderboardOperation()
   * - .toRemoveLeaderboardAccessPermission()
   * - .toSetAlias()
   * - .toStartEvaluation()
   * - .toStopEvaluation()
   * - .toStopTrainingReinforcementLearningModel()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateCar()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifMultiUser(value?: boolean) {
    return this.if(`MultiUser`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * Filters access by user token in the request
   *
   * https://docs.aws.amazon.com/deepracer/latest/developerguide/reference_policies_iam-condition-keys.html#condition-keys-usertoken
   *
   * Applies to actions:
   * - .toAddLeaderboardAccessPermission()
   * - .toCloneReinforcementLearningModel()
   * - .toCreateCar()
   * - .toCreateLeaderboard()
   * - .toCreateLeaderboardAccessToken()
   * - .toCreateLeaderboardSubmission()
   * - .toCreateReinforcementLearningModel()
   * - .toDeleteLeaderboard()
   * - .toDeleteModel()
   * - .toEditLeaderboard()
   * - .toGetAccountConfig()
   * - .toGetAlias()
   * - .toGetAssetUrl()
   * - .toGetCar()
   * - .toGetCars()
   * - .toGetEvaluation()
   * - .toGetLatestUserSubmission()
   * - .toGetLeaderboard()
   * - .toGetModel()
   * - .toGetPrivateLeaderboard()
   * - .toGetRankedUserSubmission()
   * - .toGetTrainingJob()
   * - .toImportModel()
   * - .toListEvaluations()
   * - .toListLeaderboardSubmissions()
   * - .toListLeaderboards()
   * - .toListModels()
   * - .toListPrivateLeaderboardParticipants()
   * - .toListPrivateLeaderboards()
   * - .toListSubscribedPrivateLeaderboards()
   * - .toListTagsForResource()
   * - .toListTrainingJobs()
   * - .toPerformLeaderboardOperation()
   * - .toRemoveLeaderboardAccessPermission()
   * - .toSetAlias()
   * - .toStartEvaluation()
   * - .toStopEvaluation()
   * - .toStopTrainingReinforcementLearningModel()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateCar()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifUserToken(value: string | string[], operator?: Operator | string) {
    return this.if(`UserToken`, value, operator || 'StringLike');
  }
}
