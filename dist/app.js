"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const Notes_1 = require("./model/Notes");
yargs_1.default.version('1.1.0');
yargs_1.default.command({
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
        (0, Notes_1.addNote)(argv.title, argv.body);
    }
});
yargs_1.default.command({
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
        (0, Notes_1.removeNote)(argv.title);
    }
});
yargs_1.default.command({
    command: "list",
    describe: "List of notes",
    handler: args => {
        console.log("Listing a notes !!!");
    }
});
yargs_1.default.command({
    command: "read",
    describe: "Read note",
    handler: args => {
        console.log("Reading a note !!!");
    }
});
yargs_1.default.parse();
//# sourceMappingURL=app.js.map