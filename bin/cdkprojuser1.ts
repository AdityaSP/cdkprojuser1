#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Cdkprojuser1Stack } from '../lib/cdkprojuser1-stack';

const app = new cdk.App();
new Cdkprojuser1Stack(app, 'Cdkprojuser1Stack');
