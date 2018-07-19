/*
 *
 * Title: simple node server
 * Description: run node server with a simple server node program
 * Author: Achmad Anhar Anggoro
 * Created_at: 03-07-2017
 * Updated_at: 19-07-2017
 *
 */

// Dependencies
const http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

// The server should respond to all request with a string
var server = http.createServer(function(req, res){
  
  // Parse the url
  var parsedUrl = url.parse(req.url, true);

  // Get the path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Send the response
  res.end('Hello World!\n');

  // Get query string as an object
  var queryObjectString = parsedUrl.query

  // get http method
  var method = req.method.toLowerCase();

  // get headers as an object
  var headers = req.headers;

  //get payload, if any
  var decoder = new StringDecoder('utf-8');
  var buffer = '';

  req.on('data', function(data){
    buffer += decoder.write();    
  });

  req.on('end', function() {
    buffer += decoder.end();

    // Send the response
    res.end('Hello World!\n');

    // Log the request/response
    console.log('Request received with this payload: ', buffer);
  });	  

  // Log the request/response
 // console.log('Request received on path: '+ trimmedPath + 'with method ' + method + 'and with these query string parameters ', queryObjectString);

 // log the request headers
 console.log("Request received with these headers: ", headers);
});

// Start the server, and have it listenning on port 3000
server.listen(3000, function(){	
  console.log("The server is listenning on port 3000");
});
