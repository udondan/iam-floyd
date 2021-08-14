import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [route53-recovery-readiness](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoveryreadiness.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Route53RecoveryReadiness extends PolicyStatement {
  public servicePrefix = 'route53-recovery-readiness';

  /**
   * Statement provider for service [route53-recovery-readiness](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53recoveryreadiness.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to Create a new Cell
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/cells.html
   */
  public toCreateCell() {
    return this.to('CreateCell');
  }

  /**
   * Grants permission to Create a new Cross Account Authorization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/crossaccountauthorizations.html
   */
  public toCreateCrossAccountAuthorization() {
    return this.to('CreateCrossAccountAuthorization');
  }

  /**
   * Grants permission to Create a new Readiness Check
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks.html
   */
  public toCreateReadinessCheck() {
    return this.to('CreateReadinessCheck');
  }

  /**
   * Grants permission to Create a Recovery Group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups.html
   */
  public toCreateRecoveryGroup() {
    return this.to('CreateRecoveryGroup');
  }

  /**
   * Grants permission to Create a new Resource Set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets.html
   */
  public toCreateResourceSet() {
    return this.to('CreateResourceSet');
  }

  /**
   * Grants permission to Delete an existing Cell
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/cells-cellname.html
   */
  public toDeleteCell() {
    return this.to('DeleteCell');
  }

  /**
   * Grants permission to Delete a Cross Account Authorization
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/crossaccountauthorizations-crossaccountauthorization.html
   */
  public toDeleteCrossAccountAuthorization() {
    return this.to('DeleteCrossAccountAuthorization');
  }

  /**
   * Grants permission to Delete an existing Readiness Check
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname.html
   */
  public toDeleteReadinessCheck() {
    return this.to('DeleteReadinessCheck');
  }

  /**
   * Grants permission to Delete an existing Recovery Group
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname.html
   */
  public toDeleteRecoveryGroup() {
    return this.to('DeleteRecoveryGroup');
  }

  /**
   * Grants permission to Delete an existing Readiness Check
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets-resourcesetname.html
   */
  public toDeleteResourceSet() {
    return this.to('DeleteResourceSet');
  }

  /**
   * Grants permission to Get Architecture Recommendations for a Recovery Group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname-architecturerecommendations.html
   */
  public toGetArchitectureRecommendations() {
    return this.to('GetArchitectureRecommendations');
  }

  /**
   * Grants permission to Get an existing Cell
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/cells-cellname.html
   */
  public toGetCell() {
    return this.to('GetCell');
  }

  /**
   * Grants permission to Get Readiness Summary for Cell
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/cellreadiness-cellname.html
   */
  public toGetCellReadinessSummary() {
    return this.to('GetCellReadinessSummary');
  }

  /**
   * Grants permission to Get a Readiness Check
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname.html
   */
  public toGetReadinessCheck() {
    return this.to('GetReadinessCheck');
  }

  /**
   * Grants permission to Get the Readiness Summary for a Resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname-resource-resourceidentifier-status.html
   */
  public toGetReadinessCheckResourceStatus() {
    return this.to('GetReadinessCheckResourceStatus');
  }

  /**
   * Grants permission to Get the status of a Readiness Check
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname-status.html
   */
  public toGetReadinessCheckStatus() {
    return this.to('GetReadinessCheckStatus');
  }

  /**
   * Grants permission to Get a Recovery Group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname.html
   */
  public toGetRecoveryGroup() {
    return this.to('GetRecoveryGroup');
  }

  /**
   * Grants permission to Get the Readiness Summary of a Recovery Group
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroupreadiness-recoverygroupname.html
   */
  public toGetRecoveryGroupReadinessSummary() {
    return this.to('GetRecoveryGroupReadinessSummary');
  }

  /**
   * Grants permission to Get a Resource Set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets-resourcesetname.html
   */
  public toGetResourceSet() {
    return this.to('GetResourceSet');
  }

  /**
   * Grants permission to List existing Cells
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/cells.html
   */
  public toListCells() {
    return this.to('ListCells');
  }

  /**
   * Grants permission to List existing Cross Account Authorizations
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks.html
   */
  public toListCrossAccountAuthorizations() {
    return this.to('ListCrossAccountAuthorizations');
  }

  /**
   * Grants permission to List existing Readiness Checks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks.html
   */
  public toListReadinessChecks() {
    return this.to('ListReadinessChecks');
  }

  /**
   * Grants permission to List existing Recovery Groups
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups.html
   */
  public toListRecoveryGroups() {
    return this.to('ListRecoveryGroups');
  }

  /**
   * Grants permission to List existing Resource Sets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets.html
   */
  public toListResourceSets() {
    return this.to('ListResourceSets');
  }

  /**
   * Grants permission to List Readiness Rules
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/rules.html
   */
  public toListRules() {
    return this.to('ListRules');
  }

  /**
   * Grants permission to List Tags for a Resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/tags-resource-arn.html
   */
  public toListTagsForResources() {
    return this.to('ListTagsForResources');
  }

  /**
   * Grants permission to Add a Tag to a Resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/tags-resource-arn.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to Remove a Tag from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/tags-resource-arn.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to Update an existing Cell
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/cells-cellname.html
   */
  public toUpdateCell() {
    return this.to('UpdateCell');
  }

  /**
   * Grants permission to Update an existing Readiness Check
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/readinesschecks-readinesscheckname.html
   */
  public toUpdateReadinessCheck() {
    return this.to('UpdateReadinessCheck');
  }

  /**
   * Grants permission to Update an existing Recovery Group
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/recoverygroups-recoverygroupname.html
   */
  public toUpdateRecoveryGroup() {
    return this.to('UpdateRecoveryGroup');
  }

  /**
   * Grants permission to Update an existing Resource Set
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/recovery-readiness/latest/api/resourcesets-resourcesetname.html
   */
  public toUpdateResourceSet() {
    return this.to('UpdateResourceSet');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CreateCell",
      "CreateCrossAccountAuthorization",
      "CreateReadinessCheck",
      "CreateRecoveryGroup",
      "CreateResourceSet",
      "DeleteCell",
      "DeleteCrossAccountAuthorization",
      "DeleteReadinessCheck",
      "DeleteRecoveryGroup",
      "DeleteResourceSet",
      "UpdateCell",
      "UpdateReadinessCheck",
      "UpdateRecoveryGroup",
      "UpdateResourceSet"
    ],
    "Read": [
      "GetArchitectureRecommendations",
      "GetCell",
      "GetCellReadinessSummary",
      "GetReadinessCheck",
      "GetReadinessCheckResourceStatus",
      "GetReadinessCheckStatus",
      "GetRecoveryGroup",
      "GetRecoveryGroupReadinessSummary",
      "GetResourceSet",
      "ListCells",
      "ListCrossAccountAuthorizations",
      "ListReadinessChecks",
      "ListRecoveryGroups",
      "ListResourceSets",
      "ListRules",
      "ListTagsForResources"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type readinesscheck to the statement
   *
   * https://docs.aws.amazon.com/r53recovery/latest/dg/recovery-readiness.readiness-checks.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onReadinesscheck(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53-recovery-readiness::${Account}:readiness-check/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type resourceset to the statement
   *
   * https://docs.aws.amazon.com/r53recovery/latest/dg/recovery-readiness.readiness-checks.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResourceset(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53-recovery-readiness::${Account}:resource-set/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type cell to the statement
   *
   * https://docs.aws.amazon.com/r53recovery/latest/dg/recovery-readiness.recovery-groups.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCell(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53-recovery-readiness::${Account}:cell/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type recoverygroup to the statement
   *
   * https://docs.aws.amazon.com/r53recovery/latest/dg/recovery-readiness.recovery-groups.html
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRecoverygroup(resourceId: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:route53-recovery-readiness::${Account}:recovery-group/${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
