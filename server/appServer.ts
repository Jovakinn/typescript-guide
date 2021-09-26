import * as http from "http";
import * as url from "url";

http.createServer((request, response) => {
    console.log('Server has started...')

    if (request.method == 'GET') {
        response.end("Hello NodeJS + TS!")
        console.log(request.method)
        let urlRequest = url.parse(<string>request.url?.trim().toString(), true)
        //console.log(urlRequest)
        console.log(urlRequest.query.test)
    }

    if (request.method == 'POST') {

    }
}).listen(3000);