#!/usr/bin/env node

const { spawn } = require('child_process')
// FIXME: This is really weird
const child = spawn('npm i -D dangerjs-wrapper && npx danger ci', {
  shell: true
})

child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr)
