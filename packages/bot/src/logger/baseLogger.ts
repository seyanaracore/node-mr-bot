import path from 'path'
import {
  transports,
  format,
  createLogger,
} from 'winston'
import type { WinstonLogger, TransformableInfo, LogInfoFull } from './types'

const LOG_PATH = path.resolve(__dirname, '../../logs/app.log')

const printFormatter = (info: TransformableInfo) => {
  const label = info.label ? `${info.label} ` : ''

  return `${info.timestamp} | ${info.level} | ${label}${info.message}`
}

const baseFormat = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.printf(printFormatter),
)

export function getFullLog(info: TransformableInfo): LogInfoFull {
  const fullInfo = baseFormat.transform(info) as LogInfoFull

  return {
    ...fullInfo,
    formattedMessage: printFormatter(fullInfo),
  }
}

const fileTransport = new transports.File({
  filename: LOG_PATH,
  format: format.combine(
    baseFormat,
    format.prettyPrint(),
  ),
})

const consoleTransport = new transports.Console({
  format: format.combine(
    baseFormat,
    format.colorize({
      all: true,
      colors: {
        info: 'blue',
        error: 'red',
      },
    }),
  ),
})

const baseLoggerTransports = [
  consoleTransport,
  fileTransport,
]

export const baseLogger = createLogger({
  level: 'info',
  transports: baseLoggerTransports,
})

type Params = {
  label?: string
}

function getLogger({ label }: Params = {}): WinstonLogger {
  return baseLogger.child({ label })
}

export default getLogger
