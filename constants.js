const path = require('path');
const USERS = require('./users.json');

const HOME = 'home';


const USER = 'user';

const GUM_CONFIG = path.join(process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'], '.gum.json');
const GLOBAL_CONFIG = path.join(process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'], '.gitconfig')
module.exports = {
  GUM_CONFIG,
  GLOBAL_CONFIG,

  HOME,

  USER,
  USERS
};
