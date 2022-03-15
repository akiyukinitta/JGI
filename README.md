# JGI

## 使い方

node -v 14.15.0
```
npm install 
```

```
gulp
```

sassだけビルドしたい
```
gulp sass
```

ejsだけビルドしたい
```
gulp ejs
```
## フォント指定
rem単位
16px →　1.6rem

## 色
以下以外は変数使用しなくても大丈夫です

```
$cr-txt: #000;
$cr-main: #00387C;
$cr-sub: #AEEAF8;
$cr-warning: #D10000;
```

## 余白
rem単位はやめてください

em使うと1emで１文字の大きさになるので、調整しやすいかも


電卓使うか、以下にて計算
```
func-em(64,16)
```
## レイアウト幅
1000px

.ly_innerクラス使用してください
## メディアクエリ
```html
$breakpoints: (
	"xs": "(max-width: 320px)",
	"sm": "(max-width: 575px)",
	"md": "(max-width: 767px)",
	"lg": "(max-width: 1000px)",
	"xl": "(max-width: 1199px)",
	"xll": "(max-width: 1399px)"
);

使い方
@include mq(md) { 

}
```

## よく使いそうなヘルパー
```css
.hp_pcOnly .hp_spOnly.hp_textCenter
```