let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");


const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")



const genCompChoice =() => {
    const options = ["rock", "paer", "scissor"];
    const randIdx = Math.floor(Math.random () * 3);
    return options[randIdx];
};
const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again "
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green"

    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = " red"
    }

}


const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();

    }
    else {
        let userwin = true;
        if(userChoice === "rock"){
            compChoice === "paper" ? false : true ;
        }
        else if (userChoice === "paper"
        ) {
           userwin = compChoice === "scissor" ? false : true;
            
        }
        else {
           userwin = compChoice === "rock" ? false : true;
        }

        showWinner(userwin, userChoice, compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    }) 
})