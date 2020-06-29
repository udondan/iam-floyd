import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service sumerian
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsumerian.html
 */
export class Sumerian extends PolicyStatement {
  public servicePrefix = 'sumerian';
  public actions: Actions = {
    "Login": {
      "url": "https://docs.aws.amazon.com/sumerian/latest/userguide/sumerian-permissions.html",
      "description": "Grant login access to the Sumerian console.",
      "accessLevel": "Write"
    },
    "ViewRelease": {
      "url": "https://docs.aws.amazon.com/sumerian/latest/userguide/sumerian-permissions.html",
      "description": "Grant access to view a project release.",
      "accessLevel": "Read",
      "resourceTypes": {
        "project": {
          "required": true
        }
      }
    }
  };
  public resourceTypes: ResourceTypes = {
    "project": {
      "name": "project",
      "url": "",
      "arn": "arn:${Partition}:sumerian:${Region}:${Account}:project:${ProjectName}",
      "conditionKeys": []
    }
  };

  /**
   * Action provider for service sumerian
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsumerian.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Grant login access to the Sumerian console.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sumerian/latest/userguide/sumerian-permissions.html
   */
  public login() {
    this.add('sumerian:Login');
    return this;
  }

  /**
   * Grant access to view a project release.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sumerian/latest/userguide/sumerian-permissions.html
   */
  public viewRelease() {
    this.add('sumerian:ViewRelease');
    return this;
  }

  /**
   * Adds a resource of type project to the statement
   *
   * @param projectName - Identifier for the projectName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onProject(projectName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:sumerian:${Region}:${Account}:project:${ProjectName}';
    arn = arn.replace('${ProjectName}', projectName);
    arn = arn.replace('${Account}', account || '');
    arn = arn.replace('${Region}', region || '');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
