const express = require("express");
const MenRanking = require("./model/mens");
const app = express();
require("./db/connection");
const MensRanking = require("./model/mens");
const port = process.env.PORT || 3000;
const router = require('./routers/route')
app.use(express.json());

app.use(router)

app.get("/", async (req, res) => {
  res.send("hello from tha home");
});

app.listen(port, () => {
  console.log("console  is live at port no 3000");
});
