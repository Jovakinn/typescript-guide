import yargs, {argv} from "yargs";
import {addNote, removeNote} from './model/Notes';

yargs.version('1.1.0');

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => {
        addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "Remove note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => {
        removeNote(argv.title);
    }
});


yargs.command({
    command: "list",
    describe: "List of notes",
    handler: args => {
        console.log("Listing a notes !!!");
    }
});


yargs.command({
    command: "read",
    describe: "Read note",
    handler: args => {
        console.log("Reading a note !!!");
    }
});

yargs.parse();

