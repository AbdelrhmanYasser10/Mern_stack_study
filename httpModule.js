const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    console.log(req.url);
    console.log(req.method);
    console.log("Edit");
    if (req.url == "/") {
        console.log("request recieve");
        res.write("Response send");
        res.end();
    } else if (req.url == "/home") {
        console.log("weclome");
        fs.readFile("./html/index.html", (err, data) => {
            if (err) {
                console.log("error occured");
            }

            res.write(data);
            res.end();
        });
    } else if (req.url == "/css/index.css") {
        fs.readFile("./css/index.css", (err, data) => {
            if (err) {
                console.log("error occured");
            }
            res.writeHead(200, { "content-type": "text/css" });
            res.write(data);
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.writeHead(404, () => {

        });
        res.end();
    }

});



server.listen(80, () => {
    console.log("listen on port 80");
});