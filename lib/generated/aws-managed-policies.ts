export enum AwsManagedPolicies {
    /** Provides full access to AWS services and resources. */
    AdministratorAccess = 'arn:aws:iam::aws:policy/AdministratorAccess',
    /** Provides full access to AWS services and resources, but does not allow management of Users and groups. */
    PowerUserAccess = 'arn:aws:iam::aws:policy/PowerUserAccess',
    /** Provides read-only access to AWS services and resources. */
    ReadOnlyAccess = 'arn:aws:iam::aws:policy/ReadOnlyAccess',
    /** Provides access to AWS CloudFormation via the AWS Management Console. */
    AWSCloudFormationReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSCloudFormationReadOnlyAccess',
    /** Provides full access to the CloudFront console plus the ability to list Amazon S3 buckets via the AWS Management Console. */
    CloudFrontFullAccess = 'arn:aws:iam::aws:policy/CloudFrontFullAccess',
    /** Provides full access to all CloudHSM resources. */
    AWSCloudHSMFullAccess = 'arn:aws:iam::aws:policy/AWSCloudHSMFullAccess',
    /** Provides read only access to all CloudHSM resources. */
    AWSCloudHSMReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSCloudHSMReadOnlyAccess',
    /** Provides full access to Resource Groups and Tag Editor. */
    ResourceGroupsandTagEditorFullAccess = 'arn:aws:iam::aws:policy/ResourceGroupsandTagEditorFullAccess',
    /** Provides access to use Resource Groups and Tag Editor, but does not allow editing of tags via the Tag Editor. */
    ResourceGroupsandTagEditorReadOnlyAccess = 'arn:aws:iam::aws:policy/ResourceGroupsandTagEditorReadOnlyAccess',
    /** Provides access to CloudFront distribution configuration information and list distributions via the AWS Management Console. */
    CloudFrontReadOnlyAccess = 'arn:aws:iam::aws:policy/CloudFrontReadOnlyAccess',
    /** Provides full access to the Amazon CloudSearch configuration service. */
    CloudSearchFullAccess = 'arn:aws:iam::aws:policy/CloudSearchFullAccess',
    /** Provides read only access to the Amazon CloudSearch configuration service. */
    CloudSearchReadOnlyAccess = 'arn:aws:iam::aws:policy/CloudSearchReadOnlyAccess',
    /** Provides full access to CloudWatch. */
    CloudWatchFullAccess = 'arn:aws:iam::aws:policy/CloudWatchFullAccess',
    /** Provides read only access to CloudWatch. */
    CloudWatchReadOnlyAccess = 'arn:aws:iam::aws:policy/CloudWatchReadOnlyAccess',
    /** Provides full access to CloudWatch Logs */
    CloudWatchLogsFullAccess = 'arn:aws:iam::aws:policy/CloudWatchLogsFullAccess',
    /** Provides read only access to CloudWatch Logs */
    CloudWatchLogsReadOnlyAccess = 'arn:aws:iam::aws:policy/CloudWatchLogsReadOnlyAccess',
    /** Provides full access to AWS Direct Connect via the AWS Management Console. */
    AWSDirectConnectFullAccess = 'arn:aws:iam::aws:policy/AWSDirectConnectFullAccess',
    /** Provides read only access to AWS Direct Connect via the AWS Management Console. */
    AWSDirectConnectReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSDirectConnectReadOnlyAccess',
    /** Provides full access to Amazon AppStream via the AWS Management Console. */
    AmazonAppStreamFullAccess = 'arn:aws:iam::aws:policy/AmazonAppStreamFullAccess',
    /** Provides read only access to Amazon AppStream via the AWS Management Console. */
    AmazonAppStreamReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonAppStreamReadOnlyAccess',
    /** Provides full access to Amazon DynamoDB via the AWS Management Console. */
    AmazonDynamoDBFullAccess = 'arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess',
    /** Provides read only access to Amazon DynamoDB via the AWS Management Console. */
    AmazonDynamoDBReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonDynamoDBReadOnlyAccess',
    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBPipeline.html. Provides full access to Amazon DynamoDB including Export/Import using AWS Data Pipeline via the AWS Management Console. */
    AmazonDynamoDBFullAccesswithDataPipeline = 'arn:aws:iam::aws:policy/AmazonDynamoDBFullAccesswithDataPipeline',
    /** Provides full access to Amazon EC2 via the AWS Management Console. */
    AmazonEC2FullAccess = 'arn:aws:iam::aws:policy/AmazonEC2FullAccess',
    /** Provides read only access to Amazon EC2 via the AWS Management Console. */
    AmazonEC2ReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonEC2ReadOnlyAccess',
    /** Provides full access to Amazon ElastiCache via the AWS Management Console. */
    AmazonElastiCacheFullAccess = 'arn:aws:iam::aws:policy/AmazonElastiCacheFullAccess',
    /** Provides read only access to Amazon ElastiCache via the AWS Management Console. */
    AmazonElastiCacheReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonElastiCacheReadOnlyAccess',
    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-iam-policies.html. Provides full access to Amazon Elastic MapReduce and underlying services that it requires such as EC2 and S3 */
    AmazonElasticMapReduceFullAccess = 'arn:aws:iam::aws:policy/AmazonElasticMapReduceFullAccess',
    /** Provides read only access to Amazon Elastic MapReduce via the AWS Management Console. */
    AmazonElasticMapReduceReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonElasticMapReduceReadOnlyAccess',
    /** Provides read only access to Amazon Glacier via the AWS Management Console. */
    AmazonGlacierReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonGlacierReadOnlyAccess',
    /** Provides full access to Amazon Glacier via the AWS Management Console. */
    AmazonGlacierFullAccess = 'arn:aws:iam::aws:policy/AmazonGlacierFullAccess',
    /** Provides full access to all streams via the AWS Management Console. */
    AmazonKinesisFullAccess = 'arn:aws:iam::aws:policy/AmazonKinesisFullAccess',
    /** Provides read only access to all streams via the AWS Management Console. */
    AmazonKinesisReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonKinesisReadOnlyAccess',
    /** Provides the ability to review AWS Marketplace subscriptions */
    AWSMarketplaceReadOnly = 'arn:aws:iam::aws:policy/AWSMarketplaceRead-only',
    /** Provides the ability to subscribe and unsubscribe to AWS Marketplace software */
    AWSMarketplaceManageSubscriptions = 'arn:aws:iam::aws:policy/AWSMarketplaceManageSubscriptions',
    /** Provides full access to all application resources. */
    AmazonMobileAnalyticsFullAccess = 'arn:aws:iam::aws:policy/AmazonMobileAnalyticsFullAccess',
    /** Provides read only access to all reports including financial data for all application resources. */
    AmazonMobileAnalyticsFinancialReportAccess = 'arn:aws:iam::aws:policy/AmazonMobileAnalyticsFinancialReportAccess',
    /** Provides read only access to non financial reports for all application resources. */
    AmazonMobileAnalyticsNonFinancialReportAccess = 'arn:aws:iam::aws:policy/AmazonMobileAnalyticsNon-financialReportAccess',
    /** Provides write only access to put event data for all application resources. (Recommended for SDK integration) */
    AmazonMobileAnalyticsWriteOnlyAccess = 'arn:aws:iam::aws:policy/AmazonMobileAnalyticsWriteOnlyAccess',
    /** Provides full access to IAM via the AWS Management Console. */
    IAMFullAccess = 'arn:aws:iam::aws:policy/IAMFullAccess',
    /** Provides read only access to IAM via the AWS Management Console. */
    IAMReadOnlyAccess = 'arn:aws:iam::aws:policy/IAMReadOnlyAccess',
    /** Provides access to AWS Key Management Service (KMS). */
    AWSKeyManagementServicePowerUser = 'arn:aws:iam::aws:policy/AWSKeyManagementServicePowerUser',
    /** Provides full access to WorkMail, Directory Service, SES, EC2 and read access to KMS metadata. */
    AmazonWorkMailFullAccess = 'arn:aws:iam::aws:policy/AmazonWorkMailFullAccess',
    /** Provides read only access to WorkMail and SES. */
    AmazonWorkMailReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonWorkMailReadOnlyAccess',
    /** Provides read only access to the jobs created under the AWS account. */
    AWSImportExportReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSImportExportReadOnlyAccess',
    /** Provides read and write access to the jobs created under the AWS account. */
    AWSImportExportFullAccess = 'arn:aws:iam::aws:policy/AWSImportExportFullAccess',
    /** Provides Put, Get access to S3 and full access to CloudWatch Logs. */
    AWSLambdaExecute = 'arn:aws:iam::aws:policy/AWSLambdaExecute',
    /** Provides read access to DynamoDB Streams. */
    AWSLambdaInvocationDynamoDB = 'arn:aws:iam::aws:policy/AWSLambdaInvocation-DynamoDB',
    /** Provides full access to Amazon Redshift via the AWS Management Console. */
    AmazonRedshiftFullAccess = 'arn:aws:iam::aws:policy/AmazonRedshiftFullAccess',
    /** Provides read only access to Amazon Redshift via the AWS Management Console. */
    AmazonRedshiftReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonRedshiftReadOnlyAccess',
    /** Provides full access to Amazon RDS via the AWS Management Console. */
    AmazonRDSFullAccess = 'arn:aws:iam::aws:policy/AmazonRDSFullAccess',
    /** Provides read only access to Amazon RDS via the AWS Management Console. */
    AmazonRDSReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonRDSReadOnlyAccess',
    /** Provides full access to all Amazon Route 53 via the AWS Management Console. */
    AmazonRoute53FullAccess = 'arn:aws:iam::aws:policy/AmazonRoute53FullAccess',
    /** Provides read only access to all Amazon Route 53 via the AWS Management Console. */
    AmazonRoute53ReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonRoute53ReadOnlyAccess',
    /** Provides full access to all Route53 Domains actions and Create Hosted Zone to allow Hosted Zone creation as part of domain registrations. */
    AmazonRoute53DomainsFullAccess = 'arn:aws:iam::aws:policy/AmazonRoute53DomainsFullAccess',
    /** Provides access to Route53 Domains list and actions. */
    AmazonRoute53DomainsReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonRoute53DomainsReadOnlyAccess',
    /** Provides full access to all buckets via the AWS Management Console. */
    AmazonS3FullAccess = 'arn:aws:iam::aws:policy/AmazonS3FullAccess',
    /** Provides read only access to all buckets via the AWS Management Console. */
    AmazonS3ReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess',
    /** The security audit template grants access to read security configuration metadata. It is useful for software that audits the configuration of an AWS account. */
    SecurityAudit = 'arn:aws:iam::aws:policy/SecurityAudit',
    /** Provides full access to Amazon SES via the AWS Management Console. */
    AmazonSESFullAccess = 'arn:aws:iam::aws:policy/AmazonSESFullAccess',
    /** Provides read only access to Amazon SES via the AWS Management Console. */
    AmazonSESReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonSESReadOnlyAccess',
    /** Provides full access to the Simple Workflow configuration service. */
    SimpleWorkflowFullAccess = 'arn:aws:iam::aws:policy/SimpleWorkflowFullAccess',
    /** Provides full access to Amazon SNS via the AWS Management Console. */
    AmazonSNSFullAccess = 'arn:aws:iam::aws:policy/AmazonSNSFullAccess',
    /** Provides read only access to Amazon SNS via the AWS Management Console. */
    AmazonSNSReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonSNSReadOnlyAccess',
    /** Provides full access to Amazon SQS via the AWS Management Console. */
    AmazonSQSFullAccess = 'arn:aws:iam::aws:policy/AmazonSQSFullAccess',
    /** Provides read only access to Amazon SQS via the AWS Management Console. */
    AmazonSQSReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonSQSReadOnlyAccess',
    /** Provides full access to AWS Storage Gateway via the AWS Management Console. */
    AWSStorageGatewayFullAccess = 'arn:aws:iam::aws:policy/AWSStorageGatewayFullAccess',
    /** Provides access to AWS Storage Gateway via the AWS Management Console. */
    AWSStorageGatewayReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSStorageGatewayReadOnlyAccess',
    /** Allows users to access the AWS Support Center. */
    AWSSupportAccess = 'arn:aws:iam::aws:policy/AWSSupportAccess',
    /** Provides full access to AWS Directory Service. */
    AWSDirectoryServiceFullAccess = 'arn:aws:iam::aws:policy/AWSDirectoryServiceFullAccess',
    /** Provides read only access to AWS Directory Service. */
    AWSDirectoryServiceReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSDirectoryServiceReadOnlyAccess',
    /** Provides full access to Amazon Zocalo. */
    AmazonZocaloFullAccess = 'arn:aws:iam::aws:policy/AmazonZocaloFullAccess',
    /** Provides read only access to Amazon Zocalo */
    AmazonZocaloReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonZocaloReadOnlyAccess',
    /** Provides full access to Amazon VPC via the AWS Management Console. */
    AmazonVPCFullAccess = 'arn:aws:iam::aws:policy/AmazonVPCFullAccess',
    /** Provides read only access to Amazon VPC via the AWS Management Console. */
    AmazonVPCReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonVPCReadOnlyAccess',
    /** Allows users to access the Account Activity page. */
    AWSAccountActivityAccess = 'arn:aws:iam::aws:policy/AWSAccountActivityAccess',
    /** Allows users to access the Account Usage Report page. */
    AWSAccountUsageReportAccess = 'arn:aws:iam::aws:policy/AWSAccountUsageReportAccess',
    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-iam-policies.html.  Default policy for the Amazon Elastic MapReduce service role. */
    AmazonElasticMapReduceRole = 'arn:aws:iam::aws:policy/service-role/AmazonElasticMapReduceRole',
    /** Default policy for the Amazon Elastic MapReduce for EC2 service role. */
    AmazonElasticMapReduceforEC2Role = 'arn:aws:iam::aws:policy/service-role/AmazonElasticMapReduceforEC2Role',
    /** Default policy for the AutoScaling Notification Access service role. */
    AutoScalingNotificationAccessRole = 'arn:aws:iam::aws:policy/service-role/AutoScalingNotificationAccessRole',
    /** Default policy for the AWS CloudHSM service role. */
    AWSCloudHSMRole = 'arn:aws:iam::aws:policy/service-role/AWSCloudHSMRole',
    /** Default policy for the Amazon EC2 Role for Data Pipeline service role. */
    AmazonEC2RoleforDataPipelineRole = 'arn:aws:iam::aws:policy/service-role/AmazonEC2RoleforDataPipelineRole',
    /** Default policy for the Amazon Elastic Transcoder service role. */
    AmazonElasticTranscoderRole = 'arn:aws:iam::aws:policy/service-role/AmazonElasticTranscoderRole',
    /** Default policy for AWS Lambda service role. */
    AWSLambdaRole = 'arn:aws:iam::aws:policy/service-role/AWSLambdaRole',
    /** Default policy for the Amazon RDS service role. */
    RDSCloudHsmAuthorizationRole = 'arn:aws:iam::aws:policy/service-role/RDSCloudHsmAuthorizationRole',
    /** Default policy for Amazon SNS service role. */
    AmazonSNSRole = 'arn:aws:iam::aws:policy/service-role/AmazonSNSRole',
    /** Enables broad read/write access to ALL EC2 objects, read/write access to S3 buckets starting with 'import-to-ec2-', and the ability to list all S3 buckets, for the AWS Connector to import VMs on your behalf. */
    AWSConnector = 'arn:aws:iam::aws:policy/AWSConnector',
    /** Provides the ability to subscribe and unsubscribe to AWS Marketplace software, allows users to manage Marketplace software instances from the Marketplace 'Your Software' page, and provides administrative access to EC2. */
    AWSMarketplaceFullAccess = 'arn:aws:iam::aws:policy/AWSMarketplaceFullAccess',
    /** Provides access to use AWS Config, including searching by tags on resources, and reading all tags. This does not provide permission to configure AWS Config, which requires administrative privileges. */
    AWSConfigUserAccess = 'arn:aws:iam::aws:policy/AWSConfigUserAccess',
    /** Default policy for the Amazon EC2 Role for Amazon EC2 Container Service. */
    AmazonEC2ContainerServiceforEC2Role = 'arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceforEC2Role',
    /** Provides read only access to Amazon Cognito resources. */
    AmazonCognitoReadOnly = 'arn:aws:iam::aws:policy/AmazonCognitoReadOnly',
    /** Provides administrative access to existing Amazon Cognito resources. You will need AWS account admin privileges to create new Cognito resources. */
    AmazonCognitoPowerUser = 'arn:aws:iam::aws:policy/AmazonCognitoPowerUser',
    /** Provides access to Amazon Cognito APIs to support developer authenticated identities from your authentication backend. */
    AmazonCognitoDeveloperAuthenticatedIdentities = 'arn:aws:iam::aws:policy/AmazonCognitoDeveloperAuthenticatedIdentities',
    /** Provides administrator access for packaging an application in Amazon WorkSpaces Application Manager. */
    AmazonWorkSpacesApplicationManagerAdminAccess = 'arn:aws:iam::aws:policy/AmazonWorkSpacesApplicationManagerAdminAccess',
    /** Provides write permissions to CloudWatch Logs. */
    AWSLambdaBasicExecutionRole = 'arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole',
    /** Provides list and read access to DynamoDB streams and write permissions to CloudWatch logs. */
    AWSLambdaDynamoDBExecutionRole = 'arn:aws:iam::aws:policy/service-role/AWSLambdaDynamoDBExecutionRole',
    /** Provides list and read access to Kinesis streams and write permissions to CloudWatch logs. */
    AWSLambdaKinesisExecutionRole = 'arn:aws:iam::aws:policy/service-role/AWSLambdaKinesisExecutionRole',
    /** Default policy for Amazon ECS service role. */
    AmazonEC2ContainerServiceRole = 'arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceRole',
    /** Grants users permission to request Amazon Machine Learning batch predictions. */
    AmazonMachineLearningBatchPredictionsAccess = 'arn:aws:iam::aws:policy/AmazonMachineLearningBatchPredictionsAccess',
    /** Provides create access for non-prediction Amazon Machine Learning resources. */
    AmazonMachineLearningCreateOnlyAccess = 'arn:aws:iam::aws:policy/AmazonMachineLearningCreateOnlyAccess',
    /** Provides full access to Amazon Machine Learning resources. */
    AmazonMachineLearningFullAccess = 'arn:aws:iam::aws:policy/AmazonMachineLearningFullAccess',
    /** Grants users permission to create and delete the real-time endpoint for Amazon Machine Learning models. */
    AmazonMachineLearningManageRealTimeEndpointOnlyAccess = 'arn:aws:iam::aws:policy/AmazonMachineLearningManageRealTimeEndpointOnlyAccess',
    /** Provides read only access to Amazon Machine Learning resources. */
    AmazonMachineLearningReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonMachineLearningReadOnlyAccess',
    /** Grants users permission to request Amazon Machine Learning real-time predictions. */
    AmazonMachineLearningRealTimePredictionOnlyAccess = 'arn:aws:iam::aws:policy/AmazonMachineLearningRealTimePredictionOnlyAccess',
    /** Provides CodeDeploy service access to expand tags and interact with Auto Scaling on your behalf. */
    AWSCodeDeployRole = 'arn:aws:iam::aws:policy/service-role/AWSCodeDeployRole',
    /** Provides EC2 access to S3 bucket to download revision. This role is needed by the CodeDeploy agent on EC2 instances. */
    AmazonEC2RoleforAWSCodeDeploy = 'arn:aws:iam::aws:policy/service-role/AmazonEC2RoleforAWSCodeDeploy',
    /** Provides full access to CodeDeploy resources. */
    AWSCodeDeployFullAccess = 'arn:aws:iam::aws:policy/AWSCodeDeployFullAccess',
    /** Provides access to register and deploy a revision. */
    AWSCodeDeployDeployerAccess = 'arn:aws:iam::aws:policy/AWSCodeDeployDeployerAccess',
    /** Provides read only access to CodeDeploy resources. */
    AWSCodeDeployReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSCodeDeployReadOnlyAccess',
    /** Provides full access to Amazon EFS via the AWS Management Console. */
    AmazonElasticFileSystemFullAccess = 'arn:aws:iam::aws:policy/AmazonElasticFileSystemFullAccess',
    /** Provides read only access to Amazon EFS via the AWS Management Console. */
    AmazonElasticFileSystemReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonElasticFileSystemReadOnlyAccess',
    /** Provides full access to Amazon SSM. */
    AmazonSSMFullAccess = 'arn:aws:iam::aws:policy/AmazonSSMFullAccess',
    /** Provides read only access to Amazon SSM. */
    AmazonSSMReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonSSMReadOnlyAccess',
    /** This policy will soon be deprecated. Please use AmazonSSMManagedInstanceCore policy to enable AWS Systems Manager service core functionality on EC2 instances. For more information see https://docs.aws.amazon.com/systems-manager/latest/userguide/setup-instance-profile.html */
    AmazonEC2RoleforSSM = 'arn:aws:iam::aws:policy/service-role/AmazonEC2RoleforSSM',
    /** Provides read-only access to CloudWatch alarms and metrics as well as EC2 metadata. Provides access to Stop, Terminate and Reboot EC2 instances. */
    CloudWatchActionsEC2Access = 'arn:aws:iam::aws:policy/CloudWatchActionsEC2Access',
    /** Provides access for custom actions to poll for jobs details (including temporary credentials) and report status updates to AWS CodePipeline. */
    AWSCodePipelineCustomActionAccess = 'arn:aws:iam::aws:policy/AWSCodePipelineCustomActionAccess',
    /** Provides full access to AWS CodeCommit via the AWS Management Console. */
    AWSCodeCommitFullAccess = 'arn:aws:iam::aws:policy/AWSCodeCommitFullAccess',
    /** Provides read only access to AWS CodeCommit via the AWS Management Console. */
    AWSCodeCommitReadOnly = 'arn:aws:iam::aws:policy/AWSCodeCommitReadOnly',
    /** Provides full access to AWS CodeCommit repositories, but does not allow repository deletion. */
    AWSCodeCommitPowerUser = 'arn:aws:iam::aws:policy/AWSCodeCommitPowerUser',
    /** Provides the ability for an IAM user to manage their own SSH keys. */
    IAMUserSSHKeys = 'arn:aws:iam::aws:policy/IAMUserSSHKeys',
    /** Provides full access to create/edit/delete APIs in Amazon API Gateway via the AWS Management Console. */
    AmazonAPIGatewayAdministrator = 'arn:aws:iam::aws:policy/AmazonAPIGatewayAdministrator',
    /** Provides full access to invoke APIs in Amazon API Gateway. */
    AmazonAPIGatewayInvokeFullAccess = 'arn:aws:iam::aws:policy/AmazonAPIGatewayInvokeFullAccess',
    /** Provides full access to all AWS Device Farm operations. */
    AWSDeviceFarmFullAccess = 'arn:aws:iam::aws:policy/AWSDeviceFarmFullAccess',
    /** Provides access to manage VPC settings for Amazon managed customer configurations */
    AmazonDRSVPCManagement = 'arn:aws:iam::aws:policy/AmazonDRSVPCManagement',
    /** Default policy for the VM Import/Export service role, for customers using the AWS Connector. The VM Import/Export service assumes a role with this policy to fulfill virtual machine migration requests from the AWS Connector virtual appliance. (Note that the AWS Connector uses the "AWSConnector" managed policy to issue requests on the customer's behalf to the VM Import/Export service.) Provides the ability to create AMIs and EBS snapshots, modify EBS snapshot attributes, make "Describe*" calls on EC2 objects, and read from S3 buckets starting with 'import-to-ec2-'. */
    VMImportExportRoleForAWSConnector = 'arn:aws:iam::aws:policy/service-role/VMImportExportRoleForAWSConnector',
    /** Provides access to Amazon WorkSpaces administrative actions via AWS SDK and CLI. */
    AmazonWorkSpacesAdmin = 'arn:aws:iam::aws:policy/AmazonWorkSpacesAdmin',
    /** Provides full access to the Amazon ES configuration service. */
    AmazonESFullAccess = 'arn:aws:iam::aws:policy/AmazonESFullAccess',
    /** Provides read-only access to the Amazon ES configuration service. */
    AmazonESReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonESReadOnlyAccess',
    /** Provides read only access to AWS WAF actions. */
    AWSWAFReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSWAFReadOnlyAccess',
    /** Provides full access to AWS WAF actions. */
    AWSWAFFullAccess = 'arn:aws:iam::aws:policy/AWSWAFFullAccess',
    /** Provides read only access to Amazon Inspector. */
    AmazonInspectorReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonInspectorReadOnlyAccess',
    /** Provides full access to Amazon Inspector. */
    AmazonInspectorFullAccess = 'arn:aws:iam::aws:policy/AmazonInspectorFullAccess',
    /** Provides read only access to all Amazon Kinesis Firehose Delivery Streams. */
    AmazonKinesisFirehoseReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonKinesisFirehoseReadOnlyAccess',
    /** Provides full access to all Amazon Kinesis Firehose Delivery Streams. */
    AmazonKinesisFirehoseFullAccess = 'arn:aws:iam::aws:policy/AmazonKinesisFirehoseFullAccess',
    /** Allows access to all AWS services supported in AWS IoT Rule Actions */
    AWSIoTRuleActions = 'arn:aws:iam::aws:policy/service-role/AWSIoTRuleActions',
    /** Allows creation of Amazon CloudWatch Log groups and streaming logs to the groups */
    AWSIoTLogging = 'arn:aws:iam::aws:policy/service-role/AWSIoTLogging',
    /** This policy gives full access to the AWS IoT configuration and messaging actions */
    AWSIoTFullAccess = 'arn:aws:iam::aws:policy/AWSIoTFullAccess',
    /** This policy gives full access to the AWS IoT messaging actions */
    AWSIoTDataAccess = 'arn:aws:iam::aws:policy/AWSIoTDataAccess',
    /** This policy gives full access to the AWS IoT configuration actions */
    AWSIoTConfigAccess = 'arn:aws:iam::aws:policy/AWSIoTConfigAccess',
    /** This policy gives read only access to the AWS IoT configuration actions */
    AWSIoTConfigReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSIoTConfigReadOnlyAccess',
    /** Allow QuickSight to describe the RDS resources */
    AWSQuickSightDescribeRDS = 'arn:aws:iam::aws:policy/service-role/AWSQuickSightDescribeRDS',
    /** Allow QuickSight to describe Redshift resources */
    AWSQuickSightDescribeRedshift = 'arn:aws:iam::aws:policy/service-role/AWSQuickSightDescribeRedshift',
    /** Allow QuickSight to list IAM entities */
    AWSQuickSightListIAM = 'arn:aws:iam::aws:policy/service-role/AWSQuickSightListIAM',
    /** Provides access to Cloudwatch for RDS Enhanced Monitoring */
    AmazonRDSEnhancedMonitoringRole = 'arn:aws:iam::aws:policy/service-role/AmazonRDSEnhancedMonitoringRole',
    /** Allows API Gateway to push logs to user's account. */
    AmazonAPIGatewayPushToCloudWatchLogs = 'arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs',
    /** Provides access to manage VPC settings for AWS managed customer configurations */
    AmazonDMSVPCManagementRole = 'arn:aws:iam::aws:policy/service-role/AmazonDMSVPCManagementRole',
    /** Provides full access to all APIs in Amazon Mechanical Turk. */
    AmazonMechanicalTurkFullAccess = 'arn:aws:iam::aws:policy/AmazonMechanicalTurkFullAccess',
    /** Provides access to read only APIs in Amazon Mechanical Turk. */
    AmazonMechanicalTurkReadOnly = 'arn:aws:iam::aws:policy/AmazonMechanicalTurkReadOnly',
    /** Provides read-only access to Amazon EC2 Container Registry repositories. */
    AmazonEC2ContainerRegistryReadOnly = 'arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly',
    /** Provides full access to Amazon EC2 Container Registry repositories, but does not allow repository deletion or policy changes. */
    AmazonEC2ContainerRegistryPowerUser = 'arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryPowerUser',
    /** Provides administrative access to Amazon ECR resources */
    AmazonEC2ContainerRegistryFullAccess = 'arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryFullAccess',
    /** Provides access to upload DMS replication logs to cloudwatch logs in customer account. */
    AmazonDMSCloudWatchLogsRole = 'arn:aws:iam::aws:policy/service-role/AmazonDMSCloudWatchLogsRole',
    /** Provides read only access to Amazon CloudWatch Events. */
    CloudWatchEventsReadOnlyAccess = 'arn:aws:iam::aws:policy/CloudWatchEventsReadOnlyAccess',
    /** Allows built-in targets in Amazon CloudWatch Events to perform EC2 actions on your behalf. */
    CloudWatchEventsBuiltInTargetExecutionAccess = 'arn:aws:iam::aws:policy/service-role/CloudWatchEventsBuiltInTargetExecutionAccess',
    /** Allows Amazon CloudWatch Events to relay events to the streams in AWS Kinesis Streams in your account. */
    CloudWatchEventsInvocationAccess = 'arn:aws:iam::aws:policy/service-role/CloudWatchEventsInvocationAccess',
    /** Provides full access to Amazon CloudWatch Events. */
    CloudWatchEventsFullAccess = 'arn:aws:iam::aws:policy/CloudWatchEventsFullAccess',
    /** Provides full access to AWS Certificate Manager (ACM) */
    AWSCertificateManagerFullAccess = 'arn:aws:iam::aws:policy/AWSCertificateManagerFullAccess',
    /** Provides read only access to AWS Certificate Manager (ACM). */
    AWSCertificateManagerReadOnly = 'arn:aws:iam::aws:policy/AWSCertificateManagerReadOnly',
    /** Provide the instances in your web server environment access to upload log files to Amazon S3. */
    AWSElasticBeanstalkWebTier = 'arn:aws:iam::aws:policy/AWSElasticBeanstalkWebTier',
    /** Provide the instances in your worker environment access to upload log files to Amazon S3, to use Amazon SQS to monitor your application's job queue, to use Amazon DynamoDB to perform leader election, and to Amazon CloudWatch to publish metrics for health monitoring. */
    AWSElasticBeanstalkWorkerTier = 'arn:aws:iam::aws:policy/AWSElasticBeanstalkWorkerTier',
    /** Provide the instances in your multicontainer Docker environment access to use the Amazon EC2 Container Service to manage container deployment tasks. */
    AWSElasticBeanstalkMulticontainerDocker = 'arn:aws:iam::aws:policy/AWSElasticBeanstalkMulticontainerDocker',
    /** AWS Elastic Beanstalk Service policy for Health Monitoring system */
    AWSElasticBeanstalkEnhancedHealth = 'arn:aws:iam::aws:policy/service-role/AWSElasticBeanstalkEnhancedHealth',
    /** Provides minimum permissions for a Lambda function to execute while accessing a resource within a VPC - create, describe, delete network interfaces and write permissions to CloudWatch Logs. */
    AWSLambdaVPCAccessExecutionRole = 'arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole',
    /** Allow RDS to access Directory Service Managed AD on behalf of the customer for domain-joined SQL Server DB instances. */
    AmazonRDSDirectoryServiceAccess = 'arn:aws:iam::aws:policy/service-role/AmazonRDSDirectoryServiceAccess',
    /** Provides full access to AWS Marketplace Metering. */
    AWSMarketplaceMeteringFullAccess = 'arn:aws:iam::aws:policy/AWSMarketplaceMeteringFullAccess',
    /** Allows an AWS Lambda function to access the AWS Config API and the configuration snapshots that AWS Config delivers periodically to Amazon S3. This access is required by functions that evaluate configuration changes for custom Config rules. */
    AWSConfigRulesExecutionRole = 'arn:aws:iam::aws:policy/service-role/AWSConfigRulesExecutionRole',
    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-servicerole.html. AWS Elastic Beanstalk Service role policy which grants permissions to create & manage resources (i.e.: AutoScaling, EC2, S3, CloudFormation, ELB, etc.) on your behalf. */
    AWSElasticBeanstalkService = 'arn:aws:iam::aws:policy/service-role/AWSElasticBeanstalkService',
    /** Provides access to manage S3 settings for Redshift endpoints for DMS. */
    AmazonDMSRedshiftS3Role = 'arn:aws:iam::aws:policy/service-role/AmazonDMSRedshiftS3Role',
    /** Provides full access to view and tag Configuration Items maintained by the AWS Application Discovery Service */
    AWSApplicationDiscoveryServiceFullAccess = 'arn:aws:iam::aws:policy/AWSApplicationDiscoveryServiceFullAccess',
    /** Provides access for the Discovery Agent to register with AWS Application Discovery Service. */
    AWSApplicationDiscoveryAgentAccess = 'arn:aws:iam::aws:policy/AWSApplicationDiscoveryAgentAccess',
    /**   Policy to enable Task Autoscaling for Amazon EC2 Container Service */
    AmazonEC2ContainerServiceAutoscaleRole = 'arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceAutoscaleRole',
    /** Provides access for an Amazon EC2 instance to register with an AWS OpsWorks stack. */
    AWSOpsWorksInstanceRegistration = 'arn:aws:iam::aws:policy/AWSOpsWorksInstanceRegistration',
    /** Provides access to view and approve manual changes for all pipelines */
    AWSCodePipelineApproverAccess = 'arn:aws:iam::aws:policy/AWSCodePipelineApproverAccess',
    /** Provides access for the Discovery Agentless Connector to register with AWS Application Discovery Service. */
    AWSAgentlessDiscoveryService = 'arn:aws:iam::aws:policy/AWSAgentlessDiscoveryService',
    /** Policy to enable Autoscaling for Amazon EC2 Spot Fleet */
    AmazonEC2SpotFleetAutoscaleRole = 'arn:aws:iam::aws:policy/service-role/AmazonEC2SpotFleetAutoscaleRole',
    /** Provides read-only access to Amazon Kinesis Analytics via the AWS Management Console. */
    AmazonKinesisAnalyticsReadOnly = 'arn:aws:iam::aws:policy/AmazonKinesisAnalyticsReadOnly',
    /** Provides full access to Amazon Kinesis Analytics via the AWS Management Console. */
    AmazonKinesisAnalyticsFullAccess = 'arn:aws:iam::aws:policy/AmazonKinesisAnalyticsFullAccess',
    /** Permissions to allow the AWS Server Migration Connector to migrate VMs to EC2. Allows communication with the AWS Server Migration Service, read/write access to S3 buckets starting with 'sms-b-' and 'import-to-ec2-' as well as the buckets used for AWS Server Migration Connector upgrade, AWS Server Migration Connector registration with AWS, and metrics upload to AWS. */
    ServerMigrationConnector = 'arn:aws:iam::aws:policy/ServerMigrationConnector',
    /** This policy grants permissions to view resources and basic metadata across all AWS services. */
    ViewOnlyAccess = 'arn:aws:iam::aws:policy/job-function/ViewOnlyAccess',
    /** This policy grants permissions to troubleshoot and resolve issues in an AWS account. This policy also enables the user to contact AWS support to create and manage cases. */
    SupportUser = 'arn:aws:iam::aws:policy/job-function/SupportUser',
    /** Grants full access permissions necessary for resources required for application and development operations. */
    SystemAdministrator = 'arn:aws:iam::aws:policy/job-function/SystemAdministrator',
    /** Grants full access permissions to AWS services and actions required to set up and configure AWS database services. */
    DatabaseAdministrator = 'arn:aws:iam::aws:policy/job-function/DatabaseAdministrator',
    /** Grants permissions to AWS data analytics services. */
    DataScientist = 'arn:aws:iam::aws:policy/job-function/DataScientist',
    /** Grants full access permissions to AWS services and actions required to set up and configure AWS network resources. */
    NetworkAdministrator = 'arn:aws:iam::aws:policy/job-function/NetworkAdministrator',
    /** Grants permissions for billing and cost management. This includes viewing account usage and viewing and modifying budgets and payment methods. */
    Billing = 'arn:aws:iam::aws:policy/job-function/Billing',
    /** Provides the ability for an IAM user to change their own password. */
    IAMUserChangePassword = 'arn:aws:iam::aws:policy/IAMUserChangePassword',
    /** Amazon Elastic MapReduce for Auto Scaling. Role to allow Auto Scaling to add and remove instances from your EMR cluster. */
    AmazonElasticMapReduceforAutoScalingRole = 'arn:aws:iam::aws:policy/service-role/AmazonElasticMapReduceforAutoScalingRole',
    /** Default policy for Amazon AppStream service role. */
    AmazonAppStreamServiceAccess = 'arn:aws:iam::aws:policy/service-role/AmazonAppStreamServiceAccess',
    /** Provides S3 access for instances launched by OpsWorks CM. */
    AWSOpsWorksCMInstanceProfileRole = 'arn:aws:iam::aws:policy/AWSOpsWorksCMInstanceProfileRole',
    /** Service Role Policy to be used for Creating OpsWorks CM servers. */
    AWSOpsWorksCMServiceRole = 'arn:aws:iam::aws:policy/service-role/AWSOpsWorksCMServiceRole',
    /** Access to all Amazon Rekognition APIs */
    AmazonRekognitionFullAccess = 'arn:aws:iam::aws:policy/AmazonRekognitionFullAccess',
    /** Access to all Read rekognition APIs */
    AmazonRekognitionReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonRekognitionReadOnlyAccess',
    /** Provide full access to Amazon Athena and scoped access to the dependencies needed to enable querying, writing results, and data management. */
    AmazonAthenaFullAccess = 'arn:aws:iam::aws:policy/AmazonAthenaFullAccess',
    /** Grants full access to Amazon Polly service and resources. */
    AmazonPollyFullAccess = 'arn:aws:iam::aws:policy/AmazonPollyFullAccess',
    /** Grants read-only access to Amazon Polly resources. */
    AmazonPollyReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonPollyReadOnlyAccess',
    /**  Service Role to be used for EC2 Maintenance Window */
    AmazonSSMMaintenanceWindowRole = 'arn:aws:iam::aws:policy/service-role/AmazonSSMMaintenanceWindowRole',
    /** AWS X-Ray write only managed policy */
    AWSXrayWriteOnlyAccess = 'arn:aws:iam::aws:policy/AWSXrayWriteOnlyAccess',
    /** AWS X-Ray read only managed policy */
    AWSXrayReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSXrayReadOnlyAccess',
    /** AWS X-Ray full access managed policy */
    AWSXrayFullAccess = 'arn:aws:iam::aws:policy/AWSXrayFullAccess',
    /** Provides access to AWS CodeBuild via the AWS Management Console, but does not allow CodeBuild project administration. Also attach AmazonS3ReadOnlyAccess to provide access to download build artifacts. */
    AWSCodeBuildDeveloperAccess = 'arn:aws:iam::aws:policy/AWSCodeBuildDeveloperAccess',
    /** Provides read only access to AWS CodeBuild via the AWS Management Console. Also attach AmazonS3ReadOnlyAccess to provide access to download build artifacts. */
    AWSCodeBuildReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSCodeBuildReadOnlyAccess',
    /** Provides full access to AWS CodeBuild via the AWS Management Console. Also attach AmazonS3ReadOnlyAccess to provide access to download build artifacts, and attach IAMFullAccess to create and manage the service role for CodeBuild. */
    AWSCodeBuildAdminAccess = 'arn:aws:iam::aws:policy/AWSCodeBuildAdminAccess',
    /** Provides permissions for EC2 Automation service to execute activities defined within Automation documents */
    AmazonSSMAutomationRole = 'arn:aws:iam::aws:policy/service-role/AmazonSSMAutomationRole',
    /** Provides minimum permissions for a Lambda function to manage ENIs (create, describe, delete) used by a VPC-enabled Lambda Function. */
    AWSLambdaENIManagementAccess = 'arn:aws:iam::aws:policy/service-role/AWSLambdaENIManagementAccess',
    /** Allows full access to the AWS Health Apis and Notifications and the Personal Health Dashboard */
    AWSHealthFullAccess = 'arn:aws:iam::aws:policy/AWSHealthFullAccess',
    /** Provides full access for AWS Batch resources. */
    AWSBatchFullAccess = 'arn:aws:iam::aws:policy/AWSBatchFullAccess',
    /** Policy for AWS Batch service role which allows access to related services including EC2, Autoscaling, EC2 Container service and Cloudwatch Logs. */
    AWSBatchServiceRole = 'arn:aws:iam::aws:policy/service-role/AWSBatchServiceRole',
    /** Quicksight access to Athena API and S3 buckets used for Athena query results */
    AWSQuicksightAthenaAccess = 'arn:aws:iam::aws:policy/service-role/AWSQuicksightAthenaAccess',
    /** Allows an IAM user to manage their own Service Specific Credentials. */
    IAMSelfManageServiceSpecificCredentials = 'arn:aws:iam::aws:policy/IAMSelfManageServiceSpecificCredentials',
    /** An access policy for providing a user/role/etc read only access to the AWS StepFunctions service. */
    AWSStepFunctionsReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSStepFunctionsReadOnlyAccess',
    /** An access policy for providing a user/role/etc access to the AWS StepFunctions API. For full access, in addition to this policy, a user MUST have iam:PassRole permission on at least one IAM role that can be assumed by the service. */
    AWSStepFunctionsFullAccess = 'arn:aws:iam::aws:policy/AWSStepFunctionsFullAccess',
    /** An access policy for providing a user/role/etc access to the AWS StepFunctions console. For a full console experience, in addition to this policy, a user may need iam:PassRole permission on other IAM roles that can be assumed by the service. */
    AWSStepFunctionsConsoleFullAccess = 'arn:aws:iam::aws:policy/AWSStepFunctionsConsoleFullAccess',
    /** Provides full access to Auto Scaling. */
    AutoScalingFullAccess = 'arn:aws:iam::aws:policy/AutoScalingFullAccess',
    /** Provides read-only access to Auto Scaling. */
    AutoScalingReadOnlyAccess = 'arn:aws:iam::aws:policy/AutoScalingReadOnlyAccess',
    /** Provides full access to Auto Scaling via the AWS Management Console. */
    AutoScalingConsoleFullAccess = 'arn:aws:iam::aws:policy/AutoScalingConsoleFullAccess',
    /** Provides read-only access to Auto Scaling via the AWS Management Console. */
    AutoScalingConsoleReadOnlyAccess = 'arn:aws:iam::aws:policy/AutoScalingConsoleReadOnlyAccess',
    /** Provides full access to Data Pipeline, list access for S3, DynamoDB, Redshift, RDS, SNS, and IAM roles, and passRole access for default Roles. */
    AWSDataPipelineFullAccess = 'arn:aws:iam::aws:policy/AWSDataPipeline_FullAccess',
    /** Provides full access to Data Pipeline, list access for S3, DynamoDB, Redshift, RDS, SNS, and IAM roles, and passRole access for default Roles. */
    AWSDataPipelinePowerUser = 'arn:aws:iam::aws:policy/AWSDataPipeline_PowerUser',
    /** Policy to enable Application Autoscaling for Amazon AppStream */
    ApplicationAutoScalingForAmazonAppStreamAccess = 'arn:aws:iam::aws:policy/service-role/ApplicationAutoScalingForAmazonAppStreamAccess',
    /** Policy for AWS Greengrass service role which allows access to related services including AWS Lambda and AWS IoT thing shadows. */
    AWSGreengrassResourceAccessRolePolicy = 'arn:aws:iam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy',
    /** Provide the instance in your custom platform builder environment permission to launch EC2 instance, create EBS snapshot and AMI, stream logs to Amazon CloudWatch Logs, and store artifacts in Amazon S3. */
    AWSElasticBeanstalkCustomPlatformforEC2Role = 'arn:aws:iam::aws:policy/AWSElasticBeanstalkCustomPlatformforEC2Role',
    /** Provides full access to Amazon Cloud Directory Service. */
    AmazonCloudDirectoryFullAccess = 'arn:aws:iam::aws:policy/AmazonCloudDirectoryFullAccess',
    /** Provides read only access to Amazon Cloud Directory Service. */
    AmazonCloudDirectoryReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonCloudDirectoryReadOnlyAccess',
    /** Provides read access to AWS Marketplace Entitlements */
    AWSMarketplaceGetEntitlements = 'arn:aws:iam::aws:policy/AWSMarketplaceGetEntitlements',
    /** Enables OpsWorks instances with the CWLogs integration enabled to ship logs and create required log groups */
    AWSOpsWorksCloudWatchLogs = 'arn:aws:iam::aws:policy/AWSOpsWorksCloudWatchLogs',
    /** Provides access to Amazon Lex conversational APIs. */
    AmazonLexRunBotsOnly = 'arn:aws:iam::aws:policy/AmazonLexRunBotsOnly',
    /** Provides read-only access to Amazon Lex. */
    AmazonLexReadOnly = 'arn:aws:iam::aws:policy/AmazonLexReadOnly',
    /** Provides full access to Amazon Lex via the AWS Management Console.  Also provides access to create Lex Service Linked Roles and grant Lex permissions to invoke a limited set of Lambda functions. */
    AmazonLexFullAccess = 'arn:aws:iam::aws:policy/AmazonLexFullAccess',
    /** DO NOT USE -  AWS CodeStar Service Role Policy which grants administrative privileges in order for CodeStar to manage IAM and other service resources on behalf of the customer. */
    AWSCodeStarServiceRole = 'arn:aws:iam::aws:policy/service-role/AWSCodeStarServiceRole',
    /** Provides full access to AWS CodeStar via the AWS Management Console. */
    AWSCodeStarFullAccess = 'arn:aws:iam::aws:policy/AWSCodeStarFullAccess',
    /** This policy gives full access to the AWS Greengrass configuration, management and deployment actions */
    AWSGreengrassFullAccess = 'arn:aws:iam::aws:policy/AWSGreengrassFullAccess',
    /** Policy to enable CloudWatch Events for EC2 Container Service */
    AmazonEC2ContainerServiceEventsRole = 'arn:aws:iam::aws:policy/service-role/AmazonEC2ContainerServiceEventsRole',
    /** Policy used by QuickSight team to access customer data produced by S3 Storage Management Analytics. */
    QuickSightAccessForS3StorageManagementAnalyticsReadOnly = 'arn:aws:iam::aws:policy/service-role/QuickSightAccessForS3StorageManagementAnalyticsReadOnly',
    /** Allows EC2 Spot Fleet to request, terminate and tag Spot Instances on your behalf. */
    AmazonEC2SpotFleetTaggingRole = 'arn:aws:iam::aws:policy/service-role/AmazonEC2SpotFleetTaggingRole',
    /** Allow Amazon Elasticsearch Service to access other AWS services such as EC2 Networking APIs on your behalf. */
    AmazonElasticsearchServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonElasticsearchServiceRolePolicy',
    /** Provides access to create network interfaces and attach them to cross-account resources */
    AmazonVPCCrossAccountNetworkInterfaceOperations = 'arn:aws:iam::aws:policy/AmazonVPCCrossAccountNetworkInterfaceOperations',
    /** Provides access to view automation executions and send approval decisions to automation waiting for approval */
    AmazonSSMAutomationApproverAccess = 'arn:aws:iam::aws:policy/AmazonSSMAutomationApproverAccess',
    /** Policy allows AWSMigrationHubService to call AWSApplicationDiscoveryService on behalf of the customer. */
    AWSMigrationHubDiscoveryAccess = 'arn:aws:iam::aws:policy/service-role/AWSMigrationHubDiscoveryAccess',
    /** Policy for AWS Glue service role which allows access to related services including EC2, S3, and Cloudwatch Logs */
    AWSGlueServiceRole = 'arn:aws:iam::aws:policy/service-role/AWSGlueServiceRole',
    /** Provides full access to AWS Glue via the AWS Management Console */
    AWSGlueConsoleFullAccess = 'arn:aws:iam::aws:policy/AWSGlueConsoleFullAccess',
    /** Policy for AWS Glue service role which allows customer to manage notebook server */
    AWSGlueServiceNotebookRole = 'arn:aws:iam::aws:policy/service-role/AWSGlueServiceNotebookRole',
    /** Policy for Server Migration Service to assume role in customer's account to call Migration Hub */
    AWSMigrationHubSMSAccess = 'arn:aws:iam::aws:policy/service-role/AWSMigrationHubSMSAccess',
    /** Policy for Database Migration Service to assume role in customer's account to call Migration Hub */
    AWSMigrationHubDMSAccess = 'arn:aws:iam::aws:policy/service-role/AWSMigrationHubDMSAccess',
    /** Managed policy to provide the customer access to the Migration Hub Service */
    AWSMigrationHubFullAccess = 'arn:aws:iam::aws:policy/AWSMigrationHubFullAccess',
    /** Grants Macie read-only access to resource dependencies in your account in order to enable data analysis. */
    AmazonMacieServiceRole = 'arn:aws:iam::aws:policy/service-role/AmazonMacieServiceRole',
    /** Provides full access to Amazon Macie. */
    AmazonMacieFullAccess = 'arn:aws:iam::aws:policy/AmazonMacieFullAccess',
    /** AWS Elastic Beanstalk Service Linked Role policy which grants permissions to create & manage resources (i.e.: AutoScaling, EC2, S3, CloudFormation, ELB, etc.) on your behalf. */
    AWSElasticBeanstalkServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSElasticBeanstalkServiceRolePolicy',
    /** Allows EC2 Spot to launch and manage spot instances */
    AWSEC2SpotServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSEC2SpotServiceRolePolicy',
    /** Allows Amazon Redshift to call AWS services on your behalf */
    AmazonRedshiftServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonRedshiftServiceLinkedRolePolicy',
    /** Service Linked Role Policy for AWS Elastic Load Balancing Control Plane */
    AWSElasticLoadBalancingServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSElasticLoadBalancingServiceRolePolicy',
    /** Service Linked Role Policy for AWS Elastic Load Balancing Control Plane - Classic */
    AWSElasticLoadBalancingClassicServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSElasticLoadBalancingClassicServiceRolePolicy',
    /** Policy to enable enhanced classic networking management feature. */
    AWSEnhancedClassicNetworkingMangementPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSEnhancedClassicNetworkingMangementPolicy',
    /** Allows the actions that EMR requires to terminate and delete AWS EC2 resources if the EMR Service role has lost that ability. */
    AmazonEMRCleanupPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonEMRCleanupPolicy',
    /** Policy for AWS Lex Channel use case */
    LexChannelPolicy = 'arn:aws:iam::aws:policy/aws-service-role/LexChannelPolicy',
    /** Policy for AWS Lex Bot use case */
    LexBotPolicy = 'arn:aws:iam::aws:policy/aws-service-role/LexBotPolicy',
    /** Grants Lambda Replicator necessary permissions to replicate functions across regions */
    AWSLambdaReplicator = 'arn:aws:iam::aws:policy/aws-service-role/AWSLambdaReplicator',
    /** A policy to allow AWS Organizations to share trust with other approved AWS Services for the purpose of simplifying customer configuration. */
    AWSOrganizationsServiceTrustPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSOrganizationsServiceTrustPolicy',
    /** Allows EC2 Scheduled Instances to launch and manage spot instances. */
    AWSServiceRoleForEC2ScheduledInstances = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForEC2ScheduledInstances',
    /** Policy to enable Amazon ECS to manage your cluster. */
    AmazonECSServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonECSServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access RDS and CloudWatch. */
    AWSApplicationAutoscalingRDSClusterPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoscalingRDSClusterPolicy',
    /** Allows API Gateway to manage associated AWS Resources on behalf of the customer. */
    APIGatewayServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/APIGatewayServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access AppStream and CloudWatch. */
    AWSApplicationAutoscalingAppStreamFleetPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoscalingAppStreamFleetPolicy',
    /** Policy granting permissions to Application Auto Scaling to access DynamoDB and CloudWatch. */
    AWSApplicationAutoscalingDynamoDBTablePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoscalingDynamoDBTablePolicy',
    /** Allows EC2 Spot Fleet to launch and manage spot fleet instances */
    AWSEC2SpotFleetServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSEC2SpotFleetServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access EC2 Spot Fleet and CloudWatch. */
    AWSApplicationAutoscalingEC2SpotFleetRequestPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoscalingEC2SpotFleetRequestPolicy',
    /** Policy granting permissions to Application Auto Scaling to access EC2 Container Service and CloudWatch. */
    AWSApplicationAutoscalingECSServicePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoscalingECSServicePolicy',
    /** Policy granting permissions to Application Auto Scaling to access Elastic Map Reduce and CloudWatch. */
    AWSApplicationAutoscalingEMRInstanceGroupPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoscalingEMRInstanceGroupPolicy',
    /** Provides read only access to Amazon Chime Admin Console via the AWS Management Console. */
    AmazonChimeReadOnly = 'arn:aws:iam::aws:policy/AmazonChimeReadOnly',
    /** Provides full access to Amazon Chime Admin Console via the AWS Management Console. */
    AmazonChimeFullAccess = 'arn:aws:iam::aws:policy/AmazonChimeFullAccess',
    /** Provides user management access to Amazon Chime Admin Console via the AWS Management Console. */
    AmazonChimeUserManagement = 'arn:aws:iam::aws:policy/AmazonChimeUserManagement',
    /** Enables access to AWS resources used or managed by CloudHSM */
    CloudHSMServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/CloudHSMServiceRolePolicy',
    /** Provides administrative access to Amazon ECS resources and enables ECS features through access to other AWS service resources, including VPCs, Auto Scaling groups, and CloudFormation stacks. */
    AmazonECSFullAccess = 'arn:aws:iam::aws:policy/AmazonECS_FullAccess',
    /** Permissions required by DynamoDB for cross-region data replication */
    DynamoDBReplicationServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/DynamoDBReplicationServiceRolePolicy',
    /** Provides access to AWS Resources managed or used by Amazon SSM */
    AmazonSSMServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonSSMServiceRolePolicy',
    /** Provides access to other AWS service resources that are required to run Amazon ECS tasks */
    AmazonECSTaskExecutionRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy',
    /** Allow AWS CloudWatch to execute actions on your behalf configured through alarms and events. */
    CloudWatchEventsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/CloudWatchEventsServiceRolePolicy',
    /** Grants Amazon Inspector access to AWS Services needed to perform security assessments */
    AmazonInspectorServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonInspectorServiceRolePolicy',
    /** Provides full access to AWS Price List Service. */
    AWSPriceListServiceFullAccess = 'arn:aws:iam::aws:policy/AWSPriceListServiceFullAccess',
    /** Provides CodeDeploy service access to perform a Lambda deployment on your behalf. */
    AWSCodeDeployRoleForLambda = 'arn:aws:iam::aws:policy/service-role/AWSCodeDeployRoleForLambda',
    /** Provides full access to AmazonMQ via the AWS Management Console. */
    AmazonMQFullAccess = 'arn:aws:iam::aws:policy/AmazonMQFullAccess',
    /** Provides read only access to AmazonMQ via the AWS Management Console. */
    AmazonMQReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonMQReadOnlyAccess',
    /** Enable access to AWS Resources used or managed by Amazon Guard Duty */
    AmazonGuardDutyServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonGuardDutyServiceRolePolicy',
    /** Provides read only access to Amazon GuardDuty resources */
    AmazonGuardDutyReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonGuardDutyReadOnlyAccess',
    /** Provides full access to use Amazon GuardDuty. */
    AmazonGuardDutyFullAccess = 'arn:aws:iam::aws:policy/AmazonGuardDutyFullAccess',
    /** Provides read only access to Amazon SageMaker via the AWS Management Console and SDK. */
    AmazonSageMakerReadOnly = 'arn:aws:iam::aws:policy/AmazonSageMakerReadOnly',
    /** Provides full access to Amazon SageMaker via the AWS Management Console and SDK. Also provides select access to related services (e.g., S3, ECR, CloudWatch Logs). */
    AmazonSageMakerFullAccess = 'arn:aws:iam::aws:policy/AmazonSageMakerFullAccess',
    /** Full Access Policy for Amazon FreeRTOS */
    AmazonFreeRTOSFullAccess = 'arn:aws:iam::aws:policy/AmazonFreeRTOSFullAccess',
    /** Grants AWS DeepLens access to AWS Services, resources and roles needed by DeepLens and its dependencies including IoT, S3, GreenGrass and AWS Lambda. */
    AWSDeepLensServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AWSDeepLensServiceRolePolicy',
    /** This policy specifies permissions required by DeepLens Administrative lambda functions that run on a DeepLens device */
    AWSDeepLensLambdaFunctionAccessPolicy = 'arn:aws:iam::aws:policy/AWSDeepLensLambdaFunctionAccessPolicy',
    /** Allows Rekognition to call AWS services on your behalf. */
    AmazonRekognitionServiceRole = 'arn:aws:iam::aws:policy/service-role/AmazonRekognitionServiceRole',
    /** Give QuickSight read-only access to IoT Analytics datasets */
    AWSQuickSightIoTAnalyticsAccess = 'arn:aws:iam::aws:policy/AWSQuickSightIoTAnalyticsAccess',
    /** Provides full access to Amazon Comprehend. */
    ComprehendFullAccess = 'arn:aws:iam::aws:policy/ComprehendFullAccess',
    /** Provides read-only access to Amazon Comprehend. */
    ComprehendReadOnly = 'arn:aws:iam::aws:policy/ComprehendReadOnly',
    /** Provides read access to the Greengrass OTA Update artifacts in all Greengrass regions */
    GreengrassOTAUpdateArtifactAccess = 'arn:aws:iam::aws:policy/service-role/GreengrassOTAUpdateArtifactAccess',
    /** Provides read-only access to Amazon Translate. */
    TranslateReadOnly = 'arn:aws:iam::aws:policy/TranslateReadOnly',
    /** Service Linked Role Policy for AWS Cloud9 */
    AWSCloud9ServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSCloud9ServiceRolePolicy',
    /** Provides permission to create AWS Cloud9 development environments and to manage owned environments. */
    AWSCloud9User = 'arn:aws:iam::aws:policy/AWSCloud9User',
    /** Provides administrator access to AWS Cloud9. */
    AWSCloud9Administrator = 'arn:aws:iam::aws:policy/AWSCloud9Administrator',
    /** Provides the ability to be invited into AWS Cloud9 shared development environments. */
    AWSCloud9EnvironmentMember = 'arn:aws:iam::aws:policy/AWSCloud9EnvironmentMember',
    /** Grants full access to AlexaForBusiness resources and access to related AWS Services */
    AlexaForBusinessFullAccess = 'arn:aws:iam::aws:policy/AlexaForBusinessFullAccess',
    /** Provide read only access to AlexaForBusiness services */
    AlexaForBusinessReadOnlyAccess = 'arn:aws:iam::aws:policy/AlexaForBusinessReadOnlyAccess',
    /** Provide device setup access to AlexaForBusiness services */
    AlexaForBusinessDeviceSetup = 'arn:aws:iam::aws:policy/AlexaForBusinessDeviceSetup',
    /** Provide gateway execution access to AlexaForBusiness services */
    AlexaForBusinessGatewayExecution = 'arn:aws:iam::aws:policy/AlexaForBusinessGatewayExecution',
    /** This policy allows users to register things at bulk using AWS IoT StartThingRegistrationTask API */
    AWSIoTThingsRegistration = 'arn:aws:iam::aws:policy/service-role/AWSIoTThingsRegistration',
    /** Provides read only access to AWS Kinesis Video Streams via the AWS Management Console. */
    AmazonKinesisVideoStreamsReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonKinesisVideoStreamsReadOnlyAccess',
    /** Provides full access to Amazon Kinesis Video Streams via the AWS Management Console. */
    AmazonKinesisVideoStreamsFullAccess = 'arn:aws:iam::aws:policy/AmazonKinesisVideoStreamsFullAccess',
    /** Grants AWS SSO permissions to manage AWS resources, including IAM roles, policies and SAML IdP on your behalf. */
    AWSSSOServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSSSOServiceRolePolicy',
    /** This policy allows ElastiCache to manage AWS resources on your behalf as necessary for managing your cache */
    ElastiCacheServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/ElastiCacheServiceRolePolicy',
    /** Allows access to create AWS IoT Job and describe the AWS code signer job */
    AWSIoTOTAUpdate = 'arn:aws:iam::aws:policy/service-role/AWSIoTOTAUpdate',
    /** Provides full access to AWS Elemental MediaPackage resources */
    AWSElementalMediaPackageFullAccess = 'arn:aws:iam::aws:policy/AWSElementalMediaPackageFullAccess',
    /** Provides read only access to AWS Elemental MediaPackage resources */
    AWSElementalMediaPackageReadOnly = 'arn:aws:iam::aws:policy/AWSElementalMediaPackageReadOnly',
    /** Allows Amazon RDS to manage AWS resources on your behalf. */
    AmazonRDSServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonRDSServiceRolePolicy',
    /** Enables access to AWS Services and Resources used or managed by Auto Scaling */
    AutoScalingServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AutoScalingServiceRolePolicy',
    /** Provides read-only access to all Route 53 Auto Naming actions. */
    AmazonRoute53AutoNamingReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonRoute53AutoNamingReadOnlyAccess',
    /** Provides full access to all Route 53 Auto Naming actions. */
    AmazonRoute53AutoNamingFullAccess = 'arn:aws:iam::aws:policy/AmazonRoute53AutoNamingFullAccess',
    /** Policy granting permissions to Application Auto Scaling to access SageMaker and CloudWatch. */
    AWSApplicationAutoscalingSageMakerEndpointPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoscalingSageMakerEndpointPolicy',
    /** Provides full access to service catalog admin capabilities */
    AWSServiceCatalogAdminFullAccess = 'arn:aws:iam::aws:policy/AWSServiceCatalogAdminFullAccess',
    /** Provides full access to service catalog enduser capabilities */
    AWSServiceCatalogEndUserFullAccess = 'arn:aws:iam::aws:policy/AWSServiceCatalogEndUserFullAccess',
    /** Access for the AWS Trusted Advisor Service to help reduce cost, increase performance, and improve security of your AWS environment. */
    AWSTrustedAdvisorServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSTrustedAdvisorServiceRolePolicy',
    /** Provides limited access to the Amazon Cognito configuration service. */
    AmazonESCognitoAccess = 'arn:aws:iam::aws:policy/AmazonESCognitoAccess',
    /** Policy to enable CloudWatch Event Target for AWS Batch Job Submission */
    AWSBatchServiceEventTargetRole = 'arn:aws:iam::aws:policy/service-role/AWSBatchServiceEventTargetRole',
    /** This policy allows DAX to create and manage Network interface, Security group, Subnet and Vpc on behalf of customer */
    DAXServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/DAXServiceRolePolicy',
    /** Provides full read and write access to all MediaStore APIs */
    AWSElementalMediaStoreFullAccess = 'arn:aws:iam::aws:policy/AWSElementalMediaStoreFullAccess',
    /** Full permissions required to use AmazonCloudWatchAgent. */
    CloudWatchAgentAdminPolicy = 'arn:aws:iam::aws:policy/CloudWatchAgentAdminPolicy',
    /** Permissions required to use AmazonCloudWatchAgent on servers */
    CloudWatchAgentServerPolicy = 'arn:aws:iam::aws:policy/CloudWatchAgentServerPolicy',
    /** This is the read only policy for AWS Resource Groups */
    AWSResourceGroupsReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSResourceGroupsReadOnlyAccess',
    /** Provides read-only permissions for MediaStore APIs */
    AWSElementalMediaStoreReadOnly = 'arn:aws:iam::aws:policy/AWSElementalMediaStoreReadOnly',
    /** Provides registrant level access to Route 53 Auto Naming actions. */
    AmazonRoute53AutoNamingRegistrantAccess = 'arn:aws:iam::aws:policy/AmazonRoute53AutoNamingRegistrantAccess',
    /** Allows AWS Config to call read-only AWS Organizations APIs */
    AWSConfigRoleForOrganizations = 'arn:aws:iam::aws:policy/service-role/AWSConfigRoleForOrganizations',
    /** Provides administrative access to the AppSync service, though not enough to access via the console. */
    AWSAppSyncAdministrator = 'arn:aws:iam::aws:policy/AWSAppSyncAdministrator',
    /** Provides access to create, update, and query the schema. */
    AWSAppSyncSchemaAuthor = 'arn:aws:iam::aws:policy/AWSAppSyncSchemaAuthor',
    /** Provides full invoking access to the AppSync service - both through the console and independently */
    AWSAppSyncInvokeFullAccess = 'arn:aws:iam::aws:policy/AWSAppSyncInvokeFullAccess',
    /** Allows EC2 Fleet to launch and manage instances. */
    AWSEC2FleetServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSEC2FleetServiceRolePolicy',
    /** Access policy to allow FM service linked role to perform FM-related actions on FM-managed resources within a customer AWS Organization account. */
    FMSServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/FMSServiceRolePolicy',
    /** Provides access to read only operation for Amazon Transcribe */
    AmazonTranscribeReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonTranscribeReadOnlyAccess',
    /** Provides full access to Amazon Transcribe operations */
    AmazonTranscribeFullAccess = 'arn:aws:iam::aws:policy/AmazonTranscribeFullAccess',
    /** Provides read/write access to AWS Secrets Manager via the AWS Management Console. Note: this exludes IAM actions, so combine with IAMFullAccess if rotation configuration is required. */
    SecretsManagerReadWrite = 'arn:aws:iam::aws:policy/SecretsManagerReadWrite',
    /** Allows AppSync to push logs to user's CloudWatch account. */
    AWSAppSyncPushToCloudWatchLogs = 'arn:aws:iam::aws:policy/service-role/AWSAppSyncPushToCloudWatchLogs',
    /** Allows AWS Artifact read-only access to operations in AWS Organizations. */
    AWSArtifactAccountSync = 'arn:aws:iam::aws:policy/service-role/AWSArtifactAccountSync',
    /** Grants users full access to Elastic Transcoder and the access to associated services that is required for full Elastic Transcoder functionality. */
    AmazonElasticTranscoderFullAccess = 'arn:aws:iam::aws:policy/AmazonElasticTranscoder_FullAccess',
    /** Allows Amazon RDS to manage AWS resources on your behalf. */
    AmazonRDSBetaServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonRDSBetaServiceRolePolicy',
    /** Full access for AWS FM Administrator */
    AWSFMAdminFullAccess = 'arn:aws:iam::aws:policy/AWSFMAdminFullAccess',
    /** Read only access for AWS FM Administrator that allows monitoring AWS FM operations */
    AWSFMAdminReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSFMAdminReadOnlyAccess',
    /** Provides read only access to AWS WAF actions for AWS Firewall Manager member accounts */
    AWSFMMemberReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSFMMemberReadOnlyAccess',
    /** Provides read only access to AWS IoT 1-Click. */
    AWSIoT1ClickReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSIoT1ClickReadOnlyAccess',
    /** Provides full access to AWS IoT 1-Click. */
    AWSIoT1ClickFullAccess = 'arn:aws:iam::aws:policy/AWSIoT1ClickFullAccess',
    /** This policy provides Kubernetes the permissions it requires to manage resources on your behalf. Kubernetes requires Ec2:CreateTags permissions to place identifying information on EC2 resources including but not limited to Instances, Security Groups, and Elastic Network Interfaces. */
    AmazonEKSClusterPolicy = 'arn:aws:iam::aws:policy/AmazonEKSClusterPolicy',
    /** This policy provides the Amazon VPC CNI Plugin (amazon-vpc-cni-k8s) the permissions it requires to modify the IP address configuration on your EKS worker nodes. This permission set allows the CNI to list, describe, and modify Elastic Network Interfaces on your behalf. More information on the AWS VPC CNI Plugin is available here: https://github.com/aws/amazon-vpc-cni-k8s */
    AmazonEKSCNIPolicy = 'arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy',
    /** This policy allows Amazon Elastic Container Service for Kubernetes to create and manage the necessary resources to operate EKS Clusters. */
    AmazonEKSServicePolicy = 'arn:aws:iam::aws:policy/AmazonEKSServicePolicy',
    /** This policy allows Amazon EKS worker nodes to connect to Amazon EKS Clusters. */
    AmazonEKSWorkerNodePolicy = 'arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy',
    /** Provides read only access to Amazon Neptune. Note that this policy also grants access to Amazon RDS resources. For more information, see https://aws.amazon.com/neptune/faqs/. */
    NeptuneReadOnlyAccess = 'arn:aws:iam::aws:policy/NeptuneReadOnlyAccess',
    /** Provides full access to Amazon Neptune. Note this policy also grants full access to publish on all SNS topics within the account and full access to Amazon RDS. For more information, see https://aws.amazon.com/neptune/faqs/. */
    NeptuneFullAccess = 'arn:aws:iam::aws:policy/NeptuneFullAccess',
    /** Allows Config to call AWS services and collect resource configurations on your behalf. */
    AWSConfigServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSConfigServiceRolePolicy',
    /** Amazon RDS Preview Service Role Policy */
    AmazonRDSPreviewServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonRDSPreviewServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access APIGateway and CloudWatch for custom resource scaling */
    AWSApplicationAutoScalingCustomResourcePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoScalingCustomResourcePolicy',
    /** Provides the AWS DDoS Response Team with limited access to your AWS account to assist with DDoS attack mitigation during a high-severity event. */
    AWSShieldDRTAccessPolicy = 'arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy',
    /** Grants users read-only access to Elastic Transcoder and list access to related services. */
    AmazonElasticTranscoderReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonElasticTranscoder_ReadOnlyAccess',
    /** Grants users permission to change presets, submit jobs, and view Elastic Transcoder settings. This policy also grants some read-only access to some other services required to use the Elastic Transcode console, including S3, IAM, and SNS. */
    AmazonElasticTranscoderJobsSubmitter = 'arn:aws:iam::aws:policy/AmazonElasticTranscoder_JobsSubmitter',
    /** Grants CloudFront Logger write permissions to CloudWatch Logs. */
    AWSCloudFrontLogger = 'arn:aws:iam::aws:policy/aws-service-role/AWSCloudFrontLogger',
    /** Provides receive message, delete message, and read attribute access to SQS queues, and write permissions to CloudWatch logs. */
    AWSLambdaSQSQueueExecutionRole = 'arn:aws:iam::aws:policy/service-role/AWSLambdaSQSQueueExecutionRole',
    /** Provides read only access to IoT Analytics. */
    AWSIoTAnalyticsReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSIoTAnalyticsReadOnlyAccess',
    /** Provides full access to IoT Analytics. */
    AWSIoTAnalyticsFullAccess = 'arn:aws:iam::aws:policy/AWSIoTAnalyticsFullAccess',
    /** Provides full access to manage Amazon Neptune using the AWS Console. Note this policy also grants full access to publish on all SNS topics within the account, permissions to create and edit Amazon EC2 instances and VPC configurations, permissions to view and list keys on Amazon KMS, and full access to Amazon RDS. For more information, see https://aws.amazon.com/neptune/faqs/. */
    NeptuneConsoleFullAccess = 'arn:aws:iam::aws:policy/NeptuneConsoleFullAccess',
    /** Service linked role for Amazon Macie */
    AmazonMacieServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonMacieServiceRolePolicy',
    /** Provides read only access to AWS Elemental MediaConvert via the AWS Management Console and SDK. */
    AWSElementalMediaConvertReadOnly = 'arn:aws:iam::aws:policy/AWSElementalMediaConvertReadOnly',
    /** Provides full access to AWS Elemental MediaConvert via the AWS Management Console and SDK. */
    AWSElementalMediaConvertFullAccess = 'arn:aws:iam::aws:policy/AWSElementalMediaConvertFullAccess',
    /** Provides read only access to AWS SSO configurations. */
    AWSSSOReadOnly = 'arn:aws:iam::aws:policy/AWSSSOReadOnly',
    /** Provides access within AWS SSO to manage AWS Organizations master and member accounts and cloud application */
    AWSSSOMasterAccountAdministrator = 'arn:aws:iam::aws:policy/AWSSSOMasterAccountAdministrator',
    /** Provides access within AWS SSO to manage AWS Organizations member accounts and cloud application */
    AWSSSOMemberAccountAdministrator = 'arn:aws:iam::aws:policy/AWSSSOMemberAccountAdministrator',
    /** Grants permission to create the service-linked role of Amazon Macie. */
    AmazonMacieHandshakeRole = 'arn:aws:iam::aws:policy/service-role/AmazonMacieHandshakeRole',
    /** Provides appropriate permissions to AWS Data Lifecycle Manager to take actions on AWS resources */
    AWSDataLifecycleManagerServiceRole = 'arn:aws:iam::aws:policy/service-role/AWSDataLifecycleManagerServiceRole',
    /** Provides read access for IoT and related resources */
    AWSIoTDeviceDefenderAudit = 'arn:aws:iam::aws:policy/service-role/AWSIoTDeviceDefenderAudit',
    /** Provides full access to AWS Marketplace Private Image Build Feature. In addition to create private images, it also provides permissions to add tags to images, launch and terminate ec2 instances. */
    AWSMarketplaceImageBuildFullAccess = 'arn:aws:iam::aws:policy/AWSMarketplaceImageBuildFullAccess',
    /** Provides write access to AWS resources required for AWS Discovery Continuous Export */
    AWSDiscoveryContinuousExportFirehosePolicy = 'arn:aws:iam::aws:policy/AWSDiscoveryContinuousExportFirehosePolicy',
    /** Enables access to AWS Services and Resources used or managed by Application Discovery Service Continuous Export feature */
    ApplicationDiscoveryServiceContinuousExportServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/ApplicationDiscoveryServiceContinuousExportServiceRolePolicy',
    /** Policy granting permissions to AWS Auto Scaling to periodically forecast capacity and generate scheduled scaling actions for Auto Scaling groups in a scaling plan */
    AWSAutoScalingPlansEC2AutoScalingPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSAutoScalingPlansEC2AutoScalingPolicy',
    /** Creating SLR to write customer's logs to a firehose stream */
    WAFRegionalLoggingServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/WAFRegionalLoggingServiceRolePolicy',
    /** Creating SLR to write customer's logs to a firehose stream */
    WAFLoggingServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/WAFLoggingServiceRolePolicy',
    /** Allows user to access Amazon FreeRTOS OTA Update */
    AmazonFreeRTOSOTAUpdate = 'arn:aws:iam::aws:policy/service-role/AmazonFreeRTOSOTAUpdate',
    /** Allow the AWS X-Ray Daemon to relay raw trace segments data to the service's API and retrieve sampling data (rules, targets, etc.) to be used by the X-Ray SDK. */
    AWSXRayDaemonWriteAccess = 'arn:aws:iam::aws:policy/AWSXRayDaemonWriteAccess',
    /** Allows Amazon Connect to create and manage AWS resources on your behalf. */
    AmazonConnectServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonConnectServiceLinkedRolePolicy',
    /** Provides read only access to Amazon ElasticLoadBalancing and dependent services */
    ElasticLoadBalancingReadOnly = 'arn:aws:iam::aws:policy/ElasticLoadBalancingReadOnly',
    /** Provides full access to Amazon ElasticLoadBalancing, and limited access to other services necessary to provide ElasticLoadBalancing features. */
    ElasticLoadBalancingFullAccess = 'arn:aws:iam::aws:policy/ElasticLoadBalancingFullAccess',
    /** AWS Lightsail service linked role policy which grants permissions to export resources */
    LightsailExportAccess = 'arn:aws:iam::aws:policy/aws-service-role/LightsailExportAccess',
    /** Provides full access to the Amazon Redshift Query Editor and to saved queries via the AWS Management Console. */
    AmazonRedshiftQueryEditor = 'arn:aws:iam::aws:policy/AmazonRedshiftQueryEditor',
    /** Provides full access to AWS Glue via the AWS Management Console and access to sagemaker notebook instances. */
    AWSGlueConsoleSageMakerNotebookFullAccess = 'arn:aws:iam::aws:policy/AWSGlueConsoleSageMakerNotebookFullAccess',
    /** Grants permission to view the Amazon Connect instances in your AWS account. */
    AmazonConnectReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonConnectReadOnlyAccess',
    /** Provides auditor access to AWS Certificate Manager Private Certificate Authority */
    AWSCertificateManagerPrivateCAAuditor = 'arn:aws:iam::aws:policy/AWSCertificateManagerPrivateCAAuditor',
    /** Provides certificate user access to AWS Certificate Manager Private Certificate Authority */
    AWSCertificateManagerPrivateCAUser = 'arn:aws:iam::aws:policy/AWSCertificateManagerPrivateCAUser',
    /** Provides full access to AWS Certificate Manager Private Certificate Authority */
    AWSCertificateManagerPrivateCAFullAccess = 'arn:aws:iam::aws:policy/AWSCertificateManagerPrivateCAFullAccess',
    /** Provides read only access to AWS Certificate Manager Private Certificate Authority */
    AWSCertificateManagerPrivateCAReadOnly = 'arn:aws:iam::aws:policy/AWSCertificateManagerPrivateCAReadOnly',
    /** Permission policy for CloudTrail ServiceLinkedRole */
    CloudTrailServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/CloudTrailServiceRolePolicy',
    /** This policy gives read only access to the AWS Greengrass configuration, management and deployment actions */
    AWSGreengrassReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSGreengrassReadOnlyAccess',
    /** ReadOnly access for SSO Directory */
    AWSSSODirectoryReadOnly = 'arn:aws:iam::aws:policy/AWSSSODirectoryReadOnly',
    /** Administrator access for SSO Directory */
    AWSSSODirectoryAdministrator = 'arn:aws:iam::aws:policy/AWSSSODirectoryAdministrator',
    /** Provides full access to AWS Organizations. */
    AWSOrganizationsFullAccess = 'arn:aws:iam::aws:policy/AWSOrganizationsFullAccess',
    /** Provides read-only access to AWS Organizations. */
    AWSOrganizationsReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSOrganizationsReadOnlyAccess',
    /** Allows AWS IoT SiteWise to provision and manage gateways as well as query data. The policy includes required AWS Greengrass permissions for deploying to groups, AWS Lambda permissions for creating and updating service-prefixed functions, and AWS IoT Analytics permissions for querying data from datastores. */
    AWSServiceRoleForIoTSiteWise = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForIoTSiteWise',
    /** Policy containing Read-only AWS Resource Access Manager access to customers' Organizations structure. It also contains IAM permissions to self-delete the role. */
    AWSResourceAccessManagerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSResourceAccessManagerServiceRolePolicy',
    /** Enables access to AWS services and resources required for AWS KMS custom key stores */
    AWSKeyManagementServiceCustomKeyStoresServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSKeyManagementServiceCustomKeyStoresServiceRolePolicy',
    /** IAM service linked role policy for Kafka. */
    KafkaServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/KafkaServiceRolePolicy',
    /** Default policy for the Amazon Elastic MapReduce Editors service role. */
    AmazonElasticMapReduceEditorsRole = 'arn:aws:iam::aws:policy/service-role/AmazonElasticMapReduceEditorsRole',
    /** Allows full access to use the RDS data APIs, secret store APIs for RDS database credentials, and DB console query management APIs to execute SQL statements on Aurora Serverless clusters in the AWS account. */
    AmazonRDSDataFullAccess = 'arn:aws:iam::aws:policy/AmazonRDSDataFullAccess',
    /** Provides read only access to AWS RoboMaker via the AWS Management Console and SDK */
    AWSRoboMakerReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSRoboMakerReadOnlyAccess',
    /** RoboMaker service policy */
    AWSRoboMakerServiceRolePolicy = 'arn:aws:iam::aws:policy/AWSRoboMakerServiceRolePolicy',
    /** RoboMaker service policy */
    AWSRoboMakerServicePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSRoboMakerServicePolicy',
    /** Allow VPC Transit Gateway to create and manage necessary resources for your Transit Gateway VPC Attachments. */
    AWSVPCTransitGatewayServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSVPCTransitGatewayServiceRolePolicy',
    /** AWS License Manager service default role policy */
    AWSLicenseManagerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSLicenseManagerServiceRolePolicy',
    /** AWS License Manager service master account role policy */
    AWSLicenseManagerMasterAccountRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSLicenseManagerMasterAccountRolePolicy',
    /** AWS License Manager service member account role policy */
    AWSLicenseManagerMemberAccountRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSLicenseManagerMemberAccountRolePolicy',
    /** Permissions to allow the AWS Server Migration Service to create and update relevant AWS resources into the customer's AWS account for launching migrated servers and applications. */
    ServerMigrationServiceLaunchRole = 'arn:aws:iam::aws:policy/service-role/ServerMigrationServiceLaunchRole',
    /** Allow GlobalAccelerator Users Access to Read Only APIs */
    GlobalAcceleratorReadOnlyAccess = 'arn:aws:iam::aws:policy/GlobalAcceleratorReadOnlyAccess',
    /** Allow GlobalAccelerator Users full Access to all APIs */
    GlobalAcceleratorFullAccess = 'arn:aws:iam::aws:policy/GlobalAcceleratorFullAccess',
    /** Provides full access to all administrative actions for an AWS Private Marketplace. */
    AWSPrivateMarketplaceAdminFullAccess = 'arn:aws:iam::aws:policy/AWSPrivateMarketplaceAdminFullAccess',
    /** Provides full access to Amazon Comprehend Medical */
    ComprehendMedicalFullAccess = 'arn:aws:iam::aws:policy/ComprehendMedicalFullAccess',
    /** Provides CodeDeploy service wide access to perform an ECS blue/green deployment on your behalf. Grants full access to support services, such as  full access to read all S3 objects, invoke all Lambda functions, publish to all SNS topics within the account and update all ECS services. */
    AWSCodeDeployRoleForECS = 'arn:aws:iam::aws:policy/AWSCodeDeployRoleForECS',
    /**  Provides CodeDeploy service limited access to perform an ECS blue/green deployment on your behalf. */
    AWSCodeDeployRoleForECSLimited = 'arn:aws:iam::aws:policy/AWSCodeDeployRoleForECSLimited',
    /** Provides full access to Amazon Translate. */
    TranslateFullAccess = 'arn:aws:iam::aws:policy/TranslateFullAccess',
    /** A service-linked role required for AWS Security Hub to access your resources. */
    AWSSecurityHubServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSSecurityHubServiceRolePolicy',
    /** Provides full access to use AWS Security Hub. */
    AWSSecurityHubFullAccess = 'arn:aws:iam::aws:policy/AWSSecurityHubFullAccess',
    /** Provides read only access to AWS Security Hub resources */
    AWSSecurityHubReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSSecurityHubReadOnlyAccess',
    /** Allows Amazon FSx to manage AWS resources on your behalf */
    AmazonFSxServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonFSxServiceRolePolicy',
    /** Allows Amazon FSx to delete its Service Linked Roles for Amazon S3 access */
    FSxDeleteServiceLinkedRoleAccess = 'arn:aws:iam::aws:policy/aws-service-role/FSxDeleteServiceLinkedRoleAccess',
    /** Provides read only access to Amazon FSx. */
    AmazonFSxReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonFSxReadOnlyAccess',
    /** Provides full access to Amazon FSx and access to related AWS services. */
    AmazonFSxFullAccess = 'arn:aws:iam::aws:policy/AmazonFSxFullAccess',
    /** Provides read only access to Amazon FSx and access to related AWS services via the AWS Management Console. */
    AmazonFSxConsoleReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonFSxConsoleReadOnlyAccess',
    /** Provides full access to Amazon FSx and access to related AWS services via the AWS Management Console. */
    AmazonFSxConsoleFullAccess = 'arn:aws:iam::aws:policy/AmazonFSxConsoleFullAccess',
    /** Access to all Amazon Textract APIs */
    AmazonTextractFullAccess = 'arn:aws:iam::aws:policy/AmazonTextractFullAccess',
    /** Allows Textract to call AWS services on your behalf. */
    AmazonTextractServiceRole = 'arn:aws:iam::aws:policy/service-role/AmazonTextractServiceRole',
    /** Provides read-only access to all AWS Cloud Map actions. */
    AWSCloudMapReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSCloudMapReadOnlyAccess',
    /** Provides full access to all AWS Cloud Map actions. */
    AWSCloudMapFullAccess = 'arn:aws:iam::aws:policy/AWSCloudMapFullAccess',
    /** Provides access to AWS Cloud Map discovery API. */
    AWSCloudMapDiscoverInstanceAccess = 'arn:aws:iam::aws:policy/AWSCloudMapDiscoverInstanceAccess',
    /** Provides registrant level access to AWS Cloud Map actions. */
    AWSCloudMapRegisterInstanceAccess = 'arn:aws:iam::aws:policy/AWSCloudMapRegisterInstanceAccess',
    /** Provides full access to AWS Well-Architected Tool via the AWS Management Console */
    WellArchitectedConsoleFullAccess = 'arn:aws:iam::aws:policy/WellArchitectedConsoleFullAccess',
    /** Provides read-only access to AWS Well-Architected Tool via the AWS Management Console */
    WellArchitectedConsoleReadOnlyAccess = 'arn:aws:iam::aws:policy/WellArchitectedConsoleReadOnlyAccess',
    /** Cloudwatch Application Insights Service Linked Role Policy */
    CloudwatchApplicationInsightsServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/CloudwatchApplicationInsightsServiceLinkedRolePolicy',
    /** Provides full access to IoT SiteWise. */
    AWSIoTSiteWiseFullAccess = 'arn:aws:iam::aws:policy/AWSIoTSiteWiseFullAccess',
    /** Provides read only access to IoT SiteWise. */
    AWSIoTSiteWiseReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSIoTSiteWiseReadOnlyAccess',
    /** Provides full access to Amazon Personalize via the AWS Management Console and SDK. Also provides select access to related services (e.g., S3, CloudWatch). */
    AmazonPersonalizeFullAccess = 'arn:aws:iam::aws:policy/service-role/AmazonPersonalizeFullAccess',
    /** Policy to enable AWS Client VPN to manage your Client VPN endpoints. */
    ClientVPNServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/ClientVPNServiceRolePolicy',
    /** Provides read only access to AmazonMQ via our API/SDK. */
    AmazonMQApiReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonMQApiReadOnlyAccess',
    /** Provides full access to AmazonMQ via our API/SDK. */
    AmazonMQApiFullAccess = 'arn:aws:iam::aws:policy/AmazonMQApiFullAccess',
    /** Provides full access to Amazon DocumentDB with MongoDB compatibility. Note this policy also grants full access to publish on all SNS topics within the account and full access to Amazon RDS and Amazon Neptune. */
    AmazonDocDBFullAccess = 'arn:aws:iam::aws:policy/AmazonDocDBFullAccess',
    /** Provides read-only access to Amazon DocumentDB with MongoDB compatibility. Note that this policy also grants access to Amazon RDS and Amazon Neptune resources. */
    AmazonDocDBReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonDocDBReadOnlyAccess',
    /** Provides full access to manage Amazon DocumentDB with MongoDB compatibility using the AWS Management Console. Note this policy also grants full access to publish on all SNS topics within the account, permissions to create and edit Amazon EC2 instances and VPC configurations, permissions to view and list keys on Amazon KMS, and full access to Amazon RDS and Amazon Neptune. */
    AmazonDocDBConsoleFullAccess = 'arn:aws:iam::aws:policy/AmazonDocDBConsoleFullAccess',
    /** Provides AWS Backup permission to create backups on your behalf across AWS services */
    AWSBackupServiceRolePolicyForBackup = 'arn:aws:iam::aws:policy/service-role/AWSBackupServiceRolePolicyForBackup',
    /** Provides read only access to IoT Events. */
    AWSIoTEventsReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSIoTEventsReadOnlyAccess',
    /** Provides full access to IoT Events. */
    AWSIoTEventsFullAccess = 'arn:aws:iam::aws:policy/AWSIoTEventsFullAccess',
    /** AWS Elastic Beanstalk Service Role policy that grants limited permissions to update your resources on your behalf for maintenance purposes. */
    AWSElasticBeanstalkMaintenance = 'arn:aws:iam::aws:policy/aws-service-role/AWSElasticBeanstalkMaintenance',
    /** Provides AWS Backup permission to perform restores on your behalf across AWS services. This policy includes permissions to create and delete AWS resources, such as EBS volumes, RDS instances, and EFS file systems, which are part of the restore process. */
    AWSBackupServiceRolePolicyForRestores = 'arn:aws:iam::aws:policy/service-role/AWSBackupServiceRolePolicyForRestores',
    /** Allows AWS Transfer full access to create log streams and groups and put log events to your account */
    AWSTransferLoggingAccess = 'arn:aws:iam::aws:policy/service-role/AWSTransferLoggingAccess',
    /** Provide full access to Amazon MSK and other required permissions for its dependencies. */
    AmazonMSKFullAccess = 'arn:aws:iam::aws:policy/AmazonMSKFullAccess',
    /** Provide readonly access to Amazon MSK */
    AmazonMSKReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonMSKReadOnlyAccess',
    /** Gives access to all actions for Amazon Forecast */
    AmazonForecastFullAccess = 'arn:aws:iam::aws:policy/AmazonForecastFullAccess',
    /** Provides read-only access to AWS DataSync */
    AWSDataSyncReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSDataSyncReadOnlyAccess',
    /** Provides full access to AWS DataSync and minimal access to its dependencies */
    AWSDataSyncFullAccess = 'arn:aws:iam::aws:policy/AWSDataSyncFullAccess',
    /** Enables access to AWS Services and Resources used or managed by Amazon WorkLink */
    WorkLinkServiceRolePolicy = 'arn:aws:iam::aws:policy/WorkLinkServiceRolePolicy',
    /** Allows DeepRacer to create required resources and call AWS services on your behalf. */
    AWSDeepRacerServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AWSDeepRacerServiceRolePolicy',
    /** Allows CloudFormation to create and manage AWS stacks and resources on your behalf. */
    AWSDeepRacerCloudFormationAccessPolicy = 'arn:aws:iam::aws:policy/AWSDeepRacerCloudFormationAccessPolicy',
    /** Allows RoboMaker to create required resources and call AWS services on your behalf. */
    AWSDeepRacerRoboMakerAccessPolicy = 'arn:aws:iam::aws:policy/AWSDeepRacerRoboMakerAccessPolicy',
    /** Policy for AWS Comprehend service role which allows access to S3 resources for data access */
    ComprehendDataAccessRolePolicy = 'arn:aws:iam::aws:policy/service-role/ComprehendDataAccessRolePolicy',
    /** This policy enables Alexa for Business to perform automated tasks scheduled by your network profiles. */
    AlexaForBusinessNetworkProfileServicePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AlexaForBusinessNetworkProfileServicePolicy',
    /** The policy for Amazon EC2 Role to enable AWS Systems Manager service core functionality. */
    AmazonSSMManagedInstanceCore = 'arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore',
    /** This policy allows SSM Agent to access Directory Service on behalf of the customer for domain-join the managed instance. */
    AmazonSSMDirectoryServiceAccess = 'arn:aws:iam::aws:policy/AmazonSSMDirectoryServiceAccess',
    /** Allows Amazon Cognito User Pools service to use your SES identities for email sending */
    AmazonCognitoIdpEmailServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonCognitoIdpEmailServiceRolePolicy',
    /** Provides full access to AWS IQ */
    AWSIQFullAccess = 'arn:aws:iam::aws:policy/AWSIQFullAccess',
    /** Policy granting permissions to AWS Global Accelerator to manage EC2 Elastic Network Interfaces and Security Groups. */
    AWSGlobalAcceleratorSLRPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSGlobalAcceleratorSLRPolicy',
    /** Enables access to AWS Services and Resources used or managed by Amazon WorkMail Events */
    AmazonWorkMailEventsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonWorkMailEventsServiceRolePolicy',
    /** Provides full access to the AWS App Mesh APIs and Management Console. */
    AWSAppMeshFullAccess = 'arn:aws:iam::aws:policy/AWSAppMeshFullAccess',
    /** Provides read-only access to the AWS App Mesh APIs and Management Console. */
    AWSAppMeshReadOnly = 'arn:aws:iam::aws:policy/AWSAppMeshReadOnly',
    /** Provides full access to Amazon Managed Blockchain via the AWS Management Console */
    AmazonManagedBlockchainConsoleFullAccess = 'arn:aws:iam::aws:policy/AmazonManagedBlockchainConsoleFullAccess',
    /** Provides full access to Amazon Managed Blockchain. */
    AmazonManagedBlockchainFullAccess = 'arn:aws:iam::aws:policy/AmazonManagedBlockchainFullAccess',
    /** Provides read-only access to Amazon Managed Blockchain. */
    AmazonManagedBlockchainReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonManagedBlockchainReadOnlyAccess',
    /** Deny all access. */
    AWSDenyAll = 'arn:aws:iam::aws:policy/AWSDenyAll',
    /** Provides access to AWS Resources managed or used by AWS Control Tower */
    AWSControlTowerServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AWSControlTowerServiceRolePolicy',
    /** Full access policy for Route 53 Resolver */
    AmazonRoute53ResolverFullAccess = 'arn:aws:iam::aws:policy/AmazonRoute53ResolverFullAccess',
    /** Read only policy for Route 53 Resolver */
    AmazonRoute53ResolverReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonRoute53ResolverReadOnlyAccess',
    /** Provides full access to manage AWS IoT SiteWise using the AWS Management Console. Note this policy also grants access to create and list data stores used with AWS IoT SiteWise (e.g. AWS IoT Analytics), access to list and view AWS IoT Greengrass resources, list and modify AWS Secrets Manager secrets, retrieve AWS IoT thing shadows, list resources with specific tags, and create and use a service-linked role for AWS IoT SiteWise. */
    AWSIoTSiteWiseConsoleFullAccess = 'arn:aws:iam::aws:policy/AWSIoTSiteWiseConsoleFullAccess',
    /** Enables access to AWS Services and Resources used or managed by AWS AppMesh */
    AWSAppMeshServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSAppMeshServiceRolePolicy',
    /** Provides full access to AWS Resource Access Manager */
    AWSResourceAccessManagerFullAccess = 'arn:aws:iam::aws:policy/AWSResourceAccessManagerFullAccess',
    /** Allows Migration Hub to call Application Discovery Service on your behalf */
    MigrationHubServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/MigrationHubServiceRolePolicy',
    /** Policy for Database Migration Service to assume role in customer's account to call Migration Hub */
    MigrationHubDMSAccessServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/MigrationHubDMSAccessServiceRolePolicy',
    /** Policy for Server Migration Service to assume role in customer's account to call Migration Hub */
    MigrationHubSMSAccessServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/MigrationHubSMSAccessServiceRolePolicy',
    /** Allows Config to call AWS services and deploy config resources across organization */
    AWSConfigMultiAccountSetupPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSConfigMultiAccountSetupPolicy',
    /** Policy to enable registration of On-Premises instances via the OpsWorks CLI */
    AWSOpsWorksRegisterCLIOnPremises = 'arn:aws:iam::aws:policy/AWSOpsWorksRegisterCLI_OnPremises',
    /** Policy to enable registration of EC2 instances via the OpsWorks CLI */
    AWSOpsWorksRegisterCLIEC2 = 'arn:aws:iam::aws:policy/AWSOpsWorksRegisterCLI_EC2',
    /** Allows AWS Config to remediate noncompliant resources on your behalf. */
    AWSConfigRemediationServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSConfigRemediationServiceRolePolicy',
    /** Enables access to AWS Services and Resources used or managed by AWS App Mesh */
    AWSAppMeshPreviewServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSAppMeshPreviewServiceRolePolicy',
    /** Provides privileged certificate user access to AWS Certificate Manager Private Certificate Authority */
    AWSCertificateManagerPrivateCAPrivilegedUser = 'arn:aws:iam::aws:policy/AWSCertificateManagerPrivateCAPrivilegedUser',
    /** Policy to grant temporary data access to Lake Formation resources */
    LakeFormationDataAccessServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/LakeFormationDataAccessServiceRolePolicy',
    /** This policy grants access to read all access information provided by IAM access advisor such as service last accessed information. */
    IAMAccessAdvisorReadOnly = 'arn:aws:iam::aws:policy/IAMAccessAdvisorReadOnly',
    /** Allows Service Quotas to create support cases on your behalf */
    ServiceQuotasServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/ServiceQuotasServiceRolePolicy',
    /** Provides read only access to Service Quotas */
    ServiceQuotasReadOnlyAccess = 'arn:aws:iam::aws:policy/ServiceQuotasReadOnlyAccess',
    /** Provides full access to Service Quotas */
    ServiceQuotasFullAccess = 'arn:aws:iam::aws:policy/ServiceQuotasFullAccess',
    /** Provides full access to all administrative actions for an AWS Marketplace eProcurement integration. */
    AWSMarketplaceProcurementSystemAdminFullAccess = 'arn:aws:iam::aws:policy/AWSMarketplaceProcurementSystemAdminFullAccess',
    /** Allows customers to call EC2 Instance Connect to publish ephemeral keys to their EC2 instances and connect via ssh or the EC2 Instance Connect CLI. */
    EC2InstanceConnect = 'arn:aws:iam::aws:policy/EC2InstanceConnect',
    /** Provides customer account access to AWS WorkSpaces service for launching a Workspace. */
    AmazonWorkSpacesServiceAccess = 'arn:aws:iam::aws:policy/AmazonWorkSpacesServiceAccess',
    /** Provides access to Amazon WorkSpaces backend service to perform Workspace Self Service actions */
    AmazonWorkSpacesSelfServiceAccess = 'arn:aws:iam::aws:policy/AmazonWorkSpacesSelfServiceAccess',
    /** Provides full access to all seller operations on the AWS Marketplace and other AWS services such as AMI management. */
    AWSMarketplaceSellerFullAccess = 'arn:aws:iam::aws:policy/AWSMarketplaceSellerFullAccess',
    /** Provides sellers full access to AWS Marketplace Management Products page and other AWS services such as AMI management. */
    AWSMarketplaceSellerProductsFullAccess = 'arn:aws:iam::aws:policy/AWSMarketplaceSellerProductsFullAccess',
    /** Provide sellers read-only access to AWS Marketplace Management Products page. */
    AWSMarketplaceSellerProductsReadOnly = 'arn:aws:iam::aws:policy/AWSMarketplaceSellerProductsReadOnly',
    /** App Mesh Envoy policy for accessing Virtual Node configuration. */
    AWSAppMeshEnvoyAccess = 'arn:aws:iam::aws:policy/AWSAppMeshEnvoyAccess',
    /** Provides read only access to Amazon EventBridge. */
    AmazonEventBridgeReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonEventBridgeReadOnlyAccess',
    /** Provides full access to Amazon EventBridge. */
    AmazonEventBridgeFullAccess = 'arn:aws:iam::aws:policy/AmazonEventBridgeFullAccess',
    /** Allows CloudWatch to assume CloudWatch-CrossAccountSharing roles in remote accounts on behalf of the current account in order to display data cross-account, cross-region */
    CloudWatchCrossAccountAccess = 'arn:aws:iam::aws:policy/aws-service-role/CloudWatch-CrossAccountAccess',
    /** Provides access to the non-CloudWatch APIs used to display CloudWatch Automatic Dashboards, including the contents of objects such as Lambda functions */
    CloudWatchAutomaticDashboardsAccess = 'arn:aws:iam::aws:policy/CloudWatchAutomaticDashboardsAccess',
    /** Policy needed for AWSConfig to create conformance packs */
    ConfigConformsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/ConfigConformsServiceRolePolicy',
    /** Provides full access to AWS CloudFormation. */
    AWSCloudFormationFullAccess = 'arn:aws:iam::aws:policy/AWSCloudFormationFullAccess',
    /** Full access to view and take action on Elemental Appliances and Software quotes and orders */
    ElementalAppliancesSoftwareFullAccess = 'arn:aws:iam::aws:policy/ElementalAppliancesSoftwareFullAccess',
    /** App Mesh Preview Envoy policy for accessing Virtual Node configuration. */
    AWSAppMeshPreviewEnvoyAccess = 'arn:aws:iam::aws:policy/AWSAppMeshPreviewEnvoyAccess',
    /** Allow Site-to-Site VPN to create and manage resources related to your VPN Connections. */
    AWSVPCS2SVpnServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSVPCS2SVpnServiceRolePolicy',
    /** Provides access to AWS services and resources necessary to migrate service instances into AWS including EC2, S3 and Cloudformation. */
    AWSServiceRoleForSMS = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForSMS',
    /** Provides access for enabling IoT logging for execution of ENABLE_IOT_LOGGING mitigation action */
    AWSIoTDeviceDefenderEnableIoTLoggingMitigationAction = 'arn:aws:iam::aws:policy/service-role/AWSIoTDeviceDefenderEnableIoTLoggingMitigationAction',
    /** Provides messages publish access to SNS topic for execution of PUBLISH_FINDING_TO_SNS mitigation action */
    AWSIoTDeviceDefenderPublishFindingsToSNSMitigationAction = 'arn:aws:iam::aws:policy/service-role/AWSIoTDeviceDefenderPublishFindingsToSNSMitigationAction',
    /** Provides write access to IoT policies for execution of REPLACE_DEFAULT_POLICY_VERSION mitigation action */
    AWSIoTDeviceDefenderReplaceDefaultPolicyMitigationAction = 'arn:aws:iam::aws:policy/service-role/AWSIoTDeviceDefenderReplaceDefaultPolicyMitigationAction',
    /** Provides write access to IoT CA certificates for execution of  UPDATE_CA_CERTIFICATE mitigation action */
    AWSIoTDeviceDefenderUpdateCACertMitigationAction = 'arn:aws:iam::aws:policy/service-role/AWSIoTDeviceDefenderUpdateCACertMitigationAction',
    /** Provides write access to IoT certificates for execution of UPDATE_DEVICE_CERTIFICATE mitigation action */
    AWSIoTDeviceDefenderUpdateDeviceCertMitigationAction = 'arn:aws:iam::aws:policy/service-role/AWSIoTDeviceDefenderUpdateDeviceCertMitigationAction',
    /** Provides write access to IoT thing groups and read access to IoT Certificates for execution of ADD_THINGS_TO_THING_GROUP mitigation action */
    AWSIoTDeviceDefenderAddThingsToThingGroupMitigationAction = 'arn:aws:iam::aws:policy/service-role/AWSIoTDeviceDefenderAddThingsToThingGroupMitigationAction',
    /** Grants administrative access to AWS Lake Formation and related services, such as AWS Glue, to manage data lakes */
    AWSLakeFormationDataAdmin = 'arn:aws:iam::aws:policy/AWSLakeFormationDataAdmin',
    /** Used by AWS IQ to execute payment requests on behalf of a customer */
    AWSIQContractServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSIQContractServiceRolePolicy',
    /** Allows AWS IQ to manage the role assumed by AWS IQ experts. */
    AWSIQPermissionServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSIQPermissionServiceRolePolicy',
    /** Provides read only access to Amazon QLDB. */
    AmazonQLDBReadOnly = 'arn:aws:iam::aws:policy/AmazonQLDBReadOnly',
    /** Provides full access to Amazon QLDB via the service API. */
    AmazonQLDBFullAccess = 'arn:aws:iam::aws:policy/AmazonQLDBFullAccess',
    /** Provides full access to Amazon QLDB via the AWS Management Console. */
    AmazonQLDBConsoleFullAccess = 'arn:aws:iam::aws:policy/AmazonQLDBConsoleFullAccess',
    /** Managed policy for Service Linked Role for Amazon Chime VoiceConnector */
    AmazonChimeVoiceConnectorServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonChimeVoiceConnectorServiceLinkedRolePolicy',
    /** Enables access to AWS Resources used or managed by Amazon Chime */
    AmazonChimeServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonChimeServiceRolePolicy',
    /** Allows Log Delivery service to deliver logs by calling log destination on your behalf. */
    AWSServiceRoleForLogDeliveryPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForLogDeliveryPolicy',
    /** Provide access to Poly AVS devices */
    AlexaForBusinessPolyDelegatedAccessPolicy = 'arn:aws:iam::aws:policy/AlexaForBusinessPolyDelegatedAccessPolicy',
    /** Managed policy for Service Linked Role for Amazon SageMaker Notebooks */
    AmazonSageMakerNotebooksServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonSageMakerNotebooksServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access Lambda and CloudWatch. */
    AWSApplicationAutoscalingLambdaConcurrencyPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoscalingLambdaConcurrencyPolicy',
    /** Grants AWS Systems Manager (SSM) permission to discover AWS account information. */
    AWSSystemsManagerAccountDiscoveryServicePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSSystemsManagerAccountDiscoveryServicePolicy',
    /** Provides read-only access to Service Catalog end-user capabilities */
    AWSServiceCatalogEndUserReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSServiceCatalogEndUserReadOnlyAccess',
    /** Provides read-only access to Service Catalog admin capabilities */
    AWSServiceCatalogAdminReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSServiceCatalogAdminReadOnlyAccess',
    /** Provides access to creating requests in an AWS Private Marketplace. */
    AWSPrivateMarketplaceRequests = 'arn:aws:iam::aws:policy/AWSPrivateMarketplaceRequests',
    /** Managed policy for AWS For Wordpress Plugin */
    AWSForWordPressPluginPolicy = 'arn:aws:iam::aws:policy/AWSForWordPressPluginPolicy',
    /** Allows AWS CodeStar Notifications to access Amazon CloudWatch Events on your behalf */
    AWSCodeStarNotificationsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSCodeStarNotificationsServiceRolePolicy',
    /** Allows Amazon Elastic File System to manage AWS resources on your behalf */
    AmazonElasticFileSystemServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonElasticFileSystemServiceRolePolicy',
    /** Provides read only access to Savings Plans service */
    AWSSavingsPlansReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSSavingsPlansReadOnlyAccess',
    /** Provides full access to Savings Plans service */
    AWSSavingsPlansFullAccess = 'arn:aws:iam::aws:policy/AWSSavingsPlansFullAccess',
    /** This policy creates a service-linked role that allows AWS WAF to write logs to Amazon Kinesis Data Firehose. */
    WAFV2LoggingServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/WAFV2LoggingServiceRolePolicy',
    /** Permissions required for managing nodegroups in the customer's account. These policies related to management of the following resources: AutoscalingGroups, SecurityGroups, LaunchTemplates and InstanceProfiles. */
    AWSServiceRoleForAmazonEKSNodegroup = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForAmazonEKSNodegroup',
    /** Managed policy for the Amazon LaunchWizard service role for EC2 */
    AmazonEC2RolePolicyForLaunchWizard = 'arn:aws:iam::aws:policy/AmazonEC2RolePolicyForLaunchWizard',
    /** Grants read-only access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. */
    AWSDataExchangeReadOnly = 'arn:aws:iam::aws:policy/AWSDataExchangeReadOnly',
    /** Grants data subscriber access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. It also provides select access to related services needed to take full advantage of AWS Data Exchange. */
    AWSDataExchangeSubscriberFullAccess = 'arn:aws:iam::aws:policy/AWSDataExchangeSubscriberFullAccess',
    /** Grants data provider access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. It also provides select access to related services needed to take full advantage of AWS Data Exchange. */
    AWSDataExchangeProviderFullAccess = 'arn:aws:iam::aws:policy/AWSDataExchangeProviderFullAccess',
    /** Grants full access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. It also provides select access to related services needed to take full advantage of AWS Data Exchange. */
    AWSDataExchangeFullAccess = 'arn:aws:iam::aws:policy/AWSDataExchangeFullAccess',
    /** This role grants AWS IoT SiteWise monitor permissions to access your AWS IoT SiteWise assets & asset properties, and create AWS IoT Sitewise projects, dashboards & access policies through AWS IoT SiteWise portals. */
    AWSIoTSiteWiseMonitorServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSIoTSiteWiseMonitorServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access Comprehend and CloudWatch. */
    AWSApplicationAutoscalingComprehendEndpointPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoscalingComprehendEndpointPolicy',
    /** Permissions required to support Amazon CloudWatch Contributor Insights for Amazon DynamoDB. */
    DynamoDBCloudWatchContributorInsightsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/DynamoDBCloudWatchContributorInsightsServiceRolePolicy',
    /** The Service Linked Role used by AWS Chatbot. */
    AWSChatbotServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSChatbotServiceLinkedRolePolicy',
    /** This policy is for backup administrators, granting full access to AWS Backup operations, including creating or editing backup plans, assigning AWS resources to backup plans, deleting backups, and restoring backups. */
    AWSBackupFullAccess = 'arn:aws:iam::aws:policy/AWSBackupFullAccess',
    /** This policy grants users permissions to assign AWS resources to backup plans, create on-demand backups, and restore backups. This policy does not allow the user to create or edit backup plans or to delete scheduled backups after they are created. */
    AWSBackupOperatorAccess = 'arn:aws:iam::aws:policy/AWSBackupOperatorAccess',
    /** Service Policy for Trusted Advisor Multi-account Reporting */
    AWSTrustedAdvisorReportingServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSTrustedAdvisorReportingServiceRolePolicy',
    /** Provides permissions to register a resource and track usage through AWS Marketplace Metering Service. */
    AWSMarketplaceMeteringRegisterUsage = 'arn:aws:iam::aws:policy/AWSMarketplaceMeteringRegisterUsage',
    /** AWS Elastic Beanstalk Service Role policy that grants limited permissions to managed updates. */
    AWSElasticBeanstalkManagedUpdatesServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSElasticBeanstalkManagedUpdatesServiceRolePolicy',
    /** Provides access to other AWS service resources that are required to run Amazon EKS pods on AWS Fargate */
    AmazonEKSFargatePodExecutionRolePolicy = 'arn:aws:iam::aws:policy/AmazonEKSFargatePodExecutionRolePolicy',
    /** This policy grants necessary permissions to Amazon EKS to run fargate tasks */
    AmazonEKSForFargateServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonEKSForFargateServiceRolePolicy',
    /** Provides full access to CloudWatch Synthetics. */
    CloudWatchSyntheticsFullAccess = 'arn:aws:iam::aws:policy/CloudWatchSyntheticsFullAccess',
    /** Provides read only access to CloudWatch Synthetics. */
    CloudWatchSyntheticsReadOnlyAccess = 'arn:aws:iam::aws:policy/CloudWatchSyntheticsReadOnlyAccess',
    /** Grants permissions to Managed Rules created by Amazon EventBridge schemas. */
    AmazonEventBridgeSchemasServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonEventBridgeSchemasServiceRolePolicy',
    /** Provides read only access to Amazon EventBridge Schemas. */
    AmazonEventBridgeSchemasReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonEventBridgeSchemasReadOnlyAccess',
    /** Provides full access to Amazon EventBridge Schemas. */
    AmazonEventBridgeSchemasFullAccess = 'arn:aws:iam::aws:policy/AmazonEventBridgeSchemasFullAccess',
    /** Allows EC2ImageBuilder to call AWS services on your behalf. */
    AWSServiceRoleForImageBuilder = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForImageBuilder',
    /** EC2 Instance profile for Image Builder service. */
    EC2InstanceProfileForImageBuilder = 'arn:aws:iam::aws:policy/EC2InstanceProfileForImageBuilder',
    /** Provides full access to IAM Access Analyzer */
    IAMAccessAnalyzerFullAccess = 'arn:aws:iam::aws:policy/IAMAccessAnalyzerFullAccess',
    /** Provides read only access to IAM Access Analyzer resources */
    IAMAccessAnalyzerReadOnlyAccess = 'arn:aws:iam::aws:policy/IAMAccessAnalyzerReadOnlyAccess',
    /** Allow Access Analyzer to analyze resource metadata */
    AccessAnalyzerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AccessAnalyzerServiceRolePolicy',
    /** A service-linked role required for Amazon CodeGuru Reviewer to access resources on your behalf. */
    AmazonCodeGuruReviewerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonCodeGuruReviewerServiceRolePolicy',
    /** Grants full access to Amazon CodeGuru Reviewer and scoped access to required dependencies. */
    AmazonCodeGuruReviewerFullAccess = 'arn:aws:iam::aws:policy/AmazonCodeGuruReviewerFullAccess',
    /** Allows ComputeOptimizer to call AWS services and collect workload details on your behalf. */
    ComputeOptimizerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/ComputeOptimizerServiceRolePolicy',
    /** Provides read only access to Amazon CodeGuru Reviewer. */
    AmazonCodeGuruReviewerReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonCodeGuruReviewerReadOnlyAccess',
    /** Provides full access to Amazon CodeGuru Profiler. */
    AmazonCodeGuruProfilerFullAccess = 'arn:aws:iam::aws:policy/AmazonCodeGuruProfilerFullAccess',
    /** Provides read only access to Amazon CodeGuru Profiler. */
    AmazonCodeGuruProfilerReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonCodeGuruProfilerReadOnlyAccess',
    /** Provide full access to Amazon Managed Apache Cassandra Service */
    AmazonMCSFullAccess = 'arn:aws:iam::aws:policy/AmazonMCSFullAccess',
    /** Provide read only access to Amazon Managed Apache Cassandra Service */
    AmazonMCSReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonMCSReadOnlyAccess',
    /** Allow NetworkManager to access resources associated with your Global Networks */
    AWSNetworkManagerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSNetworkManagerServiceRolePolicy',
    /** Provides read only access to Amazon Kendra via the AWS Management Console. */
    AmazonKendraReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonKendraReadOnlyAccess',
    /** Provides full access to Amazon Kendra via the AWS Management Console. */
    AmazonKendraFullAccess = 'arn:aws:iam::aws:policy/AmazonKendraFullAccess',
    /** Provides access to create Amazon Augmented AI FlowDefinition resources against any Workteam. */
    AmazonSageMakerMechanicalTurkAccess = 'arn:aws:iam::aws:policy/AmazonSageMakerMechanicalTurkAccess',
    /** Provides access to perform all operations on HumanLoops. */
    AmazonAugmentedAIHumanLoopFullAccess = 'arn:aws:iam::aws:policy/AmazonAugmentedAIHumanLoopFullAccess',
    /** Provides access to perform all operations Amazon Augmented AI resources, including FlowDefinitions, HumanTaskUis and HumanLoops. Does not allow access for creating FlowDefinitions against the public-crowd Workteam. */
    AmazonAugmentedAIFullAccess = 'arn:aws:iam::aws:policy/AmazonAugmentedAIFullAccess',
    /** Provides read only access to Amazon NetworkManager via the AWS Management Console. */
    AWSNetworkManagerReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSNetworkManagerReadOnlyAccess',
    /** Provides full access to Amazon NetworkManager via the AWS Management Console. */
    AWSNetworkManagerFullAccess = 'arn:aws:iam::aws:policy/AWSNetworkManagerFullAccess',
    /** Gives access to all actions for Amazon Fraud Detector */
    AmazonFraudDetectorFullAccessPolicy = 'arn:aws:iam::aws:policy/AmazonFraudDetectorFullAccessPolicy',
    /** Provides access to AWS Resource Access Manager APIs needed by a resource share participant. */
    AWSResourceAccessManagerResourceShareParticipantAccess = 'arn:aws:iam::aws:policy/AWSResourceAccessManagerResourceShareParticipantAccess',
    /** Provides read only access to AWS Resource Access Manager. */
    AWSResourceAccessManagerReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSResourceAccessManagerReadOnlyAccess',
    /** Service Role for CloudFormation StackSets (Organization Member Account) */
    CloudFormationStackSetsOrgMemberServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/CloudFormationStackSetsOrgMemberServiceRolePolicy',
    /** Service Role for CloudFormation StackSets (Organization Master Account) */
    CloudFormationStackSetsOrgAdminServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/CloudFormationStackSetsOrgAdminServiceRolePolicy',
    /** AWS Health policy to enable Organizational View feature */
    HealthOrganizationsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/Health_OrganizationsServiceRolePolicy',
    /** Provides read only access to all AWS Image Builder actions. */
    AWSImageBuilderReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSImageBuilderReadOnlyAccess',
    /** Provides full access to all AWS Image Builder actions and resource scoped access to related AWS services. */
    AWSImageBuilderFullAccess = 'arn:aws:iam::aws:policy/AWSImageBuilderFullAccess',
    /** Policy granting permissions to EC2 Fleet to launch instances in the future. */
    EC2FleetTimeShiftableServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/EC2FleetTimeShiftableServiceRolePolicy',
    /** This policy specifies rekognition and s3 permissions required by Amazon Rekognition Custom Labels feature. */
    AmazonRekognitionCustomLabelsFullAccess = 'arn:aws:iam::aws:policy/AmazonRekognitionCustomLabelsFullAccess',
    /** Provides read only access to Amazon WorkDocs via the AWS Management Console */
    AmazonWorkDocsReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonWorkDocsReadOnlyAccess',
    /** Provides read and write client access to an Amazon EFS file system */
    AmazonElasticFileSystemClientReadWriteAccess = 'arn:aws:iam::aws:policy/AmazonElasticFileSystemClientReadWriteAccess',
    /** Provides read only client access to an Amazon EFS file system */
    AmazonElasticFileSystemClientReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonElasticFileSystemClientReadOnlyAccess',
    /** Provides root client access to an Amazon EFS file system */
    AmazonElasticFileSystemClientFullAccess = 'arn:aws:iam::aws:policy/AmazonElasticFileSystemClientFullAccess',
    /** Provides access to Amazon SageMaker resources from Amazon QuickSight */
    AWSQuickSightSageMakerPolicy = 'arn:aws:iam::aws:policy/service-role/AWSQuickSightSageMakerPolicy',
    /** Enables access to AWS Services and Resources used or managed by Amazon Managed Blockchain */
    AmazonManagedBlockchainServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonManagedBlockchainServiceRolePolicy',
    /** Enables access to AWS services and resources used or managed by AppSync */
    AWSAppSyncServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSAppSyncServiceRolePolicy',
    /** Provides access to Amazon Chime SDK operations */
    AmazonChimeSDK = 'arn:aws:iam::aws:policy/AmazonChimeSDK',
    /** Allows AWS IoT Device Tester to run the FreeRTOS qualification suite by allowing access to services including IoT, S3, and IAM */
    AWSIoTDeviceTesterForFreeRTOSFullAccess = 'arn:aws:iam::aws:policy/AWSIoTDeviceTesterForFreeRTOSFullAccess',
    /** Allows AWS IoT Device Tester to run the AWS Greengrass qualification suite by allowing access to related services including Lambda, IoT, API Gateway, IAM */
    AWSIoTDeviceTesterForGreengrassFullAccess = 'arn:aws:iam::aws:policy/AWSIoTDeviceTesterForGreengrassFullAccess',
    /** A Service-Linked Role required for Amazon EKS to call AWS services on your behalf. */
    AmazonEKSServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonEKSServiceRolePolicy',
    /** Provides read only access to ComputeOptimizer. */
    ComputeOptimizerReadOnlyAccess = 'arn:aws:iam::aws:policy/ComputeOptimizerReadOnlyAccess',
    /** Policy granting permissions to Application Auto Scaling to access Cassandra and CloudWatch. */
    AWSApplicationAutoscalingCassandraTablePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoscalingCassandraTablePolicy',
    /** Read-only access to view Elemental Appliances and Software quotes and orders */
    ElementalAppliancesSoftwareReadOnlyAccess = 'arn:aws:iam::aws:policy/ElementalAppliancesSoftwareReadOnlyAccess',
    /** Policy to allow Gamelift GameServerGroups to manage customer resources */
    GameLiftGameServerGroupPolicy = 'arn:aws:iam::aws:policy/GameLiftGameServerGroupPolicy',
    /** Provides full access to AWS WAF via the AWS Management Console. Note that this policy also grants permissions to list and update Amazon CloudFront distributions, permissions to view load balancers on AWS Elastic Load Balancing, permissions to view Amazon API Gateway REST APIs and stages, permissions to list and view Amazon CloudWatch metrics, and permissions to view regions enabled within the account. */
    AWSWAFConsoleFullAccess = 'arn:aws:iam::aws:policy/AWSWAFConsoleFullAccess',
    /** Provides read-only access to AWS WAF via the AWS Management Console. Note that this policy also grants permissions to list Amazon CloudFront distributions, permissions to view load balancers on AWS Elastic Load Balancing, permissions to view Amazon API Gateway REST APIs and stages, permissions to list and view Amazon CloudWatch metrics, and permissions to view regions enabled within the account. */
    AWSWAFConsoleReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSWAFConsoleReadOnlyAccess',
    /** Provides full access to Amazon WorkDocs via the AWS Management Console */
    AmazonWorkDocsFullAccess = 'arn:aws:iam::aws:policy/AmazonWorkDocsFullAccess',
    /** Provides access to perform all operations Amazon Augmented AI resources, including FlowDefinitions, HumanTaskUis and HumanLoops. Also provides access to those operations of services that are integrated with Amazon Augmented AI. */
    AmazonAugmentedAIIntegratedAPIAccess = 'arn:aws:iam::aws:policy/AmazonAugmentedAIIntegratedAPIAccess',
    /** Provide full access to Amazon Keyspaces */
    AmazonKeyspacesFullAccess = 'arn:aws:iam::aws:policy/AmazonKeyspacesFullAccess',
    /** Provide read only access to Amazon Keyspaces */
    AmazonKeyspacesReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonKeyspacesReadOnlyAccess',
    /**  Provides full access to Amazon Detective service and scoped access to the console UI dependencies */
    AmazonDetectiveFullAccess = 'arn:aws:iam::aws:policy/AmazonDetectiveFullAccess',
    /** Grants permissions to view and modify purchase orders on billing console */
    AWSPurchaseOrdersServiceRolePolicy = 'arn:aws:iam::aws:policy/AWSPurchaseOrdersServiceRolePolicy',
    /** Required permissions to use all features of the Server Migration Service Console */
    ServerMigrationServiceConsoleFullAccess = 'arn:aws:iam::aws:policy/ServerMigrationServiceConsoleFullAccess',
    /** Provides AWS Backup permission to create backups on your behalf across AWS services */
    AWSBackupServiceLinkedRolePolicyForBackupTest = 'arn:aws:iam::aws:policy/aws-service-role/AWSBackupServiceLinkedRolePolicyForBackupTest',
    /** Provide access to child instances for patch association operation. */
    AmazonSSMPatchAssociation = 'arn:aws:iam::aws:policy/AmazonSSMPatchAssociation',
    /** This policy will be used to attach a role on a InstanceProfile which will allow Cloud9 to use the SSM Session Manager to connect to the instance */
    AWSCloud9SSMInstanceProfile = 'arn:aws:iam::aws:policy/AWSCloud9SSMInstanceProfile',
    /** Provides CodeDeploy service access to invoke Lambda function on your behalf to perform blue/green deployment through CloudFormation. */
    AWSCodeDeployRoleForCloudFormation = 'arn:aws:iam::aws:policy/service-role/AWSCodeDeployRoleForCloudFormation',
    /** This policy grants permissions to access AWS IoT SiteWise assets and asset data, create AWS IoT SiteWise Monitor resources, and list AWS SSO users. */
    AWSIoTSiteWiseMonitorPortalAccess = 'arn:aws:iam::aws:policy/service-role/AWSIoTSiteWiseMonitorPortalAccess',
    /** This policy grants the AWS Portal Gateway machine the necessary permissions required for normal operation. */
    AWSThinkboxAWSPortalGatewayPolicy = 'arn:aws:iam::aws:policy/AWSThinkboxAWSPortalGatewayPolicy',
    /** This policy grants the Deadline Workers in AWS Portal the necessary permissions required for normal operation. */
    AWSThinkboxAWSPortalWorkerPolicy = 'arn:aws:iam::aws:policy/AWSThinkboxAWSPortalWorkerPolicy',
    /** This policy grants the AWS Portal Asset Server the necessary permissions required for normal operation. */
    AWSThinkboxAssetServerPolicy = 'arn:aws:iam::aws:policy/AWSThinkboxAssetServerPolicy',
    /** Grants permissions required for the operation of AWS Thinkbox's Deadline Resource Tracker.  This includes full access to some EC2 actions, including DeleteFleets and CancelSpotFleetRequests. */
    AWSThinkboxDeadlineResourceTrackerAccessPolicy = 'arn:aws:iam::aws:policy/AWSThinkboxDeadlineResourceTrackerAccessPolicy',
    /** Grants permissions required to create, destroy, and administer AWS Thinkbox's Deadline Resource Tracker. */
    AWSThinkboxDeadlineResourceTrackerAdminPolicy = 'arn:aws:iam::aws:policy/AWSThinkboxDeadlineResourceTrackerAdminPolicy',
    /** Grant permissions required for an EC2 instance running AWS Thinkbox Deadline Spot Event Plugin Worker software. */
    AWSThinkboxDeadlineSpotEventPluginWorkerPolicy = 'arn:aws:iam::aws:policy/AWSThinkboxDeadlineSpotEventPluginWorkerPolicy',
    /** Grants permissions required for AWS Thinkbox's Deadline Spot Event Plugin.  This includes permission to request, modify, and cancel a spot fleet, as well as limited PassRole permission. */
    AWSThinkboxDeadlineSpotEventPluginAdminPolicy = 'arn:aws:iam::aws:policy/AWSThinkboxDeadlineSpotEventPluginAdminPolicy',
    /** This policy grants AWS Thinkbox's Deadline software full access to multiple AWS services as required for AWS Portal administration. This includes access to create arbitrary tags on several EC2 resource types. */
    AWSThinkboxAWSPortalAdminPolicy = 'arn:aws:iam::aws:policy/AWSThinkboxAWSPortalAdminPolicy',
    /** Provides AWS Backup permission to create backups on your behalf across AWS services */
    AWSBackupServiceLinkedRolePolicyForBackup = 'arn:aws:iam::aws:policy/aws-service-role/AWSBackupServiceLinkedRolePolicyForBackup',
    /** Provides read only access to Amazon Appflow flows */
    AmazonAppFlowReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonAppFlowReadOnlyAccess',
    /** Provides full access to Amazon AppFlow and access to AWS services supported as flow source or destination (S3 and Redshift). Also provides access to KMS for encryption */
    AmazonAppFlowFullAccess = 'arn:aws:iam::aws:policy/AmazonAppFlowFullAccess',
    /** Provide access to Lifesize AVS devices */
    AlexaForBusinessLifesizeDelegatedAccessPolicy = 'arn:aws:iam::aws:policy/AlexaForBusinessLifesizeDelegatedAccessPolicy',
    /** Full access to view and take action on Elemental Appliances and Software purchased assets */
    ElementalActivationsFullAccess = 'arn:aws:iam::aws:policy/ElementalActivationsFullAccess',
    /** (Elastic Beanstalk operations role) Allows a worker environment tier to create an Amazon DynamoDB table and an Amazon SQS queue. */
    AWSElasticBeanstalkRoleWorkerTier = 'arn:aws:iam::aws:policy/service-role/AWSElasticBeanstalkRoleWorkerTier',
    /** (Elastic Beanstalk operations role) Allows an environment to enable Amazon SNS topic integration. */
    AWSElasticBeanstalkRoleSNS = 'arn:aws:iam::aws:policy/service-role/AWSElasticBeanstalkRoleSNS',
    /** (Elastic Beanstalk operations role) Allows an environment to integrate an Amazon RDS instance. */
    AWSElasticBeanstalkRoleRDS = 'arn:aws:iam::aws:policy/service-role/AWSElasticBeanstalkRoleRDS',
    /** (Elastic Beanstalk operations role) Allows a multicontainer Docker environment to manage Amazon ECS clusters. */
    AWSElasticBeanstalkRoleECS = 'arn:aws:iam::aws:policy/service-role/AWSElasticBeanstalkRoleECS',
    /** AWSElasticBeanstalkRoleCore (Elastic Beanstalk operations role) Allows core operation of a web service environment. */
    AWSElasticBeanstalkRoleCore = 'arn:aws:iam::aws:policy/service-role/AWSElasticBeanstalkRoleCore',
    /** (Elastic Beanstalk operations role) Allows an environment to manage Amazon CloudWatch Logs log groups. */
    AWSElasticBeanstalkRoleCWL = 'arn:aws:iam::aws:policy/service-role/AWSElasticBeanstalkRoleCWL',
    /** Provides full access to AWS CodeArtifact via the AWS Management Console. */
    AWSCodeArtifactAdminAccess = 'arn:aws:iam::aws:policy/AWSCodeArtifactAdminAccess',
    /** This policy is for backup administators who use cross-account backup management to manage backups for the organization. */
    AWSBackupOrganizationAdminAccess = 'arn:aws:iam::aws:policy/AWSBackupOrganizationAdminAccess',
    /** Allows Machine Learning to configure and use your Redshift Clusters and S3 Staging Locations for Redshift Data Source. */
    AmazonMachineLearningRoleforRedshiftDataSourceV3 = 'arn:aws:iam::aws:policy/service-role/AmazonMachineLearningRoleforRedshiftDataSourceV3',
    /** Provides read only access to Honeycode Team Association via the AWS Management Console and the SDK. */
    AmazonHoneycodeTeamAssociationReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonHoneycodeTeamAssociationReadOnlyAccess',
    /** Provides read only access to Honeycode Workbook via the AWS Management Console and the SDK. */
    AmazonHoneycodeWorkbookReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonHoneycodeWorkbookReadOnlyAccess',
    /** Provides full access to Honeycode via the AWS Management Console and the SDK. */
    AmazonHoneycodeFullAccess = 'arn:aws:iam::aws:policy/AmazonHoneycodeFullAccess',
    /** Provides read only access to Honeycode via the AWS Management Console and the SDK. */
    AmazonHoneycodeReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonHoneycodeReadOnlyAccess',
    /** Provides full access to Honeycode Team Association via the AWS Management Console and the SDK. */
    AmazonHoneycodeTeamAssociationFullAccess = 'arn:aws:iam::aws:policy/AmazonHoneycodeTeamAssociationFullAccess',
    /** Provides full access to Honeycode Workbook via the AWS Management Console and the SDK. */
    AmazonHoneycodeWorkbookFullAccess = 'arn:aws:iam::aws:policy/AmazonHoneycodeWorkbookFullAccess',
    /** Amazon Certificate Manager Service Role Policy */
    CertificateManagerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/CertificateManagerServiceRolePolicy',
    /** Provides read only access to AWS CodeArtifact via the AWS Management Console. */
    AWSCodeArtifactReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSCodeArtifactReadOnlyAccess',
    /** A service-linked role required for Amazon CodeGuru Profiler to send notifications on your behalf. */
    AWSServiceRoleForCodeGuruProfiler = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForCodeGuru-Profiler',
    /** Enables access to AWS Services and Resources used or managed by Amazon Cognito User Pools */
    AmazonCognitoIdpServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonCognitoIdpServiceRolePolicy',
    /** Provides read only access to AWS Elemental MediaLive resources */
    AWSElementalMediaLiveReadOnly = 'arn:aws:iam::aws:policy/AWSElementalMediaLiveReadOnly',
    /** Provides full access to AWS Elemental MediaLive resources */
    AWSElementalMediaLiveFullAccess = 'arn:aws:iam::aws:policy/AWSElementalMediaLiveFullAccess',
    /** Provides access to AWS services that are required to run SageMaker GroundTruth Labeling job */
    AmazonSageMakerGroundTruthExecution = 'arn:aws:iam::aws:policy/AmazonSageMakerGroundTruthExecution',
    /** Permissions to allow the AWS SMS to run used data validation script and send script success/failure back to SMS */
    ServerMigrationServiceRoleForInstanceValidation = 'arn:aws:iam::aws:policy/service-role/ServerMigrationServiceRoleForInstanceValidation',
    /** Provides read only access to AWS CodePipeline via the AWS Management Console. */
    AWSCodePipelineReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSCodePipeline_ReadOnlyAccess',
    /** Provides full access to AWS CodePipeline via the AWS Management Console. */
    AWSCodePipelineFullAccess = 'arn:aws:iam::aws:policy/AWSCodePipeline_FullAccess',
    /** Allows Amazon Braket to create and manage AWS resources on your behalf */
    AmazonBraketServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonBraketServiceRolePolicy',
    /** Provides cross account access to Glue resources via Lake Formation. Also grants read access to other required services such as organizations and resource access manager */
    AWSLakeFormationCrossAccountManager = 'arn:aws:iam::aws:policy/AWSLakeFormationCrossAccountManager',
    /** Provides full access to Amazon Braket via the AWS Management Console and SDK. Also provides access to related services (e.g., S3, logs). */
    AmazonBraketFullAccess = 'arn:aws:iam::aws:policy/AmazonBraketFullAccess',
    /** Provides permissions required to access MSK Cluster within a VPC, manage ENIs (create, describe, delete) in the VPC and write permissions to CloudWatch Logs. */
    AWSLambdaMSKExecutionRole = 'arn:aws:iam::aws:policy/service-role/AWSLambdaMSKExecutionRole',
    /** Denies access to certain actions, applied by the AWS team in the event that an IAM user's credentials have been compromised or exposed publicly.  Do NOT remove this policy.  Instead, please follow the instructions specified in the email sent to you regarding this event. */
    AWSCompromisedKeyQuarantine = 'arn:aws:iam::aws:policy/AWSCompromisedKeyQuarantine',
    /** Permissions to allow the AWS Server Migration Service to migrate VMs to EC2: allows the Server Migration Service to place the migrated resources into the customer's EC2 account. */
    ServerMigrationServiceRole = 'arn:aws:iam::aws:policy/service-role/ServerMigration_ServiceRole',
    /** Policy used by VPC Resource Controller to manage ENI and IPs for worker nodes. */
    AmazonEKSVPCResourceController = 'arn:aws:iam::aws:policy/AmazonEKSVPCResourceController',
    /** Enables access to AWS Services and Resources used or managed by Route53 Resolver */
    Route53ResolverServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/Route53ResolverServiceRolePolicy',
    /** Policy to enable AWS Client VPN to manage your Client VPN endpoint connections. */
    ClientVPNServiceConnectionsRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/ClientVPNServiceConnectionsRolePolicy',
    /** Provides CodeDeploy service limited access to perform a Lambda deployment on your behalf. */
    AWSCodeDeployRoleForLambdaLimited = 'arn:aws:iam::aws:policy/service-role/AWSCodeDeployRoleForLambdaLimited',
    /** Provides EC2 limited access to S3 bucket to download revision. This role is needed by the CodeDeploy agent on EC2 instances. */
    AmazonEC2RoleforAWSCodeDeployLimited = 'arn:aws:iam::aws:policy/service-role/AmazonEC2RoleforAWSCodeDeployLimited',
    /** Policy granting permissions to Application Auto Scaling to access Managed Streaming for Apache Kafka and CloudWatch. */
    AWSApplicationAutoscalingKafkaClusterPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoscalingKafkaClusterPolicy',
    /** Provide readonly access to AWS Transfer services. */
    AWSTransferReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSTransferReadOnlyAccess',
    /** Allows users to view bills on the Billing Console. */
    AWSBillingReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSBillingReadOnlyAccess',
    /** Read-only access to the detailed list of purchased assets associated to the AWS account of the user */
    ElementalActivationsReadOnlyAccess = 'arn:aws:iam::aws:policy/ElementalActivationsReadOnlyAccess',
    /** Access to view purchased assets and generate software licenses for pending activations */
    ElementalActivationsGenerateLicenses = 'arn:aws:iam::aws:policy/ElementalActivationsGenerateLicenses',
    /** Access to view purchased assets and download related software and kickstart files */
    ElementalActivationsDownloadSoftwareAccess = 'arn:aws:iam::aws:policy/ElementalActivationsDownloadSoftwareAccess',
    /** Provides access to Amazon Elasticsearch resources from Amazon QuickSight */
    AWSQuickSightElasticsearchPolicy = 'arn:aws:iam::aws:policy/service-role/AWSQuickSightElasticsearchPolicy',
    /** This policy provides full access to Amazon Redshift Data APIs. This policy also grants scoped access to other required services. */
    AmazonRedshiftDataFullAccess = 'arn:aws:iam::aws:policy/AmazonRedshiftDataFullAccess',
    /** Provides full access to AWS RoboMaker via the AWS Management Console and SDK. Also provides select access to related services (e.g., S3, IAM). */
    AWSRoboMakerFullAccess = 'arn:aws:iam::aws:policy/AWSRoboMaker_FullAccess',
    /** Default policy for AWS Config service role. Provides permissions required for AWS Config to track changes to your AWS resources. */
    AWSConfigRole = 'arn:aws:iam::aws:policy/service-role/AWS_ConfigRole',
    /** Allows MediaPackage to publish logs to CloudWatch */
    MediaPackageServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/MediaPackageServiceRolePolicy',
    /** Allows AWS Marketplace to copy your Amazon Machine Images (AMIs) in order to list them on AWS Marketplace */
    AWSMarketplaceAmiIngestion = 'arn:aws:iam::aws:policy/AWSMarketplaceAmiIngestion',
    /** Policy to allow EMR to create, describe and delete EC2 placement groups. */
    AmazonElasticMapReducePlacementGroupPolicy = 'arn:aws:iam::aws:policy/AmazonElasticMapReducePlacementGroupPolicy',
    /** Allows customers to use AWS Systems Manager to automatically manage Amazon EFS utilities (amazon-efs-utils) package on their EC2 instances, and use CloudWatchLog to get EFS file system mount success/failure notifications. */
    AmazonElasticFileSystemsUtils = 'arn:aws:iam::aws:policy/AmazonElasticFileSystemsUtils',
    /** Permissions need by EC2 Image Builder to perform a cross account distribution. */
    Ec2ImageBuilderCrossAccountDistributionAccess = 'arn:aws:iam::aws:policy/Ec2ImageBuilderCrossAccountDistributionAccess',
    /** AWS QuickSight access to AWS Timestream APIs. Customers can attach this policy to AWS QuickSight role to allow retrieval of data and metadata. */
    AWSQuickSightTimestreamPolicy = 'arn:aws:iam::aws:policy/service-role/AWSQuickSightTimestreamPolicy',
    /** Provides read only access to Amazon Timestream. Policy also provides permission to cancel any running query. If using Customer managed CMK, please refer to documentation for additional permissions needed. */
    AmazonTimestreamReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonTimestreamReadOnlyAccess',
    /** Provides full access to Amazon Timestream. Note that this policy also grants certain KMS operation access. If using Customer managed CMK, please refer to documentation for additional permissions needed. */
    AmazonTimestreamFullAccess = 'arn:aws:iam::aws:policy/AmazonTimestreamFullAccess',
    /** Provides full access to manage Amazon Timestream using the AWS Management Console. Note that this policy also grants permissions for certain KMS operations, and operations to manage your saved queries. If using Customer managed CMK, please refer to documentation for additional permissions needed. */
    AmazonTimestreamConsoleFullAccess = 'arn:aws:iam::aws:policy/AmazonTimestreamConsoleFullAccess',
    /** Provides access to Systems Manager resources used by CloudWatch Alarms */
    AWSServiceRoleForCloudWatchAlarmsActionSSMServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForCloudWatchAlarmsActionSSMServiceRolePolicy',
    /** Provides full access to Amazon S3 on Outposts via the AWS Management Console. */
    AmazonS3OutpostsFullAccess = 'arn:aws:iam::aws:policy/AmazonS3OutpostsFullAccess',
    /** Provides read only access to Amazon S3 on Outposts via the AWS Management Console. */
    AmazonS3OutpostsReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonS3OutpostsReadOnlyAccess',
    /** Provides full access to AWS DeepRacer. Also provides select access to related services (e.g., S3). */
    AWSDeepRacerFullAccess = 'arn:aws:iam::aws:policy/AWSDeepRacerFullAccess',
    /** Policy required for the Lambda Insights Extension */
    CloudWatchLambdaInsightsExecutionRolePolicy = 'arn:aws:iam::aws:policy/CloudWatchLambdaInsightsExecutionRolePolicy',
    /** Provides full access to AWS CloudTrail. */
    AWSCloudTrailFullAccess = 'arn:aws:iam::aws:policy/AWSCloudTrail_FullAccess',
    /** Allows AWS Support to access AWS resources to provide billing, administrative, and support services. */
    AWSSupportServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSSupportServiceRolePolicy',
    /** Provides read only access to AWS Budgets Console via the AWS Management Console. */
    AWSBudgetsReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSBudgetsReadOnlyAccess',
    /** Provides full access to AWS Budgets Actions including using Budgets Actions to control states of running AWS resources via AWS Management Console */
    AWSBudgetsActionsWithAWSResourceControlAccess = 'arn:aws:iam::aws:policy/AWSBudgetsActionsWithAWSResourceControlAccess',
    /** Provides appropriate permissions to AWS Data Lifecycle Manager to take actions on AWS resources for AMI Management */
    AWSDataLifecycleManagerServiceRoleForAMIManagement = 'arn:aws:iam::aws:policy/service-role/AWSDataLifecycleManagerServiceRoleForAMIManagement',
    /** Service Linked Role Policy for AWS Amazon MQ */
    AmazonMQServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonMQServiceRolePolicy',
    /** Service Linked Role policy to enable access to AWS resources managed by AWS Outposts */
    AWSOutpostsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSOutpostsServiceRolePolicy',
    /** Provides full access to AWS Glue DataBrew via the AWS Management Console. Also provides select access to related services (e.g., S3, KMS, Glue). */
    AwsGlueDataBrewFullAccessPolicy = 'arn:aws:iam::aws:policy/AwsGlueDataBrewFullAccessPolicy',
    /** Provide AWS DynamoDB access to KinesisDataStreams */
    DynamoDBKinesisReplicationServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/DynamoDBKinesisReplicationServiceRolePolicy',
    /** Provides full access to Service Catalog App Registry capabilities */
    AWSServiceCatalogAppRegistryFullAccess = 'arn:aws:iam::aws:policy/AWSServiceCatalogAppRegistryFullAccess',
    /** Provides read-only access to Service Catalog App Registry capabilites */
    AWSServiceCatalogAppRegistryReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSServiceCatalogAppRegistryReadOnlyAccess',
    /** Allow AWSNetworkFirewall to create and manage necessary resources for your Firewalls. */
    AWSNetworkFirewallServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSNetworkFirewallServiceRolePolicy',
    /** Grants read-only access to AWS Lambda service, AWS Lambda console features, and other related AWS services. */
    AWSLambdaReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSLambda_ReadOnlyAccess',
    /** Grants full access to AWS Lambda service, AWS Lambda console features, and other related AWS services. */
    AWSLambdaFullAccess = 'arn:aws:iam::aws:policy/AWSLambda_FullAccess',
    /** A service-linked role required for Amazon Honeycode to access your resources. */
    AmazonHoneycodeServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonHoneycodeServiceRolePolicy',
    /** Enables access to AWS Services and Resources used or managed by S3 Storage Lens */
    S3StorageLensServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/S3StorageLensServiceRolePolicy',
    /** Provides full access to the AWS Glue Schema Registry Service */
    AWSGlueSchemaRegistryFullAccess = 'arn:aws:iam::aws:policy/AWSGlueSchemaRegistryFullAccess',
    /** Provides readonly access to the AWS Glue Schema Registry Service */
    AWSGlueSchemaRegistryReadonlyAccess = 'arn:aws:iam::aws:policy/AWSGlueSchemaRegistryReadonlyAccess',
    /** The purpose of this policy is to grant permissions to AWS Connect users required to use Connect resources. This policy provides full access to AWS Connect resources via the Connect Console and public APIs */
    AmazonConnectFullAccess = 'arn:aws:iam::aws:policy/AmazonConnect_FullAccess',
    /** The Service Linked Role used by Amazon Managed Workflows for Apache Airflow. */
    AmazonMWAAServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonMWAAServiceRolePolicy',
    /** Provides full access to CloudWatch Application Insights and required dependencies. */
    CloudWatchApplicationInsightsFullAccess = 'arn:aws:iam::aws:policy/CloudWatchApplicationInsightsFullAccess',
    /** Provides read only access to CloudWatch Application Insights. */
    CloudWatchApplicationInsightsReadOnlyAccess = 'arn:aws:iam::aws:policy/CloudWatchApplicationInsightsReadOnlyAccess',
    /** Full access to view and take action on Elemental Appliance and Software support cases and product support content */
    ElementalSupportCenterFullAccess = 'arn:aws:iam::aws:policy/ElementalSupportCenterFullAccess',
    /** Service role policy used by the AWS Service Catalog service to provision products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including CodePipeline, CodeBuild, CodeCommit, Glue, CloudFormation, etc,. */
    AmazonSageMakerAdminServiceCatalogProductsServiceRolePolicy = 'arn:aws:iam::aws:policy/AmazonSageMakerAdmin-ServiceCatalogProductsServiceRolePolicy',
    /** A service-linked role required for Amazon DevOpsGuru to access your resources. */
    AmazonDevOpsGuruServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonDevOpsGuruServiceRolePolicy',
    /** Allows an AWS Lambda function on an AWS Panorama Appliance to manage resources in Panorama, upload logs and metrics to Amazon CloudWatch, and to manage objects in buckets created for use with Panorama. */
    AWSPanoramaGreengrassGroupRolePolicy = 'arn:aws:iam::aws:policy/service-role/AWSPanoramaGreengrassGroupRolePolicy',
    /** Provides full access to AWS Panorama */
    AWSPanoramaFullAccess = 'arn:aws:iam::aws:policy/AWSPanoramaFullAccess',
    /** Allows AWS IoT software on an AWS Panorama Appliance to upload logs to Amazon CloudWatch. */
    AWSPanoramaApplianceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AWSPanoramaApplianceRolePolicy',
    /** Allows Amazon SageMaker to manage objects in buckets created for use with AWS Panorama. */
    AWSPanoramaSageMakerRolePolicy = 'arn:aws:iam::aws:policy/service-role/AWSPanoramaSageMakerRolePolicy',
    /** Allows AWS Panorama to manage resources in Amazon S3, AWS IoT, AWS IoT GreenGrass, AWS Lambda, Amazon SageMaker, and Amazon CloudWatch Logs, and to pass service roles to AWS IoT, AWS IoT GreenGrass, and Amazon SageMaker. */
    AWSPanoramaServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AWSPanoramaServiceRolePolicy',
    /** Provides full access to Amazon ECR Public repositories, but does not allow repository deletion or policy changes. */
    AmazonElasticContainerRegistryPublicPowerUser = 'arn:aws:iam::aws:policy/AmazonElasticContainerRegistryPublicPowerUser',
    /** Provides permissions required to enable the offline store for an Amazon SageMaker FeatureStore feature group. */
    AmazonSageMakerFeatureStoreAccess = 'arn:aws:iam::aws:policy/AmazonSageMakerFeatureStoreAccess',
    /** Provides read only access to Amazon DevOps Guru Console. */
    AmazonDevOpsGuruReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonDevOpsGuruReadOnlyAccess',
    /** Provides full access to Amazon DevOps Guru. */
    AmazonDevOpsGuruFullAccess = 'arn:aws:iam::aws:policy/AmazonDevOpsGuruFullAccess',
    /** Provides administrative access to Amazon ECR Public resources */
    AmazonElasticContainerRegistryPublicFullAccess = 'arn:aws:iam::aws:policy/AmazonElasticContainerRegistryPublicFullAccess',
    /** Provides read-only access to Amazon ECR Public repositories. */
    AmazonElasticContainerRegistryPublicReadOnly = 'arn:aws:iam::aws:policy/AmazonElasticContainerRegistryPublicReadOnly',
    /** Grants account administrative permissions while explicitly allowing direct access to resources needed by Amplify applications. */
    AdministratorAccessAmplify = 'arn:aws:iam::aws:policy/AdministratorAccess-Amplify',
    /** Grants Amazon Monitron permissions to manage AWS resources, including AWS SSO user assignment on your behalf. */
    AWSServiceRoleForMonitronPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForMonitronPolicy',
    /** Provides full access to manage Amazon Monitron */
    AmazonMonitronFullAccess = 'arn:aws:iam::aws:policy/AmazonMonitronFullAccess',
    /** Enables access to AWS Services and Resources used or managed by AWS Marketplace for license management. */
    AWSMarketplaceLicenseManagementServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSMarketplaceLicenseManagementServiceRolePolicy',
    /** This policy grants permission to glue to perform action on user's glue data catalog, this policy also provides permission to ec2 actions to allow glue to create ENI to connect to resources in the VPC, also allow glue to access registered data in lakeformation and permission to access user's cloudwatch */
    AWSGlueDataBrewServiceRole = 'arn:aws:iam::aws:policy/service-role/AWSGlueDataBrewServiceRole',
    /** Enables access to AWS Services and Resources used or managed by ECR Replication */
    ECRReplicationServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/ECRReplicationServiceRolePolicy',
    /** Service Linked Role to perform S3 PutObject to recording IVS live streams */
    IVSRecordToS3 = 'arn:aws:iam::aws:policy/aws-service-role/IVSRecordToS3',
    /** Provides access to AWS resources managed or used by the AWS Systems Manager change management framework. */
    AWSSystemsManagerChangeManagementServicePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSSystemsManagerChangeManagementServicePolicy',
    /** Enables access to AWS Services and Resources used or managed by AWS Audit Manager */
    AWSAuditManagerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSAuditManagerServiceRolePolicy',
    /** Provides permissions necessary for SageMaker Edge to create and manage a device fleet for the customer using the default cloud connection. */
    AmazonSageMakerEdgeDeviceFleetPolicy = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerEdgeDeviceFleetPolicy',
    /** Allows access to other AWS service resources that are required to run Amazon EMR */
    AmazonEMRContainersServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonEMRContainersServiceRolePolicy',
    /** EC2 Instance profile for building container images with EC2 Image Builder. This policy grants the user broad permissions to upload ECR images. */
    EC2InstanceProfileForImageBuilderECRContainerBuilds = 'arn:aws:iam::aws:policy/EC2InstanceProfileForImageBuilderECRContainerBuilds',
    /** Provides administrative access to enable or disable AWS Audit Manager, update settings, and manage assessments, controls, and frameworks */
    AWSAuditManagerAdministratorAccess = 'arn:aws:iam::aws:policy/AWSAuditManagerAdministratorAccess',
    /** Provides full access to AWS Transfer via the AWS Management Console */
    AWSTransferConsoleFullAccess = 'arn:aws:iam::aws:policy/AWSTransferConsoleFullAccess',
    /** Provides full access to AWS Transfer Service. */
    AWSTransferFullAccess = 'arn:aws:iam::aws:policy/AWSTransferFullAccess',
    /** Federation access for IoT Fleet Hub applications */
    AWSIoTFleetHubFederationAccess = 'arn:aws:iam::aws:policy/service-role/AWSIoTFleetHubFederationAccess',
    /** Allows the associated identity full access to all AWS IoT Wireless operations. */
    AWSIoTWirelessFullAccess = 'arn:aws:iam::aws:policy/AWSIoTWirelessFullAccess',
    /** Allows the associated identity read only access to AWS IoT wireless. */
    AWSIoTWirelessReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSIoTWirelessReadOnlyAccess',
    /** Provides IoT Wireless full access to publish to IoT Rules Engine on your behalf. */
    AWSIoTWirelessFullPublishAccess = 'arn:aws:iam::aws:policy/AWSIoTWirelessFullPublishAccess',
    /** Allows the associated identity access to create, list and describe IoT Certificates */
    AWSIoTWirelessGatewayCertManager = 'arn:aws:iam::aws:policy/AWSIoTWirelessGatewayCertManager',
    /** Allows the associated identity data access to AWS IoT Wireless devices. */
    AWSIoTWirelessDataAccess = 'arn:aws:iam::aws:policy/AWSIoTWirelessDataAccess',
    /** Allows the associated identity to create Amazon CloudWatch Logs groups and stream logs to the groups. */
    AWSIoTWirelessLogging = 'arn:aws:iam::aws:policy/AWSIoTWirelessLogging',
    /** Grants using AWS CloudShell with all features */
    AWSCloudShellFullAccess = 'arn:aws:iam::aws:policy/AWSCloudShellFullAccess',
    /** Grants full access to AWS Managed Prometheus resources */
    AmazonPrometheusFullAccess = 'arn:aws:iam::aws:policy/AmazonPrometheusFullAccess',
    /** Grants full access to AWS Managed Prometheus resources in the AWS console */
    AmazonPrometheusConsoleFullAccess = 'arn:aws:iam::aws:policy/AmazonPrometheusConsoleFullAccess',
    /** Grants access to run queries against AWS Managed Prometheus resources */
    AmazonPrometheusQueryAccess = 'arn:aws:iam::aws:policy/AmazonPrometheusQueryAccess',
    /** Grants write only access to AWS Managed Prometheus workspaces */
    AmazonPrometheusRemoteWriteAccess = 'arn:aws:iam::aws:policy/AmazonPrometheusRemoteWriteAccess',
    /** Policy to enable AWS FIS to manage monitoring and resource selection for experiments. */
    AmazonFISServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonFISServiceRolePolicy',
    /** Managed policy for Service Linked Role for Amazon SageMaker Core Services */
    AmazonSageMakerCoreServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonSageMakerCoreServiceRolePolicy',
    /** Provides Lex V2 bots access to call other AWS services on your behalf. */
    AmazonLexV2BotPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonLexV2BotPolicy',
    /** This policy allows customers to call Lex runtime from channels */
    AmazonLexChannelsAccess = 'arn:aws:iam::aws:policy/aws-service-role/AmazonLexChannelsAccess',
    /** Provides AWS Direct Connect permission to create and manage AWS resources on your behalf. */
    AWSDirectConnectServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSDirectConnectServiceRolePolicy',
    /** Provides full access to AWS OpsWorks. */
    AWSOpsWorksFullAccess = 'arn:aws:iam::aws:policy/AWSOpsWorks_FullAccess',
    /** Grants read-only permissions. Explicitly allows operators to gain direct access to retrieve information about resources related to AWS Elastic Beanstalk applications. */
    AWSElasticBeanstalkReadOnly = 'arn:aws:iam::aws:policy/AWSElasticBeanstalkReadOnly',
    /** Grants account administrative permissions. Explicitly allows developers and administrators to gain direct access to resources they need to manage AWS Elastic Beanstalk applications */
    AdministratorAccessAWSElasticBeanstalk = 'arn:aws:iam::aws:policy/AdministratorAccess-AWSElasticBeanstalk',
    /** Read only access to WorkMail messages for the GetRawMessageContent API */
    AmazonWorkMailMessageFlowReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonWorkMailMessageFlowReadOnlyAccess',
    /** Provides access required by Amazon CodeGuru Profiler agent. */
    AmazonCodeGuruProfilerAgentAccess = 'arn:aws:iam::aws:policy/AmazonCodeGuruProfilerAgentAccess',
    /** Full access to the WorkMail Message Flow APIs */
    AmazonWorkMailMessageFlowFullAccess = 'arn:aws:iam::aws:policy/AmazonWorkMailMessageFlowFullAccess',
    /** Allows EventBridge to access Secret Manager resources on your behalf. */
    AmazonEventBridgeApiDestinationsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonEventBridgeApiDestinationsServiceRolePolicy',
    /** Provides full access to Amazon HealthLake service. */
    AmazonHealthLakeFullAccess = 'arn:aws:iam::aws:policy/AmazonHealthLakeFullAccess',
    /** Provides read only access to Amazon HealthLake service. */
    AmazonHealthLakeReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonHealthLakeReadOnlyAccess',
    /** Provides access to the AWS Proton APIs and Management Console, but does not allow administration of Proton templates or environments. */
    AWSProtonDeveloperAccess = 'arn:aws:iam::aws:policy/AWSProtonDeveloperAccess',
    /** Service-linked role used by AWS Storage Gateway to enable integration of other AWS services with Storage Gateway. */
    AWSStorageGatewayServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSStorageGatewayServiceRolePolicy',
    /** Provides full access to the AWS Proton APIs and Management Console. In addition to these permissions, access to Amazon S3 is also needed to register template bundles from your S3 buckets, as well as access to Amazon IAM to create and manage the service roles for Proton. */
    AWSProtonFullAccess = 'arn:aws:iam::aws:policy/AWSProtonFullAccess',
    /** Provides read only access to the AWS Proton APIs and Management Console. */
    AWSProtonReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSProtonReadOnlyAccess',
    /** Access to read only operations in Amazon Grafana. */
    AWSGrafanaConsoleReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSGrafanaConsoleReadOnlyAccess',
    /** Provides only the ability to update user and group permissions for AWS Grafana workspaces. */
    AWSGrafanaWorkspacePermissionManagement = 'arn:aws:iam::aws:policy/AWSGrafanaWorkspacePermissionManagement',
    /** Provides access within Amazon Grafana to create and manage workspaces for the entire organization. */
    AWSGrafanaAccountAdministrator = 'arn:aws:iam::aws:policy/AWSGrafanaAccountAdministrator',
    /** This policy is for the AWS Elastic Beanstalk service role used to perform managed updates of Elastic Beanstalk environments. This policy should not be attached to other users or roles. The policy grants broad permissions to create and manage resources across a number of AWS services including AutoScaling, EC2, ECS, Elastic Load Balancing and CloudFormation.  This policy also allows passing of any IAM role usable with those services. */
    AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy = 'arn:aws:iam::aws:policy/AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy',
    /** Provides access for the AWS Batch service to manage the required resources, including Amazon EC2 and Amazon ECS resources. */
    BatchServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/BatchServiceRolePolicy',
    /** This policy is used for the Amazon EMR Service Role and should NOT be used for any other IAM users or roles in your account. The policy grants permissions to create and manage resources associated with EMR and related services necessary for the operation of your EMR cluster. */
    AmazonEMRServicePolicyV2 = 'arn:aws:iam::aws:policy/service-role/AmazonEMRServicePolicy_v2',
    /** Provides read only access to Amazon EMR and the associated CloudWatch Metrics. */
    AmazonEMRReadOnlyAccessPolicyV2 = 'arn:aws:iam::aws:policy/AmazonEMRReadOnlyAccessPolicy_v2',
    /** Provides full access to Amazon EMR */
    AmazonEMRFullAccessPolicyV2 = 'arn:aws:iam::aws:policy/AmazonEMRFullAccessPolicy_v2',
    /** Grants permission to enable and manage AWS Security Hub within an organization. Includes enabling the service across the organization, and determining the delegated administrator account for the service. */
    AWSSecurityHubOrganizationsAccess = 'arn:aws:iam::aws:policy/AWSSecurityHubOrganizationsAccess',
    /** Allows AWS application Migration Service to create and manage AWS resources on your behalf. */
    AWSApplicationMigrationServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationMigrationServiceRolePolicy',
    /** This policy allows the Application Migration Service (MGN) Conversion Server, which are EC2 instances launched by Application Migration Service, to communicate with the MGN service. An IAM role with this policy is attached (as an EC2 Instance Profile) by MGN to the MGN Conversion Servers, which are automatically launched and terminated by MGN, when needed. We do not recommend that you attach this policy to your IAM users or roles. MGN Conversion Servers are used by Application Migration Service when users choose to launch Test or Cutover instances using the MGN console, CLI, or API. */
    AWSApplicationMigrationConversionServerPolicy = 'arn:aws:iam::aws:policy/service-role/AWSApplicationMigrationConversionServerPolicy',
    /** This policy provides permissions to all public APIs of AWS Application Migration Service (MGN), as well as permissions to read KMS key information. Attach this policy to your IAM users or roles. */
    AWSApplicationMigrationFullAccess = 'arn:aws:iam::aws:policy/AWSApplicationMigrationFullAccess',
    /** This policy allows installing and using the AWS Replication Agent, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide when installing the AWS Replication Agent. */
    AWSApplicationMigrationAgentPolicy = 'arn:aws:iam::aws:policy/AWSApplicationMigrationAgentPolicy',
    /** This policy provides Amazon EC2 operations required to use Application Migration Service (MGN) to launch the migrated servers as EC2 instances. Attach this policy to your IAM users or roles. */
    AWSApplicationMigrationEC2Access = 'arn:aws:iam::aws:policy/AWSApplicationMigrationEC2Access',
    /** This policy allows AWS Application Migration Service (MGN) to send meta-data about the progress of servers being migrated using MGN to AWS Migration Hub (MGH). MGN automatically creates an IAM role with this policy attached, and assumes this role. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSApplicationMigrationMGHAccess = 'arn:aws:iam::aws:policy/service-role/AWSApplicationMigrationMGHAccess',
    /** This policy provides permissions to all read-only public APIs of Application Migration Service (MGN), as well as some read-only APIs of other AWS services that are required in order to make full read-only use of the MGN console. Attach this policy to your IAM users or roles. */
    AWSApplicationMigrationReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSApplicationMigrationReadOnlyAccess',
    /** This policy allows the Application Migration Service (MGN) Replication Servers, which are EC2 instances launched by Application Migration Service - to communicate with the MGN service, and to create EBS snapshots in your AWS account. An IAM role with this policy is attached (as an EC2 Instance Profile) by Application Migration Service to the MGN Replication Servers which are automatically launched and terminated by MGN, as needed. MGN Replication Servers are used to facilitate data replication from your external servers to AWS, as part of the migration process managed using MGN. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSApplicationMigrationReplicationServerPolicy = 'arn:aws:iam::aws:policy/service-role/AWSApplicationMigrationReplicationServerPolicy',
    /** Provides full access to Amazon Lookout for Equipment operations */
    AmazonLookoutEquipmentFullAccess = 'arn:aws:iam::aws:policy/AmazonLookoutEquipmentFullAccess',
    /** Denies access to certain actions, applied by the AWS team in the event that an IAM user's credentials have been compromised or exposed publicly. Do NOT remove this policy. Instead, please follow the instructions specified in the support case created for you regarding this event. */
    AWSCompromisedKeyQuarantineV2 = 'arn:aws:iam::aws:policy/AWSCompromisedKeyQuarantineV2',
    /** IAM role for SSM Explorer to manage OpsData related operations */
    AWSSystemsManagerOpsDataSyncServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSSystemsManagerOpsDataSyncServiceRolePolicy',
    /** This policy is used by the service-linked role named AWSServiceRoleForCloudWatchAlarms_ActionSSMIncidents. CloudWatch uses this service-linked role to perform AWS System Manager Incident Manager actions when a CloudWatch alarm goes in to ALARM state. This policy grants permission to start incidents on your behalf. */
    AWSCloudWatchAlarmsActionSSMIncidentsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSCloudWatchAlarms_ActionSSMIncidentsServiceRolePolicy',
    /** This policy grants access to resources needed by Nimble Studio Launch Profile workers. Attach this policy to EC2 instances created by Nimble Studio Builder. */
    AmazonNimbleStudioLaunchProfileWorker = 'arn:aws:iam::aws:policy/AmazonNimbleStudio-LaunchProfileWorker',
    /** This policy grants access to Amazon Nimble Studio resources associated with the studio admin and related studio resources in other services. Attach this policy to the Admin role associated with your studio. */
    AmazonNimbleStudioStudioAdmin = 'arn:aws:iam::aws:policy/AmazonNimbleStudio-StudioAdmin',
    /** This policy grants access to Amazon Nimble Studio resources associated with the studio user and related studio resources in other services. Attach this policy to the User role associated with your studio. */
    AmazonNimbleStudioStudioUser = 'arn:aws:iam::aws:policy/AmazonNimbleStudio-StudioUser',
    /** Provides read only access to Amazon Lookout for Equipments */
    AmazonLookoutEquipmentReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonLookoutEquipmentReadOnlyAccess',
    /** Gives access to all read-only actions for Amazon Lookout for Metrics */
    AmazonLookoutMetricsReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonLookoutMetricsReadOnlyAccess',
    /** Gives access to all actions for Amazon Lookout for Metrics */
    AmazonLookoutMetricsFullAccess = 'arn:aws:iam::aws:policy/AmazonLookoutMetricsFullAccess',
    /** This policy grants Incident Manager permission to manage incident records and related resources on your behalf. */
    AWSIncidentManagerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSIncidentManagerServiceRolePolicy',
    /** This policy grants permissions to start, view, and update incidents with full access to custom timeline events & related items. Assign this policy to users who will create and resolve incidents. */
    AWSIncidentManagerResolverAccess = 'arn:aws:iam::aws:policy/AWSIncidentManagerResolverAccess',
    /** Provides read only access to Amazon Lookout for Vision and scoped access to required dependencies. */
    AmazonLookoutVisionReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonLookoutVisionReadOnlyAccess',
    /** Provides full access to Amazon Lookout for Vision and scoped access to required dependencies. */
    AmazonLookoutVisionFullAccess = 'arn:aws:iam::aws:policy/AmazonLookoutVisionFullAccess',
    /** Provides read only access to Amazon Lookout for Vision and scoped access to required service and console dependencies. */
    AmazonLookoutVisionConsoleReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonLookoutVisionConsoleReadOnlyAccess',
    /** Provides full access to Amazon Lookout for Vision and scoped access to required service and console dependencies. */
    AmazonLookoutVisionConsoleFullAccess = 'arn:aws:iam::aws:policy/AmazonLookoutVisionConsoleFullAccess',
    /** Allows AWS AppRunner to manage related AWS resources on your behalf. */
    AppRunnerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AppRunnerServiceRolePolicy',
    /** AWS App Runner service policy that grants read permissions to Amazon ECR resources in the customer's account. Use it in a role that is passed to App Runner when creating or updating an App Runner service. */
    AWSAppRunnerServicePolicyForECRAccess = 'arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess',
    /** Allows Service Catalog AppRegistry to manage Resource Groups on your behalf */
    AWSServiceCatalogAppRegistryServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceCatalogAppRegistryServiceRolePolicy',
    /** Grant permissions to AWS Device Farm to call EC2 APIs on your behalf. */
    AWSDeviceFarmTestGridServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSDeviceFarmTestGridServiceRolePolicy',
    /** Enables AWS KMS to synchronize the shared properties of multi-Region keys. */
    AWSKeyManagementServiceMultiRegionKeysServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSKeyManagementServiceMultiRegionKeysServiceRolePolicy',
    /** Policy for Service Linked Role AWSServiceRoleForAmazonSSM_OpsInsights */
    AWSSSMOpsInsightsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSSSMOpsInsightsServiceRolePolicy',
    /** Grants permissions to AWS BugBust to access resources on your behalf */
    AWSBugBustServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSBugBustServiceRolePolicy',
    /** This IAM policy grants users full access to the AWS BugBust console */
    AWSBugBustFullAccess = 'arn:aws:iam::aws:policy/AWSBugBustFullAccess',
    /** This IAM policy grants users access to participate in AWS BugBust events */
    AWSBugBustPlayerAccess = 'arn:aws:iam::aws:policy/AWSBugBustPlayerAccess',
    /** Service Linked Role Policy for Route 53 Recovery Readiness */
    Route53RecoveryReadinessServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/Route53RecoveryReadinessServiceRolePolicy',
    /** This Amazon Managed Policy grants permissions commonly needed for use with Callback steps and Lambda steps in SageMaker Model Building Pipelines. It is added to the AmazonSageMaker-ExecutionRole that can be created when setting up SageMaker Studio. It can also be attached to any other role that will be used for authoring or executing pipelines. */
    AmazonSageMakerPipelinesIntegrations = 'arn:aws:iam::aws:policy/AmazonSageMakerPipelinesIntegrations',
    /** Allows Amazon Chime to access Amazon Transcribe and Amazon Transcribe Medical on your behalf */
    AmazonChimeTranscriptionServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonChimeTranscriptionServiceLinkedRolePolicy',
    /** Provides permissions to allow access to the AWS License Manager API actions required to consume upon licenses that the user has entitlements. */
    AWSLicenseManagerConsumptionPolicy = 'arn:aws:iam::aws:policy/service-role/AWSLicenseManagerConsumptionPolicy',
    /** This policy allows MemoryDB to manage AWS resources on your behalf as necessary for managing your resources. */
    MemoryDBServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/MemoryDBServiceRolePolicy',
    /** Policy granting permissions to Application Auto Scaling to access Amazon ElastiCache and Amazon CloudWatch. */
    AWSApplicationAutoscalingElastiCacheRGPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoscalingElastiCacheRGPolicy',
    /** Provides AWS Lambda functions permissions to interact with Amazon S3 Object Lambda. Also grants Lambda permissions to write to CloudWatch Logs. */
    AmazonS3ObjectLambdaExecutionRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonS3ObjectLambdaExecutionRolePolicy',
    /** Provides full access to Amazon Route 53 Recovery Readiness */
    AmazonRoute53RecoveryReadinessFullAccess = 'arn:aws:iam::aws:policy/AmazonRoute53RecoveryReadinessFullAccess',
    /** Provides read only access to Amazon Route 53 Recovery Cluster */
    AmazonRoute53RecoveryClusterReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonRoute53RecoveryClusterReadOnlyAccess',
    /** Provides full access to Amazon Route 53 Recovery Control Config */
    AmazonRoute53RecoveryControlConfigFullAccess = 'arn:aws:iam::aws:policy/AmazonRoute53RecoveryControlConfigFullAccess',
    /** Provides read only access to Amazon Route 53 Recovery Control Config */
    AmazonRoute53RecoveryControlConfigReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonRoute53RecoveryControlConfigReadOnlyAccess',
    /** Provides read only access to Amazon Route 53 Recovery Readiness */
    AmazonRoute53RecoveryReadinessReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonRoute53RecoveryReadinessReadOnlyAccess',
    /** Provides full access to Amazon Route 53 Recovery Cluster */
    AmazonRoute53RecoveryClusterFullAccess = 'arn:aws:iam::aws:policy/AmazonRoute53RecoveryClusterFullAccess',
    /** Provides AWS Backup permissions to create compliance reports on your behalf */
    AWSServiceRolePolicyForBackupReports = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRolePolicyForBackupReports',
    /** This policy grants permissions for users to create controls and frameworks that define their expectations for AWS Backup resources and activities, and to audit AWS Backup resources and activities against their defined controls and frameworks. This policy grants permissions to AWS Config and similar services to describe user expectations perform the audits. This policy also grants permissions to deliver audit reports to S3 and similar services, and enables users to find and open their audit reports. */
    AWSBackupAuditAccess = 'arn:aws:iam::aws:policy/AWSBackupAuditAccess',
    /** Allow Amazon OpenSearch Service to access other AWS services such as EC2 Networking APIs on your behalf. */
    AmazonOpenSearchServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonOpenSearchServiceRolePolicy',
    /** Provides access to the Amazon Cognito configuration service. */
    AmazonOpenSearchServiceCognitoAccess = 'arn:aws:iam::aws:policy/AmazonOpenSearchServiceCognitoAccess',
    /** Policy granting permissions to Application Auto Scaling to access Amazon Neptune and Amazon CloudWatch. */
    AWSApplicationAutoscalingNeptuneClusterPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSApplicationAutoscalingNeptuneClusterPolicy',
    /** This policy allows Amazon EKS to manage AWS resources for EKS connector */
    AmazonEKSConnectorServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonEKSConnectorServiceRolePolicy',
    /** This policy grants Kafka Connect permission to manage AWS resources on your behalf. */
    KafkaConnectServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/KafkaConnectServiceRolePolicy',
    /** Provides access to Amazon OpenSearch resources from Amazon QuickSight */
    AWSQuicksightOpenSearchPolicy = 'arn:aws:iam::aws:policy/service-role/AWSQuicksightOpenSearchPolicy',
    /** Provides full access to the Amazon OpenSearch Service configuration service. */
    AmazonOpenSearchServiceFullAccess = 'arn:aws:iam::aws:policy/AmazonOpenSearchServiceFullAccess',
    /** Provides read-only access to the Amazon OpenSearch Service configuration service. */
    AmazonOpenSearchServiceReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonOpenSearchServiceReadOnlyAccess',
    /** Enable access to AWS Resources used or managed by MediaTailor */
    AWSMediaTailorServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSMediaTailorServiceRolePolicy',
    /** Provide readonly access to Amazon MSK Connect */
    AmazonMSKConnectReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonMSKConnectReadOnlyAccess',
    /** Policy for Amazon Connect Campaigns service linked role */
    AmazonConnectCampaignsServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonConnectCampaignsServiceLinkedRolePolicy',
    /** Grants full access to the Amazon Redshift Query Editor V2 operations and resources. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters, read keys and aliases in AWS KMS and manage the Query Editor V2 secrets in AWS Secrets Manager. */
    AmazonRedshiftQueryEditorV2FullAccess = 'arn:aws:iam::aws:policy/AmazonRedshiftQueryEditorV2FullAccess',
    /** Grants the ability to work with Amazon Redshift Query Editor V2 without sharing resources. The granted principal can only read, update and delete its own resources but cannot share them. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters and manage the Query Editor V2 secrets of the principal in AWS Secrets Manager. */
    AmazonRedshiftQueryEditorV2NoSharing = 'arn:aws:iam::aws:policy/AmazonRedshiftQueryEditorV2NoSharing',
    /** Grants the ability to work with Amazon Redshift Query Editor V2 with limited sharing of resources. The granted principal can read, write and share its own resources. The granted principal can read the resources shared with its team but cannot update them. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters and manage the Query Editor V2 secrets of the principal in AWS Secrets Manager. */
    AmazonRedshiftQueryEditorV2ReadSharing = 'arn:aws:iam::aws:policy/AmazonRedshiftQueryEditorV2ReadSharing',
    /** Grants the ability to work with Amazon Redshift Query Editor V2 with sharing of resources. The granted principal can read, write and share its own resources. The granted principal can read and update the resources shared with its team. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters and manage the Query Editor V2 secrets of the principal in AWS Secrets Manager. */
    AmazonRedshiftQueryEditorV2ReadWriteSharing = 'arn:aws:iam::aws:policy/AmazonRedshiftQueryEditorV2ReadWriteSharing',
    /** Provides full access to Amazon Connect Voice ID */
    AmazonConnectVoiceIDFullAccess = 'arn:aws:iam::aws:policy/AmazonConnectVoiceIDFullAccess',
    /** Allows EC2 CapacityReservation Fleet service to manage Capacity Reservations */
    AWSEC2CapacityReservationFleetRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSEC2CapacityReservationFleetRolePolicy',
    /** Provides full access to AWS Account Management. */
    AWSAccountManagementFullAccess = 'arn:aws:iam::aws:policy/AWSAccountManagementFullAccess',
    /** Provides read-only access to AWS Account Management */
    AWSAccountManagementReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSAccountManagementReadOnlyAccess',
    /** Provides full access to Amazon MemoryDB via the AWS Management Console. */
    AmazonMemoryDBFullAccess = 'arn:aws:iam::aws:policy/AmazonMemoryDBFullAccess',
    /** Provides read only access to Amazon MemoryDB via the AWS Management Console. */
    AmazonMemoryDBReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonMemoryDBReadOnlyAccess',
    /** Allows Amazon RDS Custom to manage AWS resources on your behalf. */
    AmazonRDSCustomServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonRDSCustomServiceRolePolicy',
    /** Amazon RDS Custom Preview Service Role Policy */
    AmazonRDSCustomPreviewServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonRDSCustomPreviewServiceRolePolicy',
    /** Enable access to AWS Resources used or managed by AWS Migration Hub Strategy Recommendations service. */
    AWSMigrationHubStrategyServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSMigrationHubStrategyServiceRolePolicy',
    /** Grants full access to the AWS Migration Hub Strategy Recommendations service and access to related AWS services through the AWS Management Console. */
    AWSMigrationHubStrategyConsoleFullAccess = 'arn:aws:iam::aws:policy/AWSMigrationHubStrategyConsoleFullAccess',
    /** Grants permissions to allow communication with the AWS Migration Hub Strategy Recommendations service, read/write access to S3 buckets related to the service, Amazon API Gateway access to upload logs and metrics to AWS, AWS Secrets Manager access to fetch credentials, and any related services. */
    AWSMigrationHubStrategyCollector = 'arn:aws:iam::aws:policy/AWSMigrationHubStrategyCollector',
    /** Allows AWS Panorama to manage resources in AWS IoT, AWS Secrets Manager and AWS Panorama. */
    AWSPanoramaServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSPanoramaServiceLinkedRolePolicy',
    /** Allows an AWS Panorama Appliance to upload logs to Amazon CloudWatch, and to get objects from Amazon S3 access points created for use with AWS Panorama. */
    AWSPanoramaApplianceServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AWSPanoramaApplianceServiceRolePolicy',
    /** Enables access for AWS Marketplace services to purchase order management. */
    AWSMarketplacePurchaseOrdersServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSMarketplacePurchaseOrdersServiceRolePolicy',
    /** DeepRacer admin access to all actions including toggling between multiuser and single user mode. */
    AWSDeepRacerAccountAdminAccess = 'arn:aws:iam::aws:policy/AWSDeepRacerAccountAdminAccess',
    /** DeepRacer MultiUser Default user access to use deepracer in multi-user mode */
    AWSDeepRacerDefaultMultiUserAccess = 'arn:aws:iam::aws:policy/AWSDeepRacerDefaultMultiUserAccess',
    /** Grants permissions to to describe the organization of the account, create S3 buckets for the MAP program and apply tags to it, create a Cost and Usage Report, and describe Cost and Usage Report definitions. */
    AWSCostAndUsageReportAutomationPolicy = 'arn:aws:iam::aws:policy/service-role/AWSCostAndUsageReportAutomationPolicy',
    /** This policy includes permissions to run SQL commands to copy, load, unload, query, and analyze data on Amazon Redshift. The policy also grants permissions to run select statements for related services, such as Amazon S3, Amazon CloudWatch logs, Amazon SageMaker, or AWS Glue. */
    AmazonRedshiftAllCommandsFullAccess = 'arn:aws:iam::aws:policy/AmazonRedshiftAllCommandsFullAccess',
    /** This policy allows installing and using the AWS VCenter Client, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide when installing the AWS VCenter Client. */
    AWSApplicationMigrationVCenterClientPolicy = 'arn:aws:iam::aws:policy/AWSApplicationMigrationVCenterClientPolicy',
    /** Provide access to enable and manage Amazon DevOps Guru within an organization. */
    AmazonDevOpsGuruOrganizationsAccess = 'arn:aws:iam::aws:policy/AmazonDevOpsGuruOrganizationsAccess',
    /** Grants Amazon Inspector access to AWS Services needed to perform security assessments */
    AmazonInspector2ServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonInspector2ServiceRolePolicy',
    /** This policy is attached to the instance role of Elastic Disaster Recovery's Recovery Instance.  This policy allows the Elastic Disaster Recovery (DRS) Recovery Instance, which are EC2 instances launched by Elastic Disaster Recovery - to communicate with the DRS service, and to be able to failback to their original source infrastructure. An IAM role with this policy is attached (as an EC2 Instance Profile) by Elastic Disaster Recovery to the DRS Recovery Instances. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryRecoveryInstancePolicy = 'arn:aws:iam::aws:policy/service-role/AWSElasticDisasterRecoveryRecoveryInstancePolicy',
    /** This policy allows using the AWS Replication Agent, which is used with AWS Elastic Disaster Recovery (DRS) to recover source servers to AWS. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryAgentPolicy = 'arn:aws:iam::aws:policy/service-role/AWSElasticDisasterRecoveryAgentPolicy',
    /** This policy allows installing the AWS Replication Agent, which is used with AWS Elastic Disaster Recovery (DRS) to recover external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide during the installation step of the AWS Replication Agent. */
    AWSElasticDisasterRecoveryAgentInstallationPolicy = 'arn:aws:iam::aws:policy/AWSElasticDisasterRecoveryAgentInstallationPolicy',
    /** This policy allows using the Elastic Disaster Recovery Failback Client, which is used to failback Recovery Instances back to your original source infrastructure. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryFailbackPolicy = 'arn:aws:iam::aws:policy/service-role/AWSElasticDisasterRecoveryFailbackPolicy',
    /** This policy provides full access to all public APIs of AWS Elastic Disaster Recovery (DRS), as well as permissions to read KMS key, License Manager, Resource Groups, Elastic Load Balancing, IAM, and EC2 information. Attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryConsoleFullAccess = 'arn:aws:iam::aws:policy/AWSElasticDisasterRecoveryConsoleFullAccess',
    /** You can attach the AWSElasticDisasterRecoveryReadOnlyAccess policy to your IAM identities.  This policy provides permissions to all read-only public APIs of Elastic Disaster Recovery (DRS), as well as some read-only APIs of other AWS services that are required in order to make full read-only use of the DRS console. Attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSElasticDisasterRecoveryReadOnlyAccess',
    /** This policy allows Elastic Disaster Recovery to manage AWS resources on your behalf. */
    AWSElasticDisasterRecoveryServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSElasticDisasterRecoveryServiceRolePolicy',
    /** You can attach the AWSElasticDisasterRecoveryFailbackInstallationPolicy policy to your IAM identities.  This policy allows installing the Elastic Disaster Recovery Failback Client, which is used to failback Recovery Instances back to your original source infrastructure. Attach this policy to your IAM users or roles whose credentials you provide when running the Elastic Disaster Recovery Failback Client. */
    AWSElasticDisasterRecoveryFailbackInstallationPolicy = 'arn:aws:iam::aws:policy/AWSElasticDisasterRecoveryFailbackInstallationPolicy',
    /** This policy is attached to the Elastic Disaster Recovery Replication server's instance role. This policy allows the Elastic Disaster Recovery (DRS) Replication Servers, which are EC2 instances launched by Elastic Disaster Recovery - to communicate with the DRS service, and to create EBS snapshots in your AWS account. An IAM role with this policy is attached (as an EC2 Instance Profile) by Elastic Disaster Recovery to the DRS Replication Servers which are automatically launched and terminated by DRS, as needed. DRS Replication Servers are used to facilitate data replication from your external servers to AWS, as part of the recovery process managed by DRS. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryReplicationServerPolicy = 'arn:aws:iam::aws:policy/service-role/AWSElasticDisasterRecoveryReplicationServerPolicy',
    /** This policy is attached to the AWS Elastic Disaster Recovery Conversion server's instance role. This policy allows Elastic Disaster Recovery (DRS) Conversion Servers, which are EC2 instances launched by Elastic Disaster Recovery, to communicate with the DRS service. An IAM role with this policy is attached (as an EC2 Instance Profile) by DRS to the DRS Conversion Servers, which are automatically launched and terminated by DRS, when needed. We do not recommend that you attach this policy to your IAM users or roles. DRS Conversion Servers are used by Elastic Disaster Recovery when users choose to recover source servers using the DRS console, CLI, or API. */
    AWSElasticDisasterRecoveryConversionServerPolicy = 'arn:aws:iam::aws:policy/service-role/AWSElasticDisasterRecoveryConversionServerPolicy',
    /** Allows AWS Shield to access AWS resources on your behalf to provide DDoS protection. */
    AWSShieldServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSShieldServiceRolePolicy',
    /** Grants permission to Amazon CloudWatch RUM Service to publish monitoring data to other relevant AWS services */
    AmazonCloudWatchRUMServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonCloudWatchRUMServiceRolePolicy',
    /** Allows Amazon Detective to make service calls on your behalf */
    AmazonDetectiveServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonDetectiveServiceLinkedRolePolicy',
    /** This policy grants access to Amazon Athena and the dependencies needed to enable querying and writing results to s3 from the Amazon Athena plugin in Amazon Grafana. */
    AmazonGrafanaAthenaAccess = 'arn:aws:iam::aws:policy/service-role/AmazonGrafanaAthenaAccess',
    /** Provides full access to AWS Elemental MediaTailor resources */
    AWSElementalMediaTailorFullAccess = 'arn:aws:iam::aws:policy/AWSElementalMediaTailorFullAccess',
    /** Provides read only access to AWS Elemental MediaTailor resources */
    AWSElementalMediaTailorReadOnly = 'arn:aws:iam::aws:policy/AWSElementalMediaTailorReadOnly',
    /** Policy which allows AWS Proton to sync your git repository contents to Proton or sync Proton contents to your git repositories. */
    AWSProtonSyncServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSProtonSyncServiceRolePolicy',
    /** Grants access to AWS Services and resources necessary for executing an Amazon Braket Job including S3, Cloudwatch, IAM and Braket */
    AmazonBraketJobsExecutionPolicy = 'arn:aws:iam::aws:policy/AmazonBraketJobsExecutionPolicy',
    /** Enables access to AWS services and resources used or managed by AWS ECR pull through cache */
    AWSECRPullThroughCacheServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSECRPullThroughCache_ServiceRolePolicy',
    /** This policy grants scoped access to Amazon Redshift and the dependencies needed to use the Amazon Redshift plugin in Amazon Grafana. */
    AmazonGrafanaRedshiftAccess = 'arn:aws:iam::aws:policy/service-role/AmazonGrafanaRedshiftAccess',
    /** This policy grants permissions that allow read-only access to AWS Iot RoboRunner. */
    AWSIotRoboRunnerReadOnly = 'arn:aws:iam::aws:policy/AWSIotRoboRunnerReadOnly',
    /** This policy grants permissions that allow full access to AWS Iot RoboRunner. */
    AWSIotRoboRunnerFullAccess = 'arn:aws:iam::aws:policy/AWSIotRoboRunnerFullAccess',
    /** Provides access to AWS Resources managed or used by AWS Migration Hub Refactor Spaces. */
    AWSMigrationHubRefactorSpacesServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSMigrationHubRefactorSpacesServiceRolePolicy',
    /** Grants full access to AWS MigrationHub Refactor Spaces, AWS MigrationHub Refactor Spaces console features and other related AWS services except permissions required for AWS Lambda and AWS Resource Access Manager as they can be scoped down based on tags. */
    AWSMigrationHubRefactorSpacesFullAccess = 'arn:aws:iam::aws:policy/AWSMigrationHubRefactorSpacesFullAccess',
    /** Provides read only access to Amazon CloudWatch Evidently */
    AmazonCloudWatchEvidentlyReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonCloudWatchEvidentlyReadOnlyAccess',
    /** Provides full only access to Amazon CloudWatch Evidently. Also provides access to related Amazon S3, Amazon SNS, Amazon CloudWatch, and other related services. */
    AmazonCloudWatchEvidentlyFullAccess = 'arn:aws:iam::aws:policy/AmazonCloudWatchEvidentlyFullAccess',
    /** Grants read only permissions for the Amazon CloudWatch RUM service */
    AmazonCloudWatchRUMReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonCloudWatchRUMReadOnlyAccess',
    /** Grants full access permissions for the Amazon CloudWatch RUM service */
    AmazonCloudWatchRUMFullAccess = 'arn:aws:iam::aws:policy/AmazonCloudWatchRUMFullAccess',
    /** Provides full access to Amazon Inspector and access to other related services such as organizations. */
    AmazonInspector2FullAccess = 'arn:aws:iam::aws:policy/AmazonInspector2FullAccess',
    /** Enables access to AWS Services and Resources used or managed by Amazon WorkSpaces Web */
    AmazonWorkSpacesWebServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonWorkSpacesWebServiceRolePolicy',
    /** Provides read-only access to Amazon WorkSpaces Web and its dependencies through the AWS Management Console, SDK, and CLI. */
    AmazonWorkSpacesWebReadOnly = 'arn:aws:iam::aws:policy/AmazonWorkSpacesWebReadOnly',
    /** Allows VPC IP Address Manager to access VPC resources and integrate with AWS Organizations on your behalf. */
    AWSIPAMServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSIPAMServiceRolePolicy',
    /** Allows AWS Private Networks Service to manage resources on behalf of the customer. */
    AWSPrivateNetworksServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSPrivateNetworksServiceRolePolicy',
    /** The policy grants full-access to the DevOps Guru console. */
    AmazonDevOpsGuruConsoleFullAccess = 'arn:aws:iam::aws:policy/AmazonDevOpsGuruConsoleFullAccess',
    /** Policy grants ec2fastlaunch to prepare and manage preprovisioned snapshots in customer's account & publish related metrics. */
    EC2FastLaunchServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/EC2FastLaunchServiceRolePolicy',
    /** Grants permissions to all App Runner actions. */
    AWSAppRunnerFullAccess = 'arn:aws:iam::aws:policy/AWSAppRunnerFullAccess',
    /** Allows AWS AppRunner Networking to manage related AWS resources on your behalf. */
    AppRunnerNetworkingServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AppRunnerNetworkingServiceRolePolicy',
    /** Provides read only access to the Amazon inspector2 service and relevant support services */
    AmazonInspector2ReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonInspector2ReadOnlyAccess',
    /** Policy containing permissions necessary for AWS Backup to restore a S3 backup to a bucket. This includes read/write permissions to all S3 buckets, and permissions to GenerateDataKey and DescribeKey for all KMS keys. */
    AWSBackupServiceRolePolicyForS3Restore = 'arn:aws:iam::aws:policy/AWSBackupServiceRolePolicyForS3Restore',
    /** Policy containing permissions necessary for AWS Backup to backup data in any S3 bucket. This includes read access to all S3 objects and any decrypt access for all KMS keys. */
    AWSBackupServiceRolePolicyForS3Backup = 'arn:aws:iam::aws:policy/AWSBackupServiceRolePolicyForS3Backup',
    /** Service role policy used by the AWS Glue within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Glue, S3 and others. */
    AmazonSageMakerServiceCatalogProductsGlueServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerServiceCatalogProductsGlueServiceRolePolicy',
    /** Service role policy used by the AWS CodePipeline within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including CodePipeline, CodeBuild and others. */
    AmazonSageMakerServiceCatalogProductsCodePipelineServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerServiceCatalogProductsCodePipelineServiceRolePolicy',
    /** Service role policy used by the AWS CloudWatch Events within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including CodePipeline and others. */
    AmazonSageMakerServiceCatalogProductsEventsServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerServiceCatalogProductsEventsServiceRolePolicy',
    /** Service role policy used by the AWS Firehose within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Firehose and others. */
    AmazonSageMakerServiceCatalogProductsFirehoseServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerServiceCatalogProductsFirehoseServiceRolePolicy',
    /** Grants permissions to list and view details about App Runner resources. */
    AWSAppRunnerReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSAppRunnerReadOnlyAccess',
    /** Grants full access to the Identity Sync service */
    AWSIdentitySyncFullAccess = 'arn:aws:iam::aws:policy/AWSIdentitySyncFullAccess',
    /** Read only access to the Identity Sync service */
    AWSIdentitySyncReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSIdentitySyncReadOnlyAccess',
    /** Service role policy used by the AWS APIGateway within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including CloudWatch Logs and others. */
    AmazonSageMakerServiceCatalogProductsApiGatewayServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerServiceCatalogProductsApiGatewayServiceRolePolicy',
    /** Service role policy used by the AWS CloudFormation within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including SageMaker and others. */
    AmazonSageMakerServiceCatalogProductsCloudformationServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerServiceCatalogProductsCloudformationServiceRolePolicy',
    /** Service role policy used by the AWS CodeBuild within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including CodePipeline, CodeBuild and others. */
    AmazonSageMakerServiceCatalogProductsCodeBuildServiceRolePolicy = 'arn:aws:iam::aws:policy/AmazonSageMakerServiceCatalogProductsCodeBuildServiceRolePolicy',
    /** Service role policy used by the AWS Lambda within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including ECR, S3 and others. */
    AmazonSageMakerServiceCatalogProductsLambdaServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerServiceCatalogProductsLambdaServiceRolePolicy',
    /** IAM Policy that allows the CSI driver service account to make calls to related services such as EC2 on your behalf. */
    AmazonEBSCSIDriverPolicy = 'arn:aws:iam::aws:policy/service-role/AmazonEBSCSIDriverPolicy',
    /** Managed Policy For Amazon Chime SDK MediaPipelines Service Linked Role */
    AmazonChimeSDKMediaPipelinesServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonChimeSDKMediaPipelinesServiceLinkedRolePolicy',
    /** Read-Only policy for RDS Performance Insights */
    AmazonRDSPerformanceInsightsReadOnly = 'arn:aws:iam::aws:policy/AmazonRDSPerformanceInsightsReadOnly',
    /** This policy provides the permissions required to manage the Red Hat OpenShift Service on AWS (ROSA) subscription. */
    ROSAManageSubscription = 'arn:aws:iam::aws:policy/ROSAManageSubscription',
    /** Use the AWSBillingConductorFullAccess managed policy to allow complete access to AWS Billing Conductor (ABC) console and APIs. This policy allows users to list, create and delete ABC resources. */
    AWSBillingConductorFullAccess = 'arn:aws:iam::aws:policy/AWSBillingConductorFullAccess',
    /** Use the AWSBillingConductorReadOnlyAccess managed policy to allow read only access to AWS Billing Conductor (ABC) console and APIs. This policy grants permission to view and list all ABC resources. It does not include the ability to create or delete resources. */
    AWSBillingConductorReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSBillingConductorReadOnlyAccess',
    /** Provides full access to all AWS Glue resources except for sessions. Allows users to create and use only the interactive sessions that are associated with the user. This policy also includes other permissions needed by AWS Glue to manage Glue resources in other AWS services */
    AwsGlueSessionUserRestrictedServiceRole = 'arn:aws:iam::aws:policy/service-role/AwsGlueSessionUserRestrictedServiceRole',
    /** Provides permissions that allows users to create and use only the interactive sessions that are associated with the user. This policy also includes permissions to explicitly allow users to pass a restricted Glue session role. */
    AwsGlueSessionUserRestrictedPolicy = 'arn:aws:iam::aws:policy/AwsGlueSessionUserRestrictedPolicy',
    /** Provides permissions that allows users to create and use only the notebook sessions that are associated with the user. This policy also includes permissions to explicitly allow users to pass a restricted Glue session role. */
    AwsGlueSessionUserRestrictedNotebookPolicy = 'arn:aws:iam::aws:policy/AwsGlueSessionUserRestrictedNotebookPolicy',
    /** Provides full access to all AWS Glue resources except for sessions. Allows users to create and use only the notebook sessions that are associated with the user. This policy also includes other permissions needed by AWS Glue to manage Glue resources in other AWS services. */
    AwsGlueSessionUserRestrictedNotebookServiceRole = 'arn:aws:iam::aws:policy/service-role/AwsGlueSessionUserRestrictedNotebookServiceRole',
    /** Provides permissions necessary for Migration Hub Orchestrator to migrate and modernize your on-premises workloads */
    AWSMigrationHubOrchestratorServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSMigrationHubOrchestratorServiceRolePolicy',
    /** Provides limited access to Amazon Simple Storage Service, AWS Secrets Manager and Plugin related actions for AWS Migration Hub Orchestrator. */
    AWSMigrationHubOrchestratorPlugin = 'arn:aws:iam::aws:policy/AWSMigrationHubOrchestratorPlugin',
    /** Provides limited access to AWS Migration Hub, AWS Application Discovery Service, Amazon Simple Storage Service and AWS Secrets Manager. This policy also grants full access to AWS Migration Hub Orchestrator service. */
    AWSMigrationHubOrchestratorConsoleFullAccess = 'arn:aws:iam::aws:policy/AWSMigrationHubOrchestratorConsoleFullAccess',
    /** This policy needs to be attached for SAP and MGN migrated instance for our service to orchestrate instances by downloading scripts from S3 and to fetch secret values inside EC2 instance. */
    AWSMigrationHubOrchestratorInstanceRolePolicy = 'arn:aws:iam::aws:policy/AWSMigrationHubOrchestratorInstanceRolePolicy',
    /** Policy for AWS Monitron service linked role granting access to required customer resources. */
    MonitronServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/MonitronServiceRolePolicy',
    /** Allows access to other AWS service resources that are required to run Amazon EMRServerless */
    AmazonEMRServerlessServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonEMRServerlessServiceRolePolicy',
    /** This policy gives permissions to control AWS resources. For example, to start and stop EC2 or RDS instances by executing AWS Systems Manager (SSM) scripts. */
    AWSBudgetsActionsRolePolicyForResourceAdministrationWithSSM = 'arn:aws:iam::aws:policy/AWSBudgetsActions_RolePolicyForResourceAdministrationWithSSM',
    /** This policy allows read-only access to AWS Elastic Disaster Recovery (DRS) resources such as source servers and jobs. It also allows creating a converted snapshot and sharing that EBS snapshot with a specific account. */
    AWSElasticDisasterRecoveryStagingAccountPolicy = 'arn:aws:iam::aws:policy/service-role/AWSElasticDisasterRecoveryStagingAccountPolicy',
    /** This policy allows installing and using the AWS Replication Agent, which is used by AWS Elastic Disaster Recovery (DRS) to recover source servers that run on EC2 (cross-region or cross-AZ). An IAM role with this policy should be attached (as an EC2 Instance Profile) to the EC2 Instances. */
    AWSElasticDisasterRecoveryEc2InstancePolicy = 'arn:aws:iam::aws:policy/service-role/AWSElasticDisasterRecoveryEc2InstancePolicy',
    /** This policy allows using the AWS Replication Agent, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSApplicationMigrationAgentPolicyV2 = 'arn:aws:iam::aws:policy/service-role/AWSApplicationMigrationAgentPolicy_v2',
    /** Allows AWS M2 to manage AWS resources on your behalf. */
    AWSM2ServicePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSM2ServicePolicy',
    /** Allows AWS Managed Services to manage deployment toolkit on your behalf. */
    AWSManagedServicesDeploymentToolkitPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSManagedServicesDeploymentToolkitPolicy',
    /** Provides read only access to AWS CloudTrail. */
    AWSCloudTrailReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSCloudTrail_ReadOnlyAccess',
    /** This policy allows installing the AWS Replication Agent, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide when installing the AWS Replication Agent. */
    AWSApplicationMigrationAgentInstallationPolicy = 'arn:aws:iam::aws:policy/AWSApplicationMigrationAgentInstallationPolicy',
    /** Allows Well-Architected to access Organizations on your behalf. */
    AWSWellArchitectedOrganizationsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSWellArchitectedOrganizationsServiceRolePolicy',
    /** Allows IAM Roles Anywhere to publish service/usage metrics to CloudWatch and check the status of Private Certificate Authorities on your behalf. */
    AWSRolesAnywhereServicePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSRolesAnywhereServicePolicy',
    /** Allow NetworkManager to access resources associated with your Core Network */
    AWSNetworkManagerCloudWANServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSNetworkManagerCloudWANServiceRolePolicy',
    /** GuardDuty malware protection uses the service-linked role (SLR) named AWSServiceRoleForAmazonGuardDutyMalwareProtection. This service-linked role allows GuardDuty malware protection to perform agent-less scans to detect malware. It allows GuardDuty to create snapshots in your account, and share the snapshots with the GuardDuty service account to scan for malware. It evaluates these shared snapshots and includes the retrieved EC2 instance metadata in the GuardDuty Malware Protection findings. The AWSServiceRoleForAmazonGuardDutyMalwareProtection service-linked role trusts the malware-protection.guardduty.amazonaws.com service to assume the role. */
    AmazonGuardDutyMalwareProtectionServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonGuardDutyMalwareProtectionServiceRolePolicy',
    /** Provides full access for creating and managing the Vendor Insights resources */
    AWSVendorInsightsVendorFullAccess = 'arn:aws:iam::aws:policy/AWSVendorInsightsVendorFullAccess',
    /** Provides read-only access for viewing the Vendor Insights resources */
    AWSVendorInsightsVendorReadOnly = 'arn:aws:iam::aws:policy/AWSVendorInsightsVendorReadOnly',
    /** Provides full access for viewing entitled Vendor Insights resources and managing Vendor Insights subscriptions */
    AWSVendorInsightsAssessorFullAccess = 'arn:aws:iam::aws:policy/AWSVendorInsightsAssessorFullAccess',
    /** Provides read-only access for viewing entitled Vendor Insights resources */
    AWSVendorInsightsAssessorReadOnly = 'arn:aws:iam::aws:policy/AWSVendorInsightsAssessorReadOnly',
    /** Allows AWS License Manager User Subscriptions Service to manage resources on your behalf. */
    AWSLicenseManagerUserSubscriptionsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSLicenseManagerUserSubscriptionsServiceRolePolicy',
    /** Provides full access to AWS Trusted Advisor Priority. This policy also enables the user to add Trusted Advisor as a trusted service with AWS Organizations and to specify delegated administrator accounts for Trusted Advisor Priority. */
    AWSTrustedAdvisorPriorityFullAccess = 'arn:aws:iam::aws:policy/AWSTrustedAdvisorPriorityFullAccess',
    /** Provides read-only access to AWS Trusted Advisor Priority. This includes permission to view the delegated administrator accounts. */
    AWSTrustedAdvisorPriorityReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSTrustedAdvisorPriorityReadOnlyAccess',
    /** Allows Application Discovery Service Agentless Collectors to auto update, register, and communicate with Application Discovery Service */
    AWSApplicationDiscoveryAgentlessCollectorAccess = 'arn:aws:iam::aws:policy/AWSApplicationDiscoveryAgentlessCollectorAccess',
    /** Provides full access to the AWS Support App and other required services, such as AWS Support and Service Quotas. This policy includes permissions to use the supporting services so that the user can contact AWS Support for support cases, change service quotas, and create the relevant service-linked roles. */
    AWSSupportAppFullAccess = 'arn:aws:iam::aws:policy/AWSSupportAppFullAccess',
    /** Provides read-only access to the AWS Support App. */
    AWSSupportAppReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSSupportAppReadOnlyAccess',
    /** Allows Amazon EKS Local to call AWS services on your behalf. */
    AmazonEKSLocalOutpostServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonEKSLocalOutpostServiceRolePolicy',
    /** This policy grants permissions commonly needed to use SageMaker Canvas with Amazon Forecast. */
    AmazonSageMakerCanvasForecastAccess = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerCanvasForecastAccess',
    /** This policy provides permissions to EKS local cluster's control-plane instances running in your account to manage resources on your behalf. */
    AmazonEKSLocalOutpostClusterPolicy = 'arn:aws:iam::aws:policy/AmazonEKSLocalOutpostClusterPolicy',
    /** This policy grants read-only access to SageMaker Ground Truth Synthetic via the AWS Management Console. */
    GroundTruthSyntheticConsoleReadOnlyAccess = 'arn:aws:iam::aws:policy/GroundTruthSyntheticConsoleReadOnlyAccess',
    /** This policy grants permissions needed to use all features of the SageMaker Ground Truth Synthetic Console. */
    GroundTruthSyntheticConsoleFullAccess = 'arn:aws:iam::aws:policy/GroundTruthSyntheticConsoleFullAccess',
    /** This policy enables AWS Systems Manager functionality on EC2 instances. */
    AmazonSSMManagedEC2InstanceDefaultPolicy = 'arn:aws:iam::aws:policy/AmazonSSMManagedEC2InstanceDefaultPolicy',
    /** Provides full access to Amazon SageMaker Canvas resources and operations. The policy also provides select access to related services (e.g., S3, IAM, VPC, ECR, CloudWatch Logs, Redshift, Secrets Manager, and Forecast). This policy should be attached to the Amazon SageMaker Domain/User Profile execution role. */
    AmazonSageMakerCanvasFullAccess = 'arn:aws:iam::aws:policy/AmazonSageMakerCanvasFullAccess',
    /** Allows CloudWatch Evidently Service to manage associated AWS Resources on behalf of the customer */
    AmazonCloudWatchEvidentlyServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonCloudWatchEvidentlyServiceRolePolicy',
    /** Grant permissions to AWS Device Farm to call EC2 Network APIs on your behalf. */
    AWSDeviceFarmServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSDeviceFarmServiceRolePolicy',
    /** Grants permissions to AWS Resources and metaData used or managed by AWSIoTFleetwise for auxiliary features */
    AWSIoTFleetwiseServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSIoTFleetwiseServiceRolePolicy',
    /** Provides read-only access to supportplans. */
    AWSSupportPlansReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSSupportPlansReadOnlyAccess',
    /** Provides full access to supportplans. */
    AWSSupportPlansFullAccess = 'arn:aws:iam::aws:policy/AWSSupportPlansFullAccess',
    /** Allows AppIntegrations to manage AppFlow resources and publish CloudWatch metric data on your behalf. */
    AppIntegrationsServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AppIntegrationsServiceLinkedRolePolicy',
    /** Amazon AppStream 2.0 access to AWS Certificate Manager Private CA in customer accounts for certificate-based authentication */
    AmazonAppStreamPCAAccess = 'arn:aws:iam::aws:policy/service-role/AmazonAppStreamPCAAccess',
    /** This policy is intended to be used by Amazon ECS Tasks created for testing applications in AWS using the AWS Toolkit for .NET Refactoring extension for Microsoft Visual Studio. The policy grants access to download application artifacts from Amazon S3, communicate the status of the Task using AWS Systems Manager, and other required services. */
    AWSRefactoringToolkitSidecarPolicy = 'arn:aws:iam::aws:policy/AWSRefactoringToolkitSidecarPolicy',
    /** This policy grants permission to use AWS services with the AWS Toolkit for .NET Refactoring extension for Microsoft Visual Studio. It is intended to be attached to a local AWS profile. The policy allows uploading application artifacts and downloading the resulting artifacts from Amazon S3. It allows building applications into a container image using AWS CodeBuild and storing and retrieving the images from Amazon Elastic Container Registry (Amazon ECR). And it allows deployment of the application to container services on AWS such as Amazon Elastic Container Service (Amazon ECS), optional creation of VPC resources, optional connection to existing infrastructure such as AWS Directory Service, and other related services. */
    AWSRefactoringToolkitFullAccess = 'arn:aws:iam::aws:policy/AWSRefactoringToolkitFullAccess',
    /** Allows Resource Explorer to view resources and CloudTrail events on your behalf to index your resources for search. */
    AWSResourceExplorerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSResourceExplorerServiceRolePolicy',
    /** This policy grants the Fault Injection Simulator Service permission in SSM and other required services to perform FIS actions. */
    AWSFaultInjectionSimulatorSSMAccess = 'arn:aws:iam::aws:policy/service-role/AWSFaultInjectionSimulatorSSMAccess',
    /** This policy grants the Fault Injection Simulator Service permission in RDS and other required services to perform FIS actions. */
    AWSFaultInjectionSimulatorRDSAccess = 'arn:aws:iam::aws:policy/service-role/AWSFaultInjectionSimulatorRDSAccess',
    /** This policy grants the Fault Injection Simulator Service permission in EC2 networking and other required services to perform FIS actions. */
    AWSFaultInjectionSimulatorNetworkAccess = 'arn:aws:iam::aws:policy/service-role/AWSFaultInjectionSimulatorNetworkAccess',
    /** This policy grants the Fault Injection Simulator Service permission in EKS and other required services to perform FIS actions. */
    AWSFaultInjectionSimulatorEKSAccess = 'arn:aws:iam::aws:policy/service-role/AWSFaultInjectionSimulatorEKSAccess',
    /** This policy grants the Fault Injection Simulator Service permission in ECS and other required services to perform FIS actions. */
    AWSFaultInjectionSimulatorECSAccess = 'arn:aws:iam::aws:policy/service-role/AWSFaultInjectionSimulatorECSAccess',
    /** This policy grants the Fault Injection Simulator Service permission in EC2 and other required services to perform FIS actions. */
    AWSFaultInjectionSimulatorEC2Access = 'arn:aws:iam::aws:policy/service-role/AWSFaultInjectionSimulatorEC2Access',
    /** This policy grants read-only permissions to search for and view Resource Explorer resources and grants read-only permissions to other AWS services to support this access. */
    AWSResourceExplorerReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSResourceExplorerReadOnlyAccess',
    /** This policy grants administrative permissions to access Resource Explorer resources and grants read-only permissions to other AWS services to support this access. */
    AWSResourceExplorerFullAccess = 'arn:aws:iam::aws:policy/AWSResourceExplorerFullAccess',
    /** This managed policy provides full administrative access to AWS Certificate Manager Private CA resources in your AWS account for certificate-based authentication. */
    AmazonWorkspacesPCAAccess = 'arn:aws:iam::aws:policy/AmazonWorkspacesPCAAccess',
    /** Provides access to AWS Resources managed or used by Amazon Grafana. */
    AmazonGrafanaServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonGrafanaServiceLinkedRolePolicy',
    /** Permissions CodeBuild needs to run a build for AWS Proton CodeBuild Provisioning. */
    AWSProtonCodeBuildProvisioningBasicAccess = 'arn:aws:iam::aws:policy/AWSProtonCodeBuildProvisioningBasicAccess',
    /** Allows AWS Proton to manage Proton resource provisioning using CodeBuild and other AWS services on your behalf. */
    AWSProtonCodeBuildProvisioningServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSProtonCodeBuildProvisioningServiceRolePolicy',
    /** The AmazonEventBridgeSchedulerFullAccess managed policy grants permissions to use all EventBridge Scheduler actions for schedules, and schedule groups. */
    AmazonEventBridgeSchedulerFullAccess = 'arn:aws:iam::aws:policy/AmazonEventBridgeSchedulerFullAccess',
    /** The AmazonEventBridgeSchedulerReadOnlyAccess managed policy grants read-only permissions to view details about your schedules and schedule groups */
    AmazonEventBridgeSchedulerReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonEventBridgeSchedulerReadOnlyAccess',
    /** Provides AWS Backup permission to restore a backup of SAP HANA on Amazon EC2 */
    AWSBackupRestoreAccessForSAPHANA = 'arn:aws:iam::aws:policy/AWSBackupRestoreAccessForSAPHANA',
    /** This policy allows the AWS Backint agent to complete backup data transfer with AWS Backup Storage plane. Attach this policy to roles assumed by EC2 Instances running SAP HANA with the Backint agent. */
    AWSBackupDataTransferAccess = 'arn:aws:iam::aws:policy/AWSBackupDataTransferAccess',
    /** A Service Linked Role for AWS ServiceCatalog to sync Provisioning Artifacts from source repositories */
    AWSServiceCatalogSyncServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceCatalogSyncServiceRolePolicy',
    /** Provides AWS Systems Manager for SAP with the permissions needed to manage and integrate SAP software with AWS. */
    AWSSSMForSAPServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSSSMForSAPServiceLinkedRolePolicy',
    /** Provides full access to AWS Systems Manager for SAP service */
    AWSSystemsManagerForSAPFullAccess = 'arn:aws:iam::aws:policy/AWSSystemsManagerForSAPFullAccess',
    /** Provides read only access to AWS Systems Manager for SAP service */
    AWSSystemsManagerForSAPReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSSystemsManagerForSAPReadOnlyAccess',
    /** Allows Amazon OpenSearch Ingestion Service to access other AWS services on your behalf. */
    AmazonOpenSearchIngestionServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonOpenSearchIngestionServiceRolePolicy',
    /** Allows VPC Reachability Analyzer to access AWS resources and integrate with AWS Organizations on your behalf. */
    AWSReachabilityAnalyzerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSReachabilityAnalyzerServiceRolePolicy',
    /** Allow Amazon OpenSearch Serverless to access other AWS services such as CloudWatch APIs on your behalf. */
    AmazonOpenSearchServerlessServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonOpenSearchServerlessServiceRolePolicy',
    /** This policy provides access to Amazon SSM operations required to use Application Migration Service (MGN) to execute custom post migration command SSM documents. Attach this policy to your IAM users or roles. */
    AWSApplicationMigrationSSMAccess = 'arn:aws:iam::aws:policy/AWSApplicationMigrationSSMAccess',
    /** Provides Read Only access to CloudWatch Observability Access Manager */
    OAMReadOnlyAccess = 'arn:aws:iam::aws:policy/OAMReadOnlyAccess',
    /** Provides full access to CloudWatch Observability Access Manager */
    OAMFullAccess = 'arn:aws:iam::aws:policy/OAMFullAccess',
    /** Provides capabilities to manage Observability Access Manager links and establish sharing of X-Ray traces */
    AWSXrayCrossAccountSharingConfiguration = 'arn:aws:iam::aws:policy/AWSXrayCrossAccountSharingConfiguration',
    /** Provides capabilities to manage Observability Access Manager links and establish sharing of CloudWatch Logs resources */
    CloudWatchLogsCrossAccountSharingConfiguration = 'arn:aws:iam::aws:policy/CloudWatchLogsCrossAccountSharingConfiguration',
    /** Provides capabilities to manage Observability Access Manager links and establish sharing of CloudWatch resources */
    CloudWatchCrossAccountSharingConfiguration = 'arn:aws:iam::aws:policy/CloudWatchCrossAccountSharingConfiguration',
    /** Allows Internet Monitor to access EC2, Workspaces, and CloudFront resources, and other required services on your behalf. */
    CloudWatchInternetMonitorServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/CloudWatchInternetMonitorServiceRolePolicy',
    /** This policy grants full administrative permissions to the Wickr service, including the Wickr administrative functions under the AWS Management Console. */
    AWSWickrFullAccess = 'arn:aws:iam::aws:policy/AWSWickrFullAccess',
    /** Policy to enable AWS Verified Access service to provision endpoints on your behalf */
    AWSVPCVerifiedAccessServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSVPCVerifiedAccessServiceRolePolicy',
    /** Provide read only access to Amazon Omics */
    AmazonOmicsReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonOmicsReadOnlyAccess',
    /** This policy grants permissions to operate the Amazon Security Lake service on your behalf */
    SecurityLakeServiceLinkedRole = 'arn:aws:iam::aws:policy/aws-service-role/SecurityLakeServiceLinkedRole',
    /** Amazon Security Lake creates IAM roles for third-party custom sources to write data to a data lake and for third-party subscribers to consume data from a data lake, and uses this policy when creating these roles to define the boundary of their permissions. */
    AmazonSecurityLakePermissionsBoundary = 'arn:aws:iam::aws:policy/AmazonSecurityLakePermissionsBoundary',
    /** This AWS managed policy grants permissions needed to use all Amazon SageMaker Governance features. The policy also provides select access to related services (e.g., S3, KMS). */
    AmazonSageMakerModelGovernanceUseAccess = 'arn:aws:iam::aws:policy/AmazonSageMakerModelGovernanceUseAccess',
    /** This policy grants permissions that allow full access to Amazon SageMaker Geospatial through the AWS Management Console and SDK. */
    AmazonSageMakerGeospatialFullAccess = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerGeospatialFullAccess',
    /** This policy provide access to services that are commonly needed to use SageMaker geospatial. */
    AmazonSageMakerGeospatialExecutionRole = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerGeospatialExecutionRole',
    /** Allows Amazon DocumentDB-Elastic to manage AWS resources on your behalf. */
    AmazonDocDBElasticServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonDocDB-ElasticServiceRolePolicy',
    /** Allows VPC Lattice to access AWS resources on your behalf. */
    AWSVpcLatticeServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSVpcLatticeServiceRolePolicy',
    /** Provides full access to Amazon EventBridge Pipes. */
    AmazonEventBridgePipesFullAccess = 'arn:aws:iam::aws:policy/AmazonEventBridgePipesFullAccess',
    /** Provides read-only access to Amazon EventBridge Pipes. */
    AmazonEventBridgePipesReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonEventBridgePipesReadOnlyAccess',
    /** Provides read-only and operator (ability to Stop and Start running Pipes) access to Amazon EventBridge Pipes. */
    AmazonEventBridgePipesOperatorAccess = 'arn:aws:iam::aws:policy/AmazonEventBridgePipesOperatorAccess',
    /** AWS GroundStation uses this service-linked role to invoke EC2 to find public IPv4 addresses */
    AWSServiceRoleForGroundStationDataflowEndpointGroupPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForGroundStationDataflowEndpointGroupPolicy',
    /** Provides AWS BackupGateway permission to sync the metadata of Virtual Machines on your behalf */
    AWSBackupGatewayServiceRolePolicyForVirtualMachineMetadataSync = 'arn:aws:iam::aws:policy/service-role/AWSBackupGatewayServiceRolePolicyForVirtualMachineMetadataSync',
    /** AWS Managed Services - policy to manage detective controls infrastructure */
    AWSManagedServicesDetectiveControlsConfigServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSManagedServices_DetectiveControlsConfig_ServiceRolePolicy',
    /** Allows AWS License Manager Linux Subscriptions Service to manage resources on your behalf. */
    AWSLicenseManagerLinuxSubscriptionsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSLicenseManagerLinuxSubscriptionsServiceRolePolicy',
    /** This policy grants permissions that allow you to install an Outpost server on your on-premises network. */
    AWSOutpostsAuthorizeServerPolicy = 'arn:aws:iam::aws:policy/AWSOutpostsAuthorizeServerPolicy',
    /** This policy is used by AWS Elastic Disaster Recovery (DRS) to recover source servers into a separate target account and to allow failing back. We do not recommend that you attach this policy to your IAM users or roles. */
    AWSElasticDisasterRecoveryStagingAccountPolicyV2 = 'arn:aws:iam::aws:policy/service-role/AWSElasticDisasterRecoveryStagingAccountPolicy_v2',
    /** Allows AWS Resource Groups to query the AWS services that own your resources to keep the group up-to-date */
    ResourceGroupsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/ResourceGroupsServiceRolePolicy',
    /** Allows read-only access to AWS Clean Rooms resources and read-only access to related AWS Glue and Amazon CloudWatch Logs resources. */
    AWSCleanRoomsReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSCleanRoomsReadOnlyAccess',
    /** Allows full access to AWS Clean Rooms resources and access to related AWS Services. */
    AWSCleanRoomsFullAccess = 'arn:aws:iam::aws:policy/AWSCleanRoomsFullAccess',
    /** Allows full access to AWS Clean Rooms resources except for querying in a collaboration and access to related AWS Services. */
    AWSCleanRoomsFullAccessNoQuerying = 'arn:aws:iam::aws:policy/AWSCleanRoomsFullAccessNoQuerying',
    /** Allows AWS Health to enable the Health event processor feature. */
    AWSHealthEventProcessorServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSHealth_EventProcessorServiceRolePolicy',
    /** Provides member access to Amazon Detective service and scoped access to the console UI dependencies. */
    AmazonDetectiveMemberAccess = 'arn:aws:iam::aws:policy/AmazonDetectiveMemberAccess',
    /** Provides investigator access to Amazon Detective service and scoped access to the console UI dependencies. This policy grants permission to dive into Detective for investigation purposes and limited write access to Guardduty. */
    AmazonDetectiveInvestigatorAccess = 'arn:aws:iam::aws:policy/AmazonDetectiveInvestigatorAccess',
    /** EC2 Instance Connect endpoint policy to manage EC2 Instance Connect endpoints created by the customer */
    Ec2InstanceConnectEndpoint = 'arn:aws:iam::aws:policy/aws-service-role/Ec2InstanceConnectEndpoint',
    /** This policy defines the set of permissions allowed for unauthenticated identities for Cognito Identity Pools. This does not need to be attached to your unauth role, as Cognito Identity Service will automatically include it as a scoped down policy when creating credentials. The privileges to temporarily access other AWS resources through the enhanced flow will now be defined by the intersection of the role associated with the identity of the unauthenticated user provided by a service, and the privileges given in this managed policy that is owned by Cognito. */
    AmazonCognitoUnauthenticatedIdentities = 'arn:aws:iam::aws:policy/AmazonCognitoUnauthenticatedIdentities',
    /** AWS Managed Services policy to enable AMS event processor feature. */
    AWSManagedServicesEventsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSManagedServices_EventsServiceRolePolicy',
    /** Provides certificate user access to AWS Private Certificate Authority */
    AWSPrivateCAUser = 'arn:aws:iam::aws:policy/AWSPrivateCAUser',
    /** Provides full access to AWS Private Certificate Authority */
    AWSPrivateCAFullAccess = 'arn:aws:iam::aws:policy/AWSPrivateCAFullAccess',
    /** Provides privileged certificate user access to AWS Private Certificate Authority */
    AWSPrivateCAPrivilegedUser = 'arn:aws:iam::aws:policy/AWSPrivateCAPrivilegedUser',
    /** Provides read only access to AWS Private Certificate Authority */
    AWSPrivateCAReadOnly = 'arn:aws:iam::aws:policy/AWSPrivateCAReadOnly',
    /** Provides auditor access to AWS Private Certificate Authority */
    AWSPrivateCAAuditor = 'arn:aws:iam::aws:policy/AWSPrivateCAAuditor',
    /** Allows AWS IoT RoboRunner to manage associated AWS Resources on behalf of the customer. */
    AWSIotRoboRunnerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSIotRoboRunnerServiceRolePolicy',
    /** Provides full access to Amazon Omics and other required AWS Services. This policy allows the user to view and accept RAM share invitations to access resources outside of the user's AWS account. */
    AmazonOmicsFullAccess = 'arn:aws:iam::aws:policy/AmazonOmicsFullAccess',
    /** AWSSupplyChainFederationAdminAccess provides AWS Supply Chain federated users access to the AWS Supply Chain application, including the required permissions to perform actions within the AWS Supply Chain application. The policy provides administrative permissions over IAM Identity Center users and groups and is attached to a role created by AWS Supply Chain on your behalf. You shouldn't attach AWSSupplyChainFederationAdminAccess policy to any other IAM entities. */
    AWSSupplyChainFederationAdminAccess = 'arn:aws:iam::aws:policy/service-role/AWSSupplyChainFederationAdminAccess',
    /** Provides Organizations access to manage Delegated administrator for Amazon Detective and scoped access to the console UI dependencies. This also grants permission to create a service-linked role for Detective. */
    AmazonDetectiveOrganizationsAccess = 'arn:aws:iam::aws:policy/AmazonDetectiveOrganizationsAccess',
    /** Allows Amazon Chime SDK Messaging to access AWS resources and enable messaging functionality */
    AmazonChimeSDKMessagingServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonChimeSDKMessagingServiceRolePolicy',
    /** Allows DMS Fleet Advisor to manage CloudWatch metrics on your behalf. */
    AWSDMSFleetAdvisorServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSDMSFleetAdvisorServiceRolePolicy',
    /** Allows Amazon Connect Customer Profiles to access AWS services and resources on your behalf. */
    CustomerProfilesServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/CustomerProfilesServiceLinkedRolePolicy',
    /** Allows DataSync Discovery to integrate with other AWS services on your behalf. */
    AWSDataSyncDiscoveryServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSDataSyncDiscoveryServiceRolePolicy',
    /** This policy grants permission to register MediaConnect Gateway Instances to a MediaConnect Gateway. */
    MediaConnectGatewayInstanceRolePolicy = 'arn:aws:iam::aws:policy/MediaConnectGatewayInstanceRolePolicy',
    /** Allows AWS Managed Services to read the values of the tags on AWS resources */
    AWSManagedServicesContactsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSManagedServices_ContactsServiceRolePolicy',
    /** Provides permissions for Amazon SageMaker Canvas to use AI services to support ready to use AI solutions. This policy will add more mutating permissions for services as Amazon SageMaker Canvas adds support. */
    AmazonSageMakerCanvasAIServicesAccess = 'arn:aws:iam::aws:policy/AmazonSageMakerCanvasAIServicesAccess',
    /** This role grants permissions to CodeWhisperer to access data in your account to calculate billing, provides access to create and access security reports in Amazon CodeGuru, and emit data to CloudWatch. */
    AWSServiceRoleForCodeWhispererPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForCodeWhispererPolicy',
    /** This policy grants access to Amazon CloudWatch and the dependencies needed to use CloudWatch as a datasource within Amazon Managed Grafana. */
    AmazonGrafanaCloudWatchAccess = 'arn:aws:iam::aws:policy/service-role/AmazonGrafanaCloudWatchAccess',
    /** Provides the Dataflow Endpoint Instance permissions to use the AWS Ground Station Agent */
    AWSGroundStationAgentInstancePolicy = 'arn:aws:iam::aws:policy/AWSGroundStationAgentInstancePolicy',
    /** Provides access to invoking Amazon VPC Lattice services. */
    VPCLatticeServicesInvokeAccess = 'arn:aws:iam::aws:policy/VPCLatticeServicesInvokeAccess',
    /** Provides read-only access to Amazon VPC Lattice via the AWS Management Console, and limited access to dependency services. */
    VPCLatticeReadOnlyAccess = 'arn:aws:iam::aws:policy/VPCLatticeReadOnlyAccess',
    /** Provides full access to Amazon VPC Lattice and access to dependency services. */
    VPCLatticeFullAccess = 'arn:aws:iam::aws:policy/VPCLatticeFullAccess',
    /** Grants full access to AWS Migration Hub Refactor Spaces and other AWS related services except AWS Transit Gateway and EC2 security groups not required when using environments without a network bridge. This policy also excludes permissions required for AWS Lambda and AWS Resource Access Manager as they can be scoped down based on tags. */
    AWSMigrationHubRefactorSpacesEnvironmentsWithoutBridgesFullAccess = 'arn:aws:iam::aws:policy/AWSMigrationHubRefactorSpaces-EnvironmentsWithoutBridgesFullAccess',
    /** The default policy that enables access to AWS Services and Resources used or managed by MediaConnect. */
    AWSMediaConnectServicePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSMediaConnectServicePolicy',
    /** Policy which allows AWS Proton to sync your service, environment and component definitions from your git repository to AWS Proton. */
    AWSProtonServiceGitSyncServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSProtonServiceGitSyncServiceRolePolicy',
    /** A Service Linked Role Policy for AWS ServiceCatalog to sync with AWS Organizations organization structure */
    AWSServiceCatalogOrgsDataSyncServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceCatalogOrgsDataSyncServiceRolePolicy',
    /** This is a new managed policy for Model Registry in Sagemaker. This policy is a standalone policy that can be attached to the user role to access Model Registry related functionalities in Sagemaker. */
    AmazonSageMakerModelRegistryFullAccess = 'arn:aws:iam::aws:policy/AmazonSageMakerModelRegistryFullAccess',
    /** Allows AWS User Notifications to call AWS services on your behalf. */
    AWSUserNotificationsServiceLinkedRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSUserNotificationsServiceLinkedRolePolicy',
    /** Allows Amazon CodeCatalyst to create, update, and resolve AWS Support cases on your behalf. */
    AmazonCodeCatalystSupportAccess = 'arn:aws:iam::aws:policy/service-role/AmazonCodeCatalystSupportAccess',
    /** Provides read only access to Amazon CodeCatalyst */
    AmazonCodeCatalystReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonCodeCatalystReadOnlyAccess',
    /** Provides full access to Amazon CodeCatalyst */
    AmazonCodeCatalystFullAccess = 'arn:aws:iam::aws:policy/AmazonCodeCatalystFullAccess',
    /** Allows the OpenShift Cloud Network Config Controller Operator to provision and manage networking resources for use by the Red Hat OpenShift Service on AWS (ROSA) cluster networking overlay. The OpenShift Cloud Network Operator interfaces with AWS APIs on behalf of the network plugins via CustomResourceDefinitions. The operator uses these policy permissions to manage private IP addresses for Amazon EC2 instances as part of the ROSA cluster. */
    ROSACloudNetworkConfigOperatorPolicy = 'arn:aws:iam::aws:policy/service-role/ROSACloudNetworkConfigOperatorPolicy',
    /** Allows Red Hat OpenShift Service on AWS (ROSA) worker nodes in your account read-only access to Amazon EC2 instances and AWS Regions for compute node lifecycle management. */
    ROSAWorkerInstancePolicy = 'arn:aws:iam::aws:policy/service-role/ROSAWorkerInstancePolicy',
    /** Allows the OpenShift Amazon EBS Container Storage Interface (CSI) Driver Operator to install and maintain the Amazon EBS CSI driver on a Red Hat OpenShift Service on AWS (ROSA) cluster. The Amazon EBS CSI driver allows ROSA clusters to manage the lifecycle of Amazon EBS volumes for persistent volumes. */
    ROSAAmazonEBSCSIDriverOperatorPolicy = 'arn:aws:iam::aws:policy/service-role/ROSAAmazonEBSCSIDriverOperatorPolicy',
    /** Allows the OpenShift Ingress Operator to provision and manage load balancers and domain name system (DNS) configurations for Red Hat OpenShift Service on AWS (ROSA) clusters. The policy allows read access to tag values, which the operator filters for Route 53 resources to discover hosted zones. */
    ROSAIngressOperatorPolicy = 'arn:aws:iam::aws:policy/service-role/ROSAIngressOperatorPolicy',
    /** Allows Red Hat OpenShift Service on AWS (ROSA) control plane to manage ROSA cluster Amazon EC2 and Amazon Route 53 resources. */
    ROSAControlPlaneOperatorPolicy = 'arn:aws:iam::aws:policy/service-role/ROSAControlPlaneOperatorPolicy',
    /** Provides read only access to the Amazon OpenSearch Ingestion Service */
    AmazonOpenSearchIngestionReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonOpenSearchIngestionReadOnlyAccess',
    /** Allows Amazon OpenSearch Ingestion to access other AWS services on your behalf. */
    AmazonOpenSearchIngestionFullAccess = 'arn:aws:iam::aws:policy/AmazonOpenSearchIngestionFullAccess',
    /** Allows WellArchitected to access AWS services and resources that relate to WellArchitected resources on behalf of customers. */
    AWSWellArchitectedDiscoveryServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSWellArchitectedDiscoveryServiceRolePolicy',
    /** Allows the ROSA Kubernetes controller to manage Amazon EC2, Elastic Load Balancing (ELB), and AWS Key Management Service (KMS) resources for a ROSA cluster. */
    ROSAKubeControllerPolicy = 'arn:aws:iam::aws:policy/service-role/ROSAKubeControllerPolicy',
    /** Allows the built-in ROSA AWS Encryption Provider to manage AWS Key Management Service (KMS) keys to support etcd data encryption using a customer provided AWS KMS key. The policy allows encryption and decryption of data using KMS keys. */
    ROSAKMSProviderPolicy = 'arn:aws:iam::aws:policy/service-role/ROSAKMSProviderPolicy',
    /** Allows the OpenShift Image Registry Operator to provision and manage Amazon S3 buckets and objects for use by the Red Hat OpenShift Service on AWS (ROSA) in-cluster image registry to satisfy ROSA storage requirements. The OpenShift Image Registry Operator installs and maintains the internal registry of a Red Hat OpenShift cluster. */
    ROSAImageRegistryOperatorPolicy = 'arn:aws:iam::aws:policy/service-role/ROSAImageRegistryOperatorPolicy',
    /** This policy is attached to the role IAMRoleForReachabilityAnalyzerCrossAccountResourceAccess. This role is deployed to the member accounts in an organization when the management account enables trusted access for Reachability Analyzer. It provides permissions to view resources from across your organization using the Reachability Analyzer console. */
    AmazonVPCReachabilityAnalyzerPathComponentReadPolicy = 'arn:aws:iam::aws:policy/AmazonVPCReachabilityAnalyzerPathComponentReadPolicy',
    /** Permissions required by Keyspaces for cross-region data replication */
    KeyspacesReplicationServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/KeyspacesReplicationServiceRolePolicy',
    /** Provides access required for working with Amazon CodeGuru Security scans. */
    AmazonCodeGuruSecurityScanAccess = 'arn:aws:iam::aws:policy/AmazonCodeGuruSecurityScanAccess',
    /** Provides full access to Amazon CodeGuru Security. */
    AmazonCodeGuruSecurityFullAccess = 'arn:aws:iam::aws:policy/AmazonCodeGuruSecurityFullAccess',
    /** Policy to enable access to AWS Service and Resources used or managed by Amazon FinSpace */
    AWSFinSpaceServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSFinSpaceServiceRolePolicy',
    /** This policy allows AWS Elastic Disaster Recovery (DRS) to support cross-account replication and cross-account failback. */
    AWSElasticDisasterRecoveryCrossAccountReplicationPolicy = 'arn:aws:iam::aws:policy/service-role/AWSElasticDisasterRecoveryCrossAccountReplicationPolicy',
    /** Grants AWS DMS Serverless permissions to create and manage DMS resources in your account on your behalf */
    AWSDMSServerlessServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSDMSServerlessServiceRolePolicy',
    /** Provides full access to Amazon Security Lake and related services needed to administer Security Lake. */
    AmazonSecurityLakeAdministrator = 'arn:aws:iam::aws:policy/AmazonSecurityLakeAdministrator',
    /** Provides ROSA site reliability engineering (SRE) the permissions needed to initially observe, diagnose, and support AWS resources associated with Red Hat OpenShift Service on AWS (ROSA) clusters, including the ability to change ROSA cluster node state. */
    ROSASRESupportPolicy = 'arn:aws:iam::aws:policy/service-role/ROSASRESupportPolicy',
    /** Provides full access to Amazon DocumentDB Elastic Clusters and other required permissions for its dependencies including EC2, KMS, SecretsManager, CloudWatch and IAM. */
    AmazonDocDBElasticFullAccess = 'arn:aws:iam::aws:policy/AmazonDocDBElasticFullAccess',
    /** Allows AWS Control Tower to call AWS services that provide automated account configuration and centralized governance on your behalf. */
    AWSControlTowerAccountServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSControlTowerAccountServiceRolePolicy',
    /** Allows the Red Hat OpenShift Service on AWS (ROSA) installer to manage AWS resources that support ROSA cluster installation. This includes managing instance profiles for ROSA worker nodes. */
    ROSAInstallerPolicy = 'arn:aws:iam::aws:policy/service-role/ROSAInstallerPolicy',
    /** Provides read-only access to Amazon DocDB-Elastic and CloudWatch metrics. */
    AmazonDocDBElasticReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonDocDBElasticReadOnlyAccess',
    /** Allows Red Hat OpenShift Service on AWS (ROSA) to manage cluster EC2 instances as worker nodes, including permission to configure security groups and tag instances and volumes. This policy also allows for the use of EC2 instances with disk encryption provided by AWS Key Management Service (KMS) keys. */
    ROSANodePoolManagementPolicy = 'arn:aws:iam::aws:policy/service-role/ROSANodePoolManagementPolicy',
    /** This policy allows AWS Elastic Disaster Recovery (DRS) to support network replication. */
    AWSElasticDisasterRecoveryNetworkReplicationPolicy = 'arn:aws:iam::aws:policy/service-role/AWSElasticDisasterRecoveryNetworkReplicationPolicy',
    /** Provides permissions to describe AWS resources, run Reachability Analyzer, and create or delete tags on Network Insights Path and Network Insights Analysis. */
    AmazonVPCReachabilityAnalyzerFullAccessPolicy = 'arn:aws:iam::aws:policy/AmazonVPCReachabilityAnalyzerFullAccessPolicy',
    /** Provides readonly access to Amazon Macie. */
    AmazonMacieReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonMacieReadOnlyAccess',
    /** Provides permissions to describe AWS resources, run Network Access Analyzer, and create or delete tags on Network Insights Access Scope and Network Insights Access Scope Analysis. */
    AmazonVPCNetworkAccessAnalyzerFullAccessPolicy = 'arn:aws:iam::aws:policy/AmazonVPCNetworkAccessAnalyzerFullAccessPolicy',
    /** This policy grants read-only permissions that allow the WAL service for Amazon EMR to find and return the status of a cluster */
    EMRDescribeClusterPolicyForEMRWAL = 'arn:aws:iam::aws:policy/aws-service-role/EMRDescribeClusterPolicyForEMRWAL',
    /** Provides AppFabric access to AWS resources on your behalf */
    AWSAppFabricServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSAppFabricServiceRolePolicy',
    /** Policy for AWS Resilience Hub service role which allows access to other AWS services in order to execute assessment. */
    AWSResilienceHubAsssessmentExecutionPolicy = 'arn:aws:iam::aws:policy/AWSResilienceHubAsssessmentExecutionPolicy',
    /** Provides full access to the AWS AppFabric service and read only access to dependent services such as S3, Kinesis, KMS. */
    AWSAppFabricFullAccess = 'arn:aws:iam::aws:policy/AWSAppFabricFullAccess',
    /** Provides read only access to the AWS AppFabric */
    AWSAppFabricReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSAppFabricReadOnlyAccess',
    /** This policy defines the set of permissions allowed for unauthenticated identities for Cognito Identity Pools. This policy is not intended to be used as a stand alone permission policy. It is used as a guardrail against overly permissive policies attached for roles in an identity pool. Do not attach this policy to any roles, as Cognito Identity Service will automatically include it as a scoped down policy when creating credentials. The privileges to temporarily access other AWS resources through the enhanced flow will now be defined by the intersection of the role associated with the identity of the unauthenticated user provided by a service, and the privileges given in this managed policy that is owned by Cognito. */
    AmazonCognitoUnAuthedIdentitiesSessionPolicy = 'arn:aws:iam::aws:policy/AmazonCognitoUnAuthedIdentitiesSessionPolicy',
    /** Provides management access to EFS resources and read access to EC2 */
    AmazonEFSCSIDriverPolicy = 'arn:aws:iam::aws:policy/service-role/AmazonEFSCSIDriverPolicy',
    /** Provides full access to AWS Elemental MediaPackageV2 resources. */
    AWSElementalMediaPackageV2FullAccess = 'arn:aws:iam::aws:policy/AWSElementalMediaPackageV2FullAccess',
    /** Provides read-only access to AWS Elemental MediaPackageV2 resources. */
    AWSElementalMediaPackageV2ReadOnly = 'arn:aws:iam::aws:policy/AWSElementalMediaPackageV2ReadOnly',
    /** Provides full access to AWS Health Imaging service. */
    AWSHealthImagingFullAccess = 'arn:aws:iam::aws:policy/AWSHealthImagingFullAccess',
    /** Provides read only access to AWS Health Imaging service. */
    AWSHealthImagingReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSHealthImagingReadOnlyAccess',
    /** Provides full access to CloudWatch. */
    CloudWatchFullAccessV2 = 'arn:aws:iam::aws:policy/CloudWatchFullAccessV2',
    /** Service role policy used by the AWS Lambda within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Secrets Manager and others. */
    AmazonSageMakerPartnerServiceCatalogProductsLambdaServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerPartnerServiceCatalogProductsLambdaServiceRolePolicy',
    /** Service role policy used by the AWS APIGateway within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Lambda and others. */
    AmazonSageMakerPartnerServiceCatalogProductsApiGatewayServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerPartnerServiceCatalogProductsApiGatewayServiceRolePolicy',
    /** Service role policy used by the AWS CloudFormation within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including Lambda, APIGateway and others. */
    AmazonSageMakerPartnerServiceCatalogProductsCloudFormationServiceRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerPartnerServiceCatalogProductsCloudFormationServiceRolePolicy',
    /** Use in the IAM service role passed to the SSM Automation document AWSRefactorSpaces-CreateResources to grant permissions required to run the automation. The policy grants read/write access to EC2 tags in order to track automation progress. When the Refactor Spaces environment's network bridge is enabled, the automation also adds the environment's security group to the EC2 instance to permit traffic from other Refactor Spaces services in the environment. The policy also grants access to the Application Migration Service's post launch actions SSM parameters. */
    AWSMigrationHubRefactorSpacesSSMAutomationPolicy = 'arn:aws:iam::aws:policy/service-role/AWSMigrationHubRefactorSpaces-SSMAutomationPolicy',
    /** Provides full access to RDS Performance Insights via the AWS Management Console */
    AmazonRDSPerformanceInsightsFullAccess = 'arn:aws:iam::aws:policy/AmazonRDSPerformanceInsightsFullAccess',
    /** Provides console full access to AWS Entity Resolution and related services. */
    AWSEntityResolutionConsoleFullAccess = 'arn:aws:iam::aws:policy/AWSEntityResolutionConsoleFullAccess',
    /** Provides read-only access to AWS Entity Resolution via the AWS Management Console. */
    AWSEntityResolutionConsoleReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSEntityResolutionConsoleReadOnlyAccess',
    /** Allows AWS Artifact to gather information about an organization via AWS Organizations service. */
    AWSArtifactServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSArtifactServiceRolePolicy',
    /** This policy allows installing and using the AWS Replication Agent, which is used by AWS Application Migration Service (AWS MGN) to migrate source servers that run on EC2 (cross-Region or cross-AZ). An IAM role with this policy should be attached (as an EC2 Instance Profile) to the EC2 Instances. */
    AWSApplicationMigrationServiceEc2InstancePolicy = 'arn:aws:iam::aws:policy/AWSApplicationMigrationServiceEc2InstancePolicy',
    /** Full access to AWS Launch wizard and other required services. */
    AmazonLaunchWizardFullAccessV2 = 'arn:aws:iam::aws:policy/AmazonLaunchWizardFullAccessV2',
    /** Allows CloudWatch to access RDS Performance Insights metrics on your behalf */
    AWSServiceRoleForCloudWatchMetricsDbPerfInsightsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForCloudWatchMetrics_DbPerfInsightsServiceRolePolicy',
    /** Amazon DataZone creates IAM roles for Environments to perform data analytics actions, and uses this policy when creating these roles to define the boundary of their permissions. */
    AmazonDataZoneEnvironmentRolePermissionsBoundary = 'arn:aws:iam::aws:policy/AmazonDataZoneEnvironmentRolePermissionsBoundary',
    /** Provide read only access to Amazon Keyspaces and related AWS services. */
    AmazonKeyspacesReadOnlyAccessV2 = 'arn:aws:iam::aws:policy/AmazonKeyspacesReadOnlyAccess_v2',
    /** This policy allows you to use Amazon SSM and additional services required permissions to run post-launch actions in AWS Elastic Disaster Recovery (AWS DRS). Attach this policy to your IAM roles or users. */
    AWSElasticDisasterRecoveryLaunchActionsPolicy = 'arn:aws:iam::aws:policy/AWSElasticDisasterRecoveryLaunchActionsPolicy',
    /** Provides full access to Amazon DataZone via the AWS Management Console as well as limited access to related services that are required by it. */
    AmazonDataZoneFullAccess = 'arn:aws:iam::aws:policy/AmazonDataZoneFullAccess',
    /** This policy gives Amazon DataZone permissions to publish Amazon Redshift data to the catalog. It also gives Amazon DataZone permissions to grant access or revoke access to Amazon Redshift or Amazon Redshift Serverless published assets in the catalog. */
    AmazonDataZoneRedshiftManageAccessRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonDataZoneRedshiftManageAccessRolePolicy',
    /** Amazon DataZone is a data management service that enables you to catalog, discover, govern, share, and analyze your data. With Amazon DataZone, you can share and access your data across accounts and supported regions. Amazon DataZone simplifies your experience across AWS services, including, but not limited to, Amazon Redshift, Amazon Athena, AWS Glue, and AWS Lake Formation. */
    AmazonDataZoneRedshiftGlueProvisioningPolicy = 'arn:aws:iam::aws:policy/AmazonDataZoneRedshiftGlueProvisioningPolicy',
    /** The policy grants permissions to allow Amazon DataZone to enable publishing and access grants to data. */
    AmazonDataZoneGlueManageAccessRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonDataZoneGlueManageAccessRolePolicy',
    /** Provides full access to Amazon DataZone, but does not allow the management of domains, users, or associated accounts. */
    AmazonDataZoneFullUserAccess = 'arn:aws:iam::aws:policy/AmazonDataZoneFullUserAccess',
    /** Default policy for the Amazon DataZone's DomainExecutionRole service role. This role is used by Amazon DataZone to catalog, discover, govern, share, and analyze data in the Amazon DataZone domain. */
    AmazonDataZoneDomainExecutionRolePolicy = 'arn:aws:iam::aws:policy/service-role/AmazonDataZoneDomainExecutionRolePolicy',
    /** Allow Amazon S3 on Outposts service to manage EC2 network resources on your behalf. */
    AWSS3OnOutpostsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSS3OnOutpostsServiceRolePolicy',
    /** Allows Amazon SageMaker Canvas to create, manage and view endpoint details for endpoints created through Canvas. Allows Amazon SageMaker Canvas to retrieve endpoint invocation metrics from CloudWatch. */
    AmazonSageMakerCanvasDirectDeployAccess = 'arn:aws:iam::aws:policy/service-role/AmazonSageMakerCanvasDirectDeployAccess',
    /** Provides Amplify full access permissions to deploy Amplify backend resources (AWS AppSync, Amazon Cognito, Amazon S3 and other related services) via the AWS Cloud Development Kit (AWS CDK) */
    AmplifyBackendDeployFullAccess = 'arn:aws:iam::aws:policy/service-role/AmplifyBackendDeployFullAccess',
    /** Allows Amazon Connect to synchronize AWS resources across regions on your behalf. */
    AmazonConnectSynchronizationServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonConnectSynchronizationServiceRolePolicy',
    /** Provides full access to Amazon SageMaker resources and operations for data preparation in Canvas. The policy also provides select access to related services (e.g., S3, IAM, KMS, RDS, CloudWatch Logs, Redshift, Athena, Glue, EventBridge, Secrets Manager). This policy should be attached to the Amazon SageMaker Domain/User Profile execution role. */
    AmazonSageMakerCanvasDataPrepFullAccess = 'arn:aws:iam::aws:policy/AmazonSageMakerCanvasDataPrepFullAccess',
    /** Provides Amazon Data Lifecycle Manager permission to perform the Systems Manager actions required to run pre and post scripts on all Amazon EC2 instances. */
    AWSDataLifecycleManagerSSMFullAccess = 'arn:aws:iam::aws:policy/service-role/AWSDataLifecycleManagerSSMFullAccess',
    /** Provides the list of actions that are allowed for roles assumed with the IAM Identity Center identity context. AWS Security Token Service (AWS STS) automatically attaches this policy to assumed roles. The identity context is passed as ProvidedContext. */
    AWSIAMIdentityCenterAllowListForIdentityContext = 'arn:aws:iam::aws:policy/AWSIAMIdentityCenterAllowListForIdentityContext',
    /** Policy grants permission to CloudWatch Application Signals to collect monitoring and tagging data from other relevant AWS services. */
    CloudWatchApplicationSignalsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/CloudWatchApplicationSignalsServiceRolePolicy',
    /** Provides access to associate and dissociate partner central users with IAM roles */
    PartnerCentralAccountManagementUserRoleAssociation = 'arn:aws:iam::aws:policy/PartnerCentralAccountManagementUserRoleAssociation',
    /** This policy contains permissions for testing restores and for cleaning up resources created during tests. */
    AWSServiceRolePolicyForBackupRestoreTesting = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRolePolicyForBackupRestoreTesting',
    /** Grants Incident Manager permissions to call other AWS services as a part of managing an incident. */
    AWSIncidentManagerIncidentAccessServiceRolePolicy = 'arn:aws:iam::aws:policy/AWSIncidentManagerIncidentAccessServiceRolePolicy',
    /** Allows AWS IoT TwinMaker to call other AWS services and to sync their resources on your behalf. */
    AWSIoTTwinMakerServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSIoTTwinMakerServiceRolePolicy',
    /** This policy grants administrative permissions to Resource Explorer and grants read-only permissions to other AWS services to support this access. The AWS Organizations administrator needs these permissions to setup and manage multi-account search in the console. */
    AWSResourceExplorerOrganizationsAccess = 'arn:aws:iam::aws:policy/AWSResourceExplorerOrganizationsAccess',
    /** Provides re:Post Private access to publish CloudWatch metrics data */
    AWSrePostPrivateCloudWatchAccess = 'arn:aws:iam::aws:policy/aws-service-role/AWSrePostPrivateCloudWatchAccess',
    /** Allows AWS Marketplace to create and manage seller deployment parameters for the products that you subscribe to on AWS Marketplace. */
    AWSMarketplaceDeploymentServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSMarketplaceDeploymentServiceRolePolicy',
    /** Policy which allows AWS Code Connections to sync content from your git repository */
    AWSGitSyncServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSGitSyncServiceRolePolicy',
    /** The EC2ImageBuilderLifecycleExecutionPolicy policy grants permissions for Image Builder to perform actions such as deprecate or delete Image Builder image resources and their underlying resources (AMIs, snapshots) to support automated rules for image lifecycle management tasks. */
    EC2ImageBuilderLifecycleExecutionPolicy = 'arn:aws:iam::aws:policy/service-role/EC2ImageBuilderLifecycleExecutionPolicy',
    /** Grants Amazon Inspector access to AWS Services needed to perform agent-less security assessments */
    AmazonInspector2AgentlessServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonInspector2AgentlessServiceRolePolicy',
    /** Allows Cost Optimization Hub to retrieve organization information and collect optimization-related data and metadata. */
    CostOptimizationHubServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/CostOptimizationHubServiceRolePolicy',
    /** Provides access to AWS Resources managed or used by Amazon Managed Service for Prometheus Collector */
    AmazonPrometheusScraperServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonPrometheusScraperServiceRolePolicy',
    /** This policy allows the re:Post Space service to create, manage, and resolve Support cases that are created through the Space application. */
    AWSRepostSpaceSupportOperationsPolicy = 'arn:aws:iam::aws:policy/AWSRepostSpaceSupportOperationsPolicy',
    /** This policy provides full access to all public APIs of AWS Elastic Disaster Recovery (AWS DRS), as well as all public APIs in other AWS services used by AWS DRS Console. Attach this policy to your users or roles. */
    AWSElasticDisasterRecoveryConsoleFullAccessV2 = 'arn:aws:iam::aws:policy/AWSElasticDisasterRecoveryConsoleFullAccess_v2',
    /** This policy grants administrative permissions that allow access to all Amazon One Enterprise resources and operations. */
    AmazonOneEnterpriseFullAccess = 'arn:aws:iam::aws:policy/AmazonOneEnterpriseFullAccess',
    /** This policy grants read only permissions to all Amazon One Enterprise resources and operations. */
    AmazonOneEnterpriseReadOnlyAccess = 'arn:aws:iam::aws:policy/AmazonOneEnterpriseReadOnlyAccess',
    /** This policy grants limited read and write permissions that allow device installation and activation. */
    AmazonOneEnterpriseInstallerAccess = 'arn:aws:iam::aws:policy/AmazonOneEnterpriseInstallerAccess',
    /** Provides full access to enable interactions with Amazon Q */
    AmazonQFullAccess = 'arn:aws:iam::aws:policy/AmazonQFullAccess',
    /** Provides Cloudwatch access to publish operational and usage metrics and logs for Amazon Neptune */
    AWSServiceRoleForNeptuneGraphPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForNeptuneGraphPolicy',
    /** This policy grants permissions commonly needed to use Amazon SageMaker Cluster. */
    AmazonSageMakerClusterInstanceRolePolicy = 'arn:aws:iam::aws:policy/AmazonSageMakerClusterInstanceRolePolicy',
    /** Provides administrative access for ARC zonal shift practice runs, and access to CloudWatch alarm statuses to monitor practice runs. */
    AWSZonalAutoshiftPracticeRunSLRPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSZonalAutoshiftPracticeRunSLRPolicy',
    /** Allows read-only access to AWS Clean Rooms ML resources and read-only access to related AWS Clean Rooms resources */
    AWSCleanRoomsMLReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSCleanRoomsMLReadOnlyAccess',
    /** Allows full access to AWS Clean Rooms ML resources and access to related AWS Services. */
    AWSCleanRoomsMLFullAccess = 'arn:aws:iam::aws:policy/AWSCleanRoomsMLFullAccess',
    /** Provides read only access to all Amazon Neptune Analytics resources along with read only permissions for dependent services. */
    NeptuneGraphReadOnlyAccess = 'arn:aws:iam::aws:policy/NeptuneGraphReadOnlyAccess',
    /** Provides read-only access to IVS Low-Latency and Real-Time streaming APIs */
    IVSReadOnlyAccess = 'arn:aws:iam::aws:policy/IVSReadOnlyAccess',
    /** Grants permissions to Amazon MSK Replicator to replicate data between MSK Clusters. */
    AWSMSKReplicatorExecutionRole = 'arn:aws:iam::aws:policy/service-role/AWSMSKReplicatorExecutionRole',
    /** Provides full access to Amazon Bedrock as well as limited access to related services that are required by it */
    AmazonBedrockFullAccess = 'arn:aws:iam::aws:policy/AmazonBedrockFullAccess',
    /** Provides read only access to Amazon Bedrock */
    AmazonBedrockReadOnly = 'arn:aws:iam::aws:policy/AmazonBedrockReadOnly',
    /** This managed policy provides read-only access to Cost Optimization Hub. */
    CostOptimizationHubReadOnlyAccess = 'arn:aws:iam::aws:policy/CostOptimizationHubReadOnlyAccess',
    /** Provides full access to Interactive Video Service (IVS), Also included permissions for dependent services, needed for full access to the ivs console. */
    IVSFullAccess = 'arn:aws:iam::aws:policy/IVSFullAccess',
    /** This managed policy provides admin access to Cost Optimization Hub. */
    CostOptimizationHubAdminAccess = 'arn:aws:iam::aws:policy/CostOptimizationHubAdminAccess',
    /** Allows CloudWatch Network Monitor to access and manage EC2 and VPC resources, publish data to CloudWatch and access other required services on your behalf. */
    CloudWatchNetworkMonitorServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/CloudWatchNetworkMonitorServiceRolePolicy',
    /** Provides access to Amazon OpenSearch Dashboards Service to access other AWS services such as CloudWatch on your behalf */
    AmazonOpenSearchDashboardsServiceRolePolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonOpenSearchDashboardsServiceRolePolicy',
    /** Provides read-only access to the AWS Artifact service reports. */
    AWSArtifactReportsReadOnlyAccess = 'arn:aws:iam::aws:policy/AWSArtifactReportsReadOnlyAccess',
    /** Provides ability to update IAM Identity Center (IdC) user and group permissions for Amazon Managed Grafana workspaces. */
    AWSGrafanaWorkspacePermissionManagementV2 = 'arn:aws:iam::aws:policy/AWSGrafanaWorkspacePermissionManagementV2',
    /** Provides access to other AWS service resources required to manage volumes associated with ECS workloads on your behalf. */
    AmazonECSInfrastructureRolePolicyForVolumes = 'arn:aws:iam::aws:policy/service-role/AmazonECSInfrastructureRolePolicyForVolumes',
    /** Provides administrative access to Private Certificate Authority, AWS Secrets Manager and other AWS Services required to manage ECS Service Connect TLS features on your behalf. */
    AmazonECSInfrastructureRolePolicyForServiceConnectTransportLayerSecurity = 'arn:aws:iam::aws:policy/service-role/AmazonECSInfrastructureRolePolicyForServiceConnectTransportLayerSecurity',
    /** Policy for Amazon SecurityLake meta store manager lambda which allows the access to cloudwatch, S3, Glue and SQS. */
    AmazonSecurityLakeMetastoreManager = 'arn:aws:iam::aws:policy/service-role/AmazonSecurityLakeMetastoreManager',
    /** This is a managed policy that customer should attach to their roles to communicate with inspector service for CIS scans */
    AmazonInspector2ManagedCisPolicy = 'arn:aws:iam::aws:policy/AmazonInspector2ManagedCisPolicy',
    /** Allows Amazon Lex to replicate Lex resources across regions on your behalf. */
    AmazonLexReplicationPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AmazonLexReplicationPolicy',
    /** This policy grants permissions to use Amazon Bedrock in SageMaker Canvas by providing access to downstream services such as S3. */
    AmazonSageMakerCanvasBedrockAccess = 'arn:aws:iam::aws:policy/AmazonSageMakerCanvasBedrockAccess',
    /** Provides permissions to describe and update Private Marketplace resources and describe AWS Organizations */
    AWSServiceRoleForPrivateMarketplaceAdminPolicy = 'arn:aws:iam::aws:policy/aws-service-role/AWSServiceRoleForPrivateMarketplaceAdminPolicy'
}
