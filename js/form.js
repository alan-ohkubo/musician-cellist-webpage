// function validateForm() {
//     var x = document.forms["contactform"]["user_name"].value;
//     var y = document.forms["contactform"]["user_email"].value;
//     var z = document.forms["contactform"]["user_emailconfirm"].value;
//     if ( x == "" && y === z ) {
//         alert("Please make sure you've filled out your name and that your email addresses match.");
//         return false;
//     }
// }

// function formSubmit() {
//     if ( validateForm = true ) {
//         alert("Thank you for your message!");
//     }
// }

function formSubmit() {
    var guest = document.getElementById('name').valueOf;
    document.getElementsbyId('feedback').innerHTML = "<h2>Thank you for your message, ${guest}.</h2>";
}