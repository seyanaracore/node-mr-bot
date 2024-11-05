import fs from 'node:fs'
import path from 'node:path'
import defaultConfig from '../config/config.default.json'
import type { BotConfig } from '@/types'

const CONFIG_PATH = path.resolve(__dirname, '../config/config.json')

function resetConfig() {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(defaultConfig), {
    encoding: 'utf8',
  })
}

export function getConfig(): BotConfig {
  const isConfigExists = fs.existsSync(CONFIG_PATH)

  if (!isConfigExists) {
    resetConfig()
  }

  const configFileStr = fs.readFileSync(CONFIG_PATH, 'utf8')
  const configFileData = JSON.parse(configFileStr) as BotConfig

  return {
    ...configFileData,
  }
}
