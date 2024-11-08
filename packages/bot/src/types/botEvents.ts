import type { BotMessageBody } from './botMessageBody'
import type { MergeRequestFull } from '@/services/gitlab'

type EventId = string | number

export type BotEvents = {
  messageSend: (eventId: EventId, body: BotMessageBody) => void
  messageSentSuccess: (eventId: EventId, body: BotMessageBody) => void
  messageSentError: (eventId: EventId, errMsg: string) => void
  getMrList: (eventId: EventId) => void
  getMrListCanceled: (eventId: EventId, message: string) => void
  getMrListSuccess: (eventId: EventId, list: MergeRequestFull[]) => void
  getMrListError: (eventId: EventId, errMsg: string) => void
  sendMrInfo: (eventId: EventId) => void
  sendMrInfoCanceled: (eventId: EventId, message: string) => void
}
