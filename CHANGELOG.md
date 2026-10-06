# Changelog

## [0.851.0](https://github.com/udondan/iam-floyd/compare/v0.850.0...v0.851.0) (2026-10-06)


### Features

* constants for AWS service principals ([#2326](https://github.com/udondan/iam-floyd/issues/2326)) ([6b2c92d](https://github.com/udondan/iam-floyd/commit/6b2c92dd62a12ac59bd686772d6ad4fbb1b6f527))
* on*() methods of cdk-iam-floyd take CDK constructs ([#2324](https://github.com/udondan/iam-floyd/issues/2324)) ([dde9410](https://github.com/udondan/iam-floyd/commit/dde9410bffc98c2e926008ae149b87eb157be7a8))
* policy documents with size limits and splitting ([#2321](https://github.com/udondan/iam-floyd/issues/2321)) ([bec2497](https://github.com/udondan/iam-floyd/commit/bec24978e93d543f1c8277cea5353d49366a06d9))
* update AWS managed policies and service principals ([#2328](https://github.com/udondan/iam-floyd/issues/2328)) ([4a0483f](https://github.com/udondan/iam-floyd/commit/4a0483fe47e79acbfe275ac4fdb5ec3036e23db6))


### Bug Fixes

* numeric type for four condition keys documented as String ([#2319](https://github.com/udondan/iam-floyd/issues/2319)) ([d06d890](https://github.com/udondan/iam-floyd/commit/d06d8909420db3be0a2d40ba76c8f4393f5ad2e6)), closes [#6](https://github.com/udondan/iam-floyd/issues/6)


### Dependencies

* **deps:** update aws-sdk-js-v3 monorepo to v3.1146.0 ([#2323](https://github.com/udondan/iam-floyd/issues/2323)) ([6c30ccc](https://github.com/udondan/iam-floyd/commit/6c30cccc187577701a7441ee11cf961f92efb1e4))

---

**New AWS managed policies:**

- AWSSecurityAgentContinuousPentestPolicy

---

**New service principals:**

- a4b.amazonaws.com
- access-analyzer.amazonaws.com
- access-grants.s3.amazonaws.com
- account-access.amazonaws.com
- account.amazonaws.com
- acm-pca.amazonaws.com
- acm.amazonaws.com
- aco-automation.amazonaws.com
- agent-registry.amazonaws.com
- agent.wellarchitected.amazonaws.com
- agentless.inspector2.amazonaws.com
- aiops.amazonaws.com
- airflow-env.amazonaws.com
- airflow-serverless.amazonaws.com
- airflow.amazonaws.com
- ami.inspector2.amazonaws.com
- amplify.amazonaws.com
- apidestinations.events.amazonaws.com
- apigateway.amazonaws.com
- app-integrations.amazonaws.com
- appfabric.amazonaws.com
- appflow.amazonaws.com
- application-autoscaling.amazonaws.com
- application-insights.amazonaws.com
- application-signals.cloudwatch.amazonaws.com
- application-transformation.amazonaws.com
- appmesh.amazonaws.com
- apprunner.amazonaws.com
- appstream.amazonaws.com
- appstream.application-autoscaling.amazonaws.com
- appsync.amazonaws.com
- aps.amazonaws.com
- artifact.amazonaws.com
- assets.marketplace.amazonaws.com
- athena.amazonaws.com
- auditmanager.amazonaws.com
- automation.amazonaws.com
- autoscaling-plans.amazonaws.com
- autoscaling.amazonaws.com
- aws-artifact-account-sync.amazonaws.com
- aws-external-anthropic.amazonaws.com
- backup.amazonaws.com
- batch.amazonaws.com
- bedrock-agentcore.amazonaws.com
- bedrock-mantle.amazonaws.com
- bedrock.amazonaws.com
- braket.amazonaws.com
- budgets.amazonaws.com
- bugbust.amazonaws.com
- cassandra-streams.amazonaws.com
- cassandra.application-autoscaling.amazonaws.com
- channels.lex.amazonaws.com
- channels.lexv2.amazonaws.com
- chatbot.amazonaws.com
- chime.amazonaws.com
- cleanrooms-ml.amazonaws.com
- cleanrooms.amazonaws.com
- cloud9.amazonaws.com
- clouddirectory.amazonaws.com
- cloudformation.amazonaws.com
- cloudfront.amazonaws.com
- cloudhsm.amazonaws.com
- cloudsearch.amazonaws.com
- cloudtrail.amazonaws.com
- cloudwatch-crossaccount.amazonaws.com
- cloudwatch.amazonaws.com
- codeartifact.amazonaws.com
- codebuild.amazonaws.com
- codecatalyst-runner.amazonaws.com
- codecatalyst.amazonaws.com
- codecommit.amazonaws.com
- codedeploy.amazonaws.com
- codeguru-profiler.amazonaws.com
- codeguru-reviewer.amazonaws.com
- codeguru-security.amazonaws.com
- codepipeline.amazonaws.com
- codestar-notifications.amazonaws.com
- codestar.amazonaws.com
- cognito-idp.amazonaws.com
- cognito-sync.amazonaws.com
- comprehend.amazonaws.com
- comprehend.application-autoscaling.amazonaws.com
- compute-optimizer.amazonaws.com
- config-conforms.amazonaws.com
- config-multiaccountsetup.amazonaws.com
- config.amazonaws.com
- connect-campaigns.amazonaws.com
- connect.amazonaws.com
- context.cloudtrail.amazonaws.com
- continuousexport.discovery.amazonaws.com
- contract.iq.amazonaws.com
- contributorinsights.dynamodb.amazonaws.com
- controltower.amazonaws.com
- cost-optimization-hub.bcm.amazonaws.com
- costalerts.amazonaws.com
- credentials.iot.amazonaws.com
- custom-resource.application-autoscaling.amazonaws.com
- custom.rds-preview.amazonaws.com
- custom.rds.amazonaws.com
- databrew.amazonaws.com
- dataexchange.amazonaws.com
- datapipeline.amazonaws.com
- datasync.amazonaws.com
- datazone.amazonaws.com
- datazonecontrol.amazonaws.com
- dax.amazonaws.com
- deeplens.amazonaws.com
- delivery.logs.amazonaws.com
- detective.amazonaws.com
- devops-guru.amazonaws.com
- diode.amazonaws.com
- directconnect.amazonaws.com
- directquery.opensearchservice.amazonaws.com
- discovery.amazonaws.com
- dlm.amazonaws.com
- dms.amazonaws.com
- dmsintegration.migrationhub.amazonaws.com
- docdb-elastic.amazonaws.com
- drs.amazonaws.com
- ds.amazonaws.com
- dsql.amazonaws.com
- dynamodb.amazonaws.com
- dynamodb.application-autoscaling.amazonaws.com
- ec.amazonaws.com
- ec2-images.amazonaws.com
- ec2-instance-connect.amazonaws.com
- ec2.amazonaws.com
- ec2.application-autoscaling.amazonaws.com
- ec2.application-status-checks.amazonaws.com
- ec2.capacitymanager.amazonaws.com
- ec2fastlaunch.amazonaws.com
- ec2fleet.amazonaws.com
- ec2scheduled.amazonaws.com
- ec2sqlha.amazonaws.com
- ecr.amazonaws.com
- ecs-compute.amazonaws.com
- ecs-tasks.amazonaws.com
- ecs.amazonaws.com
- ecs.application-autoscaling.amazonaws.com
- edgelambda.amazonaws.com
- eks-connector.amazonaws.com
- eks-fargate-pods.amazonaws.com
- eks-fargate.amazonaws.com
- eks-nodegroup.amazonaws.com
- eks.amazonaws.com
- elasticache.amazonaws.com
- elasticache.application-autoscaling.amazonaws.com
- elasticbeanstalk.amazonaws.com
- elasticfilesystem.amazonaws.com
- elasticloadbalancing.amazonaws.com
- elasticmapreduce.amazonaws.com
- elastictranscoder.amazonaws.com
- email.cognito-idp.amazonaws.com
- emr-containers.amazonaws.com
- emr-serverless.amazonaws.com
- entityresolution.amazonaws.com
- es.amazonaws.com
- event-processor.health.amazonaws.com
- events.amazonaws.com
- events.managedservices.amazonaws.com
- events.workmail.amazonaws.com
- evs.amazonaws.com
- finops-agent.amazonaws.com
- finspace.amazonaws.com
- firehose.amazonaws.com
- fis.amazonaws.com
- fms.amazonaws.com
- forecast.amazonaws.com
- frauddetector.amazonaws.com
- freertos.amazonaws.com
- fsx.amazonaws.com
- gamelift.amazonaws.com
- glacier.amazonaws.com
- globalaccelerator.amazonaws.com
- glue.amazonaws.com
- grafana.amazonaws.com
- greengrass.amazonaws.com
- groundstation.amazonaws.com
- guardduty.amazonaws.com
- health.amazonaws.com
- healthlake.amazonaws.com
- honeycode.amazonaws.com
- iam.amazonaws.com
- imagebuilder.amazonaws.com
- importexport.amazonaws.com
- inspector.amazonaws.com
- inspector2.amazonaws.com
- internetmonitor.amazonaws.com
- iot.amazonaws.com
- iotanalytics.amazonaws.com
- iotevents.amazonaws.com
- iotmanagedintegrations.amazonaws.com
- iotroborunner.amazonaws.com
- iotsitewise.amazonaws.com
- iotthingsgraph.amazonaws.com
- iottwinmaker.amazonaws.com
- ivs.amazonaws.com
- job.sagemaker.amazonaws.com
- justintimeaccess.ssm.amazonaws.com
- kafka.amazonaws.com
- kafka.application-autoscaling.amazonaws.com
- kafkaconnect.amazonaws.com
- kendra.amazonaws.com
- kinesis.amazonaws.com
- kinesisanalytics.amazonaws.com
- kinesisreplication.dynamodb.amazonaws.com
- kms.amazonaws.com
- lakeformation.amazonaws.com
- lambda.amazonaws.com
- lambda.application-autoscaling.amazonaws.com
- launchwizard.amazonaws.com
- lex.amazonaws.com
- lexv2.amazonaws.com
- license-management.marketplace.amazonaws.com
- license-manager-user-subscriptions.amazonaws.com
- license-manager.amazonaws.com
- license-manager.member-account.amazonaws.com
- lightsail.amazonaws.com
- logger.cloudfront.amazonaws.com
- logs.amazonaws.com
- lookoutequipment.amazonaws.com
- lookoutmetrics.amazonaws.com
- m2.amazonaws.com
- machinelearning.amazonaws.com
- macie.amazonaws.com
- maintenance.elasticbeanstalk.amazonaws.com
- malware-protection-plan.guardduty.amazonaws.com
- malware-protection.guardduty.amazonaws.com
- managedblockchain.amazonaws.com
- managedservices.amazonaws.com
- managedupdates.elasticbeanstalk.amazonaws.com
- mediaconnect.amazonaws.com
- mediaconvert.amazonaws.com
- mediapackage.amazonaws.com
- mediastore.amazonaws.com
- mediatailor.amazonaws.com
- medical-imaging.amazonaws.com
- meetings.chime.amazonaws.com
- member.org.stacksets.cloudformation.amazonaws.com
- memorydb.amazonaws.com
- metrics.wellarchitected.amazonaws.com
- mgn.amazonaws.com
- migrationhub-orchestrator.amazonaws.com
- migrationhub-strategy.amazonaws.com
- migrationhub.amazonaws.com
- mobileanalytics.amazonaws.com
- mobilehub.amazonaws.com
- monitoring.rds.amazonaws.com
- monitoring.thinclient.amazonaws.com
- monitron.amazonaws.com
- mpa.amazonaws.com
- mq.amazonaws.com
- neptune-graph.amazonaws.com
- neptune.application-autoscaling.amazonaws.com
- network-connectors.lambda.amazonaws.com
- network-firewall.amazonaws.com
- network-security-director.amazonaws.com
- network-security-manager.amazonaws.com
- network.bedrock-agentcore.amazonaws.com
- networkmanager.amazonaws.com
- notifications.amazonaws.com
- notifications.ssm.amazonaws.com
- observability.aoss.amazonaws.com
- observabilityadmin.amazonaws.com
- odb.amazonaws.com
- omics.amazonaws.com
- opensearchservice.amazonaws.com
- ops.apigateway.amazonaws.com
- ops.emr-serverless.amazonaws.com
- opsworks-cm.amazonaws.com
- opsworks.amazonaws.com
- organizations.amazonaws.com
- orgsdatasync.servicecatalog.amazonaws.com
- osis.amazonaws.com
- outposts.amazonaws.com
- panorama.amazonaws.com
- partnercentral-account-management.amazonaws.com
- pcs.amazonaws.com
- permission.iq.amazonaws.com
- personalize.amazonaws.com
- pinpoint.amazonaws.com
- pipes.amazonaws.com
- pods.eks.amazonaws.com
- practice-run.arc-zonal-shift.amazonaws.com
- private-marketplace.marketplace.amazonaws.com
- profile.amazonaws.com
- proton.amazonaws.com
- purchaseorders.amazonaws.com
- q.amazonaws.com
- qapps.amazonaws.com
- qbusiness.amazonaws.com
- qldb.amazonaws.com
- quicksight.amazonaws.com
- ram.amazonaws.com
- rds-preview.amazonaws.com
- rds.amazonaws.com
- rds.application-autoscaling.amazonaws.com
- redshift-data.amazonaws.com
- redshift-serverless.amazonaws.com
- redshift.amazonaws.com
- refactor-spaces.amazonaws.com
- rekognition.amazonaws.com
- remediation.config.amazonaws.com
- replication.cassandra.amazonaws.com
- replication.dynamodb.amazonaws.com
- replication.ecr.amazonaws.com
- replication.lexv2.amazonaws.com
- replication.s3tables.amazonaws.com
- replicator.lambda.amazonaws.com
- reporting.trustedadvisor.amazonaws.com
- repository.sync.codeconnections.amazonaws.com
- repostspace.amazonaws.com
- resale-authorization.marketplace.amazonaws.com
- researchstudio.amazonaws.com
- resource-explorer-2.amazonaws.com
- resource-groups.amazonaws.com
- resource-snapshot-job.partnercentral-selling.amazonaws.com
- restore-testing.backup.amazonaws.com
- robomaker.amazonaws.com
- rolesanywhere.amazonaws.com
- route53.amazonaws.com
- route53domains.amazonaws.com
- route53resolver.amazonaws.com
- rtbfabric.amazonaws.com
- runtime-identity.bedrock-agentcore.amazonaws.com
- runtime-instances.bedrock-agentcore.amazonaws.com
- s3-outposts.amazonaws.com
- s3.amazonaws.com
- s3.data-source.lustre.fsx.amazonaws.com
- sagemaker-geospatial.amazonaws.com
- sagemaker.amazonaws.com
- sagemaker.application-autoscaling.amazonaws.com
- scaler.lambda.amazonaws.com
- scheduler.amazonaws.com
- schema-conversion.dms.amazonaws.com
- schemas.amazonaws.com
- scraper.aps.amazonaws.com
- secretsmanager.amazonaws.com
- security-ir.amazonaws.com
- securityagent.amazonaws.com
- securityhub.amazonaws.com
- securityhubv2.amazonaws.com
- securitylake.amazonaws.com
- self-managed-vpce.osis.amazonaws.com
- serverlessrepo.amazonaws.com
- servicecatalog-appregistry.amazonaws.com
- servicecatalog.amazonaws.com
- servicediscovery.amazonaws.com
- servicequotas.amazonaws.com
- ses.amazonaws.com
- shield.amazonaws.com
- signer.amazonaws.com
- signin.amazonaws.com
- sms-voice.amazonaws.com
- sms.amazonaws.com
- smsintegration.migrationhub.amazonaws.com
- sns.amazonaws.com
- social-messaging.amazonaws.com
- spot.amazonaws.com
- spotfleet.amazonaws.com
- sqlworkbench.amazonaws.com
- sqs.amazonaws.com
- ssm-guiconnect.amazonaws.com
- ssm-incidents.amazonaws.com
- ssm-quicksetup.amazonaws.com
- ssm-sap.amazonaws.com
- ssm.amazonaws.com
- ssm.integrations.amazonaws.com
- sso.amazonaws.com
- states.amazonaws.com
- storagegateway.amazonaws.com
- streams.metrics.cloudwatch.amazonaws.com
- sts.amazonaws.com
- support.amazonaws.com
- supportplans.amazonaws.com
- swf.amazonaws.com
- sync.proton.amazonaws.com
- synthetics.amazonaws.com
- tagpolicies.tag.amazonaws.com
- telemetry-enablement.observabilityadmin.amazonaws.com
- telemetry-pipelines.observabilityadmin.amazonaws.com
- textract.amazonaws.com
- thirdparty.config.amazonaws.com
- thirdparty.inspector2.amazonaws.com
- timestream-influxdb.amazonaws.com
- timestream.amazonaws.com
- transcribe.amazonaws.com
- transfer.amazonaws.com
- transform-custom.amazonaws.com
- transitgateway.amazonaws.com
- translate.amazonaws.com
- triage.security-ir.amazonaws.com
- trustedadvisor.amazonaws.com
- tts.amazonaws.com
- vmie.amazonaws.com
- vpc-flow-logs.amazonaws.com
- vpc-lattice.amazonaws.com
- vpcorigin.cloudfront.amazonaws.com
- waf-regional.amazonaws.com
- waf.amazonaws.com
- wafv2.amazonaws.com
- wam.amazonaws.com
- wellarchitected.amazonaws.com
- workdocs.amazonaws.com
- worklink.amazonaws.com
- workmail.amazonaws.com
- workspaces-instances.amazonaws.com
- workspaces.amazonaws.com
- workspaces.application-autoscaling.amazonaws.com
- xray.amazonaws.com

## [0.850.0](https://github.com/udondan/iam-floyd/compare/v0.849.0...v0.850.0) (2026-10-05)


### Features

* methods for the global condition keys added to the AWS docs ([#2317](https://github.com/udondan/iam-floyd/issues/2317)) ([3659867](https://github.com/udondan/iam-floyd/commit/3659867a86c8ce651372b489f69df6308cdd90ff))

## [0.849.0](https://github.com/udondan/iam-floyd/compare/v0.848.0...v0.849.0) (2026-10-04)


### Features

* native .NET package of iam-floyd ([#2306](https://github.com/udondan/iam-floyd/issues/2306)) ([16a70f7](https://github.com/udondan/iam-floyd/commit/16a70f76e1fc248bb2e832156643b0a2e4a53b2d))
* native Go package of iam-floyd ([#2309](https://github.com/udondan/iam-floyd/issues/2309)) ([614ecad](https://github.com/udondan/iam-floyd/commit/614ecad9af6382a548860a427b276c073b4c5df7))
* native Java package of iam-floyd ([#2305](https://github.com/udondan/iam-floyd/issues/2305)) ([e2e13ea](https://github.com/udondan/iam-floyd/commit/e2e13ea054a0598fac883dc0149c460fac0df772))
* policy converter for Python, Java, C# and Go ([#2310](https://github.com/udondan/iam-floyd/issues/2310)) ([be41289](https://github.com/udondan/iam-floyd/commit/be41289b83a3c7b2c819a4b469869758c84aaea1))


### Dependencies

* **deps:** update actions/setup-python action to v7 ([#2303](https://github.com/udondan/iam-floyd/issues/2303)) ([ec4d89f](https://github.com/udondan/iam-floyd/commit/ec4d89fbe94cbba8bc29d26a256ea031a8b60aa2))
* **deps:** update aws-sdk-js-v3 monorepo to v3.1144.0 ([#2307](https://github.com/udondan/iam-floyd/issues/2307)) ([65b61b7](https://github.com/udondan/iam-floyd/commit/65b61b74cc79b3886e1eff282ec04140a4e5ad72))
* **deps:** update aws-sdk-js-v3 monorepo to v3.1145.0 ([#2311](https://github.com/udondan/iam-floyd/issues/2311)) ([91c9793](https://github.com/udondan/iam-floyd/commit/91c97937def1da0fe60682bb4095dce12db303b9))
* **deps:** update dependency aws-cdk-lib to v2.272.0 ([#2308](https://github.com/udondan/iam-floyd/issues/2308)) ([0ef196d](https://github.com/udondan/iam-floyd/commit/0ef196de6b34dd9a689282d8318ed8d50781c742))
* **deps:** update swc monorepo ([#2302](https://github.com/udondan/iam-floyd/issues/2302)) ([1ab2245](https://github.com/udondan/iam-floyd/commit/1ab224585198a2b2640e68930e7f3ffc6108fbd5))

## [0.848.0](https://github.com/udondan/iam-floyd/compare/v0.847.0...v0.848.0) (2026-10-04)


### Features

* native Python package of iam-floyd ([#2300](https://github.com/udondan/iam-floyd/issues/2300)) ([5f88262](https://github.com/udondan/iam-floyd/commit/5f8826203d1d5a34a0a1fa8c7f73a3e1ce619e67))


### Bug Fixes

* compact() matches only the selected actions of the service ([#2297](https://github.com/udondan/iam-floyd/issues/2297)) ([2f47ebf](https://github.com/udondan/iam-floyd/commit/2f47ebfd58a22a3a1edad49edef6a3b291b90400))

## [0.847.0](https://github.com/udondan/iam-floyd/compare/v0.846.0...v0.847.0) (2026-10-03)


### Features

* build cdk-iam-floyd for Python, Java, .NET and Go ([#2289](https://github.com/udondan/iam-floyd/issues/2289)) ([61ee572](https://github.com/udondan/iam-floyd/commit/61ee5727e0c3c1b20f8aef1de1e859cc15837282))
* publish cdk-iam-floyd for Python, Java, .NET and Go ([#2291](https://github.com/udondan/iam-floyd/issues/2291)) ([2c7ebd4](https://github.com/udondan/iam-floyd/commit/2c7ebd4b435d42dd6698bee4cae7f63a4407baab))
* update AWS managed policies ([#2287](https://github.com/udondan/iam-floyd/issues/2287)) ([a9974ef](https://github.com/udondan/iam-floyd/commit/a9974ef6c76042eb91eb804de220f9b9cbe36294))

## [0.846.0](https://github.com/udondan/iam-floyd/compare/v0.845.0...v0.846.0) (2026-10-02)

**New actions:**

- billing:ListBusinessSupportAccountCharges
- billing:ListBusinessSupportSubscriptionHistory
- cloudwatch:CreateResourceMetricsConfiguration
- cloudwatch:DeleteResourceMetricsConfiguration
- cloudwatch:GetResourceMetricsConfiguration
- cloudwatch:UpdateOTelEnrichment
- cloudwatch:UpdateResourceMetricsConfiguration
- lambda:CreateWebFunction
- lambda:CreateWebFunctionEndpoint
- lambda:CreateWebFunctionRevision
- lambda:DeleteWebFunction
- lambda:DeleteWebFunctionEndpoint
- lambda:DeleteWebFunctionRevision
- lambda:GetWebAccountSettings
- lambda:GetWebFunction
- lambda:GetWebFunctionEndpoint
- lambda:GetWebFunctionRevision
- lambda:InvokeWebFunctionEndpoint
- lambda:ListWebFunctionEndpoints
- lambda:ListWebFunctionRevisions
- lambda:ListWebFunctions
- lambda:UpdateWebFunctionEndpoint
- security-ir:GetFindingMetrics
- wafv2:DescribeTopContributorsByEvent

**New resource types:**

- lambda:webFunction
- lambda:webFunctionEndpoint
- lambda:webFunctionRevision

**New condition keys:**

- cloudwatch:ResourceArn
- lambda:Request/WebFunctionAuthType
- lambda:Resource/WebFunctionAuthType

## [0.845.0](https://github.com/udondan/iam-floyd/compare/v0.844.0...v0.845.0) (2026-10-01)

**New actions:**

- account:SendPhoneNumberVerification
- account:VerifyPhoneNumber
- s3vectors:PutVectorBucketDefaultIndexMode
- s3vectors:UpdateIndexMode

**New condition keys:**

- elasticache:ConnectionType

## [0.844.0](https://github.com/udondan/iam-floyd/compare/v0.843.0...v0.844.0) (2026-09-30)

:warning: **Removed services:**

- evidently
- iotevents

:warning: **Removed actions:**

- datazone:CreateDataApp
- datazone:DeleteConversation
- datazone:DeleteDataApp
- datazone:DeregisterAgentArtifact
- datazone:GetDataApp
- datazone:InvokeAgent
- datazone:ListAgentArtifacts
- datazone:ListAgentSessionRecords
- datazone:ListDataApps
- datazone:ListSharedDataApps
- datazone:RegisterAgentArtifact
- datazone:StopAgent
- datazone:UpdateConversation
- datazone:UpdateDataApp
- evidently:BatchEvaluateFeature
- evidently:CreateExperiment
- evidently:CreateFeature
- evidently:CreateLaunch
- evidently:CreateProject
- evidently:CreateSegment
- evidently:DeleteExperiment
- evidently:DeleteFeature
- evidently:DeleteLaunch
- evidently:DeleteProject
- evidently:DeleteSegment
- evidently:EvaluateFeature
- evidently:GetExperiment
- evidently:GetExperimentResults
- evidently:GetFeature
- evidently:GetLaunch
- evidently:GetProject
- evidently:GetSegment
- evidently:ListExperiments
- evidently:ListFeatures
- evidently:ListLaunches
- evidently:ListProjects
- evidently:ListSegmentReferences
- evidently:ListSegments
- evidently:ListTagsForResource
- evidently:PutProjectEvents
- evidently:StartExperiment
- evidently:StartLaunch
- evidently:StopExperiment
- evidently:StopLaunch
- evidently:TagResource
- evidently:TestSegmentPattern
- evidently:UntagResource
- evidently:UpdateExperiment
- evidently:UpdateFeature
- evidently:UpdateLaunch
- evidently:UpdateProject
- evidently:UpdateProjectDataDelivery
- iotevents:BatchAcknowledgeAlarm
- iotevents:BatchDeleteDetector
- iotevents:BatchDisableAlarm
- iotevents:BatchEnableAlarm
- iotevents:BatchPutMessage
- iotevents:BatchResetAlarm
- iotevents:BatchSnoozeAlarm
- iotevents:BatchUpdateDetector
- iotevents:CreateAlarmModel
- iotevents:CreateDetectorModel
- iotevents:CreateInput
- iotevents:DeleteAlarmModel
- iotevents:DeleteDetectorModel
- iotevents:DeleteInput
- iotevents:DescribeAlarm
- iotevents:DescribeAlarmModel
- iotevents:DescribeDetector
- iotevents:DescribeDetectorModel
- iotevents:DescribeDetectorModelAnalysis
- iotevents:DescribeInput
- iotevents:DescribeLoggingOptions
- iotevents:GetDetectorModelAnalysisResults
- iotevents:ListAlarmModelVersions
- iotevents:ListAlarmModels
- iotevents:ListAlarms
- iotevents:ListDetectorModelVersions
- iotevents:ListDetectorModels
- iotevents:ListDetectors
- iotevents:ListInputRoutings
- iotevents:ListInputs
- iotevents:ListTagsForResource
- iotevents:PutLoggingOptions
- iotevents:StartDetectorModelAnalysis
- iotevents:TagResource
- iotevents:UntagResource
- iotevents:UpdateAlarmModel
- iotevents:UpdateDetectorModel
- iotevents:UpdateInput
- iotevents:UpdateInputRouting

:warning: **Removed condition keys:**

- evidently:RequestTag/${TagKey}
- evidently:ResourceTag/${TagKey}
- evidently:TagKeys
- iotevents:RequestTag/${TagKey}
- iotevents:ResourceTag/${TagKey}
- iotevents:TagKeys
- iotevents:keyValue

:warning: **Removed resource types:**

- evidently:Experiment
- evidently:Feature
- evidently:Launch
- evidently:Project
- evidently:Segment
- iotevents:alarmModel
- iotevents:detectorModel
- iotevents:input

**New actions:**

- securityhub:GetRemediationsV2
- securityhub:ListExposuresByRemediationV2

**New condition keys:**

- interconnect:RemoteAccount

## [0.843.0](https://github.com/udondan/iam-floyd/compare/v0.842.0...v0.843.0) (2026-09-29)

**New services:**

- startups

**New actions:**

- arc-region-switch:ListServiceQuotaWarnings
- social-messaging:CreateWhatsAppDataset
- social-messaging:GetWhatsAppBusinessPublicKey
- social-messaging:PutWhatsAppBusinessPublicKey
- social-messaging:SendWhatsAppConversionEvent

## [0.842.0](https://github.com/udondan/iam-floyd/compare/v0.841.0...v0.842.0) (2026-09-27)

**New actions:**

- sagemaker:AttachClusterNodeNetworkInterface
- securityagent:HandleProviderCallback
- securityagent:UpdateIntegration

## [0.841.0](https://github.com/udondan/iam-floyd/compare/v0.840.0...v0.841.0) (2026-09-26)

**New actions:**

- ec2:ReplaceImageInstanceTypeSpecification
- ec2:ValidateSecurityGroupQuotasForInterface
- elemental-inference:DeleteFeedPolicy
- elemental-inference:GetFeedPolicy
- elemental-inference:PutFeedPolicy
- social-messaging:GetWhatsAppCallPermission
- social-messaging:SendWhatsAppCallEvent
- social-messaging:UpdateLinkedWhatsAppBusinessAccountPhoneNumber

**New condition keys:**

- ec2:BootModeOverride

## [0.840.0](https://github.com/udondan/iam-floyd/compare/v0.839.0...v0.840.0) (2026-09-25)

**New actions:**

- aws-external-anthropic:DisableKey
- aws-external-anthropic:GetKey
- aws-external-anthropic:ListKeys
- aws-external-anthropic:RegisterKey
- aws-external-anthropic:UpdateKey
- datazone:CreateDataApp
- datazone:DeleteConversation
- datazone:DeleteDataApp
- datazone:DeregisterAgentArtifact
- datazone:GetDataApp
- datazone:InvokeAgent
- datazone:ListAgentArtifacts
- datazone:ListAgentSessionRecords
- datazone:ListDataApps
- datazone:ListSharedDataApps
- datazone:RegisterAgentArtifact
- datazone:StopAgent
- datazone:UpdateConversation
- datazone:UpdateDataApp
- events:CreateEventSource
- events:CreateSubscriber
- events:DeleteEventSource
- events:DeleteResourcePolicy
- events:DeleteSubscriber
- events:DescribeSubscriber
- events:GetResourcePolicy
- events:ListResourcePolicies
- events:ListSubscribers
- events:PutRawEvents
- events:PutResourcePolicy
- events:RevokeResource
- events:UpdateEventSource
- events:UpdateSubscriber
- identitystore:DescribeIdentityStore
- identitystore:ListIdentityStores
- securityagent:ListActorMessages

**New resource types:**

- events:event-busv2
- events:event-sourcev2
- events:subscriber

**New condition keys:**

- aws-external-anthropic:KeyArn
- events:ContentFilterPresent
- events:Metadata/${MetadataKey}
- events:Metadata/${MetadataKey}/Matcher
- events:PolicyName
- events:SystemMetadata/AwsDetailType
- events:SystemMetadata/AwsSource
- events:SystemMetadata/ContentType

## [0.839.0](https://github.com/udondan/iam-floyd/compare/v0.838.0...v0.839.0) (2026-09-24)

**New services:**

- network-security-manager

**New actions:**

- billing:ListBillingViewSegments
- kinesis:UpdateStreamRecordDistributionStrategy

## [0.838.0](https://github.com/udondan/iam-floyd/compare/v0.837.0...v0.838.0) (2026-09-23)

**New actions:**

- cloudwatch:AssumeAccessProfile
- cloudwatch:CreateAccessGrant
- cloudwatch:CreateAccessProfile
- cloudwatch:CreateAlert
- cloudwatch:CreateDomain
- cloudwatch:CreateDomainAccessGrantForOrganization
- cloudwatch:CreateDomainForOrganization
- cloudwatch:CreateIngestionEndpoint
- cloudwatch:CreateIntegration
- cloudwatch:CreateOmniDashboard
- cloudwatch:CreateOmniThread
- cloudwatch:CreateOneTimeDeepLinkCode
- cloudwatch:CreateSpace
- cloudwatch:CreateView
- cloudwatch:DeleteAccessGrant
- cloudwatch:DeleteAccessProfile
- cloudwatch:DeleteAlert
- cloudwatch:DeleteDomain
- cloudwatch:DeleteDomainAccessGrantForOrganization
- cloudwatch:DeleteDomainForOrganization
- cloudwatch:DeleteIngestionEndpoint
- cloudwatch:DeleteIntegration
- cloudwatch:DeleteOmniDashboard
- cloudwatch:DeleteOmniThread
- cloudwatch:DeleteSpace
- cloudwatch:DeleteView
- cloudwatch:GetAccessGrant
- cloudwatch:GetAccessProfile
- cloudwatch:GetAgentGraph
- cloudwatch:GetAlert
- cloudwatch:GetContextGraph
- cloudwatch:GetDomain
- cloudwatch:GetDomainAccessGrantForOrganization
- cloudwatch:GetDomainForOrganization
- cloudwatch:GetIngestionEndpoint
- cloudwatch:GetIntegration
- cloudwatch:GetIntelligenceConfiguration
- cloudwatch:GetOmniDashboard
- cloudwatch:GetOmniThread
- cloudwatch:GetPreferences
- cloudwatch:GetRecords
- cloudwatch:GetSpace
- cloudwatch:GetSpaceCredentials
- cloudwatch:GetSpaceCredentialsForOrganization
- cloudwatch:GetTelemetryQueryResults
- cloudwatch:GetView
- cloudwatch:InvokeIntegration
- cloudwatch:ListAccessGrants
- cloudwatch:ListAccessProfiles
- cloudwatch:ListAlertContributors
- cloudwatch:ListAlerts
- cloudwatch:ListDomainAccessGrantsForOrganization
- cloudwatch:ListDomains
- cloudwatch:ListIngestionEndpoints
- cloudwatch:ListIntegrations
- cloudwatch:ListOmniDashboards
- cloudwatch:ListOmniThreads
- cloudwatch:ListSpaceAccess
- cloudwatch:ListSpaces
- cloudwatch:ListSpacesForOrganization
- cloudwatch:ListTelemetryFields
- cloudwatch:ListTelemetryQuerySessions
- cloudwatch:ListViews
- cloudwatch:PutIntelligenceConfiguration
- cloudwatch:QueryTraces
- cloudwatch:SearchPrincipals
- cloudwatch:StartOmniThreadSession
- cloudwatch:StartTelemetryQuery
- cloudwatch:StartTelemetryQuerySession
- cloudwatch:StopTelemetryQuery
- cloudwatch:StopTelemetryQuerySession
- cloudwatch:SubmitFeedback
- cloudwatch:UpdateAccessProfile
- cloudwatch:UpdateAlert
- cloudwatch:UpdateDomain
- cloudwatch:UpdateDomainForOrganization
- cloudwatch:UpdateIngestionEndpoint
- cloudwatch:UpdateIntegration
- cloudwatch:UpdateOmniDashboard
- cloudwatch:UpdateOmniThread
- cloudwatch:UpdatePreferences
- cloudwatch:UpdateSpace
- cloudwatch:UpdateView
- connect:ListSecurityProfileAIAgents
- logs:IntegrateWithDataset
- observabilityadmin:CreateDatasetIntegration
- observabilityadmin:DeleteDatasetIntegration
- observabilityadmin:GetDatasetIntegration
- observabilityadmin:ListDatasetIntegrations
- observabilityadmin:UpdateDatasetIntegration
- wafv2:ValidateNetworkSecurityManagerRuleConfiguration
- wafv2:ValidateNetworkSecurityManagerWebACLConfiguration

**New resource types:**

- cloudwatch:access-grant
- cloudwatch:access-profile
- cloudwatch:alert
- cloudwatch:domain
- cloudwatch:ingestion-endpoint
- cloudwatch:integration
- cloudwatch:omni-dashboard
- cloudwatch:organization-access-grant
- cloudwatch:organization-domain
- cloudwatch:space
- cloudwatch:view
- connect:application
- observabilityadmin:dataset-integration

**New condition keys:**

- cloudwatch:HasAccessGrant

## [0.837.0](https://github.com/udondan/iam-floyd/compare/v0.836.0...v0.837.0) (2026-09-22)

**New actions:**

- billingconductor:GetBillingTransferPreference
- billingconductor:UpdateBillingTransferPreference

**New condition keys:**

- billingconductor:PricingPlanArn

## [0.836.0](https://github.com/udondan/iam-floyd/compare/v0.835.0...v0.836.0) (2026-09-18)

**New actions:**

- securityagent:BatchGetValidationRuns
- securityagent:ListDiscoveredDomains
- securityagent:StartValidationRun
- securityagent:UpdateDiscoveredDomains
- sms-voice:ListAvailablePhoneNumbers
- user-subscriptions:CancelPurchaseSession
- user-subscriptions:ConfirmPurchaseSession
- user-subscriptions:CreatePurchaseSession
- user-subscriptions:CreateUpdatePlanPreview
- user-subscriptions:GetCurrentPlanDetails
- user-subscriptions:GetPurchaseSession

## [0.835.0](https://github.com/udondan/iam-floyd/compare/v0.834.0...v0.835.0) (2026-09-17)

**New actions:**

- healthlake:DescribeFHIRBulkPatchJob
- healthlake:StartFHIRBulkPatchJob
- notifications:AccessSensitiveEvents
- notifications:SubscribeSensitiveEvents
- notifications:UpdateManagedNotificationChannelAssociation

## [0.834.0](https://github.com/udondan/iam-floyd/compare/v0.833.0...v0.834.0) (2026-09-16)

**New actions:**

- directconnect:AssociateConnectionsToResiliencyGroup
- directconnect:CreateResiliencyGroup
- directconnect:DeleteResiliencyGroup
- directconnect:DisassociateConnectionsFromResiliencyGroup
- directconnect:GetResiliencyGroup
- directconnect:ListResiliencyGroupAssociations
- directconnect:ListResiliencyGroups
- directconnect:UpdateConnectionsBillingMode
- directconnect:UpdateResiliencyGroup
- ses:ApplyTrackingConfigurationOverrides
- ses:AssociateEmailIdentityCertificate
- ses:DisassociateEmailIdentityCertificate
- ses:ListEmailIdentityCertificates
- ses:UpdateConfigurationSet

**New resource types:**

- directconnect:dx-resiliency-group

**New condition keys:**

- ses:ClickTrackingEnabled
- ses:ConfigurationSetOptions
- ses:OpenTrackingEnabled

## [0.833.0](https://github.com/udondan/iam-floyd/compare/v0.832.0...v0.833.0) (2026-09-15)

**New actions:**

- resiliencehub:ListTestRunDependencies
- resiliencehub:ListTestRunSourceEvents

**New condition keys:**

- aidevops:SourceAgentSpaceArn
- aidevops:TargetAgentSpaceArn

## [0.832.0](https://github.com/udondan/iam-floyd/compare/v0.831.0...v0.832.0) (2026-09-11)

**New actions:**

- bedrock-agentcore:CreateConsentPortal
- bedrock-agentcore:DeleteConsentPortal
- bedrock-agentcore:GetConsentPortal
- bedrock-agentcore:ListConsentPortals
- bedrock-agentcore:UpdateConsentPortal
- connect:ListEvaluationFormAIVersions

**New resource types:**

- bedrock-agentcore:consent-portal

**New condition keys:**

- s3:object-lock-event-hold
- s3:object-lock-event-hold-duration-days
- vpc-lattice-svcs:ResourceTag/${TagKey}

## [0.831.0](https://github.com/udondan/iam-floyd/compare/v0.830.0...v0.831.0) (2026-09-05)

**New actions:**

- payment-cryptography:GenerateAuthRequestCryptogram

**New condition keys:**

- payment-cryptography:DeriveKeyUsage
- payment-cryptography:ExportDukptInitialKey
- payment-cryptography:ExportKeyMaterial
- payment-cryptography:PrivateKeyIdentifier
- payment-cryptography:SigningKeyIdentifier

## [0.830.0](https://github.com/udondan/iam-floyd/compare/v0.829.0...v0.830.0) (2026-09-04)

**New actions:**

- evs:GetAccountSettings
- evs:PutAccountSettings
- quicksight:CreateExtension
- quicksight:DeleteExtension
- quicksight:DescribeExtension
- quicksight:DescribeExtensionPermissions
- quicksight:ListExtensions
- quicksight:StartExtensionInstallation
- quicksight:UpdateExtension
- quicksight:UpdateExtensionPermissions

**New resource types:**

- quicksight:extension

## [0.829.0](https://github.com/udondan/iam-floyd/compare/v0.828.0...v0.829.0) (2026-09-02)

**New actions:**

- cognito-idp:AdminDeleteSoftwareToken
- connect:CreateExtractionDefinition
- connect:DeleteExtractionDefinition
- connect:DescribeExtractionDefinition
- connect:GetCrossRegionRouting
- connect:ListExtractionDefinitions
- connect:UpdateCrossRegionRouting
- connect:UpdateExtractionDefinition
- ec2:BatchModifyIpamRoutingPolicyRegistrations
- ec2:CreateIpamInternetRegistryAssociation
- ec2:CreateIpamRoutingPolicyRegistration
- ec2:DeleteIpamInternetRegistryAssociation
- ec2:DeleteIpamRoutingPolicyRegistration
- ec2:DescribeAccountVpcEncryptionControl
- ec2:DescribeIpamInternetRegistryAssociations
- ec2:EnableIpamInternetRegistryAssociation
- ec2:GetIpamDiscoveredRoutes
- ec2:GetIpamInternetRegistryAssociationAsns
- ec2:GetIpamInternetRegistryAssociationCidrs
- ec2:GetIpamRouteOriginAuthorizations
- ec2:GetIpamRouteProtectionFindings
- ec2:GetIpamRoutingPolicyRegistrationDeltas
- ec2:GetIpamRoutingPolicyRegistrations
- ec2:ModifyAccountVpcEncryptionControl
- ec2:ModifyIpamRoutingPolicyRegistration
- guardduty:CreateCustomDetectionRuleAssociation
- guardduty:CreateCustomDetectionRuleOrgConfiguration
- guardduty:DeleteCustomDetectionRuleAssociation
- guardduty:DeleteCustomDetectionRuleOrgConfiguration
- guardduty:GetCustomDetectionRule
- guardduty:GetCustomDetectionRuleAssociation
- guardduty:GetCustomDetectionRuleOrgConfiguration
- guardduty:ListCustomDetectionRuleAssociations
- guardduty:ListCustomDetectionRuleOrgConfigurations
- guardduty:ListCustomDetectionRules
- guardduty:UpdateCustomDetectionRuleAssociation
- guardduty:UpdateCustomDetectionRuleOrgConfiguration
- kinesis:AssociateStreamsWithChannel
- kinesis:CreateChannel
- kinesis:DeleteChannel
- kinesis:DescribeChannel
- kinesis:ListChannels
- kinesis:UpdateChannel

**New resource types:**

- connect:extraction-definition
- ec2:ipam-internet-registry-association
- guardduty:customdetectionrule
- guardduty:customdetectionruleassociation
- kinesis:channel

## [0.828.0](https://github.com/udondan/iam-floyd/compare/v0.827.0...v0.828.0) (2026-09-01)

**Updated action access level:**

- support:DownloadAttachment: Write -> Read

**New condition keys:**

- agent-registry:RecordSourceAccount

## [0.827.0](https://github.com/udondan/iam-floyd/compare/v0.826.0...v0.827.0) (2026-08-30)

**New actions:**

- profile:AssociateStreamForSegments
- profile:DeleteSegmentSubscription
- profile:DisassociateStreamForSegments
- profile:GetSegmentSubscription
- profile:GetStreamForSegments
- profile:ListSegmentSubscriptionEvents
- profile:PutSegmentSubscription

## [0.826.0](https://github.com/udondan/iam-floyd/compare/v0.825.0...v0.826.0) (2026-08-29)

**New actions:**

- healthlake:RestoreFHIRDatastore
- sagemaker:BatchRebootClusterNodes
- sagemaker:BatchReplaceClusterNodes
- sagemaker:DescribeTrainingPlanExtensionHistory
- sagemaker:ExtendTrainingPlan
- support:AddRelatedItemToCase
- support:DescribeRelatedItems
- support:DisconnectLiveContactForCase
- support:DownloadAttachment
- support:UploadAttachment

**New condition keys:**

- sagemaker:AuthMode
- sagemaker:IsUpdateRecord
- sagemaker:UpdatableFeatures

## [0.825.0](https://github.com/udondan/iam-floyd/compare/v0.824.0...v0.825.0) (2026-08-28)

**New actions:**

- bedrock-mantle:CountTokens
- codecommit:GetBlobDifferences
- mgn:ListNetworkMigrationExecutionArtifacts

## [0.824.0](https://github.com/udondan/iam-floyd/compare/v0.823.0...v0.824.0) (2026-08-26)

:warning: **Removed actions:**

- quicksight:DescribeAutomationGroup
- quicksight:DescribeAutomationGroupPermissions
- quicksight:ListAutomationGroups
- quicksight:SearchAutomationGroups
- quicksight:UpdateAutomationGroupPermissions

**New actions:**

- quicksight:ListCustomPermissionAssignments

**New condition keys:**

- autoscaling:TargetCapacityTypes

## [0.823.0](https://github.com/udondan/iam-floyd/compare/v0.822.0...v0.823.0) (2026-08-25)

**New actions:**

- agent-registry:DeleteResourcePolicy
- agent-registry:GetResourcePolicy
- agent-registry:PutResourcePolicy
- batch:SetCapacityTags
- customer-verification:GetInheritanceConfig
- customer-verification:PutInheritanceConfig

**New condition keys:**

- agent-registry:RecordCreatorAccount

## [0.822.0](https://github.com/udondan/iam-floyd/compare/v0.821.0...v0.822.0) (2026-08-21)

**New actions:**

- lambda:DeleteResourcePolicy
- lambda:GetResourcePolicy
- lambda:PutResourcePolicy
- workspaces:InvokeOnboardingAgent
- workspaces:Personalization

## [0.821.0](https://github.com/udondan/iam-floyd/compare/v0.820.0...v0.821.0) (2026-08-20)

**New actions:**

- bedrock:CreateDataSourceToken
- bedrock:GetDataSourceAuthorizationUrl
- ec2:AssociateApplicationStatusCheck
- ec2:CreateApplicationStatusCheck
- ec2:CreateTransitGatewayPolicyTableEntry
- ec2:DeleteApplicationStatusCheck
- ec2:DeleteTransitGatewayPolicyTableEntry
- ec2:DescribeApplicationStatus
- ec2:DescribeApplicationStatusCheckAssociations
- ec2:DescribeApplicationStatusChecks
- ec2:DisableApplicationStatusCheckSuppression
- ec2:DisassociateApplicationStatusCheck
- ec2:EnableApplicationStatusCheckSuppression
- ec2:ModifyApplicationStatusCheck
- ec2:ModifyTransitGatewayPolicyTableEntry
- ec2:ModifyVpcEndpointPayerResponsibility
- eks:ActivateCertificateAuthority
- eks:CreateCertificateAuthority
- eks:DeleteCertificateAuthority
- eks:DescribeCertificateAuthority
- eks:ListCertificateAuthorities
- healthlake:TranslateConceptMapWithGet
- healthlake:TranslateConceptMapWithPost
- ssm:RequestManagedInstanceRoleToken
- ssm:UpdateManagedInstancePublicKey

**New resource types:**

- ec2:application-status-check

**New condition keys:**

- ssm:NodeAccountId
- ssm:NodeOrgId

## [0.820.0](https://github.com/udondan/iam-floyd/compare/v0.819.0...v0.820.0) (2026-08-18)

**New actions:**

- appconfig:CreateExperimentDefinition
- appconfig:DeleteExperimentDefinition
- appconfig:GetExperimentDefinition
- appconfig:GetExperimentRun
- appconfig:ListExperimentDefinitions
- appconfig:ListExperimentRunEvents
- appconfig:ListExperimentRuns
- appconfig:StartExperimentRun
- appconfig:StopExperimentRun
- appconfig:UpdateExperimentDefinition
- appconfig:UpdateExperimentRun
- bedrock:CancelInvoke
- bedrock:CheckIngestedDocumentAcl
- bedrock:DeleteInvoke
- bedrock:GetIngestedDocumentAcl
- bedrock:GetInvoke
- drs:CancelRecoveryPlanExecution
- drs:CreateRecoveryPlan
- drs:CreateRecoveryPlanStep
- drs:DeleteRecoveryPlan
- drs:DeleteRecoveryPlanExecution
- drs:DeleteRecoveryPlanStep
- drs:GetRecoveryPlan
- drs:GetRecoveryPlanExecution
- drs:GetRecoveryPlanExecutionStep
- drs:GetRecoveryPlanStep
- drs:ListRecoveryPlanExecutionSteps
- drs:ListRecoveryPlanExecutions
- drs:ListRecoveryPlanSteps
- drs:ListRecoveryPlans
- drs:ReorderRecoveryPlanSteps
- drs:RetryRecoveryPlanExecutionStep
- drs:StartRecoveryPlanExecution
- drs:UpdateRecoveryPlan
- drs:UpdateRecoveryPlanExecutionStep
- drs:UpdateRecoveryPlanStep

**New resource types:**

- appconfig:experimentdefinition
- appconfig:experimentrun
- bedrock:project
- drs:RecoveryPlanExecutionResource
- drs:RecoveryPlanResource

**New condition keys:**

- bedrock:ModelArn
- bedrock:ProjectArn

## [0.819.0](https://github.com/udondan/iam-floyd/compare/v0.818.0...v0.819.0) (2026-08-15)

**New actions:**

- acm:ListCertificateDomainValidations
- iam:GetAccountProperties
- iam:GetRoleTemplateVersion
- iam:PutAccountProperties
- odb:AssociateVirtualMachinesToExadbVmCluster
- odb:CreateExadbVmCluster
- odb:CreateExascaleDbStorageVault
- odb:DeleteExadbVmCluster
- odb:DeleteExascaleDbStorageVault
- odb:DisassociateVirtualMachinesFromExadbVmCluster
- odb:GetExadbVmCluster
- odb:GetExascaleDbStorageVault
- odb:ListExadbVmClusters
- odb:ListExascaleDbStorageVaults
- odb:ListGiMinorVersions
- odb:UpdateExadbVmCluster
- odb:UpdateExascaleDbStorageVault

**New resource types:**

- iam:role-template
- odb:exadb-vm-cluster
- odb:exascale-db-storage-vault

**New condition keys:**

- iam:AccountPropertyNamespaces
- iam:RoleTemplateARN

## [0.818.0](https://github.com/udondan/iam-floyd/compare/v0.817.0...v0.818.0) (2026-08-13)

:warning: **Removed actions:**

- quicksight:BatchAssignLimitsProfile
- quicksight:BatchUnassignLimitsProfile
- quicksight:ListAssignmentsForPrincipal
- quicksight:ListProfileAssignments

:warning: **Removed condition keys:**

- airflow:TeamName

**New services:**

- account-access
- agent-registry
- iq
- iq-permission

**New actions:**

- backup:ListBackupAccessPoints
- backup:ListBackupAccessPointsByRecoveryPoint
- backup:ListBackupAccessPointsByResource
- bedrock-agentcore:BatchPutGatewayRateLimits
- bedrock-agentcore:CreateCapacityProvider
- bedrock-agentcore:CreateGatewayRateLimit
- bedrock-agentcore:DeleteCapacityProvider
- bedrock-agentcore:DeleteCapacityProviderSession
- bedrock-agentcore:DeleteGatewayRateLimit
- bedrock-agentcore:GetCapacityProvider
- bedrock-agentcore:GetGatewayRateLimit
- bedrock-agentcore:ListAgentRuntimeVersionsByCapacityProvider
- bedrock-agentcore:ListCapacityProviders
- bedrock-agentcore:ListGatewayRateLimits
- bedrock-agentcore:PassCapacityProvider
- bedrock-agentcore:PutSystemLogEvents
- bedrock-agentcore:UpdateCapacityProvider
- bedrock-agentcore:UpdateGatewayRateLimit
- cleanrooms:GetAnalysisLogExport
- cleanrooms:ListAnalysisLogExports
- cleanrooms:StartAnalysisLogExport
- connect:CreateMetric
- connect:DeleteMetric
- connect:DescribeMetric
- connect:ListMetrics
- connect:SearchMetrics
- connect:UpdateMetricContent
- connect:UpdateMetricMetadata
- datazone:BatchUpdateNotifications
- dms:GetMetadataModel
- dynamodb:SearchVectors
- elasticmapreduce:GetSession
- elasticmapreduce:GetSessionEndpoint
- elasticmapreduce:ListSessions
- elasticmapreduce:StartSession
- elasticmapreduce:TerminateSession
- quicksight:BatchDescribeUserLimits
- quicksight:CreateApprovalPolicy
- quicksight:CreateDlpSetting
- quicksight:DeleteApprovalPolicy
- quicksight:DeleteDlpSetting
- quicksight:DescribeApprovalPolicy
- quicksight:DescribeDlpJob
- quicksight:DescribeDlpSetting
- quicksight:ListApprovalPolicies
- quicksight:ListDlpLabels
- quicksight:ListDlpSettings
- quicksight:StartDlpJob
- quicksight:UpdateApprovalPolicy
- quicksight:UpdateDlpSetting
- securityhub:ListFreeTrialStatusesV2
- transform-custom:GetAnalysisArtifactDownloadUrl
- transform-custom:ListAnalysisArtifacts

**New resource types:**

- backup:backupAccessPoint
- bedrock-agentcore:capacity-provider
- connect:metric
- connect:qualified-metric
- elasticmapreduce:session
- quicksight:dlpSetting

**New condition keys:**

- airflow:TeamNames
- autoscaling:OperatorPrincipal
- bedrock-agentcore:runtimeSessionId
- eks:kubeApiServerConfig
- eks:kubeControllerManagerConfig
- eks:kubeSchedulerConfig

## [0.817.0](https://github.com/udondan/iam-floyd/compare/v0.816.0...v0.817.0) (2026-08-11)

:warning: **Removed services:**

- iq
- iq-permission

:warning: **Removed actions:**

- billing:GetCumulativeTracking
- billing:GetMonthlyTracking
- iq-permission:ApproveAccessGrant
- iq-permission:ApprovePermissionRequest
- iq-permission:AssumePermissionRole
- iq-permission:CreatePermissionRequest
- iq-permission:GetPermissionRequest
- iq-permission:ListPermissionRequests
- iq-permission:RejectPermissionRequest
- iq-permission:RevokePermissionRequest
- iq-permission:WithdrawPermissionRequest
- iq:AcceptCall
- iq:ApprovePaymentRequest
- iq:ApproveProposal
- iq:ArchiveConversation
- iq:CompleteProposal
- iq:CreateConversation
- iq:CreateExpert
- iq:CreateListing
- iq:CreateMilestoneProposal
- iq:CreatePaymentRequest
- iq:CreateProject
- iq:CreateRequest
- iq:CreateScheduledProposal
- iq:CreateSeller
- iq:CreateUpfrontProposal
- iq:DeclineCall
- iq:DeleteAttachment
- iq:DisableIndividualPublicProfile
- iq:DownloadAttachment
- iq:EnableIndividualPublicProfile
- iq:EndCall
- iq:GetBuyer
- iq:GetCall
- iq:GetChatInfo
- iq:GetChatMessages
- iq:GetChatToken
- iq:GetCompanyChatMessages
- iq:GetCompanyProfile
- iq:GetConversation
- iq:GetExpert
- iq:GetListing
- iq:GetMarketplaceSeller
- iq:GetPaymentRequest
- iq:GetProposal
- iq:GetRequest
- iq:GetReview
- iq:HideRequest
- iq:InitiateCall
- iq:LinkAwsCertification
- iq:ListAttachments
- iq:ListConversations
- iq:ListExpertAccessLogs
- iq:ListListings
- iq:ListPaymentRequests
- iq:ListProposals
- iq:ListRequests
- iq:ListReviews
- iq:MarkChatMessageRead
- iq:RejectPaymentRequest
- iq:RejectProposal
- iq:SendCompanyChatMessage
- iq:SendIndividualChatMessage
- iq:UnarchiveConversation
- iq:UnlinkAwsCertification
- iq:UpdateCompanyProfile
- iq:UpdateConversationMembers
- iq:UpdateExpert
- iq:UpdateListing
- iq:UpdateRequest
- iq:UploadAttachment
- iq:WithdrawPaymentRequest
- iq:WithdrawProposal
- iq:WriteReview
- sagemaker-unified-studio-mcp:CallPrivilegedTool
- sagemaker-unified-studio-mcp:CallReadOnlyTool
- sagemaker-unified-studio-mcp:InvokeMcp

:warning: **Removed resource types:**

- billing:contract
- iq-permission:permission
- iq:attachment
- iq:buyer
- iq:call
- iq:company
- iq:conversation
- iq:expert
- iq:listing
- iq:paymentRequest
- iq:paymentSchedule
- iq:permission
- iq:proposal
- iq:request
- iq:seller
- iq:token
- workspaces:workspacespoolid

**New services:**

- bedrock-websearch
- supportauthz

**New actions:**

- account:GetPrimaryEmailUpdateStatus
- artifact:PutComplianceInquiryFeedback
- aws-marketplace:GetTaxComplianceProfile
- aws-marketplace:ListTaxComplianceProfileChangeTasks
- aws-marketplace:ListTaxComplianceProfiles
- aws-marketplace:StartTaxComplianceProfileChangeTask
- bedrock-agentcore:AddDatasetExamples
- bedrock-agentcore:CreateDataset
- bedrock-agentcore:CreateDatasetVersion
- bedrock-agentcore:DeleteDataset
- bedrock-agentcore:DeleteDatasetExamples
- bedrock-agentcore:GetDataset
- bedrock-agentcore:ListDatasetExamples
- bedrock-agentcore:ListDatasetVersions
- bedrock-agentcore:ListDatasets
- bedrock-agentcore:ListHarnessVersions
- bedrock-agentcore:UpdateDataset
- bedrock-agentcore:UpdateDatasetExamples
- billing:GetEnterpriseSupportChargeSummary
- billing:GetEnterpriseSupportContractDetails
- billing:ListEnterpriseSupportLinkedAccountCharges
- cognito-idp:AdminGetUserAuthFactors
- cognito-idp:GetProvisionedLimit
- cognito-idp:UpdateProvisionedLimit
- connect:DescribeAttachedFilesConfiguration
- connect:ListAttachedFilesConfigurations
- connect:SearchRules
- connect:UpdateAttachedFilesConfiguration
- datazone:CreateDesignation
- datazone:DeleteDesignation
- datazone:GetCurrentEffectivePolicy
- datazone:GetDesignation
- datazone:GetNotebookRun
- datazone:ListDesignations
- datazone:ListNotebookRuns
- datazone:StartNotebookRun
- datazone:StopNotebookRun
- datazone:UpdateDesignation
- datazone:ValidatePolicy
- directconnect:ListVirtualInterfaceRoutes
- es:GetMigration
- es:ListMigrations
- es:StartMigration
- gameliftstreams:CreateStreamUrl
- gameliftstreams:GetStreamUrl
- gameliftstreams:ListApplicationShaderCaches
- gameliftstreams:ListStreamUrls
- gameliftstreams:RevokeStreamUrl
- glue:AccessDataQualityRuntimeConfiguration
- health-agent:ListPatientMedications
- health-agent:ResetPassword
- health-agent:SubmitMedicationRenewal
- healthlake:CreateDataTransformationProfile
- healthlake:DeleteDataTransformationProfile
- healthlake:DescribeDataTransformationJob
- healthlake:GetDataTransformationProfile
- healthlake:ListDataTransformationJobs
- healthlake:ListDataTransformationProfileVersions
- healthlake:ListDataTransformationProfiles
- healthlake:PublishDataTransformationProfile
- healthlake:StartDataTransformationJob
- healthlake:TransformData
- healthlake:UpdateDataTransformationProfile
- healthlake:UpdateProfileWithAgent
- healthlake:ValidateSource
- invoicing:ListProcurementPortalSuppliers
- invoicing:ListProcurementPortals
- invoicing:SendProcurementPortalValidation
- invoicing:VerifyProcurementPortalValidation
- iotsitewise:BatchAssociateDataSegmentsToDataset
- iotsitewise:BatchDeleteDatasetDataSegments
- iotsitewise:BatchDisassociateDataSegmentsFromDataset
- iotsitewise:CancelEnrichmentJob
- iotsitewise:CancelPipelineExecution
- iotsitewise:CancelQuery
- iotsitewise:CreateApplication
- iotsitewise:CreateDatasetExportJob
- iotsitewise:CreateEnrichmentJob
- iotsitewise:CreatePipeline
- iotsitewise:CreateTask
- iotsitewise:CreateWorkspace
- iotsitewise:DeleteApplication
- iotsitewise:DeletePipeline
- iotsitewise:DeleteTask
- iotsitewise:DeleteWorkspace
- iotsitewise:DescribeApplication
- iotsitewise:DescribeDatasetExportJob
- iotsitewise:DescribeEnrichmentJob
- iotsitewise:DescribePipeline
- iotsitewise:DescribePipelineExecution
- iotsitewise:DescribeQuery
- iotsitewise:DescribeSearch
- iotsitewise:DescribeTask
- iotsitewise:DescribeWorkspace
- iotsitewise:GetCaptureData
- iotsitewise:GetQueryResults
- iotsitewise:GetSearchResults
- iotsitewise:ListApplications
- iotsitewise:ListDatasetDataSegmentRelationships
- iotsitewise:ListDatasetDataSegments
- iotsitewise:ListDatasetExportJobs
- iotsitewise:ListEnrichmentJobs
- iotsitewise:ListPipelineExecutions
- iotsitewise:ListPipelines
- iotsitewise:ListQueries
- iotsitewise:ListSearches
- iotsitewise:ListTasks
- iotsitewise:ListWorkspaces
- iotsitewise:StartPipelineExecution
- iotsitewise:StartQuery
- iotsitewise:StartSearch
- iotsitewise:UpdatePipeline
- iotsitewise:UpdateTask
- iotsitewise:UpdateWorkspace
- kafka:CreateChannel
- kafka:DeleteChannel
- kafka:DescribeChannel
- kafka:ListChannels
- kafka:UpdateChannel
- logs:GetStorageTierPolicy
- logs:PutStorageTierPolicy
- odb:ListFlexComponents
- opensearch:ViewLoginPage
- partnercentral:GetQualificationsAssociationDetails
- partnercentral:GetQualificationsAssociationTask
- partnercentral:GetQualificationsDisassociationTask
- partnercentral:StartQualificationsAssociationTask
- partnercentral:StartQualificationsDisassociationTask
- pricingplanmanager:ApprovePaidSubscription
- quicksight:CreateKnowledgeBase
- quicksight:DeleteApp
- quicksight:DescribeApp
- quicksight:DescribeAppPermissions
- quicksight:ListApps
- quicksight:PassTopic
- quicksight:SearchApps
- quicksight:UpdateAppPermissions
- quicksight:UpdateKnowledgeBase
- redshift-data:ListSessions
- resiliencehub:CreateTest
- resiliencehub:DeleteTest
- resiliencehub:DeleteTestSources
- resiliencehub:GetTest
- resiliencehub:GetTestRun
- resiliencehub:GetTestTemplate
- resiliencehub:ListResolvedTestRunTargetResources
- resiliencehub:ListTestRunEvents
- resiliencehub:ListTestRunSources
- resiliencehub:ListTestRuns
- resiliencehub:ListTestSources
- resiliencehub:ListTestTemplates
- resiliencehub:ListTests
- resiliencehub:PutTestSources
- resiliencehub:StartTestRun
- resiliencehub:StopTestRun
- resiliencehub:UpdateTest
- sagemaker-unified-studio-mcp:AuthorizeVpce
- securityhub:BatchGetEnabledRegionsV2
- securityhub:GetCoverageStatisticsV2
- ses:PutAccountPricingAttributes
- signin:CreateOAuth2PublicClient
- signin:IntrospectOAuth2Token
- signin:RevokeOAuth2Token
- sms-voice:CarrierLookup
- sms-voice:CreateNotifyConfiguration
- sms-voice:CreateRcsAgent
- sms-voice:DeleteNotifyConfiguration
- sms-voice:DeleteNotifyMessageSpendLimitOverride
- sms-voice:DeleteRcsAgent
- sms-voice:DeleteRcsMessageSpendLimitOverride
- sms-voice:DescribeNotifyConfigurations
- sms-voice:DescribeNotifyTemplates
- sms-voice:DescribeRcsAgentCountryLaunchStatus
- sms-voice:DescribeRcsAgents
- sms-voice:ListNotifyCountries
- sms-voice:SendNotifyTextMessage
- sms-voice:SendNotifyVoiceMessage
- sms-voice:SendRcsMessage
- sms-voice:SetNotifyMessageSpendLimitOverride
- sms-voice:SetRcsMessageSpendLimitOverride
- sms-voice:UpdateNotifyConfiguration
- sms-voice:UpdateRcsAgent
- supportplans:AcceptSupportAgreement
- supportplans:CancelSupportAgreement
- supportplans:CreateSupportAgreement
- supportplans:GetSupportAgreement
- supportplans:ListSupportAgreementRevisions
- supportplans:ListSupportAgreements
- supportplans:RejectSupportAgreement
- supportplans:UpdateSupportAgreement
- sustainability:GetEstimatedWaterAllocation
- sustainability:GetEstimatedWaterAllocationDimensionValues
- timestream-influxdb:CreateDbBackup
- timestream-influxdb:DeleteDbBackup
- timestream-influxdb:GetDbBackup
- timestream-influxdb:ListDbBackups
- timestream-influxdb:RestoreFromDbBackup
- trustedadvisor:ListRecommendationsForResource
- wellarchitected:CreateAgentContext
- wellarchitected:CreateAgentGoal
- wellarchitected:CreateAgentProfile
- wellarchitected:DeleteAgentContext
- wellarchitected:DeleteAgentGoal
- wellarchitected:DeleteAgentProfile
- wellarchitected:GetAgentContext
- wellarchitected:GetAgentGoal
- wellarchitected:GetAgentProfile
- wellarchitected:GetAgentRecommendation
- wellarchitected:GetAgentRecommendationGeneration
- wellarchitected:ListAgentContexts
- wellarchitected:ListAgentGoals
- wellarchitected:ListAgentProfiles
- wellarchitected:ListAgentRecommendationGenerations
- wellarchitected:ListAgentRecommendationItems
- wellarchitected:ListAgentRecommendations
- wellarchitected:PutAgentRecommendationFeedback
- wellarchitected:StartAgentRecommendationGeneration
- wellarchitected:UpdateAgentContext
- wellarchitected:UpdateAgentGoal
- wellarchitected:UpdateAgentProfile
- wellarchitected:UpdateAgentRecommendationStatus

**Updated action access level:**

- a4b:TagResource: Tagging -> Tagging, Write
- a4b:UntagResource: Tagging -> Tagging, Write
- access-analyzer:TagResource: Tagging -> Tagging, Write
- access-analyzer:UntagResource: Tagging -> Tagging, Write
- acm-pca:CreatePermission: Permissions management -> Permissions management, Write
- acm-pca:DeletePermission: Permissions management -> Permissions management, Write
- acm-pca:DeletePolicy: Permissions management -> Permissions management, Write
- acm-pca:PutPolicy: Permissions management -> Permissions management, Write
- acm-pca:TagCertificateAuthority: Tagging -> Tagging, Write
- acm-pca:UntagCertificateAuthority: Tagging -> Tagging, Write
- acm:AddTagsToCertificate: Tagging -> Tagging, Write
- acm:RemoveTagsFromCertificate: Tagging -> Tagging, Write
- acm:TagResource: Tagging -> Tagging, Write
- acm:UntagResource: Tagging -> Tagging, Write
- aco-automation:TagResource: Tagging -> Tagging, Write
- aco-automation:UntagResource: Tagging -> Tagging, Write
- aidevops:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- aidevops:TagResource: Tagging -> Tagging, Write
- aidevops:UntagResource: Tagging -> Tagging, Write
- aiops:TagResource: Tagging -> Tagging, Write
- aiops:UntagResource: Tagging -> Tagging, Write
- airflow-serverless:TagResource: Tagging -> Tagging, Write
- airflow-serverless:UntagResource: Tagging -> Tagging, Write
- airflow:TagResource: Tagging -> Tagging, Write
- airflow:UntagResource: Tagging -> Tagging, Write
- amplify:TagResource: Tagging -> Tagging, Write
- amplify:UntagResource: Tagging -> Tagging, Write
- amplifyuibuilder:TagResource: Tagging -> Tagging, Write
- amplifyuibuilder:UntagResource: Tagging -> Tagging, Write
- apigateway:AddCertificateToDomain: Permissions management -> Permissions management, Write
- apigateway:CreateAccessAssociation: Permissions management -> Permissions management, Write
- apigateway:DeletePortalProductSharingPolicy: Permissions management -> Permissions management, Write
- apigateway:PutPortalProductSharingPolicy: Permissions management -> Permissions management, Write
- apigateway:RejectAccessAssociation: Permissions management -> Permissions management, Write
- apigateway:RemoveCertificateFromDomain: Permissions management -> Permissions management, Write
- apigateway:SetWebACL: Permissions management -> Permissions management, Write
- apigateway:UpdateDomainNameManagementPolicy: Permissions management -> Permissions management, Write
- apigateway:UpdateDomainNamePolicy: Permissions management -> Permissions management, Write
- apigateway:UpdateRestApiPolicy: Permissions management -> Permissions management, Write
- app-integrations:TagResource: Tagging -> Tagging, Write
- app-integrations:UntagResource: Tagging -> Tagging, Write
- appconfig:TagResource: Tagging -> Tagging, Write
- appconfig:UntagResource: Tagging -> Tagging, Write
- appfabric:TagResource: Tagging -> Tagging, Write
- appfabric:UntagResource: Tagging -> Tagging, Write
- appflow:TagResource: Tagging -> Tagging, Write
- appflow:UntagResource: Tagging -> Tagging, Write
- application-autoscaling:TagResource: Tagging -> Tagging, Write
- application-autoscaling:UntagResource: Tagging -> Tagging, Write
- application-signals:TagResource: Tagging -> Tagging, Write
- application-signals:UntagResource: Tagging -> Tagging, Write
- applicationinsights:TagResource: Tagging -> Tagging, Write
- applicationinsights:UntagResource: Tagging -> Tagging, Write
- appmesh:TagResource: Tagging -> Tagging, Write
- appmesh:UntagResource: Tagging -> Tagging, Write
- apprunner:TagResource: Tagging -> Tagging, Write
- apprunner:UntagResource: Tagging -> Tagging, Write
- appstream:TagResource: Tagging -> Tagging, Write
- appstream:UntagResource: Tagging -> Tagging, Write
- appsync:SetWebACL: Permissions management -> Permissions management, Write
- appsync:TagResource: Tagging -> Tagging, Write
- appsync:UntagResource: Tagging -> Tagging, Write
- apptest:TagResource: Tagging -> Tagging, Write
- apptest:UntagResource: Tagging -> Tagging, Write
- aps:TagResource: Tagging -> Tagging, Write
- aps:UntagResource: Tagging -> Tagging, Write
- arc-region-switch:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- arc-region-switch:GetResourcePolicy: Permissions management -> Permissions management, Write
- arc-region-switch:PutResourcePolicy: Permissions management -> Permissions management, Write
- arc-region-switch:TagResource: Tagging -> Tagging, Write
- arc-region-switch:UntagResource: Tagging -> Tagging, Write
- artifact:TagResource: Tagging -> Tagging, Write
- codeartifact:TagResource: Tagging -> Tagging, Write
- artifact:UntagResource: Tagging -> Tagging, Write
- codeartifact:UntagResource: Tagging -> Tagging, Write
- athena:TagResource: Tagging -> Tagging, Write
- athena:UntagResource: Tagging -> Tagging, Write
- auditmanager:TagResource: Tagging -> Tagging, Write
- auditmanager:UntagResource: Tagging -> Tagging, Write
- autoscaling:CreateOrUpdateTags: Tagging -> Tagging, Write
- autoscaling:DeleteTags: Tagging -> Tagging, Write
- aws-external-anthropic:TagResource: Tagging -> Tagging, Write
- aws-external-anthropic:UntagResource: Tagging -> Tagging, Write
- aws-marketplace:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- aws-marketplace:PutResourcePolicy: Permissions management -> Permissions management, Write
- aws-marketplace:TagResource: Tagging -> Tagging, Write
- aws-marketplace:UntagResource: Tagging -> Tagging, Write
- b2bi:TagResource: Tagging -> Tagging, Write
- b2bi:UntagResource: Tagging -> Tagging, Write
- backup-gateway:TagResource: Tagging -> Tagging, Write
- backup-gateway:UntagResource: Tagging -> Tagging, Write
- backup-search:TagResource: Tagging -> Tagging, Write
- backup-search:UntagResource: Tagging -> Tagging, Write
- backup:DeleteBackupVaultAccessPolicy: Permissions management -> Permissions management, Write
- backup:DeleteBackupVaultSharingPolicy: Permissions management -> Permissions management, Write
- backup:ListIndexedRecoveryPointsForSearch: Permissions management -> Permissions management, Write
- backup:PutBackupVaultAccessPolicy: Permissions management -> Permissions management, Write
- backup:PutBackupVaultSharingPolicy: Permissions management -> Permissions management, Write
- backup:SearchRecoveryPoint: Permissions management -> Permissions management, Write
- backup:TagResource: Tagging -> Tagging, Write
- backup:UntagResource: Tagging -> Tagging, Write
- batch:TagResource: Tagging -> Tagging, Write
- batch:UntagResource: Tagging -> Tagging, Write
- bcm-dashboards:TagResource: Tagging -> Tagging, Write
- bcm-dashboards:UntagResource: Tagging -> Tagging, Write
- bcm-data-exports:TagResource: Tagging -> Tagging, Write
- bcm-data-exports:UntagResource: Tagging -> Tagging, Write
- bcm-pricing-calculator:ListTagsForResource: Tagging -> Tagging, Write
- bcm-pricing-calculator:TagResource: Tagging -> Tagging, Write
- bcm-pricing-calculator:UntagResource: Tagging -> Tagging, Write
- bedrock-agentcore:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- bedrock-agentcore:AuthorizeAction: Permissions management -> Permissions management, Write
- bedrock-agentcore:InvokeGateway: Permissions management -> Permissions management, Write
- bedrock-agentcore:InvokeWebSearch: Permissions management -> Permissions management, Write
- bedrock-agentcore:ManageAdminPolicy: Permissions management -> Permissions management, Write
- bedrock-agentcore:ManageResourceScopedPolicy: Permissions management -> Permissions management, Write
- bedrock-agentcore:PartiallyAuthorizeActions: Permissions management -> Permissions management, Write
- bedrock-agentcore:SynchronizeGatewayTargets: Permissions management -> Permissions management, Write
- bedrock-agentcore:TagResource: Tagging -> Tagging, Write
- bedrock-agentcore:UntagResource: Tagging -> Tagging, Write
- bedrock-mantle:TagResource: Tagging -> Tagging, Write
- bedrock-mantle:UntagResource: Tagging -> Tagging, Write
- bedrock:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- bedrock:TagResource: Tagging -> Tagging, Write
- bedrock:UntagResource: Tagging -> Tagging, Write
- billing:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- billing:GetResourcePolicy: Permissions management -> Permissions management, Write
- billing:PutResourcePolicy: Permissions management -> Permissions management, Write
- billing:TagResource: Tagging -> Tagging, Write
- billing:UntagResource: Tagging -> Tagging, Write
- billingconductor:TagResource: Tagging -> Tagging, Write
- billingconductor:UntagResource: Tagging -> Tagging, Write
- braket:TagResource: Tagging -> Tagging, Write
- braket:UntagResource: Tagging -> Tagging, Write
- budgets:TagResource: Tagging -> Tagging, Write
- budgets:UntagResource: Tagging -> Tagging, Write
- bugbust:TagResource: Tagging -> Tagging, Write
- bugbust:UntagResource: Tagging -> Tagging, Write
- cases:TagResource: Tagging -> Tagging, Write
- cases:UntagResource: Tagging -> Tagging, Write
- cassandra:TagMultiRegionResource: Tagging -> Tagging, Write
- cassandra:TagResource: Tagging -> Tagging, Write
- cassandra:UnTagMultiRegionResource: Tagging -> Tagging, Write
- cassandra:UntagResource: Tagging -> Tagging, Write
- aws-marketplace:TagResource: Tagging -> Tagging, Write
- ce:TagResource: Tagging -> Tagging, Write
- elemental-inference:TagResource: Tagging -> Tagging, Write
- finspace:TagResource: Tagging -> Tagging, Write
- repostspace:TagResource: Tagging -> Tagging, Write
- sms-voice:TagResource: Tagging -> Tagging, Write
- vpc-lattice:TagResource: Tagging -> Tagging, Write
- aws-marketplace:UntagResource: Tagging -> Tagging, Write
- ce:UntagResource: Tagging -> Tagging, Write
- elemental-inference:UntagResource: Tagging -> Tagging, Write
- finspace:UntagResource: Tagging -> Tagging, Write
- repostspace:UntagResource: Tagging -> Tagging, Write
- sms-voice:UntagResource: Tagging -> Tagging, Write
- vpc-lattice:UntagResource: Tagging -> Tagging, Write
- chatbot:TagResource: Tagging -> Tagging, Write
- chatbot:UntagResource: Tagging -> Tagging, Write
- chime:TagAttendee: Tagging -> Tagging, Write
- chime:TagMeeting: Tagging -> Tagging, Write
- chime:TagResource: Tagging -> Tagging, Write
- chime:UntagAttendee: Tagging -> Tagging, Write
- chime:UntagMeeting: Tagging -> Tagging, Write
- chime:UntagResource: Tagging -> Tagging, Write
- cleanrooms-ml:PutConfiguredAudienceModelPolicy: Permissions management -> Permissions management, Write
- cleanrooms-ml:TagResource: Tagging -> Tagging, Write
- cleanrooms-ml:UnTagResource: Tagging -> Tagging, Write
- cleanrooms:TagResource: Tagging -> Tagging, Write
- cleanrooms:UntagResource: Tagging -> Tagging, Write
- cloud9:TagResource: Tagging -> Tagging, Write
- cloud9:UntagResource: Tagging -> Tagging, Write
- clouddirectory:TagResource: Tagging -> Tagging, Write
- clouddirectory:UntagResource: Tagging -> Tagging, Write
- cloudformation:SetStackPolicy: Permissions management -> Permissions management, Write
- cloudformation:TagResource: Tagging -> Tagging, Write
- cloudformation:UntagResource: Tagging -> Tagging, Write
- cloudfront:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- cloudfront:TagResource: Tagging -> Tagging, Write
- cloudfront:UntagResource: Tagging -> Tagging, Write
- cloudhsm:DeleteResourcePolicy: Write -> Permissions management, Write
- cloudhsm:PutResourcePolicy: Write -> Permissions management, Write
- cloudhsm:TagResource: Tagging -> Tagging, Write
- cloudhsm:UntagResource: Tagging -> Tagging, Write
- cloudsearch:AddTags: Tagging -> Tagging, Write
- cloudsearch:RemoveTags: Tagging -> Tagging, Write
- cloudsearch:UpdateServiceAccessPolicies: Permissions management -> Permissions management, Write
- cloudtrail:AddTags: Tagging -> Tagging, Write
- cloudtrail:RemoveTags: Tagging -> Tagging, Write
- cloudwatch:TagResource: Tagging -> Tagging, Write
- cloudwatch:UntagResource: Tagging -> Tagging, Write
- codeartifact:DeleteDomainPermissionsPolicy: Permissions management -> Permissions management, Write
- codeartifact:DeleteRepositoryPermissionsPolicy: Permissions management -> Permissions management, Write
- codeartifact:TagResource: Tagging -> Tagging, Write
- codeartifact:UntagResource: Tagging -> Tagging, Write
- codebuild:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- codebuild:PutResourcePolicy: Permissions management -> Permissions management, Write
- codecatalyst:TagResource: Tagging -> Tagging, Write
- codecatalyst:UntagResource: Tagging -> Tagging, Write
- codecommit:TagResource: Tagging -> Tagging, Write
- codecommit:UntagResource: Tagging -> Tagging, Write
- codeconnections:TagResource: Tagging -> Tagging, Write
- codeconnections:UntagResource: Tagging -> Tagging, Write
- codedeploy:AddTagsToOnPremisesInstances: Tagging -> Tagging, Write
- codedeploy:RemoveTagsFromOnPremisesInstances: Tagging -> Tagging, Write
- codedeploy:TagResource: Tagging -> Tagging, Write
- codedeploy:UntagResource: Tagging -> Tagging, Write
- codeguru-profiler:PutPermission: Permissions management -> Permissions management, Write
- codeguru-profiler:RemovePermission: Permissions management -> Permissions management, Write
- codeguru-profiler:TagResource: Tagging -> Tagging, Write
- codeguru-profiler:UntagResource: Tagging -> Tagging, Write
- codeguru-reviewer:TagResource: Tagging -> Tagging, Write
- codeguru-reviewer:UnTagResource: Tagging -> Tagging, Write
- codeguru-security:TagResource: Tagging -> Tagging, Write
- codeguru-security:UntagResource: Tagging -> Tagging, Write
- codepipeline:TagResource: Tagging -> Tagging, Write
- codepipeline:UntagResource: Tagging -> Tagging, Write
- codestar-connections:TagResource: Tagging -> Tagging, Write
- codestar-connections:UntagResource: Tagging -> Tagging, Write
- codestar-notifications:TagResource: Tagging -> Tagging, Write
- codestar-notifications:UntagResource: Tagging -> Tagging, Write
- codestar:AssociateTeamMember: Permissions management -> Permissions management, Write
- codestar:CreateProject: Permissions management -> Permissions management, Write
- codestar:DeleteProject: Permissions management -> Permissions management, Write
- codestar:DisassociateTeamMember: Permissions management -> Permissions management, Write
- codestar:TagProject: Tagging -> Tagging, Write
- codestar:UntagProject: Tagging -> Tagging, Write
- codestar:UpdateTeamMember: Permissions management -> Permissions management, Write
- codewhisperer:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- codewhisperer:TagResource: Tagging -> Tagging, Write
- codewhisperer:UntagResource: Tagging -> Tagging, Write
- cognito-identity:TagResource: Tagging -> Tagging, Write
- cognito-identity:UntagResource: Tagging -> Tagging, Write
- cognito-idp:TagResource: Tagging -> Tagging, Write
- cognito-idp:UntagResource: Tagging -> Tagging, Write
- comprehend:TagResource: Tagging -> Tagging, Write
- comprehend:UntagResource: Tagging -> Tagging, Write
- appconfig:TagResource: Tagging -> Tagging, Write
- config:TagResource: Tagging -> Tagging, Write
- route53-recovery-control-config:TagResource: Tagging -> Tagging, Write
- appconfig:UntagResource: Tagging -> Tagging, Write
- config:UntagResource: Tagging -> Tagging, Write
- route53-recovery-control-config:UntagResource: Tagging -> Tagging, Write
- connect-campaigns:TagResource: Tagging -> Tagging, Write
- connect-campaigns:UntagResource: Tagging -> Tagging, Write
- connect:TagResource: Tagging -> Tagging, Write
- directconnect:TagResource: Tagging -> Tagging, Write
- interconnect:TagResource: Tagging -> Tagging, Write
- kafkaconnect:TagResource: Tagging -> Tagging, Write
- mediaconnect:TagResource: Tagging -> Tagging, Write
- connect:UntagResource: Tagging -> Tagging, Write
- directconnect:UntagResource: Tagging -> Tagging, Write
- interconnect:UntagResource: Tagging -> Tagging, Write
- kafkaconnect:UntagResource: Tagging -> Tagging, Write
- mediaconnect:UntagResource: Tagging -> Tagging, Write
- controltower:TagResource: Tagging -> Tagging, Write
- controltower:UntagResource: Tagging -> Tagging, Write
- cur:TagResource: Tagging -> Tagging, Write
- cur:UntagResource: Tagging -> Tagging, Write
- databrew:TagResource: Tagging -> Tagging, Write
- databrew:UntagResource: Tagging -> Tagging, Write
- dataexchange:TagResource: Tagging -> Tagging, Write
- dataexchange:UntagResource: Tagging -> Tagging, Write
- datapipeline:AddTags: Tagging -> Tagging, Write
- datapipeline:RemoveTags: Tagging -> Tagging, Write
- datasync:TagResource: Tagging -> Tagging, Write
- datasync:UntagResource: Tagging -> Tagging, Write
- datazone:AddPolicyGrant: Permissions management -> Permissions management, Write
- datazone:DeleteDomainSharingPolicy: Permissions management -> Permissions management, Write
- datazone:GetIamPortalLoginUrl: Permissions management -> Permissions management, Write
- datazone:PutDomainSharingPolicy: Permissions management -> Permissions management, Write
- datazone:RemovePolicyGrant: Permissions management -> Permissions management, Write
- datazone:RevokeSubscription: Permissions management -> Permissions management, Write
- datazone:TagResource: Tagging -> Tagging, Write
- datazone:UntagResource: Tagging -> Tagging, Write
- dax:TagResource: Tagging -> Tagging, Write
- dax:UntagResource: Tagging -> Tagging, Write
- deadline:AssociateMemberToFarm: Permissions management -> Permissions management, Write
- deadline:AssociateMemberToFleet: Permissions management -> Permissions management, Write
- deadline:AssociateMemberToJob: Permissions management -> Permissions management, Write
- deadline:AssociateMemberToQueue: Permissions management -> Permissions management, Write
- deadline:DisassociateMemberFromFarm: Permissions management -> Permissions management, Write
- deadline:DisassociateMemberFromFleet: Permissions management -> Permissions management, Write
- deadline:DisassociateMemberFromJob: Permissions management -> Permissions management, Write
- deadline:DisassociateMemberFromQueue: Permissions management -> Permissions management, Write
- deadline:TagResource: Tagging -> Tagging, Write
- deadline:UntagResource: Tagging -> Tagging, Write
- detective:TagResource: Tagging -> Tagging, Write
- detective:UntagResource: Tagging -> Tagging, Write
- devicefarm:TagResource: Tagging -> Tagging, Write
- devicefarm:UntagResource: Tagging -> Tagging, Write
- directconnect:TagResource: Tagging -> Tagging, Write
- directconnect:UntagResource: Tagging -> Tagging, Write
- discovery:CreateTags: Tagging -> Tagging, Write
- discovery:DeleteTags: Tagging -> Tagging, Write
- dlm:TagResource: Tagging -> Tagging, Write
- dlm:UntagResource: Tagging -> Tagging, Write
- dms:AddTagsToResource: Tagging -> Tagging, Write
- dms:RemoveTagsFromResource: Tagging -> Tagging, Write
- docdb-elastic:TagResource: Tagging -> Tagging, Write
- docdb-elastic:UntagResource: Tagging -> Tagging, Write
- drs:TagResource: Tagging -> Tagging, Write
- drs:UntagResource: Tagging -> Tagging, Write
- ds:AccessDSData: Permissions management -> Permissions management, Write
- ds:AddTagsToResource: Tagging -> Tagging, Write
- rds:AddTagsToResource: Tagging -> Tagging, Write
- ds:RemoveTagsFromResource: Tagging -> Tagging, Write
- rds:RemoveTagsFromResource: Tagging -> Tagging, Write
- dsql:TagResource: Tagging -> Tagging, Write
- dsql:UntagResource: Tagging -> Tagging, Write
- dynamodb:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- dynamodb:PutResourcePolicy: Permissions management -> Permissions management, Write
- dynamodb:TagResource: Tagging -> Tagging, Write
- dynamodb:UntagResource: Tagging -> Tagging, Write
- dynamodb:UpdateAbacStatus: Permissions management -> Permissions management, Write
- ec2:AttachApplianceToNatGateway: Permissions management -> Permissions management, Write
- ec2:AttachResourcesToPlacementGroup: Permissions management -> Permissions management, Write
- ec2:CancelImageLaunchPermission: Permissions management -> Permissions management, Write
- ec2:CreateCoipPoolPermission: Permissions management -> Permissions management, Write
- ec2:CreateLocalGatewayRouteTablePermission: Permissions management -> Permissions management, Write
- ec2:CreateNetworkInterfacePermission: Permissions management -> Permissions management, Write
- ec2:CreateOdbNetworkPeering: Permissions management -> Permissions management, Write
- ec2:CreateTags: Tagging -> Tagging, Write
- ec2:DeleteCoipPoolPermission: Permissions management -> Permissions management, Write
- ec2:DeleteLocalGatewayRouteTablePermission: Permissions management -> Permissions management, Write
- ec2:DeleteNetworkInterfacePermission: Permissions management -> Permissions management, Write
- ec2:DeleteOdbNetworkPeering: Permissions management -> Permissions management, Write
- ec2:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- ec2:DeleteTags: Tagging -> Tagging, Write
- ec2:DetachApplianceFromNatGateway: Permissions management -> Permissions management, Write
- ec2:DetachResourcesFromPlacementGroup: Permissions management -> Permissions management, Write
- ec2:DisableImageBlockPublicAccess: Permissions management -> Permissions management, Write
- ec2:DisableSnapshotBlockPublicAccess: Permissions management -> Permissions management, Write
- ec2:EnableImageBlockPublicAccess: Permissions management -> Permissions management, Write
- ec2:EnableSnapshotBlockPublicAccess: Permissions management -> Permissions management, Write
- ec2:ModifyOdbNetworkPeering: Permissions management -> Permissions management, Write
- ec2:ModifySnapshotAttribute: Permissions management -> Permissions management, Write
- ec2:ModifyVpcEndpointServicePermissions: Permissions management -> Permissions management, Write
- ec2:PutResourcePolicy: Permissions management -> Permissions management, Write
- ec2:ResetSnapshotAttribute: Permissions management -> Permissions management, Write
- ecr-public:SetRepositoryPolicy: Permissions management -> Permissions management, Write
- ecr-public:TagResource: Tagging -> Tagging, Write
- ecr-public:UntagResource: Tagging -> Tagging, Write
- ecr:DeleteRegistryPolicy: Permissions management -> Permissions management, Write
- ecr:DeleteRepositoryPolicy: Permissions management -> Permissions management, Write
- ecr:PutRegistryPolicy: Permissions management -> Permissions management, Write
- ecr:SetRepositoryPolicy: Permissions management -> Permissions management, Write
- ecr:TagResource: Tagging -> Tagging, Write
- ecr:UntagResource: Tagging -> Tagging, Write
- ecs:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- ecs:TagResource: Tagging -> Tagging, Write
- ecs:UntagResource: Tagging -> Tagging, Write
- eks:TagResource: Tagging -> Tagging, Write
- eks:UntagResource: Tagging -> Tagging, Write
- elasticache:AddTagsToResource: Tagging -> Tagging, Write
- elasticache:RemoveTagsFromResource: Tagging -> Tagging, Write
- elasticbeanstalk:AddTags: Tagging -> Tagging, Write
- elasticbeanstalk:RemoveTags: Tagging -> Tagging, Write
- elasticbeanstalk:UpdateTagsForResource: Tagging -> Tagging, Write
- elasticfilesystem:CreateTags: Tagging -> Tagging, Write
- elasticfilesystem:DeleteFileSystemPolicy: Permissions management -> Permissions management, Write
- elasticfilesystem:DeleteTags: Tagging -> Tagging, Write
- elasticfilesystem:PutFileSystemPolicy: Permissions management -> Permissions management, Write
- elasticfilesystem:TagResource: Tagging -> Tagging, Write
- elasticfilesystem:UntagResource: Tagging -> Tagging, Write
- elasticloadbalancing:AddTags: Tagging -> Tagging, Write
- elasticloadbalancing:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- elasticloadbalancing:RemoveTags: Tagging -> Tagging, Write
- elasticmapreduce:AddTags: Tagging -> Tagging, Write
- elasticmapreduce:DeleteWorkspaceAccess: Permissions management -> Permissions management, Write
- elasticmapreduce:PutBlockPublicAccessConfiguration: Permissions management -> Permissions management, Write
- elasticmapreduce:PutWorkspaceAccess: Permissions management -> Permissions management, Write
- elasticmapreduce:RemoveTags: Tagging -> Tagging, Write
- elemental-inference:TagResource: Tagging -> Tagging, Write
- elemental-inference:UntagResource: Tagging -> Tagging, Write
- elemental-support-cases:TagCase: Tagging -> Tagging, Write
- elemental-support-cases:UntagCase: Tagging -> Tagging, Write
- emr-containers:TagResource: Tagging -> Tagging, Write
- emr-containers:UntagResource: Tagging -> Tagging, Write
- emr-serverless:TagResource: Tagging -> Tagging, Write
- emr-serverless:UntagResource: Tagging -> Tagging, Write
- entityresolution:AddPolicyStatement: Permissions management -> Permissions management, Write
- entityresolution:DeletePolicyStatement: Permissions management -> Permissions management, Write
- entityresolution:PutPolicy: Permissions management -> Permissions management, Write
- entityresolution:TagResource: Tagging -> Tagging, Write
- entityresolution:UntagResource: Tagging -> Tagging, Write
- entityresolution:UseIdNamespace: Permissions management -> Permissions management, Write
- entityresolution:UseWorkflow: Permissions management -> Permissions management, Write
- es:AddTags: Tagging -> Tagging, Write
- es:RemoveTags: Tagging -> Tagging, Write
- events:PutPermission: Permissions management -> Permissions management, Write
- events:RemovePermission: Permissions management -> Permissions management, Write
- events:TagResource: Tagging -> Tagging, Write
- iotevents:TagResource: Tagging -> Tagging, Write
- events:UntagResource: Tagging -> Tagging, Write
- iotevents:UntagResource: Tagging -> Tagging, Write
- evidently:TagResource: Tagging -> Tagging, Write
- evidently:UntagResource: Tagging -> Tagging, Write
- evs:TagResource: Tagging -> Tagging, Write
- evs:UntagResource: Tagging -> Tagging, Write
- finspace:TagResource: Tagging -> Tagging, Write
- finspace:UntagResource: Tagging -> Tagging, Write
- firehose:TagDeliveryStream: Tagging -> Tagging, Write
- firehose:UntagDeliveryStream: Tagging -> Tagging, Write
- fis:TagResource: Tagging -> Tagging, Write
- fis:UntagResource: Tagging -> Tagging, Write
- fms:TagResource: Tagging -> Tagging, Write
- fms:UntagResource: Tagging -> Tagging, Write
- forecast:TagResource: Tagging -> Tagging, Write
- forecast:UntagResource: Tagging -> Tagging, Write
- frauddetector:TagResource: Tagging -> Tagging, Write
- frauddetector:UntagResource: Tagging -> Tagging, Write
- fsx:BypassSnaplockEnterpriseRetention: Permissions management -> Permissions management, Write
- fsx:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- fsx:GetResourcePolicy: Permissions management -> Permissions management, Write
- fsx:ManageBackupPrincipalAssociations: Permissions management -> Permissions management, Write
- fsx:PutResourcePolicy: Permissions management -> Permissions management, Write
- fsx:TagResource: Tagging -> Tagging, Write
- fsx:UntagResource: Tagging -> Tagging, Write
- gamelift:TagResource: Tagging -> Tagging, Write
- gamelift:UntagResource: Tagging -> Tagging, Write
- gameliftstreams:TagResource: Tagging -> Tagging, Write
- gameliftstreams:UntagResource: Tagging -> Tagging, Write
- geo:TagResource: Tagging -> Tagging, Write
- geo:UntagResource: Tagging -> Tagging, Write
- glacier:AbortVaultLock: Permissions management -> Permissions management, Write
- glacier:AddTagsToVault: Tagging -> Tagging, Write
- glacier:CompleteVaultLock: Permissions management -> Permissions management, Write
- glacier:DeleteVaultAccessPolicy: Permissions management -> Permissions management, Write
- glacier:InitiateVaultLock: Permissions management -> Permissions management, Write
- glacier:RemoveTagsFromVault: Tagging -> Tagging, Write
- glacier:SetDataRetrievalPolicy: Permissions management -> Permissions management, Write
- glacier:SetVaultAccessPolicy: Permissions management -> Permissions management, Write
- globalaccelerator:TagResource: Tagging -> Tagging, Write
- globalaccelerator:UntagResource: Tagging -> Tagging, Write
- glue:BatchGetStageFiles: Permissions management -> Permissions management, Write
- glue:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- glue:DeregisterDataPreview: Permissions management -> Permissions management, Write
- glue:DescribeConnectionType: Permissions management -> Permissions management, Write
- glue:DescribeEntity: Permissions management -> Permissions management, Write
- glue:GetDataPreviewStatement: Permissions management -> Permissions management, Write
- glue:GetEnvironment: Permissions management -> Permissions management, Write
-glue:GetExecutors;Permissions management
- glue:GetExecutorsThreads: Permissions management -> Permissions management, Write
+glue:GetExecutorsThreads;Permissions management, Write
- glue:GetExecutorsThreads: Permissions management -> Permissions management, Write
- glue:GetLogParsingStatus: Permissions management -> Permissions management, Write
- glue:GetNotebookInstanceStatus: Permissions management -> Permissions management, Write
- glue:GetQueries: Permissions management -> Permissions management, Write
- glue:GetQuery: Permissions management -> Permissions management, Write
- glue:GetRecipeAction: Permissions management -> Permissions management, Write
-glue:GetStage;Permissions management
-glue:GetStageAttempt;Permissions management
-glue:GetStageAttemptTaskList;Permissions management
-glue:GetStageAttemptTaskSummary;Permissions management
-glue:GetStageFiles;Permissions management
- glue:GetStages: Permissions management -> Permissions management, Write
+glue:GetStageAttempt;Permissions management, Write
+glue:GetStageAttemptTaskList;Permissions management, Write
+glue:GetStageAttemptTaskSummary;Permissions management, Write
+glue:GetStageFiles;Permissions management, Write
+glue:GetStages;Permissions management, Write
-glue:GetStageAttempt;Permissions management
-glue:GetStageAttemptTaskList;Permissions management
- glue:GetStageAttemptTaskSummary: Permissions management -> Permissions management, Write
+glue:GetStageAttemptTaskList;Permissions management, Write
+glue:GetStageAttemptTaskSummary;Permissions management, Write
- glue:GetStageAttemptTaskList: Permissions management -> Permissions management, Write
- glue:GetStageAttemptTaskSummary: Permissions management -> Permissions management, Write
- glue:GetStageFiles: Permissions management -> Permissions management, Write
- glue:GetStages: Permissions management -> Permissions management, Write
-glue:GetStorage;Permissions management
- glue:GetStorageUnit: Permissions management -> Permissions management, Write
+glue:GetStorageUnit;Permissions management, Write
- glue:GetStorageUnit: Permissions management -> Permissions management, Write
- glue:GlueNotebookAuthorize: Permissions management -> Permissions management, Write
- glue:GlueNotebookRefreshCredentials: Permissions management -> Permissions management, Write
- glue:ListConnectionTypes: Permissions management -> Permissions management, Write
- glue:ListEntities: Permissions management -> Permissions management, Write
- glue:ManagedConnector: Permissions management -> Permissions management, Write
- glue:PutResourcePolicy: Permissions management -> Permissions management, Write
- glue:RefreshOAuth2Tokens: Permissions management -> Permissions management, Write
- glue:RequestLogParsing: Permissions management -> Permissions management, Write
- glue:RunDataPreviewStatement: Permissions management -> Permissions management, Write
- glue:SendRecipeAction: Permissions management -> Permissions management, Write
- glue:StartNotebook: Permissions management -> Permissions management, Write
- glue:TagResource: Tagging -> Tagging, Write
- glue:TerminateNotebook: Permissions management -> Permissions management, Write
- glue:TestConnection: Permissions management -> Permissions management, Write
- glue:UntagResource: Tagging -> Tagging, Write
- glue:UseGlueStudio: Permissions management -> Permissions management, Write
- grafana:TagResource: Tagging -> Tagging, Write
- grafana:UntagResource: Tagging -> Tagging, Write
- grafana:UpdatePermissions: Permissions management -> Permissions management, Write
- greengrass:AssociateServiceRoleToAccount: Permissions management -> Permissions management, Write
- greengrass:TagResource: Tagging -> Tagging, Write
- greengrass:UntagResource: Tagging -> Tagging, Write
- groundstation:TagResource: Tagging -> Tagging, Write
- groundstation:UntagResource: Tagging -> Tagging, Write
- guardduty:TagResource: Tagging -> Tagging, Write
- guardduty:UntagResource: Tagging -> Tagging, Write
- health-agent:TagResource: Tagging -> Tagging, Write
- health-agent:UntagResource: Tagging -> Tagging, Write
- health:DisableHealthServiceAccessForOrganization: Permissions management -> Permissions management, Write
- health:EnableHealthServiceAccessForOrganization: Permissions management -> Permissions management, Write
- healthlake:TagResource: Tagging -> Tagging, Write
- healthlake:UntagResource: Tagging -> Tagging, Write
- honeycode:ListTagsForResource: Tagging -> Tagging, Write
- honeycode:TagResource: Tagging -> Tagging, Write
- honeycode:UntagResource: Tagging -> Tagging, Write
- iam:AttachGroupPolicy: Permissions management -> Permissions management, Write
- iam:AttachRolePolicy: Permissions management -> Permissions management, Write
- iam:AttachUserPolicy: Permissions management -> Permissions management, Write
-iam:CreatePolicy;Permissions management
- iam:CreatePolicyVersion: Permissions management -> Permissions management, Write
+iam:CreatePolicyVersion;Permissions management, Write
- iam:CreatePolicyVersion: Permissions management -> Permissions management, Write
- iam:DeleteAccountPasswordPolicy: Permissions management -> Permissions management, Write
- iam:DeleteGroupPolicy: Permissions management -> Permissions management, Write
-iam:DeletePolicy;Permissions management
- iam:DeletePolicyVersion: Permissions management -> Permissions management, Write
+iam:DeletePolicyVersion;Permissions management, Write
- iam:DeletePolicyVersion: Permissions management -> Permissions management, Write
- iam:DeleteRolePermissionsBoundary: Permissions management -> Permissions management, Write
- iam:DeleteRolePolicy: Permissions management -> Permissions management, Write
- iam:DeleteUserPermissionsBoundary: Permissions management -> Permissions management, Write
- iam:DeleteUserPolicy: Permissions management -> Permissions management, Write
- iam:DetachGroupPolicy: Permissions management -> Permissions management, Write
- iam:DetachRolePolicy: Permissions management -> Permissions management, Write
- iam:DetachUserPolicy: Permissions management -> Permissions management, Write
- iam:PutGroupPolicy: Permissions management -> Permissions management, Write
- iam:PutRolePermissionsBoundary: Permissions management -> Permissions management, Write
- iam:PutRolePolicy: Permissions management -> Permissions management, Write
- iam:PutUserPermissionsBoundary: Permissions management -> Permissions management, Write
- iam:PutUserPolicy: Permissions management -> Permissions management, Write
- iam:SetDefaultPolicyVersion: Permissions management -> Permissions management, Write
- iam:TagInstanceProfile: Tagging -> Tagging, Write
- iam:TagMFADevice: Tagging -> Tagging, Write
- iam:TagOpenIDConnectProvider: Tagging -> Tagging, Write
- iam:TagPolicy: Tagging -> Tagging, Write
- iam:TagRole: Tagging -> Tagging, Write
- iam:TagSAMLProvider: Tagging -> Tagging, Write
- iam:TagServerCertificate: Tagging -> Tagging, Write
- iam:TagUser: Tagging -> Tagging, Write
- iam:UntagInstanceProfile: Tagging -> Tagging, Write
- iam:UntagMFADevice: Tagging -> Tagging, Write
- iam:UntagOpenIDConnectProvider: Tagging -> Tagging, Write
- iam:UntagPolicy: Tagging -> Tagging, Write
- iam:UntagRole: Tagging -> Tagging, Write
- iam:UntagSAMLProvider: Tagging -> Tagging, Write
- iam:UntagServerCertificate: Tagging -> Tagging, Write
- iam:UntagUser: Tagging -> Tagging, Write
- iam:UpdateAssumeRolePolicy: Permissions management -> Permissions management, Write
- identity-sync:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- imagebuilder:PutComponentPolicy: Permissions management -> Permissions management, Write
- imagebuilder:PutContainerRecipePolicy: Permissions management -> Permissions management, Write
- imagebuilder:PutImagePolicy: Permissions management -> Permissions management, Write
- imagebuilder:PutImageRecipePolicy: Permissions management -> Permissions management, Write
- imagebuilder:TagResource: Tagging -> Tagging, Write
- imagebuilder:UntagResource: Tagging -> Tagging, Write
- inspector2:TagResource: Tagging -> Tagging, Write
- inspector2:UntagResource: Tagging -> Tagging, Write
- inspector:SetTagsForResource: Tagging -> Tagging, Write
- interconnect:TagResource: Tagging -> Tagging, Write
- interconnect:UntagResource: Tagging -> Tagging, Write
- internetmonitor:TagResource: Tagging -> Tagging, Write
- internetmonitor:UntagResource: Tagging -> Tagging, Write
- invoicing:TagResource: Tagging -> Tagging, Write
- invoicing:UntagResource: Tagging -> Tagging, Write
- iot:AttachPolicy: Permissions management -> Permissions management, Write
- iot:AttachPrincipalPolicy: Permissions management -> Permissions management, Write
-iot:CreatePolicy;Permissions management
- iot:CreatePolicyVersion: Permissions management -> Permissions management, Write
+iot:CreatePolicyVersion;Permissions management, Write
- iot:CreatePolicyVersion: Permissions management -> Permissions management, Write
-iot:DeletePolicy;Permissions management
- iot:DeletePolicyVersion: Permissions management -> Permissions management, Write
+iot:DeletePolicyVersion;Permissions management, Write
- iot:DeletePolicyVersion: Permissions management -> Permissions management, Write
- iot:DetachPolicy: Permissions management -> Permissions management, Write
- iot:DetachPrincipalPolicy: Permissions management -> Permissions management, Write
- iot:SetDefaultAuthorizer: Permissions management -> Permissions management, Write
- iot:SetDefaultPolicyVersion: Permissions management -> Permissions management, Write
- iot:TagResource: Tagging -> Tagging, Write
- iot:UntagResource: Tagging -> Tagging, Write
- iotanalytics:TagResource: Tagging -> Tagging, Write
- iotanalytics:UntagResource: Tagging -> Tagging, Write
- iotdeviceadvisor:TagResource: Tagging -> Tagging, Write
- iotdeviceadvisor:UntagResource: Tagging -> Tagging, Write
- iotevents:TagResource: Tagging -> Tagging, Write
- iotevents:UntagResource: Tagging -> Tagging, Write
- iotfleethub:TagResource: Tagging -> Tagging, Write
- iotfleethub:UntagResource: Tagging -> Tagging, Write
- iotfleetwise:GenerateCommandPayload: Permissions management -> Permissions management, Write
- iotfleetwise:TagResource: Tagging -> Tagging, Write
- iotfleetwise:UntagResource: Tagging -> Tagging, Write
- iotmanagedintegrations:TagResource: Tagging -> Tagging, Write
- iotmanagedintegrations:UntagResource: Tagging -> Tagging, Write
- iotsitewise:TagResource: Tagging -> Tagging, Write
- iotsitewise:UntagResource: Tagging -> Tagging, Write
- iottwinmaker:TagResource: Tagging -> Tagging, Write
- iottwinmaker:UntagResource: Tagging -> Tagging, Write
- iotwireless:TagResource: Tagging -> Tagging, Write
- iotwireless:UntagResource: Tagging -> Tagging, Write
- ivs:TagResource: Tagging -> Tagging, Write
- ivs:UntagResource: Tagging -> Tagging, Write
- ivschat:TagResource: Tagging -> Tagging, Write
- ivschat:UntagResource: Tagging -> Tagging, Write
- kafka:TagResource: Tagging -> Tagging, Write
- kafka:UntagResource: Tagging -> Tagging, Write
- kafkaconnect:TagResource: Tagging -> Tagging, Write
- kafkaconnect:UntagResource: Tagging -> Tagging, Write
- kendra-ranking:TagResource: Tagging -> Tagging, Write
- kendra-ranking:UntagResource: Tagging -> Tagging, Write
- kendra:TagResource: Tagging -> Tagging, Write
- kendra:UntagResource: Tagging -> Tagging, Write
- kinesis:AddTagsToStream: Tagging -> Tagging, Write
- kinesis:RemoveTagsFromStream: Tagging -> Tagging, Write
- kinesis:TagResource: Tagging -> Tagging, Write
- kinesis:UntagResource: Tagging -> Tagging, Write
- kinesisanalytics:TagResource: Tagging -> Tagging, Write
- kinesisanalytics:UntagResource: Tagging -> Tagging, Write
- kinesisvideo:TagResource: Tagging -> Tagging, Write
- kinesisvideo:TagStream: Tagging -> Tagging, Write
- kinesisvideo:UntagResource: Tagging -> Tagging, Write
- kinesisvideo:UntagStream: Tagging -> Tagging, Write
- kms:CreateGrant: Permissions management -> Permissions management, Write
- kms:PutKeyPolicy: Permissions management -> Permissions management, Write
- kms:RetireGrant: Permissions management -> Permissions management, Write
- kms:RevokeGrant: Permissions management -> Permissions management, Write
- kms:TagResource: Tagging -> Tagging, Write
- kms:UntagResource: Tagging -> Tagging, Write
- lakeformation:AddLFTagsToResource: Tagging -> Tagging, Write
- lakeformation:BatchGrantPermissions: Permissions management -> Permissions management, Write
- lakeformation:BatchRevokePermissions: Permissions management -> Permissions management, Write
- lakeformation:GrantPermissions: Permissions management -> Permissions management, Write
- lakeformation:PutDataLakeSettings: Permissions management -> Permissions management, Write
- lakeformation:RemoveLFTagsFromResource: Tagging -> Tagging, Write
- lakeformation:RevokePermissions: Permissions management -> Permissions management, Write
- lambda:AddLayerVersionPermission: Permissions management -> Permissions management, Write
- lambda:AddPermission: Permissions management -> Permissions management, Write
- lambda:DisableReplication: Permissions management -> Permissions management, Write
- lambda:EnableReplication: Permissions management -> Permissions management, Write
- lambda:RemoveLayerVersionPermission: Permissions management -> Permissions management, Write
- lambda:RemovePermission: Permissions management -> Permissions management, Write
- lambda:TagResource: Tagging -> Tagging, Write
- lambda:UntagResource: Tagging -> Tagging, Write
- launchwizard:TagResource: Tagging -> Tagging, Write
- launchwizard:UntagResource: Tagging -> Tagging, Write
- lex:TagResource: Tagging -> Tagging, Write
- lex:UntagResource: Tagging -> Tagging, Write
- license-manager-linux-subscriptions:TagResource: Tagging -> Tagging, Write
- license-manager-linux-subscriptions:UntagResource: Tagging -> Tagging, Write
- license-manager-user-subscriptions:TagResource: Tagging -> Tagging, Write
- license-manager-user-subscriptions:UntagResource: Tagging -> Tagging, Write
- license-manager:TagResource: Tagging -> Tagging, Write
- license-manager:UntagResource: Tagging -> Tagging, Write
- license-manager:UpdateServiceSettings: Permissions management -> Permissions management, Write
- lightsail:TagResource: Tagging -> Tagging, Write
- lightsail:UntagResource: Tagging -> Tagging, Write
- logs:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- logs:PutResourcePolicy: Permissions management -> Permissions management, Write
- logs:TagLogGroup: Tagging -> Tagging, Write
- logs:TagResource: Tagging -> Tagging, Write
- logs:UntagLogGroup: Tagging -> Tagging, Write
- logs:UntagResource: Tagging -> Tagging, Write
- lookoutequipment:TagResource: Tagging -> Tagging, Write
- lookoutequipment:UntagResource: Tagging -> Tagging, Write
- lookoutmetrics:TagResource: Tagging -> Tagging, Write
- lookoutmetrics:UntagResource: Tagging -> Tagging, Write
- lookoutvision:TagResource: Tagging -> Tagging, Write
- lookoutvision:UntagResource: Tagging -> Tagging, Write
- m2:TagResource: Tagging -> Tagging, Write
- m2:UntagResource: Tagging -> Tagging, Write
- machinelearning:AddTags: Tagging -> Tagging, Write
- machinelearning:DeleteTags: Tagging -> Tagging, Write
- macie2:TagResource: Tagging -> Tagging, Write
- macie2:UntagResource: Tagging -> Tagging, Write
- managedblockchain:GET: Permissions management -> Permissions management, Write
- managedblockchain:Invoke: Permissions management -> Permissions management, Write
 managedblockchain:InvokeRpcBitcoinMainnet;Read
 managedblockchain:InvokeRpcBitcoinTestnet;Read
 managedblockchain:InvokeRpcPolygonMainnet;Read
- managedblockchain:POST: Permissions management -> Permissions management, Write
- managedblockchain:TagResource: Tagging -> Tagging, Write
- managedblockchain:UntagResource: Tagging -> Tagging, Write
- mediaconnect:TagResource: Tagging -> Tagging, Write
- mediaconnect:UntagResource: Tagging -> Tagging, Write
- mediaconvert:TagResource: Tagging -> Tagging, Write
- mediaconvert:UntagResource: Tagging -> Tagging, Write
- medialive:CreateTags: Tagging -> Tagging, Write
- medialive:DeleteTags: Tagging -> Tagging, Write
- mediapackage-vod:TagResource: Tagging -> Tagging, Write
- mediapackage-vod:UntagResource: Tagging -> Tagging, Write
- mediapackage:TagResource: Tagging -> Tagging, Write
- mediapackage:UntagResource: Tagging -> Tagging, Write
- mediapackagev2:TagResource: Tagging -> Tagging, Write
- mediapackagev2:UntagResource: Tagging -> Tagging, Write
- mediastore:DeleteContainerPolicy: Permissions management -> Permissions management, Write
- mediastore:PutContainerPolicy: Permissions management -> Permissions management, Write
- mediastore:TagResource: Tagging -> Tagging, Write
- mediastore:UntagResource: Tagging -> Tagging, Write
- mediatailor:DeleteChannelPolicy: Permissions management -> Permissions management, Write
- mediatailor:PutChannelPolicy: Permissions management -> Permissions management, Write
- mediatailor:TagResource: Tagging -> Tagging, Write
- mediatailor:UntagResource: Tagging -> Tagging, Write
- medical-imaging:TagResource: Tagging -> Tagging, Write
- medical-imaging:UntagResource: Tagging -> Tagging, Write
- memorydb:TagResource: Tagging -> Tagging, Write
- memorydb:UntagResource: Tagging -> Tagging, Write
- mgh:TagResource: Tagging -> Tagging, Write
- mgh:UntagResource: Tagging -> Tagging, Write
- mgn:TagResource: Tagging -> Tagging, Write
- mgn:UntagResource: Tagging -> Tagging, Write
- migrationhub-orchestrator:TagResource: Tagging -> Tagging, Write
- migrationhub-orchestrator:UntagResource: Tagging -> Tagging, Write
- mobiletargeting:TagResource: Tagging -> Tagging, Write
- mobiletargeting:UntagResource: Tagging -> Tagging, Write
- monitron:AssociateProjectAdminUser: Permissions management -> Permissions management, Write
- monitron:CreateProjectUserAssociation: Permissions management -> Permissions management, Write
- monitron:CreateUserAccessRoleAssociation: Permissions management -> Permissions management, Write
- monitron:DeleteProjectUserAssociation: Permissions management -> Permissions management, Write
- monitron:DeleteUserAccessRoleAssociation: Permissions management -> Permissions management, Write
- monitron:DisassociateProjectAdminUser: Permissions management -> Permissions management, Write
- monitron:ListProjectAdminUsers: Permissions management -> Permissions management, Write
- monitron:TagResource: Tagging -> Tagging, Write
- monitron:UntagResource: Tagging -> Tagging, Write
- mpa:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- mpa:PutResourcePolicy: Permissions management -> Permissions management, Write
- mpa:TagResource: Tagging -> Tagging, Write
- mpa:UntagResource: Tagging -> Tagging, Write
- mq:CreateTags: Tagging -> Tagging, Write
- mq:DeleteTags: Tagging -> Tagging, Write
- neptune-graph:TagResource: Tagging -> Tagging, Write
- neptune-graph:UntagResource: Tagging -> Tagging, Write
- network-firewall:TagResource: Tagging -> Tagging, Write
- network-firewall:UntagResource: Tagging -> Tagging, Write
- networkflowmonitor:TagResource: Tagging -> Tagging, Write
- networkflowmonitor:UntagResource: Tagging -> Tagging, Write
- networkmanager:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- networkmanager:PutResourcePolicy: Permissions management -> Permissions management, Write
- networkmanager:StartOrganizationServiceAccessUpdate: Permissions management -> Permissions management, Write
- networkmanager:TagResource: Tagging -> Tagging, Write
- networkmanager:UntagResource: Tagging -> Tagging, Write
- networkmonitor:TagResource: Tagging -> Tagging, Write
- networkmonitor:UntagResource: Tagging -> Tagging, Write
- nimble:TagResource: Tagging -> Tagging, Write
- nimble:UntagResource: Tagging -> Tagging, Write
- notifications-contacts:TagResource: Tagging -> Tagging, Write
- notifications-contacts:UntagResource: Tagging -> Tagging, Write
- notifications:DisableNotificationsAccessForOrganization: Permissions management -> Permissions management, Write
- notifications:EnableNotificationsAccessForOrganization: Permissions management -> Permissions management, Write
- codestar-notifications:TagResource: Tagging -> Tagging, Write
- notifications:TagResource: Tagging -> Tagging, Write
- codestar-notifications:UntagResource: Tagging -> Tagging, Write
- notifications:UntagResource: Tagging -> Tagging, Write
- oam:TagResource: Tagging -> Tagging, Write
- oam:UntagResource: Tagging -> Tagging, Write
- observabilityadmin:TagResource: Tagging -> Tagging, Write
- observabilityadmin:UntagResource: Tagging -> Tagging, Write
- odb:ListAutonomousDatabaseCharacterSets: Read -> List
- odb:ListAutonomousDatabaseClones: Read -> List
- odb:ListAutonomousDatabasePeers: Read -> List
- odb:ListAutonomousDatabaseVersions: Read -> List
- odb:ListAutonomousVirtualMachines: Read -> List
- odb:ListDbServers: Read -> List
- odb:ListDbSystemShapes: Read -> List
- odb:ListGiVersions: Read -> List
- odb:ListSystemVersions: Read -> List
- dynamodb:TagResource: Tagging -> Tagging, Write
- odb:TagResource: Tagging -> Tagging, Write
- dynamodb:UntagResource: Tagging -> Tagging, Write
- odb:UntagResource: Tagging -> Tagging, Write
- omics:TagResource: Tagging -> Tagging, Write
- omics:UntagResource: Tagging -> Tagging, Write
- datazone:TagResource: Tagging -> Tagging, Write
- one:TagResource: Tagging -> Tagging, Write
- datazone:UntagResource: Tagging -> Tagging, Write
- one:UntagResource: Tagging -> Tagging, Write
- opensearch:ApplicationAccessAll: Permissions management -> Permissions management, Write
- opsworks-cm:TagResource: Tagging -> Tagging, Write
- opsworks-cm:UntagResource: Tagging -> Tagging, Write
- opsworks:SetPermission: Permissions management -> Permissions management, Write
- opsworks:TagResource: Tagging -> Tagging, Write
- opsworks:UntagResource: Tagging -> Tagging, Write
- opsworks:UpdateUserProfile: Permissions management -> Permissions management, Write
- organizations:AttachPolicy: Write -> Permissions management, Write
- organizations:DeleteResourcePolicy: Write -> Permissions management, Write
- organizations:DetachPolicy: Write -> Permissions management, Write
- organizations:PutResourcePolicy: Write -> Permissions management, Write
- organizations:TagResource: Tagging -> Tagging, Write
- organizations:UntagResource: Tagging -> Tagging, Write
- organizations:UpdatePolicy: Write -> Permissions management, Write
- osis:TagResource: Tagging -> Tagging, Write
- osis:UntagResource: Tagging -> Tagging, Write
- outposts:TagResource: Tagging -> Tagging, Write
- outposts:UntagResource: Tagging -> Tagging, Write
- panorama:TagResource: Tagging -> Tagging, Write
- panorama:UntagResource: Tagging -> Tagging, Write
- partnercentral:TagResource: Tagging -> Tagging, Write
- partnercentral:UntagResource: Tagging -> Tagging, Write
- payment-cryptography:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- payment-cryptography:PutResourcePolicy: Permissions management -> Permissions management, Write
- payment-cryptography:TagResource: Tagging -> Tagging, Write
- payment-cryptography:UntagResource: Tagging -> Tagging, Write
- payments:TagResource: Tagging -> Tagging, Write
- payments:UntagResource: Tagging -> Tagging, Write
- pca-connector-ad:TagResource: Tagging -> Tagging, Write
- pca-connector-ad:UntagResource: Tagging -> Tagging, Write
- pca-connector-scep:TagResource: Tagging -> Tagging, Write
- pca-connector-scep:UntagResource: Tagging -> Tagging, Write
- pcs:TagResource: Tagging -> Tagging, Write
- pcs:UntagResource: Tagging -> Tagging, Write
- personalize:TagResource: Tagging -> Tagging, Write
- personalize:UntagResource: Tagging -> Tagging, Write
- pi:TagResource: Tagging -> Tagging, Write
- pi:UntagResource: Tagging -> Tagging, Write
- pipes:TagResource: Tagging -> Tagging, Write
- pipes:UntagResource: Tagging -> Tagging, Write
- private-networks:TagResource: Tagging -> Tagging, Write
- private-networks:UntagResource: Tagging -> Tagging, Write
- profile:TagResource: Tagging -> Tagging, Write
- profile:UntagResource: Tagging -> Tagging, Write
- proton:TagResource: Tagging -> Tagging, Write
- proton:UntagResource: Tagging -> Tagging, Write
- purchase-orders:TagResource: Tagging -> Tagging, Write
- purchase-orders:UntagResource: Tagging -> Tagging, Write
- q:TagResource: Tagging -> Tagging, Write
- q:UntagResource: Tagging -> Tagging, Write
- qapps:TagResource: Tagging -> Tagging, Write
- qapps:UntagResource: Tagging -> Tagging, Write
- qbusiness:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- qbusiness:TagResource: Tagging -> Tagging, Write
- qbusiness:UntagResource: Tagging -> Tagging, Write
- qdeveloper:TagResource: Tagging -> Tagging, Write
- qdeveloper:UntagResource: Tagging -> Tagging, Write
- qldb:TagResource: Tagging -> Tagging, Write
- qldb:UntagResource: Tagging -> Tagging, Write
- quicksight:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- quicksight:DescribeAutomationGroupPermissions: Permissions management -> Permissions management, Write
- quicksight:DescribeDataSetPermissions: Permissions management -> Read
- quicksight:DescribeDataSourcePermissions: Permissions management -> Read
- quicksight:DescribeKnowledgeBasePermissions: Permissions management -> Permissions management, Write
- quicksight:DescribeSpacePermissions: Permissions management -> Permissions management, Write
- quicksight:DescribeTopicPermissions: Permissions management -> Permissions management, Write
- quicksight:TagResource: Tagging -> Tagging, Write
- quicksight:UntagResource: Tagging -> Tagging, Write
- quicksight:UpdateActionConnectorPermissions: Permissions management -> Permissions management, Write
- quicksight:UpdateAgentPermissions: Permissions management -> Permissions management, Write
- quicksight:UpdateAnalysisPermissions: Permissions management -> Permissions management, Write
- quicksight:UpdateAutomationGroupPermissions: Permissions management -> Permissions management, Write
- quicksight:UpdateDashboardPermissions: Permissions management -> Permissions management, Write
- quicksight:UpdateDataSetPermissions: Permissions management -> Permissions management, Write
- quicksight:UpdateDataSourcePermissions: Permissions management -> Permissions management, Write
- quicksight:UpdateFlowPermissions: Permissions management -> Permissions management, Write
- quicksight:UpdateFolderPermissions: Permissions management -> Permissions management, Write
- quicksight:UpdateKnowledgeBasePermissions: Permissions management -> Permissions management, Write
- quicksight:UpdateSpacePermissions: Permissions management -> Permissions management, Write
- quicksight:UpdateTemplatePermissions: Permissions management -> Permissions management, Write
- quicksight:UpdateThemePermissions: Permissions management -> Permissions management, Write
- quicksight:UpdateTopicPermissions: Permissions management -> Permissions management, Write
- ram:EnableSharingWithAwsOrganization: Permissions management -> Permissions management, Write
- ram:TagResource: Tagging -> Tagging, Write
- ram:UntagResource: Tagging -> Tagging, Write
- rbin:TagResource: Tagging -> Tagging, Write
- rbin:UntagResource: Tagging -> Tagging, Write
- rds-db:connect: Permissions management -> Permissions management, Write
- rds:AddTagsToResource: Tagging -> Tagging, Write
- rds:AuthorizeDBSecurityGroupIngress: Permissions management -> Permissions management, Write
- rds:RemoveTagsFromResource: Tagging -> Tagging, Write
- redshift-serverless:TagResource: Tagging -> Tagging, Write
- redshift-serverless:UntagResource: Tagging -> Tagging, Write
- redshift:AuthorizeDataShare: Permissions management -> Permissions management, Write
- redshift:AuthorizeEndpointAccess: Permissions management -> Permissions management, Write
- redshift:AuthorizeSnapshotAccess: Permissions management -> Permissions management, Write
- redshift:CreateClusterUser: Permissions management -> Permissions management, Write
- redshift:CreateSnapshotCopyGrant: Permissions management -> Permissions management, Write
- redshift:CreateTags: Tagging -> Tagging, Write
- redshift:DeauthorizeDataShare: Permissions management -> Permissions management, Write
- redshift:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- redshift:DeleteTags: Tagging -> Tagging, Write
- redshift:JoinGroup: Permissions management -> Permissions management, Write
- redshift:ModifyClusterIamRoles: Permissions management -> Permissions management, Write
- redshift:PutResourcePolicy: Permissions management -> Permissions management, Write
- redshift:RejectDataShare: Permissions management -> Permissions management, Write
- redshift:RevokeEndpointAccess: Permissions management -> Permissions management, Write
- redshift:RevokeSnapshotAccess: Permissions management -> Permissions management, Write
- refactor-spaces:TagResource: Tagging -> Tagging, Write
- refactor-spaces:UntagResource: Tagging -> Tagging, Write
- rekognition:TagResource: Tagging -> Tagging, Write
- rekognition:UntagResource: Tagging -> Tagging, Write
- repostspace:TagResource: Tagging -> Tagging, Write
- repostspace:UntagResource: Tagging -> Tagging, Write
- resiliencehub:TagResource: Tagging -> Tagging, Write
- resiliencehub:UntagResource: Tagging -> Tagging, Write
- resource-explorer-2:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- resource-explorer-2:PutResourcePolicy: Permissions management -> Permissions management, Write
- resource-explorer-2:TagResource: Tagging -> Tagging, Write
- resource-explorer-2:UntagResource: Tagging -> Tagging, Write
- resource-groups:Tag: Tagging -> Tagging, Write
- resource-groups:Untag: Tagging -> Tagging, Write
- robomaker:TagResource: Tagging -> Tagging, Write
- robomaker:UntagResource: Tagging -> Tagging, Write
- rolesanywhere:TagResource: Tagging -> Tagging, Write
- rolesanywhere:UntagResource: Tagging -> Tagging, Write
- route53-recovery-control-config:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- route53-recovery-control-config:PutResourcePolicy: Permissions management -> Permissions management, Write
- route53-recovery-control-config:TagResource: Tagging -> Tagging, Write
- route53-recovery-control-config:UntagResource: Tagging -> Tagging, Write
- route53-recovery-readiness:TagResource: Tagging -> Tagging, Write
- route53-recovery-readiness:UntagResource: Tagging -> Tagging, Write
- route53:ChangeTagsForResource: Tagging -> Tagging, Write
- route53domains:DeleteTagsForDomain: Tagging -> Tagging, Write
- route53domains:UpdateTagsForDomain: Tagging -> Tagging, Write
- route53globalresolver:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- route53globalresolver:TagResource: Tagging -> Tagging, Write
- route53globalresolver:UntagResource: Tagging -> Tagging, Write
- route53profiles:TagResource: Tagging -> Tagging, Write
- route53profiles:UntagResource: Tagging -> Tagging, Write
- route53resolver:PutFirewallRuleGroupPolicy: Permissions management -> Permissions management, Write
- route53resolver:PutResolverQueryLogConfigPolicy: Permissions management -> Permissions management, Write
- route53resolver:PutResolverRulePolicy: Permissions management -> Permissions management, Write
- route53resolver:TagResource: Tagging -> Tagging, Write
- route53resolver:UntagResource: Tagging -> Tagging, Write
- rtbfabric:TagResource: Tagging -> Tagging, Write
- rtbfabric:UntagResource: Tagging -> Tagging, Write
- rum:TagResource: Tagging -> Tagging, Write
- rum:UntagResource: Tagging -> Tagging, Write
- s3-object-lambda:DeleteObjectTagging: Tagging -> Tagging, Write
- s3-object-lambda:DeleteObjectVersionTagging: Tagging -> Tagging, Write
- s3-object-lambda:PutObjectAcl: Permissions management -> Permissions management, Write
- s3-object-lambda:PutObjectTagging: Tagging -> Tagging, Write
- s3-object-lambda:PutObjectVersionAcl: Permissions management -> Permissions management, Write
- s3-object-lambda:PutObjectVersionTagging: Tagging -> Tagging, Write
- s3-outposts:DeleteAccessPointPolicy: Permissions management -> Permissions management, Write
- s3-outposts:DeleteBucketPolicy: Permissions management -> Permissions management, Write
- s3-outposts:DeleteObjectTagging: Tagging -> Tagging, Write
- s3-outposts:DeleteObjectVersionTagging: Tagging -> Tagging, Write
- s3-outposts:PutAccessPointPolicy: Permissions management -> Permissions management, Write
- s3-outposts:PutBucketPolicy: Permissions management -> Permissions management, Write
- s3-outposts:PutBucketTagging: Tagging -> Tagging, Write
- s3-outposts:PutObjectAcl: Permissions management -> Permissions management, Write
- s3-outposts:PutObjectTagging: Tagging -> Tagging, Write
- s3-outposts:PutObjectVersionTagging: Tagging -> Tagging, Write
- s3-outposts:ReplicateTags: Tagging -> Tagging, Write
- s3:AssociateAccessGrantsIdentityCenter: Permissions management -> Permissions management, Write
- s3:BypassGovernanceRetention: Permissions management -> Permissions management, Write
-s3:CreateAccessGrant;Permissions management
-s3:CreateAccessGrantsInstance;Permissions management
- s3:CreateAccessGrantsLocation: Permissions management -> Permissions management, Write
+s3:CreateAccessGrantsInstance;Permissions management, Write
+s3:CreateAccessGrantsLocation;Permissions management, Write
- s3:CreateAccessGrantsInstance: Permissions management -> Permissions management, Write
- s3:CreateAccessGrantsLocation: Permissions management -> Permissions management, Write
-s3:DeleteAccessGrant;Permissions management
-s3:DeleteAccessGrantsInstance;Permissions management
-s3:DeleteAccessGrantsInstanceResourcePolicy;Permissions management
- s3:DeleteAccessGrantsLocation: Permissions management -> Permissions management, Write
+s3:DeleteAccessGrantsInstance;Permissions management, Write
+s3:DeleteAccessGrantsInstanceResourcePolicy;Permissions management, Write
+s3:DeleteAccessGrantsLocation;Permissions management, Write
-s3:DeleteAccessGrantsInstance;Permissions management
- s3:DeleteAccessGrantsInstanceResourcePolicy: Permissions management -> Permissions management, Write
+s3:DeleteAccessGrantsInstanceResourcePolicy;Permissions management, Write
- s3:DeleteAccessGrantsInstanceResourcePolicy: Permissions management -> Permissions management, Write
- s3:DeleteAccessGrantsLocation: Permissions management -> Permissions management, Write
-s3:DeleteAccessPointPolicy;Permissions management
- s3:DeleteAccessPointPolicyForObjectLambda: Permissions management -> Permissions management, Write
+s3:DeleteAccessPointPolicyForObjectLambda;Permissions management, Write
- s3:DeleteAccessPointPolicyForObjectLambda: Permissions management -> Permissions management, Write
- s3:DeleteBucketPolicy: Permissions management -> Permissions management, Write
- s3:DeleteJobTagging: Tagging -> Tagging, Write
- s3:DeleteObjectTagging: Tagging -> Tagging, Write
- s3:DeleteObjectVersionTagging: Tagging -> Tagging, Write
- s3:DeleteStorageLensConfigurationTagging: Tagging -> Tagging, Write
- s3:DissociateAccessGrantsIdentityCenter: Permissions management -> Permissions management, Write
- s3:ObjectOwnerOverrideToBucketOwner: Permissions management -> Permissions management, Write
- s3:PutAccessGrantsInstanceResourcePolicy: Permissions management -> Permissions management, Write
-s3:PutAccessPointPolicy;Permissions management
- s3:PutAccessPointPolicyForObjectLambda: Permissions management -> Permissions management, Write
+s3:PutAccessPointPolicyForObjectLambda;Permissions management, Write
- s3:PutAccessPointPolicyForObjectLambda: Permissions management -> Permissions management, Write
- s3:PutAccessPointPublicAccessBlock: Permissions management -> Permissions management, Write
- s3:PutAccountPublicAccessBlock: Permissions management -> Permissions management, Write
- s3:PutBucketAcl: Permissions management -> Permissions management, Write
- s3:PutBucketOwnershipControls: Permissions management -> Permissions management, Write
- s3:PutBucketPolicy: Permissions management -> Permissions management, Write
- s3:PutBucketPublicAccessBlock: Permissions management -> Permissions management, Write
- s3:PutBucketTagging: Tagging -> Tagging, Write
- s3:PutJobTagging: Tagging -> Tagging, Write
- s3:PutMultiRegionAccessPointPolicy: Permissions management -> Permissions management, Write
- s3:PutObjectAcl: Permissions management -> Permissions management, Write
- s3:PutObjectTagging: Tagging -> Tagging, Write
- s3:PutObjectVersionAcl: Permissions management -> Permissions management, Write
- s3:PutObjectVersionTagging: Tagging -> Tagging, Write
- s3:PutStorageLensConfigurationTagging: Tagging -> Tagging, Write
- s3:ReplicateTags: Tagging -> Tagging, Write
- s3:TagResource: Tagging -> Tagging, Write
- s3:UntagResource: Tagging -> Tagging, Write
- s3:UpdateAccessGrantsLocation: Permissions management -> Permissions management, Write
- s3express:DeleteAccessPointPolicy: Permissions management -> Permissions management, Write
- s3express:DeleteAccessPointScope: Permissions management -> Permissions management, Write
- s3express:DeleteBucketPolicy: Permissions management -> Permissions management, Write
- s3express:PutAccessPointPolicy: Permissions management -> Permissions management, Write
- s3express:PutAccessPointScope: Permissions management -> Permissions management, Write
- s3express:PutBucketPolicy: Permissions management -> Permissions management, Write
- s3express:TagResource: Tagging -> Tagging, Write
- s3express:UntagResource: Tagging -> Tagging, Write
- s3files:DeleteFileSystemPolicy: Permissions management -> Permissions management, Write
- s3files:PutFileSystemPolicy: Permissions management -> Permissions management, Write
- s3files:TagResource: Tagging -> Tagging, Write
- s3files:UntagResource: Tagging -> Tagging, Write
- s3tables:DeleteTableBucketPolicy: Permissions management -> Permissions management, Write
- s3tables:DeleteTablePolicy: Permissions management -> Permissions management, Write
- s3tables:PutTableBucketPolicy: Permissions management -> Permissions management, Write
- s3tables:PutTablePolicy: Permissions management -> Permissions management, Write
- s3tables:TagResource: Tagging -> Tagging, Write
- s3tables:UntagResource: Tagging -> Tagging, Write
- s3vectors:DeleteVectorBucketPolicy: Permissions management -> Permissions management, Write
- s3vectors:PutVectorBucketPolicy: Permissions management -> Permissions management, Write
- s3vectors:TagResource: Tagging -> Tagging, Write
- s3vectors:UntagResource: Tagging -> Tagging, Write
- sagemaker-geospatial:TagResource: Tagging -> Tagging, Write
- sagemaker-geospatial:UntagResource: Tagging -> Tagging, Write
- sagemaker:AddTags: Tagging -> Tagging, Write
- sagemaker:DeleteTags: Tagging -> Tagging, Write
- savingsplans:TagResource: Tagging -> Tagging, Write
- savingsplans:UntagResource: Tagging -> Tagging, Write
- scheduler:TagResource: Tagging -> Tagging, Write
- scheduler:UntagResource: Tagging -> Tagging, Write
- schemas:TagResource: Tagging -> Tagging, Write
- schemas:UntagResource: Tagging -> Tagging, Write
- scn:TagResource: Tagging -> Tagging, Write
- scn:UntagResource: Tagging -> Tagging, Write
- secretsmanager:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- secretsmanager:PutResourcePolicy: Permissions management -> Permissions management, Write
- secretsmanager:TagResource: Tagging -> Tagging, Write
- secretsmanager:UntagResource: Tagging -> Tagging, Write
- secretsmanager:ValidateResourcePolicy: Permissions management -> Permissions management, Write
- security-ir:TagResource: Tagging -> Tagging, Write
- security-ir:UntagResource: Tagging -> Tagging, Write
- securityagent:TagResource: Tagging -> Tagging, Write
- securityagent:UntagResource: Tagging -> Tagging, Write
- securityhub:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- securityhub:TagResource: Tagging -> Tagging, Write
- securityhub:UntagResource: Tagging -> Tagging, Write
- securitylake:TagResource: Tagging -> Tagging, Write
- securitylake:UntagResource: Tagging -> Tagging, Write
- servicecatalog:CreatePortfolioShare: Permissions management -> Permissions management, Write
- servicecatalog:DeletePortfolioShare: Permissions management -> Permissions management, Write
- servicecatalog:TagResource: Tagging -> Tagging, Write
- servicecatalog:UntagResource: Tagging -> Tagging, Write
- servicecatalog:UpdatePortfolioShare: Permissions management -> Permissions management, Write
- servicediscovery:TagResource: Tagging -> Tagging, Write
- servicediscovery:UntagResource: Tagging -> Tagging, Write
- servicequotas:TagResource: Tagging -> Tagging, Write
- servicequotas:UntagResource: Tagging -> Tagging, Write
- ses:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- ses:CreateEmailIdentityPolicy: Permissions management -> Permissions management, Write
- ses:DeleteEmailIdentityPolicy: Permissions management -> Permissions management, Write
- ses:DeleteIdentityPolicy: Permissions management -> Permissions management, Write
- ses:PutIdentityPolicy: Permissions management -> Permissions management, Write
- ses:ReplicateEmailIdentityDkimSigningKey: Permissions management -> Permissions management, Write
- cases:TagResource: Tagging -> Tagging, Write
- ses:TagResource: Tagging -> Tagging, Write
- cases:UntagResource: Tagging -> Tagging, Write
- ses:UntagResource: Tagging -> Tagging, Write
- ses:UpdateEmailIdentityPolicy: Permissions management -> Permissions management, Write
- shield:TagResource: Tagging -> Tagging, Write
- shield:UntagResource: Tagging -> Tagging, Write
- signer:AddProfilePermission: Permissions management -> Permissions management, Write
- signer:RemoveProfilePermission: Permissions management -> Permissions management, Write
- signer:TagResource: Tagging -> Tagging, Write
- signer:UntagResource: Tagging -> Tagging, Write
- simspaceweaver:TagResource: Tagging -> Tagging, Write
- simspaceweaver:UntagResource: Tagging -> Tagging, Write
- sms-voice:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- sms-voice:PutResourcePolicy: Permissions management -> Permissions management, Write
- sms-voice:TagResource: Tagging -> Tagging, Write
- sms-voice:UntagResource: Tagging -> Tagging, Write
- snow-device-management:TagResource: Tagging -> Tagging, Write
- snow-device-management:UntagResource: Tagging -> Tagging, Write
- sns:AddPermission: Permissions management -> Permissions management, Write
- sns:RemovePermission: Permissions management -> Permissions management, Write
- sns:SetTopicAttributes: Permissions management -> Permissions management, Write
- sns:TagResource: Tagging -> Tagging, Write
- sns:UntagResource: Tagging -> Tagging, Write
- social-messaging:TagResource: Tagging -> Tagging, Write
- social-messaging:UntagResource: Tagging -> Tagging, Write
- sqlworkbench:TagResource: Tagging -> Tagging, Write
- sqlworkbench:UntagResource: Tagging -> Tagging, Write
- sqs:AddPermission: Permissions management -> Permissions management, Write
- sqs:RemovePermission: Permissions management -> Permissions management, Write
- sqs:SetQueueAttributes: Write -> Permissions management, Write
- sqs:TagQueue: Tagging -> Tagging, Write
- sqs:UntagQueue: Tagging -> Tagging, Write
- ssm-contacts:AssociateContact: Permissions management -> Permissions management, Write
- ssm-contacts:TagResource: Tagging -> Tagging, Write
- ssm-contacts:UntagResource: Tagging -> Tagging, Write
- ssm-incidents:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- ssm-incidents:PutResourcePolicy: Permissions management -> Permissions management, Write
- ssm-incidents:TagResource: Tagging -> Tagging, Write
- ssm-incidents:UntagResource: Tagging -> Tagging, Write
- ssm-quicksetup:TagResource: Tagging -> Tagging, Write
- ssm-quicksetup:UntagResource: Tagging -> Tagging, Write
- ssm-sap:DeleteResourcePermission: Permissions management -> Permissions management, Write
- ssm-sap:GetResourcePermission: Permissions management -> Permissions management, Write
- ssm-sap:PutResourcePermission: Permissions management -> Permissions management, Write
- ssm-sap:TagResource: Tagging -> Tagging, Write
- ssm-sap:UntagResource: Tagging -> Tagging, Write
- ssm:AddTagsToResource: Tagging -> Tagging, Write
- ssm:DeleteResourcePolicy: Permissions management -> Permissions management, Write
- ssm:ModifyDocumentPermission: Permissions management -> Permissions management, Write
- ssm:PutResourcePolicy: Permissions management -> Permissions management, Write
- ssm:RemoveTagsFromResource: Tagging -> Tagging, Write
- sso:AttachCustomerManagedPolicyReferenceToPermissionSet: Permissions management -> Permissions management, Write
- sso:AttachManagedPolicyToPermissionSet: Permissions management -> Permissions management, Write
- sso:DeletePermissionsBoundaryFromPermissionSet: Permissions management -> Permissions management, Write
- sso:DetachCustomerManagedPolicyReferenceFromPermissionSet: Permissions management -> Permissions management, Write
- sso:DetachManagedPolicyFromPermissionSet: Permissions management -> Permissions management, Write
- sso:PutPermissionsBoundaryToPermissionSet: Permissions management -> Permissions management, Write
- sso:PutPermissionsPolicy: Permissions management -> Permissions management, Write
- sso:TagResource: Tagging -> Tagging, Write
- sso:UntagResource: Tagging -> Tagging, Write
- sso:UpdatePermissionSet: Permissions management -> Permissions management, Write
- states:TagResource: Tagging -> Tagging, Write
- states:UntagResource: Tagging -> Tagging, Write
- storagegateway:AddTagsToResource: Tagging -> Tagging, Write
- storagegateway:RemoveTagsFromResource: Tagging -> Tagging, Write
- sts:GetFederationToken: Read -> Write
- sts:TagGetWebIdentityToken: Tagging -> Tagging, Write
- sts:TagSession: Tagging -> Tagging, Write
- swf:TagResource: Tagging -> Tagging, Write
- swf:UntagResource: Tagging -> Tagging, Write
- synthetics:TagResource: Tagging -> Tagging, Write
- synthetics:UntagResource: Tagging -> Tagging, Write
- tag:TagResources: Tagging -> Tagging, Write
- tag:UntagResources: Tagging -> Tagging, Write
- textract:TagResource: Tagging -> Tagging, Write
- textract:UntagResource: Tagging -> Tagging, Write
- thinclient:TagResource: Tagging -> Tagging, Write
- thinclient:UntagResource: Tagging -> Tagging, Write
- timestream-influxdb:TagResource: Tagging -> Tagging, Write
- timestream-influxdb:UntagResource: Tagging -> Tagging, Write
- timestream:TagResource: Tagging -> Tagging, Write
- timestream:UntagResource: Tagging -> Tagging, Write
- tnb:TagResource: Tagging -> Tagging, Write
- tnb:UntagResource: Tagging -> Tagging, Write
- transcribe:TagResource: Tagging -> Tagging, Write
- transcribe:UntagResource: Tagging -> Tagging, Write
- transfer:TagResource: Tagging -> Tagging, Write
- transfer:UntagResource: Tagging -> Tagging, Write
- transform-custom:TagResource: Tagging -> Tagging, Write
- transform-custom:UntagResource: Tagging -> Tagging, Write
- transform:TagResource: Tagging -> Tagging, Write
- transform:UntagResource: Tagging -> Tagging, Write
- translate:TagResource: Tagging -> Tagging, Write
- translate:UntagResource: Tagging -> Tagging, Write
- applicationinsights:TagResource: Tagging -> Tagging, Write
- bcm-data-exports:TagResource: Tagging -> Tagging, Write
- budgets:TagResource: Tagging -> Tagging, Write
- events:TagResource: Tagging -> Tagging, Write
- iotevents:TagResource: Tagging -> Tagging, Write
- notifications-contacts:TagResource: Tagging -> Tagging, Write
- outposts:TagResource: Tagging -> Tagging, Write
- payments:TagResource: Tagging -> Tagging, Write
- ssm-contacts:TagResource: Tagging -> Tagging, Write
- ssm-incidents:TagResource: Tagging -> Tagging, Write
- ts:TagResource: Tagging -> Tagging, Write
- vendor-insights:TagResource: Tagging -> Tagging, Write
- applicationinsights:UntagResource: Tagging -> Tagging, Write
- bcm-data-exports:UntagResource: Tagging -> Tagging, Write
- budgets:UntagResource: Tagging -> Tagging, Write
- events:UntagResource: Tagging -> Tagging, Write
- iotevents:UntagResource: Tagging -> Tagging, Write
- notifications-contacts:UntagResource: Tagging -> Tagging, Write
- outposts:UntagResource: Tagging -> Tagging, Write
- payments:UntagResource: Tagging -> Tagging, Write
- ssm-contacts:UntagResource: Tagging -> Tagging, Write
- ssm-incidents:UntagResource: Tagging -> Tagging, Write
- ts:UntagResource: Tagging -> Tagging, Write
- vendor-insights:UntagResource: Tagging -> Tagging, Write
- vendor-insights:TagResource: Tagging -> Tagging, Write
- vendor-insights:UntagResource: Tagging -> Tagging, Write
- verifiedpermissions:TagResource: Tagging -> Tagging, Write
- verifiedpermissions:UntagResource: Tagging -> Tagging, Write
- voiceid:TagResource: Tagging -> Tagging, Write
- voiceid:UntagResource: Tagging -> Tagging, Write
-vpc-lattice:AssociateViaAWSService;Permissions management
- vpc-lattice:AssociateViaAWSServiceEventsAndStates: Permissions management -> Permissions management, Write
+vpc-lattice:AssociateViaAWSServiceEventsAndStates;Permissions management, Write
- vpc-lattice:AssociateViaAWSServiceEventsAndStates: Permissions management -> Permissions management, Write
- vpc-lattice:CreateServiceNetworkVpcEndpointAssociation: Permissions management -> Permissions management, Write
- vpc-lattice:DeleteAuthPolicy: Permissions management -> Permissions management, Write
- vpc-lattice:PutAuthPolicy: Permissions management -> Permissions management, Write
- vpc-lattice:TagResource: Tagging -> Tagging, Write
- vpc-lattice:UntagResource: Tagging -> Tagging, Write
- waf-regional:CreateWebACL: Permissions management -> Permissions management, Write
 waf-regional:CreateWebACLMigrationStack;Write
- waf-regional:DeletePermissionPolicy: Permissions management -> Permissions management, Write
- waf-regional:DeleteWebACL: Permissions management -> Permissions management, Write
- waf-regional:PutPermissionPolicy: Permissions management -> Permissions management, Write
- waf-regional:TagResource: Tagging -> Tagging, Write
- waf-regional:UntagResource: Tagging -> Tagging, Write
- waf-regional:UpdateWebACL: Permissions management -> Permissions management, Write
- waf:CreateWebACL: Permissions management -> Permissions management, Write
 waf:CreateWebACLMigrationStack;Write
- waf:DeletePermissionPolicy: Permissions management -> Permissions management, Write
- waf:DeleteWebACL: Permissions management -> Permissions management, Write
- waf:PutPermissionPolicy: Permissions management -> Permissions management, Write
- waf:TagResource: Tagging -> Tagging, Write
- waf:UntagResource: Tagging -> Tagging, Write
- waf:UpdateWebACL: Permissions management -> Permissions management, Write
- wafv2:DeletePermissionPolicy: Permissions management -> Permissions management, Write
- wafv2:PutPermissionPolicy: Permissions management -> Permissions management, Write
- wafv2:TagResource: Tagging -> Tagging, Write
- wafv2:UntagResource: Tagging -> Tagging, Write
- wellarchitected:TagResource: Tagging -> Tagging, Write
- wellarchitected:UntagResource: Tagging -> Tagging, Write
- wickr:TagResource: Tagging -> Tagging, Write
- wickr:UntagResource: Tagging -> Tagging, Write
- wisdom:AllowVendedLogDeliveryForResource: Permissions management -> Permissions management, Write
- wisdom:TagResource: Tagging -> Tagging, Write
- wisdom:UntagResource: Tagging -> Tagging, Write
- worklink:TagResource: Tagging -> Tagging, Write
- worklink:UntagResource: Tagging -> Tagging, Write
- workmail:TagResource: Tagging -> Tagging, Write
- workmail:UntagResource: Tagging -> Tagging, Write
- workspaces-instances:TagResource: Tagging -> Tagging, Write
- workspaces-instances:UntagResource: Tagging -> Tagging, Write
- workspaces-web:TagResource: Tagging -> Tagging, Write
- workspaces-web:UntagResource: Tagging -> Tagging, Write
- workspaces:CreateTags: Tagging -> Tagging, Write
- workspaces:DeleteTags: Tagging -> Tagging, Write
- workspaces:ModifySelfservicePermissions: Permissions management -> Permissions management, Write
- workspaces:UpdateConnectionAliasPermission: Permissions management -> Permissions management, Write
- workspaces:UpdateWorkspaceImagePermission: Permissions management -> Permissions management, Write
- xray:PutEncryptionConfig: Permissions management -> Permissions management, Write
- xray:TagResource: Tagging -> Tagging, Write
- xray:UntagResource: Tagging -> Tagging, Write

**New resource types:**

- aidevops:asset
- aidevops:trigger
- aws-marketplace:TaxComplianceProfile
- aws-marketplace:TaxComplianceProfileChangeTask
- bedrock-agentcore:dataset
- healthlake:dataTransformationProfile
- iotsitewise:application
- iotsitewise:pipeline
- iotsitewise:task
- iotsitewise:workspace
- kafka:channel
- quicksight:app
- resiliencehub:test-template
- signin:oauth2-public-client-registration
- signin:oauth2-resource-service-principal
- sms-voice:NotifyConfiguration
- sms-voice:RcsAgent
- timestream-influxdb:db-backup
- wellarchitected:agent-profile
- wellarchitected:agent-recommendation
- workspaces:workspacespool

**New condition keys:**

- airflow:DagAccessEntity
- airflow:ResourceAction
- airflow:ResourceId
- airflow:ResourceType
- airflow:TeamName
- bedrock-agentcore:AllowedQueryParameters
- bedrock-agentcore:AllowedRequestHeaders
- bedrock-agentcore:AllowedResponseHeaders
- bedrock-agentcore:CredentialProviderScope
- bedrock-agentcore:CredentialProviderType
- bedrock-agentcore:DiscoveryUrl
- bedrock-agentcore:HttpTargetConfigurationType
- bedrock-agentcore:InferenceTargetConfigurationType
- bedrock-agentcore:McpTargetConfigurationType
- bedrock-agentcore:PolicyEngineArn
- bedrock-agentcore:PolicyEngineMode
- bedrock-agentcore:PrivateEndpointType
- bedrock-agentcore:ProtocolType
- bedrock-agentcore:ResourceConfigurationIdentifier
- gameliftstreams:RoleArn
- iotsitewise:taskArns
- signin:OAuthClientAuthentication
- signin:OAuthClientId
- signin:OAuthGrantType
- signin:OAuthRedirectUri
- signin:OAuthTokenType
- sts:RoleAuthorizedByIdp
- sts:actor
- sts:actor_id
- sts:build_branch
- sts:cluster_id
- sts:cluster_name
- sts:enterprise_id
- sts:environment
- sts:google/organization_number
- sts:job_workflow_ref
- sts:namespace_id
- sts:oidc.circleci.com/project-id
- sts:organization_id
- sts:organization_slug
- sts:pipeline_id
- sts:pipeline_slug
- sts:pipeline_source
- sts:project_id
- sts:ref
- sts:ref_protected
- sts:repository
- sts:repository_id
- sts:repository_owner_id
- sts:rpst_id
- sts:runner_environment
- sts:user_access_level
- sts:user_email
- sts:user_login
- sts:workflow
- timestream-influxdb:RestoreMode

## [0.816.0](https://github.com/udondan/iam-floyd/compare/v0.815.0...v0.816.0) (2026-07-03)

**New actions:**

- social-messaging:CreateWhatsAppFlow
- social-messaging:DeleteWhatsAppFlow
- social-messaging:DeprecateWhatsAppFlow
- social-messaging:GetWhatsAppFlow
- social-messaging:GetWhatsAppFlowPreview
- social-messaging:ListWhatsAppFlowAssets
- social-messaging:ListWhatsAppFlows
- social-messaging:PublishWhatsAppFlow
- social-messaging:UpdateWhatsAppFlow
- social-messaging:UpdateWhatsAppFlowAssets

## [0.815.0](https://github.com/udondan/iam-floyd/compare/v0.814.0...v0.815.0) (2026-07-02)

**New actions:**

- cloudwatch:DeletePipelineRule
- cloudwatch:PutPipelineRule
- ecs:AllowVendedLogDeliveryForResource
- gameliftstreams:CreateStreamSessionAdminShell
- network-firewall:CreateContainerAssociation
- network-firewall:DeleteContainerAssociation
- network-firewall:DescribeContainerAssociation
- network-firewall:ListContainerAssociations
- network-firewall:UpdateContainerAssociation

**New resource types:**

- network-firewall:ContainerAssociation

## [0.814.0](https://github.com/udondan/iam-floyd/compare/v0.813.0...v0.814.0) (2026-07-01)

**New actions:**

- acm:CreateAcmeDomainValidation
- acm:CreateAcmeEndpoint
- acm:CreateAcmeExternalAccountBinding
- acm:DeleteAcmeDomainValidation
- acm:DeleteAcmeEndpoint
- acm:DeleteAcmeExternalAccountBinding
- acm:DescribeAcmeAccount
- acm:DescribeAcmeDomainValidation
- acm:DescribeAcmeEndpoint
- acm:DescribeAcmeExternalAccountBinding
- acm:GetAcmeExternalAccountBindingCredentials
- acm:ListAcmeAccounts
- acm:ListAcmeDomainValidations
- acm:ListAcmeEndpoints
- acm:ListAcmeExternalAccountBindings
- acm:ListTagsForResource
- acm:RevokeAcmeAccount
- acm:RevokeAcmeExternalAccountBinding
- acm:TagResource
- acm:UntagResource
- acm:UpdateAcmeDomainValidation
- acm:UpdateAcmeEndpoint
- acm:UpdateCertificate
- cleanrooms:CreateIntermediateTable
- cleanrooms:CreateIntermediateTableAnalysisRule
- cleanrooms:DeleteIntermediateTable
- cleanrooms:DeleteIntermediateTableAnalysisRule
- cleanrooms:DisallowIntermediateTable
- cleanrooms:GetIntermediateTable
- cleanrooms:GetIntermediateTableAnalysisRule
- cleanrooms:ListIntermediateTableVersions
- cleanrooms:ListIntermediateTables
- cleanrooms:PopulateIntermediateTable
- cleanrooms:UpdateIntermediateTable
- cleanrooms:UpdateIntermediateTableAnalysisRule
- connect:CreateAttachedFile
- connect:GetEvaluationFormValidation
- connect:StartContactConversationalAnalyticsJob
- connect:StartEvaluationFormValidation
- eks:CancelUpdate
- partnercentral:CreateMarketplaceRevenueShare
- partnercentral:CreateMarketplaceRevenueShareAllocation
- partnercentral:CreateRevenueAttribution
- partnercentral:GetMarketplaceRevenueShare
- partnercentral:GetMarketplaceRevenueShareAllocation
- partnercentral:GetRevenueAttribution
- partnercentral:GetRevenueAttributionAllocation
- partnercentral:GetRevenueAttributionAllocationsTask
- partnercentral:ListMarketplaceRevenueShareAllocations
- partnercentral:ListMarketplaceRevenueShares
- partnercentral:ListRevenueAttributionAllocations
- partnercentral:ListRevenueAttributions
- partnercentral:StartRevenueAttributionAllocationsTask
- partnercentral:UpdateMarketplaceRevenueShareAllocation
- partnercentral:UpdateRevenueAttribution
- sagemaker:BatchWriteRecord
- sagemaker:ListRecords

**New resource types:**

- acm:acme-domain-validation
- acm:acme-endpoint
- acm:acme-external-account-binding
- cleanrooms:intermediatetable
- partnercentral:MarketplaceRevenueShare
- partnercentral:RevenueAttribution

**New condition keys:**

- acm:CertificateKeyPairOrigin

## [0.813.0](https://github.com/udondan/iam-floyd/compare/v0.812.0...v0.813.0) (2026-06-30)

**New actions:**

- artifact:CreateComplianceInquiry
- artifact:ExportComplianceInquiry
- artifact:GetComplianceInquiryMetadata
- artifact:ListComplianceInquiries
- artifact:ListComplianceInquiryQueries
- artifact:ListTagsForResource
- artifact:TagResource
- artifact:UntagResource
- ec2:AttachImageWatermark
- ec2:DetachImageWatermark
- es:InsightFeedback
- transform-custom:SendTelemetryEvent

**New resource types:**

- artifact:compliance-inquiry
- wafv2:agentcore-gateway

**New condition keys:**

- artifact:RequestTag/${TagKey}
- artifact:ResourceTag/${TagKey}
- artifact:TagKeys

## [0.812.0](https://github.com/udondan/iam-floyd/compare/v0.811.0...v0.812.0) (2026-06-27)

**New actions:**

- aidevops:UpdateApprovalAction
- user-subscriptions:CreateClaimAddOn
- user-subscriptions:DeleteAutoTopUpRule
- user-subscriptions:GetAutoTopUpRule
- user-subscriptions:GetEffectiveUsageLimit
- user-subscriptions:GetUsageLimitHistory
- user-subscriptions:ListClaimAddOns
- user-subscriptions:ListEntitlements
- user-subscriptions:ListUsageLimits
- user-subscriptions:SetAutoTopUpRule
- user-subscriptions:SetUsageLimit

## [0.811.0](https://github.com/udondan/iam-floyd/compare/v0.810.0...v0.811.0) (2026-06-26)

**New actions:**

- securityhub:CreateConnector
- securityhub:DeleteConnector
- securityhub:DisableSecurityHubFeatureV2
- securityhub:EnableSecurityHubFeatureV2
- securityhub:GetConnector
- securityhub:ListConnectors
- securityhub:UpdateConnector
- ssm:CreateCloudConnector
- ssm:DeleteCloudConnector
- ssm:GetCloudConnector
- ssm:ListCloudConnectors
- ssm:UpdateCloudConnector
- ssm:ValidateCloudConnector

**New resource types:**

- securityhub:connector
- ssm:cloud-connector

## [0.810.0](https://github.com/udondan/iam-floyd/compare/v0.809.0...v0.810.0) (2026-06-25)

**New actions:**

- config:DeleteConnector
- config:GetConnector
- config:ListConnectors
- config:PutConnector
- config:PutThirdPartyServiceLinkedConfigurationRecorder
- inspector2:CreateConnector
- inspector2:DeleteConnector
- inspector2:ListConnectorScanConfigurations
- inspector2:ListConnectors
- inspector2:UpdateConnector
- inspector2:UpdateConnectorScanConfiguration

**New resource types:**

- config:Connector
- inspector2:Connector

## [0.809.0](https://github.com/udondan/iam-floyd/compare/v0.807.0...v0.809.0) (2026-06-24)

**New actions:**

- application-signals:BatchDeleteInstrumentationConfigurations
- application-signals:CreateInstrumentationConfiguration
- application-signals:DeleteInstrumentationConfiguration
- application-signals:GetInstrumentationConfiguration
- application-signals:GetInstrumentationConfigurationStatus
- application-signals:ListInstrumentationConfigurations
- application-signals:ReportInstrumentationConfigurationStatus
- billing:GetCumulativeTracking
- billing:GetMonthlyTracking
- guardduty:CreateInvestigation
- guardduty:GetInvestigation
- guardduty:ListInvestigations
- lambda:ConnectMicrovm
- lambda:CreateMicrovmAuthToken
- lambda:CreateMicrovmImage
- lambda:CreateMicrovmShellAuthToken
- lambda:CreateNetworkConnector
- lambda:DeleteMicrovmImage
- lambda:DeleteMicrovmImageVersion
- lambda:DeleteNetworkConnector
- lambda:GetMicrovm
- lambda:GetMicrovmImage
- lambda:GetMicrovmImageBuild
- lambda:GetMicrovmImageVersion
- lambda:GetNetworkConnector
- lambda:ListManagedMicrovmImageVersions
- lambda:ListManagedMicrovmImages
- lambda:ListMicrovmImageBuilds
- lambda:ListMicrovmImageVersions
- lambda:ListMicrovmImages
- lambda:ListMicrovms
- lambda:ListNetworkConnectors
- lambda:PassNetworkConnector
- lambda:ResumeMicrovm
- lambda:RunMicrovm
- lambda:SuspendMicrovm
- lambda:TerminateMicrovm
- lambda:UpdateMicrovmImage
- lambda:UpdateMicrovmImageVersion
- lambda:UpdateNetworkConnector
- logs:DeleteSyslogConfiguration
- logs:ListSyslogConfigurations
- logs:PutSyslogConfiguration

**New resource types:**

- application-signals:instrumentationConfig
- billing:contract
- lambda:microvmImage
- lambda:networkConnector

## [0.808.0] (2026-06-23)

**New actions:**

- application-signals:BatchDeleteInstrumentationConfigurations
- application-signals:CreateInstrumentationConfiguration
- application-signals:DeleteInstrumentationConfiguration
- application-signals:GetInstrumentationConfiguration
- application-signals:GetInstrumentationConfigurationStatus
- application-signals:ListInstrumentationConfigurations
- application-signals:ReportInstrumentationConfigurationStatus
- guardduty:CreateInvestigation
- guardduty:GetInvestigation
- guardduty:ListInvestigations
- lambda:ConnectMicrovm
- lambda:CreateMicrovmAuthToken
- lambda:CreateMicrovmImage
- lambda:CreateMicrovmShellAuthToken
- lambda:CreateNetworkConnector
- lambda:DeleteMicrovmImage
- lambda:DeleteMicrovmImageVersion
- lambda:DeleteNetworkConnector
- lambda:GetMicrovm
- lambda:GetMicrovmImage
- lambda:GetMicrovmImageBuild
- lambda:GetMicrovmImageVersion
- lambda:GetNetworkConnector
- lambda:ListManagedMicrovmImageVersions
- lambda:ListManagedMicrovmImages
- lambda:ListMicrovmImageBuilds
- lambda:ListMicrovmImageVersions
- lambda:ListMicrovmImages
- lambda:ListMicrovms
- lambda:ListNetworkConnectors
- lambda:PassNetworkConnector
- lambda:ResumeMicrovm
- lambda:RunMicrovm
- lambda:SuspendMicrovm
- lambda:TerminateMicrovm
- lambda:UpdateMicrovmImage
- lambda:UpdateMicrovmImageVersion
- lambda:UpdateNetworkConnector
- logs:DeleteSyslogConfiguration
- logs:ListSyslogConfigurations
- logs:PutSyslogConfiguration

**New resource types:**

- application-signals:instrumentationConfig
- lambda:microvmImage
- lambda:networkConnector

## [0.807.0](https://github.com/udondan/iam-floyd/compare/v0.806.0...v0.807.0) (2026-06-20)

**New actions:**

- agentaccess-mcp:CallForwardedTool
- agentaccess-mcp:CheckConnectionStatus
- cloudwatch:GetDataset
- cloudwatch:PutLogAlarm
- datazone:GetCompute
- datazone:StartCompute
- datazone:StartNotebookSync
- datazone:StopCompute
- mq:DescribeSharedResources
- quicksight:BatchAssignLimitsProfile
- quicksight:BatchUnassignLimitsProfile
- quicksight:CreateLimitsProfile
- quicksight:DeleteLimitsProfile
- quicksight:DescribeAutomationGroup
- quicksight:DescribeAutomationGroupPermissions
- quicksight:DescribeLimitsProfile
- quicksight:ListAssignmentsForPrincipal
- quicksight:ListAutomationGroups
- quicksight:ListLimitsProfiles
- quicksight:ListProfileAssignments
- quicksight:SearchAutomationGroups
- quicksight:UpdateAutomationGroupPermissions
- quicksight:UpdateLimitsProfile

**New resource types:**

- cloudwatch:dataset
- quicksight:limitsProfile

**New condition keys:**

- eks:controlPlaneEgressMode

## [0.806.0](https://github.com/udondan/iam-floyd/compare/v0.805.0...v0.806.0) (2026-06-18)

:warning: **Removed resource types:**

- inspector2:Connector

**New actions:**

- bedrock-agentcore:CreateHarnessEndpoint
- bedrock-agentcore:DeleteHarnessEndpoint
- bedrock-agentcore:GatewayAssociateWebACL
- bedrock-agentcore:GatewayDisassociateWebACL
- bedrock-agentcore:GatewayGetWebACLForResource
- bedrock-agentcore:GatewayListResourcesForWebACL
- bedrock-agentcore:GetHarnessEndpoint
- bedrock-agentcore:InvokeWebSearch
- bedrock-agentcore:ListHarnessEndpoints
- bedrock-agentcore:UpdateHarnessEndpoint
- bedrock:AgenticRetrieveStream
- bedrock:BatchDeleteAdvancedPromptOptimizationJob
- bedrock:CreateAdvancedPromptOptimizationJob
- bedrock:GetAdvancedPromptOptimizationJob
- bedrock:GetDocumentContent
- bedrock:InvokeGuardrailChecks
- bedrock:ListAdvancedPromptOptimizationJobs
- bedrock:StopAdvancedPromptOptimizationJob
- datazone:DeleteLineageEvent
- es:AttachDataSource
- es:DescribeDataSourceAttachment
- es:DetachDataSource
- es:ListDataSourceAttachments
- s3:DeleteObjectAnnotation
- s3:DeleteObjectVersionAnnotation
- s3:GetObjectAnnotation
- s3:GetObjectVersionAnnotation
- s3:GetObjectVersionAnnotationForReplication
- s3:ListObjectAnnotations
- s3:ListObjectVersionAnnotations
- s3:PutObjectAnnotation
- s3:PutObjectVersionAnnotation
- s3:ReplicateObjectAnnotation
- s3:UpdateBucketMetadataAnnotationTableConfiguration

**New resource types:**

- bedrock-agentcore:harness-endpoint
- bedrock-agentcore:web-search
- bedrock:advanced-prompt-optimization-job

**New condition keys:**

- s3:annotation-prefix
- s3:max-annotation-results
- s3:x-amz-object-annotation-directive
- s3:x-amz-object-if-match

## [0.805.0](https://github.com/udondan/iam-floyd/compare/v0.804.0...v0.805.0) (2026-06-17)

**New actions:**

- partnercentral:GetProspectingFromEngagementTask
- partnercentral:ListProspectingFromEngagementTasks
- partnercentral:StartProspectingFromEngagementTask

**New resource types:**

- partnercentral:ProspectingFromEngagementTask

## [0.804.0](https://github.com/udondan/iam-floyd/compare/v0.803.0...v0.804.0) (2026-06-16)

**New actions:**

- wafv2:GetRevenueStatistics
- wafv2:GetRevenueStatisticsSummary
- wafv2:GetRevenueStatisticsTimeSeries
- wafv2:ListSettlementRecords

## [0.803.0](https://github.com/udondan/iam-floyd/compare/v0.802.0...v0.803.0) (2026-06-13)

**New actions:**

- aidevops:CreateAccessToken
- aidevops:GetAccessToken
- aidevops:ListAccessTokens
- aidevops:RevokeAccessToken
- aidevops:RotateAccessToken
- aws-external-anthropic:CreateWebhook
- aws-external-anthropic:DeleteWebhook
- aws-external-anthropic:GetWebhook
- aws-external-anthropic:ListWebhooks
- aws-external-anthropic:ProcessEnvironmentWork
- aws-external-anthropic:RotateWebhookSecret
- aws-external-anthropic:UpdateWebhook
- healthlake:UpdateFHIRDatastore
- s3:AllowVendedLogDeliveryForResource
- securityagent:BatchCreateSecurityRequirements
- securityagent:BatchDeleteSecurityRequirements
- securityagent:BatchGetSecurityRequirements
- securityagent:BatchUpdateSecurityRequirements
- securityagent:CreatePrivateConnection
- securityagent:CreateSecurityRequirementPack
- securityagent:DeletePrivateConnection
- securityagent:DeleteSecurityRequirementPack
- securityagent:DescribePrivateConnection
- securityagent:GetProviderRegistrationManifest
- securityagent:GetSecurityRequirementPack
- securityagent:HandleProviderRegistrationCallback
- securityagent:ImportSecurityRequirements
- securityagent:ListPrivateConnections
- securityagent:ListSecurityRequirementPacks
- securityagent:UpdatePrivateConnectionCertificate
- securityagent:UpdateSecurityRequirementPack
- signin:Authenticate
- signin:CreateAccount
- signin:DeleteConsoleAuthorizationConfiguration
- signin:DeleteResourcePermissionStatement
- signin:GetConsoleAuthorizationConfiguration
- signin:GetResourcePolicy
- signin:ListResourcePermissionStatements
- signin:PutConsoleAuthorizationConfiguration
- signin:PutResourcePermissionStatement

**New resource types:**

- securityagent:PrivateConnection
- signin:console

**New condition keys:**

- s3:deliverySourceArn
- s3:logType
- s3:resourceArnBeingAuthorized
- signin:PrincipalArn

## [0.802.0](https://github.com/udondan/iam-floyd/compare/v0.801.0...v0.802.0) (2026-06-11)

**New services:**

- eventsbilltoaws

**New actions:**

- aidevops:CreateTrigger
- aidevops:DeleteTrigger
- aidevops:GetTrigger
- aidevops:ListTriggers
- aidevops:UpdateTrigger
- odb:CreateAutonomousDatabase
- odb:CreateAutonomousDatabaseBackup
- odb:CreateAutonomousDatabaseWallet
- odb:DeleteAutonomousDatabase
- odb:DeleteAutonomousDatabaseBackup
- odb:FailoverAutonomousDatabase
- odb:GetAutonomousDatabase
- odb:GetAutonomousDatabaseBackup
- odb:GetAutonomousDatabaseWalletDetails
- odb:ListAutonomousDatabaseBackups
- odb:ListAutonomousDatabaseCharacterSets
- odb:ListAutonomousDatabaseClones
- odb:ListAutonomousDatabasePeers
- odb:ListAutonomousDatabaseVersions
- odb:ListAutonomousDatabases
- odb:RebootAutonomousDatabase
- odb:RestoreAutonomousDatabase
- odb:ShrinkAutonomousDatabase
- odb:StartAutonomousDatabase
- odb:StopAutonomousDatabase
- odb:SwitchoverAutonomousDatabase
- odb:UpdateAutonomousDatabase
- odb:UpdateAutonomousDatabaseBackup
- outposts:CreateQuote
- outposts:CreateRenewal
- outposts:DeleteQuote
- outposts:GetQuote
- outposts:GetRenewalPricing
- outposts:ListOrderableInstanceTypes
- outposts:ListQuotes
- outposts:UpdateQuote

**New resource types:**

- odb:autonomous-database
- odb:autonomous-database-backup

## [0.801.0](https://github.com/udondan/iam-floyd/compare/v0.800.0...v0.801.0) (2026-06-10)

**New actions:**

- bedrock-mantle:GetAccountDataRetention
- bedrock-mantle:PutAccountDataRetention
- bedrock:GetAccountDataRetention
- bedrock:PutAccountDataRetention

**Updated action access level:**

- secretsmanager:BatchGetSecretValue: List -> Read

**New resource types:**

- inspector2:Connector

**New condition keys:**

- bedrock-mantle:DataRetentionMode
- bedrock:DataRetentionMode

## [0.800.0](https://github.com/udondan/iam-floyd/compare/v0.799.0...v0.800.0) (2026-06-09)

**New actions:**

- ec2:AcceptTransitGatewayClientVpnAttachment
- ec2:CreateCapacityReservationCancellationQuote
- ec2:DeleteTransitGatewayClientVpnAttachment
- ec2:DescribeCapacityReservationCancellationQuotes
- ec2:DescribeIpamPoolAllocations
- ec2:GetCapacityManagerMonitoredTagKeys
- ec2:GetManagedResourceVisibility
- ec2:ModifyIpamPoolAllocation
- ec2:ModifyManagedResourceVisibility
- ec2:RejectTransitGatewayClientVpnAttachment
- ec2:UpdateCapacityManagerMonitoredTagKeys

**New resource types:**

- ec2:capacity-reservation-cancellation-quote
- ec2:ipam-pool-allocation

## [0.799.0](https://github.com/udondan/iam-floyd/compare/v0.798.0...v0.799.0) (2026-06-06)

**New actions:**

- aws-marketplace:CreateVerificationEvidence
- aws-marketplace:GetVerification
- aws-marketplace:GetVerificationEvidence
- aws-marketplace:ListVerificationEvidence
- aws-marketplace:ListVerifications
- aws-marketplace:StartVerification
- aws-marketplace:UpdateVerificationEvidence
- bedrock-agentcore:InvokeAgentRuntimeCommandShell
- cognito-idp:CreateUserPoolReplica
- cognito-idp:DeleteUserPoolReplica
- cognito-idp:ListUserPoolReplicas
- cognito-idp:UpdateUserPoolReplica
- glue:GetSessionEndpoint
- ivs:UpdateAdConfiguration
- transform-custom:BatchCreateFindings
- transform-custom:BatchUpdateFindings
- transform-custom:CreateAnalysis
- transform-custom:CreateRemediation
- transform-custom:CreateRepository
- transform-custom:CreateSource
- transform-custom:DeleteAnalysis
- transform-custom:DeleteFinding
- transform-custom:DeleteRemediation
- transform-custom:DeleteRepository
- transform-custom:DeleteSource
- transform-custom:GetAnalysis
- transform-custom:GetFinding
- transform-custom:GetFindingGroups
- transform-custom:GetRemediation
- transform-custom:GetRepository
- transform-custom:GetSource
- transform-custom:ListAnalyses
- transform-custom:ListFindings
- transform-custom:ListRemediations
- transform-custom:ListRepositories
- transform-custom:ListSources
- transform-custom:ListTransformationPackageShares
- transform-custom:ShareTransformationPackage
- transform-custom:UnshareTransformationPackage
- transform-custom:UpdateAnalysis
- transform-custom:UpdateRemediation
- transform-custom:UpdateRepository
- transform-custom:UpdateSource

**New resource types:**

- aws-marketplace:VerificationEvidence
- transform-custom:analysis
- transform-custom:finding
- transform-custom:remediation
- transform-custom:repository
- transform-custom:source

**New condition keys:**

- aws-marketplace:VerificationType

## [0.798.0](https://github.com/udondan/iam-floyd/compare/v0.797.0...v0.798.0) (2026-06-04)

**New services:**

- finops-agent

**New actions:**

- aidevops:CreateAsset
- aidevops:CreateAssetFile
- aidevops:DeleteAsset
- aidevops:DeleteAssetFile
- aidevops:GetAsset
- aidevops:GetAssetContent
- aidevops:GetAssetFile
- aidevops:ListAssetFiles
- aidevops:ListAssetTypes
- aidevops:ListAssetVersions
- aidevops:ListAssets
- aidevops:UpdateAsset
- aidevops:UpdateAssetFile
- health-agent:GetDomainAnalytics
- health-agent:ListSessionRecords
- quicksight:BatchDeleteKnowledgeBase
- quicksight:CreateOAuthClientApplication
- quicksight:DeleteKnowledgeBase
- quicksight:DeleteOAuthClientApplication
- quicksight:DescribeKnowledgeBase
- quicksight:DescribeKnowledgeBasePermissions
- quicksight:DescribeOAuthClientApplication
- quicksight:ListKnowledgeBases
- quicksight:ListOAuthClientApplications
- quicksight:ListUsersIndexCapacity
- quicksight:SearchKnowledgeBases
- quicksight:UpdateKnowledgeBasePermissions
- quicksight:UpdateOAuthClientApplication
- securityagent:BatchDeleteThreatModels
- securityagent:BatchDeleteThreats
- securityagent:BatchGetThreatModelJobTasks
- securityagent:BatchGetThreatModelJobs
- securityagent:BatchGetThreatModels
- securityagent:BatchGetThreats
- securityagent:CreateThreat
- securityagent:CreateThreatModel
- securityagent:ListThreatModelJobTasks
- securityagent:ListThreatModelJobs
- securityagent:ListThreatModels
- securityagent:ListThreats
- securityagent:StartThreatModelJob
- securityagent:StopThreatModelJob
- securityagent:UpdateThreat
- securityagent:UpdateThreatModel

**New resource types:**

- quicksight:approvalPolicy
- quicksight:knowledgeBase
- quicksight:oauthClientApplication

## [0.797.0](https://github.com/udondan/iam-floyd/compare/v0.796.0...v0.797.0) (2026-06-03)

**New actions:**

- sagemaker:CallWithBearerToken
- sagemaker:CompleteRollout
- sagemaker:CreateJob
- sagemaker:DeleteJob
- sagemaker:DescribeJob
- sagemaker:DescribeJobSchemaVersion
- sagemaker:ListJobSchemaVersions
- sagemaker:ListJobs
- sagemaker:Sample
- sagemaker:SampleWithResponseStream
- sagemaker:StopJob
- sagemaker:UpdateReward
- transform:AccessTransformProfile

**New resource types:**

- sagemaker:job

**New condition keys:**

- elasticache:Durability
- sagemaker:BearerTokenType
- sagemaker:DomainSharingOutputKmsKeyArn
- sagemaker:FeatureGroupOfflineStoreKmsKeyArn
- sagemaker:FeatureGroupOnlineStoreKmsKeyArn
- sagemaker:OutputKmsKeyArn
- sagemaker:VolumeKmsKeyArn
- transform:ResourceTag/${TagKey}

## [0.796.0](https://github.com/udondan/iam-floyd/compare/v0.795.0...v0.796.0) (2026-06-02)

**New actions:**

- mgn:StartSnapshotGroupForMgn
- quicksight:CreateAgent
- quicksight:CreateFlow
- quicksight:CreateSpace
- quicksight:DeleteAgent
- quicksight:DeleteFlow
- quicksight:DeleteSpace
- quicksight:DescribeFlow
- quicksight:DescribeSpace
- quicksight:DescribeSpacePermissions
- quicksight:ListSpaceResources
- quicksight:ListSpaces
- quicksight:SearchSpaces
- quicksight:UpdateAgent
- quicksight:UpdateFlow
- quicksight:UpdateSpace
- quicksight:UpdateSpacePermissions
- quicksight:UpdateSpaceResources

**New resource types:**

- quicksight:space

## [0.795.0](https://github.com/udondan/iam-floyd/compare/v0.794.0...v0.795.0) (2026-05-30)

**New actions:**

- deadline:DeleteVolume
- deadline:GetVolume
- deadline:ListVolumes
- route53resolver:ListFirewallRuleTypes
- ses:PutTenantSuppressionAttributes

**New resource types:**

- deadline:volume

## [0.794.0](https://github.com/udondan/iam-floyd/compare/v0.793.0...v0.794.0) (2026-05-29)

**New actions:**

- iot:GetConnection
- iot:ListSubscriptions
- iot:SendDirectMessage
- resiliencehub:CreateAssertion
- resiliencehub:CreateInputSource
- resiliencehub:CreatePolicy
- resiliencehub:CreateReport
- resiliencehub:CreateService
- resiliencehub:CreateServiceFunction
- resiliencehub:CreateServiceFunctionResources
- resiliencehub:CreateSystem
- resiliencehub:CreateUserJourney
- resiliencehub:DeleteAssertion
- resiliencehub:DeleteInputSource
- resiliencehub:DeletePolicy
- resiliencehub:DeleteService
- resiliencehub:DeleteServiceFunction
- resiliencehub:DeleteServiceFunctionResources
- resiliencehub:DeleteSystem
- resiliencehub:DeleteUserJourney
- resiliencehub:GetFailureModeFinding
- resiliencehub:GetPolicy
- resiliencehub:GetService
- resiliencehub:GetSystem
- resiliencehub:GetUserJourney
- resiliencehub:ImportApp
- resiliencehub:ImportPolicy
- resiliencehub:ListAssertions
- resiliencehub:ListDependencies
- resiliencehub:ListFailureModeAssessments
- resiliencehub:ListFailureModeFindings
- resiliencehub:ListInputSources
- resiliencehub:ListPolicies
- resiliencehub:ListReports
- resiliencehub:ListResources
- resiliencehub:ListServiceEvents
- resiliencehub:ListServiceFunctions
- resiliencehub:ListServiceTopologyEdges
- resiliencehub:ListServices
- resiliencehub:ListSystemEvents
- resiliencehub:ListSystems
- resiliencehub:ListUserJourneys
- resiliencehub:StartFailureModeAssessment
- resiliencehub:UpdateAssertion
- resiliencehub:UpdateDependency
- resiliencehub:UpdateFailureModeFinding
- resiliencehub:UpdatePolicy
- resiliencehub:UpdateService
- resiliencehub:UpdateServiceFunction
- resiliencehub:UpdateSystem
- resiliencehub:UpdateUserJourney

**New resource types:**

- resiliencehub:policy
- resiliencehub:service
- resiliencehub:system

**New condition keys:**

- iot:IncludeSocketInformation
- iot:Topic

## [0.793.0](https://github.com/udondan/iam-floyd/compare/v0.792.0...v0.793.0) (2026-05-28)

**New actions:**

- backup:GetPITRMalwareScanResults
- connect:SendOutboundWebNotification
- elemental-inference:CreateDictionary
- elemental-inference:DeleteDictionary
- elemental-inference:ExportDictionaryEntries
- elemental-inference:GetDictionary
- elemental-inference:ListDictionaries
- elemental-inference:UpdateDictionary

**New resource types:**

- elemental-inference:dictionary

## [0.792.0](https://github.com/udondan/iam-floyd/compare/v0.791.0...v0.792.0) (2026-05-26)

**New actions:**

- evs:GetDepotUrl
- pi:ListPerformanceAnalysisReportRecommendations

**New condition keys:**

- transfer:RequestSecurityPolicyName

## [0.791.0](https://github.com/udondan/iam-floyd/compare/v0.790.0...v0.791.0) (2026-05-21)

**New actions:**

- ecs:ContinueServiceDeployment

**New condition keys:**

- ecs:gateway
- kms:GrantConstraintSourceArn
- kms:GranteeServicePrincipal
- kms:RetiringServicePrincipal

## [0.790.0](https://github.com/udondan/iam-floyd/compare/v0.789.0...v0.790.0) (2026-05-14)

**New actions:**

- bedrock-agentcore:GetPolicyEngineSummary
- bedrock-agentcore:GetPolicyGenerationSummary
- bedrock-agentcore:GetPolicySummary
- bedrock-agentcore:ListPolicyEngineSummaries
- bedrock-agentcore:ListPolicyGenerationSummaries
- bedrock-agentcore:ListPolicySummaries
- dsql:CreateStream
- dsql:DeleteStream
- dsql:GetStream
- dsql:ListStreams
- dsql:UpdateStream
- rtbfabric:AssociateCertificate
- rtbfabric:CreateLinkRoutingRule
- rtbfabric:DeleteLinkRoutingRule
- rtbfabric:DisassociateCertificate
- rtbfabric:GetCertificateAssociation
- rtbfabric:GetLinkRoutingRule
- rtbfabric:ListCertificateAssociations
- rtbfabric:ListLinkRoutingRules
- rtbfabric:UpdateLinkRoutingRule
- sagemaker:AccessModelPackage

**New resource types:**

- dsql:Stream
- rtbfabric:LinkRoutingRule

**New condition keys:**

- rtbfabric:LinkRoutingRuleRuleId

## [0.789.0](https://github.com/udondan/iam-floyd/compare/v0.788.0...v0.789.0) (2026-05-13)

:warning: **Removed resource types:**

- sts:user

**New actions:**

- billing:GetCreditAllocationHistory
- inspector2-telemetry:SendTelemetryEvent
- odb:AssociateIamRoleToResource
- odb:DisassociateIamRoleFromResource

## [0.788.0](https://github.com/udondan/iam-floyd/compare/v0.787.0...v0.788.0) (2026-05-12)

**New condition keys:**

- aws-external-anthropic:CalledViaConsole
- logs:data_source_name
- logs:data_source_type

## [0.787.0](https://github.com/udondan/iam-floyd/compare/v0.786.0...v0.787.0) (2026-05-09)

**New actions:**

- aws-external-anthropic:ArchiveAgent
- aws-external-anthropic:ArchiveEnvironment
- aws-external-anthropic:ArchiveMemoryStore
- aws-external-anthropic:ArchiveSession
- aws-external-anthropic:ArchiveVault
- aws-external-anthropic:CreateAgent
- aws-external-anthropic:CreateEnvironment
- aws-external-anthropic:CreateMemoryStore
- aws-external-anthropic:CreateSession
- aws-external-anthropic:CreateUserProfileEnrollmentUrl
- aws-external-anthropic:CreateVault
- aws-external-anthropic:DeleteEnvironment
- aws-external-anthropic:DeleteMemoryStore
- aws-external-anthropic:DeleteSession
- aws-external-anthropic:DeleteVault
- aws-external-anthropic:GetAgent
- aws-external-anthropic:GetEnvironment
- aws-external-anthropic:GetMemoryStore
- aws-external-anthropic:GetSession
- aws-external-anthropic:GetVault
- aws-external-anthropic:ListAgents
- aws-external-anthropic:ListEnvironments
- aws-external-anthropic:ListMemoryStores
- aws-external-anthropic:ListSessions
- aws-external-anthropic:ListTagsForResource
- aws-external-anthropic:ListVaults
- aws-external-anthropic:TagResource
- aws-external-anthropic:UntagResource
- aws-external-anthropic:UpdateAgent
- aws-external-anthropic:UpdateEnvironment
- aws-external-anthropic:UpdateMemoryStore
- aws-external-anthropic:UpdateSession
- aws-external-anthropic:UpdateVault

**New condition keys:**

- aws-external-anthropic:RequestTag/${TagKey}
- aws-external-anthropic:ResourceTag/${TagKey}
- aws-external-anthropic:TagKeys

## [0.786.0](https://github.com/udondan/iam-floyd/compare/v0.785.0...v0.786.0) (2026-05-08)

**New actions:**

- aws-marketplace:GetIssuedTaxInvoice
- aws-marketplace:ListIssuedTaxInvoices
- bedrock-agentcore:CreatePaymentConnector
- bedrock-agentcore:CreatePaymentCredentialProvider
- bedrock-agentcore:CreatePaymentInstrument
- bedrock-agentcore:CreatePaymentManager
- bedrock-agentcore:CreatePaymentSession
- bedrock-agentcore:DeletePaymentConnector
- bedrock-agentcore:DeletePaymentCredentialProvider
- bedrock-agentcore:DeletePaymentInstrument
- bedrock-agentcore:DeletePaymentManager
- bedrock-agentcore:DeletePaymentSession
- bedrock-agentcore:GetPaymentConnector
- bedrock-agentcore:GetPaymentCredentialProvider
- bedrock-agentcore:GetPaymentInstrument
- bedrock-agentcore:GetPaymentInstrumentBalance
- bedrock-agentcore:GetPaymentManager
- bedrock-agentcore:GetPaymentSession
- bedrock-agentcore:GetResourcePaymentToken
- bedrock-agentcore:ListPaymentConnectors
- bedrock-agentcore:ListPaymentCredentialProviders
- bedrock-agentcore:ListPaymentInstruments
- bedrock-agentcore:ListPaymentManagers
- bedrock-agentcore:ListPaymentSessions
- bedrock-agentcore:ProcessPayment
- bedrock-agentcore:UpdatePaymentConnector
- bedrock-agentcore:UpdatePaymentCredentialProvider
- bedrock-agentcore:UpdatePaymentManager

**Updated action access level:**

- bedrock-agentcore:SetTokenVaultCMK: Read -> Write
- braket:SearchDevices: Read -> List
- braket:SearchJobs: Read -> List
- braket:SearchQuantumTasks: Read -> List

**New resource types:**

- aws-marketplace:IssuedTaxInvoice
- bedrock-agentcore:payment-manager
- bedrock-agentcore:paymentcredentialprovider
- braket:device

## [0.785.0](https://github.com/udondan/iam-floyd/compare/v0.784.0...v0.785.0) (2026-05-06)

:warning: **Removed services:**

- aws-mcp

:warning: **Removed actions:**

- aws-mcp:CallReadOnlyTool
- aws-mcp:CallReadWriteTool
- aws-mcp:InvokeMcp

**New services:**

- researchstudio

**New actions:**

- access-analyzer:CreateServiceLinkedAnalyzer
- access-analyzer:DeleteServiceLinkedAnalyzer
- aidevops:DescribeServices
- wisdom:ListModels
- wisdom:ListSpans

## [0.784.0](https://github.com/udondan/iam-floyd/compare/v0.783.0...v0.784.0) (2026-05-05)

**New services:**

- application-signals-mcp

**New actions:**

- cloudwatch:CallWithBearerToken
- securityhub:GenerateRecommendedPolicyV2
- securityhub:GetRecommendedPolicyV2
- securityhub:GetUsageV2
- securityhub:ListAccountUsageV2

## [0.783.0](https://github.com/udondan/iam-floyd/compare/v0.782.0...v0.783.0) (2026-05-01)

**New services:**

- agentaccess-mcp

**New actions:**

- bedrock-agentcore:CreateABTest
- bedrock-agentcore:CreateConfigurationBundle
- bedrock-agentcore:CreateGatewayRule
- bedrock-agentcore:DeleteABTest
- bedrock-agentcore:DeleteBatchEvaluation
- bedrock-agentcore:DeleteConfigurationBundle
- bedrock-agentcore:DeleteGatewayRule
- bedrock-agentcore:DeleteRecommendation
- bedrock-agentcore:GetABTest
- bedrock-agentcore:GetBatchEvaluation
- bedrock-agentcore:GetConfigurationBundle
- bedrock-agentcore:GetConfigurationBundleVersion
- bedrock-agentcore:GetGatewayRule
- bedrock-agentcore:GetRecommendation
- bedrock-agentcore:ListABTests
- bedrock-agentcore:ListBatchEvaluations
- bedrock-agentcore:ListConfigurationBundleVersions
- bedrock-agentcore:ListConfigurationBundles
- bedrock-agentcore:ListGatewayRules
- bedrock-agentcore:ListRecommendations
- bedrock-agentcore:StartBatchEvaluation
- bedrock-agentcore:StartRecommendation
- bedrock-agentcore:StopBatchEvaluation
- bedrock-agentcore:UpdateABTest
- bedrock-agentcore:UpdateConfigurationBundle
- bedrock-agentcore:UpdateGatewayRule
- payment-cryptography:AssociateMpaTeam
- payment-cryptography:DeleteResourcePolicy
- payment-cryptography:DisassociateMpaTeam
- payment-cryptography:GetMpaTeamAssociation
- payment-cryptography:GetResourcePolicy
- payment-cryptography:PutResourcePolicy

**New resource types:**

- bedrock-agentcore:ab-test
- bedrock-agentcore:batch-evaluate
- bedrock-agentcore:configuration-bundle
- bedrock-agentcore:recommendation
- payment-cryptography:approval-team

## [0.782.0](https://github.com/udondan/iam-floyd/compare/v0.781.0...v0.782.0) (2026-04-30)

**New actions:**

- gamelift:DescribeContainerGroupPortMappings
- q:AssociateLoginDomain
- q:BatchDescribeGroups
- q:BatchDescribeUsers
- q:BatchGetGroups
- q:BatchGetUsers
- q:CreateArtifact
- q:CreateScimAccessToken
- q:DeleteScimAccessToken
- q:DisassociateLoginDomain
- q:GetArtifact
- q:GetArtifactActionResult
- q:ListGroups
- q:ListLoginDomains
- q:ListScimAccessTokens
- q:ListUsers
- q:PerformArtifactAction
- q:UpdateAssignment
- scheduler:ListSchedulesByTarget
- wickr:GetOpentdfConfig
- wickr:RegisterOpentdfConfig

## [0.781.0](https://github.com/udondan/iam-floyd/compare/v0.780.0...v0.781.0) (2026-04-28)

:warning: **Removed actions:**

- trustedadvisor:CreateEngagement
- trustedadvisor:CreateEngagementAttachment
- trustedadvisor:CreateEngagementCommunication
- trustedadvisor:GetEngagement
- trustedadvisor:GetEngagementAttachment
- trustedadvisor:GetEngagementType
- trustedadvisor:ListEngagementCommunications
- trustedadvisor:ListEngagementTypes
- trustedadvisor:ListEngagements
- trustedadvisor:UpdateEngagement
- trustedadvisor:UpdateEngagementStatus

**New actions:**

- aidevops:CreatePrivateConnection
- aidevops:DeletePrivateConnection
- aidevops:DescribePrivateConnection
- aidevops:ListPrivateConnections
- aidevops:UpdatePrivateConnectionCertificate
- kms:GetKeyLastUsage

**New resource types:**

- aidevops:private-connection
- aws-marketplace:AllListings
- aws-marketplace:AllPurchaseOptions

**New condition keys:**

- kms:TrailingDaysWithoutKeyUsage

## [0.780.0](https://github.com/udondan/iam-floyd/compare/v0.779.0...v0.780.0) (2026-04-26)

**New actions:**

- securityagent:BatchDeleteCodeReviews
- securityagent:BatchGetCodeReviewJobTasks
- securityagent:BatchGetCodeReviewJobs
- securityagent:BatchGetCodeReviews
- securityagent:CreateCodeReview
- securityagent:ListCodeReviewJobTasks
- securityagent:ListCodeReviewJobsForCodeReview
- securityagent:ListCodeReviews
- securityagent:StartCodeReviewJob
- securityagent:StopCodeReviewJob
- securityagent:UpdateCodeReview

## [0.779.0](https://github.com/udondan/iam-floyd/compare/v0.778.0...v0.779.0) (2026-04-24)

**New actions:**

- bedrock-agentcore:CreateHarness
- bedrock-agentcore:DeleteHarness
- bedrock-agentcore:GetHarness
- bedrock-agentcore:InvokeHarness
- bedrock-agentcore:ListHarnesses
- bedrock-agentcore:UpdateHarness
- geo:CancelJob
- geo:GetJob
- geo:ListJobs
- geo:StartJob

**New resource types:**

- bedrock-agentcore:harness

**New condition keys:**

- bedrock-agentcore:RuntimeAuthorizerType

## [0.778.0](https://github.com/udondan/iam-floyd/compare/v0.777.0...v0.778.0) (2026-04-23)

**New actions:**

- emr-serverless:GetResourceDashboard
- emr-serverless:GetSession
- emr-serverless:GetSessionEndpoint
- emr-serverless:ListSessions
- emr-serverless:StartSession
- emr-serverless:TerminateSession
- ivs:CreateAdConfiguration
- ivs:DeleteAdConfiguration
- ivs:GetAdConfiguration
- ivs:InsertAdBreak
- ivs:ListAdConfigurations
- profile:CreateRecommenderFilter
- profile:CreateRecommenderSchema
- profile:DeleteRecommenderFilter
- profile:DeleteRecommenderSchema
- profile:GetRecommenderFilter
- profile:GetRecommenderSchema
- profile:ListRecommenderFilters
- profile:ListRecommenderSchemas

**New resource types:**

- emr-serverless:session
- ivs:Ad-Configuration
- profile:recommender-filters
- profile:recommender-schemas
- verifiedpermissions:policy-store-alias

## [0.777.0](https://github.com/udondan/iam-floyd/compare/v0.776.0...v0.777.0) (2026-04-22)

**New actions:**

- aws-marketplace:GetInvoiceSubmissionTask
- aws-marketplace:ListInvoiceSubmissionTasks
- aws-marketplace:ListPayables
- aws-marketplace:StartInvoiceSubmissionTask
- sagemaker:CreateAIBenchmarkJob
- sagemaker:CreateAIRecommendationJob
- sagemaker:CreateAIWorkloadConfig
- sagemaker:DeleteAIBenchmarkJob
- sagemaker:DeleteAIRecommendationJob
- sagemaker:DeleteAIWorkloadConfig
- sagemaker:DescribeAIBenchmarkJob
- sagemaker:DescribeAIRecommendationJob
- sagemaker:DescribeAIWorkloadConfig
- sagemaker:ListAIBenchmarkJobs
- sagemaker:ListAIRecommendationJobs
- sagemaker:ListAIWorkloadConfigs
- sagemaker:StopAIBenchmarkJob
- sagemaker:StopAIRecommendationJob

**New resource types:**

- aws-marketplace:InvoiceSubmissionTask
- geo:job
- sagemaker:ai-benchmark-job
- sagemaker:ai-recommendation-job
- sagemaker:ai-workload-config

**New condition keys:**

- sagemaker:NotebookInstanceLifecycleConfigArns

## [0.776.0](https://github.com/udondan/iam-floyd/compare/v0.775.0...v0.776.0) (2026-04-21)

**New actions:**

- cases:UpdateRelatedItem
- datazone:CancelMessage
- evs:CreateEntitlement
- evs:CreateEnvironmentConnector
- evs:DeleteEntitlement
- evs:DeleteEnvironmentConnector
- evs:ListEnvironmentConnectors
- evs:ListVmEntitlements
- evs:UpdateEnvironmentConnector
- s3express:GetInventoryConfiguration
- s3express:PutInventoryConfiguration

**New condition keys:**

- cases:CreatedBy
- cases:RelatedItemType
- s3express:InventoryAccessibleOptionalFields

## [0.775.0](https://github.com/udondan/iam-floyd/compare/v0.774.0...v0.775.0) (2026-04-18)

**New actions:**

- cases:SearchAllRelatedItems
- connect-campaigns:DeleteCampaignEntryLimits
- connect-campaigns:UpdateCampaignEntryLimits
- groundstation:DescribeContactVersion
- groundstation:ListAntennas
- groundstation:ListContactVersions
- groundstation:ListGroundStationReservations
- groundstation:UpdateContact

**New condition keys:**

- eks:controlPlaneScalingTier
- eks:deletionProtection
- eks:encryptionConfigProviderKeyArns
- eks:endpointPrivateAccess
- eks:endpointPublicAccess
- eks:kubernetesVersion
- eks:zonalShiftEnabled

## [0.774.0](https://github.com/udondan/iam-floyd/compare/v0.773.0...v0.774.0) (2026-04-15)

**New actions:**

- cloudwatch:GetOTelEnrichment
- cloudwatch:StartOTelEnrichment
- cloudwatch:StopOTelEnrichment

**New condition keys:**

- personalize:RequestTag/${TagKey}
- personalize:ResourceTag/${TagKey}
- personalize:TagKeys

## [0.773.0](https://github.com/udondan/iam-floyd/compare/v0.772.0...v0.773.0) (2026-04-11)

**New actions:**

- bcm-dashboards:CreateScheduledReport
- bcm-dashboards:DeleteScheduledReport
- bcm-dashboards:ExecuteScheduledReport
- bcm-dashboards:GetScheduledReport
- bcm-dashboards:ListScheduledReports
- bcm-dashboards:UpdateScheduledReport
- es:DeregisterCapability
- es:GetCapability
- es:RegisterCapability
- omics:CancelRunBatch
- omics:DeleteBatch
- omics:DeleteRunBatch
- omics:GetBatch
- omics:ListBatch
- omics:ListRunsInBatch
- omics:StartRunBatch
- verifiedpermissions:CreatePolicyStoreAlias
- verifiedpermissions:DeletePolicyStoreAlias
- verifiedpermissions:GetPolicyStoreAlias
- verifiedpermissions:ListPolicyStoreAliases

**New resource types:**

- bcm-dashboards:dashboard
- bcm-dashboards:scheduled-report
- omics:runBatch

**New condition keys:**

- bcm-dashboards:ResourceTag/${TagKey}

## [0.772.0](https://github.com/udondan/iam-floyd/compare/v0.771.0...v0.772.0) (2026-04-10)

**New actions:**

- bedrock-agentcore:CreateRegistry
- bedrock-agentcore:CreateRegistryRecord
- bedrock-agentcore:DeleteRegistry
- bedrock-agentcore:DeleteRegistryRecord
- bedrock-agentcore:GetRegistry
- bedrock-agentcore:GetRegistryRecord
- bedrock-agentcore:InvokeRegistryMcp
- bedrock-agentcore:ListRegistries
- bedrock-agentcore:ListRegistryRecords
- bedrock-agentcore:SearchRegistryRecords
- bedrock-agentcore:SubmitRegistryRecordForApproval
- bedrock-agentcore:UpdateRegistry
- bedrock-agentcore:UpdateRegistryRecord
- bedrock-agentcore:UpdateRegistryRecordStatus

**New resource types:**

- bedrock-agentcore:registry
- bedrock-agentcore:registry-record

**New condition keys:**

- observabilityadmin:CentralizationDestinationAccount
- observabilityadmin:CentralizationRuleName
- observabilityadmin:CentralizationSourceId
- observabilityadmin:TargetRegions

## [0.771.0](https://github.com/udondan/iam-floyd/compare/v0.770.0...v0.771.0) (2026-04-09)

**New actions:**

- aws-marketplace:GetListing
- aws-marketplace:GetOffer
- aws-marketplace:GetOfferSet
- aws-marketplace:GetOfferTerms
- aws-marketplace:GetProduct
- aws-marketplace:ListFulfillmentOptions
- aws-marketplace:ListPurchaseOptions
- aws-marketplace:SearchFacets
- aws-marketplace:SearchListings
- deadline:GetMonitorSettings
- deadline:UpdateMonitorSettings
- workspaces:GetTroubleshootingRecommendation
- workspaces:InvokeTroubleshootingInvestigation
- workspaces:ListTroubleshootingRecommendations

**New resource types:**

- aws-marketplace:Listing
- aws-marketplace:Offer
- aws-marketplace:OfferSet
- aws-marketplace:Product
- aws-marketplace:PurchaseOption

## [0.770.0](https://github.com/udondan/iam-floyd/compare/v0.769.0...v0.770.0) (2026-04-08)

**New services:**

- s3files

**New actions:**

- bedrock:CreateDataAutomationLibrary
- bedrock:DeleteDataAutomationLibrary
- bedrock:GetDataAutomationLibrary
- bedrock:GetDataAutomationLibraryEntity
- bedrock:GetDataAutomationLibraryIngestionJob
- bedrock:InvokeDataAutomationLibraryIngestionJob
- bedrock:ListDataAutomationLibraries
- bedrock:ListDataAutomationLibraryEntities
- bedrock:ListDataAutomationLibraryIngestionJobs
- bedrock:UpdateDataAutomationLibrary
- glue:ManagedConnector
- transform:GetWebAppUrl

**New resource types:**

- bedrock:data-automation-library
- bedrock:data-automation-library-ingestion-job

## [0.769.0](https://github.com/udondan/iam-floyd/compare/v0.768.0...v0.769.0) (2026-04-03)

**New actions:**

- bedrock-mantle:AssociateCustomizedModel
- bedrock-mantle:CreateCustomizedModel
- bedrock-mantle:CreateReservation
- bedrock-mantle:DeleteCustomizedModel
- bedrock-mantle:DeleteReservation
- bedrock-mantle:DisassociateCustomizedModel
- bedrock-mantle:GetCustomizedModel
- bedrock-mantle:GetReservation
- bedrock-mantle:ListCustomizedModelAssociations
- bedrock-mantle:ListCustomizedModels
- bedrock-mantle:ListReservations
- bedrock-mantle:UpdateReservation

**New resource types:**

- bedrock-mantle:customized-model
- bedrock-mantle:reservation

**New condition keys:**

- bedrock-mantle:CustomizedModelArn
- bedrock-mantle:ProjectArn
- bedrock-mantle:ReservationArn

## [0.768.0](https://github.com/udondan/iam-floyd/compare/v0.767.0...v0.768.0) (2026-04-02)

**New services:**

- aws-external-anthropic

**New actions:**

- ecs:CreateDaemon
- ecs:DeleteDaemon
- ecs:DeleteDaemonTaskDefinition
- ecs:DescribeDaemon
- ecs:DescribeDaemonDeployments
- ecs:DescribeDaemonRevisions
- ecs:DescribeDaemonTaskDefinition
- ecs:ListDaemonDeployments
- ecs:ListDaemonTaskDefinitions
- ecs:ListDaemons
- ecs:RegisterDaemonTaskDefinition
- ecs:UpdateDaemon
- healthlake:DescribeFHIRBulkMemberMatchJob
- healthlake:StartFHIRBulkMemberMatchJob
- s3express:GetMetricsConfiguration
- s3express:PutMetricsConfiguration

**New resource types:**

- ecs:daemon
- ecs:daemon-deployment
- ecs:daemon-revision
- ecs:daemon-task-definition

**New condition keys:**

- ecs:daemon
- ecs:daemon-task-definition

## [0.767.0](https://github.com/udondan/iam-floyd/compare/v0.766.0...v0.767.0) (2026-04-01)

**New actions:**

- acm:SearchCertificates
- aidevops:CreateOneTimeLoginSession
- aws-marketplace:AcceptAgreementCancellationRequest
- aws-marketplace:BatchCreateBillingAdjustmentRequest
- aws-marketplace:CancelAgreementCancellationRequest
- aws-marketplace:GetAgreementCancellationRequest
- aws-marketplace:GetBillingAdjustmentRequest
- aws-marketplace:ListAgreementCancellationRequests
- aws-marketplace:ListAgreementInvoiceLineItems
- aws-marketplace:ListBillingAdjustmentRequests
- aws-marketplace:RejectAgreementCancellationRequest
- aws-marketplace:SendAgreementCancellationRequest
- logs:CreateLookupTable
- logs:DeleteLookupTable
- logs:DescribeLookupTables
- logs:GetLookupTable
- logs:UpdateLookupTable
- quicksight:DescribeAutomationJob
- quicksight:StartAutomationJob
- sagemaker:DeleteProcessingJob
- sagemaker:DeleteTrainingJob
- sagemaker:StartClusterHealthCheck
- sustainability:GetEstimatedCarbonEmissions
- sustainability:GetEstimatedCarbonEmissionsDimensionValues

**New resource types:**

- logs:lookup-table
- quicksight:automation
- quicksight:automationGroup
- quicksight:automationJob

**New condition keys:**

- sso:PrimaryRegion

## [0.766.0](https://github.com/udondan/iam-floyd/compare/v0.765.0...v0.766.0) (2026-03-28)

:warning: **Removed actions:**

- securityagent:BatchGetSecurityTestContentMetadata
- securityagent:BatchGetTasks
- securityagent:DescribeFindings
- securityagent:GetCodeReviewTask
- securityagent:GetDocReviewTask
- securityagent:ListTasks
- securityagent:StartPentestExecution
- securityagent:StopPentestExecution

**New actions:**

- es:DescribeInsightDetails
- es:ListInsights
- omics:CreateConfiguration
- omics:DeleteConfiguration
- omics:GetConfiguration
- omics:ListConfigurations

**New resource types:**

- omics:configuration

## [0.765.0](https://github.com/udondan/iam-floyd/compare/v0.764.0...v0.765.0) (2026-03-26)

:warning: **Removed actions:**

- securityagent:AddControl
- securityagent:BatchGetAgentInstances
- securityagent:CreateAgentInstance
- securityagent:CreateDocumentReview
- securityagent:DeleteAgentInstance
- securityagent:DeleteControl
- securityagent:DeleteDocumentReview
- securityagent:GetControl
- securityagent:GetDocumentReview
- securityagent:GetDocumentReviewArtifact
- securityagent:GetLoginSessionCredentials
- securityagent:HandleOneTimeLoginSession
- securityagent:ListAgentInstanceTasks
- securityagent:ListAgentInstances
- securityagent:ListControls
- securityagent:ListDocumentReviewComments
- securityagent:ListDocumentReviews
- securityagent:ToggleManagedControl
- securityagent:UpdateAgentInstance
- securityagent:UpdateControl

:warning: **Removed resource types:**

- securityagent:AgentInstance
- securityagent:Artifact
- securityagent:Control
- securityagent:Finding
- securityagent:Pentest
- securityagent:PentestJob
- securityagent:PentestTask
- securityagent:SecurityRequirement

**New actions:**

- securityagent:ListTagsForResource
- securityagent:TagResource
- securityagent:UntagResource

**New resource types:**

- securityagent:SecurityRequirementPack

**New condition keys:**

- securityagent:RequestTag/${TagKey}
- securityagent:ResourceTag/${TagKey}
- securityagent:TagKeys

## [0.764.0](https://github.com/udondan/iam-floyd/compare/v0.763.0...v0.764.0) (2026-03-25)

**New condition keys:**

- route53profiles:FirewallRuleGroupPriority
- route53profiles:HostedZoneDomains
- route53profiles:ResolverRuleDomains
- route53profiles:ResourceArns
- route53profiles:ResourceIds
- route53profiles:ResourceTypes

## [0.763.0](https://github.com/udondan/iam-floyd/compare/v0.761.0...v0.763.0) (2026-03-24)

:warning: **Removed actions:**

- aidevops:CreateOneTimeLoginSession
- aidevops:GetOperatorAppTeams
- aidevops:HandleServiceRegistrationCallback
- aidevops:InitiateServiceRegistration
- aidevops:SendChatMessage
- aidevops:StreamMessage
- aidevops:UpdateOperatorAppTeams

:warning: **Removed condition keys:**

- aidevops:AgentSpaceResourceAgentSpaceId
- aidevops:AssociationResourceAgentSpaceId
- aidevops:AssociationResourceAssociationId
- aidevops:ServiceResourceServiceId

:warning: **Removed resource types:**

- aidevops:AgentSpaceResource
- aidevops:AssociationResource
- aidevops:ServiceResource

**New actions:**

- aidevops:GetOperatorApp
- aidevops:ListKnowledgeItemVersions
- aidevops:ListTagsForResource
- aidevops:SendMessage
- aidevops:TagResource
- aidevops:UntagResource
- aidevops:UpdateOperatorAppIdpConfig
- aidevops:ValidateAwsAssociations
- batch:CreateQuotaShare
- batch:DeleteQuotaShare
- batch:DescribeQuotaShare
- batch:ListQuotaShares
- batch:UpdateQuotaShare
- batch:UpdateServiceJob
- gamelift:GetPlayerConnectionDetails
- partnercentral-account-management:AccessProServeTools
- polly:StartSpeechSynthesisStream

**New resource types:**

- aidevops:agentspace
- aidevops:associations
- aidevops:service
- batch:quota-share

**New condition keys:**

- aidevops:RequestTag/${TagKey}
- aidevops:ResourceTag/${TagKey}
- aidevops:TagKeys
- batch:SchedulingPriority
- partnercentral-account-management:ProServeRole

## [0.762.0] (2026-03-21)

:warning: **Removed actions:**

- aidevops:CreateKnowledgeItem
- aidevops:CreateOneTimeLoginSession
- aidevops:DeleteKnowledgeItem
- aidevops:DiscoverTopology
- aidevops:GetKnowledgeItem
- aidevops:GetOperatorAppTeams
- aidevops:HandleServiceRegistrationCallback
- aidevops:InitiateServiceRegistration
- aidevops:ListKnowledgeItems
- aidevops:SendChatMessage
- aidevops:StreamMessage
- aidevops:UpdateKnowledgeItem
- aidevops:UpdateOperatorAppTeams

:warning: **Removed condition keys:**

- aidevops:AgentSpaceResourceAgentSpaceId
- aidevops:AssociationResourceAgentSpaceId
- aidevops:AssociationResourceAssociationId
- aidevops:ServiceResourceServiceId

:warning: **Removed resource types:**

- aidevops:AgentSpaceResource
- aidevops:AssociationResource
- aidevops:ServiceResource

**New actions:**

- aidevops:GetOperatorApp
- aidevops:ListTagsForResource
- aidevops:SendMessage
- aidevops:TagResource
- aidevops:UntagResource
- aidevops:UpdateOperatorAppIdpConfig
- aidevops:ValidateAwsAssociations
- batch:CreateQuotaShare
- batch:DeleteQuotaShare
- batch:DescribeQuotaShare
- batch:ListQuotaShares
- batch:UpdateQuotaShare
- batch:UpdateServiceJob

**New resource types:**

- aidevops:agentspace
- aidevops:associations
- aidevops:service
- batch:quota-share

**New condition keys:**

- aidevops:RequestTag/${TagKey}
- aidevops:ResourceTag/${TagKey}
- aidevops:TagKeys
- batch:SchedulingPriority

## [0.761.0](https://github.com/udondan/iam-floyd/compare/v0.758.0...v0.761.0) (2026-03-19)

:warning: **Removed actions:**

- route53-recovery-control-config:DescribeRoutingControlByName

**New services:**

- interconnect

**New actions:**

- bedrock-agentcore:InvokeAgentRuntimeCommand
- datazone:GetNotebookExport
- datazone:StartNotebookExport
- datazone:StartNotebookImport
- es:GetDefaultApplicationSetting
- es:PutDefaultApplicationSetting
- interconnect:AcceptConnectionProposal
- interconnect:CreateConnection
- interconnect:DeleteConnection
- interconnect:DescribeConnectionProposal
- interconnect:GetConnection
- interconnect:GetEnvironment
- interconnect:ListAttachPoints
- interconnect:ListConnections
- interconnect:ListEnvironments
- interconnect:ListTagsForResource
- interconnect:TagResource
- interconnect:UntagResource
- interconnect:UpdateConnection
- partnercentral:UseSession
- sdb:GetExport
- sdb:ListExports
- sdb:StartDomainExport
- securityhub:AllowVendedLogDeliveryForResource
- uxc:GetAccountCustomizations
- uxc:ListServices
- uxc:UpdateAccountCustomizations

**New resource types:**

- aws-marketplace:Assessment
- interconnect:connection
- interconnect:environment
- sdb:export

**New condition keys:**

- ecs:instance-metadata-tags-propagation
- interconnect:RequestTag/${TagKey}
- interconnect:ResourceTag/${TagKey}
- interconnect:TagKeys
- medical-imaging:SeriesInstanceUID
- medical-imaging:StudyInstanceUID
- s3:x-amz-bucket-namespace
- vpc-lattice:CreateAction

## [0.760.0] (2026-03-17)

:warning: **Removed actions:**

- route53-recovery-control-config:DescribeRoutingControlByName

**New services:**

- interconnect

**New actions:**

- bedrock-agentcore:InvokeAgentRuntimeCommand
- datazone:GetNotebookExport
- datazone:StartNotebookExport
- datazone:StartNotebookImport
- es:GetDefaultApplicationSetting
- es:PutDefaultApplicationSetting
- partnercentral:UseSession
- sdb:GetExport
- sdb:ListExports
- sdb:StartDomainExport
- uxc:GetAccountCustomizations
- uxc:ListServices
- uxc:UpdateAccountCustomizations

**New resource types:**

- sdb:export

**New condition keys:**

- ecs:instance-metadata-tags-propagation
- s3:x-amz-bucket-namespace
- vpc-lattice:CreateAction

## [0.759.0] (2026-03-14)

:warning: **Removed actions:**

- route53-recovery-control-config:DescribeRoutingControlByName

**New actions:**

- datazone:GetNotebookExport
- datazone:StartNotebookExport
- datazone:StartNotebookImport
- partnercentral:UseSession
- sdb:GetExport
- sdb:ListExports
- sdb:StartDomainExport

**New resource types:**

- sdb:export

**New condition keys:**

- s3:x-amz-bucket-namespace

## [0.758.0](https://github.com/udondan/iam-floyd/compare/v0.757.0...v0.758.0) (2026-03-10)

**New actions:**

- cognito-idp:AddUserPoolClientSecret
- cognito-idp:DeleteUserPoolClientSecret
- cognito-idp:ListUserPoolClientSecrets
- es:RollbackElasticsearchServiceSoftwareUpdate
- es:RollbackServiceSoftwareUpdate
- ram:ListSourceAssociations

**New condition keys:**

- ram:RetainSharingOnAccountLeaveOrganization

## [0.757.0](https://github.com/udondan/iam-floyd/compare/v0.754.0...v0.757.0) (2026-03-07)

**New services:**

- health-agent

**New actions:**

- aidevops:AllowVendedLogDeliveryForResource
- aidevops:CreateChat
- aidevops:ListChats
- aidevops:StreamMessage
- aidevops:UpdateGoal
- bedrock-mantle:ArchiveProject
- bedrock-mantle:CreateProject
- bedrock-mantle:GetProject
- bedrock-mantle:ListProjects
- bedrock-mantle:ListTagsForResource
- bedrock-mantle:TagResource
- bedrock-mantle:UntagResource
- bedrock-mantle:UpdateProject
- ec2:AttachResourcesToPlacementGroup
- ec2:CreateSecondaryNetwork
- ec2:CreateSecondarySubnet
- ec2:DeleteSecondaryNetwork
- ec2:DeleteSecondarySubnet
- ec2:DescribeSecondaryInterfaces
- ec2:DescribeSecondaryNetworks
- ec2:DescribeSecondarySubnets
- ec2:DetachResourcesFromPlacementGroup
- mpa:StartApprovalTeamBaseline
- securityagent:BatchGetTargetDomains
- securityagent:CreateTargetDomain
- securityagent:DeleteTargetDomain
- securityagent:GetDesignReviewFeedback
- securityagent:ListTargetDomains
- securityagent:PutDesignReviewFeedback
- securityagent:UpdateTargetDomain

**Updated action access level:**

- elasticloadbalancing:CreateWebACLAssociation: Permissions management -> Write
- elasticloadbalancing:DeleteWebACLAssociation: Permissions management -> Write
- elasticloadbalancing:DescribeWebACLAssociation: Permissions management -> List
- elasticloadbalancing:GetLoadBalancerWebACL: Permissions management -> Read

**New resource types:**

- ec2:secondary-interface
- ec2:secondary-network
- ec2:secondary-subnet
- securityagent:TargetDomain

**New condition keys:**

- bedrock-mantle:RequestTag/${TagKey}
- bedrock-mantle:ResourceTag/${TagKey}
- bedrock-mantle:TagKeys

## [0.756.0] (2026-03-01)

**New actions:**

- aidevops:AllowVendedLogDeliveryForResource
- aidevops:CreateChat
- aidevops:ListChats
- aidevops:StreamMessage
- aidevops:UpdateGoal
- bedrock-mantle:ArchiveProject
- bedrock-mantle:CreateProject
- bedrock-mantle:GetProject
- bedrock-mantle:ListProjects
- bedrock-mantle:ListTagsForResource
- bedrock-mantle:TagResource
- bedrock-mantle:UntagResource
- bedrock-mantle:UpdateProject
- ec2:AttachResourcesToPlacementGroup
- ec2:CreateSecondaryNetwork
- ec2:CreateSecondarySubnet
- ec2:DeleteSecondaryNetwork
- ec2:DeleteSecondarySubnet
- ec2:DescribeSecondaryInterfaces
- ec2:DescribeSecondaryNetworks
- ec2:DescribeSecondarySubnets
- ec2:DetachResourcesFromPlacementGroup

**Updated action access level:**

- elasticloadbalancing:CreateWebACLAssociation: Permissions management -> Write
- elasticloadbalancing:DeleteWebACLAssociation: Permissions management -> Write
- elasticloadbalancing:DescribeWebACLAssociation: Permissions management -> List
- elasticloadbalancing:GetLoadBalancerWebACL: Permissions management -> Read

**New resource types:**

- ec2:secondary-interface
- ec2:secondary-network
- ec2:secondary-subnet

**New condition keys:**

- bedrock-mantle:RequestTag/${TagKey}
- bedrock-mantle:ResourceTag/${TagKey}
- bedrock-mantle:TagKeys

## [0.755.0] (2026-02-27)

**New actions:**

- bedrock-mantle:ArchiveProject
- bedrock-mantle:CreateProject
- bedrock-mantle:GetProject
- bedrock-mantle:ListProjects
- bedrock-mantle:ListTagsForResource
- bedrock-mantle:TagResource
- bedrock-mantle:UntagResource
- bedrock-mantle:UpdateProject
- ec2:AttachResourcesToPlacementGroup
- ec2:CreateSecondaryNetwork
- ec2:CreateSecondarySubnet
- ec2:DeleteSecondaryNetwork
- ec2:DeleteSecondarySubnet
- ec2:DescribeSecondaryInterfaces
- ec2:DescribeSecondaryNetworks
- ec2:DescribeSecondarySubnets
- ec2:DetachResourcesFromPlacementGroup

**Updated action access level:**

- elasticloadbalancing:CreateWebACLAssociation: Permissions management -> Write
- elasticloadbalancing:DeleteWebACLAssociation: Permissions management -> Write
- elasticloadbalancing:DescribeWebACLAssociation: Permissions management -> List
- elasticloadbalancing:GetLoadBalancerWebACL: Permissions management -> Read

**New resource types:**

- ec2:secondary-interface
- ec2:secondary-network
- ec2:secondary-subnet

**New condition keys:**

- bedrock-mantle:RequestTag/${TagKey}
- bedrock-mantle:ResourceTag/${TagKey}
- bedrock-mantle:TagKeys

## [0.754.0](https://github.com/udondan/iam-floyd/compare/v0.753.0...v0.754.0) (2026-02-26)

:warning: **Removed resource types:**

- elemental-inference:FeedResource

**New actions:**

- cloudwatch:DeleteAlarmMuteRule
- cloudwatch:GetAlarmMuteRule
- cloudwatch:ListAlarmMuteRules
- cloudwatch:PutAlarmMuteRule
- lex:DeleteBotAnalyzerRecommendation
- lex:DescribeBotAnalyzerRecommendation
- lex:ListBotAnalyzerRecommendations
- lex:StartBotAnalyzer
- lex:StopBotAnalyzer
- wafv2:GetTopPathStatisticsByTraffic

**Updated action access level:**

- elemental-inference:GetMetadata: Write -> Read

**New resource types:**

- cloudwatch:alarm-mute-rule
- elemental-inference:feed

## [0.753.0](https://github.com/udondan/iam-floyd/compare/v0.752.0...v0.753.0) (2026-02-25)

**New services:**

- elemental-inference

**New actions:**

- healthlake:InquirePreAuthClaim
- healthlake:QuestionnairePackage
- healthlake:SubmitPreAuthClaim

**New resource types:**

- mediaconnect:MediaStream
- mediaconnect:VpcInterface

## [0.752.0](https://github.com/udondan/iam-floyd/compare/v0.749.0...v0.752.0) (2026-02-21)

**New services:**

- inspector2-telemetry

**New actions:**

- bedrock-mantle:CancelFineTuningJob
- bedrock-mantle:CreateFile
- bedrock-mantle:CreateFineTuningJob
- bedrock-mantle:DeleteFile
- bedrock-mantle:GetFile
- bedrock-mantle:GetFineTuningJob
- bedrock-mantle:ListFiles
- bedrock-mantle:ListFineTuningJobs
- bedrock:CopyBlueprintStage
- bedrock:GetBlueprintOptimizationStatus
- bedrock:InvokeBlueprintOptimizationAsync
- connect:AssociateQueueEmailAddresses
- connect:CreateNotification
- connect:DeleteNotification
- connect:DescribeNotification
- connect:DisassociateQueueEmailAddresses
- connect:ListNotifications
- connect:ListQueueEmailAddresses
- connect:ListUserNotifications
- connect:SearchNotifications
- connect:UpdateNotificationContent
- connect:UpdateUserNotificationStatus
- glue:DeleteIntegrationResourceProperty
- glue:ListIntegrationResourceProperties
- inspector2-telemetry:NotifyHeartbeat
- inspector2-telemetry:SendTelemetry
- inspector2-telemetry:StartSession
- inspector2-telemetry:StopSession
- logs:CallWithBearerToken
- logs:PutBearerTokenAuthentication
- payment-cryptography:GenerateAs2805KekValidation

**New resource types:**

- bedrock:blueprint-optimization-invocation
- connect:notification
- glue:integrationResourceProperty

**New condition keys:**

- bedrock-mantle:Files
- bedrock-mantle:FineTuningJob
- workmail:ImpersonationRoleId

## [0.751.0] (2026-02-19)

**New services:**

- inspector2-telemetry

**New actions:**

- bedrock-mantle:CancelFineTuningJob
- bedrock-mantle:CreateFile
- bedrock-mantle:CreateFineTuningJob
- bedrock-mantle:DeleteFile
- bedrock-mantle:GetFile
- bedrock-mantle:GetFineTuningJob
- bedrock-mantle:ListFiles
- bedrock-mantle:ListFineTuningJobs
- glue:DeleteIntegrationResourceProperty
- glue:ListIntegrationResourceProperties
- inspector2-telemetry:NotifyHeartbeat
- inspector2-telemetry:SendTelemetry
- inspector2-telemetry:StartSession
- inspector2-telemetry:StopSession
- payment-cryptography:GenerateAs2805KekValidation

**New resource types:**

- glue:integrationResourceProperty

**New condition keys:**

- bedrock-mantle:Files
- bedrock-mantle:FineTuningJob
- workmail:ImpersonationRoleId

## [0.750.0] (2026-02-18)

**New services:**

- inspector2-telemetry

**New actions:**

- bedrock-mantle:CancelFineTuningJob
- bedrock-mantle:CreateFile
- bedrock-mantle:CreateFineTuningJob
- bedrock-mantle:DeleteFile
- bedrock-mantle:GetFile
- bedrock-mantle:GetFineTuningJob
- bedrock-mantle:ListFiles
- bedrock-mantle:ListFineTuningJobs
- payment-cryptography:GenerateAs2805KekValidation

**New condition keys:**

- bedrock-mantle:Files
- bedrock-mantle:FineTuningJob
- workmail:ImpersonationRoleId

## [0.749.0](https://github.com/udondan/iam-floyd/compare/v0.748.0...v0.749.0) (2026-02-12)

**New resource types:**

- signin:oauth2-public-client-localhost
- signin:oauth2-public-client-remote

## [0.748.0](https://github.com/udondan/iam-floyd/compare/v0.747.0...v0.748.0) (2026-02-11)

**New actions:**

- kafka:CreateTopic
- kafka:DeleteTopic
- kafka:UpdateTopic

## [0.747.0](https://github.com/udondan/iam-floyd/compare/v0.746.0...v0.747.0) (2026-02-10)

**Updated action access level:**

- deadline:ListTagsForResource: List -> Read
- deadline:SearchJobs: List -> Read
- deadline:SearchSteps: List -> Read
- deadline:SearchTasks: List -> Read
- deadline:SearchWorkers: List -> Read

## [0.746.0](https://github.com/udondan/iam-floyd/compare/v0.745.0...v0.746.0) (2026-02-07)

**New actions:**

- bedrock-agentcore:CreateBrowserProfile
- bedrock-agentcore:DeleteBrowserProfile
- bedrock-agentcore:GetBrowserProfile
- bedrock-agentcore:ListBrowserProfiles
- bedrock-agentcore:SaveBrowserSessionProfile
- glue:DeleteConnectionType
- glue:RegisterConnectionType

**New resource types:**

- bedrock-agentcore:browser-profile
- glue:connectionType

**New condition keys:**

- bedrock-agentcore:KmsKeyArn

## [0.745.0](https://github.com/udondan/iam-floyd/compare/v0.744.0...v0.745.0) (2026-02-05)

**New actions:**

- ec2:InjectVolumeIOLatency

**New condition keys:**

- dynamodb:FisActionId
- dynamodb:FisTargetArns

## [0.744.0](https://github.com/udondan/iam-floyd/compare/v0.743.0...v0.744.0) (2026-02-03)

**New actions:**

- dynamodb:AssociateTableReplica
- dynamodb:ReadDataForReplication
- dynamodb:ReplicateSettings
- dynamodb:WriteDataForReplication
- identitystore:AddRegion
- identitystore:DescribeRegion
- identitystore:ListRegions
- identitystore:RemoveRegion
- securityagent:BatchGetPentestJobContentMetadata
- sso:AddRegion
- sso:DescribeRegion
- sso:ListRegions
- sso:RemoveRegion

**New condition keys:**

- bedrock-agentcore:securityGroups
- bedrock-agentcore:subnets

## [0.743.0](https://github.com/udondan/iam-floyd/compare/v0.742.0...v0.743.0) (2026-01-31)

**New actions:**

- dynamodb:InjectError
- redshift-serverless:GetIdentityCenterAuthToken
- redshift:GetIdentityCenterAuthToken
- s3:UpdateObjectEncryption

## [0.742.0](https://github.com/udondan/iam-floyd/compare/v0.741.0...v0.742.0) (2026-01-28)

**New actions:**

- securityagent:BatchGetAgentSpaces
- securityagent:BatchGetPentestJobTasks
- securityagent:CreateAgentSpace
- securityagent:CreateDesignReview
- securityagent:CreateSecurityRequirement
- securityagent:DeleteAgentSpace
- securityagent:DeleteDesignReview
- securityagent:DeleteDocumentReview
- securityagent:DeleteSecurityRequirement
- securityagent:GetDesignReview
- securityagent:GetDesignReviewArtifact
- securityagent:GetSecurityRequirement
- securityagent:ListAgentSpaces
- securityagent:ListDesignReviewComments
- securityagent:ListDesignReviews
- securityagent:ListPentestJobTasks
- securityagent:ListSecurityRequirements
- securityagent:StartPentestJob
- securityagent:StopPentestJob
- securityagent:ToggleManagedSecurityRequirement
- securityagent:UpdateAgentSpace
- securityagent:UpdateSecurityRequirement

**New resource types:**

- securityagent:AgentSpace
- securityagent:SecurityRequirement

## [0.741.0](https://github.com/udondan/iam-floyd/compare/v0.740.0...v0.741.0) (2026-01-27)

**Updated action access level:**

- route53-recovery-control-config:DeleteResourcePolicy: Write -> Permissions management
- route53-recovery-control-config:PutResourcePolicy: Write -> Permissions management

## [0.740.0](https://github.com/udondan/iam-floyd/compare/v0.739.0...v0.740.0) (2026-01-24)

**New actions:**

- datazone:DeleteDataExportConfiguration
- datazone:QueryGraph
- evs:GetVersions
- launchwizard:GetDeploymentPatternVersion
- launchwizard:ListDeploymentPatternVersions
- launchwizard:UpdateDeployment

## [0.739.0](https://github.com/udondan/iam-floyd/compare/v0.738.0...v0.739.0) (2026-01-18)

:warning: **Removed actions:**

- network-security-director:GetNetworkSecurityScan
- network-security-director:StartNetworkSecurityScan

:warning: **Removed condition keys:**

- apigateway:Request/CognitoUserPoolProviderArn
- apigateway:Resource/CognitoUserPoolProviderArn

:warning: **Removed resource types:**

- deadline:metered-product
- transform-custom:conversation

**New actions:**

- account:GetGovCloudAccountInformation
- aoss:AddCollectionToCollectionGroup
- aoss:BatchGetCollectionGroup
- aoss:CreateCollectionGroup
- aoss:DeleteCollectionGroup
- aoss:ListCollectionGroups
- aoss:UpdateCollectionGroup
- apigateway:CreatePortal
- apigateway:CreatePortalProduct
- apigateway:CreateProductPage
- apigateway:CreateProductRestEndpointPage
- apigateway:DeletePortal
- apigateway:DeletePortalProduct
- apigateway:DeletePortalProductSharingPolicy
- apigateway:DeleteProductPage
- apigateway:DeleteProductRestEndpointPage
- apigateway:DisablePortal
- apigateway:GetPortal
- apigateway:GetPortalProduct
- apigateway:GetPortalProductSharingPolicy
- apigateway:GetProductPage
- apigateway:GetProductRestEndpointPage
- apigateway:ListPortalProducts
- apigateway:ListPortals
- apigateway:ListProductPages
- apigateway:ListProductRestEndpointPages
- apigateway:PreviewPortal
- apigateway:PublishPortal
- apigateway:PutPortalProductSharingPolicy
- apigateway:UpdatePortal
- apigateway:UpdatePortalProduct
- apigateway:UpdateProductPage
- apigateway:UpdateProductRestEndpointPage
- appsync:AssociateWebACL
- appsync:DisassociateWebACL
- appsync:GetWebACLForResource
- appsync:ListResourcesForWebACL
- arc-region-switch:ListRoute53HealthChecksInRegion
- artifact:ListReportVersions
- cleanrooms:UpdateCollaborationChangeRequest
- ec2:AttachApplianceToNatGateway
- ec2:CreateInterruptibleCapacityReservationAllocation
- ec2:CreateIpamPolicy
- ec2:CreateIpamPrefixListResolver
- ec2:CreateIpamPrefixListResolverTarget
- ec2:CreateOdbNetworkPeering
- ec2:CreateTransitGatewayMeteringPolicy
- ec2:CreateTransitGatewayMeteringPolicyEntry
- ec2:CreateVpcEncryptionControl
- ec2:CreateVpnConcentrator
- ec2:DeleteIpamPolicy
- ec2:DeleteIpamPrefixListResolver
- ec2:DeleteIpamPrefixListResolverTarget
- ec2:DeleteOdbNetworkPeering
- ec2:DeleteTransitGatewayMeteringPolicy
- ec2:DeleteTransitGatewayMeteringPolicyEntry
- ec2:DeleteVpcEncryptionControl
- ec2:DeleteVpnConcentrator
- ec2:DescribeCapacityReservationTopology
- ec2:DescribeInstanceSqlHaHistoryStates
- ec2:DescribeInstanceSqlHaStates
- ec2:DescribeIpamPolicies
- ec2:DescribeIpamPrefixListResolverTargets
- ec2:DescribeIpamPrefixListResolvers
- ec2:DescribeTransitGatewayMeteringPolicies
- ec2:DescribeVpcEncryptionControls
- ec2:DescribeVpnConcentrators
- ec2:DetachApplianceFromNatGateway
- ec2:DisableInstanceSqlHaStandbyDetections
- ec2:DisableIpamPolicy
- ec2:EnableInstanceSqlHaStandbyDetections
- ec2:EnableIpamPolicy
- ec2:GetEnabledIpamPolicy
- ec2:GetImageAncestry
- ec2:GetIpamPolicyAllocationRules
- ec2:GetIpamPolicyOrganizationTargets
- ec2:GetIpamPrefixListResolverRules
- ec2:GetIpamPrefixListResolverVersionEntries
- ec2:GetIpamPrefixListResolverVersions
- ec2:GetTransitGatewayMeteringPolicyEntries
- ec2:GetVpcResourcesBlockingEncryptionEnforcement
- ec2:ListVolumesInRecycleBin
- ec2:ModifyIpamPolicyAllocationRules
- ec2:ModifyIpamPrefixListResolver
- ec2:ModifyIpamPrefixListResolverTarget
- ec2:ModifyOdbNetworkPeering
- ec2:ModifyTransitGatewayMeteringPolicy
- ec2:ModifyVpcEncryptionControl
- ec2:RestoreVolumeFromRecycleBin
- ec2:UpdateInterruptibleCapacityReservationAllocation
- elasticloadbalancing:CreateWebACLAssociation
- elasticloadbalancing:DeleteWebACLAssociation
- elasticloadbalancing:DescribeWebACLAssociation
- elasticloadbalancing:GetLoadBalancerWebACL
- groundstation:CreateDataflowEndpointGroupV2
- logs:CancelImportTask
- logs:CreateImportTask
- logs:DescribeImportTaskBatches
- logs:DescribeImportTasks
- mgn:GetAccountSettings
- mgn:UpdateAccountSettings
- network-firewall:AttachRuleGroupsToProxyConfiguration
- network-firewall:CreateProxy
- network-firewall:CreateProxyConfiguration
- network-firewall:CreateProxyRuleGroup
- network-firewall:CreateProxyRules
- network-firewall:DeleteProxy
- network-firewall:DeleteProxyConfiguration
- network-firewall:DeleteProxyRuleGroup
- network-firewall:DeleteProxyRules
- network-firewall:DescribeProxy
- network-firewall:DescribeProxyConfiguration
- network-firewall:DescribeProxyRule
- network-firewall:DescribeProxyRuleGroup
- network-firewall:DetachRuleGroupsFromProxyConfiguration
- network-firewall:ListProxies
- network-firewall:ListProxyConfigurations
- network-firewall:ListProxyRuleGroups
- network-firewall:UpdateProxy
- network-firewall:UpdateProxyConfiguration
- network-firewall:UpdateProxyRule
- network-firewall:UpdateProxyRuleGroupPriorities
- network-firewall:UpdateProxyRulePriorities
- network-security-director:ListAccountSummaries
- networkmanager:CreateCoreNetworkPrefixListAssociation
- networkmanager:DeleteCoreNetworkPrefixListAssociation
- networkmanager:ListAttachmentRoutingPolicyAssociations
- networkmanager:ListCoreNetworkPrefixListAssociations
- networkmanager:ListCoreNetworkRoutingInformation
- networkmanager:PutAttachmentRoutingPolicyLabel
- networkmanager:RemoveAttachmentRoutingPolicyLabel
- odb:CreateGrantShare
- odb:DeleteGrantShare
- odb:UpdateGrantShare
- payment-cryptography:AddKeyReplicationRegions
- payment-cryptography:DisableDefaultKeyReplicationRegions
- payment-cryptography:EnableDefaultKeyReplicationRegions
- payment-cryptography:GetCertificateSigningRequest
- payment-cryptography:GetDefaultKeyReplicationRegions
- payment-cryptography:RemoveKeyReplicationRegions
- payment-cryptography:TranslateKeyMaterial
- quicksight:BatchGetPreferences
- quicksight:BatchUpdatePreferences
- quicksight:DescribeSelfUpgradeConfiguration
- quicksight:GetIdentityContext
- quicksight:ListSelfUpgrades
- quicksight:UpdateSelfUpgrade
- quicksight:UpdateSelfUpgradeConfiguration
- redshift-serverless:ListAutonomicsDenylist
- redshift-serverless:UpdateAutonomicsDenylist
- redshift:DescribeAutonomicsDenylist
- redshift:ModifyAutonomicsDenylist
- s3tables:DeleteTableBucketMetricsConfiguration
- s3tables:GetTableBucketMetricsConfiguration
- s3tables:PutTableBucketMetricsConfiguration
- servicequotas:GetQuotaUtilizationReport
- servicequotas:StartQuotaUtilizationReport
- ses:GetEmailAddressInsights
- timestream-influxdb:RebootDbCluster
- timestream-influxdb:RebootDbInstance
- wickr:BatchCreateUser
- wickr:BatchDeleteUser
- wickr:BatchLookupUserUname
- wickr:BatchReinviteUser
- wickr:BatchResetDevicesForUser
- wickr:BatchToggleUserSuspendStatus
- wickr:CreateBot
- wickr:CreateDataRetentionBot
- wickr:CreateDataRetentionBotChallenge
- wickr:CreateSecurityGroup
- wickr:DeleteBot
- wickr:DeleteDataRetentionBot
- wickr:DeleteSecurityGroup
- wickr:GetBot
- wickr:GetBotsCount
- wickr:GetDataRetentionBot
- wickr:GetGuestUserHistoryCount
- wickr:GetNetwork
- wickr:GetNetworkSettings
- wickr:GetOidcInfo
- wickr:GetSecurityGroup
- wickr:GetUser
- wickr:GetUsersCount
- wickr:ListBlockedGuestUsers
- wickr:ListBots
- wickr:ListDevicesForUser
- wickr:ListGuestUsers
- wickr:ListSecurityGroupUsers
- wickr:ListSecurityGroups
- wickr:ListUsers
- wickr:RegisterOidcConfig
- wickr:RegisterOidcConfigTest
- wickr:UpdateBot
- wickr:UpdateDataRetention
- wickr:UpdateGuestUser
- wickr:UpdateNetworkSettings
- wickr:UpdateSecurityGroup
- wickr:UpdateUser

**Updated action access level:**

- networkmanager:DeleteResourcePolicy: Write -> Permissions management
- networkmanager:PutResourcePolicy: Write -> Permissions management
- networkmanager:StartOrganizationServiceAccessUpdate: Write -> Permissions management
- transform-custom:ListCampaigns: Read -> List
- transform-custom:ListKnowledgeItems: Read -> List
- transform-custom:ListTransformationPackageMetadata: Read -> List
- wickr:ListNetworks: Write -> Read

**New resource types:**

- aoss:CollectionGroup
- apigateway:Portal
- apigateway:PortalProduct
- apigateway:ProductPage
- apigateway:ProductRestEndpointPage
- ec2:ipam-policy
- ec2:ipam-prefix-list-resolver
- ec2:ipam-prefix-list-resolver-target
- ec2:transit-gateway-metering-policy
- ec2:vpc-encryption-control
- ec2:vpn-concentrator
- network-firewall:Proxy
- network-firewall:ProxyConfiguration
- network-firewall:ProxyRuleGroup

**New condition keys:**

- aoss:collection-group
- apigateway:Request/CognitoUserPoolArn
- apigateway:Request/Method
- apigateway:Request/PortalDisplayName
- apigateway:Request/PortalDomainName
- apigateway:Request/PortalProductDisplayName
- apigateway:Request/ProductPageTitle
- apigateway:Request/ProductRestEndpointPageEndpointPrefix
- apigateway:Request/RestApiId
- apigateway:Request/Stage
- apigateway:Resource/CognitoUserPoolArn
- apigateway:Resource/Method
- apigateway:Resource/PortalDisplayName
- apigateway:Resource/PortalDomainName
- apigateway:Resource/PortalProductDisplayName
- apigateway:Resource/PortalPublishStatus
- apigateway:Resource/ProductPageTitle
- apigateway:Resource/ProductRestEndpointPageEndpointPrefix
- apigateway:Resource/RestApiId
- apigateway:Resource/Stage
- cognito-identity:AccountId
- cognito-identity:IdentityPoolArn
- ec2:CommitmentDuration
- ec2:InterruptibleCapacityReservationId
- ec2:InterruptionType
- ec2:IpamPrefixListResolverTargetId
- ec2:IsInterruptible
- ec2:TargetInstanceCount
- ec2:VpcePrivateDnsPreference
- ec2:VpcePrivateDnsSpecifiedDomains
- ec2:transitGatewayMeteringPolicyId
- iotwireless:DestinationName
- iotwireless:DeviceProfileId
- iotwireless:ServiceProfileId
- rds:TagsFromRequest
- sagemaker:StudioLifecycleConfigArns
- ssm:DocumentVersion

## [0.738.0](https://github.com/udondan/iam-floyd/compare/v0.737.0...v0.738.0) (2026-01-18)

:warning: **Removed services:**

- deepracer

:warning: **Removed actions:**

- deepracer:AddLeaderboardAccessPermission
- deepracer:AdminDescribeAccountKey
- deepracer:AdminGetAccountConfig
- deepracer:AdminListAssociatedResources
- deepracer:AdminListAssociatedUsers
- deepracer:AdminManageUser
- deepracer:AdminSetAccountConfig
- deepracer:AdminUpdateAccountKey
- deepracer:CloneReinforcementLearningModel
- deepracer:CreateCar
- deepracer:CreateLeaderboard
- deepracer:CreateLeaderboardAccessToken
- deepracer:CreateLeaderboardSubmission
- deepracer:CreateReinforcementLearningModel
- deepracer:DeleteLeaderboard
- deepracer:DeleteModel
- deepracer:EditLeaderboard
- deepracer:GetAccountConfig
- deepracer:GetAlias
- deepracer:GetAssetUrl
- deepracer:GetCar
- deepracer:GetCars
- deepracer:GetEvaluation
- deepracer:GetLatestUserSubmission
- deepracer:GetLeaderboard
- deepracer:GetModel
- deepracer:GetPrivateLeaderboard
- deepracer:GetRankedUserSubmission
- deepracer:GetTrack
- deepracer:GetTrainingJob
- deepracer:ImportModel
- deepracer:ListEvaluations
- deepracer:ListLeaderboardEvaluations
- deepracer:ListLeaderboardSubmissions
- deepracer:ListLeaderboards
- deepracer:ListModels
- deepracer:ListPrivateLeaderboardParticipants
- deepracer:ListPrivateLeaderboards
- deepracer:ListSubscribedPrivateLeaderboards
- deepracer:ListTagsForResource
- deepracer:ListTracks
- deepracer:ListTrainingJobs
- deepracer:MigrateModels
- deepracer:PerformLeaderboardOperation
- deepracer:RemoveLeaderboardAccessPermission
- deepracer:SetAlias
- deepracer:StartEvaluation
- deepracer:StopEvaluation
- deepracer:StopTrainingReinforcementLearningModel
- deepracer:TagResource
- deepracer:TestRewardFunction
- deepracer:UntagResource
- deepracer:UpdateCar

:warning: **Removed condition keys:**

- deepracer:MultiUser
- deepracer:RequestTag/${TagKey}
- deepracer:ResourceTag/${TagKey}
- deepracer:TagKeys
- deepracer:UserToken

:warning: **Removed resource types:**

- deepracer:car
- deepracer:evaluation_job
- deepracer:leaderboard
- deepracer:leaderboard_evaluation_job
- deepracer:reinforcement_learning_model
- deepracer:track
- deepracer:training_job

**New services:**

- ecs-mcp

## [0.737.0](https://github.com/udondan/iam-floyd/compare/v0.734.0...v0.737.0) (2025-12-09)

:warning: **Removed services:**

- deepcomposer

:warning: **Removed actions:**

- deepcomposer:AssociateCoupon
- deepcomposer:CreateAudio
- deepcomposer:CreateComposition
- deepcomposer:CreateModel
- deepcomposer:DeleteComposition
- deepcomposer:DeleteModel
- deepcomposer:GetComposition
- deepcomposer:GetModel
- deepcomposer:GetSampleModel
- deepcomposer:ListCompositions
- deepcomposer:ListModels
- deepcomposer:ListSampleModels
- deepcomposer:ListTagsForResource
- deepcomposer:ListTrainingTopics
- deepcomposer:TagResource
- deepcomposer:UntagResource
- deepcomposer:UpdateComposition
- deepcomposer:UpdateModel

:warning: **Removed condition keys:**

- bedrock-agentcore:KmsKeyArn
- deepcomposer:RequestTag/${TagKey}
- deepcomposer:ResourceTag/${TagKey}
- deepcomposer:TagKeys

:warning: **Removed resource types:**

- deepcomposer:audio
- deepcomposer:composition
- deepcomposer:model

**New services:**

- aco-automation
- aidevops
- aws-mcp
- bedrock-mantle
- nova-act
- route53globalresolver
- securityagent
- transform-custom

**New actions:**

- aidevops:AssociateService
- aidevops:CreateAgentSpace
- aidevops:CreateBacklogTask
- aidevops:CreateKnowledgeItem
- aidevops:CreateOneTimeLoginSession
- aidevops:DeleteAgentSpace
- aidevops:DeleteKnowledgeItem
- aidevops:DeregisterService
- aidevops:DescribeSupportLevel
- aidevops:DisableOperatorApp
- aidevops:DisassociateService
- aidevops:DiscoverTopology
- aidevops:EnableOperatorApp
- aidevops:EndChatForCase
- aidevops:GetAccountUsage
- aidevops:GetAgentSpace
- aidevops:GetAssociation
- aidevops:GetBacklogTask
- aidevops:GetKnowledgeItem
- aidevops:GetOperatorAppTeams
- aidevops:GetRecommendation
- aidevops:GetService
- aidevops:HandleServiceRegistrationCallback
- aidevops:InitiateChatForCase
- aidevops:InitiateServiceRegistration
- aidevops:ListAgentSpaces
- aidevops:ListAssociations
- aidevops:ListBacklogTasks
- aidevops:ListExecutions
- aidevops:ListGoals
- aidevops:ListJournalRecords
- aidevops:ListKnowledgeItems
- aidevops:ListPendingMessages
- aidevops:ListRecommendations
- aidevops:ListServices
- aidevops:ListWebhooks
- aidevops:RegisterService
- aidevops:SearchServiceAccessibleResource
- aidevops:SendChatMessage
- aidevops:UpdateAgentSpace
- aidevops:UpdateAssociation
- aidevops:UpdateBacklogTask
- aidevops:UpdateKnowledgeItem
- aidevops:UpdateOperatorAppTeams
- aidevops:UpdateRecommendation
- aws-marketplace:AcceptAgreementPaymentRequest
- aws-marketplace:CancelAgreementPaymentRequest
- aws-marketplace:GetAgreementPaymentRequest
- aws-marketplace:ListAgreementPaymentRequests
- aws-marketplace:RejectAgreementPaymentRequest
- aws-marketplace:SendAgreementPaymentRequest
- aws-mcp:CallReadOnlyTool
- aws-mcp:CallReadWriteTool
- aws-mcp:InvokeMcp
- bedrock-agentcore:AuthorizeAction
- bedrock-agentcore:CreateEvaluator
- bedrock-agentcore:CreateOnlineEvaluationConfig
- bedrock-agentcore:CreatePolicy
- bedrock-agentcore:CreatePolicyEngine
- bedrock-agentcore:DeleteEvaluator
- bedrock-agentcore:DeleteOnlineEvaluationConfig
- bedrock-agentcore:DeletePolicy
- bedrock-agentcore:DeletePolicyEngine
- bedrock-agentcore:DeleteResourcePolicy
- bedrock-agentcore:Evaluate
- bedrock-agentcore:GetEvaluator
- bedrock-agentcore:GetOnlineEvaluationConfig
- bedrock-agentcore:GetPolicy
- bedrock-agentcore:GetPolicyEngine
- bedrock-agentcore:GetPolicyGeneration
- bedrock-agentcore:GetResourcePolicy
- bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStream
- bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStreamForUser
- bedrock-agentcore:ListEvaluators
- bedrock-agentcore:ListMemoryExtractionJobs
- bedrock-agentcore:ListOnlineEvaluationConfigs
- bedrock-agentcore:ListPolicies
- bedrock-agentcore:ListPolicyEngines
- bedrock-agentcore:ListPolicyGenerationAssets
- bedrock-agentcore:ListPolicyGenerations
- bedrock-agentcore:ManageAdminPolicy
- bedrock-agentcore:ManageResourceScopedPolicy
- bedrock-agentcore:PartiallyAuthorizeActions
- bedrock-agentcore:PutResourcePolicy
- bedrock-agentcore:StartMemoryExtractionJob
- bedrock-agentcore:StartPolicyGeneration
- bedrock-agentcore:UpdateEvaluator
- bedrock-agentcore:UpdateOnlineEvaluationConfig
- bedrock-agentcore:UpdatePolicy
- bedrock-agentcore:UpdatePolicyEngine
- bedrock-mantle:CallWithBearerToken
- bedrock-mantle:CancelInference
- bedrock-mantle:CreateInference
- bedrock-mantle:DeleteInference
- bedrock-mantle:GetInference
- bedrock-mantle:GetModel
- bedrock-mantle:ListModels
- bedrock:DeleteEnforcedGuardrailConfiguration
- bedrock:ListEnforcedGuardrailsConfiguration
- bedrock:PutEnforcedGuardrailConfiguration
- bedrock:UpdateCustomModelDeployment
- ce:ListCostCategoryResourceAssociations
- connect:AssociateSecurityProfiles
- connect:AssociateWorkspace
- connect:BatchCreateDataTableValue
- connect:BatchDeleteDataTableValue
- connect:BatchDescribeDataTableValue
- connect:BatchUpdateDataTableValue
- connect:CreateContactFlowModuleAlias
- connect:CreateContactFlowModuleVersion
- connect:CreateDataTable
- connect:CreateDataTableAttribute
- connect:CreateWorkspace
- connect:CreateWorkspacePage
- connect:DeleteContactFlowModuleAlias
- connect:DeleteContactFlowModuleVersion
- connect:DeleteDataTable
- connect:DeleteDataTableAttribute
- connect:DeleteWorkspace
- connect:DeleteWorkspaceMedia
- connect:DeleteWorkspacePage
- connect:DescribeContactFlowModuleAlias
- connect:DescribeDataTable
- connect:DescribeDataTableAttribute
- connect:DescribeWorkspace
- connect:DisassociateSecurityProfiles
- connect:DisassociateWorkspace
- connect:EvaluateDataTableValues
- connect:ImportWorkspaceMedia
- connect:ListContactFlowModuleAliases
- connect:ListContactFlowModuleVersions
- connect:ListDataTableAttributes
- connect:ListDataTablePrimaryValues
- connect:ListDataTableValues
- connect:ListDataTables
- connect:ListEntitySecurityProfiles
- connect:ListSecurityProfileFlowModules
- connect:ListWorkspaceMedia
- connect:ListWorkspacePages
- connect:ListWorkspaces
- connect:SearchContactEvaluations
- connect:SearchDataTables
- connect:SearchEvaluationForms
- connect:SearchViews
- connect:SearchWorkspaceAssociations
- connect:SearchWorkspaces
- connect:StartContactMediaProcessing
- connect:StopContactMediaProcessing
- connect:UpdateContactFlowModuleAlias
- connect:UpdateDataTableAttribute
- connect:UpdateDataTableMetadata
- connect:UpdateDataTablePrimaryValues
- connect:UpdateWorkspaceMetadata
- connect:UpdateWorkspacePage
- connect:UpdateWorkspaceTheme
- connect:UpdateWorkspaceVisibility
- datazone:GetDataExportConfiguration
- datazone:PutDataExportConfiguration
- eks:CreateCapability
- eks:DeleteCapability
- eks:DescribeCapability
- eks:ListCapabilities
- eks:UpdateCapability
- identitystore:ReserveUser
- lambda:CheckpointDurableExecution
- lambda:CreateCapacityProvider
- lambda:DeleteCapacityProvider
- lambda:GetCapacityProvider
- lambda:GetDurableExecution
- lambda:GetDurableExecutionHistory
- lambda:GetDurableExecutionState
- lambda:GetFunctionScalingConfig
- lambda:ListCapacityProviders
- lambda:ListDurableExecutionsByFunction
- lambda:ListFunctionVersionsByCapacityProvider
- lambda:PassCapacityProvider
- lambda:PutFunctionScalingConfig
- lambda:SendDurableExecutionCallbackFailure
- lambda:SendDurableExecutionCallbackHeartbeat
- lambda:SendDurableExecutionCallbackSuccess
- lambda:StopDurableExecution
- lambda:UpdateCapacityProvider
- logs:AssociateSourceToS3TableIntegration
- logs:DeletePipelineRule
- logs:DisassociateSourceFromS3TableIntegration
- logs:GetLogFields
- logs:IntegrateWithS3Table
- logs:ListAggregateLogGroupSummaries
- logs:ListSourcesForS3TableIntegration
- logs:ProcessWithPipeline
- logs:PutPipelineRule
- mediaconnect:AssociateRouterNetworkInterface
- mediaconnect:CreateRouterInput
- mediaconnect:CreateRouterNetworkInterface
- mediaconnect:CreateRouterOutput
- mediaconnect:DeleteRouterInput
- mediaconnect:DeleteRouterNetworkInterface
- mediaconnect:DeleteRouterOutput
- mediaconnect:GetRouterInput
- mediaconnect:GetRouterInputSourceMetadata
- mediaconnect:GetRouterInputThumbnail
- mediaconnect:GetRouterNetworkInterface
- mediaconnect:GetRouterOutput
- mediaconnect:ListRouterInputs
- mediaconnect:ListRouterNetworkInterfaces
- mediaconnect:ListRouterOutputs
- mediaconnect:RestartRouterInput
- mediaconnect:RestartRouterOutput
- mediaconnect:StartRouterInput
- mediaconnect:StartRouterOutput
- mediaconnect:StopRouterInput
- mediaconnect:StopRouterOutput
- mediaconnect:TakeRouterInput
- mediaconnect:UpdateRouterInput
- mediaconnect:UpdateRouterNetworkInterface
- mediaconnect:UpdateRouterOutput
- observabilityadmin:CreateS3TableIntegration
- observabilityadmin:CreateTelemetryPipeline
- observabilityadmin:DeleteS3TableIntegration
- observabilityadmin:DeleteTelemetryPipeline
- observabilityadmin:GetS3TableIntegration
- observabilityadmin:GetTelemetryPipeline
- observabilityadmin:ListS3TableIntegrations
- observabilityadmin:ListTelemetryPipelines
- observabilityadmin:TestTelemetryPipeline
- observabilityadmin:UpdateTelemetryPipeline
- observabilityadmin:ValidateTelemetryPipelineConfiguration
- opensearch:CancelAutoOptimizeJob
- opensearch:DeleteAutoOptimizeJob
- opensearch:GetAutoOptimizeJob
- opensearch:ListAutoOptimizeJobs
- opensearch:SubmitAutoOptimizeJob
- partnercentral-account-management:AccessLegacyPartnerCentral
- partnercentral-account-management:AccessMarketingCentral
- partnercentral:AcceptConnectionInvitation
- partnercentral:AmendBenefitApplication
- partnercentral:AssociateAwsTrainingCertificationEmailDomain
- partnercentral:AssociateBenefitApplicationResource
- partnercentral:CancelBenefitApplication
- partnercentral:CancelConnection
- partnercentral:CancelConnectionInvitation
- partnercentral:CancelProfileUpdateTask
- partnercentral:CreateBenefitApplication
- partnercentral:CreateBusinessPlan
- partnercentral:CreateCollaborationChannelMembers
- partnercentral:CreateCollaborationChannelRequest
- partnercentral:CreateConnectionInvitation
- partnercentral:CreateEngagementContext
- partnercentral:CreatePartner
- partnercentral:DisassociateAwsTrainingCertificationEmailDomain
- partnercentral:DisassociateBenefitApplicationResource
- partnercentral:EnrollInPartnerPath
- partnercentral:GetAllianceLeadContact
- partnercentral:GetBenefit
- partnercentral:GetBenefitAllocation
- partnercentral:GetBenefitApplication
- partnercentral:GetBusinessPlan
- partnercentral:GetCollaborationChannel
- partnercentral:GetConnection
- partnercentral:GetConnectionInvitation
- partnercentral:GetConnectionPreferences
- partnercentral:GetPartner
- partnercentral:GetPartnerDashboard
- partnercentral:GetPartnerProfile
- partnercentral:GetProfileUpdateTask
- partnercentral:GetProfileVisibility
- partnercentral:GetVerification
- partnercentral:ListBenefitAllocations
- partnercentral:ListBenefitApplications
- partnercentral:ListBenefits
- partnercentral:ListBusinessPlans
- partnercentral:ListCollaborationChannels
- partnercentral:ListConnectionInvitations
- partnercentral:ListConnections
- partnercentral:ListOpportunityFromEngagementTasks
- partnercentral:ListPartnerPaths
- partnercentral:ListPartners
- partnercentral:PutAllianceLeadContact
- partnercentral:PutBusinessPlan
- partnercentral:PutProfileVisibility
- partnercentral:RecallBenefitApplication
- partnercentral:RejectConnectionInvitation
- partnercentral:SearchPartnerProfiles
- partnercentral:SendEmailVerificationCode
- partnercentral:StartOpportunityFromEngagementTask
- partnercentral:StartProfileUpdateTask
- partnercentral:StartVerification
- partnercentral:SubmitBenefitApplication
- partnercentral:UpdateBenefitApplication
- partnercentral:UpdateConnectionPreferences
- partnercentral:UpdateEngagementContext
- route53:UpdateHostedZoneFeatures
- route53globalresolver:AllowVendedLogDeliveryForResource
- route53globalresolver:AssociateHostedZone
- route53globalresolver:BatchCreateFirewallRule
- route53globalresolver:BatchDeleteFirewallRule
- route53globalresolver:BatchUpdateFirewallRule
- route53globalresolver:CreateAccessSource
- route53globalresolver:CreateAccessToken
- route53globalresolver:CreateDNSView
- route53globalresolver:CreateFirewallDomainList
- route53globalresolver:CreateFirewallRule
- route53globalresolver:CreateGlobalResolver
- route53globalresolver:DeleteAccessSource
- route53globalresolver:DeleteAccessToken
- route53globalresolver:DeleteDNSView
- route53globalresolver:DeleteFirewallDomainList
- route53globalresolver:DeleteFirewallRule
- route53globalresolver:DeleteGlobalResolver
- route53globalresolver:DisableDNSView
- route53globalresolver:DisassociateHostedZone
- route53globalresolver:EnableDNSView
- route53globalresolver:GetAccessSource
- route53globalresolver:GetAccessToken
- route53globalresolver:GetDNSView
- route53globalresolver:GetFirewallDomainList
- route53globalresolver:GetFirewallRule
- route53globalresolver:GetGlobalResolver
- route53globalresolver:GetHostedZoneAssociation
- route53globalresolver:GetManagedFirewallDomainList
- route53globalresolver:ImportFirewallDomains
- route53globalresolver:ListAccessSources
- route53globalresolver:ListAccessTokens
- route53globalresolver:ListDNSViews
- route53globalresolver:ListFirewallDomainLists
- route53globalresolver:ListFirewallDomains
- route53globalresolver:ListFirewallRules
- route53globalresolver:ListGlobalResolvers
- route53globalresolver:ListHostedZoneAssociations
- route53globalresolver:ListManagedFirewallDomainLists
- route53globalresolver:ListTagsForResource
- route53globalresolver:TagResource
- route53globalresolver:UntagResource
- route53globalresolver:UpdateAccessSource
- route53globalresolver:UpdateAccessToken
- route53globalresolver:UpdateDNSView
- route53globalresolver:UpdateFirewallDomains
- route53globalresolver:UpdateFirewallRule
- route53globalresolver:UpdateGlobalResolver
- route53globalresolver:UpdateHostedZoneAssociation
- s3tables:DeleteTableBucketReplication
- s3tables:DeleteTableReplication
- s3tables:GetTableBucketReplication
- s3tables:GetTableBucketStorageClass
- s3tables:GetTableRecordExpirationConfiguration
- s3tables:GetTableRecordExpirationJobStatus
- s3tables:GetTableReplication
- s3tables:GetTableReplicationStatus
- s3tables:GetTableStorageClass
- s3tables:PutTableBucketReplication
- s3tables:PutTableBucketStorageClass
- s3tables:PutTableRecordExpirationConfiguration
- s3tables:PutTableReplication
- s3tables:PutTableStorageClass
- s3vectors:ListTagsForResource
- s3vectors:TagResource
- s3vectors:UntagResource
- sagemaker:CallMlflowAppApi
- sagemaker:CreateMlflowApp
- sagemaker:CreatePresignedMlflowAppUrl
- sagemaker:DeleteMlflowApp
- sagemaker:DescribeMlflowApp
- sagemaker:ListMlflowApps
- sagemaker:UpdateMlflowApp
- securityagent:AddArtifact
- securityagent:AddControl
- securityagent:BatchDeletePentests
- securityagent:BatchGetAgentInstances
- securityagent:BatchGetArtifactMetadata
- securityagent:BatchGetFindings
- securityagent:BatchGetPentestJobs
- securityagent:BatchGetPentests
- securityagent:BatchGetSecurityTestContentMetadata
- securityagent:BatchGetTasks
- securityagent:CreateAgentInstance
- securityagent:CreateApplication
- securityagent:CreateDocumentReview
- securityagent:CreateIntegration
- securityagent:CreateMembership
- securityagent:CreateOneTimeLoginSession
- securityagent:CreatePentest
- securityagent:DeleteAgentInstance
- securityagent:DeleteApplication
- securityagent:DeleteArtifact
- securityagent:DeleteControl
- securityagent:DeleteIntegration
- securityagent:DeleteMembership
- securityagent:DescribeFindings
- securityagent:GetApplication
- securityagent:GetArtifact
- securityagent:GetCodeReviewTask
- securityagent:GetControl
- securityagent:GetDocReviewTask
- securityagent:GetDocumentReview
- securityagent:GetDocumentReviewArtifact
- securityagent:GetIntegration
- securityagent:GetLoginSessionCredentials
- securityagent:HandleOneTimeLoginSession
- securityagent:InitiateProviderRegistration
- securityagent:ListAgentInstanceTasks
- securityagent:ListAgentInstances
- securityagent:ListApplications
- securityagent:ListArtifacts
- securityagent:ListControls
- securityagent:ListDiscoveredEndpoints
- securityagent:ListDocumentReviewComments
- securityagent:ListDocumentReviews
- securityagent:ListFindings
- securityagent:ListIntegratedResources
- securityagent:ListIntegrations
- securityagent:ListMemberships
- securityagent:ListPentestJobsForPentest
- securityagent:ListPentests
- securityagent:ListResourcesFromIntegration
- securityagent:ListTasks
- securityagent:StartCodeRemediation
- securityagent:StartPentestExecution
- securityagent:StopPentestExecution
- securityagent:ToggleManagedControl
- securityagent:UpdateAgentInstance
- securityagent:UpdateApplication
- securityagent:UpdateControl
- securityagent:UpdateFinding
- securityagent:UpdateIntegratedResources
- securityagent:UpdatePentest
- securityagent:VerifyTargetDomain
- transform-custom:CompleteTransformationPackageUpload
- transform-custom:ConverseStream
- transform-custom:CreateCampaign
- transform-custom:CreateTransformationPackageUrl
- transform-custom:DeleteCampaign
- transform-custom:DeleteKnowledgeItem
- transform-custom:DeleteTransformationPackage
- transform-custom:ExecuteTransformation
- transform-custom:GetCampaign
- transform-custom:GetKnowledgeItem
- transform-custom:GetTransformationPackageUrl
- transform-custom:ListCampaignRepositories
- transform-custom:ListCampaigns
- transform-custom:ListKnowledgeItems
- transform-custom:ListTagsForResource
- transform-custom:ListTransformationPackageMetadata
- transform-custom:TagResource
- transform-custom:UntagResource
- transform-custom:UpdateCampaign
- transform-custom:UpdateCampaignRepositoryStatus
- transform-custom:UpdateKnowledgeItemConfiguration
- transform-custom:UpdateKnowledgeItemStatus
- transform:DeleteAgentRuntimeConfiguration
- transform:GetAccountSettings
- transform:GetAgent
- transform:GetAgentRuntimeConfiguration
- transform:ListAgents
- transform:PutAgentRuntimeConfiguration
- transform:UpdateAccountSettings
- transform:UpdateAgentAccess

**Updated action access level:**

- mediaconnect:DiscoverGatewayPollEndpoint: Write -> Read

**New resource types:**

- aidevops:AgentSpaceResource
- aidevops:AssociationResource
- aidevops:ServiceResource
- bcm-data-exports:billingview
- bedrock-agentcore:evaluator
- bedrock-agentcore:online-evaluation-config
- bedrock-agentcore:policy
- bedrock-agentcore:policy-engine
- bedrock-agentcore:policy-generation
- bedrock-mantle:project
- connect:ai-agent
- connect:data-table
- connect:workspace
- eks:capability
- lambda:capacityProvider
- lambda:durable execution
- mediaconnect:Offering
- mediaconnect:Reservation
- mediaconnect:RouterInput
- mediaconnect:RouterNetworkInterface
- mediaconnect:RouterOutput
- observabilityadmin:s3tableintegration
- observabilityadmin:telemetry-pipeline
- partnercentral:Benefit
- partnercentral:BenefitAllocation
- partnercentral:BenefitApplication
- partnercentral:Connection
- partnercentral:ConnectionInvitation
- partnercentral:ConnectionPreferences
- partnercentral:Dashboard
- partnercentral:OpportunityFromEngagementTask
- partnercentral:Partner
- route53globalresolver:access-source
- route53globalresolver:access-token
- route53globalresolver:dns-view
- route53globalresolver:firewall-domain-list
- route53globalresolver:global-resolver
- sagemaker:mlflow-app
- securityagent:AgentInstance
- securityagent:Application
- securityagent:Artifact
- securityagent:Control
- securityagent:Finding
- securityagent:Integration
- securityagent:Pentest
- securityagent:PentestJob
- securityagent:PentestTask
- transform-custom:campaign
- transform-custom:conversation
- transform-custom:knowledge-item
- transform-custom:package
- vpce:vpc-endpoint
- vpce:vpc-endpoint-service

**New condition keys:**

- aidevops:AgentSpaceResourceAgentSpaceId
- aidevops:AssociationResourceAgentSpaceId
- aidevops:AssociationResourceAssociationId
- aidevops:ServiceResourceServiceId
- bedrock-mantle:BearerTokenType
- bedrock-mantle:Model
- bedrock-mantle:ServiceTier
- connect:ExpressionValue
- connect:PrimaryAttribute/${PrimaryAttribute}
- observabilityadmin:SourceType
- partnercentral-account-management:LegacyPartnerCentralRole
- partnercentral-account-management:MarketingCentralRole
- partnercentral:FulfillmentTypes
- partnercentral:Programs
- partnercentral:VerificationType
- route53globalresolver:RequestTag/${TagKey}
- route53globalresolver:ResourceTag/${TagKey}
- route53globalresolver:TagKeys
- s3tables:StorageClass
- s3vectors:RequestTag/${TagKey}
- s3vectors:ResourceTag/${TagKey}
- s3vectors:TagKeys
- s3vectors:VectorBucketTag/${TagKey}
- transform-custom:RequestTag/${TagKey}
- transform-custom:ResourceTag/${TagKey}
- transform-custom:TagKeys

## [0.736.0] (2025-12-06)

:warning: **Removed condition keys:**

- bedrock-agentcore:KmsKeyArn

**New services:**

- aidevops
- aws-mcp
- bedrock-mantle
- route53globalresolver
- securityagent
- transform-custom

**New actions:**

- aws-marketplace:AcceptAgreementPaymentRequest
- aws-marketplace:CancelAgreementPaymentRequest
- aws-marketplace:GetAgreementPaymentRequest
- aws-marketplace:ListAgreementPaymentRequests
- aws-marketplace:RejectAgreementPaymentRequest
- aws-marketplace:SendAgreementPaymentRequest
- bedrock-agentcore:AuthorizeAction
- bedrock-agentcore:CreateEvaluator
- bedrock-agentcore:CreateOnlineEvaluationConfig
- bedrock-agentcore:CreatePolicy
- bedrock-agentcore:CreatePolicyEngine
- bedrock-agentcore:DeleteEvaluator
- bedrock-agentcore:DeleteOnlineEvaluationConfig
- bedrock-agentcore:DeletePolicy
- bedrock-agentcore:DeletePolicyEngine
- bedrock-agentcore:DeleteResourcePolicy
- bedrock-agentcore:Evaluate
- bedrock-agentcore:GetEvaluator
- bedrock-agentcore:GetOnlineEvaluationConfig
- bedrock-agentcore:GetPolicy
- bedrock-agentcore:GetPolicyEngine
- bedrock-agentcore:GetPolicyGeneration
- bedrock-agentcore:GetResourcePolicy
- bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStream
- bedrock-agentcore:InvokeAgentRuntimeWithWebSocketStreamForUser
- bedrock-agentcore:ListEvaluators
- bedrock-agentcore:ListMemoryExtractionJobs
- bedrock-agentcore:ListOnlineEvaluationConfigs
- bedrock-agentcore:ListPolicies
- bedrock-agentcore:ListPolicyEngines
- bedrock-agentcore:ListPolicyGenerationAssets
- bedrock-agentcore:ListPolicyGenerations
- bedrock-agentcore:ManageAdminPolicy
- bedrock-agentcore:ManageResourceScopedPolicy
- bedrock-agentcore:PartiallyAuthorizeActions
- bedrock-agentcore:PutResourcePolicy
- bedrock-agentcore:StartMemoryExtractionJob
- bedrock-agentcore:StartPolicyGeneration
- bedrock-agentcore:UpdateEvaluator
- bedrock-agentcore:UpdateOnlineEvaluationConfig
- bedrock-agentcore:UpdatePolicy
- bedrock-agentcore:UpdatePolicyEngine
- connect:AssociateSecurityProfiles
- connect:AssociateWorkspace
- connect:BatchCreateDataTableValue
- connect:BatchDeleteDataTableValue
- connect:BatchDescribeDataTableValue
- connect:BatchUpdateDataTableValue
- connect:CreateContactFlowModuleAlias
- connect:CreateContactFlowModuleVersion
- connect:CreateDataTable
- connect:CreateDataTableAttribute
- connect:CreateWorkspace
- connect:CreateWorkspacePage
- connect:DeleteContactFlowModuleAlias
- connect:DeleteContactFlowModuleVersion
- connect:DeleteDataTable
- connect:DeleteDataTableAttribute
- connect:DeleteWorkspace
- connect:DeleteWorkspaceMedia
- connect:DeleteWorkspacePage
- connect:DescribeContactFlowModuleAlias
- connect:DescribeDataTable
- connect:DescribeDataTableAttribute
- connect:DescribeWorkspace
- connect:DisassociateSecurityProfiles
- connect:DisassociateWorkspace
- connect:EvaluateDataTableValues
- connect:ImportWorkspaceMedia
- connect:ListContactFlowModuleAliases
- connect:ListContactFlowModuleVersions
- connect:ListDataTableAttributes
- connect:ListDataTablePrimaryValues
- connect:ListDataTableValues
- connect:ListDataTables
- connect:ListEntitySecurityProfiles
- connect:ListSecurityProfileFlowModules
- connect:ListWorkspaceMedia
- connect:ListWorkspacePages
- connect:ListWorkspaces
- connect:SearchContactEvaluations
- connect:SearchDataTables
- connect:SearchEvaluationForms
- connect:SearchViews
- connect:SearchWorkspaceAssociations
- connect:SearchWorkspaces
- connect:StartContactMediaProcessing
- connect:StopContactMediaProcessing
- connect:UpdateContactFlowModuleAlias
- connect:UpdateDataTableAttribute
- connect:UpdateDataTableMetadata
- connect:UpdateDataTablePrimaryValues
- connect:UpdateWorkspaceMetadata
- connect:UpdateWorkspacePage
- connect:UpdateWorkspaceTheme
- connect:UpdateWorkspaceVisibility
- datazone:GetDataExportConfiguration
- datazone:PutDataExportConfiguration
- eks:CreateCapability
- eks:DeleteCapability
- eks:DescribeCapability
- eks:ListCapabilities
- eks:UpdateCapability
- lambda:CheckpointDurableExecution
- lambda:CreateCapacityProvider
- lambda:DeleteCapacityProvider
- lambda:GetCapacityProvider
- lambda:GetDurableExecution
- lambda:GetDurableExecutionHistory
- lambda:GetDurableExecutionState
- lambda:GetFunctionScalingConfig
- lambda:ListCapacityProviders
- lambda:ListDurableExecutionsByFunction
- lambda:ListFunctionVersionsByCapacityProvider
- lambda:PassCapacityProvider
- lambda:PutFunctionScalingConfig
- lambda:SendDurableExecutionCallbackFailure
- lambda:SendDurableExecutionCallbackHeartbeat
- lambda:SendDurableExecutionCallbackSuccess
- lambda:StopDurableExecution
- lambda:UpdateCapacityProvider
- logs:AssociateSourceToS3TableIntegration
- logs:DeletePipelineRule
- logs:DisassociateSourceFromS3TableIntegration
- logs:GetLogFields
- logs:IntegrateWithS3Table
- logs:ListAggregateLogGroupSummaries
- logs:ListSourcesForS3TableIntegration
- logs:ProcessWithPipeline
- logs:PutPipelineRule
- mediaconnect:AssociateRouterNetworkInterface
- mediaconnect:CreateRouterInput
- mediaconnect:CreateRouterNetworkInterface
- mediaconnect:CreateRouterOutput
- mediaconnect:DeleteRouterInput
- mediaconnect:DeleteRouterNetworkInterface
- mediaconnect:DeleteRouterOutput
- mediaconnect:GetRouterInput
- mediaconnect:GetRouterInputSourceMetadata
- mediaconnect:GetRouterInputThumbnail
- mediaconnect:GetRouterNetworkInterface
- mediaconnect:GetRouterOutput
- mediaconnect:ListRouterInputs
- mediaconnect:ListRouterNetworkInterfaces
- mediaconnect:ListRouterOutputs
- mediaconnect:RestartRouterInput
- mediaconnect:RestartRouterOutput
- mediaconnect:StartRouterInput
- mediaconnect:StartRouterOutput
- mediaconnect:StopRouterInput
- mediaconnect:StopRouterOutput
- mediaconnect:TakeRouterInput
- mediaconnect:UpdateRouterInput
- mediaconnect:UpdateRouterNetworkInterface
- mediaconnect:UpdateRouterOutput
- observabilityadmin:CreateS3TableIntegration
- observabilityadmin:CreateTelemetryPipeline
- observabilityadmin:DeleteS3TableIntegration
- observabilityadmin:DeleteTelemetryPipeline
- observabilityadmin:GetS3TableIntegration
- observabilityadmin:GetTelemetryPipeline
- observabilityadmin:ListS3TableIntegrations
- observabilityadmin:ListTelemetryPipelines
- observabilityadmin:TestTelemetryPipeline
- observabilityadmin:UpdateTelemetryPipeline
- observabilityadmin:ValidateTelemetryPipelineConfiguration
- opensearch:CancelAutoOptimizeJob
- opensearch:DeleteAutoOptimizeJob
- opensearch:GetAutoOptimizeJob
- opensearch:ListAutoOptimizeJobs
- opensearch:SubmitAutoOptimizeJob
- partnercentral-account-management:AccessLegacyPartnerCentral
- partnercentral-account-management:AccessMarketingCentral
- partnercentral:AcceptConnectionInvitation
- partnercentral:AmendBenefitApplication
- partnercentral:AssociateAwsTrainingCertificationEmailDomain
- partnercentral:AssociateBenefitApplicationResource
- partnercentral:CancelBenefitApplication
- partnercentral:CancelConnection
- partnercentral:CancelConnectionInvitation
- partnercentral:CancelProfileUpdateTask
- partnercentral:CreateBenefitApplication
- partnercentral:CreateBusinessPlan
- partnercentral:CreateCollaborationChannelMembers
- partnercentral:CreateCollaborationChannelRequest
- partnercentral:CreateConnectionInvitation
- partnercentral:CreateEngagementContext
- partnercentral:CreatePartner
- partnercentral:DisassociateAwsTrainingCertificationEmailDomain
- partnercentral:DisassociateBenefitApplicationResource
- partnercentral:EnrollInPartnerPath
- partnercentral:GetAllianceLeadContact
- partnercentral:GetBenefit
- partnercentral:GetBenefitAllocation
- partnercentral:GetBenefitApplication
- partnercentral:GetBusinessPlan
- partnercentral:GetCollaborationChannel
- partnercentral:GetConnection
- partnercentral:GetConnectionInvitation
- partnercentral:GetConnectionPreferences
- partnercentral:GetPartner
- partnercentral:GetPartnerDashboard
- partnercentral:GetPartnerProfile
- partnercentral:GetProfileUpdateTask
- partnercentral:GetProfileVisibility
- partnercentral:GetVerification
- partnercentral:ListBenefitAllocations
- partnercentral:ListBenefitApplications
- partnercentral:ListBenefits
- partnercentral:ListBusinessPlans
- partnercentral:ListCollaborationChannels
- partnercentral:ListConnectionInvitations
- partnercentral:ListConnections
- partnercentral:ListOpportunityFromEngagementTasks
- partnercentral:ListPartnerPaths
- partnercentral:ListPartners
- partnercentral:PutAllianceLeadContact
- partnercentral:PutBusinessPlan
- partnercentral:PutProfileVisibility
- partnercentral:RecallBenefitApplication
- partnercentral:RejectConnectionInvitation
- partnercentral:SearchPartnerProfiles
- partnercentral:SendEmailVerificationCode
- partnercentral:StartOpportunityFromEngagementTask
- partnercentral:StartProfileUpdateTask
- partnercentral:StartVerification
- partnercentral:SubmitBenefitApplication
- partnercentral:UpdateBenefitApplication
- partnercentral:UpdateConnectionPreferences
- partnercentral:UpdateEngagementContext
- route53:UpdateHostedZoneFeatures
- s3tables:DeleteTableBucketReplication
- s3tables:DeleteTableReplication
- s3tables:GetTableBucketReplication
- s3tables:GetTableBucketStorageClass
- s3tables:GetTableRecordExpirationConfiguration
- s3tables:GetTableRecordExpirationJobStatus
- s3tables:GetTableReplication
- s3tables:GetTableReplicationStatus
- s3tables:GetTableStorageClass
- s3tables:PutTableBucketReplication
- s3tables:PutTableBucketStorageClass
- s3tables:PutTableRecordExpirationConfiguration
- s3tables:PutTableReplication
- s3tables:PutTableStorageClass
- s3vectors:ListTagsForResource
- s3vectors:TagResource
- s3vectors:UntagResource
- sagemaker:CallMlflowAppApi
- sagemaker:CreateMlflowApp
- sagemaker:CreatePresignedMlflowAppUrl
- sagemaker:DeleteMlflowApp
- sagemaker:DescribeMlflowApp
- sagemaker:ListMlflowApps
- sagemaker:UpdateMlflowApp
- transform:DeleteAgentRuntimeConfiguration
- transform:GetAccountSettings
- transform:GetAgent
- transform:GetAgentRuntimeConfiguration
- transform:ListAgents
- transform:PutAgentRuntimeConfiguration
- transform:UpdateAccountSettings
- transform:UpdateAgentAccess

**Updated action access level:**

- mediaconnect:DiscoverGatewayPollEndpoint: Write -> Read

**New resource types:**

- bedrock-agentcore:evaluator
- bedrock-agentcore:online-evaluation-config
- bedrock-agentcore:policy
- bedrock-agentcore:policy-engine
- bedrock-agentcore:policy-generation
- connect:ai-agent
- connect:data-table
- connect:workspace
- eks:capability
- lambda:capacityProvider
- lambda:durable execution
- mediaconnect:Offering
- mediaconnect:Reservation
- mediaconnect:RouterInput
- mediaconnect:RouterNetworkInterface
- mediaconnect:RouterOutput
- observabilityadmin:s3tableintegration
- observabilityadmin:telemetry-pipeline
- partnercentral:Benefit
- partnercentral:BenefitAllocation
- partnercentral:BenefitApplication
- partnercentral:Connection
- partnercentral:ConnectionInvitation
- partnercentral:ConnectionPreferences
- partnercentral:Dashboard
- partnercentral:OpportunityFromEngagementTask
- partnercentral:Partner
- sagemaker:mlflow-app

**New condition keys:**

- connect:ExpressionValue
- connect:PrimaryAttribute/${PrimaryAttribute}
- observabilityadmin:SourceType
- partnercentral-account-management:LegacyPartnerCentralRole
- partnercentral-account-management:MarketingCentralRole
- partnercentral:FulfillmentTypes
- partnercentral:Programs
- partnercentral:VerificationType
- s3tables:StorageClass
- s3vectors:RequestTag/${TagKey}
- s3vectors:ResourceTag/${TagKey}
- s3vectors:TagKeys
- s3vectors:VectorBucketTag/${TagKey}

## [0.735.0] (2025-11-27)

:warning: **Removed actions:**

- cloudfront:CreateConnectionFunction
- cloudfront:CreateTrustStore
- cloudfront:DeleteConnectionFunction
- cloudfront:DeleteTrustStore
- cloudfront:DescribeConnectionFunction
- cloudfront:GetConnectionFunction
- cloudfront:GetTrustStore
- cloudfront:ListConnectionFunctions
- cloudfront:ListDistributionsByConnectionFunction
- cloudfront:ListDistributionsByTrustStore
- cloudfront:ListTrustStores
- cloudfront:PublishConnectionFunction
- cloudfront:TestConnectionFunction
- cloudfront:UpdateConnectionFunction
- cloudfront:UpdateTrustStore
- ecr:DeleteSigningConfiguration
- ecr:DeregisterPullTimeUpdateExclusion
- ecr:DescribeImageSigningStatus
- ecr:GetSigningConfiguration
- ecr:ListPullTimeUpdateExclusions
- ecr:PutSigningConfiguration
- ecr:RegisterPullTimeUpdateExclusion
- ecr:UpdateImageStorageClass
- logs:PutLogGroupDeletionProtection
- security-ir:ListInvestigations
- security-ir:SendFeedback

:warning: **Removed resource types:**

- cloudfront:connection-function
- cloudfront:trust-store

**New resource types:**

- omics:TaggingResource

## [0.734.0](https://github.com/udondan/iam-floyd/compare/v0.733.0...v0.734.0) (2025-11-26)

:warning: **Removed resource types:**

- omics:TaggingResource

**New actions:**

- cloudfront:CreateConnectionFunction
- cloudfront:CreateTrustStore
- cloudfront:DeleteConnectionFunction
- cloudfront:DeleteTrustStore
- cloudfront:DescribeConnectionFunction
- cloudfront:GetConnectionFunction
- cloudfront:GetTrustStore
- cloudfront:ListConnectionFunctions
- cloudfront:ListDistributionsByConnectionFunction
- cloudfront:ListDistributionsByTrustStore
- cloudfront:ListTrustStores
- cloudfront:PublishConnectionFunction
- cloudfront:TestConnectionFunction
- cloudfront:UpdateConnectionFunction
- cloudfront:UpdateTrustStore
- ecr:DeleteSigningConfiguration
- ecr:DeregisterPullTimeUpdateExclusion
- ecr:DescribeImageSigningStatus
- ecr:GetSigningConfiguration
- ecr:ListPullTimeUpdateExclusions
- ecr:PutSigningConfiguration
- ecr:RegisterPullTimeUpdateExclusion
- ecr:UpdateImageStorageClass
- logs:PutLogGroupDeletionProtection
- security-ir:ListInvestigations
- security-ir:SendFeedback

**New resource types:**

- cloudfront:connection-function
- cloudfront:trust-store

## [0.733.0](https://github.com/udondan/iam-floyd/compare/v0.732.0...v0.733.0) (2025-11-22)

**New services:**

- pricingplanmanager

**New actions:**

- application-signals:ListEntityEvents
- autoscaling:DescribeAccountSettings
- autoscaling:PutAccountSetting
- backup:CreateBackupAccessPoint
- backup:CreateTieringConfiguration
- backup:DeleteBackupAccessPoint
- backup:DeleteTieringConfiguration
- backup:DescribeBackupAccessPoint
- backup:DescribeScanJob
- backup:GetTieringConfiguration
- backup:ListScanJobSummaries
- backup:ListScanJobs
- backup:ListTieringConfigurations
- backup:StartScanJob
- backup:UpdateTieringConfiguration
- bedrock:InvokeDataAutomation
- braket:CreateSpendingLimit
- braket:DeleteSpendingLimit
- braket:SearchSpendingLimits
- braket:UpdateSpendingLimit
- cloudformation:DescribeEvents
- cloudtrail:ListInsightsData
- cost-optimization-hub:ListEfficiencyMetrics
- dms:CreateOutboundIntegration
- dms:ModifyOutboundIntegration
- ecs:CreateExpressGatewayService
- ecs:DeleteExpressGatewayService
- ecs:DescribeExpressGatewayService
- ecs:UpdateExpressGatewayService
- glue:RenameTable
- guardduty:GetMalwareScan
- guardduty:ListMalwareScans
- guardduty:SendObjectMalwareScan
- iam:AcceptDelegationRequest
- iam:AssociateDelegationRequest
- iam:CreateDelegationRequest
- iam:DisableOutboundWebIdentityFederation
- iam:EnableOutboundWebIdentityFederation
- iam:GetDelegationRequest
- iam:GetHumanReadableSummary
- iam:GetOutboundWebIdentityFederationInfo
- iam:ListDelegationRequests
- iam:RejectDelegationRequest
- iam:SendDelegationToken
- imagebuilder:DistributeImage
- imagebuilder:RetryImage
- invoicing:CreateProcurementPortalPreference
- invoicing:DeleteProcurementPortalPreference
- invoicing:GetProcurementPortalPreference
- invoicing:ListProcurementPortalPreferences
- invoicing:PutProcurementPortalPreference
- invoicing:UpdateProcurementPortalPreferenceStatus
- kafka:DescribeTopic
- kafka:DescribeTopicPartitions
- kafka:ListTopics
- kinesisvideo:DescribeStreamStorageConfiguration
- kinesisvideo:UpdateStreamStorageConfiguration
- lakeformation:GetTemporaryGluePartitionCredentials
- lakeformation:GetTemporaryGlueTableCredentials
- license-manager:CreateLicenseAssetGroup
- license-manager:CreateLicenseAssetRuleset
- license-manager:DeleteLicenseAssetGroup
- license-manager:DeleteLicenseAssetRuleset
- license-manager:GetLicenseAssetGroup
- license-manager:GetLicenseAssetRuleset
- license-manager:ListAssetsForLicenseAssetGroup
- license-manager:ListLicenseAssetGroups
- license-manager:ListLicenseAssetRulesets
- license-manager:ListLicenseConfigurationsForOrganization
- license-manager:UpdateLicenseAssetGroup
- license-manager:UpdateLicenseAssetRuleset
- logs:CreateScheduledQuery
- logs:DeleteScheduledQuery
- logs:GetScheduledQuery
- logs:GetScheduledQueryHistory
- logs:ListScheduledQueries
- logs:UpdateScheduledQuery
- mgn:ListImportFileEnrichments
- mgn:ListNetworkMigrationMappingUpdates
- mgn:StartImportFileEnrichment
- mgn:StartNetworkMigrationMappingUpdate
- odb:UpdateOutboundIntegration
- organizations:DescribeResponsibilityTransfer
- organizations:InviteOrganizationToTransferResponsibility
- organizations:ListInboundResponsibilityTransfers
- organizations:ListOutboundResponsibilityTransfers
- organizations:TerminateResponsibilityTransfer
- organizations:UpdateResponsibilityTransfer
- partnercentral:AcceptChannelHandshake
- partnercentral:CancelChannelHandshake
- partnercentral:CreateChannelHandshake
- partnercentral:CreateProgramManagementAccount
- partnercentral:CreateRelationship
- partnercentral:DeleteProgramManagementAccount
- partnercentral:DeleteRelationship
- partnercentral:GetProgramManagementAccount
- partnercentral:GetRelationship
- partnercentral:ListChannelHandshakes
- partnercentral:ListProgramManagementAccounts
- partnercentral:ListRelationships
- partnercentral:RejectChannelHandshake
- partnercentral:UpdateProgramManagementAccount
- partnercentral:UpdateRelationship
- quicksight:AllowVendedLogDeliveryForResource
- s3:GetBucketAbac
- s3:PutBucketAbac
- securityhub:GetFindingsTrendsV2
- securityhub:GetResourcesTrendsV2
- signin:AuthorizeOAuth2Access
- signin:CreateOAuth2Token
- tag:ListRequiredTags

**Updated action access level:**

- license-manager:ListLicenseConfigurations: Read -> List
+license-manager:ListLicenseConfigurationsForOrganization;List
- partnercentral:ListResourceSnapshots: Read -> List

**New resource types:**

- backup:tieringConfiguration
- braket:spending-limit
- iam:delegation-request
- invoicing:procurement-portal-preference
- license-manager:license-asset-group
- license-manager:license-asset-ruleset
- logs:scheduled-query
- organizations:responsibilitytransfer
- partnercentral:ChannelHandshake
- partnercentral:ProgramManagementAccount
- partnercentral:Relationship

**New condition keys:**

- bedrock-agentcore:KmsKeyArn
- bedrock:ServiceTier
- dynamodb:FirstPartitionKeyValues
- dynamodb:FourthPartitionKeyValues
- dynamodb:SecondPartitionKeyValues
- dynamodb:ThirdPartitionKeyValues
- iam:DelegationDuration
- iam:DelegationRequestOwner
- iam:NotificationChannel
- iam:TemplateArn
- identitystore:GroupExternalIdIssuers
- identitystore:IdentityStoreArn
- identitystore:PrimaryRegion
- identitystore:ReservedUserId
- identitystore:UserExternalIdIssuers
- organizations:TransferDirection
- organizations:TransferType
- partnercentral:ChannelHandshakeType
- s3:BucketTag/${TagKey}
- secretsmanager:ExternalSecretRotationRoleArn
- secretsmanager:Type
- secretsmanager:resource/Type

## [0.732.0](https://github.com/udondan/iam-floyd/compare/v0.731.0...v0.732.0) (2025-11-18)

:warning: **Removed actions:**

- route53:UpdateHostedZoneFeatures

**New services:**

- airflow-serverless
- eks-mcp

**New actions:**

- appstream:AssociateSoftwareToImageBuilder
- appstream:CreateExportImageTask
- appstream:CreateImportedImage
- appstream:DescribeAppLicenseUsage
- appstream:DescribeSoftwareAssociations
- appstream:DisassociateSoftwareFromImageBuilder
- appstream:GetExportImageTask
- appstream:ListExportImageTasks
- appstream:StartSoftwareDeploymentToImageBuilder
- athena:GetResourceDashboard
- athena:GetSessionEndpoint
- cloudformation:GetHookResult
- es:CreateIndex
- es:DeleteIndex
- es:GetIndex
- es:UpdateIndex
- glue:FederateAuthorization
- healthlake:ConfirmAttributionList
- healthlake:DescribeFHIRBulkDeleteJob
- healthlake:MemberAdd
- healthlake:MemberMatch
- healthlake:MemberRemove
- healthlake:RetrieveAttributionStatus
- healthlake:StartFHIRBulkDeleteJob

**New resource types:**

- athena:session
- cloudformation:typeHook

**New condition keys:**

- glue:FederatedAuthorizationSource

## [0.731.0](https://github.com/udondan/iam-floyd/compare/v0.729.0...v0.731.0) (2025-11-14)

**New services:**

- sagemaker-unified-studio-mcp

**New actions:**

- connect:SendOutboundChatMessage
- datazone:BatchGetAttributesMetadata
- datazone:BatchGetCell
- datazone:BatchGetCellRun
- datazone:BatchPutAttributesMetadata
- datazone:CreateCell
- datazone:CreateCellRun
- datazone:CreateNotebook
- datazone:DeleteCell
- datazone:DeleteCellRun
- datazone:DeleteNotebook
- datazone:GenerateCode
- datazone:GetCell
- datazone:GetCellRun
- datazone:GetCellRunResult
- datazone:GetConversation
- datazone:GetNotebook
- datazone:GetNotebookCompute
- datazone:ListCellRuns
- datazone:ListConversations
- datazone:ListNotebooks
- datazone:PutCellRunResult
- datazone:SendMessage
- datazone:StartConversation
- datazone:StartNotebookCompute
- datazone:StopNotebookCompute
- datazone:UpdateCell
- datazone:UpdateCellRun
- datazone:UpdateNotebook
- dms:CancelMetadataModelConversion
- dms:CancelMetadataModelCreation
- dms:DescribeMetadataModel
- dms:DescribeMetadataModelChildren
- dms:DescribeMetadataModelCreations
- dms:GetTargetSelectionRules
- dms:StartMetadataModelCreation
- groundstation:GetAgentTaskResponseUrl
- kafka:UpdateRebalancing
- profile:CreateRecommender
- profile:DeleteDomainObjectType
- profile:DeleteRecommender
- profile:GetDomainObjectType
- profile:GetObjectTypeAttributeStatistics
- profile:GetProfileInsights
- profile:GetProfileRecommendations
- profile:GetRecommender
- profile:ListDomainObjectTypes
- profile:ListDomainObjects
- profile:ListObjectTypeAttributeValues
- profile:ListRecommenderRecipes
- profile:ListRecommenders
- profile:PutDomainObjectType
- profile:StartRecommender
- profile:StopRecommender
- profile:UpdateRecommender
- route53:UpdateHostedZoneFeatures
- s3tables:ListTagsForResource
- s3tables:TagResource
- s3tables:UntagResource
- sts:GetDelegatedAccessToken
- sts:GetWebIdentityToken
- sts:TagGetWebIdentityToken
- support-console:GetIssueClassificationPredictions
- support-console:GetIssueTextSummary
- support:ListInteractionEntries
- support:ListInteractions
- support:ResolveInteraction
- user-subscriptions:SetOverageConfig
- vpc-lattice:DeleteDomainVerification
- vpc-lattice:GetDomainVerification
- vpc-lattice:ListDomainVerifications
- vpc-lattice:StartDomainVerification

**New resource types:**

- profile:domain-object-types
- profile:recommenders
- vpc-lattice:DomainVerification

**New condition keys:**

- eks:loggingType/${type}
- s3tables:RequestTag/${TagKey}
- s3tables:ResourceTag/${TagKey}
- s3tables:TableBucketTag/${TagKey}
- s3tables:TagKeys
- sts:IdentityTokenAudience
- sts:SigningAlgorithm
- vpc-lattice:DomainName
- vpc-lattice:PrivateDnsPreference
- vpc-lattice:PrivateDnsSpecifiedDomains

## [0.730.0] (2025-11-08)

**New actions:**

- profile:CreateRecommender
- profile:DeleteDomainObjectType
- profile:DeleteRecommender
- profile:GetDomainObjectType
- profile:GetObjectTypeAttributeStatistics
- profile:GetProfileInsights
- profile:GetProfileRecommendations
- profile:GetRecommender
- profile:ListDomainObjectTypes
- profile:ListDomainObjects
- profile:ListObjectTypeAttributeValues
- profile:ListRecommenderRecipes
- profile:ListRecommenders
- profile:PutDomainObjectType
- profile:StartRecommender
- profile:StopRecommender
- profile:UpdateRecommender
- s3tables:ListTagsForResource
- s3tables:TagResource
- s3tables:UntagResource
- sts:GetDelegatedAccessToken
- sts:GetWebIdentityToken
- sts:TagGetWebIdentityToken
- support-console:GetIssueClassificationPredictions
- support-console:GetIssueTextSummary
- user-subscriptions:SetOverageConfig
- vpc-lattice:DeleteDomainVerification
- vpc-lattice:GetDomainVerification
- vpc-lattice:ListDomainVerifications
- vpc-lattice:StartDomainVerification

**New resource types:**

- profile:domain-object-types
- profile:recommenders
- vpc-lattice:DomainVerification

**New condition keys:**

- s3tables:RequestTag/${TagKey}
- s3tables:ResourceTag/${TagKey}
- s3tables:TableBucketTag/${TagKey}
- s3tables:TagKeys
- sts:IdentityTokenAudience
- sts:SigningAlgorithm
- vpc-lattice:DomainName
- vpc-lattice:PrivateDnsPreference
- vpc-lattice:PrivateDnsSpecifiedDomains

## [0.729.0](https://github.com/udondan/iam-floyd/compare/v0.728.0...v0.729.0) (2025-11-07)

:warning: **Removed actions:**

- elasticloadbalancing:DescribeLoadBalancers

:warning: **Removed condition keys:**

- bedrock-agentcore:securityGroups
- bedrock-agentcore:subnets
- ec2:vpceMultiRegion
- ec2:vpceServiceRegion
- ec2:vpceSupportedRegion

**New actions:**

- aps:CreateAnomalyDetector
- aps:DeleteAnomalyDetector
- aps:DeleteScraperLoggingConfiguration
- aps:DescribeAnomalyDetector
- aps:DescribeScraperLoggingConfiguration
- aps:ListAnomalyDetectors
- aps:PreviewAnomalyDetector
- aps:PutAnomalyDetector
- aps:UpdateScraperLoggingConfiguration
- autoscaling:LaunchInstances
- bedrock:InvokeTool
- cloudfront:DeleteResourcePolicy
- cloudfront:GetResourcePolicy
- cloudfront:PutResourcePolicy
- cloudfront:UpdateAnycastIpList
- cognito-idp:CreateTerms
- cognito-idp:DeleteTerms
- cognito-idp:DescribeTerms
- cognito-idp:ListTerms
- cognito-idp:UpdateTerms
- connect:AssociateEmailAddressAlias
- connect:DisassociateEmailAddressAlias
- ec2:CopyVolumes
- ec2:CreateCapacityManagerDataExport
- ec2:DeleteCapacityManagerDataExport
- ec2:DescribeCapacityManagerDataExports
- ec2:DisableCapacityManager
- ec2:EnableCapacityManager
- ec2:GetCapacityManagerAttributes
- ec2:GetCapacityManagerMetricData
- ec2:GetCapacityManagerMetricDimensions
- ec2:UpdateCapacityManagerOrganizationsAccess
- elasticloadbalancing:AllowVendedLogDeliveryForResource
- emr-containers:DeleteSecurityConfiguration
- iotmanagedintegrations:GetManagedThingCertificate
- kinesis:DescribeAccountSettings
- kinesis:UpdateAccountSettings
- kinesis:UpdateMaxRecordSize
- kinesis:UpdateStreamWarmThroughput
- support:InitiateLiveContactForCase

**New resource types:**

- aps:anomalydetector
- bedrock:system-tool
- ec2:capacity-manager-data-export

**New condition keys:**

- ec2:VpceMultiRegion
- ec2:VpceServiceRegion
- ec2:VpceSupportedRegion
- lambda:InvokedViaFunctionUrl
- mediaconnect:RequestTag/${TagKey}
- mediaconnect:ResourceTag/${TagKey}
- mediaconnect:TagKeys

## [0.728.0](https://github.com/udondan/iam-floyd/compare/v0.727.0...v0.728.0) (2025-10-28)

**New condition keys:**

- sso:ApplicationArn
- sso:InstanceArn
- vpc-lattice-svcs:RequestPath

## [0.727.0](https://github.com/udondan/iam-floyd/compare/v0.726.0...v0.727.0) (2025-10-24)

**New services:**

- rtbfabric

**New actions:**

- dsql:DeleteClusterPolicy
- dsql:GetClusterPolicy
- dsql:PutClusterPolicy

## [0.726.0](https://github.com/udondan/iam-floyd/compare/v0.725.0...v0.726.0) (2025-10-23)

**New actions:**

- medialive:ListAlerts
- medialive:ListClusterAlerts
- medialive:ListMultiplexAlerts

## [0.725.0](https://github.com/udondan/iam-floyd/compare/v0.724.0...v0.725.0) (2025-10-22)

**New services:**

- action-recommendations

**New actions:**

- healthlake:ExpandValueSetWithGet
- healthlake:ExpandValueSetWithPost
- healthlake:GenerateDocumentWithGet
- healthlake:GenerateDocumentWithPost
- healthlake:LookupCodeSystemWithGet
- healthlake:LookupCodeSystemWithPost
- healthlake:PatchResource
- healthlake:ValidateResource
- odb:UpdateOdbPeeringConnection

## [0.724.0](https://github.com/udondan/iam-floyd/compare/v0.723.0...v0.724.0) (2025-10-16)

**New actions:**

- eks:MutateViaKubernetesApi
- kinesis:InjectApiError

**New condition keys:**

- bedrock-agentcore:securityGroups
- bedrock-agentcore:subnets
- kinesis:FisActionId
- kinesis:FisInjectPercentage
- kinesis:FisTargetArns

## [0.723.0](https://github.com/udondan/iam-floyd/compare/v0.722.0...v0.723.0) (2025-10-15)

**New actions:**

- bedrock-agentcore:CompleteResourceTokenAuth

**New condition keys:**

- bedrock-agentcore:InboundJwtClaim/aud
- bedrock-agentcore:InboundJwtClaim/client_id
- bedrock-agentcore:InboundJwtClaim/iss
- bedrock-agentcore:InboundJwtClaim/scope
- bedrock-agentcore:InboundJwtClaim/sub
- bedrock-agentcore:userid
- xray:LogGeneratingResourceArns

## [0.722.0](https://github.com/udondan/iam-floyd/compare/v0.721.0...v0.722.0) (2025-10-14)

**New actions:**

- servicequotas:GetAutoManagementConfiguration
- servicequotas:StartAutoManagement
- servicequotas:StopAutoManagement
- servicequotas:UpdateAutoManagement

## [0.721.0](https://github.com/udondan/iam-floyd/compare/v0.720.0...v0.721.0) (2025-10-11)

**New actions:**

- aiops:CreateReport
- aiops:GenerateReport
- aiops:GetFact
- aiops:GetFactVersions
- aiops:GetReport
- aiops:ListFacts
- aiops:ListReports
- aiops:PutFact
- aiops:UpdateReport
- bedrock-agentcore:BatchCreateMemoryRecords
- bedrock-agentcore:BatchDeleteMemoryRecords
- bedrock-agentcore:BatchUpdateMemoryRecords
- bedrock-agentcore:GetAgentCard
- bedrock-agentcore:InvokeAgentRuntimeForUser
- bedrock-agentcore:InvokeGateway
- bedrock-agentcore:StopRuntimeSession
- quicksight:CreateActionConnector
- quicksight:CreateExtensionAccess
- quicksight:DeleteActionConnector
- quicksight:DeleteExtensionAccess
- quicksight:DescribeActionConnector
- quicksight:DescribeActionConnectorPermissions
- quicksight:DescribeAgent
- quicksight:DescribeAgentPermissions
- quicksight:DescribeChatConfiguration
- quicksight:DescribeExtensionAccess
- quicksight:DescribeQuickIndexCapacity
- quicksight:GetCustomPermissionsSummary
- quicksight:GetFlowMetadata
- quicksight:GetFlowPermissions
- quicksight:ListActionConnectors
- quicksight:ListAgents
- quicksight:ListExtensionAccesses
- quicksight:ListFlows
- quicksight:QuickSuiteUsageMetrics
- quicksight:SearchActionConnectors
- quicksight:SearchAgents
- quicksight:SearchFlows
- quicksight:UnpublishFlow
- quicksight:UpdateActionConnector
- quicksight:UpdateActionConnectorPermissions
- quicksight:UpdateAgentPermissions
- quicksight:UpdateChatConfiguration
- quicksight:UpdateExtensionAccess
- quicksight:UpdateFlowPermissions
- quicksight:UpdateQuickIndexCapacity

**New resource types:**

- quicksight:actionconnector
- quicksight:agent
- quicksight:extensionaccess
- quicksight:flow

**New condition keys:**

- bedrock-agentcore:GatewayAuthorizerType

## [0.720.0](https://github.com/udondan/iam-floyd/compare/v0.719.0...v0.720.0) (2025-10-03)

:warning: **Removed services:**

- application-cost-profiler

:warning: **Removed actions:**

- application-cost-profiler:DeleteReportDefinition
- application-cost-profiler:GetReportDefinition
- application-cost-profiler:ImportApplicationUsage
- application-cost-profiler:ListReportDefinitions
- application-cost-profiler:PutReportDefinition
- application-cost-profiler:UpdateReportDefinition

**New actions:**

- pcs:UpdateCluster

## [0.719.0](https://github.com/udondan/iam-floyd/compare/v0.718.0...v0.719.0) (2025-10-01)

**New actions:**

- profile:GetProfileHistoryRecord
- profile:ListProfileHistoryRecords
- resource-explorer-2:CreateResourceExplorerSetup
- resource-explorer-2:CreateStreamingAccessForService
- resource-explorer-2:DeleteResourceExplorerSetup
- resource-explorer-2:DeleteStreamingAccessForService
- resource-explorer-2:GetResourceExplorerSetup
- resource-explorer-2:GetServiceIndex
- resource-explorer-2:GetServiceView
- resource-explorer-2:ListServiceIndexes
- resource-explorer-2:ListServiceViews
- resource-explorer-2:ListStreamingAccessForServices

## [0.718.0](https://github.com/udondan/iam-floyd/compare/v0.717.0...v0.718.0) (2025-09-30)

**New actions:**

- application-signals:DeleteGroupingConfiguration
- application-signals:ListAuditFindings
- application-signals:ListGroupingAttributeDefinitions
- application-signals:ListServiceStates
- application-signals:PutGroupingConfiguration
- billing:AssociateSourceViews
- billing:DisassociateSourceViews
- billing:UseSourceView
- connect:AssociateContactWithUser
- connect:ListRoutingProfileManualAssignmentQueues
- ecs:PutSystemLogEvents
- one:ListUsers
- osis:CreatePipelineEndpoint
- osis:DeletePipelineEndpoint
- osis:DeleteResourcePolicy
- osis:GetResourcePolicy
- osis:ListPipelineEndpointConnections
- osis:ListPipelineEndpoints
- osis:PutResourcePolicy
- osis:RevokePipelineEndpointConnections
- sso-oauth:IntrospectTokenWithIAM
- sso-oauth:RevokeTokenWithIAM

**New resource types:**

- osis:pipeline-endpoint

**New condition keys:**

- connect:PreferredUserArn
- transfer:RequestConnectorProtocol
- transfer:RequestServerDomain
- transfer:RequestServerEndpointType
- transfer:RequestServerProtocols

## [0.717.0](https://github.com/udondan/iam-floyd/compare/v0.716.0...v0.717.0) (2025-09-23)

**New actions:**

- bedrock-agentcore:ListTagsForResource
- bedrock-agentcore:TagResource
- bedrock-agentcore:UntagResource
- bedrock:CountTokens

**New condition keys:**

- autoscaling:ForceDelete
- bedrock-agentcore:RequestTag/${TagKey}
- bedrock-agentcore:ResourceTag/${TagKey}
- bedrock-agentcore:TagKeys
- sagemaker:CurrentCustomerMetadataProperties/${MetadataKey}
- sagemaker:CurrentModelLifeCycleStage
- sagemaker:CurrentModelLifeCycleStageStatus

## [0.716.0](https://github.com/udondan/iam-floyd/compare/v0.714.0...v0.716.0) (2025-09-18)

:warning: **Removed actions:**

- workspaces:DescribeRootClientCertificates

**New actions:**

- cloudformation:ListAllHookResults
- evs:AssociateEipToVlan
- evs:DisassociateEipFromVlan
- identitystore:CreateIdentityStore
- identitystore:DeleteIdentityStore
- identitystore:UpdateIdentityStore
- invoicing:GetInvoiceCorrection
- invoicing:ListInvoiceCorrections
- invoicing:StartInvoiceCorrection
- observabilityadmin:CreateCentralizationRuleForOrganization
- observabilityadmin:DeleteCentralizationRuleForOrganization
- observabilityadmin:GetCentralizationRuleForOrganization
- observabilityadmin:GetTelemetryEnrichmentStatus
- observabilityadmin:ListCentralizationRulesForOrganization
- observabilityadmin:StartTelemetryEnrichment
- observabilityadmin:StopTelemetryEnrichment
- observabilityadmin:UpdateCentralizationRuleForOrganization
- tax:CancelDocument
- tax:CreateDocument
- tax:GetDocument
- tax:GetDocumentUploadUrl
- tax:ListDocuments
- tax:ListWithholdingEligibleInvoices
- wisdom:Retrieve

**New resource types:**

- observabilityadmin:organization-centralization-rule

**New condition keys:**

- cloudformation:TypeArn
- observabilityadmin:CentralizationBackupRegion
- observabilityadmin:CentralizationDestinationRegion
- observabilityadmin:CentralizationSourceRegions

## [0.715.0] (2025-09-16)

**New actions:**

- cloudformation:ListAllHookResults
- identitystore:CreateIdentityStore
- identitystore:DeleteIdentityStore
- identitystore:UpdateIdentityStore
- invoicing:GetInvoiceCorrection
- invoicing:ListInvoiceCorrections
- invoicing:StartInvoiceCorrection
- observabilityadmin:CreateCentralizationRuleForOrganization
- observabilityadmin:DeleteCentralizationRuleForOrganization
- observabilityadmin:GetCentralizationRuleForOrganization
- observabilityadmin:GetTelemetryEnrichmentStatus
- observabilityadmin:ListCentralizationRulesForOrganization
- observabilityadmin:StartTelemetryEnrichment
- observabilityadmin:StopTelemetryEnrichment
- observabilityadmin:UpdateCentralizationRuleForOrganization
- tax:CancelDocument
- tax:CreateDocument
- tax:GetDocument
- tax:GetDocumentUploadUrl
- tax:ListDocuments
- tax:ListWithholdingEligibleInvoices

**New resource types:**

- observabilityadmin:organization-centralization-rule

**New condition keys:**

- cloudformation:TypeArn
- observabilityadmin:CentralizationBackupRegion
- observabilityadmin:CentralizationDestinationRegion
- observabilityadmin:CentralizationSourceRegions

## [0.714.0](https://github.com/udondan/iam-floyd/compare/v0.711.0...v0.714.0) (2025-09-14)

:warning: **Removed services:**

- supportrecommendations

:warning: **Removed actions:**

- artifact:DownloadAgreement
- artifact:Get
- aws-marketplace:CompleteTask
- aws-marketplace:DescribeTask
- aws-marketplace:ListTasks
- aws-marketplace:UpdateTask
- braket:AccessBraketFeature
- cloud9:ValidateEnvironmentName
- dsql:CreateMultiRegionClusters
- dsql:DeleteMultiRegionClusters
- iotfleetwise:BatchCreateVehicle
- iotfleetwise:BatchUpdateVehicle
- qapps:CreatePresignedUrl
- qapps:ImportDocumentToQApp
- qapps:ImportDocumentToQAppSession
- qbusiness:AddUserLicenses
- qbusiness:CreateLicense
- qbusiness:GetLicense
- qbusiness:ListUserLicenses
- qbusiness:RemoveUserLicenses
- sso:DeletePermissionsPolicy
- sso:DescribeDirectories
- sso:DescribePermissionsPolicies
- sso:DescribeTrusts
- sso:GetPermissionsPolicy
- sso:UpdateDirectoryAssociation
- supportrecommendations:GetSupportTroubleshootingResponse
- supportrecommendations:StartSupportTroubleshooting

:warning: **Removed condition keys:**

- glacier:RequestTag/${TagKey}
- glacier:TagKeys
- imagebuilder:CreatedResourceTag/<key>
- quicksight:GroupId

:warning: **Removed resource types:**

- artifact:report-package
- emr-containers:certificate
- imagebuilder:componentVersion
- imagebuilder:kmsKey
- imagebuilder:workflowVersion
- qbusiness:user-license

**New services:**

- arc-region-switch
- bcm-dashboards
- bcm-recommended-actions
- bedrock-agentcore
- network-security-director
- odb
- s3vectors
- uxc

**New actions:**

- acm:RevokeCertificate
- aiops:GetEphemeralInvestigationResults
- aiops:ValidateInvestigationGroup
- aoss:CreateIndex
- aoss:DeleteIndex
- aoss:GetIndex
- aoss:UpdateIndex
- apigateway:CreateRoutingRule
- apigateway:DeleteRoutingRule
- apigateway:GetRoutingRule
- apigateway:ListRoutingRules
- apigateway:UpdateRoutingRule
- app-integrations:CreateDataIntegrationSchedule
- app-integrations:GetDataIntegrationExecution
- app-integrations:GetDataIntegrationSchedule
- app-integrations:ListDataIntegrationExecutions
- app-integrations:ListDataIntegrationSchedules
- app-integrations:StartDataIntegrationExecution
- app-integrations:UpdateDataIntegrationSchedule
- aps:CreateQueryLoggingConfiguration
- aps:DeleteQueryLoggingConfiguration
- aps:DeleteResourcePolicy
- aps:DescribeQueryLoggingConfiguration
- aps:DescribeResourcePolicy
- aps:PutResourcePolicy
- aps:UpdateQueryLoggingConfiguration
- arc-region-switch:ApprovePlanExecutionStep
- arc-region-switch:CancelPlanExecution
- arc-region-switch:CreatePlan
- arc-region-switch:DeletePlan
- arc-region-switch:DeleteResourcePolicy
- arc-region-switch:GetPlan
- arc-region-switch:GetPlanEvaluationStatus
- arc-region-switch:GetPlanExecution
- arc-region-switch:GetPlanInRegion
- arc-region-switch:GetResourcePolicy
- arc-region-switch:ListPlanExecutionEvents
- arc-region-switch:ListPlanExecutions
- arc-region-switch:ListPlans
- arc-region-switch:ListPlansInRegion
- arc-region-switch:ListRoute53HealthChecks
- arc-region-switch:ListTagsForResource
- arc-region-switch:PutResourcePolicy
- arc-region-switch:StartPlanExecution
- arc-region-switch:TagResource
- arc-region-switch:UntagResource
- arc-region-switch:UpdatePlan
- arc-region-switch:UpdatePlanExecution
- arc-region-switch:UpdatePlanExecutionStep
- arc-zonal-shift:CancelPracticeRun
- arc-zonal-shift:StartPracticeRun
- backup:AssociateBackupVaultMpaApprovalTeam
- backup:CreateRestoreAccessBackupVault
- backup:DisassociateBackupVaultMpaApprovalTeam
- backup:ListRestoreAccessBackupVaults
- backup:RevokeRestoreAccessBackupVault
- batch:CreateServiceEnvironment
- batch:DeleteServiceEnvironment
- batch:DescribeServiceEnvironments
- batch:DescribeServiceJob
- batch:ListServiceJobs
- batch:SubmitServiceJob
- batch:TerminateServiceJob
- batch:UpdateServiceEnvironment
- bcm-recommended-actions:ListRecommendedActions
- bedrock-agentcore:AllowVendedLogDeliveryForResource
- bedrock-agentcore:ConnectBrowserAutomationStream
- bedrock-agentcore:ConnectBrowserLiveViewStream
- bedrock-agentcore:CreateAgentRuntime
- bedrock-agentcore:CreateAgentRuntimeEndpoint
- bedrock-agentcore:CreateApiKeyCredentialProvider
- bedrock-agentcore:CreateBrowser
- bedrock-agentcore:CreateCodeInterpreter
- bedrock-agentcore:CreateEvent
- bedrock-agentcore:CreateGateway
- bedrock-agentcore:CreateGatewayTarget
- bedrock-agentcore:CreateMemory
- bedrock-agentcore:CreateOauth2CredentialProvider
- bedrock-agentcore:CreateWorkloadIdentity
- bedrock-agentcore:DeleteAgentRuntime
- bedrock-agentcore:DeleteAgentRuntimeEndpoint
- bedrock-agentcore:DeleteApiKeyCredentialProvider
- bedrock-agentcore:DeleteBrowser
- bedrock-agentcore:DeleteCodeInterpreter
- bedrock-agentcore:DeleteEvent
- bedrock-agentcore:DeleteGateway
- bedrock-agentcore:DeleteGatewayTarget
- bedrock-agentcore:DeleteMemory
- bedrock-agentcore:DeleteMemoryRecord
- bedrock-agentcore:DeleteOauth2CredentialProvider
- bedrock-agentcore:DeleteWorkloadIdentity
- bedrock-agentcore:GetAgentRuntime
- bedrock-agentcore:GetAgentRuntimeEndpoint
- bedrock-agentcore:GetApiKeyCredentialProvider
- bedrock-agentcore:GetBrowser
- bedrock-agentcore:GetBrowserSession
- bedrock-agentcore:GetCodeInterpreter
- bedrock-agentcore:GetCodeInterpreterSession
- bedrock-agentcore:GetEvent
- bedrock-agentcore:GetGateway
- bedrock-agentcore:GetGatewayTarget
- bedrock-agentcore:GetMemory
- bedrock-agentcore:GetMemoryRecord
- bedrock-agentcore:GetOauth2CredentialProvider
- bedrock-agentcore:GetResourceApiKey
- bedrock-agentcore:GetResourceOauth2Token
- bedrock-agentcore:GetTokenVault
- bedrock-agentcore:GetWorkloadAccessToken
- bedrock-agentcore:GetWorkloadAccessTokenForJWT
- bedrock-agentcore:GetWorkloadAccessTokenForUserId
- bedrock-agentcore:GetWorkloadIdentity
- bedrock-agentcore:InvokeAgentRuntime
- bedrock-agentcore:InvokeCodeInterpreter
- bedrock-agentcore:ListActors
- bedrock-agentcore:ListAgentRuntimeEndpoints
- bedrock-agentcore:ListAgentRuntimeVersions
- bedrock-agentcore:ListAgentRuntimes
- bedrock-agentcore:ListApiKeyCredentialProviders
- bedrock-agentcore:ListBrowserSessions
- bedrock-agentcore:ListBrowsers
- bedrock-agentcore:ListCodeInterpreterSessions
- bedrock-agentcore:ListCodeInterpreters
- bedrock-agentcore:ListEvents
- bedrock-agentcore:ListGatewayTargets
- bedrock-agentcore:ListGateways
- bedrock-agentcore:ListMemories
- bedrock-agentcore:ListMemoryRecords
- bedrock-agentcore:ListOauth2CredentialProviders
- bedrock-agentcore:ListSessions
- bedrock-agentcore:ListWorkloadIdentities
- bedrock-agentcore:RetrieveMemoryRecords
- bedrock-agentcore:SetTokenVaultCMK
- bedrock-agentcore:StartBrowserSession
- bedrock-agentcore:StartCodeInterpreterSession
- bedrock-agentcore:StopBrowserSession
- bedrock-agentcore:StopCodeInterpreterSession
- bedrock-agentcore:SynchronizeGatewayTargets
- bedrock-agentcore:UpdateAgentRuntime
- bedrock-agentcore:UpdateAgentRuntimeEndpoint
- bedrock-agentcore:UpdateApiKeyCredentialProvider
- bedrock-agentcore:UpdateBrowserStream
- bedrock-agentcore:UpdateGateway
- bedrock-agentcore:UpdateGatewayTarget
- bedrock-agentcore:UpdateMemory
- bedrock-agentcore:UpdateOauth2CredentialProvider
- bedrock-agentcore:UpdateWorkloadIdentity
- bedrock:CallWithBearerToken
- bedrock:CancelAutomatedReasoningPolicyBuildWorkflow
- bedrock:CreateAutomatedReasoningPolicy
- bedrock:CreateAutomatedReasoningPolicyTestCase
- bedrock:CreateAutomatedReasoningPolicyVersion
- bedrock:CreateCustomModel
- bedrock:CreateCustomModelDeployment
- bedrock:DeleteAutomatedReasoningPolicy
- bedrock:DeleteAutomatedReasoningPolicyBuildWorkflow
- bedrock:DeleteAutomatedReasoningPolicyTestCase
- bedrock:DeleteCustomModelDeployment
- bedrock:ExportAutomatedReasoningPolicyVersion
- bedrock:GetAutomatedReasoningPolicy
- bedrock:GetAutomatedReasoningPolicyAnnotations
- bedrock:GetAutomatedReasoningPolicyBuildWorkflow
- bedrock:GetAutomatedReasoningPolicyBuildWorkflowResultAssets
- bedrock:GetAutomatedReasoningPolicyNextScenario
- bedrock:GetAutomatedReasoningPolicyTestCase
- bedrock:GetAutomatedReasoningPolicyTestResult
- bedrock:GetCustomModelDeployment
- bedrock:GetExecutionFlowSnapshot
- bedrock:GetFlowExecution
- bedrock:InvokeAutomatedReasoningPolicy
- bedrock:ListAutomatedReasoningPolicies
- bedrock:ListAutomatedReasoningPolicyBuildWorkflows
- bedrock:ListAutomatedReasoningPolicyTestCases
- bedrock:ListAutomatedReasoningPolicyTestResults
- bedrock:ListCustomModelDeployments
- bedrock:ListFlowExecutionEvents
- bedrock:ListFlowExecutions
- bedrock:StartAutomatedReasoningPolicyBuildWorkflow
- bedrock:StartAutomatedReasoningPolicyTestWorkflow
- bedrock:StartFlowExecution
- bedrock:StopFlowExecution
- bedrock:UpdateAutomatedReasoningPolicy
- bedrock:UpdateAutomatedReasoningPolicyAnnotations
- bedrock:UpdateAutomatedReasoningPolicyTestCase
- billing:GetBillingViewData
- cases:DeleteCase
- cassandra:GetRecords
- cassandra:GetShardIterator
- cassandra:GetStream
- cassandra:ListStreams
- ce:GetCostAndUsageComparisons
- ce:GetCostComparisonDrivers
- cleanrooms-ml:ListTrainedModelVersions
- cleanrooms:CreateCollaborationChangeRequest
- cleanrooms:GetCollaborationChangeRequest
- cleanrooms:ListCollaborationChangeRequests
- cleanrooms:UpdateConfiguredTableAllowedColumns
- cleanrooms:UpdateConfiguredTableReference
- cloudtrail:GetEventConfiguration
- cloudtrail:PutEventConfiguration
- cloudwatch:GenerateQueryResultsSummary
- codepipeline:ListDeployActionExecutionTargets
- cognito-idp:GetTokensFromRefreshToken
- connect-campaigns:GetInstanceCommunicationLimits
- connect-campaigns:PutInstanceCommunicationLimits
- connect:GetContactMetrics
- controlcatalog:ListControlMappings
- datazone:AssociateGovernedTerms
- datazone:CreateAccountPool
- datazone:DeleteAccountPool
- datazone:DisassociateGovernedTerms
- datazone:GetAccountPool
- datazone:ListAccountPools
- datazone:ListAccountsInAccountPool
- datazone:StartAccountBootstrapAction
- datazone:UpdateAccountPool
- ds:CreateHybridAD
- ds:DeleteADAssessment
- ds:DescribeADAssessment
- ds:DescribeCAEnrollmentPolicy
- ds:DescribeHybridADUpdate
- ds:DisableCAEnrollmentPolicy
- ds:EnableCAEnrollmentPolicy
- ds:ListADAssessments
- ds:StartADAssessment
- ds:UpdateHybridAD
- dsql:GetBackupJob
- dsql:GetRestoreJob
- dsql:InjectError
- dsql:StartBackupJob
- dsql:StartRestoreJob
- dsql:StopBackupJob
- dsql:StopRestoreJob
- dynamodb:CreateGlobalTableWitness
- dynamodb:DeleteGlobalTableWitness
- ec2:CreateDelegateMacVolumeOwnershipTask
- ec2:CreateImageUsageReport
- ec2:CreateMacSystemIntegrityProtectionModificationTask
- ec2:DeleteImageUsageReport
- ec2:DescribeCapacityBlockStatus
- ec2:DescribeCapacityBlocks
- ec2:DescribeImageReferences
- ec2:DescribeImageUsageReportEntries
- ec2:DescribeImageUsageReports
- ec2:DescribeMacModificationTasks
- ec2:GetActiveVpnTunnelStatus
- ec2:ModifyInstanceConnectEndpoint
- ec2:ModifyPublicIpDnsNameOptions
- eks:DescribeInsightsRefresh
- eks:ListDashboardData
- eks:ListDashboardResources
- eks:StartInsightsRefresh
- elasticmapreduce:AccessAllEventLogs
- emr-serverless:AccessSystemProfileLogs
- entityresolution:GenerateMatchId
- events:AllowVendedLogDeliveryForResource
- freetier:GetAccountActivity
- freetier:GetAccountPlanState
- freetier:ListAccountActivities
- freetier:UpgradeAccountPlan
- fsx:CreateAndAttachS3AccessPoint
- fsx:DescribeS3AccessPointAttachments
- fsx:DetachAndDeleteS3AccessPoint
- glue:CreateGlueIdentityCenterConfiguration
- glue:DeleteGlueIdentityCenterConfiguration
- glue:GetGlueIdentityCenterConfiguration
- glue:UpdateGlueIdentityCenterConfiguration
- guardduty:CreateThreatEntitySet
- guardduty:CreateTrustedEntitySet
- guardduty:DeleteThreatEntitySet
- guardduty:DeleteTrustedEntitySet
- guardduty:GetThreatEntitySet
- guardduty:GetTrustedEntitySet
- guardduty:ListThreatEntitySets
- guardduty:ListTrustedEntitySets
- guardduty:UpdateThreatEntitySet
- guardduty:UpdateTrustedEntitySet
- inspector2:BatchAssociateCodeSecurityScanConfiguration
- inspector2:BatchDisassociateCodeSecurityScanConfiguration
- inspector2:CreateCodeSecurityIntegration
- inspector2:CreateCodeSecurityScanConfiguration
- inspector2:DeleteCodeSecurityIntegration
- inspector2:DeleteCodeSecurityScanConfiguration
- inspector2:GetClustersForImage
- inspector2:GetCodeSecurityIntegration
- inspector2:GetCodeSecurityScan
- inspector2:GetCodeSecurityScanConfiguration
- inspector2:ListCodeSecurityIntegrations
- inspector2:ListCodeSecurityScanConfigurationAssociations
- inspector2:ListCodeSecurityScanConfigurations
- inspector2:StartCodeSecurityScan
- inspector2:UpdateCodeSecurityIntegration
- inspector2:UpdateCodeSecurityScanConfiguration
- iot:DeleteConnection
- iot:DescribeEncryptionConfiguration
- iot:UpdateEncryptionConfiguration
- iotsitewise:CreateComputationModel
- iotsitewise:DeleteAssetModelInterfaceRelationship
- iotsitewise:DeleteComputationModel
- iotsitewise:DescribeAssetModelInterfaceRelationship
- iotsitewise:DescribeComputationModel
- iotsitewise:DescribeComputationModelExecutionSummary
- iotsitewise:DescribeExecution
- iotsitewise:ListComputationModelDataBindingUsages
- iotsitewise:ListComputationModelResolveToResources
- iotsitewise:ListComputationModels
- iotsitewise:ListExecutions
- iotsitewise:ListInterfaceRelationships
- iotsitewise:PutAssetModelInterfaceRelationship
- iotsitewise:UpdateComputationModel
- ivs:ListParticipantReplicas
- ivs:StartParticipantReplication
- ivs:StopParticipantReplication
- lex:CreateResourcePolicyStatement
- lex:DeleteResourcePolicyStatement
- logs:ListLogGroups
- mediaconvert:CreateResourceShare
- medical-imaging:GetDICOMBulkdata
- medical-imaging:GetDICOMSeriesMetadata
- medical-imaging:SearchDICOMInstances
- medical-imaging:SearchDICOMSeries
- medical-imaging:SearchDICOMStudies
- medical-imaging:StoreDICOM
- medical-imaging:StoreDICOMStudy
- memorydb:PauseMultiRegionClusterReplication
- mq:UpdateBrokerAccessConfiguration
- neptune-graph:StartGraph
- neptune-graph:StopGraph
- network-firewall:AcceptNetworkFirewallTransitGatewayAttachment
- network-firewall:AssociateAvailabilityZones
- network-firewall:CreateVpcEndpointAssociation
- network-firewall:DeleteNetworkFirewallTransitGatewayAttachment
- network-firewall:DeleteVpcEndpointAssociation
- network-firewall:DescribeFirewallMetadata
- network-firewall:DescribeRuleGroupSummary
- network-firewall:DescribeVpcEndpointAssociation
- network-firewall:DisassociateAvailabilityZones
- network-firewall:ListVpcEndpointAssociations
- network-firewall:RejectNetworkFirewallTransitGatewayAttachment
- network-firewall:UpdateAvailabilityZoneChangeProtection
- network-security-director:GetFinding
- network-security-director:GetNetworkSecurityScan
- network-security-director:GetResource
- network-security-director:ListFindings
- network-security-director:ListInsights
- network-security-director:ListRemediations
- network-security-director:ListResources
- network-security-director:StartNetworkSecurityScan
- network-security-director:UpdateFinding
- notifications:AssociateOrganizationalUnit
- notifications:DisassociateOrganizationalUnit
- notifications:ListMemberAccounts
- notifications:ListOrganizationalUnits
- observabilityadmin:CreateTelemetryRule
- observabilityadmin:CreateTelemetryRuleForOrganization
- observabilityadmin:DeleteTelemetryRule
- observabilityadmin:DeleteTelemetryRuleForOrganization
- observabilityadmin:GetTelemetryRule
- observabilityadmin:GetTelemetryRuleForOrganization
- observabilityadmin:ListTagsForResource
- observabilityadmin:ListTelemetryRules
- observabilityadmin:ListTelemetryRulesForOrganization
- observabilityadmin:TagResource
- observabilityadmin:UntagResource
- observabilityadmin:UpdateTelemetryRule
- observabilityadmin:UpdateTelemetryRuleForOrganization
- odb:AcceptMarketplaceRegistration
- odb:CreateCloudAutonomousVmCluster
- odb:CreateCloudExadataInfrastructure
- odb:CreateCloudVmCluster
- odb:CreateDbNode
- odb:CreateOdbNetwork
- odb:CreateOdbPeeringConnection
- odb:CreateOutboundIntegration
- odb:DeleteCloudAutonomousVmCluster
- odb:DeleteCloudExadataInfrastructure
- odb:DeleteCloudVmCluster
- odb:DeleteDbNode
- odb:DeleteOdbNetwork
- odb:DeleteOdbPeeringConnection
- odb:DeleteResourcePolicy
- odb:GetCloudAutonomousVmCluster
- odb:GetCloudExadataInfrastructure
- odb:GetCloudExadataInfrastructureUnallocatedResources
- odb:GetCloudVmCluster
- odb:GetDbNode
- odb:GetDbServer
- odb:GetOciOnboardingStatus
- odb:GetOdbNetwork
- odb:GetOdbPeeringConnection
- odb:GetResourcePolicy
- odb:InitializeService
- odb:ListAutonomousVirtualMachines
- odb:ListCloudAutonomousVmClusters
- odb:ListCloudExadataInfrastructures
- odb:ListCloudVmClusters
- odb:ListDbNodes
- odb:ListDbServers
- odb:ListDbSystemShapes
- odb:ListGiVersions
- odb:ListOdbNetworks
- odb:ListOdbPeeringConnections
- odb:ListSystemVersions
- odb:ListTagsForResource
- odb:PutResourcePolicy
- odb:RebootDbNode
- odb:StartDbNode
- odb:StopDbNode
- odb:TagResource
- odb:UntagResource
- odb:UpdateCloudExadataInfrastructure
- odb:UpdateOdbNetwork
- organizations:ListAccountsWithInvalidEffectivePolicy
- organizations:ListEffectivePolicyValidationErrors
- outposts:GetOutpostBillingInformation
- profile:CreateDomainLayout
- profile:CreateUploadJob
- profile:DeleteDomainLayout
- profile:GetDomainLayout
- profile:GetUploadJob
- profile:GetUploadJobPath
- profile:ListDomainLayouts
- profile:ListUploadJobs
- profile:StartUploadJob
- profile:StopUploadJob
- profile:UpdateDomainLayout
- qbusiness:CreateChatResponseConfiguration
- qbusiness:CreateDataAccessorWithTti
- qbusiness:DeleteChatResponseConfiguration
- qbusiness:GetChatResponseConfiguration
- qbusiness:GetDocumentContent
- qbusiness:ListChatResponseConfigurations
- qbusiness:UpdateChatResponseConfiguration
- quicksight:DeleteAccountCustomPermission
- quicksight:DescribeAccountCustomPermission
- quicksight:UpdateAccountCustomPermission
- rds:DescribeDBMajorEngineVersions
- repostspace:BatchAddChannelRoleToAccessors
- repostspace:BatchRemoveChannelRoleFromAccessors
- repostspace:CreateChannel
- repostspace:GetChannel
- repostspace:ListChannels
- repostspace:UpdateChannel
- s3:UpdateBucketMetadataInventoryTableConfiguration
- s3:UpdateBucketMetadataJournalTableConfiguration
- s3express:ListTagsForResource
- s3express:TagResource
- s3express:UntagResource
- s3vectors:CreateIndex
- s3vectors:CreateVectorBucket
- s3vectors:DeleteIndex
- s3vectors:DeleteVectorBucket
- s3vectors:DeleteVectorBucketPolicy
- s3vectors:DeleteVectors
- s3vectors:GetIndex
- s3vectors:GetVectorBucket
- s3vectors:GetVectorBucketPolicy
- s3vectors:GetVectors
- s3vectors:ListIndexes
- s3vectors:ListVectorBuckets
- s3vectors:ListVectors
- s3vectors:PutVectorBucketPolicy
- s3vectors:PutVectors
- s3vectors:QueryVectors
- sagemaker-mlflow:DeleteLoggedModel
- sagemaker-mlflow:DeleteLoggedModelTag
- sagemaker-mlflow:FinalizeLoggedModel
- sagemaker-mlflow:GetLoggedModel
- sagemaker-mlflow:ListLoggedModelArtifacts
- sagemaker-mlflow:LogLoggedModelParams
- sagemaker-mlflow:LogOutputs
- sagemaker-mlflow:SearchLoggedModels
- sagemaker-mlflow:SetLoggedModelTags
- sagemaker:AttachClusterNodeVolume
- sagemaker:BatchAddClusterNodes
- sagemaker:CreateHubContentPresignedUrls
- sagemaker:DescribeClusterEvent
- sagemaker:DescribeClusterInference
- sagemaker:DescribeReservedCapacity
- sagemaker:DetachClusterNodeVolume
- sagemaker:ListClusterEvents
- sagemaker:ListPipelineVersions
- sagemaker:ListUltraServersByReservedCapacity
- sagemaker:StartSession
- sagemaker:UpdateClusterInference
- sagemaker:UpdatePipelineVersion
- securityhub:ConnectorRegistrationsV2
- securityhub:CreateAggregatorV2
- securityhub:CreateAutomationRuleV2
- securityhub:CreateConnectorV2
- securityhub:CreateTicketV2
- securityhub:DeleteAggregatorV2
- securityhub:DeleteAutomationRuleV2
- securityhub:DeleteConnectorV2
- securityhub:DescribeProductsV2
- securityhub:DescribeSecurityHubV2
- securityhub:DisableSecurityHubV2
- securityhub:EnableSecurityHubV2
- securityhub:GetAggregatorV2
- securityhub:GetAutomationRuleV2
- securityhub:GetConnectorV2
- securityhub:GetResourcesStatisticsV2
- securityhub:GetResourcesV2
- securityhub:ListAggregatorsV2
- securityhub:ListAutomationRulesV2
- securityhub:ListConnectorsV2
- securityhub:UpdateAggregatorV2
- securityhub:UpdateAutomationRuleV2
- securityhub:UpdateConnectorV2
- servicediscovery:DeleteResourcePolicy
- servicediscovery:GetResourcePolicy
- servicediscovery:PutResourcePolicy
- servicequotas:CreateSupportCase
- ses:CreateTenant
- ses:CreateTenantResourceAssociation
- ses:DeleteTenant
- ses:DeleteTenantResourceAssociation
- ses:GetReputationEntity
- ses:GetTenant
- ses:ListReputationEntities
- ses:ListResourceTenants
- ses:ListTenantResources
- ses:ListTenants
- ses:UpdateReputationEntityCustomerManagedStatus
- ses:UpdateReputationEntityPolicy
- shield:DescribeAttackContributors
- shield:GetGlobalThreatData
- shield:ListMitigations
- social-messaging:CreateWhatsAppMessageTemplate
- social-messaging:CreateWhatsAppMessageTemplateFromLibrary
- social-messaging:CreateWhatsAppMessageTemplateMedia
- social-messaging:DeleteWhatsAppMessageTemplate
- social-messaging:GetWhatsAppMessageTemplate
- social-messaging:ListWhatsAppMessageTemplates
- social-messaging:ListWhatsAppTemplateLibrary
- social-messaging:UpdateWhatsAppMessageTemplate
- ssm-sap:GetConfigurationCheckOperation
- ssm-sap:ListConfigurationCheckDefinitions
- ssm-sap:ListConfigurationCheckOperations
- ssm-sap:ListSubCheckResults
- ssm-sap:ListSubCheckRuleResults
- ssm-sap:StartConfigurationChecks
- sso:GetApplicationSessionConfiguration
- sso:PutApplicationSessionConfiguration
- support:DescribeCaseOptions
- support:UpdateCaseSeverity
- support:UpdateInteraction
- transform:DeleteConnector
- transform:ListConnectors
- transform:ListTagsForResource
- transform:TagResource
- transform:UntagResource
- uxc:DeleteAccountColor
- uxc:GetAccountColor
- uxc:PutAccountColor
- vpc-lattice:AssociateViaAWSService
- workspaces-web:AssociateSessionLogger
- workspaces-web:CreateSessionLogger
- workspaces-web:DeleteSessionLogger
- workspaces-web:DisassociateSessionLogger
- workspaces-web:GetSessionLogger
- workspaces-web:ListSessionLoggers
- workspaces-web:UpdateSessionLogger
- workspaces:CreateRootClientCertificate
- workspaces:DeleteRootClientCertificate
- workspaces:DescribeConsent
- workspaces:DescribeCustomWorkspaceImageImport
- workspaces:DescribeRootClientCertificates
- workspaces:DirectoryAccessManagement
- workspaces:ImportCustomWorkspaceImage
- workspaces:UpdateConsent
- workspaces:UpdateRootClientCertificate

**Updated action access level:**

- appstream:DescribeAppBlockBuilderAppBlockAssociations: Read -> List
- appstream:DescribeAppBlockBuilders: Read -> List
- appstream:DescribeAppBlocks: Read -> List
- appstream:DescribeApplicationFleetAssociations: Read -> List
- appstream:DescribeApplications: Read -> List
- appstream:DescribeDirectoryConfigs: Read -> List
- appstream:DescribeEntitlements: Read -> List
- appstream:DescribeFleets: Read -> List
- appstream:DescribeImageBuilders: Read -> List
- appstream:DescribeImages: Read -> List
- appstream:DescribeSessions: Read -> List
- appstream:DescribeStacks: Read -> List
- appstream:DescribeUsageReportSubscriptions: Read -> List
- appstream:DescribeUserStackAssociations: Read -> List
- appstream:DescribeUsers: Read -> List
- appsync:SetWebACL: Write -> Permissions management
- datazone:AddPolicyGrant: Write -> Permissions management
- datazone:RemovePolicyGrant: Write -> Permissions management
- datazone:RevokeSubscription: Write -> Permissions management
- ec2:CancelImageLaunchPermission: Write -> Permissions management
- ec2:CreateCoipPoolPermission: Write -> Permissions management
- ec2:CreateLocalGatewayRouteTablePermission: Write -> Permissions management
- ec2:DeleteCoipPoolPermission: Write -> Permissions management
- ec2:DeleteLocalGatewayRouteTablePermission: Write -> Permissions management
- ec2:DeleteResourcePolicy: Write -> Permissions management
- ec2:DisableImageBlockPublicAccess: Write -> Permissions management
- ec2:DisableSnapshotBlockPublicAccess: Write -> Permissions management
- ec2:EnableImageBlockPublicAccess: Write -> Permissions management
- ec2:EnableSnapshotBlockPublicAccess: Write -> Permissions management
- ec2:PutResourcePolicy: Write -> Permissions management
-iot:CreatePolicy;Write
- iot:CreatePolicyVersion: Write -> Permissions management
+iot:CreatePolicyVersion;Permissions management
- iot:CreatePolicyVersion: Write -> Permissions management
-iot:DeletePolicy;Write
- iot:DeletePolicyVersion: Write -> Permissions management
+iot:DeletePolicyVersion;Permissions management
- iot:DeletePolicyVersion: Write -> Permissions management
- notifications:DisableNotificationsAccessForOrganization: Write -> Permissions management
- notifications:EnableNotificationsAccessForOrganization: Write -> Permissions management
- resource-explorer-2:DeleteResourcePolicy: Write -> Permissions management
- resource-explorer-2:PutResourcePolicy: Write -> Permissions management
- ssm-sap:DeleteResourcePermission: Write -> Permissions management
- ssm-sap:GetResourcePermission: Read -> Permissions management
- ssm-sap:PutResourcePermission: Write -> Permissions management

**New resource types:**

- apigateway:RoutingRule
- arc-region-switch:plan
- batch:service-environment
- batch:service-job
- bedrock-agentcore:apikeycredentialprovider
- bedrock-agentcore:browser
- bedrock-agentcore:browser-custom
- bedrock-agentcore:code-interpreter
- bedrock-agentcore:code-interpreter-custom
- bedrock-agentcore:gateway
- bedrock-agentcore:memory
- bedrock-agentcore:oauth2credentialprovider
- bedrock-agentcore:runtime
- bedrock-agentcore:runtime-endpoint
- bedrock-agentcore:token-vault
- bedrock-agentcore:workload-identity
- bedrock-agentcore:workload-identity-directory
- bedrock:automated-reasoning-policy
- bedrock:automated-reasoning-policy-version
- bedrock:custom-model-deployment
- bedrock:flow-execution
- bedrock:guardrail-profile
- cassandra:stream
- ec2:capacity-block
- ec2:image-usage-report
- ec2:mac-modification-task
- eks:dashboard
- events:alias
- events:key
- guardduty:threatentityset
- guardduty:trustedentityset
- imagebuilder:allComponentBuildVersions
- imagebuilder:allImageBuildVersions
- imagebuilder:allWorkflowBuildVersions
- inspector2:Code Security Integration
- inspector2:Code Security Scan Configuration
- iotsitewise:computation-model
- network-firewall:VpcEndpointAssociation
- observabilityadmin:organization-telemetry-rule
- observabilityadmin:telemetry-rule
- odb:cloud-autonomous-vm-cluster
- odb:cloud-exadata-infrastructure
- odb:cloud-vm-cluster
- odb:db-node
- odb:odb-network
- odb:odb-peering-connection
- profile:layouts
- qbusiness:chat-response-configuration
- s3:accesspointobject
- s3vectors:Index
- s3vectors:VectorBucket
- securityhub:aggregatorv2
- securityhub:automation-rulev2
- securityhub:connectorv2
- securityhub:hubv2
- ses:reputation-policy
- ses:tenant
- sts:federated-user
- transform:connector
- workspaces-web:sessionLogger
- workspaces:certificateid

**New condition keys:**

- acm:Export
- apigateway:Request/ConditionBasePaths
- apigateway:Request/Priority
- apigateway:Request/RoutingMode
- apigateway:Resource/ConditionBasePaths
- apigateway:Resource/Priority
- apigateway:Resource/RoutingMode
- arc-region-switch:RequestTag/${TagKey}
- arc-region-switch:ResourceTag/${TagKey}
- arc-region-switch:TagKeys
- backup:MpaApprovalTeamArn
- bedrock-agentcore:actorId
- bedrock-agentcore:namespace
- bedrock-agentcore:sessionId
- bedrock-agentcore:strategyId
- bedrock:BearerTokenType
- chatbot:RequestTag/${TagKey}
- chatbot:ResourceTag/${TagKey}
- chatbot:TagKeys
- codebuild:artifacts
- codebuild:artifacts.bucketOwnerAccess
- codebuild:artifacts.encryptionDisabled
- codebuild:artifacts.location
- codebuild:authType
- codebuild:autoRetryLimit
- codebuild:buildBatchConfig
- codebuild:buildBatchConfig.restrictions.computeTypesAllowed
- codebuild:buildBatchConfig.restrictions.fleetsAllowed
- codebuild:buildBatchConfig.serviceRole
- codebuild:buildType
- codebuild:cache
- codebuild:cache.location
- codebuild:cache.modes
- codebuild:cache.type
- codebuild:computeConfiguration
- codebuild:computeConfiguration.disk
- codebuild:computeConfiguration.instanceType
- codebuild:computeConfiguration.machineType
- codebuild:computeConfiguration.memory
- codebuild:computeConfiguration.vCpu
- codebuild:computeType
- codebuild:concurrentBuildLimit
- codebuild:encryptionKey
- codebuild:environment
- codebuild:environment.certificate
- codebuild:environment.computeConfiguration
- codebuild:environment.computeConfiguration.disk
- codebuild:environment.computeConfiguration.instanceType
- codebuild:environment.computeConfiguration.machineType
- codebuild:environment.computeConfiguration.memory
- codebuild:environment.computeConfiguration.vCpu
- codebuild:environment.computeType
- codebuild:environment.environmentVariables
- codebuild:environment.environmentVariables.name
- codebuild:environment.environmentVariables.value
- codebuild:environment.environmentVariables/${name}.value
- codebuild:environment.fleet.fleetArn
- codebuild:environment.image
- codebuild:environment.imagePullCredentialsType
- codebuild:environment.privilegedMode
- codebuild:environment.registryCredential
- codebuild:environment.registryCredential.credential
- codebuild:environment.registryCredential.credentialProvider
- codebuild:environment.type
- codebuild:environmentType
- codebuild:exportConfig.s3Destination.bucket
- codebuild:exportConfig.s3Destination.bucketOwner
- codebuild:exportConfig.s3Destination.encryptionDisabled
- codebuild:exportConfig.s3Destination.encryptionKey
- codebuild:exportConfig.s3Destination.path
- codebuild:fileSystemLocations.identifier
- codebuild:fileSystemLocations.location
- codebuild:fileSystemLocations.type
- codebuild:fileSystemLocations/${identifier}.location
- codebuild:fileSystemLocations/${identifier}.type
- codebuild:fleetServiceRole
- codebuild:imageId
- codebuild:logsConfig
- codebuild:logsConfig.s3Logs
- codebuild:logsConfig.s3Logs.bucketOwnerAccess
- codebuild:logsConfig.s3Logs.encryptionDisabled
- codebuild:logsConfig.s3Logs.location
- codebuild:logsConfig.s3Logs.status
- codebuild:manualCreation
- codebuild:projectVisibility
- codebuild:scopeConfiguration.domain
- codebuild:scopeConfiguration.name
- codebuild:scopeConfiguration.scope
- codebuild:secondaryArtifacts
- codebuild:secondaryArtifacts.artifactIdentifier
- codebuild:secondaryArtifacts.bucketOwnerAccess
- codebuild:secondaryArtifacts.encryptionDisabled
- codebuild:secondaryArtifacts.location
- codebuild:secondaryArtifacts/${artifactIdentifier}.bucketOwnerAccess
- codebuild:secondaryArtifacts/${artifactIdentifier}.encryptionDisabled
- codebuild:secondaryArtifacts/${artifactIdentifier}.location
- codebuild:secondarySources
- codebuild:secondarySources.auth.resource
- codebuild:secondarySources.auth.type
- codebuild:secondarySources.buildStatusConfig.context
- codebuild:secondarySources.buildStatusConfig.targetUrl
- codebuild:secondarySources.buildspec
- codebuild:secondarySources.insecureSsl
- codebuild:secondarySources.location
- codebuild:secondarySources.sourceIdentifier
- codebuild:secondarySources/${sourceIdentifier}.auth.resource
- codebuild:secondarySources/${sourceIdentifier}.auth.type
- codebuild:secondarySources/${sourceIdentifier}.buildStatusConfig.context
- codebuild:secondarySources/${sourceIdentifier}.buildStatusConfig.targetUrl
- codebuild:secondarySources/${sourceIdentifier}.buildspec
- codebuild:secondarySources/${sourceIdentifier}.insecureSsl
- codebuild:secondarySources/${sourceIdentifier}.location
- codebuild:serverType
- codebuild:serviceRole
- codebuild:shouldOverwrite
- codebuild:source
- codebuild:source.auth.resource
- codebuild:source.auth.type
- codebuild:source.buildStatusConfig.context
- codebuild:source.buildStatusConfig.targetUrl
- codebuild:source.buildspec
- codebuild:source.insecureSsl
- codebuild:source.location
- codebuild:token
- codebuild:username
- codebuild:vpcConfig
- codebuild:vpcConfig.securityGroupIds
- codebuild:vpcConfig.subnets
- codebuild:vpcConfig.vpcId
- connect:ListRealtimeContactAnalysisSegmentsByOutputType
- connect:ListRealtimeContactAnalysisSegmentsBySegmentType
- dsql:FisActionId
- dsql:FisTargetArns
- ec2:VolumeInitializationRate
- glue:LakeFormationPermissions
- iam:ServiceSpecificCredentialAgeDays
- iam:ServiceSpecificCredentialServiceName
- imagebuilder:CreatedResourceTag/${TagKey}
- iotmanagedintegrations:cloudConnectorId
- iotmanagedintegrations:connectorDestinationId
- observabilityadmin:RequestTag/${TagKey}
- observabilityadmin:ResourceTag/${TagKey}
- observabilityadmin:TagKeys
- odb:RequestTag/${TagKey}
- odb:ResourceTag/${TagKey}
- odb:TagKeys
- rds:PubliclyAccessible
- s3:AccessGrantScope
- s3:AccessGrantsLocationScope
- s3:AccessPointTag/${TagKey}
- s3express:AccessPointTag/${TagKey}
- s3express:BucketTag/${TagKey}
- s3express:RequestTag/${TagKey}
- s3express:ResourceTag/${TagKey}
- s3express:TagKeys
- s3vectors:kmsKeyArn
- s3vectors:sseType
- sagemaker:PipelineVersionId
- sagemaker:RemoteAccess
- securityhub:OCSFSyntaxPath/${OCSFSyntaxPath}
- servicediscovery:ServiceCreatedByAccount
- ses:TenantName
- ssm:InventoryTypeName
- ssm:SessionDocumentAccessCheck
- transform:RequestTag/${TagKey}
- transform:TagKeys
- xray:ResourcePolicyName
- xray:TraceSegmentDestination

## [0.713.0] (2025-08-18)

:warning: **Removed services:**

- supportrecommendations

:warning: **Removed actions:**

- supportrecommendations:GetSupportTroubleshootingResponse
- supportrecommendations:StartSupportTroubleshooting

**New services:**

- arc-region-switch
- bcm-recommended-actions
- bedrock-agentcore
- network-security-director
- odb
- s3vectors
- uxc

**New actions:**

- bedrock-agentcore:AllowVendedLogDeliveryForResource
- bedrock-agentcore:ConnectBrowserAutomationStream
- bedrock-agentcore:ConnectBrowserLiveViewStream
- bedrock-agentcore:CreateAgentRuntime
- bedrock-agentcore:CreateAgentRuntimeEndpoint
- bedrock-agentcore:CreateApiKeyCredentialProvider
- bedrock-agentcore:CreateBrowser
- bedrock-agentcore:CreateCodeInterpreter
- bedrock-agentcore:CreateEvent
- bedrock-agentcore:CreateGateway
- bedrock-agentcore:CreateGatewayTarget
- bedrock-agentcore:CreateMemory
- bedrock-agentcore:CreateOauth2CredentialProvider
- bedrock-agentcore:CreateWorkloadIdentity
- bedrock-agentcore:DeleteAgentRuntime
- bedrock-agentcore:DeleteAgentRuntimeEndpoint
- bedrock-agentcore:DeleteApiKeyCredentialProvider
- bedrock-agentcore:DeleteBrowser
- bedrock-agentcore:DeleteCodeInterpreter
- bedrock-agentcore:DeleteEvent
- bedrock-agentcore:DeleteGateway
- bedrock-agentcore:DeleteGatewayTarget
- bedrock-agentcore:DeleteMemory
- bedrock-agentcore:DeleteMemoryRecord
- bedrock-agentcore:DeleteOauth2CredentialProvider
- bedrock-agentcore:DeleteWorkloadIdentity
- bedrock-agentcore:GetAgentRuntime
- bedrock-agentcore:GetAgentRuntimeEndpoint
- bedrock-agentcore:GetApiKeyCredentialProvider
- bedrock-agentcore:GetBrowser
- bedrock-agentcore:GetBrowserSession
- bedrock-agentcore:GetCodeInterpreter
- bedrock-agentcore:GetCodeInterpreterSession
- bedrock-agentcore:GetEvent
- bedrock-agentcore:GetGateway
- bedrock-agentcore:GetGatewayTarget
- bedrock-agentcore:GetMemory
- bedrock-agentcore:GetMemoryRecord
- bedrock-agentcore:GetOauth2CredentialProvider
- bedrock-agentcore:GetResourceApiKey
- bedrock-agentcore:GetResourceOauth2Token
- bedrock-agentcore:GetTokenVault
- bedrock-agentcore:GetWorkloadAccessToken
- bedrock-agentcore:GetWorkloadAccessTokenForJWT
- bedrock-agentcore:GetWorkloadAccessTokenForUserId
- bedrock-agentcore:GetWorkloadIdentity
- bedrock-agentcore:InvokeAgentRuntimeEndpoint
- bedrock-agentcore:InvokeCodeInterpreter
- bedrock-agentcore:ListActors
- bedrock-agentcore:ListAgentRuntimeEndpoints
- bedrock-agentcore:ListAgentRuntimeVersions
- bedrock-agentcore:ListAgentRuntimes
- bedrock-agentcore:ListApiKeyCredentialProviders
- bedrock-agentcore:ListBrowserSessions
- bedrock-agentcore:ListBrowsers
- bedrock-agentcore:ListCodeInterpreterSessions
- bedrock-agentcore:ListCodeInterpreters
- bedrock-agentcore:ListEvents
- bedrock-agentcore:ListGatewayTargets
- bedrock-agentcore:ListGateways
- bedrock-agentcore:ListMemories
- bedrock-agentcore:ListMemoryRecords
- bedrock-agentcore:ListOauth2CredentialProviders
- bedrock-agentcore:ListSessions
- bedrock-agentcore:ListWorkloadIdentities
- bedrock-agentcore:RetrieveMemoryRecords
- bedrock-agentcore:SetTokenVaultCMK
- bedrock-agentcore:StartBrowserSession
- bedrock-agentcore:StartCodeInterpreterSession
- bedrock-agentcore:StopBrowserSession
- bedrock-agentcore:StopCodeInterpreterSession
- bedrock-agentcore:SynchronizeGatewayTargets
- bedrock-agentcore:UpdateAgentRuntime
- bedrock-agentcore:UpdateAgentRuntimeEndpoint
- bedrock-agentcore:UpdateApiKeyCredentialProvider
- bedrock-agentcore:UpdateBrowserStream
- bedrock-agentcore:UpdateGateway
- bedrock-agentcore:UpdateGatewayTarget
- bedrock-agentcore:UpdateMemory
- bedrock-agentcore:UpdateOauth2CredentialProvider
- bedrock-agentcore:UpdateWorkloadIdentity
- network-security-director:GetFinding
- network-security-director:GetNetworkSecurityScan
- network-security-director:GetResource
- network-security-director:ListFindings
- network-security-director:ListInsights
- network-security-director:ListRemediations
- network-security-director:ListResources
- network-security-director:StartNetworkSecurityScan
- network-security-director:UpdateFinding
- odb:AcceptMarketplaceRegistration
- odb:CreateCloudAutonomousVmCluster
- odb:CreateCloudExadataInfrastructure
- odb:CreateCloudVmCluster
- odb:CreateDbNode
- odb:CreateOdbNetwork
- odb:CreateOdbPeeringConnection
- odb:CreateOutboundIntegration
- odb:DeleteCloudAutonomousVmCluster
- odb:DeleteCloudExadataInfrastructure
- odb:DeleteCloudVmCluster
- odb:DeleteDbNode
- odb:DeleteOdbNetwork
- odb:DeleteOdbPeeringConnection
- odb:DeleteResourcePolicy
- odb:GetCloudAutonomousVmCluster
- odb:GetCloudExadataInfrastructure
- odb:GetCloudExadataInfrastructureUnallocatedResources
- odb:GetCloudVmCluster
- odb:GetDbNode
- odb:GetDbServer
- odb:GetOciOnboardingStatus
- odb:GetOdbNetwork
- odb:GetOdbPeeringConnection
- odb:GetResourcePolicy
- odb:InitializeService
- odb:ListAutonomousVirtualMachines
- odb:ListCloudAutonomousVmClusters
- odb:ListCloudExadataInfrastructures
- odb:ListCloudVmClusters
- odb:ListDbNodes
- odb:ListDbServers
- odb:ListDbSystemShapes
- odb:ListGiVersions
- odb:ListOdbNetworks
- odb:ListOdbPeeringConnections
- odb:ListSystemVersions
- odb:ListTagsForResource
- odb:PutResourcePolicy
- odb:RebootDbNode
- odb:StartDbNode
- odb:StopDbNode
- odb:TagResource
- odb:UntagResource
- odb:UpdateCloudExadataInfrastructure
- odb:UpdateOdbNetwork
- s3vectors:CreateIndex
- s3vectors:CreateVectorBucket
- s3vectors:DeleteIndex
- s3vectors:DeleteVectorBucket
- s3vectors:DeleteVectorBucketPolicy
- s3vectors:DeleteVectors
- s3vectors:GetIndex
- s3vectors:GetVectorBucket
- s3vectors:GetVectorBucketPolicy
- s3vectors:GetVectors
- s3vectors:ListIndexes
- s3vectors:ListVectorBuckets
- s3vectors:ListVectors
- s3vectors:PutVectorBucketPolicy
- s3vectors:PutVectors
- s3vectors:QueryVectors

**New resource types:**

- bedrock-agentcore:apikeycredentialprovider
- bedrock-agentcore:browser
- bedrock-agentcore:browser-custom
- bedrock-agentcore:code-interpreter
- bedrock-agentcore:code-interpreter-custom
- bedrock-agentcore:gateway
- bedrock-agentcore:memory
- bedrock-agentcore:oauth2credentialprovider
- bedrock-agentcore:runtime
- bedrock-agentcore:runtime-endpoint
- bedrock-agentcore:workload-identity
- odb:cloud-autonomous-vm-cluster
- odb:cloud-exadata-infrastructure
- odb:cloud-vm-cluster
- odb:db-node
- odb:odb-network
- odb:odb-peering-connection
- s3vectors:Index
- s3vectors:VectorBucket

**New condition keys:**

- bedrock-agentcore:actorId
- bedrock-agentcore:namespace
- bedrock-agentcore:sessionId
- bedrock-agentcore:strategyId
- odb:RequestTag/${TagKey}
- odb:ResourceTag/${TagKey}
- odb:TagKeys
- s3vectors:kmsKeyArn
- s3vectors:sseType

## [0.712.0] (2025-07-20)

:warning: **Removed services:**

- supportrecommendations

:warning: **Removed actions:**

- supportrecommendations:GetSupportTroubleshootingResponse
- supportrecommendations:StartSupportTroubleshooting

**New services:**

- bedrock-agentcore
- network-security-director
- odb
- s3vectors

## [0.711.0](https://github.com/udondan/iam-floyd/compare/v0.710.0...v0.711.0) (2025-06-29)

:warning: **Removed resource types:**

- iotmanagedintegrations:CredentialLockerResource
- iotmanagedintegrations:ManagedThingResource
- iotmanagedintegrations:OtaTaskResource
- iotmanagedintegrations:ProvisioningProfileResource

**New services:**

- mpa

**New actions:**

- iotmanagedintegrations:CreateAccountAssociation
- iotmanagedintegrations:CreateCloudConnector
- iotmanagedintegrations:CreateConnectorDestination
- iotmanagedintegrations:DeleteAccountAssociation
- iotmanagedintegrations:DeleteCloudConnector
- iotmanagedintegrations:DeleteConnectorDestination
- iotmanagedintegrations:DeregisterAccountAssociation
- iotmanagedintegrations:GetAccountAssociation
- iotmanagedintegrations:GetCloudConnector
- iotmanagedintegrations:GetConnectorDestination
- iotmanagedintegrations:ListAccountAssociations
- iotmanagedintegrations:ListCloudConnectors
- iotmanagedintegrations:ListConnectorDestinations
- iotmanagedintegrations:ListDeviceDiscoveries
- iotmanagedintegrations:ListDiscoveredDevices
- iotmanagedintegrations:ListManagedThingAccountAssociations
- iotmanagedintegrations:ListTagsForResource
- iotmanagedintegrations:RegisterAccountAssociation
- iotmanagedintegrations:SendConnectorEvent
- iotmanagedintegrations:StartAccountAssociationRefresh
- iotmanagedintegrations:TagResource
- iotmanagedintegrations:UntagResource
- iotmanagedintegrations:UpdateAccountAssociation
- iotmanagedintegrations:UpdateCloudConnector
- iotmanagedintegrations:UpdateConnectorDestination

**Updated action access level:**

- iotmanagedintegrations:ListEventLogConfigurations: List -> Read
- iotmanagedintegrations:ListNotificationConfigurations: List -> Read
- iotmanagedintegrations:ListOtaTaskConfigurations: List -> Read

**New resource types:**

- iotmanagedintegrations:account-association
- iotmanagedintegrations:credential-locker
- iotmanagedintegrations:managed-thing
- iotmanagedintegrations:ota-task
- iotmanagedintegrations:provisioning-profile

**New condition keys:**

- iotmanagedintegrations:RequestTag/${TagKey}
- iotmanagedintegrations:ResourceTag/${TagKey}
- iotmanagedintegrations:TagKeys

## [0.710.0](https://github.com/udondan/iam-floyd/compare/v0.709.0...v0.710.0) (2025-06-15)

**New services:**

- evs
- support-console
- workspaces-instances

## [0.709.0](https://github.com/udondan/iam-floyd/compare/v0.708.0...v0.709.0) (2025-06-08)

:warning: **Removed services:**

- uxc

:warning: **Removed actions:**

- uxc:DeleteAccountColor
- uxc:GetAccountColor
- uxc:PutAccountColor

## [0.708.0](https://github.com/udondan/iam-floyd/compare/v0.707.0...v0.708.0) (2025-06-01)

:warning: **Removed services:**

- sagemaker-groundtruth-synthetic

:warning: **Removed actions:**

- sagemaker-groundtruth-synthetic:CreateProject
- sagemaker-groundtruth-synthetic:DeleteProject
- sagemaker-groundtruth-synthetic:GetAccountDetails
- sagemaker-groundtruth-synthetic:GetBatch
- sagemaker-groundtruth-synthetic:GetProject
- sagemaker-groundtruth-synthetic:ListBatchDataTransfers
- sagemaker-groundtruth-synthetic:ListBatchSummaries
- sagemaker-groundtruth-synthetic:ListProjectDataTransfers
- sagemaker-groundtruth-synthetic:ListProjectSummaries
- sagemaker-groundtruth-synthetic:StartBatchDataTransfer
- sagemaker-groundtruth-synthetic:StartProjectDataTransfer
- sagemaker-groundtruth-synthetic:UpdateBatch

**New services:**

- transform
- uxc

## [0.707.0](https://github.com/udondan/iam-floyd/compare/v0.706.0...v0.707.0) (2025-05-15)

**New actions:**

- dsql:AddPeerCluster
- dsql:PutMultiRegionProperties
- dsql:PutWitnessRegion
- dsql:RemovePeerCluster

## [0.706.0](https://github.com/udondan/iam-floyd/compare/v0.703.0...v0.706.0) (2025-05-14)

:warning: **Removed actions:**

- medialive:ListSdiSource

**New actions:**

- ec2:CreateLocalGatewayVirtualInterface
- ec2:CreateLocalGatewayVirtualInterfaceGroup
- ec2:DeleteLocalGatewayVirtualInterface
- ec2:DeleteLocalGatewayVirtualInterfaceGroup
- ec2:DescribeOutpostLags
- ec2:DescribeServiceLinkVirtualInterfaces
- medialive:ListSdiSources
- q:DeleteConversation
- q:UpdateConversation
- qbusiness:CreateAnonymousWebExperienceUrl
- scn:CreateDataLakeNamespace
- scn:DeleteDataLakeNamespace
- scn:GetDataIntegrationEvent
- scn:GetDataIntegrationFlowExecution
- scn:GetDataLakeNamespace
- scn:ListDataIntegrationEvents
- scn:ListDataIntegrationFlowExecutions
- scn:ListDataLakeNamespaces
- scn:UpdateDataLakeNamespace
- synthetics:StartCanaryDryRun
- verifiedpermissions:ListTagsForResource
- verifiedpermissions:TagResource
- verifiedpermissions:UntagResource

**Updated action access level:**

- s3:AssociateAccessGrantsIdentityCenter: Write -> Permissions management
-s3:CreateAccessGrant;Write
-s3:CreateAccessGrantsInstance;Write
- s3:CreateAccessGrantsLocation: Write -> Permissions management
+s3:CreateAccessGrantsInstance;Permissions management
+s3:CreateAccessGrantsLocation;Permissions management
- s3:CreateAccessGrantsInstance: Write -> Permissions management
- s3:CreateAccessGrantsLocation: Write -> Permissions management
-s3:DeleteAccessGrant;Write
-s3:DeleteAccessGrantsInstance;Write
-s3:DeleteAccessGrantsInstanceResourcePolicy;Write
- s3:DeleteAccessGrantsLocation: Write -> Permissions management
+s3:DeleteAccessGrantsInstance;Permissions management
+s3:DeleteAccessGrantsInstanceResourcePolicy;Permissions management
+s3:DeleteAccessGrantsLocation;Permissions management
-s3:DeleteAccessGrantsInstance;Write
- s3:DeleteAccessGrantsInstanceResourcePolicy: Write -> Permissions management
+s3:DeleteAccessGrantsInstanceResourcePolicy;Permissions management
- s3:DeleteAccessGrantsInstanceResourcePolicy: Write -> Permissions management
- s3:DeleteAccessGrantsLocation: Write -> Permissions management
- s3:DissociateAccessGrantsIdentityCenter: Write -> Permissions management
- s3:PutAccessGrantsInstanceResourcePolicy: Write -> Permissions management
- s3:UpdateAccessGrantsLocation: Write -> Permissions management

**New resource types:**

- ec2:outpost-lag
- scn:namespace
- sts:context-provider

**New condition keys:**

- verifiedpermissions:RequestTag/${TagKey}
- verifiedpermissions:ResourceTag/${TagKey}
- verifiedpermissions:TagKeys

## [0.705.0] (2025-05-13)

:warning: **Removed actions:**

- medialive:ListSdiSource

**New actions:**

- medialive:ListSdiSources
- q:DeleteConversation
- q:UpdateConversation
- qbusiness:CreateAnonymousWebExperienceUrl
- verifiedpermissions:ListTagsForResource
- verifiedpermissions:TagResource
- verifiedpermissions:UntagResource

**New resource types:**

- sts:context-provider

**New condition keys:**

- verifiedpermissions:RequestTag/${TagKey}
- verifiedpermissions:ResourceTag/${TagKey}
- verifiedpermissions:TagKeys

## [0.704.0] (2025-05-07)

**New actions:**

- qbusiness:CreateAnonymousWebExperienceUrl
- verifiedpermissions:ListTagsForResource
- verifiedpermissions:TagResource
- verifiedpermissions:UntagResource

**New resource types:**

- sts:context-provider

**New condition keys:**

- verifiedpermissions:RequestTag/${TagKey}
- verifiedpermissions:ResourceTag/${TagKey}
- verifiedpermissions:TagKeys

## [0.703.0](https://github.com/udondan/iam-floyd/compare/v0.702.0...v0.703.0) (2025-05-01)

**New actions:**

- kinesis:ListTagsForResource
- kinesis:TagResource
- kinesis:UntagResource
- ssm-guiconnect:DeleteConnectionRecordingPreferences
- ssm-guiconnect:GetConnectionRecordingPreferences
- ssm-guiconnect:UpdateConnectionRecordingPreferences
- ssm:GetAccessToken
- ssm:StartAccessRequest

**New resource types:**

- route53resolver:autodefined-rule

**New condition keys:**

- deadline:CalledAction
- ssm:AccessRequestId

## [0.702.0](https://github.com/udondan/iam-floyd/compare/v0.701.0...v0.702.0) (2025-04-30)

**New actions:**

- dsql:GetVpcEndpointServiceName
- ec2:AssociateRouteServer
- ec2:CreateRouteServer
- ec2:CreateRouteServerEndpoint
- ec2:CreateRouteServerPeer
- ec2:DeleteRouteServer
- ec2:DeleteRouteServerEndpoint
- ec2:DeleteRouteServerPeer
- ec2:DescribeRouteServerEndpoints
- ec2:DescribeRouteServerPeers
- ec2:DescribeRouteServers
- ec2:DisableRouteServerPropagation
- ec2:DisassociateRouteServer
- ec2:EnableRouteServerPropagation
- ec2:GetRouteServerAssociations
- ec2:GetRouteServerPropagations
- ec2:GetRouteServerRoutingDatabase
- ec2:ModifyRouteServer

**New resource types:**

- ec2:route-server
- ec2:route-server-endpoint
- ec2:route-server-peer

**New condition keys:**

- ec2:AvailabilityZoneId
- ec2:EphemeralStorage

## [0.701.0](https://github.com/udondan/iam-floyd/compare/v0.700.0...v0.701.0) (2025-04-29)

:warning: **Removed actions:**

- dms:CancelMetadataModelAssessment
- dms:CancelMetadataModelConversion
- dms:CancelMetadataModelExport
- dms:DescribeDataProviders
- dms:DescribeExtensionPackAssociations
- dms:DescribeInstanceProfiles
- dms:DescribeMetadataModelAssessments
- dms:DescribeMetadataModelConversions
- dms:DescribeMetadataModelExportsAsScript
- dms:DescribeMetadataModelExportsToTarget
- dms:DescribeMigrationProjects
- dms:DisassociateExtensionPack
- dms:GetMetadataModel
- dms:ModifyConversionConfiguration
- dms:ModifyDataProvider
- dms:ModifyInstanceProfile
- dms:ModifyMigrationProject
- dms:StartExtensionPackAssociation
- dms:StartMetadataModelExportAsScript

**New actions:**

- cloudfront:AssociateDistributionTenantWebACL
- cloudfront:AssociateDistributionWebACL
- cloudfront:CreateConnectionGroup
- cloudfront:CreateDistributionTenant
- cloudfront:CreateInvalidationForDistributionTenant
- cloudfront:DeleteConnectionGroup
- cloudfront:DeleteDistributionTenant
- cloudfront:DisassociateDistributionTenantWebACL
- cloudfront:DisassociateDistributionWebACL
- cloudfront:GetConnectionGroup
- cloudfront:GetConnectionGroupByRoutingEndpoint
- cloudfront:GetDistributionTenant
- cloudfront:GetDistributionTenantByDomain
- cloudfront:GetInvalidationForDistributionTenant
- cloudfront:GetManagedCertificateDetails
- cloudfront:ListConnectionGroups
- cloudfront:ListDistributionTenants
- cloudfront:ListDistributionTenantsByCustomization
- cloudfront:ListDistributionsByConnectionMode
- cloudfront:ListDomainConflicts
- cloudfront:ListInvalidationsForDistributionTenant
- cloudfront:UpdateConnectionGroup
- cloudfront:UpdateDistributionTenant
- cloudfront:UpdateDomainAssociation
- cloudfront:VerifyDnsConfiguration
- q:UpdatePlugin

**Updated action access level:**

- opensearch:ApplicationAccessAll: Write -> Permissions management
- s3express:CreateSession: Read -> Write

**New resource types:**

- cloudfront:connection-group
- cloudfront:distribution-tenant

**New condition keys:**

- bedrock:InlineAgentName

## [0.700.0](https://github.com/udondan/iam-floyd/compare/v0.699.0...v0.700.0) (2025-04-26)

:warning: **Removed resource types:**

- pca-connector-ad:ServicePrincipalName
- pca-connector-ad:TemplateGroupAccessControlEntry

**New actions:**

- mq:DeleteConfiguration

## [0.699.0](https://github.com/udondan/iam-floyd/compare/v0.698.0...v0.699.0) (2025-04-24)

**New actions:**

- redshift-serverless:CreateReservation
- redshift-serverless:GetReservation
- redshift-serverless:GetReservationOffering
- redshift-serverless:ListReservationOfferings
- redshift-serverless:ListReservations

## [0.698.0](https://github.com/udondan/iam-floyd/compare/v0.697.0...v0.698.0) (2025-04-23)

**New actions:**

- account:PutAccountName
- ecs:StopServiceDeployment
- qbusiness:CheckDocumentAccess

## [0.697.0](https://github.com/udondan/iam-floyd/compare/v0.696.0...v0.697.0) (2025-04-22)

**New condition keys:**

- apigateway:Request/CognitoUserPoolProviderArn
- apigateway:Resource/CognitoUserPoolProviderArn
- ssm:DocumentType

## [0.696.0](https://github.com/udondan/iam-floyd/compare/v0.695.0...v0.696.0) (2025-04-19)

**New actions:**

- omics:CreateWorkflowVersion
- omics:DeleteWorkflowVersion
- omics:GetWorkflowVersion
- omics:ListWorkflowVersions
- omics:UpdateWorkflowVersion

**New resource types:**

- omics:WorkflowVersion

## [0.695.0](https://github.com/udondan/iam-floyd/compare/v0.694.0...v0.695.0) (2025-04-18)

**New actions:**

- aps:DescribeWorkspaceConfiguration
- aps:UpdateWorkspaceConfiguration
- aws-marketplace:GetAgreementEntitlements
- m2:CreateDataSetExportTask
- m2:GetDataSetExportTask
- m2:ListDataSetExportHistory
- medialive:CreateSdiSource
- medialive:DeleteSdiSource
- medialive:DescribeSdiSource
- medialive:ListSdiSource
- medialive:UpdateSdiSource
- s3tables:DeleteTableBucketEncryption
- s3tables:GetTableBucketEncryption
- s3tables:GetTableEncryption
- s3tables:PutTableBucketEncryption
- s3tables:PutTableEncryption
- transfer:StartRemoteDelete
- transfer:StartRemoteMove

**New resource types:**

- elasticloadbalancing:listener/gwy
- elasticloadbalancing:loadbalancer/gwy/
- medialive:sdi-source

**New condition keys:**

- s3tables:KMSKeyArn
- s3tables:SSEAlgorithm

## [0.694.0](https://github.com/udondan/iam-floyd/compare/v0.693.0...v0.694.0) (2025-04-10)

**New resource types:**

- appstudio:application
- appstudio:connector
- appstudio:instance

## [0.693.0](https://github.com/udondan/iam-floyd/compare/v0.691.0...v0.693.0) (2025-04-09)

**New actions:**

- codebuild:BatchGetCommandExecutions
- codebuild:BatchGetSandboxes
- codebuild:ListCommandExecutionsForSandbox
- codebuild:ListSandboxes
- codebuild:ListSandboxesForProject
- codebuild:StartCommandExecution
- codebuild:StartSandbox
- codebuild:StartSandboxConnection
- codebuild:StopSandbox
- q:DeleteOAuthAppConnection
- q:GenerateCodeRecommendations
- q:VerifyOAuthAppConnection

**New resource types:**

- codebuild:sandbox

**New condition keys:**

- user-subscriptions:CreateForSelf

## [0.692.0] (2025-04-08)

**New actions:**

- codebuild:BatchGetCommandExecutions
- codebuild:BatchGetSandboxes
- codebuild:ListCommandExecutionsForSandbox
- codebuild:ListSandboxes
- codebuild:ListSandboxesForProject
- codebuild:StartCommandExecution
- codebuild:StartSandbox
- codebuild:StartSandboxConnection
- codebuild:StopSandbox

**New resource types:**

- codebuild:sandbox

**New condition keys:**

- user-subscriptions:CreateForSelf

## [0.691.0](https://github.com/udondan/iam-floyd/compare/v0.690.0...v0.691.0) (2025-04-01)

**New actions:**

- s3express:CreateAccessPoint
- s3express:DeleteAccessPoint
- s3express:DeleteAccessPointPolicy
- s3express:DeleteAccessPointScope
- s3express:GetAccessPoint
- s3express:GetAccessPointPolicy
- s3express:GetAccessPointScope
- s3express:ListAccessPointsForDirectoryBuckets
- s3express:PutAccessPointPolicy
- s3express:PutAccessPointScope

**New resource types:**

- s3express:accesspoint

**New condition keys:**

- s3express:AccessPointNetworkOrigin
- s3express:DataAccessPointAccount
- s3express:DataAccessPointArn
- s3express:Permissions

## [0.690.0](https://github.com/udondan/iam-floyd/compare/v0.689.0...v0.690.0) (2025-03-29)

**New actions:**

- healthlake:ProcessBundle
- iot:ListPrincipalThingsV2
- iot:ListThingPrincipalsV2

**New resource types:**

- wafv2:amplify-app

**New condition keys:**

- iot:thingArn

## [0.689.0](https://github.com/udondan/iam-floyd/compare/v0.687.0...v0.689.0) (2025-03-28)

**New actions:**

- datazone:GetUpdateEligibility
- mediapackagev2:ResetChannelState
- mediapackagev2:ResetOriginEndpointState
- network-firewall:DescribeFlowOperation
- network-firewall:ListFlowOperationResults
- network-firewall:ListFlowOperations
- network-firewall:StartFlowCapture
- network-firewall:StartFlowFlush
- route53-recovery-control-config:DeleteResourcePolicy
- route53-recovery-control-config:PutResourcePolicy

## [0.688.0] (2025-03-26)

**New actions:**

- datazone:GetUpdateEligibility
- route53-recovery-control-config:DeleteResourcePolicy
- route53-recovery-control-config:PutResourcePolicy

## [0.687.0](https://github.com/udondan/iam-floyd/compare/v0.686.0...v0.687.0) (2025-03-22)

**New actions:**

- connect:ListAnalyticsDataLakeDataSets
- lakeformation:RegisterResourceWithPrivilegedAccess
- route53-recovery-control-config:UpdateCluster

## [0.686.0](https://github.com/udondan/iam-floyd/compare/v0.685.0...v0.686.0) (2025-03-20)

**New actions:**

- cleanrooms:GetProtectedJob
- cleanrooms:ListProtectedJobs
- cleanrooms:StartProtectedJob
- cleanrooms:UpdateProtectedJob

## [0.685.0](https://github.com/udondan/iam-floyd/compare/v0.684.0...v0.685.0) (2025-03-19)

:warning: **Removed actions:**

- one:DeleteUser
- one:ListUsers

**New actions:**

- one:DeleteUserV1
- one:ListUsersV1

## [0.684.0](https://github.com/udondan/iam-floyd/compare/v0.683.0...v0.684.0) (2025-03-18)

:warning: **Removed services:**

- deeplens

:warning: **Removed actions:**

- deeplens:AssociateServiceRoleToAccount
- deeplens:BatchGetDevice
- deeplens:BatchGetModel
- deeplens:BatchGetProject
- deeplens:CreateDeviceCertificates
- deeplens:CreateModel
- deeplens:CreateProject
- deeplens:DeleteModel
- deeplens:DeleteProject
- deeplens:DeployProject
- deeplens:DeregisterDevice
- deeplens:GetAssociatedResources
- deeplens:GetDeploymentStatus
- deeplens:GetDevice
- deeplens:GetModel
- deeplens:GetProject
- deeplens:ImportProjectFromTemplate
- deeplens:ListDeployments
- deeplens:ListDevices
- deeplens:ListModels
- deeplens:ListProjects
- deeplens:RegisterDevice
- deeplens:RemoveProject
- deeplens:UpdateProject

:warning: **Removed resource types:**

- deeplens:device
- deeplens:model
- deeplens:project

**New actions:**

- application-signals:BatchUpdateExclusionWindows
- application-signals:ListServiceLevelObjectiveExclusionWindows
- mediaconvert:Probe

## [0.683.0](https://github.com/udondan/iam-floyd/compare/v0.682.0...v0.683.0) (2025-03-14)

:warning: **Removed actions:**

- account:GetChallengeQuestions
- account:PutChallengeQuestions

**New actions:**

- batch:CreateConsumableResource
- batch:DeleteConsumableResource
- batch:DescribeConsumableResource
- batch:ListConsumableResources
- batch:ListJobsByConsumableResource
- batch:UpdateConsumableResource

**New resource types:**

- batch:consumable-resource

**New condition keys:**

- sagemaker:ModelLifeCycle

## [0.682.0](https://github.com/udondan/iam-floyd/compare/v0.681.0...v0.682.0) (2025-03-12)

**New actions:**

- bedrock:CreatePromptRouter
- bedrock:DeletePromptRouter

**New resource types:**

- bedrock:prompt-router

## [0.681.0](https://github.com/udondan/iam-floyd/compare/v0.680.0...v0.681.0) (2025-03-11)

**New actions:**

- elasticloadbalancing:ModifyIpPools
- support:GetInteraction
- support:StartInteraction

**New condition keys:**

- codeconnections:VpcId
- codestar-connections:VpcId

## [0.680.0](https://github.com/udondan/iam-floyd/compare/v0.679.0...v0.680.0) (2025-03-08)

**New services:**

- gameliftstreams

**New actions:**

- rum:DeleteResourcePolicy
- rum:GetResourcePolicy
- rum:PutResourcePolicy
- sso-directory:IsMemberInGroups
- workspaces:ModifyEndpointEncryptionMode

**New condition keys:**

- bedrock:GuardrailIdentifier
- connect:Channel
- connect:ContactAssociationId

## [0.679.0](https://github.com/udondan/iam-floyd/compare/v0.678.0...v0.679.0) (2025-03-05)

**New services:**

- iotmanagedintegrations

**New actions:**

- ecr:GetImageCopyStatus
- storagegateway:EvictFilesFailingUpload

## [0.678.0](https://github.com/udondan/iam-floyd/compare/v0.677.0...v0.678.0) (2025-03-01)

**New services:**

- qdeveloper

**New actions:**

- redshift-serverless:GetTrack
- redshift-serverless:ListTracks
- sagemaker:TrainHubModel
- sagemaker:UpdateHubContent
- sagemaker:UpdateHubContentReference

**New resource types:**

- bedrock:data-automation-profile

**New condition keys:**

- sagemaker:DirectGatedModelAccess

## [0.677.0](https://github.com/udondan/iam-floyd/compare/v0.676.0...v0.677.0) (2025-02-28)

**New actions:**

- application-signals:Link
- bedrock:CreateInvocation
- bedrock:CreateSession
- bedrock:DeleteSession
- bedrock:EndSession
- bedrock:GetInvocationStep
- bedrock:GetSession
- bedrock:ListInvocationSteps
- bedrock:ListInvocations
- bedrock:ListSessions
- bedrock:PutInvocationStep
- bedrock:UpdateSession
- ses:PutConfigurationSetArchivingOptions

**New resource types:**

- bedrock:session

## [0.676.0](https://github.com/udondan/iam-floyd/compare/v0.675.0...v0.676.0) (2025-02-27)

**New actions:**

- cloudshell:ApproveCommand

**New condition keys:**

- ecs:auto-assign-public-ip
- ecs:compute-compatibility
- ecs:enable-ecs-managed-tags
- ecs:privileged
- ecs:propagate-tags
- ecs:subnet
- ecs:task-cpu
- ecs:task-memory

## [0.675.0](https://github.com/udondan/iam-floyd/compare/v0.674.0...v0.675.0) (2025-02-21)

:warning: **Removed resource types:**

- partnercentral:selling-system-settings

**New actions:**

- network-firewall:GetAnalysisReportResults
- network-firewall:ListAnalysisReports
- network-firewall:StartAnalysisReport
- network-firewall:UpdateFirewallAnalysisSettings
- storagegateway:CancelCacheReport
- storagegateway:DeleteCacheReport
- storagegateway:DescribeCacheReport
- storagegateway:ListCacheReports
- storagegateway:StartCacheReport

**New resource types:**

- storagegateway:cache-report

## [0.674.0](https://github.com/udondan/iam-floyd/compare/v0.673.0...v0.674.0) (2025-02-19)

**New actions:**

- emr-containers:CreateCertificate
- timestream-influxdb:CreateDbCluster
- timestream-influxdb:DeleteDbCluster
- timestream-influxdb:GetDbCluster
- timestream-influxdb:ListDbClusters
- timestream-influxdb:ListDbInstancesForCluster
- timestream-influxdb:UpdateDbCluster

**New resource types:**

- emr-containers:certificate
- timestream-influxdb:db-cluster

## [0.673.0](https://github.com/udondan/iam-floyd/compare/v0.672.0...v0.673.0) (2025-02-15)

:warning: **Removed condition keys:**

- datapipeline:Tag

**New actions:**

- cases:BatchGetCaseRule
- cases:CreateCaseRule
- cases:DeleteCaseRule
- cases:ListCaseRules
- cases:UpdateCaseRule
- connect:CreateContact
- healthlake:GetHistoryByResourceId
- healthlake:VersionReadResource

**New resource types:**

- cases:CaseRule

**New condition keys:**

- connect:ContactInitiationMethod
- datapipeline:Tag/${TagKey}

## [0.672.0](https://github.com/udondan/iam-floyd/compare/v0.671.0...v0.672.0) (2025-02-12)

**New actions:**

- q:AssociateConnectorResource
- q:CreateAuthGrant
- q:CreateOAuthAppConnection
- q:GetConnector
- q:RejectConnector
- q:SendEvent
- q:UpdateAuthGrant
- q:UpdateOAuthAppConnection

## [0.671.0](https://github.com/udondan/iam-floyd/compare/v0.670.0...v0.671.0) (2025-02-08)

**New actions:**

- cloudformation:CreateStackRefactor
- cloudformation:DescribeStackRefactor
- cloudformation:ExecuteStackRefactor
- cloudformation:ListStackRefactorActions
- cloudformation:ListStackRefactors

## [0.670.0](https://github.com/udondan/iam-floyd/compare/v0.669.0...v0.670.0) (2025-02-07)

**New actions:**

- amplify:AssociateWebACL
- amplify:DisassociateWebACL
- amplify:GetWebACLForResource
- amplify:ListResourcesForWebACL
- ses:CreateAddressList
- ses:CreateAddressListImportJob
- ses:DeleteAddressList
- ses:DeregisterMemberFromAddressList
- ses:GetAddressList
- ses:GetAddressListImportJob
- ses:GetMemberOfAddressList
- ses:ListAddressListImportJobs
- ses:ListAddressLists
- ses:ListMembersOfAddressList
- ses:RegisterMemberToAddressList
- ses:StartAddressListImportJob
- ses:StopAddressListImportJob

**New resource types:**

- ses:mailmanager-address-list

## [0.669.0](https://github.com/udondan/iam-floyd/compare/v0.668.0...v0.669.0) (2025-02-04)

:warning: **Removed services:**

- elastic-inference

:warning: **Removed actions:**

- elastic-inference:Connect
- elastic-inference:DescribeAcceleratorOfferings
- elastic-inference:DescribeAcceleratorTypes
- elastic-inference:DescribeAccelerators
- elastic-inference:ListTagsForResource
- elastic-inference:TagResource
- elastic-inference:UntagResource

:warning: **Removed resource types:**

- elastic-inference:accelerator

**New actions:**

- ec2:ModifyInstanceNetworkPerformanceOptions
- qbusiness:DeleteAttachment

**New condition keys:**

- ec2:InstanceBandwidthWeighting

## [0.668.0](https://github.com/udondan/iam-floyd/compare/v0.667.0...v0.668.0) (2025-01-30)

**New actions:**

- cloudtrail:SearchSampleQueries
- deadline:CreateLimit
- deadline:CreateQueueLimitAssociation
- deadline:DeleteLimit
- deadline:DeleteQueueLimitAssociation
- deadline:GetLimit
- deadline:GetQueueLimitAssociation
- deadline:ListLimits
- deadline:ListQueueLimitAssociations
- deadline:UpdateLimit
- deadline:UpdateQueueLimitAssociation
- transcribe:GetMedicalScribeStream
- transcribe:StartMedicalScribeStream

**Updated action access level:**

- deadline:GetJobTemplate: Write -> Read

## [0.667.0](https://github.com/udondan/iam-floyd/compare/v0.666.0...v0.667.0) (2025-01-25)

**New actions:**

- connect:DeleteContactFlowVersion
- healthlake:GetExportedFile
- healthlake:StartFHIRExportJobWithGet

**New condition keys:**

- datazone:domainId
- datazone:projectId
- datazone:userId

## [0.666.0](https://github.com/udondan/iam-floyd/compare/v0.665.0...v0.666.0) (2025-01-22)

**New actions:**

- connect:CreateEmailAddress
- connect:DeleteEmailAddress
- connect:DescribeEmailAddress
- connect:ListAssociatedContacts
- connect:SearchEmailAddresses
- connect:StartOutboundEmailContact
- connect:UpdateEmailAddressMetadata
- connect:UpdateQueueOutboundEmailConfig

**New resource types:**

- connect:email-address

**New condition keys:**

- codebuild:buildArn
- codebuild:projectArn

## [0.665.0](https://github.com/udondan/iam-floyd/compare/v0.664.0...v0.665.0) (2025-01-18)

**New actions:**

- notifications:AssociateManagedNotificationAccountContact
- notifications:AssociateManagedNotificationAdditionalChannel
- notifications:DisableNotificationsAccessForOrganization
- notifications:DisassociateManagedNotificationAccountContact
- notifications:DisassociateManagedNotificationAdditionalChannel
- notifications:EnableNotificationsAccessForOrganization
- notifications:GetFeatureOptInStatus
- notifications:GetManagedNotificationChildEvent
- notifications:GetManagedNotificationConfiguration
- notifications:GetManagedNotificationEvent
- notifications:GetNotificationsAccessForOrganization
- notifications:ListManagedNotificationChannelAssociations
- notifications:ListManagedNotificationChildEvents
- notifications:ListManagedNotificationConfigurations
- notifications:ListManagedNotificationEvents
- notifications:PutFeatureOptInStatus
- partnercentral:ListTagsForResource
- partnercentral:TagResource
- partnercentral:UntagResource

**Updated action access level:**

- notifications:ListTagsForResource: Read -> List

**New resource types:**

- notifications:ManagedNotificationChildEvent
- notifications:ManagedNotificationConfiguration
- notifications:ManagedNotificationEvent
- partnercentral:selling-system-settings

**New condition keys:**

- lakeformation:EnabledOnlyForMetaDataAccess
- partnercentral:RequestTag/${TagKey}
- partnercentral:ResourceTag/${TagKey}
- partnercentral:TagKeys

## [0.664.0](https://github.com/udondan/iam-floyd/compare/v0.663.0...v0.664.0) (2025-01-16)

**New resource types:**

- execute-api:execute-api-domain

**New condition keys:**

- execute-api:viaDomainArn

## [0.663.0](https://github.com/udondan/iam-floyd/compare/v0.661.0...v0.663.0) (2025-01-15)

**New actions:**

- datasync:UpdateLocationEfs
- datasync:UpdateLocationFsxLustre
- datasync:UpdateLocationFsxOntap
- datasync:UpdateLocationFsxOpenZfs
- datasync:UpdateLocationFsxWindows
- datasync:UpdateLocationS3
- kafkaconnect:DescribeConnectorOperation
- kafkaconnect:ListConnectorOperations

**New resource types:**

- kafkaconnect:connector operation

## [0.662.0] (2025-01-14)

**New actions:**

- datasync:UpdateLocationEfs
- datasync:UpdateLocationFsxLustre
- datasync:UpdateLocationFsxOntap
- datasync:UpdateLocationFsxOpenZfs
- datasync:UpdateLocationFsxWindows
- datasync:UpdateLocationS3

## [0.661.0](https://github.com/udondan/iam-floyd/compare/v0.660.0...v0.661.0) (2025-01-12)

**New actions:**

- apigateway:CreateAccessAssociation
- apigateway:RejectAccessAssociation
- apigateway:UpdateDomainNameManagementPolicy
- apigateway:UpdateDomainNamePolicy
- imagebuilder:ImportDiskImage
- medialive:ListVersions

**New resource types:**

- apigateway:DomainNameAccessAssociation
- apigateway:DomainNameAccessAssociations
- apigateway:PrivateBasePathMapping
- apigateway:PrivateBasePathMappings
- apigateway:PrivateDomainName

**New condition keys:**

- apigateway:Request/AccessAssociationSource
- apigateway:Request/DomainNameArn

## [0.660.0](https://github.com/udondan/iam-floyd/compare/v0.659.0...v0.660.0) (2025-01-10)

**New actions:**

- workspaces-web:AssociateDataProtectionSettings
- workspaces-web:CreateDataProtectionSettings
- workspaces-web:DeleteDataProtectionSettings
- workspaces-web:DisassociateDataProtectionSettings
- workspaces-web:GetDataProtectionSettings
- workspaces-web:ListDataProtectionSettings
- workspaces-web:UpdateDataProtectionSettings

**Updated action access level:**

- s3:PutBucketOwnershipControls: Write -> Permissions management

**New resource types:**

- workspaces-web:dataProtectionSettings

**New condition keys:**

- secretsmanager:KmsKeyArn

## [0.659.0](https://github.com/udondan/iam-floyd/compare/v0.658.0...v0.659.0) (2025-01-05)

:warning: **Removed services:**

- iot1click
- iotroborunner

:warning: **Removed actions:**

- cloudhsm:AddTagsToResource
- cloudhsm:CreateHapg
- cloudhsm:CreateLunaClient
- cloudhsm:DeleteHapg
- cloudhsm:DeleteLunaClient
- cloudhsm:DescribeHapg
- cloudhsm:DescribeHsm
- cloudhsm:DescribeLunaClient
- cloudhsm:GetConfig
- cloudhsm:ListAvailableZones
- cloudhsm:ListHapgs
- cloudhsm:ListHsms
- cloudhsm:ListLunaClients
- cloudhsm:ListTagsForResource
- cloudhsm:ModifyHapg
- cloudhsm:ModifyHsm
- cloudhsm:ModifyLunaClient
- cloudhsm:RemoveTagsFromResource
- elemental-activations:GetActivation
- elemental-activations:ListTagsForResource
- elemental-activations:StartAccountRegistration
- elemental-activations:TagResource
- elemental-activations:UntagResource
- elemental-appliances-software:ListTagsForResource
- elemental-appliances-software:TagResource
- elemental-appliances-software:UntagResource
- glue:BatchPutDataQualityStatisticAnnotation
- glue:ListDataQualityStatisticAnnotations
- glue:ListDataQualityStatistics
- iot1click:AssociateDeviceWithPlacement
- iot1click:ClaimDevicesByClaimCode
- iot1click:CreatePlacement
- iot1click:CreateProject
- iot1click:DeletePlacement
- iot1click:DeleteProject
- iot1click:DescribeDevice
- iot1click:DescribePlacement
- iot1click:DescribeProject
- iot1click:DisassociateDeviceFromPlacement
- iot1click:FinalizeDeviceClaim
- iot1click:GetDeviceMethods
- iot1click:GetDevicesInPlacement
- iot1click:InitiateDeviceClaim
- iot1click:InvokeDeviceMethod
- iot1click:ListDeviceEvents
- iot1click:ListDevices
- iot1click:ListPlacements
- iot1click:ListProjects
- iot1click:ListTagsForResource
- iot1click:TagResource
- iot1click:UnclaimDevice
- iot1click:UntagResource
- iot1click:UpdateDeviceState
- iot1click:UpdatePlacement
- iot1click:UpdateProject
- iotroborunner:CreateDestination
- iotroborunner:CreateSite
- iotroborunner:CreateWorker
- iotroborunner:CreateWorkerFleet
- iotroborunner:DeleteDestination
- iotroborunner:DeleteSite
- iotroborunner:DeleteWorker
- iotroborunner:DeleteWorkerFleet
- iotroborunner:GetDestination
- iotroborunner:GetSite
- iotroborunner:GetWorker
- iotroborunner:GetWorkerFleet
- iotroborunner:ListDestinations
- iotroborunner:ListSites
- iotroborunner:ListWorkerFleets
- iotroborunner:ListWorkers
- iotroborunner:UpdateDestination
- iotroborunner:UpdateSite
- iotroborunner:UpdateWorker
- iotroborunner:UpdateWorkerFleet
- rds:DescribeDbSnapshotTenantDatabases

:warning: **Removed condition keys:**

- elemental-activations:RequestTag/${TagKey}
- elemental-activations:ResourceTag/${TagKey}
- elemental-activations:TagKeys
- elemental-appliances-software:RequestTag/${TagKey}
- elemental-appliances-software:ResourceTag/${TagKey}
- elemental-appliances-software:TagKeys
- iot1click:RequestTag/${TagKey}
- iot1click:ResourceTag/${TagKey}
- iot1click:TagKeys
- iotroborunner:DestinationResourceId
- iotroborunner:SiteResourceId
- iotroborunner:WorkerFleetResourceId
- iotroborunner:WorkerResourceId
- omics:AnnotationImportJobJobId
- omics:AnnotationStoreName
- omics:AnnotationStoreVersionName
- omics:VariantImportJobJobId
- omics:VariantStoreName
- ssm:SessionDocumentAccessCheck

:warning: **Removed resource types:**

- elemental-activations:activation
- iot1click:device
- iot1click:project
- iotroborunner:DestinationResource
- iotroborunner:SiteResource
- iotroborunner:WorkerFleetResource
- iotroborunner:WorkerResource
- omics:AnnotationImportJob
- omics:VariantImportJob

**New services:**

- aiops
- backup-search
- bcm-pricing-calculator
- ds-data
- dsql
- geo-maps
- geo-places
- geo-routes
- networkflowmonitor
- observabilityadmin
- opensearch
- partnercentral
- pcs
- s3tables
- sagemaker-data-science-assistant
- security-ir
- social-messaging
- vpce

**New actions:**

- access-analyzer:UpdateAnalyzer
- airflow:InvokeRestApi
- app-integrations:UpdateDataIntegrationAssociation
- appconfig:GetAccountSettings
- appconfig:UpdateAccountSettings
- application-autoscaling:GetPredictiveScalingForecast
- application-signals:ListObservedEntities
- appstream:CreateThemeForStack
- appstream:DeleteThemeForStack
- appstream:DescribeThemeForStack
- appstream:UpdateThemeForStack
- appsync:CreateApi
- appsync:CreateChannelNamespace
- appsync:DeleteApi
- appsync:DeleteChannelNamespace
- appsync:EventConnect
- appsync:EventPublish
- appsync:EventSubscribe
- appsync:GetApi
- appsync:GetChannelNamespace
- appsync:ListApis
- appsync:ListChannelNamespaces
- appsync:UpdateApi
- appsync:UpdateChannelNamespace
- aps:UpdateScraper
- artifact:AcceptNdaForAgreement
- artifact:GetAgreement
- artifact:GetCustomerAgreement
- artifact:GetNdaForAgreement
- artifact:ListAgreements
- artifact:ListCustomerAgreements
- aws-marketplace:GetBuyerDashboard
- aws-marketplace:ListAgreementCharges
- aws-marketplace:UpdatePurchaseOrders
- b2bi:CreateStarterMappingTemplate
- b2bi:GenerateMapping
- b2bi:TestConversion
- backup:GetRecoveryPointIndexDetails
- backup:ListIndexedRecoveryPoints
- backup:ListIndexedRecoveryPointsForSearch
- backup:SearchRecoveryPoint
- backup:UpdateRecoveryPointIndexSettings
- bedrock:AssociateAgentCollaborator
- bedrock:BatchDeleteEvaluationJob
- bedrock:CreateBlueprint
- bedrock:CreateBlueprintVersion
- bedrock:CreateDataAutomationProject
- bedrock:CreateInferenceProfile
- bedrock:CreateMarketplaceModelEndpoint
- bedrock:CreateModelImportJob
- bedrock:DeleteBlueprint
- bedrock:DeleteDataAutomationProject
- bedrock:DeleteImportedModel
- bedrock:DeleteInferenceProfile
- bedrock:DeleteKnowledgeBaseDocuments
- bedrock:DeleteMarketplaceModelAgreement
- bedrock:DeleteMarketplaceModelEndpoint
- bedrock:DeleteResourcePolicy
- bedrock:DeregisterMarketplaceModelEndpoint
- bedrock:DisassociateAgentCollaborator
- bedrock:GenerateQuery
- bedrock:GetAgentCollaborator
- bedrock:GetAsyncInvoke
- bedrock:GetBlueprint
- bedrock:GetBlueprintRecommendation
- bedrock:GetDataAutomationProject
- bedrock:GetDataAutomationStatus
- bedrock:GetImportedModel
- bedrock:GetInferenceProfile
- bedrock:GetKnowledgeBaseDocuments
- bedrock:GetMarketplaceModelEndpoint
- bedrock:GetModelImportJob
- bedrock:GetPromptRouter
- bedrock:GetResourcePolicy
- bedrock:IngestKnowledgeBaseDocuments
- bedrock:InvokeBlueprintRecommendationAsync
- bedrock:InvokeBuilder
- bedrock:InvokeDataAutomationAsync
- bedrock:InvokeInlineAgent
- bedrock:ListAgentCollaborators
- bedrock:ListAsyncInvokes
- bedrock:ListBlueprints
- bedrock:ListDataAutomationProjects
- bedrock:ListImportedModels
- bedrock:ListInferenceProfiles
- bedrock:ListKnowledgeBaseDocuments
- bedrock:ListMarketplaceModelEndpoints
- bedrock:ListModelImportJobs
- bedrock:ListPromptRouters
- bedrock:OptimizePrompt
- bedrock:PutResourcePolicy
- bedrock:RegisterMarketplaceModelEndpoint
- bedrock:RenderPrompt
- bedrock:Rerank
- bedrock:StopIngestionJob
- bedrock:UpdateAgentCollaborator
- bedrock:UpdateBlueprint
- bedrock:UpdateDataAutomationProject
- bedrock:UpdateMarketplaceModelEndpoint
- bedrock:ValidateFlowDefinition
- billing:CreateBillingView
- billing:DeleteBillingView
- billing:DeleteResourcePolicy
- billing:GetBillingView
- billing:GetResourcePolicy
- billing:ListSourceViewsForBillingView
- billing:ListTagsForResource
- billing:PutResourcePolicy
- billing:TagResource
- billing:UntagResource
- billing:UpdateBillingView
- ce:GetCommitmentPurchaseAnalysis
- ce:ListCommitmentPurchaseAnalyses
- ce:StartCommitmentPurchaseAnalysis
- chatbot:AssociateToConfiguration
- chatbot:CreateCustomAction
- chatbot:DeleteCustomAction
- chatbot:DisassociateFromConfiguration
- chatbot:GetCustomAction
- chatbot:ListAssociations
- chatbot:ListCustomActions
- chatbot:UpdateCustomAction
- chime:AssociateVoiceConnectorConnect
- chime:CreateConnectAnalyticsConnector
- chime:CreateConnectCallTransferConnector
- chime:DeleteVoiceConnectorExternalSystemsConfiguration
- chime:DisassociateVoiceConnectorConnect
- chime:GetVoiceConnectorExternalSystemsConfiguration
- chime:PutVoiceConnectorExternalSystemsConfiguration
- cleanrooms-ml:CancelTrainedModel
- cleanrooms-ml:CancelTrainedModelInferenceJob
- cleanrooms-ml:CreateConfiguredModelAlgorithm
- cleanrooms-ml:CreateConfiguredModelAlgorithmAssociation
- cleanrooms-ml:CreateMLInputChannel
- cleanrooms-ml:CreateTrainedModel
- cleanrooms-ml:DeleteConfiguredModelAlgorithm
- cleanrooms-ml:DeleteConfiguredModelAlgorithmAssociation
- cleanrooms-ml:DeleteMLConfiguration
- cleanrooms-ml:DeleteMLInputChannelData
- cleanrooms-ml:DeleteTrainedModelOutput
- cleanrooms-ml:GetCollaborationConfiguredModelAlgorithmAssociation
- cleanrooms-ml:GetCollaborationMLInputChannel
- cleanrooms-ml:GetCollaborationTrainedModel
- cleanrooms-ml:GetConfiguredModelAlgorithm
- cleanrooms-ml:GetConfiguredModelAlgorithmAssociation
- cleanrooms-ml:GetMLConfiguration
- cleanrooms-ml:GetMLInputChannel
- cleanrooms-ml:GetTrainedModel
- cleanrooms-ml:GetTrainedModelInferenceJob
- cleanrooms-ml:ListCollaborationConfiguredModelAlgorithmAssociations
- cleanrooms-ml:ListCollaborationMLInputChannels
- cleanrooms-ml:ListCollaborationTrainedModelExportJobs
- cleanrooms-ml:ListCollaborationTrainedModelInferenceJobs
- cleanrooms-ml:ListCollaborationTrainedModels
- cleanrooms-ml:ListConfiguredModelAlgorithmAssociations
- cleanrooms-ml:ListConfiguredModelAlgorithms
- cleanrooms-ml:ListMLInputChannels
- cleanrooms-ml:ListTrainedModelInferenceJobs
- cleanrooms-ml:ListTrainedModels
- cleanrooms-ml:PutMLConfiguration
- cleanrooms-ml:StartTrainedModelExportJob
- cleanrooms-ml:StartTrainedModelInferenceJob
- cleanrooms:PassCollaboration
- cleanrooms:PassMembership
- cloudformation:ListHookResults
- cloudfront:AllowVendedLogDeliveryForResource
- cloudfront:CreateAnycastIpList
- cloudfront:CreateVpcOrigin
- cloudfront:DeleteAnycastIpList
- cloudfront:DeleteVpcOrigin
- cloudfront:GetAnycastIpList
- cloudfront:GetVpcOrigin
- cloudfront:ListAnycastIpLists
- cloudfront:ListDistributionsByAnycastIpListId
- cloudfront:ListDistributionsByVpcOriginId
- cloudfront:ListVpcOrigins
- cloudfront:UpdateVpcOrigin
- cloudtrail:CreateDashboard
- cloudtrail:DeleteDashboard
- cloudtrail:GenerateQueryResultsSummary
- cloudtrail:GetDashboard
- cloudtrail:ListDashboards
- cloudtrail:StartDashboardRefresh
- cloudtrail:UpdateDashboard
- cloudwatch:ListEntitiesForMetric
- codeconnections:GetConnectionToken
- codepipeline:ListRuleExecutions
- codepipeline:ListRuleTypes
- codepipeline:OverrideStageCondition
- codestar-connections:GetConnectionToken
- cognito-idp:CreateManagedLoginBranding
- cognito-idp:DeleteManagedLoginBranding
- cognito-idp:DescribeManagedLoginBranding
- cognito-idp:DescribeManagedLoginBrandingByClient
- cognito-idp:UpdateManagedLoginBranding
- compute-optimizer:ExportIdleRecommendations
- compute-optimizer:GetIdleRecommendations
- config:AssociateResourceTypes
- config:DeleteServiceLinkedConfigurationRecorder
- config:DisassociateResourceTypes
- config:ListConfigurationRecorders
- config:PutServiceLinkedConfigurationRecorder
- connect-campaigns:DeleteCampaignChannelSubtypeConfig
- connect-campaigns:DeleteCampaignCommunicationLimits
- connect-campaigns:DeleteCampaignCommunicationTime
- connect-campaigns:DeleteConnectInstanceIntegration
- connect-campaigns:ListConnectInstanceIntegrations
- connect-campaigns:PutConnectInstanceIntegration
- connect-campaigns:PutOutboundRequestBatch
- connect-campaigns:PutProfileOutboundRequestBatch
- connect-campaigns:UpdateCampaignChannelSubtypeConfig
- connect-campaigns:UpdateCampaignCommunicationLimits
- connect-campaigns:UpdateCampaignCommunicationTime
- connect-campaigns:UpdateCampaignFlowAssociation
- connect-campaigns:UpdateCampaignSchedule
- connect-campaigns:UpdateCampaignSource
- connect:AssociateAnalyticsDataSet
- connect:CreateContactFlowVersion
- connect:CreateHoursOfOperationOverride
- connect:CreatePushNotificationRegistration
- connect:DeleteHoursOfOperationOverride
- connect:DeletePushNotificationRegistration
- connect:DescribeHoursOfOperationOverride
- connect:DisassociateAnalyticsDataSet
- connect:GetEffectiveHoursOfOperations
- connect:ListAnalyticsDataAssociations
- connect:ListContactFlowVersions
- connect:ListHoursOfOperationOverrides
- connect:SearchHoursOfOperationOverrides
- connect:SendIntegrationEvent
- connect:SendOutboundEmail
- connect:StartEmailContact
- connect:StartOutboundChatContact
- connect:StartScreenSharing
- connect:UpdateHoursOfOperationOverride
- connect:UpdateParticipantAuthentication
- controlcatalog:GetControl
- controlcatalog:ListControls
- controltower:ResetEnabledControl
- dataexchange:AcceptDataGrant
- dataexchange:CreateDataGrant
- dataexchange:DeleteDataGrant
- dataexchange:GetDataGrant
- dataexchange:GetReceivedDataGrant
- dataexchange:ListDataGrants
- dataexchange:ListReceivedDataGrants
- dataexchange:PublishToDataGrant
- datazone:AddEntityOwner
- datazone:BatchDeleteLinkedTypes
- datazone:BatchPutLinkedTypes
- datazone:CreateConnection
- datazone:CreateDataProduct
- datazone:CreateDataProductRevision
- datazone:CreateDomainUnit
- datazone:CreateProjectProfile
- datazone:CreateRule
- datazone:DeleteConnection
- datazone:DeleteDataProduct
- datazone:DeleteDomainUnit
- datazone:DeleteProjectProfile
- datazone:DeleteRule
- datazone:GetConnection
- datazone:GetDataProduct
- datazone:GetDomainExecutionRoleCredentials
- datazone:GetDomainUnit
- datazone:GetJobRun
- datazone:GetLineageEvent
- datazone:GetProjectProfile
- datazone:GetRule
- datazone:ListConnections
- datazone:ListDataProductRevisions
- datazone:ListDomainUnitsForParent
- datazone:ListEntityOwners
- datazone:ListJobRuns
- datazone:ListLineageEvents
- datazone:ListLinkedTypes
- datazone:ListProjectProfiles
- datazone:ListRules
- datazone:RemoveEntityOwner
- datazone:SearchRules
- datazone:UpdateConnection
- datazone:UpdateDomainUnit
- datazone:UpdateProjectProfile
- datazone:UpdateRule
- deadline:GetJobTemplate
- deadline:ListJobParameterDefinitions
- deepracer:AdminDescribeAccountKey
- deepracer:AdminUpdateAccountKey
- docdb-elastic:ApplyPendingMaintenanceAction
- docdb-elastic:GetPendingMaintenanceAction
- docdb-elastic:ListPendingMaintenanceActions
- ds:AccessDSData
- ds:DescribeDirectoryDataAccess
- ds:DisableDirectoryDataAccess
- ds:EnableDirectoryDataAccess
- dynamodb:GetAbacStatus
- dynamodb:UpdateAbacStatus
- ec2:AcceptCapacityReservationBillingOwnership
- ec2:AssociateCapacityReservationBillingOwner
- ec2:AssociateSecurityGroupVpc
- ec2:CancelDeclarativePoliciesReport
- ec2:CreateCapacityReservationBySplitting
- ec2:CreateIpamExternalResourceVerificationToken
- ec2:CreateVpcBlockPublicAccessExclusion
- ec2:DeleteIpamExternalResourceVerificationToken
- ec2:DeleteVpcBlockPublicAccessExclusion
- ec2:DescribeCapacityBlockExtensionHistory
- ec2:DescribeCapacityBlockExtensionOfferings
- ec2:DescribeCapacityReservationBillingRequests
- ec2:DescribeDeclarativePoliciesReports
- ec2:DescribeInstanceImageMetadata
- ec2:DescribeIpamExternalResourceVerificationTokens
- ec2:DescribeSecurityGroupVpcAssociations
- ec2:DescribeVpcBlockPublicAccessExclusions
- ec2:DescribeVpcBlockPublicAccessOptions
- ec2:DescribeVpcEndpointAssociations
- ec2:DisableAllowedImagesSettings
- ec2:DisassociateCapacityReservationBillingOwner
- ec2:DisassociateSecurityGroupVpc
- ec2:EnableAllowedImagesSettings
- ec2:ExportVerifiedAccessInstanceClientConfiguration
- ec2:GetAllowedImagesSettings
- ec2:GetDeclarativePoliciesReportSummary
- ec2:GetVerifiedAccessEndpointTargets
- ec2:ModifyInstanceCpuOptions
- ec2:ModifyVpcBlockPublicAccessExclusion
- ec2:ModifyVpcBlockPublicAccessOptions
- ec2:MoveCapacityReservationInstances
- ec2:PurchaseCapacityBlockExtension
- ec2:RejectCapacityReservationBillingOwnership
- ec2:ReplaceImageCriteriaInAllowedImagesSettings
- ec2:StartDeclarativePoliciesReport
- ecr:GetAccountSetting
- ecr:PutAccountSetting
- ecs:DescribeServiceDeployments
- ecs:DescribeServiceRevisions
- ecs:ListServiceDeployments
- eks:DescribeClusterVersions
- elasticfilesystem:ReplicationRead
- elasticfilesystem:ReplicationWrite
- elasticloadbalancing:DescribeCapacityReservation
- elasticloadbalancing:DescribeListenerAttributes
- elasticloadbalancing:ModifyCapacityReservation
- elasticloadbalancing:ModifyListenerAttributes
- elemental-activations:ConfirmAccount
- elemental-activations:DownloadKickstart
- elemental-activations:GenerateLicense
- elemental-activations:GetArtifactGroupSoftwareVersions
- elemental-activations:GetAsset
- elemental-activations:GetAssets
- elemental-activations:GetProductAdvisories
- elemental-activations:GetSoftwareVersions
- elemental-support-cases:AddCaseComment
- elemental-support-cases:CompleteMultipartUpload
- elemental-support-cases:CreateS3CLIUploadCommand
- elemental-support-cases:CreateS3DownloadUrl
- elemental-support-cases:GetCasePermission
- elemental-support-cases:GetUICache
- elemental-support-cases:ListTagsForCase
- elemental-support-cases:StartMultipartUpload
- elemental-support-cases:TagCase
- elemental-support-cases:UntagCase
- elemental-support-cases:UpdateCaseStatus
- elemental-support-cases:UpdateMultipartUpload
- es:AddDirectQueryDataSource
- es:AssociatePackages
- es:CreateApplication
- es:DeleteApplication
- es:DeleteDirectQueryDataSource
- es:DissociatePackages
- es:GetApplication
- es:GetDirectQueryDataSource
- es:ListApplications
- es:ListDirectQueryDataSources
- es:UpdateApplication
- es:UpdateDirectQueryDataSource
- es:UpdatePackageScope
- fis:GetSafetyLever
- fis:UpdateSafetyLeverState
- gamelift:CreateContainerFleet
- gamelift:DeleteContainerFleet
- gamelift:DescribeContainerFleet
- gamelift:DescribeFleetDeployment
- gamelift:ListContainerFleets
- gamelift:ListContainerGroupDefinitionVersions
- gamelift:ListFleetDeployments
- gamelift:TerminateGameSession
- gamelift:UpdateContainerFleet
- gamelift:UpdateContainerGroupDefinition
- glue:AuthorizeInboundIntegration
- glue:CreateCatalog
- glue:CreateColumnStatisticsTaskSettings
- glue:CreateInboundIntegration
- glue:CreateIntegration
- glue:CreateIntegrationResourceProperty
- glue:CreateIntegrationTableProperties
- glue:DeleteCatalog
- glue:DeleteColumnStatisticsTaskSettings
- glue:DeleteIntegration
- glue:DeleteIntegrationTableProperties
- glue:DescribeInboundIntegrations
- glue:DescribeIntegrations
- glue:GetCatalog
- glue:GetCatalogs
- glue:GetColumnStatisticsTaskSettings
- glue:GetDashboardUrl
- glue:GetEntityRecords
- glue:GetGeneratedCode
- glue:GetIntegrationResourceProperty
- glue:GetIntegrationTableProperties
- glue:GetJobUpgradeAnalysis
- glue:GetRecipeAction
- glue:ListJobUpgradeAnalyses
- glue:ModifyIntegration
- glue:PutDataQualityStatisticAnnotation
- glue:SendRecipeAction
- glue:StartColumnStatisticsTaskRunSchedule
- glue:StartJobUpgradeAnalysis
- glue:StopColumnStatisticsTaskRunSchedule
- glue:StopJobUpgradeAnalysis
- glue:UpdateCatalog
- glue:UpdateColumnStatisticsTaskSettings
- glue:UpdateIntegrationResourceProperty
- glue:UpdateIntegrationTableProperties
- glue:UpgradeJob
- healthlake:CancelFHIRExportJobWithDelete
- healthlake:DescribeFHIRExportJobWithGet
- healthlake:StartFHIRExportJobWithPost
- iam:DisableOrganizationsRootCredentialsManagement
- iam:DisableOrganizationsRootSessions
- iam:EnableOrganizationsRootCredentialsManagement
- iam:EnableOrganizationsRootSessions
- iam:ListOrganizationsFeatures
- imagebuilder:GetMarketplaceResource
- invoicing:BatchGetInvoiceProfile
- invoicing:CreateInvoiceUnit
- invoicing:DeleteInvoiceUnit
- invoicing:GetInvoiceUnit
- invoicing:ListInvoiceUnits
- invoicing:ListTagsForResource
- invoicing:TagResource
- invoicing:UntagResource
- invoicing:UpdateInvoiceUnit
- iot:AssociateSbomWithPackageVersion
- iot:CreateCommand
- iot:DeleteCommand
- iot:DeleteCommandExecution
- iot:DisassociateSbomFromPackageVersion
- iot:GetCommand
- iot:GetCommandExecution
- iot:GetThingConnectivityData
- iot:ListCommandExecutions
- iot:ListCommands
- iot:ListSbomValidationResults
- iot:StartCommandExecution
- iot:UpdateCommand
- iot:UpdateThingType
- iotfleetwise:CreateStateTemplate
- iotfleetwise:DeleteStateTemplate
- iotfleetwise:GenerateCommandPayload
- iotfleetwise:GetStateTemplate
- iotfleetwise:ListStateTemplates
- iotfleetwise:UpdateStateTemplate
- iotsitewise:CreateDataset
- iotsitewise:DeleteDataset
- iotsitewise:DescribeDataset
- iotsitewise:InvokeAssistant
- iotsitewise:ListDatasets
- iotsitewise:UpdateDataset
- ivs:CreateIngestConfiguration
- ivs:DeleteIngestConfiguration
- ivs:GetIngestConfiguration
- ivs:ListIngestConfigurations
- ivs:UpdateIngestConfiguration
- kinesisanalytics:DescribeApplicationOperation
- kinesisanalytics:ListApplicationOperations
- kinesisvideo:JoinStorageSessionAsViewer
- lakeformation:CreateLFTagExpression
- lakeformation:DeleteLFTagExpression
- lakeformation:GetLFTagExpression
- lakeformation:ListLFTagExpressions
- lakeformation:UpdateLFTagExpression
- lambda:GetFunctionRecursionConfig
- lambda:PutFunctionRecursionConfig
- license-manager-user-subscriptions:CreateLicenseServerEndpoint
- license-manager-user-subscriptions:DeleteLicenseServerEndpoint
- license-manager-user-subscriptions:ListLicenseServerEndpoints
- license-manager-user-subscriptions:ListTagsForResource
- license-manager-user-subscriptions:TagResource
- license-manager-user-subscriptions:UntagResource
- logs:DeleteIndexPolicy
- logs:DeleteIntegration
- logs:DeleteTransformer
- logs:DescribeConfigurationTemplates
- logs:DescribeFieldIndexes
- logs:DescribeIndexPolicies
- logs:GetIntegration
- logs:GetTransformer
- logs:ListEntitiesForLogGroup
- logs:ListIntegrations
- logs:ListLogGroupsForEntity
- logs:ListLogGroupsForQuery
- logs:PutIndexPolicy
- logs:PutIntegration
- logs:PutTransformer
- logs:TestTransformer
- logs:UpdateDeliveryConfiguration
- mediaconnect:DescribeFlowSourceThumbnail
- mediaconvert:ListVersions
- medialive:CreateChannelPlacementGroup
- medialive:CreateCluster
- medialive:CreateNetwork
- medialive:CreateNode
- medialive:CreateNodeRegistrationScript
- medialive:DeleteChannelPlacementGroup
- medialive:DeleteCluster
- medialive:DeleteNetwork
- medialive:DeleteNode
- medialive:DescribeChannelPlacementGroup
- medialive:DescribeCluster
- medialive:DescribeNetwork
- medialive:DescribeNode
- medialive:ListChannelPlacementGroups
- medialive:ListClusters
- medialive:ListNetworks
- medialive:ListNodes
- medialive:PollAnywhere
- medialive:SubmitAnywhereStateChange
- medialive:UpdateChannelPlacementGroup
- medialive:UpdateCluster
- medialive:UpdateNetwork
- medialive:UpdateNode
- medialive:UpdateNodeState
- mediapackagev2:CancelHarvestJob
- mediapackagev2:CreateHarvestJob
- mediapackagev2:GetHarvestJob
- mediapackagev2:HarvestObject
- mediapackagev2:ListHarvestJobs
- memorydb:CreateMultiRegionCluster
- memorydb:DeleteMultiRegionCluster
- memorydb:DescribeMultiRegionClusters
- memorydb:DescribeMultiRegionParameterGroups
- memorydb:DescribeMultiRegionParameters
- memorydb:ListAllowedMultiRegionClusterUpdates
- memorydb:UpdateMultiRegionCluster
- mgh:AcceptConnection
- mgh:AssociateAutomationUnitRole
- mgh:AssociateSourceResource
- mgh:BatchAssociateIamRoleWithConnection
- mgh:BatchDisassociateIamRoleFromConnection
- mgh:CreateAutomationRun
- mgh:CreateAutomationUnit
- mgh:DeleteAutomationRun
- mgh:DeleteAutomationUnit
- mgh:DeleteConnection
- mgh:DescribeAutomationRun
- mgh:DescribeAutomationUnit
- mgh:DisassociateAutomationUnitRole
- mgh:DisassociateSourceResource
- mgh:GetConnection
- mgh:ListAutomationRuns
- mgh:ListAutomationUnits
- mgh:ListConnectionRoles
- mgh:ListConnections
- mgh:ListMigrationTaskUpdates
- mgh:ListSourceResources
- mgh:ListTagsForResource
- mgh:RejectConnection
- mgh:TagResource
- mgh:UntagResource
- mgn:CreateNetworkMigrationDefinition
- mgn:DeleteNetworkMigrationDefinition
- mgn:GetNetworkMigrationDefinition
- mgn:GetNetworkMigrationMapperSegmentConstruct
- mgn:ListNetworkMigrationAnalyses
- mgn:ListNetworkMigrationAnalysisResults
- mgn:ListNetworkMigrationCodeGenerationSegments
- mgn:ListNetworkMigrationCodeGenerations
- mgn:ListNetworkMigrationDefinitions
- mgn:ListNetworkMigrationDeployedStacks
- mgn:ListNetworkMigrationDeployedStacksDeletions
- mgn:ListNetworkMigrationDeployments
- mgn:ListNetworkMigrationExecutions
- mgn:ListNetworkMigrationMapperSegmentConstructs
- mgn:ListNetworkMigrationMapperSegments
- mgn:ListNetworkMigrationMappings
- mgn:StartNetworkMigrationAnalysis
- mgn:StartNetworkMigrationCodeGeneration
- mgn:StartNetworkMigrationDeployedStacksDeletion
- mgn:StartNetworkMigrationDeployment
- mgn:StartNetworkMigrationMapping
- mgn:UpdateNetworkMigrationDefinition
- mgn:UpdateNetworkMigrationMapperSegment
- mgn:UpdateNetworkMigrationMapperSegmentConstruct
- neptune-graph:CancelExportTask
- neptune-graph:GetExportTask
- neptune-graph:ListExportTasks
- neptune-graph:StartExportTask
- networkmanager:CreateDirectConnectGatewayAttachment
- networkmanager:GetDirectConnectGatewayAttachment
- networkmanager:UpdateDirectConnectGatewayAttachment
- omics:CreateRunCache
- omics:DeleteRunCache
- omics:DeleteS3AccessPolicy
- omics:GetRunCache
- omics:GetS3AccessPolicy
- omics:ListRunCaches
- omics:PutS3AccessPolicy
- omics:UpdateRunCache
- omics:UpdateSequenceStore
- outposts:ListAssetInstances
- outposts:ListBlockingInstancesForCapacityTask
- payment-cryptography:GenerateMacEmvPinChange
- payments:AcceptFinancingApplicationTerms
- payments:CreateFinancingApplication
- payments:GetFinancingApplication
- payments:GetFinancingLine
- payments:GetFinancingLineWithdrawal
- payments:GetFinancingOption
- payments:ListFinancingApplications
- payments:ListFinancingLineWithdrawals
- payments:ListFinancingLines
- payments:ListPaymentProgramOptions
- payments:ListPaymentProgramStatus
- payments:UpdateFinancingApplication
- personalize:UpdateSolution
- profile:BatchGetCalculatedAttributeForProfile
- profile:BatchGetProfile
- profile:CreateEventTrigger
- profile:CreateSegmentDefinition
- profile:CreateSegmentEstimate
- profile:CreateSegmentSnapshot
- profile:DeleteEventTrigger
- profile:DeleteSegmentDefinition
- profile:GetEventTrigger
- profile:GetSegmentDefinition
- profile:GetSegmentEstimate
- profile:GetSegmentMembership
- profile:GetSegmentSnapshot
- profile:ListEventTriggers
- profile:ListObjectTypeAttributes
- profile:ListProfileAttributeValues
- profile:ListSegmentDefinitions
- profile:UpdateEventTrigger
- q:CreatePlugin
- q:DeletePlugin
- q:GenerateCodeFromCommands
- q:GetPlugin
- q:ListDashboardMetrics
- q:ListPluginProviders
- q:ListPlugins
- q:ListTagsForResource
- q:TagResource
- q:UntagResource
- q:UsePlugin
- qapps:BatchCreateCategory
- qapps:BatchDeleteCategory
- qapps:BatchUpdateCategory
- qapps:CreatePresignedUrl
- qapps:DescribeQAppPermissions
- qapps:ExportQAppSessionData
- qapps:ListCategories
- qapps:ListQAppSessionData
- qapps:UpdateLibraryItemMetadata
- qapps:UpdateQAppPermissions
- qbusiness:AllowVendedLogDeliveryForResource
- qbusiness:AssociatePermission
- qbusiness:CreateDataAccessor
- qbusiness:CreateIntegration
- qbusiness:DeleteDataAccessor
- qbusiness:DeleteIntegration
- qbusiness:DisableAclOnDataSource
- qbusiness:DisassociatePermission
- qbusiness:GetDataAccessor
- qbusiness:GetIntegration
- qbusiness:GetMedia
- qbusiness:GetPolicy
- qbusiness:ListAttachments
- qbusiness:ListDataAccessors
- qbusiness:ListIntegrations
- qbusiness:ListPluginActions
- qbusiness:ListPluginTypeActions
- qbusiness:ListPluginTypeMetadata
- qbusiness:PutResourcePolicy
- qbusiness:SearchRelevantContent
- qbusiness:StartDeployment
- qbusiness:UpdateDataAccessor
- qbusiness:UpdateIntegration
- quicksight:CreateBrand
- quicksight:DeleteBrand
- quicksight:DeleteBrandAssignment
- quicksight:DeleteDefaultQBusinessApplication
- quicksight:DeleteUserCustomPermission
- quicksight:DescribeBrand
- quicksight:DescribeBrandAssignment
- quicksight:DescribeBrandPublishedVersion
- quicksight:DescribeDashboardsQAConfiguration
- quicksight:DescribeDefaultQBusinessApplication
- quicksight:DescribeQPersonalizationConfiguration
- quicksight:DescribeQuickSightQSearchConfiguration
- quicksight:GenerateEmbedUrlForRegisteredUserWithIdentity
- quicksight:ListBrands
- quicksight:ListFoldersForResource
- quicksight:PredictQAResults
- quicksight:SearchTopics
- quicksight:StartDashboardSnapshotJobSchedule
- quicksight:UpdateApplicationWithTokenExchangeGrant
- quicksight:UpdateBrand
- quicksight:UpdateBrandAssignment
- quicksight:UpdateBrandPublishedVersion
- quicksight:UpdateDashboardsQAConfiguration
- quicksight:UpdateDefaultQBusinessApplication
- quicksight:UpdateQPersonalizationConfiguration
- quicksight:UpdateQuickSightQSearchConfiguration
- quicksight:UpdateUserCustomPermission
- rds:CopyCustomDBEngineVersion
- rds:DescribeDBSnapshotTenantDatabases
- redshift-data:GetStagingBucketLocation
- redshift-serverless:GetManagedWorkgroup
- redshift-serverless:ListManagedWorkgroups
- redshift:AuthorizeInboundIntegration
- redshift:CreateInboundIntegration
- redshift:CreateIntegration
- redshift:DeleteIntegration
- redshift:DeregisterNamespace
- redshift:DescribeIntegrations
- redshift:ModifyIntegration
- redshift:RegisterNamespace
- repostspace:BatchAddRole
- repostspace:BatchRemoveRole
- resiliencehub:DescribeMetricsExport
- resiliencehub:ListMetrics
- resiliencehub:StartMetricsExport
- resource-explorer-2:CreateManagedView
- resource-explorer-2:GetManagedView
- resource-explorer-2:ListManagedViews
- resource-groups:CancelTagSyncTask
- resource-groups:GetTagSyncTask
- resource-groups:ListGroupingStatuses
- resource-groups:ListTagSyncTasks
- resource-groups:StartTagSyncTask
- route53profiles:GetProfilePolicy
- route53profiles:PutProfilePolicy
- s3:CreateBucketMetadataTableConfiguration
- s3:DeleteBucketMetadataTableConfiguration
- s3:GetBucketMetadataTableConfiguration
- s3:ListCallerAccessGrants
- s3express:GetEncryptionConfiguration
- s3express:GetLifecycleConfiguration
- s3express:PutEncryptionConfiguration
- s3express:PutLifecycleConfiguration
- sagemaker-mlflow:DeleteTraceTag
- sagemaker-mlflow:DeleteTraces
- sagemaker-mlflow:EndTrace
- sagemaker-mlflow:GetTraceInfo
- sagemaker-mlflow:SearchTraces
- sagemaker-mlflow:SetTraceTag
- sagemaker-mlflow:StartTrace
- sagemaker:BatchDeleteClusterNodes
- sagemaker:CallPartnerAppApi
- sagemaker:CreateClusterSchedulerConfig
- sagemaker:CreateComputeQuota
- sagemaker:CreatePartnerApp
- sagemaker:CreatePartnerAppPresignedUrl
- sagemaker:CreateReservedCapacity
- sagemaker:CreateTrainingPlan
- sagemaker:DeleteClusterSchedulerConfig
- sagemaker:DeleteComputeQuota
- sagemaker:DeletePartnerApp
- sagemaker:DescribeClusterSchedulerConfig
- sagemaker:DescribeComputeQuota
- sagemaker:DescribePartnerApp
- sagemaker:DescribeTrainingPlan
- sagemaker:ListClusterSchedulerConfigs
- sagemaker:ListComputeQuotas
- sagemaker:ListPartnerApps
- sagemaker:ListTrainingPlans
- sagemaker:SearchTrainingPlanOfferings
- sagemaker:UpdateClusterSchedulerConfig
- sagemaker:UpdateComputeQuota
- sagemaker:UpdatePartnerApp
- scn:CreateDataIntegrationFlow
- scn:CreateDataLakeDataset
- scn:DeleteDataIntegrationFlow
- scn:DeleteDataLakeDataset
- scn:GetDataIntegrationFlow
- scn:GetDataLakeDataset
- scn:GetInstance
- scn:ListDataIntegrationFlows
- scn:ListDataLakeDatasets
- scn:UpdateDataIntegrationFlow
- scn:UpdateDataLakeDataset
- servicecatalog:DeleteResourcePolicy
- servicecatalog:GetResourcePolicy
- servicecatalog:PutResourcePolicy
- servicediscovery:DeleteServiceAttributes
- servicediscovery:GetServiceAttributes
- servicediscovery:UpdateServiceAttributes
- ses:AllowVendedLogDeliveryForResource
- ses:CreateMultiRegionEndpoint
- ses:DeleteMultiRegionEndpoint
- ses:GetMultiRegionEndpoint
- ses:ListMultiRegionEndpoints
- ses:ReplicateEmailIdentityDkimSigningKey
- sms-voice:DeleteProtectConfigurationRuleSetNumberOverride
- sms-voice:DeleteResourcePolicy
- sms-voice:GetResourcePolicy
- sms-voice:ListProtectConfigurationRuleSetNumberOverrides
- sms-voice:PutMessageFeedback
- sms-voice:PutProtectConfigurationRuleSetNumberOverride
- sms-voice:PutResourcePolicy
- sms-voice:SetDefaultMessageFeedbackEnabled
- sqlworkbench:DeleteQCustomContext
- sqlworkbench:DeleteSqlGenerationContext
- sqlworkbench:GetQCustomContext
- sqlworkbench:GetQSqlPromptQuotas
- sqlworkbench:GetSqlGenerationContext
- sqlworkbench:GetSqlRecommendations
- sqlworkbench:PassAccountSettings
- sqlworkbench:PutQCustomContext
- sqlworkbench:PutSqlGenerationContext
- ssm-guiconnect:ListConnections
- ssm-quicksetup:GetConfiguration
- ssm-quicksetup:ListConfigurations
- ssm:ExecuteAPI
- ssm:GetExecutionPreview
- ssm:ListNodes
- ssm:ListNodesSummary
- ssm:StartExecutionPreview
- sso-directory:GetGroupId
- sso-directory:GetUserId
- sso-directory:ListGroups
- sso-directory:ListUsers
- sts:AssumeRoot
- supportplans:ListSupportPlanModifiers
- tax:DeleteSupplementalTaxRegistration
- tax:ListSupplementalTaxRegistrations
- tax:PutSupplementalTaxRegistration
- thinclient:GetDeviceDetails
- transfer:CreateWebApp
- transfer:DeleteWebApp
- transfer:DeleteWebAppCustomization
- transfer:DescribeWebApp
- transfer:DescribeWebAppCustomization
- transfer:ListFileTransferResults
- transfer:ListWebApps
- transfer:UpdateWebApp
- transfer:UpdateWebAppCustomization
- vpc-lattice:AssociateViaAWSServiceEventsAndStates
- vpc-lattice:CreateResourceConfiguration
- vpc-lattice:CreateResourceGateway
- vpc-lattice:CreateServiceNetworkResourceAssociation
- vpc-lattice:CreateServiceNetworkVpcEndpointAssociation
- vpc-lattice:DeleteResourceConfiguration
- vpc-lattice:DeleteResourceEndpointAssociation
- vpc-lattice:DeleteResourceGateway
- vpc-lattice:DeleteServiceNetworkResourceAssociation
- vpc-lattice:GetResourceConfiguration
- vpc-lattice:GetResourceGateway
- vpc-lattice:GetServiceNetworkResourceAssociation
- vpc-lattice:ListResourceConfigurations
- vpc-lattice:ListResourceEndpointAssociations
- vpc-lattice:ListResourceGateways
- vpc-lattice:ListServiceNetworkResourceAssociations
- vpc-lattice:ListServiceNetworkVpcEndpointAssociations
- vpc-lattice:UpdateResourceConfiguration
- vpc-lattice:UpdateResourceGateway
- wickr:DeleteNetwork
- wisdom:ActivateMessageTemplate
- wisdom:AllowVendedLogDeliveryForResource
- wisdom:CreateAIAgent
- wisdom:CreateAIAgentVersion
- wisdom:CreateAIGuardrail
- wisdom:CreateAIGuardrailVersion
- wisdom:CreateAIPrompt
- wisdom:CreateAIPromptVersion
- wisdom:CreateMessageTemplate
- wisdom:CreateMessageTemplateAttachment
- wisdom:CreateMessageTemplateVersion
- wisdom:DeactivateMessageTemplate
- wisdom:DeleteAIAgent
- wisdom:DeleteAIAgentVersion
- wisdom:DeleteAIGuardrail
- wisdom:DeleteAIGuardrailVersion
- wisdom:DeleteAIPrompt
- wisdom:DeleteAIPromptVersion
- wisdom:DeleteMessageTemplate
- wisdom:DeleteMessageTemplateAttachment
- wisdom:GetAIAgent
- wisdom:GetAIGuardrail
- wisdom:GetAIPrompt
- wisdom:GetMessageTemplate
- wisdom:GetNextMessage
- wisdom:ListAIAgentVersions
- wisdom:ListAIAgents
- wisdom:ListAIGuardrailVersions
- wisdom:ListAIGuardrails
- wisdom:ListAIPromptVersions
- wisdom:ListAIPrompts
- wisdom:ListMessageTemplateVersions
- wisdom:ListMessageTemplates
- wisdom:ListMessages
- wisdom:RemoveAssistantAIAgent
- wisdom:RenderMessageTemplate
- wisdom:SearchMessageTemplates
- wisdom:SendMessage
- wisdom:UpdateAIAgent
- wisdom:UpdateAIGuardrail
- wisdom:UpdateAIPrompt
- wisdom:UpdateAssistantAIAgent
- wisdom:UpdateMessageTemplate
- wisdom:UpdateMessageTemplateMetadata
- wisdom:UpdateSessionData
- workmail:CreateIdentityCenterApplication
- workmail:DeleteIdentityCenterApplication
- workmail:DeleteIdentityProviderConfiguration
- workmail:DeletePersonalAccessToken
- workmail:DescribeIdentityProviderConfiguration
- workmail:GetPersonalAccessTokenMetadata
- workmail:ListPersonalAccessTokens
- workmail:PutIdentityProviderConfiguration
- workspaces-web:ExpireSession
- workspaces-web:GetSession
- workspaces-web:ListSessions
- xray:CancelTraceRetrieval
- xray:GetIndexingRules
- xray:GetRetrievedTracesGraph
- xray:GetTraceSegmentDestination
- xray:ListRetrievedTraces
- xray:PutSpans
- xray:PutSpansForIndexing
- xray:StartTraceRetrieval
- xray:UpdateIndexingRule
- xray:UpdateTraceSegmentDestination

**Updated action access level:**

- config:DescribeConfigurationRecorders: List -> Read
- elemental-activations:CompleteAccountRegistration: Read -> Write
- elemental-activations:CompleteFileUpload: Read -> Write
- elemental-activations:GenerateLicenses: Read -> Write
- elemental-activations:StartFileUpload: Read -> Write
- elemental-appliances-software:CreateQuote: Tagging -> Write
- healthlake:ListTagsForResource: Read -> List
- quicksight:CreateCustomPermissions: Permissions management -> Write
- quicksight:DeleteCustomPermissions: Permissions management -> Write
- quicksight:DescribeCustomPermissions: Write -> Read
- quicksight:ListCustomPermissions: Write -> List
- quicksight:UpdateCustomPermissions: Permissions management -> Write

**New resource types:**

- appsync:api
- appsync:channelNamespace
- aws-marketplace:Dashboard
- bedrock:application-inference-profile
- bedrock:async-invoke
- bedrock:bedrock-marketplace-model-endpoint
- bedrock:blueprint
- bedrock:data-automation-invocation-job
- bedrock:data-automation-project
- bedrock:default-prompt-router
- bedrock:imported-model
- bedrock:inference-profile
- bedrock:model-import-job
- billing:billingview
- ce:billingview
- chatbot:custom-action
- cleanrooms-ml:ConfiguredModelAlgorithm
- cleanrooms-ml:ConfiguredModelAlgorithmAssociation
- cleanrooms-ml:MLInputChannel
- cleanrooms-ml:TrainedModel
- cleanrooms-ml:TrainedModelInferenceJob
- cloudfront:anycast-ip-list
- cloudfront:vpcorigin
- cloudtrail:dashboard
- config:ConfigurationRecorder
- controlcatalog:control
- dataexchange:data-grants
- ec2:declarative-policies-report
- ec2:ipam-external-resource-verification-token
- ec2:verified-access-endpoint-target
- ec2:vpc-block-public-access-exclusion
- ecs:service-deployment
- ecs:service-revision
- elemental-support-cases:case
- es:application
- es:datasource
- events:create-snapshot
- events:reboot-instance
- events:stop-instance
- events:terminate-instance
- fis:safety-lever
- gamelift:containerFleet
- glue:integration
- glue:rootcatalog
- invoicing:invoice-unit
- iot:command
- iotfleetwise:statetemplate
- iotsitewise:dataset
- ivs:Ingest-Configuration
- license-manager-user-subscriptions:identity-provider
- license-manager-user-subscriptions:instance-user
- license-manager-user-subscriptions:license-server-endpoint
- license-manager-user-subscriptions:product-subscription
- medialive:channel-placement-group
- medialive:cluster
- medialive:network
- medialive:node
- mediapackagev2:ChannelPolicy
- mediapackagev2:HarvestJob
- mediapackagev2:OriginEndpointPolicy
- memorydb:multiregioncluster
- memorydb:multiregionparametergroup
- mgh:AutomationRunResource
- mgh:AutomationUnitResource
- mgh:ConnectionResource
- mgn:NetworkMigrationDefinitionResource
- neptune-graph:export-task
- omics:runCache
- profile:event-triggers
- profile:segment-definitions
- q:plugin
- q:profile
- qbusiness:data-accessor
- qbusiness:integration
- quicksight:brand
- quicksight:custompermissions
- redshift-data:managed-workgroup
- redshift-serverless:managed-workgroup
- redshift:integration
- resource-explorer-2:managed-view
- resource-groups:tagSyncTask
- sagemaker:cluster-scheduler-config
- sagemaker:compute-quota
- sagemaker:partner-app
- sagemaker:reserved-capacity
- sagemaker:training-plan
- scn:data-integration-flow
- scn:dataset
- ses:multi-region-endpoint
- sms-voice:Message
- ssm:iam-role
- sts:root-user
- transfer:webapp
- vpc-lattice:ResourceConfiguration
- vpc-lattice:ResourceEndpointAssociation
- vpc-lattice:ResourceGateway
- vpc-lattice:ServiceNetworkResourceAssociation
- wisdom:AIAgent
- wisdom:AIGuardrail
- wisdom:AIPrompt
- wisdom:MessageTemplate

**New condition keys:**

- arc-zonal-shift:ResourceIdentifier
- autoscaling:CapacityReservationIds
- autoscaling:CapacityReservationResourceGroupArns
- backup:Index
- batch:EKSNamespace
- bedrock:InferenceProfileArn
- bedrock:PromptRouterArn
- billing:RequestTag/${TagKey}
- billing:ResourceTag/${TagKey}
- billing:TagKeys
- cloudformation:CreateAction
- config:ConfigurationRecorderServicePrincipal
- connect:AssignmentType
- connect:FlowType
- connect:Subtype
- dms:assessment-run-tag/${TagKey}
- dms:individual-assessment-tag/${TagKey}
- dynamodb:RequestTag/${TagKey}
- dynamodb:ResourceTag/${TagKey}
- dynamodb:TagKeys
- ec2:CpuOptionsAmdSevSnp
- ec2:CreateDate
- ec2:DestinationCapacityReservationId
- ec2:EndDate
- ec2:EndDateType
- ec2:InstanceCount
- ec2:InstanceMatchCriteria
- ec2:InstancePlatform
- ec2:Location
- ec2:ManagedResourceOperator
- ec2:SourceAvailabilityZone
- ec2:SourceCapacityReservationId
- ec2:vpceMultiRegion
- ec2:vpceServiceRegion
- ec2:vpceSupportedRegion
- ecr:AccountSetting
- ecs:enable-vpc-lattice
- eks:blockStorageEnabled
- eks:computeConfigEnabled
- eks:elasticLoadBalancingEnabled
- elasticache:MinimumDataStorage
- elasticache:MinimumECPUPerSecond
- elemental-support-cases:RequestTag/${TagKey}
- elemental-support-cases:ResourceTag/${TagKey}
- elemental-support-cases:TagKeys
- glue:EnabledForRedshiftAutoDiscovery
- invoicing:RequestTag/${TagKey}
- invoicing:ResourceTag/${TagKey}
- invoicing:TagKeys
- iot:CommandExecutionParameterBoolean/${CommandParameterName}
- iot:CommandExecutionParameterNumber/${CommandParameterName}
- iot:CommandExecutionParameterString/${CommandParameterName}
- iotfleetwise:Signals
- kinesis:RequestTag/${TagKey}
- kinesis:ResourceTag/${TagKey}
- kinesis:TagKeys
- license-manager-user-subscriptions:RequestTag/${TagKey}
- license-manager-user-subscriptions:ResourceTag/${TagKey}
- license-manager-user-subscriptions:TagKeys
- mgh:AutomationRunResourceRunID
- mgh:AutomationUnitResourceAutomationUnitArn
- mgh:ConnectionResourceConnectionArn
- mgh:RequestTag/${TagKey}
- mgh:ResourceTag/${TagKey}
- mgh:TagKeys
- networkmanager:directConnectGatewayArn
- networkmanager:edgeLocations
- q:GroupId
- q:RequestTag/${TagKey}
- q:ResourceTag/${TagKey}
- q:TagKeys
- q:UserId
- qbusiness:GroupId
- qbusiness:UserId
- quicksight:Group
- quicksight:GroupId
- redshift-data:glue-catalog-arn
- redshift-data:session-owner-iam-userid
- redshift-serverless:managedWorkgroupName
- redshift:IntegrationSourceArn
- redshift:IntegrationTargetArn
- resource-explorer-2:Operation
- route53:VPCs
- s3:ObjectCreationOperation
- s3:if-match
- s3:if-none-match
- s3express:AllAccessRestrictedToLocalZoneGroup
- s3express:x-amz-server-side-encryption
- s3express:x-amz-server-side-encryption-aws-kms-key-id
- sagemaker-mlflow:ResourceTag/${TagKey}
- ses:MultiRegionEndpointId
- ses:ReplicaRegion
- ssm:Policies
- sts:TaskPolicyArn
- vpc-lattice:ResourceConfigurationArn
- vpc-lattice:VpcEndpointId
- wisdom:MessageTemplate/RoutingProfileArn
- wisdom:SearchFilter/Qualifier

## [0.658.0](https://github.com/udondan/iam-floyd/compare/v0.655.0...v0.658.0) (2024-08-02)

:warning: **Removed actions:**

- ecr:DescribeRepositoryCreationTemplate
- sagemaker:DeleteOptimization

:warning: **Removed resource types:**

- ssm:resourcearn

**New actions:**

- arc-zonal-shift:GetAutoshiftObserverNotificationStatus
- arc-zonal-shift:UpdateAutoshiftObserverNotificationStatus
- bedrock:CreateModelCopyJob
- bedrock:GetModelCopyJob
- bedrock:ListModelCopyJobs
- cleanrooms:CreateConfiguredTableAssociationAnalysisRule
- cleanrooms:CreateIdMappingTable
- cleanrooms:CreateIdNamespaceAssociation
- cleanrooms:DeleteConfiguredTableAssociationAnalysisRule
- cleanrooms:DeleteIdMappingTable
- cleanrooms:DeleteIdNamespaceAssociation
- cleanrooms:GetCollaborationIdNamespaceAssociation
- cleanrooms:GetConfiguredTableAssociationAnalysisRule
- cleanrooms:GetIdMappingTable
- cleanrooms:GetIdNamespaceAssociation
- cleanrooms:ListCollaborationIdNamespaceAssociations
- cleanrooms:ListIdMappingTables
- cleanrooms:ListIdNamespaceAssociations
- cleanrooms:PopulateIdMappingTable
- cleanrooms:UpdateConfiguredTableAssociationAnalysisRule
- cleanrooms:UpdateIdMappingTable
- cleanrooms:UpdateIdNamespaceAssociation
- customer-verification:CreateUploadUrls
- ecr:DescribeRepositoryCreationTemplates
- ecr:UpdateRepositoryCreationTemplate
- elasticloadbalancing:DeleteSharedTrustStoreAssociation
- elasticloadbalancing:GetResourcePolicy
- entityresolution:UseWorkflow
- resiliencehub:AcceptResourceGroupingRecommendations
- resiliencehub:DescribeResourceGroupingRecommendationTask
- resiliencehub:ListResourceGroupingRecommendations
- resiliencehub:RejectResourceGroupingRecommendations
- resiliencehub:StartResourceGroupingRecommendationTask
- sagemaker:DeleteOptimizationJob
- workmail:DeliverToMailbox

**New resource types:**

- bedrock:model-copy-job
- cleanrooms:idmappingtable
- cleanrooms:idnamespaceassociation
- ssm:opsitemgroup

**New condition keys:**

- eks:authenticationMode
- eks:supportType

## [0.657.0] (2024-07-30)

:warning: **Removed actions:**

- ecr:DescribeRepositoryCreationTemplate
- sagemaker:DeleteOptimization

:warning: **Removed resource types:**

- ssm:resourcearn

**New actions:**

- cleanrooms:CreateConfiguredTableAssociationAnalysisRule
- cleanrooms:CreateIdMappingTable
- cleanrooms:CreateIdNamespaceAssociation
- cleanrooms:DeleteConfiguredTableAssociationAnalysisRule
- cleanrooms:DeleteIdMappingTable
- cleanrooms:DeleteIdNamespaceAssociation
- cleanrooms:GetCollaborationIdNamespaceAssociation
- cleanrooms:GetConfiguredTableAssociationAnalysisRule
- cleanrooms:GetIdMappingTable
- cleanrooms:GetIdNamespaceAssociation
- cleanrooms:ListCollaborationIdNamespaceAssociations
- cleanrooms:ListIdMappingTables
- cleanrooms:ListIdNamespaceAssociations
- cleanrooms:PopulateIdMappingTable
- cleanrooms:UpdateConfiguredTableAssociationAnalysisRule
- cleanrooms:UpdateIdMappingTable
- cleanrooms:UpdateIdNamespaceAssociation
- customer-verification:CreateUploadUrls
- ecr:DescribeRepositoryCreationTemplates
- ecr:UpdateRepositoryCreationTemplate
- elasticloadbalancing:DeleteSharedTrustStoreAssociation
- elasticloadbalancing:GetResourcePolicy
- entityresolution:UseWorkflow
- sagemaker:DeleteOptimizationJob
- workmail:DeliverToMailbox

**New resource types:**

- cleanrooms:idmappingtable
- cleanrooms:idnamespaceassociation
- ssm:opsitemgroup

**New condition keys:**

- eks:authenticationMode
- eks:supportType

## [0.656.0] (2024-07-26)

:warning: **Removed actions:**

- ecr:DescribeRepositoryCreationTemplate
- sagemaker:DeleteOptimization

:warning: **Removed resource types:**

- ssm:resourcearn

**New actions:**

- cleanrooms:CreateConfiguredTableAssociationAnalysisRule
- cleanrooms:CreateIdMappingTable
- cleanrooms:CreateIdNamespaceAssociation
- cleanrooms:DeleteConfiguredTableAssociationAnalysisRule
- cleanrooms:DeleteIdMappingTable
- cleanrooms:DeleteIdNamespaceAssociation
- cleanrooms:GetCollaborationIdNamespaceAssociation
- cleanrooms:GetConfiguredTableAssociationAnalysisRule
- cleanrooms:GetIdMappingTable
- cleanrooms:GetIdNamespaceAssociation
- cleanrooms:ListCollaborationIdNamespaceAssociations
- cleanrooms:ListIdMappingTables
- cleanrooms:ListIdNamespaceAssociations
- cleanrooms:PopulateIdMappingTable
- cleanrooms:UpdateConfiguredTableAssociationAnalysisRule
- cleanrooms:UpdateIdMappingTable
- cleanrooms:UpdateIdNamespaceAssociation
- ecr:DescribeRepositoryCreationTemplates
- ecr:UpdateRepositoryCreationTemplate
- entityresolution:UseWorkflow
- sagemaker:DeleteOptimizationJob
- workmail:DeliverToMailbox

**New resource types:**

- cleanrooms:idmappingtable
- cleanrooms:idnamespaceassociation
- ssm:opsitemgroup

**New condition keys:**

- eks:authenticationMode
- eks:supportType

## [0.655.0](https://github.com/udondan/iam-floyd/compare/v0.654.0...v0.655.0) (2024-07-23)

**New actions:**

- connect:SearchAgentStatuses
- connect:SearchUserHierarchyGroups
- quicksight:BatchCreateTopicReviewedAnswer
- quicksight:BatchDeleteTopicReviewedAnswer
- quicksight:ListTopicReviewedAnswers
- resource-explorer-2:DeleteResourcePolicy
- resource-explorer-2:GetResourcePolicy
- resource-explorer-2:PutResourcePolicy

**Updated action access level:**

- connect:ListAuthenticationProfiles: Read -> List

## [0.654.0](https://github.com/udondan/iam-floyd/compare/v0.651.0...v0.654.0) (2024-07-13)

:warning: **Removed condition keys:**

- rds:MultiTenant

**New services:**

- appstudio

**New actions:**

- appstudio:GetAccountStatus
- appstudio:GetEnablementJobStatus
- appstudio:StartEnablementJob
- appstudio:StartRollbackEnablementJob
- appstudio:StartTeamDeployment
- bedrock:CreateFlow
- bedrock:CreateFlowAlias
- bedrock:CreateFlowVersion
- bedrock:CreatePrompt
- bedrock:CreatePromptVersion
- bedrock:DeleteAgentMemory
- bedrock:DeleteFlow
- bedrock:DeleteFlowAlias
- bedrock:DeleteFlowVersion
- bedrock:DeletePrompt
- bedrock:GetAgentMemory
- bedrock:GetFlow
- bedrock:GetFlowAlias
- bedrock:GetFlowVersion
- bedrock:GetPrompt
- bedrock:InvokeFlow
- bedrock:ListFlowAliases
- bedrock:ListFlowVersions
- bedrock:ListFlows
- bedrock:ListPrompts
- bedrock:PrepareFlow
- bedrock:UpdateFlow
- bedrock:UpdateFlowAlias
- bedrock:UpdatePrompt
- cloudfront:UpdateDistributionWithStagingConfig
- ivs:DeletePublicKey
- ivs:GetPublicKey
- ivs:ImportPublicKey
- ivs:ListPublicKeys
- license-manager-linux-subscriptions:DeregisterSubscriptionProvider
- license-manager-linux-subscriptions:GetRegisteredSubscriptionProvider
- license-manager-linux-subscriptions:ListRegisteredSubscriptionProviders
- license-manager-linux-subscriptions:ListTagsForResource
- license-manager-linux-subscriptions:RegisterSubscriptionProvider
- license-manager-linux-subscriptions:TagResource
- license-manager-linux-subscriptions:UntagResource
- mediaconvert:SearchJobs
- medical-imaging:GetDICOMInstanceFrames
- medical-imaging:GetDICOMInstanceMetadata
- qapps:ListTagsForResource
- qapps:UntagResource
- sagemaker:CreateOptimizationJob
- sagemaker:DeleteOptimization
- sagemaker:DescribeOptimizationJob
- sagemaker:ListOptimizationJobs
- sagemaker:StopOptimizationJob

**New resource types:**

- bedrock:flow
- bedrock:flow-alias
- bedrock:prompt
- bedrock:prompt-version
- ivs:Public-Key
- license-manager-linux-subscriptions:subscription-provider
- sagemaker:optimization-job

**New condition keys:**

- license-manager-linux-subscriptions:RequestTag/${TagKey}
- license-manager-linux-subscriptions:ResourceTag/${TagKey}
- license-manager-linux-subscriptions:TagKeys
- qapps:AppIsPublished
- qapps:SessionIsShared
- qapps:UserIsAppOwner
- qapps:UserIsSessionModerator

## [0.653.0] (2024-07-12)

:warning: **Removed condition keys:**

- rds:MultiTenant

**New services:**

- appstudio

**New actions:**

- bedrock:CreateFlow
- bedrock:CreateFlowAlias
- bedrock:CreateFlowVersion
- bedrock:CreatePrompt
- bedrock:CreatePromptVersion
- bedrock:DeleteAgentMemory
- bedrock:DeleteFlow
- bedrock:DeleteFlowAlias
- bedrock:DeleteFlowVersion
- bedrock:DeletePrompt
- bedrock:GetAgentMemory
- bedrock:GetFlow
- bedrock:GetFlowAlias
- bedrock:GetFlowVersion
- bedrock:GetPrompt
- bedrock:InvokeFlow
- bedrock:ListFlowAliases
- bedrock:ListFlowVersions
- bedrock:ListFlows
- bedrock:ListPrompts
- bedrock:PrepareFlow
- bedrock:UpdateFlow
- bedrock:UpdateFlowAlias
- bedrock:UpdatePrompt
- cloudfront:UpdateDistributionWithStagingConfig
- license-manager-linux-subscriptions:DeregisterSubscriptionProvider
- license-manager-linux-subscriptions:GetRegisteredSubscriptionProvider
- license-manager-linux-subscriptions:ListRegisteredSubscriptionProviders
- license-manager-linux-subscriptions:ListTagsForResource
- license-manager-linux-subscriptions:RegisterSubscriptionProvider
- license-manager-linux-subscriptions:TagResource
- license-manager-linux-subscriptions:UntagResource
- mediaconvert:SearchJobs
- medical-imaging:GetDICOMInstanceFrames
- medical-imaging:GetDICOMInstanceMetadata
- qapps:ListTagsForResource
- qapps:UntagResource
- sagemaker:CreateOptimizationJob
- sagemaker:DeleteOptimization
- sagemaker:DescribeOptimizationJob
- sagemaker:ListOptimizationJobs
- sagemaker:StopOptimizationJob

**New resource types:**

- bedrock:flow
- bedrock:flow-alias
- bedrock:prompt
- bedrock:prompt-version
- license-manager-linux-subscriptions:subscription-provider
- sagemaker:optimization-job

**New condition keys:**

- license-manager-linux-subscriptions:RequestTag/${TagKey}
- license-manager-linux-subscriptions:ResourceTag/${TagKey}
- license-manager-linux-subscriptions:TagKeys
- qapps:AppIsPublished
- qapps:SessionIsShared
- qapps:UserIsAppOwner
- qapps:UserIsSessionModerator

## [0.652.0] (2024-07-10)

**New actions:**

- mediaconvert:SearchJobs
- qapps:ListTagsForResource
- qapps:UntagResource

**New condition keys:**

- qapps:AppIsPublished
- qapps:SessionIsShared
- qapps:UserIsAppOwner
- qapps:UserIsSessionModerator

## [0.651.0](https://github.com/udondan/iam-floyd/compare/v0.650.0...v0.651.0) (2024-07-06)

**New services:**

- ssm-quicksetup

**New actions:**

- sagemaker:CreateHubContentReference
- sagemaker:DeleteHubContentReference
- sagemaker:DeployHubModel

## [0.650.0](https://github.com/udondan/iam-floyd/compare/v0.648.0...v0.650.0) (2024-07-02)

**New actions:**

- cloudhsm:DeleteResourcePolicy
- cloudhsm:GetResourcePolicy
- cloudhsm:PutResourcePolicy
- controltower:ListLandingZoneOperations
- datazone:CreateAssetFilter
- datazone:DeleteAssetFilter
- datazone:GetAssetFilter
- datazone:GetLineageNode
- datazone:ListAssetFilters
- datazone:ListLineageNodeHistory
- datazone:PostLineageEvent
- datazone:UpdateAssetFilter
- ec2:DescribeTrafficMirrorFilterRules
- profile:CreateSnapshot
- profile:GetSnapshot
- qapps:AssociateLibraryItemReview
- qapps:DisassociateLibraryItemReview
- qapps:GetQAppSession
- qapps:GetQAppSessionMetadata
- qapps:ImportDocument
- qapps:PredictQApp
- qapps:TagResource
- qapps:UpdateQAppSession
- qapps:UpdateQAppSessionMetadata
- workspaces:CreateWorkspacesPool
- workspaces:DescribeWorkspacesPoolSessions
- workspaces:DescribeWorkspacesPools
- workspaces:ModifyStreamingProperties
- workspaces:StartWorkspacesPool
- workspaces:StopWorkspacesPool
- workspaces:TerminateWorkspacesPool
- workspaces:TerminateWorkspacesPoolSession
- workspaces:UpdateWorkspacesPool

**New resource types:**

- qapps:qapp
- qapps:qapp-session
- workspaces:workspacespoolid

**New condition keys:**

- eks:bootstrapSelfManagedAddons
- qapps:RequestTag/${TagKey}
- qapps:ResourceTag/${TagKey}
- qapps:TagKeys

## [0.649.0] (2024-06-28)

**New actions:**

- controltower:ListLandingZoneOperations
- ec2:DescribeTrafficMirrorFilterRules

**New condition keys:**

- eks:bootstrapSelfManagedAddons

## [0.648.0](https://github.com/udondan/iam-floyd/compare/v0.647.0...v0.648.0) (2024-06-26)

**New actions:**

- glue:CreateUsageProfile
- glue:DeleteUsageProfile
- glue:GetUsageProfile
- glue:ListUsageProfiles
- glue:UpdateUsageProfile

**New resource types:**

- glue:usageProfile

## [0.647.0](https://github.com/udondan/iam-floyd/compare/v0.646.0...v0.647.0) (2024-06-22)

**New actions:**

- compute-optimizer:ExportRDSDatabaseRecommendations
- compute-optimizer:GetRDSDatabaseRecommendationProjectedMetrics
- compute-optimizer:GetRDSDatabaseRecommendations
- connect:CreateAuthenticationProfile
- connect:DescribeAuthenticationProfile
- connect:ListAuthenticationProfiles
- connect:UpdateAuthenticationProfile

**New resource types:**

- connect:authentication-profile

## [0.646.0](https://github.com/udondan/iam-floyd/compare/v0.645.0...v0.646.0) (2024-06-21)

**New actions:**

- cloudshell:DescribeEnvironments

**New condition keys:**

- cloudshell:SecurityGroupIds
- cloudshell:SubnetIds
- cloudshell:VpcIds

## [0.645.0](https://github.com/udondan/iam-floyd/compare/v0.644.0...v0.645.0) (2024-06-20)

**New services:**

- sagemaker-mlflow

**New actions:**

- bedrock:AllowVendedLogDeliveryForResource
- kms:DeriveSharedSecret
- macie2:BatchUpdateAutomatedDiscoveryAccounts
- macie2:ListAutomatedDiscoveryAccounts
- sagemaker:CreateMlflowTrackingServer
- sagemaker:CreatePresignedMlflowTrackingServerUrl
- sagemaker:DeleteMlflowTrackingServer
- sagemaker:DescribeMlflowTrackingServer
- sagemaker:ListMlflowTrackingServers
- sagemaker:StartMlflowTrackingServer
- sagemaker:StopMlflowTrackingServer
- sagemaker:UpdateMlflowTrackingServer

**New resource types:**

- sagemaker:mlflow-tracking-server

**New condition keys:**

- kms:KeyAgreementAlgorithm

## [0.644.0](https://github.com/udondan/iam-floyd/compare/v0.643.0...v0.644.0) (2024-06-16)

**New services:**

- application-signals
- apptest
- pca-connector-scep
- supportrecommendations

**New actions:**

- access-analyzer:CheckNoPublicAccess
- access-analyzer:GenerateFindingRecommendation
- access-analyzer:GetFindingRecommendation
- account:AcceptPrimaryEmailUpdate
- account:GetPrimaryEmail
- account:StartPrimaryEmailUpdate
- batch:GetJobQueueSnapshot
- chatbot:ListTagsForResource
- chatbot:TagResource
- chatbot:UntagResource
- cloudtrail:GenerateQuery
- connect:SearchContactFlowModules
- connect:SearchContactFlows
- controltower:ListControlOperations
- datazone:AssociateEnvironmentRole
- datazone:CreateEnvironmentAction
- datazone:DeleteEnvironmentAction
- datazone:DisassociateEnvironmentRole
- datazone:GetEnvironmentAction
- datazone:ListEnvironmentActions
- datazone:UpdateEnvironmentAction
- ec2:DisableImageDeregistrationProtection
- ec2:EnableImageDeregistrationProtection
- ec2:GetInstanceTpmEkPub
- emr-serverless:AccessLivyEndpoints
- emr-serverless:ListJobRunAttempts
- entityresolution:BatchDeleteUniqueId
- geo:ForecastGeofenceEvents
- geo:VerifyDevicePosition
- glue:BatchPutDataQualityStatisticAnnotation
- glue:DescribeConnectionType
- glue:DescribeEntity
- glue:GetDataQualityModel
- glue:GetDataQualityModelResult
- glue:ListConnectionTypes
- glue:ListDataQualityStatisticAnnotations
- glue:ListDataQualityStatistics
- glue:ListEntities
- glue:PutDataQualityProfileAnnotation
- glue:RefreshOAuth2Tokens
- guardduty:CreateMalwareProtectionPlan
- guardduty:DeleteMalwareProtectionPlan
- guardduty:GetMalwareProtectionPlan
- guardduty:ListMalwareProtectionPlans
- guardduty:UpdateMalwareProtectionPlan
- lakeformation:GetDataLakePrincipal
- launchwizard:GetWorkloadDeploymentPattern
- launchwizard:ListTagsForResource
- launchwizard:TagResource
- launchwizard:UntagResource
- payments:ListPaymentInstruments
- payments:ListTagsForResource
- payments:TagResource
- payments:UntagResource
- payments:UpdatePaymentInstrument
- s3:PauseReplication
- ses:CreateAddonInstance
- ses:CreateAddonSubscription
- ses:CreateArchive
- ses:CreateIngressPoint
- ses:CreateRelay
- ses:CreateRuleSet
- ses:CreateTrafficPolicy
- ses:DeleteAddonInstance
- ses:DeleteAddonSubscription
- ses:DeleteArchive
- ses:DeleteIngressPoint
- ses:DeleteRelay
- ses:DeleteRuleSet
- ses:DeleteTrafficPolicy
- ses:GetAddonInstance
- ses:GetAddonSubscription
- ses:GetArchive
- ses:GetArchiveExport
- ses:GetArchiveMessage
- ses:GetArchiveMessageContent
- ses:GetArchiveSearch
- ses:GetArchiveSearchResults
- ses:GetIngressPoint
- ses:GetRelay
- ses:GetRuleSet
- ses:GetTrafficPolicy
- ses:ListAddonInstances
- ses:ListAddonSubscriptions
- ses:ListArchiveExports
- ses:ListArchiveSearches
- ses:ListArchives
- ses:ListIngressPoints
- ses:ListRelays
- ses:ListRuleSets
- ses:ListTrafficPolicies
- ses:StartArchiveExport
- ses:StartArchiveSearch
- ses:StopArchiveExport
- ses:StopArchiveSearch
- ses:UpdateArchive
- ses:UpdateIngressPoint
- ses:UpdateRelay
- ses:UpdateRuleSet
- ses:UpdateTrafficPolicy
- swf:DeleteActivityType
- swf:DeleteWorkflowType
- tax:BatchDeleteTaxRegistration

**New resource types:**

- guardduty:malwareprotectionplan
- launchwizard:deployment
- payments:payment-instrument
- ses:addon-instance
- ses:addon-subscription
- ses:mailmanager-archive
- ses:mailmanager-ingress-point
- ses:mailmanager-rule-set
- ses:mailmanager-smtp-relay
- ses:mailmanager-traffic-policy

**New condition keys:**

- account:EmailTargetDomain
- ecs:fargate-ephemeral-storage-kms-key
- launchwizard:RequestTag/${TagKey}
- launchwizard:ResourceTag/${TagKey}
- launchwizard:TagKeys
- payments:RequestTag/${TagKey}
- payments:ResourceTag/${TagKey}
- payments:TagKeys
- pi:Dimensions
- s3:destinationRegion
- s3:isReplicationPauseRequest
- ses:AddonSubscriptionArn
- ses:MailManagerIngressPointType
- ses:MailManagerRuleSetArn
- ses:MailManagerTrafficPolicyArn

## [0.643.0](https://github.com/udondan/iam-floyd/compare/v0.642.0...v0.643.0) (2024-05-21)

**New services:**

- user-subscriptions

**New actions:**

- medical-imaging:GetDICOMInstance
- quicksight:DescribeKeyRegistration
- quicksight:UpdateKeyRegistration

**New condition keys:**

- quicksight:KmsKeyArns

## [0.642.0](https://github.com/udondan/iam-floyd/compare/v0.641.0...v0.642.0) (2024-05-17)

**New actions:**

- grafana:CreateWorkspaceServiceAccount
- grafana:CreateWorkspaceServiceAccountToken
- grafana:DeleteWorkspaceServiceAccount
- grafana:DeleteWorkspaceServiceAccountToken
- grafana:ListWorkspaceServiceAccountTokens
- grafana:ListWorkspaceServiceAccounts
- wisdom:CreateContentAssociation
- wisdom:DeleteContentAssociation
- wisdom:GetContentAssociation
- wisdom:ListContentAssociations

**New resource types:**

- wisdom:ContentAssociation

## [0.641.0](https://github.com/udondan/iam-floyd/compare/v0.640.0...v0.641.0) (2024-05-16)

**New actions:**

- cases:DeleteRelatedItem
- connect:BatchGetAttachedFileMetadata
- connect:CompleteAttachedFileUpload
- connect:DeleteAttachedFile
- connect:GetAttachedFile
- connect:StartAttachedFileUpload
- events:UpdateEventBus

**New resource types:**

- connect:attached-file

**New condition keys:**

- connect:UserArn

## [0.640.0](https://github.com/udondan/iam-floyd/compare/v0.639.0...v0.640.0) (2024-05-11)

**New actions:**

- q:CreateAssignment
- q:DeleteAssignment
- ssm-sap:ListOperationEvents
- ssm-sap:StartApplication
- ssm-sap:StopApplication

## [0.639.0](https://github.com/udondan/iam-floyd/compare/v0.638.0...v0.639.0) (2024-05-10)

**New actions:**

- m2:ListBatchJobRestartPoints
- transfer:StartDirectoryListing
- vpc-lattice-svcs:Connect

**New resource types:**

- vpc-lattice-svcs:TCP Service

## [0.638.0](https://github.com/udondan/iam-floyd/compare/v0.637.0...v0.638.0) (2024-05-09)

**New actions:**

- budgets:ListTagsForResource
- budgets:TagResource
- budgets:UntagResource
- resiliencehub:ListAppAssessmentResourceDrifts
- trustedadvisor:BatchUpdateRecommendationResourceExclusion

**New condition keys:**

- budgets:RequestTag/${TagKey}
- budgets:ResourceTag/${TagKey}
- budgets:TagKeys
- memorydb:TLSEnabled
- memorydb:UserAuthenticationMode

## [0.637.0](https://github.com/udondan/iam-floyd/compare/v0.636.0...v0.637.0) (2024-05-07)

:warning: **Removed actions:**

- connect:GetFederationTokens

**New actions:**

- connect:AdminGetEmergencyAccessToken
- personalize:CreateDataDeletionJob
- personalize:DescribeDataDeletionJob
- personalize:ListDataDeletionJobs

**New resource types:**

- personalize:dataDeletionJob

## [0.636.0](https://github.com/udondan/iam-floyd/compare/v0.635.0...v0.636.0) (2024-05-03)

**New actions:**

- sms-voice:AssociateProtectConfiguration
- sms-voice:CreateProtectConfiguration
- sms-voice:DeleteAccountDefaultProtectConfiguration
- sms-voice:DeleteMediaMessageSpendLimitOverride
- sms-voice:DeleteProtectConfiguration
- sms-voice:DescribeProtectConfigurations
- sms-voice:DisassociateProtectConfiguration
- sms-voice:GetProtectConfigurationCountryRuleSet
- sms-voice:SendMediaMessage
- sms-voice:SetAccountDefaultProtectConfiguration
- sms-voice:SetMediaMessageSpendLimitOverride
- sms-voice:UpdateProtectConfiguration
- sms-voice:UpdateProtectConfigurationCountryRuleSet

**New resource types:**

- sms-voice:ProtectConfiguration

**New condition keys:**

- neptune-graph:PublicConnectivity

## [0.635.0](https://github.com/udondan/iam-floyd/compare/v0.634.0...v0.635.0) (2024-05-01)

**New services:**

- qapps

**New actions:**

- qbusiness:CancelSubscription
- qbusiness:CreateSubscription
- qbusiness:ListSubscriptions
- qbusiness:UpdateSubscription
- timestream:DescribeAccountSettings
- timestream:UpdateAccountSettings

**New resource types:**

- qbusiness:subscription
- sts:self-session

## [0.634.0](https://github.com/udondan/iam-floyd/compare/v0.633.0...v0.634.0) (2024-04-30)

**New actions:**

- codepipeline:RollbackStage
- healthlake:SearchEverything

**New condition keys:**

- ec2:transitGatewayAttachmentId
- ec2:transitGatewayConnectPeerId
- ec2:transitGatewayId
- ec2:transitGatewayMulticastDomainId
- ec2:transitGatewayPolicyTableId
- ec2:transitGatewayRouteTableAnnouncementId
- ec2:transitGatewayRouteTableId

## [0.633.0](https://github.com/udondan/iam-floyd/compare/v0.632.0...v0.633.0) (2024-04-27)

:warning: **Removed actions:**

- workmail:AddMembersToGroup
- workmail:DescribeDirectories
- workmail:DescribeKmsKeys
- workmail:DescribeMailGroups
- workmail:DescribeMailUsers
- workmail:DescribeOrganizations
- workmail:GetMailGroupDetails
- workmail:ListMembersInMailGroup
- workmail:RemoveMembersFromGroup
- workmail:ResetUserPassword
- workmail:SetAdmin

## [0.632.0](https://github.com/udondan/iam-floyd/compare/v0.631.0...v0.632.0) (2024-04-26)

**New services:**

- signin

**New actions:**

- appmesh-preview:DeleteMeshPolicy
- appmesh-preview:GetMeshPolicy
- appmesh-preview:PutMeshPolicy
- cases:DeleteField
- cases:DeleteLayout
- cases:DeleteTemplate
- gamelift:CreateContainerGroupDefinition
- gamelift:DeleteContainerGroupDefinition
- gamelift:DescribeContainerGroupDefinition
- gamelift:ListContainerGroupDefinitions
- quicksight:UpdateSPICECapacityConfiguration
- states:ValidateStateMachineDefinition
- workdocs:DescribeInstanceExports
- workdocs:StartInstanceExport

**New resource types:**

- gamelift:containerGroupDefinition
- workdocs:organization

## [0.631.0](https://github.com/udondan/iam-floyd/compare/v0.630.0...v0.631.0) (2024-04-24)

**New services:**

- route53profiles

**New actions:**

- bedrock:ApplyGuardrail
- bedrock:CreateEvaluationJob
- bedrock:GetEvaluationJob
- bedrock:ListEvaluationJobs
- bedrock:StopEvaluationJob
- rolesanywhere:DeleteAttributeMapping
- rolesanywhere:PutAttributeMapping

**New resource types:**

- bedrock:evaluation-job

## [0.630.0](https://github.com/udondan/iam-floyd/compare/v0.629.0...v0.630.0) (2024-04-23)

**New actions:**

- appmesh:DeleteMeshPolicy
- appmesh:GetMeshPolicy
- appmesh:PutMeshPolicy

## [0.629.0](https://github.com/udondan/iam-floyd/compare/v0.628.0...v0.629.0) (2024-04-20)

**New actions:**

- q:GetIdentityMetadata
- q:PassRequest
- q:UpdateTroubleshootingCommandResult
- workspaces:AcceptAccountLinkInvitation
- workspaces:CreateAccountLinkInvitation
- workspaces:DeleteAccountLinkInvitation
- workspaces:GetAccountLink
- workspaces:ListAccountLinks
- workspaces:RejectAccountLinkInvitation

## [0.628.0](https://github.com/udondan/iam-floyd/compare/v0.627.0...v0.628.0) (2024-04-18)

**New actions:**

- emr-containers:CreateSecurityConfiguration
- emr-containers:DescribeSecurityConfiguration
- emr-containers:ListSecurityConfigurations
- internetmonitor:GetInternetEvent
- internetmonitor:ListInternetEvents
- outposts:CancelCapacityTask
- outposts:GetCapacityTask
- outposts:GetOutpostSupportedInstanceTypes
- outposts:ListCapacityTasks
- outposts:StartCapacityTask

**New resource types:**

- emr-containers:securityConfiguration
- internetmonitor:InternetEvent

## [0.627.0](https://github.com/udondan/iam-floyd/compare/v0.626.0...v0.627.0) (2024-04-17)

**New actions:**

- kms:ListKeyRotations
- kms:RotateKeyOnDemand
- wellarchitected:ConfigureIntegration
- wellarchitected:GetGlobalSettings
- wellarchitected:UpdateIntegration

**New condition keys:**

- kms:RotationPeriodInDays
- wellarchitected:JiraProjectKey

## [0.626.0](https://github.com/udondan/iam-floyd/compare/v0.625.0...v0.626.0) (2024-04-13)

**New actions:**

- glue:BatchGetStageFiles
- glue:GetEnvironment
- glue:GetExecutors
- glue:GetExecutorsThreads
- glue:GetLogParsingStatus
- glue:GetQueries
- glue:GetQuery
- glue:GetStage
- glue:GetStageAttempt
- glue:GetStageAttemptTaskList
- glue:GetStageAttemptTaskSummary
- glue:GetStageFiles
- glue:GetStages
- glue:GetStorage
- glue:GetStorageUnit
- glue:RequestLogParsing

## [0.625.0](https://github.com/udondan/iam-floyd/compare/v0.624.0...v0.625.0) (2024-04-12)

**New actions:**

- medialive:CreateCloudWatchAlarmTemplate
- medialive:CreateCloudWatchAlarmTemplateGroup
- medialive:CreateEventBridgeRuleTemplate
- medialive:CreateEventBridgeRuleTemplateGroup
- medialive:CreateSignalMap
- medialive:DeleteCloudWatchAlarmTemplate
- medialive:DeleteCloudWatchAlarmTemplateGroup
- medialive:DeleteEventBridgeRuleTemplate
- medialive:DeleteEventBridgeRuleTemplateGroup
- medialive:DeleteSignalMap
- medialive:GetCloudWatchAlarmTemplate
- medialive:GetCloudWatchAlarmTemplateGroup
- medialive:GetEventBridgeRuleTemplate
- medialive:GetEventBridgeRuleTemplateGroup
- medialive:GetSignalMap
- medialive:ListCloudWatchAlarmTemplateGroups
- medialive:ListCloudWatchAlarmTemplates
- medialive:ListEventBridgeRuleTemplateGroups
- medialive:ListEventBridgeRuleTemplates
- medialive:ListSignalMaps
- medialive:StartDeleteMonitorDeployment
- medialive:StartMonitorDeployment
- medialive:StartUpdateSignalMap
- medialive:UpdateCloudWatchAlarmTemplate
- medialive:UpdateCloudWatchAlarmTemplateGroup
- medialive:UpdateEventBridgeRuleTemplate
- medialive:UpdateEventBridgeRuleTemplateGroup
- scn:SendDataIntegrationEvent
- wisdom:UpdateSession

**New resource types:**

- medialive:cloudwatch-alarm-template
- medialive:cloudwatch-alarm-template-group
- medialive:eventbridge-rule-template
- medialive:eventbridge-rule-template-group
- medialive:signal-map

## [0.624.0](https://github.com/udondan/iam-floyd/compare/v0.623.0...v0.624.0) (2024-04-11)

**New services:**

- controlcatalog

**New actions:**

- datazone:AddPolicyGrant
- datazone:ListPolicyGrants
- datazone:RemovePolicyGrant
- datazone:UpdateDataSourceRunActivities

## [0.623.0](https://github.com/udondan/iam-floyd/compare/v0.622.0...v0.623.0) (2024-04-09)

**New actions:**

- cleanrooms:BatchGetSchemaAnalysisRule
- neptune-graph:StartImportTask
- rds:ModifyIntegration

## [0.622.0](https://github.com/udondan/iam-floyd/compare/v0.621.0...v0.622.0) (2024-04-05)

**New actions:**

- docdb-elastic:CopyClusterSnapshot
- docdb-elastic:StartCluster
- docdb-elastic:StopCluster

## [0.621.0](https://github.com/udondan/iam-floyd/compare/v0.620.0...v0.621.0) (2024-04-04)

**New actions:**

- aws-marketplace:DescribeAssessment
- aws-marketplace:ListAssessments
- cloudformation:ListStackSetAutoDeploymentTargets
- entityresolution:AddPolicyStatement
- entityresolution:CreateIdNamespace
- entityresolution:DeleteIdNamespace
- entityresolution:DeletePolicyStatement
- entityresolution:GetIdNamespace
- entityresolution:GetPolicy
- entityresolution:ListIdNamespaces
- entityresolution:PutPolicy
- entityresolution:UpdateIdNamespace
- entityresolution:UseIdNamespace

**New resource types:**

- entityresolution:IdNamespace

## [0.620.0](https://github.com/udondan/iam-floyd/compare/v0.619.0...v0.620.0) (2024-04-02)

:warning: **Removed actions:**

- workmail:CreateMailUser
- workmail:DisableMailGroups
- workmail:DisableMailUsers
- workmail:EnableMailGroups
- workmail:EnableMailUsers
- workmail:GetMailUserDetails
- workmail:SetMailGroupDetails
- workmail:SetMailUserDetails

**New services:**

- codeconnections
- deadline

**New actions:**

- datazone:DeleteTimeSeriesDataPoints
- datazone:GetTimeSeriesDataPoint
- datazone:ListTimeSeriesDataPoints
- datazone:PostTimeSeriesDataPoints
- iotwireless:GetMetricConfiguration
- iotwireless:GetMetrics
- iotwireless:UpdateMetricConfiguration

## [0.619.0](https://github.com/udondan/iam-floyd/compare/v0.618.0...v0.619.0) (2024-03-31)

**New actions:**

- sagemaker:DeleteResourcePolicy
- sagemaker:GetResourcePolicy
- sagemaker:PutResourcePolicy

## [0.618.0](https://github.com/udondan/iam-floyd/compare/v0.617.0...v0.618.0) (2024-03-29)

**New actions:**

- groundtruthlabeling:CreateBatch
- groundtruthlabeling:CreateIntakeForm
- groundtruthlabeling:CreateProject
- groundtruthlabeling:CreateWorkflowDefinition
- groundtruthlabeling:GenerateLIDARPreviewTaskConfigJob
- groundtruthlabeling:GetBatch
- groundtruthlabeling:GetIntakeFormStatus
- groundtruthlabeling:ListBatches
- groundtruthlabeling:ListProjects
- groundtruthlabeling:RunGenerateManifestMetricsJob
- groundtruthlabeling:UpdateBatch

## [0.617.0](https://github.com/udondan/iam-floyd/compare/v0.616.0...v0.617.0) (2024-03-28)

**New actions:**

- ec2:DescribeMacHosts
- ec2:GetInstanceMetadataDefaults
- ec2:ModifyInstanceMetadataDefaults
- finspace:DeleteKxClusterNode

## [0.616.0](https://github.com/udondan/iam-floyd/compare/v0.615.0...v0.616.0) (2024-03-27)

**New actions:**

- ce:ListCostAllocationTagBackfillHistory
- ce:StartCostAllocationTagBackfill
- internetmonitor:Link
- migrationhub-orchestrator:CreateTemplate
- migrationhub-orchestrator:DeleteTemplate
- migrationhub-orchestrator:UpdateTemplate
- savingsplans:ReturnSavingsPlan

**New resource types:**

- migrationhub-orchestrator:template

## [0.615.0](https://github.com/udondan/iam-floyd/compare/v0.614.0...v0.615.0) (2024-03-23)

:warning: **Removed condition keys:**

- ec2:PreSharedKeys

**New actions:**

- codeartifact:CreatePackageGroup
- codeartifact:DeletePackageGroup
- codeartifact:DescribePackageGroup
- codeartifact:GetAssociatedPackageGroup
- codeartifact:ListAllowedRepositoriesForGroup
- codeartifact:ListAssociatedPackages
- codeartifact:ListPackageGroups
- codeartifact:ListSubPackageGroups
- codeartifact:UpdatePackageGroup
- codeartifact:UpdatePackageGroupOriginConfiguration
- dynamodb:DeleteResourcePolicy
- dynamodb:PutResourcePolicy
- dynamodb:UpdateKinesisStreamingDestination
- managedblockchain-query:ListFilteredTransactionEvents
- workmail:AllowVendedLogDeliveryForResource

**New resource types:**

- codeartifact:package-group

## [0.614.0](https://github.com/udondan/iam-floyd/compare/v0.613.0...v0.614.0) (2024-03-19)

**Updated action access level:**

- migrationhub-strategy:PutLogData: List -> Write
- migrationhub-strategy:PutMetricData: List -> Write

## [0.613.0](https://github.com/udondan/iam-floyd/compare/v0.612.0...v0.613.0) (2024-03-16)

**New services:**

- timestream-influxdb

**New actions:**

- lightsail:GetSetupHistory
- lightsail:SetupInstanceHttps

## [0.612.0](https://github.com/udondan/iam-floyd/compare/v0.611.0...v0.612.0) (2024-03-12)

**New actions:**

- datazone:CancelMetadataGenerationRun
- migrationhub-strategy:PutLogData
- migrationhub-strategy:PutMetricData

## [0.611.0](https://github.com/udondan/iam-floyd/compare/v0.610.0...v0.611.0) (2024-03-10)

**New actions:**

- elasticmapreduce:SetUnhealthyNodeReplacement
- lex:CreateBotReplica
- lex:DeleteBotReplica
- lex:DescribeBotReplica
- lex:ListBotAliasReplicas
- lex:ListBotReplicas
- lex:ListBotVersionReplicas

## [0.610.0](https://github.com/udondan/iam-floyd/compare/v0.609.0...v0.610.0) (2024-03-07)

**New actions:**

- identity-sync:AllowVendedLogDeliveryForResource
- q:ListConversations
- redshift:CreateQev2IdcApplication
- redshift:DeleteQev2IdcApplication
- redshift:DescribeQev2IdcApplications
- redshift:ModifyQev2IdcApplication

**New resource types:**

- redshift:qev2idcapplication

## [0.609.0](https://github.com/udondan/iam-floyd/compare/v0.608.0...v0.609.0) (2024-03-05)

**New actions:**

- amplifyuibuilder:ListTagsForResource
- amplifyuibuilder:TagResource
- amplifyuibuilder:UntagResource
- kafkaconnect:DeleteWorkerConfiguration
- kafkaconnect:ListTagsForResource
- kafkaconnect:TagResource
- kafkaconnect:UntagResource
- wafv2:DeleteAPIKey

**New condition keys:**

- kafkaconnect:RequestTag/${TagKey}
- kafkaconnect:ResourceTag/${TagKey}
- kafkaconnect:TagKeys

## [0.608.0](https://github.com/udondan/iam-floyd/compare/v0.607.0...v0.608.0) (2024-03-02)

:warning: **Removed actions:**

- dms:CreateTest
- dms:CreateTestEnvironments
- dms:CreateTestPlan
- dms:CreateTestRun
- dms:DeleteTest
- dms:DeleteTestPlan
- dms:DescribeTestEnvironments
- dms:DescribeTestGenerationStatus
- dms:DescribeTestPlans
- dms:DescribeTestRunResultsSummaries
- dms:DescribeTestRuns
- dms:DescribeTests
- dms:ModifyTest
- dms:ModifyTestPlan
- dms:StartGenerateTests
- dms:StopGenerateTests
- dms:StopTestRun
- dms:ViewTestRunResults

:warning: **Removed condition keys:**

- dms:test-environment-tag/${TagKey}
- dms:test-plan-tag/${TagKey}
- dms:test-run-tag/${TagKey}
- dms:test-tag/${TagKey}

:warning: **Removed resource types:**

- dms:Test
- dms:TestEnvironment
- dms:TestPlan
- dms:TestRun
- rds:target

**New actions:**

- medialive:RestartChannelPipelines

## [0.607.0](https://github.com/udondan/iam-floyd/compare/v0.606.0...v0.607.0) (2024-02-24)

**New actions:**

- resource-groups:DeleteGroupPolicy
- resource-groups:GetGroupPolicy
- resource-groups:ListResourceTypes

## [0.606.0](https://github.com/udondan/iam-floyd/compare/v0.605.1...v0.606.0) (2024-02-21)

### FEATURES

In cdk-iam-floyd, the class `AwsManagedPolicy` now provides methods for directly creating objects of type `aws_iam.IManagedPolicy`,

Example:

```ts
readOnlyRole.addManagedPolicy(
  new AwsManagedPolicy().ReadOnlyAccess()
);
```

## [0.605.1](https://github.com/udondan/iam-floyd/compare/v0.605.0...v0.605.1) (2024-02-20)

### FIXES

Fixes generation of the package cdk-iam-floyd.

All versions since 0.603.0 were generating potentially false ARNs via `on*()` methods.

Instead of adding partition, region and account from the stack (as advertised) the partition was hardcoded to `aws`, region and account were `*`. Not a problem, unless your stack was not running in the `aws` partition.

## [0.605.0](https://github.com/udondan/iam-floyd/compare/v0.604.0...v0.605.0) (2024-02-20)

### ⚠️ BREAKING CHANGES

The enum `AwsManagedPolicies` now only holds the names instead of the full ARNs of all AWS managed policies.

## [0.604.0](https://github.com/udondan/iam-floyd/compare/v0.603.0...v0.604.0) (2024-02-19)

### FEATURES

1. new enum `AwsManagedPolicies`, which provides all ARNs of AWS managed polices ([483](https://github.com/udondan/iam-floyd/pull/483))

2. Adds missing (undocumented) operator `binaryNotEquals` ([481](https://github.com/udondan/iam-floyd/pull/481))

3. For easier access to simple operators, all operators now are additional available as static property. ([481](https://github.com/udondan/iam-floyd/pull/481))

   Instead of:

   ```ts
   new Operator().stringEquals()
   ```

   now you can do:

   ```ts
   Operator.stringEquals
   ```

   The methods are still available for generating more complex operators:

   ```ts
   new Operator().forAnyValue().stringEquals().ifExists()
   ```

### ⚠️ BREAKING CHANGES

The `null` Operator now is **only** a static property instead of a method, since it cannot be combined with modifiers (`forAnyValue`, `forAllValues`, `ifExists`)

If you previously used `new Operator().null()` you now need to just use `Operator.null`

## [0.603.0](https://github.com/udondan/iam-floyd/compare/v0.602.0...v0.603.0) (2024-02-17)

⚠️ BREAKING CHANGES

- Restructures the exports of the package - see [#478](https://github.com/udondan/iam-floyd/pull/478)
- The `on*()` methods of cdk-iam-floyd now generate ARNs which include the account and region of the stack. If you intentionally meant to have ARNs with wildcards for account and/or region, you need to update your code - see [#479](https://github.com/udondan/iam-floyd/pull/479)

## [0.602.0](https://github.com/udondan/iam-floyd/compare/v0.601.2...v0.602.0) (2024-02-16)

**New condition keys:**

- s3:InventoryAccessibleOptionalFields
- wafv2:LogDestinationResource
- wafv2:LogScope

## [0.601.2](https://github.com/udondan/iam-floyd/compare/v0.601.1...v0.601.2) (2024-02-13)

Fix package creation. Version 0.601.1 did not contain the `*.d.ts` files.

## [0.601.1](https://github.com/udondan/iam-floyd/compare/v0.601.0...v0.601.1) (2024-02-12)

Fix package building. Versions 0.600.0 and 0.601.0 had no content

## [0.601.0](https://github.com/udondan/iam-floyd/compare/v0.600.0...v0.601.0) (2024-02-11)

:warning: **Removed services:**

- datazonecontrol
- gamesparks
- mobilehub

:warning: **Removed actions:**

- cloudfront:UpdateDistributionWithStagingConfig
- connect:UpdatedescribeContent
- datazone:GetProjectConfiguration
- datazone:GetProjectCredentials
- datazone:ListUserProjects
- datazonecontrol:CreateAccountAssociationInvitation
- datazonecontrol:CreateDataSource
- datazonecontrol:CreateEnvironment
- datazonecontrol:DeleteDataSource
- datazonecontrol:DeleteEnvironment
- datazonecontrol:DissociateAccount
- datazonecontrol:GetAssociatedDomain
- datazonecontrol:GetDataSourceByEnvironment
- datazonecontrol:GetDomain
- datazonecontrol:GetEnvironment
- datazonecontrol:GetMetadataCollector
- datazonecontrol:GetUserPortalLoginAuthCode
- datazonecontrol:ListAccountAssociationInvitations
- datazonecontrol:ListAllAssociatedAccountsForEnvironment
- datazonecontrol:ListAssociatedEnvironments
- datazonecontrol:ListDataSources
- datazonecontrol:ListDataSourcesByEnvironment
- datazonecontrol:ListDomains
- datazonecontrol:ListEnvironment
- datazonecontrol:ListMetadataCollectorRuns
- datazonecontrol:ListMetadataCollectors
- datazonecontrol:ListProjects
- datazonecontrol:ListTagsForResource
- datazonecontrol:ReviewAccountAssociationInvitation
- datazonecontrol:TagResource
- datazonecontrol:UntagResource
- datazonecontrol:UpdateAccountAssociationDescription
- datazonecontrol:UpdateDataSource
- datazonecontrol:UpdateEnvironment
- gamesparks:CreateGame
- gamesparks:CreateSnapshot
- gamesparks:CreateStage
- gamesparks:DeleteGame
- gamesparks:DeleteStage
- gamesparks:DisconnectPlayer
- gamesparks:ExportSnapshot
- gamesparks:GetExtension
- gamesparks:GetExtensionVersion
- gamesparks:GetGame
- gamesparks:GetGameConfiguration
- gamesparks:GetGeneratedCodeJob
- gamesparks:GetPlayerConnectionStatus
- gamesparks:GetSnapshot
- gamesparks:GetStage
- gamesparks:GetStageDeployment
- gamesparks:ImportGameConfiguration
- gamesparks:InvokeBackend
- gamesparks:ListExtensionVersions
- gamesparks:ListExtensions
- gamesparks:ListGames
- gamesparks:ListGeneratedCodeJobs
- gamesparks:ListSnapshots
- gamesparks:ListStageDeployments
- gamesparks:ListStages
- gamesparks:ListTagsForResource
- gamesparks:StartGeneratedCodeJob
- gamesparks:StartStageDeployment
- gamesparks:TagResource
- gamesparks:UntagResource
- gamesparks:UpdateGame
- gamesparks:UpdateGameConfiguration
- gamesparks:UpdateSnapshot
- gamesparks:UpdateStage
- mobilehub:CreateProject
- mobilehub:CreateServiceRole
- mobilehub:DeleteProject
- mobilehub:DeleteProjectSnapshot
- mobilehub:DeployToStage
- mobilehub:DescribeBundle
- mobilehub:ExportBundle
- mobilehub:ExportProject
- mobilehub:GenerateProjectParameters
- mobilehub:GetProject
- mobilehub:GetProjectSnapshot
- mobilehub:ImportProject
- mobilehub:InstallBundle
- mobilehub:ListAvailableConnectors
- mobilehub:ListAvailableFeatures
- mobilehub:ListAvailableRegions
- mobilehub:ListBundles
- mobilehub:ListProjectSnapshots
- mobilehub:ListProjects
- mobilehub:SynchronizeProject
- mobilehub:UpdateProject
- mobilehub:ValidateProject
- mobilehub:VerifyServiceRole
- securitylake:CreateDatalake
- securitylake:CreateDatalakeAutoEnable
- securitylake:CreateDatalakeDelegatedAdmin
- securitylake:CreateDatalakeExceptionsSubscription
- securitylake:CreateSubscriptionNotificationConfiguration
- securitylake:DeleteDatalake
- securitylake:DeleteDatalakeAutoEnable
- securitylake:DeleteDatalakeDelegatedAdmin
- securitylake:DeleteDatalakeExceptionsSubscription
- securitylake:DeleteSubscriptionNotificationConfiguration
- securitylake:GetDatalake
- securitylake:GetDatalakeAutoEnable
- securitylake:GetDatalakeExceptionsExpiry
- securitylake:GetDatalakeExceptionsSubscription
- securitylake:GetDatalakeStatus
- securitylake:GetSubscriptionNotificationConfiguration
- securitylake:ListDatalakeExceptions
- securitylake:UpdateDatalake
- securitylake:UpdateDatalakeExceptionsExpiry
- securitylake:UpdateDatalakeExceptionsSubscription
- securitylake:UpdateSubscriptionNotificationConfiguration

:warning: **Removed condition keys:**

- datazonecontrol:RequestTag/${TagKey}
- datazonecontrol:ResourceTag/${TagKey}
- datazonecontrol:TagKeys
- dms:dp-tag/${TagKey}
- dms:ip-tag/${TagKey}
- dms:mp-tag/${TagKey}
- dynamodb:TagKeys
- ec2:DomainCertificateArn
- ec2:LoadBalancerArn
- gamesparks:RequestTag/${TagKey}
- gamesparks:ResourceTag/${TagKey}
- gamesparks:TagKeys

:warning: **Removed resource types:**

- cleanrooms:Collaboration
- cleanrooms:ConfiguredTable
- cleanrooms:ConfiguredTableAssociation
- cleanrooms:Membership
- datazonecontrol:data-source
- datazonecontrol:environment
- gamesparks:game
- gamesparks:stage
- iotwireless:WirelessDeviceImportTask
- mobilehub:project
- mobiletargeting:campaigns
- mobiletargeting:segments

**New services:**

- appfabric
- application-transformation
- b2bi
- bcm-data-exports
- bedrock
- cleanrooms-ml
- cloudfront-keyvaluestore
- consoleapp
- cost-optimization-hub
- customer-verification
- eks-auth
- entityresolution
- inspector-scan
- managedblockchain-query
- mapcredits
- mediapackagev2
- medical-imaging
- neptune-graph
- networkmanager-chat
- networkmonitor
- notifications
- notifications-contacts
- one
- osis
- partnercentral-account-management
- payment-cryptography
- pca-connector-ad
- q
- qbusiness
- repostspace
- s3express
- sso-oauth
- thinclient
- ts
- verified-access
- verifiedpermissions

**New actions:**

- access-analyzer:CheckAccessNotGranted
- access-analyzer:CheckNoNewAccess
- access-analyzer:GetFindingsStatistics
- amplifyuibuilder:ExchangeCodeForToken
- amplifyuibuilder:GetCodegenJob
- amplifyuibuilder:ListCodegenJobs
- amplifyuibuilder:RefreshToken
- amplifyuibuilder:StartCodegenJob
- aoss:APIAccessAll
- aoss:BatchGetEffectiveLifecyclePolicy
- aoss:BatchGetLifecyclePolicy
- aoss:CreateLifecyclePolicy
- aoss:DashboardsAccessAll
- aoss:DeleteLifecyclePolicy
- aoss:ListLifecyclePolicies
- aoss:UpdateLifecyclePolicy
- app-integrations:CreateApplication
- app-integrations:CreateApplicationAssociation
- app-integrations:DeleteApplication
- app-integrations:DeleteApplicationAssociation
- app-integrations:GetApplication
- app-integrations:ListApplicationAssociations
- app-integrations:ListApplications
- app-integrations:UpdateApplication
- appflow:CancelFlowExecutions
- appflow:ResetConnectorMetadataCache
- applicationinsights:AddWorkload
- applicationinsights:DescribeWorkload
- applicationinsights:ListWorkloads
- applicationinsights:RemoveWorkload
- applicationinsights:UpdateProblem
- applicationinsights:UpdateWorkload
- apprunner:ListServicesForAutoScalingConfiguration
- apprunner:UpdateDefaultAutoScalingConfiguration
- appstream:AssociateAppBlockBuilderAppBlock
- appstream:CreateAppBlockBuilder
- appstream:CreateAppBlockBuilderStreamingURL
- appstream:DeleteAppBlockBuilder
- appstream:DescribeAppBlockBuilderAppBlockAssociations
- appstream:DescribeAppBlockBuilders
- appstream:DisassociateAppBlockBuilderAppBlock
- appstream:StartAppBlockBuilder
- appstream:StopAppBlockBuilder
- appstream:UpdateAppBlockBuilder
- appsync:AssociateMergedGraphqlApi
- appsync:AssociateSourceGraphqlApi
- appsync:DeleteResourcePolicy
- appsync:DisassociateMergedGraphqlApi
- appsync:DisassociateSourceGraphqlApi
- appsync:GetDataSourceIntrospection
- appsync:GetGraphqlApiEnvironmentVariables
- appsync:GetResourcePolicy
- appsync:GetSourceApiAssociation
- appsync:ListSourceApiAssociations
- appsync:ListTypesByAssociation
- appsync:PutGraphqlApiEnvironmentVariables
- appsync:PutResourcePolicy
- appsync:SourceGraphQL
- appsync:StartDataSourceIntrospection
- appsync:StartSchemaMerge
- appsync:UpdateSourceApiAssociation
- aps:CreateScraper
- aps:DeleteScraper
- aps:DescribeScraper
- aps:GetDefaultScraperConfiguration
- aps:ListScrapers
- arc-zonal-shift:CreatePracticeRunConfiguration
- arc-zonal-shift:DeletePracticeRunConfiguration
- arc-zonal-shift:ListAutoshifts
- arc-zonal-shift:UpdatePracticeRunConfiguration
- arc-zonal-shift:UpdateZonalAutoshiftConfiguration
- artifact:GetAccountSettings
- artifact:PutAccountSettings
- athena:CancelCapacityReservation
- athena:CancelQueryExecution
- athena:CreateCapacityReservation
- athena:DeleteCapacityReservation
- athena:GetCapacityAssignmentConfiguration
- athena:GetCapacityReservation
- athena:GetCatalogs
- athena:GetExecutionEngine
- athena:GetExecutionEngines
- athena:GetNamespace
- athena:GetNamespaces
- athena:GetQueryExecutions
- athena:GetTable
- athena:GetTables
- athena:ListCapacityReservations
- athena:PutCapacityAssignmentConfiguration
- athena:RunQuery
- athena:UpdateCapacityReservation
- auditmanager:GetEvidenceFileUploadUrl
- aws-marketplace-management:GetAdditionalSellerNotificationRecipients
- aws-marketplace-management:GetBankAccountVerificationDetails
- aws-marketplace-management:GetSecondaryUserVerificationDetails
- aws-marketplace-management:GetSellerVerificationDetails
- aws-marketplace-management:PutAdditionalSellerNotificationRecipients
- aws-marketplace-management:PutBankAccountVerificationDetails
- aws-marketplace-management:PutSecondaryUserVerificationDetails
- aws-marketplace-management:PutSellerVerificationDetails
- aws-marketplace:DeleteResourcePolicy
- aws-marketplace:GetResourcePolicy
- aws-marketplace:PutDeploymentParameter
- aws-marketplace:PutResourcePolicy
- backup:CreateLogicallyAirGappedBackupVault
- backup:CreateRestoreTestingPlan
- backup:CreateRestoreTestingSelection
- backup:DeleteBackupVaultSharingPolicy
- backup:DeleteRestoreTestingPlan
- backup:DeleteRestoreTestingSelection
- backup:GetBackupVaultSharingPolicy
- backup:GetRestoreJobMetadata
- backup:GetRestoreTestingInferredMetadata
- backup:GetRestoreTestingPlan
- backup:GetRestoreTestingSelection
- backup:ListBackupJobSummaries
- backup:ListCopyJobSummaries
- backup:ListProtectedResourcesByBackupVault
- backup:ListRestoreJobSummaries
- backup:ListRestoreJobsByProtectedResource
- backup:ListRestoreTestingPlans
- backup:ListRestoreTestingSelections
- backup:PutBackupVaultSharingPolicy
- backup:PutRestoreValidationResult
- backup:UpdateRestoreTestingPlan
- backup:UpdateRestoreTestingSelection
- billingconductor:GetBillingGroupCostReport
- braket:AcceptUserAgreement
- braket:AccessBraketFeature
- braket:GetServiceLinkedRoleStatus
- braket:GetUserAgreementStatus
- cases:GetCaseAuditEvents
- cassandra:AlterMultiRegionResource
- cassandra:CreateMultiRegionResource
- cassandra:DropMultiRegionResource
- cassandra:ModifyMultiRegionResource
- cassandra:RestoreMultiRegionTable
- cassandra:SelectMultiRegionResource
- cassandra:TagMultiRegionResource
- cassandra:UnTagMultiRegionResource
- ce:GetApproximateUsageRecords
- ce:GetSavingsPlanPurchaseRecommendationDetails
- chime:CreateMediaPipelineKinesisVideoStreamPool
- chime:CreateMediaStreamPipeline
- chime:DeleteMediaPipelineKinesisVideoStreamPool
- chime:GetMediaPipelineKinesisVideoStreamPool
- chime:ListMediaPipelineKinesisVideoStreamPools
- chime:UpdateMediaPipelineKinesisVideoStreamPool
- cleanrooms:BatchGetCollaborationAnalysisTemplate
- cleanrooms:CreateAnalysisTemplate
- cleanrooms:CreateConfiguredAudienceModelAssociation
- cleanrooms:CreatePrivacyBudgetTemplate
- cleanrooms:DeleteAnalysisTemplate
- cleanrooms:DeleteConfiguredAudienceModelAssociation
- cleanrooms:DeletePrivacyBudgetTemplate
- cleanrooms:GetAnalysisTemplate
- cleanrooms:GetCollaborationAnalysisTemplate
- cleanrooms:GetCollaborationConfiguredAudienceModelAssociation
- cleanrooms:GetCollaborationPrivacyBudgetTemplate
- cleanrooms:GetConfiguredAudienceModelAssociation
- cleanrooms:GetPrivacyBudgetTemplate
- cleanrooms:ListAnalysisTemplates
- cleanrooms:ListCollaborationAnalysisTemplates
- cleanrooms:ListCollaborationConfiguredAudienceModelAssociations
- cleanrooms:ListCollaborationPrivacyBudgetTemplates
- cleanrooms:ListCollaborationPrivacyBudgets
- cleanrooms:ListConfiguredAudienceModelAssociations
- cleanrooms:ListPrivacyBudgetTemplates
- cleanrooms:ListPrivacyBudgets
- cleanrooms:PreviewPrivacyImpact
- cleanrooms:UpdateAnalysisTemplate
- cleanrooms:UpdateConfiguredAudienceModelAssociation
- cleanrooms:UpdatePrivacyBudgetTemplate
- cloud9:GetMigrationExperiences
- cloudformation:ActivateOrganizationsAccess
- cloudformation:CreateGeneratedTemplate
- cloudformation:DeactivateOrganizationsAccess
- cloudformation:DeleteGeneratedTemplate
- cloudformation:DescribeGeneratedTemplate
- cloudformation:DescribeOrganizationsAccess
- cloudformation:DescribeResourceScan
- cloudformation:GetGeneratedTemplate
- cloudformation:ListGeneratedTemplates
- cloudformation:ListResourceScanRelatedResources
- cloudformation:ListResourceScanResources
- cloudformation:ListResourceScans
- cloudformation:ListStackInstanceResourceDrifts
- cloudformation:StartResourceScan
- cloudformation:UpdateGeneratedTemplate
- cloudfront:CreateKeyValueStore
- cloudfront:DeleteKeyValueStore
- cloudfront:DescribeKeyValueStore
- cloudfront:ListKeyValueStores
- cloudfront:UpdateKeyValueStore
- cloudtrail:DisableFederation
- cloudtrail:EnableFederation
- cloudtrail:GetEventDataStoreData
- cloudtrail:StartEventDataStoreIngestion
- cloudtrail:StopEventDataStoreIngestion
- cloudwatch:BatchGetServiceLevelIndicatorReport
- cloudwatch:BatchGetServiceLevelObjectiveBudgetReport
- cloudwatch:CreateServiceLevelObjective
- cloudwatch:DeleteServiceLevelObjective
- cloudwatch:EnableTopologyDiscovery
- cloudwatch:GenerateQuery
- cloudwatch:GetService
- cloudwatch:GetServiceData
- cloudwatch:GetServiceLevelObjective
- cloudwatch:GetTopologyDiscoveryStatus
- cloudwatch:GetTopologyMap
- cloudwatch:ListServiceLevelObjectives
- cloudwatch:ListServices
- cloudwatch:UpdateServiceLevelObjective
- codebuild:BatchGetFleets
- codebuild:CreateFleet
- codebuild:DeleteFleet
- codebuild:ListFleets
- codebuild:UpdateFleet
- codecatalyst:AssociateIdentityCenterApplicationToSpace
- codecatalyst:AssociateIdentityToIdentityCenterApplication
- codecatalyst:BatchAssociateIdentitiesToIdentityCenterApplication
- codecatalyst:BatchDisassociateIdentitiesFromIdentityCenterApplication
- codecatalyst:CreateIdentityCenterApplication
- codecatalyst:CreateSpace
- codecatalyst:CreateSpaceAdminRoleAssignment
- codecatalyst:DeleteIdentityCenterApplication
- codecatalyst:DisassociateIdentityCenterApplicationFromSpace
- codecatalyst:DisassociateIdentityFromIdentityCenterApplication
- codecatalyst:GetIdentityCenterApplication
- codecatalyst:ListIdentityCenterApplications
- codecatalyst:ListIdentityCenterApplicationsForSpace
- codecatalyst:ListSpacesForIdentityCenterApplication
- codecatalyst:SynchronizeIdentityCenterApplication
- codecatalyst:UpdateIdentityCenterApplication
- codecommit:ListFileCommitHistory
- codecommit:UpdateRepositoryEncryptionKey
- codeguru-security:GetAccountConfiguration
- codeguru-security:GetFindings
- codeguru-security:GetMetricsSummary
- codeguru-security:ListFindingsMetrics
- codeguru-security:ListTagsForResource
- codeguru-security:TagResource
- codeguru-security:UntagResource
- codestar-connections:CreateRepositoryLink
- codestar-connections:CreateSyncConfiguration
- codestar-connections:DeleteRepositoryLink
- codestar-connections:DeleteSyncConfiguration
- codestar-connections:GetRepositoryLink
- codestar-connections:GetRepositorySyncStatus
- codestar-connections:GetResourceSyncStatus
- codestar-connections:GetSyncBlockerSummary
- codestar-connections:GetSyncConfiguration
- codestar-connections:ListRepositoryLinks
- codestar-connections:ListRepositorySyncDefinitions
- codestar-connections:ListSyncConfigurations
- codestar-connections:PassRepository
- codestar-connections:UpdateRepositoryLink
- codestar-connections:UpdateSyncBlocker
- codestar-connections:UpdateSyncConfiguration
- codewhisperer:AllowVendedLogDeliveryForResource
- codewhisperer:AssociateCustomizationPermission
- codewhisperer:CreateCustomization
- codewhisperer:DeleteCustomization
- codewhisperer:DeleteProfile
- codewhisperer:DisassociateCustomizationPermission
- codewhisperer:GetCustomization
- codewhisperer:ListCustomizationPermissions
- codewhisperer:ListCustomizationVersions
- codewhisperer:ListCustomizations
- codewhisperer:ListTagsForResource
- codewhisperer:TagResource
- codewhisperer:UntagResource
- codewhisperer:UpdateCustomization
- cognito-identity:GetIdentityPoolAnalytics
- cognito-identity:GetIdentityPoolDailyAnalytics
- cognito-identity:GetIdentityProviderDailyAnalytics
- cognito-idp:GetLogDeliveryConfiguration
- cognito-idp:SetLogDeliveryConfiguration
- comprehend:DetectToxicContent
- compute-optimizer:ExportLicenseRecommendations
- compute-optimizer:GetLicenseRecommendations
- connect:ActivateEvaluationForm
- connect:AssociateFlow
- connect:AssociateTrafficDistributionGroupUser
- connect:AssociateUserProficiencies
- connect:BatchGetFlowAssociation
- connect:BatchPutContact
- connect:CreateEvaluationForm
- connect:CreateParticipant
- connect:CreatePersistentContactAssociation
- connect:CreatePredefinedAttribute
- connect:CreatePrompt
- connect:CreateView
- connect:CreateViewVersion
- connect:DeactivateEvaluationForm
- connect:DeleteContactEvaluation
- connect:DeleteEvaluationForm
- connect:DeletePredefinedAttribute
- connect:DeletePrompt
- connect:DeleteQueue
- connect:DeleteRoutingProfile
- connect:DeleteView
- connect:DeleteViewVersion
- connect:DescribeContactEvaluation
- connect:DescribeEvaluationForm
- connect:DescribePredefinedAttribute
- connect:DescribePrompt
- connect:DescribeView
- connect:DisassociateFlow
- connect:DisassociateTrafficDistributionGroupUser
- connect:DisassociateUserProficiencies
- connect:GetFlowAssociation
- connect:GetPromptFile
- connect:ImportPhoneNumber
- connect:ListContactEvaluations
- connect:ListEvaluationFormVersions
- connect:ListEvaluationForms
- connect:ListFlowAssociations
- connect:ListPredefinedAttributes
- connect:ListRealtimeContactAnalysisSegmentsV2
- connect:ListSecurityProfileApplications
- connect:ListTrafficDistributionGroupUsers
- connect:ListUserProficiencies
- connect:ListViewVersions
- connect:ListViews
- connect:PauseContact
- connect:ResumeContact
- connect:SearchContacts
- connect:SearchHoursOfOperations
- connect:SearchPredefinedAttributes
- connect:SearchPrompts
- connect:SearchQuickConnects
- connect:SearchResourceTags
- connect:SendChatIntegrationEvent
- connect:StartContactEvaluation
- connect:StartWebRTCContact
- connect:SubmitContactEvaluation
- connect:TagContact
- connect:UntagContact
- connect:UpdateContactEvaluation
- connect:UpdateContactRoutingData
- connect:UpdateEvaluationForm
- connect:UpdatePhoneNumberMetadata
- connect:UpdatePredefinedAttribute
- connect:UpdatePrompt
- connect:UpdateRoutingProfileAgentAvailabilityTimer
- connect:UpdateUserProficiencies
- connect:UpdateViewContent
- connect:UpdateViewMetadata
- controltower:CreateLandingZone
- controltower:GetEnabledControl
- controltower:GetLandingZone
- controltower:GetLandingZoneOperation
- controltower:ListLandingZones
- controltower:ListTagsForResource
- controltower:ResetLandingZone
- controltower:TagResource
- controltower:UntagResource
- controltower:UpdateEnabledControl
- controltower:UpdateLandingZone
- cur:ListTagsForResource
- cur:TagResource
- cur:UntagResource
- dataexchange:SendDataSetNotification
- datasync:AddStorageSystem
- datasync:CreateLocationAzureBlob
- datasync:DescribeDiscoveryJob
- datasync:DescribeLocationAzureBlob
- datasync:DescribeStorageSystem
- datasync:DescribeStorageSystemResourceMetrics
- datasync:DescribeStorageSystemResources
- datasync:GenerateRecommendations
- datasync:ListDiscoveryJobs
- datasync:ListStorageSystems
- datasync:RemoveStorageSystem
- datasync:StartDiscoveryJob
- datasync:StopDiscoveryJob
- datasync:UpdateDiscoveryJob
- datasync:UpdateLocationAzureBlob
- datasync:UpdateStorageSystem
- datazone:AcceptPredictions
- datazone:AcceptSubscriptionRequest
- datazone:CancelSubscription
- datazone:CreateAsset
- datazone:CreateAssetRevision
- datazone:CreateAssetType
- datazone:CreateDataSource
- datazone:CreateDomain
- datazone:CreateEnvironment
- datazone:CreateEnvironmentBlueprint
- datazone:CreateEnvironmentProfile
- datazone:CreateFormType
- datazone:CreateGlossary
- datazone:CreateGlossaryTerm
- datazone:CreateGroupProfile
- datazone:CreateListingChangeSet
- datazone:CreateProject
- datazone:CreateProjectMembership
- datazone:CreateSubscriptionGrant
- datazone:CreateSubscriptionRequest
- datazone:CreateSubscriptionTarget
- datazone:CreateUserProfile
- datazone:DeleteAsset
- datazone:DeleteAssetType
- datazone:DeleteDataSource
- datazone:DeleteDomain
- datazone:DeleteDomainSharingPolicy
- datazone:DeleteEnvironment
- datazone:DeleteEnvironmentBlueprint
- datazone:DeleteEnvironmentBlueprintConfiguration
- datazone:DeleteEnvironmentProfile
- datazone:DeleteFormType
- datazone:DeleteGlossary
- datazone:DeleteGlossaryTerm
- datazone:DeleteListing
- datazone:DeleteProject
- datazone:DeleteProjectMembership
- datazone:DeleteSubscriptionGrant
- datazone:DeleteSubscriptionRequest
- datazone:DeleteSubscriptionTarget
- datazone:GetAsset
- datazone:GetAssetType
- datazone:GetDataSource
- datazone:GetDataSourceRun
- datazone:GetDomain
- datazone:GetDomainSharingPolicy
- datazone:GetEnvironment
- datazone:GetEnvironmentActionLink
- datazone:GetEnvironmentBlueprint
- datazone:GetEnvironmentBlueprintConfiguration
- datazone:GetEnvironmentCredentials
- datazone:GetEnvironmentProfile
- datazone:GetFormType
- datazone:GetGlossary
- datazone:GetGlossaryTerm
- datazone:GetGroupProfile
- datazone:GetIamPortalLoginUrl
- datazone:GetListing
- datazone:GetMetadataGenerationRun
- datazone:GetSubscription
- datazone:GetSubscriptionEligibility
- datazone:GetSubscriptionGrant
- datazone:GetSubscriptionRequestDetails
- datazone:GetSubscriptionTarget
- datazone:GetUserProfile
- datazone:ListAccountEnvironments
- datazone:ListAssetRevisions
- datazone:ListDataSourceRunActivities
- datazone:ListDataSourceRuns
- datazone:ListDataSources
- datazone:ListDomains
- datazone:ListEnvironmentBlueprintConfigurationSummaries
- datazone:ListEnvironmentBlueprintConfigurations
- datazone:ListEnvironmentBlueprints
- datazone:ListEnvironmentProfiles
- datazone:ListEnvironments
- datazone:ListGroupsForUser
- datazone:ListMetadataGenerationRuns
- datazone:ListNotifications
- datazone:ListProjectMemberships
- datazone:ListSubscriptionGrants
- datazone:ListSubscriptionRequests
- datazone:ListSubscriptionTargets
- datazone:ListSubscriptions
- datazone:ListTagsForResource
- datazone:ListWarehouseMetadata
- datazone:ProvisionDomain
- datazone:PutDomainSharingPolicy
- datazone:PutEnvironmentBlueprintConfiguration
- datazone:RefreshToken
- datazone:RejectPredictions
- datazone:RejectSubscriptionRequest
- datazone:RevokeSubscription
- datazone:Search
- datazone:SearchGroupProfiles
- datazone:SearchListings
- datazone:SearchTypes
- datazone:SearchUserProfiles
- datazone:SsoLogin
- datazone:SsoLogout
- datazone:StartDataSourceRun
- datazone:StartMetadataGenerationRun
- datazone:StopMetadataGenerationRun
- datazone:TagResource
- datazone:UntagResource
- datazone:UpdateDataSource
- datazone:UpdateDomain
- datazone:UpdateEnvironment
- datazone:UpdateEnvironmentBlueprint
- datazone:UpdateEnvironmentConfiguration
- datazone:UpdateEnvironmentDeploymentStatus
- datazone:UpdateEnvironmentProfile
- datazone:UpdateGlossary
- datazone:UpdateGlossaryTerm
- datazone:UpdateGroupProfile
- datazone:UpdateProject
- datazone:UpdateSubscriptionGrantStatus
- datazone:UpdateSubscriptionRequest
- datazone:UpdateSubscriptionTarget
- datazone:UpdateUserProfile
- datazone:ValidatePassRole
- deepracer:ListLeaderboardEvaluations
- detective:GetInvestigation
- detective:InvokeAssistant
- detective:ListIndicators
- detective:ListInvestigations
- detective:StartInvestigation
- detective:UpdateInvestigationState
- discovery:BatchDeleteAgents
- discovery:DescribeBatchDeleteConfigurationTask
- discovery:StartBatchDeleteConfigurationTask
- dms:CreateDataMigration
- dms:CreateReplicationConfig
- dms:CreateTest
- dms:CreateTestEnvironments
- dms:CreateTestPlan
- dms:CreateTestRun
- dms:DeleteDataMigration
- dms:DeleteReplicationConfig
- dms:DeleteTest
- dms:DeleteTestPlan
- dms:DescribeConversionConfiguration
- dms:DescribeDataMigrations
- dms:DescribeDataProviders
- dms:DescribeEngineVersions
- dms:DescribeExtensionPackAssociations
- dms:DescribeInstanceProfiles
- dms:DescribeMetadataModelAssessments
- dms:DescribeMetadataModelConversions
- dms:DescribeMetadataModelExportsAsScript
- dms:DescribeMetadataModelExportsToTarget
- dms:DescribeMetadataModelImports
- dms:DescribeMigrationProjects
- dms:DescribeReplicationConfigs
- dms:DescribeReplicationTableStatistics
- dms:DescribeReplications
- dms:DescribeTestEnvironments
- dms:DescribeTestGenerationStatus
- dms:DescribeTestPlans
- dms:DescribeTestRunResultsSummaries
- dms:DescribeTestRuns
- dms:DescribeTests
- dms:ModifyConversionConfiguration
- dms:ModifyDataMigration
- dms:ModifyDataProvider
- dms:ModifyInstanceProfile
- dms:ModifyMigrationProject
- dms:ModifyReplicationConfig
- dms:ModifyTest
- dms:ModifyTestPlan
- dms:ReloadReplicationTables
- dms:StartDataMigration
- dms:StartExtensionPackAssociation
- dms:StartGenerateTests
- dms:StartMetadataModelExportAsScript
- dms:StartReplication
- dms:StopDataMigration
- dms:StopGenerateTests
- dms:StopReplication
- dms:StopTestRun
- dms:ViewTestRunResults
- drs:AssociateSourceNetworkStack
- drs:CreateLaunchConfigurationTemplate
- drs:CreateSourceNetwork
- drs:DeleteLaunchAction
- drs:DeleteLaunchConfigurationTemplate
- drs:DeleteSourceNetwork
- drs:DescribeLaunchConfigurationTemplates
- drs:DescribeSourceNetworks
- drs:ExportSourceNetworkCfnTemplate
- drs:ListLaunchActions
- drs:PutLaunchAction
- drs:StartSourceNetworkRecovery
- drs:StartSourceNetworkReplication
- drs:StopSourceNetworkReplication
- drs:UpdateLaunchConfigurationTemplate
- ds:DisableRoleAccess
- ds:EnableRoleAccess
- ds:UpdateAuthorizedApplication
- ds:UpdateDirectory
- dynamodb:GetResourcePolicy
- ec2-instance-connect:OpenTunnel
- ec2:AssociateIpamByoasn
- ec2:AssociateVerifiedAccessInstanceWebAcl
- ec2:CreateInstanceConnectEndpoint
- ec2:DeleteInstanceConnectEndpoint
- ec2:DeprovisionIpamByoasn
- ec2:DescribeCapacityBlockOfferings
- ec2:DescribeInstanceConnectEndpoints
- ec2:DescribeInstanceTopology
- ec2:DescribeIpamByoasn
- ec2:DescribeLockedSnapshots
- ec2:DescribeVerifiedAccessInstanceWebAclAssociations
- ec2:DisableImage
- ec2:DisableImageBlockPublicAccess
- ec2:DisableSnapshotBlockPublicAccess
- ec2:DisassociateIpamByoasn
- ec2:DisassociateVerifiedAccessInstanceWebAcl
- ec2:EnableImage
- ec2:EnableImageBlockPublicAccess
- ec2:EnableSnapshotBlockPublicAccess
- ec2:GetImageBlockPublicAccessState
- ec2:GetIpamDiscoveredPublicAddresses
- ec2:GetSecurityGroupsForVpc
- ec2:GetSnapshotBlockPublicAccessState
- ec2:GetVerifiedAccessInstanceWebAcl
- ec2:GetVpnTunnelReplacementStatus
- ec2:ImportByoipCidrToIpam
- ec2:InjectApiError
- ec2:LockSnapshot
- ec2:ProvisionIpamByoasn
- ec2:PurchaseCapacityBlock
- ec2:ReplaceVpnTunnel
- ec2:UnlockSnapshot
- ecr:CreateRepositoryCreationTemplate
- ecr:DeleteRepositoryCreationTemplate
- ecr:DescribeRepositoryCreationTemplate
- ecr:UpdatePullThroughCacheRule
- ecr:ValidatePullThroughCacheRule
- eks:AssociateAccessPolicy
- eks:CreateAccessEntry
- eks:CreateEksAnywhereSubscription
- eks:CreatePodIdentityAssociation
- eks:DeleteAccessEntry
- eks:DeleteEksAnywhereSubscription
- eks:DeletePodIdentityAssociation
- eks:DescribeAccessEntry
- eks:DescribeEksAnywhereSubscription
- eks:DescribeInsight
- eks:DescribePodIdentityAssociation
- eks:DisassociateAccessPolicy
- eks:ListAccessEntries
- eks:ListAccessPolicies
- eks:ListAssociatedAccessPolicies
- eks:ListEksAnywhereSubscriptions
- eks:ListInsights
- eks:ListPodIdentityAssociations
- eks:UpdateAccessEntry
- eks:UpdateEksAnywhereSubscription
- eks:UpdatePodIdentityAssociation
- elasticache:CopyServerlessCacheSnapshot
- elasticache:CreateServerlessCache
- elasticache:CreateServerlessCacheSnapshot
- elasticache:DeleteServerlessCache
- elasticache:DeleteServerlessCacheSnapshot
- elasticache:DescribeServerlessCacheSnapshots
- elasticache:DescribeServerlessCaches
- elasticache:ExportServerlessCacheSnapshot
- elasticache:InterruptClusterAzPower
- elasticache:ModifyServerlessCache
- elasticache:TestMigration
- elasticfilesystem:UpdateFileSystemProtection
- elasticloadbalancing:AddTrustStoreRevocations
- elasticloadbalancing:CreateTrustStore
- elasticloadbalancing:DeleteTrustStore
- elasticloadbalancing:DescribeTrustStoreAssociations
- elasticloadbalancing:DescribeTrustStoreRevocations
- elasticloadbalancing:DescribeTrustStores
- elasticloadbalancing:GetTrustStoreCaCertificatesBundle
- elasticloadbalancing:GetTrustStoreRevocationContent
- elasticloadbalancing:ModifyTrustStore
- elasticloadbalancing:RemoveTrustStoreRevocations
- elasticmapreduce:ListSupportedInstanceTypes
- elasticmapreduce:SetKeepJobFlowAliveWhenNoSteps
- emr-containers:GetManagedEndpointSessionCredentials
- emr-serverless:AccessInteractiveEndpoints
- es:AddDataSource
- es:CancelDomainConfigChange
- es:DeleteDataSource
- es:DescribeDomainHealth
- es:DescribeDomainNodes
- es:GetDataSource
- es:GetDomainMaintenanceStatus
- es:ListDataSources
- es:ListDomainMaintenances
- es:StartDomainMaintenance
- es:UpdateDataSource
- events:RetrieveConnectionCredentials
- finspace:ConnectKxCluster
- finspace:CreateKxChangeset
- finspace:CreateKxCluster
- finspace:CreateKxDatabase
- finspace:CreateKxDataview
- finspace:CreateKxEnvironment
- finspace:CreateKxScalingGroup
- finspace:CreateKxUser
- finspace:CreateKxVolume
- finspace:DeleteKxCluster
- finspace:DeleteKxDatabase
- finspace:DeleteKxDataview
- finspace:DeleteKxEnvironment
- finspace:DeleteKxScalingGroup
- finspace:DeleteKxUser
- finspace:DeleteKxVolume
- finspace:GetKxChangeset
- finspace:GetKxCluster
- finspace:GetKxConnectionString
- finspace:GetKxDatabase
- finspace:GetKxDataview
- finspace:GetKxEnvironment
- finspace:GetKxScalingGroup
- finspace:GetKxUser
- finspace:GetKxVolume
- finspace:ListKxChangesets
- finspace:ListKxClusterNodes
- finspace:ListKxClusters
- finspace:ListKxDatabases
- finspace:ListKxDataviews
- finspace:ListKxEnvironments
- finspace:ListKxScalingGroups
- finspace:ListKxUsers
- finspace:ListKxVolumes
- finspace:MountKxDatabase
- finspace:UpdateKxClusterCodeConfiguration
- finspace:UpdateKxClusterDatabases
- finspace:UpdateKxDatabase
- finspace:UpdateKxDataview
- finspace:UpdateKxEnvironment
- finspace:UpdateKxEnvironmentNetwork
- finspace:UpdateKxUser
- finspace:UpdateKxVolume
- fis:CreateTargetAccountConfiguration
- fis:DeleteTargetAccountConfiguration
- fis:GetExperimentTargetAccountConfiguration
- fis:GetTargetAccountConfiguration
- fis:ListExperimentResolvedTargets
- fis:ListExperimentTargetAccountConfigurations
- fis:ListTargetAccountConfigurations
- fis:UpdateTargetAccountConfiguration
- fms:GetAdminScope
- fms:ListAdminAccountsForOrganization
- fms:ListAdminsManagingAccount
- fms:PutAdminAccount
- fsx:BypassSnaplockEnterpriseRetention
- fsx:CopySnapshotAndUpdateVolume
- fsx:DeleteResourcePolicy
- fsx:DescribeSharedVpcConfiguration
- fsx:GetResourcePolicy
- fsx:PutResourcePolicy
- fsx:StartMisconfiguredStateRecovery
- fsx:UpdateSharedVpcConfiguration
- globalaccelerator:CreateCrossAccountAttachment
- globalaccelerator:DeleteCrossAccountAttachment
- globalaccelerator:DescribeCrossAccountAttachment
- globalaccelerator:ListCrossAccountAttachments
- globalaccelerator:ListCrossAccountResourceAccounts
- globalaccelerator:ListCrossAccountResources
- globalaccelerator:UpdateCrossAccountAttachment
- glue:BatchGetTableOptimizer
- glue:CreateTableOptimizer
- glue:DeleteTableOptimizer
- glue:GetColumnStatisticsTaskRun
- glue:GetColumnStatisticsTaskRuns
- glue:GetCompletion
- glue:GetTableOptimizer
- glue:ListColumnStatisticsTaskRuns
- glue:ListTableOptimizerRuns
- glue:PassConnection
- glue:SendFeedback
- glue:StartColumnStatisticsTaskRun
- glue:StartCompletion
- glue:StopColumnStatisticsTaskRun
- glue:TestConnection
- glue:UpdateTableOptimizer
- grafana:ListVersions
- guardduty:GetOrganizationStatistics
- guardduty:StartMalwareScan
- health:DescribeEntityAggregatesForOrganization
- iam:GetMFADevice
- imagebuilder:CancelLifecycleExecution
- imagebuilder:CreateLifecyclePolicy
- imagebuilder:CreateWorkflow
- imagebuilder:DeleteLifecyclePolicy
- imagebuilder:DeleteWorkflow
- imagebuilder:GetLifecycleExecution
- imagebuilder:GetLifecyclePolicy
- imagebuilder:GetWorkflow
- imagebuilder:ListLifecycleExecutionResources
- imagebuilder:ListLifecycleExecutions
- imagebuilder:ListLifecyclePolicies
- imagebuilder:ListWaitingWorkflowSteps
- imagebuilder:ListWorkflowBuildVersions
- imagebuilder:ListWorkflows
- imagebuilder:SendWorkflowStepAction
- imagebuilder:StartResourceStateUpdate
- imagebuilder:UpdateLifecyclePolicy
- inspector2:BatchGetFindingDetails
- inspector2:BatchGetMemberEc2DeepInspectionStatus
- inspector2:BatchUpdateMemberEc2DeepInspectionStatus
- inspector2:CancelSbomExport
- inspector2:CreateCisScanConfiguration
- inspector2:CreateSbomExport
- inspector2:DeleteCisScanConfiguration
- inspector2:GetCisScanReport
- inspector2:GetCisScanResultDetails
- inspector2:GetEc2DeepInspectionConfiguration
- inspector2:GetEncryptionKey
- inspector2:GetSbomExport
- inspector2:ListCisScanConfigurations
- inspector2:ListCisScanResultsAggregatedByChecks
- inspector2:ListCisScanResultsAggregatedByTargetResource
- inspector2:ListCisScans
- inspector2:ResetEncryptionKey
- inspector2:SearchVulnerabilities
- inspector2:SendCisSessionHealth
- inspector2:SendCisSessionTelemetry
- inspector2:StartCisSession
- inspector2:StopCisSession
- inspector2:UpdateCisScanConfiguration
- inspector2:UpdateEc2DeepInspectionConfiguration
- inspector2:UpdateEncryptionKey
- inspector2:UpdateOrgEc2DeepInspectionConfiguration
- internetmonitor:GetQueryResults
- internetmonitor:GetQueryStatus
- internetmonitor:StartQuery
- internetmonitor:StopQuery
- iot:CreateCertificateProvider
- iot:CreatePackage
- iot:CreatePackageVersion
- iot:DeleteCertificateProvider
- iot:DeletePackage
- iot:DeletePackageVersion
- iot:DescribeCertificateProvider
- iot:GetPackage
- iot:GetPackageConfiguration
- iot:GetPackageVersion
- iot:ListCertificateProviders
- iot:ListPackageVersions
- iot:ListPackages
- iot:UpdateCertificateProvider
- iot:UpdatePackage
- iot:UpdatePackageConfiguration
- iot:UpdatePackageVersion
- iotfleetwise:GetEncryptionConfiguration
- iotfleetwise:PutEncryptionConfiguration
- iotsitewise:CreateAssetModelCompositeModel
- iotsitewise:DeleteAssetModelCompositeModel
- iotsitewise:DescribeAction
- iotsitewise:DescribeAssetCompositeModel
- iotsitewise:DescribeAssetModelCompositeModel
- iotsitewise:EnableSiteWiseIntegration
- iotsitewise:ExecuteAction
- iotsitewise:ExecuteQuery
- iotsitewise:ListActions
- iotsitewise:ListAssetModelCompositeModels
- iotsitewise:ListCompositionRelationships
- iotsitewise:UpdateAssetModelCompositeModel
- iottwinmaker:CancelMetadataTransferJob
- iottwinmaker:CreateMetadataTransferJob
- iottwinmaker:GetMetadataTransferJob
- iottwinmaker:ListComponents
- iottwinmaker:ListMetadataTransferJobs
- iottwinmaker:ListProperties
- iq-permission:AssumePermissionRole
- iq:DisableIndividualPublicProfile
- iq:DownloadAttachment
- iq:EnableIndividualPublicProfile
- iq:GetCompanyChatMessages
- iq:GetRequest
- iq:LinkAwsCertification
- iq:ListAttachments
- iq:ListExpertAccessLogs
- iq:UnlinkAwsCertification
- ivs:BatchStartViewerSessionRevocation
- ivs:CreateEncoderConfiguration
- ivs:CreatePlaybackRestrictionPolicy
- ivs:CreateStorageConfiguration
- ivs:DeleteEncoderConfiguration
- ivs:DeletePlaybackRestrictionPolicy
- ivs:DeleteStorageConfiguration
- ivs:GetComposition
- ivs:GetEncoderConfiguration
- ivs:GetParticipant
- ivs:GetPlaybackRestrictionPolicy
- ivs:GetStageSession
- ivs:GetStorageConfiguration
- ivs:ListCompositions
- ivs:ListEncoderConfigurations
- ivs:ListParticipantEvents
- ivs:ListParticipants
- ivs:ListPlaybackRestrictionPolicies
- ivs:ListStageSessions
- ivs:ListStorageConfigurations
- ivs:StartComposition
- ivs:StartViewerSessionRevocation
- ivs:StopComposition
- ivs:UpdatePlaybackRestrictionPolicy
- kafka:CreateReplicator
- kafka:CreateVpcConnection
- kafka:DeleteClusterPolicy
- kafka:DeleteReplicator
- kafka:DeleteVpcConnection
- kafka:DescribeClusterOperationV2
- kafka:DescribeReplicator
- kafka:DescribeVpcConnection
- kafka:GetClusterPolicy
- kafka:ListClientVpcConnections
- kafka:ListClusterOperationsV2
- kafka:ListReplicators
- kafka:ListVpcConnections
- kafka:PutClusterPolicy
- kafka:RejectClientVpcConnection
- kafka:UpdateReplicationInfo
- kendra:Retrieve
- kinesis:DeleteResourcePolicy
- kinesis:GetResourcePolicy
- kinesis:PutResourcePolicy
- kinesisvideo:DeleteEdgeConfiguration
- kinesisvideo:ListEdgeAgentConfigurations
- lakeformation:CreateLakeFormationIdentityCenterConfiguration
- lakeformation:CreateLakeFormationOptIn
- lakeformation:DeleteLakeFormationIdentityCenterConfiguration
- lakeformation:DeleteLakeFormationOptIn
- lakeformation:DescribeLakeFormationIdentityCenterConfiguration
- lakeformation:ListLakeFormationOptIns
- lakeformation:UpdateLakeFormationIdentityCenterConfiguration
- launchwizard:CreateAdditionalNode
- launchwizard:CreateDeployment
- launchwizard:CreateSettingsSet
- launchwizard:DeleteAdditionalNode
- launchwizard:DeleteDeployment
- launchwizard:DeleteSettingsSet
- launchwizard:DescribeAdditionalNode
- launchwizard:DescribeSettingsSet
- launchwizard:GetDeployment
- launchwizard:GetResourceRecommendation
- launchwizard:GetSettingsSet
- launchwizard:GetWorkload
- launchwizard:GetWorkloadAsset
- launchwizard:GetWorkloadAssets
- launchwizard:ListAdditionalNodes
- launchwizard:ListAllowedResources
- launchwizard:ListDeploymentEvents
- launchwizard:ListDeployments
- launchwizard:ListResourceCostEstimates
- launchwizard:ListSettingsSets
- launchwizard:ListWorkloadDeploymentOptions
- launchwizard:ListWorkloadDeploymentPatterns
- launchwizard:ListWorkloads
- launchwizard:PutSettingsSet
- launchwizard:UpdateSettingsSet
- lex:CreateTestSet
- lex:CreateTestSetDiscrepancyReport
- lex:DeleteTestSet
- lex:DescribeBotResourceGeneration
- lex:DescribeTestExecution
- lex:DescribeTestSet
- lex:DescribeTestSetDiscrepancyReport
- lex:DescribeTestSetGeneration
- lex:GenerateBotElement
- lex:GetTestExecutionArtifactsUrl
- lex:ListBotResourceGenerations
- lex:ListIntentMetrics
- lex:ListIntentPaths
- lex:ListIntentStageMetrics
- lex:ListSessionAnalyticsData
- lex:ListSessionMetrics
- lex:ListTestExecutionResultItems
- lex:ListTestExecutions
- lex:ListTestSetRecords
- lex:ListTestSets
- lex:StartBotResourceGeneration
- lex:StartTestExecution
- lex:StartTestSetGeneration
- lex:UpdateTestSet
- logs:CreateDelivery
- logs:CreateLogAnomalyDetector
- logs:DeleteAccountPolicy
- logs:DeleteDelivery
- logs:DeleteDeliveryDestination
- logs:DeleteDeliveryDestinationPolicy
- logs:DeleteDeliverySource
- logs:DeleteLogAnomalyDetector
- logs:DescribeAccountPolicies
- logs:DescribeDeliveries
- logs:DescribeDeliveryDestinations
- logs:DescribeDeliverySources
- logs:GetDelivery
- logs:GetDeliveryDestination
- logs:GetDeliveryDestinationPolicy
- logs:GetDeliverySource
- logs:GetLogAnomalyDetector
- logs:ListAnomalies
- logs:ListLogAnomalyDetectors
- logs:PutAccountPolicy
- logs:PutDeliveryDestination
- logs:PutDeliveryDestinationPolicy
- logs:PutDeliverySource
- logs:StartLiveTail
- logs:StopLiveTail
- logs:UpdateAnomaly
- logs:UpdateLogAnomalyDetector
- lookoutequipment:CreateRetrainingScheduler
- lookoutequipment:DeleteResourcePolicy
- lookoutequipment:DeleteRetrainingScheduler
- lookoutequipment:DescribeModelVersion
- lookoutequipment:DescribeResourcePolicy
- lookoutequipment:DescribeRetrainingScheduler
- lookoutequipment:ImportDataset
- lookoutequipment:ImportModelVersion
- lookoutequipment:ListModelVersions
- lookoutequipment:ListRetrainingSchedulers
- lookoutequipment:PutResourcePolicy
- lookoutequipment:StartRetrainingScheduler
- lookoutequipment:StopRetrainingScheduler
- lookoutequipment:UpdateActiveModelVersion
- lookoutequipment:UpdateModel
- lookoutequipment:UpdateRetrainingScheduler
- m2:GetSignedBluinsightsUrl
- managedblockchain:InvokeRpcBitcoinMainnet
- managedblockchain:InvokeRpcBitcoinTestnet
- managedblockchain:InvokeRpcPolygonMainnet
- managedblockchain:InvokeRpcPolygonMumbaiTestnet
- mediaconnect:AddBridgeOutputs
- mediaconnect:AddBridgeSources
- mediaconnect:CreateBridge
- mediaconnect:CreateGateway
- mediaconnect:DeleteBridge
- mediaconnect:DeleteGateway
- mediaconnect:DeregisterGatewayInstance
- mediaconnect:DescribeBridge
- mediaconnect:DescribeFlowSourceMetadata
- mediaconnect:DescribeGateway
- mediaconnect:DescribeGatewayInstance
- mediaconnect:DiscoverGatewayPollEndpoint
- mediaconnect:ListBridges
- mediaconnect:ListGatewayInstances
- mediaconnect:ListGateways
- mediaconnect:PollGateway
- mediaconnect:RemoveBridgeOutput
- mediaconnect:RemoveBridgeSource
- mediaconnect:SubmitGatewayStateChange
- mediaconnect:UpdateBridge
- mediaconnect:UpdateBridgeOutput
- mediaconnect:UpdateBridgeSource
- mediaconnect:UpdateBridgeState
- mediaconnect:UpdateGatewayInstance
- medialive:DescribeAccountConfiguration
- medialive:DescribeThumbnails
- medialive:StartInputDevice
- medialive:StopInputDevice
- medialive:UpdateAccountConfiguration
- memorydb:Connect
- mgh:DeleteHomeRegionControl
- mgn:CreateConnector
- mgn:DeleteConnector
- mgn:ListConnectors
- mgn:ListManagedAccounts
- mgn:PauseReplication
- mgn:ResumeReplication
- mgn:StopReplication
- mgn:UpdateConnector
- mgn:UpdateSourceServer
- migrationhub-strategy:ListAnalyzableServers
- monitron:CreateProjectUserAssociation
- monitron:CreateUserAccessRoleAssociation
- monitron:DeleteProjectUserAssociation
- monitron:DeleteUserAccessRoleAssociation
- monitron:ListProjectUserAssociations
- monitron:ListUserAccessRoleAssociations
- mq:CreateReplicaBroker
- mq:Promote
- omics:AbortMultipartReadSetUpload
- omics:AcceptShare
- omics:CompleteMultipartReadSetUpload
- omics:CreateAnnotationStoreVersion
- omics:CreateMultipartReadSetUpload
- omics:CreateShare
- omics:DeleteAnnotationStoreVersions
- omics:DeleteShare
- omics:GetAnnotationStoreVersion
- omics:GetShare
- omics:ListAnnotationStoreVersions
- omics:ListMultipartReadSetUploads
- omics:ListReadSetUploadParts
- omics:ListShares
- omics:UpdateAnnotationStoreVersion
- omics:UploadReadSetPart
- personalize:CreateDataInsightsJob
- personalize:DescribeDataInsightsJob
- personalize:GetActionRecommendations
- personalize:GetDataInsights
- personalize:ListDataInsightsJobs
- personalize:PutActionInteractions
- personalize:PutActions
- personalize:UpdateDataset
- pi:CreatePerformanceAnalysisReport
- pi:DeletePerformanceAnalysisReport
- pi:GetPerformanceAnalysisReport
- pi:ListPerformanceAnalysisReports
- pi:ListTagsForResource
- pi:TagResource
- pi:UntagResource
- profile:CreateCalculatedAttributeDefinition
- profile:CreateEventStream
- profile:DeleteCalculatedAttributeDefinition
- profile:DeleteEventStream
- profile:DetectProfileObjectType
- profile:GetCalculatedAttributeDefinition
- profile:GetCalculatedAttributeForProfile
- profile:GetEventStream
- profile:GetSimilarProfiles
- profile:ListCalculatedAttributeDefinitions
- profile:ListCalculatedAttributesForProfile
- profile:ListEventStreams
- profile:ListRuleBasedMatches
- profile:UpdateCalculatedAttributeDefinition
- proton:DeleteDeployment
- proton:GetDeployment
- proton:ListDeployments
- purchase-orders:ListTagsForResource
- purchase-orders:TagResource
- purchase-orders:UntagResource
- quicksight:CreateRoleMembership
- quicksight:CreateTopic
- quicksight:CreateTopicRefreshSchedule
- quicksight:DeleteIdentityPropagationConfig
- quicksight:DeleteRoleCustomPermission
- quicksight:DeleteRoleMembership
- quicksight:DeleteTopic
- quicksight:DeleteTopicRefreshSchedule
- quicksight:DescribeAssetBundleExportJob
- quicksight:DescribeAssetBundleImportJob
- quicksight:DescribeDashboardSnapshotJob
- quicksight:DescribeDashboardSnapshotJobResult
- quicksight:DescribeRoleCustomPermission
- quicksight:DescribeTopic
- quicksight:DescribeTopicPermissions
- quicksight:DescribeTopicRefresh
- quicksight:DescribeTopicRefreshSchedule
- quicksight:DescribeVPCConnection
- quicksight:ListAssetBundleExportJobs
- quicksight:ListAssetBundleImportJobs
- quicksight:ListCustomerManagedKeys
- quicksight:ListIdentityPropagationConfigs
- quicksight:ListKMSKeysForUser
- quicksight:ListRoleMemberships
- quicksight:ListTopicRefreshSchedules
- quicksight:ListTopics
- quicksight:ListVPCConnections
- quicksight:RegisterCustomerManagedKey
- quicksight:RemoveCustomerManagedKey
- quicksight:SearchUsers
- quicksight:StartAssetBundleExportJob
- quicksight:StartAssetBundleImportJob
- quicksight:StartDashboardSnapshotJob
- quicksight:UpdateDashboardLinks
- quicksight:UpdateIdentityPropagationConfig
- quicksight:UpdateRoleCustomPermission
- quicksight:UpdateTopic
- quicksight:UpdateTopicPermissions
- quicksight:UpdateTopicRefreshSchedule
- quicksight:UpdateVPCConnection
- ram:CreatePermission
- ram:CreatePermissionVersion
- ram:DeletePermission
- ram:DeletePermissionVersion
- ram:ListPermissionAssociations
- ram:ListReplacePermissionAssociationsWork
- ram:PromotePermissionCreatedFromPolicy
- ram:ReplacePermissionAssociations
- ram:SetDefaultPermissionVersion
- rds:CreateDBShardGroup
- rds:CreateIntegration
- rds:CreateTenantDatabase
- rds:DeleteDBClusterAutomatedBackup
- rds:DeleteDBShardGroup
- rds:DeleteIntegration
- rds:DeleteTenantDatabase
- rds:DescribeDBClusterAutomatedBackups
- rds:DescribeDBRecommendations
- rds:DescribeDBShardGroups
- rds:DescribeDbSnapshotTenantDatabases
- rds:DescribeIntegrations
- rds:DescribeTenantDatabases
- rds:DisableHttpEndpoint
- rds:EnableHttpEndpoint
- rds:ModifyDBRecommendation
- rds:ModifyDBShardGroup
- rds:ModifyTenantDatabase
- rds:RebootDBShardGroup
- rds:SwitchoverGlobalCluster
- redshift-serverless:CreateCustomDomainAssociation
- redshift-serverless:CreateScheduledAction
- redshift-serverless:CreateSnapshotCopyConfiguration
- redshift-serverless:DeleteCustomDomainAssociation
- redshift-serverless:DeleteScheduledAction
- redshift-serverless:DeleteSnapshotCopyConfiguration
- redshift-serverless:DescribeOneTimeCredit
- redshift-serverless:GetCustomDomainAssociation
- redshift-serverless:GetScheduledAction
- redshift-serverless:ListCustomDomainAssociations
- redshift-serverless:ListScheduledActions
- redshift-serverless:ListSnapshotCopyConfigurations
- redshift-serverless:RestoreTableFromRecoveryPoint
- redshift-serverless:UpdateCustomDomainAssociation
- redshift-serverless:UpdateScheduledAction
- redshift-serverless:UpdateSnapshotCopyConfiguration
- redshift:CreateCustomDomainAssociation
- redshift:CreateRedshiftIdcApplication
- redshift:DeleteCustomDomainAssociation
- redshift:DeleteRedshiftIdcApplication
- redshift:DeleteResourcePolicy
- redshift:DescribeCustomDomainAssociations
- redshift:DescribeInboundIntegrations
- redshift:DescribeRedshiftIdcApplications
- redshift:FailoverPrimaryCompute
- redshift:GetResourcePolicy
- redshift:ListRecommendations
- redshift:ModifyCustomDomainAssociation
- redshift:ModifyRedshiftIdcApplication
- redshift:PutResourcePolicy
- rekognition:AssociateFaces
- rekognition:CreateUser
- rekognition:DeleteUser
- rekognition:DisassociateFaces
- rekognition:GetMediaAnalysisJob
- rekognition:ListMediaAnalysisJobs
- rekognition:ListUsers
- rekognition:SearchUsers
- rekognition:SearchUsersByImage
- rekognition:StartMediaAnalysisJob
- resiliencehub:BatchUpdateRecommendationStatus
- resiliencehub:ListAppAssessmentComplianceDrifts
- resource-explorer-2:GetAccountLevelServiceConfiguration
- resource-explorer-2:ListIndexesForMembers
- resource-groups:AssociateResource
- resource-groups:DisassociateResource
- rolesanywhere:PutNotificationSettings
- rolesanywhere:ResetNotificationSettings
- route53-recovery-control-config:GetResourcePolicy
- route53resolver:CreateOutpostResolver
- route53resolver:DeleteOutpostResolver
- route53resolver:GetOutpostResolver
- route53resolver:ListOutpostResolvers
- route53resolver:UpdateOutpostResolver
- s3:AssociateAccessGrantsIdentityCenter
- s3:CreateAccessGrant
- s3:CreateAccessGrantsInstance
- s3:CreateAccessGrantsLocation
- s3:CreateStorageLensGroup
- s3:DeleteAccessGrant
- s3:DeleteAccessGrantsInstance
- s3:DeleteAccessGrantsInstanceResourcePolicy
- s3:DeleteAccessGrantsLocation
- s3:DeleteStorageLensGroup
- s3:DissociateAccessGrantsIdentityCenter
- s3:GetAccessGrant
- s3:GetAccessGrantsInstance
- s3:GetAccessGrantsInstanceForPrefix
- s3:GetAccessGrantsInstanceResourcePolicy
- s3:GetAccessGrantsLocation
- s3:GetDataAccess
- s3:GetStorageLensGroup
- s3:ListAccessGrants
- s3:ListAccessGrantsInstances
- s3:ListAccessGrantsLocations
- s3:ListStorageLensGroups
- s3:ListTagsForResource
- s3:PutAccessGrantsInstanceResourcePolicy
- s3:TagResource
- s3:UntagResource
- s3:UpdateAccessGrantsLocation
- s3:UpdateStorageLensGroup
- sagemaker:CreateCluster
- sagemaker:CreateInferenceComponent
- sagemaker:DeleteCluster
- sagemaker:DeleteCompilationJob
- sagemaker:DeleteHyperParameterTuningJob
- sagemaker:DeleteInferenceComponent
- sagemaker:DescribeCluster
- sagemaker:DescribeClusterNode
- sagemaker:DescribeInferenceComponent
- sagemaker:GetScalingConfigurationRecommendation
- sagemaker:InvokeEndpointWithResponseStream
- sagemaker:ListClusterNodes
- sagemaker:ListClusters
- sagemaker:ListInferenceComponents
- sagemaker:ListResourceCatalogs
- sagemaker:UpdateCluster
- sagemaker:UpdateInferenceComponent
- sagemaker:UpdateInferenceComponentRuntimeConfig
- scn:CreateBillOfMaterialsImportJob
- scn:GetBillOfMaterialsImportJob
- secretsmanager:BatchGetSecretValue
- securityhub:BatchDeleteAutomationRules
- securityhub:BatchGetAutomationRules
- securityhub:BatchGetConfigurationPolicyAssociations
- securityhub:BatchGetControlEvaluations
- securityhub:BatchUpdateAutomationRules
- securityhub:CreateAutomationRule
- securityhub:CreateConfigurationPolicy
- securityhub:DeleteConfigurationPolicy
- securityhub:GetConfigurationPolicy
- securityhub:GetConfigurationPolicyAssociation
- securityhub:GetFindingHistory
- securityhub:GetSecurityControlDefinition
- securityhub:ListAutomationRules
- securityhub:ListConfigurationPolicies
- securityhub:ListConfigurationPolicyAssociations
- securityhub:StartConfigurationPolicyAssociation
- securityhub:StartConfigurationPolicyDisassociation
- securityhub:UpdateConfigurationPolicy
- securityhub:UpdateSecurityControl
- securitylake:CreateDataLake
- securitylake:CreateDataLakeExceptionSubscription
- securitylake:CreateDataLakeOrganizationConfiguration
- securitylake:CreateSubscriberNotification
- securitylake:DeleteDataLake
- securitylake:DeleteDataLakeExceptionSubscription
- securitylake:DeleteDataLakeOrganizationConfiguration
- securitylake:DeleteSubscriberNotification
- securitylake:DeregisterDataLakeDelegatedAdministrator
- securitylake:GetDataLakeExceptionSubscription
- securitylake:GetDataLakeOrganizationConfiguration
- securitylake:GetDataLakeSources
- securitylake:ListDataLakeExceptions
- securitylake:ListDataLakes
- securitylake:ListTagsForResource
- securitylake:RegisterDataLakeDelegatedAdministrator
- securitylake:TagResource
- securitylake:UntagResource
- securitylake:UpdateDataLake
- securitylake:UpdateDataLakeExceptionSubscription
- securitylake:UpdateSubscriberNotification
- servicediscovery:DiscoverInstancesRevision
- ses:CancelExportJob
- ses:CreateExportJob
- ses:GetExportJob
- ses:GetMessageInsights
- ses:ListExportJobs
- ses:PutDedicatedIpPoolScalingAttributes
- signer:GetRevocationStatus
- signer:SignPayload
- simspaceweaver:CreateSnapshot
- sms-voice:CreateRegistration
- sms-voice:CreateRegistrationAssociation
- sms-voice:CreateRegistrationAttachment
- sms-voice:CreateRegistrationVersion
- sms-voice:CreateVerifiedDestinationNumber
- sms-voice:DeleteRegistration
- sms-voice:DeleteRegistrationAttachment
- sms-voice:DeleteRegistrationFieldValue
- sms-voice:DeleteVerifiedDestinationNumber
- sms-voice:DescribeRegistrationAttachments
- sms-voice:DescribeRegistrationFieldDefinitions
- sms-voice:DescribeRegistrationFieldValues
- sms-voice:DescribeRegistrationSectionDefinitions
- sms-voice:DescribeRegistrationTypeDefinitions
- sms-voice:DescribeRegistrationVersions
- sms-voice:DescribeRegistrations
- sms-voice:DescribeVerifiedDestinationNumbers
- sms-voice:DiscardRegistrationVersion
- sms-voice:ListRegistrationAssociations
- sms-voice:PutRegistrationFieldValue
- sms-voice:ReleaseSenderId
- sms-voice:RequestSenderId
- sms-voice:SendDestinationNumberVerificationCode
- sms-voice:SubmitRegistrationVersion
- sms-voice:UpdateSenderId
- sms-voice:VerifyDestinationNumber
- snowball:ListPickupLocations
- sqlworkbench:GetAutocompletionMetadata
- sqlworkbench:GetAutocompletionResource
- sqlworkbench:GetQSqlRecommendations
- sqlworkbench:UpdateAccountQSqlSettings
- sqs:CancelMessageMoveTask
- sqs:ListMessageMoveTasks
- sqs:StartMessageMoveTask
- ssm-contacts:ListPageResolutions
- ssm-incidents:BatchGetIncidentFindings
- ssm-incidents:ListIncidentFindings
- ssm-sap:StartApplicationRefresh
- ssm:DeleteOpsItem
- sso:CreateApplication
- sso:CreateApplicationAssignment
- sso:CreateInstance
- sso:CreateTrustedTokenIssuer
- sso:DeleteApplication
- sso:DeleteApplicationAccessScope
- sso:DeleteApplicationAssignment
- sso:DeleteApplicationAuthenticationMethod
- sso:DeleteApplicationGrant
- sso:DeleteInstance
- sso:DeleteTrustedTokenIssuer
- sso:DescribeApplication
- sso:DescribeApplicationAssignment
- sso:DescribeApplicationProvider
- sso:DescribeInstance
- sso:DescribeTrustedTokenIssuer
- sso:GetApplicationAccessScope
- sso:GetApplicationAssignmentConfiguration
- sso:GetApplicationAuthenticationMethod
- sso:GetApplicationGrant
- sso:ListAccountAssignmentsForPrincipal
- sso:ListApplicationAccessScopes
- sso:ListApplicationAssignments
- sso:ListApplicationAssignmentsForPrincipal
- sso:ListApplicationAuthenticationMethods
- sso:ListApplicationGrants
- sso:ListApplicationProviders
- sso:ListTrustedTokenIssuers
- sso:PutApplicationAccessScope
- sso:PutApplicationAuthenticationMethod
- sso:PutApplicationGrant
- sso:UpdateApplication
- sso:UpdateInstance
- sso:UpdateTrustedTokenIssuer
- states:CreateStateMachineAlias
- states:DeleteStateMachineAlias
- states:DeleteStateMachineVersion
- states:DescribeStateMachineAlias
- states:InvokeHTTPEndpoint
- states:ListStateMachineAliases
- states:ListStateMachineVersions
- states:PublishStateMachineVersion
- states:RedriveExecution
- states:RevealSecrets
- states:TestState
- states:UpdateStateMachineAlias
- sts:SetContext
- support:DescribeCommunication
- support:DescribeCreateCaseOptions
- support:DescribeSupportedLanguages
- supportplans:CreateSupportPlanSchedule
- tax:GetTaxInfoReportingDocument
- textract:CreateAdapter
- textract:CreateAdapterVersion
- textract:DeleteAdapter
- textract:DeleteAdapterVersion
- textract:GetAdapter
- textract:GetAdapterVersion
- textract:ListAdapterVersions
- textract:ListAdapters
- textract:ListTagsForResource
- textract:TagResource
- textract:UntagResource
- textract:UpdateAdapter
- timestream:Unload
- transcribe:DeleteMedicalScribeJob
- transcribe:GetMedicalScribeJob
- transcribe:ListMedicalScribeJobs
- transcribe:StartMedicalScribeJob
- transfer:TestConnection
- translate:TranslateDocument
- trustedadvisor:GetOrganizationRecommendation
- trustedadvisor:GetRecommendation
- trustedadvisor:ListChecks
- trustedadvisor:ListOrganizationRecommendationAccounts
- trustedadvisor:ListOrganizationRecommendationResources
- trustedadvisor:ListOrganizationRecommendations
- trustedadvisor:ListRecommendationResources
- trustedadvisor:ListRecommendations
- trustedadvisor:UpdateEngagement
- trustedadvisor:UpdateOrganizationRecommendationLifecycle
- trustedadvisor:UpdateRecommendationLifecycle
- vendor-insights:UpdateDataSource
- wafv2:CreateAPIKey
- wafv2:DescribeAllManagedProducts
- wafv2:DescribeManagedProductsByVendor
- wafv2:GetDecryptedAPIKey
- wafv2:ListAPIKeys
- wellarchitected:AssociateProfiles
- wellarchitected:CreateProfile
- wellarchitected:CreateProfileShare
- wellarchitected:CreateReviewTemplate
- wellarchitected:CreateTemplateShare
- wellarchitected:DeleteProfile
- wellarchitected:DeleteProfileShare
- wellarchitected:DeleteReviewTemplate
- wellarchitected:DeleteTemplateShare
- wellarchitected:DisassociateProfiles
- wellarchitected:GetProfile
- wellarchitected:GetProfileTemplate
- wellarchitected:GetReviewTemplate
- wellarchitected:GetReviewTemplateAnswer
- wellarchitected:GetReviewTemplateLensReview
- wellarchitected:ListProfileNotifications
- wellarchitected:ListProfileShares
- wellarchitected:ListProfiles
- wellarchitected:ListReviewTemplateAnswers
- wellarchitected:ListReviewTemplates
- wellarchitected:ListTemplateShares
- wellarchitected:UpdateProfile
- wellarchitected:UpdateReviewTemplate
- wellarchitected:UpdateReviewTemplateAnswer
- wellarchitected:UpdateReviewTemplateLensReview
- wellarchitected:UpgradeProfileVersion
- wellarchitected:UpgradeReviewTemplateLensReview
- wisdom:CreateQuickResponse
- wisdom:DeleteImportJob
- wisdom:DeleteQuickResponse
- wisdom:GetImportJob
- wisdom:GetQuickResponse
- wisdom:ListImportJobs
- wisdom:ListQuickResponses
- wisdom:PutFeedback
- wisdom:SearchQuickResponses
- wisdom:StartImportJob
- wisdom:UpdateQuickResponse
- workdocs:UpdateUserAdministrativeSettings
- workmail:DescribeEntity
- workmail:ListGroupsForEntity
- workmail:UpdateGroup
- workmail:UpdateUser
- workspaces-web:AssociateIpAccessSettings
- workspaces-web:CreateIpAccessSettings
- workspaces-web:DeleteIpAccessSettings
- workspaces-web:DisassociateIpAccessSettings
- workspaces-web:GetIpAccessSettings
- workspaces-web:ListIpAccessSettings
- workspaces-web:UpdateIpAccessSettings
- workspaces:AssociateWorkspaceApplication
- workspaces:DeployWorkspaceApplications
- workspaces:DescribeApplicationAssociations
- workspaces:DescribeApplications
- workspaces:DescribeBundleAssociations
- workspaces:DescribeImageAssociations
- workspaces:DescribeWorkspaceAssociations
- workspaces:DisassociateWorkspaceApplication

**Updated action access level:**

- application-autoscaling:ListTagsForResource: Tagging -> Read
- chime:ValidateE911Address: Write -> Read
- finspace:ListTagsForResource: Read -> List
- license-manager-linux-subscriptions:GetServiceSettings: Write -> Read
- license-manager-linux-subscriptions:ListLinuxSubscriptionInstances: Write -> Read
- license-manager-linux-subscriptions:ListLinuxSubscriptions: Write -> Read
- redshift:DescribeEndpointAuthorization: Permissions management -> List
- states:ListExecutions: Read -> List
- states:ListTagsForResource: Read -> List

**New resource types:**

- amplifybackend:created-backend
- amplifyuibuilder:CodegenJobResource
- aoss:Dashboards
- apigateway:Tags
- app-integrations:application
- app-integrations:application-association
- appstream:app-block-builder
- appsync:mergedApiAssociation
- appsync:sourceApiAssociation
- aps:cluster
- aps:scraper
- athena:capacity-reservation
- aws-marketplace:DeploymentParameter
- backup:restoreTestingPlan
- batch:job-definition-revision
- chime:media-pipeline-kinesis-video-stream-pool
- chime:sip-media-application
- chime:voice-connector
- cleanrooms:analysistemplate
- cleanrooms:collaboration
- cleanrooms:configuredaudiencemodelassociation
- cleanrooms:configuredtable
- cleanrooms:configuredtableassociation
- cleanrooms:membership
- cleanrooms:privacybudgettemplate
- cloudformation:generatedtemplate
- cloudformation:resourcescan
- cloudfront:key-value-store
- cloudwatch:service
- cloudwatch:slo
- codebuild:fleet
- codecatalyst:identity-center-applications
- codecatalyst:project
- codecatalyst:space
- codeguru-security:ScanName
- codestar-connections:RepositoryLink
- codewhisperer:customization
- connect:aws-managed-view
- connect:contact-evaluation
- connect:customer-managed-view
- connect:customer-managed-view-version
- connect:evaluation-form
- connect:prompt
- connect:qualified-aws-managed-view
- connect:qualified-customer-managed-view
- controltower:EnabledControl
- controltower:LandingZone
- datasync:discoveryjob
- datasync:storagesystem
- datazone:domain
- dms:DataMigration
- dms:ReplicationConfig
- dms:Test
- dms:TestEnvironment
- dms:TestPlan
- dms:TestRun
- drs:LaunchConfigurationTemplateResource
- drs:SourceNetworkResource
- ec2-instance-connect:instance-connect-endpoint
- ec2:instance-connect-endpoint
- eks:access-entry
- eks:access-policy
- eks:eks-anywhere-subscription
- eks:podidentityassociation
- elasticache:serverlesscache
- elasticache:serverlesscachesnapshot
- elasticloadbalancing:truststore
- finspace:kxCluster
- finspace:kxDatabase
- finspace:kxDataview
- finspace:kxEnvironment
- finspace:kxScalingGroup
- finspace:kxUser
- finspace:kxVolume
- globalaccelerator:attachment
- glue:completion
- glue:customEntityType
- imagebuilder:lifecycleExecution
- imagebuilder:lifecyclePolicy
- imagebuilder:workflow
- imagebuilder:workflowVersion
- inspector2:CIS Scan Configuration
- iot:certificateprovider
- iot:package
- iot:packageversion
- iottwinmaker:metadataTransferJob
- iotwireless:ImportTask
- iq:permission
- ivs:Composition
- ivs:Encoder-Configuration
- ivs:Playback-Restriction-Policy
- ivs:Storage-Configuration
- kafka:replicator
- kafka:vpc-connection
- lex:test set
- logs:anomaly-detector
- logs:delivery
- logs:delivery-destination
- logs:delivery-source
- lookoutequipment:model-version
- mediaconnect:Bridge
- mediaconnect:Gateway
- mediaconnect:GatewayInstance
- mgn:ConnectorResource
- mobiletargeting:app
- mobiletargeting:application-metrics
- mobiletargeting:attribute
- mobiletargeting:campaign
- mobiletargeting:campaign-metrics
- mobiletargeting:channel
- mobiletargeting:channels
- mobiletargeting:endpoint
- mobiletargeting:event-stream
- mobiletargeting:events
- mobiletargeting:export-job
- mobiletargeting:import-job
- mobiletargeting:journey
- mobiletargeting:journey-execution-activity-metrics
- mobiletargeting:journey-execution-metrics
- mobiletargeting:journey-metrics
- mobiletargeting:messages
- mobiletargeting:otp
- mobiletargeting:recommender
- mobiletargeting:reports
- mobiletargeting:segment
- mobiletargeting:template
- mobiletargeting:user
- mobiletargeting:verify-otp
- omics:AnnotationStoreVersion
- personalize:dataInsightsJob
- pi:perf-reports-resource
- profile:calculated-attributes
- profile:event-streams
- proton:deployment
- purchase-orders:purchase-order
- quicksight:assetBundleExportJob
- quicksight:assetBundleImportJob
- quicksight:dashboardSnapshotJob
- quicksight:vpcconnection
- ram:customer-managed-permission
- rds:auto-backup
- rds:cluster-auto-backup
- rds:integration
- rds:shardgrp
- rds:snapshot-tenant-database
- rds:tenant-database
- redshift:redshiftidcapplication
- route53resolver:outpost-resolver
- s3:accessgrant
- s3:accessgrantsinstance
- s3:accessgrantslocation
- s3:storagelensgroup
- sagemaker:cluster
- sagemaker:inference-component
- sagemaker:sagemaker-catalog
- scn:bill-of-materials-import-job
- securityhub:automation-rule
- securityhub:configuration-policy
- securitylake:data-lake
- securitylake:subscriber
- ses:export-job
- sms-voice:Registration
- sms-voice:RegistrationAttachment
- sms-voice:VerifiedDestinationNumber
- ssm-sap:component
- sso:Application
- sso:ApplicationProvider
- sso:TrustedTokenIssuer
- states:labelled execution
- states:labelled express
- states:statemachinealias
- states:statemachineversion
- textract:adapter
- textract:adapterversion
- transcribe:medicalscribejob
- wafv2:verified-access-instance
- wellarchitected:profile
- wellarchitected:review-template
- wisdom:QuickResponse
- workspaces-web:identityProvider
- workspaces-web:ipAccessSettings
- workspaces:workspaceapplication

**New condition keys:**

- acm:CertificateAuthority
- acm:CertificateTransparencyLogging
- acm:DomainNames
- acm:KeyAlgorithm
- acm:ValidationMethod
- amplifyuibuilder:CodegenJobResourceAppId
- amplifyuibuilder:CodegenJobResourceEnvironmentName
- amplifyuibuilder:CodegenJobResourceId
- appsync:Visibility
- artifact:ReportCategory
- artifact:ReportSeries
- aws-marketplace:Intent
- backup:MaxRetentionDays
- backup:MinRetentionDays
- cases:UserArn
- codeguru-security:RequestTag/${TagKey}
- codeguru-security:ResourceTag/${TagKey}
- codeguru-security:TagKeys
- codestar-connections:Branch
- codewhisperer:RequestTag/${TagKey}
- codewhisperer:ResourceTag/${TagKey}
- codewhisperer:TagKeys
- connect:SearchContactsByContactAnalysis
- controltower:RequestTag/${TagKey}
- controltower:ResourceTag/${TagKey}
- controltower:TagKeys
- cur:RequestTag/${TagKey}
- cur:ResourceTag/${TagKey}
- cur:TagKeys
- datazone:RequestTag/${TagKey}
- datazone:ResourceTag/${TagKey}
- datazone:TagKeys
- discovery:TagKeys
- dms:data-migration-tag/${TagKey}
- dms:data-provider-tag/${TagKey}
- dms:instance-profile-tag/${TagKey}
- dms:migration-project-tag/${TagKey}
- dms:replication-config-tag/${TagKey}
- dms:test-environment-tag/${TagKey}
- dms:test-plan-tag/${TagKey}
- dms:test-run-tag/${TagKey}
- dms:test-tag/${TagKey}
- ec2-instance-connect:maxTunnelDuration
- ec2-instance-connect:privateIpAddress
- ec2-instance-connect:remotePort
- ec2:FisActionId
- ec2:FisTargetArns
- ec2:SnapshotCoolOffPeriod
- ec2:SnapshotLockDuration
- ecs:CreateAction
- ecs:account-setting
- ecs:enable-ebs-volumes
- eks:accessEntryType
- eks:accessScope
- eks:bootstrapClusterCreatorAdminPermissions
- eks:clusterName
- eks:kubernetesGroups
- eks:namespaces
- eks:policyArn
- eks:principalArn
- eks:username
- elasticache:DataStorageUnit
- elasticache:MaximumDataStorage
- elasticache:MaximumECPUPerSecond
- elasticfilesystem:CreateAction
- elasticloadbalancing:CreateAction
- elasticloadbalancing:ListenerProtocol
- elasticloadbalancing:Scheme
- elasticloadbalancing:SecurityGroup
- elasticloadbalancing:SecurityPolicy
- elasticloadbalancing:Subnet
- iam:FIDO-FIPS-140-2-certification
- iam:FIDO-FIPS-140-3-certification
- iam:FIDO-certification
- iam:RegisterSecurityKey
- identitystore:UserId
- imagebuilder:LifecyclePolicyResourceType
- iotfleetwise:DestinationArn
- iottwinmaker:destinationType
- iottwinmaker:linkedServices
- iottwinmaker:sourceType
- kafka:publicAccessEnabled
- kms:ScheduleKeyDeletionPendingWindowInDays
- lambda:EventSourceToken
- logs:DeliveryDestinationResourceArn
- logs:LogGeneratingResourceArns
- lookoutequipment:IsImportingData
- mediaconvert:HttpInputsAllowed
- mediaconvert:HttpsInputsAllowed
- mediaconvert:S3InputsAllowed
- omics:AnnotationStoreVersionName
- outposts:RequestTag/${TagKey}
- outposts:ResourceTag/${TagKey}
- outposts:TagKeys
- pi:RequestTag/${TagKey}
- pi:ResourceTag/${TagKey}
- pi:TagKeys
- purchase-orders:RequestTag/${TagKey}
- purchase-orders:ResourceTag/${TagKey}
- purchase-orders:TagKeys
- rds:MultiTenant
- rds:TenantDatabaseName
- redshift:AllowWrites
- redshift:InboundIntegrationArn
- s3:AccessGrantsInstanceArn
- sagemaker:DomainId
- sagemaker:EnableRemoteDebug
- sagemaker:OwnerUserProfileArn
- sagemaker:SearchVisibilityCondition/${FilterKey}
- sagemaker:SpaceSharingType
- sagemaker:TaggingAction
- sagemaker:UserProfileName
- securitylake:RequestTag/${TagKey}
- securitylake:ResourceTag/${TagKey}
- securitylake:TagKeys
- ses:ExportSourceType
- ssm:SourceInstanceARN
- ssm:resourceTag/aws
- sso:ApplicationAccount
- states:HTTPEndpoint
- states:HTTPMethod
- states:StateMachineQualifier
- sts:DurationSeconds
- sts:RequestContext/${ContextKey}
- sts:RequestContextProviders
- textract:RequestTag/${TagKey}
- textract:ResourceTag/${TagKey}
- textract:TagKeys
- wisdom:SearchFilter/RoutingProfileArn

## [0.600.0](https://github.com/udondan/iam-floyd/compare/v0.507.0...v0.600.0) (2024-02-11)

Starting with this release, there won't be a Python version.

Only under-the-hood changes in here.

## [0.507.0](https://github.com/udondan/iam-floyd/compare/v0.506.0...v0.507.0) (2023-04-12)

**New actions:**

- aws-portal:GetConsoleActionSetEnforced
- aws-portal:UpdateConsoleActionSetEnforced
- purchase-orders:GetConsoleActionSetEnforced
- purchase-orders:UpdateConsoleActionSetEnforced
- rekognition:CreateFaceLivenessSession
- rekognition:GetFaceLivenessSessionResults
- rekognition:StartFaceLivenessSession
- s3-outposts:GetObjectVersionForReplication
- s3-outposts:GetReplicationConfiguration
- s3-outposts:PutReplicationConfiguration
- s3-outposts:ReplicateDelete
- s3-outposts:ReplicateObject
- s3-outposts:ReplicateTags

## [0.506.0](https://github.com/udondan/iam-floyd/compare/v0.505.0...v0.506.0) (2023-04-11)

**New actions:**

- quicksight:CreateRefreshSchedule
- quicksight:DeleteDataSetRefreshProperties
- quicksight:DeleteRefreshSchedule
- quicksight:DescribeDataSetRefreshProperties
- quicksight:DescribeRefreshSchedule
- quicksight:ListRefreshSchedules
- quicksight:PutDataSetRefreshProperties
- quicksight:UpdateRefreshSchedule

**New resource types:**

- quicksight:refreshschedule

## [0.505.0](https://github.com/udondan/iam-floyd/compare/v0.504.0...v0.505.0) (2023-04-08)

:warning: **Removed services:**

- sumerian

:warning: **Removed actions:**

- sumerian:Login
- sumerian:ViewRelease

:warning: **Removed resource types:**

- sumerian:project

**New actions:**

- codecatalyst:ListTagsForResource
- codecatalyst:TagResource
- codecatalyst:UntagResource
- trustedadvisor:CreateEngagement
- trustedadvisor:CreateEngagementAttachment
- trustedadvisor:CreateEngagementCommunication
- trustedadvisor:GetEngagement
- trustedadvisor:GetEngagementAttachment
- trustedadvisor:GetEngagementType
- trustedadvisor:ListEngagementCommunications
- trustedadvisor:ListEngagementTypes
- trustedadvisor:ListEngagements
- trustedadvisor:UpdateEngagementStatus

## [0.504.0](https://github.com/udondan/iam-floyd/compare/v0.503.0...v0.504.0) (2023-04-07)

**New actions:**

- iotwireless:DeregisterWirelessDevice
- ssm:UpdateInstanceAssociationStatus
- workdocs:SearchResources

## [0.503.0](https://github.com/udondan/iam-floyd/compare/v0.502.0...v0.503.0) (2023-04-05)

**New actions:**

- freertos:CreateSubscription
- freertos:DescribeSubscription
- freertos:GetEmpPatchUrl
- freertos:GetSubscriptionBillingAmount
- freertos:ListSoftwarePatches
- freertos:ListSubscriptionEmails
- freertos:ListSubscriptions
- freertos:UpdateEmailRecipients
- freertos:VerifyEmail
- proton:CreateServiceInstance
- proton:CreateServiceSyncConfig
- proton:DeleteServiceSyncConfig
- proton:GetServiceInstanceSyncStatus
- proton:GetServiceSyncBlockerSummary
- proton:GetServiceSyncConfig
- proton:UpdateServiceSyncBlocker
- proton:UpdateServiceSyncConfig
- servicecatalog:NotifyProvisionProductEngineWorkflowResult
- servicecatalog:NotifyTerminateProvisionedProductEngineWorkflowResult
- servicecatalog:NotifyUpdateProvisionedProductEngineWorkflowResult

**New resource types:**

- freertos:subscription

## [0.502.0](https://github.com/udondan/iam-floyd/compare/v0.501.0...v0.502.0) (2023-04-04)

:warning: **Removed actions:**

- ssm:UpdateInstanceAssociationStatus

:warning: **Removed condition keys:**

- ssm:SourceInstanceARN

**New actions:**

- imagebuilder:GetWorkflowExecution
- imagebuilder:GetWorkflowStepExecution
- imagebuilder:ListImageScanFindingAggregations
- imagebuilder:ListImageScanFindings
- imagebuilder:ListWorkflowExecutions
- imagebuilder:ListWorkflowStepExecutions
- ssm:DeleteResourcePolicy
- ssm:GetResourcePolicies
- ssm:PutResourcePolicy

**New resource types:**

- imagebuilder:workflowExecution
- imagebuilder:workflowStepExecution
- ssm:resourcearn

## [0.501.0](https://github.com/udondan/iam-floyd/compare/v0.500.0...v0.501.0) (2023-04-01)

**New actions:**

- applicationinsights:Link
- guardduty:GetCoverageStatistics
- guardduty:ListCoverage
- guardduty:SendSecurityTelemetry
- kendra:BatchDeleteFeaturedResultsSet
- kendra:CreateAccessControlConfiguration
- kendra:CreateFeaturedResultsSet
- kendra:DeleteAccessControlConfiguration
- kendra:DescribeAccessControlConfiguration
- kendra:DescribeFeaturedResultsSet
- kendra:ListAccessControlConfigurations
- kendra:ListFeaturedResultsSets
- kendra:UpdateAccessControlConfiguration
- kendra:UpdateFeaturedResultsSet
- network-firewall:CreateTLSInspectionConfiguration
- network-firewall:DeleteTLSInspectionConfiguration
- network-firewall:DescribeTLSInspectionConfiguration
- network-firewall:ListTLSInspectionConfigurations
- network-firewall:UpdateTLSInspectionConfiguration
- scn:ListTagsForResource
- scn:TagResource
- scn:UntagResource
- ssm-contacts:CreateRotation
- ssm-contacts:CreateRotationOverride
- ssm-contacts:DeleteRotation
- ssm-contacts:DeleteRotationOverride
- ssm-contacts:GetRotation
- ssm-contacts:GetRotationOverride
- ssm-contacts:ListPreviewRotationShifts
- ssm-contacts:ListRotationOverrides
- ssm-contacts:ListRotationShifts
- ssm-contacts:ListRotations
- ssm-contacts:UpdateRotation
- wellarchitected:GetConsolidatedReport

**New resource types:**

- kendra:access-control-configuration
- kendra:featured-results-set
- network-firewall:TLSInspectionConfiguration
- ssm-contacts:rotation
- wafv2:apprunner

## [0.500.0](https://github.com/udondan/iam-floyd/compare/v0.499.0...v0.500.0) (2023-03-29)

**New services:**

- datazone
- datazonecontrol

**New actions:**

- ce:GetConsoleActionSetEnforced
- ce:UpdateConsoleActionSetEnforced
- iotwireless:DeleteWirelessDeviceImportTask
- iotwireless:GetWirelessDeviceImportTask
- iotwireless:ListDevicesForWirelessDeviceImportTask
- iotwireless:ListWirelessDeviceImportTasks
- iotwireless:StartSingleWirelessDeviceImportTask
- iotwireless:StartWirelessDeviceImportTask
- iotwireless:UpdateWirelessDeviceImportTask
- voiceid:AssociateFraudster
- voiceid:CreateWatchlist
- voiceid:DeleteWatchlist
- voiceid:DescribeWatchlist
- voiceid:DisassociateFraudster
- voiceid:ListFraudsters
- voiceid:ListWatchlists
- voiceid:UpdateWatchlist

**New resource types:**

- iotwireless:WirelessDeviceImportTask

## [0.499.0](https://github.com/udondan/iam-floyd/compare/v0.498.0...v0.499.0) (2023-03-28)

**New actions:**

- groundstation:GetAgentConfiguration
- groundstation:RegisterAgent
- groundstation:UpdateAgentStatus
- sagemaker:CreateAutoMLJobV2
- sagemaker:DescribeAutoMLJobV2

**New resource types:**

- groundstation:Agent

**New condition keys:**

- groundstation:AgentId

## [0.498.0](https://github.com/udondan/iam-floyd/compare/v0.497.0...v0.498.0) (2023-03-25)

**New actions:**

- chime:CreateAppInstanceBot
- chime:CreateMediaInsightsPipeline
- chime:CreateMediaInsightsPipelineConfiguration
- chime:CreateVoiceProfile
- chime:CreateVoiceProfileDomain
- chime:DeleteAppInstanceBot
- chime:DeleteMediaInsightsPipelineConfiguration
- chime:DeleteMessagingStreamingConfigurations
- chime:DeleteVoiceProfile
- chime:DeleteVoiceProfileDomain
- chime:DescribeAppInstanceBot
- chime:GetMediaInsightsPipelineConfiguration
- chime:GetMessagingStreamingConfigurations
- chime:GetSpeakerSearchTask
- chime:GetVoiceProfile
- chime:GetVoiceProfileDomain
- chime:GetVoiceToneAnalysisTask
- chime:ListAppInstanceBots
- chime:ListMediaInsightsPipelineConfigurations
- chime:ListVoiceProfileDomains
- chime:ListVoiceProfiles
- chime:PutAppInstanceUserExpirationSettings
- chime:PutChannelExpirationSettings
- chime:PutMessagingStreamingConfigurations
- chime:StartSpeakerSearchTask
- chime:StartVoiceToneAnalysisTask
- chime:StopSpeakerSearchTask
- chime:StopVoiceToneAnalysisTask
- chime:UpdateAppInstanceBot
- chime:UpdateMediaInsightsPipelineConfiguration
- chime:UpdateMediaInsightsPipelineStatus
- chime:UpdateVoiceProfile
- chime:UpdateVoiceProfileDomain
- glue:GetDataPreviewStatement
- glue:RunDataPreviewStatement
- ivs:CreateParticipantToken
- ivs:CreateStage
- ivs:DeleteStage
- ivs:DisconnectParticipant
- ivs:GetStage
- ivs:ListStages
- ivs:UpdateStage

**New resource types:**

- chime:app-instance-bot
- chime:media-insights-pipeline-configuration
- chime:voice-profile
- chime:voice-profile-domain
- ivs:Stage

## [0.497.0](https://github.com/udondan/iam-floyd/compare/v0.496.0...v0.497.0) (2023-03-23)

**New actions:**

- application-autoscaling:ListTagsForResource
- application-autoscaling:TagResource
- application-autoscaling:UntagResource
- cleanrooms:ListTagsForResource
- cleanrooms:TagResource
- cleanrooms:UntagResource

**New resource types:**

- application-autoscaling:ScalableTarget

**New condition keys:**

- application-autoscaling:RequestTag/${TagKey}
- application-autoscaling:ResourceTag/${TagKey}
- application-autoscaling:TagKeys
- application-autoscaling:scalable-dimension
- application-autoscaling:service-namespace
- cleanrooms:RequestTag/${TagKey}
- cleanrooms:ResourceTag/${TagKey}
- cleanrooms:TagKeys

## [0.496.0](https://github.com/udondan/iam-floyd/compare/v0.495.0...v0.496.0) (2023-03-22)

**New actions:**

- elasticmapreduce:SetVisibleToAllUsers
- es:ListScheduledActions
- es:UpdateScheduledAction
- private-networks:StartNetworkResourceUpdate
- sqlworkbench:GetSchemaInference

## [0.495.0](https://github.com/udondan/iam-floyd/compare/v0.494.0...v0.495.0) (2023-03-21)

**New services:**

- mobilehub

**New actions:**

- mgn:ListExportErrors
- mgn:ListExports
- mgn:ListImportErrors
- mgn:ListImports
- mgn:StartExport
- mgn:StartImport

**New resource types:**

- mgn:ExportResource
- mgn:ImportResource

## [0.494.0](https://github.com/udondan/iam-floyd/compare/v0.493.0...v0.494.0) (2023-03-17)

:warning: **Removed services:**

- mobilehub

:warning: **Removed actions:**

- mobilehub:CreateProject
- mobilehub:CreateServiceRole
- mobilehub:DeleteProject
- mobilehub:DeleteProjectSnapshot
- mobilehub:DeployToStage
- mobilehub:DescribeBundle
- mobilehub:ExportBundle
- mobilehub:ExportProject
- mobilehub:GenerateProjectParameters
- mobilehub:GetProject
- mobilehub:GetProjectSnapshot
- mobilehub:ImportProject
- mobilehub:InstallBundle
- mobilehub:ListAvailableConnectors
- mobilehub:ListAvailableFeatures
- mobilehub:ListAvailableRegions
- mobilehub:ListBundles
- mobilehub:ListProjectSnapshots
- mobilehub:ListProjects
- mobilehub:SynchronizeProject
- mobilehub:UpdateProject
- mobilehub:ValidateProject
- mobilehub:VerifyServiceRole

:warning: **Removed resource types:**

- mobilehub:project

**New actions:**

- apprunner:AssociateWebAcl
- apprunner:DescribeWebAclForService
- apprunner:DisassociateWebAcl
- apprunner:ListAssociatedServicesForWebAcl
- chatbot:CreateMicrosoftTeamsChannelConfiguration
- chatbot:DeleteMicrosoftTeamsChannelConfiguration
- chatbot:DeleteMicrosoftTeamsConfiguredTeam
- chatbot:DeleteMicrosoftTeamsUserIdentity
- chatbot:GetMicrosoftTeamsChannelConfiguration
- chatbot:GetMicrosoftTeamsOauthParameters
- chatbot:ListMicrosoftTeamsChannelConfigurations
- chatbot:ListMicrosoftTeamsConfiguredTeams
- chatbot:ListMicrosoftTeamsUserIdentities
- chatbot:RedeemMicrosoftTeamsOauthCode
- chatbot:UpdateMicrosoftTeamsChannelConfiguration
- connect:GetMetricDataV2
- inspector2:BatchGetCodeSnippet

**New resource types:**

- apprunner:webacl

## [0.493.0](https://github.com/udondan/iam-floyd/compare/v0.492.0...v0.493.0) (2023-03-14)

**New actions:**

- lightsail:CreateGUISessionAccessDetails
- lightsail:GetCostEstimate
- lightsail:StartGUISession
- lightsail:StopGUISession
- neptune-db:GetGraphSummary

## [0.492.0](https://github.com/udondan/iam-floyd/compare/v0.491.0...v0.492.0) (2023-03-11)

**New actions:**

- lakeformation:GetDataCellsFilter
- lakeformation:UpdateDataCellsFilter

**New condition keys:**

- devops-guru:ServiceNames

## [0.491.0](https://github.com/udondan/iam-floyd/compare/v0.490.0...v0.491.0) (2023-03-09)

**New actions:**

- frauddetector:GetBatchImportJobValidationReport
- s3-outposts:DeleteObjectVersion
- s3-outposts:DeleteObjectVersionTagging
- s3-outposts:GetBucketVersioning
- s3-outposts:GetObjectVersion
- s3-outposts:GetObjectVersionTagging
- s3-outposts:ListBucketVersions
- s3-outposts:ListOutpostsWithS3
- s3-outposts:PutBucketVersioning
- s3-outposts:PutObjectVersionTagging
- trustedadvisor:DescribeCheckStatusHistoryChanges
- wickr:CreateNetwork
- wickr:ListTagsForResource
- wickr:TagResource
- wickr:UntagResource
- wickr:UpdateNetworkDetails

**New resource types:**

- wickr:network

**New condition keys:**

- s3-outposts:versionid
- wickr:RequestTag/${TagKey}
- wickr:ResourceTag/${TagKey}
- wickr:TagKeys

## [0.490.0](https://github.com/udondan/iam-floyd/compare/v0.489.0...v0.490.0) (2023-03-08)

**New actions:**

- dms:BatchStartRecommendations
- dms:DescribeRecommendationLimitations
- dms:DescribeRecommendations
- dms:StartRecommendations
- sagemaker:ListAliases
- sagemaker:UpdateImageVersion

## [0.489.0](https://github.com/udondan/iam-floyd/compare/v0.488.0...v0.489.0) (2023-03-07)

**New global condition keys:**

- aws:Ec2InstanceSourceVpc
- aws:Ec2InstanceSourcePrivateIPv4
- aws:ResourceAccount
- aws:ResourceOrgID
- aws:ResourceOrgPaths

## [0.488.0](https://github.com/udondan/iam-floyd/compare/v0.487.0...v0.488.0) (2023-03-07)

**New actions:**

- ec2:AssignPrivateNatGatewayAddress
- ec2:AssociateNatGatewayAddress
- ec2:DisassociateNatGatewayAddress
- ec2:UnassignPrivateNatGatewayAddress
- securityhub:BatchGetSecurityControls
- securityhub:ListStandardsControlAssociations

## [0.487.0](https://github.com/udondan/iam-floyd/compare/v0.486.0...v0.487.0) (2023-03-04)

**New actions:**

- controltower:DeleteLandingZone
- controltower:DescribeLandingZoneConfiguration
- controltower:DescribeRegisterOrganizationalUnitOperation
- controltower:GetAccountInfo
- controltower:GetLandingZoneDriftStatus
- controltower:ListDriftDetails
- controltower:ListExtendGovernancePrecheckDetails
- controltower:ListExternalConfigRuleCompliance
- controltower:PerformPreLaunchChecks
- snowball:ListServiceVersions

## [0.486.0](https://github.com/udondan/iam-floyd/compare/v0.485.0...v0.486.0) (2023-03-03)

**New actions:**

- comprehend:CreateDataset
- comprehend:CreateFlywheel
- comprehend:DeleteFlywheel
- comprehend:DescribeDataset
- comprehend:DescribeFlywheel
- comprehend:DescribeFlywheelIteration
- comprehend:ListDatasets
- comprehend:ListFlywheelIterationHistory
- comprehend:ListFlywheels
- comprehend:StartFlywheelIteration
- comprehend:UpdateFlywheel
- pricing:GetPriceListFileUrl
- pricing:ListPriceLists
- sagemaker:GetDeployments

**New resource types:**

- comprehend:flywheel
- comprehend:flywheel-dataset

**New condition keys:**

- comprehend:DataLakeKmsKey
- comprehend:FlywheelIterationId

## [0.485.0](https://github.com/udondan/iam-floyd/compare/v0.484.0...v0.485.0) (2023-03-02)

**New services:**

- codeguru-security

**New actions:**

- timestream:CreateBatchLoadTask
- timestream:DescribeBatchLoadTask
- timestream:ListBatchLoadTasks
- timestream:ResumeBatchLoadTask

## [0.484.0](https://github.com/udondan/iam-floyd/compare/v0.483.0...v0.484.0) (2023-03-01)

**New actions:**

- cases:DeleteDomain
- geo:CreateKey
- geo:DeleteKey
- geo:DescribeKey
- geo:ListKeys
- geo:UpdateKey
- tnb:ListTagsForResource

**Updated action access level:**

- dataexchange:ListDataSetRevisions: Read -> List
- dataexchange:ListDataSets: Read -> List
- dataexchange:ListEventActions: Read -> List
- dataexchange:ListJobs: Read -> List
- dataexchange:ListRevisionAssets: Read -> List
- dataexchange:ListTagsForResource: Read -> List

**New resource types:**

- dataexchange:entitled-assets
- dataexchange:entitled-data-sets
- dataexchange:entitled-revisions
- geo:api-key

## [0.483.0](https://github.com/udondan/iam-floyd/compare/v0.482.0...v0.483.0) (2023-02-25)

:warning: **Removed resource types:**

- internetmonitor:HealthEvents

**New actions:**

- ecs:DeleteTaskDefinitions

**New resource types:**

- internetmonitor:HealthEvent

## [0.482.0](https://github.com/udondan/iam-floyd/compare/v0.481.0...v0.482.0) (2023-02-24)

:warning: **Removed actions:**

- panorama:CreateApp
- panorama:CreateAppDeployment
- panorama:CreateAppVersion
- panorama:CreateDataSource
- panorama:CreateDeploymentConfiguration
- panorama:CreateInputs
- panorama:CreateModel
- panorama:CreateStreams
- panorama:DeleteApp
- panorama:DeleteAppVersion
- panorama:DeleteDataSource
- panorama:DeleteModel
- panorama:DescribeApp
- panorama:DescribeAppDeployment
- panorama:DescribeAppVersion
- panorama:DescribeDataSource
- panorama:DescribeModel
- panorama:GetDeploymentConfiguration
- panorama:GetInputs
- panorama:GetStreams
- panorama:ListAppDeploymentOperations
- panorama:ListAppVersions
- panorama:ListApps
- panorama:ListDataSources
- panorama:ListDeploymentConfigurations
- panorama:ListModels
- panorama:UpdateApp
- panorama:UpdateAppConfiguration
- panorama:UpdateDataSource

:warning: **Removed resource types:**

- panorama:app
- panorama:appVersion
- panorama:dataSource
- panorama:model

**New actions:**

- ecs:GetTaskProtection
- ecs:UpdateTaskProtection
- panorama:SignalApplicationInstanceNodeInstances
- resiliencehub:CreateAppVersionAppComponent
- resiliencehub:CreateAppVersionResource
- resiliencehub:DeleteAppInputSource
- resiliencehub:DeleteAppVersionAppComponent
- resiliencehub:DeleteAppVersionResource
- resiliencehub:DescribeAppVersion
- resiliencehub:DescribeAppVersionAppComponent
- resiliencehub:DescribeAppVersionResource
- resiliencehub:ListAppInputSources
- resiliencehub:ListAppVersionAppComponents
- resiliencehub:UpdateAppVersion
- resiliencehub:UpdateAppVersionAppComponent
- resiliencehub:UpdateAppVersionResource

## [0.481.0](https://github.com/udondan/iam-floyd/compare/v0.480.2...v0.481.0) (2023-02-23)

**New services:**

- finspace-api
- scn
- tnb

**New actions:**

- autoscaling:AttachTrafficSources
- autoscaling:DescribeTrafficSources
- autoscaling:DetachTrafficSources
- mobiletargeting:GetJourneyRunExecutionActivityMetrics
- mobiletargeting:GetJourneyRunExecutionMetrics
- mobiletargeting:GetJourneyRuns

**New condition keys:**

- autoscaling:TrafficSourceIdentifiers

## [0.480.0](https://github.com/udondan/iam-floyd/compare/v0.479.0...v0.480.0) (2023-02-19)

:warning: **Removed actions:**

- connect:ListRule

:warning: **Removed condition keys:**

- greengrass:CurrentTime
- greengrass:EpochTime
- greengrass:MultiFactorAuthAge
- greengrass:MultiFactorAuthPresent
- greengrass:SecureTransport
- greengrass:UserAgent

**New actions:**

- account:GetRegionOptStatus
- autoscaling:RollbackInstanceRefresh
- connect:ListRules
- ec2:AssociateIpamResourceDiscovery
- ec2:CreateIpamResourceDiscovery
- ec2:DeleteIpamResourceDiscovery
- ec2:DescribeIpamResourceDiscoveries
- ec2:DescribeIpamResourceDiscoveryAssociations
- ec2:DisassociateIpamResourceDiscovery
- ec2:GetIpamDiscoveredAccounts
- ec2:GetIpamDiscoveredResourceCidrs
- ec2:ModifyIpamResourceDiscovery
- ec2:PauseVolumeIO
- frauddetector:CreateList
- frauddetector:DeleteList
- frauddetector:GetListElements
- frauddetector:GetListsMetadata
- frauddetector:UpdateList
- groundstation:CreateEphemeris
- groundstation:DeleteEphemeris
- groundstation:DescribeEphemeris
- groundstation:ListEphemerides
- groundstation:UpdateEphemeris
- iotfleetwise:BatchCreateVehicle
- iotfleetwise:BatchUpdateVehicle
- iq-permission:ApprovePermissionRequest
- iq-permission:CreatePermissionRequest
- iq-permission:GetPermissionRequest
- iq-permission:ListPermissionRequests
- iq-permission:RejectPermissionRequest
- iq-permission:RevokePermissionRequest
- iq-permission:WithdrawPermissionRequest
- iq:AcceptCall
- iq:ApprovePaymentRequest
- iq:ApproveProposal
- iq:ArchiveConversation
- iq:CompleteProposal
- iq:CreateConversation
- iq:CreateExpert
- iq:CreateListing
- iq:CreateMilestoneProposal
- iq:CreatePaymentRequest
- iq:CreateRequest
- iq:CreateScheduledProposal
- iq:CreateSeller
- iq:CreateUpfrontProposal
- iq:DeclineCall
- iq:DeleteAttachment
- iq:EndCall
- iq:GetBuyer
- iq:GetCall
- iq:GetChatInfo
- iq:GetChatMessages
- iq:GetChatToken
- iq:GetCompanyProfile
- iq:GetConversation
- iq:GetExpert
- iq:GetListing
- iq:GetMarketplaceSeller
- iq:GetPaymentRequest
- iq:GetProposal
- iq:GetReview
- iq:HideRequest
- iq:InitiateCall
- iq:ListConversations
- iq:ListListings
- iq:ListPaymentRequests
- iq:ListProposals
- iq:ListRequests
- iq:ListReviews
- iq:MarkChatMessageRead
- iq:RejectPaymentRequest
- iq:RejectProposal
- iq:SendCompanyChatMessage
- iq:SendIndividualChatMessage
- iq:UnarchiveConversation
- iq:UpdateCompanyProfile
- iq:UpdateConversationMembers
- iq:UpdateExpert
- iq:UpdateListing
- iq:UpdateRequest
- iq:UploadAttachment
- iq:WithdrawPaymentRequest
- iq:WithdrawProposal
- iq:WriteReview
- managedblockchain:CreateAccessor
- managedblockchain:DeleteAccessor
- managedblockchain:GET
- managedblockchain:GetAccessor
- managedblockchain:Invoke
- managedblockchain:ListAccessors
- managedblockchain:POST
- mediatailor:ConfigureLogsForChannel
- mediatailor:UpdateProgram

**New resource types:**

- amplify:webhooks
- ec2:ipam-resource-discovery
- ec2:ipam-resource-discovery-association
- frauddetector:list
- groundstation:EphemerisItem
- iq-permission:permission
- iq:attachment
- iq:buyer
- iq:call
- iq:company
- iq:conversation
- iq:expert
- iq:listing
- iq:paymentRequest
- iq:paymentSchedule
- iq:proposal
- iq:request
- iq:seller
- iq:token
- managedblockchain:accessor

**New condition keys:**

- groundstation:EphemerisId

## [0.479.0](https://github.com/udondan/iam-floyd/compare/v0.478.0...v0.479.0) (2023-02-04)

**New services:**

- cloudtrail-data

**New actions:**

- kinesisvideo:DescribeMappedResourceConfiguration
- kinesisvideo:DescribeMediaStorageConfiguration
- kinesisvideo:JoinStorageSession
- kinesisvideo:UpdateMediaStorageConfiguration

## [0.478.0](https://github.com/udondan/iam-floyd/compare/v0.477.0...v0.478.0) (2023-02-02)

:warning: **Removed condition keys:**

- comprehendmedical:SourceArn
- comprehendmedical:SourceVpc

**New actions:**

- cloudtrail:CreateChannel
- cloudtrail:DeleteChannel
- cloudtrail:DeleteResourcePolicy
- cloudtrail:GetResourcePolicy
- cloudtrail:PutResourcePolicy
- cloudtrail:UpdateChannel
- grafana:DescribeWorkspaceConfiguration
- grafana:UpdateWorkspaceConfiguration

## [0.477.0](https://github.com/udondan/iam-floyd/compare/v0.476.0...v0.477.0) (2023-01-31)

**New actions:**

- cloudfront:CopyDistribution
- cloudfront:CreateContinuousDeploymentPolicy
- cloudfront:DeleteContinuousDeploymentPolicy
- cloudfront:GetContinuousDeploymentPolicy
- cloudfront:GetContinuousDeploymentPolicyConfig
- cloudfront:ListContinuousDeploymentPolicies
- cloudfront:UpdateContinuousDeploymentPolicy
- cloudfront:UpdateDistributionWithStagingConfig
- codeartifact:DeletePackage

**New resource types:**

- cloudfront:continuous-deployment-policy

## [0.476.0](https://github.com/udondan/iam-floyd/compare/v0.475.0...v0.476.0) (2023-01-27)

**New actions:**

- dynamodb:DescribeEndpoints
- dynamodb:UpdateGlobalTableVersion
- iot:ListRelatedResourcesForAuditFinding

**New condition keys:**

- dynamodb:TagKeys

## [0.475.0](https://github.com/udondan/iam-floyd/compare/v0.474.0...v0.475.0) (2023-01-26)

**New actions:**

- iotsitewise:ListAssetModelProperties
- iotsitewise:ListAssetProperties
- lambda:GetRuntimeManagementConfig
- lambda:PutRuntimeManagementConfig
- organizations:DeleteResourcePolicy
- organizations:DescribeResourcePolicy
- organizations:PutResourcePolicy

**New resource types:**

- organizations:resourcepolicy

## [0.474.0](https://github.com/udondan/iam-floyd/compare/v0.473.0...v0.474.0) (2023-01-25)

**New actions:**

- eks:DescribeAddonConfiguration
- glue:UpdateJobFromSourceControl
- glue:UpdateSourceControlFromJob
- personalize:CreateMetricAttribution
- personalize:DeleteMetricAttribution
- personalize:DescribeMetricAttribution
- personalize:ListMetricAttributionMetrics
- personalize:ListMetricAttributions
- personalize:UpdateMetricAttribution

**New resource types:**

- personalize:metricAttribution

## [0.473.0](https://github.com/udondan/iam-floyd/compare/v0.472.0...v0.473.0) (2023-01-24)

**New actions:**

- chime:GetSipMediaApplicationAlexaSkillConfiguration
- chime:ListAvailableVoiceConnectorRegions
- chime:PutSipMediaApplicationAlexaSkillConfiguration
- chime:ValidateE911Address

## [0.472.0](https://github.com/udondan/iam-floyd/compare/v0.471.0...v0.472.0) (2023-01-21)

**New actions:**

- aws-marketplace:ListPrivateListings
- resource-groups:GetAccountSettings
- resource-groups:UpdateAccountSettings

## [0.471.0](https://github.com/udondan/iam-floyd/compare/v0.470.0...v0.471.0) (2023-01-20)

**New actions:**

- aws-marketplace:ListEntitlementDetails
- config:GetResourceEvaluationSummary
- config:ListResourceEvaluations
- config:StartResourceEvaluation
- es:DescribeDryRunProgress
- guardduty:AcceptAdministratorInvitation
- guardduty:DisassociateFromAdministratorAccount
- guardduty:GetAdministratorAccount
- guardduty:GetRemainingFreeTrialDays
- redshift-serverless:GetTableRestoreStatus
- redshift-serverless:ListTableRestoreStatus
- redshift-serverless:RestoreTableFromSnapshot
- sqlworkbench:AssociateNotebookWithTab

**New condition keys:**

- redshift-serverless:tableRestoreRequestId

## [0.470.0](https://github.com/udondan/iam-floyd/compare/v0.469.0...v0.470.0) (2023-01-14)

:warning: **Removed actions:**

- iotroborunner:CreateAction
- iotroborunner:CreateActionTemplate
- iotroborunner:CreateActionTemplateDependency
- iotroborunner:CreateActivity
- iotroborunner:CreateActivityDependency
- iotroborunner:CreateDestinationRelationship
- iotroborunner:CreateTask
- iotroborunner:CreateTaskDependency
- iotroborunner:DeleteAction
- iotroborunner:DeleteActionTemplate
- iotroborunner:DeleteActionTemplateDependency
- iotroborunner:DeleteActivity
- iotroborunner:DeleteActivityDependency
- iotroborunner:DeleteDestinationRelationship
- iotroborunner:DeleteTask
- iotroborunner:DeleteTaskDependency
- iotroborunner:GetAction
- iotroborunner:GetActionTemplate
- iotroborunner:GetActivity
- iotroborunner:GetDestinationRelationship
- iotroborunner:GetTask
- iotroborunner:ListActionTemplates
- iotroborunner:ListActions
- iotroborunner:ListActivities
- iotroborunner:ListDestinationRelationships
- iotroborunner:ListTasks
- iotroborunner:UpdateActionState
- iotroborunner:UpdateActivity
- iotroborunner:UpdateTask

:warning: **Removed condition keys:**

- iotroborunner:ActionResourceId
- iotroborunner:ActionTemplateResourceId
- iotroborunner:ActivityResourceId
- iotroborunner:DestinationRelationshipResourceId
- iotroborunner:TaskResourceId

:warning: **Removed resource types:**

- iotroborunner:ActionResource
- iotroborunner:ActionTemplateResource
- iotroborunner:ActivityResource
- iotroborunner:DestinationRelationshipResource
- iotroborunner:TaskResource

**New services:**

- cleanrooms
- consolidatedbilling
- freetier
- invoicing
- kendra-ranking
- payments

**New actions:**

- account:CloseAccount
- account:GetAccountInformation
- account:GetChallengeQuestions
- account:PutChallengeQuestions
- appsync:EvaluateCode
- billing:GetBillingData
- billing:GetBillingDetails
- billing:GetBillingNotifications
- billing:GetBillingPreferences
- billing:GetContractInformation
- billing:GetCredits
- billing:GetIAMAccessPreference
- billing:GetSellerOfRecord
- billing:PutContractInformation
- billing:RedeemCredits
- billing:UpdateBillingPreferences
- billing:UpdateIAMAccessPreference
- cloudtrail:GetChannel
- cloudtrail:GetImport
- cloudtrail:ListChannels
- cloudtrail:ListImportFailures
- cloudtrail:ListImports
- cloudtrail:StartImport
- cloudtrail:StopImport
- cur:GetClassicReport
- cur:GetClassicReportPreferences
- cur:GetUsageReport
- cur:PutClassicReportPreferences
- cur:ValidateReportDestination
- dms:CreateFleetAdvisorCollector
- dms:DeleteFleetAdvisorCollector
- dms:DeleteFleetAdvisorDatabases
- dms:DescribeFleetAdvisorCollectors
- dms:DescribeFleetAdvisorDatabases
- dms:DescribeFleetAdvisorLsaAnalysis
- dms:DescribeFleetAdvisorSchemaObjectSummary
- dms:DescribeFleetAdvisorSchemas
- dms:ModifyFleetAdvisorCollector
- dms:ModifyFleetAdvisorCollectorStatuses
- dms:RunFleetAdvisorLsaAnalysis
- dms:UpdateSubscriptionsToEventBridge
- dms:UploadFileMetadataList
- elasticmapreduce:GetClusterSessionCredentials
- es:AuthorizeVpcEndpointAccess
- es:CreateVpcEndpoint
- es:DeleteVpcEndpoint
- es:DescribeVpcEndpoints
- es:ListVpcEndpointAccess
- es:ListVpcEndpoints
- es:ListVpcEndpointsForDomain
- es:RevokeVpcEndpointAccess
- es:UpdateVpcEndpoint
- iam:DeleteCloudFrontPublicKey
- iam:GetAccountEmailAddress
- iam:GetAccountName
- iam:GetCloudFrontPublicKey
- iam:ListCloudFrontPublicKeys
- iam:ListSTSRegionalEndpointsStatus
- iam:SetSTSRegionalEndpointStatus
- iam:UpdateAccountEmailAddress
- iam:UpdateAccountName
- iam:UpdateCloudFrontPublicKey
- iam:UploadCloudFrontPublicKey
- purchase-orders:AddPurchaseOrder
- purchase-orders:DeletePurchaseOrder
- purchase-orders:GetPurchaseOrder
- purchase-orders:ListPurchaseOrderInvoices
- purchase-orders:ListPurchaseOrders
- purchase-orders:UpdatePurchaseOrder
- purchase-orders:UpdatePurchaseOrderStatus
- sso:DescribeDirectories
- sso:DescribeTrusts
- tax:BatchPutTaxRegistration
- tax:DeleteTaxRegistration
- tax:GetTaxInheritance
- tax:GetTaxRegistrationDocument
- tax:ListTaxRegistrations
- tax:PutTaxInheritance

**New condition keys:**

- arc-zonal-shift:ResourceTag/${TagKey}
- sagemaker:FeatureGroupDisableGlueTableCreation
- sagemaker:FeatureGroupEnableOnlineStore
- sagemaker:FeatureGroupOfflineStoreConfig

## [0.469.0](https://github.com/udondan/iam-floyd/compare/v0.468.0...v0.469.0) (2022-12-31)

:warning: **Removed condition keys:**

- autoscaling:TrafficSourceIdentifiers
- iotroborunner:TaggingResourceTagKey

:warning: **Removed resource types:**

- iotroborunner:TaggingResource

**New actions:**

- connect:UpdateParticipantRoleConfig

## [0.468.0](https://github.com/udondan/iam-floyd/compare/v0.467.0...v0.468.0) (2022-12-29)

**New actions:**

- memorydb:DescribeReservedNodes
- memorydb:DescribeReservedNodesOfferings
- memorydb:PurchaseReservedNodesOffering

**New resource types:**

- memorydb:reservednode

## [0.467.0](https://github.com/udondan/iam-floyd/compare/v0.466.0...v0.467.0) (2022-12-24)

**New services:**

- codecatalyst

**New actions:**

- compute-optimizer:ExportECSServiceRecommendations
- compute-optimizer:GetECSServiceRecommendationProjectedMetrics
- compute-optimizer:GetECSServiceRecommendations
- sso:PutApplicationAssignmentConfiguration

**New condition keys:**

- rds:ManageMasterUserPassword

## [0.466.0](https://github.com/udondan/iam-floyd/compare/v0.465.0...v0.466.0) (2022-12-22)

**New services:**

- license-manager-linux-subscriptions

**New actions:**

- nimble:GetStreamingSessionBackup
- nimble:ListStreamingSessionBackups
- route53domains:AssociateDelegationSignerToDomain
- route53domains:DisassociateDelegationSignerFromDomain
- route53domains:PushDomain
- route53domains:ResendOperationAuthorization

**New resource types:**

- nimble:streaming-session-backup

## [0.465.0](https://github.com/udondan/iam-floyd/compare/v0.464.0...v0.465.0) (2022-12-21)

**New actions:**

- connect:CreateRule
- connect:DeleteRule
- connect:DescribeRule
- connect:ListRule
- connect:UpdateRule

**New resource types:**

- connect:rule

## [0.464.0](https://github.com/udondan/iam-floyd/compare/v0.463.0...v0.464.0) (2022-12-17)

**New actions:**

- backup-gateway:GetBandwidthRateLimitSchedule
- backup-gateway:GetHypervisor
- backup-gateway:GetHypervisorPropertyMappings
- backup-gateway:PutBandwidthRateLimitSchedule
- backup-gateway:PutHypervisorPropertyMappings
- backup-gateway:StartVirtualMachinesMetadataSync
- kinesisvideo:DescribeEdgeConfiguration
- kinesisvideo:StartEdgeConfigurationUpdate
- private-networks:ListTagsForResource
- private-networks:Ping
- private-networks:TagResource
- private-networks:UntagResource
- timestream:GetAwsBackupStatus
- timestream:GetAwsRestoreStatus
- timestream:StartAwsBackupJob
- timestream:StartAwsRestoreJob

**New condition keys:**

- private-networks:RequestTag/${TagKey}
- private-networks:ResourceTag/${TagKey}
- private-networks:TagKeys

## [0.463.0](https://github.com/udondan/iam-floyd/compare/v0.462.0...v0.463.0) (2022-12-15)

**New actions:**

- aws-marketplace:GetSellerDashboard
- fms:BatchAssociateResource
- fms:BatchDisassociateResource
- fms:DeleteResourceSet
- fms:GetResourceSet
- fms:ListDiscoveredResources
- fms:ListResourceSetResources
- fms:ListResourceSets
- fms:PutResourceSet
- sagemaker:CreateSharedModel
- sagemaker:DescribeSharedModel
- sagemaker:ListSharedModelEvents
- sagemaker:ListSharedModelVersions
- sagemaker:ListSharedModels
- sagemaker:SendSharedModelEvent
- sagemaker:UpdateSharedModel

**Updated action access level:**

- detective:ListDatasourcePackages: Read -> List
- detective:ListHighDegreeEntities: Read -> List
- detective:ListTagsForResource: Read -> List

**New resource types:**

- aws-marketplace:SellerDashboard
- fms:resource-set
- sagemaker:shared-model
- sagemaker:shared-model-event

**New condition keys:**

- rds:CopyOptionGroup

## [0.462.0](https://github.com/udondan/iam-floyd/compare/v0.461.0...v0.462.0) (2022-12-10)

**New actions:**

- iottwinmaker:CreateSyncJob
- iottwinmaker:DeleteSyncJob
- iottwinmaker:GetSyncJob
- iottwinmaker:ListSyncJobs
- iottwinmaker:ListSyncResources

**New resource types:**

- iottwinmaker:syncJob

## [0.461.0](https://github.com/udondan/iam-floyd/compare/v0.460.0...v0.461.0) (2022-12-07)

:warning: **Removed actions:**

- amplifyuibuilder:ExchangeCodeForToken
- amplifyuibuilder:ListTagsForResource
- amplifyuibuilder:RefreshToken
- amplifyuibuilder:TagResource
- amplifyuibuilder:UntagResource

:warning: **Removed condition keys:**

- amplifyuibuilder:AppId
- amplifyuibuilder:ComponentsId
- amplifyuibuilder:EnvironmentName
- amplifyuibuilder:ThemesId

**New services:**

- codewhisperer

**New actions:**

- amplifyuibuilder:CreateForm
- amplifyuibuilder:DeleteForm
- amplifyuibuilder:ExportForms
- amplifyuibuilder:GetForm
- amplifyuibuilder:GetMetadata
- amplifyuibuilder:ListForms
- amplifyuibuilder:PutMetadataFlag
- amplifyuibuilder:ResetMetadataFlag
- amplifyuibuilder:UpdateForm
- ce:ListSavingsPlansPurchaseRecommendationGeneration
- ce:StartSavingsPlansPurchaseRecommendationGeneration
- ec2:AttachVerifiedAccessTrustProvider
- ec2:CreateVerifiedAccessEndpoint
- ec2:CreateVerifiedAccessGroup
- ec2:CreateVerifiedAccessInstance
- ec2:CreateVerifiedAccessTrustProvider
- ec2:DeleteVerifiedAccessEndpoint
- ec2:DeleteVerifiedAccessGroup
- ec2:DeleteVerifiedAccessInstance
- ec2:DeleteVerifiedAccessTrustProvider
- ec2:DescribeAwsNetworkPerformanceMetricSubscriptions
- ec2:DescribeVerifiedAccessEndpoints
- ec2:DescribeVerifiedAccessGroups
- ec2:DescribeVerifiedAccessInstanceLoggingConfigurations
- ec2:DescribeVerifiedAccessInstances
- ec2:DescribeVerifiedAccessTrustProviders
- ec2:DetachVerifiedAccessTrustProvider
- ec2:DisableAwsNetworkPerformanceMetricSubscription
- ec2:EnableAwsNetworkPerformanceMetricSubscription
- ec2:EnableReachabilityAnalyzerOrganizationSharing
- ec2:GetAwsNetworkPerformanceData
- ec2:GetVerifiedAccessEndpointPolicy
- ec2:GetVerifiedAccessGroupPolicy
- ec2:ModifyVerifiedAccessEndpoint
- ec2:ModifyVerifiedAccessEndpointPolicy
- ec2:ModifyVerifiedAccessGroup
- ec2:ModifyVerifiedAccessGroupPolicy
- ec2:ModifyVerifiedAccessInstance
- ec2:ModifyVerifiedAccessInstanceLoggingConfiguration
- ec2:ModifyVerifiedAccessTrustProvider
- workspaces:CreateStandbyWorkspaces
- workspaces:ModifyCertificateBasedAuthProperties

**New resource types:**

- amplifyuibuilder:FormResource
- ec2:verified-access-endpoint
- ec2:verified-access-group
- ec2:verified-access-instance
- ec2:verified-access-policy
- ec2:verified-access-trust-provider

**New condition keys:**

- amplifyuibuilder:ComponentResourceAppId
- amplifyuibuilder:ComponentResourceEnvironmentName
- amplifyuibuilder:ComponentResourceId
- amplifyuibuilder:FormResourceAppId
- amplifyuibuilder:FormResourceEnvironmentName
- amplifyuibuilder:FormResourceId
- amplifyuibuilder:ThemeResourceAppId
- amplifyuibuilder:ThemeResourceEnvironmentName
- amplifyuibuilder:ThemeResourceId
- ec2:DomainCertificateArn
- ec2:LoadBalancerArn

## [0.460.0](https://github.com/udondan/iam-floyd/compare/v0.459.0...v0.460.0) (2022-12-06)

:warning: **Removed actions:**

- drs:CreateSessionForDrs

**New actions:**

- ecs:ListServicesByNamespace
- lex:BatchCreateCustomVocabularyItem
- lex:BatchDeleteCustomVocabularyItem
- lex:BatchUpdateCustomVocabularyItem
- lex:ListCustomVocabularyItems
- states:DescribeMapRun
- states:ListMapRuns
- states:UpdateMapRun
- textract:GetLendingAnalysis
- textract:GetLendingAnalysisSummary
- textract:StartLendingAnalysis

**Updated action access level:**

- omics:ListReadSetActivationJobs: Read -> List
- omics:ListReadSetExportJobs: Read -> List
- omics:ListReadSetImportJobs: Read -> List
- omics:ListReferenceImportJobs: Read -> List

**New resource types:**

- states:express
- states:maprun

**New condition keys:**

- ecs:enable-service-connect
- ecs:namespace

## [0.459.0](https://github.com/udondan/iam-floyd/compare/v0.458.0...v0.459.0) (2022-12-03)

**New services:**

- aoss
- arc-zonal-shift
- docdb-elastic
- internetmonitor
- oam
- omics
- pipes
- sagemaker-geospatial
- securitylake
- simspaceweaver
- vpc-lattice
- vpc-lattice-svcs
- wickr

**New actions:**

- artifact:GetReport
- artifact:GetReportMetadata
- artifact:GetTermForReport
- artifact:ListReports
- athena:CreateNotebook
- athena:CreatePresignedNotebookUrl
- athena:DeleteNotebook
- athena:ExportNotebook
- athena:GetCalculationExecution
- athena:GetCalculationExecutionCode
- athena:GetCalculationExecutionStatus
- athena:GetNotebookMetadata
- athena:GetSession
- athena:GetSessionStatus
- athena:ImportNotebook
- athena:ListApplicationDPUSizes
- athena:ListCalculationExecutions
- athena:ListExecutors
- athena:ListNotebookMetadata
- athena:ListNotebookSessions
- athena:ListSessions
- athena:StartCalculationExecution
- athena:StartSession
- athena:StopCalculationExecution
- athena:TerminateSession
- athena:UpdateNotebook
- athena:UpdateNotebookMetadata
- backup:CancelLegalHold
- backup:CreateLegalHold
- backup:DisassociateRecoveryPointFromParent
- backup:GetLegalHold
- backup:ListLegalHolds
- backup:ListRecoveryPointsByLegalHold
- cloudwatch:Link
- dms:AssociateExtensionPack
- dms:CancelMetadataModelAssessment
- dms:CancelMetadataModelConversion
- dms:CancelMetadataModelExport
- dms:CreateDataProvider
- dms:CreateInstanceProfile
- dms:CreateMigrationProject
- dms:DeleteDataProvider
- dms:DeleteInstanceProfile
- dms:DeleteMigrationProject
- dms:DisassociateExtensionPack
- dms:ExportMetadataModelAssessment
- dms:GetMetadataModel
- dms:ListDataProviders
- dms:ListExtensionPacks
- dms:ListInstanceProfiles
- dms:ListMetadataModelAssessmentActionItems
- dms:ListMetadataModelAssessments
- dms:ListMetadataModelConversions
- dms:ListMetadataModelExports
- dms:ListMigrationProjects
- dms:StartMetadataModelAssessment
- dms:StartMetadataModelConversion
- dms:StartMetadataModelExportAsScripts
- dms:StartMetadataModelExportToTarget
- dms:StartMetadataModelImport
- dms:UpdateConversionConfiguration
- dms:UpdateDataProvider
- dms:UpdateInstanceProfile
- dms:UpdateMigrationProject
- drs:ReverseReplication
- drs:StartReplication
- drs:StopReplication
- gamelift:CreateLocation
- gamelift:DeleteLocation
- gamelift:DeregisterCompute
- gamelift:DescribeCompute
- gamelift:GetComputeAccess
- gamelift:GetComputeAuthToken
- gamelift:ListCompute
- gamelift:ListLocations
- gamelift:RegisterCompute
- glue:CancelDataQualityRuleRecommendationRun
- glue:CancelDataQualityRulesetEvaluationRun
- glue:CreateDataQualityRuleset
- glue:DeleteDataQualityRuleset
- glue:DeregisterDataPreview
- glue:GetDataQualityResult
- glue:GetDataQualityRuleRecommendationRun
- glue:GetDataQualityRuleset
- glue:GetDataQualityRulesetEvaluationRun
- glue:GetNotebookInstanceStatus
- glue:GlueNotebookAuthorize
- glue:GlueNotebookRefreshCredentials
- glue:ListDataQualityResults
- glue:ListDataQualityRuleRecommendationRuns
- glue:ListDataQualityRulesetEvaluationRuns
- glue:ListDataQualityRulesets
- glue:PublishDataQuality
- glue:StartDataQualityRuleRecommendationRun
- glue:StartDataQualityRulesetEvaluationRun
- glue:StartNotebook
- glue:TerminateNotebook
- glue:UpdateDataQualityRuleset
- iotwireless:GetPositionEstimate
- iotwireless:GetResourcePosition
- iotwireless:UpdateResourcePosition
- license-manager-user-subscriptions:UpdateIdentityProviderSettings
- logs:DeleteDataProtectionPolicy
- logs:GetDataProtectionPolicy
- logs:Link
- logs:PutDataProtectionPolicy
- logs:Unmask
- macie2:GetAutomatedDiscoveryConfiguration
- macie2:GetClassificationScope
- macie2:GetResourceProfile
- macie2:GetSensitivityInspectionTemplate
- macie2:ListClassificationScopes
- macie2:ListResourceProfileArtifacts
- macie2:ListResourceProfileDetections
- macie2:ListSensitivityInspectionTemplates
- macie2:UpdateAutomatedDiscoveryConfiguration
- macie2:UpdateClassificationScope
- macie2:UpdateResourceProfile
- macie2:UpdateResourceProfileDetections
- macie2:UpdateSensitivityInspectionTemplate
- mgn:ArchiveApplication
- mgn:ArchiveWave
- mgn:AssociateApplications
- mgn:AssociateSourceServers
- mgn:CreateApplication
- mgn:CreateWave
- mgn:DeleteApplication
- mgn:DeleteWave
- mgn:DisassociateApplications
- mgn:DisassociateSourceServers
- mgn:ListApplications
- mgn:ListSourceServerActions
- mgn:ListTemplateActions
- mgn:ListWaves
- mgn:PutSourceServerAction
- mgn:PutTemplateAction
- mgn:RemoveSourceServerAction
- mgn:RemoveTemplateAction
- mgn:UnarchiveApplication
- mgn:UnarchiveWave
- mgn:UpdateApplication
- mgn:UpdateWave
- rbin:LockRule
- rbin:UnlockRule
- rds:CreateBlueGreenDeployment
- rds:DeleteBlueGreenDeployment
- rds:DescribeBlueGreenDeployments
- rds:SwitchoverBlueGreenDeployment
- s3:GetMultiRegionAccessPointRoutes
- s3:SubmitMultiRegionAccessPointRoutes
- sagemaker:CreateHub
- sagemaker:CreateInferenceExperiment
- sagemaker:CreateModelCard
- sagemaker:CreateModelCardExportJob
- sagemaker:CreateSpace
- sagemaker:DeleteHub
- sagemaker:DeleteHubContent
- sagemaker:DeleteInferenceExperiment
- sagemaker:DeleteModelCard
- sagemaker:DeleteSpace
- sagemaker:DescribeHub
- sagemaker:DescribeHubContent
- sagemaker:DescribeInferenceExperiment
- sagemaker:DescribeModelCard
- sagemaker:DescribeModelCardExportJob
- sagemaker:DescribeSpace
- sagemaker:ImportHubContent
- sagemaker:ListHubContentVersions
- sagemaker:ListHubContents
- sagemaker:ListHubs
- sagemaker:ListInferenceExperiments
- sagemaker:ListModelCardExportJobs
- sagemaker:ListModelCardVersions
- sagemaker:ListModelCards
- sagemaker:ListMonitoringAlertHistory
- sagemaker:ListMonitoringAlerts
- sagemaker:ListSpaces
- sagemaker:StartInferenceExperiment
- sagemaker:StopInferenceExperiment
- sagemaker:UpdateHub
- sagemaker:UpdateInferenceExperiment
- sagemaker:UpdateModelCard
- sagemaker:UpdateMonitoringAlert
- sagemaker:UpdateSpace
- transcribe:StartCallAnalyticsStreamTranscription
- transcribe:StartCallAnalyticsStreamTranscriptionWebSocket
- vendor-insights:ListTagsForResource
- vendor-insights:TagResource
- vendor-insights:UntagResource
- vendor-insights:UpdateSecurityProfileSnapshotCreationConfiguration
- vendor-insights:UpdateSecurityProfileSnapshotReleaseConfiguration
- xray:Link

**New resource types:**

- artifact:report
- backup:legalHold
- dms:DataProvider
- dms:InstanceProfile
- dms:MigrationProject
- gamelift:location
- glue:dataQualityRuleset
- mgn:ApplicationResource
- mgn:WaveResource
- rds:deployment
- sagemaker:hub
- sagemaker:hub-content
- sagemaker:inference-experiment
- sagemaker:model-card
- sagemaker:model-card-export-job
- sagemaker:monitoring-schedule-alert
- sagemaker:space

**New condition keys:**

- backup:ChangeableForDays
- dms:dp-tag/${TagKey}
- dms:ip-tag/${TagKey}
- dms:mp-tag/${TagKey}
- vendor-insights:RequestTag/${TagKey}
- vendor-insights:ResourceTag/${TagKey}
- vendor-insights:TagKeys

## [0.458.0](https://github.com/udondan/iam-floyd/compare/v0.457.0...v0.458.0) (2022-11-22)

**New actions:**

- appflow:UpdateConnectorRegistration
- connect:MonitorContact
- quicksight:DeleteAccountSubscription
- quicksight:SearchDataSets
- quicksight:SearchDataSources

**New resource types:**

- quicksight:topic

**New condition keys:**

- connect:MonitorCapabilities

## [0.457.0](https://github.com/udondan/iam-floyd/compare/v0.456.0...v0.457.0) (2022-11-19)

**New actions:**

- connect:DescribeForecastingPlanningSchedulingIntegration
- connect:DismissUserContact
- connect:StartForecastingPlanningSchedulingIntegration
- connect:StopForecastingPlanningSchedulingIntegration
- elasticache:Connect
- iottwinmaker:ExecuteQuery
- iottwinmaker:GetPricingPlan
- iottwinmaker:UpdatePricingPlan
- ivschat:CreateLoggingConfiguration
- ivschat:DeleteLoggingConfiguration
- ivschat:GetLoggingConfiguration
- ivschat:ListLoggingConfigurations
- ivschat:UpdateLoggingConfiguration
- logs:ListTagsForResource
- logs:TagResource
- logs:UntagResource
- proton:GetResourceTemplateVersionStatusCounts
- proton:GetResourcesSummary
- servicecatalog:GetConfiguration
- servicecatalog:PutConfiguration
- workdocs:DeleteDocumentVersion
- workdocs:RestoreDocumentVersions

**New resource types:**

- ivschat:Logging-Configuration

**New condition keys:**

- elasticache:UserAuthenticationMode
- logs:RequestTag/${TagKey}
- logs:TagKeys
- servicecatalog:Resource
- servicecatalog:ResourceType
- sqs:RequestTag/${TagKey}
- sqs:ResourceTag/${TagKey}
- sqs:TagKeys

## [0.456.0](https://github.com/udondan/iam-floyd/compare/v0.455.0...v0.456.0) (2022-11-17)

**New services:**

- ssm-sap

**New actions:**

- xray:DeleteResourcePolicy
- xray:ListResourcePolicies
- xray:PutResourcePolicy

## [0.455.0](https://github.com/udondan/iam-floyd/compare/v0.454.0...v0.455.0) (2022-11-16)

**New actions:**

- aws-marketplace:ListTagsForResource
- aws-marketplace:TagResource
- aws-marketplace:UntagResource
- ec2:AcceptAddressTransfer
- ec2:CancelImageLaunchPermission
- ec2:DescribeAddressTransfers
- ec2:DisableAddressTransfer
- ec2:EnableAddressTransfer
- tax:GetTaxInterview
- tax:GetTaxRegistration
- tax:PutTaxInterview
- tax:PutTaxRegistration

**New condition keys:**

- aws-marketplace:RequestTag/${TagKey}
- aws-marketplace:ResourceTag/${TagKey}
- aws-marketplace:TagKeys

## [0.454.0](https://github.com/udondan/iam-floyd/compare/v0.453.0...v0.454.0) (2022-11-15)

:warning: **Removed actions:**

- detective:ListOrganizationAdminAccounts

**New actions:**

- detective:ListHighDegreeEntities
- detective:ListOrganizationAdminAccount
- license-manager:ListReceivedGrantsForOrganization
- license-manager:ListReceivedLicensesForOrganization
- xray:BatchGetTraceSummaryById
- xray:GetDistinctTraceGraphs

## [0.453.0](https://github.com/udondan/iam-floyd/compare/v0.452.0...v0.453.0) (2022-11-12)

**New services:**

- scheduler

**New actions:**

- backup-storage:CommitBackupJob
- backup-storage:DeleteObjects
- backup-storage:DescribeBackupJob
- backup-storage:GetBaseBackup
- backup-storage:GetChunk
- backup-storage:GetIncrementalBaseBackup
- backup-storage:GetObjectMetadata
- backup-storage:ListChunks
- backup-storage:ListObjects
- backup-storage:NotifyObjectComplete
- backup-storage:PutChunk
- backup-storage:PutObject
- backup-storage:StartObject
- backup-storage:UpdateObjectComplete
- config:GetCustomRulePolicy
- config:GetOrganizationCustomRulePolicy
- config:ListConformancePackComplianceScores
- geo:GetPlace

**Updated action access level:**

- datapipeline:DescribePipelines: List -> Read

**New resource types:**

- datapipeline:pipeline

**New condition keys:**

- datapipeline:ResourceTag/${TagKey}
- geo:DeviceIds
- geo:GeofenceIds

## [0.452.0](https://github.com/udondan/iam-floyd/compare/v0.451.0...v0.452.0) (2022-11-10)

:warning: **Removed resource types:**

- codeguru-reviewer:connection
- codeguru-reviewer:repository

**New services:**

- resource-explorer-2

**New actions:**

- billingconductor:ListCustomLineItemVersions

**New condition keys:**

- autoscaling:TrafficSourceIdentifiers

## [0.451.0](https://github.com/udondan/iam-floyd/compare/v0.450.0...v0.451.0) (2022-11-09)

**New actions:**

- cloudtrail:DeregisterOrganizationDelegatedAdmin
- cloudtrail:RegisterOrganizationDelegatedAdmin
- elemental-appliances-software:CompleteUpload
- elemental-appliances-software:CreateOrderV1
- elemental-appliances-software:GetAvsCorrectAddress
- elemental-appliances-software:GetBillingAddresses
- elemental-appliances-software:GetDeliveryAddressesV2
- elemental-appliances-software:GetOrder
- elemental-appliances-software:GetOrdersV2
- elemental-appliances-software:GetTaxes
- elemental-appliances-software:StartUpload
- elemental-appliances-software:SubmitOrderV1
- wellarchitected:ListCheckDetails
- wellarchitected:ListCheckSummaries

## [0.450.0](https://github.com/udondan/iam-floyd/compare/v0.449.0...v0.450.0) (2022-11-08)

:warning: **Removed services:**

- iotthingsgraph
- macie

**New actions:**

- emr-containers:CreateJobTemplate
- emr-containers:DeleteJobTemplate
- emr-containers:DescribeJobTemplate
- emr-containers:ListJobTemplates

**New resource types:**

- emr-containers:jobTemplate

**New condition keys:**

- emr-containers:JobTemplateArn

## [0.449.0](https://github.com/udondan/iam-floyd/compare/v0.448.0...v0.449.0) (2022-11-05)

:warning: **Removed actions:**

- iotthingsgraph:AssociateEntityToThing
- iotthingsgraph:CreateFlowTemplate
- iotthingsgraph:CreateSystemInstance
- iotthingsgraph:CreateSystemTemplate
- iotthingsgraph:DeleteFlowTemplate
- iotthingsgraph:DeleteNamespace
- iotthingsgraph:DeleteSystemInstance
- iotthingsgraph:DeleteSystemTemplate
- iotthingsgraph:DeploySystemInstance
- iotthingsgraph:DeprecateFlowTemplate
- iotthingsgraph:DeprecateSystemTemplate
- iotthingsgraph:DescribeNamespace
- iotthingsgraph:DissociateEntityFromThing
- iotthingsgraph:GetEntities
- iotthingsgraph:GetFlowTemplate
- iotthingsgraph:GetFlowTemplateRevisions
- iotthingsgraph:GetNamespaceDeletionStatus
- iotthingsgraph:GetSystemInstance
- iotthingsgraph:GetSystemTemplate
- iotthingsgraph:GetSystemTemplateRevisions
- iotthingsgraph:GetUploadStatus
- iotthingsgraph:ListFlowExecutionMessages
- iotthingsgraph:ListTagsForResource
- iotthingsgraph:SearchEntities
- iotthingsgraph:SearchFlowExecutions
- iotthingsgraph:SearchFlowTemplates
- iotthingsgraph:SearchSystemInstances
- iotthingsgraph:SearchSystemTemplates
- iotthingsgraph:SearchThings
- iotthingsgraph:TagResource
- iotthingsgraph:UndeploySystemInstance
- iotthingsgraph:UntagResource
- iotthingsgraph:UpdateFlowTemplate
- iotthingsgraph:UpdateSystemTemplate
- iotthingsgraph:UploadEntityDefinitions

:warning: **Removed condition keys:**

- iotthingsgraph:RequestTag/${TagKey}
- iotthingsgraph:ResourceTag/${TagKey}
- iotthingsgraph:TagKeys

:warning: **Removed resource types:**

- iotthingsgraph:System
- iotthingsgraph:SystemInstance
- iotthingsgraph:Workflow

**New actions:**

- apprunner:CreateVpcIngressConnection
- apprunner:DeleteVpcIngressConnection
- apprunner:DescribeVpcIngressConnection
- apprunner:ListVpcIngressConnections
- apprunner:UpdateVpcIngressConnection
- kafka:UpdateStorage
- qldb:PartiQLRedact
- redshift:GetClusterCredentialsWithIAM
- ses:BatchGetMetricData
- ses:ListRecommendations
- ses:PutAccountVdmAttributes
- ses:PutConfigurationSetVdmOptions
- supportapp:DescribeSlackChannels
- supportapp:GetSlackOauthParameters
- supportapp:RedeemSlackOauthCode

**New resource types:**

- apprunner:vpcingressconnection
- redshift-data:workgroup

**New condition keys:**

- apprunner:ServiceArn
- apprunner:VpcEndpointId
- apprunner:VpcId

## [0.448.0](https://github.com/udondan/iam-floyd/compare/v0.447.0...v0.448.0) (2022-10-28)

**New services:**

- a2c

**New actions:**

- rum:BatchCreateRumMetricDefinitions
- rum:BatchDeleteRumMetricDefinitions
- rum:BatchGetRumMetricDefinitions
- rum:DeleteRumMetricsDestination
- rum:ListRumMetricsDestinations
- rum:PutRumMetricsDestination
- rum:UpdateRumMetricDefinition
- sagemaker-groundtruth-synthetic:GetAccountDetails

## [0.447.0](https://github.com/udondan/iam-floyd/compare/v0.446.0...v0.447.0) (2022-10-26)

:warning: **Removed actions:**

- tiros:GetExtensionAccounts

**New actions:**

- sagemaker:ListInferenceRecommendationsJobSteps
- tiros:GetQueryExtensionAccounts

**New condition keys:**

- batch:EKSImage
- batch:EKSPrivileged
- batch:EKSRunAsGroup
- batch:EKSRunAsUser
- batch:EKSServiceAccountName

## [0.446.0](https://github.com/udondan/iam-floyd/compare/v0.445.0...v0.446.0) (2022-10-25)

**New services:**

- identitystore-auth

**New actions:**

- globalaccelerator:AddEndpoints
- globalaccelerator:RemoveEndpoints

**New resource types:**

- outposts:outpost
- outposts:site

## [0.445.0](https://github.com/udondan/iam-floyd/compare/v0.444.0...v0.445.0) (2022-10-21)

**New services:**

- supportapp

**New actions:**

- connect:CreateTrafficDistributionGroup
- connect:DeleteTrafficDistributionGroup
- connect:DescribeTrafficDistributionGroup
- connect:GetTrafficDistribution
- connect:ListTrafficDistributionGroups
- connect:ReplicateInstance
- connect:UpdateTrafficDistribution
- ds:DescribeUpdateDirectory
- ds:UpdateDirectorySetup
- glue:ListCrawls
- glue:UseGlueStudio
- ses:GetDedicatedIpPool

**Updated action access level:**

- connect:DescribePhoneNumber: List -> Read

**New resource types:**

- connect:traffic-distribution-group

## [0.444.0](https://github.com/udondan/iam-floyd/compare/v0.443.0...v0.444.0) (2022-10-19)

**New actions:**

- cloudfront:CreateOriginAccessControl
- cloudfront:CreateSavingsPlan
- cloudfront:DeleteOriginAccessControl
- cloudfront:GetOriginAccessControl
- cloudfront:GetOriginAccessControlConfig
- cloudfront:GetSavingsPlan
- cloudfront:ListOriginAccessControls
- cloudfront:ListRateCards
- cloudfront:ListSavingsPlans
- cloudfront:ListUsages
- cloudfront:UpdateOriginAccessControl
- cloudfront:UpdateSavingsPlan
- workdocs:AddNotificationPermissions
- workdocs:DeleteNotificationPermissions
- workdocs:DescribeNotificationPermissions
- workmail:AssumeImpersonationRole
- workmail:CreateImpersonationRole
- workmail:DeleteImpersonationRole
- workmail:GetImpersonationRole
- workmail:GetImpersonationRoleEffect
- workmail:ListImpersonationRoles
- workmail:UpdateImpersonationRole
- workspaces-web:AssociateUserAccessLoggingSettings
- workspaces-web:CreateUserAccessLoggingSettings
- workspaces-web:DeleteUserAccessLoggingSettings
- workspaces-web:DisassociateUserAccessLoggingSettings
- workspaces-web:GetUserAccessLoggingSettings
- workspaces-web:ListUserAccessLoggingSettings
- workspaces-web:UpdateUserAccessLoggingSettings

**New resource types:**

- cloudfront:origin-access-control
- workspaces-web:userAccessLoggingSettings

## [0.443.0](https://github.com/udondan/iam-floyd/compare/v0.442.0...v0.443.0) (2022-10-18)

:warning: **Removed resource types:**

- cloudfront:field-level-encryption

**New actions:**

- lookoutequipment:ListInferenceEvents

**New resource types:**

- cloudfront:field-level-encryption-config

## [0.442.0](https://github.com/udondan/iam-floyd/compare/v0.441.0...v0.442.0) (2022-10-15)

**New actions:**

- translate:ListTagsForResource
- translate:TagResource
- translate:UntagResource

**Updated action access level:**

- sns:SetTopicAttributes: Write -> Permissions management

**New condition keys:**

- translate:RequestTag/${TagKey}
- translate:ResourceTag/${TagKey}
- translate:TagKeys

## [0.441.0](https://github.com/udondan/iam-floyd/compare/v0.440.0...v0.441.0) (2022-10-08)

:warning: **Removed condition keys:**

- ec2:ResourceTag/

**New actions:**

- backup-gateway:GetVirtualMachine
- ec2:CreateCoipCidr
- ec2:CreateCoipPool
- ec2:CreateLocalGatewayRouteTable
- ec2:CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation
- ec2:DeleteCoipCidr
- ec2:DeleteCoipPool
- ec2:DeleteLocalGatewayRouteTable
- ec2:DeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation

**New resource types:**

- ec2:coip-pool
- ec2:vpc-endpoint-connection
- ec2:vpc-endpoint-service-permission

## [0.440.0](https://github.com/udondan/iam-floyd/compare/v0.439.0...v0.440.0) (2022-10-06)

**New actions:**

- tiros:GetExtensionAccounts

## [0.439.0](https://github.com/udondan/iam-floyd/compare/v0.438.0...v0.439.0) (2022-10-05)


## [0.438.0](https://github.com/udondan/iam-floyd/compare/v0.437.0...v0.438.0) (2022-10-04)

**New actions:**

- cases:ListDomains
- cases:ListLayouts
- emr-serverless:GetDashboardForJobRun
- fsx:CreateFileCache
- fsx:DeleteFileCache
- fsx:DescribeFileCaches
- fsx:UpdateFileCache
- workmail:CreateAvailabilityConfiguration
- workmail:DeleteAvailabilityConfiguration
- workmail:ListAvailabilityConfigurations
- workmail:TestAvailabilityConfiguration
- workmail:UpdateAvailabilityConfiguration

**New resource types:**

- fsx:file-cache

**New condition keys:**

- fsx:NfsDataRepositoryAuthenticationEnabled
- fsx:NfsDataRepositoryEncryptionInTransitEnabled
- sagemaker:KeepAlivePeriod

## [0.437.0](https://github.com/udondan/iam-floyd/compare/v0.436.0...v0.437.0) (2022-09-30)

:warning: **Removed condition keys:**

- sts:FederatedProvider
- sts:PrincipalTag/${TagKey}

**New services:**

- supportplans

**New actions:**

- ec2:ModifyLocalGatewayRoute
- inspector2:GetConfiguration
- inspector2:UpdateConfiguration

**Updated action access level:**

- ec2:DescribeElasticGpus: Read -> List
- ec2:DescribeFastLaunchImages: Read -> List
- ec2:DescribeFastSnapshotRestores: Read -> List
- ec2:DescribeScheduledInstanceAvailability: Read -> List
- ec2:DescribeScheduledInstances: Read -> List
- ec2:DescribeTags: Read -> List
- ec2:DescribeTransitGatewayPolicyTables: Write -> List
- ec2:DescribeTransitGatewayRouteTableAnnouncements: Write -> List
- ec2:DescribeVolumesModifications: Read -> List
- ec2:DescribeVpnConnections: Read -> List
- ec2:GetInstanceTypesFromInstanceRequirements: Read -> List
- ec2:GetIpamPoolAllocations: Read -> List

## [0.436.0](https://github.com/udondan/iam-floyd/compare/v0.435.0...v0.436.0) (2022-09-28)

**New actions:**

- lightsail:UpdateInstanceMetadataOptions
- migrationhub-strategy:GetLatestAssessmentId
- migrationhub-strategy:UpdateCollectorConfiguration

## [0.435.0](https://github.com/udondan/iam-floyd/compare/v0.434.0...v0.435.0) (2022-09-24)

:warning: **Removed actions:**

- iotfleetwise:AssociateVehicle
- iotfleetwise:DisassociateVehicle

**New actions:**

- iotfleetwise:AssociateVehicleFleet
- iotfleetwise:DisassociateVehicleFleet
- iotfleetwise:GetLoggingOptions
- iotfleetwise:ListTagsForResource
- iotfleetwise:PutLoggingOptions
- iotfleetwise:TagResource
- iotfleetwise:UntagResource

**New condition keys:**

- iotfleetwise:RequestTag/${TagKey}
- iotfleetwise:ResourceTag/${TagKey}
- iotfleetwise:TagKeys

## [0.434.0](https://github.com/udondan/iam-floyd/compare/v0.433.0...v0.434.0) (2022-09-23)

**New actions:**

- comprehend:BatchDetectTargetedSentiment
- comprehend:DetectTargetedSentiment

**New condition keys:**

- route53:ChangeResourceRecordSetsActions
- route53:ChangeResourceRecordSetsNormalizedRecordNames
- route53:ChangeResourceRecordSetsRecordTypes

## [0.433.0](https://github.com/udondan/iam-floyd/compare/v0.432.0...v0.433.0) (2022-09-22)

**New actions:**

- neptune-db:connect

## [0.432.0](https://github.com/udondan/iam-floyd/compare/v0.431.0...v0.432.0) (2022-09-21)

**New actions:**

- dms:DescribePendingMaintenanceActions

## [0.431.0](https://github.com/udondan/iam-floyd/compare/v0.430.0...v0.431.0) (2022-09-20)

**New actions:**

- sagemaker:CreateEdgeDeploymentPlan
- sagemaker:CreateEdgeDeploymentStage
- sagemaker:DeleteEdgeDeploymentPlan
- sagemaker:DeleteEdgeDeploymentStage
- sagemaker:DescribeEdgeDeploymentPlan
- sagemaker:ListEdgeDeploymentPlans
- sagemaker:ListStageDevices
- sagemaker:StartEdgeDeploymentStage
- sagemaker:StopEdgeDeploymentStage

**New resource types:**

- sagemaker:edge-deployment-plan

**New condition keys:**

- sagemaker:CustomerMetadataProperties/${MetadataKey}
- sagemaker:CustomerMetadataPropertiesToRemove

## [0.430.0](https://github.com/udondan/iam-floyd/compare/v0.429.0...v0.430.0) (2022-09-16)

**New actions:**

- evidently:CreateSegment
- evidently:DeleteSegment
- evidently:GetSegment
- evidently:ListSegmentReferences
- evidently:ListSegments
- evidently:TestSegmentPattern

**New resource types:**

- evidently:Segment

## [0.429.0](https://github.com/udondan/iam-floyd/compare/v0.428.0...v0.429.0) (2022-09-15)

**New actions:**

- lookoutequipment:CreateLabel
- lookoutequipment:CreateLabelGroup
- lookoutequipment:DeleteLabel
- lookoutequipment:DeleteLabelGroup
- lookoutequipment:DescribeLabelGroup
- lookoutequipment:Describelabel
- lookoutequipment:ListLabelGroups
- lookoutequipment:ListLabels
- lookoutequipment:UpdateLabelGroup

**New resource types:**

- lookoutequipment:label-group

## [0.428.0](https://github.com/udondan/iam-floyd/compare/v0.427.0...v0.428.0) (2022-09-14)

**New actions:**

- cloudtrail:CreateServiceLinkedChannel
- cloudtrail:DeleteServiceLinkedChannel
- cloudtrail:GetServiceLinkedChannel
- cloudtrail:ListServiceLinkedChannels
- cloudtrail:UpdateServiceLinkedChannel

**New resource types:**

- cloudtrail:channel

## [0.427.0](https://github.com/udondan/iam-floyd/compare/v0.426.0...v0.427.0) (2022-09-10)

**New actions:**

- chime:CreateMediaConcatenationPipeline
- chime:CreateMediaLiveConnectorPipeline
- chime:DeleteMediaPipeline
- chime:GetMediaPipeline
- chime:ListMediaPipelines
- chime:ListSubChannels
- sns:GetDataProtectionPolicy
- sns:PutDataProtectionPolicy
- transfer:DeleteHostKey
- transfer:DescribeHostKey
- transfer:ImportHostKey
- transfer:ListHostKeys
- transfer:StartFileTransfer
- transfer:UpdateHostKey

**New resource types:**

- transfer:host-key

## [0.426.0](https://github.com/udondan/iam-floyd/compare/v0.425.0...v0.426.0) (2022-09-09)

**New actions:**

- sagemaker-groundtruth-synthetic:ListBatchDataTransfers
- sagemaker-groundtruth-synthetic:ListProjectDataTransfers
- sagemaker-groundtruth-synthetic:StartBatchDataTransfer
- sagemaker-groundtruth-synthetic:StartProjectDataTransfer
- tiros:ExtendQuery

## [0.425.0](https://github.com/udondan/iam-floyd/compare/v0.424.0...v0.425.0) (2022-09-08)

**New services:**

- billing

## [0.424.0](https://github.com/udondan/iam-floyd/compare/v0.421.0...v0.424.0) (2022-09-07)

:warning: **Removed resource types:**

- events:rule

**New actions:**

- connect:SearchQueues
- connect:SearchRoutingProfiles
- controltower:DisableControl
- controltower:EnableControl
- controltower:GetControlOperation
- controltower:ListEnabledControls
- forecast:CreateForecastEndpoint
- forecast:CreateWhatIfAnalysis
- forecast:CreateWhatIfForecast
- forecast:CreateWhatIfForecastExport
- forecast:DeleteForecastEndpoint
- forecast:DeleteWhatIfAnalysis
- forecast:DeleteWhatIfForecast
- forecast:DeleteWhatIfForecastExport
- forecast:DescribeForecastEndpoint
- forecast:DescribeWhatIfAnalysis
- forecast:DescribeWhatIfForecast
- forecast:DescribeWhatIfForecastExport
- forecast:GetRecentForecastContext
- forecast:InvokeForecastEndpoint
- forecast:ListWhatIfAnalyses
- forecast:ListWhatIfForecastExports
- forecast:ListWhatIfForecasts
- forecast:QueryWhatIfForecast
- identitystore:CreateGroup
- identitystore:CreateGroupMembership
- identitystore:CreateUser
- identitystore:DeleteGroup
- identitystore:DeleteGroupMembership
- identitystore:DeleteUser
- identitystore:DescribeGroupMembership
- identitystore:GetGroupId
- identitystore:GetGroupMembershipId
- identitystore:GetUserId
- identitystore:IsMemberInGroups
- identitystore:ListGroupMemberships
- identitystore:ListGroupMembershipsForMember
- identitystore:UpdateGroup
- identitystore:UpdateUser
- macie2:CreateAllowList
- macie2:DeleteAllowList
- macie2:GetAllowList
- macie2:ListAllowLists
- macie2:UpdateAllowList
- personalize:ListTagsForResource
- personalize:TagResource
- personalize:UntagResource
- quicksight:UpdateResourcePermissions
- translate:ListLanguages

**New resource types:**

- events:rule-on-custom-event-bus
- events:rule-on-default-event-bus
- forecast:endpoint
- forecast:whatIfAnalysis
- forecast:whatIfForecast
- forecast:whatIfForecastExport
- identitystore:AllGroupMemberships
- identitystore:AllGroups
- identitystore:AllUsers
- identitystore:Group
- identitystore:GroupMembership
- identitystore:Identitystore
- identitystore:User
- macie2:AllowList
- translate:parallel-data
- translate:terminology

## [0.423.0] (2022-09-03)

:warning: **Removed resource types:**

- events:rule

**New actions:**

- controltower:DisableControl
- controltower:EnableControl
- controltower:GetControlOperation
- controltower:ListEnabledControls
- forecast:CreateForecastEndpoint
- forecast:CreateWhatIfAnalysis
- forecast:CreateWhatIfForecast
- forecast:CreateWhatIfForecastExport
- forecast:DeleteForecastEndpoint
- forecast:DeleteWhatIfAnalysis
- forecast:DeleteWhatIfForecast
- forecast:DeleteWhatIfForecastExport
- forecast:DescribeForecastEndpoint
- forecast:DescribeWhatIfAnalysis
- forecast:DescribeWhatIfForecast
- forecast:DescribeWhatIfForecastExport
- forecast:GetRecentForecastContext
- forecast:InvokeForecastEndpoint
- forecast:ListWhatIfAnalyses
- forecast:ListWhatIfForecastExports
- forecast:ListWhatIfForecasts
- forecast:QueryWhatIfForecast
- identitystore:CreateGroup
- identitystore:CreateGroupMembership
- identitystore:CreateUser
- identitystore:DeleteGroup
- identitystore:DeleteGroupMembership
- identitystore:DeleteUser
- identitystore:DescribeGroupMembership
- identitystore:GetGroupId
- identitystore:GetGroupMembershipId
- identitystore:GetUserId
- identitystore:IsMemberInGroups
- identitystore:ListGroupMemberships
- identitystore:ListGroupMembershipsForMember
- identitystore:UpdateGroup
- identitystore:UpdateUser
- macie2:CreateAllowList
- macie2:DeleteAllowList
- macie2:GetAllowList
- macie2:ListAllowLists
- macie2:UpdateAllowList
- quicksight:UpdateResourcePermissions
- translate:ListLanguages

**New resource types:**

- events:rule-on-custom-event-bus
- events:rule-on-default-event-bus
- forecast:endpoint
- forecast:whatIfAnalysis
- forecast:whatIfForecast
- forecast:whatIfForecastExport
- identitystore:AllGroupMemberships
- identitystore:AllGroups
- identitystore:AllUsers
- identitystore:Group
- identitystore:GroupMembership
- identitystore:Identitystore
- identitystore:User
- macie2:AllowList
- translate:parallel-data
- translate:terminology

## [0.422.0] (2022-08-31)

**New actions:**

- forecast:CreateForecastEndpoint
- forecast:CreateWhatIfAnalysis
- forecast:CreateWhatIfForecast
- forecast:CreateWhatIfForecastExport
- forecast:DeleteForecastEndpoint
- forecast:DeleteWhatIfAnalysis
- forecast:DeleteWhatIfForecast
- forecast:DeleteWhatIfForecastExport
- forecast:DescribeForecastEndpoint
- forecast:DescribeWhatIfAnalysis
- forecast:DescribeWhatIfForecast
- forecast:DescribeWhatIfForecastExport
- forecast:GetRecentForecastContext
- forecast:InvokeForecastEndpoint
- forecast:ListWhatIfAnalyses
- forecast:ListWhatIfForecastExports
- forecast:ListWhatIfForecasts
- forecast:QueryWhatIfForecast
- translate:ListLanguages

**New resource types:**

- forecast:endpoint
- forecast:whatIfAnalysis
- forecast:whatIfForecast
- forecast:whatIfForecastExport
- translate:parallel-data
- translate:terminology

## [0.421.0](https://github.com/udondan/iam-floyd/compare/v0.420.0...v0.421.0) (2022-08-27)

**New resource types:**

- wafv2:userpool

## [0.420.0](https://github.com/udondan/iam-floyd/compare/v0.419.0...v0.420.0) (2022-08-26)

**New actions:**

- sqlworkbench:BatchGetNotebookCell
- sqlworkbench:CreateNotebook
- sqlworkbench:CreateNotebookCell
- sqlworkbench:CreateNotebookFromVersion
- sqlworkbench:CreateNotebookVersion
- sqlworkbench:DeleteNotebook
- sqlworkbench:DeleteNotebookCell
- sqlworkbench:DeleteNotebookVersion
- sqlworkbench:DuplicateNotebook
- sqlworkbench:ExportNotebook
- sqlworkbench:GetNotebook
- sqlworkbench:GetNotebookVersion
- sqlworkbench:ImportNotebook
- sqlworkbench:ListNotebookVersions
- sqlworkbench:ListNotebooks
- sqlworkbench:RestoreNotebookVersion
- sqlworkbench:UpdateNotebook
- sqlworkbench:UpdateNotebookCellContent
- sqlworkbench:UpdateNotebookCellLayout

**New resource types:**

- sqlworkbench:notebook

## [0.419.0](https://github.com/udondan/iam-floyd/compare/v0.418.0...v0.419.0) (2022-08-24)

**New actions:**

- lex:StopBotRecommendation

## [0.418.0](https://github.com/udondan/iam-floyd/compare/v0.417.0...v0.418.0) (2022-08-23)

**New actions:**

- connect:SearchSecurityProfiles
- dynamodb:DescribeImport
- dynamodb:ImportTable
- dynamodb:ListImports

**New resource types:**

- dynamodb:import

## [0.417.0](https://github.com/udondan/iam-floyd/compare/v0.416.0...v0.417.0) (2022-08-20)

:warning: **Removed actions:**

- transfer:DescribeAgreeement

**New actions:**

- cloudwatch:ListManagedInsightRules
- cloudwatch:PutManagedInsightRules
- transfer:DescribeAgreement

**New condition keys:**

- cloudwatch:requestManagedResourceARNs

## [0.416.0](https://github.com/udondan/iam-floyd/compare/v0.415.0...v0.416.0) (2022-08-19)

**New actions:**

- sqlworkbench:GetQueryExecutionHistory
- sqlworkbench:ListQueryExecutionHistory

## [0.415.0](https://github.com/udondan/iam-floyd/compare/v0.414.0...v0.415.0) (2022-08-18)

**New actions:**

- rekognition:CopyProjectVersion
- rekognition:DeleteProjectPolicy
- rekognition:ListProjectPolicies
- rekognition:PutProjectPolicy

## [0.414.0](https://github.com/udondan/iam-floyd/compare/v0.413.0...v0.414.0) (2022-08-17)

**New resource types:**

- redshift:namespace

**New condition keys:**

- redshift:ConsumerArn

## [0.413.0](https://github.com/udondan/iam-floyd/compare/v0.412.0...v0.413.0) (2022-08-16)

**New actions:**

- aps:CreateLoggingConfiguration
- aps:DeleteLoggingConfiguration
- aps:DescribeLoggingConfiguration
- aps:UpdateLoggingConfiguration

## [0.412.0](https://github.com/udondan/iam-floyd/compare/v0.411.0...v0.412.0) (2022-08-13)

**New services:**

- cases
- private-networks

**New actions:**

- cognito-idp:AssociateWebACL
- cognito-idp:DisassociateWebACL
- cognito-idp:GetWebACLForResource
- cognito-idp:ListResourcesForWebACL
- trustedadvisor:DeleteNotificationConfigurationForDelegatedAdmin
- trustedadvisor:DescribeNotificationConfigurations
- trustedadvisor:UpdateNotificationConfigurations

**New resource types:**

- cognito-idp:webacl

## [0.411.0](https://github.com/udondan/iam-floyd/compare/v0.410.0...v0.411.0) (2022-08-10)

:warning: **Removed condition keys:**

- s3:LocationConstraint
- s3:VersionId

**New condition keys:**

- s3:x-amz-server-side-encryption-customer-algorithm

## [0.410.0](https://github.com/udondan/iam-floyd/compare/v0.409.0...v0.410.0) (2022-08-06)

:warning: **Removed actions:**

- ssm-contacts:DeleteContactPolicy
- ssm-contacts:UpdateContactPolicy

**New actions:**

- greengrass:DeleteDeployment
- synthetics:AssociateResource
- synthetics:CreateGroup
- synthetics:DeleteGroup
- synthetics:DisassociateResource
- synthetics:GetGroup
- synthetics:ListAssociatedGroups
- synthetics:ListGroupResources
- synthetics:ListGroups

**New resource types:**

- synthetics:group

**New condition keys:**

- elasticmapreduce:ExecutionRoleArn
- ssm-contacts:RequestTag/${TagKey}
- ssm-contacts:ResourceTag/${TagKey}
- ssm-contacts:TagKeys

## [0.409.0](https://github.com/udondan/iam-floyd/compare/v0.408.0...v0.409.0) (2022-08-05)

**New condition keys:**

- lambda:SourceFunctionArn

## [0.408.0](https://github.com/udondan/iam-floyd/compare/v0.407.0...v0.408.0) (2022-08-04)

**New services:**

- license-manager-user-subscriptions

**New actions:**

- workspaces:CreateWorkspaceImage
- workspaces:ModifySamlProperties
- workspaces:Stream

**New condition keys:**

- workspaces:userId

## [0.407.0](https://github.com/udondan/iam-floyd/compare/v0.406.0...v0.407.0) (2022-08-03)

**New actions:**

- iotsitewise:CreateBulkImportJob
- iotsitewise:DescribeBulkImportJob
- iotsitewise:ListBulkImportJobs

## [0.406.0](https://github.com/udondan/iam-floyd/compare/v0.405.0...v0.406.0) (2022-08-02)

**New actions:**

- datasync:CreateLocationFsxOntap
- datasync:DescribeLocationFsxOntap

## [0.405.0](https://github.com/udondan/iam-floyd/compare/v0.404.0...v0.405.0) (2022-07-30)

**New condition keys:**

- applicationinsights:RequestTag/${TagKey}
- applicationinsights:ResourceTag/${TagKey}

## [0.404.0](https://github.com/udondan/iam-floyd/compare/v0.403.0...v0.404.0) (2022-07-29)

**New actions:**

- appconfig:CreateExtension
- appconfig:CreateExtensionAssociation
- appconfig:DeleteExtension
- appconfig:DeleteExtensionAssociation
- appconfig:GetExtension
- appconfig:GetExtensionAssociation
- appconfig:ListExtensionAssociations
- appconfig:ListExtensions
- appconfig:UpdateExtension
- appconfig:UpdateExtensionAssociation

**New resource types:**

- appconfig:extension
- appconfig:extensionassociation

## [0.403.0](https://github.com/udondan/iam-floyd/compare/v0.402.0...v0.403.0) (2022-07-28)

**New actions:**

- appsync:EvaluateMappingTemplate
- guardduty:DescribeMalwareScans
- guardduty:GetMalwareScanSettings
- guardduty:UpdateMalwareScanSettings
- macie2:GetRevealConfiguration
- macie2:GetSensitiveDataOccurrences
- macie2:GetSensitiveDataOccurrencesAvailability
- macie2:UpdateRevealConfiguration

## [0.402.0](https://github.com/udondan/iam-floyd/compare/v0.401.0...v0.402.0) (2022-07-27)

**New actions:**

- athena:BatchGetPreparedStatement
- detective:BatchGetGraphMemberDatasources
- detective:BatchGetMembershipDatasources
- detective:ListDatasourcePackages
- detective:UpdateDatasourcePackages
- transfer:CreateAgreement
- transfer:CreateConnector
- transfer:CreateProfile
- transfer:DeleteAgreement
- transfer:DeleteCertificate
- transfer:DeleteConnector
- transfer:DeleteProfile
- transfer:DescribeAgreeement
- transfer:DescribeCertificate
- transfer:DescribeConnector
- transfer:DescribeProfile
- transfer:ImportCertificate
- transfer:ListAgreements
- transfer:ListCertificates
- transfer:ListConnectors
- transfer:ListProfiles
- transfer:UpdateAgreement
- transfer:UpdateCertificate
- transfer:UpdateConnector
- transfer:UpdateProfile

**New resource types:**

- transfer:agreement
- transfer:certificate
- transfer:connector
- transfer:profile

**New condition keys:**

- applicationinsights:TagKeys

## [0.401.0](https://github.com/udondan/iam-floyd/compare/v0.400.0...v0.401.0) (2022-07-26)

:warning: **Removed actions:**

- neptune-db:connect

**New actions:**

- account:GetContactInformation
- account:PutContactInformation
- neptune-db:CancelLoaderJob
- neptune-db:CancelMLDataProcessingJob
- neptune-db:CancelMLModelTrainingJob
- neptune-db:CancelMLModelTransformJob
- neptune-db:CancelQuery
- neptune-db:CreateMLEndpoint
- neptune-db:DeleteDataViaQuery
- neptune-db:DeleteMLEndpoint
- neptune-db:DeleteStatistics
- neptune-db:GetEngineStatus
- neptune-db:GetLoaderJobStatus
- neptune-db:GetMLDataProcessingJobStatus
- neptune-db:GetMLEndpointStatus
- neptune-db:GetMLModelTrainingJobStatus
- neptune-db:GetMLModelTransformJobStatus
- neptune-db:GetQueryStatus
- neptune-db:GetStatisticsStatus
- neptune-db:GetStreamRecords
- neptune-db:ListLoaderJobs
- neptune-db:ListMLDataProcessingJobs
- neptune-db:ListMLEndpoints
- neptune-db:ListMLModelTrainingJobs
- neptune-db:ListMLModelTransformJobs
- neptune-db:ManageStatistics
- neptune-db:ReadDataViaQuery
- neptune-db:ResetDatabase
- neptune-db:StartLoaderJob
- neptune-db:StartMLDataProcessingJob
- neptune-db:StartMLModelTrainingJob
- neptune-db:StartMLModelTransformJob
- neptune-db:WriteDataViaQuery
- rds:ModifyActivityStream
- rds:SwitchoverReadReplica

**New condition keys:**

- neptune-db:QueryLanguage

## [0.400.0](https://github.com/udondan/iam-floyd/compare/v0.399.0...v0.400.0) (2022-07-24)

:warning: **Removed actions:**

- vendor-insights:ActivateSecurityProfile
- vendor-insights:AssociateDataSource
- vendor-insights:CreateDataSource
- vendor-insights:CreateSecurityProfile
- vendor-insights:DeactivateSecurityProfile
- vendor-insights:DeleteDataSource
- vendor-insights:DisassociateDataSource
- vendor-insights:GetDataSource
- vendor-insights:GetEntitledSecurityProfileSnapshot
- vendor-insights:GetProfileAccessTerms
- vendor-insights:GetSecurityProfile
- vendor-insights:GetSecurityProfileSnapshot
- vendor-insights:ListDataSources
- vendor-insights:ListEntitledSecurityProfileSnapshots
- vendor-insights:ListEntitledSecurityProfiles
- vendor-insights:ListSecurityProfileSnapshots
- vendor-insights:ListSecurityProfiles
- vendor-insights:UpdateSecurityProfile

:warning: **Removed resource types:**

- vendor-insights:DataSource
- vendor-insights:SecurityProfile

## [0.399.0](https://github.com/udondan/iam-floyd/compare/v0.398.0...v0.399.0) (2022-07-23)

**New actions:**

- athena:GetQueryRuntimeStatistics
- aws-marketplace:AcceptAgreementRequest
- aws-marketplace:CancelAgreement
- aws-marketplace:CreateAgreementRequest
- codeartifact:DescribePackage
- codeartifact:PutPackageOriginConfiguration
- ec2:AssociateTransitGatewayPolicyTable
- ec2:CreateTransitGatewayPolicyTable
- ec2:CreateTransitGatewayRouteTableAnnouncement
- ec2:DeleteTransitGatewayPolicyTable
- ec2:DeleteTransitGatewayRouteTableAnnouncement
- ec2:DescribeTransitGatewayPolicyTables
- ec2:DescribeTransitGatewayRouteTableAnnouncements
- ec2:DisassociateTransitGatewayPolicyTable
- ec2:GetTransitGatewayPolicyTableAssociations
- ec2:GetTransitGatewayPolicyTableEntries

**New resource types:**

- ec2:transit-gateway-policy-table
- ec2:transit-gateway-route-table-announcement

## [0.398.0](https://github.com/udondan/iam-floyd/compare/v0.397.0...v0.398.0) (2022-07-22)

**New actions:**

- kinesisvideo:DescribeImageGenerationConfiguration
- kinesisvideo:DescribeNotificationConfiguration
- kinesisvideo:GetImages
- kinesisvideo:UpdateImageGenerationConfiguration
- kinesisvideo:UpdateNotificationConfiguration

## [0.397.0](https://github.com/udondan/iam-floyd/compare/v0.396.0...v0.397.0) (2022-07-21)

**New actions:**

- sqlworkbench:UpdateAccountConnectionSettings

**New condition keys:**

- lambda:RequestTag/${TagKey}
- lambda:ResourceTag/${TagKey}
- lambda:TagKeys

## [0.396.0](https://github.com/udondan/iam-floyd/compare/v0.395.0...v0.396.0) (2022-07-20)

**New actions:**

- sso:AttachCustomerManagedPolicyReferenceToPermissionSet
- sso:DeletePermissionsBoundaryFromPermissionSet
- sso:DetachCustomerManagedPolicyReferenceFromPermissionSet
- sso:GetPermissionsBoundaryForPermissionSet
- sso:ListCustomerManagedPolicyReferencesInPermissionSet
- sso:PutPermissionsBoundaryToPermissionSet

**New condition keys:**

- ec2messages:SourceInstanceARN
- ssm:SourceInstanceARN
- ssmmessages:SourceInstanceARN

## [0.395.0](https://github.com/udondan/iam-floyd/compare/v0.394.0...v0.395.0) (2022-07-19)

**New services:**

- vendor-insights

**New actions:**

- chime:BatchUpdateAttendeeCapabilitiesExcept
- chime:UpdateAttendeeCapabilities
- devops-guru:ListAnomalousLogGroups
- devops-guru:ListMonitoredResources
- network-firewall:UpdateFirewallEncryptionConfiguration
- proton:CancelComponentDeployment
- proton:CreateComponent
- proton:DeleteComponent
- proton:GetComponent
- proton:ListComponentOutputs
- proton:ListComponentProvisionedResources
- proton:ListComponents
- proton:UpdateComponent
- rekognition:UpdateStreamProcessor

**New resource types:**

- proton:component

## [0.394.0](https://github.com/udondan/iam-floyd/compare/v0.393.0...v0.394.0) (2022-07-15)

**New actions:**

- drs:NotifyVolumeEventForDrs
- drs:SendVolumeStatsForDrs
- ds:DescribeSettings
- ds:UpdateSettings
- networkmanager:CreateTransitGatewayPeering
- networkmanager:CreateTransitGatewayRouteTableAttachment
- networkmanager:DeletePeering
- networkmanager:GetCoreNetworkChangeEvents
- networkmanager:GetTransitGatewayPeering
- networkmanager:GetTransitGatewayRouteTableAttachment
- networkmanager:ListPeerings

**New resource types:**

- networkmanager:peering

**New condition keys:**

- networkmanager:tgwRtbArn

## [0.393.0](https://github.com/udondan/iam-floyd/compare/v0.392.0...v0.393.0) (2022-07-09)

**New services:**

- redshift-serverless
- rolesanywhere

## [0.392.0](https://github.com/udondan/iam-floyd/compare/v0.391.0...v0.392.0) (2022-07-08)

**New actions:**

- iotwireless:GetPosition
- iotwireless:GetPositionConfiguration
- iotwireless:ListPositionConfigurations
- iotwireless:PutPositionConfiguration
- iotwireless:UpdatePosition
- quicksight:CreateAccountSubscription
- quicksight:DescribeAccountSubscription

**New resource types:**

- quicksight:account

**New condition keys:**

- quicksight:AllowedEmbeddingDomains

## [0.391.0](https://github.com/udondan/iam-floyd/compare/v0.390.0...v0.391.0) (2022-07-03)

Fix compatibility with CDK.

:warning: Due to changes in AWS CDK, there is no compatible version for CDK 2.29.x.

Starting with CDK 2.30.0 you have to use at least this version! If you use any older version, all statements will be empty!

---

**New actions:**

- wellarchitected:UpdateGlobalSettings

## [0.390.0](https://github.com/udondan/iam-floyd/compare/v0.389.0...v0.390.0) (2022-07-01)

**New services:**

- sagemaker-groundtruth-synthetic

**New actions:**

- forecast:CreateMonitor
- forecast:DeleteMonitor
- forecast:DescribeMonitor
- forecast:ListMonitorEvaluations
- forecast:ListMonitors
- forecast:ResumeResource
- sagemaker:DescribeFeatureMetadata
- sagemaker:UpdateFeatureGroup
- sagemaker:UpdateFeatureMetadata

**New resource types:**

- forecast:monitor

**New condition keys:**

- sagemaker:MinimumInstanceMetadataServiceVersion

## [0.389.0](https://github.com/udondan/iam-floyd/compare/v0.388.0...v0.389.0) (2022-06-30)

:warning: **Removed actions:**

- chime:CreateBotMembership

**New actions:**

- chime:SearchChannels

## [0.388.0](https://github.com/udondan/iam-floyd/compare/v0.387.0...v0.388.0) (2022-06-28)

**New condition keys:**

- ssm-incidents:RequestTag/${TagKey}
- ssm-incidents:ResourceTag/${TagKey}
- ssm-incidents:TagKeys

## [0.387.0](https://github.com/udondan/iam-floyd/compare/v0.386.0...v0.387.0) (2022-06-24)

:warning: **Removed actions:**

- macie:AssociateMemberAccount
- macie:AssociateS3Resources
- macie:DisassociateMemberAccount
- macie:DisassociateS3Resources
- macie:ListMemberAccounts
- macie:ListS3Resources
- macie:UpdateS3Resources

:warning: **Removed condition keys:**

- macie:SourceArn

**New actions:**

- refactor-spaces:UpdateRoute

## [0.386.0](https://github.com/udondan/iam-floyd/compare/v0.385.0...v0.386.0) (2022-06-23)

**New actions:**

- outposts:GetConnection
- outposts:StartConnection

## [0.385.0](https://github.com/udondan/iam-floyd/compare/v0.384.0...v0.385.0) (2022-06-22)

:warning: **Removed condition keys:**

- s3:RequestedRegion

## [0.384.0](https://github.com/udondan/iam-floyd/compare/v0.383.0...v0.384.0) (2022-06-17)

:warning: **Removed actions:**

- iotwireless:GetEventConfigurationsByResourceTypes
- iotwireless:UpdateEventConfigurationsByResourceTypes

**New actions:**

- iotwireless:GetEventConfigurationByResourceTypes
- iotwireless:UpdateEventConfigurationByResourceTypes
- lookoutmetrics:UpdateAlert
- sqlworkbench:GetAccountSettings
- sqlworkbench:UpdateAccountGeneralSettings
- ssm:GetCalendar
- ssm:PutCalendar

**Updated action access level:**

- ssm:ListCommandInvocations: Read -> List
- ssm:ListCommands: Read -> List
- ssm:ListOpsItemEvents: Read -> List
- ssm:ListOpsItemRelatedItems: Read -> List
- ssm:ListTagsForResource: Read -> List

**New condition keys:**

- rbin:Attribute/ResourceType
- rbin:Request/ResourceType
- ssm:AutoApprove
- ssm:resourceTag/${TagKey}

## [0.383.0](https://github.com/udondan/iam-floyd/compare/v0.382.0...v0.383.0) (2022-06-17)

:warning: **Removed actions:**

- memorydb:BatchUpdateClusters
- memorydb:ListNodeTypeUpdates

**New actions:**

- lightsail:GetLoadBalancerTlsPolicies
- memorydb:BatchUpdateCluster
- memorydb:ListAllowedNodeTypeUpdates
- servicecatalog:ListAttributeGroupsForApplication

## [0.382.0](https://github.com/udondan/iam-floyd/compare/v0.381.0...v0.382.0) (2022-06-10)

:warning: **Removed actions:**

- connect-campaigns:PutConnectInstanceConfig

**New services:**

- m2

**New actions:**

- connect-campaigns:DeleteConnectInstanceConfig
- connect-campaigns:DeleteInstanceOnboardingJob
- connect-campaigns:GetConnectInstanceConfig
- connect-campaigns:GetInstanceOnboardingJobStatus
- connect-campaigns:StartInstanceOnboardingJob

## [0.381.0](https://github.com/udondan/iam-floyd/compare/v0.380.0...v0.381.0) (2022-06-08)

**New actions:**

- ce:ListCostAllocationTags
- ce:UpdateCostAllocationTagsStatus
- connect:GetCurrentUserData
- mgn:CreateLaunchConfigurationTemplate
- mgn:DeleteLaunchConfigurationTemplate
- mgn:DescribeLaunchConfigurationTemplates
- mgn:IssueClientCertificateForMgn
- mgn:UpdateLaunchConfigurationTemplate
- mgn:VerifyClientRoleForMgn

**New resource types:**

- mgn:LaunchConfigurationTemplateResource

## [0.380.0](https://github.com/udondan/iam-floyd/compare/v0.379.0...v0.380.0) (2022-06-07)

**New actions:**

- medialive:RebootInputDevice
- medialive:StartInputDeviceMaintenanceWindow
- route53:ChangeCidrCollection
- route53:CreateCidrCollection
- route53:DeleteCidrCollection
- route53:ListCidrBlocks
- route53:ListCidrCollections
- route53:ListCidrLocations

**New resource types:**

- route53:cidrcollection

## [0.379.0](https://github.com/udondan/iam-floyd/compare/v0.378.0...v0.379.0) (2022-06-04)

**New actions:**

- connect:CreateTaskTemplate
- connect:DeleteTaskTemplate
- connect:GetTaskTemplate
- connect:ListTaskTemplates
- connect:TransferContact
- connect:UpdateTaskTemplate
- ec2:GetInstanceUefiData

**New resource types:**

- connect:task-template

## [0.378.0](https://github.com/udondan/iam-floyd/compare/v0.377.0...v0.378.0) (2022-06-03)

**New actions:**

- backup-gateway:GetGateway
- backup-gateway:UpdateGatewaySoftwareNow

## [0.377.0](https://github.com/udondan/iam-floyd/compare/v0.376.0...v0.377.0) (2022-06-01)

### :warning: BREAKING CHANGES

To restore compatibility with CDK [2.26.0](https://github.com/aws/aws-cdk/compare/v2.25.0...v2.26.0#diff-0ae3b84aa2e09276610b62695ce2b3485fde733b8ae0708053e6a075e17c6c11) some methods had to be renamed:

notAction**s** -> notAction<br>
notResource**s** -> notResource<br>
notPrincipal**s** -> notPrincipal

The old methods do still exist but are not what they used to be!

---

:warning: **Removed condition keys:**

- events:SourceAccount
- events:SourceArn

**New services:**

- emr-serverless

## [0.376.0](https://github.com/udondan/iam-floyd/compare/v0.375.0...v0.376.0) (2022-05-28)

**New actions:**

- discovery:GetNetworkConnectionGraph
- drs:CreateConvertedSnapshotForDrs
- drs:CreateExtendedSourceServer
- drs:ListExtensibleSourceServers
- drs:ListStagingAccounts

**New condition keys:**

- drs:CreateAction

## [0.375.0](https://github.com/udondan/iam-floyd/compare/v0.374.0...v0.375.0) (2022-05-27)


## [0.374.0](https://github.com/udondan/iam-floyd/compare/v0.373.0...v0.374.0) (2022-05-26)

**New actions:**

- networkmanager:ListOrganizationServiceAccessStatus
- networkmanager:StartOrganizationServiceAccessUpdate

## [0.373.0](https://github.com/udondan/iam-floyd/compare/v0.372.0...v0.373.0) (2022-05-19)

**New actions:**

- iotevents:BatchDeleteDetector
- quicksight:UpdatePublicSharingSettings

## [0.372.0](https://github.com/udondan/iam-floyd/compare/v0.371.0...v0.372.0) (2022-05-18)


## [0.371.0](https://github.com/udondan/iam-floyd/compare/v0.370.0...v0.371.0) (2022-05-17)

**New actions:**

- grafana:CreateWorkspaceApiKey
- grafana:DeleteWorkspaceApiKey

## [0.370.0](https://github.com/udondan/iam-floyd/compare/v0.369.0...v0.370.0) (2022-05-14)


## [0.369.0](https://github.com/udondan/iam-floyd/compare/v0.368.0...v0.369.0) (2022-05-13)

:warning: **Removed actions:**

- worklink:AssociateDomain
- worklink:AssociateWebsiteAuthorizationProvider
- worklink:AssociateWebsiteCertificateAuthority
- worklink:CreateFleet
- worklink:DeleteFleet
- worklink:DescribeAuditStreamConfiguration
- worklink:DescribeCompanyNetworkConfiguration
- worklink:DescribeDevice
- worklink:DescribeDevicePolicyConfiguration
- worklink:DescribeDomain
- worklink:DescribeFleetMetadata
- worklink:DescribeIdentityProviderConfiguration
- worklink:DescribeWebsiteCertificateAuthority
- worklink:DisassociateDomain
- worklink:DisassociateWebsiteAuthorizationProvider
- worklink:DisassociateWebsiteCertificateAuthority
- worklink:ListDevices
- worklink:ListDomains
- worklink:ListFleets
- worklink:ListTagsForResource
- worklink:ListWebsiteAuthorizationProviders
- worklink:ListWebsiteCertificateAuthorities
- worklink:RestoreDomainAccess
- worklink:RevokeDomainAccess
- worklink:SearchEntity
- worklink:SignOutUser
- worklink:TagResource
- worklink:UntagResource
- worklink:UpdateAuditStreamConfiguration
- worklink:UpdateCompanyNetworkConfiguration
- worklink:UpdateDevicePolicyConfiguration
- worklink:UpdateDomainMetadata
- worklink:UpdateFleetMetadata
- worklink:UpdateIdentityProviderConfiguration

:warning: **Removed condition keys:**

- worklink:RequestTag/${TagKey}
- worklink:ResourceTag/${TagKey}
- worklink:TagKeys

:warning: **Removed resource types:**

- worklink:fleet

**New actions:**

- iot:RotateTunnelAccessToken

**New condition keys:**

- iot:ClientMode

## [0.368.0](https://github.com/udondan/iam-floyd/compare/v0.367.0...v0.368.0) (2022-05-11)


## [0.367.0](https://github.com/udondan/iam-floyd/compare/v0.366.0...v0.367.0) (2022-05-06)

**New actions:**

- sqlworkbench:UpdateAccountExportSettings

## [0.366.0](https://github.com/udondan/iam-floyd/compare/v0.365.0...v0.366.0) (2022-05-05)

**New condition keys:**

- ses:ApiVersion

## [0.365.0](https://github.com/udondan/iam-floyd/compare/v0.364.0...v0.365.0) (2022-05-04)

**New actions:**

- outposts:ListAssets

## [0.364.0](https://github.com/udondan/iam-floyd/compare/v0.363.0...v0.364.0) (2022-05-03)

**New actions:**

- connect:PutUserStatus

## [0.363.0](https://github.com/udondan/iam-floyd/compare/v0.362.0...v0.363.0) (2022-04-29)

:warning: **Removed condition keys:**

- sagemaker:SourceIp
- sagemaker:SourceVpc
- sagemaker:SourceVpce

**New actions:**

- iotwireless:CreateNetworkAnalyzerConfiguration
- iotwireless:DeleteNetworkAnalyzerConfiguration
- iotwireless:GetEventConfigurationsByResourceTypes
- iotwireless:ListEventConfigurations
- iotwireless:ListNetworkAnalyzerConfigurations
- iotwireless:UpdateEventConfigurationsByResourceTypes
- mediatailor:CreateLiveSource
- mediatailor:DeleteLiveSource
- mediatailor:DescribeLiveSource
- mediatailor:ListLiveSources
- mediatailor:UpdateLiveSource

**New resource types:**

- chime:media-pipeline
- iotwireless:NetworkAnalyzerConfiguration
- mediatailor:liveSource

## [0.362.0](https://github.com/udondan/iam-floyd/compare/v0.361.0...v0.362.0) (2022-04-28)

**New services:**

- ivschat

**New actions:**

- glue:BatchGetCustomEntityTypes
- glue:CreateCustomEntityType
- glue:DeleteCustomEntityType
- glue:GetCustomEntityType
- glue:ListCustomEntityTypes
- iotsitewise:BatchGetAssetPropertyAggregates
- iotsitewise:BatchGetAssetPropertyValue
- iotsitewise:BatchGetAssetPropertyValueHistory

**Updated action access level:**

- timestream:ListScheduledQueries: Read -> List
- timestream:ListTagsForResource: List -> Read
- timestream:PrepareQuery: Write -> Read

## [0.361.0](https://github.com/udondan/iam-floyd/compare/v0.360.0...v0.361.0) (2022-04-27)

**New actions:**

- connect:SearchUsers
- personalize:StartRecommender
- personalize:StopRecommender

**New condition keys:**

- connect:SearchTag/${TagKey}
- glacier:RequestTag/${TagKey}
- glacier:TagKeys

## [0.360.0](https://github.com/udondan/iam-floyd/compare/v0.359.0...v0.360.0) (2022-04-26)

**New actions:**

- lookoutequipment:ListSensorStatistics

## [0.359.0](https://github.com/udondan/iam-floyd/compare/v0.358.0...v0.359.0) (2022-04-23)

:warning: **Removed actions:**

- iot:GetPendingJobExecutions
- iot:StartNextPendingJobExecution
- iot:UpdateJobExecution

**New actions:**

- lookoutmetrics:DetectMetricSetConfig

**New condition keys:**

- sagemaker:ServerlessMaxConcurrency
- sagemaker:ServerlessMemorySize

## [0.358.0](https://github.com/udondan/iam-floyd/compare/v0.357.0...v0.358.0) (2022-04-22)

**New services:**

- iotjobsdata

**New actions:**

- connect:AssociatePhoneNumberContactFlow
- connect:ClaimPhoneNumber
- connect:DescribePhoneNumber
- connect:DisassociatePhoneNumberContactFlow
- connect:ListPhoneNumbersV2
- connect:ReleasePhoneNumber
- connect:SearchAvailablePhoneNumbers
- connect:UpdatePhoneNumber

**New resource types:**

- connect:legacy-phone-number
- connect:wildcard-legacy-phone-number

## [0.357.0](https://github.com/udondan/iam-floyd/compare/v0.356.0...v0.357.0) (2022-04-21)

:warning: **Removed actions:**

- proton:UpdateRepository

**New actions:**

- cassandra:UpdatePartitioner
- kms:GenerateMac
- kms:VerifyMac
- migrationhub-orchestrator:ListTagsForResource
- migrationhub-orchestrator:TagResource
- migrationhub-orchestrator:UntagResource

**New condition keys:**

- kms:MacAlgorithm

## [0.356.0](https://github.com/udondan/iam-floyd/compare/v0.355.0...v0.356.0) (2022-04-20)

The partition in forXxx-methods in cdk-iam-floyd now defaults to the partition of the stack. Thanks to @kylelaker

---

:warning: **Removed actions:**

- rds:CreateCustomAvailabilityZone
- rds:DeleteCustomAvailabilityZone
- rds:DeleteInstallationMedia
- rds:DescribeCustomAvailabilityZones
- rds:DescribeInstallationMedia
- rds:ImportInstallationMedia

:warning: **Removed resource types:**

- migrationhub-orchestrator:workflow-template

**New resource types:**

- migrationhub-orchestrator:workflow

**New condition keys:**

- migrationhub-orchestrator:RequestTag/${TagKey}
- migrationhub-orchestrator:ResourceTag/${TagKey}
- migrationhub-orchestrator:TagKeys

## [0.355.0](https://github.com/udondan/iam-floyd/compare/v0.354.0...v0.355.0) (2022-04-16)

:warning: **Removed actions:**

- billingconductor:ListTagsResource

:warning: **Removed resource types:**

- billingconductor:billingGroup
- billingconductor:customLineItem
- billingconductor:pricingPlan
- billingconductor:pricingRule

**New actions:**

- billingconductor:ListTagsForResource

**New resource types:**

- billingconductor:billinggroup
- billingconductor:customlineitem
- billingconductor:pricingplan
- billingconductor:pricingrule

## [0.354.0](https://github.com/udondan/iam-floyd/compare/v0.353.0...v0.354.0) (2022-04-15)

**New services:**

- migrationhub-orchestrator

**Updated action access level:**

- schemas:ListTagsForResource: List -> Read

## [0.353.0](https://github.com/udondan/iam-floyd/compare/v0.352.0...v0.353.0) (2022-04-14)

The partition in cdk-iam-floyd now defaults to the partition of the stack. Thanks to @kylelaker

---

**New actions:**

- apprunner:CreateObservabilityConfiguration
- apprunner:DeleteObservabilityConfiguration
- apprunner:DescribeObservabilityConfiguration
- apprunner:ListObservabilityConfigurations
- devops-guru:DeleteInsight

**New resource types:**

- apprunner:observabilityconfiguration

**New condition keys:**

- apprunner:ObservabilityConfigurationArn
- datapipeline:RequestTag/${TagKey}
- datapipeline:TagKeys

## [0.352.0](https://github.com/udondan/iam-floyd/compare/v0.351.0...v0.352.0) (2022-04-13)

:warning: **Removed condition keys:**

- chatbot:CalledVia

**New actions:**

- chatbot:DeleteSlackUserIdentity
- chatbot:DescribeSlackUserIdentities
- chatbot:GetAccountPreferences
- chatbot:UpdateAccountPreferences
- datasync:CreateLocationFsxOpenZfs
- datasync:DescribeLocationFsxOpenZfs

## [0.351.0](https://github.com/udondan/iam-floyd/compare/v0.350.0...v0.351.0) (2022-04-10)

Fixes compatibility with CDK >= 2.20.0

---

**New actions:**

- ec2:ModifyInstanceMaintenanceOptions
- events:CreateEndpoint
- events:DeleteEndpoint
- events:DescribeEndpoint
- events:ListEndpoints
- events:UpdateEndpoint
- fms:AssociateThirdPartyFirewall
- fms:DisassociateThirdPartyFirewall
- fms:GetThirdPartyFirewallAssociationStatus
- fms:ListThirdPartyFirewallFirewallPolicies
- iot:ListMetricValues
- lambda:CreateFunctionUrlConfig
- lambda:DeleteFunctionUrlConfig
- lambda:GetFunctionUrlConfig
- lambda:InvokeFunctionUrl
- lambda:ListFunctionUrlConfigs
- lambda:UpdateFunctionUrlConfig

**Updated action access level:**

- panorama:ListTagsForResource: List -> Read

**New resource types:**

- events:endpoint

**New condition keys:**

- events:EventBusArn
- lambda:FunctionUrlAuthType

## [0.350.0](https://github.com/udondan/iam-floyd/compare/v0.349.0...v0.350.0) (2022-04-07)

**New actions:**

- ecr:BatchImportUpstreamImage

**New condition keys:**

- transcribe:OutputLocation

## [0.349.0](https://github.com/udondan/iam-floyd/compare/v0.348.0...v0.349.0) (2022-04-06)

**New actions:**

- connect:BatchAssociateAnalyticsDataSet
- connect:BatchDisassociateAnalyticsDataSet
- securityhub:BatchGetStandardsControlAssociations
- securityhub:BatchUpdateStandardsControlAssociations
- securityhub:ListSecurityControlDefinitions
- workspaces:DeleteClientBranding
- workspaces:DescribeClientBranding
- workspaces:ImportClientBranding

## [0.348.0](https://github.com/udondan/iam-floyd/compare/v0.347.0...v0.348.0) (2022-04-04)

:warning: **Removed condition keys:**

- groundstation:configId
- groundstation:configType
- groundstation:contactId
- groundstation:dataflowEndpointGroupId
- groundstation:groundStationId
- groundstation:missionProfileId
- groundstation:satelliteId

**New actions:**

- grafana:ListTagsForResource
- grafana:TagResource
- grafana:UntagResource
- route53-recovery-cluster:ListRoutingControls
- sms-voice:AssociateOriginationIdentity
- sms-voice:CreateEventDestination
- sms-voice:CreateOptOutList
- sms-voice:CreatePool
- sms-voice:DeleteDefaultMessageType
- sms-voice:DeleteDefaultSenderId
- sms-voice:DeleteEventDestination
- sms-voice:DeleteKeyword
- sms-voice:DeleteOptOutList
- sms-voice:DeleteOptedOutNumber
- sms-voice:DeletePool
- sms-voice:DeleteTextMessageSpendLimitOverride
- sms-voice:DeleteVoiceMessageSpendLimitOverride
- sms-voice:DescribeAccountAttributes
- sms-voice:DescribeAccountLimits
- sms-voice:DescribeConfigurationSets
- sms-voice:DescribeKeywords
- sms-voice:DescribeOptOutLists
- sms-voice:DescribeOptedOutNumbers
- sms-voice:DescribePhoneNumbers
- sms-voice:DescribePools
- sms-voice:DescribeSenderIds
- sms-voice:DescribeSpendLimits
- sms-voice:DisassociateOriginationIdentity
- sms-voice:ListPoolOriginationIdentities
- sms-voice:ListTagsForResource
- sms-voice:PutKeyword
- sms-voice:PutOptedOutNumber
- sms-voice:ReleasePhoneNumber
- sms-voice:RequestPhoneNumber
- sms-voice:SendTextMessage
- sms-voice:SetDefaultMessageType
- sms-voice:SetDefaultSenderId
- sms-voice:SetTextMessageSpendLimitOverride
- sms-voice:SetVoiceMessageSpendLimitOverride
- sms-voice:TagResource
- sms-voice:UntagResource
- sms-voice:UpdateEventDestination
- sms-voice:UpdatePhoneNumber
- sms-voice:UpdatePool

**New resource types:**

- sms-voice:ConfigurationSet
- sms-voice:OptOutList
- sms-voice:PhoneNumber
- sms-voice:Pool
- sms-voice:SenderId

**New condition keys:**

- grafana:RequestTag/${TagKey}
- grafana:ResourceTag/${TagKey}
- grafana:TagKeys
- groundstation:ConfigId
- groundstation:ConfigType
- groundstation:ContactId
- groundstation:DataflowEndpointGroupId
- groundstation:GroundStationId
- groundstation:MissionProfileId
- groundstation:SatelliteId
- sms-voice:RequestTag/${TagKey}
- sms-voice:ResourceTag/${TagKey}
- sms-voice:TagKeys

## [0.347.0](https://github.com/udondan/iam-floyd/compare/v0.346.0...v0.347.0) (2022-04-01)

**New actions:**

- comprehend:DescribeTargetedSentimentDetectionJob
- comprehend:ListTargetedSentimentDetectionJobs
- comprehend:StartTargetedSentimentDetectionJob
- comprehend:StopTargetedSentimentDetectionJob

**Updated action access level:**

- networkmanager:GetTransitGatewayConnectPeerAssociations: Read -> List
- networkmanager:ListAttachments: Read -> List
- networkmanager:ListConnectPeers: Read -> List
- networkmanager:ListCoreNetworks: Read -> List
- servicediscovery:ListInstances: List -> Read
- servicediscovery:ListNamespaces: List -> Read
- servicediscovery:ListServices: List -> Read
- servicediscovery:ListTagsForResource: List -> Read

**New resource types:**

- comprehend:targeted-sentiment-detection-job

## [0.346.0](https://github.com/udondan/iam-floyd/compare/v0.345.0...v0.346.0) (2022-03-31)

**New actions:**

- athena:UpdateNamedQuery
- organizations:CloseAccount

## [0.345.0](https://github.com/udondan/iam-floyd/compare/v0.344.0...v0.345.0) (2022-03-26)

**New actions:**

- ec2:DeleteResourcePolicy
- ec2:GetResourcePolicy
- ec2:PutResourcePolicy

**New resource types:**

- ec2:group

## [0.344.0](https://github.com/udondan/iam-floyd/compare/v0.343.0...v0.344.0) (2022-03-25)

The following `for*` methods now can take multiple pricipals:

- forAccount
- forFederated
- forCanonicalUser
- forSaml
- forUser
- forRole
- forAssumedRoleSession
- forService

---

**New services:**

- gamesparks
- identity-sync

**New actions:**

- quicksight:DescribeGroupMembership
- quicksight:SearchGroups
- s3-outposts:ListSharedEndpoints

## [0.343.0](https://github.com/udondan/iam-floyd/compare/v0.342.0...v0.343.0) (2022-03-23)

**New actions:**

- ce:ListTagsForResource
- ce:TagResource
- ce:UntagResource

**New resource types:**

- ce:anomalymonitor
- ce:anomalysubscription
- ce:costcategory

**New condition keys:**

- ce:RequestTag/${TagKey}
- ce:ResourceTag/${TagKey}
- ce:TagKeys

## [0.342.0](https://github.com/udondan/iam-floyd/compare/v0.341.0...v0.342.0) (2022-03-22)


## [0.341.0](https://github.com/udondan/iam-floyd/compare/v0.340.0...v0.341.0) (2022-03-19)

:warning: **Removed actions:**

- cloudfront:CreateDistributionWithTags

## [0.340.0](https://github.com/udondan/iam-floyd/compare/v0.339.0...v0.340.0) (2022-03-18)

**New services:**

- billingconductor

## [0.339.0](https://github.com/udondan/iam-floyd/compare/v0.338.0...v0.339.0) (2022-03-17)

:warning: **Removed actions:**

- cloudformation:DescribeChangeSetHook

**New actions:**

- cloudformation:DescribeChangeSetHooks
- cloudformation:RollbackStack
- dataexchange:RevokeRevision

**New resource types:**

- kafka:configuration

## [0.338.0](https://github.com/udondan/iam-floyd/compare/v0.337.0...v0.338.0) (2022-03-16)

**New services:**

- tax

## [0.337.0](https://github.com/udondan/iam-floyd/compare/v0.336.0...v0.337.0) (2022-03-15)

**New actions:**

- kafkaconnect:DeleteCustomPlugin

## [0.336.0](https://github.com/udondan/iam-floyd/compare/v0.333.0...v0.336.0) (2022-03-12)

**New services:**

- rhelkb

**New actions:**

- rhelkb:GetRhelURL

**New condition keys:**

- imagebuilder:Ec2MetadataHttpTokens
- imagebuilder:StatusTopicArn

## [0.335.0] (2022-03-11)

**New services:**

- rhelkb

**New actions:**

- rhelkb:GetRhelURL

## [0.334.0] (2022-03-10)

**New services:**

- rhelkb

## [0.333.0](https://github.com/udondan/iam-floyd/compare/v0.332.0...v0.333.0) (2022-03-09)

**New actions:**

- clouddirectory:GetAppliedSchemaVersion
- clouddirectory:UpgradeAppliedSchema
- clouddirectory:UpgradePublishedSchema
- wafv2:GenerateMobileSdkReleaseUrl
- wafv2:GetMobileSdkRelease
- wafv2:ListMobileSdkReleases

## [0.332.0](https://github.com/udondan/iam-floyd/compare/v0.331.0...v0.332.0) (2022-03-05)

**New actions:**

- connect:UpdateContactFlowModuleContent
- devops-guru:DescribeEventSourcesConfig
- devops-guru:UpdateEventSourcesConfig
- elasticmapreduce:DeleteWorkspaceAccess
- elasticmapreduce:ListWorkspaceAccessIdentities
- elasticmapreduce:PutWorkspaceAccess
- elasticmapreduce:UpdateEditor
- redshift:DescribeReservedNodeExchangeStatus
- redshift:GetReservedNodeExchangeConfigurationOptions
- sagemaker:CreateStudioLifecycleConfig
- sagemaker:DeleteStudioLifecycleConfig
- sagemaker:DescribeStudioLifecycleConfig
- sagemaker:ListStudioLifecycleConfigs
- sagemaker:RetryPipelineExecution

**New resource types:**

- sagemaker:studio-lifecycle-config

## [0.331.0](https://github.com/udondan/iam-floyd/compare/v0.330.0...v0.331.0) (2022-03-04)

**New actions:**

- ec2:ListImagesInRecycleBin
- ec2:RestoreImageFromRecycleBin

**New resource types:**

- ec2:license-configuration
- ec2:subnet-cidr-reservation

**New condition keys:**

- ec2:DhcpOptionsID
- ec2:ImageID
- ec2:InstanceID
- ec2:InternetGatewayID
- ec2:NetworkAclID
- ec2:NetworkInterfaceID
- ec2:PlacementGroupName
- ec2:RouteTableID
- ec2:SecurityGroupID
- ec2:SnapshotID
- ec2:SubnetID
- ec2:VolumeID
- ec2:VpcID
- ec2:VpcPeeringConnectionID
- kms:RequestTag/${TagKey}
- kms:TagKeys

## [0.330.0](https://github.com/udondan/iam-floyd/compare/v0.329.0...v0.330.0) (2022-03-03)

**New services:**

- sustainability

**New actions:**

- evidently:BatchEvaluateFeature
- evidently:EvaluateFeature
- evidently:PutProjectEvents
- transcribe:ListTagsForResource
- transcribe:TagResource
- transcribe:UntagResource
- trustedadvisor:DescribeRisk
- trustedadvisor:DescribeRiskResources
- trustedadvisor:DescribeRisks
- trustedadvisor:DownloadRisk
- trustedadvisor:UpdateRiskStatus

**New resource types:**

- transcribe:callanalyticscategory
- transcribe:callanalyticsjob
- transcribe:languagemodel
- transcribe:medicaltranscriptionjob
- transcribe:medicalvocabulary
- transcribe:transcriptionjob
- transcribe:vocabulary
- transcribe:vocabularyfilter

**New condition keys:**

- mgn:CreateAction
- transcribe:RequestTag/${TagKey}
- transcribe:ResourceTag/${TagKey}
- transcribe:TagKeys

## [0.329.0](https://github.com/udondan/iam-floyd/compare/v0.328.0...v0.329.0) (2022-03-01)


## [0.328.0](https://github.com/udondan/iam-floyd/compare/v0.327.0...v0.328.0) (2022-02-26)

**New actions:**

- outposts:CreatePrivateConnectivityConfig
- outposts:GetPrivateConnectivityConfig
- s3:GetObjectAttributes
- s3:GetObjectVersionAttributes

## [0.327.0](https://github.com/udondan/iam-floyd/compare/v0.326.0...v0.327.0) (2022-02-25)

**New actions:**

- amplifybackend:CreateBackendStorage
- amplifybackend:DeleteBackendStorage
- amplifybackend:GetBackendStorage
- amplifybackend:ImportBackendStorage
- amplifybackend:ListS3Buckets
- amplifybackend:UpdateBackendStorage
- comprehendmedical:DescribeSNOMEDCTInferenceJob
- comprehendmedical:InferSNOMEDCT
- comprehendmedical:ListSNOMEDCTInferenceJobs
- comprehendmedical:StartSNOMEDCTInferenceJob
- comprehendmedical:StopSNOMEDCTInferenceJob
- mobiletargeting:SendOTPMessage

**Updated action access level:**

- mobiletargeting:VerifyOTPMessage: Read -> Write

**New resource types:**

- amplifybackend:storage

## [0.326.0](https://github.com/udondan/iam-floyd/compare/v0.325.0...v0.326.0) (2022-02-24)


## [0.325.0](https://github.com/udondan/iam-floyd/compare/v0.324.0...v0.325.0) (2022-02-23)

**New actions:**

- datasync:CreateLocationFsxLustre
- datasync:CreateLocationHdfs
- datasync:DescribeLocationFsxLustre
- datasync:DescribeLocationHdfs
- datasync:UpdateLocationHdfs
- profile:CreateIntegrationWorkflow
- profile:DeleteWorkflow
- profile:GetWorkflow
- profile:GetWorkflowSteps
- profile:ListWorkflows

## [0.324.0](https://github.com/udondan/iam-floyd/compare/v0.323.0...v0.324.0) (2022-02-22)

**New actions:**

- timestream:PrepareQuery

## [0.323.0](https://github.com/udondan/iam-floyd/compare/v0.322.0...v0.323.0) (2022-02-19)

**New actions:**

- proton:NotifyResourceDeploymentStatusChange

## [0.322.0](https://github.com/udondan/iam-floyd/compare/v0.321.0...v0.322.0) (2022-02-18)

**New actions:**

- connect:StartContactStreaming
- connect:StopContactStreaming
- evidently:ListTagsForResource
- evidently:TagResource
- evidently:UntagResource
- honeycode:DeleteDomains
- honeycode:ListTagsForResource
- honeycode:TagResource
- honeycode:UntagResource
- mediatailor:ConfigureLogsForPlaybackConfiguration
- mediatailor:CreatePrefetchSchedule
- mediatailor:DeletePrefetchSchedule
- mediatailor:GetPrefetchSchedule
- mediatailor:ListPrefetchSchedules
- redshift:AddPartner
- redshift:AuthorizeEndpointAccess
- redshift:CreateEndpointAccess
- redshift:DeleteEndpointAccess
- redshift:DeletePartner
- redshift:DescribeEndpointAccess
- redshift:DescribeEndpointAuthorization
- redshift:DescribePartners
- redshift:ModifyEndpointAccess
- redshift:RevokeEndpointAccess
- redshift:UpdatePartnerStatus
- workspaces:CreateConnectClientAddIn
- workspaces:DeleteConnectClientAddIn
- workspaces:DescribeConnectClientAddIns
- workspaces:UpdateConnectClientAddIn

**Updated action access level:**

- redshift:AuthorizeClusterSecurityGroupIngress: Permissions management -> Write
- redshift:RevokeClusterSecurityGroupIngress: Permissions management -> Write
- redshift:RotateEncryptionKey: Permissions management -> Write

**New resource types:**

- mediatailor:prefetchSchedule

## [0.321.0](https://github.com/udondan/iam-floyd/compare/v0.320.0...v0.321.0) (2022-02-17)

**New actions:**

- glue:GetPartitionIndexes

**New condition keys:**

- sns:ResourceTag/${TagKey}

## [0.320.0](https://github.com/udondan/iam-floyd/compare/v0.319.0...v0.320.0) (2022-02-16)

**New actions:**

- cloudformation:DescribeChangeSetHook
- ds:DescribeClientAuthenticationSettings
- medialive:ClaimDevice
- mobiletargeting:CreateInAppTemplate
- mobiletargeting:DeleteInAppTemplate
- mobiletargeting:GetInAppTemplate
- mobiletargeting:UpdateInAppTemplate
- mobiletargeting:VerifyOTPMessage
- outposts:GetOrder
- quicksight:AccountConfigurations
- quicksight:ScopeDownPolicy
- wafv2:ListAvailableManagedRuleGroupVersions

**Updated action access level:**

- ds:ConnectDirectory: Tagging -> Write
- ds:CreateDirectory: Tagging -> Write
- ds:CreateIdentityPoolDirectory: Tagging -> Write
- ds:CreateMicrosoftAD: Tagging -> Write

## [0.319.0](https://github.com/udondan/iam-floyd/compare/v0.318.0...v0.319.0) (2022-02-11)

**New actions:**

- iot:PutVerificationStateOnViolation
- kendra:AssociateEntitiesToExperience
- kendra:AssociatePersonasToEntities
- kendra:CreateExperience
- kendra:DeleteExperience
- kendra:DescribeExperience
- kendra:DisassociateEntitiesFromExperience
- kendra:DisassociatePersonasFromEntities
- kendra:GetSnapshots
- kendra:ListEntityPersonas
- kendra:ListExperienceEntities
- kendra:ListExperiences
- kendra:UpdateExperience
- kinesis:UpdateStreamMode
- proton:ListEnvironmentOutputs
- proton:ListEnvironmentProvisionedResources
- proton:ListServiceInstanceOutputs
- proton:ListServiceInstanceProvisionedResources
- proton:ListServicePipelineOutputs
- proton:ListServicePipelineProvisionedResources

**New resource types:**

- kendra:experience

## [0.318.0](https://github.com/udondan/iam-floyd/compare/v0.317.0...v0.318.0) (2022-02-10)

**New actions:**

- apprunner:CreateVpcConnector
- apprunner:DeleteVpcConnector
- apprunner:DescribeVpcConnector
- apprunner:ListVpcConnectors
- ram:ListPermissionVersions
- s3:InitiateReplication
- ssm:UnlabelParameterVersion
- storagegateway:UpdateSMBLocalGroups

**New resource types:**

- apprunner:vpcconnector

**New condition keys:**

- apprunner:VpcConnectorArn

## [0.317.0](https://github.com/udondan/iam-floyd/compare/v0.316.0...v0.317.0) (2022-02-08)

**New actions:**

- ec2:CreateCoipPoolPermission
- ec2:CreateLocalGatewayRouteTablePermission
- ec2:DeleteCoipPoolPermission
- ec2:DeleteLocalGatewayRouteTablePermission
- ec2:DescribeLocalGatewayRouteTablePermissions

**Updated action access level:**

- ssm:ModifyDocumentPermission: Write -> Permissions management

**New condition keys:**

- ec2:Add/group
- ec2:Add/userId
- ec2:Attribute
- ec2:InsideTunnelIpv6Cidr
- ec2:InstanceAutoRecovery
- ec2:InstanceMetadataTags
- ec2:Remove/group
- ec2:Remove/userId
- ec2:ReplayWindowSizePackets
- synthetics:Names
- synthetics:RequestTag/${TagKey}
- synthetics:TagKeys

## [0.316.0](https://github.com/udondan/iam-floyd/compare/v0.315.0...v0.316.0) (2022-02-05)

**New actions:**

- fis:GetTargetResourceType
- fis:ListTargetResourceTypes

## [0.315.0](https://github.com/udondan/iam-floyd/compare/v0.314.0...v0.315.0) (2022-02-04)

**New actions:**

- comprehend:DeleteResourcePolicy
- comprehend:DescribeResourcePolicy
- comprehend:ImportModel
- comprehend:PutResourcePolicy
- connect:AssociateDefaultVocabulary
- connect:CreateVocabulary
- connect:DeleteVocabulary
- connect:DescribeVocabulary
- connect:ListDefaultVocabularies
- connect:SearchVocabularies
- fsx:ReleaseFileSystemNfsV3Locks
- imagebuilder:ImportVmImage

**New resource types:**

- connect:vocabulary

**New condition keys:**

- secretsmanager:ModifyRotationRules
- secretsmanager:RotateImmediately

## [0.314.0](https://github.com/udondan/iam-floyd/compare/v0.313.0...v0.314.0) (2022-02-01)

:warning: **Removed actions:**

- forecast:DescribeExplainablity

**New actions:**

- forecast:DescribeExplainability
- geo:CalculateRouteMatrix

**Updated action access level:**

- geo:ListDevicePositions: List -> Read

## [0.313.0](https://github.com/udondan/iam-floyd/compare/v0.312.0...v0.313.0) (2022-01-29)

**New actions:**

- es:DescribeDomainChangeProgress
- kafka:CreateClusterV2
- kafka:DescribeClusterV2
- kafka:ListClustersV2

## [0.312.0](https://github.com/udondan/iam-floyd/compare/v0.311.0...v0.312.0) (2022-01-28)

:warning: **Removed actions:**

- appstream:AssociateApplicatonToEntitlement
- appstream:DisassociateApplicatonFromEntitlement

**New actions:**

- appflow:DescribeConnector
- appflow:ListConnectors
- appflow:RegisterConnector
- appflow:UnRegisterConnector
- appstream:AssociateApplicationToEntitlement
- appstream:DisassociateApplicationFromEntitlement
- frauddetector:GetEventPredictionMetadata
- frauddetector:ListEventPredictions

**New resource types:**

- appflow:connector

## [0.311.0](https://github.com/udondan/iam-floyd/compare/v0.310.0...v0.311.0) (2022-01-26)

**New services:**

- codedeploy-commands-secure

## [0.310.0](https://github.com/udondan/iam-floyd/compare/v0.309.0...v0.310.0) (2022-01-25)

**New actions:**

- workmail:DeleteEmailMonitoringConfiguration
- workmail:DescribeEmailMonitoringConfiguration
- workmail:PutEmailMonitoringConfiguration

## [0.309.0](https://github.com/udondan/iam-floyd/compare/v0.308.0...v0.309.0) (2022-01-22)

**New condition keys:**

- route53-recovery-cluster:AllowSafetyRulesOverrides

## [0.308.0](https://github.com/udondan/iam-floyd/compare/v0.307.0...v0.308.0) (2022-01-21)

:warning: **Removed actions:**

- finspace:DeleteUser

**New actions:**

- cognito-idp:RevokeToken
- finspace:ResetUserPassword
- finspace:UpdateUser

## [0.307.0](https://github.com/udondan/iam-floyd/compare/v0.306.0...v0.307.0) (2022-01-20)


## [0.306.0](https://github.com/udondan/iam-floyd/compare/v0.305.0...v0.306.0) (2022-01-15)

:warning: **Removed resource types:**

- iotdeviceadvisor:suitedefinition
- iotdeviceadvisor:suiterun

**New actions:**

- eks:DeregisterCluster
- eks:RegisterCluster
- iotdeviceadvisor:GetEndpoint
- lookoutmetrics:DeactivateAnomalyDetector

**New resource types:**

- iotdeviceadvisor:Suitedefinition
- iotdeviceadvisor:Suiterun

**New condition keys:**

- ssm:DocumentCategories

## [0.305.0](https://github.com/udondan/iam-floyd/compare/v0.304.0...v0.305.0) (2022-01-14)

**New actions:**

- appsync:AssociateApi
- appsync:CreateDomainName
- appsync:DeleteDomainName
- appsync:DisassociateApi
- appsync:GetApiAssociation
- appsync:GetDomainName
- appsync:ListDomainNames
- appsync:UpdateDomainName
- cloudtrail:CancelQuery
- cloudtrail:CreateEventDataStore
- cloudtrail:DeleteEventDataStore
- cloudtrail:DescribeQuery
- cloudtrail:GetEventDataStore
- cloudtrail:GetQueryResults
- cloudtrail:ListEventDataStores
- cloudtrail:ListQueries
- cloudtrail:RestoreEventDataStore
- cloudtrail:StartQuery
- cloudtrail:UpdateEventDataStore
- ec2:DescribeFastLaunchImages
- ec2:DisableFastLaunch
- ec2:EnableFastLaunch
- ec2:ModifyPrivateDnsNameOptions
- ec2:ModifyVpcEndpointServicePayerResponsibility
- glue:BatchGetBlueprints
- glue:CreateBlueprint
- glue:DeleteBlueprint
- glue:GetBlueprint
- glue:GetBlueprintRun
- glue:GetBlueprintRuns
- glue:ListBlueprints
- glue:StartBlueprintRun
- glue:UpdateBlueprint
- network-firewall:DescribeRuleGroupMetadata

**New resource types:**

- appsync:domain
- cloudtrail:eventdatastore
- glue:blueprint
- mediastore:folder
- mediastore:object

**New condition keys:**

- cloudtrail:RequestTag/${TagKey}
- cloudtrail:ResourceTag/${TagKey}
- cloudtrail:TagKeys
- kms:EncryptionContext
- kms:RecipientAttestation
- mediastore:RequestTag/${TagKey}
- mediastore:ResourceTag/${TagKey}
- mediastore:TagKeys

## [0.304.0](https://github.com/udondan/iam-floyd/compare/v0.303.0...v0.304.0) (2022-01-08)

:warning: **Removed resource types:**

- bugbust:ProfilingGroup
- bugbust:codereview

**New actions:**

- appstream:AssociateApplicatonToEntitlement
- appstream:CreateEntitlement
- appstream:DeleteEntitlement
- appstream:DescribeEntitlements
- appstream:DisassociateApplicatonFromEntitlement
- appstream:ListEntitledApplications
- appstream:UpdateEntitlement
- elasticfilesystem:CreateReplicationConfiguration
- elasticfilesystem:DeleteReplicationConfiguration
- elasticfilesystem:DescribeReplicationConfigurations
- geo:SearchPlaceIndexForSuggestions
- geo:UpdateMap
- geo:UpdatePlaceIndex
- geo:UpdateRouteCalculator
- glue:BatchUpdatePartition
- glue:CancelStatement
- glue:CreatePartitionIndex
- glue:CreateSession
- glue:DeleteColumnStatisticsForPartition
- glue:DeleteColumnStatisticsForTable
- glue:DeletePartitionIndex
- glue:DeleteSession
- glue:GetColumnStatisticsForPartition
- glue:GetColumnStatisticsForTable
- glue:GetSession
- glue:GetStatement
- glue:ListSessions
- glue:ListStatements
- glue:RunStatement
- glue:StopSession
- glue:UpdateColumnStatisticsForPartition
- glue:UpdateColumnStatisticsForTable
- iotwireless:DeleteQueuedMessages
- iotwireless:ListQueuedMessages
- lakeformation:CancelTransaction
- lakeformation:CommitTransaction
- lakeformation:CreateDataCellsFilter
- lakeformation:DeleteDataCellsFilter
- lakeformation:DeleteObjectsOnCancel
- lakeformation:DescribeTransaction
- lakeformation:ExtendTransaction
- lakeformation:GetQueryState
- lakeformation:GetQueryStatistics
- lakeformation:GetTableObjects
- lakeformation:GetWorkUnitResults
- lakeformation:GetWorkUnits
- lakeformation:ListDataCellsFilter
- lakeformation:ListTableStorageOptimizers
- lakeformation:ListTransactions
- lakeformation:StartQueryPlanning
- lakeformation:StartTransaction
- lakeformation:UpdateTableObjects
- lakeformation:UpdateTableStorageOptimizer
- lex:CreateCustomVocabulary
- lex:DeleteCustomVocabulary
- lex:DescribeCustomVocabulary
- lex:DescribeCustomVocabularyMetadata
- lex:UpdateCustomVocabulary
- lookoutmetrics:ListAnomalyGroupRelatedMetrics
- pi:GetResourceMetadata
- pi:ListAvailableResourceDimensions
- pi:ListAvailableResourceMetrics
- proton:CreateRepository
- proton:CreateTemplateSyncConfig
- proton:DeleteRepository
- proton:DeleteTemplateSyncConfig
- proton:GetRepository
- proton:GetRepositorySyncStatus
- proton:GetTemplateSyncConfig
- proton:GetTemplateSyncStatus
- proton:ListRepositories
- proton:ListRepositorySyncDefinitions
- proton:UpdateRepository
- proton:UpdateTemplateSyncConfig
- s3:PutAccessPointPublicAccessBlock
- shield:DisableApplicationLayerAutomaticResponse
- shield:EnableApplicationLayerAutomaticResponse
- shield:UpdateApplicationLayerAutomaticResponse

**Updated action access level:**

- aws-marketplace:ListChangeSets: Read -> List
- aws-marketplace:ListEntities: Read -> List

**New resource types:**

- glue:session
- proton:repository

## [0.303.0](https://github.com/udondan/iam-floyd/compare/v0.302.0...v0.303.0) (2021-12-21)

:warning: **Removed actions:**

- sqlworkbench:GetKMSKey
- sqlworkbench:ListBuckets
- sqlworkbench:ListKMSKeyAliases
- sqlworkbench:ListKMSKeys

**New actions:**

- detective:DescribeOrganizationConfiguration
- detective:DisableOrganizationAdminAccount
- detective:EnableOrganizationAdminAccount
- detective:ListOrganizationAdminAccounts
- detective:UpdateOrganizationConfiguration
- lookoutvision:DescribeModelPackagingJob
- lookoutvision:ListModelPackagingJobs
- lookoutvision:StartModelPackagingJob
- outposts:CancelOrder
- outposts:CreateSite
- outposts:GetCatalogItem
- outposts:GetSite
- outposts:GetSiteAddress
- outposts:ListCatalogItems
- outposts:ListOrders
- outposts:UpdateOutpost
- outposts:UpdateSite
- outposts:UpdateSiteAddress
- outposts:UpdateSiteRackPhysicalProperties
- redshift:CreateAuthenticationProfile
- redshift:DeleteAuthenticationProfile
- redshift:DescribeAuthenticationProfiles
- redshift:ModifyAuthenticationProfile
- route53-recovery-control-config:ListTagsForResource
- route53-recovery-control-config:TagResource
- route53-recovery-control-config:UntagResource
- route53domains:DeleteDomain
- route53domains:ListPrices
- sqlworkbench:ListTaggedResources

**Updated action access level:**

- route53domains:ListTagsForDomain: List -> Read

**New condition keys:**

- route53-recovery-control-config:RequestTag/${TagKey}
- route53-recovery-control-config:ResourceTag/${TagKey}
- route53-recovery-control-config:TagKeys

## [0.302.0](https://github.com/udondan/iam-floyd/compare/v0.301.0...v0.302.0) (2021-12-12)

**New actions:**

- appconfig:GetLatestConfiguration
- appconfig:StartConfigurationSession
- cloudfront:CreateResponseHeadersPolicy
- cloudfront:DeleteResponseHeadersPolicy
- cloudfront:GetResponseHeadersPolicy
- cloudfront:GetResponseHeadersPolicyConfig
- cloudfront:ListDistributionsByResponseHeadersPolicyId
- cloudfront:ListResponseHeadersPolicies
- cloudfront:UpdateResponseHeadersPolicy
- ec2:AllocateIpamPoolCidr
- ec2:CreateIpam
- ec2:CreateIpamPool
- ec2:CreateIpamScope
- ec2:CreateNetworkInsightsAccessScope
- ec2:CreatePublicIpv4Pool
- ec2:DeleteIpam
- ec2:DeleteIpamPool
- ec2:DeleteIpamScope
- ec2:DeleteNetworkInsightsAccessScope
- ec2:DeleteNetworkInsightsAccessScopeAnalysis
- ec2:DeletePublicIpv4Pool
- ec2:DeprovisionIpamPoolCidr
- ec2:DeprovisionPublicIpv4PoolCidr
- ec2:DescribeIpamPools
- ec2:DescribeIpamScopes
- ec2:DescribeIpams
- ec2:DescribeNetworkInsightsAccessScopeAnalyses
- ec2:DescribeNetworkInsightsAccessScopes
- ec2:DescribeSnapshotTierStatus
- ec2:DisableIpamOrganizationAdminAccount
- ec2:EnableIpamOrganizationAdminAccount
- ec2:GetInstanceTypesFromInstanceRequirements
- ec2:GetIpamAddressHistory
- ec2:GetIpamPoolAllocations
- ec2:GetIpamPoolCidrs
- ec2:GetIpamResourceCidrs
- ec2:GetNetworkInsightsAccessScopeAnalysisFindings
- ec2:GetNetworkInsightsAccessScopeContent
- ec2:GetSpotPlacementScores
- ec2:ListSnapshotsInRecycleBin
- ec2:ModifyIpam
- ec2:ModifyIpamPool
- ec2:ModifyIpamResourceCidr
- ec2:ModifyIpamScope
- ec2:ModifySnapshotTier
- ec2:MoveByoipCidrToIpam
- ec2:ProvisionIpamPoolCidr
- ec2:ProvisionPublicIpv4PoolCidr
- ec2:ReleaseIpamPoolAllocation
- ec2:RestoreSnapshotFromRecycleBin
- ec2:RestoreSnapshotTier
- ec2:StartNetworkInsightsAccessScopeAnalysis
- ssm:RegisterManagedInstance
- textract:AnalyzeID

**Updated action access level:**

- ssm:DescribePatchGroupState: Read -> List
- ssm:ListDocumentMetadataHistory: Read -> List

**New resource types:**

- appconfig:configuration
- cloudfront:response-headers-policy
- ec2:ipam
- ec2:ipam-pool
- ec2:ipam-scope
- ec2:network-insights-access-scope
- ec2:network-insights-access-scope-analysis
- kafka:group
- kafka:topic
- kafka:transactional-id

**New condition keys:**

- ec2:Ipv4IpamPoolId
- ec2:Ipv6IpamPoolId

## [0.301.0](https://github.com/udondan/iam-floyd/compare/v0.300.0...v0.301.0) (2021-12-04)

**New services:**

- amplifyuibuilder
- evidently
- iotfleetwise
- iotroborunner
- iottwinmaker
- rbin
- refactor-spaces
- rum
- serviceextract
- workspaces-web

**New actions:**

- braket:CancelJob
- braket:CreateJob
- braket:GetJob
- braket:SearchJobs
- compute-optimizer:DeleteRecommendationPreferences
- compute-optimizer:GetEffectiveRecommendationPreferences
- compute-optimizer:GetRecommendationPreferences
- compute-optimizer:PutRecommendationPreferences
- dataexchange:SendApiAsset
- ecr:BatchGetRepositoryScanningConfiguration
- ecr:CreatePullThroughCacheRule
- ecr:DeletePullThroughCacheRule
- ecr:DescribePullThroughCacheRules
- ecr:GetRegistryScanningConfiguration
- ecr:PutRegistryScanningConfiguration
- fsx:CreateDataRepositoryAssociation
- fsx:CreateSnapshot
- fsx:DeleteDataRepositoryAssociation
- fsx:DeleteSnapshot
- fsx:DescribeDataRepositoryAssociations
- fsx:DescribeSnapshots
- fsx:RestoreVolumeFromSnapshot
- fsx:UpdateDataRepositoryAssociation
- fsx:UpdateSnapshot
- lex:DescribeBotRecommendation
- lex:ListBotRecommendations
- lex:ListRecommendedIntents
- lex:SearchAssociatedTranscripts
- lex:StartBotRecommendation
- lex:UpdateBotRecommendation
- networkmanager:AcceptAttachment
- networkmanager:AssociateConnectPeer
- networkmanager:CreateConnectAttachment
- networkmanager:CreateConnectPeer
- networkmanager:CreateCoreNetwork
- networkmanager:CreateSiteToSiteVpnAttachment
- networkmanager:CreateVpcAttachment
- networkmanager:DeleteAttachment
- networkmanager:DeleteConnectPeer
- networkmanager:DeleteCoreNetwork
- networkmanager:DeleteCoreNetworkPolicyVersion
- networkmanager:DeleteResourcePolicy
- networkmanager:DisassociateConnectPeer
- networkmanager:ExecuteCoreNetworkChangeSet
- networkmanager:GetConnectAttachment
- networkmanager:GetConnectPeer
- networkmanager:GetConnectPeerAssociations
- networkmanager:GetCoreNetwork
- networkmanager:GetCoreNetworkChangeSet
- networkmanager:GetCoreNetworkPolicy
- networkmanager:GetResourcePolicy
- networkmanager:GetSiteToSiteVpnAttachment
- networkmanager:GetVpcAttachment
- networkmanager:ListAttachments
- networkmanager:ListConnectPeers
- networkmanager:ListCoreNetworkPolicyVersions
- networkmanager:ListCoreNetworks
- networkmanager:PutCoreNetworkPolicy
- networkmanager:PutResourcePolicy
- networkmanager:RejectAttachment
- networkmanager:RestoreCoreNetworkPolicyVersion
- networkmanager:UpdateCoreNetwork
- networkmanager:UpdateVpcAttachment
- personalize:CreateBatchSegmentJob
- personalize:CreateRecommender
- personalize:DeleteRecommender
- personalize:DescribeBatchSegmentJob
- personalize:DescribeRecommender
- personalize:ListBatchSegmentJobs
- personalize:ListRecommenders
- personalize:UpdateRecommender
- sagemaker:CreateInferenceRecommendationsJob
- sagemaker:CreateLineageGroupPolicy
- sagemaker:DeleteLineageGroupPolicy
- sagemaker:DescribeInferenceRecommendationsJob
- sagemaker:DescribeLineageGroup
- sagemaker:GetLineageGroupPolicy
- sagemaker:ListInferenceRecommendationsJobs
- sagemaker:ListLineageGroups
- sagemaker:ListModelMetadata
- sagemaker:PutLineageGroupPolicy
- sagemaker:QueryLineage
- sagemaker:StopInferenceRecommendationsJob
- timestream:CreateScheduledQuery
- timestream:DeleteScheduledQuery
- timestream:DescribeScheduledQuery
- timestream:ExecuteScheduledQuery
- timestream:ListScheduledQueries
- timestream:UpdateScheduledQuery
- wellarchitected:CreateLensShare
- wellarchitected:CreateLensVersion
- wellarchitected:DeleteLens
- wellarchitected:DeleteLensShare
- wellarchitected:ExportLens
- wellarchitected:GetLens
- wellarchitected:ImportLens
- wellarchitected:ListLensShares

**Updated action access level:**

- networkmanager:GetTransitGatewayConnectPeerAssociations: List -> Read

**New resource types:**

- braket:job
- fsx:association
- fsx:snapshot
- networkmanager:attachment
- networkmanager:connect-peer
- networkmanager:core-network
- personalize:batchSegmentJob
- personalize:recommender
- sagemaker:inference-recommendations-job
- sagemaker:lineage-group
- timestream:scheduled-query
- wellarchitected:lens

**New condition keys:**

- compute-optimizer:ResourceType
- fsx:ParentVolumeId
- networkmanager:subnetArns
- networkmanager:vpcArn
- networkmanager:vpnConnectionArn
- s3:x-amz-object-ownership

## [0.300.0](https://github.com/udondan/iam-floyd/compare/v0.286.0...v0.300.0) (2021-12-03)

### Breaking changes

Starting with this version, the CDK package is only compatible with AWS CDK v2.

For CDK v1 you can use any version up to 0.285.0:<br>
[![npm CDK v1](https://img.shields.io/badge/npm-0.285.0-yellow)](https://www.npmjs.com/package/cdk-iam-floyd/v/0.285.0)

## [0.285.0](https://github.com/udondan/iam-floyd/compare/v0.284.0...v0.285.0) (2021-11-27)

**New actions:**

- iot:DescribeManagedJobTemplate
- iot:ListManagedJobTemplates
- iotsitewise:AssociateTimeSeriesToAssetProperty
- iotsitewise:DeleteTimeSeries
- iotsitewise:DescribeTimeSeries
- iotsitewise:DisassociateTimeSeriesFromAssetProperty
- iotsitewise:GetInterpolatedAssetPropertyValues
- iotsitewise:ListTimeSeries
- quicksight:CreateEmailCustomizationTemplate
- quicksight:DeleteEmailCustomizationTemplate
- quicksight:DescribeEmailCustomizationTemplate
- quicksight:UpdateEmailCustomizationTemplate

**Updated action access level:**

- workspaces:DescribeTags: List -> Read

**New resource types:**

- iotsitewise:time-series
- quicksight:emailCustomizationTemplate

**New condition keys:**

- iotsitewise:isAssociatedWithAssetProperty
- iotsitewise:propertyAlias

## [0.284.0](https://github.com/udondan/iam-floyd/compare/v0.283.0...v0.284.0) (2021-11-25)

**New services:**

- backup-gateway
- ssm-guiconnect

**New actions:**

- connect:CreateContactFlowModule
- connect:DeleteContactFlow
- connect:DeleteContactFlowModule
- connect:DescribeContactFlowModule
- connect:ListContactFlowModules
- connect:UpdateContactFlowMetadata
- connect:UpdateContactFlowModuleMetadata
- connect:UpdatedescribeContent
- dynamodb:RestoreTableFromAwsBackup
- dynamodb:StartAwsBackupJob
- iotwireless:GetNetworkAnalyzerConfiguration
- iotwireless:StartNetworkAnalyzerStream
- iotwireless:UpdateNetworkAnalyzerConfiguration
- profile:GetAutoMergingPreview
- profile:GetIdentityResolutionJob
- profile:ListIdentityResolutionJobs

**New resource types:**

- connect:contact-flow-module
- connect:wildcard-agent-status
- connect:wildcard-contact-flow
- connect:wildcard-phone-number
- connect:wildcard-queue
- connect:wildcard-quick-connect

## [0.283.0](https://github.com/udondan/iam-floyd/compare/v0.282.0...v0.283.0) (2021-11-24)

**New actions:**

- mobiletargeting:GetInAppMessages
- rds:RebootDBCluster

**New condition keys:**

- rds:BackupTarget

## [0.282.0](https://github.com/udondan/iam-floyd/compare/v0.281.0...v0.282.0) (2021-11-23)

**New actions:**

- appstream:AssociateApplicationFleet
- appstream:CreateAppBlock
- appstream:CreateApplication
- appstream:DeleteAppBlock
- appstream:DeleteApplication
- appstream:DescribeAppBlocks
- appstream:DescribeApplicationFleetAssociations
- appstream:DescribeApplications
- appstream:DisassociateApplicationFleet
- appstream:UpdateApplication
- kafka:UpdateConnectivity

**Updated action access level:**

- kafka:ListTagsForResource: List -> Read

**New resource types:**

- appstream:app-block
- appstream:application

**New condition keys:**

- cloud9:OwnerArn

## [0.281.0](https://github.com/udondan/iam-floyd/compare/v0.280.0...v0.281.0) (2021-11-21)

:warning: **Removed condition keys:**

- s3:x-amz-server-side-encryption-customer-algorithm

**New actions:**

- databrew:CreateRuleset
- databrew:DeleteRuleset
- databrew:DescribeRuleset
- databrew:ListRulesets
- databrew:UpdateRuleset
- forecast:CreateAutoPredictor
- forecast:CreateExplainability
- forecast:CreateExplainabilityExport
- forecast:DeleteExplainability
- forecast:DeleteExplainabilityExport
- forecast:DescribeAutoPredictor
- forecast:DescribeExplainabilityExport
- forecast:DescribeExplainablity
- forecast:ListExplainabilities
- forecast:ListExplainabilityExports
- ivs:GetStreamSession
- ivs:ListStreamSessions

**Updated action access level:**

- forecast:ListDatasetGroups: List -> Read
- forecast:ListDatasetImportJobs: List -> Read
- forecast:ListDatasets: List -> Read
- forecast:ListForecastExportJobs: List -> Read
- forecast:ListForecasts: List -> Read
- forecast:ListPredictorBacktestExportJobs: List -> Read
- forecast:ListPredictors: List -> Read

**New resource types:**

- databrew:Ruleset
- forecast:explainability
- forecast:explainabilityExport

## [0.280.0](https://github.com/udondan/iam-floyd/compare/v0.279.0...v0.280.0) (2021-11-19)

**New actions:**

- auditmanager:GetInsights
- auditmanager:GetInsightsByAssessment
- auditmanager:ListAssessmentControlInsightsByControlDomain
- auditmanager:ListControlDomainInsights
- auditmanager:ListControlDomainInsightsByAssessment
- auditmanager:ListControlInsightsByControlDomain

## [0.279.0](https://github.com/udondan/iam-floyd/compare/v0.278.0...v0.279.0) (2021-11-18)

**New services:**

- drs
- inspector2

**New actions:**

- sagemaker:UpdateProject

## [0.278.0](https://github.com/udondan/iam-floyd/compare/v0.277.0...v0.278.0) (2021-11-16)

**New actions:**

- connect:CreateSecurityProfile
- connect:DeleteSecurityProfile
- connect:DescribeContact
- connect:DescribeSecurityProfile
- connect:ListContactReferences
- connect:ListSecurityProfilePermissions
- connect:UpdateContact
- connect:UpdateContactSchedule
- connect:UpdateSecurityProfile

## [0.277.0](https://github.com/udondan/iam-floyd/compare/v0.276.0...v0.277.0) (2021-11-13)

**New actions:**

- chime:DeregisterAppInstanceUserEndpoint
- chime:DescribeAppInstanceUserEndpoint
- chime:GetChannelMembershipPreferences
- chime:ListAppInstanceUserEndpoints
- chime:PutChannelMembershipPreferences
- chime:RegisterAppInstanceUserEndpoint
- chime:UpdateAppInstanceUserEndpoint

**New condition keys:**

- sts:AWSServiceName

## [0.276.0](https://github.com/udondan/iam-floyd/compare/v0.275.0...v0.276.0) (2021-11-12)

**New services:**

- resiliencehub

**New actions:**

- route53resolver:GetResolverConfig
- route53resolver:ListResolverConfigs
- route53resolver:UpdateResolverConfig

**New resource types:**

- route53resolver:resolver-config

## [0.275.0](https://github.com/udondan/iam-floyd/compare/v0.274.0...v0.275.0) (2021-11-11)

:warning: **Removed actions:**

- greengrass:ListTagsForResource

**New actions:**

- batch:CreateSchedulingPolicy
- batch:DeleteSchedulingPolicy
- batch:DescribeSchedulingPolicies
- batch:ListSchedulingPolicies
- batch:UpdateSchedulingPolicy
- devops-guru:DescribeOrganizationHealth
- devops-guru:DescribeOrganizationOverview
- devops-guru:DescribeOrganizationResourceCollectionHealth
- devops-guru:ListOrganizationInsights
- devops-guru:SearchOrganizationInsights
- greengrass:BatchAssociateClientDeviceWithCoreDevice
- greengrass:BatchDisassociateClientDeviceFromCoreDevice
- greengrass:ListClientDevicesAssociatedWithCoreDevice

**New resource types:**

- batch:scheduling-policy

**New condition keys:**

- batch:ShareIdentifier

## [0.274.0](https://github.com/udondan/iam-floyd/compare/v0.273.0...v0.274.0) (2021-11-10)

**New actions:**

- directconnect:ConfirmCustomerAgreement
- directconnect:DescribeCustomerMetadata
- directconnect:DescribeRouterConfiguration
- directconnect:UpdateDirectConnectGateway
- ec2:DescribeCapacityReservationFleets
- mgn:CreateVcenterClientForMgn
- mgn:DeleteVcenterClient
- mgn:DescribeVcenterClients
- mgn:GetVcenterClientCommandsForMgn
- mgn:NotifyVcenterClientStartedForMgn
- mgn:SendVcenterClientCommandResultForMgn
- mgn:SendVcenterClientLogsForMgn
- mgn:SendVcenterClientMetricsForMgn
- mgn:StartReplication
- mgn:UpdateSourceServerReplicationType

**Updated action access level:**

- directconnect:DescribeLocations: List -> Read
- route53:ListGeoLocations: List -> Read
- route53:ListHealthChecks: List -> Read
- route53:ListReusableDelegationSets: List -> Read
-route53:ListTagsForResource;List
- route53:ListTagsForResources: List -> Read
+route53:ListTagsForResources;Read
- route53:ListTagsForResources: List -> Read
- route53:ListTrafficPolicyInstances: List -> Read
 route53:ListTrafficPolicyInstancesByHostedZone;List
 route53:ListTrafficPolicyInstancesByPolicy;List

**New resource types:**

- mgn:VcenterClientResource

**New condition keys:**

- secretsmanager:AddReplicaRegions
- secretsmanager:ForceOverwriteReplicaSecret

## [0.273.0](https://github.com/udondan/iam-floyd/compare/v0.272.0...v0.273.0) (2021-11-06)

**New actions:**

- iotwireless:AssociateMulticastGroupWithFuotaTask
- iotwireless:AssociateWirelessDeviceWithFuotaTask
- iotwireless:AssociateWirelessDeviceWithMulticastGroup
- iotwireless:CancelMulticastGroupSession
- iotwireless:CreateFuotaTask
- iotwireless:CreateMulticastGroup
- iotwireless:DeleteFuotaTask
- iotwireless:DeleteMulticastGroup
- iotwireless:DisassociateMulticastGroupFromFuotaTask
- iotwireless:DisassociateWirelessDeviceFromFuotaTask
- iotwireless:DisassociateWirelessDeviceFromMulticastGroup
- iotwireless:GetFuotaTask
- iotwireless:GetMulticastGroup
- iotwireless:GetMulticastGroupSession
- iotwireless:GetResourceEventConfiguration
- iotwireless:ListFuotaTasks
- iotwireless:ListMulticastGroups
- iotwireless:ListMulticastGroupsByFuotaTask
- iotwireless:SendDataToMulticastGroup
- iotwireless:StartBulkAssociateWirelessDeviceWithMulticastGroup
- iotwireless:StartBulkDisassociateWirelessDeviceFromMulticastGroup
- iotwireless:StartFuotaTask
- iotwireless:StartMulticastGroupSession
- iotwireless:UpdateFuotaTask
- iotwireless:UpdateMulticastGroup
- iotwireless:UpdateResourceEventConfiguration
- securityhub:CreateFindingAggregator
- securityhub:DeleteFindingAggregator
- securityhub:GetFindingAggregator
- securityhub:ListFindingAggregators
- securityhub:UpdateFindingAggregator

**New resource types:**

- iotwireless:FuotaTask
- iotwireless:MulticastGroup
- securityhub:finding-aggregator

## [0.272.0](https://github.com/udondan/iam-floyd/compare/v0.271.0...v0.272.0) (2021-11-05)

**New actions:**

- lex:ListAggregatedUtterances
- outposts:CreateOrder
- workmail:DeleteMobileDeviceAccessOverride
- workmail:DeregisterMailDomain
- workmail:GetMailDomain
- workmail:GetMobileDeviceAccessOverride
- workmail:ListMailDomains
- workmail:ListMobileDeviceAccessOverrides
- workmail:PutMobileDeviceAccessOverride
- workmail:RegisterMailDomain
- workmail:UpdateDefaultMailDomain

**Updated action access level:**

- workmail:ListAccessControlRules: List -> Read
- workmail:ListMobileDeviceAccessRules: List -> Read

## [0.271.0](https://github.com/udondan/iam-floyd/compare/v0.270.0...v0.271.0) (2021-11-04)

**New actions:**

- rekognition:CreateDataset
- rekognition:DeleteDataset
- rekognition:DescribeDataset
- rekognition:DistributeDatasetEntries
- rekognition:ListDatasetEntries
- rekognition:ListDatasetLabels
- rekognition:UpdateDatasetEntries
- sagemaker:BatchDescribeModelPackage
- wafv2:GetManagedRuleSet
- wafv2:ListManagedRuleSets
- wafv2:PutManagedRuleSetVersions
- wafv2:UpdateManagedRuleSetVersionExpiryDate

**Updated action access level:**

- wafv2:CreateWebACL: Permissions management -> Write
- wafv2:DeleteWebACL: Permissions management -> Write
- wafv2:DescribeManagedRuleGroup: List -> Read
- wafv2:UpdateWebACL: Permissions management -> Write

**New resource types:**

- rekognition:dataset
- wafv2:managedruleset

**New condition keys:**

- sagemaker:ModelApprovalStatus

## [0.270.0](https://github.com/udondan/iam-floyd/compare/v0.269.0...v0.270.0) (2021-11-03)

**New actions:**

- networkmanager:GetNetworkResourceCounts
- networkmanager:GetNetworkResourceRelationships
- networkmanager:GetNetworkResources
- networkmanager:GetNetworkRoutes
- networkmanager:GetNetworkTelemetry
- networkmanager:GetRouteAnalysis
- networkmanager:StartRouteAnalysis
- networkmanager:UpdateNetworkResourceMetadata
- nimble:StartStreamingSession
- nimble:StopStreamingSession

## [0.269.0](https://github.com/udondan/iam-floyd/compare/v0.267.0...v0.269.0) (2021-11-02)

**New actions:**

- textract:GetExpenseAnalysis
- textract:StartExpenseAnalysis

## [0.268.0] (2021-10-30)

**New actions:**

- textract:GetExpenseAnalysis
- textract:StartExpenseAnalysis

## [0.267.0](https://github.com/udondan/iam-floyd/compare/v0.266.0...v0.267.0) (2021-10-27)

Simplification of ARN generation for all on* methods. Reduces package size and improves performance.

---

**New condition keys:**

- cloudwatch:requestInsightRuleLogGroups

## [0.266.0](https://github.com/udondan/iam-floyd/compare/v0.265.0...v0.266.0) (2021-10-27)

:warning: **Removed actions:**

- s3:DeleteBucketOwnershipControls

**New services:**

- mediaimport

**New actions:**

- mediaconvert:DeletePolicy
- mediaconvert:GetPolicy
- mediaconvert:PutPolicy
- rds:CreateCustomDBEngineVersion
- rds:DeleteCustomDBEngineVersion
- rds:ModifyCustomDBEngineVersion

**New resource types:**

- rds:cev

## [0.265.0](https://github.com/udondan/iam-floyd/compare/v0.264.0...v0.265.0) (2021-10-26)

**New actions:**

- auditmanager:DeleteAssessmentFrameworkShare
- auditmanager:ListAssessmentFrameworkShareRequests
- auditmanager:StartAssessmentFrameworkShare
- auditmanager:UpdateAssessmentFrameworkShare

**Updated action access level:**

- auditmanager:ListTagsForResource: List -> Read
- ecr:DeleteRegistryPolicy: Write -> Permissions management
- ecr:DeleteRepositoryPolicy: Write -> Permissions management
- ecr:PutRegistryPolicy: Write -> Permissions management

## [0.264.0](https://github.com/udondan/iam-floyd/compare/v0.263.0...v0.264.0) (2021-10-23)

Starting with this version, there will be no packages for Java and .Net. For all I know, they have never even worked.

---

## [0.263.0](https://github.com/udondan/iam-floyd/compare/v0.262.0...v0.263.0) (2021-10-22)

**New actions:**

- chime:AssociateChannelFlow
- chime:ChannelFlowCallback
- chime:CreateChannelFlow
- chime:DeleteChannelFlow
- chime:DescribeChannelFlow
- chime:DisassociateChannelFlow
- chime:GetChannelMessageStatus
- chime:ListChannelFlows
- chime:ListChannelsAssociatedWithChannelFlow
- chime:UpdateChannelFlow
- ec2:CancelCapacityReservationFleets
- ec2:CreateCapacityReservationFleet
- ec2:GetVpnConnectionDeviceSampleConfiguration
- ec2:GetVpnConnectionDeviceTypes
- ec2:ModifyCapacityReservationFleet
- ec2:SendSpotInstanceInterruptions
- elasticmapreduce:GetAutoTerminationPolicy
- elasticmapreduce:PutAutoTerminationPolicy
- elasticmapreduce:RemoveAutoTerminationPolicy

**Updated action access level:**

- chime:ListChannelMessages: Write -> Read
- chime:ListTagsForResource: List -> Read
- chime:RetrieveDataExports: Write -> Read

**New resource types:**

- chime:channel-flow
- ec2:capacity-reservation-fleet
- ec2:vpn-connection-device-type

**New condition keys:**

- aws-marketplace:ProductId

## [0.262.0](https://github.com/udondan/iam-floyd/compare/v0.261.0...v0.262.0) (2021-10-21)

:warning: **Removed actions:**

- panorama:CreateDevice
- panorama:CreateDeviceUpdate
- panorama:DescribeDeviceUpdate
- panorama:ListDeviceUpdates
- panorama:UpdateDevice

**New actions:**

- panorama:CreateApplicationInstance
- panorama:CreateJobForDevices
- panorama:CreateNodeFromTemplateJob
- panorama:CreatePackage
- panorama:CreatePackageImportJob
- panorama:DeletePackage
- panorama:DeregisterPackageVersion
- panorama:DescribeApplicationInstance
- panorama:DescribeApplicationInstanceDetails
- panorama:DescribeDeviceJob
- panorama:DescribeNode
- panorama:DescribeNodeFromTemplateJob
- panorama:DescribePackage
- panorama:DescribePackageImportJob
- panorama:DescribePackageVersion
- panorama:ListApplicationInstanceDependencies
- panorama:ListApplicationInstanceNodeInstances
- panorama:ListApplicationInstances
- panorama:ListDevicesJobs
- panorama:ListNodeFromTemplateJobs
- panorama:ListNodes
- panorama:ListPackageImportJobs
- panorama:ListPackages
- panorama:ProvisionDevice
- panorama:RegisterPackageVersion
- panorama:RemoveApplicationInstance
- panorama:UpdateDeviceMetadata

**New resource types:**

- panorama:applicationInstance
- panorama:package

## [0.261.0](https://github.com/udondan/iam-floyd/compare/v0.260.0...v0.261.0) (2021-10-20)

**New services:**

- migrationhub-strategy

**New actions:**

- lakeformation:AddLFTagsToResource
- lakeformation:CreateLFTag
- lakeformation:DeleteLFTag
- lakeformation:GetLFTag
- lakeformation:GetResourceLFTags
- lakeformation:ListLFTags
- lakeformation:RemoveLFTagsFromResource
- lakeformation:SearchDatabasesByLFTags
- lakeformation:SearchTablesByLFTags
- lakeformation:UpdateLFTag
- quicksight:DescribeIpRestriction
- quicksight:UpdateIpRestriction

## [0.260.0](https://github.com/udondan/iam-floyd/compare/v0.259.0...v0.260.0) (2021-10-15)

**New condition keys:**

- cloudformation:TargetRegion

## [0.259.0](https://github.com/udondan/iam-floyd/compare/v0.258.0...v0.259.0) (2021-10-14)

**New actions:**

- elasticmapreduce:AttachEditor
- elasticmapreduce:CreatePersistentAppUI
- elasticmapreduce:CreateStudioPresignedUrl
- elasticmapreduce:DescribePersistentAppUI
- elasticmapreduce:DescribeReleaseLabel
- elasticmapreduce:DetachEditor
- elasticmapreduce:GetOnClusterAppUIPresignedURL
- elasticmapreduce:GetPersistentAppUIPresignedURL
- elasticmapreduce:ListReleaseLabels

## [0.258.0](https://github.com/udondan/iam-floyd/compare/v0.257.0...v0.258.0) (2021-10-13)

:warning: **Removed condition keys:**

- ec2:Phase1DHGroupNumbers
- ec2:Phase2DHGroupNumbers
- ec2:PresharedKeys

**New actions:**

- frauddetector:CancelBatchImportJob
- frauddetector:CreateBatchImportJob
- frauddetector:DeleteBatchImportJob
- frauddetector:DeleteEventsByEventType
- frauddetector:GetBatchImportJobs
- frauddetector:GetDeleteEventsByEventTypeStatus
- frauddetector:GetEvent
- frauddetector:SendEvent
- frauddetector:UpdateEventLabel
- workspaces:CreateUpdatedWorkspaceImage

**Updated action access level:**

- frauddetector:GetDetectorVersion: List -> Read
- frauddetector:GetModelVersion: List -> Read
- frauddetector:ListTagsForResource: List -> Read
- servicequotas:ListTagsForResource: List -> Read

**New resource types:**

- frauddetector:batch-import

**New condition keys:**

- ec2:AllocationId
- ec2:Domain
- ec2:KeyPairType
- ec2:KmsKeyId
- ec2:Phase1DHGroup
- ec2:Phase2DHGroup
- ec2:PreSharedKeys
- ec2:PublicIpAddress

## [0.257.0](https://github.com/udondan/iam-floyd/compare/v0.256.0...v0.257.0) (2021-10-08)

**Updated action access level:**

- opsworks:TagResource: Write -> Tagging
- opsworks:UntagResource: Write -> Tagging

## [0.256.0](https://github.com/udondan/iam-floyd/compare/v0.255.0...v0.256.0) (2021-10-07)

**New actions:**

- backup:DeleteBackupVaultLockConfiguration
- backup:PutBackupVaultLockConfiguration
- workmail:DescribeInboundDmarcSettings
- workmail:PutInboundDmarcSettings

**New condition keys:**

- backup:FrameworkArns

## [0.255.0](https://github.com/udondan/iam-floyd/compare/v0.254.0...v0.255.0) (2021-10-06)

**New actions:**

- cloudformation:CancelResourceRequest
- cloudformation:CreateResource
- cloudformation:DeleteResource
- cloudformation:GetResource
- cloudformation:GetResourceRequestStatus
- cloudformation:ListResourceRequests
- cloudformation:ListResources
- cloudformation:UpdateResource

## [0.254.0](https://github.com/udondan/iam-floyd/compare/v0.253.0...v0.254.0) (2021-10-05)

**New actions:**

- cloudfront:ListDistributionsByLambdaFunction

**New condition keys:**

- s3:x-amz-server-side-encryption-customer-algorithm

## [0.253.0](https://github.com/udondan/iam-floyd/compare/v0.252.0...v0.253.0) (2021-10-02)

**New actions:**

- account:DeleteAlternateContact
- account:GetAlternateContact
- account:PutAlternateContact
- dataexchange:CreateEventAction
- dataexchange:DeleteEventAction
- dataexchange:GetEventAction
- dataexchange:ListEventActions
- dataexchange:UpdateEventAction
- transfer:CreateAccess
- transfer:CreateWorkflow
- transfer:DeleteAccess
- transfer:DeleteWorkflow
- transfer:DescribeAccess
- transfer:DescribeExecution
- transfer:DescribeWorkflow
- transfer:ListAccesses
- transfer:ListExecutions
- transfer:ListWorkflows
- transfer:SendWorkflowStepState
- transfer:UpdateAccess

**Updated action access level:**

- dataexchange:ListDataSetRevisions: List -> Read
- dataexchange:ListDataSets: List -> Read
- dataexchange:ListJobs: List -> Read
- dataexchange:ListRevisionAssets: List -> Read

**New resource types:**

- account:account
- account:accountInOrganization
- dataexchange:event-actions
- transfer:workflow

**New condition keys:**

- account:AccountResourceOrgPaths
- account:AccountResourceOrgTags/${TagKey}
- account:AlternateContactTypes

## [0.252.0](https://github.com/udondan/iam-floyd/compare/v0.251.0...v0.252.0) (2021-10-01)

**New actions:**

- aps:CreateAlertManagerAlerts
- aps:CreateAlertManagerDefinition
- aps:CreateRuleGroupsNamespace
- aps:DeleteAlertManagerDefinition
- aps:DeleteAlertManagerSilence
- aps:DeleteRuleGroupsNamespace
- aps:DescribeAlertManagerDefinition
- aps:DescribeRuleGroupsNamespace
- aps:GetAlertManagerSilence
- aps:GetAlertManagerStatus
- aps:ListAlertManagerAlertGroups
- aps:ListAlertManagerAlerts
- aps:ListAlertManagerReceivers
- aps:ListAlertManagerSilences
- aps:ListAlerts
- aps:ListRuleGroupsNamespaces
- aps:ListRules
- aps:PutAlertManagerDefinition
- aps:PutAlertManagerSilences
- aps:PutRuleGroupsNamespace

**Updated action access level:**

- grafana:ListWorkspaces: List -> Read

**New resource types:**

- aps:rulegroupsnamespace

## [0.251.0](https://github.com/udondan/iam-floyd/compare/v0.250.0...v0.251.0) (2021-09-29)

:warning: **Removed actions:**

- es:ListInstanceTypes

**New services:**

- wisdom

**New actions:**

- app-integrations:CreateDataIntegration
- app-integrations:CreateDataIntegrationAssociation
- app-integrations:DeleteDataIntegration
- app-integrations:DeleteDataIntegrationAssociation
- app-integrations:GetDataIntegration
- app-integrations:ListDataIntegrationAssociations
- app-integrations:ListDataIntegrations
- app-integrations:UpdateDataIntegration
- cloudformation:ActivateType
- cloudformation:BatchDescribeTypeConfigurations
- cloudformation:DeactivateType
- cloudformation:DescribePublisher
- cloudformation:PublishType
- cloudformation:RegisterPublisher
- cloudformation:SetTypeConfiguration
- cloudformation:TestType
- ssm-contacts:GetContactPolicy
- ssm-contacts:ListTagsForResource
- ssm-contacts:TagResource
- ssm-contacts:UntagResource

**New resource types:**

- app-integrations:data-integration
- app-integrations:data-integration-association

**New condition keys:**

- ec2:CapacityReservationFleet

## [0.250.0](https://github.com/udondan/iam-floyd/compare/v0.249.0...v0.250.0) (2021-09-28)

**New services:**

- voiceid

**New actions:**

- rds:DescribeRecommendationGroups
- rds:DescribeRecommendations
- rds:ModifyRecommendation

## [0.249.0](https://github.com/udondan/iam-floyd/compare/v0.248.0...v0.249.0) (2021-09-25)

**New services:**

- connect-campaigns

**New actions:**

- appstream:CreateUpdatedImage
- ecr:DescribeImageReplicationStatus
- license-manager:CreateLicenseConversionTaskForResource
- license-manager:GetLicenseConversionTask
- license-manager:ListLicenseConversionTasks

**Updated action access level:**

- ecr:DescribeImages: Read -> List
- ecr:DescribeRepositories: List -> Read
- ecr:ListTagsForResource: List -> Read
- license-manager:CreateLicenseConfiguration: Tagging -> Write
- license-manager:ListLicenseConfigurations: List -> Read
- license-manager:ListLicenses: List -> Read
- license-manager:ListTagsForResource: List -> Read

## [0.248.0](https://github.com/udondan/iam-floyd/compare/v0.247.0...v0.248.0) (2021-09-24)

**New services:**

- sqlworkbench

## [0.247.0](https://github.com/udondan/iam-floyd/compare/v0.246.0...v0.247.0) (2021-09-23)

**New actions:**

- comprehend:ListDocumentClassifierSummaries
- comprehend:ListEntityRecognizerSummaries

**Updated action access level:**

- ses:VerifyDomainDkim: Read -> Write
- ses:VerifyDomainIdentity: Read -> Write
- ses:VerifyEmailAddress: Read -> Write
- ses:VerifyEmailIdentity: Read -> Write

## [0.246.0](https://github.com/udondan/iam-floyd/compare/v0.245.0...v0.246.0) (2021-09-21)


## [0.245.0](https://github.com/udondan/iam-floyd/compare/v0.244.0...v0.245.0) (2021-09-18)

:warning: **Removed actions:**

- sqs:ChangeMessageVisibilityBatch
- sqs:DeleteMessageBatch
- sqs:SendMessageBatch

**New services:**

- finspace
- kafkaconnect

**New actions:**

- kendra:BatchGetDocumentStatus
- macie2:ListManagedDataIdentifiers
- snowball:CreateLongTermPricing
- snowball:ListLongTermPricing
- snowball:UpdateLongTermPricing

**Updated action access level:**

- sqs:ListQueues: List -> Read

## [0.244.0](https://github.com/udondan/iam-floyd/compare/v0.243.0...v0.244.0) (2021-09-16)

**New actions:**

- elasticbeanstalk:UpdateTagsForResource
- kafka:UpdateSecurity
- textract:AnalyzeExpense

**Updated action access level:**

- codecommit:TagResource: Write -> Tagging
- codecommit:UntagResource: Write -> Tagging
- synthetics:TagResource: Write -> Tagging
- synthetics:UntagResource: Write -> Tagging

## [0.243.0](https://github.com/udondan/iam-floyd/compare/v0.242.0...v0.243.0) (2021-09-15)

**Updated action access level:**

- elasticfilesystem:DeleteFileSystemPolicy: Write -> Permissions management
- elasticfilesystem:PutFileSystemPolicy: Write -> Permissions management

## [0.242.0](https://github.com/udondan/iam-floyd/compare/v0.241.0...v0.242.0) (2021-09-14)

**New actions:**

- aps:ListTagsForResource
- aps:TagResource
- aps:UntagResource

**Updated action access level:**

- iotwireless:ListDestinations: List -> Read
- iotwireless:ListDeviceProfiles: List -> Read
- iotwireless:ListPartnerAccounts: List -> Read
- iotwireless:ListServiceProfiles: List -> Read
- iotwireless:ListTagsForResource: List -> Read
- iotwireless:ListWirelessDevices: List -> Read
- iotwireless:ListWirelessGatewayTaskDefinitions: List -> Read
- iotwireless:ListWirelessGateways: List -> Read

**New condition keys:**

- aps:RequestTag/${TagKey}
- aps:ResourceTag/${TagKey}
- aps:TagKeys

## [0.241.0](https://github.com/udondan/iam-floyd/compare/v0.240.0...v0.241.0) (2021-09-11)

:warning: **Removed actions:**

- es:CreateDataPrepperPipeline
- es:DeleteDataPrepperPipeline
- es:DescribeDataPrepperPipeline
- es:IngestDataPrepperPipeline
- es:ListDataPrepperPipelines
- es:UpdateDataPrepperPipeline

:warning: **Removed condition keys:**

- ssm:cluster

:warning: **Removed resource types:**

- es:pipeline

**New actions:**

- es:CancelServiceSoftwareUpdate
- es:DescribeDomainAutoTunes
- es:StartServiceSoftwareUpdate
- es:UpgradeDomain
- mediapackage-vod:ConfigureLogs
- mediapackage:ConfigureLogs

## [0.240.0](https://github.com/udondan/iam-floyd/compare/v0.239.0...v0.240.0) (2021-09-10)

**New actions:**

- codestar:VerifyServiceRole
- datasync:UpdateLocationNfs
- datasync:UpdateLocationObjectStorage
- datasync:UpdateLocationSmb

**Updated action access level:**

- datasync:TagResource: Write -> Tagging
- iotthingsgraph:CreateSystemInstance: Tagging -> Write
- robomaker:TagResource: Write -> Tagging
- robomaker:UntagResource: Write -> Tagging

## [0.239.0](https://github.com/udondan/iam-floyd/compare/v0.238.0...v0.239.0) (2021-09-09)

**New actions:**

- chime:StartMeetingTranscription
- chime:StopMeetingTranscription
- iotsitewise:DescribeStorageConfiguration
- iotsitewise:PutStorageConfiguration
- medialive:CreatePartnerInput
- mediatailor:CreateChannel
- mediatailor:CreateProgram
- mediatailor:CreateSourceLocation
- mediatailor:CreateVodSource
- mediatailor:DeleteChannel
- mediatailor:DeleteChannelPolicy
- mediatailor:DeleteProgram
- mediatailor:DeleteSourceLocation
- mediatailor:DeleteVodSource
- mediatailor:DescribeChannel
- mediatailor:DescribeProgram
- mediatailor:DescribeSourceLocation
- mediatailor:DescribeVodSource
- mediatailor:GetChannelPolicy
- mediatailor:GetChannelSchedule
- mediatailor:ListAlerts
- mediatailor:ListChannels
- mediatailor:ListSourceLocations
- mediatailor:ListVodSources
- mediatailor:PutChannelPolicy
- mediatailor:StartChannel
- mediatailor:StopChannel
- mediatailor:UpdateChannel
- mediatailor:UpdateSourceLocation
- mediatailor:UpdateVodSource
- personalize:StopSolutionVersionCreation
- quicksight:CreateFolder
- quicksight:CreateFolderMembership
- quicksight:DeleteFolder
- quicksight:DeleteFolderMembership
- quicksight:DescribeFolder
- quicksight:DescribeFolderPermissions
- quicksight:DescribeFolderResolvedPermissions
- quicksight:ListFolderMembers
- quicksight:ListFolders
- quicksight:SearchFolders
- quicksight:UpdateFolder
- quicksight:UpdateFolderPermissions

**New resource types:**

- mediatailor:channel
- mediatailor:program
- mediatailor:sourceLocation
- mediatailor:vodSource
- quicksight:folder

## [0.238.0](https://github.com/udondan/iam-floyd/compare/v0.237.0...v0.238.0) (2021-09-08)

**New actions:**

- personalize:CreateDatasetExportJob
- personalize:DescribeDatasetExportJob
- personalize:ListDatasetExportJobs
- s3:CreateMultiRegionAccessPoint
- s3:DeleteMultiRegionAccessPoint
- s3:DescribeMultiRegionAccessPointOperation
- s3:GetMultiRegionAccessPoint
- s3:GetMultiRegionAccessPointPolicy
- s3:GetMultiRegionAccessPointPolicyStatus
- s3:ListMultiRegionAccessPoints
- s3:PutMultiRegionAccessPointPolicy

**Updated action access level:**

- acm-pca:CreateCertificateAuthority: Tagging -> Write
 acm-pca:CreateCertificateAuthorityAuditReport;Write
-s3:ListAccessPoints;Read
- s3:ListAccessPointsForObjectLambda: Read -> List
+s3:ListAccessPointsForObjectLambda;List
- s3:ListAccessPointsForObjectLambda: Read -> List

**New resource types:**

- personalize:datasetExportJob
- s3:multiregionaccesspoint
- s3:multiregionaccesspointrequestarn

**New condition keys:**

- s3:RequestedRegion

## [0.237.0](https://github.com/udondan/iam-floyd/compare/v0.236.0...v0.237.0) (2021-09-04)

**New actions:**

- cloud9:ActivateEC2Remote
- cloud9:CreateEnvironmentSSH
- cloud9:CreateEnvironmentToken
- cloud9:DescribeEC2Remote
- cloud9:DescribeSSHRemote
- cloud9:GetEnvironmentConfig
- cloud9:GetEnvironmentSettings
- cloud9:GetMembershipSettings
- cloud9:GetUserPublicKey
- cloud9:ModifyTemporaryCredentialsOnEnvironmentEC2
- cloud9:UpdateEnvironmentSettings
- cloud9:UpdateMembershipSettings
- cloud9:UpdateSSHRemote
- cloud9:ValidateEnvironmentName
- kinesisanalytics:DescribeApplicationVersion
- kinesisanalytics:ListApplicationVersions
- kinesisanalytics:RollbackApplication
- kinesisanalytics:UpdateApplicationMaintenanceConfiguration
- profile:GetMatches
- profile:MergeProfiles
- sagemaker:InvokeEndpointAsync

**Updated action access level:**

- cloud9:TagResource: Write -> Tagging
- cloud9:UntagResource: Write -> Tagging
- profile:ListTagsForResource: List -> Read
- route53resolver:PutFirewallRuleGroupPolicy: Write -> Permissions management
- route53resolver:PutResolverQueryLogConfigPolicy: Write -> Permissions management
- route53resolver:PutResolverRulePolicy: Write -> Permissions management

## [0.236.0](https://github.com/udondan/iam-floyd/compare/v0.235.0...v0.236.0) (2021-09-03)

**New actions:**

- directconnect:AssociateMacSecKey
- directconnect:DisassociateMacSecKey
- directconnect:UpdateConnection
- ec2:AssociateInstanceEventWindow
- ec2:AssociateTrunkInterface
- ec2:CreateInstanceEventWindow
- ec2:CreateSubnetCidrReservation
- ec2:DeleteInstanceEventWindow
- ec2:DeleteSubnetCidrReservation
- ec2:DescribeInstanceEventWindows
- ec2:DescribeTrunkInterfaceAssociations
- ec2:DisassociateInstanceEventWindow
- ec2:DisassociateTrunkInterface
- ec2:GetSubnetCidrReservations
- ec2:ModifyInstanceEventWindow
- fsx:CreateStorageVirtualMachine
- fsx:CreateVolume
- fsx:CreateVolumeFromBackup
- fsx:DeleteStorageVirtualMachine
- fsx:DeleteVolume
- fsx:DescribeStorageVirtualMachines
- fsx:DescribeVolumes
- fsx:UpdateStorageVirtualMachine
- fsx:UpdateVolume
- iotevents:DescribeDetectorModelAnalysis
- iotevents:GetDetectorModelAnalysisResults
- iotevents:StartDetectorModelAnalysis
- lex:GetMigration
- lex:GetMigrations
- lex:StartMigration
- servicediscovery:UpdateHttpNamespace
- servicediscovery:UpdatePrivateDnsNamespace
- servicediscovery:UpdatePublicDnsNamespace

**Updated action access level:**

- devicefarm:CreateProject: Tagging -> Write
- ec2:ExportClientVpnClientCertificateRevocationList: List -> Read
- ec2:ExportClientVpnClientConfiguration: List -> Read
- ram:EnableSharingWithAwsOrganization: Write -> Permissions management

**New resource types:**

- ec2:instance-event-window
- fsx:storage-virtual-machine
- fsx:volume

**New condition keys:**

- fsx:StorageVirtualMachineId

## [0.235.0](https://github.com/udondan/iam-floyd/compare/v0.234.0...v0.235.0) (2021-09-02)

:warning: **Removed actions:**

- aws-marketplace:CreatePrivateMarketplace
- aws-marketplace:DescribePrivateMarketplaceStatus

**New actions:**

- cloudformation:ImportStacksToStackSet
- codepipeline:GetActionType
- codepipeline:UpdateActionType
- grafana:DescribeWorkspaceAuthentication
- grafana:UpdateWorkspaceAuthentication

**Updated action access level:**

- chime:ListChannelMessages: List -> Write
- chime:RetrieveDataExports: List -> Write
- codepipeline:CreateCustomActionType: Tagging -> Write
- codepipeline:CreatePipeline: Tagging -> Write
- codepipeline:PutWebhook: Tagging -> Write
- events:PutRule: Tagging -> Write
- logs:DeleteResourcePolicy: Write -> Permissions management
- logs:PutResourcePolicy: Write -> Permissions management

**New condition keys:**

- kms:KeySpec
- kms:KeyUsage

## [0.234.0](https://github.com/udondan/iam-floyd/compare/v0.233.0...v0.234.0) (2021-08-31)

**Updated action access level:**

- backup:DeleteBackupVaultAccessPolicy: Write -> Permissions management
- backup:PutBackupVaultAccessPolicy: Write -> Permissions management

## [0.233.0](https://github.com/udondan/iam-floyd/compare/v0.232.0...v0.233.0) (2021-08-28)

**New actions:**

- autoscaling:GetPredictiveScalingForecast
- compute-optimizer:GetEnrollmentStatusesForOrganization
- mobiletargeting:GetReports

**Updated action access level:**

- appmesh:TagResource: Write -> Tagging
- appmesh:UntagResource: Write -> Tagging
- cloudfront:CreateDistributionWithTags: Tagging -> Write
- cloudfront:CreateStreamingDistributionWithTags: Tagging -> Write
- mobiletargeting:GetApps: List -> Read
- mobiletargeting:ListTagsForResource: List -> Read

## [0.232.0](https://github.com/udondan/iam-floyd/compare/v0.231.0...v0.232.0) (2021-08-26)

**New services:**

- memorydb

**New actions:**

- glue:NotifyEvent
- kendra:DeletePrincipalMapping
- kendra:DescribePrincipalMapping
- kendra:ListGroupsOlderThanOrderingId
- kendra:PutPrincipalMapping

**New condition keys:**

- glue:CredentialIssuingService
- glue:RoleAssumedBy
- glue:SecurityGroupIds
- glue:SubnetIds
- glue:VpcIds

## [0.231.0](https://github.com/udondan/iam-floyd/compare/v0.230.0...v0.231.0) (2021-08-25)

**New actions:**

- backup:CreateFramework
- backup:CreateReportPlan
- backup:DeleteFramework
- backup:DeleteReportPlan
- backup:DescribeFramework
- backup:DescribeReportJob
- backup:DescribeReportPlan
- backup:ListFrameworks
- backup:ListReportJobs
- backup:ListReportPlans
- backup:StartReportJob
- backup:UpdateFramework
- backup:UpdateReportPlan
- rds:DownloadCompleteDBLogFile

**New resource types:**

- backup:framework
- backup:reportPlan

## [0.230.0](https://github.com/udondan/iam-floyd/compare/v0.229.0...v0.230.0) (2021-08-24)

**Updated action access level:**

- comprehend:ListDocumentClassificationJobs: List -> Read
- comprehend:ListDocumentClassifiers: List -> Read
- comprehend:ListDominantLanguageDetectionJobs: List -> Read
- comprehend:ListEndpoints: List -> Read
- comprehend:ListEntitiesDetectionJobs: List -> Read
- comprehend:ListEntityRecognizers: List -> Read
- comprehend:ListEventsDetectionJobs: List -> Read
- comprehend:ListKeyPhrasesDetectionJobs: List -> Read
- comprehend:ListPiiEntitiesDetectionJobs: List -> Read
- comprehend:ListSentimentDetectionJobs: List -> Read
- comprehend:ListTagsForResource: List -> Read
- comprehend:ListTopicsDetectionJobs: List -> Read

**New resource types:**

- comprehend:document-classification-job
- comprehend:dominant-language-detection-job
- comprehend:entities-detection-job
- comprehend:events-detection-job
- comprehend:key-phrases-detection-job
- comprehend:pii-entities-detection-job
- comprehend:sentiment-detection-job
- comprehend:topics-detection-job

## [0.229.0](https://github.com/udondan/iam-floyd/compare/v0.228.0...v0.229.0) (2021-08-20)

:warning: **Removed actions:**

- deepracer:CreateAccountResources
- deepracer:DeleteAccountResources
- deepracer:GetAccountResources

**New actions:**

- deepracer:AdminGetAccountConfig
- deepracer:AdminListAssociatedResources
- deepracer:AdminListAssociatedUsers
- deepracer:AdminManageUser
- deepracer:AdminSetAccountConfig
- deepracer:GetAccountConfig
- deepracer:PerformLeaderboardOperation
- iot:GetRetainedMessage
- iot:ListRetainedMessages
- iot:RetainPublish

**Updated action access level:**

- iot:ListTagsForResource: List -> Read

**New condition keys:**

- deepracer:MultiUser
- deepracer:UserToken

## [0.228.0](https://github.com/udondan/iam-floyd/compare/v0.227.0...v0.228.0) (2021-08-18)

**New actions:**

- chatbot:DeleteSlackWorkspaceAuthorization
- dms:DescribeEndpointSettings

**Updated action access level:**

- dms:ListTagsForResource: List -> Read

**New condition keys:**

- chatbot:CalledVia

## [0.227.0](https://github.com/udondan/iam-floyd/compare/v0.226.0...v0.227.0) (2021-08-14)

:warning: **Removed actions:**

- route53-recovery-readiness:GetRecoveryGroupReadinessStatus

**New actions:**

- route53-recovery-control-config:ListSafetyRules
- route53-recovery-readiness:GetRecoveryGroupReadinessSummary

**Updated action access level:**

- appsync:CreateGraphqlApi: Tagging -> Write
- route53-recovery-control-config:ListAssociatedRoute53HealthChecks: Read -> List

## [0.226.0](https://github.com/udondan/iam-floyd/compare/v0.225.0...v0.226.0) (2021-08-13)

:warning: **Removed actions:**

- lex:RecognizeSpeech

**New services:**

- snow-device-management

**New actions:**

- codebuild:UpdateProjectVisibility
- lex:RecognizeUtterance
- workmailmessageflow:PutRawMessageContent

**Updated action access level:**

- fsx:CreateBackup: Tagging -> Write
- fsx:CreateDataRepositoryTask: Tagging -> Write
-fsx:CreateFileSystem;Tagging
- fsx:CreateFileSystemFromBackup: Tagging -> Write
+fsx:CreateFileSystemFromBackup;Write
- fsx:CreateFileSystemFromBackup: Tagging -> Write

**New condition keys:**

- nimble:ownedBy

## [0.225.0](https://github.com/udondan/iam-floyd/compare/v0.224.0...v0.225.0) (2021-08-10)

**New actions:**

- connect:CreateAgentStatus
- connect:CreateHoursOfOperation
- connect:DeleteHoursOfOperation
- connect:DescribeAgentStatus
- connect:ListAgentStatuses
- connect:UpdateAgentStatus
- connect:UpdateHoursOfOperation

**New resource types:**

- connect:agent-status

## [0.224.0](https://github.com/udondan/iam-floyd/compare/v0.223.0...v0.224.0) (2021-08-07)


## [0.223.0](https://github.com/udondan/iam-floyd/compare/v0.222.0...v0.223.0) (2021-08-06)

**New services:**

- route53-recovery-cluster
- route53-recovery-control-config
- route53-recovery-readiness

**New actions:**

- redshift:AssociateDataShareConsumer
- redshift:AuthorizeDataShare
- redshift:DeauthorizeDataShare
- redshift:DescribeDataShares
- redshift:DescribeDataSharesForConsumer
- redshift:DescribeDataSharesForProducer
- redshift:DisassociateDataShareConsumer
- redshift:RejectDataShare

**New resource types:**

- redshift:datashare

**New condition keys:**

- redshift:ConsumerIdentifier

## [0.222.0](https://github.com/udondan/iam-floyd/compare/v0.221.0...v0.222.0) (2021-08-05)

**New actions:**

- deepracer:AddLeaderboardAccessPermission
- deepracer:CreateCar
- deepracer:CreateLeaderboard
- deepracer:CreateLeaderboardAccessToken
- deepracer:DeleteLeaderboard
- deepracer:EditLeaderboard
- deepracer:GetAssetUrl
- deepracer:GetCar
- deepracer:GetCars
- deepracer:GetPrivateLeaderboard
- deepracer:ImportModel
- deepracer:ListPrivateLeaderboardParticipants
- deepracer:ListPrivateLeaderboards
- deepracer:ListSubscribedPrivateLeaderboards
- deepracer:ListTagsForResource
- deepracer:MigrateModels
- deepracer:RemoveLeaderboardAccessPermission
- deepracer:TagResource
- deepracer:UntagResource
- deepracer:UpdateCar
- transcribe:CreateCallAnalyticsCategory
- transcribe:DeleteCallAnalyticsCategory
- transcribe:DeleteCallAnalyticsJob
- transcribe:GetCallAnalyticsCategory
- transcribe:GetCallAnalyticsJob
- transcribe:ListCallAnalyticsCategories
- transcribe:ListCallAnalyticsJobs
- transcribe:StartCallAnalyticsJob
- transcribe:UpdateCallAnalyticsCategory

**Updated action access level:**

- deepracer:ListEvaluations: List -> Read
- deepracer:ListLeaderboardSubmissions: List -> Read
- deepracer:ListLeaderboards: List -> Read
- deepracer:ListModels: List -> Read
- deepracer:ListTracks: List -> Read
- deepracer:ListTrainingJobs: List -> Read

**New resource types:**

- deepracer:car

**New condition keys:**

- deepracer:RequestTag/${TagKey}
- deepracer:ResourceTag/${TagKey}
- deepracer:TagKeys

## [0.221.0](https://github.com/udondan/iam-floyd/compare/v0.220.0...v0.221.0) (2021-08-04)

**New actions:**

- bugbust:ListTagsForResource
- bugbust:TagResource
- bugbust:UntagResource

**New condition keys:**

- bugbust:RequestTag/${TagKey}
- bugbust:TagKeys

## [0.220.0](https://github.com/udondan/iam-floyd/compare/v0.219.0...v0.220.0) (2021-07-31)


## [0.219.0](https://github.com/udondan/iam-floyd/compare/v0.218.0...v0.219.0) (2021-07-30)

**New actions:**

- servicecatalog:GetAssociatedResource

**Updated action access level:**

- servicecatalog:ListTagsForResource: List -> Read

## [0.218.0](https://github.com/udondan/iam-floyd/compare/v0.217.0...v0.218.0) (2021-07-29)

**New actions:**

- redshift-data:BatchExecuteStatement

**New resource types:**

- redshift-data:cluster

**New condition keys:**

- redshift-data:ResourceTag/${TagKey}

## [0.217.0](https://github.com/udondan/iam-floyd/compare/v0.216.0...v0.217.0) (2021-07-28)

**New actions:**

- amplifybackend:ImportBackendAuth
- es:AcceptInboundConnection
- es:CreateDataPrepperPipeline
- es:CreateDomain
- es:CreateOutboundConnection
- es:CreateServiceRole
- es:DeleteDataPrepperPipeline
- es:DeleteDomain
- es:DeleteInboundConnection
- es:DeleteOutboundConnection
- es:DescribeDataPrepperPipeline
- es:DescribeDomain
- es:DescribeDomainConfig
- es:DescribeDomains
- es:DescribeInboundConnections
- es:DescribeInstanceTypeLimits
- es:DescribeOutboundConnections
- es:DescribeReservedInstanceOfferings
- es:DescribeReservedInstances
- es:GetCompatibleVersions
- es:IngestDataPrepperPipeline
- es:ListDataPrepperPipelines
- es:ListInstanceTypeDetails
- es:ListInstanceTypes
- es:ListVersions
- es:PurchaseReservedInstanceOffering
- es:RejectInboundConnection
- es:UpdateDataPrepperPipeline
- es:UpdateDomainConfig
- quicksight:GenerateEmbedUrlForAnonymousUser
- quicksight:GenerateEmbedUrlForRegisteredUser
- s3-object-lambda:DeleteObjectVersion
- s3-object-lambda:DeleteObjectVersionTagging
- s3-object-lambda:GetObjectVersionAcl
- s3-object-lambda:GetObjectVersionTagging
- s3-object-lambda:ListBucketMultipartUploads
- s3-object-lambda:ListBucketVersions
- s3-object-lambda:PutObjectVersionAcl
- s3-object-lambda:PutObjectVersionTagging

**Updated action access level:**

- batch:ListTagsForResource: List -> Read
- quicksight:ListTagsForResource: List -> Read

**New resource types:**

- es:es_role
- es:opensearchservice_role
- es:pipeline

**New condition keys:**

- es:RequestTag/${TagKey}
- es:ResourceTag/${TagKey}
- es:TagKeys

## [0.216.0](https://github.com/udondan/iam-floyd/compare/v0.215.0...v0.216.0) (2021-07-27)


## [0.215.0](https://github.com/udondan/iam-floyd/compare/v0.214.0...v0.215.0) (2021-07-23)

**New actions:**

- lightsail:CreateBucket
- lightsail:CreateBucketAccessKey
- lightsail:DeleteBucket
- lightsail:DeleteBucketAccessKey
- lightsail:GetBucketAccessKeys
- lightsail:GetBucketBundles
- lightsail:GetBucketMetricData
- lightsail:GetBuckets
- lightsail:SetResourceAccessForBucket
- lightsail:UpdateBucket
- lightsail:UpdateBucketBundle

**Updated action access level:**

- ivs:ListTagsForResource: Tagging -> Read

**New resource types:**

- lightsail:Bucket

## [0.214.0](https://github.com/udondan/iam-floyd/compare/v0.213.0...v0.214.0) (2021-07-22)

**Updated action access level:**

- logs:TagLogGroup: Write -> Tagging
- logs:UntagLogGroup: Write -> Tagging

**New condition keys:**

- logs:ResourceTag/${TagKey}

## [0.213.0](https://github.com/udondan/iam-floyd/compare/v0.212.0...v0.213.0) (2021-07-21)

**New actions:**

- workdocs:GetGroup

## [0.212.0](https://github.com/udondan/iam-floyd/compare/v0.211.0...v0.212.0) (2021-07-20)

**New actions:**

- sagemaker:SendPipelineExecutionStepFailure
- sagemaker:SendPipelineExecutionStepSuccess

## [0.211.0](https://github.com/udondan/iam-floyd/compare/v0.210.0...v0.211.0) (2021-07-18)


## [0.210.0](https://github.com/udondan/iam-floyd/compare/v0.209.0...v0.210.0) (2021-07-16)

**New actions:**

- ec2:DescribeSecurityGroupRules
- ec2:ModifySecurityGroupRules
- healthlake:ListFHIRExportJobs
- healthlake:ListFHIRImportJobs
- healthlake:ListTagsForResource
- healthlake:TagResource
- healthlake:UntagResource

**New resource types:**

- ec2:security-group-rule

**New condition keys:**

- healthlake:RequestTag/${TagKey}
- healthlake:ResourceTag/${TagKey}
- healthlake:TagKeys
- quicksight:DirectoryType
- quicksight:Edition

## [0.209.0](https://github.com/udondan/iam-floyd/compare/v0.208.0...v0.209.0) (2021-07-14)

**Updated action access level:**

- bugbust:GetJoinEventStatus: Write -> Read
- bugbust:ListPullRequests: Write -> Read

## [0.208.0](https://github.com/udondan/iam-floyd/compare/v0.207.0...v0.208.0) (2021-07-13)

**New actions:**

- cloudfront:AssociateAlias
- cloudfront:ListConflictingAliases
- proton:AcceptEnvironmentAccountConnection
- proton:CancelEnvironmentDeployment
- proton:CancelServiceInstanceDeployment
- proton:CancelServicePipelineDeployment
- proton:CreateEnvironmentAccountConnection
- proton:CreateEnvironmentTemplateVersion
- proton:CreateServiceTemplateVersion
- proton:DeleteEnvironmentAccountConnection
- proton:DeleteEnvironmentTemplateVersion
- proton:DeleteServiceTemplateVersion
- proton:GetAccountSettings
- proton:GetEnvironmentAccountConnection
- proton:GetEnvironmentTemplateVersion
- proton:GetServiceTemplateVersion
- proton:ListEnvironmentAccountConnections
- proton:ListEnvironmentTemplateVersions
- proton:ListServiceTemplateVersions
- proton:RejectEnvironmentAccountConnection
- proton:UpdateAccountSettings
- proton:UpdateEnvironmentAccountConnection
- proton:UpdateEnvironmentTemplateVersion
- proton:UpdateServiceTemplateVersion

**New resource types:**

- proton:environment-account-connection
- proton:environment-template-version
- proton:service-template-version

**New condition keys:**

- proton:EnvironmentTemplate
- proton:ServiceTemplate

## [0.207.0](https://github.com/udondan/iam-floyd/compare/v0.206.0...v0.207.0) (2021-07-10)

**New actions:**

- compute-optimizer:ExportEBSVolumeRecommendations
- compute-optimizer:ExportLambdaFunctionRecommendations

**Updated action access level:**

- guardduty:ListTagsForResource: List -> Read
- guardduty:TagResource: Write -> Tagging
- guardduty:UntagResource: Write -> Tagging

## [0.206.0](https://github.com/udondan/iam-floyd/compare/v0.205.0...v0.206.0) (2021-07-09)

**New actions:**

- chime:CreateMediaCapturePipeline
- chime:DeleteMediaCapturePipeline
- chime:GetMediaCapturePipeline
- chime:ListMediaCapturePipelines

## [0.205.0](https://github.com/udondan/iam-floyd/compare/v0.204.0...v0.205.0) (2021-07-07)

**New actions:**

- ec2:DisableImageDeprecation
- ec2:EnableImageDeprecation

## [0.204.0](https://github.com/udondan/iam-floyd/compare/v0.203.0...v0.204.0) (2021-07-03)

**Updated action access level:**

- autoscaling:CreateAutoScalingGroup: Tagging -> Write
- macie2:ListTagsForResource: List -> Read

## [0.203.0](https://github.com/udondan/iam-floyd/compare/v0.202.0...v0.203.0) (2021-07-01)

**New actions:**

- mediaconnect:AddFlowMediaStreams
- mediaconnect:RemoveFlowMediaStream
- mediaconnect:UpdateFlowMediaStream

## [0.202.0](https://github.com/udondan/iam-floyd/compare/v0.201.0...v0.202.0) (2021-06-29)

**New actions:**

- cloudfront:CreateFunction
- cloudfront:DeleteFunction
- cloudfront:DescribeFunction
- cloudfront:GetFunction
- cloudfront:ListFunctions
- cloudfront:PublishFunction
- cloudfront:TestFunction
- cloudfront:UpdateFunction

**New resource types:**

- cloudfront:function

**New condition keys:**

- codeguru-reviewer:RequestTag/${TagKey}
- codeguru-reviewer:TagKeys

## [0.201.0](https://github.com/udondan/iam-floyd/compare/v0.200.0...v0.201.0) (2021-06-26)


## [0.200.0](https://github.com/udondan/iam-floyd/compare/v0.199.0...v0.200.0) (2021-06-25)

**New services:**

- bugbust

**New actions:**

- securityhub:GetControlFindingSummary
- securityhub:ListControlEvaluationSummaries

## [0.199.0](https://github.com/udondan/iam-floyd/compare/v0.198.0...v0.199.0) (2021-06-22)

**New actions:**

- chime:UpdateSipMediaApplicationCall
- ec2:CreateReplaceRootVolumeTask
- ec2:CreateRestoreImageTask
- ec2:CreateStoreImageTask
- ec2:DescribeReplaceRootVolumeTasks
- ec2:DescribeStoreImageTasks
- ec2:GetFlowLogsIntegrationTemplate

**New resource types:**

- ec2:replace-root-volume-task

## [0.198.0](https://github.com/udondan/iam-floyd/compare/v0.197.0...v0.198.0) (2021-06-19)

**New actions:**

- connect:AssociateBot
- connect:DisassociateBot
- connect:ListBots
- kms:ReplicateKey
- kms:SynchronizeMultiRegionKey
- kms:UpdatePrimaryRegion

**New condition keys:**

- kms:MultiRegion
- kms:MultiRegionKeyType
- kms:PrimaryRegion
- kms:ReplicaRegion

## [0.197.0](https://github.com/udondan/iam-floyd/compare/v0.196.0...v0.197.0) (2021-06-12)

**New actions:**

- iotwireless:GetResourceLogLevel
- iotwireless:PutResourceLogLevel
- iotwireless:ResetAllResourceLogLevels
- iotwireless:ResetResourceLogLevel

## [0.196.0](https://github.com/udondan/iam-floyd/compare/v0.195.0...v0.196.0) (2021-06-11)

**New actions:**

- sagemaker:BatchGetRecord

## [0.195.0](https://github.com/udondan/iam-floyd/compare/v0.194.0...v0.195.0) (2021-06-09)

**Updated action access level:**

- applicationinsights:ListTagsForResource: List -> Read

## [0.194.0](https://github.com/udondan/iam-floyd/compare/v0.193.0...v0.194.0) (2021-06-05)

**New actions:**

- macie2:DisassociateFromAdministratorAccount
- macie2:GetAdministratorAccount
- macie2:GetFindingsPublicationConfiguration
- macie2:PutFindingsPublicationConfiguration
- macie2:SearchResources
- pi:GetDimensionKeyDetails

## [0.193.0](https://github.com/udondan/iam-floyd/compare/v0.192.0...v0.193.0) (2021-06-04)


## [0.192.0](https://github.com/udondan/iam-floyd/compare/v0.191.0...v0.192.0) (2021-06-03)

**New actions:**

- chime:BatchCreateChannelMembership
- iotwireless:GetLogLevelsByResourceTypes
- iotwireless:UpdateLogLevelsByResourceTypes
- sns:CreateSMSSandboxPhoneNumber
- sns:DeleteSMSSandboxPhoneNumber
- sns:GetSMSSandboxAccountStatus
- sns:ListOriginationNumbers
- sns:ListSMSSandboxPhoneNumbers
- sns:VerifySMSSandboxPhoneNumber

**New condition keys:**

- cloudwatch:AlarmActions

## [0.191.0](https://github.com/udondan/iam-floyd/compare/v0.190.0...v0.191.0) (2021-05-29)

:warning: **Removed actions:**

- geo:GetMapTileJson

**New actions:**

- appflow:UseConnectorProfile
- geo:BatchDeleteDevicePositionHistory
- geo:CalculateRoute
- geo:CreateRouteCalculator
- geo:DeleteRouteCalculator
- geo:DescribeRouteCalculator
- geo:ListDevicePositions
- geo:ListRouteCalculators
- geo:ListTagsForResource
- geo:TagResource
- geo:UntagResource
- iotevents:ListInputRoutings
- kendra:ClearQuerySuggestions
- kendra:CreateQuerySuggestionsBlockList
- kendra:DeleteQuerySuggestionsBlockList
- kendra:DescribeQuerySuggestionsBlockList
- kendra:DescribeQuerySuggestionsConfig
- kendra:GetQuerySuggestions
- kendra:ListQuerySuggestionsBlockLists
- kendra:UpdateQuerySuggestionsBlockList
- kendra:UpdateQuerySuggestionsConfig
- qldb:PartiQLCreateIndex
- qldb:PartiQLCreateTable
- qldb:PartiQLDelete
- qldb:PartiQLDropIndex
- qldb:PartiQLDropTable
- qldb:PartiQLHistoryFunction
- qldb:PartiQLInsert
- qldb:PartiQLSelect
- qldb:PartiQLUndropTable
- qldb:PartiQLUpdate
- qldb:UpdateLedgerPermissionsMode

**Updated action access level:**

- appflow:ListTagsForResource: List -> Read
- gamelift:RequestUploadCredentials: Write -> Read
- kendra:ListTagsForResource: List -> Read

**New resource types:**

- geo:route-calculator
- kendra:query-suggestions-block-list
- qldb:catalog
- qldb:table

**New condition keys:**

- geo:RequestTag/${TagKey}
- geo:ResourceTag/${TagKey}
- geo:TagKeys
- qldb:Purge

## [0.190.0](https://github.com/udondan/iam-floyd/compare/v0.189.0...v0.190.0) (2021-05-27)

:warning: **Removed actions:**

- lex:GetBuiltinIntents
- lex:GetBuiltinSlotTypes

**New actions:**

- dataexchange:PublishDataSet
- lex:CreateExport
- lex:CreateResourcePolicy
- lex:CreateUploadUrl
- lex:DeleteExport
- lex:DeleteImport
- lex:DeleteResourcePolicy
- lex:DescribeExport
- lex:DescribeImport
- lex:DescribeResourcePolicy
- lex:ListBuiltInIntents
- lex:ListBuiltInSlotTypes
- lex:ListExports
- lex:ListImports
- lex:UpdateExport
- lex:UpdateResourcePolicy

## [0.189.0](https://github.com/udondan/iam-floyd/compare/v0.188.0...v0.189.0) (2021-05-26)

**New actions:**

- iotsitewise:UpdateAssetModelPropertyRouting

## [0.188.0](https://github.com/udondan/iam-floyd/compare/v0.187.0...v0.188.0) (2021-05-25)

**New actions:**

- iot:CreateJobTemplate
- iot:DeleteJobTemplate
- iot:DescribeJobTemplate
- iot:ListJobTemplates

**Updated action access level:**

- iot:CreateBillingGroup: Tagging -> Write
- iot:CreateDynamicThingGroup: Tagging -> Write
- iot:CreateFleetMetric: Tagging -> Write
- iot:CreateThingGroup: Tagging -> Write
- iot:CreateThingType: Tagging -> Write
- iot:DeleteBillingGroup: Tagging -> Write
- iot:DeleteDynamicThingGroup: Tagging -> Write
- iot:DeleteFleetMetric: Tagging -> Write
- iot:DeleteThingGroup: Tagging -> Write
- iot:DeleteThingType: Tagging -> Write

**New resource types:**

- iot:jobtemplate

## [0.187.0](https://github.com/udondan/iam-floyd/compare/v0.186.0...v0.187.0) (2021-05-21)

**New actions:**

- forecast:DeleteResourceTree

## [0.186.0](https://github.com/udondan/iam-floyd/compare/v0.185.0...v0.186.0) (2021-05-20)

:warning: **Removed actions:**

- iotdeviceadvisor:ListTestCases

**New services:**

- apprunner

**New actions:**

- autoscaling:DeleteWarmPool
- autoscaling:DescribeWarmPool
- autoscaling:PutWarmPool
- iotdeviceadvisor:StopSuiteRun
- license-manager:CreateLicenseManagerReportGenerator
- license-manager:DeleteLicenseManagerReportGenerator
- license-manager:GetLicenseManagerReportGenerator
- license-manager:ListLicenseManagerReportGenerators
- license-manager:UpdateLicenseManagerReportGenerator

**Updated action access level:**

- license-manager:GetLicenseConfiguration: List -> Read

**New resource types:**

- license-manager:report-generator

## [0.185.0](https://github.com/udondan/iam-floyd/compare/v0.184.0...v0.185.0) (2021-05-19)

**New services:**

- application-cost-profiler

## [0.184.0](https://github.com/udondan/iam-floyd/compare/v0.183.0...v0.184.0) (2021-05-15)

**New actions:**

- es:CancelElasticsearchServiceSoftwareUpdate
- es:StartElasticsearchServiceSoftwareUpdate

## [0.183.0](https://github.com/udondan/iam-floyd/compare/v0.182.0...v0.183.0) (2021-05-13)


## [0.182.0](https://github.com/udondan/iam-floyd/compare/v0.181.0...v0.182.0) (2021-05-12)

:warning: **Removed actions:**

- aws-marketplace:CreatePrivateMarketplaceProfile
- aws-marketplace:DescribePrivateMarketplaceProducts
- aws-marketplace:DescribePrivateMarketplaceProfile
- aws-marketplace:DescribePrivateMarketplaceSettings
- aws-marketplace:ListPrivateMarketplaceProducts
- aws-marketplace:StartPrivateMarketplace
- aws-marketplace:StopPrivateMarketplace
- aws-marketplace:UpdatePrivateMarketplaceProfile
- aws-marketplace:UpdatePrivateMarketplaceSettings

**New actions:**

- elasticfilesystem:DescribeAccountPreferences
- elasticfilesystem:PutAccountPreferences
- secretsmanager:RemoveRegionsFromReplication
- secretsmanager:ReplicateSecretToRegions
- secretsmanager:StopReplicationToReplica
- workmail:CreateMobileDeviceAccessRule
- workmail:DeleteMobileDeviceAccessRule
- workmail:GetMobileDeviceAccessEffect
- workmail:ListMobileDeviceAccessRules
- workmail:UpdateMobileDeviceAccessRule

**New condition keys:**

- secretsmanager:SecretPrimaryRegion

## [0.181.0](https://github.com/udondan/iam-floyd/compare/v0.180.0...v0.181.0) (2021-05-11)

**New services:**

- ssm-contacts

**New actions:**

- ssm-incidents:CreateReplicationSet
- ssm-incidents:CreateResponsePlan
- ssm-incidents:CreateTimelineEvent
- ssm-incidents:DeleteIncidentRecord
- ssm-incidents:DeleteReplicationSet
- ssm-incidents:DeleteResourcePolicy
- ssm-incidents:DeleteResponsePlan
- ssm-incidents:DeleteTimelineEvent
- ssm-incidents:GetIncidentRecord
- ssm-incidents:GetReplicationSet
- ssm-incidents:GetResourcePolicies
- ssm-incidents:GetResponsePlan
- ssm-incidents:GetTimelineEvent
- ssm-incidents:ListIncidentRecords
- ssm-incidents:ListRelatedItems
- ssm-incidents:ListReplicationSets
- ssm-incidents:ListResponsePlans
- ssm-incidents:ListTagsForResource
- ssm-incidents:ListTimelineEvents
- ssm-incidents:PutResourcePolicy
- ssm-incidents:TagResource
- ssm-incidents:UntagResource
- ssm-incidents:UpdateDeletionProtection
- ssm-incidents:UpdateIncidentRecord
- ssm-incidents:UpdateRelatedItems
- ssm-incidents:UpdateReplicationSet
- ssm-incidents:UpdateResponsePlan
- ssm-incidents:UpdateTimelineEvent

**New resource types:**

- ssm-incidents:replication-set

## [0.180.0](https://github.com/udondan/iam-floyd/compare/v0.179.0...v0.180.0) (2021-05-08)

**New services:**

- kafka-cluster

**New actions:**

- ssm:AssociateOpsItemRelatedItem
- ssm:DisassociateOpsItemRelatedItem
- ssm:ListOpsItemRelatedItems
- workspaces:AssociateConnectionAlias
- workspaces:CopyWorkspaceImage
- workspaces:CreateConnectionAlias
- workspaces:CreateWorkspaceBundle
- workspaces:DeleteConnectionAlias
- workspaces:DeleteWorkspaceBundle
- workspaces:DeregisterWorkspaceDirectory
- workspaces:DescribeConnectionAliasPermissions
- workspaces:DescribeConnectionAliases
- workspaces:DescribeWorkspaceImagePermissions
- workspaces:DescribeWorkspaceSnapshots
- workspaces:DisassociateConnectionAlias
- workspaces:MigrateWorkspace
- workspaces:ModifySelfservicePermissions
- workspaces:ModifyWorkspaceAccessProperties
- workspaces:ModifyWorkspaceCreationProperties
- workspaces:RegisterWorkspaceDirectory
- workspaces:RestoreWorkspace
- workspaces:UpdateConnectionAliasPermission
- workspaces:UpdateWorkspaceBundle
- workspaces:UpdateWorkspaceImagePermission

**Updated action access level:**

- workspaces:DeleteTags: Write -> Tagging
-workspaces:DescribeAccount;List
- workspaces:DescribeAccountModifications: List -> Read
+workspaces:DescribeAccountModifications;Read
- workspaces:DescribeAccountModifications: List -> Read
- workspaces:DescribeIpGroups: List -> Read
- workspaces:DescribeWorkspaceDirectories: List -> Read

**New resource types:**

- workspaces:connectionalias
- workspaces:workspaceimage

**New condition keys:**

- workspaces:RequestTag/${TagKey}
- workspaces:ResourceTag/${TagKey}
- workspaces:TagKeys

## [0.179.0](https://github.com/udondan/iam-floyd/compare/v0.178.0...v0.179.0) (2021-05-07)

**New actions:**

- ecs:ExecuteCommand
- ecs:UpdateCapacityProvider
- ecs:UpdateCluster

**Updated action access level:**

- ecs:ListAccountSettings: List -> Read
- ecs:ListTagsForResource: List -> Read

**New condition keys:**

- ecs:container-name
- ecs:enable-execute-command
- ecs:task

## [0.178.0](https://github.com/udondan/iam-floyd/compare/v0.177.0...v0.178.0) (2021-05-06)

**New actions:**

- chime:ListSupportedPhoneNumberCountries
- opsworks-cm:ExportServerEngineAttribute

**Updated action access level:**

- lambda:TagResource: Write -> Tagging
- lambda:UntagResource: Write -> Tagging
- opsworks-cm:ListTagsForResource: List -> Read

**New resource types:**

- opsworks-cm:backup
- opsworks-cm:server

## [0.177.0](https://github.com/udondan/iam-floyd/compare/v0.176.0...v0.177.0) (2021-05-05)

**New actions:**

- clouddirectory:ListManagedSchemaArns
- dms:DeleteConnection
- dms:MoveReplicationTask
- opsworks:DescribeOperatingSystems

## [0.176.0](https://github.com/udondan/iam-floyd/compare/v0.175.0...v0.176.0) (2021-05-04)

**New global condition context keys:**

- aws:PrincipalIsAWSService
- aws:PrincipalServiceName
- aws:PrincipalServiceNamesList
- aws:SourceIdentity

## [0.175.0](https://github.com/udondan/iam-floyd/compare/v0.174.0...v0.175.0) (2021-05-04)

**New actions:**

- ds:AddRegion
- ds:DescribeRegions
- ds:DisableClientAuthentication
- ds:EnableClientAuthentication
- ds:RemoveRegion

## [0.174.0](https://github.com/udondan/iam-floyd/compare/v0.173.0...v0.174.0) (2021-05-01)

**New actions:**

- elasticmapreduce:CreateRepository
- elasticmapreduce:CreateStudio
- elasticmapreduce:CreateStudioSessionMapping
- elasticmapreduce:DeleteRepository
- elasticmapreduce:DeleteStudio
- elasticmapreduce:DeleteStudioSessionMapping
- elasticmapreduce:DescribeNotebookExecution
- elasticmapreduce:DescribeRepository
- elasticmapreduce:DescribeStudio
- elasticmapreduce:GetStudioSessionMapping
- elasticmapreduce:LinkRepository
- elasticmapreduce:ListNotebookExecutions
- elasticmapreduce:ListRepositories
- elasticmapreduce:ListStudioSessionMappings
- elasticmapreduce:ListStudios
- elasticmapreduce:StartNotebookExecution
- elasticmapreduce:StopNotebookExecution
- elasticmapreduce:UnlinkRepository
- elasticmapreduce:UpdateRepository
- elasticmapreduce:UpdateStudio
- elasticmapreduce:UpdateStudioSessionMapping

**New resource types:**

- elasticmapreduce:notebook-execution
- elasticmapreduce:studio

## [0.173.0](https://github.com/udondan/iam-floyd/compare/v0.172.0...v0.173.0) (2021-04-30)

**New services:**

- nimble

## [0.172.0](https://github.com/udondan/iam-floyd/compare/v0.171.0...v0.172.0) (2021-04-29)

**New actions:**

- emr-containers:CreateManagedEndpoint
- emr-containers:DeleteManagedEndpoint
- emr-containers:DescribeManagedEndpoint
- emr-containers:ListManagedEndpoints
- es:AssociatePackage
- es:CreatePackage
- es:DeletePackage
- es:DescribePackages
- es:DissociatePackage
- es:GetPackageVersionHistory
- es:ListDomainsForPackage
- es:ListPackagesForDomain
- es:UpdatePackage
- mediaconnect:AddFlowSources
- mediaconnect:AddFlowVpcInterfaces
- mediaconnect:DescribeOffering
- mediaconnect:DescribeReservation
- mediaconnect:ListOfferings
- mediaconnect:ListReservations
- mediaconnect:ListTagsForResource
- mediaconnect:PurchaseOffering
- mediaconnect:RemoveFlowSource
- mediaconnect:RemoveFlowVpcInterface
- mediaconnect:TagResource
- mediaconnect:UntagResource
- mediaconnect:UpdateFlow
- sagemaker:DeleteHumanTaskUi

**New resource types:**

- emr-containers:managedEndpoint

## [0.171.0](https://github.com/udondan/iam-floyd/compare/v0.170.0...v0.171.0) (2021-04-28)

**New services:**

- controltower

**New actions:**

- codebuild:GetReportGroupTrend
- connect:AssociateCustomerProfilesDomain
- connect:CreateIntegrationAssociation
- connect:CreateUseCase
- connect:DeleteIntegrationAssociation
- connect:DeleteUseCase
- connect:DisassociateCustomerProfilesDomain
- connect:ListIntegrationAssociations
- connect:ListUseCases
- iotsitewise:DescribeDefaultEncryptionConfiguration
- iotsitewise:PutDefaultEncryptionConfiguration
- redshift:CreateUsageLimit
- redshift:DeleteUsageLimit
- redshift:DescribeUsageLimits
- redshift:ModifyUsageLimit
- synthetics:DescribeRuntimeVersions
- synthetics:GetCanary

**New resource types:**

- connect:integration-association
- connect:use-case
- redshift:usagelimit

## [0.170.0](https://github.com/udondan/iam-floyd/compare/v0.169.0...v0.170.0) (2021-04-27)

**New services:**

- ssm-incidents

**New actions:**

- cloudformation:RecordHandlerProgress
- devops-guru:DescribeFeedback
- devops-guru:GetCostEstimation
- devops-guru:StartCostEstimation
- logs:DeleteQueryDefinition
- logs:DescribeQueryDefinitions
- logs:PutQueryDefinition
- mediapackage-vod:UpdatePackagingGroup
- mediapackage:RotateChannelCredentials
- mobiletargeting:GetApplicationDateRangeKpi
- mobiletargeting:GetCampaignDateRangeKpi
- mobiletargeting:GetJourneyDateRangeKpi
- mobiletargeting:GetJourneyExecutionActivityMetrics
- mobiletargeting:GetJourneyExecutionMetrics
- rds:CreateCustomAvailabilityZone
- rds:DeleteCustomAvailabilityZone
- rds:DeleteInstallationMedia
- rds:DescribeCustomAvailabilityZones
- rds:DescribeInstallationMedia
- rds:ImportInstallationMedia
- rds:ModifyCertificates
- rds:StartDBInstanceAutomatedBackupsReplication
- rds:StopDBInstanceAutomatedBackupsReplication
- route53domains:AcceptDomainTransferFromAnotherAwsAccount
- route53domains:CancelDomainTransferToAnotherAwsAccount
- route53domains:CheckDomainTransferability
- route53domains:RejectDomainTransferFromAnotherAwsAccount
- route53domains:TransferDomainToAnotherAwsAccount
- securityhub:AcceptAdministratorInvitation
- securityhub:DisassociateFromAdministratorAccount
- securityhub:GetAdministratorAccount
- snowball:CreateReturnShippingLabel
- snowball:DescribeReturnShippingLabel
- snowball:GetSoftwareUpdates
- snowball:ListCompatibleImages
- snowball:UpdateJobShipmentState

**Updated action access level:**

- mediapackage-vod:TagResource: Write -> Tagging
- mediapackage-vod:UntagResource: Write -> Tagging
- mediapackage:TagResource: Write -> Tagging
- mediapackage:UntagResource: Write -> Tagging

**New resource types:**

- logs:destination

## [0.169.0](https://github.com/udondan/iam-floyd/compare/v0.168.0...v0.169.0) (2021-04-23)

**New actions:**

- appsync:CreateApiCache
- appsync:DeleteApiCache
- appsync:FlushApiCache
- appsync:GetApiCache
- appsync:UpdateApiCache
- elastic-inference:DescribeAcceleratorOfferings
- elastic-inference:DescribeAcceleratorTypes
- elastic-inference:DescribeAccelerators
- elastic-inference:ListTagsForResource
- elastic-inference:TagResource
- elastic-inference:UntagResource
- swf:UndeprecateActivityType
- swf:UndeprecateDomain
- swf:UndeprecateWorkflowType

## [0.168.0](https://github.com/udondan/iam-floyd/compare/v0.167.0...v0.168.0) (2021-04-22)

**New actions:**

- cloudhsm:ModifyBackupAttributes
- cloudhsm:ModifyCluster
- connect:ListRealtimeContactAnalysisSegments
- guardduty:GetMemberDetectors
- guardduty:GetUsageStatistics
- guardduty:UpdateMemberDetectors
- mgh:ListApplicationStates
- redshift:ModifyAquaConfiguration

## [0.167.0](https://github.com/udondan/iam-floyd/compare/v0.166.0...v0.167.0) (2021-04-20)

**New actions:**

- amplify:ListTagsForResource
- ec2:DisableSerialConsoleAccess
- ec2:EnableSerialConsoleAccess
- ec2:GetSerialConsoleAccessStatus
- glue:ResumeWorkflowRun
- glue:StopWorkflowRun
- grafana:AssociateLicense
- grafana:DisassociateLicense
- inspector:CreateExclusionsPreview
- inspector:DescribeExclusions
- inspector:GetAssessmentReport
- inspector:GetExclusionsPreview
- inspector:ListExclusions

**Updated action access level:**

- glue:DeleteResourcePolicy: Write -> Permissions management
- glue:PutResourcePolicy: Write -> Permissions management
- inspector:ListTagsForResource: List -> Read

**New condition keys:**

- ec2:NewInstanceProfile

## [0.166.0](https://github.com/udondan/iam-floyd/compare/v0.165.0...v0.166.0) (2021-04-17)

**New actions:**

- cloudfront:CreateKeyGroup
- cloudfront:CreateMonitoringSubscription
- cloudfront:CreateRealtimeLogConfig
- cloudfront:DeleteKeyGroup
- cloudfront:DeleteMonitoringSubscription
- cloudfront:DeleteRealtimeLogConfig
- cloudfront:GetKeyGroup
- cloudfront:GetKeyGroupConfig
- cloudfront:GetMonitoringSubscription
- cloudfront:GetRealtimeLogConfig
- cloudfront:ListDistributionsByKeyGroup
- cloudfront:ListDistributionsByRealtimeLogConfig
- cloudfront:ListKeyGroups
- cloudfront:ListRealtimeLogConfigs
- cloudfront:UpdateKeyGroup
- cloudfront:UpdateRealtimeLogConfig
- greengrass:GetComponentVersionArtifact
- greengrass:ResolveComponentCandidates
- quicksight:GetAnonymousUserEmbedUrl
- resource-groups:PutGroupConfiguration
- servicecatalog:DescribePortfolioShares
- servicecatalog:GetProvisionedProductOutputs
- servicecatalog:UpdatePortfolioShare

**Updated action access level:**

- quicksight:CreateCustomPermissions: Write -> Permissions management
- quicksight:DeleteCustomPermissions: Write -> Permissions management
- quicksight:ListIngestions: Read -> List
- quicksight:ListNamespaces: Write -> List
- quicksight:SearchDirectoryGroups: Write -> List
- quicksight:UpdateAnalysisPermissions: Write -> Permissions management
- quicksight:UpdateCustomPermissions: Write -> Permissions management
- quicksight:UpdateDashboardPermissions: Write -> Permissions management
- quicksight:UpdateTemplatePermissions: Write -> Permissions management
- quicksight:UpdateThemePermissions: Write -> Permissions management

**New resource types:**

- cloudfront:realtime-log-config

## [0.165.0](https://github.com/udondan/iam-floyd/compare/v0.164.0...v0.165.0) (2021-04-16)

**New resource types:**

- mobiletargeting:phone-number-validate

## [0.164.0](https://github.com/udondan/iam-floyd/compare/v0.163.0...v0.164.0) (2021-04-15)

**New actions:**

- iot:CancelDetectMitigationActionsTask
- iot:CreateCustomMetric
- iot:DeleteCustomMetric
- iot:DescribeCustomMetric
- iot:DescribeDetectMitigationActionsTask
- iot:GetBehaviorModelTrainingSummaries
- iot:ListCustomMetrics
- iot:ListDetectMitigationActionsExecutions
- iot:ListDetectMitigationActionsTasks
- iot:StartDetectMitigationActionsTask
- iot:UpdateCustomMetric
- iotanalytics:ListDatasetContents
- route53:ActivateKeySigningKey
- route53:CreateKeySigningKey
- route53:DeactivateKeySigningKey
- route53:DeleteKeySigningKey
- route53:DisableHostedZoneDNSSEC
- route53:EnableHostedZoneDNSSEC
- route53:GetDNSSEC
- sts:SetSourceIdentity

**New resource types:**

- iot:custommetric

**New condition keys:**

- sts:SourceIdentity

## [0.163.0](https://github.com/udondan/iam-floyd/compare/v0.162.0...v0.163.0) (2021-04-14)

**New actions:**

- a4b:AssociateDeviceWithNetworkProfile
- a4b:CreateGatewayGroup
- a4b:CreateNetworkProfile
- a4b:DeleteDeviceUsageData
- a4b:DeleteGatewayGroup
- a4b:DeleteNetworkProfile
- a4b:GetGateway
- a4b:GetGatewayGroup
- a4b:GetInvitationConfiguration
- a4b:ListGatewayGroups
- a4b:ListGateways
- a4b:PutInvitationConfiguration
- a4b:SendAnnouncement
- a4b:UpdateGateway
- a4b:UpdateGatewayGroup
- a4b:UpdateNetworkProfile
- imagebuilder:ImportComponent

**New resource types:**

- a4b:gateway
- a4b:gatewaygroup

## [0.162.0](https://github.com/udondan/iam-floyd/compare/v0.161.0...v0.162.0) (2021-04-13)

**New actions:**

- fsx:CopyBackup
- fsx:ManageBackupPrincipalAssociations
- groundtruthlabeling:AssociatePatchToManifestJob

**Updated action access level:**

- fsx:DescribeAssociatedFileGateways: Write -> Read

**New condition keys:**

- fsx:IsBackupCopyDestination
- fsx:IsBackupCopySource

## [0.161.0](https://github.com/udondan/iam-floyd/compare/v0.160.0...v0.161.0) (2021-04-10)

:warning: **Removed resource types:**

- ses:event-destination
- ses:receipt-filter
- ses:receipt-rule
- ses:receipt-rule-set

**New actions:**

- dbqms:CreateTab
- dbqms:DeleteTab
- dbqms:DescribeTabs
- dbqms:UpdateTab

**Updated action access level:**

- lookoutvision:DetectAnomalies: Read -> Write
- ses:DeleteIdentityPolicy: Write -> Permissions management
- ses:ListReceiptFilters: List -> Read
- ses:ListReceiptRuleSets: List -> Read
- ses:ListVerifiedEmailAddresses: List -> Read
- ses:PutIdentityPolicy: Write -> Permissions management

**New resource types:**

- iotwireless:SidewalkAccount
- iotwireless:WirelessGatewayTaskDefinition

## [0.160.0](https://github.com/udondan/iam-floyd/compare/v0.159.0...v0.160.0) (2021-04-09)

**New actions:**

- access-analyzer:CancelPolicyGeneration
- access-analyzer:GetGeneratedPolicy
- access-analyzer:ListPolicyGenerations
- access-analyzer:StartPolicyGeneration
- honeycode:CreateTeam
- honeycode:DeregisterGroups
- honeycode:DescribeTeam
- honeycode:ListDomains
- honeycode:ListGroups
- honeycode:RegisterDomainForVerification
- honeycode:RegisterGroups
- honeycode:RestartDomainVerification
- honeycode:UpdateTeam
- ivs:CreateRecordingConfiguration
- ivs:DeleteRecordingConfiguration
- ivs:GetRecordingConfiguration
- ivs:ListRecordingConfigurations

**Updated action access level:**

- firehose:DescribeDeliveryStream: List -> Read
- firehose:TagDeliveryStream: Write -> Tagging
- firehose:UntagDeliveryStream: Write -> Tagging

**New resource types:**

- ivs:Recording-Configuration

**New condition keys:**

- elasticache:AtRestEncryptionEnabled
- elasticache:AuthTokenEnabled
- elasticache:AutomaticFailoverEnabled
- elasticache:CacheNodeType
- elasticache:CacheParameterGroupName
- elasticache:ClusterModeEnabled
- elasticache:EngineType
- elasticache:EngineVersion
- elasticache:KmsKeyId
- elasticache:MultiAZEnabled
- elasticache:NumNodeGroups
- elasticache:ReplicasPerNodeGroup
- elasticache:RequestTag/${TagKey}
- elasticache:ResourceTag/${TagKey}
- elasticache:SnapshotRetentionLimit
- elasticache:TagKeys
- elasticache:TransitEncryptionEnabled

## [0.159.0](https://github.com/udondan/iam-floyd/compare/v0.158.0...v0.159.0) (2021-04-08)

**New services:**

- mgn

**New actions:**

- shield:AssociateHealthCheck
- shield:AssociateProactiveEngagementDetails
- shield:CreateProtectionGroup
- shield:DeleteProtectionGroup
- shield:DescribeAttackStatistics
- shield:DescribeProtectionGroup
- shield:DisableProactiveEngagement
- shield:DisassociateHealthCheck
- shield:EnableProactiveEngagement
- shield:ListProtectionGroups
- shield:ListResourcesInProtectionGroup
- shield:ListTagsForResource
- shield:TagResource
- shield:UntagResource
- shield:UpdateProtectionGroup

**New resource types:**

- shield:protection-group

**New condition keys:**

- shield:RequestTag/${TagKey}
- shield:ResourceTag/${TagKey}
- shield:TagKeys

## [0.158.0](https://github.com/udondan/iam-floyd/compare/v0.157.0...v0.158.0) (2021-04-07)


## [0.157.0](https://github.com/udondan/iam-floyd/compare/v0.156.0...v0.157.0) (2021-04-06)

:warning: **Removed resource types:**

- lightsail:PeeredVpc

**New actions:**

- lightsail:AttachCertificateToDistribution
- lightsail:CreateCertificate
- lightsail:CreateContactMethod
- lightsail:CreateContainerService
- lightsail:CreateContainerServiceDeployment
- lightsail:CreateContainerServiceRegistryLogin
- lightsail:CreateDistribution
- lightsail:DeleteAlarm
- lightsail:DeleteAutoSnapshot
- lightsail:DeleteCertificate
- lightsail:DeleteContactMethod
- lightsail:DeleteContainerImage
- lightsail:DeleteContainerService
- lightsail:DeleteDistribution
- lightsail:DetachCertificateFromDistribution
- lightsail:DisableAddOn
- lightsail:EnableAddOn
- lightsail:GetAlarms
- lightsail:GetAutoSnapshots
- lightsail:GetCertificates
- lightsail:GetContactMethods
- lightsail:GetContainerAPIMetadata
- lightsail:GetContainerImages
- lightsail:GetContainerLog
- lightsail:GetContainerServiceDeployments
- lightsail:GetContainerServiceMetricData
- lightsail:GetContainerServicePowers
- lightsail:GetContainerServices
- lightsail:GetDistributionBundles
- lightsail:GetDistributionLatestCacheReset
- lightsail:GetDistributionMetricData
- lightsail:GetDistributions
- lightsail:PutAlarm
- lightsail:RegisterContainerImage
- lightsail:ResetDistributionCache
- lightsail:SendContactMethodVerification
- lightsail:SetIpAddressType
- lightsail:TestAlarm
- lightsail:UpdateContainerService
- lightsail:UpdateDistribution
- lightsail:UpdateDistributionBundle
- rekognition:ListTagsForResource
- rekognition:TagResource
- rekognition:UntagResource

**Updated action access level:**

- lightsail:GetBlueprints: List -> Read
- lightsail:GetBundles: List -> Read
- lightsail:GetCloudFormationStackRecords: List -> Read
- lightsail:GetDiskSnapshots: List -> Read
- lightsail:GetDisks: List -> Read
- lightsail:GetExportSnapshotRecords: List -> Read
- lightsail:GetInstanceSnapshots: List -> Read
- lightsail:GetKeyPair: List -> Read
 lightsail:GetKeyPairs;Read
- lightsail:GetRegions: List -> Read
-lightsail:GetRelationalDatabase;List
-lightsail:GetRelationalDatabaseBlueprints;List
- lightsail:GetRelationalDatabaseBundles: List -> Read
+lightsail:GetRelationalDatabaseBlueprints;Read
+lightsail:GetRelationalDatabaseBundles;Read
 lightsail:GetRelationalDatabaseEvents;Read
 lightsail:GetRelationalDatabaseLogEvents;Read
 lightsail:GetRelationalDatabaseLogStreams;Read
 lightsail:GetRelationalDatabaseMasterUserPassword;Write
 lightsail:GetRelationalDatabaseMetricData;Read
-lightsail:GetRelationalDatabaseParameters;List
-lightsail:GetRelationalDatabaseSnapshot;List
- lightsail:GetRelationalDatabaseSnapshots: List -> Read
+lightsail:GetRelationalDatabaseSnapshot;Read
+lightsail:GetRelationalDatabaseSnapshots;Read
 lightsail:GetRelationalDatabases;Read
- lightsail:GetRelationalDatabaseBlueprints: List -> Read
- lightsail:GetRelationalDatabaseBundles: List -> Read
- lightsail:GetRelationalDatabaseParameters: List -> Read
-lightsail:GetRelationalDatabaseSnapshot;List
- lightsail:GetRelationalDatabaseSnapshots: List -> Read
+lightsail:GetRelationalDatabaseSnapshots;Read
- lightsail:GetRelationalDatabaseSnapshots: List -> Read
- lightsail:TagResource: Write -> Tagging
- lightsail:UntagResource: Write -> Tagging

**New resource types:**

- lightsail:Alarm
- lightsail:Certificate
- lightsail:ContactMethod
- lightsail:ContainerService
- lightsail:Distribution

**New condition keys:**

- rekognition:RequestTag/${TagKey}
- rekognition:ResourceTag/${TagKey}
- rekognition:TagKeys

## [0.156.0](https://github.com/udondan/iam-floyd/compare/v0.155.0...v0.156.0) (2021-04-03)

**New actions:**

- cloudwatch:DeleteMetricStream
- cloudwatch:GetMetricStream
- cloudwatch:ListMetricStreams
- cloudwatch:PutMetricStream
- cloudwatch:StartMetricStreams
- cloudwatch:StopMetricStreams
- config:DescribeAggregateComplianceByConformancePacks
- config:GetAggregateConformancePackComplianceSummary
- ec2-instance-connect:SendSerialConsoleSSHPublicKey
- frauddetector:CancelBatchPredictionJob
- frauddetector:CreateBatchPredictionJob
- frauddetector:DeleteBatchPredictionJob
- frauddetector:GetBatchPredictionJobs
- fsx:AssociateFileGateway
- fsx:DescribeAssociatedFileGateways
- fsx:DisassociateFileGateway
- route53resolver:AssociateFirewallRuleGroup
- route53resolver:CreateFirewallDomainList
- route53resolver:CreateFirewallRule
- route53resolver:CreateFirewallRuleGroup
- route53resolver:DeleteFirewallDomainList
- route53resolver:DeleteFirewallRule
- route53resolver:DeleteFirewallRuleGroup
- route53resolver:DisassociateFirewallRuleGroup
- route53resolver:GetFirewallConfig
- route53resolver:GetFirewallDomainList
- route53resolver:GetFirewallRuleGroup
- route53resolver:GetFirewallRuleGroupAssociation
- route53resolver:GetFirewallRuleGroupPolicy
- route53resolver:ImportFirewallDomains
- route53resolver:ListFirewallConfigs
- route53resolver:ListFirewallDomainLists
- route53resolver:ListFirewallDomains
- route53resolver:ListFirewallRuleGroupAssociations
- route53resolver:ListFirewallRuleGroups
- route53resolver:ListFirewallRules
- route53resolver:PutFirewallRuleGroupPolicy
- route53resolver:UpdateFirewallConfig
- route53resolver:UpdateFirewallDomains
- route53resolver:UpdateFirewallRule
- route53resolver:UpdateFirewallRuleGroupAssociation

**Updated action access level:**

- config:DescribeAggregateComplianceByConfigRules: List -> Read
- config:DescribeComplianceByConfigRule: List -> Read
- config:DescribeComplianceByResource: List -> Read
- config:DescribeConfigRuleEvaluationStatus: List -> Read
- config:DescribeConfigurationAggregatorSourcesStatus: List -> Read
- config:DescribeConfigurationRecorderStatus: List -> Read
- config:DescribeConformancePacks: Read -> List
- config:DescribeDeliveryChannelStatus: List -> Read
- config:DescribeOrganizationConfigRules: Read -> List
- config:DescribeOrganizationConformancePacks: Read -> List
- config:DescribeRemediationExecutionStatus: List -> Read
- config:ListTagsForResource: List -> Read

**New resource types:**

- cloudwatch:metric-stream
- frauddetector:batch-prediction
- route53resolver:firewall-config
- route53resolver:firewall-domain-list
- route53resolver:firewall-rule-group
- route53resolver:firewall-rule-group-association

**New condition keys:**

- comprehend:ModelKmsKey
- ram:PermissionResourceType

## [0.155.0](https://github.com/udondan/iam-floyd/compare/v0.154.0...v0.155.0) (2021-03-30)

**New actions:**

- codeguru-reviewer:CreateCodeReview
- codeguru-reviewer:ListTagsForResource
- codeguru-reviewer:TagResource
- codeguru-reviewer:UnTagResource
- detective:ListTagsForResource
- detective:TagResource
- detective:UntagResource
- elemental-support-cases:CheckCasePermission
- iot:ConfirmTopicRuleDestination
- iot:CreateTopicRuleDestination
- iot:DeleteTopicRuleDestination
- iot:GetTopicRuleDestination
- iot:ListTopicRuleDestinations
- iot:UpdateTopicRuleDestination
- storagegateway:AssociateFileSystem
- storagegateway:DescribeFileSystemAssociations
- storagegateway:DisassociateFileSystem
- storagegateway:ListFileSystemAssociations
- storagegateway:UpdateFileSystemAssociation

**New resource types:**

- codeguru-reviewer:connection
- iot:destination
- storagegateway:fs-association

**New condition keys:**

- detective:RequestTag/${TagKey}
- detective:ResourceTag/${TagKey}
- detective:TagKeys

## [0.154.0](https://github.com/udondan/iam-floyd/compare/v0.153.0...v0.154.0) (2021-03-28)

**New actions:**

- lookoutmetrics:ListTagsForResource
- lookoutmetrics:TagResource
- lookoutmetrics:UntagResource

**New condition keys:**

- lookoutmetrics:RequestTag/${TagKey}
- lookoutmetrics:ResourceTag/${TagKey}
- lookoutmetrics:TagKeys

## [0.153.0](https://github.com/udondan/iam-floyd/compare/v0.152.0...v0.153.0) (2021-03-26)

:warning: **Removed resource types:**

- apigateway:apigateway-general

**New actions:**

- apigateway:AddCertificateToDomain
- apigateway:RemoveCertificateFromDomain

**Updated action access level:**

- apigateway:SetWebACL: Write -> Permissions management
- apigateway:UpdateRestApiPolicy: Write -> Permissions management

**New resource types:**

- apigateway:AccessLogSettings
- apigateway:Account
- apigateway:Api
- apigateway:ApiKey
- apigateway:ApiKeys
- apigateway:ApiMapping
- apigateway:ApiMappings
- apigateway:Apis
- apigateway:Authorizer
- apigateway:Authorizers
- apigateway:AuthorizersCache
- apigateway:BasePathMapping
- apigateway:BasePathMappings
- apigateway:ClientCertificate
- apigateway:ClientCertificates
- apigateway:Cors
- apigateway:Deployment
- apigateway:Deployments
- apigateway:DocumentationPart
- apigateway:DocumentationParts
- apigateway:DocumentationVersion
- apigateway:DocumentationVersions
- apigateway:DomainName
- apigateway:DomainNames
- apigateway:ExportedAPI
- apigateway:GatewayResponse
- apigateway:GatewayResponses
- apigateway:Integration
- apigateway:IntegrationResponse
- apigateway:IntegrationResponses
- apigateway:Integrations
- apigateway:Method
- apigateway:MethodResponse
- apigateway:Model
- apigateway:ModelTemplate
- apigateway:Models
- apigateway:RequestValidator
- apigateway:RequestValidators
- apigateway:Resource
- apigateway:Resources
- apigateway:RestApi
- apigateway:RestApis
- apigateway:Route
- apigateway:RouteRequestParameter
- apigateway:RouteResponse
- apigateway:RouteResponses
- apigateway:RouteSettings
- apigateway:Routes
- apigateway:Sdk
- apigateway:Stage
- apigateway:Stages
- apigateway:Template
- apigateway:UsagePlan
- apigateway:UsagePlanKey
- apigateway:UsagePlanKeys
- apigateway:UsagePlans
- apigateway:VpcLink
- apigateway:VpcLinks

**New condition keys:**

- apigateway:Request/AccessLoggingDestination
- apigateway:Request/AccessLoggingFormat
- apigateway:Request/ApiKeyRequired
- apigateway:Request/ApiName
- apigateway:Request/AuthorizerType
- apigateway:Request/AuthorizerUri
- apigateway:Request/DisableExecuteApiEndpoint
- apigateway:Request/EndpointType
- apigateway:Request/MtlsTrustStoreUri
- apigateway:Request/MtlsTrustStoreVersion
- apigateway:Request/RouteAuthorizationType
- apigateway:Request/SecurityPolicy
- apigateway:Request/StageName
- apigateway:RequestTag/${TagKey}
- apigateway:Resource/AccessLoggingDestination
- apigateway:Resource/AccessLoggingFormat
- apigateway:Resource/ApiKeyRequired
- apigateway:Resource/ApiName
- apigateway:Resource/AuthorizerType
- apigateway:Resource/AuthorizerUri
- apigateway:Resource/DisableExecuteApiEndpoint
- apigateway:Resource/EndpointType
- apigateway:Resource/MtlsTrustStoreUri
- apigateway:Resource/MtlsTrustStoreVersion
- apigateway:Resource/RouteAuthorizationType
- apigateway:Resource/SecurityPolicy
- apigateway:ResourceTag/${TagKey}

## [0.152.0](https://github.com/udondan/iam-floyd/compare/v0.151.0...v0.152.0) (2021-03-25)

:warning: **Removed actions:**

- iotfleethub:CreateDashboard
- iotfleethub:DeleteDashboard
- iotfleethub:DescribeDashboard
- iotfleethub:ListDashboards
- iotfleethub:UpdateDashboard

:warning: **Removed resource types:**

- iotfleethub:dashboard

**New actions:**

- ecr-public:ListTagsForResource
- ecr-public:TagResource
- ecr-public:UntagResource

**New condition keys:**

- ecr-public:RequestTag
- ecr-public:ResourceTag
- ecr-public:TagKeys

## [0.151.0](https://github.com/udondan/iam-floyd/compare/v0.149.0...v0.151.0) (2021-03-24)

**New actions:**

- athena:CreatePreparedStatement
- athena:DeletePreparedStatement
- athena:GetPreparedStatement
- athena:ListPreparedStatements
- athena:UpdatePreparedStatement
- gamelift:CreateFleetLocations
- gamelift:DeleteFleetLocations
- gamelift:DescribeFleetLocationAttributes
- gamelift:DescribeFleetLocationCapacity
- gamelift:DescribeFleetLocationUtilization

**Updated action access level:**

- gamelift:ListTagsForResource: List -> Read
- gamelift:RequestUploadCredentials: Read -> Write

## [0.150.0] (2021-03-23)

**New actions:**

- gamelift:CreateFleetLocations
- gamelift:DeleteFleetLocations
- gamelift:DescribeFleetLocationAttributes
- gamelift:DescribeFleetLocationCapacity
- gamelift:DescribeFleetLocationUtilization

**Updated action access level:**

- gamelift:ListTagsForResource: List -> Read
- gamelift:RequestUploadCredentials: Read -> Write

## [0.149.0](https://github.com/udondan/iam-floyd/compare/v0.148.0...v0.149.0) (2021-03-20)

**New services:**

- healthlake
- s3-object-lambda

**Updated action access level:**

- ram:TagResource: Write -> Tagging
- ram:UntagResource: Write -> Tagging

## [0.148.0](https://github.com/udondan/iam-floyd/compare/v0.147.0...v0.148.0) (2021-03-19)

**New actions:**

- s3:CreateAccessPointForObjectLambda
- s3:DeleteAccessPointForObjectLambda
- s3:DeleteAccessPointPolicyForObjectLambda
- s3:GetAccessPointConfigurationForObjectLambda
- s3:GetAccessPointForObjectLambda
- s3:GetAccessPointPolicyForObjectLambda
- s3:GetAccessPointPolicyStatusForObjectLambda
- s3:ListAccessPointsForObjectLambda
- s3:PutAccessPointConfigurationForObjectLambda
- s3:PutAccessPointPolicyForObjectLambda

**New resource types:**

- s3:objectlambdaaccesspoint

## [0.147.0](https://github.com/udondan/iam-floyd/compare/v0.146.0...v0.147.0) (2021-03-18)

**New actions:**

- access-analyzer:ValidatePolicy
- proton:ListTagsForResource
- proton:TagResource
- proton:UntagResource

**New actions (SES V2):**

- ses:CreateContact
- ses:CreateContactList
- ses:CreateEmailIdentityPolicy
- ses:CreateEmailTemplate
- ses:CreateImportJob
- ses:DeleteContact
- ses:DeleteContactList
- ses:DeleteEmailIdentityPolicy
- ses:DeleteEmailTemplate
- ses:DeleteSuppressedDestination
- ses:GetContact
- ses:GetContactList
- ses:GetEmailIdentityPolicies
- ses:GetEmailTemplate
- ses:GetImportJob
- ses:GetSuppressedDestination
- ses:ListContactLists
- ses:ListContacts
- ses:ListEmailTemplates
- ses:ListImportJobs
- ses:ListSuppressedDestinations
- ses:PutAccountDetails
- ses:PutAccountSuppressionAttributes
- ses:PutConfigurationSetSuppressionOptions
- ses:PutEmailIdentityConfigurationSetAttributes
- ses:PutEmailIdentityDkimSigningAttributes
- ses:PutSuppressedDestination
- ses:SendBulkEmail
- ses:TestRenderEmailTemplate
- ses:UpdateContact
- ses:UpdateContactList
- ses:UpdateEmailIdentityPolicy
- ses:UpdateEmailTemplate

**Updated action access level:**

- securityhub:ListTagsForResource: List -> Read
- securityhub:TagResource: Write -> Tagging
- securityhub:UntagResource: Write -> Tagging

**New resource types (SES V2):**

- ses:contact-list
- ses:import-job

**New condition keys:**

- proton:RequestTag
- proton:ResourceTag
- proton:TagKeys

## [0.146.0](https://github.com/udondan/iam-floyd/compare/v0.145.0...v0.146.0) (2021-03-17)

:warning: **Removed condition keys:**

- rds-data:RequestTag

**New services:**

- fis

**New actions:**

- datasync:UpdateTaskExecution
- ses:GetDomainDeliverabilityCampaign
- ses:ListDomainDeliverabilityCampaigns

**New resource types:**

- rds-data:cluster

## [0.145.0](https://github.com/udondan/iam-floyd/compare/v0.144.1...v0.145.0) (2021-03-16)

**New actions:**

- cognito-identity:GetPrincipalTagAttributeMap
- cognito-identity:SetPrincipalTagAttributeMap
- comprehend:ContainsPiiEntities
- fsx:AssociateFileSystemAliases
- fsx:DescribeFileSystemAliases
- fsx:DisassociateFileSystemAliases

**Updated action access level:**

- cognito-identity:ListTagsForResource: List -> Read

## [0.144.1](https://github.com/udondan/iam-floyd/compare/v0.144.0...v0.144.1) (2021-03-13)

Optimization of automated change detection, for generating changelog: [Store stats with servive prefix](https://github.com/udondan/iam-floyd/pull/58)

## [0.144.0](https://github.com/udondan/iam-floyd/compare/v0.143.0...v0.144.0) (2021-03-12)

**New actions:**

- access-analyzer:CreateAccessPreview
- access-analyzer:GetAccessPreview
- access-analyzer:ListAccessPreviewFindings
- access-analyzer:ListAccessPreviews
- backup:DisassociateRecoveryPoint

**Updated action access level:**

- backup:ListTags: List -> Read

## [0.143.0](https://github.com/udondan/iam-floyd/compare/v0.142.0...v0.143.0) (2021-03-11)

**New actions:**

- ec2:DescribeAddressesAttribute
- ec2:ModifyAddressAttribute
- ec2:ResetAddressAttribute
- forecast:StopResource
- rds:CreateDBProxyEndpoint
- rds:DeleteDBProxyEndpoint
- rds:DescribeDBProxyEndpoints
- rds:ModifyDBProxyEndpoint

**New resource types:**

- rds:proxy-endpoint

**New condition keys:**

- ec2:OutpostArn
- ec2:SourceOutpostArn

## [0.142.0](https://github.com/udondan/iam-floyd/compare/v0.141.0...v0.142.0) (2021-03-10)

:warning: **Breaking changes:**

Conditions which belong to other services than the current, now include the service name in the method name. This results in some renamed methods:

- codestar: ifResourceTag -> if**Iam**ResourceTag
- ec2instanceconnect: ifOsuser -> if**Ec2**Osuser
- ec2instanceconnect: ifResourceTag -> if**Ec2**ResourceTag
- marketplacecatalog: ifChangeType -> if**Catalog**ChangeType
- securitytokenservice: ifResourceTag -> if**Iam**ResourceTag
- securitytokenservice: ifNamequalifier -> if**Saml**Namequalifier
- securitytokenservice: ifSub -> if**Saml**Sub
- securitytokenservice: ifSubType -> if**Saml**SubType
- securitytokenservice: ifAud -> if**Saml**Aud
- securitytokenservice: ifIss -> if**Saml**Iss
- securitytokenservice: ifDoc -> if**Saml**Doc
- securitytokenservice: ifCn -> if**Saml**Cn
- securitytokenservice: ifCommonName -> if**Saml**CommonName
- securitytokenservice: ifEduorghomepageuri -> - if**Saml**Eduorghomepageuri
- securitytokenservice: ifEduorgidentityauthnpolicyuri -> - if**Saml**Eduorgidentityauthnpolicyuri
- securitytokenservice: ifEduorglegalname -> - if**Saml**Eduorglegalname
- securitytokenservice: ifEduorgsuperioruri -> - if**Saml**Eduorgsuperioruri
- securitytokenservice: ifEduorgwhitepagesuri -> - if**Saml**Eduorgwhitepagesuri
- securitytokenservice: ifEdupersonaffiliation -> - if**Saml**Edupersonaffiliation
- securitytokenservice: ifEdupersonassurance -> - if**Saml**Edupersonassurance
- securitytokenservice: ifEdupersonentitlement -> - if**Saml**Edupersonentitlement
- securitytokenservice: ifEdupersonnickname -> - if**Saml**Edupersonnickname
- securitytokenservice: ifEdupersonorgdn -> if**Saml**Edupersonorgdn
- securitytokenservice: ifEdupersonorgunitdn -> - if**Saml**Edupersonorgunitdn
- securitytokenservice: ifEdupersonprimaryaffiliation -> - if**Saml**Edupersonprimaryaffiliation
- securitytokenservice: ifEdupersonprimaryorgunitdn -> - if**Saml**Edupersonprimaryorgunitdn
- securitytokenservice: ifEdupersonprincipalname -> - if**Saml**Edupersonprincipalname
- securitytokenservice: ifEdupersonscopedaffiliation -> - if**Saml**Edupersonscopedaffiliation
- securitytokenservice: ifEdupersontargetedid -> - if**Saml**Edupersontargetedid
- securitytokenservice: ifGivenName -> if**Saml**GivenName
- securitytokenservice: ifMail -> if**Saml**Mail
- securitytokenservice: ifName -> if**Saml**Name
- securitytokenservice: ifOrganizationStatus -> - if**Saml**OrganizationStatus
- securitytokenservice: ifPrimaryGroupSID -> - if**Saml**PrimaryGroupSID
- securitytokenservice: ifSurname -> if**Saml**Surname
- securitytokenservice: ifUid -> if**Saml**Uid
- securitytokenservice: ifX500UniqueIdentifier -> - if**Saml**X500UniqueIdentifier

**New resource types:**

- ssm:task

**New condition keys:**

- ssm:cluster

## [0.141.0](https://github.com/udondan/iam-floyd/compare/v0.140.0...v0.141.0) (2021-03-09)


## [0.140.0](https://github.com/udondan/iam-floyd/compare/v0.139.0...v0.140.0) (2021-03-06)

**New actions:**

- events:CreateApiDestination
- events:CreateConnection
- events:DeauthorizeConnection
- events:DeleteApiDestination
- events:DeleteConnection
- events:DescribeApiDestination
- events:DescribeConnection
- events:InvokeApiDestination
- events:ListApiDestinations
- events:ListConnections
- events:UpdateApiDestination
- events:UpdateConnection

**Updated action access level:**

- events:PutPermission: Write -> Permissions management
- events:RemovePermission: Write -> Permissions management

**New resource types:**

- events:api-destination
- events:connection

## [0.139.0](https://github.com/udondan/iam-floyd/compare/v0.138.0...v0.139.0) (2021-03-05)

**New actions:**

- acm:GetAccountConfiguration
- acm:PutAccountConfiguration
- wellarchitected:ListTagsForResource
- wellarchitected:TagResource
- wellarchitected:UntagResource

## [0.138.0](https://github.com/udondan/iam-floyd/compare/v0.137.0...v0.138.0) (2021-02-27)

**New actions:**

- imagebuilder:ListImagePackages
- rds:FailoverGlobalCluster

## [0.137.0](https://github.com/udondan/iam-floyd/compare/v0.136.0...v0.137.0) (2021-02-26)

**New services:**

- lookoutformetrics

## [0.136.0](https://github.com/udondan/iam-floyd/compare/v0.135.0...v0.136.0) (2021-02-25)

:warning: **Removed actions:**

- comprehendmedical:DetectEntities

**New actions:**

- comprehendmedical:DescribeEntitiesDetectionV2Job
- comprehendmedical:DescribeICD10CMInferenceJob
- comprehendmedical:DescribePHIDetectionJob
- comprehendmedical:DescribeRxNormInferenceJob
- comprehendmedical:DetectEntitiesV2
- comprehendmedical:InferICD10CM
- comprehendmedical:InferRxNorm
- comprehendmedical:ListEntitiesDetectionV2Jobs
- comprehendmedical:ListICD10CMInferenceJobs
- comprehendmedical:ListPHIDetectionJobs
- comprehendmedical:ListRxNormInferenceJobs
- comprehendmedical:StartEntitiesDetectionV2Job
- comprehendmedical:StartICD10CMInferenceJob
- comprehendmedical:StartPHIDetectionJob
- comprehendmedical:StartRxNormInferenceJob
- comprehendmedical:StopEntitiesDetectionV2Job
- comprehendmedical:StopICD10CMInferenceJob
- comprehendmedical:StopPHIDetectionJob
- comprehendmedical:StopRxNormInferenceJob

## [0.135.0](https://github.com/udondan/iam-floyd/compare/v0.134.0...v0.135.0) (2021-02-24)

**New actions:**

- cloudshell:DeleteEnvironment
- cloudshell:GetEnvironmentStatus
- cloudshell:StartEnvironment
- cloudshell:StopEnvironment

## [0.134.0](https://github.com/udondan/iam-floyd/compare/v0.133.0...v0.134.0) (2021-02-23)

**New condition keys:**

- ec2:KeyPairName

## [0.133.0](https://github.com/udondan/iam-floyd/compare/v0.132.0...v0.133.0) (2021-02-17)

**Updated action access level:**

- redshift-data:ListDatabases: List -> Read
- redshift-data:ListSchemas: List -> Read

## [0.132.0](https://github.com/udondan/iam-floyd/compare/v0.131.0...v0.132.0) (2021-02-16)

**New actions:**

- sso-directory:DescribeGroup
- sso-directory:DescribeProvisioningTenant
- sso-directory:DescribeUserByUniqueAttribute
- sso-directory:GetUserPoolInfo
- sso-directory:ListGroupsForMember
- sso-directory:UpdateGroupDisplayName
- sso-directory:UpdateUserName

**Updated action access level:**

- sso-directory:DescribeGroups: List -> Read
- sso-directory:DescribeUsers: List -> Read
- sso-directory:ListBearerTokens: List -> Read
- sso-directory:ListExternalIdPCertificates: List -> Read
- sso-directory:ListExternalIdPConfigurationsForDirectory: List -> Read
- sso-directory:ListGroupsForUser: List -> Read
- sso-directory:ListMembersInGroup: List -> Read
- sso-directory:ListMfaDevicesForUser: List -> Read
- sso-directory:ListProvisioningTenants: List -> Read

## [0.131.0](https://github.com/udondan/iam-floyd/compare/v0.130.0...v0.131.0) (2021-02-13)

**New services:**

- tiros

**New actions:**

- iam:ListInstanceProfileTags
- iam:ListMFADeviceTags
- iam:ListOpenIDConnectProviderTags
- iam:ListPolicyTags
- iam:ListSAMLProviderTags
- iam:ListServerCertificateTags
- iam:TagInstanceProfile
- iam:TagMFADevice
- iam:TagOpenIDConnectProvider
- iam:TagPolicy
- iam:TagSAMLProvider
- iam:TagServerCertificate
- iam:UntagInstanceProfile
- iam:UntagMFADevice
- iam:UntagOpenIDConnectProvider
- iam:UntagPolicy
- iam:UntagSAMLProvider
- iam:UntagServerCertificate
- kinesisanalytics:CreateApplicationPresignedUrl

**Updated action access level:**

- mq:CreateTags: Write -> Tagging
- mq:DeleteTags: Write -> Tagging

**New condition keys:**

- iam:RequestTag
- iam:TagKeys

## [0.130.0](https://github.com/udondan/iam-floyd/compare/v0.129.0...v0.130.0) (2021-02-11)


## [0.129.0](https://github.com/udondan/iam-floyd/compare/v0.128.0...v0.129.0) (2021-02-10)

**New actions:**

- lookoutvision:ListTagsForResource
- lookoutvision:TagResource
- lookoutvision:UntagResource

**Updated action access level:**

- lookoutvision:ListDatasetEntries: List -> Read

## [0.128.0](https://github.com/udondan/iam-floyd/compare/v0.127.0...v0.128.0) (2021-02-06)

:warning: **Removed resource types:**

- greengrass:artifact

**New actions:**

- greengrass:GetThingRuntimeConfiguration
- greengrass:UpdateThingRuntimeConfiguration

**Updated action access level:**

- greengrass:ListBulkDeploymentDetailedReports: List -> Read
- greengrass:ListTagsForResource: List -> Read

**New resource types:**

- greengrass:thingRuntimeConfig

## [0.127.0](https://github.com/udondan/iam-floyd/compare/v0.126.0...v0.127.0) (2021-02-05)

:warning: **Removed services:**

- elementalactivations

:warning: **Removed actions:**

- elemental-activations:CompleteFileUpload
- elemental-activations:DownloadSoftware
- elemental-activations:GenerateLicenses
- elemental-activations:GetActivation
- elemental-activations:ListTagsForResource
- elemental-activations:StartFileUpload
- elemental-activations:TagResource
- elemental-activations:UntagResource

:warning: **Removed condition keys:**

- elemental-activations:RequestTag
- elemental-activations:ResourceTag
- elemental-activations:TagKeys

:warning: **Removed resource types:**

- elemental-activations:activation

**New services:**

- elementalappliancesandsoftwareactivationservice
- lexv2
- lookoutforequipment

**New actions:**

- databrew:DescribeJobRun
- storagegateway:DescribeAvailabilityMonitorTest
- storagegateway:DescribeBandwidthRateLimitSchedule
- storagegateway:StartAvailabilityMonitorTest
- storagegateway:UpdateBandwidthRateLimitSchedule
- storagegateway:UpdateSMBFileShareVisibility
- storagegateway:UpdateSMBSecurityStrategy

**Updated action access level:**

- databrew:ListDatasets: List -> Read
- databrew:ListJobs: List -> Read
- databrew:ListProjects: List -> Read
- databrew:ListRecipeVersions: List -> Read
- databrew:ListRecipes: List -> Read
- databrew:ListSchedules: List -> Read

## [0.126.0](https://github.com/udondan/iam-floyd/compare/v0.125.0...v0.126.0) (2021-02-04)

**New actions:**

- athena:ListEngineVersions

**Updated action access level:**

- athena:CreateDataCatalog: Tagging -> Write
- athena:CreateWorkGroup: Tagging -> Write
- athena:ListQueryExecutions: List -> Read
- athena:ListTableMetadata: List -> Read
- outposts:ListTagsForResource: List -> Read
- outposts:TagResource: Write -> Tagging
- outposts:UntagResource: Write -> Tagging

## [0.125.0](https://github.com/udondan/iam-floyd/compare/v0.124.0...v0.125.0) (2021-02-03)

**New actions:**

- connect:AssociateQueueQuickConnects
- connect:CreateQueue
- connect:DescribeHoursOfOperation
- connect:DescribeQueue
- connect:DisassociateQueueQuickConnects
- connect:ListQueueQuickConnects
- connect:UpdateQueueHoursOfOperation
- connect:UpdateQueueMaxContacts
- connect:UpdateQueueName
- connect:UpdateQueueOutboundCallerConfig
- connect:UpdateQueueStatus

**Updated action access level:**

- connect:ListRoutingProfileQueues: Read -> List

## [0.124.0](https://github.com/udondan/iam-floyd/compare/v0.123.0...v0.124.0) (2021-01-30)

**New actions:**

- managedblockchain:ListTagsForResource
- managedblockchain:TagResource
- managedblockchain:UntagResource
- securityhub:GetAdhocInsightResults
- securityhub:GetFreeTrialEndDate
- securityhub:GetFreeTrialUsage
- securityhub:GetInsightFindingTrend
- securityhub:GetUsage
- securityhub:SendFindingEvents
- securityhub:SendInsightEvents

**Updated action access level:**

- managedblockchain:ListProposalVotes: List -> Read
- sso:AttachManagedPolicyToPermissionSet: Write -> Permissions management
- sso:DeletePermissionsPolicy: Write -> Permissions management
- sso:DetachManagedPolicyFromPermissionSet: Write -> Permissions management
- sso:ListApplicationInstanceCertificates: List -> Read
- sso:ListDirectoryAssociations: List -> Read
- sso:ListProfileAssociations: List -> Read
- sso:ListTagsForResource: List -> Read
- sso:PutPermissionsPolicy: Write -> Permissions management
- sso:UpdatePermissionSet: Write -> Permissions management

## [0.123.0](https://github.com/udondan/iam-floyd/compare/v0.122.0...v0.123.0) (2021-01-29)

**Updated action access level:**

- databrew:ListJobRuns: List -> Read
- databrew:ListTagsForResource: List -> Read

## [0.122.0](https://github.com/udondan/iam-floyd/compare/v0.121.0...v0.122.0) (2021-01-28)

**New services:**

- appintegrations

**Updated action access level:**

- forecast:ListTagsForResource: List -> Read

## [0.121.0](https://github.com/udondan/iam-floyd/compare/v0.120.0...v0.121.0) (2021-01-23)

:warning: **Removed actions:**

- appstream:GetImageBuilders
- appstream:GetParametersForThemeAssetUpload

**New services:**

- managedserviceforgrafana

**New actions:**

- kafka:UpdateBrokerType

**Updated action access level:**

- iot1click:ListTagsForResource: List -> Read
- iot1click:TagResource: Write -> Tagging
- iot1click:UntagResource: Write -> Tagging

## [0.120.0](https://github.com/udondan/iam-floyd/compare/v0.119.0...v0.120.0) (2021-01-20)

**New actions:**

- s3:GetIntelligentTieringConfiguration
- s3:PutIntelligentTieringConfiguration

**New condition keys:**

- s3:TlsVersion

## [0.119.0](https://github.com/udondan/iam-floyd/compare/v0.118.0...v0.119.0) (2021-01-14)

:warning: **Removed actions:**

- macie2:ArchiveFindings
- macie2:ListTagsForResources
- macie2:UnarchiveFindings

**New services:**

- iotgreengrassv2

**New actions:**

- config:DeleteStoredQuery
- config:GetStoredQuery
- config:ListStoredQueries
- config:PutExternalEvaluation
- config:PutStoredQuery
- ec2:AcceptTransitGatewayMulticastDomainAssociations
- ec2:CreateTransitGatewayConnect
- ec2:CreateTransitGatewayConnectPeer
- ec2:DescribeNetworkInsightsAnalyses
- ec2:DescribeNetworkInsightsPaths
- ec2:DescribeTransitGatewayConnectPeers
- ec2:DescribeTransitGatewayConnects
- macie2:ListTagsForResource
- outposts:ListTagsForResource
- outposts:TagResource
- outposts:UntagResource
- quicksight:CreateVPCConnection
- quicksight:DeleteCustomPermissions
- quicksight:DeleteVPCConnection

**New resource types:**

- config:StoredQuery
- ssm:bucket

**New condition keys:**

- connect:InstanceId

## [0.118.0](https://github.com/udondan/iam-floyd/compare/v0.117.0...v0.118.0) (2021-01-08)

**New actions:**

- ce:GetCostCategories
- elemental-activations:CompleteFileUpload
- elemental-activations:StartFileUpload

**Updated action access level:**

- dataexchange:GetJob: Write -> Read
- elasticfilesystem:CreateFileSystem: Tagging -> Write
- signer:ListProfilePermissions: Permissions management -> Read
- xray:GetEncryptionConfig: Permissions management -> Read

**New condition keys:**

- elasticfilesystem:AccessedViaMountTarget

## [0.117.0](https://github.com/udondan/iam-floyd/compare/v0.116.0...v0.117.0) (2021-01-07)

**New actions:**

- applicationinsights:CreateLogPattern
- applicationinsights:DeleteLogPattern
- applicationinsights:DescribeLogPattern
- applicationinsights:ListConfigurationHistory
- applicationinsights:ListLogPatternSets
- applicationinsights:ListLogPatterns
- applicationinsights:ListTagsForResource
- applicationinsights:TagResource
- applicationinsights:UntagResource
- applicationinsights:UpdateLogPattern
- medialive:DeleteSchedule

## [0.116.0](https://github.com/udondan/iam-floyd/compare/v0.115.0...v0.116.0) (2021-01-05)

**Updated action access level:**

- codeguru-profiler:ListTagsForResource: Tagging -> List

## [0.115.0](https://github.com/udondan/iam-floyd/compare/v0.114.0...v0.115.0) (2020-12-31)

:warning: **Removed actions:**

- license-manager:ListReceivedLicensess

**New actions:**

- license-manager:ListReceivedLicenses
- servicecatalog:ListTagsForResource
- servicecatalog:SyncResource
- servicecatalog:TagResource
- servicecatalog:UntagResource

**Updated action access level:**

- health:DescribeHealthServiceStatusForOrganization: Permissions management -> Read
- imagebuilder:GetComponentPolicy: Permissions management -> Read
- imagebuilder:GetContainerRecipePolicy: Permissions management -> Read
- imagebuilder:GetImagePolicy: Permissions management -> Read
- imagebuilder:GetImageRecipePolicy: Permissions management -> Read
- iotsitewise:CreateAccessPolicy: Permissions management -> Write
- iotsitewise:DeleteAccessPolicy: Permissions management -> Write
- iotsitewise:DescribeAccessPolicy: Permissions management -> Read
- iotsitewise:ListAccessPolicies: Permissions management -> List
- iotsitewise:UpdateAccessPolicy: Permissions management -> Write

**New condition keys:**

- sagemaker:SourceIp
- sagemaker:SourceVpc
- sagemaker:SourceVpce

## [0.114.0](https://github.com/udondan/iam-floyd/compare/v0.113.0...v0.114.0) (2020-12-30)


## [0.113.0](https://github.com/udondan/iam-floyd/compare/v0.112.1...v0.113.0) (2020-12-28)

- `if` and `to` methods now automatically add the service prefix, if none was given
- In rare cases, where actions started with a lower case character, the generated method was also completely lowercase, instead of camelCase. This has been fixed. For example the method `todocument()` of class Cloudsearch has been renamed to `toDocument()`
- The online documentation now contains a [policy converter](https://iam-floyd.readthedocs.io/en/latest/policy-converter.html).

## [0.112.1](https://github.com/udondan/iam-floyd/compare/v0.112.0...v0.112.1) (2020-12-25)

- For CDK variant: use `@aws-cdk/aws-iam` as peer dependency instead of dependency
- No longer store package-lock

## [0.112.0](https://github.com/udondan/iam-floyd/compare/v0.111.0...v0.112.0) (2020-12-25)

:warning: **Removed actions:**

- connect:DestroyInstance
- connect:ModifyInstance

**New actions:**

- compute-optimizer:GetLambdaFunctionRecommendations
- connect:CreateQuickConnect
- connect:DeleteQuickConnect
- connect:DescribeQuickConnect
- connect:ListQuickConnects
- connect:UpdateQuickConnectConfig
- connect:UpdateQuickConnectName

**New resource types:**

- connect:quick-connect

## [0.111.0](https://github.com/udondan/iam-floyd/compare/v0.110.0...v0.111.0) (2020-12-23)

**New actions:**

- dynamodb:DescribeKinesisStreamingDestination
- dynamodb:DisableKinesisStreamingDestination
- dynamodb:EnableKinesisStreamingDestination
- glue:GetResourcePolicies
- servicequotas:ListTagsForResource
- servicequotas:TagResource
- servicequotas:UntagResource

**New condition keys:**

- servicequotas:RequestTag
- servicequotas:ResourceTag
- servicequotas:TagKeys

## [0.110.0](https://github.com/udondan/iam-floyd/compare/v0.109.0...v0.110.0) (2020-12-22)

**New actions:**

- kafka:ListConfigurationRevisions
- kafka:ListKafkaVersions
- kafka:RebootBroker
- route53resolver:GetResolverDnssecConfig
- route53resolver:ListResolverDnssecConfigs
- route53resolver:UpdateResolverDnssecConfig

**New resource types:**

- route53resolver:resolver-dnssec-config

**New condition keys:**

- rds-data:RequestTag
- s3:ResourceAccount

## [0.109.0](https://github.com/udondan/iam-floyd/compare/v0.108.0...v0.109.0) (2020-12-20)

**New actions:**

- imagebuilder:CreateContainerRecipe
- imagebuilder:DeleteContainerRecipe
- imagebuilder:GetContainerRecipe
- imagebuilder:GetContainerRecipePolicy
- imagebuilder:ListContainerRecipes
- imagebuilder:PutContainerRecipePolicy

**Updated action access level:**

- kms:ListResourceTags: Read -> List

**New resource types:**

- imagebuilder:containerRecipe

**New condition keys:**

- kms:RequestAlias
- kms:ResourceAliases
- kms:ResourceTag

## [0.108.0](https://github.com/udondan/iam-floyd/compare/v0.107.0...v0.108.0) (2020-12-18)

Condition values of type `boolean` and `number` will now be converted to strings. Both variants are accepted by IAM. Though, both, the IAM dcumentation and the IAM console, prefer strings. For consistency, Floyd will now also start to use strings.

---

:warning: **Removed resource types:**

- ec2:spot-instance-request

**New services:**

- location

**New actions:**

- ec2:CreateNetworkInsightsPath
- ec2:DeleteNetworkInsightsAnalysis
- ec2:DeleteNetworkInsightsPath
- ec2:DeleteQueuedReservedInstances
- ec2:DeleteTransitGatewayConnect
- ec2:DeleteTransitGatewayConnectPeer
- ec2:DescribeIpv6Pools
- ec2:GetAssociatedIpv6PoolCidrs
- ec2:GetGroupsForCapacityReservation
- ec2:ModifyAvailabilityZoneGroup
- ec2:ModifyVpnConnectionOptions
- ec2:RejectTransitGatewayMulticastDomainAssociations
- ec2:StartNetworkInsightsAnalysis

**New resource types:**

- cloudformation:stackset-target
- cloudformation:type
- ec2:elastic-ip
- ec2:export-image-task
- ec2:host-reservation
- ec2:import-image-task
- ec2:import-snapshot-task
- ec2:ipv4pool-ec2
- ec2:ipv6pool-ec2
- ec2:network-insights-analysis
- ec2:network-insights-path
- ec2:spot-fleet-request
- ec2:spot-instances-request
- ec2:transit-gateway-connect-peer

**New condition keys:**

- ec2:VolumeThroughput

## [0.107.0](https://github.com/udondan/iam-floyd/compare/v0.106.0...v0.107.0) (2020-12-17)

**New services:**

- cloudshell
- fleethubforawsiotdevicemanagement
- iotcoredeviceadvisor
- iotcoreforlorawan
- managedserviceforprometheus

**New actions:**

- chime:Connect
- chime:CreateAppInstance
- chime:CreateAppInstanceAdmin
- chime:CreateAppInstanceUser
- chime:CreateChannel
- chime:CreateChannelBan
- chime:CreateChannelMembership
- chime:CreateChannelModerator
- chime:DeleteAppInstance
- chime:DeleteAppInstanceAdmin
- chime:DeleteAppInstanceStreamingConfigurations
- chime:DeleteAppInstanceUser
- chime:DeleteChannel
- chime:DeleteChannelBan
- chime:DeleteChannelMembership
- chime:DeleteChannelMessage
- chime:DeleteChannelModerator
- chime:DescribeAppInstance
- chime:DescribeAppInstanceAdmin
- chime:DescribeAppInstanceUser
- chime:DescribeChannel
- chime:DescribeChannelBan
- chime:DescribeChannelMembership
- chime:DescribeChannelMembershipForAppInstanceUser
- chime:DescribeChannelModeratedByAppInstanceUser
- chime:DescribeChannelModerator
- chime:GetAppInstanceRetentionSettings
- chime:GetAppInstanceStreamingConfigurations
- chime:GetChannelMessage
- chime:GetMessagingSessionEndpoint
- chime:ListAppInstanceAdmins
- chime:ListAppInstanceUsers
- chime:ListAppInstances
- chime:ListChannelBans
- chime:ListChannelMemberships
- chime:ListChannelMembershipsForAppInstanceUser
- chime:ListChannelMessages
- chime:ListChannelModerators
- chime:ListChannels
- chime:ListChannelsModeratedByAppInstanceUser
- chime:PutAppInstanceRetentionSettings
- chime:PutAppInstanceStreamingConfigurations
- chime:RedactChannelMessage
- chime:SendChannelMessage
- chime:UpdateAppInstance
- chime:UpdateAppInstanceUser
- chime:UpdateChannel
- chime:UpdateChannelMessage
- chime:UpdateChannelReadMarker
- codestar-connections:UpdateHost
- fms:GetViolationDetails
- iot:CreateFleetMetric
- iot:DeleteFleetMetric
- iot:DescribeFleetMetric
- iot:GetBucketsAggregation
- iot:ListFleetMetrics
- iot:UpdateFleetMetric
- iotevents:BatchAcknowledgeAlarm
- iotevents:BatchDisableAlarm
- iotevents:BatchEnableAlarm
- iotevents:BatchResetAlarm
- iotevents:BatchSnoozeAlarm
- iotevents:CreateAlarmModel
- iotevents:DeleteAlarmModel
- iotevents:DescribeAlarm
- iotevents:DescribeAlarmModel
- iotevents:ListAlarmModelVersions
- iotevents:ListAlarmModels
- iotevents:ListAlarms
- iotevents:UpdateAlarmModel
- resource-groups:GetGroupConfiguration
- resource-groups:GroupResources
- resource-groups:PutGroupPolicy
- resource-groups:UngroupResources
- ssm:ListDocumentMetadataHistory
- ssm:ListOpsItemEvents
- ssm:StartChangeRequestExecution
- ssm:UpdateDocumentMetadata
- wellarchitected:AssociateLenses
- wellarchitected:CreateMilestone
- wellarchitected:DeleteWorkloadShare
- wellarchitected:DisassociateLenses
- wellarchitected:GetAnswer
- wellarchitected:GetLensReview
- wellarchitected:GetLensReviewReport
- wellarchitected:GetLensVersionDifference
- wellarchitected:GetMilestone
- wellarchitected:ListAnswers
- wellarchitected:ListLensReviewImprovements
- wellarchitected:ListLensReviews
- wellarchitected:ListLenses
- wellarchitected:ListMilestones
- wellarchitected:ListNotifications
- wellarchitected:ListShareInvitations
- wellarchitected:ListWorkloadShares
- wellarchitected:UpdateAnswer
- wellarchitected:UpdateLensReview
- wellarchitected:UpdateShareInvitation
- wellarchitected:UpdateWorkload
- wellarchitected:UpdateWorkloadShare
- wellarchitected:UpgradeLensReview

**Updated action access level:**

- glue:GetMapping: Write -> Read

**New resource types:**

- chime:app-instance
- chime:app-instance-user
- chime:channel
- iot:fleetmetric
- iotevents:alarmModel

**New condition keys:**

- iotevents:keyValue

## [0.106.0](https://github.com/udondan/iam-floyd/compare/v0.105.0...v0.106.0) (2020-12-13)

**New services:**

- marketplacecommerceanalyticsservice

**New actions:**

- iotsitewise:ListAssetRelationships
- kendra:CreateThesaurus
- kendra:DeleteThesaurus
- kendra:DescribeThesaurus
- kendra:ListThesauri
- kendra:UpdateThesaurus
- marketplacecommerceanalytics:GenerateDataSet
- marketplacecommerceanalytics:StartSupportDataExport

**Updated action access level:**

- mobilehub:GenerateProjectParameters: Read -> Write

**New resource types:**

- kendra:thesaurus

**New condition keys:**

- iotsitewise:iam

## [0.105.0](https://github.com/udondan/iam-floyd/compare/v0.104.0...v0.105.0) (2020-12-12)

**New services:**

- auditmanager
- emroneksemrcontainers

**New actions:**

- globalaccelerator:AddCustomRoutingEndpoints
- globalaccelerator:AllowCustomRoutingTraffic
- globalaccelerator:CreateCustomRoutingAccelerator
- globalaccelerator:CreateCustomRoutingEndpointGroup
- globalaccelerator:CreateCustomRoutingListener
- globalaccelerator:DeleteCustomRoutingAccelerator
- globalaccelerator:DeleteCustomRoutingEndpointGroup
- globalaccelerator:DeleteCustomRoutingListener
- globalaccelerator:DenyCustomRoutingTraffic
- globalaccelerator:DescribeCustomRoutingAccelerator
- globalaccelerator:DescribeCustomRoutingAcceleratorAttributes
- globalaccelerator:DescribeCustomRoutingEndpointGroup
- globalaccelerator:DescribeCustomRoutingListener
- globalaccelerator:ListCustomRoutingAccelerators
- globalaccelerator:ListCustomRoutingEndpointGroups
- globalaccelerator:ListCustomRoutingListeners
- globalaccelerator:ListCustomRoutingPortMappings
- globalaccelerator:ListCustomRoutingPortMappingsByDestination
- globalaccelerator:RemoveCustomRoutingEndpoints
- globalaccelerator:UpdateCustomRoutingAccelerator
- globalaccelerator:UpdateCustomRoutingAcceleratorAttributes
- globalaccelerator:UpdateCustomRoutingListener
- networkmanager:AssociateTransitGatewayConnectPeer
- networkmanager:CreateConnection
- networkmanager:DeleteConnection
- networkmanager:DisassociateTransitGatewayConnectPeer
- networkmanager:GetConnections
- networkmanager:GetTransitGatewayConnectPeerAssociations
- networkmanager:UpdateConnection
- sagemaker:CreateDataQualityJobDefinition
- sagemaker:CreateDeviceFleet
- sagemaker:CreateEdgePackagingJob
- sagemaker:CreateModelBiasJobDefinition
- sagemaker:CreateModelExplainabilityJobDefinition
- sagemaker:CreateModelQualityJobDefinition
- sagemaker:DeleteDataQualityJobDefinition
- sagemaker:DeleteDeviceFleet
- sagemaker:DeleteModelBiasJobDefinition
- sagemaker:DeleteModelExplainabilityJobDefinition
- sagemaker:DeleteModelQualityJobDefinition
- sagemaker:DeregisterDevices
- sagemaker:DescribeDataQualityJobDefinition
- sagemaker:DescribeDevice
- sagemaker:DescribeDeviceFleet
- sagemaker:DescribeEdgePackagingJob
- sagemaker:DescribeModelBiasJobDefinition
- sagemaker:DescribeModelExplainabilityJobDefinition
- sagemaker:DescribeModelQualityJobDefinition
- sagemaker:GetDeviceFleetReport
- sagemaker:GetDeviceRegistration
- sagemaker:ListDataQualityJobDefinitions
- sagemaker:ListDeviceFleets
- sagemaker:ListDevices
- sagemaker:ListEdgePackagingJobs
- sagemaker:ListModelBiasJobDefinitions
- sagemaker:ListModelExplainabilityJobDefinitions
- sagemaker:ListModelQualityJobDefinitions
- sagemaker:RegisterDevices
- sagemaker:SendHeartbeat
- sagemaker:StopEdgePackagingJob
- sagemaker:UpdateDeviceFleet
- sagemaker:UpdateDevices
- sagemaker:UpdateTrainingJob
- ssm:CreateOpsMetadata
- ssm:DeleteOpsMetadata
- ssm:GetOpsMetadata
- ssm:ListOpsMetadata
- ssm:UpdateOpsMetadata

**New resource types:**

- networkmanager:connection
- sagemaker:data-quality-job-definition
- sagemaker:device
- sagemaker:device-fleet
- sagemaker:edge-packaging-job
- sagemaker:model-bias-job-definition
- sagemaker:model-explainability-job-definition
- sagemaker:model-quality-job-definition
- ssm:opsmetadata

**New conditions:**

- networkmanager:tgwConnectPeerArn

## [0.104.0](https://github.com/udondan/iam-floyd/compare/v0.103.0...v0.104.0) (2020-12-11)

- Implements `compact()` method, to compile action list to wildcard patterns
- Action list is now sorted

## [0.103.0](https://github.com/udondan/iam-floyd/compare/v0.102.0...v0.103.0) (2020-12-08)

`Resource` and `Action` values will now be reduced to a string if they only contain a single value. (not relevant for CDK variant)

## [0.102.0](https://github.com/udondan/iam-floyd/compare/v0.101.0...v0.102.0) (2020-12-05)

**New services:**

- Profile
- DevopsGuru
- EcrPublic
- Lookoutvision
- Airflow
- Monitron
- Amplifybackend
- Panorama
- Proton

**New actions:**

- comprehend:DescribeEventsDetectionJob
- comprehend:ListEventsDetectionJobs
- comprehend:StartEventsDetectionJob
- comprehend:StopEventsDetectionJob
- compute-optimizer:GetEBSVolumeRecommendations
- connect:StartTaskContact
- dms:CancelReplicationTaskAssessmentRun
- dms:DeleteReplicationTaskAssessmentRun
- dms:DescribeApplicableIndividualAssessments
- dms:DescribeReplicationTaskAssessmentRuns
- dms:DescribeReplicationTaskIndividualAssessments
- dms:StartReplicationTaskAssessmentRun
- ecr:DeleteRegistryPolicy
- ecr:DescribeRegistry
- ecr:GetRegistryPolicy
- ecr:PutRegistryPolicy
- ecr:PutReplicationConfiguration
- ecr:ReplicateImage
- eks:AccessKubernetesApi
- eks:CreateAddon
- eks:DeleteAddon
- eks:DescribeAddon
- eks:DescribeAddonVersions
- eks:ListAddons
- eks:UpdateAddon
- medialive:AcceptInputDeviceTransfer
- medialive:CancelInputDeviceTransfer
- medialive:ListInputDeviceTransfers
- medialive:RejectInputDeviceTransfer
- medialive:TransferInputDevice
- forecast:CreatePredictorBacktestExportJob
- forecast:DeletePredictorBacktestExportJob
- forecast:DescribePredictorBacktestExportJob
- forecast:ListPredictorBacktestExportJobs
- honeycode:BatchCreateTableRows
- honeycode:BatchDeleteTableRows
- honeycode:BatchUpdateTableRows
- honeycode:BatchUpsertTableRows
- honeycode:DescribeTableDataImportJob
- honeycode:ListTableColumns
- honeycode:ListTableRows
- honeycode:ListTables
- honeycode:QueryTableRows
- honeycode:StartTableDataImportJob
- license-manager:AcceptGrant
- license-manager:CheckInLicense
- license-manager:CheckoutBorrowLicense
- license-manager:CheckoutLicense
- license-manager:CreateGrant
- license-manager:CreateGrantVersion
- license-manager:CreateLicense
- license-manager:CreateLicenseVersion
- license-manager:CreateToken
- license-manager:DeleteGrant
- license-manager:DeleteLicense
- license-manager:DeleteToken
- license-manager:ExtendLicenseConsumption
- license-manager:GetAccessToken
- license-manager:GetGrant
- license-manager:GetLicense
- license-manager:GetLicenseUsage
- license-manager:ListDistributedGrants
- license-manager:ListLicenseVersions
- license-manager:ListLicenses
- license-manager:ListReceivedGrants
- license-manager:ListReceivedLicensess
- license-manager:ListTokens
- license-manager:RejectGrant
- sagemaker:AddAssociation
- sagemaker:CreateAction
- sagemaker:CreateArtifact
- sagemaker:CreateContext
- sagemaker:CreateFeatureGroup
- sagemaker:CreateModelPackageGroup
- sagemaker:CreatePipeline
- sagemaker:CreateProject
- sagemaker:DeleteAction
- sagemaker:DeleteArtifact
- sagemaker:DeleteAssociation
- sagemaker:DeleteContext
- sagemaker:DeleteFeatureGroup
- sagemaker:DeleteModelPackageGroup
- sagemaker:DeleteModelPackageGroupPolicy
- sagemaker:DeletePipeline
- sagemaker:DeleteProject
- sagemaker:DeleteRecord
- sagemaker:DescribeAction
- sagemaker:DescribeArtifact
- sagemaker:DescribeContext
- sagemaker:DescribeFeatureGroup
- sagemaker:DescribeModelPackageGroup
- sagemaker:DescribePipeline
- sagemaker:DescribePipelineDefinitionForExecution
- sagemaker:DescribePipelineExecution
- sagemaker:DescribeProject
- sagemaker:DisableSagemakerServicecatalogPortfolio
- sagemaker:EnableSagemakerServicecatalogPortfolio
- sagemaker:GetModelPackageGroupPolicy
- sagemaker:GetRecord
- sagemaker:GetSagemakerServicecatalogPortfolioStatus
- sagemaker:ListActions
- sagemaker:ListArtifacts
- sagemaker:ListAssociations
- sagemaker:ListContexts
- sagemaker:ListFeatureGroups
- sagemaker:ListModelPackageGroups
- sagemaker:ListPipelineExecutionSteps
- sagemaker:ListPipelineExecutions
- sagemaker:ListPipelineParametersForExecution
- sagemaker:ListPipelines
- sagemaker:ListProjects
- sagemaker:PutModelPackageGroupPolicy
- sagemaker:PutRecord
- sagemaker:StartPipelineExecution
- sagemaker:StopPipelineExecution
- sagemaker:UpdateAction
- sagemaker:UpdateArtifact
- sagemaker:UpdateContext
- sagemaker:UpdateModelPackage
- sagemaker:UpdatePipeline
- sagemaker:UpdatePipelineExecution
- states:StartSyncExecution
- transfer:DescribeSecurityPolicy
- transfer:ListSecurityPolicies

**New resource types:**

- dms:replicationTaskAssessmentRun
- dms:replicationTaskIndividualAssessment
- eks:addon
- forecast:predictorBacktestExportJob
- honeycode:workbook
- honeycode:table
- license-manager:license
- license-manager:grant
- sagemaker:project
- sagemaker:modelPackageGroup
- sagemaker:featureGroup
- sagemaker:pipeline
- sagemaker:pipelineExecution
- sagemaker:artifact
- sagemaker:context
- sagemaker:action

**New conditions:**

- sagemaker:FeatureGroupOfflineStoreKmsKey
- sagemaker:FeatureGroupOfflineStoreS3Uri
- sagemaker:FeatureGroupOnlineStoreKmsKey
- transcribe:OutputKey

## [0.101.0](https://github.com/udondan/iam-floyd/compare/v0.100.0...v0.101.0) (2020-12-02)

Only internal changes.

- Updates dev dependencies
- Re-generate code examples for documentation, when code has changed

## [0.100.0](https://github.com/udondan/iam-floyd/compare/v0.99.0...v0.100.0) (2020-11-29)

Only internal changes.

- Automatic TS testing before release
- Re-formatting Python code examples

## [0.99.0](https://github.com/udondan/iam-floyd/compare/v0.98.0...v0.99.0) (2020-11-28)

The `Effect` of a policy will no longer be skipped if it is `Allow`. I was sure this was optional but it's not.  ¯\\\_(ツ)\_/¯

## [0.98.0](https://github.com/udondan/iam-floyd/compare/v0.97.1...v0.98.0) (2020-11-25)

**New actions:**

- dynamodb:PartiQLDelete
- dynamodb:PartiQLInsert
- dynamodb:PartiQLSelect
- dynamodb:PartiQLUpdate
- lambda:CreateCodeSigningConfig
- lambda:DeleteCodeSigningConfig
- lambda:DeleteFunctionCodeSigningConfig
- lambda:GetCodeSigningConfig
- lambda:GetFunctionCodeSigningConfig
- lambda:ListCodeSigningConfigs
- lambda:ListFunctionsByCodeSigningConfig
- lambda:PutFunctionCodeSigningConfig
- lambda:UpdateCodeSigningConfig
- lambda:UpdateFunctionCodeSigningConfig
- securityhub:DescribeOrganizationConfiguration
- securityhub:DisableOrganizationAdminAccount
- securityhub:EnableOrganizationAdminAccount
- securityhub:ListOrganizationAdminAccounts
- securityhub:UpdateOrganizationConfiguration
- sso:CreateInstanceAccessControlAttributeConfiguration
- sso:DeleteInstanceAccessControlAttributeConfiguration
- sso:DescribeInstanceAccessControlAttributeConfiguration
- sso:UpdateInstanceAccessControlAttributeConfiguration
- translate:CreateParallelData
- translate:DeleteParallelData
- translate:GetParallelData
- translate:ListParallelData
- translate:UpdateParallelData
- worklink:SearchEntity

**Updated action access level:**

- translate:ListTerminologies: Read -> List
- translate:ListTextTranslationJobs: Read -> List

**New resource types:**

- lambda:codeSigningConfig

**New conditions:**

- dynamodb:FullTableScan
- lambda:CodeSigningConfigArn

## [0.97.1](https://github.com/udondan/iam-floyd/compare/v0.97.0...v0.97.1) (2020-11-24)

- Fix `All.allActions` method, which used to add action string `:*` since v0.97.0

## [0.97.0](https://github.com/udondan/iam-floyd/compare/v0.96.2...v0.97.0) (2020-11-24)

**New actions:**

- connect:AssociateApprovedOrigin
- connect:AssociateInstanceStorageConfig
- connect:AssociateLambdaFunction
- connect:AssociateLexBot
- connect:AssociateSecurityKey
- connect:CreateUserHierarchyGroup
- connect:DeleteInstance
- connect:DeleteUserHierarchyGroup
- connect:DescribeInstanceAttribute
- connect:DescribeInstanceStorageConfig
- connect:DisassociateApprovedOrigin
- connect:DisassociateInstanceStorageConfig
- connect:DisassociateLambdaFunction
- connect:DisassociateLexBot
- connect:DisassociateSecurityKey
- connect:ListApprovedOrigins
- connect:ListInstanceAttributes
- connect:ListInstanceStorageConfigs
- connect:ListLambdaFunctions
- connect:ListLexBots
- connect:ListSecurityKeys
- connect:UpdateInstanceAttribute
- connect:UpdateInstanceStorageConfig
- connect:UpdateUserHierarchyGroupName
- connect:UpdateUserHierarchyStructure
- ec2:AssociateEnclaveCertificateIamRole
- ec2:DisassociateEnclaveCertificateIamRole
- ec2:GetAssociatedEnclaveCertificateIamRoles
- sso-directory:CompleteWebAuthnDeviceRegistration
- sso-directory:StartWebAuthnDeviceRegistration
- sso-directory:UpdateMfaDeviceForUser

**New resource types:**

- acm:certificate
- iam:role

**New conditions:**

- connect:AttributeType
- connect:StorageResourceType
- ec2:Attribute/${ attributeName }
- ec2:ClientRootCertificateChainArn
- ec2:CloudwatchLogGroupArn
- ec2:CloudwatchLogStreamArn
- ec2:DirectoryArn
- ec2:SamlProviderArn
- ec2:ServerCertificateArn

## [0.96.2](https://github.com/udondan/iam-floyd/compare/v0.96.1...v0.96.2) (2020-11-23)

- (Again) Fix action prefixes in classes:

  - ElasticloadbalancingV2
  - KinesisanalyticsV2
  - AwsMarketplaceCatalog
  - AwsMarketplaceEntitlementService
  - AwsMarketplaceImageBuildingService
  - AwsMarketplaceMeteringService
  - AwsMarketplaceProcurementSystemsIntegration
  - SesPinpoint
  - AwsMarketplacePrivate

## [0.96.1](https://github.com/udondan/iam-floyd/compare/v0.96.0...v0.96.1) (2020-11-23)

- Fix service prefix for classes:

  - ElasticloadbalancingV2
  - KinesisanalyticsV2
  - AwsMarketplaceCatalog
  - AwsMarketplaceEntitlementService
  - AwsMarketplaceImageBuildingService
  - AwsMarketplaceMeteringService
  - AwsMarketplaceProcurementSystemsIntegration
  - SesPinpoint
  - AwsMarketplacePrivate

- Documentation now contains generated JSON output for all code examples.

## [0.96.0](https://github.com/udondan/iam-floyd/compare/v0.95.1...v0.96.0) (2020-11-21)

**New services:**

- ElementalSupportCases
- ElementalSupportContent

**New actions:**

- glue:CheckSchemaVersionValidity
- glue:CreateRegistry
- glue:CreateSchema
- glue:DeleteRegistry
- glue:DeleteSchema
- glue:DeleteSchemaVersions
- glue:GetRegistry
- glue:GetSchema
- glue:GetSchemaByDefinition
- glue:GetSchemaVersion
- glue:GetSchemaVersionsDiff
- glue:ListRegistries
- glue:ListSchemaVersions
- glue:ListSchemas
- glue:PutSchemaVersionMetadata
- glue:QuerySchemaVersionMetadata
- glue:RegisterSchemaVersion
- glue:RemoveSchemaVersionMetadata
- glue:UpdateRegistry
- glue:UpdateSchema

**New resource types:**

- glue:registry
- glue:schema

**New conditions:**

- events:creatorAccount
- events:eventBusInvocation

## [0.95.1](https://github.com/udondan/iam-floyd/compare/v0.95.0...v0.95.1) (2020-11-20)

Fixes condition operator for `ec2:SnapshotTime`, which had been accidentally broken in v0.95.0

## [0.95.0](https://github.com/udondan/iam-floyd/compare/v0.94.0...v0.95.0) (2020-11-20)

**New actions:**

- backup:CopyFromBackupVault
- backup:DescribeGlobalSettings
- backup:UpdateGlobalSettings
- chime:CreateMeetingDialOut
- chime:CreateSipMediaApplication
- chime:CreateSipMediaApplicationCall
- chime:CreateSipRule
- chime:DeleteSipMediaApplication
- chime:DeleteSipRule
- chime:GetSipMediaApplication
- chime:GetSipMediaApplicationLoggingConfiguration
- chime:GetSipRule
- chime:ListSipMediaApplications
- chime:ListSipRules
- chime:PutSipMediaApplicationLoggingConfiguration
- chime:UpdateSipMediaApplication
- chime:UpdateSipRule
- codeartifact:ListTagsForResource
- codeartifact:TagResource
- codeartifact:UntagResource
- honeycode:CreateTenant
- honeycode:ListTenants
- s3:DeleteStorageLensConfiguration
- s3:DeleteStorageLensConfigurationTagging
- s3:GetStorageLensConfiguration
- s3:GetStorageLensConfigurationTagging
- s3:GetStorageLensDashboard
- s3:ListStorageLensConfigurations
- s3:PutStorageLensConfiguration
- s3:PutStorageLensConfigurationTagging

**Updated action access level:**

- chime:ListAttendeeTags: Read -> List
- chime:ListAttendees: Read -> List
- chime:ListMeetingTags: Read -> List
- chime:ListMeetings: Read -> List
- chime:ListRoomMemberships: Read -> List
- chime:ListRooms: Read -> List
- chime:ListTagsForResource: Read -> List

**New resource types:**

- s3:storagelensconfiguration

**New conditions:**

- backup:CopyTargetOrgPaths
- backup:CopyTargets

## [0.94.0](https://github.com/udondan/iam-floyd/compare/v0.93.0...v0.94.0) (2020-11-19)

**New services:**

- Activate

**New actions:**

- schemas:ExportSchema

## [0.93.0](https://github.com/udondan/iam-floyd/compare/v0.92.0...v0.93.0) (2020-11-18)

**New services:**

- NetworkFirewall

**New actions:**

- trustedadvisor:ListAccountsForParent
- trustedadvisor:ListOrganizationalUnitsForParent
- trustedadvisor:ListRoots

## [0.92.0](https://github.com/udondan/iam-floyd/compare/v0.91.0...v0.92.0) (2020-11-17)

:warning: **Removed resource types:**

- outposts:outpost
- outposts:site
- outposts:order

**New services:**

- Databrew

**New actions:**

- dynamodb:DescribeExport
- dynamodb:ExportTableToPointInTime
- dynamodb:ListExports
- quicksight:CancelIngestion
- quicksight:CreateAnalysis
- quicksight:CreateDataSet
- quicksight:CreateDataSource
- quicksight:CreateIngestion
- quicksight:DeleteAnalysis
- quicksight:DeleteDataSet
- quicksight:DeleteDataSource
- quicksight:DescribeAnalysis
- quicksight:DescribeAnalysisPermissions
- quicksight:DescribeDataSet
- quicksight:DescribeDataSetPermissions
- quicksight:DescribeDataSource
- quicksight:DescribeDataSourcePermissions
- quicksight:DescribeIngestion
- quicksight:ListAnalyses
- quicksight:ListDataSets
- quicksight:ListDataSources
- quicksight:ListIngestions
- quicksight:PassDataSet
- quicksight:PassDataSource
- quicksight:RestoreAnalysis
- quicksight:SearchAnalyses
- quicksight:SearchDashboards
- quicksight:UpdateAnalysis
- quicksight:UpdateAnalysisPermissions
- quicksight:UpdateDataSet
- quicksight:UpdateDataSetPermissions
- quicksight:UpdateDataSource
- quicksight:UpdateDataSourcePermissions
- outposts:DeleteOutpost
- outposts:DeleteSite
- servicecatalog:AssociateAttributeGroup
- servicecatalog:AssociateResource
- servicecatalog:CreateApplication
- servicecatalog:CreateAttributeGroup
- servicecatalog:DeleteApplication
- servicecatalog:DeleteAttributeGroup
- servicecatalog:DisassociateAttributeGroup
- servicecatalog:DisassociateResource
- servicecatalog:GetApplication
- servicecatalog:GetAttributeGroup
- servicecatalog:ImportAsProvisionedProduct
- servicecatalog:ListApplications
- servicecatalog:ListAssociatedAttributeGroups
- servicecatalog:ListAssociatedResources
- servicecatalog:ListAttributeGroups
- servicecatalog:UpdateApplication
- servicecatalog:UpdateAttributeGroup

**New resource types:**

- dynamodb:export
- quicksight:analysis
- quicksight:datasource
- quicksight:dataset
- quicksight:ingestion
- servicecatalog:application
- servicecatalog:attributeGroup

## [0.91.0](https://github.com/udondan/iam-floyd/compare/v0.90.0...v0.91.0) (2020-11-13)

**New actions:**

- license-manager:ListFailuresForLicenseConfigurationOperations

**New conditions:**

- comprehend:OutputKmsKey
- comprehend:VolumeKmsKey
- comprehend:VpcSecurityGroupIds
- comprehend:VpcSubnets

## [0.90.0](https://github.com/udondan/iam-floyd/compare/v0.89.0...v0.90.0) (2020-11-08)

**New actions:**

- events:CancelReplay
- events:CreateArchive
- events:DeleteArchive
- events:DescribeArchive
- events:DescribeReplay
- events:ListArchives
- events:ListReplays
- events:StartReplay
- events:UpdateArchive
- frauddetector:DeleteEntityType
- frauddetector:DeleteEventType
- frauddetector:DeleteExternalModel
- frauddetector:DeleteLabel
- frauddetector:DeleteModel
- frauddetector:DeleteModelVersion
- frauddetector:DeleteOutcome
- frauddetector:DeleteVariable
- sagemaker:CreateAppImageConfig
- sagemaker:CreateImage
- sagemaker:CreateImageVersion
- sagemaker:DeleteAppImageConfig
- sagemaker:DeleteImage
- sagemaker:DeleteImageVersion
- sagemaker:DescribeAppImageConfig
- sagemaker:DescribeImage
- sagemaker:DescribeImageVersion
- sagemaker:ListAppImageConfigs
- sagemaker:ListImageVersions
- sagemaker:ListImages
- sagemaker:UpdateAppImageConfig
- sagemaker:UpdateImage
- storagegateway:AssignTapePool
- storagegateway:BypassGovernanceRetention
- storagegateway:CreateTapePool
- storagegateway:DeleteAutomaticTapeCreationPolicy
- storagegateway:DeleteTapePool
- storagegateway:ListAutomaticTapeCreationPolicies
- storagegateway:ListTapePools
- storagegateway:UpdateAutomaticTapeCreationPolicy
- access-analyzer:ApplyArchiveRule

**Updated action access level:**

- storagegateway:ListTagsForResource: Read -> List
- storagegateway:ListTapes: Read -> List
- storagegateway:ListVolumeInitiators: Read -> List

**New resource types:**

- events:archive
- events:replay
- sagemaker:appImageConfig
- sagemaker:image
- sagemaker:imageVersion
- storagegateway:tapepool

**New conditions:**

- sagemaker:ImageArns
- sagemaker:ImageVersionArns

## [0.89.0](https://github.com/udondan/iam-floyd/compare/v0.88.0...v0.89.0) (2020-11-05)

**New actions:**

- braket:ListTagsForResource
- braket:TagResource
- braket:UntagResource
- mediapackage:CreateHarvestJob
- mediapackage:DescribeHarvestJob
- mediapackage:ListHarvestJobs

**New resource types:**

- braket:quantumTask
- mediapackage:harvestJobs

## [0.88.0](https://github.com/udondan/iam-floyd/compare/v0.87.0...v0.88.0) (2020-10-31)

**New actions:**

- personalize:PutItems
- personalize:PutUsers

**Updated action access level:**

- personalize:GetPersonalizedRanking: Write -> Read

## [0.87.0](https://github.com/udondan/iam-floyd/compare/v0.86.0...v0.87.0) (2020-10-28)

**New conditions:**

- events:ManagedBy

## [0.86.0](https://github.com/udondan/iam-floyd/compare/v0.85.0...v0.86.0) (2020-10-27)

**New actions:**

- imagebuilder:ListImagePipelineImages

## [0.85.0](https://github.com/udondan/iam-floyd/compare/v0.84.0...v0.85.0) (2020-10-25)

**New actions:**

- workmail:CancelMailboxExportJob
- workmail:DescribeMailboxExportJob
- workmail:ListMailboxExportJobs
- workmail:StartMailboxExportJob
- sso-directory:DeleteExternalIdPCertificate
- sso-directory:DescribeUser
- sso-directory:ImportExternalIdPCertificate
- sso-directory:IsMemberInGroup
- sso-directory:ListExternalIdPCertificates

## [0.84.0](https://github.com/udondan/iam-floyd/compare/v0.83.0...v0.84.0) (2020-10-24)

**New actions:**

- cloudwatch:PutCompositeAlarm
- rds:CrossRegionCommunication
- route53:ListHostedZonesByVPC
- ram:ListResourceTypes
- ram:PromoteResourceShareCreatedFromPolicy

**Updated action access level:**

- route53:ListTagsForResource: Read -> List
- route53:ListTagsForResources: Read -> List
- route53:ListTrafficPolicies: Read -> List
- route53:ListTrafficPolicyInstances: Read -> List
- route53:ListTrafficPolicyInstancesByHostedZone: Read -> List
- route53:ListTrafficPolicyInstancesByPolicy: Read -> List
- route53:ListTrafficPolicyVersions: Read -> List
- route53:ListVPCAssociationAuthorizations: Read -> List

**New resource types:**

- ec2:vpc

## [0.83.0](https://github.com/udondan/iam-floyd/compare/v0.82.0...v0.83.0) (2020-10-23)

**New actions:**

- opsworks-cm:ListTagsForResource
- opsworks-cm:TagResource
- opsworks-cm:UntagResource
- sso:SearchGroups
- sso:SearchUsers

## [0.82.0](https://github.com/udondan/iam-floyd/compare/v0.81.0...v0.82.0) (2020-10-22)

**Updated action access level:**

- ecr:ListTagsForResource: Read -> List

**New conditions:**

- sagemaker:AppNetworkAccessType

## [0.81.0](https://github.com/udondan/iam-floyd/compare/v0.80.0...v0.81.0) (2020-10-20)

**New actions:**

- medialive:CreateMultiplexProgram
- medialive:DeleteMultiplexProgram
- medialive:DescribeMultiplexProgram
- medialive:ListMultiplexPrograms
- medialive:UpdateMultiplexProgram

**Updated action access level:**

- medialive:CreateChannel: Tagging -> Write
- medialive:CreateInput: Tagging -> Write
- medialive:CreateInputSecurityGroup: Tagging -> Write
- medialive:CreateMultiplex: Tagging -> Write
- medialive:PurchaseOffering: Tagging -> Write

## [0.80.0](https://github.com/udondan/iam-floyd/compare/v0.79.0...v0.80.0) (2020-10-17)

**New actions:**

- quicksight:CreateAccountCustomization
- quicksight:CreateCustomPermissions
- quicksight:CreateNamespace
- quicksight:DeleteAccountCustomization
- quicksight:DeleteNamespace
- quicksight:DescribeAccountCustomization
- quicksight:DescribeAccountSettings
- quicksight:DescribeCustomPermissions
- quicksight:DescribeNamespace
- quicksight:GetSessionEmbedUrl
- quicksight:ListCustomPermissions
- quicksight:ListNamespaces
- quicksight:UpdateAccountCustomization
- quicksight:UpdateAccountSettings
- quicksight:UpdateCustomPermissions
- rekognition:DetectProtectiveEquipment
- s3:DeleteBucketOwnershipControls
- s3:GetBucketOwnershipControls
- s3:PutBucketOwnershipControls
- budgets:CreateBudgetAction
- budgets:DeleteBudgetAction
- budgets:DescribeBudgetAction
- budgets:DescribeBudgetActionHistories
- budgets:DescribeBudgetActionsForAccount
- budgets:DescribeBudgetActionsForBudget
- budgets:ExecuteBudgetAction
- budgets:UpdateBudgetAction
- codestar-connections:CreateHost
- codestar-connections:DeleteHost
- codestar-connections:GetHost
- codestar-connections:ListHosts
- codestar-connections:RegisterAppCode
- codestar-connections:StartAppRegistrationHandshake

**Updated action access level:**

- s3:ListBucketMultipartUploads: Read -> List
- s3:ListBucketVersions: Read -> List
- s3:ListJobs: Read -> List
- s3:ListMultipartUploadParts: Read -> List

**New resource types:**

- quicksight:customization
- quicksight:namespace
- budgets:budgetAction
- codestar-connections:host

**New conditions:**

- codestar-connections:HostArn
- iot:DomainName

## [0.79.0](https://github.com/udondan/iam-floyd/compare/v0.78.0...v0.79.0) (2020-10-16)

**New actions:**

- appsync:SetWebACL

**Updated action access level:**

- sso:ListAccountAssignmentCreationStatus: Read -> List
- sso:ListAccountAssignmentDeletionStatus: Read -> List
- sso:ListAccountAssignments: Read -> List
- sso:ListAccountsForProvisionedPermissionSet: Read -> List
- sso:ListApplicationInstanceCertificates: Read -> List
- sso:ListApplicationTemplates: Read -> List
- sso:ListApplications: Read -> List
- sso:ListDirectoryAssociations: Read -> List
- sso:ListInstances: Read -> List
- sso:ListManagedPoliciesInPermissionSet: Read -> List
- sso:ListPermissionSetProvisioningStatus: Read -> List
- sso:ListPermissionSets: Read -> List
- sso:ListPermissionSetsProvisionedToAccount: Read -> List
- sso:ListProfileAssociations: Read -> List
- sso:ListProfiles: Read -> List
- sso:ListTagsForResource: Read -> List

**New resource types:**

- appsync:appsync

## [0.78.0](https://github.com/udondan/iam-floyd/compare/v0.77.0...v0.78.0) (2020-10-08)

**New actions:**

- elasticache:CreateUser
- elasticache:CreateUserGroup
- elasticache:DeleteUser
- elasticache:DeleteUserGroup
- elasticache:DescribeUserGroups
- elasticache:DescribeUsers
- elasticache:ModifyUser
- elasticache:ModifyUserGroup
- batch:ListTagsForResource
- batch:TagResource
- batch:UntagResource

**Updated action access level:**

- glue:BatchDeleteTableVersion: Read -> Write
- glue:DeleteTableVersion: Read -> Write

**New resource types:**

- elasticache:user
- elasticache:usergroup
- batch:job

## [0.77.0](https://github.com/udondan/iam-floyd/compare/v0.76.1...v0.77.0) (2020-10-07)

**New actions:**

- ce:CreateNotificationSubscription
- ce:CreateReport
- ce:DeleteNotificationSubscription
- ce:DeleteReport
- ce:DescribeNotificationSubscription
- ce:DescribeReport
- ce:GetPreferences
- ce:UpdateNotificationSubscription
- ce:UpdatePreferences
- ce:UpdateReport
- medialive:BatchDelete
- medialive:BatchStart
- medialive:BatchStop
- robomaker:BatchDeleteWorlds
- robomaker:CancelWorldExportJob
- robomaker:CancelWorldGenerationJob
- robomaker:CreateWorldExportJob
- robomaker:CreateWorldGenerationJob
- robomaker:CreateWorldTemplate
- robomaker:DeleteWorldTemplate
- robomaker:DescribeWorld
- robomaker:DescribeWorldExportJob
- robomaker:DescribeWorldGenerationJob
- robomaker:DescribeWorldTemplate
- robomaker:GetWorldTemplateBody
- robomaker:ListSupportedAvailabilityZones
- robomaker:ListWorldExportJobs
- robomaker:ListWorldGenerationJobs
- robomaker:ListWorldTemplates
- robomaker:ListWorlds
- robomaker:UpdateRobotDeployment
- robomaker:UpdateWorldTemplate

**New resource types:**

- robomaker:worldGenerationJob
- robomaker:worldExportJob
- robomaker:worldTemplate
- robomaker:world

## [0.76.1](https://github.com/udondan/iam-floyd/compare/v0.76.0...v0.76.1) (2020-10-06)

1. Adds option to force the `Effect`, even when it is _Allow_

   ```typescript
   new Statement.Xxx().allow(true)
   ```
2. Automatically sets the force option when the statement has principals.

## [0.76.0](https://github.com/udondan/iam-floyd/compare/v0.75.1...v0.76.0) (2020-10-06)

**New services:**

- S3Outposts
- Timestream

## [0.75.1](https://github.com/udondan/iam-floyd/compare/v0.75.0...v0.75.1) (2020-10-04)

Fixes type detection of `operator` in condition methods.

## [0.75.0](https://github.com/udondan/iam-floyd/compare/v0.74.0...v0.75.0) (2020-10-02)

:warning: **Breaking changes:**

The `Operator` class has been completely rewritten to improve DX. If you had used the condition operator generator before you need to adapt your code. See the [docs](https://iam-floyd.readthedocs.io/en/v0.75.0/vocabulary.html#operators) for details.

## [0.74.0](https://github.com/udondan/iam-floyd/compare/v0.73.0...v0.74.0) (2020-10-02)

The default condition operator for all ARN conditions is now `ArnLike` instead of `ArnEquals`.

---

**New actions:**

- guardduty:ListIPSets

**New resource types:**

- guardduty:publishingDestination

## [0.73.0](https://github.com/udondan/iam-floyd/compare/v0.72.1...v0.73.0) (2020-10-01)

:warning: **Breaking changes:**

The method `add()` has been renamed to `to()`. This was forgotten when all action methods have been prefixed with `to`.

## [0.72.1](https://github.com/udondan/iam-floyd/compare/v0.72.0...v0.72.1) (2020-09-30)

Fix the name of the operation modifier `ForAnyValue`, used to be `ForAnyValues`

## [0.72.0](https://github.com/udondan/iam-floyd/compare/v0.71.0...v0.72.0) (2020-09-29)

**New actions:**

- ebs:CompleteSnapshot
- ebs:PutSnapshotBlock
- ebs:StartSnapshot
- ssm:GetCalendarState

**New conditions:**

- ebs:Description
- ebs:ParentSnapshot
- ebs:VolumeSize
- batch:AWSLogsCreateGroup
- batch:AWSLogsGroup
- batch:AWSLogsRegion
- batch:AWSLogsStreamPrefix
- batch:LogDriver

## [0.71.0](https://github.com/udondan/iam-floyd/compare/v0.70.1...v0.71.0) (2020-09-26)

**New actions:**

- config:DeleteResourceConfig
- config:PutResourceConfig
- iot:CreateAuditSuppression
- iot:CreateDomainConfiguration
- iot:DeleteAuditSuppression
- iot:DeleteDomainConfiguration
- iot:DescribeAuditFinding
- iot:DescribeAuditSuppression
- iot:DescribeDomainConfiguration
- iot:ListAuditSuppressions
- iot:ListDomainConfigurations
- iot:UpdateAuditSuppression
- iot:UpdateDomainConfiguration
- savingsplans:DeleteQueuedSavingsPlan

## [0.70.1](https://github.com/udondan/iam-floyd/compare/v0.70.0...v0.70.1) (2020-09-24)

Now assume policies do not have all resources added by default.

If you still need all resources you can add them with the new method `.onAllResources()`

## [0.70.0](https://github.com/udondan/iam-floyd/compare/v0.69.0...v0.70.0) (2020-09-23)

**New actions:**

- ce:CreateAnomalyMonitor
- ce:CreateAnomalySubscription
- ce:DeleteAnomalyMonitor
- ce:DeleteAnomalySubscription
- ce:GetAnomalies
- ce:GetAnomalyMonitors
- ce:GetAnomalySubscriptions
- ce:ProvideAnomalyFeedback
- ce:UpdateAnomalyMonitor
- ce:UpdateAnomalySubscription

## [0.69.0](https://github.com/udondan/iam-floyd/compare/v0.68.0...v0.69.0) (2020-09-23)

**New actions:**

- datasync:CreateLocationObjectStorage
- datasync:DescribeLocationObjectStorage

## [0.68.0](https://github.com/udondan/iam-floyd/compare/v0.67.0...v0.68.0) (2020-09-21)


## [0.67.0](https://github.com/udondan/iam-floyd/compare/v0.66.0...v0.67.0) (2020-09-19)

**New actions:**

- comprehend:DescribePiiEntitiesDetectionJob
- comprehend:DetectPiiEntities
- comprehend:ListPiiEntitiesDetectionJobs
- comprehend:StartPiiEntitiesDetectionJob
- comprehend:StopPiiEntitiesDetectionJob
- connect:AssociateRoutingProfileQueues
- connect:CreateContactFlow
- connect:CreateRoutingProfile
- connect:DescribeContactFlow
- connect:DescribeRoutingProfile
- connect:DisassociateRoutingProfileQueues
- connect:ListPrompts
- connect:ListRoutingProfileQueues
- connect:UpdateContactFlowContent
- connect:UpdateContactFlowName
- connect:UpdateRoutingProfileConcurrency
- connect:UpdateRoutingProfileDefaultOutboundQueue
- connect:UpdateRoutingProfileName
- connect:UpdateRoutingProfileQueues

## [0.66.0](https://github.com/udondan/iam-floyd/compare/v0.65.0...v0.66.0) (2020-09-19)

**New services:**

- RedshiftData

## [0.65.0](https://github.com/udondan/iam-floyd/compare/v0.64.0...v0.65.0) (2020-09-17)

**New conditions:**

- elasticfilesystem:Encrypted

## [0.64.0](https://github.com/udondan/iam-floyd/compare/v0.63.0...v0.64.0) (2020-09-16)


## [0.63.0](https://github.com/udondan/iam-floyd/compare/v0.62.6...v0.63.0) (2020-09-15)

**New actions:**

- kafka:BatchAssociateScramSecret
- kafka:BatchDisassociateScramSecret
- kafka:ListScramSecrets

## [0.62.3] (2020-09-13)

CI refactoring

## [0.62.2](https://github.com/udondan/iam-floyd/compare/v0.62.1...v0.62.2) (2020-09-13)

Fixes CI, split python tasks

## [0.62.1](https://github.com/udondan/iam-floyd/compare/v0.62.0...v0.62.1) (2020-09-13)

Fixes CI, installing pip to be able to test Python package

## [0.62.0](https://github.com/udondan/iam-floyd/compare/v0.61.0...v0.62.0) (2020-09-13)

Finally this package (again) works in other languages than JavaScript

## [0.61.0](https://github.com/udondan/iam-floyd/compare/v0.60.0...v0.61.0) (2020-09-11)

**New actions:**

- appflow:DescribeConnectorEntity
- appflow:DescribeFlow
- appflow:DescribeFlowExecutionRecords
- appflow:ListConnectorEntities
- appflow:ListFlows
- appflow:StartFlow
- appflow:StopFlow
- appflow:UpdateConnectorProfile
- sso:AttachManagedPolicyToPermissionSet
- sso:CreateAccountAssignment
- sso:DeleteAccountAssignment
- sso:DeleteInlinePolicyFromPermissionSet
- sso:DescribeAccountAssignmentCreationStatus
- sso:DescribeAccountAssignmentDeletionStatus
- sso:DescribePermissionSet
- sso:DescribePermissionSetProvisioningStatus
- sso:DetachManagedPolicyFromPermissionSet
- sso:GetInlinePolicyForPermissionSet
- sso:ListAccountAssignmentCreationStatus
- sso:ListAccountAssignmentDeletionStatus
- sso:ListAccountAssignments
- sso:ListAccountsForProvisionedPermissionSet
- sso:ListInstances
- sso:ListManagedPoliciesInPermissionSet
- sso:ListPermissionSetProvisioningStatus
- sso:ListPermissionSetsProvisionedToAccount
- sso:ListTagsForResource
- sso:ProvisionPermissionSet
- sso:PutInlinePolicyToPermissionSet
- sso:TagResource
- sso:UntagResource

**New conditions:**

- securityhub:ASFFSyntaxPath/${ aSFFSyntaxPath }

## [0.60.0](https://github.com/udondan/iam-floyd/compare/v0.59.0...v0.60.0) (2020-09-11)

:warning: **Removed actions:**

- cloudfront:ListDistributionsByLambdaFunction

**New actions:**

- cloudfront:CreateCachePolicy
- cloudfront:CreateOriginRequestPolicy
- cloudfront:DeleteCachePolicy
- cloudfront:DeleteOriginRequestPolicy
- cloudfront:GetCachePolicy
- cloudfront:GetCachePolicyConfig
- cloudfront:GetOriginRequestPolicy
- cloudfront:GetOriginRequestPolicyConfig
- cloudfront:ListCachePolicies
- cloudfront:ListDistributionsByCachePolicyId
- cloudfront:ListDistributionsByOriginRequestPolicyId
- cloudfront:ListOriginRequestPolicies
- cloudfront:UpdateCachePolicy
- cloudfront:UpdateOriginRequestPolicy

## [0.59.0](https://github.com/udondan/iam-floyd/compare/v0.58.1...v0.59.0) (2020-09-10)

**New actions:**

- ec2:CreateTransitGatewayPrefixListReference
- ec2:DeleteTransitGatewayPrefixListReference
- ec2:GetTransitGatewayPrefixListReferences
- ec2:ModifyTransitGateway
- ec2:ModifyTransitGatewayPrefixListReference
- elasticbeanstalk:PutInstanceStatistics

## [0.58.1](https://github.com/udondan/iam-floyd/compare/v0.58.0...v0.58.1) (2020-09-06)

Fixes method `allMatchingActions` to return `this`. Method was not chainable in v0.58.0

## [0.58.0](https://github.com/udondan/iam-floyd/compare/v0.57.0...v0.58.0) (2020-09-06)

:warning: **Breaking changes:**

- The functionality of the method `allActions` now has been split into multiple methods:
  - `allActions`: No longer takes parameters. This method indeed adds all actions to the statement
  - `allMatchingActions`: Takes regular expressions and adds all matching actions to the statement
  - To work with access levels, use on of the new methods:
    - `allListActions`
    - `allReadActions`
    - `allWriteActions`
    - `allPermissionManagementActions`
    - `allTaggingActions`

  This change was partially forced by JSII limitations. The `All` class would have a conflicting `allActions` signature as it didn't take parameters, which isn't allowed by JSII. It also raised confusion as it was hard to explain why it differed. Splitting the functionality into multiple methods was the better choice.

  Since we now have distinct methods for adding all actions per access level the ENUM `AccessLevel` no longer is exported.

  This changes requires you to modify your code if you have used regular expressions and/or access levels. Example

  ```typescript
  new statement.Ec2()
    .allow()
    .allReadActions()
  ```

```typescript
  new statement.Ec2()
    .deny()
    .allMatchingActions(`/vpn/i`)
  ```

Other changes:

- Removes global condition overrides in statement providers. This is required since [JSII does simply not allow to override methods of parent classes while at the same time returning `this` from those methods](https://github.com/aws/jsii/issues/1935). Unfortunately this removes the specific method description with related resource type and actions.

- Default operator for global conditions, which support ARNs, now is `ArnLike` instead of `ArnEquals`. Because `ArnLike` behaves the same as `ArnEquals` if it doesn't contain wildcards. And if you provide an ARN with wildcards you wanted `ArnLike` anyway.

- Fixes description for many global conditions. Default operator is `StringLike` instead of `StringEquals`.

## [0.57.0](https://github.com/udondan/iam-floyd/compare/v0.56.0...v0.57.0) (2020-09-04)

**New actions:**

- xray:GetInsight
- xray:GetInsightEvents
- xray:GetInsightImpactGraph
- xray:GetInsightSummaries
- xray:ListTagsForResource
- xray:TagResource
- xray:UntagResource

**New conditions:**

- aws:RequestTag/${ tagKey }
- aws:ResourceTag/${ tagKey }
- aws:TagKeys

## [0.56.0](https://github.com/udondan/iam-floyd/compare/v0.55.0...v0.56.0) (2020-09-04)

**New services:**

- Identitystore

## [0.55.0](https://github.com/udondan/iam-floyd/compare/v0.54.1...v0.55.0) (2020-09-02)

**New actions:**

- chime:CreateMeetingWithAttendees

## [0.54.1](https://github.com/udondan/iam-floyd/compare/v0.54.0...v0.54.1) (2020-09-01)

- Removes `internal` declaration from `Condition` interface to fix error when used in other JSII packages

## [0.54.0](https://github.com/udondan/iam-floyd/compare/v0.53.2...v0.54.0) (2020-09-01)

**New actions:**

- gamelift:ClaimGameServer
- gamelift:CreateGameServerGroup
- gamelift:DeleteGameServerGroup
- gamelift:DeregisterGameServer
- gamelift:DescribeGameServer
- gamelift:DescribeGameServerGroup
- gamelift:DescribeGameServerInstances
- gamelift:ListGameServerGroups
- gamelift:ListGameServers
- gamelift:RegisterGameServer
- gamelift:ResumeGameServerGroup
- gamelift:SuspendGameServerGroup
- gamelift:UpdateGameServer
- gamelift:UpdateGameServerGroup

## [0.53.2](https://github.com/udondan/iam-floyd/compare/v0.53.1...v0.53.2) (2020-08-31)

CI wars

## [0.53.1](https://github.com/udondan/iam-floyd/compare/v0.53.0...v0.53.1) (2020-08-31)


## [0.53.0](https://github.com/udondan/iam-floyd/compare/v0.52.4...v0.53.0) (2020-08-31)

**New functionality:**

- Adds statement collections

## [0.52.4](https://github.com/udondan/iam-floyd/compare/v0.52.3...v0.52.4) (2020-08-31)


## [0.52.3](https://github.com/udondan/iam-floyd/compare/v0.52.2...v0.52.3) (2020-08-31)


## [0.52.2](https://github.com/udondan/iam-floyd/compare/v0.52.1...v0.52.2) (2020-08-31)


## [0.52.1](https://github.com/udondan/iam-floyd/compare/v0.52.0...v0.52.1) (2020-08-31)


## [0.52.0](https://github.com/udondan/iam-floyd/compare/v0.51.0...v0.52.0) (2020-08-31)

:warning: **Breaking changes:**

- All methods which add actions to a statement now are prefixed with `to`. For example
the method `startInstances()` now is called `toStartInstances()`. The renaming was required to not conflict with reserved method names: In Java, methods cannot start with `get` as these are reserved for value getters.

- The method `allActions` no longer accepts regular expressions. Regular expressions must now be passed as strings: `allActions('/vpn/i')`. This was required as [JSII does not support regular expressions](https://github.com/aws/jsii/issues/1828).

## [0.51.0](https://github.com/udondan/iam-floyd/compare/v0.50.0...v0.51.0) (2020-08-26)

**New actions:**

- ec2:CreateCarrierGateway
- ec2:DeleteCarrierGateway
- ec2:DescribeCarrierGateways
- route53resolver:AssociateResolverQueryLogConfig
- route53resolver:CreateResolverQueryLogConfig
- route53resolver:DeleteResolverQueryLogConfig
- route53resolver:DisassociateResolverQueryLogConfig
- route53resolver:GetResolverQueryLogConfig
- route53resolver:GetResolverQueryLogConfigAssociation
- route53resolver:GetResolverQueryLogConfigPolicy
- route53resolver:ListResolverQueryLogConfigAssociations
- route53resolver:ListResolverQueryLogConfigs
- route53resolver:PutResolverQueryLogConfigPolicy

## [0.50.0](https://github.com/udondan/iam-floyd/compare/v0.49.0...v0.50.0) (2020-08-25)

**New actions:**

- kafka:DeleteConfiguration
- kafka:UpdateConfiguration

## [0.49.0](https://github.com/udondan/iam-floyd/compare/v0.48.0...v0.49.0) (2020-08-25)

**New actions:**

- medialive:DescribeInputDeviceThumbnail

## [0.48.0](https://github.com/udondan/iam-floyd/compare/v0.47.0...v0.48.0) (2020-08-21)

**New actions:**

- ivs:DeletePlaybackKeyPair
- ivs:GetPlaybackKeyPair
- ivs:ImportPlaybackKeyPair
- ivs:ListPlaybackKeyPairs

## [0.47.0](https://github.com/udondan/iam-floyd/compare/v0.46.0...v0.47.0) (2020-08-19)

**New actions:**

- acm-pca:DeletePolicy
- acm-pca:GetPolicy
- acm-pca:PutPolicy

**New conditions:**

- iam:ResourceTag/${ tagKey }

## [0.46.0](https://github.com/udondan/iam-floyd/compare/v0.45.0...v0.46.0) (2020-08-17)

**New actions:**

- greengrass:Discover

**New resource types:**

- iot:thing

## [0.45.0](https://github.com/udondan/iam-floyd/compare/v0.44.0...v0.45.0) (2020-08-15)

**New services:**

- Braket
- ElementalActivations

## [0.44.0](https://github.com/udondan/iam-floyd/compare/v0.43.0...v0.44.0) (2020-08-13)

:warning: **Removed actions:**

- lambda:GetLayerVersionByArn

**New actions:**

- ec2:CreateManagedPrefixList
- ec2:DeleteManagedPrefixList
- ec2:DescribeManagedPrefixLists
- ec2:GetManagedPrefixListAssociations
- ec2:GetManagedPrefixListEntries
- ec2:ModifyManagedPrefixList
- ec2:RestoreManagedPrefixListVersion
- elasticache:BatchApplyUpdateAction
- elasticache:BatchStopUpdateAction
- elasticache:CompleteMigration
- elasticache:CreateGlobalReplicationGroup
- elasticache:DecreaseNodeGroupsInGlobalReplicationGroup
- elasticache:DeleteGlobalReplicationGroup
- elasticache:DescribeGlobalReplicationGroups
- elasticache:DescribeServiceUpdates
- elasticache:DescribeUpdateActions
- elasticache:DisassociateGlobalReplicationGroup
- elasticache:FailoverGlobalReplicationGroup
- elasticache:IncreaseNodeGroupsInGlobalReplicationGroup
- elasticache:ModifyGlobalReplicationGroup
- elasticache:RebalanceSlotsInGlobalReplicationGroup
- elasticache:StartMigration
- kinesis:StartStreamEncryption
- kinesis:StopStreamEncryption

**New conditions:**

- aws:ResourceTag/
- aws:ResourceTag/${ tagKey }

## [0.43.0](https://github.com/udondan/iam-floyd/compare/v0.42.0...v0.43.0) (2020-08-11)

**New actions:**

- elasticmapreduce:GetManagedScalingPolicy
- elasticmapreduce:PutManagedScalingPolicy
- elasticmapreduce:RemoveManagedScalingPolicy

**New conditions:**

- lambda:SecurityGroupIds
- lambda:SubnetIds
- lambda:VpcIds

## [0.42.0](https://github.com/udondan/iam-floyd/compare/v0.41.0...v0.42.0) (2020-08-10)

**New actions:**

- transcribe:CreateLanguageModel
- transcribe:DeleteLanguageModel
- transcribe:DescribeLanguageModel
- transcribe:ListLanguageModels
- datasync:CreateLocationFsxWindows
- datasync:DescribeLocationFsxWindows

## [0.41.0](https://github.com/udondan/iam-floyd/compare/v0.40.0...v0.41.0) (2020-08-06)


## [0.40.0](https://github.com/udondan/iam-floyd/compare/v0.39.0...v0.40.0) (2020-08-06)

**New actions:**

- secretsmanager:ValidateResourcePolicy
- sms:ImportAppCatalog
- wafv2:DisassociateFirewallManager
- wafv2:PutFirewallManagerRuleGroups

**New conditions:**

- secretsmanager:BlockPublicPolicy

## [0.39.0](https://github.com/udondan/iam-floyd/compare/v0.38.0...v0.39.0) (2020-08-03)

**New actions:**

- codebuild:BatchGetBuildBatches
- codebuild:BatchPutCodeCoverages
- codebuild:DeleteBuildBatch
- codebuild:DescribeCodeCoverages
- codebuild:ListBuildBatches
- codebuild:ListBuildBatchesForProject
- codebuild:RetryBuild
- codebuild:RetryBuildBatch
- codebuild:StartBuildBatch
- codebuild:StopBuildBatch
- fms:DeleteAppsList
- fms:DeleteProtocolsList
- fms:GetAppsList
- fms:GetProtocolsList
- fms:ListAppsLists
- fms:ListProtocolsLists
- fms:PutAppsList
- fms:PutProtocolsList
- securityhub:UpdateSecurityHubConfiguration

## [0.38.0](https://github.com/udondan/iam-floyd/compare/v0.37.0...v0.38.0) (2020-07-31)

**New services:**

- ElementalAppliancesSoftware

## [0.37.0](https://github.com/udondan/iam-floyd/compare/v0.36.0...v0.37.0) (2020-07-31)

:warning: **Removed actions:**

- rds:DownloadCompleteDBLogFile

**New conditions:**

- autoscaling:MetadataHttpEndpoint
- autoscaling:MetadataHttpPutResponseHopLimit
- autoscaling:MetadataHttpTokens
- transcribe:OutputBucketName
- transcribe:OutputEncryptionKMSKeyId

## [0.36.0](https://github.com/udondan/iam-floyd/compare/v0.35.1...v0.36.0) (2020-07-29)

**New services:**

- AccessLevel, All, Operator, OperatorModifier

## [0.35.1](https://github.com/udondan/iam-floyd/compare/v0.35.0...v0.35.1) (2020-07-29)

Adds missing export `PolicyStatement`.

## [0.35.0](https://github.com/udondan/iam-floyd/compare/v0.34.0...v0.35.0) (2020-07-29)

:warning: **Removed actions:**

- frauddetector:GetPrediction

**New actions:**

- sagemaker:CreateWorkforce
- sagemaker:DeleteWorkforce
- sagemaker:ListWorkforces

## [0.34.0](https://github.com/udondan/iam-floyd/compare/v0.33.0...v0.34.0) (2020-07-28)

Conditions now show related actions and resource types in their description.

![Tooltip example](https://raw.githubusercontent.com/udondan/iam-floyd/main/docs/v0.34.0-tooltip.png "Tooltip example")

## [0.33.0](https://github.com/udondan/iam-floyd/compare/v0.32.0...v0.33.0) (2020-07-27)

**Internal changes:**

- Related conditions now are referred to by the method name instead of the condition key
- Global conditions are now overridden in service providers, if they are mentioned in the related documentation. (required for #16)

---

**New actions:**

- elasticfilesystem:DescribeBackupPolicy
- elasticfilesystem:PutBackupPolicy
- personalize:CreateBatchInferenceJob
- personalize:CreateFilter
- personalize:DeleteFilter
- personalize:DescribeBatchInferenceJob
- personalize:DescribeFilter
- personalize:ListBatchInferenceJobs
- personalize:ListFilters

## [0.32.0](https://github.com/udondan/iam-floyd/compare/v0.31.0...v0.32.0) (2020-07-26)

:warning: **Breaking changes:**

- All global IAM statement conditions have been renamed to avoid collisions with service specific conditions. For instance, `ifRequestedRegion()` has been renamed to `ifAwsRequestedRegion()`

**New functionality:**

- Adds support for Principals/NotPrincipals

## [0.31.0](https://github.com/udondan/iam-floyd/compare/v0.30.0...v0.31.0) (2020-07-25)

---

**New actions:**

- codeguru-profiler:ListTagsForResource
- codeguru-profiler:TagResource
- codeguru-profiler:UntagResource
- backup:DescribeRegionSettings
- backup:UpdateRegionSettings

## [0.30.0](https://github.com/udondan/iam-floyd/compare/v0.29.0...v0.30.0) (2020-07-24)

---

**New actions:**

- ecs:CreateCapacityProvider
- ecs:DeleteCapacityProvider
- ecs:DescribeCapacityProviders
- ecs:PutClusterCapacityProviders
- ecs:UpdateClusterSettings

**New conditions:**

- ecs:capacity-provider

## [0.29.0](https://github.com/udondan/iam-floyd/compare/v0.28.0...v0.29.0) (2020-07-22)

- Action descriptions now contain possible conditions and dependent actions.

  ![Tooltip example](https://raw.githubusercontent.com/udondan/iam-floyd/main/docs/v0.29.0-tooltip.png "Tooltip example")

## [0.28.0](https://github.com/udondan/iam-floyd/compare/v0.27.8...v0.28.0) (2020-07-22)

:warning: **Removed actions:**

- frauddetector:PutModel
- frauddetector:DeleteRuleVersion

**New actions:**

- frauddetector:CreateModel
- frauddetector:DeleteRule
- frauddetector:GetEntityTypes
- frauddetector:GetEventPrediction
- frauddetector:GetEventTypes
- frauddetector:GetKMSEncryptionKey
- frauddetector:GetLabels
- frauddetector:ListTagsForResource
- frauddetector:PutEntityType
- frauddetector:PutEventType
- frauddetector:PutKMSEncryptionKey
- frauddetector:PutLabel
- frauddetector:TagResource
- frauddetector:UntagResource
- frauddetector:UpdateModel
- frauddetector:UpdateModelVersionStatus
- sms:DeleteAppValidationConfiguration
- sms:GetAppValidationConfiguration
- sms:GetAppValidationOutput
- sms:NotifyAppValidationOutput
- sms:PutAppValidationConfiguration
- sms:StartOnDemandAppReplication
- trustedadvisor:DescribeOrganization
- trustedadvisor:DescribeOrganizationAccounts
- trustedadvisor:DescribeReports
- trustedadvisor:DescribeServiceMetadata
- trustedadvisor:GenerateReport
- trustedadvisor:SetOrganizationAccess

**New resource types:**

- frauddetector:detector
- frauddetector:detector-version
- frauddetector:entity-type
- frauddetector:external-model
- frauddetector:event-type
- frauddetector:label
- frauddetector:model
- frauddetector:model-version
- frauddetector:outcome
- frauddetector:rule
- frauddetector:variable

## [0.27.8](https://github.com/udondan/iam-floyd/compare/v0.27.7...v0.27.8) (2020-07-21)

No changes. Really. Fighting with the CI pipeline.

## [0.27.7](https://github.com/udondan/iam-floyd/compare/v0.27.5...v0.27.7) (2020-07-21)

No changes. Really. Fighting with the CI pipeline.

## [0.27.5](https://github.com/udondan/iam-floyd/compare/v0.27.4...v0.27.5) (2020-07-21)

No changes. Really. Fighting with the CI pipeline.

## [0.27.4](https://github.com/udondan/iam-floyd/compare/v0.27.3...v0.27.4) (2020-07-21)

No changes. Really. Fighting with the CI pipeline.

## [0.27.3](https://github.com/udondan/iam-floyd/compare/v0.27.1...v0.27.3) (2020-07-21)

No changes. Really. Fighting with the CI pipeline.

## [0.27.1](https://github.com/udondan/iam-floyd/compare/v0.27.0...v0.27.1) (2020-07-21)

No changes. Really. Fighting with the CI pipeline.

## [0.27.0](https://github.com/udondan/iam-floyd/compare/v0.26.0...v0.27.0) (2020-07-21)

:warning: **Breaking changes:**

* Method `hasAction` has been renamed to `hasActions`.
* Method `hasResource` has been renamed to `hasResources`
* Method `hasCondition` has been renamed to `hasConditions`
* Method `notResource` has been renamed to `notResources`.

**Now two package variants are created from the same source:**

* **iam-floyd**: Can be used in AWS SDK, Boto 3 or for whatever you need an IAM policy statement for
* **cdk-iam-floyd**: Integrates into [AWS CDK](https://aws.amazon.com/cdk/) and extends [`iam.PolicyStatement`](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-iam.PolicyStatement.html)

## [0.26.0](https://github.com/udondan/iam-floyd/compare/v0.25.0...v0.26.0) (2020-07-20)

:warning: **Breaking changes:**

- iam-floyd no longer extends `iam.PolicyStatement` of CDK. In fact it no longer anything to do with the CDK. Therefore policy statements created via Floyd no longer can be directly passed to CDKs `iam.Policy` or any other CDK construct. Please switch to [cdk-iam-floyd](https://github.com/udondan/cdk-iam-floyd) if you want to do so.

- The method `not` has been renamed to `notActions`.

- The constructor signature of all provider classes has changed. The constructor now optionally takes a Sid instead of `iam.PolicyStatementProps`.

## [0.25.0](https://github.com/udondan/iam-floyd/compare/v0.24.0...v0.25.0) (2020-07-17)

**New services:**

- Ivs

**New actions:**

- connect:ResumeContactRecording
- connect:StartContactRecording
- connect:StopContactRecording
- connect:SuspendContactRecording
- ivs:BatchGetChannel
- ivs:BatchGetStreamKey
- ivs:CreateChannel
- ivs:CreateStreamKey
- ivs:DeleteChannel
- ivs:DeleteStreamKey
- ivs:GetChannel
- ivs:GetStream
- ivs:GetStreamKey
- ivs:ListChannels
- ivs:ListStreamKeys
- ivs:ListStreams
- ivs:ListTagsForResource
- ivs:PutMetadata
- ivs:StopStream
- ivs:TagResource
- ivs:UntagResource
- ivs:UpdateChannel

**New resource types:**

- ivs:channel
- ivs:stream-key

## [0.24.0](https://github.com/udondan/iam-floyd/compare/v0.23.0...v0.24.0) (2020-07-17)

**New actions:**

- cassandra:Restore
- elasticbeanstalk:AssociateEnvironmentOperationsRole
- elasticbeanstalk:DisassociateEnvironmentOperationsRole

**New resource types:**

- comprehend:entity-recognizer-endpoint

## [0.23.0](https://github.com/udondan/iam-floyd/compare/v0.22.0...v0.23.0) (2020-07-10)

**New services:**

- Honeycode

**New actions:**

- honeycode:ApproveTeamAssociation
- honeycode:GetScreenData
- honeycode:InvokeScreenAutomation
- honeycode:ListTeamAssociations
- honeycode:RejectTeamAssociation

**New resource types:**

- honeycode:screen:workbookappscreen
- honeycode:screen-automation:workbookappscreenautomation

## [0.22.0](https://github.com/udondan/iam-floyd/compare/v0.21.0...v0.22.0) (2020-07-09)

**New actions:**

- forecast:ListTagsForResource
- forecast:TagResource
- forecast:UntagResource

**Updated action access level:**

- resource-groups:CreateGroup: Tagging -> Write

## [0.21.0](https://github.com/udondan/iam-floyd/compare/v0.20.0...v0.21.0) (2020-07-09)

**New actions:**

- quicksight:CreateTheme
- quicksight:CreateThemeAlias
- quicksight:DeleteTheme
- quicksight:DeleteThemeAlias
- quicksight:DescribeTheme
- quicksight:DescribeThemeAlias
- quicksight:DescribeThemePermissions
- quicksight:ListThemeAliases
- quicksight:ListThemeVersions
- quicksight:ListThemes
- quicksight:UpdateTheme
- quicksight:UpdateThemeAlias
- quicksight:UpdateThemePermissions

**New resource types:**

- quicksight:theme

## [0.20.0](https://github.com/udondan/iam-floyd/compare/v0.19.0...v0.20.0) (2020-07-07)

**Modified method signatures:**

- ifSnapshotTime
