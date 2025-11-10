//create router

const express = require("express");
const router = express.Router();
const { postPlaceOrder } = require("../controller/order");


router.post("/order", postPlaceOrder);

module.exports = router;


