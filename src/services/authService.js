const mongoose = require('mongoose');
const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require("../lib/jwt");

const SECRET = 'gut%$#&675r55$#SS5d7uu754S#S##Wi67(**';

exports.register = async (userData) => {
    const user =await User.findOne({email: userData.email});
    console.log(user);
    if (user) {
        throw new Error("User already exists")
    }
    User.create(userData);
};

exports.login = async (email, password) => {
    const user = await User.findOne({email});

    if(!user) throw new Error ("Cannot find username or password");

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) throw new Error("Cannot find username or password");

    const payload = {
        _id: user._id,
        email: user.email,
    }

    const token = await jwt.sign(payload, SECRET, {expiresIn: '2h'});

    return token;
}