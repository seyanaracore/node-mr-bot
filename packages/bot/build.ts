/* eslint-disable sonarjs/no-os-command-from-path */
import fs from 'fs'
import path from 'path'
import { spawnSync } from 'child_process'

fs.rmSync(path.resolve(__dirname, './dist'), { recursive: true, force: true })

const args = ['-p', 'tsconfig.prod.json']

spawnSync('tsc', args)
spawnSync('tsc-alias', args)
