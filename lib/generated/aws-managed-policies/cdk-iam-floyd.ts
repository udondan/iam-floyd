import { aws_iam } from 'aws-cdk-lib';
import { AwsManagedPolicy as AwsManagedPolicyStatic } from './iam-floyd';

/**
 * Provides all AWS managed policies.
 *
 * To get the name, access the static properties of this class, e.g. `AwsManagedPolicy.ReadOnlyAccess`.
 *
 *  To get an `aws_iam.IManagedPolicy` object, call the methods on an instance of the class, e.g. `new AwsManagedPolicy().ReadOnlyAccess()`.
 */
export class AwsManagedPolicy extends AwsManagedPolicyStatic {
    /** Allow Access Analyzer to analyze resource metadata */
    public AccessAnalyzerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AccessAnalyzerServiceRolePolicy);
    }

    /** Provides full access to AWS services and resources. */
    public AdministratorAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AdministratorAccess);
    }

    /** Grants account administrative permissions while explicitly allowing direct access to resources needed by Amplify applications. */
    public AdministratorAccessAmplify(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AdministratorAccessAmplify);
    }

    /** Grants account administrative permissions. Explicitly allows developers and administrators to gain direct access to resources they need to manage AWS Elastic Beanstalk applications */
    public AdministratorAccessAWSElasticBeanstalk(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AdministratorAccessAWSElasticBeanstalk);
    }

    /** Provide device setup access to AlexaForBusiness services */
    public AlexaForBusinessDeviceSetup(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AlexaForBusinessDeviceSetup);
    }

    /** Grants full access to AlexaForBusiness resources and access to related AWS Services */
    public AlexaForBusinessFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AlexaForBusinessFullAccess);
    }

    /** Provide gateway execution access to AlexaForBusiness services */
    public AlexaForBusinessGatewayExecution(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AlexaForBusinessGatewayExecution);
    }

    /** Provide access to Lifesize AVS devices */
    public AlexaForBusinessLifesizeDelegatedAccessPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AlexaForBusinessLifesizeDelegatedAccessPolicy);
    }

    /** This policy enables Alexa for Business to perform automated tasks scheduled by your network profiles. */
    public AlexaForBusinessNetworkProfileServicePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AlexaForBusinessNetworkProfileServicePolicy);
    }

    /** Provide access to Poly AVS devices */
    public AlexaForBusinessPolyDelegatedAccessPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AlexaForBusinessPolyDelegatedAccessPolicy);
    }

    /** Provide read only access to AlexaForBusiness services */
    public AlexaForBusinessReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AlexaForBusinessReadOnlyAccess);
    }

    /** Provides full access to create/edit/delete APIs in Amazon API Gateway via the AWS Management Console. */
    public AmazonAPIGatewayAdministrator(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonAPIGatewayAdministrator);
    }

    /** Provides full access to invoke APIs in Amazon API Gateway. */
    public AmazonAPIGatewayInvokeFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonAPIGatewayInvokeFullAccess);
    }

    /** Allows API Gateway to push logs to user's account. */
    public AmazonAPIGatewayPushToCloudWatchLogs(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonAPIGatewayPushToCloudWatchLogs);
    }

    /** Provides full access to Amazon AppFlow and access to AWS services supported as flow source or destination (S3 and Redshift). Also provides access to KMS for encryption */
    public AmazonAppFlowFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonAppFlowFullAccess);
    }

    /** Provides read only access to Amazon Appflow flows */
    public AmazonAppFlowReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonAppFlowReadOnlyAccess);
    }

    /** Provides full access to Amazon AppStream via the AWS Management Console. */
    public AmazonAppStreamFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonAppStreamFullAccess);
    }

    /** Amazon AppStream 2.0 access to AWS Certificate Manager Private CA in customer accounts for certificate-based authentication */
    public AmazonAppStreamPCAAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonAppStreamPCAAccess);
    }

    /** Provides read only access to Amazon AppStream via the AWS Management Console. */
    public AmazonAppStreamReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonAppStreamReadOnlyAccess);
    }

    /** Default policy for Amazon AppStream service role. */
    public AmazonAppStreamServiceAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonAppStreamServiceAccess);
    }

    /** Provide full access to Amazon Athena and scoped access to the dependencies needed to enable querying, writing results, and data management. */
    public AmazonAthenaFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonAthenaFullAccess);
    }

    /** Provides access to perform all operations Amazon Augmented AI resources, including FlowDefinitions, HumanTaskUis and HumanLoops. Does not allow access for creating FlowDefinitions against the public-crowd Workteam. */
    public AmazonAugmentedAIFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonAugmentedAIFullAccess);
    }

    /** Provides access to perform all operations on HumanLoops. */
    public AmazonAugmentedAIHumanLoopFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonAugmentedAIHumanLoopFullAccess);
    }

    /** Provides access to perform all operations Amazon Augmented AI resources, including FlowDefinitions, HumanTaskUis and HumanLoops. Also provides access to those operations of services that are integrated with Amazon Augmented AI. */
    public AmazonAugmentedAIIntegratedAPIAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonAugmentedAIIntegratedAPIAccess);
    }

    /** Provides full access to Amazon Bedrock as well as limited access to related services that are required by it */
    public AmazonBedrockFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonBedrockFullAccess);
    }

    /** Provides read only access to Amazon Bedrock */
    public AmazonBedrockReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonBedrockReadOnly);
    }

    /** Provides full access to Amazon Braket via the AWS Management Console and SDK. Also provides access to related services (e.g., S3, logs). */
    public AmazonBraketFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonBraketFullAccess);
    }

    /** Grants access to AWS Services and resources necessary for executing an Amazon Braket Job including S3, Cloudwatch, IAM and Braket */
    public AmazonBraketJobsExecutionPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonBraketJobsExecutionPolicy);
    }

    /** Allows Amazon Braket to create and manage AWS resources on your behalf */
    public AmazonBraketServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonBraketServiceRolePolicy);
    }

    /** Provides full access to Amazon Chime Admin Console via the AWS Management Console. */
    public AmazonChimeFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonChimeFullAccess);
    }

    /** Provides read only access to Amazon Chime Admin Console via the AWS Management Console. */
    public AmazonChimeReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonChimeReadOnly);
    }

    /** Provides access to Amazon Chime SDK operations */
    public AmazonChimeSDK(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonChimeSDK);
    }

    /** Managed Policy For Amazon Chime SDK MediaPipelines Service Linked Role */
    public AmazonChimeSDKMediaPipelinesServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonChimeSDKMediaPipelinesServiceLinkedRolePolicy);
    }

    /** Allows Amazon Chime SDK Messaging to access AWS resources and enable messaging functionality */
    public AmazonChimeSDKMessagingServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonChimeSDKMessagingServiceRolePolicy);
    }

    /** Enables access to AWS Resources used or managed by Amazon Chime */
    public AmazonChimeServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonChimeServiceRolePolicy);
    }

    /** Allows Amazon Chime to access Amazon Transcribe and Amazon Transcribe Medical on your behalf */
    public AmazonChimeTranscriptionServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonChimeTranscriptionServiceLinkedRolePolicy);
    }

    /** Provides user management access to Amazon Chime Admin Console via the AWS Management Console. */
    public AmazonChimeUserManagement(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonChimeUserManagement);
    }

    /** Managed policy for Service Linked Role for Amazon Chime VoiceConnector */
    public AmazonChimeVoiceConnectorServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonChimeVoiceConnectorServiceLinkedRolePolicy);
    }

    /** Provides full access to Amazon Cloud Directory Service. */
    public AmazonCloudDirectoryFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCloudDirectoryFullAccess);
    }

    /** Provides read only access to Amazon Cloud Directory Service. */
    public AmazonCloudDirectoryReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCloudDirectoryReadOnlyAccess);
    }

    /** Provides full only access to Amazon CloudWatch Evidently. Also provides access to related Amazon S3, Amazon SNS, Amazon CloudWatch, and other related services. */
    public AmazonCloudWatchEvidentlyFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCloudWatchEvidentlyFullAccess);
    }

    /** Provides read only access to Amazon CloudWatch Evidently */
    public AmazonCloudWatchEvidentlyReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCloudWatchEvidentlyReadOnlyAccess);
    }

    /** Allows CloudWatch Evidently Service to manage associated AWS Resources on behalf of the customer */
    public AmazonCloudWatchEvidentlyServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCloudWatchEvidentlyServiceRolePolicy);
    }

    /** Grants full access permissions for the Amazon CloudWatch RUM service */
    public AmazonCloudWatchRUMFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCloudWatchRUMFullAccess);
    }

    /** Grants read only permissions for the Amazon CloudWatch RUM service */
    public AmazonCloudWatchRUMReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCloudWatchRUMReadOnlyAccess);
    }

    /** Grants permission to Amazon CloudWatch RUM Service to publish monitoring data to other relevant AWS services */
    public AmazonCloudWatchRUMServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCloudWatchRUMServiceRolePolicy);
    }

    /** Provides full access to Amazon CodeCatalyst */
    public AmazonCodeCatalystFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCodeCatalystFullAccess);
    }

    /** Provides read only access to Amazon CodeCatalyst */
    public AmazonCodeCatalystReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCodeCatalystReadOnlyAccess);
    }

    /** Allows Amazon CodeCatalyst to create, update, and resolve AWS Support cases on your behalf. */
    public AmazonCodeCatalystSupportAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCodeCatalystSupportAccess);
    }

    /** Provides access required by Amazon CodeGuru Profiler agent. */
    public AmazonCodeGuruProfilerAgentAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCodeGuruProfilerAgentAccess);
    }

    /** Provides full access to Amazon CodeGuru Profiler. */
    public AmazonCodeGuruProfilerFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCodeGuruProfilerFullAccess);
    }

    /** Provides read only access to Amazon CodeGuru Profiler. */
    public AmazonCodeGuruProfilerReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCodeGuruProfilerReadOnlyAccess);
    }

    /** Grants full access to Amazon CodeGuru Reviewer and scoped access to required dependencies. */
    public AmazonCodeGuruReviewerFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCodeGuruReviewerFullAccess);
    }

    /** Provides read only access to Amazon CodeGuru Reviewer. */
    public AmazonCodeGuruReviewerReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCodeGuruReviewerReadOnlyAccess);
    }

    /** A service-linked role required for Amazon CodeGuru Reviewer to access resources on your behalf. */
    public AmazonCodeGuruReviewerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCodeGuruReviewerServiceRolePolicy);
    }

    /** Provides full access to Amazon CodeGuru Security. */
    public AmazonCodeGuruSecurityFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCodeGuruSecurityFullAccess);
    }

    /** Provides access required for working with Amazon CodeGuru Security scans. */
    public AmazonCodeGuruSecurityScanAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCodeGuruSecurityScanAccess);
    }

    /** Provides access to Amazon Cognito APIs to support developer authenticated identities from your authentication backend. */
    public AmazonCognitoDeveloperAuthenticatedIdentities(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCognitoDeveloperAuthenticatedIdentities);
    }

    /** Allows Amazon Cognito User Pools service to use your SES identities for email sending */
    public AmazonCognitoIdpEmailServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCognitoIdpEmailServiceRolePolicy);
    }

    /** Enables access to AWS Services and Resources used or managed by Amazon Cognito User Pools */
    public AmazonCognitoIdpServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCognitoIdpServiceRolePolicy);
    }

    /** Provides administrative access to existing Amazon Cognito resources. You will need AWS account admin privileges to create new Cognito resources. */
    public AmazonCognitoPowerUser(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCognitoPowerUser);
    }

    /** Provides read only access to Amazon Cognito resources. */
    public AmazonCognitoReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCognitoReadOnly);
    }

    /** This policy defines the set of permissions allowed for unauthenticated identities for Cognito Identity Pools. This policy is not intended to be used as a stand alone permission policy. It is used as a guardrail against overly permissive policies attached for roles in an identity pool. Do not attach this policy to any roles, as Cognito Identity Service will automatically include it as a scoped down policy when creating credentials. The privileges to temporarily access other AWS resources through the enhanced flow will now be defined by the intersection of the role associated with the identity of the unauthenticated user provided by a service, and the privileges given in this managed policy that is owned by Cognito. */
    public AmazonCognitoUnAuthedIdentitiesSessionPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCognitoUnAuthedIdentitiesSessionPolicy);
    }

    /** This policy defines the set of permissions allowed for unauthenticated identities for Cognito Identity Pools. This does not need to be attached to your unauth role, as Cognito Identity Service will automatically include it as a scoped down policy when creating credentials. The privileges to temporarily access other AWS resources through the enhanced flow will now be defined by the intersection of the role associated with the identity of the unauthenticated user provided by a service, and the privileges given in this managed policy that is owned by Cognito. */
    public AmazonCognitoUnauthenticatedIdentities(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonCognitoUnauthenticatedIdentities);
    }

    /** The purpose of this policy is to grant permissions to AWS Connect users required to use Connect resources. This policy provides full access to AWS Connect resources via the Connect Console and public APIs */
    public AmazonConnectFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonConnectFullAccess);
    }

    /** Policy for Amazon Connect Campaigns service linked role */
    public AmazonConnectCampaignsServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonConnectCampaignsServiceLinkedRolePolicy);
    }

    /** Grants permission to view the Amazon Connect instances in your AWS account. */
    public AmazonConnectReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonConnectReadOnlyAccess);
    }

    /** Allows Amazon Connect to create and manage AWS resources on your behalf. */
    public AmazonConnectServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonConnectServiceLinkedRolePolicy);
    }

    /** Allows Amazon Connect to synchronize AWS resources across regions on your behalf. */
    public AmazonConnectSynchronizationServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonConnectSynchronizationServiceRolePolicy);
    }

    /** Provides full access to Amazon Connect Voice ID */
    public AmazonConnectVoiceIDFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonConnectVoiceIDFullAccess);
    }

    /** Default policy for the Amazon DataZone's DomainExecutionRole service role. This role is used by Amazon DataZone to catalog, discover, govern, share, and analyze data in the Amazon DataZone domain. */
    public AmazonDataZoneDomainExecutionRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDataZoneDomainExecutionRolePolicy);
    }

    /** Amazon DataZone creates IAM roles for Environments to perform data analytics actions, and uses this policy when creating these roles to define the boundary of their permissions. */
    public AmazonDataZoneEnvironmentRolePermissionsBoundary(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDataZoneEnvironmentRolePermissionsBoundary);
    }

    /** Provides full access to Amazon DataZone via the AWS Management Console as well as limited access to related services that are required by it. */
    public AmazonDataZoneFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDataZoneFullAccess);
    }

    /** Provides full access to Amazon DataZone, but does not allow the management of domains, users, or associated accounts. */
    public AmazonDataZoneFullUserAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDataZoneFullUserAccess);
    }

    /** The policy grants permissions to allow Amazon DataZone to enable publishing and access grants to data. */
    public AmazonDataZoneGlueManageAccessRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDataZoneGlueManageAccessRolePolicy);
    }

    /** Amazon DataZone is a data management service that enables you to catalog, discover, govern, share, and analyze your data. With Amazon DataZone, you can share and access your data across accounts and supported regions. Amazon DataZone simplifies your experience across AWS services, including, but not limited to, Amazon Redshift, Amazon Athena, AWS Glue, and AWS Lake Formation. */
    public AmazonDataZoneRedshiftGlueProvisioningPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDataZoneRedshiftGlueProvisioningPolicy);
    }

    /** This policy gives Amazon DataZone permissions to publish Amazon Redshift data to the catalog. It also gives Amazon DataZone permissions to grant access or revoke access to Amazon Redshift or Amazon Redshift Serverless published assets in the catalog. */
    public AmazonDataZoneRedshiftManageAccessRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDataZoneRedshiftManageAccessRolePolicy);
    }

    /** The AmazonDataZoneSageMakerEnvironmentRolePermissionsBoundary policy is the list of permissions that are permitted on an execution role created in a SageMaker environment provisioned by Amazon DataZone. */
    public AmazonDataZoneSageMakerEnvironmentRolePermissionsBoundary(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDataZoneSageMakerEnvironmentRolePermissionsBoundary);
    }

    /** The AmazonDataZoneSageMakerManageAccessRolePolicy policy grants Amazon DataZone the permissions required to grant user access to various resources in the SageMaker environment. */
    public AmazonDataZoneSageMakerManageAccessRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDataZoneSageMakerManageAccessRolePolicy);
    }

    /** The AmazonDataZoneSageMakerProvisioningRolePolicy policy grants Amazon DataZone the permissions required to interoperate with Amazon SageMaker. */
    public AmazonDataZoneSageMakerProvisioningRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDataZoneSageMakerProvisioningRolePolicy);
    }

    /**  Provides full access to Amazon Detective service and scoped access to the console UI dependencies */
    public AmazonDetectiveFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDetectiveFullAccess);
    }

    /** Provides investigator access to Amazon Detective service and scoped access to the console UI dependencies. This policy grants permission to dive into Detective for investigation purposes and limited write access to Guardduty. */
    public AmazonDetectiveInvestigatorAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDetectiveInvestigatorAccess);
    }

    /** Provides member access to Amazon Detective service and scoped access to the console UI dependencies. */
    public AmazonDetectiveMemberAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDetectiveMemberAccess);
    }

    /** Provides Organizations access to manage Delegated administrator for Amazon Detective and scoped access to the console UI dependencies. This also grants permission to create a service-linked role for Detective. */
    public AmazonDetectiveOrganizationsAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDetectiveOrganizationsAccess);
    }

    /** Allows Amazon Detective to make service calls on your behalf */
    public AmazonDetectiveServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDetectiveServiceLinkedRolePolicy);
    }

    /** The policy grants full-access to the DevOps Guru console. */
    public AmazonDevOpsGuruConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDevOpsGuruConsoleFullAccess);
    }

    /** Provides full access to Amazon DevOps Guru. */
    public AmazonDevOpsGuruFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDevOpsGuruFullAccess);
    }

    /** Provide access to enable and manage Amazon DevOps Guru within an organization. */
    public AmazonDevOpsGuruOrganizationsAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDevOpsGuruOrganizationsAccess);
    }

    /** Provides read only access to Amazon DevOps Guru Console. */
    public AmazonDevOpsGuruReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDevOpsGuruReadOnlyAccess);
    }

    /** A service-linked role required for Amazon DevOpsGuru to access your resources. */
    public AmazonDevOpsGuruServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDevOpsGuruServiceRolePolicy);
    }

    /** Provides access to upload DMS replication logs to cloudwatch logs in customer account. */
    public AmazonDMSCloudWatchLogsRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDMSCloudWatchLogsRole);
    }

    /** Provides access to manage S3 settings for Redshift endpoints for DMS. */
    public AmazonDMSRedshiftS3Role(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDMSRedshiftS3Role);
    }

    /** Provides access to manage VPC settings for AWS managed customer configurations */
    public AmazonDMSVPCManagementRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDMSVPCManagementRole);
    }

    /** Allows Amazon DocumentDB-Elastic to manage AWS resources on your behalf. */
    public AmazonDocDBElasticServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDocDBElasticServiceRolePolicy);
    }

    /** Provides full access to manage Amazon DocumentDB with MongoDB compatibility using the AWS Management Console. Note this policy also grants full access to publish on all SNS topics within the account, permissions to create and edit Amazon EC2 instances and VPC configurations, permissions to view and list keys on Amazon KMS, and full access to Amazon RDS and Amazon Neptune. */
    public AmazonDocDBConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDocDBConsoleFullAccess);
    }

    /** Provides full access to Amazon DocumentDB Elastic Clusters and other required permissions for its dependencies including EC2, KMS, SecretsManager, CloudWatch and IAM. */
    public AmazonDocDBElasticFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDocDBElasticFullAccess);
    }

    /** Provides read-only access to Amazon DocDB-Elastic and CloudWatch metrics. */
    public AmazonDocDBElasticReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDocDBElasticReadOnlyAccess);
    }

    /** Provides full access to Amazon DocumentDB with MongoDB compatibility. Note this policy also grants full access to publish on all SNS topics within the account and full access to Amazon RDS and Amazon Neptune. */
    public AmazonDocDBFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDocDBFullAccess);
    }

    /** Provides read-only access to Amazon DocumentDB with MongoDB compatibility. Note that this policy also grants access to Amazon RDS and Amazon Neptune resources. */
    public AmazonDocDBReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDocDBReadOnlyAccess);
    }

    /** Provides access to manage VPC settings for Amazon managed customer configurations */
    public AmazonDRSVPCManagement(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDRSVPCManagement);
    }

    /** Provides full access to Amazon DynamoDB via the AWS Management Console. */
    public AmazonDynamoDBFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDynamoDBFullAccess);
    }

    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBPipeline.html. Provides full access to Amazon DynamoDB including Export/Import using AWS Data Pipeline via the AWS Management Console. */
    public AmazonDynamoDBFullAccesswithDataPipeline(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDynamoDBFullAccesswithDataPipeline);
    }

    /** Provides read only access to Amazon DynamoDB via the AWS Management Console. */
    public AmazonDynamoDBReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonDynamoDBReadOnlyAccess);
    }

    /** IAM Policy that allows the CSI driver service account to make calls to related services such as EC2 on your behalf. */
    public AmazonEBSCSIDriverPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEBSCSIDriverPolicy);
    }

    /** Provides administrative access to Amazon ECR resources */
    public AmazonEC2ContainerRegistryFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2ContainerRegistryFullAccess);
    }

    /** Provides full access to Amazon EC2 Container Registry repositories, but does not allow repository deletion or policy changes. */
    public AmazonEC2ContainerRegistryPowerUser(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2ContainerRegistryPowerUser);
    }

    /** Provides read-only access to Amazon EC2 Container Registry repositories. */
    public AmazonEC2ContainerRegistryReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2ContainerRegistryReadOnly);
    }

    /**   Policy to enable Task Autoscaling for Amazon EC2 Container Service */
    public AmazonEC2ContainerServiceAutoscaleRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2ContainerServiceAutoscaleRole);
    }

    /** Policy to enable CloudWatch Events for EC2 Container Service */
    public AmazonEC2ContainerServiceEventsRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2ContainerServiceEventsRole);
    }

    /** Default policy for the Amazon EC2 Role for Amazon EC2 Container Service. */
    public AmazonEC2ContainerServiceforEC2Role(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2ContainerServiceforEC2Role);
    }

    /** Default policy for Amazon ECS service role. */
    public AmazonEC2ContainerServiceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2ContainerServiceRole);
    }

    /** Provides full access to Amazon EC2 via the AWS Management Console. */
    public AmazonEC2FullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2FullAccess);
    }

    /** Provides read only access to Amazon EC2 via the AWS Management Console. */
    public AmazonEC2ReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2ReadOnlyAccess);
    }

    /** Provides EC2 access to S3 bucket to download revision. This role is needed by the CodeDeploy agent on EC2 instances. */
    public AmazonEC2RoleforAWSCodeDeploy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2RoleforAWSCodeDeploy);
    }

    /** Provides EC2 limited access to S3 bucket to download revision. This role is needed by the CodeDeploy agent on EC2 instances. */
    public AmazonEC2RoleforAWSCodeDeployLimited(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2RoleforAWSCodeDeployLimited);
    }

    /** Default policy for the Amazon EC2 Role for Data Pipeline service role. */
    public AmazonEC2RoleforDataPipelineRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2RoleforDataPipelineRole);
    }

    /** This policy will soon be deprecated. Please use AmazonSSMManagedInstanceCore policy to enable AWS Systems Manager service core functionality on EC2 instances. For more information see https://docs.aws.amazon.com/systems-manager/latest/userguide/setup-instance-profile.html */
    public AmazonEC2RoleforSSM(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2RoleforSSM);
    }

    /** Managed policy for the Amazon LaunchWizard service role for EC2 */
    public AmazonEC2RolePolicyForLaunchWizard(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2RolePolicyForLaunchWizard);
    }

    /** Policy to enable Autoscaling for Amazon EC2 Spot Fleet */
    public AmazonEC2SpotFleetAutoscaleRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2SpotFleetAutoscaleRole);
    }

    /** Allows EC2 Spot Fleet to request, terminate and tag Spot Instances on your behalf. */
    public AmazonEC2SpotFleetTaggingRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEC2SpotFleetTaggingRole);
    }

    /** Provides administrative access to Amazon ECS resources and enables ECS features through access to other AWS service resources, including VPCs, Auto Scaling groups, and CloudFormation stacks. */
    public AmazonECSFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonECSFullAccess);
    }

    /** Provides administrative access to Private Certificate Authority, AWS Secrets Manager and other AWS Services required to manage ECS Service Connect TLS features on your behalf. */
    public AmazonECSInfrastructureRolePolicyForServiceConnectTransportLayerSecurity(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonECSInfrastructureRolePolicyForServiceConnectTransportLayerSecurity);
    }

    /** Provides access to other AWS service resources required to manage volumes associated with ECS workloads on your behalf. */
    public AmazonECSInfrastructureRolePolicyForVolumes(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonECSInfrastructureRolePolicyForVolumes);
    }

    /** Policy to enable Amazon ECS to manage your cluster. */
    public AmazonECSServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonECSServiceRolePolicy);
    }

    /** Provides access to other AWS service resources that are required to run Amazon ECS tasks */
    public AmazonECSTaskExecutionRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonECSTaskExecutionRolePolicy);
    }

    /** Provides management access to EFS resources and read access to EC2 */
    public AmazonEFSCSIDriverPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEFSCSIDriverPolicy);
    }

    /** This policy provides the Amazon VPC CNI Plugin (amazon-vpc-cni-k8s) the permissions it requires to modify the IP address configuration on your EKS worker nodes. This permission set allows the CNI to list, describe, and modify Elastic Network Interfaces on your behalf. More information on the AWS VPC CNI Plugin is available here: https://github.com/aws/amazon-vpc-cni-k8s */
    public AmazonEKSCNIPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEKSCNIPolicy);
    }

    /** This policy provides Kubernetes the permissions it requires to manage resources on your behalf. Kubernetes requires Ec2:CreateTags permissions to place identifying information on EC2 resources including but not limited to Instances, Security Groups, and Elastic Network Interfaces. */
    public AmazonEKSClusterPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEKSClusterPolicy);
    }

    /** This policy allows Amazon EKS to manage AWS resources for EKS connector */
    public AmazonEKSConnectorServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEKSConnectorServiceRolePolicy);
    }

    /** Provides access to other AWS service resources that are required to run Amazon EKS pods on AWS Fargate */
    public AmazonEKSFargatePodExecutionRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEKSFargatePodExecutionRolePolicy);
    }

    /** This policy grants necessary permissions to Amazon EKS to run fargate tasks */
    public AmazonEKSForFargateServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEKSForFargateServiceRolePolicy);
    }

    /** This policy provides permissions to EKS local cluster's control-plane instances running in your account to manage resources on your behalf. */
    public AmazonEKSLocalOutpostClusterPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEKSLocalOutpostClusterPolicy);
    }

    /** Allows Amazon EKS Local to call AWS services on your behalf. */
    public AmazonEKSLocalOutpostServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEKSLocalOutpostServiceRolePolicy);
    }

    /** This policy allows Amazon Elastic Container Service for Kubernetes to create and manage the necessary resources to operate EKS Clusters. */
    public AmazonEKSServicePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEKSServicePolicy);
    }

    /** A Service-Linked Role required for Amazon EKS to call AWS services on your behalf. */
    public AmazonEKSServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEKSServiceRolePolicy);
    }

    /** Policy used by VPC Resource Controller to manage ENI and IPs for worker nodes. */
    public AmazonEKSVPCResourceController(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEKSVPCResourceController);
    }

    /** This policy allows Amazon EKS worker nodes to connect to Amazon EKS Clusters. */
    public AmazonEKSWorkerNodePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEKSWorkerNodePolicy);
    }

    /** Provides full access to Amazon ElastiCache via the AWS Management Console. */
    public AmazonElastiCacheFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElastiCacheFullAccess);
    }

    /** Provides read only access to Amazon ElastiCache via the AWS Management Console. */
    public AmazonElastiCacheReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElastiCacheReadOnlyAccess);
    }

    /** Provides administrative access to Amazon ECR Public resources */
    public AmazonElasticContainerRegistryPublicFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticContainerRegistryPublicFullAccess);
    }

    /** Provides full access to Amazon ECR Public repositories, but does not allow repository deletion or policy changes. */
    public AmazonElasticContainerRegistryPublicPowerUser(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticContainerRegistryPublicPowerUser);
    }

    /** Provides read-only access to Amazon ECR Public repositories. */
    public AmazonElasticContainerRegistryPublicReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticContainerRegistryPublicReadOnly);
    }

    /** Provides root client access to an Amazon EFS file system */
    public AmazonElasticFileSystemClientFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticFileSystemClientFullAccess);
    }

    /** Provides read only client access to an Amazon EFS file system */
    public AmazonElasticFileSystemClientReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticFileSystemClientReadOnlyAccess);
    }

    /** Provides read and write client access to an Amazon EFS file system */
    public AmazonElasticFileSystemClientReadWriteAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticFileSystemClientReadWriteAccess);
    }

    /** Provides full access to Amazon EFS via the AWS Management Console. */
    public AmazonElasticFileSystemFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticFileSystemFullAccess);
    }

    /** Provides read only access to Amazon EFS via the AWS Management Console. */
    public AmazonElasticFileSystemReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticFileSystemReadOnlyAccess);
    }

    /** Allows Amazon Elastic File System to manage AWS resources on your behalf */
    public AmazonElasticFileSystemServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticFileSystemServiceRolePolicy);
    }

    /** Allows customers to use AWS Systems Manager to automatically manage Amazon EFS utilities (amazon-efs-utils) package on their EC2 instances, and use CloudWatchLog to get EFS file system mount success/failure notifications. */
    public AmazonElasticFileSystemsUtils(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticFileSystemsUtils);
    }

    /** Default policy for the Amazon Elastic MapReduce Editors service role. */
    public AmazonElasticMapReduceEditorsRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticMapReduceEditorsRole);
    }

    /** Amazon Elastic MapReduce for Auto Scaling. Role to allow Auto Scaling to add and remove instances from your EMR cluster. */
    public AmazonElasticMapReduceforAutoScalingRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticMapReduceforAutoScalingRole);
    }

    /** Default policy for the Amazon Elastic MapReduce for EC2 service role. */
    public AmazonElasticMapReduceforEC2Role(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticMapReduceforEC2Role);
    }

    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-iam-policies.html. Provides full access to Amazon Elastic MapReduce and underlying services that it requires such as EC2 and S3 */
    public AmazonElasticMapReduceFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticMapReduceFullAccess);
    }

    /** Policy to allow EMR to create, describe and delete EC2 placement groups. */
    public AmazonElasticMapReducePlacementGroupPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticMapReducePlacementGroupPolicy);
    }

    /** Provides read only access to Amazon Elastic MapReduce via the AWS Management Console. */
    public AmazonElasticMapReduceReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticMapReduceReadOnlyAccess);
    }

    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-iam-policies.html.  Default policy for the Amazon Elastic MapReduce service role. */
    public AmazonElasticMapReduceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticMapReduceRole);
    }

    /** Allow Amazon Elasticsearch Service to access other AWS services such as EC2 Networking APIs on your behalf. */
    public AmazonElasticsearchServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticsearchServiceRolePolicy);
    }

    /** Grants users full access to Elastic Transcoder and the access to associated services that is required for full Elastic Transcoder functionality. */
    public AmazonElasticTranscoderFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticTranscoderFullAccess);
    }

    /** Grants users permission to change presets, submit jobs, and view Elastic Transcoder settings. This policy also grants some read-only access to some other services required to use the Elastic Transcode console, including S3, IAM, and SNS. */
    public AmazonElasticTranscoderJobsSubmitter(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticTranscoderJobsSubmitter);
    }

    /** Grants users read-only access to Elastic Transcoder and list access to related services. */
    public AmazonElasticTranscoderReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticTranscoderReadOnlyAccess);
    }

    /** Default policy for the Amazon Elastic Transcoder service role. */
    public AmazonElasticTranscoderRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonElasticTranscoderRole);
    }

    /** Allows the actions that EMR requires to terminate and delete AWS EC2 resources if the EMR Service role has lost that ability. */
    public AmazonEMRCleanupPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEMRCleanupPolicy);
    }

    /** Allows access to other AWS service resources that are required to run Amazon EMR */
    public AmazonEMRContainersServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEMRContainersServiceRolePolicy);
    }

    /** Provides full access to Amazon EMR */
    public AmazonEMRFullAccessPolicyV2(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEMRFullAccessPolicyV2);
    }

    /** Provides read only access to Amazon EMR and the associated CloudWatch Metrics. */
    public AmazonEMRReadOnlyAccessPolicyV2(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEMRReadOnlyAccessPolicyV2);
    }

    /** Allows access to other AWS service resources that are required to run Amazon EMRServerless */
    public AmazonEMRServerlessServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEMRServerlessServiceRolePolicy);
    }

    /** This policy is used for the Amazon EMR Service Role and should NOT be used for any other IAM users or roles in your account. The policy grants permissions to create and manage resources associated with EMR and related services necessary for the operation of your EMR cluster. */
    public AmazonEMRServicePolicyV2(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEMRServicePolicyV2);
    }

    /** Provides limited access to the Amazon Cognito configuration service. */
    public AmazonESCognitoAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonESCognitoAccess);
    }

    /** Provides full access to the Amazon ES configuration service. */
    public AmazonESFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonESFullAccess);
    }

    /** Provides read-only access to the Amazon ES configuration service. */
    public AmazonESReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonESReadOnlyAccess);
    }

    /** Allows EventBridge to access Secret Manager resources on your behalf. */
    public AmazonEventBridgeApiDestinationsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEventBridgeApiDestinationsServiceRolePolicy);
    }

    /** Provides full access to Amazon EventBridge. */
    public AmazonEventBridgeFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEventBridgeFullAccess);
    }

    /** Provides full access to Amazon EventBridge Pipes. */
    public AmazonEventBridgePipesFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEventBridgePipesFullAccess);
    }

    /** Provides read-only and operator (ability to Stop and Start running Pipes) access to Amazon EventBridge Pipes. */
    public AmazonEventBridgePipesOperatorAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEventBridgePipesOperatorAccess);
    }

    /** Provides read-only access to Amazon EventBridge Pipes. */
    public AmazonEventBridgePipesReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEventBridgePipesReadOnlyAccess);
    }

    /** Provides read only access to Amazon EventBridge. */
    public AmazonEventBridgeReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEventBridgeReadOnlyAccess);
    }

    /** The AmazonEventBridgeSchedulerFullAccess managed policy grants permissions to use all EventBridge Scheduler actions for schedules, and schedule groups. */
    public AmazonEventBridgeSchedulerFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEventBridgeSchedulerFullAccess);
    }

    /** The AmazonEventBridgeSchedulerReadOnlyAccess managed policy grants read-only permissions to view details about your schedules and schedule groups */
    public AmazonEventBridgeSchedulerReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEventBridgeSchedulerReadOnlyAccess);
    }

    /** Provides full access to Amazon EventBridge Schemas. */
    public AmazonEventBridgeSchemasFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEventBridgeSchemasFullAccess);
    }

    /** Provides read only access to Amazon EventBridge Schemas. */
    public AmazonEventBridgeSchemasReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEventBridgeSchemasReadOnlyAccess);
    }

    /** Grants permissions to Managed Rules created by Amazon EventBridge schemas. */
    public AmazonEventBridgeSchemasServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonEventBridgeSchemasServiceRolePolicy);
    }

    /** Policy to enable AWS FIS to manage monitoring and resource selection for experiments. */
    public AmazonFISServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonFISServiceRolePolicy);
    }

    /** Gives access to all actions for Amazon Forecast */
    public AmazonForecastFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonForecastFullAccess);
    }

    /** Gives access to all actions for Amazon Fraud Detector */
    public AmazonFraudDetectorFullAccessPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonFraudDetectorFullAccessPolicy);
    }

    /** Full Access Policy for Amazon FreeRTOS */
    public AmazonFreeRTOSFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonFreeRTOSFullAccess);
    }

    /** Allows user to access Amazon FreeRTOS OTA Update */
    public AmazonFreeRTOSOTAUpdate(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonFreeRTOSOTAUpdate);
    }

    /** Provides full access to Amazon FSx and access to related AWS services via the AWS Management Console. */
    public AmazonFSxConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonFSxConsoleFullAccess);
    }

    /** Provides read only access to Amazon FSx and access to related AWS services via the AWS Management Console. */
    public AmazonFSxConsoleReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonFSxConsoleReadOnlyAccess);
    }

    /** Provides full access to Amazon FSx and access to related AWS services. */
    public AmazonFSxFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonFSxFullAccess);
    }

    /** Provides read only access to Amazon FSx. */
    public AmazonFSxReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonFSxReadOnlyAccess);
    }

    /** Allows Amazon FSx to manage AWS resources on your behalf */
    public AmazonFSxServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonFSxServiceRolePolicy);
    }

    /** Provides full access to Amazon Glacier via the AWS Management Console. */
    public AmazonGlacierFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonGlacierFullAccess);
    }

    /** Provides read only access to Amazon Glacier via the AWS Management Console. */
    public AmazonGlacierReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonGlacierReadOnlyAccess);
    }

    /** This policy grants access to Amazon Athena and the dependencies needed to enable querying and writing results to s3 from the Amazon Athena plugin in Amazon Grafana. */
    public AmazonGrafanaAthenaAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonGrafanaAthenaAccess);
    }

    /** This policy grants access to Amazon CloudWatch and the dependencies needed to use CloudWatch as a datasource within Amazon Managed Grafana. */
    public AmazonGrafanaCloudWatchAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonGrafanaCloudWatchAccess);
    }

    /** This policy grants scoped access to Amazon Redshift and the dependencies needed to use the Amazon Redshift plugin in Amazon Grafana. */
    public AmazonGrafanaRedshiftAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonGrafanaRedshiftAccess);
    }

    /** Provides access to AWS Resources managed or used by Amazon Grafana. */
    public AmazonGrafanaServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonGrafanaServiceLinkedRolePolicy);
    }

    /** Provides full access to use Amazon GuardDuty. */
    public AmazonGuardDutyFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonGuardDutyFullAccess);
    }

    /** GuardDuty malware protection uses the service-linked role (SLR) named AWSServiceRoleForAmazonGuardDutyMalwareProtection. This service-linked role allows GuardDuty malware protection to perform agent-less scans to detect malware. It allows GuardDuty to create snapshots in your account, and share the snapshots with the GuardDuty service account to scan for malware. It evaluates these shared snapshots and includes the retrieved EC2 instance metadata in the GuardDuty Malware Protection findings. The AWSServiceRoleForAmazonGuardDutyMalwareProtection service-linked role trusts the malware-protection.guardduty.amazonaws.com service to assume the role. */
    public AmazonGuardDutyMalwareProtectionServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonGuardDutyMalwareProtectionServiceRolePolicy);
    }

    /** Provides read only access to Amazon GuardDuty resources */
    public AmazonGuardDutyReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonGuardDutyReadOnlyAccess);
    }

    /** Enable access to AWS Resources used or managed by Amazon Guard Duty */
    public AmazonGuardDutyServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonGuardDutyServiceRolePolicy);
    }

    /** Provides full access to Amazon HealthLake service. */
    public AmazonHealthLakeFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonHealthLakeFullAccess);
    }

    /** Provides read only access to Amazon HealthLake service. */
    public AmazonHealthLakeReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonHealthLakeReadOnlyAccess);
    }

    /** Provides full access to Honeycode via the AWS Management Console and the SDK. */
    public AmazonHoneycodeFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonHoneycodeFullAccess);
    }

    /** Provides read only access to Honeycode via the AWS Management Console and the SDK. */
    public AmazonHoneycodeReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonHoneycodeReadOnlyAccess);
    }

    /** A service-linked role required for Amazon Honeycode to access your resources. */
    public AmazonHoneycodeServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonHoneycodeServiceRolePolicy);
    }

    /** Provides full access to Honeycode Team Association via the AWS Management Console and the SDK. */
    public AmazonHoneycodeTeamAssociationFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonHoneycodeTeamAssociationFullAccess);
    }

    /** Provides read only access to Honeycode Team Association via the AWS Management Console and the SDK. */
    public AmazonHoneycodeTeamAssociationReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonHoneycodeTeamAssociationReadOnlyAccess);
    }

    /** Provides full access to Honeycode Workbook via the AWS Management Console and the SDK. */
    public AmazonHoneycodeWorkbookFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonHoneycodeWorkbookFullAccess);
    }

    /** Provides read only access to Honeycode Workbook via the AWS Management Console and the SDK. */
    public AmazonHoneycodeWorkbookReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonHoneycodeWorkbookReadOnlyAccess);
    }

    /** Grants Amazon Inspector access to AWS Services needed to perform agent-less security assessments */
    public AmazonInspector2AgentlessServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonInspector2AgentlessServiceRolePolicy);
    }

    /** Provides full access to Amazon Inspector and access to other related services such as organizations. */
    public AmazonInspector2FullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonInspector2FullAccess);
    }

    /** This is a managed policy that customer should attach to their roles to communicate with inspector service for CIS scans */
    public AmazonInspector2ManagedCisPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonInspector2ManagedCisPolicy);
    }

    /** Provides read only access to the Amazon inspector2 service and relevant support services */
    public AmazonInspector2ReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonInspector2ReadOnlyAccess);
    }

    /** Grants Amazon Inspector access to AWS Services needed to perform security assessments */
    public AmazonInspector2ServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonInspector2ServiceRolePolicy);
    }

    /** Provides full access to Amazon Inspector. */
    public AmazonInspectorFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonInspectorFullAccess);
    }

    /** Provides read only access to Amazon Inspector. */
    public AmazonInspectorReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonInspectorReadOnlyAccess);
    }

    /** Grants Amazon Inspector access to AWS Services needed to perform security assessments */
    public AmazonInspectorServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonInspectorServiceRolePolicy);
    }

    /** Provides full access to Amazon Kendra via the AWS Management Console. */
    public AmazonKendraFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonKendraFullAccess);
    }

    /** Provides read only access to Amazon Kendra via the AWS Management Console. */
    public AmazonKendraReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonKendraReadOnlyAccess);
    }

    /** Provide full access to Amazon Keyspaces */
    public AmazonKeyspacesFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonKeyspacesFullAccess);
    }

    /** Provide read only access to Amazon Keyspaces */
    public AmazonKeyspacesReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonKeyspacesReadOnlyAccess);
    }

    /** Provide read only access to Amazon Keyspaces and related AWS services. */
    public AmazonKeyspacesReadOnlyAccessV2(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonKeyspacesReadOnlyAccessV2);
    }

    /** Provides full access to Amazon Kinesis Analytics via the AWS Management Console. */
    public AmazonKinesisAnalyticsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonKinesisAnalyticsFullAccess);
    }

    /** Provides read-only access to Amazon Kinesis Analytics via the AWS Management Console. */
    public AmazonKinesisAnalyticsReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonKinesisAnalyticsReadOnly);
    }

    /** Provides full access to all Amazon Kinesis Firehose Delivery Streams. */
    public AmazonKinesisFirehoseFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonKinesisFirehoseFullAccess);
    }

    /** Provides read only access to all Amazon Kinesis Firehose Delivery Streams. */
    public AmazonKinesisFirehoseReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonKinesisFirehoseReadOnlyAccess);
    }

    /** Provides full access to all streams via the AWS Management Console. */
    public AmazonKinesisFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonKinesisFullAccess);
    }

    /** Provides read only access to all streams via the AWS Management Console. */
    public AmazonKinesisReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonKinesisReadOnlyAccess);
    }

    /** Provides full access to Amazon Kinesis Video Streams via the AWS Management Console. */
    public AmazonKinesisVideoStreamsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonKinesisVideoStreamsFullAccess);
    }

    /** Provides read only access to AWS Kinesis Video Streams via the AWS Management Console. */
    public AmazonKinesisVideoStreamsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonKinesisVideoStreamsReadOnlyAccess);
    }

    /** Full access to AWS Launch wizard and other required services. */
    public AmazonLaunchWizardFullAccessV2(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLaunchWizardFullAccessV2);
    }

    /** This policy allows customers to call Lex runtime from channels */
    public AmazonLexChannelsAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLexChannelsAccess);
    }

    /** Provides full access to Amazon Lex via the AWS Management Console.  Also provides access to create Lex Service Linked Roles and grant Lex permissions to invoke a limited set of Lambda functions. */
    public AmazonLexFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLexFullAccess);
    }

    /** Provides read-only access to Amazon Lex. */
    public AmazonLexReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLexReadOnly);
    }

    /** Allows Amazon Lex to replicate Lex resources across regions on your behalf. */
    public AmazonLexReplicationPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLexReplicationPolicy);
    }

    /** Provides access to Amazon Lex conversational APIs. */
    public AmazonLexRunBotsOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLexRunBotsOnly);
    }

    /** Provides Lex V2 bots access to call other AWS services on your behalf. */
    public AmazonLexV2BotPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLexV2BotPolicy);
    }

    /** Provides full access to Amazon Lookout for Equipment operations */
    public AmazonLookoutEquipmentFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLookoutEquipmentFullAccess);
    }

    /** Provides read only access to Amazon Lookout for Equipments */
    public AmazonLookoutEquipmentReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLookoutEquipmentReadOnlyAccess);
    }

    /** Gives access to all actions for Amazon Lookout for Metrics */
    public AmazonLookoutMetricsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLookoutMetricsFullAccess);
    }

    /** Gives access to all read-only actions for Amazon Lookout for Metrics */
    public AmazonLookoutMetricsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLookoutMetricsReadOnlyAccess);
    }

    /** Provides full access to Amazon Lookout for Vision and scoped access to required service and console dependencies. */
    public AmazonLookoutVisionConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLookoutVisionConsoleFullAccess);
    }

    /** Provides read only access to Amazon Lookout for Vision and scoped access to required service and console dependencies. */
    public AmazonLookoutVisionConsoleReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLookoutVisionConsoleReadOnlyAccess);
    }

    /** Provides full access to Amazon Lookout for Vision and scoped access to required dependencies. */
    public AmazonLookoutVisionFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLookoutVisionFullAccess);
    }

    /** Provides read only access to Amazon Lookout for Vision and scoped access to required dependencies. */
    public AmazonLookoutVisionReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonLookoutVisionReadOnlyAccess);
    }

    /** Grants users permission to request Amazon Machine Learning batch predictions. */
    public AmazonMachineLearningBatchPredictionsAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMachineLearningBatchPredictionsAccess);
    }

    /** Provides create access for non-prediction Amazon Machine Learning resources. */
    public AmazonMachineLearningCreateOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMachineLearningCreateOnlyAccess);
    }

    /** Provides full access to Amazon Machine Learning resources. */
    public AmazonMachineLearningFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMachineLearningFullAccess);
    }

    /** Grants users permission to create and delete the real-time endpoint for Amazon Machine Learning models. */
    public AmazonMachineLearningManageRealTimeEndpointOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMachineLearningManageRealTimeEndpointOnlyAccess);
    }

    /** Provides read only access to Amazon Machine Learning resources. */
    public AmazonMachineLearningReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMachineLearningReadOnlyAccess);
    }

    /** Grants users permission to request Amazon Machine Learning real-time predictions. */
    public AmazonMachineLearningRealTimePredictionOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMachineLearningRealTimePredictionOnlyAccess);
    }

    /** Allows Machine Learning to configure and use your Redshift Clusters and S3 Staging Locations for Redshift Data Source. */
    public AmazonMachineLearningRoleforRedshiftDataSourceV3(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMachineLearningRoleforRedshiftDataSourceV3);
    }

    /** Provides full access to Amazon Macie. */
    public AmazonMacieFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMacieFullAccess);
    }

    /** Grants permission to create the service-linked role of Amazon Macie. */
    public AmazonMacieHandshakeRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMacieHandshakeRole);
    }

    /** Provides readonly access to Amazon Macie. */
    public AmazonMacieReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMacieReadOnlyAccess);
    }

    /** Grants Macie read-only access to resource dependencies in your account in order to enable data analysis. */
    public AmazonMacieServiceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMacieServiceRole);
    }

    /** Service linked role for Amazon Macie */
    public AmazonMacieServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMacieServiceRolePolicy);
    }

    /** Provides full access to Amazon Managed Blockchain via the AWS Management Console */
    public AmazonManagedBlockchainConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonManagedBlockchainConsoleFullAccess);
    }

    /** Provides full access to Amazon Managed Blockchain. */
    public AmazonManagedBlockchainFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonManagedBlockchainFullAccess);
    }

    /** Provides read-only access to Amazon Managed Blockchain. */
    public AmazonManagedBlockchainReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonManagedBlockchainReadOnlyAccess);
    }

    /** Enables access to AWS Services and Resources used or managed by Amazon Managed Blockchain */
    public AmazonManagedBlockchainServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonManagedBlockchainServiceRolePolicy);
    }

    /** Provide full access to Amazon Managed Apache Cassandra Service */
    public AmazonMCSFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMCSFullAccess);
    }

    /** Provide read only access to Amazon Managed Apache Cassandra Service */
    public AmazonMCSReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMCSReadOnlyAccess);
    }

    /** Provides full access to all APIs in Amazon Mechanical Turk. */
    public AmazonMechanicalTurkFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMechanicalTurkFullAccess);
    }

    /** Provides access to read only APIs in Amazon Mechanical Turk. */
    public AmazonMechanicalTurkReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMechanicalTurkReadOnly);
    }

    /** Provides full access to Amazon MemoryDB via the AWS Management Console. */
    public AmazonMemoryDBFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMemoryDBFullAccess);
    }

    /** Provides read only access to Amazon MemoryDB via the AWS Management Console. */
    public AmazonMemoryDBReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMemoryDBReadOnlyAccess);
    }

    /** Provides read only access to all reports including financial data for all application resources. */
    public AmazonMobileAnalyticsFinancialReportAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMobileAnalyticsFinancialReportAccess);
    }

    /** Provides full access to all application resources. */
    public AmazonMobileAnalyticsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMobileAnalyticsFullAccess);
    }

    /** Provides read only access to non financial reports for all application resources. */
    public AmazonMobileAnalyticsNonFinancialReportAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMobileAnalyticsNonFinancialReportAccess);
    }

    /** Provides write only access to put event data for all application resources. (Recommended for SDK integration) */
    public AmazonMobileAnalyticsWriteOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMobileAnalyticsWriteOnlyAccess);
    }

    /** Provides full access to manage Amazon Monitron */
    public AmazonMonitronFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMonitronFullAccess);
    }

    /** Provides full access to AmazonMQ via our API/SDK. */
    public AmazonMQApiFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMQApiFullAccess);
    }

    /** Provides read only access to AmazonMQ via our API/SDK. */
    public AmazonMQApiReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMQApiReadOnlyAccess);
    }

    /** Provides full access to AmazonMQ via the AWS Management Console. */
    public AmazonMQFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMQFullAccess);
    }

    /** Provides read only access to AmazonMQ via the AWS Management Console. */
    public AmazonMQReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMQReadOnlyAccess);
    }

    /** Service Linked Role Policy for AWS Amazon MQ */
    public AmazonMQServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMQServiceRolePolicy);
    }

    /** Provide readonly access to Amazon MSK Connect */
    public AmazonMSKConnectReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMSKConnectReadOnlyAccess);
    }

    /** Provide full access to Amazon MSK and other required permissions for its dependencies. */
    public AmazonMSKFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMSKFullAccess);
    }

    /** Provide readonly access to Amazon MSK */
    public AmazonMSKReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMSKReadOnlyAccess);
    }

    /** The Service Linked Role used by Amazon Managed Workflows for Apache Airflow. */
    public AmazonMWAAServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonMWAAServiceRolePolicy);
    }

    /** This policy grants access to resources needed by Nimble Studio Launch Profile workers. Attach this policy to EC2 instances created by Nimble Studio Builder. */
    public AmazonNimbleStudioLaunchProfileWorker(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonNimbleStudioLaunchProfileWorker);
    }

    /** This policy grants access to Amazon Nimble Studio resources associated with the studio admin and related studio resources in other services. Attach this policy to the Admin role associated with your studio. */
    public AmazonNimbleStudioStudioAdmin(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonNimbleStudioStudioAdmin);
    }

    /** This policy grants access to Amazon Nimble Studio resources associated with the studio user and related studio resources in other services. Attach this policy to the User role associated with your studio. */
    public AmazonNimbleStudioStudioUser(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonNimbleStudioStudioUser);
    }

    /** Provides full access to Amazon Omics and other required AWS Services. This policy allows the user to view and accept RAM share invitations to access resources outside of the user's AWS account. */
    public AmazonOmicsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOmicsFullAccess);
    }

    /** Provide read only access to Amazon Omics */
    public AmazonOmicsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOmicsReadOnlyAccess);
    }

    /** This policy grants administrative permissions that allow access to all Amazon One Enterprise resources and operations. */
    public AmazonOneEnterpriseFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOneEnterpriseFullAccess);
    }

    /** This policy grants limited read and write permissions that allow device installation and activation. */
    public AmazonOneEnterpriseInstallerAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOneEnterpriseInstallerAccess);
    }

    /** This policy grants read only permissions to all Amazon One Enterprise resources and operations. */
    public AmazonOneEnterpriseReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOneEnterpriseReadOnlyAccess);
    }

    /** Provides access to Amazon OpenSearch Dashboards Service to access other AWS services such as CloudWatch on your behalf */
    public AmazonOpenSearchDashboardsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOpenSearchDashboardsServiceRolePolicy);
    }

    /** Allows OpenSearch DirectQuery Service to access AWS Glue APIs for creating resources on your behalf. */
    public AmazonOpenSearchDirectQueryGlueCreateAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOpenSearchDirectQueryGlueCreateAccess);
    }

    /** Allows Amazon OpenSearch Ingestion to access other AWS services on your behalf. */
    public AmazonOpenSearchIngestionFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOpenSearchIngestionFullAccess);
    }

    /** Provides read only access to the Amazon OpenSearch Ingestion Service */
    public AmazonOpenSearchIngestionReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOpenSearchIngestionReadOnlyAccess);
    }

    /** Allows Amazon OpenSearch Ingestion Service to access other AWS services on your behalf. */
    public AmazonOpenSearchIngestionServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOpenSearchIngestionServiceRolePolicy);
    }

    /** Allow Amazon OpenSearch Serverless to access other AWS services such as CloudWatch APIs on your behalf. */
    public AmazonOpenSearchServerlessServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOpenSearchServerlessServiceRolePolicy);
    }

    /** Provides access to the Amazon Cognito configuration service. */
    public AmazonOpenSearchServiceCognitoAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOpenSearchServiceCognitoAccess);
    }

    /** Provides full access to the Amazon OpenSearch Service configuration service. */
    public AmazonOpenSearchServiceFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOpenSearchServiceFullAccess);
    }

    /** Provides read-only access to the Amazon OpenSearch Service configuration service. */
    public AmazonOpenSearchServiceReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOpenSearchServiceReadOnlyAccess);
    }

    /** Allow Amazon OpenSearch Service to access other AWS services such as EC2 Networking APIs on your behalf. */
    public AmazonOpenSearchServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonOpenSearchServiceRolePolicy);
    }

    /** Provides full access to Amazon Personalize via the AWS Management Console and SDK. Also provides select access to related services (e.g., S3, CloudWatch). */
    public AmazonPersonalizeFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonPersonalizeFullAccess);
    }

    /** Grants full access to Amazon Polly service and resources. */
    public AmazonPollyFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonPollyFullAccess);
    }

    /** Grants read-only access to Amazon Polly resources. */
    public AmazonPollyReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonPollyReadOnlyAccess);
    }

    /** Grants full access to AWS Managed Prometheus resources in the AWS console */
    public AmazonPrometheusConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonPrometheusConsoleFullAccess);
    }

    /** Grants full access to AWS Managed Prometheus resources */
    public AmazonPrometheusFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonPrometheusFullAccess);
    }

    /** Grants access to run queries against AWS Managed Prometheus resources */
    public AmazonPrometheusQueryAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonPrometheusQueryAccess);
    }

    /** Grants write only access to AWS Managed Prometheus workspaces */
    public AmazonPrometheusRemoteWriteAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonPrometheusRemoteWriteAccess);
    }

    /** Provides access to AWS Resources managed or used by Amazon Managed Service for Prometheus Collector */
    public AmazonPrometheusScraperServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonPrometheusScraperServiceRolePolicy);
    }

    /** Provides developer access to enable interactions with Amazon Q */
    public AmazonQDeveloperAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonQDeveloperAccess);
    }

    /** Provides full access to enable interactions with Amazon Q */
    public AmazonQFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonQFullAccess);
    }

    /** Provides full access to Amazon QLDB via the AWS Management Console. */
    public AmazonQLDBConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonQLDBConsoleFullAccess);
    }

    /** Provides full access to Amazon QLDB via the service API. */
    public AmazonQLDBFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonQLDBFullAccess);
    }

    /** Provides read only access to Amazon QLDB. */
    public AmazonQLDBReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonQLDBReadOnly);
    }

    /** Allows Amazon RDS to manage AWS resources on your behalf. */
    public AmazonRDSBetaServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRDSBetaServiceRolePolicy);
    }

    /** Allows Amazon RDS Custom to perform various automation actions and database management tasks through an EC2 instance profile. */
    public AmazonRDSCustomInstanceProfileRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRDSCustomInstanceProfileRolePolicy);
    }

    /** Amazon RDS Custom Preview Service Role Policy */
    public AmazonRDSCustomPreviewServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRDSCustomPreviewServiceRolePolicy);
    }

    /** Allows Amazon RDS Custom to manage AWS resources on your behalf. */
    public AmazonRDSCustomServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRDSCustomServiceRolePolicy);
    }

    /** Allows full access to use the RDS data APIs, secret store APIs for RDS database credentials, and DB console query management APIs to execute SQL statements on Aurora Serverless clusters in the AWS account. */
    public AmazonRDSDataFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRDSDataFullAccess);
    }

    /** Allow RDS to access Directory Service Managed AD on behalf of the customer for domain-joined SQL Server DB instances. */
    public AmazonRDSDirectoryServiceAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRDSDirectoryServiceAccess);
    }

    /** Provides access to Cloudwatch for RDS Enhanced Monitoring */
    public AmazonRDSEnhancedMonitoringRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRDSEnhancedMonitoringRole);
    }

    /** Provides full access to Amazon RDS via the AWS Management Console. */
    public AmazonRDSFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRDSFullAccess);
    }

    /** Provides full access to RDS Performance Insights via the AWS Management Console */
    public AmazonRDSPerformanceInsightsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRDSPerformanceInsightsFullAccess);
    }

    /** Read-Only policy for RDS Performance Insights */
    public AmazonRDSPerformanceInsightsReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRDSPerformanceInsightsReadOnly);
    }

    /** Amazon RDS Preview Service Role Policy */
    public AmazonRDSPreviewServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRDSPreviewServiceRolePolicy);
    }

    /** Provides read only access to Amazon RDS via the AWS Management Console. */
    public AmazonRDSReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRDSReadOnlyAccess);
    }

    /** Allows Amazon RDS to manage AWS resources on your behalf. */
    public AmazonRDSServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRDSServiceRolePolicy);
    }

    /** This policy includes permissions to run SQL commands to copy, load, unload, query, and analyze data on Amazon Redshift. The policy also grants permissions to run select statements for related services, such as Amazon S3, Amazon CloudWatch logs, Amazon SageMaker, or AWS Glue. */
    public AmazonRedshiftAllCommandsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRedshiftAllCommandsFullAccess);
    }

    /** This policy provides full access to Amazon Redshift Data APIs. This policy also grants scoped access to other required services. */
    public AmazonRedshiftDataFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRedshiftDataFullAccess);
    }

    /** Provides full access to Amazon Redshift via the AWS Management Console. */
    public AmazonRedshiftFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRedshiftFullAccess);
    }

    /** Provides full access to the Amazon Redshift Query Editor and to saved queries via the AWS Management Console. */
    public AmazonRedshiftQueryEditor(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRedshiftQueryEditor);
    }

    /** Grants full access to the Amazon Redshift Query Editor V2 operations and resources. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters, read keys and aliases in AWS KMS and manage the Query Editor V2 secrets in AWS Secrets Manager. */
    public AmazonRedshiftQueryEditorV2FullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRedshiftQueryEditorV2FullAccess);
    }

    /** Grants the ability to work with Amazon Redshift Query Editor V2 without sharing resources. The granted principal can only read, update and delete its own resources but cannot share them. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters and manage the Query Editor V2 secrets of the principal in AWS Secrets Manager. */
    public AmazonRedshiftQueryEditorV2NoSharing(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRedshiftQueryEditorV2NoSharing);
    }

    /** Grants the ability to work with Amazon Redshift Query Editor V2 with limited sharing of resources. The granted principal can read, write and share its own resources. The granted principal can read the resources shared with its team but cannot update them. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters and manage the Query Editor V2 secrets of the principal in AWS Secrets Manager. */
    public AmazonRedshiftQueryEditorV2ReadSharing(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRedshiftQueryEditorV2ReadSharing);
    }

    /** Grants the ability to work with Amazon Redshift Query Editor V2 with sharing of resources. The granted principal can read, write and share its own resources. The granted principal can read and update the resources shared with its team. This policy also grants access to other required services. This includes permissions to list the Amazon Redshift clusters and manage the Query Editor V2 secrets of the principal in AWS Secrets Manager. */
    public AmazonRedshiftQueryEditorV2ReadWriteSharing(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRedshiftQueryEditorV2ReadWriteSharing);
    }

    /** Provides read only access to Amazon Redshift via the AWS Management Console. */
    public AmazonRedshiftReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRedshiftReadOnlyAccess);
    }

    /** Allows Amazon Redshift to call AWS services on your behalf */
    public AmazonRedshiftServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRedshiftServiceLinkedRolePolicy);
    }

    /** This policy specifies rekognition and s3 permissions required by Amazon Rekognition Custom Labels feature. */
    public AmazonRekognitionCustomLabelsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRekognitionCustomLabelsFullAccess);
    }

    /** Access to all Amazon Rekognition APIs */
    public AmazonRekognitionFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRekognitionFullAccess);
    }

    /** Access to all Read rekognition APIs */
    public AmazonRekognitionReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRekognitionReadOnlyAccess);
    }

    /** Allows Rekognition to call AWS services on your behalf. */
    public AmazonRekognitionServiceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRekognitionServiceRole);
    }

    /** Provides full access to all Route 53 Auto Naming actions. */
    public AmazonRoute53AutoNamingFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53AutoNamingFullAccess);
    }

    /** Provides read-only access to all Route 53 Auto Naming actions. */
    public AmazonRoute53AutoNamingReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53AutoNamingReadOnlyAccess);
    }

    /** Provides registrant level access to Route 53 Auto Naming actions. */
    public AmazonRoute53AutoNamingRegistrantAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53AutoNamingRegistrantAccess);
    }

    /** Provides full access to all Route53 Domains actions and Create Hosted Zone to allow Hosted Zone creation as part of domain registrations. */
    public AmazonRoute53DomainsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53DomainsFullAccess);
    }

    /** Provides access to Route53 Domains list and actions. */
    public AmazonRoute53DomainsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53DomainsReadOnlyAccess);
    }

    /** Provides full access to all Amazon Route 53 via the AWS Management Console. */
    public AmazonRoute53FullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53FullAccess);
    }

    /** This policy grants full access to Amazon Route 53 Profile resources. */
    public AmazonRoute53ProfilesFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53ProfilesFullAccess);
    }

    /** This policy grants read-only access to Amazon Route 53 Profile resources. */
    public AmazonRoute53ProfilesReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53ProfilesReadOnlyAccess);
    }

    /** Provides read only access to all Amazon Route 53 via the AWS Management Console. */
    public AmazonRoute53ReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53ReadOnlyAccess);
    }

    /** Provides full access to Amazon Route 53 Recovery Cluster */
    public AmazonRoute53RecoveryClusterFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53RecoveryClusterFullAccess);
    }

    /** Provides read only access to Amazon Route 53 Recovery Cluster */
    public AmazonRoute53RecoveryClusterReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53RecoveryClusterReadOnlyAccess);
    }

    /** Provides full access to Amazon Route 53 Recovery Control Config */
    public AmazonRoute53RecoveryControlConfigFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53RecoveryControlConfigFullAccess);
    }

    /** Provides read only access to Amazon Route 53 Recovery Control Config */
    public AmazonRoute53RecoveryControlConfigReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53RecoveryControlConfigReadOnlyAccess);
    }

    /** Provides full access to Amazon Route 53 Recovery Readiness */
    public AmazonRoute53RecoveryReadinessFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53RecoveryReadinessFullAccess);
    }

    /** Provides read only access to Amazon Route 53 Recovery Readiness */
    public AmazonRoute53RecoveryReadinessReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53RecoveryReadinessReadOnlyAccess);
    }

    /** Full access policy for Route 53 Resolver */
    public AmazonRoute53ResolverFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53ResolverFullAccess);
    }

    /** Read only policy for Route 53 Resolver */
    public AmazonRoute53ResolverReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonRoute53ResolverReadOnlyAccess);
    }

    /** Provides full access to all buckets via the AWS Management Console. */
    public AmazonS3FullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonS3FullAccess);
    }

    /** Provides AWS Lambda functions permissions to interact with Amazon S3 Object Lambda. Also grants Lambda permissions to write to CloudWatch Logs. */
    public AmazonS3ObjectLambdaExecutionRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonS3ObjectLambdaExecutionRolePolicy);
    }

    /** Provides full access to Amazon S3 on Outposts via the AWS Management Console. */
    public AmazonS3OutpostsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonS3OutpostsFullAccess);
    }

    /** Provides read only access to Amazon S3 on Outposts via the AWS Management Console. */
    public AmazonS3OutpostsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonS3OutpostsReadOnlyAccess);
    }

    /** Provides read only access to all buckets via the AWS Management Console. */
    public AmazonS3ReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonS3ReadOnlyAccess);
    }

    /** Service role policy used by the AWS Service Catalog service to provision products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including CodePipeline, CodeBuild, CodeCommit, Glue, CloudFormation, etc,. */
    public AmazonSageMakerAdminServiceCatalogProductsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerAdminServiceCatalogProductsServiceRolePolicy);
    }

    /** Provides permissions for Amazon SageMaker Canvas to use AI services to support ready to use AI solutions. This policy will add more mutating permissions for services as Amazon SageMaker Canvas adds support. */
    public AmazonSageMakerCanvasAIServicesAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerCanvasAIServicesAccess);
    }

    /** This policy grants permissions to use Amazon Bedrock in SageMaker Canvas by providing access to downstream services such as S3. */
    public AmazonSageMakerCanvasBedrockAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerCanvasBedrockAccess);
    }

    /** Provides full access to Amazon SageMaker resources and operations for data preparation in Canvas. The policy also provides select access to related services (e.g., S3, IAM, KMS, RDS, CloudWatch Logs, Redshift, Athena, Glue, EventBridge, Secrets Manager). This policy should be attached to the Amazon SageMaker Domain/User Profile execution role. */
    public AmazonSageMakerCanvasDataPrepFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerCanvasDataPrepFullAccess);
    }

    /** Allows Amazon SageMaker Canvas to create, manage and view endpoint details for endpoints created through Canvas. Allows Amazon SageMaker Canvas to retrieve endpoint invocation metrics from CloudWatch. */
    public AmazonSageMakerCanvasDirectDeployAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerCanvasDirectDeployAccess);
    }

    /** This policy grants permissions commonly needed to use SageMaker Canvas with Amazon Forecast. */
    public AmazonSageMakerCanvasForecastAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerCanvasForecastAccess);
    }

    /** Provides full access to Amazon SageMaker Canvas resources and operations. The policy also provides select access to related services (e.g., S3, IAM, VPC, ECR, CloudWatch Logs, Redshift, Secrets Manager, and Forecast). This policy should be attached to the Amazon SageMaker Domain/User Profile execution role. */
    public AmazonSageMakerCanvasFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerCanvasFullAccess);
    }

    /** This policy grants permissions commonly needed to use Amazon SageMaker Cluster. */
    public AmazonSageMakerClusterInstanceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerClusterInstanceRolePolicy);
    }

    /** Managed policy for Service Linked Role for Amazon SageMaker Core Services */
    public AmazonSageMakerCoreServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerCoreServiceRolePolicy);
    }

    /** Provides permissions necessary for SageMaker Edge to create and manage a device fleet for the customer using the default cloud connection. */
    public AmazonSageMakerEdgeDeviceFleetPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerEdgeDeviceFleetPolicy);
    }

    /** Provides permissions required to enable the offline store for an Amazon SageMaker FeatureStore feature group. */
    public AmazonSageMakerFeatureStoreAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerFeatureStoreAccess);
    }

    /** Provides full access to Amazon SageMaker via the AWS Management Console and SDK. Also provides select access to related services (e.g., S3, ECR, CloudWatch Logs). */
    public AmazonSageMakerFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerFullAccess);
    }

    /** This policy provide access to services that are commonly needed to use SageMaker geospatial. */
    public AmazonSageMakerGeospatialExecutionRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerGeospatialExecutionRole);
    }

    /** This policy grants permissions that allow full access to Amazon SageMaker Geospatial through the AWS Management Console and SDK. */
    public AmazonSageMakerGeospatialFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerGeospatialFullAccess);
    }

    /** Provides access to AWS services that are required to run SageMaker GroundTruth Labeling job */
    public AmazonSageMakerGroundTruthExecution(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerGroundTruthExecution);
    }

    /** Provides access to create Amazon Augmented AI FlowDefinition resources against any Workteam. */
    public AmazonSageMakerMechanicalTurkAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerMechanicalTurkAccess);
    }

    /** This AWS managed policy grants permissions needed to use all Amazon SageMaker Governance features. The policy also provides select access to related services (e.g., S3, KMS). */
    public AmazonSageMakerModelGovernanceUseAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerModelGovernanceUseAccess);
    }

    /** This is a new managed policy for Model Registry in Sagemaker. This policy is a standalone policy that can be attached to the user role to access Model Registry related functionalities in Sagemaker. */
    public AmazonSageMakerModelRegistryFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerModelRegistryFullAccess);
    }

    /** Managed policy for Service Linked Role for Amazon SageMaker Notebooks */
    public AmazonSageMakerNotebooksServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerNotebooksServiceRolePolicy);
    }

    /** Service role policy used by the AWS APIGateway within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Lambda and others. */
    public AmazonSageMakerPartnerServiceCatalogProductsApiGatewayServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerPartnerServiceCatalogProductsApiGatewayServiceRolePolicy);
    }

    /** Service role policy used by the AWS CloudFormation within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including Lambda, APIGateway and others. */
    public AmazonSageMakerPartnerServiceCatalogProductsCloudFormationServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerPartnerServiceCatalogProductsCloudFormationServiceRolePolicy);
    }

    /** Service role policy used by the AWS Lambda within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Secrets Manager and others. */
    public AmazonSageMakerPartnerServiceCatalogProductsLambdaServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerPartnerServiceCatalogProductsLambdaServiceRolePolicy);
    }

    /** This Amazon Managed Policy grants permissions commonly needed for use with Callback steps and Lambda steps in SageMaker Model Building Pipelines. It is added to the AmazonSageMaker-ExecutionRole that can be created when setting up SageMaker Studio. It can also be attached to any other role that will be used for authoring or executing pipelines. */
    public AmazonSageMakerPipelinesIntegrations(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerPipelinesIntegrations);
    }

    /** Provides read only access to Amazon SageMaker via the AWS Management Console and SDK. */
    public AmazonSageMakerReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerReadOnly);
    }

    /** Service role policy used by the AWS APIGateway within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including CloudWatch Logs and others. */
    public AmazonSageMakerServiceCatalogProductsApiGatewayServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerServiceCatalogProductsApiGatewayServiceRolePolicy);
    }

    /** Service role policy used by the AWS CloudFormation within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including SageMaker and others. */
    public AmazonSageMakerServiceCatalogProductsCloudformationServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerServiceCatalogProductsCloudformationServiceRolePolicy);
    }

    /** Service role policy used by the AWS CodeBuild within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including CodePipeline, CodeBuild and others. */
    public AmazonSageMakerServiceCatalogProductsCodeBuildServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerServiceCatalogProductsCodeBuildServiceRolePolicy);
    }

    /** Service role policy used by the AWS CodePipeline within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including CodePipeline, CodeBuild and others. */
    public AmazonSageMakerServiceCatalogProductsCodePipelineServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerServiceCatalogProductsCodePipelineServiceRolePolicy);
    }

    /** Service role policy used by the AWS CloudWatch Events within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a subset of related services including CodePipeline and others. */
    public AmazonSageMakerServiceCatalogProductsEventsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerServiceCatalogProductsEventsServiceRolePolicy);
    }

    /** Service role policy used by the AWS Firehose within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Firehose and others. */
    public AmazonSageMakerServiceCatalogProductsFirehoseServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerServiceCatalogProductsFirehoseServiceRolePolicy);
    }

    /** Service role policy used by the AWS Glue within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including Glue, S3 and others. */
    public AmazonSageMakerServiceCatalogProductsGlueServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerServiceCatalogProductsGlueServiceRolePolicy);
    }

    /** Service role policy used by the AWS Lambda within the AWS ServiceCatalog provisioned products from Amazon SageMaker portfolio of products. Grants permissions to a set of related services including ECR, S3 and others. */
    public AmazonSageMakerServiceCatalogProductsLambdaServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSageMakerServiceCatalogProductsLambdaServiceRolePolicy);
    }

    /** Provides full access to Amazon Security Lake and related services needed to administer Security Lake. */
    public AmazonSecurityLakeAdministrator(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSecurityLakeAdministrator);
    }

    /** Policy for Amazon SecurityLake meta store manager lambda which allows the access to cloudwatch, S3, Glue and SQS. */
    public AmazonSecurityLakeMetastoreManager(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSecurityLakeMetastoreManager);
    }

    /** Amazon Security Lake creates IAM roles for third-party custom sources to write data to a data lake and for third-party subscribers to consume data from a data lake, and uses this policy when creating these roles to define the boundary of their permissions. */
    public AmazonSecurityLakePermissionsBoundary(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSecurityLakePermissionsBoundary);
    }

    /** Provides full access to Amazon SES via the AWS Management Console. */
    public AmazonSESFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSESFullAccess);
    }

    /** Provides read only access to Amazon SES via the AWS Management Console. */
    public AmazonSESReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSESReadOnlyAccess);
    }

    /** Allows SES to publish Amazon CloudWatch basic monitoring metrics on behalf of your SES resources */
    public AmazonSESServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSESServiceRolePolicy);
    }

    /** Provides full access to Amazon SNS via the AWS Management Console. */
    public AmazonSNSFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSNSFullAccess);
    }

    /** Provides read only access to Amazon SNS via the AWS Management Console. */
    public AmazonSNSReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSNSReadOnlyAccess);
    }

    /** Default policy for Amazon SNS service role. */
    public AmazonSNSRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSNSRole);
    }

    /** Provides full access to Amazon SQS via the AWS Management Console. */
    public AmazonSQSFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSQSFullAccess);
    }

    /** Provides read only access to Amazon SQS via the AWS Management Console. */
    public AmazonSQSReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSQSReadOnlyAccess);
    }

    /** Provides access to view automation executions and send approval decisions to automation waiting for approval */
    public AmazonSSMAutomationApproverAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSSMAutomationApproverAccess);
    }

    /** Provides permissions for EC2 Automation service to execute activities defined within Automation documents */
    public AmazonSSMAutomationRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSSMAutomationRole);
    }

    /** This policy allows SSM Agent to access Directory Service on behalf of the customer for domain-join the managed instance. */
    public AmazonSSMDirectoryServiceAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSSMDirectoryServiceAccess);
    }

    /** Provides full access to Amazon SSM. */
    public AmazonSSMFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSSMFullAccess);
    }

    /**  Service Role to be used for EC2 Maintenance Window */
    public AmazonSSMMaintenanceWindowRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSSMMaintenanceWindowRole);
    }

    /** This policy enables AWS Systems Manager functionality on EC2 instances. */
    public AmazonSSMManagedEC2InstanceDefaultPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSSMManagedEC2InstanceDefaultPolicy);
    }

    /** The policy for Amazon EC2 Role to enable AWS Systems Manager service core functionality. */
    public AmazonSSMManagedInstanceCore(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSSMManagedInstanceCore);
    }

    /** Provide access to child instances for patch association operation. */
    public AmazonSSMPatchAssociation(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSSMPatchAssociation);
    }

    /** Provides read only access to Amazon SSM. */
    public AmazonSSMReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSSMReadOnlyAccess);
    }

    /** Provides access to AWS Resources managed or used by Amazon SSM */
    public AmazonSSMServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonSSMServiceRolePolicy);
    }

    /** Access to all Amazon Textract APIs */
    public AmazonTextractFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonTextractFullAccess);
    }

    /** Allows Textract to call AWS services on your behalf. */
    public AmazonTextractServiceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonTextractServiceRole);
    }

    /** Provides full access to manage Amazon Timestream using the AWS Management Console. Note that this policy also grants permissions for certain KMS operations, and operations to manage your saved queries. If using Customer managed CMK, please refer to documentation for additional permissions needed. */
    public AmazonTimestreamConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonTimestreamConsoleFullAccess);
    }

    /** Provides full access to Amazon Timestream. Note that this policy also grants certain KMS operation access. If using Customer managed CMK, please refer to documentation for additional permissions needed. */
    public AmazonTimestreamFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonTimestreamFullAccess);
    }

    /** Provides full administrative access to create, update, delete and list Amazon Timestream InfluxDB instances and create and list parameter groups. Please refer to documentation for additional permissions needed. */
    public AmazonTimestreamInfluxDBFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonTimestreamInfluxDBFullAccess);
    }

    /** Provides full administrative access to create, update, delete and list Amazon Timestream InfluxDB instances and create and list parameter groups. Please refer to documentation for additional permissions needed. */
    public AmazonTimestreamInfluxDBServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonTimestreamInfluxDBServiceRolePolicy);
    }

    /** Provides read only access to Amazon Timestream. Policy also provides permission to cancel any running query. If using Customer managed CMK, please refer to documentation for additional permissions needed. */
    public AmazonTimestreamReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonTimestreamReadOnlyAccess);
    }

    /** Provides full access to Amazon Transcribe operations */
    public AmazonTranscribeFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonTranscribeFullAccess);
    }

    /** Provides access to read only operation for Amazon Transcribe */
    public AmazonTranscribeReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonTranscribeReadOnlyAccess);
    }

    /** Provides access to create network interfaces and attach them to cross-account resources */
    public AmazonVPCCrossAccountNetworkInterfaceOperations(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonVPCCrossAccountNetworkInterfaceOperations);
    }

    /** Provides full access to Amazon VPC via the AWS Management Console. */
    public AmazonVPCFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonVPCFullAccess);
    }

    /** Provides permissions to describe AWS resources, run Network Access Analyzer, and create or delete tags on Network Insights Access Scope and Network Insights Access Scope Analysis. */
    public AmazonVPCNetworkAccessAnalyzerFullAccessPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonVPCNetworkAccessAnalyzerFullAccessPolicy);
    }

    /** Provides permissions to describe AWS resources, run Reachability Analyzer, and create or delete tags on Network Insights Path and Network Insights Analysis. */
    public AmazonVPCReachabilityAnalyzerFullAccessPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonVPCReachabilityAnalyzerFullAccessPolicy);
    }

    /** This policy is attached to the role IAMRoleForReachabilityAnalyzerCrossAccountResourceAccess. This role is deployed to the member accounts in an organization when the management account enables trusted access for Reachability Analyzer. It provides permissions to view resources from across your organization using the Reachability Analyzer console. */
    public AmazonVPCReachabilityAnalyzerPathComponentReadPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonVPCReachabilityAnalyzerPathComponentReadPolicy);
    }

    /** Provides read only access to Amazon VPC via the AWS Management Console. */
    public AmazonVPCReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonVPCReadOnlyAccess);
    }

    /** Provides full access to Amazon WorkDocs via the AWS Management Console */
    public AmazonWorkDocsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkDocsFullAccess);
    }

    /** Provides read only access to Amazon WorkDocs via the AWS Management Console */
    public AmazonWorkDocsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkDocsReadOnlyAccess);
    }

    /** Enables access to AWS Services and Resources used or managed by Amazon WorkMail Events */
    public AmazonWorkMailEventsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkMailEventsServiceRolePolicy);
    }

    /** Provides full access to WorkMail, Directory Service, SES, EC2 and read access to KMS metadata. */
    public AmazonWorkMailFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkMailFullAccess);
    }

    /** Full access to the WorkMail Message Flow APIs */
    public AmazonWorkMailMessageFlowFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkMailMessageFlowFullAccess);
    }

    /** Read only access to WorkMail messages for the GetRawMessageContent API */
    public AmazonWorkMailMessageFlowReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkMailMessageFlowReadOnlyAccess);
    }

    /** Provides read only access to WorkMail and SES. */
    public AmazonWorkMailReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkMailReadOnlyAccess);
    }

    /** Provides access to Amazon WorkSpaces administrative actions via AWS SDK and CLI. */
    public AmazonWorkSpacesAdmin(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkSpacesAdmin);
    }

    /** Provides administrator access for packaging an application in Amazon WorkSpaces Application Manager. */
    public AmazonWorkSpacesApplicationManagerAdminAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkSpacesApplicationManagerAdminAccess);
    }

    /** This managed policy provides full administrative access to AWS Certificate Manager Private CA resources in your AWS account for certificate-based authentication. */
    public AmazonWorkspacesPCAAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkspacesPCAAccess);
    }

    /** This policy provides AWS WorkSpaces service access to required customer account resources for launching Workspaces Pools */
    public AmazonWorkSpacesPoolServiceAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkSpacesPoolServiceAccess);
    }

    /** Provides read-only access to Amazon WorkSpaces Secure Browser and its dependencies through the AWS Management Console, SDK, and CLI. */
    public AmazonWorkSpacesSecureBrowserReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkSpacesSecureBrowserReadOnly);
    }

    /** Provides access to Amazon WorkSpaces backend service to perform Workspace Self Service actions */
    public AmazonWorkSpacesSelfServiceAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkSpacesSelfServiceAccess);
    }

    /** Provides customer account access to AWS WorkSpaces service for launching a Workspace. */
    public AmazonWorkSpacesServiceAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkSpacesServiceAccess);
    }

    /** Provides read-only access to Amazon WorkSpaces Thin Client and its dependencies */
    public AmazonWorkSpacesThinClientReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkSpacesThinClientReadOnlyAccess);
    }

    /** Provides read-only access to Amazon WorkSpaces Web and its dependencies through the AWS Management Console, SDK, and CLI. */
    public AmazonWorkSpacesWebReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkSpacesWebReadOnly);
    }

    /** Enables access to AWS Services and Resources used or managed by Amazon WorkSpaces Web */
    public AmazonWorkSpacesWebServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonWorkSpacesWebServiceRolePolicy);
    }

    /** Provides full access to Amazon Zocalo. */
    public AmazonZocaloFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonZocaloFullAccess);
    }

    /** Provides read only access to Amazon Zocalo */
    public AmazonZocaloReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmazonZocaloReadOnlyAccess);
    }

    /** Provides Amplify full access permissions to deploy Amplify backend resources (AWS AppSync, Amazon Cognito, Amazon S3 and other related services) via the AWS Cloud Development Kit (AWS CDK) */
    public AmplifyBackendDeployFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AmplifyBackendDeployFullAccess);
    }

    /** Allows API Gateway to manage associated AWS Resources on behalf of the customer. */
    public APIGatewayServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.APIGatewayServiceRolePolicy);
    }

    /** Allows AppIntegrations to manage AppFlow resources and publish CloudWatch metric data on your behalf. */
    public AppIntegrationsServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AppIntegrationsServiceLinkedRolePolicy);
    }

    /** Policy to enable Application Autoscaling for Amazon AppStream */
    public ApplicationAutoScalingForAmazonAppStreamAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ApplicationAutoScalingForAmazonAppStreamAccess);
    }

    /** Enables access to AWS Services and Resources used or managed by Application Discovery Service Continuous Export feature */
    public ApplicationDiscoveryServiceContinuousExportServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ApplicationDiscoveryServiceContinuousExportServiceRolePolicy);
    }

    /** Allows AWS AppRunner Networking to manage related AWS resources on your behalf. */
    public AppRunnerNetworkingServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AppRunnerNetworkingServiceRolePolicy);
    }

    /** Allows AWS AppRunner to manage related AWS resources on your behalf. */
    public AppRunnerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AppRunnerServiceRolePolicy);
    }

    /** Allows AppStudio to manage associated AWS resources on your behalf. */
    public AppStudioServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AppStudioServiceRolePolicy);
    }

    /** Provides full access to Auto Scaling via the AWS Management Console. */
    public AutoScalingConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AutoScalingConsoleFullAccess);
    }

    /** Provides read-only access to Auto Scaling via the AWS Management Console. */
    public AutoScalingConsoleReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AutoScalingConsoleReadOnlyAccess);
    }

    /** Provides full access to Auto Scaling. */
    public AutoScalingFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AutoScalingFullAccess);
    }

    /** Default policy for the AutoScaling Notification Access service role. */
    public AutoScalingNotificationAccessRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AutoScalingNotificationAccessRole);
    }

    /** Provides read-only access to Auto Scaling. */
    public AutoScalingReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AutoScalingReadOnlyAccess);
    }

    /** Enables access to AWS Services and Resources used or managed by Auto Scaling */
    public AutoScalingServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AutoScalingServiceRolePolicy);
    }

    /** Default policy for AWS Config service role. Provides permissions required for AWS Config to track changes to your AWS resources. */
    public AWSConfigRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSConfigRole);
    }

    /** Allows users to access the Account Activity page. */
    public AWSAccountActivityAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAccountActivityAccess);
    }

    /** Provides full access to AWS Account Management. */
    public AWSAccountManagementFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAccountManagementFullAccess);
    }

    /** Provides read-only access to AWS Account Management */
    public AWSAccountManagementReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAccountManagementReadOnlyAccess);
    }

    /** Allows users to access the Account Usage Report page. */
    public AWSAccountUsageReportAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAccountUsageReportAccess);
    }

    /** Provides access for the Discovery Agentless Connector to register with AWS Application Discovery Service. */
    public AWSAgentlessDiscoveryService(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAgentlessDiscoveryService);
    }

    /** Provides full access to the AWS AppFabric service and read only access to dependent services such as S3, Kinesis, KMS. */
    public AWSAppFabricFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppFabricFullAccess);
    }

    /** Provides read only access to the AWS AppFabric */
    public AWSAppFabricReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppFabricReadOnlyAccess);
    }

    /** Provides AppFabric access to AWS resources on your behalf */
    public AWSAppFabricServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppFabricServiceRolePolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access AppStream and CloudWatch. */
    public AWSApplicationAutoscalingAppStreamFleetPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingAppStreamFleetPolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access Cassandra and CloudWatch. */
    public AWSApplicationAutoscalingCassandraTablePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingCassandraTablePolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access Comprehend and CloudWatch. */
    public AWSApplicationAutoscalingComprehendEndpointPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingComprehendEndpointPolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access APIGateway and CloudWatch for custom resource scaling */
    public AWSApplicationAutoScalingCustomResourcePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoScalingCustomResourcePolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access DynamoDB and CloudWatch. */
    public AWSApplicationAutoscalingDynamoDBTablePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingDynamoDBTablePolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access EC2 Spot Fleet and CloudWatch. */
    public AWSApplicationAutoscalingEC2SpotFleetRequestPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingEC2SpotFleetRequestPolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access EC2 Container Service and CloudWatch. */
    public AWSApplicationAutoscalingECSServicePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingECSServicePolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access Amazon ElastiCache and Amazon CloudWatch. */
    public AWSApplicationAutoscalingElastiCacheRGPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingElastiCacheRGPolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access Elastic Map Reduce and CloudWatch. */
    public AWSApplicationAutoscalingEMRInstanceGroupPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingEMRInstanceGroupPolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access Managed Streaming for Apache Kafka and CloudWatch. */
    public AWSApplicationAutoscalingKafkaClusterPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingKafkaClusterPolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access Lambda and CloudWatch. */
    public AWSApplicationAutoscalingLambdaConcurrencyPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingLambdaConcurrencyPolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access Amazon Neptune and Amazon CloudWatch. */
    public AWSApplicationAutoscalingNeptuneClusterPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingNeptuneClusterPolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access RDS and CloudWatch. */
    public AWSApplicationAutoscalingRDSClusterPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingRDSClusterPolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access SageMaker and CloudWatch. */
    public AWSApplicationAutoscalingSageMakerEndpointPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingSageMakerEndpointPolicy);
    }

    /** Policy granting permissions to Application Auto Scaling to access Amazon WorkSpaces and Amazon CloudWatch. */
    public AWSApplicationAutoscalingWorkSpacesPoolPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationAutoscalingWorkSpacesPoolPolicy);
    }

    /** Provides access for the Discovery Agent to register with AWS Application Discovery Service. */
    public AWSApplicationDiscoveryAgentAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationDiscoveryAgentAccess);
    }

    /** Allows Application Discovery Service Agentless Collectors to auto update, register, and communicate with Application Discovery Service */
    public AWSApplicationDiscoveryAgentlessCollectorAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationDiscoveryAgentlessCollectorAccess);
    }

    /** Provides full access to view and tag Configuration Items maintained by the AWS Application Discovery Service */
    public AWSApplicationDiscoveryServiceFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationDiscoveryServiceFullAccess);
    }

    /** This policy allows installing the AWS Replication Agent, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide when installing the AWS Replication Agent. */
    public AWSApplicationMigrationAgentInstallationPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationMigrationAgentInstallationPolicy);
    }

    /** This policy allows installing and using the AWS Replication Agent, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide when installing the AWS Replication Agent. */
    public AWSApplicationMigrationAgentPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationMigrationAgentPolicy);
    }

    /** This policy allows using the AWS Replication Agent, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. We do not recommend that you attach this policy to your IAM users or roles. */
    public AWSApplicationMigrationAgentPolicyV2(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationMigrationAgentPolicyV2);
    }

    /** This policy allows the Application Migration Service (MGN) Conversion Server, which are EC2 instances launched by Application Migration Service, to communicate with the MGN service. An IAM role with this policy is attached (as an EC2 Instance Profile) by MGN to the MGN Conversion Servers, which are automatically launched and terminated by MGN, when needed. We do not recommend that you attach this policy to your IAM users or roles. MGN Conversion Servers are used by Application Migration Service when users choose to launch Test or Cutover instances using the MGN console, CLI, or API. */
    public AWSApplicationMigrationConversionServerPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationMigrationConversionServerPolicy);
    }

    /** This policy provides Amazon EC2 operations required to use Application Migration Service (MGN) to launch the migrated servers as EC2 instances. Attach this policy to your IAM users or roles. */
    public AWSApplicationMigrationEC2Access(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationMigrationEC2Access);
    }

    /** This policy provides permissions to all public APIs of AWS Application Migration Service (MGN), as well as permissions to read KMS key information. Attach this policy to your IAM users or roles. */
    public AWSApplicationMigrationFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationMigrationFullAccess);
    }

    /** This policy allows AWS Application Migration Service (MGN) to send meta-data about the progress of servers being migrated using MGN to AWS Migration Hub (MGH). MGN automatically creates an IAM role with this policy attached, and assumes this role. We do not recommend that you attach this policy to your IAM users or roles. */
    public AWSApplicationMigrationMGHAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationMigrationMGHAccess);
    }

    /** This policy provides permissions to all read-only public APIs of Application Migration Service (MGN), as well as some read-only APIs of other AWS services that are required in order to make full read-only use of the MGN console. Attach this policy to your IAM users or roles. */
    public AWSApplicationMigrationReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationMigrationReadOnlyAccess);
    }

    /** This policy allows the Application Migration Service (MGN) Replication Servers, which are EC2 instances launched by Application Migration Service - to communicate with the MGN service, and to create EBS snapshots in your AWS account. An IAM role with this policy is attached (as an EC2 Instance Profile) by Application Migration Service to the MGN Replication Servers which are automatically launched and terminated by MGN, as needed. MGN Replication Servers are used to facilitate data replication from your external servers to AWS, as part of the migration process managed using MGN. We do not recommend that you attach this policy to your IAM users or roles. */
    public AWSApplicationMigrationReplicationServerPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationMigrationReplicationServerPolicy);
    }

    /** This policy allows installing and using the AWS Replication Agent, which is used by AWS Application Migration Service (AWS MGN) to migrate source servers that run on EC2 (cross-Region or cross-AZ). An IAM role with this policy should be attached (as an EC2 Instance Profile) to the EC2 Instances. */
    public AWSApplicationMigrationServiceEc2InstancePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationMigrationServiceEc2InstancePolicy);
    }

    /** Allows AWS application Migration Service to create and manage AWS resources on your behalf. */
    public AWSApplicationMigrationServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationMigrationServiceRolePolicy);
    }

    /** This policy provides access to Amazon SSM operations required to use Application Migration Service (MGN) to execute custom post migration command SSM documents. Attach this policy to your IAM users or roles. */
    public AWSApplicationMigrationSSMAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationMigrationSSMAccess);
    }

    /** This policy allows installing and using the AWS VCenter Client, which is used with AWS Application Migration Service (MGN) to migrate external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide when installing the AWS VCenter Client. */
    public AWSApplicationMigrationVCenterClientPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSApplicationMigrationVCenterClientPolicy);
    }

    /** App Mesh Envoy policy for accessing Virtual Node configuration. */
    public AWSAppMeshEnvoyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppMeshEnvoyAccess);
    }

    /** Provides full access to the AWS App Mesh APIs and Management Console. */
    public AWSAppMeshFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppMeshFullAccess);
    }

    /** App Mesh Preview Envoy policy for accessing Virtual Node configuration. */
    public AWSAppMeshPreviewEnvoyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppMeshPreviewEnvoyAccess);
    }

    /** Enables access to AWS Services and Resources used or managed by AWS App Mesh */
    public AWSAppMeshPreviewServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppMeshPreviewServiceRolePolicy);
    }

    /** Provides read-only access to the AWS App Mesh APIs and Management Console. */
    public AWSAppMeshReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppMeshReadOnly);
    }

    /** Enables access to AWS Services and Resources used or managed by AWS AppMesh */
    public AWSAppMeshServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppMeshServiceRolePolicy);
    }

    /** Grants permissions to all App Runner actions. */
    public AWSAppRunnerFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppRunnerFullAccess);
    }

    /** Grants permissions to list and view details about App Runner resources. */
    public AWSAppRunnerReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppRunnerReadOnlyAccess);
    }

    /** AWS App Runner service policy that grants read permissions to Amazon ECR resources in the customer's account. Use it in a role that is passed to App Runner when creating or updating an App Runner service. */
    public AWSAppRunnerServicePolicyForECRAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppRunnerServicePolicyForECRAccess);
    }

    /** Provides administrative access to the AppSync service, though not enough to access via the console. */
    public AWSAppSyncAdministrator(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppSyncAdministrator);
    }

    /** Provides full invoking access to the AppSync service - both through the console and independently */
    public AWSAppSyncInvokeFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppSyncInvokeFullAccess);
    }

    /** Allows AppSync to push logs to user's CloudWatch account. */
    public AWSAppSyncPushToCloudWatchLogs(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppSyncPushToCloudWatchLogs);
    }

    /** Provides access to create, update, and query the schema. */
    public AWSAppSyncSchemaAuthor(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppSyncSchemaAuthor);
    }

    /** Enables access to AWS services and resources used or managed by AppSync */
    public AWSAppSyncServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAppSyncServiceRolePolicy);
    }

    /** Allows AWS Artifact read-only access to operations in AWS Organizations. */
    public AWSArtifactAccountSync(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSArtifactAccountSync);
    }

    /** Provides read-only access to the AWS Artifact service reports. */
    public AWSArtifactReportsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSArtifactReportsReadOnlyAccess);
    }

    /** Allows AWS Artifact to gather information about an organization via AWS Organizations service. */
    public AWSArtifactServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSArtifactServiceRolePolicy);
    }

    /** Provides administrative access to enable or disable AWS Audit Manager, update settings, and manage assessments, controls, and frameworks */
    public AWSAuditManagerAdministratorAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAuditManagerAdministratorAccess);
    }

    /** Enables access to AWS Services and Resources used or managed by AWS Audit Manager */
    public AWSAuditManagerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAuditManagerServiceRolePolicy);
    }

    /** Policy granting permissions to AWS Auto Scaling to periodically forecast capacity and generate scheduled scaling actions for Auto Scaling groups in a scaling plan */
    public AWSAutoScalingPlansEC2AutoScalingPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSAutoScalingPlansEC2AutoScalingPolicy);
    }

    /** This policy grants permissions for users to create controls and frameworks that define their expectations for AWS Backup resources and activities, and to audit AWS Backup resources and activities against their defined controls and frameworks. This policy grants permissions to AWS Config and similar services to describe user expectations perform the audits. This policy also grants permissions to deliver audit reports to S3 and similar services, and enables users to find and open their audit reports. */
    public AWSBackupAuditAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBackupAuditAccess);
    }

    /** This policy allows the AWS Backint agent to complete backup data transfer with AWS Backup Storage plane. Attach this policy to roles assumed by EC2 Instances running SAP HANA with the Backint agent. */
    public AWSBackupDataTransferAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBackupDataTransferAccess);
    }

    /** This policy is for backup administrators, granting full access to AWS Backup operations, including creating or editing backup plans, assigning AWS resources to backup plans, deleting backups, and restoring backups. */
    public AWSBackupFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBackupFullAccess);
    }

    /** Provides AWS BackupGateway permission to sync the metadata of Virtual Machines on your behalf */
    public AWSBackupGatewayServiceRolePolicyForVirtualMachineMetadataSync(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBackupGatewayServiceRolePolicyForVirtualMachineMetadataSync);
    }

    /** This policy grants users permissions to assign AWS resources to backup plans, create on-demand backups, and restore backups. This policy does not allow the user to create or edit backup plans or to delete scheduled backups after they are created. */
    public AWSBackupOperatorAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBackupOperatorAccess);
    }

    /** This policy is for backup administators who use cross-account backup management to manage backups for the organization. */
    public AWSBackupOrganizationAdminAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBackupOrganizationAdminAccess);
    }

    /** Provides AWS Backup permission to restore a backup of SAP HANA on Amazon EC2 */
    public AWSBackupRestoreAccessForSAPHANA(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBackupRestoreAccessForSAPHANA);
    }

    /** Provides AWS Backup permission to create backups on your behalf across AWS services */
    public AWSBackupServiceLinkedRolePolicyForBackup(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBackupServiceLinkedRolePolicyForBackup);
    }

    /** Provides AWS Backup permission to create backups on your behalf across AWS services */
    public AWSBackupServiceLinkedRolePolicyForBackupTest(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBackupServiceLinkedRolePolicyForBackupTest);
    }

    /** Provides AWS Backup permission to create backups on your behalf across AWS services */
    public AWSBackupServiceRolePolicyForBackup(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBackupServiceRolePolicyForBackup);
    }

    /** Provides AWS Backup permission to perform restores on your behalf across AWS services. This policy includes permissions to create and delete AWS resources, such as EBS volumes, RDS instances, and EFS file systems, which are part of the restore process. */
    public AWSBackupServiceRolePolicyForRestores(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBackupServiceRolePolicyForRestores);
    }

    /** Policy containing permissions necessary for AWS Backup to backup data in any S3 bucket. This includes read access to all S3 objects and any decrypt access for all KMS keys. */
    public AWSBackupServiceRolePolicyForS3Backup(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBackupServiceRolePolicyForS3Backup);
    }

    /** Policy containing permissions necessary for AWS Backup to restore a S3 backup to a bucket. This includes read/write permissions to all S3 buckets, and permissions to GenerateDataKey and DescribeKey for all KMS keys. */
    public AWSBackupServiceRolePolicyForS3Restore(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBackupServiceRolePolicyForS3Restore);
    }

    /** Provides full access for AWS Batch resources. */
    public AWSBatchFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBatchFullAccess);
    }

    /** Policy to enable CloudWatch Event Target for AWS Batch Job Submission */
    public AWSBatchServiceEventTargetRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBatchServiceEventTargetRole);
    }

    /** Policy for AWS Batch service role which allows access to related services including EC2, Autoscaling, EC2 Container service and Cloudwatch Logs. */
    public AWSBatchServiceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBatchServiceRole);
    }

    /** A service linked role to provide Billing and Cost Management Data Exports access to AWS service data for exporting the data to a target location, such as Amazon S3, on behalf of a customer. */
    public AWSBCMDataExportsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBCMDataExportsServiceRolePolicy);
    }

    /** Use the AWSBillingConductorFullAccess managed policy to allow complete access to AWS Billing Conductor (ABC) console and APIs. This policy allows users to list, create and delete ABC resources. */
    public AWSBillingConductorFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBillingConductorFullAccess);
    }

    /** Use the AWSBillingConductorReadOnlyAccess managed policy to allow read only access to AWS Billing Conductor (ABC) console and APIs. This policy grants permission to view and list all ABC resources. It does not include the ability to create or delete resources. */
    public AWSBillingConductorReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBillingConductorReadOnlyAccess);
    }

    /** Allows users to view bills on the Billing Console. */
    public AWSBillingReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBillingReadOnlyAccess);
    }

    /** This policy gives permissions to control AWS resources. For example, to start and stop EC2 or RDS instances by executing AWS Systems Manager (SSM) scripts. */
    public AWSBudgetsActionsRolePolicyForResourceAdministrationWithSSM(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBudgetsActionsRolePolicyForResourceAdministrationWithSSM);
    }

    /** Provides full access to AWS Budgets Actions including using Budgets Actions to control states of running AWS resources via AWS Management Console */
    public AWSBudgetsActionsWithAWSResourceControlAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBudgetsActionsWithAWSResourceControlAccess);
    }

    /** Provides read only access to AWS Budgets Console via the AWS Management Console. */
    public AWSBudgetsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBudgetsReadOnlyAccess);
    }

    /** This IAM policy grants users full access to the AWS BugBust console */
    public AWSBugBustFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBugBustFullAccess);
    }

    /** This IAM policy grants users access to participate in AWS BugBust events */
    public AWSBugBustPlayerAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBugBustPlayerAccess);
    }

    /** Grants permissions to AWS BugBust to access resources on your behalf */
    public AWSBugBustServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSBugBustServiceRolePolicy);
    }

    /** Provides full access to AWS Certificate Manager (ACM) */
    public AWSCertificateManagerFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCertificateManagerFullAccess);
    }

    /** Provides auditor access to AWS Certificate Manager Private Certificate Authority */
    public AWSCertificateManagerPrivateCAAuditor(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCertificateManagerPrivateCAAuditor);
    }

    /** Provides full access to AWS Certificate Manager Private Certificate Authority */
    public AWSCertificateManagerPrivateCAFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCertificateManagerPrivateCAFullAccess);
    }

    /** Provides privileged certificate user access to AWS Certificate Manager Private Certificate Authority */
    public AWSCertificateManagerPrivateCAPrivilegedUser(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCertificateManagerPrivateCAPrivilegedUser);
    }

    /** Provides read only access to AWS Certificate Manager Private Certificate Authority */
    public AWSCertificateManagerPrivateCAReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCertificateManagerPrivateCAReadOnly);
    }

    /** Provides certificate user access to AWS Certificate Manager Private Certificate Authority */
    public AWSCertificateManagerPrivateCAUser(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCertificateManagerPrivateCAUser);
    }

    /** Provides read only access to AWS Certificate Manager (ACM). */
    public AWSCertificateManagerReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCertificateManagerReadOnly);
    }

    /** The Service Linked Role used by AWS Chatbot. */
    public AWSChatbotServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSChatbotServiceLinkedRolePolicy);
    }

    /** Allows full access to AWS Clean Rooms resources and access to related AWS Services. */
    public AWSCleanRoomsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCleanRoomsFullAccess);
    }

    /** Allows full access to AWS Clean Rooms resources except for querying in a collaboration and access to related AWS Services. */
    public AWSCleanRoomsFullAccessNoQuerying(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCleanRoomsFullAccessNoQuerying);
    }

    /** Allows full access to AWS Clean Rooms ML resources and access to related AWS Services. */
    public AWSCleanRoomsMLFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCleanRoomsMLFullAccess);
    }

    /** Allows read-only access to AWS Clean Rooms ML resources and read-only access to related AWS Clean Rooms resources */
    public AWSCleanRoomsMLReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCleanRoomsMLReadOnlyAccess);
    }

    /** Allows read-only access to AWS Clean Rooms resources and read-only access to related AWS Glue and Amazon CloudWatch Logs resources. */
    public AWSCleanRoomsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCleanRoomsReadOnlyAccess);
    }

    /** Provides administrator access to AWS Cloud9. */
    public AWSCloud9Administrator(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloud9Administrator);
    }

    /** Provides the ability to be invited into AWS Cloud9 shared development environments. */
    public AWSCloud9EnvironmentMember(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloud9EnvironmentMember);
    }

    /** Service Linked Role Policy for AWS Cloud9 */
    public AWSCloud9ServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloud9ServiceRolePolicy);
    }

    /** This policy will be used to attach a role on a InstanceProfile which will allow Cloud9 to use the SSM Session Manager to connect to the instance */
    public AWSCloud9SSMInstanceProfile(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloud9SSMInstanceProfile);
    }

    /** Provides permission to create AWS Cloud9 development environments and to manage owned environments. */
    public AWSCloud9User(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloud9User);
    }

    /** Provides full access to AWS CloudFormation. */
    public AWSCloudFormationFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudFormationFullAccess);
    }

    /** Provides access to AWS CloudFormation via the AWS Management Console. */
    public AWSCloudFormationReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudFormationReadOnlyAccess);
    }

    /** Grants CloudFront Logger write permissions to CloudWatch Logs. */
    public AWSCloudFrontLogger(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudFrontLogger);
    }

    /** Provides full access to all CloudHSM resources. */
    public AWSCloudHSMFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudHSMFullAccess);
    }

    /** Provides read only access to all CloudHSM resources. */
    public AWSCloudHSMReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudHSMReadOnlyAccess);
    }

    /** Default policy for the AWS CloudHSM service role. */
    public AWSCloudHSMRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudHSMRole);
    }

    /** Provides access to AWS Cloud Map discovery API. */
    public AWSCloudMapDiscoverInstanceAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudMapDiscoverInstanceAccess);
    }

    /** Provides full access to all AWS Cloud Map actions. */
    public AWSCloudMapFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudMapFullAccess);
    }

    /** Provides read-only access to all AWS Cloud Map actions. */
    public AWSCloudMapReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudMapReadOnlyAccess);
    }

    /** Provides registrant level access to AWS Cloud Map actions. */
    public AWSCloudMapRegisterInstanceAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudMapRegisterInstanceAccess);
    }

    /** Grants using AWS CloudShell with all features */
    public AWSCloudShellFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudShellFullAccess);
    }

    /** Provides full access to AWS CloudTrail. */
    public AWSCloudTrailFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudTrailFullAccess);
    }

    /** Provides read only access to AWS CloudTrail. */
    public AWSCloudTrailReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudTrailReadOnlyAccess);
    }

    /** This policy is used by the service-linked role named AWSServiceRoleForCloudWatchAlarms_ActionSSMIncidents. CloudWatch uses this service-linked role to perform AWS System Manager Incident Manager actions when a CloudWatch alarm goes in to ALARM state. This policy grants permission to start incidents on your behalf. */
    public AWSCloudWatchAlarmsActionSSMIncidentsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCloudWatchAlarmsActionSSMIncidentsServiceRolePolicy);
    }

    /** Provides full access to AWS CodeArtifact via the AWS Management Console. */
    public AWSCodeArtifactAdminAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeArtifactAdminAccess);
    }

    /** Provides read only access to AWS CodeArtifact via the AWS Management Console. */
    public AWSCodeArtifactReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeArtifactReadOnlyAccess);
    }

    /** Provides full access to AWS CodeBuild via the AWS Management Console. Also attach AmazonS3ReadOnlyAccess to provide access to download build artifacts, and attach IAMFullAccess to create and manage the service role for CodeBuild. */
    public AWSCodeBuildAdminAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeBuildAdminAccess);
    }

    /** Provides access to AWS CodeBuild via the AWS Management Console, but does not allow CodeBuild project administration. Also attach AmazonS3ReadOnlyAccess to provide access to download build artifacts. */
    public AWSCodeBuildDeveloperAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeBuildDeveloperAccess);
    }

    /** Provides read only access to AWS CodeBuild via the AWS Management Console. Also attach AmazonS3ReadOnlyAccess to provide access to download build artifacts. */
    public AWSCodeBuildReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeBuildReadOnlyAccess);
    }

    /** Provides full access to AWS CodeCommit via the AWS Management Console. */
    public AWSCodeCommitFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeCommitFullAccess);
    }

    /** Provides full access to AWS CodeCommit repositories, but does not allow repository deletion. */
    public AWSCodeCommitPowerUser(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeCommitPowerUser);
    }

    /** Provides read only access to AWS CodeCommit via the AWS Management Console. */
    public AWSCodeCommitReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeCommitReadOnly);
    }

    /** Provides access to register and deploy a revision. */
    public AWSCodeDeployDeployerAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeDeployDeployerAccess);
    }

    /** Provides full access to CodeDeploy resources. */
    public AWSCodeDeployFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeDeployFullAccess);
    }

    /** Provides read only access to CodeDeploy resources. */
    public AWSCodeDeployReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeDeployReadOnlyAccess);
    }

    /** Provides CodeDeploy service access to expand tags and interact with Auto Scaling on your behalf. */
    public AWSCodeDeployRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeDeployRole);
    }

    /** Provides CodeDeploy service access to invoke Lambda function on your behalf to perform blue/green deployment through CloudFormation. */
    public AWSCodeDeployRoleForCloudFormation(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeDeployRoleForCloudFormation);
    }

    /** Provides CodeDeploy service wide access to perform an ECS blue/green deployment on your behalf. Grants full access to support services, such as  full access to read all S3 objects, invoke all Lambda functions, publish to all SNS topics within the account and update all ECS services. */
    public AWSCodeDeployRoleForECS(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeDeployRoleForECS);
    }

    /**  Provides CodeDeploy service limited access to perform an ECS blue/green deployment on your behalf. */
    public AWSCodeDeployRoleForECSLimited(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeDeployRoleForECSLimited);
    }

    /** Provides CodeDeploy service access to perform a Lambda deployment on your behalf. */
    public AWSCodeDeployRoleForLambda(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeDeployRoleForLambda);
    }

    /** Provides CodeDeploy service limited access to perform a Lambda deployment on your behalf. */
    public AWSCodeDeployRoleForLambdaLimited(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeDeployRoleForLambdaLimited);
    }

    /** Provides full access to AWS CodePipeline via the AWS Management Console. */
    public AWSCodePipelineFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodePipelineFullAccess);
    }

    /** Provides read only access to AWS CodePipeline via the AWS Management Console. */
    public AWSCodePipelineReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodePipelineReadOnlyAccess);
    }

    /** Provides access to view and approve manual changes for all pipelines */
    public AWSCodePipelineApproverAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodePipelineApproverAccess);
    }

    /** Provides access for custom actions to poll for jobs details (including temporary credentials) and report status updates to AWS CodePipeline. */
    public AWSCodePipelineCustomActionAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodePipelineCustomActionAccess);
    }

    /** Provides full access to AWS CodeStar via the AWS Management Console. */
    public AWSCodeStarFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeStarFullAccess);
    }

    /** Allows AWS CodeStar Notifications to access Amazon CloudWatch Events on your behalf */
    public AWSCodeStarNotificationsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeStarNotificationsServiceRolePolicy);
    }

    /** DO NOT USE -  AWS CodeStar Service Role Policy which grants administrative privileges in order for CodeStar to manage IAM and other service resources on behalf of the customer. */
    public AWSCodeStarServiceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCodeStarServiceRole);
    }

    /** Denies access to certain actions, applied by the AWS team in the event that an IAM user's credentials have been compromised or exposed publicly.  Do NOT remove this policy.  Instead, please follow the instructions specified in the email sent to you regarding this event. */
    public AWSCompromisedKeyQuarantine(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCompromisedKeyQuarantine);
    }

    /** Denies access to certain actions, applied by the AWS team in the event that an IAM user's credentials have been compromised or exposed publicly. Do NOT remove this policy. Instead, please follow the instructions specified in the support case created for you regarding this event. */
    public AWSCompromisedKeyQuarantineV2(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCompromisedKeyQuarantineV2);
    }

    /** Allows Config to call AWS services and deploy config resources across organization */
    public AWSConfigMultiAccountSetupPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSConfigMultiAccountSetupPolicy);
    }

    /** Allows AWS Config to remediate noncompliant resources on your behalf. */
    public AWSConfigRemediationServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSConfigRemediationServiceRolePolicy);
    }

    /** Allows AWS Config to call read-only AWS Organizations APIs */
    public AWSConfigRoleForOrganizations(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSConfigRoleForOrganizations);
    }

    /** Allows an AWS Lambda function to access the AWS Config API and the configuration snapshots that AWS Config delivers periodically to Amazon S3. This access is required by functions that evaluate configuration changes for custom Config rules. */
    public AWSConfigRulesExecutionRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSConfigRulesExecutionRole);
    }

    /** Allows Config to call AWS services and collect resource configurations on your behalf. */
    public AWSConfigServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSConfigServiceRolePolicy);
    }

    /** Provides access to use AWS Config, including searching by tags on resources, and reading all tags. This does not provide permission to configure AWS Config, which requires administrative privileges. */
    public AWSConfigUserAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSConfigUserAccess);
    }

    /** Enables broad read/write access to ALL EC2 objects, read/write access to S3 buckets starting with 'import-to-ec2-', and the ability to list all S3 buckets, for the AWS Connector to import VMs on your behalf. */
    public AWSConnector(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSConnector);
    }

    /** Allows AWS Control Tower to call AWS services that provide automated account configuration and centralized governance on your behalf. */
    public AWSControlTowerAccountServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSControlTowerAccountServiceRolePolicy);
    }

    /** Provides access to AWS Resources managed or used by AWS Control Tower */
    public AWSControlTowerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSControlTowerServiceRolePolicy);
    }

    /** Grants permissions to to describe the organization of the account, create S3 buckets for the MAP program and apply tags to it, create a Cost and Usage Report, and describe Cost and Usage Report definitions. */
    public AWSCostAndUsageReportAutomationPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSCostAndUsageReportAutomationPolicy);
    }

    /** Grants full access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. It also provides select access to related services needed to take full advantage of AWS Data Exchange. */
    public AWSDataExchangeFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDataExchangeFullAccess);
    }

    /** Grants data provider access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. It also provides select access to related services needed to take full advantage of AWS Data Exchange. */
    public AWSDataExchangeProviderFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDataExchangeProviderFullAccess);
    }

    /** Grants read-only access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. */
    public AWSDataExchangeReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDataExchangeReadOnly);
    }

    /** Grants data subscriber access to AWS Data Exchange and AWS Marketplace actions using the AWS Management Console and SDK. It also provides select access to related services needed to take full advantage of AWS Data Exchange. */
    public AWSDataExchangeSubscriberFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDataExchangeSubscriberFullAccess);
    }

    /** Provides appropriate permissions to AWS Data Lifecycle Manager to take actions on AWS resources */
    public AWSDataLifecycleManagerServiceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDataLifecycleManagerServiceRole);
    }

    /** Provides appropriate permissions to AWS Data Lifecycle Manager to take actions on AWS resources for AMI Management */
    public AWSDataLifecycleManagerServiceRoleForAMIManagement(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDataLifecycleManagerServiceRoleForAMIManagement);
    }

    /** Provides Amazon Data Lifecycle Manager permission to perform the Systems Manager actions required to run pre and post scripts on all Amazon EC2 instances. */
    public AWSDataLifecycleManagerSSMFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDataLifecycleManagerSSMFullAccess);
    }

    /** Provides full access to Data Pipeline, list access for S3, DynamoDB, Redshift, RDS, SNS, and IAM roles, and passRole access for default Roles. */
    public AWSDataPipelineFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDataPipelineFullAccess);
    }

    /** Provides full access to Data Pipeline, list access for S3, DynamoDB, Redshift, RDS, SNS, and IAM roles, and passRole access for default Roles. */
    public AWSDataPipelinePowerUser(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDataPipelinePowerUser);
    }

    /** Allows DataSync Discovery to integrate with other AWS services on your behalf. */
    public AWSDataSyncDiscoveryServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDataSyncDiscoveryServiceRolePolicy);
    }

    /** Provides full access to AWS DataSync and minimal access to its dependencies */
    public AWSDataSyncFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDataSyncFullAccess);
    }

    /** Provides read-only access to AWS DataSync */
    public AWSDataSyncReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDataSyncReadOnlyAccess);
    }

    /** Provides AWS Deadline Cloud workers with access to run tasks on a farm. */
    public AWSDeadlineCloudFleetWorker(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeadlineCloudFleetWorker);
    }

    /** Provides user workstation access to AWS Deadline Cloud farms with limited Read-Only permissions to call other necessary services. Attach this policy to the user role associated with your studio. */
    public AWSDeadlineCloudUserAccessFarms(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeadlineCloudUserAccessFarms);
    }

    /** Provides user workstation access to AWS Deadline Cloud fleets with limited Read-Only permissions to call other necessary services. Attach this policy to the user role associated with your studio. */
    public AWSDeadlineCloudUserAccessFleets(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeadlineCloudUserAccessFleets);
    }

    /** Provides user workstation access to AWS Deadline Cloud jobs with limited Read-Only permissions to call other necessary services. Attach this policy to the user role associated with your studio. */
    public AWSDeadlineCloudUserAccessJobs(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeadlineCloudUserAccessJobs);
    }

    /** Provides user workstation access to AWS Deadline Cloud queues with limited Read-Only permissions to call other necessary services. Attach this policy to the user role associated with your studio. */
    public AWSDeadlineCloudUserAccessQueues(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeadlineCloudUserAccessQueues);
    }

    /** Provides access for AWS Deadline Cloud worker hosts to join a fleet in a farm. */
    public AWSDeadlineCloudWorkerHost(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeadlineCloudWorkerHost);
    }

    /** This policy specifies permissions required by DeepLens Administrative lambda functions that run on a DeepLens device */
    public AWSDeepLensLambdaFunctionAccessPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeepLensLambdaFunctionAccessPolicy);
    }

    /** Grants AWS DeepLens access to AWS Services, resources and roles needed by DeepLens and its dependencies including IoT, S3, GreenGrass and AWS Lambda. */
    public AWSDeepLensServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeepLensServiceRolePolicy);
    }

    /** DeepRacer admin access to all actions including toggling between multiuser and single user mode. */
    public AWSDeepRacerAccountAdminAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeepRacerAccountAdminAccess);
    }

    /** Allows CloudFormation to create and manage AWS stacks and resources on your behalf. */
    public AWSDeepRacerCloudFormationAccessPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeepRacerCloudFormationAccessPolicy);
    }

    /** DeepRacer MultiUser Default user access to use deepracer in multi-user mode */
    public AWSDeepRacerDefaultMultiUserAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeepRacerDefaultMultiUserAccess);
    }

    /** Provides full access to AWS DeepRacer. Also provides select access to related services (e.g., S3). */
    public AWSDeepRacerFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeepRacerFullAccess);
    }

    /** Allows RoboMaker to create required resources and call AWS services on your behalf. */
    public AWSDeepRacerRoboMakerAccessPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeepRacerRoboMakerAccessPolicy);
    }

    /** Allows DeepRacer to create required resources and call AWS services on your behalf. */
    public AWSDeepRacerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeepRacerServiceRolePolicy);
    }

    /** Deny all access. */
    public AWSDenyAll(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDenyAll);
    }

    /** Provides full access to all AWS Device Farm operations. */
    public AWSDeviceFarmFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeviceFarmFullAccess);
    }

    /** Grant permissions to AWS Device Farm to call EC2 Network APIs on your behalf. */
    public AWSDeviceFarmServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeviceFarmServiceRolePolicy);
    }

    /** Grant permissions to AWS Device Farm to call EC2 APIs on your behalf. */
    public AWSDeviceFarmTestGridServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDeviceFarmTestGridServiceRolePolicy);
    }

    /** Provides full access to AWS Direct Connect via the AWS Management Console. */
    public AWSDirectConnectFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDirectConnectFullAccess);
    }

    /** Provides read only access to AWS Direct Connect via the AWS Management Console. */
    public AWSDirectConnectReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDirectConnectReadOnlyAccess);
    }

    /** Provides AWS Direct Connect permission to create and manage AWS resources on your behalf. */
    public AWSDirectConnectServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDirectConnectServiceRolePolicy);
    }

    /** Provides full access to AWS Directory Service. */
    public AWSDirectoryServiceFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDirectoryServiceFullAccess);
    }

    /** Provides read only access to AWS Directory Service. */
    public AWSDirectoryServiceReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDirectoryServiceReadOnlyAccess);
    }

    /** Provides write access to AWS resources required for AWS Discovery Continuous Export */
    public AWSDiscoveryContinuousExportFirehosePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDiscoveryContinuousExportFirehosePolicy);
    }

    /** Allows DMS Fleet Advisor to manage CloudWatch metrics on your behalf. */
    public AWSDMSFleetAdvisorServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDMSFleetAdvisorServiceRolePolicy);
    }

    /** Grants AWS DMS Serverless permissions to create and manage DMS resources in your account on your behalf */
    public AWSDMSServerlessServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSDMSServerlessServiceRolePolicy);
    }

    /** Allows EC2 CapacityReservation Fleet service to manage Capacity Reservations */
    public AWSEC2CapacityReservationFleetRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSEC2CapacityReservationFleetRolePolicy);
    }

    /** Allows EC2 Fleet to launch and manage instances. */
    public AWSEC2FleetServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSEC2FleetServiceRolePolicy);
    }

    /** Allows EC2 Spot Fleet to launch and manage spot fleet instances */
    public AWSEC2SpotFleetServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSEC2SpotFleetServiceRolePolicy);
    }

    /** Allows EC2 Spot to launch and manage spot instances */
    public AWSEC2SpotServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSEC2SpotServiceRolePolicy);
    }

    /** This policy is attached to the IAM role that's attached to your Amazon EC2 Windows Instances to enable the Amazon EC2 VSS solution to create and add tags to Amazon Machine Images (AMI) and EBS Snapshots. */
    public AWSEC2VssSnapshotPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSEC2VssSnapshotPolicy);
    }

    /** Enables access to AWS services and resources used or managed by AWS ECR pull through cache */
    public AWSECRPullThroughCacheServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSECRPullThroughCacheServiceRolePolicy);
    }

    /** Provide the instance in your custom platform builder environment permission to launch EC2 instance, create EBS snapshot and AMI, stream logs to Amazon CloudWatch Logs, and store artifacts in Amazon S3. */
    public AWSElasticBeanstalkCustomPlatformforEC2Role(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkCustomPlatformforEC2Role);
    }

    /** AWS Elastic Beanstalk Service policy for Health Monitoring system */
    public AWSElasticBeanstalkEnhancedHealth(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkEnhancedHealth);
    }

    /** AWS Elastic Beanstalk Service Role policy that grants limited permissions to update your resources on your behalf for maintenance purposes. */
    public AWSElasticBeanstalkMaintenance(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkMaintenance);
    }

    /** This policy is for the AWS Elastic Beanstalk service role used to perform managed updates of Elastic Beanstalk environments. This policy should not be attached to other users or roles. The policy grants broad permissions to create and manage resources across a number of AWS services including AutoScaling, EC2, ECS, Elastic Load Balancing and CloudFormation.  This policy also allows passing of any IAM role usable with those services. */
    public AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy);
    }

    /** AWS Elastic Beanstalk Service Role policy that grants limited permissions to managed updates. */
    public AWSElasticBeanstalkManagedUpdatesServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkManagedUpdatesServiceRolePolicy);
    }

    /** Provide the instances in your multicontainer Docker environment access to use the Amazon EC2 Container Service to manage container deployment tasks. */
    public AWSElasticBeanstalkMulticontainerDocker(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkMulticontainerDocker);
    }

    /** Grants read-only permissions. Explicitly allows operators to gain direct access to retrieve information about resources related to AWS Elastic Beanstalk applications. */
    public AWSElasticBeanstalkReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkReadOnly);
    }

    /** AWSElasticBeanstalkRoleCore (Elastic Beanstalk operations role) Allows core operation of a web service environment. */
    public AWSElasticBeanstalkRoleCore(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkRoleCore);
    }

    /** (Elastic Beanstalk operations role) Allows an environment to manage Amazon CloudWatch Logs log groups. */
    public AWSElasticBeanstalkRoleCWL(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkRoleCWL);
    }

    /** (Elastic Beanstalk operations role) Allows a multicontainer Docker environment to manage Amazon ECS clusters. */
    public AWSElasticBeanstalkRoleECS(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkRoleECS);
    }

    /** (Elastic Beanstalk operations role) Allows an environment to integrate an Amazon RDS instance. */
    public AWSElasticBeanstalkRoleRDS(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkRoleRDS);
    }

    /** (Elastic Beanstalk operations role) Allows an environment to enable Amazon SNS topic integration. */
    public AWSElasticBeanstalkRoleSNS(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkRoleSNS);
    }

    /** (Elastic Beanstalk operations role) Allows a worker environment tier to create an Amazon DynamoDB table and an Amazon SQS queue. */
    public AWSElasticBeanstalkRoleWorkerTier(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkRoleWorkerTier);
    }

    /** This policy is on a deprecation path. See documentation for guidance: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-servicerole.html. AWS Elastic Beanstalk Service role policy which grants permissions to create & manage resources (i.e.: AutoScaling, EC2, S3, CloudFormation, ELB, etc.) on your behalf. */
    public AWSElasticBeanstalkService(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkService);
    }

    /** AWS Elastic Beanstalk Service Linked Role policy which grants permissions to create & manage resources (i.e.: AutoScaling, EC2, S3, CloudFormation, ELB, etc.) on your behalf. */
    public AWSElasticBeanstalkServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkServiceRolePolicy);
    }

    /** Provide the instances in your web server environment access to upload log files to Amazon S3. */
    public AWSElasticBeanstalkWebTier(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkWebTier);
    }

    /** Provide the instances in your worker environment access to upload log files to Amazon S3, to use Amazon SQS to monitor your application's job queue, to use Amazon DynamoDB to perform leader election, and to Amazon CloudWatch to publish metrics for health monitoring. */
    public AWSElasticBeanstalkWorkerTier(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticBeanstalkWorkerTier);
    }

    /** This policy allows installing the AWS Replication Agent, which is used with AWS Elastic Disaster Recovery (DRS) to recover external servers to AWS. Attach this policy to your IAM users or roles whose credentials you provide during the installation step of the AWS Replication Agent. */
    public AWSElasticDisasterRecoveryAgentInstallationPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryAgentInstallationPolicy);
    }

    /** This policy allows using the AWS Replication Agent, which is used with AWS Elastic Disaster Recovery (DRS) to recover source servers to AWS. We do not recommend that you attach this policy to your IAM users or roles. */
    public AWSElasticDisasterRecoveryAgentPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryAgentPolicy);
    }

    /** This policy provides full access to all public APIs of AWS Elastic Disaster Recovery (DRS), as well as permissions to read KMS key, License Manager, Resource Groups, Elastic Load Balancing, IAM, and EC2 information. Attach this policy to your IAM users or roles. */
    public AWSElasticDisasterRecoveryConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryConsoleFullAccess);
    }

    /** This policy provides full access to all public APIs of AWS Elastic Disaster Recovery (AWS DRS), as well as all public APIs in other AWS services used by AWS DRS Console. Attach this policy to your users or roles. */
    public AWSElasticDisasterRecoveryConsoleFullAccessV2(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryConsoleFullAccessV2);
    }

    /** This policy is attached to the AWS Elastic Disaster Recovery Conversion server's instance role. This policy allows Elastic Disaster Recovery (DRS) Conversion Servers, which are EC2 instances launched by Elastic Disaster Recovery, to communicate with the DRS service. An IAM role with this policy is attached (as an EC2 Instance Profile) by DRS to the DRS Conversion Servers, which are automatically launched and terminated by DRS, when needed. We do not recommend that you attach this policy to your IAM users or roles. DRS Conversion Servers are used by Elastic Disaster Recovery when users choose to recover source servers using the DRS console, CLI, or API. */
    public AWSElasticDisasterRecoveryConversionServerPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryConversionServerPolicy);
    }

    /** This policy allows AWS Elastic Disaster Recovery (DRS) to support cross-account replication and cross-account failback. */
    public AWSElasticDisasterRecoveryCrossAccountReplicationPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryCrossAccountReplicationPolicy);
    }

    /** This policy allows installing and using the AWS Replication Agent, which is used by AWS Elastic Disaster Recovery (DRS) to recover source servers that run on EC2 (cross-region or cross-AZ). An IAM role with this policy should be attached (as an EC2 Instance Profile) to the EC2 Instances. */
    public AWSElasticDisasterRecoveryEc2InstancePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryEc2InstancePolicy);
    }

    /** You can attach the AWSElasticDisasterRecoveryFailbackInstallationPolicy policy to your IAM identities.  This policy allows installing the Elastic Disaster Recovery Failback Client, which is used to failback Recovery Instances back to your original source infrastructure. Attach this policy to your IAM users or roles whose credentials you provide when running the Elastic Disaster Recovery Failback Client. */
    public AWSElasticDisasterRecoveryFailbackInstallationPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryFailbackInstallationPolicy);
    }

    /** This policy allows using the Elastic Disaster Recovery Failback Client, which is used to failback Recovery Instances back to your original source infrastructure. We do not recommend that you attach this policy to your IAM users or roles. */
    public AWSElasticDisasterRecoveryFailbackPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryFailbackPolicy);
    }

    /** This policy allows you to use Amazon SSM and additional services required permissions to run post-launch actions in AWS Elastic Disaster Recovery (AWS DRS). Attach this policy to your IAM roles or users. */
    public AWSElasticDisasterRecoveryLaunchActionsPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryLaunchActionsPolicy);
    }

    /** This policy allows AWS Elastic Disaster Recovery (DRS) to support network replication. */
    public AWSElasticDisasterRecoveryNetworkReplicationPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryNetworkReplicationPolicy);
    }

    /** You can attach the AWSElasticDisasterRecoveryReadOnlyAccess policy to your IAM identities.  This policy provides permissions to all read-only public APIs of Elastic Disaster Recovery (DRS), as well as some read-only APIs of other AWS services that are required in order to make full read-only use of the DRS console. Attach this policy to your IAM users or roles. */
    public AWSElasticDisasterRecoveryReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryReadOnlyAccess);
    }

    /** This policy is attached to the instance role of Elastic Disaster Recovery's Recovery Instance.  This policy allows the Elastic Disaster Recovery (DRS) Recovery Instance, which are EC2 instances launched by Elastic Disaster Recovery - to communicate with the DRS service, and to be able to failback to their original source infrastructure. An IAM role with this policy is attached (as an EC2 Instance Profile) by Elastic Disaster Recovery to the DRS Recovery Instances. We do not recommend that you attach this policy to your IAM users or roles. */
    public AWSElasticDisasterRecoveryRecoveryInstancePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryRecoveryInstancePolicy);
    }

    /** This policy is attached to the Elastic Disaster Recovery Replication server's instance role. This policy allows the Elastic Disaster Recovery (DRS) Replication Servers, which are EC2 instances launched by Elastic Disaster Recovery - to communicate with the DRS service, and to create EBS snapshots in your AWS account. An IAM role with this policy is attached (as an EC2 Instance Profile) by Elastic Disaster Recovery to the DRS Replication Servers which are automatically launched and terminated by DRS, as needed. DRS Replication Servers are used to facilitate data replication from your external servers to AWS, as part of the recovery process managed by DRS. We do not recommend that you attach this policy to your IAM users or roles. */
    public AWSElasticDisasterRecoveryReplicationServerPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryReplicationServerPolicy);
    }

    /** This policy allows Elastic Disaster Recovery to manage AWS resources on your behalf. */
    public AWSElasticDisasterRecoveryServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryServiceRolePolicy);
    }

    /** This policy allows read-only access to AWS Elastic Disaster Recovery (DRS) resources such as source servers and jobs. It also allows creating a converted snapshot and sharing that EBS snapshot with a specific account. */
    public AWSElasticDisasterRecoveryStagingAccountPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryStagingAccountPolicy);
    }

    /** This policy is used by AWS Elastic Disaster Recovery (DRS) to recover source servers into a separate target account and to allow failing back. We do not recommend that you attach this policy to your IAM users or roles. */
    public AWSElasticDisasterRecoveryStagingAccountPolicyV2(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticDisasterRecoveryStagingAccountPolicyV2);
    }

    /** Service Linked Role Policy for AWS Elastic Load Balancing Control Plane - Classic */
    public AWSElasticLoadBalancingClassicServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticLoadBalancingClassicServiceRolePolicy);
    }

    /** Service Linked Role Policy for AWS Elastic Load Balancing Control Plane */
    public AWSElasticLoadBalancingServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElasticLoadBalancingServiceRolePolicy);
    }

    /** Provides full access to AWS Elemental MediaConvert via the AWS Management Console and SDK. */
    public AWSElementalMediaConvertFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElementalMediaConvertFullAccess);
    }

    /** Provides read only access to AWS Elemental MediaConvert via the AWS Management Console and SDK. */
    public AWSElementalMediaConvertReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElementalMediaConvertReadOnly);
    }

    /** Provides full access to AWS Elemental MediaLive resources */
    public AWSElementalMediaLiveFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElementalMediaLiveFullAccess);
    }

    /** Provides read only access to AWS Elemental MediaLive resources */
    public AWSElementalMediaLiveReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElementalMediaLiveReadOnly);
    }

    /** Provides full access to AWS Elemental MediaPackage resources */
    public AWSElementalMediaPackageFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElementalMediaPackageFullAccess);
    }

    /** Provides read only access to AWS Elemental MediaPackage resources */
    public AWSElementalMediaPackageReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElementalMediaPackageReadOnly);
    }

    /** Provides full access to AWS Elemental MediaPackageV2 resources. */
    public AWSElementalMediaPackageV2FullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElementalMediaPackageV2FullAccess);
    }

    /** Provides read-only access to AWS Elemental MediaPackageV2 resources. */
    public AWSElementalMediaPackageV2ReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElementalMediaPackageV2ReadOnly);
    }

    /** Provides full read and write access to all MediaStore APIs */
    public AWSElementalMediaStoreFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElementalMediaStoreFullAccess);
    }

    /** Provides read-only permissions for MediaStore APIs */
    public AWSElementalMediaStoreReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElementalMediaStoreReadOnly);
    }

    /** Provides full access to AWS Elemental MediaTailor resources */
    public AWSElementalMediaTailorFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElementalMediaTailorFullAccess);
    }

    /** Provides read only access to AWS Elemental MediaTailor resources */
    public AWSElementalMediaTailorReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSElementalMediaTailorReadOnly);
    }

    /** Policy to enable enhanced classic networking management feature. */
    public AWSEnhancedClassicNetworkingMangementPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSEnhancedClassicNetworkingMangementPolicy);
    }

    /** Provides console full access to AWS Entity Resolution and related services. */
    public AWSEntityResolutionConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSEntityResolutionConsoleFullAccess);
    }

    /** Provides read-only access to AWS Entity Resolution via the AWS Management Console. */
    public AWSEntityResolutionConsoleReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSEntityResolutionConsoleReadOnlyAccess);
    }

    /** This policy grants the Fault Injection Simulator Service permission in EC2 and other required services to perform FIS actions. */
    public AWSFaultInjectionSimulatorEC2Access(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSFaultInjectionSimulatorEC2Access);
    }

    /** This policy grants the Fault Injection Simulator Service permission in ECS and other required services to perform FIS actions. */
    public AWSFaultInjectionSimulatorECSAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSFaultInjectionSimulatorECSAccess);
    }

    /** This policy grants the Fault Injection Simulator Service permission in EKS and other required services to perform FIS actions. */
    public AWSFaultInjectionSimulatorEKSAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSFaultInjectionSimulatorEKSAccess);
    }

    /** This policy grants the Fault Injection Simulator Service permission in EC2 networking and other required services to perform FIS actions. */
    public AWSFaultInjectionSimulatorNetworkAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSFaultInjectionSimulatorNetworkAccess);
    }

    /** This policy grants the Fault Injection Simulator Service permission in RDS and other required services to perform FIS actions. */
    public AWSFaultInjectionSimulatorRDSAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSFaultInjectionSimulatorRDSAccess);
    }

    /** This policy grants the Fault Injection Simulator Service permission in SSM and other required services to perform FIS actions. */
    public AWSFaultInjectionSimulatorSSMAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSFaultInjectionSimulatorSSMAccess);
    }

    /** Policy to enable access to AWS Service and Resources used or managed by Amazon FinSpace */
    public AWSFinSpaceServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSFinSpaceServiceRolePolicy);
    }

    /** Full access for AWS FM Administrator */
    public AWSFMAdminFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSFMAdminFullAccess);
    }

    /** Read only access for AWS FM Administrator that allows monitoring AWS FM operations */
    public AWSFMAdminReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSFMAdminReadOnlyAccess);
    }

    /** Provides read only access to AWS WAF actions for AWS Firewall Manager member accounts */
    public AWSFMMemberReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSFMMemberReadOnlyAccess);
    }

    /** Managed policy for AWS For Wordpress Plugin */
    public AWSForWordPressPluginPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSForWordPressPluginPolicy);
    }

    /** Policy which allows AWS Code Connections to sync content from your git repository */
    public AWSGitSyncServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGitSyncServiceRolePolicy);
    }

    /** Policy granting permissions to AWS Global Accelerator to manage EC2 Elastic Network Interfaces and Security Groups. */
    public AWSGlobalAcceleratorSLRPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGlobalAcceleratorSLRPolicy);
    }

    /** Provides full access to AWS Glue via the AWS Management Console */
    public AWSGlueConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGlueConsoleFullAccess);
    }

    /** Provides full access to AWS Glue via the AWS Management Console and access to sagemaker notebook instances. */
    public AWSGlueConsoleSageMakerNotebookFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGlueConsoleSageMakerNotebookFullAccess);
    }

    /** Provides full access to AWS Glue DataBrew via the AWS Management Console. Also provides select access to related services (e.g., S3, KMS, Glue). */
    public AwsGlueDataBrewFullAccessPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AwsGlueDataBrewFullAccessPolicy);
    }

    /** This policy grants permission to glue to perform action on user's glue data catalog, this policy also provides permission to ec2 actions to allow glue to create ENI to connect to resources in the VPC, also allow glue to access registered data in lakeformation and permission to access user's cloudwatch */
    public AWSGlueDataBrewServiceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGlueDataBrewServiceRole);
    }

    /** Provides full access to the AWS Glue Schema Registry Service */
    public AWSGlueSchemaRegistryFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGlueSchemaRegistryFullAccess);
    }

    /** Provides readonly access to the AWS Glue Schema Registry Service */
    public AWSGlueSchemaRegistryReadonlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGlueSchemaRegistryReadonlyAccess);
    }

    /** Policy for AWS Glue service role which allows customer to manage notebook server */
    public AWSGlueServiceNotebookRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGlueServiceNotebookRole);
    }

    /** Policy for AWS Glue service role which allows access to related services including EC2, S3, and Cloudwatch Logs */
    public AWSGlueServiceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGlueServiceRole);
    }

    /** Provides permissions that allows users to create and use only the notebook sessions that are associated with the user. This policy also includes permissions to explicitly allow users to pass a restricted Glue session role. */
    public AwsGlueSessionUserRestrictedNotebookPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AwsGlueSessionUserRestrictedNotebookPolicy);
    }

    /** Provides full access to all AWS Glue resources except for sessions. Allows users to create and use only the notebook sessions that are associated with the user. This policy also includes other permissions needed by AWS Glue to manage Glue resources in other AWS services. */
    public AwsGlueSessionUserRestrictedNotebookServiceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AwsGlueSessionUserRestrictedNotebookServiceRole);
    }

    /** Provides permissions that allows users to create and use only the interactive sessions that are associated with the user. This policy also includes permissions to explicitly allow users to pass a restricted Glue session role. */
    public AwsGlueSessionUserRestrictedPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AwsGlueSessionUserRestrictedPolicy);
    }

    /** Provides full access to all AWS Glue resources except for sessions. Allows users to create and use only the interactive sessions that are associated with the user. This policy also includes other permissions needed by AWS Glue to manage Glue resources in other AWS services */
    public AwsGlueSessionUserRestrictedServiceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AwsGlueSessionUserRestrictedServiceRole);
    }

    /** Provides access within Amazon Grafana to create and manage workspaces for the entire organization. */
    public AWSGrafanaAccountAdministrator(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGrafanaAccountAdministrator);
    }

    /** Access to read only operations in Amazon Grafana. */
    public AWSGrafanaConsoleReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGrafanaConsoleReadOnlyAccess);
    }

    /** Provides only the ability to update user and group permissions for AWS Grafana workspaces. */
    public AWSGrafanaWorkspacePermissionManagement(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGrafanaWorkspacePermissionManagement);
    }

    /** Provides ability to update IAM Identity Center (IdC) user and group permissions for Amazon Managed Grafana workspaces. */
    public AWSGrafanaWorkspacePermissionManagementV2(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGrafanaWorkspacePermissionManagementV2);
    }

    /** This policy gives full access to the AWS Greengrass configuration, management and deployment actions */
    public AWSGreengrassFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGreengrassFullAccess);
    }

    /** This policy gives read only access to the AWS Greengrass configuration, management and deployment actions */
    public AWSGreengrassReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGreengrassReadOnlyAccess);
    }

    /** Policy for AWS Greengrass service role which allows access to related services including AWS Lambda and AWS IoT thing shadows. */
    public AWSGreengrassResourceAccessRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGreengrassResourceAccessRolePolicy);
    }

    /** Provides the Dataflow Endpoint Instance permissions to use the AWS Ground Station Agent */
    public AWSGroundStationAgentInstancePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSGroundStationAgentInstancePolicy);
    }

    /** Allows AWS Health to enable the Health event processor feature. */
    public AWSHealthEventProcessorServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSHealthEventProcessorServiceRolePolicy);
    }

    /** Allows full access to the AWS Health Apis and Notifications and the Personal Health Dashboard */
    public AWSHealthFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSHealthFullAccess);
    }

    /** Provides full access to AWS Health Imaging service. */
    public AWSHealthImagingFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSHealthImagingFullAccess);
    }

    /** Provides read only access to AWS Health Imaging service. */
    public AWSHealthImagingReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSHealthImagingReadOnlyAccess);
    }

    /** Provides the list of actions that are allowed for roles assumed with the IAM Identity Center identity context. AWS Security Token Service (AWS STS) automatically attaches this policy to assumed roles. The identity context is passed as ProvidedContext. */
    public AWSIAMIdentityCenterAllowListForIdentityContext(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIAMIdentityCenterAllowListForIdentityContext);
    }

    /** Grants full access to the Identity Sync service */
    public AWSIdentitySyncFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIdentitySyncFullAccess);
    }

    /** Read only access to the Identity Sync service */
    public AWSIdentitySyncReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIdentitySyncReadOnlyAccess);
    }

    /** Provides full access to all AWS Image Builder actions and resource scoped access to related AWS services. */
    public AWSImageBuilderFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSImageBuilderFullAccess);
    }

    /** Provides read only access to all AWS Image Builder actions. */
    public AWSImageBuilderReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSImageBuilderReadOnlyAccess);
    }

    /** Provides read and write access to the jobs created under the AWS account. */
    public AWSImportExportFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSImportExportFullAccess);
    }

    /** Provides read only access to the jobs created under the AWS account. */
    public AWSImportExportReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSImportExportReadOnlyAccess);
    }

    /** Grants Incident Manager permissions to call other AWS services as a part of managing an incident. */
    public AWSIncidentManagerIncidentAccessServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIncidentManagerIncidentAccessServiceRolePolicy);
    }

    /** This policy grants permissions to start, view, and update incidents with full access to custom timeline events & related items. Assign this policy to users who will create and resolve incidents. */
    public AWSIncidentManagerResolverAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIncidentManagerResolverAccess);
    }

    /** This policy grants Incident Manager permission to manage incident records and related resources on your behalf. */
    public AWSIncidentManagerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIncidentManagerServiceRolePolicy);
    }

    /** Provides full access to AWS IoT 1-Click. */
    public AWSIoT1ClickFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoT1ClickFullAccess);
    }

    /** Provides read only access to AWS IoT 1-Click. */
    public AWSIoT1ClickReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoT1ClickReadOnlyAccess);
    }

    /** Provides full access to IoT Analytics. */
    public AWSIoTAnalyticsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTAnalyticsFullAccess);
    }

    /** Provides read only access to IoT Analytics. */
    public AWSIoTAnalyticsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTAnalyticsReadOnlyAccess);
    }

    /** This policy gives full access to the AWS IoT configuration actions */
    public AWSIoTConfigAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTConfigAccess);
    }

    /** This policy gives read only access to the AWS IoT configuration actions */
    public AWSIoTConfigReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTConfigReadOnlyAccess);
    }

    /** This policy gives full access to the AWS IoT messaging actions */
    public AWSIoTDataAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTDataAccess);
    }

    /** Provides write access to IoT thing groups and read access to IoT Certificates for execution of ADD_THINGS_TO_THING_GROUP mitigation action */
    public AWSIoTDeviceDefenderAddThingsToThingGroupMitigationAction(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTDeviceDefenderAddThingsToThingGroupMitigationAction);
    }

    /** Provides read access for IoT and related resources */
    public AWSIoTDeviceDefenderAudit(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTDeviceDefenderAudit);
    }

    /** Provides access for enabling IoT logging for execution of ENABLE_IOT_LOGGING mitigation action */
    public AWSIoTDeviceDefenderEnableIoTLoggingMitigationAction(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTDeviceDefenderEnableIoTLoggingMitigationAction);
    }

    /** Provides messages publish access to SNS topic for execution of PUBLISH_FINDING_TO_SNS mitigation action */
    public AWSIoTDeviceDefenderPublishFindingsToSNSMitigationAction(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTDeviceDefenderPublishFindingsToSNSMitigationAction);
    }

    /** Provides write access to IoT policies for execution of REPLACE_DEFAULT_POLICY_VERSION mitigation action */
    public AWSIoTDeviceDefenderReplaceDefaultPolicyMitigationAction(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTDeviceDefenderReplaceDefaultPolicyMitigationAction);
    }

    /** Provides write access to IoT CA certificates for execution of  UPDATE_CA_CERTIFICATE mitigation action */
    public AWSIoTDeviceDefenderUpdateCACertMitigationAction(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTDeviceDefenderUpdateCACertMitigationAction);
    }

    /** Provides write access to IoT certificates for execution of UPDATE_DEVICE_CERTIFICATE mitigation action */
    public AWSIoTDeviceDefenderUpdateDeviceCertMitigationAction(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTDeviceDefenderUpdateDeviceCertMitigationAction);
    }

    /** Allows AWS IoT Device Tester to run the FreeRTOS qualification suite by allowing access to services including IoT, S3, and IAM */
    public AWSIoTDeviceTesterForFreeRTOSFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTDeviceTesterForFreeRTOSFullAccess);
    }

    /** Allows AWS IoT Device Tester to run the AWS Greengrass qualification suite by allowing access to related services including Lambda, IoT, API Gateway, IAM */
    public AWSIoTDeviceTesterForGreengrassFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTDeviceTesterForGreengrassFullAccess);
    }

    /** Provides full access to IoT Events. */
    public AWSIoTEventsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTEventsFullAccess);
    }

    /** Provides read only access to IoT Events. */
    public AWSIoTEventsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTEventsReadOnlyAccess);
    }

    /** Federation access for IoT Fleet Hub applications */
    public AWSIoTFleetHubFederationAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTFleetHubFederationAccess);
    }

    /** Grants permissions to AWS Resources and metaData used or managed by AWSIoTFleetwise for auxiliary features */
    public AWSIoTFleetwiseServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTFleetwiseServiceRolePolicy);
    }

    /** This policy gives full access to the AWS IoT configuration and messaging actions */
    public AWSIoTFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTFullAccess);
    }

    /** Allows creation of Amazon CloudWatch Log groups and streaming logs to the groups */
    public AWSIoTLogging(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTLogging);
    }

    /** Allows access to create AWS IoT Job and describe the AWS code signer job */
    public AWSIoTOTAUpdate(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTOTAUpdate);
    }

    /** Allows access to all AWS services supported in AWS IoT Rule Actions */
    public AWSIoTRuleActions(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTRuleActions);
    }

    /** Provides full access to manage AWS IoT SiteWise using the AWS Management Console. Note this policy also grants access to create and list data stores used with AWS IoT SiteWise (e.g. AWS IoT Analytics), access to list and view AWS IoT Greengrass resources, list and modify AWS Secrets Manager secrets, retrieve AWS IoT thing shadows, list resources with specific tags, and create and use a service-linked role for AWS IoT SiteWise. */
    public AWSIoTSiteWiseConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTSiteWiseConsoleFullAccess);
    }

    /** Provides full access to IoT SiteWise. */
    public AWSIoTSiteWiseFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTSiteWiseFullAccess);
    }

    /** This policy grants permissions to access AWS IoT SiteWise assets and asset data, create AWS IoT SiteWise Monitor resources, and list AWS SSO users. */
    public AWSIoTSiteWiseMonitorPortalAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTSiteWiseMonitorPortalAccess);
    }

    /** This role grants AWS IoT SiteWise monitor permissions to access your AWS IoT SiteWise assets & asset properties, and create AWS IoT Sitewise projects, dashboards & access policies through AWS IoT SiteWise portals. */
    public AWSIoTSiteWiseMonitorServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTSiteWiseMonitorServiceRolePolicy);
    }

    /** Provides read only access to IoT SiteWise. */
    public AWSIoTSiteWiseReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTSiteWiseReadOnlyAccess);
    }

    /** This policy allows users to register things at bulk using AWS IoT StartThingRegistrationTask API */
    public AWSIoTThingsRegistration(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTThingsRegistration);
    }

    /** Allows AWS IoT TwinMaker to call other AWS services and to sync their resources on your behalf. */
    public AWSIoTTwinMakerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTTwinMakerServiceRolePolicy);
    }

    /** Allows the associated identity data access to AWS IoT Wireless devices. */
    public AWSIoTWirelessDataAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTWirelessDataAccess);
    }

    /** Allows the associated identity full access to all AWS IoT Wireless operations. */
    public AWSIoTWirelessFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTWirelessFullAccess);
    }

    /** Provides IoT Wireless full access to publish to IoT Rules Engine on your behalf. */
    public AWSIoTWirelessFullPublishAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTWirelessFullPublishAccess);
    }

    /** Allows the associated identity access to create, list and describe IoT Certificates */
    public AWSIoTWirelessGatewayCertManager(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTWirelessGatewayCertManager);
    }

    /** Allows the associated identity to create Amazon CloudWatch Logs groups and stream logs to the groups. */
    public AWSIoTWirelessLogging(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTWirelessLogging);
    }

    /** Allows the associated identity read only access to AWS IoT wireless. */
    public AWSIoTWirelessReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIoTWirelessReadOnlyAccess);
    }

    /** Allows VPC IP Address Manager to access VPC resources and integrate with AWS Organizations on your behalf. */
    public AWSIPAMServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIPAMServiceRolePolicy);
    }

    /** Used by AWS IQ to execute payment requests on behalf of a customer */
    public AWSIQContractServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIQContractServiceRolePolicy);
    }

    /** Provides full access to AWS IQ */
    public AWSIQFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIQFullAccess);
    }

    /** Allows AWS IQ to manage the role assumed by AWS IQ experts. */
    public AWSIQPermissionServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSIQPermissionServiceRolePolicy);
    }

    /** Enables access to AWS services and resources required for AWS KMS custom key stores */
    public AWSKeyManagementServiceCustomKeyStoresServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSKeyManagementServiceCustomKeyStoresServiceRolePolicy);
    }

    /** Enables AWS KMS to synchronize the shared properties of multi-Region keys. */
    public AWSKeyManagementServiceMultiRegionKeysServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSKeyManagementServiceMultiRegionKeysServiceRolePolicy);
    }

    /** Provides access to AWS Key Management Service (KMS). */
    public AWSKeyManagementServicePowerUser(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSKeyManagementServicePowerUser);
    }

    /** Provides cross account access to Glue resources via Lake Formation. Also grants read access to other required services such as organizations and resource access manager */
    public AWSLakeFormationCrossAccountManager(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLakeFormationCrossAccountManager);
    }

    /** Grants administrative access to AWS Lake Formation and related services, such as AWS Glue, to manage data lakes */
    public AWSLakeFormationDataAdmin(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLakeFormationDataAdmin);
    }

    /** Grants full access to AWS Lambda service, AWS Lambda console features, and other related AWS services. */
    public AWSLambdaFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLambdaFullAccess);
    }

    /** Grants read-only access to AWS Lambda service, AWS Lambda console features, and other related AWS services. */
    public AWSLambdaReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLambdaReadOnlyAccess);
    }

    /** Provides write permissions to CloudWatch Logs. */
    public AWSLambdaBasicExecutionRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLambdaBasicExecutionRole);
    }

    /** Provides list and read access to DynamoDB streams and write permissions to CloudWatch logs. */
    public AWSLambdaDynamoDBExecutionRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLambdaDynamoDBExecutionRole);
    }

    /** Provides minimum permissions for a Lambda function to manage ENIs (create, describe, delete) used by a VPC-enabled Lambda Function. */
    public AWSLambdaENIManagementAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLambdaENIManagementAccess);
    }

    /** Provides Put, Get access to S3 and full access to CloudWatch Logs. */
    public AWSLambdaExecute(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLambdaExecute);
    }

    /** Provides read access to DynamoDB Streams. */
    public AWSLambdaInvocationDynamoDB(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLambdaInvocationDynamoDB);
    }

    /** Provides list and read access to Kinesis streams and write permissions to CloudWatch logs. */
    public AWSLambdaKinesisExecutionRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLambdaKinesisExecutionRole);
    }

    /** Provides permissions required to access MSK Cluster within a VPC, manage ENIs (create, describe, delete) in the VPC and write permissions to CloudWatch Logs. */
    public AWSLambdaMSKExecutionRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLambdaMSKExecutionRole);
    }

    /** Grants Lambda Replicator necessary permissions to replicate functions across regions */
    public AWSLambdaReplicator(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLambdaReplicator);
    }

    /** Default policy for AWS Lambda service role. */
    public AWSLambdaRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLambdaRole);
    }

    /** Provides receive message, delete message, and read attribute access to SQS queues, and write permissions to CloudWatch logs. */
    public AWSLambdaSQSQueueExecutionRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLambdaSQSQueueExecutionRole);
    }

    /** Provides minimum permissions for a Lambda function to execute while accessing a resource within a VPC - create, describe, delete network interfaces and write permissions to CloudWatch Logs. */
    public AWSLambdaVPCAccessExecutionRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLambdaVPCAccessExecutionRole);
    }

    /** Provides permissions to allow access to the AWS License Manager API actions required to consume upon licenses that the user has entitlements. */
    public AWSLicenseManagerConsumptionPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLicenseManagerConsumptionPolicy);
    }

    /** Allows AWS License Manager Linux Subscriptions Service to manage resources on your behalf. */
    public AWSLicenseManagerLinuxSubscriptionsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLicenseManagerLinuxSubscriptionsServiceRolePolicy);
    }

    /** AWS License Manager service master account role policy */
    public AWSLicenseManagerMasterAccountRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLicenseManagerMasterAccountRolePolicy);
    }

    /** AWS License Manager service member account role policy */
    public AWSLicenseManagerMemberAccountRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLicenseManagerMemberAccountRolePolicy);
    }

    /** AWS License Manager service default role policy */
    public AWSLicenseManagerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLicenseManagerServiceRolePolicy);
    }

    /** Allows AWS License Manager User Subscriptions Service to manage resources on your behalf. */
    public AWSLicenseManagerUserSubscriptionsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSLicenseManagerUserSubscriptionsServiceRolePolicy);
    }

    /** Allows AWS M2 to manage AWS resources on your behalf. */
    public AWSM2ServicePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSM2ServicePolicy);
    }

    /** Allows AWS Managed Services to read the values of the tags on AWS resources */
    public AWSManagedServicesContactsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSManagedServicesContactsServiceRolePolicy);
    }

    /** AWS Managed Services - policy to manage detective controls infrastructure */
    public AWSManagedServicesDetectiveControlsConfigServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSManagedServicesDetectiveControlsConfigServiceRolePolicy);
    }

    /** AWS Managed Services policy to enable AMS event processor feature. */
    public AWSManagedServicesEventsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSManagedServicesEventsServiceRolePolicy);
    }

    /** Allows AWS Managed Services to manage deployment toolkit on your behalf. */
    public AWSManagedServicesDeploymentToolkitPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSManagedServicesDeploymentToolkitPolicy);
    }

    /** Allows AWS Marketplace to copy your Amazon Machine Images (AMIs) in order to list them on AWS Marketplace */
    public AWSMarketplaceAmiIngestion(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceAmiIngestion);
    }

    /** Allows AWS Marketplace to create and manage seller deployment parameters for the products that you subscribe to on AWS Marketplace. */
    public AWSMarketplaceDeploymentServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceDeploymentServiceRolePolicy);
    }

    /** Provides the ability to subscribe and unsubscribe to AWS Marketplace software, allows users to manage Marketplace software instances from the Marketplace 'Your Software' page, and provides administrative access to EC2. */
    public AWSMarketplaceFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceFullAccess);
    }

    /** Provides read access to AWS Marketplace Entitlements */
    public AWSMarketplaceGetEntitlements(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceGetEntitlements);
    }

    /** Provides full access to AWS Marketplace Private Image Build Feature. In addition to create private images, it also provides permissions to add tags to images, launch and terminate ec2 instances. */
    public AWSMarketplaceImageBuildFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceImageBuildFullAccess);
    }

    /** Enables access to AWS Services and Resources used or managed by AWS Marketplace for license management. */
    public AWSMarketplaceLicenseManagementServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceLicenseManagementServiceRolePolicy);
    }

    /** Provides the ability to subscribe and unsubscribe to AWS Marketplace software */
    public AWSMarketplaceManageSubscriptions(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceManageSubscriptions);
    }

    /** Provides full access to AWS Marketplace Metering. */
    public AWSMarketplaceMeteringFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceMeteringFullAccess);
    }

    /** Provides permissions to register a resource and track usage through AWS Marketplace Metering Service. */
    public AWSMarketplaceMeteringRegisterUsage(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceMeteringRegisterUsage);
    }

    /** Provides full access to all administrative actions for an AWS Marketplace eProcurement integration. */
    public AWSMarketplaceProcurementSystemAdminFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceProcurementSystemAdminFullAccess);
    }

    /** Enables access for AWS Marketplace services to purchase order management. */
    public AWSMarketplacePurchaseOrdersServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplacePurchaseOrdersServiceRolePolicy);
    }

    /** Provides the ability to review AWS Marketplace subscriptions */
    public AWSMarketplaceReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceReadOnly);
    }

    /** Enables access to AWS Services and Resources used or managed by AWS Marketplace for Resale Authorization. */
    public AWSMarketplaceResaleAuthorizationServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceResaleAuthorizationServiceRolePolicy);
    }

    /** Provides full access to all seller operations on the AWS Marketplace and other AWS services such as AMI management. */
    public AWSMarketplaceSellerFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceSellerFullAccess);
    }

    /** Provides sellers full access to AWS Marketplace Management Products page and other AWS services such as AMI management. */
    public AWSMarketplaceSellerProductsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceSellerProductsFullAccess);
    }

    /** Provide sellers read-only access to AWS Marketplace Management Products page. */
    public AWSMarketplaceSellerProductsReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMarketplaceSellerProductsReadOnly);
    }

    /** The default policy that enables access to AWS Services and Resources used or managed by MediaConnect. */
    public AWSMediaConnectServicePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMediaConnectServicePolicy);
    }

    /** Enable access to AWS Resources used or managed by MediaTailor */
    public AWSMediaTailorServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMediaTailorServiceRolePolicy);
    }

    /** Policy allows AWSMigrationHubService to call AWSApplicationDiscoveryService on behalf of the customer. */
    public AWSMigrationHubDiscoveryAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubDiscoveryAccess);
    }

    /** Policy for Database Migration Service to assume role in customer's account to call Migration Hub */
    public AWSMigrationHubDMSAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubDMSAccess);
    }

    /** Managed policy to provide the customer access to the Migration Hub Service */
    public AWSMigrationHubFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubFullAccess);
    }

    /** Provides limited access to AWS Migration Hub, AWS Application Discovery Service, Amazon Simple Storage Service and AWS Secrets Manager. This policy also grants full access to AWS Migration Hub Orchestrator service. */
    public AWSMigrationHubOrchestratorConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubOrchestratorConsoleFullAccess);
    }

    /** This policy needs to be attached for SAP and MGN migrated instance for our service to orchestrate instances by downloading scripts from S3 and to fetch secret values inside EC2 instance. */
    public AWSMigrationHubOrchestratorInstanceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubOrchestratorInstanceRolePolicy);
    }

    /** Provides limited access to Amazon Simple Storage Service, AWS Secrets Manager and Plugin related actions for AWS Migration Hub Orchestrator. */
    public AWSMigrationHubOrchestratorPlugin(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubOrchestratorPlugin);
    }

    /** Provides permissions necessary for Migration Hub Orchestrator to migrate and modernize your on-premises workloads */
    public AWSMigrationHubOrchestratorServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubOrchestratorServiceRolePolicy);
    }

    /** Grants full access to AWS Migration Hub Refactor Spaces and other AWS related services except AWS Transit Gateway and EC2 security groups not required when using environments without a network bridge. This policy also excludes permissions required for AWS Lambda and AWS Resource Access Manager as they can be scoped down based on tags. */
    public AWSMigrationHubRefactorSpacesEnvironmentsWithoutBridgesFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubRefactorSpacesEnvironmentsWithoutBridgesFullAccess);
    }

    /** Use in the IAM service role passed to the SSM Automation document AWSRefactorSpaces-CreateResources to grant permissions required to run the automation. The policy grants read/write access to EC2 tags in order to track automation progress. When the Refactor Spaces environment's network bridge is enabled, the automation also adds the environment's security group to the EC2 instance to permit traffic from other Refactor Spaces services in the environment. The policy also grants access to the Application Migration Service's post launch actions SSM parameters. */
    public AWSMigrationHubRefactorSpacesSSMAutomationPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubRefactorSpacesSSMAutomationPolicy);
    }

    /** Grants full access to AWS MigrationHub Refactor Spaces, AWS MigrationHub Refactor Spaces console features and other related AWS services except permissions required for AWS Lambda and AWS Resource Access Manager as they can be scoped down based on tags. */
    public AWSMigrationHubRefactorSpacesFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubRefactorSpacesFullAccess);
    }

    /** Provides access to AWS Resources managed or used by AWS Migration Hub Refactor Spaces. */
    public AWSMigrationHubRefactorSpacesServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubRefactorSpacesServiceRolePolicy);
    }

    /** Policy for Server Migration Service to assume role in customer's account to call Migration Hub */
    public AWSMigrationHubSMSAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubSMSAccess);
    }

    /** Grants permissions to allow communication with the AWS Migration Hub Strategy Recommendations service, read/write access to S3 buckets related to the service, Amazon API Gateway access to upload logs and metrics to AWS, AWS Secrets Manager access to fetch credentials, and any related services. */
    public AWSMigrationHubStrategyCollector(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubStrategyCollector);
    }

    /** Grants full access to the AWS Migration Hub Strategy Recommendations service and access to related AWS services through the AWS Management Console. */
    public AWSMigrationHubStrategyConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubStrategyConsoleFullAccess);
    }

    /** Enable access to AWS Resources used or managed by AWS Migration Hub Strategy Recommendations service. */
    public AWSMigrationHubStrategyServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMigrationHubStrategyServiceRolePolicy);
    }

    /** Grants permissions to Amazon MSK Replicator to replicate data between MSK Clusters. */
    public AWSMSKReplicatorExecutionRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSMSKReplicatorExecutionRole);
    }

    /** Allow AWSNetworkFirewall to create and manage necessary resources for your Firewalls. */
    public AWSNetworkFirewallServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSNetworkFirewallServiceRolePolicy);
    }

    /** Allow NetworkManager to access resources associated with your Core Network */
    public AWSNetworkManagerCloudWANServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSNetworkManagerCloudWANServiceRolePolicy);
    }

    /** Provides full access to Amazon NetworkManager via the AWS Management Console. */
    public AWSNetworkManagerFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSNetworkManagerFullAccess);
    }

    /** Provides read only access to Amazon NetworkManager via the AWS Management Console. */
    public AWSNetworkManagerReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSNetworkManagerReadOnlyAccess);
    }

    /** Allow NetworkManager to access resources associated with your Global Networks */
    public AWSNetworkManagerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSNetworkManagerServiceRolePolicy);
    }

    /** Provides full access to AWS OpsWorks. */
    public AWSOpsWorksFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSOpsWorksFullAccess);
    }

    /** Enables OpsWorks instances with the CWLogs integration enabled to ship logs and create required log groups */
    public AWSOpsWorksCloudWatchLogs(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSOpsWorksCloudWatchLogs);
    }

    /** Provides S3 access for instances launched by OpsWorks CM. */
    public AWSOpsWorksCMInstanceProfileRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSOpsWorksCMInstanceProfileRole);
    }

    /** Service Role Policy to be used for Creating OpsWorks CM servers. */
    public AWSOpsWorksCMServiceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSOpsWorksCMServiceRole);
    }

    /** Provides access for an Amazon EC2 instance to register with an AWS OpsWorks stack. */
    public AWSOpsWorksInstanceRegistration(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSOpsWorksInstanceRegistration);
    }

    /** Policy to enable registration of EC2 instances via the OpsWorks CLI */
    public AWSOpsWorksRegisterCLIEC2(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSOpsWorksRegisterCLIEC2);
    }

    /** Policy to enable registration of On-Premises instances via the OpsWorks CLI */
    public AWSOpsWorksRegisterCLIOnPremises(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSOpsWorksRegisterCLIOnPremises);
    }

    /** Provides full access to AWS Organizations. */
    public AWSOrganizationsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSOrganizationsFullAccess);
    }

    /** Provides read-only access to AWS Organizations. */
    public AWSOrganizationsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSOrganizationsReadOnlyAccess);
    }

    /** A policy to allow AWS Organizations to share trust with other approved AWS Services for the purpose of simplifying customer configuration. */
    public AWSOrganizationsServiceTrustPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSOrganizationsServiceTrustPolicy);
    }

    /** This policy grants permissions that allow you to install an Outpost server on your on-premises network. */
    public AWSOutpostsAuthorizeServerPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSOutpostsAuthorizeServerPolicy);
    }

    /** Service Linked Role policy to enable access to AWS resources managed by AWS Outposts */
    public AWSOutpostsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSOutpostsServiceRolePolicy);
    }

    /** Allows AWS IoT software on an AWS Panorama Appliance to upload logs to Amazon CloudWatch. */
    public AWSPanoramaApplianceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPanoramaApplianceRolePolicy);
    }

    /** Allows an AWS Panorama Appliance to upload logs to Amazon CloudWatch, and to get objects from Amazon S3 access points created for use with AWS Panorama. */
    public AWSPanoramaApplianceServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPanoramaApplianceServiceRolePolicy);
    }

    /** Provides full access to AWS Panorama */
    public AWSPanoramaFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPanoramaFullAccess);
    }

    /** Allows an AWS Lambda function on an AWS Panorama Appliance to manage resources in Panorama, upload logs and metrics to Amazon CloudWatch, and to manage objects in buckets created for use with Panorama. */
    public AWSPanoramaGreengrassGroupRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPanoramaGreengrassGroupRolePolicy);
    }

    /** Allows Amazon SageMaker to manage objects in buckets created for use with AWS Panorama. */
    public AWSPanoramaSageMakerRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPanoramaSageMakerRolePolicy);
    }

    /** Allows AWS Panorama to manage resources in AWS IoT, AWS Secrets Manager and AWS Panorama. */
    public AWSPanoramaServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPanoramaServiceLinkedRolePolicy);
    }

    /** Allows AWS Panorama to manage resources in Amazon S3, AWS IoT, AWS IoT GreenGrass, AWS Lambda, Amazon SageMaker, and Amazon CloudWatch Logs, and to pass service roles to AWS IoT, AWS IoT GreenGrass, and Amazon SageMaker. */
    public AWSPanoramaServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPanoramaServiceRolePolicy);
    }

    /** Provides full access to AWS Price List Service. */
    public AWSPriceListServiceFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPriceListServiceFullAccess);
    }

    /** Provides auditor access to AWS Private Certificate Authority */
    public AWSPrivateCAAuditor(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPrivateCAAuditor);
    }

    /** Provides full access to AWS Private Certificate Authority */
    public AWSPrivateCAFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPrivateCAFullAccess);
    }

    /** Provides privileged certificate user access to AWS Private Certificate Authority */
    public AWSPrivateCAPrivilegedUser(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPrivateCAPrivilegedUser);
    }

    /** Provides read only access to AWS Private Certificate Authority */
    public AWSPrivateCAReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPrivateCAReadOnly);
    }

    /** Provides certificate user access to AWS Private Certificate Authority */
    public AWSPrivateCAUser(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPrivateCAUser);
    }

    /** Provides full access to all administrative actions for an AWS Private Marketplace. */
    public AWSPrivateMarketplaceAdminFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPrivateMarketplaceAdminFullAccess);
    }

    /** Provides access to creating requests in an AWS Private Marketplace. */
    public AWSPrivateMarketplaceRequests(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPrivateMarketplaceRequests);
    }

    /** Allows AWS Private Networks Service to manage resources on behalf of the customer. */
    public AWSPrivateNetworksServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPrivateNetworksServiceRolePolicy);
    }

    /** Permissions CodeBuild needs to run a build for AWS Proton CodeBuild Provisioning. */
    public AWSProtonCodeBuildProvisioningBasicAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSProtonCodeBuildProvisioningBasicAccess);
    }

    /** Allows AWS Proton to manage Proton resource provisioning using CodeBuild and other AWS services on your behalf. */
    public AWSProtonCodeBuildProvisioningServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSProtonCodeBuildProvisioningServiceRolePolicy);
    }

    /** Provides access to the AWS Proton APIs and Management Console, but does not allow administration of Proton templates or environments. */
    public AWSProtonDeveloperAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSProtonDeveloperAccess);
    }

    /** Provides full access to the AWS Proton APIs and Management Console. In addition to these permissions, access to Amazon S3 is also needed to register template bundles from your S3 buckets, as well as access to Amazon IAM to create and manage the service roles for Proton. */
    public AWSProtonFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSProtonFullAccess);
    }

    /** Provides read only access to the AWS Proton APIs and Management Console. */
    public AWSProtonReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSProtonReadOnlyAccess);
    }

    /** Policy which allows AWS Proton to sync your service, environment and component definitions from your git repository to AWS Proton. */
    public AWSProtonServiceGitSyncServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSProtonServiceGitSyncServiceRolePolicy);
    }

    /** Policy which allows AWS Proton to sync your git repository contents to Proton or sync Proton contents to your git repositories. */
    public AWSProtonSyncServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSProtonSyncServiceRolePolicy);
    }

    /** Grants permissions to view and modify purchase orders on billing console */
    public AWSPurchaseOrdersServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSPurchaseOrdersServiceRolePolicy);
    }

    /** The AWSQuickSetupCFGCPacksPermissionsBoundary policy defines the list of permissions that are permitted in an IAM role created by Quick Setup. Quick Setup uses a role created with this policy to deploy AWS Config conformance packs. */
    public AWSQuickSetupCFGCPacksPermissionsBoundary(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSetupCFGCPacksPermissionsBoundary);
    }

    /** Provides permissions for AWS Systems Manager Quick Setup to deploy multiple configuration types. These configuration types create IAM roles and automations that configure frequently used Amazon Web Services services and features with recommended best practices. */
    public AWSQuickSetupDeploymentRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSetupDeploymentRolePolicy);
    }

    /** The AWSQuickSetupDevOpsGuruPermissionsBoundary policy defines the list of permissions that are permitted in an IAM role created by Quick Setup. Quick Setup uses a role created with this policy to enable and configure Amazon DevOps Guru. This policy also provides permissions to enable Systems Manager Explorer. */
    public AWSQuickSetupDevOpsGuruPermissionsBoundary(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSetupDevOpsGuruPermissionsBoundary);
    }

    /** QuickSetup creates IAM roles which enable it to configure the Systems Manager Distributor feature on your behalf, and uses this policy when creating such roles to define the boundary of their permissions. */
    public AWSQuickSetupDistributorPermissionsBoundary(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSetupDistributorPermissionsBoundary);
    }

    /** Provides read-only permissions to access patch baselines that have been configured by an administrator in the current AWS account or organization using Quick Setup. */
    public AWSQuickSetupPatchPolicyBaselineAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSetupPatchPolicyBaselineAccess);
    }

    /** Provides permissions that allow Quick Setup to create resources associated with a patch policy configuration. */
    public AWSQuickSetupPatchPolicyDeploymentRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSetupPatchPolicyDeploymentRolePolicy);
    }

    /** QuickSetup creates IAM roles which enable it to configure the Systems Manager Patch Manager feature on your behalf, and uses this policy when creating such roles to define the boundary of their permissions. */
    public AWSQuickSetupPatchPolicyPermissionsBoundary(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSetupPatchPolicyPermissionsBoundary);
    }

    /** The AWSQuickSetupSchedulerPermissionsBoundary policy defines the list of permissions that are permitted in an IAM role created by Quick Setup. Quick Setup uses a role created with this policy to enable and configure scheduled operations on Amazon EC2 instances and other resources. */
    public AWSQuickSetupSchedulerPermissionsBoundary(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSetupSchedulerPermissionsBoundary);
    }

    /** Quick Setup creates IAM roles which enable it to configure the Host Manager Quick Setup type on your behalf, and uses this policy when creating such roles to define the boundary of their permissions. */
    public AWSQuickSetupSSMHostMgmtPermissionsBoundary(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSetupSSMHostMgmtPermissionsBoundary);
    }

    /** Provides the set of permissions required to perform QuickSight Asset Bundle Export Operations */
    public AWSQuickSightAssetBundleExportPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSightAssetBundleExportPolicy);
    }

    /** Provides the set of permissions required to perform QuickSight Asset Bundle Import Operations */
    public AWSQuickSightAssetBundleImportPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSightAssetBundleImportPolicy);
    }

    /** Quicksight access to Athena API and S3 buckets used for Athena query results */
    public AWSQuicksightAthenaAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuicksightAthenaAccess);
    }

    /** Allow QuickSight to describe the RDS resources */
    public AWSQuickSightDescribeRDS(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSightDescribeRDS);
    }

    /** Allow QuickSight to describe Redshift resources */
    public AWSQuickSightDescribeRedshift(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSightDescribeRedshift);
    }

    /** Provides access to Amazon Elasticsearch resources from Amazon QuickSight */
    public AWSQuickSightElasticsearchPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSightElasticsearchPolicy);
    }

    /** Give QuickSight read-only access to IoT Analytics datasets */
    public AWSQuickSightIoTAnalyticsAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSightIoTAnalyticsAccess);
    }

    /** Allow QuickSight to list IAM entities */
    public AWSQuickSightListIAM(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSightListIAM);
    }

    /** Provides access to Amazon OpenSearch resources from Amazon QuickSight */
    public AWSQuicksightOpenSearchPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuicksightOpenSearchPolicy);
    }

    /** Provides access to Amazon SageMaker resources from Amazon QuickSight */
    public AWSQuickSightSageMakerPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSightSageMakerPolicy);
    }

    /** AWS QuickSight access to AWS Timestream APIs. Customers can attach this policy to AWS QuickSight role to allow retrieval of data and metadata. */
    public AWSQuickSightTimestreamPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSQuickSightTimestreamPolicy);
    }

    /** Allows VPC Reachability Analyzer to access AWS resources and integrate with AWS Organizations on your behalf. */
    public AWSReachabilityAnalyzerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSReachabilityAnalyzerServiceRolePolicy);
    }

    /** This policy grants permission to use AWS services with the AWS Toolkit for .NET Refactoring extension for Microsoft Visual Studio. It is intended to be attached to a local AWS profile. The policy allows uploading application artifacts and downloading the resulting artifacts from Amazon S3. It allows building applications into a container image using AWS CodeBuild and storing and retrieving the images from Amazon Elastic Container Registry (Amazon ECR). And it allows deployment of the application to container services on AWS such as Amazon Elastic Container Service (Amazon ECS), optional creation of VPC resources, optional connection to existing infrastructure such as AWS Directory Service, and other related services. */
    public AWSRefactoringToolkitFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSRefactoringToolkitFullAccess);
    }

    /** This policy is intended to be used by Amazon ECS Tasks created for testing applications in AWS using the AWS Toolkit for .NET Refactoring extension for Microsoft Visual Studio. The policy grants access to download application artifacts from Amazon S3, communicate the status of the Task using AWS Systems Manager, and other required services. */
    public AWSRefactoringToolkitSidecarPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSRefactoringToolkitSidecarPolicy);
    }

    /** Provides re:Post Private access to publish CloudWatch metrics data */
    public AWSrePostPrivateCloudWatchAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSrePostPrivateCloudWatchAccess);
    }

    /** This policy allows the re:Post Space service to create, manage, and resolve Support cases that are created through the Space application. */
    public AWSRepostSpaceSupportOperationsPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSRepostSpaceSupportOperationsPolicy);
    }

    /** Policy for AWS Resilience Hub service role which allows access to other AWS services in order to execute assessment. */
    public AWSResilienceHubAsssessmentExecutionPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSResilienceHubAsssessmentExecutionPolicy);
    }

    /** Provides full access to AWS Resource Access Manager */
    public AWSResourceAccessManagerFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSResourceAccessManagerFullAccess);
    }

    /** Provides read only access to AWS Resource Access Manager. */
    public AWSResourceAccessManagerReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSResourceAccessManagerReadOnlyAccess);
    }

    /** Provides access to AWS Resource Access Manager APIs needed by a resource share participant. */
    public AWSResourceAccessManagerResourceShareParticipantAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSResourceAccessManagerResourceShareParticipantAccess);
    }

    /** Policy containing Read-only AWS Resource Access Manager access to customers' Organizations structure. It also contains IAM permissions to self-delete the role. */
    public AWSResourceAccessManagerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSResourceAccessManagerServiceRolePolicy);
    }

    /** This policy grants administrative permissions to access Resource Explorer resources and grants read-only permissions to other AWS services to support this access. */
    public AWSResourceExplorerFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSResourceExplorerFullAccess);
    }

    /** This policy grants administrative permissions to Resource Explorer and grants read-only permissions to other AWS services to support this access. The AWS Organizations administrator needs these permissions to setup and manage multi-account search in the console. */
    public AWSResourceExplorerOrganizationsAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSResourceExplorerOrganizationsAccess);
    }

    /** This policy grants read-only permissions to search for and view Resource Explorer resources and grants read-only permissions to other AWS services to support this access. */
    public AWSResourceExplorerReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSResourceExplorerReadOnlyAccess);
    }

    /** Allows Resource Explorer to view resources and CloudTrail events on your behalf to index your resources for search. */
    public AWSResourceExplorerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSResourceExplorerServiceRolePolicy);
    }

    /** This is the read only policy for AWS Resource Groups */
    public AWSResourceGroupsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSResourceGroupsReadOnlyAccess);
    }

    /** Provides full access to AWS RoboMaker via the AWS Management Console and SDK. Also provides select access to related services (e.g., S3, IAM). */
    public AWSRoboMakerFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSRoboMakerFullAccess);
    }

    /** Provides read only access to AWS RoboMaker via the AWS Management Console and SDK */
    public AWSRoboMakerReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSRoboMakerReadOnlyAccess);
    }

    /** RoboMaker service policy */
    public AWSRoboMakerServicePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSRoboMakerServicePolicy);
    }

    /** RoboMaker service policy */
    public AWSRoboMakerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSRoboMakerServiceRolePolicy);
    }

    /** Allows IAM Roles Anywhere to publish service/usage metrics to CloudWatch and check the status of Private Certificate Authorities on your behalf. */
    public AWSRolesAnywhereServicePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSRolesAnywhereServicePolicy);
    }

    /** Allow Amazon S3 on Outposts service to manage EC2 network resources on your behalf. */
    public AWSS3OnOutpostsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSS3OnOutpostsServiceRolePolicy);
    }

    /** Provides full access to Savings Plans service */
    public AWSSavingsPlansFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSavingsPlansFullAccess);
    }

    /** Provides read only access to Savings Plans service */
    public AWSSavingsPlansReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSavingsPlansReadOnlyAccess);
    }

    /** Provides full access to use AWS Security Hub. */
    public AWSSecurityHubFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSecurityHubFullAccess);
    }

    /** Grants permission to enable and manage AWS Security Hub within an organization. Includes enabling the service across the organization, and determining the delegated administrator account for the service. */
    public AWSSecurityHubOrganizationsAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSecurityHubOrganizationsAccess);
    }

    /** Provides read only access to AWS Security Hub resources */
    public AWSSecurityHubReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSecurityHubReadOnlyAccess);
    }

    /** A service-linked role required for AWS Security Hub to access your resources. */
    public AWSSecurityHubServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSecurityHubServiceRolePolicy);
    }

    /** Provides full access to service catalog admin capabilities */
    public AWSServiceCatalogAdminFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceCatalogAdminFullAccess);
    }

    /** Provides read-only access to Service Catalog admin capabilities */
    public AWSServiceCatalogAdminReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceCatalogAdminReadOnlyAccess);
    }

    /** Provides full access to Service Catalog App Registry capabilities */
    public AWSServiceCatalogAppRegistryFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceCatalogAppRegistryFullAccess);
    }

    /** Provides read-only access to Service Catalog App Registry capabilites */
    public AWSServiceCatalogAppRegistryReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceCatalogAppRegistryReadOnlyAccess);
    }

    /** Allows Service Catalog AppRegistry to manage Resource Groups on your behalf */
    public AWSServiceCatalogAppRegistryServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceCatalogAppRegistryServiceRolePolicy);
    }

    /** Provides full access to service catalog enduser capabilities */
    public AWSServiceCatalogEndUserFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceCatalogEndUserFullAccess);
    }

    /** Provides read-only access to Service Catalog end-user capabilities */
    public AWSServiceCatalogEndUserReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceCatalogEndUserReadOnlyAccess);
    }

    /** A Service Linked Role Policy for AWS ServiceCatalog to sync with AWS Organizations organization structure */
    public AWSServiceCatalogOrgsDataSyncServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceCatalogOrgsDataSyncServiceRolePolicy);
    }

    /** A Service Linked Role for AWS ServiceCatalog to sync Provisioning Artifacts from source repositories */
    public AWSServiceCatalogSyncServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceCatalogSyncServiceRolePolicy);
    }

    /** Permissions required for managing nodegroups in the customer's account. These policies related to management of the following resources: AutoscalingGroups, SecurityGroups, LaunchTemplates and InstanceProfiles. */
    public AWSServiceRoleForAmazonEKSNodegroup(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForAmazonEKSNodegroup);
    }

    /** This Service Linked Role provides Amazon Q Developer ability to provide usage information. */
    public AWSServiceRoleForAmazonQDeveloper(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForAmazonQDeveloper);
    }

    /** Provides access to Systems Manager resources used by CloudWatch Alarms */
    public AWSServiceRoleForCloudWatchAlarmsActionSSMServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForCloudWatchAlarmsActionSSMServiceRolePolicy);
    }

    /** Allows CloudWatch to access RDS Performance Insights metrics on your behalf */
    public AWSServiceRoleForCloudWatchMetricsDbPerfInsightsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForCloudWatchMetricsDbPerfInsightsServiceRolePolicy);
    }

    /** A service-linked role required for Amazon CodeGuru Profiler to send notifications on your behalf. */
    public AWSServiceRoleForCodeGuruProfiler(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForCodeGuruProfiler);
    }

    /** This role grants permissions to CodeWhisperer to access data in your account to calculate billing, provides access to create and access security reports in Amazon CodeGuru, and emit data to CloudWatch. */
    public AWSServiceRoleForCodeWhispererPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForCodeWhispererPolicy);
    }

    /** Allows EC2 Scheduled Instances to launch and manage spot instances. */
    public AWSServiceRoleForEC2ScheduledInstances(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForEC2ScheduledInstances);
    }

    /** AWS GroundStation uses this service-linked role to invoke EC2 to find public IPv4 addresses */
    public AWSServiceRoleForGroundStationDataflowEndpointGroupPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForGroundStationDataflowEndpointGroupPolicy);
    }

    /** Allows EC2ImageBuilder to call AWS services on your behalf. */
    public AWSServiceRoleForImageBuilder(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForImageBuilder);
    }

    /** Allows AWS IoT SiteWise to provision and manage gateways as well as query data. The policy includes required AWS Greengrass permissions for deploying to groups, AWS Lambda permissions for creating and updating service-prefixed functions, and AWS IoT Analytics permissions for querying data from datastores. */
    public AWSServiceRoleForIoTSiteWise(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForIoTSiteWise);
    }

    /** Allows Log Delivery service to deliver logs by calling log destination on your behalf. */
    public AWSServiceRoleForLogDeliveryPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForLogDeliveryPolicy);
    }

    /** Grants Amazon Monitron permissions to manage AWS resources, including AWS SSO user assignment on your behalf. */
    public AWSServiceRoleForMonitronPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForMonitronPolicy);
    }

    /** Provides Cloudwatch access to publish operational and usage metrics and logs for Amazon Neptune */
    public AWSServiceRoleForNeptuneGraphPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForNeptuneGraphPolicy);
    }

    /** Provides permissions to describe and update Private Marketplace resources and describe AWS Organizations */
    public AWSServiceRoleForPrivateMarketplaceAdminPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForPrivateMarketplaceAdminPolicy);
    }

    /** Provides access to AWS services and resources necessary to migrate service instances into AWS including EC2, S3 and Cloudformation. */
    public AWSServiceRoleForSMS(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForSMS);
    }

    /** Provides access to the User Subscriptions service to your Identity Center resources to automatically update your subscriptions. */
    public AWSServiceRoleForUserSubscriptions(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRoleForUserSubscriptions);
    }

    /** Provides AWS Backup permissions to create compliance reports on your behalf */
    public AWSServiceRolePolicyForBackupReports(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRolePolicyForBackupReports);
    }

    /** This policy contains permissions for testing restores and for cleaning up resources created during tests. */
    public AWSServiceRolePolicyForBackupRestoreTesting(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSServiceRolePolicyForBackupRestoreTesting);
    }

    /** Provides the AWS DDoS Response Team with limited access to your AWS account to assist with DDoS attack mitigation during a high-severity event. */
    public AWSShieldDRTAccessPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSShieldDRTAccessPolicy);
    }

    /** Allows AWS Shield to access AWS resources on your behalf to provide DDoS protection. */
    public AWSShieldServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSShieldServiceRolePolicy);
    }

    /** Provides AWS Systems Manager for SAP with the permissions needed to manage and integrate SAP software with AWS. */
    public AWSSSMForSAPServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSSMForSAPServiceLinkedRolePolicy);
    }

    /** Policy for Service Linked Role AWSServiceRoleForAmazonSSM_OpsInsights */
    public AWSSSMOpsInsightsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSSMOpsInsightsServiceRolePolicy);
    }

    /** Administrator access for SSO Directory */
    public AWSSSODirectoryAdministrator(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSSODirectoryAdministrator);
    }

    /** ReadOnly access for SSO Directory */
    public AWSSSODirectoryReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSSODirectoryReadOnly);
    }

    /** Provides access within AWS SSO to manage AWS Organizations master and member accounts and cloud application */
    public AWSSSOMasterAccountAdministrator(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSSOMasterAccountAdministrator);
    }

    /** Provides access within AWS SSO to manage AWS Organizations member accounts and cloud application */
    public AWSSSOMemberAccountAdministrator(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSSOMemberAccountAdministrator);
    }

    /** Provides read only access to AWS SSO configurations. */
    public AWSSSOReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSSOReadOnly);
    }

    /** Grants AWS SSO permissions to manage AWS resources, including IAM roles, policies and SAML IdP on your behalf. */
    public AWSSSOServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSSOServiceRolePolicy);
    }

    /** An access policy for providing a user/role/etc access to the AWS StepFunctions console. For a full console experience, in addition to this policy, a user may need iam:PassRole permission on other IAM roles that can be assumed by the service. */
    public AWSStepFunctionsConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSStepFunctionsConsoleFullAccess);
    }

    /** An access policy for providing a user/role/etc access to the AWS StepFunctions API. For full access, in addition to this policy, a user MUST have iam:PassRole permission on at least one IAM role that can be assumed by the service. */
    public AWSStepFunctionsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSStepFunctionsFullAccess);
    }

    /** An access policy for providing a user/role/etc read only access to the AWS StepFunctions service. */
    public AWSStepFunctionsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSStepFunctionsReadOnlyAccess);
    }

    /** Provides full access to AWS Storage Gateway via the AWS Management Console. */
    public AWSStorageGatewayFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSStorageGatewayFullAccess);
    }

    /** Provides access to AWS Storage Gateway via the AWS Management Console. */
    public AWSStorageGatewayReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSStorageGatewayReadOnlyAccess);
    }

    /** Service-linked role used by AWS Storage Gateway to enable integration of other AWS services with Storage Gateway. */
    public AWSStorageGatewayServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSStorageGatewayServiceRolePolicy);
    }

    /** AWSSupplyChainFederationAdminAccess provides AWS Supply Chain federated users access to the AWS Supply Chain application, including the required permissions to perform actions within the AWS Supply Chain application. The policy provides administrative permissions over IAM Identity Center users and groups and is attached to a role created by AWS Supply Chain on your behalf. You shouldn't attach AWSSupplyChainFederationAdminAccess policy to any other IAM entities. */
    public AWSSupplyChainFederationAdminAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSupplyChainFederationAdminAccess);
    }

    /** Allows users to access the AWS Support Center. */
    public AWSSupportAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSupportAccess);
    }

    /** Provides full access to the AWS Support App and other required services, such as AWS Support and Service Quotas. This policy includes permissions to use the supporting services so that the user can contact AWS Support for support cases, change service quotas, and create the relevant service-linked roles. */
    public AWSSupportAppFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSupportAppFullAccess);
    }

    /** Provides read-only access to the AWS Support App. */
    public AWSSupportAppReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSupportAppReadOnlyAccess);
    }

    /** Provides full access to supportplans. */
    public AWSSupportPlansFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSupportPlansFullAccess);
    }

    /** Provides read-only access to supportplans. */
    public AWSSupportPlansReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSupportPlansReadOnlyAccess);
    }

    /** Allows AWS Support to access AWS resources to provide billing, administrative, and support services. */
    public AWSSupportServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSupportServiceRolePolicy);
    }

    /** Grants AWS Systems Manager (SSM) permission to discover AWS account information. */
    public AWSSystemsManagerAccountDiscoveryServicePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSystemsManagerAccountDiscoveryServicePolicy);
    }

    /** Provides access to AWS resources managed or used by the AWS Systems Manager change management framework. */
    public AWSSystemsManagerChangeManagementServicePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSystemsManagerChangeManagementServicePolicy);
    }

    /** Provides permissions for AWS Systems Manager Quick Setup to enable and configure AWS Config configuration recording. */
    public AWSSystemsManagerEnableConfigRecordingExecutionPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSystemsManagerEnableConfigRecordingExecutionPolicy);
    }

    /** This policy grants administrative permissions for enabling Explorer, a capability of AWS Systems Manager. This includes permissions to update related Systems Manager service settings, and to create a service-linked role for Systems Manager. */
    public AWSSystemsManagerEnableExplorerExecutionPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSystemsManagerEnableExplorerExecutionPolicy);
    }

    /** Provides full access to AWS Systems Manager for SAP service */
    public AWSSystemsManagerForSAPFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSystemsManagerForSAPFullAccess);
    }

    /** Provides read only access to AWS Systems Manager for SAP service */
    public AWSSystemsManagerForSAPReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSystemsManagerForSAPReadOnlyAccess);
    }

    /** IAM role for SSM Explorer to manage OpsData related operations */
    public AWSSystemsManagerOpsDataSyncServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSSystemsManagerOpsDataSyncServiceRolePolicy);
    }

    /** This policy grants the AWS Portal Asset Server the necessary permissions required for normal operation. */
    public AWSThinkboxAssetServerPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSThinkboxAssetServerPolicy);
    }

    /** This policy grants AWS Thinkbox's Deadline software full access to multiple AWS services as required for AWS Portal administration. This includes access to create arbitrary tags on several EC2 resource types. */
    public AWSThinkboxAWSPortalAdminPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSThinkboxAWSPortalAdminPolicy);
    }

    /** This policy grants the AWS Portal Gateway machine the necessary permissions required for normal operation. */
    public AWSThinkboxAWSPortalGatewayPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSThinkboxAWSPortalGatewayPolicy);
    }

    /** This policy grants the Deadline Workers in AWS Portal the necessary permissions required for normal operation. */
    public AWSThinkboxAWSPortalWorkerPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSThinkboxAWSPortalWorkerPolicy);
    }

    /** Grants permissions required for the operation of AWS Thinkbox's Deadline Resource Tracker.  This includes full access to some EC2 actions, including DeleteFleets and CancelSpotFleetRequests. */
    public AWSThinkboxDeadlineResourceTrackerAccessPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSThinkboxDeadlineResourceTrackerAccessPolicy);
    }

    /** Grants permissions required to create, destroy, and administer AWS Thinkbox's Deadline Resource Tracker. */
    public AWSThinkboxDeadlineResourceTrackerAdminPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSThinkboxDeadlineResourceTrackerAdminPolicy);
    }

    /** Grants permissions required for AWS Thinkbox's Deadline Spot Event Plugin.  This includes permission to request, modify, and cancel a spot fleet, as well as limited PassRole permission. */
    public AWSThinkboxDeadlineSpotEventPluginAdminPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSThinkboxDeadlineSpotEventPluginAdminPolicy);
    }

    /** Grant permissions required for an EC2 instance running AWS Thinkbox Deadline Spot Event Plugin Worker software. */
    public AWSThinkboxDeadlineSpotEventPluginWorkerPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSThinkboxDeadlineSpotEventPluginWorkerPolicy);
    }

    /** Provides full access to AWS Transfer via the AWS Management Console */
    public AWSTransferConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSTransferConsoleFullAccess);
    }

    /** Provides full access to AWS Transfer Service. */
    public AWSTransferFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSTransferFullAccess);
    }

    /** Allows AWS Transfer full access to create log streams and groups and put log events to your account */
    public AWSTransferLoggingAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSTransferLoggingAccess);
    }

    /** Provide readonly access to AWS Transfer services. */
    public AWSTransferReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSTransferReadOnlyAccess);
    }

    /** Provides full access to AWS Trusted Advisor Priority. This policy also enables the user to add Trusted Advisor as a trusted service with AWS Organizations and to specify delegated administrator accounts for Trusted Advisor Priority. */
    public AWSTrustedAdvisorPriorityFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSTrustedAdvisorPriorityFullAccess);
    }

    /** Provides read-only access to AWS Trusted Advisor Priority. This includes permission to view the delegated administrator accounts. */
    public AWSTrustedAdvisorPriorityReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSTrustedAdvisorPriorityReadOnlyAccess);
    }

    /** Service Policy for Trusted Advisor Multi-account Reporting */
    public AWSTrustedAdvisorReportingServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSTrustedAdvisorReportingServiceRolePolicy);
    }

    /** Access for the AWS Trusted Advisor Service to help reduce cost, increase performance, and improve security of your AWS environment. */
    public AWSTrustedAdvisorServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSTrustedAdvisorServiceRolePolicy);
    }

    /** Allows AWS User Notifications to call AWS services on your behalf. */
    public AWSUserNotificationsServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSUserNotificationsServiceLinkedRolePolicy);
    }

    /** Provides full access for viewing entitled Vendor Insights resources and managing Vendor Insights subscriptions */
    public AWSVendorInsightsAssessorFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSVendorInsightsAssessorFullAccess);
    }

    /** Provides read-only access for viewing entitled Vendor Insights resources */
    public AWSVendorInsightsAssessorReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSVendorInsightsAssessorReadOnly);
    }

    /** Provides full access for creating and managing the Vendor Insights resources */
    public AWSVendorInsightsVendorFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSVendorInsightsVendorFullAccess);
    }

    /** Provides read-only access for viewing the Vendor Insights resources */
    public AWSVendorInsightsVendorReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSVendorInsightsVendorReadOnly);
    }

    /** Allows VPC Lattice to access AWS resources on your behalf. */
    public AWSVpcLatticeServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSVpcLatticeServiceRolePolicy);
    }

    /** Allow Site-to-Site VPN to create and manage resources related to your VPN Connections. */
    public AWSVPCS2SVpnServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSVPCS2SVpnServiceRolePolicy);
    }

    /** Allow VPC Transit Gateway to create and manage necessary resources for your Transit Gateway VPC Attachments. */
    public AWSVPCTransitGatewayServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSVPCTransitGatewayServiceRolePolicy);
    }

    /** Policy to enable AWS Verified Access service to provision endpoints on your behalf */
    public AWSVPCVerifiedAccessServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSVPCVerifiedAccessServiceRolePolicy);
    }

    /** Provides full access to AWS WAF via the AWS Management Console. Note that this policy also grants permissions to list and update Amazon CloudFront distributions, permissions to view load balancers on AWS Elastic Load Balancing, permissions to view Amazon API Gateway REST APIs and stages, permissions to list and view Amazon CloudWatch metrics, and permissions to view regions enabled within the account. */
    public AWSWAFConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSWAFConsoleFullAccess);
    }

    /** Provides read-only access to AWS WAF via the AWS Management Console. Note that this policy also grants permissions to list Amazon CloudFront distributions, permissions to view load balancers on AWS Elastic Load Balancing, permissions to view Amazon API Gateway REST APIs and stages, permissions to list and view Amazon CloudWatch metrics, and permissions to view regions enabled within the account. */
    public AWSWAFConsoleReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSWAFConsoleReadOnlyAccess);
    }

    /** Provides full access to AWS WAF actions. */
    public AWSWAFFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSWAFFullAccess);
    }

    /** Provides read only access to AWS WAF actions. */
    public AWSWAFReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSWAFReadOnlyAccess);
    }

    /** Allows WellArchitected to access AWS services and resources that relate to WellArchitected resources on behalf of customers. */
    public AWSWellArchitectedDiscoveryServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSWellArchitectedDiscoveryServiceRolePolicy);
    }

    /** Allows Well-Architected to access Organizations on your behalf. */
    public AWSWellArchitectedOrganizationsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSWellArchitectedOrganizationsServiceRolePolicy);
    }

    /** This policy grants full administrative permissions to the Wickr service, including the Wickr administrative functions under the AWS Management Console. */
    public AWSWickrFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSWickrFullAccess);
    }

    /** Provides capabilities to manage Observability Access Manager links and establish sharing of X-Ray traces */
    public AWSXrayCrossAccountSharingConfiguration(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSXrayCrossAccountSharingConfiguration);
    }

    /** Allow the AWS X-Ray Daemon to relay raw trace segments data to the service's API and retrieve sampling data (rules, targets, etc.) to be used by the X-Ray SDK. */
    public AWSXRayDaemonWriteAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSXRayDaemonWriteAccess);
    }

    /** AWS X-Ray full access managed policy */
    public AWSXrayFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSXrayFullAccess);
    }

    /** AWS X-Ray read only managed policy */
    public AWSXrayReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSXrayReadOnlyAccess);
    }

    /** AWS X-Ray write only managed policy */
    public AWSXrayWriteOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSXrayWriteOnlyAccess);
    }

    /** Provides administrative access for ARC zonal shift practice runs, and access to CloudWatch alarm statuses to monitor practice runs. */
    public AWSZonalAutoshiftPracticeRunSLRPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.AWSZonalAutoshiftPracticeRunSLRPolicy);
    }

    /** Provides access for the AWS Batch service to manage the required resources, including Amazon EC2 and Amazon ECS resources. */
    public BatchServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.BatchServiceRolePolicy);
    }

    /** Grants permissions for billing and cost management. This includes viewing account usage and viewing and modifying budgets and payment methods. */
    public Billing(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.Billing);
    }

    /** Amazon Certificate Manager Service Role Policy */
    public CertificateManagerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CertificateManagerServiceRolePolicy);
    }

    /** Policy to enable AWS Client VPN to manage your Client VPN endpoint connections. */
    public ClientVPNServiceConnectionsRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ClientVPNServiceConnectionsRolePolicy);
    }

    /** Policy to enable AWS Client VPN to manage your Client VPN endpoints. */
    public ClientVPNServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ClientVPNServiceRolePolicy);
    }

    /** Service Role for CloudFormation StackSets (Organization Master Account) */
    public CloudFormationStackSetsOrgAdminServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudFormationStackSetsOrgAdminServiceRolePolicy);
    }

    /** Service Role for CloudFormation StackSets (Organization Member Account) */
    public CloudFormationStackSetsOrgMemberServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudFormationStackSetsOrgMemberServiceRolePolicy);
    }

    /** Provides full access to the CloudFront console plus the ability to list Amazon S3 buckets via the AWS Management Console. */
    public CloudFrontFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudFrontFullAccess);
    }

    /** Provides access to CloudFront distribution configuration information and list distributions via the AWS Management Console. */
    public CloudFrontReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudFrontReadOnlyAccess);
    }

    /** Enables access to AWS resources used or managed by CloudHSM */
    public CloudHSMServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudHSMServiceRolePolicy);
    }

    /** Provides full access to the Amazon CloudSearch configuration service. */
    public CloudSearchFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudSearchFullAccess);
    }

    /** Provides read only access to the Amazon CloudSearch configuration service. */
    public CloudSearchReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudSearchReadOnlyAccess);
    }

    /** Permission policy for CloudTrail ServiceLinkedRole */
    public CloudTrailServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudTrailServiceRolePolicy);
    }

    /** Allows CloudWatch to assume CloudWatch-CrossAccountSharing roles in remote accounts on behalf of the current account in order to display data cross-account, cross-region */
    public CloudWatchCrossAccountAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchCrossAccountAccess);
    }

    /** Provides read-only access to CloudWatch alarms and metrics as well as EC2 metadata. Provides access to Stop, Terminate and Reboot EC2 instances. */
    public CloudWatchActionsEC2Access(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchActionsEC2Access);
    }

    /** Full permissions required to use AmazonCloudWatchAgent. */
    public CloudWatchAgentAdminPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchAgentAdminPolicy);
    }

    /** Permissions required to use AmazonCloudWatchAgent on servers */
    public CloudWatchAgentServerPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchAgentServerPolicy);
    }

    /** Provides full access to CloudWatch Application Insights and required dependencies. */
    public CloudWatchApplicationInsightsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchApplicationInsightsFullAccess);
    }

    /** Provides read only access to CloudWatch Application Insights. */
    public CloudWatchApplicationInsightsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchApplicationInsightsReadOnlyAccess);
    }

    /** Cloudwatch Application Insights Service Linked Role Policy */
    public CloudwatchApplicationInsightsServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudwatchApplicationInsightsServiceLinkedRolePolicy);
    }

    /** Provide full access to CloudWatch Application Signals service and scoped access to the dependencies needed to use and operate this service. */
    public CloudWatchApplicationSignalsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchApplicationSignalsFullAccess);
    }

    /** Provides read only access to CloudWatch Application Signals service and scoped access to the dependencies needed to use this service */
    public CloudWatchApplicationSignalsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchApplicationSignalsReadOnlyAccess);
    }

    /** Policy grants permission to CloudWatch Application Signals to collect monitoring and tagging data from other relevant AWS services. */
    public CloudWatchApplicationSignalsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchApplicationSignalsServiceRolePolicy);
    }

    /** Provides access to the non-CloudWatch APIs used to display CloudWatch Automatic Dashboards, including the contents of objects such as Lambda functions */
    public CloudWatchAutomaticDashboardsAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchAutomaticDashboardsAccess);
    }

    /** Provides capabilities to manage Observability Access Manager links and establish sharing of CloudWatch resources */
    public CloudWatchCrossAccountSharingConfiguration(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchCrossAccountSharingConfiguration);
    }

    /** Allows built-in targets in Amazon CloudWatch Events to perform EC2 actions on your behalf. */
    public CloudWatchEventsBuiltInTargetExecutionAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchEventsBuiltInTargetExecutionAccess);
    }

    /** Provides full access to Amazon CloudWatch Events. */
    public CloudWatchEventsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchEventsFullAccess);
    }

    /** Allows Amazon CloudWatch Events to relay events to the streams in AWS Kinesis Streams in your account. */
    public CloudWatchEventsInvocationAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchEventsInvocationAccess);
    }

    /** Provides read only access to Amazon CloudWatch Events. */
    public CloudWatchEventsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchEventsReadOnlyAccess);
    }

    /** Allow AWS CloudWatch to execute actions on your behalf configured through alarms and events. */
    public CloudWatchEventsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchEventsServiceRolePolicy);
    }

    /** Provides full access to CloudWatch. */
    public CloudWatchFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchFullAccess);
    }

    /** Provides full access to CloudWatch. */
    public CloudWatchFullAccessV2(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchFullAccessV2);
    }

    /** Allows Internet Monitor to access EC2, Workspaces, and CloudFront resources, and other required services on your behalf. */
    public CloudWatchInternetMonitorServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchInternetMonitorServiceRolePolicy);
    }

    /** Policy required for the Lambda Insights Extension */
    public CloudWatchLambdaInsightsExecutionRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchLambdaInsightsExecutionRolePolicy);
    }

    /** Provides capabilities to manage Observability Access Manager links and establish sharing of CloudWatch Logs resources */
    public CloudWatchLogsCrossAccountSharingConfiguration(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchLogsCrossAccountSharingConfiguration);
    }

    /** Provides full access to CloudWatch Logs */
    public CloudWatchLogsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchLogsFullAccess);
    }

    /** Provides read only access to CloudWatch Logs */
    public CloudWatchLogsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchLogsReadOnlyAccess);
    }

    /** Allows CloudWatch Network Monitor to access and manage EC2 and VPC resources, publish data to CloudWatch and access other required services on your behalf. */
    public CloudWatchNetworkMonitorServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchNetworkMonitorServiceRolePolicy);
    }

    /** Provides read only access to CloudWatch. */
    public CloudWatchReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchReadOnlyAccess);
    }

    /** Provides full access to CloudWatch Synthetics. */
    public CloudWatchSyntheticsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchSyntheticsFullAccess);
    }

    /** Provides read only access to CloudWatch Synthetics. */
    public CloudWatchSyntheticsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CloudWatchSyntheticsReadOnlyAccess);
    }

    /** Policy for AWS Comprehend service role which allows access to S3 resources for data access */
    public ComprehendDataAccessRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ComprehendDataAccessRolePolicy);
    }

    /** Provides full access to Amazon Comprehend. */
    public ComprehendFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ComprehendFullAccess);
    }

    /** Provides full access to Amazon Comprehend Medical */
    public ComprehendMedicalFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ComprehendMedicalFullAccess);
    }

    /** Provides read-only access to Amazon Comprehend. */
    public ComprehendReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ComprehendReadOnly);
    }

    /** Provides read only access to ComputeOptimizer. */
    public ComputeOptimizerReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ComputeOptimizerReadOnlyAccess);
    }

    /** Allows ComputeOptimizer to call AWS services and collect workload details on your behalf. */
    public ComputeOptimizerServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ComputeOptimizerServiceRolePolicy);
    }

    /** Policy needed for AWSConfig to create conformance packs */
    public ConfigConformsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ConfigConformsServiceRolePolicy);
    }

    /** This managed policy provides admin access to Cost Optimization Hub. */
    public CostOptimizationHubAdminAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CostOptimizationHubAdminAccess);
    }

    /** This managed policy provides read-only access to Cost Optimization Hub. */
    public CostOptimizationHubReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CostOptimizationHubReadOnlyAccess);
    }

    /** Allows Cost Optimization Hub to retrieve organization information and collect optimization-related data and metadata. */
    public CostOptimizationHubServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CostOptimizationHubServiceRolePolicy);
    }

    /** Allows Amazon Connect Customer Profiles to access AWS services and resources on your behalf. */
    public CustomerProfilesServiceLinkedRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.CustomerProfilesServiceLinkedRolePolicy);
    }

    /** Grants full access permissions to AWS services and actions required to set up and configure AWS database services. */
    public DatabaseAdministrator(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.DatabaseAdministrator);
    }

    /** Grants permissions to AWS data analytics services. */
    public DataScientist(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.DataScientist);
    }

    /** This policy allows DAX to create and manage Network interface, Security group, Subnet and Vpc on behalf of customer */
    public DAXServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.DAXServiceRolePolicy);
    }

    /** Permissions required to support Amazon CloudWatch Contributor Insights for Amazon DynamoDB. */
    public DynamoDBCloudWatchContributorInsightsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.DynamoDBCloudWatchContributorInsightsServiceRolePolicy);
    }

    /** Provide AWS DynamoDB access to KinesisDataStreams */
    public DynamoDBKinesisReplicationServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.DynamoDBKinesisReplicationServiceRolePolicy);
    }

    /** Permissions required by DynamoDB for cross-region data replication */
    public DynamoDBReplicationServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.DynamoDBReplicationServiceRolePolicy);
    }

    /** This policy grants full access to EC2 Fast Launch actions */
    public EC2FastLaunchFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.EC2FastLaunchFullAccess);
    }

    /** Policy grants ec2fastlaunch to prepare and manage preprovisioned snapshots in customer's account & publish related metrics. */
    public EC2FastLaunchServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.EC2FastLaunchServiceRolePolicy);
    }

    /** Policy granting permissions to EC2 Fleet to launch instances in the future. */
    public EC2FleetTimeShiftableServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.EC2FleetTimeShiftableServiceRolePolicy);
    }

    /** Permissions need by EC2 Image Builder to perform a cross account distribution. */
    public Ec2ImageBuilderCrossAccountDistributionAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.Ec2ImageBuilderCrossAccountDistributionAccess);
    }

    /** The EC2ImageBuilderLifecycleExecutionPolicy policy grants permissions for Image Builder to perform actions such as deprecate or delete Image Builder image resources and their underlying resources (AMIs, snapshots) to support automated rules for image lifecycle management tasks. */
    public EC2ImageBuilderLifecycleExecutionPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.EC2ImageBuilderLifecycleExecutionPolicy);
    }

    /** Allows customers to call EC2 Instance Connect to publish ephemeral keys to their EC2 instances and connect via ssh or the EC2 Instance Connect CLI. */
    public EC2InstanceConnect(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.EC2InstanceConnect);
    }

    /** EC2 Instance Connect endpoint policy to manage EC2 Instance Connect endpoints created by the customer */
    public Ec2InstanceConnectEndpoint(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.Ec2InstanceConnectEndpoint);
    }

    /** EC2 Instance profile for Image Builder service. */
    public EC2InstanceProfileForImageBuilder(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.EC2InstanceProfileForImageBuilder);
    }

    /** EC2 Instance profile for building container images with EC2 Image Builder. This policy grants the user broad permissions to upload ECR images. */
    public EC2InstanceProfileForImageBuilderECRContainerBuilds(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.EC2InstanceProfileForImageBuilderECRContainerBuilds);
    }

    /** Enables access to AWS Services and Resources used or managed by ECR Replication */
    public ECRReplicationServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ECRReplicationServiceRolePolicy);
    }

    /** Allows actions to be performed when using AWS ECR repository creation templates */
    public ECRTemplateServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ECRTemplateServiceRolePolicy);
    }

    /** This policy allows ElastiCache to manage AWS resources on your behalf as necessary for managing your cache */
    public ElastiCacheServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ElastiCacheServiceRolePolicy);
    }

    /** Provides full access to Amazon ElasticLoadBalancing, and limited access to other services necessary to provide ElasticLoadBalancing features. */
    public ElasticLoadBalancingFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ElasticLoadBalancingFullAccess);
    }

    /** Provides read only access to Amazon ElasticLoadBalancing and dependent services */
    public ElasticLoadBalancingReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ElasticLoadBalancingReadOnly);
    }

    /** Access to view purchased assets and download related software and kickstart files */
    public ElementalActivationsDownloadSoftwareAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ElementalActivationsDownloadSoftwareAccess);
    }

    /** Full access to view and take action on Elemental Appliances and Software purchased assets */
    public ElementalActivationsFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ElementalActivationsFullAccess);
    }

    /** Access to view purchased assets and generate software licenses for pending activations */
    public ElementalActivationsGenerateLicenses(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ElementalActivationsGenerateLicenses);
    }

    /** Read-only access to the detailed list of purchased assets associated to the AWS account of the user */
    public ElementalActivationsReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ElementalActivationsReadOnlyAccess);
    }

    /** Full access to view and take action on Elemental Appliances and Software quotes and orders */
    public ElementalAppliancesSoftwareFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ElementalAppliancesSoftwareFullAccess);
    }

    /** Read-only access to view Elemental Appliances and Software quotes and orders */
    public ElementalAppliancesSoftwareReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ElementalAppliancesSoftwareReadOnlyAccess);
    }

    /** Full access to view and take action on Elemental Appliance and Software support cases and product support content */
    public ElementalSupportCenterFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ElementalSupportCenterFullAccess);
    }

    /** This policy grants read-only permissions that allow the WAL service for Amazon EMR to find and return the status of a cluster */
    public EMRDescribeClusterPolicyForEMRWAL(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.EMRDescribeClusterPolicyForEMRWAL);
    }

    /** Access policy to allow FM service linked role to perform FM-related actions on FM-managed resources within a customer AWS Organization account. */
    public FMSServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.FMSServiceRolePolicy);
    }

    /** Allows Amazon FSx to delete its Service Linked Roles for Amazon S3 access */
    public FSxDeleteServiceLinkedRoleAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.FSxDeleteServiceLinkedRoleAccess);
    }

    /** Policy to allow Gamelift GameServerGroups to manage customer resources */
    public GameLiftGameServerGroupPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.GameLiftGameServerGroupPolicy);
    }

    /** Allow GlobalAccelerator Users full Access to all APIs */
    public GlobalAcceleratorFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.GlobalAcceleratorFullAccess);
    }

    /** Allow GlobalAccelerator Users Access to Read Only APIs */
    public GlobalAcceleratorReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.GlobalAcceleratorReadOnlyAccess);
    }

    /** Provides read access to the Greengrass OTA Update artifacts in all Greengrass regions */
    public GreengrassOTAUpdateArtifactAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.GreengrassOTAUpdateArtifactAccess);
    }

    /** This policy grants permissions needed to use all features of the SageMaker Ground Truth Synthetic Console. */
    public GroundTruthSyntheticConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.GroundTruthSyntheticConsoleFullAccess);
    }

    /** This policy grants read-only access to SageMaker Ground Truth Synthetic via the AWS Management Console. */
    public GroundTruthSyntheticConsoleReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.GroundTruthSyntheticConsoleReadOnlyAccess);
    }

    /** AWS Health policy to enable Organizational View feature */
    public HealthOrganizationsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.HealthOrganizationsServiceRolePolicy);
    }

    /** This policy grants access to read all access information provided by IAM access advisor such as service last accessed information. */
    public IAMAccessAdvisorReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.IAMAccessAdvisorReadOnly);
    }

    /** Provides full access to IAM Access Analyzer */
    public IAMAccessAnalyzerFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.IAMAccessAnalyzerFullAccess);
    }

    /** Provides read only access to IAM Access Analyzer resources */
    public IAMAccessAnalyzerReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.IAMAccessAnalyzerReadOnlyAccess);
    }

    /** Provides full access to IAM via the AWS Management Console. */
    public IAMFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.IAMFullAccess);
    }

    /** Provides read only access to IAM via the AWS Management Console. */
    public IAMReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.IAMReadOnlyAccess);
    }

    /** Allows an IAM user to manage their own Service Specific Credentials. */
    public IAMSelfManageServiceSpecificCredentials(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.IAMSelfManageServiceSpecificCredentials);
    }

    /** Provides the ability for an IAM user to change their own password. */
    public IAMUserChangePassword(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.IAMUserChangePassword);
    }

    /** Provides the ability for an IAM user to manage their own SSH keys. */
    public IAMUserSSHKeys(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.IAMUserSSHKeys);
    }

    /** Provides full access to Interactive Video Service (IVS), Also included permissions for dependent services, needed for full access to the ivs console. */
    public IVSFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.IVSFullAccess);
    }

    /** Provides read-only access to IVS Low-Latency and Real-Time streaming APIs */
    public IVSReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.IVSReadOnlyAccess);
    }

    /** Service Linked Role to perform S3 PutObject to recording IVS live streams */
    public IVSRecordToS3(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.IVSRecordToS3);
    }

    /** This policy grants Kafka Connect permission to manage AWS resources on your behalf. */
    public KafkaConnectServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.KafkaConnectServiceRolePolicy);
    }

    /** IAM service linked role policy for Kafka. */
    public KafkaServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.KafkaServiceRolePolicy);
    }

    /** Permissions required by Keyspaces for cross-region data replication */
    public KeyspacesReplicationServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.KeyspacesReplicationServiceRolePolicy);
    }

    /** Policy to grant temporary data access to Lake Formation resources */
    public LakeFormationDataAccessServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.LakeFormationDataAccessServiceRolePolicy);
    }

    /** Policy for AWS Lex Bot use case */
    public LexBotPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.LexBotPolicy);
    }

    /** Policy for AWS Lex Channel use case */
    public LexChannelPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.LexChannelPolicy);
    }

    /** AWS Lightsail service linked role policy which grants permissions to export resources */
    public LightsailExportAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.LightsailExportAccess);
    }

    /** This policy grants permission to register MediaConnect Gateway Instances to a MediaConnect Gateway. */
    public MediaConnectGatewayInstanceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.MediaConnectGatewayInstanceRolePolicy);
    }

    /** Allows MediaPackage to publish logs to CloudWatch */
    public MediaPackageServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.MediaPackageServiceRolePolicy);
    }

    /** This policy allows MemoryDB to manage AWS resources on your behalf as necessary for managing your resources. */
    public MemoryDBServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.MemoryDBServiceRolePolicy);
    }

    /** Policy for Database Migration Service to assume role in customer's account to call Migration Hub */
    public MigrationHubDMSAccessServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.MigrationHubDMSAccessServiceRolePolicy);
    }

    /** Allows Migration Hub to call Application Discovery Service on your behalf */
    public MigrationHubServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.MigrationHubServiceRolePolicy);
    }

    /** Policy for Server Migration Service to assume role in customer's account to call Migration Hub */
    public MigrationHubSMSAccessServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.MigrationHubSMSAccessServiceRolePolicy);
    }

    /** Policy for AWS Monitron service linked role granting access to required customer resources. */
    public MonitronServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.MonitronServiceRolePolicy);
    }

    /** Provides full access to manage Amazon Neptune using the AWS Console. Note this policy also grants full access to publish on all SNS topics within the account, permissions to create and edit Amazon EC2 instances and VPC configurations, permissions to view and list keys on Amazon KMS, and full access to Amazon RDS. For more information, see https://aws.amazon.com/neptune/faqs/. */
    public NeptuneConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.NeptuneConsoleFullAccess);
    }

    /** Provides full access to Amazon Neptune. Note this policy also grants full access to publish on all SNS topics within the account and full access to Amazon RDS. For more information, see https://aws.amazon.com/neptune/faqs/. */
    public NeptuneFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.NeptuneFullAccess);
    }

    /** Provides read only access to all Amazon Neptune Analytics resources along with read only permissions for dependent services. */
    public NeptuneGraphReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.NeptuneGraphReadOnlyAccess);
    }

    /** Provides read only access to Amazon Neptune. Note that this policy also grants access to Amazon RDS resources. For more information, see https://aws.amazon.com/neptune/faqs/. */
    public NeptuneReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.NeptuneReadOnlyAccess);
    }

    /** Grants full access permissions to AWS services and actions required to set up and configure AWS network resources. */
    public NetworkAdministrator(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.NetworkAdministrator);
    }

    /** Provides full access to CloudWatch Observability Access Manager */
    public OAMFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.OAMFullAccess);
    }

    /** Provides Read Only access to CloudWatch Observability Access Manager */
    public OAMReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.OAMReadOnlyAccess);
    }

    /** Allows Amazon OpenSearch Ingestion to describe network resources and write service metrics to cloudwatch */
    public OpensearchIngestionSelfManagedVpcePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.OpensearchIngestionSelfManagedVpcePolicy);
    }

    /** Provides access to associate and dissociate partner central users with IAM roles */
    public PartnerCentralAccountManagementUserRoleAssociation(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.PartnerCentralAccountManagementUserRoleAssociation);
    }

    /** Provides full access to AWS services and resources, but does not allow management of Users and groups. */
    public PowerUserAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.PowerUserAccess);
    }

    /** Grants permissions to AWS Services and Resources used or managed by Amazon Q */
    public QBusinessServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.QBusinessServiceRolePolicy);
    }

    /** Policy used by QuickSight team to access customer data produced by S3 Storage Management Analytics. */
    public QuickSightAccessForS3StorageManagementAnalyticsReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.QuickSightAccessForS3StorageManagementAnalyticsReadOnly);
    }

    /** Default policy for the Amazon RDS service role. */
    public RDSCloudHsmAuthorizationRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.RDSCloudHsmAuthorizationRole);
    }

    /** Provides read-only access to AWS services and resources. */
    public ReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ReadOnlyAccess);
    }

    /** Provides full access to Resource Groups and Tag Editor. */
    public ResourceGroupsandTagEditorFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ResourceGroupsandTagEditorFullAccess);
    }

    /** Provides access to use Resource Groups and Tag Editor, but does not allow editing of tags via the Tag Editor. */
    public ResourceGroupsandTagEditorReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ResourceGroupsandTagEditorReadOnlyAccess);
    }

    /** Allows AWS Resource Groups to query the AWS services that own your resources to keep the group up-to-date */
    public ResourceGroupsServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ResourceGroupsServiceRolePolicy);
    }

    /** Allows the OpenShift Amazon EBS Container Storage Interface (CSI) Driver Operator to install and maintain the Amazon EBS CSI driver on a Red Hat OpenShift Service on AWS (ROSA) cluster. The Amazon EBS CSI driver allows ROSA clusters to manage the lifecycle of Amazon EBS volumes for persistent volumes. */
    public ROSAAmazonEBSCSIDriverOperatorPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ROSAAmazonEBSCSIDriverOperatorPolicy);
    }

    /** Allows the OpenShift Cloud Network Config Controller Operator to provision and manage networking resources for use by the Red Hat OpenShift Service on AWS (ROSA) cluster networking overlay. The OpenShift Cloud Network Operator interfaces with AWS APIs on behalf of the network plugins via CustomResourceDefinitions. The operator uses these policy permissions to manage private IP addresses for Amazon EC2 instances as part of the ROSA cluster. */
    public ROSACloudNetworkConfigOperatorPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ROSACloudNetworkConfigOperatorPolicy);
    }

    /** Allows Red Hat OpenShift Service on AWS (ROSA) control plane to manage ROSA cluster Amazon EC2 and Amazon Route 53 resources. */
    public ROSAControlPlaneOperatorPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ROSAControlPlaneOperatorPolicy);
    }

    /** Allows the OpenShift Image Registry Operator to provision and manage Amazon S3 buckets and objects for use by the Red Hat OpenShift Service on AWS (ROSA) in-cluster image registry to satisfy ROSA storage requirements. The OpenShift Image Registry Operator installs and maintains the internal registry of a Red Hat OpenShift cluster. */
    public ROSAImageRegistryOperatorPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ROSAImageRegistryOperatorPolicy);
    }

    /** Allows the OpenShift Ingress Operator to provision and manage load balancers and domain name system (DNS) configurations for Red Hat OpenShift Service on AWS (ROSA) clusters. The policy allows read access to tag values, which the operator filters for Route 53 resources to discover hosted zones. */
    public ROSAIngressOperatorPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ROSAIngressOperatorPolicy);
    }

    /** Allows the Red Hat OpenShift Service on AWS (ROSA) installer to manage AWS resources that support ROSA cluster installation. This includes managing instance profiles for ROSA worker nodes. */
    public ROSAInstallerPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ROSAInstallerPolicy);
    }

    /** Allows the built-in ROSA AWS Encryption Provider to manage AWS Key Management Service (KMS) keys to support etcd data encryption using a customer provided AWS KMS key. The policy allows encryption and decryption of data using KMS keys. */
    public ROSAKMSProviderPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ROSAKMSProviderPolicy);
    }

    /** Allows the ROSA Kubernetes controller to manage Amazon EC2, Elastic Load Balancing (ELB), and AWS Key Management Service (KMS) resources for a ROSA cluster. */
    public ROSAKubeControllerPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ROSAKubeControllerPolicy);
    }

    /** This policy provides the permissions required to manage the Red Hat OpenShift Service on AWS (ROSA) subscription. */
    public ROSAManageSubscription(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ROSAManageSubscription);
    }

    /** Allows Red Hat OpenShift Service on AWS (ROSA) to manage cluster EC2 instances as worker nodes, including permission to configure security groups and tag instances and volumes. This policy also allows for the use of EC2 instances with disk encryption provided by AWS Key Management Service (KMS) keys. */
    public ROSANodePoolManagementPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ROSANodePoolManagementPolicy);
    }

    /** Provides ROSA site reliability engineering (SRE) the permissions needed to initially observe, diagnose, and support AWS resources associated with Red Hat OpenShift Service on AWS (ROSA) clusters, including the ability to change ROSA cluster node state. */
    public ROSASRESupportPolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ROSASRESupportPolicy);
    }

    /** Allows Red Hat OpenShift Service on AWS (ROSA) worker nodes in your account read-only access to Amazon EC2 instances and AWS Regions for compute node lifecycle management. */
    public ROSAWorkerInstancePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ROSAWorkerInstancePolicy);
    }

    /** Service Linked Role Policy for Route 53 Recovery Readiness */
    public Route53RecoveryReadinessServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.Route53RecoveryReadinessServiceRolePolicy);
    }

    /** Enables access to AWS Services and Resources used or managed by Route53 Resolver */
    public Route53ResolverServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.Route53ResolverServiceRolePolicy);
    }

    /** Enables access to AWS Services and Resources used or managed by S3 Storage Lens */
    public S3StorageLensServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.S3StorageLensServiceRolePolicy);
    }

    /** Provides read/write access to AWS Secrets Manager via the AWS Management Console. Note: this exludes IAM actions, so combine with IAMFullAccess if rotation configuration is required. */
    public SecretsManagerReadWrite(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.SecretsManagerReadWrite);
    }

    /** The security audit template grants access to read security configuration metadata. It is useful for software that audits the configuration of an AWS account. */
    public SecurityAudit(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.SecurityAudit);
    }

    /** This policy grants permissions to operate the Amazon Security Lake service on your behalf */
    public SecurityLakeServiceLinkedRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.SecurityLakeServiceLinkedRole);
    }

    /** Permissions to allow the AWS Server Migration Service to migrate VMs to EC2: allows the Server Migration Service to place the migrated resources into the customer's EC2 account. */
    public ServerMigrationServiceRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ServerMigrationServiceRole);
    }

    /** Permissions to allow the AWS Server Migration Connector to migrate VMs to EC2. Allows communication with the AWS Server Migration Service, read/write access to S3 buckets starting with 'sms-b-' and 'import-to-ec2-' as well as the buckets used for AWS Server Migration Connector upgrade, AWS Server Migration Connector registration with AWS, and metrics upload to AWS. */
    public ServerMigrationConnector(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ServerMigrationConnector);
    }

    /** Required permissions to use all features of the Server Migration Service Console */
    public ServerMigrationServiceConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ServerMigrationServiceConsoleFullAccess);
    }

    /** Permissions to allow the AWS Server Migration Service to create and update relevant AWS resources into the customer's AWS account for launching migrated servers and applications. */
    public ServerMigrationServiceLaunchRole(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ServerMigrationServiceLaunchRole);
    }

    /** Permissions to allow the AWS SMS to run used data validation script and send script success/failure back to SMS */
    public ServerMigrationServiceRoleForInstanceValidation(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ServerMigrationServiceRoleForInstanceValidation);
    }

    /** Provides full access to Service Quotas */
    public ServiceQuotasFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ServiceQuotasFullAccess);
    }

    /** Provides read only access to Service Quotas */
    public ServiceQuotasReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ServiceQuotasReadOnlyAccess);
    }

    /** Allows Service Quotas to create support cases on your behalf */
    public ServiceQuotasServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ServiceQuotasServiceRolePolicy);
    }

    /** Provides full access to the Simple Workflow configuration service. */
    public SimpleWorkflowFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.SimpleWorkflowFullAccess);
    }

    /** Allows split cost allocation data to retrieve AWS Organizations information, if applicable, and collect telemetry data for the split cost allocation data services that the customer has opted in to. */
    public SplitCostAllocationDataServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.SplitCostAllocationDataServiceRolePolicy);
    }

    /** Provides permissions to check Quick Setup configuration health, ensure consistent use of parameters and provisioned resources, and remediate resources when drift is detected. */
    public SSMQuickSetupRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.SSMQuickSetupRolePolicy);
    }

    /** This policy grants permissions to troubleshoot and resolve issues in an AWS account. This policy also enables the user to contact AWS support to create and manage cases. */
    public SupportUser(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.SupportUser);
    }

    /** Grants full access permissions necessary for resources required for application and development operations. */
    public SystemAdministrator(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.SystemAdministrator);
    }

    /** Provides full access to Amazon Translate. */
    public TranslateFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.TranslateFullAccess);
    }

    /** Provides read-only access to Amazon Translate. */
    public TranslateReadOnly(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.TranslateReadOnly);
    }

    /** This policy grants permissions to view resources and basic metadata across all AWS services. */
    public ViewOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.ViewOnlyAccess);
    }

    /** Default policy for the VM Import/Export service role, for customers using the AWS Connector. The VM Import/Export service assumes a role with this policy to fulfill virtual machine migration requests from the AWS Connector virtual appliance. (Note that the AWS Connector uses the "AWSConnector" managed policy to issue requests on the customer's behalf to the VM Import/Export service.) Provides the ability to create AMIs and EBS snapshots, modify EBS snapshot attributes, make "Describe*" calls on EC2 objects, and read from S3 buckets starting with 'import-to-ec2-'. */
    public VMImportExportRoleForAWSConnector(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.VMImportExportRoleForAWSConnector);
    }

    /** Provides full access to Amazon VPC Lattice and access to dependency services. */
    public VPCLatticeFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.VPCLatticeFullAccess);
    }

    /** Provides read-only access to Amazon VPC Lattice via the AWS Management Console, and limited access to dependency services. */
    public VPCLatticeReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.VPCLatticeReadOnlyAccess);
    }

    /** Provides access to invoking Amazon VPC Lattice services. */
    public VPCLatticeServicesInvokeAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.VPCLatticeServicesInvokeAccess);
    }

    /** Creating SLR to write customer's logs to a firehose stream */
    public WAFLoggingServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.WAFLoggingServiceRolePolicy);
    }

    /** Creating SLR to write customer's logs to a firehose stream */
    public WAFRegionalLoggingServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.WAFRegionalLoggingServiceRolePolicy);
    }

    /** This policy creates a service-linked role that allows AWS WAF to write logs to Amazon Kinesis Data Firehose. */
    public WAFV2LoggingServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.WAFV2LoggingServiceRolePolicy);
    }

    /** Provides full access to AWS Well-Architected Tool via the AWS Management Console */
    public WellArchitectedConsoleFullAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.WellArchitectedConsoleFullAccess);
    }

    /** Provides read-only access to AWS Well-Architected Tool via the AWS Management Console */
    public WellArchitectedConsoleReadOnlyAccess(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.WellArchitectedConsoleReadOnlyAccess);
    }

    /** Enables access to AWS Services and Resources used or managed by Amazon WorkLink */
    public WorkLinkServiceRolePolicy(): aws_iam.IManagedPolicy {
        return aws_iam.ManagedPolicy.fromAwsManagedPolicyName(AwsManagedPolicyStatic.WorkLinkServiceRolePolicy);
    }
}
