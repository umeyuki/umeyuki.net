+++
title =  "MiddlemanでFeedly購読者付きボタンの作成"
date =  "2014-01-29T22:02:00+09:00"
tags = ["tips"]
draft = true
+++
サイドメニューに追加したFeedly購読者付きボタンを実装する方法を書きます。

buildする前にFeedlyのapiにアクセスして登録者数をdata/blog.jsonに書き込みます。
middlemanのbuildとはsource以下にあるslimやscss・coffee scriptをコンパイルすることです。
rakeとコマンドを打つことで購読者数取得 -> build -> github.ioにデプロイの流れになっています。

Rakefile

```ruby
require 'open-uri'
require 'json'
require 'uri'
task :default =>  [:feedly_counter, :deploy ]

task :feedly_counter do
  html = open('http://cloud.feedly.com/v3/feeds/feed%2Fhttp%3A%2F%2Fumeyuki.net%2Ffeed.xml').read
  feedly_json = JSON.parse(html), { symbolize_names: true }
  blog_data = {}
  File.open("data/blog.json", "r") do |f|
    blog_data = JSON.parse(f.read), { symbolize_names: true }
  end
  blog_data[0]['feedly_subscribers'] = feedly_json[0]['subscribers']
  File.open("data/blog.json", "w") do |f|
    f.write(blog_data[0].to_json)
  end
end
task :deploy do
  exec('middleman build && middleman deploy')
end
```

data/blog.jsonに購読者数が入ります

```json
{ ...,"feedly_subscribers": 1}
```

後はテンプレート側で表示するだけ。
deploy時に取得するだけなのでリアルタイムではありません。
slimでこう書く。

```html
.menu-feedly-subscribers
  a href='http://cloud.feedly.com/#subscription%2Ffeed%2Fhttp%3A%2F%2Fumeyuki.net%2Ffeed.xml'  target='blank'
    = data.blog.feedly_subscribers
```

参考にしたサイトはこちら。

- [購読者数つきのFeedlyボタンを設置したので、その方法と参考にしたサイトを紹介](http://ushigyu.net/2013/08/20/feedly-button-with-subscribers-number/)
- [[CSS] 画像を用いずにCSSとHTMLで吹き出しを作成する](http://www.yoheim.net/blog.php?q=20130112)
- [Rake](http://www2s.biglobe.ne.jp/~idesaku/sss/tech/rake/)

詳細はgithubをご確認あれ。
[umeyuki/umeyuki.github.io at develop](https://github.com/umeyuki/umeyuki.github.io/tree/develop)

まだ購読者が自分しかいないので、middlemanでのブログ作成に興味がある方はFeedlyの登録お願いします!涙
