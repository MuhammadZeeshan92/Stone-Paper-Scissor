let optionPlayer1 = document.querySelectorAll(".options-player1");
let selectiomPlayer1 = document.querySelector(".selection-player1");
let optionPlayer2 = document.querySelectorAll(".options-player2");
let selectiomPlayer2 = document.querySelector(".selection-player2");
let continueButton = document.querySelector(".continue");
let points = document.querySelectorAll(".h30");
let apre = document.querySelector(".winner");
let newGame = document.querySelector(".new-game");


let pointsPlayer1 = 0;
let pointsPlayer2 = 0;

optionPlayer1.forEach((opt) => {
    opt.addEventListener('click', () => {
        let text = opt.innerText;
        selectiomPlayer1.innerText = text;
        selectiomPlayer1.classList.add("hide");
        selectiomPlayer2.classList.remove("hide");
        optionDisable1();
        setTimeout(unhide1, 1);
        if (selectiomPlayer2.innerText) {
            winnercheck();
        }
    });
});

let optionDisable1 = () => {
    optionPlayer1.forEach(option => option.disabled = true);
}

optionPlayer2.forEach((opt) => {
    opt.addEventListener('click', () => {
        let text = opt.innerText;
        selectiomPlayer2.innerText = text;
        selectiomPlayer2.classList.add("hide");
        selectiomPlayer1.classList.remove("hide");
        optionDisable2();
        setTimeout(unhide2, 1);
        if (selectiomPlayer1.innerText) {
            winnercheck();
        }
    });
});

let optionDisable2 = () => {
    optionPlayer2.forEach(option => option.disabled = true);
}

let unhide2 = () => {
    if (selectiomPlayer1.innerText) {
        selectiomPlayer2.classList.remove("hide");
    }
}

let unhide1 = () => {
    if (selectiomPlayer2.innerText) {
        selectiomPlayer1.classList.remove("hide");
    }
}

let winnercheck = () => {
    if ((selectiomPlayer1.innerText == "STONE" && selectiomPlayer2.innerText == "SCISSOR") || 
        (selectiomPlayer1.innerText == "PAPER" && selectiomPlayer2.innerText == "STONE") || 
        (selectiomPlayer1.innerText == "SCISSOR" && selectiomPlayer2.innerText == "PAPER")) {
        pointsPlayer1++;
    }
    if ((selectiomPlayer2.innerText == "STONE" && selectiomPlayer1.innerText == "SCISSOR") || 
        (selectiomPlayer2.innerText == "PAPER" && selectiomPlayer1.innerText == "STONE") || 
        (selectiomPlayer2.innerText == "SCISSOR" && selectiomPlayer1.innerText == "PAPER")) {
        pointsPlayer2++;
    }
    updatePointing2();
    winner();
}

let updatePointing2 = () => {
    updatePoints1();
    let el1 = document.createElement("h3");
    el1.innerText = `POINTS OF PLAYER 1 IS : ${pointsPlayer1}`;
    points[0].append(el1);

    let el2 = document.createElement("h3");
    el2.innerText = `POINTS OF PLAYER 2 IS : ${pointsPlayer2}`;
    points[1].append(el2);
}

let updatePoints1 = () => {
    points[0].innerText = "";
    points[1].innerText = "";
}

let winner = () => {
    if (pointsPlayer1 >= 5) {
        apre.classList.remove("hide1");
        let e = document.createElement("h1");
        e.innerText = "PLAYER 1 WINS!";
        apre.prepend(e);
        // Optionally disable buttons or add more functionality
    } else if (pointsPlayer2 >= 5) {
        apre.classList.remove("hide1");
        let e = document.createElement("h1");
        e.innerText = "PLAYER 2 WINS!";
        apre.prepend(e);
        // Optionally disable buttons or add more functionality
    }
}

let ButtonContinue = () => {
    if (pointsPlayer1 >= 5 || pointsPlayer2 >= 5) {
        // Reset scores or handle game over
        pointsPlayer1 = 0;
        pointsPlayer2 = 0;
        // apre.classList.remove("hide1");
        winner();
    } else {
        optionPlayer1.forEach(option => option.disabled = false);
        optionPlayer2.forEach(option => option.disabled = false);
        selectiomPlayer1.innerText = "";
        selectiomPlayer2.innerText = "";
        updatePointing2();
    }
}


continueButton.addEventListener('click', ButtonContinue);

function newgame(){
    // apre.classList.add("hide1");
    // apre.remove("h1");
}

newGame.addEventListener('click',()=>{
    apre.classList.add("hide1");
    apre.remove("h1");
});