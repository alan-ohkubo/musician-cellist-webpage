
var mq = window.matchMedia('@media (max-width:767px)')


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("sideNav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "auto";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  // TEST
  // function openBio() {
  //   var x = document.getElementById("bio").style.display = "";
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }

// SIDEBAR -SHOW DIVs
function openBio() {
  var x = document.getElementById("bio");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  // https://www.tutorialspoint.com/how-to-hide-a-div-in-javascript-on-button-click
}

function openTeaching() {
  var y = document.getElementById("teaching");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}