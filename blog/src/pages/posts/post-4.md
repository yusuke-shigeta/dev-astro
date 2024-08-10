---
layout: ../../layouts/MarkdownPostLayout.astro

title: "My First Blog Post"
pubDate: 2022-07-01
description: "This is the first post of my new Astro blog."
author: "Astro Learner"
image:
  url: "https://docs.astro.build/assets/rose.webp"
  alt: "The Astro logo on a dark background with a pink glow."
tags: ["astro", "blogging", "learning in public"]
---

# `astro`の書き方!!

## 配列

```js
// 定義
---
const skills = ["HTML", "CSS", "JavaScript", "PHP", "Astro"];
---

// 出力
{skills.map((skill) => <p>{skill}</p>)}
```

## 条件分岐

```js
// 定義
---
const happy = true;
const finished = false;
const goal = 3;
---

// happyがtrueかどうか
{happy && <p>I am happy to be learning Astro!</p>}

// finishedがtrueかどうか
{finished && <p>I finished this tutorial!</p>}

// goalが3かどうか。これもしや、型も判定してる？
{goal === 3 ? <p>My goal is to finish in 3 days.</p> : <p>My goal is not 3 days.</p>}
```

## `style!`

### 個々のページのスタイルを設定する場合

スタイルを適用させたいページの style タグ内に書くっぽい

### フロントマターで css の変数も定義できちゃう

`define:vars={ {...} }`ディレクティブとかいうのを使用できる
少しだるいけどまあまあ使えそう
`scss`とかいらなくね？

```js
// フロントマター部分
const skillColor = "navy";
```

```css
/* CSS */
<style define:vars={{ skillColor }}>

.skill {
  color: var(--skillColor);
}
```

### 知らんプロパティでてきた

- `text-transform`

### グローバルスタイルシートを追加する

- src/styles/global.css 作成
- フロントマタースクリプトで読み込み

```js
// フロントマタースクリプトで読み込み
---
import '../styles/global.css';
---
```

### レスポンシブスタイルを追加する

## フロントマタースクリプトって何やねん

多分、`astro`ファイルの上部で記述できる`JavaScript`のことやな

## コンポーネントきましたぁ

### ナビゲーションをコンポーネント化

- src/components ディレクトリを作成
- src/components/Navigation.astro ファイル作成  
  components ファイルは大文字からはじまんの？エレメントだとわかりやすいようにか？
- index.astro で`import`。  
  import は相対パス
  ```js
  <Navigation /> // 何この閉じスラッシュ
  ```

### フッターのソーシャルメディアをコンポーネント化

- Footer.astro ファイル作成
- それぞれのページで作成したコンポーネントファイルを読み込み
- src/components/Social.astro ファイルを作成
  このファイルの役割わからん
- `Social.astro`を作成。
- Footer.astro に、Social.astro をインポート
- Astro.props って何？よくわかんないけどすげーじゃん？

```js
// Social.astro
---
const { platform, username } = Astro.props;
---

<a href={`https://www.${platform}.com/${username}`}>{platform}</a>
```

```js
// Footer.astro
---
import Social from "./Social.astro";
---

<footer>
  <Social platform="twitter" username="astrodotbuild" />
  <Social platform="github" username="withastro" />
  <Social platform="youtube" username="astrodotbuild" />
</footer>
```

- components ファイルに style もかけちゃう  
  セレクタに指定するタグがファイル内にないと適用されない。  
  普通の css と違って、スコープが制限されてるから

```astro
---
const { platform, username } = Astro.props;
---

<a href={`https://www.${platform}.com/${username}`}>{platform}</a>

<style>
  a { // aタグがファイル内にないと適用されない
    padding: 0.5rem 1rem;
    color: white;
    background-color: #4c1d95;
    text-decoration: none;
  }
</style>
```

- Footer の css はこんな感じ  
  style タグの位置は関係あんの？

```astro
---
import Social from "./Social.astro";
---

<style>
  footer {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
</style>

<footer>
  <Social platform="twitter" username="astrodotbuild" />
  <Social platform="github" username="withastro" />
  <Social platform="youtube" username="astrodotbuild" />
</footer>

```

## 最初の script をブラウザに送信する

- hamburger メニューのスタイルを追加
- src/scripts/ ディレクトリ追加
- src/scripts/Hamburger.js ファイルを追加  
  ファイル名は menu.js ⇨ Hamburger.js  
  コンポーネントのファイル名と同じ方がわかりやすくない？
- 各ページで import

```astro
<script>
  import "../scripts/Hamburger.js";
</script>
```

## レイアウト!!

- コンポーネントとの違いは何だ？
  Astro コンポーネントをほぼ全てのページで使用している場合、
  コンポーネントではなくレイアウトを使用した方がいいっぽい。

- blog/src/layouts/BaseLayout.astro ファイルを作成

```astro
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';
const pageTitle = "Home Page";
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>{pageTitle}</title>
  </head>
  <body>
    <Header />
    <h1>{pageTitle}</h1>
    <Footer />
    <script>
      import "../scripts/menu.js";
    </script>
  </body>
</html>
```

- ページでレイアウトを使用する  
  blog/src/pages/index.astro  
  この段階では `h2` が出力されてないけど。

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
const pageTitle = "Home Page";
---

<BaseLayout>
  <h2>My awesome blog subtitle</h2>
</BaseLayout>
```

- blog/src/layouts/BaseLayout.astro に`<slot />`を追加!  
  `h2` 出力されたぁ
- `<slot />`で出力されるものを、「子コンテンツ」とかっていうらしい

- pageTitle を、BaseLayout に渡す

# カスタムブログレイアウト？つくてみる

- markdown 投稿用のレイアウトファイルを作成  
  blog/src/layouts/MarkdownPostLayout.astro
  `{frontmatter.title}`のように、`frontmatter`を使用すると、
  YAML フロントマターの値をレイアウト コンポーネントのプロパティとして渡せる
  YAML フロントマターっていうのは多分、.md ファイルの上で定義してる奴ら

- pubDate などの定数を は Layout ファイルに記述
