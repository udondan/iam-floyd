import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [rtbfabric](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrtbfabric.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Rtbfabric extends PolicyStatement {
  public servicePrefix = 'rtbfabric';

  /**
   * Statement provider for service [rtbfabric](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsrtbfabric.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept a link invitation from another Gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_AcceptLink.html
   */
  public toAcceptLink() {
    return this.to('AcceptLink');
  }

  /**
   * Grants permission to create an inbound external link for a responder gateway
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_CreateInboundExternalLink.html
   */
  public toCreateInboundExternalLink() {
    return this.to('CreateInboundExternalLink');
  }

  /**
   * Grants permission to create a new link between RTB applications
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_CreateLink.html
   */
  public toCreateLink() {
    return this.to('CreateLink');
  }

  /**
   * Grants permission to create an outbound external link for a requester gateway to connect to external public responder endpoints
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_CreateOutboundExternalLink.html
   */
  public toCreateOutboundExternalLink() {
    return this.to('CreateOutboundExternalLink');
  }

  /**
   * Grants permission to create a requester gateway
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_CreateRequesterGateway.html
   */
  public toCreateRequesterGateway() {
    return this.to('CreateRequesterGateway');
  }

  /**
   * Grants permission to create a responder gateway
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_CreateResponderGateway.html
   */
  public toCreateResponderGateway() {
    return this.to('CreateResponderGateway');
  }

  /**
   * Grants permission to delete an inbound external link
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_DeleteInboundExternalLink.html
   */
  public toDeleteInboundExternalLink() {
    return this.to('DeleteInboundExternalLink');
  }

  /**
   * Grants permission to delete a link between RTB applications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_DeleteLink.html
   */
  public toDeleteLink() {
    return this.to('DeleteLink');
  }

  /**
   * Grants permission to delete an outbound external link
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_DeleteOutboundExternalLink.html
   */
  public toDeleteOutboundExternalLink() {
    return this.to('DeleteOutboundExternalLink');
  }

  /**
   * Grants permission to delete a requester gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_DeleteRequesterGateway.html
   */
  public toDeleteRequesterGateway() {
    return this.to('DeleteRequesterGateway');
  }

  /**
   * Grants permission to delete a responder gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_DeleteResponderGateway.html
   */
  public toDeleteResponderGateway() {
    return this.to('DeleteResponderGateway');
  }

  /**
   * Grants permission to retrieve information about an inbound external link
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_GetInboundExternalLink.html
   */
  public toGetInboundExternalLink() {
    return this.to('GetInboundExternalLink');
  }

  /**
   * Grants permission to retrieve information about a link between RTB applications
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_GetLink.html
   */
  public toGetLink() {
    return this.to('GetLink');
  }

  /**
   * Grants permission to retrieve information about an outbound external link
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_GetOutboundExternalLink.html
   */
  public toGetOutboundExternalLink() {
    return this.to('GetOutboundExternalLink');
  }

  /**
   * Grants permission to retrieve information about a requester gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_GetRequesterGateway.html
   */
  public toGetRequesterGateway() {
    return this.to('GetRequesterGateway');
  }

  /**
   * Grants permission to retrieve information about a responder gateway
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_GetResponderGateway.html
   */
  public toGetResponderGateway() {
    return this.to('GetResponderGateway');
  }

  /**
   * Grants permission to list links associated with an RTB application
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_ListLinks.html
   */
  public toListLinks() {
    return this.to('ListLinks');
  }

  /**
   * Grants permission to list requester gateways with optional filtering and pagination
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_ListRequesterGateways.html
   */
  public toListRequesterGateways() {
    return this.to('ListRequesterGateways');
  }

  /**
   * Grants permission to list responder gateways with optional filtering and pagination
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_ListResponderGateways.html
   */
  public toListResponderGateways() {
    return this.to('ListResponderGateways');
  }

  /**
   * Grants permission to list tags for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to reject a link request between RTB applications
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_RejectLink.html
   */
  public toRejectLink() {
    return this.to('RejectLink');
  }

  /**
   * Grants permission to assign one or more tags (key-value pairs) to the specified resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to remove a tag or tags from a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update configuration settings for an existing link
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_UpdateLink.html
   */
  public toUpdateLink() {
    return this.to('UpdateLink');
  }

  /**
   * Grants permission to update a link module flow
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_UpdateLinkModuleFlow.html
   */
  public toUpdateLinkModuleFlow() {
    return this.to('UpdateLinkModuleFlow');
  }

  /**
   * Grants permission to update a requester gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_UpdateRequesterGateway.html
   */
  public toUpdateRequesterGateway() {
    return this.to('UpdateRequesterGateway');
  }

  /**
   * Grants permission to update a responder gateway
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/api/API_UpdateResponderGateway.html
   */
  public toUpdateResponderGateway() {
    return this.to('UpdateResponderGateway');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AcceptLink',
      'CreateInboundExternalLink',
      'CreateLink',
      'CreateOutboundExternalLink',
      'CreateRequesterGateway',
      'CreateResponderGateway',
      'DeleteInboundExternalLink',
      'DeleteLink',
      'DeleteOutboundExternalLink',
      'DeleteRequesterGateway',
      'DeleteResponderGateway',
      'RejectLink',
      'UpdateLink',
      'UpdateLinkModuleFlow',
      'UpdateRequesterGateway',
      'UpdateResponderGateway'
    ],
    Read: [
      'GetInboundExternalLink',
      'GetLink',
      'GetOutboundExternalLink',
      'GetRequesterGateway',
      'GetResponderGateway',
      'ListTagsForResource'
    ],
    List: [
      'ListLinks',
      'ListRequesterGateways',
      'ListResponderGateways'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type InboundExternalLink to the statement
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/userguide/links.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param linkId - Identifier for the linkId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifInboundExternalLinkLinkId()
   * - .ifResponderGatewayGatewayId()
   */
  public onInboundExternalLink(gatewayId: string, linkId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:rtbfabric:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:gateway/${ gatewayId }/link/${ linkId }`);
  }

  /**
   * Adds a resource of type Link to the statement
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/userguide/links.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param linkId - Identifier for the linkId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifLinkLinkId()
   * - .ifRequesterGatewayGatewayId()
   * - .ifResponderGatewayGatewayId()
   */
  public onLink(gatewayId: string, linkId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:rtbfabric:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:gateway/${ gatewayId }/link/${ linkId }`);
  }

  /**
   * Adds a resource of type OutboundExternalLink to the statement
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/userguide/links.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param linkId - Identifier for the linkId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifOutboundExternalLinkLinkId()
   * - .ifRequesterGatewayGatewayId()
   */
  public onOutboundExternalLink(gatewayId: string, linkId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:rtbfabric:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:gateway/${ gatewayId }/link/${ linkId }`);
  }

  /**
   * Adds a resource of type RequesterGateway to the statement
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/userguide/working-with-requester-rtb-applications.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifRequesterGatewayGatewayId()
   */
  public onRequesterGateway(gatewayId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:rtbfabric:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:gateway/${ gatewayId }`);
  }

  /**
   * Adds a resource of type ResponderGateway to the statement
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/userguide/working-with-responder-rtb-applications.html
   *
   * @param gatewayId - Identifier for the gatewayId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResponderGatewayGatewayId()
   */
  public onResponderGateway(gatewayId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:rtbfabric:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:gateway/${ gatewayId }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateInboundExternalLink()
   * - .toCreateLink()
   * - .toCreateOutboundExternalLink()
   * - .toCreateRequesterGateway()
   * - .toCreateResponderGateway()
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
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - InboundExternalLink
   * - Link
   * - OutboundExternalLink
   * - RequesterGateway
   * - ResponderGateway
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
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .toCreateInboundExternalLink()
   * - .toCreateLink()
   * - .toCreateOutboundExternalLink()
   * - .toCreateRequesterGateway()
   * - .toCreateResponderGateway()
   * - .toTagResource()
   * - .toUntagResource()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: Operator | string) {
    return this.if(`aws:TagKeys`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by gateway identifier supporting rtb-gw-* formats
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/userguide/security_iam_service-with-iam.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInboundExternalLinkGatewayId(value: string | string[], operator?: Operator | string) {
    return this.if(`InboundExternalLinkGatewayId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by InboundExternalLink resource linkId identifier
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/userguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - InboundExternalLink
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInboundExternalLinkLinkId(value: string | string[], operator?: Operator | string) {
    return this.if(`InboundExternalLinkLinkId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by Link resource linkId identifier
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/userguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Link
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifLinkLinkId(value: string | string[], operator?: Operator | string) {
    return this.if(`LinkLinkId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by OutboundExternalLink resource linkId identifier
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/userguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - OutboundExternalLink
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifOutboundExternalLinkLinkId(value: string | string[], operator?: Operator | string) {
    return this.if(`OutboundExternalLinkLinkId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by gateway identifier supporting rtb-gw-* formats
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/userguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - Link
   * - OutboundExternalLink
   * - RequesterGateway
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRequesterGatewayGatewayId(value: string | string[], operator?: Operator | string) {
    return this.if(`RequesterGatewayGatewayId`, value, operator ?? 'StringLike');
  }

  /**
   * Filters access by gateway identifier supporting rtb-gw-* formats
   *
   * https://docs.aws.amazon.com/rtb-fabric/latest/userguide/security_iam_service-with-iam.html
   *
   * Applies to resource types:
   * - InboundExternalLink
   * - Link
   * - ResponderGateway
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResponderGatewayGatewayId(value: string | string[], operator?: Operator | string) {
    return this.if(`ResponderGatewayGatewayId`, value, operator ?? 'StringLike');
  }
}
