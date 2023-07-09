var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(JSON.stringify(
    {
      method: req.method,
      url: req.url,
      hostname: req.hostname,
      headers: req.headers,
      body: req.body
    },
    null,
    2)
  );

  res.json({
    app: "Validator",
    ver: "1",
    env: process.env
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
