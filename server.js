const express = require('express');
const PORT = 3000 || process.env.PORT;
const app = express();


app.get('/', function(req, res){
  res.send('hello world');
});


app.listen(PORT, function(){
  console.log('server up: ', PORT);
});
