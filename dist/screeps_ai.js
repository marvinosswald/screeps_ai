(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var ai = _interopRequire(require("./modules/ai"));

global.ai = require("./modules/ai");
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./modules/ai":2}],2:[function(require,module,exports){
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
},{"./spawn":4}],3:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

//#### class creep
//- name
//- type

var creep = function creep(settings) {
  _classCallCheck(this, creep);
};

module.exports = creep;
},{}],4:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Spawn = (function () {
  function Spawn(spawn) {
    _classCallCheck(this, Spawn);

    this.energy = spawn.energy;
    this.energyCapacity = spawn.energyCapacity;
    this.hits = spawn.hits;
    this.hitsMax = spawn.hitsMax;
    this.id = spawn.id;
    this.memory = spawn.memory;
    this.my = spawn.my;
    this.name = spawn.name;
    this.owner = spawn.owner;
    this.pos = spawn.pos;
    this.room = spawn.room;
    this.structureType = spawn.structureType;
    this.spawning = spawn.spawning;
    this.createCreep = spawn.createCreep;
    this.transferEnergy = spawn.transferEnergy;
  }

  _prototypeProperties(Spawn, null, {
    spawnCreep: {
      value: function spawnCreep(role) {
        this.createCreep(this.buildBody(role), null, this.enableMemory());
      },
      writable: true,
      configurable: true
    },
    buildBody: {
      value: function buildBody(role) {
        var body = [];
        for (var _iterator = ai.settings.creeps[role].body[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
          var i = _step.value;
          body.push(Game[ai.settings.creeps[role].body[i]]);
        }

        return body;
      },
      writable: true,
      configurable: true
    },
    enableMemory: {
      value: function enableMemory(role) {},
      writable: true,
      configurable: true
    }
  });

  return Spawn;
})();

module.exports = Spawn;
},{}]},{},[1,2,3,4]);
