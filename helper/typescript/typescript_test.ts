//import * as cdk from 'aws-cdk-lib';
//import iam = require('aws-cdk-lib/aws-iam');
import AWS = require('aws-sdk');
import crypto = require('crypto');

//import { Construct } from 'constructs';
const ciam = new AWS.IAM();
const cs3 = new AWS.S3();

export function out(statements: any[]) {
  statements.forEach((statement) => {
    const str = JSON.stringify(statement.toJSON(), null, 4);
    console.log(str);
  });
}

export async function deploy(statements: any[], type = 'policy') {
  try {
    if (type == 'policy') {
      await deployPolicy(statements);
    } else if (type == 'assume') {
      await deployAssume(statements);
    } else if (type == 'access') {
      await deployAccess(statements);
      // } else if (type == 'cdk') {
      //   deployCdk(statements);
    } else {
      throw new Error(`Unknown deploy type: ${type}`);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

function deployPolicy(statements: any[]): Promise<void> {
  return new Promise(async function (resolve, reject) {
    const policyName = newRandomName();

    log(`Creating test policy ${policyName}...`);

    const document = makePolicyDocument(statements);

    const params: AWS.IAM.CreatePolicyRequest = {
      PolicyName: policyName,
      PolicyDocument: document,
      Description: 'Testing policy creation',
    };
    ciam.createPolicy(params, (err, data) => {
      if (err) return reject(err);

      log(`Deleting test policy ${policyName}`);

      ciam.deletePolicy(
        {
          PolicyArn: data.Policy!.Arn!,
        },
        (err, _) => {
          if (err) return reject(err);
          resolve();
        }
      );
    });
  });
}

function deployAssume(statements: any[]): Promise<void> {
  return new Promise(async function (resolve, reject) {
    const roleName = newRandomName();

    log(`Creating test role ${roleName}...`);

    const document = makePolicyDocument(statements);

    const params: AWS.IAM.CreateRoleRequest = {
      RoleName: roleName,
      AssumeRolePolicyDocument: document,
      Description: 'Testing policy creation',
    };
    ciam.createRole(params, (err, data) => {
      if (err) return reject(err);

      log(`Deleting test role ${roleName}`);
      ciam.deleteRole(
        {
          RoleName: data.Role!.RoleName!,
        },
        (err, _) => {
          if (err) return reject(err);
          resolve();
        }
      );
    });
  });
}

function deployAccess(statements: any[]): Promise<void> {
  return new Promise(async function (resolve, reject) {
    const bucketName =
      'random-bucket-for-floyd-' + newRandomName().toLowerCase();

    log(`Creating test bucket ${bucketName}...`);

    const document = makePolicyDocument(statements);

    cs3.createBucket(
      {
        Bucket: bucketName,
      },
      (err, _) => {
        if (err) return reject(err);

        log('Attaching bucket policy...');

        cs3.putBucketPolicy(
          {
            Bucket: bucketName,
            Policy: document,
          },
          (err, _) => {
            if (err) return reject(err);
            log(`Deleting test bucket ${bucketName}`);

            cs3.deleteBucket({ Bucket: bucketName }, (err, _) => {
              if (err) return reject(err);
              resolve();
            });
          }
        );
      }
    );
  });
}
//
//interface StackProps extends cdk.StackProps {
//  statements: iam.PolicyStatement[];
//}
//
//class Stack extends cdk.Stack {
//  constructor(scope: Construct, id: string, props: StackProps) {
//    super(scope, id, props);
//    new iam.Policy(this, 'Policy', {
//      statements: props.statements,
//    });
//  }
//}
//
//function deployCdk(statements: iam.PolicyStatement[]) {
//  const app = new cdk.App();
//  new Stack(app, 'TestStack' + newRandomName(), {
//    statements: statements,
//  });
//  app.synth();
//}

function makePolicyDocument(statements: any[]) {
  const j = {
    Version: '2012-10-17',
    Statement: statements.map((s) => s.toJSON()),
  };

  return JSON.stringify(j, null, 4);
}

function newRandomName() {
  return crypto.randomBytes(10).toString('hex');
}

function log(msg: any) {
  console.error(msg);
}
