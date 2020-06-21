import { Actions, PolicyStatement, ResourceTypes } from "./shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service cloud9
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html
 */
export class Cloud9 extends PolicyStatement {
  public servicePrefix = 'cloud9';
  public actions: Actions = {
    "CreateEnvironmentEC2": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/APIReference/API_CreateEnvironmentEC2.html",
      "description": "Grants permission to create an AWS Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then hosts the environment on the instance.",
      "accessLevel": "Write",
      "conditions": [
        "cloud9:EnvironmentName",
        "cloud9:InstanceType",
        "cloud9:SubnetId",
        "cloud9:UserArn"
      ]
    },
    "CreateEnvironmentMembership": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/APIReference/API_CreateEnvironmentMembership.html",
      "description": "Grants permission to add an environment member to an AWS Cloud9 development environment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true
        }
      },
      "conditions": [
        "cloud9:UserArn",
        "cloud9:EnvironmentId",
        "cloud9:Permissions"
      ]
    },
    "DeleteEnvironment": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DeleteEnvironment.html",
      "description": "Grants permission to delete an AWS Cloud9 development environment. If the environment is hosted on an Amazon Elastic Compute Cloud (Amazon EC2) instance, also terminates the instance.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true
        }
      }
    },
    "DeleteEnvironmentMembership": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DeleteEnvironmentMembership.html",
      "description": "Grants permission to delete an environment member from an AWS Cloud9 development environment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true
        }
      }
    },
    "DescribeEnvironmentMemberships": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironmentMemberships.html",
      "description": "Grants permission to get information about environment members for an AWS Cloud9 development environment.",
      "accessLevel": "Read",
      "resourceTypes": {
        "environment": {
          "required": true
        }
      },
      "conditions": [
        "cloud9:UserArn",
        "cloud9:EnvironmentId"
      ]
    },
    "DescribeEnvironmentStatus": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironmentStatus.html",
      "description": "Grants permission to get status information for an AWS Cloud9 development environment.",
      "accessLevel": "Read",
      "resourceTypes": {
        "environment": {
          "required": true
        }
      }
    },
    "DescribeEnvironments": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironments.html",
      "description": "Grants permission to get information about AWS Cloud9 development environments.",
      "accessLevel": "Read",
      "resourceTypes": {
        "environment": {
          "required": true
        }
      }
    },
    "GetUserSettings": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/user-guide/settings-user.html",
      "description": "Grants permission to get IDE-specific settings of an AWS Cloud9 user.",
      "accessLevel": "Read"
    },
    "ListEnvironments": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/APIReference/API_ListEnvironments.html",
      "description": "Grants permission to get a list of AWS Cloud9 development environment identifiers.",
      "accessLevel": "Read"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/APIReference/API_ListTagsForResource.html",
      "description": "Lists tags for a cloud9 environment",
      "accessLevel": "Read",
      "resourceTypes": {
        "environment": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/APIReference/API_TagResource.html",
      "description": "Adds tags to a cloud9 environment",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UntagResource.html",
      "description": "Removes tags from a cloud9 environment",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateEnvironment": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UpdateEnvironment.html",
      "description": "Grants permission to change the settings of an existing AWS Cloud9 development environment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true
        }
      }
    },
    "UpdateEnvironmentMembership": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UpdateEnvironmentMembership.html",
      "description": "Grants permission to change the settings of an existing environment member for an AWS Cloud9 development environment.",
      "accessLevel": "Write",
      "resourceTypes": {
        "environment": {
          "required": true
        }
      },
      "conditions": [
        "cloud9:UserArn",
        "cloud9:EnvironmentId",
        "cloud9:Permissions"
      ]
    },
    "UpdateUserSettings": {
      "url": "https://docs.aws.amazon.com/cloud9/latest/user-guide/settings-user.html",
      "description": "Grants permission to update IDE-specific settings of an AWS Cloud9 user.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {
    "environment": {
      "name": "environment",
      "url": "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html#awscloud9-environment",
      "arn": "arn:${Partition}:cloud9:${Region}:${Account}:environment:${ResourceId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service cloud9
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grants permission to create an AWS Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then hosts the environment on the instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_CreateEnvironmentEC2.html
   */
  public createEnvironmentEC2() {
    this.add('cloud9:CreateEnvironmentEC2');
    return this;
  }

  /**
   * Grants permission to add an environment member to an AWS Cloud9 development environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_CreateEnvironmentMembership.html
   */
  public createEnvironmentMembership() {
    this.add('cloud9:CreateEnvironmentMembership');
    return this;
  }

  /**
   * Grants permission to delete an AWS Cloud9 development environment. If the environment is hosted on an Amazon Elastic Compute Cloud (Amazon EC2) instance, also terminates the instance.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DeleteEnvironment.html
   */
  public deleteEnvironment() {
    this.add('cloud9:DeleteEnvironment');
    return this;
  }

  /**
   * Grants permission to delete an environment member from an AWS Cloud9 development environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DeleteEnvironmentMembership.html
   */
  public deleteEnvironmentMembership() {
    this.add('cloud9:DeleteEnvironmentMembership');
    return this;
  }

  /**
   * Grants permission to get information about environment members for an AWS Cloud9 development environment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironmentMemberships.html
   */
  public describeEnvironmentMemberships() {
    this.add('cloud9:DescribeEnvironmentMemberships');
    return this;
  }

  /**
   * Grants permission to get status information for an AWS Cloud9 development environment.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironmentStatus.html
   */
  public describeEnvironmentStatus() {
    this.add('cloud9:DescribeEnvironmentStatus');
    return this;
  }

  /**
   * Grants permission to get information about AWS Cloud9 development environments.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_DescribeEnvironments.html
   */
  public describeEnvironments() {
    this.add('cloud9:DescribeEnvironments');
    return this;
  }

  /**
   * Grants permission to get IDE-specific settings of an AWS Cloud9 user.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/settings-user.html
   */
  public getUserSettings() {
    this.add('cloud9:GetUserSettings');
    return this;
  }

  /**
   * Grants permission to get a list of AWS Cloud9 development environment identifiers.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_ListEnvironments.html
   */
  public listEnvironments() {
    this.add('cloud9:ListEnvironments');
    return this;
  }

  /**
   * Lists tags for a cloud9 environment
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('cloud9:ListTagsForResource');
    return this;
  }

  /**
   * Adds tags to a cloud9 environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('cloud9:TagResource');
    return this;
  }

  /**
   * Removes tags from a cloud9 environment
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('cloud9:UntagResource');
    return this;
  }

  /**
   * Grants permission to change the settings of an existing AWS Cloud9 development environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UpdateEnvironment.html
   */
  public updateEnvironment() {
    this.add('cloud9:UpdateEnvironment');
    return this;
  }

  /**
   * Grants permission to change the settings of an existing environment member for an AWS Cloud9 development environment.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/APIReference/API_UpdateEnvironmentMembership.html
   */
  public updateEnvironmentMembership() {
    this.add('cloud9:UpdateEnvironmentMembership');
    return this;
  }

  /**
   * Grants permission to update IDE-specific settings of an AWS Cloud9 user.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/cloud9/latest/user-guide/settings-user.html
   */
  public updateUserSettings() {
    this.add('cloud9:UpdateUserSettings');
    return this;
  }

  /**
   * Adds a resource of type environment to the statement
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html#awscloud9-environment
   *
   * @param resourceId - Identifier for the resourceId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onEnvironment(resourceId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloud9:${Region}:${Account}:environment:${ResourceId}';
    arn = arn.replace('${ResourceId}', resourceId);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters access by the AWS Cloud9 environment ID
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html#awscloud9-cloud9_EnvironmentId
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEnvironmentId(value: string | string[], operator?: string) {
    return this.if(`cloud9:EnvironmentId`, value, operator || 'StringEquals');
  }

  /**
   * Filters access by the AWS Cloud9 environment name
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html#awscloud9-cloud9_EnvironmentName
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifEnvironmentName(value: string | string[], operator?: string) {
    return this.if(`cloud9:EnvironmentName`, value, operator || 'StringEquals');
  }

  /**
   * Filters access by the instance type of the AWS Cloud9 environment's Amazon EC2 instance
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html#awscloud9-cloud9_InstanceType
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifInstanceType(value: string | string[], operator?: string) {
    return this.if(`cloud9:InstanceType`, value, operator || 'StringEquals');
  }

  /**
   * Filters access by the type of AWS Cloud9 permissions
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html#awscloud9-cloud9_Permissions
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifPermissions(value: string | string[], operator?: string) {
    return this.if(`cloud9:Permissions`, value, operator || 'StringEquals');
  }

  /**
   * Filters access by the subnet ID that the AWS Cloud9 environment will be created in
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html#awscloud9-cloud9_SubnetId
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringEquals`
   */
  public ifSubnetId(value: string | string[], operator?: string) {
    return this.if(`cloud9:SubnetId`, value, operator || 'StringEquals');
  }

  /**
   * Filters access by the user ARN specified
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html#awscloud9-cloud9_UserArn
   *
   * @param value The value(s) to check
   * @param operator Works with [arn operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN). **Default:** `ArnEquals`
   */
  public ifUserArn(value: string | string[], operator?: string) {
    return this.if(`cloud9:UserArn`, value, operator || 'ArnEquals');
  }
}
