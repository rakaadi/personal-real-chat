const express = require("express");
const router = express.Router();
const path = require("path");

switch (process.env.NODE_ENV) {
    case "production":
        router.get("*", (request, respond) => {
            respond.sendFile(path.join(__dirname, "client/build", "index.html"));
        })
        break;
    default:
        router.get("/", (request, respond) => {
            respond.send({ response: "Server is up and running" }).statusCode(200);
        })
        break;
}

module.exports = router;