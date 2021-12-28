import * as fs from "fs";
import chalk from 'chalk';

const getNotes = function (title: unknown, body: unknown) {
    return "Your notes...";
}

export const addNote = function (title: unknown, body: unknown){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note: any) {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes);
        console.log(chalk.greenBright("New note added!"));
    } else {
        console.log(chalk.redBright("Note title taken!"));
    }
}

export const removeNote = function (title: unknown) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note: any) {
        return note.title !== title;
    })
    if (notes.length === notesToKeep.length) {
        console.log(chalk.redBright("No note was deleted"));
    } else {
        saveNotes(notesToKeep);
        console.log(chalk.greenBright("Note was successfully deleted!"));
    }
}


const saveNotes = function (notes: any) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notesList.json', dataJSON);
}

export const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notesList.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

