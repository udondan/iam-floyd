import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

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
   * Grants permission to view details of analysisTemplates associated to the collaboration
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - cleanrooms:GetCollaborationAnalysisTemplate
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_BatchGetCollaborationAnalysisTemplate.html
   */
  public toBatchGetCollaborationAnalysisTemplate() {
    return this.to('BatchGetCollaborationAnalysisTemplate');
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
   * Grants permission to view analysis rules associated with schemas
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - cleanrooms:GetSchema
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_BatchGetSchemaAnalysisRule.html
   */
  public toBatchGetSchemaAnalysisRule() {
    return this.to('BatchGetSchemaAnalysisRule');
  }

  /**
   * Grants permission to create a new analysis template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateAnalysisTemplate.html
   */
  public toCreateAnalysisTemplate() {
    return this.to('CreateAnalysisTemplate');
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
   * Grants permission to link a Cleanrooms ML configured audience model with a collaboration by creating a new association
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cleanrooms-ml:GetConfiguredAudienceModel
   * - cleanrooms-ml:GetConfiguredAudienceModelPolicy
   * - cleanrooms-ml:PutConfiguredAudienceModelPolicy
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateConfiguredAudienceModelAssociation.html
   */
  public toCreateConfiguredAudienceModelAssociation() {
    return this.to('CreateConfiguredAudienceModelAssociation');
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
   * Grants permission to create an analysis rule for a configured table association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateConfiguredTableAssociationAnalysisRule.html
   */
  public toCreateConfiguredTableAssociationAnalysisRule() {
    return this.to('CreateConfiguredTableAssociationAnalysisRule');
  }

  /**
   * Grants permission to link an id mapping workflow with a collaboration by creating a new id mapping table
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - entityresolution:AddPolicyStatement
   * - entityresolution:GetIdMappingWorkflow
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateIdMappingTable.html
   */
  public toCreateIdMappingTable() {
    return this.to('CreateIdMappingTable');
  }

  /**
   * Grants permission to link an AWS Entity Resolution Id Namespace with a collaboration by creating a new association
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - entityresolution:AddPolicyStatement
   * - entityresolution:GetIdNamespace
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateIdNamespaceAssociation.html
   */
  public toCreateIdNamespaceAssociation() {
    return this.to('CreateIdNamespaceAssociation');
  }

  /**
   * Grants permission to join collaborations by creating a membership
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   * - logs:CreateLogDelivery
   * - logs:CreateLogGroup
   * - logs:DeleteLogDelivery
   * - logs:DescribeLogGroups
   * - logs:DescribeResourcePolicies
   * - logs:GetLogDelivery
   * - logs:ListLogDeliveries
   * - logs:PutResourcePolicy
   * - logs:UpdateLogDelivery
   * - s3:GetBucketLocation
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreateMembership.html
   */
  public toCreateMembership() {
    return this.to('CreateMembership');
  }

  /**
   * Grants permission to create a new privacy budget template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_CreatePrivacyBudgetTemplate.html
   */
  public toCreatePrivacyBudgetTemplate() {
    return this.to('CreatePrivacyBudgetTemplate');
  }

  /**
   * Grants permission to delete an existing analysis template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteAnalysisTemplate.html
   */
  public toDeleteAnalysisTemplate() {
    return this.to('DeleteAnalysisTemplate');
  }

  /**
   * Grants permission to delete an existing collaboration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cleanrooms-ml:DeleteConfiguredAudienceModelPolicy
   * - cleanrooms-ml:GetConfiguredAudienceModelPolicy
   * - cleanrooms-ml:PutConfiguredAudienceModelPolicy
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteCollaboration.html
   */
  public toDeleteCollaboration() {
    return this.to('DeleteCollaboration');
  }

  /**
   * Grants permission to delete an existing configured audience model association
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cleanrooms-ml:DeleteConfiguredAudienceModelPolicy
   * - cleanrooms-ml:GetConfiguredAudienceModelPolicy
   * - cleanrooms-ml:PutConfiguredAudienceModelPolicy
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteConfiguredAudienceModelAssociation.html
   */
  public toDeleteConfiguredAudienceModelAssociation() {
    return this.to('DeleteConfiguredAudienceModelAssociation');
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
   * Grants permission to delete an existing configured table association analysis rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteConfiguredTableAssociationAnalysisRule.html
   */
  public toDeleteConfiguredTableAssociationAnalysisRule() {
    return this.to('DeleteConfiguredTableAssociationAnalysisRule');
  }

  /**
   * Grants permission to remove an id mapping table from a collaboration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - entityresolution:DeletePolicyStatement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteIdMappingTable.html
   */
  public toDeleteIdMappingTable() {
    return this.to('DeleteIdMappingTable');
  }

  /**
   * Grants permission to remove an Id Namespace Association from a collaboration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - entityresolution:DeletePolicyStatement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeleteIdNamespaceAssociation.html
   */
  public toDeleteIdNamespaceAssociation() {
    return this.to('DeleteIdNamespaceAssociation');
  }

  /**
   * Grants permission to delete members from a collaboration
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cleanrooms-ml:DeleteConfiguredAudienceModelPolicy
   * - cleanrooms-ml:GetConfiguredAudienceModelPolicy
   * - cleanrooms-ml:PutConfiguredAudienceModelPolicy
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
   * Grants permission to delete an existing privacy budget template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_DeletePrivacyBudgetTemplate.html
   */
  public toDeletePrivacyBudgetTemplate() {
    return this.to('DeletePrivacyBudgetTemplate');
  }

  /**
   * Grants permission to view details for an analysis template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetAnalysisTemplate.html
   */
  public toGetAnalysisTemplate() {
    return this.to('GetAnalysisTemplate');
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
   * Grants permission to view details for an analysis template within a collaboration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetCollaborationAnalysisTemplate.html
   */
  public toGetCollaborationAnalysisTemplate() {
    return this.to('GetCollaborationAnalysisTemplate');
  }

  /**
   * Grants permission to view details for a configured audience model association within a collaboration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetCollaborationConfiguredAudienceModelAssociation.html
   */
  public toGetCollaborationConfiguredAudienceModelAssociation() {
    return this.to('GetCollaborationConfiguredAudienceModelAssociation');
  }

  /**
   * Grants permission to get id namespace association within a collaboration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetCollaborationIdNamespaceAssociation.html
   */
  public toGetCollaborationIdNamespaceAssociation() {
    return this.to('GetCollaborationIdNamespaceAssociation');
  }

  /**
   * Grants permission to view details for a privacy budget template within a collaboration
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetCollaborationPrivacyBudgetTemplate.html
   */
  public toGetCollaborationPrivacyBudgetTemplate() {
    return this.to('GetCollaborationPrivacyBudgetTemplate');
  }

  /**
   * Grants permission to view details for a configured audience model association
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetConfiguredAudienceModelAssociation.html
   */
  public toGetConfiguredAudienceModelAssociation() {
    return this.to('GetConfiguredAudienceModelAssociation');
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
   * Grants permission to view analysis rules for a configured table association
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetConfiguredTableAssociationAnalysisRule.html
   */
  public toGetConfiguredTableAssociationAnalysisRule() {
    return this.to('GetConfiguredTableAssociationAnalysisRule');
  }

  /**
   * Grants permission to view details of an id mapping table
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetIdMappingTable.html
   */
  public toGetIdMappingTable() {
    return this.to('GetIdMappingTable');
  }

  /**
   * Grants permission to view details of an id namespace association
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - entityresolution:GetIdNamespace
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetIdNamespaceAssociation.html
   */
  public toGetIdNamespaceAssociation() {
    return this.to('GetIdNamespaceAssociation');
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
   * Grants permission to view details for a privacy budget template
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetPrivacyBudgetTemplate.html
   */
  public toGetPrivacyBudgetTemplate() {
    return this.to('GetPrivacyBudgetTemplate');
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
   * Dependent actions:
   * - cleanrooms:GetSchema
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_GetSchemaAnalysisRule.html
   */
  public toGetSchemaAnalysisRule() {
    return this.to('GetSchemaAnalysisRule');
  }

  /**
   * Grants permission to list available analysis templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListAnalysisTemplates.html
   */
  public toListAnalysisTemplates() {
    return this.to('ListAnalysisTemplates');
  }

  /**
   * Grants permission to list available analysis templates within a collaboration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListCollaborationAnalysisTemplates.html
   */
  public toListCollaborationAnalysisTemplates() {
    return this.to('ListCollaborationAnalysisTemplates');
  }

  /**
   * Grants permission to list available configured audience model association within a collaboration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListCollaborationConfiguredAudienceModelAssociations.html
   */
  public toListCollaborationConfiguredAudienceModelAssociations() {
    return this.to('ListCollaborationConfiguredAudienceModelAssociations');
  }

  /**
   * Grants permission to list id namespace within a collaboration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListCollaborationIdNamespaceAssociations.html
   */
  public toListCollaborationIdNamespaceAssociations() {
    return this.to('ListCollaborationIdNamespaceAssociations');
  }

  /**
   * Grants permission to list available privacy budget templates within a collaboration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListCollaborationPrivacyBudgetTemplates.html
   */
  public toListCollaborationPrivacyBudgetTemplates() {
    return this.to('ListCollaborationPrivacyBudgetTemplates');
  }

  /**
   * Grants permission to list privacy budgets within a collaboration
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListCollaborationPrivacyBudgets.html
   */
  public toListCollaborationPrivacyBudgets() {
    return this.to('ListCollaborationPrivacyBudgets');
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
   * Grants permission to list available configured audience model associations for a membership
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListConfiguredAudienceModelAssociations.html
   */
  public toListConfiguredAudienceModelAssociations() {
    return this.to('ListConfiguredAudienceModelAssociations');
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
   * Grants permission to list available id mapping tables for a membership
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListIdMappingTables.html
   */
  public toListIdMappingTables() {
    return this.to('ListIdMappingTables');
  }

  /**
   * Grants permission to list entity resolution data associations for a membership
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListIdNamespaceAssociations.html
   */
  public toListIdNamespaceAssociations() {
    return this.to('ListIdNamespaceAssociations');
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
   * Grants permission to list available privacy budget templates
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListPrivacyBudgetTemplates.html
   */
  public toListPrivacyBudgetTemplates() {
    return this.to('ListPrivacyBudgetTemplates');
  }

  /**
   * Grants permission to list available privacy budgets
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_ListPrivacyBudgets.html
   */
  public toListPrivacyBudgets() {
    return this.to('ListPrivacyBudgets');
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
   * Grants permission to start an Id Mapping Job in AWS Entity Resolution to generate id mapping results in cleanrooms collaboration.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - entityresolution:GetIdMappingWorkflow
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_PopulateIdMappingTable.html
   */
  public toPopulateIdMappingTable() {
    return this.to('PopulateIdMappingTable');
  }

  /**
   * Grants permission to preview privacy budget template settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_PreviewPrivacyImpact.html
   */
  public toPreviewPrivacyImpact() {
    return this.to('PreviewPrivacyImpact');
  }

  /**
   * Grants permission to start protected queries
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - cleanrooms:GetCollaborationAnalysisTemplate
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
   * Grants permission to update details of the analysis template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateAnalysisTemplate.html
   */
  public toUpdateAnalysisTemplate() {
    return this.to('UpdateAnalysisTemplate');
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
   * Grants permission to update a configured audience model association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateConfiguredAudienceModelAssociation.html
   */
  public toUpdateConfiguredAudienceModelAssociation() {
    return this.to('UpdateConfiguredAudienceModelAssociation');
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
   * Grants permission to update analysis rules for a configured table association
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateConfiguredTableAssociationAnalysisRule.html
   */
  public toUpdateConfiguredTableAssociationAnalysisRule() {
    return this.to('UpdateConfiguredTableAssociationAnalysisRule');
  }

  /**
   * Grants permission to update an id mapping table
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateIdMappingTable.html
   */
  public toUpdateIdMappingTable() {
    return this.to('UpdateIdMappingTable');
  }

  /**
   * Grants permission to update a entity resolution input association
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - entityresolution:GetIdNamespace
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateIdNamespaceAssociation.html
   */
  public toUpdateIdNamespaceAssociation() {
    return this.to('UpdateIdNamespaceAssociation');
  }

  /**
   * Grants permission to update details of a membership
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   * - logs:CreateLogDelivery
   * - logs:CreateLogGroup
   * - logs:DeleteLogDelivery
   * - logs:DescribeLogGroups
   * - logs:DescribeResourcePolicies
   * - logs:GetLogDelivery
   * - logs:ListLogDeliveries
   * - logs:PutResourcePolicy
   * - logs:UpdateLogDelivery
   * - s3:GetBucketLocation
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdateMembership.html
   */
  public toUpdateMembership() {
    return this.to('UpdateMembership');
  }

  /**
   * Grants permission to update details of the privacy budget template
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/apireference/API_UpdatePrivacyBudgetTemplate.html
   */
  public toUpdatePrivacyBudgetTemplate() {
    return this.to('UpdatePrivacyBudgetTemplate');
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
      'BatchGetCollaborationAnalysisTemplate',
      'BatchGetSchema',
      'BatchGetSchemaAnalysisRule',
      'GetAnalysisTemplate',
      'GetCollaboration',
      'GetCollaborationAnalysisTemplate',
      'GetCollaborationConfiguredAudienceModelAssociation',
      'GetCollaborationIdNamespaceAssociation',
      'GetCollaborationPrivacyBudgetTemplate',
      'GetConfiguredAudienceModelAssociation',
      'GetConfiguredTable',
      'GetConfiguredTableAnalysisRule',
      'GetConfiguredTableAssociation',
      'GetConfiguredTableAssociationAnalysisRule',
      'GetIdMappingTable',
      'GetIdNamespaceAssociation',
      'GetMembership',
      'GetPrivacyBudgetTemplate',
      'GetProtectedQuery',
      'GetSchema',
      'GetSchemaAnalysisRule',
      'PreviewPrivacyImpact'
    ],
    Write: [
      'CreateAnalysisTemplate',
      'CreateCollaboration',
      'CreateConfiguredAudienceModelAssociation',
      'CreateConfiguredTable',
      'CreateConfiguredTableAnalysisRule',
      'CreateConfiguredTableAssociation',
      'CreateConfiguredTableAssociationAnalysisRule',
      'CreateIdMappingTable',
      'CreateIdNamespaceAssociation',
      'CreateMembership',
      'CreatePrivacyBudgetTemplate',
      'DeleteAnalysisTemplate',
      'DeleteCollaboration',
      'DeleteConfiguredAudienceModelAssociation',
      'DeleteConfiguredTable',
      'DeleteConfiguredTableAnalysisRule',
      'DeleteConfiguredTableAssociation',
      'DeleteConfiguredTableAssociationAnalysisRule',
      'DeleteIdMappingTable',
      'DeleteIdNamespaceAssociation',
      'DeleteMember',
      'DeleteMembership',
      'DeletePrivacyBudgetTemplate',
      'PopulateIdMappingTable',
      'StartProtectedQuery',
      'UpdateAnalysisTemplate',
      'UpdateCollaboration',
      'UpdateConfiguredAudienceModelAssociation',
      'UpdateConfiguredTable',
      'UpdateConfiguredTableAnalysisRule',
      'UpdateConfiguredTableAssociation',
      'UpdateConfiguredTableAssociationAnalysisRule',
      'UpdateIdMappingTable',
      'UpdateIdNamespaceAssociation',
      'UpdateMembership',
      'UpdatePrivacyBudgetTemplate',
      'UpdateProtectedQuery'
    ],
    List: [
      'ListAnalysisTemplates',
      'ListCollaborationAnalysisTemplates',
      'ListCollaborationConfiguredAudienceModelAssociations',
      'ListCollaborationIdNamespaceAssociations',
      'ListCollaborationPrivacyBudgetTemplates',
      'ListCollaborationPrivacyBudgets',
      'ListCollaborations',
      'ListConfiguredAudienceModelAssociations',
      'ListConfiguredTableAssociations',
      'ListConfiguredTables',
      'ListIdMappingTables',
      'ListIdNamespaceAssociations',
      'ListMembers',
      'ListMemberships',
      'ListPrivacyBudgetTemplates',
      'ListPrivacyBudgets',
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
   * Adds a resource of type analysistemplate to the statement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html
   *
   * @param membershipId - Identifier for the membershipId.
   * @param analysisTemplateId - Identifier for the analysisTemplateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onAnalysistemplate(membershipId: string, analysisTemplateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:membership/${ membershipId }/analysistemplate/${ analysisTemplateId }`);
  }

  /**
   * Adds a resource of type collaboration to the statement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html
   *
   * @param collaborationId - Identifier for the collaborationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCollaboration(collaborationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:collaboration/${ collaborationId }`);
  }

  /**
   * Adds a resource of type configuredaudiencemodelassociation to the statement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html
   *
   * @param membershipId - Identifier for the membershipId.
   * @param configuredAudienceModelAssociationId - Identifier for the configuredAudienceModelAssociationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfiguredaudiencemodelassociation(membershipId: string, configuredAudienceModelAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:membership/${ membershipId }/configuredaudiencemodelassociation/${ configuredAudienceModelAssociationId }`);
  }

  /**
   * Adds a resource of type configuredtable to the statement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html
   *
   * @param configuredTableId - Identifier for the configuredTableId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfiguredtable(configuredTableId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:configuredtable/${ configuredTableId }`);
  }

  /**
   * Adds a resource of type configuredtableassociation to the statement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html
   *
   * @param membershipId - Identifier for the membershipId.
   * @param configuredTableAssociationId - Identifier for the configuredTableAssociationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConfiguredtableassociation(membershipId: string, configuredTableAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:membership/${ membershipId }/configuredtableassociation/${ configuredTableAssociationId }`);
  }

  /**
   * Adds a resource of type idmappingtable to the statement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html
   *
   * @param membershipId - Identifier for the membershipId.
   * @param idMappingTableId - Identifier for the idMappingTableId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdmappingtable(membershipId: string, idMappingTableId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:membership/${ membershipId }/idmappingtable/${ idMappingTableId }`);
  }

  /**
   * Adds a resource of type idnamespaceassociation to the statement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html
   *
   * @param membershipId - Identifier for the membershipId.
   * @param idNamespaceAssociationId - Identifier for the idNamespaceAssociationId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onIdnamespaceassociation(membershipId: string, idNamespaceAssociationId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:membership/${ membershipId }/idnamespaceassociation/${ idNamespaceAssociationId }`);
  }

  /**
   * Adds a resource of type membership to the statement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html
   *
   * @param membershipId - Identifier for the membershipId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onMembership(membershipId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:membership/${ membershipId }`);
  }

  /**
   * Adds a resource of type privacybudgettemplate to the statement
   *
   * https://docs.aws.amazon.com/clean-rooms/latest/userguide/security-iam.html
   *
   * @param membershipId - Identifier for the membershipId.
   * @param privacyBudgetTemplateId - Identifier for the privacyBudgetTemplateId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onPrivacybudgettemplate(membershipId: string, privacyBudgetTemplateId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:cleanrooms:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:membership/${ membershipId }/privacybudgettemplate/${ privacyBudgetTemplateId }`);
  }

  /**
   * Filters access by the tags that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateAnalysisTemplate()
   * - .toCreateCollaboration()
   * - .toCreateConfiguredAudienceModelAssociation()
   * - .toCreateConfiguredTable()
   * - .toCreateConfiguredTableAssociation()
   * - .toCreateConfiguredTableAssociationAnalysisRule()
   * - .toCreateIdMappingTable()
   * - .toCreateIdNamespaceAssociation()
   * - .toCreateMembership()
   * - .toCreatePrivacyBudgetTemplate()
   * - .toTagResource()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tags associated with the resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to actions:
   * - .toCreateAnalysisTemplate()
   * - .toCreateCollaboration()
   * - .toCreateConfiguredAudienceModelAssociation()
   * - .toCreateConfiguredTable()
   * - .toCreateConfiguredTableAssociation()
   * - .toCreateConfiguredTableAssociationAnalysisRule()
   * - .toCreateIdMappingTable()
   * - .toCreateIdNamespaceAssociation()
   * - .toCreateMembership()
   * - .toCreatePrivacyBudgetTemplate()
   *
   * Applies to resource types:
   * - analysistemplate
   * - collaboration
   * - configuredaudiencemodelassociation
   * - configuredtable
   * - configuredtableassociation
   * - idmappingtable
   * - idnamespaceassociation
   * - membership
   * - privacybudgettemplate
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by the tag keys that are passed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateAnalysisTemplate()
   * - .toCreateCollaboration()
   * - .toCreateConfiguredAudienceModelAssociation()
   * - .toCreateConfiguredTable()
   * - .toCreateConfiguredTableAssociation()
   * - .toCreateConfiguredTableAssociationAnalysisRule()
   * - .toCreateIdMappingTable()
   * - .toCreateIdNamespaceAssociation()
   * - .toCreateMembership()
   * - .toCreatePrivacyBudgetTemplate()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }
}
