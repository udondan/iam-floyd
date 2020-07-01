import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service cloudwatch
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html
 */
export class Cloudwatch extends PolicyStatement {
  public servicePrefix = 'cloudwatch';
  public actions: Actions = {
    "DeleteAlarms": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteAlarms.html",
      "description": "Deletes all specified alarms. In the event of an error, no alarms are deleted",
      "accessLevel": "Write",
      "resourceTypes": {
        "alarm": {
          "required": true
        }
      }
    },
    "DeleteAnomalyDetector": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteAnomalyDetector.html",
      "description": "Deletes the specified anomaly detection model from your account.",
      "accessLevel": "Write"
    },
    "DeleteDashboards": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteDashboards.html",
      "description": "Deletes all CloudWatch dashboards that you specify",
      "accessLevel": "Write",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "DeleteInsightRules": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteInsightRules.html",
      "description": "Grants permission to delete a collection of insight rules.",
      "accessLevel": "Write",
      "resourceTypes": {
        "insight-rule": {
          "required": true
        }
      }
    },
    "DescribeAlarmHistory": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html",
      "description": "Retrieves history for the specified alarm",
      "accessLevel": "Read",
      "resourceTypes": {
        "alarm": {
          "required": true
        }
      }
    },
    "DescribeAlarms": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html",
      "description": "Retrieves alarms with the specified names",
      "accessLevel": "Read",
      "resourceTypes": {
        "alarm": {
          "required": true
        }
      }
    },
    "DescribeAlarmsForMetric": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmsForMetric.html",
      "description": "Retrieves all alarms for a single metric",
      "accessLevel": "Read"
    },
    "DescribeAnomalyDetectors": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAnomalyDetectors.html",
      "description": "Lists the anomaly detection models that you have created in your account.",
      "accessLevel": "Read"
    },
    "DescribeInsightRules": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html",
      "description": "Grants permission to describe all insight rules, currently owned by the user's account.",
      "accessLevel": "Read"
    },
    "DisableAlarmActions": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DisableAlarmActions.html",
      "description": "Disables actions for the specified alarms",
      "accessLevel": "Write",
      "resourceTypes": {
        "alarm": {
          "required": true
        }
      }
    },
    "DisableInsightRules": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DisableInsightRules.html",
      "description": "Grants permission to disable a collection of insight rules.",
      "accessLevel": "Write",
      "resourceTypes": {
        "insight-rule": {
          "required": true
        }
      }
    },
    "EnableAlarmActions": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_EnableAlarmActions.html",
      "description": "Enables actions for the specified alarms",
      "accessLevel": "Write",
      "resourceTypes": {
        "alarm": {
          "required": true
        }
      }
    },
    "EnableInsightRules": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_EnableInsightRules.html",
      "description": "Grants permission to enable a collection of insight rules.",
      "accessLevel": "Write",
      "resourceTypes": {
        "insight-rule": {
          "required": true
        }
      }
    },
    "GetDashboard": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetDashboard.html",
      "description": "Displays the details of the CloudWatch dashboard you specify",
      "accessLevel": "Read",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "GetInsightRuleReport": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html",
      "description": "Grants permission to return the top-N report of unique contributors over a time range for a given insight rule.",
      "accessLevel": "Read",
      "resourceTypes": {
        "insight-rule": {
          "required": true
        }
      }
    },
    "GetMetricData": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html",
      "description": "Required to retrieve batch amounts of CloudWatch metric data and perform metric math on retrieved data",
      "accessLevel": "Read"
    },
    "GetMetricStatistics": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html",
      "description": "Gets statistics for the specified metric",
      "accessLevel": "Read"
    },
    "GetMetricWidgetImage": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricWidgetImage.html",
      "description": "Required to retrieve snapshots of metric widgets",
      "accessLevel": "Read"
    },
    "ListDashboards": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListDashboards.html",
      "description": "Returns a list of all CloudWatch dashboards in your account",
      "accessLevel": "List"
    },
    "ListMetrics": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html",
      "description": "Returns a list of valid metrics stored for the AWS account owner",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListTagsForResource.html",
      "description": "This action lists tags for an Amazon CloudWatch resource.",
      "accessLevel": "List",
      "resourceTypes": {
        "alarm": {
          "required": false
        },
        "insight-rule": {
          "required": false
        }
      }
    },
    "PutAnomalyDetector": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutAnomalyDetector.html",
      "description": "Creates or updates an anomaly detection model for a CloudWatch metric.",
      "accessLevel": "Write"
    },
    "PutDashboard": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutDashboard.html",
      "description": "Creates a CloudWatch dashboard, or updates an existing dashboard if it already exists",
      "accessLevel": "Write",
      "resourceTypes": {
        "dashboard": {
          "required": true
        }
      }
    },
    "PutInsightRule": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutInsightRule.html",
      "description": "Grants permission to create a new insight rule or replace an existing insight rule.",
      "accessLevel": "Write",
      "resourceTypes": {
        "insight-rule": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "PutMetricAlarm": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html",
      "description": "Creates or updates an alarm and associates it with the specified Amazon CloudWatch metric",
      "accessLevel": "Write",
      "resourceTypes": {
        "alarm": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "PutMetricData": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html",
      "description": "Publishes metric data points to Amazon CloudWatch",
      "accessLevel": "Write",
      "conditions": [
        "cloudwatch:namespace"
      ]
    },
    "SetAlarmState": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_SetAlarmState.html",
      "description": "Temporarily sets the state of an alarm for testing purposes",
      "accessLevel": "Write",
      "resourceTypes": {
        "alarm": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html",
      "description": "This action tags an Amazon CloudWatch resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "alarm": {
          "required": false
        },
        "insight-rule": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html",
      "description": "This action removes a tag from an Amazon CloudWatch resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "alarm": {
          "required": false
        },
        "insight-rule": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    }
  };
  public resourceTypes: ResourceTypes = {
    "alarm": {
      "name": "alarm",
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html",
      "arn": "arn:${Partition}:cloudwatch:${Region}:${Account}:alarm:${AlarmName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "dashboard": {
      "name": "dashboard",
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html",
      "arn": "arn:${Partition}:cloudwatch::${Account}:dashboard/${DashboardName}",
      "conditionKeys": []
    },
    "insight-rule": {
      "name": "insight-rule",
      "url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html",
      "arn": "arn:${Partition}:cloudwatch:${Region}:${Account}:insight-rule/${InsightRuleName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Action provider for service cloudwatch
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Deletes all specified alarms. In the event of an error, no alarms are deleted
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteAlarms.html
   */
  public deleteAlarms() {
    this.add('cloudwatch:DeleteAlarms');
    return this;
  }

  /**
   * Deletes the specified anomaly detection model from your account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteAnomalyDetector.html
   */
  public deleteAnomalyDetector() {
    this.add('cloudwatch:DeleteAnomalyDetector');
    return this;
  }

  /**
   * Deletes all CloudWatch dashboards that you specify
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteDashboards.html
   */
  public deleteDashboards() {
    this.add('cloudwatch:DeleteDashboards');
    return this;
  }

  /**
   * Grants permission to delete a collection of insight rules.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DeleteInsightRules.html
   */
  public deleteInsightRules() {
    this.add('cloudwatch:DeleteInsightRules');
    return this;
  }

  /**
   * Retrieves history for the specified alarm
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html
   */
  public describeAlarmHistory() {
    this.add('cloudwatch:DescribeAlarmHistory');
    return this;
  }

  /**
   * Retrieves alarms with the specified names
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarms.html
   */
  public describeAlarms() {
    this.add('cloudwatch:DescribeAlarms');
    return this;
  }

  /**
   * Retrieves all alarms for a single metric
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmsForMetric.html
   */
  public describeAlarmsForMetric() {
    this.add('cloudwatch:DescribeAlarmsForMetric');
    return this;
  }

  /**
   * Lists the anomaly detection models that you have created in your account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAnomalyDetectors.html
   */
  public describeAnomalyDetectors() {
    this.add('cloudwatch:DescribeAnomalyDetectors');
    return this;
  }

  /**
   * Grants permission to describe all insight rules, currently owned by the user's account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html
   */
  public describeInsightRules() {
    this.add('cloudwatch:DescribeInsightRules');
    return this;
  }

  /**
   * Disables actions for the specified alarms
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DisableAlarmActions.html
   */
  public disableAlarmActions() {
    this.add('cloudwatch:DisableAlarmActions');
    return this;
  }

  /**
   * Grants permission to disable a collection of insight rules.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DisableInsightRules.html
   */
  public disableInsightRules() {
    this.add('cloudwatch:DisableInsightRules');
    return this;
  }

  /**
   * Enables actions for the specified alarms
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_EnableAlarmActions.html
   */
  public enableAlarmActions() {
    this.add('cloudwatch:EnableAlarmActions');
    return this;
  }

  /**
   * Grants permission to enable a collection of insight rules.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_EnableInsightRules.html
   */
  public enableInsightRules() {
    this.add('cloudwatch:EnableInsightRules');
    return this;
  }

  /**
   * Displays the details of the CloudWatch dashboard you specify
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetDashboard.html
   */
  public getDashboard() {
    this.add('cloudwatch:GetDashboard');
    return this;
  }

  /**
   * Grants permission to return the top-N report of unique contributors over a time range for a given insight rule.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html
   */
  public getInsightRuleReport() {
    this.add('cloudwatch:GetInsightRuleReport');
    return this;
  }

  /**
   * Required to retrieve batch amounts of CloudWatch metric data and perform metric math on retrieved data
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html
   */
  public getMetricData() {
    this.add('cloudwatch:GetMetricData');
    return this;
  }

  /**
   * Gets statistics for the specified metric
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html
   */
  public getMetricStatistics() {
    this.add('cloudwatch:GetMetricStatistics');
    return this;
  }

  /**
   * Required to retrieve snapshots of metric widgets
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricWidgetImage.html
   */
  public getMetricWidgetImage() {
    this.add('cloudwatch:GetMetricWidgetImage');
    return this;
  }

  /**
   * Returns a list of all CloudWatch dashboards in your account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListDashboards.html
   */
  public listDashboards() {
    this.add('cloudwatch:ListDashboards');
    return this;
  }

  /**
   * Returns a list of valid metrics stored for the AWS account owner
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html
   */
  public listMetrics() {
    this.add('cloudwatch:ListMetrics');
    return this;
  }

  /**
   * This action lists tags for an Amazon CloudWatch resource.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('cloudwatch:ListTagsForResource');
    return this;
  }

  /**
   * Creates or updates an anomaly detection model for a CloudWatch metric.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutAnomalyDetector.html
   */
  public putAnomalyDetector() {
    this.add('cloudwatch:PutAnomalyDetector');
    return this;
  }

  /**
   * Creates a CloudWatch dashboard, or updates an existing dashboard if it already exists
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutDashboard.html
   */
  public putDashboard() {
    this.add('cloudwatch:PutDashboard');
    return this;
  }

  /**
   * Grants permission to create a new insight rule or replace an existing insight rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutInsightRule.html
   */
  public putInsightRule() {
    this.add('cloudwatch:PutInsightRule');
    return this;
  }

  /**
   * Creates or updates an alarm and associates it with the specified Amazon CloudWatch metric
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html
   */
  public putMetricAlarm() {
    this.add('cloudwatch:PutMetricAlarm');
    return this;
  }

  /**
   * Publishes metric data points to Amazon CloudWatch
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html
   */
  public putMetricData() {
    this.add('cloudwatch:PutMetricData');
    return this;
  }

  /**
   * Temporarily sets the state of an alarm for testing purposes
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_SetAlarmState.html
   */
  public setAlarmState() {
    this.add('cloudwatch:SetAlarmState');
    return this;
  }

  /**
   * This action tags an Amazon CloudWatch resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html
   */
  public tagResource() {
    this.add('cloudwatch:TagResource');
    return this;
  }

  /**
   * This action removes a tag from an Amazon CloudWatch resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html
   */
  public untagResource() {
    this.add('cloudwatch:UntagResource');
    return this;
  }

  /**
   * Adds a resource of type alarm to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param alarmName - Identifier for the alarmName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onAlarm(alarmName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudwatch:${Region}:${Account}:alarm:${AlarmName}';
    arn = arn.replace('${AlarmName}', alarmName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type dashboard to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param dashboardName - Identifier for the dashboardName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onDashboard(dashboardName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudwatch::${Account}:dashboard/${DashboardName}';
    arn = arn.replace('${DashboardName}', dashboardName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type insight-rule to the statement
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/auth-and-access-control-cw.html
   *
   * @param insightRuleName - Identifier for the insightRuleName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible condition keys:
   *  - aws:ResourceTag/${TagKey}
   */
  public onInsightRule(insightRuleName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:cloudwatch:${Region}:${Account}:insight-rule/${InsightRuleName}';
    arn = arn.replace('${InsightRuleName}', insightRuleName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Filters actions based on the presence of optional namespace values
   *
   * https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-namespace.html
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifNamespace(value: string | string[], operator?: string) {
    return this.if(`cloudwatch:namespace`, value, operator || 'StringLike');
  }
}
