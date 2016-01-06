var semaphore = require('../index');

var api_key = "";
var single_phone_number = "";
var array_of_phone_numbers = [''];

semaphore.set_api_key(api_key);

console.log('testing single number')

semaphore.send_sms(single_phone_number, 'single message test successful!', 'Semaphore', function(response){
  
  console.log(typeof response);
  console.log("\n");
  console.log(response);
  
})

console.log('testing bulk numbers')

semaphore.send_sms(array_of_phone_numbers, 'bulk message test successful!', 'Semaphore', function(response){
  
  console.log(typeof response);
  console.log("\n");
  console.log(response);
  
})