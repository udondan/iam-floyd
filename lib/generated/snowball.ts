import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [snowball](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssnowball.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Snowball extends PolicyStatement {
  public servicePrefix = 'snowball';

  /**
   * Statement provider for service [snowball](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssnowball.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Cancels a cluster job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CancelCluster.html
   */
  public toCancelCluster() {
    return this.to('CancelCluster');
  }

  /**
   * Cancels the specified job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CancelJob.html
   */
  public toCancelJob() {
    return this.to('CancelJob');
  }

  /**
   * Creates an address for a Snowball to be shipped to.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateAddress.html
   */
  public toCreateAddress() {
    return this.to('CreateAddress');
  }

  /**
   * Creates an empty cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateCluster.html
   */
  public toCreateCluster() {
    return this.to('CreateCluster');
  }

  /**
   * Creates a job to import or export data between Amazon S3 and your on-premises data center.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateJob.html
   */
  public toCreateJob() {
    return this.to('CreateJob');
  }

  /**
   * Grants permission to creates a LongTermPricingListEntry for allowing customers to add an upfront billing contract for a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateLongTermPricing.html
   */
  public toCreateLongTermPricing() {
    return this.to('CreateLongTermPricing');
  }

  /**
   * Creates a shipping label that will be used to return the Snow device to AWS.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateReturnShippingLabel.html
   */
  public toCreateReturnShippingLabel() {
    return this.to('CreateReturnShippingLabel');
  }

  /**
   * Takes an AddressId and returns specific details about that address in the form of an Address object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeAddress.html
   */
  public toDescribeAddress() {
    return this.to('DescribeAddress');
  }

  /**
   * Returns a specified number of ADDRESS objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeAddresses.html
   */
  public toDescribeAddresses() {
    return this.to('DescribeAddresses');
  }

  /**
   * Returns information about a specific cluster including shipping information, cluster status, and other important metadata.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeCluster.html
   */
  public toDescribeCluster() {
    return this.to('DescribeCluster');
  }

  /**
   * Returns information about a specific job including shipping information, job status, and other important metadata.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeJob.html
   */
  public toDescribeJob() {
    return this.to('DescribeJob');
  }

  /**
   * Information on the shipping label of a Snow device that is being returned to AWS.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeReturnShippingLabel.html
   */
  public toDescribeReturnShippingLabel() {
    return this.to('DescribeReturnShippingLabel');
  }

  /**
   * Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified JobId value.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetJobManifest.html
   */
  public toGetJobManifest() {
    return this.to('GetJobManifest');
  }

  /**
   * Returns the UnlockCode code value for the specified job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetJobUnlockCode.html
   */
  public toGetJobUnlockCode() {
    return this.to('GetJobUnlockCode');
  }

  /**
   * Returns information about the Snowball service limit for your account, and also the number of Snowballs your account has in use.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetSnowballUsage.html
   */
  public toGetSnowballUsage() {
    return this.to('GetSnowballUsage');
  }

  /**
   * Returns an Amazon S3 presigned URL for an update file associated with a specified JobId.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetSoftwareUpdates.html
   */
  public toGetSoftwareUpdates() {
    return this.to('GetSoftwareUpdates');
  }

  /**
   * Returns an array of JobListEntry objects of the specified length.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListClusterJobs.html
   */
  public toListClusterJobs() {
    return this.to('ListClusterJobs');
  }

  /**
   * Returns an array of ClusterListEntry objects of the specified length.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListClusters.html
   */
  public toListClusters() {
    return this.to('ListClusters');
  }

  /**
   * This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs) that are owned by your AWS account that would be supported for use on a Snow device.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListCompatibleImages.html
   */
  public toListCompatibleImages() {
    return this.to('ListCompatibleImages');
  }

  /**
   * Returns an array of JobListEntry objects of the specified length.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListJobs.html
   */
  public toListJobs() {
    return this.to('ListJobs');
  }

  /**
   * Grants permission to list LongTermPricingListEntry objects for the account making the request
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListLongTermPricing.html
   */
  public toListLongTermPricing() {
    return this.to('ListLongTermPricing');
  }

  /**
   * While a cluster's ClusterState value is in the AwaitingQuorum state, you can update some of the information associated with a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateCluster.html
   */
  public toUpdateCluster() {
    return this.to('UpdateCluster');
  }

  /**
   * While a job's JobState value is New, you can update some of the information associated with a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateJob.html
   */
  public toUpdateJob() {
    return this.to('UpdateJob');
  }

  /**
   * Updates the state when a the shipment states changes to a different state.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateJobShipmentState.html
   */
  public toUpdateJobShipmentState() {
    return this.to('UpdateJobShipmentState');
  }

  /**
   * Grants permission to update a specific upfront billing contract for a job
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateLongTermPricing.html
   */
  public toUpdateLongTermPricing() {
    return this.to('UpdateLongTermPricing');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "CancelCluster",
      "CancelJob",
      "CreateAddress",
      "CreateCluster",
      "CreateJob",
      "CreateLongTermPricing",
      "CreateReturnShippingLabel",
      "UpdateCluster",
      "UpdateJob",
      "UpdateJobShipmentState",
      "UpdateLongTermPricing"
    ],
    "Read": [
      "DescribeAddress",
      "DescribeCluster",
      "DescribeJob",
      "DescribeReturnShippingLabel",
      "GetJobManifest",
      "GetJobUnlockCode",
      "GetSnowballUsage",
      "GetSoftwareUpdates",
      "ListLongTermPricing"
    ],
    "List": [
      "DescribeAddresses",
      "ListClusterJobs",
      "ListClusters",
      "ListCompatibleImages",
      "ListJobs"
    ]
  };
}
