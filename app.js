const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const app = require('./api/index.js')

// middleware

const boot = async () => {
    await mongoose
        .connect(config.mongodb.uri, {
            user: config.mongodb.username,
            pass: config.mongodb.password,
            dbName: config.mongodb.dbName,
            retryWrites: true,
        })
        .then(() => app.listen(config.port))
        .then(() => console.log(`Server is listening on port ${config.port}`))
        .catch((err) => console.log(err));
};

boot();

//----config
