import AI from "./modules/ai";

module.exports = function(Game){
  var ai = new AI(Game);
  ai.init();
};
