# 📦 MongoDB CRUD Application with JWT using Node.js & Mongoose

This is a simple Node.js application that performs **CRUD** (Create, Read, Update, Delete) operations on a MongoDB database using **Mongoose** as the ODM and **Express.js** as the server framework.  
Now enhanced with **JWT Authentication** for secure access to protected routes.

---

## 🚀 Features

- 📥 Create a new user with hashed passwords
- 🔐 JWT-based login for secure authentication
- 🔒 Protected routes for authorized users only
- 📄 Read all users or a specific user (with token)
- ✏️ Update a user's details
- ❌ Delete a user
- ✅ Error handling for invalid operations
- 🛠 Built using modern Node.js best practices

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

---

## 📁 Project Structure

```

mongodb-crud-app/
├── app.js               # Main server file
├── models/
│   └── User.js          # Mongoose schema + password hashing
├── middleware/
│   └── auth.js          # JWT middleware
├── .env                 # Environment variables
├── package.json
└── README.md

```

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/TheCoderAdi/CSI
cd Week_7
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
JWT_SECRET=your_jwt_secret_here
```

Make sure MongoDB is running on your system.

---

## ▶️ Running the App

```bash
node app.js
```

---

## 🔐 Authentication Flow

### 🔑 Register (Create User)

```http
POST /users
```

**Body:**

```json
{
  "name": "Aditya",
  "email": "adi@example.com",
  "password": "secret123"
}
```

---

### 🔐 Login (Get JWT Token)

```http
POST /login
```

**Body:**

```json
{
  "email": "adi@example.com",
  "password": "secret123"
}
```

**Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```

Use this token in the `Authorization` header for protected routes:

```http
Authorization: Bearer <token>
```

---

## 📮 Protected API Endpoints (Require JWT)

### 📂 Get All Users

```http
GET /users
Authorization: Bearer <token>
```

---

### 🔍 Get User by ID

```http
GET /users/:id
Authorization: Bearer <token>
```

---

### ✏️ Update User

```http
PUT /users/:id
Authorization: Bearer <token>
```

**Body:**

```json
{
  "name": "Updated Name"
}
```

---

### ❌ Delete User

```http
DELETE /users/:id
Authorization: Bearer <token>
```

---

## 🧪 Example CURL Commands

```bash
# Register
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Aditya","email":"adi@example.com","password":"secret123"}'

# Login
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email":"adi@example.com","password":"secret123"}'

# Use the token below for next calls
TOKEN="your_jwt_token_here"

# Read All
curl -H "Authorization: Bearer $TOKEN" http://localhost:3000/users

# Read One
curl -H "Authorization: Bearer $TOKEN" http://localhost:3000/users/<user_id>

# Update
curl -X PUT http://localhost:3000/users/<user_id> -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" -d '{"name":"Adi"}'

# Delete
curl -X DELETE http://localhost:3000/users/<user_id> -H "Authorization: Bearer $TOKEN"
```

---

## 📚 References

- [Mongoose Docs](https://mongoosejs.com/docs/index.html)
- [Express Docs](https://expressjs.com/)
- [JWT.io](https://jwt.io/)
- [MongoDB Docs](https://www.mongodb.com/docs/)

---

## 🔐 Security Note

- Passwords are hashed using `bcryptjs`.
- JWT secret is stored securely in `.env`.
- All protected endpoints require a valid JWT token in the `Authorization` header.

---

Built with ❤️ using Node.js, MongoDB & JWT.
