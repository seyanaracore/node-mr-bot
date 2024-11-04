import type { TransformableInfo } from 'logform'

export type { Logger as WinstonLogger } from 'winston'

export type { TransformableInfo }

export type LogInfoFull = { 
	level: 'error' | 'warn' | 'info' | 'debug';
  message: string; 
	timestamp: string, 
	formattedMessage: string
}