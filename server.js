// project setup
const express = require("express");
const app = express();


// sample route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// start server
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

