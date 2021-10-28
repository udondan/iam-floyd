import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [bugbust](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbugbust.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Bugbust extends PolicyStatement {
  public servicePrefix = 'bugbust';

  /**
   * Statement provider for service [bugbust](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsbugbust.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a BugBust event
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toCreateEvent() {
    return this.to('CreateEvent');
  }

  /**
   * Grants permission to evaluate checked-in profiling groups
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toEvaluateProfilingGroups() {
    return this.to('EvaluateProfilingGroups');
  }

  /**
   * Grants permission to view customer details about an event
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toGetEvent() {
    return this.to('GetEvent');
  }

  /**
   * Grants permission to view the status of a BugBust player's attempt to join a BugBust event
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toGetJoinEventStatus() {
    return this.to('GetJoinEventStatus');
  }

  /**
   * Grants permission to join an event
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toJoinEvent() {
    return this.to('JoinEvent');
  }

  /**
   * Grants permission to view the bugs that were imported into an event for players to work on
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - codeguru-reviewer:DescribeCodeReview
   * - codeguru-reviewer:ListRecommendations
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toListBugs() {
    return this.to('ListBugs');
  }

  /**
   * Grants permission to view the participants of an event
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toListEventParticipants() {
    return this.to('ListEventParticipants');
  }

  /**
   * Grants permission to view the scores of an event's players
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toListEventScores() {
    return this.to('ListEventScores');
  }

  /**
   * Grants permission to List BugBust events
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toListEvents() {
    return this.to('ListEvents');
  }

  /**
   * Grants permission to view the profiling groups that were imported into an event for players to work on
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toListProfilingGroups() {
    return this.to('ListProfilingGroups');
  }

  /**
   * Grants permission to view the pull requests used by players to submit fixes to their claimed bugs in an event
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toListPullRequests() {
    return this.to('ListPullRequests');
  }

  /**
   * Grants permission to lists tag for a Bugbust resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to tag a Bugbust resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag a Bugbust resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a BugBust event
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - codeguru-profiler:DescribeProfilingGroup
   * - codeguru-profiler:ListProfilingGroups
   * - codeguru-reviewer:DescribeCodeReview
   * - codeguru-reviewer:ListCodeReviews
   * - codeguru-reviewer:ListRecommendations
   * - codeguru-reviewer:TagResource
   * - codeguru-reviewer:UnTagResource
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toUpdateEvent() {
    return this.to('UpdateEvent');
  }

  /**
   * Grants permission to update a work item as claimed or unclaimed (bug or profiling group)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toUpdateWorkItem() {
    return this.to('UpdateWorkItem');
  }

  /**
   * Grants permission to update an event's work item (bug or profiling group)
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/auth-and-access-control-permissions-reference.html
   */
  public toUpdateWorkItemAdmin() {
    return this.to('UpdateWorkItemAdmin');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'CreateEvent',
      'EvaluateProfilingGroups',
      'JoinEvent',
      'UpdateEvent',
      'UpdateWorkItem',
      'UpdateWorkItemAdmin'
    ],
    Read: [
      'GetEvent',
      'GetJoinEventStatus',
      'ListBugs',
      'ListEventParticipants',
      'ListEventScores',
      'ListProfilingGroups',
      'ListPullRequests',
      'ListTagsForResource'
    ],
    List: [
      'ListEvents'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type codereview to the statement
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-ug/API_CodeReview.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param codeReviewId - Identifier for the codeReviewId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCodereview(resourceId: string, codeReviewId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:codeguru-reviewer:${ region || '*' }:${ account || '*' }:association:${ resourceId }:codereview:${ codeReviewId }`);
  }

  /**
   * Adds a resource of type ProfilingGroup to the statement
   *
   * https://docs.aws.amazon.com/codeguru/latest/profiler-api/working-with-profiling-groups.html
   *
   * @param profilingGroupName - Identifier for the profilingGroupName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onProfilingGroup(profilingGroupName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:codeguru-profiler:${ region || '*' }:${ account || '*' }:profilingGroup/${ profilingGroupName }`);
  }

  /**
   * Adds a resource of type Event to the statement
   *
   * https://docs.aws.amazon.com/codeguru/latest/bugbust-ug/event-managing.html
   *
   * @param eventId - Identifier for the eventId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEvent(eventId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || 'aws' }:bugbust:${ region || '*' }:${ account || '*' }:events/${ eventId }`);
  }
}
