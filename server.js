const http = require("http");

const fs = require('fs');
const server = new http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html",
    });
    fs.readFile(`${__dirname}/index.html`, 'utf-8', (err, data) => {
        res.end(data);
    });

});

server.listen(8080,'127.0.0.1',()=>
{
console.log("Started Listening");
});