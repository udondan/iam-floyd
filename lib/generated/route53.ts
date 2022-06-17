import { AccessLevelList } from '../shared/access-level';
import { PolicyStatement } from '../shared';

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
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to activate a key-signing key so that it can be used for signing by DNSSEC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ActivateKeySigningKey.html
   */
  public toActivateKeySigningKey() {
    return this.to('ActivateKeySigningKey');
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
    return this.to('AssociateVPCWithHostedZone');
  }

  /**
   * Grants permission to create or delete CIDR blocks within a CIDR collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeCidrCollection.html
   */
  public toChangeCidrCollection() {
    return this.to('ChangeCidrCollection');
  }

  /**
   * Grants permission to create, update, or delete a record, which contains authoritative DNS information for a specified domain or subdomain name
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html
   */
  public toChangeResourceRecordSets() {
    return this.to('ChangeResourceRecordSets');
  }

  /**
   * Grants permission to add, edit, or delete tags for a health check or a hosted zone
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeTagsForResource.html
   */
  public toChangeTagsForResource() {
    return this.to('ChangeTagsForResource');
  }

  /**
   * Grants permission to create a new CIDR collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateCidrCollection.html
   */
  public toCreateCidrCollection() {
    return this.to('CreateCidrCollection');
  }

  /**
   * Grants permission to create a new health check, which monitors the health and performance of your web applications, web servers, and other resources
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHealthCheck.html
   */
  public toCreateHealthCheck() {
    return this.to('CreateHealthCheck');
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
    return this.to('CreateHostedZone');
  }

  /**
   * Grants permission to create a new key-signing key associated with a hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateKeySigningKey.html
   */
  public toCreateKeySigningKey() {
    return this.to('CreateKeySigningKey');
  }

  /**
   * Grants permission to create a configuration for DNS query logging
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html
   */
  public toCreateQueryLoggingConfig() {
    return this.to('CreateQueryLoggingConfig');
  }

  /**
   * Grants permission to create a delegation set (a group of four name servers) that can be reused by multiple hosted zones
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html
   */
  public toCreateReusableDelegationSet() {
    return this.to('CreateReusableDelegationSet');
  }

  /**
   * Grants permission to create a traffic policy, which you use to create multiple DNS records for one domain name (such as example.com) or one subdomain name (such as www.example.com)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicy.html
   */
  public toCreateTrafficPolicy() {
    return this.to('CreateTrafficPolicy');
  }

  /**
   * Grants permission to create records in a specified hosted zone based on the settings in a specified traffic policy version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyInstance.html
   */
  public toCreateTrafficPolicyInstance() {
    return this.to('CreateTrafficPolicyInstance');
  }

  /**
   * Grants permission to create a new version of an existing traffic policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateTrafficPolicyVersion.html
   */
  public toCreateTrafficPolicyVersion() {
    return this.to('CreateTrafficPolicyVersion');
  }

  /**
   * Grants permission to authorize the AWS account that created a specified VPC to submit an AssociateVPCWithHostedZone request, which associates the VPC with a specified hosted zone that was created by a different account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateVPCAssociationAuthorization.html
   */
  public toCreateVPCAssociationAuthorization() {
    return this.to('CreateVPCAssociationAuthorization');
  }

  /**
   * Grants permission to deactivate a key-signing key so that it will not be used for signing by DNSSEC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeactivateKeySigningKey.html
   */
  public toDeactivateKeySigningKey() {
    return this.to('DeactivateKeySigningKey');
  }

  /**
   * Grants permission to delete a CIDR collection
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteCidrCollection.html
   */
  public toDeleteCidrCollection() {
    return this.to('DeleteCidrCollection');
  }

  /**
   * Grants permission to delete a health check
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHealthCheck.html
   */
  public toDeleteHealthCheck() {
    return this.to('DeleteHealthCheck');
  }

  /**
   * Grants permission to delete a hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html
   */
  public toDeleteHostedZone() {
    return this.to('DeleteHostedZone');
  }

  /**
   * Grants permission to delete a key-signing key
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteKeySigningKey.html
   */
  public toDeleteKeySigningKey() {
    return this.to('DeleteKeySigningKey');
  }

  /**
   * Grants permission to delete a configuration for DNS query logging
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html
   */
  public toDeleteQueryLoggingConfig() {
    return this.to('DeleteQueryLoggingConfig');
  }

  /**
   * Grants permission to delete a reusable delegation set
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteReusableDelegationSet.html
   */
  public toDeleteReusableDelegationSet() {
    return this.to('DeleteReusableDelegationSet');
  }

  /**
   * Grants permission to delete a traffic policy
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html
   */
  public toDeleteTrafficPolicy() {
    return this.to('DeleteTrafficPolicy');
  }

  /**
   * Grants permission to delete a traffic policy instance and all the records that Route 53 created when you created the instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicyInstance.html
   */
  public toDeleteTrafficPolicyInstance() {
    return this.to('DeleteTrafficPolicyInstance');
  }

  /**
   * Grants permission to remove authorization for associating an Amazon Virtual Private Cloud with a Route 53 private hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteVPCAssociationAuthorization.html
   */
  public toDeleteVPCAssociationAuthorization() {
    return this.to('DeleteVPCAssociationAuthorization');
  }

  /**
   * Grants permission to disable DNSSEC signing in a specific hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_DisableHostedZoneDNSSEC.html
   */
  public toDisableHostedZoneDNSSEC() {
    return this.to('DisableHostedZoneDNSSEC');
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
    return this.to('DisassociateVPCFromHostedZone');
  }

  /**
   * Grants permission to enable DNSSEC signing in a specific hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_EnableHostedZoneDNSSEC.html
   */
  public toEnableHostedZoneDNSSEC() {
    return this.to('EnableHostedZoneDNSSEC');
  }

  /**
   * Grants permission to get the specified limit for the current account, for example, the maximum number of health checks that you can create using the account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html
   */
  public toGetAccountLimit() {
    return this.to('GetAccountLimit');
  }

  /**
   * Grants permission to get the current status of a request to create, update, or delete one or more records
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html
   */
  public toGetChange() {
    return this.to('GetChange');
  }

  /**
   * Grants permission to get a list of the IP ranges that are used by Route 53 health checkers to check the health of your resources
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetCheckerIpRanges.html
   */
  public toGetCheckerIpRanges() {
    return this.to('GetCheckerIpRanges');
  }

  /**
   * Grants permission to get information about DNSSEC for a specific hosted zone, including the key-signing keys in the hosted zone
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetDNSSEC.html
   */
  public toGetDNSSEC() {
    return this.to('GetDNSSEC');
  }

  /**
   * Grants permission to get information about whether a specified geographic location is supported for Route 53 geolocation records
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetGeoLocation.html
   */
  public toGetGeoLocation() {
    return this.to('GetGeoLocation');
  }

  /**
   * Grants permission to get information about a specified health check
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheck.html
   */
  public toGetHealthCheck() {
    return this.to('GetHealthCheck');
  }

  /**
   * Grants permission to get the number of health checks that are associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckCount.html
   */
  public toGetHealthCheckCount() {
    return this.to('GetHealthCheckCount');
  }

  /**
   * Grants permission to get the reason that a specified health check failed most recently
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckLastFailureReason.html
   */
  public toGetHealthCheckLastFailureReason() {
    return this.to('GetHealthCheckLastFailureReason');
  }

  /**
   * Grants permission to get the status of a specified health check
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHealthCheckStatus.html
   */
  public toGetHealthCheckStatus() {
    return this.to('GetHealthCheckStatus');
  }

  /**
   * Grants permission to get information about a specified hosted zone including the four name servers that Route 53 assigned to the hosted zone
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html
   */
  public toGetHostedZone() {
    return this.to('GetHostedZone');
  }

  /**
   * Grants permission to get the number of hosted zones that are associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneCount.html
   */
  public toGetHostedZoneCount() {
    return this.to('GetHostedZoneCount');
  }

  /**
   * Grants permission to get the specified limit for a specified hosted zone
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneLimit.html
   */
  public toGetHostedZoneLimit() {
    return this.to('GetHostedZoneLimit');
  }

  /**
   * Grants permission to get information about a specified configuration for DNS query logging
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetQueryLoggingConfig.html
   */
  public toGetQueryLoggingConfig() {
    return this.to('GetQueryLoggingConfig');
  }

  /**
   * Grants permission to get information about a specified reusable delegation set, including the four name servers that are assigned to the delegation set
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html
   */
  public toGetReusableDelegationSet() {
    return this.to('GetReusableDelegationSet');
  }

  /**
   * Grants permission to get the maximum number of hosted zones that you can associate with the specified reusable delegation set
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSetLimit.html
   */
  public toGetReusableDelegationSetLimit() {
    return this.to('GetReusableDelegationSetLimit');
  }

  /**
   * Grants permission to get information about a specified traffic policy version
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html
   */
  public toGetTrafficPolicy() {
    return this.to('GetTrafficPolicy');
  }

  /**
   * Grants permission to get information about a specified traffic policy instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstance.html
   */
  public toGetTrafficPolicyInstance() {
    return this.to('GetTrafficPolicyInstance');
  }

  /**
   * Grants permission to get the number of traffic policy instances that are associated with the current AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicyInstanceCount.html
   */
  public toGetTrafficPolicyInstanceCount() {
    return this.to('GetTrafficPolicyInstanceCount');
  }

  /**
   * Grants permission to get a list of the CIDR blocks within a specified CIDR collection
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListCidrBlocks.html
   */
  public toListCidrBlocks() {
    return this.to('ListCidrBlocks');
  }

  /**
   * Grants permission to get a list of the CIDR collections that are associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListCidrCollections.html
   */
  public toListCidrCollections() {
    return this.to('ListCidrCollections');
  }

  /**
   * Grants permission to get a list of the CIDR locations that belong to a specified CIDR collection
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListCidrLocations.html
   */
  public toListCidrLocations() {
    return this.to('ListCidrLocations');
  }

  /**
   * Grants permission to get a list of geographic locations that Route 53 supports for geolocation
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListGeoLocations.html
   */
  public toListGeoLocations() {
    return this.to('ListGeoLocations');
  }

  /**
   * Grants permission to get a list of the health checks that are associated with the current AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHealthChecks.html
   */
  public toListHealthChecks() {
    return this.to('ListHealthChecks');
  }

  /**
   * Grants permission to get a list of the public and private hosted zones that are associated with the current AWS account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZones.html
   */
  public toListHostedZones() {
    return this.to('ListHostedZones');
  }

  /**
   * Grants permission to get a list of your hosted zones in lexicographic order. Hosted zones are sorted by name with the labels reversed, for example, com.example.www
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByName.html
   */
  public toListHostedZonesByName() {
    return this.to('ListHostedZonesByName');
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
    return this.to('ListHostedZonesByVPC');
  }

  /**
   * Grants permission to list the configurations for DNS query logging that are associated with the current AWS account or the configuration that is associated with a specified hosted zone
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListQueryLoggingConfigs.html
   */
  public toListQueryLoggingConfigs() {
    return this.to('ListQueryLoggingConfigs');
  }

  /**
   * Grants permission to list the records in a specified hosted zone
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListResourceRecordSets.html
   */
  public toListResourceRecordSets() {
    return this.to('ListResourceRecordSets');
  }

  /**
   * Grants permission to list the reusable delegation sets that are associated with the current AWS account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListReusableDelegationSets.html
   */
  public toListReusableDelegationSets() {
    return this.to('ListReusableDelegationSets');
  }

  /**
   * Grants permission to list tags for one health check or hosted zone
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResource.html
   */
  public toListTagsForResource() {
    return this.to('ListTagsForResource');
  }

  /**
   * Grants permission to list tags for up to 10 health checks or hosted zones
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTagsForResources.html
   */
  public toListTagsForResources() {
    return this.to('ListTagsForResources');
  }

  /**
   * Grants permission to get information about the latest version for every traffic policy that is associated with the current AWS account. Policies are listed in the order in which they were created
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html
   */
  public toListTrafficPolicies() {
    return this.to('ListTrafficPolicies');
  }

  /**
   * Grants permission to get information about the traffic policy instances that you created by using the current AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstances.html
   */
  public toListTrafficPolicyInstances() {
    return this.to('ListTrafficPolicyInstances');
  }

  /**
   * Grants permission to get information about the traffic policy instances that you created in a specified hosted zone
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByHostedZone.html
   */
  public toListTrafficPolicyInstancesByHostedZone() {
    return this.to('ListTrafficPolicyInstancesByHostedZone');
  }

  /**
   * Grants permission to get information about the traffic policy instances that you created using a specified traffic policy version
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyInstancesByPolicy.html
   */
  public toListTrafficPolicyInstancesByPolicy() {
    return this.to('ListTrafficPolicyInstancesByPolicy');
  }

  /**
   * Grants permission to get information about all the versions for a specified traffic policy
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicyVersions.html
   */
  public toListTrafficPolicyVersions() {
    return this.to('ListTrafficPolicyVersions');
  }

  /**
   * Grants permission to get a list of the VPCs that were created by other accounts and that can be associated with a specified hosted zone
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListVPCAssociationAuthorizations.html
   */
  public toListVPCAssociationAuthorizations() {
    return this.to('ListVPCAssociationAuthorizations');
  }

  /**
   * Grants permission to get the value that Route 53 returns in response to a DNS query for a specified record name and type
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_TestDNSAnswer.html
   */
  public toTestDNSAnswer() {
    return this.to('TestDNSAnswer');
  }

  /**
   * Grants permission to update an existing health check
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html
   */
  public toUpdateHealthCheck() {
    return this.to('UpdateHealthCheck');
  }

  /**
   * Grants permission to update the comment for a specified hosted zone
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHostedZoneComment.html
   */
  public toUpdateHostedZoneComment() {
    return this.to('UpdateHostedZoneComment');
  }

  /**
   * Grants permission to update the comment for a specified traffic policy version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyComment.html
   */
  public toUpdateTrafficPolicyComment() {
    return this.to('UpdateTrafficPolicyComment');
  }

  /**
   * Grants permission to update the records in a specified hosted zone that were created based on the settings in a specified traffic policy version
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateTrafficPolicyInstance.html
   */
  public toUpdateTrafficPolicyInstance() {
    return this.to('UpdateTrafficPolicyInstance');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'ActivateKeySigningKey',
      'AssociateVPCWithHostedZone',
      'ChangeCidrCollection',
      'ChangeResourceRecordSets',
      'CreateCidrCollection',
      'CreateHealthCheck',
      'CreateHostedZone',
      'CreateKeySigningKey',
      'CreateQueryLoggingConfig',
      'CreateReusableDelegationSet',
      'CreateTrafficPolicy',
      'CreateTrafficPolicyInstance',
      'CreateTrafficPolicyVersion',
      'CreateVPCAssociationAuthorization',
      'DeactivateKeySigningKey',
      'DeleteCidrCollection',
      'DeleteHealthCheck',
      'DeleteHostedZone',
      'DeleteKeySigningKey',
      'DeleteQueryLoggingConfig',
      'DeleteReusableDelegationSet',
      'DeleteTrafficPolicy',
      'DeleteTrafficPolicyInstance',
      'DeleteVPCAssociationAuthorization',
      'DisableHostedZoneDNSSEC',
      'DisassociateVPCFromHostedZone',
      'EnableHostedZoneDNSSEC',
      'UpdateHealthCheck',
      'UpdateHostedZoneComment',
      'UpdateTrafficPolicyComment',
      'UpdateTrafficPolicyInstance'
    ],
    Tagging: [
      'ChangeTagsForResource'
    ],
    Read: [
      'GetAccountLimit',
      'GetDNSSEC',
      'GetHealthCheck',
      'GetHostedZoneLimit',
      'GetQueryLoggingConfig',
      'GetReusableDelegationSetLimit',
      'GetTrafficPolicy',
      'GetTrafficPolicyInstance',
      'GetTrafficPolicyInstanceCount',
      'ListGeoLocations',
      'ListHealthChecks',
      'ListReusableDelegationSets',
      'ListTagsForResource',
      'ListTagsForResources',
      'ListTrafficPolicyInstances',
      'TestDNSAnswer'
    ],
    List: [
      'GetChange',
      'GetCheckerIpRanges',
      'GetGeoLocation',
      'GetHealthCheckCount',
      'GetHealthCheckLastFailureReason',
      'GetHealthCheckStatus',
      'GetHostedZone',
      'GetHostedZoneCount',
      'GetReusableDelegationSet',
      'ListCidrBlocks',
      'ListCidrCollections',
      'ListCidrLocations',
      'ListHostedZones',
      'ListHostedZonesByName',
      'ListHostedZonesByVPC',
      'ListQueryLoggingConfigs',
      'ListResourceRecordSets',
      'ListTrafficPolicies',
      'ListTrafficPolicyInstancesByHostedZone',
      'ListTrafficPolicyInstancesByPolicy',
      'ListTrafficPolicyVersions',
      'ListVPCAssociationAuthorizations'
    ]
  };

  /**
   * Adds a resource of type cidrcollection to the statement
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCidrcollection(id: string, partition?: string) {
    return this.on(`arn:${ partition || Route53.defaultPartition }:route53:::cidrcollection/${ id }`);
  }

  /**
   * Adds a resource of type change to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/APIReference/API_Change.html
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onChange(id: string, partition?: string) {
    return this.on(`arn:${ partition || Route53.defaultPartition }:route53:::change/${ id }`);
  }

  /**
   * Adds a resource of type delegationset to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-reusable-delegation-set
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDelegationset(id: string, partition?: string) {
    return this.on(`arn:${ partition || Route53.defaultPartition }:route53:::delegationset/${ id }`);
  }

  /**
   * Adds a resource of type healthcheck to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-health-check
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onHealthcheck(id: string, partition?: string) {
    return this.on(`arn:${ partition || Route53.defaultPartition }:route53:::healthcheck/${ id }`);
  }

  /**
   * Adds a resource of type hostedzone to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html#route-53-concepts-hosted-zone
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onHostedzone(id: string, partition?: string) {
    return this.on(`arn:${ partition || Route53.defaultPartition }:route53:::hostedzone/${ id }`);
  }

  /**
   * Adds a resource of type trafficpolicy to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-policies.html
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTrafficpolicy(id: string, partition?: string) {
    return this.on(`arn:${ partition || Route53.defaultPartition }:route53:::trafficpolicy/${ id }`);
  }

  /**
   * Adds a resource of type trafficpolicyinstance to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-policy-records.html
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onTrafficpolicyinstance(id: string, partition?: string) {
    return this.on(`arn:${ partition || Route53.defaultPartition }:route53:::trafficpolicyinstance/${ id }`);
  }

  /**
   * Adds a resource of type queryloggingconfig to the statement
   *
   * https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html
   *
   * @param id - Identifier for the id.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onQueryloggingconfig(id: string, partition?: string) {
    return this.on(`arn:${ partition || Route53.defaultPartition }:route53:::queryloggingconfig/${ id }`);
  }

  /**
   * Adds a resource of type vpc to the statement
   *
   * https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html
   *
   * @param vpcId - Identifier for the vpcId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onVpc(vpcId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition || Route53.defaultPartition }:ec2:${ region || '*' }:${ account || '*' }:vpc/${ vpcId }`);
  }
}
