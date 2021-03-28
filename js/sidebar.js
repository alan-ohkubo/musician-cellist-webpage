
// var mq = window.matchMedia('@media (max-width:767px)')


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

  // // TEST
  // function returnHome() {
  //   var x = document.getElementById("home").style.display = "";
  //   var y = document.getElementById("bio").style.display = "";
  //   if (y.style.display === "block") {
  //     y.style.display = "none"
  //   }
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }


  function returnHome() {
    document.getElementById('bio').style.display = "none";
    document.getElementById('teaching').style.display = "none";
    document.getElementById('listen').style.display = "none";
    document.getElementById('contact').style.display = "none";

    document.getElementById('home').style.display = "block";
  }

  // function openBio() {
  //   document.getElementById('home').style.display = "none";
  //   document.getElementById('teaching').style.display = "none";
  //   document.getElementById('listen').style.display = "none";
  //   document.getElementById('contact').style.display = "none";

  //   document.getElementById('bio').style.display = "block";
  // }

 

// SIDEBAR -SHOW DIVs
function openBio() {
  var x = document.getElementById("bio");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
//   // https://www.tutorialspoint.com/how-to-hide-a-div-in-javascript-on-button-click
}

function openTeaching() {
  var y = document.getElementById("teaching");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}