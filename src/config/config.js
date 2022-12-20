const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

const DEFAULT_WALLET_MONEY = 500;
const DEFAULT_PAYMENT_OPTION = "PAYMENT_OPTION_DEFAULT";
const DEFAULT_ADDRESS = "ADDRESS_NOT_SET";

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().description("Mongo DB url").default("mongodb://127.0.0.1:27017/qkart")
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

console.log(envVars.NODE_ENV);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  // Set mongoose configuration
  mongoose: {
    url: envVars.MONGODB_URL + (envVars.NODE_ENV === "test" ? "-test" : ""),
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  default_wallet_money: DEFAULT_WALLET_MONEY,
  default_payment_option: DEFAULT_PAYMENT_OPTION,
  default_address: DEFAULT_ADDRESS
};
