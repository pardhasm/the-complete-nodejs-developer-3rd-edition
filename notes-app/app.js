// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'My name is Pardha Saradhi\n');
// fs.appendFileSync('notes.txt', 'This file is created by node.js');

// const name = require('./utils')
//
// console.log(name)
//
// const add = require('./utils')
//
// const sum = add(1,2)
//
// console.log(sum)


const getNotes = require('./notes')

const msg = getNotes()

console.log(msg)