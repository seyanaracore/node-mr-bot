import { v4 as uuidv4 } from 'uuid'
import type IBot from '@/models/bot'

async function sendMrInfo(this: IBot) {
  const eventId = uuidv4()

  this.emit('sendMrInfoInit', eventId)

  if (this.sendMrInfoIsLoading) {
    this.logger.info('stopping more one "sendMrInfo", already is processing')
    return
  }

  this.sendMrInfoIsLoading = true

  await this.getMrList()

  const { targetMrList } = this

  if (!targetMrList.length) {
    this.emit('sendMrInfo', eventId, { err: 'no target mrs', data: null })
    return
  }

  const text = this.getMessage(targetMrList)

  const { error } = await this.sendMessage({
    text,
  })

  if (error) {
    this.emit(
      'sendMrInfo',
      eventId,
      {
        err: 'data' in error
          ? JSON.stringify(error.data)
          : 'error sending mr info',
        data: null,
      },
    )
  } else {
    this.emit('sendMrInfo', eventId, { err: null, data: null })
  }

  this.sendMrInfoIsLoading = false
}

export default sendMrInfo
