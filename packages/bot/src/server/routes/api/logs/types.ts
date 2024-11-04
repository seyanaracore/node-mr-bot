import type { LogItem } from '@packages/common/types/logsListener'

export type Client = {
  id: string
  disconnect: () => void
  onNewLog: (log: LogItem | LogItem[]) => void
}

export type { LogItem }

export type { TransformableInfo } from '@/logger/types'
