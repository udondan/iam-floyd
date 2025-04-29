import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';

/**
 * Statement provider for service [opensearch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearch.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Opensearch extends PolicyStatement {
  public servicePrefix = 'opensearch';

  /**
   * Statement provider for service [opensearch](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonopensearch.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to access OpenSearch Application
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/
   */
  public toApplicationAccessAll() {
    return this.to('ApplicationAccessAll');
  }

  /**
   * Grants permission to cancel the query that is submitted on the OpenSearch DataSource resource
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_CancelDirectQuery.html
   */
  public toCancelDirectQuery() {
    return this.to('CancelDirectQuery');
  }

  /**
   * Grants permission to get the query status that are performed on the OpenSearch DataSource resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetDirectQuery.html
   */
  public toGetDirectQuery() {
    return this.to('GetDirectQuery');
  }

  /**
   * Grants permission to get the results of a query that is performed on the OpenSearch DataSource resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_GetDirectQueryResult.html
   */
  public toGetDirectQueryResult() {
    return this.to('GetDirectQueryResult');
  }

  /**
   * Grants permission to start a direct query on the provided OpenSearch DataSource arns
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_StartDirectQuery.html
   */
  public toStartDirectQuery() {
    return this.to('StartDirectQuery');
  }

  protected accessLevelList: AccessLevelList = {
    'Permissions management': [
      'ApplicationAccessAll'
    ],
    Write: [
      'CancelDirectQuery',
      'StartDirectQuery'
    ],
    Read: [
      'GetDirectQuery',
      'GetDirectQueryResult'
    ]
  };

  /**
   * Adds a resource of type application to the statement
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ac.html
   *
   * @param appId - Identifier for the appId.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onApplication(appId: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:opensearch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:application/${ appId }`);
  }

  /**
   * Adds a resource of type datasource to the statement
   *
   * https://docs.aws.amazon.com/opensearch-service/latest/developerguide/datasource.html
   *
   * @param dataSourceName - Identifier for the dataSourceName.
   * @param account - Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.
   * @param region - Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.
   */
  public onDatasource(dataSourceName: string, account?: string, region?: string, partition?: string) {
    return this.on(`arn:${ partition ?? this.defaultPartition }:opensearch:${ region ?? this.defaultRegion }:${ account ?? this.defaultAccount }:datasource/${ dataSourceName }`);
  }
}
