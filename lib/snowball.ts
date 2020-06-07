import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service snowball
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssnowball.html
 */
export class Snowball extends PolicyStatement {
    public servicePrefix = 'snowball';
    public actions : Actions = {
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

    /**
     * Cancels a cluster job.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CancelCluster.html
     */
    public cancelCluster () {
        this.add('snowball:CancelCluster');
        return this;
    }

    /**
     * Cancels the specified job.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CancelJob.html
     */
    public cancelJob () {
        this.add('snowball:CancelJob');
        return this;
    }

    /**
     * Creates an address for a Snowball to be shipped to.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateAddress.html
     */
    public createAddress () {
        this.add('snowball:CreateAddress');
        return this;
    }

    /**
     * Creates an empty cluster.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateCluster.html
     */
    public createCluster () {
        this.add('snowball:CreateCluster');
        return this;
    }

    /**
     * Creates a job to import or export data between Amazon S3 and your on-premises data center.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_CreateJob.html
     */
    public createJob () {
        this.add('snowball:CreateJob');
        return this;
    }

    /**
     * Takes an AddressId and returns specific details about that address in the form of an Address object.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeAddress.html
     */
    public describeAddress () {
        this.add('snowball:DescribeAddress');
        return this;
    }

    /**
     * Returns a specified number of ADDRESS objects.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeAddresses.html
     */
    public describeAddresses () {
        this.add('snowball:DescribeAddresses');
        return this;
    }

    /**
     * Returns information about a specific cluster including shipping information, cluster status, and other important metadata.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeCluster.html
     */
    public describeCluster () {
        this.add('snowball:DescribeCluster');
        return this;
    }

    /**
     * Returns information about a specific job including shipping information, job status, and other important metadata.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_DescribeJob.html
     */
    public describeJob () {
        this.add('snowball:DescribeJob');
        return this;
    }

    /**
     * Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified JobId value.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetJobManifest.html
     */
    public getJobManifest () {
        this.add('snowball:GetJobManifest');
        return this;
    }

    /**
     * Returns the UnlockCode code value for the specified job.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetJobUnlockCode.html
     */
    public getJobUnlockCode () {
        this.add('snowball:GetJobUnlockCode');
        return this;
    }

    /**
     * Returns information about the Snowball service limit for your account, and also the number of Snowballs your account has in use.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_GetSnowballUsage.html
     */
    public getSnowballUsage () {
        this.add('snowball:GetSnowballUsage');
        return this;
    }

    /**
     * Returns an array of JobListEntry objects of the specified length.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListClusterJobs.html
     */
    public listClusterJobs () {
        this.add('snowball:ListClusterJobs');
        return this;
    }

    /**
     * Returns an array of ClusterListEntry objects of the specified length.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListClusters.html
     */
    public listClusters () {
        this.add('snowball:ListClusters');
        return this;
    }

    /**
     * Returns an array of JobListEntry objects of the specified length.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_ListJobs.html
     */
    public listJobs () {
        this.add('snowball:ListJobs');
        return this;
    }

    /**
     * While a cluster's ClusterState value is in the AwaitingQuorum state, you can update some of the information associated with a cluster.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateCluster.html
     */
    public updateCluster () {
        this.add('snowball:UpdateCluster');
        return this;
    }

    /**
     * While a job's JobState value is New, you can update some of the information associated with a job.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/snowball/latest/api-reference/API_UpdateJob.html
     */
    public updateJob () {
        this.add('snowball:UpdateJob');
        return this;
    }
}
