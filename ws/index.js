// server
const { WebSocketServer } = require('ws');
let {subscriber} = require("../shared/index");
const wss = new WebSocketServer({ port: 8080 });    // broadcasting logic
let allsocket = [];
wss.on("connection", (socket) => {
    console.log("user connected")
    allsocket.push(socket);

    (async function orderBookUpdate() {
    await subscriber.connect();
    await subscriber.SUBSCRIBE("book_update", (message) => {
        // broadcasting
        let parsedMessage = JSON.parse(message);
        // console.log(parsedMessage);
        broadcast(JSON.stringify(parsedMessage))
    })
})() // IIFE -> IMMEDIATELT INVOKED FUNCTION EXPRESSION -> func. wrapped in paranthesis and called immediatelys
})

function broadcast(message){
    allsocket.forEach((s)=>{
        s.send(message);
    })
}