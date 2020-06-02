import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service servicediscovery
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudmap.html
 */
export class Servicediscovery extends PolicyStatement {
    public servicePrefix = 'servicediscovery';
    public actions : Actions = { "CreateHttpNamespace": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateHttpNamespace.html", "description": "Creates an HTTP namespace.", "accessLevel": "Write" }, "CreatePrivateDnsNamespace": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePrivateDnsNamespace.html", "description": "Creates a private namespace based on DNS, which will be visible only inside a specified Amazon VPC.", "accessLevel": "Write" }, "CreatePublicDnsNamespace": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePublicDnsNamespace.html", "description": "Creates a public namespace based on DNS, which will be visible on the internet.", "accessLevel": "Write" }, "CreateService": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html", "description": "Creates a service.", "accessLevel": "Write", "conditions": ["servicediscovery:NamespaceArn"] }, "DeleteNamespace": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteNamespace.html", "description": "Deletes a specified namespace.", "accessLevel": "Write", "resourceTypes": { "namespace": { "required": true } } }, "DeleteService": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteService.html", "description": "Deletes a specified service.", "accessLevel": "Write", "resourceTypes": { "service": { "required": true } } }, "DeregisterInstance": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_DeregisterInstance.html", "description": "Deletes the records and the health check, if any, that Amazon Route 53 created for the specified instance.", "accessLevel": "Write", "conditions": ["servicediscovery:ServiceArn"] }, "DiscoverInstances": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html", "description": "Discovers registered instances for a specified namespace and service.", "accessLevel": "Read", "conditions": ["servicediscovery:NamespaceName", "servicediscovery:ServiceName"] }, "GetInstance": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstance.html", "description": "Gets information about a specified instance.", "accessLevel": "Read", "conditions": ["servicediscovery:ServiceArn"] }, "GetInstancesHealthStatus": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstancesHealthStatus.html", "description": "Gets the current health status (Healthy, Unhealthy, or Unknown) of one or more instances.", "accessLevel": "Read", "conditions": ["servicediscovery:ServiceArn"] }, "GetNamespace": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_GetNamespace.html", "description": "Gets information about a namespace.", "accessLevel": "Read", "resourceTypes": { "namespace": { "required": true } } }, "GetOperation": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html", "description": "Gets information about a specific operation.", "accessLevel": "Read" }, "GetService": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_GetService.html", "description": "Gets the settings for a specified service.", "accessLevel": "Read", "resourceTypes": { "service": { "required": true } } }, "ListInstances": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_ListInstances.html", "description": "Gets summary information about the instances that were registered with a specified service.", "accessLevel": "List", "conditions": ["servicediscovery:ServiceArn"] }, "ListNamespaces": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_ListNamespaces.html", "description": "Gets information about the namespaces.", "accessLevel": "List" }, "ListOperations": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html", "description": "Lists operations that match the criteria that you specify.", "accessLevel": "List" }, "ListServices": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_ListServices.html", "description": "Gets settings for all the services that match specified filters.", "accessLevel": "List" }, "RegisterInstance": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html", "description": "Registers an instance based on the settings in a specified service.", "accessLevel": "Write", "conditions": ["servicediscovery:ServiceArn"] }, "UpdateInstanceCustomHealthStatus": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html", "description": "Updates the current health status for an instance that has a custom health check.", "accessLevel": "Write", "conditions": ["servicediscovery:ServiceArn"] }, "UpdateService": { "url": "https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateService.html", "description": "Updates the settings in a specified service.", "accessLevel": "Write", "resourceTypes": { "service": { "required": true } } } };

    /**
     * Creates an HTTP namespace.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateHttpNamespace.html
     */
    public createHttpNamespace () {
        this.add('servicediscovery:CreateHttpNamespace');
        return this;
    }

    /**
     * Creates a private namespace based on DNS, which will be visible only inside a specified Amazon VPC.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePrivateDnsNamespace.html
     */
    public createPrivateDnsNamespace () {
        this.add('servicediscovery:CreatePrivateDnsNamespace');
        return this;
    }

    /**
     * Creates a public namespace based on DNS, which will be visible on the internet.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_CreatePublicDnsNamespace.html
     */
    public createPublicDnsNamespace () {
        this.add('servicediscovery:CreatePublicDnsNamespace');
        return this;
    }

    /**
     * Creates a service.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html
     */
    public createService () {
        this.add('servicediscovery:CreateService');
        return this;
    }

    /**
     * Deletes a specified namespace.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteNamespace.html
     */
    public deleteNamespace () {
        this.add('servicediscovery:DeleteNamespace');
        return this;
    }

    /**
     * Deletes a specified service.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_DeleteService.html
     */
    public deleteService () {
        this.add('servicediscovery:DeleteService');
        return this;
    }

    /**
     * Deletes the records and the health check, if any, that Amazon Route 53 created for the specified instance.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_DeregisterInstance.html
     */
    public deregisterInstance () {
        this.add('servicediscovery:DeregisterInstance');
        return this;
    }

    /**
     * Discovers registered instances for a specified namespace and service.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html
     */
    public discoverInstances () {
        this.add('servicediscovery:DiscoverInstances');
        return this;
    }

    /**
     * Gets information about a specified instance.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstance.html
     */
    public getInstance () {
        this.add('servicediscovery:GetInstance');
        return this;
    }

    /**
     * Gets the current health status (Healthy, Unhealthy, or Unknown) of one or more instances.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetInstancesHealthStatus.html
     */
    public getInstancesHealthStatus () {
        this.add('servicediscovery:GetInstancesHealthStatus');
        return this;
    }

    /**
     * Gets information about a namespace.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetNamespace.html
     */
    public getNamespace () {
        this.add('servicediscovery:GetNamespace');
        return this;
    }

    /**
     * Gets information about a specific operation.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetOperation.html
     */
    public getOperation () {
        this.add('servicediscovery:GetOperation');
        return this;
    }

    /**
     * Gets the settings for a specified service.
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_GetService.html
     */
    public getService () {
        this.add('servicediscovery:GetService');
        return this;
    }

    /**
     * Gets summary information about the instances that were registered with a specified service.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListInstances.html
     */
    public listInstances () {
        this.add('servicediscovery:ListInstances');
        return this;
    }

    /**
     * Gets information about the namespaces.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListNamespaces.html
     */
    public listNamespaces () {
        this.add('servicediscovery:ListNamespaces');
        return this;
    }

    /**
     * Lists operations that match the criteria that you specify.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListOperations.html
     */
    public listOperations () {
        this.add('servicediscovery:ListOperations');
        return this;
    }

    /**
     * Gets settings for all the services that match specified filters.
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_ListServices.html
     */
    public listServices () {
        this.add('servicediscovery:ListServices');
        return this;
    }

    /**
     * Registers an instance based on the settings in a specified service.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html
     */
    public registerInstance () {
        this.add('servicediscovery:RegisterInstance');
        return this;
    }

    /**
     * Updates the current health status for an instance that has a custom health check.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateInstanceCustomHealthStatus.html
     */
    public updateInstanceCustomHealthStatus () {
        this.add('servicediscovery:UpdateInstanceCustomHealthStatus');
        return this;
    }

    /**
     * Updates the settings in a specified service.
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/cloud-map/latest/api/API_UpdateService.html
     */
    public updateService () {
        this.add('servicediscovery:UpdateService');
        return this;
    }
}
