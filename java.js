document.getElementById("btn")
    
function verify(){
        alert("For Order Scroll Down and Enter your Grocery List")
}
 src="https://smtpjs.com/v3/smtp.js">
 function sendEmail(){
    Email.send({
    Host  :   "smtp.gmail.com",
    Username : "sheheryar.ali876@gmail.com",
    Password : "03077854186rana",
    To : 'sherry327676@gmail.com',
    From : document.getElementById("email").value,
    Subject : "Grocery list",
     Body :"Name"+ document.getElementById("name").value
          +"<br>Email"+ document.getElementById("email").value
          +"<br>Number"+ document.getElementById("phone").value
          +"<br>Adress"+ document.getElementById("Adress").value
          +"<br>Grocery List"+ document.getElementById("list").value
 
}).then(
  message => alert("Message was send Successfully:")
);
 }
    
