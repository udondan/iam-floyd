import {
  GetPolicyCommand,
  GetPolicyVersionCommand,
  IAMClient,
  IAMClientConfig,
  ListPoliciesCommand,
  ListPoliciesRequest,
  Policy,
} from '@aws-sdk/client-iam';
import * as fs from 'fs';
import { EnumDeclaration, Project, QuoteKind, SourceFile } from 'ts-morph';

import { camelCase } from '.';

class ManagedPolicies {
  private file: SourceFile;
  private collection: EnumDeclaration;

  constructor() {
    const project = new Project();
    project.manipulationSettings.set({
      quoteKind: QuoteKind.Single,
    });

    this.file = project.createSourceFile(
      'lib/generated/aws-managed-policies.ts',
      '',
      {
        overwrite: true,
      },
    );

    this.collection = this.file.addEnum({
      isExported: true,
      name: 'AwsManagedPolicies',
    });

    this.collection.addJsDoc({
      description: 'Provides names of all AWS managed policies.',
    });
  }

  public save() {
    this.file.saveSync();
  }

  public add(name: string, value: string, description: string) {
    this.collection
      .addMember({
        name,
        value: value.replace(/^arn:aws:iam::aws:policy\//, ''),
      })
      .addJsDoc({
        description,
      });
  }
}

const clientConfig: IAMClientConfig = {
  region: 'us-east-1',
};
if (
  process.env.AWS_ACCESS_KEY_ID &&
  process.env.AWS_SECRET_ACCESS_KEY &&
  process.env.AWS_SESSION_TOKEN
) {
  clientConfig.credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN,
  };
}

const iamClient = new IAMClient(clientConfig);

export async function indexManagedPolicies(): Promise<void> {
  console.log('starting');
  const managedPolicies = new ManagedPolicies();
  const policyNames: string[] = [];
  const policies = await getPolicies();
  console.log(`Fetched metadata of ${policies.length} managed policies`);
  for (const policyMetadata of policies) {
    if (
      policyMetadata.PolicyName &&
      policyMetadata.Arn &&
      policyMetadata.DefaultVersionId
    ) {
      const description = await getIAMPolicyDescription(policyMetadata.Arn);
      managedPolicies.add(
        camelCase(policyMetadata.PolicyName),
        policyMetadata.Arn,
        description!,
      );
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
  managedPolicies.save();
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

async function getIAMPolicyDescription(policyArn) {
  const response = await iamClient.send(
    new GetPolicyCommand({ PolicyArn: policyArn }),
  );
  return response.Policy!.Description;
}

function storePolicyDocument(name: string, document: string) {
  const path = `${__dirname}/../../docs/source/_static/managed-policies/${name}.json`;

  // formatting the document, so we do not permanently get re-formatting changes from the source
  document = JSON.stringify(JSON.parse(document), null, 2);

  try {
    fs.writeFileSync(path, document);
  } catch (err) {
    console.error(err);
  }
}

function storePolicyIndex(names: string[]) {
  const path = `${__dirname}/../../docs/source/_static/managed-policies/index.json`;
  try {
    fs.writeFileSync(path, JSON.stringify(names));
  } catch (err) {
    console.error(err);
  }
}
