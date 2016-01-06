/**
 * Simple client library for semaphore.co
 */
 
var http = require('http')
var querystring = require('querystring')

var semaphore_host = 'api.semaphore.co'
var send_sms_path = '/api/sms'
var bulk_sms_path = '/v3/bulk_api/sms'

var api_key
var from

module.exports = {
  
  set_api_key: function(key) {
    api_key = key;
  },
  
  send_sms: function(number, message, from, callback) {
    
    var bulk = number.constructor === Array;
    var api_path = bulk ? bulk_sms_path : send_sms_path;
    
    if (bulk)
      number = number.join(',')
    
    var post_data = querystring.stringify({
      api: api_key,
      message: message,
      from: from
    })
    
    post_data += "&number=" + number
    
    var request = http.request({
      host: semaphore_host,
      path: api_path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': post_data.length
      }
    }, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
          callback(JSON.parse(chunk))
        });
    });

    // post the data
    request.write(post_data);
    request.end();
  }
  
}