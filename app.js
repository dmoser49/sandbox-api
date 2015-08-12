//We need express unless we want to write vanilla node
var express = require('express')
//Instantiates the server
var app = express()
//Sets the port that we use for localhost.
var port = process.env.PORT || 4000
var host = process.env.HOST || 'http://localhost:' + port


/*
This allows express to actually read the request that is
sent from postman.  If we didn't have this, all of the info
from x-www-form-urlencoded in postman wouldn't be accessible.
*/
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


var router = express.Router();


//API endpoint integration
/*
This is magic that you will learn about soon
Basically what is happening here is we are taking
any requests that are for the endpoint /messages.

The require statment grabs the info from the file
'./api/messages-api' and makes it availible here.
What happens is when /messages is requested, express
checks the file in require for what to do. 
*/
app.use('/messages',require('./api/messages-api'));


//Now express is listening for requests 
app.listen(port)
console.log("Listening on port", port)
