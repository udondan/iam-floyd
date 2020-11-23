import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [shield](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsshield.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Shield extends PolicyStatement {
  public servicePrefix = 'shield';

  /**
   * Statement provider for service [shield](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsshield.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Authorizes the DDoS Response team to access the specified Amazon S3 bucket containing your flow logs
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:GetBucketPolicy
   * - s3:PutBucketPolicy
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTLogBucket.html
   */
  public toAssociateDRTLogBucket() {
    this.to('AssociateDRTLogBucket');
    return this;
  }

  /**
   * Authorizes the DDoS Response team using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:GetRole
   * - iam:ListAttachedRolePolicies
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTRole.html
   */
  public toAssociateDRTRole() {
    this.to('AssociateDRTRole');
    return this;
  }

  /**
   * Activate DDoS protection service for a given resource ARN
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtection.html
   */
  public toCreateProtection() {
    this.to('CreateProtection');
    return this;
  }

  /**
   * Activate subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html
   */
  public toCreateSubscription() {
    this.to('CreateSubscription');
    return this;
  }

  /**
   * Delete an existing protection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteProtection.html
   */
  public toDeleteProtection() {
    this.to('DeleteProtection');
    return this;
  }

  /**
   * Deactivate subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteSubscription.html
   */
  public toDeleteSubscription() {
    this.to('DeleteSubscription');
    return this;
  }

  /**
   * Get attack details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeAttack.html
   */
  public toDescribeAttack() {
    this.to('DescribeAttack');
    return this;
  }

  /**
   * Returns the current role and list of Amazon S3 log buckets used by the DDoS Response team to access your AWS account while assisting with attack mitigation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeDRTAccess.html
   */
  public toDescribeDRTAccess() {
    this.to('DescribeDRTAccess');
    return this;
  }

  /**
   * Lists the email addresses that the DRT can use to contact you during a suspected attack
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeEmergencyContactSettings.html
   */
  public toDescribeEmergencyContactSettings() {
    this.to('DescribeEmergencyContactSettings');
    return this;
  }

  /**
   * Get protection details
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeProtection.html
   */
  public toDescribeProtection() {
    this.to('DescribeProtection');
    return this;
  }

  /**
   * Get subscription details, such as start time
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeSubscription.html
   */
  public toDescribeSubscription() {
    this.to('DescribeSubscription');
    return this;
  }

  /**
   * Removes the DDoS Response team's access to the specified Amazon S3 bucket containing your flow logs
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - s3:DeleteBucketPolicy
   * - s3:GetBucketPolicy
   * - s3:PutBucketPolicy
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTLogBucket.html
   */
  public toDisassociateDRTLogBucket() {
    this.to('DisassociateDRTLogBucket');
    return this;
  }

  /**
   * Removes the DDoS Response team's access to your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTRole.html
   */
  public toDisassociateDRTRole() {
    this.to('DisassociateDRTRole');
    return this;
  }

  /**
   * Get subscription state
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_GetSubscriptionState.html
   */
  public toGetSubscriptionState() {
    this.to('GetSubscriptionState');
    return this;
  }

  /**
   * List all existing attacks
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListAttacks.html
   */
  public toListAttacks() {
    this.to('ListAttacks');
    return this;
  }

  /**
   * List all existing protections
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListProtections.html
   */
  public toListProtections() {
    this.to('ListProtections');
    return this;
  }

  /**
   * Updates the details of the list of email addresses that the DRT can use to contact you during a suspected attack
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateEmergencyContactSettings.html
   */
  public toUpdateEmergencyContactSettings() {
    this.to('UpdateEmergencyContactSettings');
    return this;
  }

  /**
   * Updates the details of an existing subscription
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateSubscription.html
   */
  public toUpdateSubscription() {
    this.to('UpdateSubscription');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateDRTLogBucket",
      "AssociateDRTRole",
      "CreateProtection",
      "CreateSubscription",
      "DeleteProtection",
      "DeleteSubscription",
      "DisassociateDRTLogBucket",
      "DisassociateDRTRole",
      "UpdateEmergencyContactSettings",
      "UpdateSubscription"
    ],
    "Read": [
      "DescribeAttack",
      "DescribeDRTAccess",
      "DescribeEmergencyContactSettings",
      "DescribeProtection",
      "DescribeSubscription",
      "GetSubscriptionState"
    ],
    "List": [
      "ListAttacks",
      "ListProtections"
    ]
  };

  /**
   * Adds a resource of type attack to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AttackDetail.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAttack(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:shield::${Account}:attack/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type protection to the statement
   *
   * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_Protection.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProtection(id: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:shield::${Account}:protection/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
