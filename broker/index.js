var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(`Hello from Broker\n ${JSON.stringify(process.env, null, 2)}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
