import { AccessLevelList } from "../shared/access-level";
import { PolicyStatement } from "../shared";

/**
 * Statement provider for service [ssm-incidents](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanager.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class SsmIncidents extends PolicyStatement {
  public servicePrefix = 'ssm-incidents';

  /**
   * Statement provider for service [ssm-incidents](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssystemsmanagerincidentmanager.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Grants permission to start a new incident using a response plan
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_StartIncident.html
   */
  public toStartIncident() {
    return this.to('StartIncident');
  }

  protected accessLevelList: AccessLevelList = {
    "Write": [
      "StartIncident"
    ]
  };

  /**
   * Adds a resource of type response-plan to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-ops-center.html
   *
   * @param responsePlan - Identifier for the responsePlan.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onResponsePlan(responsePlan: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm-incidents::${Account}:response-plan/${ResponsePlan}';
    arn = arn.replace('${ResponsePlan}', responsePlan);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type incident-record to the statement
   *
   * https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-ops-center.html
   *
   * @param responsePlan - Identifier for the responsePlan.
   * @param incidentRecord - Identifier for the incidentRecord.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onIncidentRecord(responsePlan: string, incidentRecord: string, account?: string, partition?: string) {
    var arn = 'arn:${Partition}:ssm-incidents::${Account}:incident-record/${ResponsePlan}/${IncidentRecord}';
    arn = arn.replace('${ResponsePlan}', responsePlan);
    arn = arn.replace('${IncidentRecord}', incidentRecord);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }
}
