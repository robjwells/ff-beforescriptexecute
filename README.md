Simple example of attempts to block script execution with a userscript via `MutationObserver`.

Tested with:

- Firefox 139
- Chrome 137
- Safari 17.6
- Violentmonkey 2.31

## Setup

The `index.html` file contains three scripts:

- `userscript.js`, which attempts to prevent the loading of the other scripts by
  changing the `type` of the `script` elements.
- `main-defer.js`, which registers a load listener to add text to a `span` element,
   with its corresponding `script` element marked `defer`.
- `main-nodefer.js`, which registers a load listener to add text to a (different)
  `span` element, with its corresponding `script` element _not_ deferred.

Initially this example relied on a userscript extension to inject `userscript.js`,
but the behaviour is the same when including that script in the HTML.

## Firefox behaviour

- `main-defer.js` (with the `defer` attribute on its `script` element) is executed,
  and adds text to the page.
- `main-nodefer.js` is _not_ executed.

## Chrome & Safari behaviour

Neither `main-defer.js` nor `main-nodefer.js` are executed.
