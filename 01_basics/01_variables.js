const accountId = 1234
let emailId = "rahul@google.com"
var accountPassword = 1234
accountCity = "Yamunanagar"
let accountState;

// accounID = 44 //Not allowed

emailId = "rahul@apple.com"
accountPassword = 12345
accountCity = "Banglore"


/*
Prefer not to use var
because of issue in block scope and functional scope.
*/

console.log(accountId);
console.table([accountId, emailId, accountPassword, accountCity, accountState])
