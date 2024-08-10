---
layout: ../../layouts/MarkdownPostLayout.astro

title: "AstroのAPIについて"
pubDate: 2024-08-10
description: "ブログサイトの作成を通じて、AstroのAPIを学ぶ"
author: "茂田ゆうすけ"
image:
  url: "https://docs.astro.build/assets/rose.webp"
  alt: "The Astro logo on a dark background with a pink glow."
tags: ["astro"]
---

## ブログ投稿アーカイブ

- `Astro.glob`登場  
  指定したディレクトリ配下の、指定したファイルを取得しとるぽい
  多分、配列が返ってきてる  
  ちなログ出力は、`console.log(allPosts)`で、ターミナルに出力される

```
// allPostsのログ
[
  {
    frontmatter: [Getter],
    file: [Getter],
    url: [Getter],
    rawContent: [Getter],
    compiledContent: [Getter],
    getHeadings: [Getter],
    Content: [Getter],
    default: [Function (anonymous)] {
      isAstroComponentFactory: true,
      moduleId: undefined,
      propagation: undefined
    },
    [Symbol(Symbol.toStringTag)]: 'Module'
  }
]

// frontmatterのログ
[
  {
    layout: '../../layouts/MarkdownPostLayout.astro',
    title: 'AstroのAPI',
    pubDate: '2024-08-10T00:00:00.000Z',
    description: 'ブログサイトの作成を通じて、AstroのAPIを学ぶ',
    author: '茂田ゆうすけ',
    image: {
      url: 'https://docs.astro.build/assets/rose.webp',
      alt: 'The Astro logo on a dark background with a pink glow.'
    },
    tags: [ 'astro' ]
  }
]
```

```astro
---
const allPosts = await Astro.glob("./posts/*.md");
---
<ul>
  {allPosts.map((post) => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
</ul>
```

- 属性に動的な値を入れる場合、クオートで囲む必要はないらしい

## ブログのリストを、コンポーネント化したい

- 新しいコンポーネントファイルを作成  
  blog/src/components/ListBlog.astro
- title, url などを他ファイルに渡すため、Astro.props。

```astro
---
const { title, url, description, pubDate, imageUrl, imageAlt } = Astro.props;
---
```

- blog.astro で import し、タグは以下のような感じ

```astro
---
import BlogPost from "../components/ListBlog.astro";

const allPosts = await Astro.glob("./posts/*.md");
const allFrontmatters = allPosts.map((post) => post.frontmatter);
---
<ul>
<!-- url, title, description, pubDate, imageUrl, imageAlt -->
  {allPosts.map((post) => <BlogPost url={post.url} title={post.frontmatter.title} />)}
</ul>
```

- pubDate の出力例

```astro
<p>{frontmatter.pubDate.toString().slice(0, 10)}</p>
```
