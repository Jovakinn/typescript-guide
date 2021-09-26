import * as fs from "fs";
import {Human} from "./model/Human"
import * as mainJSON from "./importantFiles/mainJSON.json"

const Alex: Human = new Human("Alex", 122);

fs.writeFile('importantFiles/mainJSON.json', JSON.stringify(Alex), (err) => {
    if (err)
        console.log('Error');
});
console.log(mainJSON)



