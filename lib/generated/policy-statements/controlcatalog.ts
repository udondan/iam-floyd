import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [controlcatalog](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscontrolcatalog.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Controlcatalog extends PolicyStatement {
  public servicePrefix = 'controlcatalog';

  /**
   * Statement provider for service [controlcatalog](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awscontrolcatalog.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to return details about a specific control
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_GetControl.html
   */
  public toGetControl() {
    return this.to('GetControl');
  }

  /**
   * Grants permission to return a paginated list of common controls from the AWS Control Catalog
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListCommonControls.html
   */
  public toListCommonControls() {
    return this.to('ListCommonControls');
  }

  /**
   * Grants permission to return a paginated list of all available controls in the AWS Control Catalog library
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListControls.html
   */
  public toListControls() {
    return this.to('ListControls');
  }

  /**
   * Grants permission to return a paginated list of domains from the AWS Control Catalog
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListDomains.html
   */
  public toListDomains() {
    return this.to('ListDomains');
  }

  /**
   * Grants permission to return a paginated list of objectives from the AWS Control Catalog
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListObjectives.html
   */
  public toListObjectives() {
    return this.to('ListObjectives');
  }

  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetControl'
    ],
    List: [
      'ListCommonControls',
      'ListControls',
      'ListDomains',
      'ListObjectives'
    ]
  };

  /**
   * Adds a resource of type common-control to the statement
   *
   * https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_CommonControlSummary.html
   *
   * @param commonControlId - Identifier for the commonControlId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onCommonControl(commonControlId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:controlcatalog:::common-control/${ commonControlId }`);
  }

  /**
   * Adds a resource of type control to the statement
   *
   * https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ControlSummary.html
   *
   * @param controlId - Identifier for the controlId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onControl(controlId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:controlcatalog:::control/${ controlId }`);
  }

  /**
   * Adds a resource of type domain to the statement
   *
   * https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_DomainSummary.html
   *
   * @param domainId - Identifier for the domainId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDomain(domainId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:controlcatalog:::domain/${ domainId }`);
  }

  /**
   * Adds a resource of type objective to the statement
   *
   * https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ObjectiveSummary.html
   *
   * @param objectiveId - Identifier for the objectiveId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onObjective(objectiveId: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:controlcatalog:::objective/${ objectiveId }`);
  }
}
