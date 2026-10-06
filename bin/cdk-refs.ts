#!/usr/bin/env node
import { updateCdkRefs } from '../lib/generator/cdk-refs';

// Sets the reference interfaces of aws-cdk-lib in the service models, which the `on*()` methods
// of the CDK variant accept
updateCdkRefs();
