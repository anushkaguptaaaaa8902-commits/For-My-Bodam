const passwordInput =
document.getElementById("passwordInput");

const wrongPassword =
document.getElementById("wrongPassword");

const movie =
document.getElementById("movie");

const passwordScreen =
document.getElementById("passwordScreen");

const audio =
document.getElementById("musicPlayer");

function unlockWebsite(){

  const password =
  passwordInput.value.trim();

  if(password === "Mi_amor"){

    passwordScreen.style.display = "none";
    movie.style.display = "block";

    document.body.style.overflow = "hidden";

    startMovie();

  }else{

    wrongPassword.innerHTML =
    "❌ Not this one...<br>" +
    "Try our little secret ❤️";

    passwordInput.value = "";

  }
}
const scenes =
document.querySelectorAll(".scene");

const songList = [

  {
    file:"varoon.mp3",
    start:16,
    end:97,
    scene:1
  },

  {
    file:"dooron.mp3",
    start:169,
    end:215,
    scene:2
  },

  {
    file:"milke.mp3",
    start:13,
    end:32,
    scene:3
  },

  {
    file:"varoon.mp3",
    start:221,
    end:250,
    scene:4
  }

];

let songIndex = 0;
let stopTimer = null;

function playCurrentSong(){

  const song =
  songList[songIndex];

  audio.pause();

  audio.src =
  "music/" + song.file;

  audio.currentTime =
  song.start;

  audio.play().catch(()=>{

    document.body.addEventListener(
      "click",
      ()=>audio.play(),
      {once:true}
    );

  });

  if(stopTimer)
    clearTimeout(stopTimer);

  stopTimer = setTimeout(()=>{

    audio.pause();
    audio.currentTime = 0;

    nextSong();

  },(song.end-song.start)*1000);

}
function showScene(number){

  scenes.forEach(scene=>{
    scene.style.display = "none";
  });

  if(number < scenes.length){

    scenes[number].style.display = "block";

    scenes[number].classList.remove("playScene");

    void scenes[number].offsetWidth;

    scenes[number].classList.add("playScene");

  }
}


function startMovie(){

  songIndex = 0;

  showScene(0);

  setTimeout(()=>{

    showScene(1);

    playCurrentSong();

  },3500);

}


function nextSong(){

  songIndex++;

  if(songIndex >= songList.length){

    showScene(5);

    document.body.style.overflow = "auto";

    setTimeout(()=>{

      showScene(6);

    },11000);

    return;
  }

  const sceneMap = [
    1,
    2,
    4,
    5
  ];

  showScene(sceneMap[songIndex]);

  playCurrentSong();

}
document.addEventListener(
  "keydown",
  function(e){

    if(e.key === "Enter"){

      if(
        passwordScreen.style.display !== "none"
      ){
        unlockWebsite();
      }

    }

  }
);


window.addEventListener(
  "beforeunload",
  function(){

    audio.pause();

  }
);
/* BOYFRIEND DAY LETTER */

function openBoyfriendLetter(){

  const opening =
    document.querySelector(".letterOpening");

  const letter =
    document.querySelector(".boyfriendLetterBox");

  opening.classList.add("hide");

  setTimeout(()=>{

    letter.classList.add("show");

  },700);

}
function showBoyfriendLetter(){

  const section =
    document.querySelector(".boyfriendLetterScene");

  if(section){

    section.style.display = "flex";

    section.scrollIntoView({
      behavior:"smooth"
    });

  }

}