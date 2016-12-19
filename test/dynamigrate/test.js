var assert = require("assert");
var dynamigrate = require("../../libs/dynamigrate.js");

var accessKeyId = process.env.AWS_ACCESS_KEY;
var secretKeyId = process.env.AWS_ACCESS_SECRET;
var region = "ap-northeast-1";

var awsParams = {
	accessKeyId: accessKeyId,
	secretKeyId: secretKeyId,
	region: region,
	endpoint: "http://localhost:8000"
};

describe("dynamigrate", function(){
	it("テーブルが作成される", function(done){
		var params = {
			awsParams: awsParams,
			tableParams: {
		    TableName: "Movie",
		    KeySchema: [
		      {AttributeName: "year", KeyType: "HASH"},
		      {AttributeName: "title", KeyType: "RANGE"}
		    ],
		    AttributeDefinitions: [
		      {AttributeName: "year", AttributeType: "N"},
		      {AttributeName: "title", AttributeType: "S"}
		    ],
		    ProvisionedThroughput: {
		      ReadCapacityUnits: 10,
		      WriteCapacityUnits: 10
		    }
		  }
		};
		dynamigrate.up(params, function(err, data){
			assert.equal(data.TableDescription.TableName, "Movie");
			done();
		});
	});

	it("テーブルの一覧が取得できる", function(done){
		dynamigrate.listTables({awsParams: awsParams, tableParams: {}}, function(err, data){
			assert.ok(data.TableNames.indexOf("Movie") >= 0);
			done();
		});
	});

	it("テーブルにレコードが追加できる", function(done){
		var params = {
			awsParams: awsParams,
			tableParams: {
				TableName: "Movie",
				Item: {
					year: {N: "1958"},
					title: {S: "Vertigo"}
				}
			}
		};
		dynamigrate.putItem(params, function(err, data){});

		dynamigrate.scan({
				awsParams: awsParams,
				tableParams: {TableName: "Movie"}
			}, 
			function(err, data){
			  assert.equal(data.Items[0].title["S"], "Vertigo");
			  assert.equal(data.Items[0].year["N"], "1958");
			  done();
			}
		);
	});

	it("テーブルが削除される", function(done){
		var params = {
			awsParams: awsParams,
			tableParams: {
				TableName: "Movie"
			}
		};
		dynamigrate.drop(params, function(err, data){
			assert.equal(data.TableDescription.TableName, "Movie");
			done();
		});
	});
});