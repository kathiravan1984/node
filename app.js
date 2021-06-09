const express = require("express");
var cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.post("/newproduct", (req, res) => {
    console.log("in");
    console.log(JSON.stringify(req.body));
    res.send("success");
});
app.listen(4000, () => console.log("listerning on port 4000"));
