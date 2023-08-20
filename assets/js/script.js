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