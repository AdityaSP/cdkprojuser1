import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LogStorageBucket } from './constructs/logstoragebucket';

export class Cdkprojuser1Stack extends cdk.Stack {

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {

    super(scope, id, props);
    new LogStorageBucket(this, 'MyProjectLogs');

  }
}
