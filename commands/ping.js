module.exports = ({
    name: "ping",
    code: `Ping: $ping \nDatabase Ping: $dbping \nLast Restart:<t:$truncate[$divide[$readyTimeStamp;1000]]:R>`
    })


