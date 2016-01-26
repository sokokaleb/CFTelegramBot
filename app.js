'use strict';

/**
 * Load modules
 */

require('dotenv').config();
var TelegramBot = require('node-telegram-bot-api');

/**
 * Main bot
 */

var bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true});

/**
 * App logic
 */

var url = 'http://codeforces.com/enter';

