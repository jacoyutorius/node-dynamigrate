'use strict';
const AWS = require("aws-sdk");

var dynaMigrate = {
	up: require("./dynamodb/up.js"),
	drop: require("./dynamodb/drop.js"),
	listTables: require("./dynamodb/listTables.js"),
	putItem: require("./dynamodb/putItem.js"),
	scan: require("./dynamodb/scan.js")
};

module.exports = dynaMigrate;