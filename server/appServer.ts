import * as http from "http";
import * as url from "url";

http.createServer((req, res) => {
    res.end("Hello NodeJS + TS!")
    console.log(req.method)
    let urlRequest = url.parse(<string>req.url?.trim().toString(), true)
    console.log(urlRequest)
    console.log('Server has started...')
}).listen(3000);