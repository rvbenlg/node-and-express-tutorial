"use strict";

const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html");
const homeStyles = readFileSync("./styles.css");
const homeImage = readFileSync("./logo.svg");
const homeLogic = readFileSync("./browser-app.js");

const server = http.createServer((req, res) => {
    console.log(`${req.method} : ${req.url}`);
    const url = req.url;
    if (url == "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(homePage);
        res.end();
    } else if (url == "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>about page</h1>");
        res.end();
    } else if (url == "/styles.css") {
        res.writeHead(200, { "content-type": "text/css" });
        res.write(homeStyles);
        res.end();
    } else if (url == "/logo.svg") {
        res.writeHead(200, { "content-type": "image/svg+xml" });
        res.write(homeImage);
        res.end();
    } else if (url == "/browser-app.js") {
        res.writeHead(200, { "content-type": "text/javascript" });
        res.write(homeLogic);
        res.end();
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h1>page not found</h1>");
        res.end();
    }
});

server.listen(5000);