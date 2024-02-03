const mongoose = require('mongoose');
const User = require("../models/user");

exports.register = async (userData) => {
    const user =await User.findOne({email: userData.email});
    console.log(user);
    if (user) {
        throw new mongoose.MongooseError("User already exists")
    }
    User.create(userData);
}