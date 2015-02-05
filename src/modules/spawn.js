class Spawn {
  constructor(spawn){
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
  spawnCreep(role){
    this.createCreep(this.buildBody(role),null,this.enableMemory());
  }
  buildBody(role){
    let body = [];
    for (var i of ai.settings.creeps[role].body){
      body.push(Game[ai.settings.creeps[role].body[i]]);
    }
    return body;
  }
  enableMemory(role){

  }

}

export default Spawn;
