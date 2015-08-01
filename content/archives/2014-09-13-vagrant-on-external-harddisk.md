+++
title =  "Macでvagrantを外付けHDDで動かす時の注意事項"
date =  "2014-09-13T22:44:00+09:00"
tags = ["vagrant"]
+++

Macbook Airの容量がかなり圧迫されてきたので以下の記事を参考に
Vagrantを外付けディスクに移行した。

[MacBookAir の容量がきついので Vagrant 環境を外付けに移した話 | モンキーレンチ](http://2inc.org/blog/2014/06/28/4311/)

注意するべきこととして、外付けHDDをmac用にフォーマットしなければ
ファイルの権限が変更できないためinsecure_private_keyが600にならず
vagrant sshできない。

フォーマットの仕方は以下の記事を参照してください。

[超簡単！外付けHDDを3分でMac用にフォーマットする方法を画像で解説 | トネリコBLOG](http://toneliko.com/561/)

フォーマットしたらデータ消えてしまいます。

1. 外付けHDDはmac用にフォーマットする
2. ~/.vagrant ~/.vagrant.d以下のデータを移す

上記の順番を守りましょう。

今回購入したのは以下の商品で、64G増設することができた。

<div class="amazlet-box" style="margin-bottom:0px;"><div class="amazlet-image" style="float:left;margin:0px 12px 1px 0px;"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00I59UMW4/umeyuki0f-22/ref=nosim/" name="amazletlink" target="_blank"><img src="http://ecx.images-amazon.com/images/I/41PRrxOjvZL._SL160_.jpg" alt="Nifty 【MacBook Air 13インチ用】 MiniDrive Air (4GBマイクロSDカード付属 最大128GBまで対応) シルバー MD3-RP-AIRSR4G" style="border: none;" /></a></div><div class="amazlet-info" style="line-height:120%; margin-bottom: 10px"><div class="amazlet-name" style="margin-bottom:10px;line-height:120%"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00I59UMW4/umeyuki0f-22/ref=nosim/" name="amazletlink" target="_blank">Nifty 【MacBook Air 13インチ用】 MiniDrive Air (4GBマイクロSDカード付属 最大128GBまで対応) シルバー MD3-RP-AIRSR4G</a><div class="amazlet-powered-date" style="font-size:80%;margin-top:5px;line-height:120%">posted with <a href="http://www.amazlet.com/" title="amazlet" target="_blank">amazlet</a> at 14.09.13</div></div><div class="amazlet-detail">Nifty <br />売り上げランキング: 4,710<br /></div><div class="amazlet-sub-info" style="float: left;"><div class="amazlet-link" style="margin-top: 5px"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00I59UMW4/umeyuki0f-22/ref=nosim/" name="amazletlink" target="_blank">Amazon.co.jpで詳細を見る</a></div></div></div><div class="amazlet-footer" style="clear: left"></div></div>

<div class="amazlet-box" style="margin-bottom:0px;"><div class="amazlet-image" style="float:left;margin:0px 12px 1px 0px;"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00CHHTOII/umeyuki0f-22/ref=nosim/" name="amazletlink" target="_blank"><img src="http://ecx.images-amazon.com/images/I/51lJBOru7lL._SL160_.jpg" alt="【Amazon.co.jp限定】Transcend microSDXCカード 64GB Class10 UHS-I対応 (無期限保証) TS64GUSDU1E (FFP)" style="border: none;" /></a></div><div class="amazlet-info" style="line-height:120%; margin-bottom: 10px"><div class="amazlet-name" style="margin-bottom:10px;line-height:120%"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00CHHTOII/umeyuki0f-22/ref=nosim/" name="amazletlink" target="_blank">【Amazon.co.jp限定】Transcend microSDXCカード 64GB Class10 UHS-I対応 (無期限保証) TS64GUSDU1E (FFP)</a><div class="amazlet-powered-date" style="font-size:80%;margin-top:5px;line-height:120%">posted with <a href="http://www.amazlet.com/" title="amazlet" target="_blank">amazlet</a> at 14.09.13</div></div><div class="amazlet-detail">トランセンド・ジャパン <br />売り上げランキング: 12<br /></div><div class="amazlet-sub-info" style="float: left;"><div class="amazlet-link" style="margin-top: 5px"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00CHHTOII/umeyuki0f-22/ref=nosim/" name="amazletlink" target="_blank">Amazon.co.jpで詳細を見る</a></div></div></div><div class="amazlet-footer" style="clear: left"></div></div>

外付けHDDのデータが数ヶ月したら消えたって話をたまに聞く。
消えても問題ないデータを移行しましょう。


#### まとめ

外付けHDDはまずフォーマットしよう
