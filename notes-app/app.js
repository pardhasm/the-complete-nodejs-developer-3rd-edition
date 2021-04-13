const yargs = require('yargs')
const notes = require('./notes')

yargs.version("1.1.0")

//Add command
yargs.command({
    command: "add",
    description: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Remove command
yargs.command({
    command: "remove",
    description: "Remove the note",
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//List command
yargs.command({
    command: "list",
    description: "List all notes",
    handler() {
        notes.listNotes()
    }
})

//Read command
yargs.command({
    command: "read",
    description: "Read a note",
    builder: {
        title:{
            describe: "Read a note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

