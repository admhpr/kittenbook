
//get user's name.
var userName = prompt ('Hello,what\'s your name?');

// get user's phone number.

var phoneNumber = prompt ('Hello ' + userName + ', what\'s your phone number?');








function getLocation(phoneNumber) {
  // Create the phone number pattern.
  var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
  // Get matches from phoneNumber
  var phoneMatches = phoneNumberPattern.exec(phoneNumber);
  var areaCode = phoneMatches[1];
  return areaCode;
}

//return the values you want to use
//don't forget to invoke your functions
areaCode = getLocation(phoneNumber);


var userLocation = kbValues.areaCodes[areaCode];

  


// create a varable to store the output.
// var output ='<h2> Hey, ' + userName + ' what\'s the weather like in  ' + userLocation + '</h2>';

// insert the output into the web page 
// document.body.innerHTML =  output;
