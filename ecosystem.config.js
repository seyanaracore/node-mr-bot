const path = require('path');

const envConfig = require('dotenv').config({ path: path.join(__dirname, '.env') });

const botApp = require('./packages/bot/ecosystem.config.js').apps[0];

botApp.env = envConfig.parsed;

module.exports = {
  apps: [botApp],
};
