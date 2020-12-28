import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

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
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates a static IP address that can be attached to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AllocateStaticIp.html
   */
  public toAllocateStaticIp() {
    return this.to('AllocateStaticIp');
  }

  /**
   * Attaches a disk to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachDisk.html
   */
  public toAttachDisk() {
    return this.to('AttachDisk');
  }

  /**
   * Attaches one or more instances to a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachInstancesToLoadBalancer.html
   */
  public toAttachInstancesToLoadBalancer() {
    return this.to('AttachInstancesToLoadBalancer');
  }

  /**
   * Attaches a TLS certificate to a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachLoadBalancerTlsCertificate.html
   */
  public toAttachLoadBalancerTlsCertificate() {
    return this.to('AttachLoadBalancerTlsCertificate');
  }

  /**
   * Attaches a static IP address to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachStaticIp.html
   */
  public toAttachStaticIp() {
    return this.to('AttachStaticIp');
  }

  /**
   * Closes a public port of an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CloseInstancePublicPorts.html
   */
  public toCloseInstancePublicPorts() {
    return this.to('CloseInstancePublicPorts');
  }

  /**
   * Copies a snapshot from one AWS Region to another in Amazon Lightsail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CopySnapshot.html
   */
  public toCopySnapshot() {
    return this.to('CopySnapshot');
  }

  /**
   * Creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html
   */
  public toCreateCloudFormationStack() {
    return this.to('CreateCloudFormationStack');
  }

  /**
   * Creates a disk.
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
   * Creates a disk from snapshot.
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
   * Creates a disk snapshot.
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
   * Creates a domain resource for the specified domain name.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomain.html
   */
  public toCreateDomain() {
    return this.to('CreateDomain');
  }

  /**
   * Creates one or more DNS record entries for a domain resource: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomainEntry.html
   */
  public toCreateDomainEntry() {
    return this.to('CreateDomainEntry');
  }

  /**
   * Creates an instance snapshot.
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
   * Creates one or more instances.
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
   * Creates one or more instances based on an instance snapshot.
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
   * Creates a key pair used to authenticate and connect to an instance.
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
   * Creates a load balancer.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateLoadBalancer.html
   */
  public toCreateLoadBalancer() {
    return this.to('CreateLoadBalancer');
  }

  /**
   * Creates a load balancer TLS certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateLoadBalancerTlsCertificate.html
   */
  public toCreateLoadBalancerTlsCertificate() {
    return this.to('CreateLoadBalancerTlsCertificate');
  }

  /**
   * Creates a new relational database.
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
   * Creates a new relational database from a snapshot.
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
   * Creates a relational database snapshot.
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
   * Deletes a disk.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDisk.html
   */
  public toDeleteDisk() {
    return this.to('DeleteDisk');
  }

  /**
   * Deletes a disk snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDiskSnapshot.html
   */
  public toDeleteDiskSnapshot() {
    return this.to('DeleteDiskSnapshot');
  }

  /**
   * Deletes a domain resource and all of its DNS records.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    return this.to('DeleteDomain');
  }

  /**
   * Deletes a DNS record entry for a domain resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomainEntry.html
   */
  public toDeleteDomainEntry() {
    return this.to('DeleteDomainEntry');
  }

  /**
   * Deletes an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstance.html
   */
  public toDeleteInstance() {
    return this.to('DeleteInstance');
  }

  /**
   * Deletes an instance snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstanceSnapshot.html
   */
  public toDeleteInstanceSnapshot() {
    return this.to('DeleteInstanceSnapshot');
  }

  /**
   * Deletes a key pair used to authenticate and connect to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKeyPair.html
   */
  public toDeleteKeyPair() {
    return this.to('DeleteKeyPair');
  }

  /**
   * Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKnownHostKeys.html
   */
  public toDeleteKnownHostKeys() {
    return this.to('DeleteKnownHostKeys');
  }

  /**
   * Deletes a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancer.html
   */
  public toDeleteLoadBalancer() {
    return this.to('DeleteLoadBalancer');
  }

  /**
   * Deletes a load balancer TLS certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancerTlsCertificate.html
   */
  public toDeleteLoadBalancerTlsCertificate() {
    return this.to('DeleteLoadBalancerTlsCertificate');
  }

  /**
   * Deletes a relational database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabase.html
   */
  public toDeleteRelationalDatabase() {
    return this.to('DeleteRelationalDatabase');
  }

  /**
   * Deletes relational database snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabaseSnapshot.html
   */
  public toDeleteRelationalDatabaseSnapshot() {
    return this.to('DeleteRelationalDatabaseSnapshot');
  }

  /**
   * Detaches a disk from an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachDisk.html
   */
  public toDetachDisk() {
    return this.to('DetachDisk');
  }

  /**
   * Detaches one or more instances from a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html
   */
  public toDetachInstancesFromLoadBalancer() {
    return this.to('DetachInstancesFromLoadBalancer');
  }

  /**
   * Detaches a static IP from an instance to which it is attached.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachStaticIp.html
   */
  public toDetachStaticIp() {
    return this.to('DetachStaticIp');
  }

  /**
   * Downloads the default key pair used to authenticate and connect to instances in a specific AWS Region.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html
   */
  public toDownloadDefaultKeyPair() {
    return this.to('DownloadDefaultKeyPair');
  }

  /**
   * Exports an Amazon Lightsail snapshot to Amazon EC2.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ExportSnapshot.html
   */
  public toExportSnapshot() {
    return this.to('ExportSnapshot');
  }

  /**
   * Returns the names of all active (not deleted) resources.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetActiveNames.html
   */
  public toGetActiveNames() {
    return this.to('GetActiveNames');
  }

  /**
   * Returns a list of instance images, or blueprints. You can use a blueprint to create a new instance already running a specific operating system, as well as a pre-installed application or development stack. The software that runs on your instance depends on the blueprint you define when creating the instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBlueprints.html
   */
  public toGetBlueprints() {
    return this.to('GetBlueprints');
  }

  /**
   * Returns a list of instance bundles. You can use a bundle to create a new instance with a set of performance specifications, such as CPU count, disk size, RAM size, and network transfer allowance. The cost of your instance depends on the bundle you define when creating the instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBundles.html
   */
  public toGetBundles() {
    return this.to('GetBundles');
  }

  /**
   * Returns information about all CloudFormation stacks used to create Amazon EC2 resources from exported Amazon Lightsail snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCloudFormationStackRecords.html
   */
  public toGetCloudFormationStackRecords() {
    return this.to('GetCloudFormationStackRecords');
  }

  /**
   * Returns information about a disk.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisk.html
   */
  public toGetDisk() {
    return this.to('GetDisk');
  }

  /**
   * Returns information about a disk snapshot.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshot.html
   */
  public toGetDiskSnapshot() {
    return this.to('GetDiskSnapshot');
  }

  /**
   * Returns information about all disk snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshots.html
   */
  public toGetDiskSnapshots() {
    return this.to('GetDiskSnapshots');
  }

  /**
   * Returns information about all disks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisks.html
   */
  public toGetDisks() {
    return this.to('GetDisks');
  }

  /**
   * Returns DNS records for a domain resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomain.html
   */
  public toGetDomain() {
    return this.to('GetDomain');
  }

  /**
   * Returns DNS records for all domain resources.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomains.html
   */
  public toGetDomains() {
    return this.to('GetDomains');
  }

  /**
   * Returns information about all records to export Amazon Lightsail snapshots to Amazon EC2.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetExportSnapshotRecords.html
   */
  public toGetExportSnapshotRecords() {
    return this.to('GetExportSnapshotRecords');
  }

  /**
   * Returns information about an instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstance.html
   */
  public toGetInstance() {
    return this.to('GetInstance');
  }

  /**
   * Returns temporary keys you can use to authenticate and connect to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceAccessDetails.html
   */
  public toGetInstanceAccessDetails() {
    return this.to('GetInstanceAccessDetails');
  }

  /**
   * Returns the data points for the specified metric of an instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceMetricData.html
   */
  public toGetInstanceMetricData() {
    return this.to('GetInstanceMetricData');
  }

  /**
   * Returns the port states of an instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstancePortStates.html
   */
  public toGetInstancePortStates() {
    return this.to('GetInstancePortStates');
  }

  /**
   * Returns information about an instance snapshot.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshot.html
   */
  public toGetInstanceSnapshot() {
    return this.to('GetInstanceSnapshot');
  }

  /**
   * Returns information about all instance snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshots.html
   */
  public toGetInstanceSnapshots() {
    return this.to('GetInstanceSnapshots');
  }

  /**
   * Returns the state of an instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceState.html
   */
  public toGetInstanceState() {
    return this.to('GetInstanceState');
  }

  /**
   * Returns information about all instances.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstances.html
   */
  public toGetInstances() {
    return this.to('GetInstances');
  }

  /**
   * Returns information about a key pair.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPair.html
   */
  public toGetKeyPair() {
    return this.to('GetKeyPair');
  }

  /**
   * Returns information about all key pairs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPairs.html
   */
  public toGetKeyPairs() {
    return this.to('GetKeyPairs');
  }

  /**
   * Returns information about a load balancer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancer.html
   */
  public toGetLoadBalancer() {
    return this.to('GetLoadBalancer');
  }

  /**
   * Returns the data points for the specified metric of a load balancer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerMetricData.html
   */
  public toGetLoadBalancerMetricData() {
    return this.to('GetLoadBalancerMetricData');
  }

  /**
   * Returns information about a load balancer TLS certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancerTlsCertificate.html
   */
  public toGetLoadBalancerTlsCertificates() {
    return this.to('GetLoadBalancerTlsCertificates');
  }

  /**
   * Returns information about load balancers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancers.html
   */
  public toGetLoadBalancers() {
    return this.to('GetLoadBalancers');
  }

  /**
   * Returns information about an operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperation.html
   */
  public toGetOperation() {
    return this.to('GetOperation');
  }

  /**
   * Returns information about all operations. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperations.html
   */
  public toGetOperations() {
    return this.to('GetOperations');
  }

  /**
   * Returns operations for a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperationsForResource.html
   */
  public toGetOperationsForResource() {
    return this.to('GetOperationsForResource');
  }

  /**
   * Returns a list of all valid AWS Regions for Amazon Lightsail.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html
   */
  public toGetRegions() {
    return this.to('GetRegions');
  }

  /**
   * Returns information about a relational database.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabase.html
   */
  public toGetRelationalDatabase() {
    return this.to('GetRelationalDatabase');
  }

  /**
   * Returns a list of relational database images, or blueprints. You can use a blueprint to create a new database running a specific database engine. The database engine that runs on your database depends on the blueprint you define when creating the relational database.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBlueprints.html
   */
  public toGetRelationalDatabaseBlueprints() {
    return this.to('GetRelationalDatabaseBlueprints');
  }

  /**
   * Returns a list of relational database bundles. You can use a bundle to create a new database with a set of performance specifications, such as CPU count, disk size, RAM size, network transfer allowance, and standard of high availability. The cost of your database depends on the bundle you define when creating the relational database.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBundles.html
   */
  public toGetRelationalDatabaseBundles() {
    return this.to('GetRelationalDatabaseBundles');
  }

  /**
   * Returns events for a relational database.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseEvents.html
   */
  public toGetRelationalDatabaseEvents() {
    return this.to('GetRelationalDatabaseEvents');
  }

  /**
   * Returns events for the specified log stream of a relational database.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogEvents.html
   */
  public toGetRelationalDatabaseLogEvents() {
    return this.to('GetRelationalDatabaseLogEvents');
  }

  /**
   * Returns the log streams available for a relational database.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogStreams.html
   */
  public toGetRelationalDatabaseLogStreams() {
    return this.to('GetRelationalDatabaseLogStreams');
  }

  /**
   * Returns the master user password of a relational database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMasterUserPassword.html
   */
  public toGetRelationalDatabaseMasterUserPassword() {
    return this.to('GetRelationalDatabaseMasterUserPassword');
  }

  /**
   * Returns the data points for the specified metric of a relational database.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMetricData.html
   */
  public toGetRelationalDatabaseMetricData() {
    return this.to('GetRelationalDatabaseMetricData');
  }

  /**
   * Returns the parameters of a relational database.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseParameters.html
   */
  public toGetRelationalDatabaseParameters() {
    return this.to('GetRelationalDatabaseParameters');
  }

  /**
   * Returns information about a relational database snapshot.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshot.html
   */
  public toGetRelationalDatabaseSnapshot() {
    return this.to('GetRelationalDatabaseSnapshot');
  }

  /**
   * Returns information about all relational database snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshots.html
   */
  public toGetRelationalDatabaseSnapshots() {
    return this.to('GetRelationalDatabaseSnapshots');
  }

  /**
   * Return information about all relational databases.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabases.html
   */
  public toGetRelationalDatabases() {
    return this.to('GetRelationalDatabases');
  }

  /**
   * Returns information about a static IP.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIp.html
   */
  public toGetStaticIp() {
    return this.to('GetStaticIp');
  }

  /**
   * Returns information about all static IPs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIps.html
   */
  public toGetStaticIps() {
    return this.to('GetStaticIps');
  }

  /**
   * Imports a public key from a key pair.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html
   */
  public toImportKeyPair() {
    return this.to('ImportKeyPair');
  }

  /**
   * Returns a boolean value indicating whether the Amazon Lightsail virtual private cloud (VPC) is peered.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_IsVpcPeered.html
   */
  public toIsVpcPeered() {
    return this.to('IsVpcPeered');
  }

  /**
   * Adds, or opens a public port of an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_OpenInstancePublicPorts.html
   */
  public toOpenInstancePublicPorts() {
    return this.to('OpenInstancePublicPorts');
  }

  /**
   * Tries to peer the Amazon Lightsail virtual private cloud (VPC) with the default VPC.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PeerVpc.html
   */
  public toPeerVpc() {
    return this.to('PeerVpc');
  }

  /**
   * Sets the specified open ports for an instance, and closes all ports for every protocol not included in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PutInstancePublicPorts.html
   */
  public toPutInstancePublicPorts() {
    return this.to('PutInstancePublicPorts');
  }

  /**
   * Reboots an instance that is in a running state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootInstance.html
   */
  public toRebootInstance() {
    return this.to('RebootInstance');
  }

  /**
   * Reboots a relational database that is in a running state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootRelationalDatabase.html
   */
  public toRebootRelationalDatabase() {
    return this.to('RebootRelationalDatabase');
  }

  /**
   * Deletes a static IP.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ReleaseStaticIp.html
   */
  public toReleaseStaticIp() {
    return this.to('ReleaseStaticIp');
  }

  /**
   * Starts an instance that is in a stopped state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartInstance.html
   */
  public toStartInstance() {
    return this.to('StartInstance');
  }

  /**
   * Starts a relational database that is in a stopped state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartRelationalDatabase.html
   */
  public toStartRelationalDatabase() {
    return this.to('StartRelationalDatabase');
  }

  /**
   * Stops an instance that is in a running state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopInstance.html
   */
  public toStopInstance() {
    return this.to('StopInstance');
  }

  /**
   * Stops a relational database that is in a running state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopRelationalDatabase.html
   */
  public toStopRelationalDatabase() {
    return this.to('StopRelationalDatabase');
  }

  /**
   * Tags a resource.
   *
   * Access Level: Write
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
   * Attempts to unpeer the Amazon Lightsail virtual private cloud (VPC) from the default VPC.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UnpeerVpc.html
   */
  public toUnpeerVpc() {
    return this.to('UnpeerVpc');
  }

  /**
   * Untags a resource.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UntagResource.html
   */
  public toUntagResource() {
    return this.to('UntagResource');
  }

  /**
   * Updates a domain recordset after it is created.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateDomainEntry.html
   */
  public toUpdateDomainEntry() {
    return this.to('UpdateDomainEntry');
  }

  /**
   * Updates a load balancer attribute, such as the health check path and session stickiness.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html
   */
  public toUpdateLoadBalancerAttribute() {
    return this.to('UpdateLoadBalancerAttribute');
  }

  /**
   * Updates a relational database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabase.html
   */
  public toUpdateRelationalDatabase() {
    return this.to('UpdateRelationalDatabase');
  }

  /**
   * Updates the parameters of a relational database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabaseParameters.html
   */
  public toUpdateRelationalDatabaseParameters() {
    return this.to('UpdateRelationalDatabaseParameters');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AllocateStaticIp",
      "AttachDisk",
      "AttachInstancesToLoadBalancer",
      "AttachLoadBalancerTlsCertificate",
      "AttachStaticIp",
      "CloseInstancePublicPorts",
      "CopySnapshot",
      "CreateCloudFormationStack",
      "CreateDisk",
      "CreateDiskFromSnapshot",
      "CreateDiskSnapshot",
      "CreateDomain",
      "CreateDomainEntry",
      "CreateInstanceSnapshot",
      "CreateInstances",
      "CreateInstancesFromSnapshot",
      "CreateKeyPair",
      "CreateLoadBalancer",
      "CreateLoadBalancerTlsCertificate",
      "CreateRelationalDatabase",
      "CreateRelationalDatabaseFromSnapshot",
      "CreateRelationalDatabaseSnapshot",
      "DeleteDisk",
      "DeleteDiskSnapshot",
      "DeleteDomain",
      "DeleteDomainEntry",
      "DeleteInstance",
      "DeleteInstanceSnapshot",
      "DeleteKeyPair",
      "DeleteKnownHostKeys",
      "DeleteLoadBalancer",
      "DeleteLoadBalancerTlsCertificate",
      "DeleteRelationalDatabase",
      "DeleteRelationalDatabaseSnapshot",
      "DetachDisk",
      "DetachInstancesFromLoadBalancer",
      "DetachStaticIp",
      "DownloadDefaultKeyPair",
      "ExportSnapshot",
      "GetInstanceAccessDetails",
      "GetRelationalDatabaseMasterUserPassword",
      "ImportKeyPair",
      "OpenInstancePublicPorts",
      "PeerVpc",
      "PutInstancePublicPorts",
      "RebootInstance",
      "RebootRelationalDatabase",
      "ReleaseStaticIp",
      "StartInstance",
      "StartRelationalDatabase",
      "StopInstance",
      "StopRelationalDatabase",
      "TagResource",
      "UnpeerVpc",
      "UntagResource",
      "UpdateDomainEntry",
      "UpdateLoadBalancerAttribute",
      "UpdateRelationalDatabase",
      "UpdateRelationalDatabaseParameters"
    ],
    "Read": [
      "GetActiveNames",
      "GetDisk",
      "GetDiskSnapshot",
      "GetDomain",
      "GetDomains",
      "GetInstance",
      "GetInstanceMetricData",
      "GetInstancePortStates",
      "GetInstanceSnapshot",
      "GetInstanceState",
      "GetInstances",
      "GetKeyPairs",
      "GetLoadBalancer",
      "GetLoadBalancerMetricData",
      "GetLoadBalancerTlsCertificates",
      "GetLoadBalancers",
      "GetOperation",
      "GetOperations",
      "GetOperationsForResource",
      "GetRelationalDatabaseEvents",
      "GetRelationalDatabaseLogEvents",
      "GetRelationalDatabaseLogStreams",
      "GetRelationalDatabaseMetricData",
      "GetRelationalDatabases",
      "GetStaticIp",
      "GetStaticIps",
      "IsVpcPeered"
    ],
    "List": [
      "GetBlueprints",
      "GetBundles",
      "GetCloudFormationStackRecords",
      "GetDiskSnapshots",
      "GetDisks",
      "GetExportSnapshotRecords",
      "GetInstanceSnapshots",
      "GetKeyPair",
      "GetRegions",
      "GetRelationalDatabase",
      "GetRelationalDatabaseBlueprints",
      "GetRelationalDatabaseBundles",
      "GetRelationalDatabaseParameters",
      "GetRelationalDatabaseSnapshot",
      "GetRelationalDatabaseSnapshots"
    ]
  };

  /**
   * Adds a resource of type Domain to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Domain.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDomain(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:Domain/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Instance to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Instance.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInstance(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:Instance/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type InstanceSnapshot to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_InstanceSnapshot.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onInstanceSnapshot(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:InstanceSnapshot/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type KeyPair to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_KeyPair.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onKeyPair(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:KeyPair/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type StaticIp to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StaticIp.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStaticIp(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:StaticIp/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type Disk to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_Disk.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDisk(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:Disk/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type DiskSnapshot to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DiskSnapshot.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDiskSnapshot(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:DiskSnapshot/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type LoadBalancer to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_LoadBalancer.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLoadBalancer(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:LoadBalancer/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type PeeredVpc to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/PeeredVpc.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onPeeredVpc(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:PeeredVpc/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type LoadBalancerTlsCertificate to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/LoadBalancerTlsCertificate.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLoadBalancerTlsCertificate(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:LoadBalancerTlsCertificate/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type ExportSnapshotRecord to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ExportSnapshotRecord.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onExportSnapshotRecord(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:ExportSnapshotRecord/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type CloudFormationStackRecord to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CloudFormationStackRecord.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCloudFormationStackRecord(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:CloudFormationStackRecord/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type RelationalDatabase to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RelationalDatabase.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRelationalDatabase(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:RelationalDatabase/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type RelationalDatabaseSnapshot to the statement
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RelationalDatabaseSnapshot.html
   *
   * @param id - Identifier for the id.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onRelationalDatabaseSnapshot(id: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:lightsail:${Region}:${Account}:RelationalDatabaseSnapshot/${Id}';
    arn = arn.replace('${Id}', id);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
