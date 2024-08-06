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

## フロントマタースクリプトって何やねん

多分、`astro`ファイルの上部で記述できる`JavaScript`のことやな
