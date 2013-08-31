'use strict';

var expandFootnote = expandFootnote || {};

expandFootnote.SELECTOR = 'span.footnote > a';

expandFootnote.getFootnote = function getFootnote(hash) {
  hash = hash.slice(1).replace(/\./g, '\\.');

  return document.querySelector('a[name="' + hash + '"]').parentNode.innerHTML;
};
