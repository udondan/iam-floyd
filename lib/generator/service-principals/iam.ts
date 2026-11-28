import {
  CreateRoleCommand,
  DeleteRoleCommand,
  IAMClient,
  IAMClientConfig,
} from '@aws-sdk/client-iam';

// the role that is created to check the principals, deleted right after
const testRoleName = 'iam-floyd-service-principal-check';

// the maximum size of a trust policy is 2048 characters, without whitespace
const maxTrustPolicySize = 2000;

function iamClient(): IAMClient {
  const config: IAMClientConfig = { region: 'us-east-1' };
  if (
    process.env.AWS_ACCESS_KEY_ID &&
    process.env.AWS_SECRET_ACCESS_KEY &&
    process.env.AWS_SESSION_TOKEN
  ) {
    config.credentials = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      sessionToken: process.env.AWS_SESSION_TOKEN,
    };
  }
  return new IAMClient(config);
}

function trustPolicy(principals: string[]): string {
  return JSON.stringify({
    Version: '2012-10-17',
    Statement: [
      {
        Effect: 'Allow',
        Principal: { Service: principals },
        Action: 'sts:AssumeRole',
      },
    ],
  });
}

/**
 * Finds the principals that IAM rejects, by creating a role with them in the trust policy. IAM
 * names only the first invalid principal, which is removed before the next try.
 */
export async function findInvalid(candidates: string[]): Promise<Set<string>> {
  const client = iamClient();
  const invalid = new Set<string>();
  const batches: string[][] = [[]];
  for (const principal of candidates.sort()) {
    const batch = batches[batches.length - 1];
    if (
      batch.length &&
      trustPolicy([...batch, principal]).length > maxTrustPolicySize
    ) {
      batches.push([principal]);
    } else {
      batch.push(principal);
    }
  }
  console.log(
    `Checking ${candidates.length} service principals in ${batches.length} batches`,
  );
  for (let batch of batches) {
    while (batch.length) {
      const rejected = await createTestRole(client, batch);
      if (rejected === undefined) {
        break;
      }
      invalid.add(rejected);
      batch = batch.filter((principal) => principal !== rejected);
    }
  }
  console.log(`IAM rejects ${invalid.size} service principals`);
  return invalid;
}

/**
 * Creates and deletes the test role. Returns the principal IAM rejects, if any.
 */
async function createTestRole(
  client: IAMClient,
  principals: string[],
): Promise<string | undefined> {
  try {
    await client.send(
      new CreateRoleCommand({
        RoleName: testRoleName,
        AssumeRolePolicyDocument: trustPolicy(principals),
      }),
    );
  } catch (err) {
    if (!(err instanceof Error)) {
      throw err;
    }
    if (err.name === 'EntityAlreadyExistsException') {
      // left over from an earlier run
      await client.send(new DeleteRoleCommand({ RoleName: testRoleName }));
      return createTestRole(client, principals);
    }
    const match = /Invalid principal in policy: "SERVICE":"([^"]+)"/.exec(
      err.message,
    );
    if (err.name === 'MalformedPolicyDocumentException' && match) {
      return match[1];
    }
    throw err;
  }
  await client.send(new DeleteRoleCommand({ RoleName: testRoleName }));
  return undefined;
}
