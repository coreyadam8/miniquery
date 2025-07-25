// miniQuery v1.0.0
// Author: Corey Adam
// License: MIT
(function (global) {
  const MiniQuery = function (selector) {
    if (!(this instanceof MiniQuery)) {
      return new MiniQuery(selector);
    }
    this.elements = Array.from(
      typeof selector === 'string'
        ? document.querySelectorAll(selector)
        : selector instanceof Node
        ? [selector]
        : selector instanceof NodeList || Array.isArray(selector)
        ? selector
        : []
    );
  };

  // --- Core ---
  MiniQuery.prototype.each = function (callback) {
    this.elements.forEach((el, i) => callback.call(el, el, i));
    return this;
  };

  MiniQuery.prototype.on = function (event, handler) {
    return this.each((el) => el.addEventListener(event, handler));
  };

  MiniQuery.prototype.addClass = function (cls) {
    return this.each((el) => el.classList.add(cls));
  };

  MiniQuery.prototype.removeClass = function (cls) {
    return this.each((el) => el.classList.remove(cls));
  };

  MiniQuery.prototype.toggleClass = function (cls) {
    return this.each((el) => el.classList.toggle(cls));
  };

  MiniQuery.prototype.attr = function (name, value) {
    if (value === undefined) return this.elements[0]?.getAttribute(name);
    return this.each((el) => el.setAttribute(name, value));
  };

  MiniQuery.prototype.html = function (html) {
    if (html === undefined) return this.elements[0]?.innerHTML;
    return this.each((el) => (el.innerHTML = html));
  };

  MiniQuery.prototype.text = function (text) {
    if (text === undefined) return this.elements[0]?.textContent;
    return this.each((el) => (el.textContent = text));
  };

  MiniQuery.prototype.css = function (prop, value) {
    if (value === undefined && typeof prop === 'string') {
      return getComputedStyle(this.elements[0])[prop];
    }
    return this.each((el) => {
      if (typeof prop === 'object') {
        for (let key in prop) el.style[key] = prop[key];
      } else {
        el.style[prop] = value;
      }
    });
  };

  MiniQuery.prototype.val = function (value) {
    if (value === undefined) return this.elements[0]?.value;
    return this.each((el) => (el.value = value));
  };

  // --- AJAX ---
  MiniQuery.get = function (url) {
    return fetch(url).then((res) => res.json());
  };

  MiniQuery.post = function (url, data) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };

  // --- Plugins ---
  MiniQuery.plugin = function (name, fn) {
    MiniQuery.prototype[name] = fn;
  };

  // --- Animations ---
  MiniQuery.prototype.fadeIn = function (duration = 400) {
    return this.each((el) => {
      el.style.opacity = 0;
      el.style.display = '';
      let last = +new Date();
      const tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / duration;
        last = +new Date();
        if (+el.style.opacity < 1) {
          requestAnimationFrame(tick);
        }
      };
      tick();
    });
  };

  MiniQuery.prototype.fadeOut = function (duration = 400) {
    return this.each((el) => {
      el.style.opacity = 1;
      let last = +new Date();
      const tick = function () {
        el.style.opacity -= (new Date() - last) / duration;
        last = +new Date();
        if (+el.style.opacity > 0) {
          requestAnimationFrame(tick);
        } else {
          el.style.display = 'none';
        }
      };
      tick();
    });
  };

  // --- Reactive Bind (basic signal-style binding) ---
  MiniQuery.prototype.bindText = function (signalFn) {
    return this.each((el) => {
      const update = () => (el.textContent = signalFn());
      update();
      setInterval(update, 50); // naive polling approach for v1
    });
  };

  // --- Export ---
  global.$ = MiniQuery;
})(typeof window !== 'undefined' ? window : this);
