# Node.js + Express + MongoDB CRUD API

This is a simple RESTful API built using **Node.js**, **Express**, and **MongoDB (via Mongoose)** to perform **CRUD operations** on a `Product` resource.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv (for environment variables)

---

## 📁 Project Structure

```

express-mongo-crud-api/
├── index.js                 # Main entry point
├── routes/
│   └── Products.js        # REST API routes
├── models/
│   └── Product.js         # Mongoose schema
├── .env                   # Environment config
├── package.json
└── README.md

```

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/TheCoderAdi/CSI
cd Week_6
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/product_api
PORT=3000
```

Make sure MongoDB is running on your system.

### 4. Run the app

```bash
npm start
```

or

```bash
npm run dev
```

The API will be live at:
👉 `http://localhost:3000/products`

---

## 🧪 API Endpoints

### ✅ Create Product

```http
POST /products
```

**Body:**

```json
{
  "name": "Mouse",
  "price": 999
}
```

---

### 📄 Get All Products

```http
GET /products
```

---

### 🔍 Get Product by ID

```http
GET /products/:id
```

---

### ✏️ Update Product

```http
PUT /products/:id
```

**Body:**

```json
{
  "price": 899
}
```

---

### ❌ Delete Product

```http
DELETE /products/:id
```

---

## 📮 Example CURL Requests

```bash
# Create
curl -X POST http://localhost:3000/products \
 -H "Content-Type: application/json" \
 -d '{"name":"Mouse","price":999}'

# Read all
curl http://localhost:3000/products

# Read one
curl http://localhost:3000/products/<id>

# Update
curl -X PUT http://localhost:3000/products/<id> \
 -H "Content-Type: application/json" \
 -d '{"price":899}'

# Delete
curl -X DELETE http://localhost:3000/products/<id>
```

---

## 📚 References

- [Express.js Docs](https://expressjs.com/)
- [Mongoose Docs](https://mongoosejs.com/)
- [MongoDB Manual](https://www.mongodb.com/docs/manual/)

---

## 📌 License

MIT License — free to use for educational/demo purposes.

---

Built with ❤️ using Node.js, Express & MongoDB.
