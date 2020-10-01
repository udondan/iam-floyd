import { PolicyStatement } from "../shared";
import { AccessLevelList } from "../shared/access-level";

/**
 * Statement provider for service [sagemaker](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Sagemaker extends PolicyStatement {
  public servicePrefix = 'sagemaker';

  /**
   * Statement provider for service [sagemaker](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Adds or overwrites one or more tags for the specified Amazon SageMaker resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_AddTags.html
   */
  public toAddTags() {
    this.to('sagemaker:AddTags');
    return this;
  }

  /**
   * Associate a trial component with a trial.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_AssociateTrialComponent.html
   */
  public toAssociateTrialComponent() {
    this.to('sagemaker:AssociateTrialComponent');
    return this;
  }

  /**
   * Retrieve metrics associated with SageMaker Resources such as Training Jobs. This API is not publicly exposed at this point, however admins can control this action
   *
   * Access Level: Read
   */
  public toBatchGetMetrics() {
    this.to('sagemaker:BatchGetMetrics');
    return this;
  }

  /**
   * Publish metrics associated with a SageMaker Resource such as a Training Job. This API is not publicly exposed at this point, however admins can control this action
   *
   * Access Level: Write
   */
  public toBatchPutMetrics() {
    this.to('sagemaker:BatchPutMetrics');
    return this;
  }

  /**
   * Create an algorithm.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAlgorithm.html
   */
  public toCreateAlgorithm() {
    this.to('sagemaker:CreateAlgorithm');
    return this;
  }

  /**
   * Grants permission to create an App for a SageMaker Studio UserProfile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateApp.html
   */
  public toCreateApp() {
    this.to('sagemaker:CreateApp');
    return this;
  }

  /**
   * Creates automl job.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInterContainerTrafficEncryption()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateAutoMLJob.html
   */
  public toCreateAutoMLJob() {
    this.to('sagemaker:CreateAutoMLJob');
    return this;
  }

  /**
   * Create a code repository.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateCodeRepository.html
   */
  public toCreateCodeRepository() {
    this.to('sagemaker:CreateCodeRepository');
    return this;
  }

  /**
   * Create a compilation job.
   *
   * Access Level: Write
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateCompilationJob.html
   */
  public toCreateCompilationJob() {
    this.to('sagemaker:CreateCompilationJob');
    return this;
  }

  /**
   * Grants permission to create a Domain for SageMaker Studio
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAppNetworkAccess()
   * - .ifInstanceTypes()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   * - .ifDomainSharingOutputKmsKey()
   * - .ifHomeEfsFileSystemKmsKey()
   *
   * Dependent actions:
   * - iam:CreateServiceLinkedRole
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateDomain.html
   */
  public toCreateDomain() {
    this.to('sagemaker:CreateDomain');
    return this;
  }

  /**
   * Creates an endpoint using the endpoint configuration specified in the request.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html
   */
  public toCreateEndpoint() {
    this.to('sagemaker:CreateEndpoint');
    return this;
  }

  /**
   * Creates an endpoint configuration that can be deployed using Amazon SageMaker hosting services.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAcceleratorTypes()
   * - .ifInstanceTypes()
   * - .ifModelArn()
   * - .ifVolumeKmsKey()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html
   */
  public toCreateEndpointConfig() {
    this.to('sagemaker:CreateEndpointConfig');
    return this;
  }

  /**
   * Create an experiment.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateExperiment.html
   */
  public toCreateExperiment() {
    this.to('sagemaker:CreateExperiment');
    return this;
  }

  /**
   * Creates a flow definition, which defines settings for a human workflow.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWorkteamArn()
   * - .ifWorkteamType()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateFlowDefinition.html
   */
  public toCreateFlowDefinition() {
    this.to('sagemaker:CreateFlowDefinition');
    return this;
  }

  /**
   * Defines the settings you will use for the human review workflow user interface.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateHumanTaskUi.html
   */
  public toCreateHumanTaskUi() {
    this.to('sagemaker:CreateHumanTaskUi');
    return this;
  }

  /**
   * Creates hyper parameter tuning job that can be deployed using Amazon SageMaker.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifFileSystemAccessMode()
   * - .ifFileSystemDirectoryPath()
   * - .ifFileSystemId()
   * - .ifFileSystemType()
   * - .ifInstanceTypes()
   * - .ifInterContainerTrafficEncryption()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateHyperParameterTuningJob.html
   */
  public toCreateHyperParameterTuningJob() {
    this.to('sagemaker:CreateHyperParameterTuningJob');
    return this;
  }

  /**
   * Starts a labeling job. A labeling job takes unlabeled data in and produces labeled data as output, which can be used for training SageMaker models.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifWorkteamArn()
   * - .ifWorkteamType()
   * - .ifVolumeKmsKey()
   * - .ifOutputKmsKey()
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateLabelingJob.html
   */
  public toCreateLabelingJob() {
    this.to('sagemaker:CreateLabelingJob');
    return this;
  }

  /**
   * Creates a model in Amazon SageMaker. In the request, you specify a name for the model and describe one or more containers.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifNetworkIsolation()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModel.html
   */
  public toCreateModel() {
    this.to('sagemaker:CreateModel');
    return this;
  }

  /**
   * Create a model package.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateModelPackage.html
   */
  public toCreateModelPackage() {
    this.to('sagemaker:CreateModelPackage');
    return this;
  }

  /**
   * Creates a monitoring schedule.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateMonitoringSchedule.html
   */
  public toCreateMonitoringSchedule() {
    this.to('sagemaker:CreateMonitoringSchedule');
    return this;
  }

  /**
   * Creates an Amazon SageMaker notebook instance. A notebook instance is an Amazon EC2 instance running on a Jupyter Notebook.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifAcceleratorTypes()
   * - .ifDirectInternetAccess()
   * - .ifInstanceTypes()
   * - .ifRootAccess()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateNotebookInstance.html
   */
  public toCreateNotebookInstance() {
    this.to('sagemaker:CreateNotebookInstance');
    return this;
  }

  /**
   * Creates an notebook instance lifecycle configuration that can be deployed using Amazon SageMaker.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateNotebookInstanceLifecycleConfig.html
   */
  public toCreateNotebookInstanceLifecycleConfig() {
    this.to('sagemaker:CreateNotebookInstanceLifecycleConfig');
    return this;
  }

  /**
   * Grants permission to return a URL that you can use from your browser to connect to the Domain as a specified UserProfile when AuthMode is 'IAM'
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreatePresignedDomainUrl.html
   */
  public toCreatePresignedDomainUrl() {
    this.to('sagemaker:CreatePresignedDomainUrl');
    return this;
  }

  /**
   * Returns a URL that you can use from your browser to connect to the Notebook Instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreatePresignedNotebookInstanceUrl.html
   */
  public toCreatePresignedNotebookInstanceUrl() {
    this.to('sagemaker:CreatePresignedNotebookInstanceUrl');
    return this;
  }

  /**
   * Starts a processing job. After processing completes, Amazon SageMaker saves the resulting artifacts and other optional output to an Amazon S3 location that you specify.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   * - .ifInterContainerTrafficEncryption()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateProcessingJob.html
   */
  public toCreateProcessingJob() {
    this.to('sagemaker:CreateProcessingJob');
    return this;
  }

  /**
   * Starts a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts and other optional output to an Amazon S3 location that you specify.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifFileSystemAccessMode()
   * - .ifFileSystemDirectoryPath()
   * - .ifFileSystemId()
   * - .ifFileSystemType()
   * - .ifInstanceTypes()
   * - .ifInterContainerTrafficEncryption()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrainingJob.html
   */
  public toCreateTrainingJob() {
    this.to('sagemaker:CreateTrainingJob');
    return this;
  }

  /**
   * Starts a transform job. After the results are obtained, Amazon SageMaker saves them to an Amazon S3 location that you specify.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifModelArn()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTransformJob.html
   */
  public toCreateTransformJob() {
    this.to('sagemaker:CreateTransformJob');
    return this;
  }

  /**
   * Create a trial.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrial.html
   */
  public toCreateTrial() {
    this.to('sagemaker:CreateTrial');
    return this;
  }

  /**
   * Create a trial component.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrialComponent.html
   */
  public toCreateTrialComponent() {
    this.to('sagemaker:CreateTrialComponent');
    return this;
  }

  /**
   * Grants permission to create a UserProfile for a SageMaker Studio Domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifVpcSecurityGroupIds()
   * - .ifInstanceTypes()
   * - .ifDomainSharingOutputKmsKey()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateUserProfile.html
   */
  public toCreateUserProfile() {
    this.to('sagemaker:CreateUserProfile');
    return this;
  }

  /**
   * Create a workforce.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateWorkforce.html
   */
  public toCreateWorkforce() {
    this.to('sagemaker:CreateWorkforce');
    return this;
  }

  /**
   * Create a workteam.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateWorkteam.html
   */
  public toCreateWorkteam() {
    this.to('sagemaker:CreateWorkteam');
    return this;
  }

  /**
   * Deletes an algorithm.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteAlgorithm.html
   */
  public toDeleteAlgorithm() {
    this.to('sagemaker:DeleteAlgorithm');
    return this;
  }

  /**
   * Grants permission to delete an App
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteApp.html
   */
  public toDeleteApp() {
    this.to('sagemaker:DeleteApp');
    return this;
  }

  /**
   * Deletes a code repository.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteCodeRepository.html
   */
  public toDeleteCodeRepository() {
    this.to('sagemaker:DeleteCodeRepository');
    return this;
  }

  /**
   * Grants permission to delete a Domain
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteDomain.html
   */
  public toDeleteDomain() {
    this.to('sagemaker:DeleteDomain');
    return this;
  }

  /**
   * Deletes an endpoint. Amazon SageMaker frees up all the resources that were deployed when the endpoint was created.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteEndpoint.html
   */
  public toDeleteEndpoint() {
    this.to('sagemaker:DeleteEndpoint');
    return this;
  }

  /**
   * Deletes the endpoint configuration created using the CreateEndpointConfig API. The DeleteEndpointConfig API deletes only the specified configuration. It does not delete any endpoints created using the configuration.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteEndpointConfig.html
   */
  public toDeleteEndpointConfig() {
    this.to('sagemaker:DeleteEndpointConfig');
    return this;
  }

  /**
   * Deletes an experiment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteExperiment.html
   */
  public toDeleteExperiment() {
    this.to('sagemaker:DeleteExperiment');
    return this;
  }

  /**
   * Deltes the specified flow definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteFlowDefinition.html
   */
  public toDeleteFlowDefinition() {
    this.to('sagemaker:DeleteFlowDefinition');
    return this;
  }

  /**
   * Deletes the specified human loop.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteHumanLoop.html
   */
  public toDeleteHumanLoop() {
    this.to('sagemaker:DeleteHumanLoop');
    return this;
  }

  /**
   * Deletes a model created using the CreateModel API. The DeleteModel API deletes only the model entry in Amazon SageMaker that you created by calling the CreateModel API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModel.html
   */
  public toDeleteModel() {
    this.to('sagemaker:DeleteModel');
    return this;
  }

  /**
   * Deletes a model package.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteModelPackage.html
   */
  public toDeleteModelPackage() {
    this.to('sagemaker:DeleteModelPackage');
    return this;
  }

  /**
   * Deletes a monitoring schedule. Amazon SageMaker will no longer run the scheduled monitoring.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteMonitoringSchedule.html
   */
  public toDeleteMonitoringSchedule() {
    this.to('sagemaker:DeleteMonitoringSchedule');
    return this;
  }

  /**
   * Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you must call the StopNotebookInstance API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteNotebookInstance.html
   */
  public toDeleteNotebookInstance() {
    this.to('sagemaker:DeleteNotebookInstance');
    return this;
  }

  /**
   * Deletes an notebook instance lifecycle configuration that can be deployed using Amazon SageMaker.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteNotebookInstanceLifecycleConfig.html
   */
  public toDeleteNotebookInstanceLifecycleConfig() {
    this.to('sagemaker:DeleteNotebookInstanceLifecycleConfig');
    return this;
  }

  /**
   * Deletes the specified set of tags from an Amazon SageMaker resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTags.html
   */
  public toDeleteTags() {
    this.to('sagemaker:DeleteTags');
    return this;
  }

  /**
   * Deletes a trial.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTrial.html
   */
  public toDeleteTrial() {
    this.to('sagemaker:DeleteTrial');
    return this;
  }

  /**
   * Deletes a trial component.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteTrialComponent.html
   */
  public toDeleteTrialComponent() {
    this.to('sagemaker:DeleteTrialComponent');
    return this;
  }

  /**
   * Grants permission to delete a UserProfile
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteUserProfile.html
   */
  public toDeleteUserProfile() {
    this.to('sagemaker:DeleteUserProfile');
    return this;
  }

  /**
   * Deletes a workforce.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteWorkforce.html
   */
  public toDeleteWorkforce() {
    this.to('sagemaker:DeleteWorkforce');
    return this;
  }

  /**
   * Deletes a workteam.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DeleteWorkteam.html
   */
  public toDeleteWorkteam() {
    this.to('sagemaker:DeleteWorkteam');
    return this;
  }

  /**
   * Returns information about an algorithm.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAlgorithm.html
   */
  public toDescribeAlgorithm() {
    this.to('sagemaker:DescribeAlgorithm');
    return this;
  }

  /**
   * Grants permission to describe an App
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeApp.html
   */
  public toDescribeApp() {
    this.to('sagemaker:DescribeApp');
    return this;
  }

  /**
   * Describes an automl job that was created via CreateAutoMLJob API.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeAutoMLJob.html
   */
  public toDescribeAutoMLJob() {
    this.to('sagemaker:DescribeAutoMLJob');
    return this;
  }

  /**
   * Returns information about a code repository.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeCodeRepository.html
   */
  public toDescribeCodeRepository() {
    this.to('sagemaker:DescribeCodeRepository');
    return this;
  }

  /**
   * Returns information about a compilation job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeCompilationJob.html
   */
  public toDescribeCompilationJob() {
    this.to('sagemaker:DescribeCompilationJob');
    return this;
  }

  /**
   * Grants permission to describe a Domain
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeDomain.html
   */
  public toDescribeDomain() {
    this.to('sagemaker:DescribeDomain');
    return this;
  }

  /**
   * Returns the description of an endpoint.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpoint.html
   */
  public toDescribeEndpoint() {
    this.to('sagemaker:DescribeEndpoint');
    return this;
  }

  /**
   * Returns the description of an endpoint configuration, which was created using the CreateEndpointConfig API.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeEndpointConfig.html
   */
  public toDescribeEndpointConfig() {
    this.to('sagemaker:DescribeEndpointConfig');
    return this;
  }

  /**
   * Returns information about an experiment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeExperiment.html
   */
  public toDescribeExperiment() {
    this.to('sagemaker:DescribeExperiment');
    return this;
  }

  /**
   * Returns detailed information about the specified flow definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeFlowDefinition.html
   */
  public toDescribeFlowDefinition() {
    this.to('sagemaker:DescribeFlowDefinition');
    return this;
  }

  /**
   * Returns detailed information about the specified human loop.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHumanLoop.html
   */
  public toDescribeHumanLoop() {
    this.to('sagemaker:DescribeHumanLoop');
    return this;
  }

  /**
   * Returns detailed information about the specified human review workflow user interface.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHumanTaskUi.html
   */
  public toDescribeHumanTaskUi() {
    this.to('sagemaker:DescribeHumanTaskUi');
    return this;
  }

  /**
   * Describes a hyper parameter tuning job that was created via CreateHyperParameterTuningJob API.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeHyperParameterTuningJob.html
   */
  public toDescribeHyperParameterTuningJob() {
    this.to('sagemaker:DescribeHyperParameterTuningJob');
    return this;
  }

  /**
   * Returns information about a labeling job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeLabelingJob.html
   */
  public toDescribeLabelingJob() {
    this.to('sagemaker:DescribeLabelingJob');
    return this;
  }

  /**
   * Describes a model that you created using the CreateModel API.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModel.html
   */
  public toDescribeModel() {
    this.to('sagemaker:DescribeModel');
    return this;
  }

  /**
   * Returns information about a model package.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeModelPackage.html
   */
  public toDescribeModelPackage() {
    this.to('sagemaker:DescribeModelPackage');
    return this;
  }

  /**
   * Returns information about a monitoring schedule.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeMonitoringSchedule.html
   */
  public toDescribeMonitoringSchedule() {
    this.to('sagemaker:DescribeMonitoringSchedule');
    return this;
  }

  /**
   * Returns information about a notebook instance.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeNotebookInstance.html
   */
  public toDescribeNotebookInstance() {
    this.to('sagemaker:DescribeNotebookInstance');
    return this;
  }

  /**
   * Describes an notebook instance lifecycle configuration that was created via CreateNotebookInstanceLifecycleConfig API.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeNotebookInstanceLifecycleConfig.html
   */
  public toDescribeNotebookInstanceLifecycleConfig() {
    this.to('sagemaker:DescribeNotebookInstanceLifecycleConfig');
    return this;
  }

  /**
   * Returns information about a processing job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeProcessingJob.html
   */
  public toDescribeProcessingJob() {
    this.to('sagemaker:DescribeProcessingJob');
    return this;
  }

  /**
   * Returns information about a subscribed workteam.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeSubscribedWorkteam.html
   */
  public toDescribeSubscribedWorkteam() {
    this.to('sagemaker:DescribeSubscribedWorkteam');
    return this;
  }

  /**
   * Returns information about a training job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrainingJob.html
   */
  public toDescribeTrainingJob() {
    this.to('sagemaker:DescribeTrainingJob');
    return this;
  }

  /**
   * Returns information about a transform job.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTransformJob.html
   */
  public toDescribeTransformJob() {
    this.to('sagemaker:DescribeTransformJob');
    return this;
  }

  /**
   * Returns information about a trial.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrial.html
   */
  public toDescribeTrial() {
    this.to('sagemaker:DescribeTrial');
    return this;
  }

  /**
   * Returns information about a trial component.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeTrialComponent.html
   */
  public toDescribeTrialComponent() {
    this.to('sagemaker:DescribeTrialComponent');
    return this;
  }

  /**
   * Grants permission to describe a UserProfile
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeUserProfile.html
   */
  public toDescribeUserProfile() {
    this.to('sagemaker:DescribeUserProfile');
    return this;
  }

  /**
   * Returns information about a workforce.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeWorkforce.html
   */
  public toDescribeWorkforce() {
    this.to('sagemaker:DescribeWorkforce');
    return this;
  }

  /**
   * Returns information about a workteam.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DescribeWorkteam.html
   */
  public toDescribeWorkteam() {
    this.to('sagemaker:DescribeWorkteam');
    return this;
  }

  /**
   * Disassociate a trial component with a trial.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_DisassociateTrialComponent.html
   */
  public toDisassociateTrialComponent() {
    this.to('sagemaker:DisassociateTrialComponent');
    return this;
  }

  /**
   * Get search suggestions when provided with keyword.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_GetSearchSuggestions.html
   */
  public toGetSearchSuggestions() {
    this.to('sagemaker:GetSearchSuggestions');
    return this;
  }

  /**
   * After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint.
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifTargetModel()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_InvokeEndpoint.html
   */
  public toInvokeEndpoint() {
    this.to('sagemaker:InvokeEndpoint');
    return this;
  }

  /**
   * Lists algorithms.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAlgorithms.html
   */
  public toListAlgorithms() {
    this.to('sagemaker:ListAlgorithms');
    return this;
  }

  /**
   * Grants permission to list the Apps in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListApps.html
   */
  public toListApps() {
    this.to('sagemaker:ListApps');
    return this;
  }

  /**
   * Lists automl jobs created via the CreateAutoMLJob.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListAutoMLJobs.html
   */
  public toListAutoMLJobs() {
    this.to('sagemaker:ListAutoMLJobs');
    return this;
  }

  /**
   * Lists candidates for automl job created via the CreateAutoMLJob.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCandidatesForAutoMLJob.html
   */
  public toListCandidatesForAutoMLJob() {
    this.to('sagemaker:ListCandidatesForAutoMLJob');
    return this;
  }

  /**
   * Lists code repositories.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCodeRepositories.html
   */
  public toListCodeRepositories() {
    this.to('sagemaker:ListCodeRepositories');
    return this;
  }

  /**
   * Lists compilation jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListCompilationJobs.html
   */
  public toListCompilationJobs() {
    this.to('sagemaker:ListCompilationJobs');
    return this;
  }

  /**
   * Grants permission to list the Domains in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListDomains.html
   */
  public toListDomains() {
    this.to('sagemaker:ListDomains');
    return this;
  }

  /**
   * Lists endpoint configurations.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListEndpointConfigs.html
   */
  public toListEndpointConfigs() {
    this.to('sagemaker:ListEndpointConfigs');
    return this;
  }

  /**
   * Lists endpoints.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListEndpoints.html
   */
  public toListEndpoints() {
    this.to('sagemaker:ListEndpoints');
    return this;
  }

  /**
   * Lists experiments.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListExperiments.html
   */
  public toListExperiments() {
    this.to('sagemaker:ListExperiments');
    return this;
  }

  /**
   * Returns summary information about flow definitions, given the specified parameters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListFlowDefinitions.html
   */
  public toListFlowDefinitions() {
    this.to('sagemaker:ListFlowDefinitions');
    return this;
  }

  /**
   * Returns summary information about human loops, given the specified parameters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHumanLoops.html
   */
  public toListHumanLoops() {
    this.to('sagemaker:ListHumanLoops');
    return this;
  }

  /**
   * Returns summary information about human review workflow user interfaces, given the specified parameters.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHumanTaskUis.html
   */
  public toListHumanTaskUis() {
    this.to('sagemaker:ListHumanTaskUis');
    return this;
  }

  /**
   * Lists hyper parameter tuning jobs that was created using Amazon SageMaker.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListHyperParameterTuningJobs.html
   */
  public toListHyperParameterTuningJobs() {
    this.to('sagemaker:ListHyperParameterTuningJobs');
    return this;
  }

  /**
   * Lists labeling jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListLabelingJobs.html
   */
  public toListLabelingJobs() {
    this.to('sagemaker:ListLabelingJobs');
    return this;
  }

  /**
   * Lists labeling jobs for workteam.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListLabelingJobs.html
   */
  public toListLabelingJobsForWorkteam() {
    this.to('sagemaker:ListLabelingJobsForWorkteam');
    return this;
  }

  /**
   * Lists model packages.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModelPackages.html
   */
  public toListModelPackages() {
    this.to('sagemaker:ListModelPackages');
    return this;
  }

  /**
   * Lists the models created with the CreateModel API.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListModels.html
   */
  public toListModels() {
    this.to('sagemaker:ListModels');
    return this;
  }

  /**
   * Lists monitoring executions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListMonitoringExecutions.html
   */
  public toListMonitoringExecutions() {
    this.to('sagemaker:ListMonitoringExecutions');
    return this;
  }

  /**
   * Lists monitoring schedules.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListMonitoringSchedules.html
   */
  public toListMonitoringSchedules() {
    this.to('sagemaker:ListMonitoringSchedules');
    return this;
  }

  /**
   * Lists notebook instance lifecycle configurations that can be deployed using Amazon SageMaker.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListNotebookInstanceLifecycleConfigs.html
   */
  public toListNotebookInstanceLifecycleConfigs() {
    this.to('sagemaker:ListNotebookInstanceLifecycleConfigs');
    return this;
  }

  /**
   * Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS Region.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListNotebookInstances.html
   */
  public toListNotebookInstances() {
    this.to('sagemaker:ListNotebookInstances');
    return this;
  }

  /**
   * Lists processing jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListProcessingJobs.html
   */
  public toListProcessingJobs() {
    this.to('sagemaker:ListProcessingJobs');
    return this;
  }

  /**
   * Lists subscribed workteams.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListSubscribedWorkteams.html
   */
  public toListSubscribedWorkteams() {
    this.to('sagemaker:ListSubscribedWorkteams');
    return this;
  }

  /**
   * Returns the tag set associated with the specified resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTags.html
   */
  public toListTags() {
    this.to('sagemaker:ListTags');
    return this;
  }

  /**
   * Lists training jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrainingJobs.html
   */
  public toListTrainingJobs() {
    this.to('sagemaker:ListTrainingJobs');
    return this;
  }

  /**
   * Lists training jobs for a hyper parameter tuning job that was created using Amazon SageMaker.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ ListTrainingJobsForHyperParameterTuningJob.html
   */
  public toListTrainingJobsForHyperParameterTuningJob() {
    this.to('sagemaker:ListTrainingJobsForHyperParameterTuningJob');
    return this;
  }

  /**
   * Lists transform jobs.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTransformJobs.html
   */
  public toListTransformJobs() {
    this.to('sagemaker:ListTransformJobs');
    return this;
  }

  /**
   * Lists trial components.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrialComponents.html
   */
  public toListTrialComponents() {
    this.to('sagemaker:ListTrialComponents');
    return this;
  }

  /**
   * Lists trials.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListTrials.html
   */
  public toListTrials() {
    this.to('sagemaker:ListTrials');
    return this;
  }

  /**
   * Grants permission to list the UserProfiles in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListUserProfiles.html
   */
  public toListUserProfiles() {
    this.to('sagemaker:ListUserProfiles');
    return this;
  }

  /**
   * Lists workforces.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListWorkforces.html
   */
  public toListWorkforces() {
    this.to('sagemaker:ListWorkforces');
    return this;
  }

  /**
   * Lists workteams.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ListWorkteams.html
   */
  public toListWorkteams() {
    this.to('sagemaker:ListWorkteams');
    return this;
  }

  /**
   * Render a UI template used for a human annotation task.
   *
   * Access Level: Read
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_RenderUiTemplate.html
   */
  public toRenderUiTemplate() {
    this.to('sagemaker:RenderUiTemplate');
    return this;
  }

  /**
   * Search for SageMaker objects.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_Search.html
   */
  public toSearch() {
    this.to('sagemaker:Search');
    return this;
  }

  /**
   * Starts a human loop.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartHumanLoop.html
   */
  public toStartHumanLoop() {
    this.to('sagemaker:StartHumanLoop');
    return this;
  }

  /**
   * Starts a monitoring schedule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartMonitoringSchedule.html
   */
  public toStartMonitoringSchedule() {
    this.to('sagemaker:StartMonitoringSchedule');
    return this;
  }

  /**
   * Launches an EC2 instance with the latest version of the libraries and attaches your EBS volume.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StartNotebookInstance.html
   */
  public toStartNotebookInstance() {
    this.to('sagemaker:StartNotebookInstance');
    return this;
  }

  /**
   * Stops a running automl job created via the CreateAutoMLJob.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopAutoMLJob.html
   */
  public toStopAutoMLJob() {
    this.to('sagemaker:StopAutoMLJob');
    return this;
  }

  /**
   * Stops a compilation job.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopCompilationJob.html
   */
  public toStopCompilationJob() {
    this.to('sagemaker:StopCompilationJob');
    return this;
  }

  /**
   * Stops the specified human loop.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopHumanLoop.html
   */
  public toStopHumanLoop() {
    this.to('sagemaker:StopHumanLoop');
    return this;
  }

  /**
   * Stops a running hyper parameter tuning job create via the CreateHyperParameterTuningJob.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopHyperParameterTuningJob.html
   */
  public toStopHyperParameterTuningJob() {
    this.to('sagemaker:StopHyperParameterTuningJob');
    return this;
  }

  /**
   * Stops a labeling job. Any labels already generated will be exported before stopping.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopLabelingJob.html
   */
  public toStopLabelingJob() {
    this.to('sagemaker:StopLabelingJob');
    return this;
  }

  /**
   * Stops a monitoring schedule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopMonitoringSchedule.html
   */
  public toStopMonitoringSchedule() {
    this.to('sagemaker:StopMonitoringSchedule');
    return this;
  }

  /**
   * Terminates the EC2 instance. Before terminating the instance, Amazon SageMaker disconnects the EBS volume from it. Amazon SageMaker preserves the EBS volume.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopNotebookInstance.html
   */
  public toStopNotebookInstance() {
    this.to('sagemaker:StopNotebookInstance');
    return this;
  }

  /**
   * Stops a processing job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopProcessingJob.html
   */
  public toStopProcessingJob() {
    this.to('sagemaker:StopProcessingJob');
    return this;
  }

  /**
   * Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal, which delays job termination for 120 seconds.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopTrainingJob.html
   */
  public toStopTrainingJob() {
    this.to('sagemaker:StopTrainingJob');
    return this;
  }

  /**
   * Stops a transform job. When Amazon SageMaker receives a StopTransformJob request, the status of the job changes to Stopping. After Amazon SageMaker stops the job, the status is set to Stopped
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_StopTransformJob.html
   */
  public toStopTransformJob() {
    this.to('sagemaker:StopTransformJob');
    return this;
  }

  /**
   * Updates a code repository.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateCodeRepository.html
   */
  public toUpdateCodeRepository() {
    this.to('sagemaker:UpdateCodeRepository');
    return this;
  }

  /**
   * Grants permission to update a Domain
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifVpcSecurityGroupIds()
   * - .ifInstanceTypes()
   * - .ifDomainSharingOutputKmsKey()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateDomain.html
   */
  public toUpdateDomain() {
    this.to('sagemaker:UpdateDomain');
    return this;
  }

  /**
   * Updates an endpoint to use the endpoint configuration specified in the request.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpoint.html
   */
  public toUpdateEndpoint() {
    this.to('sagemaker:UpdateEndpoint');
    return this;
  }

  /**
   * Updates variant weight, capacity, or both of one or more variants associated with an endpoint.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpointWeightsAndCapacities.html
   */
  public toUpdateEndpointWeightsAndCapacities() {
    this.to('sagemaker:UpdateEndpointWeightsAndCapacities');
    return this;
  }

  /**
   * Updates an experiment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateExperiment.html
   */
  public toUpdateExperiment() {
    this.to('sagemaker:UpdateExperiment');
    return this;
  }

  /**
   * Updates a monitoring schedule.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   * - .ifInstanceTypes()
   * - .ifMaxRuntimeInSeconds()
   * - .ifNetworkIsolation()
   * - .ifOutputKmsKey()
   * - .ifVolumeKmsKey()
   * - .ifVpcSecurityGroupIds()
   * - .ifVpcSubnets()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateMonitoringSchedule.html
   */
  public toUpdateMonitoringSchedule() {
    this.to('sagemaker:UpdateMonitoringSchedule');
    return this;
  }

  /**
   * Updates a notebook instance. Notebook instance updates include upgrading or downgrading the EC2 instance used for your notebook instance to accommodate changes in your workload requirements. You can also update the VPC security groups.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAcceleratorTypes()
   * - .ifInstanceTypes()
   * - .ifRootAccess()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateNotebookInstance.html
   */
  public toUpdateNotebookInstance() {
    this.to('sagemaker:UpdateNotebookInstance');
    return this;
  }

  /**
   * Updates a notebook instance lifecycle configuration created with the CreateNotebookInstanceLifecycleConfig API.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_ UpdateNotebookInstanceLifecycleConfig.html
   */
  public toUpdateNotebookInstanceLifecycleConfig() {
    this.to('sagemaker:UpdateNotebookInstanceLifecycleConfig');
    return this;
  }

  /**
   * Updates a trial.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateTrial.html
   */
  public toUpdateTrial() {
    this.to('sagemaker:UpdateTrial');
    return this;
  }

  /**
   * Updates a trial component.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateTrialComponent.html
   */
  public toUpdateTrialComponent() {
    this.to('sagemaker:UpdateTrialComponent');
    return this;
  }

  /**
   * Grants permission to update a UserProfile
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifInstanceTypes()
   * - .ifVpcSecurityGroupIds()
   * - .ifInstanceTypes()
   * - .ifDomainSharingOutputKmsKey()
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateUserProfile.html
   */
  public toUpdateUserProfile() {
    this.to('sagemaker:UpdateUserProfile');
    return this;
  }

  /**
   * Updates a workforce.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateWorkforce.html
   */
  public toUpdateWorkforce() {
    this.to('sagemaker:UpdateWorkforce');
    return this;
  }

  /**
   * Updates a workteam.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateWorkteam.html
   */
  public toUpdateWorkteam() {
    this.to('sagemaker:UpdateWorkteam');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Tagging": [
      "AddTags",
      "DeleteTags"
    ],
    "Write": [
      "AssociateTrialComponent",
      "BatchPutMetrics",
      "CreateAlgorithm",
      "CreateApp",
      "CreateAutoMLJob",
      "CreateCodeRepository",
      "CreateCompilationJob",
      "CreateDomain",
      "CreateEndpoint",
      "CreateEndpointConfig",
      "CreateExperiment",
      "CreateFlowDefinition",
      "CreateHumanTaskUi",
      "CreateHyperParameterTuningJob",
      "CreateLabelingJob",
      "CreateModel",
      "CreateModelPackage",
      "CreateMonitoringSchedule",
      "CreateNotebookInstance",
      "CreateNotebookInstanceLifecycleConfig",
      "CreatePresignedDomainUrl",
      "CreatePresignedNotebookInstanceUrl",
      "CreateProcessingJob",
      "CreateTrainingJob",
      "CreateTransformJob",
      "CreateTrial",
      "CreateTrialComponent",
      "CreateUserProfile",
      "CreateWorkforce",
      "CreateWorkteam",
      "DeleteAlgorithm",
      "DeleteApp",
      "DeleteCodeRepository",
      "DeleteDomain",
      "DeleteEndpoint",
      "DeleteEndpointConfig",
      "DeleteExperiment",
      "DeleteFlowDefinition",
      "DeleteHumanLoop",
      "DeleteModel",
      "DeleteModelPackage",
      "DeleteMonitoringSchedule",
      "DeleteNotebookInstance",
      "DeleteNotebookInstanceLifecycleConfig",
      "DeleteTrial",
      "DeleteTrialComponent",
      "DeleteUserProfile",
      "DeleteWorkforce",
      "DeleteWorkteam",
      "DisassociateTrialComponent",
      "StartHumanLoop",
      "StartMonitoringSchedule",
      "StartNotebookInstance",
      "StopAutoMLJob",
      "StopCompilationJob",
      "StopHumanLoop",
      "StopHyperParameterTuningJob",
      "StopLabelingJob",
      "StopMonitoringSchedule",
      "StopNotebookInstance",
      "StopProcessingJob",
      "StopTrainingJob",
      "StopTransformJob",
      "UpdateCodeRepository",
      "UpdateDomain",
      "UpdateEndpoint",
      "UpdateEndpointWeightsAndCapacities",
      "UpdateExperiment",
      "UpdateMonitoringSchedule",
      "UpdateNotebookInstance",
      "UpdateNotebookInstanceLifecycleConfig",
      "UpdateTrial",
      "UpdateTrialComponent",
      "UpdateUserProfile",
      "UpdateWorkforce",
      "UpdateWorkteam"
    ],
    "Read": [
      "BatchGetMetrics",
      "DescribeAlgorithm",
      "DescribeApp",
      "DescribeAutoMLJob",
      "DescribeCodeRepository",
      "DescribeCompilationJob",
      "DescribeDomain",
      "DescribeEndpoint",
      "DescribeEndpointConfig",
      "DescribeExperiment",
      "DescribeFlowDefinition",
      "DescribeHumanLoop",
      "DescribeHumanTaskUi",
      "DescribeHyperParameterTuningJob",
      "DescribeLabelingJob",
      "DescribeModel",
      "DescribeModelPackage",
      "DescribeMonitoringSchedule",
      "DescribeNotebookInstance",
      "DescribeNotebookInstanceLifecycleConfig",
      "DescribeProcessingJob",
      "DescribeSubscribedWorkteam",
      "DescribeTrainingJob",
      "DescribeTransformJob",
      "DescribeTrial",
      "DescribeTrialComponent",
      "DescribeUserProfile",
      "DescribeWorkforce",
      "DescribeWorkteam",
      "GetSearchSuggestions",
      "InvokeEndpoint",
      "RenderUiTemplate",
      "Search"
    ],
    "List": [
      "ListAlgorithms",
      "ListApps",
      "ListAutoMLJobs",
      "ListCandidatesForAutoMLJob",
      "ListCodeRepositories",
      "ListCompilationJobs",
      "ListDomains",
      "ListEndpointConfigs",
      "ListEndpoints",
      "ListExperiments",
      "ListFlowDefinitions",
      "ListHumanLoops",
      "ListHumanTaskUis",
      "ListHyperParameterTuningJobs",
      "ListLabelingJobs",
      "ListLabelingJobsForWorkteam",
      "ListModelPackages",
      "ListModels",
      "ListMonitoringExecutions",
      "ListMonitoringSchedules",
      "ListNotebookInstanceLifecycleConfigs",
      "ListNotebookInstances",
      "ListProcessingJobs",
      "ListSubscribedWorkteams",
      "ListTags",
      "ListTrainingJobs",
      "ListTrainingJobsForHyperParameterTuningJob",
      "ListTransformJobs",
      "ListTrialComponents",
      "ListTrials",
      "ListUserProfiles",
      "ListWorkforces",
      "ListWorkteams"
    ]
  };

  /**
   * Adds a resource of type human-loop to the statement
   *
   * @param humanLoopName - Identifier for the humanLoopName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onHumanLoop(humanLoopName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:human-loop/${HumanLoopName}';
    arn = arn.replace('${HumanLoopName}', humanLoopName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type flow-definition to the statement
   *
   * @param flowDefinitionName - Identifier for the flowDefinitionName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onFlowDefinition(flowDefinitionName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:flow-definition/${FlowDefinitionName}';
    arn = arn.replace('${FlowDefinitionName}', flowDefinitionName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type human-task-ui to the statement
   *
   * @param humanTaskUiName - Identifier for the humanTaskUiName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onHumanTaskUi(humanTaskUiName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:human-task-ui/${HumanTaskUiName}';
    arn = arn.replace('${HumanTaskUiName}', humanTaskUiName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type labeling-job to the statement
   *
   * @param labelingJobName - Identifier for the labelingJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onLabelingJob(labelingJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:labeling-job/${LabelingJobName}';
    arn = arn.replace('${LabelingJobName}', labelingJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type workteam to the statement
   *
   * @param workteamName - Identifier for the workteamName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onWorkteam(workteamName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:workteam/${WorkteamName}';
    arn = arn.replace('${WorkteamName}', workteamName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type workforce to the statement
   *
   * @param workforceName - Identifier for the workforceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onWorkforce(workforceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:workforce/${WorkforceName}';
    arn = arn.replace('${WorkforceName}', workforceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type domain to the statement
   *
   * @param domainId - Identifier for the domainId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onDomain(domainId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:domain/${DomainId}';
    arn = arn.replace('${DomainId}', domainId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type user-profile to the statement
   *
   * @param domainId - Identifier for the domainId.
   * @param userProfileName - Identifier for the userProfileName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onUserProfile(domainId: string, userProfileName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:user-profile/${DomainId}/${UserProfileName}';
    arn = arn.replace('${DomainId}', domainId);
    arn = arn.replace('${UserProfileName}', userProfileName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type app to the statement
   *
   * @param domainId - Identifier for the domainId.
   * @param userProfileName - Identifier for the userProfileName.
   * @param appType - Identifier for the appType.
   * @param appName - Identifier for the appName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onApp(domainId: string, userProfileName: string, appType: string, appName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:app/${DomainId}/${UserProfileName}/${AppType}/${AppName}';
    arn = arn.replace('${DomainId}', domainId);
    arn = arn.replace('${UserProfileName}', userProfileName);
    arn = arn.replace('${AppType}', appType);
    arn = arn.replace('${AppName}', appName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type notebook-instance to the statement
   *
   * @param notebookInstanceName - Identifier for the notebookInstanceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onNotebookInstance(notebookInstanceName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:notebook-instance/${NotebookInstanceName}';
    arn = arn.replace('${NotebookInstanceName}', notebookInstanceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type notebook-instance-lifecycle-config to the statement
   *
   * @param notebookInstanceLifecycleConfigName - Identifier for the notebookInstanceLifecycleConfigName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onNotebookInstanceLifecycleConfig(notebookInstanceLifecycleConfigName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:notebook-instance-lifecycle-config/${NotebookInstanceLifecycleConfigName}';
    arn = arn.replace('${NotebookInstanceLifecycleConfigName}', notebookInstanceLifecycleConfigName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type code-repository to the statement
   *
   * @param codeRepositoryName - Identifier for the codeRepositoryName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCodeRepository(codeRepositoryName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:code-repository/${CodeRepositoryName}';
    arn = arn.replace('${CodeRepositoryName}', codeRepositoryName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type algorithm to the statement
   *
   * @param algorithmName - Identifier for the algorithmName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAlgorithm(algorithmName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:algorithm/${AlgorithmName}';
    arn = arn.replace('${AlgorithmName}', algorithmName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type training-job to the statement
   *
   * @param trainingJobName - Identifier for the trainingJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTrainingJob(trainingJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:training-job/${TrainingJobName}';
    arn = arn.replace('${TrainingJobName}', trainingJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type processing-job to the statement
   *
   * @param processingJobName - Identifier for the processingJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onProcessingJob(processingJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:processing-job/${ProcessingJobName}';
    arn = arn.replace('${ProcessingJobName}', processingJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type hyper-parameter-tuning-job to the statement
   *
   * @param hyperParameterTuningJobName - Identifier for the hyperParameterTuningJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onHyperParameterTuningJob(hyperParameterTuningJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:hyper-parameter-tuning-job/${HyperParameterTuningJobName}';
    arn = arn.replace('${HyperParameterTuningJobName}', hyperParameterTuningJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type model-package to the statement
   *
   * @param modelPackageName - Identifier for the modelPackageName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onModelPackage(modelPackageName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:model-package/${ModelPackageName}';
    arn = arn.replace('${ModelPackageName}', modelPackageName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type model to the statement
   *
   * @param modelName - Identifier for the modelName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onModel(modelName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:model/${ModelName}';
    arn = arn.replace('${ModelName}', modelName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type endpoint-config to the statement
   *
   * @param endpointConfigName - Identifier for the endpointConfigName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onEndpointConfig(endpointConfigName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:endpoint-config/${EndpointConfigName}';
    arn = arn.replace('${EndpointConfigName}', endpointConfigName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type endpoint to the statement
   *
   * @param endpointName - Identifier for the endpointName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onEndpoint(endpointName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:endpoint/${EndpointName}';
    arn = arn.replace('${EndpointName}', endpointName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type transform-job to the statement
   *
   * @param transformJobName - Identifier for the transformJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onTransformJob(transformJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:transform-job/${TransformJobName}';
    arn = arn.replace('${TransformJobName}', transformJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type compilation-job to the statement
   *
   * @param compilationJobName - Identifier for the compilationJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCompilationJob(compilationJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:compilation-job/${CompilationJobName}';
    arn = arn.replace('${CompilationJobName}', compilationJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type automl-job to the statement
   *
   * @param autoMLJobJobName - Identifier for the autoMLJobJobName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onAutomlJob(autoMLJobJobName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:automl-job/${AutoMLJobJobName}';
    arn = arn.replace('${AutoMLJobJobName}', autoMLJobJobName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type monitoring-schedule to the statement
   *
   * @param monitoringScheduleName - Identifier for the monitoringScheduleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onMonitoringSchedule(monitoringScheduleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:monitoring-schedule/${MonitoringScheduleName}';
    arn = arn.replace('${MonitoringScheduleName}', monitoringScheduleName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type experiment to the statement
   *
   * @param experimentName - Identifier for the experimentName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onExperiment(experimentName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:experiment/${ExperimentName}';
    arn = arn.replace('${ExperimentName}', experimentName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type experiment-trial to the statement
   *
   * @param trialName - Identifier for the trialName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onExperimentTrial(trialName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:experiment-trial/${TrialName}';
    arn = arn.replace('${TrialName}', trialName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type experiment-trial-component to the statement
   *
   * @param trialComponentName - Identifier for the trialComponentName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   * - .ifResourceTag()
   */
  public onExperimentTrialComponent(trialComponentName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sagemaker:${Region}:${Account}:experiment-trial-component/${TrialComponentName}';
    arn = arn.replace('${TrialComponentName}', trialComponentName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * The list of all accelerator types associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateEndpointConfig()
   * - .toCreateNotebookInstance()
   * - .toUpdateNotebookInstance()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAcceleratorTypes(value: string | string[], operator?: string) {
    return this.if(`sagemaker:AcceleratorTypes`, value, operator || 'StringLike');
  }

  /**
   * App network access associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateDomain()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAppNetworkAccess(value: string | string[], operator?: string) {
    return this.if(`sagemaker:AppNetworkAccess`, value, operator || 'StringLike');
  }

  /**
   * The direct internet access associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateNotebookInstance()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifDirectInternetAccess(value: string | string[], operator?: string) {
    return this.if(`sagemaker:DirectInternetAccess`, value, operator || 'StringLike');
  }

  /**
   * The Domain sharing output KMS key associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateDomain()
   * - .toCreateUserProfile()
   * - .toUpdateDomain()
   * - .toUpdateUserProfile()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifDomainSharingOutputKmsKey(value: string | string[], operator?: string) {
    return this.if(`sagemaker:DomainSharingOutputKmsKey`, value, operator || 'ArnEquals');
  }

  /**
   * File system access mode associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateTrainingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemAccessMode(value: string | string[], operator?: string) {
    return this.if(`sagemaker:FileSystemAccessMode`, value, operator || 'StringLike');
  }

  /**
   * File system directory path associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateTrainingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemDirectoryPath(value: string | string[], operator?: string) {
    return this.if(`sagemaker:FileSystemDirectoryPath`, value, operator || 'StringLike');
  }

  /**
   * A file system ID associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateTrainingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemId(value: string | string[], operator?: string) {
    return this.if(`sagemaker:FileSystemId`, value, operator || 'StringLike');
  }

  /**
   * File system type associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateTrainingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifFileSystemType(value: string | string[], operator?: string) {
    return this.if(`sagemaker:FileSystemType`, value, operator || 'StringLike');
  }

  /**
   * The KMS Key Id of the EFS File System used for UserProfile home directories, which is associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateDomain()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifHomeEfsFileSystemKmsKey(value: string | string[], operator?: string) {
    return this.if(`sagemaker:HomeEfsFileSystemKmsKey`, value, operator || 'ArnEquals');
  }

  /**
   * The list of all instance types associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateApp()
   * - .toCreateDomain()
   * - .toCreateEndpointConfig()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateTransformJob()
   * - .toCreateUserProfile()
   * - .toUpdateDomain()
   * - .toUpdateMonitoringSchedule()
   * - .toUpdateNotebookInstance()
   * - .toUpdateUserProfile()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifInstanceTypes(value: string | string[], operator?: string) {
    return this.if(`sagemaker:InstanceTypes`, value, operator || 'StringLike');
  }

  /**
   * The inter container traffic encryption associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifInterContainerTrafficEncryption(value?: boolean) {
    return this.if(`sagemaker:InterContainerTrafficEncryption`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * The max runtime in seconds associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateMonitoringSchedule()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric). **Default:** `NumericEquals`
   */
  public ifMaxRuntimeInSeconds(value: number | number[], operator?: string) {
    return this.if(`sagemaker:MaxRuntimeInSeconds`, value, operator || 'NumericEquals');
  }

  /**
   * The model arn associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateEndpointConfig()
   * - .toCreateTransformJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifModelArn(value: string | string[], operator?: string) {
    return this.if(`sagemaker:ModelArn`, value, operator || 'ArnEquals');
  }

  /**
   * The network isolation associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateModel()
   * - .toCreateMonitoringSchedule()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value `true` or `false`. **Default:** `true`
   */
  public ifNetworkIsolation(value?: boolean) {
    return this.if(`sagemaker:NetworkIsolation`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }

  /**
   * The output kms key associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateLabelingJob()
   * - .toCreateMonitoringSchedule()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateTransformJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifOutputKmsKey(value: string | string[], operator?: string) {
    return this.if(`sagemaker:OutputKmsKey`, value, operator || 'ArnEquals');
  }

  /**
   * The preface string for a tag key and value pair attached to a resource.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTagExists(value: string | string[], operator?: string) {
    return this.if(`sagemaker:ResourceTag/`, value, operator || 'StringLike');
  }

  /**
   * A tag key and value pair.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to resource types:
   * - flow-definition
   * - human-task-ui
   * - labeling-job
   * - workteam
   * - workforce
   * - domain
   * - user-profile
   * - app
   * - notebook-instance
   * - training-job
   * - processing-job
   * - hyper-parameter-tuning-job
   * - model
   * - endpoint-config
   * - endpoint
   * - transform-job
   * - automl-job
   * - monitoring-schedule
   * - experiment
   * - experiment-trial
   * - experiment-trial-component
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`sagemaker:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * The root access associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateNotebookInstance()
   * - .toUpdateNotebookInstance()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifRootAccess(value: string | string[], operator?: string) {
    return this.if(`sagemaker:RootAccess`, value, operator || 'StringLike');
  }

  /**
   * The target model associated with the Multi-Model Endpoint in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toInvokeEndpoint()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifTargetModel(value: string | string[], operator?: string) {
    return this.if(`sagemaker:TargetModel`, value, operator || 'StringLike');
  }

  /**
   * The volume kms key associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateEndpointConfig()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateLabelingJob()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateTransformJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifVolumeKmsKey(value: string | string[], operator?: string) {
    return this.if(`sagemaker:VolumeKmsKey`, value, operator || 'ArnEquals');
  }

  /**
   * The list of all vpc security group ids associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateDomain()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateModel()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toCreateUserProfile()
   * - .toUpdateDomain()
   * - .toUpdateMonitoringSchedule()
   * - .toUpdateUserProfile()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcSecurityGroupIds(value: string | string[], operator?: string) {
    return this.if(`sagemaker:VpcSecurityGroupIds`, value, operator || 'StringLike');
  }

  /**
   * The list of all vpc subnets associated with the resource in the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateAutoMLJob()
   * - .toCreateDomain()
   * - .toCreateHyperParameterTuningJob()
   * - .toCreateModel()
   * - .toCreateMonitoringSchedule()
   * - .toCreateNotebookInstance()
   * - .toCreateProcessingJob()
   * - .toCreateTrainingJob()
   * - .toUpdateMonitoringSchedule()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifVpcSubnets(value: string | string[], operator?: string) {
    return this.if(`sagemaker:VpcSubnets`, value, operator || 'StringLike');
  }

  /**
   * The workteam arn associated to the request.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateFlowDefinition()
   * - .toCreateLabelingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifWorkteamArn(value: string | string[], operator?: string) {
    return this.if(`sagemaker:WorkteamArn`, value, operator || 'ArnEquals');
  }

  /**
   * The workteam type associated to the request. This can be public-crowd, private-crowd or vendor-crowd.
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html#amazonsagemaker-policy-keys
   *
   * Applies to actions:
   * - .toCreateFlowDefinition()
   * - .toCreateLabelingJob()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifWorkteamType(value: string | string[], operator?: string) {
    return this.if(`sagemaker:WorkteamType`, value, operator || 'StringLike');
  }
}
