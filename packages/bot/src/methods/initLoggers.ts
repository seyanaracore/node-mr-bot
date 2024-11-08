import type IBot from '@/models/bot'

function intiLoggers(this: IBot) {
  this.on('messageSendInit', (eventId, body) => {
    this.logger.info(`sending message: eventId=${eventId}, text=\n${body.text}`)
  })

  this.on('messageSent', (eventId, { err }) => {
    if (err) {
      this.logger.error(`sending message error: eventId=${eventId}, text=${err}`)
    } else {
      this.logger.error(`message received success: eventId=${eventId}`)
    }
  })

  this.on('getMrListInit', (eventId) => {
    this.logger.info(`getting mr list: eventId=${eventId}`)
  })

  this.on('getMrList', (eventId, { err }) => {
    if (err) {
      this.logger.error(`getting mr list error: eventId=${eventId}, text=${err}`)
    } else {
      this.logger.info(`getting mr list success: eventId=${eventId}`)
    }
  })

  this.on('sendMrInfoInit', (eventId) => {
    this.logger.info(`sending mr info: eventId=${eventId}`)
  })

  this.on('sendMrInfo', (eventId, { err }) => {
    if (err) {
      this.logger.error(`sending mr info error: eventId=${eventId}, text=${err}`)
    } else {
      this.logger.info(`sending mr info success: eventId=${eventId}`)
    }
  })
}

export default intiLoggers
