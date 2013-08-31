'use strict';

(function () {
  var StringProto = String.prototype;
  var ElementProto = Element.prototype;

  StringProto.contains = String.prototype.contains || function contains(searchString, position) {
    return (typeof position === 'number' && position ? this.substr(position) : this).indexOf(searchString) >= 0;
  };

  ElementProto.matchesSelector = ElementProto.matchesSelector || ElementProto.webkitMatchesSelector;
}());

var expandFootnote = {};

function createNote(text) {
  var note = document.createElement('div');

  note.className = 'footnote-popup';
  note.innerHTML = text;
  return note;
}

document.body.addEventListener('click', function (evt) {
  var target = evt.target;

  if (!target.matchesSelector(expandFootnote.SELECTOR)) {
    return;
  }

  evt.preventDefault();
  evt.stopPropagation();

  var data = target.dataset;
  var next = target.nextSibling;

  if (data.footnote) {
    next.hidden = !next.hidden;
    return;
  }

  var footnote = createNote(expandFootnote.getFootnote(target.hash));
  target.parentNode.insertBefore(footnote, next);
  data.footnote = true;
}, true);
