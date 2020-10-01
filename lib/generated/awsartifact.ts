import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [artifact](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsartifact.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Artifact extends PolicyStatement {
  public servicePrefix = 'artifact';
  protected actionList: Actions = {
    "AcceptAgreement": {
      "url": "https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html",
      "description": "Grants permission to accept an AWS agreement that has not yet been accepted by the customer account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "agreement": {
          "required": true
        }
      }
    },
    "DownloadAgreement": {
      "url": "https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html",
      "description": "Grants permission to download an AWS agreement that has not yet been accepted or a customer agreement that has been accepted by the customer account.",
      "accessLevel": "Read",
      "resourceTypes": {
        "agreement": {
          "required": false
        },
        "customer-agreement": {
          "required": false
        }
      }
    },
    "Get": {
      "url": "https://docs.aws.amazon.com/artifact/latest/ug/getting-started.html",
      "description": "Grants permission to download an AWS compliance report package.",
      "accessLevel": "Read",
      "resourceTypes": {
        "report-package": {
          "required": true
        }
      }
    },
    "TerminateAgreement": {
      "url": "https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html",
      "description": "Grants permission to terminate a customer agreement that was previously accepted by the customer account.",
      "accessLevel": "Write",
      "resourceTypes": {
        "customer-agreement": {
          "required": true
        }
      }
    }
  };
  protected resourceTypes: ResourceTypes = {
    "report-package": {
      "name": "report-package",
      "url": "https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html",
      "arn": "arn:${Partition}:artifact:::report-package/${ResourceName}",
      "conditionKeys": []
    },
    "customer-agreement": {
      "name": "customer-agreement",
      "url": "https://docs.aws.amazon.com/artifact/latest/ug/$managingagreements.html",
      "arn": "arn:${Partition}:artifact::${Account}:customer-agreement/${ResourceName}",
      "conditionKeys": []
    },
    "agreement": {
      "name": "agreement",
      "url": "https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html",
      "arn": "arn:${Partition}:artifact:::agreement/${ResourceName}",
      "conditionKeys": []
    }
  };

  /**
   * Statement provider for service [artifact](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsartifact.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to accept an AWS agreement that has not yet been accepted by the customer account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html
   */
  public toAcceptAgreement() {
    this.to('artifact:AcceptAgreement');
    return this;
  }

  /**
   * Grants permission to download an AWS agreement that has not yet been accepted or a customer agreement that has been accepted by the customer account.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html
   */
  public toDownloadAgreement() {
    this.to('artifact:DownloadAgreement');
    return this;
  }

  /**
   * Grants permission to download an AWS compliance report package.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/getting-started.html
   */
  public toGet() {
    this.to('artifact:Get');
    return this;
  }

  /**
   * Grants permission to terminate a customer agreement that was previously accepted by the customer account.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html
   */
  public toTerminateAgreement() {
    this.to('artifact:TerminateAgreement');
    return this;
  }

  /**
   * Adds a resource of type report-package to the statement
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onReportPackage(resourceName: string, partition?: string) {
    var arn = 'arn:${Partition}:artifact:::report-package/${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type customer-agreement to the statement
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/$managingagreements.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onCustomerAgreement(resourceName: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:artifact::${Account}:customer-agreement/${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type agreement to the statement
   *
   * https://docs.aws.amazon.com/artifact/latest/ug/managingagreements.html
   *
   * @param resourceName - Identifier for the resourceName.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onAgreement(resourceName: string, partition?: string) {
    var arn = 'arn:${Partition}:artifact:::agreement/${ResourceName}';
    arn = arn.replace('${ResourceName}', resourceName);
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
