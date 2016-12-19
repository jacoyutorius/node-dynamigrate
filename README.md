## Dynamigrate

nodeでAWS DynamoDBを操作する, aws-sdkのオレオレラッパ。

## Usage



## Functions

#### up

DynamoDBにテーブルを作成する.

#### listTables

DynamoDB上に作成されたテーブルの一覧を取得する.

#### drop

DynamoDBより指定したテーブルを削除する.

## Test

setup your AWS keys and start [DynamoDB local](https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/DynamoDBLocal.html#DynamoDBLocal.DownloadingAndRunning).

```
export AWS_ACCESS_KEY=YOUR_AWS_ACCECSS_KEY
export AWS_ACCESS_SECRET=YOUR_AWS_ACCESS_SECRET
```

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

