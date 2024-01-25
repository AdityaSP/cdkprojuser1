import * as cdk from 'aws-cdk-lib';
import { Bucket } from "aws-cdk-lib/aws-s3";
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { LogStorageBucket } from './constructs/logstoragebucket';
import { KeyPair, Vpc } from 'aws-cdk-lib/aws-ec2';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import {getGenericSecret } from './scretstring';
import * as rds from 'aws-cdk-lib/aws-rds';
import { CfnOutcome } from 'aws-cdk-lib/aws-frauddetector';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';

export class Cdkprojuser1Stack extends cdk.Stack {

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {

    super(scope, id, props);

    const s3b = Bucket.fromBucketName(this, 'existingbucket', 'bucketfromparam')
    new s3deploy.BucketDeployment(this, 'deployfiles', {
      destinationBucket: s3b,
      sources: [s3deploy.Source.asset('./code')]
    })


//     const usernameInput = new cdk.CfnParameter(this, 'dbusername', {
//       minLength: 5,
//       maxLength: 10,
//       default: 'dbroot',
//       type: 'String'
//     })

// // Create a secret
//     const dbpassword = new secretsmanager.Secret(this, 'dbsecretId', {
//       secretName: 'dbcreds',
//       generateSecretString: getGenericSecret(usernameInput)
//     })

//     const existingDefaultVpc = Vpc.fromLookup(this, 'default', {
//       isDefault: true
//     })

//     const microinstance = ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO)
//     const engine = rds.DatabaseInstanceEngine.POSTGRES
//     const dbport = 5432
//     const secGroup = new ec2.SecurityGroup(this, 'secGroupForDB', {
//       vpc: existingDefaultVpc
//     });
    
//     secGroup.addIngressRule(
//       ec2.Peer.anyIpv4(), 
//       ec2.Port.tcp(dbport))

//     const createdDb = new rds.DatabaseInstance(this, 'mydb', {
//       engine: engine,
//       instanceType: microinstance,
//       vpc: existingDefaultVpc,
//       credentials: rds.Credentials.fromGeneratedSecret('dbcreds'),
//       port: dbport,
//       vpcSubnets: {subnetType: ec2.SubnetType.PUBLIC},
//       securityGroups: [secGroup],
//       removalPolicy: cdk.RemovalPolicy.DESTROY
//     })
  
//     new cdk.CfnOutput(this, 'dbid', {
//       value: createdDb.dbInstanceEndpointAddress
//     })

    // const v = secretsmanager.Secret.fromSecretNameV2(this, 'exsiting key', 'dbcreds')


    // const existingDefaultVpc = Vpc.fromLookup(this, 'default', {
    //   isDefault: true
    // })

    // const keypairname = new cdk.CfnParameter(this, 'keypairname', {
    //   type: 'String'
    // })

    // const existingKeyPair = KeyPair.fromKeyPairName(this, 'aditya-key-pair', keypairname.valueAsString);

    // const amazonLinuxImage = new ec2.AmazonLinuxImage();

    // const microinstance = ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO)

    // const myinstance = new ec2.Instance(this, 'MicroInstanceFromStack', {
      
    //   vpc: existingDefaultVpc,
    //   instanceType: microinstance,
    //   keyPair: existingKeyPair,
    //   machineImage: amazonLinuxImage
    // });

    // new cdk.CfnOutput(this, 'MyInstanceId', {
    //   value: myinstance.instanceId
    // });

    // new cdk.CfnOutput(this, 'DefaultVPCId', {
    //   value: existingDefaultVpc.vpcId
    // })



    // const ls = new LogStorageBucket(this, 'MyProjectLogs');

    
  //   const maxObjSizeParam = new cdk.CfnParameter(this, 'maxObjSize',{
  //     default : 1024,
  //     minValue : 512,
  //     maxValue : 2048,
  //     type: 'Number'
  //   }) 

  //   const expiryDuration = new cdk.CfnParameter(this, 'expiryDuration', {
  //     minValue : 90,
  //     maxValue : 200,
  //     type: 'Number',
  //     default : 120
  //   })

  //     const bucketNameParam = new cdk.CfnParameter(this, 'bucketName', {
  //       type: 'String',
  //       minLength: 5,
  //       maxLength: 20,
  //       default: "mybucketUser1_2"
  //     })

  //  const buck =  new Bucket(this, "bucketIdwithParamName" , {
  //     bucketName : bucketNameParam.valueAsString,
  //     lifecycleRules : [
  //       {
  //         expiration : cdk.Duration.days(expiryDuration.valueAsNumber)
  //       },
  //       {
  //         objectSizeGreaterThan: maxObjSizeParam.valueAsNumber,
  //         expiration : cdk.Duration.days(3)
          
  //       }
  //     ]
  // });

  //   new cdk.CfnOutput(this, 'BucketNameOfmybucketUser1', {
  //     value: buck.bucketName
  //   })

  }
}
