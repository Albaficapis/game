function getComputerChoice(choice = ['rock','paper','scissor']) {
    console.log(choice[Math.floor((Math.random()*choice.length))]);
    
}

getComputerChoice();
