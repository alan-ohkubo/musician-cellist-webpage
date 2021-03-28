function formSubmit() {
    if (mail != mailconfirm) {
        console.log()
        document.write("<p>Your email entries do not match</p>");
    }
    
    alert('Thank you for the message. I look forward to getting in touch!')
}




// array

const userSubmisson = ["user_name","user_email","user_interest","user_message"];
console.log(userSubmisson);