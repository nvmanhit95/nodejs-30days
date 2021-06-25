var mail = 'nvmanh.it95@gmail.com';
var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var res = mail.match(pattern);
if (res) {
  console.log("Valid email address")
} else {
  console.log("Invalid email address")
}