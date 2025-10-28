class OrderBook{
    constructor(symbol = "BTCUSD"){     // what will user want that constructor will take symbol as input
        this.symbol = symbol,
        this.bids = [],
        this.ask = [],   // filled by market makers
        this._nextId = 1,
        this.lastTradedPrice = null;
    }

    // ----------------- helper function to generate unique ids -----------------
    _generateOrderId(){
        return this._nextId++;
    }

    // ----------------- helper function to sort -----------------
    _sort(sides){
        if(sides === "BUY"){
            this.bids.sort((a, b) =>{   // a and b are two objects being compared (from an array of objects of bids)
                if(a.price != b.price){   // if prices are not equal then sort but if equal then sort by timestamps
                    return b.price - a.price;  // descending order
                }
                else{
                    return a.timestamp - b.timestamp;  // ascending order of timestamp
                }
            }); // sort function in js is done by lexicographical order by default but if we dont want that we pass comparator function
        }
        else{
            if(sides === "SELL"){
                this.ask.sort((a,b)=>{
                    if(a.price != b.price){   // if prices are not equal then sort but if equal then sort by timestamps
                        return a.price - b.price;  // ascending order
                    }
                    else{
                        return a.timestamp - b.timestamp;  // ascending order of timestamp
                    }
                })
            }
        }
    }
    // ----------------- function to place order -----------------
    placeOrder(){

    }
    _marketMatch(){

    }
    _limitMatch(){
        
    }
}


// if a function or variable starts with _ it means it is private means only accessible within the class
//let orderBook = new OrderBook("BTCUSD");

//BUY ORDERS
let BTCUSDOrderBook = new OrderBook();
BTCUSDOrderBook.bids.push({
    orderId: 2,
    side: "BUY",
    type: "MARKET",
    price: 100,
    quantity: 10,
    timestamp: Date.now(),
    user: "Parmeet"
}) 

BTCUSDOrderBook.bids.push({
    orderId: 2,
    side: "BUY",
    type: "MARKET",
    price: 99,
    quantity: 10,
    timestamp: Date.now(),
    user: "Inder"
}) 

BTCUSDOrderBook.bids.push({
    orderId: 2,
    side: "BUY",
    type: "MARKET",
    price: 104,
    quantity: 10,
    timestamp: Date.now(),
    user: "Gurshan"
}) 
BTCUSDOrderBook._sort("BUY");
console.log(BTCUSDOrderBook.bids);

//SELL ORDERS
BTCUSDOrderBook.ask.push({
    orderId: 2,
    side: "SELL",
    type: "MARKET",
    price: 100,
    quantity: 10,
    timestamp: Date.now(),
    user: "Parmeet"
}) 

BTCUSDOrderBook.ask.push({
    orderId: 2,
    side: "SELL",
    type: "MARKET",
    price: 99,
    quantity: 10,
    timestamp: Date.now(),
    user: "Inder"
}) 

BTCUSDOrderBook.ask.push({
    orderId: 2,
    side: "SELL",
    type: "MARKET",
    price: 104,
    quantity: 10,
    timestamp: Date.now(),
    user: "Gurshan"
}) 
BTCUSDOrderBook._sort("SELL");
console.log(BTCUSDOrderBook.ask);

