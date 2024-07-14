FROM ubuntu:20.04

# タイムゾーンの設定
ENV TZ=Asia/Tokyo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 必要なパッケージのインストール
RUN apt-get update \
    && apt-get install -y python3 python3-pip libpq-dev

# 作業ディレクトリの設定
WORKDIR /sayhellotobike

# 必要なファイルのコピー
COPY requirements.txt .

# 依存パッケージのインストール
RUN pip install -r requirements.txt

# ソースコードのコピー
COPY . .

# Pythonコマンドのシンボリックリンクの作成
RUN ln -s /usr/bin/python3 /usr/bin/python

# ポートの公開
EXPOSE 8000
EXPOSE 5432

# PostgreSQLサービスの起動コマンド
CMD service postgresql start && python3 manage.py runserver 0.0.0.0:8000
