#!/bin/bash

echo "Initializing localstack sqs..."

awslocal sqs create-queue --queue-name sqs-consumer-queue
awslocal sqs create-queue --queue-name sqs-producer-queue

echo "Queues created successfully!"