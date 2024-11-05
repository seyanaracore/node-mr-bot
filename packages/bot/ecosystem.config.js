const path = require('path')

const errorsFilePath = path.resolve(__dirname, 'logs', 'pm2-error.log')

module.exports = {
  apps: [
    {
      name: 'bot',
      script: process.env.NODE_ENV === 'production'
        ? 'node -r dotenv/config dist/index.js'
        : 'ts-node -r tsconfig-paths/register -r dotenv/config src/index.ts',
      error_file: errorsFilePath,
      instances: 1,
      watch: false,
      ignore_watch: ['node_modules', 'frontend-build', '\\.git', '*.log', 'logs'],
      cwd: path.resolve(__dirname),
      out_file: null,
    },
  ],
}
