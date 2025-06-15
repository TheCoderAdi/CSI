# 📁 Node.js File Management Tool (Using Core Modules)

This is a simple file management tool built using **Node.js core modules** — no external libraries used.

It supports creating, reading, and deleting files via an HTTP server, using the following Node.js modules:

- `fs`
- `path`
- `http`
- `url`

---

## 📦 Project Structure

```

file-manager/
├── fileManager.js       # Main server file
├── files/               # Directory where files are created/stored
└── README.md            # This file

```

---

## 🚀 Getting Started

### 1. Install Node.js

Download and install Node.js from: [https://nodejs.org](https://nodejs.org)

---

### 2. Run the Application

```bash
node fileManager.js
```

The server will start on:

```
http://localhost:3000
```

---

## 🛠️ API Endpoints

### ✅ Welcome Route

```
GET /
```

**Response:**

```
Welcome to the File Manager API. Use /create, /read, or /delete endpoints.
```

---

### 📄 Create a File

```
POST /create?filename=example.txt
```

**Request Body:**

```
This is the content of the file.
```

**Curl Example:**

```bash
curl -X POST http://localhost:3000/create?filename=example.txt -d "Hello from CSI Fam 🔥!"
```

**Response:**

```
File created successfully
```

---

### 📂 Read a File

```
GET /read?filename=example.txt
```

**Curl Example:**

```bash
curl http://localhost:3000/read?filename=example.txt
```

**Response:**

```
Hello from Node.js!
```

---

### ❌ Delete a File

```
DELETE /delete?filename=example.txt
```

**Curl Example:**

```bash
curl -X DELETE http://localhost:3000/delete?filename=example.txt
```

**Response:**

```
File deleted successfully
```

---

## 📁 Notes

- All files are stored inside the `files/` directory (auto-created if not present).
- Make sure the filename is passed as a query parameter (`?filename=...`).
- Only basic text files are supported in this version.

---

## 📚 References

- [Node.js Core Modules Documentation](https://nodejs.org/api/modules.html)
