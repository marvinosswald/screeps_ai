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