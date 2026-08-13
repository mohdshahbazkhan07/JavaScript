const accountId = 122
let accountEmail = "shazy@google.com"
var accountName = "shazy"

// accountId = 133 (cannot be changed cuz const)
accountEmail = "shazy12@google.com"
/*
do not use var cuz issue in functional and block scope
*/
accountName = "Shahbaz Khan"
console.table([accountEmail, accountName, accountId]);
