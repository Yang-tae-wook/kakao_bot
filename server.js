
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


const fs = require('fs');
const article = fs.readFileSync("out.txt");
lineArray = article.toString().split(' ');


app.post('/message', function(req,res){
  let user_key = decodeURIComponent(req.body.user_key); // user's key
  let type = decodeURIComponent(req.body.type); // message type
  let content = decodeURIComponent(req.body.content); // user's message
  console.log(user_key);
  console.log(type);
  console.log(content);


	if('message' == 'nxt' || 'message' == '앤엑스티'){
	  let answer = {
	    "message":{
	      "text":"your message is arrieved server : "+lineArray // in case 'text'
	    }
	  }
	  res.send(answer);
	}
});

app.listen(3000,function(){
  console.log('Connect 3000 port!')
});
