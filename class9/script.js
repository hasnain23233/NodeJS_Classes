//In this class we learn how to load the htmk file on the server and send to client side
const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, resp) => {
    const filePath = path.join(__dirname, "HTML", "web.html");
    console.log("Trying to read:", filePath);

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            resp.writeHead(500, { "Content-Type": "text/plain" });
            resp.write("Internal Server Error");
            return resp.end();
        }

        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(data);
        resp.end();
    });
}).listen(3200, () => {
    console.log("Server is running on http://localhost:3200/");
});
