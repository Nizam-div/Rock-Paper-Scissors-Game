let userScore = 0;
let compScore = 0;
const buttonSound = document.querySelector('#clickSound');

const playSound = () => {
    clickSound.currentTime = 0;
    clickSound.play();
};


const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScoreValue = document.querySelector("#user-score");
const compScoreValue = document.querySelector("#comp-score");


const drawGame = () => {

    msg.innerText = "The Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "white";


}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreValue.innerText = userScore;
        msg.innerText = `You Winn!  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

        if (userScore > compScore) {
            userScoreValue.style.color = "green";
            compScoreValue.style.color = "red";
        } else if (userScore < compScore) {
            userScoreValue.style.color = "red";
            compScoreValue.style.color = "green";
        } else {
            // If scores are equal, reset colors to default (black)
            userScoreValue.style.color = "black";
            compScoreValue.style.color = "black";
        }
    } else {
        compScore++;
        compScoreValue.innerText = compScore;
        msg.innerText = `You lose!  ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScoreValue.style.color = "red"

    }
};
    // if (userScore > compScore){
    //     userScoreValue.innerText = "red";
    // }else{
    //     userScoreValue.style.color = "green";

    // };

    // if(compScore > userScore){
    //     compScoreValue.style.color = "red";
    // }else{
    //     compScoreValue.style.color = "green";

    // };

    


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];

};

const playGame = (userChoice) => {

    const compChoice = genCompChoice();


    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "scissors" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        playSound();

    });
});