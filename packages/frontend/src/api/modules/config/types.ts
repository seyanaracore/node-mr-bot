import type { BotConfig } from '@packages/common/types/botConfig'

export type GetConfigResponse = BotConfig

export type UpdateConfigPayload = {
  params?: {
    /** @default true */
    restart?: boolean
  }
  data: BotConfig
}

export type ResetConfigPayload = {
  params?: {
    /** @default true */
    restart?: boolean
  }
}
