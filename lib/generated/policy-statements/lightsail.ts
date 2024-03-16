import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [lightsail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlightsail.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Lightsail extends PolicyStatement {
  public servicePrefix = 'lightsail';

  /**
   * Statement provider for service [lightsail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlightsail.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to create a static IP address that can be attached to an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AllocateStaticIp.html
   */
  public toAllocateStaticIp() {
    return this.to('AllocateStaticIp');
  }

  /**
   * Grants permission to attach an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN) distribution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachCertificateToDistribution.html
   */
  public toAttachCertificateToDistribution() {
    return this.to('AttachCertificateToDistribution');
  }

  /**
   * Grants permission to attach a disk to an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachDisk.html
   */
  public toAttachDisk() {
    return this.to('AttachDisk');
  }

  /**
   * Grants permission to attach one or more instances to a load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachInstancesToLoadBalancer.html
   */
  public toAttachInstancesToLoadBalancer() {
    return this.to('AttachInstancesToLoadBalancer');
  }

  /**
   * Grants permission to attach a TLS certificate to a load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachLoadBalancerTlsCertificate.html
   */
  public toAttachLoadBalancerTlsCertificate() {
    return this.to('AttachLoadBalancerTlsCertificate');
  }

  /**
   * Grants permission to attach a static IP address to an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachStaticIp.html
   */
  public toAttachStaticIp() {
    return this.to('AttachStaticIp');
  }

  /**
   * Grants permission to close a public port of an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CloseInstancePublicPorts.html
   */
  public toCloseInstancePublicPorts() {
    return this.to('CloseInstancePublicPorts');
  }

  /**
   * Grants permission to copy a snapshot from one AWS Region to another in Amazon Lightsail
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CopySnapshot.html
   */
  public toCopySnapshot() {
    return this.to('CopySnapshot');
  }

  /**
   * Grants permission to create an Amazon Lightsail bucket
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucket.html
   */
  public toCreateBucket() {
    return this.to('CreateBucket');
  }

  /**
   * Grants permission to create a new access key for the specified bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html
   */
  public toCreateBucketAccessKey() {
    return this.to('CreateBucketAccessKey');
  }

  /**
   * Grants permission to create an SSL/TLS certificate
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - lightsail:CreateDomainEntry
   * - lightsail:GetDomains
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCertificate.html
   */
  public toCreateCertificate() {
    return this.to('CreateCertificate');
  }

  /**
   * Grants permission to create a new Amazon EC2 instance from an exported Amazon Lightsail snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html
   */
  public toCreateCloudFormationStack() {
    return this.to('CreateCloudFormationStack');
  }

  /**
   * Grants permission to create an email or SMS text message contact method
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateContactMethod.html
   */
  public toCreateContactMethod() {
    return this.to('CreateContactMethod');
  }

  /**
   * Grants permission to create an Amazon Lightsail container service
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateContainerService.html
   */
  public toCreateContainerService() {
    return this.to('CreateContainerService');
  }

  /**
   * Grants permission to create a deployment for your Amazon Lightsail container service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateContainerServiceDeployment.html
   */
  public toCreateContainerServiceDeployment() {
    return this.to('CreateContainerServiceDeployment');
  }

  /**
   * Grants permission to create a temporary set of log in credentials that you can use to log in to the Docker process on your local machine
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateContainerServiceRegistryLogin.html
   */
  public toCreateContainerServiceRegistryLogin() {
    return this.to('CreateContainerServiceRegistryLogin');
  }

  /**
   * Grants permission to create a disk
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDisk.html
   */
  public toCreateDisk() {
    return this.to('CreateDisk');
  }

  /**
   * Grants permission to create a disk from snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDiskFromSnapshot.html
   */
  public toCreateDiskFromSnapshot() {
    return this.to('CreateDiskFromSnapshot');
  }

  /**
   * Grants permission to create a disk snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDiskSnapshot.html
   */
  public toCreateDiskSnapshot() {
    return this.to('CreateDiskSnapshot');
  }

  /**
   * Grants permission to create an Amazon Lightsail content delivery network (CDN) distribution
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDistribution.html
   */
  public toCreateDistribution() {
    return this.to('CreateDistribution');
  }

  /**
   * Grants permission to create a domain resource for the specified domain name
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - route53:DeleteHostedZone
   * - route53:GetHostedZone
   * - route53:ListHostedZonesByName
   * - route53domains:GetDomainDetail
   * - route53domains:GetOperationDetail
   * - route53domains:ListDomains
   * - route53domains:ListOperations
   * - route53domains:UpdateDomainNameservers
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomain.html
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Grants permission to create one or more DNS record entries for a domain resource: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT)
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomainEntry.html
   */
  public toCreateDomainEntry() {
    return this.to('CreateDomainEntry');
  }

  /**
   * Grants permission to create URLs that are used to access an instance's graphical user interface (GUI) session
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateGUISessionAccessDetails.html
   */
  public toCreateGUISessionAccessDetails() {
    return this.to('CreateGUISessionAccessDetails');
  }

  /**
   * Grants permission to create an instance snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstanceSnapshot.html
   */
  public toCreateInstanceSnapshot() {
    return this.to('CreateInstanceSnapshot');
  }

  /**
   * Grants permission to create one or more instances
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstances.html
   */
  public toCreateInstances() {
    return this.to('CreateInstances');
  }

  /**
   * Grants permission to create one or more instances based on an instance snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateInstancesFromSnapshot.html
   */
  public toCreateInstancesFromSnapshot() {
    return this.to('CreateInstancesFromSnapshot');
  }

  /**
   * Grants permission to create a key pair used to authenticate and connect to an instance
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html
   */
  public toCreateKeyPair() {
    return this.to('CreateKeyPair');
  }

  /**
   * Grants permission to create a load balancer
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - lightsail:CreateDomainEntry
   * - lightsail:GetDomains
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateLoadBalancer.html
   */
  public toCreateLoadBalancer() {
    return this.to('CreateLoadBalancer');
  }

  /**
   * Grants permission to create a load balancer TLS certificate
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - lightsail:CreateDomainEntry
   * - lightsail:GetDomains
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateLoadBalancerTlsCertificate.html
   */
  public toCreateLoadBalancerTlsCertificate() {
    return this.to('CreateLoadBalancerTlsCertificate');
  }

  /**
   * Grants permission to create a new relational database
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabase.html
   */
  public toCreateRelationalDatabase() {
    return this.to('CreateRelationalDatabase');
  }

  /**
   * Grants permission to create a new relational database from a snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabaseFromSnapshot.html
   */
  public toCreateRelationalDatabaseFromSnapshot() {
    return this.to('CreateRelationalDatabaseFromSnapshot');
  }

  /**
   * Grants permission to create a relational database snapshot
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateRelationalDatabaseSnapshot.html
   */
  public toCreateRelationalDatabaseSnapshot() {
    return this.to('CreateRelationalDatabaseSnapshot');
  }

  /**
   * Grants permission to delete an alarm
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteAlarm.html
   */
  public toDeleteAlarm() {
    return this.to('DeleteAlarm');
  }

  /**
   * Grants permission to delete an automatic snapshot of an instance or disk
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteAutoSnapshot.html
   */
  public toDeleteAutoSnapshot() {
    return this.to('DeleteAutoSnapshot');
  }

  /**
   * Grants permission to delete an Amazon Lightsail bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteBucket.html
   */
  public toDeleteBucket() {
    return this.to('DeleteBucket');
  }

  /**
   * Grants permission to delete an access key for the specified Amazon Lightsail bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteBucketAccessKey.html
   */
  public toDeleteBucketAccessKey() {
    return this.to('DeleteBucketAccessKey');
  }

  /**
   * Grants permission to delete an SSL/TLS certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteCertificate.html
   */
  public toDeleteCertificate() {
    return this.to('DeleteCertificate');
  }

  /**
   * Grants permission to delete a contact method
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteContactMethod.html
   */
  public toDeleteContactMethod() {
    return this.to('DeleteContactMethod');
  }

  /**
   * Grants permission to delete a container image that is registered to your Amazon Lightsail container service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteContainerImage.html
   */
  public toDeleteContainerImage() {
    return this.to('DeleteContainerImage');
  }

  /**
   * Grants permission to delete your Amazon Lightsail container service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteContainerService.html
   */
  public toDeleteContainerService() {
    return this.to('DeleteContainerService');
  }

  /**
   * Grants permission to delete a disk
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDisk.html
   */
  public toDeleteDisk() {
    return this.to('DeleteDisk');
  }

  /**
   * Grants permission to delete a disk snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDiskSnapshot.html
   */
  public toDeleteDiskSnapshot() {
    return this.to('DeleteDiskSnapshot');
  }

  /**
   * Grants permission to delete your Amazon Lightsail content delivery network (CDN) distribution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDistribution.html
   */
  public toDeleteDistribution() {
    return this.to('DeleteDistribution');
  }

  /**
   * Grants permission to delete a domain resource and all of its DNS records
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Grants permission to delete a DNS record entry for a domain resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomainEntry.html
   */
  public toDeleteDomainEntry() {
    return this.to('DeleteDomainEntry');
  }

  /**
   * Grants permission to delete an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstance.html
   */
  public toDeleteInstance() {
    return this.to('DeleteInstance');
  }

  /**
   * Grants permission to delete an instance snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstanceSnapshot.html
   */
  public toDeleteInstanceSnapshot() {
    return this.to('DeleteInstanceSnapshot');
  }

  /**
   * Grants permission to delete a key pair used to authenticate and connect to an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKeyPair.html
   */
  public toDeleteKeyPair() {
    return this.to('DeleteKeyPair');
  }

  /**
   * Grants permission to delete the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKnownHostKeys.html
   */
  public toDeleteKnownHostKeys() {
    return this.to('DeleteKnownHostKeys');
  }

  /**
   * Grants permission to delete a load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancer.html
   */
  public toDeleteLoadBalancer() {
    return this.to('DeleteLoadBalancer');
  }

  /**
   * Grants permission to delete a load balancer TLS certificate
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancerTlsCertificate.html
   */
  public toDeleteLoadBalancerTlsCertificate() {
    return this.to('DeleteLoadBalancerTlsCertificate');
  }

  /**
   * Grants permission to delete a relational database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabase.html
   */
  public toDeleteRelationalDatabase() {
    return this.to('DeleteRelationalDatabase');
  }

  /**
   * Grants permission to delete a relational database snapshot
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabaseSnapshot.html
   */
  public toDeleteRelationalDatabaseSnapshot() {
    return this.to('DeleteRelationalDatabaseSnapshot');
  }

  /**
   * Grants permission to detach an SSL/TLS certificate from your Amazon Lightsail content delivery network (CDN) distribution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachCertificateFromDistribution.html
   */
  public toDetachCertificateFromDistribution() {
    return this.to('DetachCertificateFromDistribution');
  }

  /**
   * Grants permission to detach a disk from an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachDisk.html
   */
  public toDetachDisk() {
    return this.to('DetachDisk');
  }

  /**
   * Grants permission to detach one or more instances from a load balancer
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html
   */
  public toDetachInstancesFromLoadBalancer() {
    return this.to('DetachInstancesFromLoadBalancer');
  }

  /**
   * Grants permission to detach a static IP from an instance to which it is attached
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachStaticIp.html
   */
  public toDetachStaticIp() {
    return this.to('DetachStaticIp');
  }

  /**
   * Grants permission to disable an add-on for an Amazon Lightsail resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DisableAddOn.html
   */
  public toDisableAddOn() {
    return this.to('DisableAddOn');
  }

  /**
   * Grants permission to download the default key pair used to authenticate and connect to instances in a specific AWS Region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html
   */
  public toDownloadDefaultKeyPair() {
    return this.to('DownloadDefaultKeyPair');
  }

  /**
   * Grants permission to enable or modify an add-on for an Amazon Lightsail resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_EnableAddOn.html
   */
  public toEnableAddOn() {
    return this.to('EnableAddOn');
  }

  /**
   * Grants permission to export an Amazon Lightsail snapshot to Amazon EC2
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:PutRolePolicy
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ExportSnapshot.html
   */
  public toExportSnapshot() {
    return this.to('ExportSnapshot');
  }

  /**
   * Grants permission to get the names of all active (not deleted) resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetActiveNames.html
   */
  public toGetActiveNames() {
    return this.to('GetActiveNames');
  }

  /**
   * Grants permission to view information about the configured alarms
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetAlarms.html
   */
  public toGetAlarms() {
    return this.to('GetAlarms');
  }

  /**
   * Grants permission to view the available automatic snapshots for an instance or disk
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetAutoSnapshots.html
   */
  public toGetAutoSnapshots() {
    return this.to('GetAutoSnapshots');
  }

  /**
   * Grants permission to get a list of instance images, or blueprints. You can use a blueprint to create a new instance already running a specific operating system, as well as a pre-installed application or development stack. The software that runs on your instance depends on the blueprint you define when creating the instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBlueprints.html
   */
  public toGetBlueprints() {
    return this.to('GetBlueprints');
  }

  /**
   * Grants permission to get the existing access key IDs for the specified Amazon Lightsail bucket
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketAccessKeys.html
   */
  public toGetBucketAccessKeys() {
    return this.to('GetBucketAccessKeys');
  }

  /**
   * Grants permission to get the bundles that can be applied to an Amazon Lightsail bucket
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketBundles.html
   */
  public toGetBucketBundles() {
    return this.to('GetBucketBundles');
  }

  /**
   * Grants permission to get the data points of a specific metric for an Amazon Lightsail bucket
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBucketMetricData.html
   */
  public toGetBucketMetricData() {
    return this.to('GetBucketMetricData');
  }

  /**
   * Grants permission to get information about one or more Amazon Lightsail buckets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html
   */
  public toGetBuckets() {
    return this.to('GetBuckets');
  }

  /**
   * Grants permission to get a list of instance bundles. You can use a bundle to create a new instance with a set of performance specifications, such as CPU count, disk size, RAM size, and network transfer allowance. The cost of your instance depends on the bundle you define when creating the instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBundles.html
   */
  public toGetBundles() {
    return this.to('GetBundles');
  }

  /**
   * Grants permission to view information about one or more Amazon Lightsail SSL/TLS certificates
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCertificates.html
   */
  public toGetCertificates() {
    return this.to('GetCertificates');
  }

  /**
   * Grants permission to get information about all CloudFormation stacks used to create Amazon EC2 resources from exported Amazon Lightsail snapshots
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCloudFormationStackRecords.html
   */
  public toGetCloudFormationStackRecords() {
    return this.to('GetCloudFormationStackRecords');
  }

  /**
   * Grants permission to view information about the configured contact methods
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContactMethods.html
   */
  public toGetContactMethods() {
    return this.to('GetContactMethods');
  }

  /**
   * Grants permission to view information about Amazon Lightsail containers, such as the current version of the Lightsail Control (lightsailctl) plugin
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerAPIMetadata.html
   */
  public toGetContainerAPIMetadata() {
    return this.to('GetContainerAPIMetadata');
  }

  /**
   * Grants permission to view the container images that are registered to your Amazon Lightsail container service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerImages.html
   */
  public toGetContainerImages() {
    return this.to('GetContainerImages');
  }

  /**
   * Grants permission to view the log events of a container of your Amazon Lightsail container service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerLog.html
   */
  public toGetContainerLog() {
    return this.to('GetContainerLog');
  }

  /**
   * Grants permission to view the deployments for your Amazon Lightsail container service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerServiceDeployments.html
   */
  public toGetContainerServiceDeployments() {
    return this.to('GetContainerServiceDeployments');
  }

  /**
   * Grants permission to view the data points of a specific metric of your Amazon Lightsail container service
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerServiceMetricData.html
   */
  public toGetContainerServiceMetricData() {
    return this.to('GetContainerServiceMetricData');
  }

  /**
   * Grants permission to view the list of powers that can be specified for your Amazon Lightsail container services
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerServicePowers.html
   */
  public toGetContainerServicePowers() {
    return this.to('GetContainerServicePowers');
  }

  /**
   * Grants permission to view information about one or more of your Amazon Lightsail container services
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetContainerServices.html
   */
  public toGetContainerServices() {
    return this.to('GetContainerServices');
  }

  /**
   * Grants permission to get the information about the cost estimate for a specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCostEstimate.html
   */
  public toGetCostEstimate() {
    return this.to('GetCostEstimate');
  }

  /**
   * Grants permission to get information about a disk
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisk.html
   */
  public toGetDisk() {
    return this.to('GetDisk');
  }

  /**
   * Grants permission to get information about a disk snapshot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshot.html
   */
  public toGetDiskSnapshot() {
    return this.to('GetDiskSnapshot');
  }

  /**
   * Grants permission to get information about all disk snapshots
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshots.html
   */
  public toGetDiskSnapshots() {
    return this.to('GetDiskSnapshots');
  }

  /**
   * Grants permission to get information about all disks
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisks.html
   */
  public toGetDisks() {
    return this.to('GetDisks');
  }

  /**
   * Grants permission to view the list of bundles that can be applied to you Amazon Lightsail content delivery network (CDN) distributions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDistributionBundles.html
   */
  public toGetDistributionBundles() {
    return this.to('GetDistributionBundles');
  }

  /**
   * Grants permission to view the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDistributionLatestCacheReset.html
   */
  public toGetDistributionLatestCacheReset() {
    return this.to('GetDistributionLatestCacheReset');
  }

  /**
   * Grants permission to view the data points of a specific metric for an Amazon Lightsail content delivery network (CDN) distribution
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDistributionMetricData.html
   */
  public toGetDistributionMetricData() {
    return this.to('GetDistributionMetricData');
  }

  /**
   * Grants permission to view information about one or more of your Amazon Lightsail content delivery network (CDN) distributions
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDistributions.html
   */
  public toGetDistributions() {
    return this.to('GetDistributions');
  }

  /**
   * Grants permission to get DNS records for a domain resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomain.html
   */
  public toGetDomain() {
    return this.to('GetDomain');
  }

  /**
   * Grants permission to get DNS records for all domain resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomains.html
   */
  public toGetDomains() {
    return this.to('GetDomains');
  }

  /**
   * Grants permission to get information about all records of exported Amazon Lightsail snapshots to Amazon EC2
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetExportSnapshotRecords.html
   */
  public toGetExportSnapshotRecords() {
    return this.to('GetExportSnapshotRecords');
  }

  /**
   * Grants permission to get information about an instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstance.html
   */
  public toGetInstance() {
    return this.to('GetInstance');
  }

  /**
   * Grants permission to get temporary keys you can use to authenticate and connect to an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceAccessDetails.html
   */
  public toGetInstanceAccessDetails() {
    return this.to('GetInstanceAccessDetails');
  }

  /**
   * Grants permission to get the data points for the specified metric of an instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceMetricData.html
   */
  public toGetInstanceMetricData() {
    return this.to('GetInstanceMetricData');
  }

  /**
   * Grants permission to get the port states of an instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstancePortStates.html
   */
  public toGetInstancePortStates() {
    return this.to('GetInstancePortStates');
  }

  /**
   * Grants permission to get information about an instance snapshot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshot.html
   */
  public toGetInstanceSnapshot() {
    return this.to('GetInstanceSnapshot');
  }

  /**
   * Grants permission to get information about all instance snapshots
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshots.html
   */
  public toGetInstanceSnapshots() {
    return this.to('GetInstanceSnapshots');
  }

  /**
   * Grants permission to get the state of an instance
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceState.html
   */
  public toGetInstanceState() {
    return this.to('GetInstanceState');
  }

  /**
   * Grants permission to get information about all instances
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstances.html
   */
  public toGetInstances() {
    return this.to('GetInstances');
  }

  /**
   * Grants permission to get information about a key pair
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPair.html
   */
  public toGetKeyPair() {
    return this.to('GetKeyPair');
  }

  /**
   * Grants permission to get information about all key pairs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPairs.html
   */
  public toGetKeyPairs() {
    return this.to('GetKeyPairs');
  }

  /**
   * Grants permission to get information about a load balancer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancer.html
   */
  public toGetLoadBalancer() {
    return this.to('GetLoadBalancer');
  }

  /**
   * Grants permission to get the data points for the specified metric of a load balancer
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerMetricData.html
   */
  public toGetLoadBalancerMetricData() {
    return this.to('GetLoadBalancerMetricData');
  }

  /**
   * Grants permission to get information about a load balancer's TLS certificates
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsCertificates.html
   */
  public toGetLoadBalancerTlsCertificates() {
    return this.to('GetLoadBalancerTlsCertificates');
  }

  /**
   * Grants permission to get a list of TLS security policies that you can apply to Lightsail load balancers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerTlsPolicies.html
   */
  public toGetLoadBalancerTlsPolicies() {
    return this.to('GetLoadBalancerTlsPolicies');
  }

  /**
   * Grants permission to get information about load balancers
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancers.html
   */
  public toGetLoadBalancers() {
    return this.to('GetLoadBalancers');
  }

  /**
   * Grants permission to get information about an operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperation.html
   */
  public toGetOperation() {
    return this.to('GetOperation');
  }

  /**
   * Grants permission to get information about all operations. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperations.html
   */
  public toGetOperations() {
    return this.to('GetOperations');
  }

  /**
   * Grants permission to get operations for a resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperationsForResource.html
   */
  public toGetOperationsForResource() {
    return this.to('GetOperationsForResource');
  }

  /**
   * Grants permission to get a list of all valid AWS Regions for Amazon Lightsail
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html
   */
  public toGetRegions() {
    return this.to('GetRegions');
  }

  /**
   * Grants permission to get information about a relational database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabase.html
   */
  public toGetRelationalDatabase() {
    return this.to('GetRelationalDatabase');
  }

  /**
   * Grants permission to get a list of relational database images, or blueprints. You can use a blueprint to create a new database running a specific database engine. The database engine that runs on your database depends on the blueprint you define when creating the relational database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBlueprints.html
   */
  public toGetRelationalDatabaseBlueprints() {
    return this.to('GetRelationalDatabaseBlueprints');
  }

  /**
   * Grants permission to get a list of relational database bundles. You can use a bundle to create a new database with a set of performance specifications, such as CPU count, disk size, RAM size, network transfer allowance, and standard of high availability. The cost of your database depends on the bundle you define when creating the relational database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBundles.html
   */
  public toGetRelationalDatabaseBundles() {
    return this.to('GetRelationalDatabaseBundles');
  }

  /**
   * Grants permission to get events for a relational database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseEvents.html
   */
  public toGetRelationalDatabaseEvents() {
    return this.to('GetRelationalDatabaseEvents');
  }

  /**
   * Grants permission to get events for the specified log stream of a relational database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogEvents.html
   */
  public toGetRelationalDatabaseLogEvents() {
    return this.to('GetRelationalDatabaseLogEvents');
  }

  /**
   * Grants permission to get the log streams available for a relational database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogStreams.html
   */
  public toGetRelationalDatabaseLogStreams() {
    return this.to('GetRelationalDatabaseLogStreams');
  }

  /**
   * Grants permission to get the master user password of a relational database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMasterUserPassword.html
   */
  public toGetRelationalDatabaseMasterUserPassword() {
    return this.to('GetRelationalDatabaseMasterUserPassword');
  }

  /**
   * Grants permission to get the data points for the specified metric of a relational database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMetricData.html
   */
  public toGetRelationalDatabaseMetricData() {
    return this.to('GetRelationalDatabaseMetricData');
  }

  /**
   * Grants permission to get the parameters of a relational database
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseParameters.html
   */
  public toGetRelationalDatabaseParameters() {
    return this.to('GetRelationalDatabaseParameters');
  }

  /**
   * Grants permission to get information about a relational database snapshot
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshot.html
   */
  public toGetRelationalDatabaseSnapshot() {
    return this.to('GetRelationalDatabaseSnapshot');
  }

  /**
   * Grants permission to get information about all relational database snapshots
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshots.html
   */
  public toGetRelationalDatabaseSnapshots() {
    return this.to('GetRelationalDatabaseSnapshots');
  }

  /**
   * Grants permission to get information about all relational databases
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabases.html
   */
  public toGetRelationalDatabases() {
    return this.to('GetRelationalDatabases');
  }

  /**
   * Grants permission to get detailed information for setup requests that were run on the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetSetupHistory.html
   */
  public toGetSetupHistory() {
    return this.to('GetSetupHistory');
  }

  /**
   * Grants permission to get information about a static IP
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIp.html
   */
  public toGetStaticIp() {
    return this.to('GetStaticIp');
  }

  /**
   * Grants permission to get information about all static IPs
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIps.html
   */
  public toGetStaticIps() {
    return this.to('GetStaticIps');
  }

  /**
   * Grants permission to import a public key from a key pair
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html
   */
  public toImportKeyPair() {
    return this.to('ImportKeyPair');
  }

  /**
   * Grants permission to get a boolean value indicating whether the Amazon Lightsail virtual private cloud (VPC) is peered
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_IsVpcPeered.html
   */
  public toIsVpcPeered() {
    return this.to('IsVpcPeered');
  }

  /**
   * Grants permission to add, or open a public port of an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_OpenInstancePublicPorts.html
   */
  public toOpenInstancePublicPorts() {
    return this.to('OpenInstancePublicPorts');
  }

  /**
   * Grants permission to try to peer the Amazon Lightsail virtual private cloud (VPC) with the default VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PeerVpc.html
   */
  public toPeerVpc() {
    return this.to('PeerVpc');
  }

  /**
   * Grants permission to creates or update an alarm, and associate it with the specified metric
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PutAlarm.html
   */
  public toPutAlarm() {
    return this.to('PutAlarm');
  }

  /**
   * Grants permission to set the specified open ports for an instance, and closes all ports for every protocol not included in the request
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PutInstancePublicPorts.html
   */
  public toPutInstancePublicPorts() {
    return this.to('PutInstancePublicPorts');
  }

  /**
   * Grants permission to reboot an instance that is in a running state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootInstance.html
   */
  public toRebootInstance() {
    return this.to('RebootInstance');
  }

  /**
   * Grants permission to reboot a relational database that is in a running state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootRelationalDatabase.html
   */
  public toRebootRelationalDatabase() {
    return this.to('RebootRelationalDatabase');
  }

  /**
   * Grants permission to register a container image to your Amazon Lightsail container service
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RegisterContainerImage.html
   */
  public toRegisterContainerImage() {
    return this.to('RegisterContainerImage');
  }

  /**
   * Grants permission to delete a static IP
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ReleaseStaticIp.html
   */
  public toReleaseStaticIp() {
    return this.to('ReleaseStaticIp');
  }

  /**
   * Grants permission to delete currently cached content from your Amazon Lightsail content delivery network (CDN) distribution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ResetDistributionCache.html
   */
  public toResetDistributionCache() {
    return this.to('ResetDistributionCache');
  }

  /**
   * Grants permission to send a verification request to an email contact method to ensure it's owned by the requester
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SendContactMethodVerification.html
   */
  public toSendContactMethodVerification() {
    return this.to('SendContactMethodVerification');
  }

  /**
   * Grants permission to set the IP address type for a Amazon Lightsail resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetIpAddressType.html
   */
  public toSetIpAddressType() {
    return this.to('SetIpAddressType');
  }

  /**
   * Grants permission to set the Amazon Lightsail resources that can access the specified Amazon Lightsail bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetResourceAccessForBucket.html
   */
  public toSetResourceAccessForBucket() {
    return this.to('SetResourceAccessForBucket');
  }

  /**
   * Grants permission to create an SSL/TLS certificate and install it on a specified instance
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - lightsail:GetInstanceAccessDetails
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_SetupInstanceHttps.html
   */
  public toSetupInstanceHttps() {
    return this.to('SetupInstanceHttps');
  }

  /**
   * Grants permission to initiate a graphical user interface (GUI) session used to access an instance's operating system or application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartGUISession.html
   */
  public toStartGUISession() {
    return this.to('StartGUISession');
  }

  /**
   * Grants permission to start an instance that is in a stopped state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartInstance.html
   */
  public toStartInstance() {
    return this.to('StartInstance');
  }

  /**
   * Grants permission to start a relational database that is in a stopped state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartRelationalDatabase.html
   */
  public toStartRelationalDatabase() {
    return this.to('StartRelationalDatabase');
  }

  /**
   * Grants permission to terminate a graphical user interface (GUI) session used to access an instance's operating system or application
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopGUISession.html
   */
  public toStopGUISession() {
    return this.to('StopGUISession');
  }

  /**
   * Grants permission to stop an instance that is in a running state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopInstance.html
   */
  public toStopInstance() {
    return this.to('StopInstance');
  }

  /**
   * Grants permission to stop a relational database that is in a running state
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopRelationalDatabase.html
   */
  public toStopRelationalDatabase() {
    return this.to('StopRelationalDatabase');
  }

  /**
   * Grants permission to tag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_TagResource.html
   */
  public toTagResource() {
    return this.to('TagResource');
  }

  /**
   * Grants permission to test an alarm by displaying a banner on the Amazon Lightsail console or if a notification trigger is configured for the specified alarm, by sending a notification to the notification protocol
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_TestAlarm.html
   */
  public toTestAlarm() {
    return this.to('TestAlarm');
  }

  /**
   * Grants permission to try to unpeer the Amazon Lightsail virtual private cloud (VPC) from the default VPC
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UnpeerVpc.html
   */
  public toUnpeerVpc() {
    return this.to('UnpeerVpc');
  }

  /**
   * Grants permission to untag a resource
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Grants permission to update an existing Amazon Lightsail bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucket.html
   */
  public toUpdateBucket() {
    return this.to('UpdateBucket');
  }

  /**
   * Grants permission to update the bundle, or storage plan, of an existing Amazon Lightsail bucket
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html
   */
  public toUpdateBucketBundle() {
    return this.to('UpdateBucketBundle');
  }

  /**
   * Grants permission to update the configuration of your Amazon Lightsail container service, such as its power, scale, and public domain names
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateContainerService.html
   */
  public toUpdateContainerService() {
    return this.to('UpdateContainerService');
  }

  /**
   * Grants permission to update an existing Amazon Lightsail content delivery network (CDN) distribution or its configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateDistribution.html
   */
  public toUpdateDistribution() {
    return this.to('UpdateDistribution');
  }

  /**
   * Grants permission to update the bundle of your Amazon Lightsail content delivery network (CDN) distribution
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateDistributionBundle.html
   */
  public toUpdateDistributionBundle() {
    return this.to('UpdateDistributionBundle');
  }

  /**
   * Grants permission to update a domain recordset after it is created
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateDomainEntry.html
   */
  public toUpdateDomainEntry() {
    return this.to('UpdateDomainEntry');
  }

  /**
   * Grants permission to update metadata options for an instance
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateInstanceMetadataOptions.html
   */
  public toUpdateInstanceMetadataOptions() {
    return this.to('UpdateInstanceMetadataOptions');
  }

  /**
   * Grants permission to update a load balancer attribute, such as the health check path and session stickiness
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html
   */
  public toUpdateLoadBalancerAttribute() {
    return this.to('UpdateLoadBalancerAttribute');
  }

  /**
   * Grants permission to update a relational database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabase.html
   */
  public toUpdateRelationalDatabase() {
    return this.to('UpdateRelationalDatabase');
  }

  /**
   * Grants permission to update the parameters of a relational database
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabaseParameters.html
   */
  public toUpdateRelationalDatabaseParameters() {
    return this.to('UpdateRelationalDatabaseParameters');
  }

  protected accessLevelList: AccessLevelList = {
    Write: [
      'AllocateStaticIp',
      'AttachCertificateToDistribution',
      'AttachDisk',
      'AttachInstancesToLoadBalancer',
      'AttachLoadBalancerTlsCertificate',
      'AttachStaticIp',
      'CloseInstancePublicPorts',
      'CopySnapshot',
      'CreateBucket',
      'CreateBucketAccessKey',
      'CreateCertificate',
      'CreateCloudFormationStack',
      'CreateContactMethod',
      'CreateContainerService',
      'CreateContainerServiceDeployment',
      'CreateContainerServiceRegistryLogin',
      'CreateDisk',
      'CreateDiskFromSnapshot',
      'CreateDiskSnapshot',
      'CreateDistribution',
      'CreateDomain',
      'CreateDomainEntry',
      'CreateGUISessionAccessDetails',
      'CreateInstanceSnapshot',
      'CreateInstances',
      'CreateInstancesFromSnapshot',
      'CreateKeyPair',
      'CreateLoadBalancer',
      'CreateLoadBalancerTlsCertificate',
      'CreateRelationalDatabase',
      'CreateRelationalDatabaseFromSnapshot',
      'CreateRelationalDatabaseSnapshot',
      'DeleteAlarm',
      'DeleteAutoSnapshot',
      'DeleteBucket',
      'DeleteBucketAccessKey',
      'DeleteCertificate',
      'DeleteContactMethod',
      'DeleteContainerImage',
      'DeleteContainerService',
      'DeleteDisk',
      'DeleteDiskSnapshot',
      'DeleteDistribution',
      'DeleteDomain',
      'DeleteDomainEntry',
      'DeleteInstance',
      'DeleteInstanceSnapshot',
      'DeleteKeyPair',
      'DeleteKnownHostKeys',
      'DeleteLoadBalancer',
      'DeleteLoadBalancerTlsCertificate',
      'DeleteRelationalDatabase',
      'DeleteRelationalDatabaseSnapshot',
      'DetachCertificateFromDistribution',
      'DetachDisk',
      'DetachInstancesFromLoadBalancer',
      'DetachStaticIp',
      'DisableAddOn',
      'DownloadDefaultKeyPair',
      'EnableAddOn',
      'ExportSnapshot',
      'GetInstanceAccessDetails',
      'GetRelationalDatabaseMasterUserPassword',
      'ImportKeyPair',
      'OpenInstancePublicPorts',
      'PeerVpc',
      'PutAlarm',
      'PutInstancePublicPorts',
      'RebootInstance',
      'RebootRelationalDatabase',
      'RegisterContainerImage',
      'ReleaseStaticIp',
      'ResetDistributionCache',
      'SendContactMethodVerification',
      'SetIpAddressType',
      'SetResourceAccessForBucket',
      'SetupInstanceHttps',
      'StartGUISession',
      'StartInstance',
      'StartRelationalDatabase',
      'StopGUISession',
      'StopInstance',
      'StopRelationalDatabase',
      'TestAlarm',
      'UnpeerVpc',
      'UpdateBucket',
      'UpdateBucketBundle',
      'UpdateContainerService',
      'UpdateDistribution',
      'UpdateDistributionBundle',
      'UpdateDomainEntry',
      'UpdateInstanceMetadataOptions',
      'UpdateLoadBalancerAttribute',
      'UpdateRelationalDatabase',
      'UpdateRelationalDatabaseParameters'
    ],
    Read: [
      'GetActiveNames',
      'GetAlarms',
      'GetAutoSnapshots',
      'GetBlueprints',
      'GetBucketAccessKeys',
      'GetBucketBundles',
      'GetBucketMetricData',
      'GetBuckets',
      'GetBundles',
      'GetCertificates',
      'GetCloudFormationStackRecords',
      'GetContactMethods',
      'GetContainerAPIMetadata',
      'GetContainerImages',
      'GetContainerLog',
      'GetContainerServiceDeployments',
      'GetContainerServiceMetricData',
      'GetContainerServicePowers',
      'GetContainerServices',
      'GetCostEstimate',
      'GetDisk',
      'GetDiskSnapshot',
      'GetDiskSnapshots',
      'GetDisks',
      'GetDistributionBundles',
      'GetDistributionLatestCacheReset',
      'GetDistributionMetricData',
      'GetDistributions',
      'GetDomain',
      'GetDomains',
      'GetExportSnapshotRecords',
      'GetInstance',
      'GetInstanceMetricData',
      'GetInstancePortStates',
      'GetInstanceSnapshot',
      'GetInstanceSnapshots',
      'GetInstanceState',
      'GetInstances',
      'GetKeyPair',
      'GetKeyPairs',
      'GetLoadBalancer',
      'GetLoadBalancerMetricData',
      'GetLoadBalancerTlsCertificates',
      'GetLoadBalancerTlsPolicies',
      'GetLoadBalancers',
      'GetOperation',
      'GetOperations',
      'GetOperationsForResource',
      'GetRegions',
      'GetRelationalDatabase',
      'GetRelationalDatabaseBlueprints',
      'GetRelationalDatabaseBundles',
      'GetRelationalDatabaseEvents',
      'GetRelationalDatabaseLogEvents',
      'GetRelationalDatabaseLogStreams',
      'GetRelationalDatabaseMetricData',
      'GetRelationalDatabaseParameters',
      'GetRelationalDatabaseSnapshot',
      'GetRelationalDatabaseSnapshots',
      'GetRelationalDatabases',
      'GetSetupHistory',
      'GetStaticIp',
      'GetStaticIps',
      'IsVpcPeered'
    ],
    Tagging: [
      'TagResource',
      'UntagResource'
    ]
  };

  /**
   * Adds a resource of type Domain to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Domain.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomain(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:Domain/${ id }`);
  }

  /**
   * Adds a resource of type Instance to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Instance.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInstance(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:Instance/${ id }`);
  }

  /**
   * Adds a resource of type InstanceSnapshot to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_InstanceSnapshot.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInstanceSnapshot(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:InstanceSnapshot/${ id }`);
  }

  /**
   * Adds a resource of type KeyPair to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_KeyPair.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKeyPair(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:KeyPair/${ id }`);
  }

  /**
   * Adds a resource of type StaticIp to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StaticIp.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStaticIp(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:StaticIp/${ id }`);
  }

  /**
   * Adds a resource of type Disk to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Disk.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDisk(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:Disk/${ id }`);
  }

  /**
   * Adds a resource of type DiskSnapshot to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DiskSnapshot.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDiskSnapshot(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:DiskSnapshot/${ id }`);
  }

  /**
   * Adds a resource of type LoadBalancer to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_LoadBalancer.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLoadBalancer(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:LoadBalancer/${ id }`);
  }

  /**
   * Adds a resource of type LoadBalancerTlsCertificate to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_LoadBalancerTlsCertificate.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onLoadBalancerTlsCertificate(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:LoadBalancerTlsCertificate/${ id }`);
  }

  /**
   * Adds a resource of type ExportSnapshotRecord to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ExportSnapshotRecord.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onExportSnapshotRecord(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ExportSnapshotRecord/${ id }`);
  }

  /**
   * Adds a resource of type CloudFormationStackRecord to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CloudFormationStackRecord.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCloudFormationStackRecord(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:CloudFormationStackRecord/${ id }`);
  }

  /**
   * Adds a resource of type RelationalDatabase to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RelationalDatabase.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRelationalDatabase(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:RelationalDatabase/${ id }`);
  }

  /**
   * Adds a resource of type RelationalDatabaseSnapshot to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RelationalDatabaseSnapshot.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRelationalDatabaseSnapshot(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:RelationalDatabaseSnapshot/${ id }`);
  }

  /**
   * Adds a resource of type Alarm to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Alarm.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onAlarm(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:Alarm/${ id }`);
  }

  /**
   * Adds a resource of type Certificate to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Certificate.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCertificate(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:Certificate/${ id }`);
  }

  /**
   * Adds a resource of type ContactMethod to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ContactMethod.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onContactMethod(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ContactMethod/${ id }`);
  }

  /**
   * Adds a resource of type ContainerService to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ContainerService.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onContainerService(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:ContainerService/${ id }`);
  }

  /**
   * Adds a resource of type Distribution to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_LightsailDistribution.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDistribution(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:Distribution/${ id }`);
  }

  /**
   * Adds a resource of type Bucket to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Bucket.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBucket(id: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:lightsail:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:Bucket/${ id }`);
  }

  /**
   * Filters access by a tag key and value pair that is allowed in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toCreateBucket()
   * - .toCreateCertificate()
   * - .toCreateContainerService()
   * - .toCreateDisk()
   * - .toCreateDiskFromSnapshot()
   * - .toCreateDiskSnapshot()
   * - .toCreateDistribution()
   * - .toCreateDomain()
   * - .toCreateInstanceSnapshot()
   * - .toCreateInstances()
   * - .toCreateInstancesFromSnapshot()
   * - .toCreateKeyPair()
   * - .toCreateLoadBalancer()
   * - .toCreateRelationalDatabase()
   * - .toCreateRelationalDatabaseFromSnapshot()
   * - .toCreateRelationalDatabaseSnapshot()
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
   * - Domain
   * - Instance
   * - InstanceSnapshot
   * - KeyPair
   * - StaticIp
   * - Disk
   * - DiskSnapshot
   * - LoadBalancer
   * - RelationalDatabase
   * - RelationalDatabaseSnapshot
   * - Certificate
   * - ContainerService
   * - Distribution
   * - Bucket
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
   * - .toCreateBucket()
   * - .toCreateCertificate()
   * - .toCreateContainerService()
   * - .toCreateDisk()
   * - .toCreateDiskFromSnapshot()
   * - .toCreateDiskSnapshot()
   * - .toCreateDistribution()
   * - .toCreateDomain()
   * - .toCreateInstanceSnapshot()
   * - .toCreateInstances()
   * - .toCreateInstancesFromSnapshot()
   * - .toCreateKeyPair()
   * - .toCreateLoadBalancer()
   * - .toCreateRelationalDatabase()
   * - .toCreateRelationalDatabaseFromSnapshot()
   * - .toCreateRelationalDatabaseSnapshot()
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
