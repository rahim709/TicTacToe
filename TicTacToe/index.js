// Game initialization
console.log("Tic Tac Toe Started");
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check for a win or a draw
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    // 1. Check for Winner
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
            (boxtext[e[0]].innerText !== "")) {
            
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Has Won! 🎉";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    });

    // 2. Check for Draw (only if no one has won yet)
    if (!isgameover) {
        let allFilled = true;
        Array.from(boxtext).forEach(element => {
            if (element.innerText === '') {
                allFilled = false;
            }
        });

        if (allFilled) {
            document.querySelector('.info').innerText = "It's a Draw! 🤝";
            isgameover = true;
        }
    }
}

// Click listener logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameover) {
            boxtext.innerText = turn;
            boxtext.style.color = (turn === "X") ? "#bb86fc" : "#03dac6";
            
            checkWin(); // This now checks for both Win and Draw
            
            if (!isgameover) {
                turn = changeTurn();
                document.querySelector('.info').innerText = "Turn for " + turn;
            }
        }
    })
})

// Reset button logic
document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.querySelector('.info').innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})