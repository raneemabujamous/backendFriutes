const express = require("express"); // require the express package
const app = express(); // initialize your express app instance
const cors = require("cors");
app.use(cors()); // after you initialize your express app instance
require("dotenv").config();
const axios = require("axios"); // require the package
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://raneem:0000@cluster0-shard-00-00.ivvf0.mongodb.net:27017,cluster0-shard-00-01.ivvf0.mongodb.net:27017,cluster0-shard-00-02.ivvf0.mongodb.net:27017/one?ssl=true&replicaSet=atlas-khqokz-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
const {
  postMethod,
  getpost,
  deleteMethod,
  update,
} = require("./controller/Curdcont");

const PORT = process.env.PORT;
const { getApidata } = require("./controller/apiData");
app.get("/getApi", getApidata);

app.post("/postMethod", postMethod);
app.delete("/delete:slug", deleteMethod);
app.get("/getpost", getpost);
app.put("/update:slug", update);

app.get("/", (req, res) => {
  res.send("test");
});
app.listen(PORT, () => {
  console.log(`listen ${PORT}`);
});
