const Aoijs = require('aoi.js')

const bot = new Aoijs.Bot({
token:'OTcwOTIzMTA1MDU0NzY5MTgy.G0iX2V.BJ07L-V_fueVednokNQht4w380bxsQ_3gPyXyw',
    prefix: ["!"],
    intents: "all",
})

bot.onMessage()

const loader = new Aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")