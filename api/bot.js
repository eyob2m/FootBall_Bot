

const telegraf =  require('telegraf')
module.exports = bot = new  telegraf('6468224337:AAGrt8G8xYxWtKND6yx5PvtGZgvDP1xKRCU')

const Start =  require('./start')
Start()
const About = require('./about')
About()
const Table  = require('./tables')
Table()
const Live = require('./live')
Live()
const Btns = require('./buttons')
Btns()
bot.launch()