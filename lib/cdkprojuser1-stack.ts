import * as cdk from 'aws-cdk-lib';
import { Bucket } from "aws-cdk-lib/aws-s3";

import { Construct } from 'constructs';
import { LogStorageBucket } from './constructs/logstoragebucket';

export class Cdkprojuser1Stack extends cdk.Stack {

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {

    super(scope, id, props);
    // const ls = new LogStorageBucket(this, 'MyProjectLogs');
    
    const maxObjSizeParam = new cdk.CfnParameter(this, 'maxObjSize',{
      default : 1024,
      minValue : 512,
      maxValue : 2048,
      type: 'Number'
    }) 

   const buck =  new Bucket(this, "mybucketUser1_2" , {
      lifecycleRules : [
        {
          expiration : cdk.Duration.days(180)
        },
        {
          objectSizeGreaterThan: maxObjSizeParam.valueAsNumber,
          expiration : cdk.Duration.days(3)
          
        }
      ]
  });

    new cdk.CfnOutput(this, 'BucketNameOfmybucketUser1', {
      value: buck.bucketName
    })

  }
}
