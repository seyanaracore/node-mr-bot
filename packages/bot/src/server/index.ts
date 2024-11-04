import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { getServerConfig } from './config'
import serverLogger from './logger'
import { FRONTEND_BUILD_PATH } from './consts'
import router from '@server/routes'

const morganMiddleware = morgan(
  'tiny',
  {
    stream: {
      // Configure Morgan to use our custom logger with the http severity
      write: (message) => serverLogger.info(message.trim()),
    },
  },
)

function initServer() {
  serverLogger.debug('init server')

  const { port, origin } = getServerConfig()
  const app = express().disable('x-powered-by')

  // middlewares
  app.use(
    cors({
      origin,
    }),
  )

  app.use(express.static(FRONTEND_BUILD_PATH))

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(morganMiddleware)

  // router
  app.use(router)

  // init
  app.listen(port, () => {
    serverLogger.info(`server started. port: ${port}`)
  })
}

export default initServer
