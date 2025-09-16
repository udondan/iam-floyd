/** Provides names of all AWS managed policies. */
export class AwsManagedPolicy {
    /** Allow Access Analyzer to analyze resource metadata */
    public static AccessAnalyzerServiceRolePolicy = 'aws-service-role/AccessAnalyzerServiceRolePolicy';
    /** Provides full access to AWS services and resources. */
    public static AdministratorAccess = 'AdministratorAccess';
    /** Grants account administrative permissions while explicitly allowing direct access to resources needed by Amplify applications. */
    public static AdministratorAccessAmplify = 'AdministratorAccess-Amplify';
    /** Grants account administrative permissions. Explicitly allows developers and administrators to gain direct access to resources they need to manage AWS Elastic Beanstalk applications */
    public static AdministratorAccessAWSElasticBeanstalk = 'AdministratorAccess-AWSElasticBeanstalk';
    /** Provides ReadOnly permissions required by the Amazon AI Operations Assistant to do analysis on customer AWS resources during investigations. */
    public static AIOpsAssistantPolicy = 'AIOpsAssistantPolicy';
    /** Grants full access to Amazon AI Operations service and its required permissions via AWS console. It also includes permissions to use identity-aware console sessions. */
    public static AIOpsConsoleAdminPolicy = 'AIOpsConsoleAdminPolicy';
    /** Grants access to the Amazon AI Operations APIs for creating, updating, and deleting investigations, investigation events, and investigation resources. It also includes ReadOnly access to all AI Operations APIs and to use identity-aware sessions. */
    public static AIOpsOperatorAccess = 'AIOpsOperatorAccess';
    /** Grants ReadOnly permissions to the Amazon AI Operations service and its required resources. */
    public static AIOpsReadOnlyAccess = 'AIOpsReadOnlyAccess';
    /** Provide device setup access to AlexaForBusiness services */
    public static AlexaForBusinessDeviceSetup = 'AlexaForBusinessDeviceSetup';
    /** Grants full access to AlexaForBusiness resources and access to related AWS Services */
    public static AlexaForBusinessFullAccess = 'AlexaForBusinessFullAccess';
    /** Provide gateway execution access to AlexaForBusiness services */
    public static AlexaForBusinessGatewayExecution = 'AlexaForBusinessGatewayExecution';
    /** Provide access to Lifesize AVS devices */
    public static AlexaForBusinessLifesizeDelegatedAccessPolicy = 'AlexaForBusinessLifesizeDelegatedAccessPolicy';
    /** This policy enables Alexa for Business to perform automated tasks scheduled by your network profiles. */
    public static AlexaForBusinessNetworkProfileServicePolicy = 'aws-service-role/AlexaForBusinessNetworkProfileServicePolicy';
    /** Provide access to Poly AVS devices */
    public static AlexaForBusinessPolyDelegatedAccessPolicy = 'AlexaForBusinessPolyDelegatedAccessPolicy';
    /** Provide read only access to AlexaForBusiness services */
    public static AlexaForBusinessReadOnlyAccess = 'AlexaForBusinessReadOnlyAccess';
    /** Provides full access to create/edit/delete APIs in Amazon API Gateway via the AWS Management Console. */
    public static AmazonAPIGatewayAdministrator = 'AmazonAPIGatewayAdministrator';
    /** Provides full access to invoke APIs in Amazon API Gateway. */
    public static AmazonAPIGatewayInvokeFullAccess = 'AmazonAPIGatewayInvokeFullAccess';
    /** Allows API Gateway to push logs to user's account. */
    public static AmazonAPIGatewayPushToCloudWatchLogs = 'service-role/AmazonAPIGatewayPushToCloudWatchLogs';
    /** Provides full access to Amazon AppFlow and access to AWS services supported as flow source or destination (S3 and Redshift). Also provides access to KMS for encryption */
    public static AmazonAppFlowFullAccess = 'AmazonAppFlowFullAccess';
    /** Provides read only access to Amazon Appflow flows */
    public static AmazonAppFlowReadOnlyAccess = 'AmazonAppFlowReadOnlyAccess';
    /** Provides full access to Amazon AppStream via the AWS Management Console. */
    public static AmazonAppStreamFullAccess = 'AmazonAppStreamFullAccess';
    /** Amazon AppStream 2.0 access to AWS Certificate Manager Private CA in customer accounts for certificate-based authentication */
    public static AmazonAppStreamPCAAccess = 'service-role/AmazonAppStreamPCAAccess';
    /** Provides read only access to Amazon AppStream via the AWS Management Console. */
    public static AmazonAppStreamReadOnlyAccess = 'AmazonAppStreamReadOnlyAccess';
    /** Default policy for Amazon AppStream service role. */
    public static AmazonAppStreamServiceAccess = 'service-role/AmazonAppStreamServiceAccess';
    /** Provide full access to Amazon Athena and scoped access to the dependencies needed to enable querying, writing results, and data management. */
    public static AmazonAthenaFullAccess = 'AmazonAthenaFullAccess';
    /** Provides access to perform all operations Amazon Augmented AI resources, including FlowDefinitions, HumanTaskUis and HumanLoops. Does not allow access for creating FlowDefinitions against the public-crowd Workteam. */
    public static AmazonAugmentedAIFullAccess = 'AmazonAugmentedAIFullAccess';
    /** Provides access to perform all operations on HumanLoops. */
    public static AmazonAugmentedAIHumanLoopFullAccess = 'AmazonAugmentedAIHumanLoopFullAccess';
    /** Provides access to perform all operations Amazon Augmented AI resources, including FlowDefinitions, HumanTaskUis and HumanLoops. Also provides access to those operations of services that are integrated with Amazon Augmented AI. */
    public static AmazonAugmentedAIIntegratedAPIAccess = 'AmazonAugmentedAIIntegratedAPIAccess';
    /** Provides console full administrative access to Aurora DSQL */
    public static AmazonAuroraDSQLConsoleFullAccess = 'AmazonAuroraDSQLConsoleFullAccess';
    /** Provides full administrative access to Aurora DSQL */
    public static AmazonAuroraDSQLFullAccess = 'AmazonAuroraDSQLFullAccess';
    /** Provides read only access to Aurora DSQL */
    public static AmazonAuroraDSQLReadOnlyAccess = 'AmazonAuroraDSQLReadOnlyAccess';
    /** Provides Bedrock Model inference permission to Bedrock agent core memory */
    public static AmazonBedrockAgentCoreMemoryBedrockModelInferenceExecutionRolePolicy = 'AmazonBedrockAgentCoreMemoryBedrockModelInferenceExecutionRolePolicy';
    /** Provides full access to Amazon Bedrock as well as limited access to related services that are required by it */
    public static AmazonBedrockFullAccess = 'AmazonBedrockFullAccess';
    /** Provides limited access to Amazon Bedrock as well as to related services that are required by it */
    public static AmazonBedrockLimitedAccess = 'AmazonBedrockLimitedAccess';
    /** Provides limited access to Amazon Bedrock Marketplace as well as to related services that are required by it */
    public static AmazonBedrockMarketplaceAccess = 'AmazonBedrockMarketplaceAccess';
    /** Provides read only access to Amazon Bedrock */
    public static AmazonBedrockReadOnly = 'AmazonBedrockReadOnly';
    /** Defines the maximum permissions of IAM roles that Amazon Bedrock Studio creates for operating Amazon Bedrock Studio resources. */
    public static AmazonBedrockStudioPermissionsBoundary = 'AmazonBedrockStudioPermissionsBoundary';
    /** Provides full access to Amazon Braket via the AWS Management Console and SDK. Also provides access to related services (e.g., S3, logs). */
    public static AmazonBraketFullAccess = 'AmazonBraketFullAccess';
    /** Grants access to AWS Services and resources necessary for executing an Amazon Braket Job including S3, Cloudwatch, IAM and Braket */
    public static AmazonBraketJobsExecutionPolicy = 'AmazonBraketJobsExecutionPolicy';
    /** Allows Amazon Braket to create and manage AWS resources on your behalf */
    public static AmazonBraketServiceRolePolicy = 'aws-service-role/AmazonBraketServiceRolePolicy';
    /** Provides full access to Amazon Chime Admin Console via the AWS Management Console. */
    public static AmazonChimeFullAccess = 'AmazonChimeFullAccess';
    /** Provides read only access to Amazon Chime Admin Console via the AWS Management Console. */
    public static AmazonChimeReadOnly = 'AmazonChimeReadOnly';
    /** Provides access to Amazon Chime SDK operations */
    public static AmazonChimeSDK = 'AmazonChimeSDK';
    /** Managed Policy For Amazon Chime SDK MediaPipelines Service Linked Role */
    public static AmazonChimeSDKMediaPipelinesServiceLinkedRolePolicy = 'aws-service-role/AmazonChimeSDKMediaPipelinesServiceLinkedRolePolicy';
    /** Allows Amazon Chime SDK Messaging to access AWS resources and enable messaging functionality */
    public static AmazonChimeSDKMessagingServiceRolePolicy = 'aws-service-role/AmazonChimeSDKMessagingServiceRolePolicy';
    /** Enables access to AWS Resources used or managed by Amazon Chime */
    public static AmazonChimeServiceRolePolicy = 'aws-service-role/AmazonChimeServiceRolePolicy';
    /** Allows Amazon Chime to access Amazon Transcribe and Amazon Transcribe Medical on your behalf */
    public static AmazonChimeTranscriptionServiceLinkedRolePolicy = 'aws-service-role/AmazonChimeTranscriptionServiceLinkedRolePolicy';
    /** Provides user management access to Amazon Chime Admin Console via the AWS Management Console. */
    public static AmazonChimeUserManagement = 'AmazonChimeUserManagement';
    /** Managed policy for Service Linked Role for Amazon Chime VoiceConnector */
    public static AmazonChimeVoiceConnectorServiceLinkedRolePolicy = 'aws-service-role/AmazonChimeVoiceConnectorServiceLinkedRolePolicy';
    /** Provides full access to Amazon Cloud Directory Service. */
    public static AmazonCloudDirectoryFullAccess = 'AmazonCloudDirectoryFullAccess';
    /** Provides read only access to Amazon Cloud Directory Service. */
    public static AmazonCloudDirectoryReadOnlyAccess = 'AmazonCloudDirectoryReadOnlyAccess';
    /** Provides full only access to Amazon CloudWatch Evidently. Also provides access to related Amazon S3, Amazon SNS, Amazon CloudWatch, and other related services. */
    public static AmazonCloudWatchEvidentlyFullAccess = 'AmazonCloudWatchEvidentlyFullAccess';
    /** Provides read only access to Amazon CloudWatch Evidently */
    public static AmazonCloudWatchEvidentlyReadOnlyAccess = 'AmazonCloudWatchEvidentlyReadOnlyAccess';
    /** Allows CloudWatch Evidently Service to manage associated AWS Resources on behalf of the customer */
    public static AmazonCloudWatchEvidentlyServiceRolePolicy = 'aws-service-role/AmazonCloudWatchEvidentlyServiceRolePolicy';
    /** Grants full access permissions for the Amazon CloudWatch RUM service */
    public static AmazonCloudWatchRUMFullAccess = 'AmazonCloudWatchRUMFullAccess';
    /** Grants read only permissions for the Amazon CloudWatch RUM service */
    public static AmazonCloudWatchRUMReadOnlyAccess = 'AmazonCloudWatchRUMReadOnlyAccess';
    /** Grants permission to Amazon CloudWatch RUM Service to publish monitoring data to other relevant AWS services */
    public static AmazonCloudWatchRUMServiceRolePolicy = 'aws-service-role/AmazonCloudWatchRUMServiceRolePolicy';
    /** Provides full access to Amazon CodeCatalyst */
    public static AmazonCodeCatalystFullAccess = 'AmazonCodeCatalystFullAccess';
    /** Provides read only access to Amazon CodeCatalyst */
    public static AmazonCodeCatalystReadOnlyAccess = 'AmazonCodeCatalystReadOnlyAccess';
    /** Allows Amazon CodeCatalyst to create, update, and resolve AWS Support cases on your behalf. */
    public static AmazonCodeCatalystSupportAccess = 'service-role/AmazonCodeCatalystSupportAccess';
    /** Provides access required by Amazon CodeGuru Profiler agent. */
    public static AmazonCodeGuruProfilerAgentAccess = 'AmazonCodeGuruProfilerAgentAccess';
    /** Provides full access to Amazon CodeGuru Profiler. */
    public static AmazonCodeGuruProfilerFullAccess = 'AmazonCodeGuruProfilerFullAccess';
    /** Provides read only access to Amazon CodeGuru Profiler. */
    public static AmazonCodeGuruProfilerReadOnlyAccess = 'AmazonCodeGuruProfilerReadOnlyAccess';
    /** Grants full access to Amazon CodeGuru Reviewer and scoped access to required dependencies. */
    public static AmazonCodeGuruReviewerFullAccess = 'AmazonCodeGuruReviewerFullAccess';
    /** Provides read only access to Amazon CodeGuru Reviewer. */
    public static AmazonCodeGuruReviewerReadOnlyAccess = 'AmazonCodeGuruReviewerReadOnlyAccess';
    /** A service-linked role required for Amazon CodeGuru Reviewer to access resources on your behalf. */
    public static AmazonCodeGuruReviewerServiceRolePolicy = 'aws-service-role/AmazonCodeGuruReviewerServiceRolePolicy';
    /** Provides full access to Amazon CodeGuru Security. */
    public static AmazonCodeGuruSecurityFullAccess = 'AmazonCodeGuruSecurityFullAccess';
    /** Provides access required for working with Amazon CodeGuru Security scans. */
    public static AmazonCodeGuruSecurityScanAccess = 'AmazonCodeGuruSecurityScanAccess';
    /** Provides access to Amazon Cognito APIs to support developer authenticated identities from your authentication backend. */
    public static AmazonCognitoDeveloperAuthenticatedIdentities = 'AmazonCognitoDeveloperAuthenticatedIdentities';
    /** Allows Amazon Cognito User Pools service to use your SES identities for email sending */
    public static AmazonCognitoIdpEmailServiceRolePolicy = 'aws-service-role/AmazonCognitoIdpEmailServiceRolePolicy';
    /** Enables access to AWS Services and Resources used or managed by Amazon Cognito User Pools */
    public static AmazonCognitoIdpServiceRolePolicy = 'aws-service-role/AmazonCognitoIdpServiceRolePolicy';
    /** Provides administrative access to existing Amazon Cognito resources. You will need AWS account admin privileges to create new Cognito resources. */
    public static AmazonCognitoPowerUser = 'AmazonCognitoPowerUser';
    /** Provides read only access to Amazon Cognito resources. */
    public static AmazonCognitoReadOnly = 'AmazonCognitoReadOnly';
    /** This policy defines the set of permissions allowed for unauthenticated identities for Cognito Identity Pools. This policy is not intended to be used as a stand alone permission policy. It is used as a guardrail against overly permissive policies attached for roles in an identity pool. Do not attach this policy to any roles, as Cognito Identity Service will automatically include it as a scoped down policy when creating credentials. The privileges to temporarily access other AWS resources through the enhanced flow will now be defined by the intersection of the role associated with the identity of the unauthenticated user provided by a service, and the privileges given in this managed policy that is owned by Cognito. */
    public static AmazonCognitoUnAuthedIdentitiesSessionPolicy = 'AmazonCognitoUnAuthedIdentitiesSessionPolicy';
    /** This policy defines the set of permissions allowed for unauthenticated identities for Cognito Identity Pools. This does not need to be attached to your unauth role, as Cognito Identity Service will automatically include it as a scoped down policy when creating credentials. The privileges to temporarily access other AWS resources through the enhanced flow will now be defined by the intersection of the role associated with the identity of the unauthenticated user provided by a service, and the privileges given in this managed policy that is owned by Cognito. */
    public static AmazonCognitoUnauthenticatedIdentities = 'AmazonCognitoUnauthenticatedIdentities';
    /** The purpose of this policy is to grant permissions to AWS Connect users required to use Connect resources. This policy provides full access to AWS Connect resources via the Connect Console and public APIs */
    public static AmazonConnectFullAccess = 'AmazonConnect_FullAccess';
    /** Policy for Amazon Connect Campaigns service linked role */
    public static AmazonConnectCampaignsServiceLinkedRolePolicy = 'aws-service-role/AmazonConnectCampaignsServiceLinkedRolePolicy';
    /** Grants permission to view the Amazon Connect instances in your AWS account. */
    public static AmazonConnectReadOnlyAccess = 'AmazonConnectReadOnlyAccess';
    /** Allows Amazon Connect to create and manage AWS resources on your behalf. */
    public static AmazonConnectServiceLinkedRolePolicy = 'aws-service-role/AmazonConnectServiceLinkedRolePolicy';
    /** Allows Amazon Connect to synchronize AWS resources across regions on your behalf. */
    public static AmazonConnectSynchronizationServiceRolePolicy = 'aws-service-role/AmazonConnectSynchronizationServiceRolePolicy';
    /** Provides full access to Amazon Connect Voice ID */
    public static AmazonConnectVoiceIDFullAccess = 'AmazonConnectVoiceIDFullAccess';
    /** Provides permissions to consume Amazon Bedrock models, including invoking Amazon Bedrock application inference profile created for particular Amazon DataZone domain. */
    public static AmazonDataZoneBedrockModelConsumptionPolicy = 'service-role/AmazonDataZoneBedrockModelConsumptionPolicy';
    /** Provides permissions to manage Amazon Bedrock model access, including creating, tagging and deleting application inference profiles. */
    public static AmazonDataZoneBedrockModelManagementPolicy = 'service-role/AmazonDataZoneBedrockModelManagementPolicy';
    /** Default policy for the Amazon DataZone's DomainExecutionRole service role. This role is used by Amazon DataZone to catalog, discover, govern, share, and analyze data in the Amazon DataZone domain. */
    public static AmazonDataZoneDomainExecutionRolePolicy = 'service-role/AmazonDataZoneDomainExecutionRolePolicy';
    /** Amazon DataZone creates IAM roles for Environments to perform data analytics actions, and uses this policy when creating these roles to define the boundary of their permissions. */
    public static AmazonDataZoneEnvironmentRolePermissionsBoundary = 'AmazonDataZoneEnvironmentRolePermissionsBoundary';
    /** Provides full access to Amazon DataZone via the AWS Management Console as well as limited access to related services that are required by it. */
    public static AmazonDataZoneFullAccess = 'AmazonDataZoneFullAccess';
    /** Provides full access to Amazon DataZone, but does not allow the management of domains, users, or associated accounts. */
    public static AmazonDataZoneFullUserAccess = 'AmazonDataZoneFullUserAccess';
    /** The policy grants permissions to allow Amazon DataZone to enable publishing and access grants to data. */
    public static AmazonDataZoneGlueManageAccessRolePolicy = 'service-role/AmazonDataZoneGlueManageAccessRolePolicy';
    /** Amazon DataZone is a data management service that enables you to catalog, discover, govern, share, and analyze your data. With Amazon DataZone, you can share and access your data across accounts and supported regions. Amazon DataZone simplifies your experience across AWS services, including, but not limited to, Amazon Redshift, Amazon Athena, AWS Glue, and AWS Lake Formation. */
    public static AmazonDataZoneRedshiftGlueProvisioningPolicy = 'AmazonDataZoneRedshiftGlueProvisioningPolicy';
    /** This policy gives Amazon DataZone permissions to publish Amazon Redshift data to the catalog. It also gives Amazon DataZone permissions to grant access or revoke access to Amazon Redshift or Amazon Redshift Serverless published assets in the catalog. */
    public static AmazonDataZoneRedshiftManageAccessRolePolicy = 'service-role/AmazonDataZoneRedshiftManageAccessRolePolicy';
    /** The AmazonDataZoneSageMakerEnvironmentRolePermissionsBoundary policy is the list of permissions that are permitted on an execution role created in a SageMaker environment provisioned by Amazon DataZone. */
    public static AmazonDataZoneSageMakerEnvironmentRolePermissionsBoundary = 'AmazonDataZoneSageMakerEnvironmentRolePermissionsBoundary';
    /** The AmazonDataZoneSageMakerManageAccessRolePolicy policy grants Amazon DataZone the permissions required to grant user access to various resources in the SageMaker environment. */
    public static AmazonDataZoneSageMakerManageAccessRolePolicy = 'AmazonDataZoneSageMakerManageAccessRolePolicy';
    /** The AmazonDataZoneSageMakerProvisioningRolePolicy policy grants Amazon DataZone the permissions required to interoperate with Amazon SageMaker. */
    public static AmazonDataZoneSageMakerProvisioningRolePolicy = 'AmazonDataZoneSageMakerProvisioningRolePolicy';
    /**  Provides full access to Amazon Detective service and scoped access to the console UI dependencies */
    public static AmazonDetectiveFullAccess = 'AmazonDetectiveFullAccess';
    /** Provides investigator access to Amazon Detective service and scoped access to the console UI dependencies. This policy grants permission to dive into Detective for investigation purposes and limited write access to Guardduty. */
    public static AmazonDetectiveInvestigatorAccess = 'AmazonDetectiveInvestigatorAccess';
    /** Provides member access to Amazon Detective service and scoped access to the console UI dependencies. */
    public static AmazonDetectiveMemberAccess = 'AmazonDetectiveMemberAccess';
    /** Provides Organizations access to manage Delegated administrator for Amazon Detective and scoped access to the console UI dependencies. This also grants permission to create a service-linked role for Detective. */
    public static AmazonDetectiveOrganizationsAccess = 'AmazonDetectiveOrganizationsAccess';
    /** Allows Amazon Detective to make service calls on your behalf */
    public static AmazonDetectiveServiceLinkedRolePolicy = 'aws-service-role/AmazonDetectiveServiceLinkedRolePolicy';
    /** The policy grants full-access to the DevOps Guru console. */
    public static AmazonDevOpsGuruConsoleFullAccess = 'AmazonDevOpsGuruConsoleFullAccess';
    /** Provides full access to Amazon DevOps Guru. */
    public static AmazonDevOpsGuruFullAccess = 'AmazonDevOpsGuruFullAccess';
    /** Provide access to enable and manage Amazon DevOps Guru within an organization. */
    public static AmazonDevOpsGuruOrganizationsAccess = 'AmazonDevOpsGuruOrganizationsAccess';
    /** Provides read only access to Amazon DevOps Guru Console. */
    public static AmazonDevOpsGuruReadOnlyAccess = 'AmazonDevOpsGuruReadOnlyAccess';
    /** A service-linked role required for Amazon DevOpsGuru to access your resources. */
    public static AmazonDevOpsGuruServiceRolePolicy = 'aws-service-role/AmazonDevOpsGuruServiceRolePolicy';
    /** Provides access to upload DMS replication logs to cloudwatch logs in customer account. */
    public static AmazonDMSCloudWatchLogsRole = 'service-role/AmazonDMSCloudWatchLogsRole';
    /** Provides access to manage S3 settings for Redshift endpoints for DMS. */
    public static AmazonDMSRedshiftS3Role = 'service-role/AmazonDMSRedshiftS3Role';
    /** Provides access to manage VPC settings for AWS managed customer configurations */
    public static AmazonDMSVPCManagementRole = 'service-role/AmazonDMSVPCManagementRole';
    /** Allows Amazon DocumentDB-Elastic to manage AWS resources on your behalf. */
    public static AmazonDocDBElasticServiceRolePolicy = 'aws-service-role/AmazonDocDB-ElasticServiceRolePolicy';
    /** Provides full access to manage Amazon DocumentDB with MongoDB compatibility using the AWS Management Console. Note this policy also grants full access to publish on all SNS topics within the account, permissions to create and edit Amazon EC2 instances and VPC configurations, permissions to view and list keys on Amazon KMS, and full access to Amazon RDS and Amazon Neptune. */
    public static AmazonDocDBConsoleFullAccess = 'AmazonDocDBConsoleFullAccess';
    /** Provides full access to Amazon DocumentDB Elastic Clusters and other required permissions for its dependencies including EC2, KMS, SecretsManager, CloudWatch and IAM. */
    public static AmazonDocDBElasticFullAccess = 'AmazonDocDBElasticFullAccess';
    /** Provides read-only access to Amazon DocDB-Elastic and CloudWatch metrics. */
    public static AmazonDocDBElasticReadOnlyAccess = 'AmazonDocDBElasticReadOnlyAccess';
    /** Provides full access to Amazon DocumentDB with MongoDB compatibility. Note this policy also grants full access to publish on all SNS topics within the account and full access to Amazon RDS and Amazon Neptune. */
    public static AmazonDocDBFullAccess = 'AmazonDocDBFullAccess';
    /** Provides read-only access to Amazon DocumentDB with MongoDB compatibility. Note that this policy also grants access to Amazon RDS and Amazon Neptune resources. */
    public static AmazonDocDBReadOnlyAccess = 'AmazonDocDBReadOnlyAccess';
    /** Provides access to manage VPC settings for Amazon managed customer configurations */
    public static AmazonDRSVPCManagement = 'AmazonDRSVPCManagement';
    /** Provides full access to Amazon DynamoDB via the AWS Management Console. */
    public static AmazonDynamoDBFullAccess = 'AmazonDynamoDBFullAccess';
    /** Provides full access to Amazon DynamoDB */
    public static AmazonDynamoDBFullAccessV2 = 'AmazonDynamoDBFullAccess_v2';
    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBPipeline.html. Provides full access to Amazon DynamoDB including Export/Import using AWS Data Pipeline via the AWS Management Console. */
    public static AmazonDynamoDBFullAccesswithDataPipeline = 'AmazonDynamoDBFullAccesswithDataPipeline';
    /** Provides read only access to Amazon DynamoDB via the AWS Management Console. */
    public static AmazonDynamoDBReadOnlyAccess = 'AmazonDynamoDBReadOnlyAccess';
    /** IAM Policy that allows the CSI driver service account to make calls to related services such as EC2 on your behalf. */
    public static AmazonEBSCSIDriverPolicy = 'service-role/AmazonEBSCSIDriverPolicy';
    /** Provides administrative access to Amazon ECR resources */
    public static AmazonEC2ContainerRegistryFullAccess = 'AmazonEC2ContainerRegistryFullAccess';
    /** Provides full access to Amazon EC2 Container Registry repositories, but does not allow repository deletion or policy changes. */
    public static AmazonEC2ContainerRegistryPowerUser = 'AmazonEC2ContainerRegistryPowerUser';
    /** Provides access to pull images from Amazon EC2 Container Registry repositories. */
    public static AmazonEC2ContainerRegistryPullOnly = 'AmazonEC2ContainerRegistryPullOnly';
    /** Provides read-only access to Amazon EC2 Container Registry repositories. */
    public static AmazonEC2ContainerRegistryReadOnly = 'AmazonEC2ContainerRegistryReadOnly';
    /**   Policy to enable Task Autoscaling for Amazon EC2 Container Service */
    public static AmazonEC2ContainerServiceAutoscaleRole = 'service-role/AmazonEC2ContainerServiceAutoscaleRole';
    /** Policy to enable CloudWatch Events for EC2 Container Service */
    public static AmazonEC2ContainerServiceEventsRole = 'service-role/AmazonEC2ContainerServiceEventsRole';
    /** Default policy for the Amazon EC2 Role for Amazon EC2 Container Service. */
    public static AmazonEC2ContainerServiceforEC2Role = 'service-role/AmazonEC2ContainerServiceforEC2Role';
    /** Default policy for Amazon ECS service role. */
    public static AmazonEC2ContainerServiceRole = 'service-role/AmazonEC2ContainerServiceRole';
    /** Provides full access to Amazon EC2 via the AWS Management Console. */
    public static AmazonEC2FullAccess = 'AmazonEC2FullAccess';
    /** Provides read-only access to scan all supported resource types for relevant data when using DescribeImageReferences. */
    public static AmazonEC2ImageReferencesAccessPolicy = 'AmazonEC2ImageReferencesAccessPolicy';
    /** Provides read only access to Amazon EC2 via the AWS Management Console. */
    public static AmazonEC2ReadOnlyAccess = 'AmazonEC2ReadOnlyAccess';
    /** Provides EC2 access to S3 bucket to download revision. This role is needed by the CodeDeploy agent on EC2 instances. */
    public static AmazonEC2RoleforAWSCodeDeploy = 'service-role/AmazonEC2RoleforAWSCodeDeploy';
    /** Provides EC2 limited access to S3 bucket to download revision. This role is needed by the CodeDeploy agent on EC2 instances. */
    public static AmazonEC2RoleforAWSCodeDeployLimited = 'service-role/AmazonEC2RoleforAWSCodeDeployLimited';
    /** Default policy for the Amazon EC2 Role for Data Pipeline service role. */
    public static AmazonEC2RoleforDataPipelineRole = 'service-role/AmazonEC2RoleforDataPipelineRole';
    /** This policy will soon be deprecated. Please use AmazonSSMManagedInstanceCore policy to enable AWS Systems Manager service core functionality on EC2 instances. For more information see https://docs.aws.amazon.com/systems-manager/latest/userguide/setup-instance-profile.html */
    public static AmazonEC2RoleforSSM = 'service-role/AmazonEC2RoleforSSM';
    /** Managed policy for the Amazon LaunchWizard service role for EC2 */
    public static AmazonEC2RolePolicyForLaunchWizard = 'AmazonEC2RolePolicyForLaunchWizard';
    /** Policy to enable Autoscaling for Amazon EC2 Spot Fleet */
    public static AmazonEC2SpotFleetAutoscaleRole = 'service-role/AmazonEC2SpotFleetAutoscaleRole';
    /** Allows EC2 Spot Fleet to request, terminate and tag Spot Instances on your behalf. */
    public static AmazonEC2SpotFleetTaggingRole = 'service-role/AmazonEC2SpotFleetTaggingRole';
    /** Provides administrative access to Amazon ECS resources and enables ECS features through access to other AWS service resources, including VPCs, Auto Scaling groups, and CloudFormation stacks. */
    public static AmazonECSFullAccess = 'AmazonECS_FullAccess';
    /** Policy to enable Amazon ECS Compute to manage your EC2 instances and related resources as part of ECS managed instances */
    public static AmazonECSComputeServiceRolePolicy = 'aws-service-role/AmazonECSComputeServiceRolePolicy';
    /** Provides access to other AWS service resources required to manage load balancers associated with ECS workloads on your behalf. */
    public static AmazonECSInfrastructureRolePolicyForLoadBalancers = 'AmazonECSInfrastructureRolePolicyForLoadBalancers';
    /** Provides administrative access to Private Certificate Authority, AWS Secrets Manager and other AWS Services required to manage ECS Service Connect TLS features on your behalf. */
    public static AmazonECSInfrastructureRolePolicyForServiceConnectTransportLayerSecurity = 'service-role/AmazonECSInfrastructureRolePolicyForServiceConnectTransportLayerSecurity';
    /** Provides access to other AWS service resources required to manage volumes associated with ECS workloads on your behalf. */
    public static AmazonECSInfrastructureRolePolicyForVolumes = 'service-role/AmazonECSInfrastructureRolePolicyForVolumes';
    /** Provides access to other AWS service resources required to manage VPC Lattice feature in ECS workloads on your behalf. */
    public static AmazonECSInfrastructureRolePolicyForVpcLattice = 'AmazonECSInfrastructureRolePolicyForVpcLattice';
    /** Policy to enable Amazon ECS to manage your cluster. */
    public static AmazonECSServiceRolePolicy = 'aws-service-role/AmazonECSServiceRolePolicy';
    /** Provides access to other AWS service resources that are required to run Amazon ECS tasks */
    public static AmazonECSTaskExecutionRolePolicy = 'service-role/AmazonECSTaskExecutionRolePolicy';
    /** Provides management access to EFS resources and read access to EC2 */
    public static AmazonEFSCSIDriverPolicy = 'service-role/AmazonEFSCSIDriverPolicy';
    /** This policy provides the Amazon VPC CNI Plugin (amazon-vpc-cni-k8s) the permissions it requires to modify the IP address configuration on your EKS worker nodes. This permission set allows the CNI to list, describe, and modify Elastic Network Interfaces on your behalf. More information on the AWS VPC CNI Plugin is available here: https://github.com/aws/amazon-vpc-cni-k8s */
    public static AmazonEKSCNIPolicy = 'AmazonEKS_CNI_Policy';
    /** Policy attached to the EKS Cluster Role that grants permissions to manage the cluster's block storage resources. */
    public static AmazonEKSBlockStoragePolicy = 'AmazonEKSBlockStoragePolicy';
    /** This policy provides Kubernetes the permissions it requires to manage resources on your behalf. Kubernetes requires Ec2:CreateTags permissions to place identifying information on EC2 resources including but not limited to Instances, Security Groups, and Elastic Network Interfaces. */
    public static AmazonEKSClusterPolicy = 'AmazonEKSClusterPolicy';
    /** Policy attached to the EKS Cluster Role that grants permissions to manage the cluster's compute resources. */
    public static AmazonEKSComputePolicy = 'AmazonEKSComputePolicy';
    /** This policy allows Amazon EKS to manage AWS resources for EKS connector */
    public static AmazonEKSConnectorServiceRolePolicy = 'aws-service-role/AmazonEKSConnectorServiceRolePolicy';
    /** Provides read only access to view the dashboard in the Amazon EKS console. The dashboard aggregates information about multiple clusters and related resources using AWS Organizations. */
    public static AmazonEKSDashboardConsoleReadOnly = 'AmazonEKSDashboardConsoleReadOnly';
    /** This policy enables the Amazon EKS Dashboard to access and display organization-wide information. The policy allows the EKS Dashboard service to gather information about your AWS Organizations structure and accounts. */
    public static AmazonEKSDashboardServiceRolePolicy = 'aws-service-role/AmazonEKSDashboardServiceRolePolicy';
    /** Provides access to other AWS service resources that are required to run Amazon EKS pods on AWS Fargate */
    public static AmazonEKSFargatePodExecutionRolePolicy = 'AmazonEKSFargatePodExecutionRolePolicy';
    /** This policy grants necessary permissions to Amazon EKS to run fargate tasks */
    public static AmazonEKSForFargateServiceRolePolicy = 'aws-service-role/AmazonEKSForFargateServiceRolePolicy';
    /** Policy attached to the EKS Cluster Role that grants permissions to manage the cluster's load balancing resources. */
    public static AmazonEKSLoadBalancingPolicy = 'AmazonEKSLoadBalancingPolicy';
    /** This policy provides permissions to EKS local cluster's control-plane instances running in your account to manage resources on your behalf. */
    public static AmazonEKSLocalOutpostClusterPolicy = 'AmazonEKSLocalOutpostClusterPolicy';
    /** Allows Amazon EKS Local to call AWS services on your behalf. */
    public static AmazonEKSLocalOutpostServiceRolePolicy = 'aws-service-role/AmazonEKSLocalOutpostServiceRolePolicy';
    /** Policy attached to the EKS Cluster Role that grants permissions to manage the cluster's networking resources. */
    public static AmazonEKSNetworkingPolicy = 'AmazonEKSNetworkingPolicy';
    /** This policy allows Amazon Elastic Container Service for Kubernetes to create and manage the necessary resources to operate EKS Clusters. */
    public static AmazonEKSServicePolicy = 'AmazonEKSServicePolicy';
    /** A Service-Linked Role required for Amazon EKS to call AWS services on your behalf. */
    public static AmazonEKSServiceRolePolicy = 'aws-service-role/AmazonEKSServiceRolePolicy';
    /** Policy used by VPC Resource Controller to manage ENI and IPs for worker nodes. */
    public static AmazonEKSVPCResourceController = 'AmazonEKSVPCResourceController';
    /** This policy allows Amazon EKS worker nodes to connect to Amazon EKS Clusters. */
    public static AmazonEKSWorkerNodeMinimalPolicy = 'AmazonEKSWorkerNodeMinimalPolicy';
    /** This policy allows Amazon EKS worker nodes to connect to Amazon EKS Clusters. */
    public static AmazonEKSWorkerNodePolicy = 'AmazonEKSWorkerNodePolicy';
    /** Provides full access to Amazon ElastiCache via the AWS Management Console. */
    public static AmazonElastiCacheFullAccess = 'AmazonElastiCacheFullAccess';
    /** Provides read only access to Amazon ElastiCache via the AWS Management Console. */
    public static AmazonElastiCacheReadOnlyAccess = 'AmazonElastiCacheReadOnlyAccess';
    /** Provides administrative access to Amazon ECR Public resources */
    public static AmazonElasticContainerRegistryPublicFullAccess = 'AmazonElasticContainerRegistryPublicFullAccess';
    /** Provides full access to Amazon ECR Public repositories, but does not allow repository deletion or policy changes. */
    public static AmazonElasticContainerRegistryPublicPowerUser = 'AmazonElasticContainerRegistryPublicPowerUser';
    /** Provides read-only access to Amazon ECR Public repositories. */
    public static AmazonElasticContainerRegistryPublicReadOnly = 'AmazonElasticContainerRegistryPublicReadOnly';
    /** Provides root client access to an Amazon EFS file system */
    public static AmazonElasticFileSystemClientFullAccess = 'AmazonElasticFileSystemClientFullAccess';
    /** Provides read only client access to an Amazon EFS file system */
    public static AmazonElasticFileSystemClientReadOnlyAccess = 'AmazonElasticFileSystemClientReadOnlyAccess';
    /** Provides read and write client access to an Amazon EFS file system */
    public static AmazonElasticFileSystemClientReadWriteAccess = 'AmazonElasticFileSystemClientReadWriteAccess';
    /** Provides full access to Amazon EFS via the AWS Management Console. */
    public static AmazonElasticFileSystemFullAccess = 'AmazonElasticFileSystemFullAccess';
    /** Provides read only access to Amazon EFS via the AWS Management Console. */
    public static AmazonElasticFileSystemReadOnlyAccess = 'AmazonElasticFileSystemReadOnlyAccess';
    /** Allows Amazon Elastic File System to manage AWS resources on your behalf */
    public static AmazonElasticFileSystemServiceRolePolicy = 'aws-service-role/AmazonElasticFileSystemServiceRolePolicy';
    /** Allows customers to use AWS Systems Manager to automatically manage Amazon EFS utilities (amazon-efs-utils) package on their EC2 instances, and use CloudWatchLog to get EFS file system mount success/failure notifications. */
    public static AmazonElasticFileSystemsUtils = 'AmazonElasticFileSystemsUtils';
    /** Default policy for the Amazon Elastic MapReduce Editors service role. */
    public static AmazonElasticMapReduceEditorsRole = 'service-role/AmazonElasticMapReduceEditorsRole';
    /** Amazon Elastic MapReduce for Auto Scaling. Role to allow Auto Scaling to add and remove instances from your EMR cluster. */
    public static AmazonElasticMapReduceforAutoScalingRole = 'service-role/AmazonElasticMapReduceforAutoScalingRole';
    /** Default policy for the Amazon Elastic MapReduce for EC2 service role. */
    public static AmazonElasticMapReduceforEC2Role = 'service-role/AmazonElasticMapReduceforEC2Role';
    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-iam-policies.html. Provides full access to Amazon Elastic MapReduce and underlying services that it requires such as EC2 and S3 */
    public static AmazonElasticMapReduceFullAccess = 'AmazonElasticMapReduceFullAccess';
    /** Policy to allow EMR to create, describe and delete EC2 placement groups. */
    public static AmazonElasticMapReducePlacementGroupPolicy = 'AmazonElasticMapReducePlacementGroupPolicy';
    /** Provides read only access to Amazon Elastic MapReduce via the AWS Management Console. */
    public static AmazonElasticMapReduceReadOnlyAccess = 'AmazonElasticMapReduceReadOnlyAccess';
    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-iam-policies.html.  Default policy for the Amazon Elastic MapReduce service role. */
    public static AmazonElasticMapReduceRole = 'service-role/AmazonElasticMapReduceRole';
    /** Allow Amazon Elasticsearch Service to access other AWS services such as EC2 Networking APIs on your behalf. */
    public static AmazonElasticsearchServiceRolePolicy = 'aws-service-role/AmazonElasticsearchServiceRolePolicy';
    /** Grants users full access to Elastic Transcoder and the access to associated services that is required for full Elastic Transcoder functionality. */
    public static AmazonElasticTranscoderFullAccess = 'AmazonElasticTranscoder_FullAccess';
    /** Grants users permission to change presets, submit jobs, and view Elastic Transcoder settings. This policy also grants some read-only access to some other services required to use the Elastic Transcode console, including S3, IAM, and SNS. */
    public static AmazonElasticTranscoderJobsSubmitter = 'AmazonElasticTranscoder_JobsSubmitter';
    /** Grants users read-only access to Elastic Transcoder and list access to related services. */
    public static AmazonElasticTranscoderReadOnlyAccess = 'AmazonElasticTranscoder_ReadOnlyAccess';
    /** Default policy for the Amazon Elastic Transcoder service role. */
    public static AmazonElasticTranscoderRole = 'service-role/AmazonElasticTranscoderRole';
    /** Allows the actions that EMR requires to terminate and delete AWS EC2 resources if the EMR Service role has lost that ability. */
    public static AmazonEMRCleanupPolicy = 'aws-service-role/AmazonEMRCleanupPolicy';
    /** Allows access to other AWS service resources that are required to run Amazon EMR */
    public static AmazonEMRContainersServiceRolePolicy = 'aws-service-role/AmazonEMRContainersServiceRolePolicy';
    /** Provides full access to Amazon EMR */
    public static AmazonEMRFullAccessPolicyV2 = 'AmazonEMRFullAccessPolicy_v2';
    /** Provides read only access to Amazon EMR and the associated CloudWatch Metrics. */
    public static AmazonEMRReadOnlyAccessPolicyV2 = 'AmazonEMRReadOnlyAccessPolicy_v2';
    /** Allows access to other AWS service resources that are required to run Amazon EMRServerless */
    public static AmazonEMRServerlessServiceRolePolicy = 'aws-service-role/AmazonEMRServerlessServiceRolePolicy';
    /** This policy is used for the Amazon EMR Service Role and should NOT be used for any other IAM users or roles in your account. The policy grants permissions to create and manage resources associated with EMR and related services necessary for the operation of your EMR cluster. */
    public static AmazonEMRServicePolicyV2 = 'service-role/AmazonEMRServicePolicy_v2';
    /** Provides limited access to the Amazon Cognito configuration service. */
    public static AmazonESCognitoAccess = 'AmazonESCognitoAccess';
    /** Provides full access to the Amazon ES configuration service. */
    public static AmazonESFullAccess = 'AmazonESFullAccess';
    /** Provides read-only access to the Amazon ES configuration service. */
    public static AmazonESReadOnlyAccess = 'AmazonESReadOnlyAccess';
    /** Allows EventBridge to access Secret Manager resources on your behalf. */
    public static AmazonEventBridgeApiDestinationsServiceRolePolicy = 'aws-service-role/AmazonEventBridgeApiDestinationsServiceRolePolicy';
    /** Provides full access to Amazon EventBridge. */
    public static AmazonEventBridgeFullAccess = 'AmazonEventBridgeFullAccess';
    /** Provides full access to Amazon EventBridge Pipes. */
    public static AmazonEventBridgePipesFullAccess = 'AmazonEventBridgePipesFullAccess';
    /** Provides read-only and operator (ability to Stop and Start running Pipes) access to Amazon EventBridge Pipes. */
    public static AmazonEventBridgePipesOperatorAccess = 'AmazonEventBridgePipesOperatorAccess';
    /** Provides read-only access to Amazon EventBridge Pipes. */
    public static AmazonEventBridgePipesReadOnlyAccess = 'AmazonEventBridgePipesReadOnlyAccess';
    /** Provides read only access to Amazon EventBridge. */
    public static AmazonEventBridgeReadOnlyAccess = 'AmazonEventBridgeReadOnlyAccess';
    /** The AmazonEventBridgeSchedulerFullAccess managed policy grants permissions to use all EventBridge Scheduler actions for schedules, and schedule groups. */
    public static AmazonEventBridgeSchedulerFullAccess = 'AmazonEventBridgeSchedulerFullAccess';
    /** The AmazonEventBridgeSchedulerReadOnlyAccess managed policy grants read-only permissions to view details about your schedules and schedule groups */
    public static AmazonEventBridgeSchedulerReadOnlyAccess = 'AmazonEventBridgeSchedulerReadOnlyAccess';
    /** Provides full access to Amazon EventBridge Schemas. */
    public static AmazonEventBridgeSchemasFullAccess = 'AmazonEventBridgeSchemasFullAccess';
    /** Provides read only access to Amazon EventBridge Schemas. */
    public static AmazonEventBridgeSchemasReadOnlyAccess = 'AmazonEventBridgeSchemasReadOnlyAccess';
    /** Grants permissions to Managed Rules created by Amazon EventBridge schemas. */
    public static AmazonEventBridgeSchemasServiceRolePolicy = 'aws-service-role/AmazonEventBridgeSchemasServiceRolePolicy';
    /** Grants permissions to EVS to manage resources on your behalf */
    public static AmazonEVSServiceRolePolicy = 'aws-service-role/AmazonEVSServiceRolePolicy';
    /** Policy to enable AWS FIS to manage monitoring and resource selection for experiments. */
    public static AmazonFISServiceRolePolicy = 'aws-service-role/AmazonFISServiceRolePolicy';
    /** Gives access to all actions for Amazon Forecast */
    public static AmazonForecastFullAccess = 'AmazonForecastFullAccess';
    /** Gives access to all actions for Amazon Fraud Detector */
    public static AmazonFraudDetectorFullAccessPolicy = 'AmazonFraudDetectorFullAccessPolicy';
    /** Full Access Policy for Amazon FreeRTOS */
    public static AmazonFreeRTOSFullAccess = 'AmazonFreeRTOSFullAccess';
    /** Allows user to access Amazon FreeRTOS OTA Update */
    public static AmazonFreeRTOSOTAUpdate = 'service-role/AmazonFreeRTOSOTAUpdate';
    /** Provides full access to Amazon FSx and access to related AWS services via the AWS Management Console. */
    public static AmazonFSxConsoleFullAccess = 'AmazonFSxConsoleFullAccess';
    /** Provides read only access to Amazon FSx and access to related AWS services via the AWS Management Console. */
    public static AmazonFSxConsoleReadOnlyAccess = 'AmazonFSxConsoleReadOnlyAccess';
    /** Provides full access to Amazon FSx and access to related AWS services. */
    public static AmazonFSxFullAccess = 'AmazonFSxFullAccess';
    /** Provides read only access to Amazon FSx. */
    public static AmazonFSxReadOnlyAccess = 'AmazonFSxReadOnlyAccess';
    /** Allows Amazon FSx to manage AWS resources on your behalf */
    public static AmazonFSxServiceRolePolicy = 'aws-service-role/AmazonFSxServiceRolePolicy';
    /** Provides full access to Amazon Glacier via the AWS Management Console. */
    public static AmazonGlacierFullAccess = 'AmazonGlacierFullAccess';
    /** Provides read only access to Amazon Glacier via the AWS Management Console. */
    public static AmazonGlacierReadOnlyAccess = 'AmazonGlacierReadOnlyAccess';
    /** This policy grants access to Amazon Athena and the dependencies needed to enable querying and writing results to s3 from the Amazon Athena plugin in Amazon Grafana. */
    public static AmazonGrafanaAthenaAccess = 'service-role/AmazonGrafanaAthenaAccess';
    /** This policy grants access to Amazon CloudWatch and the dependencies needed to use CloudWatch as a datasource within Amazon Managed Grafana. */
    public static AmazonGrafanaCloudWatchAccess = 'service-role/AmazonGrafanaCloudWatchAccess';
    /** This policy grants scoped access to Amazon Redshift and the dependencies needed to use the Amazon Redshift plugin in Amazon Grafana. */
    public static AmazonGrafanaRedshiftAccess = 'service-role/AmazonGrafanaRedshiftAccess';
    /** Provides access to AWS Resources managed or used by Amazon Grafana. */
    public static AmazonGrafanaServiceLinkedRolePolicy = 'aws-service-role/AmazonGrafanaServiceLinkedRolePolicy';
    /** Provides full access to use Amazon GuardDuty. */
    public static AmazonGuardDutyFullAccess = 'AmazonGuardDutyFullAccess';
    /** Provides full access to use Amazon GuardDuty */
    public static AmazonGuardDutyFullAccessV2 = 'AmazonGuardDutyFullAccess_v2';
    /** GuardDuty malware protection uses the service-linked role (SLR) named AWSServiceRoleForAmazonGuardDutyMalwareProtection. This service-linked role allows GuardDuty malware protection to perform agent-less scans to detect malware. It allows GuardDuty to create snapshots in your account, and share the snapshots with the GuardDuty service account to scan for malware. It evaluates these shared snapshots and includes the retrieved EC2 instance metadata in the GuardDuty Malware Protection findings. The AWSServiceRoleForAmazonGuardDutyMalwareProtection service-linked role trusts the malware-protection.guardduty.amazonaws.com service to assume the role. */
    public static AmazonGuardDutyMalwareProtectionServiceRolePolicy = 'aws-service-role/AmazonGuardDutyMalwareProtectionServiceRolePolicy';
    /** Provides read only access to Amazon GuardDuty resources */
    public static AmazonGuardDutyReadOnlyAccess = 'AmazonGuardDutyReadOnlyAccess';
    /** Enable access to AWS Resources used or managed by Amazon Guard Duty */
    public static AmazonGuardDutyServiceRolePolicy = 'aws-service-role/AmazonGuardDutyServiceRolePolicy';
    /** Provides full access to Amazon HealthLake service. */
    public static AmazonHealthLakeFullAccess = 'AmazonHealthLakeFullAccess';
    /** Provides read only access to Amazon HealthLake service. */
    public static AmazonHealthLakeReadOnlyAccess = 'AmazonHealthLakeReadOnlyAccess';
    /** Provides full access to Honeycode via the AWS Management Console and the SDK. */
    public static AmazonHoneycodeFullAccess = 'AmazonHoneycodeFullAccess';
    /** Provides read only access to Honeycode via the AWS Management Console and the SDK. */
    public static AmazonHoneycodeReadOnlyAccess = 'AmazonHoneycodeReadOnlyAccess';
    /** A service-linked role required for Amazon Honeycode to access your resources. */
    public static AmazonHoneycodeServiceRolePolicy = 'aws-service-role/AmazonHoneycodeServiceRolePolicy';
    /** Provides full access to Honeycode Team Association via the AWS Management Console and the SDK. */
    public static AmazonHoneycodeTeamAssociationFullAccess = 'AmazonHoneycodeTeamAssociationFullAccess';
    /** Provides read only access to Honeycode Team Association via the AWS Management Console and the SDK. */
    public static AmazonHoneycodeTeamAssociationReadOnlyAccess = 'AmazonHoneycodeTeamAssociationReadOnlyAccess';
    /** Provides full access to Honeycode Workbook via the AWS Management Console and the SDK. */
    public static AmazonHoneycodeWorkbookFullAccess = 'AmazonHoneycodeWorkbookFullAccess';
    /** Provides read only access to Honeycode Workbook via the AWS Management Console and the SDK. */
    public static AmazonHoneycodeWorkbookReadOnlyAccess = 'AmazonHoneycodeWorkbookReadOnlyAccess';
    /** Grants Amazon Inspector access to AWS Services needed to perform agent-less security assessments */
    public static AmazonInspector2AgentlessServiceRolePolicy = 'aws-service-role/AmazonInspector2AgentlessServiceRolePolicy';
    /** Provides full access to Amazon Inspector and access to other related services such as organizations. */
    public static AmazonInspector2FullAccess = 'AmazonInspector2FullAccess';
    /** Provides full access to Amazon Inspector and access to other related services such as organizations with restrictive organizational access. */
    public static AmazonInspector2FullAccessV2 = 'AmazonInspector2FullAccess_v2';
    /** This is a managed policy that customer should attach to their roles to communicate with inspector service for CIS scans */
    public static AmazonInspector2ManagedCisPolicy = 'AmazonInspector2ManagedCisPolicy';
    /** Provides read only access to the Amazon inspector2 service and relevant support services */
    public static AmazonInspector2ReadOnlyAccess = 'AmazonInspector2ReadOnlyAccess';
    /** Grants Amazon Inspector access to AWS Services needed to perform security assessments */
    public static AmazonInspector2ServiceRolePolicy = 'aws-service-role/AmazonInspector2ServiceRolePolicy';
    /** Provides full access to Amazon Inspector. */
    public static AmazonInspectorFullAccess = 'AmazonInspectorFullAccess';
    /** Provides read only access to Amazon Inspector. */
    public static AmazonInspectorReadOnlyAccess = 'AmazonInspectorReadOnlyAccess';
    /** Grants Amazon Inspector access to AWS Services needed to perform security assessments */
    public static AmazonInspectorServiceRolePolicy = 'aws-service-role/AmazonInspectorServiceRolePolicy';
    /** Provides full access to Amazon Kendra via the AWS Management Console. */
    public static AmazonKendraFullAccess = 'AmazonKendraFullAccess';
    /** Provides read only access to Amazon Kendra via the AWS Management Console. */
    public static AmazonKendraReadOnlyAccess = 'AmazonKendraReadOnlyAccess';
    /** Provide full access to Amazon Keyspaces */
    public static AmazonKeyspacesFullAccess = 'AmazonKeyspacesFullAccess';
    /** Provide read only access to Amazon Keyspaces */
    public static AmazonKeyspacesReadOnlyAccess = 'AmazonKeyspacesReadOnlyAccess';
    /** Provide read only access to Amazon Keyspaces and related AWS services. */
    public static AmazonKeyspacesReadOnlyAccessV2 = 'AmazonKeyspacesReadOnlyAccess_v2';
    /** Provides full access to Amazon Kinesis Analytics via the AWS Management Console. */
    public static AmazonKinesisAnalyticsFullAccess = 'AmazonKinesisAnalyticsFullAccess';
    /** Provides read-only access to Amazon Kinesis Analytics via the AWS Management Console. */
    public static AmazonKinesisAnalyticsReadOnly = 'AmazonKinesisAnalyticsReadOnly';
    /** Provides full access to all Amazon Kinesis Firehose Delivery Streams. */
    public static AmazonKinesisFirehoseFullAccess = 'AmazonKinesisFirehoseFullAccess';
    /** Provides read only access to all Amazon Kinesis Firehose Delivery Streams. */
    public static AmazonKinesisFirehoseReadOnlyAccess = 'AmazonKinesisFirehoseReadOnlyAccess';
    /** Provides full access to all streams via the AWS Management Console. */
    public static AmazonKinesisFullAccess = 'AmazonKinesisFullAccess';
    /** Provides read only access to all streams via the AWS Management Console. */
    public static AmazonKinesisReadOnlyAccess = 'AmazonKinesisReadOnlyAccess';
    /** Provides full access to Amazon Kinesis Video Streams via the AWS Management Console. */
    public static AmazonKinesisVideoStreamsFullAccess = 'AmazonKinesisVideoStreamsFullAccess';
    /** Provides read only access to AWS Kinesis Video Streams via the AWS Management Console. */
    public static AmazonKinesisVideoStreamsReadOnlyAccess = 'AmazonKinesisVideoStreamsReadOnlyAccess';
    /** Full access to AWS Launch wizard and other required services. */
    public static AmazonLaunchWizardFullAccessV2 = 'AmazonLaunchWizardFullAccessV2';
    /** This policy allows customers to call Lex runtime from channels */
    public static AmazonLexChannelsAccess = 'aws-service-role/AmazonLexChannelsAccess';
    /** Provides full access to Amazon Lex via the AWS Management Console.  Also provides access to create Lex Service Linked Roles and grant Lex permissions to invoke a limited set of Lambda functions. */
    public static AmazonLexFullAccess = 'AmazonLexFullAccess';
    /** Provides read-only access to Amazon Lex. */
    public static AmazonLexReadOnly = 'AmazonLexReadOnly';
    /** Allows Amazon Lex to replicate Lex resources across regions on your behalf. */
    public static AmazonLexReplicationPolicy = 'aws-service-role/AmazonLexReplicationPolicy';
    /** Provides access to Amazon Lex conversational APIs. */
    public static AmazonLexRunBotsOnly = 'AmazonLexRunBotsOnly';
    /** Provides Lex V2 bots access to call other AWS services on your behalf. */
    public static AmazonLexV2BotPolicy = 'aws-service-role/AmazonLexV2BotPolicy';
    /** Provides full access to Amazon Lookout for Equipment operations */
    public static AmazonLookoutEquipmentFullAccess = 'AmazonLookoutEquipmentFullAccess';
    /** Provides read only access to Amazon Lookout for Equipments */
    public static AmazonLookoutEquipmentReadOnlyAccess = 'AmazonLookoutEquipmentReadOnlyAccess';
    /** Gives access to all actions for Amazon Lookout for Metrics */
    public static AmazonLookoutMetricsFullAccess = 'AmazonLookoutMetricsFullAccess';
    /** Gives access to all read-only actions for Amazon Lookout for Metrics */
    public static AmazonLookoutMetricsReadOnlyAccess = 'AmazonLookoutMetricsReadOnlyAccess';
    /** Provides full access to Amazon Lookout for Vision and scoped access to required service and console dependencies. */
    public static AmazonLookoutVisionConsoleFullAccess = 'AmazonLookoutVisionConsoleFullAccess';
    /** Provides read only access to Amazon Lookout for Vision and scoped access to required service and console dependencies. */
    public static AmazonLookoutVisionConsoleReadOnlyAccess = 'AmazonLookoutVisionConsoleReadOnlyAccess';
    /** Provides full access to Amazon Lookout for Vision and scoped access to required dependencies. */
    public static AmazonLookoutVisionFullAccess = 'AmazonLookoutVisionFullAccess';
    /** Provides read only access to Amazon Lookout for Vision and scoped access to required dependencies. */
    public static AmazonLookoutVisionReadOnlyAccess = 'AmazonLookoutVisionReadOnlyAccess';
    /** Grants users permission to request Amazon Machine Learning batch predictions. */
    public static AmazonMachineLearningBatchPredictionsAccess = 'AmazonMachineLearningBatchPredictionsAccess';
    /** Provides create access for non-prediction Amazon Machine Learning resources. */
    public static AmazonMachineLearningCreateOnlyAccess = 'AmazonMachineLearningCreateOnlyAccess';
    /** Provides full access to Amazon Machine Learning resources. */
    public static AmazonMachineLearningFullAccess = 'AmazonMachineLearningFullAccess';
    /** Grants users permission to create and delete the real-time endpoint for Amazon Machine Learning models. */
    public static AmazonMachineLearningManageRealTimeEndpointOnlyAccess = 'AmazonMachineLearningManageRealTimeEndpointOnlyAccess';
    /** Provides read only access to Amazon Machine Learning resources. */
    public static AmazonMachineLearningReadOnlyAccess = 'AmazonMachineLearningReadOnlyAccess';
    /** Grants users permission to request Amazon Machine Learning real-time predictions. */
    public static AmazonMachineLearningRealTimePredictionOnlyAccess = 'AmazonMachineLearningRealTimePredictionOnlyAccess';
    /** Allows Machine Learning to configure and use your Redshift Clusters and S3 Staging Locations for Redshift Data Source. */
    public static AmazonMachineLearningRoleforRedshiftDataSourceV3 = 'service-role/AmazonMachineLearningRoleforRedshiftDataSourceV3';
    /** Provides full access to Amazon Macie. */
    public static AmazonMacieFullAccess = 'AmazonMacieFullAccess';
    /** Grants permission to create the service-linked role of Amazon Macie. */
    public static AmazonMacieHandshakeRole = 'service-role/AmazonMacieHandshakeRole';
    /** Provides readonly access to Amazon Macie. */
    public static AmazonMacieReadOnlyAccess = 'AmazonMacieReadOnlyAccess';
    /** Grants Macie read-only access to resource dependencies in your account in order to enable data analysis. */
    public static AmazonMacieServiceRole = 'service-role/AmazonMacieServiceRole';
    /** Service linked role for Amazon Macie */
    public static AmazonMacieServiceRolePolicy = 'aws-service-role/AmazonMacieServiceRolePolicy';
    /** Provides full access to Amazon Managed Blockchain via the AWS Management Console */
    public static AmazonManagedBlockchainConsoleFullAccess = 'AmazonManagedBlockchainConsoleFullAccess';
    /** Provides full access to Amazon Managed Blockchain. */
    public static AmazonManagedBlockchainFullAccess = 'AmazonManagedBlockchainFullAccess';
    /** Provides read-only access to Amazon Managed Blockchain. */
    public static AmazonManagedBlockchainReadOnlyAccess = 'AmazonManagedBlockchainReadOnlyAccess';
    /** Enables access to AWS Services and Resources used or managed by Amazon Managed Blockchain */
    public static AmazonManagedBlockchainServiceRolePolicy = 'aws-service-role/AmazonManagedBlockchainServiceRolePolicy';
    /** Provide full access to Amazon Managed Apache Cassandra Service */
    public static AmazonMCSFullAccess = 'AmazonMCSFullAccess';
    /** Provide read only access to Amazon Managed Apache Cassandra Service */
    public static AmazonMCSReadOnlyAccess = 'AmazonMCSReadOnlyAccess';
    /** Provides full access to all APIs in Amazon Mechanical Turk. */
    public static AmazonMechanicalTurkFullAccess = 'AmazonMechanicalTurkFullAccess';
    /** Provides access to read only APIs in Amazon Mechanical Turk. */
    public static AmazonMechanicalTurkReadOnly = 'AmazonMechanicalTurkReadOnly';
    /** Provides full access to Amazon MemoryDB via the AWS Management Console. */
    public static AmazonMemoryDBFullAccess = 'AmazonMemoryDBFullAccess';
    /** Provides read only access to Amazon MemoryDB via the AWS Management Console. */
    public static AmazonMemoryDBReadOnlyAccess = 'AmazonMemoryDBReadOnlyAccess';
    /** Provides read only access to all reports including financial data for all application resources. */
    public static AmazonMobileAnalyticsFinancialReportAccess = 'AmazonMobileAnalyticsFinancialReportAccess';
    /** Provides full access to all application resources. */
    public static AmazonMobileAnalyticsFullAccess = 'AmazonMobileAnalyticsFullAccess';
    /** Provides read only access to non financial reports for all application resources. */
    public static AmazonMobileAnalyticsNonFinancialReportAccess = 'AmazonMobileAnalyticsNon-financialReportAccess';
    /** Provides write only access to put event data for all application resources. (Recommended for SDK integration) */
    public static AmazonMobileAnalyticsWriteOnlyAccess = 'AmazonMobileAnalyticsWriteOnlyAccess';
    /** Provides full access to manage Amazon Monitron */
    public static AmazonMonitronFullAccess = 'AmazonMonitronFullAccess';
    /** Provides full access to AmazonMQ via our API/SDK. */
    public static AmazonMQApiFullAccess = 'AmazonMQApiFullAccess';
    /** Provides read only access to AmazonMQ via our API/SDK. */
    public static AmazonMQApiReadOnlyAccess = 'AmazonMQApiReadOnlyAccess';
    /** Provides full access to AmazonMQ via the AWS Management Console. */
    public static AmazonMQFullAccess = 'AmazonMQFullAccess';
    /** Provides read only access to AmazonMQ via the AWS Management Console. */
    public static AmazonMQReadOnlyAccess = 'AmazonMQReadOnlyAccess';
    /** Service Linked Role Policy for AWS Amazon MQ */
    public static AmazonMQServiceRolePolicy = 'aws-service-role/AmazonMQServiceRolePolicy';
    /** Provide readonly access to Amazon MSK Connect */
    public static AmazonMSKConnectReadOnlyAccess = 'AmazonMSKConnectReadOnlyAccess';
    /** Provide full access to Amazon MSK and other required permissions for its dependencies. */
    public static AmazonMSKFullAccess = 'AmazonMSKFullAccess';
    /** Provide readonly access to Amazon MSK */
    public static AmazonMSKReadOnlyAccess = 'AmazonMSKReadOnlyAccess';
    /** The Service Linked Role used by Amazon Managed Workflows for Apache Airflow. */
    public static AmazonMWAAServiceRolePolicy = 'aws-service-role/AmazonMWAAServiceRolePolicy';
    /** This policy grants access to resources needed by Nimble Studio Launch Profile workers. Attach this policy to EC2 instances created by Nimble Studio Builder. */
    public static AmazonNimbleStudioLaunchProfileWorker = 'AmazonNimbleStudio-LaunchProfileWorker';
    /** This policy grants access to Amazon Nimble Studio resources associated with the studio admin and related studio resources in other services. Attach this policy to the Admin role associated with your studio. */
    public static AmazonNimbleStudioStudioAdmin = 'AmazonNimbleStudio-StudioAdmin';
    /** This policy grants access to Amazon Nimble Studio resources associated with the studio user and related studio resources in other services. Attach this policy to the User role associated with your studio. */
    public static AmazonNimbleStudioStudioUser = 'AmazonNimbleStudio-StudioUser';
    /** Allows Oracle Database@AWS to manage AWS resources on your behalf. */
    public static AmazonODBServiceRolePolicy = 'aws-service-role/AmazonODBServiceRolePolicy';
    /** Provides full access to Amazon Omics and other required AWS Services. This policy allows the user to view and accept RAM share invitations to access resources outside of the user's AWS account. */
    public static AmazonOmicsFullAccess = 'AmazonOmicsFullAccess';
    /** Provide read only access to Amazon Omics */
    public static AmazonOmicsReadOnlyAccess = 'AmazonOmicsReadOnlyAccess';
    /** This policy grants administrative permissions that allow access to all Amazon One Enterprise resources and operations. */
    public static AmazonOneEnterpriseFullAccess = 'AmazonOneEnterpriseFullAccess';
    /** This policy grants limited read and write permissions that allow device installation and activation. */
    public static AmazonOneEnterpriseInstallerAccess = 'AmazonOneEnterpriseInstallerAccess';
    /** This policy grants read only permissions to all Amazon One Enterprise resources and operations. */
    public static AmazonOneEnterpriseReadOnlyAccess = 'AmazonOneEnterpriseReadOnlyAccess';
    /** Provides access to Amazon OpenSearch Dashboards Service to access other AWS services such as CloudWatch on your behalf */
    public static AmazonOpenSearchDashboardsServiceRolePolicy = 'aws-service-role/AmazonOpenSearchDashboardsServiceRolePolicy';
    /** Allows OpenSearch DirectQuery Service to access AWS Glue APIs for creating resources on your behalf. */
    public static AmazonOpenSearchDirectQueryGlueCreateAccess = 'AmazonOpenSearchDirectQueryGlueCreateAccess';
    /** Allows Amazon OpenSearch Ingestion to access other AWS services on your behalf. */
    public static AmazonOpenSearchIngestionFullAccess = 'AmazonOpenSearchIngestionFullAccess';
    /** Provides read only access to the Amazon OpenSearch Ingestion Service */
    public static AmazonOpenSearchIngestionReadOnlyAccess = 'AmazonOpenSearchIngestionReadOnlyAccess';
    /** Allows Amazon OpenSearch Ingestion Service to access other AWS services on your behalf. */
    public static AmazonOpenSearchIngestionServiceRolePolicy = 'aws-service-role/AmazonOpenSearchIngestionServiceRolePolicy';
    /** Allow Amazon OpenSearch Serverless to access other AWS services such as CloudWatch APIs on your behalf. */
    public static AmazonOpenSearchServerlessServiceRolePolicy = 'aws-service-role/AmazonOpenSearchServerlessServiceRolePolicy';
    /** Provides access to the Amazon Cognito configuration service. */
    public static AmazonOpenSearchServiceCognitoAccess = 'AmazonOpenSearchServiceCognitoAccess';
    /** Provides full access to the Amazon OpenSearch Service configuration service. */
    public static AmazonOpenSearchServiceFullAccess = 'AmazonOpenSearchServiceFullAccess';
    /** Provides read-only access to the Amazon OpenSearch Service configuration service. */
    public static AmazonOpenSearchServiceReadOnlyAccess = 'AmazonOpenSearchServiceReadOnlyAccess';
    /** Allow Amazon OpenSearch Service to access other AWS services such as EC2 Networking APIs on your behalf. */
    public static AmazonOpenSearchServiceRolePolicy = 'aws-service-role/AmazonOpenSearchServiceRolePolicy';
    /** Provides full access to Amazon Personalize via the AWS Management Console and SDK. Also provides select access to related services (e.g., S3, CloudWatch). */
    public static AmazonPersonalizeFullAccess = 'service-role/AmazonPersonalizeFullAccess';
    /** Grants full access to Amazon Polly service and resources. */
    public static AmazonPollyFullAccess = 'AmazonPollyFullAccess';
    /** Grants read-only access to Amazon Polly resources. */
    public static AmazonPollyReadOnlyAccess = 'AmazonPollyReadOnlyAccess';
    /** Grants full access to AWS Managed Prometheus resources in the AWS console */
    public static AmazonPrometheusConsoleFullAccess = 'AmazonPrometheusConsoleFullAccess';
    /** Grants full access to AWS Managed Prometheus resources */
    public static AmazonPrometheusFullAccess = 'AmazonPrometheusFullAccess';
    /** Grants access to run queries against AWS Managed Prometheus resources */
    public static AmazonPrometheusQueryAccess = 'AmazonPrometheusQueryAccess';
    /** Grants write only access to AWS Managed Prometheus workspaces */
    public static AmazonPrometheusRemoteWriteAccess = 'AmazonPrometheusRemoteWriteAccess';
    /** Provides access to AWS Resources managed or used by Amazon Managed Service for Prometheus Collector */
    public static AmazonPrometheusScraperServiceRolePolicy = 'aws-service-role/AmazonPrometheusScraperServiceRolePolicy';
    /** Provides developer access to enable interactions with Amazon Q */
    public static AmazonQDeveloperAccess = 'AmazonQDeveloperAccess';
    /** Provides full access to enable interactions with Amazon Q */
    public static AmazonQFullAccess = 'AmazonQFullAccess';
    /** Provides full access to Amazon QLDB via the AWS Management Console. */
    public static AmazonQLDBConsoleFullAccess = 'AmazonQLDBConsoleFullAccess';
    /** Provides full access to Amazon QLDB via the service API. */
    public static AmazonQLDBFullAccess = 'AmazonQLDBFullAccess';
    /** Provides read only access to Amazon QLDB. */
    public static AmazonQLDBReadOnly = 'AmazonQLDBReadOnly';
    /** Allows Amazon RDS to manage AWS resources on your behalf. */
    public static AmazonRDSBetaServiceRolePolicy = 'aws-service-role/AmazonRDSBetaServiceRolePolicy';
    /** Allows Amazon RDS Custom to perform various automation actions and database management tasks through an EC2 instance profile. */
    public static AmazonRDSCustomInstanceProfileRolePolicy = 'AmazonRDSCustomInstanceProfileRolePolicy';
    /** Amazon RDS Custom Preview Service Role Policy */
    public static AmazonRDSCustomPreviewServiceRolePolicy = 'aws-service-role/AmazonRDSCustomPreviewServiceRolePolicy';
    /** Allows Amazon RDS Custom to manage AWS resources on your behalf. */
    public static AmazonRDSCustomServiceRolePolicy = 'aws-service-role/AmazonRDSCustomServiceRolePolicy';
    /** Allows full access to use the RDS data APIs, secret store APIs for RDS database credentials, and DB console query management APIs to execute SQL statements on Aurora Serverless clusters in the AWS account. */
    public static AmazonRDSDataFullAccess = 'AmazonRDSDataFullAccess';
    /** Allow RDS to access Directory Service Managed AD on behalf of the customer for domain-joined SQL Server DB instances. */
    public static AmazonRDSDirectoryServiceAccess = 'service-role/AmazonRDSDirectoryServiceAccess';
    /** Provides access to Cloudwatch for RDS Enhanced Monitoring */
    public static AmazonRDSEnhancedMonitoringRole = 'service-role/AmazonRDSEnhancedMonitoringRole';
    /** Provides full access to Amazon RDS via the AWS Management Console. */
    public static AmazonRDSFullAccess = 'AmazonRDSFullAccess';
    /** Provides full access to RDS Performance Insights via the AWS Management Console */
    public static AmazonRDSPerformanceInsightsFullAccess = 'AmazonRDSPerformanceInsightsFullAccess';
    /** Read-Only policy for RDS Performance Insights */
    public static AmazonRDSPerformanceInsightsReadOnly = 'AmazonRDSPerformanceInsightsReadOnly';
    /** Amazon RDS Preview Service Role Policy */
    public static AmazonRDSPreviewServiceRolePolicy = 'aws-service-role/AmazonRDSPreviewServiceRolePolicy';
    /** Provides read only access to Amazon RDS via the AWS Management Console. */
    public static AmazonRDSReadOnlyAccess = 'AmazonRDSReadOnlyAccess';
    /** Allows Amazon RDS to manage AWS resources on your behalf. */
    public static AmazonRDSServiceRolePolicy = 'aws-service-role/AmazonRDSServiceRolePolicy';
    /** This policy includes permissions to run SQL commands to copy, load, unload, query, and analyze data on Amazon Redshift. The policy also grants permissions to run select statements for related services, such as Amazon S3, Amazon CloudWatch logs, Amazon SageMaker, or AWS Glue. */
    public static AmazonRedshiftAllCommandsFullAccess = 'AmazonRedshiftAllCommandsFullAccess';
    /** This policy provides full access to Amazon Redshift Data APIs. This policy also grants scoped access to other required services. */
    public static AmazonRedshiftDataFullAccess = 'AmazonRedshiftDataFullAccess';
    /** Provides full access to Amazon Redshift via the AWS Management Console. */
    public static AmazonRedshiftFullAccess = 'AmazonRedshiftFullAccess';
    /** Provides full access to the Amazon Redshift Query Editor and to saved queries via the AWS Management Console. */
    public static AmazonRedshiftQueryEditor = 'AmazonRedshiftQueryEditor';
    /** Grants full access to the Amazon Redshift Query Editor V2 operations and resources. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters, read keys and aliases in AWS KMS and manage the Query Editor V2 secrets in AWS Secrets Manager. */
    public static AmazonRedshiftQueryEditorV2FullAccess = 'AmazonRedshiftQueryEditorV2FullAccess';
    /** Grants the ability to work with Amazon Redshift Query Editor V2 without sharing resources. The granted principal can only read, update and delete its own resources but cannot share them. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters and manage the Query Editor V2 secrets of the principal in AWS Secrets Manager. */
    public static AmazonRedshiftQueryEditorV2NoSharing = 'AmazonRedshiftQueryEditorV2NoSharing';
    /** Grants the ability to work with Amazon Redshift Query Editor V2 with limited sharing of resources. The granted principal can read, write and share its own resources. The granted principal can read the resources shared with its team but cannot update them. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters and manage the Query Editor V2 secrets of the principal in AWS Secrets Manager. */
    public static AmazonRedshiftQueryEditorV2ReadSharing = 'AmazonRedshiftQueryEditorV2ReadSharing';
    /** Grants the ability to work with Amazon Redshift Query Editor V2 with sharing of resources. The granted principal can read, write and share its own resources. The granted principal can read and update the resources shared with its team. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters and manage the Query Editor V2 secrets of the principal in AWS Secrets Manager. */
    public static AmazonRedshiftQueryEditorV2ReadWriteSharing = 'AmazonRedshiftQueryEditorV2ReadWriteSharing';
    /** Provides read only access to Amazon Redshift via the AWS Management Console. */
    public static AmazonRedshiftReadOnlyAccess = 'AmazonRedshiftReadOnlyAccess';
    /** Allows Amazon Redshift to call AWS services on your behalf */
    public static AmazonRedshiftServiceLinkedRolePolicy = 'aws-service-role/AmazonRedshiftServiceLinkedRolePolicy';
    /** This policy specifies rekognition and s3 permissions required by Amazon Rekognition Custom Labels feature. */
    public static AmazonRekognitionCustomLabelsFullAccess = 'AmazonRekognitionCustomLabelsFullAccess';
    /** Access to all Amazon Rekognition APIs */
    public static AmazonRekognitionFullAccess = 'AmazonRekognitionFullAccess';
    /** Access to all Read rekognition APIs */
    public static AmazonRekognitionReadOnlyAccess = 'AmazonRekognitionReadOnlyAccess';
    /** Allows Rekognition to call AWS services on your behalf. */
    public static AmazonRekognitionServiceRole = 'service-role/AmazonRekognitionServiceRole';
    /** Provides full access to all Route 53 Auto Naming actions. */
    public static AmazonRoute53AutoNamingFullAccess = 'AmazonRoute53AutoNamingFullAccess';
    /** Provides read-only access to all Route 53 Auto Naming actions. */
    public static AmazonRoute53AutoNamingReadOnlyAccess = 'AmazonRoute53AutoNamingReadOnlyAccess';
    /** Provides registrant level access to Route 53 Auto Naming actions. */
    public static AmazonRoute53AutoNamingRegistrantAccess = 'AmazonRoute53AutoNamingRegistrantAccess';
    /** Provides full access to all Route53 Domains actions and Create Hosted Zone to allow Hosted Zone creation as part of domain registrations. */
    public static AmazonRoute53DomainsFullAccess = 'AmazonRoute53DomainsFullAccess';
    /** Provides access to Route53 Domains list and actions. */
    public static AmazonRoute53DomainsReadOnlyAccess = 'AmazonRoute53DomainsReadOnlyAccess';
    /** Provides full access to all Amazon Route 53 via the AWS Management Console. */
    public static AmazonRoute53FullAccess = 'AmazonRoute53FullAccess';
    /** This policy grants full access to Amazon Route 53 Profile resources. */
    public static AmazonRoute53ProfilesFullAccess = 'AmazonRoute53ProfilesFullAccess';
    /** This policy grants read-only access to Amazon Route 53 Profile resources. */
    public static AmazonRoute53ProfilesReadOnlyAccess = 'AmazonRoute53ProfilesReadOnlyAccess';
    /** Provides read only access to all Amazon Route 53 via the AWS Management Console. */
    public static AmazonRoute53ReadOnlyAccess = 'AmazonRoute53ReadOnlyAccess';
    /** Provides full access to Amazon Route 53 Recovery Cluster */
    public static AmazonRoute53RecoveryClusterFullAccess = 'AmazonRoute53RecoveryClusterFullAccess';
    /** Provides read only access to Amazon Route 53 Recovery Cluster */
    public static AmazonRoute53RecoveryClusterReadOnlyAccess = 'AmazonRoute53RecoveryClusterReadOnlyAccess';
    /** Provides full access to Amazon Route 53 Recovery Control Config */
    public static AmazonRoute53RecoveryControlConfigFullAccess = 'AmazonRoute53RecoveryControlConfigFullAccess';
    /** Provides read only access to Amazon Route 53 Recovery Control Config */
    public static AmazonRoute53RecoveryControlConfigReadOnlyAccess = 'AmazonRoute53RecoveryControlConfigReadOnlyAccess';
    /** Provides full access to Amazon Route 53 Recovery Readiness */
    public static AmazonRoute53RecoveryReadinessFullAccess = 'AmazonRoute53RecoveryReadinessFullAccess';
    /** Provides read only access to Amazon Route 53 Recovery Readiness */
    public static AmazonRoute53RecoveryReadinessReadOnlyAccess = 'AmazonRoute53RecoveryReadinessReadOnlyAccess';
    /** Full access policy for Route 53 Resolver */
    public static AmazonRoute53ResolverFullAccess = 'AmazonRoute53ResolverFullAccess';
    /** Read only policy for Route 53 Resolver */
    public static AmazonRoute53ResolverReadOnlyAccess = 'AmazonRoute53ResolverReadOnlyAccess';
    /** Provides full access to all buckets via the AWS Management Console. */
    public static AmazonS3FullAccess = 'AmazonS3FullAccess';
    /** Provides AWS Lambda functions permissions to interact with Amazon S3 Object Lambda. Also grants Lambda permissions to write to CloudWatch Logs. */
    public static AmazonS3ObjectLambdaExecutionRolePolicy = 'service-role/AmazonS3ObjectLambdaExecutionRolePolicy';
    /** Provides full access to Amazon S3 on Outposts via the AWS Management Console. */
    public static AmazonS3OutpostsFullAccess = 'AmazonS3OutpostsFullAccess';
    /** Provides read only access to Amazon S3 on Outposts via the AWS Management Console. */
    public static AmazonS3OutpostsReadOnlyAccess = 'AmazonS3OutpostsReadOnlyAccess';
    /** Provides read only access to all buckets via the AWS Management Console. */
    public static AmazonS3ReadOnlyAccess = 'AmazonS3ReadOnlyAccess';
    /** Provides full access to all S3 table buckets. */
    public static AmazonS3TablesFullAccess = 'AmazonS3TablesFullAccess';
    /** This managed policy grants AWS Lake Formation permissions to act on all table buckets, namespaces, and tables within the account. */
    public static AmazonS3TablesLakeFormationServiceRole = 'service-role/AmazonS3TablesLakeFormationServiceRole';
    /** Provides read only access to all S3 table buckets. */
    public static AmazonS3TablesReadOnlyAccess = 'AmazonS3TablesReadOnlyAccess';
    /** Service role policy used by the AWS Service Catalog service to provision products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including CodePipeline, CodeBuild, CodeCommit, Glue, CloudFormation, etc,. */
    public static AmazonSageMakerAdminServiceCatalogProductsServiceRolePolicy = 'AmazonSageMakerAdmin-ServiceCatalogProductsServiceRolePolicy';
    /** Provides permissions for Amazon SageMaker Canvas to use AI services to support ready to use AI solutions. This policy will add more mutating permissions for services as Amazon SageMaker Canvas adds support. */
    public static AmazonSageMakerCanvasAIServicesAccess = 'AmazonSageMakerCanvasAIServicesAccess';
    /** This policy grants permissions to use Amazon Bedrock in SageMaker Canvas by providing access to downstream services such as S3. */
    public static AmazonSageMakerCanvasBedrockAccess = 'AmazonSageMakerCanvasBedrockAccess';
    /** Provides full access to Amazon SageMaker resources and operations for data preparation in Canvas. The policy also provides select access to related services (e.g., S3, IAM, KMS, RDS, CloudWatch Logs, Redshift, Athena, Glue, EventBridge, Secrets Manager). This policy should be attached to the Amazon SageMaker Domain/User Profile execution role. */
    public static AmazonSageMakerCanvasDataPrepFullAccess = 'AmazonSageMakerCanvasDataPrepFullAccess';
    /** Allows Amazon SageMaker Canvas to create, manage and view endpoint details for endpoints created through Canvas. Allows Amazon SageMaker Canvas to retrieve endpoint invocation metrics from CloudWatch. */
    public static AmazonSageMakerCanvasDirectDeployAccess = 'service-role/AmazonSageMakerCanvasDirectDeployAccess';
    /** This policy grants permissions to Amazon EMR Serverless for services such as S3, used by Amazon SageMaker Canvas for large data processing. */
    public static AmazonSageMakerCanvasEMRServerlessExecutionRolePolicy = 'AmazonSageMakerCanvasEMRServerlessExecutionRolePolicy';
    /** This policy grants permissions commonly needed to use SageMaker Canvas with Amazon Forecast. */
    public static AmazonSageMakerCanvasForecastAccess = 'service-role/AmazonSageMakerCanvasForecastAccess';
    /** Provides full access to Amazon SageMaker Canvas resources and operations. The policy also provides select access to related services (e.g., S3, IAM, VPC, ECR, CloudWatch Logs, Redshift, Secrets Manager, and Forecast). This policy should be attached to the Amazon SageMaker Domain/User Profile execution role. */
    public static AmazonSageMakerCanvasFullAccess = 'AmazonSageMakerCanvasFullAccess';
    /** Provides permissions for Amazon SageMaker Canvas to use the SageMaker Data Science Assistant service. The Data Science Assistant currently uses both Amazon SageMaker and Amazon Q Developer to process user prompts. */
    public static AmazonSageMakerCanvasSMDataScienceAssistantAccess = 'AmazonSageMakerCanvasSMDataScienceAssistantAccess';
    /** This policy grants permissions commonly needed to use Amazon SageMaker Cluster. */
    public static AmazonSageMakerClusterInstanceRolePolicy = 'AmazonSageMakerClusterInstanceRolePolicy';
    /** Managed policy for Service Linked Role for Amazon SageMaker Core Services */
    public static AmazonSageMakerCoreServiceRolePolicy = 'aws-service-role/AmazonSageMakerCoreServiceRolePolicy';
    /** Provides permissions necessary for SageMaker Edge to create and manage a device fleet for the customer using the default cloud connection. */
    public static AmazonSageMakerEdgeDeviceFleetPolicy = 'service-role/AmazonSageMakerEdgeDeviceFleetPolicy';
    /** Provides permissions required to enable the offline store for an Amazon SageMaker FeatureStore feature group. */
    public static AmazonSageMakerFeatureStoreAccess = 'AmazonSageMakerFeatureStoreAccess';
    /** Provides full access to Amazon SageMaker via the AWS Management Console and SDK. Also provides select access to related services (e.g., S3, ECR, CloudWatch Logs). */
    public static AmazonSageMakerFullAccess = 'AmazonSageMakerFullAccess';
    /** This policy provide access to services that are commonly needed to use SageMaker geospatial. */
    public static AmazonSageMakerGeospatialExecutionRole = 'service-role/AmazonSageMakerGeospatialExecutionRole';
    /** This policy grants permissions that allow full access to Amazon SageMaker Geospatial through the AWS Management Console and SDK. */
    public static AmazonSageMakerGeospatialFullAccess = 'service-role/AmazonSageMakerGeospatialFullAccess';
    /** Provides access to AWS services that are required to run SageMaker GroundTruth Labeling job */
    public static AmazonSageMakerGroundTruthExecution = 'AmazonSageMakerGroundTruthExecution';
    /** This policy provides administrative privileges required for setting up SageMaker HyperPod observability. It enables access to Amazon Managed Prometheus, Amazon Managed Grafana and EKS Addons. The policy also includes broad access to Grafana HTTP APIs through ServiceAccountTokens across all Amazon Managed Grafana workspaces in your account. */
    public static AmazonSageMakerHyperPodObservabilityAdminAccess = 'AmazonSageMakerHyperPodObservabilityAdminAccess';
    /** This policy grants permissions to Amazon SageMaker HyperPod to related AWS services such as Amazon EKS, Amazon CloudWatch etc. */
    public static AmazonSageMakerHyperPodServiceRolePolicy = 'aws-service-role/AmazonSageMakerHyperPodServiceRolePolicy';
    /** This policy provides administrative permissions required to set up the SageMaker HyperPod training operator. It enables access to Amazon SageMaker HyperPod and EKS add-ons. The policy includes permissions to describe the SageMaker HyperPod resources in your account. */
    public static AmazonSageMakerHyperPodTrainingOperatorAccess = 'AmazonSageMakerHyperPodTrainingOperatorAccess';
    /** Provides access to create Amazon Augmented AI FlowDefinition resources against any Workteam. */
    public static AmazonSageMakerMechanicalTurkAccess = 'AmazonSageMakerMechanicalTurkAccess';
    /** This AWS managed policy grants permissions needed to use all Amazon SageMaker Governance features. The policy also provides select access to related services (e.g., S3, KMS). */
    public static AmazonSageMakerModelGovernanceUseAccess = 'AmazonSageMakerModelGovernanceUseAccess';
    /** This is a new managed policy for Model Registry in Sagemaker. This policy is a standalone policy that can be attached to the user role to access Model Registry related functionalities in Sagemaker. */
    public static AmazonSageMakerModelRegistryFullAccess = 'AmazonSageMakerModelRegistryFullAccess';
    /** Managed policy for Service Linked Role for Amazon SageMaker Notebooks */
    public static AmazonSageMakerNotebooksServiceRolePolicy = 'aws-service-role/AmazonSageMakerNotebooksServiceRolePolicy';
    /** Enables Amazon SageMaker partner app users to access applications, list available applications, launch application web UIs, and connect via the application SDK. */
    public static AmazonSageMakerPartnerAppsFullAccess = 'AmazonSageMakerPartnerAppsFullAccess';
    /** Service role policy used by the AWS APIGateway within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Lambda and others. */
    public static AmazonSageMakerPartnerServiceCatalogProductsApiGatewayServiceRolePolicy = 'service-role/AmazonSageMakerPartnerServiceCatalogProductsApiGatewayServiceRolePolicy';
    /** Service role policy used by the AWS CloudFormation within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including Lambda, APIGateway and others. */
    public static AmazonSageMakerPartnerServiceCatalogProductsCloudFormationServiceRolePolicy = 'service-role/AmazonSageMakerPartnerServiceCatalogProductsCloudFormationServiceRolePolicy';
    /** Service role policy used by the AWS Lambda within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Secrets Manager and others. */
    public static AmazonSageMakerPartnerServiceCatalogProductsLambdaServiceRolePolicy = 'service-role/AmazonSageMakerPartnerServiceCatalogProductsLambdaServiceRolePolicy';
    /** This Amazon Managed Policy grants permissions commonly needed for use with Callback steps and Lambda steps in SageMaker Model Building Pipelines. It is added to the AmazonSageMaker-ExecutionRole that can be created when setting up SageMaker Studio. It can also be attached to any other role that will be used for authoring or executing pipelines. */
    public static AmazonSageMakerPipelinesIntegrations = 'AmazonSageMakerPipelinesIntegrations';
    /** This policy will be used By SageMaker Unified Studios to create VPC related resources for QuickSight */
    public static AmazonSageMakerQuickSightVPCPolicy = 'service-role/AmazonSageMakerQuickSightVPCPolicy';
    /** Provides read only access to Amazon SageMaker via the AWS Management Console and SDK. */
    public static AmazonSageMakerReadOnly = 'AmazonSageMakerReadOnly';
    /** Service role policy used by the AWS APIGateway within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including CloudWatch Logs and others. */
    public static AmazonSageMakerServiceCatalogProductsApiGatewayServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsApiGatewayServiceRolePolicy';
    /** Service role policy used by the AWS CloudFormation within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including SageMaker and others. */
    public static AmazonSageMakerServiceCatalogProductsCloudformationServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsCloudformationServiceRolePolicy';
    /** Service role policy used by the AWS CodeBuild within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including CodePipeline, CodeBuild and others. */
    public static AmazonSageMakerServiceCatalogProductsCodeBuildServiceRolePolicy = 'AmazonSageMakerServiceCatalogProductsCodeBuildServiceRolePolicy';
    /** Service role policy used by the AWS CodePipeline within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including CodePipeline, CodeBuild and others. */
    public static AmazonSageMakerServiceCatalogProductsCodePipelineServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsCodePipelineServiceRolePolicy';
    /** Service role policy used by the AWS CloudWatch Events within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including CodePipeline and others. */
    public static AmazonSageMakerServiceCatalogProductsEventsServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsEventsServiceRolePolicy';
    /** Service role policy used by the AWS Firehose within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Firehose and others. */
    public static AmazonSageMakerServiceCatalogProductsFirehoseServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsFirehoseServiceRolePolicy';
    /** Service role policy used by the AWS Glue within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Glue, S3 and others. */
    public static AmazonSageMakerServiceCatalogProductsGlueServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsGlueServiceRolePolicy';
    /** Service role policy used by the AWS Lambda within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including ECR, S3 and others. */
    public static AmazonSageMakerServiceCatalogProductsLambdaServiceRolePolicy = 'service-role/AmazonSageMakerServiceCatalogProductsLambdaServiceRolePolicy';
    /** This Amazon Managed Policy provides the necessary permissions to create and manage SageMaker Training Plans. It allows users to create Training Plans and Reserved Capacities, describe existing Training Plans, and perform search and listing operations. */
    public static AmazonSageMakerTrainingPlanCreateAccess = 'AmazonSageMakerTrainingPlanCreateAccess';
    /** Provides full access to Amazon Security Lake and related services needed to administer Security Lake. */
    public static AmazonSecurityLakeAdministrator = 'AmazonSecurityLakeAdministrator';
    /** Policy for Amazon SecurityLake meta store manager lambda which allows the access to cloudwatch, S3, Glue and SQS. */
    public static AmazonSecurityLakeMetastoreManager = 'service-role/AmazonSecurityLakeMetastoreManager';
    /** Amazon Security Lake creates IAM roles for third-party custom sources to write data to a data lake and for third-party subscribers to consume data from a data lake, and uses this policy when creating these roles to define the boundary of their permissions. */
    public static AmazonSecurityLakePermissionsBoundary = 'AmazonSecurityLakePermissionsBoundary';
    /** Provides full access to Amazon SES via the AWS Management Console. */
    public static AmazonSESFullAccess = 'AmazonSESFullAccess';
    /** Provides read only access to Amazon SES via the AWS Management Console. */
    public static AmazonSESReadOnlyAccess = 'AmazonSESReadOnlyAccess';
    /** Allows SES to publish Amazon CloudWatch basic monitoring metrics on behalf of your SES resources */
    public static AmazonSESServiceRolePolicy = 'aws-service-role/AmazonSESServiceRolePolicy';
    /** Provides full access to Amazon SNS via the AWS Management Console. */
    public static AmazonSNSFullAccess = 'AmazonSNSFullAccess';
    /** Provides read only access to Amazon SNS via the AWS Management Console. */
    public static AmazonSNSReadOnlyAccess = 'AmazonSNSReadOnlyAccess';
    /** Default policy for Amazon SNS service role. */
    public static AmazonSNSRole = 'service-role/AmazonSNSRole';
    /** Provides full access to Amazon SQS via the AWS Management Console. */
    public static AmazonSQSFullAccess = 'AmazonSQSFullAccess';
    /** Provides read only access to Amazon SQS via the AWS Management Console. */
    public static AmazonSQSReadOnlyAccess = 'AmazonSQSReadOnlyAccess';
    /** Provides access to view automation executions and send approval decisions to automation waiting for approval */
    public static AmazonSSMAutomationApproverAccess = 'AmazonSSMAutomationApproverAccess';
    /** Provides permissions for EC2 Automation service to execute activities defined within Automation documents */
    public static AmazonSSMAutomationRole = 'service-role/AmazonSSMAutomationRole';
    /** This policy allows SSM Agent to access Directory Service on behalf of the customer for domain-join the managed instance. */
    public static AmazonSSMDirectoryServiceAccess = 'AmazonSSMDirectoryServiceAccess';
    /** Provides full access to Amazon SSM. */
    public static AmazonSSMFullAccess = 'AmazonSSMFullAccess';
    /**  Service Role to be used for EC2 Maintenance Window */
    public static AmazonSSMMaintenanceWindowRole = 'service-role/AmazonSSMMaintenanceWindowRole';
    /** This policy enables AWS Systems Manager functionality on EC2 instances. */
    public static AmazonSSMManagedEC2InstanceDefaultPolicy = 'AmazonSSMManagedEC2InstanceDefaultPolicy';
    /** The policy for Amazon EC2 Role to enable AWS Systems Manager service core functionality. */
    public static AmazonSSMManagedInstanceCore = 'AmazonSSMManagedInstanceCore';
    /** Provide access to child instances for patch association operation. */
    public static AmazonSSMPatchAssociation = 'AmazonSSMPatchAssociation';
    /** Provides read only access to Amazon SSM. */
    public static AmazonSSMReadOnlyAccess = 'AmazonSSMReadOnlyAccess';
    /** Provides access to AWS Resources managed or used by Amazon SSM */
    public static AmazonSSMServiceRolePolicy = 'aws-service-role/AmazonSSMServiceRolePolicy';
    /** Access to all Amazon Textract APIs */
    public static AmazonTextractFullAccess = 'AmazonTextractFullAccess';
    /** Allows Textract to call AWS services on your behalf. */
    public static AmazonTextractServiceRole = 'service-role/AmazonTextractServiceRole';
    /** Provides full access to manage Amazon Timestream using the AWS Management Console. Note that this policy also grants permissions for certain KMS operations, and operations to manage your saved queries. If using Customer managed CMK, please refer to documentation for additional permissions needed. */
    public static AmazonTimestreamConsoleFullAccess = 'AmazonTimestreamConsoleFullAccess';
    /** Provides full access to Amazon Timestream. Note that this policy also grants certain KMS operation access. If using Customer managed CMK, please refer to documentation for additional permissions needed. */
    public static AmazonTimestreamFullAccess = 'AmazonTimestreamFullAccess';
    /** Provides full administrative access to create, update, delete and list Amazon Timestream InfluxDB instances and create and list parameter groups. Please refer to documentation for additional permissions needed. */
    public static AmazonTimestreamInfluxDBFullAccess = 'AmazonTimestreamInfluxDBFullAccess';
    /** Provides administrative access to manage Amazon Timestream InfluxDB instances and parameter groups except marketplace operations. */
    public static AmazonTimestreamInfluxDBFullAccessWithoutMarketplaceAccess = 'AmazonTimestreamInfluxDBFullAccessWithoutMarketplaceAccess';
    /** Provides full administrative access to create, update, delete and list Amazon Timestream InfluxDB instances and create and list parameter groups. Please refer to documentation for additional permissions needed. */
    public static AmazonTimestreamInfluxDBServiceRolePolicy = 'aws-service-role/AmazonTimestreamInfluxDBServiceRolePolicy';
    /** Provides read only access to Amazon Timestream. Policy also provides permission to cancel any running query. If using Customer managed CMK, please refer to documentation for additional permissions needed. */
    public static AmazonTimestreamReadOnlyAccess = 'AmazonTimestreamReadOnlyAccess';
    /** Provides full access to Amazon Transcribe operations */
    public static AmazonTranscribeFullAccess = 'AmazonTranscribeFullAccess';
    /** Provides access to read only operation for Amazon Transcribe */
    public static AmazonTranscribeReadOnlyAccess = 'AmazonTranscribeReadOnlyAccess';
    /** Provides full access to Verified Permissions */
    public static AmazonVerifiedPermissionsFullAccess = 'AmazonVerifiedPermissionsFullAccess';
    /** Provides read-only access to the Verified Permissions service. */
    public static AmazonVerifiedPermissionsReadOnlyAccess = 'AmazonVerifiedPermissionsReadOnlyAccess';
    /** Provides access to create network interfaces and attach them to cross-account resources */
    public static AmazonVPCCrossAccountNetworkInterfaceOperations = 'AmazonVPCCrossAccountNetworkInterfaceOperations';
    /** Provides full access to Amazon VPC via the AWS Management Console. */
    public static AmazonVPCFullAccess = 'AmazonVPCFullAccess';
    /** Provides permissions to describe AWS resources, run Network Access Analyzer, and create or delete tags on Network Insights Access Scope and Network Insights Access Scope Analysis. */
    public static AmazonVPCNetworkAccessAnalyzerFullAccessPolicy = 'AmazonVPCNetworkAccessAnalyzerFullAccessPolicy';
    /** Provides permissions to describe AWS resources, run Reachability Analyzer, and create or delete tags on Network Insights Path and Network Insights Analysis. */
    public static AmazonVPCReachabilityAnalyzerFullAccessPolicy = 'AmazonVPCReachabilityAnalyzerFullAccessPolicy';
    /** This policy is attached to the role IAMRoleForReachabilityAnalyzerCrossAccountResourceAccess. This role is deployed to the member accounts in an organization when the management account enables trusted access for Reachability Analyzer. It provides permissions to view resources from across your organization using the Reachability Analyzer console. */
    public static AmazonVPCReachabilityAnalyzerPathComponentReadPolicy = 'AmazonVPCReachabilityAnalyzerPathComponentReadPolicy';
    /** Provides read only access to Amazon VPC via the AWS Management Console. */
    public static AmazonVPCReadOnlyAccess = 'AmazonVPCReadOnlyAccess';
    /** Provides full access to Amazon WorkDocs via the AWS Management Console */
    public static AmazonWorkDocsFullAccess = 'AmazonWorkDocsFullAccess';
    /** Provides read only access to Amazon WorkDocs via the AWS Management Console */
    public static AmazonWorkDocsReadOnlyAccess = 'AmazonWorkDocsReadOnlyAccess';
    /** Enables access to AWS Services and Resources used or managed by Amazon WorkMail Events */
    public static AmazonWorkMailEventsServiceRolePolicy = 'aws-service-role/AmazonWorkMailEventsServiceRolePolicy';
    /** Provides full access to WorkMail, Directory Service, SES, EC2 and read access to KMS metadata. */
    public static AmazonWorkMailFullAccess = 'AmazonWorkMailFullAccess';
    /** Full access to the WorkMail Message Flow APIs */
    public static AmazonWorkMailMessageFlowFullAccess = 'AmazonWorkMailMessageFlowFullAccess';
    /** Read only access to WorkMail messages for the GetRawMessageContent API */
    public static AmazonWorkMailMessageFlowReadOnlyAccess = 'AmazonWorkMailMessageFlowReadOnlyAccess';
    /** Provides read only access to WorkMail and SES. */
    public static AmazonWorkMailReadOnlyAccess = 'AmazonWorkMailReadOnlyAccess';
    /** Provides access to Amazon WorkSpaces administrative actions via AWS SDK and CLI. */
    public static AmazonWorkSpacesAdmin = 'AmazonWorkSpacesAdmin';
    /** Provides administrator access for packaging an application in Amazon WorkSpaces Application Manager. */
    public static AmazonWorkSpacesApplicationManagerAdminAccess = 'AmazonWorkSpacesApplicationManagerAdminAccess';
    /** This managed policy provides full administrative access to AWS Certificate Manager Private CA resources in your AWS account for certificate-based authentication. */
    public static AmazonWorkspacesPCAAccess = 'AmazonWorkspacesPCAAccess';
    /** This policy provides AWS WorkSpaces service access to required customer account resources for launching Workspaces Pools */
    public static AmazonWorkSpacesPoolServiceAccess = 'AmazonWorkSpacesPoolServiceAccess';
    /** Provides read-only access to Amazon WorkSpaces Secure Browser and its dependencies through the AWS Management Console, SDK, and CLI. */
    public static AmazonWorkSpacesSecureBrowserReadOnly = 'AmazonWorkSpacesSecureBrowserReadOnly';
    /** Provides access to Amazon WorkSpaces backend service to perform Workspace Self Service actions */
    public static AmazonWorkSpacesSelfServiceAccess = 'AmazonWorkSpacesSelfServiceAccess';
    /** Provides customer account access to AWS WorkSpaces service for launching a Workspace. */
    public static AmazonWorkSpacesServiceAccess = 'AmazonWorkSpacesServiceAccess';
    /** Provides full access to Amazon WorkSpaces Thin Client as well as limited access to required related services */
    public static AmazonWorkSpacesThinClientFullAccess = 'AmazonWorkSpacesThinClientFullAccess';
    /** Enables access to AWS Services and Resources used or managed by Amazon WorkSpaces Thin Client Monitoring */
    public static AmazonWorkSpacesThinClientMonitoringServiceRolePolicy = 'aws-service-role/AmazonWorkSpacesThinClientMonitoringServiceRolePolicy';
    /** Provides read-only access to Amazon WorkSpaces Thin Client and its dependencies */
    public static AmazonWorkSpacesThinClientReadOnlyAccess = 'AmazonWorkSpacesThinClientReadOnlyAccess';
    /** Provides read-only access to Amazon WorkSpaces Web and its dependencies through the AWS Management Console, SDK, and CLI. */
    public static AmazonWorkSpacesWebReadOnly = 'AmazonWorkSpacesWebReadOnly';
    /** Enables access to AWS Services and Resources used or managed by Amazon WorkSpaces Web */
    public static AmazonWorkSpacesWebServiceRolePolicy = 'aws-service-role/AmazonWorkSpacesWebServiceRolePolicy';
    /** Provides full access to Amazon Zocalo. */
    public static AmazonZocaloFullAccess = 'AmazonZocaloFullAccess';
    /** Provides read only access to Amazon Zocalo */
    public static AmazonZocaloReadOnlyAccess = 'AmazonZocaloReadOnlyAccess';
    /** Provides Amplify full access permissions to deploy Amplify backend resources (AWS AppSync, Amazon Cognito, Amazon S3 and other related services) via the AWS Cloud Development Kit (AWS CDK) */
    public static AmplifyBackendDeployFullAccess = 'service-role/AmplifyBackendDeployFullAccess';
    /** Allows API Gateway to manage associated AWS Resources on behalf of the customer. */
    public static APIGatewayServiceRolePolicy = 'aws-service-role/APIGatewayServiceRolePolicy';
    /** Allows AppIntegrations to manage AppFlow resources and publish CloudWatch metric data on your behalf. */
    public static AppIntegrationsServiceLinkedRolePolicy = 'aws-service-role/AppIntegrationsServiceLinkedRolePolicy';
    /** Policy to enable Application Autoscaling for Amazon AppStream */
    public static ApplicationAutoScalingForAmazonAppStreamAccess = 'service-role/ApplicationAutoScalingForAmazonAppStreamAccess';
    /** Enables access to AWS Services and Resources used or managed by Application Discovery Service Continuous Export feature */
    public static ApplicationDiscoveryServiceContinuousExportServiceRolePolicy = 'aws-service-role/ApplicationDiscoveryServiceContinuousExportServiceRolePolicy';
    /** Allows AWS AppRunner Networking to manage related AWS resources on your behalf. */
    public static AppRunnerNetworkingServiceRolePolicy = 'aws-service-role/AppRunnerNetworkingServiceRolePolicy';
    /** Allows AWS AppRunner to manage related AWS resources on your behalf. */
    public static AppRunnerServiceRolePolicy = 'aws-service-role/AppRunnerServiceRolePolicy';
    /** Allows AppStudio to manage associated AWS resources on your behalf. */
    public static AppStudioServiceRolePolicy = 'aws-service-role/AppStudioServiceRolePolicy';
    /** Policy for Amazon Aurora DSQL Service Linked Role */
    public static AuroraDsqlServiceLinkedRolePolicy = 'aws-service-role/AuroraDsqlServiceLinkedRolePolicy';
    /** Provides full access to Auto Scaling via the AWS Management Console. */
    public static AutoScalingConsoleFullAccess = 'AutoScalingConsoleFullAccess';
    /** Provides read-only access to Auto Scaling via the AWS Management Console. */
    public static AutoScalingConsoleReadOnlyAccess = 'AutoScalingConsoleReadOnlyAccess';
    /** Provides full access to Auto Scaling. */
    public static AutoScalingFullAccess = 'AutoScalingFullAccess';
    /** Default policy for the AutoScaling Notification Access service role. */
    public static AutoScalingNotificationAccessRole = 'service-role/AutoScalingNotificationAccessRole';
    /** Provides read-only access to Auto Scaling. */
    public static AutoScalingReadOnlyAccess = 'AutoScalingReadOnlyAccess';
    /** Enables access to AWS Services and Resources used or managed by Auto Scaling */
    public static AutoScalingServiceRolePolicy = 'aws-service-role/AutoScalingServiceRolePolicy';
    /** Default policy for AWS Config service role. Provides permissions required for AWS Config to track changes to your AWS resources. */
    public static AWSConfigRole = 'service-role/AWS_ConfigRole';
    /** Provides permissions to access the SSM Diagnosis S3 bucket for diagnosis and remediation of issues. */
    public static AWSSSMAutomationDiagnosisBucketPolicy = 'AWS-SSM-Automation-DiagnosisBucketPolicy';
    /** Provide permission for Diagnosing issues with SSM services by executing activities defined within Automation Documents, primarily used for running the Automation documents in a cross-account cross-region setup by triggering child automations within member accounts. */
    public static AWSSSMDiagnosisAutomationAdministrationRolePolicy = 'AWS-SSM-DiagnosisAutomation-AdministrationRolePolicy';
    /** Provide permission for Diagnosing issues with SSM services by executing activities defined within Automation Documents, primarily used for running the Automation documents in a target account/region setup by diagnosing SSM service health across all nodes. */
    public static AWSSSMDiagnosisAutomationExecutionRolePolicy = 'AWS-SSM-DiagnosisAutomation-ExecutionRolePolicy';
    /** Provides permissions for operational accounts to diagnose unmanaged nodes by providing Organisation specific permissions required by SSM automation to pull the list of member accounts within a root of an Organisation to trigger cross-account cross-region execution by allowing assuming Execution roles in target account/region. */
    public static AWSSSMDiagnosisAutomationOperationalAccountAdministrationRolePolicy = 'AWS-SSM-DiagnosisAutomation-OperationalAccountAdministrationRolePolicy';
    /** Provide permission for Remediating issues with SSM services by executing activities defined within Automation Documents, primarily used for running the Automation documents in a cross-account cross-region setup by triggering child automations within member accounts. */
    public static AWSSSMRemediationAutomationAdministrationRolePolicy = 'AWS-SSM-RemediationAutomation-AdministrationRolePolicy';
    /** Provides permissions for Remediating issues with SSM services by executing activities defined within Automation Documents, primarily used for running the Automation documents in a target account/region setup by remediating SSM services health across all nodes. */
    public static AWSSSMRemediationAutomationExecutionRolePolicy = 'AWS-SSM-RemediationAutomation-ExecutionRolePolicy';
    /** Provides permissions for operational accounts to Remediate unmanaged nodes by providing Organisation specific permissions required by SSM automation to pull the list of member accounts within a root of an Organisation to trigger cross-account cross-region execution by allowing assuming Execution roles in target account/region. */
    public static AWSSSMRemediationAutomationOperationalAccountAdministrationRolePolicy = 'AWS-SSM-RemediationAutomation-OperationalAccountAdministrationRolePolicy';
    /** Allows users to access the Account Activity page. */
    public static AWSAccountActivityAccess = 'AWSAccountActivityAccess';
    /** Provides full access to AWS Account Management. */
    public static AWSAccountManagementFullAccess = 'AWSAccountManagementFullAccess';
    /** Provides read-only access to AWS Account Management */
    public static AWSAccountManagementReadOnlyAccess = 'AWSAccountManagementReadOnlyAccess';
    /** Allows users to access the Account Usage Report page. */
    public static AWSAccountUsageReportAccess = 'AWSAccountUsageReportAccess';
    /** Provides access for the Discovery Agentless Connector to register with AWS Application Discovery Service. */
    public static AWSAgentlessDiscoveryService = 'AWSAgentlessDiscoveryService';
    /** Provides full access to the AWS AppFabric service and read only access to dependent services such as S3, Kinesis, KMS. */
    public static AWSAppFabricFullAccess = 'AWSAppFabricFullAccess';
    /** Provides read only access to the AWS AppFabric */
    public static AWSAppFabricReadOnlyAccess = 'AWSAppFabricReadOnlyAccess';
    /** Provides AppFabric access to AWS resources on your behalf */
    public static AWSAppFabricServiceRolePolicy = 'aws-service-role/AWSAppFabricServiceRolePolicy';
    /** Policy granting permissions to Application Auto Scaling to access AppStream and CloudWatch. */
    public static AWSApplicationAutoscalingAppStreamFleetPolicy = 'aws-service-role/AWSApplicationAutoscalingAppStreamFleetPolicy';
    /** Policy granting permissions to Application Auto Scaling to access Cassandra and CloudWatch. */
    public static AWSApplicationAutoscalingCassandraTablePolicy = 'aws-service-role/AWSApplicationAutoscalingCassandraTablePolicy';
    /** Policy granting permissions to Application Auto Scaling to access Comprehend and CloudWatch. */
    public static AWSApplicationAutoscalingComprehendEndpointPolicy = 'aws-service-role/AWSApplicationAutoscalingComprehendEndpointPolicy';
    /** Policy granting permissions to Application Auto Scaling to access APIGateway and CloudWatch for custom resource scaling */
    public static AWSApplicationAutoScalingCustomResourcePolicy = 'aws-service-role/AWSApplicationAutoScalingCustomResourcePolicy';
    /** Policy granting permissions to Application Auto Scaling to access DynamoDB and CloudWatch. */
    public static AWSApplicationAutoscalingDynamoDBTablePolicy = 'aws-service-role/AWSApplicationAutoscalingDynamoDBTablePolicy';
    /** Policy granting permissions to Application Auto Scaling to access EC2 Spot Fleet and CloudWatch. */
    public static AWSApplicationAutoscalingEC2SpotFleetRequestPolicy = 'aws-service-role/AWSApplicationAutoscalingEC2SpotFleetRequestPolicy';
    /** Policy granting permissions to Application Auto Scaling to access EC2 Container Service and CloudWatch. */
    public static AWSApplicationAutoscalingECSServicePolicy = 'aws-service-role/AWSApplicationAutoscalingECSServicePolicy';
    /** Policy granting permissions to Application Auto Scaling to access Amazon ElastiCache and Amazon CloudWatch. */
    public static AWSApplicationAutoscalingElastiCacheRGPolicy = 'aws-service-role/AWSApplicationAutoscalingElastiCacheRGPolicy';
    /** Policy granting permissions to Application Auto Scaling to access Elastic Map Reduce and CloudWatch. */
    public static AWSApplicationAutoscalingEMRInstanceGroupPolicy = 'aws-service-role/AWSApplicationAutoscalingEMRInstanceGroupPolicy';
    /** Policy granting permissions to Application Auto Scaling to access Managed Streaming for Apache Kafka and CloudWatch. */
    public static AWSApplicationAutoscalingKafkaClusterPolicy = 'aws-service-role/AWSApplicationAutoscalingKafkaClusterPolicy';
    /** Policy granting permissions to Application Auto Scaling to access Lambda and CloudWatch. */
    public static AWSApplicationAutoscalingLambdaConcurrencyPolicy = 'aws-service-role/AWSApplicationAutoscalingLambdaConcurrencyPolicy';
    /** Policy granting permissions to Application Auto Scaling to access Amazon Neptune and Amazon CloudWatch. */
    public static AWSApplicationAutoscalingNeptuneClusterPolicy = 'aws-service-role/AWSApplicationAutoscalingNeptuneClusterPolicy';
    /** Policy granting permissions to Application Auto Scaling to access RDS and CloudWatch. */
    public static AWSApplicationAutoscalingRDSClusterPolicy = 'aws-service-role/AWSApplicationAutoscalingRDSClusterPolicy';
    /** Policy granting permissions to Application Auto Scaling to access SageMaker and CloudWatch. */
    public static AWSApplicationAutoscalingSageMakerEndpointPolicy = 'aws-service-role/AWSApplicationAutoscalingSageMakerEndpointPolicy';
    /** Policy granting permissions to Application Auto Scaling to access Amazon WorkSpaces and Amazon CloudWatch. */
    public static AWSApplicationAutoscalingWorkSpacesPoolPolicy = 'aws-service-role/AWSApplicationAutoscalingWorkSpacesPoolPolicy';
    /** Provides access for the Discovery Agent to register with AWS Application Discovery Service. */
    public static AWSApplicationDiscoveryAgentAccess = 'AWSApplicationDiscoveryAgentAccess';
    /** Allows Application Discovery Service Agentless Collectors to auto update, register, and communicate with Application Discovery Service */
    public static AWSApplicationDiscoveryAgentlessCollectorAccess = 'AWSApplicationDiscoveryAgentlessCollectorAccess';
    /** Provides full access to view and tag Configuration Items maintained by the AWS Application Discovery Service */
    public static AWSApplicationDiscoveryServiceFullAccess = 'AWSApplicationDiscoveryServiceFullAccess';
    /** This policy allows installing the AWS Replication Agent, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide when installing the AWS Replication Agent. */
    public static AWSApplicationMigrationAgentInstallationPolicy = 'AWSApplicationMigrationAgentInstallationPolicy';
    /** This policy allows installing and using the AWS Replication Agent, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide when installing the AWS Replication Agent. */
    public static AWSApplicationMigrationAgentPolicy = 'AWSApplicationMigrationAgentPolicy';
    /** This policy allows using the AWS Replication Agent, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. We do not recommend that you attach this policy to your IAM users or roles. */
    public static AWSApplicationMigrationAgentPolicyV2 = 'service-role/AWSApplicationMigrationAgentPolicy_v2';
    /** This policy allows the Application Migration Service (MGN) Conversion Server, which are EC2 instances launched by Application Migration Service, to communicate with the MGN service. An IAM role with this policy is attached (as an EC2 Instance Profile) by MGN to the MGN Conversion Servers, which are automatically launched and terminated by MGN, when needed. We do not recommend that you attach this policy to your IAM users or roles. MGN Conversion Servers are used by Application Migration Service when users choose to launch Test or Cutover instances using the MGN console, CLI, or API. */
    public static AWSApplicationMigrationConversionServerPolicy = 'service-role/AWSApplicationMigrationConversionServerPolicy';
    /** This policy provides Amazon EC2 operations required to use Application Migration Service (MGN) to launch the migrated servers as EC2 instances. Attach this policy to your IAM users or roles. */
    public static AWSApplicationMigrationEC2Access = 'AWSApplicationMigrationEC2Access';
    /** This policy provides permissions to all public APIs of AWS Application Migration Service (MGN), as well as permissions to read KMS key information. Attach this policy to your IAM users or roles. */
    public static AWSApplicationMigrationFullAccess = 'AWSApplicationMigrationFullAccess';
    /** This policy allows AWS Application Migration Service (MGN) to send meta-data about the progress of servers being migrated using MGN to AWS Migration Hub (MGH). MGN automatically creates an IAM role with this policy attached, and assumes this role. We do not recommend that you attach this policy to your IAM users or roles. */
    public static AWSApplicationMigrationMGHAccess = 'service-role/AWSApplicationMigrationMGHAccess';
    /** This policy provides permissions to all read-only public APIs of Application Migration Service (MGN), as well as some read-only APIs of other AWS services that are required in order to make full read-only use of the MGN console. Attach this policy to your IAM users or roles. */
    public static AWSApplicationMigrationReadOnlyAccess = 'AWSApplicationMigrationReadOnlyAccess';
    /** This policy allows the Application Migration Service (MGN) Replication Servers, which are EC2 instances launched by Application Migration Service - to communicate with the MGN service, and to create EBS snapshots in your AWS account. An IAM role with this policy is attached (as an EC2 Instance Profile) by Application Migration Service to the MGN Replication Servers which are automatically launched and terminated by MGN, as needed. MGN Replication Servers are used to facilitate data replication from your external servers to AWS, as part of the migration process managed using MGN. We do not recommend that you attach this policy to your IAM users or roles. */
    public static AWSApplicationMigrationReplicationServerPolicy = 'service-role/AWSApplicationMigrationReplicationServerPolicy';
    /** This policy allows installing and using the AWS Replication Agent, which is used by AWS Application Migration Service (AWS MGN) to migrate source servers that run on EC2 (cross-Region or cross-AZ). An IAM role with this policy should be attached (as an EC2 Instance Profile) to the EC2 Instances. */
    public static AWSApplicationMigrationServiceEc2InstancePolicy = 'AWSApplicationMigrationServiceEc2InstancePolicy';
    /** Allows AWS application Migration Service to create and manage AWS resources on your behalf. */
    public static AWSApplicationMigrationServiceRolePolicy = 'aws-service-role/AWSApplicationMigrationServiceRolePolicy';
    /** This policy provides access to Amazon SSM operations required to use Application Migration Service (MGN) to execute custom post migration command SSM documents. Attach this policy to your IAM users or roles. */
    public static AWSApplicationMigrationSSMAccess = 'AWSApplicationMigrationSSMAccess';
    /** This policy allows installing and using the AWS VCenter Client, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide when installing the AWS VCenter Client. */
    public static AWSApplicationMigrationVCenterClientPolicy = 'AWSApplicationMigrationVCenterClientPolicy';
    /** App Mesh Envoy policy for accessing Virtual Node configuration. */
    public static AWSAppMeshEnvoyAccess = 'AWSAppMeshEnvoyAccess';
    /** Provides full access to the AWS App Mesh APIs and Management Console. */
    public static AWSAppMeshFullAccess = 'AWSAppMeshFullAccess';
    /** App Mesh Preview Envoy policy for accessing Virtual Node configuration. */
    public static AWSAppMeshPreviewEnvoyAccess = 'AWSAppMeshPreviewEnvoyAccess';
    /** Enables access to AWS Services and Resources used or managed by AWS App Mesh */
    public static AWSAppMeshPreviewServiceRolePolicy = 'aws-service-role/AWSAppMeshPreviewServiceRolePolicy';
    /** Provides read-only access to the AWS App Mesh APIs and Management Console. */
    public static AWSAppMeshReadOnly = 'AWSAppMeshReadOnly';
    /** Enables access to AWS Services and Resources used or managed by AWS AppMesh */
    public static AWSAppMeshServiceRolePolicy = 'aws-service-role/AWSAppMeshServiceRolePolicy';
    /** Grants permissions to all App Runner actions. */
    public static AWSAppRunnerFullAccess = 'AWSAppRunnerFullAccess';
    /** Grants permissions to list and view details about App Runner resources. */
    public static AWSAppRunnerReadOnlyAccess = 'AWSAppRunnerReadOnlyAccess';
    /** AWS App Runner service policy that grants read permissions to Amazon ECR resources in the customer's account. Use it in a role that is passed to App Runner when creating or updating an App Runner service. */
    public static AWSAppRunnerServicePolicyForECRAccess = 'service-role/AWSAppRunnerServicePolicyForECRAccess';
    /** Provides administrative access to the AppSync service, though not enough to access via the console. */
    public static AWSAppSyncAdministrator = 'AWSAppSyncAdministrator';
    /** Provides full invoking access to the AppSync service - both through the console and independently */
    public static AWSAppSyncInvokeFullAccess = 'AWSAppSyncInvokeFullAccess';
    /** Allows AppSync to push logs to user's CloudWatch account. */
    public static AWSAppSyncPushToCloudWatchLogs = 'service-role/AWSAppSyncPushToCloudWatchLogs';
    /** Provides access to create, update, and query the schema. */
    public static AWSAppSyncSchemaAuthor = 'AWSAppSyncSchemaAuthor';
    /** Enables access to AWS services and resources used or managed by AppSync */
    public static AWSAppSyncServiceRolePolicy = 'aws-service-role/AWSAppSyncServiceRolePolicy';
    /** Allows AWS Artifact read-only access to operations in AWS Organizations. */
    public static AWSArtifactAccountSync = 'service-role/AWSArtifactAccountSync';
    /** This policy grants full permissions to list, download, accept, and terminate AWS Artifact agreements. It also includes permissions to list and enable AWS service access in the Organization service, as well as describe the organization details. Additionally, the policy provides the ability to check if the required service-linked role exists and creates one if it doesn't */
    public static AWSArtifactAgreementsFullAccess = 'AWSArtifactAgreementsFullAccess';
    /** This policy grants read-only access to list the AWS Artifact service agreements and to download the accepted agreements.. It also includes permissions to list as well as describe the organization details. Additionally, the policy provides the ability to check if the required service-linked role exists. */
    public static AWSArtifactAgreementsReadOnlyAccess = 'AWSArtifactAgreementsReadOnlyAccess';
    /** Provides read-only access to the AWS Artifact service reports. */
    public static AWSArtifactReportsReadOnlyAccess = 'AWSArtifactReportsReadOnlyAccess';
    /** Allows AWS Artifact to gather information about an organization via AWS Organizations service. */
    public static AWSArtifactServiceRolePolicy = 'aws-service-role/AWSArtifactServiceRolePolicy';
    /** Provides administrative access to enable or disable AWS Audit Manager, update settings, and manage assessments, controls, and frameworks */
    public static AWSAuditManagerAdministratorAccess = 'AWSAuditManagerAdministratorAccess';
    /** Enables access to AWS Services and Resources used or managed by AWS Audit Manager */
    public static AWSAuditManagerServiceRolePolicy = 'aws-service-role/AWSAuditManagerServiceRolePolicy';
    /** Policy granting permissions to AWS Auto Scaling to periodically forecast capacity and generate scheduled scaling actions for Auto Scaling groups in a scaling plan */
    public static AWSAutoScalingPlansEC2AutoScalingPolicy = 'aws-service-role/AWSAutoScalingPlansEC2AutoScalingPolicy';
    /** This policy grants permissions for users to create controls and frameworks that define their expectations for AWS Backup resources and activities, and to audit AWS Backup resources and activities against their defined controls and frameworks. This policy grants permissions to AWS Config and similar services to describe user expectations perform the audits. This policy also grants permissions to deliver audit reports to S3 and similar services, and enables users to find and open their audit reports. */
    public static AWSBackupAuditAccess = 'AWSBackupAuditAccess';
    /** This policy allows the AWS Backint agent to complete backup data transfer with AWS Backup Storage plane. Attach this policy to roles assumed by EC2 Instances running SAP HANA with the Backint agent. */
    public static AWSBackupDataTransferAccess = 'AWSBackupDataTransferAccess';
    /** This policy is for backup administrators, granting full access to AWS Backup operations, including creating or editing backup plans, assigning AWS resources to backup plans, deleting backups, and restoring backups. */
    public static AWSBackupFullAccess = 'AWSBackupFullAccess';
    /** Provides AWS BackupGateway permission to sync the metadata of Virtual Machines on your behalf */
    public static AWSBackupGatewayServiceRolePolicyForVirtualMachineMetadataSync = 'service-role/AWSBackupGatewayServiceRolePolicyForVirtualMachineMetadataSync';
    /** This policy grants users permissions to assign AWS resources to backup plans, create on-demand backups, and restore backups. This policy does not allow the user to create or edit backup plans or to delete scheduled backups after they are created. */
    public static AWSBackupOperatorAccess = 'AWSBackupOperatorAccess';
    /** This policy is for backup administators who use cross-account backup management to manage backups for the organization. */
    public static AWSBackupOrganizationAdminAccess = 'AWSBackupOrganizationAdminAccess';
    /** Provides AWS Backup permission to restore a backup of SAP HANA on Amazon EC2 */
    public static AWSBackupRestoreAccessForSAPHANA = 'AWSBackupRestoreAccessForSAPHANA';
    /** The search operator role has access to create backup indexes, create searches of backup metadata that has been indexed. This policy contains the necessary permissions for these search operator functions. */
    public static AWSBackupSearchOperatorAccess = 'AWSBackupSearchOperatorAccess';
    /** Provides AWS Backup permission to create backups on your behalf across AWS services */
    public static AWSBackupServiceLinkedRolePolicyForBackup = 'aws-service-role/AWSBackupServiceLinkedRolePolicyForBackup';
    /** Provides AWS Backup permission to create backups on your behalf across AWS services */
    public static AWSBackupServiceLinkedRolePolicyForBackupTest = 'aws-service-role/AWSBackupServiceLinkedRolePolicyForBackupTest';
    /** Provides AWS Backup permission to create backups on your behalf across AWS services */
    public static AWSBackupServiceRolePolicyForBackup = 'service-role/AWSBackupServiceRolePolicyForBackup';
    /** Policy containing permissions necessary for AWS Backup to index recovery points. */
    public static AWSBackupServiceRolePolicyForIndexing = 'AWSBackupServiceRolePolicyForIndexing';
    /** Policy containing permissions necessary for AWS Backup to restore individual items in a recovery point */
    public static AWSBackupServiceRolePolicyForItemRestores = 'AWSBackupServiceRolePolicyForItemRestores';
    /** Provides AWS Backup permission to perform restores on your behalf across AWS services. This policy includes permissions to create and delete AWS resources, such as EBS volumes, RDS instances, and EFS file systems, which are part of the restore process. */
    public static AWSBackupServiceRolePolicyForRestores = 'service-role/AWSBackupServiceRolePolicyForRestores';
    /** Policy containing permissions necessary for AWS Backup to backup data in any S3 bucket. This includes read access to all S3 objects and any decrypt access for all KMS keys. */
    public static AWSBackupServiceRolePolicyForS3Backup = 'AWSBackupServiceRolePolicyForS3Backup';
    /** Policy containing permissions necessary for AWS Backup to restore a S3 backup to a bucket. This includes read/write permissions to all S3 buckets, and permissions to GenerateDataKey and DescribeKey for all KMS keys. */
    public static AWSBackupServiceRolePolicyForS3Restore = 'AWSBackupServiceRolePolicyForS3Restore';
    /** Provides full access for AWS Batch resources. */
    public static AWSBatchFullAccess = 'AWSBatchFullAccess';
    /** Policy to enable CloudWatch Event Target for AWS Batch Job Submission */
    public static AWSBatchServiceEventTargetRole = 'service-role/AWSBatchServiceEventTargetRole';
    /** Policy for AWS Batch service role which allows access to related services including EC2, Autoscaling, EC2 Container service and Cloudwatch Logs. */
    public static AWSBatchServiceRole = 'service-role/AWSBatchServiceRole';
    /** Provides access for AWS Batch to queue and manage Amazon SageMaker workloads */
    public static AWSBatchServiceRolePolicyForSageMaker = 'aws-service-role/AWSBatchServiceRolePolicyForSageMaker';
    /** A service linked role to provide Billing and Cost Management Data Exports access to AWS service data for exporting the data to a target location, such as Amazon S3, on behalf of a customer. */
    public static AWSBCMDataExportsServiceRolePolicy = 'aws-service-role/AWSBCMDataExportsServiceRolePolicy';
    /** Use the AWSBillingConductorFullAccess managed policy to allow complete access to AWS Billing Conductor (ABC) console and APIs. This policy allows users to list, create and delete ABC resources. */
    public static AWSBillingConductorFullAccess = 'AWSBillingConductorFullAccess';
    /** Use the AWSBillingConductorReadOnlyAccess managed policy to allow read only access to AWS Billing Conductor (ABC) console and APIs. This policy grants permission to view and list all ABC resources. It does not include the ability to create or delete resources. */
    public static AWSBillingConductorReadOnlyAccess = 'AWSBillingConductorReadOnlyAccess';
    /** Allows users to view bills on the Billing Console. */
    public static AWSBillingReadOnlyAccess = 'AWSBillingReadOnlyAccess';
    /** Allows billing service to validate access to billing view data for derived billing views */
    public static AWSBillingServiceRolePolicy = 'aws-service-role/AWSBillingServiceRolePolicy';
    /** This policy gives permissions to control AWS resources. For example, to start and stop EC2 or RDS instances by executing AWS Systems Manager (SSM) scripts. */
    public static AWSBudgetsActionsRolePolicyForResourceAdministrationWithSSM = 'AWSBudgetsActions_RolePolicyForResourceAdministrationWithSSM';
    /** Provides full access to AWS Budgets Actions including using Budgets Actions to control states of running AWS resources via AWS Management Console */
    public static AWSBudgetsActionsWithAWSResourceControlAccess = 'AWSBudgetsActionsWithAWSResourceControlAccess';
    /** Provides read only access to AWS Budgets Console via the AWS Management Console. */
    public static AWSBudgetsReadOnlyAccess = 'AWSBudgetsReadOnlyAccess';
    /** This IAM policy grants users full access to the AWS BugBust console */
    public static AWSBugBustFullAccess = 'AWSBugBustFullAccess';
    /** This IAM policy grants users access to participate in AWS BugBust events */
    public static AWSBugBustPlayerAccess = 'AWSBugBustPlayerAccess';
    /** Grants permissions to AWS BugBust to access resources on your behalf */
    public static AWSBugBustServiceRolePolicy = 'aws-service-role/AWSBugBustServiceRolePolicy';
    /** Provides full access to AWS Certificate Manager (ACM) */
    public static AWSCertificateManagerFullAccess = 'AWSCertificateManagerFullAccess';
    /** Provides auditor access to AWS Certificate Manager Private Certificate Authority */
    public static AWSCertificateManagerPrivateCAAuditor = 'AWSCertificateManagerPrivateCAAuditor';
    /** Provides full access to AWS Certificate Manager Private Certificate Authority */
    public static AWSCertificateManagerPrivateCAFullAccess = 'AWSCertificateManagerPrivateCAFullAccess';
    /** Provides privileged certificate user access to AWS Certificate Manager Private Certificate Authority */
    public static AWSCertificateManagerPrivateCAPrivilegedUser = 'AWSCertificateManagerPrivateCAPrivilegedUser';
    /** Provides read only access to AWS Certificate Manager Private Certificate Authority */
    public static AWSCertificateManagerPrivateCAReadOnly = 'AWSCertificateManagerPrivateCAReadOnly';
    /** Provides certificate user access to AWS Certificate Manager Private Certificate Authority */
    public static AWSCertificateManagerPrivateCAUser = 'AWSCertificateManagerPrivateCAUser';
    /** Provides read only access to AWS Certificate Manager (ACM). */
    public static AWSCertificateManagerReadOnly = 'AWSCertificateManagerReadOnly';
    /** The Service Linked Role used by AWS Chatbot. */
    public static AWSChatbotServiceLinkedRolePolicy = 'aws-service-role/AWSChatbotServiceLinkedRolePolicy';
    /** Allows full access to AWS Clean Rooms resources and access to related AWS Services. */
    public static AWSCleanRoomsFullAccess = 'AWSCleanRoomsFullAccess';
    /** Allows full access to AWS Clean Rooms resources except for querying in a collaboration and access to related AWS Services. */
    public static AWSCleanRoomsFullAccessNoQuerying = 'AWSCleanRoomsFullAccessNoQuerying';
    /** Allows full access to AWS Clean Rooms ML resources and access to related AWS Services. */
    public static AWSCleanRoomsMLFullAccess = 'AWSCleanRoomsMLFullAccess';
    /** Allows read-only access to AWS Clean Rooms ML resources and read-only access to related AWS Clean Rooms resources */
    public static AWSCleanRoomsMLReadOnlyAccess = 'AWSCleanRoomsMLReadOnlyAccess';
    /** Allows read-only access to AWS Clean Rooms resources and read-only access to related AWS Glue and Amazon CloudWatch Logs resources. */
    public static AWSCleanRoomsReadOnlyAccess = 'AWSCleanRoomsReadOnlyAccess';
    /** Provides administrator access to AWS Cloud9. */
    public static AWSCloud9Administrator = 'AWSCloud9Administrator';
    /** Provides the ability to be invited into AWS Cloud9 shared development environments. */
    public static AWSCloud9EnvironmentMember = 'AWSCloud9EnvironmentMember';
    /** Service Linked Role Policy for AWS Cloud9 */
    public static AWSCloud9ServiceRolePolicy = 'aws-service-role/AWSCloud9ServiceRolePolicy';
    /** This policy will be used to attach a role on a InstanceProfile which will allow Cloud9 to use the SSM Session Manager to connect to the instance */
    public static AWSCloud9SSMInstanceProfile = 'AWSCloud9SSMInstanceProfile';
    /** Provides permission to create AWS Cloud9 development environments and to manage owned environments. */
    public static AWSCloud9User = 'AWSCloud9User';
    /** Provides full access to AWS CloudFormation. */
    public static AWSCloudFormationFullAccess = 'AWSCloudFormationFullAccess';
    /** Provides access to AWS CloudFormation via the AWS Management Console. */
    public static AWSCloudFormationReadOnlyAccess = 'AWSCloudFormationReadOnlyAccess';
    /** Grants CloudFront Logger write permissions to CloudWatch Logs. */
    public static AWSCloudFrontLogger = 'aws-service-role/AWSCloudFrontLogger';
    /** Allows CloudFront to manage EC2 Elastic Network Interfaces and Security Groups on your behalf. */
    public static AWSCloudFrontVPCOriginServiceRolePolicy = 'aws-service-role/AWSCloudFrontVPCOriginServiceRolePolicy';
    /** Provides full access to all CloudHSM resources. */
    public static AWSCloudHSMFullAccess = 'AWSCloudHSMFullAccess';
    /** Provides read only access to all CloudHSM resources. */
    public static AWSCloudHSMReadOnlyAccess = 'AWSCloudHSMReadOnlyAccess';
    /** Default policy for the AWS CloudHSM service role. */
    public static AWSCloudHSMRole = 'service-role/AWSCloudHSMRole';
    /** Provides access to AWS Cloud Map discovery API. */
    public static AWSCloudMapDiscoverInstanceAccess = 'AWSCloudMapDiscoverInstanceAccess';
    /** Provides full access to all AWS Cloud Map actions. */
    public static AWSCloudMapFullAccess = 'AWSCloudMapFullAccess';
    /** Provides read-only access to all AWS Cloud Map actions. */
    public static AWSCloudMapReadOnlyAccess = 'AWSCloudMapReadOnlyAccess';
    /** Provides registrant level access to AWS Cloud Map actions. */
    public static AWSCloudMapRegisterInstanceAccess = 'AWSCloudMapRegisterInstanceAccess';
    /** Grants using AWS CloudShell with all features */
    public static AWSCloudShellFullAccess = 'AWSCloudShellFullAccess';
    /** Provides full access to AWS CloudTrail. */
    public static AWSCloudTrailFullAccess = 'AWSCloudTrail_FullAccess';
    /** Provides read only access to AWS CloudTrail. */
    public static AWSCloudTrailReadOnlyAccess = 'AWSCloudTrail_ReadOnlyAccess';
    /** This policy is used by the service-linked role named AWSServiceRoleForCloudWatchAlarms_ActionSSMIncidents. CloudWatch uses this service-linked role to perform AWS System Manager Incident Manager actions when a CloudWatch alarm goes in to ALARM state. This policy grants permission to start incidents on your behalf. */
    public static AWSCloudWatchAlarmsActionSSMIncidentsServiceRolePolicy = 'aws-service-role/AWSCloudWatchAlarms_ActionSSMIncidentsServiceRolePolicy';
    /** Provides full access to AWS CodeArtifact via the AWS Management Console. */
    public static AWSCodeArtifactAdminAccess = 'AWSCodeArtifactAdminAccess';
    /** Provides read only access to AWS CodeArtifact via the AWS Management Console. */
    public static AWSCodeArtifactReadOnlyAccess = 'AWSCodeArtifactReadOnlyAccess';
    /** Provides full access to AWS CodeBuild via the AWS Management Console. Also attach AmazonS3ReadOnlyAccess to provide access to download build artifacts, and attach IAMFullAccess to create and manage the service role for CodeBuild. */
    public static AWSCodeBuildAdminAccess = 'AWSCodeBuildAdminAccess';
    /** Provides access to AWS CodeBuild via the AWS Management Console, but does not allow CodeBuild project administration. Also attach AmazonS3ReadOnlyAccess to provide access to download build artifacts. */
    public static AWSCodeBuildDeveloperAccess = 'AWSCodeBuildDeveloperAccess';
    /** Provides read only access to AWS CodeBuild via the AWS Management Console. Also attach AmazonS3ReadOnlyAccess to provide access to download build artifacts. */
    public static AWSCodeBuildReadOnlyAccess = 'AWSCodeBuildReadOnlyAccess';
    /** Provides full access to AWS CodeCommit via the AWS Management Console. */
    public static AWSCodeCommitFullAccess = 'AWSCodeCommitFullAccess';
    /** Provides full access to AWS CodeCommit repositories, but does not allow repository deletion. */
    public static AWSCodeCommitPowerUser = 'AWSCodeCommitPowerUser';
    /** Provides read only access to AWS CodeCommit via the AWS Management Console. */
    public static AWSCodeCommitReadOnly = 'AWSCodeCommitReadOnly';
    /** Provides access to register and deploy a revision. */
    public static AWSCodeDeployDeployerAccess = 'AWSCodeDeployDeployerAccess';
    /** Provides full access to CodeDeploy resources. */
    public static AWSCodeDeployFullAccess = 'AWSCodeDeployFullAccess';
    /** Provides read only access to CodeDeploy resources. */
    public static AWSCodeDeployReadOnlyAccess = 'AWSCodeDeployReadOnlyAccess';
    /** Provides CodeDeploy service access to expand tags and interact with Auto Scaling on your behalf. */
    public static AWSCodeDeployRole = 'service-role/AWSCodeDeployRole';
    /** Provides CodeDeploy service access to invoke Lambda function on your behalf to perform blue/green deployment through CloudFormation. */
    public static AWSCodeDeployRoleForCloudFormation = 'service-role/AWSCodeDeployRoleForCloudFormation';
    /** Provides CodeDeploy service wide access to perform an ECS blue/green deployment on your behalf. Grants full access to support services, such as  full access to read all S3 objects, invoke all Lambda functions, publish to all SNS topics within the account and update all ECS services. */
    public static AWSCodeDeployRoleForECS = 'AWSCodeDeployRoleForECS';
    /**  Provides CodeDeploy service limited access to perform an ECS blue/green deployment on your behalf. */
    public static AWSCodeDeployRoleForECSLimited = 'AWSCodeDeployRoleForECSLimited';
    /** Provides CodeDeploy service access to perform a Lambda deployment on your behalf. */
    public static AWSCodeDeployRoleForLambda = 'service-role/AWSCodeDeployRoleForLambda';
    /** Provides CodeDeploy service limited access to perform a Lambda deployment on your behalf. */
    public static AWSCodeDeployRoleForLambdaLimited = 'service-role/AWSCodeDeployRoleForLambdaLimited';
    /** Provides full access to AWS CodePipeline via the AWS Management Console. */
    public static AWSCodePipelineFullAccess = 'AWSCodePipeline_FullAccess';
    /** Provides read only access to AWS CodePipeline via the AWS Management Console. */
    public static AWSCodePipelineReadOnlyAccess = 'AWSCodePipeline_ReadOnlyAccess';
    /** Provides access to view and approve manual changes for all pipelines */
    public static AWSCodePipelineApproverAccess = 'AWSCodePipelineApproverAccess';
    /** Provides access for custom actions to poll for jobs details (including temporary credentials) and report status updates to AWS CodePipeline. */
    public static AWSCodePipelineCustomActionAccess = 'AWSCodePipelineCustomActionAccess';
    /** Provides full access to AWS CodeStar via the AWS Management Console. */
    public static AWSCodeStarFullAccess = 'AWSCodeStarFullAccess';
    /** Allows AWS CodeStar Notifications to access Amazon CloudWatch Events on your behalf */
    public static AWSCodeStarNotificationsServiceRolePolicy = 'aws-service-role/AWSCodeStarNotificationsServiceRolePolicy';
    /** DO NOT USE -  AWS CodeStar Service Role Policy which grants administrative privileges in order for CodeStar to manage IAM and other service resources on behalf of the customer. */
    public static AWSCodeStarServiceRole = 'service-role/AWSCodeStarServiceRole';
    /** Denies access to certain actions, applied by the AWS team in the event that an IAM user's credentials have been compromised or exposed publicly.  Do NOT remove this policy.  Instead, please follow the instructions specified in the email sent to you regarding this event. */
    public static AWSCompromisedKeyQuarantine = 'AWSCompromisedKeyQuarantine';
    /** Denies access to certain actions, applied by the AWS team in the event that an IAM user's credentials have been compromised or exposed publicly. Do NOT remove this policy. Instead, please follow the instructions specified in the support case created for you regarding this event. */
    public static AWSCompromisedKeyQuarantineV2 = 'AWSCompromisedKeyQuarantineV2';
    /** Denies access to certain actions, applied by AWS in the event that an IAM user's credentials have been compromised or exposed publicly. The policy aims to limit the potential damage that may be caused by fraud-related activity leading to unauthorized charges, while not impacting the existing resources. Do NOT remove this policy. Instead, please follow the instructions specified in the support case created for you regarding this event. */
    public static AWSCompromisedKeyQuarantineV3 = 'AWSCompromisedKeyQuarantineV3';
    /** Allows Config to call AWS services and deploy config resources across organization */
    public static AWSConfigMultiAccountSetupPolicy = 'aws-service-role/AWSConfigMultiAccountSetupPolicy';
    /** Allows AWS Config to remediate noncompliant resources on your behalf. */
    public static AWSConfigRemediationServiceRolePolicy = 'aws-service-role/AWSConfigRemediationServiceRolePolicy';
    /** Allows AWS Config to call read-only AWS Organizations APIs */
    public static AWSConfigRoleForOrganizations = 'service-role/AWSConfigRoleForOrganizations';
    /** Allows an AWS Lambda function to access the AWS Config API and the configuration snapshots that AWS Config delivers periodically to Amazon S3. This access is required by functions that evaluate configuration changes for custom Config rules. */
    public static AWSConfigRulesExecutionRole = 'service-role/AWSConfigRulesExecutionRole';
    /** Allows Config to call AWS services and collect resource configurations on your behalf. */
    public static AWSConfigServiceRolePolicy = 'aws-service-role/AWSConfigServiceRolePolicy';
    /** Provides access to use AWS Config, including searching by tags on resources, and reading all tags. This does not provide permission to configure AWS Config, which requires administrative privileges. */
    public static AWSConfigUserAccess = 'AWSConfigUserAccess';
    /** Enables broad read/write access to ALL EC2 objects, read/write access to S3 buckets starting with 'import-to-ec2-', and the ability to list all S3 buckets, for the AWS Connector to import VMs on your behalf. */
    public static AWSConnector = 'AWSConnector';
    /** Allows AWS Control Tower to call AWS services that provide automated account configuration and centralized governance on your behalf. */
    public static AWSControlTowerAccountServiceRolePolicy = 'aws-service-role/AWSControlTowerAccountServiceRolePolicy';
    /** Provides access to AWS Resources managed or used by AWS Control Tower */
    public static AWSControlTowerServiceRolePolicy = 'service-role/AWSControlTowerServiceRolePolicy';
    /** Grants permissions to to describe the organization of the account, create S3 buckets for the MAP program and apply tags to it, create a Cost and Usage Report, and describe Cost and Usage Report definitions. */
    public static AWSCostAndUsageReportAutomationPolicy = 'service-role/AWSCostAndUsageReportAutomationPolicy';
    /** Gives Data Grant owners access to AWS Data Exchange actions using the AWS Management Console and SDK. */
    public static AWSDataExchangeDataGrantOwnerFullAccess = 'AWSDataExchangeDataGrantOwnerFullAccess';
    /** Gives Data Grant receiver access to AWS Data Exchange actions using the AWS Management Console and SDK. */
    public static AWSDataExchangeDataGrantReceiverFullAccess = 'AWSDataExchangeDataGrantReceiverFullAccess';
    /** Grants full access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. It also provides select access to related services needed to take full advantage of AWS Data Exchange. */
    public static AWSDataExchangeFullAccess = 'AWSDataExchangeFullAccess';
    /** Grants data provider access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. It also provides select access to related services needed to take full advantage of AWS Data Exchange. */
    public static AWSDataExchangeProviderFullAccess = 'AWSDataExchangeProviderFullAccess';
    /** Grants read-only access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. */
    public static AWSDataExchangeReadOnly = 'AWSDataExchangeReadOnly';
    /** Allows AWS Data Exchange to access AWS Services and Resources used or managed by AWS Data Exchange for license management. */
    public static AWSDataExchangeServiceRolePolicyForLicenseManagement = 'aws-service-role/AWSDataExchangeServiceRolePolicyForLicenseManagement';
    /** Allows AWS Data Exchange to read data about your AWS Organization to determine eligibility for AWS Data Exchange data grants license distribution. */
    public static AWSDataExchangeServiceRolePolicyForOrganizationDiscovery = 'aws-service-role/AWSDataExchangeServiceRolePolicyForOrganizationDiscovery';
    /** Grants data subscriber access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. It also provides select access to related services needed to take full advantage of AWS Data Exchange. */
    public static AWSDataExchangeSubscriberFullAccess = 'AWSDataExchangeSubscriberFullAccess';
    /** Provides appropriate permissions to AWS Data Lifecycle Manager to take actions on AWS resources */
    public static AWSDataLifecycleManagerServiceRole = 'service-role/AWSDataLifecycleManagerServiceRole';
    /** Provides appropriate permissions to AWS Data Lifecycle Manager to take actions on AWS resources for AMI Management */
    public static AWSDataLifecycleManagerServiceRoleForAMIManagement = 'service-role/AWSDataLifecycleManagerServiceRoleForAMIManagement';
    /** Provides Amazon Data Lifecycle Manager permission to perform the Systems Manager actions required to run pre and post scripts on all Amazon EC2 instances. */
    public static AWSDataLifecycleManagerSSMFullAccess = 'service-role/AWSDataLifecycleManagerSSMFullAccess';
    /** Provides full access to Data Pipeline, list access for S3, DynamoDB, Redshift, RDS, SNS, and IAM roles, and passRole access for default Roles. */
    public static AWSDataPipelineFullAccess = 'AWSDataPipeline_FullAccess';
    /** Provides full access to Data Pipeline, list access for S3, DynamoDB, Redshift, RDS, SNS, and IAM roles, and passRole access for default Roles. */
    public static AWSDataPipelinePowerUser = 'AWSDataPipeline_PowerUser';
    /** Allows DataSync Discovery to integrate with other AWS services on your behalf. */
    public static AWSDataSyncDiscoveryServiceRolePolicy = 'aws-service-role/AWSDataSyncDiscoveryServiceRolePolicy';
    /** Provides full access to AWS DataSync and minimal access to its dependencies */
    public static AWSDataSyncFullAccess = 'AWSDataSyncFullAccess';
    /** Provides read-only access to AWS DataSync */
    public static AWSDataSyncReadOnlyAccess = 'AWSDataSyncReadOnlyAccess';
    /** Allows DataSync to integrate with other AWS services on your behalf */
    public static AWSDataSyncServiceRolePolicy = 'aws-service-role/AWSDataSyncServiceRolePolicy';
    /** Provides AWS Deadline Cloud workers with access to run tasks on a farm. */
    public static AWSDeadlineCloudFleetWorker = 'AWSDeadlineCloud-FleetWorker';
    /** Provides user workstation access to AWS Deadline Cloud farms with limited Read-Only permissions to call other necessary services. Attach this policy to the user role associated with your studio. */
    public static AWSDeadlineCloudUserAccessFarms = 'AWSDeadlineCloud-UserAccessFarms';
    /** Provides user workstation access to AWS Deadline Cloud fleets with limited Read-Only permissions to call other necessary services. Attach this policy to the user role associated with your studio. */
    public static AWSDeadlineCloudUserAccessFleets = 'AWSDeadlineCloud-UserAccessFleets';
    /** Provides user workstation access to AWS Deadline Cloud jobs with limited Read-Only permissions to call other necessary services. Attach this policy to the user role associated with your studio. */
    public static AWSDeadlineCloudUserAccessJobs = 'AWSDeadlineCloud-UserAccessJobs';
    /** Provides user workstation access to AWS Deadline Cloud queues with limited Read-Only permissions to call other necessary services. Attach this policy to the user role associated with your studio. */
    public static AWSDeadlineCloudUserAccessQueues = 'AWSDeadlineCloud-UserAccessQueues';
    /** Provides access for AWS Deadline Cloud worker hosts to join a fleet in a farm. */
    public static AWSDeadlineCloudWorkerHost = 'AWSDeadlineCloud-WorkerHost';
    /** This policy specifies permissions required by DeepLens Administrative lambda functions that run on a DeepLens device */
    public static AWSDeepLensLambdaFunctionAccessPolicy = 'AWSDeepLensLambdaFunctionAccessPolicy';
    /** Grants AWS DeepLens access to AWS Services, resources and roles needed by DeepLens and its dependencies including IoT, S3, GreenGrass and AWS Lambda. */
    public static AWSDeepLensServiceRolePolicy = 'service-role/AWSDeepLensServiceRolePolicy';
    /** DeepRacer admin access to all actions including toggling between multiuser and single user mode. */
    public static AWSDeepRacerAccountAdminAccess = 'AWSDeepRacerAccountAdminAccess';
    /** Allows CloudFormation to create and manage AWS stacks and resources on your behalf. */
    public static AWSDeepRacerCloudFormationAccessPolicy = 'AWSDeepRacerCloudFormationAccessPolicy';
    /** DeepRacer MultiUser Default user access to use deepracer in multi-user mode */
    public static AWSDeepRacerDefaultMultiUserAccess = 'AWSDeepRacerDefaultMultiUserAccess';
    /** Provides full access to AWS DeepRacer. Also provides select access to related services (e.g., S3). */
    public static AWSDeepRacerFullAccess = 'AWSDeepRacerFullAccess';
    /** Allows RoboMaker to create required resources and call AWS services on your behalf. */
    public static AWSDeepRacerRoboMakerAccessPolicy = 'AWSDeepRacerRoboMakerAccessPolicy';
    /** Allows DeepRacer to create required resources and call AWS services on your behalf. */
    public static AWSDeepRacerServiceRolePolicy = 'service-role/AWSDeepRacerServiceRolePolicy';
    /** Deny all access. */
    public static AWSDenyAll = 'AWSDenyAll';
    /** Provides full access to all AWS Device Farm operations. */
    public static AWSDeviceFarmFullAccess = 'AWSDeviceFarmFullAccess';
    /** Grant permissions to AWS Device Farm to call EC2 Network APIs on your behalf. */
    public static AWSDeviceFarmServiceRolePolicy = 'aws-service-role/AWSDeviceFarmServiceRolePolicy';
    /** Grant permissions to AWS Device Farm to call EC2 APIs on your behalf. */
    public static AWSDeviceFarmTestGridServiceRolePolicy = 'aws-service-role/AWSDeviceFarmTestGridServiceRolePolicy';
    /** Provides full access to AWS Direct Connect via the AWS Management Console. */
    public static AWSDirectConnectFullAccess = 'AWSDirectConnectFullAccess';
    /** Provides read only access to AWS Direct Connect via the AWS Management Console. */
    public static AWSDirectConnectReadOnlyAccess = 'AWSDirectConnectReadOnlyAccess';
    /** Provides AWS Direct Connect permission to create and manage AWS resources on your behalf. */
    public static AWSDirectConnectServiceRolePolicy = 'aws-service-role/AWSDirectConnectServiceRolePolicy';
    /** Provides full access to AWS Directory Service Data. */
    public static AWSDirectoryServiceDataFullAccess = 'AWSDirectoryServiceDataFullAccess';
    /** Provides read-only access to AWS Directory Service Data */
    public static AWSDirectoryServiceDataReadOnlyAccess = 'AWSDirectoryServiceDataReadOnlyAccess';
    /** Provides full access to AWS Directory Service. */
    public static AWSDirectoryServiceFullAccess = 'AWSDirectoryServiceFullAccess';
    /** Provides read only access to AWS Directory Service. */
    public static AWSDirectoryServiceReadOnlyAccess = 'AWSDirectoryServiceReadOnlyAccess';
    /** Policy for the Directory Service Service Linked Role */
    public static AWSDirectoryServiceServiceRolePolicy = 'aws-service-role/AWSDirectoryServiceServiceRolePolicy';
    /** Provides write access to AWS resources required for AWS Discovery Continuous Export */
    public static AWSDiscoveryContinuousExportFirehosePolicy = 'AWSDiscoveryContinuousExportFirehosePolicy';
    /** Allows DMS Fleet Advisor to manage CloudWatch metrics on your behalf. */
    public static AWSDMSFleetAdvisorServiceRolePolicy = 'aws-service-role/AWSDMSFleetAdvisorServiceRolePolicy';
    /** Grants AWS DMS Serverless permissions to create and manage DMS resources in your account on your behalf */
    public static AWSDMSServerlessServiceRolePolicy = 'aws-service-role/AWSDMSServerlessServiceRolePolicy';
    /** Allows EC2 CapacityReservation Fleet service to manage Capacity Reservations */
    public static AWSEC2CapacityReservationFleetRolePolicy = 'aws-service-role/AWSEC2CapacityReservationFleetRolePolicy';
    /** Allows EC2 Fleet to launch and manage instances. */
    public static AWSEC2FleetServiceRolePolicy = 'aws-service-role/AWSEC2FleetServiceRolePolicy';
    /** Allows EC2 Spot Fleet to launch and manage spot fleet instances */
    public static AWSEC2SpotFleetServiceRolePolicy = 'aws-service-role/AWSEC2SpotFleetServiceRolePolicy';
    /** Allows EC2 Spot to launch and manage spot instances */
    public static AWSEC2SpotServiceRolePolicy = 'aws-service-role/AWSEC2SpotServiceRolePolicy';
    /** This policy is attached to the IAM role that's attached to your Amazon EC2 Windows Instances to enable the Amazon EC2 VSS solution to create and add tags to Amazon Machine Images (AMI) and EBS Snapshots. */
    public static AWSEC2VssSnapshotPolicy = 'AWSEC2VssSnapshotPolicy';
    /** Enables access to AWS services and resources used or managed by AWS ECR pull through cache */
    public static AWSECRPullThroughCacheServiceRolePolicy = 'aws-service-role/AWSECRPullThroughCache_ServiceRolePolicy';
    /** Provide the instance in your custom platform builder environment permission to launch EC2 instance, create EBS snapshot and AMI, stream logs to Amazon CloudWatch Logs, and store artifacts in Amazon S3. */
    public static AWSElasticBeanstalkCustomPlatformforEC2Role = 'AWSElasticBeanstalkCustomPlatformforEC2Role';
    /** AWS Elastic Beanstalk Service policy for Health Monitoring system */
    public static AWSElasticBeanstalkEnhancedHealth = 'service-role/AWSElasticBeanstalkEnhancedHealth';
    /** AWS Elastic Beanstalk Service Role policy that grants limited permissions to update your resources on your behalf for maintenance purposes. */
    public static AWSElasticBeanstalkMaintenance = 'aws-service-role/AWSElasticBeanstalkMaintenance';
    /** This policy is for the AWS Elastic Beanstalk service role used to perform managed updates of Elastic Beanstalk environments. This policy should not be attached to other users or roles. The policy grants broad permissions to create and manage resources across a number of AWS services including AutoScaling, EC2, ECS, Elastic Load Balancing and CloudFormation.  This policy also allows passing of any IAM role usable with those services. */
    public static AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy = 'AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy';
    /** AWS Elastic Beanstalk Service Role policy that grants limited permissions to managed updates. */
    public static AWSElasticBeanstalkManagedUpdatesServiceRolePolicy = 'aws-service-role/AWSElasticBeanstalkManagedUpdatesServiceRolePolicy';
    /** Provide the instances in your multicontainer Docker environment access to use the Amazon EC2 Container Service to manage container deployment tasks. */
    public static AWSElasticBeanstalkMulticontainerDocker = 'AWSElasticBeanstalkMulticontainerDocker';
    /** Grants read-only permissions. Explicitly allows operators to gain direct access to retrieve information about resources related to AWS Elastic Beanstalk applications. */
    public static AWSElasticBeanstalkReadOnly = 'AWSElasticBeanstalkReadOnly';
    /** AWSElasticBeanstalkRoleCore (Elastic Beanstalk operations role) Allows core operation of a web service environment. */
    public static AWSElasticBeanstalkRoleCore = 'service-role/AWSElasticBeanstalkRoleCore';
    /** (Elastic Beanstalk operations role) Allows an environment to manage Amazon CloudWatch Logs log groups. */
    public static AWSElasticBeanstalkRoleCWL = 'service-role/AWSElasticBeanstalkRoleCWL';
    /** (Elastic Beanstalk operations role) Allows a multicontainer Docker environment to manage Amazon ECS clusters. */
    public static AWSElasticBeanstalkRoleECS = 'service-role/AWSElasticBeanstalkRoleECS';
    /** (Elastic Beanstalk operations role) Allows an environment to integrate an Amazon RDS instance. */
    public static AWSElasticBeanstalkRoleRDS = 'service-role/AWSElasticBeanstalkRoleRDS';
    /** (Elastic Beanstalk operations role) Allows an environment to enable Amazon SNS topic integration. */
    public static AWSElasticBeanstalkRoleSNS = 'service-role/AWSElasticBeanstalkRoleSNS';
    /** (Elastic Beanstalk operations role) Allows a worker environment tier to create an Amazon DynamoDB table and an Amazon SQS queue. */
    public static AWSElasticBeanstalkRoleWorkerTier = 'service-role/AWSElasticBeanstalkRoleWorkerTier';
    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-servicerole.html. AWS Elastic Beanstalk Service role policy which grants permissions to create & manage resources (i.e.: AutoScaling, EC2, S3, CloudFormation, ELB, etc.) on your behalf. */
    public static AWSElasticBeanstalkService = 'service-role/AWSElasticBeanstalkService';
    /** AWS Elastic Beanstalk Service Linked Role policy which grants permissions to create & manage resources (i.e.: AutoScaling, EC2, S3, CloudFormation, ELB, etc.) on your behalf. */
    public static AWSElasticBeanstalkServiceRolePolicy = 'aws-service-role/AWSElasticBeanstalkServiceRolePolicy';
    /** Provide the instances in your web server environment access to upload log files to Amazon S3. */
    public static AWSElasticBeanstalkWebTier = 'AWSElasticBeanstalkWebTier';
    /** Provide the instances in your worker environment access to upload log files to Amazon S3, to use Amazon SQS to monitor your application's job queue, to use Amazon DynamoDB to perform leader election, and to Amazon CloudWatch to publish metrics for health monitoring. */
    public static AWSElasticBeanstalkWorkerTier = 'AWSElasticBeanstalkWorkerTier';
    /** This policy allows installing the AWS Replication Agent, which is used with AWS Elastic Disaster Recovery (DRS) to recover external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide during the installation step of the AWS Replication Agent. */
    public static AWSElasticDisasterRecoveryAgentInstallationPolicy = 'AWSElasticDisasterRecoveryAgentInstallationPolicy';
    /** This policy allows using the AWS Replication Agent, which is used with AWS Elastic Disaster Recovery (DRS) to recover source servers to AWS. We do not recommend that you attach this policy to your IAM users or roles. */
    public static AWSElasticDisasterRecoveryAgentPolicy = 'service-role/AWSElasticDisasterRecoveryAgentPolicy';
    /** This policy provides full access to all public APIs of AWS Elastic Disaster Recovery (DRS), as well as permissions to read KMS key, License Manager, Resource Groups, Elastic Load Balancing, IAM, and EC2 information. Attach this policy to your IAM users or roles. */
    public static AWSElasticDisasterRecoveryConsoleFullAccess = 'AWSElasticDisasterRecoveryConsoleFullAccess';
    /** This policy provides full access to all public APIs of AWS Elastic Disaster Recovery (AWS DRS), as well as all public APIs in other AWS services used by AWS DRS Console. Attach this policy to your users or roles. */
    public static AWSElasticDisasterRecoveryConsoleFullAccessV2 = 'AWSElasticDisasterRecoveryConsoleFullAccess_v2';
    /** This policy is attached to the AWS Elastic Disaster Recovery Conversion server's instance role. This policy allows Elastic Disaster Recovery (DRS) Conversion Servers, which are EC2 instances launched by Elastic Disaster Recovery, to communicate with the DRS service. An IAM role with this policy is attached (as an EC2 Instance Profile) by DRS to the DRS Conversion Servers, which are automatically launched and terminated by DRS, when needed. We do not recommend that you attach this policy to your IAM users or roles. DRS Conversion Servers are used by Elastic Disaster Recovery when users choose to recover source servers using the DRS console, CLI, or API. */
    public static AWSElasticDisasterRecoveryConversionServerPolicy = 'service-role/AWSElasticDisasterRecoveryConversionServerPolicy';
    /** This policy allows AWS Elastic Disaster Recovery (DRS) to support cross-account replication and cross-account failback. */
    public static AWSElasticDisasterRecoveryCrossAccountReplicationPolicy = 'service-role/AWSElasticDisasterRecoveryCrossAccountReplicationPolicy';
    /** This policy allows installing and using the AWS Replication Agent, which is used by AWS Elastic Disaster Recovery (DRS) to recover source servers that run on EC2 (cross-region or cross-AZ). An IAM role with this policy should be attached (as an EC2 Instance Profile) to the EC2 Instances. */
    public static AWSElasticDisasterRecoveryEc2InstancePolicy = 'service-role/AWSElasticDisasterRecoveryEc2InstancePolicy';
    /** You can attach the AWSElasticDisasterRecoveryFailbackInstallationPolicy policy to your IAM identities.  This policy allows installing the Elastic Disaster Recovery Failback Client, which is used to failback Recovery Instances back to your original source infrastructure. Attach this policy to your IAM users or roles whose credentials you provide when running the Elastic Disaster Recovery Failback Client. */
    public static AWSElasticDisasterRecoveryFailbackInstallationPolicy = 'AWSElasticDisasterRecoveryFailbackInstallationPolicy';
    /** This policy allows using the Elastic Disaster Recovery Failback Client, which is used to failback Recovery Instances back to your original source infrastructure. We do not recommend that you attach this policy to your IAM users or roles. */
    public static AWSElasticDisasterRecoveryFailbackPolicy = 'service-role/AWSElasticDisasterRecoveryFailbackPolicy';
    /** This policy allows you to use Amazon SSM and additional services required permissions to run post-launch actions in AWS Elastic Disaster Recovery (AWS DRS). Attach this policy to your IAM roles or users. */
    public static AWSElasticDisasterRecoveryLaunchActionsPolicy = 'AWSElasticDisasterRecoveryLaunchActionsPolicy';
    /** This policy allows AWS Elastic Disaster Recovery (DRS) to support network replication. */
    public static AWSElasticDisasterRecoveryNetworkReplicationPolicy = 'service-role/AWSElasticDisasterRecoveryNetworkReplicationPolicy';
    /** You can attach the AWSElasticDisasterRecoveryReadOnlyAccess policy to your IAM identities.  This policy provides permissions to all read-only public APIs of Elastic Disaster Recovery (DRS), as well as some read-only APIs of other AWS services that are required in order to make full read-only use of the DRS console. Attach this policy to your IAM users or roles. */
    public static AWSElasticDisasterRecoveryReadOnlyAccess = 'AWSElasticDisasterRecoveryReadOnlyAccess';
    /** This policy is attached to the instance role of Elastic Disaster Recovery's Recovery Instance.  This policy allows the Elastic Disaster Recovery (DRS) Recovery Instance, which are EC2 instances launched by Elastic Disaster Recovery - to communicate with the DRS service, and to be able to failback to their original source infrastructure. An IAM role with this policy is attached (as an EC2 Instance Profile) by Elastic Disaster Recovery to the DRS Recovery Instances. We do not recommend that you attach this policy to your IAM users or roles. */
    public static AWSElasticDisasterRecoveryRecoveryInstancePolicy = 'service-role/AWSElasticDisasterRecoveryRecoveryInstancePolicy';
    /** This policy is attached to the Elastic Disaster Recovery Replication server's instance role. This policy allows the Elastic Disaster Recovery (DRS) Replication Servers, which are EC2 instances launched by Elastic Disaster Recovery - to communicate with the DRS service, and to create EBS snapshots in your AWS account. An IAM role with this policy is attached (as an EC2 Instance Profile) by Elastic Disaster Recovery to the DRS Replication Servers which are automatically launched and terminated by DRS, as needed. DRS Replication Servers are used to facilitate data replication from your external servers to AWS, as part of the recovery process managed by DRS. We do not recommend that you attach this policy to your IAM users or roles. */
    public static AWSElasticDisasterRecoveryReplicationServerPolicy = 'service-role/AWSElasticDisasterRecoveryReplicationServerPolicy';
    /** This policy allows Elastic Disaster Recovery to manage AWS resources on your behalf. */
    public static AWSElasticDisasterRecoveryServiceRolePolicy = 'aws-service-role/AWSElasticDisasterRecoveryServiceRolePolicy';
    /** This policy allows read-only access to AWS Elastic Disaster Recovery (DRS) resources such as source servers and jobs. It also allows creating a converted snapshot and sharing that EBS snapshot with a specific account. */
    public static AWSElasticDisasterRecoveryStagingAccountPolicy = 'service-role/AWSElasticDisasterRecoveryStagingAccountPolicy';
    /** This policy is used by AWS Elastic Disaster Recovery (DRS) to recover source servers into a separate target account and to allow failing back. We do not recommend that you attach this policy to your IAM users or roles. */
    public static AWSElasticDisasterRecoveryStagingAccountPolicyV2 = 'service-role/AWSElasticDisasterRecoveryStagingAccountPolicy_v2';
    /** Service Linked Role Policy for AWS Elastic Load Balancing Control Plane - Classic */
    public static AWSElasticLoadBalancingClassicServiceRolePolicy = 'aws-service-role/AWSElasticLoadBalancingClassicServiceRolePolicy';
    /** Service Linked Role Policy for AWS Elastic Load Balancing Control Plane */
    public static AWSElasticLoadBalancingServiceRolePolicy = 'aws-service-role/AWSElasticLoadBalancingServiceRolePolicy';
    /** Provides full access to AWS Elemental MediaConnect resources. */
    public static AWSElementalMediaConnectFullAccess = 'AWSElementalMediaConnectFullAccess';
    /** Provides read-only access to AWS Elemental MediaConnect resources. */
    public static AWSElementalMediaConnectReadOnlyAccess = 'AWSElementalMediaConnectReadOnlyAccess';
    /** Provides full access to AWS Elemental MediaConvert via the AWS Management Console and SDK. */
    public static AWSElementalMediaConvertFullAccess = 'AWSElementalMediaConvertFullAccess';
    /** Provides read only access to AWS Elemental MediaConvert via the AWS Management Console and SDK. */
    public static AWSElementalMediaConvertReadOnly = 'AWSElementalMediaConvertReadOnly';
    /** Provides full access to AWS Elemental MediaLive resources */
    public static AWSElementalMediaLiveFullAccess = 'AWSElementalMediaLiveFullAccess';
    /** Provides read only access to AWS Elemental MediaLive resources */
    public static AWSElementalMediaLiveReadOnly = 'AWSElementalMediaLiveReadOnly';
    /** Provides full access to AWS Elemental MediaPackage resources */
    public static AWSElementalMediaPackageFullAccess = 'AWSElementalMediaPackageFullAccess';
    /** Provides read only access to AWS Elemental MediaPackage resources */
    public static AWSElementalMediaPackageReadOnly = 'AWSElementalMediaPackageReadOnly';
    /** Provides full access to AWS Elemental MediaPackageV2 resources. */
    public static AWSElementalMediaPackageV2FullAccess = 'AWSElementalMediaPackageV2FullAccess';
    /** Provides read-only access to AWS Elemental MediaPackageV2 resources. */
    public static AWSElementalMediaPackageV2ReadOnly = 'AWSElementalMediaPackageV2ReadOnly';
    /** Provides full read and write access to all MediaStore APIs */
    public static AWSElementalMediaStoreFullAccess = 'AWSElementalMediaStoreFullAccess';
    /** Provides read-only permissions for MediaStore APIs */
    public static AWSElementalMediaStoreReadOnly = 'AWSElementalMediaStoreReadOnly';
    /** Provides full access to AWS Elemental MediaTailor resources */
    public static AWSElementalMediaTailorFullAccess = 'AWSElementalMediaTailorFullAccess';
    /** Provides read only access to AWS Elemental MediaTailor resources */
    public static AWSElementalMediaTailorReadOnly = 'AWSElementalMediaTailorReadOnly';
    /** Policy to enable enhanced classic networking management feature. */
    public static AWSEnhancedClassicNetworkingMangementPolicy = 'aws-service-role/AWSEnhancedClassicNetworkingMangementPolicy';
    /** Provides console full access to AWS Entity Resolution and related services. */
    public static AWSEntityResolutionConsoleFullAccess = 'AWSEntityResolutionConsoleFullAccess';
    /** Provides read-only access to AWS Entity Resolution via the AWS Management Console. */
    public static AWSEntityResolutionConsoleReadOnlyAccess = 'AWSEntityResolutionConsoleReadOnlyAccess';
    /** This policy grants the Fault Injection Simulator Service permission in EC2 and other required services to perform FIS actions. */
    public static AWSFaultInjectionSimulatorEC2Access = 'service-role/AWSFaultInjectionSimulatorEC2Access';
    /** This policy grants the Fault Injection Simulator Service permission in ECS and other required services to perform FIS actions. */
    public static AWSFaultInjectionSimulatorECSAccess = 'service-role/AWSFaultInjectionSimulatorECSAccess';
    /** This policy grants the Fault Injection Simulator Service permission in EKS and other required services to perform FIS actions. */
    public static AWSFaultInjectionSimulatorEKSAccess = 'service-role/AWSFaultInjectionSimulatorEKSAccess';
    /** This policy grants the Fault Injection Simulator Service permission in EC2 networking and other required services to perform FIS actions. */
    public static AWSFaultInjectionSimulatorNetworkAccess = 'service-role/AWSFaultInjectionSimulatorNetworkAccess';
    /** This policy grants the Fault Injection Simulator Service permission in RDS and other required services to perform FIS actions. */
    public static AWSFaultInjectionSimulatorRDSAccess = 'service-role/AWSFaultInjectionSimulatorRDSAccess';
    /** This policy grants the Fault Injection Simulator Service permission in SSM and other required services to perform FIS actions. */
    public static AWSFaultInjectionSimulatorSSMAccess = 'service-role/AWSFaultInjectionSimulatorSSMAccess';
    /** Policy to enable access to AWS Service and Resources used or managed by Amazon FinSpace */
    public static AWSFinSpaceServiceRolePolicy = 'aws-service-role/AWSFinSpaceServiceRolePolicy';
    /** Full access for AWS FM Administrator */
    public static AWSFMAdminFullAccess = 'AWSFMAdminFullAccess';
    /** Read only access for AWS FM Administrator that allows monitoring AWS FM operations */
    public static AWSFMAdminReadOnlyAccess = 'AWSFMAdminReadOnlyAccess';
    /** Provides read only access to AWS WAF actions for AWS Firewall Manager member accounts */
    public static AWSFMMemberReadOnlyAccess = 'AWSFMMemberReadOnlyAccess';
    /** Managed policy for AWS For Wordpress Plugin */
    public static AWSForWordPressPluginPolicy = 'AWSForWordPressPluginPolicy';
    /** Policy which allows AWS Code Connections to sync content from your git repository */
    public static AWSGitSyncServiceRolePolicy = 'aws-service-role/AWSGitSyncServiceRolePolicy';
    /** Policy granting permissions to AWS Global Accelerator to manage EC2 Elastic Network Interfaces and Security Groups. */
    public static AWSGlobalAcceleratorSLRPolicy = 'aws-service-role/AWSGlobalAcceleratorSLRPolicy';
    /** Provides full access to AWS Glue via the AWS Management Console */
    public static AWSGlueConsoleFullAccess = 'AWSGlueConsoleFullAccess';
    /** Provides full access to AWS Glue via the AWS Management Console and access to sagemaker notebook instances. */
    public static AWSGlueConsoleSageMakerNotebookFullAccess = 'AWSGlueConsoleSageMakerNotebookFullAccess';
    /** Provides full access to AWS Glue DataBrew via the AWS Management Console. Also provides select access to related services (e.g., S3, KMS, Glue). */
    public static AwsGlueDataBrewFullAccessPolicy = 'AwsGlueDataBrewFullAccessPolicy';
    /** This policy grants permission to glue to perform action on user's glue data catalog, this policy also provides permission to ec2 actions to allow glue to create ENI to connect to resources in the VPC, also allow glue to access registered data in lakeformation and permission to access user's cloudwatch */
    public static AWSGlueDataBrewServiceRole = 'service-role/AWSGlueDataBrewServiceRole';
    /** Provides full access to the AWS Glue Schema Registry Service */
    public static AWSGlueSchemaRegistryFullAccess = 'AWSGlueSchemaRegistryFullAccess';
    /** Provides readonly access to the AWS Glue Schema Registry Service */
    public static AWSGlueSchemaRegistryReadonlyAccess = 'AWSGlueSchemaRegistryReadonlyAccess';
    /** Policy for AWS Glue service role which allows customer to manage notebook server */
    public static AWSGlueServiceNotebookRole = 'service-role/AWSGlueServiceNotebookRole';
    /** Policy for AWS Glue service role which allows access to related services including EC2, S3, and Cloudwatch Logs */
    public static AWSGlueServiceRole = 'service-role/AWSGlueServiceRole';
    /** Provides permissions that allows users to create and use only the notebook sessions that are associated with the user. This policy also includes permissions to explicitly allow users to pass a restricted Glue session role. */
    public static AwsGlueSessionUserRestrictedNotebookPolicy = 'AwsGlueSessionUserRestrictedNotebookPolicy';
    /** Provides full access to all AWS Glue resources except for sessions. Allows users to create and use only the notebook sessions that are associated with the user. This policy also includes other permissions needed by AWS Glue to manage Glue resources in other AWS services. */
    public static AwsGlueSessionUserRestrictedNotebookServiceRole = 'service-role/AwsGlueSessionUserRestrictedNotebookServiceRole';
    /** Provides permissions that allows users to create and use only the interactive sessions that are associated with the user. This policy also includes permissions to explicitly allow users to pass a restricted Glue session role. */
    public static AwsGlueSessionUserRestrictedPolicy = 'AwsGlueSessionUserRestrictedPolicy';
    /** Provides full access to all AWS Glue resources except for sessions. Allows users to create and use only the interactive sessions that are associated with the user. This policy also includes other permissions needed by AWS Glue to manage Glue resources in other AWS services */
    public static AwsGlueSessionUserRestrictedServiceRole = 'service-role/AwsGlueSessionUserRestrictedServiceRole';
    /** Provides access within Amazon Grafana to create and manage workspaces for the entire organization. */
    public static AWSGrafanaAccountAdministrator = 'AWSGrafanaAccountAdministrator';
    /** Access to read only operations in Amazon Grafana. */
    public static AWSGrafanaConsoleReadOnlyAccess = 'AWSGrafanaConsoleReadOnlyAccess';
    /** Provides only the ability to update user and group permissions for AWS Grafana workspaces. */
    public static AWSGrafanaWorkspacePermissionManagement = 'AWSGrafanaWorkspacePermissionManagement';
    /** Provides ability to update IAM Identity Center (IdC) user and group permissions for Amazon Managed Grafana workspaces. */
    public static AWSGrafanaWorkspacePermissionManagementV2 = 'AWSGrafanaWorkspacePermissionManagementV2';
    /** This policy gives full access to the AWS Greengrass configuration, management and deployment actions */
    public static AWSGreengrassFullAccess = 'AWSGreengrassFullAccess';
    /** This policy gives read only access to the AWS Greengrass configuration, management and deployment actions */
    public static AWSGreengrassReadOnlyAccess = 'AWSGreengrassReadOnlyAccess';
    /** Policy for AWS Greengrass service role which allows access to related services including AWS Lambda and AWS IoT thing shadows. */
    public static AWSGreengrassResourceAccessRolePolicy = 'service-role/AWSGreengrassResourceAccessRolePolicy';
    /** Provides the Dataflow Endpoint Instance permissions to use the AWS Ground Station Agent */
    public static AWSGroundStationAgentInstancePolicy = 'AWSGroundStationAgentInstancePolicy';
    /** Allows AWS Health to enable the Health event processor feature. */
    public static AWSHealthEventProcessorServiceRolePolicy = 'aws-service-role/AWSHealth_EventProcessorServiceRolePolicy';
    /** Allows full access to the AWS Health Apis and Notifications and the Personal Health Dashboard */
    public static AWSHealthFullAccess = 'AWSHealthFullAccess';
    /** Provides full access to AWS Health Imaging service. */
    public static AWSHealthImagingFullAccess = 'AWSHealthImagingFullAccess';
    /** Provides read only access to AWS Health Imaging service. */
    public static AWSHealthImagingReadOnlyAccess = 'AWSHealthImagingReadOnlyAccess';
    /** Provides the list of actions that are allowed for roles assumed with the IAM Identity Center identity context. AWS Security Token Service (AWS STS) automatically attaches this policy to assumed roles. The identity context is passed as ProvidedContext. */
    public static AWSIAMIdentityCenterAllowListForIdentityContext = 'AWSIAMIdentityCenterAllowListForIdentityContext';
    /** Grants full access to the Identity Sync service */
    public static AWSIdentitySyncFullAccess = 'AWSIdentitySyncFullAccess';
    /** Read only access to the Identity Sync service */
    public static AWSIdentitySyncReadOnlyAccess = 'AWSIdentitySyncReadOnlyAccess';
    /** Provides full access to all AWS Image Builder actions and resource scoped access to related AWS services. */
    public static AWSImageBuilderFullAccess = 'AWSImageBuilderFullAccess';
    /** Provides read only access to all AWS Image Builder actions. */
    public static AWSImageBuilderReadOnlyAccess = 'AWSImageBuilderReadOnlyAccess';
    /** Provides read and write access to the jobs created under the AWS account. */
    public static AWSImportExportFullAccess = 'AWSImportExportFullAccess';
    /** Provides read only access to the jobs created under the AWS account. */
    public static AWSImportExportReadOnlyAccess = 'AWSImportExportReadOnlyAccess';
    /** Grants Incident Manager permissions to call other AWS services as a part of managing an incident. */
    public static AWSIncidentManagerIncidentAccessServiceRolePolicy = 'AWSIncidentManagerIncidentAccessServiceRolePolicy';
    /** This policy grants permissions to start, view, and update incidents with full access to custom timeline events & related items. Assign this policy to users who will create and resolve incidents. */
    public static AWSIncidentManagerResolverAccess = 'AWSIncidentManagerResolverAccess';
    /** This policy grants Incident Manager permission to manage incident records and related resources on your behalf. */
    public static AWSIncidentManagerServiceRolePolicy = 'aws-service-role/AWSIncidentManagerServiceRolePolicy';
    /** Provides full access to AWS IoT 1-Click. */
    public static AWSIoT1ClickFullAccess = 'AWSIoT1ClickFullAccess';
    /** Provides read only access to AWS IoT 1-Click. */
    public static AWSIoT1ClickReadOnlyAccess = 'AWSIoT1ClickReadOnlyAccess';
    /** Provides full access to IoT Analytics. */
    public static AWSIoTAnalyticsFullAccess = 'AWSIoTAnalyticsFullAccess';
    /** Provides read only access to IoT Analytics. */
    public static AWSIoTAnalyticsReadOnlyAccess = 'AWSIoTAnalyticsReadOnlyAccess';
    /** This policy gives full access to the AWS IoT configuration actions */
    public static AWSIoTConfigAccess = 'AWSIoTConfigAccess';
    /** This policy gives read only access to the AWS IoT configuration actions */
    public static AWSIoTConfigReadOnlyAccess = 'AWSIoTConfigReadOnlyAccess';
    /** This policy gives full access to the AWS IoT messaging actions */
    public static AWSIoTDataAccess = 'AWSIoTDataAccess';
    /** Provides write access to IoT thing groups and read access to IoT Certificates for execution of ADD_THINGS_TO_THING_GROUP mitigation action */
    public static AWSIoTDeviceDefenderAddThingsToThingGroupMitigationAction = 'service-role/AWSIoTDeviceDefenderAddThingsToThingGroupMitigationAction';
    /** Provides read access for IoT and related resources */
    public static AWSIoTDeviceDefenderAudit = 'service-role/AWSIoTDeviceDefenderAudit';
    /** Provides access for enabling IoT logging for execution of ENABLE_IOT_LOGGING mitigation action */
    public static AWSIoTDeviceDefenderEnableIoTLoggingMitigationAction = 'service-role/AWSIoTDeviceDefenderEnableIoTLoggingMitigationAction';
    /** Provides messages publish access to SNS topic for execution of PUBLISH_FINDING_TO_SNS mitigation action */
    public static AWSIoTDeviceDefenderPublishFindingsToSNSMitigationAction = 'service-role/AWSIoTDeviceDefenderPublishFindingsToSNSMitigationAction';
    /** Provides write access to IoT policies for execution of REPLACE_DEFAULT_POLICY_VERSION mitigation action */
    public static AWSIoTDeviceDefenderReplaceDefaultPolicyMitigationAction = 'service-role/AWSIoTDeviceDefenderReplaceDefaultPolicyMitigationAction';
    /** Provides write access to IoT CA certificates for execution of  UPDATE_CA_CERTIFICATE mitigation action */
    public static AWSIoTDeviceDefenderUpdateCACertMitigationAction = 'service-role/AWSIoTDeviceDefenderUpdateCACertMitigationAction';
    /** Provides write access to IoT certificates for execution of UPDATE_DEVICE_CERTIFICATE mitigation action */
    public static AWSIoTDeviceDefenderUpdateDeviceCertMitigationAction = 'service-role/AWSIoTDeviceDefenderUpdateDeviceCertMitigationAction';
    /** Allows AWS IoT Device Tester to run the FreeRTOS qualification suite by allowing access to services including IoT, S3, and IAM */
    public static AWSIoTDeviceTesterForFreeRTOSFullAccess = 'AWSIoTDeviceTesterForFreeRTOSFullAccess';
    /** Allows AWS IoT Device Tester to run the AWS Greengrass qualification suite by allowing access to related services including Lambda, IoT, API Gateway, IAM */
    public static AWSIoTDeviceTesterForGreengrassFullAccess = 'AWSIoTDeviceTesterForGreengrassFullAccess';
    /** Provides full access to IoT Events. */
    public static AWSIoTEventsFullAccess = 'AWSIoTEventsFullAccess';
    /** Provides read only access to IoT Events. */
    public static AWSIoTEventsReadOnlyAccess = 'AWSIoTEventsReadOnlyAccess';
    /** Federation access for IoT Fleet Hub applications */
    public static AWSIoTFleetHubFederationAccess = 'service-role/AWSIoTFleetHubFederationAccess';
    /** Grants permissions to AWS Resources and metaData used or managed by AWSIoTFleetwise for auxiliary features */
    public static AWSIoTFleetwiseServiceRolePolicy = 'aws-service-role/AWSIoTFleetwiseServiceRolePolicy';
    /** This policy gives full access to the AWS IoT configuration and messaging actions */
    public static AWSIoTFullAccess = 'AWSIoTFullAccess';
    /** Allows creation of Amazon CloudWatch Log groups and streaming logs to the groups */
    public static AWSIoTLogging = 'service-role/AWSIoTLogging';
    /** Provides full access to managed integrations for AWS IoT Device Management and related services. */
    public static AWSIoTManagedIntegrationsFullAccess = 'AWSIoTManagedIntegrationsFullAccess';
    /** Provides managed integrations for AWS IoT Device Management permission to publish logs and metrics on your behalf. */
    public static AWSIoTManagedIntegrationsRolePolicy = 'aws-service-role/AWSIoTManagedIntegrationsRolePolicy';
    /** Allows access to create AWS IoT Job and describe the AWS code signer job */
    public static AWSIoTOTAUpdate = 'service-role/AWSIoTOTAUpdate';
    /** Allows access to all AWS services supported in AWS IoT Rule Actions */
    public static AWSIoTRuleActions = 'service-role/AWSIoTRuleActions';
    /** Provides full access to manage AWS IoT SiteWise using the AWS Management Console. Note this policy also grants access to create and list data stores used with AWS IoT SiteWise (e.g. AWS IoT Analytics), access to list and view AWS IoT Greengrass resources, list and modify AWS Secrets Manager secrets, retrieve AWS IoT thing shadows, list resources with specific tags, and create and use a service-linked role for AWS IoT SiteWise. */
    public static AWSIoTSiteWiseConsoleFullAccess = 'AWSIoTSiteWiseConsoleFullAccess';
    /** Provides full access to IoT SiteWise. */
    public static AWSIoTSiteWiseFullAccess = 'AWSIoTSiteWiseFullAccess';
    /** This policy grants permissions to access AWS IoT SiteWise assets and asset data, create AWS IoT SiteWise Monitor resources, and list AWS SSO users. */
    public static AWSIoTSiteWiseMonitorPortalAccess = 'service-role/AWSIoTSiteWiseMonitorPortalAccess';
    /** This role grants AWS IoT SiteWise monitor permissions to access your AWS IoT SiteWise assets & asset properties, and create AWS IoT Sitewise projects, dashboards & access policies through AWS IoT SiteWise portals. */
    public static AWSIoTSiteWiseMonitorServiceRolePolicy = 'aws-service-role/AWSIoTSiteWiseMonitorServiceRolePolicy';
    /** Provides read only access to IoT SiteWise. */
    public static AWSIoTSiteWiseReadOnlyAccess = 'AWSIoTSiteWiseReadOnlyAccess';
    /** This policy allows users to register things at bulk using AWS IoT StartThingRegistrationTask API */
    public static AWSIoTThingsRegistration = 'service-role/AWSIoTThingsRegistration';
    /** Allows AWS IoT TwinMaker to call other AWS services and to sync their resources on your behalf. */
    public static AWSIoTTwinMakerServiceRolePolicy = 'aws-service-role/AWSIoTTwinMakerServiceRolePolicy';
    /** Allows the associated identity data access to AWS IoT Wireless devices. */
    public static AWSIoTWirelessDataAccess = 'AWSIoTWirelessDataAccess';
    /** Allows the associated identity full access to all AWS IoT Wireless operations. */
    public static AWSIoTWirelessFullAccess = 'AWSIoTWirelessFullAccess';
    /** Provides IoT Wireless full access to publish to IoT Rules Engine on your behalf. */
    public static AWSIoTWirelessFullPublishAccess = 'AWSIoTWirelessFullPublishAccess';
    /** Allows the associated identity access to create, list and describe IoT Certificates */
    public static AWSIoTWirelessGatewayCertManager = 'AWSIoTWirelessGatewayCertManager';
    /** Allows the associated identity to create Amazon CloudWatch Logs groups and stream logs to the groups. */
    public static AWSIoTWirelessLogging = 'AWSIoTWirelessLogging';
    /** Allows the associated identity read only access to AWS IoT wireless. */
    public static AWSIoTWirelessReadOnlyAccess = 'AWSIoTWirelessReadOnlyAccess';
    /** Allows VPC IP Address Manager to access VPC resources and integrate with AWS Organizations on your behalf. */
    public static AWSIPAMServiceRolePolicy = 'aws-service-role/AWSIPAMServiceRolePolicy';
    /** Used by AWS IQ to execute payment requests on behalf of a customer */
    public static AWSIQContractServiceRolePolicy = 'aws-service-role/AWSIQContractServiceRolePolicy';
    /** Provides full access to AWS IQ */
    public static AWSIQFullAccess = 'AWSIQFullAccess';
    /** Allows AWS IQ to manage the role assumed by AWS IQ experts. */
    public static AWSIQPermissionServiceRolePolicy = 'aws-service-role/AWSIQPermissionServiceRolePolicy';
    /** Enables access to AWS services and resources required for AWS KMS custom key stores */
    public static AWSKeyManagementServiceCustomKeyStoresServiceRolePolicy = 'aws-service-role/AWSKeyManagementServiceCustomKeyStoresServiceRolePolicy';
    /** Enables AWS KMS to synchronize the shared properties of multi-Region keys. */
    public static AWSKeyManagementServiceMultiRegionKeysServiceRolePolicy = 'aws-service-role/AWSKeyManagementServiceMultiRegionKeysServiceRolePolicy';
    /** Provides access to AWS Key Management Service (KMS). */
    public static AWSKeyManagementServicePowerUser = 'AWSKeyManagementServicePowerUser';
    /** Provides cross account access to Glue resources via Lake Formation. Also grants read access to other required services such as organizations and resource access manager */
    public static AWSLakeFormationCrossAccountManager = 'AWSLakeFormationCrossAccountManager';
    /** Grants administrative access to AWS Lake Formation and related services, such as AWS Glue, to manage data lakes */
    public static AWSLakeFormationDataAdmin = 'AWSLakeFormationDataAdmin';
    /** Grants full access to AWS Lambda service, AWS Lambda console features, and other related AWS services. */
    public static AWSLambdaFullAccess = 'AWSLambda_FullAccess';
    /** Grants read-only access to AWS Lambda service, AWS Lambda console features, and other related AWS services. */
    public static AWSLambdaReadOnlyAccess = 'AWSLambda_ReadOnlyAccess';
    /** Provides write permissions to CloudWatch Logs. */
    public static AWSLambdaBasicExecutionRole = 'service-role/AWSLambdaBasicExecutionRole';
    /** Provides list and read access to DynamoDB streams and write permissions to CloudWatch logs. */
    public static AWSLambdaDynamoDBExecutionRole = 'service-role/AWSLambdaDynamoDBExecutionRole';
    /** Provides minimum permissions for a Lambda function to manage ENIs (create, describe, delete) used by a VPC-enabled Lambda Function. */
    public static AWSLambdaENIManagementAccess = 'service-role/AWSLambdaENIManagementAccess';
    /** Provides Put, Get access to S3 and full access to CloudWatch Logs. */
    public static AWSLambdaExecute = 'AWSLambdaExecute';
    /** Provides read access to DynamoDB Streams. */
    public static AWSLambdaInvocationDynamoDB = 'AWSLambdaInvocation-DynamoDB';
    /** Provides list and read access to Kinesis streams and write permissions to CloudWatch logs. */
    public static AWSLambdaKinesisExecutionRole = 'service-role/AWSLambdaKinesisExecutionRole';
    /** Provides permissions required to access MSK Cluster within a VPC, manage ENIs (create, describe, delete) in the VPC and write permissions to CloudWatch Logs. */
    public static AWSLambdaMSKExecutionRole = 'service-role/AWSLambdaMSKExecutionRole';
    /** Grants Lambda Replicator necessary permissions to replicate functions across regions */
    public static AWSLambdaReplicator = 'aws-service-role/AWSLambdaReplicator';
    /** Default policy for AWS Lambda service role. */
    public static AWSLambdaRole = 'service-role/AWSLambdaRole';
    /** Provides receive message, delete message, and read attribute access to SQS queues, and write permissions to CloudWatch logs. */
    public static AWSLambdaSQSQueueExecutionRole = 'service-role/AWSLambdaSQSQueueExecutionRole';
    /** Provides minimum permissions for a Lambda function to execute while accessing a resource within a VPC - create, describe, delete network interfaces and write permissions to CloudWatch Logs. */
    public static AWSLambdaVPCAccessExecutionRole = 'service-role/AWSLambdaVPCAccessExecutionRole';
    /** Provides permissions to allow access to the AWS License Manager API actions required to consume upon licenses that the user has entitlements. */
    public static AWSLicenseManagerConsumptionPolicy = 'service-role/AWSLicenseManagerConsumptionPolicy';
    /** Allows AWS License Manager Linux Subscriptions Service to manage resources on your behalf. */
    public static AWSLicenseManagerLinuxSubscriptionsServiceRolePolicy = 'aws-service-role/AWSLicenseManagerLinuxSubscriptionsServiceRolePolicy';
    /** AWS License Manager service master account role policy */
    public static AWSLicenseManagerMasterAccountRolePolicy = 'aws-service-role/AWSLicenseManagerMasterAccountRolePolicy';
    /** AWS License Manager service member account role policy */
    public static AWSLicenseManagerMemberAccountRolePolicy = 'aws-service-role/AWSLicenseManagerMemberAccountRolePolicy';
    /** AWS License Manager service default role policy */
    public static AWSLicenseManagerServiceRolePolicy = 'aws-service-role/AWSLicenseManagerServiceRolePolicy';
    /** Allows AWS License Manager User Subscriptions Service to manage resources on your behalf. */
    public static AWSLicenseManagerUserSubscriptionsServiceRolePolicy = 'aws-service-role/AWSLicenseManagerUserSubscriptionsServiceRolePolicy';
    /** Allows AWS M2 to manage AWS resources on your behalf. */
    public static AWSM2ServicePolicy = 'aws-service-role/AWSM2ServicePolicy';
    /** Allows AWS Managed Services to read the values of the tags on AWS resources */
    public static AWSManagedServicesContactsServiceRolePolicy = 'aws-service-role/AWSManagedServices_ContactsServiceRolePolicy';
    /** AWS Managed Services - policy to manage detective controls infrastructure */
    public static AWSManagedServicesDetectiveControlsConfigServiceRolePolicy = 'aws-service-role/AWSManagedServices_DetectiveControlsConfig_ServiceRolePolicy';
    /** AWS Managed Services policy to enable AMS event processor feature. */
    public static AWSManagedServicesEventsServiceRolePolicy = 'aws-service-role/AWSManagedServices_EventsServiceRolePolicy';
    /** Allows Amazon's AWS Managed Service's Self Service Reporting feature to read AWS Organization data on your behalf to enable organization level aggregated reporting */
    public static AWSManagedServicesSelfServiceReportingServiceRolePolicy = 'aws-service-role/AWSManagedServices_SelfServiceReporting_ServiceRolePolicy';
    /** Allows AWS Managed Services to manage deployment toolkit on your behalf. */
    public static AWSManagedServicesDeploymentToolkitPolicy = 'aws-service-role/AWSManagedServicesDeploymentToolkitPolicy';
    /** Provides full access to configure and customize the AWS Management Console */
    public static AWSManagementConsoleAdministratorAccess = 'job-function/AWSManagementConsoleAdministratorAccess';
    /** Grants access to essential AWS Management Console features and user experience (UX) capabilities for non-administrative users. */
    public static AWSManagementConsoleBasicUserAccess = 'AWSManagementConsoleBasicUserAccess';
    /** Allows AWS Marketplace to copy your Amazon Machine Images (AMIs) in order to list them on AWS Marketplace */
    public static AWSMarketplaceAmiIngestion = 'AWSMarketplaceAmiIngestion';
    /** Allows AWS Marketplace to create and manage seller deployment parameters for the products that you subscribe to on AWS Marketplace. */
    public static AWSMarketplaceDeploymentServiceRolePolicy = 'aws-service-role/AWSMarketplaceDeploymentServiceRolePolicy';
    /** Provides the ability to subscribe and unsubscribe to AWS Marketplace software, allows users to manage Marketplace software instances from the Marketplace 'Your Software' page, and provides administrative access to EC2. */
    public static AWSMarketplaceFullAccess = 'AWSMarketplaceFullAccess';
    /** Provides read access to AWS Marketplace Entitlements */
    public static AWSMarketplaceGetEntitlements = 'AWSMarketplaceGetEntitlements';
    /** Enables access to AWS Services and Resources used or managed by AWS Marketplace for license management. */
    public static AWSMarketplaceLicenseManagementServiceRolePolicy = 'aws-service-role/AWSMarketplaceLicenseManagementServiceRolePolicy';
    /** Provides the ability to subscribe and unsubscribe to AWS Marketplace software */
    public static AWSMarketplaceManageSubscriptions = 'AWSMarketplaceManageSubscriptions';
    /** Provides full access to AWS Marketplace Metering. */
    public static AWSMarketplaceMeteringFullAccess = 'AWSMarketplaceMeteringFullAccess';
    /** Provides permissions to register a resource and track usage through AWS Marketplace Metering Service. */
    public static AWSMarketplaceMeteringRegisterUsage = 'AWSMarketplaceMeteringRegisterUsage';
    /** Provides full access to all administrative actions for an AWS Marketplace eProcurement integration. */
    public static AWSMarketplaceProcurementSystemAdminFullAccess = 'AWSMarketplaceProcurementSystemAdminFullAccess';
    /** Enables access for AWS Marketplace services to purchase order management. */
    public static AWSMarketplacePurchaseOrdersServiceRolePolicy = 'aws-service-role/AWSMarketplacePurchaseOrdersServiceRolePolicy';
    /** Provides the ability to review AWS Marketplace subscriptions */
    public static AWSMarketplaceReadOnly = 'AWSMarketplaceRead-only';
    /** Enables access to AWS Services and Resources used or managed by AWS Marketplace for Resale Authorization. */
    public static AWSMarketplaceResaleAuthorizationServiceRolePolicy = 'aws-service-role/AWSMarketplaceResaleAuthorizationServiceRolePolicy';
    /** Provides full access to all seller operations on the AWS Marketplace and other AWS services such as AMI management. */
    public static AWSMarketplaceSellerFullAccess = 'AWSMarketplaceSellerFullAccess';
    /** Provides sellers access to Offers and Agreements management activities. */
    public static AWSMarketplaceSellerOfferManagement = 'AWSMarketplaceSellerOfferManagement';
    /** Provides sellers full access to AWS Marketplace Management Products page and other AWS services such as AMI management. */
    public static AWSMarketplaceSellerProductsFullAccess = 'AWSMarketplaceSellerProductsFullAccess';
    /** Provide sellers read-only access to AWS Marketplace Management Products page. */
    public static AWSMarketplaceSellerProductsReadOnly = 'AWSMarketplaceSellerProductsReadOnly';
    /** The default policy that enables access to AWS Services and Resources used or managed by MediaConnect. */
    public static AWSMediaConnectServicePolicy = 'aws-service-role/AWSMediaConnectServicePolicy';
    /** Allows MediaLive Anywhere to create and manage AWS resources on your behalf. */
    public static AWSMediaLiveAnywhereServiceRolePolicy = 'aws-service-role/AWSMediaLiveAnywhereServiceRolePolicy';
    /** Enable access to AWS Resources used or managed by MediaTailor */
    public static AWSMediaTailorServiceRolePolicy = 'aws-service-role/AWSMediaTailorServiceRolePolicy';
    /** Policy allows AWSMigrationHubService to call AWSApplicationDiscoveryService on behalf of the customer. */
    public static AWSMigrationHubDiscoveryAccess = 'service-role/AWSMigrationHubDiscoveryAccess';
    /** Policy for Database Migration Service to assume role in customer's account to call Migration Hub */
    public static AWSMigrationHubDMSAccess = 'service-role/AWSMigrationHubDMSAccess';
    /** Managed policy to provide the customer access to the Migration Hub Service */
    public static AWSMigrationHubFullAccess = 'AWSMigrationHubFullAccess';
    /** Provides limited access to AWS Migration Hub, AWS Application Discovery Service, Amazon Simple Storage Service and AWS Secrets Manager. This policy also grants full access to AWS Migration Hub Orchestrator service. */
    public static AWSMigrationHubOrchestratorConsoleFullAccess = 'AWSMigrationHubOrchestratorConsoleFullAccess';
    /** This policy needs to be attached for SAP and MGN migrated instance for our service to orchestrate instances by downloading scripts from S3 and to fetch secret values inside EC2 instance. */
    public static AWSMigrationHubOrchestratorInstanceRolePolicy = 'AWSMigrationHubOrchestratorInstanceRolePolicy';
    /** Provides limited access to Amazon Simple Storage Service, AWS Secrets Manager and Plugin related actions for AWS Migration Hub Orchestrator. */
    public static AWSMigrationHubOrchestratorPlugin = 'AWSMigrationHubOrchestratorPlugin';
    /** Provides permissions necessary for Migration Hub Orchestrator to migrate and modernize your on-premises workloads */
    public static AWSMigrationHubOrchestratorServiceRolePolicy = 'aws-service-role/AWSMigrationHubOrchestratorServiceRolePolicy';
    /** Grants full access to AWS Migration Hub Refactor Spaces and other AWS related services except AWS Transit Gateway and EC2 security groups not required when using environments without a network bridge. This policy also excludes permissions required for AWS Lambda and AWS Resource Access Manager as they can be scoped down based on tags. */
    public static AWSMigrationHubRefactorSpacesEnvironmentsWithoutBridgesFullAccess = 'AWSMigrationHubRefactorSpaces-EnvironmentsWithoutBridgesFullAccess';
    /** Use in the IAM service role passed to the SSM Automation document AWSRefactorSpaces-CreateResources to grant permissions required to run the automation. The policy grants read/write access to EC2 tags in order to track automation progress. When the Refactor Spaces environment's network bridge is enabled, the automation also adds the environment's security group to the EC2 instance to permit traffic from other Refactor Spaces services in the environment. The policy also grants access to the Application Migration Service's post launch actions SSM parameters. */
    public static AWSMigrationHubRefactorSpacesSSMAutomationPolicy = 'service-role/AWSMigrationHubRefactorSpaces-SSMAutomationPolicy';
    /** Grants full access to AWS MigrationHub Refactor Spaces, AWS MigrationHub Refactor Spaces console features and other related AWS services except permissions required for AWS Lambda and AWS Resource Access Manager as they can be scoped down based on tags. */
    public static AWSMigrationHubRefactorSpacesFullAccess = 'AWSMigrationHubRefactorSpacesFullAccess';
    /** Provides access to AWS Resources managed or used by AWS Migration Hub Refactor Spaces. */
    public static AWSMigrationHubRefactorSpacesServiceRolePolicy = 'aws-service-role/AWSMigrationHubRefactorSpacesServiceRolePolicy';
    /** Policy for Server Migration Service to assume role in customer's account to call Migration Hub */
    public static AWSMigrationHubSMSAccess = 'service-role/AWSMigrationHubSMSAccess';
    /** Grants permissions to allow communication with the AWS Migration Hub Strategy Recommendations service, read/write access to S3 buckets related to the service, Amazon API Gateway access to upload logs and metrics to AWS, AWS Secrets Manager access to fetch credentials, and any related services. */
    public static AWSMigrationHubStrategyCollector = 'AWSMigrationHubStrategyCollector';
    /** Grants full access to the AWS Migration Hub Strategy Recommendations service and access to related AWS services through the AWS Management Console. */
    public static AWSMigrationHubStrategyConsoleFullAccess = 'AWSMigrationHubStrategyConsoleFullAccess';
    /** Enable access to AWS Resources used or managed by AWS Migration Hub Strategy Recommendations service. */
    public static AWSMigrationHubStrategyServiceRolePolicy = 'aws-service-role/AWSMigrationHubStrategyServiceRolePolicy';
    /** Grants permissions to Amazon MSK Replicator to replicate data between MSK Clusters. */
    public static AWSMSKReplicatorExecutionRole = 'service-role/AWSMSKReplicatorExecutionRole';
    /** Grants full access to AWS Network Firewall service, including permissions to create, configure, manage, and delete firewall resources, policies, and rule groups. Additionally includes permissions to modify VPC endpoints, S3 bucket policies, CloudWatch Logs configurations, and create service-linked roles for Network Firewall and log delivery services */
    public static AWSNetworkFirewallFullAccess = 'AWSNetworkFirewallFullAccess';
    /** Provides read-only access to AWS Network Firewall resources via the AWS Management Console, CLI, and SDKs. This policy allows users to view and monitor firewall configurations, policies, rule groups, and associated resources, without the ability to make changes. */
    public static AWSNetworkFirewallReadOnlyAccess = 'AWSNetworkFirewallReadOnlyAccess';
    /** Allow AWSNetworkFirewall to create and manage necessary resources for your Firewalls. */
    public static AWSNetworkFirewallServiceRolePolicy = 'aws-service-role/AWSNetworkFirewallServiceRolePolicy';
    /** Allow NetworkManager to access resources associated with your Core Network */
    public static AWSNetworkManagerCloudWANServiceRolePolicy = 'aws-service-role/AWSNetworkManagerCloudWANServiceRolePolicy';
    /** Provides full access to Amazon NetworkManager via the AWS Management Console. */
    public static AWSNetworkManagerFullAccess = 'AWSNetworkManagerFullAccess';
    /** Provides read only access to Amazon NetworkManager via the AWS Management Console. */
    public static AWSNetworkManagerReadOnlyAccess = 'AWSNetworkManagerReadOnlyAccess';
    /** Allow NetworkManager to access resources associated with your Global Networks */
    public static AWSNetworkManagerServiceRolePolicy = 'aws-service-role/AWSNetworkManagerServiceRolePolicy';
    /** Service-linked role permissions for CloudWatch Logs centralization */
    public static AWSObservabilityAdminLogsCentralizationServiceRolePolicy = 'aws-service-role/AWSObservabilityAdminLogsCentralizationServiceRolePolicy';
    /** Provides access to manage AWS Config Configuration Recorder, manage AWS Config Configuration Aggregator, create AWS Config Service Linked Role for Configuration Recorder functionality, consume recorder configuration data, and read AWS Organizations data for organizational features. */
    public static AWSObservabilityAdminServiceRolePolicy = 'aws-service-role/AWSObservabilityAdminServiceRolePolicy';
    /** Provides access to manage AWS Config recorder resource and telemetry settings on AWS resources including logs, metrics. */
    public static AWSObservabilityAdminTelemetryEnablementServiceRolePolicy = 'aws-service-role/AWSObservabilityAdminTelemetryEnablementServiceRolePolicy';
    /** Provides full access to AWS Organizations. */
    public static AWSOrganizationsFullAccess = 'AWSOrganizationsFullAccess';
    /** Provides read-only access to AWS Organizations. */
    public static AWSOrganizationsReadOnlyAccess = 'AWSOrganizationsReadOnlyAccess';
    /** A policy to allow AWS Organizations to share trust with other approved AWS Services for the purpose of simplifying customer configuration. */
    public static AWSOrganizationsServiceTrustPolicy = 'aws-service-role/AWSOrganizationsServiceTrustPolicy';
    /** This policy grants permissions that allow you to install an Outpost server on your on-premises network. */
    public static AWSOutpostsAuthorizeServerPolicy = 'AWSOutpostsAuthorizeServerPolicy';
    /** Service Linked Role policy to enable access to AWS resources managed by AWS Outposts */
    public static AWSOutpostsServiceRolePolicy = 'aws-service-role/AWSOutpostsServiceRolePolicy';
    /** Allows AWS IoT software on an AWS Panorama Appliance to upload logs to Amazon CloudWatch. */
    public static AWSPanoramaApplianceRolePolicy = 'service-role/AWSPanoramaApplianceRolePolicy';
    /** Allows an AWS Panorama Appliance to upload logs to Amazon CloudWatch, and to get objects from Amazon S3 access points created for use with AWS Panorama. */
    public static AWSPanoramaApplianceServiceRolePolicy = 'service-role/AWSPanoramaApplianceServiceRolePolicy';
    /** Provides full access to AWS Panorama */
    public static AWSPanoramaFullAccess = 'AWSPanoramaFullAccess';
    /** Allows an AWS Lambda function on an AWS Panorama Appliance to manage resources in Panorama, upload logs and metrics to Amazon CloudWatch, and to manage objects in buckets created for use with Panorama. */
    public static AWSPanoramaGreengrassGroupRolePolicy = 'service-role/AWSPanoramaGreengrassGroupRolePolicy';
    /** Allows Amazon SageMaker to manage objects in buckets created for use with AWS Panorama. */
    public static AWSPanoramaSageMakerRolePolicy = 'service-role/AWSPanoramaSageMakerRolePolicy';
    /** Allows AWS Panorama to manage resources in AWS IoT, AWS Secrets Manager and AWS Panorama. */
    public static AWSPanoramaServiceLinkedRolePolicy = 'aws-service-role/AWSPanoramaServiceLinkedRolePolicy';
    /** Allows AWS Panorama to manage resources in Amazon S3, AWS IoT, AWS IoT GreenGrass, AWS Lambda, Amazon SageMaker, and Amazon CloudWatch Logs, and to pass service roles to AWS IoT, AWS IoT GreenGrass, and Amazon SageMaker. */
    public static AWSPanoramaServiceRolePolicy = 'service-role/AWSPanoramaServiceRolePolicy';
    /** Provides full access to AWS Partner Central and related AWS Services. */
    public static AWSPartnerCentralFullAccess = 'AWSPartnerCentralFullAccess';
    /** Provides necessary access for opportunity management activities. */
    public static AWSPartnerCentralOpportunityManagement = 'AWSPartnerCentralOpportunityManagement';
    /** Provides necessary access for developer testing in the Sandbox catalog. */
    public static AWSPartnerCentralSandboxFullAccess = 'AWSPartnerCentralSandboxFullAccess';
    /** Provides access to the ResourceSnapshotJob to read a resource and snapshot it in the target engagement. */
    public static AWSPartnerCentralSellingResourceSnapshotJobExecutionRolePolicy = 'AWSPartnerCentralSellingResourceSnapshotJobExecutionRolePolicy';
    /** This policy can be used to grant read-only access to APIs that can read service metadata for services in your AWS account. You can use this policy to provide your partners in the Partner-Led Support Program with access to the services specified in the permissions details section below. */
    public static AWSPartnerLedSupportReadOnlyAccess = 'AWSPartnerLedSupportReadOnlyAccess';
    /** Grants permission to AWS PCS compute nodes to connect to AWS PCS clusters. */
    public static AWSPCSComputeNodePolicy = 'AWSPCSComputeNodePolicy';
    /** Grants permissions to PCS to manage resources on your behalf. */
    public static AWSPCSServiceRolePolicy = 'aws-service-role/AWSPCSServiceRolePolicy';
    /** Provides full access to AWS Price List Service. */
    public static AWSPriceListServiceFullAccess = 'AWSPriceListServiceFullAccess';
    /** Provides auditor access to AWS Private Certificate Authority */
    public static AWSPrivateCAAuditor = 'AWSPrivateCAAuditor';
    /** Grants essential permissions for the AWS Private CA Connector for Kubernetes. */
    public static AWSPrivateCAConnectorForKubernetesPolicy = 'AWSPrivateCAConnectorForKubernetesPolicy';
    /** Provides full access to AWS Private Certificate Authority */
    public static AWSPrivateCAFullAccess = 'AWSPrivateCAFullAccess';
    /** Provides privileged certificate user access to AWS Private Certificate Authority */
    public static AWSPrivateCAPrivilegedUser = 'AWSPrivateCAPrivilegedUser';
    /** Provides read only access to AWS Private Certificate Authority */
    public static AWSPrivateCAReadOnly = 'AWSPrivateCAReadOnly';
    /** Provides certificate user access to AWS Private Certificate Authority */
    public static AWSPrivateCAUser = 'AWSPrivateCAUser';
    /** Provides full access to all administrative actions for an AWS Private Marketplace. */
    public static AWSPrivateMarketplaceAdminFullAccess = 'AWSPrivateMarketplaceAdminFullAccess';
    /** Provides access to creating requests in an AWS Private Marketplace. */
    public static AWSPrivateMarketplaceRequests = 'AWSPrivateMarketplaceRequests';
    /** Allows AWS Private Networks Service to manage resources on behalf of the customer. */
    public static AWSPrivateNetworksServiceRolePolicy = 'aws-service-role/AWSPrivateNetworksServiceRolePolicy';
    /** Permissions CodeBuild needs to run a build for AWS Proton CodeBuild Provisioning. */
    public static AWSProtonCodeBuildProvisioningBasicAccess = 'AWSProtonCodeBuildProvisioningBasicAccess';
    /** Allows AWS Proton to manage Proton resource provisioning using CodeBuild and other AWS services on your behalf. */
    public static AWSProtonCodeBuildProvisioningServiceRolePolicy = 'aws-service-role/AWSProtonCodeBuildProvisioningServiceRolePolicy';
    /** Provides access to the AWS Proton APIs and Management Console, but does not allow administration of Proton templates or environments. */
    public static AWSProtonDeveloperAccess = 'AWSProtonDeveloperAccess';
    /** Provides full access to the AWS Proton APIs and Management Console. In addition to these permissions, access to Amazon S3 is also needed to register template bundles from your S3 buckets, as well as access to Amazon IAM to create and manage the service roles for Proton. */
    public static AWSProtonFullAccess = 'AWSProtonFullAccess';
    /** Provides read only access to the AWS Proton APIs and Management Console. */
    public static AWSProtonReadOnlyAccess = 'AWSProtonReadOnlyAccess';
    /** Policy which allows AWS Proton to sync your service, environment and component definitions from your git repository to AWS Proton. */
    public static AWSProtonServiceGitSyncServiceRolePolicy = 'aws-service-role/AWSProtonServiceGitSyncServiceRolePolicy';
    /** Policy which allows AWS Proton to sync your git repository contents to Proton or sync Proton contents to your git repositories. */
    public static AWSProtonSyncServiceRolePolicy = 'aws-service-role/AWSProtonSyncServiceRolePolicy';
    /** Grants permissions to view and modify purchase orders on billing console */
    public static AWSPurchaseOrdersServiceRolePolicy = 'AWSPurchaseOrdersServiceRolePolicy';
    /** The AWSQuickSetupCFGCPacksPermissionsBoundary policy defines the list of permissions that are permitted in an IAM role created by Quick Setup. Quick Setup uses a role created with this policy to deploy AWS Config conformance packs. */
    public static AWSQuickSetupCFGCPacksPermissionsBoundary = 'AWSQuickSetupCFGCPacksPermissionsBoundary';
    /** Provides permissions for AWS Systems Manager Quick Setup to deploy multiple configuration types. These configuration types create IAM roles and automations that configure frequently used Amazon Web Services services and features with recommended best practices. */
    public static AWSQuickSetupDeploymentRolePolicy = 'AWSQuickSetupDeploymentRolePolicy';
    /** The AWSQuickSetupDevOpsGuruPermissionsBoundary policy defines the list of permissions that are permitted in an IAM role created by Quick Setup. Quick Setup uses a role created with this policy to enable and configure Amazon DevOps Guru. This policy also provides permissions to enable Systems Manager Explorer. */
    public static AWSQuickSetupDevOpsGuruPermissionsBoundary = 'AWSQuickSetupDevOpsGuruPermissionsBoundary';
    /** QuickSetup creates IAM roles which enable it to configure the Systems Manager Distributor feature on your behalf, and uses this policy when creating such roles to define the boundary of their permissions. */
    public static AWSQuickSetupDistributorPermissionsBoundary = 'AWSQuickSetupDistributorPermissionsBoundary';
    /** This policy grants permissions that allow Systems Manager to run the AWSQuickSetupType-EnableAREX Automation runbook, which enables AWS Resource Explorer for use with Systems Manager. */
    public static AWSQuickSetupEnableAREXExecutionPolicy = 'AWSQuickSetupEnableAREXExecutionPolicy';
    /** This policy grants permissions that allow principals to run the AWSQuickSetupType-EnableDHMC Automation runbook, which enables Default Host Management Configuration. */
    public static AWSQuickSetupEnableDHMCExecutionPolicy = 'AWSQuickSetupEnableDHMCExecutionPolicy';
    /** This policy allows Quick Setup to deploy the configuration type required to set up just-in-time node access. */
    public static AWSQuickSetupJITNADeploymentRolePolicy = 'AWSQuickSetupJITNADeploymentRolePolicy';
    /** This policy grants administrative permissions that allow Systems Manager to create a default IAM instance profile for the Quick Setup capability and attach it to Amazon EC2 instances that don't already have an instance. profile attached. */
    public static AWSQuickSetupManagedInstanceProfileExecutionPolicy = 'AWSQuickSetupManagedInstanceProfileExecutionPolicy';
    /** This policy provides permissions to enable just-in-time node access for Systems Manager. */
    public static AWSQuickSetupManageJITNAResourcesExecutionPolicy = 'AWSQuickSetupManageJITNAResourcesExecutionPolicy';
    /** Provides read-only permissions to access patch baselines that have been configured by an administrator in the current AWS account or organization using Quick Setup. */
    public static AWSQuickSetupPatchPolicyBaselineAccess = 'AWSQuickSetupPatchPolicyBaselineAccess';
    /** Provides permissions that allow Quick Setup to create resources associated with a patch policy configuration. */
    public static AWSQuickSetupPatchPolicyDeploymentRolePolicy = 'AWSQuickSetupPatchPolicyDeploymentRolePolicy';
    /** QuickSetup creates IAM roles which enable it to configure the Systems Manager Patch Manager feature on your behalf, and uses this policy when creating such roles to define the boundary of their permissions. */
    public static AWSQuickSetupPatchPolicyPermissionsBoundary = 'AWSQuickSetupPatchPolicyPermissionsBoundary';
    /** The AWSQuickSetupSchedulerPermissionsBoundary policy defines the list of permissions that are permitted in an IAM role created by Quick Setup. Quick Setup uses a role created with this policy to enable and configure scheduled operations on Amazon EC2 instances and other resources. */
    public static AWSQuickSetupSchedulerPermissionsBoundary = 'AWSQuickSetupSchedulerPermissionsBoundary';
    /** This policy grants administrative permssions that allow Quick Setup to create resources that are used during the Systems Manager onboarding process. */
    public static AWSQuickSetupSSMDeploymentRolePolicy = 'AWSQuickSetupSSMDeploymentRolePolicy';
    /** This policy grants permissions for listing all S3 buckets in an account; and for managing and retrieving information about specific buckets in the principal account that are managed through AWS CloudFormation templates. */
    public static AWSQuickSetupSSMDeploymentS3BucketRolePolicy = 'AWSQuickSetupSSMDeploymentS3BucketRolePolicy';
    /** Quick Setup creates IAM roles which enable it to configure the Host Manager Quick Setup type on your behalf, and uses this policy when creating such roles to define the boundary of their permissions. */
    public static AWSQuickSetupSSMHostMgmtPermissionsBoundary = 'AWSQuickSetupSSMHostMgmtPermissionsBoundary';
    /** The policy grants administrative permissions that allow Quick Setup to run the a AWS CloudFormation custom resource on lifecycle events during Quick Setup deployment in Systems Manager. */
    public static AWSQuickSetupSSMLifecycleManagementExecutionPolicy = 'AWSQuickSetupSSMLifecycleManagementExecutionPolicy';
    /** This policy grants permissions that allow Systems Manager to create prerequisites such as IAM roles required for Systems Manager onboarding. */
    public static AWSQuickSetupSSMManageResourcesExecutionPolicy = 'AWSQuickSetupSSMManageResourcesExecutionPolicy';
    /** This policy grants permissions that allow principals to run the AWSQuickSetupType-StartSSMAssociations Automation runbook, which starts State Manager Associations. */
    public static AWSQuickSetupStartSSMAssociationsExecutionPolicy = 'AWSQuickSetupStartSSMAssociationsExecutionPolicy';
    /** The managed policy AWSQuickSetupStartStopInstancesExecutionPolicy provides permissions for Quick Setup to start and stop Amazon EC2 instances on a schedule. This policy is used with the Quick Setup scheduler configuration type. */
    public static AWSQuickSetupStartStopInstancesExecutionPolicy = 'AWSQuickSetupStartStopInstancesExecutionPolicy';
    /** Provides the set of permissions required to perform QuickSight Asset Bundle Export Operations */
    public static AWSQuickSightAssetBundleExportPolicy = 'AWSQuickSightAssetBundleExportPolicy';
    /** Provides the set of permissions required to perform QuickSight Asset Bundle Import Operations */
    public static AWSQuickSightAssetBundleImportPolicy = 'AWSQuickSightAssetBundleImportPolicy';
    /** Quicksight access to Athena API and S3 buckets used for Athena query results */
    public static AWSQuicksightAthenaAccess = 'service-role/AWSQuicksightAthenaAccess';
    /** Allow QuickSight to describe the RDS resources */
    public static AWSQuickSightDescribeRDS = 'service-role/AWSQuickSightDescribeRDS';
    /** Allow QuickSight to describe Redshift resources */
    public static AWSQuickSightDescribeRedshift = 'service-role/AWSQuickSightDescribeRedshift';
    /** Provides access to Amazon Elasticsearch resources from Amazon QuickSight */
    public static AWSQuickSightElasticsearchPolicy = 'service-role/AWSQuickSightElasticsearchPolicy';
    /** Give QuickSight read-only access to IoT Analytics datasets */
    public static AWSQuickSightIoTAnalyticsAccess = 'AWSQuickSightIoTAnalyticsAccess';
    /** Allow QuickSight to list IAM entities */
    public static AWSQuickSightListIAM = 'service-role/AWSQuickSightListIAM';
    /** Provides access to Amazon OpenSearch resources from Amazon QuickSight */
    public static AWSQuicksightOpenSearchPolicy = 'service-role/AWSQuicksightOpenSearchPolicy';
    /** Provides access to Amazon SageMaker resources from Amazon QuickSight */
    public static AWSQuickSightSageMakerPolicy = 'service-role/AWSQuickSightSageMakerPolicy';
    /** Policy used by QuickSight to create secrets in AWS Secrets Manager and to attach resource policies on existing QuickSight secrets. */
    public static AWSQuickSightSecretsManagerWriteAccess = 'service-role/AWSQuickSightSecretsManagerWriteAccess';
    /** Policy used by QuickSight to create secrets in AWS Secrets Manager and to attach resource policies on existing QuickSight secrets. */
    public static AWSQuickSightSecretsManagerWritePolicy = 'AWSQuickSightSecretsManagerWritePolicy';
    /** AWS QuickSight access to AWS Timestream APIs. Customers can attach this policy to AWS QuickSight role to allow retrieval of data and metadata. */
    public static AWSQuickSightTimestreamPolicy = 'service-role/AWSQuickSightTimestreamPolicy';
    /** Allows VPC Reachability Analyzer to access AWS resources and integrate with AWS Organizations on your behalf. */
    public static AWSReachabilityAnalyzerServiceRolePolicy = 'aws-service-role/AWSReachabilityAnalyzerServiceRolePolicy';
    /** This policy grants permission to use AWS services with the AWS Toolkit for .NET Refactoring extension for Microsoft Visual Studio. It is intended to be attached to a local AWS profile. The policy allows uploading application artifacts and downloading the resulting artifacts from Amazon S3. It allows building applications into a container image using AWS CodeBuild and storing and retrieving the images from Amazon Elastic Container Registry (Amazon ECR). And it allows deployment of the application to container services on AWS such as Amazon Elastic Container Service (Amazon ECS), optional creation of VPC resources, optional connection to existing infrastructure such as AWS Directory Service, and other related services. */
    public static AWSRefactoringToolkitFullAccess = 'AWSRefactoringToolkitFullAccess';
    /** This policy is intended to be used by Amazon ECS Tasks created for testing applications in AWS using the AWS Toolkit for .NET Refactoring extension for Microsoft Visual Studio. The policy grants access to download application artifacts from Amazon S3, communicate the status of the Task using AWS Systems Manager, and other required services. */
    public static AWSRefactoringToolkitSidecarPolicy = 'AWSRefactoringToolkitSidecarPolicy';
    /** Provides re:Post Private access to publish CloudWatch metrics data */
    public static AWSrePostPrivateCloudWatchAccess = 'aws-service-role/AWSrePostPrivateCloudWatchAccess';
    /** This policy allows the re:Post Space service to create, manage, and resolve Support cases that are created through the Space application. */
    public static AWSRepostSpaceSupportOperationsPolicy = 'AWSRepostSpaceSupportOperationsPolicy';
    /** Policy for AWS Resilience Hub service role which allows access to other AWS services in order to execute assessment. */
    public static AWSResilienceHubAsssessmentExecutionPolicy = 'AWSResilienceHubAsssessmentExecutionPolicy';
    /** Provides full access to AWS Resource Access Manager */
    public static AWSResourceAccessManagerFullAccess = 'AWSResourceAccessManagerFullAccess';
    /** Provides read only access to AWS Resource Access Manager. */
    public static AWSResourceAccessManagerReadOnlyAccess = 'AWSResourceAccessManagerReadOnlyAccess';
    /** Provides access to AWS Resource Access Manager APIs needed by a resource share participant. */
    public static AWSResourceAccessManagerResourceShareParticipantAccess = 'AWSResourceAccessManagerResourceShareParticipantAccess';
    /** Policy containing Read-only AWS Resource Access Manager access to customers' Organizations structure. It also contains IAM permissions to self-delete the role. */
    public static AWSResourceAccessManagerServiceRolePolicy = 'aws-service-role/AWSResourceAccessManagerServiceRolePolicy';
    /** This policy grants administrative permissions to access Resource Explorer resources and grants read-only permissions to other AWS services to support this access. */
    public static AWSResourceExplorerFullAccess = 'AWSResourceExplorerFullAccess';
    /** This policy grants administrative permissions to Resource Explorer and grants read-only permissions to other AWS services to support this access. The AWS Organizations administrator needs these permissions to setup and manage multi-account search in the console. */
    public static AWSResourceExplorerOrganizationsAccess = 'AWSResourceExplorerOrganizationsAccess';
    /** This policy grants read-only permissions to search for and view Resource Explorer resources and grants read-only permissions to other AWS services to support this access. */
    public static AWSResourceExplorerReadOnlyAccess = 'AWSResourceExplorerReadOnlyAccess';
    /** Allows Resource Explorer to view resources and CloudTrail events on your behalf to index your resources for search. */
    public static AWSResourceExplorerServiceRolePolicy = 'aws-service-role/AWSResourceExplorerServiceRolePolicy';
    /** This is the read only policy for AWS Resource Groups */
    public static AWSResourceGroupsReadOnlyAccess = 'AWSResourceGroupsReadOnlyAccess';
    /** Provides full access to AWS RoboMaker via the AWS Management Console and SDK. Also provides select access to related services (e.g., S3, IAM). */
    public static AWSRoboMakerFullAccess = 'AWSRoboMaker_FullAccess';
    /** Provides read only access to AWS RoboMaker via the AWS Management Console and SDK */
    public static AWSRoboMakerReadOnlyAccess = 'AWSRoboMakerReadOnlyAccess';
    /** RoboMaker service policy */
    public static AWSRoboMakerServicePolicy = 'aws-service-role/AWSRoboMakerServicePolicy';
    /** RoboMaker service policy */
    public static AWSRoboMakerServiceRolePolicy = 'AWSRoboMakerServiceRolePolicy';
    /** Provides all permissions to IAM Roles Anywhere resources, including but not limited to: CreateProfile, DeleteTrustAnchor, DisableCRL, ResetNotificationSettings. */
    public static AWSRolesAnywhereFullAccess = 'AWSRolesAnywhereFullAccess';
    /** Provides read-only permissions to IAM Roles Anywhere resources, including but not limited to: GetTrustAnchor, ListProfiles, GetCRL. There will be no other permissions for other services included in this policy. */
    public static AWSRolesAnywhereReadOnly = 'AWSRolesAnywhereReadOnly';
    /** Allows IAM Roles Anywhere to publish service/usage metrics to CloudWatch and check the status of Private Certificate Authorities on your behalf. */
    public static AWSRolesAnywhereServicePolicy = 'aws-service-role/AWSRolesAnywhereServicePolicy';
    /** Allow Amazon S3 on Outposts service to manage EC2 network resources on your behalf. */
    public static AWSS3OnOutpostsServiceRolePolicy = 'aws-service-role/AWSS3OnOutpostsServiceRolePolicy';
    /** Provides full access to Savings Plans service */
    public static AWSSavingsPlansFullAccess = 'AWSSavingsPlansFullAccess';
    /** Provides read only access to Savings Plans service */
    public static AWSSavingsPlansReadOnlyAccess = 'AWSSavingsPlansReadOnlyAccess';
    /** Provides full access to use AWS Security Hub. */
    public static AWSSecurityHubFullAccess = 'AWSSecurityHubFullAccess';
    /** Grants permission to enable and manage AWS Security Hub within an organization. Includes enabling the service across the organization, and determining the delegated administrator account for the service. */
    public static AWSSecurityHubOrganizationsAccess = 'AWSSecurityHubOrganizationsAccess';
    /** Provides read only access to AWS Security Hub resources */
    public static AWSSecurityHubReadOnlyAccess = 'AWSSecurityHubReadOnlyAccess';
    /** A service-linked role required for AWS Security Hub to access your resources. */
    public static AWSSecurityHubServiceRolePolicy = 'aws-service-role/AWSSecurityHubServiceRolePolicy';
    /** This policy allows Security Hub to manage AWS Config rules and Security Hub resources in your organization and on your behalf. */
    public static AWSSecurityHubV2ServiceRolePolicy = 'aws-service-role/AWSSecurityHubV2ServiceRolePolicy';
    /** Policy provides customers with Read and Write permissions to case resources that are created through the Security Incident Response service. */
    public static AWSSecurityIncidentResponseCaseFullAccess = 'AWSSecurityIncidentResponseCaseFullAccess';
    /** Policy provides customers with Read and Write permissions to all resources associated to the Security Incident Response service. */
    public static AWSSecurityIncidentResponseFullAccess = 'AWSSecurityIncidentResponseFullAccess';
    /** Policy provides customers with Read-only permissions to all resources associated to the Security Incident Response service. Permission includes access to GetCaseAttachmentDownloadUrl as well for the ability to get case attachment download URLs. */
    public static AWSSecurityIncidentResponseReadOnlyAccess = 'AWSSecurityIncidentResponseReadOnlyAccess';
    /** Provides access to AWS Resources managed or used by Security Incident Response */
    public static AWSSecurityIncidentResponseServiceRolePolicy = 'aws-service-role/AWSSecurityIncidentResponseServiceRolePolicy';
    /** Provides access to AWS Security Incident Response to continuously monitor your environment for security threats, tune security services to reduce alert noise, and gather information to investigate potential incidents. */
    public static AWSSecurityIncidentResponseTriageServiceRolePolicy = 'aws-service-role/AWSSecurityIncidentResponseTriageServiceRolePolicy';
    /** Provides full access to service catalog admin capabilities */
    public static AWSServiceCatalogAdminFullAccess = 'AWSServiceCatalogAdminFullAccess';
    /** Provides read-only access to Service Catalog admin capabilities */
    public static AWSServiceCatalogAdminReadOnlyAccess = 'AWSServiceCatalogAdminReadOnlyAccess';
    /** Provides full access to Service Catalog App Registry capabilities */
    public static AWSServiceCatalogAppRegistryFullAccess = 'AWSServiceCatalogAppRegistryFullAccess';
    /** Provides read-only access to Service Catalog App Registry capabilites */
    public static AWSServiceCatalogAppRegistryReadOnlyAccess = 'AWSServiceCatalogAppRegistryReadOnlyAccess';
    /** Allows Service Catalog AppRegistry to manage Resource Groups on your behalf */
    public static AWSServiceCatalogAppRegistryServiceRolePolicy = 'aws-service-role/AWSServiceCatalogAppRegistryServiceRolePolicy';
    /** Provides full access to service catalog enduser capabilities */
    public static AWSServiceCatalogEndUserFullAccess = 'AWSServiceCatalogEndUserFullAccess';
    /** Provides read-only access to Service Catalog end-user capabilities */
    public static AWSServiceCatalogEndUserReadOnlyAccess = 'AWSServiceCatalogEndUserReadOnlyAccess';
    /** A Service Linked Role Policy for AWS ServiceCatalog to sync with AWS Organizations organization structure */
    public static AWSServiceCatalogOrgsDataSyncServiceRolePolicy = 'aws-service-role/AWSServiceCatalogOrgsDataSyncServiceRolePolicy';
    /** A Service Linked Role for AWS ServiceCatalog to sync Provisioning Artifacts from source repositories */
    public static AWSServiceCatalogSyncServiceRolePolicy = 'aws-service-role/AWSServiceCatalogSyncServiceRolePolicy';
    /** Permissions required for managing nodegroups in the customer's account. These policies related to management of the following resources: AutoscalingGroups, SecurityGroups, LaunchTemplates and InstanceProfiles. */
    public static AWSServiceRoleForAmazonEKSNodegroup = 'aws-service-role/AWSServiceRoleForAmazonEKSNodegroup';
    /** This Service Linked Role provides Amazon Q Developer ability to provide usage information. */
    public static AWSServiceRoleForAmazonQDeveloper = 'aws-service-role/AWSServiceRoleForAmazonQDeveloper';
    /** This Service-Linked Role provides AWS Transform with the ability to provide usage information. */
    public static AWSServiceRoleForAWSTransform = 'aws-service-role/AWSServiceRoleForAWSTransform';
    /** Provides access to Systems Manager resources used by CloudWatch Alarms */
    public static AWSServiceRoleForCloudWatchAlarmsActionSSMServiceRolePolicy = 'aws-service-role/AWSServiceRoleForCloudWatchAlarmsActionSSMServiceRolePolicy';
    /** Allows CloudWatch to access RDS Performance Insights metrics on your behalf */
    public static AWSServiceRoleForCloudWatchMetricsDbPerfInsightsServiceRolePolicy = 'aws-service-role/AWSServiceRoleForCloudWatchMetrics_DbPerfInsightsServiceRolePolicy';
    /** A service-linked role required for Amazon CodeGuru Profiler to send notifications on your behalf. */
    public static AWSServiceRoleForCodeGuruProfiler = 'aws-service-role/AWSServiceRoleForCodeGuru-Profiler';
    /** This role grants permissions to CodeWhisperer to access data in your account to calculate billing, provides access to create and access security reports in Amazon CodeGuru, and emit data to CloudWatch. */
    public static AWSServiceRoleForCodeWhispererPolicy = 'aws-service-role/AWSServiceRoleForCodeWhispererPolicy';
    /** Allows EC2 Scheduled Instances to launch and manage spot instances. */
    public static AWSServiceRoleForEC2ScheduledInstances = 'aws-service-role/AWSServiceRoleForEC2ScheduledInstances';
    /** AWS GroundStation uses this service-linked role to invoke EC2 to find public IPv4 addresses */
    public static AWSServiceRoleForGroundStationDataflowEndpointGroupPolicy = 'aws-service-role/AWSServiceRoleForGroundStationDataflowEndpointGroupPolicy';
    /** Allows EC2ImageBuilder to call AWS services on your behalf. */
    public static AWSServiceRoleForImageBuilder = 'aws-service-role/AWSServiceRoleForImageBuilder';
    /** Allows AWS IoT SiteWise to provision and manage gateways as well as query data. The policy includes required AWS Greengrass permissions for deploying to groups, AWS Lambda permissions for creating and updating service-prefixed functions, and AWS IoT Analytics permissions for querying data from datastores. */
    public static AWSServiceRoleForIoTSiteWise = 'aws-service-role/AWSServiceRoleForIoTSiteWise';
    /** Allows Log Delivery service to deliver logs by calling log destination on your behalf. */
    public static AWSServiceRoleForLogDeliveryPolicy = 'aws-service-role/AWSServiceRoleForLogDeliveryPolicy';
    /** Grants Amazon Monitron permissions to manage AWS resources, including AWS SSO user assignment on your behalf. */
    public static AWSServiceRoleForMonitronPolicy = 'aws-service-role/AWSServiceRoleForMonitronPolicy';
    /** Provides Cloudwatch access to publish operational and usage metrics and logs for Amazon Neptune */
    public static AWSServiceRoleForNeptuneGraphPolicy = 'aws-service-role/AWSServiceRoleForNeptuneGraphPolicy';
    /** Provides permissions to describe and update Private Marketplace resources and describe AWS Organizations */
    public static AWSServiceRoleForPrivateMarketplaceAdminPolicy = 'aws-service-role/AWSServiceRoleForPrivateMarketplaceAdminPolicy';
    /** Policy for Procurement Insights to obtain Organization Account details */
    public static AWSServiceRoleForProcurementInsightsPolicy = 'aws-service-role/AWSServiceRoleForProcurementInsightsPolicy';
    /** Provides access to AWS services and resources necessary to migrate service instances into AWS including EC2, S3 and Cloudformation. */
    public static AWSServiceRoleForSMS = 'aws-service-role/AWSServiceRoleForSMS';
    /** Provides access to the User Subscriptions service to your Identity Center resources to automatically update your subscriptions. */
    public static AWSServiceRoleForUserSubscriptions = 'aws-service-role/AWSServiceRoleForUserSubscriptions';
    /** Provides AWS Backup permissions to create compliance reports on your behalf */
    public static AWSServiceRolePolicyForBackupReports = 'aws-service-role/AWSServiceRolePolicyForBackupReports';
    /** This policy contains permissions for testing restores and for cleaning up resources created during tests. */
    public static AWSServiceRolePolicyForBackupRestoreTesting = 'aws-service-role/AWSServiceRolePolicyForBackupRestoreTesting';
    /** This managed policy provides administrative access to Amazon WorkSpaces to manage EC2 instances in your AWS account */
    public static AWSServiceRolePolicyForWorkspacesInstances = 'aws-service-role/AWSServiceRolePolicyForWorkspacesInstances';
    /** Provides the AWS DDoS Response Team with limited access to your AWS account to assist with DDoS attack mitigation during a high-severity event. */
    public static AWSShieldDRTAccessPolicy = 'service-role/AWSShieldDRTAccessPolicy';
    /** Allows AWS Shield to access AWS resources on your behalf to provide DDoS protection. */
    public static AWSShieldServiceRolePolicy = 'aws-service-role/AWSShieldServiceRolePolicy';
    /** Provides access to publish metrics and provide insights for your social message sending. */
    public static AWSSocialMessagingServiceRolePolicy = 'aws-service-role/AWSSocialMessagingServiceRolePolicy';
    /** Provides AWS Systems Manager for SAP with the permissions needed to manage and integrate SAP software with AWS. */
    public static AWSSSMForSAPServiceLinkedRolePolicy = 'aws-service-role/AWSSSMForSAPServiceLinkedRolePolicy';
    /** Policy for Service Linked Role AWSServiceRoleForAmazonSSM_OpsInsights */
    public static AWSSSMOpsInsightsServiceRolePolicy = 'aws-service-role/AWSSSMOpsInsightsServiceRolePolicy';
    /** Administrator access for SSO Directory */
    public static AWSSSODirectoryAdministrator = 'AWSSSODirectoryAdministrator';
    /** ReadOnly access for SSO Directory */
    public static AWSSSODirectoryReadOnly = 'AWSSSODirectoryReadOnly';
    /** Provides access within AWS SSO to manage AWS Organizations master and member accounts and cloud application */
    public static AWSSSOMasterAccountAdministrator = 'AWSSSOMasterAccountAdministrator';
    /** Provides access within AWS SSO to manage AWS Organizations member accounts and cloud application */
    public static AWSSSOMemberAccountAdministrator = 'AWSSSOMemberAccountAdministrator';
    /** Provides read only access to AWS SSO configurations. */
    public static AWSSSOReadOnly = 'AWSSSOReadOnly';
    /** Grants AWS SSO permissions to manage AWS resources, including IAM roles, policies and SAML IdP on your behalf. */
    public static AWSSSOServiceRolePolicy = 'aws-service-role/AWSSSOServiceRolePolicy';
    /** An access policy for providing a user/role/etc access to the AWS StepFunctions console. For a full console experience, in addition to this policy, a user may need iam:PassRole permission on other IAM roles that can be assumed by the service. */
    public static AWSStepFunctionsConsoleFullAccess = 'AWSStepFunctionsConsoleFullAccess';
    /** An access policy for providing a user/role/etc access to the AWS StepFunctions API. For full access, in addition to this policy, a user MUST have iam:PassRole permission on at least one IAM role that can be assumed by the service. */
    public static AWSStepFunctionsFullAccess = 'AWSStepFunctionsFullAccess';
    /** An access policy for providing a user/role/etc read only access to the AWS StepFunctions service. */
    public static AWSStepFunctionsReadOnlyAccess = 'AWSStepFunctionsReadOnlyAccess';
    /** Provides full access to AWS Storage Gateway via the AWS Management Console. */
    public static AWSStorageGatewayFullAccess = 'AWSStorageGatewayFullAccess';
    /** Provides access to AWS Storage Gateway via the AWS Management Console. */
    public static AWSStorageGatewayReadOnlyAccess = 'AWSStorageGatewayReadOnlyAccess';
    /** Service-linked role used by AWS Storage Gateway to enable integration of other AWS services with Storage Gateway. */
    public static AWSStorageGatewayServiceRolePolicy = 'aws-service-role/AWSStorageGatewayServiceRolePolicy';
    /** AWSSupplyChainFederationAdminAccess provides AWS Supply Chain federated users access to the AWS Supply Chain application, including the required permissions to perform actions within the AWS Supply Chain application. The policy provides administrative permissions over IAM Identity Center users and groups and is attached to a role created by AWS Supply Chain on your behalf. You shouldn't attach AWSSupplyChainFederationAdminAccess policy to any other IAM entities. */
    public static AWSSupplyChainFederationAdminAccess = 'service-role/AWSSupplyChainFederationAdminAccess';
    /** Allows users to access the AWS Support Center. */
    public static AWSSupportAccess = 'AWSSupportAccess';
    /** Provides full access to the AWS Support App and other required services, such as AWS Support and Service Quotas. This policy includes permissions to use the supporting services so that the user can contact AWS Support for support cases, change service quotas, and create the relevant service-linked roles. */
    public static AWSSupportAppFullAccess = 'AWSSupportAppFullAccess';
    /** Provides read-only access to the AWS Support App. */
    public static AWSSupportAppReadOnlyAccess = 'AWSSupportAppReadOnlyAccess';
    /** Provides full access to supportplans. */
    public static AWSSupportPlansFullAccess = 'AWSSupportPlansFullAccess';
    /** Provides read-only access to supportplans. */
    public static AWSSupportPlansReadOnlyAccess = 'AWSSupportPlansReadOnlyAccess';
    /** Allows AWS Support to access AWS resources to provide billing, administrative, and support services. */
    public static AWSSupportServiceRolePolicy = 'aws-service-role/AWSSupportServiceRolePolicy';
    /** Grants AWS Systems Manager (SSM) permission to discover AWS account information. */
    public static AWSSystemsManagerAccountDiscoveryServicePolicy = 'aws-service-role/AWSSystemsManagerAccountDiscoveryServicePolicy';
    /** Provides access to AWS resources managed or used by the AWS Systems Manager change management framework. */
    public static AWSSystemsManagerChangeManagementServicePolicy = 'aws-service-role/AWSSystemsManagerChangeManagementServicePolicy';
    /** Provides permissions for AWS Systems Manager Quick Setup to enable and configure AWS Config configuration recording. */
    public static AWSSystemsManagerEnableConfigRecordingExecutionPolicy = 'AWSSystemsManagerEnableConfigRecordingExecutionPolicy';
    /** This policy grants administrative permissions for enabling Explorer, a capability of AWS Systems Manager. This includes permissions to update related Systems Manager service settings, and to create a service-linked role for Systems Manager. */
    public static AWSSystemsManagerEnableExplorerExecutionPolicy = 'AWSSystemsManagerEnableExplorerExecutionPolicy';
    /** Provides full access to AWS Systems Manager for SAP service */
    public static AWSSystemsManagerForSAPFullAccess = 'AWSSystemsManagerForSAPFullAccess';
    /** Provides read only access to AWS Systems Manager for SAP service */
    public static AWSSystemsManagerForSAPReadOnlyAccess = 'AWSSystemsManagerForSAPReadOnlyAccess';
    /** Provides access to AWS resources managed or used by the AWS Systems Manager just in time access framework. */
    public static AWSSystemsManagerJustInTimeAccessServicePolicy = 'aws-service-role/AWSSystemsManagerJustInTimeAccessServicePolicy';
    /** The managed policy AWSSystemsManagerJustInTimeAccessTokenPolicy allows Systems Manager to generate access tokens used for just-in-time node access. */
    public static AWSSystemsManagerJustInTimeAccessTokenPolicy = 'AWSSystemsManagerJustInTimeAccessTokenPolicy';
    /** The managed policy AWSSystemsManagerJustInTimeAccessTokenSessionPolicy allows Systems Manager to apply scoped down permissions to a just-in-time node access session once it is started. */
    public static AWSSystemsManagerJustInTimeAccessTokenSessionPolicy = 'AWSSystemsManagerJustInTimeAccessTokenSessionPolicy';
    /** This policy allows Systems Manager to share a deny-access policy for just-in-time node access from the delegated administrator account to member accounts, and replicate the policy to multiple Regions. */
    public static AWSSystemsManagerJustInTimeNodeAccessRolePropagationPolicy = 'AWSSystemsManagerJustInTimeNodeAccessRolePropagationPolicy';
    /** Permissions required to collect information about a user for Just-In-Time-Node-Access notifications. */
    public static AWSSystemsManagerNotificationsServicePolicy = 'aws-service-role/AWSSystemsManagerNotificationsServicePolicy';
    /** IAM role for SSM Explorer to manage OpsData related operations */
    public static AWSSystemsManagerOpsDataSyncServiceRolePolicy = 'aws-service-role/AWSSystemsManagerOpsDataSyncServiceRolePolicy';
    /** This policy grants the AWS Portal Asset Server the necessary permissions required for normal operation. */
    public static AWSThinkboxAssetServerPolicy = 'AWSThinkboxAssetServerPolicy';
    /** This policy grants AWS Thinkbox's Deadline software full access to multiple AWS services as required for AWS Portal administration. This includes access to create arbitrary tags on several EC2 resource types. */
    public static AWSThinkboxAWSPortalAdminPolicy = 'AWSThinkboxAWSPortalAdminPolicy';
    /** This policy grants the AWS Portal Gateway machine the necessary permissions required for normal operation. */
    public static AWSThinkboxAWSPortalGatewayPolicy = 'AWSThinkboxAWSPortalGatewayPolicy';
    /** This policy grants the Deadline Workers in AWS Portal the necessary permissions required for normal operation. */
    public static AWSThinkboxAWSPortalWorkerPolicy = 'AWSThinkboxAWSPortalWorkerPolicy';
    /** Grants permissions required for the operation of AWS Thinkbox's Deadline Resource Tracker.  This includes full access to some EC2 actions, including DeleteFleets and CancelSpotFleetRequests. */
    public static AWSThinkboxDeadlineResourceTrackerAccessPolicy = 'AWSThinkboxDeadlineResourceTrackerAccessPolicy';
    /** Grants permissions required to create, destroy, and administer AWS Thinkbox's Deadline Resource Tracker. */
    public static AWSThinkboxDeadlineResourceTrackerAdminPolicy = 'AWSThinkboxDeadlineResourceTrackerAdminPolicy';
    /** Grants permissions required for AWS Thinkbox's Deadline Spot Event Plugin.  This includes permission to request, modify, and cancel a spot fleet, as well as limited PassRole permission. */
    public static AWSThinkboxDeadlineSpotEventPluginAdminPolicy = 'AWSThinkboxDeadlineSpotEventPluginAdminPolicy';
    /** Grant permissions required for an EC2 instance running AWS Thinkbox Deadline Spot Event Plugin Worker software. */
    public static AWSThinkboxDeadlineSpotEventPluginWorkerPolicy = 'AWSThinkboxDeadlineSpotEventPluginWorkerPolicy';
    /** Provides full access to AWS Transfer via the AWS Management Console */
    public static AWSTransferConsoleFullAccess = 'AWSTransferConsoleFullAccess';
    /** Provides full access to AWS Transfer Service. */
    public static AWSTransferFullAccess = 'AWSTransferFullAccess';
    /** Allows AWS Transfer full access to create log streams and groups and put log events to your account */
    public static AWSTransferLoggingAccess = 'service-role/AWSTransferLoggingAccess';
    /** Provide readonly access to AWS Transfer services. */
    public static AWSTransferReadOnlyAccess = 'AWSTransferReadOnlyAccess';
    /** Enables the AWS Transform service to deploy transformed .NET applications by creating and managing AWS resources. This policy grants permissions to provision infrastructure, manage compute resources, and configure deployment settings across various AWS services. */
    public static AWSTransformApplicationDeploymentPolicy = 'service-role/AWSTransformApplicationDeploymentPolicy';
    /** Provides full access to AWS Trusted Advisor Priority. This policy also enables the user to add Trusted Advisor as a trusted service with AWS Organizations and to specify delegated administrator accounts for Trusted Advisor Priority. */
    public static AWSTrustedAdvisorPriorityFullAccess = 'AWSTrustedAdvisorPriorityFullAccess';
    /** Provides read-only access to AWS Trusted Advisor Priority. This includes permission to view the delegated administrator accounts. */
    public static AWSTrustedAdvisorPriorityReadOnlyAccess = 'AWSTrustedAdvisorPriorityReadOnlyAccess';
    /** Service Policy for Trusted Advisor Multi-account Reporting */
    public static AWSTrustedAdvisorReportingServiceRolePolicy = 'aws-service-role/AWSTrustedAdvisorReportingServiceRolePolicy';
    /** Access for the AWS Trusted Advisor Service to help reduce cost, increase performance, and improve security of your AWS environment. */
    public static AWSTrustedAdvisorServiceRolePolicy = 'aws-service-role/AWSTrustedAdvisorServiceRolePolicy';
    /** Allows AWS User Notifications to call AWS services on your behalf. */
    public static AWSUserNotificationsServiceLinkedRolePolicy = 'aws-service-role/AWSUserNotificationsServiceLinkedRolePolicy';
    /** Provides full access for viewing entitled Vendor Insights resources and managing Vendor Insights subscriptions */
    public static AWSVendorInsightsAssessorFullAccess = 'AWSVendorInsightsAssessorFullAccess';
    /** Provides read-only access for viewing entitled Vendor Insights resources */
    public static AWSVendorInsightsAssessorReadOnly = 'AWSVendorInsightsAssessorReadOnly';
    /** Provides full access for creating and managing the Vendor Insights resources */
    public static AWSVendorInsightsVendorFullAccess = 'AWSVendorInsightsVendorFullAccess';
    /** Provides read-only access for viewing the Vendor Insights resources */
    public static AWSVendorInsightsVendorReadOnly = 'AWSVendorInsightsVendorReadOnly';
    /** Allows VPC Lattice to access AWS resources on your behalf. */
    public static AWSVpcLatticeServiceRolePolicy = 'aws-service-role/AWSVpcLatticeServiceRolePolicy';
    /** Allow Site-to-Site VPN to create and manage resources related to your VPN Connections. */
    public static AWSVPCS2SVpnServiceRolePolicy = 'aws-service-role/AWSVPCS2SVpnServiceRolePolicy';
    /** Allow VPC Transit Gateway to create and manage necessary resources for your Transit Gateway VPC Attachments. */
    public static AWSVPCTransitGatewayServiceRolePolicy = 'aws-service-role/AWSVPCTransitGatewayServiceRolePolicy';
    /** Policy to enable AWS Verified Access service to provision endpoints on your behalf */
    public static AWSVPCVerifiedAccessServiceRolePolicy = 'aws-service-role/AWSVPCVerifiedAccessServiceRolePolicy';
    /** Provides full access to AWS WAF via the AWS Management Console. Note that this policy also grants permissions to list and update Amazon CloudFront distributions, permissions to view load balancers on AWS Elastic Load Balancing, permissions to view Amazon API Gateway REST APIs and stages, permissions to list and view Amazon CloudWatch metrics, and permissions to view regions enabled within the account. */
    public static AWSWAFConsoleFullAccess = 'AWSWAFConsoleFullAccess';
    /** Provides read-only access to AWS WAF via the AWS Management Console. Note that this policy also grants permissions to list Amazon CloudFront distributions, permissions to view load balancers on AWS Elastic Load Balancing, permissions to view Amazon API Gateway REST APIs and stages, permissions to list and view Amazon CloudWatch metrics, and permissions to view regions enabled within the account. */
    public static AWSWAFConsoleReadOnlyAccess = 'AWSWAFConsoleReadOnlyAccess';
    /** Provides full access to AWS WAF actions. */
    public static AWSWAFFullAccess = 'AWSWAFFullAccess';
    /** Provides read only access to AWS WAF actions. */
    public static AWSWAFReadOnlyAccess = 'AWSWAFReadOnlyAccess';
    /** Allows WellArchitected to access AWS services and resources that relate to WellArchitected resources on behalf of customers. */
    public static AWSWellArchitectedDiscoveryServiceRolePolicy = 'aws-service-role/AWSWellArchitectedDiscoveryServiceRolePolicy';
    /** Allows Well-Architected to access Organizations on your behalf. */
    public static AWSWellArchitectedOrganizationsServiceRolePolicy = 'aws-service-role/AWSWellArchitectedOrganizationsServiceRolePolicy';
    /** This policy grants full administrative permissions to the Wickr service, including the Wickr administrative functions under the AWS Management Console. */
    public static AWSWickrFullAccess = 'AWSWickrFullAccess';
    /** Provides capabilities to manage Observability Access Manager links and establish sharing of X-Ray traces */
    public static AWSXrayCrossAccountSharingConfiguration = 'AWSXrayCrossAccountSharingConfiguration';
    /** Allow the AWS X-Ray Daemon to relay raw trace segments data to the service's API and retrieve sampling data (rules, targets, etc.) to be used by the X-Ray SDK. */
    public static AWSXRayDaemonWriteAccess = 'AWSXRayDaemonWriteAccess';
    /** AWS X-Ray full access managed policy */
    public static AWSXrayFullAccess = 'AWSXrayFullAccess';
    /** AWS X-Ray read only managed policy */
    public static AWSXrayReadOnlyAccess = 'AWSXrayReadOnlyAccess';
    /** AWS X-Ray write only managed policy */
    public static AWSXrayWriteOnlyAccess = 'AWSXrayWriteOnlyAccess';
    /** Provides administrative access for ARC zonal shift practice runs, and access to CloudWatch alarm statuses to monitor practice runs. */
    public static AWSZonalAutoshiftPracticeRunSLRPolicy = 'aws-service-role/AWSZonalAutoshiftPracticeRunSLRPolicy';
    /** Provides read-only access to the APIs needed to support zone-group access-management for organizations. */
    public static AWSZoneGroupAccessManagementServiceRolePolicy = 'aws-service-role/AWSZoneGroupAccessManagementServiceRolePolicy';
    /** Provides access for the AWS Batch service to manage the required resources, including Amazon EC2 and Amazon ECS resources. */
    public static BatchServiceRolePolicy = 'aws-service-role/BatchServiceRolePolicy';
    /** Provides full access to Bedrock AgentCore as well as limited access to related services */
    public static BedrockAgentCoreFullAccess = 'BedrockAgentCoreFullAccess';
    /** Grants permissions for billing and cost management. This includes viewing account usage and viewing and modifying budgets and payment methods. */
    public static Billing = 'job-function/Billing';
    /** Allows Budgets to verify access to Billing Views shared across account boundaries. */
    public static BudgetsServiceRolePolicy = 'aws-service-role/BudgetsServiceRolePolicy';
    /** Amazon Certificate Manager Service Role Policy */
    public static CertificateManagerServiceRolePolicy = 'aws-service-role/CertificateManagerServiceRolePolicy';
    /** Policy to enable AWS Client VPN to manage your Client VPN endpoint connections. */
    public static ClientVPNServiceConnectionsRolePolicy = 'aws-service-role/ClientVPNServiceConnectionsRolePolicy';
    /** Policy to enable AWS Client VPN to manage your Client VPN endpoints. */
    public static ClientVPNServiceRolePolicy = 'aws-service-role/ClientVPNServiceRolePolicy';
    /** Service Role for CloudFormation StackSets (Organization Master Account) */
    public static CloudFormationStackSetsOrgAdminServiceRolePolicy = 'aws-service-role/CloudFormationStackSetsOrgAdminServiceRolePolicy';
    /** Service Role for CloudFormation StackSets (Organization Member Account) */
    public static CloudFormationStackSetsOrgMemberServiceRolePolicy = 'aws-service-role/CloudFormationStackSetsOrgMemberServiceRolePolicy';
    /** Provides full access to the CloudFront console plus the ability to list Amazon S3 buckets via the AWS Management Console. */
    public static CloudFrontFullAccess = 'CloudFrontFullAccess';
    /** Provides access to CloudFront distribution configuration information and list distributions via the AWS Management Console. */
    public static CloudFrontReadOnlyAccess = 'CloudFrontReadOnlyAccess';
    /** Enables access to AWS resources used or managed by CloudHSM */
    public static CloudHSMServiceRolePolicy = 'aws-service-role/CloudHSMServiceRolePolicy';
    /** Provides full access to the Amazon CloudSearch configuration service. */
    public static CloudSearchFullAccess = 'CloudSearchFullAccess';
    /** Provides read only access to the Amazon CloudSearch configuration service. */
    public static CloudSearchReadOnlyAccess = 'CloudSearchReadOnlyAccess';
    /** This service linked role allows CloudTrail to get and add resource tags to the resource owner's CloudTrail events. */
    public static CloudTrailEventContext = 'aws-service-role/CloudTrailEventContext';
    /** Permission policy for CloudTrail ServiceLinkedRole */
    public static CloudTrailServiceRolePolicy = 'aws-service-role/CloudTrailServiceRolePolicy';
    /** Allows CloudWatch to assume CloudWatch-CrossAccountSharing roles in remote accounts on behalf of the current account in order to display data cross-account, cross-region */
    public static CloudWatchCrossAccountAccess = 'aws-service-role/CloudWatch-CrossAccountAccess';
    /** Provides read-only access to CloudWatch alarms and metrics as well as EC2 metadata. Provides access to Stop, Terminate and Reboot EC2 instances. */
    public static CloudWatchActionsEC2Access = 'CloudWatchActionsEC2Access';
    /** Full permissions required to use AmazonCloudWatchAgent. */
    public static CloudWatchAgentAdminPolicy = 'CloudWatchAgentAdminPolicy';
    /** Permissions required to use AmazonCloudWatchAgent on servers */
    public static CloudWatchAgentServerPolicy = 'CloudWatchAgentServerPolicy';
    /** Provides full access to CloudWatch Application Insights and required dependencies. */
    public static CloudWatchApplicationInsightsFullAccess = 'CloudWatchApplicationInsightsFullAccess';
    /** Provides read only access to CloudWatch Application Insights. */
    public static CloudWatchApplicationInsightsReadOnlyAccess = 'CloudWatchApplicationInsightsReadOnlyAccess';
    /** Cloudwatch Application Insights Service Linked Role Policy */
    public static CloudwatchApplicationInsightsServiceLinkedRolePolicy = 'aws-service-role/CloudwatchApplicationInsightsServiceLinkedRolePolicy';
    /** Provide full access to CloudWatch Application Signals service and scoped access to the dependencies needed to use and operate this service. */
    public static CloudWatchApplicationSignalsFullAccess = 'CloudWatchApplicationSignalsFullAccess';
    /** Provides read only access to CloudWatch Application Signals service and scoped access to the dependencies needed to use this service */
    public static CloudWatchApplicationSignalsReadOnlyAccess = 'CloudWatchApplicationSignalsReadOnlyAccess';
    /** Policy grants permission to CloudWatch Application Signals to collect monitoring and tagging data from other relevant AWS services. */
    public static CloudWatchApplicationSignalsServiceRolePolicy = 'aws-service-role/CloudWatchApplicationSignalsServiceRolePolicy';
    /** Provides access to the non-CloudWatch APIs used to display CloudWatch Automatic Dashboards, including the contents of objects such as Lambda functions */
    public static CloudWatchAutomaticDashboardsAccess = 'CloudWatchAutomaticDashboardsAccess';
    /** Provides capabilities to manage Observability Access Manager links and establish sharing of CloudWatch resources */
    public static CloudWatchCrossAccountSharingConfiguration = 'CloudWatchCrossAccountSharingConfiguration';
    /** Allows built-in targets in Amazon CloudWatch Events to perform EC2 actions on your behalf. */
    public static CloudWatchEventsBuiltInTargetExecutionAccess = 'service-role/CloudWatchEventsBuiltInTargetExecutionAccess';
    /** Provides full access to Amazon CloudWatch Events. */
    public static CloudWatchEventsFullAccess = 'CloudWatchEventsFullAccess';
    /** Allows Amazon CloudWatch Events to relay events to the streams in AWS Kinesis Streams in your account. */
    public static CloudWatchEventsInvocationAccess = 'service-role/CloudWatchEventsInvocationAccess';
    /** Provides read only access to Amazon CloudWatch Events. */
    public static CloudWatchEventsReadOnlyAccess = 'CloudWatchEventsReadOnlyAccess';
    /** Allow AWS CloudWatch to execute actions on your behalf configured through alarms and events. */
    public static CloudWatchEventsServiceRolePolicy = 'aws-service-role/CloudWatchEventsServiceRolePolicy';
    /** Provides full access to CloudWatch. */
    public static CloudWatchFullAccess = 'CloudWatchFullAccess';
    /** Provides full access to CloudWatch. */
    public static CloudWatchFullAccessV2 = 'CloudWatchFullAccessV2';
    /** Provides full access to actions for working with Amazon CloudWatch Internet Monitor. Also provides access to other services, such as Amazon CloudWatch, Amazon EC2, Amazon CloudFront, Amazon WorkSpaces, and Elastic Load Balancing, that are necessary to use the Internet Monitor service for monitoring and storing information about application traffic. */
    public static CloudWatchInternetMonitorFullAccess = 'CloudWatchInternetMonitorFullAccess';
    /** Provides read only access to actions for working with Amazon CloudWatch Internet Monitor. Also provides access to other services in Amazon CloudWatch, including policies to retrieve information on CloudWatch metrics and to manage log queries, that are necessary to use the Internet Monitor service for monitoring and storing information about application traffic. */
    public static CloudWatchInternetMonitorReadOnlyAccess = 'CloudWatchInternetMonitorReadOnlyAccess';
    /** Allows Internet Monitor to access EC2, Workspaces, and CloudFront resources, and other required services on your behalf. */
    public static CloudWatchInternetMonitorServiceRolePolicy = 'aws-service-role/CloudWatchInternetMonitorServiceRolePolicy';
    /** Provides write access to X-Ray and CloudWatch Application Signals log group. */
    public static CloudWatchLambdaApplicationSignalsExecutionRolePolicy = 'CloudWatchLambdaApplicationSignalsExecutionRolePolicy';
    /** Policy required for the Lambda Insights Extension */
    public static CloudWatchLambdaInsightsExecutionRolePolicy = 'CloudWatchLambdaInsightsExecutionRolePolicy';
    /** Provides capabilities to manage Observability Access Manager links and establish sharing of CloudWatch Logs resources */
    public static CloudWatchLogsCrossAccountSharingConfiguration = 'CloudWatchLogsCrossAccountSharingConfiguration';
    /** Provides full access to CloudWatch Logs */
    public static CloudWatchLogsFullAccess = 'CloudWatchLogsFullAccess';
    /** Provides read only access to CloudWatch Logs */
    public static CloudWatchLogsReadOnlyAccess = 'CloudWatchLogsReadOnlyAccess';
    /** You can use this policy in IAM roles that are attached to Amazon EC2 and Amazon EKS instance resources to send telemetry reports (metrics) to a Network Flow Monitor endpoint. */
    public static CloudWatchNetworkFlowMonitorAgentPublishPolicy = 'CloudWatchNetworkFlowMonitorAgentPublishPolicy';
    /** You can't attach CloudWatchNetworkFlowMonitorServiceRolePolicy to your IAM entities. This policy is attached to a service-linked role named AWSServiceRoleForNetworkFlowMonitor, which publishes network telemetry aggregation results, collected by Network Flow Monitor agents, to CloudWatch. It also allows the service to use AWS Organizations to get information for multi-account scenarios. */
    public static CloudWatchNetworkFlowMonitorServiceRolePolicy = 'aws-service-role/CloudWatchNetworkFlowMonitorServiceRolePolicy';
    /** You can't attach CloudWatchNetworkFlowMonitorTopologyServiceRolePolicy to your IAM entities. This policy is attached to a service-linked role named AWSServiceRoleForNetworkFlowMonitor_Topology, which generates topology snapshots of resources used by Network Flow Monitor in your account. */
    public static CloudWatchNetworkFlowMonitorTopologyServiceRolePolicy = 'aws-service-role/CloudWatchNetworkFlowMonitorTopologyServiceRolePolicy';
    /** Allows CloudWatch Network Monitor to access and manage EC2 and VPC resources, publish data to CloudWatch and access other required services on your behalf. */
    public static CloudWatchNetworkMonitorServiceRolePolicy = 'aws-service-role/CloudWatchNetworkMonitorServiceRolePolicy';
    /** This policy provides user access to view OpenSearch dashboards on the CloudWatch Logs console. */
    public static CloudWatchOpenSearchDashboardAccess = 'CloudWatchOpenSearchDashboardAccess';
    /** This policy provides user access to create integration with OpenSearch to create, update, delete or view dashboards on the CloudWatch Logs console. */
    public static CloudWatchOpenSearchDashboardsFullAccess = 'CloudWatchOpenSearchDashboardsFullAccess';
    /** Provides read only access to CloudWatch. */
    public static CloudWatchReadOnlyAccess = 'CloudWatchReadOnlyAccess';
    /** Provides full access to CloudWatch Synthetics. */
    public static CloudWatchSyntheticsFullAccess = 'CloudWatchSyntheticsFullAccess';
    /** Provides read only access to CloudWatch Synthetics. */
    public static CloudWatchSyntheticsReadOnlyAccess = 'CloudWatchSyntheticsReadOnlyAccess';
    /** Policy for AWS Comprehend service role which allows access to S3 resources for data access */
    public static ComprehendDataAccessRolePolicy = 'service-role/ComprehendDataAccessRolePolicy';
    /** Provides full access to Amazon Comprehend. */
    public static ComprehendFullAccess = 'ComprehendFullAccess';
    /** Provides full access to Amazon Comprehend Medical */
    public static ComprehendMedicalFullAccess = 'ComprehendMedicalFullAccess';
    /** Provides read-only access to Amazon Comprehend. */
    public static ComprehendReadOnly = 'ComprehendReadOnly';
    /** Provides read only access to ComputeOptimizer. */
    public static ComputeOptimizerReadOnlyAccess = 'ComputeOptimizerReadOnlyAccess';
    /** Allows ComputeOptimizer to call AWS services and collect workload details on your behalf. */
    public static ComputeOptimizerServiceRolePolicy = 'aws-service-role/ComputeOptimizerServiceRolePolicy';
    /** Policy needed for AWSConfig to create conformance packs */
    public static ConfigConformsServiceRolePolicy = 'aws-service-role/ConfigConformsServiceRolePolicy';
    /** This managed policy provides admin access to Cost Optimization Hub. */
    public static CostOptimizationHubAdminAccess = 'CostOptimizationHubAdminAccess';
    /** This managed policy provides read-only access to Cost Optimization Hub. */
    public static CostOptimizationHubReadOnlyAccess = 'CostOptimizationHubReadOnlyAccess';
    /** Allows Cost Optimization Hub to retrieve organization information and collect optimization-related data and metadata. */
    public static CostOptimizationHubServiceRolePolicy = 'aws-service-role/CostOptimizationHubServiceRolePolicy';
    /** Allows Amazon Connect Customer Profiles to access AWS services and resources on your behalf. */
    public static CustomerProfilesServiceLinkedRolePolicy = 'aws-service-role/CustomerProfilesServiceLinkedRolePolicy';
    /** Grants full access permissions to AWS services and actions required to set up and configure AWS database services. */
    public static DatabaseAdministrator = 'job-function/DatabaseAdministrator';
    /** Grants permissions to AWS data analytics services. */
    public static DataScientist = 'job-function/DataScientist';
    /** This policy allows DAX to create and manage Network interface, Security group, Subnet and Vpc on behalf of customer */
    public static DAXServiceRolePolicy = 'aws-service-role/DAXServiceRolePolicy';
    /** Provides access to read-only APIs needed to run EC2 Declarative Policies Account Status Report. */
    public static DeclarativePoliciesEC2Report = 'aws-service-role/DeclarativePoliciesEC2Report';
    /** Permissions required to support Amazon CloudWatch Contributor Insights for Amazon DynamoDB. */
    public static DynamoDBCloudWatchContributorInsightsServiceRolePolicy = 'aws-service-role/DynamoDBCloudWatchContributorInsightsServiceRolePolicy';
    /** Provide AWS DynamoDB access to KinesisDataStreams */
    public static DynamoDBKinesisReplicationServiceRolePolicy = 'aws-service-role/DynamoDBKinesisReplicationServiceRolePolicy';
    /** Permissions required by DynamoDB for cross-region data replication */
    public static DynamoDBReplicationServiceRolePolicy = 'aws-service-role/DynamoDBReplicationServiceRolePolicy';
    /** This policy grants full access to EC2 Fast Launch actions */
    public static EC2FastLaunchFullAccess = 'EC2FastLaunchFullAccess';
    /** Policy grants ec2fastlaunch to prepare and manage preprovisioned snapshots in customer's account & publish related metrics. */
    public static EC2FastLaunchServiceRolePolicy = 'aws-service-role/EC2FastLaunchServiceRolePolicy';
    /** Policy granting permissions to EC2 Fleet to launch instances in the future. */
    public static EC2FleetTimeShiftableServiceRolePolicy = 'aws-service-role/EC2FleetTimeShiftableServiceRolePolicy';
    /** Permissions need by EC2 Image Builder to perform a cross account distribution. */
    public static Ec2ImageBuilderCrossAccountDistributionAccess = 'Ec2ImageBuilderCrossAccountDistributionAccess';
    /** The EC2ImageBuilderLifecycleExecutionPolicy policy grants permissions for Image Builder to perform actions such as deprecate or delete Image Builder image resources and their underlying resources (AMIs, snapshots) to support automated rules for image lifecycle management tasks. */
    public static EC2ImageBuilderLifecycleExecutionPolicy = 'service-role/EC2ImageBuilderLifecycleExecutionPolicy';
    /** Allows customers to call EC2 Instance Connect to publish ephemeral keys to their EC2 instances and connect via ssh or the EC2 Instance Connect CLI. */
    public static EC2InstanceConnect = 'EC2InstanceConnect';
    /** EC2 Instance Connect endpoint policy to manage EC2 Instance Connect endpoints created by the customer */
    public static Ec2InstanceConnectEndpoint = 'aws-service-role/Ec2InstanceConnectEndpoint';
    /** EC2 Instance profile for Image Builder service. */
    public static EC2InstanceProfileForImageBuilder = 'EC2InstanceProfileForImageBuilder';
    /** EC2 Instance profile for building container images with EC2 Image Builder. This policy grants the user broad permissions to upload ECR images. */
    public static EC2InstanceProfileForImageBuilderECRContainerBuilds = 'EC2InstanceProfileForImageBuilderECRContainerBuilds';
    /** Enables access to AWS Services and Resources used or managed by ECR Replication */
    public static ECRReplicationServiceRolePolicy = 'aws-service-role/ECRReplicationServiceRolePolicy';
    /** Allows actions to be performed when using AWS ECR repository creation templates */
    public static ECRTemplateServiceRolePolicy = 'aws-service-role/ECRTemplateServiceRolePolicy';
    /** This policy allows ElastiCache to manage AWS resources on your behalf as necessary for managing your cache */
    public static ElastiCacheServiceRolePolicy = 'aws-service-role/ElastiCacheServiceRolePolicy';
    /** Provides full access to Amazon ElasticLoadBalancing, and limited access to other services necessary to provide ElasticLoadBalancing features. */
    public static ElasticLoadBalancingFullAccess = 'ElasticLoadBalancingFullAccess';
    /** Provides read only access to Amazon ElasticLoadBalancing and dependent services */
    public static ElasticLoadBalancingReadOnly = 'ElasticLoadBalancingReadOnly';
    /** Access to view purchased assets and download related software and kickstart files */
    public static ElementalActivationsDownloadSoftwareAccess = 'ElementalActivationsDownloadSoftwareAccess';
    /** Full access to view and take action on Elemental Appliances and Software purchased assets */
    public static ElementalActivationsFullAccess = 'ElementalActivationsFullAccess';
    /** Access to view purchased assets and generate software licenses for pending activations */
    public static ElementalActivationsGenerateLicenses = 'ElementalActivationsGenerateLicenses';
    /** Read-only access to the detailed list of purchased assets associated to the AWS account of the user */
    public static ElementalActivationsReadOnlyAccess = 'ElementalActivationsReadOnlyAccess';
    /** Full access to view and take action on Elemental Appliances and Software quotes and orders */
    public static ElementalAppliancesSoftwareFullAccess = 'ElementalAppliancesSoftwareFullAccess';
    /** Read-only access to view Elemental Appliances and Software quotes and orders */
    public static ElementalAppliancesSoftwareReadOnlyAccess = 'ElementalAppliancesSoftwareReadOnlyAccess';
    /** Full access to view and take action on Elemental Appliance and Software support cases and product support content */
    public static ElementalSupportCenterFullAccess = 'ElementalSupportCenterFullAccess';
    /** This policy grants read-only permissions that allow the WAL service for Amazon EMR to find and return the status of a cluster */
    public static EMRDescribeClusterPolicyForEMRWAL = 'aws-service-role/EMRDescribeClusterPolicyForEMRWAL';
    /** Access policy to allow FM service linked role to perform FM-related actions on FM-managed resources within a customer AWS Organization account. */
    public static FMSServiceRolePolicy = 'aws-service-role/FMSServiceRolePolicy';
    /** Allows Amazon FSx to delete its Service Linked Roles for Amazon S3 access */
    public static FSxDeleteServiceLinkedRoleAccess = 'aws-service-role/FSxDeleteServiceLinkedRoleAccess';
    /** Grants the required permissions for compute actions in an Amazon GameLift container fleet, including access to dependencies such as Amazon S3. */
    public static GameLiftContainerFleetPolicy = 'GameLiftContainerFleetPolicy';
    /** Policy to allow Gamelift GameServerGroups to manage customer resources */
    public static GameLiftGameServerGroupPolicy = 'GameLiftGameServerGroupPolicy';
    /** This managed policy grants permission to connect with Amazon Q and utilize the features in the GitLab Duo with Amazon Q integration. */
    public static GitLabDuoWithAmazonQPermissionsPolicy = 'GitLabDuoWithAmazonQPermissionsPolicy';
    /** Allow GlobalAccelerator Users full Access to all APIs */
    public static GlobalAcceleratorFullAccess = 'GlobalAcceleratorFullAccess';
    /** Allow GlobalAccelerator Users Access to Read Only APIs */
    public static GlobalAcceleratorReadOnlyAccess = 'GlobalAcceleratorReadOnlyAccess';
    /** Provides read access to the Greengrass OTA Update artifacts in all Greengrass regions */
    public static GreengrassOTAUpdateArtifactAccess = 'service-role/GreengrassOTAUpdateArtifactAccess';
    /** AWS Health policy to enable Organizational View feature */
    public static HealthOrganizationsServiceRolePolicy = 'aws-service-role/Health_OrganizationsServiceRolePolicy';
    /** This policy grants access to read all access information provided by IAM access advisor such as service last accessed information. */
    public static IAMAccessAdvisorReadOnly = 'IAMAccessAdvisorReadOnly';
    /** Provides full access to IAM Access Analyzer */
    public static IAMAccessAnalyzerFullAccess = 'IAMAccessAnalyzerFullAccess';
    /** Provides read only access to IAM Access Analyzer resources */
    public static IAMAccessAnalyzerReadOnlyAccess = 'IAMAccessAnalyzerReadOnlyAccess';
    /** Provides access required to check the presence of root user credentials such as root user password and root user access keys using the Security Token Service (STS) AssumeRoot API. Use this managed policy only with the STS AssumeRoot action. */
    public static IAMAuditRootUserCredentials = 'root-task/IAMAuditRootUserCredentials';
    /** Provides access required to create a root user password using the Security Token Service (STS) AssumeRoot API.  Use this managed policy only with the STS AssumeRoot action. */
    public static IAMCreateRootUserPassword = 'root-task/IAMCreateRootUserPassword';
    /** Provides access required to delete all root user credentials such as root password and root access keys using the Security Token Service (STS) AssumeRoot API.  Use this managed policy only with the STS AssumeRoot action. */
    public static IAMDeleteRootUserCredentials = 'root-task/IAMDeleteRootUserCredentials';
    /** Provides full access to IAM via the AWS Management Console. */
    public static IAMFullAccess = 'IAMFullAccess';
    /** Provides read only access to IAM via the AWS Management Console. */
    public static IAMReadOnlyAccess = 'IAMReadOnlyAccess';
    /** Allows an IAM user to manage their own Service Specific Credentials. */
    public static IAMSelfManageServiceSpecificCredentials = 'IAMSelfManageServiceSpecificCredentials';
    /** Provides the ability for an IAM user to change their own password. */
    public static IAMUserChangePassword = 'IAMUserChangePassword';
    /** Provides the ability for an IAM user to manage their own SSH keys. */
    public static IAMUserSSHKeys = 'IAMUserSSHKeys';
    /** Provides full access to Interactive Video Service (IVS), Also included permissions for dependent services, needed for full access to the ivs console. */
    public static IVSFullAccess = 'IVSFullAccess';
    /** Provides read-only access to IVS Low-Latency and Real-Time streaming APIs */
    public static IVSReadOnlyAccess = 'IVSReadOnlyAccess';
    /** Service Linked Role to perform S3 PutObject to recording IVS live streams */
    public static IVSRecordToS3 = 'aws-service-role/IVSRecordToS3';
    /** This policy grants Kafka Connect permission to manage AWS resources on your behalf. */
    public static KafkaConnectServiceRolePolicy = 'aws-service-role/KafkaConnectServiceRolePolicy';
    /** IAM service linked role policy for Kafka. */
    public static KafkaServiceRolePolicy = 'aws-service-role/KafkaServiceRolePolicy';
    /** Grants the required permissions to Amazon Keyspaces for Change Data Capture */
    public static KeyspacesCDCServiceRolePolicy = 'aws-service-role/KeyspacesCDCServiceRolePolicy';
    /** Permissions required by Keyspaces for cross-region data replication */
    public static KeyspacesReplicationServiceRolePolicy = 'aws-service-role/KeyspacesReplicationServiceRolePolicy';
    /** Policy to grant temporary data access to Lake Formation resources */
    public static LakeFormationDataAccessServiceRolePolicy = 'aws-service-role/LakeFormationDataAccessServiceRolePolicy';
    /** Policy for AWS Lex Bot use case */
    public static LexBotPolicy = 'aws-service-role/LexBotPolicy';
    /** Policy for AWS Lex Channel use case */
    public static LexChannelPolicy = 'aws-service-role/LexChannelPolicy';
    /** AWS Lightsail service linked role policy which grants permissions to export resources */
    public static LightsailExportAccess = 'aws-service-role/LightsailExportAccess';
    /** This policy grants permission to register MediaConnect Gateway Instances to a MediaConnect Gateway. */
    public static MediaConnectGatewayInstanceRolePolicy = 'MediaConnectGatewayInstanceRolePolicy';
    /** Allows MediaPackage to publish logs to CloudWatch */
    public static MediaPackageServiceRolePolicy = 'aws-service-role/MediaPackageServiceRolePolicy';
    /** This policy allows MemoryDB to manage AWS resources on your behalf as necessary for managing your resources. */
    public static MemoryDBServiceRolePolicy = 'aws-service-role/MemoryDBServiceRolePolicy';
    /** Policy for Database Migration Service to assume role in customer's account to call Migration Hub */
    public static MigrationHubDMSAccessServiceRolePolicy = 'aws-service-role/MigrationHubDMSAccessServiceRolePolicy';
    /** Allows Migration Hub to call Application Discovery Service on your behalf */
    public static MigrationHubServiceRolePolicy = 'aws-service-role/MigrationHubServiceRolePolicy';
    /** Policy for Server Migration Service to assume role in customer's account to call Migration Hub */
    public static MigrationHubSMSAccessServiceRolePolicy = 'aws-service-role/MigrationHubSMSAccessServiceRolePolicy';
    /** Policy for AWS Monitron service linked role granting access to required customer resources. */
    public static MonitronServiceRolePolicy = 'aws-service-role/MonitronServiceRolePolicy';
    /** Provides full access to Multi-party approval. This policy also includes related permissions to AWS Organizations and AWS IAM Identity for managing approval teams and identity sources. */
    public static MultiPartyApprovalFullAccess = 'MultiPartyApprovalFullAccess';
    /** Provides read-only access to Multi-party approval. This policy also includes related read permission to AWS Organizations and AWS IAM Identity for approval teams and identity sources. */
    public static MultiPartyApprovalReadOnlyAccess = 'MultiPartyApprovalReadOnlyAccess';
    /** Provides full access to manage Amazon Neptune using the AWS Console. Note this policy also grants full access to publish on all SNS topics within the account, permissions to create and edit Amazon EC2 instances and VPC configurations, permissions to view and list keys on Amazon KMS, and full access to Amazon RDS. For more information, see https://aws.amazon.com/neptune/faqs/. */
    public static NeptuneConsoleFullAccess = 'NeptuneConsoleFullAccess';
    /** Provides full access to Amazon Neptune. Note this policy also grants full access to publish on all SNS topics within the account and full access to Amazon RDS. For more information, see https://aws.amazon.com/neptune/faqs/. */
    public static NeptuneFullAccess = 'NeptuneFullAccess';
    /** Provides read only access to all Amazon Neptune Analytics resources along with read only permissions for dependent services. */
    public static NeptuneGraphReadOnlyAccess = 'NeptuneGraphReadOnlyAccess';
    /** Provides read only access to Amazon Neptune. Note that this policy also grants access to Amazon RDS resources. For more information, see https://aws.amazon.com/neptune/faqs/. */
    public static NeptuneReadOnlyAccess = 'NeptuneReadOnlyAccess';
    /** Grants full access permissions to AWS services and actions required to set up and configure AWS network resources. */
    public static NetworkAdministrator = 'job-function/NetworkAdministrator';
    /** Provides permissions for the AWS Shield network security director service linked role to assess specified environments. */
    public static NetworkSecurityDirectorServiceLinkedRolePolicy = 'aws-service-role/NetworkSecurityDirectorServiceLinkedRolePolicy';
    /** Provides full access to CloudWatch Observability Access Manager */
    public static OAMFullAccess = 'OAMFullAccess';
    /** Provides Read Only access to CloudWatch Observability Access Manager */
    public static OAMReadOnlyAccess = 'OAMReadOnlyAccess';
    /** Allows Amazon OpenSearch Ingestion to describe network resources and write service metrics to cloudwatch */
    public static OpensearchIngestionSelfManagedVpcePolicy = 'aws-service-role/OpensearchIngestionSelfManagedVpcePolicy';
    /** Provides access to associate and dissociate partner central users with IAM roles */
    public static PartnerCentralAccountManagementUserRoleAssociation = 'PartnerCentralAccountManagementUserRoleAssociation';
    /** Provides full access to AWS services and resources, but does not allow management of Users and groups. */
    public static PowerUserAccess = 'PowerUserAccess';
    /** Grants permissions to AWS Services and Resources used or managed by Amazon Q Apps. */
    public static QAppsServiceRolePolicy = 'aws-service-role/QAppsServiceRolePolicy';
    /** Grants permissions to QBusiness to call QuickSight APIs for the QuickSight plugin */
    public static QBusinessQuicksightPluginPolicy = 'QBusinessQuicksightPluginPolicy';
    /** Grants permissions to AWS Services and Resources used or managed by Amazon Q */
    public static QBusinessServiceRolePolicy = 'aws-service-role/QBusinessServiceRolePolicy';
    /** Policy used by QuickSight team to access customer data produced by S3 Storage Management Analytics. */
    public static QuickSightAccessForS3StorageManagementAnalyticsReadOnly = 'service-role/QuickSightAccessForS3StorageManagementAnalyticsReadOnly';
    /** Default policy for the Amazon RDS service role. */
    public static RDSCloudHsmAuthorizationRole = 'service-role/RDSCloudHsmAuthorizationRole';
    /** Provides read-only access to AWS services and resources. */
    public static ReadOnlyAccess = 'ReadOnlyAccess';
    /** Provides full access to Resource Groups and Tag Editor. */
    public static ResourceGroupsandTagEditorFullAccess = 'ResourceGroupsandTagEditorFullAccess';
    /** Provides access to use Resource Groups and Tag Editor, but does not allow editing of tags via the Tag Editor. */
    public static ResourceGroupsandTagEditorReadOnlyAccess = 'ResourceGroupsandTagEditorReadOnlyAccess';
    /** Allows AWS Resource Groups to query the AWS services that own your resources to keep the group up-to-date */
    public static ResourceGroupsServiceRolePolicy = 'aws-service-role/ResourceGroupsServiceRolePolicy';
    /** Provides permissions to tag and untag all the resources supported by Resource Groups Tagging API. This policy also grants the permissions required to retrieve all tagged, or previously tagged, resources through the Resource Groups Tagging API. */
    public static ResourceGroupsTaggingAPITagUntagSupportedResources = 'ResourceGroupsTaggingAPITagUntagSupportedResources';
    /** Allows the OpenShift Amazon EBS Container Storage Interface (CSI) Driver Operator to install and maintain the Amazon EBS CSI driver on a Red Hat OpenShift Service on AWS (ROSA) cluster. The Amazon EBS CSI driver allows ROSA clusters to manage the lifecycle of Amazon EBS volumes for persistent volumes. */
    public static ROSAAmazonEBSCSIDriverOperatorPolicy = 'service-role/ROSAAmazonEBSCSIDriverOperatorPolicy';
    /** Allows the OpenShift Cloud Network Config Controller Operator to provision and manage networking resources for use by the Red Hat OpenShift Service on AWS (ROSA) cluster networking overlay. The OpenShift Cloud Network Operator interfaces with AWS APIs on behalf of the network plugins via CustomResourceDefinitions. The operator uses these policy permissions to manage private IP addresses for Amazon EC2 instances as part of the ROSA cluster. */
    public static ROSACloudNetworkConfigOperatorPolicy = 'service-role/ROSACloudNetworkConfigOperatorPolicy';
    /** Allows Red Hat OpenShift Service on AWS (ROSA) control plane to manage ROSA cluster Amazon EC2 and Amazon Route 53 resources. */
    public static ROSAControlPlaneOperatorPolicy = 'service-role/ROSAControlPlaneOperatorPolicy';
    /** Allows the OpenShift Image Registry Operator to provision and manage Amazon S3 buckets and objects for use by the Red Hat OpenShift Service on AWS (ROSA) in-cluster image registry to satisfy ROSA storage requirements. The OpenShift Image Registry Operator installs and maintains the internal registry of a Red Hat OpenShift cluster. */
    public static ROSAImageRegistryOperatorPolicy = 'service-role/ROSAImageRegistryOperatorPolicy';
    /** Allows the OpenShift Ingress Operator to provision and manage load balancers and domain name system (DNS) configurations for Red Hat OpenShift Service on AWS (ROSA) clusters. The policy allows read access to tag values, which the operator filters for Route 53 resources to discover hosted zones. */
    public static ROSAIngressOperatorPolicy = 'service-role/ROSAIngressOperatorPolicy';
    /** Allows the Red Hat OpenShift Service on AWS (ROSA) installer to manage AWS resources that support ROSA cluster installation. This includes managing instance profiles for ROSA worker nodes. */
    public static ROSAInstallerPolicy = 'service-role/ROSAInstallerPolicy';
    /** Allows the built-in ROSA AWS Encryption Provider to manage AWS Key Management Service (KMS) keys to support etcd data encryption using a customer provided AWS KMS key. The policy allows encryption and decryption of data using KMS keys. */
    public static ROSAKMSProviderPolicy = 'service-role/ROSAKMSProviderPolicy';
    /** Allows the ROSA Kubernetes controller to manage Amazon EC2, Elastic Load Balancing (ELB), and AWS Key Management Service (KMS) resources for a ROSA cluster. */
    public static ROSAKubeControllerPolicy = 'service-role/ROSAKubeControllerPolicy';
    /** This policy provides the permissions required to manage the Red Hat OpenShift Service on AWS (ROSA) subscription. */
    public static ROSAManageSubscription = 'ROSAManageSubscription';
    /** Allows Red Hat OpenShift Service on AWS (ROSA) to manage cluster EC2 instances as worker nodes, including permission to configure security groups and tag instances and volumes. This policy also allows for the use of EC2 instances with disk encryption provided by AWS Key Management Service (KMS) keys. */
    public static ROSANodePoolManagementPolicy = 'service-role/ROSANodePoolManagementPolicy';
    /** Allows the Red Hat OpenShift Service on AWS (ROSA) installer to configure VPC Endpoints and Security Groups. Intended to be used on a shared VPC. */
    public static ROSASharedVPCEndpointPolicy = 'ROSASharedVPCEndpointPolicy';
    /** Allows the Red Hat OpenShift Service on AWS (ROSA) installer to configure Route53 records. Intended to be used on a shared VPC. */
    public static ROSASharedVPCRoute53Policy = 'ROSASharedVPCRoute53Policy';
    /** Provides ROSA site reliability engineering (SRE) the permissions needed to initially observe, diagnose, and support AWS resources associated with Red Hat OpenShift Service on AWS (ROSA) clusters, including the ability to change ROSA cluster node state. */
    public static ROSASRESupportPolicy = 'service-role/ROSASRESupportPolicy';
    /** Allows Red Hat OpenShift Service on AWS (ROSA) worker nodes in your account read-only access to Amazon EC2 instances and AWS Regions for compute node lifecycle management. */
    public static ROSAWorkerInstancePolicy = 'service-role/ROSAWorkerInstancePolicy';
    /** Service Linked Role Policy for Route 53 Recovery Readiness */
    public static Route53RecoveryReadinessServiceRolePolicy = 'aws-service-role/Route53RecoveryReadinessServiceRolePolicy';
    /** Enables access to AWS Services and Resources used or managed by Route53 Resolver */
    public static Route53ResolverServiceRolePolicy = 'aws-service-role/Route53ResolverServiceRolePolicy';
    /** Enables access to AWS Services and Resources used or managed by S3 Storage Lens */
    public static S3StorageLensServiceRolePolicy = 'aws-service-role/S3StorageLensServiceRolePolicy';
    /** Provides access required to unlock a S3 bucket policy using the Security Token Service (STS) AssumeRoot API. Use this managed policy only with the STS AssumeRoot action. */
    public static S3UnlockBucketPolicy = 'root-task/S3UnlockBucketPolicy';
    /** Provides initial administrative and individual setup privileges for Amazon SageMaker Unified Studio via the AWS Management Console and SDK. Allows launching of SageMaker Unified Studio Portal. */
    public static SageMakerStudioAdminIAMConsolePolicy = 'SageMakerStudioAdminIAMConsolePolicy';
    /** Administrative execution policy for using IAM roles with SageMaker Unified Studio. Allows admins to provision, manage and access resources in your account (excluding access to data resources) for IAM-based usage of SageMaker Unified Studio. */
    public static SageMakerStudioAdminIAMDefaultExecutionPolicy = 'SageMakerStudioAdminIAMDefaultExecutionPolicy';
    /** Administrative execution policy for using IAM roles with SageMaker Unified Studio. Allows admins to provision, manage and access resources in the local account (including broad access to all APIs in data services like S3, Glue, CloudWatch Logs, and others) for IAM-based usage of SageMaker Unified Studio. */
    public static SageMakerStudioAdminIAMPermissiveExecutionPolicy = 'SageMakerStudioAdminIAMPermissiveExecutionPolicy';
    /** This IAM policy grants an IAM role full access to AWS Glue Data Catalog (metadata) and Amazon S3 (actual data) for data lake operations, with access scoped by account, and role tags. */
    public static SageMakerStudioAdminProjectUserRolePolicy = 'SageMakerStudioAdminProjectUserRolePolicy';
    /** Allows Amazon Bedrock Agents to access Amazon Bedrock models and other resources attached to an agent in SageMaker Studio. */
    public static SageMakerStudioBedrockAgentServiceRolePolicy = 'service-role/SageMakerStudioBedrockAgentServiceRolePolicy';
    /** Provides access to an Amazon Bedrock chat agent app's configuration and Amazon Bedrock agent in SageMaker Studio. */
    public static SageMakerStudioBedrockChatAgentUserRolePolicy = 'service-role/SageMakerStudioBedrockChatAgentUserRolePolicy';
    /** Allows Amazon Bedrock to access Amazon Bedrock models and datasets for evaluation jobs in SageMaker Studio. */
    public static SageMakerStudioBedrockEvaluationJobServiceRolePolicy = 'service-role/SageMakerStudioBedrockEvaluationJobServiceRolePolicy';
    /** Allows Amazon Bedrock Flows to access Amazon Bedrock models and other resources attached to a flow in SageMaker Studio. */
    public static SageMakerStudioBedrockFlowServiceRolePolicy = 'service-role/SageMakerStudioBedrockFlowServiceRolePolicy';
    /** Allows AWS Lambda to access an Amazon Bedrock function component's configuration in SageMaker Studio. */
    public static SageMakerStudioBedrockFunctionExecutionRolePolicy = 'service-role/SageMakerStudioBedrockFunctionExecutionRolePolicy';
    /** Provides access to configure vector stores and Amazon Bedrock knowledge bases in SageMaker Studio. */
    public static SageMakerStudioBedrockKnowledgeBaseCustomResourcePolicy = 'service-role/SageMakerStudioBedrockKnowledgeBaseCustomResourcePolicy';
    /** Allows Amazon Bedrock Knowledge Bases to access Amazon Bedrock models and data sources in SageMaker Studio. */
    public static SageMakerStudioBedrockKnowledgeBaseServiceRolePolicy = 'service-role/SageMakerStudioBedrockKnowledgeBaseServiceRolePolicy';
    /** Provides access to an Amazon Bedrock prompt and its configuration in SageMaker Studio. */
    public static SageMakerStudioBedrockPromptUserRolePolicy = 'service-role/SageMakerStudioBedrockPromptUserRolePolicy';
    /** This policy is used by Amazon SageMaker Studio to catalog, discover, govern, share, and analyze data in the Amazon SageMaker Studio domain. */
    public static SageMakerStudioDomainExecutionRolePolicy = 'service-role/SageMakerStudioDomainExecutionRolePolicy';
    /** Service role for domain level actions in the portal that are performed by Amazon SageMaker Studio. */
    public static SageMakerStudioDomainServiceRolePolicy = 'service-role/SageMakerStudioDomainServiceRolePolicy';
    /** Amazon SageMaker Studio creates IAM roles for projects users to perform data analytics, artificial intelligence, and machine learning actions, and uses this policy when creating these roles to define the permissions related to EMR. */
    public static SageMakerStudioEMRInstanceRolePolicy = 'service-role/SageMakerStudioEMRInstanceRolePolicy';
    /** Amazon SageMaker Studio creates IAM roles for projects users to perform data analytics, artificial intelligence, and machine learning actions, and uses this policy when creating these roles to define the permissions related to EMR. */
    public static SageMakerStudioEMRServiceRolePolicy = 'service-role/SageMakerStudioEMRServiceRolePolicy';
    /** This policy provides full access to Amazon SageMaker Unified Studio via the Amazon SageMaker management console. */
    public static SageMakerStudioFullAccess = 'SageMakerStudioFullAccess';
    /** Amazon SageMaker Studio uses this policy to provision and manage resources in your account. */
    public static SageMakerStudioProjectProvisioningRolePolicy = 'service-role/SageMakerStudioProjectProvisioningRolePolicy';
    /** Amazon SageMaker Studio creates IAM roles for projects users to perform data analytics, artificial intelligence, and machine learning actions, and uses this policy when creating these roles to define the permissions related to SageMaker. */
    public static SageMakerStudioProjectRoleMachineLearningPolicy = 'SageMakerStudioProjectRoleMachineLearningPolicy';
    /** Amazon SageMaker creates IAM roles for Projects users to perform data analytics, artificial intelligence, and machine learning actions, and uses this policy when creating these roles to define the boundary of their permissions. */
    public static SageMakerStudioProjectUserRolePermissionsBoundary = 'SageMakerStudioProjectUserRolePermissionsBoundary';
    /** Amazon SageMaker Studio creates IAM roles for projects users to perform data analytics, artificial intelligence, and machine learning actions, and uses this policy when creating these roles to define the permissions. */
    public static SageMakerStudioProjectUserRolePolicy = 'SageMakerStudioProjectUserRolePolicy';
    /** Amazon SageMaker Studio uses this policy when running query executions on federated connections. */
    public static SageMakerStudioQueryExecutionRolePolicy = 'service-role/SageMakerStudioQueryExecutionRolePolicy';
    /** Provides individual setup privileges for Amazon SageMaker Unified Studio via the AWS Management Console and SDK. Allows launching of SageMaker Unified Studio Portal. */
    public static SageMakerStudioUserIAMConsolePolicy = 'SageMakerStudioUserIAMConsolePolicy';
    /** Execution policy for using IAM roles with SageMaker Unified Studio. Allows users to access resources in the local account (excluding access to data resources) for IAM-based usage of SageMaker Unified Studio. */
    public static SageMakerStudioUserIAMDefaultExecutionPolicy = 'SageMakerStudioUserIAMDefaultExecutionPolicy';
    /** Execution policy for using IAM roles with SageMaker Unified Studio. Allows users to access resources in your account (including broad access to all APIs in data services like S3, Glue, CloudWatch Logs, and others) for IAM-based usage of SageMaker Unified Studio. */
    public static SageMakerStudioUserIAMPermissiveExecutionPolicy = 'SageMakerStudioUserIAMPermissiveExecutionPolicy';
    /** Provides read/write access to AWS Secrets Manager via the AWS Management Console. Note: this exludes IAM actions, so combine with IAMFullAccess if rotation configuration is required. */
    public static SecretsManagerReadWrite = 'SecretsManagerReadWrite';
    /** The security audit template grants access to read security configuration metadata. It is useful for software that audits the configuration of an AWS account. */
    public static SecurityAudit = 'SecurityAudit';
    /** Provides access to manage resources created by Security Lake. */
    public static SecurityLakeResourceManagementServiceRolePolicy = 'aws-service-role/SecurityLakeResourceManagementServiceRolePolicy';
    /** This policy grants permissions to operate the Amazon Security Lake service on your behalf */
    public static SecurityLakeServiceLinkedRole = 'aws-service-role/SecurityLakeServiceLinkedRole';
    /** Permissions to allow the AWS Server Migration Connector to migrate VMs to EC2. Allows communication with the AWS Server Migration Service, read/write access to S3 buckets starting with 'sms-b-' and 'import-to-ec2-' as well as the buckets used for AWS Server Migration Connector upgrade, AWS Server Migration Connector registration with AWS, and metrics upload to AWS. */
    public static ServerMigrationConnector = 'ServerMigrationConnector';
    /** Required permissions to use all features of the Server Migration Service Console */
    public static ServerMigrationServiceConsoleFullAccess = 'ServerMigrationServiceConsoleFullAccess';
    /** Permissions to allow the AWS Server Migration Service to create and update relevant AWS resources into the customer's AWS account for launching migrated servers and applications. */
    public static ServerMigrationServiceLaunchRole = 'service-role/ServerMigrationServiceLaunchRole';
    /** Permissions to allow the AWS SMS to run used data validation script and send script success/failure back to SMS */
    public static ServerMigrationServiceRoleForInstanceValidation = 'service-role/ServerMigrationServiceRoleForInstanceValidation';
    /** Provides full access to Service Quotas */
    public static ServiceQuotasFullAccess = 'ServiceQuotasFullAccess';
    /** Provides read only access to Service Quotas */
    public static ServiceQuotasReadOnlyAccess = 'ServiceQuotasReadOnlyAccess';
    /** Allows Service Quotas to create support cases on your behalf */
    public static ServiceQuotasServiceRolePolicy = 'aws-service-role/ServiceQuotasServiceRolePolicy';
    /** Provides full access to the Simple Workflow configuration service. */
    public static SimpleWorkflowFullAccess = 'SimpleWorkflowFullAccess';
    /** Allows SMSVoice to publish metrics to CloudWatch on your behalf */
    public static SMSVoiceServiceRolePolicy = 'aws-service-role/SMSVoiceServiceRolePolicy';
    /** Allows split cost allocation data to retrieve AWS Organizations information, if applicable, and collect telemetry data for the split cost allocation data services that the customer has opted in to. */
    public static SplitCostAllocationDataServiceRolePolicy = 'aws-service-role/SplitCostAllocationDataServiceRolePolicy';
    /** Provides access required to unlock a SQS queue policy using the Security Token Service (STS) AssumeRoot API. Use this managed policy only with the STS AssumeRoot action. */
    public static SQSUnlockQueuePolicy = 'root-task/SQSUnlockQueuePolicy';
    /** Provides permissions to check Quick Setup configuration health, ensure consistent use of parameters and provisioned resources, and remediate resources when drift is detected. */
    public static SSMQuickSetupRolePolicy = 'aws-service-role/SSMQuickSetupRolePolicy';
    /** This policy grants permissions to troubleshoot and resolve issues in an AWS account. This policy also enables the user to contact AWS support to create and manage cases. */
    public static SupportUser = 'job-function/SupportUser';
    /** Grants full access permissions necessary for resources required for application and development operations. */
    public static SystemAdministrator = 'job-function/SystemAdministrator';
    /** Provides full access to Amazon Translate. */
    public static TranslateFullAccess = 'TranslateFullAccess';
    /** Provides read-only access to Amazon Translate. */
    public static TranslateReadOnly = 'TranslateReadOnly';
    /** This policy grants permissions to view resources and basic metadata across all AWS services. */
    public static ViewOnlyAccess = 'job-function/ViewOnlyAccess';
    /** Default policy for the VM Import/Export service role, for customers using the AWS Connector. The VM Import/Export service assumes a role with this policy to fulfill virtual machine migration requests from the AWS Connector virtual appliance. (Note that the AWS Connector uses the "AWSConnector" managed policy to issue requests on the customer's behalf to the VM Import/Export service.) Provides the ability to create AMIs and EBS snapshots, modify EBS snapshot attributes, make "Describe*" calls on EC2 objects, and read from S3 buckets starting with 'import-to-ec2-'. */
    public static VMImportExportRoleForAWSConnector = 'service-role/VMImportExportRoleForAWSConnector';
    /** Provides full access to Amazon VPC Lattice and access to dependency services. */
    public static VPCLatticeFullAccess = 'VPCLatticeFullAccess';
    /** Provides read-only access to Amazon VPC Lattice via the AWS Management Console, and limited access to dependency services. */
    public static VPCLatticeReadOnlyAccess = 'VPCLatticeReadOnlyAccess';
    /** Provides access to invoking Amazon VPC Lattice services. */
    public static VPCLatticeServicesInvokeAccess = 'VPCLatticeServicesInvokeAccess';
    /** Creating SLR to write customer's logs to a firehose stream */
    public static WAFLoggingServiceRolePolicy = 'aws-service-role/WAFLoggingServiceRolePolicy';
    /** Creating SLR to write customer's logs to a firehose stream */
    public static WAFRegionalLoggingServiceRolePolicy = 'aws-service-role/WAFRegionalLoggingServiceRolePolicy';
    /** This policy creates a service-linked role that allows AWS WAF to write logs to Amazon Kinesis Data Firehose. */
    public static WAFV2LoggingServiceRolePolicy = 'aws-service-role/WAFV2LoggingServiceRolePolicy';
    /** Provides full access to AWS Well-Architected Tool via the AWS Management Console */
    public static WellArchitectedConsoleFullAccess = 'WellArchitectedConsoleFullAccess';
    /** Provides read-only access to AWS Well-Architected Tool via the AWS Management Console */
    public static WellArchitectedConsoleReadOnlyAccess = 'WellArchitectedConsoleReadOnlyAccess';
    /** Enables access to AWS Services and Resources used or managed by Amazon WorkLink */
    public static WorkLinkServiceRolePolicy = 'WorkLinkServiceRolePolicy';
}

type ExcludePrototype<T>  = Exclude<keyof T, 'prototype'>;
export type AwsManagedPolicyName = ExcludePrototype<typeof AwsManagedPolicy>;
