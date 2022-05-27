#!/usr/bin/env node
// This script manage the typscript compiling process

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
async function main(printCompiletTime = false) {
  const startTime = process.hrtime()

  // Import requirements
  const { execa } = await import('execa')
  const path = require('path')
  const jetpack = require('fs-jetpack')
  const stripJSONComments = require('strip-json-comments')

  // Find paths and bins
  const rootPath = path.resolve(path.join(__dirname, '../'))
  const tscBin = path.join(rootPath, 'node_modules/.bin/tsc')
  const tsconfigFile = path.join(rootPath, 'tsconfig.json')
  const tsconfigRaw = jetpack.read(tsconfigFile)
  const tsconfigJSON = JSON.parse(stripJSONComments(tsconfigRaw))
  const bundlePath = path.join(rootPath, tsconfigJSON.compilerOptions.outDir)

  // Remove old directory because Typescript Compilter doesnt cleanup by default
  jetpack.remove(bundlePath)

  // Compile only with settings from tsconfig.json
  const result = await execa(tscBin, { cwd: rootPath })
  if (result.exitCode !== 0) {
    throw result
  }

  // Handle time used to compile and output in Millisecs
  const [diffTimeSec, diffTimeNano] = process.hrtime(startTime)
  const compileTimeMs = parseInt((diffTimeSec * 1e9 + diffTimeNano) / 1e6)
  if (printCompiletTime) {
    // eslint-disable-next-line no-console
    console.error(`Compile took ${compileTimeMs} ms`)
  }
}

module.exports = {
  main,
}

// if not included by another script execute it directly
if (typeof module !== 'undefined' && !module.parent) {
  main(true)
}
