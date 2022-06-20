'use strict';
const now = Date.now();
const key = 'last_access';

//ローカルストレージにキー（last_access）と値（現在のミリ秒時刻）をセット
//セットした内容はデベロッパーツールのアプリケーション→ローカルストレージで確認できる
localStorage.setItem(key, now);

//ローカルストレージに格納した値を取得して、コンソールに表示させる
const value = localStorage.getItem(key);
console.log(value);