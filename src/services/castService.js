const Cast = require("../models/cast");

exports.create = (castData) => {
    return Cast.create(castData);
}