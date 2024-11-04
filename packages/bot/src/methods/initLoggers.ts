import type IBot from '@/models/bot'

function intiLoggers(this: IBot) {
  this.on('messageSend', (eventId, body) => {
    this.logger.info(`sending message: eventId=${eventId}, text=\n${body.text}`)
  })

  this.on('messageSentError', (eventId, errMsg) => {
    this.logger.error(`sending message error: eventId=${eventId}, text=${errMsg}`)
  })

  this.on('messageSentSuccess', (eventId) => {
    this.logger.error(`message received success: eventId=${eventId}`)
  })

  this.on('getMrList', (eventId) => {
    this.logger.info(`getting mr list: eventId=${eventId}`)
  })

  this.on('getMrListSuccess', (eventId) => {
    this.logger.info(`getting mr list success: eventId=${eventId}`)
  })

  this.on('getMrListError', (eventId, errMsg) => {
    this.logger.error(`getting mr list error: eventId=${eventId}, text=${errMsg}`)
  })
}

export default intiLoggers
