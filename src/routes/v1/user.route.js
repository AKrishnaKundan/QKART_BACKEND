const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");
const { crossOriginEmbedderPolicy } = require("helmet");

const router = express.Router();
const validateUser = validate(userValidation.getUser); 

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement a route definition for `/v1/users/:userId`
router.get("/:userId", validateUser, userController.getUser);
module.exports = router;
