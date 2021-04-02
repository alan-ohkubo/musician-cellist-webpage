// ====================================
// NAVIGATION Hide/Show Desired <divs>
// ====================================

function hideAll() {
  elements = document.querySelectorAll('div.page');
  for ( let i = 0; i < elements.length; i++ ) {
    elements[i].style.display = 'none';
  }
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

// ====================================
// COLLAPSIBLE SIDE NAVIGATION MENU
// ====================================

/* Set the width of the sidebar to 200px */
function openNav() {
    document.getElementById("sideNav").style.width = "200px";
  }
  
  /* Set the width of the sidebar to 0 */
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
  }


// VIDEO PLAYER =========================================================================

// document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
//   var player;


// function startplayer() {
//   player = document.getElementById("video-player");
//   player.controls = false;
// }

// function playVid() {
//   player.play();
// }

// function pauseVid() {
//   player.pause();
// }

// function stopVid() {
//   player.pause();
//   player.currentTime = 0;
// }

// function changeVol() {
//   player.volume=document.getElementById("change-volume").value;
// }


 
