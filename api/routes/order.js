//create router

const express = require("express");
const router = express.Router();
const { postPlaceOrder, getOrderBook, getRecentTrades } = require("../controller/order");


router.post("/", postPlaceOrder);
router.get("/depth",getOrderBook); // singleton pattern -> class has only one object
router.get("/trades", getRecentTrades);


module.exports = router;


