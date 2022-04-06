let GLOBAL_CONFIG = require('./app_config.js');
let DATA_CROP = require('./data_generated_by_crop.json');

(function(){
  // Include crop data
  GLOBAL_CONFIG.pieces = DATA_CROP.pieces;
  GLOBAL_CONFIG.solution = DATA_CROP.solution;
})();

module.exports = GLOBAL_CONFIG;