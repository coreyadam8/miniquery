# MiniQuery

🌐 Live Demo: [https://coreyadam8.github.io/miniquery/](https://coreyadam8.github.io/miniquery/)

MiniQuery is a lightweight, modular JavaScript utility library with plugin support.
It provides a simple API for DOM manipulation, AJAX requests, animations, and extensibility — all in a compact, dependency-free package.

---

## 🔧 Features

* ✅ DOM selection and chaining
* ✅ Event binding (`on`, `click`, etc.)
* ✅ Text and HTML getters/setters
* ✅ AJAX utilities (`get`, `post`)
* ✅ Animation methods (`fadeIn`, `fadeOut`)
* ✅ Plugin system (`$.plugin(name, fn)`)
* ✅ CDN-ready (UMD) + Module support (ESM, CJS)

---

## 📦 Installation

### 📁 npm

```bash
npm install miniquery-vjs
```

Then import it:

```js
import $ from 'miniquery-vjs';

$('#box').text('Hello MiniQuery!');
```

### 🌐 CDN (Browser)

**jsDelivr**:

```html
<script src="https://cdn.jsdelivr.net/npm/miniquery-vjs@1.0.0/dist/miniquery.umd.min.js"></script>
```

**unpkg**:

```html
<script src="https://unpkg.com/miniquery-vjs@1.0.0/dist/miniquery.umd.min.js"></script>
```

Once loaded:

```js
$('#hello').text('MiniQuery is ready!');
```

---

## ⚡ Quick Example

```html
<div id="box">Original</div>
<script>
  $('#box').text('Updated with MiniQuery');
  $('#box').fadeOut();
</script>
```

---

## 🔌 Plugin Example

```js
$.plugin('highlight', function () {
  return this.each(el => {
    el.style.background = 'yellow';
  });
});

$('#note').highlight();
```

---

## 📚 API Summary

| Method       | Description                      |
| ------------ | -------------------------------- |
| `$()`        | Select DOM elements              |
| `.text()`    | Get/set text content             |
| `.html()`    | Get/set HTML content             |
| `.on()`      | Attach event listeners           |
| `.fadeIn()`  | Show with fade animation         |
| `.fadeOut()` | Hide with fade animation         |
| `$.get()`    | Perform AJAX GET (Promise-based) |
| `$.plugin()` | Register a plugin                |

---

## 📄 License

MIT © [Corey Adam](https://github.com/coreyadam8)
