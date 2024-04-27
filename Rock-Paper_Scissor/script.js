function getRandomOption(options) {
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}


const options = ['rock', 'paper', 'scissor'];
function play(value) {
    const randomValue = getRandomOption(options);
    document.getElementById('option').value="Computer chose "+randomValue;
    if(value=='rock'){
        if(randomValue=='rock'){
            document.getElementById('tie_audio').play();
            document.getElementById('result').value="Its a tie";
        }
        else if(randomValue=='paper'){
            document.getElementById('lose_audio').play();
            document.getElementById('result').value="You lost";
        }
        else{
            document.getElementById('win_audio').play();
            document.getElementById('result').value="You won";
        }
    }
    if(value=='paper'){
        if(randomValue=='paper'){
            document.getElementById('tie_audio').play();
            document.getElementById('result').value="Its a tie";
        }
        else if(randomValue=='scissor'){
            document.getElementById('lose_audio').play();
            document.getElementById('result').value="You lost";
        }
        else{
            document.getElementById('win_audio').play();
            document.getElementById('result').value="You won";
        }
    }
    if(value=='scissor'){
        if(randomValue=='scissor'){
            document.getElementById('tie_audio').play();
            document.getElementById('result').value="Its a tie";
        }
        else if(randomValue=='rock'){
            document.getElementById('lose_audio').play();
            document.getElementById('result').value="You lost";
        }
        else{
            document.getElementById('win_audio').play();
            document.getElementById('result').value="You won";
        }
    }
}
 