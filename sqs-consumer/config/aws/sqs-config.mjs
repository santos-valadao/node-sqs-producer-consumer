import { SQSClient } from "@aws-sdk/client-sqs"; 
import config from 'config';

const region = config.get('aws.region');
const endpoint = config.get('aws.sqs.endpoint');

const client = new SQSClient({region, endpoint});

export default client;