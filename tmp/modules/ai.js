"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Spawn = _interopRequire(require("./spawn"));

var ai = (function () {
  function ai(game) {
    _classCallCheck(this, ai);

    this.settings = {
      creeps: {
        roles: {
          harvester: {
            body: ["WORK", "CARRY", "MOVE"]
          }
        }
      }
    };
    this.game = game;
    this.home = game.spawns[0];
  }

  _prototypeProperties(ai, null, {
    init: {
      value: function init() {
        this.home = new Spawn(home);
      },
      writable: true,
      configurable: true
    }
  });

  return ai;
})();

module.exports = ai;