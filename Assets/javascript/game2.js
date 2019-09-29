//Array of Lorem words
const lorems = ['Lorem', 'ipsum', 'dolor', 'sit',
    'amet', 'consectetur', 'adipiscing', 'elit', 'sed',
    'do', 'eiusmod', 'tempor', 'incididunt', 'ut',
    'labore', 'et', 'dolore', 'magna', 'aliqua',
    'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi',
    'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'Duis',
    'aute', 'irure', 'dolor', 'reprehenderit', 'in',
    'voluptate', 'velit', 'esse', 'cillum', 'dolore',
    'eu', 'fugiat', 'nulla', 'pariatur', 'Excepteur',
    'sint', 'occaecat', 'cupidatat', 'non', 'proident',
    'sunt', 'culpa', 'qui', 'officia', 'deserunt',
    'mollit', 'anim', 'id', 'est', 'laborum'];

//words are chosen randomly
var randomNum = Math.floor(Math.random() * lorems.length);
var correctChoice = [];
var incorrectChoice = [];
var randomWord = lorems[randomNum];
var underscoreGroup = [];


//Working on the Dom 
var pageUnderscores = document.getElementsByClassName('underscores');

console.log(randomWord);

var numUnderscores = randomWord.length;

//Populate amount of underscores based on words.length
var createUnderscores = () => {
    var newArr = [];

    for (var i = 0; i < numUnderscores; i++) {
        newArr.push('_');
    }
    console.log(newArr)
    return newArr;
}



console.log(createUnderscores());
//Var which tracks what letter user checks
document.addEventListener('keypress', (event) => {
    var btnChoice = String.fromCharCode(event.keyCode);

    //if user guess is correct 
    if (randomWord.indexOf(btnChoice) > -1) {
        //send to correctChoice array 
        correctChoice.push(btnChoice);

        //replace underscores with correct letters
        underscoreGroup[randomWord.indexOf(btnChoice)] = btnChoice;
        pageUnderscores.innerHTML = underscoreGroup.join('');
        //check to see if randomWord matches btnChoice
        if (underscoreGroup.join('') == randomWord) {
            alert('Vincere te! (You Win)')
        }
        console.log(underscoreGroup);
        console.log(correctChoice);
    }
    else {
        incorrectChoice.push(btnChoice);
        console.log(incorrectChoice)
    }
});

var guessesLeft = pageUnderscores.length + 3;
//console.log(guessesLeft);
console.log(createUnderscores())
pageUnderscores[0].innerHTML = createUnderscores().join(' ');
//Logic that checks if chosen word is correct
//If correct, push to "Correct Guess"
//If incorrect, push to "Incorrect Guess"
