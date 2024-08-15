# 準備

dockerを使ってmongoDBを起動する

```bash
$ docker run --rm --name=my-app-db -p 27017:27017 mongo
```

serverを起動する

```bash
$ npm install
$ node index.js
```
http://localhost:3000 にアクセスする

# 使い方
ボタンを使って言葉遊びが出来ます。

ネット上で一時期流行したアニメ「しかのこのこのここしたんたん」のオープニングが元ネタです。

## 特殊ボタン
・[おうちゃくする]：「しかのこのこのここしたんたん」と入力する

・[ほろぼす]：文字列を全削除する
