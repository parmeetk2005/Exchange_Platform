const OrderBook = require("../service/order");
let {publisher} = require("../../shared/index");

let ob = new OrderBook("BTCUSD");   // global object

module.exports.postPlaceOrder = async (req, res) => {
    // create a new order for user who is placing an order
    let{side, type, price, quantity, user} = req.body;
    let response = ob.placeOrder(side, type, price, quantity, user);

console.log(response);
    await publisher.connect()
    publisher.PUBLISH("book_update", JSON.stringify(response.book));

    res.json({
        event: "orderUpdate",
        data:{
            orderReport: response.result,
            book: response.book
        }
    })
}
