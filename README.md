# Sandbox-API
Practice making http requests on your local machine

# Tutorial
This tutorial will explain how to use Postman to send requests to ourserver

### Setting up server
First clone down the sandpox-api repo

`git clone https://github.com/jmarthernandez/sandbox-api`

Next make sure that we are in the sandbox-api directory and run

`npm install`

What this does is install all of the required modules(things we need)
for our express server to run.  The main three are express and body-parser.
Express is a framework that lets us spin up servers very quickly.  Body-parser
allows our express server to read the requests that Postman will be sending

The last thing we need to do is run the command

`node app.js`

This will start our server.  Now we can make requests to it.

### Postman
Postman is availible as a chrome extension so go ahead and install that.

##Endpoints

```
GET localhost:4000/messages
  Returns an array of all the messages in the database
  
POST localhost:4000/messages/
  Adds a message to the database

GET localhost:4000/messages/:messageNumber
  Retrieves a message from database
  or returns an error stating message doesn't exist
  
PUT localhost:4000/messages/:messageNumber
  Updates a message to the database
  or returns an error stating message doesn't exist
  
Delete localhost:4000/messages/:messageNumber
  Deletes a specific message from the database
  or returns an error stating message doesn't exist
  
  ***** :messageNumber is an actual number.
```

## Request Time
In Postman we will be using x-www-form-urlencoded whenever we POST or PUT to our server.
Whenever we POST or PUT we will be using message as our key and whatever you want for the value.

Try playing around with the different HTTP methods and endpoints.  Also, there are comments throughout the
source code that give a little more context.

Have fun!
