import AWS from 'aws-sdk';

AWS.config.update({ region: 'sa-east-1'});

const sqs = new AWS.SQS({ apiVersion: '2012-11-05'});

const queueURL = 'https://localhost.localstack.cloud:4566/000000000000/delivery-queue';

const sendMessage = (req,res) => {
    console.log(req.body);
    var message = JSON.stringify(req.body);
    console.log(message);
    const params = {
        MessageBody: message,
        QueueUrl: queueURL,
    }

    var ret = sqs.sendMessage(params, (err, data) => {
        if(err){
            console.error('Sending a message threw an error', err);
            return err;
        } else {
            console.log('Message was sent successfully');
            return data;
        }
    });

    res.status(200).json(ret);
};

export default sendMessage;