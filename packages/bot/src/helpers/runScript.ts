import { spawn } from 'child_process'
// import fs from 'node:fs/promises'
// import path from 'path'
import type { ChildProcessWithoutNullStreams } from 'child_process'

export type OnCloseCb = (exitCode: number | null) => void
export type FullSubprocess = ChildProcessWithoutNullStreams & { exit: () => void }
export type OnDataCb = (process: FullSubprocess, data: string) => void

export type RunScriptParams = {
  onData?: OnDataCb
  onErrorData?: OnDataCb
  onClose?: OnCloseCb
}

function runScript(
  command: string,
  args?: string[],
  { onData, onErrorData, onClose }: RunScriptParams = {},
) {
  const subprocess = spawn(command, args)

  const exit = () => {
    subprocess.stdin.end()
    subprocess.kill()
  }

  const fullSubprocess = Object.assign(subprocess, { exit })

  if (onData) {
    subprocess.stdout.setEncoding('utf8')
    subprocess.stdout.on('data', (data) => {
      // fs.writeFile(path.resolve(__dirname, '../../logs/runScript.log'), `${data.toString()}\n`, { flag: 'a' })

      onData(fullSubprocess, data.toString())
    })
  }

  if (onErrorData) {
    subprocess.stderr.setEncoding('utf8')
    subprocess.stderr.on('data', (data) => {
      onErrorData(fullSubprocess, data.toString())
    })
  }

  if (onClose) {
    subprocess.on('close', onClose)
  }

  return fullSubprocess
}

export default runScript
