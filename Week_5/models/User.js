const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    age: Number
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
