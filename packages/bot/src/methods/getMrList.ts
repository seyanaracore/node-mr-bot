import { v4 as uuidv4 } from 'uuid'
import GitlabService from '@/services/gitlab'
import { handleServerError, handleServerResponse } from '@/utils/server'
import type IBot from '@/models/bot'

async function getMrList(this: IBot) {
  const eventId = uuidv4()

  if (this.getMrListIsLoading) {
    this.emit('getMrListCanceled', eventId, 'Already loading')
    return { response: null, error: null }
  }

  this.emit('getMrList', eventId)

  this.getMrListIsLoading = true

  try {
    const mrList = await GitlabService.getAllProjectsMrListFull()

    this.emit('getMrListSuccess', eventId, mrList)

    this.mrList = mrList

    return handleServerResponse(mrList)
  } catch (e) {
    const origError = e as Error
    const res = handleServerError(origError)

    this.emit('getMrListError', eventId, origError.stack ?? origError.message)

    return res
  } finally {
    this.getMrListIsLoading = false
  }
}

export default getMrList
