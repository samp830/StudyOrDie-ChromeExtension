
var twilio = require('twilio');
var client = new twilio.RestClient('AC8e8ff330215b74fc8dc23470b01237d6', 'b387592700e8e64942b0a70c25c6ab79');

client.sms.messages.create({
    to:['+19174550413','+13475997272'],
    from:'13476258837',
    body:'HELLLLLOOOO'
}, function(error, message) {
    if (!error) {
        console.log('Success! The SID for this SMS message is:');
        console.log(message.sid);
 
        console.log('Message sent on:');
        console.log(message.dateCreated);
    } else {
        console.log('ERROR');
    }
});

