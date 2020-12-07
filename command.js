#!/usr/bin/env node

const { spawn } = require('child_process')
const child = spawn('npx', ['danger', 'ci'])

child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr)
