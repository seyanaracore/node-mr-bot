import type { BotConfig } from '@/types'

export type ConfigModel = Omit<BotConfig, 'port'>
