import type { BotMessageBody } from './botMessageBody'
import type { MergeRequestFull } from '@/services/gitlab'

type EventId = string | number

type EventData<T = null> = {
  err: string
  data: null
} | {
  err: null,
  data: T
}

export type BotEvents = {
  messageSendInit: (eventId: EventId, body: BotMessageBody) => void
  messageSent: (eventId: EventId, data: EventData<BotMessageBody>) => void
  getMrListInit: (eventId: EventId) => void
  getMrList: (eventId: EventId, data: EventData<MergeRequestFull[]>) => void
  sendMrInfoInit: (eventId: EventId) => void
  sendMrInfo: (eventId: EventId, data: EventData<null>) => void
}
