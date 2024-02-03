const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash
});

userSchema.virtual("rePassword")
    .set(function (value) {
        if (value !== this.password) {
            throw new mongoose.MongooseError("Password mismatch")
        }
    })

const User = mongoose.model("User", userSchema);
module.exports = User;