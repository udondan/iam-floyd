import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [evs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_evs.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Evs extends PolicyStatement {
  public servicePrefix = 'evs';

  /**
   * Statement provider for service [evs](https://docs.aws.amazon.com/service-authorization/latest/reference/list_evs.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate an Elastic IP address (EIP) with a public VLAN in an Amazon EVS environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_AssociateEipToVlan.html
   */
  public toAssociateEipToVlan() {
    return this.to('AssociateEipToVlan');
  }

  /**
   * Grants permission to create an entitlement in an Amazon EVS environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_CreateEntitlement.html
   */
  public toCreateEntitlement() {
    return this.to('CreateEntitlement');
  }

  /**
   * Grants permission to create an Amazon EVS environment
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_CreateEnvironment.html
   */
  public toCreateEnvironment() {
    return this.to('CreateEnvironment');
  }

  /**
   * Grants permission to create a connector in an Amazon EVS environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_CreateEnvironmentConnector.html
   */
  public toCreateEnvironmentConnector() {
    return this.to('CreateEnvironmentConnector');
  }

  /**
   * Grants permission to add host to an Amazon EVS environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_CreateEnvironmentHost.html
   */
  public toCreateEnvironmentHost() {
    return this.to('CreateEnvironmentHost');
  }

  /**
   * Grants permission to delete an entitlement from an Amazon EVS environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_DeleteEntitlement.html
   */
  public toDeleteEntitlement() {
    return this.to('DeleteEntitlement');
  }

  /**
   * Grants permission to delete an Amazon EVS environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_DeleteEnvironment.html
   */
  public toDeleteEnvironment() {
    return this.to('DeleteEnvironment');
  }

  /**
   * Grants permission to delete a connector from an Amazon EVS environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_DeleteEnvironmentConnector.html
   */
  public toDeleteEnvironmentConnector() {
    return this.to('DeleteEnvironmentConnector');
  }

  /**
   * Grants permission to delete a host from an Amazon EVS environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_DeleteEnvironmentHost.html
   */
  public toDeleteEnvironmentHost() {
    return this.to('DeleteEnvironmentHost');
  }

  /**
   * Grants permission to disassociate an Elastic IP address (EIP) from a public VLAN in an Amazon EVS environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_DisassociateEipFromVlan.html
   */
  public toDisassociateEipFromVlan() {
    return this.to('DisassociateEipFromVlan');
  }

  /**
   * Grants permission to get EVS account settings
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_GetAccountSettings.html
   */
  public toGetAccountSettings() {
    return this.to('GetAccountSettings');
  }

  /**
   * Grants permission to get an Amazon EVS environment depot url
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_GetDepotUrl.html
   */
  public toGetDepotUrl() {
    return this.to('GetDepotUrl');
  }

  /**
   * Grants permission to get an Amazon EVS environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_GetEnvironment.html
   */
  public toGetEnvironment() {
    return this.to('GetEnvironment');
  }

  /**
   * Grants permission to get versions provided for launch by Amazon EVS
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_GetVersions.html
   */
  public toGetVersions() {
    return this.to('GetVersions');
  }

  /**
   * Grants permission to retrieve a list of connectors associated with an Amazon EVS environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_ListEnvironmentConnectors.html
   */
  public toListEnvironmentConnectors() {
    return this.to('ListEnvironmentConnectors');
  }

  /**
   * Grants permission to retrieve a list of hosts associated with an Amazon EVS environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_ListEnvironmentHosts.html
   */
  public toListEnvironmentHosts() {
    return this.to('ListEnvironmentHosts');
  }

  /**
   * Grants permission to retrieve a list of Amazon EVS environment VLANs
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_ListEnvironmentVlans.html
   */
  public toListEnvironmentVlans() {
    return this.to('ListEnvironmentVlans');
  }

  /**
   * Grants permission to retrieve a list of Amazon EVS environments in an account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_ListEnvironments.html
   */
  public toListEnvironments() {
    return this.to('ListEnvironments');
  }

  /**
   * Grants permission to list the tags on a specified resource ARN
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to retrieve a list of entitlements associated with an Amazon EVS environment
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_ListVmEntitlements.html
   */
  public toListVmEntitlements() {
    return this.to('ListVmEntitlements');
  }

  /**
   * Grants permission to get EVS account settings
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_PutAccountSettings.html
   */
  public toPutAccountSettings() {
    return this.to('PutAccountSettings');
  }

  /**
   * Grants permission to tag a specified resource ARN
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove tags from a specified resource ARN
   *
   * Access Level: Tagging, Write
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update a connector in an Amazon EVS environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/evs/latest/APIReference/API_UpdateEnvironmentConnector.html
   */
  public toUpdateEnvironmentConnector() {
    return this.to('UpdateEnvironmentConnector');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AssociateEipToVlan',
      'CreateEntitlement',
      'CreateEnvironment',
      'CreateEnvironmentConnector',
      'CreateEnvironmentHost',
      'DeleteEntitlement',
      'DeleteEnvironment',
      'DeleteEnvironmentConnector',
      'DeleteEnvironmentHost',
      'DisassociateEipFromVlan',
      'PutAccountSettings',
      'TagResource',
      'UntagResource',
      'UpdateEnvironmentConnector'
    ],
    Read: [
      'GetAccountSettings',
      'GetDepotUrl',
      'GetEnvironment',
      'GetVersions',
      'ListTagsForResource'
    ],
    List: [
      'ListEnvironmentConnectors',
      'ListEnvironmentHosts',
      'ListEnvironmentVlans',
      'ListEnvironments',
      'ListVmEntitlements'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/evs/latest/userguide/concepts.html#concepts-evs-virt-env
   *
   * @param environmentIdentifier - Identifier for the environmentIdentifier.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onEnvironment(environmentIdentifier: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:evs:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:environment/${ environmentIdentifier }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/evs/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toCreateEnvironment()
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
   * Filters access by a tag key and value pair of a resource
   *
   * https://docs.aws.amazon.com/evs/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toAssociateEipToVlan()
   * - .toCreateEntitlement()
   * - .toCreateEnvironmentConnector()
   * - .toCreateEnvironmentHost()
   * - .toDeleteEntitlement()
   * - .toDeleteEnvironment()
   * - .toDeleteEnvironmentConnector()
   * - .toDeleteEnvironmentHost()
   * - .toDisassociateEipFromVlan()
   * - .toGetDepotUrl()
   * - .toGetEnvironment()
   * - .toListEnvironmentConnectors()
   * - .toListEnvironmentHosts()
   * - .toListEnvironmentVlans()
   * - .toListTagsForResource()
   * - .toListVmEntitlements()
   * - .toTagResource()
   * - .toUntagResource()
   * - .toUpdateEnvironmentConnector()
   *
   * Applies to resource types:
   * - environment
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by a list of tag keys that are allowed in the request
   *
   * https://docs.aws.amazon.com/evs/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies
   *
   * Applies to actions:
   * - .toCreateEnvironment()
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
