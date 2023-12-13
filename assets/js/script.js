var notepadModal = document.getElementById('notepadModal');
var aboutModal = document.getElementById('aboutModal');
var contactModal = document.getElementById('contactModal');
var donateModal = document.getElementById('donateModal');
var dosModal = document.getElementById('dosModal');

function toggleStartMenu() {
    var startMenu = document.getElementById('startMenu');
    startMenu.classList.toggle('show');
}

function playStartupSound() {
    var audio = new Audio('/assets/sounds/startup.mp3');
    audio.play();
}

window.onload = function () {
    playStartupSound();
};

function openNotepad() {
    notepadModal.style.display = 'block';
    dosModal.style.display = 'none';
    aboutModal.style.display = 'none';
    contactModal.style.display = 'none';
    donateModal.style.display = 'none';
}

function checkNotepad() {
    if (document.getElementById('note').value.includes('code')) {
        document.getElementById('note').style.color = 'green';
    } else {
        document.getElementById('note').style.color = 'black';
    }
}

function closeNotepad() {
    notepadModal.style.display = 'none';
}

function openDos() {
    dosModal.style.display = 'block';
    notepadModal.style.display = 'none';
    aboutModal.style.display = 'none';
    contactModal.style.display = 'none';
    donateModal.style.display = 'none';
}

function closeDos() {
    dosModal.style.display = 'none';
}

function openAboutModal() {
    toggleStartMenu();
    aboutModal.style.display = 'block';
    notepadModal.style.display = 'none';
    dosModal.style.display = 'none';
    contactModal.style.display = 'none';
    donateModal.style.display = 'none';
}

function closeAboutModal() {
    aboutModal.style.display = 'none';
}

function openContactModal() {
    toggleStartMenu();
    contactModal.style.display = 'block';
    notepadModal.style.display = 'none';
    dosModal.style.display = 'none';
    aboutModal.style.display = 'none';
    donateModal.style.display = 'none';
}

function closeContactModal() {
    contactModal.style.display = 'none';
}

function openDonateModal() {
    toggleStartMenu();
    donateModal.style.display = 'block';
    notepadModal.style.display = 'none';
    dosModal.style.display = 'none';
    aboutModal.style.display = 'none';
    contactModal.style.display = 'none';
}

function closeDonateModal() {
    donateModal.style.display = 'none';
}

function openGitHub() {
    window.open("https://github.com/KneesDev", "_blank");
}

function openTwitter() {
    window.open("https://twitter.com/TheRealKnees", "_blank");
}

function openDiscord() {
    window.open("https://discord.com/users/779951278091534346", "_blank");
}

function openShutdown() {
    toggleStartMenu();
}

function updateClock() {
    const timeElement = document.getElementById('time');
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const timeString = `${hours}:${minutes} ${amPm}`;
    timeElement.textContent = timeString;
}
setInterval(updateClock, 1000);

var musicPlayer = new Audio('/assets/sounds/remember.m4a');
var isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        musicPlayer.pause();
        musicPlayer.loop = false;
        document.getElementById('musicIcon').src = '/assets/icons/paused.png';
    } else {
        musicPlayer.play();
        musicPlayer.loop = true;
        document.getElementById('musicIcon').src = '/assets/icons/playing.png';
    }
    isPlaying = !isPlaying;
}

dragElement(document.getElementById("notepadModal"));
dragElement(document.getElementById("dosModal"));
dragElement(document.getElementById("projectsModal"));
dragElement(document.getElementById("aboutModal"));
dragElement(document.getElementById("contactModal"));
dragElement(document.getElementById("donateModal"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}