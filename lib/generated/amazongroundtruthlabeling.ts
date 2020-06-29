import { Actions, PolicyStatement, ResourceTypes } from "../shared";
import { PolicyStatementProps } from "@aws-cdk/aws-iam";

/**
 * Action provider for service groundtruthlabeling
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongroundtruthlabeling.html
 */
export class Groundtruthlabeling extends PolicyStatement {
  public servicePrefix = 'groundtruthlabeling';
  public actions: Actions = {
    "DescribeConsoleJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file",
      "description": "Get status of GroundTruthLabeling Jobs.",
      "accessLevel": "Read"
    },
    "ListDatasetObjects": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file",
      "description": "Paginated list API to list dataset objects in a manifest file.",
      "accessLevel": "Read"
    },
    "RunFilterOrSampleDatasetJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-data-filtering",
      "description": "Filter records from a manifest file using S3 select. Get sample entries based on random sampling.",
      "accessLevel": "Write"
    },
    "RunGenerateManifestByCrawlingJob": {
      "url": "https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file",
      "description": "List a S3 prefix and create manifest files from objects in that location.",
      "accessLevel": "Write"
    }
  };
  public resourceTypes: ResourceTypes = {};

  /**
   * Action provider for service groundtruthlabeling
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongroundtruthlabeling.html
   */
  constructor (props?: PolicyStatementProps) {
    super(props);
  }

  /**
   * Get status of GroundTruthLabeling Jobs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public describeConsoleJob() {
    this.add('groundtruthlabeling:DescribeConsoleJob');
    return this;
  }

  /**
   * Paginated list API to list dataset objects in a manifest file.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public listDatasetObjects() {
    this.add('groundtruthlabeling:ListDatasetObjects');
    return this;
  }

  /**
   * Filter records from a manifest file using S3 select. Get sample entries based on random sampling.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-data-filtering
   */
  public runFilterOrSampleDatasetJob() {
    this.add('groundtruthlabeling:RunFilterOrSampleDatasetJob');
    return this;
  }

  /**
   * List a S3 prefix and create manifest files from objects in that location.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data-input.html#sms-console-create-manifest-file
   */
  public runGenerateManifestByCrawlingJob() {
    this.add('groundtruthlabeling:RunGenerateManifestByCrawlingJob');
    return this;
  }
}
