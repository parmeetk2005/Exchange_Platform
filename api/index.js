// make server
const express = require("express");
const app = express();


const orderRoutes = require("./routes/order");

app.use(express.json()); 


app.use("/api/v1", orderRoutes);


app.listen(3000, () => console.log("Server started"));

