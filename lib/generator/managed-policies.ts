import {
  GetPolicyVersionCommand,
  IAMClient,
  ListPoliciesCommand,
  ListPoliciesRequest,
  Policy,
} from '@aws-sdk/client-iam';
import * as fs from 'fs';

const iamClient = new IAMClient({
  region: 'us-east-1',
});

export async function indexManagedPolicies(): Promise<void> {
  console.log('starting');
  const policyNames: string[] = [];
  const policies = await getPolicies();
  console.log(`Fetched metadata of ${policies.length} managed policies`);
  for (const policyMetadata of policies) {
    if (
      policyMetadata.PolicyName &&
      policyMetadata.Arn &&
      policyMetadata.DefaultVersionId
    ) {
      policyNames.push(policyMetadata.PolicyName);
      console.log(`Fetching policy document ${policyMetadata.PolicyName}`);
      const document = await getPolicyDocument(
        policyMetadata.Arn,
        policyMetadata.DefaultVersionId,
      );
      storePolicyDocument(policyMetadata.PolicyName, document);
    }
  }
  storePolicyIndex(policyNames);
}

async function getPolicies(marker?: string): Promise<Policy[]> {
  const results: Policy[] = [];
  const params: ListPoliciesRequest = {
    Scope: 'AWS',
    Marker: marker,
    MaxItems: 100,
  };
  console.log('Fetching metadata of 100 policies...');
  while (true) {
    const { Policies, IsTruncated, Marker } = await iamClient.send(
      new ListPoliciesCommand(params),
    );

    if (Policies) {
      results.push(...Policies);
    }

    if (!IsTruncated) {
      break;
    }

    params.Marker = Marker;
  }
  return results;
}

async function getPolicyDocument(
  arn: string,
  version: string,
): Promise<string> {
  const params = {
    PolicyArn: arn,
    VersionId: version,
  };

  const { PolicyVersion } = await iamClient.send(
    new GetPolicyVersionCommand(params),
  );

  if (PolicyVersion?.Document) {
    return decodeURIComponent(PolicyVersion.Document);
  } else {
    throw new Error(`Could not find policy document for ${arn}`);
  }
}

function storePolicyDocument(name: string, document: string) {
  const path = `${__dirname}/../../docs/source/_static/managed-policies/${name}.json`;

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
