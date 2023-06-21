let color = "black";
let board = document.querySelector(".board");

board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for(let i = 0; i < 256; i++ ) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare)
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
}

function colorSquare() {
        this.style.backgroundColor = color;
}

function changeColor(choice){
    color = choice;
}

function resetBoard() { 
    let board = document. querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

