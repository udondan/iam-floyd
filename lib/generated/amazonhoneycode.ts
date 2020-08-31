import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [honeycode](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonhoneycode.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Honeycode extends PolicyStatement {
  public servicePrefix = 'honeycode';
  protected actionList: Actions = {
    "ApproveTeamAssociation": {
      "url": "https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#approve-team-association",
      "description": "Grants permission to approve a team association request for your AWS Account",
      "accessLevel": "Write"
    },
    "GetScreenData": {
      "url": "https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_GetScreenData.html",
      "description": "Grants permission to load the data from a screen",
      "accessLevel": "Read",
      "resourceTypes": {
        "screen": {
          "required": true
        }
      }
    },
    "InvokeScreenAutomation": {
      "url": "https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_InvokeScreenAutomation.html",
      "description": "Grants permission to invoke a screen automation",
      "accessLevel": "Write",
      "resourceTypes": {
        "screen-automation": {
          "required": true
        }
      }
    },
    "ListTeamAssociations": {
      "url": "https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#list-team-associations",
      "description": "Grants permission to list all pending and approved team associations with your AWS Account",
      "accessLevel": "List"
    },
    "RejectTeamAssociation": {
      "url": "https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#reject-team-association",
      "description": "Grants permission to reject a team association request for your AWS Account",
      "accessLevel": "Write"
    }
  };
  protected resourceTypes: ResourceTypes = {
    "screen": {
      "name": "screen",
      "url": "https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-screen.html",
      "arn": "arn:${Partition}:honeycode:${Region}:${Account}:screen:workbook/${WorkbookId}/app/${AppId}/screen/${ScreenId}",
      "conditionKeys": []
    },
    "screen-automation": {
      "name": "screen-automation",
      "url": "https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-screen-automation.html",
      "arn": "arn:${Partition}:honeycode:${Region}:${Account}:screen-automation:workbook/${WorkbookId}/app/${AppId}/screen/${ScreenId}/automation/${AutomationId}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [honeycode](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonhoneycode.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to approve a team association request for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#approve-team-association
   */
  public toApproveTeamAssociation() {
    this.add('honeycode:ApproveTeamAssociation');
    return this;
  }

  /**
   * Grants permission to load the data from a screen
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_GetScreenData.html
   */
  public toGetScreenData() {
    this.add('honeycode:GetScreenData');
    return this;
  }

  /**
   * Grants permission to invoke a screen automation
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/API_InvokeScreenAutomation.html
   */
  public toInvokeScreenAutomation() {
    this.add('honeycode:InvokeScreenAutomation');
    return this;
  }

  /**
   * Grants permission to list all pending and approved team associations with your AWS Account
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#list-team-associations
   */
  public toListTeamAssociations() {
    this.add('honeycode:ListTeamAssociations');
    return this;
  }

  /**
   * Grants permission to reject a team association request for your AWS Account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/team-association.html#reject-team-association
   */
  public toRejectTeamAssociation() {
    this.add('honeycode:RejectTeamAssociation');
    return this;
  }

  /**
   * Adds a resource of type screen to the statement
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-screen.html
   *
   * @param workbookId - Identifier for the workbookId.
   * @param appId - Identifier for the appId.
   * @param screenId - Identifier for the screenId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onScreen(workbookId: string, appId: string, screenId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:honeycode:${Region}:${Account}:screen:workbook/${WorkbookId}/app/${AppId}/screen/${ScreenId}';
    arn = arn.replace('${WorkbookId}', workbookId);
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${ScreenId}', screenId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type screen-automation to the statement
   *
   * https://docs.aws.amazon.com/honeycode/latest/UserGuide/resource-screen-automation.html
   *
   * @param workbookId - Identifier for the workbookId.
   * @param appId - Identifier for the appId.
   * @param screenId - Identifier for the screenId.
   * @param automationId - Identifier for the automationId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onScreenAutomation(workbookId: string, appId: string, screenId: string, automationId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:honeycode:${Region}:${Account}:screen-automation:workbook/${WorkbookId}/app/${AppId}/screen/${ScreenId}/automation/${AutomationId}';
    arn = arn.replace('${WorkbookId}', workbookId);
    arn = arn.replace('${AppId}', appId);
    arn = arn.replace('${ScreenId}', screenId);
    arn = arn.replace('${AutomationId}', automationId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
