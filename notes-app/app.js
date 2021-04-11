const getNotes = require('./notes')
const chalk = require('chalk')
const fs = require('fs')

const msg = getNotes()

console.log(chalk.green.bold("Success"))
fs.appendFileSync('chalk.txt',chalk.green.bold("Success"))