const express = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const cartValidation = require("../../validations/cart.validation");
const catchAsync = require("../../utils/catchAsync");
const { cartController } = require("../../controllers/");

const {updateProductInCart} = require("../../services/cart.service")

const router = express.Router();

router.get("/", auth, cartController.getCart);

router.post(
  "/",
  auth,
  validate(cartValidation.addProductToCart),
  cartController.addProductToCart
);

router.put(
  "/",
  auth,
  validate(cartValidation.addProductToCart),
  cartController.updateProductInCart
  );

module.exports = router;
