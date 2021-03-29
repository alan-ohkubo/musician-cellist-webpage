
// NAVIGATION BAR

function hideAll() {
  elements = document.querySelectorAll('div.page');
  for ( let i = 0; i < elements.length; i++ ) {
    elements[i].style.display = 'none';
  }
}

function show() {
  style.display = "block";
}

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

// SIDE NAV MENU

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

// VIDEO PLAYER

function startplayer() {
  player = document.getElementById("video-player");
  player.controls = false;
}

function playVid() {
  player.play();
}

function pauseVid() {
  player.pause();
}

function stopVid() {
  player.pause();
  player.currentTime = 0;
}

function changeVol() {
  player.volume=document.getElementById("change-volume").value;
}


 
