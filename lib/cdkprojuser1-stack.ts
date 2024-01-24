import * as cdk from 'aws-cdk-lib';
import { Bucket } from "aws-cdk-lib/aws-s3";

import { Construct } from 'constructs';
import { LogStorageBucket } from './constructs/logstoragebucket';

export class Cdkprojuser1Stack extends cdk.Stack {

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {

    super(scope, id, props);
    // const ls = new LogStorageBucket(this, 'MyProjectLogs');
    
   const buck =  new Bucket(this, "mybucketUser1" , {
      lifecycleRules : [
        {
          expiration : cdk.Duration.days(2)
        },
        {
          objectSizeGreaterThan: 128,
          expiration : cdk.Duration.days(3)
          
        }
      ]
  });

    new cdk.CfnOutput(this, 'BucketId', {
      value: buck.bucketName
    })

  }
}
