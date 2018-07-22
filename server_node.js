/*
*
*Title: create own server for practice
*
*created_at: 21-7-18 
*updated_at: 21-7-18
*/

// Depedencies
import { createServer } from 'http';

createServer(function(req, res){
   
    // write header with status ok, with content text.
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // show while request finish.
    res.end('Hello World');

}).listen(3000, function(){
    
    // status server listen on port 3000
    console.log("server listen port 3000");
});