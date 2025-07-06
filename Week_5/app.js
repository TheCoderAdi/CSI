require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB error:", err));


// Create User
app.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        const saved = await user.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Read All Users
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Read Single User
app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update User
app.put("/users/:id", async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).send("User not found");
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete User
app.delete("/users/:id", async (req, res) => {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).send("User not found");
        res.send("User deleted successfully");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
