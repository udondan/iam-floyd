import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

/**
 * Statement provider for service [cleanrooms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscleanrooms.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Cleanrooms extends PolicyStatement {
  public servicePrefix = 'cleanrooms';

  /**
   * Statement provider for service [cleanrooms](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscleanrooms.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to view details for schemas
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - cleanrooms:GetSchema
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_BatchGetSchema.html
   */
  public toBatchGetSchema() {
    return this.to('BatchGetSchema');
  }

  /**
   * Grants permission to create a new collaboration, a shared data collaboration environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateCollaboration.html
   */
  public toCreateCollaboration() {
    return this.to('CreateCollaboration');
  }

  /**
   * Grants permission to create a new configured table
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - glue:BatchGetPartition
   * - glue:GetDatabase
   * - glue:GetDatabases
   * - glue:GetPartition
   * - glue:GetPartitions
   * - glue:GetSchemaVersion
   * - glue:GetTable
   * - glue:GetTables
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateConfiguredTable.html
   */
  public toCreateConfiguredTable() {
    return this.to('CreateConfiguredTable');
  }

  /**
   * Grants permission to create a analysis rule for a configured table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateConfiguredTableAnalysisRule.html
   */
  public toCreateConfiguredTableAnalysisRule() {
    return this.to('CreateConfiguredTableAnalysisRule');
  }

  /**
   * Grants permission to link a configured table with a collaboration by creating a new association
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateConfiguredTableAssociation.html
   */
  public toCreateConfiguredTableAssociation() {
    return this.to('CreateConfiguredTableAssociation');
  }

  /**
   * Grants permission to join collaborations by creating a membership
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - logs:CreateLogDelivery
   * - logs:CreateLogGroup
   * - logs:DeleteLogDelivery
   * - logs:DescribeLogGroups
   * - logs:DescribeResourcePolicies
   * - logs:GetLogDelivery
   * - logs:ListLogDeliveries
   * - logs:PutResourcePolicy
   * - logs:UpdateLogDelivery
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateMembership.html
   */
  public toCreateMembership() {
    return this.to('CreateMembership');
  }

  /**
   * Grants permission to delete an existing collaboration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteCollaboration.html
   */
  public toDeleteCollaboration() {
    return this.to('DeleteCollaboration');
  }

  /**
   * Grants permission to delete a configured table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteConfiguredTable.html
   */
  public toDeleteConfiguredTable() {
    return this.to('DeleteConfiguredTable');
  }

  /**
   * Grants permission to delete an existing analysis rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteConfiguredTableAnalysisRule.html
   */
  public toDeleteConfiguredTableAnalysisRule() {
    return this.to('DeleteConfiguredTableAnalysisRule');
  }

  /**
   * Grants permission to remove a configured table association from a collaboration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteConfiguredTableAssociation.html
   */
  public toDeleteConfiguredTableAssociation() {
    return this.to('DeleteConfiguredTableAssociation');
  }

  /**
   * Grants permission to delete members from a collaboration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteMember.html
   */
  public toDeleteMember() {
    return this.to('DeleteMember');
  }

  /**
   * Grants permission to leave collaborations by deleting a membership
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteMembership.html
   */
  public toDeleteMembership() {
    return this.to('DeleteMembership');
  }

  /**
   * Grants permission to view details for a collaboration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetCollaboration.html
   */
  public toGetCollaboration() {
    return this.to('GetCollaboration');
  }

  /**
   * Grants permission to view details for a configured table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetConfiguredTable.html
   */
  public toGetConfiguredTable() {
    return this.to('GetConfiguredTable');
  }

  /**
   * Grants permission to view analysis rules for a configured table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetConfiguredTableAnalysisRule.html
   */
  public toGetConfiguredTableAnalysisRule() {
    return this.to('GetConfiguredTableAnalysisRule');
  }

  /**
   * Grants permission to view details for a configured table association
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetConfiguredTableAssociation.html
   */
  public toGetConfiguredTableAssociation() {
    return this.to('GetConfiguredTableAssociation');
  }

  /**
   * Grants permission to view details about a membership
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetMembership.html
   */
  public toGetMembership() {
    return this.to('GetMembership');
  }

  /**
   * Grants permission to view a protected query
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetProtectedQuery.html
   */
  public toGetProtectedQuery() {
    return this.to('GetProtectedQuery');
  }

  /**
   * Grants permission to view details for a schema
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetSchema.html
   */
  public toGetSchema() {
    return this.to('GetSchema');
  }

  /**
   * Grants permission to view analysis rules associated with a schema
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetSchemaAnalysisRule.html
   */
  public toGetSchemaAnalysisRule() {
    return this.to('GetSchemaAnalysisRule');
  }

  /**
   * Grants permission to list available collaborations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListCollaborations.html
   */
  public toListCollaborations() {
    return this.to('ListCollaborations');
  }

  /**
   * Grants permission to list available configured table associations for a membership
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListConfiguredTableAssociations.html
   */
  public toListConfiguredTableAssociations() {
    return this.to('ListConfiguredTableAssociations');
  }

  /**
   * Grants permission to list available configured tables
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListConfiguredTables.html
   */
  public toListConfiguredTables() {
    return this.to('ListConfiguredTables');
  }

  /**
   * Grants permission to list the members of a collaboration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListMembers.html
   */
  public toListMembers() {
    return this.to('ListMembers');
  }

  /**
   * Grants permission to list available memberships
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListMemberships.html
   */
  public toListMemberships() {
    return this.to('ListMemberships');
  }

  /**
   * Grants permission to list protected queries
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListProtectedQueries.html
   */
  public toListProtectedQueries() {
    return this.to('ListProtectedQueries');
  }

  /**
   * Grants permission to view available schemas for a collaboration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListSchemas.html
   */
  public toListSchemas() {
    return this.to('ListSchemas');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to start protected queries
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cleanrooms:GetSchema
   * - s3:GetBucketLocation
   * - s3:ListBucket
   * - s3:PutObject
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_StartProtectedQuery.html
   */
  public toStartProtectedQuery() {
    return this.to('StartProtectedQuery');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_TagResource.html
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
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update details of the collaboration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateCollaboration.html
   */
  public toUpdateCollaboration() {
    return this.to('UpdateCollaboration');
  }

  /**
   * Grants permission to update an existing configured table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateConfiguredTable.html
   */
  public toUpdateConfiguredTable() {
    return this.to('UpdateConfiguredTable');
  }

  /**
   * Grants permission to update analysis rules for a configured table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateConfiguredTableAnalysisRule.html
   */
  public toUpdateConfiguredTableAnalysisRule() {
    return this.to('UpdateConfiguredTableAnalysisRule');
  }

  /**
   * Grants permission to update a configured table association
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateConfiguredTableAssociation.html
   */
  public toUpdateConfiguredTableAssociation() {
    return this.to('UpdateConfiguredTableAssociation');
  }

  /**
   * Grants permission to update details of a membership
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - logs:CreateLogDelivery
   * - logs:CreateLogGroup
   * - logs:DeleteLogDelivery
   * - logs:DescribeLogGroups
   * - logs:DescribeResourcePolicies
   * - logs:GetLogDelivery
   * - logs:ListLogDeliveries
   * - logs:PutResourcePolicy
   * - logs:UpdateLogDelivery
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateMembership.html
   */
  public toUpdateMembership() {
    return this.to('UpdateMembership');
  }

  /**
   * Grants permission to update protected queries
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateProtectedQuery.html
   */
  public toUpdateProtectedQuery() {
    return this.to('UpdateProtectedQuery');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'BatchGetSchema',
      'GetCollaboration',
      'GetConfiguredTable',
      'GetConfiguredTableAnalysisRule',
      'GetConfiguredTableAssociation',
      'GetMembership',
      'GetProtectedQuery',
      'GetSchema',
      'GetSchemaAnalysisRule'
    ],
    Write: [
      'CreateCollaboration',
      'CreateConfiguredTable',
      'CreateConfiguredTableAnalysisRule',
      'CreateConfiguredTableAssociation',
      'CreateMembership',
      'DeleteCollaboration',
      'DeleteConfiguredTable',
      'DeleteConfiguredTableAnalysisRule',
      'DeleteConfiguredTableAssociation',
      'DeleteMember',
      'DeleteMembership',
      'StartProtectedQuery',
      'UpdateCollaboration',
      'UpdateConfiguredTable',
      'UpdateConfiguredTableAnalysisRule',
      'UpdateConfiguredTableAssociation',
      'UpdateMembership',
      'UpdateProtectedQuery'
    ],
    List: [
      'ListCollaborations',
      'ListConfiguredTableAssociations',
      'ListConfiguredTables',
      'ListMembers',
      'ListMemberships',
      'ListProtectedQueries',
      'ListSchemas',
      'ListTagsForResource'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Collaboration to the statement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html
   *
   * @param collaborationId - Identifier for the collaborationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCollaboration(collaborationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cleanrooms.defaultPartition }:cleanrooms:${ region || '*' }:${ account || '*' }:collaboration/${ collaborationId }`);
  }

  /**
   * Adds a resource of type ConfiguredTable to the statement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html
   *
   * @param configuredTableId - Identifier for the configuredTableId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfiguredTable(configuredTableId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cleanrooms.defaultPartition }:cleanrooms:${ region || '*' }:${ account || '*' }:configuredtable/${ configuredTableId }`);
  }

  /**
   * Adds a resource of type ConfiguredTableAssociation to the statement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html
   *
   * @param membershipId - Identifier for the membershipId.
   * @param configuredTableAssociationId - Identifier for the configuredTableAssociationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfiguredTableAssociation(membershipId: string, configuredTableAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cleanrooms.defaultPartition }:cleanrooms:${ region || '*' }:${ account || '*' }:membership/${ membershipId }/configuredtableassociation/${ configuredTableAssociationId }`);
  }

  /**
   * Adds a resource of type Membership to the statement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html
   *
   * @param membershipId - Identifier for the membershipId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMembership(membershipId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Cleanrooms.defaultPartition }:cleanrooms:${ region || '*' }:${ account || '*' }:membership/${ membershipId }`);
  }
}
