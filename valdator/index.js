var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json({
    app: "Validator",
    ver: "1",
    env: process.env
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
