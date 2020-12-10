import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [route53](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Route53 extends PolicyStatement {
  public servicePrefix = 'route53';

  /**
   * Statement provider for service [route53](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonroute53.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate an additional Amazon VPC with a private hosted zone
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_AssociateVPCWithHostedZone.html
   */
  public toAssociateVPCWithHostedZone() {
    this.to('route53:AssociateVPCWithHostedZone');
    return this;
  }

  /**
   * Grants permission to create, update, or delete a record, which contains authoritative DNS information for a specified domain or subdomain name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html
   */
  public toChangeResourceRecordSets() {
    this.to('route53:ChangeResourceRecordSets');
    return this;
  }

  /**
   * Grants permission to add, edit, or delete tags for a health check or a hosted zone
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeTagsForResource.html
   */
  public toChangeTagsForResource() {
    this.to('route53:ChangeTagsForResource');
    return this;
  }

  /**
   * Grants permission to create a new health check, which monitors the health and performance of your web applications, web servers, and other resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHealthCheck.html
   */
  public toCreateHealthCheck() {
    this.to('route53:CreateHealthCheck');
    return this;
  }

  /**
   * Grants permission to create a public hosted zone, which you use to specify how the Domain Name System (DNS) routes traffic on the Internet for a domain, such as example.com, and its subdomains
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html
   */
  public toCreateHostedZone() {
    this.to('route53:CreateHostedZone');
    return this;
  }

  /**
   * Grants permission to create a configuration for DNS query logging
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html
   */
  public toCreateQueryLoggingConfig() {
    this.to('route53:CreateQueryLoggingConfig');
    return this;
  }

  /**
   * Grants permission to create a delegation set (a group of four name servers) that can be reused by multiple hosted zones
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html
   */
  public toCreateReusableDelegationSet() {
    this.to('route53:CreateReusableDelegationSet');
    return this;
  }

  /**
   * Grants permission to create a traffic policy, which you use to create multiple DNS records for one domain name (such as example.com) or one subdomain name (such as www.example.com)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html
   */
  public toCreateTrafficPolicy() {
    this.to('route53:CreateTrafficPolicy');
    return this;
  }

  /**
   * Grants permission to create records in a specified hosted zone based on the settings in a specified traffic policy version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyInstance.html
   */
  public toCreateTrafficPolicyInstance() {
    this.to('route53:CreateTrafficPolicyInstance');
    return this;
  }

  /**
   * Grants permission to create a new version of an existing traffic policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyVersion.html
   */
  public toCreateTrafficPolicyVersion() {
    this.to('route53:CreateTrafficPolicyVersion');
    return this;
  }

  /**
   * Grants permission to authorize the AWS account that created a specified VPC to submit an AssociateVPCWithHostedZone request, which associates the VPC with a specified hosted zone that was created by a different account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateVPCAssociationAuthorization.html
   */
  public toCreateVPCAssociationAuthorization() {
    this.to('route53:CreateVPCAssociationAuthorization');
    return this;
  }

  /**
   * Grants permission to delete a health check
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHealthCheck.html
   */
  public toDeleteHealthCheck() {
    this.to('route53:DeleteHealthCheck');
    return this;
  }

  /**
   * Grants permission to delete a hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html
   */
  public toDeleteHostedZone() {
    this.to('route53:DeleteHostedZone');
    return this;
  }

  /**
   * Grants permission to delete a configuration for DNS query logging
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html
   */
  public toDeleteQueryLoggingConfig() {
    this.to('route53:DeleteQueryLoggingConfig');
    return this;
  }

  /**
   * Grants permission to delete a reusable delegation set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteReusableDelegationSet.html
   */
  public toDeleteReusableDelegationSet() {
    this.to('route53:DeleteReusableDelegationSet');
    return this;
  }

  /**
   * Grants permission to delete a traffic policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html
   */
  public toDeleteTrafficPolicy() {
    this.to('route53:DeleteTrafficPolicy');
    return this;
  }

  /**
   * Grants permission to delete a traffic policy instance and all the records that Route 53 created when you created the instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicyInstance.html
   */
  public toDeleteTrafficPolicyInstance() {
    this.to('route53:DeleteTrafficPolicyInstance');
    return this;
  }

  /**
   * Grants permission to remove authorization for associating an Amazon Virtual Private Cloud with a Route 53 private hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteVPCAssociationAuthorization.html
   */
  public toDeleteVPCAssociationAuthorization() {
    this.to('route53:DeleteVPCAssociationAuthorization');
    return this;
  }

  /**
   * Grants permission to disassociate an Amazon Virtual Private Cloud from a Route 53 private hosted zone
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DisassociateVPCFromHostedZone.html
   */
  public toDisassociateVPCFromHostedZone() {
    this.to('route53:DisassociateVPCFromHostedZone');
    return this;
  }

  /**
   * Grants permission to get the specified limit for the current account, for example, the maximum number of health checks that you can create using the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html
   */
  public toGetAccountLimit() {
    this.to('route53:GetAccountLimit');
    return this;
  }

  /**
   * Grants permission to get the current status of a request to create, update, or delete one or more records
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html
   */
  public toGetChange() {
    this.to('route53:GetChange');
    return this;
  }

  /**
   * Grants permission to get a list of the IP ranges that are used by Route 53 health checkers to check the health of your resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetCheckerIpRanges.html
   */
  public toGetCheckerIpRanges() {
    this.to('route53:GetCheckerIpRanges');
    return this;
  }

  /**
   * Grants permission to get information about whether a specified geographic location is supported for Route 53 geolocation records
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetGeoLocation.html
   */
  public toGetGeoLocation() {
    this.to('route53:GetGeoLocation');
    return this;
  }

  /**
   * Grants permission to get information about a specified health check
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheck.html
   */
  public toGetHealthCheck() {
    this.to('route53:GetHealthCheck');
    return this;
  }

  /**
   * Grants permission to get the number of health checks that are associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckCount.html
   */
  public toGetHealthCheckCount() {
    this.to('route53:GetHealthCheckCount');
    return this;
  }

  /**
   * Grants permission to get the reason that a specified health check failed most recently
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckLastFailureReason.html
   */
  public toGetHealthCheckLastFailureReason() {
    this.to('route53:GetHealthCheckLastFailureReason');
    return this;
  }

  /**
   * Grants permission to get the status of a specified health check
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckStatus.html
   */
  public toGetHealthCheckStatus() {
    this.to('route53:GetHealthCheckStatus');
    return this;
  }

  /**
   * Grants permission to get information about a specified hosted zone including the four name servers that Route 53 assigned to the hosted zone
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html
   */
  public toGetHostedZone() {
    this.to('route53:GetHostedZone');
    return this;
  }

  /**
   * Grants permission to get the number of hosted zones that are associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneCount.html
   */
  public toGetHostedZoneCount() {
    this.to('route53:GetHostedZoneCount');
    return this;
  }

  /**
   * Grants permission to get the specified limit for a specified hosted zone
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneLimit.html
   */
  public toGetHostedZoneLimit() {
    this.to('route53:GetHostedZoneLimit');
    return this;
  }

  /**
   * Grants permission to get information about a specified configuration for DNS query logging
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetQueryLoggingConfig.html
   */
  public toGetQueryLoggingConfig() {
    this.to('route53:GetQueryLoggingConfig');
    return this;
  }

  /**
   * Grants permission to get information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html
   */
  public toGetReusableDelegationSet() {
    this.to('route53:GetReusableDelegationSet');
    return this;
  }

  /**
   * Grants permission to get the maximum number of hosted zones that you can associate with the specified reusable delegation set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSetLimit.html
   */
  public toGetReusableDelegationSetLimit() {
    this.to('route53:GetReusableDelegationSetLimit');
    return this;
  }

  /**
   * Grants permission to get information about a specified traffic policy version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html
   */
  public toGetTrafficPolicy() {
    this.to('route53:GetTrafficPolicy');
    return this;
  }

  /**
   * Grants permission to get information about a specified traffic policy instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstance.html
   */
  public toGetTrafficPolicyInstance() {
    this.to('route53:GetTrafficPolicyInstance');
    return this;
  }

  /**
   * Grants permission to get the number of traffic policy instances that are associated with the current AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstanceCount.html
   */
  public toGetTrafficPolicyInstanceCount() {
    this.to('route53:GetTrafficPolicyInstanceCount');
    return this;
  }

  /**
   * Grants permission to get a list of geographic locations that Route 53 supports for geolocation
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListGeoLocations.html
   */
  public toListGeoLocations() {
    this.to('route53:ListGeoLocations');
    return this;
  }

  /**
   * Grants permission to get a list of the health checks that are associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHealthChecks.html
   */
  public toListHealthChecks() {
    this.to('route53:ListHealthChecks');
    return this;
  }

  /**
   * Grants permission to get a list of the public and private hosted zones that are associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZones.html
   */
  public toListHostedZones() {
    this.to('route53:ListHostedZones');
    return this;
  }

  /**
   * Grants permission to get a list of your hosted zones in lexicographic order. Hosted zones are sorted by name with the labels reversed, for example, com.example.www.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByName.html
   */
  public toListHostedZonesByName() {
    this.to('route53:ListHostedZonesByName');
    return this;
  }

  /**
   * Grants permission to get a list of all the private hosted zones that a specified VPC is associated with
   *
   * Access Level: List
   *
   * Dependent actions:
   * - ec2:DescribeVpcs
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByVPC.html
   */
  public toListHostedZonesByVPC() {
    this.to('route53:ListHostedZonesByVPC');
    return this;
  }

  /**
   * Grants permission to list the configurations for DNS query logging that are associated with the current AWS account or the configuration that is associated with a specified hosted zone.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html
   */
  public toListQueryLoggingConfigs() {
    this.to('route53:ListQueryLoggingConfigs');
    return this;
  }

  /**
   * Grants permission to list the records in a specified hosted zone
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListResourceRecordSets.html
   */
  public toListResourceRecordSets() {
    this.to('route53:ListResourceRecordSets');
    return this;
  }

  /**
   * Grants permission to list the reusable delegation sets that are associated with the current AWS account.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListReusableDelegationSets.html
   */
  public toListReusableDelegationSets() {
    this.to('route53:ListReusableDelegationSets');
    return this;
  }

  /**
   * Grants permission to list tags for one health check or hosted zone
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    this.to('route53:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to list tags for up to 10 health checks or hosted zones
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResources.html
   */
  public toListTagsForResources() {
    this.to('route53:ListTagsForResources');
    return this;
  }

  /**
   * Grants permission to get information about the latest version for every traffic policy that is associated with the current AWS account. Policies are listed in the order in which they were created.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html
   */
  public toListTrafficPolicies() {
    this.to('route53:ListTrafficPolicies');
    return this;
  }

  /**
   * Grants permission to get information about the traffic policy instances that you created by using the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstances.html
   */
  public toListTrafficPolicyInstances() {
    this.to('route53:ListTrafficPolicyInstances');
    return this;
  }

  /**
   * Grants permission to get information about the traffic policy instances that you created in a specified hosted zone
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByHostedZone.html
   */
  public toListTrafficPolicyInstancesByHostedZone() {
    this.to('route53:ListTrafficPolicyInstancesByHostedZone');
    return this;
  }

  /**
   * Grants permission to get information about the traffic policy instances that you created using a specified traffic policy version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByPolicy.html
   */
  public toListTrafficPolicyInstancesByPolicy() {
    this.to('route53:ListTrafficPolicyInstancesByPolicy');
    return this;
  }

  /**
   * Grants permission to get information about all the versions for a specified traffic policy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyVersions.html
   */
  public toListTrafficPolicyVersions() {
    this.to('route53:ListTrafficPolicyVersions');
    return this;
  }

  /**
   * Grants permission to get a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListVPCAssociationAuthorizations.html
   */
  public toListVPCAssociationAuthorizations() {
    this.to('route53:ListVPCAssociationAuthorizations');
    return this;
  }

  /**
   * Grants permission to get the value that Route 53 returns in response to a DNS query for a specified record name and type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_TestDNSAnswer.html
   */
  public toTestDNSAnswer() {
    this.to('route53:TestDNSAnswer');
    return this;
  }

  /**
   * Grants permission to update an existing health check
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html
   */
  public toUpdateHealthCheck() {
    this.to('route53:UpdateHealthCheck');
    return this;
  }

  /**
   * Grants permission to update the comment for a specified hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHostedZoneComment.html
   */
  public toUpdateHostedZoneComment() {
    this.to('route53:UpdateHostedZoneComment');
    return this;
  }

  /**
   * Grants permission to update the comment for a specified traffic policy version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyComment.html
   */
  public toUpdateTrafficPolicyComment() {
    this.to('route53:UpdateTrafficPolicyComment');
    return this;
  }

  /**
   * Grants permission to update the records in a specified hosted zone that were created based on the settings in a specified traffic policy version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyInstance.html
   */
  public toUpdateTrafficPolicyInstance() {
    this.to('route53:UpdateTrafficPolicyInstance');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateVPCWithHostedZone",
      "ChangeResourceRecordSets",
      "CreateHealthCheck",
      "CreateHostedZone",
      "CreateQueryLoggingConfig",
      "CreateReusableDelegationSet",
      "CreateTrafficPolicy",
      "CreateTrafficPolicyInstance",
      "CreateTrafficPolicyVersion",
      "CreateVPCAssociationAuthorization",
      "DeleteHealthCheck",
      "DeleteHostedZone",
      "DeleteQueryLoggingConfig",
      "DeleteReusableDelegationSet",
      "DeleteTrafficPolicy",
      "DeleteTrafficPolicyInstance",
      "DeleteVPCAssociationAuthorization",
      "DisassociateVPCFromHostedZone",
      "UpdateHealthCheck",
      "UpdateHostedZoneComment",
      "UpdateTrafficPolicyComment",
      "UpdateTrafficPolicyInstance"
    ],
    "Tagging": [
      "ChangeTagsForResource"
    ],
    "Read": [
      "GetAccountLimit",
      "GetHealthCheck",
      "GetHostedZoneLimit",
      "GetQueryLoggingConfig",
      "GetReusableDelegationSetLimit",
      "GetTrafficPolicy",
      "GetTrafficPolicyInstance",
      "GetTrafficPolicyInstanceCount",
      "TestDNSAnswer"
    ],
    "List": [
      "GetChange",
      "GetCheckerIpRanges",
      "GetGeoLocation",
      "GetHealthCheckCount",
      "GetHealthCheckLastFailureReason",
      "GetHealthCheckStatus",
      "GetHostedZone",
      "GetHostedZoneCount",
      "GetReusableDelegationSet",
      "ListGeoLocations",
      "ListHealthChecks",
      "ListHostedZones",
      "ListHostedZonesByName",
      "ListHostedZonesByVPC",
      "ListQueryLoggingConfigs",
      "ListResourceRecordSets",
      "ListReusableDelegationSets",
      "ListTagsForResource",
      "ListTagsForResources",
      "ListTrafficPolicies",
      "ListTrafficPolicyInstances",
      "ListTrafficPolicyInstancesByHostedZone",
      "ListTrafficPolicyInstancesByPolicy",
      "ListTrafficPolicyVersions",
      "ListVPCAssociationAuthorizations"
    ]
  };

  /**
   * Adds a resource of type change to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_Change.html
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onChange(id: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:::change/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type delegationset to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-reusable-delegation-set
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDelegationset(id: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:::delegationset/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type healthcheck to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-health-check
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHealthcheck(id: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:::healthcheck/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hostedzone to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-hosted-zone
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHostedzone(id: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:::hostedzone/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type trafficpolicy to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-policies.html
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTrafficpolicy(id: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:::trafficpolicy/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type trafficpolicyinstance to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-policy-records.html
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onTrafficpolicyinstance(id: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:::trafficpolicyinstance/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type queryloggingconfig to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onQueryloggingconfig(id: string, partition?: string) {
    var arn = 'arn:${Partition}:route53:::queryloggingconfig/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type vpc to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html
   *
   * @param vpcId - Identifier for the vpcId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onVpc(vpcId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:ec2:${Region}:${Account}:vpc/${VpcId}';
    arn = arn.replace('${VpcId}', vpcId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type Route53ActionsWrite = 'AssociateVPCWithHostedZone' | 'ChangeResourceRecordSets' | 'CreateHealthCheck' | 'CreateHostedZone' | 'CreateQueryLoggingConfig' | 'CreateReusableDelegationSet' | 'CreateTrafficPolicy' | 'CreateTrafficPolicyInstance' | 'CreateTrafficPolicyVersion' | 'CreateVPCAssociationAuthorization' | 'DeleteHealthCheck' | 'DeleteHostedZone' | 'DeleteQueryLoggingConfig' | 'DeleteReusableDelegationSet' | 'DeleteTrafficPolicy' | 'DeleteTrafficPolicyInstance' | 'DeleteVPCAssociationAuthorization' | 'DisassociateVPCFromHostedZone' | 'UpdateHealthCheck' | 'UpdateHostedZoneComment' | 'UpdateTrafficPolicyComment' | 'UpdateTrafficPolicyInstance';
export type Route53ActionsTagging = 'ChangeTagsForResource';
export type Route53ActionsRead = 'GetAccountLimit' | 'GetHealthCheck' | 'GetHostedZoneLimit' | 'GetQueryLoggingConfig' | 'GetReusableDelegationSetLimit' | 'GetTrafficPolicy' | 'GetTrafficPolicyInstance' | 'GetTrafficPolicyInstanceCount' | 'TestDNSAnswer';
export type Route53ActionsList = 'GetChange' | 'GetCheckerIpRanges' | 'GetGeoLocation' | 'GetHealthCheckCount' | 'GetHealthCheckLastFailureReason' | 'GetHealthCheckStatus' | 'GetHostedZone' | 'GetHostedZoneCount' | 'GetReusableDelegationSet' | 'ListGeoLocations' | 'ListHealthChecks' | 'ListHostedZones' | 'ListHostedZonesByName' | 'ListHostedZonesByVPC' | 'ListQueryLoggingConfigs' | 'ListResourceRecordSets' | 'ListReusableDelegationSets' | 'ListTagsForResource' | 'ListTagsForResources' | 'ListTrafficPolicies' | 'ListTrafficPolicyInstances' | 'ListTrafficPolicyInstancesByHostedZone' | 'ListTrafficPolicyInstancesByPolicy' | 'ListTrafficPolicyVersions' | 'ListVPCAssociationAuthorizations';
export type Route53Actions = Route53ActionsWrite | Route53ActionsTagging | Route53ActionsRead | Route53ActionsList;
