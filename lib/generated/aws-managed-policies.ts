/** Provides names of all AWS managed policies. */
export enum AwsManagedPolicies {
    /** Provides full access to AWS services and resources. */
    AdministratorAccess = 'AdministratorAccess',
    /** Provides full access to AWS services and resources, but does not allow management of Users and groups. */
    PowerUserAccess = 'PowerUserAccess',
    /** Provides read-only access to AWS services and resources. */
    ReadOnlyAccess = 'ReadOnlyAccess',
    /** Provides access to AWS CloudFormation via the AWS Management Console. */
    AWSCloudFormationReadOnlyAccess = 'AWSCloudFormationReadOnlyAccess',
    /** Provides full access to the CloudFront console plus the ability to list Amazon S3 buckets via the AWS Management Console. */
    CloudFrontFullAccess = 'CloudFrontFullAccess',
    /** Provides full access to all CloudHSM resources. */
    AWSCloudHSMFullAccess = 'AWSCloudHSMFullAccess',
    /** Provides read only access to all CloudHSM resources. */
    AWSCloudHSMReadOnlyAccess = 'AWSCloudHSMReadOnlyAccess',
    /** Provides full access to Resource Groups and Tag Editor. */
    ResourceGroupsandTagEditorFullAccess = 'ResourceGroupsandTagEditorFullAccess',
    /** Provides access to use Resource Groups and Tag Editor, but does not allow editing of tags via the Tag Editor. */
    ResourceGroupsandTagEditorReadOnlyAccess = 'ResourceGroupsandTagEditorReadOnlyAccess',
    /** Provides access to CloudFront distribution configuration information and list distributions via the AWS Management Console. */
    CloudFrontReadOnlyAccess = 'CloudFrontReadOnlyAccess',
    /** Provides full access to the Amazon CloudSearch configuration service. */
    CloudSearchFullAccess = 'CloudSearchFullAccess',
    /** Provides read only access to the Amazon CloudSearch configuration service. */
    CloudSearchReadOnlyAccess = 'CloudSearchReadOnlyAccess',
    /** Provides full access to CloudWatch. */
    CloudWatchFullAccess = 'CloudWatchFullAccess',
    /** Provides read only access to CloudWatch. */
    CloudWatchReadOnlyAccess = 'CloudWatchReadOnlyAccess',
    /** Provides full access to CloudWatch Logs */
    CloudWatchLogsFullAccess = 'CloudWatchLogsFullAccess',
    /** Provides read only access to CloudWatch Logs */
    CloudWatchLogsReadOnlyAccess = 'CloudWatchLogsReadOnlyAccess',
    /** Provides full access to AWS Direct Connect via the AWS Management Console. */
    AWSDirectConnectFullAccess = 'AWSDirectConnectFullAccess',
    /** Provides read only access to AWS Direct Connect via the AWS Management Console. */
    AWSDirectConnectReadOnlyAccess = 'AWSDirectConnectReadOnlyAccess',
    /** Provides full access to Amazon AppStream via the AWS Management Console. */
    AmazonAppStreamFullAccess = 'AmazonAppStreamFullAccess',
    /** Provides read only access to Amazon AppStream via the AWS Management Console. */
    AmazonAppStreamReadOnlyAccess = 'AmazonAppStreamReadOnlyAccess',
    /** Provides full access to Amazon DynamoDB via the AWS Management Console. */
    AmazonDynamoDBFullAccess = 'AmazonDynamoDBFullAccess',
    /** Provides read only access to Amazon DynamoDB via the AWS Management Console. */
    AmazonDynamoDBReadOnlyAccess = 'AmazonDynamoDBReadOnlyAccess',
    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBPipeline.html. Provides full access to Amazon DynamoDB including Export/Import using AWS Data Pipeline via the AWS Management Console. */
    AmazonDynamoDBFullAccesswithDataPipeline = 'AmazonDynamoDBFullAccesswithDataPipeline',
    /** Provides full access to Amazon EC2 via the AWS Management Console. */
    AmazonEC2FullAccess = 'AmazonEC2FullAccess',
    /** Provides read only access to Amazon EC2 via the AWS Management Console. */
    AmazonEC2ReadOnlyAccess = 'AmazonEC2ReadOnlyAccess',
    /** Provides full access to Amazon ElastiCache via the AWS Management Console. */
    AmazonElastiCacheFullAccess = 'AmazonElastiCacheFullAccess',
    /** Provides read only access to Amazon ElastiCache via the AWS Management Console. */
    AmazonElastiCacheReadOnlyAccess = 'AmazonElastiCacheReadOnlyAccess',
    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-iam-policies.html. Provides full access to Amazon Elastic MapReduce and underlying services that it requires such as EC2 and S3 */
    AmazonElasticMapReduceFullAccess = 'AmazonElasticMapReduceFullAccess',
    /** Provides read only access to Amazon Elastic MapReduce via the AWS Management Console. */
    AmazonElasticMapReduceReadOnlyAccess = 'AmazonElasticMapReduceReadOnlyAccess',
    /** Provides read only access to Amazon Glacier via the AWS Management Console. */
    AmazonGlacierReadOnlyAccess = 'AmazonGlacierReadOnlyAccess',
    /** Provides full access to Amazon Glacier via the AWS Management Console. */
    AmazonGlacierFullAccess = 'AmazonGlacierFullAccess',
    /** Provides full access to all streams via the AWS Management Console. */
    AmazonKinesisFullAccess = 'AmazonKinesisFullAccess',
    /** Provides read only access to all streams via the AWS Management Console. */
    AmazonKinesisReadOnlyAccess = 'AmazonKinesisReadOnlyAccess',
    /** Provides the ability to review AWS Marketplace subscriptions */
    AWSMarketplaceReadOnly = 'AWSMarketplaceRead-only',
    /** Provides the ability to subscribe and unsubscribe to AWS Marketplace software */
    AWSMarketplaceManageSubscriptions = 'AWSMarketplaceManageSubscriptions',
    /** Provides full access to all application resources. */
    AmazonMobileAnalyticsFullAccess = 'AmazonMobileAnalyticsFullAccess',
    /** Provides read only access to all reports including financial data for all application resources. */
    AmazonMobileAnalyticsFinancialReportAccess = 'AmazonMobileAnalyticsFinancialReportAccess',
    /** Provides read only access to non financial reports for all application resources. */
    AmazonMobileAnalyticsNonFinancialReportAccess = 'AmazonMobileAnalyticsNon-financialReportAccess',
    /** Provides write only access to put event data for all application resources. (Recommended for SDK integration) */
    AmazonMobileAnalyticsWriteOnlyAccess = 'AmazonMobileAnalyticsWriteOnlyAccess',
    /** Provides full access to IAM via the AWS Management Console. */
    IAMFullAccess = 'IAMFullAccess',
    /** Provides read only access to IAM via the AWS Management Console. */
    IAMReadOnlyAccess = 'IAMReadOnlyAccess',
    /** Provides access to AWS Key Management Service (KMS). */
    AWSKeyManagementServicePowerUser = 'AWSKeyManagementServicePowerUser',
    /** Provides full access to WorkMail, Directory Service, SES, EC2 and read access to KMS metadata. */
    AmazonWorkMailFullAccess = 'AmazonWorkMailFullAccess',
    /** Provides read only access to WorkMail and SES. */
    AmazonWorkMailReadOnlyAccess = 'AmazonWorkMailReadOnlyAccess',
    /** Provides read only access to the jobs created under the AWS account. */
    AWSImportExportReadOnlyAccess = 'AWSImportExportReadOnlyAccess',
    /** Provides read and write access to the jobs created under the AWS account. */
    AWSImportExportFullAccess = 'AWSImportExportFullAccess',
    /** Provides Put, Get access to S3 and full access to CloudWatch Logs. */
    AWSLambdaExecute = 'AWSLambdaExecute',
    /** Provides read access to DynamoDB Streams. */
    AWSLambdaInvocationDynamoDB = 'AWSLambdaInvocation-DynamoDB',
    /** Provides full access to Amazon Redshift via the AWS Management Console. */
    AmazonRedshiftFullAccess = 'AmazonRedshiftFullAccess',
    /** Provides read only access to Amazon Redshift via the AWS Management Console. */
    AmazonRedshiftReadOnlyAccess = 'AmazonRedshiftReadOnlyAccess',
    /** Provides full access to Amazon RDS via the AWS Management Console. */
    AmazonRDSFullAccess = 'AmazonRDSFullAccess',
    /** Provides read only access to Amazon RDS via the AWS Management Console. */
    AmazonRDSReadOnlyAccess = 'AmazonRDSReadOnlyAccess',
    /** Provides full access to all Amazon Route 53 via the AWS Management Console. */
    AmazonRoute53FullAccess = 'AmazonRoute53FullAccess',
    /** Provides read only access to all Amazon Route 53 via the AWS Management Console. */
    AmazonRoute53ReadOnlyAccess = 'AmazonRoute53ReadOnlyAccess',
    /** Provides full access to all Route53 Domains actions and Create Hosted Zone to allow Hosted Zone creation as part of domain registrations. */
    AmazonRoute53DomainsFullAccess = 'AmazonRoute53DomainsFullAccess',
    /** Provides access to Route53 Domains list and actions. */
    AmazonRoute53DomainsReadOnlyAccess = 'AmazonRoute53DomainsReadOnlyAccess',
    /** Provides full access to all buckets via the AWS Management Console. */
    AmazonS3FullAccess = 'AmazonS3FullAccess',
    /** Provides read only access to all buckets via the AWS Management Console. */
    AmazonS3ReadOnlyAccess = 'AmazonS3ReadOnlyAccess',
    /** The security audit template grants access to read security configuration metadata. It is useful for software that audits the configuration of an AWS account. */
    SecurityAudit = 'SecurityAudit',
    /** Provides full access to Amazon SES via the AWS Management Console. */
    AmazonSESFullAccess = 'AmazonSESFullAccess',
    /** Provides read only access to Amazon SES via the AWS Management Console. */
    AmazonSESReadOnlyAccess = 'AmazonSESReadOnlyAccess',
    /** Provides full access to the Simple Workflow configuration service. */
    SimpleWorkflowFullAccess = 'SimpleWorkflowFullAccess',
    /** Provides full access to Amazon SNS via the AWS Management Console. */
    AmazonSNSFullAccess = 'AmazonSNSFullAccess',
    /** Provides read only access to Amazon SNS via the AWS Management Console. */
    AmazonSNSReadOnlyAccess = 'AmazonSNSReadOnlyAccess',
    /** Provides full access to Amazon SQS via the AWS Management Console. */
    AmazonSQSFullAccess = 'AmazonSQSFullAccess',
    /** Provides read only access to Amazon SQS via the AWS Management Console. */
    AmazonSQSReadOnlyAccess = 'AmazonSQSReadOnlyAccess',
    /** Provides full access to AWS Storage Gateway via the AWS Management Console. */
    AWSStorageGatewayFullAccess = 'AWSStorageGatewayFullAccess',
    /** Provides access to AWS Storage Gateway via the AWS Management Console. */
    AWSStorageGatewayReadOnlyAccess = 'AWSStorageGatewayReadOnlyAccess',
    /** Allows users to access the AWS Support Center. */
    AWSSupportAccess = 'AWSSupportAccess',
    /** Provides full access to AWS Directory Service. */
    AWSDirectoryServiceFullAccess = 'AWSDirectoryServiceFullAccess',
    /** Provides read only access to AWS Directory Service. */
    AWSDirectoryServiceReadOnlyAccess = 'AWSDirectoryServiceReadOnlyAccess',
    /** Provides full access to Amazon Zocalo. */
    AmazonZocaloFullAccess = 'AmazonZocaloFullAccess',
    /** Provides read only access to Amazon Zocalo */
    AmazonZocaloReadOnlyAccess = 'AmazonZocaloReadOnlyAccess',
    /** Provides full access to Amazon VPC via the AWS Management Console. */
    AmazonVPCFullAccess = 'AmazonVPCFullAccess',
    /** Provides read only access to Amazon VPC via the AWS Management Console. */
    AmazonVPCReadOnlyAccess = 'AmazonVPCReadOnlyAccess',
    /** Allows users to access the Account Activity page. */
    AWSAccountActivityAccess = 'AWSAccountActivityAccess',
    /** Allows users to access the Account Usage Report page. */
    AWSAccountUsageReportAccess = 'AWSAccountUsageReportAccess',
    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-iam-policies.html.  Default policy for the Amazon Elastic MapReduce service role. */
    AmazonElasticMapReduceRole = 'service-role/AmazonElasticMapReduceRole',
    /** Default policy for the Amazon Elastic MapReduce for EC2 service role. */
    AmazonElasticMapReduceforEC2Role = 'service-role/AmazonElasticMapReduceforEC2Role',
    /** Default policy for the AutoScaling Notification Access service role. */
    AutoScalingNotificationAccessRole = 'service-role/AutoScalingNotificationAccessRole',
    /** Default policy for the AWS CloudHSM service role. */
    AWSCloudHSMRole = 'service-role/AWSCloudHSMRole',
    /** Default policy for the Amazon EC2 Role for Data Pipeline service role. */
    AmazonEC2RoleforDataPipelineRole = 'service-role/AmazonEC2RoleforDataPipelineRole',
    /** Default policy for the Amazon Elastic Transcoder service role. */
    AmazonElasticTranscoderRole = 'service-role/AmazonElasticTranscoderRole',
    /** Default policy for AWS Lambda service role. */
    AWSLambdaRole = 'service-role/AWSLambdaRole',
    /** Default policy for the Amazon RDS service role. */
    RDSCloudHsmAuthorizationRole = 'service-role/RDSCloudHsmAuthorizationRole',
    /** Default policy for Amazon SNS service role. */
    AmazonSNSRole = 'service-role/AmazonSNSRole',
    /** Enables broad read/write access to ALL EC2 objects, read/write access to S3 buckets starting with 'import-to-ec2-', and the ability to list all S3 buckets, for the AWS Connector to import VMs on your behalf. */
    AWSConnector = 'AWSConnector',
    /** Provides the ability to subscribe and unsubscribe to AWS Marketplace software, allows users to manage Marketplace software instances from the Marketplace 'Your Software' page, and provides administrative access to EC2. */
    AWSMarketplaceFullAccess = 'AWSMarketplaceFullAccess',
    /** Provides access to use AWS Config, including searching by tags on resources, and reading all tags. This does not provide permission to configure AWS Config, which requires administrative privileges. */
    AWSConfigUserAccess = 'AWSConfigUserAccess',
    /** Default policy for the Amazon EC2 Role for Amazon EC2 Container Service. */
    AmazonEC2ContainerServiceforEC2Role = 'service-role/AmazonEC2ContainerServiceforEC2Role',
    /** Provides read only access to Amazon Cognito resources. */
    AmazonCognitoReadOnly = 'AmazonCognitoReadOnly',
    /** Provides administrative access to existing Amazon Cognito resources. You will need AWS account admin privileges to create new Cognito resources. */
    AmazonCognitoPowerUser = 'AmazonCognitoPowerUser',
    /** Provides access to Amazon Cognito APIs to support developer authenticated identities from your authentication backend. */
    AmazonCognitoDeveloperAuthenticatedIdentities = 'AmazonCognitoDeveloperAuthenticatedIdentities',
    /** Provides administrator access for packaging an application in Amazon WorkSpaces Application Manager. */
    AmazonWorkSpacesApplicationManagerAdminAccess = 'AmazonWorkSpacesApplicationManagerAdminAccess',
    /** Provides write permissions to CloudWatch Logs. */
    AWSLambdaBasicExecutionRole = 'service-role/AWSLambdaBasicExecutionRole',
    /** Provides list and read access to DynamoDB streams and write permissions to CloudWatch logs. */
    AWSLambdaDynamoDBExecutionRole = 'service-role/AWSLambdaDynamoDBExecutionRole',
    /** Provides list and read access to Kinesis streams and write permissions to CloudWatch logs. */
    AWSLambdaKinesisExecutionRole = 'service-role/AWSLambdaKinesisExecutionRole',
    /** Default policy for Amazon ECS service role. */
    AmazonEC2ContainerServiceRole = 'service-role/AmazonEC2ContainerServiceRole',
    /** Grants users permission to request Amazon Machine Learning batch predictions. */
    AmazonMachineLearningBatchPredictionsAccess = 'AmazonMachineLearningBatchPredictionsAccess',
    /** Provides create access for non-prediction Amazon Machine Learning resources. */
    AmazonMachineLearningCreateOnlyAccess = 'AmazonMachineLearningCreateOnlyAccess',
    /** Provides full access to Amazon Machine Learning resources. */
    AmazonMachineLearningFullAccess = 'AmazonMachineLearningFullAccess',
    /** Grants users permission to create and delete the real-time endpoint for Amazon Machine Learning models. */
    AmazonMachineLearningManageRealTimeEndpointOnlyAccess = 'AmazonMachineLearningManageRealTimeEndpointOnlyAccess',
    /** Provides read only access to Amazon Machine Learning resources. */
    AmazonMachineLearningReadOnlyAccess = 'AmazonMachineLearningReadOnlyAccess',
    /** Grants users permission to request Amazon Machine Learning real-time predictions. */
    AmazonMachineLearningRealTimePredictionOnlyAccess = 'AmazonMachineLearningRealTimePredictionOnlyAccess',
    /** Provides CodeDeploy service access to expand tags and interact with Auto Scaling on your behalf. */
    AWSCodeDeployRole = 'service-role/AWSCodeDeployRole',
    /** Provides EC2 access to S3 bucket to download revision. This role is needed by the CodeDeploy agent on EC2 instances. */
    AmazonEC2RoleforAWSCodeDeploy = 'service-role/AmazonEC2RoleforAWSCodeDeploy',
    /** Provides full access to CodeDeploy resources. */
    AWSCodeDeployFullAccess = 'AWSCodeDeployFullAccess',
    /** Provides access to register and deploy a revision. */
    AWSCodeDeployDeployerAccess = 'AWSCodeDeployDeployerAccess',
    /** Provides read only access to CodeDeploy resources. */
    AWSCodeDeployReadOnlyAccess = 'AWSCodeDeployReadOnlyAccess',
    /** Provides full access to Amazon EFS via the AWS Management Console. */
    AmazonElasticFileSystemFullAccess = 'AmazonElasticFileSystemFullAccess',
    /** Provides read only access to Amazon EFS via the AWS Management Console. */
    AmazonElasticFileSystemReadOnlyAccess = 'AmazonElasticFileSystemReadOnlyAccess',
    /** Provides full access to Amazon SSM. */
    AmazonSSMFullAccess = 'AmazonSSMFullAccess',
    /** Provides read only access to Amazon SSM. */
    AmazonSSMReadOnlyAccess = 'AmazonSSMReadOnlyAccess',
    /** This policy will soon be deprecated. Please use AmazonSSMManagedInstanceCore policy to enable AWS Systems Manager service core functionality on EC2 instances. For more information see https://docs.aws.amazon.com/systems-manager/latest/userguide/setup-instance-profile.html */
    AmazonEC2RoleforSSM = 'service-role/AmazonEC2RoleforSSM',
    /** Provides read-only access to CloudWatch alarms and metrics as well as EC2 metadata. Provides access to Stop, Terminate and Reboot EC2 instances. */
    CloudWatchActionsEC2Access = 'CloudWatchActionsEC2Access',
    /** Provides access for custom actions to poll for jobs details (including temporary credentials) and report status updates to AWS CodePipeline. */
    AWSCodePipelineCustomActionAccess = 'AWSCodePipelineCustomActionAccess',
    /** Provides full access to AWS CodeCommit via the AWS Management Console. */
    AWSCodeCommitFullAccess = 'AWSCodeCommitFullAccess',
    /** Provides read only access to AWS CodeCommit via the AWS Management Console. */
    AWSCodeCommitReadOnly = 'AWSCodeCommitReadOnly',
    /** Provides full access to AWS CodeCommit repositories, but does not allow repository deletion. */
    AWSCodeCommitPowerUser = 'AWSCodeCommitPowerUser',
    /** Provides the ability for an IAM user to manage their own SSH keys. */
    IAMUserSSHKeys = 'IAMUserSSHKeys',
    /** Provides full access to create/edit/delete APIs in Amazon API Gateway via the AWS Management Console. */
    AmazonAPIGatewayAdministrator = 'AmazonAPIGatewayAdministrator',
    /** Provides full access to invoke APIs in Amazon API Gateway. */
    AmazonAPIGatewayInvokeFullAccess = 'AmazonAPIGatewayInvokeFullAccess',
    /** Provides full access to all AWS Device Farm operations. */
    AWSDeviceFarmFullAccess = 'AWSDeviceFarmFullAccess',
    /** Provides access to manage VPC settings for Amazon managed customer configurations */
    AmazonDRSVPCManagement = 'AmazonDRSVPCManagement',
    /** Default policy for the VM Import/Export service role, for customers using the AWS Connector. The VM Import/Export service assumes a role with this policy to fulfill virtual machine migration requests from the AWS Connector virtual appliance. (Note that the AWS Connector uses the "AWSConnector" managed policy to issue requests on the customer's behalf to the VM Import/Export service.) Provides the ability to create AMIs and EBS snapshots, modify EBS snapshot attributes, make "Describe*" calls on EC2 objects, and read from S3 buckets starting with 'import-to-ec2-'. */
    VMImportExportRoleForAWSConnector = 'service-role/VMImportExportRoleForAWSConnector',
    /** Provides access to Amazon WorkSpaces administrative actions via AWS SDK and CLI. */
    AmazonWorkSpacesAdmin = 'AmazonWorkSpacesAdmin',
    /** Provides full access to the Amazon ES configuration service. */
    AmazonESFullAccess = 'AmazonESFullAccess',
    /** Provides read-only access to the Amazon ES configuration service. */
    AmazonESReadOnlyAccess = 'AmazonESReadOnlyAccess',
    /** Provides read only access to AWS WAF actions. */
    AWSWAFReadOnlyAccess = 'AWSWAFReadOnlyAccess',
    /** Provides full access to AWS WAF actions. */
    AWSWAFFullAccess = 'AWSWAFFullAccess',
    /** Provides read only access to Amazon Inspector. */
    AmazonInspectorReadOnlyAccess = 'AmazonInspectorReadOnlyAccess',
    /** Provides full access to Amazon Inspector. */
    AmazonInspectorFullAccess = 'AmazonInspectorFullAccess',
    /** Provides read only access to all Amazon Kinesis Firehose Delivery Streams. */
    AmazonKinesisFirehoseReadOnlyAccess = 'AmazonKinesisFirehoseReadOnlyAccess',
    /** Provides full access to all Amazon Kinesis Firehose Delivery Streams. */
    AmazonKinesisFirehoseFullAccess = 'AmazonKinesisFirehoseFullAccess',
    /** Allows access to all AWS services supported in AWS IoT Rule Actions */
    AWSIoTRuleActions = 'service-role/AWSIoTRuleActions',
    /** Allows creation of Amazon CloudWatch Log groups and streaming logs to the groups */
    AWSIoTLogging = 'service-role/AWSIoTLogging',
    /** This policy gives full access to the AWS IoT configuration and messaging actions */
    AWSIoTFullAccess = 'AWSIoTFullAccess',
    /** This policy gives full access to the AWS IoT messaging actions */
    AWSIoTDataAccess = 'AWSIoTDataAccess',
    /** This policy gives full access to the AWS IoT configuration actions */
    AWSIoTConfigAccess = 'AWSIoTConfigAccess',
    /** This policy gives read only access to the AWS IoT configuration actions */
    AWSIoTConfigReadOnlyAccess = 'AWSIoTConfigReadOnlyAccess',
    /** Allow QuickSight to describe the RDS resources */
    AWSQuickSightDescribeRDS = 'service-role/AWSQuickSightDescribeRDS',
    /** Allow QuickSight to describe Redshift resources */
    AWSQuickSightDescribeRedshift = 'service-role/AWSQuickSightDescribeRedshift',
    /** Allow QuickSight to list IAM entities */
    AWSQuickSightListIAM = 'service-role/AWSQuickSightListIAM',
    /** Provides access to Cloudwatch for RDS Enhanced Monitoring */
    AmazonRDSEnhancedMonitoringRole = 'service-role/AmazonRDSEnhancedMonitoringRole',
    /** Allows API Gateway to push logs to user's account. */
    AmazonAPIGatewayPushToCloudWatchLogs = 'service-role/AmazonAPIGatewayPushToCloudWatchLogs',
    /** Provides access to manage VPC settings for AWS managed customer configurations */
    AmazonDMSVPCManagementRole = 'service-role/AmazonDMSVPCManagementRole',
    /** Provides full access to all APIs in Amazon Mechanical Turk. */
    AmazonMechanicalTurkFullAccess = 'AmazonMechanicalTurkFullAccess',
    /** Provides access to read only APIs in Amazon Mechanical Turk. */
    AmazonMechanicalTurkReadOnly = 'AmazonMechanicalTurkReadOnly',
    /** Provides read-only access to Amazon EC2 Container Registry repositories. */
    AmazonEC2ContainerRegistryReadOnly = 'AmazonEC2ContainerRegistryReadOnly',
    /** Provides full access to Amazon EC2 Container Registry repositories, but does not allow repository deletion or policy changes. */
    AmazonEC2ContainerRegistryPowerUser = 'AmazonEC2ContainerRegistryPowerUser',
    /** Provides administrative access to Amazon ECR resources */
    AmazonEC2ContainerRegistryFullAccess = 'AmazonEC2ContainerRegistryFullAccess',
    /** Provides access to upload DMS replication logs to cloudwatch logs in customer account. */
    AmazonDMSCloudWatchLogsRole = 'service-role/AmazonDMSCloudWatchLogsRole',
    /** Provides read only access to Amazon CloudWatch Events. */
    CloudWatchEventsReadOnlyAccess = 'CloudWatchEventsReadOnlyAccess',
    /** Allows built-in targets in Amazon CloudWatch Events to perform EC2 actions on your behalf. */
    CloudWatchEventsBuiltInTargetExecutionAccess = 'service-role/CloudWatchEventsBuiltInTargetExecutionAccess',
    /** Allows Amazon CloudWatch Events to relay events to the streams in AWS Kinesis Streams in your account. */
    CloudWatchEventsInvocationAccess = 'service-role/CloudWatchEventsInvocationAccess',
    /** Provides full access to Amazon CloudWatch Events. */
    CloudWatchEventsFullAccess = 'CloudWatchEventsFullAccess',
    /** Provides full access to AWS Certificate Manager (ACM) */
    AWSCertificateManagerFullAccess = 'AWSCertificateManagerFullAccess',
    /** Provides read only access to AWS Certificate Manager (ACM). */
    AWSCertificateManagerReadOnly = 'AWSCertificateManagerReadOnly',
    /** Provide the instances in your web server environment access to upload log files to Amazon S3. */
    AWSElasticBeanstalkWebTier = 'AWSElasticBeanstalkWebTier',
    /** Provide the instances in your worker environment access to upload log files to Amazon S3, to use Amazon SQS to monitor your application's job queue, to use Amazon DynamoDB to perform leader election, and to Amazon CloudWatch to publish metrics for health monitoring. */
    AWSElasticBeanstalkWorkerTier = 'AWSElasticBeanstalkWorkerTier',
    /** Provide the instances in your multicontainer Docker environment access to use the Amazon EC2 Container Service to manage container deployment tasks. */
    AWSElasticBeanstalkMulticontainerDocker = 'AWSElasticBeanstalkMulticontainerDocker',
    /** AWS Elastic Beanstalk Service policy for Health Monitoring system */
    AWSElasticBeanstalkEnhancedHealth = 'service-role/AWSElasticBeanstalkEnhancedHealth',
    /** Provides minimum permissions for a Lambda function to execute while accessing a resource within a VPC - create, describe, delete network interfaces and write permissions to CloudWatch Logs. */
    AWSLambdaVPCAccessExecutionRole = 'service-role/AWSLambdaVPCAccessExecutionRole',
    /** Allow RDS to access Directory Service Managed AD on behalf of the customer for domain-joined SQL Server DB instances. */
    AmazonRDSDirectoryServiceAccess = 'service-role/AmazonRDSDirectoryServiceAccess',
    /** Provides full access to AWS Marketplace Metering. */
    AWSMarketplaceMeteringFullAccess = 'AWSMarketplaceMeteringFullAccess',
    /** Allows an AWS Lambda function to access the AWS Config API and the configuration snapshots that AWS Config delivers periodically to Amazon S3. This access is required by functions that evaluate configuration changes for custom Config rules. */
    AWSConfigRulesExecutionRole = 'service-role/AWSConfigRulesExecutionRole',
    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-servicerole.html. AWS Elastic Beanstalk Service role policy which grants permissions to create & manage resources (i.e.: AutoScaling, EC2, S3, CloudFormation, ELB, etc.) on your behalf. */
    AWSElasticBeanstalkService = 'service-role/AWSElasticBeanstalkService',
    /** Provides access to manage S3 settings for Redshift endpoints for DMS. */
    AmazonDMSRedshiftS3Role = 'service-role/AmazonDMSRedshiftS3Role',
    /** Provides full access to view and tag Configuration Items maintained by the AWS Application Discovery Service */
    AWSApplicationDiscoveryServiceFullAccess = 'AWSApplicationDiscoveryServiceFullAccess',
    /** Provides access for the Discovery Agent to register with AWS Application Discovery Service. */
    AWSApplicationDiscoveryAgentAccess = 'AWSApplicationDiscoveryAgentAccess',
    /**   Policy to enable Task Autoscaling for Amazon EC2 Container Service */
    AmazonEC2ContainerServiceAutoscaleRole = 'service-role/AmazonEC2ContainerServiceAutoscaleRole',
    /** Provides access for an Amazon EC2 instance to register with an AWS OpsWorks stack. */
    AWSOpsWorksInstanceRegistration = 'AWSOpsWorksInstanceRegistration',
    /** Provides access to view and approve manual changes for all pipelines */
    AWSCodePipelineApproverAccess = 'AWSCodePipelineApproverAccess',
    /** Provides access for the Discovery Agentless Connector to register with AWS Application Discovery Service. */
    AWSAgentlessDiscoveryService = 'AWSAgentlessDiscoveryService',
    /** Policy to enable Autoscaling for Amazon EC2 Spot Fleet */
    AmazonEC2SpotFleetAutoscaleRole = 'service-role/AmazonEC2SpotFleetAutoscaleRole',
    /** Provides read-only access to Amazon Kinesis Analytics via the AWS Management Console. */
    AmazonKinesisAnalyticsReadOnly = 'AmazonKinesisAnalyticsReadOnly',
    /** Provides full access to Amazon Kinesis Analytics via the AWS Management Console. */
    AmazonKinesisAnalyticsFullAccess = 'AmazonKinesisAnalyticsFullAccess',
    /** Permissions to allow the AWS Server Migration Connector to migrate VMs to EC2. Allows communication with the AWS Server Migration Service, read/write access to S3 buckets starting with 'sms-b-' and 'import-to-ec2-' as well as the buckets used for AWS Server Migration Connector upgrade, AWS Server Migration Connector registration with AWS, and metrics upload to AWS. */
    ServerMigrationConnector = 'ServerMigrationConnector',
    /** This policy grants permissions to view resources and basic metadata across all AWS services. */
    ViewOnlyAccess = 'job-function/ViewOnlyAccess',
    /** This policy grants permissions to troubleshoot and resolve issues in an AWS account. This policy also enables the user to contact AWS support to create and manage cases. */
    SupportUser = 'job-function/SupportUser',
    /** Grants full access permissions necessary for resources required for application and development operations. */
    SystemAdministrator = 'job-function/SystemAdministrator',
    /** Grants full access permissions to AWS services and actions required to set up and configure AWS database services. */
    DatabaseAdministrator = 'job-function/DatabaseAdministrator',
    /** Grants permissions to AWS data analytics services. */
    DataScientist = 'job-function/DataScientist',
    /** Grants full access permissions to AWS services and actions required to set up and configure AWS network resources. */
    NetworkAdministrator = 'job-function/NetworkAdministrator',
    /** Grants permissions for billing and cost management. This includes viewing account usage and viewing and modifying budgets and payment methods. */
    Billing = 'job-function/Billing',
    /** Provides the ability for an IAM user to change their own password. */
    IAMUserChangePassword = 'IAMUserChangePassword',
    /** Amazon Elastic MapReduce for Auto Scaling. Role to allow Auto Scaling to add and remove instances from your EMR cluster. */
    AmazonElasticMapReduceforAutoScalingRole = 'service-role/AmazonElasticMapReduceforAutoScalingRole',
    /** Default policy for Amazon AppStream service role. */
    AmazonAppStreamServiceAccess = 'service-role/AmazonAppStreamServiceAccess',
    /** Provides S3 access for instances launched by OpsWorks CM. */
    AWSOpsWorksCMInstanceProfileRole = 'AWSOpsWorksCMInstanceProfileRole',
    /** Service Role Policy to be used for Creating OpsWorks CM servers. */
    AWSOpsWorksCMServiceRole = 'service-role/AWSOpsWorksCMServiceRole',
    /** Access to all Amazon Rekognition APIs */
    AmazonRekognitionFullAccess = 'AmazonRekognitionFullAccess',
    /** Access to all Read rekognition APIs */
    AmazonRekognitionReadOnlyAccess = 'AmazonRekognitionReadOnlyAccess',
    /** Provide full access to Amazon Athena and scoped access to the dependencies needed to enable querying, writing results, and data management. */
    AmazonAthenaFullAccess = 'AmazonAthenaFullAccess',
    /** Grants full access to Amazon Polly service and resources. */
    AmazonPollyFullAccess = 'AmazonPollyFullAccess',
    /** Grants read-only access to Amazon Polly resources. */
    AmazonPollyReadOnlyAccess = 'AmazonPollyReadOnlyAccess',
    /**  Service Role to be used for EC2 Maintenance Window */
    AmazonSSMMaintenanceWindowRole = 'service-role/AmazonSSMMaintenanceWindowRole',
    /** AWS X-Ray write only managed policy */
    AWSXrayWriteOnlyAccess = 'AWSXrayWriteOnlyAccess',
    /** AWS X-Ray read only managed policy */
    AWSXrayReadOnlyAccess = 'AWSXrayReadOnlyAccess',
    /** AWS X-Ray full access managed policy */
    AWSXrayFullAccess = 'AWSXrayFullAccess',
    /** Provides access to AWS CodeBuild via the AWS Management Console, but does not allow CodeBuild project administration. Also attach AmazonS3ReadOnlyAccess to provide access to download build artifacts. */
    AWSCodeBuildDeveloperAccess = 'AWSCodeBuildDeveloperAccess',
    /** Provides read only access to AWS CodeBuild via the AWS Management Console. Also attach AmazonS3ReadOnlyAccess to provide access to download build artifacts. */
    AWSCodeBuildReadOnlyAccess = 'AWSCodeBuildReadOnlyAccess',
    /** Provides full access to AWS CodeBuild via the AWS Management Console. Also attach AmazonS3ReadOnlyAccess to provide access to download build artifacts, and attach IAMFullAccess to create and manage the service role for CodeBuild. */
    AWSCodeBuildAdminAccess = 'AWSCodeBuildAdminAccess',
    /** Provides permissions for EC2 Automation service to execute activities defined within Automation documents */
    AmazonSSMAutomationRole = 'service-role/AmazonSSMAutomationRole',
    /** Provides minimum permissions for a Lambda function to manage ENIs (create, describe, delete) used by a VPC-enabled Lambda Function. */
    AWSLambdaENIManagementAccess = 'service-role/AWSLambdaENIManagementAccess',
    /** Allows full access to the AWS Health Apis and Notifications and the Personal Health Dashboard */
    AWSHealthFullAccess = 'AWSHealthFullAccess',
    /** Provides full access for AWS Batch resources. */
    AWSBatchFullAccess = 'AWSBatchFullAccess',
    /** Policy for AWS Batch service role which allows access to related services including EC2, Autoscaling, EC2 Container service and Cloudwatch Logs. */
    AWSBatchServiceRole = 'service-role/AWSBatchServiceRole',
    /** Quicksight access to Athena API and S3 buckets used for Athena query results */
    AWSQuicksightAthenaAccess = 'service-role/AWSQuicksightAthenaAccess',
    /** Allows an IAM user to manage their own Service Specific Credentials. */
    IAMSelfManageServiceSpecificCredentials = 'IAMSelfManageServiceSpecificCredentials',
    /** An access policy for providing a user/role/etc read only access to the AWS StepFunctions service. */
    AWSStepFunctionsReadOnlyAccess = 'AWSStepFunctionsReadOnlyAccess',
    /** An access policy for providing a user/role/etc access to the AWS StepFunctions API. For full access, in addition to this policy, a user MUST have iam:PassRole permission on at least one IAM role that can be assumed by the service. */
    AWSStepFunctionsFullAccess = 'AWSStepFunctionsFullAccess',
    /** An access policy for providing a user/role/etc access to the AWS StepFunctions console. For a full console experience, in addition to this policy, a user may need iam:PassRole permission on other IAM roles that can be assumed by the service. */
    AWSStepFunctionsConsoleFullAccess = 'AWSStepFunctionsConsoleFullAccess',
    /** Provides full access to Auto Scaling. */
    AutoScalingFullAccess = 'AutoScalingFullAccess',
    /** Provides read-only access to Auto Scaling. */
    AutoScalingReadOnlyAccess = 'AutoScalingReadOnlyAccess',
    /** Provides full access to Auto Scaling via the AWS Management Console. */
    AutoScalingConsoleFullAccess = 'AutoScalingConsoleFullAccess',
    /** Provides read-only access to Auto Scaling via the AWS Management Console. */
    AutoScalingConsoleReadOnlyAccess = 'AutoScalingConsoleReadOnlyAccess',
    /** Provides full access to Data Pipeline, list access for S3, DynamoDB, Redshift, RDS, SNS, and IAM roles, and passRole access for default Roles. */
    AWSDataPipelineFullAccess = 'AWSDataPipeline_FullAccess',
    /** Provides full access to Data Pipeline, list access for S3, DynamoDB, Redshift, RDS, SNS, and IAM roles, and passRole access for default Roles. */
    AWSDataPipelinePowerUser = 'AWSDataPipeline_PowerUser',
    /** Policy to enable Application Autoscaling for Amazon AppStream */
    ApplicationAutoScalingForAmazonAppStreamAccess = 'service-role/ApplicationAutoScalingForAmazonAppStreamAccess',
    /** Policy for AWS Greengrass service role which allows access to related services including AWS Lambda and AWS IoT thing shadows. */
    AWSGreengrassResourceAccessRolePolicy = 'service-role/AWSGreengrassResourceAccessRolePolicy',
    /** Provide the instance in your custom platform builder environment permission to launch EC2 instance, create EBS snapshot and AMI, stream logs to Amazon CloudWatch Logs, and store artifacts in Amazon S3. */
    AWSElasticBeanstalkCustomPlatformforEC2Role = 'AWSElasticBeanstalkCustomPlatformforEC2Role',
    /** Provides full access to Amazon Cloud Directory Service. */
    AmazonCloudDirectoryFullAccess = 'AmazonCloudDirectoryFullAccess',
    /** Provides read only access to Amazon Cloud Directory Service. */
    AmazonCloudDirectoryReadOnlyAccess = 'AmazonCloudDirectoryReadOnlyAccess',
    /** Provides read access to AWS Marketplace Entitlements */
    AWSMarketplaceGetEntitlements = 'AWSMarketplaceGetEntitlements',
    /** Enables OpsWorks instances with the CWLogs integration enabled to ship logs and create required log groups */
    AWSOpsWorksCloudWatchLogs = 'AWSOpsWorksCloudWatchLogs',
    /** Provides access to Amazon Lex conversational APIs. */
    AmazonLexRunBotsOnly = 'AmazonLexRunBotsOnly',
    /** Provides read-only access to Amazon Lex. */
    AmazonLexReadOnly = 'AmazonLexReadOnly',
    /** Provides full access to Amazon Lex via the AWS Management Console.  Also provides access to create Lex Service Linked Roles and grant Lex permissions to invoke a limited set of Lambda functions. */
    AmazonLexFullAccess = 'AmazonLexFullAccess',
    /** DO NOT USE -  AWS CodeStar Service Role Policy which grants administrative privileges in order for CodeStar to manage IAM and other service resources on behalf of the customer. */
    AWSCodeStarServiceRole = 'service-role/AWSCodeStarServiceRole',
    /** Provides full access to AWS CodeStar via the AWS Management Console. */
    AWSCodeStarFullAccess = 'AWSCodeStarFullAccess',
    /** This policy gives full access to the AWS Greengrass configuration, management and deployment actions */
    AWSGreengrassFullAccess = 'AWSGreengrassFullAccess',
    /** Policy to enable CloudWatch Events for EC2 Container Service */
    AmazonEC2ContainerServiceEventsRole = 'service-role/AmazonEC2ContainerServiceEventsRole',
    /** Policy used by QuickSight team to access customer data produced by S3 Storage Management Analytics. */
    QuickSightAccessForS3StorageManagementAnalyticsReadOnly = 'service-role/QuickSightAccessForS3StorageManagementAnalyticsReadOnly',
    /** Allows EC2 Spot Fleet to request, terminate and tag Spot Instances on your behalf. */
    AmazonEC2SpotFleetTaggingRole = 'service-role/AmazonEC2SpotFleetTaggingRole',
    /** Allow Amazon Elasticsearch Service to access other AWS services such as EC2 Networking APIs on your behalf. */
    AmazonElasticsearchServiceRolePolicy = 'aws-service-role/AmazonElasticsearchServiceRolePolicy',
    /** Provides access to create network interfaces and attach them to cross-account resources */
    AmazonVPCCrossAccountNetworkInterfaceOperations = 'AmazonVPCCrossAccountNetworkInterfaceOperations',
    /** Provides access to view automation executions and send approval decisions to automation waiting for approval */
    AmazonSSMAutomationApproverAccess = 'AmazonSSMAutomationApproverAccess',
    /** Policy allows AWSMigrationHubService to call AWSApplicationDiscoveryService on behalf of the customer. */
    AWSMigrationHubDiscoveryAccess = 'service-role/AWSMigrationHubDiscoveryAccess',
    /** Policy for AWS Glue service role which allows access to related services including EC2, S3, and Cloudwatch Logs */
    AWSGlueServiceRole = 'service-role/AWSGlueServiceRole',
    /** Provides full access to AWS Glue via the AWS Management Console */
    AWSGlueConsoleFullAccess = 'AWSGlueConsoleFullAccess',
    /** Policy for AWS Glue service role which allows customer to manage notebook server */
    AWSGlueServiceNotebookRole = 'service-role/AWSGlueServiceNotebookRole',
    /** Policy for Server Migration Service to assume role in customer's account to call Migration Hub */
    AWSMigrationHubSMSAccess = 'service-role/AWSMigrationHubSMSAccess',
    /** Policy for Database Migration Service to assume role in customer's account to call Migration Hub */
    AWSMigrationHubDMSAccess = 'service-role/AWSMigrationHubDMSAccess',
    /** Managed policy to provide the customer access to the Migration Hub Service */
    AWSMigrationHubFullAccess = 'AWSMigrationHubFullAccess',
    /** Grants Macie read-only access to resource dependencies in your account in order to enable data analysis. */
    AmazonMacieServiceRole = 'service-role/AmazonMacieServiceRole',
    /** Provides full access to Amazon Macie. */
    AmazonMacieFullAccess = 'AmazonMacieFullAccess',
    /** AWS Elastic Beanstalk Service Linked Role policy which grants permissions to create & manage resources (i.e.: AutoScaling, EC2, S3, CloudFormation, ELB, etc.) on your behalf. */
    AWSElasticBeanstalkServiceRolePolicy = 'aws-service-role/AWSElasticBeanstalkServiceRolePolicy',
    /** Allows EC2 Spot to launch and manage spot instances */
    AWSEC2SpotServiceRolePolicy = 'aws-service-role/AWSEC2SpotServiceRolePolicy',
    /** Allows Amazon Redshift to call AWS services on your behalf */
    AmazonRedshiftServiceLinkedRolePolicy = 'aws-service-role/AmazonRedshiftServiceLinkedRolePolicy',
    /** Service Linked Role Policy for AWS Elastic Load Balancing Control Plane */
    AWSElasticLoadBalancingServiceRolePolicy = 'aws-service-role/AWSElasticLoadBalancingServiceRolePolicy',
    /** Service Linked Role Policy for AWS Elastic Load Balancing Control Plane - Classic */
    AWSElasticLoadBalancingClassicServiceRolePolicy = 'aws-service-role/AWSElasticLoadBalancingClassicServiceRolePolicy',
    /** Policy to enable enhanced classic networking management feature. */
    AWSEnhancedClassicNetworkingMangementPolicy = 'aws-service-role/AWSEnhancedClassicNetworkingMangementPolicy',
    /** Allows the actions that EMR requires to terminate and delete AWS EC2 resources if the EMR Service role has lost that ability. */
    AmazonEMRCleanupPolicy = 'aws-service-role/AmazonEMRCleanupPolicy',
    /** Policy for AWS Lex Channel use case */
    LexChannelPolicy = 'aws-service-role/LexChannelPolicy',
    /** Policy for AWS Lex Bot use case */
    LexBotPolicy = 'aws-service-role/LexBotPolicy',
    /** Grants Lambda Replicator necessary permissions to replicate functions across regions */
    AWSLambdaReplicator = 'aws-service-role/AWSLambdaReplicator',
    /** A policy to allow AWS Organizations to share trust with other approved AWS Services for the purpose of simplifying customer configuration. */
    AWSOrganizationsServiceTrustPolicy = 'aws-service-role/AWSOrganizationsServiceTrustPolicy',
    /** Allows EC2 Scheduled Instances to launch and manage spot instances. */
    AWSServiceRoleForEC2ScheduledInstances = 'aws-service-role/AWSServiceRoleForEC2ScheduledInstances',
    /** Policy to enable Amazon ECS to manage your cluster. */
    AmazonECSServiceRolePolicy = 'aws-service-role/AmazonECSServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access RDS and CloudWatch. */
    AWSApplicationAutoscalingRDSClusterPolicy = 'aws-service-role/AWSApplicationAutoscalingRDSClusterPolicy',
    /** Allows API Gateway to manage associated AWS Resources on behalf of the customer. */
    APIGatewayServiceRolePolicy = 'aws-service-role/APIGatewayServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access AppStream and CloudWatch. */
    AWSApplicationAutoscalingAppStreamFleetPolicy = 'aws-service-role/AWSApplicationAutoscalingAppStreamFleetPolicy',
    /** Policy granting permissions to Application Auto Scaling to access DynamoDB and CloudWatch. */
    AWSApplicationAutoscalingDynamoDBTablePolicy = 'aws-service-role/AWSApplicationAutoscalingDynamoDBTablePolicy',
    /** Allows EC2 Spot Fleet to launch and manage spot fleet instances */
    AWSEC2SpotFleetServiceRolePolicy = 'aws-service-role/AWSEC2SpotFleetServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access EC2 Spot Fleet and CloudWatch. */
    AWSApplicationAutoscalingEC2SpotFleetRequestPolicy = 'aws-service-role/AWSApplicationAutoscalingEC2SpotFleetRequestPolicy',
    /** Policy granting permissions to Application Auto Scaling to access EC2 Container Service and CloudWatch. */
    AWSApplicationAutoscalingECSServicePolicy = 'aws-service-role/AWSApplicationAutoscalingECSServicePolicy',
    /** Policy granting permissions to Application Auto Scaling to access Elastic Map Reduce and CloudWatch. */
    AWSApplicationAutoscalingEMRInstanceGroupPolicy = 'aws-service-role/AWSApplicationAutoscalingEMRInstanceGroupPolicy',
    /** Provides read only access to Amazon Chime Admin Console via the AWS Management Console. */
    AmazonChimeReadOnly = 'AmazonChimeReadOnly',
    /** Provides full access to Amazon Chime Admin Console via the AWS Management Console. */
    AmazonChimeFullAccess = 'AmazonChimeFullAccess',
    /** Provides user management access to Amazon Chime Admin Console via the AWS Management Console. */
    AmazonChimeUserManagement = 'AmazonChimeUserManagement',
    /** Enables access to AWS resources used or managed by CloudHSM */
    CloudHSMServiceRolePolicy = 'aws-service-role/CloudHSMServiceRolePolicy',
    /** Provides administrative access to Amazon ECS resources and enables ECS features through access to other AWS service resources, including VPCs, Auto Scaling groups, and CloudFormation stacks. */
    AmazonECSFullAccess = 'AmazonECS_FullAccess',
    /** Permissions required by DynamoDB for cross-region data replication */
    DynamoDBReplicationServiceRolePolicy = 'aws-service-role/DynamoDBReplicationServiceRolePolicy',
    /** Provides access to AWS Resources managed or used by Amazon SSM */
    AmazonSSMServiceRolePolicy = 'aws-service-role/AmazonSSMServiceRolePolicy',
    /** Provides access to other AWS service resources that are required to run Amazon ECS tasks */
    AmazonECSTaskExecutionRolePolicy = 'service-role/AmazonECSTaskExecutionRolePolicy',
    /** Allow AWS CloudWatch to execute actions on your behalf configured through alarms and events. */
    CloudWatchEventsServiceRolePolicy = 'aws-service-role/CloudWatchEventsServiceRolePolicy',
    /** Grants Amazon Inspector access to AWS Services needed to perform security assessments */
    AmazonInspectorServiceRolePolicy = 'aws-service-role/AmazonInspectorServiceRolePolicy',
    /** Provides full access to AWS Price List Service. */
    AWSPriceListServiceFullAccess = 'AWSPriceListServiceFullAccess',
    /** Provides CodeDeploy service access to perform a Lambda deployment on your behalf. */
    AWSCodeDeployRoleForLambda = 'service-role/AWSCodeDeployRoleForLambda',
    /** Provides full access to AmazonMQ via the AWS Management Console. */
    AmazonMQFullAccess = 'AmazonMQFullAccess',
    /** Provides read only access to AmazonMQ via the AWS Management Console. */
    AmazonMQReadOnlyAccess = 'AmazonMQReadOnlyAccess',
    /** Enable access to AWS Resources used or managed by Amazon Guard Duty */
    AmazonGuardDutyServiceRolePolicy = 'aws-service-role/AmazonGuardDutyServiceRolePolicy',
    /** Provides read only access to Amazon GuardDuty resources */
    AmazonGuardDutyReadOnlyAccess = 'AmazonGuardDutyReadOnlyAccess',
    /** Provides full access to use Amazon GuardDuty. */
    AmazonGuardDutyFullAccess = 'AmazonGuardDutyFullAccess',
    /** Provides read only access to Amazon SageMaker via the AWS Management Console and SDK. */
    AmazonSageMakerReadOnly = 'AmazonSageMakerReadOnly',
    /** Provides full access to Amazon SageMaker via the AWS Management Console and SDK. Also provides select access to related services (e.g., S3, ECR, CloudWatch Logs). */
    AmazonSageMakerFullAccess = 'AmazonSageMakerFullAccess',
    /** Full Access Policy for Amazon FreeRTOS */
    AmazonFreeRTOSFullAccess = 'AmazonFreeRTOSFullAccess',
    /** Grants AWS DeepLens access to AWS Services, resources and roles needed by DeepLens and its dependencies including IoT, S3, GreenGrass and AWS Lambda. */
    AWSDeepLensServiceRolePolicy = 'service-role/AWSDeepLensServiceRolePolicy',
    /** This policy specifies permissions required by DeepLens Administrative lambda functions that run on a DeepLens device */
    AWSDeepLensLambdaFunctionAccessPolicy = 'AWSDeepLensLambdaFunctionAccessPolicy',
    /** Allows Rekognition to call AWS services on your behalf. */
    AmazonRekognitionServiceRole = 'service-role/AmazonRekognitionServiceRole',
    /** Give QuickSight read-only access to IoT Analytics datasets */
    AWSQuickSightIoTAnalyticsAccess = 'AWSQuickSightIoTAnalyticsAccess',
    /** Provides full access to Amazon Comprehend. */
    ComprehendFullAccess = 'ComprehendFullAccess',
    /** Provides read-only access to Amazon Comprehend. */
    ComprehendReadOnly = 'ComprehendReadOnly',
    /** Provides read access to the Greengrass OTA Update artifacts in all Greengrass regions */
    GreengrassOTAUpdateArtifactAccess = 'service-role/GreengrassOTAUpdateArtifactAccess',
    /** Provides read-only access to Amazon Translate. */
    TranslateReadOnly = 'TranslateReadOnly',
    /** Service Linked Role Policy for AWS Cloud9 */
    AWSCloud9ServiceRolePolicy = 'aws-service-role/AWSCloud9ServiceRolePolicy',
    /** Provides permission to create AWS Cloud9 development environments and to manage owned environments. */
    AWSCloud9User = 'AWSCloud9User',
    /** Provides administrator access to AWS Cloud9. */
    AWSCloud9Administrator = 'AWSCloud9Administrator',
    /** Provides the ability to be invited into AWS Cloud9 shared development environments. */
    AWSCloud9EnvironmentMember = 'AWSCloud9EnvironmentMember',
    /** Grants full access to AlexaForBusiness resources and access to related AWS Services */
    AlexaForBusinessFullAccess = 'AlexaForBusinessFullAccess',
    /** Provide read only access to AlexaForBusiness services */
    AlexaForBusinessReadOnlyAccess = 'AlexaForBusinessReadOnlyAccess',
    /** Provide device setup access to AlexaForBusiness services */
    AlexaForBusinessDeviceSetup = 'AlexaForBusinessDeviceSetup',
    /** Provide gateway execution access to AlexaForBusiness services */
    AlexaForBusinessGatewayExecution = 'AlexaForBusinessGatewayExecution',
    /** This policy allows users to register things at bulk using AWS IoT StartThingRegistrationTask API */
    AWSIoTThingsRegistration = 'service-role/AWSIoTThingsRegistration',
    /** Provides read only access to AWS Kinesis Video Streams via the AWS Management Console. */
    AmazonKinesisVideoStreamsReadOnlyAccess = 'AmazonKinesisVideoStreamsReadOnlyAccess',
    /** Provides full access to Amazon Kinesis Video Streams via the AWS Management Console. */
    AmazonKinesisVideoStreamsFullAccess = 'AmazonKinesisVideoStreamsFullAccess',
    /** Grants AWS SSO permissions to manage AWS resources, including IAM roles, policies and SAML IdP on your behalf. */
    AWSSSOServiceRolePolicy = 'aws-service-role/AWSSSOServiceRolePolicy',
    /** This policy allows ElastiCache to manage AWS resources on your behalf as necessary for managing your cache */
    ElastiCacheServiceRolePolicy = 'aws-service-role/ElastiCacheServiceRolePolicy',
    /** Allows access to create AWS IoT Job and describe the AWS code signer job */
    AWSIoTOTAUpdate = 'service-role/AWSIoTOTAUpdate',
    /** Provides full access to AWS Elemental MediaPackage resources */
    AWSElementalMediaPackageFullAccess = 'AWSElementalMediaPackageFullAccess',
    /** Provides read only access to AWS Elemental MediaPackage resources */
    AWSElementalMediaPackageReadOnly = 'AWSElementalMediaPackageReadOnly',
    /** Allows Amazon RDS to manage AWS resources on your behalf. */
    AmazonRDSServiceRolePolicy = 'aws-service-role/AmazonRDSServiceRolePolicy',
    /** Enables access to AWS Services and Resources used or managed by Auto Scaling */
    AutoScalingServiceRolePolicy = 'aws-service-role/AutoScalingServiceRolePolicy',
    /** Provides read-only access to all Route 53 Auto Naming actions. */
    AmazonRoute53AutoNamingReadOnlyAccess = 'AmazonRoute53AutoNamingReadOnlyAccess',
    /** Provides full access to all Route 53 Auto Naming actions. */
    AmazonRoute53AutoNamingFullAccess = 'AmazonRoute53AutoNamingFullAccess',
    /** Policy granting permissions to Application Auto Scaling to access SageMaker and CloudWatch. */
    AWSApplicationAutoscalingSageMakerEndpointPolicy = 'aws-service-role/AWSApplicationAutoscalingSageMakerEndpointPolicy',
    /** Provides full access to service catalog admin capabilities */
    AWSServiceCatalogAdminFullAccess = 'AWSServiceCatalogAdminFullAccess',
    /** Provides full access to service catalog enduser capabilities */
    AWSServiceCatalogEndUserFullAccess = 'AWSServiceCatalogEndUserFullAccess',
    /** Access for the AWS Trusted Advisor Service to help reduce cost, increase performance, and improve security of your AWS environment. */
    AWSTrustedAdvisorServiceRolePolicy = 'aws-service-role/AWSTrustedAdvisorServiceRolePolicy',
    /** Provides limited access to the Amazon Cognito configuration service. */
    AmazonESCognitoAccess = 'AmazonESCognitoAccess',
    /** Policy to enable CloudWatch Event Target for AWS Batch Job Submission */
    AWSBatchServiceEventTargetRole = 'service-role/AWSBatchServiceEventTargetRole',
    /** This policy allows DAX to create and manage Network interface, Security group, Subnet and Vpc on behalf of customer */
    DAXServiceRolePolicy = 'aws-service-role/DAXServiceRolePolicy',
    /** Provides full read and write access to all MediaStore APIs */
    AWSElementalMediaStoreFullAccess = 'AWSElementalMediaStoreFullAccess',
    /** Full permissions required to use AmazonCloudWatchAgent. */
    CloudWatchAgentAdminPolicy = 'CloudWatchAgentAdminPolicy',
    /** Permissions required to use AmazonCloudWatchAgent on servers */
    CloudWatchAgentServerPolicy = 'CloudWatchAgentServerPolicy',
    /** This is the read only policy for AWS Resource Groups */
    AWSResourceGroupsReadOnlyAccess = 'AWSResourceGroupsReadOnlyAccess',
    /** Provides read-only permissions for MediaStore APIs */
    AWSElementalMediaStoreReadOnly = 'AWSElementalMediaStoreReadOnly',
    /** Provides registrant level access to Route 53 Auto Naming actions. */
    AmazonRoute53AutoNamingRegistrantAccess = 'AmazonRoute53AutoNamingRegistrantAccess',
    /** Allows AWS Config to call read-only AWS Organizations APIs */
    AWSConfigRoleForOrganizations = 'service-role/AWSConfigRoleForOrganizations',
    /** Provides administrative access to the AppSync service, though not enough to access via the console. */
    AWSAppSyncAdministrator = 'AWSAppSyncAdministrator',
    /** Provides access to create, update, and query the schema. */
    AWSAppSyncSchemaAuthor = 'AWSAppSyncSchemaAuthor',
    /** Provides full invoking access to the AppSync service - both through the console and independently */
    AWSAppSyncInvokeFullAccess = 'AWSAppSyncInvokeFullAccess',
    /** Allows EC2 Fleet to launch and manage instances. */
    AWSEC2FleetServiceRolePolicy = 'aws-service-role/AWSEC2FleetServiceRolePolicy',
    /** Access policy to allow FM service linked role to perform FM-related actions on FM-managed resources within a customer AWS Organization account. */
    FMSServiceRolePolicy = 'aws-service-role/FMSServiceRolePolicy',
    /** Provides access to read only operation for Amazon Transcribe */
    AmazonTranscribeReadOnlyAccess = 'AmazonTranscribeReadOnlyAccess',
    /** Provides full access to Amazon Transcribe operations */
    AmazonTranscribeFullAccess = 'AmazonTranscribeFullAccess',
    /** Provides read/write access to AWS Secrets Manager via the AWS Management Console. Note: this exludes IAM actions, so combine with IAMFullAccess if rotation configuration is required. */
    SecretsManagerReadWrite = 'SecretsManagerReadWrite',
    /** Allows AppSync to push logs to user's CloudWatch account. */
    AWSAppSyncPushToCloudWatchLogs = 'service-role/AWSAppSyncPushToCloudWatchLogs',
    /** Allows AWS Artifact read-only access to operations in AWS Organizations. */
    AWSArtifactAccountSync = 'service-role/AWSArtifactAccountSync',
    /** Grants users full access to Elastic Transcoder and the access to associated services that is required for full Elastic Transcoder functionality. */
    AmazonElasticTranscoderFullAccess = 'AmazonElasticTranscoder_FullAccess',
    /** Allows Amazon RDS to manage AWS resources on your behalf. */
    AmazonRDSBetaServiceRolePolicy = 'aws-service-role/AmazonRDSBetaServiceRolePolicy',
    /** Full access for AWS FM Administrator */
    AWSFMAdminFullAccess = 'AWSFMAdminFullAccess',
    /** Read only access for AWS FM Administrator that allows monitoring AWS FM operations */
    AWSFMAdminReadOnlyAccess = 'AWSFMAdminReadOnlyAccess',
    /** Provides read only access to AWS WAF actions for AWS Firewall Manager member accounts */
    AWSFMMemberReadOnlyAccess = 'AWSFMMemberReadOnlyAccess',
    /** Provides read only access to AWS IoT 1-Click. */
    AWSIoT1ClickReadOnlyAccess = 'AWSIoT1ClickReadOnlyAccess',
    /** Provides full access to AWS IoT 1-Click. */
    AWSIoT1ClickFullAccess = 'AWSIoT1ClickFullAccess',
    /** This policy provides Kubernetes the permissions it requires to manage resources on your behalf. Kubernetes requires Ec2:CreateTags permissions to place identifying information on EC2 resources including but not limited to Instances, Security Groups, and Elastic Network Interfaces. */
    AmazonEKSClusterPolicy = 'AmazonEKSClusterPolicy',
    /** This policy provides the Amazon VPC CNI Plugin (amazon-vpc-cni-k8s) the permissions it requires to modify the IP address configuration on your EKS worker nodes. This permission set allows the CNI to list, describe, and modify Elastic Network Interfaces on your behalf. More information on the AWS VPC CNI Plugin is available here: https://github.com/aws/amazon-vpc-cni-k8s */
    AmazonEKSCNIPolicy = 'AmazonEKS_CNI_Policy',
    /** This policy allows Amazon Elastic Container Service for Kubernetes to create and manage the necessary resources to operate EKS Clusters. */
    AmazonEKSServicePolicy = 'AmazonEKSServicePolicy',
    /** This policy allows Amazon EKS worker nodes to connect to Amazon EKS Clusters. */
    AmazonEKSWorkerNodePolicy = 'AmazonEKSWorkerNodePolicy',
    /** Provides read only access to Amazon Neptune. Note that this policy also grants access to Amazon RDS resources. For more information, see https://aws.amazon.com/neptune/faqs/. */
    NeptuneReadOnlyAccess = 'NeptuneReadOnlyAccess',
    /** Provides full access to Amazon Neptune. Note this policy also grants full access to publish on all SNS topics within the account and full access to Amazon RDS. For more information, see https://aws.amazon.com/neptune/faqs/. */
    NeptuneFullAccess = 'NeptuneFullAccess',
    /** Allows Config to call AWS services and collect resource configurations on your behalf. */
    AWSConfigServiceRolePolicy = 'aws-service-role/AWSConfigServiceRolePolicy',
    /** Amazon RDS Preview Service Role Policy */
    AmazonRDSPreviewServiceRolePolicy = 'aws-service-role/AmazonRDSPreviewServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access APIGateway and CloudWatch for custom resource scaling */
    AWSApplicationAutoScalingCustomResourcePolicy = 'aws-service-role/AWSApplicationAutoScalingCustomResourcePolicy',
    /** Provides the AWS DDoS Response Team with limited access to your AWS account to assist with DDoS attack mitigation during a high-severity event. */
    AWSShieldDRTAccessPolicy = 'service-role/AWSShieldDRTAccessPolicy',
    /** Grants users read-only access to Elastic Transcoder and list access to related services. */
    AmazonElasticTranscoderReadOnlyAccess = 'AmazonElasticTranscoder_ReadOnlyAccess',
    /** Grants users permission to change presets, submit jobs, and view Elastic Transcoder settings. This policy also grants some read-only access to some other services required to use the Elastic Transcode console, including S3, IAM, and SNS. */
    AmazonElasticTranscoderJobsSubmitter = 'AmazonElasticTranscoder_JobsSubmitter',
    /** Grants CloudFront Logger write permissions to CloudWatch Logs. */
    AWSCloudFrontLogger = 'aws-service-role/AWSCloudFrontLogger',
    /** Provides receive message, delete message, and read attribute access to SQS queues, and write permissions to CloudWatch logs. */
    AWSLambdaSQSQueueExecutionRole = 'service-role/AWSLambdaSQSQueueExecutionRole',
    /** Provides read only access to IoT Analytics. */
    AWSIoTAnalyticsReadOnlyAccess = 'AWSIoTAnalyticsReadOnlyAccess',
    /** Provides full access to IoT Analytics. */
    AWSIoTAnalyticsFullAccess = 'AWSIoTAnalyticsFullAccess',
    /** Provides full access to manage Amazon Neptune using the AWS Console. Note this policy also grants full access to publish on all SNS topics within the account, permissions to create and edit Amazon EC2 instances and VPC configurations, permissions to view and list keys on Amazon KMS, and full access to Amazon RDS. For more information, see https://aws.amazon.com/neptune/faqs/. */
    NeptuneConsoleFullAccess = 'NeptuneConsoleFullAccess',
    /** Service linked role for Amazon Macie */
    AmazonMacieServiceRolePolicy = 'aws-service-role/AmazonMacieServiceRolePolicy',
    /** Provides read only access to AWS Elemental MediaConvert via the AWS Management Console and SDK. */
    AWSElementalMediaConvertReadOnly = 'AWSElementalMediaConvertReadOnly',
    /** Provides full access to AWS Elemental MediaConvert via the AWS Management Console and SDK. */
    AWSElementalMediaConvertFullAccess = 'AWSElementalMediaConvertFullAccess',
    /** Provides read only access to AWS SSO configurations. */
    AWSSSOReadOnly = 'AWSSSOReadOnly',
    /** Provides access within AWS SSO to manage AWS Organizations master and member accounts and cloud application */
    AWSSSOMasterAccountAdministrator = 'AWSSSOMasterAccountAdministrator',
    /** Provides access within AWS SSO to manage AWS Organizations member accounts and cloud application */
    AWSSSOMemberAccountAdministrator = 'AWSSSOMemberAccountAdministrator',
    /** Grants permission to create the service-linked role of Amazon Macie. */
    AmazonMacieHandshakeRole = 'service-role/AmazonMacieHandshakeRole',
    /** Provides appropriate permissions to AWS Data Lifecycle Manager to take actions on AWS resources */
    AWSDataLifecycleManagerServiceRole = 'service-role/AWSDataLifecycleManagerServiceRole',
    /** Provides read access for IoT and related resources */
    AWSIoTDeviceDefenderAudit = 'service-role/AWSIoTDeviceDefenderAudit',
    /** Provides full access to AWS Marketplace Private Image Build Feature. In addition to create private images, it also provides permissions to add tags to images, launch and terminate ec2 instances. */
    AWSMarketplaceImageBuildFullAccess = 'AWSMarketplaceImageBuildFullAccess',
    /** Provides write access to AWS resources required for AWS Discovery Continuous Export */
    AWSDiscoveryContinuousExportFirehosePolicy = 'AWSDiscoveryContinuousExportFirehosePolicy',
    /** Enables access to AWS Services and Resources used or managed by Application Discovery Service Continuous Export feature */
    ApplicationDiscoveryServiceContinuousExportServiceRolePolicy = 'aws-service-role/ApplicationDiscoveryServiceContinuousExportServiceRolePolicy',
    /** Policy granting permissions to AWS Auto Scaling to periodically forecast capacity and generate scheduled scaling actions for Auto Scaling groups in a scaling plan */
    AWSAutoScalingPlansEC2AutoScalingPolicy = 'aws-service-role/AWSAutoScalingPlansEC2AutoScalingPolicy',
    /** Creating SLR to write customer's logs to a firehose stream */
    WAFRegionalLoggingServiceRolePolicy = 'aws-service-role/WAFRegionalLoggingServiceRolePolicy',
    /** Creating SLR to write customer's logs to a firehose stream */
    WAFLoggingServiceRolePolicy = 'aws-service-role/WAFLoggingServiceRolePolicy',
    /** Allows user to access Amazon FreeRTOS OTA Update */
    AmazonFreeRTOSOTAUpdate = 'service-role/AmazonFreeRTOSOTAUpdate',
    /** Allow the AWS X-Ray Daemon to relay raw trace segments data to the service's API and retrieve sampling data (rules, targets, etc.) to be used by the X-Ray SDK. */
    AWSXRayDaemonWriteAccess = 'AWSXRayDaemonWriteAccess',
    /** Allows Amazon Connect to create and manage AWS resources on your behalf. */
    AmazonConnectServiceLinkedRolePolicy = 'aws-service-role/AmazonConnectServiceLinkedRolePolicy',
    /** Provides read only access to Amazon ElasticLoadBalancing and dependent services */
    ElasticLoadBalancingReadOnly = 'ElasticLoadBalancingReadOnly',
    /** Provides full access to Amazon ElasticLoadBalancing, and limited access to other services necessary to provide ElasticLoadBalancing features. */
    ElasticLoadBalancingFullAccess = 'ElasticLoadBalancingFullAccess',
    /** AWS Lightsail service linked role policy which grants permissions to export resources */
    LightsailExportAccess = 'aws-service-role/LightsailExportAccess',
    /** Provides full access to the Amazon Redshift Query Editor and to saved queries via the AWS Management Console. */
    AmazonRedshiftQueryEditor = 'AmazonRedshiftQueryEditor',
    /** Provides full access to AWS Glue via the AWS Management Console and access to sagemaker notebook instances. */
    AWSGlueConsoleSageMakerNotebookFullAccess = 'AWSGlueConsoleSageMakerNotebookFullAccess',
    /** Grants permission to view the Amazon Connect instances in your AWS account. */
    AmazonConnectReadOnlyAccess = 'AmazonConnectReadOnlyAccess',
    /** Provides auditor access to AWS Certificate Manager Private Certificate Authority */
    AWSCertificateManagerPrivateCAAuditor = 'AWSCertificateManagerPrivateCAAuditor',
    /** Provides certificate user access to AWS Certificate Manager Private Certificate Authority */
    AWSCertificateManagerPrivateCAUser = 'AWSCertificateManagerPrivateCAUser',
    /** Provides full access to AWS Certificate Manager Private Certificate Authority */
    AWSCertificateManagerPrivateCAFullAccess = 'AWSCertificateManagerPrivateCAFullAccess',
    /** Provides read only access to AWS Certificate Manager Private Certificate Authority */
    AWSCertificateManagerPrivateCAReadOnly = 'AWSCertificateManagerPrivateCAReadOnly',
    /** Permission policy for CloudTrail ServiceLinkedRole */
    CloudTrailServiceRolePolicy = 'aws-service-role/CloudTrailServiceRolePolicy',
    /** This policy gives read only access to the AWS Greengrass configuration, management and deployment actions */
    AWSGreengrassReadOnlyAccess = 'AWSGreengrassReadOnlyAccess',
    /** ReadOnly access for SSO Directory */
    AWSSSODirectoryReadOnly = 'AWSSSODirectoryReadOnly',
    /** Administrator access for SSO Directory */
    AWSSSODirectoryAdministrator = 'AWSSSODirectoryAdministrator',
    /** Provides full access to AWS Organizations. */
    AWSOrganizationsFullAccess = 'AWSOrganizationsFullAccess',
    /** Provides read-only access to AWS Organizations. */
    AWSOrganizationsReadOnlyAccess = 'AWSOrganizationsReadOnlyAccess',
    /** Allows AWS IoT SiteWise to provision and manage gateways as well as query data. The policy includes required AWS Greengrass permissions for deploying to groups, AWS Lambda permissions for creating and updating service-prefixed functions, and AWS IoT Analytics permissions for querying data from datastores. */
    AWSServiceRoleForIoTSiteWise = 'aws-service-role/AWSServiceRoleForIoTSiteWise',
    /** Policy containing Read-only AWS Resource Access Manager access to customers' Organizations structure. It also contains IAM permissions to self-delete the role. */
    AWSResourceAccessManagerServiceRolePolicy = 'aws-service-role/AWSResourceAccessManagerServiceRolePolicy',
    /** Enables access to AWS services and resources required for AWS KMS custom key stores */
    AWSKeyManagementServiceCustomKeyStoresServiceRolePolicy = 'aws-service-role/AWSKeyManagementServiceCustomKeyStoresServiceRolePolicy',
    /** IAM service linked role policy for Kafka. */
    KafkaServiceRolePolicy = 'aws-service-role/KafkaServiceRolePolicy',
    /** Default policy for the Amazon Elastic MapReduce Editors service role. */
    AmazonElasticMapReduceEditorsRole = 'service-role/AmazonElasticMapReduceEditorsRole',
    /** Allows full access to use the RDS data APIs, secret store APIs for RDS database credentials, and DB console query management APIs to execute SQL statements on Aurora Serverless clusters in the AWS account. */
    AmazonRDSDataFullAccess = 'AmazonRDSDataFullAccess',
    /** Provides read only access to AWS RoboMaker via the AWS Management Console and SDK */
    AWSRoboMakerReadOnlyAccess = 'AWSRoboMakerReadOnlyAccess',
    /** RoboMaker service policy */
    AWSRoboMakerServiceRolePolicy = 'AWSRoboMakerServiceRolePolicy',
    /** RoboMaker service policy */
    AWSRoboMakerServicePolicy = 'aws-service-role/AWSRoboMakerServicePolicy',
    /** Allow VPC Transit Gateway to create and manage necessary resources for your Transit Gateway VPC Attachments. */
    AWSVPCTransitGatewayServiceRolePolicy = 'aws-service-role/AWSVPCTransitGatewayServiceRolePolicy',
    /** AWS License Manager service default role policy */
    AWSLicenseManagerServiceRolePolicy = 'aws-service-role/AWSLicenseManagerServiceRolePolicy',
    /** AWS License Manager service master account role policy */
    AWSLicenseManagerMasterAccountRolePolicy = 'aws-service-role/AWSLicenseManagerMasterAccountRolePolicy',
    /** AWS License Manager service member account role policy */
    AWSLicenseManagerMemberAccountRolePolicy = 'aws-service-role/AWSLicenseManagerMemberAccountRolePolicy',
    /** Permissions to allow the AWS Server Migration Service to create and update relevant AWS resources into the customer's AWS account for launching migrated servers and applications. */
    ServerMigrationServiceLaunchRole = 'service-role/ServerMigrationServiceLaunchRole',
    /** Allow GlobalAccelerator Users Access to Read Only APIs */
    GlobalAcceleratorReadOnlyAccess = 'GlobalAcceleratorReadOnlyAccess',
    /** Allow GlobalAccelerator Users full Access to all APIs */
    GlobalAcceleratorFullAccess = 'GlobalAcceleratorFullAccess',
    /** Provides full access to all administrative actions for an AWS Private Marketplace. */
    AWSPrivateMarketplaceAdminFullAccess = 'AWSPrivateMarketplaceAdminFullAccess',
    /** Provides full access to Amazon Comprehend Medical */
    ComprehendMedicalFullAccess = 'ComprehendMedicalFullAccess',
    /** Provides CodeDeploy service wide access to perform an ECS blue/green deployment on your behalf. Grants full access to support services, such as  full access to read all S3 objects, invoke all Lambda functions, publish to all SNS topics within the account and update all ECS services. */
    AWSCodeDeployRoleForECS = 'AWSCodeDeployRoleForECS',
    /**  Provides CodeDeploy service limited access to perform an ECS blue/green deployment on your behalf. */
    AWSCodeDeployRoleForECSLimited = 'AWSCodeDeployRoleForECSLimited',
    /** Provides full access to Amazon Translate. */
    TranslateFullAccess = 'TranslateFullAccess',
    /** A service-linked role required for AWS Security Hub to access your resources. */
    AWSSecurityHubServiceRolePolicy = 'aws-service-role/AWSSecurityHubServiceRolePolicy',
    /** Provides full access to use AWS Security Hub. */
    AWSSecurityHubFullAccess = 'AWSSecurityHubFullAccess',
    /** Provides read only access to AWS Security Hub resources */
    AWSSecurityHubReadOnlyAccess = 'AWSSecurityHubReadOnlyAccess',
    /** Allows Amazon FSx to manage AWS resources on your behalf */
    AmazonFSxServiceRolePolicy = 'aws-service-role/AmazonFSxServiceRolePolicy',
    /** Allows Amazon FSx to delete its Service Linked Roles for Amazon S3 access */
    FSxDeleteServiceLinkedRoleAccess = 'aws-service-role/FSxDeleteServiceLinkedRoleAccess',
    /** Provides read only access to Amazon FSx. */
    AmazonFSxReadOnlyAccess = 'AmazonFSxReadOnlyAccess',
    /** Provides full access to Amazon FSx and access to related AWS services. */
    AmazonFSxFullAccess = 'AmazonFSxFullAccess',
    /** Provides read only access to Amazon FSx and access to related AWS services via the AWS Management Console. */
    AmazonFSxConsoleReadOnlyAccess = 'AmazonFSxConsoleReadOnlyAccess',
    /** Provides full access to Amazon FSx and access to related AWS services via the AWS Management Console. */
    AmazonFSxConsoleFullAccess = 'AmazonFSxConsoleFullAccess',
    /** Access to all Amazon Textract APIs */
    AmazonTextractFullAccess = 'AmazonTextractFullAccess',
    /** Allows Textract to call AWS services on your behalf. */
    AmazonTextractServiceRole = 'service-role/AmazonTextractServiceRole',
    /** Provides read-only access to all AWS Cloud Map actions. */
    AWSCloudMapReadOnlyAccess = 'AWSCloudMapReadOnlyAccess',
    /** Provides full access to all AWS Cloud Map actions. */
    AWSCloudMapFullAccess = 'AWSCloudMapFullAccess',
    /** Provides access to AWS Cloud Map discovery API. */
    AWSCloudMapDiscoverInstanceAccess = 'AWSCloudMapDiscoverInstanceAccess',
    /** Provides registrant level access to AWS Cloud Map actions. */
    AWSCloudMapRegisterInstanceAccess = 'AWSCloudMapRegisterInstanceAccess',
    /** Provides full access to AWS Well-Architected Tool via the AWS Management Console */
    WellArchitectedConsoleFullAccess = 'WellArchitectedConsoleFullAccess',
    /** Provides read-only access to AWS Well-Architected Tool via the AWS Management Console */
    WellArchitectedConsoleReadOnlyAccess = 'WellArchitectedConsoleReadOnlyAccess',
    /** Cloudwatch Application Insights Service Linked Role Policy */
    CloudwatchApplicationInsightsServiceLinkedRolePolicy = 'aws-service-role/CloudwatchApplicationInsightsServiceLinkedRolePolicy',
    /** Provides full access to IoT SiteWise. */
    AWSIoTSiteWiseFullAccess = 'AWSIoTSiteWiseFullAccess',
    /** Provides read only access to IoT SiteWise. */
    AWSIoTSiteWiseReadOnlyAccess = 'AWSIoTSiteWiseReadOnlyAccess',
    /** Provides full access to Amazon Personalize via the AWS Management Console and SDK. Also provides select access to related services (e.g., S3, CloudWatch). */
    AmazonPersonalizeFullAccess = 'service-role/AmazonPersonalizeFullAccess',
    /** Policy to enable AWS Client VPN to manage your Client VPN endpoints. */
    ClientVPNServiceRolePolicy = 'aws-service-role/ClientVPNServiceRolePolicy',
    /** Provides read only access to AmazonMQ via our API/SDK. */
    AmazonMQApiReadOnlyAccess = 'AmazonMQApiReadOnlyAccess',
    /** Provides full access to AmazonMQ via our API/SDK. */
    AmazonMQApiFullAccess = 'AmazonMQApiFullAccess',
    /** Provides full access to Amazon DocumentDB with MongoDB compatibility. Note this policy also grants full access to publish on all SNS topics within the account and full access to Amazon RDS and Amazon Neptune. */
    AmazonDocDBFullAccess = 'AmazonDocDBFullAccess',
    /** Provides read-only access to Amazon DocumentDB with MongoDB compatibility. Note that this policy also grants access to Amazon RDS and Amazon Neptune resources. */
    AmazonDocDBReadOnlyAccess = 'AmazonDocDBReadOnlyAccess',
    /** Provides full access to manage Amazon DocumentDB with MongoDB compatibility using the AWS Management Console. Note this policy also grants full access to publish on all SNS topics within the account, permissions to create and edit Amazon EC2 instances and VPC configurations, permissions to view and list keys on Amazon KMS, and full access to Amazon RDS and Amazon Neptune. */
    AmazonDocDBConsoleFullAccess = 'AmazonDocDBConsoleFullAccess',
    /** Provides AWS Backup permission to create backups on your behalf across AWS services */
    AWSBackupServiceRolePolicyForBackup = 'service-role/AWSBackupServiceRolePolicyForBackup',
    /** Provides read only access to IoT Events. */
    AWSIoTEventsReadOnlyAccess = 'AWSIoTEventsReadOnlyAccess',
    /** Provides full access to IoT Events. */
    AWSIoTEventsFullAccess = 'AWSIoTEventsFullAccess',
    /** AWS Elastic Beanstalk Service Role policy that grants limited permissions to update your resources on your behalf for maintenance purposes. */
    AWSElasticBeanstalkMaintenance = 'aws-service-role/AWSElasticBeanstalkMaintenance',
    /** Provides AWS Backup permission to perform restores on your behalf across AWS services. This policy includes permissions to create and delete AWS resources, such as EBS volumes, RDS instances, and EFS file systems, which are part of the restore process. */
    AWSBackupServiceRolePolicyForRestores = 'service-role/AWSBackupServiceRolePolicyForRestores',
    /** Allows AWS Transfer full access to create log streams and groups and put log events to your account */
    AWSTransferLoggingAccess = 'service-role/AWSTransferLoggingAccess',
    /** Provide full access to Amazon MSK and other required permissions for its dependencies. */
    AmazonMSKFullAccess = 'AmazonMSKFullAccess',
    /** Provide readonly access to Amazon MSK */
    AmazonMSKReadOnlyAccess = 'AmazonMSKReadOnlyAccess',
    /** Gives access to all actions for Amazon Forecast */
    AmazonForecastFullAccess = 'AmazonForecastFullAccess',
    /** Provides read-only access to AWS DataSync */
    AWSDataSyncReadOnlyAccess = 'AWSDataSyncReadOnlyAccess',
    /** Provides full access to AWS DataSync and minimal access to its dependencies */
    AWSDataSyncFullAccess = 'AWSDataSyncFullAccess',
    /** Enables access to AWS Services and Resources used or managed by Amazon WorkLink */
    WorkLinkServiceRolePolicy = 'WorkLinkServiceRolePolicy',
    /** Allows DeepRacer to create required resources and call AWS services on your behalf. */
    AWSDeepRacerServiceRolePolicy = 'service-role/AWSDeepRacerServiceRolePolicy',
    /** Allows CloudFormation to create and manage AWS stacks and resources on your behalf. */
    AWSDeepRacerCloudFormationAccessPolicy = 'AWSDeepRacerCloudFormationAccessPolicy',
    /** Allows RoboMaker to create required resources and call AWS services on your behalf. */
    AWSDeepRacerRoboMakerAccessPolicy = 'AWSDeepRacerRoboMakerAccessPolicy',
    /** Policy for AWS Comprehend service role which allows access to S3 resources for data access */
    ComprehendDataAccessRolePolicy = 'service-role/ComprehendDataAccessRolePolicy',
    /** This policy enables Alexa for Business to perform automated tasks scheduled by your network profiles. */
    AlexaForBusinessNetworkProfileServicePolicy = 'aws-service-role/AlexaForBusinessNetworkProfileServicePolicy',
    /** The policy for Amazon EC2 Role to enable AWS Systems Manager service core functionality. */
    AmazonSSMManagedInstanceCore = 'AmazonSSMManagedInstanceCore',
    /** This policy allows SSM Agent to access Directory Service on behalf of the customer for domain-join the managed instance. */
    AmazonSSMDirectoryServiceAccess = 'AmazonSSMDirectoryServiceAccess',
    /** Allows Amazon Cognito User Pools service to use your SES identities for email sending */
    AmazonCognitoIdpEmailServiceRolePolicy = 'aws-service-role/AmazonCognitoIdpEmailServiceRolePolicy',
    /** Provides full access to AWS IQ */
    AWSIQFullAccess = 'AWSIQFullAccess',
    /** Policy granting permissions to AWS Global Accelerator to manage EC2 Elastic Network Interfaces and Security Groups. */
    AWSGlobalAcceleratorSLRPolicy = 'aws-service-role/AWSGlobalAcceleratorSLRPolicy',
    /** Enables access to AWS Services and Resources used or managed by Amazon WorkMail Events */
    AmazonWorkMailEventsServiceRolePolicy = 'aws-service-role/AmazonWorkMailEventsServiceRolePolicy',
    /** Provides full access to the AWS App Mesh APIs and Management Console. */
    AWSAppMeshFullAccess = 'AWSAppMeshFullAccess',
    /** Provides read-only access to the AWS App Mesh APIs and Management Console. */
    AWSAppMeshReadOnly = 'AWSAppMeshReadOnly',
    /** Provides full access to Amazon Managed Blockchain via the AWS Management Console */
    AmazonManagedBlockchainConsoleFullAccess = 'AmazonManagedBlockchainConsoleFullAccess',
    /** Provides full access to Amazon Managed Blockchain. */
    AmazonManagedBlockchainFullAccess = 'AmazonManagedBlockchainFullAccess',
    /** Provides read-only access to Amazon Managed Blockchain. */
    AmazonManagedBlockchainReadOnlyAccess = 'AmazonManagedBlockchainReadOnlyAccess',
    /** Deny all access. */
    AWSDenyAll = 'AWSDenyAll',
    /** Provides access to AWS Resources managed or used by AWS Control Tower */
    AWSControlTowerServiceRolePolicy = 'service-role/AWSControlTowerServiceRolePolicy',
    /** Full access policy for Route 53 Resolver */
    AmazonRoute53ResolverFullAccess = 'AmazonRoute53ResolverFullAccess',
    /** Read only policy for Route 53 Resolver */
    AmazonRoute53ResolverReadOnlyAccess = 'AmazonRoute53ResolverReadOnlyAccess',
    /** Provides full access to manage AWS IoT SiteWise using the AWS Management Console. Note this policy also grants access to create and list data stores used with AWS IoT SiteWise (e.g. AWS IoT Analytics), access to list and view AWS IoT Greengrass resources, list and modify AWS Secrets Manager secrets, retrieve AWS IoT thing shadows, list resources with specific tags, and create and use a service-linked role for AWS IoT SiteWise. */
    AWSIoTSiteWiseConsoleFullAccess = 'AWSIoTSiteWiseConsoleFullAccess',
    /** Enables access to AWS Services and Resources used or managed by AWS AppMesh */
    AWSAppMeshServiceRolePolicy = 'aws-service-role/AWSAppMeshServiceRolePolicy',
    /** Provides full access to AWS Resource Access Manager */
    AWSResourceAccessManagerFullAccess = 'AWSResourceAccessManagerFullAccess',
    /** Allows Migration Hub to call Application Discovery Service on your behalf */
    MigrationHubServiceRolePolicy = 'aws-service-role/MigrationHubServiceRolePolicy',
    /** Policy for Database Migration Service to assume role in customer's account to call Migration Hub */
    MigrationHubDMSAccessServiceRolePolicy = 'aws-service-role/MigrationHubDMSAccessServiceRolePolicy',
    /** Policy for Server Migration Service to assume role in customer's account to call Migration Hub */
    MigrationHubSMSAccessServiceRolePolicy = 'aws-service-role/MigrationHubSMSAccessServiceRolePolicy',
    /** Allows Config to call AWS services and deploy config resources across organization */
    AWSConfigMultiAccountSetupPolicy = 'aws-service-role/AWSConfigMultiAccountSetupPolicy',
    /** Policy to enable registration of On-Premises instances via the OpsWorks CLI */
    AWSOpsWorksRegisterCLIOnPremises = 'AWSOpsWorksRegisterCLI_OnPremises',
    /** Policy to enable registration of EC2 instances via the OpsWorks CLI */
    AWSOpsWorksRegisterCLIEC2 = 'AWSOpsWorksRegisterCLI_EC2',
    /** Allows AWS Config to remediate noncompliant resources on your behalf. */
    AWSConfigRemediationServiceRolePolicy = 'aws-service-role/AWSConfigRemediationServiceRolePolicy',
    /** Enables access to AWS Services and Resources used or managed by AWS App Mesh */
    AWSAppMeshPreviewServiceRolePolicy = 'aws-service-role/AWSAppMeshPreviewServiceRolePolicy',
    /** Provides privileged certificate user access to AWS Certificate Manager Private Certificate Authority */
    AWSCertificateManagerPrivateCAPrivilegedUser = 'AWSCertificateManagerPrivateCAPrivilegedUser',
    /** Policy to grant temporary data access to Lake Formation resources */
    LakeFormationDataAccessServiceRolePolicy = 'aws-service-role/LakeFormationDataAccessServiceRolePolicy',
    /** This policy grants access to read all access information provided by IAM access advisor such as service last accessed information. */
    IAMAccessAdvisorReadOnly = 'IAMAccessAdvisorReadOnly',
    /** Allows Service Quotas to create support cases on your behalf */
    ServiceQuotasServiceRolePolicy = 'aws-service-role/ServiceQuotasServiceRolePolicy',
    /** Provides read only access to Service Quotas */
    ServiceQuotasReadOnlyAccess = 'ServiceQuotasReadOnlyAccess',
    /** Provides full access to Service Quotas */
    ServiceQuotasFullAccess = 'ServiceQuotasFullAccess',
    /** Provides full access to all administrative actions for an AWS Marketplace eProcurement integration. */
    AWSMarketplaceProcurementSystemAdminFullAccess = 'AWSMarketplaceProcurementSystemAdminFullAccess',
    /** Allows customers to call EC2 Instance Connect to publish ephemeral keys to their EC2 instances and connect via ssh or the EC2 Instance Connect CLI. */
    EC2InstanceConnect = 'EC2InstanceConnect',
    /** Provides customer account access to AWS WorkSpaces service for launching a Workspace. */
    AmazonWorkSpacesServiceAccess = 'AmazonWorkSpacesServiceAccess',
    /** Provides access to Amazon WorkSpaces backend service to perform Workspace Self Service actions */
    AmazonWorkSpacesSelfServiceAccess = 'AmazonWorkSpacesSelfServiceAccess',
    /** Provides full access to all seller operations on the AWS Marketplace and other AWS services such as AMI management. */
    AWSMarketplaceSellerFullAccess = 'AWSMarketplaceSellerFullAccess',
    /** Provides sellers full access to AWS Marketplace Management Products page and other AWS services such as AMI management. */
    AWSMarketplaceSellerProductsFullAccess = 'AWSMarketplaceSellerProductsFullAccess',
    /** Provide sellers read-only access to AWS Marketplace Management Products page. */
    AWSMarketplaceSellerProductsReadOnly = 'AWSMarketplaceSellerProductsReadOnly',
    /** App Mesh Envoy policy for accessing Virtual Node configuration. */
    AWSAppMeshEnvoyAccess = 'AWSAppMeshEnvoyAccess',
    /** Provides read only access to Amazon EventBridge. */
    AmazonEventBridgeReadOnlyAccess = 'AmazonEventBridgeReadOnlyAccess',
    /** Provides full access to Amazon EventBridge. */
    AmazonEventBridgeFullAccess = 'AmazonEventBridgeFullAccess',
    /** Allows CloudWatch to assume CloudWatch-CrossAccountSharing roles in remote accounts on behalf of the current account in order to display data cross-account, cross-region */
    CloudWatchCrossAccountAccess = 'aws-service-role/CloudWatch-CrossAccountAccess',
    /** Provides access to the non-CloudWatch APIs used to display CloudWatch Automatic Dashboards, including the contents of objects such as Lambda functions */
    CloudWatchAutomaticDashboardsAccess = 'CloudWatchAutomaticDashboardsAccess',
    /** Policy needed for AWSConfig to create conformance packs */
    ConfigConformsServiceRolePolicy = 'aws-service-role/ConfigConformsServiceRolePolicy',
    /** Provides full access to AWS CloudFormation. */
    AWSCloudFormationFullAccess = 'AWSCloudFormationFullAccess',
    /** Full access to view and take action on Elemental Appliances and Software quotes and orders */
    ElementalAppliancesSoftwareFullAccess = 'ElementalAppliancesSoftwareFullAccess',
    /** App Mesh Preview Envoy policy for accessing Virtual Node configuration. */
    AWSAppMeshPreviewEnvoyAccess = 'AWSAppMeshPreviewEnvoyAccess',
    /** Allow Site-to-Site VPN to create and manage resources related to your VPN Connections. */
    AWSVPCS2SVpnServiceRolePolicy = 'aws-service-role/AWSVPCS2SVpnServiceRolePolicy',
    /** Provides access to AWS services and resources necessary to migrate service instances into AWS including EC2, S3 and Cloudformation. */
    AWSServiceRoleForSMS = 'aws-service-role/AWSServiceRoleForSMS',
    /** Provides access for enabling IoT logging for execution of ENABLE_IOT_LOGGING mitigation action */
    AWSIoTDeviceDefenderEnableIoTLoggingMitigationAction = 'service-role/AWSIoTDeviceDefenderEnableIoTLoggingMitigationAction',
    /** Provides messages publish access to SNS topic for execution of PUBLISH_FINDING_TO_SNS mitigation action */
    AWSIoTDeviceDefenderPublishFindingsToSNSMitigationAction = 'service-role/AWSIoTDeviceDefenderPublishFindingsToSNSMitigationAction',
    /** Provides write access to IoT policies for execution of REPLACE_DEFAULT_POLICY_VERSION mitigation action */
    AWSIoTDeviceDefenderReplaceDefaultPolicyMitigationAction = 'service-role/AWSIoTDeviceDefenderReplaceDefaultPolicyMitigationAction',
    /** Provides write access to IoT CA certificates for execution of  UPDATE_CA_CERTIFICATE mitigation action */
    AWSIoTDeviceDefenderUpdateCACertMitigationAction = 'service-role/AWSIoTDeviceDefenderUpdateCACertMitigationAction',
    /** Provides write access to IoT certificates for execution of UPDATE_DEVICE_CERTIFICATE mitigation action */
    AWSIoTDeviceDefenderUpdateDeviceCertMitigationAction = 'service-role/AWSIoTDeviceDefenderUpdateDeviceCertMitigationAction',
    /** Provides write access to IoT thing groups and read access to IoT Certificates for execution of ADD_THINGS_TO_THING_GROUP mitigation action */
    AWSIoTDeviceDefenderAddThingsToThingGroupMitigationAction = 'service-role/AWSIoTDeviceDefenderAddThingsToThingGroupMitigationAction',
    /** Grants administrative access to AWS Lake Formation and related services, such as AWS Glue, to manage data lakes */
    AWSLakeFormationDataAdmin = 'AWSLakeFormationDataAdmin',
    /** Used by AWS IQ to execute payment requests on behalf of a customer */
    AWSIQContractServiceRolePolicy = 'aws-service-role/AWSIQContractServiceRolePolicy',
    /** Allows AWS IQ to manage the role assumed by AWS IQ experts. */
    AWSIQPermissionServiceRolePolicy = 'aws-service-role/AWSIQPermissionServiceRolePolicy',
    /** Provides read only access to Amazon QLDB. */
    AmazonQLDBReadOnly = 'AmazonQLDBReadOnly',
    /** Provides full access to Amazon QLDB via the service API. */
    AmazonQLDBFullAccess = 'AmazonQLDBFullAccess',
    /** Provides full access to Amazon QLDB via the AWS Management Console. */
    AmazonQLDBConsoleFullAccess = 'AmazonQLDBConsoleFullAccess',
    /** Managed policy for Service Linked Role for Amazon Chime VoiceConnector */
    AmazonChimeVoiceConnectorServiceLinkedRolePolicy = 'aws-service-role/AmazonChimeVoiceConnectorServiceLinkedRolePolicy',
    /** Enables access to AWS Resources used or managed by Amazon Chime */
    AmazonChimeServiceRolePolicy = 'aws-service-role/AmazonChimeServiceRolePolicy',
    /** Allows Log Delivery service to deliver logs by calling log destination on your behalf. */
    AWSServiceRoleForLogDeliveryPolicy = 'aws-service-role/AWSServiceRoleForLogDeliveryPolicy',
    /** Provide access to Poly AVS devices */
    AlexaForBusinessPolyDelegatedAccessPolicy = 'AlexaForBusinessPolyDelegatedAccessPolicy',
    /** Managed policy for Service Linked Role for Amazon SageMaker Notebooks */
    AmazonSageMakerNotebooksServiceRolePolicy = 'aws-service-role/AmazonSageMakerNotebooksServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access Lambda and CloudWatch. */
    AWSApplicationAutoscalingLambdaConcurrencyPolicy = 'aws-service-role/AWSApplicationAutoscalingLambdaConcurrencyPolicy',
    /** Grants AWS Systems Manager (SSM) permission to discover AWS account information. */
    AWSSystemsManagerAccountDiscoveryServicePolicy = 'aws-service-role/AWSSystemsManagerAccountDiscoveryServicePolicy',
    /** Provides read-only access to Service Catalog end-user capabilities */
    AWSServiceCatalogEndUserReadOnlyAccess = 'AWSServiceCatalogEndUserReadOnlyAccess',
    /** Provides read-only access to Service Catalog admin capabilities */
    AWSServiceCatalogAdminReadOnlyAccess = 'AWSServiceCatalogAdminReadOnlyAccess',
    /** Provides access to creating requests in an AWS Private Marketplace. */
    AWSPrivateMarketplaceRequests = 'AWSPrivateMarketplaceRequests',
    /** Managed policy for AWS For Wordpress Plugin */
    AWSForWordPressPluginPolicy = 'AWSForWordPressPluginPolicy',
    /** Allows AWS CodeStar Notifications to access Amazon CloudWatch Events on your behalf */
    AWSCodeStarNotificationsServiceRolePolicy = 'aws-service-role/AWSCodeStarNotificationsServiceRolePolicy',
    /** Allows Amazon Elastic File System to manage AWS resources on your behalf */
    AmazonElasticFileSystemServiceRolePolicy = 'aws-service-role/AmazonElasticFileSystemServiceRolePolicy',
    /** Provides read only access to Savings Plans service */
    AWSSavingsPlansReadOnlyAccess = 'AWSSavingsPlansReadOnlyAccess',
    /** Provides full access to Savings Plans service */
    AWSSavingsPlansFullAccess = 'AWSSavingsPlansFullAccess',
    /** This policy creates a service-linked role that allows AWS WAF to write logs to Amazon Kinesis Data Firehose. */
    WAFV2LoggingServiceRolePolicy = 'aws-service-role/WAFV2LoggingServiceRolePolicy',
    /** Permissions required for managing nodegroups in the customer's account. These policies related to management of the following resources: AutoscalingGroups, SecurityGroups, LaunchTemplates and InstanceProfiles. */
    AWSServiceRoleForAmazonEKSNodegroup = 'aws-service-role/AWSServiceRoleForAmazonEKSNodegroup',
    /** Managed policy for the Amazon LaunchWizard service role for EC2 */
    AmazonEC2RolePolicyForLaunchWizard = 'AmazonEC2RolePolicyForLaunchWizard',
    /** Grants read-only access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. */
    AWSDataExchangeReadOnly = 'AWSDataExchangeReadOnly',
    /** Grants data subscriber access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. It also provides select access to related services needed to take full advantage of AWS Data Exchange. */
    AWSDataExchangeSubscriberFullAccess = 'AWSDataExchangeSubscriberFullAccess',
    /** Grants data provider access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. It also provides select access to related services needed to take full advantage of AWS Data Exchange. */
    AWSDataExchangeProviderFullAccess = 'AWSDataExchangeProviderFullAccess',
    /** Grants full access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. It also provides select access to related services needed to take full advantage of AWS Data Exchange. */
    AWSDataExchangeFullAccess = 'AWSDataExchangeFullAccess',
    /** This role grants AWS IoT SiteWise monitor permissions to access your AWS IoT SiteWise assets & asset properties, and create AWS IoT Sitewise projects, dashboards & access policies through AWS IoT SiteWise portals. */
    AWSIoTSiteWiseMonitorServiceRolePolicy = 'aws-service-role/AWSIoTSiteWiseMonitorServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access Comprehend and CloudWatch. */
    AWSApplicationAutoscalingComprehendEndpointPolicy = 'aws-service-role/AWSApplicationAutoscalingComprehendEndpointPolicy',
    /** Permissions required to support Amazon CloudWatch Contributor Insights for Amazon DynamoDB. */
    DynamoDBCloudWatchContributorInsightsServiceRolePolicy = 'aws-service-role/DynamoDBCloudWatchContributorInsightsServiceRolePolicy',
    /** The Service Linked Role used by AWS Chatbot. */
    AWSChatbotServiceLinkedRolePolicy = 'aws-service-role/AWSChatbotServiceLinkedRolePolicy',
    /** This policy is for backup administrators, granting full access to AWS Backup operations, including creating or editing backup plans, assigning AWS resources to backup plans, deleting backups, and restoring backups. */
    AWSBackupFullAccess = 'AWSBackupFullAccess',
    /** This policy grants users permissions to assign AWS resources to backup plans, create on-demand backups, and restore backups. This policy does not allow the user to create or edit backup plans or to delete scheduled backups after they are created. */
    AWSBackupOperatorAccess = 'AWSBackupOperatorAccess',
    /** Service Policy for Trusted Advisor Multi-account Reporting */
    AWSTrustedAdvisorReportingServiceRolePolicy = 'aws-service-role/AWSTrustedAdvisorReportingServiceRolePolicy',
    /** Provides permissions to register a resource and track usage through AWS Marketplace Metering Service. */
    AWSMarketplaceMeteringRegisterUsage = 'AWSMarketplaceMeteringRegisterUsage',
    /** AWS Elastic Beanstalk Service Role policy that grants limited permissions to managed updates. */
    AWSElasticBeanstalkManagedUpdatesServiceRolePolicy = 'aws-service-role/AWSElasticBeanstalkManagedUpdatesServiceRolePolicy',
    /** Provides access to other AWS service resources that are required to run Amazon EKS pods on AWS Fargate */
    AmazonEKSFargatePodExecutionRolePolicy = 'AmazonEKSFargatePodExecutionRolePolicy',
    /** This policy grants necessary permissions to Amazon EKS to run fargate tasks */
    AmazonEKSForFargateServiceRolePolicy = 'aws-service-role/AmazonEKSForFargateServiceRolePolicy',
    /** Provides full access to CloudWatch Synthetics. */
    CloudWatchSyntheticsFullAccess = 'CloudWatchSyntheticsFullAccess',
    /** Provides read only access to CloudWatch Synthetics. */
    CloudWatchSyntheticsReadOnlyAccess = 'CloudWatchSyntheticsReadOnlyAccess',
    /** Grants permissions to Managed Rules created by Amazon EventBridge schemas. */
    AmazonEventBridgeSchemasServiceRolePolicy = 'aws-service-role/AmazonEventBridgeSchemasServiceRolePolicy',
    /** Provides read only access to Amazon EventBridge Schemas. */
    AmazonEventBridgeSchemasReadOnlyAccess = 'AmazonEventBridgeSchemasReadOnlyAccess',
    /** Provides full access to Amazon EventBridge Schemas. */
    AmazonEventBridgeSchemasFullAccess = 'AmazonEventBridgeSchemasFullAccess',
    /** Allows EC2ImageBuilder to call AWS services on your behalf. */
    AWSServiceRoleForImageBuilder = 'aws-service-role/AWSServiceRoleForImageBuilder',
    /** EC2 Instance profile for Image Builder service. */
    EC2InstanceProfileForImageBuilder = 'EC2InstanceProfileForImageBuilder',
    /** Provides full access to IAM Access Analyzer */
    IAMAccessAnalyzerFullAccess = 'IAMAccessAnalyzerFullAccess',
    /** Provides read only access to IAM Access Analyzer resources */
    IAMAccessAnalyzerReadOnlyAccess = 'IAMAccessAnalyzerReadOnlyAccess',
    /** Allow Access Analyzer to analyze resource metadata */
    AccessAnalyzerServiceRolePolicy = 'aws-service-role/AccessAnalyzerServiceRolePolicy',
    /** A service-linked role required for Amazon CodeGuru Reviewer to access resources on your behalf. */
    AmazonCodeGuruReviewerServiceRolePolicy = 'aws-service-role/AmazonCodeGuruReviewerServiceRolePolicy',
    /** Grants full access to Amazon CodeGuru Reviewer and scoped access to required dependencies. */
    AmazonCodeGuruReviewerFullAccess = 'AmazonCodeGuruReviewerFullAccess',
    /** Allows ComputeOptimizer to call AWS services and collect workload details on your behalf. */
    ComputeOptimizerServiceRolePolicy = 'aws-service-role/ComputeOptimizerServiceRolePolicy',
    /** Provides read only access to Amazon CodeGuru Reviewer. */
    AmazonCodeGuruReviewerReadOnlyAccess = 'AmazonCodeGuruReviewerReadOnlyAccess',
    /** Provides full access to Amazon CodeGuru Profiler. */
    AmazonCodeGuruProfilerFullAccess = 'AmazonCodeGuruProfilerFullAccess',
    /** Provides read only access to Amazon CodeGuru Profiler. */
    AmazonCodeGuruProfilerReadOnlyAccess = 'AmazonCodeGuruProfilerReadOnlyAccess',
    /** Provide full access to Amazon Managed Apache Cassandra Service */
    AmazonMCSFullAccess = 'AmazonMCSFullAccess',
    /** Provide read only access to Amazon Managed Apache Cassandra Service */
    AmazonMCSReadOnlyAccess = 'AmazonMCSReadOnlyAccess',
    /** Allow NetworkManager to access resources associated with your Global Networks */
    AWSNetworkManagerServiceRolePolicy = 'aws-service-role/AWSNetworkManagerServiceRolePolicy',
    /** Provides read only access to Amazon Kendra via the AWS Management Console. */
    AmazonKendraReadOnlyAccess = 'AmazonKendraReadOnlyAccess',
    /** Provides full access to Amazon Kendra via the AWS Management Console. */
    AmazonKendraFullAccess = 'AmazonKendraFullAccess',
    /** Provides access to create Amazon Augmented AI FlowDefinition resources against any Workteam. */
    AmazonSageMakerMechanicalTurkAccess = 'AmazonSageMakerMechanicalTurkAccess',
    /** Provides access to perform all operations on HumanLoops. */
    AmazonAugmentedAIHumanLoopFullAccess = 'AmazonAugmentedAIHumanLoopFullAccess',
    /** Provides access to perform all operations Amazon Augmented AI resources, including FlowDefinitions, HumanTaskUis and HumanLoops. Does not allow access for creating FlowDefinitions against the public-crowd Workteam. */
    AmazonAugmentedAIFullAccess = 'AmazonAugmentedAIFullAccess',
    /** Provides read only access to Amazon NetworkManager via the AWS Management Console. */
    AWSNetworkManagerReadOnlyAccess = 'AWSNetworkManagerReadOnlyAccess',
    /** Provides full access to Amazon NetworkManager via the AWS Management Console. */
    AWSNetworkManagerFullAccess = 'AWSNetworkManagerFullAccess',
    /** Gives access to all actions for Amazon Fraud Detector */
    AmazonFraudDetectorFullAccessPolicy = 'AmazonFraudDetectorFullAccessPolicy',
    /** Provides access to AWS Resource Access Manager APIs needed by a resource share participant. */
    AWSResourceAccessManagerResourceShareParticipantAccess = 'AWSResourceAccessManagerResourceShareParticipantAccess',
    /** Provides read only access to AWS Resource Access Manager. */
    AWSResourceAccessManagerReadOnlyAccess = 'AWSResourceAccessManagerReadOnlyAccess',
    /** Service Role for CloudFormation StackSets (Organization Member Account) */
    CloudFormationStackSetsOrgMemberServiceRolePolicy = 'aws-service-role/CloudFormationStackSetsOrgMemberServiceRolePolicy',
    /** Service Role for CloudFormation StackSets (Organization Master Account) */
    CloudFormationStackSetsOrgAdminServiceRolePolicy = 'aws-service-role/CloudFormationStackSetsOrgAdminServiceRolePolicy',
    /** AWS Health policy to enable Organizational View feature */
    HealthOrganizationsServiceRolePolicy = 'aws-service-role/Health_OrganizationsServiceRolePolicy',
    /** Provides read only access to all AWS Image Builder actions. */
    AWSImageBuilderReadOnlyAccess = 'AWSImageBuilderReadOnlyAccess',
    /** Provides full access to all AWS Image Builder actions and resource scoped access to related AWS services. */
    AWSImageBuilderFullAccess = 'AWSImageBuilderFullAccess',
    /** Policy granting permissions to EC2 Fleet to launch instances in the future. */
    EC2FleetTimeShiftableServiceRolePolicy = 'aws-service-role/EC2FleetTimeShiftableServiceRolePolicy',
    /** This policy specifies rekognition and s3 permissions required by Amazon Rekognition Custom Labels feature. */
    AmazonRekognitionCustomLabelsFullAccess = 'AmazonRekognitionCustomLabelsFullAccess',
    /** Provides read only access to Amazon WorkDocs via the AWS Management Console */
    AmazonWorkDocsReadOnlyAccess = 'AmazonWorkDocsReadOnlyAccess',
    /** Provides read and write client access to an Amazon EFS file system */
    AmazonElasticFileSystemClientReadWriteAccess = 'AmazonElasticFileSystemClientReadWriteAccess',
    /** Provides read only client access to an Amazon EFS file system */
    AmazonElasticFileSystemClientReadOnlyAccess = 'AmazonElasticFileSystemClientReadOnlyAccess',
    /** Provides root client access to an Amazon EFS file system */
    AmazonElasticFileSystemClientFullAccess = 'AmazonElasticFileSystemClientFullAccess',
    /** Provides access to Amazon SageMaker resources from Amazon QuickSight */
    AWSQuickSightSageMakerPolicy = 'service-role/AWSQuickSightSageMakerPolicy',
    /** Enables access to AWS Services and Resources used or managed by Amazon Managed Blockchain */
    AmazonManagedBlockchainServiceRolePolicy = 'aws-service-role/AmazonManagedBlockchainServiceRolePolicy',
    /** Enables access to AWS services and resources used or managed by AppSync */
    AWSAppSyncServiceRolePolicy = 'aws-service-role/AWSAppSyncServiceRolePolicy',
    /** Provides access to Amazon Chime SDK operations */
    AmazonChimeSDK = 'AmazonChimeSDK',
    /** Allows AWS IoT Device Tester to run the FreeRTOS qualification suite by allowing access to services including IoT, S3, and IAM */
    AWSIoTDeviceTesterForFreeRTOSFullAccess = 'AWSIoTDeviceTesterForFreeRTOSFullAccess',
    /** Allows AWS IoT Device Tester to run the AWS Greengrass qualification suite by allowing access to related services including Lambda, IoT, API Gateway, IAM */
    AWSIoTDeviceTesterForGreengrassFullAccess = 'AWSIoTDeviceTesterForGreengrassFullAccess',
    /** A Service-Linked Role required for Amazon EKS to call AWS services on your behalf. */
    AmazonEKSServiceRolePolicy = 'aws-service-role/AmazonEKSServiceRolePolicy',
    /** Provides read only access to ComputeOptimizer. */
    ComputeOptimizerReadOnlyAccess = 'ComputeOptimizerReadOnlyAccess',
    /** Policy granting permissions to Application Auto Scaling to access Cassandra and CloudWatch. */
    AWSApplicationAutoscalingCassandraTablePolicy = 'aws-service-role/AWSApplicationAutoscalingCassandraTablePolicy',
    /** Read-only access to view Elemental Appliances and Software quotes and orders */
    ElementalAppliancesSoftwareReadOnlyAccess = 'ElementalAppliancesSoftwareReadOnlyAccess',
    /** Policy to allow Gamelift GameServerGroups to manage customer resources */
    GameLiftGameServerGroupPolicy = 'GameLiftGameServerGroupPolicy',
    /** Provides full access to AWS WAF via the AWS Management Console. Note that this policy also grants permissions to list and update Amazon CloudFront distributions, permissions to view load balancers on AWS Elastic Load Balancing, permissions to view Amazon API Gateway REST APIs and stages, permissions to list and view Amazon CloudWatch metrics, and permissions to view regions enabled within the account. */
    AWSWAFConsoleFullAccess = 'AWSWAFConsoleFullAccess',
    /** Provides read-only access to AWS WAF via the AWS Management Console. Note that this policy also grants permissions to list Amazon CloudFront distributions, permissions to view load balancers on AWS Elastic Load Balancing, permissions to view Amazon API Gateway REST APIs and stages, permissions to list and view Amazon CloudWatch metrics, and permissions to view regions enabled within the account. */
    AWSWAFConsoleReadOnlyAccess = 'AWSWAFConsoleReadOnlyAccess',
    /** Provides full access to Amazon WorkDocs via the AWS Management Console */
    AmazonWorkDocsFullAccess = 'AmazonWorkDocsFullAccess',
    /** Provides access to perform all operations Amazon Augmented AI resources, including FlowDefinitions, HumanTaskUis and HumanLoops. Also provides access to those operations of services that are integrated with Amazon Augmented AI. */
    AmazonAugmentedAIIntegratedAPIAccess = 'AmazonAugmentedAIIntegratedAPIAccess',
    /** Provide full access to Amazon Keyspaces */
    AmazonKeyspacesFullAccess = 'AmazonKeyspacesFullAccess',
    /** Provide read only access to Amazon Keyspaces */
    AmazonKeyspacesReadOnlyAccess = 'AmazonKeyspacesReadOnlyAccess',
    /**  Provides full access to Amazon Detective service and scoped access to the console UI dependencies */
    AmazonDetectiveFullAccess = 'AmazonDetectiveFullAccess',
    /** Grants permissions to view and modify purchase orders on billing console */
    AWSPurchaseOrdersServiceRolePolicy = 'AWSPurchaseOrdersServiceRolePolicy',
    /** Required permissions to use all features of the Server Migration Service Console */
    ServerMigrationServiceConsoleFullAccess = 'ServerMigrationServiceConsoleFullAccess',
    /** Provides AWS Backup permission to create backups on your behalf across AWS services */
    AWSBackupServiceLinkedRolePolicyForBackupTest = 'aws-service-role/AWSBackupServiceLinkedRolePolicyForBackupTest',
    /** Provide access to child instances for patch association operation. */
    AmazonSSMPatchAssociation = 'AmazonSSMPatchAssociation',
    /** This policy will be used to attach a role on a InstanceProfile which will allow Cloud9 to use the SSM Session Manager to connect to the instance */
    AWSCloud9SSMInstanceProfile = 'AWSCloud9SSMInstanceProfile',
    /** Provides CodeDeploy service access to invoke Lambda function on your behalf to perform blue/green deployment through CloudFormation. */
    AWSCodeDeployRoleForCloudFormation = 'service-role/AWSCodeDeployRoleForCloudFormation',
    /** This policy grants permissions to access AWS IoT SiteWise assets and asset data, create AWS IoT SiteWise Monitor resources, and list AWS SSO users. */
    AWSIoTSiteWiseMonitorPortalAccess = 'service-role/AWSIoTSiteWiseMonitorPortalAccess',
    /** This policy grants the AWS Portal Gateway machine the necessary permissions required for normal operation. */
    AWSThinkboxAWSPortalGatewayPolicy = 'AWSThinkboxAWSPortalGatewayPolicy',
    /** This policy grants the Deadline Workers in AWS Portal the necessary permissions required for normal operation. */
    AWSThinkboxAWSPortalWorkerPolicy = 'AWSThinkboxAWSPortalWorkerPolicy',
    /** This policy grants the AWS Portal Asset Server the necessary permissions required for normal operation. */
    AWSThinkboxAssetServerPolicy = 'AWSThinkboxAssetServerPolicy',
    /** Grants permissions required for the operation of AWS Thinkbox's Deadline Resource Tracker.  This includes full access to some EC2 actions, including DeleteFleets and CancelSpotFleetRequests. */
    AWSThinkboxDeadlineResourceTrackerAccessPolicy = 'AWSThinkboxDeadlineResourceTrackerAccessPolicy',
    /** Grants permissions required to create, destroy, and administer AWS Thinkbox's Deadline Resource Tracker. */
    AWSThinkboxDeadlineResourceTrackerAdminPolicy = 'AWSThinkboxDeadlineResourceTrackerAdminPolicy',
    /** Grant permissions required for an EC2 instance running AWS Thinkbox Deadline Spot Event Plugin Worker software. */
    AWSThinkboxDeadlineSpotEventPluginWorkerPolicy = 'AWSThinkboxDeadlineSpotEventPluginWorkerPolicy',
    /** Grants permissions required for AWS Thinkbox's Deadline Spot Event Plugin.  This includes permission to request, modify, and cancel a spot fleet, as well as limited PassRole permission. */
    AWSThinkboxDeadlineSpotEventPluginAdminPolicy = 'AWSThinkboxDeadlineSpotEventPluginAdminPolicy',
    /** This policy grants AWS Thinkbox's Deadline software full access to multiple AWS services as required for AWS Portal administration. This includes access to create arbitrary tags on several EC2 resource types. */
    AWSThinkboxAWSPortalAdminPolicy = 'AWSThinkboxAWSPortalAdminPolicy',
    /** Provides AWS Backup permission to create backups on your behalf across AWS services */
    AWSBackupServiceLinkedRolePolicyForBackup = 'aws-service-role/AWSBackupServiceLinkedRolePolicyForBackup',
    /** Provides read only access to Amazon Appflow flows */
    AmazonAppFlowReadOnlyAccess = 'AmazonAppFlowReadOnlyAccess',
    /** Provides full access to Amazon AppFlow and access to AWS services supported as flow source or destination (S3 and Redshift). Also provides access to KMS for encryption */
    AmazonAppFlowFullAccess = 'AmazonAppFlowFullAccess',
    /** Provide access to Lifesize AVS devices */
    AlexaForBusinessLifesizeDelegatedAccessPolicy = 'AlexaForBusinessLifesizeDelegatedAccessPolicy',
    /** Full access to view and take action on Elemental Appliances and Software purchased assets */
    ElementalActivationsFullAccess = 'ElementalActivationsFullAccess',
    /** (Elastic Beanstalk operations role) Allows a worker environment tier to create an Amazon DynamoDB table and an Amazon SQS queue. */
    AWSElasticBeanstalkRoleWorkerTier = 'service-role/AWSElasticBeanstalkRoleWorkerTier',
    /** (Elastic Beanstalk operations role) Allows an environment to enable Amazon SNS topic integration. */
    AWSElasticBeanstalkRoleSNS = 'service-role/AWSElasticBeanstalkRoleSNS',
    /** (Elastic Beanstalk operations role) Allows an environment to integrate an Amazon RDS instance. */
    AWSElasticBeanstalkRoleRDS = 'service-role/AWSElasticBeanstalkRoleRDS',
    /** (Elastic Beanstalk operations role) Allows a multicontainer Docker environment to manage Amazon ECS clusters. */
    AWSElasticBeanstalkRoleECS = 'service-role/AWSElasticBeanstalkRoleECS',
    /** AWSElasticBeanstalkRoleCore (Elastic Beanstalk operations role) Allows core operation of a web service environment. */
    AWSElasticBeanstalkRoleCore = 'service-role/AWSElasticBeanstalkRoleCore',
    /** (Elastic Beanstalk operations role) Allows an environment to manage Amazon CloudWatch Logs log groups. */
    AWSElasticBeanstalkRoleCWL = 'service-role/AWSElasticBeanstalkRoleCWL',
    /** Provides full access to AWS CodeArtifact via the AWS Management Console. */
    AWSCodeArtifactAdminAccess = 'AWSCodeArtifactAdminAccess',
    /** This policy is for backup administators who use cross-account backup management to manage backups for the organization. */
    AWSBackupOrganizationAdminAccess = 'AWSBackupOrganizationAdminAccess',
    /** Allows Machine Learning to configure and use your Redshift Clusters and S3 Staging Locations for Redshift Data Source. */
    AmazonMachineLearningRoleforRedshiftDataSourceV3 = 'service-role/AmazonMachineLearningRoleforRedshiftDataSourceV3',
    /** Provides read only access to Honeycode Team Association via the AWS Management Console and the SDK. */
    AmazonHoneycodeTeamAssociationReadOnlyAccess = 'AmazonHoneycodeTeamAssociationReadOnlyAccess',
    /** Provides read only access to Honeycode Workbook via the AWS Management Console and the SDK. */
    AmazonHoneycodeWorkbookReadOnlyAccess = 'AmazonHoneycodeWorkbookReadOnlyAccess',
    /** Provides full access to Honeycode via the AWS Management Console and the SDK. */
    AmazonHoneycodeFullAccess = 'AmazonHoneycodeFullAccess',
    /** Provides read only access to Honeycode via the AWS Management Console and the SDK. */
    AmazonHoneycodeReadOnlyAccess = 'AmazonHoneycodeReadOnlyAccess',
    /** Provides full access to Honeycode Team Association via the AWS Management Console and the SDK. */
    AmazonHoneycodeTeamAssociationFullAccess = 'AmazonHoneycodeTeamAssociationFullAccess',
    /** Provides full access to Honeycode Workbook via the AWS Management Console and the SDK. */
    AmazonHoneycodeWorkbookFullAccess = 'AmazonHoneycodeWorkbookFullAccess',
    /** Amazon Certificate Manager Service Role Policy */
    CertificateManagerServiceRolePolicy = 'aws-service-role/CertificateManagerServiceRolePolicy',
    /** Provides read only access to AWS CodeArtifact via the AWS Management Console. */
    AWSCodeArtifactReadOnlyAccess = 'AWSCodeArtifactReadOnlyAccess',
    /** A service-linked role required for Amazon CodeGuru Profiler to send notifications on your behalf. */
    AWSServiceRoleForCodeGuruProfiler = 'aws-service-role/AWSServiceRoleForCodeGuru-Profiler',
    /** Enables access to AWS Services and Resources used or managed by Amazon Cognito User Pools */
    AmazonCognitoIdpServiceRolePolicy = 'aws-service-role/AmazonCognitoIdpServiceRolePolicy',
    /** Provides read only access to AWS Elemental MediaLive resources */
    AWSElementalMediaLiveReadOnly = 'AWSElementalMediaLiveReadOnly',
    /** Provides full access to AWS Elemental MediaLive resources */
    AWSElementalMediaLiveFullAccess = 'AWSElementalMediaLiveFullAccess',
    /** Provides access to AWS services that are required to run SageMaker GroundTruth Labeling job */
    AmazonSageMakerGroundTruthExecution = 'AmazonSageMakerGroundTruthExecution',
    /** Permissions to allow the AWS SMS to run used data validation script and send script success/failure back to SMS */
    ServerMigrationServiceRoleForInstanceValidation = 'service-role/ServerMigrationServiceRoleForInstanceValidation',
    /** Provides read only access to AWS CodePipeline via the AWS Management Console. */
    AWSCodePipelineReadOnlyAccess = 'AWSCodePipeline_ReadOnlyAccess',
    /** Provides full access to AWS CodePipeline via the AWS Management Console. */
    AWSCodePipelineFullAccess = 'AWSCodePipeline_FullAccess',
    /** Allows Amazon Braket to create and manage AWS resources on your behalf */
    AmazonBraketServiceRolePolicy = 'aws-service-role/AmazonBraketServiceRolePolicy',
    /** Provides cross account access to Glue resources via Lake Formation. Also grants read access to other required services such as organizations and resource access manager */
    AWSLakeFormationCrossAccountManager = 'AWSLakeFormationCrossAccountManager',
    /** Provides full access to Amazon Braket via the AWS Management Console and SDK. Also provides access to related services (e.g., S3, logs). */
    AmazonBraketFullAccess = 'AmazonBraketFullAccess',
    /** Provides permissions required to access MSK Cluster within a VPC, manage ENIs (create, describe, delete) in the VPC and write permissions to CloudWatch Logs. */
    AWSLambdaMSKExecutionRole = 'service-role/AWSLambdaMSKExecutionRole',
    /** Denies access to certain actions, applied by the AWS team in the event that an IAM user's credentials have been compromised or exposed publicly.  Do NOT remove this policy.  Instead, please follow the instructions specified in the email sent to you regarding this event. */
    AWSCompromisedKeyQuarantine = 'AWSCompromisedKeyQuarantine',
    /** Permissions to allow the AWS Server Migration Service to migrate VMs to EC2: allows the Server Migration Service to place the migrated resources into the customer's EC2 account. */
    ServerMigrationServiceRole = 'service-role/ServerMigration_ServiceRole',
    /** Policy used by VPC Resource Controller to manage ENI and IPs for worker nodes. */
    AmazonEKSVPCResourceController = 'AmazonEKSVPCResourceController',
    /** Enables access to AWS Services and Resources used or managed by Route53 Resolver */
    Route53ResolverServiceRolePolicy = 'aws-service-role/Route53ResolverServiceRolePolicy',
    /** Policy to enable AWS Client VPN to manage your Client VPN endpoint connections. */
    ClientVPNServiceConnectionsRolePolicy = 'aws-service-role/ClientVPNServiceConnectionsRolePolicy',
    /** Provides CodeDeploy service limited access to perform a Lambda deployment on your behalf. */
    AWSCodeDeployRoleForLambdaLimited = 'service-role/AWSCodeDeployRoleForLambdaLimited',
    /** Provides EC2 limited access to S3 bucket to download revision. This role is needed by the CodeDeploy agent on EC2 instances. */
    AmazonEC2RoleforAWSCodeDeployLimited = 'service-role/AmazonEC2RoleforAWSCodeDeployLimited',
    /** Policy granting permissions to Application Auto Scaling to access Managed Streaming for Apache Kafka and CloudWatch. */
    AWSApplicationAutoscalingKafkaClusterPolicy = 'aws-service-role/AWSApplicationAutoscalingKafkaClusterPolicy',
    /** Provide readonly access to AWS Transfer services. */
    AWSTransferReadOnlyAccess = 'AWSTransferReadOnlyAccess',
    /** Allows users to view bills on the Billing Console. */
    AWSBillingReadOnlyAccess = 'AWSBillingReadOnlyAccess',
    /** Read-only access to the detailed list of purchased assets associated to the AWS account of the user */
    ElementalActivationsReadOnlyAccess = 'ElementalActivationsReadOnlyAccess',
    /** Access to view purchased assets and generate software licenses for pending activations */
    ElementalActivationsGenerateLicenses = 'ElementalActivationsGenerateLicenses',
    /** Access to view purchased assets and download related software and kickstart files */
    ElementalActivationsDownloadSoftwareAccess = 'ElementalActivationsDownloadSoftwareAccess',
    /** Provides access to Amazon Elasticsearch resources from Amazon QuickSight */
    AWSQuickSightElasticsearchPolicy = 'service-role/AWSQuickSightElasticsearchPolicy',
    /** This policy provides full access to Amazon Redshift Data APIs. This policy also grants scoped access to other required services. */
    AmazonRedshiftDataFullAccess = 'AmazonRedshiftDataFullAccess',
    /** Provides full access to AWS RoboMaker via the AWS Management Console and SDK. Also provides select access to related services (e.g., S3, IAM). */
    AWSRoboMakerFullAccess = 'AWSRoboMaker_FullAccess',
    /** Default policy for AWS Config service role. Provides permissions required for AWS Config to track changes to your AWS resources. */
    AWSConfigRole = 'service-role/AWS_ConfigRole',
    /** Allows MediaPackage to publish logs to CloudWatch */
    MediaPackageServiceRolePolicy = 'aws-service-role/MediaPackageServiceRolePolicy',
    /** Allows AWS Marketplace to copy your Amazon Machine Images (AMIs) in order to list them on AWS Marketplace */
    AWSMarketplaceAmiIngestion = 'AWSMarketplaceAmiIngestion',
    /** Policy to allow EMR to create, describe and delete EC2 placement groups. */
    AmazonElasticMapReducePlacementGroupPolicy = 'AmazonElasticMapReducePlacementGroupPolicy',
    /** Allows customers to use AWS Systems Manager to automatically manage Amazon EFS utilities (amazon-efs-utils) package on their EC2 instances, and use CloudWatchLog to get EFS file system mount success/failure notifications. */
    AmazonElasticFileSystemsUtils = 'AmazonElasticFileSystemsUtils',
    /** Permissions need by EC2 Image Builder to perform a cross account distribution. */
    Ec2ImageBuilderCrossAccountDistributionAccess = 'Ec2ImageBuilderCrossAccountDistributionAccess',
    /** AWS QuickSight access to AWS Timestream APIs. Customers can attach this policy to AWS QuickSight role to allow retrieval of data and metadata. */
    AWSQuickSightTimestreamPolicy = 'service-role/AWSQuickSightTimestreamPolicy',
    /** Provides read only access to Amazon Timestream. Policy also provides permission to cancel any running query. If using Customer managed CMK, please refer to documentation for additional permissions needed. */
    AmazonTimestreamReadOnlyAccess = 'AmazonTimestreamReadOnlyAccess',
    /** Provides full access to Amazon Timestream. Note that this policy also grants certain KMS operation access. If using Customer managed CMK, please refer to documentation for additional permissions needed. */
    AmazonTimestreamFullAccess = 'AmazonTimestreamFullAccess',
    /** Provides full access to manage Amazon Timestream using the AWS Management Console. Note that this policy also grants permissions for certain KMS operations, and operations to manage your saved queries. If using Customer managed CMK, please refer to documentation for additional permissions needed. */
    AmazonTimestreamConsoleFullAccess = 'AmazonTimestreamConsoleFullAccess',
    /** Provides access to Systems Manager resources used by CloudWatch Alarms */
    AWSServiceRoleForCloudWatchAlarmsActionSSMServiceRolePolicy = 'aws-service-role/AWSServiceRoleForCloudWatchAlarmsActionSSMServiceRolePolicy',
    /** Provides full access to Amazon S3 on Outposts via the AWS Management Console. */
    AmazonS3OutpostsFullAccess = 'AmazonS3OutpostsFullAccess',
    /** Provides read only access to Amazon S3 on Outposts via the AWS Management Console. */
    AmazonS3OutpostsReadOnlyAccess = 'AmazonS3OutpostsReadOnlyAccess',
    /** Provides full access to AWS DeepRacer. Also provides select access to related services (e.g., S3). */
    AWSDeepRacerFullAccess = 'AWSDeepRacerFullAccess',
    /** Policy required for the Lambda Insights Extension */
    CloudWatchLambdaInsightsExecutionRolePolicy = 'CloudWatchLambdaInsightsExecutionRolePolicy',
    /** Provides full access to AWS CloudTrail. */
    AWSCloudTrailFullAccess = 'AWSCloudTrail_FullAccess',
    /** Allows AWS Support to access AWS resources to provide billing, administrative, and support services. */
    AWSSupportServiceRolePolicy = 'aws-service-role/AWSSupportServiceRolePolicy',
    /** Provides read only access to AWS Budgets Console via the AWS Management Console. */
    AWSBudgetsReadOnlyAccess = 'AWSBudgetsReadOnlyAccess',
    /** Provides full access to AWS Budgets Actions including using Budgets Actions to control states of running AWS resources via AWS Management Console */
    AWSBudgetsActionsWithAWSResourceControlAccess = 'AWSBudgetsActionsWithAWSResourceControlAccess',
    /** Provides appropriate permissions to AWS Data Lifecycle Manager to take actions on AWS resources for AMI Management */
    AWSDataLifecycleManagerServiceRoleForAMIManagement = 'service-role/AWSDataLifecycleManagerServiceRoleForAMIManagement',
    /** Service Linked Role Policy for AWS Amazon MQ */
    AmazonMQServiceRolePolicy = 'aws-service-role/AmazonMQServiceRolePolicy',
    /** Service Linked Role policy to enable access to AWS resources managed by AWS Outposts */
    AWSOutpostsServiceRolePolicy = 'aws-service-role/AWSOutpostsServiceRolePolicy',
    /** Provides full access to AWS Glue DataBrew via the AWS Management Console. Also provides select access to related services (e.g., S3, KMS, Glue). */
    AwsGlueDataBrewFullAccessPolicy = 'AwsGlueDataBrewFullAccessPolicy',
    /** Provide AWS DynamoDB access to KinesisDataStreams */
    DynamoDBKinesisReplicationServiceRolePolicy = 'aws-service-role/DynamoDBKinesisReplicationServiceRolePolicy',
    /** Provides full access to Service Catalog App Registry capabilities */
    AWSServiceCatalogAppRegistryFullAccess = 'AWSServiceCatalogAppRegistryFullAccess',
    /** Provides read-only access to Service Catalog App Registry capabilites */
    AWSServiceCatalogAppRegistryReadOnlyAccess = 'AWSServiceCatalogAppRegistryReadOnlyAccess',
    /** Allow AWSNetworkFirewall to create and manage necessary resources for your Firewalls. */
    AWSNetworkFirewallServiceRolePolicy = 'aws-service-role/AWSNetworkFirewallServiceRolePolicy',
    /** Grants read-only access to AWS Lambda service, AWS Lambda console features, and other related AWS services. */
    AWSLambdaReadOnlyAccess = 'AWSLambda_ReadOnlyAccess',
    /** Grants full access to AWS Lambda service, AWS Lambda console features, and other related AWS services. */
    AWSLambdaFullAccess = 'AWSLambda_FullAccess',
    /** A service-linked role required for Amazon Honeycode to access your resources. */
    AmazonHoneycodeServiceRolePolicy = 'aws-service-role/AmazonHoneycodeServiceRolePolicy',
    /** Enables access to AWS Services and Resources used or managed by S3 Storage Lens */
    S3StorageLensServiceRolePolicy = 'aws-service-role/S3StorageLensServiceRolePolicy',
    /** Provides full access to the AWS Glue Schema Registry Service */
    AWSGlueSchemaRegistryFullAccess = 'AWSGlueSchemaRegistryFullAccess',
    /** Provides readonly access to the AWS Glue Schema Registry Service */
    AWSGlueSchemaRegistryReadonlyAccess = 'AWSGlueSchemaRegistryReadonlyAccess',
    /** The purpose of this policy is to grant permissions to AWS Connect users required to use Connect resources. This policy provides full access to AWS Connect resources via the Connect Console and public APIs */
    AmazonConnectFullAccess = 'AmazonConnect_FullAccess',
    /** The Service Linked Role used by Amazon Managed Workflows for Apache Airflow. */
    AmazonMWAAServiceRolePolicy = 'aws-service-role/AmazonMWAAServiceRolePolicy',
    /** Provides full access to CloudWatch Application Insights and required dependencies. */
    CloudWatchApplicationInsightsFullAccess = 'CloudWatchApplicationInsightsFullAccess',
    /** Provides read only access to CloudWatch Application Insights. */
    CloudWatchApplicationInsightsReadOnlyAccess = 'CloudWatchApplicationInsightsReadOnlyAccess',
    /** Full access to view and take action on Elemental Appliance and Software support cases and product support content */
    ElementalSupportCenterFullAccess = 'ElementalSupportCenterFullAccess',
    /** Service role policy used by the AWS Service Catalog service to provision products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including CodePipeline, CodeBuild, CodeCommit, Glue, CloudFormation, etc,. */
    AmazonSageMakerAdminServiceCatalogProductsServiceRolePolicy = 'AmazonSageMakerAdmin-ServiceCatalogProductsServiceRolePolicy',
    /** A service-linked role required for Amazon DevOpsGuru to access your resources. */
    AmazonDevOpsGuruServiceRolePolicy = 'aws-service-role/AmazonDevOpsGuruServiceRolePolicy',
    /** Allows an AWS Lambda function on an AWS Panorama Appliance to manage resources in Panorama, upload logs and metrics to Amazon CloudWatch, and to manage objects in buckets created for use with Panorama. */
    AWSPanoramaGreengrassGroupRolePolicy = 'service-role/AWSPanoramaGreengrassGroupRolePolicy',
    /** Provides full access to AWS Panorama */
    AWSPanoramaFullAccess = 'AWSPanoramaFullAccess',
    /** Allows AWS IoT software on an AWS Panorama Appliance to upload logs to Amazon CloudWatch. */
    AWSPanoramaApplianceRolePolicy = 'service-role/AWSPanoramaApplianceRolePolicy',
    /** Allows Amazon SageMaker to manage objects in buckets created for use with AWS Panorama. */
    AWSPanoramaSageMakerRolePolicy = 'service-role/AWSPanoramaSageMakerRolePolicy',
    /** Allows AWS Panorama to manage resources in Amazon S3, AWS IoT, AWS IoT GreenGrass, AWS Lambda, Amazon SageMaker, and Amazon CloudWatch Logs, and to pass service roles to AWS IoT, AWS IoT GreenGrass, and Amazon SageMaker. */
    AWSPanoramaServiceRolePolicy = 'service-role/AWSPanoramaServiceRolePolicy',
    /** Provides full access to Amazon ECR Public repositories, but does not allow repository deletion or policy changes. */
    AmazonElasticContainerRegistryPublicPowerUser = 'AmazonElasticContainerRegistryPublicPowerUser',
    /** Provides permissions required to enable the offline store for an Amazon SageMaker FeatureStore feature group. */
    AmazonSageMakerFeatureStoreAccess = 'AmazonSageMakerFeatureStoreAccess',
    /** Provides read only access to Amazon DevOps Guru Console. */
    AmazonDevOpsGuruReadOnlyAccess = 'AmazonDevOpsGuruReadOnlyAccess',
    /** Provides full access to Amazon DevOps Guru. */
    AmazonDevOpsGuruFullAccess = 'AmazonDevOpsGuruFullAccess',
    /** Provides administrative access to Amazon ECR Public resources */
    AmazonElasticContainerRegistryPublicFullAccess = 'AmazonElasticContainerRegistryPublicFullAccess',
    /** Provides read-only access to Amazon ECR Public repositories. */
    AmazonElasticContainerRegistryPublicReadOnly = 'AmazonElasticContainerRegistryPublicReadOnly',
    /** Grants account administrative permissions while explicitly allowing direct access to resources needed by Amplify applications. */
    AdministratorAccessAmplify = 'AdministratorAccess-Amplify',
    /** Grants Amazon Monitron permissions to manage AWS resources, including AWS SSO user assignment on your behalf. */
    AWSServiceRoleForMonitronPolicy = 'aws-service-role/AWSServiceRoleForMonitronPolicy',
    /** Provides full access to manage Amazon Monitron */
    AmazonMonitronFullAccess = 'AmazonMonitronFullAccess',
    /** Enables access to AWS Services and Resources used or managed by AWS Marketplace for license management. */
    AWSMarketplaceLicenseManagementServiceRolePolicy = 'aws-service-role/AWSMarketplaceLicenseManagementServiceRolePolicy',
    /** This policy grants permission to glue to perform action on user's glue data catalog, this policy also provides permission to ec2 actions to allow glue to create ENI to connect to resources in the VPC, also allow glue to access registered data in lakeformation and permission to access user's cloudwatch */
    AWSGlueDataBrewServiceRole = 'service-role/AWSGlueDataBrewServiceRole',
    /** Enables access to AWS Services and Resources used or managed by ECR Replication */
    ECRReplicationServiceRolePolicy = 'aws-service-role/ECRReplicationServiceRolePolicy',
    /** Service Linked Role to perform S3 PutObject to recording IVS live streams */
    IVSRecordToS3 = 'aws-service-role/IVSRecordToS3',
    /** Provides access to AWS resources managed or used by the AWS Systems Manager change management framework. */
    AWSSystemsManagerChangeManagementServicePolicy = 'aws-service-role/AWSSystemsManagerChangeManagementServicePolicy',
    /** Enables access to AWS Services and Resources used or managed by AWS Audit Manager */
    AWSAuditManagerServiceRolePolicy = 'aws-service-role/AWSAuditManagerServiceRolePolicy',
    /** Provides permissions necessary for SageMaker Edge to create and manage a device fleet for the customer using the default cloud connection. */
    AmazonSageMakerEdgeDeviceFleetPolicy = 'service-role/AmazonSageMakerEdgeDeviceFleetPolicy',
    /** Allows access to other AWS service resources that are required to run Amazon EMR */
    AmazonEMRContainersServiceRolePolicy = 'aws-service-role/AmazonEMRContainersServiceRolePolicy',
    /** EC2 Instance profile for building container images with EC2 Image Builder. This policy grants the user broad permissions to upload ECR images. */
    EC2InstanceProfileForImageBuilderECRContainerBuilds = 'EC2InstanceProfileForImageBuilderECRContainerBuilds',
    /** Provides administrative access to enable or disable AWS Audit Manager, update settings, and manage assessments, controls, and frameworks */
    AWSAuditManagerAdministratorAccess = 'AWSAuditManagerAdministratorAccess',
    /** Provides full access to AWS Transfer via the AWS Management Console */
    AWSTransferConsoleFullAccess = 'AWSTransferConsoleFullAccess',
    /** Provides full access to AWS Transfer Service. */
    AWSTransferFullAccess = 'AWSTransferFullAccess',
    /** Federation access for IoT Fleet Hub applications */
    AWSIoTFleetHubFederationAccess = 'service-role/AWSIoTFleetHubFederationAccess',
    /** Allows the associated identity full access to all AWS IoT Wireless operations. */
    AWSIoTWirelessFullAccess = 'AWSIoTWirelessFullAccess',
    /** Allows the associated identity read only access to AWS IoT wireless. */
    AWSIoTWirelessReadOnlyAccess = 'AWSIoTWirelessReadOnlyAccess',
    /** Provides IoT Wireless full access to publish to IoT Rules Engine on your behalf. */
    AWSIoTWirelessFullPublishAccess = 'AWSIoTWirelessFullPublishAccess',
    /** Allows the associated identity access to create, list and describe IoT Certificates */
    AWSIoTWirelessGatewayCertManager = 'AWSIoTWirelessGatewayCertManager',
    /** Allows the associated identity data access to AWS IoT Wireless devices. */
    AWSIoTWirelessDataAccess = 'AWSIoTWirelessDataAccess',
    /** Allows the associated identity to create Amazon CloudWatch Logs groups and stream logs to the groups. */
    AWSIoTWirelessLogging = 'AWSIoTWirelessLogging',
    /** Grants using AWS CloudShell with all features */
    AWSCloudShellFullAccess = 'AWSCloudShellFullAccess',
    /** Grants full access to AWS Managed Prometheus resources */
    AmazonPrometheusFullAccess = 'AmazonPrometheusFullAccess',
    /** Grants full access to AWS Managed Prometheus resources in the AWS console */
    AmazonPrometheusConsoleFullAccess = 'AmazonPrometheusConsoleFullAccess',
    /** Grants access to run queries against AWS Managed Prometheus resources */
    AmazonPrometheusQueryAccess = 'AmazonPrometheusQueryAccess',
    /** Grants write only access to AWS Managed Prometheus workspaces */
    AmazonPrometheusRemoteWriteAccess = 'AmazonPrometheusRemoteWriteAccess',
    /** Policy to enable AWS FIS to manage monitoring and resource selection for experiments. */
    AmazonFISServiceRolePolicy = 'aws-service-role/AmazonFISServiceRolePolicy',
    /** Managed policy for Service Linked Role for Amazon SageMaker Core Services */
    AmazonSageMakerCoreServiceRolePolicy = 'aws-service-role/AmazonSageMakerCoreServiceRolePolicy',
    /** Provides Lex V2 bots access to call other AWS services on your behalf. */
    AmazonLexV2BotPolicy = 'aws-service-role/AmazonLexV2BotPolicy',
    /** This policy allows customers to call Lex runtime from channels */
    AmazonLexChannelsAccess = 'aws-service-role/AmazonLexChannelsAccess',
    /** Provides AWS Direct Connect permission to create and manage AWS resources on your behalf. */
    AWSDirectConnectServiceRolePolicy = 'aws-service-role/AWSDirectConnectServiceRolePolicy',
    /** Provides full access to AWS OpsWorks. */
    AWSOpsWorksFullAccess = 'AWSOpsWorks_FullAccess',
    /** Grants read-only permissions. Explicitly allows operators to gain direct access to retrieve information about resources related to AWS Elastic Beanstalk applications. */
    AWSElasticBeanstalkReadOnly = 'AWSElasticBeanstalkReadOnly',
    /** Grants account administrative permissions. Explicitly allows developers and administrators to gain direct access to resources they need to manage AWS Elastic Beanstalk applications */
    AdministratorAccessAWSElasticBeanstalk = 'AdministratorAccess-AWSElasticBeanstalk',
    /** Read only access to WorkMail messages for the GetRawMessageContent API */
    AmazonWorkMailMessageFlowReadOnlyAccess = 'AmazonWorkMailMessageFlowReadOnlyAccess',
    /** Provides access required by Amazon CodeGuru Profiler agent. */
    AmazonCodeGuruProfilerAgentAccess = 'AmazonCodeGuruProfilerAgentAccess',
    /** Full access to the WorkMail Message Flow APIs */
    AmazonWorkMailMessageFlowFullAccess = 'AmazonWorkMailMessageFlowFullAccess',
    /** Allows EventBridge to access Secret Manager resources on your behalf. */
    AmazonEventBridgeApiDestinationsServiceRolePolicy = 'aws-service-role/AmazonEventBridgeApiDestinationsServiceRolePolicy',
    /** Provides full access to Amazon HealthLake service. */
    AmazonHealthLakeFullAccess = 'AmazonHealthLakeFullAccess',
    /** Provides read only access to Amazon HealthLake service. */
    AmazonHealthLakeReadOnlyAccess = 'AmazonHealthLakeReadOnlyAccess',
    /** Provides access to the AWS Proton APIs and Management Console, but does not allow administration of Proton templates or environments. */
    AWSProtonDeveloperAccess = 'AWSProtonDeveloperAccess',
    /** Service-linked role used by AWS Storage Gateway to enable integration of other AWS services with Storage Gateway. */
    AWSStorageGatewayServiceRolePolicy = 'aws-service-role/AWSStorageGatewayServiceRolePolicy',
    /** Provides full access to the AWS Proton APIs and Management Console. In addition to these permissions, access to Amazon S3 is also needed to register template bundles from your S3 buckets, as well as access to Amazon IAM to create and manage the service roles for Proton. */
    AWSProtonFullAccess = 'AWSProtonFullAccess',
    /** Provides read only access to the AWS Proton APIs and Management Console. */
    AWSProtonReadOnlyAccess = 'AWSProtonReadOnlyAccess',
    /** Access to read only operations in Amazon Grafana. */
    AWSGrafanaConsoleReadOnlyAccess = 'AWSGrafanaConsoleReadOnlyAccess',
    /** Provides only the ability to update user and group permissions for AWS Grafana workspaces. */
    AWSGrafanaWorkspacePermissionManagement = 'AWSGrafanaWorkspacePermissionManagement',
    /** Provides access within Amazon Grafana to create and manage workspaces for the entire organization. */
    AWSGrafanaAccountAdministrator = 'AWSGrafanaAccountAdministrator',
    /** This policy is for the AWS Elastic Beanstalk service role used to perform managed updates of Elastic Beanstalk environments. This policy should not be attached to other users or roles. The policy grants broad permissions to create and manage resources across a number of AWS services including AutoScaling, EC2, ECS, Elastic Load Balancing and CloudFormation.  This policy also allows passing of any IAM role usable with those services. */
    AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy = 'AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy',
    /** Provides access for the AWS Batch service to manage the required resources, including Amazon EC2 and Amazon ECS resources. */
    BatchServiceRolePolicy = 'aws-service-role/BatchServiceRolePolicy',
    /** This policy is used for the Amazon EMR Service Role and should NOT be used for any other IAM users or roles in your account. The policy grants permissions to create and manage resources associated with EMR and related services necessary for the operation of your EMR cluster. */
    AmazonEMRServicePolicyV2 = 'service-role/AmazonEMRServicePolicy_v2',
    /** Provides read only access to Amazon EMR and the associated CloudWatch Metrics. */
    AmazonEMRReadOnlyAccessPolicyV2 = 'AmazonEMRReadOnlyAccessPolicy_v2',
    /** Provides full access to Amazon EMR */
    AmazonEMRFullAccessPolicyV2 = 'AmazonEMRFullAccessPolicy_v2',
    /** Grants permission to enable and manage AWS Security Hub within an organization. Includes enabling the service across the organization, and determining the delegated administrator account for the service. */
    AWSSecurityHubOrganizationsAccess = 'AWSSecurityHubOrganizationsAccess',
    /** Allows AWS application Migration Service to create and manage AWS resources on your behalf. */
    AWSApplicationMigrationServiceRolePolicy = 'aws-service-role/AWSApplicationMigrationServiceRolePolicy',
    /** This policy allows the Application Migration Service (MGN) Conversion Server, which are EC2 instances launched by Application Migration Service, to communicate with the MGN service. An IAM role with this policy is attached (as an EC2 Instance Profile) by MGN to the MGN Conversion Servers, which are automatically launched and terminated by MGN, when needed. We do not recommend that you attach this policy to your IAM users or roles. MGN Conversion Servers are used by Application Migration Service when users choose to launch Test or Cutover instances using the MGN console, CLI, or API. */
    AWSApplicationMigrationConversionServerPolicy = 'service-role/AWSApplicationMigrationConversionServerPolicy',
    /** This policy provides permissions to all public APIs of AWS Application Migration Service (MGN), as well as permissions to read KMS key information. Attach this policy to your IAM users or roles. */
    AWSApplicationMigrationFullAccess = 'AWSApplicationMigrationFullAccess',
    /** This policy allows installing and using the AWS Replication Agent, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide when installing the AWS Replication Agent. */
    AWSApplicationMigrationAgentPolicy = 'AWSApplicationMigrationAgentPolicy',
    /** This policy provides Amazon EC2 operations required to use Application Migration Service (MGN) to launch the migrated servers as EC2 instances. Attach this policy to your IAM users or roles. */
    AWSApplicationMigrationEC2Access = 'AWSApplicationMigrationEC2Access',
    /** This policy allows AWS Application Migration Service (MGN) to send meta-data about the progress of servers being migrated using MGN to AWS Migration Hub (MGH). MGN automatically creates an IAM role with this policy attached, and assumes this role. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSApplicationMigrationMGHAccess = 'service-role/AWSApplicationMigrationMGHAccess',
    /** This policy provides permissions to all read-only public APIs of Application Migration Service (MGN), as well as some read-only APIs of other AWS services that are required in order to make full read-only use of the MGN console. Attach this policy to your IAM users or roles. */
    AWSApplicationMigrationReadOnlyAccess = 'AWSApplicationMigrationReadOnlyAccess',
    /** This policy allows the Application Migration Service (MGN) Replication Servers, which are EC2 instances launched by Application Migration Service - to communicate with the MGN service, and to create EBS snapshots in your AWS account. An IAM role with this policy is attached (as an EC2 Instance Profile) by Application Migration Service to the MGN Replication Servers which are automatically launched and terminated by MGN, as needed. MGN Replication Servers are used to facilitate data replication from your external servers to AWS, as part of the migration process managed using MGN. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSApplicationMigrationReplicationServerPolicy = 'service-role/AWSApplicationMigrationReplicationServerPolicy',
    /** Provides full access to Amazon Lookout for Equipment operations */
    AmazonLookoutEquipmentFullAccess = 'AmazonLookoutEquipmentFullAccess',
    /** Denies access to certain actions, applied by the AWS team in the event that an IAM user's credentials have been compromised or exposed publicly. Do NOT remove this policy. Instead, please follow the instructions specified in the support case created for you regarding this event. */
    AWSCompromisedKeyQuarantineV2 = 'AWSCompromisedKeyQuarantineV2',
    /** IAM role for SSM Explorer to manage OpsData related operations */
    AWSSystemsManagerOpsDataSyncServiceRolePolicy = 'aws-service-role/AWSSystemsManagerOpsDataSyncServiceRolePolicy',
    /** This policy is used by the service-linked role named AWSServiceRoleForCloudWatchAlarms_ActionSSMIncidents. CloudWatch uses this service-linked role to perform AWS System Manager Incident Manager actions when a CloudWatch alarm goes in to ALARM state. This policy grants permission to start incidents on your behalf. */
    AWSCloudWatchAlarmsActionSSMIncidentsServiceRolePolicy = 'aws-service-role/AWSCloudWatchAlarms_ActionSSMIncidentsServiceRolePolicy',
    /** This policy grants access to resources needed by Nimble Studio Launch Profile workers. Attach this policy to EC2 instances created by Nimble Studio Builder. */
    AmazonNimbleStudioLaunchProfileWorker = 'AmazonNimbleStudio-LaunchProfileWorker',
    /** This policy grants access to Amazon Nimble Studio resources associated with the studio admin and related studio resources in other services. Attach this policy to the Admin role associated with your studio. */
    AmazonNimbleStudioStudioAdmin = 'AmazonNimbleStudio-StudioAdmin',
    /** This policy grants access to Amazon Nimble Studio resources associated with the studio user and related studio resources in other services. Attach this policy to the User role associated with your studio. */
    AmazonNimbleStudioStudioUser = 'AmazonNimbleStudio-StudioUser',
    /** Provides read only access to Amazon Lookout for Equipments */
    AmazonLookoutEquipmentReadOnlyAccess = 'AmazonLookoutEquipmentReadOnlyAccess',
    /** Gives access to all read-only actions for Amazon Lookout for Metrics */
    AmazonLookoutMetricsReadOnlyAccess = 'AmazonLookoutMetricsReadOnlyAccess',
    /** Gives access to all actions for Amazon Lookout for Metrics */
    AmazonLookoutMetricsFullAccess = 'AmazonLookoutMetricsFullAccess',
    /** This policy grants Incident Manager permission to manage incident records and related resources on your behalf. */
    AWSIncidentManagerServiceRolePolicy = 'aws-service-role/AWSIncidentManagerServiceRolePolicy',
    /** This policy grants permissions to start, view, and update incidents with full access to custom timeline events & related items. Assign this policy to users who will create and resolve incidents. */
    AWSIncidentManagerResolverAccess = 'AWSIncidentManagerResolverAccess',
    /** Provides read only access to Amazon Lookout for Vision and scoped access to required dependencies. */
    AmazonLookoutVisionReadOnlyAccess = 'AmazonLookoutVisionReadOnlyAccess',
    /** Provides full access to Amazon Lookout for Vision and scoped access to required dependencies. */
    AmazonLookoutVisionFullAccess = 'AmazonLookoutVisionFullAccess',
    /** Provides read only access to Amazon Lookout for Vision and scoped access to required service and console dependencies. */
    AmazonLookoutVisionConsoleReadOnlyAccess = 'AmazonLookoutVisionConsoleReadOnlyAccess',
    /** Provides full access to Amazon Lookout for Vision and scoped access to required service and console dependencies. */
    AmazonLookoutVisionConsoleFullAccess = 'AmazonLookoutVisionConsoleFullAccess',
    /** Allows AWS AppRunner to manage related AWS resources on your behalf. */
    AppRunnerServiceRolePolicy = 'aws-service-role/AppRunnerServiceRolePolicy',
    /** AWS App Runner service policy that grants read permissions to Amazon ECR resources in the customer's account. Use it in a role that is passed to App Runner when creating or updating an App Runner service. */
    AWSAppRunnerServicePolicyForECRAccess = 'service-role/AWSAppRunnerServicePolicyForECRAccess',
    /** Allows Service Catalog AppRegistry to manage Resource Groups on your behalf */
    AWSServiceCatalogAppRegistryServiceRolePolicy = 'aws-service-role/AWSServiceCatalogAppRegistryServiceRolePolicy',
    /** Grant permissions to AWS Device Farm to call EC2 APIs on your behalf. */
    AWSDeviceFarmTestGridServiceRolePolicy = 'aws-service-role/AWSDeviceFarmTestGridServiceRolePolicy',
    /** Enables AWS KMS to synchronize the shared properties of multi-Region keys. */
    AWSKeyManagementServiceMultiRegionKeysServiceRolePolicy = 'aws-service-role/AWSKeyManagementServiceMultiRegionKeysServiceRolePolicy',
    /** Policy for Service Linked Role AWSServiceRoleForAmazonSSM_OpsInsights */
    AWSSSMOpsInsightsServiceRolePolicy = 'aws-service-role/AWSSSMOpsInsightsServiceRolePolicy',
    /** Grants permissions to AWS BugBust to access resources on your behalf */
    AWSBugBustServiceRolePolicy = 'aws-service-role/AWSBugBustServiceRolePolicy',
    /** This IAM policy grants users full access to the AWS BugBust console */
    AWSBugBustFullAccess = 'AWSBugBustFullAccess',
    /** This IAM policy grants users access to participate in AWS BugBust events */
    AWSBugBustPlayerAccess = 'AWSBugBustPlayerAccess',
    /** Service Linked Role Policy for Route 53 Recovery Readiness */
    Route53RecoveryReadinessServiceRolePolicy = 'aws-service-role/Route53RecoveryReadinessServiceRolePolicy',
    /** This Amazon Managed Policy grants permissions commonly needed for use with Callback steps and Lambda steps in SageMaker Model Building Pipelines. It is added to the AmazonSageMaker-ExecutionRole that can be created when setting up SageMaker Studio. It can also be attached to any other role that will be used for authoring or executing pipelines. */
    AmazonSageMakerPipelinesIntegrations = 'AmazonSageMakerPipelinesIntegrations',
    /** Allows Amazon Chime to access Amazon Transcribe and Amazon Transcribe Medical on your behalf */
    AmazonChimeTranscriptionServiceLinkedRolePolicy = 'aws-service-role/AmazonChimeTranscriptionServiceLinkedRolePolicy',
    /** Provides permissions to allow access to the AWS License Manager API actions required to consume upon licenses that the user has entitlements. */
    AWSLicenseManagerConsumptionPolicy = 'service-role/AWSLicenseManagerConsumptionPolicy',
    /** This policy allows MemoryDB to manage AWS resources on your behalf as necessary for managing your resources. */
    MemoryDBServiceRolePolicy = 'aws-service-role/MemoryDBServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access Amazon ElastiCache and Amazon CloudWatch. */
    AWSApplicationAutoscalingElastiCacheRGPolicy = 'aws-service-role/AWSApplicationAutoscalingElastiCacheRGPolicy',
    /** Provides AWS Lambda functions permissions to interact with Amazon S3 Object Lambda. Also grants Lambda permissions to write to CloudWatch Logs. */
    AmazonS3ObjectLambdaExecutionRolePolicy = 'service-role/AmazonS3ObjectLambdaExecutionRolePolicy',
    /** Provides full access to Amazon Route 53 Recovery Readiness */
    AmazonRoute53RecoveryReadinessFullAccess = 'AmazonRoute53RecoveryReadinessFullAccess',
    /** Provides read only access to Amazon Route 53 Recovery Cluster */
    AmazonRoute53RecoveryClusterReadOnlyAccess = 'AmazonRoute53RecoveryClusterReadOnlyAccess',
    /** Provides full access to Amazon Route 53 Recovery Control Config */
    AmazonRoute53RecoveryControlConfigFullAccess = 'AmazonRoute53RecoveryControlConfigFullAccess',
    /** Provides read only access to Amazon Route 53 Recovery Control Config */
    AmazonRoute53RecoveryControlConfigReadOnlyAccess = 'AmazonRoute53RecoveryControlConfigReadOnlyAccess',
    /** Provides read only access to Amazon Route 53 Recovery Readiness */
    AmazonRoute53RecoveryReadinessReadOnlyAccess = 'AmazonRoute53RecoveryReadinessReadOnlyAccess',
    /** Provides full access to Amazon Route 53 Recovery Cluster */
    AmazonRoute53RecoveryClusterFullAccess = 'AmazonRoute53RecoveryClusterFullAccess',
    /** Provides AWS Backup permissions to create compliance reports on your behalf */
    AWSServiceRolePolicyForBackupReports = 'aws-service-role/AWSServiceRolePolicyForBackupReports',
    /** This policy grants permissions for users to create controls and frameworks that define their expectations for AWS Backup resources and activities, and to audit AWS Backup resources and activities against their defined controls and frameworks. This policy grants permissions to AWS Config and similar services to describe user expectations perform the audits. This policy also grants permissions to deliver audit reports to S3 and similar services, and enables users to find and open their audit reports. */
    AWSBackupAuditAccess = 'AWSBackupAuditAccess',
    /** Allow Amazon OpenSearch Service to access other AWS services such as EC2 Networking APIs on your behalf. */
    AmazonOpenSearchServiceRolePolicy = 'aws-service-role/AmazonOpenSearchServiceRolePolicy',
    /** Provides access to the Amazon Cognito configuration service. */
    AmazonOpenSearchServiceCognitoAccess = 'AmazonOpenSearchServiceCognitoAccess',
    /** Policy granting permissions to Application Auto Scaling to access Amazon Neptune and Amazon CloudWatch. */
    AWSApplicationAutoscalingNeptuneClusterPolicy = 'aws-service-role/AWSApplicationAutoscalingNeptuneClusterPolicy',
    /** This policy allows Amazon EKS to manage AWS resources for EKS connector */
    AmazonEKSConnectorServiceRolePolicy = 'aws-service-role/AmazonEKSConnectorServiceRolePolicy',
    /** This policy grants Kafka Connect permission to manage AWS resources on your behalf. */
    KafkaConnectServiceRolePolicy = 'aws-service-role/KafkaConnectServiceRolePolicy',
    /** Provides access to Amazon OpenSearch resources from Amazon QuickSight */
    AWSQuicksightOpenSearchPolicy = 'service-role/AWSQuicksightOpenSearchPolicy',
    /** Provides full access to the Amazon OpenSearch Service configuration service. */
    AmazonOpenSearchServiceFullAccess = 'AmazonOpenSearchServiceFullAccess',
    /** Provides read-only access to the Amazon OpenSearch Service configuration service. */
    AmazonOpenSearchServiceReadOnlyAccess = 'AmazonOpenSearchServiceReadOnlyAccess',
    /** Enable access to AWS Resources used or managed by MediaTailor */
    AWSMediaTailorServiceRolePolicy = 'aws-service-role/AWSMediaTailorServiceRolePolicy',
    /** Provide readonly access to Amazon MSK Connect */
    AmazonMSKConnectReadOnlyAccess = 'AmazonMSKConnectReadOnlyAccess',
    /** Policy for Amazon Connect Campaigns service linked role */
    AmazonConnectCampaignsServiceLinkedRolePolicy = 'aws-service-role/AmazonConnectCampaignsServiceLinkedRolePolicy',
    /** Grants full access to the Amazon Redshift Query Editor V2 operations and resources. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters, read keys and aliases in AWS KMS and manage the Query Editor V2 secrets in AWS Secrets Manager. */
    AmazonRedshiftQueryEditorV2FullAccess = 'AmazonRedshiftQueryEditorV2FullAccess',
    /** Grants the ability to work with Amazon Redshift Query Editor V2 without sharing resources. The granted principal can only read, update and delete its own resources but cannot share them. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters and manage the Query Editor V2 secrets of the principal in AWS Secrets Manager. */
    AmazonRedshiftQueryEditorV2NoSharing = 'AmazonRedshiftQueryEditorV2NoSharing',
    /** Grants the ability to work with Amazon Redshift Query Editor V2 with limited sharing of resources. The granted principal can read, write and share its own resources. The granted principal can read the resources shared with its team but cannot update them. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters and manage the Query Editor V2 secrets of the principal in AWS Secrets Manager. */
    AmazonRedshiftQueryEditorV2ReadSharing = 'AmazonRedshiftQueryEditorV2ReadSharing',
    /** Grants the ability to work with Amazon Redshift Query Editor V2 with sharing of resources. The granted principal can read, write and share its own resources. The granted principal can read and update the resources shared with its team. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters and manage the Query Editor V2 secrets of the principal in AWS Secrets Manager. */
    AmazonRedshiftQueryEditorV2ReadWriteSharing = 'AmazonRedshiftQueryEditorV2ReadWriteSharing',
    /** Provides full access to Amazon Connect Voice ID */
    AmazonConnectVoiceIDFullAccess = 'AmazonConnectVoiceIDFullAccess',
    /** Allows EC2 CapacityReservation Fleet service to manage Capacity Reservations */
    AWSEC2CapacityReservationFleetRolePolicy = 'aws-service-role/AWSEC2CapacityReservationFleetRolePolicy',
    /** Provides full access to AWS Account Management. */
    AWSAccountManagementFullAccess = 'AWSAccountManagementFullAccess',
    /** Provides read-only access to AWS Account Management */
    AWSAccountManagementReadOnlyAccess = 'AWSAccountManagementReadOnlyAccess',
    /** Provides full access to Amazon MemoryDB via the AWS Management Console. */
    AmazonMemoryDBFullAccess = 'AmazonMemoryDBFullAccess',
    /** Provides read only access to Amazon MemoryDB via the AWS Management Console. */
    AmazonMemoryDBReadOnlyAccess = 'AmazonMemoryDBReadOnlyAccess',
    /** Allows Amazon RDS Custom to manage AWS resources on your behalf. */
    AmazonRDSCustomServiceRolePolicy = 'aws-service-role/AmazonRDSCustomServiceRolePolicy',
    /** Amazon RDS Custom Preview Service Role Policy */
    AmazonRDSCustomPreviewServiceRolePolicy = 'aws-service-role/AmazonRDSCustomPreviewServiceRolePolicy',
    /** Enable access to AWS Resources used or managed by AWS Migration Hub Strategy Recommendations service. */
    AWSMigrationHubStrategyServiceRolePolicy = 'aws-service-role/AWSMigrationHubStrategyServiceRolePolicy',
    /** Grants full access to the AWS Migration Hub Strategy Recommendations service and access to related AWS services through the AWS Management Console. */
    AWSMigrationHubStrategyConsoleFullAccess = 'AWSMigrationHubStrategyConsoleFullAccess',
    /** Grants permissions to allow communication with the AWS Migration Hub Strategy Recommendations service, read/write access to S3 buckets related to the service, Amazon API Gateway access to upload logs and metrics to AWS, AWS Secrets Manager access to fetch credentials, and any related services. */
    AWSMigrationHubStrategyCollector = 'AWSMigrationHubStrategyCollector',
    /** Allows AWS Panorama to manage resources in AWS IoT, AWS Secrets Manager and AWS Panorama. */
    AWSPanoramaServiceLinkedRolePolicy = 'aws-service-role/AWSPanoramaServiceLinkedRolePolicy',
    /** Allows an AWS Panorama Appliance to upload logs to Amazon CloudWatch, and to get objects from Amazon S3 access points created for use with AWS Panorama. */
    AWSPanoramaApplianceServiceRolePolicy = 'service-role/AWSPanoramaApplianceServiceRolePolicy',
    /** Enables access for AWS Marketplace services to purchase order management. */
    AWSMarketplacePurchaseOrdersServiceRolePolicy = 'aws-service-role/AWSMarketplacePurchaseOrdersServiceRolePolicy',
    /** DeepRacer admin access to all actions including toggling between multiuser and single user mode. */
    AWSDeepRacerAccountAdminAccess = 'AWSDeepRacerAccountAdminAccess',
    /** DeepRacer MultiUser Default user access to use deepracer in multi-user mode */
    AWSDeepRacerDefaultMultiUserAccess = 'AWSDeepRacerDefaultMultiUserAccess',
    /** Grants permissions to to describe the organization of the account, create S3 buckets for the MAP program and apply tags to it, create a Cost and Usage Report, and describe Cost and Usage Report definitions. */
    AWSCostAndUsageReportAutomationPolicy = 'service-role/AWSCostAndUsageReportAutomationPolicy',
    /** This policy includes permissions to run SQL commands to copy, load, unload, query, and analyze data on Amazon Redshift. The policy also grants permissions to run select statements for related services, such as Amazon S3, Amazon CloudWatch logs, Amazon SageMaker, or AWS Glue. */
    AmazonRedshiftAllCommandsFullAccess = 'AmazonRedshiftAllCommandsFullAccess',
    /** This policy allows installing and using the AWS VCenter Client, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide when installing the AWS VCenter Client. */
    AWSApplicationMigrationVCenterClientPolicy = 'AWSApplicationMigrationVCenterClientPolicy',
    /** Provide access to enable and manage Amazon DevOps Guru within an organization. */
    AmazonDevOpsGuruOrganizationsAccess = 'AmazonDevOpsGuruOrganizationsAccess',
    /** Grants Amazon Inspector access to AWS Services needed to perform security assessments */
    AmazonInspector2ServiceRolePolicy = 'aws-service-role/AmazonInspector2ServiceRolePolicy',
    /** This policy is attached to the instance role of Elastic Disaster Recovery's Recovery Instance.  This policy allows the Elastic Disaster Recovery (DRS) Recovery Instance, which are EC2 instances launched by Elastic Disaster Recovery - to communicate with the DRS service, and to be able to failback to their original source infrastructure. An IAM role with this policy is attached (as an EC2 Instance Profile) by Elastic Disaster Recovery to the DRS Recovery Instances. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryRecoveryInstancePolicy = 'service-role/AWSElasticDisasterRecoveryRecoveryInstancePolicy',
    /** This policy allows using the AWS Replication Agent, which is used with AWS Elastic Disaster Recovery (DRS) to recover source servers to AWS. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryAgentPolicy = 'service-role/AWSElasticDisasterRecoveryAgentPolicy',
    /** This policy allows installing the AWS Replication Agent, which is used with AWS Elastic Disaster Recovery (DRS) to recover external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide during the installation step of the AWS Replication Agent. */
    AWSElasticDisasterRecoveryAgentInstallationPolicy = 'AWSElasticDisasterRecoveryAgentInstallationPolicy',
    /** This policy allows using the Elastic Disaster Recovery Failback Client, which is used to failback Recovery Instances back to your original source infrastructure. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryFailbackPolicy = 'service-role/AWSElasticDisasterRecoveryFailbackPolicy',
    /** This policy provides full access to all public APIs of AWS Elastic Disaster Recovery (DRS), as well as permissions to read KMS key, License Manager, Resource Groups, Elastic Load Balancing, IAM, and EC2 information. Attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryConsoleFullAccess = 'AWSElasticDisasterRecoveryConsoleFullAccess',
    /** You can attach the AWSElasticDisasterRecoveryReadOnlyAccess policy to your IAM identities.  This policy provides permissions to all read-only public APIs of Elastic Disaster Recovery (DRS), as well as some read-only APIs of other AWS services that are required in order to make full read-only use of the DRS console. Attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryReadOnlyAccess = 'AWSElasticDisasterRecoveryReadOnlyAccess',
    /** This policy allows Elastic Disaster Recovery to manage AWS resources on your behalf. */
    AWSElasticDisasterRecoveryServiceRolePolicy = 'aws-service-role/AWSElasticDisasterRecoveryServiceRolePolicy',
    /** You can attach the AWSElasticDisasterRecoveryFailbackInstallationPolicy policy to your IAM identities.  This policy allows installing the Elastic Disaster Recovery Failback Client, which is used to failback Recovery Instances back to your original source infrastructure. Attach this policy to your IAM users or roles whose credentials you provide when running the Elastic Disaster Recovery Failback Client. */
    AWSElasticDisasterRecoveryFailbackInstallationPolicy = 'AWSElasticDisasterRecoveryFailbackInstallationPolicy',
    /** This policy is attached to the Elastic Disaster Recovery Replication server's instance role. This policy allows the Elastic Disaster Recovery (DRS) Replication Servers, which are EC2 instances launched by Elastic Disaster Recovery - to communicate with the DRS service, and to create EBS snapshots in your AWS account. An IAM role with this policy is attached (as an EC2 Instance Profile) by Elastic Disaster Recovery to the DRS Replication Servers which are automatically launched and terminated by DRS, as needed. DRS Replication Servers are used to facilitate data replication from your external servers to AWS, as part of the recovery process managed by DRS. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryReplicationServerPolicy = 'service-role/AWSElasticDisasterRecoveryReplicationServerPolicy',
    /** This policy is attached to the AWS Elastic Disaster Recovery Conversion server's instance role. This policy allows Elastic Disaster Recovery (DRS) Conversion Servers, which are EC2 instances launched by Elastic Disaster Recovery, to communicate with the DRS service. An IAM role with this policy is attached (as an EC2 Instance Profile) by DRS to the DRS Conversion Servers, which are automatically launched and terminated by DRS, when needed. We do not recommend that you attach this policy to your IAM users or roles. DRS Conversion Servers are used by Elastic Disaster Recovery when users choose to recover source servers using the DRS console, CLI, or API. */
    AWSElasticDisasterRecoveryConversionServerPolicy = 'service-role/AWSElasticDisasterRecoveryConversionServerPolicy',
    /** Allows AWS Shield to access AWS resources on your behalf to provide DDoS protection. */
    AWSShieldServiceRolePolicy = 'aws-service-role/AWSShieldServiceRolePolicy',
    /** Grants permission to Amazon CloudWatch RUM Service to publish monitoring data to other relevant AWS services */
    AmazonCloudWatchRUMServiceRolePolicy = 'aws-service-role/AmazonCloudWatchRUMServiceRolePolicy',
    /** Allows Amazon Detective to make service calls on your behalf */
    AmazonDetectiveServiceLinkedRolePolicy = 'aws-service-role/AmazonDetectiveServiceLinkedRolePolicy',
    /** This policy grants access to Amazon Athena and the dependencies needed to enable querying and writing results to s3 from the Amazon Athena plugin in Amazon Grafana. */
    AmazonGrafanaAthenaAccess = 'service-role/AmazonGrafanaAthenaAccess',
    /** Provides full access to AWS Elemental MediaTailor resources */
    AWSElementalMediaTailorFullAccess = 'AWSElementalMediaTailorFullAccess',
    /** Provides read only access to AWS Elemental MediaTailor resources */
    AWSElementalMediaTailorReadOnly = 'AWSElementalMediaTailorReadOnly',
    /** Policy which allows AWS Proton to sync your git repository contents to Proton or sync Proton contents to your git repositories. */
    AWSProtonSyncServiceRolePolicy = 'aws-service-role/AWSProtonSyncServiceRolePolicy',
    /** Grants access to AWS Services and resources necessary for executing an Amazon Braket Job including S3, Cloudwatch, IAM and Braket */
    AmazonBraketJobsExecutionPolicy = 'AmazonBraketJobsExecutionPolicy',
    /** Enables access to AWS services and resources used or managed by AWS ECR pull through cache */
    AWSECRPullThroughCacheServiceRolePolicy = 'aws-service-role/AWSECRPullThroughCache_ServiceRolePolicy',
    /** This policy grants scoped access to Amazon Redshift and the dependencies needed to use the Amazon Redshift plugin in Amazon Grafana. */
    AmazonGrafanaRedshiftAccess = 'service-role/AmazonGrafanaRedshiftAccess',
    /** This policy grants permissions that allow read-only access to AWS Iot RoboRunner. */
    AWSIotRoboRunnerReadOnly = 'AWSIotRoboRunnerReadOnly',
    /** This policy grants permissions that allow full access to AWS Iot RoboRunner. */
    AWSIotRoboRunnerFullAccess = 'AWSIotRoboRunnerFullAccess',
    /** Provides access to AWS Resources managed or used by AWS Migration Hub Refactor Spaces. */
    AWSMigrationHubRefactorSpacesServiceRolePolicy = 'aws-service-role/AWSMigrationHubRefactorSpacesServiceRolePolicy',
    /** Grants full access to AWS MigrationHub Refactor Spaces, AWS MigrationHub Refactor Spaces console features and other related AWS services except permissions required for AWS Lambda and AWS Resource Access Manager as they can be scoped down based on tags. */
    AWSMigrationHubRefactorSpacesFullAccess = 'AWSMigrationHubRefactorSpacesFullAccess',
    /** Provides read only access to Amazon CloudWatch Evidently */
    AmazonCloudWatchEvidentlyReadOnlyAccess = 'AmazonCloudWatchEvidentlyReadOnlyAccess',
    /** Provides full only access to Amazon CloudWatch Evidently. Also provides access to related Amazon S3, Amazon SNS, Amazon CloudWatch, and other related services. */
    AmazonCloudWatchEvidentlyFullAccess = 'AmazonCloudWatchEvidentlyFullAccess',
    /** Grants read only permissions for the Amazon CloudWatch RUM service */
    AmazonCloudWatchRUMReadOnlyAccess = 'AmazonCloudWatchRUMReadOnlyAccess',
    /** Grants full access permissions for the Amazon CloudWatch RUM service */
    AmazonCloudWatchRUMFullAccess = 'AmazonCloudWatchRUMFullAccess',
    /** Provides full access to Amazon Inspector and access to other related services such as organizations. */
    AmazonInspector2FullAccess = 'AmazonInspector2FullAccess',
    /** Enables access to AWS Services and Resources used or managed by Amazon WorkSpaces Web */
    AmazonWorkSpacesWebServiceRolePolicy = 'aws-service-role/AmazonWorkSpacesWebServiceRolePolicy',
    /** Provides read-only access to Amazon WorkSpaces Web and its dependencies through the AWS Management Console, SDK, and CLI. */
    AmazonWorkSpacesWebReadOnly = 'AmazonWorkSpacesWebReadOnly',
    /** Allows VPC IP Address Manager to access VPC resources and integrate with AWS Organizations on your behalf. */
    AWSIPAMServiceRolePolicy = 'aws-service-role/AWSIPAMServiceRolePolicy',
    /** Allows AWS Private Networks Service to manage resources on behalf of the customer. */
    AWSPrivateNetworksServiceRolePolicy = 'aws-service-role/AWSPrivateNetworksServiceRolePolicy',
    /** The policy grants full-access to the DevOps Guru console. */
    AmazonDevOpsGuruConsoleFullAccess = 'AmazonDevOpsGuruConsoleFullAccess',
    /** Policy grants ec2fastlaunch to prepare and manage preprovisioned snapshots in customer's account & publish related metrics. */
    EC2FastLaunchServiceRolePolicy = 'aws-service-role/EC2FastLaunchServiceRolePolicy',
    /** Grants permissions to all App Runner actions. */
    AWSAppRunnerFullAccess = 'AWSAppRunnerFullAccess',
    /** Allows AWS AppRunner Networking to manage related AWS resources on your behalf. */
    AppRunnerNetworkingServiceRolePolicy = 'aws-service-role/AppRunnerNetworkingServiceRolePolicy',
    /** Provides read only access to the Amazon inspector2 service and relevant support services */
    AmazonInspector2ReadOnlyAccess = 'AmazonInspector2ReadOnlyAccess',
    /** Policy containing permissions necessary for AWS Backup to restore a S3 backup to a bucket. This includes read/write permissions to all S3 buckets, and permissions to GenerateDataKey and DescribeKey for all KMS keys. */
    AWSBackupServiceRolePolicyForS3Restore = 'AWSBackupServiceRolePolicyForS3Restore',
    /** Policy containing permissions necessary for AWS Backup to backup data in any S3 bucket. This includes read access to all S3 objects and any decrypt access for all KMS keys. */
    AWSBackupServiceRolePolicyForS3Backup = 'AWSBackupServiceRolePolicyForS3Backup',
    /** Service role policy used by the AWS Glue within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Glue, S3 and others. */
    AmazonSageMakerServiceCatalogProductsGlueServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsGlueServiceRolePolicy',
    /** Service role policy used by the AWS CodePipeline within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including CodePipeline, CodeBuild and others. */
    AmazonSageMakerServiceCatalogProductsCodePipelineServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsCodePipelineServiceRolePolicy',
    /** Service role policy used by the AWS CloudWatch Events within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including CodePipeline and others. */
    AmazonSageMakerServiceCatalogProductsEventsServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsEventsServiceRolePolicy',
    /** Service role policy used by the AWS Firehose within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Firehose and others. */
    AmazonSageMakerServiceCatalogProductsFirehoseServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsFirehoseServiceRolePolicy',
    /** Grants permissions to list and view details about App Runner resources. */
    AWSAppRunnerReadOnlyAccess = 'AWSAppRunnerReadOnlyAccess',
    /** Grants full access to the Identity Sync service */
    AWSIdentitySyncFullAccess = 'AWSIdentitySyncFullAccess',
    /** Read only access to the Identity Sync service */
    AWSIdentitySyncReadOnlyAccess = 'AWSIdentitySyncReadOnlyAccess',
    /** Service role policy used by the AWS APIGateway within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including CloudWatch Logs and others. */
    AmazonSageMakerServiceCatalogProductsApiGatewayServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsApiGatewayServiceRolePolicy',
    /** Service role policy used by the AWS CloudFormation within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including SageMaker and others. */
    AmazonSageMakerServiceCatalogProductsCloudformationServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsCloudformationServiceRolePolicy',
    /** Service role policy used by the AWS CodeBuild within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including CodePipeline, CodeBuild and others. */
    AmazonSageMakerServiceCatalogProductsCodeBuildServiceRolePolicy = 'AmazonSageMakerServiceCatalogProductsCodeBuildServiceRolePolicy',
    /** Service role policy used by the AWS Lambda within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including ECR, S3 and others. */
    AmazonSageMakerServiceCatalogProductsLambdaServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsLambdaServiceRolePolicy',
    /** IAM Policy that allows the CSI driver service account to make calls to related services such as EC2 on your behalf. */
    AmazonEBSCSIDriverPolicy = 'service-role/AmazonEBSCSIDriverPolicy',
    /** Managed Policy For Amazon Chime SDK MediaPipelines Service Linked Role */
    AmazonChimeSDKMediaPipelinesServiceLinkedRolePolicy = 'aws-service-role/AmazonChimeSDKMediaPipelinesServiceLinkedRolePolicy',
    /** Read-Only policy for RDS Performance Insights */
    AmazonRDSPerformanceInsightsReadOnly = 'AmazonRDSPerformanceInsightsReadOnly',
    /** This policy provides the permissions required to manage the Red Hat OpenShift Service on AWS (ROSA) subscription. */
    ROSAManageSubscription = 'ROSAManageSubscription',
    /** Use the AWSBillingConductorFullAccess managed policy to allow complete access to AWS Billing Conductor (ABC) console and APIs. This policy allows users to list, create and delete ABC resources. */
    AWSBillingConductorFullAccess = 'AWSBillingConductorFullAccess',
    /** Use the AWSBillingConductorReadOnlyAccess managed policy to allow read only access to AWS Billing Conductor (ABC) console and APIs. This policy grants permission to view and list all ABC resources. It does not include the ability to create or delete resources. */
    AWSBillingConductorReadOnlyAccess = 'AWSBillingConductorReadOnlyAccess',
    /** Provides full access to all AWS Glue resources except for sessions. Allows users to create and use only the interactive sessions that are associated with the user. This policy also includes other permissions needed by AWS Glue to manage Glue resources in other AWS services */
    AwsGlueSessionUserRestrictedServiceRole = 'service-role/AwsGlueSessionUserRestrictedServiceRole',
    /** Provides permissions that allows users to create and use only the interactive sessions that are associated with the user. This policy also includes permissions to explicitly allow users to pass a restricted Glue session role. */
    AwsGlueSessionUserRestrictedPolicy = 'AwsGlueSessionUserRestrictedPolicy',
    /** Provides permissions that allows users to create and use only the notebook sessions that are associated with the user. This policy also includes permissions to explicitly allow users to pass a restricted Glue session role. */
    AwsGlueSessionUserRestrictedNotebookPolicy = 'AwsGlueSessionUserRestrictedNotebookPolicy',
    /** Provides full access to all AWS Glue resources except for sessions. Allows users to create and use only the notebook sessions that are associated with the user. This policy also includes other permissions needed by AWS Glue to manage Glue resources in other AWS services. */
    AwsGlueSessionUserRestrictedNotebookServiceRole = 'service-role/AwsGlueSessionUserRestrictedNotebookServiceRole',
    /** Provides permissions necessary for Migration Hub Orchestrator to migrate and modernize your on-premises workloads */
    AWSMigrationHubOrchestratorServiceRolePolicy = 'aws-service-role/AWSMigrationHubOrchestratorServiceRolePolicy',
    /** Provides limited access to Amazon Simple Storage Service, AWS Secrets Manager and Plugin related actions for AWS Migration Hub Orchestrator. */
    AWSMigrationHubOrchestratorPlugin = 'AWSMigrationHubOrchestratorPlugin',
    /** Provides limited access to AWS Migration Hub, AWS Application Discovery Service, Amazon Simple Storage Service and AWS Secrets Manager. This policy also grants full access to AWS Migration Hub Orchestrator service. */
    AWSMigrationHubOrchestratorConsoleFullAccess = 'AWSMigrationHubOrchestratorConsoleFullAccess',
    /** This policy needs to be attached for SAP and MGN migrated instance for our service to orchestrate instances by downloading scripts from S3 and to fetch secret values inside EC2 instance. */
    AWSMigrationHubOrchestratorInstanceRolePolicy = 'AWSMigrationHubOrchestratorInstanceRolePolicy',
    /** Policy for AWS Monitron service linked role granting access to required customer resources. */
    MonitronServiceRolePolicy = 'aws-service-role/MonitronServiceRolePolicy',
    /** Allows access to other AWS service resources that are required to run Amazon EMRServerless */
    AmazonEMRServerlessServiceRolePolicy = 'aws-service-role/AmazonEMRServerlessServiceRolePolicy',
    /** This policy gives permissions to control AWS resources. For example, to start and stop EC2 or RDS instances by executing AWS Systems Manager (SSM) scripts. */
    AWSBudgetsActionsRolePolicyForResourceAdministrationWithSSM = 'AWSBudgetsActions_RolePolicyForResourceAdministrationWithSSM',
    /** This policy allows read-only access to AWS Elastic Disaster Recovery (DRS) resources such as source servers and jobs. It also allows creating a converted snapshot and sharing that EBS snapshot with a specific account. */
    AWSElasticDisasterRecoveryStagingAccountPolicy = 'service-role/AWSElasticDisasterRecoveryStagingAccountPolicy',
    /** This policy allows installing and using the AWS Replication Agent, which is used by AWS Elastic Disaster Recovery (DRS) to recover source servers that run on EC2 (cross-region or cross-AZ). An IAM role with this policy should be attached (as an EC2 Instance Profile) to the EC2 Instances. */
    AWSElasticDisasterRecoveryEc2InstancePolicy = 'service-role/AWSElasticDisasterRecoveryEc2InstancePolicy',
    /** This policy allows using the AWS Replication Agent, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSApplicationMigrationAgentPolicyV2 = 'service-role/AWSApplicationMigrationAgentPolicy_v2',
    /** Allows AWS M2 to manage AWS resources on your behalf. */
    AWSM2ServicePolicy = 'aws-service-role/AWSM2ServicePolicy',
    /** Allows AWS Managed Services to manage deployment toolkit on your behalf. */
    AWSManagedServicesDeploymentToolkitPolicy = 'aws-service-role/AWSManagedServicesDeploymentToolkitPolicy',
    /** Provides read only access to AWS CloudTrail. */
    AWSCloudTrailReadOnlyAccess = 'AWSCloudTrail_ReadOnlyAccess',
    /** This policy allows installing the AWS Replication Agent, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide when installing the AWS Replication Agent. */
    AWSApplicationMigrationAgentInstallationPolicy = 'AWSApplicationMigrationAgentInstallationPolicy',
    /** Allows Well-Architected to access Organizations on your behalf. */
    AWSWellArchitectedOrganizationsServiceRolePolicy = 'aws-service-role/AWSWellArchitectedOrganizationsServiceRolePolicy',
    /** Allows IAM Roles Anywhere to publish service/usage metrics to CloudWatch and check the status of Private Certificate Authorities on your behalf. */
    AWSRolesAnywhereServicePolicy = 'aws-service-role/AWSRolesAnywhereServicePolicy',
    /** Allow NetworkManager to access resources associated with your Core Network */
    AWSNetworkManagerCloudWANServiceRolePolicy = 'aws-service-role/AWSNetworkManagerCloudWANServiceRolePolicy',
    /** GuardDuty malware protection uses the service-linked role (SLR) named AWSServiceRoleForAmazonGuardDutyMalwareProtection. This service-linked role allows GuardDuty malware protection to perform agent-less scans to detect malware. It allows GuardDuty to create snapshots in your account, and share the snapshots with the GuardDuty service account to scan for malware. It evaluates these shared snapshots and includes the retrieved EC2 instance metadata in the GuardDuty Malware Protection findings. The AWSServiceRoleForAmazonGuardDutyMalwareProtection service-linked role trusts the malware-protection.guardduty.amazonaws.com service to assume the role. */
    AmazonGuardDutyMalwareProtectionServiceRolePolicy = 'aws-service-role/AmazonGuardDutyMalwareProtectionServiceRolePolicy',
    /** Provides full access for creating and managing the Vendor Insights resources */
    AWSVendorInsightsVendorFullAccess = 'AWSVendorInsightsVendorFullAccess',
    /** Provides read-only access for viewing the Vendor Insights resources */
    AWSVendorInsightsVendorReadOnly = 'AWSVendorInsightsVendorReadOnly',
    /** Provides full access for viewing entitled Vendor Insights resources and managing Vendor Insights subscriptions */
    AWSVendorInsightsAssessorFullAccess = 'AWSVendorInsightsAssessorFullAccess',
    /** Provides read-only access for viewing entitled Vendor Insights resources */
    AWSVendorInsightsAssessorReadOnly = 'AWSVendorInsightsAssessorReadOnly',
    /** Allows AWS License Manager User Subscriptions Service to manage resources on your behalf. */
    AWSLicenseManagerUserSubscriptionsServiceRolePolicy = 'aws-service-role/AWSLicenseManagerUserSubscriptionsServiceRolePolicy',
    /** Provides full access to AWS Trusted Advisor Priority. This policy also enables the user to add Trusted Advisor as a trusted service with AWS Organizations and to specify delegated administrator accounts for Trusted Advisor Priority. */
    AWSTrustedAdvisorPriorityFullAccess = 'AWSTrustedAdvisorPriorityFullAccess',
    /** Provides read-only access to AWS Trusted Advisor Priority. This includes permission to view the delegated administrator accounts. */
    AWSTrustedAdvisorPriorityReadOnlyAccess = 'AWSTrustedAdvisorPriorityReadOnlyAccess',
    /** Allows Application Discovery Service Agentless Collectors to auto update, register, and communicate with Application Discovery Service */
    AWSApplicationDiscoveryAgentlessCollectorAccess = 'AWSApplicationDiscoveryAgentlessCollectorAccess',
    /** Provides full access to the AWS Support App and other required services, such as AWS Support and Service Quotas. This policy includes permissions to use the supporting services so that the user can contact AWS Support for support cases, change service quotas, and create the relevant service-linked roles. */
    AWSSupportAppFullAccess = 'AWSSupportAppFullAccess',
    /** Provides read-only access to the AWS Support App. */
    AWSSupportAppReadOnlyAccess = 'AWSSupportAppReadOnlyAccess',
    /** Allows Amazon EKS Local to call AWS services on your behalf. */
    AmazonEKSLocalOutpostServiceRolePolicy = 'aws-service-role/AmazonEKSLocalOutpostServiceRolePolicy',
    /** This policy grants permissions commonly needed to use SageMaker Canvas with Amazon Forecast. */
    AmazonSageMakerCanvasForecastAccess = 'service-role/AmazonSageMakerCanvasForecastAccess',
    /** This policy provides permissions to EKS local cluster's control-plane instances running in your account to manage resources on your behalf. */
    AmazonEKSLocalOutpostClusterPolicy = 'AmazonEKSLocalOutpostClusterPolicy',
    /** This policy grants read-only access to SageMaker Ground Truth Synthetic via the AWS Management Console. */
    GroundTruthSyntheticConsoleReadOnlyAccess = 'GroundTruthSyntheticConsoleReadOnlyAccess',
    /** This policy grants permissions needed to use all features of the SageMaker Ground Truth Synthetic Console. */
    GroundTruthSyntheticConsoleFullAccess = 'GroundTruthSyntheticConsoleFullAccess',
    /** This policy enables AWS Systems Manager functionality on EC2 instances. */
    AmazonSSMManagedEC2InstanceDefaultPolicy = 'AmazonSSMManagedEC2InstanceDefaultPolicy',
    /** Provides full access to Amazon SageMaker Canvas resources and operations. The policy also provides select access to related services (e.g., S3, IAM, VPC, ECR, CloudWatch Logs, Redshift, Secrets Manager, and Forecast). This policy should be attached to the Amazon SageMaker Domain/User Profile execution role. */
    AmazonSageMakerCanvasFullAccess = 'AmazonSageMakerCanvasFullAccess',
    /** Allows CloudWatch Evidently Service to manage associated AWS Resources on behalf of the customer */
    AmazonCloudWatchEvidentlyServiceRolePolicy = 'aws-service-role/AmazonCloudWatchEvidentlyServiceRolePolicy',
    /** Grant permissions to AWS Device Farm to call EC2 Network APIs on your behalf. */
    AWSDeviceFarmServiceRolePolicy = 'aws-service-role/AWSDeviceFarmServiceRolePolicy',
    /** Grants permissions to AWS Resources and metaData used or managed by AWSIoTFleetwise for auxiliary features */
    AWSIoTFleetwiseServiceRolePolicy = 'aws-service-role/AWSIoTFleetwiseServiceRolePolicy',
    /** Provides read-only access to supportplans. */
    AWSSupportPlansReadOnlyAccess = 'AWSSupportPlansReadOnlyAccess',
    /** Provides full access to supportplans. */
    AWSSupportPlansFullAccess = 'AWSSupportPlansFullAccess',
    /** Allows AppIntegrations to manage AppFlow resources and publish CloudWatch metric data on your behalf. */
    AppIntegrationsServiceLinkedRolePolicy = 'aws-service-role/AppIntegrationsServiceLinkedRolePolicy',
    /** Amazon AppStream 2.0 access to AWS Certificate Manager Private CA in customer accounts for certificate-based authentication */
    AmazonAppStreamPCAAccess = 'service-role/AmazonAppStreamPCAAccess',
    /** This policy is intended to be used by Amazon ECS Tasks created for testing applications in AWS using the AWS Toolkit for .NET Refactoring extension for Microsoft Visual Studio. The policy grants access to download application artifacts from Amazon S3, communicate the status of the Task using AWS Systems Manager, and other required services. */
    AWSRefactoringToolkitSidecarPolicy = 'AWSRefactoringToolkitSidecarPolicy',
    /** This policy grants permission to use AWS services with the AWS Toolkit for .NET Refactoring extension for Microsoft Visual Studio. It is intended to be attached to a local AWS profile. The policy allows uploading application artifacts and downloading the resulting artifacts from Amazon S3. It allows building applications into a container image using AWS CodeBuild and storing and retrieving the images from Amazon Elastic Container Registry (Amazon ECR). And it allows deployment of the application to container services on AWS such as Amazon Elastic Container Service (Amazon ECS), optional creation of VPC resources, optional connection to existing infrastructure such as AWS Directory Service, and other related services. */
    AWSRefactoringToolkitFullAccess = 'AWSRefactoringToolkitFullAccess',
    /** Allows Resource Explorer to view resources and CloudTrail events on your behalf to index your resources for search. */
    AWSResourceExplorerServiceRolePolicy = 'aws-service-role/AWSResourceExplorerServiceRolePolicy',
    /** This policy grants the Fault Injection Simulator Service permission in SSM and other required services to perform FIS actions. */
    AWSFaultInjectionSimulatorSSMAccess = 'service-role/AWSFaultInjectionSimulatorSSMAccess',
    /** This policy grants the Fault Injection Simulator Service permission in RDS and other required services to perform FIS actions. */
    AWSFaultInjectionSimulatorRDSAccess = 'service-role/AWSFaultInjectionSimulatorRDSAccess',
    /** This policy grants the Fault Injection Simulator Service permission in EC2 networking and other required services to perform FIS actions. */
    AWSFaultInjectionSimulatorNetworkAccess = 'service-role/AWSFaultInjectionSimulatorNetworkAccess',
    /** This policy grants the Fault Injection Simulator Service permission in EKS and other required services to perform FIS actions. */
    AWSFaultInjectionSimulatorEKSAccess = 'service-role/AWSFaultInjectionSimulatorEKSAccess',
    /** This policy grants the Fault Injection Simulator Service permission in ECS and other required services to perform FIS actions. */
    AWSFaultInjectionSimulatorECSAccess = 'service-role/AWSFaultInjectionSimulatorECSAccess',
    /** This policy grants the Fault Injection Simulator Service permission in EC2 and other required services to perform FIS actions. */
    AWSFaultInjectionSimulatorEC2Access = 'service-role/AWSFaultInjectionSimulatorEC2Access',
    /** This policy grants read-only permissions to search for and view Resource Explorer resources and grants read-only permissions to other AWS services to support this access. */
    AWSResourceExplorerReadOnlyAccess = 'AWSResourceExplorerReadOnlyAccess',
    /** This policy grants administrative permissions to access Resource Explorer resources and grants read-only permissions to other AWS services to support this access. */
    AWSResourceExplorerFullAccess = 'AWSResourceExplorerFullAccess',
    /** This managed policy provides full administrative access to AWS Certificate Manager Private CA resources in your AWS account for certificate-based authentication. */
    AmazonWorkspacesPCAAccess = 'AmazonWorkspacesPCAAccess',
    /** Provides access to AWS Resources managed or used by Amazon Grafana. */
    AmazonGrafanaServiceLinkedRolePolicy = 'aws-service-role/AmazonGrafanaServiceLinkedRolePolicy',
    /** Permissions CodeBuild needs to run a build for AWS Proton CodeBuild Provisioning. */
    AWSProtonCodeBuildProvisioningBasicAccess = 'AWSProtonCodeBuildProvisioningBasicAccess',
    /** Allows AWS Proton to manage Proton resource provisioning using CodeBuild and other AWS services on your behalf. */
    AWSProtonCodeBuildProvisioningServiceRolePolicy = 'aws-service-role/AWSProtonCodeBuildProvisioningServiceRolePolicy',
    /** The AmazonEventBridgeSchedulerFullAccess managed policy grants permissions to use all EventBridge Scheduler actions for schedules, and schedule groups. */
    AmazonEventBridgeSchedulerFullAccess = 'AmazonEventBridgeSchedulerFullAccess',
    /** The AmazonEventBridgeSchedulerReadOnlyAccess managed policy grants read-only permissions to view details about your schedules and schedule groups */
    AmazonEventBridgeSchedulerReadOnlyAccess = 'AmazonEventBridgeSchedulerReadOnlyAccess',
    /** Provides AWS Backup permission to restore a backup of SAP HANA on Amazon EC2 */
    AWSBackupRestoreAccessForSAPHANA = 'AWSBackupRestoreAccessForSAPHANA',
    /** This policy allows the AWS Backint agent to complete backup data transfer with AWS Backup Storage plane. Attach this policy to roles assumed by EC2 Instances running SAP HANA with the Backint agent. */
    AWSBackupDataTransferAccess = 'AWSBackupDataTransferAccess',
    /** A Service Linked Role for AWS ServiceCatalog to sync Provisioning Artifacts from source repositories */
    AWSServiceCatalogSyncServiceRolePolicy = 'aws-service-role/AWSServiceCatalogSyncServiceRolePolicy',
    /** Provides AWS Systems Manager for SAP with the permissions needed to manage and integrate SAP software with AWS. */
    AWSSSMForSAPServiceLinkedRolePolicy = 'aws-service-role/AWSSSMForSAPServiceLinkedRolePolicy',
    /** Provides full access to AWS Systems Manager for SAP service */
    AWSSystemsManagerForSAPFullAccess = 'AWSSystemsManagerForSAPFullAccess',
    /** Provides read only access to AWS Systems Manager for SAP service */
    AWSSystemsManagerForSAPReadOnlyAccess = 'AWSSystemsManagerForSAPReadOnlyAccess',
    /** Allows Amazon OpenSearch Ingestion Service to access other AWS services on your behalf. */
    AmazonOpenSearchIngestionServiceRolePolicy = 'aws-service-role/AmazonOpenSearchIngestionServiceRolePolicy',
    /** Allows VPC Reachability Analyzer to access AWS resources and integrate with AWS Organizations on your behalf. */
    AWSReachabilityAnalyzerServiceRolePolicy = 'aws-service-role/AWSReachabilityAnalyzerServiceRolePolicy',
    /** Allow Amazon OpenSearch Serverless to access other AWS services such as CloudWatch APIs on your behalf. */
    AmazonOpenSearchServerlessServiceRolePolicy = 'aws-service-role/AmazonOpenSearchServerlessServiceRolePolicy',
    /** This policy provides access to Amazon SSM operations required to use Application Migration Service (MGN) to execute custom post migration command SSM documents. Attach this policy to your IAM users or roles. */
    AWSApplicationMigrationSSMAccess = 'AWSApplicationMigrationSSMAccess',
    /** Provides Read Only access to CloudWatch Observability Access Manager */
    OAMReadOnlyAccess = 'OAMReadOnlyAccess',
    /** Provides full access to CloudWatch Observability Access Manager */
    OAMFullAccess = 'OAMFullAccess',
    /** Provides capabilities to manage Observability Access Manager links and establish sharing of X-Ray traces */
    AWSXrayCrossAccountSharingConfiguration = 'AWSXrayCrossAccountSharingConfiguration',
    /** Provides capabilities to manage Observability Access Manager links and establish sharing of CloudWatch Logs resources */
    CloudWatchLogsCrossAccountSharingConfiguration = 'CloudWatchLogsCrossAccountSharingConfiguration',
    /** Provides capabilities to manage Observability Access Manager links and establish sharing of CloudWatch resources */
    CloudWatchCrossAccountSharingConfiguration = 'CloudWatchCrossAccountSharingConfiguration',
    /** Allows Internet Monitor to access EC2, Workspaces, and CloudFront resources, and other required services on your behalf. */
    CloudWatchInternetMonitorServiceRolePolicy = 'aws-service-role/CloudWatchInternetMonitorServiceRolePolicy',
    /** This policy grants full administrative permissions to the Wickr service, including the Wickr administrative functions under the AWS Management Console. */
    AWSWickrFullAccess = 'AWSWickrFullAccess',
    /** Policy to enable AWS Verified Access service to provision endpoints on your behalf */
    AWSVPCVerifiedAccessServiceRolePolicy = 'aws-service-role/AWSVPCVerifiedAccessServiceRolePolicy',
    /** Provide read only access to Amazon Omics */
    AmazonOmicsReadOnlyAccess = 'AmazonOmicsReadOnlyAccess',
    /** This policy grants permissions to operate the Amazon Security Lake service on your behalf */
    SecurityLakeServiceLinkedRole = 'aws-service-role/SecurityLakeServiceLinkedRole',
    /** Amazon Security Lake creates IAM roles for third-party custom sources to write data to a data lake and for third-party subscribers to consume data from a data lake, and uses this policy when creating these roles to define the boundary of their permissions. */
    AmazonSecurityLakePermissionsBoundary = 'AmazonSecurityLakePermissionsBoundary',
    /** This AWS managed policy grants permissions needed to use all Amazon SageMaker Governance features. The policy also provides select access to related services (e.g., S3, KMS). */
    AmazonSageMakerModelGovernanceUseAccess = 'AmazonSageMakerModelGovernanceUseAccess',
    /** This policy grants permissions that allow full access to Amazon SageMaker Geospatial through the AWS Management Console and SDK. */
    AmazonSageMakerGeospatialFullAccess = 'service-role/AmazonSageMakerGeospatialFullAccess',
    /** This policy provide access to services that are commonly needed to use SageMaker geospatial. */
    AmazonSageMakerGeospatialExecutionRole = 'service-role/AmazonSageMakerGeospatialExecutionRole',
    /** Allows Amazon DocumentDB-Elastic to manage AWS resources on your behalf. */
    AmazonDocDBElasticServiceRolePolicy = 'aws-service-role/AmazonDocDB-ElasticServiceRolePolicy',
    /** Allows VPC Lattice to access AWS resources on your behalf. */
    AWSVpcLatticeServiceRolePolicy = 'aws-service-role/AWSVpcLatticeServiceRolePolicy',
    /** Provides full access to Amazon EventBridge Pipes. */
    AmazonEventBridgePipesFullAccess = 'AmazonEventBridgePipesFullAccess',
    /** Provides read-only access to Amazon EventBridge Pipes. */
    AmazonEventBridgePipesReadOnlyAccess = 'AmazonEventBridgePipesReadOnlyAccess',
    /** Provides read-only and operator (ability to Stop and Start running Pipes) access to Amazon EventBridge Pipes. */
    AmazonEventBridgePipesOperatorAccess = 'AmazonEventBridgePipesOperatorAccess',
    /** AWS GroundStation uses this service-linked role to invoke EC2 to find public IPv4 addresses */
    AWSServiceRoleForGroundStationDataflowEndpointGroupPolicy = 'aws-service-role/AWSServiceRoleForGroundStationDataflowEndpointGroupPolicy',
    /** Provides AWS BackupGateway permission to sync the metadata of Virtual Machines on your behalf */
    AWSBackupGatewayServiceRolePolicyForVirtualMachineMetadataSync = 'service-role/AWSBackupGatewayServiceRolePolicyForVirtualMachineMetadataSync',
    /** AWS Managed Services - policy to manage detective controls infrastructure */
    AWSManagedServicesDetectiveControlsConfigServiceRolePolicy = 'aws-service-role/AWSManagedServices_DetectiveControlsConfig_ServiceRolePolicy',
    /** Allows AWS License Manager Linux Subscriptions Service to manage resources on your behalf. */
    AWSLicenseManagerLinuxSubscriptionsServiceRolePolicy = 'aws-service-role/AWSLicenseManagerLinuxSubscriptionsServiceRolePolicy',
    /** This policy grants permissions that allow you to install an Outpost server on your on-premises network. */
    AWSOutpostsAuthorizeServerPolicy = 'AWSOutpostsAuthorizeServerPolicy',
    /** This policy is used by AWS Elastic Disaster Recovery (DRS) to recover source servers into a separate target account and to allow failing back. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryStagingAccountPolicyV2 = 'service-role/AWSElasticDisasterRecoveryStagingAccountPolicy_v2',
    /** Allows AWS Resource Groups to query the AWS services that own your resources to keep the group up-to-date */
    ResourceGroupsServiceRolePolicy = 'aws-service-role/ResourceGroupsServiceRolePolicy',
    /** Allows read-only access to AWS Clean Rooms resources and read-only access to related AWS Glue and Amazon CloudWatch Logs resources. */
    AWSCleanRoomsReadOnlyAccess = 'AWSCleanRoomsReadOnlyAccess',
    /** Allows full access to AWS Clean Rooms resources and access to related AWS Services. */
    AWSCleanRoomsFullAccess = 'AWSCleanRoomsFullAccess',
    /** Allows full access to AWS Clean Rooms resources except for querying in a collaboration and access to related AWS Services. */
    AWSCleanRoomsFullAccessNoQuerying = 'AWSCleanRoomsFullAccessNoQuerying',
    /** Allows AWS Health to enable the Health event processor feature. */
    AWSHealthEventProcessorServiceRolePolicy = 'aws-service-role/AWSHealth_EventProcessorServiceRolePolicy',
    /** Provides member access to Amazon Detective service and scoped access to the console UI dependencies. */
    AmazonDetectiveMemberAccess = 'AmazonDetectiveMemberAccess',
    /** Provides investigator access to Amazon Detective service and scoped access to the console UI dependencies. This policy grants permission to dive into Detective for investigation purposes and limited write access to Guardduty. */
    AmazonDetectiveInvestigatorAccess = 'AmazonDetectiveInvestigatorAccess',
    /** EC2 Instance Connect endpoint policy to manage EC2 Instance Connect endpoints created by the customer */
    Ec2InstanceConnectEndpoint = 'aws-service-role/Ec2InstanceConnectEndpoint',
    /** This policy defines the set of permissions allowed for unauthenticated identities for Cognito Identity Pools. This does not need to be attached to your unauth role, as Cognito Identity Service will automatically include it as a scoped down policy when creating credentials. The privileges to temporarily access other AWS resources through the enhanced flow will now be defined by the intersection of the role associated with the identity of the unauthenticated user provided by a service, and the privileges given in this managed policy that is owned by Cognito. */
    AmazonCognitoUnauthenticatedIdentities = 'AmazonCognitoUnauthenticatedIdentities',
    /** AWS Managed Services policy to enable AMS event processor feature. */
    AWSManagedServicesEventsServiceRolePolicy = 'aws-service-role/AWSManagedServices_EventsServiceRolePolicy',
    /** Provides certificate user access to AWS Private Certificate Authority */
    AWSPrivateCAUser = 'AWSPrivateCAUser',
    /** Provides full access to AWS Private Certificate Authority */
    AWSPrivateCAFullAccess = 'AWSPrivateCAFullAccess',
    /** Provides privileged certificate user access to AWS Private Certificate Authority */
    AWSPrivateCAPrivilegedUser = 'AWSPrivateCAPrivilegedUser',
    /** Provides read only access to AWS Private Certificate Authority */
    AWSPrivateCAReadOnly = 'AWSPrivateCAReadOnly',
    /** Provides auditor access to AWS Private Certificate Authority */
    AWSPrivateCAAuditor = 'AWSPrivateCAAuditor',
    /** Allows AWS IoT RoboRunner to manage associated AWS Resources on behalf of the customer. */
    AWSIotRoboRunnerServiceRolePolicy = 'aws-service-role/AWSIotRoboRunnerServiceRolePolicy',
    /** Provides full access to Amazon Omics and other required AWS Services. This policy allows the user to view and accept RAM share invitations to access resources outside of the user's AWS account. */
    AmazonOmicsFullAccess = 'AmazonOmicsFullAccess',
    /** AWSSupplyChainFederationAdminAccess provides AWS Supply Chain federated users access to the AWS Supply Chain application, including the required permissions to perform actions within the AWS Supply Chain application. The policy provides administrative permissions over IAM Identity Center users and groups and is attached to a role created by AWS Supply Chain on your behalf. You shouldn't attach AWSSupplyChainFederationAdminAccess policy to any other IAM entities. */
    AWSSupplyChainFederationAdminAccess = 'service-role/AWSSupplyChainFederationAdminAccess',
    /** Provides Organizations access to manage Delegated administrator for Amazon Detective and scoped access to the console UI dependencies. This also grants permission to create a service-linked role for Detective. */
    AmazonDetectiveOrganizationsAccess = 'AmazonDetectiveOrganizationsAccess',
    /** Allows Amazon Chime SDK Messaging to access AWS resources and enable messaging functionality */
    AmazonChimeSDKMessagingServiceRolePolicy = 'aws-service-role/AmazonChimeSDKMessagingServiceRolePolicy',
    /** Allows DMS Fleet Advisor to manage CloudWatch metrics on your behalf. */
    AWSDMSFleetAdvisorServiceRolePolicy = 'aws-service-role/AWSDMSFleetAdvisorServiceRolePolicy',
    /** Allows Amazon Connect Customer Profiles to access AWS services and resources on your behalf. */
    CustomerProfilesServiceLinkedRolePolicy = 'aws-service-role/CustomerProfilesServiceLinkedRolePolicy',
    /** Allows DataSync Discovery to integrate with other AWS services on your behalf. */
    AWSDataSyncDiscoveryServiceRolePolicy = 'aws-service-role/AWSDataSyncDiscoveryServiceRolePolicy',
    /** This policy grants permission to register MediaConnect Gateway Instances to a MediaConnect Gateway. */
    MediaConnectGatewayInstanceRolePolicy = 'MediaConnectGatewayInstanceRolePolicy',
    /** Allows AWS Managed Services to read the values of the tags on AWS resources */
    AWSManagedServicesContactsServiceRolePolicy = 'aws-service-role/AWSManagedServices_ContactsServiceRolePolicy',
    /** Provides permissions for Amazon SageMaker Canvas to use AI services to support ready to use AI solutions. This policy will add more mutating permissions for services as Amazon SageMaker Canvas adds support. */
    AmazonSageMakerCanvasAIServicesAccess = 'AmazonSageMakerCanvasAIServicesAccess',
    /** This role grants permissions to CodeWhisperer to access data in your account to calculate billing, provides access to create and access security reports in Amazon CodeGuru, and emit data to CloudWatch. */
    AWSServiceRoleForCodeWhispererPolicy = 'aws-service-role/AWSServiceRoleForCodeWhispererPolicy',
    /** This policy grants access to Amazon CloudWatch and the dependencies needed to use CloudWatch as a datasource within Amazon Managed Grafana. */
    AmazonGrafanaCloudWatchAccess = 'service-role/AmazonGrafanaCloudWatchAccess',
    /** Provides the Dataflow Endpoint Instance permissions to use the AWS Ground Station Agent */
    AWSGroundStationAgentInstancePolicy = 'AWSGroundStationAgentInstancePolicy',
    /** Provides access to invoking Amazon VPC Lattice services. */
    VPCLatticeServicesInvokeAccess = 'VPCLatticeServicesInvokeAccess',
    /** Provides read-only access to Amazon VPC Lattice via the AWS Management Console, and limited access to dependency services. */
    VPCLatticeReadOnlyAccess = 'VPCLatticeReadOnlyAccess',
    /** Provides full access to Amazon VPC Lattice and access to dependency services. */
    VPCLatticeFullAccess = 'VPCLatticeFullAccess',
    /** Grants full access to AWS Migration Hub Refactor Spaces and other AWS related services except AWS Transit Gateway and EC2 security groups not required when using environments without a network bridge. This policy also excludes permissions required for AWS Lambda and AWS Resource Access Manager as they can be scoped down based on tags. */
    AWSMigrationHubRefactorSpacesEnvironmentsWithoutBridgesFullAccess = 'AWSMigrationHubRefactorSpaces-EnvironmentsWithoutBridgesFullAccess',
    /** The default policy that enables access to AWS Services and Resources used or managed by MediaConnect. */
    AWSMediaConnectServicePolicy = 'aws-service-role/AWSMediaConnectServicePolicy',
    /** Policy which allows AWS Proton to sync your service, environment and component definitions from your git repository to AWS Proton. */
    AWSProtonServiceGitSyncServiceRolePolicy = 'aws-service-role/AWSProtonServiceGitSyncServiceRolePolicy',
    /** A Service Linked Role Policy for AWS ServiceCatalog to sync with AWS Organizations organization structure */
    AWSServiceCatalogOrgsDataSyncServiceRolePolicy = 'aws-service-role/AWSServiceCatalogOrgsDataSyncServiceRolePolicy',
    /** This is a new managed policy for Model Registry in Sagemaker. This policy is a standalone policy that can be attached to the user role to access Model Registry related functionalities in Sagemaker. */
    AmazonSageMakerModelRegistryFullAccess = 'AmazonSageMakerModelRegistryFullAccess',
    /** Allows AWS User Notifications to call AWS services on your behalf. */
    AWSUserNotificationsServiceLinkedRolePolicy = 'aws-service-role/AWSUserNotificationsServiceLinkedRolePolicy',
    /** Allows Amazon CodeCatalyst to create, update, and resolve AWS Support cases on your behalf. */
    AmazonCodeCatalystSupportAccess = 'service-role/AmazonCodeCatalystSupportAccess',
    /** Provides read only access to Amazon CodeCatalyst */
    AmazonCodeCatalystReadOnlyAccess = 'AmazonCodeCatalystReadOnlyAccess',
    /** Provides full access to Amazon CodeCatalyst */
    AmazonCodeCatalystFullAccess = 'AmazonCodeCatalystFullAccess',
    /** Allows the OpenShift Cloud Network Config Controller Operator to provision and manage networking resources for use by the Red Hat OpenShift Service on AWS (ROSA) cluster networking overlay. The OpenShift Cloud Network Operator interfaces with AWS APIs on behalf of the network plugins via CustomResourceDefinitions. The operator uses these policy permissions to manage private IP addresses for Amazon EC2 instances as part of the ROSA cluster. */
    ROSACloudNetworkConfigOperatorPolicy = 'service-role/ROSACloudNetworkConfigOperatorPolicy',
    /** Allows Red Hat OpenShift Service on AWS (ROSA) worker nodes in your account read-only access to Amazon EC2 instances and AWS Regions for compute node lifecycle management. */
    ROSAWorkerInstancePolicy = 'service-role/ROSAWorkerInstancePolicy',
    /** Allows the OpenShift Amazon EBS Container Storage Interface (CSI) Driver Operator to install and maintain the Amazon EBS CSI driver on a Red Hat OpenShift Service on AWS (ROSA) cluster. The Amazon EBS CSI driver allows ROSA clusters to manage the lifecycle of Amazon EBS volumes for persistent volumes. */
    ROSAAmazonEBSCSIDriverOperatorPolicy = 'service-role/ROSAAmazonEBSCSIDriverOperatorPolicy',
    /** Allows the OpenShift Ingress Operator to provision and manage load balancers and domain name system (DNS) configurations for Red Hat OpenShift Service on AWS (ROSA) clusters. The policy allows read access to tag values, which the operator filters for Route 53 resources to discover hosted zones. */
    ROSAIngressOperatorPolicy = 'service-role/ROSAIngressOperatorPolicy',
    /** Allows Red Hat OpenShift Service on AWS (ROSA) control plane to manage ROSA cluster Amazon EC2 and Amazon Route 53 resources. */
    ROSAControlPlaneOperatorPolicy = 'service-role/ROSAControlPlaneOperatorPolicy',
    /** Provides read only access to the Amazon OpenSearch Ingestion Service */
    AmazonOpenSearchIngestionReadOnlyAccess = 'AmazonOpenSearchIngestionReadOnlyAccess',
    /** Allows Amazon OpenSearch Ingestion to access other AWS services on your behalf. */
    AmazonOpenSearchIngestionFullAccess = 'AmazonOpenSearchIngestionFullAccess',
    /** Allows WellArchitected to access AWS services and resources that relate to WellArchitected resources on behalf of customers. */
    AWSWellArchitectedDiscoveryServiceRolePolicy = 'aws-service-role/AWSWellArchitectedDiscoveryServiceRolePolicy',
    /** Allows the ROSA Kubernetes controller to manage Amazon EC2, Elastic Load Balancing (ELB), and AWS Key Management Service (KMS) resources for a ROSA cluster. */
    ROSAKubeControllerPolicy = 'service-role/ROSAKubeControllerPolicy',
    /** Allows the built-in ROSA AWS Encryption Provider to manage AWS Key Management Service (KMS) keys to support etcd data encryption using a customer provided AWS KMS key. The policy allows encryption and decryption of data using KMS keys. */
    ROSAKMSProviderPolicy = 'service-role/ROSAKMSProviderPolicy',
    /** Allows the OpenShift Image Registry Operator to provision and manage Amazon S3 buckets and objects for use by the Red Hat OpenShift Service on AWS (ROSA) in-cluster image registry to satisfy ROSA storage requirements. The OpenShift Image Registry Operator installs and maintains the internal registry of a Red Hat OpenShift cluster. */
    ROSAImageRegistryOperatorPolicy = 'service-role/ROSAImageRegistryOperatorPolicy',
    /** This policy is attached to the role IAMRoleForReachabilityAnalyzerCrossAccountResourceAccess. This role is deployed to the member accounts in an organization when the management account enables trusted access for Reachability Analyzer. It provides permissions to view resources from across your organization using the Reachability Analyzer console. */
    AmazonVPCReachabilityAnalyzerPathComponentReadPolicy = 'AmazonVPCReachabilityAnalyzerPathComponentReadPolicy',
    /** Permissions required by Keyspaces for cross-region data replication */
    KeyspacesReplicationServiceRolePolicy = 'aws-service-role/KeyspacesReplicationServiceRolePolicy',
    /** Provides access required for working with Amazon CodeGuru Security scans. */
    AmazonCodeGuruSecurityScanAccess = 'AmazonCodeGuruSecurityScanAccess',
    /** Provides full access to Amazon CodeGuru Security. */
    AmazonCodeGuruSecurityFullAccess = 'AmazonCodeGuruSecurityFullAccess',
    /** Policy to enable access to AWS Service and Resources used or managed by Amazon FinSpace */
    AWSFinSpaceServiceRolePolicy = 'aws-service-role/AWSFinSpaceServiceRolePolicy',
    /** This policy allows AWS Elastic Disaster Recovery (DRS) to support cross-account replication and cross-account failback. */
    AWSElasticDisasterRecoveryCrossAccountReplicationPolicy = 'service-role/AWSElasticDisasterRecoveryCrossAccountReplicationPolicy',
    /** Grants AWS DMS Serverless permissions to create and manage DMS resources in your account on your behalf */
    AWSDMSServerlessServiceRolePolicy = 'aws-service-role/AWSDMSServerlessServiceRolePolicy',
    /** Provides full access to Amazon Security Lake and related services needed to administer Security Lake. */
    AmazonSecurityLakeAdministrator = 'AmazonSecurityLakeAdministrator',
    /** Provides ROSA site reliability engineering (SRE) the permissions needed to initially observe, diagnose, and support AWS resources associated with Red Hat OpenShift Service on AWS (ROSA) clusters, including the ability to change ROSA cluster node state. */
    ROSASRESupportPolicy = 'service-role/ROSASRESupportPolicy',
    /** Provides full access to Amazon DocumentDB Elastic Clusters and other required permissions for its dependencies including EC2, KMS, SecretsManager, CloudWatch and IAM. */
    AmazonDocDBElasticFullAccess = 'AmazonDocDBElasticFullAccess',
    /** Allows AWS Control Tower to call AWS services that provide automated account configuration and centralized governance on your behalf. */
    AWSControlTowerAccountServiceRolePolicy = 'aws-service-role/AWSControlTowerAccountServiceRolePolicy',
    /** Allows the Red Hat OpenShift Service on AWS (ROSA) installer to manage AWS resources that support ROSA cluster installation. This includes managing instance profiles for ROSA worker nodes. */
    ROSAInstallerPolicy = 'service-role/ROSAInstallerPolicy',
    /** Provides read-only access to Amazon DocDB-Elastic and CloudWatch metrics. */
    AmazonDocDBElasticReadOnlyAccess = 'AmazonDocDBElasticReadOnlyAccess',
    /** Allows Red Hat OpenShift Service on AWS (ROSA) to manage cluster EC2 instances as worker nodes, including permission to configure security groups and tag instances and volumes. This policy also allows for the use of EC2 instances with disk encryption provided by AWS Key Management Service (KMS) keys. */
    ROSANodePoolManagementPolicy = 'service-role/ROSANodePoolManagementPolicy',
    /** This policy allows AWS Elastic Disaster Recovery (DRS) to support network replication. */
    AWSElasticDisasterRecoveryNetworkReplicationPolicy = 'service-role/AWSElasticDisasterRecoveryNetworkReplicationPolicy',
    /** Provides permissions to describe AWS resources, run Reachability Analyzer, and create or delete tags on Network Insights Path and Network Insights Analysis. */
    AmazonVPCReachabilityAnalyzerFullAccessPolicy = 'AmazonVPCReachabilityAnalyzerFullAccessPolicy',
    /** Provides readonly access to Amazon Macie. */
    AmazonMacieReadOnlyAccess = 'AmazonMacieReadOnlyAccess',
    /** Provides permissions to describe AWS resources, run Network Access Analyzer, and create or delete tags on Network Insights Access Scope and Network Insights Access Scope Analysis. */
    AmazonVPCNetworkAccessAnalyzerFullAccessPolicy = 'AmazonVPCNetworkAccessAnalyzerFullAccessPolicy',
    /** This policy grants read-only permissions that allow the WAL service for Amazon EMR to find and return the status of a cluster */
    EMRDescribeClusterPolicyForEMRWAL = 'aws-service-role/EMRDescribeClusterPolicyForEMRWAL',
    /** Provides AppFabric access to AWS resources on your behalf */
    AWSAppFabricServiceRolePolicy = 'aws-service-role/AWSAppFabricServiceRolePolicy',
    /** Policy for AWS Resilience Hub service role which allows access to other AWS services in order to execute assessment. */
    AWSResilienceHubAsssessmentExecutionPolicy = 'AWSResilienceHubAsssessmentExecutionPolicy',
    /** Provides full access to the AWS AppFabric service and read only access to dependent services such as S3, Kinesis, KMS. */
    AWSAppFabricFullAccess = 'AWSAppFabricFullAccess',
    /** Provides read only access to the AWS AppFabric */
    AWSAppFabricReadOnlyAccess = 'AWSAppFabricReadOnlyAccess',
    /** This policy defines the set of permissions allowed for unauthenticated identities for Cognito Identity Pools. This policy is not intended to be used as a stand alone permission policy. It is used as a guardrail against overly permissive policies attached for roles in an identity pool. Do not attach this policy to any roles, as Cognito Identity Service will automatically include it as a scoped down policy when creating credentials. The privileges to temporarily access other AWS resources through the enhanced flow will now be defined by the intersection of the role associated with the identity of the unauthenticated user provided by a service, and the privileges given in this managed policy that is owned by Cognito. */
    AmazonCognitoUnAuthedIdentitiesSessionPolicy = 'AmazonCognitoUnAuthedIdentitiesSessionPolicy',
    /** Provides management access to EFS resources and read access to EC2 */
    AmazonEFSCSIDriverPolicy = 'service-role/AmazonEFSCSIDriverPolicy',
    /** Provides full access to AWS Elemental MediaPackageV2 resources. */
    AWSElementalMediaPackageV2FullAccess = 'AWSElementalMediaPackageV2FullAccess',
    /** Provides read-only access to AWS Elemental MediaPackageV2 resources. */
    AWSElementalMediaPackageV2ReadOnly = 'AWSElementalMediaPackageV2ReadOnly',
    /** Provides full access to AWS Health Imaging service. */
    AWSHealthImagingFullAccess = 'AWSHealthImagingFullAccess',
    /** Provides read only access to AWS Health Imaging service. */
    AWSHealthImagingReadOnlyAccess = 'AWSHealthImagingReadOnlyAccess',
    /** Provides full access to CloudWatch. */
    CloudWatchFullAccessV2 = 'CloudWatchFullAccessV2',
    /** Service role policy used by the AWS Lambda within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Secrets Manager and others. */
    AmazonSageMakerPartnerServiceCatalogProductsLambdaServiceRolePolicy = 'service-role/AmazonSageMakerPartnerServiceCatalogProductsLambdaServiceRolePolicy',
    /** Service role policy used by the AWS APIGateway within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Lambda and others. */
    AmazonSageMakerPartnerServiceCatalogProductsApiGatewayServiceRolePolicy = 'service-role/AmazonSageMakerPartnerServiceCatalogProductsApiGatewayServiceRolePolicy',
    /** Service role policy used by the AWS CloudFormation within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including Lambda, APIGateway and others. */
    AmazonSageMakerPartnerServiceCatalogProductsCloudFormationServiceRolePolicy = 'service-role/AmazonSageMakerPartnerServiceCatalogProductsCloudFormationServiceRolePolicy',
    /** Use in the IAM service role passed to the SSM Automation document AWSRefactorSpaces-CreateResources to grant permissions required to run the automation. The policy grants read/write access to EC2 tags in order to track automation progress. When the Refactor Spaces environment's network bridge is enabled, the automation also adds the environment's security group to the EC2 instance to permit traffic from other Refactor Spaces services in the environment. The policy also grants access to the Application Migration Service's post launch actions SSM parameters. */
    AWSMigrationHubRefactorSpacesSSMAutomationPolicy = 'service-role/AWSMigrationHubRefactorSpaces-SSMAutomationPolicy',
    /** Provides full access to RDS Performance Insights via the AWS Management Console */
    AmazonRDSPerformanceInsightsFullAccess = 'AmazonRDSPerformanceInsightsFullAccess',
    /** Provides console full access to AWS Entity Resolution and related services. */
    AWSEntityResolutionConsoleFullAccess = 'AWSEntityResolutionConsoleFullAccess',
    /** Provides read-only access to AWS Entity Resolution via the AWS Management Console. */
    AWSEntityResolutionConsoleReadOnlyAccess = 'AWSEntityResolutionConsoleReadOnlyAccess',
    /** Allows AWS Artifact to gather information about an organization via AWS Organizations service. */
    AWSArtifactServiceRolePolicy = 'aws-service-role/AWSArtifactServiceRolePolicy',
    /** This policy allows installing and using the AWS Replication Agent, which is used by AWS Application Migration Service (AWS MGN) to migrate source servers that run on EC2 (cross-Region or cross-AZ). An IAM role with this policy should be attached (as an EC2 Instance Profile) to the EC2 Instances. */
    AWSApplicationMigrationServiceEc2InstancePolicy = 'AWSApplicationMigrationServiceEc2InstancePolicy',
    /** Full access to AWS Launch wizard and other required services. */
    AmazonLaunchWizardFullAccessV2 = 'AmazonLaunchWizardFullAccessV2',
    /** Allows CloudWatch to access RDS Performance Insights metrics on your behalf */
    AWSServiceRoleForCloudWatchMetricsDbPerfInsightsServiceRolePolicy = 'aws-service-role/AWSServiceRoleForCloudWatchMetrics_DbPerfInsightsServiceRolePolicy',
    /** Amazon DataZone creates IAM roles for Environments to perform data analytics actions, and uses this policy when creating these roles to define the boundary of their permissions. */
    AmazonDataZoneEnvironmentRolePermissionsBoundary = 'AmazonDataZoneEnvironmentRolePermissionsBoundary',
    /** Provide read only access to Amazon Keyspaces and related AWS services. */
    AmazonKeyspacesReadOnlyAccessV2 = 'AmazonKeyspacesReadOnlyAccess_v2',
    /** This policy allows you to use Amazon SSM and additional services required permissions to run post-launch actions in AWS Elastic Disaster Recovery (AWS DRS). Attach this policy to your IAM roles or users. */
    AWSElasticDisasterRecoveryLaunchActionsPolicy = 'AWSElasticDisasterRecoveryLaunchActionsPolicy',
    /** Provides full access to Amazon DataZone via the AWS Management Console as well as limited access to related services that are required by it. */
    AmazonDataZoneFullAccess = 'AmazonDataZoneFullAccess',
    /** This policy gives Amazon DataZone permissions to publish Amazon Redshift data to the catalog. It also gives Amazon DataZone permissions to grant access or revoke access to Amazon Redshift or Amazon Redshift Serverless published assets in the catalog. */
    AmazonDataZoneRedshiftManageAccessRolePolicy = 'service-role/AmazonDataZoneRedshiftManageAccessRolePolicy',
    /** Amazon DataZone is a data management service that enables you to catalog, discover, govern, share, and analyze your data. With Amazon DataZone, you can share and access your data across accounts and supported regions. Amazon DataZone simplifies your experience across AWS services, including, but not limited to, Amazon Redshift, Amazon Athena, AWS Glue, and AWS Lake Formation. */
    AmazonDataZoneRedshiftGlueProvisioningPolicy = 'AmazonDataZoneRedshiftGlueProvisioningPolicy',
    /** The policy grants permissions to allow Amazon DataZone to enable publishing and access grants to data. */
    AmazonDataZoneGlueManageAccessRolePolicy = 'service-role/AmazonDataZoneGlueManageAccessRolePolicy',
    /** Provides full access to Amazon DataZone, but does not allow the management of domains, users, or associated accounts. */
    AmazonDataZoneFullUserAccess = 'AmazonDataZoneFullUserAccess',
    /** Default policy for the Amazon DataZone's DomainExecutionRole service role. This role is used by Amazon DataZone to catalog, discover, govern, share, and analyze data in the Amazon DataZone domain. */
    AmazonDataZoneDomainExecutionRolePolicy = 'service-role/AmazonDataZoneDomainExecutionRolePolicy',
    /** Allow Amazon S3 on Outposts service to manage EC2 network resources on your behalf. */
    AWSS3OnOutpostsServiceRolePolicy = 'aws-service-role/AWSS3OnOutpostsServiceRolePolicy',
    /** Allows Amazon SageMaker Canvas to create, manage and view endpoint details for endpoints created through Canvas. Allows Amazon SageMaker Canvas to retrieve endpoint invocation metrics from CloudWatch. */
    AmazonSageMakerCanvasDirectDeployAccess = 'service-role/AmazonSageMakerCanvasDirectDeployAccess',
    /** Provides Amplify full access permissions to deploy Amplify backend resources (AWS AppSync, Amazon Cognito, Amazon S3 and other related services) via the AWS Cloud Development Kit (AWS CDK) */
    AmplifyBackendDeployFullAccess = 'service-role/AmplifyBackendDeployFullAccess',
    /** Allows Amazon Connect to synchronize AWS resources across regions on your behalf. */
    AmazonConnectSynchronizationServiceRolePolicy = 'aws-service-role/AmazonConnectSynchronizationServiceRolePolicy',
    /** Provides full access to Amazon SageMaker resources and operations for data preparation in Canvas. The policy also provides select access to related services (e.g., S3, IAM, KMS, RDS, CloudWatch Logs, Redshift, Athena, Glue, EventBridge, Secrets Manager). This policy should be attached to the Amazon SageMaker Domain/User Profile execution role. */
    AmazonSageMakerCanvasDataPrepFullAccess = 'AmazonSageMakerCanvasDataPrepFullAccess',
    /** Provides Amazon Data Lifecycle Manager permission to perform the Systems Manager actions required to run pre and post scripts on all Amazon EC2 instances. */
    AWSDataLifecycleManagerSSMFullAccess = 'service-role/AWSDataLifecycleManagerSSMFullAccess',
    /** Provides the list of actions that are allowed for roles assumed with the IAM Identity Center identity context. AWS Security Token Service (AWS STS) automatically attaches this policy to assumed roles. The identity context is passed as ProvidedContext. */
    AWSIAMIdentityCenterAllowListForIdentityContext = 'AWSIAMIdentityCenterAllowListForIdentityContext',
    /** Policy grants permission to CloudWatch Application Signals to collect monitoring and tagging data from other relevant AWS services. */
    CloudWatchApplicationSignalsServiceRolePolicy = 'aws-service-role/CloudWatchApplicationSignalsServiceRolePolicy',
    /** Provides access to associate and dissociate partner central users with IAM roles */
    PartnerCentralAccountManagementUserRoleAssociation = 'PartnerCentralAccountManagementUserRoleAssociation',
    /** This policy contains permissions for testing restores and for cleaning up resources created during tests. */
    AWSServiceRolePolicyForBackupRestoreTesting = 'aws-service-role/AWSServiceRolePolicyForBackupRestoreTesting',
    /** Grants Incident Manager permissions to call other AWS services as a part of managing an incident. */
    AWSIncidentManagerIncidentAccessServiceRolePolicy = 'AWSIncidentManagerIncidentAccessServiceRolePolicy',
    /** Allows AWS IoT TwinMaker to call other AWS services and to sync their resources on your behalf. */
    AWSIoTTwinMakerServiceRolePolicy = 'aws-service-role/AWSIoTTwinMakerServiceRolePolicy',
    /** This policy grants administrative permissions to Resource Explorer and grants read-only permissions to other AWS services to support this access. The AWS Organizations administrator needs these permissions to setup and manage multi-account search in the console. */
    AWSResourceExplorerOrganizationsAccess = 'AWSResourceExplorerOrganizationsAccess',
    /** Provides re:Post Private access to publish CloudWatch metrics data */
    AWSrePostPrivateCloudWatchAccess = 'aws-service-role/AWSrePostPrivateCloudWatchAccess',
    /** Allows AWS Marketplace to create and manage seller deployment parameters for the products that you subscribe to on AWS Marketplace. */
    AWSMarketplaceDeploymentServiceRolePolicy = 'aws-service-role/AWSMarketplaceDeploymentServiceRolePolicy',
    /** Policy which allows AWS Code Connections to sync content from your git repository */
    AWSGitSyncServiceRolePolicy = 'aws-service-role/AWSGitSyncServiceRolePolicy',
    /** The EC2ImageBuilderLifecycleExecutionPolicy policy grants permissions for Image Builder to perform actions such as deprecate or delete Image Builder image resources and their underlying resources (AMIs, snapshots) to support automated rules for image lifecycle management tasks. */
    EC2ImageBuilderLifecycleExecutionPolicy = 'service-role/EC2ImageBuilderLifecycleExecutionPolicy',
    /** Grants Amazon Inspector access to AWS Services needed to perform agent-less security assessments */
    AmazonInspector2AgentlessServiceRolePolicy = 'aws-service-role/AmazonInspector2AgentlessServiceRolePolicy',
    /** Allows Cost Optimization Hub to retrieve organization information and collect optimization-related data and metadata. */
    CostOptimizationHubServiceRolePolicy = 'aws-service-role/CostOptimizationHubServiceRolePolicy',
    /** Provides access to AWS Resources managed or used by Amazon Managed Service for Prometheus Collector */
    AmazonPrometheusScraperServiceRolePolicy = 'aws-service-role/AmazonPrometheusScraperServiceRolePolicy',
    /** This policy allows the re:Post Space service to create, manage, and resolve Support cases that are created through the Space application. */
    AWSRepostSpaceSupportOperationsPolicy = 'AWSRepostSpaceSupportOperationsPolicy',
    /** This policy provides full access to all public APIs of AWS Elastic Disaster Recovery (AWS DRS), as well as all public APIs in other AWS services used by AWS DRS Console. Attach this policy to your users or roles. */
    AWSElasticDisasterRecoveryConsoleFullAccessV2 = 'AWSElasticDisasterRecoveryConsoleFullAccess_v2',
    /** This policy grants administrative permissions that allow access to all Amazon One Enterprise resources and operations. */
    AmazonOneEnterpriseFullAccess = 'AmazonOneEnterpriseFullAccess',
    /** This policy grants read only permissions to all Amazon One Enterprise resources and operations. */
    AmazonOneEnterpriseReadOnlyAccess = 'AmazonOneEnterpriseReadOnlyAccess',
    /** This policy grants limited read and write permissions that allow device installation and activation. */
    AmazonOneEnterpriseInstallerAccess = 'AmazonOneEnterpriseInstallerAccess',
    /** Provides full access to enable interactions with Amazon Q */
    AmazonQFullAccess = 'AmazonQFullAccess',
    /** Provides Cloudwatch access to publish operational and usage metrics and logs for Amazon Neptune */
    AWSServiceRoleForNeptuneGraphPolicy = 'aws-service-role/AWSServiceRoleForNeptuneGraphPolicy',
    /** This policy grants permissions commonly needed to use Amazon SageMaker Cluster. */
    AmazonSageMakerClusterInstanceRolePolicy = 'AmazonSageMakerClusterInstanceRolePolicy',
    /** Provides administrative access for ARC zonal shift practice runs, and access to CloudWatch alarm statuses to monitor practice runs. */
    AWSZonalAutoshiftPracticeRunSLRPolicy = 'aws-service-role/AWSZonalAutoshiftPracticeRunSLRPolicy',
    /** Allows read-only access to AWS Clean Rooms ML resources and read-only access to related AWS Clean Rooms resources */
    AWSCleanRoomsMLReadOnlyAccess = 'AWSCleanRoomsMLReadOnlyAccess',
    /** Allows full access to AWS Clean Rooms ML resources and access to related AWS Services. */
    AWSCleanRoomsMLFullAccess = 'AWSCleanRoomsMLFullAccess',
    /** Provides read only access to all Amazon Neptune Analytics resources along with read only permissions for dependent services. */
    NeptuneGraphReadOnlyAccess = 'NeptuneGraphReadOnlyAccess',
    /** Provides read-only access to IVS Low-Latency and Real-Time streaming APIs */
    IVSReadOnlyAccess = 'IVSReadOnlyAccess',
    /** Grants permissions to Amazon MSK Replicator to replicate data between MSK Clusters. */
    AWSMSKReplicatorExecutionRole = 'service-role/AWSMSKReplicatorExecutionRole',
    /** Provides full access to Amazon Bedrock as well as limited access to related services that are required by it */
    AmazonBedrockFullAccess = 'AmazonBedrockFullAccess',
    /** Provides read only access to Amazon Bedrock */
    AmazonBedrockReadOnly = 'AmazonBedrockReadOnly',
    /** This managed policy provides read-only access to Cost Optimization Hub. */
    CostOptimizationHubReadOnlyAccess = 'CostOptimizationHubReadOnlyAccess',
    /** Provides full access to Interactive Video Service (IVS), Also included permissions for dependent services, needed for full access to the ivs console. */
    IVSFullAccess = 'IVSFullAccess',
    /** This managed policy provides admin access to Cost Optimization Hub. */
    CostOptimizationHubAdminAccess = 'CostOptimizationHubAdminAccess',
    /** Allows CloudWatch Network Monitor to access and manage EC2 and VPC resources, publish data to CloudWatch and access other required services on your behalf. */
    CloudWatchNetworkMonitorServiceRolePolicy = 'aws-service-role/CloudWatchNetworkMonitorServiceRolePolicy',
    /** Provides access to Amazon OpenSearch Dashboards Service to access other AWS services such as CloudWatch on your behalf */
    AmazonOpenSearchDashboardsServiceRolePolicy = 'aws-service-role/AmazonOpenSearchDashboardsServiceRolePolicy',
    /** Provides read-only access to the AWS Artifact service reports. */
    AWSArtifactReportsReadOnlyAccess = 'AWSArtifactReportsReadOnlyAccess',
    /** Provides ability to update IAM Identity Center (IdC) user and group permissions for Amazon Managed Grafana workspaces. */
    AWSGrafanaWorkspacePermissionManagementV2 = 'AWSGrafanaWorkspacePermissionManagementV2',
    /** Provides access to other AWS service resources required to manage volumes associated with ECS workloads on your behalf. */
    AmazonECSInfrastructureRolePolicyForVolumes = 'service-role/AmazonECSInfrastructureRolePolicyForVolumes',
    /** Provides administrative access to Private Certificate Authority, AWS Secrets Manager and other AWS Services required to manage ECS Service Connect TLS features on your behalf. */
    AmazonECSInfrastructureRolePolicyForServiceConnectTransportLayerSecurity = 'service-role/AmazonECSInfrastructureRolePolicyForServiceConnectTransportLayerSecurity',
    /** Policy for Amazon SecurityLake meta store manager lambda which allows the access to cloudwatch, S3, Glue and SQS. */
    AmazonSecurityLakeMetastoreManager = 'service-role/AmazonSecurityLakeMetastoreManager',
    /** This is a managed policy that customer should attach to their roles to communicate with inspector service for CIS scans */
    AmazonInspector2ManagedCisPolicy = 'AmazonInspector2ManagedCisPolicy',
    /** Allows Amazon Lex to replicate Lex resources across regions on your behalf. */
    AmazonLexReplicationPolicy = 'aws-service-role/AmazonLexReplicationPolicy',
    /** This policy grants permissions to use Amazon Bedrock in SageMaker Canvas by providing access to downstream services such as S3. */
    AmazonSageMakerCanvasBedrockAccess = 'AmazonSageMakerCanvasBedrockAccess',
    /** Provides permissions to describe and update Private Marketplace resources and describe AWS Organizations */
    AWSServiceRoleForPrivateMarketplaceAdminPolicy = 'aws-service-role/AWSServiceRoleForPrivateMarketplaceAdminPolicy'
}
