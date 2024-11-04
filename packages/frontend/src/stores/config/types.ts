import type { ConfigModule } from '@/api/modules/config'

export type UpdateConfigPayload = ConfigModule.UpdateConfigPayload
export type GetConfigResponse = ConfigModule.GetConfigResponse
export type ResetConfigPayload = ConfigModule.ResetConfigPayload

export type ConfigStoreState = {
  config: GetConfigResponse | null
}
