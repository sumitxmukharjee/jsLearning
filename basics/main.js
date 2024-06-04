const accountId = 14453
let accountEmail = "sumit@microsoft.com"
var accountPassword = "12345"

accountCity = "Jaipur"
let accountState;

// if you leave a word without defining that's undefined.

// accountId = 2

// console.log(accountId) // not allowed

accountEmail = "sumit@yahoo.com"
accountPassword = "212121"
accountCity = "Gurugram"
console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope.
*/


console.table([accountId, accountEmail, accountPassword,accountCity,accountState])