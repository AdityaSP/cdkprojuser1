import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import * as cdk from 'aws-cdk-lib';


export class LogStorageBucket extends Construct {
    constructor(scope: Construct, id: string) {
      super(scope, id)
      new Bucket(this, id, {
        lifecycleRules: [
          {
            expiration: cdk.Duration.days(180)
          }
        ]
      });
  
    }
  }
  