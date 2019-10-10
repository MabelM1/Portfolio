const express = require("express");
var compression = require("compression");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("dist"));
app.use(compression());

app.get("/", (req, res) => {
	res.send("Hello Express!");
});

app.listen(PORT, () => {
	console.log("Listening on port " + PORT);
}
);
