const express = require("express");
const userRoute = require("./user.route");
const userController = require("../../controllers/user.controller");

const router = express.Router();

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Reroute all API requests beginning with the `/v1/users` route to Express router in user.route.js
console.log("router");
router.use("/users", userRoute);
module.exports = router;
