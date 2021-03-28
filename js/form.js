function formSubmitMessage() {
    alert('Thank you for the message. I look forward to getting in touch!')
}

function formSubmit() {

}

// SLIDESHOW

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
    // Change image every 3000ms = 3 seconds
}