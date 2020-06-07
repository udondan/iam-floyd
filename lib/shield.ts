import { PolicyStatement, Actions } from "./shared";

/**
 * Action provider for service shield
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsshield.html
 */
export class Shield extends PolicyStatement {
    public servicePrefix = 'shield';
    public actions : Actions = {
        "AssociateDRTLogBucket": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTLogBucket.html",
            "description": "Authorizes the DDoS Response team to access the specified Amazon S3 bucket containing your flow logs",
            "accessLevel": "Write"
        },
        "AssociateDRTRole": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTRole.html",
            "description": "Authorizes the DDoS Response team using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks",
            "accessLevel": "Write"
        },
        "CreateProtection": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtection.html",
            "description": "Activate DDoS protection service for a given resource ARN",
            "accessLevel": "Write",
            "resourceTypes": {
                "protection": {
                    "required": true
                }
            }
        },
        "CreateSubscription": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html",
            "description": "Activate subscription",
            "accessLevel": "Write"
        },
        "DeleteProtection": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteProtection.html",
            "description": "Delete an existing protection",
            "accessLevel": "Write",
            "resourceTypes": {
                "protection": {
                    "required": true
                }
            }
        },
        "DeleteSubscription": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteSubscription.html",
            "description": "Deactivate subscription",
            "accessLevel": "Write"
        },
        "DescribeAttack": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeAttack.html",
            "description": "Get attack details",
            "accessLevel": "Read",
            "resourceTypes": {
                "attack": {
                    "required": true
                }
            }
        },
        "DescribeDRTAccess": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeDRTAccess.html",
            "description": "Returns the current role and list of Amazon S3 log buckets used by the DDoS Response team to access your AWS account while assisting with attack mitigation",
            "accessLevel": "Read"
        },
        "DescribeEmergencyContactSettings": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeEmergencyContactSettings.html",
            "description": "Lists the email addresses that the DRT can use to contact you during a suspected attack",
            "accessLevel": "Read"
        },
        "DescribeProtection": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeProtection.html",
            "description": "Get protection details",
            "accessLevel": "Read",
            "resourceTypes": {
                "protection": {
                    "required": true
                }
            }
        },
        "DescribeSubscription": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeSubscription.html",
            "description": "Get subscription details, such as start time",
            "accessLevel": "Read"
        },
        "DisassociateDRTLogBucket": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTLogBucket.html",
            "description": "Removes the DDoS Response team's access to the specified Amazon S3 bucket containing your flow logs",
            "accessLevel": "Write"
        },
        "DisassociateDRTRole": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTRole.html",
            "description": "Removes the DDoS Response team's access to your AWS account",
            "accessLevel": "Write"
        },
        "GetSubscriptionState": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_GetSubscriptionState.html",
            "description": "Get subscription state",
            "accessLevel": "Read"
        },
        "ListAttacks": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListAttacks.html",
            "description": "List all existing attacks",
            "accessLevel": "List"
        },
        "ListProtections": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListProtections.html",
            "description": "List all existing protections",
            "accessLevel": "List"
        },
        "UpdateEmergencyContactSettings": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateEmergencyContactSettings.html",
            "description": "Updates the details of the list of email addresses that the DRT can use to contact you during a suspected attack",
            "accessLevel": "Write"
        },
        "UpdateSubscription": {
            "url": "https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateSubscription.html",
            "description": "Updates the details of an existing subscription",
            "accessLevel": "Write"
        }
    };

    /**
     * Authorizes the DDoS Response team to access the specified Amazon S3 bucket containing your flow logs
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTLogBucket.html
     */
    public associateDRTLogBucket () {
        this.add('shield:AssociateDRTLogBucket');
        return this;
    }

    /**
     * Authorizes the DDoS Response team using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_AssociateDRTRole.html
     */
    public associateDRTRole () {
        this.add('shield:AssociateDRTRole');
        return this;
    }

    /**
     * Activate DDoS protection service for a given resource ARN
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateProtection.html
     */
    public createProtection () {
        this.add('shield:CreateProtection');
        return this;
    }

    /**
     * Activate subscription
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html
     */
    public createSubscription () {
        this.add('shield:CreateSubscription');
        return this;
    }

    /**
     * Delete an existing protection
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteProtection.html
     */
    public deleteProtection () {
        this.add('shield:DeleteProtection');
        return this;
    }

    /**
     * Deactivate subscription
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DeleteSubscription.html
     */
    public deleteSubscription () {
        this.add('shield:DeleteSubscription');
        return this;
    }

    /**
     * Get attack details
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeAttack.html
     */
    public describeAttack () {
        this.add('shield:DescribeAttack');
        return this;
    }

    /**
     * Returns the current role and list of Amazon S3 log buckets used by the DDoS Response team to access your AWS account while assisting with attack mitigation
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeDRTAccess.html
     */
    public describeDRTAccess () {
        this.add('shield:DescribeDRTAccess');
        return this;
    }

    /**
     * Lists the email addresses that the DRT can use to contact you during a suspected attack
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeEmergencyContactSettings.html
     */
    public describeEmergencyContactSettings () {
        this.add('shield:DescribeEmergencyContactSettings');
        return this;
    }

    /**
     * Get protection details
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeProtection.html
     */
    public describeProtection () {
        this.add('shield:DescribeProtection');
        return this;
    }

    /**
     * Get subscription details, such as start time
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DescribeSubscription.html
     */
    public describeSubscription () {
        this.add('shield:DescribeSubscription');
        return this;
    }

    /**
     * Removes the DDoS Response team's access to the specified Amazon S3 bucket containing your flow logs
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTLogBucket.html
     */
    public disassociateDRTLogBucket () {
        this.add('shield:DisassociateDRTLogBucket');
        return this;
    }

    /**
     * Removes the DDoS Response team's access to your AWS account
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_DisassociateDRTRole.html
     */
    public disassociateDRTRole () {
        this.add('shield:DisassociateDRTRole');
        return this;
    }

    /**
     * Get subscription state
     *
     * Access Level: Read
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_GetSubscriptionState.html
     */
    public getSubscriptionState () {
        this.add('shield:GetSubscriptionState');
        return this;
    }

    /**
     * List all existing attacks
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListAttacks.html
     */
    public listAttacks () {
        this.add('shield:ListAttacks');
        return this;
    }

    /**
     * List all existing protections
     *
     * Access Level: List
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_ListProtections.html
     */
    public listProtections () {
        this.add('shield:ListProtections');
        return this;
    }

    /**
     * Updates the details of the list of email addresses that the DRT can use to contact you during a suspected attack
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateEmergencyContactSettings.html
     */
    public updateEmergencyContactSettings () {
        this.add('shield:UpdateEmergencyContactSettings');
        return this;
    }

    /**
     * Updates the details of an existing subscription
     *
     * Access Level: Write
     *
     * https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_UpdateSubscription.html
     */
    public updateSubscription () {
        this.add('shield:UpdateSubscription');
        return this;
    }
}
