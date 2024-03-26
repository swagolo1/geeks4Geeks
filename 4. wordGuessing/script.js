//Array of words
const words = ["java", "javascript", "python", "pascal", "ruby", "perl", "swift", "kotlin"];

//Getting random word from the list
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
console.log(selectedWord);

//To store the already guessed letters
let guessedList = [];

//for initial display word
let displayWord = "";
for( let i = 0; i < selectedWord.length; i++) displayWord += "_ ";
document.getElementById("displayWord").textContent = displayWord;

//Function to check Guessed letter
function guessLetter(){
    let inputElement = document.getElementById("letter-input");

    //check empty input
    if ( !inputElement.value){
        alert("Empty input box. Please add input letter");
        return;
    }

    let letter = inputElement.value.toLowerCase();

    //Clear the input field
    inputElement.value = "";

    //Check if the letter has already been guessed
    if( guessedList.includes(letter)){
        alert("You have already guessed that letter!");
        return;
    }

    //add the letter to the guessed letters array
    guessedList.push(letter);
    // console.log(guessedList);

    //Update the word display based on the guessed letters
    let updateDisplay = "";
    let allLettersGuessed = true;
    for ( let i = 0; i < selectedWord.length; i++){
        if (guessedList.includes(selectedWord[i])){
            updateDisplay += selectedWord[i] + "";
        }else {
            updateDisplay += "_ ";
            allLettersGuessed = false;
        }
    }
    document.getElementById("displayWord").textContent = updateDisplay;

    //check if all letters have been guessed
    if (allLettersGuessed){
        alert("Congrats! You guessed the word!")
    }
}