import fs from 'node:fs'
import path from 'node:path'
import type { BotConfig } from '@/types'

const DEFAULT_CONFIG_PATH = path.resolve(__dirname, '../config/config.default.json')
const CONFIG_PATH = path.resolve(__dirname, '../config/config.json')

function resetConfig() {
  const defaultConfig = fs.readFileSync(DEFAULT_CONFIG_PATH, 'utf8')

  fs.writeFileSync(CONFIG_PATH, defaultConfig, {
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
