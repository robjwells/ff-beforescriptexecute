Simple example of attempts to block script execution with a userscript via `MutationObserver`.

Tested with:

- Firefox 139
- Chrome 137
- Violentmonkey 2.31

## Setup

The `index.html` file includes `main.js`. It registers a load listener to add
text to a `<p>` element.

The `userscript.js` file attempts to prevent the execution of `main.js` by
changing the `type` of the `script` element. It also registers a load listener to
add text to a (different) `<p>` element.

## Firefox behaviour

If the `main.js` script element has the `defer` attribute set, `main.js` is
executed, the first `<p>` element contains "main.js executed", and the second
`<p>` element contains "userscript.js executed".

If the `main.js` script element does _not_ have the `defer` attribute,
`main.js` is not executed, the first `<p>` element is empty, and the second
`<p>` element contains "userscript.js executed".

## Chrome behaviour

`main.js` is _not_ executed, the first `<p>` element is empty, and the second
`<p>` element contains "userscript.js executed".
