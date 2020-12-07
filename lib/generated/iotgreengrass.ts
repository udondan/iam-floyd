import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [greengrass](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrass.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Greengrass extends PolicyStatement {
  public servicePrefix = 'greengrass';

  /**
   * Statement provider for service [greengrass](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotgreengrass.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to associate a role with a group. The role's permissions must allow Greengrass core Lambda functions and connectors to perform actions in other AWS services.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/associateroletogroup-put.html
   */
  public toAssociateRoleToGroup() {
    this.to('greengrass:AssociateRoleToGroup');
    return this;
  }

  /**
   * Grants permission to associate a role with your account. AWS IoT Greengrass uses this role to access your Lambda functions and AWS IoT resources.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/associateserviceroletoaccount-put.html
   */
  public toAssociateServiceRoleToAccount() {
    this.to('greengrass:AssociateServiceRoleToAccount');
    return this;
  }

  /**
   * Grants permission to create a connector definition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createconnectordefinition-post.html
   */
  public toCreateConnectorDefinition() {
    this.to('greengrass:CreateConnectorDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing connector definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createconnectordefinitionversion-post.html
   */
  public toCreateConnectorDefinitionVersion() {
    this.to('greengrass:CreateConnectorDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to create a core definition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createcoredefinition-post.html
   */
  public toCreateCoreDefinition() {
    this.to('greengrass:CreateCoreDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing core definition. Greengrass groups must each contain exactly one Greengrass core.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createcoredefinitionversion-post.html
   */
  public toCreateCoreDefinitionVersion() {
    this.to('greengrass:CreateCoreDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to create a deployment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createdeployment-post.html
   */
  public toCreateDeployment() {
    this.to('greengrass:CreateDeployment');
    return this;
  }

  /**
   * Grants permission to create a device definition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createdevicedefinition-post.html
   */
  public toCreateDeviceDefinition() {
    this.to('greengrass:CreateDeviceDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing device definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createdevicedefinitionversion-post.html
   */
  public toCreateDeviceDefinitionVersion() {
    this.to('greengrass:CreateDeviceDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to create a Lambda function definition to be used in a group that contains a list of Lambda functions and their configurations.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createfunctiondefinition-post.html
   */
  public toCreateFunctionDefinition() {
    this.to('greengrass:CreateFunctionDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing Lambda function definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createfunctiondefinitionversion-post.html
   */
  public toCreateFunctionDefinitionVersion() {
    this.to('greengrass:CreateFunctionDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to create a group.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/creategroup-post.html
   */
  public toCreateGroup() {
    this.to('greengrass:CreateGroup');
    return this;
  }

  /**
   * Grants permission to create a CA for the group, or rotate the existing CA.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/creategroupcertificateauthority-post.html
   */
  public toCreateGroupCertificateAuthority() {
    this.to('greengrass:CreateGroupCertificateAuthority');
    return this;
  }

  /**
   * Grants permission to create a version of a group that has already been defined.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/creategroupversion-post.html
   */
  public toCreateGroupVersion() {
    this.to('greengrass:CreateGroupVersion');
    return this;
  }

  /**
   * Grants permission to create a logger definition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createloggerdefinition-post.html
   */
  public toCreateLoggerDefinition() {
    this.to('greengrass:CreateLoggerDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing logger definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createloggerdefinitionversion-post.html
   */
  public toCreateLoggerDefinitionVersion() {
    this.to('greengrass:CreateLoggerDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to create a resource definition that contains a list of resources to be used in a group.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createresourcedefinition-post.html
   */
  public toCreateResourceDefinition() {
    this.to('greengrass:CreateResourceDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing resource definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createresourcedefinitionversion-post.html
   */
  public toCreateResourceDefinitionVersion() {
    this.to('greengrass:CreateResourceDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to create an AWS IoT job that will trigger your Greengrass cores to update the software they are running.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createsoftwareupdatejob-post.html
   */
  public toCreateSoftwareUpdateJob() {
    this.to('greengrass:CreateSoftwareUpdateJob');
    return this;
  }

  /**
   * Grants permission to create a subscription definition.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createsubscriptiondefinition-post.html
   */
  public toCreateSubscriptionDefinition() {
    this.to('greengrass:CreateSubscriptionDefinition');
    return this;
  }

  /**
   * Grants permission to create a version of an existing subscription definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/createsubscriptiondefinitionversion-post.html
   */
  public toCreateSubscriptionDefinitionVersion() {
    this.to('greengrass:CreateSubscriptionDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to delete a connector definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deleteconnectordefinition-delete.html
   */
  public toDeleteConnectorDefinition() {
    this.to('greengrass:DeleteConnectorDefinition');
    return this;
  }

  /**
   * Grants permission to delete a core definition. Deleting a definition that is currently in use in a deployment affects future deployments.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletecoredefinition-delete.html
   */
  public toDeleteCoreDefinition() {
    this.to('greengrass:DeleteCoreDefinition');
    return this;
  }

  /**
   * Grants permission to delete a device definition. Deleting a definition that is currently in use in a deployment affects future deployments.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletedevicedefinition-delete.html
   */
  public toDeleteDeviceDefinition() {
    this.to('greengrass:DeleteDeviceDefinition');
    return this;
  }

  /**
   * Grants permission to delete a Lambda function definition. Deleting a definition that is currently in use in a deployment affects future deployments.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletefunctiondefinition-delete.html
   */
  public toDeleteFunctionDefinition() {
    this.to('greengrass:DeleteFunctionDefinition');
    return this;
  }

  /**
   * Grants permission to delete a group that is not currently in use in a deployment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletegroup-delete.html
   */
  public toDeleteGroup() {
    this.to('greengrass:DeleteGroup');
    return this;
  }

  /**
   * Grants permission to delete a logger definition. Deleting a definition that is currently in use in a deployment affects future deployments.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deleteloggerdefinition-delete.html
   */
  public toDeleteLoggerDefinition() {
    this.to('greengrass:DeleteLoggerDefinition');
    return this;
  }

  /**
   * Grants permission to delete a resource definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deleteresourcedefinition-delete.html
   */
  public toDeleteResourceDefinition() {
    this.to('greengrass:DeleteResourceDefinition');
    return this;
  }

  /**
   * Grants permission to delete a subscription definition. Deleting a definition that is currently in use in a deployment affects future deployments.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/deletesubscriptiondefinition-delete.html
   */
  public toDeleteSubscriptionDefinition() {
    this.to('greengrass:DeleteSubscriptionDefinition');
    return this;
  }

  /**
   * Grants permission to disassociate the role from a group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/disassociaterolefromgroup-delete.html
   */
  public toDisassociateRoleFromGroup() {
    this.to('greengrass:DisassociateRoleFromGroup');
    return this;
  }

  /**
   * Grants permission to disassociate the service role from an account. Without a service role, deployments will not work.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/disassociateservicerolefromaccount-delete.html
   */
  public toDisassociateServiceRoleFromAccount() {
    this.to('greengrass:DisassociateServiceRoleFromAccount');
    return this;
  }

  /**
   * Grants permission to retrieve information required to connect to a Greengrass core.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/developerguide/gg-discover-api.html
   */
  public toDiscover() {
    this.to('greengrass:Discover');
    return this;
  }

  /**
   * Grants permission to retrieve the role associated with a group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getassociatedrole-get.html
   */
  public toGetAssociatedRole() {
    this.to('greengrass:GetAssociatedRole');
    return this;
  }

  /**
   * Grants permission to return the status of a bulk deployment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getbulkdeploymentstatus-get.html
   */
  public toGetBulkDeploymentStatus() {
    this.to('greengrass:GetBulkDeploymentStatus');
    return this;
  }

  /**
   * Grants permission to retrieve the connectivity information for a core.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectivityinfo-get.html
   */
  public toGetConnectivityInfo() {
    this.to('greengrass:GetConnectivityInfo');
    return this;
  }

  /**
   * Grants permission to retrieve information about a connector definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectordefinition-get.html
   */
  public toGetConnectorDefinition() {
    this.to('greengrass:GetConnectorDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a connector definition version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getconnectordefinitionversion-get.html
   */
  public toGetConnectorDefinitionVersion() {
    this.to('greengrass:GetConnectorDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to retrieve information about a core definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getcoredefinition-get.html
   */
  public toGetCoreDefinition() {
    this.to('greengrass:GetCoreDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a core definition version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getcoredefinitionversion-get.html
   */
  public toGetCoreDefinitionVersion() {
    this.to('greengrass:GetCoreDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to return the status of a deployment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getdeploymentstatus-get.html
   */
  public toGetDeploymentStatus() {
    this.to('greengrass:GetDeploymentStatus');
    return this;
  }

  /**
   * Grants permission to retrieve information about a device definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getdevicedefinition-get.html
   */
  public toGetDeviceDefinition() {
    this.to('greengrass:GetDeviceDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a device definition version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getdevicedefinitionversion-get.html
   */
  public toGetDeviceDefinitionVersion() {
    this.to('greengrass:GetDeviceDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to retrieve information about a Lambda function definition, such as its creation time and latest version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getfunctiondefinition-get.html
   */
  public toGetFunctionDefinition() {
    this.to('greengrass:GetFunctionDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a Lambda function definition version, such as which Lambda functions are included in the version and their configurations.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getfunctiondefinitionversion-get.html
   */
  public toGetFunctionDefinitionVersion() {
    this.to('greengrass:GetFunctionDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to retrieve information about a group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getgroup-get.html
   */
  public toGetGroup() {
    this.to('greengrass:GetGroup');
    return this;
  }

  /**
   * Grants permission to return the public key of the CA associated with a group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupcertificateauthority-get.html
   */
  public toGetGroupCertificateAuthority() {
    this.to('greengrass:GetGroupCertificateAuthority');
    return this;
  }

  /**
   * Grants permission to retrieve the current configuration for the CA used by a group.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupcertificateconfiguration-get.html
   */
  public toGetGroupCertificateConfiguration() {
    this.to('greengrass:GetGroupCertificateConfiguration');
    return this;
  }

  /**
   * Grants permission to retrieve information about a group version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getgroupversion-get.html
   */
  public toGetGroupVersion() {
    this.to('greengrass:GetGroupVersion');
    return this;
  }

  /**
   * Grants permission to retrieve information about a logger definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getloggerdefinition-get.html
   */
  public toGetLoggerDefinition() {
    this.to('greengrass:GetLoggerDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a logger definition version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getloggerdefinitionversion-get.html
   */
  public toGetLoggerDefinitionVersion() {
    this.to('greengrass:GetLoggerDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to retrieve information about a resource definition, such as its creation time and latest version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getresourcedefinition-get.html
   */
  public toGetResourceDefinition() {
    this.to('greengrass:GetResourceDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a resource definition version, such as which resources are included in the version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getresourcedefinitionversion-get.html
   */
  public toGetResourceDefinitionVersion() {
    this.to('greengrass:GetResourceDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to retrieve the service role that is attached to an account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getserviceroleforaccount-get.html
   */
  public toGetServiceRoleForAccount() {
    this.to('greengrass:GetServiceRoleForAccount');
    return this;
  }

  /**
   * Grants permission to retrieve information about a subscription definition.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getsubscriptiondefinition-get.html
   */
  public toGetSubscriptionDefinition() {
    this.to('greengrass:GetSubscriptionDefinition');
    return this;
  }

  /**
   * Grants permission to retrieve information about a subscription definition version.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/getsubscriptiondefinitionversion-get.html
   */
  public toGetSubscriptionDefinitionVersion() {
    this.to('greengrass:GetSubscriptionDefinitionVersion');
    return this;
  }

  /**
   * Grants permission to retrieve a paginated list of the deployments that have been started in a bulk deployment operation and their current deployment status.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listbulkdeploymentdetailedreports-get.html
   */
  public toListBulkDeploymentDetailedReports() {
    this.to('greengrass:ListBulkDeploymentDetailedReports');
    return this;
  }

  /**
   * Grants permission to retrieve a list of bulk deployments.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listbulkdeployments-get.html
   */
  public toListBulkDeployments() {
    this.to('greengrass:ListBulkDeployments');
    return this;
  }

  /**
   * Grants permission to list the versions of a connector definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listconnectordefinitionversions-get.html
   */
  public toListConnectorDefinitionVersions() {
    this.to('greengrass:ListConnectorDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of connector definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listconnectordefinitions-get.html
   */
  public toListConnectorDefinitions() {
    this.to('greengrass:ListConnectorDefinitions');
    return this;
  }

  /**
   * Grants permission to list the versions of a core definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listcoredefinitionversions-get.html
   */
  public toListCoreDefinitionVersions() {
    this.to('greengrass:ListCoreDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of core definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listcoredefinitions-get.html
   */
  public toListCoreDefinitions() {
    this.to('greengrass:ListCoreDefinitions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of all deployments for a group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listdeployments-get.html
   */
  public toListDeployments() {
    this.to('greengrass:ListDeployments');
    return this;
  }

  /**
   * Grants permission to list the versions of a device definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listdevicedefinitionversions-get.html
   */
  public toListDeviceDefinitionVersions() {
    this.to('greengrass:ListDeviceDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of device definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listdevicedefinitions-get.html
   */
  public toListDeviceDefinitions() {
    this.to('greengrass:ListDeviceDefinitions');
    return this;
  }

  /**
   * Grants permission to list the versions of a Lambda function definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listfunctiondefinitionversions-get.html
   */
  public toListFunctionDefinitionVersions() {
    this.to('greengrass:ListFunctionDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of Lambda function definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listfunctiondefinitions-get.html
   */
  public toListFunctionDefinitions() {
    this.to('greengrass:ListFunctionDefinitions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of current CAs for a group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listgroupcertificateauthorities-get.html
   */
  public toListGroupCertificateAuthorities() {
    this.to('greengrass:ListGroupCertificateAuthorities');
    return this;
  }

  /**
   * Grants permission to list the versions of a group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listgroupversions-get.html
   */
  public toListGroupVersions() {
    this.to('greengrass:ListGroupVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of groups.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listgroups-get.html
   */
  public toListGroups() {
    this.to('greengrass:ListGroups');
    return this;
  }

  /**
   * Grants permission to list the versions of a logger definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listloggerdefinitionversions-get.html
   */
  public toListLoggerDefinitionVersions() {
    this.to('greengrass:ListLoggerDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of logger definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listloggerdefinitions-get.html
   */
  public toListLoggerDefinitions() {
    this.to('greengrass:ListLoggerDefinitions');
    return this;
  }

  /**
   * Grants permission to list the versions of a resource definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listresourcedefinitionversions-get.html
   */
  public toListResourceDefinitionVersions() {
    this.to('greengrass:ListResourceDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of resource definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listresourcedefinitions-get.html
   */
  public toListResourceDefinitions() {
    this.to('greengrass:ListResourceDefinitions');
    return this;
  }

  /**
   * Grants permission to list the versions of a subscription definition.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listsubscriptiondefinitionversions-get.html
   */
  public toListSubscriptionDefinitionVersions() {
    this.to('greengrass:ListSubscriptionDefinitionVersions');
    return this;
  }

  /**
   * Grants permission to retrieve a list of subscription definitions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listsubscriptiondefinitions-get.html
   */
  public toListSubscriptionDefinitions() {
    this.to('greengrass:ListSubscriptionDefinitions');
    return this;
  }

  /**
   * Grants permission to list the tags for a resource.
   *
   * Access Level: List
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/listtagsforresource-get.html
   */
  public toListTagsForResource() {
    this.to('greengrass:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to reset a group's deployments.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/resetdeployments-post.html
   */
  public toResetDeployments() {
    this.to('greengrass:ResetDeployments');
    return this;
  }

  /**
   * Grants permission to deploy multiple groups in one operation.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/startbulkdeployment-post.html
   */
  public toStartBulkDeployment() {
    this.to('greengrass:StartBulkDeployment');
    return this;
  }

  /**
   * Grants permission to stop the execution of a bulk deployment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/stopbulkdeployment-put.html
   */
  public toStopBulkDeployment() {
    this.to('greengrass:StopBulkDeployment');
    return this;
  }

  /**
   * Grants permission to add tags to a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/tagresource-post.html
   */
  public toTagResource() {
    this.to('greengrass:TagResource');
    return this;
  }

  /**
   * Grants permission to remove tags from a resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/untagresource-delete.html
   */
  public toUntagResource() {
    this.to('greengrass:UntagResource');
    return this;
  }

  /**
   * Grants permission to update the connectivity information for a Greengrass core. Any devices that belong to the group that has this core will receive this information in order to find the location of the core and connect to it.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updateconnectivityinfo-put.html
   */
  public toUpdateConnectivityInfo() {
    this.to('greengrass:UpdateConnectivityInfo');
    return this;
  }

  /**
   * Grants permission to update a connector definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updateconnectordefinition-put.html
   */
  public toUpdateConnectorDefinition() {
    this.to('greengrass:UpdateConnectorDefinition');
    return this;
  }

  /**
   * Grants permission to update a core definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updatecoredefinition-put.html
   */
  public toUpdateCoreDefinition() {
    this.to('greengrass:UpdateCoreDefinition');
    return this;
  }

  /**
   * Grants permission to update a device definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updatedevicedefinition-put.html
   */
  public toUpdateDeviceDefinition() {
    this.to('greengrass:UpdateDeviceDefinition');
    return this;
  }

  /**
   * Grants permission to update a Lambda function definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updatefunctiondefinition-put.html
   */
  public toUpdateFunctionDefinition() {
    this.to('greengrass:UpdateFunctionDefinition');
    return this;
  }

  /**
   * Grants permission to update a group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updategroup-put.html
   */
  public toUpdateGroup() {
    this.to('greengrass:UpdateGroup');
    return this;
  }

  /**
   * Grants permission to update the certificate expiry time for a group.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updategroupcertificateconfiguration-put.html
   */
  public toUpdateGroupCertificateConfiguration() {
    this.to('greengrass:UpdateGroupCertificateConfiguration');
    return this;
  }

  /**
   * Grants permission to update a logger definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updateloggerdefinition-put.html
   */
  public toUpdateLoggerDefinition() {
    this.to('greengrass:UpdateLoggerDefinition');
    return this;
  }

  /**
   * Grants permission to update a resource definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updateresourcedefinition-put.html
   */
  public toUpdateResourceDefinition() {
    this.to('greengrass:UpdateResourceDefinition');
    return this;
  }

  /**
   * Grants permission to update a subscription definition.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/updatesubscriptiondefinition-put.html
   */
  public toUpdateSubscriptionDefinition() {
    this.to('greengrass:UpdateSubscriptionDefinition');
    return this;
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "AssociateRoleToGroup",
      "CreateConnectorDefinition",
      "CreateConnectorDefinitionVersion",
      "CreateCoreDefinition",
      "CreateCoreDefinitionVersion",
      "CreateDeployment",
      "CreateDeviceDefinition",
      "CreateDeviceDefinitionVersion",
      "CreateFunctionDefinition",
      "CreateFunctionDefinitionVersion",
      "CreateGroup",
      "CreateGroupCertificateAuthority",
      "CreateGroupVersion",
      "CreateLoggerDefinition",
      "CreateLoggerDefinitionVersion",
      "CreateResourceDefinition",
      "CreateResourceDefinitionVersion",
      "CreateSoftwareUpdateJob",
      "CreateSubscriptionDefinition",
      "CreateSubscriptionDefinitionVersion",
      "DeleteConnectorDefinition",
      "DeleteCoreDefinition",
      "DeleteDeviceDefinition",
      "DeleteFunctionDefinition",
      "DeleteGroup",
      "DeleteLoggerDefinition",
      "DeleteResourceDefinition",
      "DeleteSubscriptionDefinition",
      "DisassociateRoleFromGroup",
      "DisassociateServiceRoleFromAccount",
      "ResetDeployments",
      "StartBulkDeployment",
      "StopBulkDeployment",
      "UpdateConnectivityInfo",
      "UpdateConnectorDefinition",
      "UpdateCoreDefinition",
      "UpdateDeviceDefinition",
      "UpdateFunctionDefinition",
      "UpdateGroup",
      "UpdateGroupCertificateConfiguration",
      "UpdateLoggerDefinition",
      "UpdateResourceDefinition",
      "UpdateSubscriptionDefinition"
    ],
    "Permissions management": [
      "AssociateServiceRoleToAccount"
    ],
    "Read": [
      "Discover",
      "GetAssociatedRole",
      "GetBulkDeploymentStatus",
      "GetConnectivityInfo",
      "GetConnectorDefinition",
      "GetConnectorDefinitionVersion",
      "GetCoreDefinition",
      "GetCoreDefinitionVersion",
      "GetDeploymentStatus",
      "GetDeviceDefinition",
      "GetDeviceDefinitionVersion",
      "GetFunctionDefinition",
      "GetFunctionDefinitionVersion",
      "GetGroup",
      "GetGroupCertificateAuthority",
      "GetGroupCertificateConfiguration",
      "GetGroupVersion",
      "GetLoggerDefinition",
      "GetLoggerDefinitionVersion",
      "GetResourceDefinition",
      "GetResourceDefinitionVersion",
      "GetServiceRoleForAccount",
      "GetSubscriptionDefinition",
      "GetSubscriptionDefinitionVersion"
    ],
    "List": [
      "ListBulkDeploymentDetailedReports",
      "ListBulkDeployments",
      "ListConnectorDefinitionVersions",
      "ListConnectorDefinitions",
      "ListCoreDefinitionVersions",
      "ListCoreDefinitions",
      "ListDeployments",
      "ListDeviceDefinitionVersions",
      "ListDeviceDefinitions",
      "ListFunctionDefinitionVersions",
      "ListFunctionDefinitions",
      "ListGroupCertificateAuthorities",
      "ListGroupVersions",
      "ListGroups",
      "ListLoggerDefinitionVersions",
      "ListLoggerDefinitions",
      "ListResourceDefinitionVersions",
      "ListResourceDefinitions",
      "ListSubscriptionDefinitionVersions",
      "ListSubscriptionDefinitions",
      "ListTagsForResource"
    ],
    "Tagging": [
      "TagResource",
      "UntagResource"
    ]
  };

  /**
   * Adds a resource of type connectivityInfo to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connectivityinfo.html
   *
   * @param thingName - Identifier for the thingName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConnectivityInfo(thingName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/things/${ThingName}/connectivityInfo';
    arn = arn.replace('${ThingName}', thingName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type artifact to the statement
   *
   * @param groupId - Identifier for the groupId.
   * @param deploymentId - Identifier for the deploymentId.
   * @param artifactId - Identifier for the artifactId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onArtifact(groupId: string, deploymentId: string, artifactId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}/deployments/${DeploymentId}/artifacts/lambda/${ArtifactId}';
    arn = arn.replace('${GroupId}', groupId);
    arn = arn.replace('${DeploymentId}', deploymentId);
    arn = arn.replace('${ArtifactId}', artifactId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type certificateAuthority to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/developerguide/gg-sec.html
   *
   * @param groupId - Identifier for the groupId.
   * @param certificateAuthorityId - Identifier for the certificateAuthorityId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCertificateAuthority(groupId: string, certificateAuthorityId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}/certificateauthorities/${CertificateAuthorityId}';
    arn = arn.replace('${GroupId}', groupId);
    arn = arn.replace('${CertificateAuthorityId}', certificateAuthorityId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deployment to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-createdeploymentrequest.html
   *
   * @param groupId - Identifier for the groupId.
   * @param deploymentId - Identifier for the deploymentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDeployment(groupId: string, deploymentId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}/deployments/${DeploymentId}';
    arn = arn.replace('${GroupId}', groupId);
    arn = arn.replace('${DeploymentId}', deploymentId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type bulkDeployment to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/developerguide/bulk-deploy-cli.html
   *
   * @param bulkDeploymentId - Identifier for the bulkDeploymentId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onBulkDeployment(bulkDeploymentId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/bulk/deployments/${BulkDeploymentId}';
    arn = arn.replace('${BulkDeploymentId}', bulkDeploymentId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type group to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-groupinformation.html
   *
   * @param groupId - Identifier for the groupId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onGroup(groupId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}';
    arn = arn.replace('${GroupId}', groupId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type groupVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-groupversion.html
   *
   * @param groupId - Identifier for the groupId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onGroupVersion(groupId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/groups/${GroupId}/versions/${VersionId}';
    arn = arn.replace('${GroupId}', groupId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type coreDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-core.html
   *
   * @param coreDefinitionId - Identifier for the coreDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onCoreDefinition(coreDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/cores/${CoreDefinitionId}';
    arn = arn.replace('${CoreDefinitionId}', coreDefinitionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type coreDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-coredefinitionversion.html
   *
   * @param coreDefinitionId - Identifier for the coreDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCoreDefinitionVersion(coreDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/cores/${CoreDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${CoreDefinitionId}', coreDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deviceDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-device.html
   *
   * @param deviceDefinitionId - Identifier for the deviceDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onDeviceDefinition(deviceDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/devices/${DeviceDefinitionId}';
    arn = arn.replace('${DeviceDefinitionId}', deviceDefinitionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type deviceDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-devicedefinitionversion.html
   *
   * @param deviceDefinitionId - Identifier for the deviceDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDeviceDefinitionVersion(deviceDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/devices/${DeviceDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${DeviceDefinitionId}', deviceDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type functionDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-function.html
   *
   * @param functionDefinitionId - Identifier for the functionDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onFunctionDefinition(functionDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/functions/${FunctionDefinitionId}';
    arn = arn.replace('${FunctionDefinitionId}', functionDefinitionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type functionDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-functiondefinitionversion.html
   *
   * @param functionDefinitionId - Identifier for the functionDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onFunctionDefinitionVersion(functionDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/functions/${FunctionDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${FunctionDefinitionId}', functionDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type subscriptionDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-subscription.html
   *
   * @param subscriptionDefinitionId - Identifier for the subscriptionDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onSubscriptionDefinition(subscriptionDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/subscriptions/${SubscriptionDefinitionId}';
    arn = arn.replace('${SubscriptionDefinitionId}', subscriptionDefinitionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type subscriptionDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-subscriptiondefinitionversion.html
   *
   * @param subscriptionDefinitionId - Identifier for the subscriptionDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onSubscriptionDefinitionVersion(subscriptionDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/subscriptions/${SubscriptionDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${SubscriptionDefinitionId}', subscriptionDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type loggerDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-logger.html
   *
   * @param loggerDefinitionId - Identifier for the loggerDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onLoggerDefinition(loggerDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/loggers/${LoggerDefinitionId}';
    arn = arn.replace('${LoggerDefinitionId}', loggerDefinitionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type loggerDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-loggerdefinitionversion.html
   *
   * @param loggerDefinitionId - Identifier for the loggerDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onLoggerDefinitionVersion(loggerDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/loggers/${LoggerDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${LoggerDefinitionId}', loggerDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type resourceDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-resource.html
   *
   * @param resourceDefinitionId - Identifier for the resourceDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onResourceDefinition(resourceDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/resources/${ResourceDefinitionId}';
    arn = arn.replace('${ResourceDefinitionId}', resourceDefinitionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type resourceDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-resourcedefinitionversion.html
   *
   * @param resourceDefinitionId - Identifier for the resourceDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onResourceDefinitionVersion(resourceDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/resources/${ResourceDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${ResourceDefinitionId}', resourceDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type connectorDefinition to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connector.html
   *
   * @param connectorDefinitionId - Identifier for the connectorDefinitionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onConnectorDefinition(connectorDefinitionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/connectors/${ConnectorDefinitionId}';
    arn = arn.replace('${ConnectorDefinitionId}', connectorDefinitionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type connectorDefinitionVersion to the statement
   *
   * https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-connectordefinitionversion.html
   *
   * @param connectorDefinitionId - Identifier for the connectorDefinitionId.
   * @param versionId - Identifier for the versionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onConnectorDefinitionVersion(connectorDefinitionId: string, versionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/definition/connectors/${ConnectorDefinitionId}/versions/${VersionId}';
    arn = arn.replace('${ConnectorDefinitionId}', connectorDefinitionId);
    arn = arn.replace('${VersionId}', versionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type thing to the statement
   *
   * https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html
   *
   * @param thingName - Identifier for the thingName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onThing(thingName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:iot:${Region}:${Account}:thing/${ThingName}';
    arn = arn.replace('${ThingName}', thingName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}

export type GreengrassActionsWrite = 'AssociateRoleToGroup' | 'CreateConnectorDefinition' | 'CreateConnectorDefinitionVersion' | 'CreateCoreDefinition' | 'CreateCoreDefinitionVersion' | 'CreateDeployment' | 'CreateDeviceDefinition' | 'CreateDeviceDefinitionVersion' | 'CreateFunctionDefinition' | 'CreateFunctionDefinitionVersion' | 'CreateGroup' | 'CreateGroupCertificateAuthority' | 'CreateGroupVersion' | 'CreateLoggerDefinition' | 'CreateLoggerDefinitionVersion' | 'CreateResourceDefinition' | 'CreateResourceDefinitionVersion' | 'CreateSoftwareUpdateJob' | 'CreateSubscriptionDefinition' | 'CreateSubscriptionDefinitionVersion' | 'DeleteConnectorDefinition' | 'DeleteCoreDefinition' | 'DeleteDeviceDefinition' | 'DeleteFunctionDefinition' | 'DeleteGroup' | 'DeleteLoggerDefinition' | 'DeleteResourceDefinition' | 'DeleteSubscriptionDefinition' | 'DisassociateRoleFromGroup' | 'DisassociateServiceRoleFromAccount' | 'ResetDeployments' | 'StartBulkDeployment' | 'StopBulkDeployment' | 'UpdateConnectivityInfo' | 'UpdateConnectorDefinition' | 'UpdateCoreDefinition' | 'UpdateDeviceDefinition' | 'UpdateFunctionDefinition' | 'UpdateGroup' | 'UpdateGroupCertificateConfiguration' | 'UpdateLoggerDefinition' | 'UpdateResourceDefinition' | 'UpdateSubscriptionDefinition';
export type GreengrassActionsPermissions management = 'AssociateServiceRoleToAccount';

export type GreengrassActionsRead = 'Discover' | 'GetAssociatedRole' | 'GetBulkDeploymentStatus' | 'GetConnectivityInfo' | 'GetConnectorDefinition' | 'GetConnectorDefinitionVersion' | 'GetCoreDefinition' | 'GetCoreDefinitionVersion' | 'GetDeploymentStatus' | 'GetDeviceDefinition' | 'GetDeviceDefinitionVersion' | 'GetFunctionDefinition' | 'GetFunctionDefinitionVersion' | 'GetGroup' | 'GetGroupCertificateAuthority' | 'GetGroupCertificateConfiguration' | 'GetGroupVersion' | 'GetLoggerDefinition' | 'GetLoggerDefinitionVersion' | 'GetResourceDefinition' | 'GetResourceDefinitionVersion' | 'GetServiceRoleForAccount' | 'GetSubscriptionDefinition' | 'GetSubscriptionDefinitionVersion';
export type GreengrassActionsList = 'ListBulkDeploymentDetailedReports' | 'ListBulkDeployments' | 'ListConnectorDefinitionVersions' | 'ListConnectorDefinitions' | 'ListCoreDefinitionVersions' | 'ListCoreDefinitions' | 'ListDeployments' | 'ListDeviceDefinitionVersions' | 'ListDeviceDefinitions' | 'ListFunctionDefinitionVersions' | 'ListFunctionDefinitions' | 'ListGroupCertificateAuthorities' | 'ListGroupVersions' | 'ListGroups' | 'ListLoggerDefinitionVersions' | 'ListLoggerDefinitions' | 'ListResourceDefinitionVersions' | 'ListResourceDefinitions' | 'ListSubscriptionDefinitionVersions' | 'ListSubscriptionDefinitions' | 'ListTagsForResource';
export type GreengrassActionsTagging = 'TagResource' | 'UntagResource';
export type GreengrassActions = GreengrassActionsWrite | GreengrassActionsPermissions management | GreengrassActionsRead | GreengrassActionsList | GreengrassActionsTagging;
