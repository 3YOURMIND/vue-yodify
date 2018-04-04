# vue-yodify by <a href="https://www.3yourmind.com/">3YOURMIND</a>

## Description

> A simple Vue.js plugin to enable notifications with ease.

## Dependencies

| Name | Version | Information                                                                                        |
|:-----|:--------|:---------------------------------------------------------------------------------------------------|
| vue  | 2.x     | ![](https://img.shields.io/npm/v/vue.svg) ![](https://img.shields.io/github/license/vuejs/vue.svg) |

## Installation

<pre>
<a href="https://yarnpkg.com">yarn</a> add <a href="https://yarnpkg.com/en/package/@3yourmind/vue-yodify">@3yourmind/vue-yodify</a>
</pre>
or
<pre>
<a href="https://npmjs.com">npm</a> i <a href="https://npmjs.com/package/@3yourmind/vue-yodify">@3yourmind/vue-yodify</a>
</pre>

## How to use

You need to register this library as a plugin. So you need to find the file
where you are registering Vue.js. In the most common case this will be the file
`src/main.js`. Inside this file you need to import this library and bind it to
Vue.js.

```javascript
import Vue from 'vue';
import VueYodify from '@3yourmind/vue-yodify';

Vue.use(VueYodify);
```

Then you need to register a global component in your app so the library can find
the component somehow. To do this go to your root component and extend it by
using the component once.

```html
<template>
  <div id="app">
    <vue-yodify />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
```

After registering the component you can call it globally by using the Vue
instance in the script part of a component.

```js
this.$yodify({
  text: 'This was successful :)',
  type: 'success', // optional, default
  duration: 3000, // optional, default
});
```

## Contributors

<table><thead>
<tr><th align="center"><a href="https://github.com/igeligel"><img src="https://avatars1.githubusercontent.com/u/12736734?v=4" width="100px;" style="max-width:100%;"><br><sub>igeligel</sub></a><br><p>Contributions: 11</p></th>
<th align="center"><a href="https://github.com/ostoc"><img src="https://avatars3.githubusercontent.com/u/3025708?v=4" width="100px;" style="max-width:100%;"><br><sub>ostoc</sub></a><br><p>Contributions: 4</p></th>
<th align="center"><a href="https://github.com/dodekeract"><img src="https://avatars0.githubusercontent.com/u/1133858?v=4" width="100px;" style="max-width:100%;"><br><sub>dodekeract</sub></a><br><p>Contributions: 8</p></th>
</thead></table>

## License

_vue-yodify_ is released under the [MIT License](./license.md).
