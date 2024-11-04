import type { LogInfoFull } from './logger'

export type LogItem = LogInfoFull

export type ClientMessage = {
  id: string
	data: {
		logs: LogItem[]
	}
}