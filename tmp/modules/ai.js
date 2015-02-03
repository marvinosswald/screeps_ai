"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var ai = (function () {
  function ai(game) {
    _classCallCheck(this, ai);

    this.game = game;
  }

  _prototypeProperties(ai, null, {
    init: {
      value: function init() {},
      writable: true,
      configurable: true
    }
  });

  return ai;
})();

module.exports = ai;