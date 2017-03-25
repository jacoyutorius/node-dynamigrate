## Dynamigrate

nodeでAWS DynamoDBを操作する, aws-sdkのオレオレラッパ。

## Usage



## Functions

#### up

DynamoDBにテーブルを作成する.

#### listTables

DynamoDB上に作成されたテーブルの一覧を取得する.

#### scan

指定したテーブルのレコードの一覧を取得.

#### drop

DynamoDBより指定したテーブルを削除する.

## Test

テストを実行するには事前にdynamodb-localの環境を作成する必要があります。

### dockerでdynamodb-localを起動する場合

[deangiberson/aws-dynamodb-local](https://hub.docker.com/r/deangiberson/aws-dynamodb-local/) をDockerで起動。
test.jsに記載されているendpointを以下のように変更。

**test.js**

```js
var awsParams = {
	accessKeyId: accessKeyId,
	secretKeyId: secretKeyId,
	region: region,
	endpoint: "http://192.168.99.100:32779" //起動したDockerイメージのURL
};
```


setup your AWS keys and start [DynamoDB local](https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/DynamoDBLocal.html#DynamoDBLocal.DownloadingAndRunning).

**AWSアクセスキーの設定**

```
export AWS_ACCESS_KEY=YOUR_AWS_ACCECSS_KEY
export AWS_ACCESS_SECRET=YOUR_AWS_ACCESS_SECRET
```

**テストの実行**

```bash
npm run test
> dynamigrate@1.0.0 test /Users/node-dynamigrate
> mocha test/dynamigrate/test.js


  dynamigrate
    ✓ テーブルが作成される (420ms)
    ✓ テーブルの一覧が取得できる
    ✓ テーブルにレコードが追加できる (127ms)
    ✓ テーブルが削除される


  4 passing (612ms)

```


