const ComputerPick = Math.floor(Math.random() * 21); 


const guessfield = document.getElementById('guessfield')
const result = document.getElementById('result')

let attempts = 0;

function guessGame(){
    const userGuess = parseInt(guessfield.value);

    attempts++;

    if (userGuess === ComputerPick){
        result.textContent = `Congratulations, you have guessed correctly with an attempt of ${attempts}`;
        result.style.color = 'green'
    }
    else if(userGuess < 1){
        result.textContent = 'Invalid Input. It must be between 1 and 20'
        result.style.color = 'red'
    }

    else if(userGuess < ComputerPick){
        result.textContent = 'too low fool. Try Again.'
        result.style.color = 'red'
    }
    
    else if(userGuess > 20){
        result.textContent = 'Invalid Input. It must be between 1 and 20'
        result.style.color = 'red'
    }

    else if(userGuess > ComputerPick){
        result.textContent = 'too high fool. Try Again.'
        result.style.color = 'red'
    }

    else{
        result.textContent = `Guess not correct, try again.`
        result.style.color = 'red'
    }
}
    userGuess == '';
    guessfield.focus();
