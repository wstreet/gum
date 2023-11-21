const path = require('path');

const HOME = 'home';


const USER = 'user';

const UMG_CONFIG = path.join(process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'], '.umg.json');
const GLOBAL_CONFIG = path.join(process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'], '.gitconfig')
module.exports = {
  UMG_CONFIG,
  GLOBAL_CONFIG,

  HOME,

  USER,
};
