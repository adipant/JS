const account_id = 101
let account_email = "simplenewuser@gmail.com"
var account_psswd = "12345"
account_city = "Delhi"

// account_id = 2 // not allowed

ccount_email = "s_user@gmail.com"
account_psswd = "6789"
account_city = "Mumbai"

console.log(account_id);

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([account_id, account_email, account_psswd, account_city]);