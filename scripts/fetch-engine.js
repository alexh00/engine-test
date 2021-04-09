const fs = require('fs')

const engineSrc = 'D:/Work/Engine_2021/bin/engine.js'
const engineDest = './deploy/engine.js'

const defSrc = 'D:/Work/Engine_2021/bin/engine.d.ts'
const defDest = './types/engine.d.ts'

fs.copyFileSync(engineSrc, engineDest)
fs.copyFileSync(defSrc, defDest)

console.log('engine was fetched')