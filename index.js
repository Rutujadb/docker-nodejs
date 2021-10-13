const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello! reading from docker.");

});

server.listen(8000, "127.0.0.1", () => {
    console.log('listening to port number 8000');
});
