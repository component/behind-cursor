/**
 * Module dependencies
 */

var selection = window.getSelection;

/**
 * Export `behind`
 */

exports = module.exports = behind;

/**
 * Word separator
 */

var rseparator = exports.separator = /\s/;

/**
 * Look behind the cursor for a particular
 * string or pattern. If you're testing a
 * bunch of strings, you may want to pass
 * the selection `sel` so it's not recomputed
 * each time.
 *
 * Examples:
 *
 *   behind('lol')
 *   behind(/abc/)
 *
 * @param {String|Number|RegExp|Function} patter
 * @param {Selection} sel (optional)
 * @return {Number} offset
 */

function behind(pattern, sel) {
  sel = sel || selection();
  var node = sel.focusNode;
  var offset = sel.focusOffset;
  var text = node.textContent;
  var substring = '';

  // get the number of spaces in string
  var num = spaces(pattern.source || pattern);

  // convert
  pattern = ('string' == typeof pattern) ? new RegExp('^' + pattern + '$') : pattern;

  // get the beginning of the word
  var start = offset;
  while(start > 0) {
    if (rseparator.test(text[start - 1]) && num-- <= 0) break;
    start--;
  }

  var substring = text.slice(start, offset)
  return substring && pattern.test(substring) ? start : -1;
}

/**
 * Count the number of spaces in `str`
 *
 * @param {String} str
 * @return {Number}
 */

function spaces(str) {
  return str.split(rseparator).length - 1;
}
