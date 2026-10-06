/**
 * Prints the AWS managed policies of iam-floyd as JSON: the names of the static properties and their values
 */
import { AwsManagedPolicy } from '../../../lib/generated/aws-managed-policies/iam-floyd';

console.log(
  JSON.stringify(Object.fromEntries(Object.entries(AwsManagedPolicy))),
);
