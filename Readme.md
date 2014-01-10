
# behind-cursor

  watch for certain keywords as you type.

## Installation

  Install with [component(1)](http://component.io):

    $ component install component/behind-cursor

## Example

```js
var behind = require('behind-cursor');

editor.oninput = function() {
  if (~behind('sloths')) console.log('you just typed "sloth"!');
};
```

## API

### `behind(str|regexp, [selection])`

Watch for a string `str` or regular expression `regexp` as you type. If you're checking a bunch of expressions, you may want to pass a `selection` so you're not running `window.getSelection()` a bunch of times. If a match is found, the starting `offset` is returned, otherwise `-1`.

```js
editor.oninput = function() {
  var selection = window.getSelection();
  var offset = behind(/sloths?/, selection);
};
```

## License

  MIT
