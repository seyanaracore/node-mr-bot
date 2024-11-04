import fs from 'node:fs/promises'
import path from 'node:path'
import type { ConfigModel } from './config.model'

const DEFAULT_CONFIG_PATH = path.resolve(__dirname, '../../../../config/config.default.json')
const CONFIG_PATH = path.resolve(__dirname, '../../../../config/config.json')

export async function readConfig(): Promise<ConfigModel> {
  const str = await fs.readFile(CONFIG_PATH, 'utf8')

  return JSON.parse(str) as ConfigModel
}

export async function writeConfig(config: Partial<ConfigModel>) {
  await fs.writeFile(CONFIG_PATH, JSON.stringify(config))
}

export async function resetConfig() {
  const defaultConfig = await fs.readFile(DEFAULT_CONFIG_PATH, 'utf8')

  await fs.writeFile(CONFIG_PATH, defaultConfig, {
    encoding: 'utf8',
  })
}
