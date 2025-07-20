const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    age: Number
}, { timestamps: true });

userSchema.pre("save", async function (this) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});


userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};



module.exports = mongoose.model("User", userSchema);
