const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { cartService } = require("../services");

/**
 * Fetch the cart details
 *
 * Example response:
 * HTTP 200 OK
 * {
 *  "_id": "5f82eebd2b11f6979231653f",
 *  "email": "rohinrohin@gmail.com",
 *  "cartItems": [
 *      {
 *          "_id": "5f8feede75b0cc037b1bce9d",
 *          "product": {
 *              "_id": "5f71c1ca04c69a5874e9fd45",
 *              "name": "ball",
 *              "category": "Sports",
 *              "rating": 5,
 *              "cost": 20,
 *              "image": "google.com",
 *              "__v": 0
 *          },
 *          "quantity": 2
 *      }
 *  ],
 *  "paymentOption": "PAYMENT_OPTION_DEFAULT",
 *  "__v": 33
 *
 * @param {User} req.user
 *
 */
const getCart = catchAsync(async (req, res) => {
  const cart = await cartService.getCartByUser(req.user);
  res.send(cart);
});

/**
 * Add a product to cart
 *
 * @param {string} req.body.productId
 * @param {string} req.body.quantity
 * @param {User} req.user
 *
 */
const addProductToCart = catchAsync(async (req, res) => {
  const cart = await cartService.addProductToCart(
    req.user,
    req.body.productId,
    req.body.quantity
  );

  res.status(httpStatus.CREATED).send(cart);
});

/**
 * Update product quantity in cart
 * - If updated quantity > 0, 
 * --- update product quantity in user's cart
 * --- return "200 OK" and the updated user object
 * - If updated quantity == 0, 
 * --- delete the product from user's cart
 * --- return "204 NO CONTENT"
 * 
 * Example responses:
 * HTTP 200 - on successful update
 * HTTP 204 - on successful product deletion
 * 
 * @param {string} req.body.productId
 * @param {string} req.body.quantity
 * @param {User} req.user
 *
 */
const updateProductInCart = catchAsync(async (req, res) => {
});

/**
 * Checkout
 *
 * Example responses:
 *
 * HTTP 200
 * HTTP 404
 * HTTP 500
 * @param {User} req.user
 *
 */
const checkout = catchAsync(async (req, res) => {
  await cartService.checkout(req.user);
  return res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getCart,
  addProductToCart,
  updateProductInCart,
  checkout,
};
