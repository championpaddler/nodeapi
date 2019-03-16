var express = require('express');
var  bodyParser = require('body-parser');
 var cors = require('cors');

var hrgrouteshandler = require('./routes/foss');


var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/api', hrgrouteshandler);


app.use('/*', function(req,res){
  res.send("Api is working");
});


app.listen(process.env.PORT || 3000, function(){
});