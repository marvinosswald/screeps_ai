import Spawn from "./spawn";

class ai {
  constructor(game){
    this.settings = {
      creeps: {
        roles: {
          harvester: {
            body:['WORK','CARRY','MOVE']
          }
        }
      }
    };
    this.game = game;
    this.home = game.spawns[0];
  }
  init(){
    this.home = new Spawn(home);
  }
}

export default ai;
