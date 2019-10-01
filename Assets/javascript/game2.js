//Global Variables 
//-----------------------------------------------------------


//Array
const lorems = ['lorem', 'ipsum', 'dolor', 'sit',
    'amet', 'consectetur', 'adipiscing', 'elit', 'sed',
    'do', 'eiusmod', 'tempor', 'incididunt', 'ut',
    'labore', 'et', 'dolore', 'magna', 'aliqua',
    'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi',
    'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis',
    'aute', 'irure', 'dolor', 'reprehenderit', 'in',
    'voluptate', 'velit', 'esse', 'cillum', 'dolore',
    'eu', 'fugiat', 'nulla', 'pariatur', 'excepteur',
    'sint', 'occaecat', 'cupidatat', 'non', 'proident',
    'sunt', 'culpa', 'qui', 'officia', 'deserunt',
    'mollit', 'anim', 'id', 'est', 'laborum'];

var randomWord = "";
var lettersInWord = [];
var underscoreNum = 0;
var undersAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

var soundPlayer1 = new Audio('Assets/Wavs/BackgroundMuzak(MadebyAxel).wav');

//Functions  
//-----------------------------------------------------------
function startGame() {
    randomWord = lorems[Math.floor(Math.random() * lorems.length)];
    lettersInWord = randomWord.split("");
    underscoreNum = randomWord.length;

    guessesLeft = 9;
    wrongLetters = [];
    undersAndSuccesses = [];

    for (var i = 0; i < underscoreNum; i++) {
        undersAndSuccesses.push("_");
    }

    document.getElementById("underscores").innerHTML = undersAndSuccesses.join(" ");
    document.getElementById("guessesLeftNum").innerHTML = guessesLeft;
    document.getElementById("winsNum").innerHTML = winCount;
    document.getElementById("lossesNum").innerHTML = lossCount;

    console.log(randomWord);
    //console.log(lettersInWord);
    //console.log(underscoreNum);
    console.log(undersAndSuccesses);
    console.log(guessesLeft);

    //soundPlayer1.play();
}

function checkLetters(letter) {
    var isLetterInWord = false;

    for (var i = 0; i < underscoreNum; i++) {
        if (randomWord[i] == letter) {
            isLetterInWord = true;
        }
    }
    if (lettersInWord) {
        for (var i = 0; i < underscoreNum; i++) {
            if (randomWord[i] == letter) {
                undersAndSuccesses[i] = letter;
            }
        }
    }

    else {
        wrongLetters.push(letter);
        guessesLeft--;
        //console.log(guessesLeft);
    }

    console.log(undersAndSuccesses);
    //console.log(guessesLeft);


}

function pauseAudio() {
    soundPlayer1.stop();
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " Guesses Left: " + guessesLeft);

    document.getElementById("guessesLeftNum").innerHTML = guessesLeft;
    document.getElementById("underscores").innerHTML = undersAndSuccesses.join(" ");
    document.getElementById("lossesNum").innerHTML = wrongLetters.join(" ");

    //check if user won 
    if (lettersInWord.toString() == undersAndSuccesses.toString()) {
        winCount++;
        alert("You win!");

        document.getElementById("winsNum").innerHTML = winCount;
        var audio = new Audio('Assets/Wavs/MacPlus.wav');
        audio.play();



        pauseAudio();

        startGame();
    }

    //check if user lost

    else if (guessesLeft == 0) {
        lossCount++;
        alert("You Lose!")

        document.getElementById("lossesNum").innerHTML = lossCount;

        pauseAudio();

        startGame();
    }



}




//Main Processes 
//-----------------------------------------------------------
startGame();

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();


    console.log(letterGuessed);
}