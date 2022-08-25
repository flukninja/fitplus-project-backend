const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    activity: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    calories: {
        type: String,
        required: true,
    },
    note: {
        type: String,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

module.exports = mongoose.model("Blog", blogSchema);
