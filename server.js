const express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/js", express.static(__dirname + "/node_modules/popper.js/dist"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.get("/", (req, res) => {
	res.send("Hello Express!");
});

app.listen(PORT, () => {
	console.log("Listening on port " + PORT);
});

