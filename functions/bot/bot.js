const telegraf =  require('telegraf')

module.exports = bot = new  telegraf('6468224337:AAGrt8G8xYxWtKND6yx5PvtGZgvDP1xKRCU')

import Start from require('./start')
Start()
import About from ('./about')
About()
import Table  from ('./tables')
Table()
import Live from ('./live')
Live()
import Btns  from ('./buttons')
Btns()
bot.launch()