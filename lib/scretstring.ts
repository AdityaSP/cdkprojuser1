import { CfnParameter } from 'aws-cdk-lib';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';


export function getGenericSecret(inputparam :CfnParameter){
    const generic =  {
        secretStringTemplate: JSON.stringify({username: inputparam.valueAsString }),
        generateStringKey: 'password'
    }
    return generic;
}