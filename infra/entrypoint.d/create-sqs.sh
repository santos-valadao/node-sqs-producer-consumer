#!/bin/bash

echo "Initializing localstack sqs..."

awslocal sqs create-queue --queue-name delivery-queue

echo "Queue created successfully!"