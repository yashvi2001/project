const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const path = require("path");
const fpath = path.join(__dirname, "data.json");
let rawdata = fs.readFileSync(fpath);
let data = JSON.parse(rawdata);

app.use(cors());
//route for customer
app.get("/api/customer", (req, res) => {
  try {
    const { user } = data;
    console.log(user);
    res
      .json({
        data: user,
      })
      .status(200);
  } catch (error) {
    res.json(error).status(400);
  }
});
//route for order
app.get("/api/order", (req, res) => {
  try {
    const { order_id, restaurant, items } = data;
    console.log(items);
    res
      .json({
        data: { order_id, restaurant, items},
      })
      .status(200);
  } catch (error) {
    res.json(error).status(400);
  }
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Listening at port ${port}`)
});
