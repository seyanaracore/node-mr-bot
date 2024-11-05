import { spawn } from 'child_process'
import type { SpawnOptions } from 'child_process'

const APP_NAME = 'bot'

const opts: SpawnOptions = {
  shell: true,
  stdio: 'inherit',
}

const [, , pmCommand, ...args] = process.argv

function getCommand(appName: string) {
  return pmCommand === 'start'
    ? `pm2 start ecosystem.config.js ${args.join(' ')} --name ${appName}`
    : `pm2 ${pmCommand} ${appName} ${args.join(' ')}`
}

spawn(getCommand(APP_NAME), [], opts)
