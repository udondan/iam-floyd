import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement, Operator } from '../shared';

/**
 * Statement provider for service [codecatalyst](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodecatalyst.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Codecatalyst extends PolicyStatement {
  public servicePrefix = 'codecatalyst';

  /**
   * Statement provider for service [codecatalyst](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazoncodecatalyst.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a request to connect this account to an Amazon CodeCatalyst space
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toAcceptConnection() {
    return this.to('AcceptConnection');
  }

  /**
   * Grants permission to associate an IAM role to a connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toAssociateIamRoleToConnection() {
    return this.to('AssociateIamRoleToConnection');
  }

  /**
   * Grants permission to associate an IAM Identity Center application with an Amazon CodeCatalyst space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toAssociateIdentityCenterApplicationToSpace() {
    return this.to('AssociateIdentityCenterApplicationToSpace');
  }

  /**
   * Grants permission to associate an identity with an IAM Identity Center application for an Amazon CodeCatalyst space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toAssociateIdentityToIdentityCenterApplication() {
    return this.to('AssociateIdentityToIdentityCenterApplication');
  }

  /**
   * Grants permission to associate multiple identities with an IAM Identity Center application for an Amazon CodeCatalyst space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toBatchAssociateIdentitiesToIdentityCenterApplication() {
    return this.to('BatchAssociateIdentitiesToIdentityCenterApplication');
  }

  /**
   * Grants permission to disassociate multiple identities from an IAM Identity Center application for an Amazon CodeCatalyst space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toBatchDisassociateIdentitiesFromIdentityCenterApplication() {
    return this.to('BatchDisassociateIdentitiesFromIdentityCenterApplication');
  }

  /**
   * Grants permission to create an IAM Identity Center application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toCreateIdentityCenterApplication() {
    return this.to('CreateIdentityCenterApplication');
  }

  /**
   * Grants permission to create an Amazon CodeCatalyst space
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toCreateSpace() {
    return this.to('CreateSpace');
  }

  /**
   * Grants permission to create an administrator role assignment for a given Amazon CodeCatalyst space and IAM Identity Center application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toCreateSpaceAdminRoleAssignment() {
    return this.to('CreateSpaceAdminRoleAssignment');
  }

  /**
   * Grants permission to delete a connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toDeleteConnection() {
    return this.to('DeleteConnection');
  }

  /**
   * Grants permission to delete an IAM Identity Center application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toDeleteIdentityCenterApplication() {
    return this.to('DeleteIdentityCenterApplication');
  }

  /**
   * Grants permission to disassociate an IAM role from a connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toDisassociateIamRoleFromConnection() {
    return this.to('DisassociateIamRoleFromConnection');
  }

  /**
   * Grants permission to disassociate an IAM Identity Center application from an Amazon CodeCatalyst space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toDisassociateIdentityCenterApplicationFromSpace() {
    return this.to('DisassociateIdentityCenterApplicationFromSpace');
  }

  /**
   * Grants permission to disassociate an identity from an IAM Identity Center application for an Amazon CodeCatalyst space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toDisassociateIdentityFromIdentityCenterApplication() {
    return this.to('DisassociateIdentityFromIdentityCenterApplication');
  }

  /**
   * Grants permission to describe the billing authorization for a connection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toGetBillingAuthorization() {
    return this.to('GetBillingAuthorization');
  }

  /**
   * Grants permission to get a connection
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toGetConnection() {
    return this.to('GetConnection');
  }

  /**
   * Grants permission to get information about an IAM Identity Center application
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toGetIdentityCenterApplication() {
    return this.to('GetIdentityCenterApplication');
  }

  /**
   * Grants permission to get a pending request to connect this account to an Amazon CodeCatalyst space
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toGetPendingConnection() {
    return this.to('GetPendingConnection');
  }

  /**
   * Grants permission to list connections that are not pending
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toListConnections() {
    return this.to('ListConnections');
  }

  /**
   * Grants permission to list IAM roles associated with a connection
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toListIamRolesForConnection() {
    return this.to('ListIamRolesForConnection');
  }

  /**
   * Grants permission to view a list of all IAM Identity Center applications in the account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toListIdentityCenterApplications() {
    return this.to('ListIdentityCenterApplications');
  }

  /**
   * Grants permission to view a list of IAM Identity Center applications by Amazon CodeCatalyst space
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toListIdentityCenterApplicationsForSpace() {
    return this.to('ListIdentityCenterApplicationsForSpace');
  }

  /**
   * Grants permission to view a list of Amazon CodeCatalyst spaces by IAM Identity Center application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toListSpacesForIdentityCenterApplication() {
    return this.to('ListSpacesForIdentityCenterApplication');
  }

  /**
   * Grants permission to list tags for an Amazon CodeCatalyst resource
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to create or update the billing authorization for a connection
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toPutBillingAuthorization() {
    return this.to('PutBillingAuthorization');
  }

  /**
   * Grants permission to reject a request to connect this account to an Amazon CodeCatalyst space
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toRejectConnection() {
    return this.to('RejectConnection');
  }

  /**
   * Grants permission to synchronize an IAM Identity Center application with the backing identity store
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toSynchronizeIdentityCenterApplication() {
    return this.to('SynchronizeIdentityCenterApplication');
  }

  /**
   * Grants permission to tag an Amazon CodeCatalyst resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to untag an Amazon CodeCatalyst resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsResourceTag()
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-connections
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an IAM Identity Center application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/security-iam.html#permissions-reference-applications
   */
  public toUpdateIdentityCenterApplication() {
    return this.to('UpdateIdentityCenterApplication');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptConnection',
      'AssociateIamRoleToConnection',
      'AssociateIdentityCenterApplicationToSpace',
      'AssociateIdentityToIdentityCenterApplication',
      'BatchAssociateIdentitiesToIdentityCenterApplication',
      'BatchDisassociateIdentitiesFromIdentityCenterApplication',
      'CreateIdentityCenterApplication',
      'CreateSpace',
      'CreateSpaceAdminRoleAssignment',
      'DeleteConnection',
      'DeleteIdentityCenterApplication',
      'DisassociateIamRoleFromConnection',
      'DisassociateIdentityCenterApplicationFromSpace',
      'DisassociateIdentityFromIdentityCenterApplication',
      'PutBillingAuthorization',
      'RejectConnection',
      'SynchronizeIdentityCenterApplication',
      'UpdateIdentityCenterApplication'
    ],
    Read: [
      'GetBillingAuthorization',
      'GetConnection',
      'GetIdentityCenterApplication',
      'GetPendingConnection',
      'ListTagsForResource'
    ],
    List: [
      'ListConnections',
      'ListIamRolesForConnection',
      'ListIdentityCenterApplications',
      'ListIdentityCenterApplicationsForSpace',
      'ListSpacesForIdentityCenterApplication'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type connections to the statement
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   *
   * @param connectionId - Identifier for the connectionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnections(connectionId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Codecatalyst.defaultPartition }:codecatalyst:${ region || '*' }:${ account || '*' }:/connections/${ connectionId }`);
  }

  /**
   * Adds a resource of type identity-center-applications to the statement
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   *
   * @param identityCenterApplicationId - Identifier for the identityCenterApplicationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onIdentityCenterApplications(identityCenterApplicationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Codecatalyst.defaultPartition }:codecatalyst:${ region || '*' }:${ account || '*' }:/identity-center-applications/${ identityCenterApplicationId }`);
  }

  /**
   * Adds a resource of type space to the statement
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   *
   * @param spaceId - Identifier for the spaceId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onSpace(spaceId: string, partition?: string) {
    return this.on(`arn:${ partition || Codecatalyst.defaultPartition }:codecatalyst:::space/${ spaceId }`);
  }

  /**
   * Adds a resource of type project to the statement
   *
   * https://docs.aws.amazon.com/codecatalyst/latest/userguide/#
   *
   * @param spaceId - Identifier for the spaceId.
   * @param projectId - Identifier for the projectId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onProject(spaceId: string, projectId: string, partition?: string) {
    return this.on(`arn:${ partition || Codecatalyst.defaultPartition }:codecatalyst:::space/${ spaceId }/project/${ projectId }`);
  }

  /**
   * Filters access by a tag's key and value in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toAcceptConnection()
   * - .toCreateSpace()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the presence of tag key-value pairs in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toAssociateIamRoleToConnection()
   * - .toDeleteConnection()
   * - .toDisassociateIamRoleFromConnection()
   * - .toGetBillingAuthorization()
   * - .toGetConnection()
   * - .toListIamRolesForConnection()
   * - .toListTagsForResource()
   * - .toPutBillingAuthorization()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * Applies to resource types:
   * - connections
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Filters access by the tag keys in a request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toAcceptConnection()
   * - .toCreateSpace()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
