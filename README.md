![@tsdotnet/compare: Compare by value. Equality, equivalence and ordering.](https://cdn.jsdelivr.net/gh/tsdotnet/compare@master/assets/banner.svg)

[![npm version](https://img.shields.io/npm/v/@tsdotnet/compare.svg?style=flat-square)](https://www.npmjs.com/package/@tsdotnet/compare)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tsdotnet/compare/blob/master/LICENSE)

Compare and equate values in JavaScript, with .NET style comparison functions you can build from object keys.

## Install

```sh
npm install @tsdotnet/compare
```

## Usage

```ts
import { compare, comparison } from '@tsdotnet/compare';

compare(1, 2); // -1
compare('b', 'a'); // 1

type Person = { name: string; age: number };
declare const people: Person[];
people.sort(comparison.fromKeys<Person>(['age', 'name'])); // by age, then name
```

`compare` uses a `compareTo` method when an object has one. `areEqual` and `areEquivalent` do equality checks that treat `NaN` as equal to itself.

## Use it from

ESM (`import { compare, comparison } from '@tsdotnet/compare';`) or CommonJS (`const { compare, comparison } = require('@tsdotnet/compare');`).

<details><summary>In a browser, without a bundler</summary>

```html
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/type@1/dist/umd/type.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/compare@1/dist/umd/compare.min.js"></script>
<script>
  const { compare, comparison } = tsdotnet.compare;
</script>
```

</details>

## Docs

[tsdotnet.github.io/compare](https://tsdotnet.github.io/compare/)
