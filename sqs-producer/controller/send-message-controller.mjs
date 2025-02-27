import { SendMessageCommand } from "@aws-sdk/client-sqs"; 
import client from '../config/aws/sqs-config.mjs'
import config from 'config';

const queueURL = config.get('aws.sqs.deliveryQueueUrl');

export const sendMessage = async (req,res) => {
    try {
        const params = {
            MessageBody: JSON.stringify(req.body),
            QueueUrl: queueURL,
        };

        const sqsResult = await client.send(new SendMessageCommand(params));
        return res.status(sqsResult.$metadata.httpStatusCode).json({"message": 'Message was posted successfully', 'id': sqsResult.MessageId});
    } catch (err) {
        res.status(err.$metadata.httpStatusCode).json({"message": 'Error trying to post a message', 
                                                        "type": err.__type,
                                                        "code": err.Code
                                                    });
    }
}