/**
 * 
 * Title: count http request
 * Description: When your backend code is calling external APIs 
 *              you may want to measure particular request time 
 *              to identify bottlenecks
 * 
 * created_at: 21-7-18
 * updated_at: 21-7-18
 */

//  Depedencies
var request = require('request');

let start_time = new Date().getTime();

request.get('https://google.com', function(err, response){
    
    console.log('time elapsed : ' + new Date().getTime() - start_time);   
});
