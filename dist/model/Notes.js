"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadNotes = exports.removeNote = exports.addNote = void 0;
const fs = __importStar(require("fs"));
const chalk_1 = __importDefault(require("chalk"));
const getNotes = function (title, body) {
    return "Your notes...";
};
const addNote = function (title, body) {
    const notes = (0, exports.loadNotes)();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log(chalk_1.default.greenBright("New note added!"));
    }
    else {
        console.log(chalk_1.default.redBright("Note title taken!"));
    }
};
exports.addNote = addNote;
const removeNote = function (title) {
    const notes = (0, exports.loadNotes)();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    });
    if (notes.length === notesToKeep.length) {
        console.log(chalk_1.default.redBright("No note was deleted"));
    }
    else {
        saveNotes(notesToKeep);
        console.log(chalk_1.default.greenBright("Note was successfully deleted!"));
    }
};
exports.removeNote = removeNote;
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notesList.json', dataJSON);
};
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notesList.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }
};
exports.loadNotes = loadNotes;
//# sourceMappingURL=Notes.js.map