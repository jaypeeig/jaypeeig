# semaphore-nodejs
Small client library to use [semaphore.co](http://semaphore.co) API in node.js

##Usage

Install the npm in your project

```bash
> npm install semaphore-sms
```

Example usage:

```javascript
var semaphore = require('semaphore-sms');

semaphore.set_api_key("...");

semaphore.send_sms("09000000000", "Test message!", "A Sender", function(response) {
  
  if (response.status === 'success') {
    //Message sent!
  }
  
})
```

##Sending SMS message(s)

The method `semaphore.send_sms` is used to an SMS to between 1 and 20 recipient phone numbers.

```javascript
semaphore.send_sms(numbers, message, sender, callback)
```

| Parameter   | Type             | Description |
| ----------- | ---------------- | --------------------- |
| numbers     | String or Array  | A phone number or an array of phone numbers to be the recipients of the SMS (20 max) |
| message     | String           | The message body, 140 chars max |
| sender      | String           | The sender name |
| callback    | Function         | A callback function. The only param will be a JSON object returned from the semaphore API |

##Tests

Add your api key to tests/test.js then run `npm test`