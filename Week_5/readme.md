# 📦 MongoDB CRUD Application using Node.js & Mongoose

This is a simple Node.js application that performs **CRUD** (Create, Read, Update, Delete) operations on a MongoDB database using **Mongoose** as the ODM and **Express.js** as the server framework.

---

## 🚀 Features

- 📥 Create a new user
- 📄 Read all users or a specific user
- ✏️ Update a user's details
- ❌ Delete a user
- ✅ Error handling for invalid operations
- 🛠 Built using Node.js core and modern best practices

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## 📁 Project Structure

```

mongodb-crud-app/
├── app.js               # Main server file
├── models/
│   └── User.js          # Mongoose schema
├── .env                 # Environment variables
├── package.json
└── README.md

```

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/TheCoderAdi/CSI/tree/master/Week_5
cd Week_5
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

Create a `.env` file in the root:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/crud_demo
PORT=3000
```

Make sure MongoDB is running on your system.

---

## ▶️ Running the App

```bash
node app.js
```

---

## 📮 API Endpoints

### ✅ Create User

```http
POST /users
```

**Body (JSON):**

```json
{
  "name": "Aditya",
  "email": "adi@example.com",
  "age": 22
}
```

---

### 📂 Get All Users

```http
GET /users
```

---

### 🔍 Get User by ID

```http
GET /users/:id
```

---

### ✏️ Update User

```http
PUT /users/:id
```

**Body (JSON):**

```json
{
  "age": 23
}
```

---

### ❌ Delete User

```http
DELETE /users/:id
```

---

## 🧪 Example CURL Commands

```bash
# Create
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Aditya", "email":"adi@example.com", "age":22}'

# Read All
curl http://localhost:3000/users

# Read One
curl http://localhost:3000/users/<user_id>

# Update
curl -X PUT http://localhost:3000/users/<user_id> -H "Content-Type: application/json" -d '{"age":23}'

# Delete
curl -X DELETE http://localhost:3000/users/<user_id>
```

---

## 📚 References

- [Mongoose Docs](https://mongoosejs.com/docs/index.html)
- [Express Docs](https://expressjs.com/)
- [MongoDB Docs](https://www.mongodb.com/docs/)

---

Built with ❤️ using Node.js & MongoDB.
