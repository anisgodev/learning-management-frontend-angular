const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/cs5610-sp20-angular-ass7'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
                         '/dist/cs5610-sp20-angular-ass7/index.html'));});
app.listen(process.env.PORT || 8080);
