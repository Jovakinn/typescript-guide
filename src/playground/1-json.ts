import * as fs from "fs";

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString('utf-8');
const book = JSON.parse(dataJSON);

console.log(book);