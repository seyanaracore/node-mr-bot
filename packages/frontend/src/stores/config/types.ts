import type { Merge } from 'type-fest'
import type { ConfigModule } from '@/api/modules/config'

export type UpdateConfigPayload = ConfigModule.UpdateConfigPayload
export type GetConfigResponse = ConfigModule.GetConfigResponse
export type ResetConfigPayload = ConfigModule.ResetConfigPayload

export type ExcludedMrItem = Partial<GetConfigResponse['excludedMrs'][number]>
export type BotConfig = Merge<GetConfigResponse, { excludedMrs: ExcludedMrItem[] }>

export type ConfigStoreState = {
  config: BotConfig | null
}
