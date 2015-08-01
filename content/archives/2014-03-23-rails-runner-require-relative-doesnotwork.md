+++
title =  "rails runnerでrequire_relativeを使うとcannot load such fileになる"
date =  "2014-03-23T07:48:00+09:00"
draft = true

+++

ruby: 2.1.0
rails: 4.0.4

lib/hoge/fuga.rb という自作クラスをrails runnerで実行すると怒られました。\

```bash
script/something.rb:6:in `require_relative': cannot infer basepath (LoadError)
from script/wikipedia_pornstar.rb:6:in `<top (required)>'
```

rails runnerコマンドはRailsの環境下でバッチを動かすコマンドです。

script/somthing.rb

```ruby
require_relative 'lib/hoge/fuga'
```

rails runnerでなく rubyコマンドだと正常に動作。
結論として絶対パスを指定するとよい。

```ruby
require File.expand_path(File.dirname(__FILE__) + '/../lib/hoge/fuga')
```

この問題については以下のエントリーあたりが関係ありそう。

[require_relativeはeval内で必ずLoadErrorになる on Ruby1.9.2 - tagomorisのメモ置き場](http://d.hatena.ne.jp/tagomoris/20100924/1285322426)
