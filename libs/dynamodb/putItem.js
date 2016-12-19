'use strict';
const AWS = require("aws-sdk");

module.exports = function(params, callback){
  const DynamoDB = new AWS.DynamoDB({
    credentials: {accessKeyId: params.awsParams.accessKeyId, secretAccessKey: params.awsParams.secretKeyId},
    region: params.awsParams.region
  });
  if(params.awsParams.endpoint != undefined || params.awsParams.endpoint != null){
    DynamoDB.endpoint = params.awsParams.endpoint;
  }

  DynamoDB.putItem(params.tableParams, callback);
}