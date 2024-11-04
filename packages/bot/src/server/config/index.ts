export type ServerConfig = {
  port: number | string
  origin: string
}

const { DEFAULT_PORT } = require('@packages/common/consts/ports.cjs')

export function getServerConfig(): ServerConfig {
  const port = process.env.PORT ?? DEFAULT_PORT

  return {
    port,
    origin: process.env.ORIGIN ?? `http://localhost:${port}`,
  }
}
