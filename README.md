# Cloud Functions x Cloud SQL ローカル開発 with Cloud SQL Auth Proxy In Docker

## What is this

Dockerを利用してCloud Functionsのローカル開発環境から 
Cloud SQL Auth Proxy経由でCloud SQLへ接続するサンプルです。  

## Required

- Public IP割り当て済みのCloud SQL(MySQL)作成済み
- Cloud SQLへ接続権限を持ったサービスアカウントのキーファイル(JSON)をダウンロード済み
  - secrets/cloud-sql-credential.jsonに配置
- 以下の環境変数項目が設定済み(.envなどで)
  - sqlConnectionName: SQLインスタンスへの接続名(project-name:region:instance-name)
  - dbUser: 接続するデータベースのユーザー名
  - dbPassword: 接続するデータベースのパスワード
  - dbName: 接続するデータベース名
  - dbPort: sql_auth_proxyの待ち受けポート番号

## How to use

1. コンテナの起動
```shell
docker-comopse up
```

2. APIへアクセス
> http://localhost:8080/
