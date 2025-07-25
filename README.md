# MiniQuery

A lightweight, modular JavaScript utility library with plugin support.  
MiniQuery provides a simple API for DOM manipulation, AJAX requests, and easy extensibility through plugins — all in a compact, dependency-free package.

---

## 🔧 Features

- ✅ DOM selection and chaining
- ✅ Event binding (`on`, `click`, etc.)
- ✅ Text/HTML getters and setters
- ✅ AJAX helpers (`get`, `post`)
- ✅ Animation utilities (`fadeIn`, `fadeOut`)
- ✅ Plugin system (`$.plugin(name, fn)`)
- ✅ CDN-ready (UMD) and module support (ESM, CJS)

---

## 📦 Installation

### 📁 npm

npm install miniquery-vjs


Then import in your project:

import $ from 'miniquery-vjs';

$('#box').text('Hello MiniQuery!');


🌐 CDN (Browser)

jsDelivr

<script src="https://cdn.jsdelivr.net/npm/miniquery-vjs@1.0.0/dist/miniquery.umd.min.js"></script>

unpkg

<script src="https://unpkg.com/miniquery-vjs@1.0.0/dist/miniquery.umd.min.js"></script>


Once loaded:

$('#hello').text('MiniQuery is ready!');


Quick Example:

<div id="box">Original</div>
<script>
  $('#box').text('Updated with MiniQuery');
  $('#box').fadeOut();
</script>


Plugin Example:

$.plugin('highlight', function () {
  return this.each(el => {
    el.style.background = 'yellow';
  });
});

$('#note').highlight();


API Summary

Method		Description
$()			Select DOM elements
.text()		Get/set text content
.html()		Get/set innerHTML
.on()		Add event listener
.fadeIn()	Show with fade animation
.fadeOut()	Hide with fade animation
$.get()		AJAX GET (returns Promise)
$.plugin()	Register a new chainable plugin


License
MIT © Corey Adam