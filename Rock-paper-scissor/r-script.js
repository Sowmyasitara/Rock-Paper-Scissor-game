let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#Comp-score");

const genCompChoice = () =>{   // for generating computer choice
    const options = ["Rock" , "Paper" , "Scissor"];
    //rock , paper , scissor
    const ranIndx = Math.floor(Math.random()*3);
    return options[ranIndx];
};
const drawGame = () => {   // if game was draw 
    msg.innerText= "Game was a Draw. Play Again. ";
    msg.style.backgroundColor = "blue";
};
const showWinner = (userWin, userChoice, compChoice) => {     // shows who is winner below
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Oh no! You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        
    }
};

const playGame = (userChoice) => {    // main game condition
    console.log("user choice = ", userChoice);
    //generate comp choice 
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        // Draw game 
        drawGame();
    }else{
        let userWin = true;
            if(userChoice === "Rock"){ // scissor, paper
                userWin = compChoice === "Paper" ? false : true;
            } else if(userChoice === "Paper"){ // rock , scissor
                userWin = compChoice === "Scissor" ? false : true;
            }else{ // rock ,paper
                userWin = compChoice === "Rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
        }
};


choices.forEach((choice) => {   // click condition for the choices
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});