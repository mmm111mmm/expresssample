const express = require('express')
const PORT = process.env.PORT || 5000

var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(PORT);
  console.log('Express started on port ' + PORT);
}
