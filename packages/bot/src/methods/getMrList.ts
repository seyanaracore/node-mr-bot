import { v4 as uuidv4 } from 'uuid'
import GitlabService from '@/services/gitlab'
import { handleServerError, handleServerResponse } from '@/utils/server'
import { botLogger } from '@/logger'
import type IBot from '@/models/bot'

async function getMrList(this: IBot) {
  const eventId = uuidv4()

  if (this.getMrListIsLoading) {
    botLogger.info('stopping more one "getMrList", already is processing')
    return { response: null, error: null }
  }

  this.mrList = []

  this.emit('getMrListInit', eventId)

  this.getMrListIsLoading = true

  try {
    const mrList = await GitlabService.getAllProjectsMrListFull()

    this.mrList = mrList

    this.emit('getMrList', eventId, { data: mrList, err: null })

    return handleServerResponse(mrList)
  } catch (e) {
    const origError = e as Error
    const res = handleServerError(origError)

    this.emit('getMrList', eventId, { data: null, err: origError.stack ?? origError.message })

    return res
  } finally {
    this.getMrListIsLoading = false
  }
}

export default getMrList
