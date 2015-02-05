"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var AI = _interopRequire(require("./modules/ai"));

module.exports = function (Game) {
  var ai = new AI(Game);
  ai.init();
};