window.addEventListener('load',init);

const levels = {
    easy: 6,
    medium: 4,
    hard: 3
}

const currentLevel = levels.easy;

let time = currentLevel;
let currentscore = 0;
let isPlaying;
let high
// DOM element

const wordInput = document.getElementById("word-input");
const currentWord = document.getElementById("current-word");
const scooreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const message = document.getElementById('message');
const seconds = document.getElementById('seconds');
const highScore = document.getElementById('highscore');

const words = [
    "hat",
    "river",
    "lucky",
    "statue",
    "generate",
    "stubborn",
    "cocktail",
    "runaway",
    "Codeloccol",
    "joke",
    "developer",
    "establishment",
    "hero",
    "ADU",
    "kalilinux",
    "ethical",
    "hacking",
    "Googlestudents",
    "javascript",
    "nutrition",
    "revolver",
    "echo",
    "siblings",
    "investigate",
    "horrendous",
    "symptom",
    "Covid19",
    "laughter",
    "magic",
    "master",
    "SmartFada",
    "Niger 2.0",
    "space",
    "definition",
    "Literally",
    "Abdoulwahab",
    " Irregardless",
    "Nonplussed",
    "Niamey"

];

// init function

function init(){
    seconds.innerHTML = currentLevel

    highScore.innerHTML = localStorage.getItem('high')

    wordInput.addEventListener('input', startMatch)
}

function startGame(button){
  if (button.innerHTML == "Exit Game") {
      document.location.reload()
  }else{
      button.innerHTML = "Exit Game"
      setInterval(countdown, 1000);

      setInterval(checkStatus, 50);
  }

}

function removeScore(){
    localStorage.clear()
    highScore.innerHTML = ''
}

function startMatch(){
    if (matchWords()){
        isPlaying == true
        time = currentLevel +1
        showWord(words)
        wordInput.value = ''
        currentscore++
        if(currentscore > localStorage.getItem('high', high)){
            localStorage.setItem('high', currentscore)
            highScore.innerHTML = localStorage.getItem('high')
        }
    }

    scooreDisplay.innerHTML = currentscore
    highScore.innerHTML = localStorage.getItem('high')
}


function showWord(words){
 // generate random
    const randIndex = Math.floor(Math.random()* words.length)
    currentWord.innerHTML =words[randIndex]
}

function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = "Bravo!"
        return true
    }
    else{
        message.innerHTML = ''
        return false
    }
}

function countdown(){
    if(time > 0){
        time--;
    }else if(time == 0){
        isPlaying = false;
        document.getElementById('startgame').innerHTML = "start Game"
        document.location.reload()
    }

    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying && time === 0) {
        message.innerHTML = " Game Over";
        score = 0;
        scooreDisplay.innerHTML = 0;
    }

}

