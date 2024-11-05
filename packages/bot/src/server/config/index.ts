import { DEFAULT_PORT } from '@packages/common/dist/consts/ports'

export type ServerConfig = {
  port: number | string
  origin: string
}

export function getServerConfig(): ServerConfig {
  const port = process.env.PORT ?? DEFAULT_PORT

  return {
    port,
    origin: process.env.ORIGIN ?? `http://localhost:${port}`,
  }
}
