#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Cdkprojuser1Stack } from '../lib/cdkprojuser1-stack';

const app = new cdk.App();
//const myenv = {account: '008239258920', region: 'us-east-1'}

new Cdkprojuser1Stack(app, 'Cdkprojuser1Stack', {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    }
});

