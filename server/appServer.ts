import * as http from "http";

http.createServer((req, res) => {
    res.end("Hello NodeJS + TS!")
    console.log('Server has started...')
}).listen(3000);