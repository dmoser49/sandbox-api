var express  = require('express')

/*
Even though it looks like the endpoints are localhost:4000/
or localhost:4000/:messageNumber, they are actually
localhost:4000/messages/:messageNumber and localhost:4000/messages.
Using 'app.use('/messages',require('./API/messages-api')', we
automcatically add the /messages before the following.
*/

/*
This will function as our database, normally you will write and query to your
database instead of using an array.  For educational purposes, they work the
same.
*/
var messagesStorage = []

var router = module.exports = express.Router();

  /*
  This endpoint checks to see if messagesStorage has any messages.  If it does,
  it sends back an array of all the messages.  Otherwise it sends back a message
  saying there are no messages
  */
  router.get('/', function(req, res){
    var count = 1;

    if( messagesStorage.length ) {
      res.send( messagesStorage.map( function (message) {
        return { number: "This is message at messages/" + count++, text: message}
      }) )
      count = 1
    } else {
      res.send( 'There are no messages.  Make a POST request to populate.' )
    }

    res.end()
  });

  /*
  This pushes grabs the message attribute from req.body and pushes it into the array 
  */
  router.post('/', function(req, res){
    messagesStorage.push(req.body.message)
    res.send('Message sent, try making a GET request to see it')
  });



  //This grabs the message at index :messageNumber from the messagesStorage array 
  router.get('/:messageNumber', function(req, res){
    //this is so the endpoint starts a 1
    var messageAtIndex = messagesStorage[req.params.messageNumber - 1]

    if( messageAtIndex ) {
      res.send( messageAtIndex )
    } else {
      res.send( 'There are no messages at this index' )
    }

    res.end()
  });

  /*
  This grabs the message at index :messageNumber from the messagesStorage array
  and updates it
  */
  router.put('/:messageNumber', function(req, res){
    var messageAtIndex = messagesStorage[req.params.messageNumber - 1]

    if( messageAtIndex ) {
      var old = messageAtIndex
      messagesStorage[req.params.messageNumber - 1] = req.body.message
      res.send( 'udated from ' + old + " to " + messagesStorage[req.params.messageNumber - 1])
    } else {
      res.send( 'There are no messages at this index' )
    }

    res.end()
  });

  /*
  This grabs the message at index :messageNumber from the messagesStorage array
  and deletes it
  */
  router.delete('/:messageNumber', function(req, res){
    //this is so the endpoint starts a 1
    var messageAtIndex = messagesStorage[req.params.messageNumber - 1]

    if( messageAtIndex ) {
      var old = messageAtIndex
      messagesStorage.splice(req.params.messageNumber - 1, 1)
      res.send( 'deleted' + old )
    } else {
      res.send( 'There are no messages at this index' )
    }

    res.end()
  });
  
