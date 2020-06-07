import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service ssmmessages
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsessionmanagermessagegatewayservice.html
 */
export class Ssmmessages extends PolicyStatement {
    public servicePrefix = 'ssmmessages';
    public actions : Actions = {
        "CreateControlChannel": {
            "url": "",
            "description": "Registers a control channel for an instance to send control messages to Systems Manager service.",
            "accessLevel": "Write"
        },
        "CreateDataChannel": {
            "url": "",
            "description": "Registers a data channel for an instance to send data messages to Systems Manager service.",
            "accessLevel": "Write"
        },
        "OpenControlChannel": {
            "url": "",
            "description": "Opens a websocket connection for a registered control channel stream from an instance to Systems Manager service.",
            "accessLevel": "Write"
        },
        "OpenDataChannel": {
            "url": "",
            "description": "Opens a websocket connection for a registered data channel stream from an instance to Systems Manager service.",
            "accessLevel": "Write"
        }
    };

    /**
     * Registers a control channel for an instance to send control messages to Systems Manager service.
     *
     * Access Level: Write
     *
     *
     */
    public createControlChannel () {
        this.add('ssmmessages:CreateControlChannel');
        return this;
    }

    /**
     * Registers a data channel for an instance to send data messages to Systems Manager service.
     *
     * Access Level: Write
     *
     *
     */
    public createDataChannel () {
        this.add('ssmmessages:CreateDataChannel');
        return this;
    }

    /**
     * Opens a websocket connection for a registered control channel stream from an instance to Systems Manager service.
     *
     * Access Level: Write
     *
     *
     */
    public openControlChannel () {
        this.add('ssmmessages:OpenControlChannel');
        return this;
    }

    /**
     * Opens a websocket connection for a registered data channel stream from an instance to Systems Manager service.
     *
     * Access Level: Write
     *
     *
     */
    public openDataChannel () {
        this.add('ssmmessages:OpenDataChannel');
        return this;
    }
}
