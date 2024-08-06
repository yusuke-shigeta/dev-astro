# astro の配列

```js
---
const skills = ["HTML", "CSS", "JavaScript", "PHP", "Astro"];
---

{skills.map((skill) => <p>{skill}</p>)}
```

# astro の条件分岐

```js
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
