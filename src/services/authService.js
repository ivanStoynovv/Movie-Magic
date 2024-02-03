const mongoose = require('mongoose');
const User = require("../models/user");

exports.createUser = (userData) => User.create(userData);