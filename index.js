'use strict';

//httpモジュールの導入
const http = require('http');

//ファイル操作を扱うモジュールを導入
const fs = require('fs');

//web-storage.jsが存在する前提で、当該ファイルを同期的に読み込む
const jsContent = fs.readFileSync('web-storage.js');

//HTTPサーバの作成
const server = http.createServer((req, res) => {

  //アドレスごとに描画を切り替える
  switch (req.url) {

    case '/':
      /* WebStorageはブラウザサイドの技術なので、実現するにはスクリプトタグを経由する必要がある */
      res.write('<script src="web-storage.js"></script>');
      res.end('hi');
      break;

    case '/web-storage.js': //このURLにアクセスした時は、web-storage.jsの内容を表示
      res.end(jsContent);
      break;
    default:
        break;
  }
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});