import * as fs from 'fs'
import * as path from 'path'

fs.readFile('importantFiles/t1.txt', 'utf-8', ((err, data) => {
    console.log(data)
}));
let text = fs.readFileSync('importantFiles/t1.txt', 'utf-8');
console.log(text);
console.log('=====================');

fs.readdir('importantFiles', ((err, data: any) => {
    console.log(data)
}));

fs.writeFile('importantFiles/newFile.txt', 'Lets gooo', (err => {
    if (err)
        console.log(err)
}))


