import type { BotMessageBody } from './botMessageBody'
import type { MergeRequestFull } from '@/services/gitlab'

type EventId = string | number

export type BotEvents = {
  messageSend: (eventId: EventId, body: BotMessageBody) => void
  messageSentSuccess: (eventId: EventId, body: BotMessageBody) => void
  messageSentError: (eventId: EventId, errMsg: string) => void
  getMrList: (eventId: EventId) => void
  getMrListSuccess: (eventId: EventId, list: MergeRequestFull[]) => void
  getMrListError: (eventId: EventId, errMsg: string) => void
}
