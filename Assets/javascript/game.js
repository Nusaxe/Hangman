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
let randomNum = Math.floor(Math.random() * lorems.length);
let correctChoice = [];
let incorrectChoice = [];
let randomWord = lorems[randomNum];
let underscoreGroup = [];


//Working on the Dom 
let pageUnderscores = document.getElementsByClassName('underscores');

console.log(randomWord);

//Populate amount of underscores based on words.length
let createUnderscores = () => {
    for (let i = 0; i < (randomWord.length) / 2; i++) {
        underscoreGroup.push('_');
    }
    return underscoreGroup;
}



console.log(createUnderscores());
//Var which tracks what letter user checks
document.addEventListener('keypress', (event) => {
    let btnChoice = String.fromCharCode(event.keyCode);

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

//let guessesLeft = pageUnderscores.length + 3;
//console.log(guessesLeft);
pageUnderscores[0].innerHTML = createUnderscores().join(' ');
//Logic that checks if chosen word is correct
//If correct, push to "Correct Guess"
//If incorrect, push to "Incorrect Guess"
