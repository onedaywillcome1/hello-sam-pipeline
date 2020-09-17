#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HelloSamPipelineStack } from '../lib/hello-sam-pipeline-stack';

const app = new cdk.App();
new HelloSamPipelineStack(app, 'HelloSamPipelineStack-test' );
