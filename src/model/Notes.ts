import * as fs from "fs";
import chalk from 'chalk';

const getNotes = (title: unknown, body: unknown) => {
    return "Your notes...";
}

const listNoted = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes!'));
    notes.forEach((note: any) => {
        console.log(note.title)
    })
}

export const addNote = (title: unknown, body: unknown) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note: any) => note.title === title);
    const duplicateNote = notes.find((note: any) => note.title === title);

    if (!duplicateNote) {
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

const readNote = (title: string) => {
    const notes = loadNotes();
    const note = notes.find((note: any) => note.title === title);
    if (!note) {
        console.log(chalk.red.inverse('Note not found!'));
    }
    console.log(chalk.inverse(note.title));
    console.log(note.body);
}

export const removeNote = (title: unknown) => {
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


const saveNotes = (notes: any) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notesList.json', dataJSON);
}

export const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notesList.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

