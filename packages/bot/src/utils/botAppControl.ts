import path from 'path'
import { exec } from 'child_process'
import { botLogger } from '@/logger'

const DEFAULT_DELAY = 5000
const runnerPath = path.resolve(__dirname, '../../pmRunner.ts')

const botAppControl = {
  restart(delay = DEFAULT_DELAY) {
    botLogger.info('restarting bot...')

    setTimeout(() => {
      // eslint-disable-next-line sonarjs/os-command
      exec(`ts-node ${runnerPath} restart`)
    }, delay)
  },
  stop(delay = DEFAULT_DELAY) {
    botLogger.info('stop bot...')

    setTimeout(() => {
      // eslint-disable-next-line sonarjs/os-command
      exec(`ts-node ${runnerPath} delete`)
    }, delay)
  },
}

export default botAppControl
