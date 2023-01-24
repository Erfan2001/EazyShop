const express = require("express");
const router = express.Router();

const {
  newOrder,
  getMyOrders,
  getSingleOrder,
} = require("../controllers/orderController");
const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/orders/myOrders").get(isAuthenticatedUser, getMyOrders);

module.exports = router;
