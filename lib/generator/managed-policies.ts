import * as IAM from 'aws-sdk/clients/iam';
import * as fs from 'fs';

const iam = new IAM();

export function indexManagedPolicies(): Promise<void> {
  console.log('starting');
  return new Promise(async (resolve, reject) => {
    const policyNames: string[] = [];
    const policies = await getPolicies();
    console.log(`Fetched metadata of ${policies.length} managed policies`);
    for (let policyMetadata of policies) {
      policyNames.push(policyMetadata.PolicyName!);
      console.log(`Fetching policy document ${policyMetadata.PolicyName}`);
      const document = await getPolicyDocument(
        policyMetadata.Arn!,
        policyMetadata.DefaultVersionId!
      );
      storePolicyDocument(policyMetadata.PolicyName!, document);
    }
    storePolicyIndex(policyNames);
    resolve();
  });
}

function getPolicies(marker?: string): Promise<IAM.policyListType> {
  const results: IAM.policyListType = [];
  const params: IAM.ListPoliciesRequest = {
    Scope: 'AWS',
    Marker: marker,
    MaxItems: 100,
  };
  console.log('Fetching metadata of 100 policies...');
  return new Promise((resolve, reject) => {
    iam.listPolicies(params, async function (err, data) {
      if (err) return reject(err);

      results.push(...data.Policies!);
      if (data.IsTruncated) {
        await getPolicies(data.Marker).then((policies) => {
          results.push(...policies);
        });
      }
      resolve(results);
    });
  });
}

function getPolicyDocument(arn: string, version: string): Promise<string> {
  return new Promise((resolve, reject) => {
    var params = {
      PolicyArn: arn,
      VersionId: version,
    };

    iam.getPolicyVersion(params, function (err, data) {
      if (err) return reject(err);
      resolve(data.PolicyVersion?.Document!);
    });
  });
}

function storePolicyDocument(name: string, document: string) {
  const path = `${__dirname}/../../docs/source/_static/managed-policies/${name}.json`;
  document = decodeURIComponent(document);

  // formatting the document, so we do not permanently get re-formatting changes from the source
  document = JSON.stringify(JSON.parse(document), null, 2);

  try {
    fs.writeFileSync(path, document);
  } catch (err: any) {
    console.error(err);
  }
}

function storePolicyIndex(names: string[]) {
  const path = `${__dirname}/../../docs/source/_static/managed-policies/index.json`;
  try {
    fs.writeFileSync(path, JSON.stringify(names));
  } catch (err: any) {
    console.error(err);
  }
}
