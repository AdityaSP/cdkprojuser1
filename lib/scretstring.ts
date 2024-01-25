import { CfnParameter } from 'aws-cdk-lib';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';


// export function getGenericSecret(scope: Construct) {

//     const inputparam = new CfnParameter(scope, 'dbusernameinput', {
//         type: "String"
//     })

//     const genericSecret : secretsmanager.SecretStringGenerator = {
//         secretStringTemplate: JSON.stringify({username: inputparam.valueAsString }),
//         generateStringKey: 'password'
//     }

//     return genericSecret;

// }
