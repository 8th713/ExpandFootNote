'use strict';

var expandFootnote = expandFootnote || {};

expandFootnote.SELECTOR = 'a[href^="#"][name][title]';

expandFootnote.getFootnote = function getFootnote(hash) {
  hash = hash.slice(1).replace(/\./g, '\\.');

  return document.querySelector('a[name="' + hash + '"]').parentNode.innerHTML;
};
