+++
title = "意識の高いつぶやきをファボるbotを作った (対象はフォローワーのみ)"
date = "2014-10-26T19:42:00+09:00"
draft = false
tags = ["development"]
+++

herokuの勉強がてら twitterのbotを作成しました。

[umeyuki/ruby-ishiki-meter-bot](https://github.com/umeyuki/ruby-ishiki-meter-bot)

twitter上で発言した内容の意識が高い場合に[@ishikimeter](http://twitter.com/ishikimeter)がファボります。
不特定ではなく[@ishikimeter](http://twitter.com/ishikimeter)をフォローしているユーザのみが対象です

元ネタは[@sugyan](http://twitter.com/sugyan)さんの[げんきだしてbot](https://twitter.com/genkidashitebot)です。
ほとんどコピペ汗

意識の高さ判定は独自のアルゴリズム(umeyuki選別意識高いワードをどれだけ含むか)を用いています。

飽きたら、フォローを外す・もしくはブロックすればファボらなくなります。

## 意識高い

- 金持ち父さん貧乏父さん読了
- ストレスフリーGTDのタスク術

## 意識高くない

- アイデアをモレスキンノートに書き残した

herokuすごい便利ですね。
herokuの使い方は[ドットインストール](http://dotinstall.com/lessons/basic_heroku)で学びました。
少し前にプレミアム会員になりました。文字起こしと中級レッスン素晴しいです。


よかったら[意識メーターbot](http://twitter.com/ishikimeter)フォローしてみてくださいね!
