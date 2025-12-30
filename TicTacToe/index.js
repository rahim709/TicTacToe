// Initializing Game Variables
console.log("Tic Tac Toe Started");
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
            (boxtext[e[0]].innerText !== "")) {
            
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Has Won! 🎉";
            isgameover = true;
            
            // Show celebration GIF
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

// Game Logic - Adding click listeners to boxes
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameover) {
            boxtext.innerText = turn;
            
            // Set different colors for X and 0
            boxtext.style.color = (turn === "X") ? "#bb86fc" : "#03dac6";
            
            checkWin();
            
            if (!isgameover) {
                turn = changeTurn();
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Reset Button functionality
document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})