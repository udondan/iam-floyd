#!/usr/bin/env node
import { App } from 'aws-cdk-lib';

import { Stack } from '../lib';

const app = new App();
new Stack(app, 'FloydTwitterIntegration', {
  env: {
    region: 'us-east-1',
  },
});
