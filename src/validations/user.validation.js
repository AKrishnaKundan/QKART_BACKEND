const Joi = require("joi");
const { password, objectId } = require("./custom.validation");

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement request validation for "/v1/users/:userId" endpoint
/**
 * Example url: `/v1/users/:userId`
 * Validate the "userId" url *params* field. "userId" value should be a 
 * - string
 * - valid Mongo id -> Use the helper function in src/validations/custom.validation.js
 */
const getUser = {
};


module.exports = {
  getUser,
};
