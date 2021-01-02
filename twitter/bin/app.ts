#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';

import { Stack } from '../lib';

const app = new cdk.App();
new Stack(app, 'FloydTwitterIntegration');
