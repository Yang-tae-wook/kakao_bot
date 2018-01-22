var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//test
app.use(bodyParser.json());
app.get('/',function(req,res){
	res.send('Hello World');
});

app.get('/keyboard',function(req,res){ // setting keyboard for first open
  let keyboard = {
    "type" : "text"
    /*
    or button, like this
    "type" : "buttons",
    "buttons" : ["btn 1", "btn 2", "btn 3"]
    */
  };
  res.send(keyboard);
});

app.listen(3000,function(){
  console.log('Connect 3000 port!')
});

