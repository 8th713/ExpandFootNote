'use strict';

var expandFootnote = expandFootnote || {};

expandFootnote.SELECTOR = '.reference > a';

expandFootnote.getFootnote = function getFootnote(hash) {
  hash = hash.slice(1);

  return document.getElementById(hash).innerHTML;
};
