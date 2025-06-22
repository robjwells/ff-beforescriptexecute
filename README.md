Simple example of attempts to block script execution with a userscript via `MutationObserver`.

Tested with:

- Firefox 139
- Chrome 137
- Violentmonkey 2.31

## Setup

The `index.html` file includes `main.js`, which attaches a click event listener
on the button. When pressed, the event listener adds text to the empty `p` tag
below the button.

The `userscript.js` file attempts to prevent the execution of `main.js` by
changing the `type` of the `script` element.

## Firefox behaviour

`main.js` is executed and an event listener is attached to the button.

## Chrome behaviour

`main.js` is _not_ executed and no event listener is set.
