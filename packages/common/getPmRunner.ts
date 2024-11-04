import { spawn } from 'child_process'
import type { SpawnOptions } from 'child_process'

const opts: SpawnOptions = {
  shell: true,
  stdio: 'inherit',
}

const [, , pmCommand, ...args] = process.argv

function getCommand(appName: string) {
  return pmCommand === 'start' ? `pm2 start ecosystem.config.js ${args.join(' ')}` : `pm2 ${pmCommand} ${appName} ${args.join(' ')}`
}

function getRunner(appName: string) {
  return () => spawn(getCommand(appName), [], opts)
}

export default getRunner
