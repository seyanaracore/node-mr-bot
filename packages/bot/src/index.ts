import nodeCron from 'node-cron'
import initServer from './server'
import mrBot from './bot'
import { getCronSchedule } from './helpers/getCronSchedule'
import { botLogger } from '@/logger'

function initSendMrInfoCron() {
  const scheduleConfig = getCronSchedule(mrBot.config.schedule)

  nodeCron.schedule(scheduleConfig, () => {
    botLogger.info('mr info cron ticked')
    mrBot.sendMrInfo()
  })
}

botLogger.info('start process')
process.on('exit', () => {
  botLogger.info('stop process')
})

initServer()
initSendMrInfoCron()
