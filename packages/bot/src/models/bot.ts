import type { MergeRequestFull } from '@/services/gitlab'
import type { botLogger } from '@/logger'
import type { BotConfig } from '@/types'
import type { SendTextResponse } from '@/services/yandex'
import type { ServerError, ServerReturnType } from '@/utils/server'
import type { BotEvents } from '@/types/botEvents'
import type EventEmitter from 'events'
import type { BotMessageBody } from '@/types/botMessageBody'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface IBot extends EventEmitter {
  on<U extends keyof BotEvents>(event: U, listener: BotEvents[U]): this

  emit<U extends keyof BotEvents>(event: U, ...args: Parameters<BotEvents[U]>): boolean

  readonly config: BotConfig
  readonly logger: typeof botLogger
  mrList: MergeRequestFull[]

  sendMessage(
    message: BotMessageBody
  ): Promise<ServerReturnType<SendTextResponse, null> | ServerReturnType<null, ServerError>>

  getMrList(): Promise<
  ServerReturnType<MergeRequestFull[], null>
  | ServerReturnType<null, ServerError>
  | ServerReturnType<null, null>
  >

  getMrListIsLoading: boolean

  sendMrInfo(): Promise<void>

  get targetMrList(): MergeRequestFull[]
}

export default IBot
