const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const filesDir = path.join(__dirname, "files");

if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const fileName = parsedUrl.query.filename;
    const filePath = path.join(filesDir, fileName || "");

    if (req.method === "GET" && parsedUrl.pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to the File Manager API. Use /create, /read, or /delete endpoints.");
    }
    else if (req.method === "GET" && parsedUrl.pathname === "/read") {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end("File not found");
            }
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);
        });

    } else if (req.method === "POST" && parsedUrl.pathname === "/create") {
        let body = "";
        req.on("data", chunk => (body += chunk));
        req.on("end", () => {
            fs.writeFile(filePath, body, (err) => {
                if (err) {
                    res.writeHead(500);
                    return res.end("Error writing file");
                }
                res.writeHead(201);
                res.end("File created successfully");
            });
        });

    } else if (req.method === "DELETE" && parsedUrl.pathname === "/delete") {
        fs.unlink(filePath, (err) => {
            if (err) {
                res.writeHead(404);
                return res.end("File not found");
            }
            res.writeHead(200);
            res.end("File deleted successfully");
        });

    } else {
        res.writeHead(404);
        res.end("Invalid endpoint or method");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
