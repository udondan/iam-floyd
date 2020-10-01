import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [snowball](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssnowball.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Snowball extends PolicyStatement {
  public servicePrefix = 'snowball';
  protected actionList: Actions = {
    "CancelCluster": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_CancelCluster.html",
      "description": "Cancels a cluster job.",
      "accessLevel": "Write"
    },
    "CancelJob": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_CancelJob.html",
      "description": "Cancels the specified job.",
      "accessLevel": "Write"
    },
    "CreateAddress": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateAddress.html",
      "description": "Creates an address for a Snowball to be shipped to.",
      "accessLevel": "Write"
    },
    "CreateCluster": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateCluster.html",
      "description": "Creates an empty cluster.",
      "accessLevel": "Write"
    },
    "CreateJob": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateJob.html",
      "description": "Creates a job to import or export data between Amazon S3 and your on-premises data center.",
      "accessLevel": "Write"
    },
    "DescribeAddress": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeAddress.html",
      "description": "Takes an AddressId and returns specific details about that address in the form of an Address object.",
      "accessLevel": "Read"
    },
    "DescribeAddresses": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeAddresses.html",
      "description": "Returns a specified number of ADDRESS objects.",
      "accessLevel": "List"
    },
    "DescribeCluster": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeCluster.html",
      "description": "Returns information about a specific cluster including shipping information, cluster status, and other important metadata.",
      "accessLevel": "Read"
    },
    "DescribeJob": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeJob.html",
      "description": "Returns information about a specific job including shipping information, job status, and other important metadata.",
      "accessLevel": "Read"
    },
    "GetJobManifest": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetJobManifest.html",
      "description": "Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified JobId value.",
      "accessLevel": "Read"
    },
    "GetJobUnlockCode": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetJobUnlockCode.html",
      "description": "Returns the UnlockCode code value for the specified job.",
      "accessLevel": "Read"
    },
    "GetSnowballUsage": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetSnowballUsage.html",
      "description": "Returns information about the Snowball service limit for your account, and also the number of Snowballs your account has in use.",
      "accessLevel": "Read"
    },
    "ListClusterJobs": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListClusterJobs.html",
      "description": "Returns an array of JobListEntry objects of the specified length.",
      "accessLevel": "List"
    },
    "ListClusters": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListClusters.html",
      "description": "Returns an array of ClusterListEntry objects of the specified length.",
      "accessLevel": "List"
    },
    "ListJobs": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListJobs.html",
      "description": "Returns an array of JobListEntry objects of the specified length.",
      "accessLevel": "List"
    },
    "UpdateCluster": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateCluster.html",
      "description": "While a cluster's ClusterState value is in the AwaitingQuorum state, you can update some of the information associated with a cluster.",
      "accessLevel": "Write"
    },
    "UpdateJob": {
      "url": "https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateJob.html",
      "description": "While a job's JobState value is New, you can update some of the information associated with a job.",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {};

  /**
   * Statement provider for service [snowball](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssnowball.html).
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
    this.to('snowball:CancelCluster');
    return this;
  }

  /**
   * Cancels the specified job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CancelJob.html
   */
  public toCancelJob() {
    this.to('snowball:CancelJob');
    return this;
  }

  /**
   * Creates an address for a Snowball to be shipped to.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateAddress.html
   */
  public toCreateAddress() {
    this.to('snowball:CreateAddress');
    return this;
  }

  /**
   * Creates an empty cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateCluster.html
   */
  public toCreateCluster() {
    this.to('snowball:CreateCluster');
    return this;
  }

  /**
   * Creates a job to import or export data between Amazon S3 and your on-premises data center.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateJob.html
   */
  public toCreateJob() {
    this.to('snowball:CreateJob');
    return this;
  }

  /**
   * Takes an AddressId and returns specific details about that address in the form of an Address object.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeAddress.html
   */
  public toDescribeAddress() {
    this.to('snowball:DescribeAddress');
    return this;
  }

  /**
   * Returns a specified number of ADDRESS objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeAddresses.html
   */
  public toDescribeAddresses() {
    this.to('snowball:DescribeAddresses');
    return this;
  }

  /**
   * Returns information about a specific cluster including shipping information, cluster status, and other important metadata.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeCluster.html
   */
  public toDescribeCluster() {
    this.to('snowball:DescribeCluster');
    return this;
  }

  /**
   * Returns information about a specific job including shipping information, job status, and other important metadata.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeJob.html
   */
  public toDescribeJob() {
    this.to('snowball:DescribeJob');
    return this;
  }

  /**
   * Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified JobId value.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetJobManifest.html
   */
  public toGetJobManifest() {
    this.to('snowball:GetJobManifest');
    return this;
  }

  /**
   * Returns the UnlockCode code value for the specified job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetJobUnlockCode.html
   */
  public toGetJobUnlockCode() {
    this.to('snowball:GetJobUnlockCode');
    return this;
  }

  /**
   * Returns information about the Snowball service limit for your account, and also the number of Snowballs your account has in use.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetSnowballUsage.html
   */
  public toGetSnowballUsage() {
    this.to('snowball:GetSnowballUsage');
    return this;
  }

  /**
   * Returns an array of JobListEntry objects of the specified length.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListClusterJobs.html
   */
  public toListClusterJobs() {
    this.to('snowball:ListClusterJobs');
    return this;
  }

  /**
   * Returns an array of ClusterListEntry objects of the specified length.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListClusters.html
   */
  public toListClusters() {
    this.to('snowball:ListClusters');
    return this;
  }

  /**
   * Returns an array of JobListEntry objects of the specified length.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListJobs.html
   */
  public toListJobs() {
    this.to('snowball:ListJobs');
    return this;
  }

  /**
   * While a cluster's ClusterState value is in the AwaitingQuorum state, you can update some of the information associated with a cluster.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateCluster.html
   */
  public toUpdateCluster() {
    this.to('snowball:UpdateCluster');
    return this;
  }

  /**
   * While a job's JobState value is New, you can update some of the information associated with a job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateJob.html
   */
  public toUpdateJob() {
    this.to('snowball:UpdateJob');
    return this;
  }
}
