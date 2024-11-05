import path from 'node:path'
import fs from 'node:fs'

const distPath = path.resolve(import.meta.dirname, 'dist')
const deployPath = path.resolve(import.meta.dirname, '../bot/dist/frontend-build')

fs.cp(distPath, deployPath, { recursive: true }, (err) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log(`frontend deployed.\nfrom: ${distPath}\nto: ${deployPath}`)
  }
})
