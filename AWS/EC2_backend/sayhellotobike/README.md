<!-- コンテナの起動方法 -->

1.docker-compose up -d
2.docker-compose up --build

<!-- コンテナに入る方法 Dockerfileで作成したファイルで作業するには、コンテナに入ってから作業をする必要がある-->
<!-- ポスグレのコンテナ -->

1.docker exec -it postgres bash

<!-- アプリ本体のコンテナ→pipを使うときなんかは必ずコンテナに入ること(マイグレーションしたりするときはここ) -->

1.docker exec -it sayhellotobike bash

<!-- ポスグレを操作する方法（SQLを操作したいとき） -->

1.root@bf68cf747b8d:/# psql -U guchon -d sayhellotobike

<!-- ポスグレをA5SQLで接続する方法 -->

データベース名：sayhellotobike
ユーザー ID：guchon
password：No1s@tan

<!-- コンテナ名の取得方法 -->

python manage.py createsuperuser
python manage.py runserver

<!-- 管理サイトのログイン情報 -->

Username (leave blank to use 'root'): root
Email address: uto.to.be.engineer@gmail.com
Password:No1s@tan
Password (again):No1s@tan

<!-- 登録 -->

11-19 現在：username はへんこうすること
curl -X POST -H "Content-Type: application/json" -d "{\"register\": {\"username\": \"exam92\", \"email\": \"user@example.com\", \"password\": \"secret_password\"}, \"other_data\": {\"birth_day\": \"1990-01-01\", \"favorite\": \"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\"}}" http://localhost:8000/users/register/

<!-- 更新 -->

curl -X PUT -H "Content-Type: application/json" -d '{"user": {"username": "test", "email": "a@example.com", "password": "aaaaaa"}, "birth_day": "1990-01-01", "age": 30}' http://localhost:8000/api/userInfos/1/

<!-- ログイン -->

curl -X POST -H "Content-Type: application/json" -d "{\"username\": \"exam91\", \"email\": \"user@example.com\",\"password\": \"secret_password\"}" http://localhost:8000/users/login/

# コマンドラインで実行

docker exec -it sayhellotobike bash

# コマンドラインで実行

python manage.py makemigrations

# コマンドラインで実行

python manage.py migrate

sayhellotobike=# \dt
public | sayhellotobikeAPI_userinfo | table | guchon

# もしポスグレが動かなくなった場合こちらで対応してください

https://halkyo.com/post/web/docker-postgresql-connect-error

sayhellotobike=# \dt
List of relations
Schema | Name | Type | Owner  
--------+----------------------------+-------+--------
public | auth_group | table | guchon
public | auth_group_permissions | table | guchon
public | auth_permission | table | guchon
public |
| table | guchon
public | auth_user_groups | table | guchon
public | auth_user_user_permissions | table | guchon
public | django_admin_log | table | guchon
public | django_content_type | table | guchon
public | django_migrations | table | guchon
public | django_session | table | guchon
public | sayhellotobikeAPI_userinfo | table | guchon

詳細
\d+ auth_user

例）
64 | secret_password | |
f | exam77 | | | user@example.com | f | t | 2023-11-19 08:11:33
.548114+00

【AWS】
C:\Users\utoto>aws cloud9 create-environment-ec2 --name sayhellotobike_develop_backend --description "バックエンドの開発環境です" --instance-type t2.micro --profile test001
{
"environmentId": "5453f71b5964464391f5941f463fb16e"
}

C:\Users\utoto>
