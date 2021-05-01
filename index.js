const TransportStream = require('winston-transport');

const { noticeError } = require('newrelic');

class WinstonNewRelicTransport extends TransportStream {
  log (info, callback) {
    setImmediate(() => {
      this.emit('logged', info)
    })

    noticeError(new Error(JSON.stringify(info)))
      
    callback()
  }
}

module.exports = WinstonNewRelicTransport
