# amazon-connect-call-routing
Amazon Connect call routing using AWS Lambda and Node.js.

# Amazon Connect Call Routing

This project demonstrates dynamic call routing using Amazon Connect and AWS Lambda.

## Services Used

- Amazon Connect
- AWS Lambda
- Node.js
- CloudWatch
- IAM

## Flow

Customer Call
→ Amazon Connect
→ Lambda Function
→ Customer Validation
→ Queue Routing

## Use Case

Amazon Connect invokes a Lambda function which identifies the customer and returns routing information. Based on the response, the customer is transferred to the correct queue.
