

/* Set the width of the sidebar to 200px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("sideNav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "auto";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

// NAVIGATION BAR, Hide & Show Divs

function hideAll() {
  elements = document.querySelectorAll('div.page');
  for ( let i = 0; i < elements.length; i++ ) {
    elements[i].style.display = 'none';
  }
}

// The following code needs to be revised to follow DRY principle

function showHome() {
  hideAll();
  document.getElementById("home").style.display = "block";
}

function showBio() {
  hideAll();
  document.getElementById("bio").style.display = "block";
}

function showTeaching() {
  hideAll();
  document.getElementById("teaching").style.display = "block";
}

function showMedia() {
  hideAll();
  document.getElementById("media").style.display = "block";
}

function showContact() {
  hideAll();
  document.getElementById("contact").style.display = "block";
}