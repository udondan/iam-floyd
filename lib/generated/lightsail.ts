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
    this.to('lightsail:AllocateStaticIp');
    return this;
  }

  /**
   * Attaches a disk to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachDisk.html
   */
  public toAttachDisk() {
    this.to('lightsail:AttachDisk');
    return this;
  }

  /**
   * Attaches one or more instances to a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachInstancesToLoadBalancer.html
   */
  public toAttachInstancesToLoadBalancer() {
    this.to('lightsail:AttachInstancesToLoadBalancer');
    return this;
  }

  /**
   * Attaches a TLS certificate to a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachLoadBalancerTlsCertificate.html
   */
  public toAttachLoadBalancerTlsCertificate() {
    this.to('lightsail:AttachLoadBalancerTlsCertificate');
    return this;
  }

  /**
   * Attaches a static IP address to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_AttachStaticIp.html
   */
  public toAttachStaticIp() {
    this.to('lightsail:AttachStaticIp');
    return this;
  }

  /**
   * Closes a public port of an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CloseInstancePublicPorts.html
   */
  public toCloseInstancePublicPorts() {
    this.to('lightsail:CloseInstancePublicPorts');
    return this;
  }

  /**
   * Copies a snapshot from one AWS Region to another in Amazon Lightsail.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CopySnapshot.html
   */
  public toCopySnapshot() {
    this.to('lightsail:CopySnapshot');
    return this;
  }

  /**
   * Creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateCloudFormationStack.html
   */
  public toCreateCloudFormationStack() {
    this.to('lightsail:CreateCloudFormationStack');
    return this;
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
    this.to('lightsail:CreateDisk');
    return this;
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
    this.to('lightsail:CreateDiskFromSnapshot');
    return this;
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
    this.to('lightsail:CreateDiskSnapshot');
    return this;
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
    this.to('lightsail:CreateDomain');
    return this;
  }

  /**
   * Creates one or more DNS record entries for a domain resource: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomainEntry.html
   */
  public toCreateDomainEntry() {
    this.to('lightsail:CreateDomainEntry');
    return this;
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
    this.to('lightsail:CreateInstanceSnapshot');
    return this;
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
    this.to('lightsail:CreateInstances');
    return this;
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
    this.to('lightsail:CreateInstancesFromSnapshot');
    return this;
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
    this.to('lightsail:CreateKeyPair');
    return this;
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
    this.to('lightsail:CreateLoadBalancer');
    return this;
  }

  /**
   * Creates a load balancer TLS certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateLoadBalancerTlsCertificate.html
   */
  public toCreateLoadBalancerTlsCertificate() {
    this.to('lightsail:CreateLoadBalancerTlsCertificate');
    return this;
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
    this.to('lightsail:CreateRelationalDatabase');
    return this;
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
    this.to('lightsail:CreateRelationalDatabaseFromSnapshot');
    return this;
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
    this.to('lightsail:CreateRelationalDatabaseSnapshot');
    return this;
  }

  /**
   * Deletes a disk.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDisk.html
   */
  public toDeleteDisk() {
    this.to('lightsail:DeleteDisk');
    return this;
  }

  /**
   * Deletes a disk snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDiskSnapshot.html
   */
  public toDeleteDiskSnapshot() {
    this.to('lightsail:DeleteDiskSnapshot');
    return this;
  }

  /**
   * Deletes a domain resource and all of its DNS records.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    this.to('lightsail:DeleteDomain');
    return this;
  }

  /**
   * Deletes a DNS record entry for a domain resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteDomainEntry.html
   */
  public toDeleteDomainEntry() {
    this.to('lightsail:DeleteDomainEntry');
    return this;
  }

  /**
   * Deletes an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstance.html
   */
  public toDeleteInstance() {
    this.to('lightsail:DeleteInstance');
    return this;
  }

  /**
   * Deletes an instance snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteInstanceSnapshot.html
   */
  public toDeleteInstanceSnapshot() {
    this.to('lightsail:DeleteInstanceSnapshot');
    return this;
  }

  /**
   * Deletes a key pair used to authenticate and connect to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKeyPair.html
   */
  public toDeleteKeyPair() {
    this.to('lightsail:DeleteKeyPair');
    return this;
  }

  /**
   * Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteKnownHostKeys.html
   */
  public toDeleteKnownHostKeys() {
    this.to('lightsail:DeleteKnownHostKeys');
    return this;
  }

  /**
   * Deletes a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancer.html
   */
  public toDeleteLoadBalancer() {
    this.to('lightsail:DeleteLoadBalancer');
    return this;
  }

  /**
   * Deletes a load balancer TLS certificate.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancerTlsCertificate.html
   */
  public toDeleteLoadBalancerTlsCertificate() {
    this.to('lightsail:DeleteLoadBalancerTlsCertificate');
    return this;
  }

  /**
   * Deletes a relational database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabase.html
   */
  public toDeleteRelationalDatabase() {
    this.to('lightsail:DeleteRelationalDatabase');
    return this;
  }

  /**
   * Deletes relational database snapshot.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteRelationalDatabaseSnapshot.html
   */
  public toDeleteRelationalDatabaseSnapshot() {
    this.to('lightsail:DeleteRelationalDatabaseSnapshot');
    return this;
  }

  /**
   * Detaches a disk from an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachDisk.html
   */
  public toDetachDisk() {
    this.to('lightsail:DetachDisk');
    return this;
  }

  /**
   * Detaches one or more instances from a load balancer.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html
   */
  public toDetachInstancesFromLoadBalancer() {
    this.to('lightsail:DetachInstancesFromLoadBalancer');
    return this;
  }

  /**
   * Detaches a static IP from an instance to which it is attached.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachStaticIp.html
   */
  public toDetachStaticIp() {
    this.to('lightsail:DetachStaticIp');
    return this;
  }

  /**
   * Downloads the default key pair used to authenticate and connect to instances in a specific AWS Region.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html
   */
  public toDownloadDefaultKeyPair() {
    this.to('lightsail:DownloadDefaultKeyPair');
    return this;
  }

  /**
   * Exports an Amazon Lightsail snapshot to Amazon EC2.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ExportSnapshot.html
   */
  public toExportSnapshot() {
    this.to('lightsail:ExportSnapshot');
    return this;
  }

  /**
   * Returns the names of all active (not deleted) resources.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetActiveNames.html
   */
  public toGetActiveNames() {
    this.to('lightsail:GetActiveNames');
    return this;
  }

  /**
   * Returns a list of instance images, or blueprints. You can use a blueprint to create a new instance already running a specific operating system, as well as a pre-installed application or development stack. The software that runs on your instance depends on the blueprint you define when creating the instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBlueprints.html
   */
  public toGetBlueprints() {
    this.to('lightsail:GetBlueprints');
    return this;
  }

  /**
   * Returns a list of instance bundles. You can use a bundle to create a new instance with a set of performance specifications, such as CPU count, disk size, RAM size, and network transfer allowance. The cost of your instance depends on the bundle you define when creating the instance.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBundles.html
   */
  public toGetBundles() {
    this.to('lightsail:GetBundles');
    return this;
  }

  /**
   * Returns information about all CloudFormation stacks used to create Amazon EC2 resources from exported Amazon Lightsail snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetCloudFormationStackRecords.html
   */
  public toGetCloudFormationStackRecords() {
    this.to('lightsail:GetCloudFormationStackRecords');
    return this;
  }

  /**
   * Returns information about a disk.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisk.html
   */
  public toGetDisk() {
    this.to('lightsail:GetDisk');
    return this;
  }

  /**
   * Returns information about a disk snapshot.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshot.html
   */
  public toGetDiskSnapshot() {
    this.to('lightsail:GetDiskSnapshot');
    return this;
  }

  /**
   * Returns information about all disk snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDiskSnapshots.html
   */
  public toGetDiskSnapshots() {
    this.to('lightsail:GetDiskSnapshots');
    return this;
  }

  /**
   * Returns information about all disks.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDisks.html
   */
  public toGetDisks() {
    this.to('lightsail:GetDisks');
    return this;
  }

  /**
   * Returns DNS records for a domain resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomain.html
   */
  public toGetDomain() {
    this.to('lightsail:GetDomain');
    return this;
  }

  /**
   * Returns DNS records for all domain resources.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetDomains.html
   */
  public toGetDomains() {
    this.to('lightsail:GetDomains');
    return this;
  }

  /**
   * Returns information about all records to export Amazon Lightsail snapshots to Amazon EC2.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetExportSnapshotRecords.html
   */
  public toGetExportSnapshotRecords() {
    this.to('lightsail:GetExportSnapshotRecords');
    return this;
  }

  /**
   * Returns information about an instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstance.html
   */
  public toGetInstance() {
    this.to('lightsail:GetInstance');
    return this;
  }

  /**
   * Returns temporary keys you can use to authenticate and connect to an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceAccessDetails.html
   */
  public toGetInstanceAccessDetails() {
    this.to('lightsail:GetInstanceAccessDetails');
    return this;
  }

  /**
   * Returns the data points for the specified metric of an instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceMetricData.html
   */
  public toGetInstanceMetricData() {
    this.to('lightsail:GetInstanceMetricData');
    return this;
  }

  /**
   * Returns the port states of an instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstancePortStates.html
   */
  public toGetInstancePortStates() {
    this.to('lightsail:GetInstancePortStates');
    return this;
  }

  /**
   * Returns information about an instance snapshot.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshot.html
   */
  public toGetInstanceSnapshot() {
    this.to('lightsail:GetInstanceSnapshot');
    return this;
  }

  /**
   * Returns information about all instance snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceSnapshots.html
   */
  public toGetInstanceSnapshots() {
    this.to('lightsail:GetInstanceSnapshots');
    return this;
  }

  /**
   * Returns the state of an instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstanceState.html
   */
  public toGetInstanceState() {
    this.to('lightsail:GetInstanceState');
    return this;
  }

  /**
   * Returns information about all instances.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetInstances.html
   */
  public toGetInstances() {
    this.to('lightsail:GetInstances');
    return this;
  }

  /**
   * Returns information about a key pair.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPair.html
   */
  public toGetKeyPair() {
    this.to('lightsail:GetKeyPair');
    return this;
  }

  /**
   * Returns information about all key pairs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetKeyPairs.html
   */
  public toGetKeyPairs() {
    this.to('lightsail:GetKeyPairs');
    return this;
  }

  /**
   * Returns information about a load balancer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancer.html
   */
  public toGetLoadBalancer() {
    this.to('lightsail:GetLoadBalancer');
    return this;
  }

  /**
   * Returns the data points for the specified metric of a load balancer.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancerMetricData.html
   */
  public toGetLoadBalancerMetricData() {
    this.to('lightsail:GetLoadBalancerMetricData');
    return this;
  }

  /**
   * Returns information about a load balancer TLS certificate.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DeleteLoadBalancerTlsCertificate.html
   */
  public toGetLoadBalancerTlsCertificates() {
    this.to('lightsail:GetLoadBalancerTlsCertificates');
    return this;
  }

  /**
   * Returns information about load balancers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetLoadBalancers.html
   */
  public toGetLoadBalancers() {
    this.to('lightsail:GetLoadBalancers');
    return this;
  }

  /**
   * Returns information about an operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperation.html
   */
  public toGetOperation() {
    this.to('lightsail:GetOperation');
    return this;
  }

  /**
   * Returns information about all operations. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperations.html
   */
  public toGetOperations() {
    this.to('lightsail:GetOperations');
    return this;
  }

  /**
   * Returns operations for a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetOperationsForResource.html
   */
  public toGetOperationsForResource() {
    this.to('lightsail:GetOperationsForResource');
    return this;
  }

  /**
   * Returns a list of all valid AWS Regions for Amazon Lightsail.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html
   */
  public toGetRegions() {
    this.to('lightsail:GetRegions');
    return this;
  }

  /**
   * Returns information about a relational database.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabase.html
   */
  public toGetRelationalDatabase() {
    this.to('lightsail:GetRelationalDatabase');
    return this;
  }

  /**
   * Returns a list of relational database images, or blueprints. You can use a blueprint to create a new database running a specific database engine. The database engine that runs on your database depends on the blueprint you define when creating the relational database.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBlueprints.html
   */
  public toGetRelationalDatabaseBlueprints() {
    this.to('lightsail:GetRelationalDatabaseBlueprints');
    return this;
  }

  /**
   * Returns a list of relational database bundles. You can use a bundle to create a new database with a set of performance specifications, such as CPU count, disk size, RAM size, network transfer allowance, and standard of high availability. The cost of your database depends on the bundle you define when creating the relational database.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseBundles.html
   */
  public toGetRelationalDatabaseBundles() {
    this.to('lightsail:GetRelationalDatabaseBundles');
    return this;
  }

  /**
   * Returns events for a relational database.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseEvents.html
   */
  public toGetRelationalDatabaseEvents() {
    this.to('lightsail:GetRelationalDatabaseEvents');
    return this;
  }

  /**
   * Returns events for the specified log stream of a relational database.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogEvents.html
   */
  public toGetRelationalDatabaseLogEvents() {
    this.to('lightsail:GetRelationalDatabaseLogEvents');
    return this;
  }

  /**
   * Returns the log streams available for a relational database.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseLogStreams.html
   */
  public toGetRelationalDatabaseLogStreams() {
    this.to('lightsail:GetRelationalDatabaseLogStreams');
    return this;
  }

  /**
   * Returns the master user password of a relational database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMasterUserPassword.html
   */
  public toGetRelationalDatabaseMasterUserPassword() {
    this.to('lightsail:GetRelationalDatabaseMasterUserPassword');
    return this;
  }

  /**
   * Returns the data points for the specified metric of a relational database.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseMetricData.html
   */
  public toGetRelationalDatabaseMetricData() {
    this.to('lightsail:GetRelationalDatabaseMetricData');
    return this;
  }

  /**
   * Returns the parameters of a relational database.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseParameters.html
   */
  public toGetRelationalDatabaseParameters() {
    this.to('lightsail:GetRelationalDatabaseParameters');
    return this;
  }

  /**
   * Returns information about a relational database snapshot.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshot.html
   */
  public toGetRelationalDatabaseSnapshot() {
    this.to('lightsail:GetRelationalDatabaseSnapshot');
    return this;
  }

  /**
   * Returns information about all relational database snapshots.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabaseSnapshots.html
   */
  public toGetRelationalDatabaseSnapshots() {
    this.to('lightsail:GetRelationalDatabaseSnapshots');
    return this;
  }

  /**
   * Return information about all relational databases.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRelationalDatabases.html
   */
  public toGetRelationalDatabases() {
    this.to('lightsail:GetRelationalDatabases');
    return this;
  }

  /**
   * Returns information about a static IP.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIp.html
   */
  public toGetStaticIp() {
    this.to('lightsail:GetStaticIp');
    return this;
  }

  /**
   * Returns information about all static IPs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetStaticIps.html
   */
  public toGetStaticIps() {
    this.to('lightsail:GetStaticIps');
    return this;
  }

  /**
   * Imports a public key from a key pair.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html
   */
  public toImportKeyPair() {
    this.to('lightsail:ImportKeyPair');
    return this;
  }

  /**
   * Returns a boolean value indicating whether the Amazon Lightsail virtual private cloud (VPC) is peered.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_IsVpcPeered.html
   */
  public toIsVpcPeered() {
    this.to('lightsail:IsVpcPeered');
    return this;
  }

  /**
   * Adds, or opens a public port of an instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_OpenInstancePublicPorts.html
   */
  public toOpenInstancePublicPorts() {
    this.to('lightsail:OpenInstancePublicPorts');
    return this;
  }

  /**
   * Tries to peer the Amazon Lightsail virtual private cloud (VPC) with the default VPC.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PeerVpc.html
   */
  public toPeerVpc() {
    this.to('lightsail:PeerVpc');
    return this;
  }

  /**
   * Sets the specified open ports for an instance, and closes all ports for every protocol not included in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_PutInstancePublicPorts.html
   */
  public toPutInstancePublicPorts() {
    this.to('lightsail:PutInstancePublicPorts');
    return this;
  }

  /**
   * Reboots an instance that is in a running state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootInstance.html
   */
  public toRebootInstance() {
    this.to('lightsail:RebootInstance');
    return this;
  }

  /**
   * Reboots a relational database that is in a running state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_RebootRelationalDatabase.html
   */
  public toRebootRelationalDatabase() {
    this.to('lightsail:RebootRelationalDatabase');
    return this;
  }

  /**
   * Deletes a static IP.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ReleaseStaticIp.html
   */
  public toReleaseStaticIp() {
    this.to('lightsail:ReleaseStaticIp');
    return this;
  }

  /**
   * Starts an instance that is in a stopped state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartInstance.html
   */
  public toStartInstance() {
    this.to('lightsail:StartInstance');
    return this;
  }

  /**
   * Starts a relational database that is in a stopped state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StartRelationalDatabase.html
   */
  public toStartRelationalDatabase() {
    this.to('lightsail:StartRelationalDatabase');
    return this;
  }

  /**
   * Stops an instance that is in a running state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopInstance.html
   */
  public toStopInstance() {
    this.to('lightsail:StopInstance');
    return this;
  }

  /**
   * Stops a relational database that is in a running state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_StopRelationalDatabase.html
   */
  public toStopRelationalDatabase() {
    this.to('lightsail:StopRelationalDatabase');
    return this;
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
    this.to('lightsail:TagResource');
    return this;
  }

  /**
   * Attempts to unpeer the Amazon Lightsail virtual private cloud (VPC) from the default VPC.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UnpeerVpc.html
   */
  public toUnpeerVpc() {
    this.to('lightsail:UnpeerVpc');
    return this;
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
    this.to('lightsail:UntagResource');
    return this;
  }

  /**
   * Updates a domain recordset after it is created.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateDomainEntry.html
   */
  public toUpdateDomainEntry() {
    this.to('lightsail:UpdateDomainEntry');
    return this;
  }

  /**
   * Updates a load balancer attribute, such as the health check path and session stickiness.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DetachInstancesFromLoadBalancer.html
   */
  public toUpdateLoadBalancerAttribute() {
    this.to('lightsail:UpdateLoadBalancerAttribute');
    return this;
  }

  /**
   * Updates a relational database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabase.html
   */
  public toUpdateRelationalDatabase() {
    this.to('lightsail:UpdateRelationalDatabase');
    return this;
  }

  /**
   * Updates the parameters of a relational database.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateRelationalDatabaseParameters.html
   */
  public toUpdateRelationalDatabaseParameters() {
    this.to('lightsail:UpdateRelationalDatabaseParameters');
    return this;
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

export type LightsailActionsWrite = 'AllocateStaticIp' | 'AttachDisk' | 'AttachInstancesToLoadBalancer' | 'AttachLoadBalancerTlsCertificate' | 'AttachStaticIp' | 'CloseInstancePublicPorts' | 'CopySnapshot' | 'CreateCloudFormationStack' | 'CreateDisk' | 'CreateDiskFromSnapshot' | 'CreateDiskSnapshot' | 'CreateDomain' | 'CreateDomainEntry' | 'CreateInstanceSnapshot' | 'CreateInstances' | 'CreateInstancesFromSnapshot' | 'CreateKeyPair' | 'CreateLoadBalancer' | 'CreateLoadBalancerTlsCertificate' | 'CreateRelationalDatabase' | 'CreateRelationalDatabaseFromSnapshot' | 'CreateRelationalDatabaseSnapshot' | 'DeleteDisk' | 'DeleteDiskSnapshot' | 'DeleteDomain' | 'DeleteDomainEntry' | 'DeleteInstance' | 'DeleteInstanceSnapshot' | 'DeleteKeyPair' | 'DeleteKnownHostKeys' | 'DeleteLoadBalancer' | 'DeleteLoadBalancerTlsCertificate' | 'DeleteRelationalDatabase' | 'DeleteRelationalDatabaseSnapshot' | 'DetachDisk' | 'DetachInstancesFromLoadBalancer' | 'DetachStaticIp' | 'DownloadDefaultKeyPair' | 'ExportSnapshot' | 'GetInstanceAccessDetails' | 'GetRelationalDatabaseMasterUserPassword' | 'ImportKeyPair' | 'OpenInstancePublicPorts' | 'PeerVpc' | 'PutInstancePublicPorts' | 'RebootInstance' | 'RebootRelationalDatabase' | 'ReleaseStaticIp' | 'StartInstance' | 'StartRelationalDatabase' | 'StopInstance' | 'StopRelationalDatabase' | 'TagResource' | 'UnpeerVpc' | 'UntagResource' | 'UpdateDomainEntry' | 'UpdateLoadBalancerAttribute' | 'UpdateRelationalDatabase' | 'UpdateRelationalDatabaseParameters';
export type LightsailActionsRead = 'GetActiveNames' | 'GetDisk' | 'GetDiskSnapshot' | 'GetDomain' | 'GetDomains' | 'GetInstance' | 'GetInstanceMetricData' | 'GetInstancePortStates' | 'GetInstanceSnapshot' | 'GetInstanceState' | 'GetInstances' | 'GetKeyPairs' | 'GetLoadBalancer' | 'GetLoadBalancerMetricData' | 'GetLoadBalancerTlsCertificates' | 'GetLoadBalancers' | 'GetOperation' | 'GetOperations' | 'GetOperationsForResource' | 'GetRelationalDatabaseEvents' | 'GetRelationalDatabaseLogEvents' | 'GetRelationalDatabaseLogStreams' | 'GetRelationalDatabaseMetricData' | 'GetRelationalDatabases' | 'GetStaticIp' | 'GetStaticIps' | 'IsVpcPeered';
export type LightsailActionsList = 'GetBlueprints' | 'GetBundles' | 'GetCloudFormationStackRecords' | 'GetDiskSnapshots' | 'GetDisks' | 'GetExportSnapshotRecords' | 'GetInstanceSnapshots' | 'GetKeyPair' | 'GetRegions' | 'GetRelationalDatabase' | 'GetRelationalDatabaseBlueprints' | 'GetRelationalDatabaseBundles' | 'GetRelationalDatabaseParameters' | 'GetRelationalDatabaseSnapshot' | 'GetRelationalDatabaseSnapshots';
export type LightsailActions = LightsailActionsWrite | LightsailActionsRead | LightsailActionsList;
